(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0501: {
            code: "ACiE0501",
            questionCount: 42,
            blocks: [
                {
                    id: "physical-actions-load-paths-and-units",
                    title: "Physical actions, load paths and consistent units",
                    html: "<p>A load calculation starts with <strong>what acts, where it acts and how it reaches the ground</strong>. Gravity commonly travels from slab to beam, column or wall, foundation and soil. Wind on roof sheeting first reaches its fasteners and purlins before the main frame and bracing. Omitting a connection from this path does not make its force disappear. These notes compare named code editions for study; they are not a completed structural design or certification of project compliance.</p>" +
                        "<p><strong>Mass is not weight.</strong> With mass density ρ in kg/m<sup>3</sup> and gravitational acceleration g in m/s<sup>2</sup>, unit weight γ<sub>w</sub> = ρg/1000 in kN/m<sup>3</sup>. Thus a 1000 kg mass weighs approximately 9.81 kN when g = 9.81 m/s<sup>2</sup>. A layer of thickness t metres gives area load q = γ<sub>w</sub>t in kN/m<sup>2</sup>. For a uniform one-way tributary strip of width b<sub>tr</sub>, the supporting line load is w = qb<sub>tr</sub> in kN/m; the total force over area A is qA.</p>" +
                        "<p><em>Original worked example:</em> assume a 150 mm slab with unit weight 25 kN/m<sup>3</sup> and fixed finishes of 1.0 kN/m<sup>2</sup>. Its permanent area load is 25 × 0.150 + 1.0 = <strong>4.75 kN/m<sup>2</sup></strong>. A 3 m tributary width transfers <strong>14.25 kN/m</strong> to the beam, before the beam's own weight and any wall loads. These are assumed teaching inputs, not an occupancy-load table or a two-way slab analysis.</p>" +
                        "<p>Fixed partitions, finishes and a permanently built stage contribute dead load; ordinary movable classroom furniture contributes imposed load. Both nevertheless produce <strong>gravitational forces from mass</strong>. Earthquake inertia instead involves mass and acceleration, F = ma. Wind is represented through aerodynamic pressure, while settlement is an imposed support movement whose force effects depend on restraint. These mechanisms cannot be interchanged to force a defective matching question to fit.</p>",
                    sources: [
                        { id: "DESI787-00002", set: 2, question: 26 },
                        { id: "DESI787-00287", set: 31, question: 27 }
                    ]
                },
                {
                    id: "permanent-variable-and-accidental-actions",
                    title: "Permanent, variable and accidental actions",
                    html: "<p>An <strong>action</strong> is broader than a downward force: it can be an applied load or an imposed deformation. Classification concerns how the action varies over the relevant reference period, not whether it acts vertically or horizontally. The following classification is explicitly that of <strong>IS 800:2007 §5.3.1</strong>, rather than a claim that every code uses identical terminology.</p>" +
                        "<table><thead><tr><th scope='col'>Action class</th><th scope='col'>Meaning and examples</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Permanent</th><td>Present over the reference period with little change in magnitude: structural self-weight, fixed finishes and permanent equipment.</td></tr>" +
                        "<tr><th scope='row'>Variable</th><td>Changes appreciably: construction and service-stage loading, occupancy loads, wind and earthquake actions in this IS 800 classification.</td></tr>" +
                        "<tr><th scope='row'>Accidental</th><td>Exceptional actions such as vehicle collision or explosion, assessed in the corresponding accidental design situation.</td></tr></tbody></table>" +
                        "<p>A construction load may govern a temporarily unbraced frame even when the completed building is satisfactory. Conversely, calling equipment permanent does not make its moving contents or operating forces permanent. Separate components of an action when their variability differs.</p>" +
                        "<p><strong>Earthquake is not automatically an accidental action under IS 800:2007.</strong> Its explicit inclusion with variable actions means the bank's earthquake and construction/service-load choices are not mutually exclusive answers to an unqualified variable-action question. Other standards may organize seismic design situations separately; use the terminology of the standard being discussed rather than transferring labels between systems.</p>",
                    sources: [
                        { id: "DESI787-00029", set: 4, question: 33 },
                        { id: "DESI787-00284", set: 30, question: 34 },
                        { id: "DESI787-00285", set: 31, question: 25 }
                    ]
                },
                {
                    id: "characteristic-values-design-values-and-effects",
                    title: "Characteristic values, design values and action effects",
                    html: "<p>A <strong>characteristic load F<sub>k</sub></strong> is a specified representative value linked to the code's probability or other prescribed basis over a stated reference period. A characteristic maximum is neither the average observed load nor an absolute upper bound that nature cannot exceed. The bank's non-exceedance wording needs both a probability and a reference period; there is no universal percentage that can be attached to every load category.</p>" +
                        "<p>For a simple single-action illustration, <strong>F<sub>d</sub> = γ<sub>f</sub>F<sub>k</sub></strong>, where γ<sub>f</sub> is the relevant partial load factor. With several actions, use the specified combination factors and signs. The structural analysis then produces an <strong>action effect E<sub>d</sub></strong>: axial force, shear, bending moment, stress or displacement. A strength check compares a compatible demand with resistance, E<sub>d</sub> ≤ R<sub>d</sub>; a serviceability check compares the relevant response with its service limit.</p>" +
                        "<p>Do not confuse a load in kN with a moment in kN·m, or a pressure in kN/m<sup>2</sup> with a total force. The response also depends on span, stiffness, restraints and load position. Load factors address uncertainty in action magnitudes and their effects; material factors address a different part of the resistance model. Neither compensates for an omitted load path or negligent detailing.</p>" +
                        "<p>Keep a record of whether an input is characteristic, already factored, or a code-defined intermediate such as design wind pressure. The word <em>design</em> in a wind or snow procedure does not by itself mean that the final structural load-combination factor has already been applied. Apply each prescribed operation once, under one consistent code basis.</p>",
                    sources: [
                        { id: "DESI787-00288", set: 31, question: 28 },
                        { id: "DESI787-00312", set: 33, question: 31 }
                    ]
                },
                {
                    id: "occupancy-imposed-loads-and-pattern-loading",
                    title: "Occupancy, imposed loads and adverse positions",
                    html: "<p>Imposed occupancy loads represent people, movable furniture, storage and use-related equipment. They can vary in <strong>both magnitude and position</strong>. A floor with light current occupancy is not therefore designed only for the people present on inspection day. Select the intended occupancy and applicable distributed and concentrated load cases, then examine the relevant structural effects.</p>" +
                        "<p><strong>IS 875 Part 2:1987</strong> is the imposed-load part of the IS 875 series. Part 1 addresses dead loads and unit weights, Part 3 wind, Part 4 snow, and Part 5 special loads and combinations; earthquake provisions belong to the appropriate IS 1893 part. <strong>NBC 103:1994</strong> adopts Part 2:1987 as stated in its foreword. These edition references do not establish that an arbitrary later IS revision automatically replaces an NBC provision.</p>" +
                        "<p>For a continuous beam, loading every span need not maximize every span moment or support reaction. Move a concentrated load, or load the permitted adverse regions of a distributed-load pattern, to obtain an <strong>envelope</strong> of effects. A permanent wall normally stays at its specified position; occupancy may move. Allowable reductions and concentrated-load checks require their own code conditions, not a blanket percentage inferred from low average usage.</p>" +
                        "<p><strong>Snow terminology is code-dependent.</strong> IS 875 Part 2:1987 §2.1 excludes snow from its imposed-load definition, so the bank's exclusion fits that context. IS 800:2007 §1.3.59 includes snow in its imposed-load definition. Keep the physical snow action separately identifiable in the load schedule even where the combination table groups it under imposed loading; do not count the same action twice.</p>",
                    sources: [
                        { id: "DESI787-00003", set: 2, question: 27 },
                        { id: "DESI787-00004", set: 2, question: 28 },
                        { id: "DESI787-00073", set: 9, question: 29 },
                        { id: "DESI787-00289", set: 31, question: 29 }
                    ]
                },
                {
                    id: "roof-access-slope-and-purlin-support-reduction",
                    title: "Roof access, slope and the purlin-support distinction",
                    html: "<p>Roof imposed loading cannot be selected from the word <em>truss</em> alone. <strong>IS 875 Part 2:1987 §4.1 and Table 2</strong> distinguish access, slope and the member being checked. Loads below are in kN/m<sup>2</sup> of <strong>horizontal plan area</strong>, not automatically of the larger sloping sheet area.</p>" +
                        "<table><thead><tr><th scope='col'>Roof condition</th><th scope='col'>Imposed area load</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Slope ≤10°, access provided</th><td>1.5 kN/m<sup>2</sup></td></tr>" +
                        "<tr><th scope='row'>Slope ≤10°, access only for maintenance</th><td>0.75 kN/m<sup>2</sup></td></tr>" +
                        "<tr><th scope='row'>Sloping sheet/purlin case, slope θ &gt;10°</th><td>q = max[0.75 − 0.02(θ − 10), 0.40] kN/m<sup>2</sup>, with θ entered in degrees.</td></tr></tbody></table>" +
                        "<p>The slope decrement is <strong>0.02 kN/m<sup>2</sup> per degree above 10°</strong>; 0.75 is the starting intensity, not the decrement. A promenade or assembly roof needs the appropriate occupancy loading under §4.1.1, rather than being treated as maintenance-only.</p>" +
                        "<p><strong>§4.5.1 has a narrower member rule:</strong> for slopes greater than 10°, trusses, beams or girders <em>supporting roof purlins</em> may use two-thirds of the imposed load on the purlins or sheets. This is not permission to reduce the sheet itself, every roof component, or dead, wind and snow loads by two-thirds.</p>" +
                        "<p><em>Original worked example:</em> at θ = 20°, the sheet/purlin intensity is 0.75 − 0.02 × 10 = <strong>0.55 kN/m<sup>2</sup></strong>. If §4.5.1 applies to the supporting truss, its permitted imposed intensity is (2/3) × 0.55 = <strong>0.367 kN/m<sup>2</sup></strong>. At θ = 30°, the unreduced sheet/purlin calculation gives 0.35, so its 0.40 floor governs <em>before</em> considering the separate support-member provision. Access and other applicable load cases still need checking.</p>",
                    sources: [
                        { id: "DESI787-00290", set: 31, question: 30 },
                        { id: "DESI787-00291", set: 31, question: 31 }
                    ]
                },
                {
                    id: "snow-ground-value-roof-shape-and-plan-area",
                    title: "Snow: ground value, roof shape and plan area",
                    html: "<p><strong>IS 875 Part 4:1987 §3.1</strong> expresses roof snow loading as <strong>S = μS<sub>0</sub></strong>. S<sub>0</sub> is the ground snow load for the location, μ is a dimensionless roof-shape coefficient, and S is the vertical snow load per unit roof plan area. S and S<sub>0</sub> must use the same pressure units, commonly kN/m<sup>2</sup>. The BIS catalogue also lists Part 4:2021; the quoted clause here is explicitly the checked 1987 edition, not a claim to reproduce the later standard.</p>" +
                        "<p>Ground snow depends on the site's snow climate and specified statistical basis. Roof geometry changes retention and distribution: slope may encourage sliding, but valleys, parapets, adjacent higher roofs and wind-driven drifting can create local concentrations. A steeper roof is not a reason to ignore every snow case. Balanced and unbalanced distributions can govern different members and connections.</p>" +
                        "<p><em>Original worked example:</em> assume S<sub>0</sub> = 2.0 kN/m<sup>2</sup> and an applicable μ = 0.8 for one uniform case. Then S = <strong>1.6 kN/m<sup>2</sup></strong>. Over a 12 m by 5 m plan bay, the vertical snow force is 1.6 × 60 = <strong>96 kN</strong>. The assumed μ is not offered as a default code coefficient; real geometry and all required distributions must be examined.</p>" +
                        "<p>The bank's fixed <strong>1.5 N/m<sup>2</sup></strong> is unsupported. It is only 0.0015 kN/m<sup>2</sup>, but changing its unit to kN/m<sup>2</sup> does not repair the absence of site snow data and roof geometry. Roof maintenance load and roof snow load are different physical actions; one cannot supply the missing value for the other.</p>",
                    sources: [
                        { id: "DESI787-00001", set: 2, question: 25 },
                        { id: "DESI787-00069", set: 9, question: 25 }
                    ]
                },
                {
                    id: "nepal-wind-zones-and-basic-speed-reference",
                    title: "Nepal wind zones and the basic-speed reference",
                    html: "<p><strong>NBC 104:1994</strong> adopts <strong>IS 875 Part 3:1987 with Nepal amendments</strong>. Its amended foreword describes <strong>two basic wind-speed zones</strong>, not three. This is a statement about that checked document; it should not be replaced by an unsupported Terai/hill/mountain three-zone mnemonic.</p>" +
                        "<table><thead><tr><th scope='col'>NBC 104:1994 zone description</th><th scope='col'>Basic speed V<sub>b</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Lower plains and hills</th><td>47 m/s; broadly the Terai, Kathmandu Valley and lower-elevation areas.</td></tr>" +
                        "<tr><th scope='row'>Higher hills and mountains</th><td>55 m/s; the text explicitly places areas above 3000 m in the second zone.</td></tr></tbody></table>" +
                        "<p><strong>Altitude is not a complete site-assignment algorithm.</strong> The Nepal provisions also use district boundaries and account for unusually windy areas such as the Kali Gandaki valley. Check the actual geographical description and amendments before choosing V<sub>b</sub>. Site elevation above sea level and the building height z above ground are different quantities.</p>" +
                        "<p>In the referenced <strong>1987 wind procedure, §§5.2–5.4</strong>, the basic speed is associated with an approximately <strong>3-second gust</strong>, the reference height of <strong>10 m in terrain Category 2</strong>, and a <strong>50-year return period</strong>. It is not a ten-minute average, a velocity at every roof height, or a promise of one such storm every fifty years. The design speed at the required height follows after the appropriate risk, terrain/height and topographic factors.</p>",
                    sources: [
                        { id: "DESI787-00005", set: 2, question: 29 },
                        { id: "DESI787-00007", set: 2, question: 31 },
                        { id: "DESI787-00302", set: 32, question: 33 }
                    ]
                },
                {
                    id: "wind-speed-pressure-and-edition-boundaries",
                    title: "Wind speed to pressure: keep the editions separate",
                    html: "<p>For the <strong>IS 875 Part 3:1987 procedure referenced by NBC 104:1994</strong>, use <strong>V<sub>z</sub> = V<sub>b</sub>k<sub>1</sub>k<sub>2</sub>k<sub>3</sub></strong>. V<sub>b</sub> and V<sub>z</sub> are in m/s; the k factors are dimensionless. k<sub>1</sub> addresses risk/design life, k<sub>2</sub> terrain, height and structure size, and k<sub>3</sub> topography, subject to the Nepal amendments.</p>" +
                        "<p><strong>p<sub>z</sub> = 0.6V<sub>z</sub><sup>2</sup> N/m<sup>2</sup></strong> when the speed is entered in m/s. The coefficient incorporates the reference air-density basis of the velocity-pressure relation; it is not a dimensionless structural load factor. One Pa equals one N/m<sup>2</sup>, and <strong>1000 Pa = 1 kPa = 1 kN/m<sup>2</sup></strong>.</p>" +
                        "<p><strong>Bank calculation:</strong> V<sub>b</sub> = 55 m/s and k<sub>1</sub> = k<sub>2</sub> = k<sub>3</sub> = 1 give V<sub>z</sub> = 55 m/s. Therefore p<sub>z</sub> = 0.6 × 55<sup>2</sup> = <strong>1815 Pa = 1.815 kPa</strong>. With unchanged coefficients, increasing speed by 20% multiplies pressure by 1.2<sup>2</sup> = 1.44, an increase of 44%, not 20%.</p>" +
                        "<p><strong>Explicit 2015 comparison, not an NBC 104 substitution:</strong> IS 875 Part 3:2015 §6.3 adds k<sub>4</sub>, a cyclonic-region importance factor. Its §7.2 distinguishes p<sub>d</sub> = K<sub>d</sub>K<sub>a</sub>K<sub>c</sub>p<sub>z</sub>, with <strong>p<sub>d</sub> ≥ 0.70p<sub>z</sub></strong>. The K factors address directionality, area averaging and combination under their own provisions. Do not append them to the 1987/Nepal calculation as though the procedures were interchangeable.</p>" +
                        "<p>For specified speed, air density and geometry, the cladding material is not an input to the basic aerodynamic pressure. Wind angle and geometry affect surface coefficients; terrain and topography affect speed. Material and stiffness still affect deformation, resistance and possibly dynamic response. Distinguish velocity pressure p<sub>z</sub> from the final pressure on a particular surface.</p>",
                    sources: [
                        { id: "DESI787-00006", set: 2, question: 30 },
                        { id: "DESI787-00305", set: 33, question: 24 },
                        { id: "DESI787-00304", set: 1, question: 35 }
                    ]
                },
                {
                    id: "cladding-net-pressure-force-and-signs",
                    title: "Cladding: net pressure, force and the meaning of signs",
                    html: "<p>For an individual cladding element in <strong>IS 875 Part 3:2015 §7.3.1</strong>, the net normal force is <strong>F = (C<sub>pe</sub> − C<sub>pi</sub>)Ap<sub>d</sub></strong>. C<sub>pe</sub> and C<sub>pi</sub> are dimensionless external and internal pressure coefficients; A is the relevant element area in m<sup>2</sup>; p<sub>d</sub> is the pressure defined by that edition. If p<sub>d</sub> is in kN/m<sup>2</sup>, F is in <strong>kN</strong>. The net pressure itself is q<sub>net</sub> = (C<sub>pe</sub> − C<sub>pi</sub>)p<sub>d</sub>, without A.</p>" +
                        "<p>Positive pressure acts <strong>toward the relevant surface</strong>. Positive external pressure pushes from outside toward the building; positive internal pressure pushes from inside toward the enclosure and therefore outward from the building. Taking net force positive inward explains the subtraction of C<sub>pi</sub>. A negative external coefficient represents suction, and a negative net result under this convention means outward loading.</p>" +
                        "<p><em>Original worked example using assumed 2015-procedure inputs:</em> let C<sub>pe</sub> = −0.8, C<sub>pi</sub> = +0.2, p<sub>d</sub> = 1.2 kN/m<sup>2</sup> and A = 5 m<sup>2</sup>. Then q<sub>net</sub> = (−0.8 − 0.2) × 1.2 = <strong>−1.2 kN/m<sup>2</sup></strong>, and F = <strong>−6 kN</strong>: 6 kN outward. The example illustrates signs and units, not a permitted coefficient selection for an unspecified building.</p>" +
                        "<p>Check the applicable opening/internal-pressure cases and external pressure zones. Fasteners, local cladding, purlins and the overall frame can have different governing loaded areas and coefficients. A roof-normal wind force is not automatically a vertical load on horizontal plan area as used for snow; resolve directions before combining member effects. In an explicitly 1987 calculation, retain that edition's pressure and coefficient procedure instead of importing the 2015 p<sub>d</sub> definition.</p>",
                    sources: [
                        { id: "DESI787-00300", set: 32, question: 31 },
                        { id: "DESI787-00301", set: 32, question: 32 },
                        { id: "DESI787-00303", set: 32, question: 34 }
                    ]
                },
                {
                    id: "earthquake-inertia-site-response-and-code-parts",
                    title: "Earthquake inertia, site response and the correct code part",
                    html: "<p>Earthquake motion accelerates the supporting ground; structural inertia and deformation create forces in the building. For a simple mass, <strong>F = ma = (a/g)W</strong>, where W = mg is weight. Thus an acceleration ratio a/g multiplied by seismic weight in kN gives force in kN. Do not multiply a weight by g a second time or substitute wind speed into this inertial relation.</p>" +
                        "<p>Seismic weight includes permanent mass and the <strong>code-specified participating part of other loads</strong>. It is not automatically the sum of all maximum factored gravity loads. Site hazard, soil conditions, structural period, mass distribution, stiffness, strength, ductility and importance affect the seismic assessment. Local wind speed is not a direct input to the seismic coefficient, although a building must separately satisfy its wind requirements.</p>" +
                        "<p>At floor levels, diaphragms and collectors transfer inertia forces to the lateral system: moment frames, braced frames or walls. These deliver storey forces and overturning effects through connections and foundations. Eccentric mass and stiffness can produce torsion; a single base-shear number does not establish a safe diaphragm, a stable storey or a ductile connection.</p>" +
                        "<p><strong>Match the structure type to the code part.</strong> In the editions checked for the bank, IS 1893 Part 1:2016 addresses general provisions and buildings; <strong>Part 4:2015 addresses industrial structures, including stack-like structures</strong>; <strong>Part 2:2014 addresses liquid-retaining tanks</strong>. A tank located at a factory is still a tank, but that does not make Part 2 the industrial-building standard. The BIS catalogue also lists Part 4:2024; the older checked clauses are labelled rather than represented as an exhaustive current-code review.</p>",
                    sources: [
                        { id: "DESI787-00292", set: 31, question: 32 },
                        { id: "DESI787-00294", set: 32, question: 25 }
                    ]
                },
                {
                    id: "legacy-seismic-coefficient-and-nbc-2025-comparison",
                    title: "Legacy seismic coefficient and the NBC 105:2025 comparison",
                    html: "<p>The bank uses the <strong>legacy IS 1893 horizontal-coefficient formulation</strong>: <strong>A<sub>h</sub> = (Z/2)(I/R)(S<sub>a</sub>/g)</strong>. IS 1893 Part 1:2002 §6.4.2 explicitly explains the factor 2 in that formulation's MCE-to-DBE convention. Z is the zone factor, I the importance factor, R the response reduction factor, and S<sub>a</sub>/g the dimensionless spectral acceleration coefficient for the appropriate period, soil and damping assumptions.</p>" +
                        "<p><strong>V<sub>B</sub> = A<sub>h</sub>W</strong> gives the corresponding design base shear when W is seismic weight. If the spectrum already supplies S<sub>a</sub>/g, do not divide that number by g again. R reduces the <strong>elastic force demand used for design</strong> in recognition of the specified system's ductility and other reserve; it does not reduce a measured earthquake or guarantee that actual base shear can never exceed the design value.</p>" +
                        "<p><em>Original worked example in the legacy notation:</em> assume Z = 0.36, I = 1.0, R = 5 and S<sub>a</sub>/g = 2.5. Then A<sub>h</sub> = (0.36/2) × (1/5) × 2.5 = <strong>0.09</strong>. If W = 10000 kN, V<sub>B</sub> = <strong>900 kN</strong>. The selected parameters are illustrative, not an assignment of R or hazard to an unspecified building, and this does not distribute the force or check torsion and drift.</p>" +
                        "<p><strong>NBC 105:2025 uses different notation and normalization.</strong> Its §§4.1.1 and 6.1.1 use <strong>C(T) = C<sub>h</sub>(T)ZI</strong> and <strong>C<sub>d</sub>(T<sub>1</sub>) = C(T<sub>1</sub>)/(R<sub>μ</sub>Ω<sub>u</sub>)</strong>. Here C<sub>h</sub>(T) is the spectral shape factor, T is period in seconds, T<sub>1</sub> is the fundamental period, and the denominator uses the code's ductility and overstrength factors. Use that code's own hazard, importance and system definitions; do not insert a legacy Z/2 or treat the two codes' Z values and reduction factors as interchangeable.</p>",
                    sources: [
                        { id: "DESI787-00297", set: 32, question: 28 },
                        { id: "DESI787-00298", set: 32, question: 29 }
                    ]
                },
                {
                    id: "orthogonal-seismic-effects-and-axial-reversal",
                    title: "Orthogonal seismic effects and cyclic axial reversal",
                    html: "<p>For the non-parallel lateral-system condition in <strong>IS 1893 Part 1:2016 §6.3.2.2</strong>, examine <strong>100% of one horizontal seismic effect with 30% of the orthogonal effect</strong>, then interchange the directions. For a particular member response, denote the separately calculated effects by E<sub>x</sub> and E<sub>y</sub>. Check <strong>±E<sub>x</sub> ± 0.3E<sub>y</sub></strong> and <strong>±0.3E<sub>x</sub> ± E<sub>y</sub></strong>, considering adverse signs independently.</p>" +
                        "<p>These are combinations of the <strong>same response quantity</strong>, such as axial force in one brace or moment at one beam end. They are not an instruction to add unrelated force components as scalars, or to check only one positive global resultant. Applicable vertical seismic effects, torsion and the gravity combination must be addressed separately under the relevant provisions.</p>" +
                        "<p><em>Original directional-algebra example, before partial load factors:</em> suppose seismic axial-force effects have magnitudes N<sub>x</sub> = 80 kN and N<sub>y</sub> = 30 kN. The first family can reach <strong>80 + 0.3 × 30 = 89 kN</strong> in either sign; the interchanged family can reach <strong>0.3 × 80 + 30 = 54 kN</strong>. If a separately assumed gravity effect is 40 kN compression, the first family's illustrative totals range from <strong>−49 kN tension to +129 kN compression</strong>. These unfactored numbers demonstrate reversal, not a completed strength check.</p>" +
                        "<p>Earthquake cycles can reverse brace and other member actions. Check the relevant tensile resistance, compressive stability, connections, anchorage and ductile load-reversal details; the same permanent axial force is not an adequate representation of cyclic seismic behaviour. However, a gravity-dominated column does not necessarily change from compression to tension merely because the earthquake direction reverses. Evaluate the combined signed effects and the requirements of the selected structural system.</p>",
                    sources: [
                        { id: "DESI787-00070", set: 9, question: 26 },
                        { id: "DESI787-00293", set: 31, question: 33 }
                    ]
                },
                {
                    id: "seismic-performance-and-return-period-meaning",
                    title: "Seismic performance and what a return period means",
                    html: "<p>Earthquake-resistant design sets performance objectives at specified hazard levels. For frequent smaller shaking, the aim is to limit damage and preserve function. At more severe shaking, repairable damage may be acceptable; for rare strong shaking, life safety and avoidance of collapse are central aims. <strong>These are design objectives, not a guarantee of zero damage in every minor earthquake or full operation after every major one.</strong> Structural and nonstructural performance both matter.</p>" +
                        "<p><strong>NBC 105:2025, foreword item (iv)</strong>, identifies <strong>E1 with a 475-year return period</strong> and <strong>E2 with a 2475-year return period</strong>. Its §2.1.1 gives the 475-year life-safety reference, while §2.1.2 uses a <strong>20-year return period for damage limitation</strong>. Do not label E1 as that serviceability event merely because it is the less rare of E1 and E2.</p>" +
                        "<p>A return period T<sub>R</sub> describes a statistical rate of exceeding a defined hazard level, not a calendar appointment for the next earthquake. Under an explicitly assumed stationary Poisson occurrence model, the probability of at least one exceedance in duration t is <strong>P = 1 − exp(−t/T<sub>R</sub>)</strong>, with t and T<sub>R</sub> in the same time units.</p>" +
                        "<p><em>Original probability illustration:</em> over 50 years, T<sub>R</sub> = 475 years gives approximately <strong>10.0%</strong> exceedance probability; T<sub>R</sub> = 2475 years gives approximately <strong>2.0%</strong>. The model does not imply regularly spaced events or predict an individual site's next damaging earthquake. The code's hazard definitions and performance checks remain necessary even after the return-period label is known.</p>",
                    sources: [
                        { id: "DESI787-00295", set: 32, question: 26 },
                        { id: "DESI787-00299", set: 32, question: 30 }
                    ]
                },
                {
                    id: "load-combination-logic-signs-and-envelopes",
                    title: "Load combinations, signs and governing envelopes",
                    html: "<p>A load combination represents a specified <strong>design situation and limit state</strong>; it is not an instruction to add every imaginable maximum. In the bank's notation, DL is dead load, LL imposed load, WL wind, EL earthquake and AL accidental load. <strong>WL/EL means wind or earthquake as alternatives</strong>, not their sum and not a numerical ratio.</p>" +
                        "<ol><li>Choose the governing standard, edition, structure type and strength or serviceability check.</li><li>Identify the characteristic actions, their locations and any code-defined accompanying values.</li><li>Generate the required occupancy patterns, environmental directions and favourable or unfavourable signs.</li><li>Apply the correct factors once and analyse each compatible combination.</li><li>Envelope each response separately: maximum compression, tension, bending, shear, drift or uplift need not come from the same case.</li></ol>" +
                        "<p><strong>IS 800:2007 §3.5.2</strong> excludes simultaneous design wind and earthquake in its ordinary combinations. The related assumption in <strong>IS 1893 Part 1:2016 §6.2(b)</strong> concerns unlikely concurrence of extreme environmental events. It does not assert that an earthquake physically cannot occur on a windy day. Special hazards or project-specific design situations still require the applicable provisions, not a universal coincidence ban.</p>" +
                        "<p>Dead load can be adverse for gravity bending but <strong>favourable against uplift</strong>. As an unfactored illustration only, 12 kN downward weight and 20 kN upward wind leave 8 kN net uplift, not 32 kN downward. Appropriate stability factors and anchorage checks are still needed. Preserve signs rather than adding absolute values. Identify snow separately and use the selected code's roof-snow/imposed-load concurrence rules; do not assume either that all maxima coincide or that snow is automatically absent.</p>" +
                        "<p>For a linear model, compatible action effects can be combined by superposition. Geometric or material nonlinearity can instead require analysis of the combined action set. Adding maxima from unrelated moving-load positions may create an impossible loading arrangement and is not a substitute for an envelope.</p>",
                    sources: [
                        { id: "DESI787-00296", set: 32, question: 27 },
                        { id: "DESI787-00307", set: 33, question: 26 }
                    ]
                },
                {
                    id: "strength-load-factors-and-equal-dl-ll-example",
                    title: "Strength factors: 1.5 is a case, not a universal constant",
                    html: "<p>In <strong>IS 800:2007 §5.3.3 and Table 4</strong>, the strength combination of dead load and <strong>one imposed-load action</strong> is <strong>1.5DL + 1.5LL</strong>. Both factors are 1.5 in this case. This directly supports the bank's specific DL + LL live-load question but does not support a universal statement that the live-load factor is always larger than the dead-load factor.</p>" +
                        "<p>The numerical factor depends on the combination, limit state, favourable or adverse contribution and any leading/accompanying-action provisions. Table 4 has distinctions not captured by a single remembered number. A load factor is also not a material factor, nor the collapse-to-working-load ratio from elementary plastic analysis. Do not transfer a value between these different ratios simply because each is called a factor of safety in informal speech.</p>" +
                        "<p><em>Original worked example:</em> assume a simply supported 6 m beam carrying uniform characteristic dead load 8 kN/m and imposed load 3 kN/m, with no other actions. For this specified IS 800 strength combination, w<sub>d</sub> = 1.5(8 + 3) = <strong>16.5 kN/m</strong>. Linear beam analysis gives M<sub>d</sub> = w<sub>d</sub>L<sup>2</sup>/8 = <strong>74.25 kN·m</strong>. The corresponding unfactored 11 kN/m gives 49.5 kN·m; neither value alone establishes the member's resistance or deflection compliance.</p>" +
                        "<p>Load factors help cover uncertainty in predicting load magnitudes and effects. The greater variability of occupancy explains why a code may treat it differently, but it does not override a table that assigns equal factors. Wind/seismic strength combinations, stabilizing permanent load and multiple variable actions must be selected from the complete applicable provisions rather than extrapolated from this two-action example.</p>",
                    sources: [
                        { id: "DESI787-00255", set: 28, question: 25 },
                        { id: "DESI787-00306", set: 33, question: 25 },
                        { id: "DESI787-00313", set: 33, question: 32 }
                    ]
                },
                {
                    id: "serviceability-and-accidental-table-four-factors",
                    title: "Serviceability and accidental factors in IS 800 Table 4",
                    html: "<p>The following are <strong>selected IS 800:2007 Table 4 combinations with one imposed-load action</strong>, not a replacement for its complete table and notes. Let H mean the applicable WL <em>or</em> EL action for the check. <strong>Amendment 1, January 2012</strong>, changes §5.6.1 to use the Table 4 factors instead of a blanket unity rule for serviceability.</p>" +
                        "<table><thead><tr><th scope='col'>Situation</th><th scope='col'>Selected combination</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Serviceability: DL + LL + WL/EL</th><td>1.0DL + 0.8LL + 0.8H</td></tr>" +
                        "<tr><th scope='row'>Serviceability: DL + WL/EL</th><td>1.0DL + 1.0H</td></tr>" +
                        "<tr><th scope='row'>Accidental: DL + LL + AL</th><td>1.0DL + 0.35LL + 1.0AL</td></tr></tbody></table>" +
                        "<p>The dead-load factor is <strong>1.0 in both listed serviceability cases</strong>, as the bank keys state. But in the three-action serviceability case, LL and H carry <strong>0.8</strong>, not 1.0. The accidental accompanying imposed-load factor <strong>0.35</strong> is directly present in this IS 800 table; it need not be explained by an unsupported generalization about Eurocodes.</p>" +
                        "<p><em>Original linear-effect example:</em> suppose dead, imposed and wind actions cause same-sign axial-force effects of 100, 50 and 30 kN in one member. The listed three-action serviceability combination gives 100 + 0.8 × 50 + 0.8 × 30 = <strong>164 kN</strong>, not the all-unity 180 kN. The separate DL + wind case gives <strong>130 kN</strong>. If an accidental action instead produces a 40 kN effect, its listed combination gives 100 + 0.35 × 50 + 40 = <strong>157.5 kN</strong>.</p>" +
                        "<p>Those numbers illustrate the factors for an assumed linear response, not an assertion that every maximum acts in the same direction. Actual serviceability requires the appropriate deflection, drift or vibration check. An accidental assessment also requires the specified accidental action and relevant resistance model. Selecting EL for serviceability requires the applicable seismic provisions; the table is not permission to substitute a strength-level seismic action without checking its basis.</p>",
                    sources: [
                        { id: "DESI787-00308", set: 33, question: 27 },
                        { id: "DESI787-00309", set: 33, question: 28 },
                        { id: "DESI787-00310", set: 33, question: 29 }
                    ]
                },
                {
                    id: "notional-horizontal-forces-and-draft-status",
                    title: "Notional horizontal forces: sway imperfections, not earthquake",
                    html: "<p><strong>IS 800:2007 §§4.3.6–4.3.6.3</strong> uses notional horizontal forces in the gravity-load sway-stability assessment. They represent the effect of practical frame imperfections. At each roof or floor level, the notional force magnitude is <strong>H<sub>n,i</sub> = 0.005(G<sub>d,i</sub> + Q<sub>d,i</sub>)</strong>, where G<sub>d,i</sub> and Q<sub>d,i</sub> are the <strong>factored dead and vertical imposed loads applied at that level</strong>.</p>" +
                        "<p>Apply them with the factored gravity loading, <strong>one orthogonal horizontal direction at a time</strong>, considering the adverse direction. Under this particular procedure they are not combined with wind, earthquake or temperature effects. They are not used as added net foundation shear or as loads for overturning/overall-instability checks. That limitation belongs to this notional-force procedure, not to actual wind or seismic actions.</p>" +
                        "<p><em>Original level-by-level example:</em> if one floor carries factored permanent load 600 kN and factored vertical imposed load 200 kN, its notional force is 0.005 × 800 = <strong>4 kN</strong>. Use the loading of each other level for that level's force; do not apply 0.5% of the entire building gravity load at every floor. The 4 kN is not a calculated earthquake base shear and does not receive a second gravity load factor.</p>" +
                        "<p>The bank links <strong>NBC 111:2025, explicitly marked Proposed</strong>, whose §4.3.6 contains the 0.5% provision. The verified comparison here is with IS 800:2007; the draft link does <strong>not</strong> establish national adoption. The checked <strong>NBC 111:1994</strong> foreword adopts IS 800:1984, not IS 800:2007. Keep these identities distinct when studying the bank or selecting a real project's governing documents.</p>",
                    sources: [{ id: "DESI787-00311", set: 33, question: 30 }]
                },
                {
                    id: "gantry-three-direction-load-path-and-load-ledger",
                    title: "Gantry loads in three directions and a complete load ledger",
                    html: "<p>A gantry girder supports moving crane wheel loads and participates in a system resisting <strong>vertical, transverse and longitudinal actions</strong>. A vertical-only beam calculation does not represent the whole crane-support system. Which member carries each horizontal action depends on the rail restraints, brackets, ties and bracing actually provided.</p>" +
                        "<table><thead><tr><th scope='col'>Direction</th><th scope='col'>Typical source and transfer</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vertical</th><td>Crane self-weight and lifted load reach the rails through the wheels, then the runway girders, supports, columns and foundations.</td></tr>" +
                        "<tr><th scope='row'>Transverse to runway</th><td>Crab/trolley motion and lateral crane effects reach lateral restraints and the supporting frame or bracing.</td></tr>" +
                        "<tr><th scope='row'>Longitudinal along runway</th><td>Crane travel acceleration or braking reaches the runway system and its longitudinal bracing or other designed restraint path.</td></tr></tbody></table>" +
                        "<p>Obtain the crane manufacturer's wheel loads, spacings, travel arrangements and operating information. Move the load train to find governing bending, shear and support reactions; those extrema need not occur at the same position. Eccentric application can add torsion or local effects. Applicable dynamic allowances, serviceability and repeated-loading/fatigue requirements need their own verified provisions; no universal impact percentage is inferred from the bank's three-direction question.</p>" +
                        "<p><strong>Final load-ledger check:</strong> record each action's origin, units, reference area or tributary width, characteristic or factored status, code edition, position and sign. Identify its path through the structure, the limit states and combinations checked, and the remaining missing data. This discipline connects the syllabus's dead, imposed, wind, snow and earthquake loads without disguising a list of remembered coefficients as a full building or gantry design.</p>",
                    sources: [{ id: "DESI787-00156", set: 18, question: 25 }]
                }
            ],
            gaps: [
                "The 42 assigned questions cover load definitions, selected coefficients and combinations, not a complete building load schedule. The tributary-load, roof, snow, cladding, seismic, combination and probability examples are original labelled teaching extensions; they are not additional bank questions.",
                "No project location, roof geometry, openings, terrain survey or site snow series is supplied. The notes do not select a real site's wind factors, cladding zones, snow coefficients or drift patterns, and do not provide a complete roof-load or dynamic-wind design.",
                "No complete seismic mass model, spectrum, structural system, modal analysis, diaphragm design, torsional assessment, foundation model or cyclic detailing dataset is supplied. The base-shear and directional examples do not establish full-system seismic performance, drift compliance or design acceptance.",
                "Only the verified load-factor cases relevant to the bank are worked numerically. Exhaustive strength/stability combinations, multiple leading/accompanying variable actions, snow concurrence, accidental resistance checks and crane dynamic/fatigue design require the complete applicable provisions and project data.",
                "Code comparisons retain their edition labels: NBC 104:1994 refers to the Nepal-amended 1987 wind procedure; IS 800:2007 is not the IS 800:1984 edition adopted by NBC 111:1994; NBC 111:2025 is a Proposed document. Later snow and industrial-seismic editions are catalogue-listed, but their complete amendments, withdrawal/effective dates and project-specific legal applicability were not audited. Bank checks explain discrepancies without changing the stored questions or keys."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check — fixed versus movable:</strong> the furniture key fits ordinary movable classroom furniture. A partition or stage contributes dead load when it is permanently fixed; a relocatable partition or temporary stage needs its actual loading classification. The bare phrase stages in class does not establish permanence. Keep the useful fixed/movable distinction without treating an object's name as sufficient evidence of its action class.</p>",
                    sources: [{ id: "DESI787-00002", set: 2, question: 26 }]
                },
                {
                    html: "<p><strong>Bank check — action classification and snow terminology:</strong> the self-weight permanent-action key is sound, but the explanation that puts earthquake outside variable actions conflicts with <strong>IS 800:2007 §5.3.1(b)</strong>, which includes wind and earthquake. Consequently, the variable-action item's earthquake and construction/service-load options both fit that classification; its explanation does not establish a unique answer. Snow is excluded from imposed load in IS 875 Part 2:1987 §2.1 but included in IS 800:2007 §1.3.59. The snow-exclusion key therefore needs its Part 2 context, not a universal definition.</p>",
                    sources: [
                        { id: "DESI787-00029", set: 4, question: 33 },
                        { id: "DESI787-00285", set: 31, question: 25 },
                        { id: "DESI787-00289", set: 31, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — no valid complete matching:</strong> mass and gravity can produce <strong>imposed as well as dead load</strong>, so pairing A with imposed load is not inherently wrong. In the intended structural-action classification, mass and acceleration identifies earthquake inertia, which is missing from the offered list; wind is the available environmental-pressure example. Settlement is an imposed foundation movement, not a substitute for seismic inertia. The keyed complete pairing is unsupported, and none of the offered combinations correctly identifies all three mechanisms. Do not invent a closest answer by claiming that imposed loads cannot be gravitational.</p>",
                    sources: [{ id: "DESI787-00287", set: 31, question: 27 }]
                },
                {
                    html: "<p><strong>Bank check — two Nepal wind zones:</strong> the <strong>3</strong> key conflicts with the Nepal-amended foreword of <strong>NBC 104:1994</strong>, which gives two zones with basic speeds <strong>47 and 55 m/s</strong>. The higher-hill 55 m/s answer is supported, and the text explicitly places areas above 3000 m in zone 2. District descriptions and unusually windy valleys also matter; neither a three-elevation-band mnemonic nor an altitude-only site rule accurately reproduces the checked document.</p>",
                    sources: [
                        { id: "DESI787-00007", set: 2, question: 31 },
                        { id: "DESI787-00005", set: 2, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — quadratic dependence is not numerical equality:</strong> the keyed p<sub>z</sub> = V<sub>z</sub><sup>2</sup> expresses the intended square-law dependence but omits the SI coefficient. The numerical relation is <strong>p<sub>z</sub> = 0.6V<sub>z</sub><sup>2</sup></strong> in N/m<sup>2</sup> for V<sub>z</sub> in m/s. Thus the separate 55 m/s example gives <strong>1815 N/m<sup>2</sup> = 1.815 kPa</strong>; its bare numerical options need those units. No exact numerical equality offered in the square-law item includes the required coefficient.</p>",
                    sources: [
                        { id: "DESI787-00305", set: 33, question: 24 },
                        { id: "DESI787-00006", set: 2, question: 30 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — pressure versus force and the reference surface:</strong> the cladding expression <strong>(C<sub>pe</sub> − C<sub>pi</sub>)Ap<sub>d</sub></strong> gives force, despite the stem asking for pressure. Remove A to obtain net pressure. The internal/external sign keys are consistent only when positive means toward the relevant surface: positive internal pressure pushes outward from the enclosure, while positive external pressure pushes inward. A statement that every positive coefficient necessarily pushes toward the building interior would be wrong. The p<sub>d</sub> formulation is specifically labelled IS 875 Part 3:2015 in these notes.</p>",
                    sources: [
                        { id: "DESI787-00300", set: 32, question: 31 },
                        { id: "DESI787-00301", set: 32, question: 32 },
                        { id: "DESI787-00303", set: 32, question: 34 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — aerodynamic pressure versus structural response:</strong> material is the intended exclusion for prescribed aerodynamic conditions, but the stem uses wind pressure broadly. The bare velocity pressure p<sub>z</sub> depends on speed and air-density basis, while angle of attack enters the surface pressure coefficients rather than independently entering 0.6V<sub>z</sub><sup>2</sup>. Material and stiffness can affect deformation, dynamic response and resistance. The key must not be expanded into a claim that structural material never matters in wind design.</p>",
                    sources: [{ id: "DESI787-00304", set: 1, question: 35 }]
                },
                {
                    html: "<p><strong>Bank check — roof access and an unqualified minimum:</strong> the explanation incorrectly assigns <strong>0.75 kN/m<sup>2</sup> to an accessible roof</strong>. IS 875 Part 2:1987 Table 2 gives 1.5 for access-provided roofs of slope ≤10°, and 0.75 where access is only for maintenance. Slope, occupancy and the §4.5.1 rule for eligible members supporting purlins change the applicable imposed load. The stem supplies too little information to make 0.75 a universal minimum for every roof truss.</p>",
                    sources: [{ id: "DESI787-00290", set: 31, question: 30 }]
                },
                {
                    html: "<p><strong>Bank check — wrong slope decrement:</strong> the keyed <strong>0.75 per degree</strong> is not the IS 875 Part 2:1987 roof-slope reduction. The decrement is <strong>0.02 kN/m<sup>2</sup> for each degree above 10°</strong>, starting from 0.75 and subject to the 0.40 kN/m<sup>2</sup> sheet/purlin floor. The 0.02 option represents the verified decrement once its missing units are supplied. The separate two-thirds provision for eligible purlin-supporting members is not the per-degree reduction.</p>",
                    sources: [{ id: "DESI787-00291", set: 31, question: 31 }]
                },
                {
                    html: "<p><strong>Bank check — snow value cannot be repaired by a unit swap:</strong> a universal roof-truss snow load of <strong>1.5 N/m<sup>2</sup></strong> is not supported by IS 875 Part 4:1987 §3.1. S = μS<sub>0</sub> requires site ground snow loading and roof-shape/distribution information. The printed value equals only 0.0015 kN/m<sup>2</sup>, but multiplying it by 1000 or changing N to kN would still invent an unexplained site-independent design value. No unique snow intensity follows from the supplied stem.</p>",
                    sources: [{ id: "DESI787-00069", set: 9, question: 25 }]
                },
                {
                    html: "<p><strong>Bank check — industrial structures are not the tank part:</strong> the key <strong>IS 1893 Part 2</strong> is wrong for the stated industrial-building category. The checked Part 2:2014 covers liquid-retaining tanks; Part 4:2015 covers industrial structures, including stack-like structures. Part 4 is absent from the options. The catalogue also lists Part 4:2024, but the source cannot be rescued by assuming an unstated industrial tank or by treating Part 2 as the general industrial-building standard.</p>",
                    sources: [{ id: "DESI787-00292", set: 31, question: 32 }]
                },
                {
                    html: "<p><strong>Bank check — performance aims are not guarantees:</strong> remaining functional with little or no damage during minor shaking is an intended design objective, not proof that every conforming building will suffer zero damage in any minor event. The offered statement that moderate earthquakes can cause damage is also compatible with the usual performance philosophy, so the unqualified stem does not cleanly distinguish all its choices. Severe-event life safety does not imply damage-free operation after a major earthquake.</p>",
                    sources: [{ id: "DESI787-00295", set: 32, question: 26 }]
                },
                {
                    html: "<p><strong>Bank check — reversal applies to the combined member demand:</strong> both tension and compression are relevant to members whose axial seismic actions reverse, such as many braces. That requires appropriate resistance, compressive stability and cyclic connection/detailing checks; it is not equivalent to applying the same permanent axial force repeatedly. A large gravity compression may keep a particular column in compression under both earthquake signs. The combined action envelope and structural-system provisions determine the checks, not the blanket assumption that every axial member necessarily changes sign.</p>",
                    sources: [{ id: "DESI787-00293", set: 31, question: 33 }]
                },
                {
                    html: "<p><strong>Bank check — code combination versus physical impossibility:</strong> the no-wind-plus-earthquake choices reflect the ordinary design-combination provisions, including IS 800:2007 §3.5.2 and the extreme-event assumption in IS 1893 Part 1:2016 §6.2(b). They do not prove that earthquake and wind can never occur simultaneously. Read WL/EL as alternative code actions and retain the required gravity contributions, signs and factors; special design situations need their own assessment rather than a universal claim that concurrence is impossible.</p>",
                    sources: [
                        { id: "DESI787-00296", set: 32, question: 27 },
                        { id: "DESI787-00307", set: 33, question: 26 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — legacy coefficient and elastic force reduction:</strong> A<sub>h</sub> = (Z/2)(I/R)(S<sub>a</sub>/g) is the legacy IS 1893 expression used by the bank, not a generic NBC 105 formula. The factor 2 belongs to that convention. NBC 105:2025 instead uses C(T) = C<sub>h</sub>(T)ZI and C<sub>d</sub>(T<sub>1</sub>) = C(T<sub>1</sub>)/(R<sub>μ</sub>Ω<sub>u</sub>). Likewise, the response-factor explanation should refer to reducing <strong>elastic design-force demand</strong>, not reducing a known actual base shear. The reduction depends on an eligible, adequately detailed structural system; it is not an arbitrary force discount.</p>",
                    sources: [
                        { id: "DESI787-00297", set: 32, question: 28 },
                        { id: "DESI787-00298", set: 32, question: 29 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — 30% requires the interchanged and signed cases:</strong> the 30 key agrees with IS 1893 Part 1:2016 §6.3.2.2 for the specified non-parallel-system condition. A complete directional check considers 100% x with 30% y <em>and</em> 30% x with 100% y, with adverse signs. Merely appending one positive 30% component or checking only one direction does not implement the rule. Other required seismic components and the gravity combination are not removed by this horizontal directional provision.</p>",
                    sources: [{ id: "DESI787-00070", set: 9, question: 26 }]
                },
                {
                    html: "<p><strong>Bank check — E1 is code-specific, not a recurrence clock:</strong> E1 = 475 years and E2 = 2475 years are verified in the <strong>NBC 105:2025 foreword</strong>. Its damage-limitation/serviceability reference is separately 20 years, so E1 must not be equated with that event. A return period describes a statistical exceedance rate, not a fixed interval between earthquakes or a prediction that the next event is hundreds of years away. The bare label E1 needs its code context.</p>",
                    sources: [{ id: "DESI787-00299", set: 32, question: 30 }]
                },
                {
                    html: "<p><strong>Bank check — 1.5 and the live/dead comparison:</strong> 1.5 is correct for LL in the specified IS 800:2007 Table 4 strength combination DL + LL with one imposed action; DL also has factor 1.5 there. The generic limit-state factor-of-safety question omits the combination and action, so its 1.5 key is not universal. The separate larger-for-live-load assertion fails in this very case and in other code-dependent comparisons. Its case/loading-dependent alternatives are more defensible than a blanket inequality, but the question does not uniquely distinguish those overlapping alternatives.</p>",
                    sources: [
                        { id: "DESI787-00255", set: 28, question: 25 },
                        { id: "DESI787-00306", set: 33, question: 25 },
                        { id: "DESI787-00313", set: 33, question: 32 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — dead-load unity does not make every SLS factor unity:</strong> both stored dead-load answers, <strong>1.0</strong>, agree with the listed IS 800:2007 serviceability combinations. However, Table 4 gives <strong>1.0DL + 0.8LL + 0.8WL/EL</strong> for the combined three-action case, whereas DL + WL/EL uses 1.0 for both included actions. Amendment 1 of January 2012 directs §5.6.1 to Table 4. The explanations' general all-serviceability-factors-equal-one rule is therefore not a reliable statement of the checked amended edition.</p>",
                    sources: [
                        { id: "DESI787-00308", set: 33, question: 27 },
                        { id: "DESI787-00309", set: 33, question: 28 }
                    ]
                },
                {
                    html: "<p><strong>Bank check — 0.35 has a specific IS source:</strong> IS 800:2007 Table 4 directly gives <strong>1.0DL + 0.35LL + 1.0AL</strong> for the listed accidental situation. LL means imposed load despite the stem's stray definition of WL. The 0.35 key is supported in this context, but the explanation's generic appeal to many codes or Eurocode is unnecessary and should not be treated as a universal accidental-load factor. The accidental action and the associated resistance/performance assessment still have to be specified.</p>",
                    sources: [{ id: "DESI787-00310", set: 33, question: 29 }]
                },
                {
                    html: "<p><strong>Bank check — notional force and Proposed NBC 111:</strong> 0.5% is verified in IS 800:2007 §4.3.6 for <strong>that level's factored dead plus vertical imposed loads</strong>, acting with gravity in one orthogonal direction at a time. This procedure does not combine the notional forces with wind/earthquake/temperature or use them as net foundation shear and overturning loads. The bank's NBC 111:2025 link is explicitly <strong>Proposed</strong>; no adoption was established. NBC 111:1994 instead adopts IS 800:1984. The draft and the checked 2007 comparison must not be represented as the same nationally enforceable document.</p>",
                    sources: [{ id: "DESI787-00311", set: 33, question: 30 }]
                }
            ],
            references: [
                {
                    title: "NBC 104:1994 — Wind Load; Nepal amendments to IS 875 Part 3:1987 (official PDF)",
                    url: "https://giwmscdnone.gov.np/media/app/public/54/posts/1679824060_73.pdf"
                },
                {
                    title: "IS 875 Part 2:1987 — Imposed Loads; roof Table 2 and §4.5.1 (archived standard)",
                    url: "https://archive.org/stream/gov.law.is.875.2.1987/is.875.2.1987_djvu.txt"
                },
                {
                    title: "IS 875 Part 3:2015 — Wind Loads, including April 2016 amendment; edition comparison (archived standard)",
                    url: "https://archive.org/stream/gov.in.is.875.3.2015/is.875.3.2015_djvu.txt"
                },
                {
                    title: "IS 875 Part 4:1987 — Snow Loads; checked legacy §3.1 (archived standard)",
                    url: "https://archive.org/stream/gov.in.is.875.4.1987/is.875.4.1987_djvu.txt"
                },
                {
                    title: "IS 800:2007 — General Construction in Steel, including Amendment 1, January 2012 (archived standard)",
                    url: "https://archive.org/stream/gov.in.is.800.2007/is.800.2007_djvu.txt"
                },
                {
                    title: "IS 1893 Part 1:2016 — General Provisions and Buildings; orthogonal seismic combinations (archived standard)",
                    url: "https://archive.org/stream/gov.in.is.1893.1.2016/IS1893%3APart1%3A2016_djvu.txt"
                },
                {
                    title: "NBC 105:2025 — Seismic Design of Buildings in Nepal; spectra and performance levels (official PDF)",
                    url: "https://giwmscdnone.gov.np/media/files/NBC_105_2025_Seismic%20Design%20of%20Buildings%20in%20Nepal_lqqvx6a.pdf"
                },
                {
                    title: "BIS official catalogue — edition cross-check: IS 875 Part 4:2021 and IS 1893 Part 4:2024 listed; full status not audited",
                    url: "https://standards.bis.gov.in/website/know-your-standards"
                }
            ]
        }
    });
})();