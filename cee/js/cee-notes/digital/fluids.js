window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["fluids"] = {
  id: "fluids",
  subject: "Physics",
  title: "Fluids and surface tension",
  sections: [
    {
      id: "surface-tension-and-temperature",
      title: "Surface tension, surface energy and temperature",
      sources: [{ document: "quick-revision", page: 17 }, { document: "quick-revision", page: 19 }],
      html: "<p>Surface tension $S$ is tangential force per unit length across a line on one liquid interface. Its SI unit is $\\mathrm{N\\,m^{-1}}$, equivalent to $\\mathrm{J\\,m^{-2}}$. The source uses $T$ for surface tension; $S$ is used here to avoid confusing it with temperature. Increasing the surface area requires work against cohesive interactions. In the elementary molecular picture, molecules at the surface have greater potential energy than comparable molecules in the bulk.</p><ul><li>The source's water-surface insects and spiders can be supported partly by the upward component of surface-tension forces around their water-repellent legs. This is a force balance, not a solid skin permanently covering the water.</li><li>Small, nearly isolated liquid drops tend to be spherical because a sphere minimizes surface area at fixed volume. The source applies this to raindrops. Large falling raindrops can be flattened or distorted by aerodynamic forces, so not every raindrop is spherical.</li><li>For a pure liquid in equilibrium with its vapor, surface tension generally decreases as temperature rises and tends to zero at the critical temperature, where the distinct liquid-vapor interface disappears.</li></ul><p><strong>Source correction:</strong> the source puts boiling point and critical temperature together as temperatures of zero surface tension. Surface tension is generally still positive at an ordinary boiling point below the critical temperature. Boiling and the critical point are different conditions.</p><p><strong>Source correction:</strong> the later statement that potential energy is greater on the 'outer surface' and 'concave side' is not a general energy law. A surface has excess free energy relative to bulk material, but curvature determines a pressure jump; it does not independently assign a larger surface energy to whichever side is called concave. At fixed temperature and composition, the elementary surface-work relation uses area and $S$.</p>"
    },
    {
      id: "contact-angle-and-impurities",
      title: "Contact angle, wetting and impurities",
      sources: [{ document: "quick-revision", page: 17 }],
      html: "<p>The contact angle $\\theta$ is measured through the liquid between the solid surface and the tangent to the liquid interface at their contact line. An acute angle indicates wetting and gives capillary rise; an obtuse angle indicates nonwetting and gives capillary depression in the elementary cylindrical-tube model.</p><table><thead><tr><th>Source example</th><th>Angle and interpretation</th></tr></thead><tbody><tr><td>Glass and water</td><td>The source gives $8^\\circ$, a small acute angle. Very clean glass and water are often approximated by $0^\\circ$ in elementary problems; surface preparation and contamination can change the measured value.</td></tr><tr><td>Glass and mercury</td><td>The source gives $135^\\circ$, an obtuse angle associated with a convex mercury meniscus and depression. This is an approximate example, not an exact invariant of every glass surface.</td></tr></tbody></table><p><strong>Source correction:</strong> the printed degree-C labels next to these values are inappropriate: they are contact angles in degrees, not temperatures in degrees Celsius. For an ideal homogeneous, clean surface at equilibrium, the intrinsic contact angle is not changed merely by tilting the solid. Advancing and receding angles, roughness and contact-line pinning can complicate actual measurements.</p><p>A waterproofing treatment can change a wetting surface into a nonwetting one by increasing its water contact angle from acute to obtuse. The relevant change is the surface chemistry, not simply the inclination of the material.</p><p>The source says soluble impurities increase surface tension and slightly soluble impurities decrease it. <strong>Source correction:</strong> solubility alone does not determine the direction of change. Many dissolved inorganic salts raise water's surface tension, whereas alcohols and surfactants can lower it, including substances soluble in water. Some sparingly soluble surface-active materials also lower it by accumulating at the interface. The impurity's chemical identity, concentration and adsorption behavior are required.</p>"
    },
    {
      id: "capillary-rise-and-width",
      title: "Capillary rise, tilt, raised volume and energy",
      sources: [{ document: "quick-revision", page: 17 }, { document: "quick-revision", page: 19 }],
      html: "<p>For a narrow circular capillary of radius $r$ dipping into a large reservoir, the vertical surface-tension force is $2\\pi rS\\cos\\theta$. Balancing it with the raised liquid's weight $\\rho g\\pi r^2h$ gives $h=\\frac{2S\\cos\\theta}{\\rho gr}$. Neglect the meniscus volume and assume equilibrium, unchanged wetting conditions and uniform density. A negative $\\cos\\theta$ describes a depression.</p><p>In the narrow-tube approximation, tilting a sufficiently long capillary does not change the contact angle or vertical equilibrium rise $h$. If the tube makes angle $\\alpha$ with the vertical, the length of liquid along it is $\\ell=\\frac{h}{\\cos\\alpha}$. The vertical height is not the length measured along the tilted tube. The statement fails if the tube is too short to accommodate that column or the meniscus assumptions break down.</p><p>For vertical wetting capillaries containing the same liquid with the same contact angle, $h\\propto\\frac{1}{r}$. The source's three comparisons for a wider tube are:</p><table><thead><tr><th>Raised-column quantity</th><th>Effect of increasing radius</th></tr></thead><tbody><tr><td>Volume $V=\\pi r^2h$</td><td>Increases in proportion to $r$.</td></tr><tr><td>Mass $m=\\rho\\pi r^2h$</td><td>Increases in proportion to $r$.</td></tr><tr><td>Gravitational potential energy</td><td>Remains the same in this ideal comparison.</td></tr></tbody></table><p>The last result uses the column's centre at height $\\frac{h}{2}$: $U_g=\\frac{1}{2}\\rho g\\pi r^2h^2=\\frac{2\\pi S^2\\cos^2\\theta}{\\rho g}$. It compares vertical capillaries and neglects meniscus and reservoir-level corrections. The source calls the volume and mass 'passed'; if this means steady pressure-driven flow instead of a raised equilibrium column, the dependence is instead given by Poiseuille's fourth-power law on page 19.</p>"
    },
    {
      id: "annular-boundary-force",
      title: "Surface force around a disc with a hole",
      sources: [{ document: "quick-revision", page: 17 }],
      html: "<p>The source prints $2\\pi T(R+r)$ for a disc with a hole of radius $r$. Taking $R$ as the outer radius, the sum of inner and outer circumferences is $2\\pi(R+r)$. Multiplying by surface tension gives a force scale, $F=2\\pi S(R+r)$, not a new value of surface tension.</p><p><strong>Source correction:</strong> this force is obtained for one interface along each boundary when the components being added act fully in the same measured direction. In a vertical pull, actual components depend on the contact angles and meniscus geometry. A soap film with two contributing interfaces can introduce an additional factor of two; coplanar forces around a closed circle cannot simply be added as vectors to obtain the perimeter times $S$.</p><p>The source does not show the apparatus or identify the interface count and force direction. That missing setup is recorded in page coverage. The typed perimeter expression is therefore given with explicit conditions, not as an unconditional formula for any perforated disc.</p>"
    },
    {
      id: "laplace-pressure",
      title: "Excess pressure across drops, bubbles and cylinders",
      sources: [{ document: "quick-revision", page: 17 }, { document: "quick-revision", page: 18 }],
      html: "<p>For a single curved interface with principal curvature radii $R_1$ and $R_2$, the pressure jump is $\\Delta p=S\\left(\\frac{1}{R_1}+\\frac{1}{R_2}\\right)$ with a consistent curvature sign convention. Across a convex spherical interface, pressure is higher on the side toward the centre of curvature, the concave side in the source's terminology.</p><table><thead><tr><th>Interface or region</th><th>Pressure difference</th></tr></thead><tbody><tr><td>Spherical liquid drop in gas</td><td>$p_{\\mathrm{drop}}-p_{\\mathrm{outside}}=\\frac{2S}{R}$.</td></tr><tr><td>Spherical air bubble within bulk liquid</td><td>$p_{\\mathrm{air}}-p_{\\mathrm{liquid}}=\\frac{2S}{R}$: one interface.</td></tr><tr><td>Liquid film of a thin spherical soap bubble</td><td>$p_{\\mathrm{film}}-p_{\\mathrm{outside}}\\approx\\frac{2S}{R}$, from the outer interface.</td></tr><tr><td>Air inside a thin spherical soap bubble</td><td>$p_{\\mathrm{inside}}-p_{\\mathrm{outside}}\\approx\\frac{4S}{R}$: the two interface jumps add.</td></tr><tr><td>Long cylindrical single interface</td><td>$\\Delta p=\\frac{S}{R}$ because the axial curvature is zero.</td></tr></tbody></table><p>The soap-bubble entries transcribe the source's separate 'Solution' and 'Air' rows. The solution value is not the full inside-air-to-outside-air difference. Inner and outer radii have been treated as equal because the film is thin. A cylindrical soap film has two interfaces and must not be confused with the source's single-interface cylinder result.</p><p>For a wetting liquid's concave meniscus in a capillary, the centre-of-curvature side is the gas side; liquid pressure just below that meniscus is less than the gas pressure. Thus 'concave side has greater pressure' is not the same as saying every concave liquid surface has greater liquid pressure.</p>"
    },
    {
      id: "surface-work",
      title: "Work of formation and expansion",
      sources: [{ document: "quick-revision", page: 17 }],
      html: "<p>At fixed temperature and constant surface tension, the reversible work associated with creating an interface is $W=S\\Delta A$. Count every interface whose area changes. The source's 'liquid bubble' formation entry has the single-interface coefficient; the same area formula applies to a liquid drop or an air cavity in bulk liquid.</p><table><thead><tr><th>Formation from negligible area to radius $R$</th><th>Surface work</th></tr></thead><tbody><tr><td>One spherical interface</td><td>$4\\pi R^2S$</td></tr><tr><td>Thin spherical soap bubble, two interfaces</td><td>$8\\pi R^2S$</td></tr></tbody></table><table><thead><tr><th>Radius increases from $r_1$ to $r_2$</th><th>Additional surface work</th></tr></thead><tbody><tr><td>Liquid drop or other single spherical interface</td><td>$4\\pi S(r_2^2-r_1^2)$</td></tr><tr><td>Thin spherical soap bubble</td><td>$8\\pi S(r_2^2-r_1^2)$</td></tr></tbody></table><p>These expressions are the surface contribution only. A full gas-expansion process may also involve work against ambient pressure, gas compression or expansion, and heat exchange. When surface tension varies during formation, integrate $S\\,dA$ rather than multiplying the final $S$ by the area change without justification.</p>"
    },
    {
      id: "bubble-coalescence",
      title: "Isothermal coalescence of soap bubbles",
      sources: [{ document: "quick-revision", page: 18 }],
      html: "<p>The source states that isothermal coalescence conserves surface energy and area, gives $R=\\sqrt{r_1^2+r_2^2}$ for two bubbles, and gives $R=\\sqrt{N}r$ for $N$ equal bubbles. These formulas require a special pressure assumption.</p><p>For ideal gas with no leakage at a common fixed temperature, gas amount is proportional to absolute pressure times volume. Let surrounding pressure be $p_0$ and assume thin soap films with constant $S$. A bubble of radius $r$ has internal pressure $p_0+\\frac{4S}{r}$. Define $f(r)=p_0r^3+4Sr^2$. Conservation of gas during the merger of two bubbles gives $f(R)=f(r_1)+f(r_2)$.</p><p><strong>Source correction:</strong> only when $p_0=0$, or is negligible compared with every Laplace pressure involved, does this reduce to $R^2=r_1^2+r_2^2$. Then the combined area of both soap-film interfaces and their surface energy are unchanged in this idealized limit. For $N$ identical initial bubbles it gives $R=\\sqrt{N}r$.</p><p>At nonzero ambient pressure, isothermal behavior alone does not conserve surface area or surface energy; use the absolute-pressure equation. If ambient pressure dominates the Laplace pressures, volume is approximately additive and $R\\approx\\sqrt[3]{r_1^3+r_2^3}$. For equal bubbles this becomes approximately $R\\approx\\sqrt[3]{N}r$. Ideal-gas internal energy is unchanged at fixed temperature and fixed total gas amount, but that is not a blanket conservation of surface energy; heat and work must be included in a full energy balance.</p>"
    },
    {
      id: "continuity-and-ideal-fluid",
      title: "Continuity, ideal fluids and a narrowing pipe",
      sources: [{ document: "quick-revision", page: 18 }, { document: "quick-revision", page: 19 }, { document: "quick-revision", page: 20 }],
      html: "<p>In the source's elementary ideal-fluid model, viscosity is zero and compressibility is zero: the fluid is inviscid and incompressible. Zero compressibility corresponds to infinite bulk modulus, not zero bulk modulus. Real liquids can approximate incompressible flow over limited pressure and temperature changes.</p><p>Continuity expresses conservation of mass. For steady one-inlet, one-outlet flow without leakage or mass sources, $\\rho_1A_1v_1=\\rho_2A_2v_2$. With constant density this becomes $A_1v_1=A_2v_2=Q$, where $Q$ is volume flow per unit time and $v$ is section-mean speed. A smaller area therefore means greater mean speed at the same flow rate.</p><p><strong>Source correction:</strong> continuity is not limited to an ideal, nonviscous liquid as the source suggests. Viscous and compressible fluids also conserve mass; the simplified constant-volume-flow form needs constant density, not zero viscosity. The page-20 statement that volume conservation is a basic liquid property is an incompressible approximation. Mass is conserved generally, whereas thermal expansion, compression or mixing can change volume.</p><p><strong>Source correction:</strong> page 18 says water's viscosity decreases and pressure increases when flow enters a narrower pipe. For steady, horizontal, low-loss flow, speed increases and static pressure decreases. Water's material viscosity does not decrease simply because the pipe narrows. Temperature, composition and pressure effects on viscosity must be treated separately from the continuity and Bernoulli relations.</p>"
    },
    {
      id: "bernoulli-and-applications",
      title: "Bernoulli's equation and all listed applications",
      sources: [{ document: "quick-revision", page: 18 }, { document: "quick-revision", page: 20 }],
      html: "<p>For steady, incompressible, inviscid flow along a streamline with no pump, turbine or dissipative loss, $p+\\frac{1}{2}\\rho v^2+\\rho gz$ is constant. These terms represent pressure, kinetic-energy density and gravitational-energy density. At equal elevation, increased speed is associated with lower static pressure under these conditions. Viscous head losses or external work require additional terms.</p><table><thead><tr><th>Source example</th><th>Physical meaning</th></tr></thead><tbody><tr><td>Atomizer</td><td>A fast air stream near a liquid outlet can reduce local pressure; reservoir pressure drives liquid upward into the stream, which breaks it into droplets.</td></tr><tr><td>Magnus effect</td><td>A rotating body moving through fluid develops an asymmetric flow and pressure distribution, producing a transverse force. Viscosity and circulation help establish the flow.</td></tr><tr><td>Aspirator</td><td>A fast fluid jet entrains another fluid and creates a low-pressure region used for suction.</td></tr><tr><td>Paint gun</td><td>A fast air stream draws or entrains paint and disperses it as a spray; practical designs can also use supplied paint pressure.</td></tr><tr><td>Aeroplane lift</td><td>The flow around a wing creates a pressure distribution with a net lift component. Bernoulli's relation connects pressure and speed where its assumptions hold, while downward momentum imparted to air gives the corresponding force balance.</td></tr></tbody></table><p>Bernoulli's relation does not by itself determine every velocity field. In particular, lift does not require an assumption that parcels above and below a wing must reunite after equal travel times. In hydrostatics, setting velocity to zero gives $p+\\rho gz=\\mathrm{constant}$, connecting the source's later pressure reminder to this limiting case.</p>"
    },
    {
      id: "viscosity-and-flow-regime",
      title: "Viscosity, units, Reynolds number and material trends",
      sources: [{ document: "quick-revision", page: 18 }, { document: "quick-revision", page: 19 }],
      html: "<p>Dynamic viscosity $\\eta$ relates shear stress to velocity gradient in a Newtonian fluid. Its SI unit is the pascal-second, also called the poiseuille: $1\\,\\mathrm{Pa\\,s}=1\\,\\mathrm{N\\,s\\,m^{-2}}=10\\,\\mathrm{P}$, where $\\mathrm{P}$ denotes poise. This is not the unit of surface tension.</p><p>Streamline or laminar flow has an orderly layered motion; turbulent flow has irregular velocity fluctuations and mixing. The source describes laminar flow up to a critical velocity and turbulent flow above it. <strong>Source clarification:</strong> transition is not a universal sharp speed shared by all pipes and fluids. Geometry, disturbances and viscosity matter, and a transitional regime can occur.</p><p>Reynolds number compares inertial and viscous effects. For a circular pipe using mean speed and diameter $D$, $\\mathrm{Re}=\\frac{\\rho vD}{\\eta}$. If a specified critical Reynolds number is used, $v_c=\\frac{\\mathrm{Re}_c\\eta}{\\rho D}$. The source uses $K$ for this Reynolds-number criterion; it is not itself a speed. A radius-based convention needs a correspondingly changed numerical criterion.</p><table><thead><tr><th>Temperature rises</th><th>Usual dynamic-viscosity trend</th></tr></thead><tbody><tr><td>Liquid</td><td>Decreases. Source mnemonic: 'L = Low'.</td></tr><tr><td>Gas</td><td>Increases. Source mnemonic: 'G = Great'.</td></tr></tbody></table><p>These trends describe ordinary liquid and dilute-gas regimes. Liquid flow becomes easier as molecular rearrangement becomes easier with heating; increased molecular momentum transport raises dilute-gas viscosity.</p><p>The source's pressure notes say liquid viscosity increases with pressure but water viscosity decreases. Many liquids do show increasing viscosity at fixed temperature. Water has an anomalous region, especially at relatively low temperatures and moderate pressures, in which viscosity can initially decrease as pressure rises. <strong>Source clarification:</strong> neither statement is unconditional for every pressure and temperature. Water's behavior in a narrowing pipe must not be inferred from this pressure anomaly without specifying its thermodynamic state.</p>"
    },
    {
      id: "poiseuille-flow",
      title: "Poiseuille's law for a capillary tube",
      sources: [{ document: "quick-revision", page: 19 }],
      html: "<p>For steady, fully developed laminar flow of a Newtonian incompressible liquid through a long straight circular tube with no slip at the wall, $Q=\\frac{V}{t}=\\frac{\\pi\\Delta p\\,r^4}{8\\eta\\ell}$. Here $r$ is the internal radius, $\\ell$ is tube length, $\\Delta p$ is the driving pressure drop, and $V$ is the volume delivered in time $t$. For a horizontal tube, the pressure drop directly supplies the viscous loss; elevation changes require the corresponding driving-head correction.</p><ul><li>At fixed radius, length and viscosity, flow rate is proportional to pressure difference.</li><li>At fixed pressure difference, length and viscosity, flow rate is proportional to the fourth power of radius. Doubling radius multiplies $Q$ by 16.</li><li>At fixed pressure difference and radius, doubling length or viscosity halves the flow rate.</li><li>Mass flow rate is $\\rho Q$ and mean speed is $\\frac{Q}{\\pi r^2}$.</li></ul><p>The strong radius dependence concerns pressure-driven throughput, not the raised mass in a capillary at equilibrium. The formula is not valid without modification for turbulent flow, short entrance regions or non-Newtonian viscosity.</p>"
    },
    {
      id: "efflux-and-jet-range",
      title: "Torricelli efflux and horizontal jet range",
      sources: [{ document: "quick-revision", page: 18 }, { document: "quick-revision", page: 19 }],
      html: "<p>For an ideal liquid leaving a small hole a depth $h$ below a large reservoir's free surface, with equal atmospheric pressures at the surface and outlet and negligible loss, Torricelli's theorem gives $v=\\sqrt{2gh}$. The source writes a proportionality; under these ideal conditions the coefficient is exactly one.</p><p>For fixed $g$, exit speed depends on the vertical pressure head $h$, not separately on liquid density, total stored quantity or hole area. Hole area does affect discharge $Q=av$. The 'independent of cross-section' statement assumes the reservoir area is much larger than the outlet area so that free-surface speed is negligible. Viscosity, a pressure difference above the liquid or a rapidly moving free surface change the result.</p><p>For the horizontal-jet geometry, let the free surface be height $H$ above the horizontal landing plane and the hole be depth $h$ below the free surface. The jet starts at height $H-h$. Its fall time is $t=\\sqrt{\\frac{2(H-h)}{g}}$, so horizontal range is $x=vt=2\\sqrt{h(H-h)}$.</p><p><strong>Source correction:</strong> page 19 prints $\\sqrt{2h(H-h)}$, which is missing a factor of $\\sqrt{2}$. The correct expression $2\\sqrt{h(H-h)}$ is consistent with the page-18 maximum: $h=\\frac{H}{2}$ and $x_{\\mathrm{max}}=H$. Holes at complementary depths $h$ and $H-h$ have the same range. The range decreases when the hole moves either upward or downward away from the midpoint; the source explicitly mentions the downward decrease.</p><p><strong>Source correction:</strong> 'velocity increases both downwards and upwards' is not true for an unpowered free jet. As outlet depth increases, the exit speed increases; as outlet depth decreases, it decreases. After launch, a freely descending jet speeds up under gravity while an upward-moving jet slows until its highest point, neglecting drag. Do not confuse this speed behavior with the symmetric range-versus-hole-position relation.</p>"
    },
    {
      id: "stokes-and-terminal-speed",
      title: "Stokes drag, terminal speed and merging drops",
      sources: [{ document: "quick-revision", page: 19 }],
      html: "<p>For a rigid sphere of radius $r$ moving slowly at speed $v$ relative to a Newtonian fluid, Stokes' drag magnitude is $F_d=6\\pi\\eta rv$. It acts opposite the relative velocity. The assumptions include creeping flow with very small Reynolds number, no slip and negligible nearby-wall influence.</p><p>A sphere of density $\\rho_s$ settling in a fluid of density $\\rho_f$ has effective downward force $\\frac{4}{3}\\pi r^3(\\rho_s-\\rho_f)g$. At terminal speed, this equals Stokes drag, giving $v_t=\\frac{2(\\rho_s-\\rho_f)gr^2}{9\\eta}$. The source writes the two densities as $\\rho$ and $\\sigma$. Terminal acceleration is zero, but weight, buoyancy and drag need not be zero separately.</p><ul><li>For the same densities, viscosity and gravity within this regime, $v_t\\propto r^2$. Doubling radius makes terminal speed four times as large, a 300% increase rather than an additional four times the original.</li><li>The source's constant-speed falling raindrops describe terminal motion after a transient, when drag and buoyancy balance weight. Larger raindrops need a more general drag law and may not obey the Stokes square-radius relation.</li><li>If $N$ equal incompressible drops of radius $r$ coalesce without mass loss, the new radius is $R=\\sqrt[3]{N}r$. If both initial and final drops obey the same Stokes-type drag model, the new terminal speed is $v_t'=N^{\\frac{2}{3}}v_t$.</li></ul><p>The drop-coalescence rule conserves liquid volume and is distinct from the vacuum soap-bubble square-root rule. A clean liquid drop or bubble can have internal circulation and a mobile interface, changing its drag coefficient; the elementary Stokes result treats the interface as effectively rigid. Density less than that of the surrounding fluid reverses the direction of terminal motion.</p>"
    },
    {
      id: "hydrostatic-pressure",
      title: "Gauge pressure, vessel shape and wall forces",
      sources: [{ document: "quick-revision", page: 19 }, { document: "quick-revision", page: 20 }],
      html: "<p>For a stationary liquid of constant density beneath a free surface, pressure increases with depth: $p_{\\mathrm{abs}}=p_{\\mathrm{surface}}+\\rho gh$. Gauge pressure is defined by $p_{\\mathrm{gauge}}=p_{\\mathrm{abs}}-p_{\\mathrm{atm}}$. In a vessel open to the atmosphere this gives $p_{\\mathrm{gauge}}=\\rho gh$.</p><p><strong>Source clarification:</strong> the source's 'difference of hydrostatic and atmospheric pressure' requires the hydrostatic pressure to mean absolute pressure. The depth term $\\rho gh$ alone is already the gauge pressure for an open vessel; atmospheric pressure must not be subtracted from it again. Gauge pressure can be negative. Pressure at a specified depth in a connected stationary liquid depends on density, gravity and surface pressure, not on vessel shape. Forces still depend on the area and orientation of each surface.</p><p>The source lists Bernoulli's theorem under gauge pressure. The hydrostatic relation also follows from Bernoulli's zero-velocity limit, but gauge pressure is a choice of reference and is not defined by Bernoulli's theorem. A sudden fall in atmospheric pressure can indicate an approaching low-pressure weather system and possible storm; it is a forecasting clue, not a guaranteed storm.</p><p>For liquid depth $h$ in an open vertical-sided vessel, the horizontal bottom has uniform gauge pressure $\\rho gh$. A vertical wall extending from the free surface to that depth has linearly increasing gauge pressure, with mean $\\frac{\\rho gh}{2}$ when its width is constant. These transcribe the source's $hdg$ and $\\frac{hdg}{2}$ with $d$ interpreted as liquid density.</p><p>For a cylindrical vessel of radius $R$, bottom force is $F_b=\\rho g h\\pi R^2$. The scalar integral of pressure magnitude over the entire cylindrical side is $F_{s,\\mathrm{scalar}}=\\rho g\\pi Rh^2$. These scalar quantities are equal when $h=R$. <strong>Source correction:</strong> this gives one precise interpretation of the source's undefined 'force on both sides' equality. It is not equality of net force vectors: the horizontal pressure forces around a complete cylindrical wall cancel vectorially. The source does not identify the surfaces being compared, so its intended comparison is recorded as incomplete.</p>"
    },
    {
      id: "buoyancy-and-relative-density",
      title: "Archimedes' principle, floating and apparent weight",
      sources: [{ document: "quick-revision", page: 19 }, { document: "quick-revision", page: 20 }],
      html: "<p>Archimedes' principle states that buoyant force equals the weight of displaced fluid: $F_b=\\rho_f gV_{\\mathrm{displaced}}=m_{\\mathrm{displaced}}g$. This includes all the source's upthrust dependencies: immersed volume, fluid density, displaced-fluid mass and its weight. For a body held at rest fully immersed in a fluid, with other support effects neglected, apparent weight is $W_{\\mathrm{app}}=mg-F_b$. Its apparent loss of weight is the buoyant force, not a loss of mass.</p><p>For a freely floating body at rest with negligible surface-tension support, $F_b=mg$. <strong>Source correction:</strong> the source says displaced-liquid weight is 'equal or greater' than body weight when the body floats. Equality is required at equilibrium; a greater upward force gives upward acceleration until the immersion changes. The maximum buoyancy available on full immersion must be at least the body's weight for ordinary floating to be possible. For a uniform body, the equilibrium immersed fraction is $\\frac{V_{\\mathrm{immersed}}}{V_{\\mathrm{body}}}=\\frac{\\rho_{\\mathrm{body}}}{\\rho_f}$.</p><p>For a nonporous specimen weighed in air and then fully immersed in water without dissolving or touching the vessel, relative density is $\\frac{\\rho_s}{\\rho_w}=\\frac{W_{\\mathrm{air}}}{W_{\\mathrm{air}}-W_{\\mathrm{water}}}$, neglecting air buoyancy. The denominator is the loss of weight in water, not the remaining apparent weight. The reference water temperature and density should be specified for precise work.</p><p>The source says apparent weight increases with temperature. This is true for a fixed-volume submerged body when the liquid expands on heating, lowering density and hence buoyancy. <strong>Source clarification:</strong> both body expansion and liquid-density changes matter. Water's anomalous behavior near $0$ to $4^\\circ\\mathrm{C}$ and a changing immersed volume can reverse or modify the trend. It is not a universal temperature rule for every balance or fluid.</p>"
    },
    {
      id: "pascal-and-hydraulic-press",
      title: "Pascal's law and the hydraulic press",
      sources: [{ document: "quick-revision", page: 19 }],
      html: "<p>Pascal's law states that a pressure increment applied to a confined fluid at rest is transmitted undiminished in all directions throughout the fluid and to the vessel boundaries. This does not say that the total pressure is identical at different heights; hydrostatic head still contributes.</p><p>For ideal hydraulic pistons at the same elevation, ignoring piston weights and friction, $\\frac{F_1}{A_1}=\\frac{F_2}{A_2}$. Thus $F_2=F_1\\frac{A_2}{A_1}$: a larger output area produces a larger output force. With incompressible liquid, displaced volumes agree, $A_1s_1=A_2s_2$, so a larger force is accompanied by a shorter output displacement. The ideal work relation is $F_1s_1=F_2s_2$; a hydraulic press does not create energy.</p>"
    },
    {
      id: "ice-melting-levels",
      title: "Melting ice: all density and inclusion cases",
      sources: [{ document: "quick-revision", page: 20 }],
      html: "<p>The page gives the liquid-density comparison twice; both lists are consolidated below. Let ice of mass $m$ initially float in a host liquid of density $\\rho_l$. Its displaced volume is $\\frac{m}{\\rho_l}$. After melting, the water occupies $\\frac{m}{\\rho_w}$. Neglect thermal expansion, evaporation and changes of volume on mixing, and assume the ice initially floats. The change in occupied or displaced volume is $\\Delta V=m\\left(\\frac{1}{\\rho_w}-\\frac{1}{\\rho_l}\\right)$.</p><table><thead><tr><th>Host liquid compared with liquid water</th><th>Level after the ice melts</th></tr></thead><tbody><tr><td>$\\rho_l&gt;\\rho_w$</td><td>Rises: meltwater volume exceeds the volume initially displaced.</td></tr><tr><td>$\\rho_l&lt;\\rho_w$, with ice initially floating</td><td>Falls: meltwater volume is smaller than the volume initially displaced.</td></tr><tr><td>$\\rho_l=\\rho_w$</td><td>Unchanged.</td></tr></tbody></table><p>For ordinary pure ice floating in fresh water, the level is unchanged after melting under these assumptions. This includes the source's repeated standalone ice-melting reminder. If the ice initially sinks, is held submerged or mixes nonideally with another liquid, use the actual displaced volumes instead of assuming the floating derivation.</p><table><thead><tr><th>Initially floating ice in fresh water</th><th>After melting</th></tr></thead><tbody><tr><td>Pure ice</td><td>Water level unchanged.</td></tr><tr><td>Ice containing a piece of cork that subsequently floats</td><td>Level unchanged: the cork continues to displace water equal to its own weight.</td></tr><tr><td>Ice containing dense metal that subsequently sinks</td><td>Level falls: the metal now displaces only its own volume, less than the weight-equivalent water volume it displaced while supported by the floating ice.</td></tr></tbody></table><p>The source labels these inclusion cases 'in cork' and 'in metal'; the floating composite and the eventual floating or sinking of the inclusion are the necessary conditions. For the dense metal alone, its change of displaced volume is $m_m\\left(\\frac{1}{\\rho_m}-\\frac{1}{\\rho_w}\\right)&lt;0$. The reason is displacement balance, not simply that a heavy object moves down.</p>"
    },
    {
      id: "balloon-and-cage-examples",
      title: "The balloon load and bird-cage examples",
      sources: [{ document: "quick-revision", page: 20 }],
      html: "<p>The source says a hydrogen balloon can lift 1 kg of feathers more easily than 1 kg of stone. Both masses have the same gravitational weight $mg$ at the same location. A payload that excludes more surrounding air receives more air buoyancy, so its apparent downward load can be slightly smaller. The balloon's own ideal gas-buoyancy contribution is $(\\rho_{\\mathrm{air}}-\\rho_{\\mathrm{hydrogen}})gV_{\\mathrm{balloon}}$, before allowing for envelope and payload weights.</p><p><strong>Source clarification:</strong> the feather statement requires a genuinely larger displaced-air volume, for example an appropriately defined enclosing package. Air-filled gaps freely communicating with the atmosphere do not automatically count as excluded volume. A loose pile's bounding-box volume must not be used as its buoyant displacement. There is no intrinsic difference between the true weights of equal 1 kg masses.</p><p>The source's 'Parrot cage' example gives 'Air tight: Same' and 'Flying: Lighter'. For a sealed container on a scale with the bird hovering and the total centre of mass stationary on average, the time-averaged reading includes the bird's weight. Downward momentum imparted to enclosed air is transferred to the walls and floor. Wingbeats, takeoff, landing and changes of vertical momentum can cause instantaneous reading fluctuations.</p><p><strong>Source correction:</strong> 'flying means lighter' is not a universal scale rule. In an open cage, the answer depends on how much momentum is carried out by airflow and how much is intercepted by surfaces on the scale. If the supporting downwash transfers its momentum to surroundings outside the weighed system, the cage can read lighter than when the bird is perched. If it transfers that momentum to the weighed enclosure, the average bird-weight contribution remains. The source does not state the open-flow boundary or timing conditions for its second line; this omission is recorded in page coverage.</p>"
    }
  ],
  pageCoverage: [
    {
      document: "quick-revision", page: 17, status: "partial",
      sectionIds: ["surface-tension-and-temperature", "contact-angle-and-impurities", "capillary-rise-and-width", "annular-boundary-force", "laplace-pressure", "surface-work"],
      unresolved: [
        "Middle of page under 'Wider the capillary tube', the disc-with-hole expression 2*pi*T*(R+r) is legible, but the source provides no apparatus, interface count, contact angle or force direction. Its intended measurement setup cannot be recovered; annular-boundary-force preserves the expression as a conditional force scale, not as a universal surface-tension formula."
      ]
    },
    {
      document: "quick-revision", page: 18, status: "transcribed",
      sectionIds: ["laplace-pressure", "bubble-coalescence", "continuity-and-ideal-fluid", "bernoulli-and-applications", "viscosity-and-flow-regime", "efflux-and-jet-range"],
      unresolved: []
    },
    {
      document: "quick-revision", page: 19, status: "transcribed",
      sectionIds: ["surface-tension-and-temperature", "capillary-rise-and-width", "continuity-and-ideal-fluid", "viscosity-and-flow-regime", "poiseuille-flow", "efflux-and-jet-range", "stokes-and-terminal-speed", "hydrostatic-pressure", "buoyancy-and-relative-density", "pascal-and-hydraulic-press"],
      unresolved: []
    },
    {
      document: "quick-revision", page: 20, status: "partial",
      sectionIds: ["continuity-and-ideal-fluid", "bernoulli-and-applications", "hydrostatic-pressure", "buoyancy-and-relative-density", "ice-melting-levels", "balloon-and-cage-examples"],
      unresolved: [
        "Lower half, after the mean bottom/wall pressure line: 'h = R ... force on both sides are equal' does not identify the two surfaces or show a diagram. The intended comparison remains unspecified; hydrostatic-pressure distinguishes bottom force, integrated side-pressure magnitudes and the sidewall's net vector force.",
        "Near the bottom, 'Parrot cage (Weight feels)': 'Air tight: Same' and 'Flying: Lighter' are legible, but the second entry does not specify whether the cage is open, where downwash momentum goes, or whether the reading is instantaneous or time-averaged. Only explicitly defined cases are taught and used in questions."
      ]
    }
  ],
  questions: [
    {
      id: "note-fluids-001", text: "For a pure substance in equilibrium with its vapor, at which condition does the liquid-vapor surface tension tend to zero?",
      options: [{ key: "a", text: "At every ordinary boiling point" }, { key: "b", text: "At the liquid-vapor critical temperature" }, { key: "c", text: "At the normal freezing temperature" }, { key: "d", text: "At any pressure below one atmosphere" }],
      answer: "b", explanation: "At the critical temperature the distinction between the liquid and vapor phases disappears, so the corresponding interface and its surface tension vanish. At an ordinary boiling point below the critical temperature, a distinct interface remains and surface tension is generally positive.",
      sectionId: "surface-tension-and-temperature", source: { document: "quick-revision", page: 17 }, cognitive: "recall"
    },
    {
      id: "note-fluids-002", text: "A capillary treatment changes the contact angle from $60^\\circ$ to $120^\\circ$ without changing radius, liquid density or surface tension. If the original rise was $h$, what is the new signed height?",
      options: [{ key: "a", text: "$\\frac{h}{2}$" }, { key: "b", text: "$h$" }, { key: "c", text: "$2h$" }, { key: "d", text: "$-h$" }],
      answer: "d", explanation: "Capillary height is proportional to $\\cos\\theta$. Since $\\cos60^\\circ=\\frac{1}{2}$ and $\\cos120^\\circ=-\\frac{1}{2}$, its magnitude is unchanged and its sign reverses. The former rise becomes an equal depression.",
      sectionId: "capillary-rise-and-width", source: { document: "quick-revision", page: 17 }, cognitive: "application"
    },
    {
      id: "note-fluids-003", text: "Two vertical capillaries have the same liquid and wetting angle. The second has twice the first's radius. Neglecting meniscus volume, which comparison describes the raised liquid column?",
      options: [{ key: "a", text: "Half the height and twice the raised mass" }, { key: "b", text: "Twice the height and half the raised mass" }, { key: "c", text: "Half the height and half the raised mass" }, { key: "d", text: "Twice the height and four times the raised mass" }],
      answer: "a", explanation: "Equilibrium height obeys $h\\propto\\frac{1}{r}$, so doubling radius halves height. Raised mass is $\\rho\\pi r^2h$, which scales as $r$ under the same conditions. Thus mass doubles rather than quadruples because the column is shorter.",
      sectionId: "capillary-rise-and-width", source: { document: "quick-revision", page: 17 }, cognitive: "understanding"
    },
    {
      id: "note-fluids-004", text: "One liquid interface contacts both circular boundaries of an annular plate, of radii $3.0\\,\\mathrm{cm}$ and $1.0\\,\\mathrm{cm}$. All tension components act vertically in the same direction. With $S=0.050\\,\\mathrm{N\\,m^{-1}}$, what is their total force?",
      options: [{ key: "a", text: "$3.14\\,\\mathrm{mN}$" }, { key: "b", text: "$6.28\\,\\mathrm{mN}$" }, { key: "c", text: "$12.6\\,\\mathrm{mN}$" }, { key: "d", text: "$25.1\\,\\mathrm{mN}$" }],
      answer: "c", explanation: "Under the explicit one-interface and full vertical-projection conditions, $F=2\\pi S(R+r)$. Thus $F=2\\pi(0.050)(0.030+0.010)=0.012566\\,\\mathrm{N}=12.6\\,\\mathrm{mN}$. A second contributing interface would double this force, but is excluded by the premise.",
      sectionId: "annular-boundary-force", source: { document: "quick-revision", page: 17 }, cognitive: "application"
    },
    {
      id: "note-fluids-005", text: "A spherical air bubble of radius $1.5\\,\\mathrm{mm}$ is inside a bulk liquid with surface tension $0.075\\,\\mathrm{N\\,m^{-1}}$. What is the air pressure above the adjacent liquid pressure?",
      options: [{ key: "a", text: "$100\\,\\mathrm{Pa}$" }, { key: "b", text: "$200\\,\\mathrm{Pa}$" }, { key: "c", text: "$50\\,\\mathrm{Pa}$" }, { key: "d", text: "$400\\,\\mathrm{Pa}$" }],
      answer: "a", explanation: "An air bubble in bulk liquid has one spherical interface, so $\\Delta p=\\frac{2S}{R}$. Substituting gives $\\frac{2\\times0.075}{0.0015}=100\\,\\mathrm{Pa}$. The soap-bubble factor four would incorrectly count two interfaces.",
      sectionId: "laplace-pressure", source: { document: "quick-revision", page: 17 }, cognitive: "application"
    },
    {
      id: "note-fluids-006", text: "A thin soap bubble expands from radius $1.0\\,\\mathrm{cm}$ to $2.0\\,\\mathrm{cm}$ at constant surface tension $0.025\\,\\mathrm{N\\,m^{-1}}$. What is the additional surface work, excluding ambient-pressure work?",
      options: [{ key: "a", text: "$0.0942\\,\\mathrm{mJ}$" }, { key: "b", text: "$0.188\\,\\mathrm{mJ}$" }, { key: "c", text: "$0.377\\,\\mathrm{mJ}$" }, { key: "d", text: "$0.754\\,\\mathrm{mJ}$" }],
      answer: "b", explanation: "Both soap-film interfaces grow, so $W=8\\pi S(r_2^2-r_1^2)$. Here $r_2^2-r_1^2=0.0004-0.0001=0.0003\\,\\mathrm{m^2}$. Thus $W=8\\pi(0.025)(0.0003)=1.88496\\times10^{-4}\\,\\mathrm{J}=0.188\\,\\mathrm{mJ}$.",
      sectionId: "surface-work", source: { document: "quick-revision", page: 17 }, cognitive: "application"
    },
    {
      id: "note-fluids-007", text: "What is the excess pressure across a long cylindrical liquid interface of radius $R$ and surface tension $S$, far from its ends?",
      options: [{ key: "a", text: "$\\frac{4S}{R}$" }, { key: "b", text: "$\\frac{2S}{R}$" }, { key: "c", text: "$\\frac{S}{2R}$" }, { key: "d", text: "$\\frac{S}{R}$" }],
      answer: "d", explanation: "The cylindrical interface has curvature $\\frac{1}{R}$ around its circumference and zero curvature along its axis. Young-Laplace therefore gives $\\Delta p=S\\left(\\frac{1}{R}+0\\right)=\\frac{S}{R}$. This is a single interface, not a two-surface soap film.",
      sectionId: "laplace-pressure", source: { document: "quick-revision", page: 18 }, cognitive: "recall"
    },
    {
      id: "note-fluids-008", text: "Two ideal thin soap bubbles of radii $3.0\\,\\mathrm{mm}$ and $4.0\\,\\mathrm{mm}$ merge isothermally with no gas loss in negligible external pressure. If surface tension stays fixed, what is the final radius?",
      options: [{ key: "a", text: "$3.5\\,\\mathrm{mm}$" }, { key: "b", text: "$4.5\\,\\mathrm{mm}$" }, { key: "c", text: "$5.0\\,\\mathrm{mm}$" }, { key: "d", text: "$7.0\\,\\mathrm{mm}$" }],
      answer: "c", explanation: "With negligible external pressure, each absolute bubble pressure is $\\frac{4S}{r}$. Conserved gas amount at fixed temperature is proportional to $pr^3$, hence to $r^2$. Therefore $R=\\sqrt{3^2+4^2}=5.0\\,\\mathrm{mm}$. Isothermal behavior alone would not justify this result at ordinary nonzero ambient pressure.",
      sectionId: "bubble-coalescence", source: { document: "quick-revision", page: 18 }, cognitive: "application"
    },
    {
      id: "note-fluids-009", text: "A steady incompressible flow enters a horizontal low-loss constriction. Area decreases from $4A$ to $A$ and initial mean speed is $3.0\\,\\mathrm{m\\,s^{-1}}$. What happens at the narrow section?",
      options: [{ key: "a", text: "Speed is $12\\,\\mathrm{m\\,s^{-1}}$ and static pressure rises." }, { key: "b", text: "Speed is $0.75\\,\\mathrm{m\\,s^{-1}}$ and static pressure falls." }, { key: "c", text: "Speed is $12\\,\\mathrm{m\\,s^{-1}}$ and static pressure falls." }, { key: "d", text: "Speed is $0.75\\,\\mathrm{m\\,s^{-1}}$ and static pressure rises." }],
      answer: "c", explanation: "Continuity gives $4A\\times3.0=A v_2$, so $v_2=12\\,\\mathrm{m\\,s^{-1}}$. Bernoulli at equal height associates the greater speed with lower static pressure. A change of pipe area does not by itself change the liquid's viscosity.",
      sectionId: "continuity-and-ideal-fluid", source: { document: "quick-revision", page: 18 }, cognitive: "application"
    },
    {
      id: "note-fluids-010", text: "Water of density $1000\\,\\mathrm{kg\\,m^{-3}}$ speeds up from $2.0$ to $6.0\\,\\mathrm{m\\,s^{-1}}$ between two points of a horizontal streamline. Neglect losses. What is the static pressure drop?",
      options: [{ key: "a", text: "$16\\,\\mathrm{kPa}$" }, { key: "b", text: "$8\\,\\mathrm{kPa}$" }, { key: "c", text: "$32\\,\\mathrm{kPa}$" }, { key: "d", text: "$4\\,\\mathrm{kPa}$" }],
      answer: "a", explanation: "At equal height, $p_1-p_2=\\frac{1}{2}\\rho(v_2^2-v_1^2)$. Thus the drop is $\\frac{1}{2}(1000)(36-4)=16{,}000\\,\\mathrm{Pa}=16\\,\\mathrm{kPa}$. Squared speeds, rather than their simple difference, enter the energy balance.",
      sectionId: "bernoulli-and-applications", source: { document: "quick-revision", page: 18 }, cognitive: "application"
    },
    {
      id: "note-fluids-011", text: "A fluid has dynamic viscosity $0.24\\,\\mathrm{Pa\\,s}$. What is this value in poise?",
      options: [{ key: "a", text: "$0.024\\,\\mathrm{P}$" }, { key: "b", text: "$2.4\\,\\mathrm{P}$" }, { key: "c", text: "$24\\,\\mathrm{P}$" }, { key: "d", text: "$0.24\\,\\mathrm{P}$" }],
      answer: "b", explanation: "One pascal-second equals ten poise. Therefore $0.24\\,\\mathrm{Pa\\,s}=0.24\\times10=2.4\\,\\mathrm{P}$. This conversion concerns dynamic viscosity, not kinematic viscosity or surface tension.",
      sectionId: "viscosity-and-flow-regime", source: { document: "quick-revision", page: 18 }, cognitive: "application"
    },
    {
      id: "note-fluids-012", text: "For the same fluid and the same chosen critical Reynolds number, how does critical mean pipe speed change when pipe diameter doubles?",
      options: [{ key: "a", text: "It becomes four times as large." }, { key: "b", text: "It becomes twice as large." }, { key: "c", text: "It remains unchanged." }, { key: "d", text: "It becomes half as large." }],
      answer: "d", explanation: "With $\\mathrm{Re}_c$ fixed, $v_c=\\frac{\\mathrm{Re}_c\\eta}{\\rho D}$. Keeping density and viscosity unchanged makes critical speed inversely proportional to diameter. Doubling $D$ therefore halves $v_c$; the critical criterion itself is an assumption in this comparison.",
      sectionId: "viscosity-and-flow-regime", source: { document: "quick-revision", page: 19 }, cognitive: "understanding"
    },
    {
      id: "note-fluids-013", text: "Which pair of properties defines the elementary ideal-fluid model used in these notes?",
      options: [{ key: "a", text: "Zero density and nonzero viscosity" }, { key: "b", text: "Zero viscosity and zero compressibility" }, { key: "c", text: "Infinite viscosity and finite compressibility" }, { key: "d", text: "Zero bulk modulus and finite viscosity" }],
      answer: "b", explanation: "The elementary ideal fluid is inviscid and incompressible. Zero compressibility means resistance to volume change is ideally infinite, so its bulk modulus is infinite rather than zero. Continuity itself also applies beyond this ideal model.",
      sectionId: "continuity-and-ideal-fluid", source: { document: "quick-revision", page: 18 }, cognitive: "recall"
    },
    {
      id: "note-fluids-014", text: "As temperature rises in ordinary regimes, which pair gives the usual changes of dynamic viscosity for a liquid and a dilute gas?",
      options: [{ key: "a", text: "Liquid increases; gas increases." }, { key: "b", text: "Liquid decreases; gas decreases." }, { key: "c", text: "Liquid decreases; gas increases." }, { key: "d", text: "Liquid increases; gas decreases." }],
      answer: "c", explanation: "Liquid viscosity usually decreases as heating makes molecular rearrangement easier. Dilute-gas viscosity usually increases because faster molecules transport momentum more effectively. These are the source's 'L = Low' and 'G = Great' reminders, with their ordinary-regime condition.",
      sectionId: "viscosity-and-flow-regime", source: { document: "quick-revision", page: 19 }, cognitive: "recall"
    },
    {
      id: "note-fluids-015", text: "In Poiseuille flow, tube radius, tube length and liquid viscosity are all doubled while pressure drop stays fixed. Assuming laminar conditions remain valid, by what factor does volume flow change?",
      options: [{ key: "a", text: "$4$" }, { key: "b", text: "$8$" }, { key: "c", text: "$16$" }, { key: "d", text: "$2$" }],
      answer: "a", explanation: "Poiseuille's law gives $Q\\propto\\frac{r^4}{\\eta\\ell}$ at fixed pressure drop. The factor is $\\frac{2^4}{2\\times2}=4$. The fourth-power radius effect must be combined with both denominator changes.",
      sectionId: "poiseuille-flow", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-016", text: "An ideal liquid issues from a small hole $0.80\\,\\mathrm{m}$ below a large reservoir's free surface. Both surface and outlet are at atmospheric pressure. With $g=10\\,\\mathrm{m\\,s^{-2}}$, what is the exit speed?",
      options: [{ key: "a", text: "$2.0\\,\\mathrm{m\\,s^{-1}}$" }, { key: "b", text: "$8.0\\,\\mathrm{m\\,s^{-1}}$" }, { key: "c", text: "$2.8\\,\\mathrm{m\\,s^{-1}}$" }, { key: "d", text: "$4.0\\,\\mathrm{m\\,s^{-1}}$" }],
      answer: "d", explanation: "Torricelli's theorem gives $v=\\sqrt{2gh}$. Therefore $v=\\sqrt{2\\times10\\times0.80}=\\sqrt{16}=4.0\\,\\mathrm{m\\,s^{-1}}$. The large reservoir, equal pressure and negligible-loss assumptions allow the simple formula.",
      sectionId: "efflux-and-jet-range", source: { document: "quick-revision", page: 18 }, cognitive: "application"
    },
    {
      id: "note-fluids-017", text: "A tank's free surface is $2.5\\,\\mathrm{m}$ above a landing plane. Water exits horizontally through a small hole $0.50\\,\\mathrm{m}$ below that surface. In the ideal model, what is the horizontal range?",
      options: [{ key: "a", text: "$2.0\\,\\mathrm{m}$" }, { key: "b", text: "$1.4\\,\\mathrm{m}$" }, { key: "c", text: "$1.0\\,\\mathrm{m}$" }, { key: "d", text: "$2.5\\,\\mathrm{m}$" }],
      answer: "a", explanation: "The hole is $2.5-0.5=2.0\\,\\mathrm{m}$ above the plane. Range is $x=2\\sqrt{h(H-h)}=2\\sqrt{0.50\\times2.0}=2.0\\,\\mathrm{m}$. The printed source's square root containing only a factor two would give an incorrect smaller value.",
      sectionId: "efflux-and-jet-range", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-018", text: "A tank's free surface is $3.0\\,\\mathrm{m}$ above a horizontal landing plane. Two small horizontal outlets lie at depths $0.70\\,\\mathrm{m}$ and $2.30\\,\\mathrm{m}$ below the surface. How do their ideal ranges compare?",
      options: [{ key: "a", text: "The shallower outlet has twice the range." }, { key: "b", text: "The deeper outlet has twice the range." }, { key: "c", text: "The deeper outlet has three times the range." }, { key: "d", text: "Both outlets have the same range." }],
      answer: "d", explanation: "Range depends on $h(H-h)$. The two products are $0.70\\times2.30$ and $2.30\\times0.70$, which are equal. The deeper outlet has greater exit speed but less falling time, giving the same horizontal range for complementary depths.",
      sectionId: "efflux-and-jet-range", source: { document: "quick-revision", page: 19 }, cognitive: "understanding"
    },
    {
      id: "note-fluids-019", text: "A rigid sphere of radius $1.0\\,\\mathrm{mm}$ moves at $0.020\\,\\mathrm{m\\,s^{-1}}$ through a liquid of viscosity $0.15\\,\\mathrm{Pa\\,s}$. In the Stokes regime, what drag magnitude acts on it?",
      options: [{ key: "a", text: "$18.8\\,\\mathrm{\\mu N}$" }, { key: "b", text: "$28.3\\,\\mathrm{\\mu N}$" }, { key: "c", text: "$56.5\\,\\mathrm{\\mu N}$" }, { key: "d", text: "$113\\,\\mathrm{\\mu N}$" }],
      answer: "c", explanation: "Stokes drag is $F_d=6\\pi\\eta rv$. Substitution gives $F_d=6\\pi(0.15)(0.0010)(0.020)=5.6549\\times10^{-5}\\,\\mathrm{N}=56.5\\,\\mathrm{\\mu N}$. The force acts opposite relative motion, and the creeping-flow assumption is explicitly supplied.",
      sectionId: "stokes-and-terminal-speed", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-020", text: "A small rigid sphere of radius $0.30\\,\\mathrm{mm}$ is $200\\,\\mathrm{kg\\,m^{-3}}$ denser than its surrounding liquid. With viscosity $0.020\\,\\mathrm{Pa\\,s}$ and $g=10\\,\\mathrm{m\\,s^{-2}}$, what is its Stokes terminal speed?",
      options: [{ key: "a", text: "$1.0\\,\\mathrm{mm\\,s^{-1}}$" }, { key: "b", text: "$2.0\\,\\mathrm{mm\\,s^{-1}}$" }, { key: "c", text: "$4.0\\,\\mathrm{mm\\,s^{-1}}$" }, { key: "d", text: "$8.0\\,\\mathrm{mm\\,s^{-1}}$" }],
      answer: "b", explanation: "Use $v_t=\\frac{2\\Delta\\rho gr^2}{9\\eta}$. The radius is $3.0\\times10^{-4}\\,\\mathrm{m}$, so $v_t=\\frac{2(200)(10)(9.0\\times10^{-8})}{9(0.020)}=0.0020\\,\\mathrm{m\\,s^{-1}}$. This is $2.0\\,\\mathrm{mm\\,s^{-1}}$ downward, assuming the Stokes regime remains valid.",
      sectionId: "stokes-and-terminal-speed", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-021", text: "Twenty-seven equal incompressible droplets coalesce without mass loss. If the original and merged drops obey the same Stokes-type terminal-speed law, what is the final terminal speed divided by the original?",
      options: [{ key: "a", text: "$3$" }, { key: "b", text: "$27$" }, { key: "c", text: "$81$" }, { key: "d", text: "$9$" }],
      answer: "d", explanation: "Conserved volume makes the new radius $\\sqrt[3]{27}=3$ times the original. Stokes terminal speed is proportional to radius squared, giving $3^2=9$. The condition that the merged drop still obeys the same low-Reynolds-number drag model is essential.",
      sectionId: "stokes-and-terminal-speed", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-022", text: "A nonporous specimen weighs $6.0\\,\\mathrm{N}$ in air and $4.0\\,\\mathrm{N}$ when fully immersed in water. Neglecting air buoyancy, what is its relative density?",
      options: [{ key: "a", text: "$1.5$" }, { key: "b", text: "$3.0$" }, { key: "c", text: "$2.0$" }, { key: "d", text: "$4.0$" }],
      answer: "b", explanation: "The apparent loss of weight is $6.0-4.0=2.0\\,\\mathrm{N}$. Relative density is $\\frac{W_{\\mathrm{air}}}{W_{\\mathrm{air}}-W_{\\mathrm{water}}}=\\frac{6.0}{2.0}=3.0$. Dividing by the remaining apparent weight instead would confuse buoyancy with the scale reading.",
      sectionId: "buoyancy-and-relative-density", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-023", text: "An ideal hydraulic press has input area $3.0\\,\\mathrm{cm^2}$ and output area $60\\,\\mathrm{cm^2}$. With equal piston elevations and an input force of $75\\,\\mathrm{N}$, what output force is produced?",
      options: [{ key: "a", text: "$1500\\,\\mathrm{N}$" }, { key: "b", text: "$375\\,\\mathrm{N}$" }, { key: "c", text: "$75\\,\\mathrm{N}$" }, { key: "d", text: "$3000\\,\\mathrm{N}$" }],
      answer: "a", explanation: "Pascal's law gives $F_2=F_1\\frac{A_2}{A_1}$. Thus $F_2=75\\times\\frac{60}{3.0}=1500\\,\\mathrm{N}$. The larger piston moves a proportionally shorter distance, so the force multiplication does not create extra work.",
      sectionId: "pascal-and-hydraulic-press", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-024", text: "A fully immersed body's volume stays $4.0\\times10^{-4}\\,\\mathrm{m^3}$ while heating lowers the liquid density from $1000$ to $900\\,\\mathrm{kg\\,m^{-3}}$. Taking $g=10\\,\\mathrm{m\\,s^{-2}}$, how does its apparent weight change?",
      options: [{ key: "a", text: "It decreases by $0.40\\,\\mathrm{N}$." }, { key: "b", text: "It increases by $4.0\\,\\mathrm{N}$." }, { key: "c", text: "It increases by $0.40\\,\\mathrm{N}$." }, { key: "d", text: "It decreases by $4.0\\,\\mathrm{N}$." }],
      answer: "c", explanation: "Buoyancy decreases by $(1000-900)(4.0\\times10^{-4})(10)=0.40\\,\\mathrm{N}$. Since true weight is unchanged and apparent weight equals true weight minus buoyancy, the apparent weight increases by $0.40\\,\\mathrm{N}$. Fixed body volume is an explicit condition here.",
      sectionId: "buoyancy-and-relative-density", source: { document: "quick-revision", page: 19 }, cognitive: "application"
    },
    {
      id: "note-fluids-025", text: "Ice of mass $0.24\\,\\mathrm{kg}$ initially floats in a liquid of density $1200\\,\\mathrm{kg\\,m^{-3}}$. It melts to water of density $1000\\,\\mathrm{kg\\,m^{-3}}$. Neglecting thermal and mixing-volume changes, how does the occupied/displaced volume change?",
      options: [{ key: "a", text: "It decreases by $40\\,\\mathrm{cm^3}$." }, { key: "b", text: "It increases by $40\\,\\mathrm{cm^3}$." }, { key: "c", text: "It remains unchanged." }, { key: "d", text: "It increases by $200\\,\\mathrm{cm^3}$." }],
      answer: "b", explanation: "Initially the ice displaces $\\frac{0.24}{1200}=0.00020\\,\\mathrm{m^3}$. The meltwater volume is $\\frac{0.24}{1000}=0.00024\\,\\mathrm{m^3}$. The increase is $0.00004\\,\\mathrm{m^3}=40\\,\\mathrm{cm^3}$, so the liquid level rises.",
      sectionId: "ice-melting-levels", source: { document: "quick-revision", page: 20 }, cognitive: "application"
    },
    {
      id: "note-fluids-026", text: "An ice block containing a small dense metal piece initially floats in fresh water. After the ice melts, the metal sinks. Ignoring temperature and volume-of-mixing effects, what happens to the water level?",
      options: [{ key: "a", text: "It falls because the metal's final displacement is smaller." }, { key: "b", text: "It rises because the metal's final displacement is larger." }, { key: "c", text: "It stays fixed because the ice initially floated." }, { key: "d", text: "It rises because the metal's mass increases on sinking." }],
      answer: "a", explanation: "While the composite floats, the metal's supported weight requires displacement $\\frac{m_m}{\\rho_w}$. After sinking it displaces only $\\frac{m_m}{\\rho_m}$. Since $\\rho_m>\\rho_w$, the latter is smaller, giving a fall in level; the pure ice-to-water part itself produces no level change.",
      sectionId: "ice-melting-levels", source: { document: "quick-revision", page: 20 }, cognitive: "understanding"
    },
    {
      id: "note-fluids-027", text: "A uniform block of density $700\\,\\mathrm{kg\\,m^{-3}}$ floats at rest in water of density $1000\\,\\mathrm{kg\\,m^{-3}}$. Neglect surface tension. What fraction of its volume is immersed?",
      options: [{ key: "a", text: "$0.30$" }, { key: "b", text: "$0.50$" }, { key: "c", text: "$0.70$" }, { key: "d", text: "$1.00$" }],
      answer: "c", explanation: "At floating equilibrium, $\\rho_w gV_{\\mathrm{immersed}}=\\rho_b gV_{\\mathrm{body}}$. Therefore the fraction is $\\frac{700}{1000}=0.70$. Buoyancy equals weight at rest; it is not persistently greater than weight.",
      sectionId: "buoyancy-and-relative-density", source: { document: "quick-revision", page: 20 }, cognitive: "application"
    },
    {
      id: "note-fluids-028", text: "A pressure sensor measures absolute pressure $142\\,\\mathrm{kPa}$ where atmospheric pressure is $98\\,\\mathrm{kPa}$. What is the gauge pressure?",
      options: [{ key: "a", text: "$240\\,\\mathrm{kPa}$" }, { key: "b", text: "$98\\,\\mathrm{kPa}$" }, { key: "c", text: "$-44\\,\\mathrm{kPa}$" }, { key: "d", text: "$44\\,\\mathrm{kPa}$" }],
      answer: "d", explanation: "Gauge pressure is absolute pressure minus the local atmospheric reference. Thus $p_g=142-98=44\\,\\mathrm{kPa}$. It is positive because the measured absolute pressure exceeds the atmosphere's pressure.",
      sectionId: "hydrostatic-pressure", source: { document: "quick-revision", page: 20 }, cognitive: "application"
    },
    {
      id: "note-fluids-029", text: "A vertical rectangular wall is wetted from an open water surface down to $1.6\\,\\mathrm{m}$. Using density $1000\\,\\mathrm{kg\\,m^{-3}}$ and $g=10\\,\\mathrm{m\\,s^{-2}}$, what is the mean gauge pressure over the wetted wall?",
      options: [{ key: "a", text: "$8.0\\,\\mathrm{kPa}$" }, { key: "b", text: "$16\\,\\mathrm{kPa}$" }, { key: "c", text: "$32\\,\\mathrm{kPa}$" }, { key: "d", text: "$4.0\\,\\mathrm{kPa}$" }],
      answer: "a", explanation: "Gauge pressure rises linearly from zero at the surface to $\\rho gh=1000\\times10\\times1.6=16{,}000\\,\\mathrm{Pa}$ at the bottom. For a constant-width wall, the mean is half this value: $8000\\,\\mathrm{Pa}=8.0\\,\\mathrm{kPa}$. A horizontal bottom would experience the full bottom pressure.",
      sectionId: "hydrostatic-pressure", source: { document: "quick-revision", page: 20 }, cognitive: "application"
    },
    {
      id: "note-fluids-030", text: "A bird hovers inside a sealed container resting on a scale. Averaged over wingbeats, the total centre of mass has no vertical acceleration. Compared with the bird resting inside, what is the average scale reading?",
      options: [{ key: "a", text: "Lower by the bird's entire weight" }, { key: "b", text: "The same total weight reading" }, { key: "c", text: "Higher by the bird's entire weight" }, { key: "d", text: "Zero while the bird remains airborne" }],
      answer: "b", explanation: "For the sealed bird-air-container system with no average vertical acceleration, total external vertical force is zero. Momentum given to the enclosed air reaches the container, so the scale supports the same total weight. Instantaneous wingbeat or takeoff fluctuations do not contradict this time-averaged result.",
      sectionId: "balloon-and-cage-examples", source: { document: "quick-revision", page: 20 }, cognitive: "understanding"
    }
  ]
};