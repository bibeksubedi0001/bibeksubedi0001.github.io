const DAY40 = {
    day: 40,
    title: "Day 40",
    subtitle: "Mistake Review, Biodiversity and Day 39",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "zoology40",
            name: "Zoology - Targeted Review",
            subject: "Zoology",
            accent: "rose",
            blurb: "Nine variants covering animal organization, immunity, development, evolution and human physiology.",
            questions: [
                {
                    id: "d40z1",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 1 },
                    text: "Water enters an animal through many small pores, passes through a system containing flagellated collar cells, and leaves through a large opening. The animal has specialized cells but no true tissues or digestive cavity. Which pairing best identifies its phylum and level of organization?",
                    options: [
                        { key: "a", text: "Cnidaria; tissue level" },
                        { key: "b", text: "Porifera; cellular level" },
                        { key: "c", text: "Platyhelminthes; organ level" },
                        { key: "d", text: "Annelida; organ-system level" }
                    ],
                    answer: "b",
                    explanation: "Pores, a water-canal system and choanocytes identify a sponge. Its differentiated cells cooperate without forming the true tissues of cnidarians or the organs of more complex animals. Food capture and digestion are associated with individual cells, not a true gut. This is the cellular level of organization in Porifera."
                },
                {
                    id: "d40z5",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 5 },
                    text: "Two people have the same ABO blood group, but additional matching is needed before a tissue transplant. Which human molecules present peptide antigens to T cells and are central to this tissue-compatibility assessment?",
                    options: [
                        { key: "a", text: "Secreted IgE antibodies" },
                        { key: "b", text: "ABO antigens alone" },
                        { key: "c", text: "Haemoglobin molecules" },
                        { key: "d", text: "HLA molecules" }
                    ],
                    answer: "d",
                    explanation: "Human major histocompatibility complex molecules are called human leukocyte antigens, or HLA. They display peptides to T cells and strongly influence recognition of transplanted tissue. ABO compatibility addresses a different antigen system and does not establish HLA compatibility; HLA molecules are not circulating immunoglobulins."
                },
                {
                    id: "d40z9",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 9 },
                    text: "Soon after a person's first exposure to a new antigen, an early serum antibody response is dominated by a large pentameric immunoglobulin that efficiently activates complement. Which class best fits this description?",
                    options: [
                        { key: "a", text: "IgM" },
                        { key: "b", text: "IgG" },
                        { key: "c", text: "IgE" },
                        { key: "d", text: "IgD" }
                    ],
                    answer: "a",
                    explanation: "Secreted IgM is usually pentameric and is the first major antibody class of a primary response. IgG becomes more prominent later and often dominates secondary responses. The serum context matters: membrane-bound IgM on a B cell is monomeric, so pentameric is not a description of every form of IgM."
                },
                {
                    id: "d40z12",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 12 },
                    text: "A healed primary tuberculosis infection has left both a calcified subpleural pulmonary focus and calcified regional hilar lymph nodes. What is the most specific name for this combined calcified finding?",
                    options: [
                        { key: "a", text: "A Ghon focus alone" },
                        { key: "b", text: "Miliary tuberculosis" },
                        { key: "c", text: "A Ranke complex" },
                        { key: "d", text: "An apical cavitary lesion" }
                    ],
                    answer: "c",
                    explanation: "A Ghon focus is the primary lung lesion. The primary lesion with regional nodal involvement forms the Ghon complex; when both components become calcified, the more specific term is Ranke complex. Miliary disease is disseminated disease with numerous small lesions, not the described healed lung-and-node combination."
                },
                {
                    id: "d40z17",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 17 },
                    text: "Early cleavage of a frog embryo produces smaller cells toward one pole and larger, more yolk-rich cells toward the other. Which region contains the larger cells, and why does cleavage proceed more slowly there?",
                    options: [
                        { key: "a", text: "Animal hemisphere; it has most of the yolk" },
                        { key: "b", text: "Vegetal hemisphere; its greater yolk content impedes cleavage" },
                        { key: "c", text: "Grey crescent; it is the only region containing yolk" },
                        { key: "d", text: "Animal hemisphere; it lacks a nucleus" }
                    ],
                    answer: "b",
                    explanation: "Yolk is concentrated toward the vegetal pole of the frog egg. It interferes with cleavage, leaving larger vegetal blastomeres than the more rapidly dividing animal-pole cells. The grey crescent is important in establishing the embryonic axis, but is not the egg's principal yolk-storage region."
                },
                {
                    id: "d40z24",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 24 },
                    text: "In a conventional textbook comparison, fossil A is an early Homo form with a cranial capacity around 650 cm<sup>3</sup> and an association with Oldowan tools. Fossil B has a larger brain, around 1,000 cm<sup>3</sup>, and is commonly associated with Acheulean handaxes. Which pair best matches A and B?",
                    options: [
                        { key: "a", text: "Homo sapiens; Homo habilis" },
                        { key: "b", text: "Homo erectus; Homo habilis" },
                        { key: "c", text: "Homo sapiens; Australopithecus afarensis" },
                        { key: "d", text: "Homo habilis; Homo erectus" }
                    ],
                    answer: "d",
                    explanation: "The combination for A is the standard Homo habilis comparison, while B fits Homo erectus. Cranial capacities vary and overlap, so a single volume is not an absolute diagnostic boundary. Likewise, tool traditions are archaeological associations rather than proof that only one hominin species ever made a particular tool type."
                },
                {
                    id: "d40z26",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 26 },
                    text: "A healthy person loses water through prolonged sweating without replacing it, raising plasma osmolality. Which response helps conserve water through the kidneys?",
                    options: [
                        { key: "a", text: "Increased ADH release and increased collecting-duct water permeability" },
                        { key: "b", text: "Suppressed ADH release and production of a large volume of dilute urine" },
                        { key: "c", text: "Removal of aquaporins from collecting-duct cell membranes" },
                        { key: "d", text: "Complete cessation of all filtration as the normal first response" }
                    ],
                    answer: "a",
                    explanation: "The rise in osmolality stimulates ADH release. ADH promotes aquaporin insertion in collecting-duct cells, increasing water reabsorption when an appropriate medullary gradient is present. Urine volume falls and urine becomes more concentrated. Suppressed ADH and dilute urine are instead expected after an adequate excess-water intake."
                },
                {
                    id: "d40z35",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 35 },
                    text: "A hearing defect is caused by fixation of the stapes, while the cochlear hair cells and auditory nerve remain functional. Which process is primarily impaired?",
                    options: [
                        { key: "a", text: "Conversion of sound into receptor signals by damaged cochlear hair cells" },
                        { key: "b", text: "Interpretation of sound in a damaged auditory cortex" },
                        { key: "c", text: "Mechanical transmission of vibration through the middle-ear ossicles" },
                        { key: "d", text: "Detection of angular acceleration by the semicircular canals" }
                    ],
                    answer: "c",
                    explanation: "The stapes is one of the three middle-ear ossicles and transmits vibration toward the oval window. Its fixation interferes with sound conduction even if sensory hair cells and the nerve remain intact. That is a conductive defect, distinct from sensorineural damage or a vestibular balance disorder."
                },
                {
                    id: "d40z39",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 39 },
                    text: "Reduced renal perfusion pressure stimulates juxtaglomerular cells. Which hormonal sequence contributes to restoring arterial pressure?",
                    options: [
                        { key: "a", text: "Reduced renin, followed by reduced angiotensin II" },
                        { key: "b", text: "Increased renin, followed by increased formation of angiotensin II" },
                        { key: "c", text: "Increased insulin, which directly converts angiotensinogen to angiotensin II" },
                        { key: "d", text: "Increased renin, which directly converts angiotensin II into angiotensinogen" }
                    ],
                    answer: "b",
                    explanation: "Low renal perfusion is a stimulus for renin release. Renin converts angiotensinogen to angiotensin I, which ACE converts to angiotensin II. Angiotensin II promotes vasoconstriction and aldosterone release, supporting pressure and volume restoration. Renin does not directly produce angiotensin II in a single step."
                }
            ]
        },
        {
            id: "botany40",
            name: "Botany and Genetics - Targeted Review",
            subject: "Botany",
            accent: "emerald",
            blurb: "Sixteen variants on plant structure, microbes, biomolecules, inheritance, physiology and applied biology.",
            questions: [
                {
                    id: "d40b41",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 41 },
                    text: "Most cells in the food-storing region of a plant organ are living, have thin primary walls, large vacuoles and abundant stored starch. Which tissue forms this storage region?",
                    options: [
                        { key: "a", text: "Sclerenchyma fibres" },
                        { key: "b", text: "Collenchyma with corner thickenings" },
                        { key: "c", text: "Xylem vessel elements" },
                        { key: "d", text: "Storage parenchyma" }
                    ],
                    answer: "d",
                    explanation: "Parenchyma consists of living, generally thin-walled cells and commonly forms the bulk of storage organs. Collenchyma mainly provides flexible support, while sclerenchyma and vessel elements are specialized for other functions. Air-filled aerenchyma is a specialized parenchyma type, not the best description of a starch-rich storage region."
                },
                {
                    id: "d40b44",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 44 },
                    text: "Which pairing correctly identifies the genomes packaged by herpes simplex virus and HIV, respectively?",
                    options: [
                        { key: "a", text: "Double-stranded DNA; single-stranded RNA" },
                        { key: "b", text: "Single-stranded DNA; double-stranded RNA" },
                        { key: "c", text: "Double-stranded RNA; double-stranded DNA" },
                        { key: "d", text: "Single-stranded RNA; single-stranded DNA" }
                    ],
                    answer: "a",
                    explanation: "Herpes simplex is a double-stranded DNA virus. HIV is a retrovirus carrying two copies of a single-stranded RNA genome; reverse transcription produces DNA after infection. The fact that HIV makes a DNA intermediate does not change the type of nucleic acid packaged as its viral genome."
                },
                {
                    id: "d40b45",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 45 },
                    text: "A bacterium grows in a mineral medium in darkness, obtains energy by oxidizing nitrite to nitrate, and uses CO<sub>2</sub> as its principal carbon source. Which organism best fits these conditions?",
                    options: [
                        { key: "a", text: "Rhizobium in a root nodule" },
                        { key: "b", text: "A photosynthetic Rhodospirillum culture dependent on light" },
                        { key: "c", text: "Nitrobacter" },
                        { key: "d", text: "A fermenting Saccharomyces culture" }
                    ],
                    answer: "c",
                    explanation: "Nitrobacter is a nitrite-oxidizing chemolithoautotroph: chemical oxidation supplies energy and carbon fixation supplies organic carbon. Carbon fixation alone would not distinguish every photosynthetic bacterium from a chemoautotroph. Darkness and the specific nitrite-to-nitrate energy reaction make this identification unambiguous.",
                    editorialNote: "The source's bare CO2-fixation question admits more than one autotrophic option. The energy source and growth conditions are specified here."
                },
                {
                    id: "d40b48",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 48 },
                    text: "A collection contains a moss, a fern, a Cycas plant and a rose. First remove all nonvascular plants, then remove all seed-producing plants. Which specimen remains?",
                    options: [
                        { key: "a", text: "The moss" },
                        { key: "b", text: "The fern" },
                        { key: "c", text: "The Cycas plant" },
                        { key: "d", text: "The rose" }
                    ],
                    answer: "b",
                    explanation: "Mosses are nonvascular and are removed at the first step. Cycas is a gymnosperm and rose an angiosperm; both produce seeds and are removed next. A fern is vascular but seedless, reproducing by spores, so it meets both remaining conditions. Vascular plants are not all seed plants."
                },
                {
                    id: "d40b51",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 51 },
                    text: "An underground ginger organ stores food, survives an unfavourable season and later produces new shoots. Nodes, scale leaves and buds occur along it. What is this organ?",
                    options: [
                        { key: "a", text: "A tap root with no nodes" },
                        { key: "b", text: "A tuberous adventitious root" },
                        { key: "c", text: "A swollen leaf blade" },
                        { key: "d", text: "A rhizome, which is a modified stem" }
                    ],
                    answer: "d",
                    explanation: "Ginger has a rhizome: an underground stem bearing nodes, scale leaves and buds. It combines storage, perennation and vegetative propagation. Underground position alone cannot make an organ a root; the nodal and bud-bearing organization establishes its shoot origin."
                },
                {
                    id: "d40b52",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 52 },
                    text: "In a normal catalytic cycle, an enzyme binds its substrate, promotes conversion and releases product. Which statement correctly describes the enzyme immediately after product release, assuming it has not been damaged or inhibited?",
                    options: [
                        { key: "a", text: "It is regenerated and can catalyse another cycle without changing the reaction's equilibrium constant." },
                        { key: "b", text: "It has been consumed as a stoichiometric reactant." },
                        { key: "c", text: "It must have become a different enzyme with a new specificity." },
                        { key: "d", text: "It has permanently supplied energy that reverses the reaction's free-energy change." }
                    ],
                    answer: "a",
                    explanation: "An enzyme can change conformation and form transient intermediates during catalysis, but is regenerated at the end of the normal cycle. It accelerates approach to equilibrium without changing the equilibrium constant or net free-energy change. Reusability does not mean an enzyme is immune to denaturation or inhibition."
                },
                {
                    id: "d40b53",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 53 },
                    text: "Six amino acids are joined into one unbranched, noncyclic peptide with free amino and carboxyl termini. How many peptide bonds are formed, and how many water molecules are released in the net condensation?",
                    options: [
                        { key: "a", text: "6 peptide bonds and 6 water molecules" },
                        { key: "b", text: "5 peptide bonds and 6 water molecules" },
                        { key: "c", text: "5 peptide bonds and 5 water molecules" },
                        { key: "d", text: "6 peptide bonds and 5 water molecules" }
                    ],
                    answer: "c",
                    explanation: "A linear chain of six amino-acid residues needs five links. Each peptide linkage is an amide bond formed between a carboxyl group and an amino group, with one water molecule removed in the net condensation description. A cyclic peptide would require another bond, but cyclization is explicitly excluded."
                },
                {
                    id: "d40b55",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 55 },
                    text: "In an angiosperm, each megaspore mother cell gives one functional embryo sac after meiosis, and each pollen mother cell gives four microspores. Only half of the resulting pollen grains are capable of fertilization. To produce 120 seeds with one successful pollen grain per ovule and no other losses, what minimum total number of mother-cell meioses is needed? Count meiosis I and II together as one meiotic event.",
                    options: [
                        { key: "a", text: "150" },
                        { key: "b", text: "180" },
                        { key: "c", text: "240" },
                        { key: "d", text: "300" }
                    ],
                    answer: "b",
                    explanation: "Producing 120 functional embryo sacs requires 120 megaspore-mother-cell meioses. With only half the pollen usable, 240 pollen grains must be produced, requiring $240/4=60$ pollen-mother-cell meioses. The total is $120+60=180$. Double fertilization uses two sperm from one pollen grain, not two pollen grains per ovule.",
                    editorialNote: "Pollen output and embryo-sac assumptions are explicit, avoiding an unstated genus-specific convention in the source seed-count question."
                },
                {
                    id: "d40b64",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 64 },
                    text: "Two healthy relatives are both confirmed carriers, Aa, of the same fully penetrant autosomal-recessive condition. Which statement correctly separates their child's Mendelian risk from the reason consanguinity raises population risk?",
                    options: [
                        { key: "a", text: "Relatedness makes the risk 50% even though both genotypes are Aa." },
                        { key: "b", text: "Their relationship creates a new disease mutation in every pregnancy." },
                        { key: "c", text: "Every fourth child must be affected in a fixed birth order." },
                        { key: "d", text: "Each pregnancy has a 25% affected risk; relatedness increases the chance that parents share a recessive allele." }
                    ],
                    answer: "d",
                    explanation: "The cross Aa by Aa gives AA, Aa, Aa and aa, so each pregnancy has a one-quarter probability of the affected genotype. Relatives are more likely to carry the same allele inherited from a common ancestor. Once both parental genotypes are known, the cross determines the risk; births do not follow a compulsory one-in-four sequence."
                },
                {
                    id: "d40b65",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 65 },
                    text: "A woman carries an X-linked recessive allele causing factor IX deficiency. Her partner is unaffected. Assuming equal probabilities of male and female births and ordinary Mendelian inheritance, which pairing gives the disease and the probability that a child of either sex is affected?",
                    options: [
                        { key: "a", text: "Haemophilia B (Christmas disease); 25%" },
                        { key: "b", text: "Haemophilia A; 50%" },
                        { key: "c", text: "Haemophilia B; 50% of all children" },
                        { key: "d", text: "Von Willebrand disease; 25%" }
                    ],
                    answer: "a",
                    explanation: "Factor IX deficiency is haemophilia B, also called Christmas disease; factor VIII deficiency is haemophilia A. Half the sons inherit the affected X, while daughters receive a normal paternal X in this cross. The probability for a child of unspecified sex is $1/2$ for being a son times $1/2$ for inheriting the allele, or 25%."
                },
                {
                    id: "d40b68",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 68 },
                    text: "A botanist records which plant species occur together, their relative abundance, the vertical structure of the vegetation and recurring plant-community associations. Which term most specifically names this study of plant communities?",
                    options: [
                        { key: "a", text: "Autecology of a single species" },
                        { key: "b", text: "Palaeozoology" },
                        { key: "c", text: "Phytosociology" },
                        { key: "d", text: "Cytogenetics" }
                    ],
                    answer: "c",
                    explanation: "Phytosociology specifically examines the composition, organization and relationships of plant communities. Community ecology or synecology is broader and need not focus only on vegetation. Autecology concentrates on an individual species in relation to its environment, not the multi-species plant associations described here."
                },
                {
                    id: "d40b71",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 71 },
                    text: "A plant cell is at incipient plasmolysis and has an osmotic pressure of 0.70 MPa. Neglect matric and gravitational contributions. In the traditional DPD description and the water-potential description, what are its DPD and water potential, respectively?",
                    options: [
                        { key: "a", text: "0 MPa; 0 MPa" },
                        { key: "b", text: "+0.70 MPa; -0.70 MPa" },
                        { key: "c", text: "-0.70 MPa; +0.70 MPa" },
                        { key: "d", text: "+0.70 MPa; +0.70 MPa" }
                    ],
                    answer: "b",
                    explanation: "At incipient plasmolysis, turgor pressure is zero. The older relation DPD = OP - TP therefore gives a positive DPD equal to the osmotic pressure. Osmotic potential has the opposite sign to osmotic pressure, and pressure potential is zero, so water potential is -0.70 MPa. The two quantities must not be assigned the same sign."
                },
                {
                    id: "d40b72",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 72 },
                    text: "For a short-term comparison of transpiration, which measurement is NOT itself a direct environmental control of the vapour-pressure gradient or the leaf's boundary-layer resistance?",
                    options: [
                        { key: "a", text: "Air relative humidity" },
                        { key: "b", text: "Air movement around the leaf" },
                        { key: "c", text: "Air temperature" },
                        { key: "d", text: "The leaf's chlorophyll concentration" }
                    ],
                    answer: "d",
                    explanation: "Humidity and temperature influence evaporation conditions, while air movement affects boundary-layer resistance. Chlorophyll concentration is a leaf biochemical property rather than one of those direct environmental variables. It can have indirect effects through physiology, so this does not mean chlorophyll can never influence transpiration in any context."
                },
                {
                    id: "d40b74",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 74 },
                    text: "Two turns of the Krebs cycle, corresponding to one glucose, produce six NADH, two FADH<sub>2</sub> and two GTP. Using 2.5 ATP per NADH, 1.5 ATP per FADH<sub>2</sub> and one ATP equivalent per GTP, what is their total ATP-equivalent yield? Exclude glycolysis and pyruvate oxidation.",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "24" },
                        { key: "c", text: "2" },
                        { key: "d", text: "32" }
                    ],
                    answer: "a",
                    explanation: "The total is $6(2.5)+2(1.5)+2=20$ ATP equivalents. Only the two GTP are produced directly by substrate-level phosphorylation in the cycle; the remaining equivalents require oxidation of its reduced coenzymes. The older 3 ATP/NADH and 2 ATP/FADH2 convention would give 24, which is not the convention specified here.",
                    editorialNote: "The source uses the older 24-ATP convention without saying so. This variant states the accounting assumptions explicitly."
                },
                {
                    id: "d40b76",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 76 },
                    text: "A dwarf pea mutant cannot synthesize enough active gibberellin, but its hormone receptors and downstream response machinery are intact. Which treatment is most directly expected to restore internode elongation?",
                    options: [
                        { key: "a", text: "Abscisic acid" },
                        { key: "b", text: "A treatment that further blocks gibberellin synthesis" },
                        { key: "c", text: "Gibberellic acid" },
                        { key: "d", text: "Removal of all available water" }
                    ],
                    answer: "c",
                    explanation: "Supplying an active gibberellin can bypass a biosynthetic shortage when the plant can still perceive and respond to the hormone. Gibberellins promote stem elongation in such responsive dwarf mutants. This reasoning does not guarantee rescue of a dwarf mutant whose receptor or signalling pathway is defective."
                },
                {
                    id: "d40b78",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 78 },
                    text: "Sandiness in a concentrated dairy product can result from lactose crystallization. Which enzyme converts lactose into glucose and galactose and can reduce the lactose available to crystallize?",
                    options: [
                        { key: "a", text: "Invertase" },
                        { key: "b", text: "Lactase (beta-galactosidase)" },
                        { key: "c", text: "Cellulase" },
                        { key: "d", text: "Pectinase" }
                    ],
                    answer: "b",
                    explanation: "Lactase hydrolyses the bond in lactose, producing glucose and galactose. Invertase acts on sucrose, cellulase on cellulose and pectinase on pectin. The substrate-product pair identifies the required enzyme without relying on the source's questionable attribution of dairy lactase to ordinary Saccharomyces cerevisiae."
                }
            ]
        },
        {
            id: "chemistry40",
            name: "Chemistry - Targeted Review",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Sixteen variants on organic identification, materials, inorganic chemistry, analysis and physical chemistry.",
            questions: [
                {
                    id: "d40c84",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 84 },
                    text: "Which aromatic substrate generally fails to undergo an ordinary Friedel-Crafts alkylation with an alkyl halide and anhydrous AlCl<sub>3</sub> because its substituent strongly complexes with the Lewis-acid catalyst?",
                    options: [
                        { key: "a", text: "Benzene" },
                        { key: "b", text: "Toluene" },
                        { key: "c", text: "Ethylbenzene" },
                        { key: "d", text: "Aniline" }
                    ],
                    answer: "d",
                    explanation: "The amino group of aniline coordinates strongly with AlCl3, producing a strongly deactivated complex under ordinary Friedel-Crafts conditions. Its free amino group cannot simply be treated as an activating substituent while ignoring the catalyst interaction. Benzene and the two alkylbenzenes are not excluded for this reason."
                },
                {
                    id: "d40c86",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 86 },
                    text: "A compound with molecular formula C<sub>2</sub>H<sub>6</sub>O releases H<sub>2</sub> with sodium. Under the usual higher-temperature acid-dehydration conditions, it gives a gas that decolorizes bromine water. Which pair identifies the original compound and the gas?",
                    options: [
                        { key: "a", text: "Ethanol; ethene" },
                        { key: "b", text: "Dimethyl ether; ethane" },
                        { key: "c", text: "Ethanol; carbon dioxide" },
                        { key: "d", text: "Ethanal; ethene" }
                    ],
                    answer: "a",
                    explanation: "Ethanol and dimethyl ether share the formula C2H6O, but ethanol has the O-H proton needed for the usual sodium reaction. Its intramolecular dehydration gives ethene, whose double bond reacts with bromine. Ethanal has a different molecular formula, and carbon dioxide does not account for the unsaturation test."
                },
                {
                    id: "d40c87",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 87 },
                    text: "Ethanol mixes with water much more readily than hexan-1-ol, even though both contain one OH group. Which explanation best accounts for this difference?",
                    options: [
                        { key: "a", text: "Only hexan-1-ol forms hydrogen bonds with water." },
                        { key: "b", text: "Ethanol is completely ionized in neutral water." },
                        { key: "c", text: "Both can hydrogen-bond, but ethanol has a much smaller hydrophobic carbon portion." },
                        { key: "d", text: "Hexan-1-ol has no oxygen atom." }
                    ],
                    answer: "c",
                    explanation: "Both alcohols can donate and accept hydrogen bonds through OH. As the nonpolar hydrocarbon chain grows, its hydrophobic contribution increasingly opposes mixing with water. The difference is therefore a balance between the polar group and nonpolar portion, not a complete absence of hydrogen bonding in the longer-chain alcohol."
                },
                {
                    id: "d40c88",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 88 },
                    text: "An aromatic compound, C<sub>9</sub>H<sub>11</sub>Br, readily gives AgBr with alcoholic AgNO<sub>3</sub>. Vigorous side-chain oxidation gives a benzene dicarboxylic acid that readily forms a five-membered cyclic anhydride on heating. Which structure best fits both observations?",
                    options: [
                        { key: "a", text: "1-(Bromomethyl)-3-ethylbenzene" },
                        { key: "b", text: "1-(Bromomethyl)-2-ethylbenzene" },
                        { key: "c", text: "1-(Bromomethyl)-4-ethylbenzene" },
                        { key: "d", text: "1-Bromo-2-propylbenzene" }
                    ],
                    answer: "b",
                    explanation: "A benzylic bromide releases bromide readily in the silver-nitrate test, unlike an ordinary aryl bromide. Both oxidizable side chains must occupy adjacent positions so oxidation gives benzene-1,2-dicarboxylic acid, or phthalic acid, which readily cyclizes to its anhydride. Meta and para placement fail that final structural requirement.",
                    editorialNote: "AgBr is cream or pale yellow, not the white AgCl precipitate stated in the scan. This variant avoids that colour error."
                },
                {
                    id: "d40c93",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 93 },
                    text: "Which compound is expected to give both a positive Benedict's test and a positive iodoform test under the usual test conditions?",
                    options: [
                        { key: "a", text: "Propanone" },
                        { key: "b", text: "Benzaldehyde" },
                        { key: "c", text: "Propanoic acid" },
                        { key: "d", text: "Ethanal" }
                    ],
                    answer: "d",
                    explanation: "Ethanal is an aliphatic aldehyde that reduces Benedict's reagent and is also the aldehyde exception that gives iodoform. Propanone gives iodoform but not the ordinary Benedict's test. Benzaldehyde does not normally reduce this alkaline copper reagent, while propanoic acid gives neither of the stated positive responses."
                },
                {
                    id: "d40c94",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 94 },
                    text: "In the simple decarboxylation of alanine, CH<sub>3</sub>CH(NH<sub>2</sub>)COOH, the carboxyl group is lost as CO<sub>2</sub> and replaced by H. Which nitrogen-containing organic product results?",
                    options: [
                        { key: "a", text: "Ethylamine, CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>" },
                        { key: "b", text: "Acetamide, CH<sub>3</sub>CONH<sub>2</sub>" },
                        { key: "c", text: "Methylamine, CH<sub>3</sub>NH<sub>2</sub>" },
                        { key: "d", text: "Propan-1-amine, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>" }
                    ],
                    answer: "a",
                    explanation: "Alanine has three carbons, and decarboxylation removes the carboxyl carbon. The remaining CH3-CH(NH2)- fragment gains H to give CH3CH2NH2, a primary amine. It is not an amide because no carbonyl is retained, and the two-carbon skeleton distinguishes it from methylamine or propylamine."
                },
                {
                    id: "d40c98",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 98 },
                    text: "A lightly cross-linked material based mainly on cis-1,4-polyisoprene can be stretched considerably and largely returns to its original shape when the load is removed. Which polymer class best describes this behaviour?",
                    options: [
                        { key: "a", text: "A rigid inorganic crystal" },
                        { key: "b", text: "A low-molecular-mass monomer" },
                        { key: "c", text: "An elastomer" },
                        { key: "d", text: "A permanently flowing liquid with no restoring network" }
                    ],
                    answer: "c",
                    explanation: "Rubber's flexible polymer chains can change conformation during stretching. Sparse cross-links limit permanent slippage and support recovery, producing elastomeric behaviour. The recovery does not require repeatedly breaking and rebuilding the carbon backbone. Dense cross-linking would instead make the material much more rigid."
                },
                {
                    id: "d40c100",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 100 },
                    text: "Which substance is incorrectly listed as a conventional oxidizing bleaching agent for chemical wood pulp?",
                    options: [
                        { key: "a", text: "Chlorine dioxide" },
                        { key: "b", text: "Ammonia" },
                        { key: "c", text: "Hydrogen peroxide" },
                        { key: "d", text: "Sodium hypochlorite" }
                    ],
                    answer: "b",
                    explanation: "Chlorine dioxide, hydrogen peroxide and hypochlorite have established roles as oxidizing bleaching chemicals, although particular industrial processes differ. Ammonia is not a conventional oxidizing pulp bleach. Alkali used for extraction in a multistage process should also be distinguished from the oxidant that carries out bleaching."
                },
                {
                    id: "d40c101",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 101 },
                    text: "In a qualitative-analysis observation, a gas produces a black precipitate of CuS when it contacts a suitable copper(II) solution. Which gas supplies the sulfide needed for this result?",
                    options: [
                        { key: "a", text: "NH<sub>3</sub>" },
                        { key: "b", text: "CH<sub>4</sub>" },
                        { key: "c", text: "CO<sub>2</sub>" },
                        { key: "d", text: "H<sub>2</sub>S" }
                    ],
                    answer: "d",
                    explanation: "Hydrogen sulfide supplies sulfide for precipitation of black copper(II) sulfide. The other gases cannot supply the sulfur atom required by CuS. Ammonia instead forms copper complexes under appropriate conditions. Gas identity should not be tested by smelling an unknown gas; H2S is highly toxic.",
                    editorialNote: "The source combines a fishy-odour description with a sulfide test. The precipitate chemistry is the reliable identifying clue used here."
                },
                {
                    id: "d40c103",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 103 },
                    text: "The low-temperature superconductor K<sub>3</sub>C<sub>60</sub> is based on a carbon allotrope with closed molecular cages. Which allotrope supplies those C<sub>60</sub> cages?",
                    options: [
                        { key: "a", text: "Fullerene" },
                        { key: "b", text: "Diamond" },
                        { key: "c", text: "Ordinary graphite sheets" },
                        { key: "d", text: "Amorphous lampblack" }
                    ],
                    answer: "a",
                    explanation: "C60 is a molecular fullerene with a closed carbon cage. Alkali-metal doping of suitable fullerene solids can produce superconductivity at low temperature, as in K3C60. This is not a statement that pristine C60 or every form of carbon is automatically a superconductor; the material composition and conditions matter."
                },
                {
                    id: "d40c105",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 105 },
                    text: "The high-carbon iron tapped directly from a blast furnace is to undergo further refining to make steel. Which name identifies this immediate furnace product, rather than the refined low-carbon material?",
                    options: [
                        { key: "a", text: "Wrought iron" },
                        { key: "b", text: "Mild steel" },
                        { key: "c", text: "Pig iron" },
                        { key: "d", text: "Electrolytically pure iron" }
                    ],
                    answer: "c",
                    explanation: "The direct high-carbon blast-furnace product is pig iron. Its carbon and other impurities must be adjusted during further processing for steel manufacture. Wrought iron is very low in carbon, and mild steel is already a refined steel category; neither names the initial tapped furnace product."
                },
                {
                    id: "d40c109",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 109 },
                    text: "Which statement correctly describes nitric oxide, NO, rather than assuming that every stable-looking diatomic molecule has all electrons paired?",
                    options: [
                        { key: "a", text: "It is a diamagnetic acidic oxide with no unpaired electron." },
                        { key: "b", text: "It is a neutral oxide and is paramagnetic because it has an unpaired electron." },
                        { key: "c", text: "It is a basic oxide that cannot react with oxygen." },
                        { key: "d", text: "It is an ionic solid composed of N<sup>+</sup> and O<sup>-</sup>." }
                    ],
                    answer: "b",
                    explanation: "NO is a neutral oxide and an odd-electron molecule, so it is paramagnetic. It can react with oxygen to form NO2. In the elementary molecular-orbital description its bond order is 2.5; neutrality of the molecule does not require all of its electrons to be paired."
                },
                {
                    id: "d40c112",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 112 },
                    text: "An acidified iron(II) solution is titrated with potassium permanganate. Why is phenolphthalein unnecessary and inappropriate for detecting the usual endpoint?",
                    options: [
                        { key: "a", text: "This is an acid-base titration whose equivalence point is always pH 7." },
                        { key: "b", text: "Starch is always required whenever permanganate is present." },
                        { key: "c", text: "Permanganate loses all colour only after an unlimited excess is added." },
                        { key: "d", text: "Permanganate acts as a self-indicator; a persistent faint pink colour marks a slight excess." }
                    ],
                    answer: "d",
                    explanation: "This is a redox titration. While iron(II) remains, added permanganate is reduced; a small excess subsequently gives a persistent faint pink colour. Phenolphthalein reports an acid-base colour transition rather than this redox endpoint. An acidified medium does not make every titration conducted in it an acid-base titration."
                },
                {
                    id: "d40c113",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 113 },
                    text: "A mixture contains naphthalene and benzoic acid. Which separation principle most selectively transfers benzoic acid into an aqueous phase while leaving naphthalene in an immiscible organic phase?",
                    options: [
                        { key: "a", text: "Convert benzoic acid into water-soluble sodium benzoate using aqueous bicarbonate." },
                        { key: "b", text: "Assume only naphthalene can sublime and separate by heating alone." },
                        { key: "c", text: "Convert naphthalene into sodium benzoate using water alone." },
                        { key: "d", text: "Use filtration to separate two molecularly dissolved solutes in one liquid phase." }
                    ],
                    answer: "a",
                    explanation: "Bicarbonate reacts with the carboxylic acid to form an ionic benzoate salt, which favours the aqueous phase. Neutral naphthalene remains mainly in the organic phase. Acidification of the separated benzoate solution can recover benzoic acid. Sublimation alone is not a reliable distinction because both original compounds can sublime.",
                    editorialNote: "The source offers sublimation despite both substances being sublimable. The variant tests a selective acid-base separation instead."
                },
                {
                    id: "d40c124",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 124 },
                    text: "A fixed amount of an ideal gas is compressed isothermally until its volume is one third of its original value. What is the final compressibility factor Z = PV/(nRT)?",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "1/3" },
                        { key: "c", text: "1" },
                        { key: "d", text: "0" }
                    ],
                    answer: "c",
                    explanation: "An ideal gas obeys PV = nRT at every state, so its compressibility factor is always one within that model. Isothermal compression triples the pressure when volume becomes one third, leaving PV unchanged. The factor Z must not be confused with the ratio of the final and initial pressures or volumes."
                },
                {
                    id: "d40c130",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 130 },
                    text: "For the gas reaction 2NH<sub>3</sub>(g) &rarr; N<sub>2</sub>(g) + 3H<sub>2</sub>(g), the enthalpy change at 300 K is +92.4 kJ for the reaction as written. Treat the gases as ideal and use R = 8.314 J mol<sup>-1</sup> K<sup>-1</sup>. What is the corresponding internal-energy change to one decimal place?",
                    options: [
                        { key: "a", text: "+97.4 kJ" },
                        { key: "b", text: "+87.4 kJ" },
                        { key: "c", text: "-87.4 kJ" },
                        { key: "d", text: "+92.4 kJ" }
                    ],
                    answer: "b",
                    explanation: "For ideal gases, $\\Delta H=\\Delta U+\\Delta n_gRT$. Here gaseous moles increase from two to four, so $\\Delta n_g=2$. The correction is $2(8.314)(300)/1000=4.9884$ kJ. Subtract it from the stated enthalpy to obtain $\\Delta U=87.4$ kJ. The sign is positive because the reaction is ammonia decomposition as written."
                }
            ]
        },
        {
            id: "physics40",
            name: "Physics - Targeted Review",
            subject: "Physics",
            accent: "blue",
            blurb: "Fourteen variants covering mechanics, elasticity, fields, sound, optics, heat, circuits and modern physics.",
            questions: [
                {
                    id: "d40p134",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 134 },
                    text: "A train stops from 72 km/h in a braking distance of 80 m. With the same mass and constant retarding force, what braking distance is required from 108 km/h? Ignore driver reaction distance and any speed dependence of the braking force.",
                    options: [
                        { key: "a", text: "120 m" },
                        { key: "b", text: "160 m" },
                        { key: "c", text: "320 m" },
                        { key: "d", text: "180 m" }
                    ],
                    answer: "d",
                    explanation: "The braking work equals the loss of kinetic energy, so with constant mass and force the stopping distance is proportional to speed squared. The speed ratio is $108/72=1.5$, giving distance $80(1.5)^2=180$ m. Scaling the distance directly with speed would incorrectly give 120 m."
                },
                {
                    id: "d40p140",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 140 },
                    text: "In a simple cubic atomic-spring model, atoms have spacing $a$ and each bond along the tensile direction behaves as a spring of force constant $k$. For a material with Young's modulus $1.6\\times10^{11}$ Pa and spacing $2.5\\times10^{-10}$ m, what value of $k$ follows from this model?",
                    options: [
                        { key: "a", text: "40 N/m" },
                        { key: "b", text: "64 N/m" },
                        { key: "c", text: "4 N/m" },
                        { key: "d", text: "400 N/m" }
                    ],
                    answer: "a",
                    explanation: "For a bond extension $\\delta a$, the model gives force $k\\delta a$ per area $a^2$ and strain $\\delta a/a$. Thus Young's modulus is $Y=k/a$, giving $k=Ya=40$ N/m. This is a specified microscopic spring model, not a universal exact formula for every real crystal structure."
                },
                {
                    id: "d40p141",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 141 },
                    text: "A point charge of +3 &micro;C is at the centre of an isolated conducting spherical shell whose total charge is -5 &micro;C. In electrostatic equilibrium, what are the charges on the inner and outer shell surfaces, respectively?<svg class='q-fig' viewBox='0 0 300 200' width='300' height='200' role='img' aria-label='A central positive three microcoulomb charge inside the cavity of a conducting spherical shell. The shell has net charge minus five microcoulombs.'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='100' cy='100' r='75'/><circle cx='100' cy='100' r='53'/><path d='M168 65H211'/></g><circle cx='100' cy='100' r='4' fill='currentColor'/><g fill='currentColor' font-family='sans-serif' font-size='14'><text x='85' y='84'>+3 uC</text><text x='199' y='43'>Shell net</text><text x='215' y='61'>-5 uC</text><text x='55' y='194'>Conducting shell</text></g></svg>",
                    options: [
                        { key: "a", text: "+3 &micro;C; -8 &micro;C" },
                        { key: "b", text: "0 &micro;C; -5 &micro;C" },
                        { key: "c", text: "-3 &micro;C; -2 &micro;C" },
                        { key: "d", text: "-3 &micro;C; +2 &micro;C" }
                    ],
                    answer: "c",
                    explanation: "The field inside the conductor must be zero. A Gaussian surface in the conducting material therefore encloses zero net charge, requiring -3 microcoulombs on the cavity surface. The two shell surfaces must still sum to the shell's own -5 microcoulombs, leaving -2 microcoulombs outside. The central charge is not part of the shell's stated net charge."
                },
                {
                    id: "d40p144",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 144 },
                    text: "The potential difference across an ideal capacitor is increased from V to 3V without changing its geometry or its linear dielectric. If its original capacitance and stored energy were C and U, what are their new values?",
                    options: [
                        { key: "a", text: "3C and 3U" },
                        { key: "b", text: "C and 9U" },
                        { key: "c", text: "C and 3U" },
                        { key: "d", text: "3C and 9U" }
                    ],
                    answer: "b",
                    explanation: "Capacitance is fixed by the geometry and dielectric in the stated linear model, so C remains unchanged. Charge rises threefold, but energy is $U=CV^2/2$ and rises ninefold. A change in charge or voltage alone must not be interpreted as a change in the capacitor's capacitance."
                },
                {
                    id: "d40p145",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 145 },
                    text: "A sinusoidal sound wave changes from 400 Hz to 800 Hz while its pressure amplitude is halved. The medium is unchanged. How do pitch and average sound intensity change?",
                    options: [
                        { key: "a", text: "Pitch decreases; intensity doubles" },
                        { key: "b", text: "Pitch is unchanged; intensity halves" },
                        { key: "c", text: "Pitch increases; intensity doubles" },
                        { key: "d", text: "Pitch increases; intensity becomes one quarter" }
                    ],
                    answer: "d",
                    explanation: "Higher frequency gives higher pitch. For a wave in the same medium, intensity is proportional to the square of pressure amplitude, so halving that amplitude gives one-quarter intensity. Pressure amplitude is specified deliberately; using a displacement-amplitude formula without its frequency factor would be a different comparison."
                },
                {
                    id: "d40p149",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 149 },
                    text: "A paraxial beam in air would converge at A. A plane-parallel glass slab of thickness 9.0 cm and refractive index 1.50 is inserted before A, with its faces perpendicular to the beam axis. After leaving the slab into air, where is the new focus relative to A?",
                    options: [
                        { key: "a", text: "3.0 cm farther along the direction of light propagation" },
                        { key: "b", text: "3.0 cm back toward the incident-light side" },
                        { key: "c", text: "6.0 cm farther along the direction of light propagation" },
                        { key: "d", text: "At A; there is no shift" }
                    ],
                    answer: "a",
                    explanation: "The rays bend toward the slab normal inside glass and converge less rapidly over its thickness. They emerge parallel to their original directions but farther from the axis than they would otherwise be. The paraxial focus recedes by $t(1-1/n)=9(1-1/1.5)=3$ cm beyond the original A."
                },
                {
                    id: "d40p150",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 150 },
                    text: "Take refractive indices of glass, water and air as 1.50, 4/3 and 1.00. Angles are measured from the normal in the incident medium. In which case does total internal reflection occur?",
                    options: [
                        { key: "a", text: "Glass to air at 30 degrees" },
                        { key: "b", text: "Air to glass at 60 degrees" },
                        { key: "c", text: "Glass to air at 50 degrees" },
                        { key: "d", text: "Glass to water at 60 degrees" }
                    ],
                    answer: "c",
                    explanation: "For glass to air the critical angle is about 41.8 degrees, so incidence at 50 degrees exceeds it while 30 degrees does not. Air to glass is not passage to a lower refractive index. Glass to water has a critical angle about 62.7 degrees, so 60 degrees is still below the threshold. Both the index direction and angle condition are required."
                },
                {
                    id: "d40p159",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 159 },
                    text: "A uniform rod with constant thermal conductivity has insulated sides, no internal heat generation and ends maintained at 100 degrees C and 20 degrees C. Once one-dimensional steady conduction is established, what is the temperature one quarter of the rod's length from the hot end?",
                    options: [
                        { key: "a", text: "60 degrees C and continuously increasing" },
                        { key: "b", text: "80 degrees C and constant with time" },
                        { key: "c", text: "20 degrees C throughout the rod" },
                        { key: "d", text: "100 degrees C because heat keeps entering" }
                    ],
                    answer: "b",
                    explanation: "Under these assumptions the steady temperature profile is linear. At one quarter of the length, the drop is one quarter of the 80-degree end difference, giving $100-20=80$ degrees C. Steady state means no time variation at each point, not equal temperatures everywhere or absence of heat flow."
                },
                {
                    id: "d40p163",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 163 },
                    text: "A galvanometer has resistance 120 ohms and full-scale current 5.00 mA. What shunt resistance is needed to convert it into a 3.00 A ammeter, approximately?",
                    options: [
                        { key: "a", text: "24.0 ohms" },
                        { key: "b", text: "120 ohms" },
                        { key: "c", text: "0.00200 ohm" },
                        { key: "d", text: "0.200 ohm" }
                    ],
                    answer: "d",
                    explanation: "At full scale the galvanometer drop is $0.00500(120)=0.600$ V. The parallel shunt carries $3.00-0.00500=2.995$ A, so its resistance is $0.600/2.995$, approximately 0.200 ohm. The shunt bypasses most current; adding a large series resistance would instead be the principle of a voltmeter conversion."
                },
                {
                    id: "d40p165",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 165 },
                    text: "A long wire with nonzero electrical resistivity carries a steady direct current. Which statement is correct in the ordinary circuit description?",
                    options: [
                        { key: "a", text: "A nonzero electric field drives current inside the wire, and a magnetic field exists around it." },
                        { key: "b", text: "A steady current requires the electric field inside the resistive wire to be zero." },
                        { key: "c", text: "No magnetic field exists unless the current changes with time." },
                        { key: "d", text: "Only a changing current can transfer energy through a resistive circuit." }
                    ],
                    answer: "a",
                    explanation: "In an ohmic conductor, current density is related to the internal electric field by J = conductivity times E. A steady current also produces a magnetic field outside the wire. This formulation does not assume that an arbitrary neutral idealized wire has a particular external electrostatic field; the internal driving field is the specified electric field here.",
                    editorialNote: "The source's unqualified field-in-the-neighbourhood wording is replaced by an explicit resistive-wire statement."
                },
                {
                    id: "d40p169",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 169 },
                    text: "Let the proton's magnitude of specific charge be s. Approximate an alpha particle as carrying charge +2e and having four proton masses. Which option correctly gives the alpha particle's specific-charge magnitude and the ordering for electron, proton and alpha particle?",
                    options: [
                        { key: "a", text: "2s; electron > alpha particle > proton" },
                        { key: "b", text: "s; proton > electron > alpha particle" },
                        { key: "c", text: "s/2; electron > proton > alpha particle" },
                        { key: "d", text: "s/4; alpha particle > proton > electron" }
                    ],
                    answer: "c",
                    explanation: "An alpha particle has twice the proton charge but approximately four times its mass, so its magnitude of q/m is half the proton value. The electron has the same charge magnitude as the proton but a much smaller mass, giving the largest magnitude. Magnitudes are requested because the electron's signed charge is negative."
                },
                {
                    id: "d40p171",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 171 },
                    text: "Photons of energy 6.0 eV give a stopping potential of 2.5 V from a metal surface. For the same surface, what stopping potential results when photon energy is raised to 8.0 eV, assuming the usual photoelectric equation applies?",
                    options: [
                        { key: "a", text: "3.5 V" },
                        { key: "b", text: "4.5 V" },
                        { key: "c", text: "5.0 V" },
                        { key: "d", text: "8.0 V" }
                    ],
                    answer: "b",
                    explanation: "The original maximum photoelectron kinetic energy is 2.5 eV, so the work function is $6.0-2.5=3.5$ eV. At 8.0 eV photon energy the maximum kinetic energy becomes 4.5 eV, requiring a 4.5 V stopping potential. The work function stays fixed; the stopping potential is not proportional to photon energy through the origin."
                },
                {
                    id: "d40p172",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 172 },
                    text: "The short-wavelength limit of an X-ray tube spectrum is 0.0310 nm. What accelerating voltage is required, assuming the most energetic photon can receive an electron's entire kinetic energy? Use hc = 1.24 keV nm.",
                    options: [
                        { key: "a", text: "4.00 kV" },
                        { key: "b", text: "0.400 kV" },
                        { key: "c", text: "400 kV" },
                        { key: "d", text: "40.0 kV" }
                    ],
                    answer: "d",
                    explanation: "At the cutoff, $eV=hc/\\lambda_{min}$. The maximum photon energy is $1.24/0.0310=40.0$ keV, so electrons must be accelerated through 40.0 kV. This is an energy-conservation calculation for a specified cutoff, rather than assuming every X-ray tube operates at one universal voltage."
                },
                {
                    id: "d40p180",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 180 },
                    text: "In a region where Hubble's linear law applies, a galaxy at 40 Mpc has a recession speed of 2,800 km/s. Ignoring peculiar velocities, what recession speed is predicted for another galaxy at 100 Mpc at the same epoch?",
                    options: [
                        { key: "a", text: "7,000 km/s" },
                        { key: "b", text: "1,120 km/s" },
                        { key: "c", text: "5,600 km/s" },
                        { key: "d", text: "17,500 km/s" }
                    ],
                    answer: "a",
                    explanation: "Hubble's linear relation is v = H0 d. The given galaxy implies H0 = 70 km/s per Mpc, giving $70(100)=7000$ km/s at 100 Mpc. Equivalently, multiply 2800 by the distance ratio 100/40. The law is linear in distance, not inverse or quadratic, under the stated approximation."
                }
            ]
        },
        {
            id: "mat40",
            name: "MAT - Targeted Review",
            subject: "MAT",
            accent: "cyan",
            blurb: "Five variants on analogies, directions, justified actions, work rates and figure counting.",
            questions: [
                {
                    id: "d40m181",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 181 },
                    text: "In the analogy Milk : Ghee :: Crude petroleum : ?, the relationship is a starting material to a useful product obtained by processing it. Which option completes that same relationship?",
                    options: [
                        { key: "a", text: "Refinery" },
                        { key: "b", text: "Oil well" },
                        { key: "c", text: "Kerosene" },
                        { key: "d", text: "Distillation" }
                    ],
                    answer: "c",
                    explanation: "Ghee is a processed product derived from milk, and kerosene is a product obtained from petroleum processing. A refinery is the processing site, an oil well is an extraction source and distillation is a process. They are all related to petroleum but occupy different roles in the analogy.",
                    editorialNote: "The source's wax/grease analogy does not specify a unique relationship. This variant states the relation so only one choice fits."
                },
                {
                    id: "d40m187",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 187 },
                    text: "A four-armed direction sign rotates rigidly so that its arm labelled North now points due East. A traveller follows the arm labelled West for 6 km, then turns left through 90 degrees and walks 8 km. What is the shortest distance and direction from the starting point to the final point?",
                    options: [
                        { key: "a", text: "10 km northeast" },
                        { key: "b", text: "10 km northwest" },
                        { key: "c", text: "14 km northwest" },
                        { key: "d", text: "2 km southwest" }
                    ],
                    answer: "b",
                    explanation: "The sign has turned 90 degrees clockwise, so its West-labelled arm points actual north. After walking 6 km north, a left turn leads west for 8 km. The displacement is therefore northwest with magnitude $\\sqrt{6^2+8^2}=10$ km. The 14 km walked is path length, not shortest separation."
                },
                {
                    id: "d40m189",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 189 },
                    text: "An office receives complaints that an employee has repeatedly insulted colleagues. Policy requires impartial fact-finding and an opportunity to respond before any disciplinary decision, irrespective of union membership. Actions: I. Record the complaints and conduct the required inquiry. II. Transfer the employee as punishment immediately, solely because the employee is a union member. Which action is justified as the next step under the stated policy?",
                    options: [
                        { key: "a", text: "Only II" },
                        { key: "b", text: "Both I and II" },
                        { key: "c", text: "Neither I nor II" },
                        { key: "d", text: "Only I" }
                    ],
                    answer: "d",
                    explanation: "Action I establishes the facts through the procedure explicitly required by the policy. Action II bypasses that procedure and bases punishment on union membership rather than verified conduct. The question asks for the next justified step, not an assumption that the complaint has already been proved.",
                    editorialNote: "The source does not supply enough procedure or evidence to make union referral or transfer a necessary conclusion. The policy is explicit here."
                },
                {
                    id: "d40m193",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 193 },
                    text: "A can complete a job alone in 21 days, B in 28 days and C in 42 days. B and C work together for 4 days, then both leave. At constant additive rates, how many additional days does A alone need to finish the remaining work?",
                    options: [
                        { key: "a", text: "16 days" },
                        { key: "b", text: "20 days" },
                        { key: "c", text: "17 days" },
                        { key: "d", text: "15 days" }
                    ],
                    answer: "a",
                    explanation: "B and C's combined rate is $1/28+1/42=5/84$ job per day. In four days they complete $20/84=5/21$, leaving 16/21. A takes 21 days per whole job, so this remainder takes 16 additional days. Including the first four days would give the total project duration of 20 days, which is not what is asked."
                },
                {
                    id: "d40m200",
                    revisionOf: { paper: "MECEE-BL-MODEL-SET-A", question: 200 },
                    text: "How many rectangles of all sizes have their sides entirely on the drawn lines? Count squares as rectangles if any occur.<svg class='q-fig' viewBox='0 0 300 210' width='300' height='210' role='img' aria-label='An outer rectangle split into two columns by a full vertical line. A full horizontal line crosses its middle. The upper half of the left column has one additional horizontal line, and the lower half of the right column has one additional horizontal line.'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M30 20H270V180H30ZM150 20V180M30 100H270M30 60H150M150 140H270'/></g></svg>",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "12" },
                        { key: "c", text: "15" },
                        { key: "d", text: "18" }
                    ],
                    answer: "c",
                    explanation: "Inside the left column there are four usable horizontal levels, giving six choices of top and bottom. The right column also contributes six. A rectangle spanning both columns can use only the three full-width levels: top, middle and bottom, giving three more. Thus the total is $6+6+3=15$. A partial horizontal line cannot form an edge across the missing half."
                }
            ]
        }
    ]
};

DAY40.chapters.push({
    id: "biodiversity40",
    name: "Biodiversity and Floral Diversity",
    subject: "Botany",
    accent: "emerald",
    blurb: "Twenty-two syllabus-based questions on classification, plant groups, floral characters, useful organisms and medicinal plants.",
    questions: [
        {
            id: "d40bio1",
            text: "Two correctly identified plants are named Solanum tuberosum and Solanum melongena. Which conclusion necessarily follows from their placement in the usual taxonomic hierarchy?",
            options: [
                { key: "a", text: "They are the same species because their generic names match." },
                { key: "b", text: "They belong to the same genus and family, but have different specific epithets." },
                { key: "c", text: "They belong to different families because their second names differ." },
                { key: "d", text: "Their shared genus proves that all their floral and vegetative characters are identical." }
            ],
            answer: "b",
            explanation: "Solanum is the generic name in both binomials, so the plants share the genus and its higher taxonomic groups, including the family. Tuberosum and melongena are different specific epithets. Sharing a genus does not make the organisms one species or require every observable character to be identical."
        },
        {
            id: "d40bio2",
            text: "A three-domain classification separates organisms formerly grouped together in Monera. Which statement correctly compares Bacteria, Archaea and Eukarya?",
            options: [
                { key: "a", text: "Archaea have membrane-bound nuclei, while Bacteria do not." },
                { key: "b", text: "Cyanobacteria belong to Eukarya because they perform oxygenic photosynthesis." },
                { key: "c", text: "All members of all three domains have peptidoglycan cell walls." },
                { key: "d", text: "Bacteria and Archaea lack membrane-bound nuclei, but ordinary bacterial peptidoglycan is not the typical archaeal wall material." }
            ],
            answer: "d",
            explanation: "Both Bacteria and Archaea have prokaryotic cell organization, but they differ in important molecular and membrane features. Typical bacterial walls contain peptidoglycan; archaeal walls do not contain that ordinary bacterial polymer. Cyanobacteria remain Bacteria, despite oxygenic photosynthesis, and Eukarya includes organisms with membrane-bound nuclei."
        },
        {
            id: "d40bio3",
            text: "A bacterial culture in exponential growth starts with 500 viable cells and reaches 16,000 viable cells after 100 minutes. Assume binary fission, a constant generation time, no lag phase and no cell death. What is the generation time?",
            options: [
                { key: "a", text: "20 minutes" },
                { key: "b", text: "10 minutes" },
                { key: "c", text: "25 minutes" },
                { key: "d", text: "5 minutes" }
            ],
            answer: "a",
            explanation: "The population has increased by a factor of $16000/500=32=2^5$. That represents five generations, so each generation lasts $100/5=20$ minutes. The number of new cells is not the number of generations; binary fission repeatedly doubles the whole population under the stated assumptions."
        },
        {
            id: "d40bio4",
            text: "An infectious preparation contains tobacco mosaic virus particles. Which description correctly distinguishes those particles from bacterial cells?",
            options: [
                { key: "a", text: "They contain both a cellular nucleus and their own ribosomes." },
                { key: "b", text: "They multiply independently by binary fission in a sterile nutrient solution." },
                { key: "c", text: "Their RNA genome is enclosed by a protein coat, and reproduction requires a suitable host cell." },
                { key: "d", text: "Their protein coat is a peptidoglycan cell wall around a DNA nucleoid." }
            ],
            answer: "c",
            explanation: "TMV is an RNA virus with a protein capsid and lacks cellular ribosomes and independent metabolic machinery. It depends on a suitable host cell for reproduction. Bacteria are cells with their own ribosomes, whereas a virus particle is not a small bacterial cell and cannot be assigned a peptidoglycan wall or autonomous binary fission."
        },
        {
            id: "d40bio5",
            text: "Fungus X has coenocytic hyphae and forms its asexual spores inside sporangia. Fungus Y has septate hyphae and chains of exposed conidia on brush-like branches. Which pairing best fits these observations?",
            options: [
                { key: "a", text: "X is Penicillium; Y is Mucor." },
                { key: "b", text: "X is Mucor; Y is Penicillium." },
                { key: "c", text: "X and Y must both be mature mushrooms because both make spores." },
                { key: "d", text: "X is Spirogyra; Y is Marchantia." }
            ],
            answer: "b",
            explanation: "Mucor typically has coenocytic mycelium and produces sporangiospores within sporangia. Penicillium has septate hyphae and produces conidia externally on characteristic branched conidiophores. Spore production alone is too general to identify a fungus; hyphal organization and whether spores are enclosed or exposed distinguish these examples."
        },
        {
            id: "d40bio6",
            text: "A fungal reproductive structure usually contains eight sexual spores inside a sac. Another typically bears four sexual spores externally on a club-shaped cell. Which assignment of structures and groups is correct?",
            options: [
                { key: "a", text: "First: a basidium of Basidiomycetes; second: an ascus of Ascomycetes" },
                { key: "b", text: "First: a bacterial endospore; second: a Mucor sporangium" },
                { key: "c", text: "Both are conidiophores producing asexual spores." },
                { key: "d", text: "First: an ascus of Ascomycetes; second: a basidium of Basidiomycetes" }
            ],
            answer: "d",
            explanation: "Ascospores develop inside an ascus, often with eight following meiosis and a subsequent mitosis. Basidiospores are typically borne externally on a basidium, commonly four. These are representative patterns rather than an assertion that every species has exactly the same spore count. Internal versus external spore formation is the key structural distinction."
        },
        {
            id: "d40bio7",
            text: "A lichen is formed by a fungus and a green-algal partner. Which division of functions is most appropriate, without assuming that every lichen fixes atmospheric nitrogen?",
            options: [
                { key: "a", text: "The algal partner photosynthesizes; the fungal partner forms much of the body and helps retain water and minerals." },
                { key: "b", text: "The fungus contains chloroplasts, while the alga absorbs all food from soil." },
                { key: "c", text: "The green alga must fix nitrogen because every photosynthetic organism does so." },
                { key: "d", text: "Both partners lose their cells and become a single vascular plant." }
            ],
            answer: "a",
            explanation: "The photosynthetic partner supplies fixed carbon, while fungal hyphae make most of the lichen structure and support water and mineral retention. Nitrogen fixation is associated with suitable cyanobacterial partners in some lichens, not with every green alga or every lichen. A lichen remains a biological association, not a newly formed vascular-plant organ."
        },
        {
            id: "d40bio8",
            text: "During conjugation in Spirogyra, the contents of two haploid cells fuse. Which statement correctly identifies the usual diploid stage and the event restoring haploidy?",
            options: [
                { key: "a", text: "The whole adult filament is diploid, and mitosis makes haploid gametes." },
                { key: "b", text: "The conjugation tube is diploid, but the zygospore is haploid." },
                { key: "c", text: "The zygospore is diploid, and meiosis associated with its germination restores the haploid phase." },
                { key: "d", text: "No diploid stage occurs because conjugation is always asexual." }
            ],
            answer: "c",
            explanation: "The vegetative Spirogyra filament is haploid. Fusion of the two gametic contents produces a diploid zygospore, and zygotic meiosis during germination returns the life cycle to haploidy. Conjugation is sexual reproduction even though the gametes are not freely swimming flagellated cells."
        },
        {
            id: "d40bio9",
            text: "A marine alga contains fucoxanthin and stores food mainly as laminarin and mannitol. Which grouping and commercially useful wall product best fit this combination?",
            options: [
                { key: "a", text: "Rhodophyceae; agar from its brown pigment" },
                { key: "b", text: "Chlorophyceae; peptidoglycan" },
                { key: "c", text: "Cyanobacteria; cellulose produced by chloroplasts" },
                { key: "d", text: "Phaeophyceae; alginates" }
            ],
            answer: "d",
            explanation: "Fucoxanthin together with laminarin and mannitol is the characteristic brown-algal comparison. Alginates are useful polysaccharides associated with brown-algal cell walls. Agar is chiefly obtained from certain red algae, not from a pigment. Colour, reserve food and wall products should agree rather than being matched independently to different groups."
        },
        {
            id: "d40bio10",
            text: "A haploid Marchantia thallus forms gemmae in gemma cups. Which statement correctly compares a gemma with a capsule of the sporophyte formed after fertilization?",
            options: [
                { key: "a", text: "Both must be diploid because both can ultimately give rise to a new plant." },
                { key: "b", text: "A gemma is a haploid asexual propagule; the capsule belongs to the diploid sporophyte and produces haploid spores by meiosis." },
                { key: "c", text: "A gemma is made by meiosis, while capsule spores are diploid products of mitosis." },
                { key: "d", text: "The gemma is a seed containing an embryo and a pollen grain." }
            ],
            answer: "b",
            explanation: "Gemmae form from the gametophyte without fertilization and retain its haploid chromosome number. The sporophyte develops from the zygote, is diploid and remains attached to the gametophyte. Its capsule produces spores through meiosis. Similar reproductive roles do not imply identical ploidy or the same mode of formation."
        },
        {
            id: "d40bio11",
            text: "A Dryopteris spore germinates into a small green, often heart-shaped prothallus bearing rhizoids, antheridia and archegonia. Which interpretation is correct?",
            options: [
                { key: "a", text: "It is the haploid gametophyte; the familiar leafy fern develops as the diploid sporophyte after fertilization." },
                { key: "b", text: "It is a diploid seedling whose rhizoids are true roots with vascular bundles." },
                { key: "c", text: "It is the diploid sporangium that produces pollen grains." },
                { key: "d", text: "It is a nonliving seed coat left behind by the fern embryo." }
            ],
            answer: "a",
            explanation: "The prothallus is the fern gametophyte produced by a haploid spore. It bears the sex organs, and fertilization produces a diploid zygote that develops into the leafy sporophyte. Rhizoids are not the vascular roots of that sporophyte. A fern can have vascular tissue in its dominant generation without its prothallus having the same organization."
        },
        {
            id: "d40bio12",
            text: "In a Pinus seed, the embryo is nourished by tissue derived from the female gametophyte that developed before fertilization. Which pairing gives the usual ploidy of that nutritive tissue and the embryo, respectively?",
            options: [
                { key: "a", text: "3n and 2n" },
                { key: "b", text: "2n and n" },
                { key: "c", text: "n and 2n" },
                { key: "d", text: "2n and 3n" }
            ],
            answer: "c",
            explanation: "The female gametophyte of Pinus is haploid and is formed before fertilization. The embryo originates from the fertilized egg and is diploid. This nutritive tissue is not the typically triploid endosperm produced through double fertilization in an angiosperm, even though older teaching accounts sometimes use the word endosperm for both."
        },
        {
            id: "d40bio13",
            text: "A flower has K<sub>2+2</sub>, C<sub>4</sub>, A<sub>2+4</sub> and G<sub>(2)</sub>, with a superior ovary. A false septum makes the mature ovary appear bilocular. Which statement correctly interprets this Brassicaceae flower?",
            options: [
                { key: "a", text: "A<sub>2+4</sub> means two long and four short stamens, and the false septum proves axile placentation." },
                { key: "b", text: "It has two short and four long stamens, two fused carpels and parietal placentation." },
                { key: "c", text: "G<sub>(2)</sub> means two separate ovaries, each derived from one free carpel." },
                { key: "d", text: "The four petals must be fused because the carpels are fused." }
            ],
            answer: "b",
            explanation: "The typical mustard androecium is tetradynamous: two shorter and four longer stamens. Its two carpels are united, and ovules show parietal placentation. The secondary false septum does not convert that placentation into axile. Parentheses indicate fusion only in the whorl where they occur, not in every other floral whorl."
        },
        {
            id: "d40bio14",
            text: "In a typical pea bud, the standard petal overlaps the wings, and the wings overlap the keel. Nine staminal filaments unite while one remains free. Which pair of terms describes these two characters?",
            options: [
                { key: "a", text: "Twisted aestivation; syngenesious androecium" },
                { key: "b", text: "Valvate aestivation; monadelphous androecium" },
                { key: "c", text: "Ascending imbricate aestivation; six tetradynamous stamens" },
                { key: "d", text: "Vexillary aestivation; diadelphous androecium" }
            ],
            answer: "d",
            explanation: "The standard-wing-keel overlap is vexillary, or descending imbricate, aestivation. Pea's filament groups of nine united plus one free make the androecium diadelphous. Syngenesious refers instead to united anthers with free filaments. These are representative pea characters, not a claim that every member of the broad Fabaceae has the identical floral plan."
        },
        {
            id: "d40bio15",
            text: "Specimen X has five stamens attached to five united petals and a bicarpellary ovary. Specimen Y has six stamens associated with six tepals and a tricarpellary ovary. Both have superior ovaries with axile placentation. Which pairing best fits the typical syllabus representatives?",
            options: [
                { key: "a", text: "X - Solanum; Y - Lilium" },
                { key: "b", text: "X - Pisum; Y - Brassica" },
                { key: "c", text: "X - Lilium; Y - Solanum" },
                { key: "d", text: "X - Brassica; Y - Pisum" }
            ],
            answer: "a",
            explanation: "Solanum has a typical pentamerous flower with five epipetalous stamens and two fused carpels. Lilium has a trimerous floral plan with six tepals, six stamens and three fused carpels. Both can show axile placentation, so placentation alone does not distinguish them; merosity, stamen number and carpel number complete the diagnosis."
        },
        {
            id: "d40bio16",
            text: "Which reading of P<sub>3+3</sub> A<sub>3+3</sub> G<sub>(3)</sub> is correct for a typical lily flower when its superior ovary is stated separately?",
            options: [
                { key: "a", text: "Three sepals, three petals, three stamens and three free carpels" },
                { key: "b", text: "Six fused petals, six fused stamens and one carpel" },
                { key: "c", text: "Six tepals in two whorls, six stamens in two whorls and three fused carpels" },
                { key: "d", text: "Six ovaries because both P and A contain 3+3" }
            ],
            answer: "c",
            explanation: "P indicates an undifferentiated perianth of tepals, not a separately identified calyx and corolla. The plus signs separate groups or whorls; each 3+3 totals six. Parentheses in G(3) denote carpel union, making a compound gynoecium. The formula alone must not be used to infer an ovary position that has not been marked or stated."
        },
        {
            id: "d40bio17",
            text: "A flower lacks both calyx and corolla but has functional stamens and carpels. Its stamens mature before its stigma becomes receptive. Which description correctly separates floral completeness, sex and maturation timing?",
            options: [
                { key: "a", text: "Complete, bisexual and protogynous" },
                { key: "b", text: "Incomplete, unisexual and protandrous" },
                { key: "c", text: "Complete, dioecious and protandrous" },
                { key: "d", text: "Incomplete, bisexual and protandrous" }
            ],
            answer: "d",
            explanation: "A complete flower has all four principal whorls, so loss of the perianth makes this flower incomplete. The presence of functional stamens and carpels still makes it bisexual. Earlier male maturation is protandry. Neither perianth loss nor different maturation times makes the flower unisexual, and dioecy describes the distribution of unisexual flowers among plants."
        },
        {
            id: "d40bio18",
            text: "An inflorescence has pedicels arising at different heights on its main axis. Lower pedicels are longer, placing the flowers at approximately one level, as shown. Which type is illustrated?<svg class='q-fig' viewBox='0 0 280 205' width='280' height='205' role='img' aria-label='Pedicels arise at different levels on an upright axis. The lower stalks are longer, and all flower centres are at one height.'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M140 185V25M140 150L50 35M140 120L230 35M140 90L95 35M140 60L185 35'/><circle cx='50' cy='28' r='7'/><circle cx='95' cy='28' r='7'/><circle cx='185' cy='28' r='7'/><circle cx='230' cy='28' r='7'/></g></svg>",
            options: [
                { key: "a", text: "An umbel, because every pedicel begins at the same point" },
                { key: "b", text: "A corymb, with unequal pedicels arising at different levels" },
                { key: "c", text: "A spike, because all flowers are sessile" },
                { key: "d", text: "A capitulum of sessile florets on a broad receptacle" }
            ],
            answer: "b",
            explanation: "A corymb has flowers brought to roughly one level by unequal pedicel lengths, with longer lower pedicels. An umbel can also present a level or rounded display, but its pedicels arise from a common region. The diagram clearly shows stalked flowers arising at different heights, excluding both a sessile spike and a capitulum."
        },
        {
            id: "d40bio19",
            text: "Two plants have flattened green organs. In Opuntia the organ bears nodes and buds with reduced leaves; in a phyllode-bearing Acacia it is an expanded petiole replacing the ordinary blade's photosynthetic role. Which statement is correct?",
            options: [
                { key: "a", text: "Opuntia has a phylloclade derived from stem; the Acacia phyllode is derived from the leaf stalk." },
                { key: "b", text: "Both structures are roots because reduced leaves cannot photosynthesize." },
                { key: "c", text: "Opuntia has a phyllode and Acacia a phylloclade." },
                { key: "d", text: "Both must be leaf blades because both are green and flattened." }
            ],
            answer: "a",
            explanation: "The nodes and buds establish the Opuntia organ as a modified stem, a phylloclade. A phyllode is a modified petiole or leaf axis. Similar shape and photosynthetic function do not make structures homologous as the same organ. Their developmental origin and anatomical markers are more useful than colour alone."
        },
        {
            id: "d40bio20",
            text: "A single flower has many free carpels. After fertilization, its separate ovaries form numerous small fruitlets clustered together. Which conclusion is justified without needing to know whether the receptacle also becomes fleshy?",
            options: [
                { key: "a", text: "It is necessarily a multiple fruit formed from many flowers." },
                { key: "b", text: "It must be a simple fruit because only one flower was present." },
                    { key: "c", text: "It is an aggregate fruit; accessory status depends separately on which non-ovarian tissues contribute." },
                { key: "d", text: "It cannot be a fruit because an apocarpous gynoecium lacks ovaries." }
            ],
            answer: "c",
            explanation: "An aggregate fruit develops from the multiple free ovaries of one flower. A multiple fruit instead incorporates products of several flowers in an inflorescence. Accessory versus true fruit concerns the contribution of non-ovarian tissues and is a separate distinction; aggregation alone does not establish that a fruit is accessory."
        },
        {
            id: "d40bio21",
            text: "Azolla is grown as a biofertilizer in rice fields because it harbours a nitrogen-fixing cyanobacterial symbiont, traditionally called Anabaena azollae. Which pairing correctly identifies the host and the symbiont?",
            options: [
                { key: "a", text: "Azolla is a moss; the symbiont is a basidiomycete fungus." },
                { key: "b", text: "Azolla is an angiosperm; the symbiont is a green alga with chloroplasts." },
                { key: "c", text: "Azolla and its symbiont are both seed-producing plants." },
                { key: "d", text: "Azolla is a water fern; the symbiont is a photosynthetic prokaryote capable of nitrogen fixation." }
            ],
            answer: "d",
            explanation: "Azolla is a floating heterosporous fern, not a bryophyte or seed plant. Its cyanobacterial partner is prokaryotic and contributes biologically fixed nitrogen to the association. This links a pteridophyte with a useful bacterium; the nitrogen-fixing organism is not a eukaryotic green alga simply because older names call it blue-green algae."
        },
        {
            id: "d40bio22",
            text: "Consider the Nepal syllabus examples. I. Yarsagumba, Ophiocordyceps sinensis, is an insect-associated fungus, not a flowering herb. II. Sarpagandha, Rauvolfia serpentina, is a source of reserpine. III. The familiar underground ginger organ is a rhizome. IV. Neem and Tulasi are gymnosperms. Which statements are correct?",
            options: [
                { key: "a", text: "Only I and II" },
                { key: "b", text: "Only I, II and III" },
                { key: "c", text: "Only II, III and IV" },
                { key: "d", text: "All four" }
            ],
            answer: "b",
            explanation: "Ophiocordyceps is a fungus associated with insect hosts, Sarpagandha supplies the alkaloid reserpine, and ginger's rhizome is a modified stem. Neem (Azadirachta indica) and Tulasi (Ocimum sanctum) are angiosperms, not gymnosperms. Identifying a medicinal source does not imply that self-administering the organism or an extract is safe or effective."
        }
    ]
});

const DAY40_SYLLABUS = [
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Animal Diversity and Classification", subs: [
            { name: "Porifera", ids: ["d40z1"] }
        ] },
        { topic: "Microbial Diseases and Immunology", subs: [
            { name: "Immunity", ids: ["d40z5", "d40z9"] },
            { name: "Tuberculosis", ids: ["d40z12"] }
        ] },
        { topic: "Study of Selected Animals", subs: [
            { name: "Frog", ids: ["d40z17"] }
        ] },
        { topic: "Evolutionary Biology", subs: [
            { name: "Human Evolution", ids: ["d40z24"] }
        ] },
        { topic: "Human Biology and Physiology", subs: [
            { name: "Excretion", ids: ["d40z26", "d40z39"] },
            { name: "Hearing", ids: ["d40z35"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Plant Anatomy", subs: [
            { name: "Parenchyma", ids: ["d40b41"] }
        ] },
        { topic: "Biodiversity", subs: [
            { name: "Viruses", ids: ["d40b44"] },
            { name: "Bacteria", ids: ["d40b45"] },
            { name: "Pteridophytes", ids: ["d40b48"] },
            { name: "Stem Modification", ids: ["d40b51"] }
        ] },
        { topic: "Basic Components of Life", subs: [
            { name: "Biomolecules", ids: ["d40b52", "d40b53"] }
        ] },
        { topic: "Developmental Botany", subs: [
            { name: "Plant Reproduction", ids: ["d40b55"] }
        ] },
        { topic: "Genetics", subs: [
            { name: "Inheritance", ids: ["d40b64", "d40b65"] }
        ] },
        { topic: "Ecology and Vegetation", subs: [
            { name: "Vegetation", ids: ["d40b68"] }
        ] },
        { topic: "Plant Physiology", subs: [
            { name: "Water Relations and Transpiration", ids: ["d40b71", "d40b72"] },
            { name: "Cellular Respiration", ids: ["d40b74"] },
            { name: "Gibberellins", ids: ["d40b76"] }
        ] },
        { topic: "Applied Botany", subs: [
            { name: "Biotechnology", ids: ["d40b78"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Organic Chemistry", subs: [
            { name: "Aniline", ids: ["d40c84"] },
            { name: "Alcohols", ids: ["d40c86", "d40c87"] },
            { name: "Haloalkanes", ids: ["d40c88"] },
            { name: "Aldehydes", ids: ["d40c93"] },
            { name: "Biomolecules", ids: ["d40c94"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Polymers", ids: ["d40c98"] },
            { name: "Applied Chemistry", ids: ["d40c100"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Sulphur", ids: ["d40c101"] },
            { name: "P-block Elements", ids: ["d40c103", "d40c109"] },
            { name: "Metallurgy", ids: ["d40c105"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Titration", ids: ["d40c112"] },
            { name: "Separation", ids: ["d40c113"] }
        ] },
        { topic: "Physical Chemistry", subs: [
            { name: "Ideal Gas", ids: ["d40c124"] },
            { name: "Thermodynamics", ids: ["d40c130"] }
        ] }
    ] },
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Kinetic Energy", ids: ["d40p134"] },
            { name: "Young's Modulus", ids: ["d40p140"] }
        ] },
        { topic: "Electrostatics and Capacitors", subs: [
            { name: "Electrostatics", ids: ["d40p141"] },
            { name: "Capacitance", ids: ["d40p144"] }
        ] },
        { topic: "Waves and Optics", subs: [
            { name: "Sound", ids: ["d40p145"] },
            { name: "Ray Optics", ids: ["d40p149", "d40p150"] }
        ] },
        { topic: "Heat and Thermodynamics", subs: [
            { name: "Heat", ids: ["d40p159"] }
        ] },
        { topic: "Current Electricity and Magnetism", subs: [
            { name: "Galvanometer", ids: ["d40p163"] },
            { name: "Magnetism", ids: ["d40p165"] }
        ] },
        { topic: "Modern Physics", subs: [
            { name: "Modern Physics", ids: ["d40p169", "d40p171", "d40p172", "d40p180"] }
        ] }
    ] },
    { subject: "MAT", accent: "cyan", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Verbal Analogy", ids: ["d40m181"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Logical Reasoning", ids: ["d40m187", "d40m189"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Numerical Reasoning", ids: ["d40m193"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Spatial Reasoning", ids: ["d40m200"] }
        ] }
    ] }
];

const DAY40_DAY39_NUMBERS = new Map(DAY39.chapters.flatMap(chapter => chapter.questions).map((question, index) => [question.id, index + 1]));
DAY40_SYLLABUS.find(subject => subject.subject === "Botany").topics.push({ topic: "Biodiversity - Syllabus Practice", subs: [
    { name: "Classification, Bacteria and Viruses", ids: ["d40bio1", "d40bio2", "d40bio3", "d40bio4"] },
    { name: "Fungi and Lichens", ids: ["d40bio5", "d40bio6", "d40bio7"] },
    { name: "Algae", ids: ["d40bio8", "d40bio9"] },
    { name: "Bryophytes", ids: ["d40bio10"] },
    { name: "Pteridophytes", ids: ["d40bio11"] },
    { name: "Gymnosperms", ids: ["d40bio12"] },
    { name: "Flowering-Plant Morphology and Families", ids: ["d40bio13", "d40bio14", "d40bio15", "d40bio16", "d40bio17", "d40bio18", "d40bio19", "d40bio20"] },
    { name: "Biotechnology: Biofertilizers", ids: ["d40bio21"] },
    { name: "Medicinal Plants", ids: ["d40bio22"] }
] });
const DAY40_REPEAT_IDS = new Map();
DAY40.chapters.push(...DAY39.chapters.filter(chapter => ["revision39", "phenol39", "mat39"].includes(chapter.id)).map(chapter => ({
    ...chapter,
    id: "d40repeat-" + chapter.id,
    name: chapter.name + " - Day 39 Repeat",
    questions: chapter.questions.map(question => {
        const number = DAY40_DAY39_NUMBERS.get(question.id);
        const id = "d40r" + number;
        DAY40_REPEAT_IDS.set(question.id, id);
        return { ...question, id, options: question.options.map(option => ({ ...option })),
            revisionOf: { day: 39, question: number, id: question.id } };
    })
})));

for (const subject of DAY39.syllabus) {
    const topics = subject.topics.map(topic => ({
        ...topic,
        topic: topic.topic + " - Day 39 Repeat",
        subs: topic.subs.map(sub => ({ ...sub, ids: sub.ids.filter(id => DAY40_REPEAT_IDS.has(id)).map(id => DAY40_REPEAT_IDS.get(id)) })).filter(sub => sub.ids.length)
    })).filter(topic => topic.subs.length);
    if (topics.length) DAY40_SYLLABUS.find(entry => entry.subject === subject.subject).topics.push(...topics);
}
DAY40.syllabus = DAY40_SYLLABUS;