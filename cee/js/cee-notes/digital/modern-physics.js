window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["modern-physics"] = {
  id: "modern-physics", subject: "Physics", title: "Atomic and nuclear physics",
  sections: [
    {
      id: "charged-particles-in-fields",
      title: "Electric and magnetic effects on charged-particle motion",
      sources: [{ document: "quick-revision", page: 45 }],
      html: "<p>The page continues the electric-field mnemonic with <em>A = Alters</em>: speed, velocity, momentum and kinetic energy can change in an electric field. The electric force is $\\mathbf F=q\\mathbf E$ and its power is $q\\mathbf E\\cdot\\mathbf v$. Thus electric work changes kinetic energy whenever there is displacement along the electric-force direction. This is a general ability to change energy, not a requirement of nonzero instantaneous power at every point of every path.</p><p>A magnetic force alone is $\\mathbf F=q(\\mathbf v\\times\\mathbf B)$. It is perpendicular to velocity and does no work on a point charge, so speed, momentum magnitude and kinetic energy remain constant while direction can change. The source's word 'moment' here means momentum.</p><table><thead><tr><th>Angle between velocity and uniform magnetic field</th><th>Path</th></tr></thead><tbody><tr><td>0&deg; or 180&deg;</td><td>Straight line; magnetic force is zero.</td></tr><tr><td>90&deg;</td><td>Circle in the plane perpendicular to the field.</td></tr><tr><td>Other angles with both velocity components nonzero</td><td>Helix, combining circular transverse motion and constant parallel motion.</td></tr></tbody></table><p><strong>Source clarification:</strong> The source calls the last path 'helical/spiral'. In a uniform magnetic field with no other force, the radius is constant: it is a helix, not a planar spiral of changing radius.</p><p>For nonrelativistic motion perpendicular to the field, $|q|vB=\\frac{mv^2}{r}$, giving $r=\\frac{mv}{|q|B}$. For the transverse part of a helix use $r=\\frac{mv_\\perp}{|q|B}$. More generally, $r=\\frac{p_\\perp}{|q|B}$. Use mass in kg, charge in C, speed in $\\mathrm{m\\,s^{-1}}$, field in T and radius in m. A larger radius means less curvature. These results neglect radiation losses and assume no additional electric or mechanical force.</p>"
    },
    {
      id: "instruments-and-gas-discharge",
      title: "Particle instruments and the gas-discharge pressure table",
      sources: [{ document: "quick-revision", page: 45 }],
      html: "<ul><li>A mass spectrograph separates charged particles according to mass-to-charge behaviour and can determine the specific charge, $\\frac{q}{m}$, of positive rays. Specific charge has units $\\mathrm{C\\,kg^{-1}}$; it is the reciprocal of mass per charge.</li><li>A cyclotron accelerates charged particles, conventionally positive ions in the elementary treatment. An alternating electric field supplies energy and a magnetic field bends their trajectories. A magnetic field alone does not supply the increasing kinetic energy.</li><li>A Van de Graaff generator produces a high electrostatic potential. The source specifies a positive potential; polarity depends on its charging arrangement and is not inherently limited to positive.</li><li>Quantum theory supplies the photon concept.</li><li>A gas-discharge tube is non-Ohmic: its current-voltage behaviour is not described by one constant resistance.</li></ul><p>The complete source gas-discharge sequence is retained below. These pressures are approximate guide values, not universal transitions independent of gas, electrode separation or applied voltage.</p><table><thead><tr><th>Pressure in mmHg</th><th>Source appearance</th></tr></thead><tbody><tr><td>0.01</td><td>An invisible electron stream, called cathode rays.</td></tr><tr><td>0.05</td><td>The positive column breaks into alternating dark and bright discs, called striations.</td></tr><tr><td>0.1</td><td>Crookes dark space.</td></tr><tr><td>1</td><td>Faraday dark space.</td></tr><tr><td>10</td><td>Blue streamers in the source's example.</td></tr></tbody></table><p>The original column heading is 'Colors', but several entries describe structures or invisible rays rather than colours. Gas composition affects visible colour.</p>"
    },
    {
      id: "photon-properties",
      title: "Photon energy, momentum, rest mass and charge",
      sources: [{ document: "quick-revision", page: 45 }, { document: "quick-revision", page: 46 }],
      html: "<p>A photon is a quantum of electromagnetic radiation. It has zero rest mass and zero electric charge. In vacuum its energy and momentum satisfy $E=h\\nu=\\frac{hc}{\\lambda}$ and $p=\\frac{E}{c}=\\frac{h}{\\lambda}$. Use $h$ in J s, frequency $\\nu$ in Hz, vacuum wavelength in m, energy in J and momentum in $\\mathrm{kg\\,m\\,s^{-1}}$. A convenient equivalent is $hc\\approx1240\\,\\mathrm{eV\\,nm}$.</p><p>The source says its 'total energy is kinetic' and compares it with the elementary ideal-gas model. <strong>Source clarification:</strong> A photon has no rest-energy contribution, but its energy must not be calculated from $\\frac{1}{2}mv^2$. It has no rest frame; the appropriate relation is $E=pc$. The ideal-gas analogy is a memory association, not a common classical kinetic-energy formula.</p><p>Ordinary external electric and magnetic fields do not bend a free photon beam through the charged-particle Lorentz-force mechanism. This applies to X-rays and other electromagnetic radiation, whereas cathode rays and positive-ion rays can be deflected. The statement concerns propagation without intervening matter or other interactions; it does not say electromagnetic radiation can never be refracted or scattered.</p>"
    },
    {
      id: "photoelectric-energy-balance",
      title: "Photoelectric effect, work function and energy conservation",
      sources: [{ document: "quick-revision", page: 46 }, { document: "quick-revision", page: 47 }],
      html: "<p>In the ordinary single-photon photoelectric effect, an incident photon transfers energy to an electron. Energy conservation gives $h\\nu=\\phi+K_{\\max}$, where $\\phi$ is the work function of the surface and $K_{\\max}$ is the maximum emitted-electron kinetic energy. The threshold frequency is $\\nu_0=\\frac{\\phi}{h}$, so $K_{\\max}=h(\\nu-\\nu_0)$ for light at or above threshold. Below threshold there is no ordinary single-photon photoemission, regardless of increased intensity.</p><p>The source describes conversion of light energy to electric energy: emission and collection of electrons can provide a photocurrent. Low-work-function surfaces are easier to photoemit from; caesium and alkali metals are its examples.</p><p><strong>Source correction:</strong> 'Efficiency is less than 1%' is not a universal law of photoelectric emission. Quantum yield, electrical conversion efficiency and the type of photocathode are different considerations and depend on material, wavelength and device. The quoted percentage is retained as a source claim, not an answer rule for all photoelectric devices.</p><p>For fixed incident frequency, a larger threshold frequency means a larger work function and a smaller maximum kinetic energy, provided emission is still possible. Photon energy, work function and kinetic energy must all be expressed in consistent units, either J or eV.</p>"
    },
    {
      id: "stopping-potential-and-photocurrent",
      title: "Stopping potential, graph slopes and photocurrent",
      sources: [{ document: "quick-revision", page: 46 }, { document: "quick-revision", page: 47 }],
      html: "<p>The stopping potential is the magnitude $V_s$ of the smallest retarding potential which reduces photocurrent to zero. The collecting anode is made negative relative to the emitting cathode. The fastest emitted electrons are just stopped when $eV_s=K_{\\max}$, where $e$ is the positive elementary-charge magnitude.</p><p>For one surface, $V_s=\\frac{h}{e}(\\nu-\\nu_0)$. The stopping-potential-versus-frequency graph has slope $\\frac{h}{e}$, in V per Hz, and crosses the frequency axis at $\\nu_0$. The maximum-energy-versus-frequency graph has slope $h$ when energy is measured in J. An angle drawn on a graph depends on axis scales; it is the physical slope with units that matters.</p><p><strong>Source corrections:</strong> Page 46's 'depends on potential difference' does not specify the cause of the stopping value: it is determined by photon frequency and work function. Page 47's $V_s\\propto\\nu$ is a linear-with-offset relation, not direct proportionality through the origin. Its slope $\\frac{h}{e}$ belongs to the stopping-potential graph, not a kinetic-energy graph in joules.</p><ul><li>For fixed frequency and surface in ordinary single-photon conditions, stopping potential and maximum kinetic energy do not depend on light intensity.</li><li>The source's memory aid uses I for <em>intensity</em> and <em>current</em>. At fixed frequency, illuminated area, collection conditions and quantum yield, increasing intensity increases emitted-electron rate and saturation photocurrent.</li><li>The blanket statement 'photocurrent does not depend on photon frequency' needs conditions. Below threshold it vanishes; at fixed optical power, photon number flux is inversely proportional to frequency, and quantum yield may also change. The intended classroom comparison varies intensity while holding frequency fixed.</li></ul>"
    },
    {
      id: "photoelectric-frequency-changes",
      title: "Doubling or halving frequency and the inverse-process analogy",
      sources: [{ document: "quick-revision", page: 47 }],
      html: "<p>Let an initially emitting surface have $K=h\\nu-\\phi$ with positive work function.</p><ul><li>If incident frequency doubles, $K'=2h\\nu-\\phi=2K+\\phi$. Therefore the new maximum kinetic energy is greater than twice the original positive value.</li><li>If frequency halves and emission still occurs, $K'=\\frac{h\\nu}{2}-\\phi=\\frac{K}{2}-\\frac{\\phi}{2}$, which is less than half the original energy.</li><li>If the halved frequency is below threshold, the correct conclusion is no emission, not a negative kinetic energy.</li></ul><p>The source calls X-ray production the inverse of photoelectric emission. This is a directional energy-conversion analogy: energetic electrons can produce photons, whereas incident photons can eject electrons. It is not a claim that every X-ray production event is the exact time-reversed microscopic process of photoelectric absorption.</p>"
    },
    {
      id: "uncertainty-and-orbit-limits",
      title: "Heisenberg uncertainty and limitations of definite orbits",
      sources: [{ document: "quick-revision", page: 46 }, { document: "quick-revision", page: 50 }],
      html: "<p>Canonically conjugate quantities such as position and the corresponding momentum cannot both have arbitrarily sharp values in one quantum state. With standard-deviation uncertainties, $\\Delta x\\,\\Delta p_x\\geq\\frac{\\hbar}{2}=\\frac{h}{4\\pi}$. Position uncertainty is in m and momentum uncertainty in $\\mathrm{kg\\,m\\,s^{-1}}$.</p><p>The source phrases this as impossibility of simultaneous measurement. <strong>Source clarification:</strong> The principle limits simultaneous precision; it does not prohibit approximate measurements of both quantities or merely describe imperfect laboratory instruments.</p><p>The source connects uncertainty with electrons not being ordinary pre-existing nuclear constituents: confining an electron to nuclear dimensions demands a large momentum spread and kinetic-energy scale. That argument does not mean an atomic electron's wavefunction is exactly zero inside the nuclear region; electron capture and finite electron density there are possible. Electrons produced in beta decay are not released from a store of classical nuclear electron orbits.</p><p>It also conflicts with Bohr's literal picture of an electron having an exactly specified position and momentum on a definite classical orbit. The successful hydrogen energy levels do not establish those literal trajectories.</p>"
    },
    {
      id: "compton-scattering",
      title: "Compton scattering and its wavelength shift",
      sources: [{ document: "quick-revision", page: 46 }, { document: "quick-revision", page: 47 }],
      html: "<p>A high-energy photon, such as an X-ray photon, scatters from an electron which can be treated as free and initially at rest when its binding is negligible on the energy scale of the interaction. The electron recoils; the scattered photon generally has lower energy and a longer wavelength.</p><p>The wavelength shift is $\\Delta\\lambda=\\lambda'-\\lambda=\\frac{h}{m_ec}(1-\\cos\\theta)$, where $\\theta$ is the photon scattering angle and $\\frac{h}{m_ec}\\approx2.426\\,\\mathrm{pm}$ is the electron Compton wavelength. The shift is zero for forward scattering and maximal, $\\frac{2h}{m_ec}$, for backscattering.</p><p>The source mentions a free electron in a light metal and associates the effect with X-rays. A light-element target is useful experimentally, but the effect is not restricted to metals. The page-47 continuation's statement 'independent of incident wavelength, dependent on scattering angle' applies to the <em>wavelength shift</em> for a specified stationary scatterer, not to scattered wavelength or transferred energy. Photon energy and momentum must both be conserved with those of the recoiling electron.</p>"
    },
    {
      id: "xray-production-and-controls",
      title: "X-ray production, target properties and tube controls",
      sources: [{ document: "quick-revision", page: 47 }, { document: "quick-revision", page: 48 }],
      html: "<p>Fast electrons striking a target can generate X-rays. The source calls for high atomic weight and high melting point. The physically relevant radiation-production trend is chiefly high atomic number, while a high melting point helps the target withstand the substantial heating. Atomic weight and atomic number are correlated for common target choices but are not interchangeable physical variables.</p><p>The source quotes about 1% conversion. <strong>Source correction:</strong> This is an approximate fraction of incident electron-beam energy emerging as X-rays in a conventional tube, not a statement that 1% of electrons turn into photons. Most input power heats the target, and efficiency varies with voltage and target. The accompanying mnemonic linking this number with photosynthetic sunlight/water 'absorption of 1%' and photoelectric efficiency below 1% is not a general quantitative identity; the processes have different denominators and variable efficiencies.</p><ul><li><strong>Intensity controls:</strong> At fixed tube voltage and target, X-ray output increases with tube current and hence with the number of electrons striking the target per unit time.</li><li>The source's intensity list also says temperature. In a thermionic tube this refers to cathode-filament temperature controlling electron emission, not to room temperature setting photon energy.</li><li><strong>Voltage controls:</strong> Accelerating voltage determines the kinetic energy supplied per electron and the high-energy end of the spectrum. Higher voltage generally gives a harder, more penetrating beam.</li></ul><p><strong>Source clarification:</strong> The heading 'potential difference depends on energy and penetrating power' reverses the usual control description. Tube voltage is an operating input that influences photon energy and penetration; current, voltage and target together affect total output.</p>"
    },
    {
      id: "xray-properties-and-applications",
      title: "X-ray properties, shielding and diagnostic examples",
      sources: [{ document: "quick-revision", page: 47 }, { document: "quick-revision", page: 49 }, { document: "quick-revision", page: 53 }],
      html: "<ul><li>X-rays were discovered by Roentgen.</li><li>They propagate in straight lines in a uniform unobstructed region, can cause photoelectric absorption and Compton scattering, and are not deflected as charged particles are by ordinary electric and magnetic fields.</li><li>The source quotes a frequency range of $10^{16}$ to $10^{19}$ Hz. Treat this as its rough spectral range, not sharply standardized boundaries; ultraviolet and gamma-ray terminology can overlap at the edges.</li><li>The source contrasts atomic X-ray production with nuclear gamma-ray production. Characteristic X-rays arise from electronic transitions, and ordinary nuclear gamma rays from nuclear transitions; the naming distinction is principally origin, not a strict nonoverlapping energy range. Bremsstrahlung X-rays arise from accelerated or decelerated charges, not a bound electronic line transition.</li><li>Lead is a common effective X-ray shield because of its high density and atomic number. The repeated source claim 'highest absorption coefficient' is an elementary material comparison, not a universal maximum for every energy, thickness or material.</li><li>An initially neutral isolated metal can become positively charged under X-rays when emitted electrons escape and are not replenished from a ground connection or surrounding circuit.</li></ul><p><strong>Source corrections:</strong> X-rays are not ordinary radar radiation, but 'not reflected back by metals' is too absolute: grazing-incidence reflection, diffraction and scattering of X-rays occur. Conventional radar uses radio or microwave radiation; laser ranging is usually called lidar or optical radar. Lasers use stimulated emission to produce coherent light. The source's laser-coherence association belongs to that optical technique.</p><p>An object illuminated only with X-rays is not ordinarily seen by unaided human vision because X-rays are invisible. This does not make the object optically invisible under normal light; fluorescence or a detector can reveal interactions.</p><p>Neutral hydrogen's bound-bound electronic transitions do not generate characteristic X-rays because their energy separations are too small. This does not exclude X-ray bremsstrahlung from energetic charged particles in a hydrogen-containing plasma.</p><p>The source's stomach-imaging example uses barium sulfate. <strong>Source correction:</strong> Medical barium sulfate is a radiopaque suspension, not an ordinary dissolved solution. Its high attenuation provides contrast; diffraction is not the principal imaging explanation. This is a clinical example under professional supervision, not a recommendation to ingest a laboratory chemical.</p>"
    },
    {
      id: "xray-spectra-and-cutoff",
      title: "Continuous and characteristic X-rays; minimum wavelength",
      sources: [{ document: "quick-revision", page: 48 }, { document: "quick-revision", page: 49 }],
      html: "<table><thead><tr><th>Continuous spectrum</th><th>Characteristic spectrum</th></tr></thead><tbody><tr><td>Bremsstrahlung caused by deceleration of fast electrons in the target.</td><td>Discrete electronic transitions after an inner-shell vacancy is produced.</td></tr><tr><td>A range of photon energies with an endpoint fixed by available electron energy.</td><td>Line energies depend on atomic number and the nature of the target.</td></tr><tr><td>At given accelerating voltage, the ideal short-wavelength cutoff does not depend on target atomic number.</td><td>Incident electrons must first have enough energy to create the relevant vacancy.</td></tr></tbody></table><p>The source lists shells K, L, M and N. A high-energy electron can eject a bound electron; another electron falls into the vacancy and may emit a characteristic photon. Ejection alone is not the complete photon-emission mechanism.</p><p><strong>Source mnemonic: PQR.</strong> P means potential difference, Q is used as a sound association for continuous, and R means retardation. The source links this with the words 'polymerase chain reaction', whose actual biological abbreviation is PCR, not PQR. It is a memory association only.</p><p>For electrons accelerated from negligible initial kinetic energy through voltage magnitude $V$, maximum photon energy is $E_{\\max}=eV$. The short-wavelength limit is $\\lambda_{\\min}=\\frac{hc}{eV}$ and maximum frequency is $\\nu_{\\max}=\\frac{eV}{h}$. Use V for volts and eV for energy only after converting consistently. The endpoint corresponds to essentially all of one electron's acquired kinetic energy becoming one photon.</p><p><strong>Source clarification:</strong> The statement 'continuous X-rays do not depend on atomic number' is true of this ideal cutoff at fixed voltage, not of the whole intensity spectrum. The page-49 value of 10 kV is a quoted operating example, not the one voltage used by all X-ray tubes. At 10 kV the endpoint is 10 keV and $\\lambda_{\\min}\\approx0.124$ nm using $hc=1240$ eV nm.</p>"
    },
    {
      id: "xray-diffraction",
      title: "Bragg diffraction and the wavelength limit",
      sources: [{ document: "quick-revision", page: 48 }],
      html: "<p>Constructive interference from parallel crystal planes obeys Bragg's law: $2d\\sin\\theta=n\\lambda$. Here $d$ is spacing between the planes, $\\theta$ is the angle between the incident beam and the planes, and $n$ is a positive integer diffraction order. Wavelength and spacing must have the same length units. The scattering angle between incident and diffracted directions is $2\\theta$, not $\\theta$.</p><p>An order is possible only if $n\\lambda\\leq2d$. Consequently if $\\lambda&gt;2d$, no positive integer order satisfies the equation. This reproduces the source's no-solution condition and identifies its sine-limit origin.</p>"
    },
    {
      id: "xray-attenuation",
      title: "Exponential attenuation and half-value thickness",
      sources: [{ document: "quick-revision", page: 48 }, { document: "quick-revision", page: 49 }],
      html: "<p>For a narrow monochromatic beam passing through a uniform material, transmitted primary intensity follows $I=I_0e^{-\\mu x}$. Here $x$ is thickness, $\\mu$ is a linear attenuation coefficient in the inverse unit of thickness, and the exponent is dimensionless. Scattered radiation entering the detector or a changing polychromatic spectrum can require a more detailed model.</p><p>At half-value thickness $x_{\\mathrm{half}}$, $I=\\frac{I_0}{2}$, so $\\mu=\\frac{\\ln2}{x_{\\mathrm{half}}}\\approx\\frac{0.693}{x_{\\mathrm{half}}}$. After $n$ equal half-value layers under this model, $\\frac{I}{I_0}=\\left(\\frac{1}{2}\\right)^n$.</p><p>The source calls $\\mu$ an absorption coefficient. In a primary-beam attenuation experiment it can include both absorption and scattering out of the beam. Its value depends on material and photon energy. Lead's large attenuation in many practical X-ray ranges explains the shield example, but does not make it an absolute maximum under all comparisons.</p>"
    },
    {
      id: "bohr-quantization-and-orbits",
      title: "Bohr's quantization, hydrogen radius and speed",
      sources: [{ document: "quick-revision", page: 49 }],
      html: "<p>Bohr's atomic model applies radiation quantization to the atom and imposes angular-momentum quantization: $m_evr=n\\frac{h}{2\\pi}=n\\hbar$, with positive integer $n$. The elementary formulas describe hydrogen or a one-electron hydrogen-like ion with nuclear charge $+Ze$, using a fixed heavy nucleus and nonrelativistic Coulomb dynamics.</p><p>For hydrogen's first orbit, the source gives $r_1\\approx0.53$ angstrom, or $5.3\\times10^{-11}$ m, and $v_1\\approx\\frac{c}{137}\\approx2.2\\times10^6\\,\\mathrm{m\\,s^{-1}}$. One angstrom is $10^{-10}$ m.</p><p>For the same idealized model, $r_n=a_0\\frac{n^2}{Z}$ and $v_n\\approx\\frac{Z}{n}\\frac{c}{137}$. Thus higher hydrogen orbits are larger and slower. The quoted first-orbit radius and speed are hydrogen values, not the first-orbit values of every atom.</p>"
    },
    {
      id: "bohr-energies-and-transitions",
      title: "Bound-state energy, kinetic energy and potential energy",
      sources: [{ document: "quick-revision", page: 49 }, { document: "quick-revision", page: 50 }, { document: "quick-revision", page: 51 }],
      html: "<p>With zero energy assigned to a stationary electron infinitely separated from the nucleus, hydrogen-like levels have $E_n=-13.6\\frac{Z^2}{n^2}\\,\\mathrm{eV}$. The source's proportionality is $E_n\\propto-\\frac{1}{n^2}$ at fixed $Z$.</p><ul><li>Bound-state total energy is negative.</li><li>As $n$ increases, energy increases toward zero, the ionization limit, and adjacent level separations become smaller.</li><li>The orbital speed and kinetic energy decrease as the orbit number increases.</li><li>For a transition from higher to lower $n$, kinetic energy increases but potential and total energy decrease; the emitted photon carries the total-energy difference.</li></ul><p><strong>Source clarification:</strong> 'Energy is always negative' refers to these bound states, not all free electrons. Zero is the upper limit of the bound-state series; continuum states can have positive energy. A photon is emitted when the atom loses total energy even though the final bound electron has greater kinetic energy.</p><p>For a Coulomb bound orbit, the source's complete energy relations are $U=2E$, $U=-2K$, and $E=-K$, where $U$ is potential energy, $K$ kinetic energy and $E=K+U$ total energy. Its Nepali mnemonic puts potential energy P first, and T or K on the other side: P equals plus twice T, but minus twice K. The plus sign in $U=2E$ does not make either negative energy positive.</p><p>The comparison box also mentions a cannon explosion: macroscopic kinetic energy increases while total energy of an isolated complete system remains constant, because stored internal energy is converted. This is a general energy-conservation comparison, unlike comparing the electron subsystem before and after photon emission.</p>"
    },
    {
      id: "atomic-model-limits-and-splitting",
      title: "Rutherford, de Broglie, Zeeman and Stark effects",
      sources: [{ document: "quick-revision", page: 50 }],
      html: "<p>Rutherford scattering established the small central nucleus. Bohr's model accounts for important one-electron spectral regularities, but its literal definite-orbit picture is not a complete quantum description.</p><p><strong>Source correction:</strong> The page lists both de Broglie's concept and Heisenberg uncertainty as inconsistent with Bohr theory. The uncertainty criticism applies to exact classical trajectories. However, de Broglie standing waves can reproduce Bohr's angular-momentum condition: $2\\pi r=n\\lambda$ together with $\\lambda=\\frac{h}{p}$ gives $pr=n\\hbar$. Therefore a blanket statement that the de Broglie wavelength concept contradicts Bohr quantization is incorrect.</p><ul><li><strong>Zeeman effect:</strong> Magnetic-field splitting or shifting of spectral lines.</li><li><strong>Stark effect:</strong> Electric-field splitting or shifting of spectral lines.</li></ul><p>The source mnemonic matches the sounds at the ends of <em>electric</em> and <em>Stark</em>, leaving Zeeman associated with the magnetic field. These effects involve changes to atomic energy levels, not ordinary Lorentz bending of the emitted photon after it leaves the atom.</p>"
    },
    {
      id: "line-band-continuous-spectra",
      title: "Line, band and continuous spectra; the BBB mnemonic",
      sources: [{ document: "quick-revision", page: 50 }],
      html: "<table><thead><tr><th>Spectrum</th><th>Source examples and meaning</th></tr></thead><tbody><tr><td>Atomic line emission</td><td>Individual atoms emit discrete transition wavelengths. Sodium-vapour and mercury-vapour lamps are the listed examples.</td></tr><tr><td>Line absorption</td><td>Selected wavelengths are removed from a background continuum. Fraunhofer lines are the line-absorption structure in sunlight.</td></tr><tr><td>Molecular band spectrum</td><td>Closely grouped molecular transitions form bands. The page lists H<sub>2</sub>, N<sub>2</sub>, O<sub>2</sub> and CO<sub>2</sub>.</td></tr><tr><td>Continuous thermal spectrum</td><td>A black body and an incandescent bulb produce a continuum over wavelengths.</td></tr></tbody></table><p>The source also lists alpha particles and gamma rays under line spectra. <strong>Source clarification:</strong> These can have discrete <em>nuclear energy spectra</em>; alpha particles are not electromagnetic atomic emission lines. Gamma lines reflect nuclear energy differences.</p><p><strong>Source mnemonic: BBB.</strong> Black body, Bulb, Beta ray. Its first two examples mean optical or thermal radiation continua, with bulb interpreted as an incandescent filament rather than every modern lamp. Beta decay has a continuous <em>particle-energy</em> spectrum because available energy is shared with a neutrino or antineutrino and recoil. It is not a continuous optical spectrum emitted by a beta particle simply because it is called a ray.</p>"
    },
    {
      id: "hydrogen-spectral-series",
      title: "The five hydrogen series and their spectral regions",
      sources: [{ document: "quick-revision", page: 50 }, { document: "quick-revision", page: 51 }],
      html: "<p>Hydrogen spectral wavelengths satisfy $\\frac{1}{\\lambda}=R_H\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)$ with $n_2&gt;n_1$ and $R_H\\approx1.097\\times10^7\\,\\mathrm{m^{-1}}$. The same pair of levels gives downward emission or upward absorption, provided the lower level is populated for absorption. The source table is headed 'Line Absorption spectrum' but its level pairs also identify emission series.</p><table><thead><tr><th>Series</th><th>Levels</th><th>Region</th></tr></thead><tbody><tr><td>Lyman</td><td>$n_1=1$; $n_2=2,3,\\ldots$ to the series limit.</td><td>Ultraviolet.</td></tr><tr><td>Balmer</td><td>$n_1=2$; $n_2=3,4,\\ldots$.</td><td>Prominent visible lines; upper members approach near ultraviolet.</td></tr><tr><td>Paschen</td><td>$n_1=3$; $n_2=4,5,\\ldots$.</td><td>Infrared.</td></tr><tr><td>Brackett</td><td>$n_1=4$; $n_2=5,6,\\ldots$.</td><td>Infrared.</td></tr><tr><td>Pfund</td><td>$n_1=5$; $n_2=6,7,\\ldots$.</td><td>Infrared.</td></tr></tbody></table><p>The ellipses approach $n_2\\to\\infty$, as shown in every source row. The source spells Pfund 'P-fund' and labels it far infrared. <strong>Source clarification:</strong> Pfund wavelengths run approximately from a 2.28-micrometre series limit to a 7.46-micrometre first line, normally described as infrared rather than the far-infrared band. Similarly, not every Balmer member is visible; the limit is approximately 365 nm.</p><p>The Balmer visible lines formed the first historically recognized empirical hydrogen series, the source's 'discovered first' point. Its continuation repeats the visible-region association; the near-ultraviolet qualification above preserves the actual series extent.</p>"
    },
    {
      id: "spectral-line-counting",
      title: "Possible transition counts and the undefined delta-n formula",
      sources: [{ document: "quick-revision", page: 51 }],
      html: "<p>In the elementary gross-level counting model, $n$ available distinct levels give at most $\\frac{n(n-1)}{2}$ different downward level-pair transitions. This is the source's emission-line formula. It describes possible lines from an ensemble exploring the available transitions, not the number of photons one atom must emit on one cascade. Fine structure, selection rules and coincident frequencies can require more detailed counting.</p><p>If all atoms initially occupy the ground state and direct absorption can reach levels 2 through $n$, the number of possible absorption lines in that restricted model is $n-1$. With initially populated excited levels or a restricted illumination spectrum the count can differ.</p><p>The third source line says 'Number of spectrum seen' and gives $\\frac{\\Delta n(\\Delta n-1)}{2}$ without defining $\\Delta n$. If it meant the number of available levels, this would be a pair-counting expression; if it meant the difference of two principal quantum numbers, the number of levels would instead include both endpoints. The intended definition remains unresolved. No scored question assumes a meaning for this notation.</p>"
    },
    {
      id: "alpha-and-beta-decay",
      title: "Alpha and beta particles and their decay bookkeeping",
      sources: [{ document: "quick-revision", page: 51 }, { document: "quick-revision", page: 52 }],
      html: "<p>An alpha particle is a helium-4 nucleus, containing two protons and two neutrons and carrying charge $+2e$. The source describes it as doubly ionized helium, He<sup>2+</sup>; more precisely, removing both electrons from a helium-4 atom leaves this nucleus.</p><ul><li>It can be deflected by an electric field and by a magnetic field when velocity has a transverse component.</li><li>In ordinary alpha/beta/gamma comparisons it makes dense ionization and has a short penetration range.</li><li>Alpha emission changes parent mass number by -4 and atomic number by -2: ${}^{A}_{Z}X\\to{}^{A-4}_{Z-2}Y+{}^{4}_{2}\\mathrm{He}$.</li></ul><p><strong>Source clarification:</strong> The explanations 'maximum ionization because maximum mass' and 'minimum penetration because largest' are oversimplified. Charge, speed, energy and interactions with the medium govern energy loss; mass or geometrical size alone is not the rule.</p><p>The beta rays described on page 51 are beta-minus electrons, produced in a nuclear weak decay rather than emitted from an ordinary atomic orbital. The source's bookkeeping is unchanged mass number and atomic number increased by one: ${}^{A}_{Z}X\\to{}^{A}_{Z+1}Y+e^-+\\bar\\nu_e$. Microscopically a neutron changes to a proton while an electron and antineutrino are created.</p><p>Beta-minus particles can be electrically and magnetically deflected. The source calls their magnetic deflection the greatest. This is the usual comparison with alpha particles of comparable speed or specified energy, not a universal result without kinematic conditions; curvature depends on $\\frac{|q|}{p_\\perp}$. Beta-plus decay is a different process: it emits a positron and decreases $Z$ by one at unchanged $A$.</p>"
    },
    {
      id: "gamma-and-radiation-comparison",
      title: "Gamma emission, ionization and penetration comparisons",
      sources: [{ document: "quick-revision", page: 52 }],
      html: "<p>Gamma rays are photons, or electromagnetic radiation. They have no electric charge or rest mass and are not deflected by ordinary electric or magnetic fields through the Lorentz-force mechanism. In the conventional comparison of common nuclear radiation in a fixed medium, gamma rays are the most penetrating and least densely ionizing of alpha, beta and gamma radiation.</p><table><thead><tr><th>Comparison</th><th>Source ordering</th></tr></thead><tbody><tr><td>Ionizing power</td><td>Alpha &gt; beta &gt; gamma.</td></tr><tr><td>Penetrating power</td><td>Gamma &gt; beta &gt; alpha.</td></tr></tbody></table><p><strong>Source clarification:</strong> These are qualitative entrance-exam comparisons at conventional energies, not energy-independent universal inequalities. Gamma penetration is associated with its uncharged photon interactions, not simply explained by zero rest mass alone.</p><p>A gamma transition changes nuclear excitation energy without changing proton or neutron counts: ${}^{A}_{Z}X^*\\to{}^{A}_{Z}X+\\gamma$. Thus atomic number and mass number are unchanged. <strong>Source correction:</strong> The page says neither 'mass nor atomic number' changes. It is the mass <em>number</em> that stays constant; the actual rest mass decreases with released excitation energy, in accordance with energy-mass equivalence.</p>"
    },
    {
      id: "decay-families-and-neutron-excess",
      title: "Decay relationships and the neutron-excess mnemonic",
      sources: [{ document: "quick-revision", page: 52 }, { document: "quick-revision", page: 54 }],
      html: "<table><thead><tr><th>Source decay mnemonic</th><th>Preserved relation</th></tr></thead><tbody><tr><td>Alpha decay: isodiaphers.</td><td>Both neutron and proton counts fall by two, so their difference is unchanged.</td></tr><tr><td>Beta decay: isobars.</td><td>Mass number is unchanged while atomic number changes.</td></tr><tr><td>One alpha plus two beta-minus decays: isotopes.</td><td>Net $A$ falls by four, while net $Z$ returns to its initial value.</td></tr></tbody></table><p>The source visually embeds alpha in 'isodiaphere' and beta in 'isobar' as memory cues. The one-alpha/two-beta relation specifically requires beta-minus, not two beta-plus decays.</p><p><strong>Source correction:</strong> The table's $\\frac{n}{p}&gt;1$ criterion is not by itself a beta-decay test. Many stable heavy nuclei have more neutrons than protons. Beta-minus decay is favoured for nuclei that are neutron-rich relative to the appropriate valley of stability and for which the decay is energetically allowed. The useful mnemonic is excessive neutron richness, not merely a ratio greater than one.</p>"
    },
    {
      id: "radioactive-decay-and-lifetimes",
      title: "Exponential decay, half-life and mean life",
      sources: [{ document: "quick-revision", page: 52 }, { document: "quick-revision", page: 53 }],
      html: "<p>For one radionuclide with constant decay probability per unit time and no production term, $\\frac{dN}{dt}=-\\lambda N$ and $N=N_0e^{-\\lambda t}$. The decay constant $\\lambda$ has units inverse to the time unit. The number-versus-time curve is exponential, which is the source's plot of N against 'T'; here that horizontal variable is time, not temperature.</p><p>Half-life is the time for the expected undecayed population to fall to half: $t_{\\mathrm{half}}=\\frac{\\ln2}{\\lambda}\\approx\\frac{0.693}{\\lambda}$. After $n$ half-lives, $\\frac{N}{N_0}=\\left(\\frac{1}{2}\\right)^n$. Half of the parent population remains after one half-life and half has decayed; the products need not have disappeared from the sample.</p><p>Mean life is $\\tau=\\frac{1}{\\lambda}=\\frac{t_{\\mathrm{half}}}{\\ln2}\\approx1.4427t_{\\mathrm{half}}$. At that time, $e^{-1}\\approx36.8\\%$ of the original parent population remains and approximately 63.2% has decayed, the source's rounded 37% and 63%.</p><p><strong>Source correction:</strong> The printed equality $\\tau=\\sqrt{2}t_{\\mathrm{half}}$ is wrong. The factor is $\\frac{1}{\\ln2}$, not $\\sqrt{2}$; 1.44 is its rounded value. Both repeated half-life and mean-life formulas on pages 52 and 53 are consolidated here.</p><p>Ordinary radioactive decay follows first-order kinetics. The decay constant is normally essentially independent of ordinary temperature, pressure and concentration changes. This does not mean total activity is independent of the number of parent nuclei. Processes involving atomic electrons, such as electron capture, can have environment-dependent exceptions; the elementary independence rule is not absolute under all electronic or extreme physical conditions.</p>"
    },
    {
      id: "activity-and-units",
      title: "Positive activity and radioactivity units",
      sources: [{ document: "quick-revision", page: 52 }, { document: "quick-revision", page: 53 }],
      html: "<p>Activity is the positive decay rate, $\\mathcal A=-\\frac{dN}{dt}=\\lambda N$. Therefore, for one isolated decaying species, $\\mathcal A=\\mathcal A_0e^{-\\lambda t}$ and activity halves over the same half-life as its parent population.</p><p><strong>Source correction:</strong> Page 53 labels $\\frac{dN}{dt}=-\\lambda N$ as activity. That is the signed rate of change of the remaining population; physical activity is its positive magnitude, $\\lambda N$.</p><table><thead><tr><th>Unit</th><th>Definition</th></tr></thead><tbody><tr><td>Becquerel, Bq</td><td>1 disintegration per second; the SI activity unit.</td></tr><tr><td>Rutherford</td><td>$10^6$ disintegrations per second, or $10^6$ Bq.</td></tr><tr><td>Curie, Ci</td><td>$3.7\\times10^{10}$ disintegrations per second, or $3.7\\times10^{10}$ Bq.</td></tr></tbody></table><p>The source's <em>Becq / Best unit</em> memory cue identifies becquerel as the SI unit. Disintegrations per second measures source activity, not absorbed radiation dose.</p>"
    },
    {
      id: "lead-and-radiation-detectors",
      title: "Stable lead, decay-series endpoints and detectors",
      sources: [{ document: "quick-revision", page: 53 }],
      html: "<p>The source lists lead as the heaviest stable nucleus, an endpoint of natural radioactive series, a material with infinite half-life, and a strong X-ray absorber used in shields. The careful interpretation is that lead has stable isotopes, with lead-208 the heaviest conventionally stable nuclide, and stable lead isotopes terminate the familiar long-lived natural uranium and thorium decay series.</p><p><strong>Source clarification:</strong> Not every lead isotope is stable. For a stable isotope the idealized decay constant is zero, giving an infinite half-life in the decay model; this does not apply to radioactive lead isotopes. 'Highest X-ray absorption' is a common shielding comparison and still depends on photon energy and material properties.</p><ul><li>A Geiger-Muller counter detects ionizing-radiation events and is used to investigate radioactivity. Inferring source activity from count rate requires background, efficiency and geometry to be considered.</li><li>A neutron carries no electric charge, so it does not leave a direct ionization track in a Wilson cloud chamber like a charged particle does. It can nevertheless be detected indirectly through charged recoil particles or reaction products, which can leave tracks.</li></ul>"
    },
    {
      id: "nuclear-size-and-pair-production",
      title: "Nuclear density, the log-radius plot and pair production",
      sources: [{ document: "quick-revision", page: 53 }],
      html: "<p>The nuclear radius approximately follows $R=r_0A^{\\frac{1}{3}}$, where $A$ is mass number and $r_0$ is a roughly constant nuclear length scale. Nuclear mass is approximately proportional to $A$, while volume is proportional to $R^3$ and hence also to $A$. Consequently mean nuclear density is approximately independent of mass number and of order $10^{17}\\,\\mathrm{kg\\,m^{-3}}$, as the source states. This is a bulk nuclear approximation, not the density of the macroscopic chemical element.</p><p>Taking logarithms gives $\\log R=\\log r_0+\\frac{1}{3}\\log A$ when a fixed radius unit is used. A log-radius versus log-mass-number plot is a straight line of slope one third. The symbols R and A here are radius and nucleon count, not radiation rate and activity.</p><p>Creating an electron-positron pair requires at least the combined rest energy $2m_ec^2\\approx1.022$ MeV, rounded to 1.02 MeV in the source. A single photon cannot create a pair in otherwise empty space while conserving four-momentum. A nearby nucleus or another participant must accept recoil, or multiple photons must participate; the familiar approximately 1.022 MeV photon threshold assumes a sufficiently massive recoil partner. Energy above threshold supplies kinetic energy and recoil.</p>"
    },
    {
      id: "nuclear-classification",
      title: "Isotopes, isobars, isotones and isodiaphers",
      sources: [{ document: "quick-revision", page: 54 }],
      html: "<p>For nuclide ${}^{A}_{Z}X$, $Z$ is atomic number or proton count, $A$ is mass number or total nucleon count, and neutron count is $N=A-Z$.</p><table><thead><tr><th>Class</th><th>What is equal?</th></tr></thead><tbody><tr><td>Isotopes</td><td>Same $Z$, different $A$ and neutron count.</td></tr><tr><td>Isobars</td><td>Same $A$, different $Z$.</td></tr><tr><td>Isotones</td><td>Same neutron count $A-Z$.</td></tr><tr><td>Isodiaphers</td><td>Same neutron excess $N-Z=A-2Z$.</td></tr></tbody></table><ul><li>Source isotope example: hydrogen-1 and hydrogen-2, both with $Z=1$.</li><li>Source isobar example: sodium-22, $Z=11$, and neon-22, $Z=10$.</li><li>Source isotone example: oxygen-16 and carbon-14. Their neutron counts are $16-8=8$ and $14-6=8$.</li><li>Source isodiapher example: uranium-235 and thorium-231. Their neutron excesses are $235-2(92)=51$ and $231-2(90)=51$.</li></ul><p><strong>Source corrections:</strong> 'Same atomic weight' in the isobar definition should be same integer mass number; actual isotopic masses need not be identical. The source's one-alpha/two-beta isotope rule requires beta-minus decays. Sodium-22 and neon-22 correctly illustrate isobars, but a transition from the listed sodium parent to neon lowers $Z$ and is not beta-minus decay; sodium-22 can decay through positron emission or electron capture.</p>"
    },
    {
      id: "mass-defect-packing-and-binding",
      title: "Mass defect, packing fraction and binding energy",
      sources: [{ document: "quick-revision", page: 53 }, { document: "quick-revision", page: 54 }],
      html: "<p>Nuclear mass defect is the mass of separated nucleons minus the bound nuclear mass: $\\Delta m=Zm_p+(A-Z)m_n-M_{\\mathrm{nucleus}}$. All masses must be expressed in the same units. If atomic masses rather than bare nuclear masses are used, use hydrogen-atom mass for the proton-plus-electron contribution so electron counts cancel consistently, neglecting small electronic binding-energy differences. Do not subtract an atomic mass from a sum of bare nucleon masses without accounting for electrons.</p><p>Binding energy is the energy equivalent of this defect: $E_b=\\Delta m c^2$. If the numerical defect is in atomic mass units u, the source uses $E_b\\approx\\Delta m\\times931$ MeV. A more precise common conversion is $1\\,\\mathrm{u}c^2\\approx931.5$ MeV. Use the stated conversion consistently.</p><p>The source's packing-fraction expression is $f=\\frac{M-A}{A}$ when M means the numerical isotopic mass in u. To show dimensions explicitly, define $M_r=\\frac{M_{\\mathrm{atom}}}{\\mathrm{u}}$, then $f=\\frac{M_r-A}{A}$.</p><p><strong>Source correction:</strong> The heading equates this with 'mass defect divided by mass number'. Here $M_r-A$ is the numerical mass excess relative to $A$ atomic mass units, not the separated-nucleon binding mass defect defined above. These two quantities have different reference masses and must not be interchanged.</p><p>Binding energy per nucleon is typically of order 8 MeV for many medium and heavy nuclei. It broadly rises from light nuclei toward the iron-nickel region and then declines for heavier nuclei. The source names iron-56 as the maximum and 'most stable'. <strong>Source clarification:</strong> The relevant curve is binding energy <em>per nucleon</em>, not total binding energy or a packing-fraction curve. Nickel-62 is slightly higher in binding energy per nucleon than iron-56; iron-56 is a familiar near-peak reference, not the exact maximum. Resistance to a particular radioactive decay also depends on the energetics of its available products, not one universal stability ranking.</p><p>Energy-releasing fusion of light nuclei and fission of heavy nuclei move toward products with greater total binding energy for the conserved nucleon set. Binding energy per nucleon generally increases in these exothermic examples. Not every possible fusion or fission reaction releases energy.</p>"
    },
    {
      id: "reactor-component-comparison",
      title: "Control rods, moderators and source fuel statements",
      sources: [{ document: "quick-revision", page: 53 }],
      html: "<table><thead><tr><th>Component</th><th>Source role and examples</th></tr></thead><tbody><tr><td>Control rods</td><td>Absorb neutrons to regulate a fission chain reaction. Boron and cadmium are the listed absorber examples.</td></tr><tr><td>Moderator</td><td>Slows neutrons through scattering. Heavy water, D<sub>2</sub>O, and graphite are the listed examples.</td></tr></tbody></table><p><strong>Source mnemonic: BoCa.</strong> It joins the beginnings of boron and cadmium. The chemical symbols are B and Cd, not 'Bo' and 'Ca'; calcium is not the cadmium in this mnemonic. Absorbing and slowing neutrons are distinct functions.</p><p>The page says an accelerator is not involved in nuclear fission. The useful elementary point is that an ordinary self-sustaining fission reactor does not require a particle accelerator to sustain every fission event; this is not a universal exclusion of accelerator-induced nuclear reactions.</p><p>The source names plutonium-239 as the 'best nuclear fuel'. <strong>Source clarification:</strong> It is a fissile nuclide, but there is no single universally best fuel without a reactor context and comparison criterion. The statement is not used as an absolute scored ranking.</p>"
    },
    {
      id: "fusion-fission-and-source-numerics",
      title: "Fusion and fission: definitions, comparisons and numerical cautions",
      sources: [{ document: "quick-revision", page: 55 }],
      html: "<p><strong>Fusion:</strong> Light nuclei join to form heavier nuclei. The source's Nepali explanation uses hydrogen joining toward helium and releasing energy in the Sun. This is an illustration of energy-releasing light-nucleus fusion, not a balanced reaction equation written merely as H + H = He.</p><ul><li>The source quotes temperatures of order $10^7$ K, associating fusion with the hot solar interior. This is an order-of-magnitude stellar example, not a sharp universal temperature threshold for every fusion reaction; reaction species, density and quantum tunnelling matter.</li><li>Its phrase 'induced by protons' reflects hydrogen reactions in stars. Fusion in general can involve other light nuclei and is not defined as proton-induced.</li><li>The quoted '24 MeV per fusion of ${}^{2}_{1}\\mathrm H$' lacks a complete reaction and product channel. Fusion energy depends on that channel; the specific intended process remains unresolved and the value is not used as an unconditional scored answer.</li></ul><p><strong>Fission:</strong> A heavy nucleus splits into lighter products. The source quotes approximately 200 MeV per conventional heavy-nucleus fission and associates induced fission with neutrons. This is a typical scale, not a fixed energy for every nucleus or channel; spontaneous fission also exists. Its 'no restriction of temperature' means no thermonuclear-temperature requirement comparable to the stellar fusion example, not that all reaction rates and material conditions are temperature-independent.</p><p>The source contrasts controlled fission in reactors with uncontrolled fission in atomic weapons, and associates fusion with thermonuclear or hydrogen weapons. These are broad physical classifications, not device construction descriptions. <strong>Source correction:</strong> The claim of a fixed '1000 times more powerful' fusion-to-fission comparison is not a physical constant. Total yield or power cannot be inferred solely from naming the reaction category.</p><p>The source's mass-conversion memory values are about 1% for fusion and 0.1% for fission. The rigorous quantity is $100\\frac{Q}{M_{\\mathrm{reactants}}c^2}\\%$ for a specified reaction and system. Hydrogen-to-helium stellar fusion is approximately a 0.7% rest-mass conversion, whereas a typical 200 MeV heavy-nucleus fission is of order 0.1%; neither percentage is universal for all channels.</p><p>The linked mnemonic is <em>Fusion, Sun, sunlight, photosynthesis, 1%</em>. It connects topics for recall, but photosynthetic energy efficiency is not a rest-mass-conversion fraction and is not universally 1%. The numerical analogy must not replace an explicit energy balance.</p>"
    },
    {
      id: "boundary-page-energy-bands",
      title: "Page-boundary continuation: energy gaps and metallic conductivity",
      sources: [{ document: "quick-revision", page: 55 }],
      html: "<p>The bottom of assigned page 55 begins the semiconductor chapter. This content remains attached to its actual page rather than being omitted or cited to an unassigned page.</p><p>A forbidden energy gap is the energy separation between the valence-band maximum and conduction-band minimum in the elementary band model. It is an energy interval, not a spatial gap between pieces of matter.</p><table><thead><tr><th>Material class</th><th>Source band comparison</th></tr></thead><tbody><tr><td>Conductor</td><td>No gap preventing nearby carrier motion at the Fermi energy; commonly a partially filled band or overlapping bands.</td></tr><tr><td>Semiconductor</td><td>A relatively small forbidden gap in the source's elementary comparison.</td></tr><tr><td>Insulator</td><td>A relatively large forbidden gap in that comparison.</td></tr></tbody></table><p>The source states that increasing a conductor's temperature increases its resistance and decreases conductivity. This describes ordinary metallic conductors over their usual temperature range: increased lattice scattering commonly raises resistivity. For fixed geometry, resistance follows the same trend. It is not a rule for every conducting material, and the next assigned semiconductor topic contrasts thermally generated carriers in semiconductors.</p>"
    }
  ],
  pageCoverage: [
    { document: "quick-revision", page: 45, status: "transcribed", sectionIds: ["charged-particles-in-fields", "instruments-and-gas-discharge", "photon-properties"], unresolved: [] },
    { document: "quick-revision", page: 46, status: "transcribed", sectionIds: ["photon-properties", "photoelectric-energy-balance", "stopping-potential-and-photocurrent", "uncertainty-and-orbit-limits", "compton-scattering"], unresolved: [] },
    { document: "quick-revision", page: 47, status: "transcribed", sectionIds: ["photoelectric-energy-balance", "stopping-potential-and-photocurrent", "photoelectric-frequency-changes", "compton-scattering", "xray-production-and-controls", "xray-properties-and-applications"], unresolved: [] },
    { document: "quick-revision", page: 48, status: "transcribed", sectionIds: ["xray-production-and-controls", "xray-spectra-and-cutoff", "xray-diffraction", "xray-attenuation"], unresolved: [] },
    { document: "quick-revision", page: 49, status: "transcribed", sectionIds: ["xray-properties-and-applications", "xray-spectra-and-cutoff", "xray-attenuation", "bohr-quantization-and-orbits", "bohr-energies-and-transitions"], unresolved: [] },
    { document: "quick-revision", page: 50, status: "transcribed", sectionIds: ["uncertainty-and-orbit-limits", "bohr-energies-and-transitions", "atomic-model-limits-and-splitting", "line-band-continuous-spectra", "hydrogen-spectral-series"], unresolved: [] },
    { document: "quick-revision", page: 51, status: "partial", sectionIds: ["bohr-energies-and-transitions", "hydrogen-spectral-series", "spectral-line-counting", "alpha-and-beta-decay"], unresolved: ["The third line-count formula, Delta n(Delta n - 1)/2 under 'Number of spectrum seen', does not define Delta n. It is unclear whether it means a count of levels or a difference of principal quantum numbers."] },
    { document: "quick-revision", page: 52, status: "transcribed", sectionIds: ["alpha-and-beta-decay", "gamma-and-radiation-comparison", "decay-families-and-neutron-excess", "radioactive-decay-and-lifetimes", "activity-and-units"], unresolved: [] },
    { document: "quick-revision", page: 53, status: "transcribed", sectionIds: ["xray-properties-and-applications", "radioactive-decay-and-lifetimes", "activity-and-units", "lead-and-radiation-detectors", "nuclear-size-and-pair-production", "mass-defect-packing-and-binding", "reactor-component-comparison"], unresolved: [] },
    { document: "quick-revision", page: 54, status: "transcribed", sectionIds: ["decay-families-and-neutron-excess", "nuclear-classification", "mass-defect-packing-and-binding"], unresolved: [] },
    { document: "quick-revision", page: 55, status: "partial", sectionIds: ["fusion-fission-and-source-numerics", "boundary-page-energy-bands"], unresolved: ["The quoted 24 MeV per fusion of deuterium has no complete reactants/products equation or reaction channel. The intended numerical claim cannot be assigned unambiguously to a fusion process."] }
  ],
  questions: [
    {
      id: "note-modern-physics-001", text: "An alpha particle of charge $+2e$ moves through a 60 V potential drop in a vacuum. What kinetic energy does it gain if other energy changes are negligible?",
      options: [{ key: "a", text: "30 eV" }, { key: "b", text: "60 eV" }, { key: "c", text: "120 eV" }, { key: "d", text: "240 eV" }],
      answer: "c", explanation: "Electric work is charge multiplied by the potential drop. A charge $2e$ moving through 60 V gains $2(60)=120$ eV. The positive particle loses electric potential energy and gains the same kinetic energy.",
      sectionId: "charged-particles-in-fields", source: { document: "quick-revision", page: 45 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-002", text: "A proton enters a uniform 0.20 T magnetic field perpendicularly at 400000 m/s. Using mass $1.67\\times10^{-27}$ kg and charge $1.60\\times10^{-19}$ C, estimate its path radius.",
      options: [{ key: "a", text: "2.09 cm" }, { key: "b", text: "4.18 cm" }, { key: "c", text: "8.35 cm" }, { key: "d", text: "1.04 cm" }],
      answer: "a", explanation: "Use $r=\\frac{mv}{qB}$. Substitution gives $\\frac{(1.67\\times10^{-27})(400000)}{(1.60\\times10^{-19})(0.20)}=0.020875$ m, or about 2.09 cm. The speed is low enough for the nonrelativistic formula.",
      sectionId: "charged-particles-in-fields", source: { document: "quick-revision", page: 45 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-003", text: "A charged particle enters a uniform magnetic field at 45 degrees with no electric field or other force. Which description is correct?",
      options: [{ key: "a", text: "A planar spiral with steadily increasing speed." }, { key: "b", text: "A circle with steadily decreasing kinetic energy." }, { key: "c", text: "A straight line with steadily increasing speed." }, { key: "d", text: "A helix with unchanged speed and kinetic energy." }],
      answer: "d", explanation: "Both parallel and perpendicular velocity components are nonzero. The perpendicular component rotates while the parallel component remains constant, producing a helix. Magnetic force is perpendicular to velocity and does no work.",
      sectionId: "charged-particles-in-fields", source: { document: "quick-revision", page: 45 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-004", text: "Which pairing preserves the distinction between the two reactor components in the checked notes?",
      options: [{ key: "a", text: "Cadmium moderator slows neutrons; graphite control rod absorbs them." }, { key: "b", text: "Graphite moderator slows neutrons; cadmium control rod absorbs them." }, { key: "c", text: "Graphite moderator creates neutrons; cadmium control rod accelerates them." }, { key: "d", text: "Cadmium moderator reflects photons; graphite control rod creates neutrons." }],
      answer: "b", explanation: "A moderator reduces neutron speed by scattering; graphite is a source example. Control-rod absorbers remove neutrons; cadmium and boron are the listed examples. Slowing and absorbing are different roles.",
      sectionId: "reactor-component-comparison", source: { document: "quick-revision", page: 53 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-005", text: "A photon has vacuum wavelength 620 nm. Using $hc=1240$ eV nm, what is its energy?",
      options: [{ key: "a", text: "2.00 eV" }, { key: "b", text: "1.00 eV" }, { key: "c", text: "4.00 eV" }, { key: "d", text: "8.00 eV" }],
      answer: "a", explanation: "Photon energy is $E=\\frac{hc}{\\lambda}=\\frac{1240}{620}=2.00$ eV. The wavelength unit nm cancels the nm in the supplied value of hc; a classical massive-particle kinetic-energy formula is not used.",
      sectionId: "photon-properties", source: { document: "quick-revision", page: 46 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-006", text: "Photons of energy 5.2 eV illuminate a surface with work function 2.2 eV. What stopping-potential magnitude is required in an ideal photoelectric experiment?",
      options: [{ key: "a", text: "2.2 V" }, { key: "b", text: "5.2 V" }, { key: "c", text: "3.0 V" }, { key: "d", text: "7.4 V" }],
      answer: "c", explanation: "Maximum electron kinetic energy is photon energy minus work function: $5.2-2.2=3.0$ eV. Since $K_{\\max}=eV_s$, an electron with that energy is stopped by a retarding-potential magnitude of 3.0 V.",
      sectionId: "stopping-potential-and-photocurrent", source: { document: "quick-revision", page: 46 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-007", text: "A surface of work function 2 eV initially receives 4 eV photons. The light frequency then doubles. What is the new maximum photoelectron kinetic energy?",
      options: [{ key: "a", text: "4 eV" }, { key: "b", text: "6 eV" }, { key: "c", text: "8 eV" }, { key: "d", text: "10 eV" }],
      answer: "b", explanation: "Doubling frequency doubles photon energy to 8 eV, but the work function stays 2 eV. New maximum kinetic energy is $8-2=6$ eV, greater than twice the original $4-2=2$ eV.",
      sectionId: "photoelectric-frequency-changes", source: { document: "quick-revision", page: 47 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-008", text: "Light initially has frequency $1.5\\nu_0$ for a surface of threshold frequency $\\nu_0$. What happens to ordinary single-photon photoemission if its frequency is halved?",
      options: [{ key: "a", text: "It continues with exactly half the original maximum energy." }, { key: "b", text: "It continues with exactly double the original maximum energy." }, { key: "c", text: "It continues with negative kinetic energy assigned to electrons." }, { key: "d", text: "It stops because the new frequency is below threshold." }],
      answer: "d", explanation: "The new frequency is $0.75\\nu_0$, which is below threshold. The energy-balance expression cannot be interpreted as a negative emitted-electron kinetic energy; no ordinary single-photon emission occurs.",
      sectionId: "photoelectric-frequency-changes", source: { document: "quick-revision", page: 47 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-009", text: "At fixed above-threshold frequency and unchanged collection efficiency, a photoelectric experiment doubles incident intensity. What changes?",
      options: [{ key: "a", text: "Stopping potential doubles; saturation current stays the same." }, { key: "b", text: "Saturation current doubles; stopping potential stays the same." }, { key: "c", text: "Both stopping potential and saturation current double." }, { key: "d", text: "Both stopping potential and saturation current stay the same." }],
      answer: "b", explanation: "At fixed photon frequency, twice the intensity supplies twice the photon rate and hence twice the collected-electron rate under the stated conditions. Each photon still has the same energy, so maximum kinetic energy and stopping potential are unchanged.",
      sectionId: "stopping-potential-and-photocurrent", source: { document: "quick-revision", page: 46 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-010", text: "Which photoelectric graph has physical slope $\\frac{h}{e}$ when frequency is on the horizontal axis?",
      options: [{ key: "a", text: "Maximum kinetic energy measured in joules." }, { key: "b", text: "Saturation current measured in amperes." }, { key: "c", text: "Work function measured in joules." }, { key: "d", text: "Stopping potential measured in volts." }],
      answer: "d", explanation: "From $V_s=\\frac{h}{e}(\\nu-\\nu_0)$, the stopping-potential slope is h divided by e. Maximum kinetic energy measured in joules has slope h, so the two graph labels cannot be interchanged.",
      sectionId: "stopping-potential-and-photocurrent", source: { document: "quick-revision", page: 47 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-011", text: "A quantum state is prepared with a smaller position uncertainty along one axis. What does Heisenberg's relation require about the minimum allowed momentum uncertainty along that axis?",
      options: [{ key: "a", text: "Its lower bound becomes larger." }, { key: "b", text: "Its lower bound becomes smaller." }, { key: "c", text: "It must become exactly zero." }, { key: "d", text: "It must equal the position uncertainty." }],
      answer: "a", explanation: "The product satisfies $\\Delta x\\,\\Delta p_x\\geq\\frac{\\hbar}{2}$. Reducing the position uncertainty raises the lower bound $\\frac{\\hbar}{2\\Delta x}$ for momentum uncertainty. The relation concerns precision in a state, not just poor instruments.",
      sectionId: "uncertainty-and-orbit-limits", source: { document: "quick-revision", page: 46 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-012", text: "An X-ray photon is backscattered by an initially stationary free electron. Taking the electron Compton wavelength as 2.43 pm, what wavelength increase occurs?",
      options: [{ key: "a", text: "1.22 pm" }, { key: "b", text: "2.43 pm" }, { key: "c", text: "4.86 pm" }, { key: "d", text: "9.72 pm" }],
      answer: "c", explanation: "Backscattering has angle 180 degrees and $1-\\cos180^\\circ=2$. The wavelength increase is therefore $2(2.43)=4.86$ pm. It is a shift added to the incident wavelength, not the entire final wavelength.",
      sectionId: "compton-scattering", source: { document: "quick-revision", page: 47 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-013", text: "Electrons accelerated from negligible initial energy through 25 kV strike an X-ray target. Using $hc=1240$ eV nm, what is the ideal minimum wavelength?",
      options: [{ key: "a", text: "0.4960 nm" }, { key: "b", text: "0.1240 nm" }, { key: "c", text: "0.0248 nm" }, { key: "d", text: "0.0496 nm" }],
      answer: "d", explanation: "Each electron acquires 25000 eV. At the endpoint one photon receives that energy, giving $\\lambda_{\\min}=\\frac{1240}{25000}=0.0496$ nm. Tube current does not set this ideal wavelength endpoint.",
      sectionId: "xray-spectra-and-cutoff", source: { document: "quick-revision", page: 49 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-014", text: "An illustrative X-ray tube operates at 10000 V and 0.002 A. If exactly 1% of its beam power becomes X-rays and the rest heats the target, what is the heating power?",
      options: [{ key: "a", text: "0.2 W" }, { key: "b", text: "19.8 W" }, { key: "c", text: "20.0 W" }, { key: "d", text: "198.0 W" }],
      answer: "b", explanation: "Input beam power is $VI=10000(0.002)=20$ W. The specified heat fraction is 0.99, so target heating is $20(0.99)=19.8$ W. The 1% is explicitly a given for this example, not a universal tube efficiency.",
      sectionId: "xray-production-and-controls", source: { document: "quick-revision", page: 47 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-015", text: "Tube current is increased while accelerating voltage and target remain fixed. What is the expected elementary X-ray-spectrum change?",
      options: [{ key: "a", text: "Intensity decreases and the cutoff wavelength increases." }, { key: "b", text: "Intensity stays fixed and the cutoff wavelength decreases." }, { key: "c", text: "Intensity increases and the cutoff wavelength stays fixed." }, { key: "d", text: "Intensity increases and the cutoff wavelength doubles." }],
      answer: "c", explanation: "More electrons striking the target per unit time increase output intensity. Their maximum energy remains eV because voltage is unchanged, so the ideal minimum wavelength hc divided by eV is unchanged.",
      sectionId: "xray-spectra-and-cutoff", source: { document: "quick-revision", page: 48 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-016", text: "Why do characteristic X-ray line energies change when the target element is changed?",
      options: [{ key: "a", text: "The target's electronic binding-energy differences change." }, { key: "b", text: "Every target forces photons to acquire its nuclear charge." }, { key: "c", text: "Photon rest mass becomes larger for a heavier target." }, { key: "d", text: "Tube current alone fixes the target's electronic levels." }],
      answer: "a", explanation: "Characteristic photons are emitted when electrons fill vacancies between target-specific electronic levels. These energy differences depend on atomic number and electronic structure, unlike the voltage-controlled bremsstrahlung cutoff.",
      sectionId: "xray-spectra-and-cutoff", source: { document: "quick-revision", page: 48 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-017", text: "A crystal has plane spacing 0.20 nm. For first-order diffraction of 0.20 nm X-rays, what is the Bragg angle measured from the planes?",
      options: [{ key: "a", text: "15 degrees" }, { key: "b", text: "45 degrees" }, { key: "c", text: "30 degrees" }, { key: "d", text: "60 degrees" }],
      answer: "c", explanation: "Bragg's law gives $\\sin\\theta=\\frac{n\\lambda}{2d}=\\frac{0.20}{0.40}=0.5$. Hence theta is 30 degrees. The full angle between incident and diffracted beam directions is 60 degrees, not the requested angle.",
      sectionId: "xray-diffraction", source: { document: "quick-revision", page: 48 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-018", text: "A monochromatic narrow X-ray beam passes through 6 mm of an absorber whose half-value thickness is 2 mm. What percentage of primary intensity remains?",
      options: [{ key: "a", text: "6.25%" }, { key: "b", text: "12.50%" }, { key: "c", text: "25.00%" }, { key: "d", text: "50.00%" }],
      answer: "b", explanation: "The beam passes through three half-value layers. The remaining fraction is $\\left(\\frac{1}{2}\\right)^3=\\frac{1}{8}=0.125$, or 12.5%. The assumed monochromatic narrow beam keeps the same attenuation law through the layers.",
      sectionId: "xray-attenuation", source: { document: "quick-revision", page: 49 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-019", text: "An isolated neutral metal emits electrons that escape when exposed to X-rays. With no replacement charge entering, what happens to the metal's net charge?",
      options: [{ key: "a", text: "It becomes negative because the photons are negative." }, { key: "b", text: "It stays neutral because X-rays contain no matter." }, { key: "c", text: "It becomes negative because protons leave first." }, { key: "d", text: "It becomes positive because electrons have left." }],
      answer: "d", explanation: "Loss of negatively charged electrons leaves a positive imbalance in the isolated metal. X-rays themselves are neutral; the charging mechanism is electron escape, not delivery of positively charged photons.",
      sectionId: "xray-properties-and-applications", source: { document: "quick-revision", page: 49 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-020", text: "What is the principal reason a medically prepared barium-sulfate suspension provides gastrointestinal X-ray contrast?",
      options: [{ key: "a", text: "It strongly attenuates X-rays relative to surrounding soft tissue." }, { key: "b", text: "It converts X-rays into an electric field that bends the beam." }, { key: "c", text: "It makes the patient's tissue emit only Balmer-series light." }, { key: "d", text: "It diffracts all X-rays into the same visible colour." }],
      answer: "a", explanation: "Barium-containing contrast material is radiopaque because it strongly attenuates the beam. The source's explanation in terms of diffraction and its description as a solution are misleading; the clinical preparation is a suspension.",
      sectionId: "xray-properties-and-applications", source: { document: "quick-revision", page: 49 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-021", text: "Using a hydrogen first-orbit radius of 0.53 angstrom, what radius does the Bohr model give for its third orbit?",
      options: [{ key: "a", text: "1.59 angstrom" }, { key: "b", text: "4.77 angstrom" }, { key: "c", text: "0.177 angstrom" }, { key: "d", text: "9.54 angstrom" }],
      answer: "b", explanation: "At fixed nuclear charge, Bohr radius scales as the square of the principal quantum number. Therefore $r_3=0.53(3^2)=4.77$ angstrom. Multiplying by only three would give the incorrect linear scaling.",
      sectionId: "bohr-quantization-and-orbits", source: { document: "quick-revision", page: 49 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-022", text: "With hydrogen energies $E_n=-\\frac{13.6}{n^2}$ eV, what is the total energy at $n=3$, relative to the ionization limit?",
      options: [{ key: "a", text: "-4.53 eV" }, { key: "b", text: "+1.51 eV" }, { key: "c", text: "-13.60 eV" }, { key: "d", text: "-1.51 eV" }],
      answer: "d", explanation: "Substitution gives $E_3=-\\frac{13.6}{9}\\approx-1.51$ eV. The negative sign indicates a bound state below the zero-energy ionization reference; rounding does not change that sign.",
      sectionId: "bohr-energies-and-transitions", source: { document: "quick-revision", page: 49 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-023", text: "A hydrogen atom makes an emission transition from $n=4$ to $n=2$. Using $E_n=-\\frac{13.6}{n^2}$ eV, what photon energy is emitted?",
      options: [{ key: "a", text: "2.55 eV" }, { key: "b", text: "3.40 eV" }, { key: "c", text: "0.85 eV" }, { key: "d", text: "4.25 eV" }],
      answer: "a", explanation: "The initial and final energies are -0.85 eV and -3.40 eV. The atom loses $(-0.85)-(-3.40)=2.55$ eV, which becomes photon energy. The emitted energy is a positive level difference.",
      sectionId: "bohr-energies-and-transitions", source: { document: "quick-revision", page: 50 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-024", text: "A Coulomb-bound Bohr orbit has total energy -3.4 eV. Which kinetic and potential energies are consistent with it?",
      options: [{ key: "a", text: "Kinetic -3.4 eV; potential 0 eV." }, { key: "b", text: "Kinetic 6.8 eV; potential -3.4 eV." }, { key: "c", text: "Kinetic 3.4 eV; potential -6.8 eV." }, { key: "d", text: "Kinetic -6.8 eV; potential 3.4 eV." }],
      answer: "c", explanation: "For the Coulomb orbit, $K=-E=3.4$ eV and $U=2E=-6.8$ eV. Their sum is -3.4 eV, and kinetic energy is positive. The relations reproduce the source's P, T and K mnemonic with correct signs.",
      sectionId: "bohr-energies-and-transitions", source: { document: "quick-revision", page: 51 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-025", text: "What follows by combining de Broglie's $\\lambda=\\frac{h}{p}$ with a standing-wave condition $2\\pi r=n\\lambda$?",
      options: [{ key: "a", text: "The orbital angular momentum must be zero." }, { key: "b", text: "The electron's momentum must be independent of wavelength." }, { key: "c", text: "The electron must have a positive bound-state total energy." }, { key: "d", text: "The angular momentum satisfies $pr=n\\hbar$." }],
      answer: "d", explanation: "Substitution gives $2\\pi r=\\frac{nh}{p}$, so $pr=\\frac{nh}{2\\pi}=n\\hbar$. The matter-wave condition reproduces Bohr's quantization, correcting the source's blanket claim of incompatibility.",
      sectionId: "atomic-model-limits-and-splitting", source: { document: "quick-revision", page: 50 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-026", text: "Which pairing correctly identifies the field responsible for spectral-line splitting?",
      options: [{ key: "a", text: "Stark: electric; Zeeman: magnetic." }, { key: "b", text: "Stark: magnetic; Zeeman: electric." }, { key: "c", text: "Stark: gravitational; Zeeman: electric." }, { key: "d", text: "Stark: electric; Zeeman: gravitational." }],
      answer: "a", explanation: "The Stark effect is electric-field splitting or shifting of atomic levels, while the Zeeman effect is magnetic-field splitting or shifting. These refer to energy levels, not direct Lorentz deflection of the emitted photon.",
      sectionId: "atomic-model-limits-and-splitting", source: { document: "quick-revision", page: 50 }, cognitive: "recall"
    },
    {
      id: "note-modern-physics-027", text: "A hydrogen emission ends at $n=3$ after starting at $n=5$. Which series and region describe it?",
      options: [{ key: "a", text: "Lyman series, ultraviolet." }, { key: "b", text: "Balmer series, visible." }, { key: "c", text: "Paschen series, infrared." }, { key: "d", text: "Brackett series, infrared." }],
      answer: "c", explanation: "A hydrogen series is identified by its lower level. A transition ending at n = 3 belongs to Paschen and lies in the infrared. The initial n = 5 does not make it a Pfund transition.",
      sectionId: "hydrogen-spectral-series", source: { document: "quick-revision", page: 50 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-028", text: "In the elementary gross-level model, an ensemble can explore all downward transitions among five distinct levels. Ignoring selection restrictions and coincident frequencies, what is the maximum number of distinct level-pair lines?",
      options: [{ key: "a", text: "4" }, { key: "b", text: "10" }, { key: "c", text: "15" }, { key: "d", text: "20" }],
      answer: "b", explanation: "Count unordered pairs of levels: $\\frac{5(5-1)}{2}=10$. This counts possible transition energies for the ensemble. It is not the number of photons a single atom must release on one descent.",
      sectionId: "spectral-line-counting", source: { document: "quick-revision", page: 51 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-029", text: "All atoms begin in the ground state. Broadband light can drive direct absorption to levels 2, 3, 4 and 5 in an elementary model. How many absorption lines are possible from that initial state?",
      options: [{ key: "a", text: "4" }, { key: "b", text: "5" }, { key: "c", text: "10" }, { key: "d", text: "15" }],
      answer: "a", explanation: "There are four allowed destination levels from the one populated initial level: 1 to 2, 1 to 3, 1 to 4 and 1 to 5. The result is n minus one, not the all-pairs emission count.",
      sectionId: "spectral-line-counting", source: { document: "quick-revision", page: 51 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-030", text: "A nucleus with mass number 226 and atomic number 88 emits one alpha particle. What are the daughter's mass number and atomic number?",
      options: [{ key: "a", text: "222 and 88" }, { key: "b", text: "226 and 86" }, { key: "c", text: "222 and 86" }, { key: "d", text: "224 and 87" }],
      answer: "c", explanation: "An alpha particle contains four nucleons, including two protons. Conservation gives daughter mass number $226-4=222$ and atomic number $88-2=86$; both counts change.",
      sectionId: "alpha-and-beta-decay", source: { document: "quick-revision", page: 51 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-031", text: "A nucleus with $A=40$ and $Z=19$ undergoes one beta-minus decay. How many protons and neutrons does its daughter contain?",
      options: [{ key: "a", text: "19 protons and 21 neutrons." }, { key: "b", text: "18 protons and 22 neutrons." }, { key: "c", text: "20 protons and 21 neutrons." }, { key: "d", text: "20 protons and 20 neutrons." }],
      answer: "d", explanation: "Beta-minus decay turns a neutron into a proton while keeping A = 40. Atomic number rises to 20, leaving $40-20=20$ neutrons. The emitted electron is created in the nuclear process rather than subtracted from A.",
      sectionId: "alpha-and-beta-decay", source: { document: "quick-revision", page: 51 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-032", text: "Relative to an initial nucleus with $A=238$ and $Z=92$, what results after one alpha and two beta-minus decays?",
      options: [{ key: "a", text: "$A=234$, $Z=88$: a different element." }, { key: "b", text: "$A=234$, $Z=92$: an isotope of the initial element." }, { key: "c", text: "$A=238$, $Z=92$: the original nuclide again." }, { key: "d", text: "$A=238$, $Z=94$: an isobar of the initial nuclide." }],
      answer: "b", explanation: "Alpha decay changes A by -4 and Z by -2. Two beta-minus decays add two to Z without changing A, so the final values are 234 and 92. Equal Z but different A defines isotopes.",
      sectionId: "decay-families-and-neutron-excess", source: { document: "quick-revision", page: 52 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-033", text: "An excited nucleus emits a gamma photon without another nuclear reaction. Which statement is correct?",
      options: [{ key: "a", text: "Mass number decreases by one and atomic number is unchanged." }, { key: "b", text: "Atomic number decreases by one and mass number is unchanged." }, { key: "c", text: "Both nuclear counts stay fixed while excitation energy decreases." }, { key: "d", text: "Both nuclear counts and actual rest mass necessarily stay fixed." }],
      answer: "c", explanation: "Gamma emission changes excitation, not proton or neutron numbers, so A and Z stay fixed. Actual rest mass is lower after energy is released; unchanged mass number does not imply unchanged mass.",
      sectionId: "gamma-and-radiation-comparison", source: { document: "quick-revision", page: 52 }, cognitive: "understanding"
    },
    {
      id: "note-modern-physics-034", text: "A radionuclide has half-life 6.93 hours. Using $\\ln2=0.693$, what is its mean life?",
      options: [{ key: "a", text: "6.93 hours" }, { key: "b", text: "10.00 hours" }, { key: "c", text: "9.80 hours" }, { key: "d", text: "13.86 hours" }],
      answer: "b", explanation: "Mean life is half-life divided by ln 2, giving $\\frac{6.93}{0.693}=10.00$ hours. The roughly 9.80-hour distractor uses the source's incorrect square-root-of-two multiplier.",
      sectionId: "radioactive-decay-and-lifetimes", source: { document: "quick-revision", page: 52 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-035", text: "Initially 24 mg of one radioactive parent nuclide is present, with half-life 3 hours. How much of that parent remains after 9 hours, with no new parent produced?",
      options: [{ key: "a", text: "3 mg" }, { key: "b", text: "6 mg" }, { key: "c", text: "8 mg" }, { key: "d", text: "12 mg" }],
      answer: "a", explanation: "Nine hours equals three half-lives. Parent mass follows the remaining-parent count, so $24\\left(\\frac{1}{2}\\right)^3=3$ mg remains. The daughter products can still be present but are not part of the requested parent mass.",
      sectionId: "radioactive-decay-and-lifetimes", source: { document: "quick-revision", page: 53 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-036", text: "A sample has $5.0\\times10^8$ undecayed nuclei and decay constant $2.0\\times10^{-4}$ per second. What is its positive activity?",
      options: [{ key: "a", text: "10 kBq" }, { key: "b", text: "25 kBq" }, { key: "c", text: "50 kBq" }, { key: "d", text: "100 kBq" }],
      answer: "d", explanation: "Activity is $\\lambda N=(2.0\\times10^{-4})(5.0\\times10^8)=1.0\\times10^5$ decays per second, or 100 kBq. The derivative of the remaining population is negative, but activity is its positive magnitude.",
      sectionId: "activity-and-units", source: { document: "quick-revision", page: 53 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-037", text: "Convert an activity of 0.002 curie to megabecquerels using the definition of the curie.",
      options: [{ key: "a", text: "37 MBq" }, { key: "b", text: "74 MBq" }, { key: "c", text: "148 MBq" }, { key: "d", text: "740 MBq" }],
      answer: "b", explanation: "One curie is $3.7\\times10^{10}$ Bq. Therefore 0.002 Ci is $7.4\\times10^7$ Bq. Dividing by one million becquerels per megabecquerel gives 74 MBq.",
      sectionId: "activity-and-units", source: { document: "quick-revision", page: 52 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-038", text: "Oxygen-16 has atomic number 8 and carbon-14 has atomic number 6. What relationship do these two nuclides illustrate?",
      options: [{ key: "a", text: "Isotones: equal neutron counts." }, { key: "b", text: "Isotopes: equal proton counts." }, { key: "c", text: "Isobars: equal mass numbers." }, { key: "d", text: "Isodiaphers: equal neutron excesses." }],
      answer: "a", explanation: "Oxygen-16 has $16-8=8$ neutrons, and carbon-14 has $14-6=8$ neutrons. They therefore are isotones. Their neutron excesses are 0 and 2, so they are not isodiaphers.",
      sectionId: "nuclear-classification", source: { document: "quick-revision", page: 54 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-039", text: "Use proton mass 1.0073 u, neutron mass 1.0087 u and a bare deuteron mass of 2.0136 u. With $1\\,\\mathrm{u}c^2=931$ MeV, estimate the deuteron's binding energy.",
      options: [{ key: "a", text: "0.93 MeV" }, { key: "b", text: "1.12 MeV" }, { key: "c", text: "4.47 MeV" }, { key: "d", text: "2.23 MeV" }],
      answer: "d", explanation: "The deuteron contains one proton and one neutron. Its mass defect from the stated rounded masses is $1.0073+1.0087-2.0136=0.0024$ u. Multiplying by 931 gives 2.2344 MeV, approximately 2.23 MeV. The given mass is nuclear, not atomic.",
      sectionId: "mass-defect-packing-and-binding", source: { document: "quick-revision", page: 54 }, cognitive: "application"
    },
    {
      id: "note-modern-physics-040", text: "Which comparison correctly distinguishes the basic processes without treating their quoted energies as universal constants?",
      options: [{ key: "a", text: "Fusion splits heavy nuclei; fission joins light nuclei." }, { key: "b", text: "Fusion and fission both mean emission of orbital electrons." }, { key: "c", text: "Fusion joins light nuclei; fission splits heavy nuclei." }, { key: "d", text: "Fusion and fission both mean reflection of gamma photons." }],
      answer: "c", explanation: "Fusion combines light nuclei into heavier products, while fission splits a heavy nucleus. Energy release depends on the full reactants and products, so an unspecified fusion event cannot automatically be assigned the source's 24 MeV value.",
      sectionId: "fusion-fission-and-source-numerics", source: { document: "quick-revision", page: 55 }, cognitive: "understanding"
    }
  ]
};