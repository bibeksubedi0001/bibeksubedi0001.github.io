(function () {
  "use strict";

  window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
  Object.assign(window.CIVIL_NOTE_TOPICS, {
    ACiE0103: {
      code: "ACiE0103",
      questionCount: 73,
      blocks: [
        {
          id: "masonry-units-and-closers",
          title: "Brick faces, courses and closers",
          html: "<p>A <strong>stretcher</strong> exposes the long face; a <strong>header</strong> exposes the short end and bonds across wall thickness. A <strong>course</strong> is a horizontal layer; the <strong>bed</strong> supports a unit. A 190 × 90 × 90 mm brick has 19 × 9 cm stretcher and 9 × 9 cm header faces. Allowing a 10 mm modular joint gives nominal one-brick/half-brick widths of 200/100 mm, not measured bare-wall thicknesses.</p>" +
            "<table><thead><tr><th scope='col'>Cut piece</th><th scope='col'>Geometry for a brick L × B × H</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Queen closer</th><td>L × B/2 × H; full length, half width.</td></tr>" +
            "<tr><th scope='row'>Half queen closer</th><td>L/2 × B/2 × H; height unchanged.</td></tr>" +
            "<tr><th scope='row'>King closer</th><td>Triangular corner removed between midpoints of an end and an adjoining side.</td></tr>" +
            "</tbody></table><p>A queen closer beside the quoin header supplies the required lap at a corner.</p>" +
            "<p><strong>Dimensional check:</strong> for the 190 × 90 × 90 mm unit, a queen closer is 190 × 45 × 90 mm; its half is 95 × 45 × 90 mm. Changing length does not halve height, and nominal brick modules must not replace actual dimensions.</p>",
          sources: [
            { id: "BASI674-00185", set: 15, question: 11 },
            { id: "BASI674-00196", set: 16, question: 9 },
            { id: "BASI674-00197", set: 1, question: 6 },
            { id: "BASI674-00199", set: 16, question: 11 },
            { id: "BASI674-00190", set: 16, question: 3 },
            { id: "BASI674-00187", set: 15, question: 13 },
            { id: "BASI674-00182", set: 15, question: 8 },
            { id: "BASI674-00177", set: 15, question: 3 },
            { id: "BASI674-00191", set: 16, question: 4 }
          ]
        },
        {
          id: "brick-bonds-and-workmanship",
          title: "Bond patterns and sound brickwork",
          html: "<table><thead><tr><th scope='col'>Bond</th><th scope='col'>Recognition and purpose</th></tr></thead><tbody>" +
            "<tr><th scope='row'>English</th><td>Separate header and stretcher courses alternate; effective transverse bonding.</td></tr>" +
            "<tr><th scope='row'>Flemish</th><td>Headers and stretchers alternate within each course.</td></tr>" +
            "<tr><th scope='row'>Single Flemish</th><td>Flemish appearance outside, English backing.</td></tr>" +
            "<tr><th scope='row'>Double Flemish</th><td>Flemish arrangement on both faces; workmanship matters.</td></tr>" +
            "<tr><th scope='row'>Dutch</th><td>English-family modification using three-quarter bats for corner lap.</td></tr>" +
            "<tr><th scope='row'>Stretcher</th><td>Suitable for a half-brick partition.</td></tr>" +
            "<tr><th scope='row'>Raking</th><td>Diagonal internal bonding in thick walls, not a universal weakest bond.</td></tr>" +
            "</tbody></table><p>Use sound bricks, filled joints and adequate overlap. Break vertical joints between adjacent courses; regular alignment in alternate courses is compatible with bonding. Use necessary bats/closers without filling the wall with fragments. Pre-wet absorbent clay bricks to remove dust and reduce suction from mortar; avoid a free water film. Maintain specified bed-joint thickness rather than changing it merely because a brick becomes a header.</p>",
          sources: [
            { id: "BASI674-00025", set: 3, question: 12 },
            { id: "BASI674-00172", set: 14, question: 12 },
            { id: "BASI674-00174", set: 1, question: 5 },
            { id: "BASI674-00175", set: 15, question: 1 },
            { id: "BASI674-00178", set: 15, question: 4 },
            { id: "BASI674-00179", set: 15, question: 5 },
            { id: "BASI674-00183", set: 15, question: 9 },
            { id: "BASI674-00192", set: 16, question: 5 },
            { id: "BASI674-00198", set: 16, question: 10 },
            { id: "BASI674-00003", set: 2, question: 3 },
            { id: "BASI674-00171", set: 14, question: 11 }
          ]
        },
        {
          id: "stone-masonry-and-arches",
          title: "Stonework and finished arches",
          html: "<p><strong>Coursed rubble</strong> uses roughly dressed stones of similar height within horizontal layers; uncoursed/random rubble lacks regular continuous courses. <strong>Ashlar</strong> uses accurately dressed stones, close-fitting beds and thin mortar joints. Coursing describes arrangement; fine tooling describes dressing, so these terms are not interchangeable.</p>" +
            "<p><strong>Through stones</strong> extend across the wall thickness and tie its faces together; backing and hearting describe rear and internal masonry, not equivalent ties. An <strong>ashlar arch</strong> has dressed stone voussoirs. A <strong>gauged brick arch</strong> uses accurately cut/rubbed bricks and fine joints for a refined appearance. Judge the units and finish, not merely the building's status.</p>",
          sources: [
            { id: "BASI674-00176", set: 15, question: 2 },
            { id: "BASI674-00181", set: 15, question: 7 },
            { id: "BASI674-00184", set: 15, question: 10 },
            { id: "BASI674-00186", set: 15, question: 12 },
            { id: "BASI674-00189", set: 16, question: 2 },
            { id: "BASI674-00200", set: 16, question: 12 }
          ]
        },
        {
          id: "pointing-and-plaster-preparation",
          title: "Preparing backgrounds and finishing joints",
          html: "<p>Plaster needs a clean, suitably damp, mechanically keyed background, not a polished or dusty surface.</p>" +
            "<ul><li><strong>Hacking:</strong> roughening smooth backgrounds to improve the key.</li><li><strong>Dubbing out:</strong> filling hollows before the main plaster coat; not a decorative finish.</li><li><strong>Float:</strong> spreading, pressing and evening mortar; a trowel also places and finishes mortar.</li></ul>" +
            "<p><strong>Pointing</strong> finishes exposed masonry joints; plaster covers the face. Struck pointing has an inclined face, with the upper edge recessed in this bank's description. Its weathered-pointing example is a projecting ridge, not a recessed V-groove. Specify the actual profile and water-shedding detail rather than relying on the name alone.</p>",
          sources: [
            { id: "BASI674-00006", set: 2, question: 6 },
            { id: "BASI674-00173", set: 14, question: 13 },
            { id: "BASI674-00216", set: 18, question: 2 },
            { id: "BASI674-00280", set: 22, question: 11 },
            { id: "BASI674-00281", set: 22, question: 12 },
            { id: "BASI674-00283", set: 22, question: 13 }
          ]
        },
        {
          id: "carpentry-tools-and-operations",
          title: "Carpentry: match the tool to the operation",
          html: "<table><thead><tr><th scope='col'>Tool or machine</th><th scope='col'>Function</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Rip saw</th><td>Cuts along the grain; crosscut teeth cut across it.</td></tr>" +
            "<tr><th scope='row'>Band saw</th><td>Continuous blade for suitable straight ripping or curved cuts.</td></tr>" +
            "<tr><th scope='row'>Spokeshave</th><td>Shapes and smooths curved timber surfaces.</td></tr>" +
            "<tr><th scope='row'>Countersink</th><td>Forms a conical recess for a flush screw head.</td></tr>" +
            "<tr><th scope='row'>Clamping vice</th><td>Holds work during cutting, drilling or joining.</td></tr>" +
            "<tr><th scope='row'>Claw hammer / wooden mallet</th><td>Drive/extract nails / strike appropriate tools without damaging handles.</td></tr>" +
            "<tr><th scope='row'>Lathe / thickness planer / grinder</th><td>Turn wood / size board thickness / sharpen tools.</td></tr>" +
            "</tbody></table><p><strong>Brick nogging</strong> is brick infill within a timber framework, not simply an ordinary stretcher-bond wall. The bank's tool spellings should read <em>rip saw</em> and <em>thickness planer</em>.</p>",
          sources: [
            { id: "BASI674-00188", set: 16, question: 1 },
            { id: "BASI674-00206", set: 17, question: 5 },
            { id: "BASI674-00207", set: 17, question: 6 },
            { id: "BASI674-00208", set: 17, question: 7 },
            { id: "BASI674-00209", set: 17, question: 8 },
            { id: "BASI674-00210", set: 17, question: 9 },
            { id: "BASI674-00211", set: 17, question: 10 },
            { id: "BASI674-00212", set: 17, question: 11 },
            { id: "BASI674-00213", set: 17, question: 12 }
          ]
        },
        {
          id: "painting-and-plaster-finishes",
          title: "Coatings, curing and surface defects",
          html: "<p>Prepare, clean and dry a painting substrate; use compatible primers/coats and drying intervals. <strong>Crazing</strong> forms fine cracks enclosing small areas; coarse crocodiling is not the same pattern. <strong>Chalking</strong> is powdering; <strong>blistering</strong> is local swelling, also found in plaster. Moisture, weak adhesion and unsuitable preparation require correction before recoating.</p>" +
            "<p>Distemper is a water-bound coating: dilution follows the product, not a universal water allowance. Traditional plaster on lath may use scratch, intermediate and finish coats; three coats applied directly to timber do not guarantee adhesion. Air-lime hardening involves carbonation; hydraulic lime also hydrates. Protect curing plaster against premature drying while following its material-specific requirements.</p>",
          sources: [
            { id: "BASI674-00103", set: 1, question: 2 },
            { id: "BASI674-00110", set: 10, question: 4 },
            { id: "BASI674-00215", set: 18, question: 1 },
            { id: "BASI674-00272", set: 22, question: 3 },
            { id: "BASI674-00282", set: 1, question: 10 }
          ]
        },
        {
          id: "damp-proofing-and-wall-movement",
          title: "DPC continuity, cavities and movement",
          html: "<p>A <strong>damp-proof course</strong> interrupts moisture passage, particularly capillary rise at plinth level. Make it continuous across walls and compatible with adjoining floor barriers. Horizontal and vertical protection address different moisture paths. Discolouration, deteriorating plaster and conditions favourable to termites are warning signs; DPC does not repair every source of dampness.</p>" +
            "<table><thead><tr><th scope='col'>DPC class</th><th scope='col'>Examples</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Flexible</th><td>Plastic sheets, suitable bituminous felts.</td></tr>" +
            "<tr><th scope='row'>Semi-rigid</th><td>Mastic asphalt.</td></tr>" +
            "<tr><th scope='row'>Rigid</th><td>Specified dense concrete, suitable stone/slate.</td></tr>" +
            "</tbody></table><p>Concrete requires proper detailing, compaction and curing; a nominal mix alone does not establish impermeability. A <strong>cavity wall</strong> has separated, tied leaves: keep the cavity clear of mortar bridges. <strong>Movement joints</strong> accommodate dimensional changes using suitable compressible/sealed details rather than rigid mortar. Their widths are design decisions.</p>",
          sources: [
            { id: "BASI674-00180", set: 15, question: 6 },
            { id: "BASI674-00195", set: 16, question: 8 },
            { id: "BASI674-00273", set: 22, question: 4 },
            { id: "BASI674-00274", set: 22, question: 5 },
            { id: "BASI674-00275", set: 22, question: 6 },
            { id: "BASI674-00276", set: 22, question: 7 },
            { id: "BASI674-00277", set: 22, question: 8 },
            { id: "BASI674-00278", set: 22, question: 9 },
            { id: "BASI674-00289", set: 23, question: 6 }
          ]
        },
        {
          id: "concrete-roofs-and-formwork",
          title: "Concrete roofs, temporary support and roof terms",
          html: "<p>Formwork shapes and supports fresh concrete. Steel forms suit repeated use because dimensional stability and durable surfaces offset higher initial cost; no reuse count is guaranteed. Check supports, joints and release arrangements before concreting. Side forms, soffit panels and load-bearing props have different removal criteria; follow verified strength and the approved sequence, not a remembered age alone.</p>" +
            "<p>Distinguish the structural roof slab from falls, drainage and waterproofing details. On a pitched roof, <strong>eaves</strong> are the low edges, the <strong>ridge</strong> the high junction, <strong>rafters</strong> sloping members and <strong>pitch</strong> the inclination. A <strong>corbel</strong> provides a projecting bearing; a cornice is primarily a projecting architectural course. Coping caps a wall; a lintel spans an opening.</p>",
          sources: [
            { id: "BASI674-00001", set: 2, question: 1 },
            { id: "BASI674-00029", set: 4, question: 3 },
            { id: "BASI674-00067", set: 7, question: 2 },
            { id: "BASI674-00286", set: 23, question: 3 },
            { id: "DESI787-00063", set: 8, question: 28 }
          ]
        },
        {
          id: "floors-and-stair-counts",
          title: "Mosaic flooring and stair counting",
          html: "<p><strong>Mosaic flooring</strong> assembles small tile, stone or marble pieces into patterns on a suitable bed; the pattern is made from separate pieces, not merely a coloured surface.</p>" +
            "<p>For one conventional flight, excluding the upper landing from the tread count, <strong>treads = risers − 1</strong>. Thus 12 risers give 11 separate treads. State the counting convention: a landing provides the final walking surface but is not another tread in this calculation.</p>",
          sources: [
            { id: "BASI674-00024", set: 3, question: 11 },
            { id: "BASI674-00287", set: 23, question: 4 }
          ]
        },
        {
          id: "codes-by-laws-and-area-ratios",
          title: "Codes, local controls and area calculations",
          html: "<p><strong>Building codes</strong> set technical construction and safety requirements, including structural and non-structural work. <strong>Local by-laws</strong> govern planning controls such as coverage, setbacks, height and openings; the local authority administers them. Terminology can overlap in legislation: identify the actual governing document.</p>" +
            "<p><strong>FAR = total counted floor area / plot area.</strong> <strong>Ground coverage (%) = 100 × covered footprint / plot area.</strong> Example, not a legal allowance: a 200 m<sup>2</sup> plot with two counted floors of 80 m<sup>2</sup> each has FAR = 160/200 = 0.8 and coverage = 40%. Exclusions depend on the applicable rules.</p>" +
            "<p>Storey height is floor-to-floor, not clear headroom. Check the current classification, approval route and local requirements; neither a remembered code-volume count nor small building dimensions establish exemption from structural safety requirements.</p>",
          sources: [
            { id: "BASI674-00290", set: 23, question: 7 },
            { id: "BASI674-00291", set: 23, question: 8 },
            { id: "BASI674-00292", set: 23, question: 9 },
            { id: "BASI674-00293", set: 23, question: 10 },
            { id: "BASI674-00294", set: 23, question: 11 },
            { id: "BASI674-00296", set: 23, question: 13 },
            { id: "BASI674-00297", set: 24, question: 1 },
            { id: "BASI674-00298", set: 24, question: 2 },
            { id: "BASI674-00299", set: 24, question: 3 },
            { id: "BASI674-00422", set: 33, question: 2 },
            { id: "DESI787-00066", set: 8, question: 31 }
          ]
        }
      ],
      gaps: [
        "Concrete roofing lacks worked reinforcement, waterproofing, drainage and construction-sequence examples; the questions mainly test formwork and vocabulary.",
        "Flooring coverage is limited to mosaic identification. Other floor systems and bedding specifications are not tested.",
        "Carpentry joints/connections and full painting/plastering specifications are not worked through; tools and isolated facts dominate.",
        "No current municipal by-law text or applicable code edition accompanies the questions, so site-specific numeric compliance cannot be established."
      ],
      cautions: [
        {
          html: "<p><strong>Bonding claims:</strong> the weakest-bond/cost rankings are not universal. The header-joint explanation wrongly derives course height from face length: headers and stretchers laid flat have equal height; bed and vertical joints must be distinguished.</p>",
          sources: [
            { id: "BASI674-00025", set: 3, question: 12 },
            { id: "BASI674-00183", set: 15, question: 9 },
            { id: "BASI674-00171", set: 14, question: 11 }
          ]
        },
        {
          html: "<p><strong>Closer inconsistencies:</strong> the explanations confuse full length, half length and unchanged height, and give incompatible king-closer cuts. Use the geometric definitions above, not the conflicting dimensions or claimed cut fraction.</p>",
          sources: [
            { id: "BASI674-00177", set: 15, question: 3 },
            { id: "BASI674-00182", set: 15, question: 8 },
            { id: "BASI674-00187", set: 15, question: 13 }
          ]
        },
        {
          html: "<p><strong>Names versus details:</strong> cornice is an inadequate substitute for corbel in the truss-bearing item. Coursed ashlar does not automatically mean fine-tooled, 3 mm joints. Pointing names vary; the stated 12 mm recess is not a universal specification.</p>",
          sources: [
            { id: "BASI674-00029", set: 4, question: 3 },
            { id: "BASI674-00189", set: 16, question: 2 },
            { id: "BASI674-00173", set: 14, question: 13 },
            { id: "BASI674-00283", set: 22, question: 13 }
          ]
        },
        {
          html: "<p><strong>Conditional practice values:</strong> 7-day lime curing, 0.6 L/kg distemper, three plaster coats, 10 cm cavities, movement joints over 20 mm, and M15/1:2:4/40 mm DPC details are not universal prescriptions. Product, material, exposure and design govern. The DPC explanation also claims an option is absent although it appears in the extract.</p>",
          sources: [
            { id: "BASI674-00110", set: 10, question: 4 },
            { id: "BASI674-00215", set: 18, question: 1 },
            { id: "BASI674-00272", set: 22, question: 3 },
            { id: "BASI674-00180", set: 15, question: 6 },
            { id: "BASI674-00195", set: 16, question: 8 },
            { id: "BASI674-00274", set: 22, question: 5 },
            { id: "BASI674-00278", set: 22, question: 9 }
          ]
        },
        {
          html: "<p><strong>Unsafe stripping shortcut:</strong> 21 days for slabs over 6 m appears to conflate slab and beam/arch prop schedules. The item omits strength, loading and formwork component; it cannot authorize removal.</p>",
          sources: [{ id: "BASI674-00286", set: 23, question: 3 }]
        },
        {
          html: "<p><strong>NBC context:</strong> the claimed 23-volume total is edition-dependent. The explanation's A–D occupancy/importance labels should not be learned as Nepal's construction/design categories; these are different classification purposes.</p>",
          sources: [
            { id: "BASI674-00290", set: 23, question: 7 },
            { id: "BASI674-00293", set: 23, question: 10 }
          ]
        },
        {
          html: "<p><strong>Unverified local limits:</strong> boundary-wall height, school coverage, storey height and window ratios lack jurisdiction/edition. The window item also confuses room volume with square-metre area. None establishes a current legal limit.</p>",
          sources: [
            { id: "BASI674-00294", set: 23, question: 11 },
            { id: "BASI674-00298", set: 24, question: 2 },
            { id: "BASI674-00299", set: 24, question: 3 },
            { id: "BASI674-00422", set: 33, question: 2 }
          ]
        },
        {
          html: "<p><strong>Approval is not a safety waiver:</strong> the small-building exemption claim is incomplete. Applicability of prescribed construction rules or simplified submission must be verified with the authority; dimensions alone do not remove structural obligations.</p>",
          sources: [{ id: "BASI674-00297", set: 24, question: 1 }]
        }
      ]
    },
    ACiE0104: {
      code: "ACiE0104",
      questionCount: 45,
      blocks: [
        {
          id: "centroids-and-symmetry",
          title: "Centroid, centre of gravity and symmetry",
          html: "<p>A <strong>centroid</strong> averages geometry: x̄ = (∫x dA)/A for area, or (∫x dV)/V for volume. The <strong>centre of gravity</strong> locates resultant weight. For a lamina, uniform density and thickness in uniform gravity make CG coincide with the area centroid.</p>" +
            "<p>Uniform volumetric density makes a body's mass centroid equal its volume centroid; nonuniform density requires mass weighting.</p>" +
            "<p>A centroid lies on each axis of symmetry; two intersecting symmetry axes locate it. A uniform rod has midpoint CG; uniform discs and rings have central CG, even in a ring's empty hole. Triangle medians meet at the centroid, dividing each median 2:1 from its vertex. Do not substitute the bounding-box centre.</p>",
          sources: [
            { id: "BASI674-00069", set: 7, question: 4 },
            { id: "BASI674-00302", set: 24, question: 6 },
            { id: "BASI674-00309", set: 24, question: 13 },
            { id: "BASI674-00310", set: 25, question: 1 },
            { id: "BASI674-00311", set: 25, question: 2 },
            { id: "BASI674-00312", set: 25, question: 3 },
            { id: "BASI674-00318", set: 1, question: 11 },
            { id: "BASI674-00324", set: 26, question: 1 }
          ]
        },
        {
          id: "standard-centroid-offsets",
          title: "Standard centroid locations and reference bases",
          html: "<table><thead><tr><th scope='col'>Uniform figure or body</th><th scope='col'>Centroid location</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Right triangular area</th><td>Legs b along x and h along y from the right-angle vertex: (b/3, h/3).</td></tr>" +
            "<tr><th scope='row'>Trapezoidal area</th><td>Lower parallel side b at y = 0, upper side a at y = h: ȳ = h(b + 2a)/[3(a + b)].</td></tr>" +
            "<tr><th scope='row'>Semicircular area, radius R</th><td>4R/(3π) from the flat diameter along the symmetry axis.</td></tr>" +
            "<tr><th scope='row'>Solid cone, height h</th><td>h/4 from its base along the cone axis.</td></tr>" +
            "<tr><th scope='row'>Thin open conical shell</th><td>h/3 from its base along the axis; uniform lateral shell only, no base disc.</td></tr>" +
            "<tr><th scope='row'>Solid hemisphere, radius R</th><td>3R/8 from the flat face along its symmetry axis; not a hollow shell.</td></tr>" +
            "</tbody></table><p>Check the trapezoid formula: a = b gives h/2; a = 0 gives h/3. Its horizontal coordinate needs the side positions, not just the parallel lengths.</p>",
          sources: [
            { id: "BASI674-00030", set: 4, question: 4 },
            { id: "BASI674-00321", set: 25, question: 11 },
            { id: "BASI674-00036", set: 4, question: 10 },
            { id: "BASI674-00038", set: 4, question: 12 },
            { id: "BASI674-00041", set: 5, question: 2 },
            { id: "BASI674-00300", set: 24, question: 4 },
            { id: "BASI674-00301", set: 24, question: 5 },
            { id: "BASI674-00307", set: 24, question: 11 },
            { id: "BASI674-00320", set: 25, question: 10 }
          ]
        },
        {
          id: "built-up-sections-and-load-resultants",
          title: "Composite sections, holes and weighted centroids",
          html: "<p>Choose common reference axes. For non-overlapping parts, A = Σs<sub>i</sub>A<sub>i</sub> and x̄ = Σs<sub>i</sub>A<sub>i</sub>x<sub>i</sub>/A; similarly for ȳ. Use s = +1 for material and −1 for holes; remove overlaps only once. For CG with differing density/thickness, weight by mass or weight instead.</p>" +
            "<p><strong>Conditional worked example:</strong> two 50 N parts centred 5 and 11 cm above the same datum give ȳ = (50 × 5 + 50 × 11)/100 = 8 cm. Heights alone would not establish those weights.</p>" +
            "<p>Equal-flange centred I-sections have two centroidal symmetry axes; centred T-sections and equal-flange channels have one. Resolve unsymmetrical sections using actual dimensions, including relevant fillets. No dimensions means no numerical centroid.</p>" +
            "<p>A triangular load diagram gives resultant W = w<sub>max</sub>L/2 at L/3 from the maximum-intensity end, not half the diagram's already-calculated area.</p>",
          sources: [
            { id: "BASI674-00308", set: 24, question: 12 },
            { id: "BASI674-00313", set: 25, question: 4 },
            { id: "BASI674-00325", set: 26, question: 2 },
            { id: "BASI674-00326", set: 26, question: 3 }
          ]
        },
        {
          id: "area-polar-and-mass-moments",
          title: "Which moment, which axis and which units?",
          html: "<table><thead><tr><th scope='col'>Quantity and axis</th><th scope='col'>Definition and units</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Area moments about in-plane x, y</th><td>I<sub>x</sub> = ∫y<sup>2</sup>dA; I<sub>y</sub> = ∫x<sup>2</sup>dA; length<sup>4</sup>, such as mm<sup>4</sup>.</td></tr>" +
            "<tr><th scope='row'>Polar area moment about normal z through O</th><td>J<sub>O</sub> = ∫(x<sup>2</sup> + y<sup>2</sup>)dA = I<sub>x</sub> + I<sub>y</sub>; length<sup>4</sup>.</td></tr>" +
            "<tr><th scope='row'>Mass moment about rotation axis z</th><td>I<sub>mass,z</sub> = ∫r<sub>perp,z</sub><sup>2</sup>dm; kg m<sup>2</sup>. Distance is perpendicular to axis z.</td></tr>" +
            "</tbody></table><p>For the perpendicular-axis identity, x and y intersect at O in the plane. It applies to every planar area; its mass counterpart requires a planar lamina. Polar area moment is not generally the torsional constant of a non-circular section.</p>" +
            "<p><strong>First versus second moment:</strong> Q<sub>x</sub> = ∫y dA = A ȳ has units length<sup>3</sup> and locates the centroid. I<sub>x</sub> = ∫y<sup>2</sup>dA instead measures area spread about x; these quantities are not interchangeable.</p>" +
            "<p><strong>Parallel axes:</strong> I<sub>x</sub> = I<sub>xG</sub> + Ae<sup>2</sup>, where xG denotes the parallel centroidal axis and e the perpendicular separation. Replace A by mass M for mass moments. Subtract each hole's entire shifted contribution, not just its own centroidal moment.</p>",
          sources: [
            { id: "BASI674-00039", set: 4, question: 13 },
            { id: "BASI674-00303", set: 24, question: 7 },
            { id: "BASI674-00314", set: 25, question: 5 },
            { id: "BASI674-00315", set: 25, question: 6 },
            { id: "BASI674-00323", set: 25, question: 13 }
          ]
        },
        {
          id: "rectangular-and-triangular-area-moments",
          title: "Rectangles and triangles: base versus centroid",
          html: "<p>Let b run horizontally along x; rectangle depth d or triangle height h runs vertically. All entries are second moments of area.</p>" +
            "<table><thead><tr><th scope='col'>Section and axis</th><th scope='col'>Moment</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Rectangle: centroidal x, parallel to width</th><td>bd<sup>3</sup>/12</td></tr>" +
            "<tr><th scope='row'>Rectangle: centroidal y, parallel to depth</th><td>db<sup>3</sup>/12</td></tr>" +
            "<tr><th scope='row'>Rectangle: horizontal bottom edge</th><td>bd<sup>3</sup>/3</td></tr>" +
            "<tr><th scope='row'>Triangle: centroidal axis parallel to base</th><td>bh<sup>3</sup>/36</td></tr>" +
            "<tr><th scope='row'>Triangle: base itself</th><td>bh<sup>3</sup>/12</td></tr>" +
            "</tbody></table><p>The centroid is d/2 above a rectangle's base and h/3 above a triangle's base. Thus subtract A(h/3)<sup>2</sup> from the triangle's base moment to obtain its centroidal value. Rotating a rectangle 90° relative to fixed axes exchanges I<sub>x</sub> and I<sub>y</sub>.</p>",
          sources: [
            { id: "BASI674-00031", set: 4, question: 5 },
            { id: "BASI674-00035", set: 4, question: 9 },
            { id: "BASI674-00040", set: 5, question: 1 },
            { id: "BASI674-00426", set: 33, question: 6 }
          ]
        },
        {
          id: "circular-and-part-circular-sections",
          title: "Circular areas, annuli and offset axes",
          html: "<p>Outer/inner diameters are D, d; corresponding radii are R, r, with D = 2R and d = 2r. A diameter axis lies in the section's plane through its circle centre.</p>" +
            "<table><thead><tr><th scope='col'>Area and specified axis</th><th scope='col'>Second moment of area</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Circle: any diameter</th><td>πD<sup>4</sup>/64 = πR<sup>4</sup>/4</td></tr>" +
            "<tr><th scope='row'>Concentric annulus: any diameter</th><td>π(D<sup>4</sup> − d<sup>4</sup>)/64 = π(R<sup>4</sup> − r<sup>4</sup>)/4</td></tr>" +
            "<tr><th scope='row'>Semicircle: flat diameter edge</th><td>πR<sup>4</sup>/8 = πD<sup>4</sup>/128</td></tr>" +
            "<tr><th scope='row'>Quarter circle: either bounding radial edge</th><td>πR<sup>4</sup>/16</td></tr>" +
            "</tbody></table><p>For the semicircle's centroidal axis parallel to its base, subtract (πR<sup>2</sup>/2)[4R/(3π)]<sup>2</sup> from its base moment. A quarter circle's centroid is 4R/(3π) from each radial edge; use A = πR<sup>2</sup>/4 when shifting to a parallel centroidal axis.</p>" +
            "<p><strong>Worked annulus:</strong> D = 20 cm, d = 10 cm gives I<sub>diameter</sub> = π(20<sup>4</sup> − 10<sup>4</sup>)/64 ≈ 7,363.11 cm<sup>4</sup>. About the central normal z-axis, J<sub>z</sub> = 2I<sub>diameter</sub> ≈ 14,726.22 cm<sup>4</sup>.</p>" +
            "<p>The annular area is A = π(D<sup>2</sup> − d<sup>2</sup>)/4. Here the hole removes 25% of the solid circle's area but only 6.25% of its diametral inertia: material farther from an axis contributes more strongly.</p>",
          sources: [
            { id: "BASI674-00033", set: 4, question: 7 },
            { id: "BASI674-00034", set: 4, question: 8 },
            { id: "BASI674-00037", set: 4, question: 11 },
            { id: "BASI674-00306", set: 24, question: 10 },
            { id: "BASI674-00427", set: 33, question: 7 },
            { id: "BASI674-00433", set: 33, question: 13 }
          ]
        },
        {
          id: "elastic-and-polar-section-moduli",
          title: "Section modulus and bending-axis checks",
          html: "<p>For elastic bending about a centroidal principal x-axis, <strong>Z<sub>x</sub> = I<sub>x</sub>/c</strong>, where c is the perpendicular extreme-fibre distance. Units are length<sup>3</sup>; unequal upper/lower distances give different moduli.</p>" +
            "<ul><li>Rectangle, x parallel to width b: Z<sub>x</sub> = bd<sup>2</sup>/6.</li><li>Solid circle, any centroidal diameter: Z = πD<sup>3</sup>/32.</li><li>Concentric annulus, any diameter: Z = π(D<sup>4</sup> − d<sup>4</sup>)/(32D).</li></ul>" +
            "<p><strong>Worked checks:</strong> b = 240 mm, d = 400 mm gives Z<sub>x</sub> = 6.4 × 10<sup>6</sup> mm<sup>3</sup>. A solid 100 mm diameter gives Z ≈ 98,175 mm<sup>3</sup>. For circular-shaft torsion, the polar modulus is instead Z<sub>p</sub> = J<sub>z</sub>/(D/2) = π(D<sup>4</sup> − d<sup>4</sup>)/(16D).</p>",
          sources: [
            { id: "BASI674-00070", set: 7, question: 5 },
            { id: "DESI787-00031", set: 5, question: 25 },
            { id: "STRU935-00236", set: 22, question: 22 }
          ]
        },
        {
          id: "axis-specific-radii-of-gyration",
          title: "Radius of gyration and rotation axes",
          html: "<p><strong>Area:</strong> k<sub>x</sub> = √(I<sub>x</sub>/A), k<sub>y</sub> = √(I<sub>y</sub>/A), and k<sub>polar</sub> = √(J<sub>z</sub>/A). <strong>Mass:</strong> k<sub>z</sub> = √(I<sub>mass,z</sub>/M) about rotation axis z. Each is a length: concentrating the corresponding area or mass at that distance preserves that moment.</p>" +
            "<p>For a rectangle, centroidal k<sub>x</sub> = d/√12 and k<sub>y</sub> = b/√12. For a circle, k<sub>diameter</sub> = D/4 but k<sub>central-normal</sub> = D/√8. Thus a 10 cm circular plate gives <strong>2.5 cm about an in-plane diameter</strong>, versus 3.54 cm about the normal central axis. A uniform thin plate has the same corresponding mass radii.</p>" +
            "<p>A concentric annulus has k<sub>diameter</sub> = √(D<sup>2</sup> + d<sup>2</sup>)/4. For x parallel to centroidal xG, k<sub>x</sub><sup>2</sup> = k<sub>xG</sub><sup>2</sup> + e<sup>2</sup>. Proportionality to √I assumes fixed A; proportionality to 1/√A assumes fixed I.</p>",
          sources: [
            { id: "BASI674-00044", set: 5, question: 5 },
            { id: "BASI674-00305", set: 24, question: 9 },
            { id: "BASI674-00316", set: 25, question: 7 },
            { id: "BASI674-00317", set: 25, question: 8 },
            { id: "BASI674-00319", set: 25, question: 9 },
            { id: "BASI674-00322", set: 25, question: 12 }
          ]
        }
      ],
      gaps: [
        "No complete dimensioned standard-steel I/T/channel/angle example is supplied; symmetry and decomposition here explain the syllabus method, not a verified bank numerical answer.",
        "The composite-section questions lack trustworthy complete geometry. General asymmetric built-up sections, off-centre holes and principal-axis calculations are not worked through in the assigned questions."
      ],
      cautions: [
        {
          html: "<p><strong>Ambiguous centres:</strong> the right-triangle items misuse geometric centre. Uniform triangular CG equals its area centroid, not its bounding-box centre. An isosceles right triangle also has a symmetry axis, contrary to the blanket asymmetry claim.</p>",
          sources: [
            { id: "BASI674-00030", set: 4, question: 4 },
            { id: "BASI674-00069", set: 7, question: 4 },
            { id: "BASI674-00321", set: 25, question: 11 }
          ]
        },
        {
          html: "<p><strong>Missing geometry:</strong> the keyed (6, 1.5) cannot be established without a figure, dimensions and datum. The 8 cm example is conditional on two 50 N weights at the assumed coordinates; the supplied text does not verify the original figure/base labels.</p>",
          sources: [
            { id: "BASI674-00313", set: 25, question: 4 },
            { id: "BASI674-00308", set: 24, question: 12 }
          ]
        },
        {
          html: "<p><strong>Mixed definitions:</strong> m<sup>4</sup> describes area inertia, not a body's mass inertia. Garbled MOI options are not formulas. All six force/moment equilibrium conditions remain valid; centroid calculations use first moments, not an exemption from force equilibrium.</p>",
          sources: [
            { id: "BASI674-00303", set: 24, question: 7 },
            { id: "BASI674-00315", set: 25, question: 6 },
            { id: "BASI674-00326", set: 26, question: 3 }
          ]
        },
        {
          html: "<p><strong>Unspecified dimensions/axes:</strong> the hollow-circle item uses R, r but keys the diameter coefficient π/64; radii require π/4 about a diameter. The circular-plate radius questions omit the axis: 2.5 cm requires a diameter, not normal-axis rotation.</p>",
          sources: [
            { id: "BASI674-00033", set: 4, question: 7 },
            { id: "BASI674-00319", set: 25, question: 9 },
            { id: "BASI674-00322", set: 25, question: 12 }
          ]
        },
        {
          html: "<p><strong>Non-unique theorem answer:</strong> perpendicular axes work for every listed planar lamina, not only a circular one. Circular symmetry merely simplifies evaluation.</p>",
          sources: [{ id: "BASI674-00039", set: 4, question: 13 }]
        },
        {
          html: "<p><strong>Incorrect hollow-section options:</strong> the keyed D<sup>4</sup> − d<sup>2</sup> is dimensionally invalid. No listed option gives the stated elastic bending modulus; the valid denominator-16D expression is the polar modulus, not the requested bending value.</p>",
          sources: [{ id: "BASI674-00070", set: 7, question: 5 }]
        },
        {
          html: "<p><strong>Load-diagram error:</strong> resultant force equals the diagram's whole area, acting at its centroid. The source's extra halving and unqualified distance from an unnamed end are misleading.</p>",
          sources: [{ id: "BASI674-00325", set: 26, question: 2 }]
        }
      ]
    }
  });
})();