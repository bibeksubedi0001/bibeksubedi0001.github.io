(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0506: {
            code: "ACiE0506",
            questionCount: 30,
            blocks: [
                {
                    id: "timber-masonry-scope-and-code-families",
                    title: "Timber and masonry: follow the load path",
                    html: "<p><strong>5.6 Timber and masonry structures</strong> covers timber beams and columns; masonry design principles, mandatory rules of thumb and NBC; masonry properties and failure modes; and mud, lime and cement mortars. Start with the load path: roof or floor to beam, bearing or column, wall and foundation. At each transfer, distinguish material strength, member stability, deformation and connection action. A satisfactory bending stress does not establish satisfactory bearing or lateral restraint.</p>" +
                        "<table><thead><tr><th scope='col'>Checked study edition</th><th scope='col'>Role in these notes</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>IS 883:2016, fifth revision</th><td>Structural timber properties, working stresses, beam checks and column provisions.</td></tr>" +
                        "<tr><th scope='row'>IS 1905:1987, third revision</th><td>Structural use of unreinforced masonry: restraint, slenderness and permissible stresses. Its scope excludes mud-mortar walls.</td></tr>" +
                        "<tr><th scope='row'>IS 2250:1981, first revision</th><td>Preparation, selection and testing of masonry mortars; mud mortar is outside its scope.</td></tr></tbody></table>" +
                        "<p>The DUDBC catalogue identity check establishes <strong>NBC 112 as Timber, NBC 111 as Steel, and NBC 109 as Masonry: Unreinforced</strong>. These identities correct the bank's timber/steel reversal; they do not establish that NBC 112 adopts the 2016 Indian edition. Numerical provisions below belong to the expressly named, inspected editions. Catalogue identification, an engineering calculation and compliance with the edition adopted for a particular Nepal project are different matters.</p>",
                    sources: [
                        { id: "DESI787-00135", set: 15, question: 33 },
                        { id: "DESI787-00136", set: 16, question: 25 }
                    ]
                },
                {
                    id: "timber-masonry-grain-and-orthotropy",
                    title: "Grain direction controls timber behaviour",
                    html: "<p><em>Syllabus extension: material behaviour needed to understand timber beams and columns; not an additional assigned question.</em> Timber is approximately <strong>orthotropic</strong>: longitudinal, radial and tangential directions have different properties. Fibres run mainly along the member, so direct tension and compression parallel to grain differ greatly from loading across grain. Longitudinal bending stiffness E is not a permissible stress, and one isotropic relationship borrowed from steel cannot determine all timber shear moduli and Poisson ratios.</p>" +
                        "<ul><li><strong>Bending:</strong> opposite outer fibres carry longitudinal tension and compression. Knots and sloping grain interrupt this load path, especially near highly stressed edges.</li><li><strong>Longitudinal shear:</strong> neighbouring fibres can slide relative to one another. Strong direct resistance along grain does not imply strong resistance to splitting or shear along grain.</li><li><strong>Bearing across grain:</strong> a support presses across the fibres and can cause local indentation or crushing even when the beam's bending check is satisfactory.</li><li><strong>Columns:</strong> axial compression is usually parallel to grain, but initial crookedness, eccentric joints and inadequate bracing introduce bending and instability.</li></ul>" +
                        "<p>Use the property for the actual stress direction and failure mechanism. Keep E, permissible bending stress, horizontal shear stress and compression perpendicular to grain as separate inputs. A single generic timber strength cannot replace these distinct checks.</p>",
                    sources: []
                },
                {
                    id: "timber-masonry-moisture-species-and-durability",
                    title: "Moisture, species and durability in service",
                    html: "<p><em>Syllabus extension: selection and service behaviour of beam and column timber.</em> Moisture content on an oven-dry mass basis is <strong>MC = 100(m − m<sub>0</sub>)/m<sub>0</sub></strong>, where m is the current mass and m<sub>0</sub> the oven-dry mass in the same units. It is a percentage, not a percentage of the current wet mass. Loss of bound water causes shrinkage, generally much greater across grain than along it; uneven drying can produce checks, warping and joint movement.</p>" +
                        "<p><strong>Seasoning</strong> brings timber towards an appropriate service moisture condition before final grading and use. It does not make timber waterproof, repair decay or eliminate every insect risk. Repeated wetting changes dimensions and stiffness; sustained moisture can favour fungal decay. Termite resistance requires its own assessment, since dry-looking timber is not automatically protected.</p>" +
                        "<p>Sal, sissoo, teak and deodar illustrate why a species must be identified rather than called merely hardwood or softwood. Select documented properties for the actual species, source, structural grade and exposure. Natural durability, ease of preservative penetration and strength are separate characteristics; a strong or dense species is not necessarily easy to treat. IS 883:2016 distinguishes inside, outside and wet locations and gives species-specific data; it does not assign every timber E = 13 000 N/mm<sup>2</sup>.</p>" +
                        "<p>Detail bearings to avoid persistent damp and trapped moisture, allow appropriate ventilation, and use properly specified protective treatment where required. These measures address deterioration; they do not substitute for checking the remaining sound section, joints and loads.</p>",
                    sources: []
                },
                {
                    id: "timber-masonry-group-c-and-working-stresses",
                    title: "Species group, structural grade and working stress",
                    html: "<p>A <strong>species group</strong> summarizes reference strength and stiffness properties; a <strong>structural grade</strong> limits strength-reducing characteristics in an individual seasoned piece. Select grade, Grade I and Grade II are therefore not alternative names for species Groups A, B and C. Exposure and loading duration introduce further distinctions.</p>" +
                        "<table><thead><tr><th scope='col'>Group C quantity</th><th scope='col'>IS 883:2016 distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Stated grouping band for E</th><td>5 600 &lt; E ≤ 9 800 N/mm<sup>2</sup>, under §5.1.1. The grouping note applies E to all locations.</td></tr>" +
                        "<tr><th scope='row'>Stated grouping band for f<sub>b</sub></th><td>8.5 &lt; f<sub>b</sub> ≤ 12 N/mm<sup>2</sup>. This extreme-fibre bending-stress band is for inside location.</td></tr>" +
                        "<tr><th scope='row'>Minimum group baseline</th><td>Table 9 separately gives Grade I inside-location bending/tension baseline 8.5 N/mm<sup>2</sup> and an E baseline of 5.6 × 10<sup>3</sup> N/mm<sup>2</sup>.</td></tr></tbody></table>" +
                        "<p>The <strong>8.5 baseline is not the 12 upper endpoint of the grouping band</strong>, and the band is not f<sub>b</sub> &lt; 8.5. Nor does membership authorize using 12 for every Group C member. Select the applicable species or group basis, grade and location, then apply only the adjustments justified by the design conditions. E describes stiffness; increasing an allowable stress does not automatically increase the beam's deflection modulus. The selected values above are a comparison of meanings, not a replacement for the standard's species tables.</p>",
                    sources: [{ id: "DESI787-00131", set: 15, question: 29 }]
                },
                {
                    id: "timber-masonry-flexure-and-depth-correction",
                    title: "Timber flexure and the 300 mm depth distinction",
                    html: "<p>For a straight, prismatic member in small, approximately linear-elastic bending, use <strong>σ<sub>b</sub> = M/Z</strong>, or equivalently M = σ<sub>b</sub>Z. Here M is bending moment, I the second moment of area about the bending axis, c the distance to the extreme fibre and Z = I/c the elastic section modulus. Compare the calculated stress with the applicable working bending stress, not with an unrelated material-group boundary.</p>" +
                        "<table><thead><tr><th scope='col'>Section and dimensions</th><th scope='col'>Elastic geometry</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Rectangle: width b, depth d</th><td>I = bd<sup>3</sup>/12; Z = bd<sup>2</sup>/6, for bending through the depth.</td></tr>" +
                        "<tr><th scope='row'>Solid circle: diameter D</th><td>I = πD<sup>4</sup>/64; Z = πD<sup>3</sup>/32.</td></tr></tbody></table>" +
                        "<p>With dimensions in mm, I is in mm<sup>4</sup> and Z in mm<sup>3</sup>. Moment in N mm then gives stress in N/mm<sup>2</sup>; 1 kN m = 10<sup>6</sup> N mm. Increasing a rectangular depth improves Z quadratically and I cubically, but can make lateral restraint more important.</p>" +
                        "<p>IS 883:2016 §§7.5.3–7.5.4(a) retain the usual bending relationship. Its rectangular <strong>depth/form-factor correction is not applied when d ≤ 300 mm</strong>. Above 300 mm, use the applicable depth correction in establishing the bending allowance; M = σ<sub>b</sub>Z does not stop being a valid elastic relationship. The depth correction and a lateral-stability check address different issues. Neither permits ignoring shear, bearing or deflection.</p>",
                    sources: [{ id: "DESI787-00127", set: 15, question: 25 }]
                },
                {
                    id: "timber-masonry-form-factors-and-orientation",
                    title: "Form factors are not plastic reserve factors",
                    html: "<p>IS 883:2016 §7.5.4(c–d) assigns a timber bending <strong>form factor K<sub>f</sub> = 1.18 for a solid circle</strong> and <strong>1.414 for a square loaded in the direction of a diagonal</strong>. They are empirical adjustments to the permissible bending stress. With F<sub>b,base</sub> denoting the applicable allowance before this adjustment, its form-adjusted value is K<sub>f</sub>F<sub>b,base</sub>; calculate the moment resistance using the elastic Z of the actual section orientation.</p>" +
                        "<p><strong>Geometry check:</strong> for a square of side a, rotating from loading normal to a face to loading along a diagonal leaves the centroidal I = a<sup>4</sup>/12 unchanged. The extreme-fibre distance becomes a/√2 instead of a/2, so Z becomes a<sup>3</sup>/(6√2) instead of a<sup>3</sup>/6. The 1.414 allowance must not be counted again by inventing a larger I or Z.</p>" +
                        "<p>The plastic-to-elastic modulus ratio Z<sub>p</sub>/Z<sub>e</sub> for an ideal fully plastic solid circle is 16/(3π) ≈ 1.698. That different, ductile-material concept explains neither the timber value 1.18 nor a supposed timber moment reserve after first yield. Timber splitting, grain defects and unequal tension/compression behaviour prevent such a blanket plastic interpretation. Apply the timber form factor once, within its own code conditions.</p>",
                    sources: [
                        { id: "DESI787-00133", set: 15, question: 31 },
                        { id: "DESI787-00134", set: 15, question: 32 }
                    ]
                },
                {
                    id: "timber-masonry-beam-checks-and-assumed-example",
                    title: "Independent beam checks and an assumed example",
                    html: "<p><em>Syllabus extension and illustrative calculation: the following dimensions, loads, bearing length and E are assumed, not supplied by a bank question.</em> A timber beam needs independent bending, horizontal shear, bearing and deflection checks. Near a simple support, bending moment can be small while shear and bearing are critical. A notch, hole or split can invalidate the unnotched-section calculation.</p>" +
                        "<p>Assume a simply supported, unnotched rectangle b = 100 mm, d = 200 mm and effective span L = 4 000 mm. Take uniform service load w = 1 N/mm = 1 kN/m, comprising assumed dead load w<sub>D</sub> = 0.4 N/mm <strong>including self-weight</strong> and imposed load w<sub>Q</sub> = 0.6 N/mm. Assume bearing length ℓ<sub>b</sub> = 100 mm at each end and constant longitudinal E = 10 000 N/mm<sup>2</sup>, a hypothetical stiffness, not a species rating. Use a small-deflection bending-only model with immovable supports.</p>" +
                        "<table><thead><tr><th scope='col'>Calculated quantity</th><th scope='col'>Working and result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Reaction and maximum moment</th><td>R = wL/2 = 2 000 N; M = wL<sup>2</sup>/8 = 2 × 10<sup>6</sup> N mm.</td></tr>" +
                        "<tr><th scope='row'>Section geometry</th><td>I = 6.6667 × 10<sup>7</sup> mm<sup>4</sup>; Z = 6.6667 × 10<sup>5</sup> mm<sup>3</sup>.</td></tr>" +
                        "<tr><th scope='row'>Bending demand</th><td>σ<sub>b</sub> = M/Z = 3.00 N/mm<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>Horizontal shear demand</th><td>τ<sub>max</sub> = 3V/(2bd) = 0.15 N/mm<sup>2</sup>, using V = R without near-support load reductions.</td></tr>" +
                        "<tr><th scope='row'>Bearing across grain</th><td>σ<sub>⊥</sub> = R/(bℓ<sub>b</sub>) = 0.20 N/mm<sup>2</sup>, assuming full contact over that net bearing area.</td></tr>" +
                        "<tr><th scope='row'>Instantaneous bending deflection</th><td>δ = 5wL<sup>4</sup>/(384EI) = 5.00 mm.</td></tr></tbody></table>" +
                        "<p>These are <strong>demands, not certified capacities</strong>. Compare 3.00, 0.15 and 0.20 with separately established bending, horizontal-shear and perpendicular-to-grain bearing allowances. No strength is inferred from the assumed E. Lateral restraint, connections, net sections, shear deformation, bearing movement and long-duration deflection still need consideration. The dead/imposed split is stated so that a sustained-load deflection adjustment can be made without silently doubling every load.</p>",
                    sources: []
                },
                {
                    id: "timber-masonry-beam-proportions-and-restraint",
                    title: "Beam proportions and lateral restraint",
                    html: "<p>A deep, narrow beam can twist or buckle sideways before its simple bending allowance is reached. Restraint must prevent the relevant movement and transfer its forces into a stable supporting system; a floorboard or roof covering is not automatically adequate bracing merely because it touches the member.</p>" +
                        "<p>IS 883:2016 §§7.5.5–7.5.6.1 give the separate dimensional checks <strong>b<sub>min</sub> = max(50 mm, L/50)</strong> and, without lateral stiffening, <strong>d ≤ 3b</strong>. Use the same length units for L, b and d.</p>" +
                        "<table><thead><tr><th scope='col'>Actual bank dimensions</th><th scope='col'>Calculation</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Span 4.0 m</th><td>max(50, 4 000/50) = <strong>80 mm</strong></td><td>Code minimum from the width rule, not the stored 100 mm.</td></tr>" +
                        "<tr><th scope='row'>Width 7 cm = 70 mm</th><td>3 × 70 = <strong>210 mm</strong></td><td>Depth limit from the unstiffened proportion rule; this separate question gives no span or load.</td></tr></tbody></table>" +
                        "<p>Members with depth exceeding 3b, span exceeding 50b, or both require lateral restraint under the cited provision, with restraint spacing not exceeding 50b. That requirement does not erase the separate minimum-width check. Do not combine the two bank questions into an assumed 70 mm-wide, 4 m beam. A designer may need a width larger than 80 mm for strength, deflection or detailing, but that does not make 100 mm the result of the stated minimum-width formula.</p>",
                    sources: [
                        { id: "DESI787-00139", set: 16, question: 28 },
                        { id: "DESI787-00140", set: 16, question: 29 }
                    ]
                },
                {
                    id: "timber-masonry-deflection-and-sustained-loads",
                    title: "Deflection depends on support, finishes and duration",
                    html: "<p>For constant EI and small elastic bending, a simply supported beam has centre deflection <strong>PL<sup>3</sup>/(48EI)</strong> under a central point force P and <strong>5wL<sup>4</sup>/(384EI)</strong> under a full-span UDL w. A cantilever has tip deflection <strong>PL<sup>3</sup>/(3EI)</strong> under a tip force and <strong>wL<sup>4</sup>/(8EI)</strong> under full-length UDL. Here P is force, w is force per length, L is the applicable span or freely hanging length, and EI has units force × length<sup>2</sup>. These formulas omit shear deformation and support/joint movement.</p>" +
                        "<table><thead><tr><th scope='col'>IS 883:2016 §7.5.9.6 case</th><th scope='col'>Deflection limit</th><th scope='col'>Bank-length calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Flexural member supporting brittle material</th><td>L/360</td><td>At 4 m: 4 000/360 = <strong>11.11 mm</strong>.</td></tr>" +
                        "<tr><th scope='row'>Other flexural member, non-cantilever case</th><td>L/240</td><td>At 4 m: 4 000/240 = <strong>16.67 mm</strong>.</td></tr>" +
                        "<tr><th scope='row'>Other flexural member, cantilever case</th><td>Freely hanging length/150</td><td>At 2 m: 2 000/150 = <strong>13.33 mm</strong>.</td></tr></tbody></table>" +
                        "<p>Thus the two stored numerical answers are conditional on the finish/support category; a length alone does not identify every serviceability requirement. Do not apply the other-member cantilever allowance blindly to brittle finishes.</p>" +
                        "<p><strong>Sustained loading:</strong> timber continues deforming under a maintained load. For initially dry beams and joists, §7.5.9.6.2 makes the dead-load contribution twice its instantaneous value in the effective-load deflection check; §7.5.9.6.3 requires self-weight. In the separately labelled assumed example, w<sub>eff</sub> = 2(0.4) + 0.6 = 1.4 N/mm, so that bending-only check gives 1.4 × 5 = <strong>7 mm</strong>. This is not an instruction to double all imposed loads, nor a strength increase or a complete prediction of every creep condition.</p>",
                    sources: [
                        { id: "DESI787-00137", set: 16, question: 26 },
                        { id: "DESI787-00138", set: 16, question: 27 }
                    ]
                },
                {
                    id: "timber-masonry-solid-column-slenderness",
                    title: "Timber columns and the S/d convention",
                    html: "<p>Column design combines material compression with stability. For a concentric load P acting along grain, average direct stress is <strong>σ<sub>c</sub> = P/A</strong>, with P in N and area A in mm<sup>2</sup>. Short members can be governed mainly by compression; increasingly slender members need a reduced column allowance dependent on stiffness, length and restraint. Eccentricity e adds a first-order moment Pe, and lateral deflection can further magnify it.</p>" +
                        "<p>IS 883:2016 §7.6 uses formulas for <strong>pin-ended columns</strong>; the length must be suitably modified for other end conditions. In that convention S is unsupported overall length and d the least lateral dimension of the solid section, both in the same units. §7.6.1 classifies a solid column as short when <strong>S/d ≤ 11</strong>; intermediate and long-column allowances require the appropriate material-dependent relationships. §7.6.1.4 separately limits solid-column <strong>S/d to 50</strong>. Meeting 50 is not the same as meeting a permissible-load check.</p>" +
                        "<p>Do not replace d by radius of gyration r and call the limit L<sub>e</sub>/r = 50. For example, a solid circle has r = D/4, whereas its actual least dimension is D; the two ratios are numerically different. Establish restraint in both principal directions, and do not treat a beam meeting a post as automatic rotational fixity. The assigned slenderness item supplies no species, grade, load or end-detail dataset from which to calculate a column capacity.</p>",
                    sources: [{ id: "DESI787-00072", set: 9, question: 28 }]
                },
                {
                    id: "timber-masonry-circular-column-comparison",
                    title: "Circular columns and the equal-area square",
                    html: "<p>IS 883:2016 §7.6.1.5 imposes a <strong>permissible-load comparison</strong>: the load permitted on a circular timber column must not exceed that permitted for a square column of equivalent cross-sectional area. This is a prescribed design comparison, not a claim that circular columns have a smaller actual least dimension or universally inferior Euler capacity.</p>" +
                        "<p>Let D be the circle diameter and a the side of the equal-area square. Equating areas gives <strong>a<sup>2</sup> = πD<sup>2</sup>/4</strong>, hence <strong>a = (√π/2)D ≈ 0.886D</strong>, the rounded relation used by the provision. Therefore <strong>D &gt; a</strong>, directly contradicting the explanations' smaller-circle-dimension argument.</p>" +
                        "<p><em>Geometric illustration only, not bank givens:</em> if D = 200 mm, the equal-area square side is approximately 177.25 mm and either area is approximately 31 416 mm<sup>2</sup>. Those geometric results do not give a permissible load. Apply the square-column calculation with the corresponding length convention and material conditions, then respect the circular-column cap. Connection eccentricity, bearing and bracing remain separate issues. Equal area alone is insufficient to rank arbitrary columns or explain the origin of the code rule.</p>",
                    sources: [
                        { id: "DESI787-00036", set: 5, question: 30 },
                        { id: "DESI787-00074", set: 9, question: 30 }
                    ]
                },
                {
                    id: "timber-masonry-units-bond-and-assemblage",
                    title: "Masonry is an assemblage, not a brick-strength number",
                    html: "<p><em>Syllabus extension: masonry properties and the design sequence behind the bank's strength questions.</em> A wall combines bricks, blocks or stones with bed joints, vertical joints and connections to other elements. Its behaviour depends on unit strength and absorption, mortar stiffness and bond, joint thickness, curing, workmanship and geometry. A strong unit on an uneven or poorly filled bed can develop concentrated contact stresses rather than uniform compression.</p>" +
                        "<p><strong>Bond</strong> means overlapping units in successive courses and tying the masonry through its thickness, not merely selecting a decorative face pattern. Avoiding continuous vertical joints assists load distribution; headers, bond stones or suitably designed ties can connect thicknesses where appropriate. Mortar must provide bedding and bond, but cannot be assumed to glue two poorly connected wall portions into a monolithic section.</p>" +
                        "<p>A test strength is obtained from failure load divided by the test's prescribed loaded area. Identify whether a report concerns one unit, a mortar specimen or a masonry prism, and whether it reports an individual result, a mean or another specified statistic. None is automatically an allowable wall stress.</p>" +
                        "<p>For the inspected IS 1905:1987 working-stress method, §5.4.1 uses <strong>F<sub>wall</sub> = f<sub>basic</sub>k<sub>s</sub>k<sub>a</sub>k<sub>p</sub></strong>. Here f<sub>basic</sub> is the basic masonry compressive stress; k<sub>s</sub> accounts for slenderness/eccentricity, k<sub>a</sub> for sectional area and k<sub>p</sub> for unit shape under the applicable provisions. The factors are dimensionless and the stresses are in N/mm<sup>2</sup>. Determine demand and bearing, shear and lateral stability separately. This method is not extended to mud mortar, which that standard excludes.</p>",
                    sources: []
                },
                {
                    id: "timber-masonry-units-and-strength-claims",
                    title: "Pressure units before masonry strength claims",
                    html: "<p>Force divided by area is stress, so square the length conversion before comparing values. A tonne is mass; a historical masonry pressure stated in tonnes per square metre must be interpreted explicitly as <strong>tonne-force per square metre</strong> before it becomes a pressure. Using standard gravity, 1 tonne-force = 1 000 × 9.80665 = 9 806.65 N.</p>" +
                        "<table><thead><tr><th scope='col'>Bank-related quantity</th><th scope='col'>Correct conversion</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>100 N/cm<sup>2</sup></th><td>1 cm<sup>2</sup> = 100 mm<sup>2</sup>; therefore 100/100 = <strong>1 N/mm<sup>2</sup> = 1 MPa</strong>, not 10 MPa.</td></tr>" +
                        "<tr><th scope='row'>40 tonne-force/m<sup>2</sup></th><td>40 × 9 806.65 = 392 266 N/m<sup>2</sup> = <strong>0.392266 MPa</strong>, not 4 MPa.</td></tr>" +
                        "<tr><th scope='row'>1 N/mm<sup>2</sup></th><td>10<sup>6</sup> N/m<sup>2</sup> ≈ <strong>101.97 tonne-force/m<sup>2</sup></strong>, not 10.</td></tr></tbody></table>" +
                        "<p>The arithmetic does not establish a universal mortar minimum of 1 MPa. IS 2250:1981 §7.1 distinguishes loading and exposure conditions when selecting a mortar. Likewise, <strong>1:6 cement:sand is a nominal mix proportion, not a universal masonry capacity</strong>. The bank's 40 tonne-force/m<sup>2</sup> cannot be derived from that ratio alone: unit properties, mortar performance, specimen-versus-wall meaning, age, restraint, eccentricity and workmanship are missing. Converting a doubtful strength claim correctly does not validate the claim itself.</p>",
                    sources: [
                        { id: "BASI674-00170", set: 14, question: 10 },
                        { id: "BASI674-00193", set: 16, question: 6 }
                    ]
                },
                {
                    id: "timber-masonry-mud-lime-cement-selection",
                    title: "Choosing mud, lime and cement mortars",
                    html: "<p>Mortar selection balances bedding, bond, strength development, movement and the environment. A nominal ratio such as <strong>1:2 lime:sand</strong> commonly expresses loose volumes, not masses or a guaranteed strength. It is one common lime-mortar proportion, not the only suitable brickwork mix; lime type, sand grading, preparation, exposure and the required performance must accompany it.</p>" +
                        "<table><thead><tr><th scope='col'>Binder system</th><th scope='col'>Hardening and practical distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mud mortar</th><td>Unstabilized clayey earth binds mainly through drying and physical cohesion, not Portland-cement hydration. Wetting can soften or erode it, making moisture protection and its restricted construction system central to selection.</td></tr>" +
                        "<tr><th scope='row'>Air-lime mortar</th><td>Hardens mainly by carbonation. It needs carbon dioxide access and suitable moisture; neither rapid drying nor continuous saturation is an equivalent curing condition.</td></tr>" +
                        "<tr><th scope='row'>Hydraulic-lime mortar</th><td>Hydraulic constituents react with water as well as subsequent carbonation occurring. Its strength development and exposure suitability differ from those of air lime.</td></tr>" +
                        "<tr><th scope='row'>Cement or cement-lime mortar</th><td>Cement gains strength through hydration and needs appropriate moisture protection. Lime can improve workability and water retention, but the resulting mix must still meet its specified strength and durability requirements.</td></tr></tbody></table>" +
                        "<p><em>The mud and binder-mechanism comparison is syllabus context, not extra givens in the lime-ratio question.</em> Select compatible materials rather than simply the richest mortar available, and allow adequate strength development before applying construction loads. The inspected IS 2250:1981 and IS 1905:1987 scopes exclude mud mortar; NBC 203:2015 addresses its stated low-strength mud-masonry construction instead. These different scopes must not be merged into one strength table.</p>",
                    sources: [{ id: "BASI674-00194", set: 16, question: 7 }]
                },
                {
                    id: "timber-masonry-mortar-grade-and-shrinkage",
                    title: "Mortar grade and shrinkage are different questions",
                    html: "<p>In <strong>IS 1905:1987 §3.2.1, Table 1, H1 mortar has minimum 28-day compressive strength 10 N/mm<sup>2</sup></strong>. It is not 3 N/mm<sup>2</sup>. Keep the named edition and its grade system together rather than combining H1 with unrelated grade labels. A mortar grade is not the permissible compressive stress of a completed wall.</p>" +
                        "<p>IS 2250:1981's mortar-test procedure calculates compressive strength from maximum load divided by the prescribed specimen area and reports the average determinations. Do not silently rename every stated test minimum a characteristic lower-fractile strength. Test preparation, curing, age and the reporting convention matter when interpreting the number.</p>" +
                        "<p><strong>Rich cement mortar and cracking:</strong> more cement paste can increase shrinkage tendency, particularly with excessive water or drying. If surrounding masonry restrains this contraction, tensile stress develops; the joint or its interface may crack even though the mortar has high compressive strength. Sand grading, paste content, curing, joint thickness and restraint all influence the outcome. Shrinkage susceptibility does not mean the rich mortar necessarily has less compressive strength.</p>" +
                        "<p>The two rich-mortar items test this shrinkage mechanism. Their wording does not establish a verified universal ban on every mix richer than 1:3, nor prove that extra cement never increases masonry strength. Specify the required performance and compatible mix for the loading and exposure; do not replace material selection with either richer is always better or richer is never allowed.</p>",
                    sources: [
                        { id: "DESI787-00120", set: 14, question: 27 },
                        { id: "DESI787-00121", set: 14, question: 28 },
                        { id: "DESI787-00122", set: 14, question: 29 }
                    ]
                },
                {
                    id: "timber-masonry-consistency-and-retentivity",
                    title: "Consistency and retentivity measure different behaviour",
                    html: "<p>A workable mortar spreads and beds the units without excessive segregation, yet remains workable when absorbent units draw moisture from it. <strong>Consistency</strong> describes its fresh deformation in a defined test; <strong>water retentivity</strong> describes its resistance to loss of workability under specified suction. Neither is measured simply by counting the water initially added.</p>" +
                        "<table><thead><tr><th scope='col'>Inspected provision</th><th scope='col'>Measurement and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>IS 2250:1981 §9.1.1, Appendix B</th><td>For laying solid-brick walls, the recommended cone-penetration depth is <strong>90–130 mm = 9–13 cm</strong>. This is mortar penetration, not concrete slump.</td></tr>" +
                        "<tr><th scope='row'>IS 2250:1981 §9.2, Appendix C</th><td>The <strong>flow after suction must be at least 70% of the initial flow</strong>, under the specified test. The clause highlights high-suction masonry units.</td></tr></tbody></table>" +
                        "<p>Writing the standard flow readings as F<sub>before</sub> and F<sub>after</sub>, the retention index is <strong>R = 100F<sub>after</sub>/F<sub>before</sub> ≥ 70%</strong>. Flow itself is the percentage increase in spread relative to the original mould-base diameter, not the spread diameter alone. <em>Illustrative readings, not bank givens:</em> if initial flow is 110, the threshold post-suction flow is 0.70 × 110 = 77. This is not 77 litres or evidence that 70% of mixing water remains.</p>" +
                        "<p>High suction can leave mortar too stiff to bed and bond properly. Appropriate unit preparation, mix selection and curing address that interaction; indiscriminately adding water can instead increase shrinkage or segregation. A passing fresh-mortar measurement does not on its own establish the strength of the finished wall.</p>",
                    sources: [
                        { id: "BASI674-00203", set: 17, question: 2 },
                        { id: "BASI674-00204", set: 17, question: 3 }
                    ]
                },
                {
                    id: "timber-masonry-failure-mechanisms",
                    title: "Recognize the masonry failure mechanism",
                    html: "<p>Masonry can crack in tension while carrying an overall compressive load. Mortar and units deform differently; lateral expansion of confined joints can induce transverse tensile stresses in units, producing <strong>vertical splitting</strong>. Local crushing or shear can also develop where contact, unit quality or joint behaviour governs. Failure is therefore not identified by average compression alone.</p>" +
                        "<table><thead><tr><th scope='col'>Action or condition</th><th scope='col'>Possible response</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Axial compression</th><td>Vertical tensile splitting, unit crushing or local joint/shear failure, depending on the assemblage and end restraint.</td></tr>" +
                        "<tr><th scope='row'>In-plane lateral loading</th><td>Sliding along weak bed joints or diagonal tensile cracking across units and joints; vertical compression can influence sliding resistance.</td></tr>" +
                        "<tr><th scope='row'>Out-of-plane loading</th><td>Wall bending opens joints or cracks units on the tension side; effective support conditions and the bending direction matter.</td></tr>" +
                        "<tr><th scope='row'>Large overturning moment</th><td>Rocking, separation or overturning as the resultant shifts towards an edge; foundation and connection behaviour are part of the mechanism.</td></tr>" +
                        "<tr><th scope='row'>Slender compression member</th><td>Growing lateral displacement and second-order bending can lead to instability before a simple material-crushing limit is reached.</td></tr></tbody></table>" +
                        "<p>The bank associates a very short pedestal with <strong>h/t &lt; 4</strong> and shear failure, where h is its height and t its thickness. This is a stocky-member heuristic, not a verified universal failure law. A small aspect ratio reduces the importance of slender-member buckling but does not prohibit vertical splitting, crushing or sliding. Unit/mortar properties, loading eccentricity and restraint are needed to decide which mechanism governs.</p>",
                    sources: [{ id: "DESI787-00124", set: 14, question: 31 }]
                },
                {
                    id: "timber-masonry-wall-slenderness-and-supports",
                    title: "Wall slenderness begins with the real supports",
                    html: "<p>For a wall under IS 1905:1987 §4.6.1, <strong>λ = min(H<sub>e</sub>/t<sub>e</sub>, L<sub>e</sub>/t<sub>e</sub>)</strong>. H<sub>e</sub> is effective height, L<sub>e</sub> effective length and t<sub>e</sub> effective thickness; λ is dimensionless. For an unstiffened solid wall, t<sub>e</sub> is the actual masonry thickness. The effective dimensions depend on restraints, not simply the overall measured rectangle. This wall rule is not the separate two-direction column rule.</p>" +
                        "<p>§4.3.1, Table 4 permits <strong>H<sub>e</sub> = 0.75H only with lateral and rotational restraint at both ends</strong>. Its examples include adequately bearing RCC floors/roofs, with minimum bearing 90 mm. H must be measured between the appropriate support levels specified by the table. A slab label alone, without its bearing/anchorage and support condition, does not prove that the required restraint exists.</p>" +
                        "<table><thead><tr><th scope='col'>Bank wall: H = 3 800 mm, t = 200 mm</th><th scope='col'>Height-based ratio</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Assume H<sub>e</sub> = H</th><td>3 800/200 = <strong>19</strong>.</td></tr>" +
                        "<tr><th scope='row'>Establish full restraint at both ends</th><td>H<sub>e</sub> = 0.75 × 3 800 = 2 850 mm; 2 850/200 = <strong>14.25</strong>.</td></tr></tbody></table>" +
                        "<p>If the supplied 5 m length is also taken as L<sub>e</sub> = 5 000 mm, its ratio is 25, and the respective height value governs. That effective-length assumption still needs its cross-wall/end conditions established. If 3.8 m denotes clear height rather than the required support-level distance, establish H first. Neither 19 nor 14.25 alone proves an allowable stress or building adequacy; maximum slenderness limits also depend on the specified material/system provisions, rather than a universal 27.</p>",
                    sources: [{ id: "DESI787-00033", set: 5, question: 27 }]
                },
                {
                    id: "timber-masonry-cavity-wall-effective-thickness",
                    title: "Cavity walls: effective thickness is not loaded area",
                    html: "<p>A cavity wall has two masonry leaves separated by a gap and connected by adequate ties or bonding units. The gap can serve environmental functions but is not load-bearing masonry. The load path must identify whether both leaves carry the imposed vertical load or only one does; ties must provide the assumed connection without assuming that the cavity is solid.</p>" +
                        "<p>For leaves of uniform thickness throughout, IS 1905:1987 <strong>§4.5.4 gives t<sub>e</sub> = 2(t<sub>1</sub> + t<sub>2</sub>)/3</strong>. Here t<sub>1</sub> and t<sub>2</sub> are actual leaf thicknesses in the same units. Under the bank's both-loaded-leaves case, §5.5.1.2(c) uses the wall's effective thickness for slenderness and the combined section's centre of gravity for load eccentricity. The cavity width is not added to t<sub>e</sub>.</p>" +
                        "<p><em>Illustrative dimensions, not bank givens:</em> two 100 mm leaves separated by 50 mm give t<sub>e</sub> = 133.33 mm, although the physical overall thickness is 250 mm. For a strip of width b along the wall, actual masonry area is b(t<sub>1</sub> + t<sub>2</sub>) when both leaves participate; b times either the cavity-inclusive thickness or t<sub>e</sub> is not that loaded area.</p>" +
                        "<p>For <strong>one loaded leaf</strong>, §5.5.1.2(d) requires two alternative permissible-stress calculations: whole-cavity effective geometry with eccentricity relative to the whole section, and loaded-leaf geometry with eccentricity relative to that leaf. The clause selects the greater properly calculated permissible stress, but <strong>only the actual loaded-leaf area resists the load in either alternative</strong>. The bank's always-use-the-loaded-leaf-alone explanation omits this distinction. No additional maximum-with-thicker-leaf rule is established by the checked §4.5.4.</p>",
                    sources: [{ id: "BASI674-00026", set: 3, question: 13 }]
                },
                {
                    id: "timber-masonry-eccentric-compression",
                    title: "Eccentric compression: mechanics versus code relaxation",
                    html: "<p>Consider an initially uncracked rectangular wall section of width b along the wall and thickness t, with vertical compressive force P and a moment across its thickness. Let e = |M|/P be resultant eccentricity, A = bt and Z = bt<sup>2</sup>/6. Under linear stress distribution, <strong>σ<sub>max,min</sub> = P/A ± |M|/Z = (P/A)(1 ± 6e/t)</strong>. With N and mm, the result is N/mm<sup>2</sup>.</p>" +
                        "<p>At <strong>e/t = 1/24</strong>, the edge stresses are <strong>1.25P/A and 0.75P/A</strong>; the bending contribution is not mechanically zero. At e/t = 1/6, the lightly loaded edge reaches zero stress. For e/t &gt; 1/6, that full-area elastic formula predicts tension and cannot be used as an all-compression resistance model.</p>" +
                        "<p><em>No-tension mechanics extension:</em> for t/6 &lt; e &lt; t/2, a triangular compression-only distribution over width a<sub>c</sub> through the thickness gives <strong>a<sub>c</sub> = 3(t/2 − e)</strong> and <strong>σ<sub>max</sub> = 2P/(ba<sub>c</sub>)</strong>, from force and moment equilibrium. This is an idealized section calculation, not permission to ignore instability or to use tensile masonry resistance.</p>" +
                        "<p>IS 1905:1987 <strong>§5.4.1.4</strong> treats design separately: its note permits ignoring bending compression when e/t ≤ 1/24. For 1/24 &lt; e/t ≤ 1/6 it permits a 25% increase in the applicable compressive allowance while the edge stress is checked. Above 1/6, the stated increase remains conditional and the tensile area is disregarded. Retain the relevant slenderness/eccentricity, area and unit-shape factors. These are code concessions within a particular method, not a general increase in load capacity, and not a licence for plastic redistribution as an edge yields.</p>",
                    sources: [
                        { id: "DESI787-00123", set: 14, question: 30 },
                        { id: "STRU935-00059", set: 7, question: 17 }
                    ]
                },
                {
                    id: "timber-masonry-cross-walls-and-buttresses",
                    title: "Cross walls and buttresses must complete a load path",
                    html: "<p>Cross walls, piers, buttresses and anchored floors or roofs can restrain wall displacement and transmit lateral forces onward to foundations. A <strong>buttress</strong> projects from the wall and develops its action through an effective connection to it. Simply placing a masonry projection beside a wall does not create the required composite action or lateral support.</p>" +
                        "<p>The bank's wall is <strong>50 m long and 5 m high</strong>. Properly connected and founded buttresses can shorten unsupported wall panels and improve lateral resistance. Stronger bricks or richer mortar alone do not create a missing restraint or an overturning load path. However, the given length and height omit wall thickness, loading, openings, condition, top restraint and foundation details; they cannot establish buttress spacing, dimensions or adequacy.</p>" +
                        "<p><em>Syllabus illustration, not a model of that wall:</em> a simply supported one-way strip under uniform transverse line load q has M<sub>max</sub> = qℓ<sup>2</sup>/8, with q in kN/m, supported span ℓ in m and moment in kN m. Halving that assumed span reduces this bending demand to one quarter at the same q. This explains why genuine intermediate support can matter more than increasing material strength alone; it does not prove that a free-standing wall behaves as that strip.</p>" +
                        "<p>Check the wall-to-buttress bond or anchorage, the buttress itself, its footing and soil reactions, and the route for both directions of lateral action. Roof diaphragms likewise need anchorage into suitable resisting walls. A restraint used to reduce slenderness must be able to deliver the associated forces, not merely appear on the plan.</p>",
                    sources: [{ id: "STRU935-00078", set: 9, question: 14 }]
                },
                {
                    id: "timber-masonry-earthquake-detailing-and-nbc-scope",
                    title: "Earthquake detailing and the limits of Nepal guidelines",
                    html: "<p><strong>NBC 203:2015</strong> is the inspected <em>Guidelines for Earthquake Resistant Building Construction: Low Strength Masonry</em>. Its scope is the specified low-strength, mud-mortar construction, including residential applicability and limits of two storeys plus attic; it is not a design rule for every masonry or reinforced-concrete building. The DUDBC catalogue distinguishes NBC 202:2015 <em>Guidelines on Load Bearing Masonry</em> from NBC 201's <em>Mandatory Rules of Thumb</em> title. NBC 205:2024 concerns RC ready-to-use detailing, not this low-strength masonry system.</p>" +
                        "<p>Two checked NBC 203:2015 geometry provisions are <strong>unsupported wall length ≤ 12t in §7.3</strong>, where t is wall thickness, and <strong>building/room length-to-breadth ratio ≤ 3:1 in §5.2</strong>. These dimensionless relationships have their stated construction scope and accompanying requirements. They are not a universal 4.5 m cross-wall spacing or a universal 13.5 m<sup>2</sup> room-area limit. The original edition and conditions that would justify those two unqualified bank numbers remain unverified; their product-like appearance is not proof of a code derivation.</p>" +
                        "<p><em>Syllabus extension: detailing principles, not a reinforcement schedule.</em> Earthquake resistance requires the separate walls, floors and roof to act together rather than separating at weak junctions.</p>" +
                        "<ul><li><strong>Continuity:</strong> appropriately detailed horizontal bands tie walls together at the levels required by the applicable system; continuity around corners and through junctions matters as much as their presence.</li><li><strong>Corners and openings:</strong> suitable vertical ties and connections at corners, wall intersections and opening jambs help maintain integrity. Regular openings and adequate intervening piers preserve load paths.</li><li><strong>Through-thickness integrity:</strong> bond or ties must connect wall portions so that faces do not separate from the core.</li><li><strong>Roof and floor action:</strong> diaphragm connections, roof anchorage and restraint of gables transmit lateral demand into resisting walls and onward to foundations.</li></ul>" +
                        "<p>These principles do not specify complete spans, band/bar sizes, tie spacings or foundation design. A different mandatory-rule or guideline route must satisfy its own scope; a building outside the selected prescriptive limits requires an engineered design under the appropriate adopted provisions, not extrapolation of these few numbers. Adding one band or buttress does not establish building safety.</p>",
                    sources: [
                        { id: "DESI787-00065", set: 8, question: 30 },
                        { id: "DESI787-00125", set: 14, question: 32 },
                        { id: "DESI787-00126", set: 14, question: 33 }
                    ]
                }
            ],
            gaps: [
                "The assigned timber items do not provide a complete species/grade, moisture, load and restraint dataset for designing a beam or column. The worked beam's dimensions, loads, bearing length and E are explicitly assumed; no material strength or completed capacity is invented.",
                "Grain behaviour, moisture, durability, species selection and masonry assemblage/bond explanations are labelled syllabus extensions. They introduce no extra bank sources or questions.",
                "The mortar-ratio and strength items lack the unit properties, test conditions, exposure and wall factors needed to infer a universal masonry capacity. A correct pressure conversion is not verification of the underlying strength claim.",
                "The wall example does not establish bearing length, anchorage, support-level height or effective end restraint. The cavity item supplies no leaf dimensions, tie design or eccentric loading dataset; its added numerical dimensions are explicitly illustrative.",
                "The provenance and complete applicability conditions of the bank's unqualified 4.5 m cross-wall spacing and 13.5 square metre room-area limit remain unverified. They are not attributed to the checked NBC 203:2015 provisions, nor declared invalid in every possible historical system.",
                "References identify checked editions and selected provisions, not verification of every amendment or the code edition adopted for a particular project. NBC catalogue identities do not establish all provisions of NBC 109, NBC 112, NBC 201, NBC 202 or NBC 205. Full seismic detailing, spans and foundation specifications are not supplied here."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank check: NBC timber and steel identities are reversed.</strong> DESI787-00135 stores NBC 111 for timber and describes NBC 112 as steel. The DUDBC catalogue identifies <strong>NBC 112 as Timber and NBC 111 as Steel</strong>. Correct the study distinction, not the stored key; catalogue identity alone does not verify adoption of a particular IS 883 edition.</p>",
                    sources: [{ id: "DESI787-00135", set: 15, question: 33 }]
                },
                {
                    html: "<p><strong>Bank check: Group C is not the below-8.5 band.</strong> DESI787-00131 conflicts with IS 883:2016 §5.1.1: the stated inside-location grouping is <strong>8.5 &lt; f<sub>b</sub> ≤ 12 N/mm<sup>2</sup></strong>, with 5 600 &lt; E ≤ 9 800 N/mm<sup>2</sup>. Table 9's Grade I minimum bending baseline of 8.5 has a different purpose. Neither 8.5 nor 12 is an automatically applicable working stress for every piece.</p>",
                    sources: [{ id: "DESI787-00131", set: 15, question: 29 }]
                },
                {
                    html: "<p><strong>Bank check: 300 mm qualifies a correction, not elastic equilibrium.</strong> DESI787-00127 overrestricts M = fZ. IS 883:2016 §§7.5.3–7.5.4(a) omit the rectangular depth correction at depths ≤ 300 mm; larger depth does not invalidate σ = M/Z. Depth correction, lateral restraint, shear, bearing and deflection must be distinguished.</p>",
                    sources: [{ id: "DESI787-00127", set: 15, question: 25 }]
                },
                {
                    html: "<p><strong>Bank check: timber form factors are not plastic shape factors.</strong> The values 1.18 and approximately 1.41 are supported by IS 883:2016 §7.5.4 for the specified circular and diagonal-square cases. DESI787-00133's yielding-reserve explanation is wrong; DESI787-00134 also should not imply that rotating a square increases its centroidal I. Use the actual elastic Z and the empirical stress adjustment once.</p>",
                    sources: [
                        { id: "DESI787-00133", set: 15, question: 31 },
                        { id: "DESI787-00134", set: 15, question: 32 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: minimum width is 80 mm for the stated 4 m span.</strong> DESI787-00140's stored 100 mm is not max(50, 4 000/50) under IS 883:2016 §7.5.5. DESI787-00139's 210 mm follows from 3 × 70, but does not complete the span/width, load or restraint checks. These are separate questions; their dimensions must not be silently combined.</p>",
                    sources: [
                        { id: "DESI787-00140", set: 16, question: 29 },
                        { id: "DESI787-00139", set: 16, question: 28 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: deflection answers need their finish category.</strong> At 4 m, L/240 gives 16.67 mm, but the brittle-material case in IS 883:2016 §7.5.9.6 gives L/360 = 11.11 mm. The 2 m cantilever's 13.33 mm comes from the other-member L/150 case. Neither length alone makes its stored allowance universal. Sustained dead-load effects and self-weight remain part of serviceability assessment.</p>",
                    sources: [
                        { id: "DESI787-00137", set: 16, question: 26 },
                        { id: "DESI787-00138", set: 16, question: 27 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: column convention and circular geometry.</strong> DESI787-00072's 50 is the solid-timber S/d limit in IS 883:2016, with the specified pin-ended length convention and adjustments for other ends, not L<sub>e</sub>/r = 50. The equal-area-square cap in DESI787-00036 and DESI787-00074 is a permissible-load rule. Their explanation reverses the dimensions: a = 0.886D is smaller than D. No general Euler-capacity ranking follows from their argument.</p>",
                    sources: [
                        { id: "DESI787-00072", set: 9, question: 28 },
                        { id: "DESI787-00036", set: 5, question: 30 },
                        { id: "DESI787-00074", set: 9, question: 30 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: two pressure conversions are wrong.</strong> BASI674-00170's 100 N/cm<sup>2</sup> equals <strong>1 MPa, not 10 MPa</strong>. BASI674-00193's 40 tonne-force/m<sup>2</sup> equals <strong>0.392266 MPa, not 4 MPa</strong>. Loading and exposure determine mortar selection; a nominal 1:6 ratio alone cannot establish wall strength. Correct units do not validate either unqualified design claim.</p>",
                    sources: [
                        { id: "BASI674-00170", set: 14, question: 10 },
                        { id: "BASI674-00193", set: 16, question: 6 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: H1 is 10 MPa in the inspected edition.</strong> DESI787-00121's 3 MPa key and accompanying mixed grade list do not match IS 1905:1987 §3.2.1, Table 1. H1's minimum 28-day mortar compressive strength is <strong>10 N/mm<sup>2</sup></strong>, not the allowable stress of a wall and not automatically a characteristic-strength statistic.</p>",
                    sources: [{ id: "DESI787-00121", set: 14, question: 28 }]
                },
                {
                    html: "<p><strong>Bank check: mix-selection statements are conditional.</strong> DESI787-00120 and DESI787-00122 identify shrinkage tendency in rich cement mortars, but do not establish a universal ban beyond 1:3 or a universal absence of strength gain. BASI674-00194's 1:2 lime:sand is one common proportion, not the only usable lime mortar. Lime type, materials, exposure, curing and required performance must be specified.</p>",
                    sources: [
                        { id: "DESI787-00120", set: 14, question: 27 },
                        { id: "DESI787-00122", set: 14, question: 29 },
                        { id: "BASI674-00194", set: 16, question: 7 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: identify what the mortar tests measure.</strong> BASI674-00203's 70% is the post-suction flow divided by initial flow under IS 2250:1981 §9.2, not the fraction of mixing water retained. BASI674-00204's 9–13 cm is 90–130 mm cone penetration for solid-brick-wall mortar under §9.1.1, not concrete slump or a rule confined only to high-suction solid bricks.</p>",
                    sources: [
                        { id: "BASI674-00203", set: 17, question: 2 },
                        { id: "BASI674-00204", set: 17, question: 3 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: slab presence does not settle effective height.</strong> DESI787-00033's 19 uses H<sub>e</sub> = 3.8 m. If full top/bottom lateral and rotational restraint under IS 1905:1987 Table 4 is established, H<sub>e</sub> = 0.75H gives <strong>14.25</strong> when height governs. Adequate RCC bearing includes the 90 mm condition. Effective length and the support-level definition of H must also be checked; the stem does not justify a blanket adequacy claim.</p>",
                    sources: [{ id: "DESI787-00033", set: 5, question: 27 }]
                },
                {
                    html: "<p><strong>Bank check: the cavity explanation oversimplifies one-leaf loading.</strong> BASI674-00026's both-loaded-leaves result is supported by IS 1905:1987 §4.5.4 for uniform leaves. The cavity is excluded from the two-thirds sum, and no added maximum-with-thicker-leaf wording was verified. For one loaded leaf, §5.5.1.2(d) requires the two alternative stress calculations, with loaded-leaf area used in either case.</p>",
                    sources: [{ id: "BASI674-00026", set: 3, question: 13 }]
                },
                {
                    html: "<p><strong>Bank check: an eccentricity concession is not zero bending or plasticity.</strong> At e/t = 1/24, elementary mechanics gives a maximum stress 1.25 times the average. DESI787-00123's omission is a code permission, not a zero-stress result. STRU935-00059's 25% increase still needs the applicable edge-compression and wall-factor checks; beyond e/t = 1/6, the tensile area is disregarded. Local yielding/plastic redistribution is not the verified explanation.</p>",
                    sources: [
                        { id: "DESI787-00123", set: 14, question: 30 },
                        { id: "STRU935-00059", set: 7, question: 17 }
                    ]
                },
                {
                    html: "<p><strong>Bank check: stockiness does not uniquely determine failure.</strong> DESI787-00124's shear choice for h/t &lt; 4 is a short-member heuristic. Axially loaded masonry can also split vertically or crush, with joint sliding and other mechanisms depending on loading and materials. The aspect ratio alone is not a verified universal shear-failure criterion.</p>",
                    sources: [{ id: "DESI787-00124", set: 14, question: 31 }]
                },
                {
                    html: "<p><strong>Bank check: do not turn isolated masonry answers into universal NBC rules.</strong> DESI787-00125 and DESI787-00126 supply no verified edition/conditions for general limits of 4.5 m and 13.5 m<sup>2</sup>. The checked NBC 203:2015 instead includes unsupported length ≤ 12t and plan/room aspect ratio ≤ 3:1 within its limited low-strength mud-masonry scope. DESI787-00065's NBC 203 identity does not broaden that scope.</p>" +
                        "<p>STRU935-00078's buttress is a plausible restraint concept for the 50 m by 5 m wall, not a demonstrated solution. Effective bonding, foundations, dimensions and loads remain necessary. No claim is made that adding the named feature alone makes a building safe.</p>",
                    sources: [
                        { id: "DESI787-00125", set: 14, question: 32 },
                        { id: "DESI787-00126", set: 14, question: 33 },
                        { id: "DESI787-00065", set: 8, question: 30 },
                        { id: "STRU935-00078", set: 9, question: 14 }
                    ]
                }
            ],
            references: [
                {
                    title: "IS 883:2016 — Design of Structural Timber in Buildings — Code of Practice, fifth revision (archived text; selected provisions checked)",
                    url: "https://archive.org/stream/gov.in.is.883.2016/IS883%3A2016_djvu.txt"
                },
                {
                    title: "IS 1905:1987 — Code of Practice for Structural Use of Unreinforced Masonry, third revision (archived text; selected provisions checked)",
                    url: "https://archive.org/stream/gov.in.is.1905.1987/is.1905.1987_djvu.txt"
                },
                {
                    title: "IS 2250:1981 — Code of Practice for Preparation and Use of Masonry Mortars, first revision (archived text; selected provisions checked)",
                    url: "https://archive.org/stream/gov.in.is.2250.1981/is.2250.1981_djvu.txt"
                },
                {
                    title: "DUDBC — Nepal National Building Code catalogue (code identities and titles checked)",
                    url: "https://dudbc.gov.np/pages/24231978/"
                },
                {
                    title: "NBC 203:2015 — Guidelines for Earthquake Resistant Building Construction: Low Strength Masonry (official document; selected scope and geometry provisions checked)",
                    url: "https://giwmscdnone.gov.np/media/app/public/54/posts/1679826255_5.pdf"
                }
            ]
        }
    });
})();