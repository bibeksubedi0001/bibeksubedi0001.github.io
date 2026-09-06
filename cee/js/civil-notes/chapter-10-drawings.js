(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        AALL1001: {
            code: "AALL1001",
            questionCount: 4,
            blocks: [
                {
                    id: "drawing-standard-sheets-and-ratio",
                    title: "Standard sheets: the A-series and why its shape survives halving",
                    html: "<p><strong>Syllabus extension.</strong> None of the four assigned questions tests sheet sizes or supplies a sheet-layout exercise. The following are the common nominal trimmed A-series sizes, with the shorter dimension first. Rotating a sheet between portrait and landscape does not change its designation.</p>" +
                        "<table><thead><tr><th scope='col'>Sheet</th><th scope='col'>Dimensions, mm</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A0</th><td>841 × 1189</td></tr>" +
                        "<tr><th scope='row'>A1</th><td>594 × 841</td></tr>" +
                        "<tr><th scope='row'>A2</th><td>420 × 594</td></tr>" +
                        "<tr><th scope='row'>A3</th><td>297 × 420</td></tr>" +
                        "<tr><th scope='row'>A4</th><td>210 × 297</td></tr></tbody></table>" +
                        "<p>Let the ideal long and short sides be L and S. Halving the long side and rotating gives a new long-to-short ratio S/(L/2). Preserving shape requires <strong>L/S = 2S/L</strong>, hence <strong>L/S = √2</strong>. A0 has nominal area approximately 1 m<sup>2</sup>; successive designations halve the area. Integer-millimetre dimensions are rounded, so their ratios and areas are not mathematically exact.</p>" +
                        "<p>Select a sheet that accommodates the required views, dimensions and notes at a legible scale after allowing for borders and the title block. ISO 216:2007's public catalogue identifies its paper-size scope; it does not establish a project's drawing layout, line weights, border dimensions or Nepal adoption. No uninspected ISO clause is asserted here.</p>",
                    sources: []
                },
                {
                    id: "drawing-layout-title-block-and-revisions",
                    title: "A drawing is a controlled technical document, not just a picture",
                    html: "<p><strong>Syllabus extension.</strong> The bank supplies no completed title block, revision history or drawing register. Read these before interpreting geometry: project and component identity, drawing number, sheet number, revision, issue purpose, units, scale, projection convention and responsible preparation/checking information. An attractive but superseded detail is not a reliable construction instruction.</p>" +
                        "<p>Arrange related views so that the reader can transfer widths, heights and depths without guessing. Reserve room for dimensions outside the object, section identifiers and explanatory notes. A detail at a different scale needs its own scale label; one title-block scale cannot silently describe every view on a mixed-scale sheet. State when a diagram is not to scale.</p>" +
                        "<p>Use a consistent drawing register and cross-reference the correct detail and sheet. A revision should identify what changed and the issue to which the change belongs. Check that referenced schedules and specifications correspond to the same design information, rather than combining individually plausible but incompatible editions.</p>" +
                        "<p>A plotted or scanned copy can be resized. Its appearance is therefore not authority for an omitted dimension. Confirm the issued document, read the written dimensions and obtain clarification where required. These are communication principles; project-specific approval, signature and document-control requirements must come from the applicable instructions.</p>",
                    sources: []
                },
                {
                    id: "drawing-line-types-and-diagrams",
                    title: "Line type communicates meaning; line weight establishes hierarchy",
                    html: "<p><strong>Syllabus extension.</strong> No assigned question provides a line legend or tests a plotted line-weight schedule. The following are conventional distinctions, not a claimed universal set of code-prescribed widths. Meaning depends on both the pattern and its context.</p>" +
                        "<table><thead><tr><th scope='col'>Feature</th><th scope='col'>Conventional treatment</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Visible edge or outline</th><td>Continuous line, visually stronger than auxiliary construction lines.</td></tr>" +
                        "<tr><th scope='row'>Hidden edge</th><td>Fine, short dashed line identifying a feature behind the visible surface.</td></tr>" +
                        "<tr><th scope='row'>Centre or axis</th><td>Fine chain pattern, commonly long dashes separated by short dashes or dots.</td></tr>" +
                        "<tr><th scope='row'>Dimension and extension</th><td>Fine continuous lines, distinct from physical object edges.</td></tr>" +
                        "<tr><th scope='row'>Cutting plane</th><td>Distinctly identified line with direction indicators and a section designation.</td></tr></tbody></table>" +
                        "<p>A centreline indicates an axis or symmetry; it is not an additional hidden edge. Keep dash patterns legible after reduction and avoid letting a hidden line obscure a coincident visible outline. <strong>Hypothetical plotting choice:</strong> 0.25 mm auxiliary lines and 0.50 mm emphasized outlines demonstrate hierarchy, not mandatory standard values.</p>" +
                        "<p>A line diagram deliberately simplifies a system to show arrangement or connections. A structural centreline or pipe schematic does not, by itself, specify member thickness, physical clearances or fabrication geometry. Use a legend and labels rather than assuming every drawn crossing is a connection.</p>",
                    sources: []
                },
                {
                    id: "drawing-dimensions-units-and-tolerances",
                    title: "Dimensions specify the object; measuring the print does not",
                    html: "<p><strong>Syllabus extension.</strong> The assigned bank gives no dimensioned component or tolerance schedule. A dimension line carries a size between defined limits; extension lines identify those limits. Leaders connect notes to features. Dimension from functional datums where possible, avoid ambiguous repeated dimensions and do not force the reader to infer an essential size from scale.</p>" +
                        "<p>Write <strong>actual object dimensions</strong>, whatever the view scale. Declare the length units, and identify any exceptions explicitly. Angular values need their own angular notation. A radius dimension, conventionally prefixed R, concerns the centre-to-arc distance; a diameter dimension, prefixed Ø, concerns the full circular size. They are not interchangeable labels for any curved outline.</p>" +
                        "<p><strong>Hypothetical example:</strong> in a drawing whose linear units are mm, Ø40 specifies a diameter of 40 mm and R20 a radius of 20 mm. A size 40 ± 0.2 permits 39.8–40.2 mm under that stated size requirement; it does not also specify surface finish, roundness or positional tolerance. At scale 1:2, the nominal 40 mm diameter appears 20 mm across on an undistorted print, but its dimension remains 40.</p>" +
                        "<p>Chains of dimensions can accumulate tolerances; baseline dimensions locate features from a common reference. Written dimensions carry the intended size, but conflicting written information still requires clarification. Neither selecting a convenient dimension nor scaling a photocopy resolves a design discrepancy.</p>",
                    sources: []
                },
                {
                    id: "drawing-representative-fraction-units",
                    title: "Representative fraction requires the same units in numerator and denominator",
                    html: "<p>A scale compares a represented length with the corresponding actual length. The <strong>representative fraction, RF = drawing length / actual length</strong>, is dimensionless only after the two lengths use the same units. A reduction has RF below one, full size has RF equal to one and enlargement has RF above one. A larger denominator in 1:N means a smaller image of the same object.</p>" +
                        "<p>The assigned statement is <strong>1 cm = 100 m</strong>. Since 1 m = 100 cm, the actual distance is 10,000 cm. Therefore <strong>RF = 1 cm / 10,000 cm = 1/10,000</strong>, written <strong>1:10000</strong>. Dividing the bare numbers 1 and 100 without converting metres would leave a hidden unit mismatch and give the wrong ratio.</p>" +
                        "<p><strong>Syllabus extension — hypothetical transfer:</strong> at that same scale, an actual represented length of 245 m occupies 245/100 = <strong>2.45 cm</strong>. Conversely, multiply a paper length in centimetres by 100 to obtain metres under this stated scale. This extra length is not a bank given.</p>" +
                        "<p>RF describes a linear relationship, not an area or volume ratio. Check that the copy has not been rescaled before taking approximate graphical measurements. On a construction drawing, a written dimension or properly issued coordinate remains preferable to estimating a size with a ruler.</p>",
                    sources: [{ id: "BASI674-00221", set: 18, question: 6 }]
                },
                {
                    id: "drawing-plain-diagonal-and-vernier-scales",
                    title: "Choose a scale by range and least count, not by a universal accuracy ranking",
                    html: "<p>The bank links a diagonal scale with reading <strong>units, tenths and hundredths</strong>, and with the hierarchy metre, decimetre and centimetre. Rearranging those unit names in a sentence does not change their sizes: 1 m = 10 dm = 100 cm. A diagonal construction subdivides a small interval geometrically rather than crowding every fine division onto one baseline.</p>" +
                        "<p><strong>Syllabus extension:</strong> the assigned questions do not provide comparative instrument specifications or a vernier dataset. A plain scale normally shows a major unit and its direct subdivisions. A diagonal scale combines subdivisions with similar triangles. A vernier compares two slightly different pitches and reads their coincidence. All can be designed with different ranges and least counts.</p>" +
                        "<p>For a direct vernier with n vernier divisions equal to n − 1 main-scale divisions, <strong>least count = one main division / n</strong>. <strong>Hypothetical example:</strong> ten vernier divisions spanning nine 1 mm main divisions give a nominal 0.1 mm least count. This is a construction example, not a specification supplied by either bank item.</p>" +
                        "<p>Least count describes resolution, not guaranteed accuracy. Line thickness, reproduction, zero error, alignment and reading technique can dominate the result. A diagonal scale is therefore not inherently more accurate than every vernier, and the ability to indicate hundredths does not prevent it also indicating whole units.</p>",
                    sources: [
                        { id: "BASI674-00220", set: 18, question: 5 },
                        { id: "BASI674-00228", set: 18, question: 13 }
                    ]
                },
                {
                    id: "drawing-diagonal-scale-similar-triangles",
                    title: "Constructing hundredths with similar triangles: a worked diagonal scale",
                    html: "<p><strong>Syllabus extension — all construction dimensions and readings below are hypothetical.</strong> The linked questions test the principle but supply no complete drawing grid. Design a scale of RF 1:50 to read up to 5 m, with metre, decimetre and centimetre readings.</p>" +
                        "<ol><li>The baseline length is 5000/50 = <strong>100 mm</strong>. Divide it into five 20 mm metre intervals. Put zero after the leftmost interval, leaving whole-metre marks to its right.</li>" +
                        "<li>Subdivide the leftmost metre into ten intervals. Each 2 mm on paper represents 0.1 m, or one decimetre.</li>" +
                        "<li>Above this interval construct a rectangle 50 mm high, divided into ten equal 5 mm rows. Across each 2 mm subinterval construct a diagonal, oriented so successive rows increase the reading to the left of zero.</li></ol>" +
                        "<p>For one such triangle, horizontal offset x at height y satisfies <strong>x/2 = y/50</strong>. One row gives x = 2 × 5/50 = <strong>0.2 mm</strong> on paper, representing 0.01 m. At the seventh row x = <strong>1.4 mm</strong>, representing 0.07 m. This is the similar-triangle reason for the hundredths subdivision.</p>" +
                        "<p>A reading of 2 m + 3 dm + 7 cm is <strong>2.37 m</strong>, equivalent to <strong>47.4 mm</strong> on this scale. Take both endpoints on the same horizontal reading line. The 50 mm rectangle height creates readable interpolation; it does not alter the RF along the measurement direction.</p>",
                    sources: [
                        { id: "BASI674-00220", set: 18, question: 5 },
                        { id: "BASI674-00228", set: 18, question: 13 }
                    ]
                },
                {
                    id: "drawing-orthographic-coordinate-views",
                    title: "Orthographic views recover different pairs of dimensions",
                    html: "<p><strong>Syllabus extension.</strong> The bank contains no complete multiview object with specified dimensions. Orthographic projection uses parallel projectors perpendicular to a viewing plane. A front view expresses width and height; a top view expresses width and depth; a side view expresses depth and height. Each view omits the coordinate along its own viewing direction.</p>" +
                        "<p>Corresponding features must align between views. A face parallel to the viewing plane appears in its true shape at the selected scale; an inclined face is foreshortened. A line perpendicular to the plane appears end-on as a point. Hidden lines can identify concealed edges but do not substitute for every missing dimension or interior detail.</p>" +
                        "<p><strong>Hypothetical rectangular block:</strong> width 60 mm, depth 40 mm and height 30 mm. At scale 1:2, its front outline measures 30 × 15 mm on paper, its top 30 × 20 mm and its side 20 × 15 mm. The dimension labels still give the actual 60, 40 and 30 mm sizes, not the reduced paper sizes.</p>" +
                        "<p>Choose the front view to reveal important shape and minimize unnecessary hidden detail. Add enough complementary views, sections and annotations to define the part. A neat outline is not evidence that an unseen recess, slope or hole has been specified.</p>",
                    sources: []
                },
                {
                    id: "drawing-first-and-third-angle-placement",
                    title: "First-angle and third-angle projection place the same views differently",
                    html: "<p><strong>Syllabus extension.</strong> No assigned question identifies a projection symbol or asks for first-angle versus third-angle placement. Choose and state the convention before arranging views; do not infer it merely from the drawing's country of origin.</p>" +
                        "<p>In <strong>first-angle projection</strong>, the object lies between observer and projection plane. In <strong>third-angle projection</strong>, the projection plane lies between observer and object. Unfolding those planes produces different sheet arrangements even though the view is still named for the direction from which the object is observed.</p>" +
                        "<table><thead><tr><th scope='col'>View relative to front</th><th scope='col'>First angle</th><th scope='col'>Third angle</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Top view</th><td>Below</td><td>Above</td></tr>" +
                        "<tr><th scope='row'>Right-side view</th><td>To the left</td><td>To the right</td></tr>" +
                        "<tr><th scope='row'>Left-side view</th><td>To the right</td><td>To the left</td></tr></tbody></table>" +
                        "<p>Read the declared convention and projection symbol, then transfer the appropriate shared dimensions. A view placed to the left is not necessarily a left-side view. Maintain the selected method throughout the sheet, or identify an exceptional view explicitly. Mixing first-angle top-view placement with third-angle side-view placement can reverse the interpretation of an asymmetric feature while every individual outline still looks plausible. View placement does not change the actual-size dimension labels.</p>",
                    sources: []
                },
                {
                    id: "drawing-single-projection-cylinder-ambiguity",
                    title: "A single outline does not uniquely establish a cylinder",
                    html: "<p>An orthographic view maps spatial points onto a plane and suppresses depth along the viewing direction. Different solids can therefore share the same outline. A right circular cylinder viewed along its axis gives a circle, but suitably oriented cones and hemispheres can also give circular projections. A rectangular side outline is likewise not unique to a cylinder; a rectangular prism can have it.</p>" +
                        "<p>The assigned question stores cylinder as its answer. Its explanation, however, describes a <strong>rectangle AND a circular base view: two views</strong>, not a single projection. That description cannot prove the stem's claim about one projection preserving defining geometry. No supplied figure or projection direction removes the ambiguity.</p>" +
                        "<p>Adding a diameter symbol Ø, a height and a statement of uniform cylindrical form can often communicate a familiar cylinder using one dimensioned view. The additional information then comes from <strong>annotations and an assumed form</strong>, not from the projected outline alone. Other familiar solids can also be constrained by suitable annotations; this does not make cylinder uniquely correct under the question as written.</p>" +
                        "<p>The engineering objective is sufficient, unambiguous information, not a fixed view count. Select complementary views or sections where hidden shape remains uncertain. Do not treat stored option A as an automatically correct geometric conclusion; the original question and key remain unchanged.</p>",
                    sources: [{ id: "BASI674-00432", set: 33, question: 12 }]
                },
                {
                    id: "drawing-isometric-axes-and-foreshortening",
                    title: "Isometric drawing and isometric projection use different axial scales",
                    html: "<p><strong>Syllabus extension.</strong> The bank gives no isometric construction or foreshortening calculation. Isometric projection views three mutually perpendicular object axes symmetrically. Their projected positive directions are <strong>120° apart</strong>; a common sheet orientation uses one vertical axis and two axes at 30° to the horizontal.</p>" +
                        "<p>The viewing direction of a cube is along a body diagonal. Its component along any unit object axis is 1/√3. Removing that normal component leaves projected axial length <strong>k = √[1 − (1/√3)<sup>2</sup>] = √(2/3) ≈ 0.8164966</strong> per unit true length. The axial foreshortening is not cos 45°. A 45° line sometimes used in constructing an isometric scale is not the viewing angle that defines k.</p>" +
                        "<p>An <strong>isometric projection</strong> uses this shortened axial length. An <strong>isometric drawing or view</strong> conventionally lays off true lengths along the isometric axes at the chosen drawing scale, making it 1/k ≈ 1.224745 times the corresponding projection. The shape relation is retained, but the size convention must be stated.</p>" +
                        "<p><strong>Hypothetical example at nominal full size:</strong> a 100 mm object edge parallel to an isometric axis is drawn 100 mm in the true-axial-scale drawing but projects to <strong>81.6497 mm</strong>. Its dimension annotation is 100 mm in either representation. Apply any additional sheet reduction consistently to all axes.</p>",
                    sources: []
                },
                {
                    id: "drawing-nonisometric-lines-and-circles",
                    title: "Locate endpoints before drawing inclined lines and curved features",
                    html: "<p><strong>Syllabus extension.</strong> No assigned item supplies a non-isometric line or circle-construction exercise. Only lines parallel to the three isometric axes use the chosen axial scale directly. For another line, locate its endpoints by their axial coordinates and join them. Its true angle and length generally do not appear unchanged on the sheet.</p>" +
                        "<p><strong>Hypothetical example:</strong> on an object face, a diagonal has positive coordinate changes of 30 mm and 40 mm along perpendicular axes. Its true length is √(30<sup>2</sup> + 40<sup>2</sup>) = <strong>50 mm</strong>. In a true-axial-scale isometric drawing, the two projected positive axes are 120° apart, so the drawn endpoint distance is √(30<sup>2</sup> + 40<sup>2</sup> + 2 × 30 × 40 cos 120°) = <strong>36.0555 mm</strong>. An isometric projection further scales that distance by √(2/3), giving <strong>29.4392 mm</strong>. Neither is a new physical length.</p>" +
                        "<p>A circle in a principal object plane appears as an <strong>ellipse</strong>; its circumscribing square becomes a rhombus. Transfer centres, tangent points and suitable coordinates rather than drawing a same-radius circle on the sheet. A four-centre construction is an approximation to the ellipse, not an exact conic.</p>" +
                        "<p>Dimension the actual circular diameter or actual inclined feature. A protractor reading of the pictorial angle cannot replace the true-angle dimension or an appropriate auxiliary view.</p>",
                    sources: []
                },
                {
                    id: "drawing-pictorial-and-perspective-views",
                    title: "Pictorial views explain shape; perspective explains appearance from a viewpoint",
                    html: "<p><strong>Syllabus extension.</strong> The bank supplies no perspective construction or pictorial comparison. Pictorial representations show several faces together so that an assembly is easier to visualize. Isometric is one axonometric form: it uses parallel projection, preserves parallelism of parallel object lines and applies equal foreshortening to the three principal axes in its projection form.</p>" +
                        "<p>Perspective instead uses projectors converging at a finite viewpoint. Equal objects farther from the observer generally appear smaller, and receding parallel lines can converge towards vanishing points. In familiar one-, two- and three-point constructions, the count describes how the principal sets of receding directions are treated. It is not a count of the object's faces or a hierarchy of dimensional accuracy.</p>" +
                        "<p>Oblique pictorial construction is different again: a chosen front face can retain its true shape while depth is drawn along a selected receding direction and scale. Naming a view pictorial does not uniquely identify which projection was used.</p>" +
                        "<p>Use pictorials to communicate form, assembly order or spatial relationships. Use properly dimensioned orthographic views, sections and schedules to define construction. A perspective presentation can be visually convincing yet hide a connection or distort an apparent angle; an isometric view can preserve parallelism yet still distort non-axial lengths. Neither permits fabrication from appearance alone.</p>",
                    sources: []
                },
                {
                    id: "drawing-sections-cutting-planes-and-hatching",
                    title: "A section distinguishes cut material from the space beyond it",
                    html: "<p><strong>Syllabus extension.</strong> None of the assigned questions contains a sectional drawing. Imagine a cutting plane through the object, remove the portion between that plane and the observer, and view in the indicated direction. Identify both the plane location and the section designation so the reader knows exactly what has been cut.</p>" +
                        "<p>Hatching marks material intersected by the plane; an opening or void is not hatched as though it were solid. Fine, regularly spaced inclined lines are conventional, often near 45° to an outline or axis, but angle and spacing may change for clarity and to distinguish adjacent components. Such hatching does not, without a legend or specification, prove the material grade or composition.</p>" +
                        "<p>A full section cuts through the object; a half section can combine exterior and interior information for a suitably symmetric part. An offset section follows a stepped cutting plane to include selected features, while a broken-out section reveals a local interior region. Interpret these conventions from the indicated cutting path, not from an assumed straight cut.</p>" +
                        "<p>Visible features beyond the plane may remain in a sectional view. Unnecessary hidden lines are commonly omitted for clarity, but necessary concealed information must still be communicated. Special conventions for ribs, shafts and fasteners depend on section direction and drawing practice; omission of hatching alone must not be read as missing material.</p>",
                    sources: []
                },
                {
                    id: "drawing-hollow-sleeve-sectional-reading",
                    title: "Read a hollow sleeve by connecting its longitudinal and transverse sections",
                    html: "<p><strong>Syllabus extension — hypothetical geometry throughout.</strong> Consider a uniform sleeve 120 mm long, with outside diameter 100 mm and a concentric through bore of diameter 60 mm. The assigned bank supplies none of these dimensions. A transverse section normal to its axis is an annulus: hatched material surrounds an unhatched circular opening.</p>" +
                        "<p>The radial wall thickness is <strong>(100 − 60)/2 = 20 mm</strong>, not the 40 mm difference of diameters. A longitudinal section through the axis shows two 20 mm material bands separated by the 60 mm bore, extending through the stated 120 mm length. Hatched bands and the unhatched opening must agree with the transverse section and the diameter annotations.</p>" +
                        "<p>Without a section, concealed bore edges may appear as hidden lines in an elevation. The section makes their physical meaning clearer but does not create extra material at the centreline. Verify whether a bore is through or blind and whether ends include shoulders; the word uniform is an explicit assumption in this example.</p>" +
                        "<p>A section shows true sectional shape only when the viewing plane is parallel to the section plane. An oblique view may foreshorten that shape, requiring an auxiliary view for true geometry. This is drawing interpretation, not a calculation of section inertia or structural capacity.</p>",
                    sources: []
                },
                {
                    id: "drawing-construction-reading-and-communication",
                    title: "Read plans, elevations and details as one coordinated instruction set",
                    html: "<p><strong>Syllabus extension.</strong> The assigned questions do not provide a coordinated construction package. Start by confirming the issued revision, units, orientation, grids and level datum. A plan locates components horizontally; elevations describe vertical faces; sections expose internal relationships; details resolve connections or interfaces that cannot be shown legibly at the general arrangement scale.</p>" +
                        "<p>Follow each section and detail reference to its named view and sheet. Cross-check the same feature's identity, dimensions, material notes and level between architectural, structural and service information. A centreline position does not by itself establish a finished face, and a top level is not an underside level without the intervening thickness.</p>" +
                        "<p>Before setting out, distinguish overall dimensions from clear openings, structural dimensions from finishes, and datum-based coordinates from dimensions chained through other components. Confirm site measurements where required. A schematic connection or attractive pictorial does not establish access for assembly, reinforcement congestion, maintenance space or a construction sequence.</p>" +
                        "<p>Record a discrepancy and request clarification through the project's communication process; do not invent a missing dimension or silently modify the drawing. An issued clarification should propagate to affected views and schedules. As-built records should document verified installed information rather than merely relabel an earlier design. Clear communication is part of technical accuracy, but these general steps do not certify approval or compliance.</p>",
                    sources: []
                }
            ],
            gaps: [
                "Only four questions are assigned: three concern scales and one is an ambiguous single-projection question. This is sparse bank coverage, not evidence that the other official drawing subjects are unexamined by NEC.",
                "Standard sheets, title blocks, revision control, line conventions, dimensions, units and tolerances have no assigned worked bank exercise; they are explicitly labelled Syllabus extension.",
                "First-angle and third-angle layouts, isometric foreshortening, non-isometric features and perspective have no complete bank dataset. The added numerical constructions are hypothetical, not reconstructed questions.",
                "No bank drawing supplies cutting planes, hatching, internal features or coordinated construction views. The sleeve example and drawing-reading workflow extend the official sectional-drawing scope without borrowing section-inertia questions from Chapter 1.",
                "ISO 216:2007's public catalogue was checked for document identity and paper-size scope only. Full ISO drawing clauses, a Nepal adoption instrument, prescribed borders, pen widths and project-specific dimensioning requirements were not inspected.",
                "These static explanatory notes do not replace drawing practice, issued project information or a verified technical standard. The projection ambiguity cannot be resolved without additional form, direction or annotation information."
            ],
            cautions: [
                {
                    html: "<p><strong>Diagonal-scale wording and accuracy:</strong> showing units, tenths and hundredths is the intended capability, but the word only and the nested options are not a rigorous uniqueness statement. A diagonal scale also reads coarser values. The explanation's claim of higher precision than every plain or vernier scale is unsupported; compare actual least counts and errors.</p>",
                    sources: [
                        { id: "BASI674-00220", set: 18, question: 5 },
                        { id: "BASI674-00228", set: 18, question: 13 }
                    ]
                },
                {
                    html: "<p><strong>RF unit check:</strong> 100 m is 10,000 cm, so 1 cm = 100 m means 1:10000. A ratio formed from centimetres divided by bare metre numbers is not dimensionless. Resizing a print changes its physical scale, not the actual dimension values written on it.</p>",
                    sources: [{ id: "BASI674-00221", set: 18, question: 6 }]
                },
                {
                    html: "<p><strong>Single-view ambiguity:</strong> the stored cylinder explanation explicitly uses a rectangular view together with a circular view, which is two views. A circle alone can also be the axial projection of a cone or hemisphere. Added Ø and height annotations can constrain an assumed cylinder, but the stem does not supply that information. Stored option A must not be accepted automatically as a unique geometric answer; the bank remains untouched.</p>",
                    sources: [{ id: "BASI674-00432", set: 33, question: 12 }]
                },
                {
                    html: "<p><strong>Reference and extension limits:</strong> the ISO reference below is an inspected public catalogue, not a claim that the full standard's clauses were inspected or adopted for a particular Nepal project. Isometric √(2/3) foreshortening is derived geometry, not cos 45°. All source-free teaching blocks are Syllabus extension; hypothetical pen widths, dimensions and tolerances are not approval criteria.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "ISO 216:2007, edition 2 — Writing paper and certain classes of printed matter — Trimmed sizes — A and B series, and indication of machine direction; public catalogue identity and scope only, not full drawing clauses",
                    url: "https://www.iso.org/standard/36631.html"
                }
            ]
        }
    });
})();