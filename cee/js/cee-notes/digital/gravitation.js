window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["gravitation"] = {
  id: "gravitation",
  subject: "Physics",
  title: "Gravitation and satellites",
  sections: [
    {
      id: "cosmic-speeds",
      title: "The three cosmic speeds",
      sources: [{ document: "quick-revision", page: 10 }],
      html: "<p>The source distinguishes three launch-speed scales. These are speeds relative to a specified reference frame, not universal constants for every planet or launch altitude.</p><table><thead><tr><th>Speed</th><th>Meaning and Earth value</th></tr></thead><tbody><tr><td>First cosmic speed</td><td>The circular orbital speed close to Earth's surface, neglecting atmosphere and obstacles: approximately $7.9\\,\\mathrm{km\\,s^{-1}}$, commonly rounded to $8\\,\\mathrm{km\\,s^{-1}}$.</td></tr><tr><td>Second cosmic speed</td><td>The minimum speed for escape from an isolated, nonrotating Earth at its surface: approximately $11.2\\,\\mathrm{km\\,s^{-1}}$.</td></tr><tr><td>Third cosmic speed</td><td>The ideal minimum Earth-surface launch speed for escaping the solar system with a favorable prograde trajectory: approximately $16.7\\,\\mathrm{km\\,s^{-1}}$, rounded to $17\\,\\mathrm{km\\,s^{-1}}$ in the source.</td></tr></tbody></table><p><strong>Source correction:</strong> the later special-note value $8.1\\,\\mathrm{km\\,s^{-1}}$ is not a separate standard orbital speed. With Earth's usual radius and mass, the surface circular value is about $7.9\\,\\mathrm{km\\,s^{-1}}$ and decreases with altitude. The third cosmic value uses Earth's orbital motion around the Sun; it is not the Sun-only escape speed at Earth's orbital radius, which is about $42.1\\,\\mathrm{km\\,s^{-1}}$. Atmospheric loss, launch direction and Earth's rotation alter practical launch requirements.</p>"
    },
    {
      id: "potential-energy",
      title: "Gravitational potential energy and height",
      sources: [{ document: "quick-revision", page: 10 }, { document: "quick-revision", page: 11 }],
      html: "<p>For a test mass $m$ outside a spherically symmetric body of mass $M$, choose zero potential energy at infinity. Then $U(r)=-\\frac{GMm}{r}$, where $r$ is measured from the centre. The energy is negative at any finite exterior radius and approaches its maximum value, zero, at infinity. Gravitational force is conservative: its work depends only on the initial and final positions, not on the path.</p><p>For ascent from the surface of radius $R$ to height $h$, $\\Delta U=GMm\\left(\\frac{1}{R}-\\frac{1}{R+h}\\right)$. Using surface gravity $g=\\frac{GM}{R^2}$ gives the source formula $\\Delta U=mgh\\frac{R}{R+h}$. Only when $h\\ll R$ does this reduce to $mgh$. Work done by gravity is $-\\Delta U$; quasistatic external work against gravity is $+\\Delta U$.</p><p>The source lists centre, surface and inside under a statement that gravitational potential energy is constant. <strong>Source correction:</strong> equality throughout the interior and at the surface is true for a thin uniform spherical shell: $U=-\\frac{GMm}{R}$ everywhere inside, including the centre, because the interior gravitational field is zero. It is not true for a uniform solid sphere, whose interior energy is $U(r)=-\\frac{GMm}{2R}\\left(3-\\frac{r^2}{R^2}\\right)$. For that sphere, $U(0)=-\\frac{3GMm}{2R}$ whereas $U(R)=-\\frac{GMm}{R}$. All points on a given spherical equipotential have the same energy for a fixed test mass. The source does not identify which mass distribution its list intended; this missing context is recorded in page coverage.</p>"
    },
    {
      id: "orbital-and-escape",
      title: "Circular orbits, escape and launch energy",
      sources: [{ document: "quick-revision", page: 10 }, { document: "quick-revision", page: 11 }],
      html: "<p>In a circular orbit, gravity provides centripetal force: $\\frac{mv_c^2}{r}=\\frac{GMm}{r^2}$. Therefore $v_c=\\sqrt{\\frac{GM}{r}}$. Here $r=R+h$, not altitude alone. The orbiting mass cancels. Circular-orbit kinetic energy is $K_c=\\frac{GMm}{2r}$ and total energy is $E_c=-\\frac{GMm}{2r}$.</p><p>Escape requires total mechanical energy at least zero when $U(\\infty)=0$. At the surface, $\\frac{1}{2}mv_e^2=\\frac{GMm}{R}$, hence $v_e=\\sqrt{\\frac{2GM}{R}}=\\sqrt{2gR}$. At another exterior radius replace $R$ by $r$. At the same radius $v_e=\\sqrt{2}v_c$.</p><ul><li>Escape speed is independent of the projectile's mass, diameter and physical length or height in the point-particle, vacuum approximation. It does depend on its starting altitude through $r$.</li><li>The energy threshold is independent of the outward launch angle in the ideal central field, provided the trajectory does not intersect the planet. A downward launch through a solid planet is not a realizable escape path.</li><li>A body falling from rest at infinity reaches Earth's surface at the same speed $11.2\\,\\mathrm{km\\,s^{-1}}$, neglecting air resistance and other celestial bodies. This is the time reverse of marginal escape.</li></ul><p><strong>Source correction:</strong> increasing speed by $100(\\sqrt{2}-1)\\%\\approx41.4\\%$, or increasing kinetic energy by $100\\%$, takes a body from circular-orbit speed to escape speed at the same radius. It is not enough to increase Earth's present rotational speed by $41.4\\%$. The original bullet mistakenly labels the initial motion as Earth's rotation.</p>"
    },
    {
      id: "launch-cases",
      title: "Sub-escape launch, excess speed and orbit shape",
      sources: [{ document: "quick-revision", page: 10 }, { document: "quick-revision", page: 11 }],
      html: "<p>The source places $h=\\frac{R}{n^2-1}$ and $v=\\sqrt{n^2-1}v_e$ together under 'After escape velocity', without defining $n$. They describe different initial speeds, not one trajectory. Their valid conditions can be established separately by conservation of energy.</p><ul><li>For a radial launch from the surface with speed $u=\\frac{v_e}{n}$ and $n&gt;1$, the body stops momentarily at its maximum height. Equating initial energy to $-\\frac{GMm}{R+h}$ gives $h=\\frac{Ru^2}{v_e^2-u^2}=\\frac{R}{n^2-1}$.</li><li>For a launch with $u=nv_e$ and $n&gt;1$, there is no finite maximum height in the isolated-body model. At infinity, $v_\\infty=\\sqrt{u^2-v_e^2}=v_e\\sqrt{n^2-1}$.</li><li>For $u=v_e$, the limiting speed at infinity is zero. For a radial sub-escape launch the body returns; nonradial negative-energy motion can be an ellipse if it avoids the surface.</li></ul><p><strong>Source correction:</strong> the source's comparison of K.E. with P.E. must use the magnitude $|U|$, because gravitational potential energy itself is negative. $K=|U|$ means $E=0$ and a parabolic escape orbit for nonzero angular momentum. $K&lt;|U|$ means $E&lt;0$ and bound motion, not automatically a stable circular orbit 'at some height'. $K&gt;|U|$ means positive-energy escape, hyperbolic for nonzero angular momentum. Purely radial motion is the degenerate case. The missing original definition of $n$ remains a source-context gap, even though the two corrected cases are fully specified here.</p>"
    },
    {
      id: "earth-rotation",
      title: "Earth's rotation, polar ice and apparent gravity",
      sources: [{ document: "quick-revision", page: 10 }, { document: "quick-revision", page: 11 }],
      html: "<p>In the spherical-Earth approximation, equatorial apparent gravity for a body at rest on the surface is $g_{\\mathrm{eff}}=g-\\omega^2R$. If rotation stops while the mass distribution and radius are held fixed, apparent gravity at the equator increases by $R\\omega^2$. Gravity itself has not been switched off or strengthened; the centripetal requirement has changed.</p><p>The source quotes pole-to-equator gravity differences of about $0.018\\,\\mathrm{m\\,s^{-2}}$ from shape and $0.034\\,\\mathrm{m\\,s^{-2}}$ from rotation. These are an approximate illustrative decomposition of a difference near $0.052\\,\\mathrm{m\\,s^{-2}}$, not universal independent constants. Real Earth's shape and gravitational mass distribution must be treated together.</p><p>Equatorial apparent weight reaches zero when $\\omega_{\\mathrm{crit}}=\\sqrt{\\frac{g}{R}}$, about $\\frac{1}{800}\\,\\mathrm{rad\\,s^{-1}}$ or roughly 17 times Earth's present angular speed. The corresponding period is about 84 minutes. <strong>Source correction:</strong> the source's 'fly off' means loss of normal contact at this threshold. Surface tangential speed then equals circular speed, not escape speed; weightlessness alone does not imply escape to infinity.</p><table><thead><tr><th>Polar ice redistributed away from the spin axis</th><th>Change</th></tr></thead><tbody><tr><td>Moment of inertia about the spin axis</td><td>Increases</td></tr><tr><td>Angular speed</td><td>Decreases</td></tr><tr><td>Rotation period</td><td>Increases</td></tr><tr><td>Length of the day</td><td>Increases</td></tr></tbody></table><p>The table assumes the meltwater moves to greater distances from the axis and external torque is negligible. Conservation of $I\\omega$ then gives the stated changes; melting without such redistribution is not sufficient by itself.</p><p><strong>Source correction:</strong> 'rotational speed is more at night because gravity of the Moon is added' is not a valid general law. The Moon can be above the horizon during day or night. Lunar tidal torque can exchange angular momentum with Earth and causes a long-term slowing of its spin; it does not establish a universal night-time increase.</p>"
    },
    {
      id: "satellite-behaviour",
      title: "Drag, geostationary communication and solar orbits",
      sources: [{ document: "quick-revision", page: 11 }],
      html: "<p><strong>Source clarification:</strong> air friction opposes a satellite's motion and removes mechanical energy. It does not directly accelerate the satellite along its velocity. During slow decay through nearly circular orbits, however, the orbital radius decreases and the new circular speed $v_c=\\sqrt{\\frac{GM}{r}}$ increases. Total energy becomes more negative while kinetic energy rises and gravitational potential energy falls by a greater amount. This is the restricted meaning of the source's 'air friction: increase velocity'.</p><ul><li>A geostationary satellite moves from west to east, in the same sense as Earth's rotation. To remain over one longitude, its orbit must also be circular and equatorial, with the same angular period as Earth: one sidereal day, about 23 h 56 min. Merely launching eastward does not make an orbit geostationary.</li><li>The source's radio communication time of about $\\frac{1}{4}$ second refers to one ground-to-geostationary-satellite-to-ground relay. With an altitude near $35{,}800\\,\\mathrm{km}$, the ideal shortest two-leg distance is about $71{,}600\\,\\mathrm{km}$ and the propagation time is about $0.239\\,\\mathrm{s}$. Slant geometry and processing increase it; a return reply takes approximately twice the propagation time.</li><li>Three appropriately spaced geostationary satellites, roughly $120^\\circ$ apart in longitude, are the familiar near-global communication arrangement. <strong>Source correction:</strong> 'worldwide' is not literally every point on Earth: polar regions and locations with inadequate elevation angles are excluded. There is no universal minimum of three for every possible satellite network.</li><li>In an elliptical solar orbit, angular speed about the Sun increases nearer the Sun. With negligible external torque, $mr^2\\dot{\\theta}$ is constant, so $\\dot{\\theta}\\propto\\frac{1}{r^2}$. This is orbital angular speed, not the body's spin rate.</li></ul>"
    },
    {
      id: "weight-and-balances",
      title: "Apparent weight, balances and buoyancy",
      sources: [{ document: "quick-revision", page: 11 }],
      html: "<p>Apparent weight is the contact or supporting force measured by a scale. A spring balance measures tension or supporting force; it reads zero when both the balance and object are freely falling together, even though gravitational attraction still acts. A physical or beam balance compares gravitational masses by comparing their weights in the same nonzero gravitational field, so the common factor $g$ cancels. An ordinary gravitational beam balance does not work normally in ideal free fall.</p><p>The source states that a body gains weight when moving west. For motion along the equator on a constrained circular path of radius $R$, let westward speed relative to the ground be $v$. The inertial tangential speed is $\\omega R-v$ and the radial supporting force is $N=m\\left[g-\\frac{(\\omega R-v)^2}{R}\\right]$. Relative to rest on Earth, $\\Delta N=m\\left(2\\omega v-\\frac{v^2}{R}\\right)$. Thus apparent weight increases for $0&lt;v&lt;2\\omega R$, with a maximum at $v=\\omega R$. <strong>Source clarification:</strong> westward motion at arbitrarily large speed does not always increase weight. The condition and reference frame matter; mass itself does not increase.</p><p>Archimedes' upthrust in a fluid at rest is $F_b=\\rho_{\\mathrm{fluid}}V_{\\mathrm{displaced}}g$, so changing local gravity changes the buoyant force when density and displaced volume are held fixed. In a uniformly accelerating frame, use the effective gravity that establishes the fluid's pressure gradient. In ideal common free fall that gradient, and ordinary gravity-driven buoyancy, vanish apart from tidal effects.</p><p><strong>Source correction:</strong> the claim that more matter is obtained for a 'kg weight' in a satellite confuses force and mass. If a nonzero fixed force reading $W$ is used where effective gravity is smaller, $m=\\frac{W}{g_{\\mathrm{eff}}}$ is larger. But a kilogram of mass is unchanged everywhere, and no finite mass can produce a nonzero ordinary spring-balance weight in ideal orbital free fall. A kilogram-force is a fixed force unit, approximately $9.80665\\,\\mathrm{N}$, not the location-dependent weight of every 1 kg object.</p>"
    }
  ],
  pageCoverage: [
    {
      document: "quick-revision", page: 10, status: "partial",
      sectionIds: ["cosmic-speeds", "potential-energy", "orbital-and-escape", "launch-cases", "earth-rotation"],
      unresolved: [
        "Middle of page, 'After escape velocity': both printed formulas are legible, but n and the respective launch speeds are not defined. The source's intended shared context cannot be recovered; separately derived, explicitly conditional cases are supplied in launch-cases.",
        "Lower half, immediately below the polar-ice table: the 'potential energy is constant' list names centre, surface and inside but never identifies a shell or solid sphere. The intended mass distribution is unresolved; potential-energy preserves the distinction and gives both scientifically correct cases."
      ]
    },
    {
      document: "quick-revision", page: 11, status: "transcribed",
      sectionIds: ["potential-energy", "orbital-and-escape", "launch-cases", "earth-rotation", "satellite-behaviour", "weight-and-balances"],
      unresolved: []
    }
  ],
  questions: [
    {
      id: "note-gravitation-001", text: "A table lists Earth's first, second and third cosmic speeds. Which entry describes the second cosmic speed?",
      options: [{ key: "a", text: "Surface escape speed, about $11.2\\,\\mathrm{km\\,s^{-1}}$" }, { key: "b", text: "Surface circular speed, about $7.9\\,\\mathrm{km\\,s^{-1}}$" }, { key: "c", text: "Surface solar-system escape speed, about $16.7\\,\\mathrm{km\\,s^{-1}}$" }, { key: "d", text: "Solar escape speed at Earth, about $42.1\\,\\mathrm{km\\,s^{-1}}$" }],
      answer: "a", explanation: "The second cosmic speed is the ideal minimum speed to escape Earth's gravity from its surface. The first is circular-orbit speed; the third includes escaping the solar system using a favorable Earth launch. The reference frame and starting point distinguish the values.",
      sectionId: "cosmic-speeds", source: { document: "quick-revision", page: 10 }, cognitive: "recall"
    },
    {
      id: "note-gravitation-002", text: "A mass is lifted quasistatically from Earth's surface to height $h=R$. With surface gravity $g$, what is its gain in gravitational potential energy?",
      options: [{ key: "a", text: "$mgR$" }, { key: "b", text: "$\\frac{mgR}{2}$" }, { key: "c", text: "$2mgR$" }, { key: "d", text: "$\\frac{mgR}{4}$" }],
      answer: "b", explanation: "Use the finite-height formula, not constant gravity: $\\Delta U=mgh\\frac{R}{R+h}$. Setting $h=R$ gives $\\Delta U=mgR\\frac{R}{2R}=\\frac{mgR}{2}$. Gravity weakens during ascent, so $mgR$ would overestimate the work.",
      sectionId: "potential-energy", source: { document: "quick-revision", page: 10 }, cognitive: "application"
    },
    {
      id: "note-gravitation-003", text: "Two circular satellite orbits around the same planet have radii $r$ and $9r$. What is the outer satellite's speed divided by the inner satellite's speed?",
      options: [{ key: "a", text: "$9$" }, { key: "b", text: "$\\frac{1}{9}$" }, { key: "c", text: "$\\frac{1}{3}$" }, { key: "d", text: "$3$" }],
      answer: "c", explanation: "Circular speed is $v_c=\\sqrt{\\frac{GM}{r}}$. Therefore $\\frac{v_{\\mathrm{outer}}}{v_{\\mathrm{inner}}}=\\sqrt{\\frac{r}{9r}}=\\frac{1}{3}$. Satellite mass does not enter this result.",
      sectionId: "orbital-and-escape", source: { document: "quick-revision", page: 10 }, cognitive: "application"
    },
    {
      id: "note-gravitation-004", text: "A spacecraft moves in a circular orbit at $6.0\\,\\mathrm{km\\,s^{-1}}$. What speed must it reach instantaneously at the same radius for marginal escape?",
      options: [{ key: "a", text: "$6.00\\,\\mathrm{km\\,s^{-1}}$" }, { key: "b", text: "$12.0\\,\\mathrm{km\\,s^{-1}}$" }, { key: "c", text: "$7.35\\,\\mathrm{km\\,s^{-1}}$" }, { key: "d", text: "$8.49\\,\\mathrm{km\\,s^{-1}}$" }],
      answer: "d", explanation: "At a fixed radius, escape speed is $\\sqrt{2}$ times circular speed. Thus $v_e=6.0\\sqrt{2}=8.485\\ldots\\,\\mathrm{km\\,s^{-1}}$. This is a 41.4% speed increase and doubles kinetic energy; it does not double speed.",
      sectionId: "orbital-and-escape", source: { document: "quick-revision", page: 11 }, cognitive: "application"
    },
    {
      id: "note-gravitation-005", text: "At one location outside a nonrotating planet, which change leaves the ideal vacuum escape speed unchanged?",
      options: [{ key: "a", text: "Replacing the probe by one with twice its mass" }, { key: "b", text: "Doubling the planet's mass at fixed radius" }, { key: "c", text: "Doubling the probe's distance from the centre" }, { key: "d", text: "Halving the planet's mass at fixed radius" }],
      answer: "a", explanation: "The probe mass cancels between $\\frac{1}{2}mv_e^2$ and $\\frac{GMm}{r}$, leaving $v_e=\\sqrt{\\frac{2GM}{r}}$. Changing the central mass or starting radius changes escape speed; changing only the probe mass does not.",
      sectionId: "orbital-and-escape", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-006", text: "A meteoroid starts with negligible speed very far from an isolated Earth. Ignoring atmosphere, what speed does it approach at Earth's surface?",
      options: [{ key: "a", text: "$7.9\\,\\mathrm{km\\,s^{-1}}$" }, { key: "b", text: "$11.2\\,\\mathrm{km\\,s^{-1}}$" }, { key: "c", text: "$16.7\\,\\mathrm{km\\,s^{-1}}$" }, { key: "d", text: "$5.6\\,\\mathrm{km\\,s^{-1}}$" }],
      answer: "b", explanation: "Initial total energy is approximately zero. At the surface, $\\frac{1}{2}mv^2-\\frac{GMm}{R}=0$, so $v=\\sqrt{\\frac{2GM}{R}}$, Earth's surface escape speed. Atmospheric drag or nonzero initial speed would change the answer.",
      sectionId: "orbital-and-escape", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-007", text: "A body outside a spherical planet has nonzero angular momentum and kinetic energy equal to the magnitude of its gravitational potential energy. If it avoids the surface, what is its trajectory type?",
      options: [{ key: "a", text: "A circular orbit with negative total energy" }, { key: "b", text: "An elliptical orbit with negative total energy" }, { key: "c", text: "A parabolic orbit with zero total energy" }, { key: "d", text: "A hyperbolic orbit with positive total energy" }],
      answer: "c", explanation: "Because $U$ is negative, $K=|U|$ implies $E=K+U=0$. Zero-energy Kepler motion with nonzero angular momentum is parabolic and is the boundary between bound ellipses and positive-energy hyperbolic escape.",
      sectionId: "launch-cases", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-008", text: "Using $U(\\infty)=0$, a mass has $U=-24\\,\\mathrm{MJ}$ at radius $r$. What is its potential energy at radius $3r$ around the same central body?",
      options: [{ key: "a", text: "$-72\\,\\mathrm{MJ}$" }, { key: "b", text: "$24\\,\\mathrm{MJ}$" }, { key: "c", text: "$-216\\,\\mathrm{MJ}$" }, { key: "d", text: "$-8\\,\\mathrm{MJ}$" }],
      answer: "d", explanation: "For exterior spherical gravity, $U=-\\frac{GMm}{r}$. Tripling radius divides the negative energy by three: $U(3r)=\\frac{-24}{3}=-8\\,\\mathrm{MJ}$. The energy rises toward zero without becoming positive.",
      sectionId: "potential-energy", source: { document: "quick-revision", page: 11 }, cognitive: "application"
    },
    {
      id: "note-gravitation-009", text: "Earth's moment of inertia increases by 0.20% as mass is redistributed, with negligible external torque. What happens to its rotation period?",
      options: [{ key: "a", text: "It increases by 0.20%." }, { key: "b", text: "It decreases by 0.20%." }, { key: "c", text: "It increases by 0.40%." }, { key: "d", text: "It remains unchanged." }],
      answer: "a", explanation: "Angular momentum $I\\omega$ is conserved and $T=\\frac{2\\pi}{\\omega}$, so $T$ is directly proportional to $I$. Therefore $\\frac{T_2}{T_1}=\\frac{I_2}{I_1}=1.002$: the period, and hence day length, increases by 0.20%.",
      sectionId: "earth-rotation", source: { document: "quick-revision", page: 10 }, cognitive: "application"
    },
    {
      id: "note-gravitation-010", text: "Earth's rotation is imagined to stop without changing its radius or mass distribution. By how much does equatorial apparent gravitational acceleration increase?",
      options: [{ key: "a", text: "$\\frac{\\omega^2R}{2}$" }, { key: "b", text: "$\\omega^2R$" }, { key: "c", text: "$2\\omega^2R$" }, { key: "d", text: "$\\omega R$" }],
      answer: "b", explanation: "Initially the surface support corresponds to $g_{\\mathrm{eff}}=g-\\omega^2R$. With rotation absent it becomes $g$, so the increase is $\\omega^2R$. The result concerns apparent gravity, with the actual gravitational field held fixed.",
      sectionId: "earth-rotation", source: { document: "quick-revision", page: 11 }, cognitive: "recall"
    },
    {
      id: "note-gravitation-011", text: "On a spherical planet, the equatorial surface just becomes weightless when $g=10\\,\\mathrm{m\\,s^{-2}}$ and $R=4.0\\times10^6\\,\\mathrm{m}$. What is the critical angular speed?",
      options: [{ key: "a", text: "$2.50\\times10^{-6}\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "b", text: "$5.00\\times10^{-3}\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "c", text: "$1.58\\times10^{-3}\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "d", text: "$6.32\\times10^{-4}\\,\\mathrm{rad\\,s^{-1}}$" }],
      answer: "c", explanation: "At zero normal reaction, $g=\\omega^2R$. Hence $\\omega=\\sqrt{\\frac{10}{4.0\\times10^6}}=\\sqrt{2.5\\times10^{-6}}=1.581\\times10^{-3}\\,\\mathrm{rad\\,s^{-1}}$. The corresponding tangential speed is circular speed, not escape speed.",
      sectionId: "earth-rotation", source: { document: "quick-revision", page: 10 }, cognitive: "application"
    },
    {
      id: "note-gravitation-012", text: "Weak atmospheric drag causes a satellite to drift through successively lower, nearly circular orbits. Which long-term change is consistent with orbital mechanics?",
      options: [{ key: "a", text: "Orbital radius rises and total energy rises." }, { key: "b", text: "Orbital speed falls and total energy rises." }, { key: "c", text: "Orbital speed falls and total energy stays fixed." }, { key: "d", text: "Orbital speed rises and total energy falls." }],
      answer: "d", explanation: "Drag removes total energy. For circular orbits $E=-\\frac{GMm}{2r}$, so lower energy means smaller $r$. The speed $v_c=\\sqrt{\\frac{GM}{r}}$ is then larger. Drag itself still opposes velocity; the speed increase describes the evolving orbit, not the instantaneous drag acceleration.",
      sectionId: "satellite-behaviour", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-013", text: "Which orbit can keep a satellite above one fixed point on Earth's equator?",
      options: [{ key: "a", text: "Circular, equatorial, eastward, one sidereal day" }, { key: "b", text: "Circular, equatorial, westward, one sidereal day" }, { key: "c", text: "Circular, polar, eastward, one sidereal day" }, { key: "d", text: "Elliptical, equatorial, eastward, one solar day" }],
      answer: "a", explanation: "A geostationary orbit must match Earth's angular speed and direction continuously and stay in the equatorial plane. Thus it is circular, equatorial and prograde, with period equal to one sidereal day. Equal period alone is insufficient for a stationary ground position.",
      sectionId: "satellite-behaviour", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-014", text: "A signal travels two vertical legs of $36{,}000\\,\\mathrm{km}$ each through a satellite relay. Taking wave speed as $300{,}000\\,\\mathrm{km\\,s^{-1}}$, what is the propagation time?",
      options: [{ key: "a", text: "$0.12\\,\\mathrm{s}$" }, { key: "b", text: "$0.24\\,\\mathrm{s}$" }, { key: "c", text: "$0.48\\,\\mathrm{s}$" }, { key: "d", text: "$1.20\\,\\mathrm{s}$" }],
      answer: "b", explanation: "The total path is $2\\times36{,}000=72{,}000\\,\\mathrm{km}$. Therefore $t=\\frac{72{,}000}{300{,}000}=0.24\\,\\mathrm{s}$. One leg alone would take 0.12 s; an equally long return relay would double the two-leg time.",
      sectionId: "satellite-behaviour", source: { document: "quick-revision", page: 11 }, cognitive: "application"
    },
    {
      id: "note-gravitation-015", text: "Why is the textbook arrangement of three geostationary satellites not literally a communication solution for every point on Earth?",
      options: [{ key: "a", text: "Geostationary satellites alternate their direction daily." }, { key: "b", text: "Their signals cannot cross the equatorial plane." }, { key: "c", text: "Polar locations lack usable line of sight to them." }, { key: "d", text: "Only two satellites can share the equatorial plane." }],
      answer: "c", explanation: "Geostationary satellites remain over the equator. Earth's curvature prevents suitable visibility from the poles and limits elevation at high latitudes. Three well-spaced satellites can offer broad nonpolar coverage, but the word worldwide needs this qualification.",
      sectionId: "satellite-behaviour", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-016", text: "A mass hangs from a spring balance inside a capsule. The capsule, balance and mass are released into ideal common free fall. What does the balance indicate?",
      options: [{ key: "a", text: "The unchanged gravitational force $mg$" }, { key: "b", text: "Twice the gravitational force $2mg$" }, { key: "c", text: "Half the gravitational force $\\frac{mg}{2}$" }, { key: "d", text: "Zero supporting force" }],
      answer: "d", explanation: "A spring balance responds to supporting tension, not directly to mass or gravitational attraction. During common free fall the mass needs no supporting force relative to the capsule, so the reading is zero. Gravity can remain substantial.",
      sectionId: "weight-and-balances", source: { document: "quick-revision", page: 11 }, cognitive: "recall"
    },
    {
      id: "note-gravitation-017", text: "A beam balance compares an unknown mass with standards in a uniform, nonzero gravitational field. Why does moving it to a location with smaller $g$ leave the mass comparison unchanged?",
      options: [{ key: "a", text: "Both sides' gravitational forces acquire the same factor." }, { key: "b", text: "The unknown mass grows while the standard mass shrinks." }, { key: "c", text: "The beam automatically measures inertial acceleration." }, { key: "d", text: "The local gravitational forces remain numerically fixed." }],
      answer: "a", explanation: "For equal arms, balance requires $m_{\\mathrm{unknown}}g=m_{\\mathrm{standard}}g$. The common, nonzero $g$ cancels. This reasoning does not make an ordinary gravity-operated beam balance functional when both sides are in ideal free fall.",
      sectionId: "weight-and-balances", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    },
    {
      id: "note-gravitation-018", text: "An object displaces $2.0\\times10^{-3}\\,\\mathrm{m^3}$ of a stationary liquid of density $800\\,\\mathrm{kg\\,m^{-3}}$. If local gravity is $5.0\\,\\mathrm{m\\,s^{-2}}$, what is the upthrust?",
      options: [{ key: "a", text: "$4.0\\,\\mathrm{N}$" }, { key: "b", text: "$8.0\\,\\mathrm{N}$" }, { key: "c", text: "$16.0\\,\\mathrm{N}$" }, { key: "d", text: "$40.0\\,\\mathrm{N}$" }],
      answer: "b", explanation: "Archimedes' principle gives $F_b=\\rho Vg$. Substitution gives $800\\times2.0\\times10^{-3}\\times5.0=8.0\\,\\mathrm{N}$. For fixed density and displaced volume, buoyancy is proportional to the local gravity that establishes the pressure gradient.",
      sectionId: "weight-and-balances", source: { document: "quick-revision", page: 11 }, cognitive: "application"
    },
    {
      id: "note-gravitation-019", text: "A comet's distances from the Sun at two points are $r$ and $2r$. Neglecting external torque, what is its orbital angular speed at $r$ divided by that at $2r$?",
      options: [{ key: "a", text: "$2$" }, { key: "b", text: "$\\sqrt{2}$" }, { key: "c", text: "$4$" }, { key: "d", text: "$\\frac{1}{4}$" }],
      answer: "c", explanation: "Angular momentum about the Sun is $mr^2\\dot{\\theta}$. Conservation gives $r^2\\omega_1=(2r)^2\\omega_2$, so $\\frac{\\omega_1}{\\omega_2}=4$. This compares orbital angular rates along the same orbit, not the comet's spin.",
      sectionId: "satellite-behaviour", source: { document: "quick-revision", page: 11 }, cognitive: "application"
    },
    {
      id: "note-gravitation-020", text: "A vehicle moves west along Earth's equator at speed $v=\\omega R$ relative to the surface. In the spherical-Earth model, which statement explains its maximum apparent weight?",
      options: [{ key: "a", text: "Its mass has doubled because its relative speed is large." }, { key: "b", text: "Its inertial speed is twice Earth's equatorial speed." }, { key: "c", text: "The planet's gravitational field becomes stronger locally." }, { key: "d", text: "Its inertial tangential speed about Earth's axis is zero." }],
      answer: "d", explanation: "Westward motion subtracts from Earth's eastward surface speed. At $v=\\omega R$, the inertial speed is $\\omega R-v=0$, so no centripetal acceleration is needed and $N=mg$. At rest on Earth $N=m(g-\\omega^2R)$; mass and the true field remain unchanged.",
      sectionId: "weight-and-balances", source: { document: "quick-revision", page: 11 }, cognitive: "understanding"
    }
  ]
};