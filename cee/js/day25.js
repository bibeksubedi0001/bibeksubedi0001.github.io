/* ============================================================
   DAY 25 — BOTANY: BIOMOLECULES, CLASSIFICATION AND LOWER PLANTS
   100 questions · 90 minutes · 0.25 negative marking

   Scope is exactly the official MEC CEE Botany syllabus,
   Unit 1 in full and the first four topics of Unit 2:

     U1 Basic components of life
        Carbohydrates ............... 10   d25b1   – d25b10
        Lipids .......................  6   d25b11  – d25b16
        Minerals .....................  4   d25b17  – d25b20
        Proteins .................... 10   d25b21  – d25b30
        Enzymes ..................... 10   d25b31  – d25b40
     U2 Biodiversity (first four topics)
        Introduction: classification . 10   d25b41  – d25b50
        Monera ...................... 12   d25b51  – d25b62
        Virus ........................  8   d25b63  – d25b70
        Fungi ....................... 13   d25b71  – d25b83
        Lichens ......................  4   d25b84  – d25b87
        Algae ....................... 13   d25b88  – d25b100

   Questions are new: none repeats the Day 22 Biodiversity set
   or the Day 24 complete-Botany set.
   ============================================================ */
const DAY25 = {
    day: 25,
    title: "Day 25",
    subtitle: "Botany · Biomolecules, Classification & Lower Plants",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "carblip25",
            name: "Carbohydrates, Lipids & Minerals",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q1–20 · structure, types and biological role of carbohydrates and lipids; essential mineral elements and their deficiency symptoms.",
            questions: [
                {
                    id: "d25b1",
                    text: "The old formula $\\mathrm{C_n(H_2O)_n}$ is no longer accepted as a definition of a carbohydrate. A carbohydrate is now defined as:",
                    options: [
                        { key: "a", text: "A neutral compound of carbon that dissolves in water and tastes sweet" },
                        { key: "b", text: "An optically active ester that reduces Fehling's solution on warming" },
                        { key: "c", text: "An organic acid in which hydrogen and oxygen occur in the ratio 2 : 1" },
                        { key: "d", text: "Polyhydroxy aldehydes or ketones and the substances yielding them" }
                    ],
                    answer: "d",
                    explanation: "The ratio definition fails at both ends. <strong>Deoxyribose</strong> ($\\mathrm{C_5H_{10}O_4}$) and rhamnose are sugars that do <em>not</em> fit it, while acetic acid ($\\mathrm{C_2H_4O_2}$) and formaldehyde fit it perfectly and are not sugars. The chemically sound definition is <strong>polyhydroxy aldehydes (aldoses) or ketones (ketoses)</strong>, together with their condensation products such as sucrose, starch and cellulose."
                },
                {
                    id: "d25b2",
                    text: "On complete hydrolysis one molecule of raffinose yields one molecule each of glucose, fructose and galactose. Raffinose is therefore:",
                    options: [
                        { key: "a", text: "A monosaccharide, since it cannot be split into smaller sugars" },
                        { key: "b", text: "A polysaccharide, because more than one kind of sugar is present" },
                        { key: "c", text: "An oligosaccharide of three units, that is, a trisaccharide" },
                        { key: "d", text: "A disaccharide, since only two of its three sugars are hexoses" }
                    ],
                    answer: "c",
                    explanation: "Carbohydrates are graded by the number of simple sugar units released on hydrolysis: <strong>monosaccharide</strong> (1, not hydrolysable), <strong>oligosaccharide</strong> (2–10) and <strong>polysaccharide</strong> (many). Raffinose gives three units, so it is a trisaccharide, a member of the oligosaccharides; it is the commonest trisaccharide of higher plants and occurs in sugar-beet molasses."
                },
                {
                    id: "d25b3",
                    text: "Glucose and fructose share the molecular formula $\\mathrm{C_6H_{12}O_6}$ but are functionally different sugars because:",
                    options: [
                        { key: "a", text: "Fructose has a free carboxyl group whereas glucose has none" },
                        { key: "b", text: "Glucose has one carbon atom more in the open chain than fructose" },
                        { key: "c", text: "Glucose has an aldehyde group at C-1, fructose a keto group at C-2" },
                        { key: "d", text: "Glucose exists only as a ring and fructose only as an open chain" }
                    ],
                    answer: "c",
                    explanation: "Both are hexoses, but glucose is an <strong>aldohexose</strong> ($\\mathrm{-CHO}$ at carbon 1) and fructose a <strong>ketohexose</strong> ($\\mathrm{>C{=}O}$ at carbon 2). The free aldehyde group is why glucose reduces Fehling's and Benedict's reagents directly; fructose does so only after rearranging to an enediol in alkali. The two are structural isomers of the functional-group type."
                },
                {
                    id: "d25b4",
                    text: "When a sugar is labelled D- or L-, the configuration taken into account is that of:",
                    options: [
                        { key: "a", text: "The carbon bearing the aldehyde or the ketone group" },
                        { key: "b", text: "The anomeric carbon produced when the ring closes" },
                        { key: "c", text: "The carbon that carries the primary alcohol group" },
                        { key: "d", text: "The asymmetric carbon farthest from the carbonyl group" }
                    ],
                    answer: "d",
                    explanation: "The prefix refers to the <strong>reference (penultimate) asymmetric carbon</strong>, the chiral carbon most distant from the carbonyl group — C-5 in a hexose. If its $\\mathrm{-OH}$ lies on the right in the Fischer projection the sugar is D, if on the left it is L. Almost every naturally occurring sugar is of the <strong>D-series</strong>. D and L say nothing about the actual direction in which the sugar rotates plane-polarised light."
                },
                {
                    id: "d25b5",
                    text: "Two monosaccharide molecules become a disaccharide when they are joined by:",
                    options: [
                        { key: "a", text: "A peptide bond between an amino group and a carboxyl group" },
                        { key: "b", text: "A glycosidic bond formed by condensation, one water being lost" },
                        { key: "c", text: "An ester bond formed between an alcohol and an organic acid" },
                        { key: "d", text: "A hydrogen bond between hydroxyl groups of the two rings" }
                    ],
                    answer: "b",
                    explanation: "The $\\mathrm{-OH}$ of the anomeric carbon of one sugar reacts with an $\\mathrm{-OH}$ of the other; a molecule of water is eliminated and an oxygen bridge, the <strong>glycosidic bond</strong>, is left. Maltose has an $\\alpha$-1,4 bond, cellobiose a $\\beta$-1,4 bond and sucrose an $\\alpha$-1,$\\beta$-2 bond. Hydrolysis, by acid or by an enzyme, restores the water and splits the bond."
                },
                {
                    id: "d25b6",
                    text: "Which disaccharide is correctly matched with the monosaccharides it gives on hydrolysis?",
                    options: [
                        { key: "a", text: "Trehalose $\\rightarrow$ galactose + fructose" },
                        { key: "b", text: "Maltose $\\rightarrow$ glucose + fructose" },
                        { key: "c", text: "Sucrose $\\rightarrow$ glucose + galactose" },
                        { key: "d", text: "Lactose $\\rightarrow$ glucose + galactose" }
                    ],
                    answer: "d",
                    explanation: "<strong>Lactose</strong>, the sugar of milk, is glucose + galactose joined by a $\\beta$-1,4 bond. Maltose (malt sugar) is glucose + glucose, sucrose (cane sugar) is glucose + fructose, and trehalose — the sugar of fungi and insect blood — is again glucose + glucose. Lactose and maltose keep a free anomeric carbon and are reducing sugars; sucrose and trehalose do not and are non-reducing."
                },
                {
                    id: "d25b7",
                    text: "The optical rotation of a freshly prepared glucose solution changes slowly and then becomes constant. This change is called:",
                    options: [
                        { key: "a", text: "Inversion, the change seen when sucrose is hydrolysed by invertase" },
                        { key: "b", text: "Racemisation, the conversion of a D-sugar into its L-isomer" },
                        { key: "c", text: "Isomerisation, the shift of the carbonyl group from C-1 to C-2" },
                        { key: "d", text: "Mutarotation, due to interconversion of the two ring anomers" }
                    ],
                    answer: "d",
                    explanation: "On ring closure C-1 becomes asymmetric, giving the $\\alpha$- and $\\beta$-<strong>anomers</strong> of glucose ($+112^\\circ$ and $+19^\\circ$). In solution they interconvert through the open-chain form until an equilibrium mixture rotating $+52.7^\\circ$ is reached — this drift is <strong>mutarotation</strong>. Inversion is a different phenomenon, the sign reversal seen when sucrose is hydrolysed to invert sugar."
                },
                {
                    id: "d25b8",
                    text: "Starch is a mixture of two glucose polymers. The one responsible for the deep blue colour with iodine is:",
                    options: [
                        { key: "a", text: "Amylose, whose unbranched helix holds iodine within its coil" },
                        { key: "b", text: "Amylopectin, whose branches trap iodine at the $\\alpha$-1,6 points" },
                        { key: "c", text: "Glycogen, which is present in traces in every starch grain" },
                        { key: "d", text: "Cellulose, whose microfibrils adsorb iodine on their surface" }
                    ],
                    answer: "a",
                    explanation: "<strong>Amylose</strong> (about 20–30 % of starch) is an unbranched $\\alpha$-1,4 chain coiled into a helix; iodine slips into the coil and gives the familiar blue-black colour. <strong>Amylopectin</strong> (70–80 %) is branched every 24–30 units by $\\alpha$-1,6 bonds, its short chains give only a red-violet tinge, and the still more branched glycogen gives red-brown. Cellulose gives no colour at all."
                },
                {
                    id: "d25b9",
                    text: "The reserve carbohydrate stored in the roots of Dahlia and other Compositae is a polymer not of glucose but of fructose. It is:",
                    options: [
                        { key: "a", text: "Glycogen, the animal starch also stored by fungi" },
                        { key: "b", text: "Laminarin, the reserve food of the brown algae" },
                        { key: "c", text: "Inulin, a fructan that stays dissolved in the cell sap" },
                        { key: "d", text: "Chitin, the polymer of N-acetyl glucosamine" }
                    ],
                    answer: "c",
                    explanation: "<strong>Inulin</strong> is a fructan of about 30 fructose units ending in a glucose; unlike starch it does not form grains but stays in solution in the vacuole, and it is stored in the tuberous roots of <em>Dahlia</em>, chicory and Jerusalem artichoke. It gives no blue colour with iodine. Laminarin is a $\\beta$-1,3 glucan of brown algae and glycogen the branched glucan of animals and fungi."
                },
                {
                    id: "d25b10",
                    text: "The middle lamella, the layer that cements two adjacent plant cells together, consists mainly of:",
                    options: [
                        { key: "a", text: "Cellulose microfibrils embedded in a lignin matrix" },
                        { key: "b", text: "Suberin and cutin laid down as a waterproof film" },
                        { key: "c", text: "Hemicellulose stiffened by a network of chitin" },
                        { key: "d", text: "Calcium and magnesium pectate, a jelly-like substance" }
                    ],
                    answer: "d",
                    explanation: "Pectic substances are polymers of <strong>galacturonic acid</strong>; as calcium and magnesium pectate they form the gluey <strong>middle lamella</strong> shared by neighbouring cells. Dissolving the pectate — by the enzymes of a soft-rot bacterium, or naturally during fruit ripening and abscission — makes the cells slip apart, which is why over-ripe fruits become mushy. The same pectin sets home-made jam."
                },
                {
                    id: "d25b11",
                    text: "A molecule of a true fat differs from a molecule of sugar in that a fat is:",
                    options: [
                        { key: "a", text: "An ester of three fatty acid molecules with one of glycerol" },
                        { key: "b", text: "A polymer of many fatty acid units joined end to end" },
                        { key: "c", text: "A condensation product of glycerol with three sugar units" },
                        { key: "d", text: "An amide formed between fatty acids and a nitrogen base" }
                    ],
                    answer: "a",
                    explanation: "A neutral fat, or <strong>triglyceride</strong>, is formed when the three $\\mathrm{-OH}$ groups of glycerol esterify with three fatty acid molecules, three molecules of water being lost. Because it is an ester and not a polymer of repeating units, a fat is not a macromolecule in the strict sense. Hydrolysis by lipase, or by alkali, returns glycerol and the fatty acids."
                },
                {
                    id: "d25b12",
                    text: "Mustard oil is liquid at room temperature whereas butter fat is semi-solid. The chemical reason is that the oil is rich in fatty acids having:",
                    options: [
                        { key: "a", text: "A much greater number of carbon atoms in every chain" },
                        { key: "b", text: "One or more double bonds, which keep the chains apart" },
                        { key: "c", text: "Only single bonds and therefore straight, closely packed chains" },
                        { key: "d", text: "A free carboxyl group that has not been esterified at all" }
                    ],
                    answer: "b",
                    explanation: "Each <em>cis</em> double bond puts a permanent kink in the hydrocarbon chain, so <strong>unsaturated</strong> chains cannot stack closely; the van der Waals attraction between them is weak and the melting point is low, giving an oil. <strong>Saturated</strong> chains are straight, pack tightly and melt above room temperature, giving a solid fat. Plant fats are generally unsaturated (oils), animal fats saturated."
                },
                {
                    id: "d25b13",
                    text: "When a vegetable oil is boiled with sodium hydroxide, the products obtained are:",
                    options: [
                        { key: "a", text: "Vanaspati ghee; the process is called hydrogenation" },
                        { key: "b", text: "Fatty acid and alcohol; the process is called esterification" },
                        { key: "c", text: "Soap and glycerol; the process is called saponification" },
                        { key: "d", text: "Glycerol and water only; the process is called dehydration" }
                    ],
                    answer: "c",
                    explanation: "Alkaline hydrolysis of an ester is <strong>saponification</strong>: the three ester bonds of the triglyceride are broken and the sodium salts of the fatty acids — soap — are set free along with glycerol. The amount of alkali needed is the saponification value, a measure of chain length. Hydrogenation is quite another reaction: hydrogen is added across the double bonds with a nickel catalyst to harden an oil into vanaspati."
                },
                {
                    id: "d25b14",
                    text: "The wax of a leaf cuticle differs chemically from a fat in that it is an ester of a fatty acid with:",
                    options: [
                        { key: "a", text: "Glycerol, but with only one of the three positions occupied" },
                        { key: "b", text: "A long-chain monohydric alcohol instead of glycerol" },
                        { key: "c", text: "A phosphate group and a nitrogenous base" },
                        { key: "d", text: "A sterol nucleus built of four fused carbon rings" }
                    ],
                    answer: "b",
                    explanation: "In a wax a single long-chain fatty acid is esterified with a single <strong>long-chain monohydric alcohol</strong>, so the molecule is entirely non-polar, chemically inert and very hard. Deposited on the epidermis as the cuticle, and on the bloom of fruits, it <strong>checks cuticular transpiration</strong> and keeps the surface unwettable, hindering the germination of fungal spores."
                },
                {
                    id: "d25b15",
                    text: "Linoleic acid and linolenic acid are described as essential fatty acids because they:",
                    options: [
                        { key: "a", text: "Are needed in far larger amounts than any other fatty acid" },
                        { key: "b", text: "Are the only fatty acids that can be oxidised to yield energy" },
                        { key: "c", text: "Form the ester linkage present in every triglyceride molecule" },
                        { key: "d", text: "Cannot be synthesised in the body and must be supplied in food" }
                    ],
                    answer: "d",
                    explanation: "The animal body can insert a double bond only up to the ninth carbon, so <strong>polyunsaturated acids of the $\\omega$-6 and $\\omega$-3 families</strong> — linoleic and linolenic — have to be taken ready-made from the diet; vegetable oils are the chief source. They are needed for membrane fluidity and as precursors of prostaglandins; their lack causes scaly skin and poor growth."
                },
                {
                    id: "d25b16",
                    text: "In a germinating castor or groundnut seed the stored fat is used for growth only after it has been:",
                    options: [
                        { key: "a", text: "Hydrolysed by lipase and changed into sugar in glyoxysomes" },
                        { key: "b", text: "Oxidised directly inside the mitochondrion to give ATP" },
                        { key: "c", text: "Polymerised into starch grains within the amyloplasts" },
                        { key: "d", text: "Carried unchanged to the growing radicle and plumule" }
                    ],
                    answer: "a",
                    explanation: "Lipase splits the fat into glycerol and fatty acids; the fatty acids are broken down by $\\beta$-oxidation in the <strong>glyoxysome</strong>, and the acetyl-CoA formed enters the <strong>glyoxylate cycle</strong>, whose enzymes isocitrate lyase and malate synthase allow the carbon to be turned into succinate and then, by gluconeogenesis, into sucrose. Sucrose is the form actually translocated to the growing embryo."
                },
                {
                    id: "d25b17",
                    text: "According to the criteria of Arnon and Stout an element is regarded as essential for a plant only if:",
                    options: [
                        { key: "a", text: "It is detectable in the ash of the plant in a measurable quantity" },
                        { key: "b", text: "The plant cannot complete its life cycle in the absence of it" },
                        { key: "c", text: "Its addition to the soil as a fertiliser increases the yield" },
                        { key: "d", text: "It is absorbed by the root in the ionic form from the soil" }
                    ],
                    answer: "b",
                    explanation: "Three conditions must be met together: the plant <strong>cannot complete its life cycle</strong> without the element, the element <strong>cannot be replaced</strong> by any other, and it takes a <strong>direct part in metabolism</strong>. Presence in the ash proves nothing, since a root absorbs whatever ions the soil offers — gold and lead appear in the ash of many plants without being essential."
                },
                {
                    id: "d25b18",
                    text: "Copper, zinc, molybdenum and boron are grouped as micronutrients because they are:",
                    options: [
                        { key: "a", text: "Needed only by some plants and dispensable in others" },
                        { key: "b", text: "Absorbed only through the leaf surface and never by the root" },
                        { key: "c", text: "Required in trace amounts, though quite indispensable" },
                        { key: "d", text: "Of less importance to growth than the macronutrients are" }
                    ],
                    answer: "c",
                    explanation: "Arnon's division is quantitative, not qualitative: <strong>macronutrients</strong> are required in concentrations above about 10 mmol per kg of dry matter (C, H, O, N, P, K, Ca, Mg, S) and <strong>micronutrients</strong> below it (Fe, Mn, Cu, Zn, B, Mo, Cl, Ni). A trace element is as indispensable as a major one; most act as enzyme activators, and beyond a narrow range they become toxic."
                },
                {
                    id: "d25b19",
                    text: "Deficiency of nitrogen, phosphorus or potassium shows itself first in the older leaves, while deficiency of calcium or boron appears first in the young leaves. This is because:",
                    options: [
                        { key: "a", text: "Calcium and boron are absorbed only late in the plant's life" },
                        { key: "b", text: "Old leaves transpire much faster than the young leaves do" },
                        { key: "c", text: "N, P and K are mobile and are withdrawn to the growing region" },
                        { key: "d", text: "Young leaves have not yet developed functional chloroplasts" }
                    ],
                    answer: "c",
                    explanation: "<strong>Mobile</strong> elements are exported through the phloem from mature leaves to the meristems when supply runs short, so the mature leaves suffer first — hence chlorosis of old leaves in nitrogen deficiency. <strong>Immobile</strong> elements such as calcium (fixed in the middle lamella) and boron cannot be retrieved, so the deficiency strikes the youngest tissue, killing the apical bud."
                },
                {
                    id: "d25b20",
                    text: "Which mineral deficiency and its symptom are correctly matched?",
                    options: [
                        { key: "a", text: "Magnesium — whiptail disease of the cauliflower leaf" },
                        { key: "b", text: "Molybdenum — interveinal chlorosis of the older leaves" },
                        { key: "c", text: "Boron — total loss of the green colour of the young leaves" },
                        { key: "d", text: "Zinc — little-leaf disease with shortened internodes" }
                    ],
                    answer: "d",
                    explanation: "Zinc is needed for the synthesis of tryptophan and hence of auxin, so its lack gives <strong>little leaf</strong> and rosetting (khaira disease of rice). Whiptail of cauliflower is the classic <strong>molybdenum</strong> symptom, interveinal chlorosis of old leaves is <strong>magnesium</strong> (it is the central atom of chlorophyll and is mobile), and boron deficiency causes brown heart and death of the shoot apex, not general chlorosis."
                }
            ]
        },
        {
            id: "protenz25",
            name: "Proteins & Enzymes",
            subject: "Botany",
            accent: "amber",
            blurb: "Q21–40 · amino acids, peptide bond, levels of protein structure and protein types; enzyme action, specificity, kinetics, cofactors and inhibition.",
            questions: [
                {
                    id: "d25b21",
                    text: "In every one of the twenty amino acids that build proteins, the amino group, the carboxyl group, a hydrogen atom and the R group are attached to:",
                    options: [
                        { key: "a", text: "Two adjacent carbon atoms of the hydrocarbon chain" },
                        { key: "b", text: "The nitrogen atom of the amino group itself" },
                        { key: "c", text: "One and the same carbon, called the $\\alpha$-carbon" },
                        { key: "d", text: "The terminal carbon atom of the variable side chain" }
                    ],
                    answer: "c",
                    explanation: "The common plan of an amino acid is $\\mathrm{H_2N{-}CHR{-}COOH}$: the <strong>$\\alpha$-carbon</strong> carries all four groups, and only the <strong>R group</strong> differs from one amino acid to another. Since four different groups are attached, the $\\alpha$-carbon is asymmetric in every amino acid except glycine (where R = H), and the amino acids of proteins are all of the L-form."
                },
                {
                    id: "d25b22",
                    text: "In neutral solution an amino acid carries a positive and a negative charge at the same time and can behave both as an acid and as a base. Such a particle is called:",
                    options: [
                        { key: "a", text: "A zwitterion, bearing $\\mathrm{-NH_3^+}$ and $\\mathrm{-COO^-}$ together" },
                        { key: "b", text: "A cation, bearing two positive charges on one molecule" },
                        { key: "c", text: "A free radical, bearing a single unpaired electron" },
                        { key: "d", text: "A chelate, in which a metal is held between two groups" }
                    ],
                    answer: "a",
                    explanation: "The carboxyl group donates its proton to the amino group of the same molecule, giving the dipolar <strong>zwitterion</strong>. Because it can accept a proton in acid and release one in alkali, an amino acid is <strong>amphoteric</strong> and acts as a buffer. At the <strong>isoelectric point</strong> the net charge is zero, the molecule does not move in an electric field and its solubility is least."
                },
                {
                    id: "d25b23",
                    text: "The bond that links two amino acids in a polypeptide chain is formed between:",
                    options: [
                        { key: "a", text: "Two amino groups, with the release of a molecule of ammonia" },
                        { key: "b", text: "The R groups of the two acids, with the loss of hydrogen" },
                        { key: "c", text: "Two carboxyl groups, with the formation of an anhydride" },
                        { key: "d", text: "The carboxyl group of one and the amino group of the next" }
                    ],
                    answer: "d",
                    explanation: "Condensation between $\\mathrm{-COOH}$ and $\\mathrm{-NH_2}$ eliminates water and leaves the <strong>peptide bond</strong> $\\mathrm{-CO{-}NH-}$. Resonance gives the bond partial double-bond character, so the six atoms around it lie in one rigid plane — the property that makes regular folding into the $\\alpha$-helix possible. A chain of many such residues, with a free amino end and a free carboxyl end, is a polypeptide."
                },
                {
                    id: "d25b24",
                    text: "Keratin and collagen differ from albumin and haemoglobin in that the first two are:",
                    options: [
                        { key: "a", text: "Fibrous proteins, insoluble in water and structural in function" },
                        { key: "b", text: "Conjugated proteins, carrying a non-protein prosthetic group" },
                        { key: "c", text: "Derived proteins, produced by partial hydrolysis of others" },
                        { key: "d", text: "Globular proteins, folded into a compact rounded shape" }
                    ],
                    answer: "a",
                    explanation: "<strong>Fibrous</strong> proteins have their chains laid parallel in sheets or cables, are insoluble in water and resist most reagents, so they serve as structural material — keratin of hair and nails, collagen of tendon, fibroin of silk. <strong>Globular</strong> proteins fold into compact spheres, dissolve in water or salt solution and do the metabolic work: enzymes, haemoglobin, albumin, antibodies and protein hormones."
                },
                {
                    id: "d25b25",
                    text: "A protein united with a non-protein prosthetic group is a conjugated protein. Which pair of examples is correctly named?",
                    options: [
                        { key: "a", text: "Haemoglobin — a glycoprotein; casein — a lipoprotein" },
                        { key: "b", text: "Albumin — a chromoprotein; keratin — a nucleoprotein" },
                        { key: "c", text: "Mucin — a glycoprotein; chromatin — a nucleoprotein" },
                        { key: "d", text: "Insulin — a lipoprotein; collagen — a phosphoprotein" }
                    ],
                    answer: "c",
                    explanation: "Conjugated proteins are named after the prosthetic group: <strong>glycoprotein</strong> (carbohydrate, e.g. mucin), <strong>nucleoprotein</strong> (nucleic acid, e.g. the histone–DNA chromatin), <strong>lipoprotein</strong> (lipid, e.g. the plasma LDL), <strong>chromoprotein</strong> (pigment, e.g. haemoglobin with haem) and <strong>phosphoprotein</strong> (phosphate, e.g. casein of milk). Albumin, keratin and collagen are simple proteins."
                },
                {
                    id: "d25b26",
                    text: "The four separate polypeptide chains of haemoglobin fitted together into one working molecule illustrate:",
                    options: [
                        { key: "a", text: "The primary structure, that is, the order of the amino acids" },
                        { key: "b", text: "The secondary structure, that is, the helix and pleated sheet" },
                        { key: "c", text: "The tertiary structure, that is, the folding of a single chain" },
                        { key: "d", text: "The quaternary structure, that is, the union of sub-units" }
                    ],
                    answer: "d",
                    explanation: "<strong>Quaternary structure</strong> appears only in proteins built of more than one polypeptide: haemoglobin has two $\\alpha$ and two $\\beta$ chains, each with its haem group, held together by non-covalent forces. It is this arrangement that gives haemoglobin its co-operative, sigmoid oxygen-binding curve, which a single chain such as myoglobin cannot show. Insulin and RuBisCO are other examples."
                },
                {
                    id: "d25b27",
                    text: "When egg white is heated it sets into an insoluble white mass. In this change the protein has lost its:",
                    options: [
                        { key: "a", text: "Peptide bonds, so that free amino acids are set free" },
                        { key: "b", text: "Folded shape, though the amino-acid sequence is intact" },
                        { key: "c", text: "Nitrogen, which escapes as ammonia during the heating" },
                        { key: "d", text: "Prosthetic group, leaving only the apoprotein behind" }
                    ],
                    answer: "b",
                    explanation: "<strong>Denaturation</strong> breaks the weak hydrogen, ionic and hydrophobic bonds that hold the secondary and tertiary levels, so the chain uncoils, buried non-polar groups come to the surface and the protein precipitates. The <strong>primary structure is untouched</strong> because peptide bonds are covalent. Heat, strong acid or alkali, alcohol, urea and heavy metal ions all denature; biological activity is lost with the shape."
                },
                {
                    id: "d25b28",
                    text: "A violet colour appears when a solution is treated with sodium hydroxide and a drop of dilute copper sulphate. The test shows the presence of:",
                    options: [
                        { key: "a", text: "Reducing sugar, through the reduction of $\\mathrm{Cu^{2+}}$ to $\\mathrm{Cu^+}$" },
                        { key: "b", text: "Starch, through the formation of an adsorption complex" },
                        { key: "c", text: "Fat, through the appearance of a translucent spot" },
                        { key: "d", text: "Peptide bonds, and therefore of protein in the sample" }
                    ],
                    answer: "d",
                    explanation: "This is the <strong>biuret test</strong>: cupric ions in alkali form a violet co-ordination complex with two or more <strong>peptide bonds</strong>, so it is given by peptides and proteins but not by free amino acids. The <strong>ninhydrin</strong> test (blue-purple) detects free $\\alpha$-amino groups, xanthoproteic detects aromatic residues, and Benedict's or Fehling's is for reducing sugars."
                },
                {
                    id: "d25b29",
                    text: "Insulin, keratin, haemoglobin and trypsin illustrate four different roles of proteins. In that order the roles are:",
                    options: [
                        { key: "a", text: "Catalytic, hormonal, structural and transport" },
                        { key: "b", text: "Hormonal, structural, transport and catalytic" },
                        { key: "c", text: "Structural, transport, catalytic and hormonal" },
                        { key: "d", text: "Transport, catalytic, hormonal and structural" }
                    ],
                    answer: "b",
                    explanation: "Insulin is a <strong>protein hormone</strong> regulating blood glucose, keratin a <strong>structural</strong> protein of skin and nails, haemoglobin a <strong>transport</strong> protein for oxygen and trypsin a <strong>catalytic</strong> protein, an enzyme. Proteins also work in defence (immunoglobulins), movement (actin and myosin), storage (gluten, ovalbumin) and reception (membrane receptors)."
                },
                {
                    id: "d25b30",
                    text: "The chief storage proteins of a wheat grain and of a pea seed are respectively:",
                    options: [
                        { key: "a", text: "Casein and albumin" },
                        { key: "b", text: "Keratin and myosin" },
                        { key: "c", text: "Gluten and legumin" },
                        { key: "d", text: "Zein and collagen" }
                    ],
                    answer: "c",
                    explanation: "Seed proteins are laid down in the endosperm or the cotyledons as aleurone grains and are hydrolysed during germination. <strong>Gluten</strong> of wheat (gliadin + glutenin) gives dough its elasticity, and <strong>legumin</strong> with vicilin is the reserve of the pulses. Zein is the maize protein, casein the milk protein, and keratin, myosin and collagen are animal proteins that are never stored as food reserves."
                },
                {
                    id: "d25b31",
                    text: "An enzyme increases the rate of a reaction because it:",
                    options: [
                        { key: "a", text: "Raises the temperature of the reacting molecules locally" },
                        { key: "b", text: "Lowers the activation energy needed by the reaction" },
                        { key: "c", text: "Shifts the point of equilibrium in favour of the product" },
                        { key: "d", text: "Is used up in the process and so drives it forward" }
                    ],
                    answer: "b",
                    explanation: "By binding the substrate and holding it in the strained transition state the enzyme provides an alternative path of <strong>lower activation energy</strong>, so a far greater fraction of molecules can react at ordinary temperature. Catalase, for instance, cuts the activation energy of hydrogen peroxide decomposition from about 18 to 2 kcal/mol. An enzyme <em>cannot</em> alter $\\Delta G$ or the equilibrium point; it only shortens the time taken to reach it."
                },
                {
                    id: "d25b32",
                    text: "The statement that every enzyme is a protein had to be modified after the discovery that:",
                    options: [
                        { key: "a", text: "Certain RNA molecules are themselves able to act as catalysts" },
                        { key: "b", text: "Some enzymes need a metal ion before they can work at all" },
                        { key: "c", text: "Some enzymes are secreted in an inactive precursor form" },
                        { key: "d", text: "A few enzymes act outside the cell that manufactures them" }
                    ],
                    answer: "a",
                    explanation: "Cech and Altman showed that RNA can be catalytic; such molecules are called <strong>ribozymes</strong>. The self-splicing intron of <em>Tetrahymena</em>, the RNA component of ribonuclease P and, most important, the <strong>peptidyl transferase</strong> activity of the large ribosomal sub-unit are all rRNA and not protein. This supports the idea of an early RNA world in which RNA was both gene and catalyst."
                },
                {
                    id: "d25b33",
                    text: "According to Koshland's induced-fit model, the active site of an enzyme:",
                    options: [
                        { key: "a", text: "Is rigid and exactly complementary to the substrate from the outset" },
                        { key: "b", text: "Alters its shape slightly as the substrate is being bound" },
                        { key: "c", text: "Takes shape only after the product has been released" },
                        { key: "d", text: "Covers the greater part of the surface of the enzyme" }
                    ],
                    answer: "b",
                    explanation: "In Fischer's older <strong>lock-and-key</strong> picture the site was a preformed rigid cavity. Koshland showed that the substrate <strong>induces</strong> a change of conformation, the groups of the site closing round it like a hand round a glove — which explains why an enzyme can distinguish between substrates of very similar shape and why binding at one site can alter another. The active site is only a small pocket of a few residues."
                },
                {
                    id: "d25b34",
                    text: "An enzyme that catalyses the transfer of hydrogen from one substrate to another belongs to the class of:",
                    options: [
                        { key: "a", text: "Hydrolases, such as amylase and lipase" },
                        { key: "b", text: "Lyases, such as aldolase and decarboxylase" },
                        { key: "c", text: "Ligases, such as DNA ligase and the carboxylases" },
                        { key: "d", text: "Oxidoreductases, such as dehydrogenase and oxidase" }
                    ],
                    answer: "d",
                    explanation: "The international scheme recognises six classes: <strong>oxidoreductases</strong> (transfer of hydrogen or electrons), <strong>transferases</strong> (transfer of a group), <strong>hydrolases</strong> (splitting with water), <strong>lyases</strong> (splitting without water, leaving a double bond), <strong>isomerases</strong> (rearrangement within a molecule) and <strong>ligases</strong> (joining two molecules using ATP)."
                },
                {
                    id: "d25b35",
                    text: "Between 0 °C and about 35 °C the rate of an enzyme-catalysed reaction roughly doubles for every rise of 10 °C. This ratio of the two rates is the:",
                    options: [
                        { key: "a", text: "Activation energy of the catalysed reaction" },
                        { key: "b", text: "Michaelis constant, $\\mathrm{K_m}$, of the enzyme" },
                        { key: "c", text: "Turnover number of one enzyme molecule" },
                        { key: "d", text: "Temperature coefficient, $\\mathrm{Q_{10}}$, of the reaction" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{Q_{10}}$ is the factor by which the rate is multiplied for a 10 °C rise; for enzyme reactions it is about 2 in the lower range. Above the optimum the curve falls steeply because the protein begins to <strong>denature</strong>, and the fall is not reversed on cooling. The overall curve is therefore bell-shaped, the optimum for most plant enzymes lying between 25 and 40 °C."
                },
                {
                    id: "d25b36",
                    text: "Pepsin works best at pH 2 and trypsin at pH 8. A shift far away from the optimum pH stops an enzyme mainly because it:",
                    options: [
                        { key: "a", text: "Removes the substrate from the reaction mixture altogether" },
                        { key: "b", text: "Alters the ionic charges of the groups at the active site" },
                        { key: "c", text: "Lowers the temperature of the surrounding medium" },
                        { key: "d", text: "Converts the enzyme back into its inactive zymogen" }
                    ],
                    answer: "b",
                    explanation: "The catalytic and binding groups of the active site are the ionisable side chains — $\\mathrm{-COOH}$, $\\mathrm{-NH_2}$, imidazole, $\\mathrm{-SH}$. Their state of ionisation, and that of the substrate, changes with pH, so outside a narrow range the enzyme and substrate no longer fit or the catalytic step cannot occur. Extremes of pH go further and <strong>denature</strong> the protein irreversibly."
                },
                {
                    id: "d25b37",
                    text: "The substrate concentration at which an enzyme works at half its maximum velocity is its Michaelis constant. A low value of $\\mathrm{K_m}$ means that the enzyme:",
                    options: [
                        { key: "a", text: "Has a high affinity for that particular substrate" },
                        { key: "b", text: "Requires a coenzyme in order to show any activity" },
                        { key: "c", text: "Becomes saturated only at very high substrate levels" },
                        { key: "d", text: "Works best at a comparatively low temperature" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{K_m}$ is the substrate concentration giving $V_{max}/2$. A <strong>small</strong> $\\mathrm{K_m}$ means half-maximal speed is reached with very little substrate, that is, the enzyme <strong>binds its substrate tightly</strong>; a large $\\mathrm{K_m}$ means weak affinity. $\\mathrm{K_m}$ is a constant for a given enzyme–substrate pair and is unchanged by the amount of enzyme present, unlike $V_{max}$."
                },
                {
                    id: "d25b38",
                    text: "In a chain of reactions the final product often attaches to a site other than the active site of the first enzyme and switches the whole chain off. This control is called:",
                    options: [
                        { key: "a", text: "Competitive inhibition at the active site of the enzyme" },
                        { key: "b", text: "Irreversible poisoning of the enzyme by a heavy metal" },
                        { key: "c", text: "Allosteric inhibition, working as a feedback control" },
                        { key: "d", text: "Denaturation of the enzyme protein by its own product" }
                    ],
                    answer: "c",
                    explanation: "An <strong>allosteric</strong> enzyme has a second, regulatory site; binding of the modulator there changes the conformation of the active site and lowers (or raises) its activity. When the end product of a pathway is the modulator of the first enzyme the arrangement is <strong>end-product or feedback inhibition</strong>, and it keeps the cell from making more of a substance than it needs. It is reversible and non-competitive."
                },
                {
                    id: "d25b39",
                    text: "$\\mathrm{NAD^+}$ and FAD, the two commonest hydrogen-carrying coenzymes, are derived respectively from the vitamins:",
                    options: [
                        { key: "a", text: "Riboflavin and pantothenic acid" },
                        { key: "b", text: "Thiamine and biotin" },
                        { key: "c", text: "Niacin and riboflavin" },
                        { key: "d", text: "Ascorbic acid and folic acid" }
                    ],
                    answer: "c",
                    explanation: "Most coenzymes are built round a <strong>water-soluble vitamin</strong>: nicotinamide (niacin, $\\mathrm{B_3}$) in $\\mathrm{NAD^+}$ and $\\mathrm{NADP^+}$, riboflavin ($\\mathrm{B_2}$) in FAD and FMN, pantothenic acid in coenzyme A, thiamine ($\\mathrm{B_1}$) in TPP and pyridoxine ($\\mathrm{B_6}$) in PLP. This is why a deficiency of a single vitamin can cripple many reactions at once."
                },
                {
                    id: "d25b40",
                    text: "A single enzyme molecule can convert many thousands of substrate molecules every minute because the enzyme:",
                    options: [
                        { key: "a", text: "Is set free unchanged at the end of every catalytic cycle" },
                        { key: "b", text: "Combines permanently with the product that it forms" },
                        { key: "c", text: "Is synthesised afresh for each molecule of substrate" },
                        { key: "d", text: "Supplies the energy that the reaction itself requires" }
                    ],
                    answer: "a",
                    explanation: "The enzyme–substrate complex breaks down into product plus <strong>free enzyme</strong>, which at once binds a new substrate molecule, so a minute quantity of enzyme suffices for a large quantity of substrate. The number of molecules transformed per molecule of enzyme per minute is the <strong>turnover number</strong> — about $6\\times10^6$ for carbonic anhydrase, one of the fastest enzymes known."
                }
            ]
        },
        {
            id: "classmon25",
            name: "Classification, Monera & Virus",
            subject: "Botany",
            accent: "blue",
            blurb: "Q41–70 · two-kingdom system, taxonomic hierarchy and binomial nomenclature, five-kingdom and three-domain systems; bacterial cell, types, nutrition and growth; cyanobacteria; viruses.",
            questions: [
                {
                    id: "d25b41",
                    text: "The two-kingdom system of classification, which divided all organisms into Plantae and Animalia, was given by:",
                    options: [
                        { key: "a", text: "Carolus Linnaeus, in his Systema Naturae" },
                        { key: "b", text: "R. H. Whittaker, in his paper of 1969" },
                        { key: "c", text: "Carl Woese, from ribosomal RNA sequences" },
                        { key: "d", text: "Ernst Haeckel, who added a third kingdom" }
                    ],
                    answer: "a",
                    explanation: "<strong>Linnaeus</strong> formalised the two-kingdom scheme, plants being non-motile and wall-bearing and animals motile and wall-less. Haeckel (1866) added <strong>Protista</strong> for the simple organisms that fitted neither, Copeland raised the bacteria to a fourth kingdom, Whittaker (1969) gave the five-kingdom system, and Woese (1990) the three domains."
                },
                {
                    id: "d25b42",
                    text: "The work that is taken as the starting point of botanical nomenclature, in which binomial names of plants were used consistently for the first time, is:",
                    options: [
                        { key: "a", text: "Genera Plantarum of Bentham and Hooker" },
                        { key: "b", text: "Species Plantarum of Linnaeus, 1753" },
                        { key: "c", text: "Systema Naturae of Linnaeus, 1758" },
                        { key: "d", text: "Historia Plantarum of John Ray" }
                    ],
                    answer: "b",
                    explanation: "<em>Species Plantarum</em> (1753) described about 6,000 species, each with a two-word name, and all plant names date from it; the corresponding starting point for animals is the tenth edition of <em>Systema Naturae</em> (1758). A binomial has a <strong>generic name</strong> (a noun, first letter capital) followed by a <strong>specific epithet</strong>, both Latinised, e.g. <em>Mangifera indica</em>."
                },
                {
                    id: "d25b43",
                    text: "The naming of plants, algae and fungi is governed by a set of internationally agreed rules known as:",
                    options: [
                        { key: "a", text: "ICZN, the code framed for zoological nomenclature" },
                        { key: "b", text: "IUPAC, the rules used for naming chemical substances" },
                        { key: "c", text: "ICNCP, the code drawn up for cultivated plants alone" },
                        { key: "d", text: "ICN, formerly the ICBN, revised at each botanical congress" }
                    ],
                    answer: "d",
                    explanation: "The <strong>International Code of Nomenclature for algae, fungi and plants</strong> (ICN, called ICBN before 2011) lays down the rules of priority, valid publication, type specimens and Latin form; it is revised at every International Botanical Congress. Animals are covered by the ICZN, bacteria by the ICNB and cultivated varieties by the ICNCP."
                },
                {
                    id: "d25b44",
                    text: "In the taxonomic hierarchy of plants the category that lies between Kingdom and Class, and that answers to Phylum in animals, is:",
                    options: [
                        { key: "a", text: "Order, which is an assemblage of related families" },
                        { key: "b", text: "Family, which is an assemblage of related genera" },
                        { key: "c", text: "Division, which is an assemblage of related classes" },
                        { key: "d", text: "Species, the basic unit of the whole hierarchy" }
                    ],
                    answer: "c",
                    explanation: "The obligate ranks run Kingdom – <strong>Division (Phylum)</strong> – Class – Order – Family – Genus – Species. Botanists use <em>Division</em> with the ending -phyta (Bryophyta, Pteridophyta) and the class ending -opsida; zoologists use <em>Phylum</em>. Intermediate ranks such as sub-class, tribe and sub-species may be inserted wherever they are needed."
                },
                {
                    id: "d25b45",
                    text: "As one moves upward in the taxonomic hierarchy from species towards kingdom:",
                    options: [
                        { key: "a", text: "The number of organisms rises and the shared characters fall" },
                        { key: "b", text: "Both the number of organisms and the shared characters rise" },
                        { key: "c", text: "The number of organisms falls and the shared characters rise" },
                        { key: "d", text: "Both the number of organisms and the shared characters fall" }
                    ],
                    answer: "a",
                    explanation: "Each higher category is more inclusive, so it holds <strong>more individuals and more kinds</strong> of organism, but the features they all share become <strong>fewer and more general</strong>. Members of one species share almost every character; members of one kingdom share only a handful, such as the possession of a cell wall and of chlorophyll in Plantae."
                },
                {
                    id: "d25b46",
                    text: "The system of Bentham and Hooker uses a large number of characters drawn from every part of the plant but takes no account of evolutionary descent. Such a system is:",
                    options: [
                        { key: "a", text: "An artificial system, like the one based on the stamens alone" },
                        { key: "b", text: "A phylogenetic system, based upon evolutionary relationship" },
                        { key: "c", text: "A numerical system, based on computed similarity values" },
                        { key: "d", text: "A natural system, based on all the available characters" }
                    ],
                    answer: "d",
                    explanation: "An <strong>artificial</strong> system uses one or a few easily seen characters — Linnaeus's sexual system, which grouped plants by the number of stamens, put quite unrelated plants together. A <strong>natural</strong> system, such as Bentham and Hooker's, weighs all characters and gives groups that hold together well. A <strong>phylogenetic</strong> system, such as Engler and Prantl's, arranges taxa by descent from a common ancestor."
                },
                {
                    id: "d25b47",
                    text: "A defect commonly pointed out in Whittaker's five-kingdom system is that:",
                    options: [
                        { key: "a", text: "It removed the fungi from the company of the green plants" },
                        { key: "b", text: "Protista remains a very mixed group and viruses find no place" },
                        { key: "c", text: "It placed the bacteria in a separate kingdom of their own" },
                        { key: "d", text: "It made the mode of nutrition one of the main criteria" }
                    ],
                    answer: "b",
                    explanation: "<strong>Protista</strong> was made a dumping ground for every simple eukaryote — walled and wall-less, autotrophic and heterotrophic, unicellular and colonial — so it is not a natural group. Besides, <strong>viruses, viroids, prions and lichens</strong> have no place in the scheme at all, and unicellular and multicellular green algae are separated into different kingdoms although they are closely related."
                },
                {
                    id: "d25b48",
                    text: "Whittaker placed the slime moulds (Myxomycetes) not among the fungi but in:",
                    options: [
                        { key: "a", text: "Kingdom Protista, their body being a wall-less plasmodium" },
                        { key: "b", text: "Kingdom Fungi, since they form walled spores in sporangia" },
                        { key: "c", text: "Kingdom Monera, since they possess no true nucleus" },
                        { key: "d", text: "Kingdom Animalia, since they take in solid food particles" }
                    ],
                    answer: "a",
                    explanation: "The vegetative phase of a slime mould is a naked multinucleate <strong>plasmodium</strong> that creeps like an amoeba and <strong>engulfs</strong> its food, so it has neither the cell wall nor the absorptive nutrition of a fungus. Only the spore stage is fungus-like. Being a simple eukaryote that is neither plant, animal nor fungus, it goes into Protista."
                },
                {
                    id: "d25b49",
                    text: "In the three-domain system of Woese the domain Eukarya takes in:",
                    options: [
                        { key: "a", text: "Only the two kingdoms Plantae and Animalia" },
                        { key: "b", text: "Monera, Protista, Fungi and Plantae" },
                        { key: "c", text: "Archaea, Bacteria and Protista together" },
                        { key: "d", text: "Protista, Fungi, Plantae and Animalia" }
                    ],
                    answer: "d",
                    explanation: "Woese kept Whittaker's four eukaryotic kingdoms inside one domain, <strong>Eukarya</strong>, and split the old Monera into two domains, <strong>Bacteria</strong> (eubacteria) and <strong>Archaea</strong> (archaebacteria), because the two differ from each other in ribosomal RNA sequence as much as either differs from eukaryotes. In several molecular features the Archaea are in fact nearer to Eukarya than to Bacteria."
                },
                {
                    id: "d25b50",
                    text: "Methanogens, halophiles and thermoacidophiles, the three well-known groups of archaebacteria, are found respectively in:",
                    options: [
                        { key: "a", text: "The rumen of cattle, salt pans and hot sulphur springs" },
                        { key: "b", text: "Hot springs, the rumen of cattle and salt pans" },
                        { key: "c", text: "Salt pans, hot sulphur springs and the rumen of cattle" },
                        { key: "d", text: "Deep-sea mud, freshwater ponds and ordinary garden soil" }
                    ],
                    answer: "a",
                    explanation: "Archaebacteria are the organisms of extreme habitats. <strong>Methanogens</strong> live in marshes, sewage and the gut of ruminants, where they reduce $\\mathrm{CO_2}$ to marsh gas; <strong>extreme halophiles</strong> need 15–20 % salt and colour salt pans red; <strong>thermoacidophiles</strong> flourish at 80 °C and pH 2 in sulphur springs. Their walls lack peptidoglycan and their membrane lipids are branched and ether-linked."
                },
                {
                    id: "d25b51",
                    text: "The thick mucilaginous layer lying outside the cell wall of a bacterium such as Pneumococcus:",
                    options: [
                        { key: "a", text: "Carries the enzymes needed for aerobic respiration" },
                        { key: "b", text: "Bears the receptors to which the flagella are anchored" },
                        { key: "c", text: "Guards it against drying and against phagocytosis" },
                        { key: "d", text: "Holds the whole of the genetic material of the cell" }
                    ],
                    answer: "c",
                    explanation: "The <strong>capsule</strong> (a firm glycocalyx of polysaccharide, loosely attached as a slime layer in some species) prevents desiccation, helps the cell stick to surfaces and, above all, makes it slippery to the white cells of the host. Encapsulated 'smooth' pneumococci are therefore <strong>virulent</strong> while the unencapsulated 'rough' form is harmless — the very difference Griffith used in his transformation experiment."
                },
                {
                    id: "d25b52",
                    text: "Compared with the wall of a Gram-positive bacterium, that of a Gram-negative bacterium possesses:",
                    options: [
                        { key: "a", text: "Much thicker peptidoglycan together with teichoic acids" },
                        { key: "b", text: "Thin peptidoglycan and an outer lipopolysaccharide membrane" },
                        { key: "c", text: "No peptidoglycan whatever, only a surface layer of protein" },
                        { key: "d", text: "Cellulose taking the place of peptidoglycan in the inner layer" }
                    ],
                    answer: "b",
                    explanation: "The Gram-positive wall is a thick homogeneous peptidoglycan sheet threaded with <strong>teichoic acid</strong>, which retains the crystal violet–iodine complex. The Gram-negative wall has only a thin peptidoglycan layer covered by an <strong>outer membrane of lipopolysaccharide</strong>; alcohol dissolves the lipid, the stain washes out and the cell takes the safranin counterstain. The LPS is the endotoxin, and the outer membrane also makes such bacteria less permeable to many antibiotics."
                },
                {
                    id: "d25b53",
                    text: "The mesosome of a bacterial cell is:",
                    options: [
                        { key: "a", text: "A ring of DNA carrying the antibiotic-resistance genes" },
                        { key: "b", text: "A membrane-bound sac in which worn-out enzymes are digested" },
                        { key: "c", text: "The region in which 80S ribosomes are assembled" },
                        { key: "d", text: "An infolding of the plasma membrane, vesicular or tubular" }
                    ],
                    answer: "d",
                    explanation: "The <strong>mesosome</strong> is formed by invagination of the plasma membrane in the shape of vesicles, tubules or lamellae. By increasing the membrane surface it helps in <strong>respiration</strong> (it carries the respiratory enzymes, so it is the functional counterpart of a mitochondrion), in the <strong>replication and separation of the DNA</strong>, in the formation of the cross wall during fission and in secretion."
                },
                {
                    id: "d25b54",
                    text: "The ribosomes in the cytoplasm of a bacterium differ from those in the cytoplasm of a plant cell in being:",
                    options: [
                        { key: "a", text: "Attached in rows to the endoplasmic reticulum" },
                        { key: "b", text: "80S, built of one 60S and one 40S sub-unit" },
                        { key: "c", text: "70S, built of one 50S and one 30S sub-unit" },
                        { key: "d", text: "Made up of protein alone, with no RNA in them" }
                    ],
                    answer: "c",
                    explanation: "Prokaryotic ribosomes are <strong>70S</strong> (50S + 30S), eukaryotic cytoplasmic ones <strong>80S</strong> (60S + 40S); those of mitochondria and chloroplasts are 70S, which is one of the main arguments for the endosymbiotic theory. Several ribosomes translating one mRNA form a polysome. The difference between 70S and 80S is exploited by antibiotics such as streptomycin, tetracycline and chloramphenicol, which bind only to the bacterial type."
                },
                {
                    id: "d25b55",
                    text: "The flagellum of a bacterium differs fundamentally from that of a eukaryotic cell in that it:",
                    options: [
                        { key: "a", text: "Contains microtubules set in nine peripheral doublets" },
                        { key: "b", text: "Is enclosed by an extension of the plasma membrane" },
                        { key: "c", text: "Is built of the protein flagellin and has no 9 + 2 plan" },
                        { key: "d", text: "Lashes from side to side instead of turning like a screw" }
                    ],
                    answer: "c",
                    explanation: "A bacterial flagellum is a hollow helical filament of the protein <strong>flagellin</strong>, made of a filament, a hook and a basal body, lying wholly outside the plasma membrane; it is about a tenth as thick as a eukaryotic flagellum and has no microtubules. It works as a <strong>rotating screw</strong> driven by the proton gradient across the membrane, whereas the 9 + 2 eukaryotic flagellum bends by ATP-driven sliding of its dynein arms."
                },
                {
                    id: "d25b56",
                    text: "The fimbriae and the sex pilus of a bacterium are concerned respectively with:",
                    options: [
                        { key: "a", text: "Locomotion and with cellular respiration" },
                        { key: "b", text: "Attachment to a surface and transfer of DNA" },
                        { key: "c", text: "Protection from drying and storage of food" },
                        { key: "d", text: "Photosynthesis and fixation of free nitrogen" }
                    ],
                    answer: "b",
                    explanation: "<strong>Fimbriae</strong> are numerous short bristles that let the cell stick to rocks, tissues or the host gut — an important factor in infection. The <strong>sex pilus</strong> is longer, present in one or two copies on an $\\mathrm{F^+}$ (donor) cell, and forms the conjugation bridge through which a copy of the F plasmid passes to an $\\mathrm{F^-}$ cell. Neither has anything to do with movement, which is the work of the flagella."
                },
                {
                    id: "d25b57",
                    text: "The great majority of bacteria are heterotrophic. One that lives on dead organic remains and brings about their decay is called:",
                    options: [
                        { key: "a", text: "A parasite, since it draws its food from another organism" },
                        { key: "b", text: "A symbiont, since it gives the partner something in return" },
                        { key: "c", text: "A chemoautotroph, since it oxidises an inorganic substance" },
                        { key: "d", text: "A saprophyte, since it feeds on dead and decaying matter" }
                    ],
                    answer: "d",
                    explanation: "A <strong>saprophytic</strong> bacterium pours digestive enzymes on to the dead substrate and absorbs the soluble products; such bacteria are the chief <strong>decomposers</strong>, returning carbon, nitrogen and sulphur to circulation, and are put to work in retting, curd-making and sewage treatment. Parasitic bacteria live on a living host and may cause disease, symbiotic ones such as <em>Rhizobium</em> benefit their partner, while autotrophic bacteria make their own food using light (photoautotrophs) or the oxidation of ammonia, nitrite or $\\mathrm{H_2S}$ (chemoautotrophs)."
                },
                {
                    id: "d25b58",
                    text: "Rhizobium living in the root nodule of a leguminous plant is a bacterium whose mode of life is:",
                    options: [
                        { key: "a", text: "Parasitic, for it draws its food from the tissues of the host" },
                        { key: "b", text: "Saprophytic, for it lives on the dead cells of the root cortex" },
                        { key: "c", text: "Photoautotrophic, using the light that reaches the root" },
                        { key: "d", text: "Symbiotic, fixing nitrogen in return for food and shelter" }
                    ],
                    answer: "d",
                    explanation: "Inside the nodule the bacteria become swollen <strong>bacteroids</strong> and reduce atmospheric $\\mathrm{N_2}$ to ammonia with the enzyme <strong>nitrogenase</strong>, receiving carbohydrate and a protected home from the legume. Since nitrogenase is destroyed by oxygen, the nodule makes the pink pigment <strong>leghaemoglobin</strong>, which mops up free oxygen. Azotobacter and Clostridium fix nitrogen free-living, without any host."
                },
                {
                    id: "d25b59",
                    text: "In the growth curve of a bacterial culture the number of living cells stays constant throughout the stationary phase because:",
                    options: [
                        { key: "a", text: "Cell division has come to a complete stop in the culture" },
                        { key: "b", text: "New cells are being formed exactly as fast as old ones die" },
                        { key: "c", text: "All the cells have turned into resistant resting spores" },
                        { key: "d", text: "The generation time has become extremely short" }
                    ],
                    answer: "b",
                    explanation: "In a closed culture, food runs short and toxic products such as acids accumulate, so the rate of division falls until it exactly balances the rate of death; the <strong>total count keeps rising</strong> while the <strong>viable count is level</strong>. The four phases are lag (adjustment, no division), log (constant maximum rate, straight line on a log plot), stationary and decline or death."
                },
                {
                    id: "d25b60",
                    text: "Bacteria multiply chiefly by binary fission, a process in which:",
                    options: [
                        { key: "a", text: "The nucleus divides by mitosis before the cell itself divides" },
                        { key: "b", text: "Small buds are produced that separate later from the parent" },
                        { key: "c", text: "The DNA is replicated and the cell splits into two equal halves" },
                        { key: "d", text: "A spore is formed within the cell and set free when it bursts" }
                    ],
                    answer: "c",
                    explanation: "The circular DNA is copied, the two copies are pulled apart as the membrane grows between their attachment points, and a transverse wall cuts the cell into <strong>two equal daughter cells</strong>. There is <strong>no spindle and no mitosis</strong>, since there is no true nucleus. The time taken for one such cycle is the generation time — about 20 minutes for <em>E. coli</em> under ideal conditions. Endospore formation is a survival device, not multiplication."
                },
                {
                    id: "d25b61",
                    text: "The blue-green colour of a cyanobacterium is due to a water-soluble pigment held in the phycobilisomes, namely:",
                    options: [
                        { key: "a", text: "C-phycocyanin, working together with chlorophyll a" },
                        { key: "b", text: "Phycoerythrin, working together with chlorophyll d" },
                        { key: "c", text: "Fucoxanthin, working together with chlorophyll c" },
                        { key: "d", text: "Bacteriochlorophyll, working together with carotene" }
                    ],
                    answer: "a",
                    explanation: "Cyanobacteria have <strong>chlorophyll a</strong>, carotenoids and the biliproteins <strong>c-phycocyanin</strong> (blue) and c-phycoerythrin (red) mounted on the thylakoids as phycobilisomes; the mixture accounts for the blue-green colour and for the ability to use green light. <strong>Chlorophyll b is absent</strong>, the thylakoids lie free in the cytoplasm since there is no chloroplast, and the reserve is cyanophycean starch."
                },
                {
                    id: "d25b62",
                    text: "Anabaena azollae is of great value in the paddy fields of Nepal because it:",
                    options: [
                        { key: "a", text: "Kills the insect pests that attack the young rice plant" },
                        { key: "b", text: "Decomposes the straw left in the field after the harvest" },
                        { key: "c", text: "Prevents the loss of water from the flooded field" },
                        { key: "d", text: "Fixes atmospheric nitrogen inside the leaf of Azolla" }
                    ],
                    answer: "d",
                    explanation: "<em>Anabaena azollae</em> lives in the leaf cavity of the water fern <em>Azolla</em> and fixes nitrogen in its heterocysts; the fern is grown as a floating <strong>biofertiliser</strong> in flooded rice fields and can add 40–60 kg of nitrogen per hectare. Free-living <em>Nostoc</em> and <em>Anabaena</em> do the same in the soil, which is why paddy fields need less nitrogenous manure than dry fields do."
                },
                {
                    id: "d25b63",
                    text: "Tobacco mosaic virus was obtained in the form of needle-shaped crystals, showing that a virus can behave like a chemical substance. This was the achievement of:",
                    options: [
                        { key: "a", text: "Ivanowsky, who found the sap infective after filtration" },
                        { key: "b", text: "Stanley, who purified and crystallised the virus in 1935" },
                        { key: "c", text: "Beijerinck, who called it a contagium vivum fluidum" },
                        { key: "d", text: "Twort and d'Herelle, the discoverers of the bacteriophage" }
                    ],
                    answer: "b",
                    explanation: "<strong>W. M. Stanley</strong> crystallised TMV, and Bawden and Pirie soon showed the crystals to be nucleoprotein. Earlier, <strong>Ivanowsky</strong> (1892) had proved the agent passed through a bacteria-proof filter and <strong>Beijerinck</strong> (1898) had named it a 'living infectious fluid'. The ability to be crystallised, like a chemical, is the strongest evidence for the non-living side of a virus's nature."
                },
                {
                    id: "d25b64",
                    text: "Chemically the simplest viruses are best described as:",
                    options: [
                        { key: "a", text: "Nucleoproteins, a nucleic acid enclosed in a protein coat" },
                        { key: "b", text: "Lipoproteins, fat and protein in about equal proportion" },
                        { key: "c", text: "Glycoproteins, protein carrying a branched sugar chain" },
                        { key: "d", text: "Both DNA and RNA enclosed within a wall of cellulose" }
                    ],
                    answer: "a",
                    explanation: "A simple virus such as TMV is pure <strong>nucleoprotein</strong> — one nucleic acid, either DNA or RNA but <strong>never both</strong>, wrapped in a coat of protein. Larger and enveloped viruses carry lipid and carbohydrate taken from the host membrane, and a few package enzymes of their own, such as the reverse transcriptase of a retrovirus or the lysozyme in the tail of a phage."
                },
                {
                    id: "d25b65",
                    text: "A virus that attacks a blue-green alga and one that attacks a bacterium are called respectively:",
                    options: [
                        { key: "a", text: "Bacteriophage and mycophage" },
                        { key: "b", text: "Phytophage and zoophage" },
                        { key: "c", text: "Mycophage and cyanophage" },
                        { key: "d", text: "Cyanophage and bacteriophage" }
                    ],
                    answer: "d",
                    explanation: "Viruses are commonly grouped by the host they infect: <strong>bacteriophage</strong> (bacteria), <strong>cyanophage</strong> (cyanobacteria, e.g. LPP-1 of <em>Lyngbya</em>–<em>Plectonema</em>–<em>Phormidium</em>), <strong>mycophage</strong> (fungi), <strong>phytophage</strong> or plant virus and <strong>zoophage</strong> or animal virus. They may also be grouped by the nucleic acid they carry or by the symmetry of the capsid."
                },
                {
                    id: "d25b66",
                    text: "In a T-even bacteriophage the genetic material is lodged in:",
                    options: [
                        { key: "a", text: "The tail fibres, by which it also settles on the host" },
                        { key: "b", text: "The base plate, from which it is driven into the cell" },
                        { key: "c", text: "The many-sided head, the tail acting as a syringe" },
                        { key: "d", text: "The contractile sheath that surrounds the hollow core" }
                    ],
                    answer: "c",
                    explanation: "A T4 phage is a tadpole-shaped particle with a <strong>hexagonal (icosahedral) head</strong> holding the double-stranded DNA, a short collar, and a tail made of a hollow core with a contractile sheath ending in a base plate with spikes and six <strong>tail fibres</strong>. The fibres recognise and grip the wall, the sheath contracts, and the DNA alone is injected while the empty coat, the 'ghost', stays outside."
                },
                {
                    id: "d25b67",
                    text: "The envelope of a virus such as influenza virus or HIV is:",
                    options: [
                        { key: "a", text: "Made of peptidoglycan borrowed from the bacterial wall" },
                        { key: "b", text: "A second protein capsid formed inside the first one" },
                        { key: "c", text: "A layer of cellulose secreted by the virus particle itself" },
                        { key: "d", text: "Host membrane lipid carrying glycoprotein spikes" }
                    ],
                    answer: "d",
                    explanation: "As the virus buds out of the cell it wraps itself in a piece of the <strong>host plasma membrane</strong>, into which virus-coded <strong>glycoprotein spikes or peplomers</strong> have already been inserted — the haemagglutinin and neuraminidase of influenza, gp120 and gp41 of HIV. The spikes bind to the receptors of the next cell, and being lipid, an envelope is destroyed by soap, alcohol and ether."
                },
                {
                    id: "d25b68",
                    text: "Which plant disease is correctly stated to be caused by a virus?",
                    options: [
                        { key: "a", text: "Bunchy top of banana, spread from plant to plant by aphids" },
                        { key: "b", text: "Late blight of potato, spread in wet weather by zoospores" },
                        { key: "c", text: "Loose smut of wheat, carried in the embryo of the seed" },
                        { key: "d", text: "Citrus canker, spread by rain splash through the stomata" }
                    ],
                    answer: "a",
                    explanation: "<strong>Bunchy top</strong> of banana is caused by a DNA virus transmitted by the aphid <em>Pentalonia</em>; other well-known plant viruses cause tobacco mosaic, leaf curl of tomato and yellow vein mosaic of lady's finger. Late blight is due to the fungus-like <em>Phytophthora infestans</em>, loose smut to the fungus <em>Ustilago</em>, and citrus canker to the bacterium <em>Xanthomonas</em>."
                },
                {
                    id: "d25b69",
                    text: "Antibiotics are of no use in a viral disease because a virus:",
                    options: [
                        { key: "a", text: "Multiplies much more rapidly than any bacterium can" },
                        { key: "b", text: "Has no metabolic machinery of its own to be interfered with" },
                        { key: "c", text: "Is shielded by a thick wall of peptidoglycan and lipid" },
                        { key: "d", text: "Destroys the antibiotic by means of its own enzymes" }
                    ],
                    answer: "b",
                    explanation: "Antibiotics act on structures peculiar to a bacterium — peptidoglycan synthesis, the 70S ribosome, bacterial folate metabolism. A virus has <strong>no wall, no ribosomes and no metabolism</strong>; it uses the host's machinery, so there is nothing for the drug to attack without harming the host cell too. Viral infections are met with <strong>vaccines</strong>, interferon and antiviral drugs aimed at virus-coded enzymes."
                },
                {
                    id: "d25b70",
                    text: "Which use of viruses to the benefit of man is correctly stated?",
                    options: [
                        { key: "a", text: "Bacteriophages are used to sterilise drinking water in bulk" },
                        { key: "b", text: "Viruses are grown on a large scale as a source of antibiotics" },
                        { key: "c", text: "Weakened or killed viruses are used to prepare vaccines" },
                        { key: "d", text: "Viruses are added to the soil to fix atmospheric nitrogen" }
                    ],
                    answer: "c",
                    explanation: "<strong>Attenuated or inactivated viruses</strong>, and now their isolated antigens, are the basis of the vaccines against smallpox, polio, measles and rabies. Viruses are also used as <strong>vectors</strong> to carry genes in genetic engineering and gene therapy, in the <strong>biological control</strong> of insect pests (baculoviruses) and, increasingly, as bacteriophage therapy against resistant bacteria."
                }
            ]
        },
        {
            id: "funalg25",
            name: "Fungi, Lichens & Algae",
            subject: "Botany",
            accent: "cyan",
            blurb: "Q71–100 · Phycomycetes, Ascomycetes, Basidiomycetes and Deuteromycetes, yeast and Mucor; types of lichens; Chlorophyceae, Rhodophyceae, Phaeophyceae and Spirogyra.",
            questions: [
                {
                    id: "d25b71",
                    text: "Puccinia, the rust fungus, grows only on a living host and has never been cultured on an artificial medium. It is therefore:",
                    options: [
                        { key: "a", text: "A facultative parasite, able to live on dead matter as well" },
                        { key: "b", text: "An obligate parasite, wholly dependent on a living host" },
                        { key: "c", text: "A saprophyte, feeding on dead and decaying organic matter" },
                        { key: "d", text: "A symbiont, exchanging food with the host to mutual gain" }
                    ],
                    answer: "b",
                    explanation: "An <strong>obligate (biotrophic) parasite</strong> such as <em>Puccinia</em>, <em>Albugo</em> or <em>Erysiphe</em> draws food from living cells through <strong>haustoria</strong> and cannot be grown apart from the host. A <strong>facultative parasite</strong> is normally saprophytic but attacks a weakened host, and a facultative saprophyte does the reverse. Fungal nutrition is always <strong>heterotrophic and absorptive</strong>, digestion taking place outside the body."
                },
                {
                    id: "d25b72",
                    text: "Which set of characters belongs to the class Phycomycetes?",
                    options: [
                        { key: "a", text: "Aseptate mycelium; zoospores or aplanospores; oospore, zygospore" },
                        { key: "b", text: "Septate mycelium; conidia; ascospores formed inside a sac" },
                        { key: "c", text: "Septate mycelium; no asexual spore; basidiospores on a club" },
                        { key: "d", text: "Aseptate mycelium; conidia in chains; spores borne on a basidium" }
                    ],
                    answer: "a",
                    explanation: "The Phycomycetes or algal fungi have a <strong>coenocytic, non-septate mycelium</strong> — septa appear only to cut off reproductive organs. Asexual reproduction is by <strong>zoospores</strong> in aquatic forms (<em>Albugo</em>, <em>Phytophthora</em>) and non-motile <strong>aplanospores</strong> in terrestrial ones (<em>Mucor</em>, <em>Rhizopus</em>). Sexually, gametangial contact gives an <strong>oospore</strong> and gametangial copulation of equal gametangia a <strong>zygospore</strong>."
                },
                {
                    id: "d25b73",
                    text: "The cup-shaped ascocarp of Peziza, the flask-shaped ascocarp of Neurospora and the completely closed one of Penicillium are called respectively:",
                    options: [
                        { key: "a", text: "Perithecium, cleistothecium and apothecium" },
                        { key: "b", text: "Cleistothecium, apothecium and perithecium" },
                        { key: "c", text: "Apothecium, perithecium and cleistothecium" },
                        { key: "d", text: "Basidiocarp, ascocarp and sporangium" }
                    ],
                    answer: "c",
                    explanation: "The fruiting body of an ascomycete takes three forms: the open cup <strong>apothecium</strong>, the flask with a narrow pore or ostiole, the <strong>perithecium</strong>, and the wholly closed <strong>cleistothecium</strong> that must decay or rupture to free its asci. The class is further marked by a septate mycelium, asexual reproduction by <strong>exogenous conidia</strong> cut off from a conidiophore, and ascospores formed within an ascus after meiosis."
                },
                {
                    id: "d25b74",
                    text: "The clamp connection formed at each septum of a growing basidiomycete hypha ensures that:",
                    options: [
                        { key: "a", text: "The basidiospores are always produced in groups of eight" },
                        { key: "b", text: "The cytoplasm of neighbouring cells stays permanently separate" },
                        { key: "c", text: "Every cell of the mycelium receives one nucleus of each kind" },
                        { key: "d", text: "Water passes rapidly from one cell of the hypha to the next" }
                    ],
                    answer: "c",
                    explanation: "The dikaryotic (n + n) mycelium is the long-lived phase of a basidiomycete, and the <strong>clamp connection</strong> is a small backward-growing hook that carries one daughter nucleus past the developing septum. The result is that each new cell keeps <strong>one nucleus of each mating type</strong>. Basidiospores, in contrast, are four in number and are borne <strong>outside</strong> the club-shaped basidium on slender sterigmata."
                },
                {
                    id: "d25b75",
                    text: "Aspergillus and Penicillium were once placed among the Deuteromycetes but are now put in the Ascomycetes because:",
                    options: [
                        { key: "a", text: "Their conidia were found to be produced in long chains" },
                        { key: "b", text: "Their sexual stage, in which ascospores are formed, was found" },
                        { key: "c", text: "They were found to possess an aseptate coenocytic mycelium" },
                        { key: "d", text: "They proved to be of great use to man in industry" }
                    ],
                    answer: "b",
                    explanation: "The Deuteromycetes or <strong>fungi imperfecti</strong> is an artificial, temporary class for fungi in which only the conidial (imperfect) stage is known. The moment the <strong>perfect stage</strong> is discovered the fungus is transferred to whichever class it belongs to — usually Ascomycetes, occasionally Basidiomycetes. <em>Aspergillus</em> and <em>Penicillium</em>, whose cleistothecia are now known, made exactly this journey."
                },
                {
                    id: "d25b76",
                    text: "Yeast is a unicellular fungus, yet a culture often shows chains of cells that look like a hypha. Such a chain is formed because:",
                    options: [
                        { key: "a", text: "The buds fail to separate and remain attached in a row" },
                        { key: "b", text: "The wall of one cell grows out into a true branched hypha" },
                        { key: "c", text: "Several cells fuse end to end after they have conjugated" },
                        { key: "d", text: "The nucleus divides repeatedly without any wall being laid" }
                    ],
                    answer: "a",
                    explanation: "In budding, a small outgrowth of the parent receives a daughter nucleus and is cut off by a wall, leaving a bud scar. When food is plentiful the buds themselves begin to bud before separating, so a branched chain called a <strong>pseudomycelium</strong> is produced. It is not a true mycelium: the cells are merely joined end to end and there is no continuous protoplasm."
                },
                {
                    id: "d25b77",
                    text: "The same activity of yeast is used in bread-making and in brewing, namely the conversion of sugar into:",
                    options: [
                        { key: "a", text: "Lactic acid and water by aerobic respiration" },
                        { key: "b", text: "Acetic acid and hydrogen by simple oxidation" },
                        { key: "c", text: "Starch and oxygen by a form of photosynthesis" },
                        { key: "d", text: "Ethyl alcohol and carbon dioxide by fermentation" }
                    ],
                    answer: "d",
                    explanation: "In the absence of oxygen the enzyme complex <strong>zymase</strong> of <em>Saccharomyces</em> breaks sugar down to ethanol and $\\mathrm{CO_2}$: $\\mathrm{C_6H_{12}O_6 \\rightarrow 2C_2H_5OH + 2CO_2}$. In the bakery it is the <strong>carbon dioxide</strong> that matters — it raises the dough, while the alcohol is driven off in the oven; in the brewery it is the <strong>alcohol</strong>. Yeast is also a commercial source of vitamin B and of single-cell protein."
                },
                {
                    id: "d25b78",
                    text: "The ascus of yeast differs from the ascus of a typical ascomycete in that it:",
                    options: [
                        { key: "a", text: "Contains eight ascospores in place of the usual four" },
                        { key: "b", text: "Is naked, no fruiting body being formed round it at all" },
                        { key: "c", text: "Is produced without any fusion of nuclei taking place" },
                        { key: "d", text: "Sets free motile spores provided with two flagella each" }
                    ],
                    answer: "b",
                    explanation: "In yeast the diploid cell formed after conjugation becomes the ascus directly; its nucleus divides by meiosis and four (sometimes eight) <strong>ascospores</strong> are cut out within the parent wall. There is <strong>no ascocarp</strong> and no ascogenous hypha, so the ascus is described as naked — one of the reasons why yeast is regarded as a simple, reduced ascomycete."
                },
                {
                    id: "d25b79",
                    text: "The sporangium of Mucor sets free non-motile spores, although many other Phycomycetes produce motile zoospores. This is connected with the fact that Mucor:",
                    options: [
                        { key: "a", text: "Is terrestrial, growing on damp bread, dung and stale food" },
                        { key: "b", text: "Possesses a septate mycelium of the more advanced type" },
                        { key: "c", text: "Reproduces sexually by the fusion of two motile zoospores" },
                        { key: "d", text: "Has lost the wall of the sporangium during its evolution" }
                    ],
                    answer: "a",
                    explanation: "Flagellate zoospores are of use only where there is a film of water. <em>Mucor</em> and <em>Rhizopus</em> are land fungi growing saprophytically on bread, dung and decaying food, so their sporangiospores are non-motile <strong>aplanospores</strong> with a wall, dispersed dry by air currents. The trend from zoospore to aplanospore to conidium runs right through the fungi and parallels the conquest of the land."
                },
                {
                    id: "d25b80",
                    text: "After a period of rest the zygospore of Mucor germinates and gives rise to:",
                    options: [
                        { key: "a", text: "A germ tube growing at once into a diploid mycelium" },
                        { key: "b", text: "A germ sporangium in which haploid spores are formed" },
                        { key: "c", text: "Two motile gametes which fuse to make a fresh zygote" },
                        { key: "d", text: "A row of four ascospores arranged within a closed sac" }
                    ],
                    answer: "b",
                    explanation: "The zygospore is the only diploid cell in the life cycle. On germination the diploid nucleus divides <strong>meiotically</strong> and a short germ tube swells into a <strong>germ sporangium</strong> that liberates <strong>haploid</strong> spores, each of which grows into a new mycelium. The life cycle is therefore <strong>haplontic</strong>, with zygotic meiosis, exactly as in <em>Spirogyra</em>."
                },
                {
                    id: "d25b81",
                    text: "Which fungus and the product obtained from it are correctly matched?",
                    options: [
                        { key: "a", text: "Saccharomyces cerevisiae — the drug ergotamine" },
                        { key: "b", text: "Claviceps purpurea — penicillin, the first antibiotic" },
                        { key: "c", text: "Agaricus campestris — ethyl alcohol for the brewing trade" },
                        { key: "d", text: "Aspergillus niger — citric acid used in the food industry" }
                    ],
                    answer: "d",
                    explanation: "<em>Aspergillus niger</em> is used industrially for <strong>citric acid</strong> and gluconic acid. Penicillin came from <em>Penicillium notatum</em> (Fleming, 1928), the alkaloid ergotamine from the sclerotium of <em>Claviceps purpurea</em>, and ethyl alcohol from <em>Saccharomyces cerevisiae</em>. <em>Agaricus</em> is the cultivated edible mushroom; <em>Penicillium roqueforti</em> ripens cheese and <em>Ophiocordyceps sinensis</em> is the yarsagumba of the Nepal Himalaya."
                },
                {
                    id: "d25b82",
                    text: "The chief benefit that a pine tree derives from the ectomycorrhiza on its roots is:",
                    options: [
                        { key: "a", text: "Protection of the root from every kind of soil insect" },
                        { key: "b", text: "Better absorption of phosphorus and of other minerals" },
                        { key: "c", text: "A direct supply of the sugars made by the fungus" },
                        { key: "d", text: "Fixation of atmospheric nitrogen within the root cells" }
                    ],
                    answer: "b",
                    explanation: "In a <strong>mycorrhiza</strong> the fungal hyphae spread far into the soil and greatly enlarge the absorbing surface, taking up <strong>phosphate</strong> — the least mobile of the major nutrients — as well as water, nitrogen and zinc; the fungus receives sugars in return. In an <strong>ectomycorrhiza</strong> (pine, oak) the hyphae form a mantle and grow between the cortical cells; in an <strong>endomycorrhiza</strong> or VAM they penetrate the cells themselves."
                },
                {
                    id: "d25b83",
                    text: "Late blight of potato, powdery mildew of pea and black rust of wheat are caused respectively by members of:",
                    options: [
                        { key: "a", text: "Phycomycetes, Ascomycetes and Basidiomycetes" },
                        { key: "b", text: "Ascomycetes, Basidiomycetes and Phycomycetes" },
                        { key: "c", text: "Basidiomycetes, Phycomycetes and Ascomycetes" },
                        { key: "d", text: "Deuteromycetes, Phycomycetes and Ascomycetes" }
                    ],
                    answer: "a",
                    explanation: "<em>Phytophthora infestans</em>, the cause of the Irish famine of 1845, is a phycomycete with an aseptate mycelium and zoosporangia; <em>Erysiphe</em>, which whitens the leaf with its superficial mycelium and chains of conidia, is an ascomycete; and <em>Puccinia graminis</em>, with its five spore stages and its alternate host <em>Berberis</em>, is a basidiomycete. Early blight of potato (<em>Alternaria</em>) is a deuteromycete."
                },
                {
                    id: "d25b84",
                    text: "In the great majority of lichens the fungal partner belongs to the:",
                    options: [
                        { key: "a", text: "Ascomycetes, so that such lichens are called ascolichens" },
                        { key: "b", text: "Basidiomycetes, so that they are called basidiolichens" },
                        { key: "c", text: "Phycomycetes, so that they are called phycolichens" },
                        { key: "d", text: "Deuteromycetes, so that they are called deuterolichens" }
                    ],
                    answer: "a",
                    explanation: "More than 95 % of lichens are <strong>ascolichens</strong>, in which the mycobiont is an ascomycete producing apothecia; basidiolichens are rare tropical forms. The photosynthetic partner, the <strong>phycobiont</strong>, is usually the green alga <em>Trebouxia</em> or the filamentous <em>Trentepohlia</em>, and sometimes the cyanobacterium <em>Nostoc</em>, which fixes nitrogen as well as carbon."
                },
                {
                    id: "d25b85",
                    text: "Lichens growing on the bark of trees, on bare rocks and on the soil are described respectively as:",
                    options: [
                        { key: "a", text: "Saxicolous, terricolous and corticolous" },
                        { key: "b", text: "Corticolous, saxicolous and terricolous" },
                        { key: "c", text: "Terricolous, corticolous and saxicolous" },
                        { key: "d", text: "Epiphyllous, lignicolous and coprophilous" }
                    ],
                    answer: "b",
                    explanation: "Lichens are grouped by habitat into <strong>corticolous</strong> (on bark), <strong>saxicolous</strong> (on rock), <strong>terricolous</strong> (on soil) and lignicolous (on dead wood), and by growth form into <strong>crustose</strong> (a crust firmly fixed to the substratum), <strong>foliose</strong> (leaf-like, attached by rhizines) and <strong>fruticose</strong> (branched and shrubby, attached only at the base)."
                },
                {
                    id: "d25b86",
                    text: "Sexual reproduction in a lichen is carried out:",
                    options: [
                        { key: "a", text: "By the algal partner alone, which produces zoospores" },
                        { key: "b", text: "By the fusion of the two partners into a single zygote" },
                        { key: "c", text: "By the fungal partner alone, which produces ascospores" },
                        { key: "d", text: "By the whole thallus breaking up into many soredia" }
                    ],
                    answer: "c",
                    explanation: "The lichen as such has no sexual process: only the <strong>mycobiont</strong> reproduces sexually, forming apothecia or perithecia on the thallus and shedding ascospores. A germinating ascospore must <strong>meet a suitable alga</strong> before a new lichen can be built up, which is why vegetative methods — fragmentation, <strong>soredia</strong> and <strong>isidia</strong>, each carrying both partners — are far more effective."
                },
                {
                    id: "d25b87",
                    text: "Litmus, the familiar acid–base indicator of the laboratory, is obtained from the lichen:",
                    options: [
                        { key: "a", text: "Cladonia, the reindeer moss of the arctic tundra" },
                        { key: "b", text: "Cetraria, the Iceland moss used as a famine food" },
                        { key: "c", text: "Usnea, the beard lichen of temperate forests" },
                        { key: "d", text: "Roccella, a fruticose lichen of coastal rocks" }
                    ],
                    answer: "d",
                    explanation: "<strong>Litmus and orcein come from <em>Roccella</em></strong>. Other uses show how varied lichens are: <em>Cladonia rangiferina</em> is the winter food of the reindeer, <em>Cetraria islandica</em> is eaten and used medicinally, <em>Evernia</em> and <em>Ramalina</em> yield perfume bases, and usnic acid from <em>Usnea</em> is an antibiotic. Being very sensitive to $\\mathrm{SO_2}$, lichens are also used as indicators of air pollution."
                },
                {
                    id: "d25b88",
                    text: "The sex organs of an alga differ from those of a bryophyte in that they are:",
                    options: [
                        { key: "a", text: "Always many-celled and covered by a jacket of sterile cells" },
                        { key: "b", text: "Unicellular, without any sterile jacket round the gametes" },
                        { key: "c", text: "Formed only after an embryo has been established" },
                        { key: "d", text: "Borne on a separate free-living diploid sporophyte" }
                    ],
                    answer: "b",
                    explanation: "In algae the gametangium is a <strong>single cell</strong> whose whole content turns into gametes, and the zygote is set free without forming an embryo. In bryophytes and all higher plants the antheridium and archegonium are <strong>many-celled with a sterile jacket</strong>, and the zygote is retained and develops into an <strong>embryo</strong> — hence the name Embryophyta. <em>Chara</em>, with its jacketed sex organs, is the well-known algal exception."
                },
                {
                    id: "d25b89",
                    text: "Chlamydomonas, Volvox, Spirogyra and Ulva show, in that order, an algal plant body that is:",
                    options: [
                        { key: "a", text: "Filamentous, parenchymatous, colonial, unicellular and motile" },
                        { key: "b", text: "Colonial, unicellular and motile, parenchymatous, filamentous" },
                        { key: "c", text: "Unicellular and motile, colonial, filamentous, parenchymatous" },
                        { key: "d", text: "Parenchymatous, filamentous, unicellular and motile, colonial" }
                    ],
                    answer: "c",
                    explanation: "Algal thalli range from the single flagellate cell of <em>Chlamydomonas</em>, through the coenobium of <em>Volvox</em> (a hollow ball of thousands of cells) and the unbranched filament of <em>Spirogyra</em>, to the two-layered sheet of <em>Ulva</em>. Other grades are the palmelloid colony, the heterotrichous branched filament (<em>Ectocarpus</em>) and the siphonaceous coenocyte of <em>Vaucheria</em>."
                },
                {
                    id: "d25b90",
                    text: "The motile cells of the Chlorophyceae characteristically bear:",
                    options: [
                        { key: "a", text: "Two unequal flagella inserted on the side of the cell" },
                        { key: "b", text: "One flagellum inserted at the posterior end of the cell" },
                        { key: "c", text: "Two equal whiplash flagella inserted at the front end" },
                        { key: "d", text: "No flagellum at any stage of the whole life cycle" }
                    ],
                    answer: "c",
                    explanation: "Green algae typically have <strong>two (sometimes four) equal, smooth whiplash flagella at the anterior end</strong>. The brown algae have <strong>two unequal lateral</strong> flagella, the forward one tinsel and the backward one whiplash, and the red algae have <strong>no flagella at all</strong> at any stage. Flagellation is thus one of the standard characters used in classifying the algae."
                },
                {
                    id: "d25b91",
                    text: "The female sex organ of a red alga and the food it stores are respectively:",
                    options: [
                        { key: "a", text: "Oogonium and laminarin" },
                        { key: "b", text: "Carpogonium and floridean starch" },
                        { key: "c", text: "Archegonium and mannitol" },
                        { key: "d", text: "Ascogonium and cyanophycean starch" }
                    ],
                    answer: "b",
                    explanation: "The <strong>carpogonium</strong> is a flask-shaped cell drawn out into a long receptive hair, the <strong>trichogyne</strong>, to which a non-motile male gamete, the <strong>spermatium</strong>, is carried passively by water currents. The reserve is <strong>floridean starch</strong>, stored in the cytoplasm and not in the plastid; the pigments are chlorophyll a and d with r-phycoerythrin and r-phycocyanin."
                },
                {
                    id: "d25b92",
                    text: "The plant body of Laminaria is differentiated into holdfast, stipe and frond, and its wall contains, besides cellulose:",
                    options: [
                        { key: "a", text: "Algin, or alginic acid, in the outer mucilaginous layer" },
                        { key: "b", text: "Agar, which sets to a firm jelly when it is cooled" },
                        { key: "c", text: "Chitin, the same polymer that stiffens a fungal wall" },
                        { key: "d", text: "Silica, laid down as a shell of two overlapping halves" }
                    ],
                    answer: "a",
                    explanation: "The brown algae have a two-layered wall of cellulose within and slimy <strong>algin</strong> without; algin is extracted for use as a thickener in ice-cream, paints and pharmaceuticals. The body is the most complex in the algae, with holdfast, stipe and lamina and even sieve-like conducting cells. The pigments are chlorophyll a and c with <strong>fucoxanthin</strong>, and the reserves are <strong>laminarin and mannitol</strong>. Agar comes from red algae."
                },
                {
                    id: "d25b93",
                    text: "In a cell of Spirogyra the nucleus lies:",
                    options: [
                        { key: "a", text: "Pressed against the wall inside a fold of the chloroplast" },
                        { key: "b", text: "Embedded within one of the pyrenoids of the chloroplast" },
                        { key: "c", text: "Free and floating in the large central sap vacuole" },
                        { key: "d", text: "In the centre, hung by radiating cytoplasmic strands" }
                    ],
                    answer: "d",
                    explanation: "Each cylindrical cell has a large central vacuole, a lining layer of cytoplasm carrying one or more <strong>spiral ribbon-shaped chloroplasts</strong> with pyrenoids, and the <strong>nucleus suspended at the centre in a cytoplasmic bag held by strands</strong> that cross the vacuole. Outside the cellulose wall is a sheath of pectic <strong>mucilage</strong> which makes the filament slippery and gives the plant its names, water silk and pond scum."
                },
                {
                    id: "d25b94",
                    text: "Spirogyra differs from Ulothrix and from most other green algae in that it:",
                    options: [
                        { key: "a", text: "Never forms zoospores or any other asexual spore" },
                        { key: "b", text: "Has a parenchymatous thallus made of two cell layers" },
                        { key: "c", text: "Reproduces sexually by means of a motile male gamete" },
                        { key: "d", text: "Stores its reserve food as oil instead of as starch" }
                    ],
                    answer: "a",
                    explanation: "Reproduction in <em>Spirogyra</em> is only of two kinds: <strong>vegetative, by fragmentation</strong> of the filament (helped by the death of an intervening cell or by mechanical injury) and <strong>sexual, by conjugation</strong>. It produces <strong>no zoospores</strong> — indeed no flagellate cell appears anywhere in its life cycle — and this, with its unbranched filament and spiral chloroplast, makes it easy to identify."
                },
                {
                    id: "d25b95",
                    text: "The two gametes of Spirogyra are alike in size and shape, yet one moves across the tube while the other remains passive. Its sexual reproduction is therefore described as:",
                    options: [
                        { key: "a", text: "Oogamous, the female gamete being large and motionless" },
                        { key: "b", text: "Anisogamous in form, the two gametes being unequal" },
                        { key: "c", text: "Isogamous in form but anisogamous in behaviour" },
                        { key: "d", text: "Apogamous, since no true gametes are produced at all" }
                    ],
                    answer: "c",
                    explanation: "Both gametes are non-flagellate amoeboid masses of identical appearance, so structurally the process is <strong>isogamy</strong>; but one behaves as male by migrating through the conjugation tube while the other behaves as female by staying in its cell. This condition is called <strong>physiological anisogamy</strong>. The union of the two gives a thick-walled resting <strong>zygospore</strong>."
                },
                {
                    id: "d25b96",
                    text: "In the life cycle of Spirogyra the zygospore is the only diploid cell. Such a life cycle is called:",
                    options: [
                        { key: "a", text: "Haplontic, with meiosis taking place in the zygote" },
                        { key: "b", text: "Diplontic, with meiosis taking place in the gametes" },
                        { key: "c", text: "Haplo-diplontic, with meiosis producing spores" },
                        { key: "d", text: "Diplobiontic, with two free-living generations" }
                    ],
                    answer: "a",
                    explanation: "The filament, the gametes and the germling are all <strong>haploid</strong>; fertilisation makes the zygospore diploid, and it divides <strong>meiotically as soon as it germinates</strong>, so the diploid phase is a single cell. This is the <strong>haplontic</strong> cycle with <strong>zygotic meiosis</strong>, found also in <em>Chlamydomonas</em>, <em>Ulothrix</em> and <em>Mucor</em>. In it there is no sporophyte and hence no alternation of free-living generations."
                },
                {
                    id: "d25b97",
                    text: "Chlorella and Spirulina are cultured on a large scale chiefly for use as:",
                    options: [
                        { key: "a", text: "A source of agar for the culture media of the laboratory" },
                        { key: "b", text: "Single-cell protein, a food very rich in protein" },
                        { key: "c", text: "A source of iodine for the pharmaceutical industry" },
                        { key: "d", text: "Green manure to be ploughed into the paddy fields" }
                    ],
                    answer: "b",
                    explanation: "<em>Chlorella</em> and the filamentous cyanobacterium <em>Spirulina</em> contain up to 50–70 % protein of good amino-acid balance, multiply extremely fast in shallow tanks and are marketed as <strong>single-cell protein</strong> and food supplements; <em>Chlorella</em> has been tested for oxygen regeneration in spacecraft. Agar comes from <em>Gelidium</em> and <em>Gracilaria</em>, and iodine from the kelps."
                },
                {
                    id: "d25b98",
                    text: "Porphyra, Laminaria and Sargassum are eaten in many countries. As an article of diet these sea weeds are valued chiefly because they are rich in:",
                    options: [
                        { key: "a", text: "Fat and cholesterol of an easily digestible kind" },
                        { key: "b", text: "Starch and cellulose that supply abundant energy" },
                        { key: "c", text: "Minerals, iodine and vitamins, with useful protein" },
                        { key: "d", text: "Nucleic acids and antibiotics of a rare kind" }
                    ],
                    answer: "c",
                    explanation: "Sea weeds are low in energy but exceptionally rich in <strong>iodine and other minerals, vitamins A, B and C, and protein</strong>, and their polysaccharides act as dietary fibre. <em>Porphyra</em> is the nori of Japan, <em>Laminaria</em> the kombu; <em>Sargassum</em> and other kelps also serve as fodder and manure and yield algin and iodine."
                },
                {
                    id: "d25b99",
                    text: "Which statement about the distribution of the three main classes of algae is correct?",
                    options: [
                        { key: "a", text: "Most red algae are marine while most green algae are freshwater" },
                        { key: "b", text: "Most brown algae are freshwater and most red algae terrestrial" },
                        { key: "c", text: "All green algae are marine and all brown algae freshwater" },
                        { key: "d", text: "Red and brown algae are equally common in fresh water" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Chlorophyceae</strong> are predominantly freshwater, though <em>Ulva</em> and <em>Caulerpa</em> are marine; the <strong>Rhodophyceae</strong> and <strong>Phaeophyceae</strong> are almost wholly marine, freshwater members such as <em>Batrachospermum</em> among the reds being rare and brown algae in fresh water rarer still. Red algae also live deepest, because phycoerythrin absorbs the blue-green light that penetrates farthest."
                },
                {
                    id: "d25b100",
                    text: "Ectocarpus and Laminaria both show an alternation of generations, but they differ in that in Ectocarpus the two generations are:",
                    options: [
                        { key: "a", text: "Alike in size and form, the alternation being isomorphic" },
                        { key: "b", text: "Unlike, the gametophyte being much the larger of the two" },
                        { key: "c", text: "Both diploid, meiosis occurring during gamete formation" },
                        { key: "d", text: "Both borne together on one and the same individual plant" }
                    ],
                    answer: "a",
                    explanation: "In <em>Ectocarpus</em> and in <em>Ulva</em> the haploid gametophyte and the diploid sporophyte look exactly alike and can be told apart only by their reproductive organs — <strong>isomorphic</strong> alternation. In <em>Laminaria</em> and <em>Fucus</em>' relatives the alternation is <strong>heteromorphic</strong>: the large leathery plant is the sporophyte, and the gametophyte is a microscopic filament. Meiosis in such cycles is <strong>sporic</strong>, occurring in the unilocular sporangia."
                }
            ]
        }
    ]
};

/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)",
   Unit/Topic-wise Content of Botany. */
const DAY25_SYLLABUS = [
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "1. Basic Components of Life", weight: 2, subs: [
            { name: "Carbohydrates: Structure, Types and Biological Role", ids: ["d25b1", "d25b2", "d25b3", "d25b4", "d25b5", "d25b6", "d25b7", "d25b8", "d25b9", "d25b10"] },
            { name: "Lipids: Structure, Types and Biological Role", ids: ["d25b11", "d25b12", "d25b13", "d25b14", "d25b15", "d25b16"] },
            { name: "Minerals and Their Biological Role", ids: ["d25b17", "d25b18", "d25b19", "d25b20"] },
            { name: "Proteins: Structure, Types and Biological Role", ids: ["d25b21", "d25b22", "d25b23", "d25b24", "d25b25", "d25b26", "d25b27", "d25b28", "d25b29", "d25b30"] },
            { name: "Enzymes", ids: ["d25b31", "d25b32", "d25b33", "d25b34", "d25b35", "d25b36", "d25b37", "d25b38", "d25b39", "d25b40"] }
        ] },
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Introduction: 2-Kingdom, Hierarchy & Nomenclature, 5-Kingdom, 3-Domain", ids: ["d25b41", "d25b42", "d25b43", "d25b44", "d25b45", "d25b46", "d25b47", "d25b48", "d25b49", "d25b50"] },
            { name: "Monera: Bacteria and Cyanobacteria", ids: ["d25b51", "d25b52", "d25b53", "d25b54", "d25b55", "d25b56", "d25b57", "d25b58", "d25b59", "d25b60", "d25b61", "d25b62"] },
            { name: "Virus", ids: ["d25b63", "d25b64", "d25b65", "d25b66", "d25b67", "d25b68", "d25b69", "d25b70"] },
            { name: "Fungi", ids: ["d25b71", "d25b72", "d25b73", "d25b74", "d25b75", "d25b76", "d25b77", "d25b78", "d25b79", "d25b80", "d25b81", "d25b82", "d25b83"] },
            { name: "Lichens", ids: ["d25b84", "d25b85", "d25b86", "d25b87"] },
            { name: "Algae", ids: ["d25b88", "d25b89", "d25b90", "d25b91", "d25b92", "d25b93", "d25b94", "d25b95", "d25b96", "d25b97", "d25b98", "d25b99", "d25b100"] }
        ] }
    ] }
];
DAY25.syllabus = DAY25_SYLLABUS;
