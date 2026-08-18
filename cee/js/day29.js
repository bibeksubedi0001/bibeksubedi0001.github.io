/* ============================================================
   DAY 29 — PLANT DIVERSITY + ALTERNATING CURRENT
   100 questions · 90 minutes · 0.25 negative marking

     Plant Diversity (Botany unit 2) ..... 50   d29b1  – d29b50
     Alternating Current (Physics unit 4)  50   d29p51 – d29p100

   Written in the style actually used in the entrance paper:
   direct one-concept recall mixed with the short numericals that
   the CEE regularly asks (rms and peak values, reactance,
   impedance, resonant frequency, power factor).

   Questions are new: none repeats the Botany sets of Day 21, 22,
   24, 25 or 28, nor the Physics sets of Day 19, 21, 26 or 27.
   ============================================================ */
const DAY29 = {
    day: 29,
    title: "Day 29",
    subtitle: "Plant Diversity · Alternating Current",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "plantdiv29",
            name: "Plant Diversity",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q1–50 · exam-style · classification and nomenclature, Monera and virus, fungi and lichens, algae, bryophytes, pteridophytes, gymnosperms, angiosperms and economic botany.",
            questions: [
                {
                    id: "d29b1",
                    text: "Arranged from the largest to the smallest, the correct sequence of taxonomic categories is:",
                    options: [
                        { key: "a", text: "Kingdom, Class, Division, Order, Family, Genus, Species" },
                        { key: "b", text: "Kingdom, Division, Order, Class, Genus, Family, Species" },
                        { key: "c", text: "Division, Kingdom, Order, Class, Family, Species, Genus" },
                        { key: "d", text: "Kingdom, Division, Class, Order, Family, Genus, Species" }
                    ],
                    answer: "d",
                    explanation: "The descending order is <strong>Kingdom &rarr; Division &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species</strong>. In animals the word Phylum replaces Division. Going down, the number of organisms falls and the number of common characters rises."
                },
                {
                    id: "d29b2",
                    text: "A taxonomic group of any rank, such as Rosaceae or <em>Solanum</em>, is referred to as a:",
                    options: [
                        { key: "a", text: "Phenotype" },
                        { key: "b", text: "Species" },
                        { key: "c", text: "Clade" },
                        { key: "d", text: "Taxon" }
                    ],
                    answer: "d",
                    explanation: "A <strong>taxon</strong> is any group of organisms treated as a unit at any level of the hierarchy — a species, a genus, a family and a kingdom are all taxa. The science of classification itself is taxonomy."
                },
                {
                    id: "d29b3",
                    text: "The names of plant families normally end in the suffix:",
                    options: [
                        { key: "a", text: "-ales" },
                        { key: "b", text: "-idae" },
                        { key: "c", text: "-aceae" },
                        { key: "d", text: "-phyta" }
                    ],
                    answer: "c",
                    explanation: "Plant family names end in <strong>-aceae</strong> (Brassicaceae, Solanaceae, Fabaceae, Liliaceae), orders end in <em>-ales</em> and divisions in <em>-phyta</em>. These standard endings make the rank obvious from the name itself."
                },
                {
                    id: "d29b4",
                    text: "In the five-kingdom system, the kingdom that contains all prokaryotic organisms is:",
                    options: [
                        { key: "a", text: "Protista" },
                        { key: "b", text: "Monera" },
                        { key: "c", text: "Fungi" },
                        { key: "d", text: "Plantae" }
                    ],
                    answer: "b",
                    explanation: "<strong>Monera</strong> holds the bacteria, cyanobacteria, actinomycetes and mycoplasma — all prokaryotes. The other four kingdoms are entirely eukaryotic."
                },
                {
                    id: "d29b5",
                    text: "A booklet giving a set of contrasting characters, used step by step to identify an unknown plant, is called a:",
                    options: [
                        { key: "a", text: "Key" },
                        { key: "b", text: "Herbarium" },
                        { key: "c", text: "Monograph" },
                        { key: "d", text: "Catalogue" }
                    ],
                    answer: "a",
                    explanation: "A <strong>key</strong> presents paired contrasting statements (couplets); choosing one at each step leads finally to the name of the plant. Keys, floras, manuals, monographs, herbaria and botanical gardens are all taxonomic aids."
                },
                {
                    id: "d29b6",
                    text: "The smallest known free-living organism, which lacks a cell wall altogether, is:",
                    options: [
                        { key: "a", text: "<em>Mycoplasma</em>" },
                        { key: "b", text: "<em>Escherichia coli</em>" },
                        { key: "c", text: "<em>Nostoc</em>" },
                        { key: "d", text: "Tobacco mosaic virus" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Mycoplasma</em></strong> (PPLO) is the smallest free-living cell and has only a plasma membrane, no wall — which makes it naturally resistant to penicillin. A virus is smaller still but is not free-living."
                },
                {
                    id: "d29b7",
                    text: "After Gram's staining a Gram-positive bacterium appears:",
                    options: [
                        { key: "a", text: "Pink or red" },
                        { key: "b", text: "Green" },
                        { key: "c", text: "Colourless" },
                        { key: "d", text: "Purple or violet" }
                    ],
                    answer: "d",
                    explanation: "The thick peptidoglycan wall of a <strong>Gram-positive</strong> cell retains the crystal-violet–iodine complex, so it stays <strong>purple</strong>. Gram-negative cells are decolourised by alcohol and take the pink safranin counterstain."
                },
                {
                    id: "d29b8",
                    text: "The bacterial flagellum is built of the protein:",
                    options: [
                        { key: "a", text: "Tubulin" },
                        { key: "b", text: "Myosin" },
                        { key: "c", text: "Flagellin" },
                        { key: "d", text: "Keratin" }
                    ],
                    answer: "c",
                    explanation: "A bacterial flagellum is a simple helical filament of <strong>flagellin</strong> that rotates like a propeller. It is quite unlike the 9 + 2 eukaryotic flagellum, which is made of tubulin microtubules and is covered by the plasma membrane."
                },
                {
                    id: "d29b9",
                    text: "The small circular piece of extra-chromosomal DNA of a bacterium, widely used as a vector in genetic engineering, is the:",
                    options: [
                        { key: "a", text: "Nucleoid" },
                        { key: "b", text: "Mesosome" },
                        { key: "c", text: "Plasmid" },
                        { key: "d", text: "Ribosome" }
                    ],
                    answer: "c",
                    explanation: "A <strong>plasmid</strong> replicates independently of the main chromosome and often carries antibiotic-resistance genes. Because a foreign gene can be inserted into it and carried into a host cell, it is the workhorse vector of recombinant DNA technology."
                },
                {
                    id: "d29b10",
                    text: "Which of the following diseases is caused by a virus?",
                    options: [
                        { key: "a", text: "Cholera" },
                        { key: "b", text: "Typhoid" },
                        { key: "c", text: "Poliomyelitis" },
                        { key: "d", text: "Tuberculosis" }
                    ],
                    answer: "c",
                    explanation: "<strong>Polio</strong> is viral, as are influenza, hepatitis, measles, rabies and AIDS. Cholera (<em>Vibrio cholerae</em>), typhoid (<em>Salmonella typhi</em>) and tuberculosis (<em>Mycobacterium tuberculosis</em>) are all bacterial."
                },
                {
                    id: "d29b11",
                    text: "In the lytic cycle of a bacteriophage, the correct order of events is:",
                    options: [
                        { key: "a", text: "Adsorption, penetration, replication, assembly, lysis" },
                        { key: "b", text: "Penetration, adsorption, lysis, replication, assembly" },
                        { key: "c", text: "Replication, adsorption, penetration, lysis, assembly" },
                        { key: "d", text: "Assembly, replication, penetration, adsorption, lysis" }
                    ],
                    answer: "a",
                    explanation: "The phage first attaches to the wall (<strong>adsorption</strong>), injects its nucleic acid (<strong>penetration</strong>), takes over the host machinery to make copies (<strong>replication</strong>), the parts are put together (<strong>assembly</strong>) and finally the cell bursts (<strong>lysis</strong>), releasing the progeny."
                },
                {
                    id: "d29b12",
                    text: "The genetic material of tobacco mosaic virus is:",
                    options: [
                        { key: "a", text: "Double-stranded DNA" },
                        { key: "b", text: "Single-stranded RNA" },
                        { key: "c", text: "Both DNA and RNA" },
                        { key: "d", text: "Protein only" }
                    ],
                    answer: "b",
                    explanation: "TMV is a rod-shaped virus with a helical capsid enclosing a single strand of <strong>RNA</strong>. Most plant viruses are RNA viruses, whereas most bacteriophages carry double-stranded DNA; no virus ever has both."
                },
                {
                    id: "d29b13",
                    text: "The symbiotic association between a fungus and the roots of a higher plant is called:",
                    options: [
                        { key: "a", text: "Lichen" },
                        { key: "b", text: "Mycorrhiza" },
                        { key: "c", text: "Root nodule" },
                        { key: "d", text: "Haustorium" }
                    ],
                    answer: "b",
                    explanation: "In a <strong>mycorrhiza</strong> the fungal hyphae greatly extend the absorbing surface of the root, improving the uptake of phosphorus and water, and receive sugars in return. A lichen is alga + fungus and a root nodule houses <em>Rhizobium</em>."
                },
                {
                    id: "d29b14",
                    text: "Black rust of wheat is caused by the fungus:",
                    options: [
                        { key: "a", text: "<em>Puccinia graminis</em>" },
                        { key: "b", text: "<em>Agaricus campestris</em>" },
                        { key: "c", text: "<em>Penicillium notatum</em>" },
                        { key: "d", text: "<em>Saccharomyces cerevisiae</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Puccinia graminis</em></strong> is an obligate parasite of the Basidiomycetes causing black stem rust of wheat, a historically devastating crop disease. <em>Agaricus</em> is the edible mushroom and the other two are useful ascomycetes."
                },
                {
                    id: "d29b15",
                    text: "Deuteromycetes are called 'fungi imperfecti' because in them:",
                    options: [
                        { key: "a", text: "The mycelium is always aseptate and imperfectly formed" },
                        { key: "b", text: "Only the sexual stage is known and asexual stage is absent" },
                        { key: "c", text: "Only the asexual stage is known, the sexual stage being unknown" },
                        { key: "d", text: "Neither sexual nor asexual reproduction has ever been seen" }
                    ],
                    answer: "c",
                    explanation: "In the Deuteromycetes only the imperfect (<strong>asexual, conidial</strong>) stage has been observed. Once the sexual stage is discovered the fungus is transferred, usually to the Ascomycetes. Their mycelium is septate, and many are decomposers."
                },
                {
                    id: "d29b16",
                    text: "The asexual spores that are cut off in chains from the tip of a special hypha, as in <em>Penicillium</em>, are called:",
                    options: [
                        { key: "a", text: "Zoospores" },
                        { key: "b", text: "Zygospores" },
                        { key: "c", text: "Ascospores" },
                        { key: "d", text: "Conidia" }
                    ],
                    answer: "d",
                    explanation: "<strong>Conidia</strong> are non-motile asexual spores produced <em>exogenously</em> in chains on a conidiophore. Ascospores and zygospores are products of sexual reproduction, and zoospores are motile."
                },
                {
                    id: "d29b17",
                    text: "The number of spores normally formed in an ascus and on a basidium are respectively:",
                    options: [
                        { key: "a", text: "8 and 4" },
                        { key: "b", text: "4 and 8" },
                        { key: "c", text: "2 and 4" },
                        { key: "d", text: "8 and 8" }
                    ],
                    answer: "a",
                    explanation: "Meiosis of the diploid nucleus gives four haploid nuclei; in the ascus a further mitosis usually makes <strong>eight ascospores</strong> inside the sac, while the basidium bears the <strong>four basidiospores</strong> outside on sterigmata."
                },
                {
                    id: "d29b18",
                    text: "A flat, leaf-like lichen attached to the substratum by rhizines is described as:",
                    options: [
                        { key: "a", text: "Crustose" },
                        { key: "b", text: "Foliose" },
                        { key: "c", text: "Fruticose" },
                        { key: "d", text: "Gelatinous" }
                    ],
                    answer: "b",
                    explanation: "<strong>Foliose</strong> lichens such as <em>Parmelia</em> are leafy and held on by root-like rhizines. <strong>Crustose</strong> lichens form an inseparable crust and <strong>fruticose</strong> lichens are shrubby or hanging, as in <em>Usnea</em>."
                },
                {
                    id: "d29b19",
                    text: "Citric acid is manufactured commercially using the fungus:",
                    options: [
                        { key: "a", text: "<em>Ustilago maydis</em>" },
                        { key: "b", text: "<em>Rhizopus stolonifer</em>" },
                        { key: "c", text: "<em>Claviceps purpurea</em>" },
                        { key: "d", text: "<em>Aspergillus niger</em>" }
                    ],
                    answer: "d",
                    explanation: "<strong><em>Aspergillus niger</em></strong> is grown industrially on cheap sugar to produce <strong>citric acid</strong>. <em>Claviceps</em> yields the ergot alkaloids and <em>Ustilago</em> is the smut parasite of maize."
                },
                {
                    id: "d29b20",
                    text: "The largest and structurally most complex algae, some of them many metres long, belong to the class:",
                    options: [
                        { key: "a", text: "Chlorophyceae" },
                        { key: "b", text: "Rhodophyceae" },
                        { key: "c", text: "Phaeophyceae" },
                        { key: "d", text: "Cyanophyceae" }
                    ],
                    answer: "c",
                    explanation: "The brown algae or kelps (<strong>Phaeophyceae</strong>) such as <em>Laminaria</em> and <em>Macrocystis</em> reach tens of metres and are differentiated into holdfast, stipe and blade — the most complex body among algae."
                },
                {
                    id: "d29b21",
                    text: "The motile asexual spore by which many algae reproduce is called a:",
                    options: [
                        { key: "a", text: "Zoospore" },
                        { key: "b", text: "Aplanospore" },
                        { key: "c", text: "Conidium" },
                        { key: "d", text: "Akinete" }
                    ],
                    answer: "a",
                    explanation: "A <strong>zoospore</strong> is a flagellated, swimming spore produced inside a zoosporangium. A non-motile spore of the same kind is an aplanospore, and an akinete is a thick-walled resting cell."
                },
                {
                    id: "d29b22",
                    text: "The commonest method of vegetative reproduction in filamentous algae is:",
                    options: [
                        { key: "a", text: "Budding" },
                        { key: "b", text: "Binary fission" },
                        { key: "c", text: "Conjugation" },
                        { key: "d", text: "Fragmentation" }
                    ],
                    answer: "d",
                    explanation: "A filament breaks accidentally or at a dead cell into pieces, and each <strong>fragment</strong> grows into a new individual. It is the simplest and most widespread means of multiplication in algae such as <em>Spirogyra</em> and <em>Ulothrix</em>."
                },
                {
                    id: "d29b23",
                    text: "<em>Chlorella</em>, a unicellular green alga, is cultured on a large scale as a source of:",
                    options: [
                        { key: "a", text: "Agar for laboratory media" },
                        { key: "b", text: "Algin used as a thickener" },
                        { key: "c", text: "Single-cell protein used as food" },
                        { key: "d", text: "Iodine for medicinal use" }
                    ],
                    answer: "c",
                    explanation: "<strong><em>Chlorella</em></strong> is rich in protein and vitamins and is grown as a <strong>single-cell protein</strong> supplement — it has even been tested in space diets. Agar comes from red algae, algin and iodine from brown algae."
                },
                {
                    id: "d29b24",
                    text: "The reserve food materials of the brown algae are:",
                    options: [
                        { key: "a", text: "Starch and glucose" },
                        { key: "b", text: "Laminarin and mannitol" },
                        { key: "c", text: "Floridean starch and galactose" },
                        { key: "d", text: "Glycogen and oil" }
                    ],
                    answer: "b",
                    explanation: "Phaeophyceae store the polysaccharide <strong>laminarin</strong> and the sugar alcohol <strong>mannitol</strong>. Green algae store true starch, red algae floridean starch and fungi glycogen."
                },
                {
                    id: "d29b25",
                    text: "<em>Porphyra</em> and <em>Laminaria</em> are of economic importance mainly because they are:",
                    options: [
                        { key: "a", text: "Used as human food in coastal countries" },
                        { key: "b", text: "The source of the antibiotic penicillin" },
                        { key: "c", text: "Used to fix nitrogen in rice fields" },
                        { key: "d", text: "Grown for the timber of their stipe" }
                    ],
                    answer: "a",
                    explanation: "Several marine algae are <strong>eaten</strong> — <em>Porphyra</em> (nori), <em>Laminaria</em> and <em>Sargassum</em> are important foods in Japan, China and Korea. Brown algae additionally yield algin, iodine and potash."
                },
                {
                    id: "d29b26",
                    text: "The haploid spores inside the capsule of a moss are produced from the spore mother cells by:",
                    options: [
                        { key: "a", text: "Mitosis" },
                        { key: "b", text: "Amitosis" },
                        { key: "c", text: "Meiosis" },
                        { key: "d", text: "Budding" }
                    ],
                    answer: "c",
                    explanation: "The sporophyte is diploid, so its spore mother cells must halve their chromosome number by <strong>meiosis</strong> to give haploid spores. The gametophyte, being already haploid, makes its gametes by ordinary mitosis."
                },
                {
                    id: "d29b27",
                    text: "Hygroscopic, spirally thickened structures that help in the dispersal of spores from a liverwort capsule are called:",
                    options: [
                        { key: "a", text: "Elaters" },
                        { key: "b", text: "Peristome teeth" },
                        { key: "c", text: "Paraphyses" },
                        { key: "d", text: "Ramenta" }
                    ],
                    answer: "a",
                    explanation: "<strong>Elaters</strong> twist and untwist as the humidity changes and so flick the spores out of the capsule. Mosses have no elaters — they use a ring of peristome teeth instead."
                },
                {
                    id: "d29b28",
                    text: "In <em>Anthoceros</em> the sporophyte is unusual among bryophytes because it possesses:",
                    options: [
                        { key: "a", text: "Gemma cups on its outer surface" },
                        { key: "b", text: "Stomata and a basal meristem, so it keeps growing" },
                        { key: "c", text: "A branched vascular strand of true xylem" },
                        { key: "d", text: "No capsule and no spores at all" }
                    ],
                    answer: "b",
                    explanation: "The horn-like hornwort sporophyte is green, bears <strong>stomata</strong> and keeps elongating from a <strong>meristem at its base</strong>, so it is partly self-supporting — the most advanced sporophyte in the group. A columella is present inside."
                },
                {
                    id: "d29b29",
                    text: "The air pores on the upper surface of the <em>Marchantia</em> thallus differ from true stomata in that they:",
                    options: [
                        { key: "a", text: "Are guarded by two bean-shaped cells" },
                        { key: "b", text: "Open only during the night hours" },
                        { key: "c", text: "Are barrel-shaped and cannot be closed" },
                        { key: "d", text: "Lead directly into a vascular bundle" }
                    ],
                    answer: "c",
                    explanation: "Each pore is a chimney of superposed tiers of cells and is <strong>permanently open</strong>, unlike a stoma with its two guard cells. It leads into an air chamber whose floor bears green assimilatory filaments."
                },
                {
                    id: "d29b30",
                    text: "In bryophytes the sporophyte is described as dependent because it:",
                    options: [
                        { key: "a", text: "Draws its nourishment from the gametophyte through the foot" },
                        { key: "b", text: "Cannot produce any spores without a second plant" },
                        { key: "c", text: "Lives as a parasite on the roots of higher plants" },
                        { key: "d", text: "Is unable to survive unless it is fully submerged" }
                    ],
                    answer: "a",
                    explanation: "The sporophyte remains attached to the gametophyte and its <strong>foot</strong> absorbs water and food from it. It is therefore partly or wholly parasitic on the gametophyte — the reverse of the situation in ferns and seed plants."
                },
                {
                    id: "d29b31",
                    text: "The plant body of a bryophyte that we see, bearing the sex organs, is:",
                    options: [
                        { key: "a", text: "Diploid and produces spores" },
                        { key: "b", text: "Diploid and produces gametes" },
                        { key: "c", text: "Triploid and produces endosperm" },
                        { key: "d", text: "Haploid and produces gametes" }
                    ],
                    answer: "d",
                    explanation: "The conspicuous green bryophyte is the <strong>haploid gametophyte</strong>, which bears the antheridia and archegonia and makes gametes by mitosis. The diploid sporophyte is the small spore-producing structure growing on it."
                },
                {
                    id: "d29b32",
                    text: "The ring of thick-walled cells that brings about the explosive opening of a fern sporangium is the:",
                    options: [
                        { key: "a", text: "Indusium" },
                        { key: "b", text: "Annulus" },
                        { key: "c", text: "Stomium" },
                        { key: "d", text: "Columella" }
                    ],
                    answer: "b",
                    explanation: "As the <strong>annulus</strong> dries its cells contract, the ring straightens and tears the wall open at the thin-walled stomium, catapulting the spores into the air. The indusium is only a protective flap over the sorus."
                },
                {
                    id: "d29b33",
                    text: "A pteridophyte that produces two different kinds of spore is said to be:",
                    options: [
                        { key: "a", text: "Homosporous, as in <em>Dryopteris</em>" },
                        { key: "b", text: "Dioecious, as in <em>Marchantia</em>" },
                        { key: "c", text: "Apogamous, as in <em>Equisetum</em>" },
                        { key: "d", text: "Heterosporous, as in <em>Selaginella</em>" }
                    ],
                    answer: "d",
                    explanation: "<strong>Heterospory</strong> — small microspores and large megaspores — occurs in <em>Selaginella</em> and <em>Salvinia</em> and is regarded as the first step towards the seed habit. <em>Dryopteris</em> makes only one kind of spore and is homosporous."
                },
                {
                    id: "d29b34",
                    text: "The type of stele found in the rhizome of <em>Dryopteris</em> is a:",
                    options: [
                        { key: "a", text: "Protostele" },
                        { key: "b", text: "Dictyostele" },
                        { key: "c", text: "Atactostele" },
                        { key: "d", text: "Eustele" }
                    ],
                    answer: "b",
                    explanation: "Overlapping leaf gaps dissect the tubular siphonostele into a network of separate meristeles — a <strong>dictyostele</strong>. The atactostele (scattered bundles) belongs to monocot stems and the eustele to dicot stems."
                },
                {
                    id: "d29b35",
                    text: "In a fern, fertilisation can take place only when:",
                    options: [
                        { key: "a", text: "The prothallus is covered by a film of water" },
                        { key: "b", text: "Insects carry the antherozoids to the archegonium" },
                        { key: "c", text: "The wind blows the spores on to the sorus" },
                        { key: "d", text: "The sporophyte and gametophyte are joined together" }
                    ],
                    answer: "a",
                    explanation: "The multiflagellate antherozoids must <strong>swim</strong> to the neck of the archegonium, guided chemotactically by malic acid, so a film of water on the prothallus is essential. This ties ferns to moist, shaded habitats."
                },
                {
                    id: "d29b36",
                    text: "The small membranous outgrowth found on the upper surface of the leaf base of <em>Selaginella</em> is the:",
                    options: [
                        { key: "a", text: "Stipule" },
                        { key: "b", text: "Rhizophore" },
                        { key: "c", text: "Indusium" },
                        { key: "d", text: "Ligule" }
                    ],
                    answer: "d",
                    explanation: "<em>Selaginella</em> is described as a ligulate, heterosporous pteridophyte: each microphyll bears a small tongue-like <strong>ligule</strong> on its upper surface near the base. The leafless <em>rhizophore</em> is the peculiar root-bearing organ of the same plant."
                },
                {
                    id: "d29b37",
                    text: "The xylem of most pteridophytes differs from that of an angiosperm in that it:",
                    options: [
                        { key: "a", text: "Consists of tracheids and lacks vessels" },
                        { key: "b", text: "Consists only of parenchyma cells" },
                        { key: "c", text: "Contains sieve tubes and companion cells" },
                        { key: "d", text: "Is completely absent from the stem" }
                    ],
                    answer: "a",
                    explanation: "Pteridophyte xylem is made of <strong>tracheids</strong> and true vessels are absent, except in <em>Selaginella</em>, <em>Equisetum</em> and <em>Pteridium</em>. Their phloem likewise has sieve cells but no companion cells."
                },
                {
                    id: "d29b38",
                    text: "In <em>Pinus</em> the number of ovules borne on each ovuliferous scale is:",
                    options: [
                        { key: "a", text: "One" },
                        { key: "b", text: "Many" },
                        { key: "c", text: "Four" },
                        { key: "d", text: "Two" }
                    ],
                    answer: "d",
                    explanation: "Each woody ovuliferous scale of the female cone carries <strong>two inverted ovules</strong> on its upper surface. After fertilisation each may ripen into a winged seed."
                },
                {
                    id: "d29b39",
                    text: "In <em>Pinus</em> the male cones are borne:",
                    options: [
                        { key: "a", text: "Singly at the very top of the tree" },
                        { key: "b", text: "In clusters at the base of the long shoots" },
                        { key: "c", text: "On the underside of the green needles" },
                        { key: "d", text: "On the roots, close to the soil surface" }
                    ],
                    answer: "b",
                    explanation: "The small, short-lived male cones appear <strong>in clusters at the base of a long shoot</strong>, taking the place of dwarf shoots; the larger female cones are borne laterally, higher on the tree. Keeping them apart reduces self-pollination."
                },
                {
                    id: "d29b40",
                    text: "The nutritive tissue of a pine seed is:",
                    options: [
                        { key: "a", text: "Triploid and formed after double fertilisation" },
                        { key: "b", text: "Diploid and derived from the integument" },
                        { key: "c", text: "Haploid and formed before fertilisation" },
                        { key: "d", text: "Absent, the cotyledons storing all the food" }
                    ],
                    answer: "c",
                    explanation: "In a gymnosperm the food store is the <strong>female gametophyte</strong> itself, a haploid tissue laid down <em>before</em> the egg is fertilised. The angiosperm endosperm, in contrast, is triploid and is formed only after double fertilisation."
                },
                {
                    id: "d29b41",
                    text: "<em>Cycas</em> differs from <em>Pinus</em> in being:",
                    options: [
                        { key: "a", text: "Dioecious, with male and female plants separate" },
                        { key: "b", text: "Monoecious, with both cones on one plant" },
                        { key: "c", text: "An angiosperm with true flowers" },
                        { key: "d", text: "A herbaceous annual plant" }
                    ],
                    answer: "a",
                    explanation: "<em>Cycas</em> is <strong>dioecious</strong> — the male cone and the megasporophylls are borne on different plants — whereas <em>Pinus</em> is monoecious. <em>Cycas</em> also shows circinate vernation of its young leaves and bears coralloid roots."
                },
                {
                    id: "d29b42",
                    text: "The occurrence of more than one embryo in a single gymnosperm seed is known as:",
                    options: [
                        { key: "a", text: "Parthenocarpy" },
                        { key: "b", text: "Polyembryony" },
                        { key: "c", text: "Apomixis" },
                        { key: "d", text: "Vivipary" }
                    ],
                    answer: "b",
                    explanation: "<strong>Polyembryony</strong> is common in <em>Pinus</em>: several archegonia may be fertilised and each zygote's suspensor may split, so many embryos begin — though usually only one survives to maturity."
                },
                {
                    id: "d29b43",
                    text: "The drug ephedrine, used in the treatment of asthma, is obtained from the gymnosperm:",
                    options: [
                        { key: "a", text: "<em>Cycas</em>" },
                        { key: "b", text: "<em>Pinus</em>" },
                        { key: "c", text: "<em>Ephedra</em>" },
                        { key: "d", text: "<em>Ginkgo</em>" }
                    ],
                    answer: "c",
                    explanation: "<strong><em>Ephedra</em></strong> yields the alkaloid <strong>ephedrine</strong>, a bronchodilator used against asthma. <em>Taxus</em> gives the anticancer drug taxol, <em>Cycas</em> gives sago and <em>Pinus</em> resin and timber."
                },
                {
                    id: "d29b44",
                    text: "Double fertilisation is a phenomenon found only in:",
                    options: [
                        { key: "a", text: "Angiosperms" },
                        { key: "b", text: "Gymnosperms" },
                        { key: "c", text: "Pteridophytes" },
                        { key: "d", text: "Bryophytes" }
                    ],
                    answer: "a",
                    explanation: "Only in <strong>angiosperms</strong> do both male gametes function — one fuses with the egg (syngamy) and the other with the two polar nuclei (triple fusion). It was discovered by Nawaschin and ensures that food is stored only when an embryo is actually formed."
                },
                {
                    id: "d29b45",
                    text: "The endosperm of an angiosperm seed is:",
                    options: [
                        { key: "a", text: "Haploid" },
                        { key: "b", text: "Diploid" },
                        { key: "c", text: "Triploid" },
                        { key: "d", text: "Tetraploid" }
                    ],
                    answer: "c",
                    explanation: "One male gamete ($n$) fuses with the two polar nuclei ($n + n$) of the central cell, so the primary endosperm nucleus and the tissue formed from it are <strong>triploid ($3n$)</strong>."
                },
                {
                    id: "d29b46",
                    text: "Free central placentation, in which the ovules are borne on a central column in a one-chambered ovary, is seen in:",
                    options: [
                        { key: "a", text: "Pea" },
                        { key: "b", text: "Mustard" },
                        { key: "c", text: "<em>Dianthus</em>" },
                        { key: "d", text: "Tomato" }
                    ],
                    answer: "c",
                    explanation: "In <strong>free central</strong> placentation the septa break down, leaving a naked central column bearing the ovules — as in <em>Dianthus</em> and <em>Primula</em>. Pea shows marginal, mustard parietal and tomato axile placentation."
                },
                {
                    id: "d29b47",
                    text: "In a floral formula, the symbol % is used to indicate that the flower is:",
                    options: [
                        { key: "a", text: "Actinomorphic" },
                        { key: "b", text: "Epigynous" },
                        { key: "c", text: "Unisexual" },
                        { key: "d", text: "Zygomorphic" }
                    ],
                    answer: "d",
                    explanation: "<strong>%</strong> denotes a <strong>zygomorphic</strong> (bilaterally symmetrical) flower such as that of the pea, while $\\oplus$ denotes an actinomorphic one. A line above the G shows an inferior ovary and a line below it a superior ovary."
                },
                {
                    id: "d29b48",
                    text: "Tetradynamous stamens, four long and two short, are characteristic of the family:",
                    options: [
                        { key: "a", text: "Fabaceae" },
                        { key: "b", text: "Solanaceae" },
                        { key: "c", text: "Brassicaceae" },
                        { key: "d", text: "Liliaceae" }
                    ],
                    answer: "c",
                    explanation: "The <strong>Brassicaceae</strong> have six stamens written $\\mathrm{A_{2+4}}$ — two short in the outer whorl and four long in the inner. The Fabaceae have diadelphous $(9)+1$ stamens and the Solanaceae five epipetalous ones."
                },
                {
                    id: "d29b49",
                    text: "The commercial fibre of cotton is obtained from the:",
                    options: [
                        { key: "a", text: "Bark of the stem" },
                        { key: "b", text: "Epidermal hairs of the seed" },
                        { key: "c", text: "Veins of the leaf" },
                        { key: "d", text: "Wall of the fruit" }
                    ],
                    answer: "b",
                    explanation: "Cotton lint consists of long unicellular <strong>epidermal hairs growing from the seed coat</strong> of <em>Gossypium</em>. Jute and flax, in contrast, are bast (phloem) fibres taken from the stem."
                },
                {
                    id: "d29b50",
                    text: "Sal, the most valuable timber tree of the Nepalese Terai, is:",
                    options: [
                        { key: "a", text: "<em>Shorea robusta</em>" },
                        { key: "b", text: "<em>Rhododendron arboreum</em>" },
                        { key: "c", text: "<em>Abies spectabilis</em>" },
                        { key: "d", text: "<em>Betula utilis</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Shorea robusta</em></strong> forms nearly pure forests in the Terai and inner Terai up to about 1000 m and yields a hard, durable, termite-resistant timber. <em>Rhododendron arboreum</em> is the national flower and the other two are sub-alpine trees."
                }/* __BOT2__ */
            ]
        },
        {
            id: "acurrent29",
            name: "Alternating Current",
            subject: "Physics",
            accent: "blue",
            blurb: "Q51–100 · exam-style · peak, rms and mean values; R, L and C in an AC circuit; impedance and phase in series LCR; resonance and Q-factor; power and power factor; rectification.",
            questions: [
                {
                    id: "d29p51",
                    text: "The peak value of an alternating current is $I_0$. Its root mean square value is:",
                    options: [
                        { key: "a", text: "$I_0/\\sqrt{2}$" },
                        { key: "b", text: "$I_0\\sqrt{2}$" },
                        { key: "c", text: "$2I_0/\\pi$" },
                        { key: "d", text: "$I_0/2$" }
                    ],
                    answer: "a",
                    explanation: "For a sinusoidal current, $I_{rms} = \\dfrac{I_0}{\\sqrt{2}} = 0.707\\,I_0$. The rms (virtual or effective) value is the steady direct current that would produce the same heating in the same resistance in the same time."
                },
                {
                    id: "d29p52",
                    text: "When the domestic supply is described as 220 V, the figure quoted is the:",
                    options: [
                        { key: "a", text: "Peak value" },
                        { key: "b", text: "Mean value over a full cycle" },
                        { key: "c", text: "Root mean square value" },
                        { key: "d", text: "Peak-to-peak value" }
                    ],
                    answer: "c",
                    explanation: "All AC voltages and currents are quoted as <strong>rms values</strong>, because these are what ordinary AC meters read and what determine the heating produced. The peak of a 220 V supply is $220\\sqrt{2} \\approx 311$ V."
                },
                {
                    id: "d29p53",
                    text: "The average value of a sinusoidal alternating current over one complete cycle is:",
                    options: [
                        { key: "a", text: "Equal to the peak value" },
                        { key: "b", text: "$0.707\\,I_0$" },
                        { key: "c", text: "$0.637\\,I_0$" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "d",
                    explanation: "The current is positive for one half cycle and equally negative for the next, so the areas cancel and the mean over a <strong>full cycle is zero</strong>. This is why a moving-coil galvanometer shows no deflection with AC, and why the mean is taken over a half cycle instead."
                },
                {
                    id: "d29p54",
                    text: "The mean value of a sinusoidal alternating current over one half cycle is:",
                    options: [
                        { key: "a", text: "$I_0/\\sqrt{2}$" },
                        { key: "b", text: "$I_0/2$" },
                        { key: "c", text: "$\\pi I_0/2$" },
                        { key: "d", text: "$2I_0/\\pi$" }
                    ],
                    answer: "d",
                    explanation: "Averaging $I_0\\sin\\omega t$ over half a cycle gives $I_{av} = \\dfrac{2I_0}{\\pi} = 0.637\\,I_0$. Note that the rms value $0.707\\,I_0$ is a little larger."
                },
                {
                    id: "d29p55",
                    text: "The form factor of a sinusoidal alternating current, the ratio of its rms value to its mean value over a half cycle, is about:",
                    options: [
                        { key: "a", text: "0.90" },
                        { key: "b", text: "1.00" },
                        { key: "c", text: "1.11" },
                        { key: "d", text: "1.41" }
                    ],
                    answer: "c",
                    explanation: "Form factor $= \\dfrac{I_{rms}}{I_{av}} = \\dfrac{0.707\\,I_0}{0.637\\,I_0} \\approx \\mathbf{1.11}$. The ratio of peak to rms, called the peak factor, is $\\sqrt{2} = 1.41$."
                },
                {
                    id: "d29p56",
                    text: "An AC ammeter of the hot-wire type can measure alternating current because it depends on the:",
                    options: [
                        { key: "a", text: "Magnetic effect, which reverses with the current" },
                        { key: "b", text: "Heating effect, which is independent of direction" },
                        { key: "c", text: "Chemical effect of the current on an electrolyte" },
                        { key: "d", text: "Electrostatic attraction between two charged plates" }
                    ],
                    answer: "b",
                    explanation: "Heat produced is proportional to $I^2$, so it is <strong>positive whichever way the current flows</strong> and does not average to zero. A moving-coil meter, which depends on the magnetic effect, would simply vibrate about zero on AC and so reads only DC."
                },
                {
                    id: "d29p57",
                    text: "The frequency of the alternating mains supply in Nepal is 50 Hz. The time period of one cycle is:",
                    options: [
                        { key: "a", text: "0.01 s" },
                        { key: "b", text: "0.02 s" },
                        { key: "c", text: "0.05 s" },
                        { key: "d", text: "50 s" }
                    ],
                    answer: "b",
                    explanation: "$T = \\dfrac{1}{f} = \\dfrac{1}{50} = \\mathbf{0.02\\ s}$. Each half cycle therefore lasts 0.01 s."
                },
                {
                    id: "d29p58",
                    text: "How many times does a 50 Hz alternating current become zero in one second?",
                    options: [
                        { key: "a", text: "50" },
                        { key: "b", text: "200" },
                        { key: "c", text: "25" },
                        { key: "d", text: "100" }
                    ],
                    answer: "d",
                    explanation: "A sine wave passes through zero <strong>twice in every cycle</strong> — once going up and once coming down. With 50 cycles in a second, the current is zero $50 \\times 2 = \\mathbf{100}$ times. It likewise reaches its peak value 100 times."
                },
                {
                    id: "d29p59",
                    text: "The rms value of an alternating voltage is 220 V. Its peak value is nearly:",
                    options: [
                        { key: "a", text: "156 V" },
                        { key: "b", text: "220 V" },
                        { key: "c", text: "311 V" },
                        { key: "d", text: "440 V" }
                    ],
                    answer: "c",
                    explanation: "$V_0 = \\sqrt{2}\\,V_{rms} = 1.414 \\times 220 \\approx \\mathbf{311\\ V}$. This is why the insulation of an appliance running on a 220 V supply must withstand more than 300 V."
                },
                {
                    id: "d29p60",
                    text: "Alternating current cannot be used for electroplating because:",
                    options: [
                        { key: "a", text: "Its heating effect is too small to be useful" },
                        { key: "b", text: "It reverses its direction, so no steady deposition occurs" },
                        { key: "c", text: "It cannot pass through an electrolyte at all" },
                        { key: "d", text: "It produces no magnetic effect around the wire" }
                    ],
                    answer: "b",
                    explanation: "Electroplating and electrolysis need current in <strong>one fixed direction</strong> so that the metal is deposited steadily on the cathode. With AC the electrodes exchange roles every half cycle, so metal deposited in one half is stripped off in the next. Charging a battery likewise needs DC."
                },
                {
                    id: "d29p61",
                    text: "In an AC circuit containing a pure resistor, the current and the applied voltage are:",
                    options: [
                        { key: "a", text: "In the same phase" },
                        { key: "b", text: "Out of phase by $\\pi/2$, current leading" },
                        { key: "c", text: "Out of phase by $\\pi/2$, current lagging" },
                        { key: "d", text: "Out of phase by $\\pi$" }
                    ],
                    answer: "a",
                    explanation: "A resistor offers no reactance, so the current follows the voltage instant by instant and the <strong>phase difference is zero</strong>. Consequently a resistor consumes power at all times and its power factor is 1."
                },
                {
                    id: "d29p62",
                    text: "In an AC circuit containing a pure inductor, the current:",
                    options: [
                        { key: "a", text: "Leads the voltage by $\\pi/2$" },
                        { key: "b", text: "Lags behind the voltage by $\\pi$" },
                        { key: "c", text: "Is in phase with the voltage" },
                        { key: "d", text: "Lags behind the voltage by $\\pi/2$" }
                    ],
                    answer: "d",
                    explanation: "The back emf of the coil opposes any change of current, so the current builds up late — it <strong>lags the voltage by 90&deg;</strong> ($\\pi/2$ radian) in a purely inductive circuit."
                },
                {
                    id: "d29p63",
                    text: "In an AC circuit containing a pure capacitor, the current:",
                    options: [
                        { key: "a", text: "Lags behind the voltage by $\\pi/2$" },
                        { key: "b", text: "Is in phase with the voltage" },
                        { key: "c", text: "Leads the voltage by $\\pi/2$" },
                        { key: "d", text: "Leads the voltage by $\\pi$" }
                    ],
                    answer: "c",
                    explanation: "A capacitor draws the largest current when it is uncharged and the voltage across it is least, so the <strong>current leads the voltage by 90&deg;</strong>. Inductance and capacitance therefore have exactly opposite effects on phase."
                },
                {
                    id: "d29p64",
                    text: "A coil of inductance 0.1 H is connected to a 50 Hz supply. Its inductive reactance is nearly:",
                    options: [
                        { key: "a", text: "$5\\ \\Omega$" },
                        { key: "b", text: "$15.7\\ \\Omega$" },
                        { key: "c", text: "$31.4\\ \\Omega$" },
                        { key: "d", text: "$62.8\\ \\Omega$" }
                    ],
                    answer: "c",
                    explanation: "$X_L = \\omega L = 2\\pi f L = 2 \\times 3.14 \\times 50 \\times 0.1 = \\mathbf{31.4\\ \\Omega}$."
                },
                {
                    id: "d29p65",
                    text: "The reactance of a capacitor of capacitance $C$ in a circuit of angular frequency $\\omega$ is:",
                    options: [
                        { key: "a", text: "$\\omega C$" },
                        { key: "b", text: "$1/(\\omega C)$" },
                        { key: "c", text: "$\\omega/C$" },
                        { key: "d", text: "$\\omega^2 C$" }
                    ],
                    answer: "b",
                    explanation: "Capacitive reactance $X_C = \\dfrac{1}{\\omega C} = \\dfrac{1}{2\\pi f C}$, measured in ohms. It is <em>inversely</em> proportional to both the frequency and the capacitance."
                },
                {
                    id: "d29p66",
                    text: "As the frequency of the supply is increased, the inductive reactance and the capacitive reactance respectively:",
                    options: [
                        { key: "a", text: "Increase and decrease" },
                        { key: "b", text: "Decrease and increase" },
                        { key: "c", text: "Both increase" },
                        { key: "d", text: "Both decrease" }
                    ],
                    answer: "a",
                    explanation: "$X_L = 2\\pi f L$ is <strong>directly</strong> proportional to frequency while $X_C = 1/(2\\pi f C)$ is <strong>inversely</strong> proportional to it. This opposite behaviour is what makes resonance possible at one particular frequency."
                },
                {
                    id: "d29p67",
                    text: "For a steady direct current, that is at zero frequency, a capacitor and an inductor respectively behave as:",
                    options: [
                        { key: "a", text: "A short circuit and an open circuit" },
                        { key: "b", text: "Short circuits in both cases" },
                        { key: "c", text: "Open circuits in both cases" },
                        { key: "d", text: "An open circuit and a plain conducting wire" }
                    ],
                    answer: "d",
                    explanation: "At $f = 0$, $X_C = 1/(2\\pi f C) \\rightarrow \\infty$, so the capacitor <strong>blocks DC</strong>; and $X_L = 2\\pi f L \\rightarrow 0$, so the inductor behaves as an ordinary <strong>wire of negligible resistance</strong>. This is the basis of using capacitors to block DC and pass AC."
                },
                {
                    id: "d29p68",
                    text: "A choke coil is preferred to a resistor for reducing current in an AC circuit because the choke:",
                    options: [
                        { key: "a", text: "Is cheaper and smaller than a resistor" },
                        { key: "b", text: "Reduces the current without dissipating power" },
                        { key: "c", text: "Increases the frequency of the supply" },
                        { key: "d", text: "Converts the alternating current into direct current" }
                    ],
                    answer: "b",
                    explanation: "An ideal <strong>choke</strong> is a pure inductance, and the phase difference between its voltage and current is 90&deg;, so $\\cos\\phi = 0$ and the average power consumed is <strong>zero</strong>. A resistor would waste the same energy as heat. Chokes are used in fluorescent tube circuits for this reason."
                },
                {
                    id: "d29p69",
                    text: "A resistor of $100\\ \\Omega$ is connected across a 200 V alternating supply. The power consumed is:",
                    options: [
                        { key: "a", text: "200 W" },
                        { key: "b", text: "400 W" },
                        { key: "c", text: "800 W" },
                        { key: "d", text: "2 W" }
                    ],
                    answer: "b",
                    explanation: "For a pure resistance the power factor is 1, so $P = \\dfrac{V_{rms}^2}{R} = \\dfrac{200^2}{100} = \\mathbf{400\\ W}$. Both the voltage and the current quoted for AC are rms values, which is exactly why they may be used in the DC formulae."
                },
                {
                    id: "d29p70",
                    text: "A $10\\ \\mu\\mathrm{F}$ capacitor is joined to a source of angular frequency $1000\\ \\mathrm{rad\\,s^{-1}}$. Its reactance is:",
                    options: [
                        { key: "a", text: "$10\\ \\Omega$" },
                        { key: "b", text: "$1000\\ \\Omega$" },
                        { key: "c", text: "$0.01\\ \\Omega$" },
                        { key: "d", text: "$100\\ \\Omega$" }
                    ],
                    answer: "d",
                    explanation: "$X_C = \\dfrac{1}{\\omega C} = \\dfrac{1}{1000 \\times 10 \\times 10^{-6}} = \\dfrac{1}{10^{-2}} = \\mathbf{100\\ \\Omega}$."
                },
                {
                    id: "d29p71",
                    text: "The impedance of a series LCR circuit is given by:",
                    options: [
                        { key: "a", text: "$R + X_L + X_C$" },
                        { key: "b", text: "$\\sqrt{R^2 + (X_L - X_C)^2}$" },
                        { key: "c", text: "$\\sqrt{R^2 + (X_L + X_C)^2}$" },
                        { key: "d", text: "$\\sqrt{R^2 - X_L X_C}$" }
                    ],
                    answer: "b",
                    explanation: "$V_L$ and $V_C$ are 180&deg; apart, so their <em>difference</em> is combined with $V_R$ at right angles: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$. Impedance is measured in ohms and plays the part of resistance in $V = IZ$."
                },
                {
                    id: "d29p72",
                    text: "In a series LCR circuit $R = 3\\ \\Omega$, $X_L = 8\\ \\Omega$ and $X_C = 4\\ \\Omega$. The impedance of the circuit is:",
                    options: [
                        { key: "a", text: "$15\\ \\Omega$" },
                        { key: "b", text: "$7\\ \\Omega$" },
                        { key: "c", text: "$5\\ \\Omega$" },
                        { key: "d", text: "$4\\ \\Omega$" }
                    ],
                    answer: "c",
                    explanation: "$X_L - X_C = 8 - 4 = 4\\ \\Omega$, so $Z = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\mathbf{5\\ \\Omega}$ — the familiar 3-4-5 triangle that the examiners are fond of."
                },
                {
                    id: "d29p73",
                    text: "In a series LCR circuit the phase angle $\\phi$ between the current and the applied voltage is given by:",
                    options: [
                        { key: "a", text: "$\\tan\\phi = \\dfrac{X_L - X_C}{R}$" },
                        { key: "b", text: "$\\tan\\phi = \\dfrac{R}{X_L - X_C}$" },
                        { key: "c", text: "$\\sin\\phi = \\dfrac{R}{Z}$" },
                        { key: "d", text: "$\\cos\\phi = \\dfrac{X_L - X_C}{Z}$" }
                    ],
                    answer: "a",
                    explanation: "From the impedance triangle, $\\tan\\phi = \\dfrac{X_L - X_C}{R}$, while $\\cos\\phi = \\dfrac{R}{Z}$ is the power factor. A positive $\\phi$ means the current lags the voltage."
                },
                {
                    id: "d29p74",
                    text: "In a series LCR circuit in which $X_L > X_C$, the circuit behaves as though it were:",
                    options: [
                        { key: "a", text: "Purely resistive, with the current in phase" },
                        { key: "b", text: "Capacitive, with the current leading the voltage" },
                        { key: "c", text: "Inductive, with the current lagging the voltage" },
                        { key: "d", text: "At resonance, with the impedance a minimum" }
                    ],
                    answer: "c",
                    explanation: "When $X_L$ exceeds $X_C$ the net reactance is inductive, so the <strong>current lags</strong> the applied voltage and $\\phi$ is positive. If $X_C > X_L$ the circuit is capacitive and the current leads; if they are equal the circuit is resonant and purely resistive."
                },
                {
                    id: "d29p75",
                    text: "A coil of resistance $6\\ \\Omega$ and inductive reactance $8\\ \\Omega$ is connected to a 100 V AC supply. The current in the circuit is:",
                    options: [
                        { key: "a", text: "10 A" },
                        { key: "b", text: "12.5 A" },
                        { key: "c", text: "16.7 A" },
                        { key: "d", text: "7.1 A" }
                    ],
                    answer: "a",
                    explanation: "$Z = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\ \\Omega$, so $I = \\dfrac{V}{Z} = \\dfrac{100}{10} = \\mathbf{10\\ A}$."
                },
                {
                    id: "d29p76",
                    text: "In a series AC circuit containing R, L and C, the quantity that is the same for all three components is the:",
                    options: [
                        { key: "a", text: "Current" },
                        { key: "b", text: "Voltage" },
                        { key: "c", text: "Power" },
                        { key: "d", text: "Phase angle" }
                    ],
                    answer: "a",
                    explanation: "In a series circuit the same <strong>current</strong> passes through every element. The voltages across them differ in both magnitude and phase and must therefore be added <em>vectorially</em>, not arithmetically."
                },
                {
                    id: "d29p77",
                    text: "In a series LCR circuit the voltages across R, L and C are 30 V, 80 V and 40 V respectively. The voltage of the source is:",
                    options: [
                        { key: "a", text: "150 V" },
                        { key: "b", text: "70 V" },
                        { key: "c", text: "90 V" },
                        { key: "d", text: "50 V" }
                    ],
                    answer: "d",
                    explanation: "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{30^2 + (80-40)^2} = \\sqrt{900 + 1600} = \\mathbf{50\\ V}$. Note that the voltage across L alone (80 V) exceeds the supply voltage — perfectly possible in an AC circuit."
                },
                {
                    id: "d29p78",
                    text: "The voltages across the inductor and the capacitor of a series LCR circuit differ in phase by:",
                    options: [
                        { key: "a", text: "$0^\\circ$" },
                        { key: "b", text: "$45^\\circ$" },
                        { key: "c", text: "$180^\\circ$" },
                        { key: "d", text: "$90^\\circ$" }
                    ],
                    answer: "c",
                    explanation: "$V_L$ leads the current by 90&deg; and $V_C$ lags it by 90&deg;, so the two are <strong>180&deg; out of phase</strong> — exactly opposite. That is why only their difference $(V_L - V_C)$ appears in the expression for the resultant voltage."
                },
                {
                    id: "d29p79",
                    text: "A resistance of $40\\ \\Omega$ is joined in series with a capacitor of reactance $30\\ \\Omega$ across an AC source. The impedance of the circuit is:",
                    options: [
                        { key: "a", text: "$70\\ \\Omega$" },
                        { key: "b", text: "$50\\ \\Omega$" },
                        { key: "c", text: "$10\\ \\Omega$" },
                        { key: "d", text: "$35\\ \\Omega$" }
                    ],
                    answer: "b",
                    explanation: "$Z = \\sqrt{R^2 + X_C^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\mathbf{50\\ \\Omega}$. Impedance is never the simple sum of resistance and reactance."
                },
                {
                    id: "d29p80",
                    text: "In a purely inductive circuit the impedance is equal to:",
                    options: [
                        { key: "a", text: "The resistance R" },
                        { key: "b", text: "Zero at every frequency" },
                        { key: "c", text: "$\\sqrt{R^2 + X_L^2}$" },
                        { key: "d", text: "The inductive reactance $X_L$" }
                    ],
                    answer: "d",
                    explanation: "With $R = 0$ and $X_C = 0$, $Z = \\sqrt{0 + (X_L - 0)^2} = \\mathbf{X_L}$. The opposition offered is then purely reactive, and no power is dissipated."
                },
                {
                    id: "d29p81",
                    text: "A series LCR circuit is said to be at resonance when:",
                    options: [
                        { key: "a", text: "$X_L + X_C = R$" },
                        { key: "b", text: "$X_L = R$" },
                        { key: "c", text: "$X_C = R$" },
                        { key: "d", text: "$X_L = X_C$" }
                    ],
                    answer: "d",
                    explanation: "At resonance the inductive and capacitive reactances are <strong>equal and opposite</strong>, so they cancel. The circuit then behaves as if it contained the resistance alone."
                },
                {
                    id: "d29p82",
                    text: "The resonant frequency of a series LCR circuit does <em>not</em> depend on:",
                    options: [
                        { key: "a", text: "The inductance L" },
                        { key: "b", text: "The capacitance C" },
                        { key: "c", text: "The resistance R" },
                        { key: "d", text: "The product LC" }
                    ],
                    answer: "c",
                    explanation: "Since $f = \\dfrac{1}{2\\pi\\sqrt{LC}}$, the resonant frequency is fixed by L and C alone. The <strong>resistance</strong> does not shift the peak — it only controls how sharp it is, that is the Q-factor and the current at resonance."
                },
                {
                    id: "d29p83",
                    text: "At resonance the impedance of a series LCR circuit is:",
                    options: [
                        { key: "a", text: "Maximum and equal to $X_L + X_C$" },
                        { key: "b", text: "Minimum and equal to R" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "Infinite" }
                    ],
                    answer: "b",
                    explanation: "With the reactances cancelling, $Z = \\sqrt{R^2 + 0} = \\mathbf{R}$, the smallest value it can take. The current is therefore a <strong>maximum</strong> at resonance, which is why the series resonant circuit is called an <em>acceptor</em>."
                },
                {
                    id: "d29p84",
                    text: "At resonance in a series LCR circuit, the phase angle between the current and the voltage and the power factor are respectively:",
                    options: [
                        { key: "a", text: "$0^\\circ$ and 1" },
                        { key: "b", text: "$90^\\circ$ and 0" },
                        { key: "c", text: "$45^\\circ$ and 0.707" },
                        { key: "d", text: "$180^\\circ$ and $-1$" }
                    ],
                    answer: "a",
                    explanation: "Since $\\tan\\phi = \\dfrac{X_L-X_C}{R} = 0$, the phase angle is <strong>zero</strong> and $\\cos\\phi = \\mathbf{1}$. The circuit is purely resistive and the power transferred is a maximum."
                },
                {
                    id: "d29p85",
                    text: "The tuning circuit of a radio receiver makes use of:",
                    options: [
                        { key: "a", text: "Electrical resonance" },
                        { key: "b", text: "Self induction only" },
                        { key: "c", text: "The heating effect of current" },
                        { key: "d", text: "Rectification by a diode" }
                    ],
                    answer: "a",
                    explanation: "Turning the tuning knob changes the capacitance so that the circuit's <strong>resonant frequency</strong> matches that of the desired station. At resonance that signal produces the largest current, and all other stations are rejected."
                },
                {
                    id: "d29p86",
                    text: "A tuned circuit has $L = 1\\ \\mathrm{mH}$ and $C = 1\\ \\mu\\mathrm{F}$. Its resonant frequency is nearly:",
                    options: [
                        { key: "a", text: "5 kHz" },
                        { key: "b", text: "500 Hz" },
                        { key: "c", text: "50 kHz" },
                        { key: "d", text: "1 MHz" }
                    ],
                    answer: "a",
                    explanation: "$f = \\dfrac{1}{2\\pi\\sqrt{LC}} = \\dfrac{1}{2\\pi\\sqrt{10^{-3} \\times 10^{-6}}} = \\dfrac{1}{2\\pi \\times 3.16 \\times 10^{-5}} \\approx \\mathbf{5\\ kHz}$."
                },
                {
                    id: "d29p87",
                    text: "The quality factor (Q-factor) of a series resonant circuit is a measure of:",
                    options: [
                        { key: "a", text: "The total power wasted as heat" },
                        { key: "b", text: "The sharpness of the resonance" },
                        { key: "c", text: "The peak value of the applied voltage" },
                        { key: "d", text: "The rate at which the frequency changes" }
                    ],
                    answer: "b",
                    explanation: "$Q = \\dfrac{\\omega L}{R} = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}$ measures how <strong>sharp and selective</strong> the resonance peak is. A small resistance gives a high Q, a narrow band and better selectivity in a tuner."
                },
                {
                    id: "d29p88",
                    text: "At resonance a <em>parallel</em> LC circuit differs from a series LCR circuit in that its impedance is:",
                    options: [
                        { key: "a", text: "Minimum, so the current from the source is maximum" },
                        { key: "b", text: "Equal to R, exactly as in the series circuit" },
                        { key: "c", text: "Zero, so the circuit behaves as a short circuit" },
                        { key: "d", text: "Maximum, so the current from the source is minimum" }
                    ],
                    answer: "d",
                    explanation: "A parallel resonant circuit has <strong>maximum impedance and minimum line current</strong>, so it is called a <em>rejector</em> circuit; the series circuit is an <em>acceptor</em>. Large currents nevertheless circulate within the L-C loop itself."
                },
                {
                    id: "d29p89",
                    text: "The average power consumed in an AC circuit is given by:",
                    options: [
                        { key: "a", text: "$V_{rms}I_{rms}$" },
                        { key: "b", text: "$V_0I_0$" },
                        { key: "c", text: "$V_{rms}I_{rms}\\cos\\phi$" },
                        { key: "d", text: "$V_{rms}I_{rms}\\sin\\phi$" }
                    ],
                    answer: "c",
                    explanation: "The true power is $P = V_{rms}I_{rms}\\cos\\phi$, where $\\cos\\phi$ is the <strong>power factor</strong>. The product $V_{rms}I_{rms}$ alone is the <em>apparent</em> power, measured in volt-ampere rather than watt."
                },
                {
                    id: "d29p90",
                    text: "The power factor of an AC circuit is equal to:",
                    options: [
                        { key: "a", text: "$Z/R$" },
                        { key: "b", text: "$R/Z$" },
                        { key: "c", text: "$X_L/R$" },
                        { key: "d", text: "$R/X_C$" }
                    ],
                    answer: "b",
                    explanation: "From the impedance triangle, $\\cos\\phi = \\dfrac{R}{Z}$. It ranges from 1 for a purely resistive circuit to 0 for a purely reactive one, and it can never exceed 1."
                },
                {
                    id: "d29p91",
                    text: "The component of the current that consumes no power in an AC circuit is called the:",
                    options: [
                        { key: "a", text: "Wattful current, $I\\cos\\phi$" },
                        { key: "b", text: "Displacement current" },
                        { key: "c", text: "Eddy current" },
                        { key: "d", text: "Wattless current, $I\\sin\\phi$" }
                    ],
                    answer: "d",
                    explanation: "The current can be resolved into $I\\cos\\phi$ in phase with the voltage, which does the useful work, and $I\\sin\\phi$ at right angles to it — the <strong>wattless or idle current</strong>, which merely shuttles energy back and forth."
                },
                {
                    id: "d29p92",
                    text: "An AC circuit draws 5 A from a 220 V supply at a power factor of 0.8. The power consumed is:",
                    options: [
                        { key: "a", text: "1100 W" },
                        { key: "b", text: "880 W" },
                        { key: "c", text: "275 W" },
                        { key: "d", text: "176 W" }
                    ],
                    answer: "b",
                    explanation: "$P = V_{rms}I_{rms}\\cos\\phi = 220 \\times 5 \\times 0.8 = \\mathbf{880\\ W}$. The apparent power is $220 \\times 5 = 1100$ VA, so 220 VA is not converted into useful work."
                },
                {
                    id: "d29p93",
                    text: "The power factor of an industrial load with large inductive motors is improved by connecting:",
                    options: [
                        { key: "a", text: "A capacitor in parallel with the load" },
                        { key: "b", text: "An extra inductor in series with the load" },
                        { key: "c", text: "A resistor in series with the load" },
                        { key: "d", text: "A diode in series with the load" }
                    ],
                    answer: "a",
                    explanation: "An inductive load makes the current lag; a <strong>capacitor</strong> makes it lead, so adding capacitance cancels part of the lag, brings $\\phi$ towards zero and raises $\\cos\\phi$. Less current is then needed for the same power, cutting the $I^2R$ losses in the supply lines."
                },
                {
                    id: "d29p94",
                    text: "The apparent power in an AC circuit is measured in:",
                    options: [
                        { key: "a", text: "Watt" },
                        { key: "b", text: "Volt-ampere" },
                        { key: "c", text: "Joule" },
                        { key: "d", text: "Ohm" }
                    ],
                    answer: "b",
                    explanation: "Apparent power $= V_{rms}I_{rms}$ and is expressed in <strong>volt-ampere (VA)</strong> or kVA, to distinguish it from the true power in watt. The ratio of true to apparent power is the power factor."
                },
                {
                    id: "d29p95",
                    text: "The power factor of a circuit containing a pure resistance and one containing a pure inductance are respectively:",
                    options: [
                        { key: "a", text: "1 and 0" },
                        { key: "b", text: "0 and 1" },
                        { key: "c", text: "1 and 1" },
                        { key: "d", text: "0.5 and 0.5" }
                    ],
                    answer: "a",
                    explanation: "For a resistor $\\phi = 0$, so $\\cos\\phi = \\mathbf{1}$ and all the energy supplied is dissipated. For a pure inductor $\\phi = 90^\\circ$, so $\\cos\\phi = \\mathbf{0}$ and no power is consumed at all."
                },
                {
                    id: "d29p96",
                    text: "A junction diode can be used as a rectifier because it:",
                    options: [
                        { key: "a", text: "Increases the frequency of the supply" },
                        { key: "b", text: "Conducts equally well in both directions" },
                        { key: "c", text: "Stores charge like a capacitor" },
                        { key: "d", text: "Conducts appreciably only when it is forward biased" }
                    ],
                    answer: "d",
                    explanation: "A p-n junction offers a very low resistance in <strong>forward bias</strong> and an extremely high resistance in reverse bias, so it allows current in one direction only. This one-way property is what converts alternating current into direct current."
                },
                {
                    id: "d29p97",
                    text: "A half-wave rectifier is supplied with a 50 Hz alternating voltage. The frequency of the ripple in its output is:",
                    options: [
                        { key: "a", text: "25 Hz" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "100 Hz" },
                        { key: "d", text: "50 Hz" }
                    ],
                    answer: "d",
                    explanation: "A half-wave rectifier passes only one half of each cycle, so one pulse is produced per cycle and the output ripple frequency equals the input, <strong>50 Hz</strong>. A full-wave rectifier gives two pulses per cycle, so its ripple frequency is 100 Hz."
                },
                {
                    id: "d29p98",
                    text: "The number of diodes used in a bridge rectifier is:",
                    options: [
                        { key: "a", text: "One" },
                        { key: "b", text: "Two" },
                        { key: "c", text: "Four" },
                        { key: "d", text: "Six" }
                    ],
                    answer: "c",
                    explanation: "A <strong>bridge rectifier</strong> uses <strong>four</strong> diodes arranged so that two conduct in each half cycle, giving full-wave rectification without needing a centre-tapped transformer."
                },
                {
                    id: "d29p99",
                    text: "Compared with a half-wave rectifier, a full-wave rectifier gives:",
                    options: [
                        { key: "a", text: "Lower efficiency and more ripple" },
                        { key: "b", text: "Higher efficiency and less ripple" },
                        { key: "c", text: "The same output in every respect" },
                        { key: "d", text: "An alternating output of double frequency" }
                    ],
                    answer: "b",
                    explanation: "A full-wave rectifier uses <em>both</em> halves of every cycle, so its output is smoother and its rectification efficiency is about 81 % against roughly 40 % for a half-wave circuit. The remaining ripple is removed by a filter."
                },
                {
                    id: "d29p100",
                    text: "A transformer works only on alternating current because its action depends on:",
                    options: [
                        { key: "a", text: "The heating effect of the current" },
                        { key: "b", text: "Electrostatic induction between the coils" },
                        { key: "c", text: "The chemical effect of the current" },
                        { key: "d", text: "A continuously changing magnetic flux" }
                    ],
                    answer: "d",
                    explanation: "A transformer works by <strong>mutual induction</strong>, and an emf is induced in the secondary only while the flux linked with it is <em>changing</em>. A steady direct current produces a constant flux, so no emf is induced and the transformer fails. This ease of changing voltage is the main reason electric power is transmitted as AC."
                }
            ]
        }
    ]
};

/* Day 29 covers two single units of the official MEC syllabus (2020, revised 2026):
   Botany unit 2 "Biodiversity" (weight 9) and the "Alternating currents" sub-topic of
   Physics unit 4 "Current electricity and magnetism" (weight 9). */
const DAY29_SYLLABUS = [
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Introduction: Classification, Hierarchy & Nomenclature", ids: ["d29b1", "d29b2", "d29b3", "d29b4", "d29b5"] },
            { name: "Monera & Virus", ids: ["d29b6", "d29b7", "d29b8", "d29b9", "d29b10", "d29b11", "d29b12"] },
            { name: "Fungi & Lichens", ids: ["d29b13", "d29b14", "d29b15", "d29b16", "d29b17", "d29b18", "d29b19"] },
            { name: "Algae", ids: ["d29b20", "d29b21", "d29b22", "d29b23", "d29b24", "d29b25"] },
            { name: "Bryophytes", ids: ["d29b26", "d29b27", "d29b28", "d29b29", "d29b30", "d29b31"] },
            { name: "Pteridophytes", ids: ["d29b32", "d29b33", "d29b34", "d29b35", "d29b36", "d29b37"] },
            { name: "Gymnosperms", ids: ["d29b38", "d29b39", "d29b40", "d29b41", "d29b42", "d29b43"] },
            { name: "Angiosperms & Economic Importance", ids: ["d29b44", "d29b45", "d29b46", "d29b47", "d29b48", "d29b49", "d29b50"] }
        ] }
    ] },
    { subject: "Physics", accent: "blue", topics: [
        { topic: "4. Current Electricity & Magnetism", weight: 9, subs: [
            { name: "AC Fundamentals: Peak, RMS and Mean Values", ids: ["d29p51", "d29p52", "d29p53", "d29p54", "d29p55", "d29p56", "d29p57", "d29p58", "d29p59", "d29p60"] },
            { name: "R, L and C in an AC Circuit; Reactance and Phase", ids: ["d29p61", "d29p62", "d29p63", "d29p64", "d29p65", "d29p66", "d29p67", "d29p68", "d29p69", "d29p70"] },
            { name: "Series LCR Circuits and Impedance", ids: ["d29p71", "d29p72", "d29p73", "d29p74", "d29p75", "d29p76", "d29p77", "d29p78", "d29p79", "d29p80"] },
            { name: "Resonance and Q-factor", ids: ["d29p81", "d29p82", "d29p83", "d29p84", "d29p85", "d29p86", "d29p87", "d29p88"] },
            { name: "Power in AC Circuits and Power Factor", ids: ["d29p89", "d29p90", "d29p91", "d29p92", "d29p93", "d29p94", "d29p95"] },
            { name: "Rectification using Diode", ids: ["d29p96", "d29p97", "d29p98", "d29p99", "d29p100"] }
        ] }
    ] }
];
DAY29.syllabus = DAY29_SYLLABUS;
