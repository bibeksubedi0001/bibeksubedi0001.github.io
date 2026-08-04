/* ============================================================
   DAY 21 — BIOLOGY DOUBLE + TWO FOCUS UNITS
   100 questions · 90 minutes · 0.25 negative marking

   Section split:
     Q1–Q40    Zoology                     (d21z1  … d21z40)
     Q41–Q80   Botany                      (d21b41 … d21b80)
     Q81–Q90   Magnetic Effect of Current  (d21p81 … d21p90)   [HARD]
     Q91–Q100  Applied Chemistry           (d21c91 … d21c100)

   Scope follows the official MEC "Syllabus for Bachelor Level
   Common Entrance Examination (2020, revised 2026)":
     Zoology  — all 8 units, in the official 3/4/4/6/15/4/2/2 ratio
     Botany   — all 9 units, in the official 2/9/4/5/6/3/6/2/3 ratio
     Physics  — Unit 4 "Current electricity and magnetism" →
                "Magnetic field: nature of B-field around a straight
                conductor, circular coil and long solenoid; effect of a
                uniform B-field on a moving charge and on a current
                carrying conductor/coil; Hall effect"
     Chemistry— Unit 4 "Applied chemistry" (manufacturing processes,
                applications of non-metals/metals & compounds,
                chemistry in service to mankind)
   ============================================================ */
const DAY21 = {
    day: 21,
    title: "Day 21",
    subtitle: "Zoology + Botany Full Syllabus · Magnetic Effect of Current (Hard) · Applied Chemistry · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "zoo21",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q1–40 · complete CEE weightage: evolution 3, diversity 4, tissues 4, selected animals 6, human physiology 15, microbial diseases 4, medical technology 2, environment 2.",
            questions: [
                {
                    id: "d21z1",
                    text: "The gas mixture sparked in the Miller–Urey apparatus deliberately excluded one gas, because its presence would have oxidised the organic molecules as fast as they formed. That gas is:",
                    options: [
                        { key: "a", text: "Methane, the chief carbon source of the mixture" },
                        { key: "b", text: "Ammonia, the nitrogen source for amino acids" },
                        { key: "c", text: "Free oxygen, absent from the primitive atmosphere" },
                        { key: "d", text: "Water vapour, circulated by the boiling flask" }
                    ],
                    answer: "c",
                    explanation: "Miller and Urey (1953) circulated $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2}$ and water vapour past an electric discharge and obtained glycine, alanine and other simple organics. The primitive atmosphere of the Oparin–Haldane hypothesis was strongly <em>reducing</em>: free $\\mathrm{O_2}$ was absent, and had it been present it would have oxidised the newly formed organic molecules to $\\mathrm{CO_2}$ and water. The other three gases were essential ingredients of the experiment."
                },
                {
                    id: "d21z2",
                    text: "The wing of a bird and the wing of a butterfly do the same job but are built on completely different structural plans. Such organs are evidence of:",
                    options: [
                        { key: "a", text: "Divergent evolution from one common ancestor" },
                        { key: "b", text: "Reappearance of an ancestral trait, i.e. atavism" },
                        { key: "c", text: "Degeneration of an organ into a vestigial remnant" },
                        { key: "d", text: "Convergent evolution producing analogous organs" }
                    ],
                    answer: "d",
                    explanation: "Organs with the same <em>function</em> but a different embryonic origin and internal design are <strong>analogous</strong>; unrelated groups facing the same selection pressure (flight) arrive independently at the same solution — convergent evolution. Homologous organs (forelimb of man, whale, bat) have the same design but different functions and indicate divergent evolution; vestigial organs and atavism are separate lines of evidence."
                },
                {
                    id: "d21z3",
                    text: "The hominid with a cranial capacity of about 650–700 cc, whose fossils are found with deliberately chipped pebble tools, is regarded as the first tool maker. It is:",
                    options: [
                        { key: "a", text: "Ramapithecus, the earliest known ape-like ancestor" },
                        { key: "b", text: "Australopithecus africanus, an erect ape-man" },
                        { key: "c", text: "Homo habilis, the 'handy man' of the Pleistocene" },
                        { key: "d", text: "Homo erectus erectus, the Java ape-man" }
                    ],
                    answer: "c",
                    explanation: "<em>Homo habilis</em> (about 2 million years ago, cranial capacity 650–700 cc) is named 'handy man' because Oldowan pebble tools occur with its fossils. <em>Ramapithecus</em> is a Miocene ape; <em>Australopithecus</em> (450–600 cc) walked erect but is not credited with manufactured tools; <em>Homo erectus</em> (800–1100 cc) came later and is associated with fire and better hand-axes."
                },
                {
                    id: "d21z4",
                    text: "An animal possesses a water vascular system with tube feet, an endoskeleton of calcareous ossicles and radial symmetry in the adult. It belongs to the phylum:",
                    options: [
                        { key: "a", text: "Mollusca, with a mantle and a muscular foot" },
                        { key: "b", text: "Echinodermata, exclusively marine and coelomate" },
                        { key: "c", text: "Arthropoda, with jointed appendages and a chitinous cuticle" },
                        { key: "d", text: "Coelenterata, with tentacles and stinging cells" }
                    ],
                    answer: "b",
                    explanation: "The water vascular (ambulacral) system with tube feet used in locomotion, feeding and respiration is unique to <strong>Echinodermata</strong>, which also have a mesodermal endoskeleton of calcareous ossicles and secondary (pentamerous) radial symmetry in the adult though the larva is bilateral. None of the other three phyla has a water vascular system."
                },
                {
                    id: "d21z5",
                    text: "Four features are shared by every chordate at least at some stage of the life history. Which combination lists them correctly?",
                    options: [
                        { key: "a", text: "Notochord, dorsal tubular nerve cord, pharyngeal clefts, post-anal tail" },
                        { key: "b", text: "Vertebral column, ventral solid nerve cord, gills, post-anal tail" },
                        { key: "c", text: "Notochord, ventral nerve cord, book lungs, closed circulation" },
                        { key: "d", text: "Bony endoskeleton, dorsal nerve cord, Malpighian tubules, tail" }
                    ],
                    answer: "a",
                    explanation: "The four diagnostic chordate characters are a <strong>notochord</strong>, a <strong>dorsal hollow (tubular) nerve cord</strong>, <strong>pharyngeal gill clefts</strong> and a <strong>post-anal tail</strong>. A vertebral column occurs only in the subphylum Vertebrata, the nerve cord of non-chordates is ventral and solid, and book lungs and Malpighian tubules are arthropod organs."
                },
                {
                    id: "d21z6",
                    text: "A triploblastic animal is dorsoventrally flattened, has no body cavity between the gut and the body wall, and excretes through flame cells. Its phylum is:",
                    options: [
                        { key: "a", text: "Aschelminthes, pseudocoelomate with a tough cuticle" },
                        { key: "b", text: "Ctenophora, diploblastic with comb plates" },
                        { key: "c", text: "Annelida, coelomate with segmental nephridia" },
                        { key: "d", text: "Platyhelminthes, acoelomate with protonephridia" }
                    ],
                    answer: "d",
                    explanation: "Flame cells (protonephridia) working in osmoregulation and excretion, an acoelomate body packed with parenchyma, and dorsoventral flattening are the diagnostic features of <strong>Platyhelminthes</strong>. Aschelminthes are pseudocoelomate and excrete through H-shaped renette cells or canals, annelids have a true coelom with nephridia, and ctenophores are diploblastic."
                },
                {
                    id: "d21z7",
                    text: "An unsegmented soft-bodied animal has a muscular foot, a visceral mass, a mantle that secretes a calcareous shell and a comb-like ctenidium for respiration. It is placed in:",
                    options: [
                        { key: "a", text: "Annelida, with metameric segmentation and setae" },
                        { key: "b", text: "Arthropoda, with a jointed exoskeleton and haemocoel" },
                        { key: "c", text: "Mollusca, the second largest phylum of the animal kingdom" },
                        { key: "d", text: "Echinodermata, with ossicles and pedicellariae" }
                    ],
                    answer: "c",
                    explanation: "Head, muscular <strong>foot</strong>, <strong>visceral mass</strong> and a <strong>mantle</strong> that secretes the calcareous shell, plus gills called <strong>ctenidia</strong> and a rasping radula, define <strong>Mollusca</strong> — the second largest phylum after Arthropoda. Annelids are metamerically segmented, arthropods have jointed appendages, and echinoderms have a water vascular system."
                },
                {
                    id: "d21z8",
                    text: "The epithelium that lines the lumen of the small intestine and bears a brush border of microvilli is:",
                    options: [
                        { key: "a", text: "Simple squamous epithelium, suited for rapid diffusion" },
                        { key: "b", text: "Simple columnar epithelium, suited for absorption" },
                        { key: "c", text: "Stratified squamous epithelium, suited for protection" },
                        { key: "d", text: "Pseudostratified ciliated epithelium, suited for mucus flow" }
                    ],
                    answer: "b",
                    explanation: "A single layer of tall <strong>columnar</strong> cells whose free surface carries microvilli (the brush border) multiplies the absorptive surface of the intestinal mucosa many times over. Simple squamous epithelium lines alveoli and Bowman's capsule for diffusion, stratified squamous covers the skin and buccal cavity, and pseudostratified ciliated columnar lines the trachea."
                },
                {
                    id: "d21z9",
                    text: "Which of the following is a specialised connective tissue whose matrix stays fluid and non-fibrous until the moment of clotting?",
                    options: [
                        { key: "a", text: "Areolar tissue, a packing tissue beneath the skin" },
                        { key: "b", text: "Adipose tissue, a store of neutral fat" },
                        { key: "c", text: "Blood, with plasma as the ground substance" },
                        { key: "d", text: "Tendon, a dense white fibrous cord" }
                    ],
                    answer: "c",
                    explanation: "<strong>Blood</strong> is a fluid (vascular) connective tissue: plasma is the matrix and the fibres appear only when soluble fibrinogen is converted into insoluble fibrin during clotting. Areolar and adipose tissues are loose connective tissues with a semi-solid matrix, while a tendon is dense regular connective tissue packed with collagen fibres."
                },
                {
                    id: "d21z10",
                    text: "Which single feature occurs in cardiac muscle but in neither skeletal nor smooth muscle?",
                    options: [
                        { key: "a", text: "Cross striations produced by actin and myosin" },
                        { key: "b", text: "Involuntary control by the autonomic nervous system" },
                        { key: "c", text: "Intercalated discs joining branched muscle fibres" },
                        { key: "d", text: "A sarcoplasmic reticulum storing calcium ions" }
                    ],
                    answer: "c",
                    explanation: "<strong>Intercalated discs</strong> — the junctional membranes with gap junctions where branched cardiac fibres meet — are unique to heart muscle and let the impulse spread so that the myocardium contracts as one unit. Striations are shared with skeletal muscle, involuntary control is shared with smooth muscle, and a sarcoplasmic reticulum is present in all three."
                },
                {
                    id: "d21z11",
                    text: "In a peripheral nerve fibre the myelin sheath is laid down by one cell type, and the nodes of Ranvier between successive sheaths make conduction:",
                    options: [
                        { key: "a", text: "Oligodendrocytes; continuous and therefore slower" },
                        { key: "b", text: "Microglia; continuous but energetically economical" },
                        { key: "c", text: "Astrocytes; saltatory but energetically wasteful" },
                        { key: "d", text: "Schwann cells; saltatory and therefore faster" }
                    ],
                    answer: "d",
                    explanation: "In the peripheral nervous system each internode of myelin is a <strong>Schwann cell</strong> wrapped round the axon (in the CNS the same job is done by oligodendrocytes). Myelin insulates the membrane, so the action potential is regenerated only at the unmyelinated <strong>nodes of Ranvier</strong> and appears to jump from node to node — <em>saltatory</em> conduction, which is both faster and cheaper in ATP than continuous conduction."
                },
                {
                    id: "d21z12",
                    text: "Malignant tertian malaria, the most fatal form because the parasite invades red cells of every age and blocks brain capillaries, is caused by:",
                    options: [
                        { key: "a", text: "Plasmodium vivax, with a 48-hour fever cycle" },
                        { key: "b", text: "Plasmodium malariae, with a 72-hour fever cycle" },
                        { key: "c", text: "Plasmodium falciparum, with an irregular 36–48 hour cycle" },
                        { key: "d", text: "Plasmodium ovale, with a mild 48-hour cycle" }
                    ],
                    answer: "c",
                    explanation: "<em>P. falciparum</em> causes <strong>malignant tertian</strong> (cerebral) malaria; its erythrocytic cycle is about 36–48 hours and it parasitises erythrocytes of all ages, giving very high parasitaemia and capillary blockage. <em>P. vivax</em> gives benign tertian (48 h), <em>P. malariae</em> quartan (72 h) and <em>P. ovale</em> a mild tertian malaria."
                },
                {
                    id: "d21z13",
                    text: "When a female Anopheles sucks blood from a malaria patient, the only stage of Plasmodium that can continue its development inside the mosquito is the:",
                    options: [
                        { key: "a", text: "Sporozoite, the slender stage of the salivary gland" },
                        { key: "b", text: "Merozoite, released when a red cell bursts" },
                        { key: "c", text: "Gametocyte, the sexual stage formed in blood" },
                        { key: "d", text: "Cryptozoite, formed in the liver cells" }
                    ],
                    answer: "c",
                    explanation: "Only the <strong>gametocytes</strong> (male microgametocyte and female macrogametocyte) survive in the mosquito gut, where they form gametes, fuse to give a zygote and finally an oocyst that liberates sporozoites. Merozoites and cryptozoites are digested; the sporozoite is the stage infective to <em>man</em>, not to the mosquito. Man is the intermediate host and the mosquito the definitive host, because the sexual cycle is completed in the mosquito."
                },
                {
                    id: "d21z14",
                    text: "The typhlosole of Pheretima is a median fold of the dorsal wall of the intestine. Its chief function is to:",
                    options: [
                        { key: "a", text: "Increase the absorptive surface of the intestine" },
                        { key: "b", text: "Secrete the whole of the digestive enzyme supply" },
                        { key: "c", text: "Store nitrogenous waste before it is excreted" },
                        { key: "d", text: "Drive the coelomic fluid along the body cavity" }
                    ],
                    answer: "a",
                    explanation: "The typhlosole runs from about the 27th segment to near the anus and greatly enlarges the <strong>internal absorptive surface</strong> of the intestine without lengthening the body — the same trick as the villi of a mammal. Enzymes come from the intestinal epithelium and glandular cells, excretion is by nephridia and chloragogen cells, and the coelomic fluid is moved by body-wall muscles."
                },
                {
                    id: "d21z15",
                    text: "Which nephridia of Pheretima are enteronephric, i.e. pour their excretory fluid into the alimentary canal instead of outside the body?",
                    options: [
                        { key: "a", text: "Integumentary nephridia only, on the body wall" },
                        { key: "b", text: "Septal and pharyngeal nephridia" },
                        { key: "c", text: "Integumentary and septal nephridia" },
                        { key: "d", text: "Pharyngeal nephridia only, of segments 4–6" }
                    ],
                    answer: "b",
                    explanation: "<strong>Septal nephridia</strong> (on septa from segment 15 backwards) discharge into the intestine and <strong>pharyngeal nephridia</strong> (segments 4, 5, 6) into the pharynx and oesophagus — both are enteronephric, an adaptation that conserves water in a burrowing animal. Only the <strong>integumentary</strong> nephridia are exonephric, opening on the body surface."
                },
                {
                    id: "d21z16",
                    text: "In the heart of the frog the spiral valve is present in the truncus (conus) arteriosus, where it:",
                    options: [
                        { key: "a", text: "Prevents backflow of blood into the sinus venosus" },
                        { key: "b", text: "Acts as the pacemaker that initiates the heart beat" },
                        { key: "c", text: "Completely separates the right atrium from the left atrium" },
                        { key: "d", text: "Helps to direct oxygenated and deoxygenated blood into different arches" }
                    ],
                    answer: "d",
                    explanation: "The frog's ventricle is single, so blood in it is partly mixed. The <strong>spiral valve</strong> of the conus arteriosus sorts the outflow: the more deoxygenated blood is sent to the pulmocutaneous arch, the mixed blood to the systemic arch and the most oxygenated blood to the carotid arch. Backflow prevention is by the semilunar valves, and the pacemaker of the frog's heart is the <em>sinus venosus</em>."
                },
                {
                    id: "d21z17",
                    text: "A frog hibernating in the mud at the bottom of a pond obtains almost all of its oxygen by:",
                    options: [
                        { key: "a", text: "Buccopharyngeal respiration through the mouth lining" },
                        { key: "b", text: "Pulmonary respiration by the sac-like lungs" },
                        { key: "c", text: "Cutaneous respiration through the moist vascular skin" },
                        { key: "d", text: "Branchial respiration through internal gills" }
                    ],
                    answer: "c",
                    explanation: "During hibernation the mouth stays shut and the lungs are not ventilated, so gaseous exchange is entirely <strong>cutaneous</strong>: the thin, moist, richly vascular skin absorbs dissolved oxygen from the water. Buccopharyngeal and pulmonary respiration operate only in the active animal, and gills are present only in the tadpole."
                },
                {
                    id: "d21z18",
                    text: "Trypsinogen poured into the duodenum is converted into active trypsin by:",
                    options: [
                        { key: "a", text: "Hydrochloric acid carried down from the stomach" },
                        { key: "b", text: "Bile salts delivered through the bile duct" },
                        { key: "c", text: "Enterokinase secreted by the intestinal mucosa" },
                        { key: "d", text: "Pepsin remaining active in the chyme" }
                    ],
                    answer: "c",
                    explanation: "The pancreas secretes trypsin as the inactive zymogen trypsinogen so that it cannot digest the gland itself. <strong>Enterokinase (enteropeptidase)</strong> of the duodenal mucosa clips it into active trypsin, which then autocatalytically activates more trypsinogen and also activates chymotrypsinogen and procarboxypeptidase. HCl activates <em>pepsinogen</em>, not trypsinogen; bile salts only emulsify fat."
                },
                {
                    id: "d21z19",
                    text: "Bile contains no digestive enzyme, yet it is essential for the digestion of fat, because bile salts:",
                    options: [
                        { key: "a", text: "Hydrolyse triglycerides into fatty acids and glycerol" },
                        { key: "b", text: "Convert the absorbed fat directly into liver glycogen" },
                        { key: "c", text: "Neutralise pancreatic lipase to protect the mucosa" },
                        { key: "d", text: "Emulsify fat into fine droplets for lipase to act on" }
                    ],
                    answer: "d",
                    explanation: "Sodium glycocholate and taurocholate lower surface tension and break large fat globules into a fine <strong>emulsion</strong>, hugely increasing the surface exposed to pancreatic lipase; the alkaline bile also neutralises the acidic chyme and helps absorb the products as micelles. Hydrolysis itself is done by lipase, not by bile."
                },
                {
                    id: "d21z20",
                    text: "The largest fraction of the carbon dioxide produced in the tissues travels to the lungs:",
                    options: [
                        { key: "a", text: "Physically dissolved in the plasma, about 7 per cent" },
                        { key: "b", text: "As carbaminohaemoglobin on globin, about 23 per cent" },
                        { key: "c", text: "As bicarbonate ions in the plasma, about 70 per cent" },
                        { key: "d", text: "Bound to the iron of haem, about 70 per cent" }
                    ],
                    answer: "c",
                    explanation: "In the red cell, carbonic anhydrase makes $\\mathrm{CO_2+H_2O\\rightarrow H_2CO_3\\rightarrow H^{+}+HCO_3^{-}}$; the bicarbonate diffuses into the plasma in exchange for chloride (the chloride shift), so about <strong>70%</strong> of the $\\mathrm{CO_2}$ is carried as $\\mathrm{HCO_3^{-}}$. Roughly 23% travels as carbaminohaemoglobin bound to the <em>globin</em> amino groups (never to haem iron, which carries $\\mathrm{O_2}$) and about 7% simply dissolved."
                },
                {
                    id: "d21z21",
                    text: "Under normal conditions the strongest stimulus that makes the respiratory centre in the medulla increase the rate and depth of breathing is a rise in the:",
                    options: [
                        { key: "a", text: "Partial pressure of oxygen in arterial blood" },
                        { key: "b", text: "Hydrogen ion and carbon dioxide level of blood" },
                        { key: "c", text: "Glucose concentration of the circulating blood" },
                        { key: "d", text: "Plasma protein and albumin concentration" }
                    ],
                    answer: "b",
                    explanation: "Central chemoreceptors of the medulla respond to the $\\mathrm{H^{+}}$ generated when $\\mathrm{CO_2}$ diffuses into the cerebrospinal fluid, so a rise in $p\\mathrm{CO_2}$ (hypercapnia) is the normal drive for ventilation. A fall in $p\\mathrm{O_2}$ acts only through the peripheral aortic and carotid bodies and becomes important only in severe hypoxia; blood glucose and plasma proteins do not regulate breathing."
                },
                {
                    id: "d21z22",
                    text: "In a normal cardiac cycle of 0.8 second, the duration of ventricular systole is about:",
                    options: [
                        { key: "a", text: "0.1 s, the same as atrial systole" },
                        { key: "b", text: "0.3 s, followed by 0.5 s of ventricular diastole" },
                        { key: "c", text: "0.4 s, the period of joint diastole" },
                        { key: "d", text: "0.5 s, longer than the resting phase" }
                    ],
                    answer: "b",
                    explanation: "At 75 beats per minute one cycle takes $60/75=0.8$ s: atrial systole 0.1 s, <strong>ventricular systole 0.3 s</strong> and joint (complete cardiac) diastole 0.4 s. Counted from the ventricle's point of view, its diastole lasts $0.8-0.3=0.5$ s, so heart muscle rests for longer than it works — which is why it never fatigues."
                },
                {
                    id: "d21z23",
                    text: "A person of blood group AB, Rh-positive, can safely donate whole blood to a recipient of group:",
                    options: [
                        { key: "a", text: "Every ABO group, since AB plasma has no antibody" },
                        { key: "b", text: "A and B only, since they share one antigen" },
                        { key: "c", text: "AB Rh-positive only" },
                        { key: "d", text: "O group only, the universal recipient" }
                    ],
                    answer: "c",
                    explanation: "Compatibility for <em>donation</em> depends on the donor's <strong>antigens</strong>. AB red cells carry both A and B antigens plus the D (Rh) antigen, so they would be agglutinated by anti-A, anti-B or anti-D in any other recipient: AB Rh-positive can donate only to AB Rh-positive. The absence of antibodies in AB <em>plasma</em> is what makes AB the universal <em>recipient</em> — the opposite of what option (a) claims; O negative is the universal donor."
                },
                {
                    id: "d21z24",
                    text: "Blood flowing in the hepatic portal vein differs from that of any other vein of the body because it is unusually rich in:",
                    options: [
                        { key: "a", text: "Urea and uric acid made by deamination" },
                        { key: "b", text: "Oxygen collected from the pulmonary capillaries" },
                        { key: "c", text: "Bile pigments carried away from the gall bladder" },
                        { key: "d", text: "Glucose and amino acids absorbed from the gut" }
                    ],
                    answer: "d",
                    explanation: "The hepatic portal vein begins in the capillaries of the stomach and intestine and ends in the sinusoids of the liver, so after a meal it carries the <strong>absorbed products of digestion</strong> — glucose, amino acids, water-soluble vitamins — for storage and interconversion. Urea is <em>made</em> in the liver and leaves by the hepatic vein, bile pigments travel in the bile duct, and the oxygen-rich supply to the liver is the hepatic artery."
                },
                {
                    id: "d21z25",
                    text: "About 70–80 per cent of the glomerular filtrate, together with all of its glucose and amino acids, is reabsorbed in the:",
                    options: [
                        { key: "a", text: "Proximal convoluted tubule, whose cells bear microvilli" },
                        { key: "b", text: "Descending limb of the loop of Henle" },
                        { key: "c", text: "Distal convoluted tubule, under aldosterone control" },
                        { key: "d", text: "Collecting duct, under vasopressin control" }
                    ],
                    answer: "a",
                    explanation: "The <strong>PCT</strong> is the site of obligatory reabsorption: its brush-bordered, mitochondria-rich cells reabsorb essentially 100% of glucose and amino acids, most $\\mathrm{Na^{+}}$, $\\mathrm{K^{+}}$, $\\mathrm{HCO_3^{-}}$ and about three-quarters of the water. The descending limb reabsorbs water only, and the DCT and collecting duct carry out the hormone-controlled <em>facultative</em> reabsorption that fine-tunes urine volume."
                },
                {
                    id: "d21z26",
                    text: "Antidiuretic hormone makes the urine more concentrated by increasing the permeability to water of the:",
                    options: [
                        { key: "a", text: "Glomerular capillary wall and Bowman's capsule" },
                        { key: "b", text: "Ascending limb of the loop of Henle" },
                        { key: "c", text: "Distal convoluted tubule and collecting duct" },
                        { key: "d", text: "Proximal convoluted tubule and its brush border" }
                    ],
                    answer: "c",
                    explanation: "ADH (vasopressin) from the posterior pituitary inserts aquaporin channels into the <strong>DCT and collecting duct</strong>, so water follows the osmotic gradient built up in the medullary interstitium by the counter-current mechanism and a small volume of concentrated urine is passed. The ascending limb is permanently impermeable to water, and reabsorption in the PCT is not hormone-dependent."
                },
                {
                    id: "d21z27",
                    text: "Transmission across a chemical synapse can occur in only one direction because the neurotransmitter is:",
                    options: [
                        { key: "a", text: "Stored in vesicles of the presynaptic knob alone" },
                        { key: "b", text: "Broken down by enzymes of the synaptic cleft" },
                        { key: "c", text: "Manufactured by the postsynaptic membrane" },
                        { key: "d", text: "Carried across the cleft by the myelin sheath" }
                    ],
                    answer: "a",
                    explanation: "Synaptic vesicles containing acetylcholine occur only in the <strong>presynaptic knob</strong>, while the receptor-bearing membrane is postsynaptic; transmitter can therefore flow only from pre- to postsynaptic side. Cholinesterase in the cleft destroys the transmitter after it has acted (which stops repeated firing but is not the cause of one-way conduction), and myelin plays no part in synaptic transfer."
                },
                {
                    id: "d21z28",
                    text: "Stimulation of the vagus nerve, the main parasympathetic outflow to the thorax, produces:",
                    options: [
                        { key: "a", text: "A slower heart rate together with constricted bronchi" },
                        { key: "b", text: "A faster heart rate together with dilated bronchi" },
                        { key: "c", text: "A faster heart rate together with dilated pupils" },
                        { key: "d", text: "A slower heart rate together with inhibited digestion" }
                    ],
                    answer: "a",
                    explanation: "The parasympathetic system is the 'rest and digest' division: vagal acetylcholine <strong>slows the SA node</strong>, constricts the bronchioles and stimulates gut peristalsis and secretion. Acceleration of the heart, bronchodilation, pupillary dilation and inhibition of digestion belong to the sympathetic ('fight or flight') outflow with noradrenaline."
                },
                {
                    id: "d21z29",
                    text: "Vision in dim light is possible because the rods of the retina contain a photosensitive pigment made of a protein and a vitamin-A derivative. That pigment is:",
                    options: [
                        { key: "a", text: "Iodopsin, which also distinguishes colour" },
                        { key: "b", text: "Haemocyanin, dissolved in the vitreous humour" },
                        { key: "c", text: "Melanin, deposited in the choroid layer" },
                        { key: "d", text: "Rhodopsin, a complex of opsin and retinal" }
                    ],
                    answer: "d",
                    explanation: "<strong>Rhodopsin</strong> (visual purple) = scotopsin + 11-<em>cis</em>-retinal, made from vitamin A; light bleaches it and triggers the rod impulse, which is why vitamin A deficiency causes night blindness. Iodopsin is the cone pigment of bright-light and colour vision, melanin is the light-absorbing screen of the choroid, and haemocyanin is a respiratory pigment of arthropods and molluscs."
                },
                {
                    id: "d21z30",
                    text: "Diabetes insipidus, produced by hyposecretion of antidiuretic hormone, is characterised by:",
                    options: [
                        { key: "a", text: "Glucose in the urine with a high fasting blood sugar" },
                        { key: "b", text: "A large volume of dilute urine with normal blood sugar" },
                        { key: "c", text: "Low blood calcium leading to tetany and cramps" },
                        { key: "d", text: "A raised basal metabolic rate with weight loss" }
                    ],
                    answer: "b",
                    explanation: "Without ADH the collecting duct cannot reabsorb water, so up to 10–20 litres of very <strong>dilute urine</strong> is passed daily with intense thirst, while blood glucose stays normal — hence 'insipidus' (tasteless) as against 'mellitus' (honeyed). Glycosuria with hyperglycaemia is diabetes mellitus (insulin deficiency), hypocalcaemic tetany follows parathormone deficiency and a raised BMR follows hyperthyroidism."
                },
                {
                    id: "d21z31",
                    text: "Hyposecretion of thyroxine in a growing child, usually due to iodine deficiency, results in:",
                    options: [
                        { key: "a", text: "Cretinism, with stunted growth and mental retardation" },
                        { key: "b", text: "Myxoedema, with puffy skin and a slow metabolism" },
                        { key: "c", text: "Gigantism, with an abnormal increase in stature" },
                        { key: "d", text: "Acromegaly, with enlarged jaw, hands and feet" }
                    ],
                    answer: "a",
                    explanation: "Thyroxine is needed for normal growth and for differentiation of the nervous system, so its deficiency in infancy gives <strong>cretinism</strong> — dwarfism, a protruding tongue, and mental retardation. The same deficiency appearing in an <em>adult</em> gives myxoedema. Gigantism and acromegaly are caused by <em>excess growth hormone</em> before and after the closure of the epiphyses respectively."
                },
                {
                    id: "d21z32",
                    text: "In human oogenesis the secondary oocyte completes its second meiotic division only:",
                    options: [
                        { key: "a", text: "At the moment the follicle ruptures at ovulation" },
                        { key: "b", text: "When the first polar body is given off at puberty" },
                        { key: "c", text: "After a sperm has penetrated it during fertilisation" },
                        { key: "d", text: "During foetal life, well before birth" }
                    ],
                    answer: "c",
                    explanation: "Oogonia enter meiosis I in foetal life and arrest at the diplotene stage until puberty; meiosis I is completed just before ovulation, giving a secondary oocyte and the first polar body. The secondary oocyte then arrests in <strong>metaphase II</strong> and finishes the second division only when a sperm enters it, releasing the ovum and the second polar body — so a mature 'ovum' as such exists only after fertilisation."
                },
                {
                    id: "d21z33",
                    text: "The Widal test, an agglutination test performed on the patient's serum, is used for the laboratory diagnosis of:",
                    options: [
                        { key: "a", text: "Cholera caused by Vibrio cholerae" },
                        { key: "b", text: "Hepatitis B caused by a DNA virus" },
                        { key: "c", text: "Tuberculosis caused by Mycobacterium tuberculosis" },
                        { key: "d", text: "Typhoid caused by Salmonella typhi" }
                    ],
                    answer: "d",
                    explanation: "The <strong>Widal test</strong> detects agglutinating antibodies against the O (somatic) and H (flagellar) antigens of <em>Salmonella typhi</em>, and becomes positive in the second week of enteric fever. Cholera is confirmed by stool culture and hanging-drop motility, tuberculosis by the Mantoux test, sputum AFB smear or chest X-ray, and hepatitis B by the HBsAg test."
                },
                {
                    id: "d21z34",
                    text: "BCG, the vaccine given against tuberculosis, contains a weakened but living strain of Mycobacterium bovis. It is therefore classified as a:",
                    options: [
                        { key: "a", text: "Toxoid vaccine, like the one used against tetanus" },
                        { key: "b", text: "Killed or inactivated vaccine, like Salk polio vaccine" },
                        { key: "c", text: "Live attenuated vaccine, like the Sabin polio vaccine" },
                        { key: "d", text: "Passive immune serum containing ready-made antibodies" }
                    ],
                    answer: "c",
                    explanation: "Bacillus Calmette–Guérin is <em>M. bovis</em> whose virulence has been lost by repeated subculture — a <strong>live attenuated</strong> vaccine, which multiplies a little in the host and gives long-lasting immunity from a single dose. Toxoids (tetanus, diphtheria) are detoxified exotoxins, inactivated vaccines contain killed organisms, and antiserum gives artificially acquired <em>passive</em> immunity."
                },
                {
                    id: "d21z35",
                    text: "HIV, a retrovirus carrying reverse transcriptase, destroys mainly the:",
                    options: [
                        { key: "a", text: "B lymphocytes that secrete circulating antibody" },
                        { key: "b", text: "CD4 helper T lymphocytes of the immune system" },
                        { key: "c", text: "Erythrocytes, causing progressive anaemia" },
                        { key: "d", text: "Platelets, causing spontaneous internal bleeding" }
                    ],
                    answer: "b",
                    explanation: "The gp120 spike of HIV binds the <strong>CD4 receptor</strong> of helper T cells (and macrophages); reverse transcriptase copies the viral RNA into DNA that integrates as a provirus. As helper T cells fall below about 200 per $\\mathrm{mm^{3}}$, both cell-mediated and antibody responses collapse and opportunistic infections such as <em>Pneumocystis</em> pneumonia, TB and candidiasis define AIDS."
                },
                {
                    id: "d21z36",
                    text: "Antibodies that pass from the mother to the foetus across the placenta give the baby:",
                    options: [
                        { key: "a", text: "Naturally acquired active immunity, lifelong in duration" },
                        { key: "b", text: "Artificially acquired active immunity, produced by vaccination" },
                        { key: "c", text: "Naturally acquired passive immunity, lasting a few months" },
                        { key: "d", text: "Innate immunity, present from the first cell division" }
                    ],
                    answer: "c",
                    explanation: "The baby receives <em>ready-made</em> IgG rather than making its own, so the protection is <strong>passive</strong>; because it happens without medical intervention it is <em>naturally acquired</em>, and it fades in a few months as the maternal antibody is catabolised. Active immunity (natural after an infection, artificial after a vaccine) is slower to appear but leaves memory cells; innate immunity is non-specific and inherited."
                },
                {
                    id: "d21z37",
                    text: "Amniocentesis is legally restricted in Nepal because of its misuse for sex determination, but its genuine medical purpose is to:",
                    options: [
                        { key: "a", text: "Detect chromosomal and metabolic disorders of the foetus" },
                        { key: "b", text: "Correct a defective gene while the foetus is in the uterus" },
                        { key: "c", text: "Supply extra amniotic fluid to a dehydrated foetus" },
                        { key: "d", text: "Fertilise the ovum outside the body before implantation" }
                    ],
                    answer: "a",
                    explanation: "In amniocentesis a small sample of amniotic fluid is withdrawn at 14–16 weeks; the sloughed foetal cells in it are cultured and karyotyped to diagnose <strong>chromosomal abnormalities</strong> such as Down's syndrome, and the fluid is assayed for metabolic disorders and neural tube defects. It is purely diagnostic — it neither treats the foetus nor has anything to do with in-vitro fertilisation."
                },
                {
                    id: "d21z38",
                    text: "In the activated sludge stage of sewage treatment the BOD of the effluent falls sharply, mainly because:",
                    options: [
                        { key: "a", text: "Chlorine added to the tank oxidises all organic matter" },
                        { key: "b", text: "Heavy solids simply settle out under gravity" },
                        { key: "c", text: "Anaerobic methanogens release biogas from the sludge" },
                        { key: "d", text: "Aerobic microbial flocs consume the organic matter" }
                    ],
                    answer: "d",
                    explanation: "In secondary (biological) treatment the primary effluent is vigorously aerated so that <strong>flocs of aerobic bacteria and fungi</strong> multiply and oxidise the dissolved organic matter, cutting the biochemical oxygen demand by 90% or more. Methanogens act later, in the anaerobic digester that treats the settled sludge and yields biogas; sedimentation alone is primary treatment, and chlorination is a final disinfection step."
                },
                {
                    id: "d21z39",
                    text: "A site listed under the Ramsar Convention, such as Koshi Tappu or Ghodaghodi Tal, is protected because it is a:",
                    options: [
                        { key: "a", text: "Tropical rain forest with very high endemism" },
                        { key: "b", text: "Wetland of international importance" },
                        { key: "c", text: "Mountain glacier feeding a major river system" },
                        { key: "d", text: "Grassland reserved for migratory ungulates" }
                    ],
                    answer: "b",
                    explanation: "The Ramsar Convention (Iran, 1971) is an intergovernmental treaty for the conservation and wise use of <strong>wetlands</strong> — lakes, marshes, rivers and their waterfowl. Nepal has ten Ramsar sites including Koshi Tappu, Beeshazar Tal, Ghodaghodi Tal and the Gokyo and Gosaikunda lake complexes. Hotspots, national parks and conservation areas are separate categories of protection."
                },
                {
                    id: "d21z40",
                    text: "DDT sprayed on a lake reaches its highest concentration in the fish-eating birds at the top of the food chain because the pesticide is:",
                    options: [
                        { key: "a", text: "Water soluble and rapidly excreted by every organism" },
                        { key: "b", text: "Converted into a harmless salt by the phytoplankton" },
                        { key: "c", text: "Synthesised afresh in the liver of the birds" },
                        { key: "d", text: "Fat soluble and non-biodegradable, so it is biomagnified" }
                    ],
                    answer: "d",
                    explanation: "DDT is lipid soluble and chemically stable, so it is stored in body fat instead of being excreted; each consumer eats many organisms of the level below and accumulates their whole load. The concentration therefore rises step by step along the food chain — <strong>biomagnification</strong> — and in birds it interferes with calcium metabolism, producing thin egg shells and breeding failure."
                }
            ]
        },
        {
            id: "bot21",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q41–80 · complete CEE weightage: basic components 2, biodiversity 9, ecology 4, cell biology 5, genetics 6, anatomy 3, physiology 6, developmental 2, applied 3.",
            questions: [
                {
                    id: "d21b41",
                    text: "Sucrose is described as a non-reducing sugar, unlike maltose and lactose, because in sucrose:",
                    options: [
                        { key: "a", text: "The anomeric carbons of both glucose and fructose are locked in the glycosidic bond" },
                        { key: "b", text: "Both of its monosaccharide units are ketoses and not aldoses" },
                        { key: "c", text: "The glycosidic linkage joins carbon 1 of glucose to carbon 4 of fructose" },
                        { key: "d", text: "It has no free hydroxyl group anywhere in the molecule" }
                    ],
                    answer: "a",
                    explanation: "A sugar reduces Fehling's or Benedict's reagent only if it has a free anomeric (potentially aldehydic or ketonic) carbon. In sucrose the $\\alpha$-1,2 glycosidic bond ties C-1 of glucose to C-2 of fructose — <strong>both</strong> anomeric carbons — so the ring cannot open and no free carbonyl group is available. Maltose and lactose retain one free anomeric carbon and are therefore reducing. Sucrose still has many free hydroxyl groups."
                },
                {
                    id: "d21b42",
                    text: "A competitive inhibitor structurally resembles the substrate. Its effect on the kinetics of the enzyme is that it:",
                    options: [
                        { key: "a", text: "Lowers $V_{max}$ while the Michaelis constant $K_m$ is unchanged" },
                        { key: "b", text: "Raises the apparent $K_m$ while $V_{max}$ is unchanged" },
                        { key: "c", text: "Lowers both $V_{max}$ and $K_m$ in the same proportion" },
                        { key: "d", text: "Denatures the enzyme irreversibly at the active site" }
                    ],
                    answer: "b",
                    explanation: "A competitive inhibitor binds the <strong>active site</strong> itself, so more substrate is needed to reach half-maximal velocity — the apparent $K_m$ rises — but a large excess of substrate can still saturate every enzyme molecule, so $V_{max}$ is unaltered. Malonate inhibiting succinic dehydrogenase is the classical example. A non-competitive inhibitor binds elsewhere and lowers $V_{max}$ without changing $K_m$."
                },
                {
                    id: "d21b43",
                    text: "Following the rules of binomial nomenclature, the correct printed form of the scientific name of neem is:",
                    options: [
                        { key: "a", text: "azadirachta Indica, both words in ordinary type" },
                        { key: "b", text: "Indica azadirachta, the species placed first" },
                        { key: "c", text: "AZADIRACHTA INDICA, printed in capitals" },
                        { key: "d", text: "Azadirachta indica, printed in italics" }
                    ],
                    answer: "d",
                    explanation: "Linnaeus's binomial system requires the <strong>generic name first with a capital initial</strong> and the <strong>specific epithet second in small letters</strong>, the whole name being printed in italics (or underlined separately when handwritten). The name is Latinised, and the author's name may follow in roman type. So <em>Azadirachta indica</em> is correct."
                },
                {
                    id: "d21b44",
                    text: "Gram-positive bacteria retain the crystal violet–iodine complex during Gram staining because their cell wall has:",
                    options: [
                        { key: "a", text: "A thick peptidoglycan layer with teichoic acid and no outer membrane" },
                        { key: "b", text: "A thin peptidoglycan layer under an outer lipopolysaccharide membrane" },
                        { key: "c", text: "Chitin microfibrils embedded in a protein matrix" },
                        { key: "d", text: "Cellulose microfibrils cemented by pectin" }
                    ],
                    answer: "a",
                    explanation: "The Gram-positive wall is a thick (20–80 nm) multilayer of <strong>peptidoglycan (murein)</strong> with teichoic acids; alcohol shrinks the mesh and traps the dye complex, so the cell stays purple. Gram-negative walls have only a thin peptidoglycan layer plus an outer membrane of lipopolysaccharide that is dissolved by alcohol, releasing the dye and letting safranin stain the cell pink. Chitin is a fungal wall polymer and cellulose a plant one."
                },
                {
                    id: "d21b45",
                    text: "Tobacco mosaic virus, the first virus ever crystallised, has a rod-shaped capsid of about 2130 identical protein subunits enclosing a genome of:",
                    options: [
                        { key: "a", text: "Double-stranded DNA, as in bacteriophage T4" },
                        { key: "b", text: "Single-stranded DNA, as in the $\\phi$X174 phage" },
                        { key: "c", text: "Single-stranded RNA, spirally coiled inside the rod" },
                        { key: "d", text: "Double-stranded RNA, as in the reoviruses" }
                    ],
                    answer: "c",
                    explanation: "TMV is a helical plant virus whose genome is a single molecule of <strong>single-stranded RNA</strong> ($\\approx6400$ nucleotides) wound in a spiral within the helically arranged capsomeres. Stanley crystallised it in 1935. Most plant viruses are ssRNA viruses, most bacteriophages are dsDNA viruses, and only a few groups such as the reoviruses carry dsRNA."
                },
                {
                    id: "d21b46",
                    text: "The class of fungi in which only the asexual stage is known, so that they are called 'fungi imperfecti', is:",
                    options: [
                        { key: "a", text: "Phycomycetes, with aseptate coenocytic hyphae" },
                        { key: "b", text: "Ascomycetes, producing ascospores inside an ascus" },
                        { key: "c", text: "Basidiomycetes, producing basidiospores on a basidium" },
                        { key: "d", text: "Deuteromycetes, reproducing only by conidia" }
                    ],
                    answer: "d",
                    explanation: "<strong>Deuteromycetes</strong> is an artificial 'form class' for fungi in which a sexual (perfect) stage has never been observed; they multiply by conidia and include <em>Alternaria</em>, <em>Colletotrichum</em> and <em>Trichoderma</em>. When the sexual stage is later discovered, the fungus is transferred to the appropriate class — which is exactly what happened to many former Deuteromycetes now placed in Ascomycetes."
                },
                {
                    id: "d21b47",
                    text: "Sexual reproduction in Spirogyra takes place by conjugation, in which:",
                    options: [
                        { key: "a", text: "A non-motile male gamete flows into the female through a conjugation tube" },
                        { key: "b", text: "A biflagellate antherozoid swims to a large non-motile egg" },
                        { key: "c", text: "Two similar biflagellate gametes fuse in the surrounding water" },
                        { key: "d", text: "The filament simply breaks up, each piece growing into a new plant" }
                    ],
                    answer: "a",
                    explanation: "Spirogyra shows <strong>physiological anisogamy</strong>: both gametes are non-flagellate aplanogametes, but the contents of one cell (functionally male) amoeboidly migrate through the conjugation tube into the other cell and fuse there to give a zygospore. In scalariform conjugation the tubes between two filaments look like the rungs of a ladder; in lateral conjugation adjacent cells of one filament unite. Fragmentation is its asexual method."
                },
                {
                    id: "d21b48",
                    text: "Which statement correctly compares the dominant phase of the life cycle of Marchantia and Dryopteris?",
                    options: [
                        { key: "a", text: "Both are gametophyte-dominant, the sporophyte being short-lived" },
                        { key: "b", text: "Both are sporophyte-dominant, the gametophyte being short-lived" },
                        { key: "c", text: "Marchantia is sporophyte-dominant while Dryopteris is gametophyte-dominant" },
                        { key: "d", text: "Marchantia is gametophyte-dominant while Dryopteris is sporophyte-dominant" }
                    ],
                    answer: "d",
                    explanation: "In the liverwort <strong>Marchantia</strong> the green dichotomously branched thallus is the haploid <em>gametophyte</em>, and the small sporophyte (foot, seta, capsule) stays attached to and dependent on it — the general bryophyte pattern; the gemma cups on this thallus give vegetative propagation. In the fern <strong>Dryopteris</strong> the leafy plant with rhizome, fronds and vascular tissue is the diploid <em>sporophyte</em>, while the gametophyte is a tiny independent heart-shaped prothallus."
                },
                {
                    id: "d21b49",
                    text: "Which anatomical feature distinguishes the wood of Pinus from that of a typical angiosperm tree?",
                    options: [
                        { key: "a", text: "Its xylem lacks vessels and its phloem lacks companion cells" },
                        { key: "b", text: "Its xylem has vessels but its phloem lacks sieve tubes" },
                        { key: "c", text: "Its xylem consists only of vessels without any tracheids" },
                        { key: "d", text: "Its vascular bundles are scattered and closed, without cambium" }
                    ],
                    answer: "a",
                    explanation: "Gymnosperm wood is 'non-porous': water is conducted by <strong>tracheids alone</strong>, vessels being absent (except in Gnetales), and the phloem has sieve cells with albuminous cells instead of sieve tubes with <strong>companion cells</strong>. Angiosperm wood has both vessels and companion cells. Scattered closed bundles are a monocot stem feature, not a gymnosperm one."
                },
                {
                    id: "d21b50",
                    text: "A flower with the floral formula $\\oplus\\ \\mathrm{K_{(5)}\\ C_{(5)}\\ A_{5}\\ \\underline{G}_{(2)}}$, bicarpellary syncarpous with an obliquely placed ovary and axile placentation, belongs to the family:",
                    options: [
                        { key: "a", text: "Brassicaceae, with tetradynamous stamens" },
                        { key: "b", text: "Solanaceae, which includes potato and tobacco" },
                        { key: "c", text: "Fabaceae, with a papilionaceous corolla" },
                        { key: "d", text: "Liliaceae, with a perianth of six tepals" }
                    ],
                    answer: "b",
                    explanation: "The gamosepalous calyx and gamopetalous corolla of five each, five epipetalous stamens, and a <strong>bicarpellary syncarpous superior ovary set obliquely</strong> with swollen axile placentae are the diagnostic characters of <strong>Solanaceae</strong> (potato, tomato, brinjal, chilli, tobacco, <em>Datura</em>). Brassicaceae is $\\mathrm{K_{2+2}C_4A_{2+4}\\underline{G}_{(2)}}$, Fabaceae is zygomorphic with a diadelphous androecium and a monocarpellary ovary, and Liliaceae has $\\mathrm{P_{3+3}A_{3+3}\\underline{G}_{(3)}}$."
                },
                {
                    id: "d21b51",
                    text: "Rauwolfia serpentina (sarpagandha) is one of the important medicinal plants of Nepal. The alkaloid obtained from its root is used to treat:",
                    options: [
                        { key: "a", text: "Malaria, by killing the parasite in red blood cells" },
                        { key: "b", text: "High blood pressure, by acting also as a tranquilliser" },
                        { key: "c", text: "Diabetes mellitus, by stimulating insulin release" },
                        { key: "d", text: "Bacterial dysentery, by acting as a broad antibiotic" }
                    ],
                    answer: "b",
                    explanation: "The root of <em>Rauwolfia serpentina</em> yields <strong>reserpine</strong>, an indole alkaloid long used as an antihypertensive and sedative/tranquilliser. Quinine from <em>Cinchona</em> is the antimalarial, and neither of the remaining uses belongs to sarpagandha. Other CEE-listed medicinal plants of Nepal are <em>Azadirachta indica</em>, <em>Ophiocordyceps sinensis</em>, <em>Ocimum sanctum</em> and <em>Zingiber officinale</em>."
                },
                {
                    id: "d21b52",
                    text: "In a grassland ecosystem the producers fix 10000 kJ of energy. Following Lindeman's ten per cent law, the energy available to the secondary consumers is:",
                    options: [
                        { key: "a", text: "1000 kJ, held by the herbivores of the field" },
                        { key: "b", text: "100 kJ, held by the primary carnivores" },
                        { key: "c", text: "10 kJ, held by the top carnivores" },
                        { key: "d", text: "1 kJ, lost as heat in respiration" }
                    ],
                    answer: "b",
                    explanation: "Only about a tenth of the energy of one trophic level is fixed in the tissue of the next, the rest being lost in respiration, excretion and as unassimilated matter. Producers 10000 kJ $\\rightarrow$ primary consumers (herbivores) 1000 kJ $\\rightarrow$ <strong>secondary consumers (primary carnivores) 100 kJ</strong> $\\rightarrow$ tertiary consumers 10 kJ. This steep loss is why food chains rarely exceed four or five links."
                },
                {
                    id: "d21b53",
                    text: "In the nitrogen cycle the oxidation of ammonia to nitrite in the soil is carried out by:",
                    options: [
                        { key: "a", text: "Nitrobacter, which completes the process to nitrate" },
                        { key: "b", text: "Rhizobium, living in the root nodules of legumes" },
                        { key: "c", text: "Nitrosomonas, a chemoautotrophic soil bacterium" },
                        { key: "d", text: "Pseudomonas denitrificans, releasing free nitrogen" }
                    ],
                    answer: "c",
                    explanation: "Nitrification occurs in two steps performed by different chemoautotrophs: $\\mathrm{NH_3\\rightarrow NO_2^{-}}$ by <strong><em>Nitrosomonas</em></strong> (and <em>Nitrococcus</em>), then $\\mathrm{NO_2^{-}\\rightarrow NO_3^{-}}$ by <em>Nitrobacter</em>. <em>Rhizobium</em> fixes atmospheric nitrogen symbiotically, and <em>Pseudomonas</em> and <em>Thiobacillus denitrificans</em> reduce nitrate back to $\\mathrm{N_2}$ during denitrification."
                },
                {
                    id: "d21b54",
                    text: "Which statement about the depletion of stratospheric ozone by chlorofluorocarbons is correct?",
                    options: [
                        { key: "a", text: "One chlorine free radical destroys thousands of ozone molecules catalytically" },
                        { key: "b", text: "Each chlorine atom is used up permanently after destroying one ozone molecule" },
                        { key: "c", text: "CFCs absorb ultraviolet light and thereby thicken the ozone layer" },
                        { key: "d", text: "Ozone depletion warms the earth by trapping outgoing infrared radiation" }
                    ],
                    answer: "a",
                    explanation: "UV radiation splits a CFC molecule to release a chlorine free radical, which reacts $\\mathrm{Cl^{\\bullet}+O_3\\rightarrow ClO^{\\bullet}+O_2}$ and then $\\mathrm{ClO^{\\bullet}+O\\rightarrow Cl^{\\bullet}+O_2}$ — the chlorine is <strong>regenerated</strong>, so a single atom can wreck up to $10^5$ ozone molecules before being removed. A thinner ozone shield lets more UV-B through, causing skin cancer, cataract and reduced photosynthesis; global warming is a separate greenhouse-gas problem."
                },
                {
                    id: "d21b55",
                    text: "The pioneer community of a xerosere developing on a bare rock surface consists of:",
                    options: [
                        { key: "a", text: "Mosses that hold soil particles between their rhizoids" },
                        { key: "b", text: "Crustose lichens that etch the rock with organic acids" },
                        { key: "c", text: "Phytoplankton floating in the surface water film" },
                        { key: "d", text: "Annual grasses and herbs rooted in the crevices" }
                    ],
                    answer: "b",
                    explanation: "On bare rock the first colonisers must survive extreme drought and no soil: <strong>crustose lichens</strong> qualify, secreting acids that weather the rock and adding humus when they die. The succession then goes foliose lichen $\\rightarrow$ moss $\\rightarrow$ herb $\\rightarrow$ shrub $\\rightarrow$ climax forest. Phytoplankton are the pioneers of a <em>hydrosere</em>, which begins in open water and ends in the same kind of forest climax."
                },
                {
                    id: "d21b56",
                    text: "A bacterial cell lacks all of the following structures EXCEPT:",
                    options: [
                        { key: "a", text: "A mitochondrion bounded by a double membrane" },
                        { key: "b", text: "A Golgi body made of flattened cisternae" },
                        { key: "c", text: "A nuclear envelope with pore complexes" },
                        { key: "d", text: "A ribosome of the 70S type" }
                    ],
                    answer: "d",
                    explanation: "Prokaryotes have no membrane-bound organelles and no true nucleus: mitochondria, plastids, ER, Golgi, lysosomes and a nuclear envelope are all absent, and respiration occurs on mesosomes/plasma membrane. What they do have is <strong>70S ribosomes</strong> (50S + 30S subunits). Significantly, the ribosomes of mitochondria and chloroplasts are also 70S, which supports the endosymbiotic theory of their origin."
                },
                {
                    id: "d21b57",
                    text: "Glucose enters a cell down its concentration gradient through a specific carrier protein, without any expenditure of ATP. This transport is:",
                    options: [
                        { key: "a", text: "Simple diffusion straight through the lipid bilayer" },
                        { key: "b", text: "Osmosis of solute across a semipermeable membrane" },
                        { key: "c", text: "Active transport requiring a proton pump" },
                        { key: "d", text: "Facilitated diffusion, passive but carrier-mediated" }
                    ],
                    answer: "d",
                    explanation: "<strong>Facilitated diffusion</strong> is passive (it follows the gradient and needs no ATP) yet uses a membrane protein, so it is <em>specific</em> and shows saturation kinetics — unlike simple diffusion, which needs no protein and does not saturate. Active transport moves solutes <em>against</em> the gradient using ATP, and osmosis refers to the diffusion of the <em>solvent</em>, water."
                },
                {
                    id: "d21b58",
                    text: "Which pair of cell organelles is semi-autonomous, each possessing its own circular DNA and 70S ribosomes?",
                    options: [
                        { key: "a", text: "Endoplasmic reticulum and Golgi apparatus" },
                        { key: "b", text: "Mitochondrion and chloroplast" },
                        { key: "c", text: "Lysosome and peroxisome" },
                        { key: "d", text: "Nucleolus and centriole" }
                    ],
                    answer: "b",
                    explanation: "<strong>Mitochondria and plastids</strong> possess naked circular DNA, 70S ribosomes and their own transcription–translation machinery, divide by fission, and can therefore make some of their own proteins — hence 'semi-autonomous'. These prokaryote-like features are the basis of Margulis's endosymbiotic theory. The remaining organelles listed have neither DNA nor ribosomes of their own."
                },
                {
                    id: "d21b59",
                    text: "Lysosomes are nicknamed the 'suicide bags' of the cell because they:",
                    options: [
                        { key: "a", text: "Contain hydrolytic enzymes that digest the cell's own contents when they rupture" },
                        { key: "b", text: "Manufacture the toxic hydrogen peroxide used to kill invading bacteria" },
                        { key: "c", text: "Store the enzymes needed to make ATP during aerobic respiration" },
                        { key: "d", text: "Package secretory proteins into vesicles for export from the cell" }
                    ],
                    answer: "a",
                    explanation: "Lysosomes, discovered by de Duve, are single-membrane vesicles budded from the Golgi and packed with about fifty <strong>acid hydrolases</strong>. If the membrane breaks, these enzymes are released into the cytoplasm and autolyse the cell — as happens normally in the resorption of a tadpole's tail. Peroxidative $\\mathrm{H_2O_2}$ chemistry belongs to peroxisomes, ATP synthesis to mitochondria and secretory packaging to the Golgi."
                },
                {
                    id: "d21b60",
                    text: "In a plant cell with $2n=24$, the number of chromosomes and the number of chromatids present in each daughter cell at the end of the first meiotic division are respectively:",
                    options: [
                        { key: "a", text: "24 and 48" },
                        { key: "b", text: "12 and 24" },
                        { key: "c", text: "12 and 12" },
                        { key: "d", text: "24 and 24" }
                    ],
                    answer: "b",
                    explanation: "Meiosis I is the <em>reductional</em> division: homologues, not sister chromatids, separate, so each daughter nucleus receives one member of each pair — <strong>12 chromosomes</strong>. Each of those is still double, consisting of two chromatids joined at the centromere, giving <strong>24 chromatids</strong>. Only in meiosis II (the equational division) do the centromeres split, ending with 12 chromosomes of 12 single chromatids in each of the four cells."
                },
                {
                    id: "d21b61",
                    text: "A double-stranded DNA molecule contains 30 per cent adenine. The percentage of guanine in the same molecule is:",
                    options: [
                        { key: "a", text: "30 per cent" },
                        { key: "b", text: "70 per cent" },
                        { key: "c", text: "40 per cent" },
                        { key: "d", text: "20 per cent" }
                    ],
                    answer: "d",
                    explanation: "By Chargaff's rule $A=T$ and $G=C$. If $A=30\\%$ then $T=30\\%$, so $A+T=60\\%$ and $G+C=100-60=40\\%$. Since $G=C$, each is $40/2=\\mathbf{20\\%}$. Note that these equalities hold only for double-stranded DNA — single-stranded DNA and RNA do not obey them."
                },
                {
                    id: "d21b62",
                    text: "During DNA replication one strand is copied continuously while the other is built as short Okazaki fragments, because DNA polymerase can add nucleotides only:",
                    options: [
                        { key: "a", text: "In the $3'\\rightarrow5'$ direction of the growing chain" },
                        { key: "b", text: "In the $5'\\rightarrow3'$ direction of the growing chain" },
                        { key: "c", text: "After the two strands have separated completely" },
                        { key: "d", text: "At the site where the replication fork finally closes" }
                    ],
                    answer: "b",
                    explanation: "DNA polymerase adds each new nucleotide to the free 3'-OH end, so the daughter chain can only grow $\\mathbf{5'\\rightarrow3'}$. As the two template strands are antiparallel, one of them is oriented so that continuous synthesis follows the moving fork (the <em>leading</em> strand) while the other must be made backwards in short pieces (the <em>lagging</em> strand), the Okazaki fragments being joined afterwards by DNA ligase."
                },
                {
                    id: "d21b63",
                    text: "The genetic code has 64 codons for 20 amino acids and is described as degenerate. Degeneracy means that:",
                    options: [
                        { key: "a", text: "Several different codons may specify the same amino acid" },
                        { key: "b", text: "A single codon may specify several different amino acids" },
                        { key: "c", text: "Three of the codons do not code for any amino acid" },
                        { key: "d", text: "The code is read continuously without any punctuation" }
                    ],
                    answer: "a",
                    explanation: "Of the 64 triplets, 61 are sense codons and 3 (UAA, UAG, UGA) are stop codons, so on average one amino acid is specified by three codons — leucine, serine and arginine by six each. This one-to-many relation is <strong>degeneracy</strong>, and it usually involves only the third base (wobble position), which buffers the protein against point mutations. The code is also unambiguous, non-overlapping, comma-less and nearly universal."
                },
                {
                    id: "d21b64",
                    text: "In Mirabilis jalapa a cross between a red-flowered (RR) and a white-flowered (rr) plant gives pink $F_1$ plants. Selfing the $F_1$ produces an $F_2$ in the ratio:",
                    options: [
                        { key: "a", text: "3 red : 1 white, the classical Mendelian ratio" },
                        { key: "b", text: "1 red : 1 white, as in a test cross" },
                        { key: "c", text: "9 red : 3 pink : 3 white : 1 intermediate" },
                        { key: "d", text: "1 red : 2 pink : 1 white, phenotype matching genotype" }
                    ],
                    answer: "d",
                    explanation: "Neither allele is dominant, so the heterozygote $Rr$ has its own intermediate phenotype (pink) — <strong>incomplete dominance</strong>. The $F_2$ genotypic ratio $1RR:2Rr:1rr$ is therefore expressed as the identical <strong>phenotypic ratio 1 red : 2 pink : 1 white</strong>, instead of Mendel's 3 : 1. The 3 : 1 ratio would reappear in the $F_2$ only if red were completely dominant."
                },
                {
                    id: "d21b65",
                    text: "Genes A and B lie 20 map units apart on the same chromosome. An individual of constitution AB/ab is test-crossed with a double recessive. The expected percentage of recombinant offspring is:",
                    options: [
                        { key: "a", text: "10 per cent, half of the map distance" },
                        { key: "b", text: "20 per cent, equal to the map distance" },
                        { key: "c", text: "40 per cent, twice the map distance" },
                        { key: "d", text: "50 per cent, as for unlinked genes" }
                    ],
                    answer: "b",
                    explanation: "One map unit (centimorgan) is <em>defined</em> as 1% recombination, so genes 20 cM apart give <strong>20% recombinants</strong> ($10\\%\\ Ab$ and $10\\%\\ aB$) and 80% parental types ($40\\%\\ AB$ and $40\\%\\ ab$). This is incomplete linkage. A 50 : 50 outcome would mean the genes are on different chromosomes or so far apart on one chromosome that they assort independently."
                },
                {
                    id: "d21b66",
                    text: "A colour-blind man marries a woman who is homozygous normal for the gene. Their children will be:",
                    options: [
                        { key: "a", text: "All the sons colour blind and all the daughters normal" },
                        { key: "b", text: "Half the sons and half the daughters colour blind" },
                        { key: "c", text: "All the sons normal and all the daughters carriers" },
                        { key: "d", text: "All the children colour blind, as the trait is dominant" }
                    ],
                    answer: "c",
                    explanation: "Red–green colour blindness is X-linked recessive. The father is $X^{c}Y$ and the mother $X^{C}X^{C}$. Sons receive the father's <strong>Y</strong> and the mother's normal $X^{C}$, so every son is $X^{C}Y$ — normal. Daughters receive $X^{c}$ from the father and $X^{C}$ from the mother, so every daughter is $X^{C}X^{c}$ — a phenotypically normal <strong>carrier</strong>. The trait can thus skip a generation and reappear in the grandsons."
                },
                {
                    id: "d21b67",
                    text: "Vascular bundles that are conjoint, collateral and open, arranged in a ring around the pith, are characteristic of the:",
                    options: [
                        { key: "a", text: "Monocot stem, as in a maize internode" },
                        { key: "b", text: "Dicot stem, as in a sunflower internode" },
                        { key: "c", text: "Dicot root, with exarch xylem" },
                        { key: "d", text: "Monocot root, with many xylem arches" }
                    ],
                    answer: "b",
                    explanation: "In a dicot stem xylem and phloem lie in the same radius (conjoint) with phloem outside xylem (collateral) and a strip of cambium between them (<strong>open</strong>), the bundles forming a ring — hence the capacity for secondary growth. Monocot stem bundles are scattered and <em>closed</em>; in roots of both groups the bundles are <em>radial</em>, xylem and phloem lying on separate radii."
                },
                {
                    id: "d21b68",
                    text: "In a transverse section of a typical monocot root the xylem is:",
                    options: [
                        { key: "a", text: "Polyarch and exarch, with more than six xylem strands" },
                        { key: "b", text: "Tetrarch and endarch, with the protoxylem inside" },
                        { key: "c", text: "Diarch and endarch, with a large pith" },
                        { key: "d", text: "Monarch and mesarch, with a single strand" }
                    ],
                    answer: "a",
                    explanation: "Roots have radial bundles with <strong>exarch</strong> xylem — the protoxylem lies towards the periphery and the metaxylem towards the centre. A monocot root typically has many (more than six) xylem and phloem strands, i.e. it is <strong>polyarch</strong>, and it retains a large pith. Dicot roots are usually di- to hexarch with little or no pith, and endarch xylem is a <em>stem</em> feature."
                },
                {
                    id: "d21b69",
                    text: "Which simple permanent tissue supports young stems and petioles, being made of living cells whose walls are thickened with cellulose and pectin at the corners?",
                    options: [
                        { key: "a", text: "Parenchyma, with thin walls and large intercellular spaces" },
                        { key: "b", text: "Collenchyma, providing both strength and flexibility" },
                        { key: "c", text: "Sclerenchyma, with heavily lignified dead cells" },
                        { key: "d", text: "Xylem parenchyma, storing starch inside the wood" }
                    ],
                    answer: "b",
                    explanation: "<strong>Collenchyma</strong> is the mechanical tissue of growing organs: its cells are living, contain chloroplasts and are thickened with cellulose and pectin at the angles, so they give support while still allowing the organ to elongate — as in the ridges of a <em>Cucurbita</em> stem. Sclerenchyma (fibres and sclereids) is dead and lignified and gives rigid, non-extensible support; parenchyma is a packing and storage tissue."
                },
                {
                    id: "d21b70",
                    text: "A plant cell has an osmotic pressure of 12 atmospheres and a turgor pressure of 5 atmospheres. Its diffusion pressure deficit is:",
                    options: [
                        { key: "a", text: "17 atmospheres" },
                        { key: "b", text: "Zero, since the cell is fully turgid" },
                        { key: "c", text: "2.4 atmospheres" },
                        { key: "d", text: "7 atmospheres" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{DPD}=\\mathrm{OP}-\\mathrm{TP}=12-5=\\mathbf{7\\ atm}$. DPD (suction pressure) is the measure of a cell's water-absorbing capacity; in modern terms $\\Psi_w=\\Psi_s+\\Psi_p=-12+5=-7$ atm, the same value with the opposite sign. A fully turgid cell has $\\mathrm{TP}=\\mathrm{OP}$ so DPD becomes zero and water uptake stops; in a flaccid cell $\\mathrm{TP}=0$ and $\\mathrm{DPD}=\\mathrm{OP}$."
                },
                {
                    id: "d21b71",
                    text: "The most widely accepted explanation of the ascent of sap to the top of a tall tree is:",
                    options: [
                        { key: "a", text: "Root pressure alone, developed by active ion uptake" },
                        { key: "b", text: "The transpiration pull and cohesion–tension theory of Dixon and Joly" },
                        { key: "c", text: "The pulsation of living cells of the cortex, as proposed by Bose" },
                        { key: "d", text: "Capillarity in the vessels, aided by imbibition of the walls" }
                    ],
                    answer: "b",
                    explanation: "Evaporation from the mesophyll lowers the water potential of the leaf and pulls on the continuous water column; because water molecules cohere strongly to one another and adhere to the lignified walls, the column does not break and is drawn up the xylem — the <strong>cohesion–tension (transpiration pull) theory</strong>. Root pressure is absent in fast-transpiring and gymnosperm trees and cannot raise water beyond about 20 m, and capillarity accounts for only a few centimetres."
                },
                {
                    id: "d21b72",
                    text: "The oxygen released during photosynthesis comes from the photolysis of water, an event associated with:",
                    options: [
                        { key: "a", text: "Photosystem I, whose reaction centre is P700" },
                        { key: "b", text: "Cyclic photophosphorylation on the stroma lamellae" },
                        { key: "c", text: "The Calvin cycle in the stroma of the chloroplast" },
                        { key: "d", text: "Photosystem II, whose reaction centre is P680" }
                    ],
                    answer: "d",
                    explanation: "The oxygen-evolving complex containing manganese is bound to <strong>photosystem II</strong> on the inner side of the thylakoid; it splits water, $\\mathrm{2H_2O\\rightarrow4H^{+}+4e^{-}+O_2}$, replacing electrons lost by P680 and adding protons to the lumen for chemiosmosis. This was proved by Ruben and Kamen with $\\mathrm{H_2^{18}O}$. PS I passes electrons to $\\mathrm{NADP^{+}}$, and the Calvin cycle only fixes $\\mathrm{CO_2}$."
                },
                {
                    id: "d21b73",
                    text: "In a $\\mathrm{C_4}$ plant such as maize or sugarcane, the first stable product of carbon dioxide fixation is:",
                    options: [
                        { key: "a", text: "3-phosphoglyceric acid, a three-carbon acid" },
                        { key: "b", text: "Oxaloacetic acid, a four-carbon acid" },
                        { key: "c", text: "Ribulose-1,5-bisphosphate, a five-carbon sugar" },
                        { key: "d", text: "Phosphoenolpyruvate, a three-carbon acceptor" }
                    ],
                    answer: "b",
                    explanation: "In the Hatch–Slack pathway $\\mathrm{CO_2}$ is first fixed in the <em>mesophyll</em> cells by PEP carboxylase onto phosphoenolpyruvate, giving the four-carbon <strong>oxaloacetate</strong>, which is reduced to malate and shuttled into the bundle-sheath cells (Kranz anatomy) where it is decarboxylated to feed the Calvin cycle. PEP carboxylase has no affinity for $\\mathrm{O_2}$, so $\\mathrm{C_4}$ plants avoid photorespiration. PGA is the first product in $\\mathrm{C_3}$ plants."
                },
                {
                    id: "d21b74",
                    text: "During the complete aerobic respiration of one molecule of glucose, the largest number of ATP molecules is produced:",
                    options: [
                        { key: "a", text: "In glycolysis, by substrate-level phosphorylation" },
                        { key: "b", text: "In the oxidative decarboxylation of pyruvate" },
                        { key: "c", text: "In the electron transport chain, by oxidative phosphorylation" },
                        { key: "d", text: "In the Krebs cycle, by substrate-level phosphorylation" }
                    ],
                    answer: "c",
                    explanation: "Glycolysis gives a net 2 ATP and the Krebs cycle 2 GTP/ATP by substrate-level phosphorylation; the remaining ~34 of the classical 38 ATP are made when the NADH and $\\mathrm{FADH_2}$ collected from all the earlier steps are oxidised by the <strong>electron transport chain</strong> on the inner mitochondrial membrane, the proton gradient driving ATP synthase (chemiosmosis). That is also why the final yield collapses to 2 ATP in the absence of oxygen."
                },
                {
                    id: "d21b75",
                    text: "Cutting off the apical bud of a plant makes the lateral buds sprout, because the operation removes the source of:",
                    options: [
                        { key: "a", text: "Auxin, which was maintaining apical dominance" },
                        { key: "b", text: "Gibberellin, which was causing internodal elongation" },
                        { key: "c", text: "Cytokinin, which was delaying the ageing of leaves" },
                        { key: "d", text: "Abscisic acid, which was enforcing bud dormancy" }
                    ],
                    answer: "a",
                    explanation: "<strong>Auxin (IAA)</strong> made in the shoot apex moves down and suppresses the growth of lateral buds — apical dominance. Decapitation removes the auxin supply, the laterals escape inhibition and the plant becomes bushy, which is the basis of pruning and hedging. Gibberellins cause bolting and stem elongation, cytokinins promote cell division and delay senescence, and ABA is the stress/dormancy hormone."
                },
                {
                    id: "d21b76",
                    text: "In an angiosperm whose somatic cells have $2n=24$ chromosomes, the primary endosperm nucleus formed after double fertilisation contains:",
                    options: [
                        { key: "a", text: "12 chromosomes, being haploid like the gametes" },
                        { key: "b", text: "24 chromosomes, being diploid like the zygote" },
                        { key: "c", text: "36 chromosomes, being triploid" },
                        { key: "d", text: "48 chromosomes, being tetraploid" }
                    ],
                    answer: "c",
                    explanation: "In double fertilisation one male gamete ($n=12$) fuses with the egg to give the diploid zygote, while the second male gamete ($n=12$) fuses with the <strong>two polar nuclei</strong> ($12+12$) in triple fusion. The primary endosperm nucleus is therefore $12+12+12=\\mathbf{36}$, i.e. <strong>3n</strong>. Double fertilisation, discovered by Nawaschin, is unique to angiosperms."
                },
                {
                    id: "d21b77",
                    text: "Cleistogamous flowers, such as those of Commelina and Viola, never open. Consequently they:",
                    options: [
                        { key: "a", text: "Are invariably self-pollinated and always set seed" },
                        { key: "b", text: "Are cross-pollinated by insects entering the bud" },
                        { key: "c", text: "Produce a great deal of light pollen for wind dispersal" },
                        { key: "d", text: "Fail to set seed unless the bud is opened artificially" }
                    ],
                    answer: "a",
                    explanation: "Because the perianth stays closed, the anthers and stigma of a cleistogamous flower lie side by side and pollen is shed directly on the stigma — obligatory <strong>autogamy</strong> with assured seed set even when no pollinator is available. The disadvantage is the complete loss of genetic recombination. Such plants often bear <em>chasmogamous</em> flowers as well, which open normally and allow cross-pollination."
                },
                {
                    id: "d21b78",
                    text: "Virus-free plants can be raised from a systemically infected stock by tissue culture, provided the explant used is the:",
                    options: [
                        { key: "a", text: "Mature leaf lamina with fully differentiated mesophyll" },
                        { key: "b", text: "Endosperm tissue taken from the ripening seed" },
                        { key: "c", text: "Cambial ring of the older woody stem" },
                        { key: "d", text: "Shoot apical meristem, which the virus rarely reaches" }
                    ],
                    answer: "d",
                    explanation: "The <strong>apical meristem</strong> has no vascular connection and divides faster than the virus can move, so its cells usually remain virus free; micropropagation from such a meristem tip yields healthy clones — the routine method for banana, potato and sugarcane. The technique rests on <em>totipotency</em>: the explant is grown on MS medium, forms a callus and is then induced to form shoots and roots by adjusting the auxin : cytokinin ratio."
                },
                {
                    id: "d21b79",
                    text: "The natural vector most commonly used to transfer a foreign gene into a dicot plant cell is the:",
                    options: [
                        { key: "a", text: "Ti plasmid of Agrobacterium tumefaciens" },
                        { key: "b", text: "F plasmid of Escherichia coli" },
                        { key: "c", text: "Lambda phage of the enteric bacteria" },
                        { key: "d", text: "Cosmid carrying the cos site of lambda" }
                    ],
                    answer: "a",
                    explanation: "<em>Agrobacterium tumefaciens</em> naturally inserts the T-DNA of its <strong>tumour-inducing (Ti) plasmid</strong> into the plant genome, causing crown gall; in the laboratory the tumour genes are disarmed and replaced by the gene of interest, making it 'nature's own genetic engineer'. Bt cotton and golden rice were produced this way. The other vectors listed are used for cloning in bacteria, not for transforming plants."
                },
                {
                    id: "d21b80",
                    text: "Azolla is valued as a biofertilizer in paddy fields because its leaf cavities harbour the nitrogen-fixing:",
                    options: [
                        { key: "a", text: "Cyanobacterium Anabaena azollae" },
                        { key: "b", text: "Bacterium Rhizobium leguminosarum" },
                        { key: "c", text: "Fungus Glomus forming vesicular arbuscular mycorrhiza" },
                        { key: "d", text: "Free-living bacterium Azotobacter chroococcum" }
                    ],
                    answer: "a",
                    explanation: "<em>Azolla</em> is a small floating water fern whose dorsal leaf lobes enclose the heterocystous cyanobacterium <strong><em>Anabaena azollae</em></strong>; the heterocysts fix atmospheric nitrogen, and the decaying fern releases it into the paddy soil. <em>Rhizobium</em> is the symbiont of legume root nodules, <em>Azotobacter</em> is a free-living aerobic fixer, and mycorrhizal fungi improve phosphorus rather than nitrogen supply."
                }
            ]
        },
        {
            id: "mag21",
            name: "Magnetic Effect of Current",
            subject: "Physics",
            accent: "blue",
            blurb: "Q81–90 · HARD · B-field of a straight conductor, arc, circular coil and solenoid; Ampere's law; force and torque in a uniform field; velocity selector; Hall effect.",
            questions: [
                {
                    id: "d21p81",
                    text: "A long wire carrying current $I$ is bent into a circular arc of radius $r$ subtending an angle of $60^{\\circ}$ at the centre. The magnetic flux density at the centre of the arc is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 I}{12r}$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 I}{6r}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 I}{4r}$" },
                        { key: "d", text: "$\\dfrac{\\mu_0 I}{24r}$" }
                    ],
                    answer: "a",
                    explanation: "A full circular loop gives $B=\\dfrac{\\mu_0 I}{2r}$ at its centre, and an arc contributes only the fraction $\\dfrac{\\theta}{2\\pi}$ of that. With $\\theta=60^{\\circ}=\\dfrac{\\pi}{3}$ rad, $B=\\dfrac{\\mu_0 I}{2r}\\times\\dfrac{\\pi/3}{2\\pi}=\\dfrac{\\mu_0 I}{12r}$. Equivalently, from Biot–Savart, $B=\\dfrac{\\mu_0 I\\theta}{4\\pi r}$. The straight lead-in and lead-out wires, if radial, contribute nothing because $d\\vec{l}\\times\\hat{r}=0$ along them."
                },
                {
                    id: "d21p82",
                    text: "Two very long parallel wires 10 cm apart carry currents of 5 A and 10 A in <em>opposite</em> directions. The magnetic flux density at the point midway between them is:",
                    options: [
                        { key: "a", text: "$2\\times10^{-5}$ T" },
                        { key: "b", text: "$4\\times10^{-5}$ T" },
                        { key: "c", text: "$6\\times10^{-5}$ T" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "c",
                    explanation: "Each wire is 0.05 m from the mid-point, so $B=\\dfrac{\\mu_0 I}{2\\pi d}=\\dfrac{2\\times10^{-7}\\times I}{0.05}$. For 5 A, $B_1=2\\times10^{-5}$ T; for 10 A, $B_2=4\\times10^{-5}$ T. Because the currents are <strong>antiparallel</strong>, the two fields point the <em>same</em> way in the region between the wires, so they add: $B=2\\times10^{-5}+4\\times10^{-5}=6\\times10^{-5}$ T. (Had the currents been parallel, the same numbers would have subtracted to give $2\\times10^{-5}$ T.)"
                },
                {
                    id: "d21p83",
                    text: "A solenoid 50 cm long is wound with 500 turns and carries a current of 2 A. Taking $\\mu_0=4\\pi\\times10^{-7}\\ \\mathrm{T\\,m\\,A^{-1}}$, the magnetic flux density well inside it is nearly:",
                    options: [
                        { key: "a", text: "$1.26\\times10^{-3}$ T" },
                        { key: "b", text: "$5.02\\times10^{-3}$ T" },
                        { key: "c", text: "$6.28\\times10^{-4}$ T" },
                        { key: "d", text: "$2.51\\times10^{-3}$ T" }
                    ],
                    answer: "d",
                    explanation: "For a long solenoid $B=\\mu_0 nI$, where $n$ is turns per metre: $n=\\dfrac{500}{0.5}=1000\\ \\mathrm{m^{-1}}$. Hence $B=4\\pi\\times10^{-7}\\times1000\\times2=8\\pi\\times10^{-4}\\approx2.51\\times10^{-3}$ T. The field is uniform and axial inside and practically zero outside; at either <em>end</em> of the solenoid it falls to half this value, $\\tfrac12\\mu_0 nI$."
                },
                {
                    id: "d21p84",
                    text: "A long straight cylindrical conductor of radius $R$ carries a current $I$ distributed uniformly over its cross-section. The magnetic flux density at a point inside the conductor, at a distance $R/2$ from the axis, is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\mu_0 I}{2\\pi R}$" },
                        { key: "b", text: "$\\dfrac{\\mu_0 I}{\\pi R}$" },
                        { key: "c", text: "$\\dfrac{\\mu_0 I}{4\\pi R}$" },
                        { key: "d", text: "Zero, since the enclosed current cancels" }
                    ],
                    answer: "c",
                    explanation: "Apply Ampere's law to a circle of radius $x<R$: the enclosed current is $I_{enc}=I\\dfrac{\\pi x^{2}}{\\pi R^{2}}=I\\dfrac{x^{2}}{R^{2}}$, so $B(2\\pi x)=\\mu_0 I\\dfrac{x^{2}}{R^{2}}$, giving $B=\\dfrac{\\mu_0 I x}{2\\pi R^{2}}$ — the field grows <em>linearly</em> inside. Putting $x=R/2$: $B=\\dfrac{\\mu_0 I}{4\\pi R}$, exactly half the surface value $\\dfrac{\\mu_0 I}{2\\pi R}$. Outside, $B$ falls off as $1/x$."
                },
                {
                    id: "d21p85",
                    text: "A proton and an alpha particle, both starting from rest, are accelerated through the same potential difference and then enter a uniform magnetic field at right angles to it. The ratio of the radii of their circular paths $r_p : r_\\alpha$ is:",
                    options: [
                        { key: "a", text: "$1:1$" },
                        { key: "b", text: "$1:2$" },
                        { key: "c", text: "$\\sqrt2:1$" },
                        { key: "d", text: "$1:\\sqrt2$" }
                    ],
                    answer: "d",
                    explanation: "From $qV=\\tfrac12mv^{2}$, $v=\\sqrt{\\dfrac{2qV}{m}}$, so the radius $r=\\dfrac{mv}{qB}=\\dfrac{1}{B}\\sqrt{\\dfrac{2mV}{q}}\\propto\\sqrt{\\dfrac{m}{q}}$. For the proton $\\sqrt{m/q}$; for the alpha particle ($m_\\alpha=4m$, $q_\\alpha=2q$) $\\sqrt{4m/2q}=\\sqrt{2m/q}$. Hence $r_p:r_\\alpha=\\sqrt{m/q}:\\sqrt{2m/q}=\\mathbf{1:\\sqrt2}$. Note the answer is independent of both $V$ and $B$."
                },
                {
                    id: "d21p86",
                    text: "In a velocity selector a charged particle travels undeviated through mutually perpendicular fields $E=3\\times10^{5}\\ \\mathrm{V\\,m^{-1}}$ and $B=0.5$ T. The speed of the particle is:",
                    options: [
                        { key: "a", text: "$1.5\\times10^{5}\\ \\mathrm{m\\,s^{-1}}$" },
                        { key: "b", text: "$6\\times10^{5}\\ \\mathrm{m\\,s^{-1}}$" },
                        { key: "c", text: "$1.67\\times10^{-6}\\ \\mathrm{m\\,s^{-1}}$" },
                        { key: "d", text: "$6\\times10^{4}\\ \\mathrm{m\\,s^{-1}}$" }
                    ],
                    answer: "b",
                    explanation: "For no deflection the electric force balances the magnetic force: $qE=qvB$, so $v=\\dfrac{E}{B}=\\dfrac{3\\times10^{5}}{0.5}=6\\times10^{5}\\ \\mathrm{m\\,s^{-1}}$. Because $q$ cancels, the selector transmits <em>every</em> particle of this speed whatever its charge or mass — the principle used in the Thomson $e/m$ experiment and in mass spectrometers."
                },
                {
                    id: "d21p87",
                    text: "A rectangular coil of 100 turns and area $20\\ \\mathrm{cm^{2}}$ carries a current of 2 A and is suspended in a uniform field of 0.5 T with its <em>plane parallel</em> to the field. The torque acting on the coil is:",
                    options: [
                        { key: "a", text: "0.02 N m" },
                        { key: "b", text: "0.1 N m" },
                        { key: "c", text: "0.2 N m" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "c",
                    explanation: "$\\tau=NIAB\\sin\\theta$, where $\\theta$ is the angle between the <strong>normal to the coil</strong> and $\\vec{B}$. If the plane of the coil is parallel to $\\vec{B}$, the normal is perpendicular to it, so $\\theta=90^{\\circ}$ and the torque is maximum: $\\tau=100\\times2\\times(20\\times10^{-4})\\times0.5=0.2$ N m. The torque would be <em>zero</em> in the opposite situation, with the plane perpendicular to $\\vec{B}$ — which is why a moving-coil galvanometer uses a radial field to keep $\\theta=90^{\\circ}$ at all deflections."
                },
                {
                    id: "d21p88",
                    text: "A straight horizontal wire of mass per unit length $0.02\\ \\mathrm{kg\\,m^{-1}}$ is to be held up in mid-air by passing a current through it in a horizontal magnetic field of 0.4 T at right angles to the wire. Taking $g=10\\ \\mathrm{m\\,s^{-2}}$, the required current is:",
                    options: [
                        { key: "a", text: "0.5 A" },
                        { key: "b", text: "2 A" },
                        { key: "c", text: "5 A" },
                        { key: "d", text: "0.08 A" }
                    ],
                    answer: "a",
                    explanation: "The magnetic force per unit length $BI$ must balance the weight per unit length $\\left(\\dfrac{m}{l}\\right)g$. Thus $I=\\dfrac{(m/l)g}{B}=\\dfrac{0.02\\times10}{0.4}=0.5$ A. The direction must be such that Fleming's left-hand rule gives an upward force; a current in the reverse sense would press the wire down with the same magnitude of force."
                },
                {
                    id: "d21p89",
                    text: "An electron of mass $m$ and charge $e$ enters a uniform magnetic field $B$ with speed $v$, making an angle of $30^{\\circ}$ with the field. The pitch of its helical path is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\pi m v}{eB}$" },
                        { key: "b", text: "$\\dfrac{\\pi m v}{\\sqrt3\\,eB}$" },
                        { key: "c", text: "$\\dfrac{2\\pi m v}{eB}$" },
                        { key: "d", text: "$\\dfrac{\\sqrt3\\,\\pi m v}{eB}$" }
                    ],
                    answer: "d",
                    explanation: "Resolve the velocity: $v\\sin30^{\\circ}$ perpendicular to $\\vec{B}$ makes the electron go round a circle, while $v\\cos30^{\\circ}$ parallel to $\\vec{B}$ is unaffected and carries it forward. The period $T=\\dfrac{2\\pi m}{eB}$ depends on neither speed nor angle, so the pitch (advance per revolution) is $p=v\\cos30^{\\circ}\\times T=\\dfrac{2\\pi m v}{eB}\\cdot\\dfrac{\\sqrt3}{2}=\\dfrac{\\sqrt3\\pi m v}{eB}$."
                },
                {
                    id: "d21p90",
                    text: "A metal strip of thickness 0.2 mm carries a current of 3 A in a perpendicular field of 0.5 T and develops a Hall voltage of $6\\ \\mu\\mathrm{V}$. Taking $e=1.6\\times10^{-19}$ C, the number density of the charge carriers is about:",
                    options: [
                        { key: "a", text: "$7.8\\times10^{25}\\ \\mathrm{m^{-3}}$" },
                        { key: "b", text: "$3.9\\times10^{27}\\ \\mathrm{m^{-3}}$" },
                        { key: "c", text: "$7.8\\times10^{27}\\ \\mathrm{m^{-3}}$" },
                        { key: "d", text: "$1.3\\times10^{29}\\ \\mathrm{m^{-3}}$" }
                    ],
                    answer: "c",
                    explanation: "The Hall voltage is $V_H=\\dfrac{BI}{nqt}$, so $n=\\dfrac{BI}{qtV_H}$. Substituting $B=0.5$ T, $I=3$ A, $q=1.6\\times10^{-19}$ C, $t=2\\times10^{-4}$ m and $V_H=6\\times10^{-6}$ V: $n=\\dfrac{1.5}{1.6\\times10^{-19}\\times2\\times10^{-4}\\times6\\times10^{-6}}=\\dfrac{1.5}{1.92\\times10^{-28}}\\approx7.8\\times10^{27}\\ \\mathrm{m^{-3}}$. The <em>sign</em> of $V_H$ additionally reveals whether the carriers are electrons or holes."
                }
            ]
        },
        {
            id: "apc21",
            name: "Applied Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Q91–100 · manufacture of ammonia, sulphuric acid, nitric acid, sodium carbonate, caustic soda, urea and cement; polymers, drugs and radioisotopes in daily life.",
            questions: [
                {
                    id: "d21c91",
                    text: "The optimum conditions for the manufacture of ammonia by Haber's process are:",
                    options: [
                        { key: "a", text: "About 200 atm and 450–500 °C over finely divided iron with molybdenum as promoter" },
                        { key: "b", text: "About 2 atm and 450 °C over vanadium pentoxide as catalyst" },
                        { key: "c", text: "About 200 atm and 1000 °C over a platinum–rhodium gauze" },
                        { key: "d", text: "About 1 atm and room temperature over nickel as catalyst" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{N_2+3H_2\\rightleftharpoons2NH_3};\\ \\Delta H=-92\\ \\mathrm{kJ}$ is exothermic and proceeds with a decrease in the number of moles, so by Le Chatelier's principle a <strong>high pressure (200 atm)</strong> and a <em>low</em> temperature favour the yield. A very low temperature would make the reaction hopelessly slow, so a compromise of <strong>450–500 °C</strong> is used together with finely divided iron catalyst promoted by molybdenum (or $\\mathrm{K_2O}$–$\\mathrm{Al_2O_3}$). $\\mathrm{V_2O_5}$ belongs to the contact process and Pt–Rh gauze to Ostwald's process."
                },
                {
                    id: "d21c92",
                    text: "In the contact process the sulphur trioxide leaving the catalyst chamber is absorbed in concentrated sulphuric acid instead of water, because absorption in water:",
                    options: [
                        { key: "a", text: "Produces a dense corrosive acid mist that is difficult to condense" },
                        { key: "b", text: "Reduces the sulphur trioxide back to sulphur dioxide" },
                        { key: "c", text: "Is an endothermic change that cools the plant too much" },
                        { key: "d", text: "Yields only a dilute acid that cannot be concentrated further" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{SO_3+H_2O\\rightarrow H_2SO_4}$ is violently exothermic and produces a persistent <strong>fog of fine sulphuric acid droplets</strong> that neither settles nor condenses, so the acid is lost and the plant corroded. Instead $\\mathrm{SO_3}$ is absorbed in 98% $\\mathrm{H_2SO_4}$ to give oleum, $\\mathrm{H_2S_2O_7}$, which is then diluted in a controlled way: $\\mathrm{H_2S_2O_7+H_2O\\rightarrow2H_2SO_4}$."
                },
                {
                    id: "d21c93",
                    text: "In Ostwald's process for the manufacture of nitric acid, the catalytic oxidation of ammonia to nitric oxide is carried out over:",
                    options: [
                        { key: "a", text: "Finely divided iron promoted with molybdenum" },
                        { key: "b", text: "A platinum–rhodium gauze at about 800 °C" },
                        { key: "c", text: "Vanadium pentoxide at about 450 °C" },
                        { key: "d", text: "Nickel powder at about 300 °C" }
                    ],
                    answer: "b",
                    explanation: "Ostwald's process runs in three stages: $\\mathrm{4NH_3+5O_2\\xrightarrow{Pt/Rh,\\,800^{\\circ}C}4NO+6H_2O}$; then $\\mathrm{2NO+O_2\\rightarrow2NO_2}$ on cooling; and finally $\\mathrm{3NO_2+H_2O\\rightarrow2HNO_3+NO}$, the liberated NO being recycled. The <strong>platinum–rhodium gauze</strong> gives a huge surface with a contact time of only about a millisecond, which is essential because longer contact would decompose the ammonia to nitrogen."
                },
                {
                    id: "d21c94",
                    text: "Solvay's ammonia–soda process is used for sodium carbonate but cannot be adapted to make potassium carbonate, because:",
                    options: [
                        { key: "a", text: "Potassium chloride does not dissolve in water to give a brine" },
                        { key: "b", text: "Potassium carbonate decomposes as soon as it is heated" },
                        { key: "c", text: "Ammonia does not dissolve in a potassium chloride solution" },
                        { key: "d", text: "Potassium hydrogen carbonate is too soluble to precipitate out" }
                    ],
                    answer: "d",
                    explanation: "The whole process depends on the sparing solubility of $\\mathrm{NaHCO_3}$, which crystallises out of the ammoniacal brine ($\\mathrm{NaCl+NH_3+CO_2+H_2O\\rightarrow NaHCO_3\\downarrow+NH_4Cl}$) and is then calcined to $\\mathrm{Na_2CO_3}$. <strong>$\\mathrm{KHCO_3}$ is far more soluble</strong>, so it stays in solution and cannot be filtered off. In the plant, $\\mathrm{CO_2}$ from the lime kiln and $\\mathrm{NH_3}$ recovered by treating $\\mathrm{NH_4Cl}$ with $\\mathrm{Ca(OH)_2}$ are recycled, and $\\mathrm{CaCl_2}$ is the only by-product."
                },
                {
                    id: "d21c95",
                    text: "In the manufacture of caustic soda by the electrolysis of brine in a diaphragm cell, the asbestos diaphragm is essential in order to:",
                    options: [
                        { key: "a", text: "Conduct the current between the two electrodes" },
                        { key: "b", text: "Filter the impurities out of the incoming brine" },
                        { key: "c", text: "Keep the chlorine and the sodium hydroxide apart" },
                        { key: "d", text: "Absorb the hydrogen liberated at the cathode" }
                    ],
                    answer: "c",
                    explanation: "Chlorine is set free at the graphite anode and hydrogen plus $\\mathrm{NaOH}$ at the iron cathode. Should the two products mix, they would react at once, $\\mathrm{Cl_2+2NaOH\\rightarrow NaCl+NaOCl+H_2O}$, destroying the caustic soda and contaminating it with hypochlorite. The porous <strong>asbestos diaphragm</strong> lets ions through to carry the current while preventing bulk mixing of the anolyte and catholyte."
                },
                {
                    id: "d21c96",
                    text: "Urea, the nitrogenous fertilizer with the highest nitrogen content (about 46%), is manufactured industrially by the dehydration of:",
                    options: [
                        { key: "a", text: "Ammonium carbamate formed from ammonia and carbon dioxide" },
                        { key: "b", text: "Ammonium nitrate formed from ammonia and nitric acid" },
                        { key: "c", text: "Ammonium sulphate formed from ammonia and sulphuric acid" },
                        { key: "d", text: "Calcium cyanamide formed from nitrogen and calcium carbide" }
                    ],
                    answer: "a",
                    explanation: "Excess ammonia and carbon dioxide combine under pressure to give <strong>ammonium carbamate</strong>, $\\mathrm{2NH_3+CO_2\\rightarrow NH_2COONH_4}$, which is then dehydrated at about 180 °C and 200 atm: $\\mathrm{NH_2COONH_4\\rightarrow NH_2CONH_2+H_2O}$. Both raw materials come from the ammonia plant itself, which is why urea units are built alongside Haber plants. Ammonium nitrate and ammonium sulphate are separate fertilizers with less nitrogen (35% and 21%)."
                },
                {
                    id: "d21c97",
                    text: "A small quantity of gypsum is ground with the clinker in a cement factory in order to:",
                    options: [
                        { key: "a", text: "Retard the setting of the cement so that it can be worked" },
                        { key: "b", text: "Accelerate the setting so that the concrete hardens sooner" },
                        { key: "c", text: "Supply the calcium silicate that gives the final strength" },
                        { key: "d", text: "Prevent the cement from absorbing moisture during storage" }
                    ],
                    answer: "a",
                    explanation: "Tricalcium aluminate, $\\mathrm{3CaO\\cdot Al_2O_3}$, hydrates almost instantly and would make the cement flash-set before it could be placed. About 2–3% of <strong>gypsum</strong> ($\\mathrm{CaSO_4\\cdot2H_2O}$) reacts with it to form ettringite, a coating that slows the reaction and gives a workable setting time. Portland cement is made by burning limestone and clay in a rotary kiln at about 1500 °C; its strength comes from the hydration of the calcium silicates $\\mathrm{C_3S}$ and $\\mathrm{C_2S}$."
                },
                {
                    id: "d21c98",
                    text: "Which of the following is a condensation copolymer obtained from hexamethylenediamine and adipic acid?",
                    options: [
                        { key: "a", text: "Teflon, used as a non-stick coating for cookware" },
                        { key: "b", text: "Nylon-6,6, used for textile fibre and tyre cord" },
                        { key: "c", text: "Bakelite, used for electrical switches and handles" },
                        { key: "d", text: "Polythene, used for packaging film and bottles" }
                    ],
                    answer: "b",
                    explanation: "<strong>Nylon-6,6</strong> is formed when the $\\mathrm{-NH_2}$ groups of hexamethylenediamine and the $\\mathrm{-COOH}$ groups of adipic acid condense with the elimination of water, giving a polyamide; both monomers contribute six carbons, hence the name. Teflon (from tetrafluoroethene) and polythene (from ethene) are <em>addition</em> homopolymers, while bakelite is a condensation polymer of phenol and formaldehyde."
                },
                {
                    id: "d21c99",
                    text: "Aspirin (acetylsalicylic acid) relieves pain and brings down fever because it inhibits the synthesis of:",
                    options: [
                        { key: "a", text: "Histamine, so that the allergic response is suppressed" },
                        { key: "b", text: "Gastric hydrochloric acid, so that acidity is reduced" },
                        { key: "c", text: "Bacterial cell wall, so that the infection is cleared" },
                        { key: "d", text: "Prostaglandins, the mediators of pain and fever" }
                    ],
                    answer: "d",
                    explanation: "Aspirin acetylates and thereby blocks the enzyme cyclo-oxygenase, stopping the formation of <strong>prostaglandins</strong> — which is why it is simultaneously analgesic, antipyretic and anti-inflammatory, and why in low doses it prevents platelet aggregation and is used against heart attack. The same inhibition in the stomach lining removes a protective prostaglandin, which explains the gastric irritation aspirin can cause. Antihistamines act on histamine and antibiotics on bacterial structures."
                },
                {
                    id: "d21c100",
                    text: "The radioisotopes used for the teletherapy of cancer and for the study of thyroid function are respectively:",
                    options: [
                        { key: "a", text: "Carbon-14 and phosphorus-32" },
                        { key: "b", text: "Cobalt-60 and iodine-131" },
                        { key: "c", text: "Uranium-235 and sodium-24" },
                        { key: "d", text: "Iodine-131 and carbon-14" }
                    ],
                    answer: "b",
                    explanation: "<strong>Cobalt-60</strong> emits penetrating $\\gamma$-rays and is the source in the 'cobalt bomb' used to irradiate deep-seated tumours, while <strong>iodine-131</strong> is concentrated by the thyroid gland and is therefore used both to image and to treat thyroid disorders. Carbon-14 is used for radiocarbon dating and metabolic tracer work, phosphorus-32 in the study of DNA and of bone, sodium-24 for tracing blood circulation, and uranium-235 as a nuclear fuel."
                }
            ]
        }
    ]
};

/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)".
   Zoology and Botany carry their full official weightage here; the Physics and Chemistry
   chapters are single-unit focus drills, so only the unit they belong to is shown. */
const DAY21_SYLLABUS = [
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "1. Evolutionary Biology", weight: 3, subs: [
            { name: "Origin of Life", ids: ["d21z1"] },
            { name: "Evidences of Evolution", ids: ["d21z2"] },
            { name: "Human Evolution", ids: ["d21z3"] }
        ] },
        { topic: "2. Animal Diversity & Classification", weight: 4, subs: [
            { name: "Diagnostic Features: Protozoa to Chordata", ids: ["d21z4", "d21z6", "d21z7"] },
            { name: "Chordate Characters", ids: ["d21z5"] }
        ] },
        { topic: "3. Animal Tissues & Histology", weight: 4, subs: [
            { name: "Epithelial Tissue", ids: ["d21z8"] },
            { name: "Connective Tissue", ids: ["d21z9"] },
            { name: "Muscular Tissue", ids: ["d21z10"] },
            { name: "Nervous Tissue", ids: ["d21z11"] }
        ] },
        { topic: "4. Study of Selected Animals", weight: 6, subs: [
            { name: "Plasmodium & Malaria", ids: ["d21z12", "d21z13"] },
            { name: "Earthworm (Pheretima)", ids: ["d21z14", "d21z15"] },
            { name: "Frog (Rana)", ids: ["d21z16", "d21z17"] }
        ] },
        { topic: "5. Human Biology & Physiology", weight: 15, subs: [
            { name: "Digestive System", ids: ["d21z18", "d21z19"] },
            { name: "Respiratory System", ids: ["d21z20", "d21z21"] },
            { name: "Circulatory System", ids: ["d21z22", "d21z23", "d21z24"] },
            { name: "Excretory System", ids: ["d21z25", "d21z26"] },
            { name: "Nervous System", ids: ["d21z27", "d21z28"] },
            { name: "Sense Organs", ids: ["d21z29"] },
            { name: "Endocrinology", ids: ["d21z30", "d21z31"] },
            { name: "Reproductive System", ids: ["d21z32"] }
        ] },
        { topic: "6. Microbial Diseases & Immunology", weight: 4, subs: [
            { name: "Diseases (Typhoid, TB, HIV\u2026)", ids: ["d21z33", "d21z34", "d21z35"] },
            { name: "Immunity & Vaccines", ids: ["d21z36"] }
        ] },
        { topic: "7. Medical Technology & Applied Biology", weight: 2, subs: [
            { name: "Medical Technology (Amniocentesis, IVF, Transgenics)", ids: ["d21z37"] },
            { name: "Applied Microbiology", ids: ["d21z38"] }
        ] },
        { topic: "8. Biota, Environment & Conservation", weight: 2, subs: [
            { name: "Conservation Biology", ids: ["d21z39"] },
            { name: "Environmental Pollution", ids: ["d21z40"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "1. Basic Components of Life", weight: 2, subs: [
            { name: "Carbohydrates", ids: ["d21b41"] },
            { name: "Proteins & Enzymes", ids: ["d21b42"] }
        ] },
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Classification & Binomial Nomenclature", ids: ["d21b43"] },
            { name: "Monera & Virus", ids: ["d21b44", "d21b45"] },
            { name: "Fungi & Lichens", ids: ["d21b46"] },
            { name: "Algae", ids: ["d21b47"] },
            { name: "Bryophytes & Pteridophytes", ids: ["d21b48"] },
            { name: "Gymnosperms", ids: ["d21b49"] },
            { name: "Angiosperms: Families & Morphology", ids: ["d21b50"] },
            { name: "Economic Importance & Medicinal Plants of Nepal", ids: ["d21b51"] }
        ] },
        { topic: "3. Ecology & Vegetation", weight: 4, subs: [
            { name: "Ecosystem Ecology", ids: ["d21b52"] },
            { name: "Biogeochemical Cycles & Ecological Imbalances", ids: ["d21b53", "d21b54"] },
            { name: "Vegetation, Adaptation & Succession", ids: ["d21b55"] }
        ] },
        { topic: "4. Cell Biology", weight: 5, subs: [
            { name: "Prokaryotic & Eukaryotic Cells", ids: ["d21b56"] },
            { name: "Cell Membrane", ids: ["d21b57"] },
            { name: "Cell Organelles", ids: ["d21b58", "d21b59"] },
            { name: "Cell Cycle & Cell Division", ids: ["d21b60"] }
        ] },
        { topic: "5. Genetics", weight: 6, subs: [
            { name: "Genetic Material & DNA Replication", ids: ["d21b61", "d21b62"] },
            { name: "Central Dogma & Genetic Code", ids: ["d21b63"] },
            { name: "Mendelian Genetics", ids: ["d21b64"] },
            { name: "Linkage & Crossing Over", ids: ["d21b65"] },
            { name: "Sex-linked Inheritance", ids: ["d21b66"] }
        ] },
        { topic: "6. Plant Anatomy", weight: 3, subs: [
            { name: "Types of Vascular Bundles", ids: ["d21b67"] },
            { name: "Monocot & Dicot Root, Stem and Leaf", ids: ["d21b68"] },
            { name: "Plant Tissues", ids: ["d21b69"] }
        ] },
        { topic: "7. Plant Physiology", weight: 6, subs: [
            { name: "Water Relations & Transpiration", ids: ["d21b70", "d21b71"] },
            { name: "Photosynthesis", ids: ["d21b72", "d21b73"] },
            { name: "Respiration", ids: ["d21b74"] },
            { name: "Plant Growth & Hormones", ids: ["d21b75"] }
        ] },
        { topic: "8. Developmental Botany", weight: 2, subs: [
            { name: "Fertilisation & Endosperm", ids: ["d21b76"] },
            { name: "Pollination & its Types", ids: ["d21b77"] }
        ] },
        { topic: "9. Applied Botany", weight: 3, subs: [
            { name: "Plant Tissue Culture", ids: ["d21b78"] },
            { name: "Genetic Engineering", ids: ["d21b79"] },
            { name: "Biofertilizers & Green Manures", ids: ["d21b80"] }
        ] }
    ] },
    { subject: "Physics", accent: "blue", topics: [
        { topic: "4. Current Electricity & Magnetism", weight: 9, subs: [
            { name: "B-field of a Straight Conductor, Arc & Circular Coil", ids: ["d21p81", "d21p82", "d21p84"] },
            { name: "B-field of a Long Solenoid", ids: ["d21p83"] },
            { name: "Effect of a Uniform B-field on a Moving Charge", ids: ["d21p85", "d21p86", "d21p89"] },
            { name: "Force & Torque on a Current-carrying Conductor/Coil", ids: ["d21p87", "d21p88"] },
            { name: "Hall Effect", ids: ["d21p90"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "4. Applied Chemistry", weight: 3, subs: [
            { name: "Fundamentals of Applied Chemistry & Manufacturing Processes", ids: ["d21c91", "d21c92", "d21c93", "d21c94", "d21c95", "d21c96", "d21c97"] },
            { name: "Chemistry in Service to Mankind", ids: ["d21c98", "d21c99", "d21c100"] }
        ] }
    ] }
];
DAY21.syllabus = DAY21_SYLLABUS;
