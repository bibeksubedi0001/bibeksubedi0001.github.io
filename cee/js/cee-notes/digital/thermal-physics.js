window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["thermal-physics"] = {
  id: "thermal-physics",
  subject: "Physics",
  title: "Heat and thermodynamics",
  sections: [
    {
      id: "ideal-and-real-gases",
      title: "Ideal-gas conditions and internal energy",
      sources: [{ document: "quick-revision", page: 34 }, { document: "quick-revision", page: 40 }],
      html: "<p>A real gas approaches ideal behaviour at low pressure and at temperatures sufficiently high compared with its condensation region. These are the source's paired conditions for an ideal-gas approximation and a constant-volume gas thermometer. Low density reduces intermolecular interactions; high temperature here means well away from liquefaction, not that a thermometer can only measure hot objects.</p><p>For a fixed amount of ideal gas, $PV=nRT$. Use absolute pressure $P$ in Pa, volume $V$ in $\\mathrm{m^3}$, amount $n$ in mol, and absolute temperature $T$ in K. The gas constant is approximately $R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}$. At fixed amount and volume, pressure is proportional to absolute temperature, which is the constant-volume thermometer principle.</p><ul><li>Ideal-gas internal energy depends on temperature alone for fixed amount and composition.</li><li>A real gas can have internal energy depending on both temperature and volume because intermolecular interactions matter.</li><li>For a gas at rest in equilibrium, the vector average molecular velocity is zero. Molecular speeds are not zero; for a fixed gas their characteristic values scale as $\\sqrt{T}$.</li><li>The source's 'only kinetic energy, no potential energy' describes the simple monatomic ideal-gas model with negligible intermolecular potential energy. Polyatomic molecules may also have internal rotational and vibrational energy; ideal behaviour does not erase intramolecular bonds.</li></ul>"
    },
    {
      id: "van-der-waals-and-critical-state",
      title: "Van der Waals gas, Boyle temperature and critical constants",
      sources: [{ document: "quick-revision", page: 34 }],
      html: "<p>Writing molar volume as $v_m$, the van der Waals equation is $\\left(P+\\frac{a}{v_m^2}\\right)(v_m-b)=RT$. For $n$ moles occupying total volume $V$, it becomes $\\left(P+\\frac{an^2}{V^2}\\right)(V-nb)=nRT$. The attraction parameter $a$ has SI units $\\mathrm{Pa\\,m^6\\,mol^{-2}}$ and the excluded-volume parameter $b$ has units $\\mathrm{m^3\\,mol^{-1}}$.</p><p><strong>Source correction:</strong> The printed pressure correction is $\\frac{1}{v^2}$. The required numerator is the material parameter $a$, not the dimensionless number 1. The source's right-hand side $RT$ and critical volume $3b$ refer to the molar-volume form.</p><ul><li><strong>Boyle temperature:</strong> The temperature at which a real gas approximately follows Boyle's law over an appreciable low-pressure range. In the van der Waals model, $T_B=\\frac{a}{Rb}$ and $T_B=\\frac{27}{8}T_c$. This is approximate ideal-like behaviour, not exact ideality at every pressure.</li><li><strong>Critical temperature:</strong> The upper temperature limit for a distinct liquid phase obtainable by compression. Below it, the gas-phase material is commonly called a vapour and can be condensed by sufficient pressure in the appropriate liquid-vapour region. Above it, pressure alone cannot produce a liquid-vapour phase boundary.</li><li>Van der Waals critical temperature: $T_c=\\frac{8a}{27Rb}$.</li><li>Critical pressure: $P_c=\\frac{a}{27b^2}$.</li><li>Critical molar volume: $v_c=3b$; total critical volume for $n$ moles is $3nb$.</li></ul><p>All temperatures in these relations are absolute temperatures. The model's critical constants are not universal exact values for every real gas.</p>"
    },
    {
      id: "molecular-speed-distribution",
      title: "RMS, average and most probable molecular speeds",
      sources: [{ document: "quick-revision", page: 34 }, { document: "quick-revision", page: 35 }],
      html: "<p>For a classical ideal gas in Maxwell equilibrium, let $M$ be molar mass in $\\mathrm{kg\\,mol^{-1}}$ and $m_0$ be mass of one molecule in kg. Then:</p><ul><li>Root-mean-square speed: $v_{\\mathrm{rms}}=\\sqrt{\\frac{3RT}{M}}=\\sqrt{\\frac{3k_BT}{m_0}}$.</li><li>Average speed: $v_{\\mathrm{av}}=\\sqrt{\\frac{8RT}{\\pi M}}$.</li><li>Most probable speed, the speed at the peak of the speed distribution: $v_{\\mathrm{mp}}=\\sqrt{\\frac{2RT}{M}}$.</li></ul><p>Here $k_B$ is Boltzmann's constant in $\\mathrm{J\\,K^{-1}}$ and each speed is in $\\mathrm{m\\,s^{-1}}$. At fixed temperature and molecular species these speeds are independent of pressure. At fixed temperature, lighter molecules move faster. Hydrogen has the greatest RMS speed among the usual stable molecular gases compared in elementary problems because its molar mass is smallest; this is not an unrestricted comparison with every possible particle species.</p><p><strong>Source notation clarification:</strong> Page 35 writes average and most probable speeds using $PV$ divided by a mass. This is consistent only when the denominator is the mass of the same entire gas sample: $v_{\\mathrm{av}}=\\sqrt{\\frac{8PV}{\\pi m_{\\mathrm{gas}}}}$ and $v_{\\mathrm{mp}}=\\sqrt{\\frac{2PV}{m_{\\mathrm{gas}}}}$. Do not insert molar mass with total volume for an arbitrary number of moles.</p><p>The checked ordering is $v_{\\mathrm{rms}}&gt;v_{\\mathrm{av}}&gt;v_{\\mathrm{mp}}$. The source prints the mnemonic <em>R &gt; A &gt; M &gt; A</em>, with a fourth term $V_{\\mathrm{air}}$. That final symbol is not defined on the page. Its intended meaning and the fourth comparison remain unresolved; only the first three terms are used in scored questions.</p>"
    },
    {
      id: "equipartition-and-gas-heat-capacities",
      title: "Molecular energy, degrees of freedom and gas heat capacities",
      sources: [{ document: "quick-revision", page: 35 }],
      html: "<p>The average translational kinetic energy per molecule is $\\frac{3}{2}k_BT$, depending only on absolute temperature and not on the gas species. Thus different gases at the same temperature have the same average translational energy, although their speeds and total molecular energies may differ.</p><p>With $f$ active quadratic energy terms, equipartition gives average energy $\\frac{f}{2}k_BT$ per molecule. The source's values assume classical translation and rotation with vibrational excitation neglected.</p><table><thead><tr><th>Molecule model</th><th>Energy per molecule</th><th>$f$</th></tr></thead><tbody><tr><td>Monatomic</td><td>$\\frac{3}{2}k_BT$</td><td>3</td></tr><tr><td>Rigid diatomic</td><td>$\\frac{5}{2}k_BT$</td><td>5</td></tr><tr><td>Rigid nonlinear polyatomic</td><td>$3k_BT$</td><td>6</td></tr></tbody></table><p><strong>Source clarification:</strong> The 'polyatomic' energy and 'triatomic' heat-capacity ratio on the page require a nonlinear rigid molecule. A linear triatomic molecule has five translational-plus-rotational degrees of freedom in the same approximation. Vibrational activation changes these values. The sentence 'all gases possess the same kinetic energy' is valid for the average translational energy at the same temperature, not for every total-energy entry in the table.</p><p>For molar heat capacities, $C_V=\\frac{fR}{2}$, $C_P-C_V=R$, and $\\gamma=\\frac{C_P}{C_V}=1+\\frac{2}{f}$. Equivalently, $C_V=\\frac{R}{\\gamma-1}$ and $C_P=\\frac{\\gamma R}{\\gamma-1}$. Units of both molar heat capacities are $\\mathrm{J\\,mol^{-1}\\,K^{-1}}$; $\\gamma$ is dimensionless.</p><table><thead><tr><th>Model</th><th>$\\gamma$</th></tr></thead><tbody><tr><td>Monatomic, $f=3$</td><td>$\\frac{5}{3}\\approx1.67$</td></tr><tr><td>Rigid diatomic, $f=5$</td><td>$\\frac{7}{5}=1.40$</td></tr><tr><td>Rigid nonlinear triatomic, $f=6$</td><td>$\\frac{4}{3}\\approx1.33$</td></tr></tbody></table>"
    },
    {
      id: "heat-transfer-modes",
      title: "Conduction, convection and radiation",
      sources: [{ document: "quick-revision", page: 36 }],
      html: "<table><thead><tr><th>Mode</th><th>Physical description</th></tr></thead><tbody><tr><td>Conduction</td><td>Energy transfer through microscopic interactions without bulk flow of the material. Especially important in solids; free electrons carry much heat in metals, and lattice vibrations also contribute.</td></tr><tr><td>Convection</td><td>Heat transfer associated with bulk motion of a liquid or gas. Moving fluid transports mass, momentum and energy.</td></tr><tr><td>Radiation</td><td>Energy carried by electromagnetic waves; no material medium is required. Infrared dominates thermal emission from many ordinary-temperature objects.</td></tr></tbody></table><p>The source labels conduction the slowest and radiation the fastest. Electromagnetic propagation in vacuum occurs at the speed of light, but the actual heat-transfer rate also depends on material, geometry, area, temperatures and surroundings; there is no universal ranking of heat-flow power for arbitrary setups.</p><p><strong>Source corrections:</strong> Conduction's 'neither mass nor momentum transferred' should be read as no required bulk material transport, not the absence of microscopic collision momentum exchange. The claim that convection cannot occur in gravity-free space applies to ordinary buoyancy-driven natural convection; fans and pumps can cause forced convection in microgravity. The radiation statement 'temperature does not change' is not true of an absorbing or emitting body: radiation can heat or cool it. A transparent intervening region need not absorb the radiation, and empty space has no material medium that must first be heated.</p>"
    },
    {
      id: "conduction-and-material-choices",
      title: "Conduction equation, material choices and ideal limits",
      sources: [{ document: "quick-revision", page: 36 }, { document: "quick-revision", page: 37 }],
      html: "<p>For steady one-dimensional conduction through a uniform rod or slab, with constant thermal conductivity $K$, area $A$, length $l$, fixed end temperatures $\\theta_1&gt;\\theta_2$, and negligible lateral losses, $Q=\\frac{KA(\\theta_1-\\theta_2)t}{l}$. Thus $\\dot Q=\\frac{KA\\Delta T}{l}$. Use $K$ in $\\mathrm{W\\,m^{-1}\\,K^{-1}}$, $A$ in $\\mathrm{m^2}$, $l$ in m, time in s, and heat $Q$ in J. Temperature differences have the same numerical value in K and degrees Celsius.</p><p>For fixed $K$ and temperature difference, $\\frac{Q}{t}\\propto\\frac{A}{l}$. For a circular rod this gives $\\frac{Q}{t}\\propto\\frac{r^2}{l}$. Conductivity depends on the material and its temperature; geometry determines conductance, not the intrinsic conductivity. Silver is the standard highest-conductivity example among common metals near room temperature, not among all possible materials.</p><ul><li>$K\\to\\infty$ represents an ideal perfect thermal conductor.</li><li>$K=0$ represents an ideal perfect thermal insulator.</li><li>The source lists low specific heat and high thermal conductivity as desirable for a liquid thermometer substance, giving quick thermal response.</li><li>For a fuse it lists high resistance and low melting point: the intended elementary comparison is a suitably resistive, readily melting fuse element. Its installed resistance must still be small enough for normal circuit operation; resistance also depends on wire dimensions.</li><li>The heading 'Cooling pots' is followed by low specific heat and high thermal conductivity. Those properties suit a vessel intended to exchange heat quickly. They are not the operating explanation of a porous earthen cooling pot, which cools mainly by evaporation.</li></ul>"
    },
    {
      id: "kirchhoff-radiation-law",
      title: "Absorption, emission and reflection: Kirchhoff's law",
      sources: [{ document: "quick-revision", page: 37 }],
      html: "<p>At thermal equilibrium, spectral emissivity equals spectral absorptivity for the same wavelength and direction: $\\varepsilon_\\lambda=\\alpha_\\lambda$. A good absorber is therefore a good emitter under corresponding conditions. A black body is an ideal complete absorber and has the maximum thermal emission at a given temperature.</p><p>For an opaque surface, absorptivity and reflectivity obey $\\alpha_\\lambda+r_\\lambda=1$. Therefore a good absorber is a poor reflector, and an ideal perfect reflector has zero absorptivity and zero emissivity at the specified wavelength. If a body transmits radiation, transmittance must also be included in the energy balance.</p><p><strong>Source correction:</strong> The printed shortcut says absorption is proportional to emission and inversely proportional to reflection. The emission-absorption connection expresses Kirchhoff's law, but the literal reciprocal-reflection formula is incorrect. For an opaque body the relation is a complement, $\\alpha=1-r$, not $\\alpha\\propto\\frac{1}{r}$. The source's Nepali explanation means that a surface which reflects everything neither absorbs nor thermally emits at those wavelengths; the two concluding good-absorber comparisons are retained above.</p>"
    },
    {
      id: "stefan-and-wien-laws",
      title: "Stefan-Boltzmann law, Wien's law and pyrometry",
      sources: [{ document: "quick-revision", page: 37 }, { document: "quick-revision", page: 38 }, { document: "quick-revision", page: 41 }],
      html: "<p>For a black body, emitted power is $P=\\sigma AT^4$. For a grey body of approximately constant emissivity in large isothermal surroundings at $T_0$, net radiative heat loss is $P_{\\mathrm{net}}=\\varepsilon\\sigma A(T^4-T_0^4)$. Here $\\sigma\\approx5.67\\times10^{-8}\\,\\mathrm{W\\,m^{-2}\\,K^{-4}}$, $A$ is emitting area, and every temperature is in K.</p><p>The source associates Stefan's law with a large body-surroundings temperature difference and with determining the Sun's temperature. <strong>Source clarification:</strong> The fourth-power law does not require a large difference. A large difference makes a linear Newton-cooling approximation inadequate. Radiated power and emitting area can be used to infer an effective temperature, including a stellar effective temperature under an appropriate radiation model.</p><p>Wien's displacement law describes the maximum of the black-body spectrum per unit wavelength: $\\lambda_{\\max}T=b_W$, with $b_W\\approx2.898\\times10^{-3}\\,\\mathrm{m\\,K}$. Hence $\\lambda_{\\max}\\propto\\frac{1}{T}$. A hotter star has a shorter-wavelength spectral peak; stellar colour can indicate temperature. The peak of a spectrum per unit frequency is a different maximum and must not be substituted without conversion.</p><p>A pyrometer infers temperature from emitted radiation without requiring contact. The source specifically identifies a total-radiation pyrometer with Stefan's law and very-high-temperature measurements. Real measurements require an emissivity assumption or calibration.</p>"
    },
    {
      id: "newton-cooling-law",
      title: "Newton's cooling law and the finite-interval approximation",
      sources: [{ document: "quick-revision", page: 37 }],
      html: "<p>For a body nearly uniform in temperature, in surroundings held at $T_0$, Newton's cooling law is $-\\frac{dT}{dt}=k_c(T-T_0)$ when the effective heat-transfer coefficient and the body's heat capacity remain approximately constant. The cooling constant $k_c$ has units $\\mathrm{s^{-1}}$. Heat-loss power is $-mc\\frac{dT}{dt}$, not just the temperature-change rate.</p><p>The source's short-interval form is $\\frac{T_1-T_2}{t}\\approx k_c\\left(\\frac{T_1+T_2}{2}-T_0\\right)$. It approximates the mean temperature by the arithmetic average of the start and end temperatures; use it for a sufficiently small cooling interval. The left side is a rate of temperature fall, in K per unit time.</p><p>For radiative cooling with $|T-T_0|$ small compared with $T_0$, expansion of Stefan's law gives $T^4-T_0^4\\approx4T_0^3(T-T_0)$, explaining the source's derivation from Stefan's law. Convective Newton cooling can also be an empirical approximation.</p><p><strong>Source correction:</strong> The cooling method can be used to compare liquid specific heats under controlled conditions, but Newton's law is not restricted to liquids. The source's word 'only' is unjustified. Container heat capacity and equal external cooling conditions matter in such experiments.</p>"
    },
    {
      id: "cooling-comparisons-and-examples",
      title: "Cooling comparisons, the Circus mnemonic and source examples",
      sources: [{ document: "quick-revision", page: 38 }],
      html: "<p>Distinguish heat-loss power from the rate of temperature fall. With other factors fixed, the latter is proportional to exposed area and inversely proportional to heat capacity: $\\left|\\frac{dT}{dt}\\right|=\\frac{P_{\\mathrm{loss}}}{mc}$.</p><ul><li>A perfectly black surface maximizes radiative loss for fixed area, temperature and surroundings. To compare temperature-cooling rates, heat capacities must also be equal.</li><li>The source puts a rough sphere ahead of a smooth sphere. This presumes the rough treatment gives higher effective emissivity under otherwise comparable conditions; roughness alone is not a universal numerical law.</li><li>A hollow sphere cools in temperature faster than a solid sphere of the same material, outer radius and surface condition because it contains less mass. Their initial exterior radiative powers can be the same.</li><li><strong>Source mnemonic: Circus.</strong> Circular plate &gt; cube &gt; sphere. This recalls a thin plate's relatively large exposed area and the sphere's minimum area for a fixed volume. It requires equal material volume or heat capacity, equal surface conditions and a sufficiently thin exposed plate; unspecified shapes cannot be ranked by name alone.</li></ul><p>The source's Kirchhoff examples are daytime heating and nighttime cooling in deserts, Fraunhofer lines in the Sun's spectrum, and a claim about human skin colour. Desert temperature swings also depend strongly on dry ground, thermal storage, atmospheric water vapour and cloud cover; they are not explained by Kirchhoff's law alone. Fraunhofer absorption lines arise when cooler material absorbs particular wavelengths from a hotter background, at wavelengths corresponding to its allowed transitions.</p><p><strong>Source correction:</strong> Visible skin pigmentation does not establish that a person necessarily experiences more heat and more cold. Thermal-infrared emissivity and human heat balance cannot be inferred from that simple colour analogy. That source claim is retained here as a rejected inference, not as a memorized fact or scored answer.</p>"
    },
    {
      id: "isothermal-process",
      title: "Isothermal change and the work convention",
      sources: [{ document: "quick-revision", page: 38 }, { document: "quick-revision", page: 40 }],
      html: "<p>Use the convention $Q=\\Delta U+W$, where heat into the system and work done by the gas are positive. Heat and work are transfers; internal energy is a state function. Only pressure-volume work is assumed in the following process comparisons.</p><p>An isothermal process has constant temperature, $\\Delta T=0$. For fixed ideal gas, internal energy is constant and Boyle's law gives $PV=\\mathrm{constant}$. For reversible or quasi-static isothermal expansion of that gas, $W=nRT\\ln\\left(\\frac{V_2}{V_1}\\right)$, and $Q=W$. Expansion gives positive work; compression gives negative work.</p><p><strong>Source clarification:</strong> The source writes 'log'; the formula without an extra factor requires the natural logarithm. If common logarithms are used, multiply by $\\ln10$. Temperature and expansion ratio determine the work only after the gas amount is fixed. An arbitrary irreversible isothermal process need not have this work, and a real gas need not have constant internal energy merely because its temperature stays constant.</p>"
    },
    {
      id: "adiabatic-process",
      title: "Adiabatic change, reversible relations and entropy",
      sources: [{ document: "quick-revision", page: 38 }, { document: "quick-revision", page: 39 }, { document: "quick-revision", page: 40 }],
      html: "<p>An adiabatic process exchanges no heat: $Q=0$. Insulating walls can achieve this; a rapid change may approximate it when there is too little time for appreciable heat transfer. Sudden change is not the definition, and a rapid irreversible change is not automatically isentropic.</p><p>For a reversible adiabatic process of fixed ideal gas with constant $\\gamma$, the source's three equivalent relations are $PV^\\gamma=\\mathrm{constant}$, $TV^{\\gamma-1}=\\mathrm{constant}$, and $T^\\gamma P^{1-\\gamma}=\\mathrm{constant}$.</p><p>For an adiabatic closed ideal gas with only pressure-volume work, $W=-\\Delta U$. With constant molar $C_V$, $W=nC_V(T_1-T_2)$. For the reversible path this also gives $W=\\frac{P_1V_1-P_2V_2}{\\gamma-1}$. Expansion that does positive work lowers temperature and internal energy; compression raises them.</p><p><strong>Source corrections:</strong> 'Entropy and heat content remain constant' is not the general adiabatic rule. Heat is not a stored content; it is the heat transfer that vanishes. Entropy is constant only for a reversible adiabatic process and increases in an irreversible adiabatic process of an isolated system. The source table's 'work depends on temperature only' means on the initial-to-final temperature difference for fixed amount and heat capacity, not on one temperature without a specified final state. Free expansion is a useful exception to the usual cooling picture: it can have zero work and no ideal-gas temperature change.</p>"
    },
    {
      id: "isobaric-isochoric-and-work-order",
      title: "Isobaric and isochoric processes; interpreting the work ranking",
      sources: [{ document: "quick-revision", page: 38 }, { document: "quick-revision", page: 39 }],
      html: "<table><thead><tr><th>Process</th><th>Fixed ideal-gas relations</th></tr></thead><tbody><tr><td>Isobaric</td><td>Pressure constant, $\\Delta P=0$; Charles's law gives $\\frac{V}{T}=\\mathrm{constant}$. Work is $W=P(V_2-V_1)=nR(T_2-T_1)$.</td></tr><tr><td>Isochoric</td><td>Volume constant, $\\Delta V=0$; Gay-Lussac's pressure law gives $\\frac{P}{T}=\\mathrm{constant}$. Pressure-volume work is zero and $Q=\\Delta U$.</td></tr></tbody></table><p>The source ranking is <em>isobaric &gt; isothermal &gt; adiabatic &gt; isochoric</em> for work. The defensible comparison starts the first three reversible expansions at the same $P_1,V_1$ and ends them at the same larger volume: constant initial pressure gives the greatest area under the pressure-volume curve, the isotherm lies below it, and the reversible adiabat lies below the isotherm. Isochoric work is zero, but an isochoric path cannot reach that same larger volume. There is no unconditional maximum-work ordering for arbitrary paths and endpoints.</p><p>The source's internal-energy sign diagram says positive for isobaric, negative for adiabatic and zero for isothermal. For ideal gas this specifically describes isobaric heating/expansion, adiabatic expansion with positive work, and isothermal change. Isobaric cooling and adiabatic compression reverse the first two signs; process names alone do not fix the sign.</p>"
    },
    {
      id: "pv-slopes-and-bulk-modulus",
      title: "Pressure-volume slopes and process-dependent bulk modulus",
      sources: [{ document: "quick-revision", page: 38 }, { document: "quick-revision", page: 40 }],
      html: "<p>At the same ideal-gas state, the isothermal slope is $\\left(\\frac{dP}{dV}\\right)_T=-\\frac{P}{V}$ and the reversible adiabatic slope is $\\left(\\frac{dP}{dV}\\right)_S=-\\frac{\\gamma P}{V}$. Thus the adiabatic curve is $\\gamma$ times as steep in magnitude. The comparison must be made at the same pressure and volume.</p><p>The source's 'elasticity' means the bulk modulus along a specified process, $B=-V\\frac{dP}{dV}$, with units Pa.</p><table><thead><tr><th>Specified path</th><th>Bulk-modulus expression</th></tr></thead><tbody><tr><td>Isothermal ideal gas</td><td>$B_T=P$</td></tr><tr><td>Reversible adiabatic ideal gas</td><td>$B_S=\\gamma P$</td></tr><tr><td>Isobaric path</td><td>Zero pressure slope; formal path value zero.</td></tr><tr><td>Isochoric path</td><td>Zero volume change; formally infinite path stiffness.</td></tr></tbody></table><p><strong>Source clarification:</strong> The last two entries characterize constraints on the path. They do not mean that a real gas has an intrinsically zero or infinite material bulk modulus independent of thermodynamic conditions.</p>"
    },
    {
      id: "carnot-engine-and-refrigeration",
      title: "Heat engines, refrigerators and the complete Carnot cycle",
      sources: [{ document: "quick-revision", page: 39 }, { document: "quick-revision", page: 40 }],
      html: "<p>A heat engine converts part of absorbed heat into mechanical work and rejects the remainder to a cooler sink. A refrigerator uses supplied work to transfer heat from a colder region to a warmer one. <strong>Source clarification:</strong> Calling a refrigerator merely a work-to-heat converter omits its essential heat-pumping function.</p><p>The Carnot cycle's order, following the source flow diagram, is:</p><ol><li>Reversible isothermal expansion at hot-source temperature $T_1$, absorbing heat $Q_1$.</li><li>Reversible adiabatic expansion, cooling the working substance to sink temperature $T_2$.</li><li>Reversible isothermal compression at $T_2$, rejecting heat of magnitude $Q_2$.</li><li>Reversible adiabatic compression, returning to the initial hot state.</li></ol><p>Take $T_1&gt;T_2&gt;0$ in K, and $Q_1,Q_2$ as positive magnitudes. Work per cycle is $W=Q_1-Q_2$. Efficiency is $\\eta=1-\\frac{Q_2}{Q_1}$ and for Carnot specifically $\\eta=1-\\frac{T_2}{T_1}$. Also $\\frac{Q_1}{Q_2}=\\frac{T_1}{T_2}$. The source memory instruction is to place the smaller sink temperature in the numerator and the larger source temperature in the denominator. Never use Celsius readings in that ratio.</p><ul><li>For 27&deg;C and 127&deg;C, the source rounds temperatures to 300 K and 400 K: $\\eta=1-\\frac{300}{400}=0.25$, or 25%. Using the exact Celsius offset gives approximately 24.99%.</li><li>For ice and steam points at normal atmospheric pressure, the source uses 273 K and 373 K: $\\eta=\\frac{100}{373}\\approx26.81\\%$. With 273.15 K and 373.15 K the result is approximately 26.80%; this is a rounding distinction.</li><li>With the other reservoir fixed, raising source temperature increases efficiency; lowering sink temperature also increases it.</li></ul>"
    },
    {
      id: "thermometer-materials-and-response",
      title: "Thermometer liquids, sensitivity and bulb response",
      sources: [{ document: "quick-revision", page: 36 }, { document: "quick-revision", page: 40 }, { document: "quick-revision", page: 41 }],
      html: "<p>The source compares alcohol, mercury and gas thermometers. Alcohol expands more strongly than mercury, giving a larger column change for the same temperature change in comparable bulb-and-capillary geometries. The page quotes an expansion ratio of about seven; this is a rounded textbook comparison, not a universal material constant for every alcohol and temperature.</p><p>Gas thermometers are described as more sensitive than liquid thermometers because gas properties can change appreciably with temperature. Actual reading sensitivity depends on the selected property, geometry, pressure and calibration. A constant-volume gas thermometer follows pressure, not a changing bulb volume. Its ideal-gas approximation is favoured by low pressure and operation away from liquefaction.</p><p>Mercury was commonly used in liquid thermometers because its relatively high thermal conductivity and low specific heat assist rapid equilibration. These are the two reasons explicitly listed; a rapid response is distinct from how many scale divisions represent a degree.</p><p>The source writes 'thermometer activity proportional to surface area' and says a cylindrical bulb is more sensitive than a spherical bulb. For equal enclosed volume, a sphere has the least surface area, so a suitably shaped cylindrical bulb has more area available for heat exchange. For fixed heat capacity and heat-transfer coefficient, greater area gives a faster response. <strong>Source clarification:</strong> This argument establishes response speed, not automatically greater equilibrium column sensitivity, which also depends on bulb volume, liquid expansion and capillary cross-section. The continuation on page 41 is included in this distinction.</p>"
    },
    {
      id: "thermometer-types",
      title: "Thermometer applications and their physical principles",
      sources: [{ document: "quick-revision", page: 41 }],
      html: "<table><thead><tr><th>Source instrument</th><th>Application and qualification</th></tr></thead><tbody><tr><td>Thermocouple thermometer</td><td>Rapidly changing temperatures, using a small junction with low thermal inertia. Its thermoelectric emf is based on the Seebeck effect.</td></tr><tr><td>'Pyro-heliometer'</td><td>The source links it to the Sun. The intended pyrheliometer measures direct solar irradiance, not solar temperature directly; additional radiation modelling is required to infer an effective solar temperature.</td></tr><tr><td>Helium gas thermometer</td><td>Very low temperatures within its usable gas-temperature range, not a claim that it operates at absolute zero.</td></tr><tr><td>Platinum resistance thermometer</td><td>The source gives temperature inside a motor engine as an application. It measures temperature through calibrated electrical resistance and must remain within its rated operating and response range.</td></tr><tr><td>Total-radiation pyrometer</td><td>Very high temperatures inferred from radiation through the Stefan-Boltzmann relation.</td></tr></tbody></table><p><strong>Source correction:</strong> The sentence 'Resistance thermometer is based on Seebeck effect' confuses two instruments. A resistance thermometer uses resistance versus temperature; a thermocouple uses the Seebeck effect. A solar-radiation sensor should likewise not be called a direct contact thermometer for the Sun.</p>"
    },
    {
      id: "temperature-scales-and-calibration",
      title: "Temperature scales, common readings and faulty thermometers",
      sources: [{ document: "quick-revision", page: 40 }, { document: "quick-revision", page: 41 }],
      html: "<p>For numerical Celsius reading $C$, Fahrenheit reading $F$ and kelvin reading $T_K$, $\\frac{C}{100}=\\frac{F-32}{180}$ and $\\frac{C}{100}=\\frac{T_K-273.15}{100}$. The source rounds 273.15 to 273 in its conversion line; retain the exact offset when precision is needed. Temperature differences satisfy $\\Delta F=\\frac{9}{5}\\Delta C$ and $\\Delta T_K=\\Delta C$.</p><ul><li>Celsius and Fahrenheit have the same numerical reading at -40: -40&deg;C = -40&deg;F.</li><li>The source's $R$ scale in its common-reading list is Reaumur, not Rankine. Reaumur reading is $R_{\\mathrm{Re}}=\\frac{4}{5}C$.</li><li>Fahrenheit and Reaumur have the same numerical reading -25.6 at -32&deg;C.</li><li>Celsius and Reaumur both read zero at the ice point.</li><li>Absolute zero is 0 K = -273.15&deg;C.</li><li><strong>Source correction:</strong> The conventional 37&deg;C human-body reference converts to 98.6&deg;F, not the printed 98.4&deg;F. Actual body temperature varies with site, timing and individual; 37&deg;C is a conventional reference, not a fixed value for everyone.</li></ul><p>For two scales linearly calibrated between the same fixed points, equate their fractional positions: $\\frac{x-L_x}{U_x-L_x}=\\frac{y-L_y}{U_y-L_y}$. Here $L$ and $U$ mean lower and upper fixed-point readings. This is the source's memory formula, 'temperature minus lower fixed point, divided by upper minus lower fixed point'. The correct Celsius and Fahrenheit example is $\\frac{C-0}{100-0}=\\frac{F-32}{212-32}$. A faulty thermometer is corrected by using its actual observed fixed-point readings in this same equation; the method assumes a linear response and does not repair arbitrary nonlinear errors.</p>"
    },
    {
      id: "joule-thomson-effect",
      title: "Hydrogen in a Joule-Thomson expansion",
      sources: [{ document: "quick-revision", page: 41 }],
      html: "<p>The source states that hydrogen heats in the Joule-Thomson effect. This refers to throttling near ordinary room temperature, where hydrogen is above its inversion-temperature range for cooling under the relevant conditions. During an ideal steady throttling process, with negligible changes in bulk kinetic and potential energy and no external heat or shaft work, enthalpy stays constant.</p><p><strong>Source clarification:</strong> Heating is not a universal result for hydrogen at every starting state. Sufficiently precooled hydrogen can cool on throttling. An ideal gas has no Joule-Thomson temperature change because its enthalpy depends only on temperature. Throttling should not be confused with reversible adiabatic expansion doing external work. The effect is named Joule-Thomson, rather than the source's spelling 'Thompson'.</p>"
    },
    {
      id: "thermal-expansion-coefficients",
      title: "Linear, area and volume expansion",
      sources: [{ document: "quick-revision", page: 41 }, { document: "quick-revision", page: 42 }],
      html: "<p>For a freely expanding isotropic material with a small uniform temperature change and approximately constant coefficients, $\\frac{\\Delta l}{l}=\\alpha\\Delta T$, $\\frac{\\Delta A}{A}\\approx2\\alpha\\Delta T$, and $\\frac{\\Delta V}{V}\\approx3\\alpha\\Delta T$. The source denotes the linear, area and volume coefficients by $\\alpha,\\beta,\\gamma$ and gives $\\alpha:\\beta:\\gamma=1:2:3$. All three coefficients have units $\\mathrm{K^{-1}}$.</p><p>The greatest percentage change is the volume change, then area, then length, for the same material and temperature change. These first-order relations assume isotropy and small strains. The volume-expansion symbol $\\gamma$ here is unrelated to the gas heat-capacity ratio $\\frac{C_P}{C_V}$; write it as $\\gamma_V$ when both appear together.</p>"
    },
    {
      id: "pendulum-clock-temperature",
      title: "Thermal expansion of a pendulum clock",
      sources: [{ document: "quick-revision", page: 41 }],
      html: "<p>For a small-angle simple pendulum at fixed gravitational acceleration, period is $\\tau=2\\pi\\sqrt{\\frac{l}{g}}$, so $\\tau\\propto l^{\\frac{1}{2}}$. Length is in m, $g$ in $\\mathrm{m\\,s^{-2}}$, and period in s.</p><table><thead><tr><th>Heating an ordinary rod</th><th>Cooling an ordinary rod</th></tr></thead><tbody><tr><td>Length increases.</td><td>Length decreases.</td></tr><tr><td>Period increases; each swing takes longer.</td><td>Period decreases; each swing takes less time.</td></tr><tr><td>Clock runs slower and loses time.</td><td>Clock runs faster and gains time.</td></tr></tbody></table><p>For small expansion, $\\frac{\\Delta\\tau}{\\tau}\\approx\\frac{1}{2}\\alpha\\Delta T$. A clock calibrated at the initial temperature loses approximately $\\frac{1}{2}\\alpha\\Delta T$ times the elapsed real time after heating, with a corresponding gain for cooling. The source comparison assumes an uncompensated pendulum and unchanged $g$.</p>"
    },
    {
      id: "liquid-expansion-and-buoyancy",
      title: "Liquid expansion, apparent weight and everyday examples",
      sources: [{ document: "quick-revision", page: 42 }],
      html: "<p>For a fixed mass of an ordinary liquid away from anomalous regions, heating at approximately constant pressure increases volume and decreases density. A fully submerged solid of nearly unchanged displaced volume then experiences a smaller buoyant force, so its apparent weight increases.</p><p><strong>Source correction:</strong> The page puts $W=Vdg$ beside apparent weight. This expression is the buoyant force when $d$ is liquid density: $F_b=\\rho_{\\mathrm{liq}}V_{\\mathrm{disp}}g$. Apparent weight is instead $W_{\\mathrm{app}}=mg-F_b$. If both solid and liquid expand substantially, compare the change of the product $\\rho_{\\mathrm{liq}}V_{\\mathrm{disp}}$ before asserting a direction.</p><ul><li>A metal floating in mercury commonly becomes more submerged on heating because mercury's volume expansion exceeds that of the metal. 'Lower level' means greater immersion relative to the liquid surface, not necessarily a fall relative to the room.</li><li>When a mercury-containing vessel is heated from outside, the column can first descend because the vessel expands before the mercury warms, then ascend when mercury expansion dominates.</li><li>The same measured volume of benzene has greater mass and weight in colder winter conditions than in warmer summer conditions, assuming it remains liquid and other conditions are comparable. Its density is higher at the lower temperature.</li></ul>"
    },
    {
      id: "water-anomaly-and-heat-capacity-correction",
      title: "Water from zero to four degrees and the heat-capacity correction",
      sources: [{ document: "quick-revision", page: 42 }],
      html: "<p>Near ordinary atmospheric pressure, liquid water contracts when heated from 0&deg;C to about 4&deg;C. At about 4&deg;C its density is maximum and, for fixed mass, its volume is minimum. Heating above this temperature or cooling below it initially increases volume. These statements reproduce all branches of the source's water diagram.</p><p>A vessel filled to the brim at the minimum-volume temperature can therefore overflow on either heating or cooling if vessel-volume change is neglected. For a real vessel, compare the water's expansion with the vessel's change in capacity; the simplified overflow rule is not unconditional.</p><p><strong>Source correction:</strong> The claim $C_P&lt;C_V$ for water heated from 0 to 4&deg;C is incorrect for a stable equilibrium material at the same state. With total heat capacities, $C_P-C_V=\\frac{TV\\alpha_V^2}{\\kappa_T}\\geq0$, where $\\alpha_V$ is the volumetric expansion coefficient and $\\kappa_T$ is positive isothermal compressibility. The squared coefficient means negative expansion does not reverse the inequality. At the density maximum, where the coefficient vanishes, the difference tends to zero. The source's usual $C_P&gt;C_V$ rule needs this equality limit, not an anomalous-water reversal.</p>"
    },
    {
      id: "bimetal-holes-and-spheres",
      title: "Bimetal strips, holes, cavities and hollow-sphere comparisons",
      sources: [{ document: "quick-revision", page: 42 }],
      html: "<p>A bonded bimetal strip with different positive linear-expansion coefficients bends toward the smaller-coefficient side when heated: the larger-expansion side becomes the longer outer arc. When cooled from the straight reference state, it bends toward the larger-coefficient side because that side contracts more.</p><ul><li>A uniformly heated, unconstrained metal disc with a hole develops a larger hole. Imagine the missing material expanding with the rest of the disc; the boundary moves outward.</li><li>A solid sphere containing a concentric spherical cavity develops a larger cavity when uniformly and freely heated.</li></ul><table><thead><tr><th>Two spheres of the same material and outer size</th><th>Result</th></tr></thead><tbody><tr><td>Same initial temperature and same temperature rise</td><td>Equal outer-diameter expansion, whether hollow or solid.</td></tr><tr><td>Same initial temperature and same absorbed heat</td><td>The hollow sphere has smaller heat capacity, a greater temperature rise, and greater outer expansion.</td></tr></tbody></table><p>The source's 'same temperature' means the same temperature change from matching initial states; equal final temperatures alone are insufficient if initial states differ. The equal-heat result assumes negligible losses, equal specific heat and no phase change. It is consistent with the page-38 hollow-sphere cooling comparison.</p>"
    },
    {
      id: "latent-heats-and-phase-energy",
      title: "Latent heat of fusion and vaporization; where the heat goes",
      sources: [{ document: "quick-revision", page: 42 }, { document: "quick-revision", page: 43 }],
      html: "<p>Specific latent heat is the heat transfer per unit mass during a phase change at the stated equilibrium temperature and pressure. The magnitude is $Q=mL$. Fusion changes solid to liquid; vaporization changes liquid to vapour. Freezing and condensation release the corresponding heat instead of absorbing it.</p><table><thead><tr><th>Water phase change</th><th>Source value</th></tr></thead><tbody><tr><td>Ice fusion near 0&deg;C</td><td>About $80\\,\\mathrm{cal\\,g^{-1}}$, quoted as $3.36\\times10^5\\,\\mathrm{J\\,kg^{-1}}$.</td></tr><tr><td>Water vaporization near 100&deg;C at 1 atm</td><td>About $540\\,\\mathrm{cal\\,g^{-1}}$, or $2.26\\times10^6\\,\\mathrm{J\\,kg^{-1}}$.</td></tr></tbody></table><p>The fusion SI value uses the source's rounded $1\\,\\mathrm{cal}\\approx4.2\\,\\mathrm{J}$ conversion; modern tabulations are commonly near $3.34\\times10^5\\,\\mathrm{J\\,kg^{-1}}$. Use a stated consistent value within a calculation, not both rounded conventions as exact identities. The vaporization and fusion numbers apply to water, not to every substance.</p><p>During a pure-substance equilibrium phase change at fixed pressure, temperature remains constant. In the elementary molecular account, the thermal kinetic-energy scale remains unchanged while intermolecular potential energy changes. During vaporization, some supplied heat also does work against external pressure; $mL=\\Delta U+P\\Delta V$ for constant pressure and only volume work.</p><p><strong>Source clarification:</strong> The list 'heat increases internal potential energy, does external work, and leaves kinetic energy constant' refers here to vaporization at constant temperature, not to every act of heating. The definitions' 'or vice versa' require changing the direction of heat flow for the reverse transition.</p>"
    },
    {
      id: "pressure-impurities-and-regelation",
      title: "Melting, boiling, impurities and regelation",
      sources: [{ document: "quick-revision", page: 43 }],
      html: "<ul><li>For ordinary ice near its usual melting point, increasing pressure lowers the melting temperature because liquid water occupies less volume than ice. The source memory image is ice melting when pressure is applied above it.</li><li>For a substance that expands on melting, increasing pressure raises its equilibrium melting temperature. The source lists glass, ghee and wax. <strong>Source clarification:</strong> Glass is amorphous and softens over a range; ghee and common waxes are mixtures with melting ranges. They should not be assigned one universal sharp melting point. The reliable pressure rule follows the sign of the volume change.</li><li>Soluble impurities commonly depress a solvent's freezing point. This refers to the usual solution conditions, not every arbitrary reactive mixture.</li><li>Along an ordinary liquid-vapour coexistence curve below the critical point, increasing external pressure increases boiling temperature.</li><li>A dissolved nonvolatile solute raises the solvent's boiling point in the usual dilute-solution treatment. The source's broader phrase 'soluble impurities' must not include every volatile solute without qualification.</li></ul><p><strong>Regelation:</strong> Pressure lowers the melting point of ice, allowing melting under suitable thermal conditions; after pressure is removed, the water can refreeze. Latent heat still has to be supplied or removed. Pressure does not by itself replace the required heat transfer.</p><ul><li>Water can boil above 100&deg;C in a mine when the local pressure exceeds one standard atmosphere. Depth alone, especially at a high-altitude location, is not a sufficient pressure specification.</li><li>Steam at the same initial temperature can transfer more heat than the same mass of hot liquid water because condensation releases latent heat before the resulting water cools.</li><li>The latent heat of saturated steam decreases as saturation pressure and temperature rise toward the critical point, where the liquid-vapour distinction disappears.</li></ul>"
    },
    {
      id: "specific-heat-values",
      title: "Specific heats, coolant use and the incomplete steam entry",
      sources: [{ document: "quick-revision", page: 43 }],
      html: "<p>Specific heat capacity is heat required per unit mass per unit temperature rise for a specified process without phase change: $Q=mc\\Delta T$ when $c$ is approximately constant. SI units are $\\mathrm{J\\,kg^{-1}\\,K^{-1}}$. The source's unlabelled numerical list uses the customary calorie-per-gram-per-degree scale.</p><table><thead><tr><th>Material</th><th>Rounded source value in $\\mathrm{cal\\,g^{-1}\\,K^{-1}}$</th></tr></thead><tbody><tr><td>Ice near its melting region</td><td>0.5</td></tr><tr><td>Liquid water</td><td>1</td></tr><tr><td>Hydrogen gas at constant pressure near ordinary temperature</td><td>About 3.5</td></tr></tbody></table><p>Water has a large mass-specific heat compared with many common solids and liquids, which makes it a useful coolant. Hydrogen has a very large mass-specific heat among common gases. <strong>Source clarification:</strong> The page calls these values the 'highest' or 'maximum'; those are elementary comparison rules, not universal statements over all substances, temperatures and processes. Mass-specific and molar heat capacities must not be interchanged.</p><p>The source also lists 'Water vapor: (negative)' without stating a thermodynamic path. Ordinary stable steam has positive constant-pressure and constant-volume heat capacities. A path-dependent heat-to-temperature ratio can be negative in some specially constrained processes, but the intended process is not defined here. This entry is explicitly unresolved and is not used as a scored fact.</p>"
    },
    {
      id: "humidity-and-hygrometers",
      title: "Relative humidity, dew point and wet-and-dry-bulb measurements",
      sources: [{ document: "quick-revision", page: 44 }],
      html: "<p>Relative humidity compares actual water-vapour partial pressure $e$ with the saturation vapour pressure $e_s(T)$ at the current air temperature: $\\mathrm{RH}=100\\frac{e}{e_s(T)}\\%$. If $T_d$ is the dew point, $e=e_s(T_d)$, giving the source formula $\\mathrm{RH}=100\\frac{e_s(T_d)}{e_s(T)}\\%$. Numerator and denominator must use the same pressure units.</p><ul><li>Dry air has low relative humidity and moist air high relative humidity at the specified air temperature.</li><li>When air temperature rises at unchanged actual vapour pressure, saturation vapour pressure rises and RH falls.</li><li>When air temperature equals dew point, actual vapour pressure equals saturation vapour pressure and RH is 100%.</li><li>At the dew point, the actual vapour pressure equals the saturation pressure at that dew-point temperature.</li><li>Evaporation of sprinkled water into an unsaturated room can increase vapour content, RH and dew point, assuming comparable temperature and no compensating ventilation loss.</li><li>The source quotes 60%-65% RH as a comfortable range. This is its stated exam-guide convention, not a universal comfort or health standard; temperature, air movement and other conditions also matter.</li><li>Dew point remains unchanged when room temperature changes only if actual water-vapour pressure remains unchanged. It can change if vapour is added, removed or compressed; warming a sealed fixed-volume gas does not automatically satisfy that assumption.</li></ul><p>The statement 'saturated vapour pressure does not obey gas laws whereas unsaturated vapour does' refers to phase equilibrium: with liquid present, condensation or evaporation adjusts the amount of vapour, so fixed-amount Boyle-law reasoning is inappropriate. Unsaturated dilute vapour can often be treated as an ideal gas. Saturation does not suspend the underlying equations of state.</p><p>A wet-and-dry-bulb hygrometer relates the two thermometer readings to RH. Evaporation cools the wet bulb. At a given dry-bulb temperature and pressure, higher RH produces less evaporative cooling and a smaller wet-minus-dry temperature difference in magnitude. At saturation the readings coincide in an ideal correctly ventilated instrument.</p>"
    },
    {
      id: "boundary-page-cathode-and-positive-rays",
      title: "Page-boundary continuation: cathode rays, positive rays and electric deflection",
      sources: [{ document: "quick-revision", page: 44 }],
      html: "<p>The lower part of assigned page 44 begins the Modern Physics heading. Its material is retained here so the page is fully transcribed rather than losing the content at a catalogue boundary.</p><table><thead><tr><th>Ray type</th><th>Source facts</th></tr></thead><tbody><tr><td>Cathode rays</td><td>Streams of fast-moving electrons. J. J. Thomson determined their specific charge, meaning charge-to-mass ratio. They can be deflected by electric and magnetic fields.</td></tr><tr><td>Positive or canal rays</td><td>Discovered by Goldstein; streams of positive ions. They can also be deflected by electric and magnetic fields.</td></tr></tbody></table><p><strong>Source clarification:</strong> The printed 'Thompson' in the specific-charge attribution is Thomson. Magnetic deflection requires a velocity component transverse to the magnetic field. The source ranks positive-ray ionization above cathode-ray ionization; that is a qualitative comparison for comparable conventional tube conditions, not a universal ranking independent of particle energy, charge and medium.</p><p>The electric-field memory aid begins <em>PEA</em>. Its first letter P means <em>parabolic</em>: in a uniform electric field, a nonrelativistic charged particle with an initial transverse velocity component follows a parabolic trajectory. If initial velocity is along or opposite the field, at 0&deg; or 180&deg;, motion is along a straight line. The remaining letters continue beyond this page in the modern-physics source range.</p>"
    }
  ],
  pageCoverage: [
    { document: "quick-revision", page: 34, status: "transcribed", sectionIds: ["ideal-and-real-gases", "van-der-waals-and-critical-state", "molecular-speed-distribution"], unresolved: [] },
    { document: "quick-revision", page: 35, status: "partial", sectionIds: ["molecular-speed-distribution", "equipartition-and-gas-heat-capacities"], unresolved: ["The last term V_air in the printed R > A > M > A speed ordering is not defined; the intended fourth speed and comparison cannot be established from this page."] },
    { document: "quick-revision", page: 36, status: "transcribed", sectionIds: ["heat-transfer-modes", "conduction-and-material-choices", "thermometer-materials-and-response"], unresolved: [] },
    { document: "quick-revision", page: 37, status: "transcribed", sectionIds: ["conduction-and-material-choices", "kirchhoff-radiation-law", "stefan-and-wien-laws", "newton-cooling-law"], unresolved: [] },
    { document: "quick-revision", page: 38, status: "transcribed", sectionIds: ["stefan-and-wien-laws", "cooling-comparisons-and-examples", "isothermal-process", "adiabatic-process", "isobaric-isochoric-and-work-order", "pv-slopes-and-bulk-modulus"], unresolved: [] },
    { document: "quick-revision", page: 39, status: "transcribed", sectionIds: ["adiabatic-process", "isobaric-isochoric-and-work-order", "carnot-engine-and-refrigeration"], unresolved: [] },
    { document: "quick-revision", page: 40, status: "transcribed", sectionIds: ["ideal-and-real-gases", "isothermal-process", "adiabatic-process", "pv-slopes-and-bulk-modulus", "carnot-engine-and-refrigeration", "thermometer-materials-and-response", "temperature-scales-and-calibration"], unresolved: [] },
    { document: "quick-revision", page: 41, status: "transcribed", sectionIds: ["stefan-and-wien-laws", "thermometer-materials-and-response", "thermometer-types", "temperature-scales-and-calibration", "joule-thomson-effect", "thermal-expansion-coefficients", "pendulum-clock-temperature"], unresolved: [] },
    { document: "quick-revision", page: 42, status: "transcribed", sectionIds: ["thermal-expansion-coefficients", "liquid-expansion-and-buoyancy", "water-anomaly-and-heat-capacity-correction", "bimetal-holes-and-spheres", "latent-heats-and-phase-energy"], unresolved: [] },
    { document: "quick-revision", page: 43, status: "partial", sectionIds: ["latent-heats-and-phase-energy", "pressure-impurities-and-regelation", "specific-heat-values"], unresolved: ["The entry 'Water vapor: (negative)' supplies no process or constraint defining its heat capacity. Ordinary c_P and c_V are not negative; the intended path-specific quantity remains unspecified."] },
    { document: "quick-revision", page: 44, status: "transcribed", sectionIds: ["humidity-and-hygrometers", "boundary-page-cathode-and-positive-rays"], unresolved: [] }
  ],
  questions: [
    {
      id: "note-thermal-physics-001", text: "Two equilibrium states of the same fixed amount of ideal gas have equal temperature but different volumes. What follows about their internal energies?",
      options: [{ key: "a", text: "The larger-volume state must have greater internal energy." }, { key: "b", text: "The internal energies are equal in the ideal-gas model." }, { key: "c", text: "The smaller-volume state must have greater internal energy." }, { key: "d", text: "The internal-energy ratio equals the volume ratio." }],
      answer: "b", explanation: "For a fixed amount and composition of ideal gas, internal energy depends only on temperature. Volume dependence can occur for a real gas through intermolecular interactions, but is absent in this model.",
      sectionId: "ideal-and-real-gases", source: { document: "quick-revision", page: 34 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-002", text: "For molar volume $v_m$, which pressure term belongs in the van der Waals expression multiplied by $(v_m-b)$?",
      options: [{ key: "a", text: "$P+\\frac{b}{v_m^2}$" }, { key: "b", text: "$P+av_m^2$" }, { key: "c", text: "$P-\\frac{a}{v_m^2}$" }, { key: "d", text: "$P+\\frac{a}{v_m^2}$" }],
      answer: "d", explanation: "The pressure correction is positive a divided by the square of molar volume. It accounts for the pressure reduction caused by molecular attractions; the source's numerator 1 omits the required material parameter.",
      sectionId: "van-der-waals-and-critical-state", source: { document: "quick-revision", page: 34 }, cognitive: "recall"
    },
    {
      id: "note-thermal-physics-003", text: "A van der Waals model predicts a critical temperature of 240 K. What Boyle temperature does the same model predict?",
      options: [{ key: "a", text: "810 K" }, { key: "b", text: "640 K" }, { key: "c", text: "320 K" }, { key: "d", text: "71.1 K" }],
      answer: "a", explanation: "The model gives $T_B=\\frac{27}{8}T_c$. Therefore $T_B=\\frac{27}{8}(240)=810$ K. Reversing the factor gives about 71.1 K and is inconsistent with the two critical-constant formulas.",
      sectionId: "van-der-waals-and-critical-state", source: { document: "quick-revision", page: 34 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-004", text: "Estimate the RMS speed of ideal helium at 300 K using molar mass 0.004 kg per mole and $R=8.31$ J per mole per kelvin.",
      options: [{ key: "a", text: "790 m/s" }, { key: "b", text: "970 m/s" }, { key: "c", text: "1370 m/s" }, { key: "d", text: "2370 m/s" }],
      answer: "c", explanation: "Use $v_{\\mathrm{rms}}=\\sqrt{\\frac{3RT}{M}}$. The quantity inside the square root is $\\frac{3(8.31)(300)}{0.004}=1869750$ square metres per square second, giving about 1367 m/s, rounded to 1370 m/s.",
      sectionId: "molecular-speed-distribution", source: { document: "quick-revision", page: 34 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-005", text: "Which ordering is valid for RMS, mean and most probable speeds of one Maxwell-distributed gas?",
      options: [{ key: "a", text: "Mean > RMS > most probable" }, { key: "b", text: "RMS > mean > most probable" }, { key: "c", text: "Most probable > mean > RMS" }, { key: "d", text: "RMS > most probable > mean" }],
      answer: "b", explanation: "The respective factors multiplying $\\sqrt{\\frac{RT}{M}}$ are $\\sqrt{3}$, $\\sqrt{\\frac{8}{\\pi}}$ and $\\sqrt{2}$, so RMS exceeds mean, which exceeds most probable. No undefined fourth speed is required.",
      sectionId: "molecular-speed-distribution", source: { document: "quick-revision", page: 35 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-006", text: "Helium and nitrogen are at the same absolute temperature. Which per-molecule energy is necessarily equal in the classical ideal-gas description?",
      options: [{ key: "a", text: "Average translational kinetic energy." }, { key: "b", text: "Total translational-plus-rotational energy." }, { key: "c", text: "Average rotational kinetic energy alone." }, { key: "d", text: "Energy stored in molecular vibration alone." }],
      answer: "a", explanation: "Average translational energy is $\\frac{3}{2}k_BT$ for either species. Nitrogen can also store rotational energy, so equal temperature does not imply equal total energy per molecule.",
      sectionId: "equipartition-and-gas-heat-capacities", source: { document: "quick-revision", page: 35 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-007", text: "A rigid diatomic ideal gas has five active degrees of freedom. What is its molar heat capacity at constant pressure?",
      options: [{ key: "a", text: "$\\frac{3}{2}R$" }, { key: "b", text: "$\\frac{5}{2}R$" }, { key: "c", text: "$3R$" }, { key: "d", text: "$\\frac{7}{2}R$" }],
      answer: "d", explanation: "Five active degrees give $C_V=\\frac{5}{2}R$. Mayer's relation for an ideal gas gives $C_P=C_V+R=\\frac{7}{2}R$. Vibrational excitation is excluded by the rigid-molecule assumption.",
      sectionId: "equipartition-and-gas-heat-capacities", source: { document: "quick-revision", page: 35 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-008", text: "A rod has thermal conductivity 200 W per metre per kelvin, area 0.0002 square metres and length 0.5 m. With a steady 50 K end-temperature difference and no side loss, what heat rate flows?",
      options: [{ key: "a", text: "1 W" }, { key: "b", text: "2 W" }, { key: "c", text: "4 W" }, { key: "d", text: "8 W" }],
      answer: "c", explanation: "Steady conduction gives $\\dot Q=\\frac{KA\\Delta T}{l}$. Substitution gives $\\frac{200(0.0002)(50)}{0.5}=4$ W. The area must be in square metres, not inserted as a radius.",
      sectionId: "conduction-and-material-choices", source: { document: "quick-revision", page: 36 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-009", text: "Two circular rods have the same material and end temperatures. The second has twice the radius and twice the length of the first. What is its steady heat rate divided by the first rod's rate?",
      options: [{ key: "a", text: "2" }, { key: "b", text: "1" }, { key: "c", text: "4" }, { key: "d", text: "8" }],
      answer: "a", explanation: "For fixed conductivity and temperature difference, rate is proportional to radius squared divided by length. The ratio is $\\frac{2^2}{2}=2$, not 1: doubling radius quadruples the area.",
      sectionId: "conduction-and-material-choices", source: { document: "quick-revision", page: 37 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-010", text: "Which statement correctly qualifies the source's claim that convection cannot occur without gravity?",
      options: [{ key: "a", text: "A fan cannot move air when gravity is absent." }, { key: "b", text: "Radiation becomes impossible in microgravity." }, { key: "c", text: "Forced fluid motion can still carry heat in microgravity." }, { key: "d", text: "Conduction requires buoyancy just as convection does." }],
      answer: "c", explanation: "Ordinary natural convection is driven by buoyancy, which depends on gravity. A pump or fan can produce forced convection without that buoyancy mechanism, so the unqualified source statement is too broad.",
      sectionId: "heat-transfer-modes", source: { document: "quick-revision", page: 36 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-011", text: "An opaque surface reflects 30% of incident radiation at a particular wavelength. At thermal equilibrium, what is its emissivity at that wavelength?",
      options: [{ key: "a", text: "0.30" }, { key: "b", text: "0.70" }, { key: "c", text: "1.30" }, { key: "d", text: "3.33" }],
      answer: "b", explanation: "An opaque surface transmits none, so absorptivity is $1-0.30=0.70$. Kirchhoff's law equates emissivity and absorptivity at the specified wavelength and equilibrium conditions.",
      sectionId: "kirchhoff-radiation-law", source: { document: "quick-revision", page: 37 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-012", text: "A black body's absolute temperature doubles while its emitting area stays fixed. By what factor does its total emitted power increase?",
      options: [{ key: "a", text: "2" }, { key: "b", text: "4" }, { key: "c", text: "8" }, { key: "d", text: "16" }],
      answer: "d", explanation: "Emitted power follows $P=\\sigma AT^4$, so doubling kelvin temperature multiplies it by $2^4=16$. This is emitted power, not net exchange with surroundings at an unspecified temperature.",
      sectionId: "stefan-and-wien-laws", source: { document: "quick-revision", page: 37 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-013", text: "A black-body spectrum per unit wavelength peaks at 580 nm. Using a Wien constant of 0.00290 metre-kelvin, estimate its temperature.",
      options: [{ key: "a", text: "2500 K" }, { key: "b", text: "4000 K" }, { key: "c", text: "5000 K" }, { key: "d", text: "7500 K" }],
      answer: "c", explanation: "Convert 580 nm to $580\\times10^{-9}$ m. Wien's law gives $T=\\frac{0.00290}{580\\times10^{-9}}=5000$ K. The specified wavelength-spectrum peak is essential to using this constant.",
      sectionId: "stefan-and-wien-laws", source: { document: "quick-revision", page: 37 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-014", text: "An object obeys Newton cooling in a room at 20 degrees Celsius. Its instantaneous cooling rate at 70 degrees Celsius is 4 K per minute. What is the rate at 45 degrees Celsius under the same conditions?",
      options: [{ key: "a", text: "0.5 K/min" }, { key: "b", text: "1.0 K/min" }, { key: "c", text: "1.5 K/min" }, { key: "d", text: "2.0 K/min" }],
      answer: "d", explanation: "The temperature excess falls from $70-20=50$ K to $45-20=25$ K. With unchanged cooling constant, the rate halves: $4\\times\\frac{25}{50}=2$ K per minute.",
      sectionId: "newton-cooling-law", source: { document: "quick-revision", page: 37 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-015", text: "A hollow and a solid sphere share material, outer radius, surface finish and initial temperature. Why can the hollow sphere initially fall in temperature faster?",
      options: [{ key: "a", text: "It has less thermal capacity for comparable exterior heat loss." }, { key: "b", text: "It must emit more power solely because its centre is empty." }, { key: "c", text: "It has a larger external area despite the equal outer radius." }, { key: "d", text: "Its specific heat is necessarily zero because it is hollow." }],
      answer: "a", explanation: "Equal exterior conditions can give equal initial heat-loss power. The hollow sphere contains less mass, so dividing that power by its smaller mass times specific heat gives a greater temperature-fall rate.",
      sectionId: "cooling-comparisons-and-examples", source: { document: "quick-revision", page: 38 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-016", text: "One mole of ideal gas expands reversibly and isothermally at 300 K to twice its initial volume. With $R=8.31$ J per mole per kelvin and $\\ln2=0.693$, what work is done by the gas?",
      options: [{ key: "a", text: "0.86 kJ" }, { key: "b", text: "1.73 kJ" }, { key: "c", text: "2.49 kJ" }, { key: "d", text: "3.46 kJ" }],
      answer: "b", explanation: "Reversible isothermal work is $nRT\\ln\\left(\\frac{V_2}{V_1}\\right)$. Here $1(8.31)(300)(0.693)=1727.649$ J, approximately 1.73 kJ. Work is positive because the gas expands.",
      sectionId: "isothermal-process", source: { document: "quick-revision", page: 38 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-017", text: "An insulated closed gas does 125 J of pressure-volume work during expansion, with no other work or energy transfers. What is its internal-energy change?",
      options: [{ key: "a", text: "+250 J" }, { key: "b", text: "+125 J" }, { key: "c", text: "0 J" }, { key: "d", text: "-125 J" }],
      answer: "d", explanation: "With heat into the system and work by the gas positive, $\\Delta U=Q-W$. Insulation gives $Q=0$, so $\\Delta U=0-125=-125$ J. Adiabatic does not mean constant internal energy.",
      sectionId: "adiabatic-process", source: { document: "quick-revision", page: 38 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-018", text: "An ideal gas initially at 400 K expands reversibly and adiabatically to eight times its volume. If $\\gamma=\\frac{5}{3}$ remains constant, what is its final temperature?",
      options: [{ key: "a", text: "50 K" }, { key: "b", text: "100 K" }, { key: "c", text: "200 K" }, { key: "d", text: "320 K" }],
      answer: "b", explanation: "Use $T_1V_1^{\\gamma-1}=T_2V_2^{\\gamma-1}$. Since $8^{\\frac{2}{3}}=4$, the final temperature is $\\frac{400}{4}=100$ K. This power-law relation requires the stated reversible ideal-gas assumptions.",
      sectionId: "adiabatic-process", source: { document: "quick-revision", page: 38 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-019", text: "At the same point on a pressure-volume diagram, an ideal gas has $\\gamma=1.40$. What is the ratio of adiabatic to isothermal slope magnitudes?",
      options: [{ key: "a", text: "0.40" }, { key: "b", text: "0.71" }, { key: "c", text: "1.40" }, { key: "d", text: "2.40" }],
      answer: "c", explanation: "The slope magnitudes are $\\frac{\\gamma P}{V}$ and $\\frac{P}{V}$. At the same pressure and volume their ratio is gamma, hence 1.40. Comparing different states would not permit this cancellation.",
      sectionId: "pv-slopes-and-bulk-modulus", source: { document: "quick-revision", page: 38 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-020", text: "A rigid sealed vessel receives 120 J of heat. Its gas has no electrical, stirring or other work interaction. What are the gas's pressure-volume work and internal-energy change?",
      options: [{ key: "a", text: "0 J work; +120 J internal-energy change." }, { key: "b", text: "+120 J work; 0 J internal-energy change." }, { key: "c", text: "0 J work; -120 J internal-energy change." }, { key: "d", text: "-120 J work; 0 J internal-energy change." }],
      answer: "a", explanation: "A rigid vessel has no volume change, so its pressure-volume work is zero. With no other work, the first law gives $\\Delta U=Q=120$ J. Pressure can rise without boundary displacement.",
      sectionId: "isobaric-isochoric-and-work-order", source: { document: "quick-revision", page: 39 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-021", text: "A gas expands against a constant pressure of 150000 Pa from 2 litres to 6 litres. What work does it do?",
      options: [{ key: "a", text: "150 J" }, { key: "b", text: "300 J" }, { key: "c", text: "600 J" }, { key: "d", text: "900 J" }],
      answer: "c", explanation: "The volume change is 4 litres, or 0.004 cubic metres. Constant-pressure work is $P\\Delta V=150000(0.004)=600$ J. Using the final volume instead of its change would incorrectly give 900 J.",
      sectionId: "isobaric-isochoric-and-work-order", source: { document: "quick-revision", page: 38 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-022", text: "In a Carnot heat-engine cycle, what follows the adiabatic expansion that reaches the cold reservoir temperature?",
      options: [{ key: "a", text: "Isothermal compression while rejecting heat." }, { key: "b", text: "Isothermal expansion while absorbing heat." }, { key: "c", text: "Isochoric heating back to the hot temperature." }, { key: "d", text: "Isobaric expansion with no heat rejection." }],
      answer: "a", explanation: "The sequence is hot isothermal expansion, adiabatic expansion, cold isothermal compression, then adiabatic compression. The cold isothermal stage rejects heat before the return adiabatic stage.",
      sectionId: "carnot-engine-and-refrigeration", source: { document: "quick-revision", page: 39 }, cognitive: "recall"
    },
    {
      id: "note-thermal-physics-023", text: "A Carnot engine operates between reservoirs at 500 K and 300 K. What is its efficiency?",
      options: [{ key: "a", text: "20%" }, { key: "b", text: "30%" }, { key: "c", text: "60%" }, { key: "d", text: "40%" }],
      answer: "d", explanation: "Use the smaller absolute temperature over the larger: $\\eta=1-\\frac{300}{500}=0.40$, or 40%. The 60% choice is the rejected-heat fraction for this reversible engine.",
      sectionId: "carnot-engine-and-refrigeration", source: { document: "quick-revision", page: 39 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-024", text: "A Carnot engine's hot reservoir is raised from 500 K to 600 K while its cold reservoir stays at 300 K. By how many percentage points does efficiency increase?",
      options: [{ key: "a", text: "5 percentage points" }, { key: "b", text: "10 percentage points" }, { key: "c", text: "20 percentage points" }, { key: "d", text: "25 percentage points" }],
      answer: "b", explanation: "Initial efficiency is $1-\\frac{300}{500}=0.40$; final efficiency is $1-\\frac{300}{600}=0.50$. The increase is 10 percentage points. A 25% relative increase is a different way of expressing the change.",
      sectionId: "carnot-engine-and-refrigeration", source: { document: "quick-revision", page: 40 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-025", text: "A cyclic heat engine absorbs 600 J from its source and delivers 180 J of work. How much heat does it reject per cycle?",
      options: [{ key: "a", text: "180 J" }, { key: "b", text: "300 J" }, { key: "c", text: "780 J" }, { key: "d", text: "420 J" }],
      answer: "d", explanation: "Internal energy returns to its initial value after a complete cycle. Energy conservation gives $Q_2=Q_1-W=600-180=420$ J. This balance does not require the engine to be a Carnot engine.",
      sectionId: "carnot-engine-and-refrigeration", source: { document: "quick-revision", page: 39 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-026", text: "At a pressure of 200 kPa, an ideal gas has heat-capacity ratio 1.40. What is its reversible adiabatic bulk modulus?",
      options: [{ key: "a", text: "80 kPa" }, { key: "b", text: "200 kPa" }, { key: "c", text: "280 kPa" }, { key: "d", text: "480 kPa" }],
      answer: "c", explanation: "The adiabatic bulk modulus is $B_S=\\gamma P=1.40(200)=280$ kPa. The isothermal modulus would instead equal the pressure, 200 kPa, at this same gas state.",
      sectionId: "pv-slopes-and-bulk-modulus", source: { document: "quick-revision", page: 40 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-027", text: "What Fahrenheit reading corresponds exactly to 37 degrees Celsius under the standard scale conversion?",
      options: [{ key: "a", text: "98.6 degrees Fahrenheit" }, { key: "b", text: "98.4 degrees Fahrenheit" }, { key: "c", text: "96.8 degrees Fahrenheit" }, { key: "d", text: "100.6 degrees Fahrenheit" }],
      answer: "a", explanation: "The conversion is $F=\\frac{9}{5}C+32$. For 37, this gives 66.6 plus 32, or 98.6 degrees Fahrenheit. The checked page prints 98.4, which is a numerical source error.",
      sectionId: "temperature-scales-and-calibration", source: { document: "quick-revision", page: 40 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-028", text: "A sample is at -32 degrees Celsius. What does a Reaumur thermometer read, using its 0-to-80 ice-to-steam scale?",
      options: [{ key: "a", text: "-40.0 degrees Reaumur" }, { key: "b", text: "-25.6 degrees Reaumur" }, { key: "c", text: "-17.6 degrees Reaumur" }, { key: "d", text: "-57.6 degrees Reaumur" }],
      answer: "b", explanation: "Reaumur reading is $\\frac{4}{5}$ of the Celsius reading, so $\\frac{4}{5}(-32)=-25.6$. Fahrenheit also reads -25.6 at this temperature. Reaumur must not be confused with the absolute Rankine scale.",
      sectionId: "temperature-scales-and-calibration", source: { document: "quick-revision", page: 40 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-029", text: "A faulty linear thermometer reads 8 at the ice point and 108 at the steam point under the same reference pressure. What Celsius temperature corresponds to its reading 48?",
      options: [{ key: "a", text: "32 degrees Celsius" }, { key: "b", text: "40 degrees Celsius" }, { key: "c", text: "48 degrees Celsius" }, { key: "d", text: "56 degrees Celsius" }],
      answer: "b", explanation: "Equate fractional scale positions: $\\frac{C}{100}=\\frac{48-8}{108-8}=0.40$. Thus the true temperature is 40 degrees Celsius. The subtraction of the lower fixed point removes the offset.",
      sectionId: "temperature-scales-and-calibration", source: { document: "quick-revision", page: 41 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-030", text: "Which temperature instrument specifically uses the Seebeck effect?",
      options: [{ key: "a", text: "Mercury-in-glass thermometer." }, { key: "b", text: "Platinum resistance thermometer." }, { key: "c", text: "Constant-volume gas thermometer." }, { key: "d", text: "Thermocouple thermometer." }],
      answer: "d", explanation: "A thermocouple produces a thermoelectric emf associated with its junction temperatures, the Seebeck effect. A platinum resistance thermometer instead measures the temperature dependence of electrical resistance.",
      sectionId: "thermometer-types", source: { document: "quick-revision", page: 41 }, cognitive: "recall"
    },
    {
      id: "note-thermal-physics-031", text: "An isotropic metal has linear expansion coefficient 0.000012 per kelvin. For a small 50 K rise, what is its approximate percentage increase in volume?",
      options: [{ key: "a", text: "0.06%" }, { key: "b", text: "0.12%" }, { key: "c", text: "0.18%" }, { key: "d", text: "0.36%" }],
      answer: "c", explanation: "The first-order volume coefficient is three times the linear coefficient. The volume fraction is $3(0.000012)(50)=0.0018$, or 0.18%. The 0.06% alternative is the linear percentage change.",
      sectionId: "thermal-expansion-coefficients", source: { document: "quick-revision", page: 41 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-032", text: "An uncompensated pendulum rod has linear expansion coefficient 0.000020 per kelvin. After a 20 K rise, approximately how much time does its previously correct clock lose in 86400 seconds?",
      options: [{ key: "a", text: "17.28 s" }, { key: "b", text: "8.64 s" }, { key: "c", text: "34.56 s" }, { key: "d", text: "69.12 s" }],
      answer: "a", explanation: "Fractional period increase is approximately $\\frac{1}{2}\\alpha\\Delta T=0.0002$. The first-order time loss is $86400(0.0002)=17.28$ s. Heating lengthens the rod, so the clock loses rather than gains time.",
      sectionId: "pendulum-clock-temperature", source: { document: "quick-revision", page: 41 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-033", text: "A suspended solid displaces a fixed 0.0002 cubic metres of liquid. Heating lowers the liquid density from 1000 to 960 kg per cubic metre. With $g=10$ metres per square second and unchanged solid weight, what happens to apparent weight?",
      options: [{ key: "a", text: "It decreases by 0.08 N." }, { key: "b", text: "It increases by 0.80 N." }, { key: "c", text: "It decreases by 0.80 N." }, { key: "d", text: "It increases by 0.08 N." }],
      answer: "d", explanation: "The buoyant force falls by $(1000-960)(0.0002)(10)=0.08$ N. Since apparent weight is true weight minus buoyant force, the apparent weight increases by exactly that amount under the stated assumptions.",
      sectionId: "liquid-expansion-and-buoyancy", source: { document: "quick-revision", page: 42 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-034", text: "A fixed mass of liquid water is warmed from 0 to 4 degrees Celsius near atmospheric pressure. Which pair of changes occurs?",
      options: [{ key: "a", text: "Volume increases; density decreases." }, { key: "b", text: "Volume decreases; density increases." }, { key: "c", text: "Volume and density both increase." }, { key: "d", text: "Volume and density both decrease." }],
      answer: "b", explanation: "Water contracts on heating in this anomalous interval. Because its mass remains fixed, density increases as volume falls, reaching its approximate maximum near 4 degrees Celsius.",
      sectionId: "water-anomaly-and-heat-capacity-correction", source: { document: "quick-revision", page: 42 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-035", text: "Does water's negative volume-expansion coefficient between 0 and 4 degrees Celsius imply $C_P&lt;C_V$ for stable equilibrium states?",
      options: [{ key: "a", text: "No; the coefficient enters the heat-capacity difference squared." }, { key: "b", text: "Yes; a negative coefficient always makes the difference negative." }, { key: "c", text: "Yes; compression makes both heat capacities vanish throughout." }, { key: "d", text: "No; heat capacities are unrelated to any equilibrium property." }],
      answer: "a", explanation: "The equilibrium identity is $C_P-C_V=\\frac{TV\\alpha_V^2}{\\kappa_T}$. With positive absolute temperature and compressibility, its right side is nonnegative even when the expansion coefficient is negative.",
      sectionId: "water-anomaly-and-heat-capacity-correction", source: { document: "quick-revision", page: 42 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-036", text: "A straight bimetal strip is uniformly heated. One layer has a greater positive expansion coefficient than the other. Toward which layer does it bend?",
      options: [{ key: "a", text: "Toward the greater-coefficient layer, which forms the outer arc." }, { key: "b", text: "Toward the greater-coefficient layer, which forms the inner arc." }, { key: "c", text: "Toward the smaller-coefficient layer, which forms the inner arc." }, { key: "d", text: "Toward the smaller-coefficient layer, which forms the outer arc." }],
      answer: "c", explanation: "The layer with the greater expansion coefficient tends to become longer and occupies the outer arc. The shorter, lower-expansion layer is on the inner side, so the strip bends toward it.",
      sectionId: "bimetal-holes-and-spheres", source: { document: "quick-revision", page: 42 }, cognitive: "understanding"
    },
    {
      id: "note-thermal-physics-037", text: "How much heat melts 25 g of ice already at its melting point, using specific latent heat 80 cal per gram and no losses?",
      options: [{ key: "a", text: "2000 cal" }, { key: "b", text: "1000 cal" }, { key: "c", text: "3200 cal" }, { key: "d", text: "4000 cal" }],
      answer: "a", explanation: "At the melting point no preliminary warming is needed. The required phase-change heat is $Q=mL=25(80)=2000$ cal. Temperature stays at the melting point while solid and liquid coexist in this ideal process.",
      sectionId: "latent-heats-and-phase-energy", source: { document: "quick-revision", page: 42 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-038", text: "Find the heat needed to turn 10 g of ice at -10 degrees Celsius into water at 20 degrees Celsius. Use ice specific heat 0.5 and water specific heat 1 cal per gram per kelvin, and fusion heat 80 cal per gram; neglect losses.",
      options: [{ key: "a", text: "850 cal" }, { key: "b", text: "1000 cal" }, { key: "c", text: "1050 cal" }, { key: "d", text: "1250 cal" }],
      answer: "c", explanation: "Warm the ice: $10(0.5)(10)=50$ cal. Melt it: $10(80)=800$ cal. Warm the resulting water: $10(1)(20)=200$ cal. The sum is 50 plus 800 plus 200, or 1050 cal.",
      sectionId: "latent-heats-and-phase-energy", source: { document: "quick-revision", page: 43 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-039", text: "Five grams of steam at 100 degrees Celsius condense to liquid water at 100 degrees Celsius. Using latent heat 2260000 J per kilogram, how much heat is released before any further cooling?",
      options: [{ key: "a", text: "5.65 kJ" }, { key: "b", text: "11.30 kJ" }, { key: "c", text: "22.60 kJ" }, { key: "d", text: "45.20 kJ" }],
      answer: "b", explanation: "Convert 5 g to 0.005 kg. Condensation releases $mL=0.005(2260000)=11300$ J, or 11.30 kJ. This latent heat is released even though the temperature of the condensing material does not fall.",
      sectionId: "latent-heats-and-phase-energy", source: { document: "quick-revision", page: 43 }, cognitive: "application"
    },
    {
      id: "note-thermal-physics-040", text: "The saturation vapour pressure at a room's dew point is 1.2 kPa, while the saturation pressure at the air temperature is 3.0 kPa. What is the relative humidity?",
      options: [{ key: "a", text: "20%" }, { key: "b", text: "30%" }, { key: "c", text: "60%" }, { key: "d", text: "40%" }],
      answer: "d", explanation: "Actual vapour pressure equals saturation pressure at the dew point. Therefore RH is $100\\frac{1.2}{3.0}=40\\%$. The pressures already have identical units, so no conversion is required.",
      sectionId: "humidity-and-hygrometers", source: { document: "quick-revision", page: 44 }, cognitive: "application"
    }
  ]
};