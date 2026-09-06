(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0702: {
            code: "ACiE0702",
            questionCount: 52,
            blocks: [
                {
                    id: "canal-network-and-functional-roles",
                    title: "Trace the irrigation network by function",
                    html: "<p>A canal network conveys water from an intake through progressively smaller distribution channels to the fields. A typical hierarchy is main canal, branch canal, distributary, minor and watercourse, although local naming and administrative boundaries vary. Identify where water enters, where it is divided and which land each reach serves before assigning a label.</p>" +
                        "<table><thead><tr><th scope='col'>Functional description</th><th scope='col'>Meaning and limitation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Feeder canal</th><td>Primarily supplies another canal, reservoir or distribution system; direct irrigation is not its defining function.</td></tr>" +
                        "<tr><th scope='row'>Carrier canal</th><td>Both supplies downstream canals and serves irrigation along its course.</td></tr>" +
                        "<tr><th scope='row'>Watercourse or field channel</th><td>Carries irrigation water from an outlet towards individual fields. Farmer maintenance does not remove it from the irrigation system.</td></tr>" +
                        "<tr><th scope='row'>Navigation canal</th><td>Provides a navigable waterway. Relatively small current velocities generally assist vessel operation; required depth, bank protection and operating controls remain separate considerations.</td></tr></tbody></table>" +
                        "<p>FAO's irrigation-system description explicitly includes field ditches in distribution. Responsibility for maintaining them may lie with farmers or a water-user organization under the applicable arrangements, rather than with the agency maintaining the main canal. <strong>Ownership, maintenance responsibility and hydraulic purpose are different classifications.</strong></p>",
                    sources: [
                        { id: "IRRI951-00025", set: 4, question: 70 },
                        { id: "IRRI951-00147", set: 15, question: 69 },
                        { id: "IRRI951-00142", set: 14, question: 76 },
                        { id: "IRRI951-00140", set: 14, question: 74 },
                        { id: "IRRI951-00138", set: 14, question: 72 }
                    ]
                },
                {
                    id: "canal-supply-and-economic-classifications",
                    title: "Supply, regulation and economic purpose are separate axes",
                    html: "<p>A canal may simultaneously be a lined carrier canal, follow a contour alignment and operate under a perennial supply scheme. These terms answer different questions. Do not infer the material, route, ownership or actual annual delivery schedule from one classification alone.</p>" +
                        "<table><thead><tr><th scope='col'>Term</th><th scope='col'>Useful interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Perennial supply</th><td>A system intended to obtain a sustained or regulated supply rather than only high-stage flood diversions. Actual availability still depends on the source, allocations, storage and operating schedule.</td></tr>" +
                        "<tr><th scope='row'>Inundation canal</th><td>The conventional textbook arrangement takes water when river stage is sufficiently high, without permanent diversion headworks maintaining the required head. Ancillary controls do not by themselves make the source perennial.</td></tr>" +
                        "<tr><th scope='row'>Permanent canal</th><td>In the bank's usual contrast, a developed system with permanent regulation and distribution works. Permanent infrastructure is not a promise of uninterrupted year-round flow.</td></tr>" +
                        "<tr><th scope='row'>Productive or protective</th><td>Historical economic and service-purpose labels: revenue recovery under an identified appraisal convention versus protection against agricultural scarcity. They do not describe channel geometry.</td></tr></tbody></table>" +
                        "<p>Ice- or glacier-fed rivers can contribute sustained flows, but melt, rainfall and baseflow vary seasonally. Neither that source label nor the mere presence or absence of a regulator proves that every monthly irrigation requirement can be met. Similarly, covering running costs alone is not a universal economic definition of a productive project; the chosen convention may include capital-related charges.</p>",
                    sources: [
                        { id: "IRRI951-00139", set: 14, question: 73 },
                        { id: "IRRI951-00141", set: 14, question: 75 },
                        { id: "IRRI951-00256", set: 25, question: 68 },
                        { id: "IRRI951-00257", set: 25, question: 69 },
                        { id: "IRRI951-00143", set: 14, question: 77 }
                    ]
                },
                {
                    id: "canal-ridge-alignment-and-command",
                    title: "Ridge alignment, alluvial plains and hydraulic command",
                    html: "<p>A ridge or watershed alignment follows the divide between drainage areas. In the ideal terrain model, natural drainage falls away on both sides, so the canal avoids crossing those drains and can command land on both sides by gravity. This explains its attraction on suitable plains; it does not mean that every irrigation canal must follow a watershed.</p>" +
                        "<p><strong>Hydraulic command requires adequate water level as well as plan proximity.</strong> The canal must retain sufficient head through outlets and field channels to serve the intended land. A survey must establish ridge continuity, longitudinal grade, saddles, ground levels and obstacles. A mapped ridge name alone cannot prove two-sided service or the absence of every crossing.</p>" +
                        "<p>Alluvial plains often offer extensive agricultural land, workable excavation and gentle gradients. These are reasons canal irrigation may be attractive, not a guarantee of fertile soil, low seepage or stable boundaries. Sand, silt and clay deposits can behave very differently. Compare source reliability, soil properties, sediment and drainage as well as excavation cost.</p>" +
                        "<p>A loop in a ridge line is a plan-form feature, <strong>not necessarily a depression</strong>. A distributary might serve land missed by a main alignment, but that conclusion requires a feasible route and sufficient head; it does not follow from the word loop. The separate bank abbreviation <strong>NMF is undefined</strong>, so no expansion or special alignment rule is assumed for it.</p>",
                    sources: [
                        { id: "IRRI951-00021", set: 1, question: 69 },
                        { id: "IRRI951-00022", set: 3, question: 78 },
                        { id: "IRRI951-00127", set: 13, question: 72 },
                        { id: "IRRI951-00137", set: 14, question: 71 },
                        { id: "IRRI951-00145", set: 14, question: 79 },
                        { id: "IRRI951-00149", set: 15, question: 71 },
                        { id: "IRRI951-00331", set: 31, question: 77 }
                    ]
                },
                {
                    id: "canal-contour-side-slope-and-crossings",
                    title: "Read the terrain before deciding on drainage crossings",
                    html: "<p>Alignment affects the number of natural drainage paths intercepted, the land served and the difference between available ground fall and acceptable canal fall. The following are terrain-based tendencies, not guarantees applicable to every route.</p>" +
                        "<table><thead><tr><th scope='col'>Alignment</th><th scope='col'>Drainage and longitudinal-grade implications</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Ridge</th><td>Ideally separates catchments and avoids their drains. Departures from the divide, saddles and local works still need examination.</td></tr>" +
                        "<tr><th scope='row'>Contour</th><td>Tracks the hillside contour pattern while retaining the necessary canal grade; it is not an exact level contour. Downslope streams commonly cross its route, often creating several cross-drainage sites.</td></tr>" +
                        "<tr><th scope='row'>Side-slope</th><td>Runs approximately down the general slope, crossing contours and potentially running parallel to natural drainage. Cross-drainage works may be avoided where that geometry holds, while excess ground fall may require controlled drops.</td></tr></tbody></table>" +
                        "<p>The crossing type follows relative canal and drain levels, flood conditions, clearance and hydraulic losses. An <strong>aqueduct</strong> carries canal water above a drain; in a siphon aqueduct the drain passes below under pressure. An <strong>inverted canal siphon</strong> carries canal flow through a depressed pressure conduit beneath an obstruction. These arrangements are not synonyms, and a contour alignment does not automatically select one of them.</p>" +
                        "<p>FAO describes separate open flumes, culverts and inverted siphons because their hydraulic arrangements differ. A preliminary count of crossings is useful for route comparison, but final selection needs the surveyed levels and relevant canal and drainage discharges.</p>",
                    sources: [
                        { id: "IRRI951-00138", set: 14, question: 72 },
                        { id: "IRRI951-00146", set: 15, question: 68 },
                        { id: "IRRI951-00148", set: 15, question: 70 },
                        { id: "IRRI951-00252", set: 24, question: 76 },
                        { id: "IRRI951-00254", set: 24, question: 78 },
                        { id: "IRRI951-00255", set: 24, question: 79 }
                    ]
                },
                {
                    id: "canal-levels-earthwork-and-berms",
                    title: "Separate flow depth, cutting depth and berm geometry",
                    html: "<p>Compare the bed level, natural surface level <strong>NSL</strong> and full supply level <strong>FSL</strong> at the same cross-section. If the bed is above NSL, the water section is wholly raised in embankment. The usual mixed cutting-and-filling case needs <strong>bed level &lt; NSL &lt; FSL</strong>. FSL above NSL alone is insufficient because it also occurs when the bed itself is above ground.</p>" +
                        "<p>For a symmetrical trapezoidal excavation under level ground, let B be bottom width, d<sub>c</sub> the vertical <strong>cutting depth</strong> and z<sub>c</sub> the horizontal-to-vertical cutting side slope. The excavation area is <strong>A<sub>cut</sub> = Bd<sub>c</sub> + z<sub>c</sub>d<sub>c</sub><sup>2</sup></strong>: a rectangle plus two triangles. This repairs the bank's inconsistent capital-D/lower-case-d notation without equating cutting depth to water depth. Sloping ground or unequal side slopes require the actual surveyed geometry.</p>" +
                        "<p>A berm is a horizontal bench or strip incorporated into the canal-bank or cutting arrangement. Its position and width can reduce adverse loading near a cut, improve stability and access, and contribute to an appropriate seepage or erosion-control layout. A berm is not intrinsically an impermeable barrier or a substitute for wave protection.</p>" +
                        "<p>Archived <strong>IS 7112:2002 §4.6</strong> gives case-dependent guidance involving widths of twice or three times full supply depth, with different berm elevations for mixed cutting/filling and fully raised sections. The bank's bare 2d/3d statements are <strong>not adopted as universal or verified Nepal requirements</strong>. The correct configuration, soil stability, seepage conditions and governing specification must first be established.</p>",
                    sources: [
                        { id: "BASI674-00377", set: 29, question: 14 },
                        { id: "IRRI951-00324", set: 31, question: 70 }
                    ]
                },
                {
                    id: "canal-offtake-head-and-flow-control",
                    title: "Branch discharge depends on available head and controls",
                    html: "<p>Water enters a branch because the connected system has an available energy difference and an open hydraulic path. For a free surface, total head can be written <strong>H = water-surface elevation + αV<sup>2</sup>/(2g)</strong>, where α accounts for the velocity distribution. Between parent and branch sections, the available head must accommodate the offtake, gate, transition and reach losses.</p>" +
                        "<p>A favourable branch gradient can increase conveyance under otherwise comparable conditions, but a steeper alignment does not alone determine the branch discharge. Gate opening, sill elevation, upstream and downstream stages, submergence, section geometry and downstream restrictions can govern. Closing a regulator can prevent diversion even where the branch bed falls steeply.</p>" +
                        "<p>The bank's <strong>0.15 m difference in FSL</strong> should be read as a contextual allowance, not a universal hydraulic law. A design must establish the actual head loss and operating level range. Water-surface fall is also not necessarily equal to total-head loss when velocity heads differ.</p>" +
                        "<p>Prepare the canal longitudinal profile with the required field command and control levels in view. If ground fall exceeds the acceptable distributed friction fall, suitably analysed falls or other control works may be required; simply steepening every reach can sacrifice command or create excessive velocity.</p>",
                    sources: [
                        { id: "IRRI951-00171", set: 17, question: 70 },
                        { id: "IRRI951-00260", set: 25, question: 72 }
                    ]
                },
                {
                    id: "canal-trapezoid-depth-radius-and-area",
                    title: "Water depth, hydraulic radius and hydraulic depth differ",
                    html: "<p>For a symmetrical trapezoid, define b as internal bed width, y as vertical water depth and <strong>z as horizontal distance per unit vertical rise</strong>. Thus 1.5:1 H:V means z = 1.5. Measure dimensions at the water-facing surface of any lining. The longitudinal bed slope is a different quantity from z.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Expression and SI unit</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Flow area</th><td>A = y(b + zy), in m<sup>2</sup></td></tr>" +
                        "<tr><th scope='row'>Wetted perimeter</th><td>P = b + 2y√(1 + z<sup>2</sup>), in m; the free surface is excluded.</td></tr>" +
                        "<tr><th scope='row'>Top water width</th><td>T = b + 2zy, in m</td></tr>" +
                        "<tr><th scope='row'>Hydraulic radius</th><td>R = A/P, in m; used in resistance equations.</td></tr>" +
                        "<tr><th scope='row'>Hydraulic depth</th><td>D<sub>h</sub> = A/T, in m; distinct from R and generally from y.</td></tr>" +
                        "<tr><th scope='row'>Continuity</th><td>Q = AV, with mean V in m/s and Q in m<sup>3</sup>/s.</td></tr></tbody></table>" +
                        "<p><em>Supplementary geometry example:</em> b = 4 m, y = 2 m and z = 1.5 give A = <strong>14 m<sup>2</sup></strong>, P ≈ <strong>11.211 m</strong> and T = <strong>10 m</strong>. Consequently R ≈ <strong>1.249 m</strong> and D<sub>h</sub> = <strong>1.400 m</strong>, neither equal to the 2 m water depth.</p>" +
                        "<p>Freeboard lies above the specified design water level. It is not normally included in A or P when calculating capacity at that level. A quoted total depth must therefore be separated into water depth and the stated allowance before applying Manning's equation.</p>",
                    sources: [
                        { id: "IRRI951-00131", set: 13, question: 76 },
                        { id: "IRRI951-00132", set: 13, question: 77 }
                    ]
                },
                {
                    id: "canal-resistance-and-normal-flow",
                    title: "Use the friction slope in the resistance equation",
                    html: "<p>In the SI Manning form, <strong>V = (1/n)R<sup>2/3</sup>S<sub>f</sub><sup>1/2</sup></strong> and Q = AV. R is in metres, V in m/s, and S<sub>f</sub> is friction-head loss per unit length, expressed as m/m. The coefficient n is the empirical rugosity or roughness coefficient, not viscosity or capillarity; with dimensional quantities in this form its units are s/m<sup>1/3</sup>.</p>" +
                        "<p>Chezy's corresponding form is <strong>V = C√(RS<sub>f</sub>)</strong>. Coefficients must belong to their stated equation and unit system. In particular, the Darcy friction factor used in some resistance equations is not Lacey's sediment factor, despite both sometimes being denoted f.</p>" +
                        "<p>For <strong>steady, uniform flow in a prismatic reach</strong>, the energy/friction slope, water-surface slope and bed slope coincide: S<sub>f</sub> = S<sub>w</sub> = S<sub>0</sub>. Near regulators, backwater, transitions or other controls, that equality cannot simply be assumed. USBR emphasizes that downstream operations may determine depth and that measured stages or a suitable nonuniform-flow analysis may be necessary.</p>" +
                        "<p><em>Supplementary sensitivity calculation:</em> keeping A, R and S<sub>f</sub> fixed while changing n from 0.018 to 0.015 gives Q<sub>new</sub>/Q<sub>old</sub> = 0.018/0.015 = <strong>1.20</strong>. The 20% increase is conditional on those fixed quantities and an adequate supply and control system; it is not a guaranteed field outcome of installing lining.</p>",
                    sources: [
                        { id: "IRRI951-00133", set: 13, question: 78 },
                        { id: "IRRI951-00134", set: 13, question: 79 }
                    ]
                },
                {
                    id: "canal-sediment-balance-and-regime",
                    title: "Stable does not mean that sediment stops moving",
                    html: "<p><strong>Aggradation</strong> is a rise in bed level associated with net sediment accumulation; <strong>degradation</strong> is bed lowering through net erosion. Compare sediment entering and leaving the reach on a consistent mass or solid-volume basis, including relevant lateral inputs. Sediment can pass through a reach continuously while its average bed level remains approximately stable.</p>" +
                        "<p>Lacey's ideal true regime concerns an alluvial channel whose <strong>bed and banks can adjust</strong> towards a stable section and gradient under sustained discharge, sediment charge and sediment grade. Charge describes the transported quantity or concentration on a defined basis; grade describes particle characteristics. The ideal is a dynamic sediment balance, not a no-motion condition for every grain.</p>" +
                        "<p>An unlined canal cut in non-erodible rock does not gain adjustable alluvial boundaries merely by being unlined. Conversely, a lined canal still carries and may deposit sediment, but its fixed section is not selected by assuming unrestricted regime adjustment. Resistance, sediment transport and the stability of the particular boundaries need separate attention.</p>" +
                        "<p><strong>IS 7112:2002 §4.8 and Annex A</strong> explicitly discuss limitations of regime relations, including sediment-factor selection and departures in real stable canals. Seasonal water and sediment variations mean that ideal true regime is seldom realized exactly. A stable design must be assessed over its operating range, not only at one favourable discharge.</p>",
                    sources: [
                        { id: "IRRI951-00020", set: 3, question: 77 },
                        { id: "IRRI951-00029", set: 4, question: 74 },
                        { id: "IRRI951-00172", set: 17, question: 71 }
                    ]
                },
                {
                    id: "canal-kennedy-syllabus-extension",
                    title: "Kennedy's critical-velocity method — syllabus extension",
                    html: "<p><strong>Syllabus extension: none of these 52 assigned records directly supplies a Kennedy calculation.</strong> The following method and illustration cover the explicitly listed official syllabus topic without attaching an invented bank citation.</p>" +
                        "<p>In the customary metre-second empirical form, <strong>V<sub>K</sub> = 0.55m<sub>K</sub>y<sup>0.64</sup></strong>, where V<sub>K</sub> is the adopted non-silting/non-scouring mean velocity in m/s, y is water depth in metres and m<sub>K</sub> is the dimensionless critical-velocity ratio. Kennedy related sediment suspension to bed-generated turbulence. The multiplier represents sediment-related adjustment from the reference relation; it is neither Manning's n nor Lacey's f.</p>" +
                        "<p>The word critical here does <strong>not</strong> mean the open-channel critical-flow condition associated with Froude number one. Nor does the equation alone provide bed width and longitudinal slope. For trial y and an independently justified m<sub>K</sub>, calculate V<sub>K</sub>, then A = Q/V<sub>K</sub>. At a selected stable side slope z, b = A/y − zy; reject a nonpositive width. Obtain R from the actual geometry and reconcile the required friction slope with a suitable resistance relation and the available profile.</p>" +
                        "<p><em>Supplementary illustration, not bank data:</em> y = 1 m, m<sub>K</sub> = 1 and Q = 1.10 m<sup>3</sup>/s give V<sub>K</sub> = <strong>0.55 m/s</strong> and A = <strong>2.00 m<sup>2</sup></strong>. Choosing z = 1 gives b = <strong>1.00 m</strong>. A justified roughness, slope, sediment assessment and bank-stability check are still needed. The empirical velocity relation is not a complete canal design.</p>",
                    sources: []
                },
                {
                    id: "canal-lacey-silt-factor-and-size",
                    title: "Lacey's factor needs a defined sediment size and unit convention",
                    html: "<p>The bank uses <strong>f = 1.76√d<sub>mm</sub></strong>, where d<sub>mm</sub> is the numerical value of the representative grain diameter in millimetres. Equivalently, write f = 1.76√[d/(1 mm)] to make the normalization explicit. Establish which representative size the selected correlation requires; an effective size D<sub>10</sub>, a median and a mean cannot silently be interchanged.</p>" +
                        "<p>Lacey's f is an <strong>empirically calibrated sediment parameter</strong>. Although tabulated as a bare numerical factor in this convention, it is not a universal dimensionless physical invariant independent of the adopted empirical units and calibration. The constants must change if the underlying numerical unit convention changes. It is also not sediment concentration, Manning roughness or a Darcy friction factor.</p>" +
                        "<table><thead><tr><th scope='col'>Representative diameter used in this relation</th><th scope='col'>Calculated f</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0.35 mm, supplied bank data</th><td>1.76√0.35 ≈ 1.041230</td></tr>" +
                        "<tr><th scope='row'>1.00 mm, supplied bank data</th><td>1.760000</td></tr>" +
                        "<tr><th scope='row'>Reference f = 1, inverse calculation</th><td>d = (1/1.76)<sup>2</sup> ≈ 0.322831 mm</td></tr></tbody></table>" +
                        "<p>The historical word silt in the factor's name does not classify a particle as geotechnical silt. The correct f = 1.76 result for 1 mm therefore does not make that diameter the conventional f = 1 reference material or establish a modern soil-classification boundary.</p>",
                    sources: [
                        { id: "IRRI951-00043", set: 5, question: 77 },
                        { id: "IRRI951-00044", set: 5, question: 78 }
                    ]
                },
                {
                    id: "canal-lacey-equations-and-consistency",
                    title: "Use one stated regime convention without overconstraining it",
                    html: "<p>The following are the specific rounded empirical forms used to check the supplied bank calculations. Use <strong>Q in m<sup>3</sup>/s</strong>, f from the stated millimetre convention, P in metres, V in m/s and dimensionless longitudinal slope S. They are not unit-free identities or automatic design rules for lined and non-alluvial channels.</p>" +
                        "<table><thead><tr><th scope='col'>Estimated quantity</th><th scope='col'>Bank formula</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Regime wetted perimeter</th><td>P = 4.75√Q</td></tr>" +
                        "<tr><th scope='row'>Regime mean velocity</th><td>V = (Qf<sup>2</sup>/140)<sup>1/6</sup></td></tr>" +
                        "<tr><th scope='row'>Regime longitudinal slope</th><td>S = f<sup>5/3</sup> / (3340Q<sup>1/6</sup>)</td></tr></tbody></table>" +
                        "<p>An additional commonly used rounded estimate, <strong>R ≈ 0.47(Q/f)<sup>1/3</sup></strong>, supplies useful syllabus context; it is not explicitly worked in these 52 records. The archived unlined-canal standard discusses regime radius and perimeter estimates, but damaged OCR exponents are not used to redefine the clearly stated bank formula forms above.</p>" +
                        "<p>Choose a consistent design procedure, then enforce <strong>Q = AV, R = A/P</strong> and the actual section geometry. For example, using estimated V and P gives A = Q/V and the corresponding geometric R = A/P. Do not additionally force a separately rounded R estimate, every velocity relation and every perimeter relation to hold exactly: rounding and empirical fitting can make the system overdetermined.</p>" +
                        "<p>Side slopes require independent stability justification. A small discrepancy between rounded empirical estimates is not permission to alter sediment size or mix coefficients merely to reproduce an answer option.</p>",
                    sources: [
                        { id: "IRRI951-00035", set: 5, question: 69 },
                        { id: "IRRI951-00039", set: 5, question: 73 },
                        { id: "IRRI951-00040", set: 5, question: 74 },
                        { id: "IRRI951-00172", set: 17, question: 71 }
                    ]
                },
                {
                    id: "canal-lacey-slope-and-velocity-checks",
                    title: "Worked bank checks: longitudinal slope and velocity",
                    html: "<p><strong>Slope calculation, conditional on the sediment-size assumption:</strong> the source supplies D<sub>10</sub> = 2 mm and Q = 2 m<sup>3</sup>/s. D<sub>10</sub> alone does not establish the mean or other representative diameter required by a chosen correlation. <em>If</em> 2 mm is expressly adopted as that representative size, f = 1.76√2 = <strong>2.489016</strong>.</p>" +
                        "<p>Then S = 2.489016<sup>5/3</sup> / (3340 × 2<sup>1/6</sup>) ≈ <strong>0.001219349</strong>, giving 1/S ≈ <strong>820.110</strong>. The corresponding slope is <strong>1 in 820.11, not 1 in 720</strong>. As an algebraic cross-check, with d = Q = 2 in their stipulated numerical units, S<sup>3</sup> = 4 × 1.76<sup>5</sup>/3340<sup>3</sup>. A vague range near the keyed option cannot replace this substitution.</p>" +
                        "<p><strong>Velocity calculation using the actual supplied mean size:</strong> Q = 5 m<sup>3</sup>/s and d = 0.5 mm give f = <strong>1.244508</strong> and f<sup>2</sup> = <strong>1.5488</strong>. Hence Qf<sup>2</sup> = 7.744 and V = (7.744/140)<sup>1/6</sup> = <strong>0.617267 m/s</strong>.</p>" +
                        "<p>The stored 0.532 m/s velocity is not obtained from the stated formula, and none of that item's offered values matches the result. These calculations expose the discrepancy without changing any original question or answer. The first calculation remains conditional because its grain-size statistic is unresolved.</p>",
                    sources: [
                        { id: "IRRI951-00039", set: 5, question: 73 },
                        { id: "IRRI951-00040", set: 5, question: 74 }
                    ]
                },
                {
                    id: "canal-normal-scour-and-waterway-datums",
                    title: "Normal-scour depth and perimeter need clear meanings",
                    html: "<p>When the known flow quantity is discharge per unit width, use <strong>q in m<sup>3</sup>/s per metre</strong>, equivalently m<sup>2</sup>/s, rather than total Q. The bank's normal-scour estimate is <strong>d<sub>n</sub> = 1.35(q<sup>2</sup>/f)<sup>1/3</sup></strong>, with its stated empirical metre-second convention.</p>" +
                        "<p>For the supplied q = 3 and f = 1.2, q<sup>2</sup>/f = 7.5 and d<sub>n</sub> = 1.35 × 7.5<sup>1/3</sup> = <strong>2.642536 m</strong>. This agrees with 2.64 m. Interpret it as depth <strong>from the relevant water surface to the estimated scoured bed</strong>, not extra erosion below an unspecified existing bed. Existing bed and water-level datums are needed to find additional lowering. Local scour at bends, piers or constrictions needs separate assessment; no local amplification factor is implied here.</p>" +
                        "<p>The other bank calculation uses P = 4.75√Q. <strong>Only if the intended discharge is 3600 m<sup>3</sup>/s</strong>, √Q = 60 and P = <strong>285 m</strong>. The printed ounces is not a usable discharge unit. Even fluid ounces would require an identified volume convention and a time basis; they cannot be silently read as cumecs.</p>" +
                        "<p>P is a <strong>wetted perimeter</strong>, not universally the actual bridge opening or canal bed width. In a very wide alluvial section, a perimeter-based estimate may approximate a preliminary waterway width. Bridge approval additionally needs flood hydraulics, afflux, obstructions, local scour, foundation and other design checks. The 285 m arithmetic does not supply those checks.</p>",
                    sources: [
                        { id: "IRRI951-00035", set: 5, question: 69 },
                        { id: "IRRI951-00038", set: 5, question: 72 }
                    ]
                },
                {
                    id: "canal-tractive-stress-and-force-balance",
                    title: "Obtain boundary stress from force equilibrium",
                    html: "<p>For a small-slope, steady uniform reach of length L, the downslope water-weight component is approximately γALS<sub>0</sub>. Balancing it against the integrated boundary resistance gives <strong>τ<sub>avg</sub>PL = γALS<sub>0</sub></strong>, neglecting surface wind shear. Therefore <strong>τ<sub>avg</sub> = γRS<sub>f</sub></strong>, with S<sub>f</sub> = S<sub>0</sub> for this uniform reach and R = A/P.</p>" +
                        "<p>This is an average over the wetted boundary. <strong>Uniform flow does not imply uniform stress on the bed and banks.</strong> Section shape and sidewall effects alter the distribution; bends and local disturbances can increase particular demands. For a sufficiently wide channel, the bed approximation becomes <strong>τ<sub>bed</sub> ≈ γyS<sub>0</sub></strong>. Substituting y for R without the wide-channel assumption is not generally valid.</p>" +
                        "<p><strong>Actual bank data:</strong> y = 2.0 m, S<sub>0</sub> = 1/10000 and γ = 9810 N/m<sup>3</sup> give τ<sub>bed</sub> ≈ 9810 × 2 × 0.0001 = <strong>1.962 N/m<sup>2</sup></strong>, or 1.962 Pa. This is approximately <strong>0.200 kgf/m<sup>2</sup></strong>, using about 9.81 N per kgf. It is not 1.962 kg/m<sup>2</sup>; mass per area is not stress.</p>" +
                        "<p>At the stipulated limiting slope, this is the implied limiting bed demand in the wide-channel model. To establish a permissible material stress independently, obtain appropriate erosion-resistance data and safety allowances. Silt-free water does not make the soil erosion-proof or provide the missing soil-property tests.</p>",
                    sources: [{ id: "HYDR626-00268", set: 29, question: 65 }]
                },
                {
                    id: "canal-granular-side-slope-resistance",
                    title: "An inclined granular bank has reduced permissible stress",
                    html: "<p>A loose grain on an inclined bank already experiences a downslope component of its submerged weight. Part of its frictional resistance is therefore committed to resisting gravity before flowing water adds a tractive demand. This is why the permissible hydraulic stress on a granular side slope is lower than for the corresponding horizontal bed material.</p>" +
                        "<p>For the idealized noncohesive-grain model, <strong>K<sub>τ</sub> = τ<sub>allow,side</sub>/τ<sub>allow,level bed</sub> = √[1 − sin<sup>2</sup>θ/sin<sup>2</sup>φ]</strong>. Here θ is the bank angle measured from horizontal and φ is the angle of repose used by the model. The square-root expression requires θ &lt; φ for positive remaining resistance.</p>" +
                        "<p>Using the supplied θ = 30° and φ = 36°, sin<sup>2</sup>θ = 0.25 and sin<sup>2</sup>φ ≈ 0.3454915. Hence <strong>K<sub>τ</sub> = 0.525731</strong>, agreeing with the current rounded value 0.53. The limiting cases are informative: K<sub>τ</sub> = 1 on a level surface and tends to zero as θ approaches φ.</p>" +
                        "<p>This is an <strong>allowable-stress ratio, not the ratio of actual applied wall and bed stresses</strong>. Determine applied side and bed stresses separately and compare each with its appropriate resistance. The formula contains no cohesion, vegetation, armouring or lining-strength term; it must not be applied unchanged to cohesive banks or structural linings.</p>",
                    sources: [{ id: "IRRI951-00045", set: 5, question: 79 }]
                },
                {
                    id: "canal-best-trapezoid-and-half-hexagon",
                    title: "The best fixed-slope trapezoid is not always a half-hexagon",
                    html: "<p>Hydraulic economy minimizes wetted perimeter for a required flow area, thereby maximizing R when roughness and slope are fixed. It is a geometric optimization, not automatically the minimum cost of excavation, lining, land, maintenance and bank stabilization.</p>" +
                        "<p>At fixed area A and side slope z, substitute b = A/y − zy into the perimeter: <strong>P = A/y + [2√(1 + z<sup>2</sup>) − z]y</strong>. Setting its derivative with respect to y to zero gives A = [2√(1 + z<sup>2</sup>) − z]y<sup>2</sup>. Consequently the best trapezoid <strong>for that fixed z</strong> has <strong>b = 2y[√(1 + z<sup>2</sup>) − z]</strong> and <strong>R = y/2</strong>.</p>" +
                        "<p>Only if z is also free to vary does minimizing 2√(1 + z<sup>2</sup>) − z give <strong>z = 1/√3</strong>. The sides then make 60° with the horizontal and the section is a half-regular-hexagon. The bank's assumed <strong>z = 1.5 is not that half-hexagon</strong>, although a best section can still be calculated with z held at 1.5.</p>" +
                        "<p>In practice, soil stability, lining support and available land often fix or constrain z before hydraulic sizing. Do not steepen an unsupported soil bank merely to attain the unconstrained mathematical optimum.</p>",
                    sources: [{ id: "IRRI951-00131", set: 13, question: 76 }]
                },
                {
                    id: "canal-twenty-cumec-worked-section",
                    title: "20 cumecs: state the section criterion before solving",
                    html: "<p>The supplied hydraulic data are Q = <strong>20 m<sup>3</sup>/s</strong>, n = <strong>0.015</strong> and slope <strong>1/7000</strong>. For a conditional worked solution, assume uniform flow, choose z = <strong>1.5 H:1 V</strong> and choose the hydraulically best section <em>at that fixed side slope</em>. The last two choices are explicit design assumptions, not sufficient information supplied by the discharge alone.</p>" +
                        "<p>Let c = 2√(1 + z<sup>2</sup>) − z = <strong>2.105551</strong>. Then A = cy<sup>2</sup>, R = y/2 and Manning gives Q = (c/n)y<sup>2</sup>(y/2)<sup>2/3</sup>√S<sub>f</sub>. Solving, <strong>y = [Qn 2<sup>2/3</sup> / (c√S<sub>f</sub>)]<sup>3/8</sup></strong>.</p>" +
                        "<table><thead><tr><th scope='col'>Conditional result</th><th scope='col'>Value</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Water depth y</th><td>3.012116 m</td></tr>" +
                        "<tr><th scope='row'>Bed width b = 2y[√3.25 − 1.5]</th><td>1.823991 m</td></tr>" +
                        "<tr><th scope='row'>Hydraulic radius R = y/2</th><td>1.506058 m</td></tr>" +
                        "<tr><th scope='row'>Explicitly assumed allowance above FSL</th><td>0.75 m</td></tr>" +
                        "<tr><th scope='row'>Depth to top of lining with that allowance</th><td>3.762116 m</td></tr></tbody></table>" +
                        "<p>Archived <strong>IS 10430:2000 §8.2</strong> measures its lined-canal freeboard from FSL to the top of lining and lists 0.75 m for discharge above 10 cumecs. Applying that allowance here is an explicitly identified additional assumption; the actual bank crest and other allowances still require definition.</p>" +
                        "<p>The bank's 3.77 m could be interpreted only as an approximate total depth after an added allowance, not the Manning water depth or the separately defined hydraulic depth A/T. Even 3.762116 rounds conventionally to 3.76 m at two decimals, so the similarity does not prove how 3.77 was obtained. No unique section follows until the chosen criterion, side slope and depth definition are stated.</p>",
                    sources: [{ id: "IRRI951-00131", set: 13, question: 76 }]
                },
                {
                    id: "canal-four-hundred-cumec-capacity-check",
                    title: "400 cumecs: check both continuity and Manning capacity",
                    html: "<p>Use the actual supplied Q = <strong>400 m<sup>3</sup>/s</strong>, z = <strong>1</strong>, n = <strong>0.012</strong>, S<sub>f</sub> = <strong>1/6000</strong> under uniform flow, and the problem's velocity limit of <strong>3 m/s</strong>. Continuity alone requires A ≥ Q/3 = <strong>133.333333 m<sup>2</sup></strong>. That is necessary but not sufficient: the same section must also convey Q under the stated resistance and slope.</p>" +
                        "<p>For a generous upper-bound check, temporarily treat each offered <em>total</em> depth as entirely water depth. Any positive freeboard would reduce the available flow area and Manning capacity further.</p>" +
                        "<table><thead><tr><th scope='col'>Offered b; assumed water y, in m</th><th scope='col'>A = y(b + y), m<sup>2</sup></th><th scope='col'>Necessary area check</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>15.0; 6.30</th><td>134.1900</td><td>Passes area alone; Manning capacity is only about 369 m<sup>3</sup>/s.</td></tr>" +
                        "<tr><th scope='row'>14.2; 6.28</th><td>128.6144</td><td>Insufficient at the 3 m/s cap.</td></tr>" +
                        "<tr><th scope='row'>14.0; 6.50</th><td>133.2500</td><td>Still below 133.333333.</td></tr>" +
                        "<tr><th scope='row'>14.4; 6.25</th><td>129.0625</td><td>Insufficient at the 3 m/s cap.</td></tr></tbody></table>" +
                        "<p>For the keyed b = 14.2 m, y = 6.28 m pair, calculate P = 14.2 + 2 × 6.28√2 and R = 128.6144/P. Manning gives <strong>V = 2.721712 m/s</strong> and <strong>Q = 350.051352 m<sup>3</sup>/s</strong>. Forcing 400 through its area would instead require <strong>3.110072 m/s</strong>, above the cap. Thus <strong>none of the four options satisfies all the supplied conditions</strong>.</p>" +
                        "<p><em>Conditional alternative, not selection of an offered option:</em> holding b = 14.2 m and solving the Manning discharge equation for y gives <strong>y = 6.759075 m</strong> and <strong>V = 2.823584 m/s</strong>, with freeboard specified separately. The velocity limit is an inequality, not an instruction to force V = 3 or a criterion that uniquely fixes b and y.</p>" +
                        "<p>This alternative is only a hydraulic example under the question's 3 m/s limit. Its velocity exceeds the separately cited 2.7 m/s concrete guidance; if that guidance governs the project, further redesign is required. Neither the example nor the failed options establish lining or bank safety.</p>",
                    sources: [{ id: "IRRI951-00132", set: 13, question: 77 }]
                },
                {
                    id: "canal-lining-benefits-and-residual-risks",
                    title: "Lining improves conveyance without eliminating canal risks",
                    html: "<p>A sound lining can reduce seepage, help retain the section, resist erosion and suppress vegetation rooted through the bed or banks. Where it provides a smoother boundary, lower n permits greater mean velocity and discharge for unchanged A, R and friction slope. Alternatively, a smaller section may pass the same discharge if the resulting velocity and other design conditions are acceptable.</p>" +
                        "<p>Water saved from avoidable conveyance losses can increase the <strong>area actually irrigated or the reliability of supply</strong> within a feasible command. It does not automatically redraw the gross command area, alter every outlet elevation or make higher land commandable. Distinguish improved service from a change in the topographic boundary of GCA.</p>" +
                        "<p>Reduced seepage can reduce canal-induced groundwater recharge and waterlogging risk. Leakage through joints, cracks or damaged transitions remains possible, and waterlogging caused by excessive field application or inadequate drainage is not automatically cured. Neither zero seepage nor a universally lower adjacent water table follows merely from the presence of lining.</p>" +
                        "<p>FAO and the archived lined-canal standard recognize reduced weed-related and other maintenance burdens, not an absence of maintenance. Lining can reduce breach risk associated with some erosion and seepage mechanisms, but <strong>does not eliminate floods, overtopping, abrasion, undermining or structural distress</strong>. Adequate operating controls, overflow provisions, drainage, inspection and appropriate freeboard remain necessary parts of the system.</p>",
                    sources: [
                        { id: "IRRI951-00018", set: 3, question: 75 },
                        { id: "IRRI951-00133", set: 13, question: 78 },
                        { id: "IRRI951-00134", set: 13, question: 79 },
                        { id: "IRRI951-00176", set: 17, question: 75 }
                    ]
                },
                {
                    id: "canal-lining-roughness-and-velocity-data",
                    title: "Attach roughness and limiting velocity to their evidence",
                    html: "<p>A design value of n needs a surface finish, condition, alignment and operating context. Smooth new concrete, rough formed concrete and an aged repaired lining need not have the same resistance. Sediment deposits, weeds, joints and irregularities can change the effective value, and bends introduce additional losses.</p>" +
                        "<table><thead><tr><th scope='col'>Evidence or assumption</th><th scope='col'>n and its qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Supplied bank working range</th><td>0.012–0.015; the two numerical design examples separately stipulate 0.012 and 0.015. These are calculation inputs, not proof of every as-built surface.</td></tr>" +
                        "<tr><th scope='row'>USBR Water Measurement Manual §2.16</th><td>Concrete examples span 0.011–0.016 as finish becomes rougher. The discussion also cautions against inappropriate use of normal-flow predictions.</td></tr>" +
                        "<tr><th scope='row'>IS 10430:2000 Table 1</th><td>0.015–0.018 for concrete with trowel/float finish in the table for straight alignment; the table's condition and ageing notes also matter.</td></tr></tbody></table>" +
                        "<p>The differences are not resolved by declaring one universal cast-in-situ number. Match the specified or observed surface to the selected reference, use suitable operating-condition allowances and check sensitivity to deterioration. Do not silently replace a supplied example's n to defend an answer option.</p>" +
                        "<p><strong>IS 10430:2000 §8.8.5</strong> lists <strong>2.7 m/s for cement-concrete lining as design guidance</strong>. It is not a universal safe velocity for every concrete, joint, subgrade, bend or sediment load. Select and check the actual material and specification; abrasion, local hydraulic effects and long-term condition may impose other constraints.</p>",
                    sources: [
                        { id: "IRRI951-00160", set: 16, question: 71 },
                        { id: "IRRI951-00175", set: 17, question: 74 }
                    ]
                },
                {
                    id: "canal-lining-selection-and-deterioration",
                    title: "Select a lining for the site and its service life",
                    html: "<p>Compare rigid concrete, brick/tile, precast units, stone, soil-cement and protected flexible membranes against the actual seepage, hydraulic, subgrade and maintenance requirements. Availability, transport, access, construction quality, repair interruptions and whole-life cost can matter as much as initial material price. Bed width is only one input.</p>" +
                        "<p>The bank's <strong>3 m and 8 m width statements do not establish blanket bans or prerequisites for in-situ concrete</strong>. A small canal can use it where the complete design and economics justify it. The archived IS 10430 selection discussion requires site-specific comparison rather than selection by one width alone.</p>" +
                        "<p>A membrane in a stable bed combined with rigid side lining can be one option, but stability must be demonstrated. A seepage barrier is not automatically a scour-resistant exposed surface. Cover stability, puncture resistance, joints, transitions, uplift and access for repairs all affect the suitability of a membrane or combination lining.</p>" +
                        "<p><strong>Hydraulic efficiency can deteriorate with time.</strong> IS 10430:2000 §4.1.2 recognizes increasing roughness as lining deteriorates. Its §5.1.4 discusses the relative ease of repair or replacement of unit linings, while §4.1.3 gives cement concrete and stone masonry a generally better abrasion-resistance assessment than brick tile. Those observations do not prove that every concrete mix outperforms every tile or that any lining will polish itself into improved efficiency.</p>" +
                        "<p>For soil-cement, the bank's <strong>2–8% cement figure is not a universal recipe</strong>. Establish the treatment type, soil grading and chemistry, cement properties, intended mass basis, compaction and required permeability and durability performance. An appropriate dosage must be justified by testing and specification, not transferred unchanged between unlike soils or lining systems.</p>",
                    sources: [
                        { id: "IRRI951-00162", set: 16, question: 73 },
                        { id: "IRRI951-00166", set: 16, question: 77 },
                        { id: "IRRI951-00167", set: 16, question: 78 },
                        { id: "IRRI951-00177", set: 17, question: 76 }
                    ]
                },
                {
                    id: "canal-external-head-and-drawdown",
                    title: "External pressure follows local head, not one groundwater label",
                    html: "<p>At a point on a lining, water behind it may exert pressure opposing the water pressure inside the canal. With local pressure heads referred to the same point, the net hydrostatic pressure difference is <strong>Δp = γ(h<sub>external</sub> − h<sub>canal</sub>)</strong>. A positive external excess can load the lining towards the canal, including uplift of the bed lining.</p>" +
                        "<p>A connected regional water table below the bed does not itself create positive hydrostatic uplift there. However, <strong>perched water, rain retained in backfill or canal leakage trapped behind the lining</strong> can create a different local pressure head. Therefore a low regional water table does not prove that every part of the lining has zero external pressure.</p>" +
                        "<p>Rapid canal drawdown can reduce internal water pressure faster than the surrounding material drains, leaving a transient external excess. Low permeability can prolong that lag; high permeability alone is neither proof of pressure buildup nor proof of adequate drainage. Inflow paths, hydraulic connections and a usable outlet control the head that develops.</p>" +
                        "<p><em>Supplementary pressure illustration:</em> a stipulated local excess head of 1.20 m gives Δp = 9.81 × 1.20 = <strong>11.772 kPa</strong>. This calculates a load, not an adequate lining thickness or an allowable drawdown rate. Archived <strong>IS 10430:2000 §9</strong> identifies groundwater, restricted drainage and drainage lag after drawdown as reasons to assess underdrainage.</p>",
                    sources: [{ id: "IRRI951-00163", set: 16, question: 74 }]
                },
                {
                    id: "canal-pressure-relief-and-subdrainage",
                    title: "Relief devices work only within a functioning drainage system",
                    html: "<p>Pressure-relief valves and suitable drainage paths can reduce an external head difference by allowing water behind a lining to escape under the intended hydraulic conditions. Their presence alone does not establish that pressure is controlled: sufficient capacity, functioning openings and the receiving water level all matter.</p>" +
                        "<p><strong>Filter compatibility is essential.</strong> A relief opening that removes water but also allows soil grains to migrate can initiate internal erosion or piping. Filters and drainage materials must retain the protected soil while permitting drainage, and must remain serviceable rather than clogging. Outlet conditions must also be checked for submergence, reverse head and erosion.</p>" +
                        "<p>Distinguish <strong>longitudinal collector drains</strong> from transverse or side-slope laterals that feed them. Longitudinal pipes may carry collected water towards an appropriate outlet, while other parts of the drainage network can run across the bed or down the slopes. The statement that pipes run longitudinally cannot define the orientation of every pipe in the system.</p>" +
                        "<p>The archived lined-canal standard's structural-stability and underdrainage discussions support assessment of differential pressure and filtered relief; they do not turn the bank's one-line layout into a complete design. Blocked drains, inaccessible outlets, soil movement and rapid changes of canal level remain residual risks. Layout, filter gradation, capacities, structural checks and operating limits require project-specific engineering rather than these conceptual notes.</p>",
                    sources: [
                        { id: "IRRI951-00164", set: 16, question: 75 },
                        { id: "IRRI951-00165", set: 16, question: 76 }
                    ]
                }
            ],
            gaps: [
                "Kennedy's theory is explicitly in the official scope but has no directly corresponding calculation in these 52 records. Its source-free block and labelled numerical illustration are syllabus extensions, not additional bank questions or borrowed source identities.",
                "No complete surveyed canal network, longitudinal profile, crossing-level dataset or operating schedule is supplied. NMF remains undefined, a ridge loop has no supplied topography, and the 0.15 m offtake allowance has no established universal applicability.",
                "The 2 mm slope item supplies D10 rather than a justified representative sediment size. Sediment grading, concentration, boundary adjustability and operating hydrographs are insufficient to validate a real regime design; the 3600-discharge item's printed unit remains unusable without the explicit cumec interpretation.",
                "The two lined-canal design items omit sufficient section-selection or depth/freeboard definitions for a unique design. The fixed-z best section and the alternative holding b = 14.2 m are declared assumptions; calculated water depth is not a completed bank or lining design.",
                "The bank does not supply measured permissible bed and bank stresses, cohesive-soil erosion data or stress-distribution factors for bends and local disturbances. The wide-channel calculation and granular side-slope ratio cannot replace those missing checks.",
                "Lining grades, joints, subgrade tests, groundwater and perched-water histories, filter criteria, drain capacities and reliable outfall levels are absent. Small-width material rules and soil-cement percentages cannot be certified without their applicable specification and performance evidence.",
                "The references identify selected material in archived IS 7112:2002 and IS 10430:2000; the latter archived copy also contains Amendment 1 of August 2005. Complete later amendment status, current applicability and Nepal adoption were not established. No consolidated-current-code, construction approval or universal safety limit is claimed."
            ],
            cautions: [
                {
                    html: "<p><strong>A watercourse is an irrigation channel:</strong> it takes water towards the fields even when farmers maintain it. The bank's exclusion of watercourses confuses administrative responsibility with use. The separate farmer-responsibility item is a conventional management description, not evidence that field channels lie outside irrigation.</p>",
                    sources: [
                        { id: "IRRI951-00025", set: 4, question: 70 },
                        { id: "IRRI951-00147", set: 15, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Source and infrastructure labels do not guarantee annual supply:</strong> inundation describes the conventional high-river-stage diversion arrangement, while permanent works and perennial supply answer different questions. Ice-fed rivers still have seasonal variability. The phrase with or without regulators does not by itself establish permanent, perennial or non-perennial classification, and an explanation that assumes permanent headworks does not repair that omission.</p>",
                    sources: [
                        { id: "IRRI951-00139", set: 14, question: 73 },
                        { id: "IRRI951-00141", set: 14, question: 75 },
                        { id: "IRRI951-00256", set: 25, question: 68 },
                        { id: "IRRI951-00257", set: 25, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Alignment rules are conditional terrain models:</strong> an ideal ridge avoids natural drains and can command both sides; a side-slope route may run parallel to drainage; a contour route commonly crosses it. This reconciles the bank's inconsistent side-slope explanations without claiming that all irrigation canals follow ridges or that every contour route must have a particular number of crossings. Surveyed geometry and water levels decide the actual works.</p>",
                    sources: [
                        { id: "IRRI951-00021", set: 1, question: 69 },
                        { id: "IRRI951-00127", set: 13, question: 72 },
                        { id: "IRRI951-00138", set: 14, question: 72 },
                        { id: "IRRI951-00146", set: 15, question: 68 },
                        { id: "IRRI951-00252", set: 24, question: 76 },
                        { id: "IRRI951-00254", set: 24, question: 78 },
                        { id: "IRRI951-00255", set: 24, question: 79 },
                        { id: "IRRI951-00331", set: 31, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>NMF is unresolved:</strong> the source gives no definition or identifying context for this abbreviation. The stored expansion to Non-Monsoon Flow and the resulting watershed-canal justification are not substantiated. Neither an expansion nor an alignment-specific conclusion is adopted here.</p>",
                    sources: [{ id: "IRRI951-00145", set: 14, question: 79 }]
                },
                {
                    html: "<p><strong>A ridge loop is not necessarily a depression:</strong> no contour plan, levels or outlet head are supplied. A distributary may be a feasible means of serving the land, but the stored explanation does not demonstrate feasibility or make the answer automatic from the word loop.</p>",
                    sources: [{ id: "IRRI951-00149", set: 15, question: 71 }]
                },
                {
                    html: "<p><strong>Siphons and aqueducts are not synonyms:</strong> canal and drainage levels determine which flow passes above, below or under pressure. Contour alignment can explain a need for crossings, but it does not alone establish that siphons rather than another crossing arrangement are required.</p>",
                    sources: [{ id: "IRRI951-00148", set: 15, question: 70 }]
                },
                {
                    html: "<p><strong>Do not reduce an offtake to one slope or one head drop:</strong> branch flow depends on available head, gates, section, submergence and losses, not simply a steeper branch bed. The 15 cm difference is not a verified universal head-loss requirement. Establish actual water and energy levels over the operating range.</p>",
                    sources: [
                        { id: "IRRI951-00171", set: 17, question: 70 },
                        { id: "IRRI951-00260", set: 25, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Level conditions and earthwork notation matter:</strong> mixed cutting/filling requires the bed below NSL as well as FSL above NSL. Use Bd<sub>c</sub> + z<sub>c</sub>d<sub>c</sub><sup>2</sup> with one consistently defined cutting depth, not an undefined capital D or an automatic substitution of flow depth. The bank's 2d/3d berm guidance needs a specified configuration and reference; it is not a universal selection rule. Berm benefits also depend on actual position, stability and seepage or erosion detailing.</p>",
                    sources: [
                        { id: "BASI674-00377", set: 29, question: 14 },
                        { id: "IRRI951-00324", set: 31, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Regime is dynamic balance, not no grain motion:</strong> aggradation means silting and bed rise, not the printed sitting. The regime item similarly means silt grade and charge, not silk. Lacey's ideal also needs adjustable alluvial bed and banks; the label unlined alone is insufficient, and varying sediment or water discharge can disturb the balance.</p>",
                    sources: [
                        { id: "IRRI951-00020", set: 3, question: 77 },
                        { id: "IRRI951-00029", set: 4, question: 74 },
                        { id: "IRRI951-00172", set: 17, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Correct factors, misleading standard-silt label:</strong> f = 1.76 for 1 mm and f ≈ 1.041230 for 0.35 mm are correct in the stated calibration. The conventional f = 1 reference corresponds to about 0.322831 mm, not 1 mm. The historical parameter name is neither a geotechnical soil classification nor a universal unit-independent physical factor.</p>",
                    sources: [
                        { id: "IRRI951-00043", set: 5, question: 77 },
                        { id: "IRRI951-00044", set: 5, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Slope correction remains conditional on grain size:</strong> adopting 2 mm as the representative diameter gives f = 2.489016 and S = 0.001219349, or <strong>1 in 820.11</strong>, using the stated 3340 formula. It does not give the stored 1 in 720. The source actually gives D<sub>10</sub>, so the required representative-size assumption must remain explicit rather than silently becoming a mean size.</p>",
                    sources: [{ id: "IRRI951-00039", set: 5, question: 73 }]
                },
                {
                    html: "<p><strong>The velocity is 0.617267 m/s, with no matching option:</strong> for Q = 5 and mean d = 0.5 mm, f<sup>2</sup> = 1.5488, so V = (7.744/140)<sup>1/6</sup>. Neither rough rounding nor the stated formula supports the stored 0.532 m/s. No question or answer is altered by this note.</p>",
                    sources: [{ id: "IRRI951-00040", set: 5, question: 74 }]
                },
                {
                    html: "<p><strong>285 m requires a repaired unit assumption:</strong> the current numerical key agrees with 4.75√3600 only when Q is interpreted as 3600 m<sup>3</sup>/s, not the printed ounces. The output is a regime wetted-perimeter estimate. Its use as a preliminary wide-alluvial waterway approximation is not a complete bridge-opening or foundation approval.</p>",
                    sources: [{ id: "IRRI951-00035", set: 5, question: 69 }]
                },
                {
                    html: "<p><strong>The 2.64 m normal-scour result is correct with its datum:</strong> 1.35(3<sup>2</sup>/1.2)<sup>1/3</sup> = 2.642536 m. The input is discharge per metre width, not total discharge. The depth is measured from the relevant water surface to the estimated bed, not automatically below the existing bed and not the maximum local scour at a structure.</p>",
                    sources: [{ id: "IRRI951-00038", set: 5, question: 72 }]
                },
                {
                    html: "<p><strong>The keyed stress unit is wrong:</strong> the wide-channel substitution gives <strong>1.962 N/m<sup>2</sup> ≈ 0.200 kgf/m<sup>2</sup></strong>, not 1.962 kg/m<sup>2</sup>. The option containing 0.2 is numerically compatible only if its kg is intended as kilogram-force. Literal kg/m<sup>2</sup> is mass per area. The average-boundary formula and wide-bed approximation must also remain distinct.</p>",
                    sources: [{ id: "HYDR626-00268", set: 29, question: 65 }]
                },
                {
                    html: "<p><strong>0.53 is a permissible-stress ratio:</strong> the supplied 30° bank and 36° repose angle give 0.525731, consistent with the current 0.53 key. It is not the actual sidewall-to-bed applied stress ratio. The noncohesive-grain formula must not be carried unchanged into cohesive soil or structural-lining design.</p>",
                    sources: [{ id: "IRRI951-00045", set: 5, question: 79 }]
                },
                {
                    html: "<p><strong>3.77 m is not the fixed-z Manning water depth:</strong> with z = 1.5 and the best section at that z, the supplied 20-cumec data give y = <strong>3.012116 m</strong> and b = <strong>1.823991 m</strong>. An explicitly added 0.75 m allowance gives 3.762116 m to the top of lining, only a possible explanation for a nearby total-depth figure. That allowance and depth definition were not originally stated. A half-regular-hexagon instead needs z = 1/√3, not 1.5.</p>",
                    sources: [{ id: "IRRI951-00131", set: 13, question: 76 }]
                },
                {
                    html: "<p><strong>All four 400-cumec options fail:</strong> even treating total depth as water depth, the keyed 14.2 m by 6.28 m section conveys only <strong>350.051352 m<sup>3</sup>/s</strong> by Manning at V = 2.721712 m/s. Passing 400 through that area needs 3.110072 m/s, exceeding the cap. The 15 m by 6.3 m pair passes the necessary area bound but has only about 369 m<sup>3</sup>/s Manning capacity; the other pairs fail the area bound. The conditional b = 14.2 m, y = 6.759075 m alternative needs separate freeboard and material checks and is not an offered-option selection.</p>",
                    sources: [{ id: "IRRI951-00132", set: 13, question: 77 }]
                },
                {
                    html: "<p><strong>Greater delivery is not automatic enlargement of GCA:</strong> reduced losses may allow more land to be irrigated within feasible command, while lower n increases capacity only with the other hydraulic conditions held appropriately. Lining does not automatically increase section area, eliminate seepage or redraw the command boundary. Separate increased conveyance, water saving and actual area served.</p>",
                    sources: [
                        { id: "IRRI951-00018", set: 3, question: 75 },
                        { id: "IRRI951-00133", set: 13, question: 78 },
                        { id: "IRRI951-00134", set: 13, question: 79 }
                    ]
                },
                {
                    html: "<p><strong>Concrete roughness is reference- and finish-specific:</strong> the bank's 0.012–0.015 is a possible working range, not the universal cast-in-situ value. The verified IS 10430:2000 Table 1 entry for trowel/float finish is <strong>0.015–0.018</strong>, while USBR supplies other concrete examples. Identify finish, condition and alignment rather than presenting these as one interchangeable specification.</p>",
                    sources: [{ id: "IRRI951-00175", set: 17, question: 74 }]
                },
                {
                    html: "<p><strong>2.7 m/s is identifiable guidance, not universal immunity:</strong> IS 10430:2000 §8.8.5 lists it for cement-concrete lining. Actual permissible operation depends on the material, joints, sediment abrasion, local hydraulics, supporting ground and governing specification. The bank's separate 3 m/s numerical cap is not evidence that every concrete lining may exceed this guidance.</p>",
                    sources: [{ id: "IRRI951-00160", set: 16, question: 71 }]
                },
                {
                    html: "<p><strong>Width alone does not select the lining:</strong> a bed width up to 3 m is not a blanket prohibition on in-situ concrete, and width greater than 8 m is not an established universal prerequisite. A membrane bed with rigid sides is a conditional option for suitably stable and protected conditions, not proof that scour, puncture, uplift and joint checks can be omitted. The source-specific thresholds lack an identified applicable specification.</p>",
                    sources: [
                        { id: "IRRI951-00162", set: 16, question: 73 },
                        { id: "IRRI951-00167", set: 16, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Deterioration and abrasion claims need correction:</strong> hydraulic efficiency can decline as a lining roughens; IS 10430:2000 §4.1.2 says so. Its abrasion discussion generally favours cement concrete and stone masonry over brick tile, rather than establishing brick as best. Unit linings can be easier to repair, but that does not prevent ageing or prove every other option in the item correct.</p>",
                    sources: [{ id: "IRRI951-00166", set: 16, question: 77 }]
                },
                {
                    html: "<p><strong>A regional water table below the bed does not exclude every external head:</strong> perched water, retained rain, leakage and drawdown lag can still load the lining. High permeability alone does not create hydrostatic pressure, and low permeability alone does not quantify it. Establish local heads, inflow and drainage paths rather than inferring zero pressure from one groundwater observation.</p>",
                    sources: [{ id: "IRRI951-00163", set: 16, question: 74 }]
                },
                {
                    html: "<p><strong>Relief and drain orientation are conditional:</strong> valves require suitable hydraulic conditions, serviceability and filtered entry to avoid piping; an unusable or submerged outfall can defeat the intended drainage. Longitudinal collectors may receive transverse or side-slope laterals, so the longitudinal description does not apply to every pipe. No full drainage layout or capacity is supplied.</p>",
                    sources: [
                        { id: "IRRI951-00164", set: 16, question: 75 },
                        { id: "IRRI951-00165", set: 16, question: 76 }
                    ]
                },
                {
                    html: "<p><strong>More than one lining statement is problematic:</strong> lining does not eliminate floods, generally does reduce weed-removal burdens, and increases erosion resistance without making the canal immune to erosion. Therefore the keyed flood statement is not the only unqualified false claim in this item. Reduced breach risk is a potential benefit, not a guarantee against all failure mechanisms.</p>",
                    sources: [{ id: "IRRI951-00176", set: 17, question: 75 }]
                },
                {
                    html: "<p><strong>Do not treat 2–8% cement as a universal construction recipe:</strong> the soil-cement treatment type, percentage basis, soil properties, cement and required durability and permeability must be specified. A suitable dosage requires performance evidence for the particular material and application; the bank's range alone does not establish it.</p>",
                    sources: [{ id: "IRRI951-00177", set: 17, question: 76 }]
                }
            ],
            references: [
                {
                    title: "FAO — Irrigation system, Chapter 5: field distribution, canal lining, freeboard and crossing structures",
                    url: "https://www.fao.org/4/r4082e/r4082e06.htm"
                },
                {
                    title: "USBR Water Measurement Manual §2.16 — normal flow, hydraulic radius, resistance and roughness limitations",
                    url: "https://www.usbr.gov/tsc/techreferences/mands/wmm/chap02_16.html"
                },
                {
                    title: "IS 7112:2002 — archived primary text on unlined alluvial canals; §4.6 berms, §4.8 method limitations and Annexes A and D",
                    url: "https://archive.org/stream/gov.in.is.7112.2002/is.7112.2002_djvu.txt"
                },
                {
                    title: "IS 10430:2000 — archived primary text, including Amendment 1 of August 2005; selected lining, roughness, freeboard, velocity and underdrainage provisions",
                    url: "https://archive.org/stream/gov.in.is.10430.2000/is.10430.2000_djvu.txt"
                }
            ]
        }
    });
})();