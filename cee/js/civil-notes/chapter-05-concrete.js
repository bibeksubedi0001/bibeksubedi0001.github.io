(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0502: {
            code: "ACiE0502",
            questionCount: 60,
            blocks: [
                {
                    id: "concrete-as-a-material-system",
                    title: "Concrete as a material system, not just a recipe",
                    html: "<p><strong>Concrete technology connects materials, proportioning, production, fresh behaviour, hardened properties and quality control.</strong> A successful mix must be placeable and compactable, develop the specified strength, and remain suitable for its exposure. Studying compressive strength alone does not cover the official concrete-technology scope.</p>" +
                        "<p>Ordinary cement concrete contains cement, water, fine aggregate and coarse aggregate. Hydration turns the cement-water paste into a binding matrix around the particles. Concrete is a <em>composite</em>, not a chemically homogeneous substance; uniform mixing means that representative portions have consistent composition, not that aggregate and paste become one material. Supplementary cementitious materials, chemical admixtures and air may also be deliberately included.</p>" +
                        "<table><thead><tr><th scope='col'>Classification basis</th><th scope='col'>What the description establishes</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Structural action</th><td>Plain concrete, reinforced concrete and prestressed concrete describe different ways of carrying loads and controlling tension.</td></tr>" +
                        "<tr><th scope='row'>Density</th><td>Normal-weight, lightweight and heavyweight describe mass per unit volume; reinforcement alone does not define this classification.</td></tr>" +
                        "<tr><th scope='row'>Strength grade</th><td>A specified characteristic compressive strength under a stated test and age convention, not an ingredient ratio.</td></tr></tbody></table>" +
                        "<p>Plain cement concrete is comparatively strong in <strong>compression</strong> and weak in tension. It still has finite tensile and shear resistance; these are not identically zero or universal fixed percentages of compression strength. Cracking, restraint and load path matter. Reinforcement provides designed resistance across cracks, but its presence does not by itself make a poorly proportioned concrete durable.</p>" +
                        "<p><small>IS provisions below are labelled by edition and clause. Original IS 456:2000 text, its specifically identified Amendment No. 3 of August 2007, and IS 10262:2009 are teaching references, not an assertion of the latest standard or automatic project acceptance in Nepal. Added examples and official-scope extensions are identified separately.</small></p>",
                    sources: [
                        { id: "DESI787-00226", set: 1, question: 32 },
                        { id: "DESI787-00227", set: 25, question: 26 },
                        { id: "DESI787-00228", set: 25, question: 27 },
                        { id: "DESI787-00237", set: 26, question: 27 },
                        { id: "DESI787-00269", set: 29, question: 28 }
                    ]
                },
                {
                    id: "concrete-paste-mortar-and-grout",
                    title: "Cement paste, mortar, concrete and grout",
                    html: "<p>The material name should identify both its constituents and its intended function. <strong>Cement paste</strong> is cement and water; <strong>cement mortar</strong> adds fine aggregate; conventional concrete also contains coarse aggregate. Changing the particle sizes changes the openings through which the material can flow and the volume of paste required to bind it.</p>" +
                        "<p><strong>Grout is a material intended to fill spaces by flowing or being injected into them.</strong> A neat cement grout uses cement and water, often with specified admixtures. A fine-aggregate or sanded cementitious grout contains suitable fine aggregate as well. Thus the bank's cement-and-water choice describes <em>neat cement grout</em>, not every grout. Sand may prevent penetration into a very narrow crack but can be suitable for a larger void; adding sand does not universally disqualify a material from being grout.</p>" +
                        "<ul><li>Match particle size and fluidity to the opening, duct or joint being filled.</li><li>Check cohesion, bleeding and volume stability as well as the ability to flow.</li><li>Control the water content: making grout arbitrarily thin with water can cause settlement, bleed channels and weak hardened material.</li><li>Use the specified grout system and its verified procedure for the particular application; an ordinary concrete nominal mix is not a grout specification.</li></ul>",
                    sources: [{ id: "DESI787-00008", set: 2, question: 32 }]
                },
                {
                    id: "concrete-aggregate-volume-and-density",
                    title: "Aggregate volume, particle density and concrete density",
                    html: "<p>Aggregates normally occupy most of the volume of ordinary concrete. The bank uses estimates such as <strong>60–75%</strong> and <strong>70–75% by volume</strong>. These describe typical mixes, not the identity of concrete or a compulsory percentage. Paste demand, grading, air content and the intended type of concrete change the actual proportion.</p>" +
                        "<p>Sound natural gravel, crushed rock and ordinary sand are commonly <strong>normal-weight aggregates</strong>. Their particle relative density is often around 2.5–2.7, but the rock source must be tested. Neither a familiar rock name nor the word gravel certifies grading, cleanliness, strength or durability.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Particle relative density G</th><td>Ratio of the relevant particle density to water density; dimensionless and dependent on the stated dry/SSD test basis.</td></tr>" +
                        "<tr><th scope='row'>Bulk density of a stockpile</th><td>Mass divided by occupied bulk volume, including spaces between particles; affected by packing and moisture.</td></tr>" +
                        "<tr><th scope='row'>Concrete density</th><td>Mass of the complete mix divided by its yield, in kg/m<sup>3</sup>; it includes paste, aggregate and air-volume effects.</td></tr></tbody></table>" +
                        "<p><strong>Illustrative added volume calculation:</strong> 1855 kg of aggregate with a compatible particle-density basis of 2650 kg/m<sup>3</sup> occupies 1855/2650 = <strong>0.70 m<sup>3</sup></strong>. If the measured concrete yield is 1.00 m<sup>3</sup>, its aggregate volume fraction is 70%. This does not say that aggregate is 70% of the <em>mass</em>, nor that its loose stockpile volume is 0.70 m<sup>3</sup>.</p>",
                    sources: [
                        { id: "BASI674-00148", set: 1, question: 4 },
                        { id: "BASI674-00149", set: 13, question: 2 },
                        { id: "DESI787-00232", set: 25, question: 31 },
                        { id: "TRAN808-00159", set: 16, question: 81 }
                    ]
                },
                {
                    id: "concrete-aggregate-grading-shape-and-size",
                    title: "Grading, shape and usable maximum aggregate size",
                    html: "<p>The <strong>4.75 mm sieve</strong> is the conventional fine/coarse aggregate dividing sieve in the terminology used by this bank. Fine aggregate predominantly <strong>passes</strong> it; coarse aggregate is predominantly retained. A grading specification may allow limited overlap, so the entire sieve distribution still matters. Retained and passing are opposite observations, not interchangeable descriptions.</p>" +
                        "<p>Well-balanced size fractions reduce interparticle voids and the paste needed for coating and mobility. Too little suitable fine material or paste, excessive coarse material, angularity or an unbalanced grading can make concrete harsh. An excess of middle-sized particles is not a unique general diagnosis without the rest of the grading and paste content.</p>" +
                        "<table><thead><tr><th scope='col'>Change</th><th scope='col'>Conditional effect and design check</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>More rounded particles</th><td>Usually reduce interparticle friction and water demand relative to comparable angular particles. Compare similar grading, paste content and placement conditions.</td></tr>" +
                        "<tr><th scope='row'>Larger nominal maximum size</th><td>Can reduce total coating surface and water demand, but may obstruct flow through reinforcement or leave unfilled pockets. Bigger is not indefinitely better.</td></tr>" +
                        "<tr><th scope='row'>Flaky or elongated particles</th><td>Can impair packing and mobility; shape requirements and the complete grading must be checked rather than compensated for with uncontrolled water.</td></tr></tbody></table>" +
                        "<p><strong>IS 456:2000, clause 5.3.3:</strong> nominal maximum aggregate size is limited to one-quarter of the minimum member thickness and must permit satisfactory placement. Its 20 mm guidance suits most work; it is <em>not a hard limit for every slab or lintel</em>. Where flow is unrestricted, 40 mm or larger aggregate may be permitted. Heavily reinforced members also need the clearance and cover checks of clause 5.3.3.1.</p>" +
                        "<p><strong>Illustrative added geometry check:</strong> a 100 mm minimum thickness gives a thickness-based ceiling of 100/4 = <strong>25 mm</strong>. That calculation alone does not approve 20 mm aggregate: bar clearances, cover, the placement route and compaction access can require a smaller size.</p>",
                    sources: [
                        { id: "SOIL136-00011", set: 2, question: 45 },
                        { id: "DESI787-00234", set: 25, question: 33 },
                        { id: "DESI787-00267", set: 29, question: 26 },
                        { id: "DESI787-00272", set: 29, question: 31 },
                        { id: "TRAN808-00138", set: 14, question: 82 },
                        { id: "BASI674-00284", set: 23, question: 1 },
                        { id: "TRAN808-00134", set: 13, question: 89 }
                    ]
                },
                {
                    id: "concrete-aggregate-moisture-reference-states",
                    title: "SSD is a reference condition, not a delivery requirement",
                    html: "<p><strong>Saturated surface dry, or SSD,</strong> means that the aggregate's accessible pores are filled to the specified test condition while its external surface has no free water film. The water inside those pores is not the same as free surface water available to the paste. A merely dry-looking particle may still be below SSD and absorb mixing water.</p>" +
                        "<table><thead><tr><th scope='col'>Idealised moisture state</th><th scope='col'>Pores and surface</th><th scope='col'>Effect relative to SSD accounting</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Oven dry</th><td>Evaporable pore water removed by the test procedure; dry surface.</td><td>Has an absorption demand.</td></tr>" +
                        "<tr><th scope='row'>Air dry</th><td>Partly filled pores; surface can look dry.</td><td>May absorb additional water.</td></tr>" +
                        "<tr><th scope='row'>SSD</th><td>Filled accessible pores; no surface film.</td><td>Reference state for the stated proportions.</td></tr>" +
                        "<tr><th scope='row'>Wet above SSD</th><td>Filled pores plus surface water.</td><td>Contributes free water to the mix.</td></tr></tbody></table>" +
                        "<p>Mix proportions may be expressed on an SSD basis even though aggregate arrives wetter or drier. Measure actual moisture and absorption, then correct <strong>both aggregate batch mass and added water</strong>. It is unnecessary to pretend that every delivery has physically been brought to SSD. IS 10262:2009, Annex A-9's note, explicitly explains moisture and aggregate-mass adjustments when the aggregate is not at that reference condition.</p>",
                    sources: [
                        { id: "DESI787-00011", set: 3, question: 25 },
                        { id: "SOIL136-00006", set: 2, question: 40 }
                    ]
                },
                {
                    id: "concrete-free-water-and-moisture-correction",
                    title: "Free water and a worked batch-moisture correction",
                    html: "<p>The water–cement ratio is a <strong>mass ratio</strong>: r = W<sub>free</sub>/C, with W<sub>free</sub> and cement mass C in the same units. It is not water volume divided by cement volume. For ordinary water, 1 kg is approximately 1 L, but cement's loose bulk volume cannot replace its mass in this ratio.</p>" +
                        "<p>Let A be absorption and M actual total moisture, both expressed as fractions of oven-dry aggregate mass. For specified SSD mass m<sub>SSD</sub>, <strong>m<sub>OD</sub> = m<sub>SSD</sub>/(1 + A)</strong>, actual batch mass <strong>m<sub>batch</sub> = m<sub>OD</sub>(1 + M)</strong>, and the signed free-water contribution is <strong>ΔW = (M − A)m<sub>OD</sub></strong>. A negative ΔW represents absorption demand. Thus <strong>W<sub>add</sub> = W<sub>free,target</sub> − ΣΔW</strong>, also allowing for other measured water contributions where applicable.</p>" +
                        "<p><strong>Illustrative added example, not an approved mix:</strong> take C = 50 kg and a target free water of 25 kg, giving r = 0.50. Assume the stated absorption demand is taken up during mixing.</p>" +
                        "<table><thead><tr><th scope='col'>Aggregate</th><th scope='col'>SSD mass; A; M</th><th scope='col'>Dry and batch masses</th><th scope='col'>ΔW</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fine</th><td>102 kg; 2%; 5%</td><td>102/1.02 = 100 kg dry; 100 × 1.05 = 105 kg batched.</td><td>(0.05 − 0.02) × 100 = <strong>+3 kg</strong>.</td></tr>" +
                        "<tr><th scope='row'>Coarse</th><td>202 kg; 1%; 0%</td><td>202/1.01 = 200 kg dry; 200 kg batched.</td><td>(0 − 0.01) × 200 = <strong>−2 kg</strong>.</td></tr></tbody></table>" +
                        "<p>Add <strong>25 − 3 − (−2) = 24 kg ≈ 24 L</strong>. Check: 24 + 3 − 2 = <strong>25 kg free water</strong>, hence 25/50 = 0.50. Adding the full 25 L without correction would give 26 kg free water and r = 0.52 under these assumptions. The example illustrates accounting only; actual absorption rate, stockpile variability and water in liquid admixtures require measurement.</p>",
                    sources: [
                        { id: "DESI787-00231", set: 25, question: 30 },
                        { id: "DESI787-00011", set: 3, question: 25 },
                        { id: "SOIL136-00006", set: 2, question: 40 }
                    ]
                },
                {
                    id: "concrete-cement-storage-and-water-quality",
                    title: "Protect cement and verify mixing-water suitability",
                    html: "<p>Cement must be protected from moisture before use. A raised dry platform, separation from damp floors and walls, weather protection and identifiable stock rotation reduce premature hydration and contamination. A platform alone is insufficient if the roof leaks or humid air repeatedly wets the bags. Inspect suspect or long-stored cement and follow the applicable testing and acceptance procedure rather than breaking up lumps and assuming the original quality remains.</p>" +
                        "<p><strong>IS 456:2000, clause 5.4:</strong> potable water is <em>generally satisfactory</em> for concrete. This is not a demand for distilled water, nor a statement that every alternative water source is prohibited. A doubtful source needs the prescribed suitability checks, including its effects on setting and strength. Water can look clear while containing dissolved substances that matter to hydration, durability or embedded steel.</p>" +
                        "<p>Oil contamination may interfere with paste–aggregate bonding or hydration. The actual effect depends on oil type, concentration and the materials; there is no universal percentage strength loss established by the bank. Salt-laden water is particularly problematic with reinforcement because chlorides can promote corrosion. Do not transfer a generic impurity warning into an invented chemical limit or an approval of an untested supply.</p>" +
                        "<p><em>Official-syllabus extension: NS document identity.</em> The NBSM catalogue lists <strong>NS 49:2041, Ordinary Portland Cement, with Amendment 2076</strong>, and <strong>NS 572:2076, Ordinary Portland Cement 43 Grade and 53 Grade</strong>; these NS dates use B.S. years. These verified catalogue titles identify cement standards, not a concrete mix design. A cement grade or certificate does not guarantee the concrete's M grade. Obtain the applicable controlled text, amendments and project specification before deciding compliance; the catalogue alone does not supply its full technical requirements.</p>",
                    sources: [
                        { id: "DESI787-00013", set: 3, question: 27 },
                        { id: "DESI787-00014", set: 3, question: 28 },
                        { id: "DESI787-00233", set: 25, question: 32 }
                    ]
                },
                {
                    id: "concrete-water-cement-ratio-and-durability",
                    title: "Why water–cement ratio matters, and what it cannot guarantee",
                    html: "<p>For comparable materials, air content, test age and curing, with <strong>adequate full compaction</strong>, increasing the free water–cement ratio generally reduces compressive strength. More initial water relative to cement creates greater potential capillary porosity in the hydrated paste. The relationship is an empirical material relationship, not a universal strength number obtained from r alone.</p>" +
                        "<p>The compaction condition is essential. A mix made so dry that it cannot surround reinforcement or expel entrapped air may be weaker despite a lower r. Conversely, a suitable water-reducing admixture can provide the necessary mobility without raising r. IS 10262:2009, clauses 4.1 and 4.1.1, call for a relationship appropriate to the materials and adoption of the <strong>lower ratio required by strength and durability</strong>.</p>" +
                        "<ul><li><strong>Permeability:</strong> lower r usually reduces connected capillary porosity when consolidation and curing are satisfactory. Cracks and poor construction can still create easy transport paths.</li><li><strong>Freezing exposure:</strong> low r alone does not guarantee frost resistance. An appropriate intentionally entrained air-void system, saturation conditions, aggregate quality and curing also matter.</li><li><strong>Volume change:</strong> lower r does not universally reduce every form of shrinkage. Self-desiccation and autogenous shrinkage can become important at low ratios.</li><li><strong>Strength versus service performance:</strong> a high cube strength is useful evidence but does not prove that cover, cracking, permeability or exposure requirements have been satisfied.</li></ul>",
                    sources: [
                        { id: "DESI787-00009", set: 2, question: 33 },
                        { id: "DESI787-00274", set: 29, question: 33 }
                    ]
                },
                {
                    id: "concrete-plasticizers-and-workability-control",
                    title: "Plasticizers: choose what is held constant",
                    html: "<p>A plasticizer or water-reducing admixture improves dispersion of cement particles. Its benefit must be described with a controlled comparison: <strong>less water for a specified workability</strong>, or <strong>greater workability at the same water content</strong>. These are different design uses of the admixture, not permission to add water until the mix appears fluid.</p>" +
                        "<p><strong>Illustrative added trial:</strong> an initial trial contains 350 kg/m<sup>3</sup> cement and 175 kg/m<sup>3</sup> free water, so r = 0.50. If a compatible admixture actually achieves the required workability at 157.5 kg/m<sup>3</sup> free water with the cement unchanged, r becomes <strong>157.5/350 = 0.45</strong>. The water reduction is (175 − 157.5)/175 = <strong>10%</strong>. This is a hypothetical measured trial outcome, not a guaranteed reduction for every product.</p>" +
                        "<p>Trials must check dosage, mixing sequence, workability retention, setting, bleeding, air content and strength with the actual binder and aggregates. More admixture is not automatically better. If the selected strategy instead keeps water and cement unchanged and increases flow, a strength increase cannot simply be assumed. Water carried in the admixture solution must be included where the governing accounting procedure requires it.</p>",
                    sources: [{ id: "DESI787-00242", set: 26, question: 32 }]
                },
                {
                    id: "concrete-fresh-consistency-tests",
                    title: "Workability, consistency and selection of a fresh-concrete test",
                    html: "<p><strong>Workability</strong> concerns the ease of mixing, transporting, placing, compacting and finishing a particular concrete without unacceptable segregation. <strong>Consistency</strong> is one aspect of this behaviour. A slump reading is therefore a useful consistency and batch-uniformity indicator, not a complete measurement of every fresh property or a direct determination of water content.</p>" +
                        "<table><thead><tr><th scope='col'>Test</th><th scope='col'>Useful interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Slump</th><td>Measures vertical subsidence, normally reported in mm, under the prescribed cone procedure. Appropriate for many cohesive mixes of intermediate consistency.</td></tr>" +
                        "<tr><th scope='row'>Compacting factor</th><td>Compares partly compacted with fully compacted density or mass for the same volume under a defined procedure; useful for relatively stiff mixes.</td></tr>" +
                        "<tr><th scope='row'>Vebe</th><td>Uses remoulding time under specified vibration, in seconds; useful for low-workability concrete where slump is insensitive.</td></tr>" +
                        "<tr><th scope='row'>Flow table</th><td>Assesses spread under a specified procedure and is useful for suitable rich, highly workable mixes. Richness alone does not determine test suitability.</td></tr></tbody></table>" +
                        "<p>A true slump, shear slump and collapse do not convey the same information. Record abnormal behaviour and follow the test method rather than accepting any numerical height as equivalent. Two mixes with equal slump can differ in cohesion, segregation resistance and ability to pass through a congested cage.</p>" +
                        "<p>The bank's 7.5 cm equals <strong>75 mm</strong>, but it is <em>not a universal upper slump limit for mechanically vibrated concrete</em>. Required consistency depends on the member, transport method, reinforcement, admixtures and compaction equipment. A properly designed cohesive high-slump mix is not automatically defective merely because vibration is used.</p>",
                    sources: [
                        { id: "DESI787-00010", set: 2, question: 34 },
                        { id: "DESI787-00016", set: 3, question: 30 },
                        { id: "DESI787-00017", set: 3, question: 31 },
                        { id: "DESI787-00019", set: 3, question: 33 }
                    ]
                },
                {
                    id: "concrete-segregation-bleeding-and-compaction",
                    title: "Keep the mix uniform while removing entrapped air",
                    html: "<p><strong>Segregation</strong> is separation of concrete constituents, for example coarse particles separating from mortar during handling or placement. <strong>Bleeding</strong> is upward movement of water as the solid particles settle. Bleeding is a related loss of stability, not a synonym for every form of segregation, and neither is the time-dependent hardened deformation called creep.</p>" +
                        "<p>Segregation can create mortar-deficient pockets, honeycombing, porous layers and a weak surface. These defects are not diagnostic proof of one cause: inadequate compaction, leaking forms, finishing errors and poor curing can produce overlapping symptoms. Examine the mix and the placing process together.</p>" +
                        "<ol><li>Use suitable grading, paste volume and cohesion; do not correct harshness merely by adding uncontrolled water.</li><li>Place concrete near its final position, avoiding handling that separates coarse aggregate from mortar.</li><li>Compact in a planned sequence that reaches corners and reinforcement zones; a vibrator should consolidate the mix, not drag it long distances.</li><li>Avoid insufficient consolidation and excessive vibration that destabilises a susceptible mix. Check the resulting surface and the actual equipment performance.</li></ol>" +
                        "<p>Compaction primarily removes unwanted <strong>entrapped air</strong>. Small, deliberately <strong>entrained</strong> air voids may be required for freezing exposure; removing all air is not the objective. The strength improvement depends on the original void content and the resulting consolidation, so <strong>15–20% is not a universal gain</strong>. Do not use that percentage as a substitute for strength testing.</p>",
                    sources: [
                        { id: "DESI787-00264", set: 28, question: 33 },
                        { id: "DESI787-00266", set: 29, question: 25 },
                        { id: "DESI787-00271", set: 29, question: 30 }
                    ]
                },
                {
                    id: "concrete-batching-and-mixer-output",
                    title: "Batch control and honest mixer-output calculations",
                    html: "<p>Batching controls quantities; mixing distributes them uniformly. Weighing ingredients, measuring water and correcting aggregate moisture are different controls from running the mixer for a selected duration. A visually uniform batch does not establish that its proportions or free water–cement ratio are correct.</p>" +
                        "<p>For a repeated batch operation, use <strong>number of batches = available effective minutes / cycle minutes</strong>, then multiply by the <em>actual concrete yield per batch</em>. Distinguish effective operating time from the full shift and concrete output capacity from gross drum volume. If charging or discharging is excluded from a quoted mixing time, the complete cycle may be longer.</p>" +
                        "<p><strong>Bank calculation:</strong> taking the stated 150 L as output per batch and 3 minutes as the complete batch cycle, 7 effective hours = 420 minutes. Hence 420/3 = <strong>140 batches</strong>, giving 140 × 150 = <strong>21000 L = 21 m<sup>3</sup></strong>. This result is not among the listed options.</p>" +
                        "<p>The stored 18900 L follows only after multiplying by an additional efficiency η = 0.90: 21000 × 0.90 = 18900 L. <strong>That 90% is not supplied.</strong> Since the question already calls the seven hours effective, applying another allowance for the same losses can double-count downtime. An efficiency factor is legitimate only when its definition and the time basis justify it; no numerical loss should be invented to reach an option.</p>",
                    sources: [{ id: "DESI787-00020", set: 3, question: 34 }]
                },
                {
                    id: "concrete-finishing-sequence",
                    title: "Screeding, floating and trowelling have different jobs",
                    html: "<p>Finishing starts from properly placed and compacted concrete. It cannot repair internal honeycombing or turn a segregated batch into sound material. Choose the required texture and flatness before selecting the finishing operation; a smooth steel-trowelled floor is only one possible finish.</p>" +
                        "<table><thead><tr><th scope='col'>Operation</th><th scope='col'>Main purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Screeding or strike-off</th><td>Removes excess concrete and establishes the required bulk level and profile using guides or another controlled reference.</td></tr>" +
                        "<tr><th scope='row'>Floating</th><td>Works the surface after strike-off to reduce minor high and low spots, embed near-surface coarse particles and prepare the specified finish.</td></tr>" +
                        "<tr><th scope='row'>Trowelling</th><td>Produces a smoother, denser surface when the concrete has stiffened sufficiently and the bleed-water sheen has gone.</td></tr></tbody></table>" +
                        "<p>The bank's <em>Screening</em> appears to be a spelling error for <strong>screeding</strong>; actual aggregate screening is a different operation. Its floating question concerns minor surface correction, not every possible levelling task. Its trowelling answer describes a common final operation for a smooth finish, not the mandatory final treatment of all concrete surfaces.</p>" +
                        "<p>Do not work bleed water back into the surface or sprinkle dry cement to hide it. Those practices can create a weak surface layer. Textured pavements and other specified finishes may require a different final treatment, followed by prompt protection and curing appropriate to the finished surface.</p>",
                    sources: [
                        { id: "DESI787-00245", set: 27, question: 25 },
                        { id: "DESI787-00246", set: 1, question: 33 }
                    ]
                },
                {
                    id: "concrete-curing-and-strength-age",
                    title: "Curing supports hydration; 28 days is a reference age",
                    html: "<p><strong>Curing maintains suitable moisture and temperature for hydration and protects young concrete.</strong> It is not simply waiting for a fixed number of days. Surface evaporation, wind, ambient temperature, member geometry, binder composition and the required early-age properties influence the curing method and duration.</p>" +
                        "<p>Continuous wet coverings, ponding or a suitable approved moisture-retaining system can limit water loss. Protection must start early enough to prevent damage, and interruptions matter. Do not assume that a surface which appears hard proves adequate strength throughout the member. Standard-cured test specimens and concrete exposed to site weather can have different strength histories.</p>" +
                        "<p><strong>IS 456:2000, clause 6.2.1, recognises strength development with age.</strong> Twenty-eight days is the usual reference age for the specified characteristic compressive strength. Hydration and strength gain may continue afterwards. The bank's 100% wording must not be read as complete hydration, ultimate attainable strength or a promise that every batch passes at that age.</p>" +
                        "<p>Likewise, <strong>40% at three days is not guaranteed</strong>. A fast-strength-gaining cement and a slower binder under different temperatures will not follow an identical percentage curve. Use measured results and the applicable construction-strength criteria. A strength-age estimate is not, by itself, authority to end curing, remove load-bearing props or apply construction loads.</p>",
                    sources: [
                        { id: "DESI787-00262", set: 28, question: 32 },
                        { id: "DESI787-00263", set: 1, question: 34 }
                    ]
                },
                {
                    id: "concrete-strength-based-formwork-release",
                    title: "Formwork removal: distinguish side forms, soffits and props",
                    html: "<p><strong>IS 456:2000, clause 11.3, makes adequate concrete strength the governing consideration for stripping.</strong> Evaluate the stresses and loads at removal, possible damage and the remaining support system. A convenient age or the ability of a column to stand upright is not the complete safety check.</p>" +
                        "<p>The following are selected teaching anchors from the <strong>unnumbered schedule in clause 11.3.1</strong>, under its normal conditions: ordinary Portland cement, adequate curing and ambient temperature not below <strong>15°C</strong>. They are not unconditional release instructions for colder weather, other binders or different construction loading.</p>" +
                        "<table><thead><tr><th scope='col'>What is removed</th><th scope='col'>Conditional period and essential distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vertical forms to walls, columns and beam sides</th><td><strong>16–24 hours</strong>; this is not removal of load-bearing soffit support.</td></tr>" +
                        "<tr><th scope='row'>Beam soffit formwork</th><td><strong>7 days</strong>, with props re-fixed immediately after the formwork is removed.</td></tr>" +
                        "<tr><th scope='row'>Beam/arch props, span ≤6 m</th><td><strong>14 days</strong> under the stated conditions.</td></tr>" +
                        "<tr><th scope='row'>Beam/arch props, span &gt;6 m</th><td><strong>21 days</strong> under the stated conditions.</td></tr></tbody></table>" +
                        "<p>Removing soffit panels while maintaining the specified propping arrangement is a different operation from releasing the beam to span without props. Longer-span <em>prop</em> periods must not be substituted as an explanation for the seven-day soffit entry. Table 11 in IS 456:2000 concerns strength acceptance, not this stripping schedule. Use the specified stripping/propping plan and strength evidence for actual work.</p>",
                    sources: [
                        { id: "DESI787-00043", set: 6, question: 27 },
                        { id: "DESI787-00235", set: 26, question: 25 },
                        { id: "DESI787-00259", set: 28, question: 29 }
                    ]
                },
                {
                    id: "concrete-grades-and-characteristic-strength",
                    title: "Grade, characteristic strength and the minimum RCC grade",
                    html: "<p>In the IS 456:2000 convention, <strong>M25 denotes f<sub>ck</sub> = 25 N/mm<sup>2</sup></strong> for the specified 150 mm cube test at 28 days. One N/mm<sup>2</sup> equals one MPa. Characteristic strength is the lower-fractile strength below which <strong>not more than 5% of results are expected to fall</strong>; it is not the mean of the production population or an assertion that every individual cube equals the grade number.</p>" +
                        "<p>The following summarises the group boundaries in the <strong>original IS 456:2000 Table 2</strong>. It is deliberately labelled by that original table, not offered as an unverified current-edition classification.</p>" +
                        "<table><thead><tr><th scope='col'>Original group</th><th scope='col'>Listed grades</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Ordinary</th><td>M10, M15 and M20.</td></tr>" +
                        "<tr><th scope='row'>Standard</th><td>M25 through M55, in 5 MPa steps.</td></tr>" +
                        "<tr><th scope='row'>High-strength</th><td>M60 through M80, in 5 MPa steps.</td></tr></tbody></table>" +
                        "<p>High-strength classification is based on specified <strong>compressive strength</strong>, not merely the use of good aggregates. It also does not imply that every high-performance requirement has been met.</p>" +
                        "<p><strong>IS 456:2000, clause 6.1.2 and Table 5:</strong> the baseline minimum grade for reinforced concrete in <strong>mild exposure is M20</strong>. The exposure provisions of clause 8.2.4.1/Table 5 can require a higher grade and impose other durability requirements. Thus an RCC roof is not automatically specified completely by saying M20; exposure, structural design and construction conditions still matter. M20 is a strength designation, not a guaranteed nominal proportion.</p>",
                    sources: [
                        { id: "DESI787-00012", set: 3, question: 26 },
                        { id: "DESI787-00090", set: 11, question: 27 },
                        { id: "DESI787-00240", set: 26, question: 30 },
                        { id: "DESI787-00281", set: 30, question: 31 }
                    ]
                },
                {
                    id: "concrete-nominal-mix-and-water-limits",
                    title: "Reconcile the nominal-mix table with durability limits",
                    html: "<p>A nominal proportion is a prescribed batching convention; a designed mix is proportioned and tested to meet specified performance with actual materials. The familiar <strong>1:1.5:3</strong> shorthand is often used as a nominal volume proportion, but its basis must be stated. It does <strong>not guarantee M20 strength</strong>, and the bank's claim that IS 456:2000 universally prescribes it <em>by weight</em> is not supported by Table 9. Loose volume, moisture bulking and mass are different quantities.</p>" +
                        "<p><strong>IS 456:2000, clause 9.3/Table 9:</strong> the M20 nominal-mix entry gives a maximum of <strong>250 kg dry combined fine and coarse aggregates</strong> and <strong>30 L water per 50 kg cement</strong>. It is not a universal fixed division of that aggregate mass into sand and stone. Other requirements remain applicable.</p>" +
                        "<p><strong>Durability check for mild-exposure RCC, Table 5:</strong> maximum free r = 0.55 gives W<sub>free,max</sub> = 0.55 × 50 = <strong>27.5 kg ≈ 27.5 L</strong> per 50 kg cement. Thirty litres of <em>free</em> water would give 30/50 = <strong>0.60</strong>, which exceeds 0.55. Even a listed 28 L is not a compliant rounding of a 27.5 L upper limit.</p>" +
                        "<p><strong>Amendment No. 3, August 2007, adds Table 9 Note 2</strong> to clarify that durability requirements may necessitate less water. Consequently, the bank's 30 L can be recognised as the nominal-table quantity, but its explanation that this is close enough to the durability limit is wrong. Apply the more restrictive applicable requirement, account for aggregate moisture, and achieve workability through an appropriate mix rather than exceeding the cap.</p>",
                    sources: [
                        { id: "DESI787-00277", set: 30, question: 27 },
                        { id: "DESI787-00278", set: 30, question: 28 }
                    ]
                },
                {
                    id: "concrete-target-mean-strength-and-variation",
                    title: "Target mean strength accounts for production variability",
                    html: "<p>A mix targeted only at f<sub>ck</sub> would have too many results below that lower-fractile value when production varies. Under the statistical model used by <strong>IS 456:2000 clause 9.2.2</strong> and <strong>IS 10262:2009 clause 3.2</strong>, proportion for <strong>f<sub>target</sub> = f<sub>ck</sub> + 1.65s</strong>. Here s is the standard deviation of comparable sample strength results, in MPa; 1.65 corresponds approximately to the normal-distribution 5% lower tail.</p>" +
                        "<p><strong>IS 456:2000 Table 8 and IS 10262:2009 Table 1</strong> provide an assumed <strong>s = 4 MPa for both M20 and M25</strong>, subject to their stated control conditions when adequate results are unavailable. It is not a value borrowed informally from M25 for M20.</p>" +
                        "<table><thead><tr><th scope='col'>Grade</th><th scope='col'>Assumed s</th><th scope='col'>Target calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>M20</th><td>4 MPa</td><td>20 + 1.65 × 4 = <strong>26.6 MPa</strong>.</td></tr>" +
                        "<tr><th scope='row'>M25</th><td>4 MPa</td><td>25 + 1.65 × 4 = <strong>31.6 MPa</strong>.</td></tr></tbody></table>" +
                        "<p>Replace an assumed value with an established value from adequate comparable production records. IS 10262:2009 clause 3.2.1.1 requires at least <strong>30 sample test results</strong> for its acceptable record, with separate assessment for each grade and significant production changes. Three cubes forming one sample do not constitute three independent production samples.</p>" +
                        "<p>For a dataset of n sample results f<sub>i</sub>, the usual sample estimate is <strong>s = √[Σ(f<sub>i</sub> − f̄)<sup>2</sup>/(n − 1)]</strong>. Better control reduces scatter; it is not permission to discard low observations. These 2000/2009 anchors must not be silently asserted for later editions. Target mix strength and the separate acceptance rules for delivered concrete serve different purposes.</p>",
                    sources: [
                        { id: "DESI787-00276", set: 30, question: 26 },
                        { id: "DESI787-00279", set: 30, question: 29 }
                    ]
                },
                {
                    id: "concrete-trial-mix-and-missing-cement-data",
                    title: "Trial-mix workflow and the missing-cement trap",
                    html: "<p><em>Official-scope extension: a proportioning workflow.</em> IS 10262:2009 treats calculated quantities as the start of a trial process, not an automatic approved mix. Its clauses 4.1.1, 4.3, 4.6 and 5 connect water–cement ratio, cementitious content, aggregate volumes and trials.</p>" +
                        "<ol><li>Define grade, exposure, required workability, binder, aggregate characteristics, placement method and control conditions.</li><li>Establish the target mean strength and select a free water–cement ratio satisfying both strength and durability.</li><li>Estimate the free water needed for placement, then calculate cement content C = W<sub>free</sub>/r and check the applicable content limits.</li><li>Use consistent absolute-volume calculations, V = mass/density, to estimate the remaining aggregate quantities. Do not sum loose stockpile volumes as though they were constituent volumes in compacted concrete.</li><li>Correct site moisture; make trials; measure workability, stability, yield and strength; revise proportions while keeping every governing requirement satisfied.</li></ol>" +
                        "<p><strong>Bank data check:</strong> 50 kg fine aggregate and 100 kg coarse aggregate establish only a fine:coarse ratio of 1:2. With r = 0.6, the water is <strong>W = 0.6C</strong>, but C is not supplied. The aggregate quantities do not determine the cement proportion, and describing the mix as harsh supplies no missing equation.</p>" +
                        "<p><strong>Conditional illustrations, not recovered bank data:</strong> if C were 25 kg, the proportions would be 1:2:4 by mass and the water would be <strong>15 kg</strong>, not 12 kg. The keyed 12 kg would require <strong>C = 12/0.6 = 20 kg</strong>, which is a different assumed cement content. Neither assumption is established by the stem; its water quantity is underdetermined.</p>",
                    sources: [
                        { id: "DESI787-00231", set: 25, question: 30 },
                        { id: "TRAN808-00037", set: 5, question: 83 },
                        { id: "DESI787-00279", set: 30, question: 29 }
                    ]
                },
                {
                    id: "concrete-cube-samples-and-acceptance",
                    title: "Cube strength, sample validity and acceptance are separate checks",
                    html: "<p>Compression testing loads a specimen to failure and is therefore <strong>destructive</strong>, even when only a separately cast cube is destroyed. Compressive stress at failure is <strong>f = P/A</strong>, using the loaded area and consistent units. Sampling, moulding, compaction, curing, test age, machine condition and loading procedure affect the result.</p>" +
                        "<p><strong>Illustrative added calculation:</strong> a 150 mm cube has loaded area 150 × 150 = 22500 mm<sup>2</sup>. A failure load of 675 kN gives 675000/22500 = <strong>30 MPa</strong>. This load is invented for teaching, not a measurement in the bank.</p>" +
                        "<p><em>Quality-control extension:</em> under <strong>IS 456:2000 clauses 15.3–15.4</strong>, three specimens form a sample and their mean is its test result. Individual specimen variation must remain within <strong>±15% of that mean</strong> for the stated sample-validity check. For added example results 27, 30 and 33 MPa, the mean is 30 MPa and deviations are −10%, 0 and +10%. This demonstrates specimen agreement only; it does not establish acceptance of an entire concrete lot.</p>" +
                        "<p><strong>Clause 16.1/Table 11</strong> separately requires compliance of the mean of a group of four non-overlapping consecutive <em>sample test results</em> and the individual sample results. Do not confuse an individual sample result with one cube, or this group assessment with the target-mean mix-design equation. Invalid sample variation is not repaired by quietly dropping the lowest cube.</p>" +
                        "<p><strong>Amendment-state warning:</strong> for M20 and above, the original Table 11's +4 MPa alternative group margin and −4 MPa individual margin were changed to <strong>+3 and −3 MPa by Amendment No. 3, August 2007</strong>. This is a targeted comparison, not the complete acceptance table; its statistical condition, rounding and all applicable clauses must also be read. Later amendment status is not certified here. A 28-day result or this teaching example is not automatic project acceptance.</p>",
                    sources: [
                        { id: "DESI787-00239", set: 26, question: 29 },
                        { id: "DESI787-00263", set: 1, question: 34 }
                    ]
                },
                {
                    id: "concrete-elastic-and-flexural-properties",
                    title: "Elastic modulus and modulus of rupture are different properties",
                    html: "<p><strong>IS 456:2000 clause 6.2.3.1</strong> permits the estimate <strong>E<sub>c</sub> = 5000√f<sub>ck</sub></strong>; <strong>clause 6.2.2</strong> gives estimated flexural strength <strong>f<sub>cr</sub> = 0.7√f<sub>ck</sub></strong>. In both expressions, enter f<sub>ck</sub> in N/mm<sup>2</sup> and obtain the result in N/mm<sup>2</sup>. Do not insert a value in Pa without changing the empirical coefficient.</p>" +
                        "<table><thead><tr><th scope='col'>M25 property</th><th scope='col'>Calculation</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Elastic modulus</th><td>5000√25 = <strong>25000 MPa = 25 GPa</strong>.</td><td>Estimated short-term stiffness, not failure stress. Aggregate and material variability affect actual modulus.</td></tr>" +
                        "<tr><th scope='row'>Flexural strength</th><td>0.7√25 = <strong>3.5 MPa</strong>.</td><td>Estimated modulus of rupture in bending, not a universal direct or splitting tensile strength.</td></tr></tbody></table>" +
                        "<p><strong>Illustrative added application:</strong> for an unprestressed rectangular gross section b = 200 mm, h = 300 mm, the elastic section modulus is Z = bh<sup>2</sup>/6 = <strong>3000000 mm<sup>3</sup></strong>. With the M25 estimate, the simple first-cracking moment is M<sub>cr</sub> = f<sub>cr</sub>Z = 3.5 × 3000000 = <strong>10500000 N·mm = 10.5 kN·m</strong>.</p>" +
                        "<p>That application assumes an initially uncracked section, a linear bending-stress distribution and no axial force, prestress or pre-existing restraint stress. It illustrates a material property; it is <em>not</em> the ultimate moment capacity of an RCC beam or a substitute for reinforcement, shear and serviceability design.</p>",
                    sources: [
                        { id: "STRU935-00035", set: 5, question: 15 },
                        { id: "DESI787-00283", set: 30, question: 33 }
                    ]
                },
                {
                    id: "concrete-splitting-test-and-ndt",
                    title: "Splitting tensile strength and non-destructive assessment",
                    html: "<p>A splitting test applies compression along opposite longitudinal lines of a cylinder laid on its side, producing tensile splitting on a diametral plane. The cylinder formula is <strong>f<sub>sp</sub> = 2P/(πDL)</strong>, with total applied failure load P in N, diameter D and cylinder length L in mm, giving N/mm<sup>2</sup>. It is not the axial compression expression P/(πD<sup>2</sup>/4).</p>" +
                        "<p>The bank's <strong>15 cm diameter × 30 cm length</strong> means D = 150 mm and L = 300 mm, a valid familiar geometry. Exact specimen alternatives and limits in IS 5816:1999 have not been verified here, so this must not be presented as the only permitted geometry. <strong>Illustrative added load:</strong> P = 225 kN gives f<sub>sp</sub> = 450000/(π × 150 × 300) = 10/π ≈ <strong>3.183 MPa</strong>. The bank provides dimensions, not that failure load.</p>" +
                        "<table><thead><tr><th scope='col'>Assessment method</th><th scope='col'>What the observation can establish</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Schmidt rebound hammer</th><td>A rebound index related directly to surface hardness. Moisture, carbonation, surface condition and test orientation affect readings.</td></tr>" +
                        "<tr><th scope='row'>Ultrasonic pulse velocity</th><td>Wave speed v = path length / transit time. Useful for comparative uniformity and defect assessment, but affected by the path, moisture, aggregate and reinforcement.</td></tr>" +
                        "<tr><th scope='row'>Visual inspection</th><td>Identifies visible cracking, honeycombing and deterioration; it does not directly measure hidden strength.</td></tr>" +
                        "<tr><th scope='row'>Compression or splitting to failure</th><td>Destructive specimen tests. A core also causes local disturbance when extracted from a structure.</td></tr></tbody></table>" +
                        "<p>No universal rebound-number or pulse-velocity conversion proves compressive strength for every concrete. Use an applicable test procedure, representative measurements and a defensible material-specific correlation, with other evidence where required. Eddy-current methods concern electrically conductive targets such as steel; their appearance in the bank's generic NDT list is not evidence of direct bulk-concrete strength measurement.</p>",
                    sources: [
                        { id: "DESI787-00280", set: 30, question: 30 },
                        { id: "DESI787-00275", set: 30, question: 25 },
                        { id: "DESI787-00239", set: 26, question: 29 }
                    ]
                },
                {
                    id: "concrete-creep-shrinkage-and-effective-modulus",
                    title: "Creep, shrinkage and an approximate effective modulus",
                    html: "<p><strong>Creep</strong> is additional time-dependent strain under sustained stress; <strong>shrinkage</strong> is a volume-change strain that can occur without an external load. Separate both from the immediate elastic strain. Loading age, duration, humidity, member size, binder, curing and stress level influence the long-term response.</p>" +
                        "<p>Define the creep coefficient for a stated loading age and duration as <strong>θ = ε<sub>cr</sub>/ε<sub>el</sub></strong>, where ε<sub>el</sub> is the initial elastic strain and ε<sub>cr</sub> the subsequent creep strain. For a simplified constant-stress, linear-creep model, ε<sub>load</sub> = (σ/E<sub>c</sub>)(1 + θ), so an <strong>effective modulus E<sub>eff</sub> = E<sub>c</sub>/(1 + θ)</strong> reproduces that combined load-induced strain.</p>" +
                        "<p><strong>Illustrative added example:</strong> E<sub>c</sub> = 25000 MPa, θ = 2 and sustained σ = 10 MPa give ε<sub>el</sub> = 10/25000 = <strong>0.0004</strong>, ε<sub>cr</sub> = <strong>0.0008</strong>, and total load-induced strain = <strong>0.0012</strong>. E<sub>eff</sub> = 25000/3 ≈ <strong>8333 MPa = 8.333 GPa</strong>. Shrinkage is not included in these numbers.</p>" +
                        "<p>This effective modulus is an analysis approximation, not a universal measured long-term material constant. Changing stress history, ageing, redistribution and nonlinear creep require a more suitable model. Higher-strength concrete often shows less creep under comparable conditions, but <strong>creep is not exactly proportional to 1/f<sub>ck</sub></strong>, and strength alone cannot determine θ.</p>" +
                        "<p>Drying shrinkage generally increases with stronger drying exposure and, in comparable mixes, greater shrinkable paste or water content. Cement content, paste volume and r are interdependent, so isolated trends need qualifications. <strong>Autogenous shrinkage</strong> arises from hydration-related self-desiccation and can be significant at low r. Lower r therefore does not guarantee smaller <em>total</em> shrinkage. Restraint converts otherwise free volume change into stress and possible cracking.</p>",
                    sources: [
                        { id: "DESI787-00236", set: 26, question: 26 },
                        { id: "DESI787-00254", set: 27, question: 33 },
                        { id: "DESI787-00265", set: 28, question: 34 },
                        { id: "DESI787-00273", set: 29, question: 32 }
                    ]
                },
                {
                    id: "concrete-pervious-mixes-and-connected-voids",
                    title: "Pervious concrete: connected voids are an intentional function",
                    html: "<p><strong>Pervious concrete</strong> is proportioned to retain interconnected voids through which water can pass. It commonly uses a coarse-aggregate skeleton, enough paste to bind particle contacts, and little or no fine aggregate. The bank's fine-aggregate answer is best understood as <em>reducing or omitting sand to preserve connected pores</em>, not as an instruction to replace sand with an unspecified material.</p>" +
                        "<table><thead><tr><th scope='col'>Dense conventional concrete</th><th scope='col'>Pervious concrete</th></tr></thead><tbody>" +
                        "<tr><td>Combined grading and paste are selected to fill unwanted voids and provide strength, cohesion and durability.</td><td>The paste bonds the skeleton without filling all interparticle flow paths.</td></tr>" +
                        "<tr><td>Honeycombing and unintended connected pores are defects.</td><td>A controlled connected pore system is part of the specified hydraulic function, not an excuse for weak or unbonded aggregate.</td></tr>" +
                        "<tr><td>Low permeability is often desirable for protecting reinforcement.</td><td>Infiltration must be assessed alongside strength, abrasion resistance and resistance to clogging.</td></tr></tbody></table>" +
                        "<p>Simply removing fine aggregate does <strong>not automatically produce a stronger pavement</strong>. Increased void space creates a strength–infiltration trade-off, and performance depends on paste quality, aggregate contacts, compaction and curing. Excessive paste or surface finishing can close the intended pores; inadequate consolidation or curing can leave weak contacts. The pavement system also needs suitable drainage and maintenance. No universal pervious-mix proportion or structural approval follows from the single assigned question.</p>",
                    sources: [{ id: "TRAN808-00143", set: 14, question: 87 }]
                }
            ],
            gaps: [
                "The bank does not provide a complete local-material mix-design dataset: grading, specific gravities, absorption, moisture, admixture trials, exposure and production strength records are incomplete or absent. Added volume, moisture-correction and plasticizer examples illustrate methods; none is a prescribed M20 mix or an approved field recipe.",
                "The water calculation with 50 kg fine and 100 kg coarse aggregate lacks cement mass. The mixer question lacks justification for the extra 90% efficiency used by its key and does not independently establish drum capacity versus concrete yield. These missing premises cannot be recovered from the answer choices.",
                "No measured cube series, splitting failure load, NDT calibration, creep history or site-specific stripping-strength record is supplied. The cube, cracking-moment, splitting-load and effective-modulus calculations are explicitly added teaching examples, not source measurements or construction-release decisions.",
                "Full later amendment/status history and project adoption of IS/NS provisions have not been certified. References distinguish original IS 456:2000, the identified August 2007 amendment, IS 10262:2009 and verified NS catalogue titles. Exact IS 5816:1999 specimen alternatives and limits remain unverified; the bank's cylinder geometry is not claimed to be its only permitted specimen."
            ],
            cautions: [
                {
                    html: "<p><strong>Aggregate percentages are estimates:</strong> the bank's 70–75% and 60–75% volume answers concern typical ordinary mixes. They are not invariant quantities or a way to identify every concrete. Some offered ranges overlap. Distinguish particle volume from loose bulk volume and volume fraction from mass fraction; use an actual mix and measured yield for a calculation.</p>",
                    sources: [
                        { id: "BASI674-00148", set: 1, question: 4 },
                        { id: "DESI787-00232", set: 25, question: 31 },
                        { id: "TRAN808-00159", set: 16, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>Passing/retained wording error:</strong> fine aggregate predominantly <strong>passes the 4.75 mm sieve</strong>; predominantly retained material belongs on the coarse side of this dividing convention. The stored numerical choice identifies the dividing sieve, but it does not make the stem's retained wording correct. Apply the relevant grading tolerances rather than treating either stockpile as a perfectly single-sized fraction.</p>",
                    sources: [{ id: "SOIL136-00011", set: 2, question: 45 }]
                },
                {
                    html: "<p><strong>Maximum-size generalisations:</strong> 20 mm is suitable for most work in IS 456:2000 clause 5.3.3, not compulsory for every slab/lintel. The clause also permits 40 mm or larger where flow is unrestricted, subject to member thickness and placement requirements. Neither a universal slab limit of 20 mm nor a universal plain-concrete limit of 40 mm follows. Check reinforcement and cover restrictions where applicable.</p>",
                    sources: [
                        { id: "BASI674-00284", set: 23, question: 1 },
                        { id: "TRAN808-00134", set: 13, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Grout terminology is narrower than the bank implies:</strong> cement plus water describes <em>neat cement grout</em>. Sanded or fine-aggregate grout is also a legitimate cementitious grout for appropriate spaces and specifications. Sand limits penetration into fine openings, but its presence does not universally mean that a material cannot be grout. The original choice is retained, with this missing qualification.</p>",
                    sources: [{ id: "DESI787-00008", set: 2, question: 32 }]
                },
                {
                    html: "<p><strong>SSD is a basis for correction:</strong> filled accessible pores and no free surface film define SSD. A dry-looking surface alone does not establish it. Actual aggregate need not be delivered physically at SSD; measure moisture and absorption and adjust both aggregate mass and water. Treating wet aggregate as dry or neglecting dry aggregate's absorption changes the effective water–cement ratio.</p>",
                    sources: [
                        { id: "DESI787-00011", set: 3, question: 25 },
                        { id: "SOIL136-00006", set: 2, question: 40 }
                    ]
                },
                {
                    html: "<p><strong>Missing cement and inconsistent arithmetic:</strong> the 50 kg sand/100 kg coarse-aggregate stem supplies no cement mass. It therefore gives <strong>W = 0.6C</strong>, not a determinate water quantity. Assuming C = 25 kg would give <strong>15 kg water</strong>; the keyed 12 kg would require C = 20 kg. Harshness does not justify changing this mass-ratio equation. Neither hypothetical cement quantity is an actual datum in the source.</p>",
                    sources: [{ id: "TRAN808-00037", set: 5, question: 83 }]
                },
                {
                    html: "<p><strong>Unstated mixer efficiency:</strong> 7 × 60/3 = 140 batches and 140 × 150 = <strong>21000 L</strong>, interpreting the stated capacity as batch output and the three minutes as a complete cycle. The keyed <strong>18900 L</strong> requires an extra 0.90 multiplier not supplied in the stem. Seven hours is already called effective, so another allowance for the same lost time may double-count it. None of the listed outputs matches the stated-data calculation.</p>",
                    sources: [{ id: "DESI787-00020", set: 3, question: 34 }]
                },
                {
                    html: "<p><strong>Grade is not a guaranteed ratio:</strong> IS 456:2000 clause 6.1.2/Table 5 supplies the M20 mild-exposure RCC minimum; the bank's clause 8.2.1.1 citation is not the correct anchor for that claim. Other exposures may require more. The 1:1.5:3 mnemonic is not a guaranteed M20 recipe, especially not a universal Table 9 prescription <strong>by weight</strong>. Do not confuse a strength grade, nominal volume proportions and a designed mass batch.</p>",
                    sources: [
                        { id: "DESI787-00012", set: 3, question: 26 },
                        { id: "DESI787-00090", set: 11, question: 27 },
                        { id: "DESI787-00277", set: 30, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Thirty litres is not close-enough durability compliance:</strong> Table 9's M20 nominal entry has a 30 L upper quantity per 50 kg cement, but mild-exposure RCC under IS 456:2000 Table 5 has maximum free r = 0.55, or <strong>27.5 L</strong> on that cement basis. Thirty litres free gives r = 0.60. Amendment No. 3, August 2007, adds Table 9 Note 2 clarifying the durability restriction. The key can identify the nominal-table quantity; its explanation must not authorise exceeding a stricter limit.</p>",
                    sources: [{ id: "DESI787-00278", set: 30, question: 28 }]
                },
                {
                    html: "<p><strong>Original grade-boundary error:</strong> the source calls M25–M60 standard concrete. <strong>Original IS 456:2000 Table 2 ends standard grades at M55 and begins high-strength grades at M60</strong>, continuing through M80. M10, M15 and M20 are its ordinary grades. The stored range does not match that original table; no unverified later-edition boundary is substituted here.</p>",
                    sources: [{ id: "DESI787-00281", set: 30, question: 31 }]
                },
                {
                    html: "<p><strong>Assumed standard deviation is conditional, not borrowed:</strong> s = 4 MPa is assigned to <strong>both M20 and M25</strong> in IS 456:2000 Table 8 and IS 10262:2009 Table 1 under the stated control conditions. It gives target means 26.6 and 31.6 MPa. The M20 explanation's suggestion of borrowing the M25 value is misleading. Adequate established records replace assumptions; these edition-labelled values are not a claim about every later standard or every site.</p>",
                    sources: [
                        { id: "DESI787-00276", set: 30, question: 26 },
                        { id: "DESI787-00279", set: 30, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Fresh-test scope:</strong> 7.5 cm = 75 mm is not a universal vibration slump ceiling. A workable, cohesive admixture-modified concrete may need a different consistency for its placement method. Likewise, flow-table suitability depends on actual consistency and the specified procedure, not simply on the label rich mix. Slump is not a complete workability or segregation-resistance test.</p>",
                    sources: [
                        { id: "DESI787-00019", set: 3, question: 33 },
                        { id: "DESI787-00010", set: 2, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Water-quality qualifications:</strong> IS 456:2000 clause 5.4 says potable water is generally satisfactory, not that it is the only possible source or that distilled water is necessary. A doubtful alternative must satisfy the applicable checks. Mineral oil contamination can impair concrete, but the bank does not establish a concentration-independent strength loss; oil type and dosage matter. These notes do not approve an untested contaminated supply.</p>",
                    sources: [
                        { id: "DESI787-00014", set: 3, question: 28 },
                        { id: "DESI787-00233", set: 25, question: 32 }
                    ]
                },
                {
                    html: "<p><strong>Compaction has no fixed strength bonus:</strong> removing unwanted entrapped air improves density and usually strength, but the increase depends on how poorly compacted the comparison concrete was. The keyed 15–20% is not universal. Do not interpret excess-air removal as eliminating intentionally entrained fine air voids required for an appropriate freezing-exposure mix.</p>",
                    sources: [{ id: "DESI787-00271", set: 29, question: 30 }]
                },
                {
                    html: "<p><strong>Strength-age percentages are not guarantees:</strong> three-day strength is not universally 40% of a 28-day value. Twenty-eight days is the usual reference age, not proof of complete hydration or achievement of a final maximum. Binder, moisture and temperature change the strength history. Sample validity and the group/individual acceptance rules of IS 456:2000 clauses 15–16, with the applicable amendments, remain separate from these percentage mnemonics.</p>",
                    sources: [
                        { id: "DESI787-00262", set: 28, question: 32 },
                        { id: "DESI787-00263", set: 1, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Stripping wording and table errors:</strong> one stored choice reads <em>24 MT</em>, which is not a meaningful time unit; its explanation appears to intend about one day. IS 456:2000 clause 11.3.1 instead gives <strong>16–24 hours</strong> for vertical forms under its normal OPC, adequate-curing and temperature ≥15°C conditions, not a universal 24–48-hour rule. Beam soffit forms have the <strong>seven-day, props-re-fixed-immediately</strong> condition. Fourteen/21-day beam-prop periods are different entries. This is not Table 11, and adequate strength still governs under clause 11.3.</p>",
                    sources: [
                        { id: "DESI787-00043", set: 6, question: 27 },
                        { id: "DESI787-00235", set: 26, question: 25 },
                        { id: "DESI787-00259", set: 28, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Harshness has no single particle-size diagnosis:</strong> insufficient suitable fines or paste, excessive coarse material, angular particles and an unbalanced combined grading can all impair mobility and cohesion. The bank's claim that middle-sized particles uniquely explain harshness is not established without grading and mix data. Judge the complete particle–paste system rather than replacing that claim with another unconditional one-factor rule.</p>",
                    sources: [{ id: "DESI787-00267", set: 29, question: 26 }]
                },
                {
                    html: "<p><strong>Long-term trends are not exact laws:</strong> creep is not universally proportional to the reciprocal of strength. E<sub>c</sub>/(1 + θ) is a simplified effective-modulus model for stated loading age, duration and stress history. Drying shrinkage trends cannot be transferred to every shrinkage mechanism: low-r concrete may have important autogenous shrinkage. Lower r usually reduces permeability after good compaction and curing, not increases it, and frost resistance also needs an appropriate air-void system and exposure assessment.</p>",
                    sources: [
                        { id: "DESI787-00236", set: 26, question: 26 },
                        { id: "DESI787-00254", set: 27, question: 33 },
                        { id: "DESI787-00273", set: 29, question: 32 },
                        { id: "DESI787-00274", set: 29, question: 33 }
                    ]
                },
                {
                    html: "<p><strong>Finishing sequence is conditional:</strong> the option Screening appears to mean screeding, the initial strike-off. Floating reduces minor surface irregularities after that operation; trowelling is a common final smoothing stage only where that finish is specified. Textured or other finishes need not end in steel trowelling. Neither operation should be used to work bleed water back into the surface.</p>",
                    sources: [
                        { id: "DESI787-00245", set: 27, question: 25 },
                        { id: "DESI787-00246", set: 1, question: 33 }
                    ]
                },
                {
                    html: "<p><strong>Splitting-test geometry is an example, not an exclusivity claim:</strong> the bank's 150 mm diameter × 300 mm length cylinder is a valid familiar specimen geometry. Exact alternative specimens and dimensional limits in IS 5816:1999 were not verified from a primary copy. Use <strong>2P/(πDL)</strong> for the stated cylindrical diametral-loading model, not axial compression area, and do not infer a tensile strength from dimensions alone.</p>",
                    sources: [{ id: "DESI787-00280", set: 30, question: 30 }]
                },
                {
                    html: "<p><strong>NDT is not a universal strength conversion:</strong> the rebound hammer directly indicates surface hardness, while pulse velocity concerns wave transmission. Either may contribute to a calibrated assessment but neither alone proves the same compressive strength for all materials and conditions. Compression to failure remains destructive. An eddy-current method for conductive steel must not be described as directly measuring the bulk concrete's strength.</p>",
                    sources: [
                        { id: "DESI787-00275", set: 30, question: 25 },
                        { id: "DESI787-00239", set: 26, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Classification and strength wording:</strong> plain and reinforced are both valid categories by structural action; the source's broad classification stem does not uniquely establish reinforced as the only category. The plain-concrete answers correctly emphasise compression, but cannot mean that concrete has exactly zero tensile or shear resistance, or that tensile strength is always a fixed 10% of compressive strength. Distinguish compression, direct tension, splitting and flexural test results.</p>",
                    sources: [
                        { id: "DESI787-00228", set: 25, question: 27 },
                        { id: "DESI787-00237", set: 26, question: 27 },
                        { id: "DESI787-00269", set: 29, question: 28 }
                    ]
                }
            ],
            references: [
                {
                    title: "IS 456:2000 — Plain and Reinforced Concrete, Code of Practice (fourth revision); original text and appended Amendment No. 3, August 2007, distinguished in these notes",
                    url: "https://archive.org/details/gov.in.is.456.2000"
                },
                {
                    title: "IS 10262:2009 — Concrete Mix Proportioning, Guidelines (first revision, July 2009)",
                    url: "https://archive.org/stream/gov.in.is.10262.2009/is.10262.2009_djvu.txt"
                },
                {
                    title: "NBSM official catalogue — NS 49:2041 (Amendment 2076) and NS 572:2076 cement-standard titles; B.S. dates, catalogue verification only",
                    url: "https://nbsm.gov.np/particular/"
                }
            ]
        }
    });
})();