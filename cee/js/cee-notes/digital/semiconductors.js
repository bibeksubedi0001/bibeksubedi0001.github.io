window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["semiconductors"] = {
  id: "semiconductors",
  subject: "Physics",
  title: "Semiconductors and logic gates",
  sections: [
    {
      id: "bands-and-intrinsic-material",
      title: "Temperature, energy bands and intrinsic semiconductors",
      sources: [{ document: "quick-revision", page: 56 }],
      html: "<p>Thermal energy can promote an electron from the valence band into the conduction band. The promoted electron can conduct, and its absence in the valence band is a hole. In the intrinsic-temperature regime, increasing temperature increases the number of mobile electron-hole pairs and therefore increases conductivity. This is the regime intended by the source's temperature rule; it is not a claim that carrier mobility itself always increases with temperature.</p><ul><li>An intrinsic semiconductor is an extremely pure semiconductor without intentional electrical doping. Pure silicon, Si, and germanium, Ge, are the examples on the page.</li><li>Thermal generation creates electrons and holes in pairs, so their concentrations in an intrinsic sample are equal.</li><li>The intrinsic Fermi level lies approximately halfway between the valence-band maximum and the conduction-band minimum.</li></ul><p><strong>Source clarification:</strong> The wording 'at the centre of conduction band and valence band' means near the middle of the forbidden gap, not inside both allowed bands. Exact mid-gap placement is an approximation; unequal effective densities of states can shift the intrinsic Fermi level slightly.</p>"
    },
    {
      id: "germanium-silicon-values",
      title: "Germanium and silicon: gap, junction barrier and mnemonic",
      sources: [{ document: "quick-revision", page: 56 }],
      html: "<p>The diagram compares two different physical quantities. The following are the rounded room-temperature values used in elementary entrance-exam problems.</p><table><thead><tr><th>Material</th><th>Band gap</th><th>Junction voltage</th></tr></thead><tbody><tr><td>Germanium</td><td>About 0.7 eV</td><td>About 0.3 V</td></tr><tr><td>Silicon</td><td>About 1.1 eV</td><td>About 0.7 V</td></tr></tbody></table><p><strong>Source mnemonic:</strong> In the alphabetical sequence a, b, c, d, e, f, g, the letter g is seventh: associate Ge with the number 0.7. For the gap row, move from Ge to Si by adding 0.4. Move down from the Ge gap number to its barrier-voltage number by subtracting 0.4; then move across to the Si barrier-voltage number by adding 0.4 again. Thus the diagram contains 0.7 and 1.1 in its upper row, and 0.3 and 0.7 in its lower row.</p><p><strong>Source clarification:</strong> This is a numerical memory aid, not subtraction of an energy from a voltage. Band gap is an energy, measured here in electronvolts; junction barrier is a potential difference, measured in volts. An electron moving through 1 V changes energy by 1 eV, but the quantities remain distinct. Real band gaps depend on temperature, while junction built-in potential and practical forward drop also depend on doping, temperature and operating current. The quoted barrier values are textbook approximations, not universal exact thresholds. Keep the two rows and their units separate during an exam, as the source's warning recommends.</p>"
    },
    {
      id: "n-type-donors",
      title: "N-type doping, carriers and Fermi level",
      sources: [{ document: "quick-revision", page: 56 }],
      html: "<p>An n-type semiconductor is obtained by adding suitable pentavalent donor impurities to intrinsic silicon or germanium. The source identifies the nitrogen family, group 15, and supplies the mnemonic <em>Nana papa Aunty Sab Bimar</em> for nitrogen, phosphorus, arsenic, antimony and bismuth: N, P, As, Sb, Bi. Phosphorus, arsenic and antimony are the conventional shallow-donor examples for Si or Ge.</p><ul><li>Electrons are the majority mobile carriers. The letter n recalls their negative charge.</li><li>Holes are the minority mobile carriers.</li><li>Relative to intrinsic material, the Fermi level shifts toward the conduction band in the usual nondegenerate doping regime.</li></ul><p><strong>Source clarification:</strong> Membership of the nitrogen family is a periodic-table mnemonic, not proof that every member is an equally suitable shallow donor in every host crystal. Donor behaviour depends on the impurity and host. Ionized donors provide immobile positive charge that balances the additional mobile electrons; n-type does not mean that the bulk sample has a net negative charge.</p>"
    },
    {
      id: "p-type-acceptors",
      title: "P-type doping, carriers and Fermi level",
      sources: [{ document: "quick-revision", page: 56 }, { document: "quick-revision", page: 57 }],
      html: "<p>A p-type semiconductor is made by doping an intrinsic semiconductor with suitable trivalent acceptor atoms. The page names aluminium, boron, indium and gallium: Al, B, In, Ga. Its group mnemonic is <em>Bring All Galaxy In Thamel</em>, corresponding to boron, aluminium, gallium, indium and thallium.</p><p><strong>Source correction:</strong> The printed symbol list ends in 'Th'. Th is thorium; thallium is Tl. The correct group-13 sequence intended by this mnemonic is B, Al, Ga, In, Tl. The list is a group mnemonic, not an assertion that all members are standard dopants in every semiconductor.</p><ul><li>Holes are the majority mobile carriers. The letter p recalls their effective positive charge.</li><li>Electrons are the minority mobile carriers.</li><li>The continuation on page 57 states that the Fermi level shifts toward the valence band.</li><li>The p-type bulk is electrically neutral: mobile holes are balanced by immobile negatively charged ionized acceptors.</li></ul>"
    },
    {
      id: "carrier-comparison",
      title: "Comparing n-type and p-type material",
      sources: [{ document: "quick-revision", page: 57 }],
      html: "<p>Both n-type and p-type semiconductors are electrically neutral as bulk samples. Their names specify their majority mobile carriers, not the total charge of the crystal.</p><p>The source says that n-type material is 'better' because electron mobility is greater than hole mobility. In ordinary Si and Ge, electrons generally have greater mobility than holes under comparable conditions. The useful comparison is higher conductivity for equal majority-carrier concentration when other conditions are comparable, not that n-type is universally preferable for every device.</p><p>Quantifying this comparison, conductivity is $\\sigma=e(n\\mu_e+p\\mu_h)$, where $e$ is the positive elementary charge, $n$ and $p$ are number concentrations in $\\mathrm{m^{-3}}$, and mobility has units $\\mathrm{m^2\\,V^{-1}\\,s^{-1}}$. Conductivity has units $\\mathrm{S\\,m^{-1}}$. When minority-carrier contributions are negligible and the majority concentrations are equal, $\\frac{\\sigma_n}{\\sigma_p}=\\frac{\\mu_e}{\\mu_h}$. This equation makes the condition behind the source comparison explicit.</p>"
    },
    {
      id: "diffusion-and-drift",
      title: "Diffusion and drift at a p-n junction",
      sources: [{ document: "quick-revision", page: 57 }],
      html: "<p><strong>Diffusion current:</strong> A carrier-concentration difference drives diffusion across the p-n junction. Electrons diffuse from their high-concentration n region toward the p region; holes diffuse from their high-concentration p region toward the n region. Recombination near the junction leaves a depletion region containing fixed ionized impurities.</p><p><strong>Drift current:</strong> An electric field drives carrier drift. At an unbiased equilibrium junction, fixed positive donors on the n side and fixed negative acceptors on the p side produce a built-in field directed from n to p. It drives minority electrons from p to n and minority holes from n to p. These are the two carrier directions listed by the source.</p><p><strong>Source correction:</strong> The printed drift sentence refers to a field 'across battery'. A battery is not necessary for the built-in junction field: the separated fixed charges in the depletion region create it. An applied battery can change the field and barrier. At thermal equilibrium with no external bias, drift and diffusion currents oppose and balance, so the net terminal current is zero even though microscopic carrier motion continues.</p>"
    },
    {
      id: "forward-and-reverse-bias",
      title: "Forward and reverse bias: complete comparison",
      sources: [{ document: "quick-revision", page: 57 }],
      html: "<table><thead><tr><th>Feature</th><th>Forward bias</th></tr></thead><tbody><tr><td>Connections</td><td>P to positive; N to negative.</td></tr><tr><td>Depletion layer</td><td>Width decreases as the applied voltage opposes the built-in barrier.</td></tr><tr><td>Conduction</td><td>Dominated by injection of majority carriers across the junction.</td></tr><tr><td>Junction resistance</td><td>Relatively low in its conducting operating region.</td></tr></tbody></table><p><strong>Source mnemonic:</strong> The final D in <em>ForwarD</em> recalls <em>Depletion layer Decreases</em>. The repeated decrease-of-width statement on the page is consolidated here.</p><table><thead><tr><th>Feature</th><th>Reverse bias</th></tr></thead><tbody><tr><td>Connections</td><td>P to negative; N to positive.</td></tr><tr><td>Conduction</td><td>Small current associated with minority carriers before breakdown.</td></tr><tr><td>Junction resistance</td><td>Relatively high before breakdown.</td></tr></tbody></table><p>Reverse bias reinforces the junction barrier and generally widens the depletion region. The high-resistance and minority-current descriptions refer to ordinary reverse operation below breakdown; they must not be extrapolated to a Zener diode deliberately operated in reverse breakdown. A junction is nonlinear, so 'low' and 'high' resistance describe operating regions rather than a single constant Ohmic resistance.</p>"
    },
    {
      id: "zener-and-control-mnemonics",
      title: "Zener regulation and device-control mnemonics",
      sources: [{ document: "quick-revision", page: 57 }],
      html: "<p>A Zener diode is used as a voltage stabilizer. Its regulating operating condition is reverse bias in the designed breakdown region, with current limited to the safe operating range by the surrounding circuit. Reverse bias alone, below breakdown, does not establish the intended regulated voltage.</p><p>The closing memory aid highlights I in <em>SemI-conductor</em> for current control, and V in <em>Vacuum tube</em> for voltage control.</p><p><strong>Source correction:</strong> Calling every semiconductor a current-controlled device is too broad. In elementary circuit models, a bipolar junction transistor is treated as current-controlled, whereas a field-effect transistor is voltage-controlled. A vacuum triode is conventionally controlled by its grid voltage. Keep the source mnemonic only for the intended bipolar-transistor versus vacuum-triode comparison; it does not classify all semiconductor devices or describe Zener regulation.</p><p>The assigned pages contain semiconductor materials, p-n junctions, bias and Zener notes. They do not contain logic-gate symbols or truth tables, despite the broader catalogue title; no gate table is attributed to these pages.</p>"
    }
  ],
  pageCoverage: [
    { document: "quick-revision", page: 56, status: "transcribed", sectionIds: ["bands-and-intrinsic-material", "germanium-silicon-values", "n-type-donors", "p-type-acceptors"], unresolved: [] },
    { document: "quick-revision", page: 57, status: "transcribed", sectionIds: ["p-type-acceptors", "carrier-comparison", "diffusion-and-drift", "forward-and-reverse-bias", "zener-and-control-mnemonics"], unresolved: [] }
  ],
  questions: [
    {
      id: "note-semiconductors-001",
      text: "A pure silicon sample becomes more conducting as its temperature rises in the intrinsic regime. What primarily causes this change?",
      options: [{ key: "a", text: "The sample acquires a large net positive charge." }, { key: "b", text: "More electrons enter the conduction band, leaving holes." }, { key: "c", text: "All valence electrons become permanently bound." }, { key: "d", text: "The semiconductor's atomic nuclei become mobile." }],
      answer: "b",
      explanation: "Thermal excitation creates additional mobile electron-hole pairs. Their increasing concentration raises intrinsic conductivity; it does not require net charging or motion of the nuclei.",
      sectionId: "bands-and-intrinsic-material", source: { document: "quick-revision", page: 56 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-002",
      text: "In the elementary band model, where is the Fermi level of intrinsic germanium located?",
      options: [{ key: "a", text: "Deep inside the conduction band." }, { key: "b", text: "Far below the entire valence band." }, { key: "c", text: "Exactly at the conduction-band edge." }, { key: "d", text: "Approximately midway across the forbidden gap." }],
      answer: "d",
      explanation: "Intrinsic material has a Fermi level near the middle of the forbidden gap. Exact mid-gap placement is an approximation, since the two bands can have unequal effective densities of states.",
      sectionId: "bands-and-intrinsic-material", source: { document: "quick-revision", page: 56 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-003",
      text: "Which pair gives the source's rounded room-temperature band gaps in the order germanium, silicon?",
      options: [{ key: "a", text: "0.7 eV, 1.1 eV" }, { key: "b", text: "0.3 eV, 0.7 eV" }, { key: "c", text: "1.1 eV, 0.7 eV" }, { key: "d", text: "0.7 eV, 0.3 eV" }],
      answer: "a",
      explanation: "The upper row of the checked comparison is Ge about 0.7 eV and Si about 1.1 eV. The numbers 0.3 and 0.7 in the lower row are approximate junction voltages, not these band gaps.",
      sectionId: "germanium-silicon-values", source: { document: "quick-revision", page: 56 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-004",
      text: "A learner labels both the 1.1 silicon band-gap value and the 0.7 silicon junction-barrier value in volts. What repair is needed?",
      options: [{ key: "a", text: "Use volts for the gap and electronvolts for the barrier." }, { key: "b", text: "Use amperes for the gap and volts for the barrier." }, { key: "c", text: "Use electronvolts for the gap and volts for the barrier." }, { key: "d", text: "Use electronvolts for the gap and amperes for the barrier." }],
      answer: "c",
      explanation: "A band gap is an energy and can be measured in eV. A barrier potential is an electric potential difference and is measured in V. The numerical mnemonic does not make their dimensions identical.",
      sectionId: "germanium-silicon-values", source: { document: "quick-revision", page: 56 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-005",
      text: "Using the checked rounded band gaps, how much larger is silicon's gap than germanium's gap?",
      options: [{ key: "a", text: "0.2 eV" }, { key: "b", text: "0.4 eV" }, { key: "c", text: "0.7 eV" }, { key: "d", text: "1.8 eV" }],
      answer: "b",
      explanation: "Subtract two energies in the same units: 1.1 eV minus 0.7 eV equals 0.4 eV. Adding the values gives 1.8 eV, which is their sum rather than their difference.",
      sectionId: "germanium-silicon-values", source: { document: "quick-revision", page: 56 }, cognitive: "application"
    },
    {
      id: "note-semiconductors-006",
      text: "Which impurity is a conventional pentavalent donor for producing n-type silicon?",
      options: [{ key: "a", text: "Phosphorus" }, { key: "b", text: "Boron" }, { key: "c", text: "Aluminium" }, { key: "d", text: "Indium" }],
      answer: "a",
      explanation: "Phosphorus is a group-15 pentavalent donor. Boron, aluminium and indium are trivalent acceptor examples in the source's contrasting p-type discussion.",
      sectionId: "n-type-donors", source: { document: "quick-revision", page: 56 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-007",
      text: "An arsenic-doped silicon sample is in its ordinary n-type operating regime. Which description of its mobile carriers is correct?",
      options: [{ key: "a", text: "Holes are majority; electrons are absent." }, { key: "b", text: "Holes are majority; electrons are minority." }, { key: "c", text: "Electrons and holes must have equal concentrations." }, { key: "d", text: "Electrons are majority; holes are minority." }],
      answer: "d",
      explanation: "Arsenic supplies donor electrons, making electrons the majority carriers. Thermally generated holes still exist as minority carriers, so n-type conduction does not imply their absence.",
      sectionId: "n-type-donors", source: { document: "quick-revision", page: 56 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-008",
      text: "Moderate donor doping is added to an initially intrinsic semiconductor. In the usual nondegenerate model, how does its Fermi level move?",
      options: [{ key: "a", text: "Toward the bottom of the valence band." }, { key: "b", text: "It remains exactly fixed at the gap centre." }, { key: "c", text: "Toward the conduction-band edge." }, { key: "d", text: "It necessarily leaves the energy-band diagram." }],
      answer: "c",
      explanation: "Donor doping increases electron concentration and shifts the Fermi level upward toward the conduction band. The opposite shift toward the valence band characterizes ordinary acceptor doping.",
      sectionId: "n-type-donors", source: { document: "quick-revision", page: 56 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-009",
      text: "Which listed impurity belongs with the source's trivalent acceptors rather than its pentavalent donors?",
      options: [{ key: "a", text: "Gallium" }, { key: "b", text: "Arsenic" }, { key: "c", text: "Phosphorus" }, { key: "d", text: "Antimony" }],
      answer: "a",
      explanation: "Gallium is a group-13 trivalent acceptor example. Arsenic, phosphorus and antimony are group-15 elements conventionally used as donors in silicon or germanium.",
      sectionId: "p-type-acceptors", source: { document: "quick-revision", page: 56 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-010",
      text: "Which combination characterizes an ordinary p-type semiconductor relative to intrinsic material?",
      options: [{ key: "a", text: "Electron majority; Fermi level nearer the valence band." }, { key: "b", text: "Hole majority; Fermi level nearer the conduction band." }, { key: "c", text: "Hole majority; Fermi level nearer the valence band." }, { key: "d", text: "Electron majority; Fermi level nearer the conduction band." }],
      answer: "c",
      explanation: "Acceptor doping produces hole-majority material and shifts the Fermi level toward the valence band. The page-57 continuation supplies that Fermi-level direction for p-type material.",
      sectionId: "p-type-acceptors", source: { document: "quick-revision", page: 57 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-011",
      text: "Why can an n-type crystal contain many mobile electrons while remaining electrically neutral overall?",
      options: [{ key: "a", text: "Its conduction electrons carry no electric charge." }, { key: "b", text: "Fixed ionized donors balance the mobile electron charge." }, { key: "c", text: "Every electron is paired with a mobile positive nucleus." }, { key: "d", text: "Doping removes the requirement of charge conservation." }],
      answer: "b",
      explanation: "Ionized donor atoms remain positively charged at fixed lattice sites, balancing the added mobile electrons. Carrier type describes the mobile population, not a net bulk charge.",
      sectionId: "n-type-donors", source: { document: "quick-revision", page: 56 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-012",
      text: "Two comparable samples have equal majority-carrier concentrations and negligible minority conduction. Electron mobility is 0.14 and hole mobility is 0.05, both in square metres per volt-second. What is the n-type to p-type conductivity ratio?",
      options: [{ key: "a", text: "0.36" }, { key: "b", text: "0.70" }, { key: "c", text: "1.40" }, { key: "d", text: "2.80" }],
      answer: "d",
      explanation: "With equal majority concentrations, charge and concentration cancel from the conductivity ratio. Thus the ratio is 0.14 divided by 0.05, or 2.8. The comparison requires the stated equal-concentration conditions.",
      sectionId: "carrier-comparison", source: { document: "quick-revision", page: 57 }, cognitive: "application"
    },
    {
      id: "note-semiconductors-013",
      text: "What directly drives diffusion of majority carriers across a newly formed p-n junction?",
      options: [{ key: "a", text: "A mandatory external alternating voltage." }, { key: "b", text: "A difference between the nuclear charges of Si atoms." }, { key: "c", text: "A spatial difference in carrier concentration." }, { key: "d", text: "A uniform concentration with no other driving influence." }],
      answer: "c",
      explanation: "Diffusion is driven by a concentration gradient. Electrons move from the electron-rich n region toward p, while holes move from the hole-rich p region toward n; an external battery is not required.",
      sectionId: "diffusion-and-drift", source: { document: "quick-revision", page: 57 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-014",
      text: "The built-in field at an unbiased p-n junction points from n to p. Which minority-carrier drift directions follow?",
      options: [{ key: "a", text: "Electrons n to p; holes p to n." }, { key: "b", text: "Electrons p to n; holes p to n." }, { key: "c", text: "Electrons n to p; holes n to p." }, { key: "d", text: "Electrons p to n; holes n to p." }],
      answer: "d",
      explanation: "Negative electrons drift opposite the electric field, from p to n. Positively charged holes drift with the field, from n to p. These directions oppose the respective diffusion flows.",
      sectionId: "diffusion-and-drift", source: { document: "quick-revision", page: 57 }, cognitive: "application"
    },
    {
      id: "note-semiconductors-015",
      text: "An unbiased p-n junction is at thermal equilibrium. How are its diffusion and drift currents related?",
      options: [{ key: "a", text: "Equal in magnitude and opposite in direction." }, { key: "b", text: "Equal in magnitude and in the same direction." }, { key: "c", text: "Diffusion continues while drift is exactly absent." }, { key: "d", text: "Drift continues while diffusion is exactly absent." }],
      answer: "a",
      explanation: "At equilibrium the built-in field produces drift that balances diffusion. Their opposing currents give zero net terminal current, rather than requiring all microscopic carrier movement to stop.",
      sectionId: "diffusion-and-drift", source: { document: "quick-revision", page: 57 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-016",
      text: "Which battery connections forward-bias an ordinary p-n junction?",
      options: [{ key: "a", text: "P to negative and N to positive." }, { key: "b", text: "P to positive and N to negative." }, { key: "c", text: "Both P and N to the positive terminal." }, { key: "d", text: "Both P and N to the negative terminal." }],
      answer: "b",
      explanation: "Forward bias connects p to the positive terminal and n to the negative terminal. The applied voltage opposes the built-in barrier and assists majority-carrier injection across the junction.",
      sectionId: "forward-and-reverse-bias", source: { document: "quick-revision", page: 57 }, cognitive: "recall"
    },
    {
      id: "note-semiconductors-017",
      text: "A junction is changed from zero bias to appreciable forward conduction. Which pair of changes agrees with the ForwarD mnemonic?",
      options: [{ key: "a", text: "Wider depletion layer; high-resistance conducting region." }, { key: "b", text: "Wider depletion layer; low-resistance conducting region." }, { key: "c", text: "Narrower depletion layer; high-resistance conducting region." }, { key: "d", text: "Narrower depletion layer; low-resistance conducting region." }],
      answer: "d",
      explanation: "ForwarD recalls Depletion layer Decreases. Once appreciable forward current flows, the junction is in its relatively low-resistance operating region; the relation is nonlinear, not a constant Ohmic resistance.",
      sectionId: "forward-and-reverse-bias", source: { document: "quick-revision", page: 57 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-018",
      text: "A diode is reverse-biased well below breakdown. Which operating description is appropriate?",
      options: [{ key: "a", text: "Large majority-carrier current and low resistance." }, { key: "b", text: "Small minority-carrier current and high resistance." }, { key: "c", text: "Large majority-carrier current and high resistance." }, { key: "d", text: "Small minority-carrier current and zero resistance." }],
      answer: "b",
      explanation: "Below breakdown, reverse bias gives a small current associated with minority carriers and a high junction resistance. The qualification excludes the deliberately conducting reverse-breakdown region of a Zener regulator.",
      sectionId: "forward-and-reverse-bias", source: { document: "quick-revision", page: 57 }, cognitive: "understanding"
    },
    {
      id: "note-semiconductors-019",
      text: "A Zener diode is intended to stabilize an output voltage. In which region should it operate, with suitable current limitation?",
      options: [{ key: "a", text: "Unbiased thermal equilibrium." }, { key: "b", text: "Forward conduction far below its knee." }, { key: "c", text: "Designed reverse-breakdown region." }, { key: "d", text: "Reverse leakage far below breakdown." }],
      answer: "c",
      explanation: "Zener voltage stabilization uses the relatively constant voltage in the designed reverse-breakdown region. The current must be limited to the safe range; merely applying a small reverse bias is insufficient.",
      sectionId: "zener-and-control-mnemonics", source: { document: "quick-revision", page: 57 }, cognitive: "application"
    },
    {
      id: "note-semiconductors-020",
      text: "Which revision makes the source's SemI-conductor/current-control mnemonic technically defensible?",
      options: [{ key: "a", text: "Restrict it to the elementary bipolar-transistor model." }, { key: "b", text: "Apply it to every semiconductor without exception." }, { key: "c", text: "Treat every field-effect transistor as current-controlled." }, { key: "d", text: "Treat a Zener diode as a vacuum-tube grid." }],
      answer: "a",
      explanation: "An elementary bipolar-transistor circuit model uses base current to control collector current. Field-effect transistors are voltage-controlled, so the mnemonic cannot classify every semiconductor device.",
      sectionId: "zener-and-control-mnemonics", source: { document: "quick-revision", page: 57 }, cognitive: "understanding"
    }
  ]
};