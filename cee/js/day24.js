/* ============================================================
   DAY 24 — BOTANY, COMPLETE SYLLABUS
   200 questions · 180 minutes · 0.25 negative marking

   Question count per unit is the official CEE Botany weightage
   (2·9·4·5·6·3·6·2·3 = 40) scaled exactly five times:

     U1 Basic components of life ....  2 x5 =  10   d24b1   – d24b10
     U2 Biodiversity ...............   9 x5 =  45   d24b11  – d24b55
     U3 Ecology and vegetation .....   4 x5 =  20   d24b56  – d24b75
     U4 Cell biology ...............   5 x5 =  25   d24b76  – d24b100
     U5 Genetics ...................   6 x5 =  30   d24b101 – d24b130
     U6 Plant anatomy ..............   3 x5 =  15   d24b131 – d24b145
     U7 Plant physiology ...........   6 x5 =  30   d24b146 – d24b175
     U8 Developmental botany .......   2 x5 =  10   d24b176 – d24b185
     U9 Applied botany .............   3 x5 =  15   d24b186 – d24b200

   Chapters pair the units so that each chapter carries a
   comparable share of the paper:
     Q1–55    Biomolecules & Biodiversity          (U1 + U2)
     Q56–100  Ecology & Cell Biology               (U3 + U4)
     Q101–145 Genetics & Plant Anatomy             (U5 + U6)
     Q146–200 Physiology, Development & Applied    (U7 + U8 + U9)

   Scope and wording of every sub-topic follow the official MEC
   "Syllabus for Bachelor Level Common Entrance Examination
   (2020, revised 2026)", Unit/Topic-wise Content of Botany
   (PDF pages 7–9). Questions are new — none repeats Day 21 or
   the Day 22 Biodiversity set.
   ============================================================ */
const DAY24 = {
    day: 24,
    title: "Day 24",
    subtitle: "Botany · Complete Syllabus",
    durationMinutes: 180,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "biobio24",
            name: "Biomolecules & Biodiversity",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q1–55 · carbohydrates, lipids, minerals, proteins and enzymes; classification systems, Monera and virus, fungi and lichens, algae, bryophytes, pteridophytes, gymnosperms, angiosperms and economic botany.",
            questions: [
                {
                    id: "d24b1",
                    text: "Starch, glycogen and cellulose are all polymers of glucose, yet only cellulose is indigestible to man. The structural reason is that cellulose has:",
                    options: [
                        { key: "a", text: "Fructose instead of glucose at every alternate position" },
                        { key: "b", text: "$\\alpha$-1,4 linkages joined by additional $\\alpha$-1,6 branches" },
                        { key: "c", text: "A far greater number of glucose units in every chain" },
                        { key: "d", text: "$\\beta$-1,4 linkages, for which man has no hydrolysing enzyme" }
                    ],
                    answer: "d",
                    explanation: "Starch and glycogen are built of $\\alpha$-D-glucose and are attacked by amylase, whereas cellulose is built of <strong>$\\beta$-D-glucose joined by $\\beta$-1,4 glycosidic bonds</strong>. Human enzymes cannot break that bond, so cellulose passes through as roughage; only the cellulase of gut symbionts in ruminants and termites can hydrolyse it. The straight $\\beta$-chains also hydrogen-bond into tough microfibrils."
                },
                {
                    id: "d24b2",
                    text: "Sucrose gives no reaction with Benedict's or Fehling's solution although both glucose and fructose do. Sucrose is therefore called a non-reducing sugar because:",
                    options: [
                        { key: "a", text: "It is a polysaccharide and so is too large to react at all" },
                        { key: "b", text: "It is hydrolysed by the reagent before the test can occur" },
                        { key: "c", text: "It contains no oxygen atom in its ring structure" },
                        { key: "d", text: "Both anomeric carbons are locked in the glycosidic bond" }
                    ],
                    answer: "d",
                    explanation: "A sugar reduces Fehling's reagent only if it has a free aldehyde or keto group, i.e. a free anomeric carbon. In sucrose the C-1 of glucose is joined to the C-2 of fructose, so <strong>both reducing groups are used up in the linkage</strong>. Maltose and lactose keep one free anomeric carbon and are reducing sugars; hydrolysing sucrose with acid gives 'invert sugar', which does reduce."
                },
                {
                    id: "d24b3",
                    text: "Weight for weight, fats yield more than twice as much energy as carbohydrates on oxidation. The reason is that a fat molecule is:",
                    options: [
                        { key: "a", text: "Soluble in water and so more easily reached by enzymes" },
                        { key: "b", text: "Made of three fatty acids, giving three separate substrates" },
                        { key: "c", text: "Stored without water, so it burns at a much higher temperature" },
                        { key: "d", text: "More reduced, its carbons carrying far more hydrogen" }
                    ],
                    answer: "d",
                    explanation: "Energy is released as the hydrogen atoms of a substrate are passed to oxygen. The long hydrocarbon chains of a triglyceride are <strong>highly reduced</strong> — far more C–H bonds per carbon than the partly oxidised carbons of a sugar — so oxidation yields about $39\\ \\mathrm{kJ\\,g^{-1}}$ against about $17\\ \\mathrm{kJ\\,g^{-1}}$. Being anhydrous as well, fat is also the most compact storage form."
                },
                {
                    id: "d24b4",
                    text: "A phospholipid forms a bilayer in water while a triglyceride forms a droplet. The difference arises because a phospholipid is:",
                    options: [
                        { key: "a", text: "Amphipathic, having a polar head and non-polar tails" },
                        { key: "b", text: "Completely hydrophilic and therefore fully soluble" },
                        { key: "c", text: "Completely hydrophobic and heavier than the water" },
                        { key: "d", text: "A saturated lipid, so its chains cannot pack together" }
                    ],
                    answer: "a",
                    explanation: "In a phospholipid one fatty acid of the glycerol is replaced by a <strong>phosphate-containing polar head</strong>, leaving two non-polar tails. Such an <strong>amphipathic</strong> molecule cannot satisfy water on both sides, so it self-assembles with heads outward and tails inward — the basis of every biological membrane. A triglyceride has three non-polar tails and no polar head, so it simply coalesces."
                },
                {
                    id: "d24b5",
                    text: "Which pairing of a mineral with its biological role in the plant is correct?",
                    options: [
                        { key: "a", text: "Magnesium — the central atom of every chlorophyll molecule" },
                        { key: "b", text: "Iron — the central atom of the chlorophyll porphyrin ring" },
                        { key: "c", text: "Calcium — the metal that activates nitrogenase in nodules" },
                        { key: "d", text: "Potassium — a structural component of every amino acid" }
                    ],
                    answer: "a",
                    explanation: "<strong>Magnesium</strong> sits at the centre of the chlorophyll porphyrin, so its deficiency causes interveinal chlorosis. <strong>Iron</strong> is needed for chlorophyll <em>synthesis</em> and for the cytochromes but is not part of the molecule; <strong>calcium</strong> is used in the middle lamella as calcium pectate; <strong>potassium</strong> is the chief osmotic cation and opens stomata. Nitrogen and sulphur, not potassium, are constituents of amino acids."
                },
                {
                    id: "d24b6",
                    text: "The primary structure of a protein is the sequence of its amino acids. The bonds that hold this level together and those that create the $\\alpha$-helix are respectively:",
                    options: [
                        { key: "a", text: "Hydrogen bonds and peptide bonds" },
                        { key: "b", text: "Disulphide bridges and ionic bonds" },
                        { key: "c", text: "Peptide bonds and hydrogen bonds" },
                        { key: "d", text: "Ionic bonds and hydrophobic interactions" }
                    ],
                    answer: "c",
                    explanation: "Amino acids are joined by covalent <strong>peptide bonds</strong> ($-\\mathrm{CO-NH}-$) formed by condensation, giving the primary structure. Regular coiling into an $\\alpha$-helix or folding into a $\\beta$-pleated sheet — the <strong>secondary</strong> structure — is held by <strong>hydrogen bonds</strong> between the C=O and N–H groups of the backbone. Disulphide bridges, ionic and hydrophobic bonds stabilise the tertiary structure."
                },
                {
                    id: "d24b7",
                    text: "Boiling a solution of an enzyme destroys its activity permanently, while cooling it to 0 °C only suspends it. This is because boiling:",
                    options: [
                        { key: "a", text: "Removes the substrate from the reaction mixture entirely" },
                        { key: "b", text: "Uses up the enzyme, which is consumed in the reaction" },
                        { key: "c", text: "Slows the molecules so that no collisions can occur" },
                        { key: "d", text: "Denatures the protein, destroying the shape of the active site" }
                    ],
                    answer: "d",
                    explanation: "High temperature breaks the weak hydrogen, ionic and hydrophobic bonds that hold the tertiary fold, so the <strong>active site loses its specific shape</strong> and the substrate no longer fits — an irreversible change called denaturation. Low temperature merely reduces kinetic energy and the number of effective collisions; the enzyme recovers fully on warming. Enzymes are catalysts and are not used up."
                },
                {
                    id: "d24b8",
                    text: "A non-competitive inhibitor differs from a competitive inhibitor in that the non-competitive inhibitor:",
                    options: [
                        { key: "a", text: "Resembles the substrate and occupies the active site itself" },
                        { key: "b", text: "Binds elsewhere and its effect is not reversed by more substrate" },
                        { key: "c", text: "Is always removed by simply raising the temperature slightly" },
                        { key: "d", text: "Acts only on enzymes that have no cofactor of any kind" }
                    ],
                    answer: "b",
                    explanation: "A <strong>competitive</strong> inhibitor is a structural analogue of the substrate (malonate against succinate in succinic dehydrogenase) and competes for the active site, so a high substrate concentration overcomes it. A <strong>non-competitive</strong> inhibitor attaches at an <em>allosteric</em> site, distorting the active site; adding more substrate does not help, because the two are not competing for the same place."
                },
                {
                    id: "d24b9",
                    text: "Many enzymes are inactive as pure protein and need a non-protein partner. The correct terminology is that the protein part is the:",
                    options: [
                        { key: "a", text: "Holoenzyme, and the whole active complex is the apoenzyme" },
                        { key: "b", text: "Coenzyme, and the metal ion attached to it is the cofactor" },
                        { key: "c", text: "Apoenzyme, and apoenzyme plus cofactor is the holoenzyme" },
                        { key: "d", text: "Prosthetic group, which is loosely attached and easily lost" }
                    ],
                    answer: "c",
                    explanation: "The inactive protein is the <strong>apoenzyme</strong>; the non-protein partner is the <strong>cofactor</strong>, which may be a metal ion, a loosely bound organic <em>coenzyme</em> (NAD, FAD, coenzyme A — most are vitamin derivatives) or a tightly bound <em>prosthetic group</em> such as haem. Apoenzyme + cofactor = the catalytically active <strong>holoenzyme</strong>."
                },
                {
                    id: "d24b10",
                    text: "The rate of an enzyme-catalysed reaction rises steeply with substrate concentration at first and then levels off completely. The plateau is reached because:",
                    options: [
                        { key: "a", text: "The substrate begins to inhibit the enzyme non-competitively" },
                        { key: "b", text: "The product accumulates and reverses the reaction entirely" },
                        { key: "c", text: "The enzyme is gradually used up as the reaction proceeds" },
                        { key: "d", text: "All the active sites are occupied, so the enzyme is saturated" }
                    ],
                    answer: "d",
                    explanation: "Once every active site is engaged, adding more substrate cannot increase the number of enzyme–substrate complexes being turned over, so the velocity reaches its maximum, $V_{max}$ — the enzyme is <strong>saturated</strong>. The substrate concentration at half $V_{max}$ is the Michaelis constant $K_m$, an inverse measure of the enzyme's affinity for its substrate."
                },
                {
                    id: "d24b11",
                    text: "In the five-kingdom system, kingdom Monera is separated from all the other four kingdoms by a single character. That character is:",
                    options: [
                        { key: "a", text: "The complete absence of a membrane-bound nucleus" },
                        { key: "b", text: "The absence of chlorophyll and of photosynthesis" },
                        { key: "c", text: "The presence of a rigid cell wall around every cell" },
                        { key: "d", text: "The unicellular condition of the whole body" }
                    ],
                    answer: "a",
                    explanation: "Monera is the only <strong>prokaryotic</strong> kingdom — no nuclear envelope, no membrane-bound organelle and a single circular chromosome. Cell walls occur also in fungi and plants, unicellularity also in Protista, and many monerans (cyanobacteria) do photosynthesise, so none of the other characters can define the kingdom."
                },
                {
                    id: "d24b12",
                    text: "Two plants that were long placed in one genus are found to differ so much that they are split into two genera. Which taxonomic statement is then true?",
                    options: [
                        { key: "a", text: "Both keep the same specific epithet but change the family" },
                        { key: "b", text: "Their family remains the same but their generic name changes" },
                        { key: "c", text: "Their order changes while the genus is left untouched" },
                        { key: "d", text: "Both the class and the division must be renamed as well" }
                    ],
                    answer: "b",
                    explanation: "The hierarchy is nested, so a change at one level affects only that level and those below it. Splitting a genus alters the <strong>generic name</strong> — and hence the binomial — but the two genera may still sit comfortably in the same <strong>family</strong>, order, class and division. Higher categories are more inclusive and change only when far greater differences are found."
                },
                {
                    id: "d24b13",
                    text: "The 2-kingdom system placed the fungi among plants. Under the 3-domain system the fungi are placed:",
                    options: [
                        { key: "a", text: "In the domain Bacteria, along with the actinomycetes" },
                        { key: "b", text: "In the domain Archaea, because of their tough walls" },
                        { key: "c", text: "In their own fourth domain, separate from all others" },
                        { key: "d", text: "In the domain Eukarya, together with plants and animals" }
                    ],
                    answer: "d",
                    explanation: "Woese's scheme recognises only three domains — <strong>Bacteria, Archaea and Eukarya</strong> — above the kingdoms. Fungi are eukaryotic (true nucleus, 80S ribosomes, membrane-bound organelles) and so belong to <strong>Eukarya</strong> along with Protista, Plantae and Animalia; ribosomal RNA data in fact place them nearer to animals than to plants."
                },
                {
                    id: "d24b14",
                    text: "In a herbarium the specimens are arranged not alphabetically but according to an accepted system of classification. The advantage of this is that:",
                    options: [
                        { key: "a", text: "Related genera are stored together, so comparison is easy" },
                        { key: "b", text: "The sheets can be found without knowing any botanical name" },
                        { key: "c", text: "Specimens of the same colour are kept in the same cabinet" },
                        { key: "d", text: "The oldest collections are always kept nearest the entrance" }
                    ],
                    answer: "a",
                    explanation: "Filing by family and genus brings <strong>related taxa physically side by side</strong>, which is precisely what a taxonomist needs when identifying or revising a group. A herbarium sheet also records the botanical name, family, locality, date and collector; alphabetical order would scatter close relatives across the whole cabinet."
                },
                {
                    id: "d24b15",
                    text: "A bacterium placed in a hypertonic solution shrinks away from its wall, but placed in distilled water it does not burst. This is because:",
                    options: [
                        { key: "a", text: "Its plasma membrane is impermeable to water molecules" },
                        { key: "b", text: "Its rigid peptidoglycan wall resists the internal pressure" },
                        { key: "c", text: "It actively pumps the excess water back out again" },
                        { key: "d", text: "Its cytoplasm is isotonic with pure water at all times" }
                    ],
                    answer: "b",
                    explanation: "The single, bag-shaped <strong>peptidoglycan</strong> molecule surrounding the cell withstands an internal turgor of several atmospheres, so the cell cannot swell and burst. If the wall is destroyed by lysozyme or its synthesis blocked by penicillin, the naked protoplast does lyse at once in a dilute medium — which is exactly how these agents kill."
                },
                {
                    id: "d24b16",
                    text: "In the transfer of genes between bacteria, transformation, transduction and conjugation differ in that transduction requires:",
                    options: [
                        { key: "a", text: "Direct contact between the two cells through a pilus" },
                        { key: "b", text: "Uptake of naked DNA released from a dead donor cell" },
                        { key: "c", text: "A bacteriophage to carry the DNA from donor to recipient" },
                        { key: "d", text: "The formation of a resistant endospore by the donor" }
                    ],
                    answer: "c",
                    explanation: "<strong>Transformation</strong> is the uptake of free DNA from the medium (Griffith's experiment); <strong>conjugation</strong> is transfer through a conjugation tube built by the F factor; and <strong>transduction</strong> uses a <em>bacteriophage</em> as the vector, a fragment of host DNA being packaged into the phage head and injected into the next cell. All three generate recombination without meiosis."
                },
                {
                    id: "d24b17",
                    text: "Anaerobic bacteria are classified as obligate or facultative. An obligate anaerobe is one that:",
                    options: [
                        { key: "a", text: "Grows better with oxygen but survives without it" },
                        { key: "b", text: "Requires oxygen but only at very low concentrations" },
                        { key: "c", text: "Grows equally well with or without free oxygen" },
                        { key: "d", text: "Is killed by free oxygen and grows only in its absence" }
                    ],
                    answer: "d",
                    explanation: "<strong>Obligate anaerobes</strong> such as <em>Clostridium tetani</em> lack catalase and superoxide dismutase, so the toxic by-products of oxygen accumulate and kill them — which is why deep, closed wounds favour tetanus. <strong>Facultative anaerobes</strong> (<em>E. coli</em>, yeast) switch between respiration and fermentation, and microaerophiles need oxygen at low tension."
                },
                {
                    id: "d24b18",
                    text: "A culture of bacteria transferred into fresh medium shows no increase in number for the first half hour, although the cells are enlarging. This period is the:",
                    options: [
                        { key: "a", text: "Lag phase, in which the cells adjust and synthesise enzymes" },
                        { key: "b", text: "Log phase, in which division has become exponential" },
                        { key: "c", text: "Stationary phase, in which births equal deaths exactly" },
                        { key: "d", text: "Decline phase, in which nutrients have been exhausted" }
                    ],
                    answer: "a",
                    explanation: "During the <strong>lag phase</strong> the inoculum is metabolically very active — the cells grow in size and manufacture the enzymes, ribosomes and ATP needed for the new medium — but they do not yet divide, so the count is flat. Exponential doubling follows in the log phase, then the stationary phase when nutrients run short and wastes accumulate, and finally decline."
                },
                {
                    id: "d24b19",
                    text: "Cyanobacteria are often called the pioneers of the primitive earth because they were the first organisms to:",
                    options: [
                        { key: "a", text: "Fix atmospheric nitrogen into ammonia for other organisms" },
                        { key: "b", text: "Reproduce sexually by the fusion of two unlike gametes" },
                        { key: "c", text: "Evolve a true membrane-bound nucleus and chloroplast" },
                        { key: "d", text: "Carry out photosynthesis that releases free oxygen" }
                    ],
                    answer: "d",
                    explanation: "Cyanobacteria use water as the hydrogen donor and so <strong>evolve oxygen</strong>, unlike the earlier photosynthetic bacteria that used $\\mathrm{H_2S}$. Their activity over some two billion years converted the reducing primitive atmosphere into an oxidising one, made the ozone shield possible and paved the way for aerobic life. They are prokaryotes with no nucleus and no true sexual reproduction."
                },
                {
                    id: "d24b20",
                    text: "In a filamentous cyanobacterium, the thick-walled resting spore that survives drought and later germinates into a new filament is the:",
                    options: [
                        { key: "a", text: "Heterocyst, in which nitrogen fixation also occurs" },
                        { key: "b", text: "Hormogonium, a short motile piece of the filament" },
                        { key: "c", text: "Akinete, formed by enlargement of a vegetative cell" },
                        { key: "d", text: "Endospore, identical with that of <em>Clostridium</em>" }
                    ],
                    answer: "c",
                    explanation: "An <strong>akinete</strong> is a vegetative cell that enlarges, stores food and lays down a thick wall; it is the perennating structure. A <strong>heterocyst</strong> is the pale, thick-walled cell that houses nitrogenase, and a <strong>hormogonium</strong> is a short fragment that glides away and forms a new filament — the usual means of vegetative multiplication. True endospores are confined to certain eubacteria."
                },
                {
                    id: "d24b21",
                    text: "The classical proof that the infective part of a bacteriophage is its nucleic acid and not its protein coat came from:",
                    options: [
                        { key: "a", text: "Griffith's experiment on the transformation of pneumococci" },
                        { key: "b", text: "The Hershey–Chase experiment using $^{32}\\mathrm{P}$ and $^{35}\\mathrm{S}$ labels" },
                        { key: "c", text: "Stanley's crystallisation of the tobacco mosaic virus" },
                        { key: "d", text: "Ivanowsky's filtration of the sap of a diseased tobacco plant" }
                    ],
                    answer: "b",
                    explanation: "Hershey and Chase grew phage in $^{32}\\mathrm{P}$ (which labels DNA only) and in $^{35}\\mathrm{S}$ (which labels protein only). After infection and blending, the <strong>radioactive phosphorus entered the bacteria while the sulphur stayed outside</strong> in the empty coats — direct proof that DNA is the genetic material. Griffith's work showed transformation without identifying the substance."
                },
                {
                    id: "d24b22",
                    text: "The lytic and lysogenic cycles of a bacteriophage differ in that in the lysogenic cycle the viral DNA:",
                    options: [
                        { key: "a", text: "Is destroyed by the host's enzymes before it can replicate" },
                        { key: "b", text: "Directs the immediate manufacture of new phage particles" },
                        { key: "c", text: "Integrates into the host chromosome and is copied with it" },
                        { key: "d", text: "Remains outside the cell, injecting only its protein coat" }
                    ],
                    answer: "c",
                    explanation: "In the <strong>lytic</strong> cycle the phage takes over at once, makes hundreds of progeny and bursts the cell. In the <strong>lysogenic</strong> cycle the DNA is inserted into the bacterial chromosome as a <em>prophage</em> and is quietly replicated along with it for many generations, until stress (UV light, chemicals) induces it to enter the lytic path."
                },
                {
                    id: "d24b23",
                    text: "Which statement about viroids and prions is correct?",
                    options: [
                        { key: "a", text: "Both contain DNA but lack the enzymes to replicate it themselves" },
                        { key: "b", text: "A viroid is an infectious protein; a prion is naked circular RNA" },
                        { key: "c", text: "Both are smaller viruses possessing a capsid but no nucleic acid" },
                        { key: "d", text: "A viroid is naked RNA without a coat; a prion is an infectious protein" }
                    ],
                    answer: "d",
                    explanation: "<strong>Viroids</strong>, discovered by Diener in the potato spindle tuber disease, are tiny circles of free RNA with <em>no protein coat</em> at all. <strong>Prions</strong> are abnormally folded proteins with <em>no nucleic acid</em>, causing scrapie, BSE and Creutzfeldt–Jakob disease by templating the misfolding of the normal protein. Both are therefore sub-viral infectious agents."
                },
                {
                    id: "d24b24",
                    text: "Tobacco mosaic virus is the classical rod-shaped virus. Its capsid is described as helical because the capsomeres:",
                    options: [
                        { key: "a", text: "Are arranged as twenty equilateral triangular faces" },
                        { key: "b", text: "Form a head and a contractile tail with tail fibres" },
                        { key: "c", text: "Are spirally arranged around the coiled RNA strand" },
                        { key: "d", text: "Are held in a lipid envelope studded with glycoprotein" }
                    ],
                    answer: "c",
                    explanation: "In TMV about 2130 identical protein sub-units are stacked in a <strong>helix</strong>, and the single strand of RNA winds within the groove they create, giving a rigid rod some 300 nm long. Adenovirus shows the polyhedral (icosahedral) symmetry of twenty faces, and the T-even bacteriophages the complex head-and-tail form."
                },
                {
                    id: "d24b25",
                    text: "Chitin is to a fungus what cellulose is to a plant. Among the four classes, an aseptate mycelium is found in the:",
                    options: [
                        { key: "a", text: "Ascomycetes, which also produce conidia in chains" },
                        { key: "b", text: "Phycomycetes, whose hyphae are coenocytic tubes" },
                        { key: "c", text: "Basidiomycetes, whose hyphae bear clamp connections" },
                        { key: "d", text: "Deuteromycetes, in which no sexual stage is known" }
                    ],
                    answer: "b",
                    explanation: "The lower fungi or <strong>Phycomycetes</strong> retain the primitive <em>coenocytic</em> condition — one continuous multinucleate tube with cross walls only at reproductive structures. All three higher classes have <strong>septate</strong> hyphae, the septa being perforated so that cytoplasm and even nuclei can move between compartments."
                },
                {
                    id: "d24b26",
                    text: "In the life cycle of a typical ascomycete, meiosis takes place:",
                    options: [
                        { key: "a", text: "In the young ascus, immediately after the two nuclei fuse" },
                        { key: "b", text: "In the conidiophore, as the chain of conidia is cut off" },
                        { key: "c", text: "In the ascogonium, before plasmogamy has taken place" },
                        { key: "d", text: "In the germinating ascospore, as it forms a new mycelium" }
                    ],
                    answer: "a",
                    explanation: "Fungal sexual reproduction has three separate steps: <strong>plasmogamy</strong> (fusion of cytoplasm), a dikaryotic phase, then <strong>karyogamy</strong> inside the young ascus, and finally <strong>meiosis</strong> of that single diploid nucleus, giving four haploid nuclei; a further mitosis usually makes eight ascospores. The diploid phase is thus reduced to a single cell."
                },
                {
                    id: "d24b27",
                    text: "The dikaryotic (n + n) phase is far more prominent in Basidiomycetes than in any other fungal class because in them it:",
                    options: [
                        { key: "a", text: "Lasts only for the brief moment before karyogamy occurs" },
                        { key: "b", text: "Exists only in those species that are plant parasites" },
                        { key: "c", text: "Is confined to the interior of the basidiospore itself" },
                        { key: "d", text: "Forms the long-lived mycelium and the whole fruiting body" }
                    ],
                    answer: "d",
                    explanation: "After plasmogamy the two nuclei do not fuse; instead the <strong>secondary dikaryotic mycelium</strong> — maintained by clamp connections that keep one nucleus of each kind in every cell — grows for months or years and builds the entire basidiocarp. Karyogamy is postponed to the young basidium, followed at once by meiosis and four external basidiospores."
                },
                {
                    id: "d24b28",
                    text: "Yeast is placed among the Ascomycetes even though it is unicellular and reproduces mainly by budding. The decisive evidence is that it:",
                    options: [
                        { key: "a", text: "Possesses a cell wall containing chitin and stores glycogen" },
                        { key: "b", text: "Can ferment sugar to ethanol under anaerobic conditions" },
                        { key: "c", text: "Forms an ascus with ascospores after two cells conjugate" },
                        { key: "d", text: "Grows readily on a simple medium containing only sugar" }
                    ],
                    answer: "c",
                    explanation: "Classification of fungi rests on the <strong>sexual stage</strong>. When two compatible yeast cells fuse, the diploid cell becomes an <strong>ascus</strong> and produces four or eight <strong>ascospores</strong> internally — the diagnostic ascomycete character. Chitin walls and glycogen are common to all fungi, and fermentation is a metabolic, not a taxonomic, criterion."
                },
                {
                    id: "d24b29",
                    text: "In <em>Mucor</em> the sporangiophores arise singly from any point of the mycelium, whereas in <em>Rhizopus</em> they arise in tufts. The structures present in <em>Rhizopus</em> but absent in <em>Mucor</em> are:",
                    options: [
                        { key: "a", text: "The columella and the sporangial wall" },
                        { key: "b", text: "Stolons and the rhizoids that anchor them" },
                        { key: "c", text: "Zygospores and the progametangia that form them" },
                        { key: "d", text: "Aplanospores and the coenocytic mycelium" }
                    ],
                    answer: "b",
                    explanation: "<em>Rhizopus</em>, the bread mould, spreads by arching <strong>stolons</strong> that touch the substratum at intervals and put out tufts of <strong>rhizoids</strong>, with the sporangiophores rising from the same node. <em>Mucor</em> has neither. Both are Phycomycetes with a coenocytic mycelium, a columella in the sporangium, non-motile aplanospores and zygospore formation by gametangial copulation."
                },
                {
                    id: "d24b30",
                    text: "A lichen growing on a rock is often the first stage of a xerarch succession. Its pioneering ability rests mainly on the fact that it can:",
                    options: [
                        { key: "a", text: "Survive prolonged desiccation and secrete rock-etching acids" },
                        { key: "b", text: "Draw water and minerals from deep inside the solid rock" },
                        { key: "c", text: "Live wholly on the organic matter already present on the rock" },
                        { key: "d", text: "Grow rapidly enough to cover a bare surface in a single season" }
                    ],
                    answer: "a",
                    explanation: "Lichens tolerate extreme drying, becoming dormant and reviving when wet, and they release <strong>lichen acids</strong> that slowly corrode the rock surface. The fine particles so freed, mixed with the humus of dead lichen, form the first thin soil in which mosses can root. Lichens in fact grow extremely slowly — a few millimetres a year."
                },
                {
                    id: "d24b31",
                    text: "Soredia and isidia are both means of vegetative propagation in lichens. The essential feature of a soredium is that it consists of:",
                    options: [
                        { key: "a", text: "A few algal cells wrapped in fungal hyphae, dispersed as a powder" },
                        { key: "b", text: "Fungal hyphae alone, which must find a fresh alga to survive" },
                        { key: "c", text: "Algal cells alone, released when the upper cortex ruptures" },
                        { key: "d", text: "A spore of the mycobiont produced inside a tiny apothecium" }
                    ],
                    answer: "a",
                    explanation: "A <strong>soredium</strong> is a microscopic packet of a few <em>phycobiont</em> cells enveloped by hyphae of the <em>mycobiont</em>; because it carries both partners it can start a new lichen wherever the wind drops it. <strong>Isidia</strong> serve the same purpose but are small coral-like outgrowths of the thallus that break off. Ascospores of the fungus alone must meet a suitable alga afresh."
                },
                {
                    id: "d24b32",
                    text: "The green algae are considered the ancestors of land plants rather than the brown or red algae, chiefly because they share with land plants:",
                    options: [
                        { key: "a", text: "A thalloid body without any vascular tissue" },
                        { key: "b", text: "Chlorophyll a and b, starch and a cellulose wall" },
                        { key: "c", text: "The ability to reproduce sexually by oogamy" },
                        { key: "d", text: "Motile male gametes bearing two flagella" }
                    ],
                    answer: "b",
                    explanation: "Chlorophyceae alone have exactly the pigment set of higher plants — <strong>chlorophylls a and b</strong> with carotenes and xanthophylls — store true <strong>starch inside the chloroplast</strong> and build a wall of <strong>cellulose</strong>. Brown algae have chlorophyll c with fucoxanthin and store laminarin, red algae chlorophyll d with phycoerythrin and floridean starch."
                },
                {
                    id: "d24b33",
                    text: "The pyrenoid of an algal chloroplast is best described as a:",
                    options: [
                        { key: "a", text: "Light-absorbing granule that adds to the chlorophyll" },
                        { key: "b", text: "Contractile organelle that expels the excess water" },
                        { key: "c", text: "Proteinaceous body around which starch is deposited" },
                        { key: "d", text: "Reproductive body that germinates into a new filament" }
                    ],
                    answer: "c",
                    explanation: "A <strong>pyrenoid</strong> is a dense protein core, rich in the carbon-fixing enzyme, surrounded by a sheath of starch plates. Its number and position within the chloroplast are important taxonomic characters — <em>Spirogyra</em>, for instance, carries a row of them along each spiral chloroplast. The contractile vacuole and the eye spot are separate structures."
                },
                {
                    id: "d24b34",
                    text: "In lateral conjugation of <em>Spirogyra</em>, unlike scaliform conjugation, the fusing gametes come from:",
                    options: [
                        { key: "a", text: "Two adjacent cells of the very same filament" },
                        { key: "b", text: "Two cells of two different filaments lying side by side" },
                        { key: "c", text: "One vegetative cell and one specialised sex organ" },
                        { key: "d", text: "Two zoospores released into the surrounding water" }
                    ],
                    answer: "a",
                    explanation: "In <strong>scalariform</strong> conjugation, tubes form between cells of two filaments lying parallel, giving the ladder appearance. In <strong>lateral</strong> conjugation the passage is made between two <em>neighbouring cells of one filament</em>, either through the septum or by a small lateral tube. Both are isogamous and both end in a thick-walled zygospore."
                },
                {
                    id: "d24b35",
                    text: "Brown algae such as <em>Laminaria</em> can reach many metres in length, a size no green or red alga attains. This is possible largely because they possess:",
                    options: [
                        { key: "a", text: "True xylem vessels running the length of the stipe" },
                        { key: "b", text: "Trumpet hyphae for translocation and a tough algin-rich wall" },
                        { key: "c", text: "Roots that anchor them and absorb minerals from the mud" },
                        { key: "d", text: "A woody cambium producing secondary thickening each year" }
                    ],
                    answer: "b",
                    explanation: "The kelp body is differentiated into holdfast, stipe and blade; the wall contains the gelatinous <strong>algin</strong> which keeps it flexible and prevents desiccation, and elongated <strong>trumpet hyphae</strong> in the medulla conduct the photosynthate. There is, however, no true vascular tissue, no root and no cambium — the holdfast only anchors and does not absorb."
                },
                {
                    id: "d24b36",
                    text: "Bryophytes have no vascular tissue, which limits both their size and their habitat. The conducting tissue they do possess in some mosses consists of:",
                    options: [
                        { key: "a", text: "Tracheids for water and sieve tubes for food" },
                        { key: "b", text: "Vessels for water and companion cells for food" },
                        { key: "c", text: "Hydroids for water and leptoids for food" },
                        { key: "d", text: "Rhizoids for water and elaters for food" }
                    ],
                    answer: "c",
                    explanation: "Some of the larger mosses (<em>Polytrichum</em>) have a central strand of elongated, dead, thin-walled <strong>hydroids</strong> that conduct water, surrounded by living <strong>leptoids</strong> that conduct food. These are analogous to but not homologous with xylem and phloem — they are never lignified, which is why bryophytes remain small and confined to moist places."
                },
                {
                    id: "d24b37",
                    text: "In <em>Marchantia</em> the archegoniophore continues to elongate after fertilisation. The advantage of this growth is that it:",
                    options: [
                        { key: "a", text: "Prevents self-fertilisation by separating the two sexes" },
                        { key: "b", text: "Brings the archegonia nearer the water for fertilisation" },
                        { key: "c", text: "Allows the sporophyte to photosynthesise for itself" },
                        { key: "d", text: "Raises the capsules so that the spores are better dispersed" }
                    ],
                    answer: "d",
                    explanation: "At the time of fertilisation the archegoniophore is short, so that a splash of water can carry the antherozoids to the archegonia. Afterwards the stalk <strong>elongates and lifts the developing sporophytes clear of the thallus</strong>, and the hygroscopic elaters then fling the spores into the moving air. The sporophyte remains dependent on the gametophyte throughout."
                },
                {
                    id: "d24b38",
                    text: "In the moss life cycle the protonema is significant because it:",
                    options: [
                        { key: "a", text: "Is the diploid generation that produces the spores" },
                        { key: "b", text: "Bears the antheridia and archegonia at its tips" },
                        { key: "c", text: "Nourishes the sporophyte after fertilisation is over" },
                        { key: "d", text: "Produces many buds, so one spore gives several leafy shoots" }
                    ],
                    answer: "d",
                    explanation: "A germinating spore first makes a creeping, branched, green filament — the <strong>protonema</strong> — and <em>numerous buds</em> arise along it, each growing into a leafy gametophore. One spore therefore yields a whole clump of moss plants, a valuable multiplication. The protonema is haploid and its algal appearance is often cited as evidence of algal ancestry."
                },
                {
                    id: "d24b39",
                    text: "The sporophyte of a moss is only partly dependent on the gametophyte, unlike that of a liverwort. The evidence is that the moss capsule:",
                    options: [
                        { key: "a", text: "Contains elaters that actively disperse its spores" },
                        { key: "b", text: "Produces its spores without any meiotic division" },
                        { key: "c", text: "Grows from a persistent meristem at its base" },
                        { key: "d", text: "Is green and bears stomata, so it makes some of its own food" }
                    ],
                    answer: "d",
                    explanation: "The moss capsule and the upper seta are <strong>chlorophyllous and carry stomata</strong> in the apophysis, so they photosynthesise, though the foot still draws water and minerals from the gametophyte. Elaters are absent in mosses (the peristome teeth do the dispersing), and only the hornwort sporophyte has a persistent basal meristem."
                },
                {
                    id: "d24b40",
                    text: "The gametophyte of <em>Dryopteris</em> bears both antheridia and archegonia, yet cross-fertilisation is the rule. This is achieved because:",
                    options: [
                        { key: "a", text: "The prothallus is strictly unisexual in every individual" },
                        { key: "b", text: "The antheridia ripen before the archegonia of the same thallus" },
                        { key: "c", text: "The antherozoids cannot swim in the film of water present" },
                        { key: "d", text: "The archegonia open only when no antherozoid is nearby" }
                    ],
                    answer: "b",
                    explanation: "The prothallus is monoecious but <strong>protandrous</strong>: the antheridia mature on the older, narrower posterior part while the archegonia near the notch ripen later, so the sperms of one prothallus usually reach the eggs of another. Antherozoids are multiflagellate and swim to the archegonial neck by chemotaxis towards malic acid."
                },
                {
                    id: "d24b41",
                    text: "The leaf of <em>Dryopteris</em> is described as a megaphyll while that of <em>Selaginella</em> is a microphyll. A megaphyll is distinguished by:",
                    options: [
                        { key: "a", text: "Its large size alone, irrespective of any internal structure" },
                        { key: "b", text: "The absence of any vascular supply within the lamina" },
                        { key: "c", text: "A branched venation and the presence of a leaf gap in the stele" },
                        { key: "d", text: "Having a single unbranched vein and no leaf gap at all" }
                    ],
                    answer: "c",
                    explanation: "The distinction is anatomical, not merely one of size: a <strong>megaphyll</strong> has a branched vein system and its trace leaves a <strong>leaf gap</strong> in the stele — the very gaps that dissect the siphonostele of the fern rhizome into a dictyostele. A <strong>microphyll</strong> has one unbranched vein and leaves no gap, as in <em>Selaginella</em> and <em>Lycopodium</em>."
                },
                {
                    id: "d24b42",
                    text: "The needle of <em>Pinus</em> shows sunken stomata, a thick cuticle, hypodermis and resin canals. These xerophytic features are needed because the tree faces:",
                    options: [
                        { key: "a", text: "Physiological drought, water being frozen or hard to absorb" },
                        { key: "b", text: "A genuine shortage of rainfall in every month of the year" },
                        { key: "c", text: "Constant grazing pressure from the animals of the forest" },
                        { key: "d", text: "Excessively strong light, which would bleach a broad leaf" }
                    ],
                    answer: "a",
                    explanation: "Conifers grow where the soil water is often frozen or very cold and where drying winds are strong, so although water may be present it cannot be absorbed — <strong>physiological drought</strong>. The needle shape reduces the exposed surface, and the sunken stomata sit at the bottom of pits where a pocket of still, humid air cuts transpiration."
                },
                {
                    id: "d24b43",
                    text: "The male gametes of <em>Pinus</em> are non-motile and are carried to the egg by a pollen tube. This condition — the siphonogamous habit — is significant because it:",
                    options: [
                        { key: "a", text: "Reduces the number of ovules that a cone can produce" },
                        { key: "b", text: "Frees fertilisation from any dependence on external water" },
                        { key: "c", text: "Ensures that self-pollination can never take place" },
                        { key: "d", text: "Allows the ovule to be enclosed within a closed ovary" }
                    ],
                    answer: "b",
                    explanation: "In algae, bryophytes and pteridophytes the sperm must swim. In the seed plants the pollen tube delivers the non-motile male gametes directly to the archegonium, so <strong>fertilisation no longer requires a film of water</strong> — a decisive step in the conquest of dry land. (<em>Cycas</em> and <em>Ginkgo</em> are transitional, having motile sperms carried by a tube.)"
                },
                {
                    id: "d24b44",
                    text: "Polyembryony is common in <em>Pinus</em>, yet a ripe seed usually contains only one embryo. This is because:",
                    options: [
                        { key: "a", text: "Only one archegonium in each ovule is ever fertilised" },
                        { key: "b", text: "The extra embryos fuse together to form a single large one" },
                        { key: "c", text: "The nucellus digests the surplus embryos to feed the endosperm" },
                        { key: "d", text: "All but one of the developing embryos abort during growth" }
                    ],
                    answer: "d",
                    explanation: "Several archegonia may be fertilised (simple polyembryony) and each zygote's suspensor may split to give four embryos (cleavage polyembryony), so many embryos start. In the competition for the limited food of the female gametophyte <strong>only one normally survives</strong> to maturity; the rest degenerate. The nutritive tissue here is haploid and formed before fertilisation."
                },
                {
                    id: "d24b45",
                    text: "A student is given a plant with a fibrous root system, parallel-veined sessile leaves with a sheathing base and trimerous flowers. It is most probably a member of the:",
                    options: [
                        { key: "a", text: "Brassicaceae, in which the flowers are cruciform" },
                        { key: "b", text: "Fabaceae, in which the fruit is a dehiscent legume" },
                        { key: "c", text: "Solanaceae, in which the ovary is obliquely placed" },
                        { key: "d", text: "Liliaceae, in which the perianth is of six tepals" }
                    ],
                    answer: "d",
                    explanation: "Fibrous roots, parallel venation, sheathing leaf bases and flowers in threes are the classical <strong>monocotyledonous</strong> characters, and of the four prescribed families only the <strong>Liliaceae</strong> are monocots. Brassicaceae, Solanaceae and Fabaceae are dicots with tap roots, reticulate venation and flowers in fours or fives."
                },
                {
                    id: "d24b46",
                    text: "The stamens of a mustard flower are called tetradynamous. This means that there are:",
                    options: [
                        { key: "a", text: "Four stamens in one whorl and two in the whorl outside it" },
                        { key: "b", text: "Six stamens fused by their anthers but free by the filaments" },
                        { key: "c", text: "Four stamens of equal length united into a single bundle" },
                        { key: "d", text: "Six stamens, four long inner and two short outer ones" }
                    ],
                    answer: "d",
                    explanation: "<strong>Tetradynamous</strong> androecium — two short stamens in the outer whorl and four long ones in the inner — is diagnostic of the Brassicaceae, written $\\mathrm{A_{2+4}}$. Compare <em>didynamous</em> (two long and two short, Labiatae), <em>syngenesious</em> (anthers united, Compositae) and <em>diadelphous</em> (filaments in two bundles, Fabaceae)."
                },
                {
                    id: "d24b47",
                    text: "The ovary of the Brassicaceae is bicarpellary with parietal placentation, yet the fruit appears two-chambered. This is explained by the:",
                    options: [
                        { key: "a", text: "Development of a false septum, the replum, across the ovary" },
                        { key: "b", text: "Fusion of the two carpels into a solid central axis" },
                        { key: "c", text: "Presence of a true septum formed by the carpel margins" },
                        { key: "d", text: "Breakdown of the septum leaving a free central column" }
                    ],
                    answer: "a",
                    explanation: "The ovules are borne on the wall (parietal placentation) of what is at first a single chamber, but a membranous <strong>false septum (replum)</strong> grows across between the two placentae and divides it in two. The fruit is a <strong>siliqua</strong> (or a short silicula) which splits from below upwards, leaving the replum with the seeds attached."
                },
                {
                    id: "d24b48",
                    text: "In the Solanaceae the ovary is set obliquely to the median plane of the flower. Which further set of characters belongs to this family?",
                    options: [
                        { key: "a", text: "Gamosepalous persistent calyx, epipetalous stamens, berry or capsule" },
                        { key: "b", text: "Polysepalous deciduous calyx, diadelphous stamens, legume" },
                        { key: "c", text: "Perianth of six tepals, six free stamens, a three-celled capsule" },
                        { key: "d", text: "Four free sepals, tetradynamous stamens, a siliqua with a replum" }
                    ],
                    answer: "a",
                    explanation: "Solanaceae — potato, tomato, brinjal, chilli, tobacco, <em>Datura</em> — have a <strong>gamosepalous calyx that persists in the fruit</strong>, a gamopetalous corolla with <strong>five epipetalous stamens</strong>, a bicarpellary oblique superior ovary with a swollen axile placenta, and a berry or capsule. The floral formula is $\\oplus\\ \\mathrm{K_{(5)}\\ C_{(5)}\\ A_5\\ \\underline{G}_{(2)}}$."
                },
                {
                    id: "d24b49",
                    text: "A pea flower is protected from self-pollination failure by having its stamens and stigma enclosed together in the keel. Its ovary is:",
                    options: [
                        { key: "a", text: "Bicarpellary and syncarpous with axile placentation" },
                        { key: "b", text: "Tricarpellary and syncarpous with parietal placentation" },
                        { key: "c", text: "Monocarpellary and superior with marginal placentation" },
                        { key: "d", text: "Multicarpellary and apocarpous with basal placentation" }
                    ],
                    answer: "c",
                    explanation: "The gynoecium of the Papilionoideae is a <strong>single carpel</strong> whose two margins fuse to form a superior ovary; the ovules are borne in two rows along the fused margin — <strong>marginal placentation</strong> — and the fruit is a legume that splits along both sutures. The floral formula is $\\%\\ \\mathrm{K_{(5)}\\ C_{1+2+(2)}\\ A_{(9)+1}\\ \\underline{G}_1}$."
                },
                {
                    id: "d24b50",
                    text: "The inflorescence of <em>Ficus</em> is a hypanthodium. Its peculiarity is that:",
                    options: [
                        { key: "a", text: "The flowers are borne on a flat receptacle surrounded by bracts" },
                        { key: "b", text: "A single female flower is surrounded by many male flowers in a cup" },
                        { key: "c", text: "The whole axis is fleshy and the flowers hang from its underside" },
                        { key: "d", text: "The receptacle is hollow and pear-shaped, enclosing the flowers" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>hypanthodium</strong> the receptacle becomes a hollow, nearly closed, pear-shaped cavity lined on the inside by tiny unisexual flowers, with a small apical pore through which the pollinating wasp enters. The whole structure ripens into the composite fruit called a <strong>syconus</strong>. The cup with one female and many male flowers is the cyathium of <em>Euphorbia</em>."
                },
                {
                    id: "d24b51",
                    text: "The seed of a legume is non-endospermic while the grain of maize is endospermic. In germination the food of the maize grain is transferred to the embryo by the:",
                    options: [
                        { key: "a", text: "Coleoptile, which protects the plumule as it emerges" },
                        { key: "b", text: "Scutellum, which secretes enzymes and absorbs the digested food" },
                        { key: "c", text: "Coleorhiza, which surrounds the radicle at the other end" },
                        { key: "d", text: "Perisperm, the persisting remains of the nucellar tissue" }
                    ],
                    answer: "b",
                    explanation: "The single shield-shaped cotyledon of a grass, the <strong>scutellum</strong>, lies pressed against the endosperm; gibberellin from the embryo makes the aleurone layer secrete amylase, and the scutellar epithelium <strong>absorbs the sugars</strong> and passes them to the growing embryo. Coleoptile and coleorhiza are merely protective sheaths of plumule and radicle."
                },
                {
                    id: "d24b52",
                    text: "Among the lower plants of economic value, the correctly stated use is:",
                    options: [
                        { key: "a", text: "<em>Sphagnum</em> yields agar used for culturing microorganisms" },
                        { key: "b", text: "<em>Gelidium</em> is the source of the biofertiliser used in rice fields" },
                        { key: "c", text: "<em>Anabaena</em> in <em>Azolla</em> enriches paddy fields with fixed nitrogen" },
                        { key: "d", text: "<em>Dryopteris</em> is the commercial source of the antibiotic penicillin" }
                    ],
                    answer: "c",
                    explanation: "The water fern <em>Azolla</em> harbours the nitrogen-fixing cyanobacterium <strong><em>Anabaena azollae</em></strong> in cavities of its leaves and is ploughed into flooded rice fields as a green manure. <em>Sphagnum</em> gives peat and packing material, agar comes from the red algae <em>Gelidium</em> and <em>Gracilaria</em>, penicillin from <em>Penicillium</em>, and <em>Dryopteris</em> yields the vermifuge filicin."
                },
                {
                    id: "d24b53",
                    text: "Yarsagumba (<em>Ophiocordyceps sinensis</em>), one of Nepal's most valuable natural products, is correctly described as:",
                    options: [
                        { key: "a", text: "A high-altitude orchid whose tuber is collected for its alkaloid" },
                        { key: "b", text: "An ascomycete fungus parasitising a ghost-moth caterpillar" },
                        { key: "c", text: "A lichen of the alpine rocks used as a dye and a tonic" },
                        { key: "d", text: "A moss of the trans-Himalaya harvested for its essential oil" }
                    ],
                    answer: "b",
                    explanation: "Yarsagumba is not a plant at all. An <strong>ascomycete fungus</strong> infects the buried larva of a ghost moth in the alpine meadows above about 3500 m, kills it and sends up a club-shaped stroma in early summer; the fungus–larva complex is collected and prized as a tonic. Its Tibetan name literally means 'summer grass, winter worm'."
                },
                {
                    id: "d24b54",
                    text: "Which use of a medicinal plant prescribed in the syllabus is correctly stated?",
                    options: [
                        { key: "a", text: "<em>Ocimum sanctum</em> — its rhizome is the source of the spice ginger" },
                        { key: "b", text: "<em>Zingiber officinale</em> — its leaf yields the insecticide azadirachtin" },
                        { key: "c", text: "<em>Azadirachta indica</em> — its root yields reserpine for hypertension" },
                        { key: "d", text: "<em>Rauwolfia serpentina</em> — its root yields reserpine, a tranquilliser" }
                    ],
                    answer: "d",
                    explanation: "The root of <em>Rauwolfia serpentina</em> (sarpagandha) contains <strong>reserpine</strong>, long used to lower blood pressure and as a tranquilliser. <em>Azadirachta indica</em> (neem) gives the insect antifeedant <strong>azadirachtin</strong>; <em>Ocimum sanctum</em> (tulasi) leaves are rich in eugenol; and the <em>rhizome</em> of <em>Zingiber officinale</em> is ginger, a spice and carminative."
                },
                {
                    id: "d24b55",
                    text: "Bacteria are indispensable in agriculture and industry. Which pairing is correct?",
                    options: [
                        { key: "a", text: "<em>Rhizobium</em> — symbiotic nitrogen fixation in legume root nodules" },
                        { key: "b", text: "<em>Lactobacillus</em> — nitrification of ammonia to nitrite in the soil" },
                        { key: "c", text: "<em>Nitrosomonas</em> — retting of jute and flax fibres in water" },
                        { key: "d", text: "<em>Clostridium</em> — the commercial production of vinegar from wine" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Rhizobium</em></strong> lives in the root nodules of legumes and fixes atmospheric nitrogen, which is why legumes enrich the soil and are used in crop rotation. <em>Lactobacillus</em> curdles milk, <em>Nitrosomonas</em> oxidises ammonia to nitrite, <em>Clostridium</em> is a free-living anaerobic nitrogen fixer that also rets fibres, and <em>Acetobacter</em> makes vinegar."
                }/* __U2A__ */
            ]
        },
        {
            id: "ecocell24",
            name: "Ecology & Cell Biology",
            subject: "Botany",
            accent: "cyan",
            blurb: "Q56–100 · pond and forest ecosystems, biotic interactions, biogeochemical cycles and ecological imbalances, vegetation of Nepal and succession; cell structure, organelles and cell division.",
            questions: [
                {
                    id: "d24b56",
                    text: "In a pond ecosystem the free-floating microscopic organisms that carry out most of the primary production are the:",
                    options: [
                        { key: "a", text: "Zooplankton, drifting just below the water surface" },
                        { key: "b", text: "Phytoplankton, chiefly algae and cyanobacteria" },
                        { key: "c", text: "Benthos, living in and on the bottom mud" },
                        { key: "d", text: "Nekton, actively swimming in the open water" }
                    ],
                    answer: "b",
                    explanation: "The biotic community of a pond is described as <strong>phytoplankton</strong> (autotrophic drifters — diatoms, <em>Volvox</em>, <em>Spirogyra</em>, cyanobacteria), <strong>zooplankton</strong> (drifting consumers), <strong>nekton</strong> (strong swimmers such as fish), <strong>neuston</strong> (surface dwellers) and <strong>benthos</strong> (bottom dwellers). The phytoplankton, with the rooted hydrophytes, are the producers on which the whole pond depends."
                },
                {
                    id: "d24b57",
                    text: "A forest ecosystem shows distinct vertical stratification — canopy, understorey, shrub, herb and ground layers. The chief ecological factor producing this layering is:",
                    options: [
                        { key: "a", text: "The progressive decrease of light from top to bottom" },
                        { key: "b", text: "The increase of atmospheric oxygen with height" },
                        { key: "c", text: "The absence of any competition between the species" },
                        { key: "d", text: "The uniform distribution of minerals through the soil" }
                    ],
                    answer: "a",
                    explanation: "Each successive layer intercepts part of the incident radiation, so the species below must be progressively more <strong>shade-tolerant</strong>; the ground flora may receive only 1–2 % of full sunlight. Stratification lets many species share the same area by partitioning the light, and it is matched below ground by roots exploiting different soil depths."
                },
                {
                    id: "d24b58",
                    text: "In a grazing food chain the producers fix 10 000 kJ of energy. Following the ten per cent law, the energy available to the third trophic level is:",
                    options: [
                        { key: "a", text: "1000 kJ" },
                        { key: "b", text: "3333 kJ" },
                        { key: "c", text: "100 kJ" },
                        { key: "d", text: "10 kJ" }
                    ],
                    answer: "c",
                    explanation: "Lindeman's ten per cent law states that only about a tenth of the energy at one trophic level is fixed in the next. Producers (T1) $= 10\\,000$ kJ; herbivores (T2) $= 1000$ kJ; <strong>primary carnivores (T3) $= 100$ kJ</strong>. The steep loss — most of it as respiratory heat — is why food chains rarely exceed four or five links."
                },
                {
                    id: "d24b59",
                    text: "The pyramid of numbers in a forest is inverted at its base while the pyramid of energy is always upright. The pyramid of energy can never be inverted because:",
                    options: [
                        { key: "a", text: "Producers are always more numerous than the consumers" },
                        { key: "b", text: "The number of organisms always falls at each higher level" },
                        { key: "c", text: "Energy is recycled repeatedly between the trophic levels" },
                        { key: "d", text: "Energy flows in one direction and is lost at each transfer" }
                    ],
                    answer: "d",
                    explanation: "Energy flow is <strong>unidirectional</strong> and obeys the second law of thermodynamics — at every transfer a large part is dissipated as heat — so a higher level can never contain more energy than the one below it. Numbers and even biomass can give inverted pyramids (one tree supporting thousands of insects; the small standing crop of phytoplankton supporting zooplankton)."
                },
                {
                    id: "d24b60",
                    text: "Gross primary productivity and net primary productivity of an ecosystem are related by:",
                    options: [
                        { key: "a", text: "NPP = GPP + respiration of the producers" },
                        { key: "b", text: "GPP = NPP + respiration of the consumers" },
                        { key: "c", text: "NPP = GPP − respiration of the producers" },
                        { key: "d", text: "NPP = GPP × the ten per cent transfer efficiency" }
                    ],
                    answer: "c",
                    explanation: "<strong>GPP</strong> is the total organic matter fixed by photosynthesis in unit time; a substantial part is at once burnt in the plants' own <strong>respiration</strong>. What is left, $\\mathrm{NPP = GPP - R}$, is the material actually available to the herbivores and decomposers, and is what we measure as the standing crop increment."
                },
                {
                    id: "d24b61",
                    text: "Which biotic interaction is correctly matched with the outcome for the two partners?",
                    options: [
                        { key: "a", text: "Commensalism — one benefits and the other is harmed" },
                        { key: "b", text: "Parasitism — both partners benefit from the association" },
                        { key: "c", text: "Mutualism — one benefits while the other is unaffected" },
                        { key: "d", text: "Amensalism — one is harmed while the other is unaffected" }
                    ],
                    answer: "d",
                    explanation: "Using $+$, $-$ and $0$: <strong>mutualism</strong> $(+,+)$ as in lichens and mycorrhizae; <strong>commensalism</strong> $(+,0)$ as in an epiphytic orchid on a tree; <strong>parasitism</strong> $(+,-)$ as in <em>Cuscuta</em>; <strong>predation</strong> $(+,-)$; <strong>competition</strong> $(-,-)$; and <strong>amensalism</strong> $(-,0)$, where one organism suppresses another — for example by releasing a toxin — without itself gaining anything."
                },
                {
                    id: "d24b62",
                    text: "Decomposers are described as the key functional component without which an ecosystem would collapse, because they:",
                    options: [
                        { key: "a", text: "Supply the energy that drives the whole ecosystem" },
                        { key: "b", text: "Return the mineral nutrients locked in dead matter to the soil" },
                        { key: "c", text: "Occupy the highest trophic level of every food chain" },
                        { key: "d", text: "Convert solar energy into chemical energy for the producers" }
                    ],
                    answer: "b",
                    explanation: "Energy passes through an ecosystem once and is lost as heat, but <strong>nutrients must circulate</strong>. Saprophytic bacteria and fungi carry out fragmentation, leaching, catabolism, humification and mineralisation, releasing carbon, nitrogen, phosphorus and other elements in an inorganic form that producers can absorb again. Without them nutrients would stay locked in litter."
                },
                {
                    id: "d24b63",
                    text: "The largest reservoir of carbon on the earth, holding far more than the atmosphere and the biosphere together, is:",
                    options: [
                        { key: "a", text: "The wood of the world's standing forests" },
                        { key: "b", text: "The bodies of all living organisms taken together" },
                        { key: "c", text: "Carbon dioxide dissolved as carbonate in the oceans and rocks" },
                        { key: "d", text: "Methane held in the atmosphere above the tropics" }
                    ],
                    answer: "c",
                    explanation: "About 71 % of the earth's carbon is dissolved in the <strong>oceans</strong> as carbonate and bicarbonate, and a far greater amount is locked in <strong>sedimentary rock</strong> as limestone; fossil fuels form another large store. The atmosphere holds only a small, rapidly cycling fraction, which is exactly why burning fossil fuel can change its concentration so quickly."
                },
                {
                    id: "d24b64",
                    text: "In the nitrogen cycle, the conversion of nitrate back into gaseous nitrogen — the step that closes the cycle — is called:",
                    options: [
                        { key: "a", text: "Nitrification, carried out by <em>Nitrosomonas</em> and <em>Nitrobacter</em>" },
                        { key: "b", text: "Ammonification, carried out by putrefying bacteria" },
                        { key: "c", text: "Nitrogen fixation, carried out by <em>Rhizobium</em> and <em>Azotobacter</em>" },
                        { key: "d", text: "Denitrification, carried out by <em>Pseudomonas</em> and <em>Thiobacillus</em>" }
                    ],
                    answer: "d",
                    explanation: "The sequence is fixation ($\\mathrm{N_2 \\rightarrow NH_3}$), <strong>ammonification</strong> (proteins of dead matter $\\rightarrow \\mathrm{NH_3}$), <strong>nitrification</strong> ($\\mathrm{NH_3 \\rightarrow NO_2^- \\rightarrow NO_3^-}$) and finally <strong>denitrification</strong>, in which anaerobic soil bacteria reduce nitrate to $\\mathrm{N_2}$ and return it to the air — a loss to the farmer but essential to the cycle."
                },
                {
                    id: "d24b65",
                    text: "The greenhouse effect warms the earth because greenhouse gases are:",
                    options: [
                        { key: "a", text: "Transparent to incoming short-wave light but absorb outgoing infrared" },
                        { key: "b", text: "Opaque to incoming sunlight, which they absorb before it lands" },
                        { key: "c", text: "Able to generate heat themselves by chemical reaction in the air" },
                        { key: "d", text: "Denser than air, so they form an insulating blanket near the ground" }
                    ],
                    answer: "a",
                    explanation: "Short-wave solar radiation passes freely through $\\mathrm{CO_2}$, $\\mathrm{CH_4}$, $\\mathrm{N_2O}$, CFCs and water vapour and warms the surface; the earth re-radiates this energy as <strong>long-wave infrared</strong>, which those same gases absorb and re-emit downwards. Without any greenhouse effect the mean surface temperature would be about $-18\\ ^\\circ$C; the problem is its intensification."
                },
                {
                    id: "d24b66",
                    text: "Rain is naturally slightly acidic at about pH 5.6. It is called acid rain when the pH falls well below this, chiefly because the atmosphere contains:",
                    options: [
                        { key: "a", text: "Excess carbon dioxide dissolving to give carbonic acid" },
                        { key: "b", text: "Chlorofluorocarbons released from refrigerants and aerosols" },
                        { key: "c", text: "Oxides of sulphur and nitrogen forming sulphuric and nitric acids" },
                        { key: "d", text: "Suspended particulate matter released by cement factories" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{SO_2}$ and $\\mathrm{NO_x}$ from the burning of coal, oil and from vehicles are oxidised and dissolve in cloud droplets as <strong>sulphuric and nitric acids</strong>, bringing the pH down to 4 or lower. The rain acidifies lakes and kills fish, leaches calcium and magnesium from the soil, damages foliage and corrodes marble monuments. Dissolved $\\mathrm{CO_2}$ accounts only for the natural pH 5.6."
                },
                {
                    id: "d24b67",
                    text: "A single chlorine atom released from a CFC molecule can destroy many thousands of ozone molecules because the reaction:",
                    options: [
                        { key: "a", text: "Consumes the chlorine atom, which must then be replaced" },
                        { key: "b", text: "Regenerates the chlorine atom, so it acts catalytically in a chain" },
                        { key: "c", text: "Converts the chlorine into a stable and harmless chloride" },
                        { key: "d", text: "Occurs only in the troposphere, where ozone is very abundant" }
                    ],
                    answer: "b",
                    explanation: "UV radiation splits a CFC and frees a chlorine radical, which reacts with ozone to give ClO and $\\mathrm{O_2}$; the ClO then reacts with atomic oxygen and <strong>releases the Cl atom again</strong>. Acting as a catalyst, one atom destroys up to a hundred thousand ozone molecules before it is removed. Thinning of the stratospheric ozone layer, measured in Dobson units, lets more UV-B through — causing skin cancer, cataract and reduced crop yield."
                },
                {
                    id: "d24b68",
                    text: "Which consequence of global climate change is being observed in the Nepal Himalaya in particular?",
                    options: [
                        { key: "a", text: "Retreat of glaciers and the growth of dangerous glacial lakes" },
                        { key: "b", text: "A steady expansion of the permanent snow line to lower altitudes" },
                        { key: "c", text: "A measured cooling of the high mountain valleys year on year" },
                        { key: "d", text: "A complete disappearance of the summer monsoon rainfall" }
                    ],
                    answer: "a",
                    explanation: "Warming has made Himalayan glaciers retreat and the meltwater collect behind unstable moraine dams, creating the risk of a <strong>glacial lake outburst flood (GLOF)</strong>. Other observed effects are an upward shift of the snow line and of vegetation belts, earlier flowering, and more erratic and intense monsoon rainfall — not its disappearance."
                },
                {
                    id: "d24b69",
                    text: "Eutrophication of a lake begins with the enrichment of its water by nitrates and phosphates. The death of the fish that follows is caused directly by:",
                    options: [
                        { key: "a", text: "The toxins secreted by the algae into the water" },
                        { key: "b", text: "The physical blocking of their gills by the algal cells" },
                        { key: "c", text: "Oxygen depletion as the algal bloom dies and decomposes" },
                        { key: "d", text: "The rise in water temperature caused by the dense bloom" }
                    ],
                    answer: "c",
                    explanation: "Fertiliser and sewage run-off trigger an <strong>algal bloom</strong>; the mat cuts off light to the submerged plants and, when the short-lived algae die, the decomposing bacteria multiply and consume the dissolved oxygen. The resulting anoxia — a very high biochemical oxygen demand — suffocates fish and other aerobic life. Some cyanobacterial toxins add to the damage."
                },
                {
                    id: "d24b70",
                    text: "The natural vegetation of Nepal changes from tropical to alpine within a horizontal distance of less than 200 km. The controlling factor for this zonation is:",
                    options: [
                        { key: "a", text: "The steep altitudinal gradient and the temperature it produces" },
                        { key: "b", text: "The change in soil type from sand in the south to clay in the north" },
                        { key: "c", text: "The difference in day length between the Terai and the Himalaya" },
                        { key: "d", text: "The distance of each zone from the nearest large river system" }
                    ],
                    answer: "a",
                    explanation: "Nepal rises from about 60 m in the Terai to 8848 m in a few degrees of latitude, and temperature falls roughly 6 °C for every 1000 m. This produces the classical belts — <strong>tropical (sal), sub-tropical (chir pine, schima–castanopsis), temperate (oak, laurel), sub-alpine (fir, birch, rhododendron) and alpine (scrub and meadow)</strong> above the tree line — telescoping into one country the vegetation of half a continent."
                },
                {
                    id: "d24b71",
                    text: "The most extensive and commercially most valuable forest of the Nepalese Terai and inner Terai is dominated by:",
                    options: [
                        { key: "a", text: "<em>Abies spectabilis</em>, the Himalayan silver fir" },
                        { key: "b", text: "<em>Betula utilis</em>, the Himalayan birch" },
                        { key: "c", text: "<em>Rhododendron arboreum</em>, the lali gurans" },
                        { key: "d", text: "<em>Shorea robusta</em>, the sal tree" }
                    ],
                    answer: "d",
                    explanation: "<strong>Sal (<em>Shorea robusta</em>)</strong> forms nearly pure stands in the Terai, Bhabar and inner Terai up to about 1000 m and yields a hard, durable, termite-resistant timber. Fir and birch belong to the sub-alpine zone — birch forming the tree line — and <em>Rhododendron arboreum</em>, the national flower, is a temperate to sub-alpine species."
                },
                {
                    id: "d24b72",
                    text: "<em>Mikania micrantha</em>, <em>Eichhornia crassipes</em> and <em>Lantana camara</em> are serious problems in Nepal because, as invasive alien species, they:",
                    options: [
                        { key: "a", text: "Are eaten in preference to crops by all the native herbivores" },
                        { key: "b", text: "Fix so much nitrogen that the soil becomes unusable for crops" },
                        { key: "c", text: "Spread fast in the absence of their natural enemies and oust natives" },
                        { key: "d", text: "Cannot reproduce here and so die out leaving the ground bare" }
                    ],
                    answer: "c",
                    explanation: "An alien plant introduced without the herbivores and pathogens that controlled it at home multiplies unchecked, <strong>outcompetes the native flora and reduces biodiversity</strong>. <em>Mikania</em> smothers the grasslands of Chitwan and threatens rhino habitat, <em>Eichhornia</em> (water hyacinth) chokes the waterways of Phewa taal, and <em>Lantana</em> and <em>Parthenium</em> invade open ground."
                },
                {
                    id: "d24b73",
                    text: "Primary and secondary succession differ in that secondary succession:",
                    options: [
                        { key: "a", text: "Starts on a bare surface that has never borne any life" },
                        { key: "b", text: "Starts where soil is already present, and so is much faster" },
                        { key: "c", text: "Never reaches a climax community of any kind" },
                        { key: "d", text: "Begins only in water and never on a terrestrial site" }
                    ],
                    answer: "b",
                    explanation: "<strong>Primary succession</strong> starts on a sterile surface — bare rock, new volcanic ash, a fresh sand dune — where soil must first be created by the pioneer lichens and mosses, and may take centuries. <strong>Secondary succession</strong> follows a disturbance such as fire, flood or abandonment of a field, where the <strong>soil and a seed bank survive</strong>, so the community rebuilds in decades."
                },
                {
                    id: "d24b74",
                    text: "In a hydrosere the correct order of the seral communities from open water to the climax is:",
                    options: [
                        { key: "a", text: "Reed swamp, phytoplankton, submerged, marsh meadow, woodland" },
                        { key: "b", text: "Marsh meadow, woodland, reed swamp, submerged, floating" },
                        { key: "c", text: "Phytoplankton, submerged, floating, reed swamp, marsh meadow, woodland" },
                        { key: "d", text: "Woodland, marsh meadow, reed swamp, floating, submerged, plankton" }
                    ],
                    answer: "c",
                    explanation: "A hydrosere begins with the <strong>phytoplankton</strong> stage in open water; their remains and silt raise the bottom, allowing <strong>rooted submerged</strong> plants (<em>Hydrilla</em>, <em>Vallisneria</em>), then <strong>rooted floating</strong> (<em>Nymphaea</em>), then the <strong>reed swamp</strong> (<em>Typha</em>), the <strong>marsh meadow</strong> of sedges and finally scrub and <strong>woodland</strong> climax. Each stage makes the habitat less suitable for itself and more suitable for the next."
                },
                {
                    id: "d24b75",
                    text: "A xerophyte of a dry rocky habitat typically shows sunken stomata, a thick cuticle and reduced leaves, whereas a submerged hydrophyte shows:",
                    options: [
                        { key: "a", text: "Poorly developed vascular tissue and large air spaces in the cortex" },
                        { key: "b", text: "A thick cuticle and stomata confined to the upper surface" },
                        { key: "c", text: "Deep tap roots with abundant root hairs for absorption" },
                        { key: "d", text: "Heavily lignified xylem to hold the shoot upright in the current" }
                    ],
                    answer: "a",
                    explanation: "A submerged plant is surrounded by water and supported by it, so it needs neither a cuticle nor much conducting or mechanical tissue; instead its cortex is riddled with <strong>aerenchyma</strong>, which stores gases for photosynthesis and respiration and gives buoyancy. Its thin, often dissected leaves absorb dissolved gases directly, and stomata are absent or non-functional."
                },
                {
                    id: "d24b76",
                    text: "Schleiden and Schwann framed the cell theory but could not explain how new cells arise. That gap was filled by Virchow, who stated that:",
                    options: [
                        { key: "a", text: "Cells arise spontaneously from non-living organic matter" },
                        { key: "b", text: "Every cell arises from a pre-existing cell by division" },
                        { key: "c", text: "The cell is the structural and functional unit of life" },
                        { key: "d", text: "All plants and animals are composed of cells and their products" }
                    ],
                    answer: "b",
                    explanation: "Schleiden (1838) and Schwann (1839) established that all plants and animals are made of cells, but both believed in free cell formation. Virchow (1855) added <strong>'omnis cellula e cellula'</strong> — every cell comes from a pre-existing cell — which completed the theory and demolished spontaneous generation. Viruses, having no cellular organisation, remain the standing exception."
                },
                {
                    id: "d24b77",
                    text: "Which difference between a prokaryotic and a eukaryotic cell is correctly stated?",
                    options: [
                        { key: "a", text: "Prokaryotes have 80S ribosomes; eukaryotes have 70S ribosomes" },
                        { key: "b", text: "Prokaryotes divide by mitosis; eukaryotes divide by binary fission" },
                        { key: "c", text: "Prokaryotic DNA is naked and circular; eukaryotic DNA is linear with histones" },
                        { key: "d", text: "Prokaryotes possess a cell wall; eukaryotic cells never have one" }
                    ],
                    answer: "c",
                    explanation: "A prokaryote carries a single <strong>circular DNA molecule without histones</strong> in a nucleoid, has <strong>70S</strong> ribosomes and divides by <strong>binary fission</strong>. A eukaryote has several <strong>linear chromosomes wound on histones</strong> inside a nuclear envelope, 80S cytoplasmic ribosomes, and divides by mitosis. Plants, fungi and many protists do have cell walls."
                },
                {
                    id: "d24b78",
                    text: "The plant cell wall is laid down in layers. The layer that is deposited first and cements adjacent cells together is the:",
                    options: [
                        { key: "a", text: "Middle lamella, composed largely of calcium pectate" },
                        { key: "b", text: "Primary wall, composed largely of cellulose microfibrils" },
                        { key: "c", text: "Secondary wall, often impregnated with lignin" },
                        { key: "d", text: "Tertiary wall, lining the lumen of a mature fibre" }
                    ],
                    answer: "a",
                    explanation: "The <strong>middle lamella</strong> of calcium and magnesium pectate is formed at the cell plate and glues neighbouring cells; its dissolution during fruit ripening is what makes the fruit soft. Inside it lies the elastic <strong>primary wall</strong> of cellulose, and only cells that have stopped growing add a thick, often lignified <strong>secondary wall</strong>. Cytoplasmic strands connect cells through pits as <strong>plasmodesmata</strong>."
                },
                {
                    id: "d24b79",
                    text: "In the fluid mosaic model of Singer and Nicolson, the word 'mosaic' refers to the:",
                    options: [
                        { key: "a", text: "Lateral movement of the lipids within each half of the bilayer" },
                        { key: "b", text: "Alternating layers of protein and lipid sandwiched together" },
                        { key: "c", text: "Different phospholipids used in the inner and outer leaflets" },
                        { key: "d", text: "Patchwork of proteins embedded in or attached to the lipid bilayer" }
                    ],
                    answer: "d",
                    explanation: "'Fluid' describes the ability of the lipids — and of many proteins — to diffuse laterally in the plane of the membrane; <strong>'mosaic'</strong> describes the scattered <strong>integral (intrinsic) and peripheral (extrinsic) proteins</strong> set in that lipid sea like tiles. The older Danielli–Davson model proposed the rigid protein–lipid–protein sandwich."
                },
                {
                    id: "d24b80",
                    text: "Glucose enters a cell down its concentration gradient far faster than its size and polarity would allow by simple diffusion, but no ATP is used. This transport is:",
                    options: [
                        { key: "a", text: "Active transport, driven by a proton gradient instead of ATP" },
                        { key: "b", text: "Osmosis, since glucose moves with the water molecules" },
                        { key: "c", text: "Endocytosis, the membrane engulfing the glucose in a vesicle" },
                        { key: "d", text: "Facilitated diffusion, through a specific carrier protein" }
                    ],
                    answer: "d",
                    explanation: "<strong>Facilitated diffusion</strong> is passive — the solute still moves <em>down</em> its gradient and no energy is spent — but it needs a specific carrier or channel protein, so it is selective and shows saturation, unlike simple diffusion. Active transport differs in moving solutes <em>against</em> the gradient at the cost of ATP, as in the sodium–potassium pump."
                },
                {
                    id: "d24b81",
                    text: "The inner membrane of a mitochondrion is thrown into cristae studded with $\\mathrm{F_1}$ particles (oxysomes). The functional reason for the folding is to:",
                    options: [
                        { key: "a", text: "Keep the mitochondrial DNA separate from the surrounding matrix" },
                        { key: "b", text: "Provide space for the enzymes of the Krebs cycle to be attached" },
                        { key: "c", text: "Allow the organelle to change its shape and move about the cell" },
                        { key: "d", text: "Increase the surface bearing the electron transport chain and ATP synthase" }
                    ],
                    answer: "d",
                    explanation: "Oxidative phosphorylation happens <em>on</em> the inner membrane, so folding it into <strong>cristae</strong> multiplies the area available for the respiratory chain and the $\\mathrm{F_0-F_1}$ ATP synthase heads; cells with a high energy demand have the most cristae. The <strong>Krebs-cycle enzymes, ribosomes and circular DNA lie free in the matrix</strong>, not on the membrane."
                },
                {
                    id: "d24b82",
                    text: "Mitochondria and chloroplasts are called semi-autonomous organelles. The evidence for this is that both possess:",
                    options: [
                        { key: "a", text: "A single membrane and enzymes for glycolysis" },
                        { key: "b", text: "Their own circular DNA and 70S ribosomes, and divide by fission" },
                        { key: "c", text: "80S ribosomes identical with those of the cytoplasm" },
                        { key: "d", text: "The ability to survive and grow outside the cell indefinitely" }
                    ],
                    answer: "b",
                    explanation: "Each has a <strong>double membrane, naked circular DNA, 70S ribosomes</strong> and divides by fission like a bacterium — the basis of Margulis's <strong>endosymbiotic theory</strong>, which holds that they were once free-living prokaryotes engulfed by an ancestral eukaryote. They are only <em>semi</em>-autonomous because most of their proteins are still coded by nuclear genes."
                },
                {
                    id: "d24b83",
                    text: "In a chloroplast, the light-dependent reactions and the Calvin cycle are located respectively in the:",
                    options: [
                        { key: "a", text: "Stroma and the thylakoid membranes" },
                        { key: "b", text: "Outer membrane and the inter-membrane space" },
                        { key: "c", text: "Thylakoid membranes and the stroma" },
                        { key: "d", text: "Grana and the inner membrane of the envelope" }
                    ],
                    answer: "c",
                    explanation: "The photosystems, electron carriers and ATP synthase are embedded in the <strong>thylakoid membranes</strong>, which stack into grana, so that is where light is trapped and ATP and NADPH are made. The enzymes of the <strong>Calvin–Benson cycle</strong>, including RuBisCO, are dissolved in the surrounding <strong>stroma</strong>, together with the chloroplast DNA, ribosomes and starch grains."
                },
                {
                    id: "d24b84",
                    text: "Rough and smooth endoplasmic reticulum differ in function in that the smooth ER is chiefly concerned with:",
                    options: [
                        { key: "a", text: "The synthesis of proteins destined for secretion from the cell" },
                        { key: "b", text: "The intracellular digestion of worn-out organelles and food" },
                        { key: "c", text: "The packaging of finished proteins into secretory vesicles" },
                        { key: "d", text: "The synthesis of lipids and steroids and the detoxification of drugs" }
                    ],
                    answer: "d",
                    explanation: "Rough ER is studded with ribosomes and handles the synthesis, folding and initial glycosylation of proteins for export or for membranes. <strong>Smooth ER</strong> has no ribosomes and makes <strong>lipids, phospholipids and steroids</strong>, stores calcium and detoxifies drugs and poisons — hence its abundance in liver cells. Packaging is the Golgi's job and digestion the lysosome's."
                },
                {
                    id: "d24b85",
                    text: "The Golgi apparatus is polarised, with a <em>cis</em> (forming) face and a <em>trans</em> (maturing) face. Material normally travels:",
                    options: [
                        { key: "a", text: "From the <em>trans</em> face to the ER and then out through the <em>cis</em> face" },
                        { key: "b", text: "In both directions equally, since the two faces are identical" },
                        { key: "c", text: "From the ER to the <em>cis</em> face and out from the <em>trans</em> face" },
                        { key: "d", text: "From the plasma membrane inward to the nucleus for storage" }
                    ],
                    answer: "c",
                    explanation: "Vesicles budding from the rough ER fuse with the convex <strong><em>cis</em> face</strong>; as the material moves through the cisternae it is glycosylated, sorted and concentrated, and it leaves the concave <strong><em>trans</em> face</strong> in secretory vesicles or as lysosomes. In plant cells the unstacked units are called <strong>dictyosomes</strong>, and they also assemble the polysaccharides of the cell wall."
                },
                {
                    id: "d24b86",
                    text: "Lysosomal enzymes work best at pH 5, whereas the cytosol is at pH 7.2. This difference is a safety device because:",
                    options: [
                        { key: "a", text: "The enzymes would be almost inactive if released into the cytosol" },
                        { key: "b", text: "The acid interior prevents the enzymes from ever being made" },
                        { key: "c", text: "The cytosol destroys any enzyme that escapes from the lysosome" },
                        { key: "d", text: "The low pH keeps the lysosomal membrane permanently impermeable" }
                    ],
                    answer: "a",
                    explanation: "A proton pump keeps the lysosome acidic, which is the optimum for its fifty-odd <strong>acid hydrolases</strong>. Should a few leak out, the near-neutral cytosol renders them largely <em>inactive</em>, so limited leakage does no harm. Wholesale rupture, however, digests the cell — hence the name <strong>'suicide bag'</strong>, seen in autolysis and in the shedding of a tadpole's tail."
                },
                {
                    id: "d24b87",
                    text: "A polysome (polyribosome) is best described as:",
                    options: [
                        { key: "a", text: "A ribosome carrying several different messenger RNAs at once" },
                        { key: "b", text: "Several ribosomes translating one mRNA molecule simultaneously" },
                        { key: "c", text: "A cluster of ribosomal subunits stored in the nucleolus" },
                        { key: "d", text: "The 60S and 40S subunits joined together during translation" }
                    ],
                    answer: "b",
                    explanation: "As soon as one ribosome has moved a short way along the message, another attaches at the start codon, so a single mRNA carries a string of ribosomes — a <strong>polysome</strong> — and many identical polypeptides are produced at once. The eukaryotic ribosome is <strong>80S (60S + 40S)</strong> and its RNA component is made in the <strong>nucleolus</strong>."
                },
                {
                    id: "d24b88",
                    text: "The central vacuole may occupy 90 per cent of the volume of a mature plant cell. Its membrane and its chief mechanical role are:",
                    options: [
                        { key: "a", text: "The tonoplast, and the maintenance of turgor pressure" },
                        { key: "b", text: "The plasmalemma, and the storage of the photosynthate" },
                        { key: "c", text: "The tonoplast, and the synthesis of the cell wall material" },
                        { key: "d", text: "The plasmalemma, and the digestion of worn-out organelles" }
                    ],
                    answer: "a",
                    explanation: "The vacuolar membrane, the <strong>tonoplast</strong>, is selectively permeable and actively accumulates solutes, so water enters osmotically and presses the protoplast against the wall. The resulting <strong>turgor</strong> supports herbaceous tissue and drives cell enlargement. The cell sap also stores pigments, salts, organic acids and waste products such as alkaloids and tannins."
                },
                {
                    id: "d24b89",
                    text: "The nuclear envelope is perforated by pores. Their function is to:",
                    options: [
                        { key: "a", text: "Allow the whole chromosome to move into the cytoplasm" },
                        { key: "b", text: "Permit regulated two-way traffic of RNA and proteins" },
                        { key: "c", text: "Let the nucleolus escape into the cytoplasm during mitosis" },
                        { key: "d", text: "Admit oxygen, which cannot cross the double membrane" }
                    ],
                    answer: "b",
                    explanation: "Each pore is an elaborate protein complex that exports mRNA and ribosomal subunits and imports nucleotides, histones, polymerases and ribosomal proteins — a <strong>selective, two-way gate</strong>. The envelope itself is double, its outer membrane continuous with the rough ER, and it breaks down and re-forms at each mitosis. Small gases cross membranes freely."
                },
                {
                    id: "d24b90",
                    text: "A chromosome whose centromere lies very near one end, giving one extremely short and one very long arm, is described as:",
                    options: [
                        { key: "a", text: "Metacentric, appearing as a V at anaphase" },
                        { key: "b", text: "Submetacentric, appearing as an L at anaphase" },
                        { key: "c", text: "Acrocentric, appearing as a J at anaphase" },
                        { key: "d", text: "Telocentric, with the centromere exactly at the tip" }
                    ],
                    answer: "c",
                    explanation: "By the position of the centromere a chromosome is <strong>metacentric</strong> (median, V-shaped), <strong>submetacentric</strong> (slightly off-centre, L-shaped), <strong>acrocentric</strong> (near one end, J-shaped) or <strong>telocentric</strong> (terminal, rod-shaped). The centromere carries the kinetochore to which spindle fibres attach; a satellite (SAT) chromosome additionally bears a secondary constriction."
                },
                {
                    id: "d24b91",
                    text: "The axoneme of a cilium shows the 9 + 2 arrangement, but its basal body shows 9 + 0. The difference is that the basal body:",
                    options: [
                        { key: "a", text: "Has nine peripheral triplets and no central microtubules" },
                        { key: "b", text: "Has nine peripheral singlets and two central triplets" },
                        { key: "c", text: "Has nine central doublets and no peripheral tubules at all" },
                        { key: "d", text: "Lacks microtubules entirely and is made only of protein fibres" }
                    ],
                    answer: "a",
                    explanation: "The shaft contains nine peripheral <strong>doublets</strong> plus two central singlets (9 + 2), sliding of the doublets by dynein arms producing the beat. The <strong>basal body</strong>, structurally identical with a centriole, has nine peripheral <strong>triplets</strong> and no central pair (9 + 0). Both cilia and flagella of eukaryotes are covered by the plasma membrane, unlike a bacterial flagellum."
                },
                {
                    id: "d24b92",
                    text: "Aleurone grains, starch grains and crystals of calcium oxalate found in plant cells are grouped together as:",
                    options: [
                        { key: "a", text: "Cell organelles, since each is bounded by a membrane" },
                        { key: "b", text: "Cell inclusions, non-living products of the protoplast" },
                        { key: "c", text: "Plastids, since all three are formed from proplastids" },
                        { key: "d", text: "Microbodies, since all contain oxidative enzymes" }
                    ],
                    answer: "b",
                    explanation: "<strong>Cell inclusions (ergastic substances)</strong> are non-living, non-protoplasmic materials — reserve food such as starch and aleurone (protein) grains and oil drops, waste products such as raphides and druses of calcium oxalate, tannins, resins and latex, and secretory substances. They are not bounded by their own membranes and carry out no metabolic activity."
                },
                {
                    id: "d24b93",
                    text: "In the cell cycle, the amount of nuclear DNA doubles during:",
                    options: [
                        { key: "a", text: "The $\\mathrm{G_1}$ phase, the longest phase of interphase" },
                        { key: "b", text: "The $\\mathrm{G_2}$ phase, just before mitosis begins" },
                        { key: "c", text: "The S phase of interphase, well before mitosis begins" },
                        { key: "d", text: "The anaphase of mitosis, when the chromatids separate" }
                    ],
                    answer: "c",
                    explanation: "Replication is confined to the <strong>synthesis (S) phase</strong>, so a cell enters mitosis with every chromosome already double — two sister chromatids joined at the centromere. The <em>chromosome number</em> is unchanged; only the DNA content doubles from 2C to 4C. At anaphase the chromatids merely separate, restoring 2C to each daughter."
                },
                {
                    id: "d24b94",
                    text: "The stage of mitosis at which the chromosomes are most condensed and are best used for karyotype studies is:",
                    options: [
                        { key: "a", text: "Prophase, when the nuclear envelope is disappearing" },
                        { key: "b", text: "Telophase, when the daughter nuclei are re-forming" },
                        { key: "c", text: "Anaphase, when the chromatids are moving apart" },
                        { key: "d", text: "Metaphase, when they lie on the equatorial plate" }
                    ],
                    answer: "d",
                    explanation: "Condensation continues through prophase and is maximal at <strong>metaphase</strong>, when the chromosomes are also aligned in one plane on the equator, each attached by its kinetochore to spindle fibres from both poles. They are therefore at their shortest, thickest and most clearly separated — ideal for counting and for preparing an idiogram."
                },
                {
                    id: "d24b95",
                    text: "Meiosis is called a reduction division although it involves two successive nuclear divisions. The reduction occurs at:",
                    options: [
                        { key: "a", text: "Anaphase I, when the homologous chromosomes separate" },
                        { key: "b", text: "Anaphase II, when the sister chromatids separate" },
                        { key: "c", text: "Prophase I, when the homologues pair with each other" },
                        { key: "d", text: "Telophase II, when the four nuclei are finally formed" }
                    ],
                    answer: "a",
                    explanation: "At <strong>anaphase I</strong> whole homologous chromosomes — each still consisting of two chromatids — are pulled to opposite poles, so each daughter nucleus receives only one of each pair and the number is halved. Meiosis I is thus the <em>heterotypic, reductional</em> division; meiosis II simply separates the chromatids and is <em>homotypic, equational</em>, like a mitosis."
                },
                {
                    id: "d24b96",
                    text: "The substages of prophase I in their correct order are:",
                    options: [
                        { key: "a", text: "Zygotene, leptotene, pachytene, diakinesis, diplotene" },
                        { key: "b", text: "Leptotene, zygotene, pachytene, diplotene, diakinesis" },
                        { key: "c", text: "Pachytene, zygotene, leptotene, diplotene, diakinesis" },
                        { key: "d", text: "Leptotene, pachytene, zygotene, diakinesis, diplotene" }
                    ],
                    answer: "b",
                    explanation: "<strong>Leptotene</strong> — chromosomes appear as thin threads; <strong>zygotene</strong> — homologues pair by synapsis, forming the synaptonemal complex; <strong>pachytene</strong> — bivalents thicken and <em>crossing over</em> occurs between non-sister chromatids; <strong>diplotene</strong> — homologues begin to separate, held at the chiasmata; <strong>diakinesis</strong> — maximum condensation, terminalisation of chiasmata and disappearance of the nucleolus."
                },
                {
                    id: "d24b97",
                    text: "Crossing over produces new combinations of alleles. The exchange takes place between:",
                    options: [
                        { key: "a", text: "Sister chromatids of the same chromosome" },
                        { key: "b", text: "Two chromosomes belonging to different pairs" },
                        { key: "c", text: "Non-sister chromatids of the two homologous chromosomes" },
                        { key: "d", text: "The two daughter chromosomes at anaphase II" }
                    ],
                    answer: "c",
                    explanation: "Exchange between <strong>non-sister chromatids of a homologous pair</strong> is what recombines the maternal and paternal alleles; an exchange between sister chromatids, being genetically identical, would achieve nothing. The visible point of exchange is the <strong>chiasma</strong>, and the enzyme responsible is recombinase. The frequency of recombination is used to map genes on a chromosome."
                },
                {
                    id: "d24b98",
                    text: "The two chief contributions of meiosis to a sexually reproducing species are that it:",
                    options: [
                        { key: "a", text: "Increases the cell number rapidly and heals injured tissue" },
                        { key: "b", text: "Doubles the chromosome number and repairs damaged DNA" },
                        { key: "c", text: "Keeps the chromosome number constant and produces identical cells" },
                        { key: "d", text: "Halves the chromosome number and generates genetic variation" }
                    ],
                    answer: "d",
                    explanation: "Halving the number in the gametes is what keeps the <strong>chromosome number of the species constant</strong> from generation to generation, since fertilisation restores the diploid state. At the same time <strong>crossing over</strong> and the <strong>independent assortment</strong> of maternal and paternal chromosomes at metaphase I create endless new combinations — the raw material of evolution."
                },
                {
                    id: "d24b99",
                    text: "Cytokinesis in a plant cell differs from that in an animal cell in that the plant cell:",
                    options: [
                        { key: "a", text: "Is pinched into two by a furrow formed by a contractile ring" },
                        { key: "b", text: "Forms a cell plate from the centre outwards towards the walls" },
                        { key: "c", text: "Divides its nucleus but never separates its cytoplasm at all" },
                        { key: "d", text: "Forms a new wall from the outside inwards by ingrowth" }
                    ],
                    answer: "b",
                    explanation: "The rigid wall prevents furrowing, so Golgi vesicles carrying wall material line up on the phragmoplast at the equator and fuse to make a <strong>cell plate that grows centrifugally</strong> — from the centre towards the existing walls — until it joins them. The plate becomes the middle lamella, on either side of which the new primary walls are laid down."
                },
                {
                    id: "d24b100",
                    text: "Amitosis differs from mitosis in that in amitosis:",
                    options: [
                        { key: "a", text: "The chromosomes are duplicated twice before the nucleus divides" },
                        { key: "b", text: "Four daughter cells are produced instead of the usual two" },
                        { key: "c", text: "A spindle is formed but the nuclear envelope never breaks down" },
                        { key: "d", text: "The nucleus and cytoplasm simply constrict without a spindle" }
                    ],
                    answer: "d",
                    explanation: "In <strong>amitosis (direct division)</strong> the nucleus merely elongates and constricts into two, followed by a constriction of the cytoplasm — there is <em>no</em> chromosome condensation, no spindle and no orderly distribution, so the daughter cells may receive unequal genetic material. It is seen in prokaryotes, in some protozoa, in degenerating and in diseased cells."
                }/* __U4__ */
            ]
        },
        {
            id: "genanat24",
            name: "Genetics & Plant Anatomy",
            subject: "Botany",
            accent: "amber",
            blurb: "Q101–145 · DNA and RNA, replication, central dogma and the genetic code, Mendelian and non-Mendelian inheritance, linkage, sex linkage, mutation and polyploidy; plant tissues, vascular bundles and monocot–dicot anatomy.",
            questions: [
                {
                    id: "d24b101",
                    text: "In the Watson–Crick model of B-DNA, one complete turn of the double helix measures 34 Å and the helix is 20 Å wide. It follows that one turn contains:",
                    options: [
                        { key: "a", text: "10 base pairs, each pair 3.4 Å apart" },
                        { key: "b", text: "20 base pairs, each pair 1.7 Å apart" },
                        { key: "c", text: "34 base pairs, each pair 1.0 Å apart" },
                        { key: "d", text: "5 base pairs, each pair 6.8 Å apart" }
                    ],
                    answer: "a",
                    explanation: "Successive base pairs are stacked <strong>0.34 nm (3.4 Å)</strong> apart, so a pitch of 3.4 nm accommodates $34/3.4 = \\mathbf{10}$ base pairs per turn. The two strands are <strong>antiparallel</strong> — one running $5' \\rightarrow 3'$ and the other $3' \\rightarrow 5'$ — and the sugar–phosphate backbones lie outside with the bases stacked within, giving a major and a minor groove."
                },
                {
                    id: "d24b102",
                    text: "A double-stranded DNA molecule in the B-form is $3.4\\ \\mu\\mathrm{m}$ long. The number of base pairs and the number of complete turns it contains are:",
                    options: [
                        { key: "a", text: "10 000 base pairs and 1000 complete turns" },
                        { key: "b", text: "1000 base pairs and 100 complete turns" },
                        { key: "c", text: "34 000 base pairs and 3400 complete turns" },
                        { key: "d", text: "100 000 base pairs and 10 000 complete turns" }
                    ],
                    answer: "a",
                    explanation: "$3.4\\ \\mu\\mathrm{m} = 34\\,000$ &Aring;. Successive base pairs lie $3.4$ &Aring; apart, so the number of pairs is $34\\,000/3.4 = \\mathbf{10\\,000}$; with <strong>10 base pairs in every 34 &Aring; turn</strong> the number of turns is $10\\,000/10 = \\mathbf{1000}$. The same arithmetic shows why the two metres of DNA in a human cell must be coiled on histones to fit a nucleus a few micrometres wide."
                },
                {
                    id: "d24b103",
                    text: "DNA rich in guanine and cytosine needs a higher temperature to melt than DNA rich in adenine and thymine. The reason is that:",
                    options: [
                        { key: "a", text: "G–C pairs are joined by three hydrogen bonds against two in A–T" },
                        { key: "b", text: "G and C are both purines and so are larger and heavier" },
                        { key: "c", text: "G–C pairs are held by covalent bonds and A–T by hydrogen bonds" },
                        { key: "d", text: "G–C pairs occur only in the more tightly coiled heterochromatin" }
                    ],
                    answer: "a",
                    explanation: "Adenine pairs with thymine through <strong>two</strong> hydrogen bonds and guanine with cytosine through <strong>three</strong>, so a GC-rich duplex is thermally more stable and has a higher melting temperature. Note also that each pair always joins a <em>purine</em> (A or G, double ring) with a <em>pyrimidine</em> (T or C, single ring), which keeps the helix a uniform 20 Å wide."
                },
                {
                    id: "d24b104",
                    text: "RNA differs from DNA in three respects. The correct set is that RNA has:",
                    options: [
                        { key: "a", text: "Deoxyribose, thymine and a double-stranded structure" },
                        { key: "b", text: "Ribose, uracil and a generally single-stranded structure" },
                        { key: "c", text: "Ribose, thymine and a generally double-stranded structure" },
                        { key: "d", text: "Deoxyribose, uracil and a single-stranded structure" }
                    ],
                    answer: "b",
                    explanation: "RNA carries the sugar <strong>ribose</strong> (with an extra $-\\mathrm{OH}$ at C-2, which makes it chemically less stable), uses <strong>uracil</strong> in place of thymine, and is usually <strong>single-stranded</strong>, though it folds on itself into hairpins and loops. These properties suit a short-lived working copy, whereas DNA's chemistry suits permanent storage."
                },
                {
                    id: "d24b105",
                    text: "Transfer RNA is described as an adapter molecule. Its two functionally critical regions are the:",
                    options: [
                        { key: "a", text: "Codon at one end and the ribosome-binding site at the other" },
                        { key: "b", text: "Promoter loop and the terminator loop of the clover leaf" },
                        { key: "c", text: "Anticodon loop and the CCA end that carries the amino acid" },
                        { key: "d", text: "Two ends of a double helix, one reading and one writing" }
                    ],
                    answer: "c",
                    explanation: "Folded into a clover-leaf in two dimensions and an L in three, tRNA reads the message through its three-base <strong>anticodon</strong> and carries the corresponding amino acid esterified to the <strong>CCA sequence at its 3' end</strong>. It thus translates between the language of nucleotides and that of amino acids — exactly the adapter Crick postulated."
                },
                {
                    id: "d24b106",
                    text: "A nucleoside and a nucleotide differ in that a nucleotide additionally contains:",
                    options: [
                        { key: "a", text: "A nitrogenous base attached to the sugar" },
                        { key: "b", text: "A second pentose sugar joined to the first" },
                        { key: "c", text: "One or more phosphate groups" },
                        { key: "d", text: "A hydrogen bond linking it to its partner" }
                    ],
                    answer: "c",
                    explanation: "<strong>Nucleoside</strong> $=$ nitrogenous base $+$ pentose sugar (adenosine, guanosine, cytidine, thymidine, uridine). <strong>Nucleotide</strong> $=$ nucleoside $+$ <strong>phosphate</strong>, and it is the nucleotide that is the monomer of nucleic acids, successive units being joined by $3'-5'$ phosphodiester bonds. ATP, NAD and FAD are nucleotides serving other purposes."
                },
                {
                    id: "d24b107",
                    text: "Meselson and Stahl grew <em>E. coli</em> in heavy nitrogen and then transferred it to normal nitrogen. After exactly one generation all the DNA was of intermediate density, which ruled out:",
                    options: [
                        { key: "a", text: "The conservative model, which predicted heavy and light bands only" },
                        { key: "b", text: "The semi-conservative model, which predicted one hybrid band" },
                        { key: "c", text: "The dispersive model, which predicted a single hybrid band" },
                        { key: "d", text: "All three models, since none predicted an intermediate band" }
                    ],
                    answer: "a",
                    explanation: "After one round the <strong>conservative</strong> model predicts two bands — the original all-heavy duplex and a new all-light one — which was <em>not</em> observed. Both the semi-conservative and the dispersive models predict a single hybrid band; they were distinguished at the <em>second</em> generation, where semi-conservative replication gives equal hybrid and light bands, as was found."
                },
                {
                    id: "d24b108",
                    text: "DNA polymerase cannot start a new chain by itself; primase must first lay down a short RNA primer. This is because the polymerase can only:",
                    options: [
                        { key: "a", text: "Copy a template that is already in the double-stranded form" },
                        { key: "b", text: "Add a nucleotide to a free 3'-OH group that already exists" },
                        { key: "c", text: "Work on the leading strand and never on the lagging strand" },
                        { key: "d", text: "Act after the whole molecule has been unwound by helicase" }
                    ],
                    answer: "b",
                    explanation: "DNA polymerase is an <em>extending</em> enzyme: it can add a nucleotide only to the <strong>free 3'-hydroxyl</strong> of a chain already base-paired to the template, so it needs a starting block. The RNA primer supplies it; the primer is later excised, the gap filled with DNA and the nick sealed by <strong>DNA ligase</strong>. Each Okazaki fragment of the lagging strand therefore begins with its own primer."
                },
                {
                    id: "d24b109",
                    text: "The central dogma states that information flows DNA $\\rightarrow$ RNA $\\rightarrow$ protein. The exception discovered in the retroviruses is that:",
                    options: [
                        { key: "a", text: "Protein can be used as a template to make new RNA" },
                        { key: "b", text: "RNA can be translated directly into DNA by a ribosome" },
                        { key: "c", text: "RNA can be copied into DNA by reverse transcriptase" },
                        { key: "d", text: "DNA can be translated into protein without any RNA" }
                    ],
                    answer: "c",
                    explanation: "Temin and Baltimore showed that retroviruses such as HIV carry <strong>reverse transcriptase</strong>, which copies their RNA genome into DNA; that DNA is then integrated into the host chromosome. The reverse flow is thus $\\mathrm{RNA \\rightarrow DNA}$, sometimes called teminism. Information never flows back from protein to nucleic acid."
                },
                {
                    id: "d24b110",
                    text: "Of the two strands of a gene, only one is copied by RNA polymerase. That strand is correctly called the:",
                    options: [
                        { key: "a", text: "Template or antisense strand, read in the $3' \\rightarrow 5'$ direction" },
                        { key: "b", text: "Coding or sense strand, read in the $3' \\rightarrow 5'$ direction" },
                        { key: "c", text: "Template strand, which has the same sequence as the mRNA" },
                        { key: "d", text: "Lagging strand, which is copied as short Okazaki fragments" }
                    ],
                    answer: "a",
                    explanation: "RNA polymerase reads the <strong>template (antisense) strand</strong> in the $3' \\rightarrow 5'$ direction and therefore builds the transcript $5' \\rightarrow 3'$. The other strand, the <strong>coding or sense strand</strong>, is not transcribed but has the <em>same</em> sequence as the mRNA except that T replaces U — which is why gene sequences are conventionally written as the coding strand."
                },
                {
                    id: "d24b111",
                    text: "The codon UUU specifies phenylalanine in a bacterium, in a maize plant and in man alike. This near-universality of the genetic code is evidence that:",
                    options: [
                        { key: "a", text: "The code arose independently many times during evolution" },
                        { key: "b", text: "Every organism uses exactly the same set of transfer RNAs" },
                        { key: "c", text: "All present-day life has descended from a common ancestor" },
                        { key: "d", text: "A codon can be read equally well in either direction" }
                    ],
                    answer: "c",
                    explanation: "A code that assigns the same triplets to the same amino acids in every kingdom is most simply explained by <strong>descent from a single ancestral population</strong> in which the assignments were already fixed. It is also of great practical value — a human gene can be expressed in a bacterium, which is the basis of recombinant insulin. A few exceptions in mitochondria and some protozoa make the code 'nearly', not absolutely, universal."
                },
                {
                    id: "d24b112",
                    text: "Of the 64 codons of the genetic code, the numbers that code for amino acids and that act as stop signals are respectively:",
                    options: [
                        { key: "a", text: "60 and 4" },
                        { key: "b", text: "64 and 0" },
                        { key: "c", text: "61 and 3" },
                        { key: "d", text: "20 and 44" }
                    ],
                    answer: "c",
                    explanation: "Three bases with four choices each give $4^3 = 64$ codons. <strong>61</strong> are sense codons specifying amino acids and <strong>3</strong> — UAA (ochre), UAG (amber) and UGA (opal) — are nonsense or termination codons. <strong>AUG</strong> is both the initiation codon and the codon for methionine, and GUG occasionally initiates in bacteria."
                },
                {
                    id: "d24b113",
                    text: "During translation the growing polypeptide is transferred from the tRNA in the P site to the amino acid on the tRNA in the A site. The peptide bond is formed by:",
                    options: [
                        { key: "a", text: "A protein enzyme dissolved in the surrounding cytoplasm of the cell" },
                        { key: "b", text: "The peptidyl transferase activity of the large subunit rRNA" },
                        { key: "c", text: "The anticodon arm of the incoming transfer RNA molecule itself" },
                        { key: "d", text: "RNA polymerase, which moves along the message with the ribosome" }
                    ],
                    answer: "b",
                    explanation: "The catalytic centre for peptide-bond formation lies in the <strong>23S rRNA of the large subunit</strong>, so the ribosome is a <strong>ribozyme</strong> — an RNA enzyme. The small subunit holds the mRNA and checks codon–anticodon pairing. This finding strongly supports the RNA-world hypothesis that RNA preceded protein as a catalyst."
                },
                {
                    id: "d24b114",
                    text: "Mendel succeeded where earlier hybridisers had failed largely because the garden pea he chose:",
                    options: [
                        { key: "a", text: "Was naturally cross-pollinated, so hybrids arose automatically" },
                        { key: "b", text: "Had a very long life cycle, allowing careful observation" },
                        { key: "c", text: "Produced only a few seeds, making the counting very easy" },
                        { key: "d", text: "Had clear-cut contrasting characters and was normally self-pollinated" }
                    ],
                    answer: "d",
                    explanation: "<em>Pisum sativum</em> offered seven pairs of sharply <strong>contrasting, discontinuous characters</strong>, was naturally <strong>self-pollinating</strong> (so pure lines were readily available and stray pollen excluded), yet could be cross-pollinated by hand, had a short life cycle and gave many offspring for statistical analysis. Mendel's other innovation was to follow one or two characters at a time and count."
                },
                {
                    id: "d24b115",
                    text: "A tall pea plant is crossed with a dwarf. All the offspring are tall. When the tall offspring is test-crossed, the expected ratio is:",
                    options: [
                        { key: "a", text: "3 tall : 1 dwarf" },
                        { key: "b", text: "1 tall : 2 intermediate : 1 dwarf" },
                        { key: "c", text: "All tall, with no dwarf at all" },
                        { key: "d", text: "1 tall : 1 dwarf" }
                    ],
                    answer: "d",
                    explanation: "A <strong>test cross</strong> mates the individual of unknown genotype with the <em>homozygous recessive</em>. Here $\\mathrm{Tt \\times tt}$ gives $\\mathrm{Tt}$ and $\\mathrm{tt}$ in equal numbers — <strong>1 tall : 1 dwarf</strong>. The 3 : 1 ratio would come from selfing the $\\mathrm{F_1}$. The test cross is the standard way of finding whether a dominant-looking plant is homozygous or heterozygous."
                },
                {
                    id: "d24b116",
                    text: "In a monohybrid cross the $\\mathrm{F_2}$ shows a phenotypic ratio of 3 : 1 but a genotypic ratio of 1 : 2 : 1. The reason the two ratios differ is that:",
                    options: [
                        { key: "a", text: "The recessive allele mutates back to the dominant form" },
                        { key: "b", text: "One quarter of the zygotes formed always fail to survive" },
                        { key: "c", text: "The genes segregate unequally during the formation of gametes" },
                        { key: "d", text: "The heterozygote is indistinguishable from the dominant homozygote" }
                    ],
                    answer: "d",
                    explanation: "Because dominance is complete, the $\\mathrm{TT}$ and $\\mathrm{Tt}$ classes look identical and are counted together as one tall class — $1 + 2 = 3$ against 1 dwarf. Where dominance is incomplete the heterozygote is distinguishable and the two ratios coincide at <strong>1 : 2 : 1</strong>, which is one reason such cases are so instructive."
                },
                {
                    id: "d24b117",
                    text: "Mendel's law of independent assortment is valid only when the two genes concerned are:",
                    options: [
                        { key: "a", text: "Located close together on the very same chromosome" },
                        { key: "b", text: "Located on different chromosomes or far apart on one" },
                        { key: "c", text: "Both completely dominant over their own alleles" },
                        { key: "d", text: "Both located on the sex chromosomes of the organism" }
                    ],
                    answer: "b",
                    explanation: "Independent assortment reflects the random orientation of different bivalents at metaphase I, so it applies to genes on <strong>different chromosomes</strong> — or so far apart on one chromosome that crossing over separates them at random. Genes lying close together are <strong>linked</strong> and are inherited together, giving a marked excess of parental combinations and no 9 : 3 : 3 : 1 ratio."
                },
                {
                    id: "d24b118",
                    text: "An individual of genotype $\\mathrm{AaBbCcDd}$ produces how many genetically different kinds of gamete, assuming all four genes are unlinked?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "4" },
                        { key: "c", text: "16" },
                        { key: "d", text: "32" }
                    ],
                    answer: "c",
                    explanation: "Each heterozygous pair segregates independently and contributes two alternatives, so the number of gamete types is $2^n$ where $n$ is the number of heterozygous gene pairs: $2^4 = \\mathbf{16}$. Selfing such an individual would give $3^4 = 81$ genotypes and, with complete dominance, $2^4 = 16$ phenotypes."
                },
                {
                    id: "d24b119",
                    text: "In <em>Mirabilis jalapa</em> a red-flowered plant crossed with a white gives all pink offspring, and the $\\mathrm{F_2}$ is 1 red : 2 pink : 1 white. This shows that:",
                    options: [
                        { key: "a", text: "The alleles blend permanently and cannot be recovered" },
                        { key: "b", text: "Neither allele is dominant, so the heterozygote is intermediate" },
                        { key: "c", text: "Both alleles are fully expressed side by side in the hybrid" },
                        { key: "d", text: "A third allele is responsible for the pink colour of the hybrid" }
                    ],
                    answer: "b",
                    explanation: "This is <strong>incomplete dominance</strong>: one dose of the red allele makes too little pigment to give full colour, so the heterozygote is pink. Crucially the alleles do <em>not</em> blend — pure red and pure white reappear in the $\\mathrm{F_2}$, disproving the old blending theory. Because the heterozygote is recognisable, phenotypic and genotypic ratios are both 1 : 2 : 1."
                },
                {
                    id: "d24b120",
                    text: "The AB blood group of man and the roan coat of Shorthorn cattle both illustrate codominance, which differs from incomplete dominance in that:",
                    options: [
                        { key: "a", text: "The heterozygote shows a phenotype intermediate between the two" },
                        { key: "b", text: "Only the dominant allele is expressed in the heterozygote" },
                        { key: "c", text: "Both alleles express their own products fully and independently" },
                        { key: "d", text: "The $\\mathrm{F_2}$ ratio becomes 3 : 1 instead of 1 : 2 : 1" }
                    ],
                    answer: "c",
                    explanation: "In <strong>codominance</strong> the heterozygote is not a blend but shows <em>both</em> phenotypes together — group AB cells carry <strong>both antigen A and antigen B</strong>, and a roan coat has red hairs and white hairs side by side. In incomplete dominance the heterozygote is genuinely intermediate. Both give a 1 : 2 : 1 phenotypic ratio in the $\\mathrm{F_2}$."
                },
                {
                    id: "d24b121",
                    text: "The ABO blood groups are an example of multiple allelism. The essential feature of multiple alleles is that:",
                    options: [
                        { key: "a", text: "More than two alleles exist in the population but only two in an individual" },
                        { key: "b", text: "One individual carries three or more alleles of the same gene at one locus" },
                        { key: "c", text: "The alleles are situated at the same locus on three different chromosomes" },
                        { key: "d", text: "Each of the alleles controls an entirely different character of the organism" }
                    ],
                    answer: "a",
                    explanation: "Multiple alleles arise by repeated mutation of one gene, so the <strong>population</strong> may contain many alternatives ($\\mathrm{I^A, I^B, i}$) although any diploid <strong>individual</strong> can carry only <strong>two</strong>, one on each homologue. They always occupy the same locus and affect the same character; other examples are coat colour in rabbits and self-incompatibility in plants."
                },
                {
                    id: "d24b122",
                    text: "A back cross and a test cross differ in that every test cross is a cross with the:",
                    options: [
                        { key: "a", text: "Homozygous dominant parent, whatever the genotype under test" },
                        { key: "b", text: "$\\mathrm{F_1}$ hybrid itself, to reveal its own segregation" },
                        { key: "c", text: "Homozygous recessive parent, so gametes are directly revealed" },
                        { key: "d", text: "Any unrelated individual of the same species chosen at random" }
                    ],
                    answer: "c",
                    explanation: "A <strong>back cross</strong> is any cross of an offspring with <em>either</em> parent; a <strong>test cross</strong> is specifically a cross with the <strong>homozygous recessive</strong>. Because the recessive parent contributes only recessive alleles, the offspring phenotypes are a direct read-out of the gametes formed by the individual being tested. Every test cross is a back cross only when that recessive is itself the parent."
                },
                {
                    id: "d24b123",
                    text: "Morgan's experiments with <em>Drosophila</em> showed that certain characters do not assort independently. He explained this by proposing that the genes concerned:",
                    options: [
                        { key: "a", text: "Lie on the same chromosome and so tend to be inherited together" },
                        { key: "b", text: "Are alleles of one another occupying the same locus" },
                        { key: "c", text: "Undergo mutation at a much higher rate than other genes" },
                        { key: "d", text: "Are present only in the male and never in the female fly" }
                    ],
                    answer: "a",
                    explanation: "Genes on one chromosome form a <strong>linkage group</strong> and travel together into the same gamete, so parental combinations greatly exceed recombinants and the dihybrid test-cross ratio departs from 1 : 1 : 1 : 1. The number of linkage groups equals the haploid chromosome number — four in <em>Drosophila</em>, seven in the garden pea, 23 in man."
                },
                {
                    id: "d24b124",
                    text: "Complete and incomplete linkage differ in that with incomplete linkage the test-cross offspring include:",
                    options: [
                        { key: "a", text: "Only the two parental types, and these in approximately equal numbers" },
                        { key: "b", text: "All four possible types in the classical Mendelian ratio of 1 : 1 : 1 : 1" },
                        { key: "c", text: "Recombinant types only, the parental combinations being wholly absent" },
                        { key: "d", text: "Parental and recombinant types, the parentals being far more numerous" }
                    ],
                    answer: "d",
                    explanation: "In <strong>complete linkage</strong> — as in the male <em>Drosophila</em>, where crossing over does not occur — only parental combinations appear. With <strong>incomplete linkage</strong> crossing over separates the genes in a minority of meioses, so a small percentage of <strong>recombinants</strong> appears alongside the dominant parental classes. A 1 : 1 : 1 : 1 ratio means the genes are not linked at all."
                },
                {
                    id: "d24b125",
                    text: "In a test cross of a dihybrid, 1000 offspring include 80 recombinants. The distance between the two genes is:",
                    options: [
                        { key: "a", text: "80 map units" },
                        { key: "b", text: "0.8 map units" },
                        { key: "c", text: "8 map units" },
                        { key: "d", text: "92 map units" }
                    ],
                    answer: "c",
                    explanation: "Recombination frequency $= \\dfrac{80}{1000} \\times 100 = 8\\%$, and by Sturtevant's convention <strong>1 % recombination = 1 map unit (centimorgan)</strong>, so the genes lie <strong>8 map units</strong> apart. The frequency of crossing over is proportional to the distance between loci, which is what makes chromosome mapping possible; values above 50 % cannot be distinguished from independent assortment."
                },
                {
                    id: "d24b126",
                    text: "A woman who is a carrier for colour blindness marries a man with normal vision. Among their children one expects:",
                    options: [
                        { key: "a", text: "Half the daughters colour blind and all the sons normal" },
                        { key: "b", text: "Half the sons colour blind and all the daughters normal-sighted" },
                        { key: "c", text: "All the sons colour blind and all the daughters carriers" },
                        { key: "d", text: "All the children colour blind, since the mother is a carrier" }
                    ],
                    answer: "b",
                    explanation: "The cross is $\\mathrm{X^C X^c \\times X^C Y}$. Daughters receive $\\mathrm{X^C}$ from the father, so all are <em>phenotypically normal</em> though half are carriers. Sons receive their single X from the mother, so <strong>half of them are colour blind</strong>. This is why an X-linked recessive appears far more often in males, who are hemizygous and need only one copy."
                },
                {
                    id: "d24b127",
                    text: "The inheritance of white eye in <em>Drosophila</em> shows criss-cross inheritance, meaning that the character passes from:",
                    options: [
                        { key: "a", text: "Father to son and mother to daughter in every generation" },
                        { key: "b", text: "Father to all offspring irrespective of their sex" },
                        { key: "c", text: "Mother to son and father to daughter" },
                        { key: "d", text: "Mother to all offspring, being carried in the cytoplasm" }
                    ],
                    answer: "c",
                    explanation: "An X-linked gene passes from a father to <em>all</em> his daughters (his single X goes to every daughter) and from a mother to <em>half</em> her sons — the diagonal or <strong>criss-cross</strong> pattern. A white-eyed female crossed with a red-eyed male therefore gives red-eyed daughters and white-eyed sons. A father never transmits an X-linked gene to his son."
                },
                {
                    id: "d24b128",
                    text: "The deletion of a single base from the middle of a gene is usually far more damaging than the substitution of one base. This is because a deletion:",
                    options: [
                        { key: "a", text: "Shifts the reading frame, altering every codon downstream" },
                        { key: "b", text: "Changes only the one amino acid coded at that point" },
                        { key: "c", text: "Always converts the affected codon into a stop codon" },
                        { key: "d", text: "Prevents the gene from being transcribed into RNA at all" }
                    ],
                    answer: "a",
                    explanation: "Because the code is read in non-overlapping triplets from a fixed start, inserting or deleting a base that is not a multiple of three causes a <strong>frameshift</strong>, and every codon after that point is misread — usually producing a wholly wrong protein and a premature stop. A substitution is a <em>point mutation</em>, which may be silent, missense or nonsense."
                },
                {
                    id: "d24b129",
                    text: "Colchicine is widely used in plant breeding to produce polyploids because it:",
                    options: [
                        { key: "a", text: "Increases the rate of crossing over during prophase I of meiosis" },
                        { key: "b", text: "Prevents spindle formation, so the doubled chromosomes are not parted" },
                        { key: "c", text: "Induces point mutations at random throughout the whole genome" },
                        { key: "d", text: "Blocks DNA replication so that the S phase is skipped entirely" }
                    ],
                    answer: "b",
                    explanation: "Colchicine binds tubulin and stops the assembly of the spindle. The chromosomes duplicate in S phase but cannot be pulled apart, so the nucleus is restituted with <strong>twice the chromosome number</strong>. Autopolyploids so raised are often larger and more vigorous; allopolyploidy of this kind gave <em>Triticale</em> and, in nature, bread wheat and <em>Raphanobrassica</em>."
                },
                {
                    id: "d24b130",
                    text: "Which human genetic disorder is correctly matched with its chromosomal basis?",
                    options: [
                        { key: "a", text: "Turner's syndrome — an extra X chromosome, giving 47, XXY" },
                        { key: "b", text: "Klinefelter's syndrome — a single X with no partner, giving 45, X" },
                        { key: "c", text: "Down's syndrome — trisomy of chromosome 21, giving 47 chromosomes" },
                        { key: "d", text: "Edward's syndrome — trisomy of chromosome 21 in the female only" }
                    ],
                    answer: "c",
                    explanation: "<strong>Down's syndrome</strong> is <strong>trisomy 21</strong> (47 chromosomes), with a characteristic facial appearance, short stature and mental retardation, its risk rising with maternal age. <strong>Turner's</strong> is <strong>45, X</strong> (a sterile female) and <strong>Klinefelter's</strong> is <strong>47, XXY</strong> (a sterile male); <strong>Edward's</strong> is trisomy 18. Albinism and haemophilia are gene, not chromosomal, disorders."
                },
                {
                    id: "d24b131",
                    text: "The increase in length of a grass leaf after it has been grazed is possible because grasses retain a meristem at the leaf base. Such a meristem is classified as:",
                    options: [
                        { key: "a", text: "Apical, since it occupies the tip of the growing organ" },
                        { key: "b", text: "Lateral, since it lies parallel to the sides of the organ" },
                        { key: "c", text: "Intercalary, since it is cut off from the apex by mature tissue" },
                        { key: "d", text: "Secondary, since it arises only after growth has ceased" }
                    ],
                    answer: "c",
                    explanation: "By position, meristems are <strong>apical</strong> (root and shoot tips, giving primary growth in length), <strong>intercalary</strong> (at the base of leaves or above the nodes, as in grasses and <em>Equisetum</em>) and <strong>lateral</strong> (vascular cambium and cork cambium, giving secondary growth in girth). An intercalary meristem is a detached part of the apical meristem and is why a lawn recovers after mowing."
                },
                {
                    id: "d24b132",
                    text: "Collenchyma provides mechanical support to a young stem yet does not hinder its elongation. This is because collenchyma cells are:",
                    options: [
                        { key: "a", text: "Living, with unevenly thickened non-lignified cellulose walls" },
                        { key: "b", text: "Dead, with uniformly lignified walls and no protoplast" },
                        { key: "c", text: "Living, with thin walls and very large intercellular spaces" },
                        { key: "d", text: "Dead, with thin walls but very heavily impregnated with suberin" }
                    ],
                    answer: "a",
                    explanation: "Collenchyma is the only mechanical tissue that is <strong>living and still extensible</strong>: its walls are thickened with cellulose and pectin at the corners (angular type) and are never lignified, so the tissue gives tensile strength to petioles and young stems while still able to stretch. Sclerenchyma, being dead and lignified, gives rigidity to organs that have finished growing."
                },
                {
                    id: "d24b133",
                    text: "The grittiness of a pear fruit and the hardness of a coconut shell are both due to sclereids. Sclereids differ from fibres in being:",
                    options: [
                        { key: "a", text: "Long and needle-shaped with tapering interlocking ends" },
                        { key: "b", text: "Short and isodiametric or irregular, with a very narrow lumen" },
                        { key: "c", text: "Living cells with a thin wall and a prominent nucleus" },
                        { key: "d", text: "Elongated cells that also conduct water through their lumen" }
                    ],
                    answer: "b",
                    explanation: "Both are sclerenchyma — dead, thick-walled, lignified cells with a much-reduced lumen and simple pits. <strong>Fibres</strong> are long and pointed and are the source of jute, flax and hemp; <strong>sclereids (stone cells)</strong> are short, variously shaped and occur in the pulp of pear and guava, in seed coats and in the endocarp of drupes. Neither conducts water."
                },
                {
                    id: "d24b134",
                    text: "Xylem is described as a complex tissue. Of its four elements, the only one that is living at maturity is the:",
                    options: [
                        { key: "a", text: "Tracheid, which conducts water through bordered pits" },
                        { key: "b", text: "Vessel, formed from a row of cells with dissolved end walls" },
                        { key: "c", text: "Xylem parenchyma, which stores food and stores water" },
                        { key: "d", text: "Xylem fibre, which provides mechanical strength" }
                    ],
                    answer: "c",
                    explanation: "Tracheids, vessels and xylem fibres are all <strong>dead and lignified</strong> at maturity — an essential condition, since the water column must move through an empty lumen under tension. Only the <strong>xylem parenchyma</strong> remains living; it stores starch and fat, and its lateral projections into the vessels form tyloses. Vessels are absent from most gymnosperms."
                },
                {
                    id: "d24b135",
                    text: "A sieve tube element has no nucleus at maturity yet remains alive and carries out active loading of sugars. This is possible because it:",
                    options: [
                        { key: "a", text: "Regenerates a nucleus each season from its own cytoplasm" },
                        { key: "b", text: "Draws finished enzymes directly from the adjacent xylem vessels" },
                        { key: "c", text: "Needs no protein at all once the sieve plate has been formed" },
                        { key: "d", text: "Is controlled by its companion cell through the plasmodesmata" }
                    ],
                    answer: "d",
                    explanation: "The sieve tube element and its <strong>companion cell</strong> arise from one mother cell and stay connected by abundant plasmodesmata. The companion cell keeps its nucleus and dense cytoplasm and supplies the ATP and proteins that the enucleate sieve element needs, besides driving the active loading of sucrose. Phloem also contains phloem parenchyma and phloem fibres (bast)."
                },
                {
                    id: "d24b136",
                    text: "In a dicot stem the protoxylem lies towards the centre and the metaxylem towards the periphery. Such xylem is described as:",
                    options: [
                        { key: "a", text: "Exarch, the condition typical of roots" },
                        { key: "b", text: "Mesarch, with protoxylem in the middle of the strand" },
                        { key: "c", text: "Endarch, the condition typical of stems" },
                        { key: "d", text: "Centrarch, with a single central protoxylem element" }
                    ],
                    answer: "c",
                    explanation: "The terms describe where the <em>first-formed</em> xylem lies. In stems maturation proceeds outward from the centre, so protoxylem is innermost — <strong>endarch</strong>. In roots it proceeds inward from the periphery, so protoxylem lies outermost — <strong>exarch</strong>. This single character is one of the quickest ways to tell a root section from a stem section."
                },
                {
                    id: "d24b137",
                    text: "A vascular bundle in which the phloem completely surrounds a central core of xylem is termed:",
                    options: [
                        { key: "a", text: "Radial, as in the root of a dicotyledon" },
                        { key: "b", text: "Concentric amphivasal, as in <em>Dracaena</em>" },
                        { key: "c", text: "Bicollateral, as in the family Cucurbitaceae" },
                        { key: "d", text: "Concentric amphicribral, as in many ferns" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>concentric</strong> bundle one tissue encircles the other: <strong>amphicribral</strong> (phloem outside, xylem inside — 'cribrum' = sieve) as in ferns, and <strong>amphivasal</strong> (xylem outside, phloem inside) as in <em>Dracaena</em> and <em>Yucca</em>. <strong>Collateral</strong> bundles have xylem and phloem on the same radius, <strong>bicollateral</strong> have phloem on both sides, and in a <strong>radial</strong> bundle the two lie on different radii."
                },
                {
                    id: "d24b138",
                    text: "Monocot stems cannot increase in girth by normal secondary growth because their vascular bundles are:",
                    options: [
                        { key: "a", text: "Open, with a strip of cambium between xylem and phloem" },
                        { key: "b", text: "Closed, no cambium being left between xylem and phloem" },
                        { key: "c", text: "Radial, with xylem and phloem on separate radii" },
                        { key: "d", text: "Bicollateral, with two separate strips of phloem" }
                    ],
                    answer: "b",
                    explanation: "In a <strong>closed</strong> bundle all the procambium is used up in making primary xylem and phloem, so no cambium survives and no secondary tissue can be added — hence the columnar, unbranched trunk of a palm. Dicot bundles are <strong>open</strong>, retaining a fascicular cambium that later joins with interfascicular cambium to form a complete ring."
                },
                {
                    id: "d24b139",
                    text: "A transverse section of a young dicot root is most reliably identified by the presence of:",
                    options: [
                        { key: "a", text: "Scattered closed bundles embedded in ground tissue" },
                        { key: "b", text: "A ring of open collateral bundles with endarch xylem" },
                        { key: "c", text: "Radial bundles, exarch xylem, usually two to four in number" },
                        { key: "d", text: "Bicollateral bundles with a large central pith" }
                    ],
                    answer: "c",
                    explanation: "In a root the xylem and phloem strands alternate on different radii — a <strong>radial</strong> arrangement — and the xylem is <strong>exarch</strong>. A dicot root is usually di-, tri- or tetrarch (2–4 xylem strands) with little or no pith, and it possesses a distinct <strong>pericycle</strong> from which lateral roots arise endogenously, and an endodermis with Casparian strips."
                },
                {
                    id: "d24b140",
                    text: "A monocot root differs from a dicot root chiefly in that the monocot root has:",
                    options: [
                        { key: "a", text: "Polyarch xylem and a large well-developed pith" },
                        { key: "b", text: "Only two xylem strands and no pith at all" },
                        { key: "c", text: "Endarch xylem and a ring of collateral bundles" },
                        { key: "d", text: "A vascular cambium producing annual rings of wood" }
                    ],
                    answer: "a",
                    explanation: "A monocot root has many xylem strands — typically more than six, hence <strong>polyarch</strong> — arranged around a <strong>large parenchymatous pith</strong>; a dicot root is 2–4 arch with little pith. Both are radial and exarch, and neither has secondary growth in the monocot, since no cambium is formed between the xylem and the phloem."
                },
                {
                    id: "d24b141",
                    text: "The 'scattered' appearance of the bundles in a monocot stem is accompanied by another distinctive feature, namely that each bundle is:",
                    options: [
                        { key: "a", text: "Surrounded by a sclerenchymatous sheath, often with a lysigenous cavity" },
                        { key: "b", text: "Enclosed by a ring of chlorenchyma that carries out photosynthesis" },
                        { key: "c", text: "Provided with a strip of vascular cambium on its outer face only" },
                        { key: "d", text: "Attached directly to the epidermis by a strand of collenchyma tissue" }
                    ],
                    answer: "a",
                    explanation: "In a maize stem each conjoint, collateral and <strong>closed</strong> bundle is wrapped in a sheath of <strong>sclerenchyma</strong>, and in the protoxylem region a <strong>lysigenous cavity</strong> is formed by the breakdown of the earliest elements — giving the classic 'skull and cross-bones' appearance under the microscope. There is no distinction into cortex, pericycle, pith and medullary rays."
                },
                {
                    id: "d24b142",
                    text: "The endodermis of a root forces all water entering the stele to pass through the living protoplast of its cells. This is achieved by the:",
                    options: [
                        { key: "a", text: "Suberised Casparian strips on the radial and transverse walls" },
                        { key: "b", text: "Complete lignification of every wall of the endodermal cells" },
                        { key: "c", text: "Absence of any plasmodesmata between endodermal cells" },
                        { key: "d", text: "Thick cuticle laid down over the inner tangential wall" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Casparian strip</strong> is a band of suberin and lignin on the radial and transverse walls that is impermeable to water, so the apoplast pathway is blocked at that point and water and solutes must cross the <strong>selectively permeable plasma membrane</strong>. This gives the root control over what enters the xylem and helps generate root pressure. Passage cells opposite the protoxylem stay unthickened."
                },
                {
                    id: "d24b143",
                    text: "A dorsiventral (dicot) leaf is distinguished in section from an isobilateral (monocot) leaf by having:",
                    options: [
                        { key: "a", text: "Spongy tissue on both sides and stomata equally on both surfaces" },
                        { key: "b", text: "Palisade tissue only below the lower epidermis" },
                        { key: "c", text: "Undifferentiated mesophyll with no chloroplasts at all" },
                        { key: "d", text: "Palisade tissue below the upper epidermis and spongy tissue above the lower" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>dorsiventral</strong> leaf the two surfaces are unlike: closely packed chloroplast-rich <strong>palisade</strong> cells lie beneath the upper epidermis for maximum light capture, loose <strong>spongy</strong> tissue with large air spaces beneath for gas exchange, and stomata are mainly on the lower surface. An <strong>isobilateral</strong> leaf, held more or less vertically, has similar mesophyll and equal stomata on both faces."
                },
                {
                    id: "d24b144",
                    text: "The large, thin-walled bulliform cells of a grass leaf are believed to help the plant survive drought by:",
                    options: [
                        { key: "a", text: "Storing food reserves that are used when growth stops" },
                        { key: "b", text: "Losing turgor so that the leaf rolls inward and cuts transpiration" },
                        { key: "c", text: "Secreting a waxy cuticle over the whole upper surface" },
                        { key: "d", text: "Closing the stomata by pressing directly on the guard cells" }
                    ],
                    answer: "b",
                    explanation: "<strong>Bulliform (motor) cells</strong> lie in groups in the upper epidermis of many grasses. When water is short they lose turgor and shrink, so the leaf <strong>rolls or folds inwards</strong>, enclosing the stomata in a humid chamber and greatly reducing transpiration; on rewatering they swell and the leaf unrolls. It is a classic reversible xeromorphic adaptation."
                },
                {
                    id: "d24b145",
                    text: "The guard cells of a stoma differ from the other epidermal cells in that guard cells:",
                    options: [
                        { key: "a", text: "Contain chloroplasts and have an unevenly thickened wall" },
                        { key: "b", text: "Are dead at maturity and lack any cell contents" },
                        { key: "c", text: "Have a uniformly thick wall and no chloroplasts at all" },
                        { key: "d", text: "Are covered by a much thicker cuticle than their neighbours" }
                    ],
                    answer: "a",
                    explanation: "Guard cells are the <em>only</em> epidermal cells with <strong>chloroplasts</strong>, and their inner wall next to the pore is <strong>thicker and less elastic</strong> than the outer. When they take up potassium and water and become turgid, the thin outer wall stretches more, the cells bow apart and the pore opens; loss of turgor closes it. Grass guard cells are dumb-bell shaped rather than bean shaped."
                }/* __U6__ */
            ]
        },
        {
            id: "physapp24",
            name: "Physiology, Development & Applied Botany",
            subject: "Botany",
            accent: "blue",
            blurb: "Q146–200 · water relations, transpiration and ascent of sap, photosynthesis, respiration and growth regulators; sporogenesis, pollination, fertilisation, embryo and endosperm; tissue culture, genetic engineering, biofertilizers and plant breeding.",
            questions: [
                {
                    id: "d24b146",
                    text: "Diffusion pressure deficit of a cell is best defined as the:",
                    options: [
                        { key: "a", text: "Amount by which the diffusion pressure of its water falls short of pure water" },
                        { key: "b", text: "Pressure exerted by the cell wall against the swelling protoplast within" },
                        { key: "c", text: "Total pressure with which the dissolved solutes attract water into the cell" },
                        { key: "d", text: "Pressure that must be applied to stop osmosis across the membrane entirely" }
                    ],
                    answer: "a",
                    explanation: "Adding a solute lowers the diffusion pressure of water, and the shortfall compared with pure water is the <strong>DPD</strong> — also called suction pressure, since it measures the cell's ability to absorb water. For a cell, $\\mathrm{DPD = OP - TP}$; a fully turgid cell has $\\mathrm{OP = TP}$, so its DPD is zero and it can absorb no more."
                },
                {
                    id: "d24b147",
                    text: "In modern terminology water potential replaces DPD. For pure water at atmospheric pressure the water potential is:",
                    options: [
                        { key: "a", text: "Always positive and equal to its osmotic pressure" },
                        { key: "b", text: "Zero, and any solution therefore has a negative value" },
                        { key: "c", text: "Zero, and any solution therefore has a positive value" },
                        { key: "d", text: "Negative, becoming less negative as solute is added" }
                    ],
                    answer: "b",
                    explanation: "By convention $\\Psi_w$ of pure water is taken as <strong>zero</strong>; dissolving anything lowers it, so every solution has a <strong>negative</strong> water potential, and water always moves from a higher (less negative) to a lower (more negative) potential. In a cell $\\Psi_w = \\Psi_s + \\Psi_p$ — the solute potential (negative) plus the pressure potential (usually positive from turgor)."
                },
                {
                    id: "d24b148",
                    text: "A plant cell placed in a strong sugar solution shows its protoplast shrinking away from the wall. The stage at which the protoplast has just begun to pull away is:",
                    options: [
                        { key: "a", text: "Deplasmolysis, which is reversed by adding more solute" },
                        { key: "b", text: "Full turgor, at which the wall pressure is at its greatest" },
                        { key: "c", text: "Incipient plasmolysis, at which turgor pressure has become zero" },
                        { key: "d", text: "Permanent wilting, from which no recovery is possible" }
                    ],
                    answer: "c",
                    explanation: "At <strong>incipient plasmolysis</strong> the protoplast just ceases to press on the wall, so <strong>turgor pressure = 0</strong> and $\\mathrm{DPD = OP}$; the external solution then has the same osmotic concentration as the cell sap, which is how the osmotic pressure of a cell is measured. Returning the cell to water reverses the process — <strong>deplasmolysis</strong> — provided the damage is not too severe."
                },
                {
                    id: "d24b149",
                    text: "Dry pea seeds placed in water swell with such force that they can crack an earthenware pot. This absorption of water is:",
                    options: [
                        { key: "a", text: "Osmosis, requiring a semipermeable membrane and a solute gradient" },
                        { key: "b", text: "Active transport, driven by ATP produced in the seed" },
                        { key: "c", text: "Plasmolysis, caused by the loss of water from the cells" },
                        { key: "d", text: "Imbibition, adsorption of water by hydrophilic colloids" }
                    ],
                    answer: "d",
                    explanation: "<strong>Imbibition</strong> is the adsorption of water by hydrophilic colloids such as cellulose, starch and protein; it needs a water-potential gradient and an affinity between imbibant and liquid, but <em>no semipermeable membrane</em>. The imbibition pressure developed can exceed a hundred atmospheres — the force that splits seed coats, and which was used to quarry stone with dry wooden wedges."
                },
                {
                    id: "d24b150",
                    text: "In a series of cells conducting water from the soil towards the xylem, the DPD of successive cells must be:",
                    options: [
                        { key: "a", text: "Zero in every cell, since all are fully turgid" },
                        { key: "b", text: "Progressively smaller as one moves inward towards the xylem" },
                        { key: "c", text: "The same in every cell so that flow is uniform" },
                        { key: "d", text: "Progressively greater as one moves inward towards the xylem" }
                    ],
                    answer: "d",
                    explanation: "Water moves from a cell of lower DPD (higher water potential) to one of higher DPD, so a <strong>rising gradient of DPD</strong> must exist from the root hair inwards for the flow to continue. Transpiration keeps the DPD of the leaf cells and hence of the whole chain high, which is why the pull is ultimately generated at the leaf surface."
                },
                {
                    id: "d24b151",
                    text: "Of the total water transpired by a typical mesophytic plant, the largest share escapes through the:",
                    options: [
                        { key: "a", text: "Cuticle, which covers the whole of the epidermis" },
                        { key: "b", text: "Lenticels of the stem, which are permanently open" },
                        { key: "c", text: "Stomata, which are chiefly on the lower leaf surface" },
                        { key: "d", text: "Hydathodes at the tips of the leaf veins" }
                    ],
                    answer: "c",
                    explanation: "<strong>Stomatal transpiration</strong> accounts for about <strong>90 %</strong> of the total, cuticular for most of the rest and lenticular for well under one per cent. Because the pore can be closed, this is also the only component the plant controls. Hydathodes are not transpiration structures at all — they exude <em>liquid</em> water in guttation."
                },
                {
                    id: "d24b152",
                    text: "Guttation is distinguished from transpiration in that guttation:",
                    options: [
                        { key: "a", text: "Occurs through the stomata during the hottest part of the day" },
                        { key: "b", text: "Releases pure water vapour and cools the leaf as it evaporates" },
                        { key: "c", text: "Exudes liquid water containing salts, through hydathodes, at night" },
                        { key: "d", text: "Takes place only in xerophytes growing in very dry soils" }
                    ],
                    answer: "c",
                    explanation: "On a warm, humid night absorption continues but transpiration nearly stops, so <strong>root pressure</strong> forces water out as droplets through the <strong>hydathodes</strong> at the vein endings of the leaf margin. Because it is liquid xylem sap, guttation water carries dissolved salts and organic matter and leaves a crust on drying, unlike the pure vapour of transpiration."
                },
                {
                    id: "d24b153",
                    text: "The cohesion–tension theory of Dixon and Joly explains the ascent of sap in a tall tree. The pull that lifts the column is generated by:",
                    options: [
                        { key: "a", text: "Root pressure developed by the active secretion of salts into the xylem" },
                        { key: "b", text: "Capillarity within the very narrow lumen of the vessels" },
                        { key: "c", text: "Rhythmic pulsations of the living cells of the pericycle" },
                        { key: "d", text: "Evaporation of water from the mesophyll cell walls in the leaf" }
                    ],
                    answer: "d",
                    explanation: "<strong>Transpiration pull</strong> arises as water evaporates from the wet mesophyll walls, creating a strong negative pressure that is transmitted right down to the roots because water molecules cling to one another (<strong>cohesion</strong>, aided by hydrogen bonding) and to the vessel walls (<strong>adhesion</strong>). Root pressure is too small and too intermittent to raise sap in a 100-metre tree, and capillarity would lift it barely a metre."
                },
                {
                    id: "d24b154",
                    text: "Increasing the humidity of the air around a plant reduces its transpiration because humidity:",
                    options: [
                        { key: "a", text: "Physically blocks the stomatal pores with condensed water" },
                        { key: "b", text: "Lowers the vapour-pressure gradient between leaf and air" },
                        { key: "c", text: "Reduces the temperature of the leaf below that of the air" },
                        { key: "d", text: "Increases the wind speed over the surface of the leaf" }
                    ],
                    answer: "b",
                    explanation: "Transpiration is evaporation, so its rate depends on the <strong>difference in water-vapour concentration between the sub-stomatal cavity (almost saturated) and the outside air</strong>. High humidity flattens that gradient and slows the loss. Wind, high temperature, bright light and low humidity all accelerate it, while a fall in soil water closes the stomata and reduces it."
                },
                {
                    id: "d24b155",
                    text: "Stomata open when the guard cells become turgid. The opening is initiated in the light by:",
                    options: [
                        { key: "a", text: "The active accumulation of potassium ions in the guard cells" },
                        { key: "b", text: "The conversion of sugars into starch inside the guard cells" },
                        { key: "c", text: "A rise in the carbon dioxide concentration of the leaf air spaces" },
                        { key: "d", text: "The release of abscisic acid by the neighbouring subsidiary cells" }
                    ],
                    answer: "a",
                    explanation: "In light, protons are pumped out of the guard cells and <strong>$\\mathrm{K^+}$ is taken in</strong> with malate and chloride; the solute potential falls, water follows osmotically and the turgid cells bow apart. Darkness, a high internal $\\mathrm{CO_2}$ and above all <strong>abscisic acid</strong> released under water stress reverse the process and close the pore."
                },
                {
                    id: "d24b156",
                    text: "Temporary and permanent wilting differ in that a permanently wilted plant:",
                    options: [
                        { key: "a", text: "Recovers as soon as the sun goes down in the evening" },
                        { key: "b", text: "Does not recover even when water is added to the soil" },
                        { key: "c", text: "Has lost water only from its leaves and not from its stem" },
                        { key: "d", text: "Shows closed stomata but a completely turgid mesophyll" }
                    ],
                    answer: "b",
                    explanation: "<strong>Temporary (incipient) wilting</strong> occurs at midday when loss outstrips absorption, and the plant recovers in the evening. <strong>Permanent wilting</strong> means the soil water has fallen to the <em>permanent wilting point</em>, where the remaining water is held so tightly that roots cannot extract it, so the plant cannot recover <em>unless</em> water is supplied — and if prolonged it dies."
                },
                {
                    id: "d24b157",
                    text: "Root pressure can be demonstrated by cutting a well-watered plant near the ground and fitting a manometer to the stump. Its main physiological significance is that it:",
                    options: [
                        { key: "a", text: "Provides the entire force needed to raise sap in the tallest trees" },
                        { key: "b", text: "Prevents the stomata from opening during the night hours" },
                        { key: "c", text: "Drives the loading of sucrose into the phloem sieve tubes" },
                        { key: "d", text: "Re-establishes the continuity of water columns broken by cavitation" }
                    ],
                    answer: "d",
                    explanation: "Root pressure is generated by the <strong>active secretion of salts into the xylem</strong>, which draws water in osmotically, but it rarely exceeds 1–2 atmospheres — enough for a small herb, not for a tall tree. Its chief value is in restoring water columns that have been <strong>broken by air bubbles (cavitation)</strong>, especially in spring before the leaves expand. Guttation is its most visible effect."
                },
                {
                    id: "d24b158",
                    text: "Ruben and Kamen supplied plants with water labelled with $^{18}\\mathrm{O}$ and found the label in the oxygen evolved. This proved that:",
                    options: [
                        { key: "a", text: "The oxygen released in photosynthesis comes from carbon dioxide" },
                        { key: "b", text: "The oxygen released in photosynthesis comes from water" },
                        { key: "c", text: "Carbon dioxide is reduced directly to carbohydrate by light" },
                        { key: "d", text: "Water is the source of the carbon skeleton of the sugar" }
                    ],
                    answer: "b",
                    explanation: "The classical equation is better written $6\\mathrm{CO_2} + 12\\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_{12}O_6} + 6\\mathrm{H_2O} + 6\\mathrm{O_2}$, twelve molecules of water being <strong>photolysed</strong> to supply the electrons, protons and the oxygen released. The isotope experiment confirmed van Niel's prediction from the sulphur bacteria, which use $\\mathrm{H_2S}$ and liberate sulphur instead of oxygen."
                },
                {
                    id: "d24b159",
                    text: "Of the several photosynthetic pigments, only one can convert light energy into chemical energy; the rest merely gather light and pass it on. That pigment is:",
                    options: [
                        { key: "a", text: "Chlorophyll b, which absorbs strongly in the blue region" },
                        { key: "b", text: "Xanthophyll, which also protects against photo-oxidation" },
                        { key: "c", text: "Chlorophyll a of the reaction centre" },
                        { key: "d", text: "Carotene, which absorbs the light chlorophyll cannot" }
                    ],
                    answer: "c",
                    explanation: "Chlorophyll b, the carotenes and the xanthophylls are <strong>accessory pigments</strong>: they widen the range of wavelengths harvested and hand the energy on by resonance to the <strong>reaction-centre chlorophyll a</strong>, which alone releases an electron and starts the photochemistry. This is why chlorophyll a is the universal pigment of all oxygenic photosynthesisers."
                },
                {
                    id: "d24b160",
                    text: "In the Z-scheme of the light reaction, the photosystem that carries out the photolysis of water is:",
                    options: [
                        { key: "a", text: "Photosystem II, whose reaction centre is $\\mathrm{P_{680}}$" },
                        { key: "b", text: "Photosystem I, whose reaction centre is $\\mathrm{P_{700}}$" },
                        { key: "c", text: "Photosystem I, whose reaction centre is $\\mathrm{P_{680}}$" },
                        { key: "d", text: "Both photosystems acting alternately on the same molecule" }
                    ],
                    answer: "a",
                    explanation: "<strong>Photosystem II ($\\mathrm{P_{680}}$)</strong> contains the manganese-bearing oxygen-evolving complex that splits water, replacing the electron it has lost and releasing $\\mathrm{O_2}$ and protons. The electron travels down the chain to <strong>photosystem I ($\\mathrm{P_{700}}$)</strong>, which re-energises it for the reduction of $\\mathrm{NADP^+}$. Despite the names, PS II acts first."
                },
                {
                    id: "d24b161",
                    text: "Cyclic photophosphorylation differs from the non-cyclic pathway in that the cyclic pathway:",
                    options: [
                        { key: "a", text: "Produces ATP only, with no NADPH and no oxygen released" },
                        { key: "b", text: "Produces ATP, NADPH and oxygen in equal proportions" },
                        { key: "c", text: "Involves only photosystem II and splits water for electrons" },
                        { key: "d", text: "Occurs in the stroma rather than on the thylakoid membrane" }
                    ],
                    answer: "a",
                    explanation: "In the cyclic path the electron ejected by <strong>PS I alone</strong> returns to $\\mathrm{P_{700}}$ through the carriers, so there is no net reduction of $\\mathrm{NADP^+}$, no need to split water and therefore <strong>no oxygen and no NADPH — only ATP</strong>. It operates when the chloroplast needs extra ATP for the Calvin cycle, and it is the only path available to the photosynthetic bacteria."
                },
                {
                    id: "d24b162",
                    text: "In the Calvin cycle, carbon dioxide is accepted by ribulose bisphosphate and the first stable product formed is:",
                    options: [
                        { key: "a", text: "Oxaloacetic acid, a four-carbon compound" },
                        { key: "b", text: "A six-carbon sugar that at once splits into two hexoses" },
                        { key: "c", text: "3-phosphoglyceric acid, a three-carbon compound" },
                        { key: "d", text: "Phosphoenol pyruvate, a three-carbon compound" }
                    ],
                    answer: "c",
                    explanation: "RuBisCO adds $\\mathrm{CO_2}$ to the 5-carbon RuBP to give an unstable 6-carbon intermediate that immediately splits into two molecules of the 3-carbon <strong>3-PGA</strong> — hence the name <strong>$\\mathrm{C_3}$ cycle</strong>. Reduction to triose phosphate consumes ATP and NADPH, and the remainder of the cycle regenerates RuBP. Fixing six $\\mathrm{CO_2}$ needs 18 ATP and 12 NADPH."
                },
                {
                    id: "d24b163",
                    text: "In a $\\mathrm{C_4}$ plant such as maize or sugarcane, the initial fixation of $\\mathrm{CO_2}$ and the Calvin cycle occur in different cells. This division of labour is made possible by:",
                    options: [
                        { key: "a", text: "Kranz anatomy, with chloroplast-rich bundle sheath cells" },
                        { key: "b", text: "The absence of chloroplasts from the mesophyll cells" },
                        { key: "c", text: "The presence of stomata on both surfaces of the leaf" },
                        { key: "d", text: "A specially thick cuticle over the whole of the leaf" }
                    ],
                    answer: "a",
                    explanation: "In <strong>Kranz ('wreath') anatomy</strong> a ring of large <strong>bundle sheath</strong> cells with thick walls and agranal chloroplasts surrounds each vein. <strong>PEP carboxylase</strong> in the mesophyll fixes $\\mathrm{CO_2}$ into the 4-carbon oxaloacetate; this is shuttled into the sheath and decarboxylated, so $\\mathrm{CO_2}$ is concentrated around RuBisCO — which is why $\\mathrm{C_4}$ plants show no photorespiration and thrive in hot, bright climates."
                },
                {
                    id: "d24b164",
                    text: "Photorespiration is described as a wasteful process. It occurs because the enzyme RuBisCO:",
                    options: [
                        { key: "a", text: "Is destroyed by the high light intensity of the summer noon" },
                        { key: "b", text: "Can accept oxygen instead of carbon dioxide when $\\mathrm{O_2}$ is high" },
                        { key: "c", text: "Requires oxygen as an essential cofactor for carboxylation" },
                        { key: "d", text: "Works only at night, when the stomata are firmly closed" }
                    ],
                    answer: "b",
                    explanation: "RuBisCO is both a carboxylase and an <strong>oxygenase</strong>; when the stomata close on a hot dry day the internal $\\mathrm{CO_2}$ falls and $\\mathrm{O_2}$ rises, so RuBP is oxygenated to one 3-PGA and one 2-carbon phosphoglycollate. Salvaging that compound through the chloroplast, peroxisome and mitochondrion <strong>releases $\\mathrm{CO_2}$ and consumes ATP without producing any sugar</strong> — a loss of up to 25 % of the fixed carbon."
                },
                {
                    id: "d24b165",
                    text: "Blackman's law of limiting factors states that when a process is governed by several factors, its rate is set by:",
                    options: [
                        { key: "a", text: "The average value of all the factors taken together" },
                        { key: "b", text: "The factor that is present in the greatest quantity" },
                        { key: "c", text: "The factor that is nearest its minimum value" },
                        { key: "d", text: "The factor that fluctuates least during the day" }
                    ],
                    answer: "c",
                    explanation: "The rate is limited by the <strong>factor in shortest supply</strong>, and increasing any other factor produces no effect until the limiting one is raised. In photosynthesis, light is usually limiting in the early morning, $\\mathrm{CO_2}$ at midday in a closed greenhouse, and temperature in winter — which is why growers enrich glasshouse air with carbon dioxide."
                },
                {
                    id: "d24b166",
                    text: "Bacterial photosynthesis in the purple and green sulphur bacteria never releases oxygen. This is because these bacteria:",
                    options: [
                        { key: "a", text: "Use hydrogen sulphide, not water, as the hydrogen donor" },
                        { key: "b", text: "Possess chlorophyll a and split water in the usual way" },
                        { key: "c", text: "Fix carbon dioxide in the dark without any pigment at all" },
                        { key: "d", text: "Immediately consume all the oxygen they produce in respiration" }
                    ],
                    answer: "a",
                    explanation: "They contain <strong>bacteriochlorophyll</strong>, have only one photosystem and use $\\mathrm{H_2S}$, $\\mathrm{H_2}$ or organic compounds as the electron donor, so instead of oxygen they deposit <strong>elemental sulphur</strong>. Being anoxygenic and strictly anaerobic they are confined to sulphur springs and the mud of stagnant water; only cyanobacteria among prokaryotes evolve oxygen."
                },
                {
                    id: "d24b167",
                    text: "Glycolysis is common to aerobic and anaerobic respiration. Its site and its net ATP yield per molecule of glucose are:",
                    options: [
                        { key: "a", text: "The mitochondrial matrix, and a net gain of 8 ATP" },
                        { key: "b", text: "The cytoplasm, and a net gain of 2 ATP" },
                        { key: "c", text: "The inner mitochondrial membrane, and a net gain of 4 ATP" },
                        { key: "d", text: "The cytoplasm, and a net gain of 38 ATP" }
                    ],
                    answer: "b",
                    explanation: "The Embden–Meyerhof–Parnas pathway runs in the <strong>cytoplasm</strong> and needs no oxygen. Two ATP are invested in the preparatory phase and four are made by substrate-level phosphorylation, so the <strong>net gain is 2 ATP</strong>, together with 2 NADH and two molecules of pyruvate. Its universality among living things is taken as evidence of its very ancient origin."
                },
                {
                    id: "d24b168",
                    text: "The link reaction that joins glycolysis to the Krebs cycle converts pyruvate into:",
                    options: [
                        { key: "a", text: "Lactic acid, with the oxidation of one NADH" },
                        { key: "b", text: "Oxaloacetic acid, with the fixation of one $\\mathrm{CO_2}$" },
                        { key: "c", text: "Acetyl coenzyme A, releasing $\\mathrm{CO_2}$ and reducing $\\mathrm{NAD^+}$" },
                        { key: "d", text: "Ethanol and $\\mathrm{CO_2}$, with no reduction of $\\mathrm{NAD^+}$" }
                    ],
                    answer: "c",
                    explanation: "In the mitochondrial matrix the pyruvate dehydrogenase complex carries out an <strong>oxidative decarboxylation</strong>: pyruvate loses a carbon as $\\mathrm{CO_2}$, the remaining two-carbon acetyl group is joined to coenzyme A, and one $\\mathrm{NAD^+}$ is reduced. Per glucose this happens twice, so 2 $\\mathrm{CO_2}$ and 2 NADH are formed before the Krebs cycle even begins."
                },
                {
                    id: "d24b169",
                    text: "One turn of the Krebs cycle, starting from acetyl CoA, yields:",
                    options: [
                        { key: "a", text: "3 NADH, 2 $\\mathrm{FADH_2}$, 1 ATP and 4 $\\mathrm{CO_2}$" },
                        { key: "b", text: "2 NADH, 2 $\\mathrm{FADH_2}$, 2 ATP and 3 $\\mathrm{CO_2}$" },
                        { key: "c", text: "4 NADH, 1 $\\mathrm{FADH_2}$, 2 ATP and 1 $\\mathrm{CO_2}$" },
                        { key: "d", text: "3 NADH, 1 $\\mathrm{FADH_2}$, 1 ATP and 2 $\\mathrm{CO_2}$" }
                    ],
                    answer: "d",
                    explanation: "Acetyl CoA condenses with oxaloacetate to give citrate, and in one turn there are four oxidations and two decarboxylations, giving <strong>3 NADH, 1 $\\mathrm{FADH_2}$, 1 ATP (through GTP) and 2 $\\mathrm{CO_2}$</strong>, with oxaloacetate regenerated. Since one glucose gives two acetyl CoA, the cycle turns twice. It is also the hub where fat and protein catabolism enter."
                },
                {
                    id: "d24b170",
                    text: "In the electron transport system, ATP is synthesised by chemiosmosis. The immediate driving force for ATP synthase is:",
                    options: [
                        { key: "a", text: "The direct transfer of a phosphate group from a substrate" },
                        { key: "b", text: "The hydrolysis of NADH in the mitochondrial matrix" },
                        { key: "c", text: "The energy of the electrons as they reduce oxygen to water" },
                        { key: "d", text: "A proton gradient across the inner mitochondrial membrane" }
                    ],
                    answer: "d",
                    explanation: "As electrons pass from NADH and $\\mathrm{FADH_2}$ along the carriers, protons are pumped from the matrix into the inter-membrane space, creating an electrochemical gradient. Protons flowing back through the <strong>$\\mathrm{F_0-F_1}$ ATP synthase</strong> release the energy that makes ATP — Mitchell's <strong>chemiosmotic hypothesis</strong>. Oxygen is the terminal electron acceptor, forming water."
                },
                {
                    id: "d24b171",
                    text: "Anaerobic respiration in yeast releases far less energy than aerobic respiration of the same glucose because in fermentation:",
                    options: [
                        { key: "a", text: "Glucose is not broken down at all before ethanol is formed" },
                        { key: "b", text: "The glucose is only partly oxidised and ethanol still holds much energy" },
                        { key: "c", text: "The ATP produced in glycolysis is used up in making the ethanol" },
                        { key: "d", text: "All the energy is lost as heat during the decarboxylation step" }
                    ],
                    answer: "b",
                    explanation: "Fermentation stops at glycolysis and merely reoxidises NADH so that glycolysis can continue, giving a net <strong>2 ATP</strong> against about 36–38 from complete oxidation. The <strong>ethanol (or lactate) produced is still an energy-rich compound</strong> — which is why alcohol burns — so most of the glucose energy remains locked up and unused."
                },
                {
                    id: "d24b172",
                    text: "A germinating castor seed rich in stored fat shows a respiratory quotient distinctly below one. This is because the oxidation of fat:",
                    options: [
                        { key: "a", text: "Releases more $\\mathrm{CO_2}$ than the oxygen it consumes" },
                        { key: "b", text: "Consumes more oxygen than the $\\mathrm{CO_2}$ it releases" },
                        { key: "c", text: "Releases $\\mathrm{CO_2}$ and consumes oxygen in equal volumes" },
                        { key: "d", text: "Requires no oxygen at all in the germinating seed" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{RQ} = \\dfrac{\\text{volume of } \\mathrm{CO_2}\\text{ evolved}}{\\text{volume of } \\mathrm{O_2}\\text{ consumed}}$. Fats are highly reduced and poor in oxygen, so extra $\\mathrm{O_2}$ must be supplied and <strong>RQ is about 0.7</strong>. For carbohydrates RQ = 1, for organic acids it exceeds 1 (malic acid 1.33), and for pure anaerobic respiration it is infinite, no oxygen being used."
                },
                {
                    id: "d24b173",
                    text: "Removing the terminal bud of a plant makes the lateral buds sprout. The hormone responsible for suppressing them while the apex was intact is:",
                    options: [
                        { key: "a", text: "Auxin, moving downward from the apical bud" },
                        { key: "b", text: "Cytokinin, moving upward from the root apex" },
                        { key: "c", text: "Gibberellin, produced in the young expanding leaves" },
                        { key: "d", text: "Ethylene, released from the ripening fruits above" }
                    ],
                    answer: "a",
                    explanation: "<strong>Apical dominance</strong> is maintained by auxin (IAA) synthesised at the shoot tip and transported basipetally, which inhibits the growth of the lateral buds. Decapitation — or pruning and pinching in horticulture — removes the source and the laterals grow out, giving a bushy plant. Auxins also cause phototropic and geotropic curvature, root initiation in cuttings and parthenocarpy."
                },
                {
                    id: "d24b174",
                    text: "Which pairing of a growth promoter with its characteristic effect is correct?",
                    options: [
                        { key: "a", text: "Gibberellin — the induction of dormancy in buds and seeds" },
                        { key: "b", text: "Cytokinin — the elongation of the internodes causing bolting" },
                        { key: "c", text: "Gibberellin — bolting of rosette plants and induction of $\\alpha$-amylase" },
                        { key: "d", text: "Cytokinin — the abscission of leaves and the ripening of fruit" }
                    ],
                    answer: "c",
                    explanation: "<strong>Gibberellins</strong> cause dramatic internode elongation (bolting in cabbage and beet), break seed and bud dormancy, and in a germinating cereal induce the aleurone layer to make <strong>$\\alpha$-amylase</strong>. <strong>Cytokinins</strong> promote cell division, break apical dominance and famously <em>delay</em> senescence (the Richmond–Lang effect). Abscission and ripening are the work of abscisic acid and ethylene."
                },
                {
                    id: "d24b175",
                    text: "In hypogeal germination, as in the gram or the maize grain, the cotyledons stay below the soil. This is because the part that elongates is the:",
                    options: [
                        { key: "a", text: "Hypocotyl, which arches and pulls the cotyledons upward" },
                        { key: "b", text: "Coleorhiza, which forms a loop above the soil surface" },
                        { key: "c", text: "Radicle, which lifts the whole seed as it grows downward" },
                        { key: "d", text: "Epicotyl, so only the plumule is pushed above the ground" }
                    ],
                    answer: "d",
                    explanation: "In <strong>hypogeal</strong> germination the <strong>epicotyl</strong> (the region above the cotyledonary node) elongates, so the cotyledons remain underground while the plumule is carried up — gram, pea, maize. In <strong>epigeal</strong> germination the <strong>hypocotyl</strong> elongates as a hook and drags the cotyledons above the soil, where they turn green — bean, castor, sunflower."
                },
                {
                    id: "d24b176",
                    text: "A gardener multiplies a superior rose variety by cuttings rather than by seed. The chief advantage of this asexual method is that:",
                    options: [
                        { key: "a", text: "The offspring are genetically identical with the chosen parent" },
                        { key: "b", text: "The offspring show far greater genetic variation than the parent" },
                        { key: "c", text: "The plants so raised are certain to be free of every disease" },
                        { key: "d", text: "Each cutting produces a plant with twice the chromosome number" }
                    ],
                    answer: "a",
                    explanation: "Vegetative propagation involves only mitosis, so all the plants of a <strong>clone</strong> carry the parent's genotype and its desirable characters are preserved exactly — impossible with seed, where meiosis and fertilisation reshuffle the genes. It is also quicker and lets seedless varieties (banana, seedless grape) be multiplied. Its drawbacks are the absence of variation and the ready transmission of viruses."
                },
                {
                    id: "d24b177",
                    text: "In the anther wall the innermost layer surrounds and nourishes the developing microspores, and it degenerates as they mature. This layer is the:",
                    options: [
                        { key: "a", text: "Epidermis, which persists as the outer covering" },
                        { key: "b", text: "Endothecium, whose fibrous thickenings cause dehiscence" },
                        { key: "c", text: "Middle layers, which are ephemeral and short-lived" },
                        { key: "d", text: "Tapetum, whose cells are dense and often multinucleate" }
                    ],
                    answer: "d",
                    explanation: "The anther wall from outside in is <strong>epidermis, endothecium, two to three middle layers and tapetum</strong>. The <strong>tapetum</strong> has dense cytoplasm and often polyploid or multinucleate cells; it supplies nutrition, the enzymes and hormones of microsporogenesis, and the <em>sporopollenin</em> and pollenkitt of the exine. The fibrous endothecium is responsible for the anther splitting open."
                },
                {
                    id: "d24b178",
                    text: "The exine of a pollen grain is made of sporopollenin, one of the most resistant organic substances known. Its resistance explains why:",
                    options: [
                        { key: "a", text: "Pollen grains can germinate only on the stigma of the same flower" },
                        { key: "b", text: "Pollen grains are well preserved as fossils and used in palynology" },
                        { key: "c", text: "The pollen tube can emerge at any point on the grain's surface" },
                        { key: "d", text: "Pollen never causes any allergic reaction in human beings" }
                    ],
                    answer: "b",
                    explanation: "Sporopollenin resists high temperature, strong acids and alkalis and every known enzyme, so pollen walls survive for millions of years — the basis of <strong>palynology</strong>, used to reconstruct past vegetation and climates. The exine is interrupted at the <strong>germ pores</strong>, and it is only there that the tube can emerge; the inner <strong>intine</strong> is a thin wall of cellulose and pectin."
                },
                {
                    id: "d24b179",
                    text: "The typical angiosperm embryo sac at maturity is described as 8-nucleate but 7-celled. This is because:",
                    options: [
                        { key: "a", text: "One of the eight nuclei degenerates before the sac is mature" },
                        { key: "b", text: "The two polar nuclei lie together in a single large central cell" },
                        { key: "c", text: "The three antipodal cells share a single common nucleus" },
                        { key: "d", text: "The egg and one synergid are enclosed in one cell wall" }
                    ],
                    answer: "b",
                    explanation: "Three mitoses of the functional megaspore give eight nuclei; six are organised as the <strong>egg apparatus</strong> (one egg + two synergids) at the micropylar end and three <strong>antipodals</strong> at the chalazal end, while the remaining two — the <strong>polar nuclei</strong> — stay together in the large <strong>central cell</strong>. Seven cells, eight nuclei: the <em>Polygonum</em> type, found in over 80 % of angiosperms."
                },
                {
                    id: "d24b180",
                    text: "The pollen tube is guided into the embryo sac and discharges its contents into one of the synergids. The structure that attracts and receives it is the:",
                    options: [
                        { key: "a", text: "Filiform apparatus of the synergid, at the micropylar end" },
                        { key: "b", text: "Chalazal end of the antipodal cells" },
                        { key: "c", text: "Nucellus, which digests the tip of the pollen tube" },
                        { key: "d", text: "Central cell, whose polar nuclei secrete the attractant" }
                    ],
                    answer: "a",
                    explanation: "Each synergid bears a mass of finger-like wall ingrowths, the <strong>filiform apparatus</strong>, which secretes chemotropic substances that guide the tube and greatly increases the surface for absorption. Entry through the micropyle is <strong>porogamy</strong>; the tube then bursts into one synergid, releasing the two non-motile male gametes."
                },
                {
                    id: "d24b181",
                    text: "Transfer of pollen from an anther to the stigma of a different flower borne on the same plant is termed:",
                    options: [
                        { key: "a", text: "Autogamy, and it is a form of cross-pollination" },
                        { key: "b", text: "Xenogamy, and it brings genetically different pollen" },
                        { key: "c", text: "Geitonogamy, which is functionally self-pollination" },
                        { key: "d", text: "Cleistogamy, which occurs in a flower that never opens" }
                    ],
                    answer: "c",
                    explanation: "<strong>Autogamy</strong> is pollination within the same flower and <strong>geitonogamy</strong> between two flowers of the same plant. Although geitonogamy requires a pollinating agent and is therefore ecologically cross-pollination, <strong>genetically it is self-pollination</strong>, since all the flowers of one plant are of the same genotype. Only <strong>xenogamy</strong> — pollen from a different plant — brings new genetic material."
                },
                {
                    id: "d24b182",
                    text: "Dichogamy, herkogamy and self-incompatibility are all devices that:",
                    options: [
                        { key: "a", text: "Encourage self-pollination in the absence of any pollinator" },
                        { key: "b", text: "Discourage self-pollination and promote outbreeding" },
                        { key: "c", text: "Protect the ovule against damage by visiting insects" },
                        { key: "d", text: "Enable the fruit to develop without any fertilisation" }
                    ],
                    answer: "b",
                    explanation: "<strong>Dichogamy</strong> is the maturing of anthers and stigma at different times (protandry or protogyny); <strong>herkogamy</strong> is a physical barrier or separation between them; and <strong>self-incompatibility</strong> is a genetic mechanism that prevents the pollen tube growing in the pistil of the same plant. Unisexuality and dioecy do the same job. All promote <strong>cross-pollination</strong> and hence variation."
                },
                {
                    id: "d24b183",
                    text: "Double fertilisation, discovered by Nawaschin, consists of:",
                    options: [
                        { key: "a", text: "Fusion of both the male gametes with the egg cell, giving a diploid zygote" },
                        { key: "b", text: "Fusion of one male gamete with a synergid and of the other with the egg" },
                        { key: "c", text: "Fusion of two separate eggs with two male gametes in one embryo sac" },
                        { key: "d", text: "Syngamy with the egg plus triple fusion with the two polar nuclei" }
                    ],
                    answer: "d",
                    explanation: "One male gamete fuses with the egg — <strong>syngamy</strong> — giving the diploid zygote, while the second fuses with the two polar nuclei of the central cell — <strong>triple fusion</strong> — giving the triploid primary endosperm nucleus. Both events together are <strong>double fertilisation</strong>, a phenomenon unique to angiosperms; it ensures that food is laid down only when an embryo has actually been formed."
                },
                {
                    id: "d24b184",
                    text: "The mature dicot embryo differs from the monocot embryo in that the dicot embryo has:",
                    options: [
                        { key: "a", text: "Two lateral cotyledons and a terminal plumule between them" },
                        { key: "b", text: "One lateral cotyledon and a terminal plumule beside it" },
                        { key: "c", text: "No cotyledon at all, the endosperm supplying all the food" },
                        { key: "d", text: "Two cotyledons enclosed within a protective coleoptile" }
                    ],
                    answer: "a",
                    explanation: "In a dicot the two <strong>cotyledons are lateral</strong> and the plumule lies terminally between them, with the radicle at the other end of the axis. In a grass the single cotyledon, the <strong>scutellum</strong>, is lateral and the plumule is terminal, and both plumule and radicle are sheathed by the <strong>coleoptile</strong> and <strong>coleorhiza</strong> — structures the dicot embryo entirely lacks."
                },
                {
                    id: "d24b185",
                    text: "In the commonest type of endosperm development the primary endosperm nucleus divides repeatedly without any wall formation, giving a free-nuclear stage. This type is:",
                    options: [
                        { key: "a", text: "Cellular, as in <em>Petunia</em> and <em>Datura</em>" },
                        { key: "b", text: "Helobial, an intermediate type of the monocots" },
                        { key: "c", text: "Nuclear, as in coconut, whose water is free-nuclear endosperm" },
                        { key: "d", text: "Ruminate, in which the surface becomes irregularly folded" }
                    ],
                    answer: "c",
                    explanation: "In <strong>nuclear</strong> endosperm the nuclei divide freely in a common cytoplasm and walls are laid down only later, if at all — the liquid <strong>coconut water is free-nuclear endosperm</strong> and the white kernel is its subsequently cellular part. In the <strong>cellular</strong> type a wall follows every division from the first, and the <strong>helobial</strong> type is intermediate. Endosperm nourishes the embryo and, in cereals, feeds mankind."
                },
                {
                    id: "d24b186",
                    text: "Plant tissue culture rests on the property of totipotency, which means that a single somatic plant cell:",
                    options: [
                        { key: "a", text: "Can divide without ever needing any nutrient medium" },
                        { key: "b", text: "Contains the full genetic information to regenerate a whole plant" },
                        { key: "c", text: "Can fuse with any other cell to give a somatic hybrid" },
                        { key: "d", text: "Is able to fix atmospheric nitrogen when grown in isolation" }
                    ],
                    answer: "b",
                    explanation: "<strong>Totipotency</strong> — proposed by Haberlandt and demonstrated by Steward with carrot phloem cells — is the capacity of a single differentiated cell to dedifferentiate and, given the right nutrients and hormones, redifferentiate into an entire plant. Animal cells lose this power early, which is why whole-organism regeneration from a somatic cell is routine in plants but not in animals."
                },
                {
                    id: "d24b187",
                    text: "In tissue culture the direction of differentiation of a callus is controlled largely by the ratio of two hormones in the medium. A high cytokinin to auxin ratio favours:",
                    options: [
                        { key: "a", text: "The formation of flowers directly, without any shoot" },
                        { key: "b", text: "Root formation, whereas the reverse ratio favours shoots" },
                        { key: "c", text: "Continued callus growth with no organ formation at all" },
                        { key: "d", text: "Shoot formation, whereas the reverse ratio favours roots" }
                    ],
                    answer: "d",
                    explanation: "Skoog and Miller showed that a <strong>high cytokinin : auxin ratio induces shoot buds</strong>, a high auxin : cytokinin ratio induces roots, and roughly equal amounts keep the tissue as an undifferentiated <strong>callus</strong>. The explant is grown aseptically on a defined medium — usually Murashige and Skoog — containing sugar, salts, vitamins and these growth regulators."
                },
                {
                    id: "d24b188",
                    text: "A virus-infected potato variety can be freed of the virus and multiplied by culturing its:",
                    options: [
                        { key: "a", text: "Mature leaf tissue, which contains the fewest virus particles" },
                        { key: "b", text: "Apical meristem, which is usually free of the virus" },
                        { key: "c", text: "Root tips, in which the virus cannot survive at all" },
                        { key: "d", text: "Anthers, which give haploid virus-free plantlets" }
                    ],
                    answer: "b",
                    explanation: "Viruses spread through the vascular tissue, but the rapidly dividing cells of the <strong>apical meristem</strong> usually outrun the infection and remain virus-free. Culturing this tiny dome — <strong>meristem culture</strong> — yields healthy plants, which are then multiplied in thousands by <strong>micropropagation</strong>. The technique is standard for potato, banana, sugarcane and orchids."
                },
                {
                    id: "d24b189",
                    text: "Somatic hybridisation makes it possible to combine two species that cannot be crossed sexually. The essential first step is to:",
                    options: [
                        { key: "a", text: "Remove the cell walls with cellulase and pectinase to give protoplasts" },
                        { key: "b", text: "Double the chromosome number of both parents with colchicine" },
                        { key: "c", text: "Culture the anthers of both parents to obtain haploid cells" },
                        { key: "d", text: "Insert a Ti plasmid into the cells of both of the parents" }
                    ],
                    answer: "a",
                    explanation: "Naked <strong>protoplasts</strong> are prepared by digesting the wall with cellulase and pectinase; they are then fused with polyethylene glycol or an electric pulse, and the hybrid cell regenerates a wall and is cultured into a plant — as in the famous <em>pomato</em> from potato and tomato. Anther culture is a different technique, used to raise <strong>haploids</strong> and hence instant homozygous lines."
                },
                {
                    id: "d24b190",
                    text: "Restriction endonucleases are called the molecular scissors of genetic engineering because they:",
                    options: [
                        { key: "a", text: "Join two DNA fragments by forming phosphodiester bonds" },
                        { key: "b", text: "Multiply a chosen DNA segment a millionfold in vitro" },
                        { key: "c", text: "Copy RNA into DNA before the fragment can be cloned" },
                        { key: "d", text: "Cut DNA at specific palindromic recognition sequences" }
                    ],
                    answer: "d",
                    explanation: "A restriction enzyme scans the DNA and cuts it only where it meets its own <strong>palindromic recognition sequence</strong> — <em>EcoRI</em> at GAATTC, for instance — often leaving single-stranded 'sticky ends' that pair with any other fragment cut by the same enzyme. Joining is done by <strong>DNA ligase</strong>, copying RNA by reverse transcriptase and amplification by PCR."
                },
                {
                    id: "d24b191",
                    text: "<em>Agrobacterium tumefaciens</em> is called nature's own genetic engineer because it:",
                    options: [
                        { key: "a", text: "Fixes atmospheric nitrogen in the nodules of dicot plants" },
                        { key: "b", text: "Transfers a piece of its Ti plasmid into the plant's genome" },
                        { key: "c", text: "Produces the restriction enzymes used to cut plant DNA" },
                        { key: "d", text: "Fuses two protoplasts of different species into a hybrid" }
                    ],
                    answer: "b",
                    explanation: "This soil bacterium causes crown gall by inserting the <strong>T-DNA of its tumour-inducing (Ti) plasmid</strong> into the chromosome of the host cell, where it directs the synthesis of hormones and opines. Genetic engineers disarm the plasmid by removing the tumour genes and put their own gene in its place, making it the standard <strong>vector</strong> for producing transgenic dicots."
                },
                {
                    id: "d24b192",
                    text: "In Bt cotton the inserted gene comes from <em>Bacillus thuringiensis</em> and codes for a protein that:",
                    options: [
                        { key: "a", text: "Kills the bollworm larva by acting on its alkaline gut" },
                        { key: "b", text: "Kills every insect that touches any part of the plant" },
                        { key: "c", text: "Increases the vitamin A content of the cotton seed oil" },
                        { key: "d", text: "Makes the plant resistant to all the common herbicides" }
                    ],
                    answer: "a",
                    explanation: "The <em>cry</em> genes make an inactive crystal <strong>protoxin</strong>; in the <strong>alkaline gut of a susceptible larva</strong> it is solubilised and activated, perforating the gut wall and killing the insect. It is harmless to man and to most non-target species because their guts are acidic. <strong>Golden rice</strong> is the example engineered for provitamin A, and FlavrSavr was the delayed-ripening tomato."
                },
                {
                    id: "d24b193",
                    text: "A biofertilizer differs from a chemical fertilizer in that a biofertilizer:",
                    options: [
                        { key: "a", text: "Supplies nutrients in a soluble form for immediate uptake" },
                        { key: "b", text: "Consists of living organisms that enrich the soil's nutrient supply" },
                        { key: "c", text: "Is manufactured industrially from atmospheric nitrogen and hydrogen" },
                        { key: "d", text: "Acts only on the leaves when sprayed and not through the soil" }
                    ],
                    answer: "b",
                    explanation: "A <strong>biofertilizer</strong> is a preparation of <em>living</em> microorganisms — <em>Rhizobium</em> in legume nodules, free-living <em>Azotobacter</em> and <em>Clostridium</em>, the cyanobacteria and the <em>Azolla–Anabaena</em> association in rice fields, and phosphate-solubilising bacteria — which fix nitrogen or mobilise nutrients biologically. They are cheap, renewable and non-polluting, unlike chemical fertilizers that leach and cause eutrophication."
                },
                {
                    id: "d24b194",
                    text: "A mycorrhiza benefits the higher plant chiefly by:",
                    options: [
                        { key: "a", text: "Greatly increasing the absorption of phosphorus and water" },
                        { key: "b", text: "Fixing atmospheric nitrogen directly inside the root cells" },
                        { key: "c", text: "Digesting the cellulose of the root and releasing sugars" },
                        { key: "d", text: "Producing the auxin that causes lateral roots to form" }
                    ],
                    answer: "a",
                    explanation: "In this mutualism the fungal hyphae extend far beyond the depletion zone of the root and, being extremely fine, exploit a much greater soil volume — so uptake of the poorly mobile <strong>phosphate</strong>, and of water, zinc and copper, is greatly increased; the fungus receives sugars in return. Vesicular–arbuscular (VAM) mycorrhizae also improve drought and pathogen resistance."
                },
                {
                    id: "d24b195",
                    text: "<em>Sesbania</em> and <em>Crotalaria</em> are grown and then ploughed into the field before they set seed. This practice, called green manuring, works because the crop:",
                    options: [
                        { key: "a", text: "Adds organic matter and nitrogen and improves the soil structure" },
                        { key: "b", text: "Removes the excess salts that have accumulated in the topsoil" },
                        { key: "c", text: "Kills all the soil microorganisms and so prevents plant disease" },
                        { key: "d", text: "Absorbs the pesticide residues left over from the previous crop" }
                    ],
                    answer: "a",
                    explanation: "A quick-growing <strong>leguminous</strong> crop is turned under while still green and succulent. It decomposes rapidly, adding <strong>humus and the nitrogen fixed by its root nodules</strong>, improving soil texture, water-holding capacity and microbial activity, and checking erosion and weeds in the meantime. It is a classical low-cost way of maintaining fertility."
                },
                {
                    id: "d24b196",
                    text: "In a plant breeding programme, the collection and evaluation of all the varieties, wild relatives and land races of a crop is the first step because this germplasm:",
                    options: [
                        { key: "a", text: "Is the reservoir of the genetic variability the breeder must use" },
                        { key: "b", text: "Can be sold directly to farmers as an improved variety" },
                        { key: "c", text: "Removes the need for any hybridisation or selection later" },
                        { key: "d", text: "Guarantees that the new variety will be free of all disease" }
                    ],
                    answer: "a",
                    explanation: "A breeder can select only among variations that already exist, so <strong>germplasm collection</strong> — conserved in gene banks and field collections — is the raw material of the whole programme. The later steps are evaluation of the parents, <strong>hybridisation</strong>, selection and testing of the superior recombinants, and finally the multiplication and release of the new variety."
                },
                {
                    id: "d24b197",
                    text: "The dwarf, high-yielding, fertilizer-responsive varieties of wheat and rice that produced the Green Revolution owed their success largely to the fact that a short stem:",
                    options: [
                        { key: "a", text: "Absorbs far more water from the soil than a tall stem does" },
                        { key: "b", text: "Resists lodging and diverts more of the photosynthate to grain" },
                        { key: "c", text: "Allows the crop to be harvested entirely by hand very quickly" },
                        { key: "d", text: "Prevents the plant from being attacked by any insect pest" }
                    ],
                    answer: "b",
                    explanation: "Tall traditional varieties fell over (<strong>lodged</strong>) when given heavy nitrogen. The dwarfing genes gave a short, stiff straw that stands up under a heavy ear, and a much greater <strong>harvest index</strong> — a larger share of the plant's production going into the grain rather than the straw. Norman Borlaug's wheats and the IRRI rices transformed food production in South Asia."
                },
                {
                    id: "d24b198",
                    text: "Biofortification is a plant-breeding objective that aims at:",
                    options: [
                        { key: "a", text: "Extending the shelf life of fruit after it has been picked" },
                        { key: "b", text: "Increasing the total yield per hectare of a cereal crop" },
                        { key: "c", text: "Making crops resistant to the commonly used herbicides" },
                        { key: "d", text: "Raising the vitamin, mineral and protein content of crops" }
                    ],
                    answer: "d",
                    explanation: "<strong>Biofortification</strong> attacks 'hidden hunger' — the deficiency of micronutrients in diets that supply enough calories — by breeding or engineering crops with more iron, zinc, vitamin A or protein. Examples are iron-rich and protein-rich wheat and maize, vitamin-C-rich bitter gourd and vitamin-A-rich carrot and pumpkin, and the engineered <strong>Golden Rice</strong>."
                },
                {
                    id: "d24b199",
                    text: "Food security, as normally defined, requires that all people at all times have:",
                    options: [
                        { key: "a", text: "Enough cereal stored in the national warehouses of the country" },
                        { key: "b", text: "An income sufficient to import all the food that they need" },
                        { key: "c", text: "The right to grow whatever crop they choose on their own land" },
                        { key: "d", text: "Physical and economic access to sufficient, safe and nutritious food" }
                    ],
                    answer: "d",
                    explanation: "Food security has three pillars — <strong>availability</strong> (enough food produced or imported), <strong>access</strong> (the physical and economic means to obtain it) and <strong>utilisation</strong> (food that is safe, nutritious and properly used), all of them <strong>stable over time</strong>. National grain stocks alone are not enough, since food can be present in the market and still be beyond the reach of the poor."
                },
                {
                    id: "d24b200",
                    text: "Food safety is concerned with a different problem from food security, namely with ensuring that food is:",
                    options: [
                        { key: "a", text: "Produced in a quantity sufficient for the whole population" },
                        { key: "b", text: "Sold at a price that the poorest households can afford" },
                        { key: "c", text: "Grown only by traditional methods without any modern input" },
                        { key: "d", text: "Free from pathogens, toxins, pesticide residues and adulterants" }
                    ],
                    answer: "d",
                    explanation: "<strong>Food safety</strong> deals with the <em>quality</em> of what is eaten — freedom from microbial contamination, mycotoxins such as aflatoxin, heavy metals, excessive pesticide residues and deliberate adulteration — and is enforced through hygienic handling, permissible-limit standards and labelling. Food security deals with the <em>quantity and accessibility</em>; a population can have one without the other."
                }
            ]
        }
    ]
};

/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)",
   Unit/Topic-wise Content of Botany. Every unit here carries exactly five times its official
   weight, so the whole 40-question Botany paper is represented at five-fold depth. */
const DAY24_SYLLABUS = [
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "1. Basic Components of Life", weight: 2, subs: [
            { name: "Carbohydrates, Lipids and Minerals", ids: ["d24b1", "d24b2", "d24b3", "d24b4", "d24b5"] },
            { name: "Proteins and Enzymes", ids: ["d24b6", "d24b7", "d24b8", "d24b9", "d24b10"] }
        ] },
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Classification: 2-Kingdom, Hierarchy, 5-Kingdom, 3-Domain", ids: ["d24b11", "d24b12", "d24b13", "d24b14"] },
            { name: "Monera & Virus", ids: ["d24b15", "d24b16", "d24b17", "d24b18", "d24b19", "d24b20", "d24b21", "d24b22", "d24b23", "d24b24"] },
            { name: "Fungi & Lichens", ids: ["d24b25", "d24b26", "d24b27", "d24b28", "d24b29", "d24b30", "d24b31"] },
            { name: "Algae", ids: ["d24b32", "d24b33", "d24b34", "d24b35"] },
            { name: "Bryophytes", ids: ["d24b36", "d24b37", "d24b38", "d24b39"] },
            { name: "Pteridophytes", ids: ["d24b40", "d24b41"] },
            { name: "Gymnosperms", ids: ["d24b42", "d24b43", "d24b44"] },
            { name: "Angiosperms: Morphology and Families", ids: ["d24b45", "d24b46", "d24b47", "d24b48", "d24b49", "d24b50", "d24b51"] },
            { name: "Economic Importance & Medicinal Plants of Nepal", ids: ["d24b52", "d24b53", "d24b54", "d24b55"] }
        ] },
        { topic: "3. Ecology and Vegetation", weight: 4, subs: [
            { name: "Ecosystem Ecology: Pond and Forest, Biotic Interactions", ids: ["d24b56", "d24b57", "d24b58", "d24b59", "d24b60", "d24b61", "d24b62"] },
            { name: "Biogeochemical Cycles & Ecological Imbalances", ids: ["d24b63", "d24b64", "d24b65", "d24b66", "d24b67", "d24b68", "d24b69"] },
            { name: "Vegetation, Adaptation and Succession", ids: ["d24b70", "d24b71", "d24b72", "d24b73", "d24b74", "d24b75"] }
        ] },
        { topic: "4. Cell Biology", weight: 5, subs: [
            { name: "Cell Theory, Prokaryotic and Eukaryotic Cells", ids: ["d24b76", "d24b77"] },
            { name: "Cell Wall and Cell Membrane", ids: ["d24b78", "d24b79", "d24b80"] },
            { name: "Mitochondria and Chloroplasts", ids: ["d24b81", "d24b82", "d24b83"] },
            { name: "ER, Golgi Body, Lysosome and Ribosome", ids: ["d24b84", "d24b85", "d24b86", "d24b87"] },
            { name: "Vacuole, Nucleus, Chromosomes, Cilia and Cell Inclusions", ids: ["d24b88", "d24b89", "d24b90", "d24b91", "d24b92"] },
            { name: "Cell Cycle, Mitosis, Meiosis and Amitosis", ids: ["d24b93", "d24b94", "d24b95", "d24b96", "d24b97", "d24b98", "d24b99", "d24b100"] }
        ] },
        { topic: "5. Genetics", weight: 6, subs: [
            { name: "Genetic Material: DNA, RNA and Replication", ids: ["d24b101", "d24b102", "d24b103", "d24b104", "d24b105", "d24b106", "d24b107", "d24b108"] },
            { name: "Central Dogma and the Genetic Code", ids: ["d24b109", "d24b110", "d24b111", "d24b112", "d24b113"] },
            { name: "Mendelian Genetics and Laws of Inheritance", ids: ["d24b114", "d24b115", "d24b116", "d24b117", "d24b118", "d24b122"] },
            { name: "Incomplete Dominance, Codominance and Multiple Alleles", ids: ["d24b119", "d24b120", "d24b121"] },
            { name: "Linkage and Crossing Over", ids: ["d24b123", "d24b124", "d24b125"] },
            { name: "Sex-linked Inheritance", ids: ["d24b126", "d24b127"] },
            { name: "Mutation, Polyploidy and Genetic Disorders", ids: ["d24b128", "d24b129", "d24b130"] }
        ] },
        { topic: "6. Plant Anatomy", weight: 3, subs: [
            { name: "Plant Tissues: Meristematic and Permanent", ids: ["d24b131", "d24b132", "d24b133", "d24b134", "d24b135"] },
            { name: "Types of Vascular Bundles", ids: ["d24b136", "d24b137", "d24b138"] },
            { name: "Monocot and Dicot Root, Stem and Leaf", ids: ["d24b139", "d24b140", "d24b141", "d24b142", "d24b143", "d24b144", "d24b145"] }
        ] },
        { topic: "7. Plant Physiology", weight: 6, subs: [
            { name: "Water Relations: Diffusion, DPD, Osmosis and Imbibition", ids: ["d24b146", "d24b147", "d24b148", "d24b149", "d24b150"] },
            { name: "Transpiration, Ascent of Sap, Guttation and Wilting", ids: ["d24b151", "d24b152", "d24b153", "d24b154", "d24b155", "d24b156", "d24b157"] },
            { name: "Photosynthesis", ids: ["d24b158", "d24b159", "d24b160", "d24b161", "d24b162", "d24b163", "d24b164", "d24b165", "d24b166"] },
            { name: "Respiration", ids: ["d24b167", "d24b168", "d24b169", "d24b170", "d24b171", "d24b172"] },
            { name: "Plant Growth, Seed Germination and Dormancy", ids: ["d24b173", "d24b174", "d24b175"] }
        ] },
        { topic: "8. Developmental Botany", weight: 2, subs: [
            { name: "Asexual Reproduction, Sporogenesis and Gametogenesis", ids: ["d24b176", "d24b177", "d24b178", "d24b179", "d24b180"] },
            { name: "Pollination, Fertilisation, Embryo and Endosperm", ids: ["d24b181", "d24b182", "d24b183", "d24b184", "d24b185"] }
        ] },
        { topic: "9. Applied Botany", weight: 3, subs: [
            { name: "Plant Tissue Culture", ids: ["d24b186", "d24b187", "d24b188", "d24b189"] },
            { name: "Genetic Engineering", ids: ["d24b190", "d24b191", "d24b192"] },
            { name: "Biofertilizers and Green Manures", ids: ["d24b193", "d24b194", "d24b195"] },
            { name: "Plant Breeding, Bio-engineering, Food Safety and Security", ids: ["d24b196", "d24b197", "d24b198", "d24b199", "d24b200"] }
        ] }
    ] }
];
DAY24.syllabus = DAY24_SYLLABUS;
/* __SYLLABUS__ */
