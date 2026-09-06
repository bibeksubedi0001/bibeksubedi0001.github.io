(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0902: {
            code: "ACiE0902",
            questionCount: 73,
            blocks: [
                {
                    id: "geometric-design-controls",
                    title: "Start with a design basis, not an isolated minimum dimension",
                    html: "<p>Geometric design coordinates the road's plan, longitudinal profile and cross-section so that its intended traffic can move with adequate visibility, space and manageable changes of direction and grade. The controls include road function, traffic volume and composition, terrain, design vehicles, human perception, pedestrians and cyclists, climate, drainage, land constraints, construction cost and maintenance access.</p>" +
                        "<p><strong>Design speed</strong> is the selected basis for coordinating geometric elements. Operating speed describes actual traffic behaviour; a posted limit is a regulatory control. These three values are not automatically equal. A curve calculation at a design speed is not advice that a particular driver can travel at that speed in rain, darkness or traffic.</p>" +
                        "<p>Speed strongly affects visibility and curvature: reaction travel grows in proportion to speed, braking distance approximately with its square, and a constant-speed transition's jerk demand with its cube. Vehicle dimensions, however, independently govern swept paths and clearance. A high-capacity road can still have an inadequate sight line or a poorly drained low point.</p>" +
                        "<p>Settlement is not a cross-sectional geometric element, but <strong>it is considered in highway design</strong>. Differential settlement changes the profile, drainage and ride quality. Geometry therefore needs geotechnical and structural input; separating disciplines for an elementary question does not remove that responsibility. The notes use identified editions and explicit models, not a claim of complete code compliance or construction approval.</p>",
                    sources: [
                        { id: "TRAN808-00010", set: 2, question: 89 },
                        { id: "TRAN808-00179", set: 17, question: 88 },
                        { id: "TRAN808-00187", set: 18, question: 86 }
                    ]
                },
                {
                    id: "nrs-speed-and-terrain-basis",
                    title: "Read Nepal's road class and terrain together",
                    html: "<p><strong>Nepal Road Standard 2070, July 2013</strong>, is the identified NRS edition used here. Its stated strategic-road rural scope must not be confused with separate urban or rural-road documents. An administrative name such as feeder road does not uniquely fix its technical class, and a technical class does not describe the terrain.</p>" +
                        "<p>Terrain classification uses the natural ground's cross-slope across the alignment: plain <strong>0–10%</strong>, rolling <strong>over 10–25%</strong>, mountainous <strong>over 25–60%</strong>, and steep <strong>over 60%</strong>. Thus exactly 10% is plain in this table. This slope is neither pavement camber nor the road's longitudinal gradient; percentages must not be read as degrees.</p>" +
                        "<table><thead><tr><th scope='col'>NRS class</th><th scope='col'>Plain / rolling, km/h</th><th scope='col'>Mountainous / steep, km/h</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>I</th><td>120 / 100</td><td>80 / 60</td></tr>" +
                        "<tr><th scope='row'>II</th><td>100 / 80</td><td>60 / 40</td></tr>" +
                        "<tr><th scope='row'>III</th><td>80 / 60</td><td>40 / 30</td></tr>" +
                        "<tr><th scope='row'>IV</th><td>60 / 40</td><td>30 / 20</td></tr></tbody></table>" +
                        "<p>These are <strong>Table 7-1 design speeds</strong>; Class III in rolling terrain is 60 km/h. Use the principal table rather than the annex summary's apparent extra zeros. The edition's twenty-year traffic-capacity perspective runs after completion and is not automatically the pavement design life. Its difficult-terrain permission to reduce tabulated speed to 75% is also distinct from the legacy 75%-speed superelevation procedure.</p>",
                    sources: [{ id: "TRAN808-00181", set: 18, question: 80 }]
                },
                {
                    id: "design-vehicle-envelope",
                    title: "Vehicle width, height, overall length and wheelbase have different jobs",
                    html: "<p>NRS 2013 §4.1 gives the maximum vehicle dimensions considered in that design basis as <strong>2.50 m width, 4.75 m height and 18.00 m overall length</strong>. These are edition-specific geometric inputs, not a verification of current vehicle law or a complete description of every vehicle using a road.</p>" +
                        "<table><thead><tr><th scope='col'>Dimension or property</th><th scope='col'>Design consequence</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Body width</th><td>Lane width and lateral clearances must accommodate the vehicle plus operating clearance.</td></tr>" +
                        "<tr><th scope='row'>Overall height</th><td>Structures, cliffs and tunnels require a larger usable clearance envelope, including relevant allowances.</td></tr>" +
                        "<tr><th scope='row'>Wheelbase and articulation</th><td>Axle paths, off-tracking and turning behaviour depend on the actual vehicle configuration.</td></tr>" +
                        "<tr><th scope='row'>Overall length and overhangs</th><td>Passing calculations, storage space and the swept body envelope require more than the axle path alone.</td></tr></tbody></table>" +
                        "<p><strong>18 m is not a bus wheelbase</strong>, nor does the NRS passage identify it as a standard single-unit bus or truck. Substituting overall length into a wheelbase-squared widening formula can greatly exaggerate its mechanical component. Conversely, an axle-path calculation can miss body overhang on the outside of a bend.</p>" +
                        "<p>Shoulder width is primarily selected for its road-class and service functions rather than calculated directly from vehicle length. Nevertheless, a stopped-vehicle facility must accommodate the actual vehicle and working space. The bank's elementary distinction must not be expanded into a claim that vehicle geometry never matters outside the carriageway.</p>",
                    sources: [
                        { id: "TRAN808-00104", set: 11, question: 83 },
                        { id: "TRAN808-00122", set: 12, question: 88 },
                        { id: "TRAN808-00123", set: 12, question: 89 },
                        { id: "TRAN808-00124", set: 13, question: 80 }
                    ]
                },
                {
                    id: "cross-section-row-and-clearances",
                    title: "Separate carriageway, formation, right of way and clear space",
                    html: "<p>A cross-section cuts across the local road alignment. It shows lanes, crossfall or superelevation, shoulders, medians, kerbs, footpaths, drains and adjacent slopes. The longitudinal gradient belongs to the profile. Both views must use compatible levels, especially where a crossfall changes direction.</p>" +
                        "<p>NRS 2013 Table 11-1 gives <strong>3.75 m for a single-lane carriageway</strong>, with its stated difficult-terrain reduction to 3.0 m, <strong>5.5 m intermediate carriageway</strong>, and <strong>3.5 m per lane for multilane pavement</strong>. Its capacity table identifies a 7.0 m double-lane carriageway. An intermediate carriageway should not be silently treated as two full standard-width lanes.</p>" +
                        "<p><strong>Formation width</strong> in §11.4 is the total of carriageways, medians and shoulders. The full land requirement can additionally accommodate drainage, cut/fill slopes, utilities, maintenance and future works. Table 11-6 gives total ROW of 50 m for highways, <strong>30 m for feeder roads</strong> and 20 m for district roads. These are total widths, not widths on each side. Actual acquired boundaries and building restrictions require the road-specific legal records.</p>" +
                        "<p>Section 11.9.3 requires <strong>5.0 m vertical clear space measured from the road crown over the whole roadway width</strong>. It is a minimum unobstructed envelope, not a maximum clearance under an overhanging cliff. Vehicle height and clearance are different quantities. Lateral clearance, electrical crossings, resurfacing and the actual superelevated envelope also need their applicable checks; ROW alone proves none of them.</p>",
                    sources: [
                        { id: "TRAN808-00057", set: 7, question: 81 },
                        { id: "TRAN808-00026", set: 4, question: 83 },
                        { id: "TRAN808-00027", set: 4, question: 84 }
                    ]
                },
                {
                    id: "shoulders-and-kerb-functions",
                    title: "Edges must support traffic, pavement and drainage without creating hazards",
                    html: "<p>Shoulders provide lateral pavement support, recovery or stopping space where adequately sized, and a route for surface drainage. Their strength, crossfall, edge level and continuity matter as well as width. A narrow shoulder is not a complete breakdown bay, and a shoulder is not automatically a pedestrian facility.</p>" +
                        "<p>NRS 2013 §11.2 sets an absolute floor of <strong>0.75 m on either side</strong>. Table 11-2 gives Class I, II, III and IV shoulder widths of <strong>3.75, 2.5, 2.0 and 1.5 m</strong> respectively, with qualified reductions in mountainous and steep terrain but not below the floor. Copying 0.75 m onto every class cross-section loses this distinction. Treatment near the pavement edge and a suitable outlet help prevent shoulder water entering pavement layers.</p>" +
                        "<p>Kerbs delineate edges, can guide gutter flow and can restrain pavement materials. A mountable kerb has a sloping face; a barrier-type kerb discourages encroachment. The approximately <strong>100 mm low kerb</strong> is a legacy teaching dimension, not a universal profile. NRS §13.6 describes differing shapes and a 10–20 cm height range and cautions against vertical kerbs along high-speed roads.</p>" +
                        "<p>At interlocking concrete-block pavement, the important structural function is <strong>lateral confinement</strong>: the edge restraint opposes outward movement that would open joints and weaken interlock. Its foundation and continuity must resist that action. A kerb is not a crash barrier, and neither its presence nor a median replaces assessment of pedestrian crossings, cycle routes, visibility, inlet openings and roadside recovery space.</p>",
                    sources: [
                        { id: "TRAN808-00182", set: 18, question: 81 },
                        { id: "TRAN808-00183", set: 18, question: 82 },
                        { id: "TRAN808-00277", set: 26, question: 84 }
                    ]
                },
                {
                    id: "camber-crown-and-drainage",
                    title: "Camber sheds water; crown rise uses the width actually drained",
                    html: "<p>Camber is the transverse fall that sends surface water towards an edge and a receiving drainage path. Its purpose is to <strong>shed water, not retain it on the pavement</strong>. Surface type, rainfall, texture, crossfall length and maintenance condition affect drainage performance. Excessive crossfall also affects vehicle comfort and steering; more is not always better.</p>" +
                        "<table><thead><tr><th scope='col'>Straight-road surface</th><th scope='col'>NRS 2013 Table 11-3 camber</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Cement concrete</th><td>1.5–2.0%</td></tr>" +
                        "<tr><th scope='row'>Bituminous</th><td>2.5%</td></tr>" +
                        "<tr><th scope='row'>Gravel</th><td>4.0%</td></tr>" +
                        "<tr><th scope='row'>Earthen</th><td>5.0%</td></tr></tbody></table>" +
                        "<p>The same section calls for straight-road shoulders to have crossfall <strong>0.5 percentage point greater</strong> than the carriageway. That is not multiplication by 1.005. Curves and crossfall transitions require their own treatment. The NRS bituminous entry does not authenticate the bank's unspecified IRC heavy-rainfall attribution.</p>" +
                        "<p>The <strong>crown</strong> is the high line of a normally crowned surface. Straight, parabolic and combined crossfall shapes are possible; a one-way superelevated surface does not retain an ordinary high central crown. For symmetric straight crossfalls of magnitude q across total width B, crown rise above either edge is <strong>h = qB/2</strong>. The bank's B = 7 m and q = 1/50 give h = 3.5/50 = <strong>0.070 m = 70 mm</strong>. The 2% given in this calculation is not replaced by the separate 2.5% table entry, and a parabolic crossfall needs its defined slope convention.</p>",
                    sources: [
                        { id: "TRAN808-00094", set: 10, question: 84 },
                        { id: "TRAN808-00098", set: 10, question: 88 },
                        { id: "TRAN808-00178", set: 17, question: 87 },
                        { id: "TRAN808-00190", set: 18, question: 89 },
                        { id: "TRAN808-00192", set: 19, question: 79 }
                    ]
                },
                {
                    id: "sight-distance-types",
                    title: "Available visibility and required manoeuvre distance are different",
                    html: "<p><strong>Available sight distance</strong> is the road length visible from a specified observation position and eye height to a specified target. Required distance comes from the manoeuvre and design assumptions. Seeing a tall vehicle does not prove visibility of a low stationary object. A plan drawing alone cannot establish visibility over a crest or beneath an obstruction.</p>" +
                        "<table><thead><tr><th scope='col'>Distance</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>SSD</th><td>Perception–reaction travel plus braking distance to stop before a stationary obstruction under the stated model.</td></tr>" +
                        "<tr><th scope='row'>OSD or passing sight distance</th><td>Visibility required for the specified overtaking model, including the relevant opposing movement.</td></tr>" +
                        "<tr><th scope='row'>ISD</th><td>The conventional intermediate sight distance, defined as twice SSD.</td></tr>" +
                        "<tr><th scope='row'>Headlight sight distance</th><td>Usable night visibility under the adopted lamp height, beam geometry and road alignment.</td></tr></tbody></table>" +
                        "<p><strong>ISD = 2 SSD</strong> is a definition, not permission to overtake. If two approaching vehicles must stop in a shared path, their initial separation must accommodate the sum of their individually applicable stopping distances. Unequal speeds, grades or decelerations need not give two equal SSDs.</p>" +
                        "<p>NRS 2013 §8.3 calls for at least SSD visibility on roads with two or more lanes and twice stopping distance on single-lane roads, while encouraging more visibility. Its ordinary eye/object assumptions are 1.2 m and 0.15 m. Required visibility must be checked continuously through combinations of plan and profile, not only at tangent points.</p>",
                    sources: [
                        { id: "TRAN808-00009", set: 2, question: 88 },
                        { id: "TRAN808-00361", set: 33, question: 86 },
                        { id: "TRAN808-00007", set: 2, question: 86 },
                        { id: "TRAN808-00197", set: 19, question: 83 }
                    ]
                },
                {
                    id: "stopping-distance-energy-balance",
                    title: "Derive stopping distance with the correct grade sign and units",
                    html: "<p>Let V be speed in km/h, <strong>v = V/3.6</strong> in m/s, t perception–reaction time in seconds, and f<sub>L</sub> the dimensionless effective longitudinal friction coefficient. Travel before braking is <strong>d<sub>r</sub> = vt = Vt/3.6</strong>. PIEV names perception, intellection, emotion and volition; it explains this reaction component, not the whole stopping distance.</p>" +
                        "<p>On level ground, work against the assumed constant braking resistance gives <strong>f<sub>L</sub>mgd<sub>b</sub> = mv<sup>2</sup>/2</strong>, hence <strong>d<sub>b</sub> = v<sup>2</sup>/(2gf<sub>L</sub>)</strong>. For small longitudinal grades, gravity adds resistance uphill and reduces it downhill. With G the positive grade magnitude as a fraction:</p>" +
                        "<p><strong>SSD = Vt/3.6 + V<sup>2</sup>/[254(f<sub>L</sub> ± G)]</strong>. Use <strong>plus uphill, minus downhill</strong>; 4% means G = 0.04, not 4. The conventional 254 rounds 2 × 3.6<sup>2</sup>g, which is 254.2752 for g = 9.81 m/s<sup>2</sup>. The reaction term is kept as Vt/3.6; 0.278Vt would be a separately rounded equivalent.</p>" +
                        "<p>NRS §24.2.1 adopts t = <strong>2.5 s</strong>. This is a design assumption, not every driver's measured response. The bank explanation's V = 50 km/h illustration gives reaction travel <strong>34.7222 m</strong>, before adding braking. Tyre condition, wetness, brake capability and fade matter; friction does not cause instantaneous stopping. Do not add a second brake-efficiency reduction if it is already included in f<sub>L</sub>. If f<sub>L</sub> − G is nonpositive, this simplified downhill model gives no finite stopping distance.</p>",
                    sources: [
                        { id: "TRAN808-00029", set: 4, question: 86 },
                        { id: "TRAN808-00193", set: 19, question: 80 },
                        { id: "TRAN808-00191", set: 18, question: 90 },
                        { id: "TRAN808-00189", set: 18, question: 88 }
                    ]
                },
                {
                    id: "ssd-on-grades-example",
                    title: "Graded SSD worked example — syllabus extension",
                    html: "<p><strong>Syllabus extension; all numerical inputs here are hypothetical, not recovered bank givens.</strong> Assume V = 72 km/h, t = 2.5 s, f<sub>L</sub> = 0.35 and grade magnitude G = 0.04. Use the conventional 254 braking denominator consistently. The selected friction is an illustrative input, not a claimed NRS table value at 72 km/h.</p>" +
                        "<p>Reaction travel is exactly <strong>72 × 2.5/3.6 = 50 m</strong>. The common braking numerator is V<sup>2</sup> = 5184. Changing grade changes only the effective braking resistance in this simplified comparison.</p>" +
                        "<table><thead><tr><th scope='col'>Profile</th><th scope='col'>Braking distance, m</th><th scope='col'>SSD, m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Level</th><td>5184/88.90 = 58.3127</td><td>108.3127</td></tr>" +
                        "<tr><th scope='row'>4% uphill</th><td>5184/99.06 = 52.3319</td><td>102.3319</td></tr>" +
                        "<tr><th scope='row'>4% downhill</th><td>5184/78.74 = 65.8374</td><td>115.8374</td></tr></tbody></table>" +
                        "<p>The order is physically sensible: uphill needs less distance, downhill more. Using 0.278 for the reaction calculation while reporting the exact-conversion result would introduce an avoidable inconsistency. Rounding is performed only after the displayed calculation.</p>" +
                        "<p>These results assume constant speed during reaction, constant effective deceleration during braking and the stated small-grade model. A real design must use its prescribed parameters and applicable minimum sight-distance requirements, examine each travel direction and check visibility. A computed distance is neither a field measurement nor real-time following or stopping advice.</p>",
                    sources: []
                },
                {
                    id: "overtaking-assumptions-and-zones",
                    title: "Overtaking spacing, reaction time and zone length need named conventions",
                    html: "<p>Overtaking involves gaining position relative to the slower vehicle while also accounting for opposing traffic. Vehicle lengths, initial and final clearances, acceleration and the observation time are essential. A memorised spacing relation cannot replace these definitions or establish whether a real manoeuvre is safe.</p>" +
                        "<p>The bank uses the legacy empirical spacing relation <strong>s = 0.2V<sub>B</sub> + 6</strong>, with V<sub>B</sub> numerically in km/h and s in metres. For its V<sub>B</sub> = 50 km/h, <strong>s = 10 + 6 = 16 m</strong>, not the stored 14 m. The coefficient encodes a unit convention. The IIT teaching relation 0.7v<sub>B</sub> + 6, with v<sub>B</sub> in m/s, gives 15.7222 m at that speed, also approximately 16 m; it does not justify 14 m.</p>" +
                        "<p>The separate bank item assumes a <strong>2 s legacy OSD reaction interval</strong>. Retain it only within its specified model; do not substitute it for NRS's 2.5 s SSD assumption or claim that it has been verified as the basis of NRS's overtaking table.</p>" +
                        "<p>The IIT overtaking-zone discussion distinguishes <strong>3 OSD minimum</strong> from <strong>5 OSD desirable</strong>. NRS 2013 §8.4 separately specifies at least 3 times overtaking distance for zones on roads with two or more lanes and at least 2 times for single-lane passing zones, with a minimum two-lane width. The bank's use of 3 OSD as the desirable textbook value conflates these categories. Zone geometry, continuous visibility, markings, restrictions and traffic conditions remain separate design checks.</p>",
                    sources: [
                        { id: "TRAN808-00194", set: 19, question: 81 },
                        { id: "TRAN808-00195", set: 19, question: 82 },
                        { id: "TRAN808-00196", set: 1, question: 84 }
                    ]
                },
                {
                    id: "overtaking-relative-motion-example",
                    title: "Complete relative-motion example — syllabus extension",
                    html: "<p><strong>Syllabus extension; the following complete dataset is hypothetical, not an assigned question or an NRS overtaking calculation.</strong> Set time zero at the start of the modelled committed manoeuvre on a straight road. Vehicle A starts at speed u<sub>A</sub>, vehicle B maintains v<sub>B</sub>, and A has constant acceleration a. Initial gap g<sub>i</sub> is from A's front to B's rear; final gap g<sub>f</sub> is from B's front to A's rear.</p>" +
                        "<p>The required relative gain is <strong>D = g<sub>i</sub> + ℓ<sub>B</sub> + ℓ<sub>A</sub> + g<sub>f</sub></strong>. Therefore <strong>(u<sub>A</sub> − v<sub>B</sub>)T + aT<sup>2</sup>/2 = D</strong>. For positive a, the positive root is <strong>T = [√((u<sub>A</sub> − v<sub>B</sub>)<sup>2</sup> + 2aD) − (u<sub>A</sub> − v<sub>B</sub>)]/a</strong>. All speeds here are m/s, a is m/s<sup>2</sup>, lengths are metres and T is seconds.</p>" +
                        "<p>Assume u<sub>A</sub> = v<sub>B</sub> = 10 m/s, a = 1 m/s<sup>2</sup>, ℓ<sub>A</sub> = 4 m, ℓ<sub>B</sub> = 6 m, g<sub>i</sub> = 10 m and g<sub>f</sub> = 12 m. Then D = <strong>32 m</strong>, T = √64 = <strong>8 s</strong>, and A travels 10 × 8 + 8<sup>2</sup>/2 = <strong>112 m</strong>. Its final speed is 18 m/s.</p>" +
                        "<p>Assume an opposing vehicle C maintains 20 m/s and an additional front-to-front separation b = 20 m remains at completion. At time zero the required modelled front separation is <strong>112 + 20 × 8 + 20 = 292 m</strong>. If visibility is instead measured 2 s earlier, while A and B both maintain 10 m/s, include <strong>both</strong> A's 20 m and C's 40 m of earlier travel: <strong>352 m</strong>. Counting opposing travel for only 8 s but measuring from that earlier instant would omit 40 m.</p>" +
                        "<p>This idealised longitudinal model does not validate lane-change duration, variable acceleration, gradients, visibility, legal restrictions or an actual traffic gap. Its purpose is to expose missing lengths and inconsistent time origins, not provide real-time overtaking advice.</p>",
                    sources: []
                },
                {
                    id: "banked-curve-equilibrium",
                    title: "Superelevation and lateral friction share the turning demand",
                    html: "<p>For steady motion of an idealised point mass on a banked circular path, let θ be the bank angle, <strong>e = tan θ</strong>, R the path radius and f<sub>T</sub> signed lateral friction divided by normal reaction F<sub>N</sub>. Take f<sub>T</sub> positive when friction acts <strong>inward and down the bank</strong>, opposing a tendency to slide outward.</p>" +
                        "<p>Horizontal and vertical force balances are <strong>F<sub>N</sub>(sin θ + f<sub>T</sub> cos θ) = mv<sup>2</sup>/R</strong> and <strong>F<sub>N</sub>(cos θ − f<sub>T</sub> sin θ) = mg</strong>. Dividing gives the exact relation within this model: <strong>v<sup>2</sup>/(gR) = (e + f<sub>T</sub>)/(1 − ef<sub>T</sub>)</strong>. A low-speed tendency to slide inward reverses the required friction sign; friction is not always an inward contribution.</p>" +
                        "<p>Neglecting the product ef<sub>T</sub> gives the usual approximation <strong>e + f<sub>T</sub> ≈ V<sup>2</sup>/(127R)</strong>, for V in km/h and R in metres. Here 127 rounds 3.6<sup>2</sup>g. Hence <strong>R<sub>min</sub> ≈ V<sup>2</sup>/[127(e<sub>allow</sub> + f<sub>allow</sub>)]</strong> only under the stated limiting assumptions. Parentheses around the whole denominator are essential.</p>" +
                        "<p>Superelevation is vertical rise divided by <strong>horizontal projected width</strong>; a width measured along the sloping surface is not the same exact geometry. Zero friction gives e ≈ V<sup>2</sup>/(127R), but that is not a universal hill-road prescription. Adverse camber is a negative e. Rollover, combined braking and cornering, swept paths, passenger comfort and sight clearance require additional checks beyond this lateral equilibrium.</p>",
                    sources: [
                        { id: "TRAN808-00017", set: 3, question: 85 },
                        { id: "TRAN808-00199", set: 19, question: 85 },
                        { id: "TRAN808-00202", set: 19, question: 88 }
                    ]
                },
                {
                    id: "superelevation-protocols-and-bank-values",
                    title: "Keep the selected superelevation procedure separate from its arithmetic",
                    html: "<p>NRS 2013 §11.6 uses <strong>e = V<sup>2</sup>/(127R) − f</strong>, with a speed-dependent lateral-friction table. It limits superelevation to <strong>7% in plain/rolling terrain and snowbound areas</strong>, and <strong>10% in non-snowbound hill areas</strong>. These are not a claim that every hill balances full-speed centrifugal demand by bank alone. The minimum crossfall and the actual application procedure must also be considered.</p>" +
                        "<p>A distinct legacy procedure neglects friction while balancing demand at 75% of design speed: <strong>e = (0.75V)<sup>2</sup>/(127R) ≈ V<sup>2</sup>/(225R)</strong>. Using 127 literally gives a denominator about 225.78; 225 is conventional rounding. After applying a procedure's permitted e limit, check the remaining full-speed friction demand. This procedure is neither the NRS terrain-speed reduction provision nor a general plains-versus-hills rule.</p>" +
                        "<p><strong>Bank speed calculation:</strong> R = 100 m, e = 1/15 and f = 0.15 give V<sup>2</sup> = 127 × 100 × (1/15 + 0.15) = <strong>2751.6667</strong>. Thus V ≈ <strong>52.4563 km/h</strong> under the approximate equilibrium. The 52.44 option is the intended nearby value, with a small numerical discrepancy, not a different exact result or an all-weather safe-speed determination.</p>" +
                        "<p><strong>Bank superelevation calculation:</strong> V = 60 km/h, R = 150 m and the supplied f = 0.15 give e = 3600/19050 − 0.15 = <strong>0.0389764</strong>, approximately 3.898%. The option 0.039 retains more precision than 0.04. Use the question's supplied friction rather than silently substituting the NRS table value. The separate 75%-speed expression would give 0.106667 before an applicable cap; that is a different calculation, not a correction to this one.</p>",
                    sources: [
                        { id: "TRAN808-00025", set: 4, question: 82 },
                        { id: "TRAN808-00200", set: 19, question: 86 }
                    ]
                },
                {
                    id: "superelevation-runoff-and-edge-levels",
                    title: "The rotation axis determines edge movement and runoff length",
                    html: "<p>Superelevation is obtained by changing transverse levels gradually, normally coordinated with the transition curve. Rotation can be about the centreline, an inner edge or another selected line. The definition does not require one edge to remain fixed. Camber removal and development of the final bank must be considered as actual level changes.</p>" +
                        "<p>Across horizontal projected width B, the outer-to-inner level difference is <strong>Δz = eB</strong>. The bank's e = 0.07 and B = 7 m therefore give <strong>0.49 m</strong>. With centreline rotation of the final plane, the two edges are 0.245 m above and below that line; these final offsets are not necessarily their movements from the original crowned surface.</p>" +
                        "<p>If p is the permitted relative longitudinal edge gradient, a runoff requirement is <strong>L<sub>runoff</sub> ≥ |Δh<sub>edge</sub>|/p</strong>. NRS §11.6 gives relative outer-edge rates no steeper than 1 in 150 in plain/rolling terrain and 1 in 60 in mountainous/steep terrain. These are relative to the through grade, not replacements for the road's longitudinal gradient.</p>" +
                        "<p><em>Added hypothetical runoff illustration, not extra bank givens:</em> take a 7 m symmetric pavement initially crowned at q = 0.02, centreline rotation to e = 0.07, and p = 1/150. The outer edge moves from −qB/2 to +eB/2, so Δh<sub>edge</sub> = (0.02 + 0.07) × 3.5 = <strong>0.315 m</strong>. The corresponding bound is <strong>47.25 m</strong>, not 0.49 × 150 by default.</p>" +
                        "<p>That one edge-level check does not select the final transition. Check all applicable edge gradients, widening, comfort and minimum-length requirements. Near a zero crossfall, runoff can follow the longitudinal grade or pond at a coincident low point; inlet placement and surface levels must be reviewed together.</p>",
                    sources: [
                        { id: "TRAN808-00188", set: 18, question: 87 },
                        { id: "TRAN808-00201", set: 19, question: 87 }
                    ]
                },
                {
                    id: "circular-curve-geometry",
                    title: "Circular-curve dimensions follow from the stated angle convention",
                    html: "<p>A simple circular curve has one radius. A compound curve joins same-direction arcs of differing radii; a reverse curve changes turning direction. Neither label removes the need for appropriate curvature and crossfall transitions. For a simple circular curve between tangents, let R be radius and Δ the total change of direction.</p>" +
                        "<table><thead><tr><th scope='col'>Element</th><th scope='col'>Expression</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Arc length</th><td>L<sub>c</sub> = RΔ, with Δ in radians</td></tr>" +
                        "<tr><th scope='row'>Tangent length</th><td>T = R tan(Δ/2)</td></tr>" +
                        "<tr><th scope='row'>Long chord</th><td>C<sub>h</sub> = 2R sin(Δ/2)</td></tr>" +
                        "<tr><th scope='row'>External distance</th><td>E = R[sec(Δ/2) − 1]</td></tr>" +
                        "<tr><th scope='row'>Mid-ordinate</th><td>M = R[1 − cos(Δ/2)]</td></tr></tbody></table>" +
                        "<p>All lengths use the same units. For an angle stated in degrees, convert Δ<sub>rad</sub> = πΔ<sub>deg</sub>/180 for the arc expression. <em>Added hypothetical example:</em> R = 300 m and Δ = 60° give L<sub>c</sub> = 100π ≈ <strong>314.159 m</strong>, T ≈ <strong>173.205 m</strong> and long chord <strong>300 m</strong>. The arc and chord are not interchangeable chainage lengths.</p>" +
                        "<p>Under the bank's <strong>30 m arc</strong> degree-of-curve convention, D<sub>30</sub> = 180 × 30/(πR) ≈ 1718.873/R degrees. A 30 m <em>chord</em> definition instead gives 2 arcsin[30/(2R)], expressed in degrees. A 100 ft arc is 30.48 m, not exactly 30 m. Always identify the convention before using a radius–degree mnemonic.</p>",
                    sources: [{ id: "TRAN808-00198", set: 19, question: 84 }]
                },
                {
                    id: "clothoid-curvature-and-purpose",
                    title: "A clothoid changes curvature linearly with distance",
                    html: "<p>A transition removes the sudden curvature jump between a tangent and a circle, or provides a designed change between different curvatures. A circular curve is itself a horizontal curve, so the bank's phrase between horizontal and circular curves does not correctly identify the two endpoints of the usual transition.</p>" +
                        "<p>For a tangent-to-circle clothoid of length L<sub>s</sub> ending at radius R, let s be distance along the spiral from its start. Its curvature is <strong>κ(s) = s/(RL<sub>s</sub>)</strong>, increasing from zero to 1/R. The spiral parameter satisfies <strong>A<sub>c</sub><sup>2</sup> = RL<sub>s</sub></strong>. Integrating curvature gives the tangent-direction change <strong>φ(s) = s<sup>2</sup>/(2RL<sub>s</sub>)</strong> in radians.</p>" +
                        "<p>At <strong>constant speed v</strong>, lateral acceleration is v<sup>2</sup>κ and its rate of change is <strong>J = v<sup>3</sup>/(RL<sub>s</sub>)</strong>. Linear curvature is a geometric property at any speed; constant jerk follows only with the constant-speed assumption. With tangential acceleration a<sub>t</sub>, the derivative additionally contains <strong>2va<sub>t</sub>κ</strong>. Banking and vehicle dynamics add further distinctions between path acceleration and perceived lateral loading.</p>" +
                        "<p>NRS §9.2 identifies the clothoid or Euler spiral. Cubic-parabola setting-out approximations should not be called exact clothoids at arbitrary deflection. Superelevation and widening can develop along the transition, but providing a spiral name alone does not establish adequate length, drainage or swept-path clearance.</p>",
                    sources: [
                        { id: "TRAN808-00019", set: 3, question: 87 },
                        { id: "TRAN808-00185", set: 18, question: 84 },
                        { id: "TRAN808-00186", set: 18, question: 85 }
                    ]
                },
                {
                    id: "transition-length-controls-and-fit",
                    title: "Adopt the controlling transition length, then check whether it fits",
                    html: "<p>For a chosen allowable constant-speed jerk C in m/s<sup>3</sup>, <strong>L<sub>J</sub> = v<sup>3</sup>/(CR) = V<sup>3</sup>/(46.656CR)</strong>. NRS §24.4 uses the rounded conversion 47. Its empirical relation <strong>C = 80/(75 + V)</strong> uses V numerically in km/h and prints the strict condition <strong>0.5 &lt; C &lt; 0.8</strong>.</p>" +
                        "<p>At the bank's V = 85 km/h, the expression gives <strong>C = 80/160 = 0.5 m/s<sup>3</sup></strong>. This lies exactly on, not inside, the printed lower boundary. The keyed 0.6 is not its arithmetic result. An intended inclusive limit would require interpretation or clarification; do not silently rewrite the strict inequality.</p>" +
                        "<p>The adopted length must satisfy <strong>L<sub>s</sub> ≥ max(L<sub>J</sub>, L<sub>runoff</sub>, L<sub>widening</sub>, L<sub>minimum</sub>)</strong>. For equal spirals at both ends, each turns through L<sub>s</sub>/(2R), leaving circular length <strong>L<sub>c</sub> = RΔ − L<sub>s</sub></strong>. Consequently <strong>L<sub>s</sub> ≤ RΔ</strong>, with Δ in radians, is a geometric fit requirement. Failure to fit calls for a revised layout or design basis, not omission of a controlling requirement.</p>" +
                        "<p><em>Added hypothetical comparison, not NRS table lengths or bank givens:</em> V = 54 km/h gives v = 15 m/s. With R = 120 m and an explicitly chosen C = 0.6, L<sub>J</sub> = 3375/72 = 46.875 m. Assume runoff, widening and minimum requirements of 40, 30 and 50 m; the controlling length is <strong>50 m</strong>. At Δ = 0.5 rad, RΔ = 60 m and L<sub>c</sub> = 10 m. At Δ = 0.3 rad, only 36 m is available, so that same transition does not fit.</p>",
                    sources: [{ id: "TRAN808-00205", set: 20, question: 81 }]
                },
                {
                    id: "transition-ordinate-versus-shift",
                    title: "The spiral-end ordinate is four times the leading-order shift",
                    html: "<p>Use coordinates with origin at the tangent-to-spiral point and the x-axis along the original tangent. For small spiral deflections, integrating the approximate tangent angle gives <strong>y(s) ≈ s<sup>3</sup>/(6RL<sub>s</sub>)</strong>, while x is approximately s. At the spiral end, <strong>y<sub>end</sub> ≈ L<sub>s</sub><sup>2</sup>/(6R)</strong>.</p>" +
                        "<p>The <strong>shift</strong> is a different geometric quantity: the inward displacement needed to accommodate the circular arc with the transition. Its leading-order expression is <strong>p<sub>s</sub> ≈ L<sub>s</sub><sup>2</sup>/(24R)</strong>. L<sub>s</sub> means the length of one spiral, not the sum of entry and exit spirals. Both expressions have units of length and are approximations, not exact large-angle clothoid coordinates.</p>" +
                        "<p>For the bank's <strong>L<sub>s</sub> = 90 m and R = 500 m</strong>, the end ordinate is 90<sup>2</sup>/(6 × 500) = 8100/3000 = <strong>2.700 m</strong>. The corresponding shift is 8100/(24 × 500) = <strong>0.675 m</strong>. Calling 2.70 m the shift confuses the reference geometry even though both concern the same transition.</p>" +
                        "<p>The end direction change is L<sub>s</sub>/(2R) = 0.09 rad for these givens. Accurate setting out can use the clothoid coordinate series or a verified geometric model when the leading terms are inadequate. NRS's small-shift omission prose and an adjacent annex inequality conflict; neither that typographical inconsistency nor a small calculated shift should be used alone to bypass other transition requirements.</p>",
                    sources: [
                        { id: "TRAN808-00030", set: 4, question: 87 },
                        { id: "TRAN808-00206", set: 20, question: 82 }
                    ]
                },
                {
                    id: "extra-widening-mechanisms",
                    title: "Derive off-tracking before adding empirical operating clearance",
                    html: "<p>Extra widening on horizontal curves accounts for a vehicle's swept path and the additional operating clearance drivers require. In a simple low-speed rigid-wheelbase model, the rear axle tracks inside the front axle. Let R<sub>f</sub> be the front-axle path radius and ℓ the wheelbase. The right-triangle relation gives rear radius <strong>R<sub>r</sub> = √(R<sub>f</sub><sup>2</sup> − ℓ<sup>2</sup>)</strong>.</p>" +
                        "<p>Off-tracking is R<sub>f</sub> − R<sub>r</sub>. For ℓ small relative to R<sub>f</sub>, expansion of the square root gives <strong>ℓ<sup>2</sup>/(2R<sub>f</sub>)</strong>. The legacy road approximation for n lanes is therefore <strong>W<sub>m</sub> = nℓ<sup>2</sup>/(2R)</strong>. This is a mechanical allowance, not a railway track-gauge formula despite one stem's use of tracks.</p>" +
                        "<p>The familiar combined expression is <strong>W<sub>e</sub> = W<sub>m</sub> + W<sub>p</sub></strong>, with empirical psychological widening <strong>W<sub>p</sub> = V/(9.5√R)</strong>. V is numerically in km/h; R, ℓ and W are in metres. The coefficient 9.5 is unit-dependent. Neither 127R nor 254R is the denominator of this psychological term; those constants arise in the usual turning-demand and braking conversions.</p>" +
                        "<p>Articulation, overhangs, axle layout, opposing vehicles and clearance to barriers require a proper swept-path assessment beyond the elementary approximation. Introduce widening gradually and coordinate it with superelevation and formation width. A correct mechanical calculation is not proof that a particular vehicle can negotiate an otherwise unspecified bend.</p>",
                    sources: [
                        { id: "TRAN808-00005", set: 2, question: 84 },
                        { id: "TRAN808-00012", set: 3, question: 80 },
                        { id: "TRAN808-00184", set: 18, question: 83 },
                        { id: "TRAN808-00203", set: 19, question: 89 },
                        { id: "TRAN808-00204", set: 20, question: 80 }
                    ]
                },
                {
                    id: "extra-widening-bank-calculation",
                    title: "The 42 m curve illustrates why a formula and a standard table can differ",
                    html: "<p>The bank supplies <strong>two lanes, R = 42 m, V = 50 km/h and wheelbase ℓ = 6 m</strong>. Apply the stated legacy mechanical-plus-psychological method without replacing wheelbase by overall vehicle length.</p>" +
                        "<table><thead><tr><th scope='col'>Component</th><th scope='col'>Independent substitution</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mechanical</th><td>W<sub>m</sub> = 2 × 36/(2 × 42) = 0.8571429 m</td></tr>" +
                        "<tr><th scope='row'>Psychological</th><td>W<sub>p</sub> = 50/(9.5√42) ≈ 0.8121229 m</td></tr>" +
                        "<tr><th scope='row'>Total</th><td>W<sub>e</sub> ≈ 1.6692658 m, or 1.6693 m</td></tr></tbody></table>" +
                        "<p>The stored 1.669 m is consistent with that expression. NRS 2013 <strong>Table 9-4 instead specifies 1.2 m extra width</strong> for a double-lane road in the 40–60 m radius band. This is an edition-specific table allowance, not a second evaluation of the same formula. Do not blend the table's 1.2 m with one of the formula's components or label the legacy result an NRS table value.</p>" +
                        "<p>NRS §9.4 calls for gradual widening along transitions and prefers inside widening on hill roads; the physical layout must still account for cut stability, drains and retaining structures. The numerical widening exercise also does not verify that 50 km/h is an appropriate design speed for this radius. Lateral equilibrium, applicable limits, visibility and vehicle swept paths remain independent checks.</p>",
                    sources: [{ id: "TRAN808-00031", set: 4, question: 88 }]
                },
                {
                    id: "horizontal-setback-clearance",
                    title: "Setback from an inside vehicle path — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question supplies a complete horizontal-setback dataset. Let r be the inside vehicle-path radius, S the required distance <strong>along that path</strong>, and L<sub>c</sub> its simple circular-arc length. Let m be the inward clearance from the path to the limiting sight obstruction at the middle of a symmetric sight interval. This is sight clearance, not a legal building setback.</p>" +
                        "<p>When <strong>S ≤ L<sub>c</sub></strong>, the sight line is a chord of the circle. Its half-angle is S/(2r), so <strong>m = r[1 − cos(S/(2r))]</strong>. For a small half-angle, m ≈ S<sup>2</sup>/(8r), which is only an approximation.</p>" +
                        "<p>When <strong>S &gt; L<sub>c</sub></strong> and the sight interval symmetrically spans the entire circular arc plus equal tangent lengths, put γ = L<sub>c</sub>/(2r). The extra tangent projection gives <strong>m = r(1 − cos γ) + [(S − L<sub>c</sub>)/2] sin γ</strong>. Angles in these expressions are radians. The two formulas agree at S = L<sub>c</sub>.</p>" +
                        "<p><em>Added hypothetical cases:</em> r = 200 m, S = 80 m and L<sub>c</sub> = 100 m give m = 200(1 − cos 0.2) ≈ <strong>3.987 m</strong>. With r = 200 m, S = 100 m and L<sub>c</sub> = 60 m, m = 200(1 − cos 0.15) + 20 sin 0.15 ≈ <strong>5.235 m</strong>.</p>" +
                        "<p>If the inside path is n metres inward of the road centreline, centreline setback is <strong>M = n + m</strong>; clearance beyond an inside pavement edge requires a further origin conversion. NRS §9.5 also distinguishes centreline and inside-lane radius. Do not mix a centreline-measured length with this explicitly path-measured S without conversion. Transitions, asymmetric intervals, cut slopes, eye/object heights and combined vertical alignment require actual three-dimensional sight-line checks.</p>",
                    sources: []
                },
                {
                    id: "average-ruling-and-exceptional-gradients",
                    title: "A modest average gradient can hide a severe local climb",
                    html: "<p>Longitudinal grade is rise divided by horizontal distance, positive uphill in the direction of increasing chainage. A grade of 1 in n has magnitude 1/n as a fraction or 100/n percent. Over consecutive tangent lengths L<sub>i</sub>, the net average is <strong>g<sub>avg</sub> = Σ(g<sub>i</sub>L<sub>i</sub>)/ΣL<sub>i</sub> = (z<sub>end</sub> − z<sub>start</sub>)/L<sub>total</sub></strong>. Total ascent and descent are different measures; net averaging can conceal repeated steep sections.</p>" +
                        "<p><em>Added hypothetical example:</em> 300 m at +4% followed by 200 m at −2% produces net rise 12 − 4 = 8 m over 500 m, or <strong>1.6% average grade</strong>. It still contains a 4% climb. Vehicle performance must be checked over the actual sequence, not just its endpoint elevations.</p>" +
                        "<p>In conventional terminology, the <strong>ruling gradient</strong> is the normal design objective for the adopted terrain and road basis. A limiting gradient is a constrained departure; an exceptional gradient is steeper than the limiting value and permitted only under its specified exceptional conditions and short lengths. It is not any arbitrarily steep grade beyond the ruling value.</p>" +
                        "<p>NRS 2013 labels Table 10-1 values <strong>maximum gradients</strong>; they should not silently become another document's ruling-gradient table. For example, it gives 7% at 60 km/h, and Table 10-2 gives a 300 m critical length for 7%. Climbing-lane need also depends on traffic and speed loss. Long downgrades require attention to brake heating and escape facilities, while minimum longitudinal drainage grade and local sag drainage require separate checks.</p>",
                    sources: [{ id: "TRAN808-00015", set: 3, question: 83 }]
                },
                {
                    id: "curve-grade-compensation",
                    title: "Compensation reduces a grade; a cap cannot increase the computed deduction",
                    html: "<p>Curvature adds operating resistance, so a steep longitudinal grade may need easing where it coincides with a horizontal curve. NRS 2013 §10.1.2 gives the curvature compensation, with R numerically in metres, as <strong>g<sub>c</sub> = min[(30 + R)/R, 75/R]%</strong>. The result is a <strong>percentage-point deduction</strong> from the applicable grade, not the final road gradient and not a percentage of that grade.</p>" +
                        "<p>The same section states that compensation is not necessary for grades below 4%. It separately provides altitude-related easing of maximum gradient by 0.5 percentage point for each 500 m rise above mean sea level. Curvature compensation, altitude criteria and critical grade length address different controls; one formula does not supersede the complete design basis.</p>" +
                        "<p>For the bank's <strong>R = 75 m</strong>, the nominal expression gives (30 + 75)/75 = <strong>1.4%</strong>, while the cap gives 75/75 = <strong>1.0%</strong>. The smaller value is <strong>1.0%</strong> where compensation applies. None of the offered options gives that result. An alleged 1.5% ceiling cannot turn a computed 1.0% deduction into 1.5%.</p>" +
                        "<p><em>Added hypothetical application, not a grade supplied by the question:</em> if the applicable grade before this curvature deduction is 6%, subtracting 1 percentage point gives <strong>5%</strong>. Multiplying 6% by 0.99 would be a different operation. The example does not establish that 6% was otherwise allowable or that the resulting alignment meets all hill-road requirements.</p>",
                    sources: [{ id: "TRAN808-00207", set: 20, question: 83 }]
                },
                {
                    id: "vertical-alignment-and-signed-parabola",
                    title: "A vertical parabola joins signed grades continuously",
                    html: "<p>Vertical alignment is the longitudinal elevation profile: straight grades connected by vertical curves. A crest decreases the signed grade; a sag increases it. Both approaches need not have opposite signs. Levelling measures elevations, whereas selecting grades and curves is a design task.</p>" +
                        "<p>For a symmetric parabolic curve of horizontal length L, define signed fractional grades g<sub>1</sub> and g<sub>2</sub>, and <strong>δ = g<sub>2</sub> − g<sub>1</sub></strong>. With x measured from the actual beginning of vertical curve, BVC, uniform change of grade gives <strong>g(x) = g<sub>1</sub> + δx/L</strong>. Integrating once gives <strong>z(x) = z<sub>BVC</sub> + g<sub>1</sub>x + δx<sup>2</sup>/(2L)</strong>, for 0 ≤ x ≤ L.</p>" +
                        "<p>The intersection of the two grade tangents is the PVI, not generally a point on the curve. For this symmetric arrangement, <strong>Ch<sub>BVC</sub> = Ch<sub>PVI</sub> − L/2</strong> and <strong>z<sub>BVC</sub> = z<sub>PVI</sub> − g<sub>1</sub>L/2</strong>. EVC chainage is Ch<sub>BVC</sub> + L. At the endpoint the calculated level must agree with z<sub>PVI</sub> + g<sub>2</sub>L/2, and the curve grade must equal g<sub>2</sub>.</p>" +
                        "<p>For δ nonzero, a stationary level occurs at <strong>x<sub>0</sub> = −g<sub>1</sub>L/δ</strong>, but it is on the curve only if 0 ≤ x<sub>0</sub> ≤ L. Define N = |δ| as a fraction and A = 100N as the numerical percentage-point difference. Then <strong>K = L/A</strong> has units m/%. Using fractional N in that percent-based K definition creates a factor-of-100 error. Preserve δ's sign in levels even though sight-distance length formulas use N or A as positive magnitudes.</p>",
                    sources: [
                        { id: "TRAN808-00006", set: 2, question: 85 },
                        { id: "TRAN808-00107", set: 11, question: 86 }
                    ]
                },
                {
                    id: "vertical-curve-levels-example",
                    title: "Setting out from an early BVC — syllabus extension",
                    html: "<p><strong>Syllabus extension; all chainages, grades and levels in this example are hypothetical.</strong> Take PVI chainage 2+070 m, PVI RL 140.000 m, L = 180 m, g<sub>1</sub> = −0.015 and g<sub>2</sub> = +0.025. Chainage 2+070 means 2070 m from a stated survey origin; it does not mean the curve starts at zero.</p>" +
                        "<p>Here δ = 0.040, so A = 4 percentage points and K = 180/4 = <strong>45 m/%</strong>. BVC is at <strong>1+980 m</strong>, with RL 140 − (−0.015 × 90) = <strong>141.350 m</strong>. The curve equation is <strong>z(x) = 141.350 − 0.015x + x<sup>2</sup>/9000</strong>, where x = chainage in metres − 1980.</p>" +
                        "<table><thead><tr><th scope='col'>Chainage</th><th scope='col'>x, m</th><th scope='col'>Curve RL, m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1+980, BVC</th><td>0</td><td>141.350</td></tr>" +
                        "<tr><th scope='row'>2+000</th><td>20</td><td>141.094</td></tr>" +
                        "<tr><th scope='row'>2+050</th><td>70</td><td>140.844</td></tr>" +
                        "<tr><th scope='row'>2+070</th><td>90</td><td>140.900</td></tr>" +
                        "<tr><th scope='row'>2+100</th><td>120</td><td>141.150</td></tr>" +
                        "<tr><th scope='row'>2+160, EVC</th><td>180</td><td>142.250</td></tr></tbody></table>" +
                        "<p>Table levels are rounded to 0.001 m. The first regular station at 2+000 is already <strong>20 m into the curve</strong>; setting x = 0 there would shift every result. The low point is x<sub>0</sub> = 0.015 × 180/0.040 = <strong>67.5 m</strong>, at chainage <strong>2+047.5 m</strong> and unrounded RL <strong>140.84375 m</strong>, not at the PVI.</p>" +
                        "<p>Endpoint verification gives 140 + 0.025 × 90 = 142.250 m, matching the parabola. The curve at PVI chainage lies 0.900 m above the tangent intersection, as expected for this sag. Before BVC and after EVC use the respective tangents, not an unlimited extrapolation of the quadratic. Low-point drainage is an additional design task, not resolved by the level table.</p>",
                    sources: []
                },
                {
                    id: "crest-visibility-and-length-regimes",
                    title: "Crest stopping and passing visibility use different endpoint heights",
                    html: "<p>For a small-grade parabolic crest, let N = |g<sub>2</sub> − g<sub>1</sub>| be fractional grade difference, L curve length and S required sight distance. The sight line just clearing the road is tangent to the profile. When both endpoints lie on the curve, their distances from the tangency point satisfy <strong>h<sub>i</sub> = Nx<sub>i</sub><sup>2</sup>/(2L)</strong>. Adding x<sub>1</sub> and x<sub>2</sub> gives the length relation.</p>" +
                        "<p>Define <strong>B = 2(√h<sub>1</sub> + √h<sub>2</sub>)<sup>2</sup></strong>, in metres. Then <strong>L = NS<sup>2</sup>/B for L ≥ S</strong>. If the sight interval extends beyond the curve, the corresponding small-grade relation is <strong>L = 2S − B/N for L &lt; S</strong>. Always test the computed L against the assumed branch. A negative short-branch result is not a physical negative curve length; other minimum-length and alignment criteria still apply.</p>" +
                        "<p>For stopping visibility, NRS's main section uses h<sub>1</sub> = 1.2 m and h<sub>2</sub> = 0.15 m. These give <strong>B = 4.397056... m ≈ 4.4 m</strong>. For passing visibility with <strong>both heights H = 1.2 m</strong>, B = 8H = <strong>9.6 m</strong>. Thus NS<sup>2</sup>/4.4 is not the passing-sight formula, while NS<sup>2</sup>/(8H) requires equal endpoint heights and the long-curve branch.</p>" +
                        "<p>If the grade difference is instead A in percentage points, the rounded long-curve denominators are <strong>440 for stopping</strong> and <strong>960 for passing</strong>. NRS's later annex Where text conflicts with its main stopping-height values; the models here explicitly retain the consistent 1.2/0.15 and 1.2/1.2 assumptions. Check the required visibility cases, applicable K/minimum length, profile continuity and combined plan geometry before adopting a curve.</p>",
                    sources: [
                        { id: "TRAN808-00208", set: 20, question: 84 },
                        { id: "TRAN808-00211", set: 20, question: 87 },
                        { id: "TRAN808-00212", set: 20, question: 88 }
                    ]
                },
                {
                    id: "crest-bank-work-and-branch-check",
                    title: "Check the 150 m crest example, then test a different branch",
                    html: "<p>The bank gives <strong>S = 150 m and deviation expressed as 1 in 30</strong>. Interpreting that as the small-grade fractional difference N = 1/30, add the explicit stopping-height assumption h<sub>1</sub> = 1.2 m and h<sub>2</sub> = 0.15 m. These heights are not stated in the stem; they identify the conventional model used to evaluate it.</p>" +
                        "<p>With the rounded B = 4.4 m, the long-curve candidate is <strong>L = (1/30) × 150<sup>2</sup>/4.4 = 750/4.4 = 170.4545 m</strong>. Since 170.4545 ≥ 150, the branch is valid. The stored 170 m is an approximate exam value, not the exact calculation or a construction rounding rule. Using the unrounded height expression gives approximately 170.57 m instead.</p>" +
                        "<p><em>Added hypothetical branch exercise, not another bank question:</em> retain S = 150 m and B = 4.4 m but set N = 0.02. The long-curve formula gives <strong>102.2727 m</strong>, which is less than S and invalidates its own assumption. Recalculate with the short-curve expression: <strong>L = 300 − 4.4/0.02 = 80 m</strong>. Now 80 &lt; 150 is consistent.</p>" +
                        "<p>The short-branch check S = (L + B/N)/2 = (80 + 220)/2 recovers 150 m. This demonstrates why selecting a formula by its familiar denominator is insufficient. A valid sight-distance subcalculation still needs the applicable minimum curve length, K value, grade constraints and the required stopping or passing sight model.</p>",
                    sources: [{ id: "TRAN808-00209", set: 20, question: 85 }]
                },
                {
                    id: "sag-headlight-sight-distance",
                    title: "Sag headlight geometry — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank has no complete headlight-length numerical problem. On a sag, a headlight ray can meet the rising pavement before the required stopping distance. Define h as lamp height and α as the <strong>upper ray's inclination above the local road tangent</strong>, not the full beam spread.</p>" +
                        "<p>For small grades and horizontal-distance geometry, the ray rises h + S tan α above its origin tangent while the parabola rises NS<sup>2</sup>/(2L). Hence <strong>L = NS<sup>2</sup>/[2(h + S tan α)] for L ≥ S</strong>. When S extends beyond the curve, use <strong>L = 2S − 2(h + S tan α)/N for L &lt; S</strong>. N is fractional grade difference; all heights and lengths are metres. Validate the selected branch.</p>" +
                        "<p>NRS §24.6 identifies <strong>h = 0.75 m, total beam angle 2α = 2° and α = 1°</strong>. Its annex uses sin α in the small-angle expression and rounds the percent-grade denominator to 150 + 3.5S. The tangent formulation above is an explicitly stated geometric model; at 1° the sine/tangent difference is small. Inserting a 2° upper ray while retaining that rounded denominator is inconsistent.</p>" +
                        "<p><em>Added hypothetical checks:</em> with S = 100 m, h = 0.75 m and α = 1°, the denominator 2(h + S tan α) is approximately <strong>4.991013 m</strong>. For N = 0.06, L ≈ <strong>120.2 m</strong>, so L ≥ S is valid. For N = 0.04, the long-curve candidate is about 80.14 m and fails that branch; the short expression gives <strong>75.22 m</strong>, consistently less than 100 m.</p>" +
                        "<p>Headlight geometry does not establish actual visibility in fog, glare or dirty-lamp conditions. Daytime visibility beneath structures, ride comfort, minimum K/length and drainage at the lowest point remain separate constraints. The larger applicable requirement, not a single attractive numerical result, controls adoption.</p>",
                    sources: []
                },
                {
                    id: "sag-comfort-models-and-bank-check",
                    title: "Separate a two-transition jerk model from parabolic vertical acceleration",
                    html: "<p>Different valley-curve comfort formulas can describe different curvature histories. In an idealised <strong>two-equal-transition</strong> model, curvature increases linearly from zero to a peak and then decreases to zero. With total length L and small total grade change N, the area of that triangular curvature diagram gives N ≈ L/(2R<sub>peak</sub>). At constant v, limiting jerk C gives <strong>C = 4Nv<sup>3</sup>/L<sup>2</sup></strong>.</p>" +
                        "<p>Thus <strong>L = 2√(Nv<sup>3</sup>/C)</strong>. N is dimensionless, v is m/s and C is m/s<sup>3</sup>; the quantity under the square root has units m<sup>2</sup>. This is not the constant-curvature approximation of a simple parabolic vertical curve.</p>" +
                        "<p>The bank supplies N = 1/200 = 0.005 and V = 80 km/h. Its explanation additionally specifies <strong>C = 0.6 m/s<sup>3</sup></strong>, which is absent from the stem. Keeping v = 80/3.6 until the final step gives <strong>L = 2√[0.005(80/3.6)<sup>3</sup>/0.6] ≈ 19.1258 m</strong>. None of the options matches exactly; 19.22 is closer than the keyed 19.52. Changing precision cannot justify the latter.</p>" +
                        "<p>For a <strong>parabolic</strong> sag, small-grade vertical acceleration is approximately Nv<sup>2</sup>/L, so an acceleration limit a<sub>allow</sub> gives L ≥ Nv<sup>2</sup>/a<sub>allow</sub>. NRS §10.4.2 uses the rounded expression <strong>L = AV<sup>2</sup>/390</strong>, with A in percentage points and V in km/h, corresponding approximately to a 0.3 m/s<sup>2</sup> acceleration criterion. The bank data have A = 0.5, yielding <strong>8.2051 m</strong> by that separate rounded expression.</p>" +
                        "<p>Neither 8.2051 m nor 19.1258 m is a final adopted NRS curve length. Night visibility, minimum K/length and other controls must be checked using a consistent curve model. The bank explanation's dimensionally inconsistent alternative is not used.</p>",
                    sources: [{ id: "TRAN808-00210", set: 20, question: 86 }]
                },
                {
                    id: "surface-drainage-network",
                    title: "Follow every water source through collection, conveyance and disposal",
                    html: "<p>Surface drainage removes runoff before it ponds on the road, erodes a slope or infiltrates vulnerable pavement layers. The system includes crossfall, shoulders, kerbs and inlets where used, longitudinal drains, catch drains, cross-drainage structures and stable outlets. Collection without a usable downstream route can merely relocate the problem.</p>" +
                        "<table><thead><tr><th scope='col'>Element</th><th scope='col'>Function</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Catch/interceptor drain</th><td>Intercepts upslope overland runoff before it reaches a cut face or formation and conveys it to a controlled outlet.</td></tr>" +
                        "<tr><th scope='row'>Side or toe drain</th><td>Collects connected road, shoulder and adjacent-ground runoff, including hillside contribution where it reaches that drain.</td></tr>" +
                        "<tr><th scope='row'>Flume or chute</th><td>Conveys collected water down a substantial level difference with engineered erosion and energy control.</td></tr>" +
                        "<tr><th scope='row'>Cross drain</th><td>Transfers a stream or collected discharge across the road to a suitable receiving channel.</td></tr></tbody></table>" +
                        "<p>Side drains do <strong>not</strong> receive only rain falling on the carriageway. Delineate the actual connected areas, check bypass from inlets and catch drains, and avoid counting an intercepted catchment twice. An embankment can raise the road but does not let floodwater pass underneath by itself: openings, afflux, overtopping and floodplain effects must be designed.</p>" +
                        "<p>NRS §13.8 provides roadside drains in all cut sections, toe drains in low fills below 0.8 m and a minimum 0.5% drain longitudinal grade. It locates catch drains behind the cut top, at least 5 m from the cutting edge. These provisions do not establish a universal <strong>4% natural-cross-slope trigger</strong>. Ground cross-slope, pavement crossfall and drain longitudinal slope are three different quantities. Determine invert levels and outfalls before treating any typical cross-section as complete.</p>",
                    sources: [
                        { id: "TRAN808-00020", set: 3, question: 88 },
                        { id: "TRAN808-00213", set: 20, question: 89 },
                        { id: "TRAN808-00219", set: 21, question: 83 },
                        { id: "TRAN808-00126", set: 13, question: 82 }
                    ]
                },
                {
                    id: "subsurface-water-and-shoulder-protection",
                    title: "Groundwater and infiltrated water require a subsurface drainage path",
                    html: "<p>Water can enter a road from rainfall infiltration through joints and cracks, lateral seepage from a hillside, leaking drainage, a rising groundwater table or capillary action. Surface runoff and subsurface seepage can therefore interact. Removing visible ponding does not prove that the subgrade is adequately drained.</p>" +
                        "<p>NRS 2013 §13.8 states a water-table separation of <strong>1–1.2 m below subgrade level</strong>, not below the finished pavement surface. The datum matters because pavement layers lie above the subgrade. The bank's isolated water-table height of 1.2 m omits that reference and cannot define an elevation on its own.</p>" +
                        "<p>A subsurface system may intercept seepage, drain permeable pavement layers or lower local groundwater using suitable filtered drains and reliable outlets. Filters must pass water while retaining the protected soil, resist clogging and remain compatible with the surrounding material. A geotextile is not automatically an impermeable capillary barrier; a capillary-break layer needs appropriate pore structure, thickness and hydraulic conditions.</p>" +
                        "<p>Raised shoulder material, edge depressions and damaged surfacing can hold water against the pavement and promote infiltration, weakening, pumping or moisture-related distress. An arid climate does not eliminate intense runoff events. However, the bank's stem says good drainage while its explanation assumes poor drainage; pavement damage is a possible consequence of prolonged wetting, not an inevitable result established by that wording.</p>" +
                        "<p>Check outfall submergence, erosion, sediment and access for cleaning as well as pipe or drain capacity. A blocked subsurface outlet can maintain the very water pressure the system was intended to relieve. Soil permeability, seasonal groundwater observations and the required drawdown remain site-specific inputs.</p>",
                    sources: [
                        { id: "TRAN808-00214", set: 20, question: 90 },
                        { id: "TRAN808-00216", set: 21, question: 80 },
                        { id: "TRAN808-00217", set: 21, question: 81 }
                    ]
                },
                {
                    id: "drain-shape-depth-and-roadside-safety",
                    title: "Typical channel depth, hydraulic depth and freeboard are not interchangeable",
                    html: "<p>NRS §13.8 prefers trapezoidal roadside drains, but there is no universally best section. A broad shallow dish can be more forgiving near traffic; a narrow channel may fit constrained land but create a fall or wheel-trapping hazard. Covers, relocation or appropriate barriers can be needed, with structural capacity and maintenance access designed rather than presumed.</p>" +
                        "<p>The actual <strong>June 2024 Final (Revised) Road Safety Note 2</strong>, Figures 3-4 and 3-5 on printed page 27, shows <strong>300–450 mm vertical arrows from the channel top reference to its internal bed</strong>. This was visually confirmed for both drawings. It is a typical open-channel depth dimension, not water-table depth, freeboard, lining thickness or excavation depth. It does not establish a universal minimum, maximum or hydraulically sufficient flow depth. The bank's alleged 1996 ideal/absolute-maximum clause has not been verified here.</p>" +
                        "<p>Keep the quantities separate: <strong>flow depth y</strong> is water above the bed; <strong>freeboard F</strong> is the vertical margin above the design water surface; internal channel depth must accommodate both. Excavation additionally depends on lining, bedding and ground levels. Hydraulic radius A<sub>f</sub>/P is not y; hydraulic depth A<sub>f</sub>/T<sub>w</sub> is another quantity, based on free-surface width.</p>" +
                        "<p>Section 3.5.5 of the revised note separately gives <strong>F = max(0.30 m, 0.20y, v<sub>f</sub><sup>2</sup>/(2g))</strong>. Where flooding adjacent land and buildings represents no risk, the 0.30 m term may become 0.15 m; the other comparisons remain. This freeboard rule must not be relabelled as a universal 300 mm flow depth. The shallow typical drawings and the general freeboard provision need project-specific reconciliation, not a manufactured one-size-fits-all prescription.</p>",
                    sources: [
                        { id: "IRRI951-00311", set: 30, question: 70 },
                        { id: "TRAN808-00218", set: 21, question: 82 }
                    ]
                },
                {
                    id: "drainage-design-events-and-runoff",
                    title: "From catchment and design event to discharge — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned record supplies a complete catchment, IDF curve or design-flow dataset. Map every contributing subcatchment and outlet, including future connected development. Rainfall interception, infiltration, depression storage and routing affect runoff; the rational method represents them approximately through a runoff coefficient and concentration time rather than resolving every process.</p>" +
                        "<p>For a small catchment under the method's assumptions, <strong>Q = C<sub>r</sub>iA<sub>ha</sub>/360</strong>, where Q is m<sup>3</sup>/s, i is mm/h, A<sub>ha</sub> is hectares and C<sub>r</sub> is dimensionless. The conversion is 10<sup>−3</sup> × 10<sup>4</sup>/3600 = 1/360. With square kilometres instead, Q = C<sub>r</sub>iA<sub>km²</sub>/3.6. For mixed cover, <strong>C<sub>r</sub> = Σ(C<sub>i</sub>A<sub>i</sub>)/ΣA<sub>i</sub></strong>.</p>" +
                        "<p>Select intensity from a relevant <strong>intensity–duration–frequency</strong> relationship for the chosen return period and a duration appropriate to the catchment concentration time. Include overland and channel travel when determining that time. Daily rainfall divided by 24 is not a substitute for a short-duration design intensity. The 2024 note describes a small-catchment scope of about 1–2 km<sup>2</sup>; uniform rainfall, representative coefficients and limited storage effects still need assessment. Its inconsistent mm/sec line is not used with the mm/h formula.</p>" +
                        "<p><strong>NRS Table 13-2 is explicitly for roadside drains:</strong> 50 years for Classes I–II, 33 for III and 25 for IV. The revised note's visually checked Table 2-1 repeats those values and attributes them to NRS. Its §2.1 prose separately discusses 25 years for important economic links and 10 for rural highways tolerating some disruption; §3.3.2 uses 50 years for major-road kerbed-inlet calculations. Preserve these contexts rather than selecting one universal Nepal drainage period.</p>" +
                        "<p>A return period describes probability, not a regular calendar interval. Cross-drainage structures require their own governing criteria; the roadside table is not a universal culvert prescription. Larger or storage-influenced catchments may need regional flood analysis, hydrographs and routing. A regional empirical flood coefficient is not automatically the rational runoff coefficient.</p>",
                    sources: []
                },
                {
                    id: "trapezoidal-drain-hydraulics-example",
                    title: "Manning capacity, freeboard and erosion check — syllabus extension",
                    html: "<p><strong>Syllabus extension; the whole worked dataset is hypothetical.</strong> Assume 1.5 ha with runoff coefficient 0.8 and 3.0 ha with coefficient 0.4, concentration time 20 minutes, and an illustrative 25-year IDF intensity of 90 mm/h. These are not measured Nepal rainfall data or a universal event selection. Weighted C<sub>r</sub> = (0.8 × 1.5 + 0.4 × 3.0)/4.5 = 0.533333..., giving <strong>Q<sub>design</sub> = 2.4 × 90/360 = 0.600 m<sup>3</sup>/s</strong>.</p>" +
                        "<p>For a symmetric trapezoid with bottom width b, side slope z horizontal to 1 vertical and flow depth y, <strong>A<sub>f</sub> = y(b + zy)</strong>, <strong>P = b + 2y√(1 + z<sup>2</sup>)</strong>, and <strong>R<sub>h</sub> = A<sub>f</sub>/P</strong>. SI Manning capacity is <strong>Q<sub>cap</sub> = (1/n)A<sub>f</sub>R<sub>h</sub><sup>2/3</sup>S<sub>f</sub><sup>1/2</sup></strong>. n has units s/m<sup>1/3</sup>; S<sub>f</sub> is friction slope in m/m. Only steady uniform flow justifies equating it to bed slope.</p>" +
                        "<p>Choose trial b = 0.50 m, z = 0.75, limiting flow depth y = 0.50 m, n = 0.020 and S<sub>f</sub> = 0.0064. Then <strong>A<sub>f</sub> = 0.4375 m<sup>2</sup></strong>, <strong>P = 1.75 m</strong> and <strong>R<sub>h</sub> = 0.25 m</strong>. Thus Q<sub>cap</sub> = 50 × 0.4375 × 0.25<sup>2/3</sup> × 0.08 ≈ <strong>0.6945 m<sup>3</sup>/s</strong>, exceeding 0.600 under these assumptions.</p>" +
                        "<p>The velocity <strong>1.5874 m/s</strong> is Q<sub>cap</sub>/A<sub>f</sub> at the trial limiting depth, not a solved velocity at the smaller design discharge. At that capacity condition, velocity head is about 0.1284 m. The revised note's freeboard comparison gives <strong>max(0.30, 0.10, 0.1284) = 0.30 m</strong>, so this trial requires at least <strong>0.80 m internal depth</strong> before other allowances. A 300–450 mm drawing cannot be imposed as this calculation's total depth.</p>" +
                        "<p>Mean boundary shear at that trial condition is approximately <strong>ρgR<sub>h</sub>S<sub>f</sub> = 15.696 Pa</strong> for ρ = 1000 kg/m<sup>3</sup> and g = 9.81 m/s<sup>2</sup>. No permissible lining shear or erosion velocity is supplied, so erosion adequacy is not established. Solve the actual flow profile where needed, check sediment and blockage, and design the outlet. The steep trial side slopes are not presumed recoverable by vehicles; capacity alone does not approve this section.</p>",
                    sources: []
                },
                {
                    id: "culvert-inlet-outlet-control",
                    title: "Culvert capacity is a headwater problem — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not supply a complete culvert sizing problem. FHWA HDS-5, third edition, April 2012, is used for hydraulic principles, not as evidence of Nepal adoption. A culvert may flow partly full or under pressure, and its controlling condition can change with discharge and downstream level.</p>" +
                        "<table><thead><tr><th scope='col'>Control</th><th scope='col'>What limits performance</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Inlet control</th><td>The entrance admits less than the barrel can convey. Inlet shape, area, configuration and upstream head govern the inlet relation; conditions downstream of the control do not determine its capacity while that regime persists.</td></tr>" +
                        "<tr><th scope='row'>Outlet control</th><td>The barrel/downstream system limits flow. Tailwater, length, slope, roughness, section and entrance/exit losses all affect required upstream head.</td></tr></tbody></table>" +
                        "<p>For each trial configuration and discharge, evaluate both conditions and use the controlling, generally higher, required headwater under the design method. Express headwater and tailwater elevations on a common datum; their depths are measured from different inlet and outlet inverts. Compare required headwater with allowable levels at the roadway and affected upstream land, not just with pipe diameter.</p>" +
                        "<p>For a pressure-flow energy calculation, write <strong>H<sub>u</sub> − H<sub>d</sub> = h<sub>entrance</sub> + h<sub>friction</sub> + h<sub>exit</sub></strong>, with H including elevation, pressure/depth and velocity head as appropriate. For a full circle, A = πD<sup>2</sup>/4 and R<sub>h</sub> = D/4, but a full-pipe Manning result alone does not determine entrance acceptance, tailwater effects or the actual water-surface profile. Do not add an exit loss and downstream velocity head inconsistently.</p>" +
                        "<p>Check a range of flows, debris blockage, scour, abrasion, outlet energy dissipation, embankment seepage and overtopping. Significant upstream storage needs routing rather than an assumed peak reduction. Structure, bedding, cover, traffic loads, headwalls and access for inspection are additional requirements. An overtoppable crossing needs a closure and traffic-safety strategy; the ability to pass water over a road is not permission to drive through it.</p>",
                    sources: []
                },
                {
                    id: "hill-road-stability-and-hairpins",
                    title: "Hill-road geometry, slope stability and drainage must be designed together",
                    html: "<p>Hill roads combine restricted land, sharp curvature, long grades and sensitive slopes. Compare alignments using geology, landslide and rockfall evidence, groundwater, stream crossings, earthwork balance, access and life-cycle risk. Following contours can reduce grade but lengthen the route; cutting an inside obstruction can improve sight distance while destabilising the cut. Plan and profile therefore need coordinated review.</p>" +
                        "<p>Cut and fill stability depends on material strength, discontinuity orientation, groundwater pressure, toe support, erosion, surcharge and seismic loading. Retaining and breast walls have different locations and functions; their sliding, overturning, bearing, structural and global-slope checks cannot be replaced by a typical wall section. Vegetation or bioengineering can control suitable surface erosion but is not automatically a remedy for a deep-seated landslide.</p>" +
                        "<p>NRS 2013 <strong>Table 9-3</strong> lists hairpin minimum design speed <strong>20 km/h</strong>, minimum radius <strong>15 m</strong>, minimum transition length <strong>15 m</strong>, maximum longitudinal gradient <strong>4%</strong> and maximum superelevation <strong>10%</strong>. It also calls for at least <strong>60 m between successive hairpin bends</strong> and prefers full-roadway paving through the bend. The bank's keyed 20 m radius does not match this edition; 20 km/h is the table's speed value. General snowbound superelevation restrictions must still be reconciled; 10% is not automatic at every snowy hairpin.</p>" +
                        "<p>Locate tight bends on suitably stable ground with enough width for swept paths, widening, sight clearance, drains and retaining works. Assess both vehicle directions and the approach grades. Intercept upslope runoff, provide appropriately frequent controlled outlets and protect every disposal point; do not concentrate flow onto an unstable valley slope. Spoil disposal, snow/ice, maintenance access and protection of downstream land belong in the design.</p>" +
                        "<p>Hill roads especially expose these issues, but a national highway, feeder road or district road can also be a hill road. The bank's alternatives are not mutually exclusive responsibilities: slope stability matters wherever relevant, irrespective of administrative category.</p>",
                    sources: [
                        { id: "TRAN808-00090", set: 10, question: 80 },
                        { id: "TRAN808-00114", set: 1, question: 81 },
                        { id: "TRAN808-00024", set: 4, question: 81 }
                    ]
                },
                {
                    id: "road-tunnel-grades-and-integration",
                    title: "The 300 m tunnel threshold concerns grade arrangement, not a multiplier",
                    html: "<p>A road tunnel is an alignment alternative whose length, grade and curvature influence excavation, ventilation, drainage, visibility and operating cost. It requires economic and geological assessment alongside portal stability, escape and maintenance provisions. Reduced exposure along the bore does not make its portals or operating systems maintenance-free.</p>" +
                        "<p>NRS 2013 <strong>§17.3(l)</strong> states <strong>4% maximum road gradient and 0.4% minimum</strong>, the minimum being associated with drainage. These are the values in the actual identified primary text, not an assumed 3% maximum or an imported railway rule.</p>" +
                        "<p>Section 17.3(m) describes a <strong>one-directional gradient for tunnel length below 300 m</strong> and <strong>two-way grades, highest at the centre, for length above 300 m</strong>. The strict below/above wording does not expressly allocate exactly 300 m. The threshold concerns the arrangement of the profile; it does not prescribe 75% or 80% of an external ruling gradient.</p>" +
                        "<p>The two assigned HYDR-prefixed records genuinely conflict: Model 19 keys <strong>80%</strong> and Model 22 keys <strong>75%</strong> for almost the same stem. Neither percentage is established by that NRS road-tunnel passage. Their original subject prefix does not make railway or hydraulic-tunnel operating assumptions applicable to highway geometry.</p>" +
                        "<p>The same NRS section requires 5.0 m minimum vertical clearance and addresses ventilation and lighting. Coordinate the actual vehicle envelope, drainage inverts and outfalls, entrance adaptation, visibility and structural/geotechnical design. These notes explain the verified geometric distinctions; they do not establish current statutory adoption, a complete tunnel safety design or authority to construct.</p>",
                    sources: [
                        { id: "HYDR626-00168", set: 19, question: 63 },
                        { id: "HYDR626-00197", set: 22, question: 65 }
                    ]
                }
            ],
            gaps: [
                "The 73 source triples identify only the root-level questions assigned to ACiE0902. Repeated questions inside parent model-chapter objects are contextual duplicates, not extra assignments. The notes cover the official 9.2 scope without changing original stems, options, ordering or stored answers.",
                "ssd-on-grades-example is a source-free syllabus extension: the bank supplies reaction-time concepts but no complete graded-SSD dataset. Its speed, friction and grade are hypothetical and its results consistently use Vt/3.6 and the rounded braking constant 254.",
                "overtaking-relative-motion-example is a source-free syllabus extension because the bank lacks a complete set of vehicle lengths, gaps, acceleration, opposing speed and observation time. The constructed dataset illustrates relative motion and time-origin consistency, not an NRS table calculation or real-time driving advice.",
                "horizontal-setback-clearance and vertical-curve-levels-example are source-free syllabus extensions. No assigned record supplies an inside-path radius and obstruction profile, or a complete PVI/BVC survey datum and station-level dataset. Their additional geometry, chainages and levels are explicitly hypothetical.",
                "sag-headlight-sight-distance is a source-free syllabus extension. The bank lacks a complete headlight sizing case. Crest and sag formulas require declared endpoint heights, beam angle, grade units and a checked length branch; the bank's valley-comfort stem also omits the 0.6 m/s3 criterion supplied only in its explanation.",
                "drainage-design-events-and-runoff, trapezoidal-drain-hydraulics-example and culvert-inlet-outlet-control are source-free syllabus extensions. Actual catchments, regional IDF evidence, concentration times, runoff coefficients, roughness, permissible erosion, blockage allowance, tailwater and reliable outlets are absent. No hypothetical hydraulic result is a completed drainage design.",
                "The 2024 drain figures' 300–450 mm vertical channel-depth arrows and Table 2-1's NRS-attributed 50/33/25-year cells were visually checked. The alleged original 1996 ideal/absolute-maximum depth clause was not verified. Typical drawing depth, the revised freeboard criterion and differing event-selection discussions must remain separate; their project-specific reconciliation is unresolved.",
                "Precise primary IRC edition/clause support remains unverified for the bank's heavy-rainfall camber attribution and 2 s OSD assumption. The universal 4% cross-slope drainage trigger and 75%/80% road-tunnel multipliers are not established by the reviewed NRS passages. Three-minimum/five-desirable OSD is identified as a teaching convention, not an NRS desirable-zone clause.",
                "NRS 2013 contains internal inconsistencies: the jerk relation reaches the printed strict lower boundary at 85 km/h; later annex stopping-height labels conflict with the main 1.2/0.15 m model; small-shift omission prose conflicts with an adjacent inequality; and summary speed entries contain apparent extra zeros. The notes state consistent models and use principal tables, without inventing an erratum or claiming every ambiguity resolved.",
                "Actual adoption of these editions, legal ROW boundaries and site approval were not established. Hill-road and tunnel design still needs traffic, geological, groundwater, climate, environmental, structural and operational evidence. NRS and the revised safety note are identified primary references; IIT teaching and FHWA HDS-5 support concepts, not Nepal's adoption of their detailed criteria."
            ],
            cautions: [
                {
                    html: "<p><strong>Settlement is not excluded from highway design.</strong> The intended answer makes sense only as a narrow distinction between a geometric element and a geotechnical consideration. Settlement can change profile, crossfall, drainage and pavement performance; the broad stored stem is overgeneralised.</p>",
                    sources: [{ id: "TRAN808-00010", set: 2, question: 89 }]
                },
                {
                    html: "<p><strong>Vehicle height is 4.75 m in NRS 2013 §4.1, not the keyed 4.20 m.</strong> Its 18.00 m value is maximum overall vehicle length, not wheelbase or a specified single-unit bus/truck designation. These geometric inputs do not themselves verify current legal vehicle limits.</p>",
                    sources: [
                        { id: "TRAN808-00123", set: 12, question: 89 },
                        { id: "TRAN808-00124", set: 13, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>Check width and clearance meanings:</strong> NRS Table 11-6 gives 30 m <strong>total</strong> feeder-road ROW, not 30 m per side or carriageway width. The 5 m unobstructed vertical envelope in §11.9.3 is a <strong>minimum</strong> requirement, so maximum in the cliff question is incorrect wording. Actual ROW acquisition remains road-specific.</p>",
                    sources: [
                        { id: "TRAN808-00026", set: 4, question: 83 },
                        { id: "TRAN808-00027", set: 4, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>0.75 m is a shoulder floor, not every class's normal width or a complete stopping bay.</strong> NRS Table 11-2 gives larger class values with qualified terrain reductions. Vehicle length is not a direct shoulder-width formula input, but real stopped-vehicle space and access still depend on the vehicle and intended use.</p>",
                    sources: [
                        { id: "TRAN808-00182", set: 18, question: 81 },
                        { id: "TRAN808-00104", set: 11, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>100 mm is a typical low-kerb teaching height, not a universal kerb specification.</strong> Face shape, location, drainage and road-user needs matter. A mountable or barrier-type kerb is not equivalent to a crash barrier; NRS also distinguishes different profiles and cautions against vertical kerbs on high-speed roads.</p>",
                    sources: [{ id: "TRAN808-00183", set: 18, question: 82 }]
                },
                {
                    html: "<p><strong>Camber sheds water rather than retaining stormwater.</strong> Collect storm water is imprecise wording for that function. NRS 2013 Table 11-3 gives 2.5% for straight bituminous surfacing, but that separate primary fact does not verify an unspecified IRC heavy-rainfall minimum for all bituminous surface categories.</p>",
                    sources: [
                        { id: "TRAN808-00098", set: 10, question: 88 },
                        { id: "TRAN808-00190", set: 18, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>The crown-rise answer needs metres and the half-width assumption:</strong> a symmetric 7 m pavement with straight 1 in 50 crossfalls gives (7/2)/50 = <strong>0.070 m</strong>. Using the whole 7 m gives the wrong rise for this crowned geometry. A differently defined parabolic crossfall would need its own calculation.</p>",
                    sources: [{ id: "TRAN808-00192", set: 19, question: 79 }]
                },
                {
                    html: "<p><strong>ISD = 2 SSD is a convention, not an overtaking guarantee.</strong> For opposing stopping movements, calculate each vehicle's applicable stopping distance and add them. Different speeds or grades need not produce two identical SSDs, so the simplified explanation must not be applied indiscriminately.</p>",
                    sources: [
                        { id: "TRAN808-00007", set: 2, question: 86 },
                        { id: "TRAN808-00197", set: 19, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>PIEV covers perception–reaction, not braking distance.</strong> The 2.5 s value is a design assumption, not a universal normal-driver measurement. Tyre friction limits braking, but brake condition, capability and fade also matter. Even ideal effective brakes do not stop a moving vehicle instantaneously. At the explanation's 50 km/h, reaction travel alone is 34.7222 m.</p>",
                    sources: [
                        { id: "TRAN808-00029", set: 4, question: 86 },
                        { id: "TRAN808-00193", set: 19, question: 80 },
                        { id: "TRAN808-00189", set: 18, question: 88 },
                        { id: "TRAN808-00191", set: 18, question: 90 }
                    ]
                },
                {
                    html: "<p><strong>Minimum and desirable zone lengths differ:</strong> the reviewed IIT teaching convention is 3 OSD minimum and 5 OSD desirable, not the keyed 3 OSD desirable. NRS §8.4 has its own minimum-zone provisions, including a different single-lane case. The bank's 2 s OSD reaction assumption belongs to a specified legacy model and is not verified as the basis of the NRS overtaking table.</p>",
                    sources: [
                        { id: "TRAN808-00194", set: 19, question: 81 },
                        { id: "TRAN808-00196", set: 1, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>The spacing arithmetic gives 16 m, not 14 m:</strong> 0.2 × 50 + 6 = 16, matching option D under the explanation's own convention. The alternative 0.7v + 6 metre-second convention gives approximately 15.72 m. Neither supports the keyed 14 m; unexplained changes of vehicle length or clearance do not repair the mismatch.</p>",
                    sources: [{ id: "TRAN808-00195", set: 19, question: 82 }]
                },
                {
                    html: "<p><strong>Zero-friction equilibrium is not a universal hill-road protocol.</strong> e ≈ V<sup>2</sup>/(127R) assumes no lateral-friction contribution at that speed. NRS §11.6 instead uses e = V<sup>2</sup>/(127R) − f with qualified limits. The separate legacy 75%-speed procedure leads approximately to V<sup>2</sup>/(225R); it does not establish the bank's blanket hills/full-speed versus plains/75% rule.</p>",
                    sources: [{ id: "TRAN808-00017", set: 3, question: 85 }]
                },
                {
                    html: "<p><strong>The approximate curve-speed calculation gives 52.4563 km/h:</strong> √[127 × 100 × (1/15 + 0.15)]. The 52.44 km/h option is nearby with a small numerical discrepancy, not the exact result. This calculation checks the specified approximate lateral model, not rollover, combined braking, wet-weather operation or a posted speed.</p>",
                    sources: [{ id: "TRAN808-00025", set: 4, question: 82 }]
                },
                {
                    html: "<p><strong>The supplied full-speed equilibrium gives e = 0.0389764:</strong> 3600/(127 × 150) − 0.15. The 0.039 option is appropriate to three decimals, while 0.04 is a coarser rounding. A 75%-speed protocol would be a different procedure. Do not silently replace the supplied f, or treat a 7% cap as universally applicable to every terrain and standard.</p>",
                    sources: [{ id: "TRAN808-00200", set: 19, question: 86 }]
                },
                {
                    html: "<p><strong>Superelevation does not require a fixed inner edge.</strong> Centreline and other rotation arrangements are possible. The 0.49 m result is the final difference across 7 m horizontal projected width at e = 0.07; it is not automatically the movement of one edge from an initially crowned surface or the rise used in every runoff-length calculation.</p>",
                    sources: [
                        { id: "TRAN808-00188", set: 18, question: 87 },
                        { id: "TRAN808-00201", set: 19, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>The 30 m degree-of-curve answer is an arc convention.</strong> A 30 m chord definition gives a different radius relation, and the 100 ft arc convention uses 30.48 m rather than 30 m. State arc/chord and angle units before using the result.</p>",
                    sources: [{ id: "TRAN808-00198", set: 19, question: 84 }]
                },
                {
                    html: "<p><strong>The transition wording is malformed:</strong> a circle is already a horizontal curve; the usual transition joins a tangent to a circular arc. A clothoid has curvature linear in travelled length. Constant lateral-acceleration change follows only at constant speed, and a cubic setting-out approximation should not be called an exact clothoid for all deflections.</p>",
                    sources: [
                        { id: "TRAN808-00185", set: 18, question: 84 },
                        { id: "TRAN808-00019", set: 3, question: 87 },
                        { id: "TRAN808-00186", set: 18, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>At 85 km/h, C = 80/(75 + 85) = 0.5 m/s<sup>3</sup>, not 0.6.</strong> NRS §24.4 prints the strict range 0.5 &lt; C &lt; 0.8, so this calculated value is a boundary case. Do not silently change that to an inclusive clipping rule or invent a reason to select the keyed 0.6. The intended boundary treatment remains a clarification hold.</p>",
                    sources: [{ id: "TRAN808-00205", set: 20, question: 81 }]
                },
                {
                    html: "<p><strong>End ordinate and shift are different:</strong> for one 90 m transition and R = 500 m, L<sub>s</sub><sup>2</sup>/(6R) = <strong>2.700 m</strong>, while L<sub>s</sub><sup>2</sup>/(24R) = <strong>0.675 m</strong>. The first is the leading-order perpendicular ordinate from the original tangent, not the shift. Both formulas are approximations and use one spiral's length.</p>",
                    sources: [
                        { id: "TRAN808-00030", set: 4, question: 87 },
                        { id: "TRAN808-00206", set: 20, question: 82 }
                    ]
                },
                {
                    html: "<p><strong>The mechanical expression is nℓ<sup>2</sup>/(2R), with ℓ the wheelbase and n road lanes.</strong> The bank explanation wrongly associates 127R/254R with psychological widening. The legacy psychological term is V/(9.5√R) in its stated units. Tracks in the other stem must not be interpreted as a verified railway gauge-widening rule.</p>",
                    sources: [
                        { id: "TRAN808-00005", set: 2, question: 84 },
                        { id: "TRAN808-00204", set: 20, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>1.6693 m is a legacy formula result, not the NRS table allowance.</strong> The supplied two-lane, 6 m wheelbase, R = 42 m and V = 50 km/h case gives 0.8571429 + 0.8121229 = 1.6692658 m. NRS 2013 Table 9-4 gives 1.2 m for double-lane widening in the 40–60 m band. Name the method, and do not treat widening alone as validation of the specified speed.</p>",
                    sources: [{ id: "TRAN808-00031", set: 4, question: 88 }]
                },
                {
                    html: "<p><strong>At R = 75 m the compensation is min(1.4, 1.0) = 1.0% where applicable.</strong> NRS §10.1.2 does not require compensation below 4% grade. None of the options gives the computed deduction. The keyed 1.5% is not justified by applying a cap, and the compensation is a percentage-point grade reduction, not the resulting road gradient.</p>",
                    sources: [{ id: "TRAN808-00207", set: 20, question: 83 }]
                },
                {
                    html: "<p><strong>Passing visibility with two 1.2 m heights uses 9.6, not 4.4.</strong> For fractional N and L ≥ S, L = NS<sup>2</sup>/9.6 = NS<sup>2</sup>/(8H), with H = 1.2 m. The 4.4 stopping denominator corresponds approximately to 1.2/0.15 m eye/object heights. The equal-height formula is not a general stopping-object formula, and the length branch must be checked.</p>",
                    sources: [
                        { id: "TRAN808-00211", set: 20, question: 87 },
                        { id: "TRAN808-00212", set: 20, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>170 m is conditional and rounded:</strong> with S = 150 m, N = 1/30 and the unstated conventional stopping heights, rounded B = 4.4 gives L = 170.4545 m. L ≥ S is valid. Unrounded height geometry gives about 170.57 m. The stored answer does not establish a final minimum length under every sight-distance and code criterion.</p>",
                    sources: [{ id: "TRAN808-00209", set: 20, question: 85 }]
                },
                {
                    html: "<p><strong>The stated two-transition comfort model gives 19.1258 m, not 19.52 m.</strong> Use N = 0.005, v = 80/3.6 m/s and the explanation's added C = 0.6 m/s<sup>3</sup>. No option matches exactly; 19.22 is closer than 19.52. NRS's separate parabolic acceleration expression AV<sup>2</sup>/390 gives 8.2051 m for A = 0.5, but is only another model's comfort subcheck, not the adopted curve length. The dimensionally invalid alternative in the explanation is rejected.</p>",
                    sources: [{ id: "TRAN808-00210", set: 20, question: 86 }]
                },
                {
                    html: "<p><strong>Catch drains intercept upslope runoff; side drains are not limited to carriageway rainfall.</strong> Depending on the connected catchment, they also receive shoulder, cut-slope and adjacent hillside water. Determine the actual drainage network and avoid double-counting water already intercepted and diverted elsewhere.</p>",
                    sources: [{ id: "TRAN808-00020", set: 3, question: 88 }]
                },
                {
                    html: "<p><strong>An embankment alone does not pass floodwater underneath.</strong> Raising the road requires appropriate cross-drainage openings and assessment of afflux, overtopping, erosion and floodplain effects. A fill can obstruct flow and increase upstream water levels if these functions are not provided.</p>",
                    sources: [{ id: "TRAN808-00126", set: 13, question: 82 }]
                },
                {
                    html: "<p><strong>The water-table datum is subgrade, not finished pavement surface.</strong> NRS §13.8 states 1–1.2 m below subgrade level. A bare water-table height of 1.2 m does not define a usable elevation, and pavement-layer thickness cannot be ignored when comparing the two reference levels.</p>",
                    sources: [{ id: "TRAN808-00216", set: 21, question: 80 }]
                },
                {
                    html: "<p><strong>The shoulder-water premise is inconsistent.</strong> The stem says good drainage; the explanation assumes poor crossfall or drainage. Prolonged shoulder wetting can damage pavement even in an arid region, but the supplied wording does not establish that such damage is inevitable. Duration, infiltration paths and actual drainage performance matter.</p>",
                    sources: [{ id: "TRAN808-00217", set: 21, question: 81 }]
                },
                {
                    html: "<p><strong>300 mm is not a universal hydraulic design depth.</strong> The revised June 2024 note's Figures 3-4/3-5 visibly dimension 300–450 mm from channel top to internal bed. They do not prove the bank's alleged 1996 ideal/absolute-maximum clause. Section 3.5.5 separately specifies freeboard as the greater of 0.30 m, 20% of flow depth and velocity head, with a qualified 0.15 m substitution for the first term. Channel depth, flow depth, freeboard and excavation are distinct.</p>",
                    sources: [{ id: "IRRI951-00311", set: 30, question: 70 }]
                },
                {
                    html: "<p><strong>Neither a universal drain shape nor a 4% trigger is established.</strong> NRS prefers trapezoidal roadside drains in its context, while safer dish, covered or other sections may suit particular sites. Its provision of drains in cut sections does not depend on the bank's alleged 4% natural-cross-slope threshold. Do not confuse ground cross-slope with longitudinal drain grade or a lining-selection table.</p>",
                    sources: [
                        { id: "TRAN808-00218", set: 21, question: 82 },
                        { id: "TRAN808-00219", set: 21, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>Hairpin minimum radius is 15 m in NRS Table 9-3; 20 is its design speed in km/h.</strong> The stored 20 m radius conflicts with that edition. Actual long-vehicle feasibility also needs swept-path and widening checks. Hill-road slope stability is especially important, but national, feeder and district roads can all traverse hills; the alternatives are not exclusive design responsibilities.</p>",
                    sources: [
                        { id: "TRAN808-00090", set: 10, question: 80 },
                        { id: "TRAN808-00114", set: 1, question: 81 },
                        { id: "TRAN808-00024", set: 4, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>The duplicate tunnel keys conflict: 80% versus 75%.</strong> Neither is established by NRS 2013 §17.3, which gives 4% maximum and 0.4% minimum road-tunnel gradient. Below 300 m it describes one-way grade; above 300 m, two-way grades highest at the centre. That is a profile-arrangement threshold, not a ruling-gradient multiplier. Exactly 300 m remains unspecified in the strict wording; railway assumptions are not substituted.</p>",
                    sources: [
                        { id: "HYDR626-00168", set: 19, question: 63 },
                        { id: "HYDR626-00197", set: 22, question: 65 }
                    ]
                }
            ],
            references: [
                {
                    title: "Nepal Road Standard 2070, July 2013 — government-hosted primary PDF; geometric provisions and principal tables reviewed, with internal inconsistencies identified",
                    url: "https://idogorkha.gandaki.gov.np/upload/0a62be81f1df765a1fe9133924e7ce71/files/Nepal_Road_Standard_2070.pdf"
                },
                {
                    title: "MoPIT / National Road Safety Council — Road Safety Note 2, Designing Safer Side Drains, Final (Revised), June 2024; text reviewed and Table 2-1 and Figures 3-4/3-5 visually checked",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/ROAD%20SAFETY%20NOTE%202%20UPDATED_9xcggb5.pdf"
                },
                {
                    title: "FHWA HDS-5 — Hydraulic Design of Highway Culverts, third edition, April 2012; primary discussion of control, headwater, tailwater and design considerations, not Nepal adoption",
                    url: "https://www.fhwa.dot.gov/engineering/hydraulics/pubs/12026/hif12026.pdf"
                },
                {
                    title: "IIT Bombay, Tom V. Mathew — Sight Distances; reviewed teaching convention for ISD and minimum/desirable overtaking-zone lengths, not an NRS clause",
                    url: "https://www.civil.iitb.ac.in/tvm/nptel/303_SigDst.html"
                },
                {
                    title: "IIT Bombay, Tom V. Mathew — Cross Sectional Elements; reviewed conceptual and typical low-kerb discussion, not verified primary IRC requirements or Nepal adoption",
                    url: "https://www.civil.iitb.ac.in/tvm/nptel/302_CroSecEle.html"
                }
            ]
        }
    });
})();