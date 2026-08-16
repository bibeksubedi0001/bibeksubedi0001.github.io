/* ============================================================
   DAY 28 — FLORAL DIVERSITY (EASY)
   100 questions · 75 minutes · 0.25 negative marking

     Classification, Monera & Virus ......... 22   d28b1  – d28b22
     Fungi, Lichens & Algae ................. 24   d28b23 – d28b46
     Bryophytes, Pteridophytes, Gymnosperms . 34   d28b47 – d28b80
     Angiosperms & Economic Botany .......... 20   d28b81 – d28b100

   Scope = Botany unit 2 "Biodiversity" of the official MEC
   syllabus (2020, revised 2026) — the plant kingdom from
   Monera to Angiosperms.

   DIFFICULTY: deliberately EASY. Nearly every item is a single-
   step recall of a standard textbook fact, with a short stem and
   clearly separated options — the "recall" band of the official
   50 : 30 : 20 recall : understanding : application ratio.
   Intended as a confidence and revision round, not a stress test.

   Questions are new: none repeats the Day 21, 22, 24 or 25
   Botany sets.
   ============================================================ */
const DAY28 = {
    day: 28,
    title: "Day 28",
    subtitle: "Floral Diversity · Monera to Angiosperms",
    durationMinutes: 75,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "clasmon28",
            name: "Classification, Monera & Virus",
            subject: "Botany",
            accent: "blue",
            blurb: "Q1–22 · easy recall · systems of classification, binomial nomenclature and taxonomic hierarchy; bacteria, cyanobacteria and viruses.",
            questions: [
                {
                    id: "d28b1",
                    text: "The scientist known as the Father of Taxonomy is:",
                    options: [
                        { key: "a", text: "Robert Whittaker" },
                        { key: "b", text: "Charles Darwin" },
                        { key: "c", text: "Carolus Linnaeus" },
                        { key: "d", text: "Gregor Mendel" }
                    ],
                    answer: "c",
                    explanation: "<strong>Carolus Linnaeus</strong> introduced binomial nomenclature in his book <em>Species Plantarum</em> (1753) and is called the Father of Taxonomy. Darwin proposed natural selection, Whittaker the five-kingdom system and Mendel the laws of inheritance."
                },
                {
                    id: "d28b2",
                    text: "In binomial nomenclature the name of an organism consists of:",
                    options: [
                        { key: "a", text: "One word only" },
                        { key: "b", text: "Four words" },
                        { key: "c", text: "Three words" },
                        { key: "d", text: "Two words" }
                    ],
                    answer: "d",
                    explanation: "A binomial name has exactly <strong>two words</strong> — the generic name followed by the specific epithet, as in <em>Mangifera indica</em>. 'Binomial' itself means 'two names'."
                },
                {
                    id: "d28b3",
                    text: "In the name <em>Mangifera indica</em>, the word <em>Mangifera</em> denotes the:",
                    options: [
                        { key: "a", text: "Family" },
                        { key: "b", text: "Species" },
                        { key: "c", text: "Genus" },
                        { key: "d", text: "Order" }
                    ],
                    answer: "c",
                    explanation: "The <strong>first word is the genus</strong> and always begins with a capital letter; the second word, <em>indica</em>, is the specific epithet and begins with a small letter."
                },
                {
                    id: "d28b4",
                    text: "In a printed book a scientific name is written in:",
                    options: [
                        { key: "a", text: "Bold letters" },
                        { key: "b", text: "Italics" },
                        { key: "c", text: "Capital letters throughout" },
                        { key: "d", text: "Ordinary type inside quotation marks" }
                    ],
                    answer: "b",
                    explanation: "Scientific names are printed in <strong>italics</strong>. When handwritten, the two words are underlined separately instead."
                },
                {
                    id: "d28b5",
                    text: "The five-kingdom system of classification was proposed by:",
                    options: [
                        { key: "a", text: "Carl Woese" },
                        { key: "b", text: "Ernst Haeckel" },
                        { key: "c", text: "Robert Whittaker" },
                        { key: "d", text: "Carolus Linnaeus" }
                    ],
                    answer: "c",
                    explanation: "<strong>Robert H. Whittaker</strong> proposed the five-kingdom system in 1969 — Monera, Protista, Fungi, Plantae and Animalia."
                },
                {
                    id: "d28b6",
                    text: "Which of the following is <em>not</em> one of Whittaker's five kingdoms?",
                    options: [
                        { key: "a", text: "Monera" },
                        { key: "b", text: "Protista" },
                        { key: "c", text: "Archaea" },
                        { key: "d", text: "Fungi" }
                    ],
                    answer: "c",
                    explanation: "The five kingdoms are <strong>Monera, Protista, Fungi, Plantae and Animalia</strong>. <em>Archaea</em> is a <em>domain</em> in Carl Woese's later three-domain system, not a kingdom of Whittaker's scheme."
                },
                {
                    id: "d28b7",
                    text: "The three domains proposed by Carl Woese are:",
                    options: [
                        { key: "a", text: "Bacteria, Archaea and Eukarya" },
                        { key: "b", text: "Monera, Protista and Plantae" },
                        { key: "c", text: "Plantae, Animalia and Fungi" },
                        { key: "d", text: "Algae, Fungi and Bryophyta" }
                    ],
                    answer: "a",
                    explanation: "Carl Woese (1990) placed all life in three domains — <strong>Bacteria, Archaea and Eukarya</strong> — on the basis of ribosomal RNA sequences. A domain ranks above a kingdom."
                },
                {
                    id: "d28b8",
                    text: "The basic and smallest unit of classification is the:",
                    options: [
                        { key: "a", text: "Genus" },
                        { key: "b", text: "Family" },
                        { key: "c", text: "Class" },
                        { key: "d", text: "Species" }
                    ],
                    answer: "d",
                    explanation: "The <strong>species</strong> is the basic unit of classification — a group of organisms that resemble one another closely and can interbreed among themselves."
                },
                {
                    id: "d28b9",
                    text: "Which taxonomic category includes the greatest number of organisms?",
                    options: [
                        { key: "a", text: "Kingdom" },
                        { key: "b", text: "Family" },
                        { key: "c", text: "Genus" },
                        { key: "d", text: "Species" }
                    ],
                    answer: "a",
                    explanation: "The <strong>kingdom</strong> is the highest and most inclusive category. Going down the hierarchy — Kingdom, Division, Class, Order, Family, Genus, Species — the number of organisms falls and the number of shared characters rises."
                },
                {
                    id: "d28b10",
                    text: "A collection of pressed, dried and mounted plant specimens is called a:",
                    options: [
                        { key: "a", text: "Botanical garden" },
                        { key: "b", text: "Zoological park" },
                        { key: "c", text: "Museum" },
                        { key: "d", text: "Herbarium" }
                    ],
                    answer: "d",
                    explanation: "A <strong>herbarium</strong> stores plants that have been pressed, dried and mounted on sheets, each with a label giving the name, family, place, date and collector. A botanical garden grows living plants instead."
                },
                {
                    id: "d28b11",
                    text: "Bacteria are called prokaryotes because they lack:",
                    options: [
                        { key: "a", text: "A cell wall" },
                        { key: "b", text: "Ribosomes" },
                        { key: "c", text: "A true nucleus" },
                        { key: "d", text: "Cytoplasm" }
                    ],
                    answer: "c",
                    explanation: "A prokaryote has <strong>no nuclear membrane</strong>, so its DNA lies free in the cytoplasm as a nucleoid. It also lacks mitochondria and plastids, but it does possess a cell wall, ribosomes and cytoplasm."
                },
                {
                    id: "d28b12",
                    text: "The cell wall of a bacterium is chiefly made of:",
                    options: [
                        { key: "a", text: "Cellulose" },
                        { key: "b", text: "Peptidoglycan" },
                        { key: "c", text: "Chitin" },
                        { key: "d", text: "Lignin" }
                    ],
                    answer: "b",
                    explanation: "The bacterial wall is built of <strong>peptidoglycan (murein)</strong>. Cellulose occurs in plant walls, chitin in fungal walls and lignin in wood."
                },
                {
                    id: "d28b13",
                    text: "The ribosomes present in a bacterial cell are of the type:",
                    options: [
                        { key: "a", text: "70S" },
                        { key: "b", text: "80S" },
                        { key: "c", text: "60S" },
                        { key: "d", text: "40S" }
                    ],
                    answer: "a",
                    explanation: "Prokaryotes have <strong>70S</strong> ribosomes (50S + 30S sub-units); eukaryotes have 80S ribosomes (60S + 40S) in their cytoplasm."
                },
                {
                    id: "d28b14",
                    text: "A rod-shaped bacterium is called a:",
                    options: [
                        { key: "a", text: "Coccus" },
                        { key: "b", text: "Bacillus" },
                        { key: "c", text: "Vibrio" },
                        { key: "d", text: "Spirillum" }
                    ],
                    answer: "b",
                    explanation: "By shape, bacteria are <strong>cocci</strong> (spherical), <strong>bacilli</strong> (rod-shaped), <strong>vibrios</strong> (comma-shaped) and <strong>spirilla</strong> (spirally coiled)."
                },
                {
                    id: "d28b15",
                    text: "<em>Vibrio cholerae</em>, the bacterium that causes cholera, is:",
                    options: [
                        { key: "a", text: "Spherical" },
                        { key: "b", text: "Rod-shaped" },
                        { key: "c", text: "Comma-shaped" },
                        { key: "d", text: "Spirally coiled" }
                    ],
                    answer: "c",
                    explanation: "A <strong>vibrio</strong> is a short, curved, <strong>comma-shaped</strong> bacterium, and <em>Vibrio cholerae</em> is the classic example."
                },
                {
                    id: "d28b16",
                    text: "The usual method of asexual reproduction in bacteria is:",
                    options: [
                        { key: "a", text: "Budding" },
                        { key: "b", text: "Spore formation by meiosis" },
                        { key: "c", text: "Conjugation" },
                        { key: "d", text: "Binary fission" }
                    ],
                    answer: "d",
                    explanation: "In <strong>binary fission</strong> the cell simply divides into two equal daughter cells once its DNA has been copied. Conjugation is a means of genetic recombination, not of multiplication."
                },
                {
                    id: "d28b17",
                    text: "Blue-green algae are more correctly called:",
                    options: [
                        { key: "a", text: "Cyanobacteria" },
                        { key: "b", text: "Green algae" },
                        { key: "c", text: "Red algae" },
                        { key: "d", text: "Diatoms" }
                    ],
                    answer: "a",
                    explanation: "Blue-green algae are prokaryotes and belong to kingdom Monera, so they are properly called <strong>cyanobacteria</strong>. They contain chlorophyll a with the blue pigment phycocyanin and release oxygen in photosynthesis."
                },
                {
                    id: "d28b18",
                    text: "In <em>Nostoc</em> and <em>Anabaena</em>, nitrogen fixation takes place in a thick-walled cell called the:",
                    options: [
                        { key: "a", text: "Akinete" },
                        { key: "b", text: "Hormogonium" },
                        { key: "c", text: "Heterocyst" },
                        { key: "d", text: "Endospore" }
                    ],
                    answer: "c",
                    explanation: "The pale, thick-walled <strong>heterocyst</strong> is the site of nitrogen fixation in filamentous cyanobacteria. An akinete is a resting spore and a hormogonium a short fragment used for vegetative multiplication."
                },
                {
                    id: "d28b19",
                    text: "The bacterium that fixes atmospheric nitrogen in the root nodules of leguminous plants is:",
                    options: [
                        { key: "a", text: "<em>Lactobacillus</em>" },
                        { key: "b", text: "<em>Rhizobium</em>" },
                        { key: "c", text: "<em>Clostridium tetani</em>" },
                        { key: "d", text: "<em>Streptomyces</em>" }
                    ],
                    answer: "b",
                    explanation: "<strong><em>Rhizobium</em></strong> lives symbiotically in the root nodules of legumes and fixes atmospheric nitrogen, which is why legumes enrich the soil. <em>Lactobacillus</em> curdles milk and <em>Streptomyces</em> yields antibiotics."
                },
                {
                    id: "d28b20",
                    text: "Viruses are called obligate parasites because they can multiply only:",
                    options: [
                        { key: "a", text: "In a nutrient broth in the laboratory" },
                        { key: "b", text: "In moist soil rich in humus" },
                        { key: "c", text: "Inside a living host cell" },
                        { key: "d", text: "In the presence of bright sunlight" }
                    ],
                    answer: "c",
                    explanation: "A virus has no ribosomes and no enzymes for making energy, so it must use the machinery of a <strong>living host cell</strong> to reproduce. Outside a host it behaves like a non-living chemical and can even be crystallised."
                },
                {
                    id: "d28b21",
                    text: "The protein coat that surrounds the nucleic acid of a virus is called the:",
                    options: [
                        { key: "a", text: "Cell wall" },
                        { key: "b", text: "Nucleoid" },
                        { key: "c", text: "Plasmid" },
                        { key: "d", text: "Capsid" }
                    ],
                    answer: "d",
                    explanation: "The <strong>capsid</strong> is the protein coat of a virus, built of many identical sub-units called <em>capsomeres</em>. It protects the nucleic acid and helps the virus attach to a host cell."
                },
                {
                    id: "d28b22",
                    text: "A virus that infects a bacterium is known as a:",
                    options: [
                        { key: "a", text: "Viroid" },
                        { key: "b", text: "Prion" },
                        { key: "c", text: "Bacteriophage" },
                        { key: "d", text: "Retrovirus" }
                    ],
                    answer: "c",
                    explanation: "A <strong>bacteriophage</strong> (or phage) is a virus that attacks bacteria; the T-even phages have a head and a tail. A viroid is naked infectious RNA and a prion an infectious protein."
                }
            ]
        },
        {
            id: "funalg28",
            name: "Fungi, Lichens & Algae",
            subject: "Botany",
            accent: "cyan",
            blurb: "Q23–46 · easy recall · characters of the four classes of fungi, yeast, Mucor and lichens; the three classes of algae and Spirogyra.",
            questions: [
                {
                    id: "d28b23",
                    text: "The cell wall of a fungus is chiefly made of:",
                    options: [
                        { key: "a", text: "Cellulose" },
                        { key: "b", text: "Chitin" },
                        { key: "c", text: "Peptidoglycan" },
                        { key: "d", text: "Pectin" }
                    ],
                    answer: "b",
                    explanation: "Fungal walls are built of <strong>chitin</strong>, sometimes called fungal cellulose. This is one of the reasons fungi were removed from the plant kingdom and given a kingdom of their own."
                },
                {
                    id: "d28b24",
                    text: "Fungi cannot prepare their own food because they lack:",
                    options: [
                        { key: "a", text: "A cell wall" },
                        { key: "b", text: "Mitochondria" },
                        { key: "c", text: "Chlorophyll" },
                        { key: "d", text: "A nucleus" }
                    ],
                    answer: "c",
                    explanation: "Fungi have no <strong>chlorophyll</strong>, so they are heterotrophic. They secrete enzymes and absorb the digested food, living as saprophytes, parasites or symbionts."
                },
                {
                    id: "d28b25",
                    text: "The reserve food material of fungi is:",
                    options: [
                        { key: "a", text: "Starch" },
                        { key: "b", text: "Glycogen" },
                        { key: "c", text: "Laminarin" },
                        { key: "d", text: "Floridean starch" }
                    ],
                    answer: "b",
                    explanation: "Fungi store <strong>glycogen</strong> and oil, exactly as animals do. Starch is the plant reserve, laminarin that of brown algae and floridean starch that of red algae."
                },
                {
                    id: "d28b26",
                    text: "The body of a fungus is made up of thread-like structures, each of which is called a:",
                    options: [
                        { key: "a", text: "Hypha" },
                        { key: "b", text: "Rhizoid" },
                        { key: "c", text: "Filament" },
                        { key: "d", text: "Stolon" }
                    ],
                    answer: "a",
                    explanation: "Each thread is a <strong>hypha</strong>, and the whole network of hyphae forming the fungal body is the <strong>mycelium</strong>."
                },
                {
                    id: "d28b27",
                    text: "Yeast normally reproduces asexually by:",
                    options: [
                        { key: "a", text: "Binary fission" },
                        { key: "b", text: "Conjugation" },
                        { key: "c", text: "Fragmentation" },
                        { key: "d", text: "Budding" }
                    ],
                    answer: "d",
                    explanation: "In <strong>budding</strong> a small outgrowth appears on the parent cell, receives a daughter nucleus and separates. Yeast is a unicellular fungus."
                },
                {
                    id: "d28b28",
                    text: "Yeast is used in the baking and brewing industries because it:",
                    options: [
                        { key: "a", text: "Fixes atmospheric nitrogen" },
                        { key: "b", text: "Produces the antibiotic penicillin" },
                        { key: "c", text: "Ferments sugar into alcohol and carbon dioxide" },
                        { key: "d", text: "Converts milk into curd" }
                    ],
                    answer: "c",
                    explanation: "<em>Saccharomyces cerevisiae</em> carries out alcoholic <strong>fermentation</strong>: the carbon dioxide makes bread rise and the ethanol is used in brewing."
                },
                {
                    id: "d28b29",
                    text: "<em>Rhizopus</em>, commonly seen growing on stale bread, is called:",
                    options: [
                        { key: "a", text: "Bread mould" },
                        { key: "b", text: "Puffball" },
                        { key: "c", text: "Toadstool" },
                        { key: "d", text: "Yeast" }
                    ],
                    answer: "a",
                    explanation: "<em>Rhizopus</em> is the common <strong>bread mould</strong>, a phycomycete with an aseptate (coenocytic) mycelium bearing stolons and rhizoids."
                },
                {
                    id: "d28b30",
                    text: "The mycelium of Phycomycetes such as <em>Mucor</em> is described as aseptate, which means that it:",
                    options: [
                        { key: "a", text: "Has cross walls at regular intervals" },
                        { key: "b", text: "Has no cross walls in its hyphae" },
                        { key: "c", text: "Is made of a single small cell" },
                        { key: "d", text: "Has no nucleus in the hyphae" }
                    ],
                    answer: "b",
                    explanation: "'Aseptate' means <strong>without septa (cross walls)</strong>, so the hypha is one long multinucleate tube — the coenocytic condition. All the higher classes of fungi have septate hyphae."
                },
                {
                    id: "d28b31",
                    text: "Ascomycetes are commonly called sac fungi because their sexual spores are produced inside a sac-like structure called the:",
                    options: [
                        { key: "a", text: "Basidium" },
                        { key: "b", text: "Sporangium" },
                        { key: "c", text: "Ascus" },
                        { key: "d", text: "Conidium" }
                    ],
                    answer: "c",
                    explanation: "The <strong>ascus</strong> usually contains eight <strong>ascospores</strong>. <em>Penicillium</em>, <em>Aspergillus</em>, <em>Neurospora</em> and yeast are ascomycetes."
                },
                {
                    id: "d28b32",
                    text: "The common mushroom <em>Agaricus</em> belongs to the class:",
                    options: [
                        { key: "a", text: "Phycomycetes" },
                        { key: "b", text: "Ascomycetes" },
                        { key: "c", text: "Basidiomycetes" },
                        { key: "d", text: "Deuteromycetes" }
                    ],
                    answer: "c",
                    explanation: "Mushrooms, puffballs, rusts and smuts are <strong>Basidiomycetes</strong> or club fungi. Their sexual spores, the basidiospores, are borne <em>outside</em> on a club-shaped basidium."
                },
                {
                    id: "d28b33",
                    text: "The antibiotic penicillin is obtained from:",
                    options: [
                        { key: "a", text: "<em>Penicillium notatum</em>" },
                        { key: "b", text: "<em>Agaricus campestris</em>" },
                        { key: "c", text: "<em>Saccharomyces cerevisiae</em>" },
                        { key: "d", text: "<em>Rhizopus stolonifer</em>" }
                    ],
                    answer: "a",
                    explanation: "Alexander Fleming discovered <strong>penicillin</strong> from the mould <em>Penicillium notatum</em> in 1928 — the world's first antibiotic."
                },
                {
                    id: "d28b34",
                    text: "A lichen is a symbiotic association between:",
                    options: [
                        { key: "a", text: "A fungus and a bacterium" },
                        { key: "b", text: "Two different algae" },
                        { key: "c", text: "A moss and a fungus" },
                        { key: "d", text: "An alga and a fungus" }
                    ],
                    answer: "d",
                    explanation: "In a lichen the <strong>fungus (mycobiont)</strong> gives shelter, water and minerals while the <strong>alga (phycobiont)</strong> prepares the food by photosynthesis. Lichens are also sensitive indicators of air pollution and pioneers on bare rock."
                },
                {
                    id: "d28b35",
                    text: "Algae are best described as:",
                    options: [
                        { key: "a", text: "Chlorophyll-bearing, mainly aquatic thallophytes" },
                        { key: "b", text: "Non-green land plants with true roots" },
                        { key: "c", text: "Prokaryotes without any cell wall" },
                        { key: "d", text: "Seed-bearing plants of moist habitats" }
                    ],
                    answer: "a",
                    explanation: "Algae are simple, mostly aquatic, autotrophic plants whose body is a <strong>thallus</strong> — there is no true root, stem, leaf or vascular tissue, and no embryo stage."
                },
                {
                    id: "d28b36",
                    text: "The branch of botany that deals with the study of algae is called:",
                    options: [
                        { key: "a", text: "Mycology" },
                        { key: "b", text: "Phycology" },
                        { key: "c", text: "Bryology" },
                        { key: "d", text: "Pteridology" }
                    ],
                    answer: "b",
                    explanation: "<strong>Phycology</strong> (or algology) is the study of algae. Mycology deals with fungi, bryology with mosses and liverworts and pteridology with ferns."
                },
                {
                    id: "d28b37",
                    text: "The pigments present in the green algae (Chlorophyceae) are:",
                    options: [
                        { key: "a", text: "Chlorophyll a and d with phycoerythrin" },
                        { key: "b", text: "Chlorophyll a and c with fucoxanthin" },
                        { key: "c", text: "Only phycocyanin" },
                        { key: "d", text: "Chlorophyll a and b" }
                    ],
                    answer: "d",
                    explanation: "Green algae have exactly the pigments of higher plants — <strong>chlorophyll a and b</strong> — which is why they are believed to be the ancestors of land plants."
                },
                {
                    id: "d28b38",
                    text: "The reserve food material of green algae is:",
                    options: [
                        { key: "a", text: "Glycogen" },
                        { key: "b", text: "Mannitol" },
                        { key: "c", text: "Laminarin" },
                        { key: "d", text: "Starch" }
                    ],
                    answer: "d",
                    explanation: "Green algae store true <strong>starch</strong>, usually deposited around a protein body called the pyrenoid inside the chloroplast."
                },
                {
                    id: "d28b39",
                    text: "The chloroplast of <em>Spirogyra</em> is:",
                    options: [
                        { key: "a", text: "Cup-shaped" },
                        { key: "b", text: "Star-shaped" },
                        { key: "c", text: "Ribbon-shaped and spirally coiled" },
                        { key: "d", text: "Girdle-shaped and flat" }
                    ],
                    answer: "c",
                    explanation: "The <strong>spirally coiled ribbon-like chloroplast</strong> gives <em>Spirogyra</em> both its name and its instant recognisability under the microscope."
                },
                {
                    id: "d28b40",
                    text: "<em>Spirogyra</em> is commonly known as pond silk or water silk because its filaments are:",
                    options: [
                        { key: "a", text: "Hard, brittle and easily broken by hand" },
                        { key: "b", text: "Slippery, due to a covering of mucilage" },
                        { key: "c", text: "Branched, woody and rough to the touch" },
                        { key: "d", text: "Bright red and encrusted with lime" }
                    ],
                    answer: "b",
                    explanation: "A slimy <strong>mucilage sheath</strong> covers the unbranched filaments and makes them slippery to touch, hence the names pond silk and water silk."
                },
                {
                    id: "d28b41",
                    text: "The thick-walled resting structure formed after two <em>Spirogyra</em> cells fuse is the:",
                    options: [
                        { key: "a", text: "Zygospore" },
                        { key: "b", text: "Zoospore" },
                        { key: "c", text: "Akinete" },
                        { key: "d", text: "Ascospore" }
                    ],
                    answer: "a",
                    explanation: "The fusion product is a diploid <strong>zygospore</strong> with a thick protective wall. It rests through unfavourable conditions and later germinates into a new haploid filament."
                },
                {
                    id: "d28b42",
                    text: "The brown colour of the Phaeophyceae is due to the pigment:",
                    options: [
                        { key: "a", text: "Phycoerythrin" },
                        { key: "b", text: "Phycocyanin" },
                        { key: "c", text: "Fucoxanthin" },
                        { key: "d", text: "Chlorophyll b" }
                    ],
                    answer: "c",
                    explanation: "The brown xanthophyll <strong>fucoxanthin</strong> masks the chlorophyll in brown algae such as <em>Laminaria</em>, <em>Fucus</em> and <em>Sargassum</em>."
                },
                {
                    id: "d28b43",
                    text: "The red colour of the Rhodophyceae is due to the pigment:",
                    options: [
                        { key: "a", text: "r-phycoerythrin" },
                        { key: "b", text: "Fucoxanthin" },
                        { key: "c", text: "Carotene" },
                        { key: "d", text: "Chlorophyll b" }
                    ],
                    answer: "a",
                    explanation: "<strong>r-phycoerythrin</strong> gives red algae their colour and lets them absorb the blue-green light that reaches deep water, so they can live at greater depths than other algae."
                },
                {
                    id: "d28b44",
                    text: "Agar, widely used for culturing microorganisms, is obtained from:",
                    options: [
                        { key: "a", text: "Green algae" },
                        { key: "b", text: "Blue-green algae" },
                        { key: "c", text: "Brown algae" },
                        { key: "d", text: "Red algae" }
                    ],
                    answer: "d",
                    explanation: "<strong>Agar</strong> is extracted from the red algae <em>Gelidium</em> and <em>Gracilaria</em>. Algin comes from brown algae and carrageenan from the red alga <em>Chondrus</em>."
                },
                {
                    id: "d28b45",
                    text: "Which alga is unicellular and motile, bearing two flagella and a red eye spot?",
                    options: [
                        { key: "a", text: "<em>Spirogyra</em>" },
                        { key: "b", text: "<em>Ulothrix</em>" },
                        { key: "c", text: "<em>Chlamydomonas</em>" },
                        { key: "d", text: "<em>Sargassum</em>" }
                    ],
                    answer: "c",
                    explanation: "<strong><em>Chlamydomonas</em></strong> is a single-celled green alga with two equal flagella, a cup-shaped chloroplast and a red eye spot (stigma) that senses light."
                },
                {
                    id: "d28b46",
                    text: "The cell wall of most algae is made mainly of:",
                    options: [
                        { key: "a", text: "Chitin" },
                        { key: "b", text: "Cellulose" },
                        { key: "c", text: "Peptidoglycan" },
                        { key: "d", text: "Lignin" }
                    ],
                    answer: "b",
                    explanation: "The algal wall has an inner layer of <strong>cellulose</strong> and an outer layer of pectose; in brown algae the gelatinous algin is added as well."
                }
            ]
        },
        {
            id: "bpg28",
            name: "Bryophytes, Pteridophytes & Gymnosperms",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q47–80 · easy recall · characters of liverworts, hornworts and mosses with Marchantia; characters of ferns with Dryopteris; characters of gymnosperms with Pinus.",
            questions: [
                {
                    id: "d28b47",
                    text: "Bryophytes are usually found growing in:",
                    options: [
                        { key: "a", text: "Hot dry deserts" },
                        { key: "b", text: "Dry sandy soil in full sun" },
                        { key: "c", text: "Deep sea water" },
                        { key: "d", text: "Moist, shady places" }
                    ],
                    answer: "d",
                    explanation: "Having no vascular tissue and needing water for fertilisation, bryophytes are restricted to <strong>damp, shaded habitats</strong> such as moist walls, rocks and the banks of streams."
                },
                {
                    id: "d28b48",
                    text: "Bryophytes differ from all higher plants in that they have no:",
                    options: [
                        { key: "a", text: "Chlorophyll" },
                        { key: "b", text: "Vascular tissue" },
                        { key: "c", text: "Sex organs" },
                        { key: "d", text: "Spores" }
                    ],
                    answer: "b",
                    explanation: "Bryophytes possess no <strong>xylem or phloem</strong>, so water cannot be conducted efficiently and the plants remain small. Pteridophytes are the first plants to have vascular tissue."
                },
                {
                    id: "d28b49",
                    text: "In bryophytes the plant body is fixed to the soil by:",
                    options: [
                        { key: "a", text: "True roots" },
                        { key: "b", text: "Adventitious roots" },
                        { key: "c", text: "Tap roots" },
                        { key: "d", text: "Rhizoids" }
                    ],
                    answer: "d",
                    explanation: "Bryophytes have no true roots; thread-like <strong>rhizoids</strong> anchor the thallus and help absorb water. True roots, stems and leaves appear first in the pteridophytes."
                },
                {
                    id: "d28b50",
                    text: "The dominant and independent phase in the life cycle of a bryophyte is the:",
                    options: [
                        { key: "a", text: "Sporophyte" },
                        { key: "b", text: "Gametophyte" },
                        { key: "c", text: "Zygote" },
                        { key: "d", text: "Spore" }
                    ],
                    answer: "b",
                    explanation: "The green plant we see is the haploid <strong>gametophyte</strong>; the diploid sporophyte is small, short-lived and dependent on it. In ferns and all higher plants this relationship is reversed."
                },
                {
                    id: "d28b51",
                    text: "The male and female sex organs of a bryophyte are called respectively the:",
                    options: [
                        { key: "a", text: "Antheridium and archegonium" },
                        { key: "b", text: "Archegonium and antheridium" },
                        { key: "c", text: "Anther and ovary" },
                        { key: "d", text: "Sporangium and gemma cup" }
                    ],
                    answer: "a",
                    explanation: "The <strong>antheridium</strong> is the male organ producing antherozoids and the <strong>archegonium</strong> is the flask-shaped female organ containing a single egg. Both are multicellular and jacketed."
                },
                {
                    id: "d28b52",
                    text: "Fertilisation in bryophytes cannot occur without:",
                    options: [
                        { key: "a", text: "Wind" },
                        { key: "b", text: "Insects" },
                        { key: "c", text: "Water" },
                        { key: "d", text: "Bright sunlight" }
                    ],
                    answer: "c",
                    explanation: "The flagellated antherozoids must <strong>swim through water</strong> to reach the neck of the archegonium, so a film of rain or dew is essential."
                },
                {
                    id: "d28b53",
                    text: "<em>Marchantia</em> is a common example of a:",
                    options: [
                        { key: "a", text: "Moss" },
                        { key: "b", text: "Fern" },
                        { key: "c", text: "Hornwort" },
                        { key: "d", text: "Liverwort" }
                    ],
                    answer: "d",
                    explanation: "<em>Marchantia</em> is a thalloid <strong>liverwort</strong> (Hepaticopsida). <em>Anthoceros</em> is a hornwort and <em>Funaria</em> a moss."
                },
                {
                    id: "d28b54",
                    text: "<em>Funaria</em> is an example of a:",
                    options: [
                        { key: "a", text: "Moss" },
                        { key: "b", text: "Liverwort" },
                        { key: "c", text: "Green alga" },
                        { key: "d", text: "Gymnosperm" }
                    ],
                    answer: "a",
                    explanation: "<em>Funaria</em> belongs to the Bryopsida or <strong>mosses</strong>, whose leafy shoots bear spirally arranged leaves and arise from a filamentous protonema."
                },
                {
                    id: "d28b55",
                    text: "<em>Anthoceros</em> is commonly known as a:",
                    options: [
                        { key: "a", text: "Liverwort" },
                        { key: "b", text: "Hornwort" },
                        { key: "c", text: "Peat moss" },
                        { key: "d", text: "Club moss" }
                    ],
                    answer: "b",
                    explanation: "<em>Anthoceros</em> is a <strong>hornwort</strong> (Anthocerotopsida), named from its long horn-shaped sporophyte. Each of its cells contains a single large chloroplast with a pyrenoid."
                },
                {
                    id: "d28b56",
                    text: "In <em>Marchantia</em>, vegetative reproduction takes place by small green bodies produced in cups on the thallus. These bodies are called:",
                    options: [
                        { key: "a", text: "Spores" },
                        { key: "b", text: "Gemmae" },
                        { key: "c", text: "Elaters" },
                        { key: "d", text: "Zoospores" }
                    ],
                    answer: "b",
                    explanation: "<strong>Gemmae</strong> are multicellular green discs formed inside <em>gemma cups</em> on the upper surface of the thallus. Rain splashes them out and each grows into a new plant."
                },
                {
                    id: "d28b57",
                    text: "The sporophyte of <em>Marchantia</em> is differentiated into:",
                    options: [
                        { key: "a", text: "Root, stem and leaf" },
                        { key: "b", text: "Rhizoid, scale and gemma cup" },
                        { key: "c", text: "Holdfast, stipe and frond" },
                        { key: "d", text: "Foot, seta and capsule" }
                    ],
                    answer: "d",
                    explanation: "The sporophyte has a <strong>foot</strong> embedded in the gametophyte, a short <strong>seta</strong> and a <strong>capsule</strong> in which spores and hygroscopic elaters are produced."
                },
                {
                    id: "d28b58",
                    text: "<em>Sphagnum</em>, the bog moss, is commercially important because it:",
                    options: [
                        { key: "a", text: "Yields the antibiotic penicillin" },
                        { key: "b", text: "Holds a large amount of water and forms peat" },
                        { key: "c", text: "Is the chief source of agar" },
                        { key: "d", text: "Fixes atmospheric nitrogen in the soil" }
                    ],
                    answer: "b",
                    explanation: "The dead hyaline cells of <em>Sphagnum</em> soak up water like a sponge, so it is used as a <strong>packing material</strong> for seedlings; compressed over centuries it forms <strong>peat</strong>, used as fuel."
                },
                {
                    id: "d28b59",
                    text: "Which group of plants is placed immediately above the bryophytes in the plant kingdom?",
                    options: [
                        { key: "a", text: "Algae" },
                        { key: "b", text: "Fungi" },
                        { key: "c", text: "Pteridophytes" },
                        { key: "d", text: "Angiosperms" }
                    ],
                    answer: "c",
                    explanation: "The usual sequence of increasing complexity is algae &rarr; bryophytes &rarr; <strong>pteridophytes</strong> &rarr; gymnosperms &rarr; angiosperms. Pteridophytes are the first group to possess xylem and phloem and true roots, stems and leaves."
                },
                {
                    id: "d28b60",
                    text: "In the life cycle of a fern the dominant phase is the:",
                    options: [
                        { key: "a", text: "Gametophyte" },
                        { key: "b", text: "Prothallus" },
                        { key: "c", text: "Zygote" },
                        { key: "d", text: "Sporophyte" }
                    ],
                    answer: "d",
                    explanation: "The large leafy fern plant is the diploid <strong>sporophyte</strong>, which is independent and long-lived. Its gametophyte is the tiny, short-lived prothallus."
                },
                {
                    id: "d28b61",
                    text: "<em>Dryopteris</em> is a common example of a:",
                    options: [
                        { key: "a", text: "Moss" },
                        { key: "b", text: "Fern" },
                        { key: "c", text: "Gymnosperm" },
                        { key: "d", text: "Liverwort" }
                    ],
                    answer: "b",
                    explanation: "<em>Dryopteris</em>, the male shield fern, is the standard pteridophyte studied in the course. Its underground stem is a rhizome bearing large compound leaves."
                },
                {
                    id: "d28b62",
                    text: "The coiled condition of a young fern leaf, which unrolls as it grows, is called:",
                    options: [
                        { key: "a", text: "Circinate vernation" },
                        { key: "b", text: "Aestivation" },
                        { key: "c", text: "Phyllotaxy" },
                        { key: "d", text: "Venation" }
                    ],
                    answer: "a",
                    explanation: "<strong>Circinate vernation</strong> — the 'fiddle head' — is a diagnostic fern character; the tender apex is protected while the leaf unrolls from the base upwards."
                },
                {
                    id: "d28b63",
                    text: "In <em>Dryopteris</em>, the sporangia are borne in clusters called sori, which are found on the:",
                    options: [
                        { key: "a", text: "Upper surface of the leaf" },
                        { key: "b", text: "Base of the roots" },
                        { key: "c", text: "Tip of the rhizome" },
                        { key: "d", text: "Under surface of the leaf" }
                    ],
                    answer: "d",
                    explanation: "The brown <strong>sori</strong> occur on the <strong>lower (abaxial) surface</strong> of the fertile leaflets, where they are sheltered from rain and direct sun."
                },
                {
                    id: "d28b64",
                    text: "The protective umbrella-like covering over a sorus is called the:",
                    options: [
                        { key: "a", text: "Ramentum" },
                        { key: "b", text: "Annulus" },
                        { key: "c", text: "Indusium" },
                        { key: "d", text: "Columella" }
                    ],
                    answer: "c",
                    explanation: "The <strong>indusium</strong> is a thin flap that covers and protects the young sporangia; it shrivels when the spores are ripe. The annulus is the ring of thickened cells that flings the spores out."
                },
                {
                    id: "d28b65",
                    text: "The gametophyte of a fern is a small, green, heart-shaped structure called the:",
                    options: [
                        { key: "a", text: "Protonema" },
                        { key: "b", text: "Prothallus" },
                        { key: "c", text: "Thallus" },
                        { key: "d", text: "Sporophyll" }
                    ],
                    answer: "b",
                    explanation: "The <strong>prothallus</strong> is a tiny, independent, heart-shaped gametophyte anchored by rhizoids and bearing both antheridia and archegonia on its lower surface."
                },
                {
                    id: "d28b66",
                    text: "Pteridophytes reproduce by means of:",
                    options: [
                        { key: "a", text: "Seeds" },
                        { key: "b", text: "Flowers" },
                        { key: "c", text: "Spores" },
                        { key: "d", text: "Fruits" }
                    ],
                    answer: "c",
                    explanation: "Pteridophytes are seedless vascular plants — they reproduce by <strong>spores</strong> formed in sporangia. They are sometimes called cryptogams, meaning plants with hidden reproductive organs."
                },
                {
                    id: "d28b67",
                    text: "The stem of <em>Dryopteris</em> is an underground structure known as a:",
                    options: [
                        { key: "a", text: "Rhizome" },
                        { key: "b", text: "Bulb" },
                        { key: "c", text: "Corm" },
                        { key: "d", text: "Tuber" }
                    ],
                    answer: "a",
                    explanation: "<em>Dryopteris</em> has a stout, horizontal underground stem called a <strong>rhizome</strong>, which bears adventitious roots below and large compound leaves above."
                },
                {
                    id: "d28b68",
                    text: "<em>Selaginella</em> is described as heterosporous, which means that it produces:",
                    options: [
                        { key: "a", text: "Only one kind of spore" },
                        { key: "b", text: "No spores at all" },
                        { key: "c", text: "Seeds instead of spores" },
                        { key: "d", text: "Two different kinds of spore" }
                    ],
                    answer: "d",
                    explanation: "A heterosporous plant makes small <strong>microspores</strong> and large <strong>megaspores</strong>. <em>Selaginella</em> and <em>Salvinia</em> are heterosporous, and this condition is the first step towards the seed habit."
                },
                {
                    id: "d28b69",
                    text: "<em>Equisetum</em> is commonly known as the:",
                    options: [
                        { key: "a", text: "Horsetail" },
                        { key: "b", text: "Club moss" },
                        { key: "c", text: "Water fern" },
                        { key: "d", text: "Maidenhair fern" }
                    ],
                    answer: "a",
                    explanation: "<em>Equisetum</em> is the <strong>horsetail</strong>, a pteridophyte with a jointed, ribbed stem encrusted with silica — which is why it was once used for scouring utensils."
                },
                {
                    id: "d28b70",
                    text: "The word 'gymnosperm' literally means:",
                    options: [
                        { key: "a", text: "Naked seed" },
                        { key: "b", text: "Covered seed" },
                        { key: "c", text: "Hidden flower" },
                        { key: "d", text: "Many seeds" }
                    ],
                    answer: "a",
                    explanation: "'Gymnos' means naked and 'sperma' means seed. In gymnosperms the ovules are <strong>not enclosed in an ovary</strong>, so the seeds that develop from them lie exposed on the surface of the megasporophyll."
                },
                {
                    id: "d28b71",
                    text: "Gymnosperms never bear:",
                    options: [
                        { key: "a", text: "Seeds" },
                        { key: "b", text: "Fruits" },
                        { key: "c", text: "Pollen grains" },
                        { key: "d", text: "Wood" }
                    ],
                    answer: "b",
                    explanation: "A fruit is a ripened <em>ovary</em>, and gymnosperms have no ovary at all, so they can never form a true <strong>fruit</strong>. They do produce seeds, pollen and abundant wood."
                },
                {
                    id: "d28b72",
                    text: "The leaves of <em>Pinus</em> are:",
                    options: [
                        { key: "a", text: "Broad and flat" },
                        { key: "b", text: "Compound and pinnate" },
                        { key: "c", text: "Scale-like and fleshy" },
                        { key: "d", text: "Needle-like" }
                    ],
                    answer: "d",
                    explanation: "<strong>Needle-shaped</strong> leaves expose very little surface, and with their thick cuticle and sunken stomata they greatly reduce water loss in cold, windy habitats."
                },
                {
                    id: "d28b73",
                    text: "In <em>Pinus</em>, the green needles are borne in groups on a short branch known as the:",
                    options: [
                        { key: "a", text: "Long shoot" },
                        { key: "b", text: "Dwarf shoot" },
                        { key: "c", text: "Rhizome" },
                        { key: "d", text: "Stolon" }
                    ],
                    answer: "b",
                    explanation: "The <strong>dwarf shoot (spur)</strong> is a branch of limited growth carrying a bundle of two, three or five needles. The long shoot has unlimited growth and bears only brown scale leaves."
                },
                {
                    id: "d28b74",
                    text: "<em>Pinus</em> is said to be monoecious, which means that:",
                    options: [
                        { key: "a", text: "Male and female cones are borne on the same tree" },
                        { key: "b", text: "Male and female cones are on separate trees" },
                        { key: "c", text: "Only male cones are ever produced" },
                        { key: "d", text: "The cones contain both pollen and ovules together" }
                    ],
                    answer: "a",
                    explanation: "In a <strong>monoecious</strong> plant both kinds of reproductive structure occur on <strong>one individual</strong>, though in separate cones. If they were on different plants the species would be dioecious, as in <em>Cycas</em>."
                },
                {
                    id: "d28b75",
                    text: "Pollination in <em>Pinus</em> is brought about by:",
                    options: [
                        { key: "a", text: "Insects" },
                        { key: "b", text: "Water" },
                        { key: "c", text: "Birds" },
                        { key: "d", text: "Wind" }
                    ],
                    answer: "d",
                    explanation: "<em>Pinus</em> is <strong>anemophilous</strong> — wind pollinated. Its male cones release clouds of very light pollen, each grain buoyed up by two air bladders, and there are no petals, scent or nectar to attract animals."
                },
                {
                    id: "d28b76",
                    text: "The xylem of most gymnosperms is peculiar in that it contains:",
                    options: [
                        { key: "a", text: "Vessels but no tracheids" },
                        { key: "b", text: "Sieve tubes and companion cells" },
                        { key: "c", text: "Neither vessels nor tracheids" },
                        { key: "d", text: "Tracheids but no vessels" }
                    ],
                    answer: "d",
                    explanation: "Gymnosperm wood is made almost entirely of <strong>tracheids</strong>; true vessels are absent (except in <em>Gnetum</em>). Their phloem likewise has albuminous cells instead of companion cells."
                },
                {
                    id: "d28b77",
                    text: "The special upward-growing roots of <em>Cycas</em> that contain nitrogen-fixing cyanobacteria are called:",
                    options: [
                        { key: "a", text: "Pneumatophores" },
                        { key: "b", text: "Prop roots" },
                        { key: "c", text: "Coralloid roots" },
                        { key: "d", text: "Stilt roots" }
                    ],
                    answer: "c",
                    explanation: "<strong>Coralloid roots</strong> grow upward, branch like coral and house symbiotic cyanobacteria such as <em>Anabaena</em> and <em>Nostoc</em>, which fix atmospheric nitrogen for the plant."
                },
                {
                    id: "d28b78",
                    text: "Turpentine and rosin are obtained from the resin of:",
                    options: [
                        { key: "a", text: "<em>Pinus</em>" },
                        { key: "b", text: "<em>Cycas</em>" },
                        { key: "c", text: "<em>Ephedra</em>" },
                        { key: "d", text: "<em>Marchantia</em>" }
                    ],
                    answer: "a",
                    explanation: "Tapping a pine trunk gives oleoresin, whose distillation yields volatile <strong>turpentine</strong> and solid <strong>rosin</strong>, used in paints, varnishes and paper making. <em>Pinus</em> also supplies valuable softwood timber."
                },
                {
                    id: "d28b79",
                    text: "In the female cone of <em>Pinus</em> the ovules are borne on the:",
                    options: [
                        { key: "a", text: "Ovuliferous scale" },
                        { key: "b", text: "Microsporophyll" },
                        { key: "c", text: "Needle leaf" },
                        { key: "d", text: "Stalk of the cone" }
                    ],
                    answer: "a",
                    explanation: "Each woody <strong>ovuliferous scale</strong> carries two ovules on its upper surface. The microsporophylls of the male cone bear the pollen sacs instead."
                },
                {
                    id: "d28b80",
                    text: "Most gymnosperms are:",
                    options: [
                        { key: "a", text: "Annual herbs that die within a season" },
                        { key: "b", text: "Perennial woody trees and shrubs" },
                        { key: "c", text: "Floating aquatic plants" },
                        { key: "d", text: "Parasites growing on other trees" }
                    ],
                    answer: "b",
                    explanation: "Gymnosperms are <strong>perennial, woody, mostly evergreen trees and shrubs</strong>, and they include the tallest and some of the oldest plants on earth. They form the great coniferous forests of temperate and mountain regions."
                }
            ]
        },
        {
            id: "angeco28",
            name: "Angiosperms & Economic Botany",
            subject: "Botany",
            accent: "amber",
            blurb: "Q81–100 · easy recall · flowering plants, monocots and dicots, parts of a flower and the four prescribed families; economic importance and the medicinal plants of Nepal.",
            questions: [
                {
                    id: "d28b81",
                    text: "Angiosperms differ from gymnosperms in that in angiosperms the seeds are:",
                    options: [
                        { key: "a", text: "Naked and exposed on a scale" },
                        { key: "b", text: "Always formed without fertilisation" },
                        { key: "c", text: "Absent altogether" },
                        { key: "d", text: "Enclosed within a fruit" }
                    ],
                    answer: "d",
                    explanation: "'Angio' means covered. The ovules of an angiosperm lie inside an <strong>ovary</strong>, which ripens into a <strong>fruit</strong> enclosing the seeds. Angiosperms are the only plants that bear true flowers and fruits."
                },
                {
                    id: "d28b82",
                    text: "Angiosperms are divided into the two classes:",
                    options: [
                        { key: "a", text: "Monocotyledons and dicotyledons" },
                        { key: "b", text: "Bryophytes and pteridophytes" },
                        { key: "c", text: "Algae and fungi" },
                        { key: "d", text: "Conifers and cycads" }
                    ],
                    answer: "a",
                    explanation: "Flowering plants are divided into <strong>Monocotyledons</strong> (one cotyledon) and <strong>Dicotyledons</strong> (two cotyledons), a difference accompanied by many other contrasts in root, leaf and flower."
                },
                {
                    id: "d28b83",
                    text: "A plant with a fibrous root system, parallel venation and flowers in threes is a:",
                    options: [
                        { key: "a", text: "Dicotyledon" },
                        { key: "b", text: "Monocotyledon" },
                        { key: "c", text: "Gymnosperm" },
                        { key: "d", text: "Pteridophyte" }
                    ],
                    answer: "b",
                    explanation: "Fibrous roots, <strong>parallel venation</strong> and trimerous flowers are the classic <strong>monocot</strong> characters — as in maize, rice, onion and grasses."
                },
                {
                    id: "d28b84",
                    text: "Reticulate (net-like) venation of the leaf is a characteristic of:",
                    options: [
                        { key: "a", text: "Monocotyledons" },
                        { key: "b", text: "Dicotyledons" },
                        { key: "c", text: "Mosses" },
                        { key: "d", text: "Ferns" }
                    ],
                    answer: "b",
                    explanation: "<strong>Dicots</strong> have net-like venation, a tap root system, two cotyledons and flowers in fours or fives. Monocots have parallel venation instead."
                },
                {
                    id: "d28b85",
                    text: "The four whorls of a typical flower, from outside inwards, are:",
                    options: [
                        { key: "a", text: "Corolla, calyx, gynoecium, androecium" },
                        { key: "b", text: "Calyx, androecium, corolla, gynoecium" },
                        { key: "c", text: "Androecium, gynoecium, calyx, corolla" },
                        { key: "d", text: "Calyx, corolla, androecium, gynoecium" }
                    ],
                    answer: "d",
                    explanation: "Going inwards: <strong>calyx</strong> (sepals), <strong>corolla</strong> (petals), <strong>androecium</strong> (stamens) and <strong>gynoecium</strong> (carpels). The calyx and corolla are accessory whorls; the other two are the reproductive whorls."
                },
                {
                    id: "d28b86",
                    text: "A stamen consists of:",
                    options: [
                        { key: "a", text: "Filament and anther" },
                        { key: "b", text: "Ovary and style" },
                        { key: "c", text: "Stigma and ovule" },
                        { key: "d", text: "Sepal and petal" }
                    ],
                    answer: "a",
                    explanation: "The stamen — the male part of a flower — has a stalk called the <strong>filament</strong> and a head called the <strong>anther</strong>, in which pollen grains are produced."
                },
                {
                    id: "d28b87",
                    text: "The three parts of a carpel (pistil) are:",
                    options: [
                        { key: "a", text: "Filament, anther and pollen" },
                        { key: "b", text: "Sepal, petal and stamen" },
                        { key: "c", text: "Ovary, style and stigma" },
                        { key: "d", text: "Root, stem and leaf" }
                    ],
                    answer: "c",
                    explanation: "The carpel has a swollen basal <strong>ovary</strong> containing the ovules, a slender <strong>style</strong> and a sticky <strong>stigma</strong> that receives the pollen."
                },
                {
                    id: "d28b88",
                    text: "Mustard belongs to the family:",
                    options: [
                        { key: "a", text: "Fabaceae" },
                        { key: "b", text: "Solanaceae" },
                        { key: "c", text: "Brassicaceae" },
                        { key: "d", text: "Liliaceae" }
                    ],
                    answer: "c",
                    explanation: "Mustard, radish and cabbage belong to the <strong>Brassicaceae (Cruciferae)</strong>, recognised by four petals arranged in a cross, six tetradynamous stamens and a fruit called a siliqua."
                },
                {
                    id: "d28b89",
                    text: "Potato, tomato and brinjal all belong to the family:",
                    options: [
                        { key: "a", text: "Brassicaceae" },
                        { key: "b", text: "Solanaceae" },
                        { key: "c", text: "Fabaceae" },
                        { key: "d", text: "Liliaceae" }
                    ],
                    answer: "b",
                    explanation: "These, with chilli, tobacco and <em>Datura</em>, belong to the <strong>Solanaceae</strong> or potato family, whose flowers have five joined sepals, five joined petals and five epipetalous stamens, and whose fruit is a berry."
                },
                {
                    id: "d28b90",
                    text: "The fruit of a plant belonging to the family Fabaceae is a:",
                    options: [
                        { key: "a", text: "Berry" },
                        { key: "b", text: "Capsule" },
                        { key: "c", text: "Legume" },
                        { key: "d", text: "Siliqua" }
                    ],
                    answer: "c",
                    explanation: "The pea family produces a <strong>legume (pod)</strong> that splits along both sutures. Its flowers are butterfly-shaped (papilionaceous) and its stamens are diadelphous, in bundles of nine and one."
                },
                {
                    id: "d28b91",
                    text: "Onion and garlic are members of the family:",
                    options: [
                        { key: "a", text: "Liliaceae" },
                        { key: "b", text: "Solanaceae" },
                        { key: "c", text: "Brassicaceae" },
                        { key: "d", text: "Fabaceae" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Liliaceae</strong> is the only monocot family in the course. Its flowers are trimerous with a perianth of six tepals in two whorls and six stamens, and the ovary is superior and tricarpellary."
                },
                {
                    id: "d28b92",
                    text: "The potato tuber is a modified:",
                    options: [
                        { key: "a", text: "Root" },
                        { key: "b", text: "Fruit" },
                        { key: "c", text: "Leaf" },
                        { key: "d", text: "Stem" }
                    ],
                    answer: "d",
                    explanation: "A potato is an underground <strong>stem</strong>, as shown by its nodes — the 'eyes', which are really buds in the axil of a scale leaf — and it sprouts from them. Ginger and turmeric (rhizomes) are stems for the same reason."
                },
                {
                    id: "d28b93",
                    text: "The botanical name of neem is:",
                    options: [
                        { key: "a", text: "<em>Azadirachta indica</em>" },
                        { key: "b", text: "<em>Ocimum sanctum</em>" },
                        { key: "c", text: "<em>Rauwolfia serpentina</em>" },
                        { key: "d", text: "<em>Zingiber officinale</em>" }
                    ],
                    answer: "a",
                    explanation: "Neem is <strong><em>Azadirachta indica</em></strong>. Its azadirachtin is a natural insecticide, and its twigs, leaves and oil are widely used as antiseptics."
                },
                {
                    id: "d28b94",
                    text: "<em>Ocimum sanctum</em> is commonly known as:",
                    options: [
                        { key: "a", text: "Neem" },
                        { key: "b", text: "Tulasi" },
                        { key: "c", text: "Sarpagandha" },
                        { key: "d", text: "Yarsagumba" }
                    ],
                    answer: "b",
                    explanation: "<strong>Tulasi</strong> or holy basil is <em>Ocimum sanctum</em>. Its eugenol-rich leaves are used for coughs and colds and as an antibacterial."
                },
                {
                    id: "d28b95",
                    text: "The part of the ginger plant used as a spice is the:",
                    options: [
                        { key: "a", text: "Root" },
                        { key: "b", text: "Fruit" },
                        { key: "c", text: "Leaf" },
                        { key: "d", text: "Rhizome" }
                    ],
                    answer: "d",
                    explanation: "The underground stem or <strong>rhizome</strong> of <em>Zingiber officinale</em> is the ginger of commerce, used as a spice and as a carminative and remedy for nausea."
                },
                {
                    id: "d28b96",
                    text: "<em>Rauwolfia serpentina</em> (sarpagandha) is chiefly used in the treatment of:",
                    options: [
                        { key: "a", text: "High blood pressure" },
                        { key: "b", text: "Malaria" },
                        { key: "c", text: "Tuberculosis" },
                        { key: "d", text: "Diabetes mellitus" }
                    ],
                    answer: "a",
                    explanation: "The root of sarpagandha yields the alkaloid <strong>reserpine</strong>, long used to lower <strong>blood pressure</strong> and as a tranquilliser."
                },
                {
                    id: "d28b97",
                    text: "Yarsagumba (<em>Ophiocordyceps sinensis</em>), collected in the high Himalaya, is actually:",
                    options: [
                        { key: "a", text: "A flowering herb" },
                        { key: "b", text: "A fungus growing on an insect larva" },
                        { key: "c", text: "A lichen growing on rocks" },
                        { key: "d", text: "A moss found near snow" }
                    ],
                    answer: "b",
                    explanation: "Yarsagumba is not a plant at all but a <strong>fungus that parasitises a caterpillar</strong>; the fungus-larva complex is prized as a tonic. Its Tibetan name means 'summer grass, winter worm'."
                },
                {
                    id: "d28b98",
                    text: "The bacterium used to convert milk into curd is:",
                    options: [
                        { key: "a", text: "<em>Rhizobium</em>" },
                        { key: "b", text: "<em>Clostridium</em>" },
                        { key: "c", text: "<em>Nitrosomonas</em>" },
                        { key: "d", text: "<em>Lactobacillus</em>" }
                    ],
                    answer: "d",
                    explanation: "<strong><em>Lactobacillus</em></strong> converts the lactose of milk into lactic acid, which sets the milk into curd."
                },
                {
                    id: "d28b99",
                    text: "Which of the following fungi is commonly eaten as food?",
                    options: [
                        { key: "a", text: "<em>Agaricus</em>" },
                        { key: "b", text: "<em>Puccinia</em>" },
                        { key: "c", text: "<em>Albugo</em>" },
                        { key: "d", text: "<em>Ustilago</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Agaricus</em></strong>, the common mushroom, is cultivated and eaten for its protein and vitamins. <em>Puccinia</em> (rust), <em>Ustilago</em> (smut) and <em>Albugo</em> (white rust) are all crop parasites."
                },
                {
                    id: "d28b100",
                    text: "The water fern <em>Azolla</em> is used in rice fields as a biofertilizer because it harbours:",
                    options: [
                        { key: "a", text: "A green alga that produces agar" },
                        { key: "b", text: "A mushroom that enriches the soil" },
                        { key: "c", text: "A nitrogen-fixing cyanobacterium" },
                        { key: "d", text: "A bacterium that kills insect pests" }
                    ],
                    answer: "c",
                    explanation: "<em>Azolla</em> holds the nitrogen-fixing cyanobacterium <strong><em>Anabaena azollae</em></strong> in cavities of its leaves, so ploughing it into a flooded field enriches the soil with nitrogen at no cost."
                }
            ]
        }
    ]
};

/* Day 28 lies entirely inside Botany unit 2 "Biodiversity" (official CEE weight 9),
   so the tree shows that single unit split into its nine prescribed sub-topics. */
const DAY28_SYLLABUS = [
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Introduction: 2-Kingdom, Hierarchy & Nomenclature, 5-Kingdom, 3-Domain", ids: ["d28b1", "d28b2", "d28b3", "d28b4", "d28b5", "d28b6", "d28b7", "d28b8", "d28b9", "d28b10"] },
            { name: "Monera & Virus", ids: ["d28b11", "d28b12", "d28b13", "d28b14", "d28b15", "d28b16", "d28b17", "d28b18", "d28b19", "d28b20", "d28b21", "d28b22"] },
            { name: "Fungi & Lichens", ids: ["d28b23", "d28b24", "d28b25", "d28b26", "d28b27", "d28b28", "d28b29", "d28b30", "d28b31", "d28b32", "d28b33", "d28b34"] },
            { name: "Algae", ids: ["d28b35", "d28b36", "d28b37", "d28b38", "d28b39", "d28b40", "d28b41", "d28b42", "d28b43", "d28b44", "d28b45", "d28b46"] },
            { name: "Bryophytes", ids: ["d28b47", "d28b48", "d28b49", "d28b50", "d28b51", "d28b52", "d28b53", "d28b54", "d28b55", "d28b56", "d28b57", "d28b58"] },
            { name: "Pteridophytes", ids: ["d28b59", "d28b60", "d28b61", "d28b62", "d28b63", "d28b64", "d28b65", "d28b66", "d28b67", "d28b68", "d28b69"] },
            { name: "Gymnosperms", ids: ["d28b70", "d28b71", "d28b72", "d28b73", "d28b74", "d28b75", "d28b76", "d28b77", "d28b78", "d28b79", "d28b80"] },
            { name: "Angiosperms: Morphology, Families & Floral Formulae", ids: ["d28b81", "d28b82", "d28b83", "d28b84", "d28b85", "d28b86", "d28b87", "d28b88", "d28b89", "d28b90", "d28b91", "d28b92"] },
            { name: "Economic Importance & Medicinal Plants of Nepal", ids: ["d28b93", "d28b94", "d28b95", "d28b96", "d28b97", "d28b98", "d28b99", "d28b100"] }
        ] }
    ] }
];
DAY28.syllabus = DAY28_SYLLABUS;
