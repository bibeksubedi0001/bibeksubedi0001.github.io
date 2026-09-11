window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["wave-optics"] = {
  id: "wave-optics",
  subject: "Physics",
  title: "Waves, interference and polarization",
  sections: [
    {
      id: "coherence-and-fringe-shape",
      title: "Coherent sources and the geometry of fringes",
      sources: [{ document: "quick-revision", page: 31 }],
      html: "<p>Coherent sources maintain a constant phase difference and have the same frequency. The phase difference may be zero but need not be. In the same medium their wavelengths are also equal. Equal frequency alone does not guarantee coherence: independently fluctuating source phases wash out a stationary interference pattern.</p><p>For two coherent point sources, a fringe follows a locus of constant optical path difference. In a uniform medium this reduces to constant geometrical distance difference. Nonzero-distance-difference loci in a plane containing the two sources are hyperbolas; in three dimensions they are surfaces of revolution about the source-separation axis. The zero-difference locus is the perpendicular-bisector plane.</p><table><thead><tr><th>Source table entry</th><th>Meaning and qualification</th></tr></thead><tbody><tr><td>Mostly: hyperbolic</td><td>Hyperbolic sections arise from constant distance difference between two point sources. The observed shape depends on the observation plane.</td></tr><tr><td>90 degrees: circular</td><td>A plane perpendicular to the source-separation axis can cut a nonzero-order hyperboloid in a circle. The source does not identify the reference for its angle.</td></tr><tr><td>Distance large: straight line</td><td>Near the centre of a distant screen in the usual Young geometry, the hyperbolic fringes are approximately straight, parallel and equally spaced.</td></tr></tbody></table><p><strong>Source correction:</strong> the mnemonic associating 90 degrees with an always-circular shape in physics is not a general law. A right angle between two directions does not by itself determine an interference fringe. The conditional circular-section example above explains one possible geometry, not a recovered missing source diagram.</p><p><strong>Unresolved source item:</strong> page 31 gives no axis, screen orientation or diagram defining the 90-degree entry. Its exact intended experimental arrangement cannot be established from this page.</p>"
    },
    {
      id: "diffraction-and-source-examples",
      title: "Diffraction, examples and the single-slit pattern",
      sources: [{ document: "quick-revision", page: 31 }],
      html: "<p>Diffraction is the spreading of a wave around an obstacle or through an aperture into regions where geometrical rays alone would predict a sharp shadow. It is conspicuous when the obstacle or opening size is comparable to the wavelength. For ordinary audible sound and visible light, $\\lambda_{\\mathrm{sound}}$ is much greater than $\\lambda_{\\mathrm{light}}$. Doorways and common obstacles therefore produce much more noticeable sound diffraction than visible-light diffraction.</p><table><thead><tr><th>Example retained from the source</th><th>Physical interpretation</th></tr></thead><tbody><tr><td>Bright colours associated with a spider web</td><td>Fine strands and their arrangement can produce wavelength-dependent diffraction and interference. A colour observation alone does not exclude reflection or scattering by the strands or droplets.</td></tr><tr><td>Circular sunlight patches below a tree</td><td>Small gaps between leaves can act as pinholes and form images of the solar disc.</td></tr><tr><td>A needle tip does not cast a perfectly sharp image or shadow</td><td>Wave spreading at the fine tip and edges can produce a diffraction pattern instead of the ideal ray-optics boundary.</td></tr></tbody></table><p><strong>Source correction:</strong> the circular patches under trees are primarily pinhole images of the Sun, not a general demonstration that diffraction makes circles. Finite source size and the observing geometry also affect the sharpness of a needle shadow.</p><p>In Fraunhofer diffraction at a uniformly illuminated single slit, the central maximum is the brightest. The secondary maxima become weaker as their order increases away from the centre. In the small-angle screen approximation, the central maximum is twice the width of one adjacent secondary maximum when widths are measured between neighbouring minima.</p><p>To make the width statement explicit, for slit width $a$, wavelength $\\lambda$ in the propagation medium, and screen distance $D$, the minima satisfy $a\\sin\\theta=m\\lambda$, with nonzero integer $m$. For small angles their coordinates are $y_m\\simeq\\frac{m\\lambda D}{a}$. Thus the central width is $\\frac{2\\lambda D}{a}$, while an adjacent minimum-to-minimum interval is $\\frac{\\lambda D}{a}$. These equations explain the source's single-slit comparison; they are not universal widths for every diffraction arrangement.</p><p><strong>Source correction:</strong> page 31 says intensity decreases with decreasing order of maxima. For the stated single-slit pattern it decreases with <em>increasing</em> secondary-maximum order. The central maximum is not the weakest.</p>"
    },
    {
      id: "polarization-and-diagram",
      title: "Polarization and the planes shown in the source diagram",
      sources: [{ document: "quick-revision", page: 31 }],
      html: "<p>Polarization describes the direction and time dependence of the transverse oscillations of a wave. For light, the conventional description uses the electric-field vector. A linearly polarized plane wave has its electric field along one fixed transverse line. In a homogeneous isotropic medium, $\\mathbf{E}\\perp\\mathbf{k}$, $\\mathbf{B}\\perp\\mathbf{k}$ and $\\mathbf{E}\\perp\\mathbf{B}$, where $\\mathbf{k}$ gives propagation direction.</p><p>The source diagram has a rightward propagation arrow, vertical double-headed oscillation arrows, a label (a) for the plane of vibration, and a label (b) for the plane of polarization. The useful distinction is between a <em>transverse oscillation direction</em> and a <em>plane containing propagation</em>; a two-dimensional sketch must not make these the same object.</p><table><thead><tr><th>Direction or plane</th><th>Relation to propagation</th></tr></thead><tbody><tr><td>Electric-field oscillation direction</td><td>Perpendicular to propagation; angle 90 degrees.</td></tr><tr><td>Plane of vibration, in the source's older terminology</td><td>Contains both the electric-field direction and propagation; the propagation line lies in this plane.</td></tr><tr><td>Plane of polarization, in that older terminology</td><td>Contains propagation and is perpendicular to the plane of vibration; the angle of the propagation line to this plane is zero.</td></tr></tbody></table><p><strong>Source correction:</strong> the claims that the plane of polarization is normal to propagation and that it makes zero degrees with propagation contradict each other. Under the older convention used by this diagram, the plane contains propagation. It is the oscillation direction, not either of these longitudinal planes, that is normal to propagation. Modern authors sometimes use polarization plane for the electric-field plane instead, so the convention must always be stated.</p><p>Polarization is a property of transverse waves; an ordinary purely longitudinal sound wave in a fluid cannot be polarized by selecting one of several transverse displacement directions. The electric field specifies optical polarization, but this does not mean the magnetic field is absent or physically irrelevant. Its oscillation is linked to the electric field in the electromagnetic wave.</p><p><strong>Source correction:</strong> the source attributes the golden appearance of a sea shell solely to polarization. Iridescent shell colours commonly arise from interference in layered structures, with scattering and material colour also relevant. Polarization may affect reflected intensity but is not, by itself, a sufficient explanation for golden colour.</p><figure><img src='assets/cee-notes/quick-revision/031.webp' width='2200' height='3112' alt='Original source page 31, including the lower polarization sketch labelled plane of vibration (a), plane of polarization (b), and direction of propagation.' loading='lazy'><figcaption>Original source reference, page 31. Read the polarization sketch with the corrected plane definitions above; the printed statements are not all scientifically correct.</figcaption></figure>"
    },
    {
      id: "laser-properties",
      title: "Laser: expansion, properties and distance measurement",
      sources: [{ document: "quick-revision", page: 32 }],
      html: "<p>LASER stands for <em>Light Amplification by Stimulated Emission of Radiation</em>. Stimulated emission is the light-amplification mechanism identified in the source. The characteristic output is a coherent, highly directional beam with a narrow spectral range and potentially high intensity. The source calls this monochromatic, coherent and intense light; these are useful idealized characteristics, not claims of perfectly zero linewidth or unlimited intensity for every laser.</p><p>One listed use is measuring long distances. In a pulse-ranging arrangement, a pulse travels to a reflector and returns. If the round-trip travel time is $\\Delta t$ and the speed along the path is $v$, the one-way distance is $R=\\frac{v\\Delta t}{2}$. The factor of two accounts for the outward and return journeys. This relation supplies the physical meaning of the source's distance-measurement use; precision ranging must also account for the medium and instrumental delays.</p>"
    },
    {
      id: "photometric-quantities",
      title: "Luminous flux, luminous intensity and illuminance",
      sources: [{ document: "quick-revision", page: 32 }],
      html: "<p>Photometry measures light weighted by the visual response of the human eye. Keep the source's symbols separate: $\\Phi$ denotes luminous flux, $L$ its luminous intensity, and $I$ its illuminance. In the following notes the less ambiguous symbols $I_v$ and $E_v$ denote luminous intensity and illuminance respectively; the later interference intensity is a different quantity.</p><table><thead><tr><th>Quantity</th><th>Definition and unit</th></tr></thead><tbody><tr><td>Luminous flux $\\Phi$</td><td>Visually weighted radiant power; unit lumen, lm.</td></tr><tr><td>Luminous intensity $I_v$; source symbol $L$</td><td>Luminous flux per unit solid angle in a specified direction; unit candela, cd.</td></tr><tr><td>Illuminance $E_v$; source symbol $I$</td><td>Incident luminous flux per unit receiving area; unit lux, lx.</td></tr></tbody></table><p>For constant intensity over solid angle $\\Omega$, $I_v=\\frac{\\Phi}{\\Omega}$. More generally, $I_v=\\frac{d\\Phi}{d\\Omega}$. Thus $1\\,\\mathrm{cd}=1\\,\\frac{\\mathrm{lm}}{\\mathrm{sr}}$. For uniform illumination over area $A$, $E_v=\\frac{\\Phi}{A}$; locally $E_v=\\frac{d\\Phi}{dA}$. Hence $1\\,\\mathrm{lx}=1\\,\\frac{\\mathrm{lm}}{\\mathrm{m}^2}$.</p><p>The source also gives the centimetre-based illuminance unit phot: $1\\,\\mathrm{phot}=1\\,\\frac{\\mathrm{lm}}{\\mathrm{cm}^2}=10^4\\,\\mathrm{lx}$. The mnemonic is that Lux soap spreads over the body's <em>area</em>, linking lux to illuminance rather than to intensity per solid angle.</p><p><strong>Source correction:</strong> luminous flux is not simply total visible energy. It is a visually weighted rate of energy transfer, not an energy measured in joules. The correct SI symbol for candela is lowercase cd; the source's Cd capitalization should not be carried into a calculation.</p>"
    },
    {
      id: "photometer-and-cosine-law",
      title: "Photometer comparison, inverse-square law and oblique illumination",
      sources: [{ document: "quick-revision", page: 32 }],
      html: "<p>A photometer compares light from different sources, often by adjusting distances until the illuminances of two comparison fields are equal. The source describes this as comparing illumination power; the physical quantity being compared must be specified.</p><p>For a point-like source of luminous intensity $I_v$, at distance $R$, a receiving surface normal to the arriving rays has $E_v=\\frac{I_v}{R^2}$. This is the source's $I=\\frac{L}{R^2}$. It assumes negligible intervening absorption and a distance large enough to treat the emitter as point-like. If two sources illuminate normally and equally, $\\frac{I_{v1}}{R_1^2}=\\frac{I_{v2}}{R_2^2}$.</p><p>If the rays make angle $\\theta$ with the receiving surface's normal, $E_v=\\frac{I_v\\cos\\theta}{R^2}$. At fixed source strength and distance this gives the source's $I\\propto\\cos\\theta$. The angle is not measured from the surface itself.</p><p>On otherwise comparable clear days, solar illumination of a horizontal surface is usually stronger near local solar noon than in the morning because the Sun is higher, its rays are closer to the surface normal, and their atmospheric path is shorter. <strong>Source correction:</strong> the rays are not necessarily vertical at noon. Exact overhead passage depends on latitude and season; clouds and atmospheric conditions can override the simple comparison.</p>"
    },
    {
      id: "photographic-exposure",
      title: "Exposure time, aperture and equally exposed photographic plates",
      sources: [{ document: "quick-revision", page: 32 }],
      html: "<p>For a photographic plate or detector operating within the exposure-reciprocity regime, equal exposure requires equal illuminance multiplied by time: $H=E_vt$. Thus $E_{v1}t_1=E_{v2}t_2$. The source writes these relations as $It=\\mathrm{constant}$ and $I_1t_1=I_2t_2$.</p><p>For normally incident illumination from point-like sources, substitution of the inverse-square law gives $\\frac{I_{v1}t_1}{r_1^2}=\\frac{I_{v2}t_2}{r_2^2}$, matching the source's $\\frac{L_1t_1}{r_1^2}=\\frac{L_2t_2}{r_2^2}$. Source spectrum, plate sensitivity and processing must be comparable. Real photographic emulsions can fail reciprocity at extreme exposure times.</p><p>For a camera lens of focal length $f$ and effective aperture diameter $d$, its f-number is $N=\\frac{f}{d}$. With scene brightness, lens transmission and detector sensitivity unchanged, image illuminance is approximately proportional to $\\frac{1}{N^2}$, so the exposure time for the same result obeys $t\\propto N^2=\\left(\\frac{f}{d}\\right)^2$. Doubling aperture diameter at fixed focal length therefore requires one quarter of the exposure time. Increasing f-number from 4 to 8 requires four times the exposure time. These comparisons assume the same scene and ordinary image-forming conditions, not an arbitrary change of subject distance or magnification.</p>"
    },
    {
      id: "projector-and-phosphorescence",
      title: "Projector condenser and phosphorescence",
      sources: [{ document: "quick-revision", page: 33 }],
      html: "<p>A convex condenser lens between the bulb and film of a film projector collects and directs more of the bulb's light through the film and into the projection optics, helping produce a brighter projected image. This condenser is distinct from the projection lens that forms the enlarged real image of the film on the screen.</p><p>Phosphorescence is delayed emission from a substance following excitation, so the light can persist after the illuminating light has been cut off. The source's identifying observation is this afterglow. It does not mean that every reflected or scattered beam continues after its source is switched off, or that phosphorescence occurs only after excitation stops.</p>"
    },
    {
      id: "light-speed-and-colour",
      title: "Foucault, Michelson and the colour of light",
      sources: [{ document: "quick-revision", page: 33 }],
      html: "<p>Foucault's rotating-mirror experiment established that light travels more slowly in water than in air. The source's Foucault mnemonic associates his name with saying a fact; the fact to retain is $v_{\\mathrm{water}}&lt;v_{\\mathrm{air}}$. It supports the wave-theory prediction for refraction and contradicts the older corpuscular prediction of greater speed in a denser optical medium.</p><p>Michelson's method used rotating-mirror techniques for highly accurate historical measurements of the speed of light. The source links the M of Michelson to most accurately measured. <strong>Source correction:</strong> this is a comparison within older textbook methods, not an eternal claim that Michelson's apparatus surpasses every modern method. In the modern SI, the vacuum speed of light is defined exactly as $c=299792458\\,\\mathrm{m\\,s^{-1}}$.</p><p>The source's colour statement uses wavelength. For monochromatic visible light in a specified medium, frequency and wavelength are related by $v=\\nu\\lambda$, so either can label a colour when the medium is fixed. <strong>Source correction:</strong> crossing into a stationary transparent medium changes speed and wavelength but does not change frequency. A beam does not become a different spectral colour merely because its wavelength in water is smaller. Use frequency or vacuum wavelength when comparing the identity of light across media. Perceived colour of a mixture also depends on its spectrum and the observer, not one wavelength alone.</p>"
    },
    {
      id: "young-intensity-and-unequal-slits",
      title: "Young's experiment: resultant intensity and unequal illumination",
      sources: [{ document: "quick-revision", page: 33 }],
      html: "<p>For coherent waves of the same frequency, with parallel polarization and individual intensities $I_1$ and $I_2$ at the observation point, the resultant intensity is $I=I_1+I_2+2\\sqrt{I_1I_2}\\cos\\phi$, where $\\phi$ is their phase difference. Therefore $I_{\\max}=(\\sqrt{I_1}+\\sqrt{I_2})^2$ and $I_{\\min}=(\\sqrt{I_1}-\\sqrt{I_2})^2$. Unequal amplitudes prevent a perfectly dark minimum.</p><p>For equal individual intensities $I_s$, $I=4I_s\\cos^2\\left(\\frac{\\phi}{2}\\right)$. The source prints $I=I_0\\cos^2\\left(\\frac{\\phi}{2}\\right)$ without defining $I_0$. <strong>Source clarification:</strong> this form is correct only when $I_0$ means the two-wave maximum intensity $4I_s$, not the intensity from one slit.</p><table><thead><tr><th>Change in the source comparison</th><th>Result with its necessary conditions</th></tr></thead><tbody><tr><td>One slit receives red light and the other violet light</td><td>No stationary mutual interference fringes are observed by an ordinary time-averaging detector; the different frequencies do not maintain a fixed relative phase.</td></tr><tr><td>One initially equal slit is made twice as wide</td><td>In the central region where widening increases that slit's field amplitude, both the old bright maxima and old dark minima increase in intensity; fringe contrast is reduced.</td></tr><tr><td>One of two equal slits is closed</td><td>Two-slit interference disappears. At the former central maximum the remaining intensity is one quarter of the original maximum.</td></tr><tr><td>One initially equal slit transmits half its former intensity</td><td>The dark fringes become brighter and bright fringes become dimmer, provided no extra phase shift is introduced.</td></tr></tbody></table><p><strong>Source qualification:</strong> widening a physical slit also changes its diffraction envelope; it cannot increase intensity at every screen position by one universal factor. In a uniform coherent narrow-slit model, doubling width doubles the on-axis amplitude and quadruples that slit's on-axis intensity. With the other slit unchanged, old central-region extrema change from $4I_s$ and zero to $9I_s$ and $I_s$.</p><p><strong>Source correction:</strong> after one slit closes, one quarter refers to the previous equal-slit bright maximum, not to the old intensity at every point. The remaining slit still diffracts, so illumination is not exactly uniform across an extended screen. Approximate uniformity is only a local narrow-slit-envelope approximation.</p><p>For a half-intensity attenuator, the two individual intensities become $I_s$ and $\\frac{I_s}{2}$. The new extrema are $I_{\\max}=I_s\\left(\\frac{3}{2}+\\sqrt{2}\\right)$ and $I_{\\min}=I_s\\left(\\frac{3}{2}-\\sqrt{2}\\right)$. These quantify the source's dark-to-brighter and bright-to-darker comparison without confusing intensity transmission with amplitude transmission.</p>"
    },
    {
      id: "young-transparent-sheet",
      title: "Young's experiment: insertion of a transparent sheet",
      sources: [{ document: "quick-revision", page: 33 }],
      html: "<p>Inserting a uniform transparent sheet in front of one slit increases the optical path in that arm. For sheet thickness $t$ and refractive index $n$ in air at near-normal incidence, the extra optical path is $\\Delta=(n-1)t$. Let $d$ be slit separation, $D$ screen distance and $\\lambda$ the wavelength in air. In the usual paraxial geometry the fringe width is $\\beta=\\frac{\\lambda D}{d}$.</p><p>Choose positive screen displacement $y$ toward the covered slit. Moving that way shortens its geometrical path relative to the uncovered arm. The new central maximum obeys $\\frac{dy}{D}=\\Delta$, giving $y_0=\\frac{D(n-1)t}{d}$. Thus the entire ideal interference pattern shifts <em>toward the covered slit</em>, as the source says. Its fringe width remains unchanged because the sheet adds a constant path offset without changing the path-difference gradient.</p><p>The displacement expressed in fringe spacings is $\\frac{y_0}{\\beta}=\\frac{(n-1)t}{\\lambda}$. These formulas make the source's qualitative sheet comparison explicit. They assume a thin uniform plate, essentially normal incidence, unchanged slit geometry and negligible absorption; a wedge, strong beam deflection or a wavelength-dependent broadband pattern needs separate treatment. A sheet covering both paths equally produces no relative shift.</p>"
    }
  ],
  pageCoverage: [
    { document: "quick-revision", page: 31, status: "partial", sectionIds: ["coherence-and-fringe-shape", "diffraction-and-source-examples", "polarization-and-diagram"], unresolved: ["Top Shape of fringes table: the entry '90 degrees -> circular' and its adjacent mnemonic do not identify the angle's reference axis or observation-plane geometry. No accompanying fringe-geometry diagram specifies the intended arrangement; the exact intended 90-degree case remains unresolved."] },
    { document: "quick-revision", page: 32, status: "transcribed", sectionIds: ["laser-properties", "photometric-quantities", "photometer-and-cosine-law", "photographic-exposure"], unresolved: [] },
    { document: "quick-revision", page: 33, status: "transcribed", sectionIds: ["projector-and-phosphorescence", "light-speed-and-colour", "young-intensity-and-unequal-slits", "young-transparent-sheet"], unresolved: [] }
  ],
  questions: [
    {
      id: "note-wave-optics-001",
      text: "Two light beams of equal frequency have a relative phase that fluctuates randomly during a camera exposure. Why is a stationary fringe pattern absent?",
      options: [{ key: "a", text: "Their field amplitudes need to be equal." }, { key: "b", text: "Their relative phase is not stable." }, { key: "c", text: "Their phase difference must be exactly zero." }, { key: "d", text: "Their common frequency needs to be higher." }],
      answer: "b",
      explanation: "Coherence requires a stable relative phase as well as equal frequency. Random phase changes make the interference term average away during the exposure. Equal frequency by itself is therefore insufficient for stationary fringes.",
      sectionId: "coherence-and-fringe-shape", source: { document: "quick-revision", page: 31 }, cognitive: "understanding"
    },
    {
      id: "note-wave-optics-002",
      text: "A single-slit Fraunhofer pattern has 1.8 mm between successive minima on one side of its centre in the small-angle region. What is the central maximum's minimum-to-minimum width?",
      options: [{ key: "a", text: "0.9 mm" }, { key: "b", text: "1.8 mm" }, { key: "c", text: "5.4 mm" }, { key: "d", text: "3.6 mm" }],
      answer: "d",
      explanation: "The one-sided spacing is $\\frac{\\lambda D}{a}=1.8$ mm. The central maximum extends between the first negative and first positive minima, so its width is twice that spacing: $2(1.8)=3.6$ mm. This is a single-slit, small-angle result.",
      sectionId: "diffraction-and-source-examples", source: { document: "quick-revision", page: 31 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-003",
      text: "Small gaps in foliage project circular bright patches onto the ground on a clear day. Which explanation is usually appropriate?",
      options: [{ key: "a", text: "The gaps form pinhole images of the Sun." }, { key: "b", text: "The gaps produce circular diffraction maxima." }, { key: "c", text: "The leaves reflect a circular patch of sky." }, { key: "d", text: "The gaps refract sunlight like convex lenses." }],
      answer: "a",
      explanation: "Small leaf gaps can act as pinholes that project the solar disc onto the ground. The circular shape is therefore an image of the source, not proof of polarization or of a universal circular diffraction pattern.",
      sectionId: "diffraction-and-source-examples", source: { document: "quick-revision", page: 31 }, cognitive: "understanding"
    },
    {
      id: "note-wave-optics-004",
      text: "A linearly polarized plane light wave travels horizontally in a homogeneous isotropic medium. Its electric field oscillates vertically. Which angle separates the electric-field direction and propagation?",
      options: [{ key: "a", text: "0 degrees" }, { key: "b", text: "45 degrees" }, { key: "c", text: "90 degrees" }, { key: "d", text: "180 degrees" }],
      answer: "c",
      explanation: "The electric field of this transverse electromagnetic wave is perpendicular to propagation, giving 90 degrees. This refers to two directions, not to a plane that contains the propagation line under an older polarization-plane convention.",
      sectionId: "polarization-and-diagram", source: { document: "quick-revision", page: 31 }, cognitive: "recall"
    },
    {
      id: "note-wave-optics-005",
      text: "Which process is named as the amplification mechanism in LASER?",
      options: [{ key: "a", text: "Selective absorption of radiation" }, { key: "b", text: "Stimulated emission of radiation" }, { key: "c", text: "Diffuse reflection of radiation" }, { key: "d", text: "Spontaneous scattering of radiation" }],
      answer: "b",
      explanation: "LASER expands to Light Amplification by Stimulated Emission of Radiation. Stimulated emission supplies the amplification mechanism; simple diffuse reflection, absorption or scattering does not explain the laser's coherent amplified output.",
      sectionId: "laser-properties", source: { document: "quick-revision", page: 32 }, cognitive: "recall"
    },
    {
      id: "note-wave-optics-006",
      text: "A source emits 84 lm uniformly into a solid angle of 3 sr. What is its luminous intensity in that angular region?",
      options: [{ key: "a", text: "28 cd" }, { key: "b", text: "81 cd" }, { key: "c", text: "87 cd" }, { key: "d", text: "252 cd" }],
      answer: "a",
      explanation: "For uniform luminous intensity over the stated solid angle, $I_v=\\frac{\\Phi}{\\Omega}=\\frac{84}{3}=28$ cd. Luminous intensity is flux per solid angle, not flux multiplied by solid angle or flux per receiving area.",
      sectionId: "photometric-quantities", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-007",
      text: "An illuminance meter reads 0.024 phot. What is the equivalent reading in lux?",
      options: [{ key: "a", text: "0.24 lx" }, { key: "b", text: "2.4 lx" }, { key: "c", text: "24 lx" }, { key: "d", text: "240 lx" }],
      answer: "d",
      explanation: "One phot is one lumen per square centimetre. Since one square metre contains $10^4$ square centimetres, one phot equals $10^4$ lux. The reading is therefore $0.024\\times10^4=240$ lx.",
      sectionId: "photometric-quantities", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-008",
      text: "A point-like lamp has luminous intensity 180 cd. A surface 3 m away has its normal at 60 degrees to the arriving rays. Neglecting absorption, what illuminance does it receive?",
      options: [{ key: "a", text: "5 lx" }, { key: "b", text: "20 lx" }, { key: "c", text: "10 lx" }, { key: "d", text: "40 lx" }],
      answer: "c",
      explanation: "Use the receiving-surface cosine law: $E_v=\\frac{I_v\\cos\\theta}{R^2}$. Here $E_v=\\frac{180(0.5)}{3^2}=10$ lx. Ignoring the tilt would give 20 lx; the angle must be measured from the normal.",
      sectionId: "photometer-and-cosine-law", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-009",
      text: "Two point-like lamps give equal normal illuminance to a comparison screen. Lamp A is 2 m away and lamp B is 5 m away. What is the ratio of luminous intensity B to A?",
      options: [{ key: "a", text: "25 : 4" }, { key: "b", text: "5 : 2" }, { key: "c", text: "4 : 25" }, { key: "d", text: "2 : 5" }],
      answer: "a",
      explanation: "Equal illuminance gives $\\frac{I_{vA}}{2^2}=\\frac{I_{vB}}{5^2}$. Hence $\\frac{I_{vB}}{I_{vA}}=\\frac{25}{4}$. The more distant lamp must have the greater intensity; a distance ratio without squaring is insufficient.",
      sectionId: "photometer-and-cosine-law", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-010",
      text: "A camera gives the required exposure in 8 ms at f/4. With scene brightness and sensitivity unchanged, what exposure time is needed at f/8?",
      options: [{ key: "a", text: "2 ms" }, { key: "b", text: "4 ms" }, { key: "c", text: "16 ms" }, { key: "d", text: "32 ms" }],
      answer: "d",
      explanation: "Exposure time is proportional to the square of the f-number when other conditions are unchanged. Thus $t_2=8\\left(\\frac{8}{4}\\right)^2=32$ ms. The higher f-number means a smaller relative aperture and less image illumination.",
      sectionId: "photographic-exposure", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-011",
      text: "Within the reciprocity regime, a plate is satisfactorily exposed at 45 lx for 4 s. How long is required at 30 lx with the same spectrum and plate sensitivity?",
      options: [{ key: "a", text: "3 s" }, { key: "b", text: "6 s" }, { key: "c", text: "8 s" }, { key: "d", text: "12 s" }],
      answer: "b",
      explanation: "Equal exposure requires $E_{v1}t_1=E_{v2}t_2$. Therefore $t_2=\\frac{45\\times4}{30}=6$ s. The lower illuminance needs more time; the product, not the illuminance-to-time ratio, remains constant.",
      sectionId: "photographic-exposure", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-012",
      text: "A convex lens is placed between a projector bulb and its film. What is the principal role of this condenser lens?",
      options: [{ key: "a", text: "To form the enlarged film image on the screen" }, { key: "b", text: "To make the film illumination monochromatic" }, { key: "c", text: "To direct more lamp light through the film" }, { key: "d", text: "To correct the projection lens's chromatic blur" }],
      answer: "c",
      explanation: "The condenser collects and directs the bulb's light through the film into the projection optics, increasing useful illumination. The projection lens forms the screen image. The condenser's principal role is neither spectral filtering nor correction of the projection lens's chromatic aberration.",
      sectionId: "projector-and-phosphorescence", source: { document: "quick-revision", page: 33 }, cognitive: "understanding"
    },
    {
      id: "note-wave-optics-013",
      text: "A material continues emitting visible light after the exciting lamp has been switched off. Which listed phenomenon describes this afterglow?",
      options: [{ key: "a", text: "Refraction" }, { key: "b", text: "Diffraction" }, { key: "c", text: "Polarization" }, { key: "d", text: "Phosphorescence" }],
      answer: "d",
      explanation: "Phosphorescence is delayed emission that can persist after the exciting radiation stops. Refraction changes propagation at an interface, diffraction redistributes waves spatially, and polarization concerns transverse field orientation; none describes this afterglow.",
      sectionId: "projector-and-phosphorescence", source: { document: "quick-revision", page: 33 }, cognitive: "recall"
    },
    {
      id: "note-wave-optics-014",
      text: "Which result and historical inference match Foucault's comparison of light speed in water and air?",
      options: [{ key: "a", text: "Water gives the higher speed, supporting the wave prediction." }, { key: "b", text: "Water gives the higher speed, supporting the corpuscular prediction." }, { key: "c", text: "Water gives the lower speed, supporting the wave prediction." }, { key: "d", text: "Water gives the lower speed, supporting the corpuscular prediction." }],
      answer: "c",
      explanation: "Foucault's rotating-mirror comparison established the lower speed in water. For ordinary visible light, water has the larger refractive index, so $v=\\frac{c}{n}$ is smaller. This result supported the wave prediction over the older corpuscular prediction.",
      sectionId: "light-speed-and-colour", source: { document: "quick-revision", page: 33 }, cognitive: "recall"
    },
    {
      id: "note-wave-optics-015",
      text: "A monochromatic green beam enters stationary transparent water from air. Which property remains unchanged across the interface?",
      options: [{ key: "a", text: "The frequency of the beam" }, { key: "b", text: "The wavelength of the beam" }, { key: "c", text: "The speed of the beam" }, { key: "d", text: "The wave number of the beam" }],
      answer: "a",
      explanation: "The frequency is fixed by the source and remains continuous across a stationary interface. In water the speed and wavelength decrease together because $v=\\nu\\lambda$. The smaller in-medium wavelength does not by itself turn the green beam into another spectral colour.",
      sectionId: "light-speed-and-colour", source: { document: "quick-revision", page: 33 }, cognitive: "understanding"
    },
    {
      id: "note-wave-optics-016",
      text: "Two coherent parallel-polarized beams each supply intensity 3 units at a point. Their phase difference there is $\\frac{2\\pi}{3}$. What is their resultant intensity?",
      options: [{ key: "a", text: "0 units" }, { key: "b", text: "3 units" }, { key: "c", text: "6 units" }, { key: "d", text: "12 units" }],
      answer: "b",
      explanation: "The equal-beam result is $I=4I_s\\cos^2\\left(\\frac{\\phi}{2}\\right)$. With $I_s=3$ and $\\phi=\\frac{2\\pi}{3}$, the half-phase is $\\frac{\\pi}{3}$ and its squared cosine is $\\frac{1}{4}$. Therefore $I=12\\times\\frac{1}{4}=3$ units.",
      sectionId: "young-intensity-and-unequal-slits", source: { document: "quick-revision", page: 33 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-017",
      text: "Each of two equal slits alone gives 5 intensity units at the central observation point. What intensity remains there if one slit is closed?",
      options: [{ key: "a", text: "1.25 units" }, { key: "b", text: "10 units" }, { key: "c", text: "5 units" }, { key: "d", text: "20 units" }],
      answer: "c",
      explanation: "The remaining slit still contributes its individual intensity of 5 units. With both coherent equal slits open, the central maximum was $4(5)=20$ units. Closing one leaves one quarter of that former maximum, not one quarter of the individual-slit intensity.",
      sectionId: "young-intensity-and-unequal-slits", source: { document: "quick-revision", page: 33 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-018",
      text: "A phase-neutral attenuator halves the intensity transmitted through one of two initially equal Young slits. What happens to the former bright and dark fringes?",
      options: [{ key: "a", text: "Both bright and dark fringes become darker." }, { key: "b", text: "Both bright and dark fringes become brighter." }, { key: "c", text: "Bright fringes brighten and dark fringes darken." }, { key: "d", text: "Bright fringes dim and dark fringes brighten." }],
      answer: "d",
      explanation: "The amplitudes become unequal, so cancellation at the old minima is incomplete and the dark fringes brighten. The sum of amplitudes at the old maxima decreases, so those fringes dim. No phase shift was introduced, so this comparison does not require a fringe-position shift.",
      sectionId: "young-intensity-and-unequal-slits", source: { document: "quick-revision", page: 33 }, cognitive: "understanding"
    },
    {
      id: "note-wave-optics-019",
      text: "A uniform sheet of refractive index 1.5 and thickness 3 micrometres covers only the upper slit in a Young experiment in air. For wavelength 0.5 micrometres, how does the central fringe shift?",
      options: [{ key: "a", text: "Three fringe spacings toward the lower slit" }, { key: "b", text: "Three fringe spacings toward the upper slit" }, { key: "c", text: "Six fringe spacings toward the upper slit" }, { key: "d", text: "Six fringe spacings toward the lower slit" }],
      answer: "b",
      explanation: "The added optical path is $(1.5-1)(3)=1.5$ micrometres. The shift in fringe spacings is $\\frac{1.5}{0.5}=3$. The central maximum moves toward the covered upper slit, shortening that geometrical path to compensate the sheet's added optical path.",
      sectionId: "young-transparent-sheet", source: { document: "quick-revision", page: 33 }, cognitive: "application"
    },
    {
      id: "note-wave-optics-020",
      text: "A pulse-ranging laser returns an echo 18 microseconds after emission. Taking the path speed as $3.0\\times10^8$ metres per second and neglecting delays, what is the one-way target distance?",
      options: [{ key: "a", text: "2.7 km" }, { key: "b", text: "5.4 km" }, { key: "c", text: "1.35 km" }, { key: "d", text: "10.8 km" }],
      answer: "a",
      explanation: "The measured time includes both journeys. The one-way distance is $R=\\frac{v\\Delta t}{2}=\\frac{(3.0\\times10^8)(18\\times10^{-6})}{2}=2700$ m, or 2.7 km. Multiplying speed by the full elapsed time without halving gives the round-trip distance.",
      sectionId: "laser-properties", source: { document: "quick-revision", page: 32 }, cognitive: "application"
    }
  ]
};