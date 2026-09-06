(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0903: {
            code: "ACiE0903",
            questionCount: 64,
            blocks: [
                {
                    id: "materials-aggregate-origin-and-quality",
                    title: "Classify the aggregate, then establish its fitness for the layer",
                    html: "<p><strong>Geological origin explains how a rock formed; it does not certify road performance.</strong> Aggregates form the load-carrying skeleton of granular and asphalt layers. Their mineralogy, weathering, shape, grading and interaction with water and binder all matter. A strong intact rock can still produce an unsuitable aggregate if crushing creates excessive flakes or the delivered stockpile contains weak, dirty particles.</p>" +
                        "<table><thead><tr><th scope='col'>Origin</th><th scope='col'>Formation and examples</th><th scope='col'>Material-selection question</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Igneous</th><td>Solidification of magma or lava; granite and basalt.</td><td>Is the actual material sound, rather than weathered, fractured or highly porous?</td></tr>" +
                        "<tr><th scope='row'>Sedimentary</th><td>Deposition and consolidation, or chemical accumulation; sandstone and limestone.</td><td>Are cementation, bedding and resistance to wetting adequate?</td></tr>" +
                        "<tr><th scope='row'>Metamorphic</th><td>Transformation of existing rock by heat and pressure; quartzite, gneiss and marble.</td><td>Will foliation, cleavage or polishing behaviour impair the proposed use?</td></tr></tbody></table>" +
                        "<p>Sound igneous rocks are often useful roadstones, but good sedimentary and metamorphic sources also exist. The bank's igneous answer is a broad tendency, not a unique strength classification. Ordinary crushed stone, gravel and sand are conventionally <strong>normal-weight aggregates</strong>; normal weight is neither a specified crushing resistance nor proof of durability.</p>" +
                        "<p>Selection proceeds from source investigation and representative sampling to tests appropriate to the intended course, followed by comparison with an identified specification. A test method defines how an index is obtained; an application specification decides what is acceptable. These notes cover official 9.3 materials, asphalt mixes and subgrade evaluation. References identify inspected editions, not current adoption or construction approval, and all original bank records remain unchanged.</p>",
                    sources: [
                        { id: "TRAN808-00133", set: 13, question: 88 },
                        { id: "TRAN808-00157", set: 15, question: 89 },
                        { id: "TRAN808-00161", set: 16, question: 83 }
                    ]
                },
                {
                    id: "materials-fine-coarse-and-filler",
                    title: "Fine aggregate and mineral filler are not the same fraction",
                    html: "<p><strong>The familiar coarse/fine division uses the 4.75 mm IS sieve.</strong> IS 383:1970 defines fine aggregate as material mostly passing that sieve, with only the permitted coarser fraction; coarse aggregate is mostly retained. Thus the bank's two size classes and less-than-4.75-mm answers are useful introductory descriptions, not guarantees that every particle in a supplied sand passes the boundary sieve.</p>" +
                        "<p>Asphalt specifications additionally control <strong>mineral filler</strong>, the very fine mineral component contributing to the binder–filler mastic. The key conversion is <strong>0.075 mm = 75 μm</strong>, not 0.75 mm or 75 mm. Approved rock dust, hydrated lime or cement may serve this function, subject to the specified grading and other requirements; any dusty or clay-rich waste is not automatically acceptable filler.</p>" +
                        "<p>In the inspected DoR specifications, 2073 with Third Amendment 2082, <strong>Table 13.27</strong> permits <strong>85–100% passing 0.075 mm</strong> for DBM mineral filler. It also controls the coarser filler sieves. The 75 μm answer therefore names a control sieve; it does not mean that 100% must pass it, or that the whole asphalt aggregate blend should have the filler grading.</p>" +
                        "<p>The coarse/fine boundary is itself application-dependent: the DBM material clauses use <strong>2.36 mm for their 13.2 mm NMAS case</strong>, rather than the 4.75 mm boundary used for the larger listed NMAS cases. Read the relevant mix definition before assigning fractions. More fines increase surface area and can increase binder demand, while unsuitable plastic fines impair moisture resistance; fineness alone is not quality.</p>",
                    sources: [
                        { id: "TRAN808-00137", set: 14, question: 81 },
                        { id: "TRAN808-00158", set: 16, question: 80 },
                        { id: "TRAN808-00160", set: 16, question: 82 },
                        { id: "TRAN808-00166", set: 16, question: 88 }
                    ]
                },
                {
                    id: "materials-sieve-analysis-and-blending",
                    title: "Build a grading curve from a conserved mass account",
                    html: "<p><strong>Sieve analysis measures particle-size distribution; production screening separates stockpiles.</strong> Obtain a representative sample, reduce it without preferentially selecting large or small particles, condition it as the method requires, and sieve from coarse to fine. Avoid overloading or forcing particles through apertures. Where the specification requires wet sieving, use the prescribed washing procedure to separate adhering fines rather than assuming dry shaking removes them.</p>" +
                        "<p>If M is the original dry sample mass and m<sub>i</sub> is the mass retained on sieve i, <strong>retained percentage = 100m<sub>i</sub>/M</strong>. Cumulative retained percentage sums that sieve and all coarser sieves; <strong>percentage passing = 100 − cumulative percentage retained</strong>. Include the pan in the mass-recovery check. For a correctly ordered sieve series, percentage passing cannot increase as the aperture becomes smaller.</p>" +
                        "<p><strong>Hypothetical illustration, not bank data:</strong> a 1000 g sample has 100 g retained on 19 mm and a further 250 g retained on 9.5 mm, with no intermediate sieve in this illustrative account. Passing percentages are 90% at 19 mm and 65% at 9.5 mm. The 250 g is an individual retained mass, not the cumulative retained mass of 350 g.</p>" +
                        "<p>For blending, let f<sub>i</sub> be each stockpile's dry mass fraction, with Σf<sub>i</sub> = 1. At each sieve, <strong>P<sub>blend</sub> = Σf<sub>i</sub>P<sub>i</sub></strong>. Hypothetically, mixing 60% of stock A passing 20% and 40% of stock B passing 80% gives <strong>44% passing</strong> that sieve. Satisfying one sieve cannot establish an acceptable blend: check the whole envelope, continuity, segregation risk and ingredient quality.</p>",
                    sources: [{ id: "TRAN808-00140", set: 14, question: 84 }]
                },
                {
                    id: "materials-maximum-size-and-nmas",
                    title: "Maximum size, nominal maximum size and course thickness differ",
                    html: "<p><strong>A base course does not have one universal maximum aggregate size.</strong> WBM, WMM, BM, DBM and other bases have different grading envelopes and construction requirements. Particle size must suit the selected product, compacted lift, equipment and required surface. Large particles in too thin a lift can bridge, segregate or prevent uniform compaction; selecting a nominal size alone does not design the layer.</p>" +
                        "<p>A common <strong>maximum-size</strong> description is the smallest specified sieve through which all the material passes. The inspected DoR asphalt-table notes define <strong>nominal maximum aggregate size, NMAS, as one sieve size larger than the first sieve retaining more than 10% of the material</strong>. Retain the document's sieve series and definition; maximum and NMAS need not be identical.</p>" +
                        "<p><strong>Hypothetical illustration:</strong> suppose 100%, 95% and 80% pass successive 19, 13.2 and 9.5 mm sieves, and all larger sieves pass 100%. Individual retention is 5% on 13.2 mm and 15% on 9.5 mm. Under that NMAS convention, <strong>NMAS is 13.2 mm</strong>, while the all-passing maximum-size sieve is <strong>19 mm</strong>. This example is not a recovered bank grading.</p>" +
                        "<p>DoR Table 13.33 labels its BC gradings <strong>19 mm and 13.2 mm NMAS</strong>. Neither is 19.5 mm. The bank's 50 mm base answer lacks a product and grading, while its 19.5 mm surface answer does not match the 19 mm or 13.2 mm in its explanation. Do not round a specified sieve designation to the nearest offered option or reconstruct a missing grading chart from memory.</p>",
                    sources: [
                        { id: "TRAN808-00170", set: 17, question: 80 },
                        { id: "TRAN808-00171", set: 17, question: 81 }
                    ]
                },
                {
                    id: "materials-shape-and-interlock",
                    title: "A flaky-particle definition is not an allowable flakiness percentage",
                    html: "<p><strong>Shape controls packing, interlock and susceptibility to particle breakage.</strong> Angular, reasonably cubical particles can mobilise more interlock than rounded particles under comparable grading, binder and compaction conditions. Excessively thin or elongated particles may orient unfavourably and break during compaction or traffic. Sharp sand is therefore a conditional stability preference, not a guarantee independent of the rest of the mix.</p>" +
                        "<p>For a prescribed sieve fraction, let <strong>d<sub>mean</sub> = (d<sub>upper</sub> + d<sub>lower</sub>)/2</strong>. In the archived IS 2386 Part I method, a flaky particle has <strong>thickness &lt; 0.6d<sub>mean</sub></strong>; an elongated particle has <strong>length &gt; 1.8d<sub>mean</sub></strong>. These shape tests apply to the relevant coarse-aggregate sieve fractions and are not applied to material smaller than 6.3 mm under that method.</p>" +
                        "<p><strong>Hypothetical shape example:</strong> for particles passing 20 mm and retained on 16 mm, the mean sieve size is 18 mm. The thickness boundary is <strong>10.8 mm</strong> and the length boundary is <strong>32.4 mm</strong>. The 0.6 ratio classifies a particle; it does not permit 60% of a stockpile to be flaky. A flakiness index instead expresses the mass of classified flaky material relative to the eligible tested mass, using the prescribed fraction weighting.</p>" +
                        "<p>Combined flakiness/elongation acceptance needs its own procedure. The DoR DBM table note first removes flaky particles, then determines elongation on the remaining non-flaky material using that remaining mass as its denominator before adding the stated indices. Do not substitute the sum of two independently measured, overlapping whole-sample percentages. The bank's three-fifths wording is a dimensional definition, not an application acceptance limit.</p>",
                    sources: [
                        { id: "TRAN808-00135", set: 13, question: 90 },
                        { id: "TRAN808-00169", set: 17, question: 79 }
                    ]
                },
                {
                    id: "materials-density-and-packing-voids",
                    title: "Calculate aggregate packing voids with compatible density definitions",
                    html: "<p><strong>Aggregate bulk density includes the spaces between particles in the measuring container.</strong> It depends on grading, particle shape, moisture and how the container is filled or compacted. Particle specific gravity describes a different volume. Neither a loose aggregate packing density nor its particle specific gravity is automatically a compacted-asphalt or voidless-mixture property.</p>" +
                        "<p>For dry aggregate mass M in container volume V, <strong>ρ<sub>bulk</sub> = M/V</strong>. If the compatible particle density is G<sub>s</sub>ρ<sub>w</sub>, its represented particle volume is M/(G<sub>s</sub>ρ<sub>w</sub>). Subtracting that volume from V gives <strong>n = 1 − ρ<sub>bulk</sub>/(G<sub>s</sub>ρ<sub>w</sub>)</strong>. The percentage is 100n. Porosity uses total volume as denominator; void ratio instead uses the represented particle volume.</p>" +
                        "<p><strong>Assigned calculation:</strong> take the stated 2.6 kg/L as dry packing bulk density, G<sub>s</sub> = 2.8 on the corresponding particle-volume basis, and the exercise approximation ρ<sub>w</sub> = 1 kg/L. Then <strong>100(1 − 2.6/2.8) = 7.142857…% ≈ 7.1429%</strong>, or 7.1% to one decimal place. Both offered <strong>A: 7.1 and B: 7.10 denote the same number</strong>; the stored A choice is not numerically unique.</p>" +
                        "<p>With bulk-dry particle gravity, the calculated spaces exclude pores already included inside particle envelopes. Using apparent or true-solid gravity changes what is counted as void volume. Wet density must not be divided by a dry-particle density without correction. This conditional bank example does <strong>not</strong> identify G<sub>mm</sub> from aggregate G<sub>s</sub> or calculate asphalt air voids.</p>",
                    sources: [{ id: "TRAN808-00139", set: 14, question: 83 }]
                },
                {
                    id: "materials-aggregate-absorption",
                    title: "Separate particle pores, absorbed water and external surface moisture",
                    html: "<p><em>Syllabus extension: aggregate absorption and specific-gravity measurements.</em> No assigned question supplies a full oven-dry, saturated-surface-dry and immersed mass dataset. The following example is hypothetical, using the displacement principles of the archived IS 2386 Part III methods.</p>" +
                        "<p>For a suitable coarse-aggregate immersion method, call the oven-dry mass M<sub>d</sub>, the saturated-surface-dry mass in air M<sub>SSD</sub>, and the immersed apparent mass, corrected for the basket, M<sub>sub</sub>. SSD means the accessible pores have been conditioned with water but external free water has been removed. It does not mean oven dry.</p>" +
                        "<ul><li><strong>Particle-envelope volume:</strong> (M<sub>SSD</sub> − M<sub>sub</sub>)/ρ<sub>w</sub>.</li><li><strong>Bulk-dry particle gravity G<sub>sb</sub>:</strong> M<sub>d</sub>/(M<sub>SSD</sub> − M<sub>sub</sub>).</li><li><strong>SSD particle gravity:</strong> M<sub>SSD</sub>/(M<sub>SSD</sub> − M<sub>sub</sub>).</li><li><strong>Apparent particle gravity G<sub>sa</sub>:</strong> M<sub>d</sub>/(M<sub>d</sub> − M<sub>sub</sub>); the denominator excludes the water-permeable pore volume.</li><li><strong>Water absorption:</strong> 100(M<sub>SSD</sub> − M<sub>d</sub>)/M<sub>d</sub>, percent of dry aggregate mass.</li></ul>" +
                        "<p><strong>Hypothetically</strong>, M<sub>d</sub> = 2600 g, M<sub>SSD</sub> = 2640 g and M<sub>sub</sub> = 1640 g give G<sub>sb</sub> = <strong>2.600</strong>, SSD gravity <strong>2.640</strong>, G<sub>sa</sub> ≈ <strong>2.7083</strong> and water absorption ≈ <strong>1.5385%</strong>. At ρ<sub>w</sub> = 1 g/cm<sup>3</sup>, the envelope occupies 1000 cm<sup>3</sup>.</p>" +
                        "<p>Control conditioning time, temperature, trapped air and the SSD endpoint. Fine aggregate needs the method appropriate to its size, not an improvised basket test. Water absorption is not identical to bitumen absorption: the fluids, conditioning and accessible pore volumes differ. Use measured asphalt-mixture properties to determine effective binder rather than subtracting the water-absorption percentage from binder content.</p>",
                    sources: []
                },
                {
                    id: "materials-acv-method-and-force",
                    title: "ACV measures fines formed under a specified compressive loading",
                    html: "<p><strong>Aggregate crushing value, ACV, is a percentage index, not the breaking load of a single stone.</strong> The archived IS 2386 Part IV:1963 standard test uses the aggregate fraction <strong>passing 12.5 mm and retained on 10 mm</strong>. The post-loading fines are assessed on <strong>2.36 mm</strong>; that is not the lower preparation sieve.</p>" +
                        "<ol><li>Prepare the prescribed surface-dry sample. If heat drying is used, follow the method's conditioning requirements and cool before testing.</li><li>Measure the quantity, then place it in the nominal 150 mm cylindrical test cell in three approximately equal layers, <strong>25 tamping strokes per layer</strong>. Level the surface and seat the plunger horizontally without jamming.</li><li>Apply the compressive load uniformly so the specified <strong>40 tonne-force is reached in 10 minutes</strong>. The amended apparatus-capability wording does not turn this into an arbitrary rapid-loading test.</li><li>Unload, recover the material without losing fines, sieve on 2.36 mm and determine the passing mass.</li></ol>" +
                        "<p><strong>ACV = 100M<sub>fines</sub>/M<sub>sample</sub>.</strong> Hypothetically, 600 g of fines from a 3000 g sample gives <strong>20%</strong>; these masses are illustrative, not bank givens. The archived method uses duplicate tests and specified rounding for the reported mean. Changing the tested size or using the smaller apparatus requires its particular provisions and can change comparability.</p>" +
                        "<p><strong>Force conversion:</strong> 1 tf = 9.80665 kN, so <strong>40 tf = 392.266 kN</strong>, conventionally rounded to <strong>400 kN</strong>. It is not 4000 N, which is only 4 kN. The bank's 40 ton wording intends a force; its 4000n version has no correct option. Crushing-before-full-load wording should not be read as a required early catastrophic failure.</p>",
                    sources: [
                        { id: "BASI674-00150", set: 13, question: 3 },
                        { id: "BASI674-00158", set: 13, question: 11 },
                        { id: "BASI674-00159", set: 13, question: 12 },
                        { id: "TRAN808-00146", set: 14, question: 90 },
                        { id: "TRAN808-00147", set: 15, question: 79 },
                        { id: "TRAN808-00162", set: 16, question: 84 }
                    ]
                },
                {
                    id: "materials-strength-index-interpretation",
                    title: "Strength, toughness and abrasion resistance require different tests",
                    html: "<p><strong>A low degradation percentage generally means better resistance under that particular test.</strong> ACV measures fines under gradually applied compression; AIV measures fines under repeated impact; LA measures degradation from tumbling, abrasion and impact. They share a percentage form but do not measure an identical failure process.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Reported quantity</th><th scope='col'>Direction of greater resistance</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>ACV</th><td>Fines percentage under the specified load.</td><td>Lower, within the method's applicable range.</td></tr>" +
                        "<tr><th scope='row'>AIV</th><td>Fines percentage after the specified blows.</td><td>Lower.</td></tr>" +
                        "<tr><th scope='row'>LA loss</th><td>Percentage mass lost from the retained test fraction.</td><td>Lower.</td></tr>" +
                        "<tr><th scope='row'>Ten-percent-fines value</th><td>Load required to produce the defined fines percentage.</td><td>Higher load, not lower percentage.</td></tr></tbody></table>" +
                        "<p>The archived IS 2386 Part IV ACV scope warns that <strong>ACV of 30 or higher may give anomalous results</strong> and directs use of the ten-percent-fines value instead. This is a <strong>test-method limitation</strong>, not a rule that every material giving 30% must be rejected for every road layer.</p>" +
                        "<p>The two assigned less-than-10/above-35 stems omit the test. One explanation calls the measure ACV and the other calls it AIV. Strong/weak is the intended qualitative direction, but those descriptors are not universal acceptance classes. Likewise, neither percentage is an unconfined compressive stress in MPa. State the test, size fraction, conditioning, repeatability and intended application before drawing a material-selection conclusion.</p>",
                    sources: [
                        { id: "BASI674-00160", set: 13, question: 13 },
                        { id: "TRAN808-00148", set: 15, question: 80 }
                    ]
                },
                {
                    id: "materials-aiv-method-and-percentage",
                    title: "Impact value uses passing mass, not retained mass",
                    html: "<p><strong>Aggregate impact value, AIV, characterises resistance to sudden shock.</strong> Under the archived IS 2386 Part IV method, the prepared dry sample passes 12.5 mm and is retained on 10 mm. A 13.5–14.0 kg hammer falls approximately <strong>380 mm</strong>, with the specified 5 mm tolerance, for <strong>15 blows</strong> at intervals of at least one second.</p>" +
                        "<p>Preparation details must not be confused with ACV: fill the measuring cylinder in three layers with 25 strokes each to establish the sample quantity, then transfer the whole sample to the secured impact cup and give it <strong>one tamping of 25 strokes</strong>. After impact, separate the fines on the <strong>2.36 mm sieve</strong>. Weigh passing and retained fractions; the archived procedure rejects a result when their recovered total is more than 1 g below the initial mass, and requires a fresh test.</p>" +
                        "<p><strong>AIV = 100M<sub>passing</sub>/M<sub>initial</sub>.</strong> In the assigned example, initial mass is 300 g and retained mass is 180 g. With the exercise's implied mass conservation, passing mass is <strong>300 − 180 = 120 g</strong>. Hence <strong>AIV = 100 × 120/300 = 40%</strong>.</p>" +
                        "<p>The fraction 120/300 is <strong>0.4</strong>; 0.4% would instead mean a fraction of 0.004. The other assigned problem, with 60% retained, leaves <strong>40% passing</strong> and gives the same percentage AIV. Use duplicate results and method-specific reporting, then compare with the applicable course limit. A high retained fraction indicates less degradation only when the initial sample and recovery basis are comparable.</p>",
                    sources: [
                        { id: "TRAN808-00046", set: 6, question: 81 },
                        { id: "TRAN808-00154", set: 15, question: 86 }
                    ]
                },
                {
                    id: "materials-la-apparatus-and-loss",
                    title: "Los Angeles testing combines abrasion and impact",
                    html: "<p><strong>The LA drum lifts and drops aggregate with an abrasive spherical charge.</strong> Rubbing, collisions and repeated falls degrade the particles. It is therefore more than a pure surface-scratching test and is not interchangeable with ACV or the separate AIV hammer procedure.</p>" +
                        "<p>The actual archived IS 2386 Part IV:1963 LA description gives <strong>700 mm internal diameter and 500 mm internal length</strong>, not 520 mm length. Its appended <strong>Amendment No. 3, October 1983</strong>, changes the original <strong>20–33 rev/min to 30–33 rev/min</strong>. Reading the old body without its amendment would retain the wrong lower speed.</p>" +
                        "<ol><li>Select the test grading representative of the supplied aggregate and prepare the prescribed clean, dry size fractions.</li><li>Use the grading-specific sample mass and spherical charge. The standard distinguishes finer A–D gradings, using 500 revolutions, from coarser E–G gradings, using 1000; neither one sample mass nor one ball count is universal.</li><li>After tumbling, separate on the <strong>1.7 mm sieve</strong>, then wash and dry the retained material as the procedure requires before its final weighing.</li></ol>" +
                        "<p>For initial dry mass M<sub>0</sub> and final dry retained mass M<sub>r</sub>, <strong>LA loss = 100(M<sub>0</sub> − M<sub>r</sub>)/M<sub>0</sub></strong>. The amended reporting provision uses the mean of two results. Uncontrolled spillage is not legitimate abrasion loss.</p>" +
                        "<p>Remember the contrast: <strong>LA post-test sieve 1.7 mm; standard ACV and AIV fines sieve 2.36 mm</strong>. The two bank drum questions both offer 700 × 520 mm and no correct 700 × 500 mm pair under this identified method. Their stored keys remain preserved, not endorsed.</p>",
                    sources: [
                        { id: "BASI674-00161", set: 14, question: 1 },
                        { id: "BASI674-00162", set: 14, question: 2 },
                        { id: "TRAN808-00044", set: 5, question: 90 },
                        { id: "TRAN808-00149", set: 15, question: 81 },
                        { id: "TRAN808-00150", set: 15, question: 82 }
                    ]
                },
                {
                    id: "materials-course-specific-acceptance",
                    title: "Apply the limit for the named material, layer and edition",
                    html: "<p><strong>A test result becomes an acceptance decision only through an applicable specification.</strong> The following are maximum percentage values in the inspected DoR <strong>Standard Specifications, 2073 with Third Amendment 2082</strong>. They are not attributed to an unidentified Indian chart and do not replace project requirements or the other material tests.</p>" +
                        "<table><thead><tr><th scope='col'>Product and table</th><th scope='col'>LA max, %</th><th scope='col'>AIV max, %</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>WBM base, 12.5</th><td>40</td><td>30</td></tr>" +
                        "<tr><th scope='row'>WBM subbase, 12.5</th><td>45</td><td>40</td></tr>" +
                        "<tr><th scope='row'>Penetration macadam, 13.17</th><td>40</td><td>30</td></tr>" +
                        "<tr><th scope='row'>BM, 13.24</th><td>40</td><td>30</td></tr>" +
                        "<tr><th scope='row'>DBM, 13.26</th><td>35</td><td>27</td></tr>" +
                        "<tr><th scope='row'>BC, 13.32</th><td>30</td><td>24</td></tr>" +
                        "<tr><th scope='row'>Surface dressing, 13.13</th><td>35</td><td>27</td></tr></tbody></table>" +
                        "<p>For water-softening WBM aggregate, Table 12.5 directs the wet impact method. The <strong>WBM base AIV limit is 30%, not 40%</strong> in this DoR table; 40% is its base LA limit and its subbase AIV limit. The bank's Indian-conditions stems do not name a verifiable Indian edition, and one does not even name the test.</p>" +
                        "<p><strong>Assigned LA example:</strong> 1.88 kg out of 5 kg passing the final sieve represents <strong>37.6%</strong> loss. Against this table it satisfies the penetration-macadam LA limit, but not DBM, BC or surface dressing. That is an <strong>LA-only comparison</strong>, not approval for penetration macadam and not proof of the stored generic surface-course choice.</p>" +
                        "<p>Keep concrete separate. <strong>IS 383:1970 §3.4</strong> gives AIV not exceeding <strong>30% for concrete wearing surfaces</strong>, including road/runway examples, and <strong>45% for other concrete</strong>, as an alternative to its crushing-value assessment. This supports a historical concrete-specific distinction, not a 30% rule for every asphalt wearing course. Not exceeding also allows equality; it is not the bank's strict less-than wording.</p>",
                    sources: [
                        { id: "BASI674-00163", set: 14, question: 3 },
                        { id: "BASI674-00164", set: 14, question: 4 },
                        { id: "TRAN808-00034", set: 5, question: 80 },
                        { id: "TRAN808-00035", set: 5, question: 81 },
                        { id: "TRAN808-00151", set: 15, question: 83 },
                        { id: "TRAN808-00152", set: 15, question: 84 }
                    ]
                },
                {
                    id: "materials-soundness-and-weathering",
                    title: "Soundness is an accelerated durability index with exposure conditions",
                    html: "<p><strong>Soundness testing assesses resistance to disruptive weathering processes.</strong> Prepared aggregate fractions undergo prescribed cycles of sulfate-solution immersion and drying. Salt crystallisation in accessible pores can cause breakdown. After the specified cleaning, drying and size assessment, loss is calculated relative to the initial dry mass and combined using the method's fraction weighting.</p>" +
                        "<p>It is an accelerated index, not a prediction of years of service or an exact physical reproduction of every freeze–thaw event. Sodium sulfate and magnesium sulfate are different test media; do not compare their numerical losses against the same unqualified limit. Test cycles, fraction sizes and conditioning must accompany a reported value.</p>" +
                        "<table><thead><tr><th scope='col'>IS 383:1970 §3.6 general guide after five cycles</th><th scope='col'>Na<sub>2</sub>SO<sub>4</sub>, %</th><th scope='col'>MgSO<sub>4</sub>, %</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fine aggregate</th><td>10</td><td>15</td></tr>" +
                        "<tr><th scope='row'>Coarse aggregate</th><td>12</td><td>18</td></tr></tbody></table>" +
                        "<p>That historical concrete provision addresses <strong>exposure to frost</strong>, has limits set by purchaser–supplier agreement, and allows an aggregate failing the accelerated test if it passes a specified freezing-and-thawing test satisfactory to the user. The numbers in its note are general guidance within those conditions, not universal highway acceptance limits. The DoR DBM coarse-aggregate table separately gives sodium/magnesium maxima of 12/18%; its product scope remains necessary.</p>" +
                        "<p>The bank's 12/18 answer therefore needs <strong>coarse aggregate</strong> and the relevant test/specification context. Its offered 10/15 pair is meaningful for the fine-aggregate guide. Mechanical impact resistance, sulfate soundness, water absorption and concrete alkali reactivity examine different risks; passing one does not eliminate the others.</p>",
                    sources: [
                        { id: "TRAN808-00051", set: 6, question: 86 },
                        { id: "TRAN808-00153", set: 15, question: 85 }
                    ]
                },
                {
                    id: "materials-polishing-adhesion-and-skid",
                    title: "Surface friction, polishing and binder adhesion are separate properties",
                    html: "<p><strong>A durable wearing aggregate must retain useful texture as well as resist crushing.</strong> Polishing smooths exposed particle surfaces under traffic; abrasion and impact can instead remove material or break particles. An aggregate can resist fragmentation yet polish readily, so a low LA loss alone does not establish satisfactory skid behaviour.</p>" +
                        "<p>The <strong>British Pendulum Tester</strong> measures frictional energy loss as its rubber slider travels over a prepared test surface. Its reported index is commonly called the <strong>British Pendulum Number, BPN</strong>. Levelling, slider condition, contact path, surface wetness and temperature affect comparability. A laboratory polished-stone value uses a defined accelerated-polishing and friction-testing sequence; it is not automatically the in-service road's BPN.</p>" +
                        "<p>A friction coefficient is also a legitimate description of skid resistance under a specified measurement model. Therefore the bank's generic stem is ambiguous unless it names the pendulum method. Do not convert a BPN directly into the coefficient for a vehicle braking calculation without a justified calibration and matching conditions. Microtexture, larger-scale surface texture, water drainage, tyre condition and speed all affect real road friction.</p>" +
                        "<p><strong>Syllabus extension within this topic:</strong> binder–aggregate adhesion can deteriorate in water, causing stripping, which is different from polishing. Coating/stripping assessment and conditioned-versus-unconditioned mixture strength tests address this interaction. A tensile-strength ratio compares conditioned with unconditioned strength on a compatible specimen basis; it is neither AIV nor BPN. Clean materials, compatible binder, appropriate additives where specified and drainage are complementary controls, not substitutes for testing the actual mixture.</p>",
                    sources: [{ id: "TRAN808-00142", set: 14, question: 86 }]
                },
                {
                    id: "materials-wbm-and-reused-aggregate",
                    title: "WBM binds by interlock and fines, not by hydraulic cementing",
                    html: "<p><strong>Water-bound macadam develops a mechanically interlocked coarse-aggregate skeleton.</strong> Rolling brings stones into stable contact. Screenings enter the larger voids; water helps fines move and the layer consolidate under rolling. Suitable binding fines help prevent ravelling. This is not the hydration mechanism of a cement-treated base, nor the bituminous bond of a premixed asphalt layer.</p>" +
                        "<p>The bank's stone-dust and crushed-aggregate-dust answers express this conventional function. However, <strong>screenings and additional binding material are not automatically the same thing</strong>. DoR §1203 permits specified, predominantly non-plastic alternatives such as natural angular pit sand for screenings where allowed. Additional binding material is Engineer-approved with the prescribed properties; it may be unnecessary when the screenings are suitably crushable. The statement that sand can have no role in WBM is too absolute.</p>" +
                        "<p>Material selection also depends on service. A shoulder supports pavement edges and can carry stopped vehicles, emergency manoeuvres or construction traffic. It is <strong>not a zero-load area</strong>. A footpath can have different loads, but still needs durability, drainage and a stable finished surface.</p>" +
                        "<p>Waste brick or other recycled aggregate is therefore a candidate to investigate, not a blanket permission for shoulders. Characterise contamination, grading, wet breakdown, absorption, strength and compaction, and check the specific application requirements. A porous brick fraction may absorb considerable water and change grading through crushing. Neither shoulder nor footpath is uniquely established as acceptable by the bank's undefined insufficient-strength condition. The educational comparison does not approve recycled material for an untested project.</p>",
                    sources: [
                        { id: "TRAN808-00032", set: 4, question: 89 },
                        { id: "TRAN808-00335", set: 31, question: 84 },
                        { id: "TRAN808-00145", set: 14, question: 89 }
                    ]
                },
                {
                    id: "materials-bitumen-tar-and-constituents",
                    title: "Identify the binder rather than calling every dark material asphalt",
                    html: "<p><strong>Bitumen is an organic, predominantly hydrocarbon binder.</strong> Refinery paving bitumen is obtained from petroleum processing, which supports the bank's petroleum answer. Natural bitumen also occurs in deposits and bituminous rocks; refinery origin is not the definition of every bituminous material. In pavement-mixture usage, asphalt concrete means the designed mixture of aggregate, filler and bituminous binder, not just a container of neat binder.</p>" +
                        "<table><thead><tr><th scope='col'>Material</th><th scope='col'>Distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Petroleum bitumen</th><td>A refined paving binder, selected and tested for the proposed mixture and climate.</td></tr>" +
                        "<tr><th scope='row'>Coal tar</th><td>A product of destructive distillation of coal, historically used in some road applications; not petroleum bitumen.</td></tr>" +
                        "<tr><th scope='row'>Wood tar</th><td>A different destructive-distillation product, showing why generic tar does not uniquely identify coal.</td></tr>" +
                        "<tr><th scope='row'>Cement and lime</th><td>Inorganic materials with different binding mechanisms. Not every lime is a hydraulic binder.</td></tr></tbody></table>" +
                        "<p>The tar question is uniquely coal only when <strong>coal tar</strong> is intended: its wood option can also produce a tar. Do not treat tar and bitumen as interchangeable products merely because both are dark and viscous. Product-specific health, compatibility and handling requirements also differ.</p>" +
                        "<p>Stone, soil and mineral dust are permanent highway constituents in their appropriate roles. Petrol is normally a fuel, not a load-bearing paving constituent, so it is the intended contrast in the bank. However, petroleum distillates can be part of manufactured cutback binders; that fact does not authorise improvising a fuel–binder mixture on site. Water in an emulsion is a carrier, not a fossil-derived organic binder.</p>",
                    sources: [
                        { id: "TRAN808-00125", set: 13, question: 81 },
                        { id: "TRAN808-00130", set: 13, question: 85 },
                        { id: "TRAN808-00131", set: 13, question: 86 },
                        { id: "TRAN808-00049", set: 6, question: 84 }
                    ]
                },
                {
                    id: "materials-cutbacks-emulsions-and-water",
                    title: "The carrier determines curing and the meaning of water content",
                    html: "<p><strong>Cutbacks and emulsions reduce application viscosity by different mechanisms.</strong> A cutback contains bitumen and a petroleum distillate; its properties develop as the volatile component is lost. Rapid-, medium- and slow-curing designations concern cutback behaviour. An emulsion disperses bitumen droplets in water with an emulsifying system; breaking and subsequent water loss permit a continuous binder film to develop.</p>" +
                        "<p>Emulsion rapid-, medium- and slow-setting labels must not be confused with cutback curing classes. Aggregate mineralogy, charge, moisture, fines, weather and mixing conditions affect emulsion compatibility and breaking. Water is intentionally part of the emulsion, so an incidental-water limit for a different product cannot be imposed on the complete emulsion.</p>" +
                        "<table><thead><tr><th scope='col'>DoR Table 6.13 product</th><th scope='col'>Maximum water, percent by mass</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>RC cutback</th><td>0.2%</td></tr>" +
                        "<tr><th scope='row'>MC cutback</th><td>0.2%</td></tr>" +
                        "<tr><th scope='row'>SC cutback</th><td>0.5%</td></tr></tbody></table>" +
                        "<p>These verified values belong to the <strong>2073 specifications with Third Amendment 2082</strong>. Table 6.12 for VG paving bitumen does not provide a universal 0.2% water-content row. Consequently, the bank's unqualified bitumen-moisture question does not uniquely specify a governing product.</p>" +
                        "<p>Distinguish supplied emulsion mass from residual bitumen mass in mix or spray calculations. Residue tests describe the binder left after the prescribed separation/conditioning, not the whole emulsion. Unexpected water in a hot-binder system can generate steam and foaming; compliance with a composition limit is not a safe-heating prescription. Use the specified product and controlled procedures, not ad hoc addition of water or fuel to hot bitumen.</p>",
                    sources: [{ id: "TRAN808-00047", set: 6, question: 82 }]
                },
                {
                    id: "materials-penetration-and-test-points",
                    title: "Penetration is a controlled consistency measurement in decimillimetres",
                    html: "<p><strong>Needle penetration measures consistency under specified conditions.</strong> The result changes with temperature, loading and duration. DoR Table 6.12 explicitly specifies <strong>25°C, 100 g total loading and 5 seconds</strong>, with results in <strong>0.1 mm units, or dmm</strong>. A higher result indicates softer consistency under that test, not an independently measured viscosity.</p>" +
                        "<p><strong>Assigned conversion:</strong> 62 dmm × 0.1 mm/dmm = <strong>6.2 mm</strong>. The current stored <strong>A: 6.2 mm is already correct</strong>. The alternative 0.62 mm has an additional erroneous factor of ten. A measured penetration of 62 is one result; it is not by itself a complete penetration-grade range or a viscosity-grade designation.</p>" +
                        "<p>The identified DoR VG10/20/30/40 table has original-binder minimum penetrations of <strong>80/60/45/35 dmm</strong>, respectively, under those conditions. A result meeting one of these minima cannot alone establish the grade, because viscosity and the other grade requirements also apply. Climate selection likewise requires the relevant binder-selection method, not an automatic one-number rule.</p>" +
                        "<p>Independent needle readings must avoid the disturbed region around earlier penetrations and container-wall effects. However, the assigned spacing stem calls them samples and keys <strong>15 mm</strong>. The commonly reported <strong>10 mm</strong> minimum remains <strong>unverified here</strong>: the actual IS 1203 spacing clause was not retrieved in the supplied primary audit, whose attempted URL returned 404. No primary-backed replacement spacing or authority claim is made. Obtain the applicable method before using a numerical spacing in laboratory work.</p>",
                    sources: [
                        { id: "TRAN808-00038", set: 5, question: 84 },
                        { id: "TRAN808-00043", set: 5, question: 89 }
                    ]
                },
                {
                    id: "materials-binder-tests-and-conditions",
                    title: "Ductility, viscosity, density and heating tests answer different questions",
                    html: "<p><strong>Ductility is the extension of a standard binder briquette before its thread breaks.</strong> It is reported in cm, not as a stress or a penetration. The conventional pulling rate in the assigned question is <strong>5 cm/min = 50 mm/min</strong>. Temperature and whether the specimen is original binder or conditioned residue must accompany the result; the bank explanation's 27°C is not universal.</p>" +
                        "<table><thead><tr><th scope='col'>DoR Table 6.12 grade</th><th scope='col'>Minimum RTFO-residue ductility at 25°C, cm</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>VG10</th><td>75</td></tr>" +
                        "<tr><th scope='row'>VG20</th><td>50</td></tr>" +
                        "<tr><th scope='row'>VG30</th><td>40</td></tr>" +
                        "<tr><th scope='row'>VG40</th><td>25</td></tr></tbody></table>" +
                        "<p>These are <strong>residue after rolling thin-film oven, RTFO, conditioning</strong> requirements, not four virgin-binder minima. Table 6.15 separately specifies <strong>50 cm at 27°C for cationic-emulsion residue</strong>. Thus minimum road-bitumen ductility is not universally 50 cm. RTFO conditioning addresses short-term ageing effects; it is not a direct prediction of a fixed number of service years.</p>" +
                        "<p><strong>Viscosity</strong> measures resistance to flow: dynamic viscosity has units Pa·s, with <strong>1 poise = 0.1 Pa·s</strong>; kinematic viscosity is ν = η/ρ, with <strong>1 cSt = 1 mm<sup>2</sup>/s</strong>. The DoR VG table tests absolute viscosity at 60°C and kinematic viscosity at 135°C. Ring-and-ball softening point is an operational test temperature, not a sharp thermodynamic melting point. Penetration, VG and performance grading are different classification systems; PG temperature labels concern the adopted pavement-temperature model, not an automatic conversion from penetration.</p>" +
                        "<p><strong>Binder specific gravity G<sub>b</sub></strong> is a dimensionless density ratio at stated reference temperatures. The bank's 0.97–1.02 is an illustrative range, not a universal purity or acceptance interval; volume conversion requires the measured product value. For a common water reference, binder volume is M<sub>b</sub>/(G<sub>b</sub>ρ<sub>w</sub>).</p>" +
                        "<p><strong>Flash point</strong> concerns transient ignition of vapour in a specified test; <strong>fire point</strong> concerns sustained burning. Neither is a recommended heating target, a decomposition temperature or the mix's laying temperature. The DoR VG table's minimum Cleveland-open-cup flash point of <strong>220°C</strong> is a test requirement, not an operating instruction. Product-specific production controls and safe procedures remain necessary.</p>",
                    sources: [
                        { id: "TRAN808-00039", set: 5, question: 85 },
                        { id: "TRAN808-00040", set: 5, question: 86 },
                        { id: "TRAN808-00172", set: 17, question: 82 }
                    ]
                },
                {
                    id: "materials-asphalt-families-and-bleeding",
                    title: "Choose the mix skeleton and binder film for the intended function",
                    html: "<p><strong>Premixing and surface treatment are different material systems.</strong> A premix coats a graded aggregate blend before laying. A surface dressing applies binder and cover chippings as a treatment; it is not simply a thin batch of DBM. A layer's name describes more than whether it looks black.</p>" +
                        "<table><thead><tr><th scope='col'>System</th><th scope='col'>Structural and material distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>BM</th><td>DoR §1307 describes an open-graded bituminous macadam premix. Drainage and protection are important because water can be trapped within the pavement system.</td></tr>" +
                        "<tr><th scope='row'>DBM</th><td>DoR §1308 describes dense bituminous macadam mainly, but not exclusively, for base/binder and profile-corrective courses.</td></tr>" +
                        "<tr><th scope='row'>BC</th><td>A dense asphalt-concrete mixture used for wearing and profile-corrective courses under §1309.</td></tr>" +
                        "<tr><th scope='row'>Purpose-designed gap/open mixes</th><td>Different aggregate skeletons, mastic contents and drainage functions require their own design criteria; they are not defective dense mixes by definition.</td></tr></tbody></table>" +
                        "<p>The bank's bituminous-bound-macadam answer is a conventional premixed-base choice, not proof that BM and DBM are the same product or that every macadam is a freely draining layer. Highway is a valid DBM application, not an exclusive road category.</p>" +
                        "<p><strong>Bleeding</strong> occurs when excess binder appears at the surface, often as the available void space becomes inadequate under heat and traffic. Controlled design air voids accommodate mixture changes while sufficient effective binder protects and binds particles. Too little binder or poor compaction can promote ravelling and moisture damage.</p>" +
                        "<p>The remedy is not to maximise air voids or intentionally connect them in ordinary dense asphalt. Interconnected permeability can admit water and accelerate deterioration. Distinguish the controlled void structure of a dense mix from a separately designed porous surfacing, and check binder content, grading and compaction together.</p>",
                    sources: [
                        { id: "TRAN808-00033", set: 4, question: 90 },
                        { id: "TRAN808-00165", set: 16, question: 87 },
                        { id: "TRAN808-00168", set: 16, question: 90 }
                    ]
                },
                {
                    id: "materials-marshall-design-and-content",
                    title: "Design optimum binder content; measure actual binder content separately",
                    html: "<p><strong>Marshall mix design compares trial mixtures, not just one maximum-load result.</strong> Select suitable ingredients and grading, prepare replicate specimens at a series of binder contents, condition and compact using the specified method, determine mixture gravities and voids, then assess stability and flow. Stability is a load, commonly kN; flow is deformation in mm. Optimum binder content must satisfy the combined design requirements, not merely maximise stability or density.</p>" +
                        "<p>For the inspected <strong>DoR VG-binder DBM</strong>, Table 13.29 specifies <strong>75 blows on each face</strong> and stability testing at <strong>60°C</strong>, with minimum stability 9.0 kN, flow 2–4 mm, air voids 3–5%, and VFB 65–75%. Section 1308(3)(b) selects binder content at <strong>4% design air voids</strong>, while also meeting the other requirements. VMA minima depend on NMAS and design air voids; 4% air voids alone is not approval.</p>" +
                        "<p>Retain method variants: the clause calls for modified Marshall equipment and <strong>152.4 mm specimens when maximum aggregate size exceeds 26.5 mm</strong>, with stated stability/flow scaling. Modified binders also have different criteria. Cold-mix Table 13.40 instead uses <strong>50 blows per face and 25°C</strong>, with its specified curing, including 72-hour room-temperature curing for the stated stability test. Therefore neither 75 blows nor 60°C is universal across every Marshall application. The 60°C test condition is not proof of the hottest temperature every pavement reaches.</p>" +
                        "<p><strong>Actual binder content</strong> in an existing mix is determined by an appropriate extraction or ignition method, with corrections for moisture, mineral matter and method-specific aggregate loss as applicable. These measurements are distinct from choosing an optimum content by Marshall design. Penetration and ductility test the binder itself.</p>" +
                        "<p>A job-mix formula needs definite ingredient proportions, grading, gravities, performance results and production temperatures, followed by trials and verification. Superpave's gyratory/volumetric approach is a separate syllabus comparison, not permission to substitute a gyration count for Marshall blows without redesign and applicable approval.</p>",
                    sources: [
                        { id: "TRAN808-00050", set: 6, question: 85 },
                        { id: "TRAN808-00042", set: 5, question: 88 }
                    ]
                },
                {
                    id: "materials-binder-mass-bases",
                    title: "State whether binder percentage is based on total mix or aggregate",
                    html: "<p><em>Syllabus extension: asphalt proportioning by mass.</em> None of the assigned questions supplies a complete binder-mass conversion exercise. The numbers below are hypothetical illustrations, not recovered bank givens or recommended binder contents.</p>" +
                        "<p>For a conventional dry-aggregate and binder mixture, let M<sub>b</sub> be binder mass, M<sub>s</sub> dry aggregate mass including mineral filler, and M = M<sub>b</sub> + M<sub>s</sub>. Neglect air mass. Define <strong>P<sub>b</sub> = 100M<sub>b</sub>/M</strong> and <strong>P<sub>s</sub> = 100M<sub>s</sub>/M = 100 − P<sub>b</sub></strong>. Both are percentages of total mix mass. Alternatively, <strong>B = 100M<sub>b</sub>/M<sub>s</sub></strong> is binder as a percentage of aggregate mass.</p>" +
                        "<p>Eliminating the masses gives <strong>B = 100P<sub>b</sub>/(100 − P<sub>b</sub>)</strong> and <strong>P<sub>b</sub> = 100B/(100 + B)</strong>. The denominators differ because adding binder increases the total mass. These are mass percentages, not the volume percentages of binder-filled voids.</p>" +
                        "<ul><li><strong>Hypothetical 5% of total mix:</strong> 5 kg binder with 95 kg aggregate gives B = 100 × 5/95 = <strong>5.2632%</strong> of aggregate mass.</li><li><strong>Hypothetical 5% of aggregate:</strong> 5 kg binder with 100 kg aggregate makes 105 kg mix, so P<sub>b</sub> = 100 × 5/105 = <strong>4.7619%</strong> of total mix mass.</li></ul>" +
                        "<p>DoR's DBM job-mix formula expresses binder by <strong>total mix mass</strong>, but coarse/fine/filler proportions by <strong>total aggregate mass including filler</strong>. Those component percentages must be normalised before combining them. For emulsions or cutbacks, separately account for water or volatile carrier and the specified residue basis; do not substitute the entire supplied binder-product mass for residual bitumen mass in a dry-mixture equation.</p>",
                    sources: []
                },
                {
                    id: "materials-asphalt-specific-gravities",
                    title: "Use the correct gravity for mixture volume and binder absorption",
                    html: "<p><em>Syllabus extension: asphalt mass–volume models.</em> The assigned bank does not give a complete G<sub>mm</sub>, G<sub>mb</sub>, G<sub>sb</sub>, G<sub>se</sub> and binder-gravity dataset. The definitions and equations here are a teaching framework, not an inferred bank mixture.</p>" +
                        "<table><thead><tr><th scope='col'>Gravity</th><th scope='col'>Mass and represented volume</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>G<sub>mb</sub></th><td>Dry mass of compacted mixture divided by its specimen bulk volume times water density; the bulk volume includes air voids.</td></tr>" +
                        "<tr><th scope='row'>G<sub>mm</sub></th><td>Total mixture mass divided by its theoretical air-free volume times water density. It belongs to the mixture, not to aggregate alone.</td></tr>" +
                        "<tr><th scope='row'>G<sub>sb</sub></th><td>Oven-dry aggregate mass divided by particle-envelope volume times water density, including water-permeable particle pores but excluding interparticle spaces.</td></tr>" +
                        "<tr><th scope='row'>G<sub>se</sub></th><td>Oven-dry aggregate mass divided by effective aggregate volume times water density; the envelope volume occupied by absorbed binder is excluded.</td></tr>" +
                        "<tr><th scope='row'>G<sub>sa</sub></th><td>Apparent aggregate gravity, excluding the water-permeable particle-pore volume.</td></tr></tbody></table>" +
                        "<p>With compatible determinations, normally <strong>G<sub>sb</sub> ≤ G<sub>se</sub> ≤ G<sub>sa</sub></strong>. For stockpiles with dry mass fractions f<sub>i</sub>, the combined particle gravity follows <strong>1/G<sub>blend</sub> = Σ(f<sub>i</sub>/G<sub>i</sub>)</strong>, using the same gravity definition throughout. It is a mass-weighted harmonic relationship, not an arithmetic mean.</p>" +
                        "<p>Using P<sub>b</sub> and P<sub>s</sub> as <strong>percentage numbers of total mix mass</strong>, and G<sub>b</sub> for binder, the air-free volume account gives <strong>G<sub>mm</sub> = 100/(P<sub>s</sub>/G<sub>se</sub> + P<sub>b</sub>/G<sub>b</sub>)</strong>. Thus <strong>G<sub>se</sub> = P<sub>s</sub>/(100/G<sub>mm</sub> − P<sub>b</sub>/G<sub>b</sub>)</strong> when the denominator is positive and the measurements are compatible.</p>" +
                        "<p>The absorbed-binder volume per unit aggregate mass is proportional to 1/G<sub>sb</sub> − 1/G<sub>se</sub>. Therefore <strong>P<sub>ba</sub> = 100G<sub>b</sub>(1/G<sub>sb</sub> − 1/G<sub>se</sub>)</strong> is absorbed binder as percent of <strong>aggregate mass</strong>. Effective binder is <strong>P<sub>be</sub> = P<sub>b</sub> − P<sub>ba</sub>P<sub>s</sub>/100</strong>, percent of <strong>total mix mass</strong>. Absorbed binder is not an additional ingredient and must not be counted twice.</p>",
                    sources: []
                },
                {
                    id: "materials-asphalt-void-volumes",
                    title: "Derive air voids, VMA and VFA from their volume denominators",
                    html: "<p><em>Syllabus extension: a complete hypothetical asphalt volumetric example.</em> No assigned question provides these mixture gravities and composition together. Assume a dry conventional mixture with <strong>G<sub>mm</sub> = 2.500, G<sub>mb</sub> = 2.400, G<sub>sb</sub> = 2.650, P<sub>s</sub> = 95%</strong> and P<sub>b</sub> = 5% of total mix mass, using compatible gravity references.</p>" +
                        "<p>For mass M, specimen bulk volume is M/(G<sub>mb</sub>ρ<sub>w</sub>) and air-free mixture volume is M/(G<sub>mm</sub>ρ<sub>w</sub>). Their difference divided by bulk volume yields <strong>V<sub>a</sub> = 100(1 − G<sub>mb</sub>/G<sub>mm</sub>)</strong>. Aggregate-envelope volume is MP<sub>s</sub>/(100G<sub>sb</sub>ρ<sub>w</sub>); subtracting it from specimen volume yields <strong>VMA = 100 − G<sub>mb</sub>P<sub>s</sub>/G<sub>sb</sub></strong>. Both are percent of <strong>total compacted specimen volume</strong>.</p>" +
                        "<p><strong>VMA contains air plus effective binder volume, excluding absorbed binder already inside the aggregate envelope.</strong> The effective-binder volume percentage is VMA − V<sub>a</sub>. Consequently <strong>VFA = 100(VMA − V<sub>a</sub>)/VMA</strong>, also called VFB in the cited DoR table. VFA's denominator is <strong>VMA volume</strong>, not total specimen volume or binder mass.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical calculation</th><th scope='col'>Result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>100(1 − 2.400/2.500)</th><td>V<sub>a</sub> = 4.0000%</td></tr>" +
                        "<tr><th scope='row'>100 − 2.400 × 95/2.650</th><td>VMA ≈ 13.9623%</td></tr>" +
                        "<tr><th scope='row'>VMA − V<sub>a</sub></th><td>Effective binder volume ≈ 9.9623% of specimen volume</td></tr>" +
                        "<tr><th scope='row'>100(VMA − 4)/VMA, using unrounded VMA</th><td>VFA ≈ 71.3514%</td></tr></tbody></table>" +
                        "<p><strong>Sensitivity at fixed composition:</strong> holding G<sub>mm</sub>, G<sub>sb</sub> and P<sub>s</sub> constant gives dV<sub>a</sub>/dG<sub>mb</sub> = −100/G<sub>mm</sub> and dVMA/dG<sub>mb</sub> = −P<sub>s</sub>/G<sub>sb</sub>. A hypothetical G<sub>mb</sub> increase of 0.025 reduces air voids by <strong>1 percentage point</strong> and VMA by about <strong>0.8962 percentage points</strong>. Changing binder content is a different experiment because the held quantities need not remain fixed.</p>" +
                        "<p>DoR DBM field density is compared with the day's <strong>G<sub>mm</sub>-based density</strong>, with a stated minimum of 92%, not 92% of Marshall specimen density. On a compatible basis, 92% of theoretical maximum density corresponds algebraically to 8% air voids; it is not the laboratory 4% design target. This hypothetical example gives 96% of theoretical maximum density but proves neither a Marshall optimum nor compliance with every mix requirement.</p>",
                    sources: []
                },
                {
                    id: "materials-subgrade-evaluation-families",
                    title: "Match the subgrade test to the parameter the design needs",
                    html: "<p><strong>Subgrade evaluation concerns support under the expected moisture, stress and traffic conditions.</strong> The bank's shear, bearing and penetration grouping is useful, but these families produce different quantities. Classification, plasticity, compaction, drainage, swelling and seasonal variability are needed alongside strength or stiffness testing.</p>" +
                        "<table><thead><tr><th scope='col'>Test family</th><th scope='col'>Information obtained</th><th scope='col'>Important distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Shear</th><td>Direct shear or triaxial strength under stated drainage and stress conditions.</td><td>Effective-stress parameters c′ and φ′ differ from undrained strength; neither is a CBR percentage.</td></tr>" +
                        "<tr><th scope='row'>Bearing/support</th><td>Pressure–settlement response under a plate or other defined loading.</td><td>A support modulus is not automatically allowable foundation bearing pressure.</td></tr>" +
                        "<tr><th scope='row'>Penetration</th><td>Resistance to a specified penetrating device, such as the CBR plunger.</td><td>CBR, SPT and DCP use different apparatus, outputs and correlations.</td></tr>" +
                        "<tr><th scope='row'>Repeated-load stiffness</th><td>Recoverable response under controlled cyclic loading.</td><td>Resilient modulus requires stress divided by recoverable strain, not a single penetration ratio.</td></tr></tbody></table>" +
                        "<p>For moisture fraction w = M<sub>water</sub>/M<sub>dry</sub>, <strong>ρ<sub>d</sub> = ρ<sub>wet</sub>/(1 + w)</strong>. Relative compaction is <strong>100ρ<sub>d,field</sub>/ρ<sub>d,MDD</sub></strong>, using the same material and named laboratory compaction reference. Enter 10% moisture as 0.10 in that equation, not 10.</p>" +
                        "<p>DoR §1003 in the amended specifications requires untreated subgrade field dry density at least <strong>95% heavy-compaction MDD</strong>, with four-day-soaked laboratory CBR at least <strong>5% at 95% heavy MDD</strong>, plus its other material conditions. Its moisture range is <strong>95–100% of OMC</strong>, not ±5 percentage points. If OMC is hypothetically 12%, that range is <strong>11.4–12.0%</strong>. The heavy Part 8 basis is not interchangeable with the flexible guideline's separate low-volume Annex E 100%-standard-Part-7 basis.</p>",
                    sources: [
                        { id: "TRAN808-00173", set: 17, question: 83 },
                        { id: "TRAN808-00362", set: 33, question: 87 }
                    ]
                },
                {
                    id: "materials-cbr-method-and-conditioning",
                    title: "CBR is a condition-dependent penetration-resistance ratio",
                    html: "<p><strong>CBR means California Bearing Ratio.</strong> It compares the load needed to penetrate the test material with the standard-material load at the same penetration. The ratio is normally expressed in percent. It is an empirical index related to strength, not a direct stress–strain modulus, safe bearing pressure or percentage of a universal maximum soil strength.</p>" +
                        "<ol><li><strong>Prepare and identify the specimen:</strong> undisturbed or remoulded, with recorded grading, oversize treatment, density, moisture and static/dynamic or light/heavy compaction method as applicable.</li><li><strong>Specify conditioning:</strong> the archived IS 2720 Part 16:1987 soaked procedure keeps the specimen under the prescribed surcharge in water for <strong>96 hours</strong>, observes swelling and allows the specified drainage before penetration. An unsoaked test is a separately reported condition.</li><li><strong>Apply the appropriate surcharge and seat the plunger:</strong> establish contact and the measurement origin. The surcharge represents the specified overlying pavement/base loading; it is not the CBR reference load.</li><li><strong>Penetrate:</strong> use a <strong>50 mm diameter plunger at 1.25 mm/min</strong>, recording the load–penetration curve.</li><li><strong>Evaluate:</strong> use corrected loads at <strong>2.5 and 5 mm</strong>, applying the method's repeat/selection rule.</li></ol>" +
                        "<p>Where initial seating or surface irregularity produces the specified concave-up start, the method corrects the origin using the tangent at greatest slope. This is a documented curve correction, not permission to choose a more favourable result. Expansion is also reported: <strong>100Δh/h<sub>initial</sub></strong>, with both lengths in the same units.</p>" +
                        "<p><strong>Laboratory and in-situ CBR both exist.</strong> Field CBR reflects the field moisture and support condition at measurement; a soaked remoulded laboratory specimen represents its chosen conditioning. They are not automatically equivalent. IS Part 16 is the laboratory method, while FHWA's geotechnical manual separately identifies field CBR. The existence of field CBR does not imply every other shear test can only ever be performed in a laboratory.</p>",
                    sources: [
                        { id: "TRAN808-00174", set: 1, question: 83 },
                        { id: "TRAN808-00175", set: 17, question: 84 },
                        { id: "TRAN808-00363", set: 33, question: 88 }
                    ]
                },
                {
                    id: "materials-cbr-reference-loads",
                    title: "Use one CBR force basis and repeat a higher 5 mm result",
                    html: "<p><em>Syllabus extension: primary-method CBR reference forces and hypothetical calculations.</em> No assigned record gives a measured load–penetration curve. The reference values are from <strong>Figure 2 and §7.3 of IS 2720 Part 16:1987</strong>; the specimen loads below are invented only to demonstrate the calculation.</p>" +
                        "<table><thead><tr><th scope='col'>Penetration</th><th scope='col'>Tabulated total reference force</th><th scope='col'>Conversion to kN</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>2.5 mm</th><td>1370 kgf</td><td>13.4351105 kN ≈ 13.4351 kN</td></tr>" +
                        "<tr><th scope='row'>5.0 mm</th><td>2055 kgf</td><td>20.15266575 kN ≈ 20.1527 kN</td></tr></tbody></table>" +
                        "<p>These use <strong>1 kgf = 9.80665 N</strong>. The alternative pair 13.24/19.96 kN is <strong>not the exact conversion of these IS total loads</strong>. Figure 2 also prints unit loads of 70/105 kg/cm<sup>2</sup>, understood as force per area in the historical notation. Do not divide a total force in kN by a unit pressure. Use total/total or pressure/pressure at the same penetration, retaining the identified table's basis rather than mixing rounded columns.</p>" +
                        "<p><strong>CBR = 100P<sub>test</sub>/P<sub>reference</sub>.</strong> Hypothetically, corrected total loads of 137 kgf at 2.5 mm and 164.4 kgf at 5 mm give <strong>10% and 8%</strong>, respectively. The 2.5 mm value, 10%, is used under the ordinary selection rule. Converting both numerator and denominator to kN leaves each ratio unchanged.</p>" +
                        "<p>If a different hypothetical test gives <strong>10% at 2.5 mm and 12% at 5 mm</strong>, do <strong>not</strong> simply select 12% after one test. The method requires a repeat; use the 5 mm CBR when that behaviour is confirmed. A greater absolute 5 mm force by itself is irrelevant because its reference force is also greater.</p>" +
                        "<p><strong>CBR can exceed 100%</strong> when the test material resists penetration more than the reference material under the defined conditions. Such a value is not a calculation error merely for exceeding 100, and does not turn CBR into an allowable bearing pressure or a modulus.</p>",
                    sources: []
                },
                {
                    id: "materials-resilient-modulus-from-cbr",
                    title: "An empirical CBR correlation estimates, rather than measures, modulus",
                    html: "<p><strong>Resilient modulus M<sub>R</sub> measures recoverable stiffness under repeated loading.</strong> In a cyclic triaxial interpretation, <strong>M<sub>R</sub> = Δσ<sub>d</sub>/ε<sub>r</sub></strong>, where Δσ<sub>d</sub> is the applied cyclic deviator stress and ε<sub>r</sub> the recoverable axial strain. Strain is dimensionless, so modulus has stress units. Permanent accumulated strain is not the denominator.</p>" +
                        "<p>The identified DoR <strong>Guidelines for the Design of Flexible Pavements-2014, Second Edition 2021</strong>, §5.2, Eqs. 13–14, gives the following subgrade estimates, with CBR entered as the <strong>percentage number</strong>:</p>" +
                        "<ul><li><strong>M<sub>R</sub> = 10CBR MPa</strong> for CBR ≤ 5.</li><li><strong>M<sub>R</sub> = 17.6CBR<sup>0.64</sup> MPa</strong> for CBR &gt; 5.</li></ul>" +
                        "<p>For the assigned <strong>CBR = 5%</strong>, use the first branch with 5, not 0.05: <strong>M<sub>R</sub> = 50 MPa</strong>. The stored 50 MPa result is supported by this guideline. Do not describe it as a directly verified NRS correlation clause, continue 10CBR across every CBR range, or silently substitute a different correlation from another design method.</p>" +
                        "<p>For comparison, a <strong>hypothetical repeated-load measurement</strong> of 80 kPa cyclic stress and 0.001 recoverable strain gives <strong>80,000 kPa = 80 MPa</strong>. This is not a recovered CBR value. Moisture, density, confinement, stress level and testing history affect measured stiffness; an empirical CBR estimate cannot uniquely reproduce it.</p>" +
                        "<p>Section 5.3's layered-subgrade/embankment treatment uses a <strong>deflection-equivalent composite modulus</strong>, not an arithmetic average, with its design estimate capped at <strong>100 MPa</strong>. The assigned 50 MPa is not that cap. The 2021 document was inspected through an identified nongovernment HERMES copy; it was not byte-compared with the inaccessible official DoR download, and its title does not establish later current adoption.</p>",
                    sources: [{ id: "TRAN808-00041", set: 5, question: 87 }]
                },
                {
                    id: "materials-r-value-and-plate-support",
                    title: "R-value, subgrade reaction and elastic modulus are not interchangeable",
                    html: "<p><strong>The Hveem stabilometer determines an empirical resistance value, R-value.</strong> As described in FHWA NHI-05-037 §5.4.2, vertical loading of a conditioned, compacted specimen produces a measured lateral pressure through the surrounding membrane/fluid system. The pressure ratio and the apparatus displacement response enter the index. It measures resistance to deformation; it is not the radius of a stress bulb, an elastic modulus in MPa or the CBR percentage.</p>" +
                        "<p><strong>Plate-bearing equipment measures pressure–settlement response.</strong> For the stated loading point and support conditions, <strong>k = σ/δ</strong>, where σ = P/A is applied pressure and δ is settlement. Thus k has dimensions force/length<sup>3</sup>, or pressure per length. It is not P/δ, which would instead be a force–displacement stiffness.</p>" +
                        "<p><strong>Hypothetical unit example:</strong> σ = 100 kPa and δ = 2 mm = 0.002 m give <strong>k = 50,000 kPa/m = 50 MPa/m = 0.05 N/mm<sup>3</sup></strong>. Writing 50 MPa omits the length denominator. In contrast, resilient modulus divides stress by dimensionless recoverable strain and is correctly reported in MPa.</p>" +
                        "<p>FHWA §5.4.6 emphasises that k depends on the soil <strong>and</strong> the loaded slab/plate size and stiffness, as well as the support system. A small plate and a large slab do not automatically give the same value. State plate geometry, selected settlement or pressure range, loading history, moisture and whether subbase/composite support is represented. The bank's 750 mm plate and 1.25 mm settlement describe a particular convention, not the definition of every k test.</p>" +
                        "<p>CBR-to-R, CBR-to-modulus and modulus-to-k relationships require their own calibrated method and matching conditions. The primary FHWA manual explains these concepts but is not a Nepal specification or a source of automatic permission to substitute its design correlations into a DoR calculation.</p>",
                    sources: [
                        { id: "TRAN808-00304", set: 28, question: 89 },
                        { id: "TRAN808-00339", set: 31, question: 88 }
                    ]
                },
                {
                    id: "materials-frost-and-weak-subgrade",
                    title: "Evaluate water, temperature and susceptibility together",
                    html: "<p><strong>Damaging frost heave requires a freezing regime, frost-susceptible material and an available water supply.</strong> Water can migrate towards the freezing front and form ice lenses, so the mechanism is not merely the expansion of the water originally occupying a fixed pore space. Grading and pore structure influence both water movement and ice segregation. A dry-season soil test cannot by itself establish winter performance.</p>" +
                        "<p>During thaw, excess water and temporarily impeded drainage can reduce support markedly. Frost heave and thaw weakening are related but different design concerns. Grain-size screening is useful, but does not replace information about groundwater, capillary supply, freezing depth, climate and the pavement's drainage conditions.</p>" +
                        "<p>The bank attributes a widely used grain-size rule of thumb to <strong>Casagrande</strong>. That is retained as the <strong>bank's conventional historical attribution, not independently verified from its original primary publication</strong>. No precise historical fines threshold or universal Nepal frost classification is invented from the name alone.</p>" +
                        "<ol><li><strong>Investigate variability:</strong> delineate weak, wet, expansive or frost-susceptible stretches and test representative material under the intended conditions.</li><li><strong>Control water:</strong> provide functioning drainage, suitable outlets and filtration/separation so water and fines are not simply trapped beneath the surface.</li><li><strong>Choose treatment:</strong> assess removal/replacement, selected capping, mechanical improvement or compatible chemical stabilisation with trials. A geosynthetic separator does not by itself convert wet soil into a stiff structural layer.</li><li><strong>Verify treated behaviour:</strong> check compaction, curing where required, strength/stiffness and durability, including adverse seasonal conditions rather than only an immediate dry result.</li></ol>" +
                        "<p>Asphalt-mix quality and subgrade quality interact, but one cannot replace the other. Additional asphalt is not a universal cure for uncontrolled water, frost or swelling. No location-specific treatment thickness, stabiliser dosage, frost-protection depth or construction approval follows from the assigned historical question.</p>",
                    sources: [{ id: "TRAN808-00290", set: 27, question: 85 }]
                }
            ],
            gaps: [
                "Syllabus extension — materials-aggregate-absorption: the bank gives no complete dry/SSD/immersed mass dataset. The 2600/2640/1640 g illustration is hypothetical. Water absorption does not establish bitumen absorption, and packing-density voids require compatible moisture and particle-volume definitions.",
                "Syllabus extensions — materials-binder-mass-bases, materials-asphalt-specific-gravities and materials-asphalt-void-volumes: no assigned question supplies complete asphalt proportions, gravities, absorption or volumetric measurements. The two 5% conversions and Gmm 2.500/Gmb 2.400/Gsb 2.650/Ps 95% example, including the fixed-composition sensitivity calculation, are explicitly hypothetical and do not establish an optimum binder content.",
                "Syllabus extension — materials-cbr-reference-loads: IS 2720 Part 16:1987 supplies the reference forces, not a bank specimen curve. The 137/164.4 kgf specimen loads and the separate 10%/12% repeat example are hypothetical. A primary source establishing the alternative 13.24/19.96 kN pair was not verified; those numbers must not be called exact conversions of the inspected IS totals.",
                "The bank supplies no full stockpile grading, mixture trial series, replicate Marshall results, measured binder absorption, moisture-susceptibility dataset or job-mix formula. Blending, ageing, adhesion and Superpave comparisons are syllabus teaching extensions within the relevant blocks, not extra bank questions or complete laboratory operating instructions.",
                "The Indian-conditions WBM questions omit an identifiable IRC/MoRTH edition, and one omits the test itself. The inspected amended DoR limits provide explicitly named product comparisons, not proof of an unspecified historical Indian limit. The 37.6% LA result alone cannot approve a material for any complete pavement application.",
                "Penetration needle-point spacing remains unresolved: the bank keys 15 mm, while 10 mm is commonly reported elsewhere. The actual IS 1203 spacing clause was not retrieved in the supplied primary audit; its attempted URL returned 404. Neither a replacement spacing nor present method compliance is certified here.",
                "The generic base/surface maximum-size stems lack a product, grading, lift thickness and maximum/NMAS definition. The 19.5 mm option is not an exact match to the named 19 or 13.2 mm NMAS values. No missing grading is reconstructed, and malformed or shifted extracted specification rows are not silently normalised into a new acceptance chart.",
                "Casagrande's original frost-screening publication and numerical rule were not independently verified. The supplied historical name cannot set frost-protection depth or identify a site's risk without soil grading, water supply and temperature data. Weak-material use in shoulders or footpaths likewise requires actual performance evidence and application approval.",
                "No design-subgrade sampling distribution, seasonal modulus series or layered-support dataset is supplied. The 2021 guideline's 90th/80th-percentile wording does not itself define ascending versus exceedance ordering; a lower-tail 90%-exceedance value is not an ordinary upper 90th percentile. No design quantile is invented. Laboratory conditioning, field density, the guideline's low-volume standard-compaction basis and its main heavy-compaction context must remain distinct.",
                "References are identified research editions: archived IS methods with the relevant inspected amendments, an official government-CDN copy of DoR specifications 2073 with Third Amendment 2082, and the cover-identified April 2021 flexible-pavement guideline on the nongovernment HERMES mirror. The mirror was not byte-compared with the inaccessible official PDF. FHWA and Pavement Interactive explain principles, not Nepal adoption. These educational notes certify neither latest editions, current law, complete contract compliance nor construction approval."
            ],
            cautions: [
                {
                    html: "<p><strong>ACV force error:</strong> BASI674-00150 keys 4000n, but the inspected standard test applies <strong>40 tf = 392.266 kN</strong>, conventionally rounded to 400 kN, over 10 minutes. There is no correct force option in that version. TRAN808-00162's 40 ton intends tonne-force, not a mass-only load unit. Neither stem means that the sample must fail catastrophically before the prescribed load is reached.</p>",
                    sources: [
                        { id: "BASI674-00150", set: 13, question: 3 },
                        { id: "TRAN808-00162", set: 16, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>Corrupted crushing-test stem:</strong> the words run rice do not define a preparation step, and sieve units are omitted. The intended standard fraction is passing <strong>12.5 mm</strong> and retained on <strong>10 mm</strong>; the resulting fines use 2.36 mm. This interpretation is explained without repairing the stored text or options.</p>",
                    sources: [{ id: "TRAN808-00146", set: 14, question: 90 }]
                },
                {
                    html: "<p><strong>Unspecified strength index:</strong> both less-than-10/above-35 stems omit the test, while their explanations disagree between ACV and AIV. Lower degradation generally indicates greater resistance under the same method. The descriptors are not universal acceptance classes, and the archived ACV warning at 30 or higher concerns method reliability and the ten-percent-fines alternative, not a universal course rejection limit.</p>",
                    sources: [
                        { id: "BASI674-00160", set: 13, question: 13 },
                        { id: "TRAN808-00148", set: 15, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>No correct IS drum-dimension option:</strong> the archived LA machine has <strong>700 mm inside diameter × 500 mm inside length</strong>, not 700 × 520 mm. Both stored dimension keys conflict with this identified text. The appended <strong>Amendment No. 3, October 1983</strong>, also changes the old 20–33 rpm wording to <strong>30–33 rpm</strong>; do not use the unamended speed range.</p>",
                    sources: [
                        { id: "BASI674-00161", set: 14, question: 1 },
                        { id: "TRAN808-00149", set: 15, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>WBM test/edition ambiguity:</strong> one stem expressly asks AIV and the other only a maximum value, with an explanation naming LA. In amended DoR Table 12.5, <strong>base LA/AIV = 40/30%</strong> and <strong>subbase = 45/40%</strong>; base AIV is not 40%. These Nepal provisions do not independently verify the bank's unspecified Indian specification. Keep the test, layer, conditioning and document attached to any limit.</p>",
                    sources: [
                        { id: "BASI674-00163", set: 14, question: 3 },
                        { id: "TRAN808-00151", set: 15, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>Concrete-specific impact limits:</strong> IS 383:1970 supports AIV <strong>≤30% for concrete wearing surfaces</strong> and <strong>≤45% for other concrete</strong>, not every material named road or runway. The bank's strict less-than signs also differ from not exceeding. Asphalt limits are product-specific: amended DoR gives DBM 27% and BC 24%, so a universal 30% wearing-course rule is not established.</p>",
                    sources: [
                        { id: "BASI674-00164", set: 14, question: 4 },
                        { id: "TRAN808-00152", set: 15, question: 84 },
                        { id: "TRAN808-00034", set: 5, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>LA calculation versus suitability:</strong> <strong>100 × 1.88/5 = 37.6%</strong>. The stored generic bituminous-surface-course choice conflicts with its explanation and is not a complete suitability finding. Under the identified amended DoR table it meets penetration macadam's <strong>LA-only</strong> maximum of 40%, but exceeds DBM 35%, BC 30% and surface dressing 35%. Other properties and contract requirements remain untested; the original key is not changed.</p>",
                    sources: [{ id: "TRAN808-00035", set: 5, question: 81 }]
                },
                {
                    html: "<p><strong>Fraction is not percent:</strong> the passing mass is 300 − 180 = 120 g. Its fraction is <strong>0.4</strong>, corresponding to <strong>AIV 40%</strong>, not 0.4%. The stored 0.4 option is interpretable only as the fraction, while the conventional AIV report is a percentage.</p>",
                    sources: [{ id: "TRAN808-00046", set: 6, question: 81 }]
                },
                {
                    html: "<p><strong>Soundness category omitted:</strong> the historical five-cycle IS 383 guide is <strong>coarse Na/Mg 12/18%</strong> but <strong>fine Na/Mg 10/15%</strong>, so another offered pair also has a valid context. Retain frost exposure, agreement of limits and the stated freezing-and-thawing alternative. Neither pair is a universal limit for every highway material merely because IS 2386 Part V is the test method.</p>",
                    sources: [{ id: "TRAN808-00153", set: 15, question: 85 }]
                },
                {
                    html: "<p><strong>Definition, not permissible fraction:</strong> three-fifths means a flaky particle's thickness is <strong>less than 0.6 times its mean sieve size</strong>. It is not an allowance for 60% flaky aggregate. Flakiness percentage uses the eligible tested mass; elongation's 1.8 length criterion belongs to the applicable coarse-fraction test. Combined indices require the specified procedure.</p>",
                    sources: [{ id: "TRAN808-00135", set: 13, question: 90 }]
                },
                {
                    html: "<p><strong>Maximum-size questions are under-specified:</strong> 50 mm cannot be a universal base maximum without the product and grading. The surface key <strong>19.5 mm</strong> is not the <strong>19 mm or 13.2 mm</strong> named in its explanation and the BC NMAS headings. Maximum and nominal maximum size are different concepts; a nearest-number substitution cannot repair the missing definition or supply an exact answer.</p>",
                    sources: [
                        { id: "TRAN808-00170", set: 17, question: 80 },
                        { id: "TRAN808-00171", set: 17, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>Size-class qualifications:</strong> fine/coarse are conventional aggregate classes, with fine aggregate mostly passing 4.75 mm under IS 383 and prescribed grading allowances. Some asphalt clauses use a different boundary. Mineral filler has its own grading: <strong>75 μm = 0.075 mm</strong>, and amended DoR Table 13.27 allows <strong>85–100% passing</strong>, not invariably 100%. Do not apply the filler grading to the whole aggregate blend.</p>",
                    sources: [
                        { id: "TRAN808-00137", set: 14, question: 81 },
                        { id: "TRAN808-00158", set: 16, question: 80 },
                        { id: "TRAN808-00160", set: 16, question: 82 },
                        { id: "TRAN808-00166", set: 16, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>Duplicate numerical answers:</strong> the intended compatible-density calculation gives <strong>7.142857…% ≈ 7.1429%</strong>, or 7.1% to one decimal. <strong>A: 7.1 equals B: 7.10</strong>; A is not uniquely correct. Two-decimal rounding would be 7.14%, not a numerical distinction between those options. The density and gravity must represent compatible dry/particle-volume bases; aggregate Gs is not automatically asphalt Gmm.</p>",
                    sources: [{ id: "TRAN808-00139", set: 14, question: 83 }]
                },
                {
                    html: "<p><strong>Origin and angularity are not stand-alone quality certificates:</strong> sound igneous rock is often useful, but weathered igneous material can fail and other rock origins can be suitable. Sharp sand can improve interlock only under comparable grading, binder and compaction conditions. Neither label uniquely establishes strength, mix stability, durability or course acceptance.</p>",
                    sources: [
                        { id: "TRAN808-00133", set: 13, question: 88 },
                        { id: "TRAN808-00169", set: 17, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Skid-resistance method omitted:</strong> British Pendulum Number is appropriate when a British pendulum test is specified, but the offered friction coefficient is also a legitimate friction measure. An unspecified skid-resistance stem does not uniquely establish BPN. Laboratory polished-stone value, road BPN and a vehicle braking coefficient are not automatically interchangeable.</p>",
                    sources: [{ id: "TRAN808-00142", set: 14, question: 86 }]
                },
                {
                    html: "<p><strong>Shoulders are not nontraffic areas:</strong> they can carry edge, stopped-vehicle, emergency and construction loads. Weak brick waste has no blanket approval for a shoulder, and the offered footpath is another possible lower-duty context. Actual material properties, drainage, loading and the application specification are missing, so the source cannot uniquely approve either use.</p>",
                    sources: [{ id: "TRAN808-00145", set: 14, question: 89 }]
                },
                {
                    html: "<p><strong>WBM fines are not a cementing binder:</strong> stone dust is the intended conventional answer, but screenings and separately specified binding material must be distinguished. DoR §1203 allows appropriate non-plastic angular pit sand as screenings where permitted, and additional binding material may be unnecessary with suitably crushable screenings. The explanation's absolute exclusion of sand is too broad; water assists the mechanical process.</p>",
                    sources: [
                        { id: "TRAN808-00032", set: 4, question: 89 },
                        { id: "TRAN808-00335", set: 31, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>Tar is not uniquely coal tar:</strong> destructive distillation of coal produces coal tar, but wood also produces a tar and is an offered option. The stored coal answer requires the intended road-coal-tar context. Neither tar should be conflated with petroleum bitumen or natural asphalt.</p>",
                    sources: [{ id: "TRAN808-00131", set: 13, question: 86 }]
                },
                {
                    html: "<p><strong>Binder and constituent scope:</strong> petroleum is the intended source of refinery paving bitumen, but natural bitumen exists. Petrol is normally a fuel rather than a permanent paving constituent; manufactured cutbacks can nevertheless contain petroleum distillates. Bitumen is organic, while cement and lime are inorganic, but not every lime is hydraulic. None of these facts authorises improvised fuel or water addition to hot binder.</p>",
                    sources: [
                        { id: "TRAN808-00125", set: 13, question: 81 },
                        { id: "TRAN808-00130", set: 13, question: 85 },
                        { id: "TRAN808-00049", set: 6, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>The current penetration key is already correct:</strong> <strong>62 dmm = 6.2 mm</strong>, matching A. The reference conditions are 25°C, 100 g and 5 s in the cited DoR table. A single reading of 62 is not itself a complete grade designation, and penetration alone does not establish a VG grade or universal climate selection.</p>",
                    sources: [{ id: "TRAN808-00038", set: 5, question: 84 }]
                },
                {
                    html: "<p><strong>Needle-point spacing remains unverified:</strong> the stem calls the points samples and keys 15 mm. Although 10 mm is commonly reported, the actual IS 1203 clause was not retrieved in the supplied primary audit. There is no verified numerical rekey or claim that a primary source supports 10 mm here. Disturbed zones and wall clearance must be handled under the applicable test method.</p>",
                    sources: [{ id: "TRAN808-00043", set: 5, question: 89 }]
                },
                {
                    html: "<p><strong>Ductility needs grade, condition and temperature:</strong> the conventional 5 cm/min rate is not 5 mm/min. The amended DoR VG10/20/30/40 table specifies <strong>RTFO-residue ductility at 25°C of at least 75/50/40/25 cm</strong>. Its separate cationic-emulsion residue requirement is 50 cm at 27°C. There is no universal original-road-bitumen minimum of 50 cm at every temperature.</p>",
                    sources: [
                        { id: "TRAN808-00039", set: 5, question: 85 },
                        { id: "TRAN808-00040", set: 5, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Water-content limit is product-specific:</strong> amended DoR Table 6.13 supports maximum <strong>0.2% by mass for RC/MC cutbacks</strong> and <strong>0.5% for SC cutbacks</strong>. This is not a universal VG-binder limit, and neither number is a water limit for the complete emulsion, which intentionally contains water. Composition limits do not by themselves prescribe safe heating.</p>",
                    sources: [{ id: "TRAN808-00047", set: 6, question: 82 }]
                },
                {
                    html: "<p><strong>Binder gravity range is illustrative:</strong> 0.97–1.02 is not a universal specification or a test proving purity. Specific gravity is dimensionless and needs reference temperatures and a defined product. Use measured binder gravity for volume conversion, not an automatic midpoint or an assumption that every emulsion/cutback has neat-bitumen density.</p>",
                    sources: [{ id: "TRAN808-00172", set: 17, question: 82 }]
                },
                {
                    html: "<p><strong>BM, DBM and road category:</strong> the specified BM is an open-graded premix, whereas DBM is a dense mixture mainly used in base/binder and profile-corrective courses. The bank's BBM terminology does not establish a separate verified specification, nor make DBM an open drainage layer. Highway is a valid DBM use but not an exclusive permitted road category.</p>",
                    sources: [
                        { id: "TRAN808-00033", set: 4, question: 90 },
                        { id: "TRAN808-00165", set: 16, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>Controlled air voids, not deliberately interconnected voids:</strong> ordinary dense asphalt needs a balanced binder–aggregate–air volume system. Its bleeding resistance is not improved by indiscriminately increasing permeability. Excessive connected voids can admit water and promote ageing or ravelling; purpose-designed porous mixtures are a separate application.</p>",
                    sources: [{ id: "TRAN808-00168", set: 16, question: 90 }]
                },
                {
                    html: "<p><strong>Marshall design is not extraction:</strong> optimum binder content is selected from trial-mixture results and combined criteria; actual content in an existing mix is measured by appropriate extraction/ignition methods. DoR hot DBM's <strong>75-blow/60°C</strong> conditions differ from its specified cold-mix <strong>50-blow/25°C</strong> conditions and from modified specimen procedures. The 60°C test is not a universal maximum service temperature.</p>",
                    sources: [
                        { id: "TRAN808-00042", set: 5, question: 88 },
                        { id: "TRAN808-00050", set: 6, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>50 MPa is supported, but identify the source and branch:</strong> DoR's cover-identified Second Edition 2021 flexible-pavement guideline gives <strong>10CBR for CBR ≤5</strong> and <strong>17.6CBR<sup>0.64</sup> for CBR &gt;5</strong>, in MPa. Thus 5% gives 50 MPa. This is not a directly verified NRS correlation clause, not a measured modulus, and not the separate effective-composite modulus cap of 100 MPa.</p>",
                    sources: [{ id: "TRAN808-00041", set: 5, question: 87 }]
                },
                {
                    html: "<p><strong>Field/laboratory CBR is condition-dependent:</strong> in-situ and laboratory versions exist, but field-moisture CBR is not automatically soaked remoulded CBR. Preserve density, water content, compaction, surcharge, oversize treatment and soaking. The general assertion that all direct-shear testing is laboratory-only is too broad; these questions identify a conventional CBR capability, not an exclusive classification of every possible test.</p>",
                    sources: [
                        { id: "TRAN808-00174", set: 1, question: 83 },
                        { id: "TRAN808-00363", set: 33, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>Test-family names do not make their results equivalent:</strong> shear strength, plate support response and penetration resistance are different properties. CBR is not allowable bearing pressure, SPT blow count or resilient modulus, and repeated-load stiffness is an additional important pavement characterisation. Any correlation needs its own material, unit and conditioning basis.</p>",
                    sources: [
                        { id: "TRAN808-00173", set: 17, question: 83 },
                        { id: "TRAN808-00362", set: 33, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>R-value and k are different outputs:</strong> stabilometer is supported for the R-value, but the extra blank supplies no further material identity. Plate-bearing equipment supports the k answer; <strong>k = pressure/settlement</strong> has units such as kPa/m or N/mm<sup>3</sup>, not MPa alone. The stated 750 mm/1.25 mm convention is not a universal definition; plate/slab size, stiffness and support conditions affect k.</p>",
                    sources: [
                        { id: "TRAN808-00304", set: 28, question: 89 },
                        { id: "TRAN808-00339", set: 31, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>Frost history is not independently verified:</strong> Casagrande is the bank's conventional attribution, not a primary-confirmed historical finding in this research. No unverified numerical rule is added. Frost assessment requires the combination of susceptible soil, freezing conditions and water supply, with thaw weakening and drainage also considered.</p>",
                    sources: [{ id: "TRAN808-00290", set: 27, question: 85 }]
                }
            ],
            references: [
                {
                    title: "BIS archive — IS 2386 Part I:1963, Particle Size and Shape; inspected body and appended amendments, including revised fraction-weighted shape reporting",
                    url: "https://archive.org/details/gov.in.is.2386.1.1963"
                },
                {
                    title: "BIS archive — IS 2386 Part III:1963, Specific Gravity, Density, Voids, Absorption and Bulking; particle displacement and packing-density methods",
                    url: "https://archive.org/details/gov.in.is.2386.3.1963"
                },
                {
                    title: "BIS archive — IS 2386 Part IV:1963, Mechanical Properties; ACV, AIV and LA, with appended Amendment No. 3, October 1983, changing LA speed to 30–33 rev/min",
                    url: "https://archive.org/details/gov.in.is.2386.4.1963"
                },
                {
                    title: "BIS archive — IS 383:1970, Second Revision, natural-source aggregates for concrete; §§3.3–3.6 strength and qualified soundness provisions, not a universal asphalt specification",
                    url: "https://archive.org/details/gov.in.is.383.1970"
                },
                {
                    title: "DoR — Standard Specifications for Road and Bridge Works, 2073, with Third Amendment 2082, effective 1 Shrawan 2082; official government-CDN copy, §§600, 1000, 1200 and 1300",
                    url: "https://giwmscdnone.gov.np/media/files/Standard%20Specifications%20For%20Road%20And%20Bridge%20Works_houcxlr.pdf"
                },
                {
                    title: "BIS archive — IS 2720 Part 16:1987, Second Revision, Laboratory Determination of CBR; §§5 and 7, Figure 2 reference loads and repeat criterion",
                    url: "https://archive.org/details/gov.in.is.2720.16.1987"
                },
                {
                    title: "DoR — Guidelines for the Design of Flexible Pavements-2014, Second Edition 2021, April 2021; §§5.1–5.3 and Annex E; cover-identified nongovernment HERMES mirror, not byte-compared with the inaccessible official PDF",
                    url: "https://download.hermes.com.np/wp-content/uploads/sites/12/2023/07/2021-Guidelines-for-the-design-of-Flexible-Pavement-2021.pdf"
                },
                {
                    title: "FHWA — Geotechnical Aspects of Pavements, NHI-05-037, May 2006; Chapter 5 §§5.4.1–5.4.3, CBR, stabilometer R-value and resilient modulus; technical reference, not Nepal adoption",
                    url: "https://www.fhwa.dot.gov/engineering/geotech/pubs/05037/05b.cfm"
                },
                {
                    title: "FHWA — Geotechnical Aspects of Pavements, NHI-05-037, May 2006; Chapter 5 §5.4.6, modulus of subgrade reaction and support-system dependence; technical reference, not a specification",
                    url: "https://www.fhwa.dot.gov/engineering/geotech/pubs/05037/05c.cfm"
                },
                {
                    title: "Pavement Interactive — HMA Weight-Volume Terms and Relationships; supplementary explanation of mixture gravities, air voids, VMA, VFA and effective binder, not governing acceptance criteria",
                    url: "https://pavementinteractive.org/reference-desk/design/mix-design/hma-weight-volume-terms-and-relationships/"
                }
            ]
        }
    });
})();