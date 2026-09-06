(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0906: {
            code: "ACiE0906",
            questionCount: 51,
            blocks: [
                {
                    id: "construction-sequence-and-hold-points",
                    title: "Construction sequence: turn a pavement design into an accepted road",
                    html: "<p><strong>Official 9.6 scope:</strong> activities, techniques, tools, equipment and plants used in road construction; preparation of road subgrade; field compaction control and soil stabilization; construction of asphalt concrete layers; construction procedure for penetration macadam, bituminous bound macadam and plain cement concrete pavements; road maintenance, repair and rehabilitation.</p>" +
                        "<p><em>Source-free syllabus extension: this construction workflow supplies context that the assigned questions do not set out as a complete project.</em> Construction is a sequence of dependent operations. A smooth wearing course cannot compensate for buried organic soil, an unaccepted lift or a blocked drainage outlet. Plan work fronts so that inspection, material supply and protection keep pace with excavation and paving.</p>" +
                        "<ol><li><strong>Before earthworks:</strong> review drawings and contract requirements; establish survey control, utility locations, access, material sources, traffic management and environmental safeguards.</li><li><strong>Prepare the foundation:</strong> clear and strip, provide drainage, manage unsuitable material, and organize cut-to-fill movements without destabilizing slopes.</li><li><strong>Build upward:</strong> condition and compact each approved lift, verify its properties and geometry, then protect it before covering it.</li><li><strong>Construct the selected pavement:</strong> use the approved granular, bituminous or concrete process, including interfaces, edges and joints.</li><li><strong>Complete and hand over:</strong> verify drainage, shoulders, surface quality, tests, safety furniture and the particular opening requirements; retain location-linked records for maintenance.</li></ol>" +
                        "<p>A <strong>hold point</strong> prevents the next operation from concealing work that still needs approval. Contractor quality control manages the process; inspection and acceptance checks establish whether the specified result has been demonstrated. These notes use the government-hosted <strong>DoR Standard Specifications 2073, with Third Amendment 2082, effective 1 Shrawan 2082</strong>, for identified clauses. They do not establish contractual precedence, latest-publication status or construction approval. Foreign references support principles, not automatic Nepal adoption.</p>",
                    sources: []
                },
                {
                    id: "earthworks-grading-and-subgrade-support",
                    title: "Earthworks and grading: shape the formation without hiding weak support",
                    html: "<p>Earthworks change the ground to the required alignment and formation level; <strong>grading</strong> is the controlled cutting, spreading and trimming that produces the specified profile and crossfall. A grader's blade can leave an even surface without producing an adequately compacted layer. Compaction densifies material mechanically; consolidation is time-dependent volume change associated with drainage under sustained loading. These processes must not be treated as synonyms.</p>" +
                        "<ol><li>Set out limits and levels from stable survey control. Identify existing utilities, drainage paths and nearby structures before excavation.</li><li>Strip vegetation, roots and unsuitable topsoil; keep reusable topsoil separate from structural fill. Do not bury stumps or indiscriminately mix weak material into good fill.</li><li>Excavate in a sequence consistent with slope stability and access. Prepare the receiving ground, including designed benches or other treatments where required; uncontrolled tipping down a hillside is not layer construction.</li><li>Select suitable cut or approved borrow material, spread it in controlled lifts, adjust moisture through the full lift and compact using the approved method.</li><li>Trim and check line, level, width and crossfall; investigate yielding zones rather than covering them with a thin cosmetic layer.</li></ol>" +
                        "<p>The subgrade has to support both construction traffic and the completed pavement. Failure develops when the applied demand exceeds the available support, including where moisture, poor compaction, unsuitable soil or nonuniform foundation conditions reduce that support. <strong>Inadequate stability and excessive applied stress are credible causes; insufficient applied traffic stress is not an equivalent failure mechanism.</strong> Insufficient compactive effort is a different issue and cannot silently replace that wording.</p>" +
                        "<p>Maintain a discharge route for runoff throughout the operation. Proof rolling, where specified and appropriately loaded, helps reveal soft areas; it neither replaces density testing nor authorizes repeated heavy loading on ground that is already failing.</p>",
                    sources: [
                        { id: "TRAN808-00332", set: 31, question: 81 },
                        { id: "TRAN808-00322", set: 30, question: 83 }
                    ]
                },
                {
                    id: "moisture-density-and-compaction-basis",
                    title: "Moisture–density control: define the material, effort and denominator",
                    html: "<p><em>Source-free syllabus extension: the assigned bank has no complete moisture–density derivation.</em> Let dry solids mass be M<sub>d</sub>, water mass M<sub>w</sub>, and bulk volume V. Water content on a dry-mass basis is <strong>w = M<sub>w</sub>/M<sub>d</sub></strong>. Therefore M<sub>wet</sub> = M<sub>d</sub>(1 + w), giving <strong>ρ<sub>d</sub> = ρ<sub>wet</sub>/(1 + w)</strong>. Use w as a decimal: 12% means 0.12, not 12. Dry and wet densities use the same bulk volume, including the voids.</p>" +
                        "<p>For a representative material compacted by one specified laboratory procedure, plot dry density against water content. The curve's peak is the <strong>maximum dry density, MDD</strong>, and its corresponding water content is <strong>OMC</strong>. Water initially assists particle rearrangement; beyond the peak, additional water occupies space and can impede further densification under that effort. OMC is not automatically the condition of maximum shear strength, stiffness or durability under every subsequent loading, drainage or soaking condition.</p>" +
                        "<p>Laboratory effort depends on the apparatus and procedure. A simple impact-energy accounting is <strong>E = n N m g H/V</strong>, where n is the number of layers, N the blows per layer, m the hammer mass and H its fall. In SI this gives J/m<sup>3</sup>; divide by 1000 for kJ/m<sup>3</sup>. The specified test controls the actual preparation and apparatus. DoR Table 5.1 distinguishes <strong>IS 2720 Part 7</strong> compaction from <strong>Part 8 heavy compaction</strong>.</p>" +
                        "<p><strong>Relative compaction, RC = 100ρ<sub>d,field</sub>/ρ<sub>d,max,specified test</sub></strong>. The reference must match the material, applicable oversize treatment and specified laboratory energy basis. Field rolling is not literally a laboratory impact test. Do not exchange light and heavy MDDs, or untreated and treated-soil curves, to improve a reported percentage. <strong>Relative density</strong> instead uses a granular soil's maximum and minimum void-ratio states; it is not RC.</p>",
                    sources: []
                },
                {
                    id: "subgrade-lifts-and-field-quality-control",
                    title: "Untreated subgrade: lifts, moisture limits and field acceptance",
                    html: "<p><em>Source-free syllabus extension grounded in DoR §1003(1): no assigned question states the complete untreated-subgrade acceptance procedure.</em> That clause requires each layer to reach <strong>at least 95% of heavy-compaction MDD</strong>. Separately, material suitability includes <strong>CBR ≥5% after four-day soaking on a laboratory specimen compacted to 95% heavy MDD</strong>. A density percentage and a CBR percentage measure different things; passing either requirement does not prove the other.</p>" +
                        "<p>During compaction, the clause specifies moisture between <strong>95% and 100% of OMC</strong>, maintained until compaction is complete except where the Engineer instructs otherwise. <strong>Illustrative conversion, not bank givens:</strong> if the applicable OMC is 12%, the interval is 0.95 × 12% to 1.00 × 12% = <strong>11.4–12.0%</strong>. It is not 7–17%, and not an OMC ±5-percentage-point tolerance.</p>" +
                        "<p>Within this particular loose untreated-subgrade clause, maximum particle size is <strong>60 mm</strong> and compacted lift depth must not exceed <strong>200 mm</strong>. These are clause-specific limits, not a recipe for every soil, rockfill, treated layer or site. The loose depth must be established through trials; a permitted maximum is not proof that the available roller can compact that thickness uniformly.</p>" +
                        "<ul><li>Establish representative heavy-MDD/OMC and material-suitability results for each new material, and approve the compaction trial before production.</li><li>Record lift identity, chainage, offset, material source, moisture, roller settings and passes. Distribute field tests across the width, not just along an easy centre strip.</li><li>Use a suitable field-volume/density method: sand replacement for appropriate material, a core cutter only where it can recover an undistorted suitable sample, or an approved calibrated gauge used by qualified personnel.</li><li>Compare field <strong>dry</strong> density with the correct laboratory reference. Check geometry, thickness and yielding as well; follow the applicable sampling and lot-acceptance provisions.</li><li>Investigate failures, rework and retest as required, obtain layer approval, then protect against rain, contamination and construction rutting before covering.</li></ul>",
                    sources: []
                },
                {
                    id: "field-density-worked-example",
                    title: "Added field-density example: correct moisture does not mean acceptable density",
                    html: "<p><em>Source-free syllabus extension and hypothetical worked example: all sample masses, densities and moisture values below are invented teaching inputs, not recovered question data.</em> Suppose an approved sand-replacement measurement gives a test-hole volume of <strong>0.00200 m<sup>3</sup></strong>. The excavated moist soil weighs <strong>4.20 kg</strong>, and a representative protected moisture sample from that material gives <strong>w = 12.0%</strong>. Assume the applicable Part 8 laboratory curve has MDD <strong>2.00 Mg/m<sup>3</sup></strong> and OMC <strong>12.0%</strong>.</p>" +
                        "<ol><li><strong>Wet density:</strong> ρ<sub>wet</sub> = 4.20/0.00200 = 2100 kg/m<sup>3</sup> = <strong>2.10 Mg/m<sup>3</sup></strong>.</li><li><strong>Dry density:</strong> ρ<sub>d</sub> = 2.10/(1 + 0.12) = <strong>1.875 Mg/m<sup>3</sup></strong>.</li><li><strong>Relative compaction:</strong> RC = 100 × 1.875/2.00 = <strong>93.75%</strong>.</li><li><strong>Conditional acceptance comparison:</strong> if this is untreated subgrade governed by §1003(1), the 95% threshold corresponds to 0.95 × 2.00 = <strong>1.90 Mg/m<sup>3</sup></strong>. This density result fails, although the measured water content is at the upper end of the 11.4–12.0% moisture interval.</li></ol>" +
                        "<p>Dividing wet density by dry MDD would produce a misleading <strong>105%</strong>. It credits water mass as compacted soil solids. Conversely, silently using a lower light-compaction MDD would change the specified denominator, not improve the layer.</p>" +
                        "<p>Check sample representativeness, test-hole volume calibration, loose-lift thickness, full-depth moisture uniformity, roller coverage and underlying support before deciding the corrective action. Additional passes may help an undercompacted suitable lift, but cannot cure an unsuitable material or a yielding foundation by themselves. Preserve the failed result and record the rework and retest; one favourable point does not certify the whole lot.</p>",
                    sources: []
                },
                {
                    id: "roller-selection-and-compaction-trials",
                    title: "Choose a roller for the material and prove the lift in a trial",
                    html: "<p>A roller works through some combination of static pressure, vibration, impact and kneading. <strong>Vibratory rollers are particularly useful for granular materials</strong>: cyclic loading helps grains rearrange while the machine's weight maintains contact. Plastic cohesive soils often need a strong kneading action. These are application tendencies, not mutually exclusive machine categories.</p>" +
                        "<table><thead><tr><th scope='col'>Equipment</th><th scope='col'>Useful role and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Smooth-drum vibratory roller</th><td>Granular soils and aggregates; some nonplastic or low-plasticity silts can also respond when moisture and foundation conditions are suitable.</td></tr>" +
                        "<tr><th scope='row'>Padfoot or sheepsfoot roller</th><td>Kneading and concentrated contact pressure for cohesive soils; pulverization and lift moisture remain important.</td></tr>" +
                        "<tr><th scope='row'>Pneumatic-tyred roller</th><td>Pressure and kneading over a broad range of materials; wheel load and tyre pressure affect the result.</td></tr>" +
                        "<tr><th scope='row'>Plate compactor or rammer</th><td>Suitable confined-area work where the large roller cannot reach; lift depth and access still have to suit the device.</td></tr></tbody></table>" +
                        "<p>FHWA's construction guidance includes vibratory equipment as an alternative for suitable low-plasticity soils. Thus <strong>nonplastic silt is not categorically excluded</strong>. Excess water and weak support can cause pumping or instability, but the bank's roller statement does not say its silt is saturated. Adding that condition to dismiss it changes the problem.</p>" +
                        "<p>A trial should establish loose thickness, moisture-conditioning method, roller type, speed, vibration settings, overlap and the useful range of passes. Test the resulting layer rather than declaring success from an arbitrary pass count or a polished surface. Watch for aggregate breakdown, shoving and movement of the foundation. Near structures and utilities, assess vibration effects and use the approved restricted-area method. Proof rolling identifies gross support deficiencies; it is not an alternative definition of MDD.</p>",
                    sources: [
                        { id: "TRAN808-00078", set: 9, question: 79 },
                        { id: "TRAN808-00343", set: 32, question: 82 },
                        { id: "TRAN808-00347", set: 32, question: 86 }
                    ]
                },
                {
                    id: "stabilization-mechanisms-and-selection",
                    title: "Stabilization: select the mechanism, not just a three-item list",
                    html: "<p>Soil improvement may provide a temporary working platform, reduce moisture sensitivity or swelling, or create a designed structural layer. These objectives require different evidence. A surface that supports today's construction vehicle is not automatically a durable stabilized base, and a stabilizer does not remove the need for drainage.</p>" +
                        "<table><thead><tr><th scope='col'>Approach</th><th scope='col'>Mechanism and design question</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mechanical blending and compaction</th><td>Change grading or the proportion of fines, then densify the mixture. Does the resulting material have suitable grading, plasticity, support and moisture behaviour?</td></tr>" +
                        "<tr><th scope='row'>Cement or lime treatment</th><td>Hydration, cementation and/or soil–additive reactions alter behaviour. Check compatibility, dosage, mixing, curing, strength and durability.</td></tr>" +
                        "<tr><th scope='row'>Bituminous treatment</th><td>Binder adhesion and moisture protection can improve suitable sand or soil–aggregate mixtures. Demonstrate coating, stability and moisture resistance.</td></tr>" +
                        "<tr><th scope='row'>Other improvement systems</th><td>Geosynthetic separation or reinforcement, drainage and specialist ground treatment act differently; choose and design the required function.</td></tr></tbody></table>" +
                        "<p>Textbooks may group these into <strong>three broad families</strong>, or combine and subdivide them differently. That count is a taxonomy, not a physical law. Likewise, <strong>admixture</strong> only means an added material unless its nature is specified. Blending sand or crushed aggregate to change grading can be mechanical stabilization; adding reactive cement or lime is not made mechanical merely because a mixer is used.</p>" +
                        "<p>For sandy soil, <strong>sand–bitumen is a valid stabilization option</strong>, but soil–cement, grading correction or other treatments may be preferable. Soil name alone does not establish the most common or best solution. Lime is most useful where suitable reactive fines are present; clean sand does not acquire a strong pozzolanic bond from lime alone without a suitable reactive constituent. Compare laboratory performance, construction capability, water exposure, cost and environmental constraints before choosing.</p>",
                    sources: [
                        { id: "SOIL136-00344", set: 27, question: 35 },
                        { id: "SOIL136-00345", set: 27, question: 36 },
                        { id: "SOIL136-00347", set: 27, question: 38 },
                        { id: "TRAN808-00073", set: 8, question: 86 }
                    ]
                },
                {
                    id: "soil-cement-mixing-and-curing",
                    title: "Soil–cement: compatibility, uniform mixing and timely curing",
                    html: "<p><strong>Soil–cement</strong> is a deliberately proportioned mixture of soil or aggregate, cement and water that is mixed, compacted and cured to develop a bound material. Smaller treatment quantities may primarily modify plasticity or workability. The intended structural credit must follow the demonstrated product properties, not the name alone.</p>" +
                        "<p>Cement can treat suitable <strong>fine-grained as well as coarse-grained soils</strong>. FHWA's stabilization discussion explicitly includes low-plasticity clays, sandy soils and granular soils. Highly plastic soil may be difficult to pulverize and mix; some materials require pretreatment or a different solution. Organic constituents and sulfates can interfere with performance and need evaluation. For equal solids mass and comparable grain shape, <strong>finer grains have greater specific surface area</strong>, not larger grains. Surface area and mixing difficulty help explain binder demand; neither establishes an only-coarse-soils rule.</p>" +
                        "<ol><li>Characterize the soil, water and proposed cement; prepare trial mixtures with controlled dosage and the relevant curing and exposure conditions.</li><li>Establish a treated-material moisture–density reference and required strength/durability, accounting for the time between mixing and compaction.</li><li>Pulverize and spread to controlled depth. Meter cement uniformly, control dust, and mix water and additive through the full depth, including lane overlaps.</li><li>Shape and compact within the permitted working period; do not leave untreated seams or attempt to compact already hardened lumps into a uniform layer.</li><li>Cure promptly, restrict traffic and verify both the constructed layer and its developed properties before covering.</li></ol>" +
                        "<p>For the specific <strong>cement-treated base/subbase in §1202(3)</strong>, the cited specification requires at least <strong>98% Part 8 MDD</strong>, completion of compaction within <strong>two hours of mixing or a shorter period where necessary in dry weather</strong>, and <strong>seven days of curing</strong>. These are not universal limits for every stabilized soil or concrete pavement. Cement content matters, but its effect cannot be separated from soil, moisture, density, mixing and curing by declaring admixtures the single dominant factor.</p>",
                    sources: [
                        { id: "SOIL136-00351", set: 27, question: 42 },
                        { id: "SOIL136-00352", set: 27, question: 43 },
                        { id: "SOIL136-00353", set: 27, question: 44 }
                    ]
                },
                {
                    id: "granular-products-and-acceptance-bases",
                    title: "Granular acceptance: product, fines fraction and test density matter",
                    html: "<p>A base and subbase may both be granular, but the product specification still controls. <strong>CBR is a penetration-resistance ratio</strong>; field relative compaction is a dry-density ratio. The density used to prepare a laboratory CBR specimen must not be copied into the field-acceptance column.</p>" +
                        "<table><thead><tr><th scope='col'>DoR product</th><th scope='col'>Minimum laboratory CBR</th><th scope='col'>Field compaction provision</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>GSB, §1201 / Table 12.2</th><td>Subbase 30%</td><td>At least 95% Part 8 MDD, §1201(5).</td></tr>" +
                        "<tr><th scope='row'>WBM, §1203 / Table 12.5</th><td>Base 80%; subbase 30%</td><td>The specified rolling, screenings, wet-grouting and setting process; the CBR specimen-density row is not a separate stated field-density percentage.</td></tr>" +
                        "<tr><th scope='row'>Crusher-run macadam, Table 12.9</th><td>Base 80%; subbase 60%</td><td>Base at least 98%; subbase at least 95% Part 8 MDD, §1204(3)(ii).</td></tr>" +
                        "<tr><th scope='row'>WMM, Table 12.11</th><td>Base 80%; subbase 60%</td><td>Base at least 98%; subbase at least 95% Part 8 MDD, §1208(7).</td></tr></tbody></table>" +
                        "<p>The CBR requirements above retain the tables' <strong>unless specified in the Contract</strong> qualification. Their CBR specimens are prepared at <strong>95% of Part 8 heavy-compaction MDD</strong> and tested by the referenced method. Thus a WMM base's 80% CBR is evaluated at the stated laboratory density even though its field density requirement is 98%. Do not describe the 80% as field compaction.</p>" +
                        "<p>For <strong>crusher-run macadam and WMM, both base and subbase</strong>, Tables 12.9 and 12.11 limit the <strong>material passing 425 μm</strong> to <strong>LL ≤25 and PI ≤6</strong>. The bank's base LL value has this material-specific support, but its blanket claim that subbase plasticity limits are relaxed is wrong for these same products. A limit belonging to another subbase cannot be substituted without changing the product definition.</p>" +
                        "<p>Check grading, particle quality, plasticity, support, thickness and drainage together. Passing a density test does not rehabilitate soft, contaminated or excessively plastic aggregate, and passing a material test does not prove it was placed correctly.</p>",
                    sources: [{ id: "SOIL136-00348", set: 27, question: 39 }]
                },
                {
                    id: "wbm-wmm-and-historical-macadam",
                    title: "WBM and WMM procedures: do not build from historical McAdam numbers",
                    html: "<p>The word <strong>macadam</strong> connects several different constructions. The two assigned historical questions concern old McAdam descriptions; the following <strong>WBM/WMM procedures are syllabus extensions from DoR §§1203 and 1208</strong>, not procedures or numerical givens supplied by those questions.</p>" +
                        "<p><strong>Water-bound macadam, WBM:</strong> the coarse stone skeleton develops mechanical interlock. Screenings fill its interstices; separately specified binding fines, where required, help the completed material remain bound. Water assists movement and packing of those fines into the voids; it is not bitumen, and this is not cement hydration.</p>" +
                        "<ol><li>Accept and clean the support, correct soft spots and irregularities, and provide the required confinement and drainage.</li><li>Spread the approved coarse aggregate uniformly, correct its profile with coarse material, and roll to establish the skeleton while leaving space for screenings.</li><li>Add <strong>dry screenings gradually</strong>, with brooming and dry rolling, so that they enter voids rather than form a blanket that prevents interlock.</li><li>Sprinkle water, broom and roll to work the screenings into the skeleton; then apply required binding material in thin applications with the specified wet working. Avoid flooding or softening the support.</li><li>Allow the layer to set and dry; correct hungry areas as directed, inspect the surface and protect it before the next course. Do not fill structural depressions with a pocket of screenings or binder fines.</li></ol>" +
                        "<p><strong>Wet-mix macadam, WMM:</strong> proportion graded crushed aggregate and <strong>premix it with water, not bitumen</strong>, using the approved plant or method. Transport without segregation, spread uniformly, maintain the specified moisture, compact promptly to the product's field criterion, and verify levels, thickness and stability. It does not use WBM's successive coarse-stone, screenings and wet-grouting sequence. §1208(7)'s 24-hour drying period is followed by a prohibition on vehicular traffic on the finished WMM; construction equipment needs approval.</p>" +
                        "<p><strong>Historical boundary:</strong> 1 in 36 is about 2.78%, and ten inches is 254 mm, approximately 250 mm. Those conversions do not verify an original McAdam prescription or make it a modern thickness rule. The other question's keyed 70/100 mm stones conflict with its explanation's less-than-75 mm claim. Without historical primary evidence, no replacement stone-size answer is asserted.</p>",
                    sources: [
                        { id: "TRAN808-00081", set: 9, question: 82 },
                        { id: "TRAN808-00106", set: 11, question: 85 }
                    ]
                },
                {
                    id: "excavation-conveying-and-traction",
                    title: "Earthmoving equipment: excavation geometry, transport route and traction",
                    html: "<p>Select equipment from the material, digging level, reach, haul distance, access and receiving operation. A machine that excavates rapidly can still delay the project if trucks, spreading or compaction cannot keep up. Inspect the working platform and slope stability as part of the selection, especially near water or excavation edges.</p>" +
                        "<table><thead><tr><th scope='col'>Equipment or operation</th><th scope='col'>Typical use and boundary</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Front shovel</th><td>Excavation principally above track level with a suitable face; not the natural first choice for a soft underwater reach below the machine.</td></tr>" +
                        "<tr><th scope='row'>Backhoe</th><td>Controlled excavation below track level, trenches and localized cuts; reach and platform access constrain the task.</td></tr>" +
                        "<tr><th scope='row'>Dragline</th><td>A suspended bucket is cast outward and dragged toward the machine, useful for suitable soft or wet material and below-track excavation. This supports the bank's choice among its options, not every dredging operation.</td></tr>" +
                        "<tr><th scope='row'>Scraper and haul truck</th><td>A scraper can cut, carry and spread suitable earth; a truck carries material loaded by other equipment. Hauling requires a workable route and turnaround.</td></tr>" +
                        "<tr><th scope='row'>Conveyor and hoist</th><td>Conveying transports along an installation; hoisting lifts a load. A conveyor frame can remain fixed while its belt, screw or buckets <strong>move with respect to that frame</strong>.</td></tr></tbody></table>" +
                        "<p>Crawler tracks spread load over a large contact area, reducing average ground pressure for a given machine weight. Cleats can mobilize soil shear resistance and improve traction on suitable earth. But <strong>contact area alone does not establish a friction coefficient</strong>: soil strength, moisture, sinkage, track design and slip matter. Ice, loose sand and firm earth behave differently; the bank's ranking is a simplified equipment-context answer, not a constant valid for every earth surface.</p>" +
                        "<p>Keep transport routes separate from accepted layers where practicable. Repeated truck passage that contaminates or ruts the formation consumes construction quality as well as time.</p>",
                    sources: [
                        { id: "TRAN808-00341", set: 32, question: 80 },
                        { id: "TRAN808-00344", set: 32, question: 83 },
                        { id: "TRAN808-00346", set: 32, question: 85 }
                    ]
                },
                {
                    id: "aggregate-processing-and-paving-plants",
                    title: "Processing plants: make the specified product, not just smaller stone",
                    html: "<p>A quarry production chain must deliver acceptable <strong>grading, shape, strength, durability and cleanliness</strong>. Primary and secondary crushing reduce size; screens separate fractions; controlled recombination produces the intended grading. A jaw or cone crusher works mainly by compression. A <strong>vertical-shaft impactor, VSI</strong>, is commonly used for shaping because impact and particle interaction can improve cubical form.</p>" +
                        "<p>Crusher name is not a material certificate. Feed rock, reduction ratio, crusher setting, speed, wear and recirculation influence particle shape and fines production. Jaw and cone products are not inevitably flaky; a VSI cannot make intrinsically weak or weathered rock durable. Test the actual product and separate rejected material from approved stock.</p>" +
                        "<ul><li><strong>Stockpiles:</strong> separate size fractions on clean, drained ground; control contamination and segregation during building, reclaiming and loading.</li><li><strong>Wet-mix plant:</strong> meter aggregate fractions and water to deliver a uniform granular mixture. Stockpile or transport changes can alter moisture and grading after mixing.</li><li><strong>Hot-mix asphalt plant:</strong> calibrate aggregate feeds, drying/heating, filler and binder metering, and mixing; manage moisture, dust collection and temperature without burning the binder.</li><li><strong>Concrete batching plant:</strong> control weighed solid constituents and measured water, account for aggregate moisture, and deliver a consistent mixture within its usable time.</li><li><strong>Paving train:</strong> coordinate plant output, transport, paver speed, rollers or concrete vibrators, finishing and protection equipment.</li></ul>" +
                        "<p>Trial production links laboratory approval to the actual plant and placing method. A changed material source, unstable feeder or failed thermometer requires investigation and the appropriate approval, not an assumption that the previous job-mix formula still describes the output. Keep batch records traceable to the layer and location constructed.</p>",
                    sources: [{ id: "TRAN808-00345", set: 32, question: 84 }]
                },
                {
                    id: "equipment-downtime-and-cycle-output",
                    title: "Downtime, idle time and the real production bottleneck",
                    html: "<p><strong>Downtime</strong> is time during the defined scheduled period when equipment is unavailable to perform its duty. It can include planned maintenance or servicing as well as unplanned breakdown and repair. A serviceable machine waiting for work, trucks, access or instructions is <strong>idle but available</strong>. Report the accounting convention: not every nonproductive hour is a machine reliability failure.</p>" +
                        "<p>For scheduled hours H<sub>s</sub> and counted downtime H<sub>d</sub>, define <strong>availability A = (H<sub>s</sub> − H<sub>d</sub>)/H<sub>s</sub></strong>. If productive hours are H<sub>p</sub>, utilization on an available-time basis is <strong>U = H<sub>p</sub>/(H<sub>s</sub> − H<sub>d</sub>)</strong>. Productive time is then H<sub>s</sub>A U. A different utilization denominator produces a different number; label it before comparing equipment records.</p>" +
                        "<p>For a repetitive operation, nominal output is <strong>q × 60/T</strong>, where q is useful quantity per cycle and T is cycle time in minutes. Bucket fill, payload limits and material state determine q. A truck cycle includes loading, outward travel, dumping, return and the delays explicitly included in the estimate. Effective output also depends on the available working time and synchronization with other machines.</p>" +
                        "<p>The system cannot sustainably exceed its slowest required operation: excavation, hauling, spreading, moisture conditioning or compaction. Adding trucks to a loader-limited operation may only lengthen queues. Conversely, an expensive paver can stand idle while a plant or transport shortage interrupts delivery.</p>" +
                        "<p>Do not deduct downtime twice by applying a separate availability factor after using a measured output that already includes the same downtime. Separate controllable process delays from scheduled service and breakdowns; the remedy for poor dispatching is different from the remedy for an unreliable machine.</p>",
                    sources: [{ id: "TRAN808-00342", set: 32, question: 81 }]
                },
                {
                    id: "production-and-truck-balance-example",
                    title: "Added production example: balance the loader, trucks and material state",
                    html: "<p><em>Source-free syllabus extension and hypothetical worked example: every capacity, time and conversion factor here is an invented planning input.</em> A loader has a 1.50 m<sup>3</sup> bucket, an assumed fill factor of 0.80 and a basic cycle of 0.50 min. Its useful bucket quantity is <strong>1.20 loose m<sup>3</sup></strong>, so basic output is 1.20 × 60/0.50 = <strong>144 loose m<sup>3</sup>/h</strong>.</p>" +
                        "<p>Assume minor operating delays reduce loader output within available hours by a factor of 0.75: <strong>144 × 0.75 = 108 loose m<sup>3</sup>/h</strong>. Separately, a six-hour scheduled shift has one hour of planned equipment unavailability, leaving five available hours. Do not include that hour again in the 0.75 factor. Loader-limited shift production is <strong>108 × 5 = 540 loose m<sup>3</sup></strong>.</p>" +
                        "<p>Each truck carries an assumed permitted <strong>6 loose m<sup>3</sup></strong> and completes a <strong>20-minute round cycle including loading, travel, dumping and return</strong>. Assume all trucks share the five available hours and this cycle is the applicable effective estimate. One truck supplies 6 × 60/20 = <strong>18 loose m<sup>3</sup>/h</strong>. Six trucks nominally match the loader: 6 × 18 = 108. Five trucks limit the system to 90 loose m<sup>3</sup>/h before any other bottleneck.</p>" +
                        "<p>For a separately assumed conversion of <strong>0.80 compacted m<sup>3</sup> per loose m<sup>3</sup></strong>, the six-truck estimate becomes 540 × 0.80 = <strong>432 compacted m<sup>3</sup> per shift</strong>. This conversion belongs to the hypothetical material and target state, not a universal shrinkage factor or a field-density criterion.</p>" +
                        "<p>This is a nominal fleet balance, not an operational guarantee. Check payload mass limits, variable haul speeds, queueing, weather, spreading and the roller's demonstrated output. Dispatching more loose volume does not prove that the same volume of acceptable compacted work has been produced.</p>",
                    sources: []
                },
                {
                    id: "mass-haul-signs-and-volume-basis",
                    title: "Mass haul: cumulative balance is meaningful only on one volume basis",
                    html: "<p>A mass-haul diagram plots <strong>cumulative net earthwork volume against chainage</strong>. Declare cut positive and fill negative, choose an initial ordinate M<sub>0</sub>, and convert usable cut and required fill to one common state. Then <strong>M<sub>i</sub> = M<sub>0</sub> + Σ(V<sub>usable cut</sub> − V<sub>fill</sub>)</strong>. In these notes the common state is equivalent compacted volume.</p>" +
                        "<p>A rising segment represents a positive net increment of usable cut; a falling segment represents an increment in which fill exceeds usable cut. A falling segment can still lie above the starting ordinate and therefore need not mean a project-wide deficit. <strong>M<sub>end</sub> − M<sub>0</sub> &lt; 0</strong> indicates a net material deficit, requiring borrow under this convention. A positive difference indicates a net surplus to allocate or dispose of appropriately.</p>" +
                        "<p>Bank, loose and compacted volumes are not interchangeable. With conserved dry solids, <strong>V<sub>comp</sub> = V<sub>bank</sub>ρ<sub>d,bank</sub>/ρ<sub>d,comp</sub></strong>. Reject unsuitable fractions before crediting reusable cut, and use material-specific density or shrink/swell information. Separate spoil from reusable stock; excavation volume alone is not the quantity available for structural fill.</p>" +
                        "<p>Two points at the same ordinate enclose a volumetrically balanced reach, subject to material suitability and access. Within a properly balanced haul lobe, the area between the mass curve and its balance line represents a <strong>haul moment</strong>, with units such as m<sup>3</sup>·m; dividing by the transferred volume gives mean haul distance. Ordinates themselves are volumes, not distances or hauling cost.</p>" +
                        "<p>A zero net balance does not guarantee no borrowing or wasting: unsuitable cut, timing, blocked routes or uneconomic haul can require both. The diagram informs allocation, while construction staging and haul-cost analysis determine feasible movements. The bank's word Burrow should be read as the intended earthwork term <strong>borrow</strong>, without altering the stored record.</p>",
                    sources: [{ id: "TRAN808-00036", set: 5, question: 82 }]
                },
                {
                    id: "mass-haul-worked-example",
                    title: "Added mass-haul example: rejection, shrinkage and the final borrow",
                    html: "<p><em>Source-free syllabus extension and hypothetical worked example: the assigned question supplies no chainage volumes or shrink/swell data.</em> Start at M<sub>0</sub> = 0. Assume suitable soil has dry density <strong>1.60 Mg/m<sup>3</sup> in the bank</strong> and the chosen planning state is <strong>2.00 Mg/m<sup>3</sup> compacted</strong>. Conservation of dry mass gives <strong>0.80 compacted m<sup>3</sup> per bank m<sup>3</sup></strong>. These assumed densities define the balance, not a new construction acceptance requirement.</p>" +
                        "<p>Reach A has 1000 bank m<sup>3</sup> of cut, of which an assumed 10% by bank volume is rejected before use. Its usable compacted equivalent is 1000 × 0.90 × 0.80 = <strong>720 m<sup>3</sup></strong>. Reach B has 300 bank m<sup>3</sup> of wholly suitable cut, equivalent to <strong>240 compacted m<sup>3</sup></strong>. Reach C has no cut.</p>" +
                        "<table><thead><tr><th scope='col'>Reach</th><th scope='col'>Usable cut / fill, compacted m<sup>3</sup></th><th scope='col'>Net / cumulative, compacted m<sup>3</sup></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>720 / 500</td><td>+220 / +220</td></tr>" +
                        "<tr><th scope='row'>B</th><td>240 / 400</td><td>−160 / +60</td></tr>" +
                        "<tr><th scope='row'>C</th><td>0 / 160</td><td>−160 / −100</td></tr></tbody></table>" +
                        "<p>Total usable cut is <strong>960 compacted m<sup>3</sup></strong>, compared with <strong>1060 compacted m<sup>3</sup></strong> of fill. Required net borrow is <strong>100 compacted m<sup>3</sup></strong>. If the borrow is wholly suitable and has the same assumed density conversion, obtain 100/0.80 = <strong>125 bank m<sup>3</sup></strong>. With an additional assumed bulking factor of 1.25 loose/bank, its hauling volume is <strong>156.25 loose m<sup>3</sup></strong>.</p>" +
                        "<p>If the diagram were shifted to start at ordinate +500, it would finish at +400: the deficit would still be 100, despite a positive displayed endpoint. This is why the final ordinate must be compared with the initial datum. The calculation assumes the usable cuts can actually be transferred when needed; it does not select a haul route or prove suitability from density alone.</p>",
                    sources: []
                },
                {
                    id: "prime-tack-and-surface-seals",
                    title: "Prime, tack and seal: distinguish preparation, bonding and preservation",
                    html: "<p>Identify a sprayed treatment by <strong>its substrate and intended function</strong>, not merely by the presence of bitumen. An emulsion describes a binder form; tack coat describes a construction function. Therefore spray of emulsion and tack coat can describe the same operation rather than mutually exclusive alternatives.</p>" +
                        "<table><thead><tr><th scope='col'>Treatment</th><th scope='col'>Principal purpose</th><th scope='col'>What it does not establish</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Prime coat</th><td>Low-viscosity binder prepares an absorbent non-bituminous surface, penetrates and binds surface fines, and affords limited moisture protection.</td><td>It does not create aggregate toughness or replace adequate structural support.</td></tr>" +
                        "<tr><th scope='row'>Tack coat</th><td>A controlled thin film bonds an appropriate existing or primed surface to the new bituminous layer; substrates can include old asphalt and concrete.</td><td>It is not a standalone wearing course, profile correction or primary skid-resistance treatment.</td></tr>" +
                        "<tr><th scope='row'>Surface seal</th><td>The selected treatment preserves a suitable surface, limits infiltration and/or restores texture.</td><td>It cannot by itself restore failed support or exhausted structural capacity.</td></tr></tbody></table>" +
                        "<p>DoR §1302 and Table 13.10 include bituminous, primed granular and cement-concrete substrates for tack application. A granular base may need prime and then the specified tack before a dense bituminous course; these are not always alternatives. Clean and approve the receiving surface, repair defects, establish a uniform spray through trials and protect the film from traffic contamination.</p>" +
                        "<p>The tables' stated spray rates are <strong>application quantities</strong>. Do not silently relabel an emulsion rate as residual bitumen or mix kg/m<sup>2</sup> with L/m<sup>2</sup>. §1302(2) specifically prohibits site dilution or heating of RS1 emulsion. Binder form, approved method and break/curing requirements matter.</p>" +
                        "<p>The phrase surfacing over an impervious pavement is insufficient by itself to identify tack: an overlay or preservation treatment can also be placed there. The decisive feature in the bank's intended tack examples is <strong>bonding before the new layer</strong>.</p>",
                    sources: [
                        { id: "TRAN808-00068", set: 8, question: 81 },
                        { id: "TRAN808-00279", set: 26, question: 86 },
                        { id: "TRAN808-00329", set: 30, question: 90 },
                        { id: "TRAN808-00340", set: 31, question: 89 },
                        { id: "TRAN808-00354", set: 33, question: 80 }
                    ]
                },
                {
                    id: "penetration-macadam-construction",
                    title: "Penetration macadam: roll the stone skeleton before spraying binder",
                    html: "<p><strong>Penetration macadam</strong> first forms a coarse aggregate skeleton and then introduces binder into its voids. It is not a premix operation. DoR §1304 covers penetration macadam/semi-grout and provides a definite construction sequence; the binder is applied to <strong>rolled coarse aggregate</strong> in §1304(6).</p>" +
                        "<ol><li><strong>Prepare the support:</strong> repair holes, soft places and irregularities; restore the required profile, clean the surface and prepare edge support.</li><li><strong>Spread coarse aggregate:</strong> use approved clean, angular material at a trial-established loose depth that gives the specified compacted thickness. Avoid heap segregation and contamination.</li><li><strong>Shape and roll:</strong> establish a firm interlocked skeleton and check crossfall and surface regularity. Its texture must permit reasonably uniform binder penetration.</li><li><strong>Apply binder:</strong> use the approved distributor, binder, application quantity and temperature. The clause requires full-depth dryness when straight-run or cutback binder is applied; its emulsion variant has separately described preparation.</li><li><strong>Add key aggregate:</strong> immediately distribute the specified key or choke aggregate, broom and roll it into the surface interstices without burying the coarse skeleton under excess loose chips.</li><li><strong>Finish and protect:</strong> carry out the seal coat required by §1304(8), remove loose material as specified and protect from public traffic until that seal work is complete under §1304(9).</li></ol>" +
                        "<p>Check aggregate grading and quality, layer geometry, distributor uniformity, binder penetration, key-aggregate spread and final stability. More binder is not automatically better: excess can migrate to the surface, while inadequate penetration or dusty aggregate can leave a weak layer.</p>" +
                        "<p><strong>Remember the physical order:</strong> coarse aggregate, rolling, binder, key aggregate and its rolling, then the specified seal. Surface-dressing operations with a different sequence must not be substituted. This resolves the two assigned bank questions' conflicting keys without changing either stored record.</p>",
                    sources: [
                        { id: "TRAN808-00072", set: 8, question: 85 },
                        { id: "TRAN808-00364", set: 33, question: 89 }
                    ]
                },
                {
                    id: "bbm-bm-and-dense-premix-construction",
                    title: "BBM/BM and dense asphalt: premixing does not imply the same grading",
                    html: "<p><em>Source-free syllabus extension: bituminous-bound macadam and asphalt-layer construction are expressly in 9.6, but no assigned question supplies their full premix procedure.</em> In this teaching comparison, <strong>BBM</strong> denotes the syllabus's bituminous-bound macadam made by mixing binder and aggregate before placement. The inspected specification names <strong>Bituminous Macadam, BM, in §1307</strong>; it does not establish a separate product specification merely from the abbreviation BBM.</p>" +
                        "<p>§1307 describes BM as an <strong>open-graded premix</strong>. <strong>Dense bituminous macadam, DBM, §1308</strong>, uses a denser grading and is intended mainly, though not exclusively, for base, binder and profile-corrective courses. Bituminous concrete is separately specified in §1309. Product names identify different material and performance requirements; none should be substituted solely because all contain bitumen.</p>" +
                        "<ol><li>Approve the constituent sources, grading and binder proportion for the named product, then demonstrate uniform plant production.</li><li>Prepare and accept the supporting layer, with prime and/or tack as required for that interface.</li><li>Mix binder and prepared aggregate before transport; deliver covered loads without contamination or segregation.</li><li>Spread uniformly to the required profile and trial-established loose depth, maintaining a continuous paving operation where practicable.</li><li>Compact while workable, construct sound joints and edges, then check the product's specified density or completion criterion, thickness and surface quality.</li></ol>" +
                        "<p>For BM, §1307(3)(f) requires the specified density, or, where no density is specified, rolling until there is no further movement under the roller. <strong>Do not import DBM's G<sub>mm</sub>-based field percentage into that fallback.</strong> §1307(5) requires covering with the next or wearing course within 48 hours; if delayed, a seal coat is required before opening to traffic.</p>" +
                        "<p>Open grading can transmit or retain water, depending on the system. It is <strong>not automatically a functioning drainage layer</strong>. A usable drainage path needs continuity, suitable filtering, crossfall and an outlet; impermeable shoulders or interfaces can instead trap water. The BM clause explicitly calls attention to drainage of the adjacent layers.</p>",
                    sources: []
                },
                {
                    id: "asphalt-job-mix-and-process-control",
                    title: "Asphalt job-mix control: proportions, plant trials and temperature windows",
                    html: "<p><em>Source-free syllabus extension based on DoR §§1301 and 1308: no assigned question provides a complete asphalt job-mix formula or plant-control dataset.</em> An approved <strong>job-mix formula, JMF</strong>, identifies actual material sources, a definite combined grading, binder type and content, laboratory properties and mixing/compaction temperatures. A broad specification grading envelope is not the single target grading needed to run the plant consistently.</p>" +
                        "<p>§1308(3)(c) expresses binder as a percentage of <strong>total mix mass</strong>; aggregate fractions, including filler, are proportioned within total aggregate mass. Minimum binder quantities in a product table are not automatically the optimum binder content. The DBM design selects content for <strong>4% design air voids</strong> while satisfying the other requirements; Table 13.29 gives a 3–5% air-void range and 65–75% voids filled with bitumen. Four-percent air voids does not mean four-percent binder.</p>" +
                        "<p>Table 13.29's DBM Marshall conditions include <strong>75 blows on each face and stability testing at 60°C</strong>; applicable larger-aggregate modified-Marshall provisions also require attention. Cold-mix Table 13.40 instead uses <strong>50 blows per face and stability at 25°C</strong>, with its own specimen curing. Laboratory preparation is not a field roller pass count or a universal test condition for every asphalt product.</p>" +
                        "<ul><li>Calibrate aggregate feeds, weighing, filler and binder metering; control aggregate moisture and dryer output.</li><li>Demonstrate the laboratory JMF in plant trials, then in laying trials using the intended equipment and method.</li><li>Track grading, binder content, coating, temperatures and moisture susceptibility; verify production with the appropriate tests rather than using Marshall stability as an extraction test.</li><li>Reassess a source or mix change through the required approval process; do not conceal drift by changing the target after production.</li></ul>" +
                        "<p><strong>Temperatures are grade- and job-specific.</strong> For example, the inspected Table 13.5's VG30 row gives mixed material 150–165°C, laying at least 140°C and rolling at least 90°C. These are identified table values, not hypothetical bank data or a rule for all binders. Modified products need their applicable approved guidance. Flash point is a test safety characteristic, <strong>not the target or maximum permitted paving temperature</strong>; overheating can damage binder well before a flash-point-based approach would suggest stopping.</p>",
                    sources: []
                },
                {
                    id: "asphalt-rolling-density-and-opening",
                    title: "Asphalt laying and rolling: field density is not Marshall density",
                    html: "<p>Accept the supporting surface and repair defects before paving. Keep loads clean and covered, feed the paver steadily, and set the screed for the specified profile and compacted thickness. Segregated patches, interrupted feed and rapidly cooling edges require attention before the next course hides them. Suspend work under the applicable weather and surface-condition restrictions.</p>" +
                        "<p>Use the approved trial rolling pattern: initial compaction close enough to the paver to retain workability, suitable intermediate compaction, and finishing without damaging or displacing the mat. Coordinate overlapping passes and compact the joints and edges deliberately. A roller must not shove a mix that is too tender or attempt to recover density after the usable temperature window has passed. Restore cold transverse and longitudinal joint faces by the specified cutting, cleaning and bonding procedure rather than feathering loose mix across them.</p>" +
                        "<p>For <strong>DBM, §1308(3)(e)</strong>, the field minimum is <strong>92% of the density based on the theoretical maximum specific gravity G<sub>mm</sub> obtained on the day of compaction</strong>, using the referenced ASTM D 2041 method. G<sub>mm</sub> is dimensionless; its corresponding density is G<sub>mm</sub>ρ<sub>w</sub> on the matching reference basis. The field percentage is <strong>100ρ<sub>bulk,field</sub>/(G<sub>mm</sub>ρ<sub>w</sub>)</strong>. It is not 92% of a 75-blow Marshall specimen's bulk density and not a Proctor MDD percentage.</p>" +
                        "<p>The same clause permits core determination <strong>no sooner than 24 hours after laying</strong>, or another approved density method. That sampling restriction is <strong>not an opening-to-traffic instruction</strong>. §1308(5) requires the dense bituminous layer to have <strong>cooled to ambient temperature and the Engineer's written approval</strong> before traffic is allowed.</p>" +
                        "<p>There is no unconditional public-opening rule of 24 hours for every flexible pavement. Emulsion curing, an unfinished seal, a granular intermediate layer and a completed hot dense layer have different protection requirements. Density, thickness, regularity, bond, drainage and the remaining acceptance checks still matter; one threshold alone does not certify the road.</p>",
                    sources: [{ id: "TRAN808-00272", set: 1, question: 87 }]
                },
                {
                    id: "asphalt-material-balance-example",
                    title: "Added material balance: total-mix binder and sprayed emulsion are different",
                    html: "<p><em>Source-free syllabus extension and hypothetical worked example: all dimensions, mixture properties, binder percentages and spray inputs in this block are invented. They are not an approved JMF or prescribed application rates.</em> Suppose a trial planning section is 100 m long, 3.50 m wide and 0.050 m thick after compaction, with assumed bulk density 2.40 Mg/m<sup>3</sup>.</p>" +
                        "<p>The compacted volume is <strong>100 × 3.50 × 0.050 = 17.50 m<sup>3</sup></strong>. Ignoring waste and overrun for this calculation, required placed mix mass is <strong>17.50 × 2.40 = 42.00 Mg</strong>, or 42.00 tonnes. Density here is a planning input for quantity conversion, not proof that the field G<sub>mm</sub> criterion is met.</p>" +
                        "<p>If the illustrative JMF uses <strong>5.0% binder by total mix mass</strong>, binder mass is 0.05 × 42.00 = <strong>2.10 tonnes</strong> and aggregate including filler is <strong>39.90 tonnes</strong>. A stated 5% by aggregate mass would be different: binder/total mix would be 5/105 = <strong>4.762%</strong>, approximately. State the denominator before ordering or checking material.</p>" +
                        "<p>Now consider a separate hypothetical tack operation over the same <strong>350 m<sup>2</sup></strong>. If the selected application is <strong>0.50 kg/m<sup>2</sup> of supplied emulsion</strong>, the spray inventory is <strong>175 kg of emulsion</strong>. With an assumed certified residue fraction of 0.60 and no loss, the resulting residual binder mass is <strong>105 kg</strong>, equivalent to <strong>0.30 kg/m<sup>2</sup></strong>. Neither this conversion nor the example authorizes site dilution of RS1.</p>" +
                        "<p>Binder inside the asphalt mixture and binder in an interlayer film are separate quantities and functions. Do not count the tack mass as part of the layer JMF. Actual ordering also needs measured dimensions, losses, returns, temperature/density conversion where volume units are used, and the approved product-specific requirements.</p>",
                    sources: []
                },
                {
                    id: "plain-concrete-planning-and-batch-water",
                    title: "Plain concrete pavement: plan the joints and control effective batch water",
                    html: "<p><em>Source-free syllabus extension: the assigned questions contain no complete plain-concrete paving or batching dataset.</em> DoR <strong>§3202(1)</strong> covers <strong>unreinforced, dowel-jointed plain cement concrete pavement</strong>. Joint dowels and ties do not make it a pavement with distributed crack-control reinforcement. Use the stipulated slab thickness, grade, joint details and foundation arrangement; do not import generic reinforced-slab bar placement.</p>" +
                        "<p>The mix-design basis is the contract's flexural or compressive requirement. <strong>§3202(3)(c)</strong> states characteristic flexural strength not less than <strong>4.5 MPa or characteristic compressive strength 40 MPa, unless specified otherwise</strong>. Preserve both <strong>or</strong> and the qualification. The associated testing and acceptance provisions address 28-day strength; this does not make one cement quantity or water ratio sufficient to prove the required strength.</p>" +
                        "<ol><li>Approve constituents, laboratory mix design, plant and paving trials; establish consistency and transport requirements for the actual plant and weather.</li><li>Accept uniform support, drainage and the specified separation arrangement; secure forms or slipform guidance to the correct line and level.</li><li><strong>Plan joints before pouring:</strong> transfer their locations, arrange end-of-day stops, and prepare sound sawing equipment including backup capacity.</li><li>Position and restrain the specified dowels and ties at their drawing-controlled depths and alignments; ensure concrete can consolidate around them without displacing them.</li></ol>" +
                        "<p>Effective mixing water includes metered water and aggregate free surface moisture; aggregate absorption must be accounted for on the adopted moisture basis. <strong>Hypothetical batch-water example, not bank givens:</strong> use 360 kg cement and a target effective water mass of 162 kg, giving <strong>w/c = 162/360 = 0.45</strong>. If measured aggregate free water contributes 24 kg from sand and 6 kg from coarse aggregate, with no other water contribution, meter <strong>162 − 24 − 6 = 132 kg</strong>.</p>" +
                        "<p>Adjust aggregate batch masses to maintain the designed aggregate quantity on its stated dry or saturated-surface-dry basis. Below-SSD aggregate may absorb water rather than contribute it; do not count absorbed pore water as free water. Aggregate masses alone cannot establish cement content, and this hypothetical water calculation does not establish yield, workability or strength.</p>",
                    sources: []
                },
                {
                    id: "plain-concrete-placement-joints-and-curing",
                    title: "Concrete placement: finishing, immediate curing and the early sawing window",
                    html: "<p><em>Source-free syllabus extension based on DoR §3202: the procedure and opening conditions here are not supplied as a complete assigned bank question.</em> Organize batching, hauling, placing, vibration, finishing and protection as a continuous train. The planned production rate must be one the finishing and curing crews can maintain, not just the maximum plant output.</p>" +
                        "<p><strong>Contraction joints</strong> create planned weakened sections to control shrinkage cracking; <strong>construction joints</strong> terminate an interrupted or staged pour; <strong>expansion or isolation details</strong> accommodate the movement or separation required at designated interfaces. Their locations and details must follow the drawings, not an invented universal joint spacing.</p>" +
                        "<ol><li><strong>Recheck before placement:</strong> inspect support, forms or guidance, separation layer, joint positions and bar assemblies. Dowels must transfer load while permitting the intended joint movement; misalignment can lock that movement. Ties hold the relevant longitudinal joint together and are not interchangeable with dowels.</li><li><strong>Deliver and place:</strong> confirm the approved mixture, workability and temperature; discharge without segregation, contamination or uncontrolled water addition. Do not use vibrators to drag concrete over long distances.</li><li><strong>Consolidate:</strong> remove entrapped air through the slab depth, around bars and at edges without excessive vibration that segregates the mix or displaces assemblies.</li><li><strong>Finish and texture:</strong> strike off to profile, finish without working bleed water into the surface, and form the specified texture while the concrete is suitable.</li><li><strong>Start curing immediately after texturing:</strong> protect the surface and sides against moisture loss and adverse weather using the specified system. Maintain that protection throughout subsequent work.</li><li><strong>Saw within the suitable early window:</strong> concrete must withstand the saw and crew without unacceptable ravelling or texture damage, yet cutting must occur before uncontrolled shrinkage cracking. Check the specified depth and continuity of the cut, then restore disturbed curing protection.</li><li><strong>Prepare and seal joints:</strong> undertake subsequent groove widening and cleaning at the appropriate stage, install the specified seal system, and allow it to cure. These later sealing operations are distinct from the first crack-control sawcut.</li></ol>" +
                        "<p>Under <strong>§3202(6)(d)</strong>, dowels are normally at mid-depth unless drawings show otherwise, centred across the joint and aligned parallel to the finished slab surface, carriageway centreline and one another within the specified tolerances. Ties at longitudinal joints follow their separate drawing-controlled depth and cover requirements, approximately parallel to the surface and perpendicular to the joint. Do not relocate all joint steel to a generic bottom tension zone.</p>" +
                        "<p><strong>Curing and joint cutting overlap in time.</strong> The procedure is not pour, finish a 28-day curing period, then make the first contraction cuts. Early crack-control sawing and later widening for sealant are separate operations; continue the specified moisture and temperature protection around both.</p>" +
                        "<p><strong>Opening under §3202(12):</strong> no vehicular traffic within 28 days of construction or before joints are permanently sealed and cured. Regular traffic additionally requires completion of the stated 28-day curing period, joint sealing, shoulder construction and <strong>written permission of the Engineer</strong>. This clause supplies <strong>no earlier strength-only permission</strong>. It governs the identified concrete-pavement scope, not every concrete product or contract everywhere.</p>",
                    sources: []
                },
                {
                    id: "maintenance-categories-and-asset-care",
                    title: "Maintenance planning: permanent pothole patches are not temporary filling",
                    html: "<p>Maintain the <strong>whole road asset</strong>: pavement, shoulders, surface and subsurface drainage, slopes, structures, signs, markings and safety devices. A repaired surface can fail again if a high shoulder traps water or a culvert outlet remains blocked. Record the defect's location, extent, severity, immediate risk and suspected cause before selecting the work.</p>" +
                        "<table><thead><tr><th scope='col'>Maintenance category</th><th scope='col'>Meaning in the cited DoR framework</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Routine / regular</th><td>Continual asset care such as cleaning drainage, vegetation control and shoulder upkeep. §2902 Table 29.5 specifically includes <strong>temporary filling of potholes</strong> in seasonal routine priorities.</td></tr>" +
                        "<tr><th scope='row'>Reactive / recurrent</th><td>Condition-triggered intervention after defects appear. §2901(2), Table 29.2 lists <strong>blacktop pothole, patch and edge repair</strong>: permanent bituminous patch repair belongs here.</td></tr>" +
                        "<tr><th scope='row'>Cyclic / periodic</th><td>Renewal treatments such as appropriate surface dressing or overlays at planned intervals; condition and economics still determine the actual intervention.</td></tr>" +
                        "<tr><th scope='row'>Emergency</th><td>Immediate assessment, warning, clearance or diversion when failure or obstruction threatens access and safety; permanent restoration can follow.</td></tr></tbody></table>" +
                        "<p>The specification also distinguishes responsive and roadside work. These administrative categories do not replace engineering diagnosis. <strong>Pothole maintenance without stating whether it means temporary filling or permanent patching is ambiguous</strong>; the bank's unconditional routine label loses the recurrent distinction.</p>" +
                        "<p>Before and during wet periods, prioritize choked cross drains and side drains, obstructing shoulders and unstable debris according to risk and the applicable programme. Restore connected outlets, not just a clean inlet. Avoid excavating support or blocking a receiving watercourse while cleaning. During dry periods, schedule durable repairs and preventive treatments under suitable conditions.</p>" +
                        "<p>Link inspection, weekly work planning, quantities, completed repairs and follow-up performance. Temporary filling must remain identifiable so it is not mistaken for an accepted permanent repair. Safe work-zone arrangements are part of every maintenance operation, not an optional final activity.</p>",
                    sources: [
                        { id: "TRAN808-00075", set: 8, question: 88 },
                        { id: "TRAN808-00321", set: 30, question: 82 }
                    ]
                },
                {
                    id: "crack-patterns-and-asphalt-fatigue",
                    title: "Crack diagnosis: a map pattern is not always asphalt fatigue",
                    html: "<p>Classify distress by <strong>material, pattern, location, extent, severity and progression</strong>, then investigate the mechanism. Cracking, deformation, disintegration and surface texture defects can coexist. A photograph or a single label rarely proves which layer failed or which treatment will last.</p>" +
                        "<p><strong>Alligator or fatigue cracking in asphalt</strong> is associated with repeated traffic loading and commonly develops into an interconnected pattern in wheel paths. Repeated tensile strain accumulates damage when structural demand and the material system's capacity are incompatible. Weak or moisture-sensitive support, inadequate pavement thickness and deteriorated asphalt can accelerate the process.</p>" +
                        "<table><thead><tr><th scope='col'>Observed pattern</th><th scope='col'>Interpretation to investigate</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Interconnected wheel-path cracks</th><td>Fatigue is a strong candidate; determine structural condition and the contribution of underlying support.</td></tr>" +
                        "<tr><th scope='row'>Larger block-like asphalt pattern</th><td>Shrinkage, aging and thermal behaviour may dominate; it is not automatically traffic fatigue.</td></tr>" +
                        "<tr><th scope='row'>Longitudinal seam crack</th><td>Check construction joint density and bonding as well as possible structural or settlement effects.</td></tr>" +
                        "<tr><th scope='row'>Fine network in concrete</th><td>Concrete map cracking or surface crazing needs a concrete-specific diagnosis, not an asphalt-fatigue label.</td></tr></tbody></table>" +
                        "<p>Bottom-up initiation from tensile strain near the base of an asphalt layer is an important model, <strong>not the only possible crack initiation</strong>. Surface-initiated damage and combined mechanisms also occur. Distinguish <strong>weak subgrade</strong> from <strong>insufficient thickness of the pavement layers</strong>; describing the subgrade simply as too thin does not establish the structural deficiency.</p>" +
                        "<p>FHWA LTPP's May 2014 manual distinguishes asphalt fatigue and block cracking, and separately identifies concrete map cracking. Therefore the bank's unrestricted map-equals-alligator wording should not be generalized. Its phrase Fishing of side slopes has no established technical meaning here and remains unresolved.</p>" +
                        "<p>Sealing can reduce ingress through suitable cracks, but does not restore load-carrying capacity to a broken fatigue zone. Investigate drainage and support and select localized structural repair or designed rehabilitation where needed.</p>",
                    sources: [
                        { id: "TRAN808-00325", set: 30, question: 86 },
                        { id: "TRAN808-00348", set: 32, question: 87 },
                        { id: "TRAN808-00349", set: 32, question: 88 },
                        { id: "TRAN808-00350", set: 32, question: 89 }
                    ]
                },
                {
                    id: "rutting-shoving-and-layer-deformation",
                    title: "Rutting and shoving: find where permanent deformation is occurring",
                    html: "<p><strong>Rutting</strong> is a longitudinal depression in a wheel path. It is a surface observation, not proof that only the wearing course has deformed. Permanent strain can accumulate in asphalt, granular layers, subgrade or several layers together. A rut may also have side ridges from lateral displacement.</p>" +
                        "<ul><li><strong>Densification:</strong> an inadequately compacted layer becomes denser under traffic, reducing its thickness.</li><li><strong>Shear deformation:</strong> an unstable mixture or weak supporting layer flows laterally under repeated loading. Adequate initial density alone does not prevent this mechanism.</li><li><strong>Moisture-related weakening:</strong> stripping can reduce asphalt cohesion and stiffness, while wet support can deform more readily.</li><li><strong>Aggregate problems:</strong> unsuitable flaky particles can break or form a poor load-carrying skeleton and contribute to instability. They are not categorically unrelated to rutting.</li></ul>" +
                        "<p><strong>Shoving</strong> is localized longitudinal displacement or bulging, often where vehicles brake, accelerate or turn. <strong>Corrugation</strong> describes a repeated wave-like surface pattern. The bank's longitudinal-ridging description intends shoving, but a ridge beside a rut does not by itself establish that diagnosis. Examine the direction of movement, location and surrounding profile.</p>" +
                        "<p>Measure transverse profiles and rut depths, examine cores or pits where justified, and relate the layer geometry to mix and compaction records. A narrow unstable asphalt zone and a broad depression extending through weak lower layers require different remedies. Standing water in ruts adds a safety concern and can accelerate moisture damage.</p>" +
                        "<p><strong>Good compaction reduces densification-related rutting; it does not guarantee a rut-free road.</strong> Prevention also requires an appropriate aggregate skeleton and binder, controlled voids and temperatures, adequate layer thickness, drainage, support and workmanship. Mill and replace unsound asphalt where appropriate; if deformation originates deeper, correct that layer rather than merely levelling the visible trough.</p>",
                    sources: [
                        { id: "TRAN808-00053", set: 6, question: 88 },
                        { id: "TRAN808-00065", set: 7, question: 89 },
                        { id: "TRAN808-00077", set: 8, question: 90 },
                        { id: "TRAN808-00167", set: 16, question: 89 }
                    ]
                },
                {
                    id: "reflection-cracking-and-interlayer-slippage",
                    title: "Reflection versus slippage: specify which movement crosses which interface",
                    html: "<p><strong>Reflection cracking</strong> occurs when movement at an existing crack or joint concentrates strain in a new layer above it. An asphalt overlay over jointed concrete is a clear example: opening and closing, or differential vertical movement across the underlying joint, can initiate a crack in the overlay near the same location. Reflection can also occur over other cracked asphalt or bound layers.</p>" +
                        "<p>Compare the observed crack spacing and alignment with the known underlying joints and repairs. LTPP's joint-reflection description explicitly depends on knowing the slab layout. A regular transverse crack pattern alone does not prove the substrate is concrete, and the time to reflection is not universally one or two seasons.</p>" +
                        "<p><strong>Interlayer slippage</strong> is different. If the new layer slides relative to the layer beneath it because the interface is weak, braking or turning can produce crescent-shaped slippage cracks and displacement. Inadequate tack, dust or contamination, poor application and an unstable mixture are possible contributors. This is not necessarily a reflection of an old joint.</p>" +
                        "<table><thead><tr><th scope='col'>Movement being described</th><th scope='col'>Likely question to ask</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Old joint opens or steps beneath the overlay</th><td>Is concentrated movement reflecting through the new layer?</td></tr>" +
                        "<tr><th scope='row'>New layer slides along a weak interface</th><td>Is the defect slippage or shear failure requiring bond and material repair?</td></tr>" +
                        "<tr><th scope='row'>Whole support settles or moves</th><td>Does the foundation need investigation beyond either crack label?</td></tr></tbody></table>" +
                        "<p>The bank's phrase relative movement of pavement layer is therefore under-specified. For rehabilitation, stabilize deficient support or load transfer where necessary and select an appropriate joint treatment, interlayer, saw-and-seal or reconstruction strategy under an approved design. A stress-absorbing interlayer may reduce or delay reflection, but cannot promise to eliminate movement. Tack improves bond; it is not a universal cure for moving joints.</p>",
                    sources: [
                        { id: "TRAN808-00351", set: 32, question: 90 },
                        { id: "TRAN808-00352", set: 33, question: 78 }
                    ]
                },
                {
                    id: "ravelling-stripping-and-binder-bleeding",
                    title: "Surface loss, moisture damage and excess binder require different repairs",
                    html: "<p><strong>Ravelling</strong> is progressive loss of aggregate and binder from the surface, often beginning with fines and developing into a rough, pitted texture. Too little effective binder, poor compaction, segregation, cold placement, aging or moisture damage can weaken particle retention. A deliberately open-graded but correctly designed mixture is not defective merely because it is open graded.</p>" +
                        "<p><strong>Stripping</strong> is moisture-related loss of adhesion between binder and aggregate. The damage can be internal before substantial surface loss is visible, and it may contribute to rutting as the mixture weakens. Binder–aggregate compatibility, coating, permeability, water exposure and drainage all matter. A named rock such as quartzite is not a universally verified most-susceptible material across all binders and conditions.</p>" +
                        "<p><strong>Bleeding or flushing of bituminous binder</strong> is excess binder at the surface, sometimes producing a shiny film and loss of texture. Excess binder relative to the available void space, very low air voids, hot conditions and traffic action can contribute. <strong>Subgrade pressure is not a sufficient explanation</strong> for binder migration. This binder bleeding is distinct from water seeping or pumping through cracks.</p>" +
                        "<table><thead><tr><th scope='col'>Finding</th><th scope='col'>Treatment reasoning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Limited shallow ravelling, sound structure</th><td>A compatible preservation treatment may retain particles after suitability checks; more severe unsound material needs removal or recycling.</td></tr>" +
                        "<tr><th scope='row'>Stripped or moisture-weakened mix</th><td>Correct water entry and drainage, evaluate compatibility and replace or rehabilitate the damaged material. A surface seal alone may leave the failure active.</td></tr>" +
                        "<tr><th scope='row'>Binder-rich slippery surface</th><td>Approved blotting may give temporary relief; durable correction may require removal, retexturing or replacement of the binder-rich surface. Do not automatically spray more binder.</td></tr></tbody></table>" +
                        "<p>A <strong>pothole</strong> is localized loss producing a cavity whose depth varies. It need not remove the full asphalt layer or full pavement depth. Determine the sound repair boundary and the state of support before deciding how deeply to excavate. The distress name describes what is observed; it is not a predefined repair depth.</p>",
                    sources: [
                        { id: "TRAN808-00353", set: 33, question: 79 },
                        { id: "TRAN808-00357", set: 33, question: 83 },
                        { id: "TRAN808-00358", set: 33, question: 84 },
                        { id: "TRAN808-00359", set: 1, question: 90 }
                    ]
                },
                {
                    id: "concrete-distress-and-pavement-pumping",
                    title: "Concrete distress and pumping: material-specific labels have limits",
                    html: "<p>A concrete slab can suffer load-related cracking, restrained thermal or shrinkage movement, loss of support, joint damage or material deterioration. <strong>Slab failure</strong> belongs to rigid-pavement behaviour in the bank's conventional distinction; an ordinary asphalt wheel-path rut is not concrete slab flexural failure. But water movement, frost-related damage and some shrinkage mechanisms are not exclusive to one pavement family.</p>" +
                        "<table><thead><tr><th scope='col'>Concrete observation</th><th scope='col'>Meaning and investigation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Crazing / fine surface network</th><td>Shallow fine cracking, often related to surface shrinkage or finishing and curing conditions. Not every single hairline crack is crazing, and shallow crazing is not automatically a through-slab leak or strength failure.</td></tr>" +
                        "<tr><th scope='row'>Corner or slab break</th><td>A discrete structural break; examine wheel loading, support, load transfer and existing deterioration.</td></tr>" +
                        "<tr><th scope='row'>Joint spalling</th><td>Local breaking at a joint edge; investigate incompressible material, joint movement, bar restraint and weak edge concrete.</td></tr>" +
                        "<tr><th scope='row'>Faulting</th><td>A difference in elevation across a joint or crack; support erosion, settlement and poor load transfer can be involved.</td></tr></tbody></table>" +
                        "<p><strong>Pumping requires a water and support investigation.</strong> Repeated loading can drive water and erodible fines through openings, leaving voids and reducing support. It is well known at concrete joints, but <strong>it also occurs beneath asphalt</strong>. FHWA's <strong>LTPP Distress Identification Manual, Fifth Revised Edition, May 2014, Chapter 1, distress 15</strong>, explicitly lists water bleeding and pumping for asphalt-concrete surfaces, including fines ejected from support layers through cracks. Chapter 2 separately lists it for jointed concrete.</p>" +
                        "<p>Restore a functioning drainage route, investigate erodible or contaminated support, and assess load transfer or structural repairs as appropriate. Joint sealing may reduce ingress but cannot by itself fill an existing support void or restore broken concrete. Grinding can improve a faulted surface's ride without necessarily arresting the underlying process. Diagnose shallow surface defects separately from defects requiring partial-depth, full-depth or slab replacement work.</p>",
                    sources: [
                        { id: "TRAN808-00021", set: 3, question: 89 },
                        { id: "TRAN808-00323", set: 30, question: 84 },
                        { id: "TRAN808-00324", set: 30, question: 85 },
                        { id: "TRAN808-00326", set: 30, question: 87 },
                        { id: "TRAN808-00356", set: 33, question: 82 }
                    ]
                },
                {
                    id: "patch-repair-and-preservation-selection",
                    title: "Patch repair and preservation: remove the cause as well as the defect",
                    html: "<p><em>Source-free syllabus extension: the sequence below follows DoR §2903(A)'s general bituminous patch-repair procedure; the assigned bank does not supply a complete repair method or site investigation.</em> First make the location safe and determine whether the problem is confined to the surfacing or extends into the base, subbase or foundation. Repeated failure at one patch is evidence to investigate, not simply a reason to increase patching frequency.</p>" +
                        "<ol><li><strong>Define the repair:</strong> establish the extent of unsound material and any water source; plan traffic protection, materials and equipment.</li><li><strong>Cut and excavate:</strong> for the cited §2903(A) method, form a rectangular or square area with sound vertical edges and remove loose material down to stable support.</li><li><strong>Restore lower layers:</strong> replace or treat deficient support with the specified material and compaction method. Do not put a permanent surface patch over mud or an unsupported cavity.</li><li><strong>Clean and prepare interfaces:</strong> remove dust and debris; apply the required prime or tack according to the exposed substrate and treat the sides as specified.</li><li><strong>Place compatible patch material:</strong> use the approved bituminous material and its applicable procedure, in lifts that can be compacted with the available equipment. §2903(A) does not permit non-bituminous material to replace bituminous patch material.</li><li><strong>Compact and finish:</strong> under §2903(A), achieve the relevant compaction criterion and finish flush with the surrounding profile; check drainage and the applicable opening conditions.</li></ol>" +
                        "<p><strong>Product-specific qualification:</strong> §2903(B)(4)(c), for readymade cutback patching mix, distinguishes hand-rammed or small-compactor work from its roller alternative. The former is left slightly proud to allow subsequent traffic compaction; the latter is placed with sufficient initial allowance to finish flush after rolling. Do not transfer one finishing rule indiscriminately to every cold or proprietary patch product.</p>" +
                        "<p>Preservation is appropriate when the underlying structure remains serviceable and the selected treatment addresses the actual surface need. Crack sealing treats suitable discrete openings; fog or slurry seals, surface dressing and microsurfacing have different binder, texture and application requirements. None is a blanket solution for fatigue failure, deep rutting or active pumping.</p>" +
                        "<p>Concrete repairs also require a defined depth and joint strategy: shallow spalls may suit a designed partial-depth repair, while broken or unsupported slabs can require full-depth work, restored load transfer and drainage correction. Do not bridge a working joint unintentionally. Record the repair boundary, material, preparation, curing/opening and follow-up condition so that temporary relief is not mistaken for rehabilitation.</p>",
                    sources: []
                },
                {
                    id: "benkelman-response-and-rehabilitation-design",
                    title: "Benkelman response and rehabilitation: measure first, then design the treatment",
                    html: "<p>A <strong>Benkelman beam</strong> measures pavement rebound response as a specified wheel load moves away from the test point. Its reading is an input to structural evaluation and an applicable overlay-design method; it does <strong>not directly read the required overlay thickness</strong>. A small observed deflection also does not establish adequate skid resistance, texture or drainage.</p>" +
                        "<ol><li><strong>Define representative sections:</strong> combine pavement history, layer information, traffic, visible distress and drainage observations; do not average fundamentally different structures into one unexplained value.</li><li><strong>Control measurement:</strong> use the prescribed axle load, tyre condition/pressure, beam geometry, calibrated dial system, test positions and vehicle-movement/readings procedure. Account for the instrument's lever ratio and any required support-movement correction.</li><li><strong>Normalize appropriately:</strong> record pavement temperature and seasonal moisture conditions; apply only the temperature and seasonal corrections required by the selected method and material system.</li><li><strong>Design and compare:</strong> derive the method's representative design response, combine it with design traffic and remaining structural condition, then determine a suitable strengthening treatment.</li></ol>" +
                        "<p><strong>Functional improvement</strong> restores ride, texture or surface protection; <strong>structural rehabilitation</strong> restores required load-carrying capacity. A thin overlay may serve the former without supplying the latter. Correct drainage, unsound patches and deficient support before relying on an overlay to perform.</p>" +
                        "<ul><li><strong>Milling and replacement:</strong> remove defective asphalt or recover levels and clearances; verify what sound structure remains.</li><li><strong>Designed overlay:</strong> provide the required thickness, profile, bond and crack/joint strategy after preparatory repairs.</li><li><strong>Recycling or full-depth reclamation:</strong> assess recovered material and binder compatibility. Full-depth reclamation processes the asphalt and a selected amount of underlying material into a new base, then requires the designed surfacing and any curing.</li><li><strong>Reconstruction:</strong> rebuild when damage or inadequate support makes preservation or an overlay insufficient.</li></ul>" +
                        "<p>Compare feasible alternatives using expected performance, traffic disruption, drainage, clearance, material availability and life-cycle costs. The assigned question contains no deflection readings, calibration, correction factors, traffic or design chart, so no numerical overlay thickness is claimed. The cited archived FHWA recycling guidance supports this diagnosis-and-selection framework; it is not a Nepal overlay approval.</p>",
                    sources: [{ id: "TRAN808-00334", set: 31, question: 83 }]
                }
            ],
            gaps: [
                "construction-sequence-and-hold-points is a source-free syllabus extension. The bank supplies no complete project method statement, approved drawings, utility survey, construction traffic plan or inspection-and-test plan; the workflow does not replace them.",
                "moisture-density-and-compaction-basis, subgrade-lifts-and-field-quality-control and field-density-worked-example are source-free syllabus extensions. The derivation and identified §1003 requirements supplement the bank; the 12% OMC illustration and all worked field-sample inputs are hypothetical. Actual representative laboratory curves, sampling frequencies, oversize corrections and lot records remain necessary.",
                "production-and-truck-balance-example is a source-free syllabus extension. Its loader and truck capacities, cycle times, delay factor, available shift hours and loose-to-compacted conversion are hypothetical; no assigned question supplies a complete production dataset.",
                "mass-haul-worked-example is a source-free syllabus extension. All cut/fill volumes, rejection, dry densities, starting ordinate and bulking assumptions are invented. The assigned mass-haul question supplies only a qualitative endpoint, not a site material-allocation or haul-cost dataset.",
                "bbm-bm-and-dense-premix-construction and asphalt-job-mix-and-process-control are source-free syllabus extensions. The syllabus names BBM, while the inspected specification names BM in §1307; no separate BBM product clause is asserted. Actual JMF, source approvals, plant trials, material grading and product-specific temperature requirements are not supplied by the assigned bank.",
                "asphalt-material-balance-example is a source-free syllabus extension. Geometry, bulk density, binder percentage, emulsion application and residue fraction are hypothetical and are not recommended site rates, a JMF, or measured production quantities.",
                "plain-concrete-planning-and-batch-water and plain-concrete-placement-joints-and-curing are source-free syllabus extensions for the official plain-concrete scope. The batch-water example is hypothetical; actual mix design, aggregate moisture, joint layout, bar details, sawing conditions, strength and opening records are absent. The quoted requirement basis is §3202's unreinforced dowel-jointed pavement, not a universal rule for all concrete.",
                "patch-repair-and-preservation-selection is a source-free syllabus extension. The general patch sequence follows §2903(A), with the separate readymade-cutback finishing conditions in §2903(B)(4)(c) explicitly distinguished. The bank has no defect survey, support investigation or approved site repair method. A numerical rehabilitation design also cannot be recovered from the qualitative Benkelman question.",
                "The WBM/WMM procedure portion of wbm-wmm-and-historical-macadam is an official-scope extension from §§1203 and 1208. That block's two question links identify historical McAdam claims only. Original historical dimensions, including the incompatible 70/100 mm and less-than-75 mm claims, remain unverified; no modern construction norm or replacement key is inferred from them.",
                "The exact textbook taxonomy behind three stabilization types, the unspecified meaning of admixtures, and the corrupted phrase Fishing of side slopes remain unresolved as bank wording. Mechanisms are explained without inventing the missing classification source or intended distractor.",
                "References identify the inspected government-hosted Specifications 2073 with Third Amendment 2082 and scoped foreign technical guidance. The unusable Road Maintenance Guidelines text is not evidence of an absent provision; maintenance categories here are grounded in Specifications Tables 29.2 and 29.5. No latest-edition status, universal compliance, construction permission or executed test result is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: classification and admixture ambiguity.</strong> SOIL136-00344's three groups require a named taxonomy, not a universal count. SOIL136-00345's mechanical-stabilization key is defensible for physical soil/aggregate blending, but admixtures can also mean cement, lime or other treatments. The unspecified additive does not uniquely identify the mechanism.</p>",
                    sources: [
                        { id: "SOIL136-00344", set: 27, question: 35 },
                        { id: "SOIL136-00345", set: 27, question: 36 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: cement is not restricted to coarse soil.</strong> SOIL136-00353's only-coarse-grained wording is false and conflicts with its own acknowledgement of fine-soil treatment. For comparable solids, finer grains have greater specific surface area. SOIL136-00352's admixture ranking is also too absolute: soil compatibility, water, dosage, mixing, compaction delay, density and curing jointly control the result. No stored key is changed.</p>",
                    sources: [
                        { id: "SOIL136-00352", set: 27, question: 43 },
                        { id: "SOIL136-00353", set: 27, question: 44 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: LL25/PI6 needs the product and fines fraction.</strong> SOIL136-00348 has specific support in DoR Tables 12.9 and 12.11 for crusher-run macadam and WMM material passing 425 μm. Both tables apply LL ≤25 and PI ≤6 to <strong>base and subbase</strong>. Its explanation's blanket subbase relaxation is not valid for these same products. Laboratory CBR at 95% heavy MDD is also distinct from their 98% base and 95% subbase field-density requirements.</p>",
                    sources: [{ id: "SOIL136-00348", set: 27, question: 39 }]
                },
                {
                    html: "<p><strong>Bank check: sand–bitumen is valid, not uniquely best.</strong> TRAN808-00073 identifies a useful treatment for suitable sand. Neither most common nor a one-soil/one-stabilizer mapping is established. Cement treatment, mechanical blending and other solutions remain possible after compatibility, performance and economic assessment.</p>",
                    sources: [{ id: "TRAN808-00073", set: 8, question: 86 }]
                },
                {
                    html: "<p><strong>Bank check: historical numbers are not construction specifications.</strong> TRAN808-00081's ten-inch explanation converts to 254 mm, approximately 250 mm; 1:36 is about 2.78%. Historical authority for the prescription is not established here. TRAN808-00106's 70/100 mm key cannot be reconciled with its less-than-75 mm explanation. Neither claim is adopted as a modern size limit, and no guessed replacement answer is supplied.</p>",
                    sources: [
                        { id: "TRAN808-00081", set: 9, question: 82 },
                        { id: "TRAN808-00106", set: 11, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: compare the endpoint with its initial datum.</strong> TRAN808-00036 implies borrow only under the declared cut-positive/fill-negative convention and a negative net end-minus-start balance. A descending reach need not mean the whole project is in deficit. Use usable cut and fill on one corrected volume basis, with rejection and shrink/swell accounted for. Burrow is the stored typo for borrow.</p>",
                    sources: [{ id: "TRAN808-00036", set: 5, question: 82 }]
                },
                {
                    html: "<p><strong>Bank check: vibratory application is not granular-only.</strong> TRAN808-00078 and TRAN808-00343 give a sound principal application, without excluding other suitable equipment. TRAN808-00347 omits an all-three option even though suitable nonplastic silts can respond to vibration and weight. Its explanation adds saturation absent from statement ii; that added condition cannot justify rejecting all nonplastic silts.</p>",
                    sources: [
                        { id: "TRAN808-00078", set: 9, question: 79 },
                        { id: "TRAN808-00343", set: 32, question: 82 },
                        { id: "TRAN808-00347", set: 32, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: planned downtime is not automatically failure.</strong> TRAN808-00342 correctly distinguishes unavailability from serviceable equipment idle for want of work. Its explanation should not charge all servicing time to reliability failure: distinguish planned maintenance, unplanned breakdown and operational idleness, and state the availability denominator.</p>",
                    sources: [{ id: "TRAN808-00342", set: 32, question: 81 }]
                },
                {
                    html: "<p><strong>Bank check: the conveyor frame can be stationary, not all its parts.</strong> TRAN808-00344's conveying key is appropriate. The explanation's only-the-material-moves claim is false for belt, screw and bucket systems: the belt, screw or buckets also move relative to the installation.</p>",
                    sources: [{ id: "TRAN808-00344", set: 32, question: 83 }]
                },
                {
                    html: "<p><strong>Bank check: equipment preferences retain operating conditions.</strong> TRAN808-00341's dragline suits appropriate soft/wet below-track excavation among the given choices, not every dredging task. TRAN808-00345 correctly associates VSI with shaping but does not prove jaw/cone products must be flaky. TRAN808-00346's earth-traction answer depends on ground and track conditions; large area reduces ground pressure rather than by itself defining a higher friction coefficient.</p>",
                    sources: [
                        { id: "TRAN808-00341", set: 32, question: 80 },
                        { id: "TRAN808-00345", set: 32, question: 84 },
                        { id: "TRAN808-00346", set: 32, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: penetration-macadam key conflict is resolved by §1304.</strong> TRAN808-00072 stores <strong>C, binder before aggregates</strong>, while its own explanation describes the opposite. §1304(6) applies binder to rolled coarse aggregate, so its <strong>A</strong> describes the supported sequence. TRAN808-00364's <strong>A, after aggregate compaction</strong>, is consistent. Follow with key aggregate and its rolling, then the specified seal; do not omit that intermediate operation. Stored questions and keys remain untouched.</p>",
                    sources: [
                        { id: "TRAN808-00072", set: 8, question: 85 },
                        { id: "TRAN808-00364", set: 33, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a tack coat is defined by interlayer bonding.</strong> TRAN808-00329's impervious-surface wording alone is too broad to uniquely identify tack. TRAN808-00354 is interpreted as preparation before an overlay, and its spray-of-emulsion option overlaps a possible tack application. Tack is not itself the complete new surfacing.</p>",
                    sources: [
                        { id: "TRAN808-00329", set: 30, question: 90 },
                        { id: "TRAN808-00354", set: 33, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: 24 hours is not universal flexible-pavement opening.</strong> TRAN808-00272's stored fixed-time answer must not override DoR §1308(5): DBM must cool to ambient temperature and receive written Engineer approval. The 24-hour minimum in §1308(3)(e) concerns <strong>core sampling</strong>. WMM drying, emulsion curing and BM covering are different requirements; none provides blanket public-opening permission.</p>",
                    sources: [{ id: "TRAN808-00272", set: 1, question: 87 }]
                },
                {
                    html: "<p><strong>Bank check: permanent patching and temporary filling have different categories.</strong> TRAN808-00075 stores D, routine. DoR §2901(2), Table 29.2 places blacktop pothole/patch/edge repair under <strong>reactive/recurrent</strong> maintenance, corresponding to B for permanent repair. §2902, Table 29.5 separately includes <strong>temporary pothole filling</strong> in routine work. The unqualified stem needs both distinctions; the stored key is not rewritten.</p>",
                    sources: [{ id: "TRAN808-00075", set: 8, question: 88 }]
                },
                {
                    html: "<p><strong>Bank check: the all-of-the-above subgrade key includes a false cause.</strong> In TRAN808-00322, inadequate stability and excessive stress are credible mechanisms. Inadequate stress application is not equivalent to either; insufficient compaction would be different wording. With no A-and-B option, the stored D is not justified as written.</p>",
                    sources: [{ id: "TRAN808-00322", set: 30, question: 83 }]
                },
                {
                    html: "<p><strong>Bank check: map cracking, alligator fatigue and initiation depth.</strong> TRAN808-00325 and TRAN808-00350 use map as an unrestricted synonym for alligator. Asphalt block patterns and concrete map cracking require separate diagnoses. TRAN808-00348's repeated-load fatigue concept is sound, but bottom-up initiation is not the only possible mechanism, and weak subgrade must be distinguished from insufficient pavement thickness.</p>",
                    sources: [
                        { id: "TRAN808-00325", set: 30, question: 86 },
                        { id: "TRAN808-00348", set: 32, question: 87 },
                        { id: "TRAN808-00350", set: 32, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: unresolved distractor wording.</strong> TRAN808-00349 contains Fishing of side slopes, which is not an established pavement-distress cause in this context. Its intended original wording is not verified. Do not invent a repaired term or use the defective option as evidence that slope and drainage conditions can never influence pavement support.</p>",
                    sources: [{ id: "TRAN808-00349", set: 32, question: 88 }]
                },
                {
                    html: "<p><strong>Bank check: compaction does not exclude other rutting mechanisms.</strong> Inadequate compaction in TRAN808-00065 is a valid possible cause, but its exclusion of stripping and unsuitable flaky aggregate is too strong; both can contribute to deformation. TRAN808-00167's good-compaction answer reduces densification risk, not all shear, mix-instability or support-related rutting.</p>",
                    sources: [
                        { id: "TRAN808-00065", set: 7, question: 89 },
                        { id: "TRAN808-00167", set: 16, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: a longitudinal ridge needs a displacement diagnosis.</strong> TRAN808-00053 intends shoving, meaning localized longitudinal surface displacement, commonly under braking or acceleration. Distinguish it from the lateral ridge beside a rut and from repeated corrugations; channelized traffic alone does not uniquely identify the mechanism.</p>",
                    sources: [{ id: "TRAN808-00053", set: 6, question: 88 }]
                },
                {
                    html: "<p><strong>Bank check: reflection is not every relative layer movement.</strong> TRAN808-00351's asphalt-over-concrete example is valid, but other cracked substrates can reflect and a season-or-two timing is not established. TRAN808-00352 needs the movement to be at an underlying crack or joint to support reflection; interlayer sliding may instead produce shear/slippage failure.</p>",
                    sources: [
                        { id: "TRAN808-00351", set: 32, question: 90 },
                        { id: "TRAN808-00352", set: 33, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: ravelling and pothole depth.</strong> TRAN808-00353's low-binder cause is credible, but correctly designed open grading does not by itself mean failure. TRAN808-00358 correctly identifies progressive aggregate loss as ravelling; its explanation wrongly requires a pothole to remove the full layer. Potholes can be shallow or deep, and repair depth follows the actual sound-material boundary.</p>",
                    sources: [
                        { id: "TRAN808-00353", set: 33, question: 79 },
                        { id: "TRAN808-00358", set: 33, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: stripping is moisture-related, but susceptibility is a system property.</strong> TRAN808-00357's moisture-damage key is sound. Its claim of universally greatest susceptibility for a rock type is not established; binder chemistry, aggregate surface, coating and water exposure affect compatibility. An anti-stripping additive requires demonstrated effectiveness and does not replace drainage repair.</p>",
                    sources: [{ id: "TRAN808-00357", set: 33, question: 83 }]
                },
                {
                    html: "<p><strong>Bank check: binder bleeding is not explained by subgrade pressure.</strong> TRAN808-00359's keyed combined phrase is defective. Excess binder, insufficient void space, temperature and traffic action explain surface binder enrichment more directly. Blotting can be temporary relief, not a universal permanent cure, and binder bleeding must be distinguished from water bleeding/pumping.</p>",
                    sources: [{ id: "TRAN808-00359", set: 1, question: 90 }]
                },
                {
                    html: "<p><strong>Bank check: pumping is explicitly recorded on asphalt surfaces.</strong> TRAN808-00356's categorical exclusion conflicts with <strong>FHWA-HRT-13-092, Fifth Revised Edition, May 2014, Chapter 1, distress 15</strong>: water and fines can be pumped from support layers through asphalt cracks. TRAN808-00326's conventional ruts-versus-slab-distress distinction does not make its explanation's pumping/shrinkage exclusivity correct. Investigate water, erosion and support in either pavement system.</p>",
                    sources: [
                        { id: "TRAN808-00326", set: 30, question: 87 },
                        { id: "TRAN808-00356", set: 33, question: 82 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: crazing describes a shallow fine network.</strong> TRAN808-00021 lacks a material and pattern qualification. Crazing is not the name of every isolated hairline crack, and shallow surface cracks do not automatically admit water through the full pavement or prove loss of slab strength. Distinguish surface condition from structural cracking before selecting repair.</p>",
                    sources: [{ id: "TRAN808-00021", set: 3, question: 89 }]
                },
                {
                    html: "<p><strong>Bank check: a deflection instrument is not a thickness gauge.</strong> TRAN808-00334 correctly associates the Benkelman beam with deflection-based overlay evaluation/design. The useful response requires the specified procedure, calibration and applicable temperature/seasonal corrections, followed by a design method and traffic/condition assessment. The question supplies no data from which a numerical overlay can be calculated.</p>",
                    sources: [{ id: "TRAN808-00334", set: 31, question: 83 }]
                }
            ],
            references: [
                {
                    title: "Department of Roads — Standard Specifications for Road and Bridge Works 2073, with Third Amendment 2082, effective 1 Shrawan 2082; government-hosted text, especially §§1003, 1201–1208, 1301–1308, 1313, 2901–2903 and 3202",
                    url: "https://giwmscdnone.gov.np/media/files/Standard%20Specifications%20For%20Road%20And%20Bridge%20Works_houcxlr.pdf"
                },
                {
                    title: "FHWA-NHI-05-037 — Geotechnical Aspects of Pavements, §7.6: soil improvement, cement/lime/bituminous stabilization and compatibility; foreign technical guidance, not Nepal acceptance limits",
                    url: "https://www.fhwa.dot.gov/engineering/geotech/pubs/05037/07d.cfm"
                },
                {
                    title: "FHWA-NHI-05-037 — Chapter 8: construction, compaction equipment Table 8-4, field verification, moisture-density references and drainage continuity; foreign technical guidance",
                    url: "https://www.fhwa.dot.gov/engineering/geotech/pubs/05037/08.cfm"
                },
                {
                    title: "FHWA-HRT-13-092 — LTPP Distress Identification Manual, Fifth Revised Edition, May 2014, Chapter 1: asphalt fatigue, block cracks, potholes, rutting, shoving, ravelling and water bleeding/pumping; survey terminology, not Nepal acceptance thresholds",
                    url: "https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/ltpp/13092/001.cfm"
                },
                {
                    title: "FHWA-HRT-13-092 — LTPP Distress Identification Manual, Fifth Revised Edition, May 2014, Chapter 2: jointed concrete cracking, map cracking, spalling, faulting and pumping; survey terminology",
                    url: "https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/ltpp/13092/002.cfm"
                },
                {
                    title: "FHWA-SA-98-042 — archived Pavement Recycling Guidelines, Chapter 3: condition assessment and selection of overlay, recycling, reclamation or reconstruction; not a Nepal design or approval provision",
                    url: "https://www.fhwa.dot.gov/pavement/recycling/98042/03.cfm"
                }
            ]
        }
    });
})();