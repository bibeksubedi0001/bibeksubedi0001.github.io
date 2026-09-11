window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["elasticity"] = {
  id: "elasticity",
  subject: "Physics",
  title: "Elasticity",
  sections: [
    {
      id: "stress-strain-and-shear",
      title: "Stress, strain and elastic response",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>Elastic deformation is recoverable when the deforming force is removed within the elastic range. Normal stress acts perpendicular to an area: $\\sigma=\\frac{F_\\perp}{A}$. Longitudinal strain is $\\epsilon=\\frac{\\Delta L}{L}$, where $L$ is the original length. Strain is dimensionless; stress is measured in pascals, with $1\\,\\mathrm{Pa}=1\\,\\mathrm{N\\,m^{-2}}$.</p><p>A tangential force produces shear stress $\\tau=\\frac{F_\\parallel}{A}$ and can distort the body's shape. In simple shear, a face shifts sideways by $x$ relative to a parallel face separated by height $h$. Engineering shear strain is $\\gamma=\\frac{x}{h}=\\tan\\theta$, approximately $\\theta$ in radians for small distortion. <strong>Source correction:</strong> shear strain is the change in angle between initially perpendicular material lines, not the angle of a whole body's rigid rotation. A rigid rotation alone produces no strain.</p><p>The source lists 'Quartz, Fibre, Phosphorus, Bronze' as elastic-body examples. <strong>Source clarification:</strong> the useful standard examples are quartz fibres and phosphor bronze, the copper-based alloy used in spring elements. They should not be interpreted as a claim that every unspecified fibre or elemental phosphorus is an ideal elastic material. Even these examples recover only within their working elastic range.</p>"
    },
    {
      id: "elastic-moduli",
      title: "Young's, bulk and shear moduli",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>The source compares three ratios of stress to the corresponding strain. Use small, reversible deformation in the appropriate loading mode. Each modulus has the units of stress, not the units of strain.</p><table><thead><tr><th>Modulus</th><th>Definition and use</th></tr></thead><tbody><tr><td>Young's modulus $Y$</td><td>$Y=\\frac{\\sigma}{\\epsilon}=\\frac{FL}{A\\Delta L}$ for a uniform bar in uniaxial loading in its linear elastic range. The source calls this normal stress divided by longitudinal strain. It characterizes resistance to extension or compression of a solid with free lateral contraction or expansion.</td></tr><tr><td>Bulk modulus $K$</td><td>$K=-\\frac{\\Delta p}{\\frac{\\Delta V}{V}}$ for a small uniform pressure change. It characterizes resistance to volume change and is defined for solids, liquids and gases. With positive compressive pressure, $\\Delta V$ is negative, so the minus sign makes $K$ positive.</td></tr><tr><td>Shear modulus $G$</td><td>$G=\\frac{\\tau}{\\gamma}$ in the linear shear regime. The source calls it rigidity and writes $\\eta$. It characterizes resistance to shear deformation of a solid. Ordinary fluids have zero equilibrium shear modulus because a sustained shear stress causes flow, not a static shear strain.</td></tr></tbody></table><p><strong>Source clarification:</strong> Young's modulus measures stiffness against extension, not how far a specimen can stretch before breaking. Bulk modulus measures resistance to compression; compressibility is its reciprocal, $\\kappa=\\frac{1}{K}$. The source uses $k$ and later $\\beta$ for bulk modulus; neither should be confused with the reciprocal compressibility.</p><p>The source's order $K_{\\mathrm{solid}}&gt;K_{\\mathrm{liquid}}&gt;K_{\\mathrm{gas}}$ is a useful broad trend for typical materials under ordinary conditions, not an exceptionless rule for all substances and states. Gas bulk modulus also depends on the compression process: for an ideal gas it is $p$ in isothermal compression and $\\gamma_{\\mathrm{gas}}p$ in adiabatic compression. Here $\\gamma_{\\mathrm{gas}}$ is the heat-capacity ratio, not shear strain.</p><p>'Glass is more elastic than rubber' uses the school-physics convention of comparing Young's moduli: glass generally has much greater stiffness and therefore smaller elastic strain at the same small stress. It does not mean that glass can withstand larger stretching, is less brittle, or always recovers from more severe deformation. Rubber can undergo large recoverable strains, often outside a simple constant-$Y$ approximation.</p>"
    },
    {
      id: "elastic-energy",
      title: "Stress-strain area and elastic energy",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>The area under a loading stress-strain graph gives work done per unit original volume in the small-strain uniaxial description: $w=\\int_0^\\epsilon\\sigma\\,d\\epsilon$. The area, rather than the graph's slope, represents energy density. The slope in a linear elastic region is Young's modulus.</p><p>For a linear elastic material loaded gradually from zero stress, the graph is a straight line and the area is triangular: $w=\\frac{1}{2}\\sigma\\epsilon$. Equivalent forms are $w=\\frac{\\sigma^2}{2Y}$ and $w=\\frac{1}{2}Y\\epsilon^2$. Energy density has units $\\mathrm{J\\,m^{-3}}$, dimensionally the same as pascals.</p><p>For a uniform wire of volume $V=AL$, stored elastic potential energy is $U=wV=\\frac{1}{2}\\sigma\\epsilon V$. Substituting $\\sigma=\\frac{F}{A}$ and $\\epsilon=\\frac{\\Delta L}{L}$ gives $U=\\frac{1}{2}F\\Delta L$. The source writes this as $\\frac{1}{2}Fe$; there $e$ means extension, not dimensionless strain. For constant $Y$, another useful form is $U=\\frac{F^2L}{2AY}$.</p><p>The factor one-half assumes force increases linearly from zero to the final force. A sudden application of a constant load is not the same quasistatic loading process. Beyond the elastic range, the loading area may include dissipated work, so it must not all be called recoverable elastic potential energy.</p>"
    },
    {
      id: "brittle-ductile-malleable",
      title: "Brittleness, ductility and malleability",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<ul><li>A brittle material fractures with little plastic deformation. Glass is a familiar example: high stiffness can coexist with a small strain at failure.</li><li>A ductile material has an appreciable plastic deformation range beyond the elastic limit before fracture. Its ability to undergo tensile plastic deformation allows it to be drawn into wire.</li><li>A malleable material can undergo substantial compressive plastic deformation and be hammered or rolled into sheets. This is the sheet-forming property named in the source.</li></ul><p><strong>Source correction:</strong> the source defines brittle behavior by saying strain is much larger than stress. That comparison is dimensionally meaningless: strain is dimensionless, while stress has units of pressure. Brittleness concerns the small amount of plastic deformation before fracture, not a numerical comparison between unlike quantities. Ductility and malleability concern different loading modes; neither is the same property as a large Young's modulus.</p>"
    },
    {
      id: "material-effects-and-ideal-limits",
      title: "Temperature, impurities, molecular forces and ideal limits",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>For many ordinary solids, elastic moduli generally decrease as temperature rises. <strong>Source clarification:</strong> the source gives this as an unconditional decrease, but it is a material- and temperature-range-dependent trend. Entropic rubber elasticity and structural or phase changes can give different behavior. A modulus should be associated with a specified material state and temperature.</p><p><strong>Source correction:</strong> adding impurities does not invariably increase Young's modulus. Alloying, porosity, defects and chemical changes can increase or decrease measured stiffness depending on the host, concentration and microstructure. A treatment that increases hardness or yield strength need not increase Young's modulus by the same amount, or at all.</p><p>The source connects cohesive forces with elasticity, viscosity and surface tension. Interatomic and intermolecular interactions provide restoring forces in elastic deformation; liquid cohesion contributes to surface tension and influences liquid viscosity. This is not a complete explanation of all viscosity: gas viscosity primarily involves molecular momentum transport, so it cannot be described solely as cohesion opposing flow.</p><p>In the ideal perfectly rigid limit, a finite stress produces zero elastic strain, so the corresponding elastic modulus tends to infinity. This is the precise meaning of the source's 'elasticity of a rigid body is infinity'. No actual ordinary material is perfectly rigid.</p><p><strong>Source correction:</strong> the statement 'elasticity of a plastic body is zero' needs a definition. Perfectly plastic behavior after yielding has zero incremental stress-strain slope, $\\frac{d\\sigma}{d\\epsilon}=0$, on an ideal stress plateau. A real elastic-plastic solid can still have a finite, nonzero Young's modulus in its initial elastic range and during unloading. Lack of complete recovery after yielding does not make its initial modulus zero.</p>"
    },
    {
      id: "shaft-torsion",
      title: "When a hollow shaft resists twisting better",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>The source says hollow cylinders are harder to twist than solid cylinders. The comparison is meaningful only after material, length, mass or outer radius is specified. For a circular shaft in linear elastic torsion, $\\theta=\\frac{\\mathcal{T}L}{GJ}$, where $\\mathcal{T}$ is torque and $J$ is the polar second moment of area. $J$ has units $\\mathrm{m^4}$ and is not the mass moment of inertia.</p><ul><li>For a solid circular shaft, $J_s=\\frac{\\pi R_s^4}{2}$.</li><li>For a concentric hollow circular shaft, $J_h=\\frac{\\pi(R_o^4-R_i^4)}{2}$.</li><li>With the same material, length and outer radius, the hollow shaft has smaller $J$ than the solid shaft and twists more under the same torque.</li><li>With the same material, length and mass, the two cross-sectional areas are equal: $R_s^2=R_o^2-R_i^2$. Then $\\frac{J_h}{J_s}=\\frac{R_o^2+R_i^2}{R_s^2}&gt;1$. The hollow shaft places the same amount of material farther from the axis and is torsionally stiffer.</li></ul><p><strong>Source correction:</strong> the unqualified hollow-greater-than-solid rule is false at equal outer diameter. The equal-mass comparison, with a larger hollow-shaft outer diameter, is the condition that supports it. These formulas describe stiffness in elastic torsion, not a complete prediction of buckling or failure.</p>"
    },
    {
      id: "breaking-load-and-stress",
      title: "Breaking force is not breaking stress",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>The source prints a chain asserting that breaking stress, Young's modulus, area and squared radius are proportional. <strong>Source correction:</strong> for otherwise comparable specimens of a material with tensile breaking stress $\\sigma_b$, it is breaking force that obeys $F_b=\\sigma_bA$. For a circular wire, $A=\\pi r^2$, so $F_b\\propto A\\propto r^2$ while the material's nominal breaking stress is held fixed.</p><p>Young's modulus and breaking stress are material properties in the elementary uniform-material model, not quantities proportional to a wire's cross-sectional area. Doubling a wire's radius quadruples the breaking force but does not thereby quadruple $Y$ or $\\sigma_b$. Actual specimen size, flaws and processing can affect measured strength, so the simple comparison assumes comparable material quality.</p><p>There is also no universal proportionality between breaking stress and Young's modulus. Only an additional assumption of the same fracture strain and a linear stress-strain law up to fracture would give $\\sigma_b=Y\\epsilon_b$ with the same $\\epsilon_b$. The source supplies no such universal assumption.</p>"
    },
    {
      id: "pendulum-and-shm-notes",
      title: "The page's pendulum and oscillation reminders",
      sources: [{ document: "quick-revision", page: 16 }],
      html: "<p>The source includes two oscillation reminders on this elasticity page. A real pendulum eventually stops because dissipative effects, including air resistance and pivot friction, remove mechanical energy. Its energy is transferred to the surroundings, mainly as thermal energy, rather than destroyed. An ideal frictionless pendulum does not stop for this reason.</p><p>The next source line groups time period, frequency, total energy and initial epoch as constants. For an ideal undamped simple harmonic oscillator with fixed parameters, the period and frequency remain constant, total mechanical energy is constant, and the initial phase or epoch is a fixed constant after the time origin is chosen. In $x=A\\cos(\\omega t+\\phi)$, $\\phi$ is this initial phase, whereas the instantaneous phase $\\omega t+\\phi$ changes with time.</p><p><strong>Source clarification:</strong> frequency is not another name for total energy despite the source's parentheses. Kinetic and potential energies vary with position even when their sum is constant. In the friction-damped pendulum described immediately before, mechanical energy decreases, so the constant-energy statement cannot be applied without the ideal undamped condition. A finite-amplitude pendulum is not exactly simple harmonic; its familiar approximately amplitude-independent period requires small angular displacement.</p>"
    }
  ],
  pageCoverage: [
    {
      document: "quick-revision", page: 16, status: "transcribed",
      sectionIds: ["stress-strain-and-shear", "elastic-moduli", "elastic-energy", "brittle-ductile-malleable", "material-effects-and-ideal-limits", "shaft-torsion", "breaking-load-and-stress", "pendulum-and-shm-notes"],
      unresolved: []
    }
  ],
  questions: [
    {
      id: "note-elasticity-001", text: "Which observation represents shear strain, rather than a rigid rotation of a body?",
      options: [{ key: "a", text: "Every material line turns through the same angle without distortion." }, { key: "b", text: "The angle between two initially perpendicular material lines changes." }, { key: "c", text: "The entire undeformed body moves sideways at constant speed." }, { key: "d", text: "All three dimensions increase by the same fractional amount." }],
      answer: "b", explanation: "Shear strain measures angular distortion between material directions. A rigid rotation preserves the angles between those directions and therefore produces no strain. Equal expansion in every direction is volumetric deformation, not the simple shear described here.",
      sectionId: "stress-strain-and-shear", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-002", text: "The upper face of a block shifts sideways by $0.20\\,\\mathrm{mm}$ while the lower face remains fixed. The faces are $40\\,\\mathrm{mm}$ apart. What is the small shear strain?",
      options: [{ key: "a", text: "$5.0\\times10^{-4}$" }, { key: "b", text: "$5.0\\times10^{-2}$" }, { key: "c", text: "$5.0\\times10^{-5}$" }, { key: "d", text: "$5.0\\times10^{-3}$" }],
      answer: "d", explanation: "Engineering shear strain is $\\gamma=\\frac{x}{h}$. Using the same unit for both lengths, $\\gamma=\\frac{0.20}{40}=0.005$. It is dimensionless and is approximately the angular distortion in radians for this small deformation.",
      sectionId: "stress-strain-and-shear", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-003", text: "A $1.0\\,\\mathrm{m}$ wire of area $2.0\\,\\mathrm{mm^2}$ extends by $0.60\\,\\mathrm{mm}$ under $120\\,\\mathrm{N}$ within its linear elastic range. What is Young's modulus?",
      options: [{ key: "a", text: "$100\\,\\mathrm{GPa}$" }, { key: "b", text: "$60\\,\\mathrm{GPa}$" }, { key: "c", text: "$200\\,\\mathrm{GPa}$" }, { key: "d", text: "$300\\,\\mathrm{GPa}$" }],
      answer: "a", explanation: "Area is $2.0\\times10^{-6}\\,\\mathrm{m^2}$ and extension is $6.0\\times10^{-4}\\,\\mathrm{m}$. Stress is $\\frac{120}{2.0\\times10^{-6}}=6.0\\times10^7\\,\\mathrm{Pa}$ and strain is $6.0\\times10^{-4}$. Their ratio is $1.0\\times10^{11}\\,\\mathrm{Pa}=100\\,\\mathrm{GPa}$.",
      sectionId: "elastic-moduli", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-004", text: "Which elastic modulus is used for a liquid's equilibrium response to a small uniform pressure increase?",
      options: [{ key: "a", text: "Young's modulus" }, { key: "b", text: "Shear modulus" }, { key: "c", text: "Bulk modulus" }, { key: "d", text: "Torsional rigidity" }],
      answer: "c", explanation: "Uniform pressure changes a liquid's volume, so the relevant property is bulk modulus. An ordinary liquid cannot sustain a static shear stress, and a free liquid does not behave as a solid bar in a Young's-modulus tensile test.",
      sectionId: "elastic-moduli", source: { document: "quick-revision", page: 16 }, cognitive: "recall"
    },
    {
      id: "note-elasticity-005", text: "A pressure increase of $2.0\\,\\mathrm{MPa}$ produces a fractional volume change of $-1.0\\times10^{-3}$. What is the bulk modulus?",
      options: [{ key: "a", text: "$0.002\\,\\mathrm{GPa}$" }, { key: "b", text: "$0.20\\,\\mathrm{GPa}$" }, { key: "c", text: "$-2.0\\,\\mathrm{GPa}$" }, { key: "d", text: "$2.0\\,\\mathrm{GPa}$" }],
      answer: "d", explanation: "The definition with compression positive is $K=-\\frac{\\Delta p}{\\frac{\\Delta V}{V}}$. Therefore $K=-\\frac{2.0\\times10^6}{-1.0\\times10^{-3}}=2.0\\times10^9\\,\\mathrm{Pa}=2.0\\,\\mathrm{GPa}$. The minus sign accounts for decreasing volume under increasing pressure.",
      sectionId: "elastic-moduli", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-006", text: "A solid experiences shear stress $6.0\\,\\mathrm{MPa}$ and small shear strain $0.0020$. Find its shear modulus.",
      options: [{ key: "a", text: "$0.30\\,\\mathrm{GPa}$" }, { key: "b", text: "$3.0\\,\\mathrm{GPa}$" }, { key: "c", text: "$12\\,\\mathrm{GPa}$" }, { key: "d", text: "$30\\,\\mathrm{GPa}$" }],
      answer: "b", explanation: "Shear modulus is $G=\\frac{\\tau}{\\gamma}$. Thus $G=\\frac{6.0\\times10^6}{0.0020}=3.0\\times10^9\\,\\mathrm{Pa}=3.0\\,\\mathrm{GPa}$. This is a stress-to-strain ratio, not a force-to-displacement ratio.",
      sectionId: "elastic-moduli", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-007", text: "In the school-physics statement that glass is 'more elastic' than rubber, which property is actually being compared?",
      options: [{ key: "a", text: "Glass has a larger maximum recoverable extension." }, { key: "b", text: "Glass has a larger plastic strain before fracture." }, { key: "c", text: "Glass has a larger Young's modulus at small strain." }, { key: "d", text: "Glass has a larger ability to bend without breaking." }],
      answer: "c", explanation: "In this terminology, more elastic means stiffer: a larger Young's modulus gives less strain under the same small stress. It does not imply that glass can stretch more than rubber or that it is less brittle. Recoverable strain range and stiffness are different properties.",
      sectionId: "elastic-moduli", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-008", text: "A material is loaded linearly from zero to stress $40\\,\\mathrm{MPa}$ at strain $2.0\\times10^{-4}$. What elastic energy is stored per unit volume?",
      options: [{ key: "a", text: "$4.0\\,\\mathrm{kJ\\,m^{-3}}$" }, { key: "b", text: "$8.0\\,\\mathrm{kJ\\,m^{-3}}$" }, { key: "c", text: "$20\\,\\mathrm{kJ\\,m^{-3}}$" }, { key: "d", text: "$40\\,\\mathrm{kJ\\,m^{-3}}$" }],
      answer: "a", explanation: "The triangular stress-strain area is $w=\\frac{1}{2}\\sigma\\epsilon$. Hence $w=\\frac{1}{2}(40\\times10^6)(2.0\\times10^{-4})=4000\\,\\mathrm{J\\,m^{-3}}=4.0\\,\\mathrm{kJ\\,m^{-3}}$. Omitting the one-half would double the energy.",
      sectionId: "elastic-energy", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-009", text: "A wire extends by $1.5\\,\\mathrm{mm}$ when its load is increased gradually from zero to $80\\,\\mathrm{N}$ in the linear elastic range. How much energy is stored?",
      options: [{ key: "a", text: "$0.030\\,\\mathrm{J}$" }, { key: "b", text: "$0.120\\,\\mathrm{J}$" }, { key: "c", text: "$0.060\\,\\mathrm{J}$" }, { key: "d", text: "$0.600\\,\\mathrm{J}$" }],
      answer: "c", explanation: "Stored energy is the area under the force-extension line: $U=\\frac{1}{2}F\\Delta L$. Converting extension to metres gives $U=\\frac{1}{2}\\times80\\times0.0015=0.060\\,\\mathrm{J}$. The extension is a length, not the fractional strain.",
      sectionId: "elastic-energy", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-010", text: "In a small-strain tensile loading graph with stress on the vertical axis and strain on the horizontal axis, what does the area under the curve represent?",
      options: [{ key: "a", text: "Work done per unit original volume" }, { key: "b", text: "Applied force per unit cross-sectional area" }, { key: "c", text: "Extension per unit original length" }, { key: "d", text: "Incremental stress per unit additional strain" }],
      answer: "a", explanation: "The area is $\\int\\sigma\\,d\\epsilon$, which is work density. Stress alone is force per area, strain is extension per original length, and the curve's slope is the incremental modulus. Only recoverable loading work is stored elastic energy.",
      sectionId: "elastic-energy", source: { document: "quick-revision", page: 16 }, cognitive: "recall"
    },
    {
      id: "note-elasticity-011", text: "Which behavior identifies a brittle specimen in a tensile test?",
      options: [{ key: "a", text: "It stretches plastically through a large range before fracture." }, { key: "b", text: "It retains every imposed deformation without any elastic response." }, { key: "c", text: "Its numerical strain is always greater than its numerical stress." }, { key: "d", text: "It fractures after very little plastic deformation has occurred." }],
      answer: "d", explanation: "Brittleness is characterized by little plastic deformation before failure. Comparing numerical stress with numerical strain has no physical meaning because the two quantities have different dimensions. A brittle material can still be stiff and elastically deform before fracture.",
      sectionId: "brittle-ductile-malleable", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-012", text: "A metal can be drawn into a long wire without fracturing during the drawing process. Which behavior makes this possible?",
      options: [{ key: "a", text: "Its complete lack of tensile deformation" }, { key: "b", text: "Its appreciable plastic deformation in tension" }, { key: "c", text: "Its zero breaking force under tensile loading" }, { key: "d", text: "Its instantaneous return from every deformation" }],
      answer: "b", explanation: "Wire drawing relies on ductility, the ability to sustain appreciable plastic tensile deformation before fracture. The change of shape is deliberately permanent. A large recoverable elastic strain or a large modulus alone would not establish this property.",
      sectionId: "brittle-ductile-malleable", source: { document: "quick-revision", page: 16 }, cognitive: "recall"
    },
    {
      id: "note-elasticity-013", text: "Which material property is most directly used when a metal is hammered into a thin sheet?",
      options: [{ key: "a", text: "Malleability" }, { key: "b", text: "Brittleness" }, { key: "c", text: "Compressibility" }, { key: "d", text: "Viscosity" }],
      answer: "a", explanation: "Malleability is the capacity for plastic deformation under compressive working, including hammering or rolling into sheets. Bulk compressibility concerns volume change under pressure, while sheet forming mainly changes shape. Brittleness instead promotes fracture with little plastic deformation.",
      sectionId: "brittle-ductile-malleable", source: { document: "quick-revision", page: 16 }, cognitive: "recall"
    },
    {
      id: "note-elasticity-014", text: "Two comparable circular wires have the same material breaking stress. The second has twice the first's radius. Which comparison follows in the elementary uniform-material model?",
      options: [{ key: "a", text: "Breaking force doubles; breaking stress doubles." }, { key: "b", text: "Breaking force stays fixed; breaking stress quadruples." }, { key: "c", text: "Breaking force quadruples; breaking stress stays fixed." }, { key: "d", text: "Breaking force quadruples; Young's modulus quadruples." }],
      answer: "c", explanation: "Breaking force is $F_b=\\sigma_b\\pi r^2$. Doubling $r$ multiplies area and breaking force by four. By the given assumption, breaking stress is unchanged, and changing geometry does not itself change the material's Young's modulus.",
      sectionId: "breaking-load-and-stress", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-015", text: "A solid shaft and a hollow shaft have equal outer radius $R$, length and material. The hollow shaft has inner radius $\\frac{R}{2}$. What is its torsional stiffness divided by the solid shaft's stiffness?",
      options: [{ key: "a", text: "$\\frac{16}{15}$" }, { key: "b", text: "$\\frac{15}{16}$" }, { key: "c", text: "$\\frac{3}{4}$" }, { key: "d", text: "$\\frac{4}{3}$" }],
      answer: "b", explanation: "Torsional stiffness is $\\frac{GJ}{L}$, so equal $G$ and $L$ leave the ratio of polar area moments. The ratio is $1-\\left(\\frac{1}{2}\\right)^4=1-\\frac{1}{16}=\\frac{15}{16}$. With equal outer radii, the hollow shaft is less stiff, not more stiff.",
      sectionId: "shaft-torsion", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-016", text: "A solid shaft of radius $a$ and a hollow shaft of inner radius $a$ and outer radius $\\sqrt{2}a$ have equal length and material. How many times the solid shaft's torsional stiffness does the hollow shaft have?",
      options: [{ key: "a", text: "$1$" }, { key: "b", text: "$2$" }, { key: "c", text: "$4$" }, { key: "d", text: "$3$" }],
      answer: "d", explanation: "The areas are equal because $\\pi[(\\sqrt{2}a)^2-a^2]=\\pi a^2$. The ratio of polar area moments is $\\frac{(\\sqrt{2}a)^4-a^4}{a^4}=4-1=3$. Since $G$ and $L$ are also equal, the hollow shaft is three times as stiff in elastic torsion.",
      sectionId: "shaft-torsion", source: { document: "quick-revision", page: 16 }, cognitive: "application"
    },
    {
      id: "note-elasticity-017", text: "Which statement best describes the effect of increasing temperature on the elastic modulus of a material?",
      options: [{ key: "a", text: "It always rises for every solid at every temperature." }, { key: "b", text: "It often falls in ordinary solids, but exceptions exist." }, { key: "c", text: "It remains exactly fixed unless the specimen fractures." }, { key: "d", text: "It becomes zero as soon as the temperature increases." }],
      answer: "b", explanation: "Many ordinary solids soften elastically as temperature increases, so a decreasing modulus is a useful trend. It is not universal: entropic elasticity and changes of phase or structure can produce different behavior. The material and temperature range must be specified.",
      sectionId: "material-effects-and-ideal-limits", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-018", text: "A small amount of an impurity is added to an unspecified metal. What can be concluded about the change in Young's modulus from this information alone?",
      options: [{ key: "a", text: "It must increase by the impurity's mass percentage." }, { key: "b", text: "It must decrease whenever the strength increases." }, { key: "c", text: "It must be independent of the impurity and its amount." }, { key: "d", text: "Its direction of change needs material-specific information." }],
      answer: "d", explanation: "Impurity effects depend on the host, impurity species, concentration and microstructure. Strengthening is not identical to increasing Young's modulus. Therefore the blanket rule that impurities necessarily increase modulus is not supported by the information in the question.",
      sectionId: "material-effects-and-ideal-limits", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-019", text: "On an ideal perfectly plastic stress-strain plateau, stress remains fixed while strain increases. What is the tangent modulus on that plateau?",
      options: [{ key: "a", text: "Infinite" }, { key: "b", text: "Equal to the initial Young's modulus" }, { key: "c", text: "Zero" }, { key: "d", text: "A negative constant" }],
      answer: "c", explanation: "The tangent modulus is $\\frac{d\\sigma}{d\\epsilon}$. Constant stress with increasing strain gives zero slope. This describes the post-yield plateau and does not imply that the material had zero Young's modulus in its initial elastic range.",
      sectionId: "material-effects-and-ideal-limits", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    },
    {
      id: "note-elasticity-020", text: "A pendulum's oscillations gradually shrink because of air resistance and pivot friction. Which statement about its energy is correct?",
      options: [{ key: "a", text: "Mechanical energy decreases as energy passes to the surroundings." }, { key: "b", text: "Mechanical energy stays fixed while the amplitude decreases." }, { key: "c", text: "Potential energy is always zero whenever friction acts." }, { key: "d", text: "Kinetic energy remains fixed throughout each oscillation." }],
      answer: "a", explanation: "Dissipative forces remove mechanical energy, mainly converting it to thermal energy in the surroundings. The constant total mechanical energy statement applies to an ideal undamped oscillator, not this pendulum. Conservation of energy still holds for the pendulum plus its environment.",
      sectionId: "pendulum-and-shm-notes", source: { document: "quick-revision", page: 16 }, cognitive: "understanding"
    }
  ]
};