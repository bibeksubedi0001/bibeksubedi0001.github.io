window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["amines"] = {
  id: "amines",
  subject: "Chemistry",
  title: "Amines, nitro and organometallic compounds",
  sections: [
    {
      id: "aniline-ring-activation",
      title: "Arylamines and electrophilic substitution",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>Arylamines undergo electrophilic aromatic substitution. In unprotonated aniline, the nitrogen lone pair is conjugated with the benzene ring. The NH<sub>2</sub> group strongly activates the ring and directs incoming electrophiles mainly to the ortho and para positions.</p><p><strong>Source correction:</strong> This directing statement concerns the free amino group, not every reaction medium. Strong acid converts NH<sub>2</sub> into NH<sub>3</sub><sup>+</sup>; the anilinium group is deactivating and meta-directing. Direct nitration is therefore not equivalent to nitration of protected aniline.</p>"
    },
    {
      id: "amine-basicity",
      title: "Basicity in the gas phase and in water",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>Amines are bases because nitrogen can donate a lone pair to a proton. The source identifies four influences: inductive effect, steric effect, solvation or solution effect, and resonance effect. Electron-releasing alkyl groups generally increase the availability of the lone pair; resonance delocalization in aniline reduces its availability for protonation. In water, hydration of both the base and its conjugate acid also matters.</p><table><thead><tr><th>Comparison</th><th>Decreasing basicity</th></tr></thead><tbody><tr><td>Typical simple alkylamines, gas phase</td><td>Tertiary &gt; secondary &gt; primary &gt; ammonia</td></tr><tr><td>Ethylamines, aqueous solution</td><td>(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH &gt; (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N &gt; C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> &gt; NH<sub>3</sub></td></tr><tr><td>Methylamines, aqueous solution</td><td>(CH<sub>3</sub>)<sub>2</sub>NH &gt; CH<sub>3</sub>NH<sub>2</sub> &gt; (CH<sub>3</sub>)<sub>3</sub>N &gt; NH<sub>3</sub></td></tr></tbody></table><p><strong>Source correction:</strong> The gas-phase order is a useful comparison within simple alkylamine series, not a universal ranking of every primary, secondary and tertiary amine. Substituent identity, resonance, solvent and temperature can change the order. The two aqueous examples specifically show why one blanket order is inadequate.</p>"
    },
    {
      id: "amine-salts-alkylation-acylation",
      title: "Salt formation, alkylation and acylation",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>The central reaction map starts from a primary amine, RNH<sub>2</sub>. R and R&prime; represent organic groups, and X represents a halogen.</p><ul><li>With HCl, RNH<sub>2</sub> forms the alkylammonium salt RNH<sub>3</sub><sup>+</sup>Cl<sup>&minus;</sup>. NaOH regenerates the free amine: RNH<sub>3</sub><sup>+</sup>Cl<sup>&minus;</sup> + NaOH &rarr; RNH<sub>2</sub> + NaCl + H<sub>2</sub>O.</li><li>Alkylation by R&prime;X can proceed beyond the first substitution: RNH<sub>2</sub> &rarr; RNHR&prime; &rarr; RN(R&prime;)<sub>2</sub> &rarr; [RN(R&prime;)<sub>3</sub>]<sup>+</sup>X<sup>&minus;</sup>. These are secondary amine, tertiary amine and quaternary ammonium salt, respectively. The source marks loss of HX during the first two net substitutions.</li><li>Benzoyl chloride, C<sub>6</sub>H<sub>5</sub>COCl, produces the benzamide derivative RNHCOC<sub>6</sub>H<sub>5</sub>, with HCl as the formal coproduct.</li><li>An acid chloride R&prime;COCl produces R&prime;CONHR + HCl. The source writes the same amide connectivity as RNHCOR&prime;.</li><li>An acid anhydride (R&prime;CO)<sub>2</sub>O produces R&prime;CONHR + R&prime;COOH.</li><li>Benzenesulfonyl chloride produces the sulfonamide C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NHR, the basis of Hinsberg's test.</li></ul><p><strong>Source correction:</strong> The fourth organic group on nitrogen gives a positively charged quaternary ammonium ion, not an uncharged tertiary amine. Acylation and sulfonamide formation require an available N-H bond for these substitution products; tertiary amines do not give the corresponding neutral amides by simple N-H replacement.</p>"
    },
    {
      id: "isocyanides-isothiocyanates",
      title: "Carbylamine and mustard-oil reactions",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p><strong>Carbylamine test:</strong> Primary aliphatic and primary aromatic amines react with chloroform and heated alcoholic KOH to form isocyanides, R-NC, also called carbylamines. Secondary and tertiary amines do not give this test. The balanced net reaction is RNH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH &rarr; RNC + 3KCl + 3H<sub>2</sub>O. Aniline gives phenyl isocyanide, C<sub>6</sub>H<sub>5</sub>-NC. An isocyanide is bonded through nitrogen, R-N-C, unlike a nitrile, R-C-N.</p><p><strong>Hofmann mustard-oil reaction:</strong> The source maps a primary amine and CS<sub>2</sub> to an isothiocyanate, R-N=C=S. The name refers to the mustard-oil odour associated with members of this class.</p><p><strong>Source correction:</strong> CS<sub>2</sub> alone does not describe the complete standard conversion to an isothiocyanate. A dithiocarbamate intermediate is formed, followed by desulfurization using an appropriate reagent; classical descriptions use HgCl<sub>2</sub>. These are reaction-identification facts, not instructions to perform odour tests or handle toxic reagents.</p>"
    },
    {
      id: "hinsberg-test",
      title: "Distinguishing primary, secondary and tertiary amines",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>Hinsberg's reagent is benzenesulfonyl chloride, C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl. The source compares its reactions with the three amine classes in alkali.</p><table><thead><tr><th>Amine</th><th>Product and behaviour</th></tr></thead><tbody><tr><td>Primary: RNH<sub>2</sub></td><td>C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NHR, N-alkylbenzenesulfonamide. Its remaining N-H is sufficiently acidic for deprotonation by strong alkali, so its salt dissolves. Acidification regenerates the neutral sulfonamide.</td></tr><tr><td>Secondary: R<sub>2</sub>NH</td><td>C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NR<sub>2</sub>, N,N-dialkylbenzenesulfonamide. It has no N-H to remove and does not dissolve in alkali through this acid-base process.</td></tr><tr><td>Tertiary: R<sub>3</sub>N</td><td>No sulfonamide under the usual test conditions because the amine has no N-H bond.</td></tr></tbody></table><p><strong>Source clarification:</strong> The tertiary-amine branch labelled 'no reaction' means no sulfonamide formation, not chemical inertness. An unreacted tertiary amine can still form a water-soluble ammonium salt with dilute acid. The test relies on product formation and acid-base solubility together.</p>"
    },
    {
      id: "nitrous-acid-azo-tests",
      title: "Nitrous acid, azo dyes and the GRB mnemonic",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<ul><li>The azo-dye test identifies primary aromatic amines through diazotization followed by coupling with a suitable activated aromatic compound, such as phenol or an arylamine. The source records an orange azo dye; the characteristic azo linkage is -N=N-.</li><li>Secondary amines can form N-nitrosamines with nitrous acid: R<sub>2</sub>NH + HNO<sub>2</sub> &rarr; R<sub>2</sub>N-N=O + H<sub>2</sub>O. The source describes a yellow product.</li><li>The source mnemonic <strong>GRB</strong> means <strong>Green &rarr; Red &rarr; Blue</strong> for Liebermann's nitroso reaction. The colour sequence belongs to the full colour test: a green or blue-green colour in the phenol/concentrated sulfuric acid stage, red on dilution, and blue or green on making the mixture alkaline.</li></ul><p><strong>Source corrections:</strong> N-nitrosamine formation is not restricted to 'only secondary aliphatic amines'; secondary aromatic amines can also undergo N-nitrosation. The GRB sequence is not the colour change produced merely by adding nitrous acid. Azo-dye colour depends on the coupling components and conditions, so orange is an example rather than an exceptionless result. N-nitrosamines include hazardous carcinogenic substances; these entries describe analytical chemistry, not home tests.</p>"
    },
    {
      id: "aniline-substitution-map",
      title: "Aniline: bromination, nitration and sulfonation",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<ul><li><strong>Bromine water:</strong> The strongly activated ring undergoes substitution at both ortho positions and the para position. C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + 3Br<sub>2</sub> &rarr; 2,4,6-tribromoaniline + 3HBr. The tribromo product is a white precipitate.</li><li><strong>Controlled para bromination:</strong> The source shows acetylation with CH<sub>3</sub>COCl or (CH<sub>3</sub>CO)<sub>2</sub>O in pyridine, followed by Br<sub>2</sub> in CH<sub>3</sub>COOH, and draws p-bromoaniline. Acetyl protection gives acetanilide; bromination then gives predominantly p-bromoacetanilide.</li><li><strong>Para nitration through protection:</strong> Acetylate aniline, nitrate the protected compound with HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>, then hydrolyse with H<sub>2</sub>O/H<sup>+</sup> to obtain predominantly p-nitroaniline. The source lists acetic anhydride and acetyl chloride before nitration; they are alternative acetylating reagents.</li><li><strong>Sulfonation:</strong> Concentrated H<sub>2</sub>SO<sub>4</sub> and heat give the para sulfonic-acid derivative, sulfanilic acid, H<sub>2</sub>N-C<sub>6</sub>H<sub>4</sub>-SO<sub>3</sub>H. It commonly exists as a zwitterion in the solid state.</li></ul><p><strong>Source corrections:</strong> The bromination map omits the hydrolysis needed to remove acetyl protection before the depicted p-bromoaniline is obtained. Acetic anhydride and acetyl chloride need not both be used consecutively. The protected nitration sequence must not be replaced by an assertion that unprotected aniline in strongly acidic nitrating mixture gives only the para product.</p>"
    },
    {
      id: "aniline-oxidation-diazotization",
      title: "Oxidation and preparation of a diazonium salt",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>The source reaction map shows oxidation of aniline by K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sub>2</sub>SO<sub>4</sub> to p-benzoquinone, a six-membered ring containing two opposite carbonyl groups. It also shows the carbylamine conversion to phenyl isocyanide.</p><p>Diazotization converts aniline into benzenediazonium chloride. Nitrous acid is generated in the reaction mixture from sodium nitrite and hydrochloric acid; the mixture is kept at 273-278 K, equivalent to approximately 0-5 &deg;C. The amino nitrogen is retained in a diazonium group containing two nitrogen atoms.</p><p>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + 2HCl &rarr; C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>&minus;</sup> + NaCl + 2H<sub>2</sub>O.</p><p><strong>Source correction:</strong> The printed product '2N<sub>2</sub>O' is an error; the balanced reaction produces <strong>2H<sub>2</sub>O</strong>. The cold condition matters because the aqueous aromatic diazonium salt decomposes more readily on warming. 'Concentrated HCl' in the scheme is not a requirement that every diazotization use undiluted concentrated acid; the essential study conditions are an acidic nitrite medium and controlled low temperature.</p>"
    },
    {
      id: "page-boundary-carbohydrates",
      title: "Carbohydrate introduction at the page boundary",
      sources: [{ document: "quick-revision", page: 84 }],
      html: "<p>The bottom of this assigned page begins the next chapter. It gives the traditional carbohydrate formula C<sub>x</sub>(H<sub>2</sub>O)<sub>y</sub> and describes carbohydrates as polyhydroxy aldehydes or ketones, or substances yielding such units on hydrolysis.</p><p><strong>Source corrections:</strong> The hydrate-of-carbon formula is a historical pattern, not a necessary or sufficient definition: some carbohydrates do not fit it, and some non-carbohydrates do. The source also says 'optically active', but this is not universal; dihydroxyacetone is an achiral carbohydrate. These two legible introductory points are retained here because they occur on page 84, despite the catalogue assigning the main biomolecule pages to a separate topic.</p>"
    }
  ],
  pageCoverage: [
    { document: "quick-revision", page: 84, status: "transcribed", sectionIds: ["aniline-ring-activation", "amine-basicity", "amine-salts-alkylation-acylation", "isocyanides-isothiocyanates", "hinsberg-test", "nitrous-acid-azo-tests", "aniline-substitution-map", "aniline-oxidation-diazotization", "page-boundary-carbohydrates"], unresolved: [] }
  ],
  questions: [
    {
      id: "note-amines-001", text: "Why does the free NH<sub>2</sub> group in aniline favour ortho and para electrophilic substitution?",
      options: [{ key: "a", text: "Its lone pair donates electron density into the ring." }, { key: "b", text: "It removes ring electrons only through resonance." }, { key: "c", text: "It converts every ring carbon into an sp<sup>3</sup> centre." }, { key: "d", text: "It prevents the ring from interacting with electrophiles." }],
      answer: "a", explanation: "The nitrogen lone pair is conjugated with the aromatic system and activates the ortho and para positions. Protonated NH3+ behaves differently because that lone pair is no longer available for donation.", sectionId: "aniline-ring-activation", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-002", text: "Which base is strongest in the stated aqueous methylamine series?",
      options: [{ key: "a", text: "Ammonia" }, { key: "b", text: "Trimethylamine" }, { key: "c", text: "Dimethylamine" }, { key: "d", text: "Methylamine" }],
      answer: "c", explanation: "The aqueous order given is dimethylamine > methylamine > trimethylamine > ammonia. Solvation and steric effects must be considered along with electron donation by methyl groups.", sectionId: "amine-basicity", source: { document: "quick-revision", page: 84 }, cognitive: "recall"
    },
    {
      id: "note-amines-003", text: "For the usual gas-phase comparison of simple ethylamines, which species has the greatest basicity?",
      options: [{ key: "a", text: "Ethylamine" }, { key: "b", text: "Triethylamine" }, { key: "c", text: "Ammonia" }, { key: "d", text: "Diethylamine" }],
      answer: "b", explanation: "Without aqueous hydration effects, electron donation from three ethyl groups gives triethylamine the highest basicity in this simple series. This is not an unrestricted rule for all tertiary amines.", sectionId: "amine-basicity", source: { document: "quick-revision", page: 84 }, cognitive: "recall"
    },
    {
      id: "note-amines-004", text: "A reaction chart shows RNH<sub>2</sub> + CS<sub>2</sub> leading directly to R-N=C=S. Which qualification is needed?",
      options: [{ key: "a", text: "The final product must instead contain an azo linkage." }, { key: "b", text: "Only a quaternary ammonium salt can be the reactant." }, { key: "c", text: "Carbon disulfide supplies oxygen to the final product." }, { key: "d", text: "The intermediate needs a further desulfurization step." }],
      answer: "d", explanation: "The classical mustard-oil conversion proceeds through a dithiocarbamate and requires a suitable desulfurizing reagent to form the isothiocyanate. Listing CS2 alone omits a chemically important step.", sectionId: "isocyanides-isothiocyanates", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-005", text: "Which change occurs when NaOH is added to a solution of an alkylammonium chloride, RNH<sub>3</sub><sup>+</sup>Cl<sup>&minus;</sup>?",
      options: [{ key: "a", text: "The nitrogen becomes a nitro group." }, { key: "b", text: "The free primary amine is regenerated." }, { key: "c", text: "The alkyl chain gains a carbon atom." }, { key: "d", text: "The salt becomes an isothiocyanate." }],
      answer: "b", explanation: "Hydroxide removes a proton from RNH3+, producing RNH2 and water; sodium and chloride remain as ions. This is an acid-base reversal, not a change to the carbon skeleton.", sectionId: "amine-salts-alkylation-acylation", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-006", text: "After successive alkylation, nitrogen is bonded to four organic groups. How must this product be represented?",
      options: [{ key: "a", text: "A quaternary ammonium cation with a counterion" }, { key: "b", text: "A neutral tertiary amine with a nitrogen lone pair" }, { key: "c", text: "A primary amide with one carbonyl oxygen" }, { key: "d", text: "A neutral secondary amine with one N-H bond" }],
      answer: "a", explanation: "Four ordinary carbon-nitrogen bonds give nitrogen a formal positive charge in a quaternary ammonium ion. A halide counterion balances the charge when an alkyl halide supplies the final group.", sectionId: "amine-salts-alkylation-acylation", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-007", text: "Benzoylation of a primary amine RNH<sub>2</sub> by C<sub>6</sub>H<sub>5</sub>COCl gives which organic product?",
      options: [{ key: "a", text: "RN=NC<sub>6</sub>H<sub>5</sub>" }, { key: "b", text: "RNHCH<sub>2</sub>C<sub>6</sub>H<sub>5</sub>" }, { key: "c", text: "RNHC<sub>6</sub>H<sub>5</sub>" }, { key: "d", text: "RNHCOC<sub>6</sub>H<sub>5</sub>" }],
      answer: "d", explanation: "The amine replaces chloride at the acyl carbon, retaining the benzoyl carbonyl group. The product RNHCOC6H5 is an amide, not an azo compound or a simple alkylated amine.", sectionId: "amine-salts-alkylation-acylation", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-008", text: "Why does the Hinsberg product of a secondary amine fail to form an alkali-soluble salt by N-H deprotonation?",
      options: [{ key: "a", text: "The sulfonamide contains no sulfur atom." }, { key: "b", text: "The product is a quaternary ammonium ion." }, { key: "c", text: "The sulfonamide has no remaining N-H bond." }, { key: "d", text: "The starting amine cannot attack any reagent." }],
      answer: "c", explanation: "A secondary amine gives C6H5SO2NR2, whose nitrogen bears two organic groups and the sulfonyl group. There is no N-H proton to remove, unlike the product formed from a primary amine.", sectionId: "hinsberg-test", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-009", text: "A Hinsberg product dissolves in strong alkali and reappears as a neutral sulfonamide on acidification. Which starting class does this support?",
      options: [{ key: "a", text: "A tertiary amine" }, { key: "b", text: "A quaternary ammonium salt" }, { key: "c", text: "A secondary amine" }, { key: "d", text: "A primary amine" }],
      answer: "d", explanation: "The primary-amine product C6H5SO2NHR retains an acidic N-H bond. Alkali forms its soluble anion, and acidification restores the neutral sulfonamide; this is the diagnostic pattern described.", sectionId: "hinsberg-test", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-010", text: "A tertiary amine gives no sulfonamide in Hinsberg's test. Which further statement is chemically valid?",
      options: [{ key: "a", text: "It cannot accept a proton from any acid." }, { key: "b", text: "It may still form an ammonium salt with acid." }, { key: "c", text: "It necessarily contains an acidic N-H bond." }, { key: "d", text: "It must undergo a positive carbylamine test." }],
      answer: "b", explanation: "Absence of an N-H bond prevents the usual sulfonamide formation, but the tertiary nitrogen still has a lone pair that can accept a proton. 'No reaction' is restricted to the Hinsberg branch.", sectionId: "hinsberg-test", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-011", text: "Which compound is eligible for the carbylamine test on the basis of its amine class?",
      options: [{ key: "a", text: "C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>NH<sub>2</sub>" }, { key: "b", text: "(CH<sub>3</sub>)<sub>2</sub>NH" }, { key: "c", text: "(CH<sub>3</sub>)<sub>3</sub>N" }, { key: "d", text: "C<sub>6</sub>H<sub>5</sub>NHCH<sub>3</sub>" }],
      answer: "a", explanation: "Benzylamine has an NH2 group bonded to one organic group, so it is a primary amine. The other choices are secondary or tertiary amines and do not give the carbylamine reaction.", sectionId: "isocyanides-isothiocyanates", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-012", text: "In phenyl isocyanide formed from aniline, which atom is directly bonded to the phenyl group?",
      options: [{ key: "a", text: "The carbon of a carbonyl group" }, { key: "b", text: "The sulfur of an isothiocyanate group" }, { key: "c", text: "The nitrogen of the isocyanide group" }, { key: "d", text: "The carbon of a nitrile group" }],
      answer: "c", explanation: "Phenyl isocyanide has the connectivity C6H5-NC, so phenyl is attached to nitrogen. In the isomeric nitrile C6H5-CN, phenyl would instead attach directly to the nitrile carbon.", sectionId: "isocyanides-isothiocyanates", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-013", text: "Which revision correctly repairs the statement that only secondary aliphatic amines form N-nitrosamines?",
      options: [{ key: "a", text: "Only primary aromatic amines can be N-nitrosated." }, { key: "b", text: "Every nitrogen compound forms the same nitrosamine." }, { key: "c", text: "Secondary aromatic amines can also be N-nitrosated." }, { key: "d", text: "N-nitrosamines contain no nitrogen-oxygen bond." }],
      answer: "c", explanation: "N-nitrosation is not confined to secondary aliphatic amines. Secondary aromatic amines can also form N-nitrosamines, so the source's word 'only' is the misleading restriction.", sectionId: "nitrous-acid-azo-tests", source: { document: "quick-revision", page: 84 }, cognitive: "understanding"
    },
    {
      id: "note-amines-014", text: "An azo-coupling experiment gives a red dye instead of the source's orange example. Which interpretation is justified?",
      options: [{ key: "a", text: "The product cannot contain an azo linkage." }, { key: "b", text: "Diazotization must always have failed completely." }, { key: "c", text: "The product must be a quaternary ammonium salt." }, { key: "d", text: "Different coupling components can give different colours." }],
      answer: "d", explanation: "The colour of an azo dye depends on its conjugated structure, substituents and conditions. Orange is a recorded example, not a required colour for every successful azo-coupling reaction.", sectionId: "nitrous-acid-azo-tests", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-015", text: "Aniline is exposed to excess bromine water without amino-group protection. Which substitution product is expected?",
      options: [{ key: "a", text: "3-Bromoaniline" }, { key: "b", text: "2,4,6-Tribromoaniline" }, { key: "c", text: "3,5-Dibromoaniline" }, { key: "d", text: "4-Bromoacetanilide" }],
      answer: "b", explanation: "The unprotected amino group strongly activates the two ortho positions and the para position. Bromine water therefore gives 2,4,6-tribromoaniline, rather than the protected monobromination product.", sectionId: "aniline-substitution-map", source: { document: "quick-revision", page: 84 }, cognitive: "recall"
    },
    {
      id: "note-amines-016", text: "Acetanilide is brominated to predominantly p-bromoacetanilide. What step is still required to obtain p-bromoaniline?",
      options: [{ key: "a", text: "Hydrolysis of the acetyl protecting group" }, { key: "b", text: "Addition of two further bromine substituents" }, { key: "c", text: "Oxidation of both ring para carbons" }, { key: "d", text: "Replacement of bromine by a nitro group" }],
      answer: "a", explanation: "Bromination does not remove the nitrogen's acetyl group. Hydrolysis converts the protected NHCOCH3 substituent back into NH2, giving the p-bromoaniline shown at the end of the source scheme.", sectionId: "aniline-substitution-map", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-017", text: "Which sequence explains the protected route from aniline to predominantly p-nitroaniline?",
      options: [{ key: "a", text: "Diazotization, sulfonation, then reduction" }, { key: "b", text: "Acetylation, nitration, then hydrolysis" }, { key: "c", text: "Bromination, alkylation, then oxidation" }, { key: "d", text: "Hydrolysis, diazotization, then bromination" }],
      answer: "b", explanation: "Acetylation protects the amino group as acetanilide; nitration gives mainly the para nitro derivative. Hydrolysis then removes the acetyl group while retaining the ring nitro substituent.", sectionId: "aniline-substitution-map", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-018", text: "Which para substituent accompanies NH<sub>2</sub> in sulfanilic acid obtained by heating aniline with concentrated sulfuric acid?",
      options: [{ key: "a", text: "-COOH" }, { key: "b", text: "-NO<sub>2</sub>" }, { key: "c", text: "-SO<sub>3</sub>H" }, { key: "d", text: "-COCH<sub>3</sub>" }],
      answer: "c", explanation: "Sulfanilic acid is the para amino-substituted benzenesulfonic acid. Its ring carries NH2 and SO3H at opposite positions; carboxylation or nitration would give different functional groups.", sectionId: "aniline-substitution-map", source: { document: "quick-revision", page: 84 }, cognitive: "recall"
    },
    {
      id: "note-amines-019", text: "In the balanced preparation of benzenediazonium chloride from aniline, NaNO<sub>2</sub> and 2HCl, which coproduct accompanies NaCl?",
      options: [{ key: "a", text: "2H<sub>2</sub>O" }, { key: "b", text: "2N<sub>2</sub>O" }, { key: "c", text: "2NH<sub>3</sub>" }, { key: "d", text: "2NO<sub>2</sub>" }],
      answer: "a", explanation: "The two oxygens from nitrite and the hydrogen balance produce two water molecules. The printed 2N2O would violate the nitrogen balance because the diazonium product already contains both reactant nitrogen atoms.", sectionId: "aniline-oxidation-diazotization", source: { document: "quick-revision", page: 84 }, cognitive: "application"
    },
    {
      id: "note-amines-020", text: "Which product is drawn in the aniline oxidation branch using acidified potassium dichromate?",
      options: [{ key: "a", text: "Benzenediazonium chloride" }, { key: "b", text: "Phenyl isocyanide" }, { key: "c", text: "Sulfanilic acid" }, { key: "d", text: "p-Benzoquinone" }],
      answer: "d", explanation: "The oxidation branch shows p-benzoquinone, with two opposite carbonyl groups on the six-membered ring. The other products belong to diazotization, carbylamine formation and sulfonation, respectively.", sectionId: "aniline-oxidation-diazotization", source: { document: "quick-revision", page: 84 }, cognitive: "recall"
    }
  ]
};