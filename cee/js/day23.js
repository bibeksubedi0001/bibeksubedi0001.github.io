/* ============================================================
   DAY 23 — HUMAN BIOLOGY AND PHYSIOLOGY (FULL UNIT)
   111 questions · 100 minutes · 0.25 negative marking

   Section split (all Zoology, official CEE unit 5):
     Q1–Q28     Digestion & Respiration        (d23z1   … d23z28)
     Q29–Q58    Circulation & Excretion        (d23z29  … d23z58)
     Q59–Q85    Nervous System & Sense Organs  (d23z59  … d23z85)
     Q86–Q111   Endocrinology & Reproduction   (d23z86  … d23z111)

   Scope follows the official MEC "Syllabus for Bachelor Level
   Common Entrance Examination (2020, revised 2026)", Zoology
   unit 5 "Human Biology and Physiology".

   This is the companion set to Day 22: every question here is
   new, so the two days together cover the unit twice over
   without repeating a single item.
   ============================================================ */
const DAY23 = {
    day: 23,
    title: "Day 23",
    subtitle: "Human Biology & Physiology · Full Unit · Hard",
    durationMinutes: 100,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "digres23",
            name: "Digestion & Respiration",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q1–28 · alimentary canal, digestive glands and physiology of digestion; respiratory organs, gas transport, regulation of breathing and respiratory disorders.",
            questions: [
                {
                    id: "d23z1",
                    text: "Salivary amylase begins starch digestion in the mouth but stops working soon after the bolus reaches the stomach. The reason is that:",
                    options: [
                        { key: "a", text: "Gastric mucus coats the bolus and keeps the enzyme out" },
                        { key: "b", text: "Pepsin digests the starch first and leaves nothing for it" },
                        { key: "c", text: "Amylase needs bile salts, which are absent from the stomach" },
                        { key: "d", text: "The strongly acid pH of the stomach denatures the enzyme" }
                    ],
                    answer: "d",
                    explanation: "Ptyalin works best at the slightly acidic pH of about 6.8 of saliva and converts roughly 30 % of the starch to maltose. Once mixed with gastric juice at <strong>pH 1.8–2.0</strong> the enzyme is irreversibly denatured, so starch digestion halts until the chyme meets pancreatic amylase in the duodenum. Saliva also contains lysozyme, an antibacterial enzyme."
                },
                {
                    id: "d23z2",
                    text: "Of the three pairs of salivary glands, the pair that lies just in front of the ear, is purely serous and is the one attacked in mumps is the:",
                    options: [
                        { key: "a", text: "Parotid pair, opening opposite the upper molars" },
                        { key: "b", text: "Submandibular pair, the largest contributor of saliva" },
                        { key: "c", text: "Sublingual pair, the smallest of the three pairs" },
                        { key: "d", text: "Buccal pair, scattered in the lining of the cheek" }
                    ],
                    answer: "a",
                    explanation: "The <strong>parotid</strong> glands are the largest in size, lie below and in front of the ear and pour a watery, enzyme-rich (serous) secretion through Stensen's duct opposite the second upper molar; they are the seat of mumps. The <strong>submandibular</strong> glands, though smaller, actually contribute the greatest <em>volume</em> of saliva, and the sublingual pair the least."
                },
                {
                    id: "d23z3",
                    text: "During swallowing, food is prevented from entering the trachea because:",
                    options: [
                        { key: "a", text: "The soft palate closes the opening of the larynx" },
                        { key: "b", text: "The tracheal cartilage rings collapse for a moment" },
                        { key: "c", text: "The vocal cords vibrate and blow the food backwards" },
                        { key: "d", text: "The epiglottis covers the glottis as the larynx rises" }
                    ],
                    answer: "d",
                    explanation: "Deglutition is a reflex act with a voluntary beginning. As the bolus is pushed back, the larynx is drawn upwards and forwards and the leaf-like <strong>epiglottis</strong> tilts over the <strong>glottis</strong>, sealing the airway, while the <em>soft palate</em> rises to close off the nasal chambers. Breathing is briefly inhibited. The bolus then travels down the oesophagus by peristalsis, not by gravity."
                },
                {
                    id: "d23z4",
                    text: "Which statement about hydrochloric acid of the gastric juice is <em>incorrect</em>?",
                    options: [
                        { key: "a", text: "It kills most of the bacteria swallowed with the food" },
                        { key: "b", text: "It converts pepsinogen into the active enzyme pepsin" },
                        { key: "c", text: "It hydrolyses proteins directly into their amino acids" },
                        { key: "d", text: "It reduces ferric iron to the ferrous form for absorption" }
                    ],
                    answer: "c",
                    explanation: "HCl provides the acid medium (pH ~1.8) that <strong>activates pepsinogen</strong>, sterilises the food, softens the fibrous connective tissue and converts $\\mathrm{Fe^{3+}}$ to the absorbable $\\mathrm{Fe^{2+}}$; it also aids calcium absorption. It cannot itself hydrolyse peptide bonds — that is the work of <strong>pepsin</strong>, which breaks proteins only as far as proteoses and peptones."
                },
                {
                    id: "d23z5",
                    text: "The gastric mucosa is not digested by its own pepsin and acid. The main safeguard is:",
                    options: [
                        { key: "a", text: "The very short time for which the food stays in the stomach" },
                        { key: "b", text: "The thick alkaline mucus barrier over the epithelium" },
                        { key: "c", text: "The absence of any protein in the wall of the stomach" },
                        { key: "d", text: "The neutralising bicarbonate poured in by the pancreas" }
                    ],
                    answer: "b",
                    explanation: "Mucous neck cells and surface cells secrete a viscid, <strong>bicarbonate-rich mucus</strong> that clings to the lining and keeps the epithelial surface near neutrality even while the lumen is at pH 2; rapid replacement of the epithelium every few days helps as well. Breakdown of this barrier — by <em>Helicobacter pylori</em>, alcohol or NSAIDs — produces a peptic ulcer."
                },
                {
                    id: "d23z6",
                    text: "Rennin is present in the gastric juice of an infant but not of an adult. Its function is to:",
                    options: [
                        { key: "a", text: "Split milk fat into fatty acids and glycerol" },
                        { key: "b", text: "Convert lactose of the milk into glucose and galactose" },
                        { key: "c", text: "Curdle the soluble caseinogen of milk into casein" },
                        { key: "d", text: "Neutralise the acid so that milk is not coagulated" }
                    ],
                    answer: "c",
                    explanation: "<strong>Rennin</strong> converts the soluble milk protein caseinogen into insoluble <strong>casein</strong>, which is precipitated with calcium as a curd. The curd is held back in the stomach and so is exposed to pepsin for much longer than liquid milk would be. Note that rennin should not be confused with <em>renin</em>, the kidney enzyme of the angiotensin pathway."
                },
                {
                    id: "d23z7",
                    text: "Pancreatic juice is often called the 'complete digestive juice' because it alone contains enzymes acting on:",
                    options: [
                        { key: "a", text: "Proteins and fats only, carbohydrates being spared" },
                        { key: "b", text: "Carbohydrates, proteins, fats and nucleic acids alike" },
                        { key: "c", text: "Carbohydrates and nucleic acids but not on proteins" },
                        { key: "d", text: "Fats only, because it is the sole source of any lipase" }
                    ],
                    answer: "b",
                    explanation: "Pancreatic juice carries <strong>amylase</strong> for starch, <strong>trypsinogen, chymotrypsinogen and procarboxypeptidase</strong> for proteins, <strong>lipase</strong> for fats and <strong>nucleases</strong> (DNase and RNase) for nucleic acids, in an alkaline bicarbonate medium. Its proteases are secreted as inactive zymogens so that the gland is not digested; premature activation causes acute pancreatitis."
                },
                {
                    id: "d23z8",
                    text: "The absorptive surface of the human small intestine is about 200 square metres although the tube is only some 6 metres long. This is achieved by:",
                    options: [
                        { key: "a", text: "Circular folds, villi and microvilli in three successive tiers" },
                        { key: "b", text: "A very large diameter combined with a thin muscular wall" },
                        { key: "c", text: "Deep crypts of Lieberk&uuml;hn opening on to a flat lining" },
                        { key: "d", text: "The mesentery, which spreads the coils widely in the abdomen" }
                    ],
                    answer: "a",
                    explanation: "Three levels of folding multiply the area roughly $3 \\times 10 \\times 20 = 600$ times: the <strong>plicae circulares</strong> of the mucosa, the finger-like <strong>villi</strong> each with a lacteal and a capillary net, and the <strong>microvilli</strong> forming the brush border of every enterocyte. Loss of villi, as in coeliac disease, therefore causes severe malabsorption."
                },
                {
                    id: "d23z9",
                    text: "Almost no digestion occurs in the large intestine, yet its removal causes serious trouble. Its normal roles are:",
                    options: [
                        { key: "a", text: "Secretion of most of the digestive enzymes of the gut" },
                        { key: "b", text: "Absorption of glucose and amino acids from the chyme" },
                        { key: "c", text: "Absorption of water and salts, and vitamin synthesis by microbes" },
                        { key: "d", text: "Emulsification of the residual fat before it is passed out" }
                    ],
                    answer: "c",
                    explanation: "The colon secretes only mucus, but it reclaims most of the remaining <strong>water and electrolytes</strong> — about 1.5 litres a day — and its resident bacterial flora synthesises <strong>vitamin K and several B vitamins</strong>, which are then absorbed. Failure of this absorption gives diarrhoea; excessive absorption from a slow-moving residue gives constipation."
                },
                {
                    id: "d23z10",
                    text: "Which of these substances is absorbed at the site named against it?",
                    options: [
                        { key: "a", text: "Bile salts — mainly reabsorbed in the terminal ileum" },
                        { key: "b", text: "Glucose — mainly absorbed through the gastric mucosa" },
                        { key: "c", text: "Amino acids — mainly absorbed from the large intestine" },
                        { key: "d", text: "Fatty acids — mainly absorbed in the buccal cavity" }
                    ],
                    answer: "a",
                    explanation: "Bile salts are conserved by the <strong>enterohepatic circulation</strong>: they are actively reabsorbed in the terminal ileum and returned to the liver, each molecule being reused several times in a single meal. Glucose, amino acids and the products of fat digestion are absorbed in the small intestine; only water, some salts, alcohol and a few drugs are taken up by the stomach."
                },
                {
                    id: "d23z11",
                    text: "The vermiform appendix of man is quoted as a classical vestigial organ because it:",
                    options: [
                        { key: "a", text: "Is much larger in an infant than in a full-grown adult" },
                        { key: "b", text: "Is a reduced remnant of the caecum, well developed in herbivores" },
                        { key: "c", text: "Regularly becomes inflamed and so has to be removed" },
                        { key: "d", text: "Contains lymphoid tissue and therefore has an immune role" }
                    ],
                    answer: "b",
                    explanation: "In herbivorous mammals the <strong>caecum</strong> is a large fermentation chamber where cellulose is digested by symbiotic bacteria. In man it is reduced to a small pouch ending in the narrow, functionless <strong>appendix</strong> — evidence of descent from a herbivorous ancestor. Its lymphoid tissue is real but incidental, and its inflammation is a nuisance, not a proof of vestigiality."
                },
                {
                    id: "d23z12",
                    text: "Once the stomach contents become strongly acid, gastrin secretion is switched off. This arrangement is an example of:",
                    options: [
                        { key: "a", text: "Positive feedback, since acid begets more acid" },
                        { key: "b", text: "A conditioned reflex established by repeated meals" },
                        { key: "c", text: "Feed-forward control by the cephalic phase of digestion" },
                        { key: "d", text: "Negative feedback, the product inhibiting its own stimulus" }
                    ],
                    answer: "d",
                    explanation: "Distension and peptides in the stomach make the pyloric G-cells release <strong>gastrin</strong>, which drives the parietal cells to secrete HCl. When the pH falls below about 2, gastrin release is directly inhibited — a classic <strong>negative feedback</strong> loop that prevents runaway acid secretion. The sight and smell of food acting through the vagus is the cephalic phase."
                },
                {
                    id: "d23z13",
                    text: "A patient's stools are clay-coloured, his urine is dark and his skin and sclera are yellow. The most likely lesion is:",
                    options: [
                        { key: "a", text: "Loss of pancreatic amylase, so starch is not digested" },
                        { key: "b", text: "Excess of intestinal flora synthesising too much vitamin K" },
                        { key: "c", text: "Failure of the gastric parietal cells to secrete any acid" },
                        { key: "d", text: "Obstruction of the bile duct, so bile cannot reach the gut" }
                    ],
                    answer: "d",
                    explanation: "Bile pigments give the stool its normal brown colour. If the duct is blocked by a stone or a tumour, bile cannot enter the intestine, the stool turns <strong>pale and clay-coloured</strong>, fat digestion suffers, and the pigment backs up into the blood — producing <strong>obstructive jaundice</strong> with yellow skin and eyes and dark urine loaded with bilirubin."
                },
                {
                    id: "d23z14",
                    text: "Kwashiorkor and marasmus are both forms of protein-energy malnutrition. They are distinguished by the fact that in kwashiorkor:",
                    options: [
                        { key: "a", text: "Both calories and protein are lacking, so the child is very thin" },
                        { key: "b", text: "Only the fat-soluble vitamins are deficient in the diet" },
                        { key: "c", text: "Protein is deficient though calories are adequate, and oedema appears" },
                        { key: "d", text: "The intake of protein is normal but the child cannot digest it" }
                    ],
                    answer: "c",
                    explanation: "In <strong>kwashiorkor</strong> the diet is starchy but protein-poor, typically after early weaning; plasma albumin falls, so fluid leaks into the tissues and the child shows <strong>oedema, a swollen belly and a fatty liver</strong> with thin, discoloured hair. <strong>Marasmus</strong> results from an all-round shortage of food, giving extreme wasting with no oedema."
                },
                {
                    id: "d23z15",
                    text: "The tracheal rings of cartilage are C-shaped and incomplete on the dorsal side. This arrangement is useful because it:",
                    options: [
                        { key: "a", text: "Allows the oesophagus behind to bulge as a bolus passes" },
                        { key: "b", text: "Lets the trachea collapse completely during expiration" },
                        { key: "c", text: "Permits gas exchange to occur through the bare dorsal wall" },
                        { key: "d", text: "Enables the trachea to bend sharply when the neck turns" }
                    ],
                    answer: "a",
                    explanation: "The 16–20 incomplete rings keep the windpipe permanently open so that it never collapses, while the soft, muscular gap at the back adjoins the <strong>oesophagus</strong> and yields as a bolus is swallowed. The lining is a ciliated, mucus-secreting epithelium whose upward beat carries trapped dust out of the airway — the mucociliary escalator, paralysed by tobacco smoke."
                },
                {
                    id: "d23z16",
                    text: "A stab wound lets air into the pleural cavity and the lung on that side collapses at once. This shows that the lung is normally kept expanded by:",
                    options: [
                        { key: "a", text: "The elastic fibres of the lung, which pull it outwards" },
                        { key: "b", text: "The surfactant, which sticks the alveoli to the chest wall" },
                        { key: "c", text: "The negative intrapleural pressure between the two pleurae" },
                        { key: "d", text: "The positive pressure of the air inside the alveolar sacs" }
                    ],
                    answer: "c",
                    explanation: "The two pleural layers are held together by a thin film of fluid, and the outward pull of the chest wall against the inward elastic recoil of the lung keeps the <strong>intrapleural pressure below atmospheric</strong> (about $-4$ mm Hg). Puncturing the cavity abolishes this suction, air rushes in and the lung recoils — a <strong>pneumothorax</strong>. The lung's own elasticity acts inwards, not outwards."
                },
                {
                    id: "d23z17",
                    text: "Air enters the lungs during inspiration because contraction of the diaphragm and the external intercostal muscles:",
                    options: [
                        { key: "a", text: "Increases thoracic volume, so alveolar pressure falls below atmospheric" },
                        { key: "b", text: "Decreases thoracic volume, so alveolar pressure rises above atmospheric" },
                        { key: "c", text: "Actively sucks the air by pulling on the tracheal cartilage" },
                        { key: "d", text: "Raises the temperature of the air already inside the alveoli" }
                    ],
                    answer: "a",
                    explanation: "The dome of the diaphragm flattens and the ribs and sternum swing upward and outward, so the thoracic cavity — and with it the lungs — enlarges. By <strong>Boyle's law</strong> the alveolar pressure falls about 1 mm Hg below atmospheric and air flows in down the gradient. Inspiration is thus an <em>active</em> process; only the ribs and diaphragm move, the lungs being entirely passive."
                },
                {
                    id: "d23z18",
                    text: "Quiet expiration requires no muscular effort at all. It occurs because:",
                    options: [
                        { key: "a", text: "The internal intercostals contract strongly at every breath" },
                        { key: "b", text: "The elastic tissue of the lung and thoracic wall recoils" },
                        { key: "c", text: "The abdominal muscles push the diaphragm upwards" },
                        { key: "d", text: "The atmospheric pressure falls between the two breaths" }
                    ],
                    answer: "b",
                    explanation: "When the inspiratory muscles relax, the stretched <strong>elastic tissue</strong> of the lungs and the raised rib cage return passively to their resting position, the thoracic volume decreases and alveolar pressure rises about 1 mm Hg above atmospheric, driving air out. The internal intercostals and abdominal muscles are recruited only for forced expiration."
                },
                {
                    id: "d23z19",
                    text: "The respiratory membrane across which gases diffuse is less than a micrometre thick. Counting from the air side, it consists of:",
                    options: [
                        { key: "a", text: "Capillary endothelium, its basement membrane and the alveolar epithelium" },
                        { key: "b", text: "Alveolar epithelium, the fused basement membranes and capillary endothelium" },
                        { key: "c", text: "Alveolar epithelium, a layer of smooth muscle and the capillary wall" },
                        { key: "d", text: "Two layers of pleura separated by a thin film of pleural fluid" }
                    ],
                    answer: "b",
                    explanation: "Going from alveolar air to blood one crosses the surfactant film, the thin squamous <strong>alveolar epithelium</strong>, the <strong>fused basement membranes</strong> and the <strong>capillary endothelium</strong>. Its thinness and the vast area (about 70–80 m² in 300 million alveoli) make diffusion very rapid; thickening it by oedema or fibrosis impairs exchange even when ventilation is normal."
                },
                {
                    id: "d23z20",
                    text: "Every 100 mL of oxygenated blood carries about 20 mL of oxygen, of which roughly 5 mL is handed over to the tissues at rest. Of the total carried:",
                    options: [
                        { key: "a", text: "About 97 per cent is bound to haemoglobin and 3 per cent dissolved" },
                        { key: "b", text: "About 70 per cent is carried as bicarbonate in the plasma" },
                        { key: "c", text: "About half is dissolved in plasma and half bound to haemoglobin" },
                        { key: "d", text: "About 25 per cent is bound to the plasma proteins as oxyglobulin" }
                    ],
                    answer: "a",
                    explanation: "Oxygen is poorly soluble, so only about <strong>3 %</strong> travels in physical solution; the rest is reversibly bound to the haem iron as <strong>oxyhaemoglobin</strong>, each molecule of Hb taking four $\\mathrm{O_2}$. This is why anaemia lowers oxygen delivery even when the lungs and the $p\\mathrm{O_2}$ are perfectly normal. Bicarbonate transport applies to carbon dioxide."
                },
                {
                    id: "d23z21",
                    text: "The oxygen-dissociation curve of haemoglobin is sigmoid rather than a straight line. The sigmoid shape arises because:",
                    options: [
                        { key: "a", text: "The four haem groups act independently of one another" },
                        { key: "b", text: "The plasma dissolves oxygen in proportion to the pressure" },
                        { key: "c", text: "Carbon dioxide competes with oxygen for the same site" },
                        { key: "d", text: "Binding of one oxygen makes the next bind more easily" }
                    ],
                    answer: "d",
                    explanation: "Haemoglobin shows <strong>cooperative binding</strong>: the attachment of the first $\\mathrm{O_2}$ alters the quaternary structure and raises the affinity of the remaining haem groups, and the reverse happens on unloading. The flat upper part of the curve means saturation stays above 90 % even if alveolar $p\\mathrm{O_2}$ falls somewhat, while the steep middle part allows large amounts to be released in the tissues."
                },
                {
                    id: "d23z22",
                    text: "Foetal haemoglobin can take oxygen from the mother's blood in the placenta because, compared with adult haemoglobin, HbF has:",
                    options: [
                        { key: "a", text: "A lower affinity for oxygen, its curve lying to the right" },
                        { key: "b", text: "The same affinity, the transfer depending only on blood flow" },
                        { key: "c", text: "No affinity for oxygen, taking it instead as bicarbonate" },
                        { key: "d", text: "A higher affinity for oxygen, its curve lying to the left" }
                    ],
                    answer: "d",
                    explanation: "HbF ($\\alpha_2\\gamma_2$) binds 2,3-BPG much less strongly than adult HbA ($\\alpha_2\\beta_2$), so at any given $p\\mathrm{O_2}$ it is <strong>more saturated</strong> and its curve is shifted <strong>left</strong>. Oxygen therefore passes down the affinity gradient from maternal to foetal blood across the placenta, where the $p\\mathrm{O_2}$ is low."
                },
                {
                    id: "d23z23",
                    text: "Carbonic anhydrase is present in high concentration inside the red cell but not in the plasma. Its role is to:",
                    options: [
                        { key: "a", text: "Split oxyhaemoglobin so that oxygen is released to the tissues" },
                        { key: "b", text: "Speed the reaction of $\\mathrm{CO_2}$ with water, both in tissues and lungs" },
                        { key: "c", text: "Pump chloride out of the red cell against its gradient" },
                        { key: "d", text: "Convert bicarbonate into carbonate for storage in the bone" }
                    ],
                    answer: "b",
                    explanation: "The uncatalysed hydration of $\\mathrm{CO_2}$ is far too slow for the second or so that blood spends in a capillary. <strong>Carbonic anhydrase</strong> accelerates $\\mathrm{CO_2 + H_2O \\rightleftharpoons H_2CO_3}$ several thousand-fold in <em>both</em> directions — forming bicarbonate in the tissues and releasing $\\mathrm{CO_2}$ again in the lungs. Its inhibitor acetazolamide is used in altitude sickness and glaucoma."
                },
                {
                    id: "d23z24",
                    text: "Over-inflation of the lungs reflexly cuts inspiration short and starts expiration. This protective reflex is:",
                    options: [
                        { key: "a", text: "The Hering–Breuer reflex, mediated by vagal stretch receptors" },
                        { key: "b", text: "The Bainbridge reflex, mediated by atrial stretch receptors" },
                        { key: "c", text: "The baroreceptor reflex, mediated by the carotid sinus" },
                        { key: "d", text: "The cough reflex, mediated by irritant receptors of the larynx" }
                    ],
                    answer: "a",
                    explanation: "Stretch receptors in the bronchi and bronchioles fire when the lungs are inflated beyond about 1.5 litres and their impulses travel up the <strong>vagus</strong> to inhibit the inspiratory centre. In an adult at rest the reflex is largely silent and comes into play only in deep breathing — it is a safety valve against over-distension rather than the normal rhythm generator."
                },
                {
                    id: "d23z25",
                    text: "A man who has lived for some months at 4000 m is found to have a higher red-cell count and a raised 2,3-BPG level. These changes:",
                    options: [
                        { key: "a", text: "Raise the affinity of haemoglobin so that more oxygen is loaded" },
                        { key: "b", text: "Lower the haematocrit and thin the blood for easier flow" },
                        { key: "c", text: "Reduce the ventilation so that carbon dioxide is conserved" },
                        { key: "d", text: "Increase oxygen carriage and its unloading in the tissues" }
                    ],
                    answer: "d",
                    explanation: "Chronic hypoxia stimulates renal <strong>erythropoietin</strong>, so more erythrocytes and more haemoglobin are made and the total oxygen capacity rises; the increased <strong>2,3-BPG</strong> shifts the dissociation curve slightly right so that the oxygen carried is given up more readily in the tissues. Immediate acclimatisation is by hyperventilation driven by the carotid bodies."
                },
                {
                    id: "d23z26",
                    text: "Workers in stone quarries and asbestos factories develop breathlessness after years of exposure. The pathological change is:",
                    options: [
                        { key: "a", text: "Spasm of the bronchiolar muscle set off by the dust particles" },
                        { key: "b", text: "Replacement of the alveolar air by an inflammatory exudate" },
                        { key: "c", text: "Fibrosis of the lung, so that it becomes stiff and hard to expand" },
                        { key: "d", text: "Loss of the surfactant film, so the alveoli collapse at each breath" }
                    ],
                    answer: "c",
                    explanation: "Fine silica or asbestos particles reaching the alveoli are engulfed by macrophages, which are killed and release factors that lay down collagen. The result is a <strong>restrictive</strong> disorder — silicosis or asbestosis — in which the lungs become stiff and the vital capacity falls, unlike the <em>obstructive</em> diseases (asthma, bronchitis, emphysema) in which airflow is the problem."
                },
                {
                    id: "d23z27",
                    text: "Of the four primary lung volumes, the one that cannot be measured with an ordinary spirometer is the:",
                    options: [
                        { key: "a", text: "Tidal volume, because it is far too small to record" },
                        { key: "b", text: "Inspiratory reserve volume, because it needs a forced effort" },
                        { key: "c", text: "Expiratory reserve volume, because it varies with posture" },
                        { key: "d", text: "Residual volume, because it can never be breathed out" }
                    ],
                    answer: "d",
                    explanation: "A spirometer records only the air that actually moves in and out. The <strong>residual volume</strong> (about 1100–1200 mL) stays in the lungs even after the most forcible expiration and must be estimated indirectly, by helium dilution or nitrogen wash-out. Consequently the capacities that include it — FRC and total lung capacity — also cannot be measured directly."
                },
                {
                    id: "d23z28",
                    text: "Two men have the same minute ventilation of 8000 mL. One breathes 800 mL sixteen times a minute, the other 400 mL twenty times a minute. With a dead space of 150 mL, their alveolar ventilations are:",
                    options: [
                        { key: "a", text: "10400 mL and 5000 mL, so deep breathing is better" },
                        { key: "b", text: "8000 mL and 8000 mL, so the pattern makes no difference" },
                        { key: "c", text: "5000 mL and 10400 mL, so shallow breathing is better" },
                        { key: "d", text: "2400 mL and 3000 mL, so both are seriously inadequate" }
                    ],
                    answer: "a",
                    explanation: "Alveolar ventilation $= (\\mathrm{TV} - \\mathrm{dead\\ space}) \\times$ rate. First man: $(800-150)\\times 16 = 650 \\times 16 = 10400$ mL. Second: $(400-150) \\times 20 = 250 \\times 20 = 5000$ mL. The dead space is 'paid for' at every breath, so at the same minute volume <strong>deep, slow breathing ventilates the alveoli far better</strong> than rapid, shallow breathing."
                }
            ]
        },
        {
            id: "circex23",
            name: "Circulation & Excretion",
            subject: "Zoology",
            accent: "amber",
            blurb: "Q29–58 · blood and lymph, heart, cardiac cycle and output, arterial and venous system, blood groups, pressure and cardiovascular disorders; excretory organs, urine formation and renal disorders.",
            questions: [
                {
                    id: "d23z29",
                    text: "Of the plasma proteins, the one chiefly responsible for holding water inside the capillary and the one essential for clotting are respectively:",
                    options: [
                        { key: "a", text: "Fibrinogen and albumin" },
                        { key: "b", text: "Albumin and fibrinogen" },
                        { key: "c", text: "Globulin and albumin" },
                        { key: "d", text: "Prothrombin and globulin" }
                    ],
                    answer: "b",
                    explanation: "<strong>Albumin</strong> is the most abundant plasma protein and, being smallest, contributes most of the colloid osmotic (oncotic) pressure that draws tissue fluid back into the capillary; its fall in liver disease or kwashiorkor causes oedema. <strong>Fibrinogen</strong> is converted to fibrin during clotting, and the <strong>globulins</strong> include the antibodies and many transport proteins."
                },
                {
                    id: "d23z30",
                    text: "The mammalian erythrocyte is biconcave and lacks a nucleus. The functional advantage of losing the nucleus is that it:",
                    options: [
                        { key: "a", text: "Allows the cell to divide rapidly in the blood stream" },
                        { key: "b", text: "Lets the cell respire aerobically and use less oxygen" },
                        { key: "c", text: "Frees space for haemoglobin and adds to flexibility" },
                        { key: "d", text: "Extends the life of the cell well beyond four months" }
                    ],
                    answer: "c",
                    explanation: "The enucleate, biconcave disc packs in the maximum haemoglobin, has a large surface-to-volume ratio for gas exchange and can fold to squeeze through capillaries narrower than itself. The price is a short life of about <strong>120 days</strong>, after which the cell is broken down in the spleen and liver. Camel and llama erythrocytes are exceptional in being oval and nucleated."
                },
                {
                    id: "d23z31",
                    text: "In a normal differential leucocyte count, the most numerous and the least numerous cells are respectively:",
                    options: [
                        { key: "a", text: "Lymphocytes and monocytes" },
                        { key: "b", text: "Monocytes and eosinophils" },
                        { key: "c", text: "Neutrophils and basophils" },
                        { key: "d", text: "Eosinophils and lymphocytes" }
                    ],
                    answer: "c",
                    explanation: "<strong>Neutrophils</strong> make up 60–65 % of the leucocytes and are the first phagocytes to reach a site of bacterial infection; <strong>basophils</strong> are the rarest at 0.5–1 % and release histamine and heparin. Lymphocytes (20–25 %) provide immunity, monocytes (6–8 %) are the largest and become macrophages, and eosinophils (2–3 %) rise in allergy and worm infestation."
                },
                {
                    id: "d23z32",
                    text: "In the clotting cascade, thrombin acts by converting:",
                    options: [
                        { key: "a", text: "Prothrombin into thromboplastin in the presence of vitamin K" },
                        { key: "b", text: "Soluble fibrinogen into an insoluble mesh of fibrin threads" },
                        { key: "c", text: "Fibrin into fibrinogen so that the clot may be dissolved" },
                        { key: "d", text: "Calcium ions into an active enzyme that traps the red cells" }
                    ],
                    answer: "b",
                    explanation: "Injured tissue and platelets release <strong>thromboplastin</strong>, which with $\\mathrm{Ca^{2+}}$ converts the plasma protein prothrombin into the enzyme <strong>thrombin</strong>; thrombin then polymerises <strong>fibrinogen into fibrin</strong>, whose threads entangle blood cells to form the clot. Vitamin K is needed by the liver to make prothrombin, and heparin is the natural anticoagulant."
                },
                {
                    id: "d23z33",
                    text: "Lymph differs from blood plasma chiefly in that lymph:",
                    options: [
                        { key: "a", text: "Contains red blood cells but no white blood cells at all" },
                        { key: "b", text: "Is rich in plasma proteins and travels in a closed circuit" },
                        { key: "c", text: "Lacks red cells and platelets and has less protein" },
                        { key: "d", text: "Carries oxygen to the tissues in place of the blood" }
                    ],
                    answer: "c",
                    explanation: "Lymph is tissue fluid that has entered the blind-ending lymph capillaries. It contains <strong>lymphocytes but no erythrocytes or platelets</strong> and rather less protein than plasma, since large molecules leave the capillary only slowly. It returns leaked protein and fluid to the subclavian veins, absorbs fat from the intestine through the lacteals and filters pathogens in the lymph nodes."
                },
                {
                    id: "d23z34",
                    text: "The chordae tendineae attached to the papillary muscles of the ventricles serve to:",
                    options: [
                        { key: "a", text: "Pull the cusps of the AV valves open at the start of filling" },
                        { key: "b", text: "Close the semilunar valves at the end of ventricular systole" },
                        { key: "c", text: "Conduct the impulse from the AV node to the ventricle wall" },
                        { key: "d", text: "Stop the AV valve cusps from turning back into the atria" }
                    ],
                    answer: "d",
                    explanation: "As the ventricle contracts, the papillary muscles shorten and the tendinous cords hold the free margins of the tricuspid and bicuspid cusps down, so that the rising pressure cannot evert them into the atria. Rupture or stretching of the cords causes valve <em>prolapse</em> and a regurgitant murmur. The semilunar valves have no cords — their pocket shape is self-sealing."
                },
                {
                    id: "d23z35",
                    text: "The wall of the left ventricle is about three times as thick as that of the right ventricle because the left ventricle:",
                    options: [
                        { key: "a", text: "Pumps a much greater volume of blood at each beat" },
                        { key: "b", text: "Has to overcome the high resistance of the systemic circuit" },
                        { key: "c", text: "Contracts for a longer time in every cardiac cycle" },
                        { key: "d", text: "Receives oxygenated blood, which is denser and heavier" }
                    ],
                    answer: "b",
                    explanation: "Both ventricles eject the <em>same</em> stroke volume, but the left must drive it through the whole body against a mean aortic pressure of about 95 mm Hg, while the right meets only the low resistance of the pulmonary circuit (mean about 15 mm Hg). Greater pressure work demands a thicker myocardium — the basis of the double circulation described by William Harvey."
                },
                {
                    id: "d23z36",
                    text: "Cardiac muscle behaves as a functional syncytium — a stimulus applied anywhere spreads to the whole chamber. This is possible because the cells are joined by:",
                    options: [
                        { key: "a", text: "Intercalated discs containing low-resistance gap junctions" },
                        { key: "b", text: "Tight junctions that seal the cells against ion leakage" },
                        { key: "c", text: "Synapses across which a transmitter has to be released" },
                        { key: "d", text: "Desmosomes alone, which give mechanical strength only" }
                    ],
                    answer: "a",
                    explanation: "The <strong>intercalated disc</strong> carries desmosomes for mechanical adhesion <em>and</em> <strong>gap junctions</strong> through which ions — and hence the action potential — pass directly from cell to cell. The heart therefore obeys the all-or-none law as a whole. A very long refractory period (about 0.3 s) also makes tetanic contraction impossible, which is essential for a pump."
                },
                {
                    id: "d23z37",
                    text: "The correct path of the impulse through the conducting system of the heart is:",
                    options: [
                        { key: "a", text: "AV node $\\rightarrow$ SA node $\\rightarrow$ Purkinje fibres $\\rightarrow$ bundle of His" },
                        { key: "b", text: "SA node $\\rightarrow$ Purkinje fibres $\\rightarrow$ AV node $\\rightarrow$ bundle of His" },
                        { key: "c", text: "Bundle of His $\\rightarrow$ SA node $\\rightarrow$ AV node $\\rightarrow$ Purkinje fibres" },
                        { key: "d", text: "SA node $\\rightarrow$ AV node $\\rightarrow$ bundle of His $\\rightarrow$ Purkinje fibres" }
                    ],
                    answer: "d",
                    explanation: "The impulse arises in the <strong>SA node</strong> in the right atrial wall, spreads over both atria, is delayed at the <strong>AV node</strong>, then races down the <strong>bundle of His</strong> and its two branches in the interventricular septum to the <strong>Purkinje fibres</strong> of the ventricular walls. Because the fibres reach the apex first, the ventricle empties from the bottom upwards."
                },
                {
                    id: "d23z38",
                    text: "Within physiological limits, the more the cardiac muscle is stretched during filling, the more forcefully it contracts. This statement is:",
                    options: [
                        { key: "a", text: "The all-or-none law, applied to the whole ventricle" },
                        { key: "b", text: "Bowditch's staircase phenomenon of the heart muscle" },
                        { key: "c", text: "The law of Laplace, relating tension to the radius" },
                        { key: "d", text: "Starling's law of the heart, matching output to venous return" }
                    ],
                    answer: "d",
                    explanation: "<strong>Starling's law</strong> ensures that whatever the veins deliver, the ventricle ejects: a larger end-diastolic volume stretches the fibres to a more favourable overlap of actin and myosin and the stroke volume rises. It is what keeps the outputs of the two sides of the heart equal, and it lets stroke volume increase during exercise without any nervous command."
                },
                {
                    id: "d23z39",
                    text: "Stimulation of the vagus nerve slows the heart. It does so by releasing acetylcholine, which:",
                    options: [
                        { key: "a", text: "Hyperpolarises the SA node so that it fires less often" },
                        { key: "b", text: "Increases the force of every ventricular contraction" },
                        { key: "c", text: "Blocks the bundle of His and stops ventricular beating" },
                        { key: "d", text: "Acts on the Purkinje fibres to speed their conduction" }
                    ],
                    answer: "a",
                    explanation: "Parasympathetic (vagal) fibres end on the nodal tissue; acetylcholine opens $\\mathrm{K^+}$ channels, so the pacemaker potential rises more slowly to threshold and the rate falls — <em>negative chronotropic</em> effect. Sympathetic fibres releasing noradrenaline do the opposite and also increase the force of contraction. Cutting both nerves leaves the intrinsic SA rate of about 100 per minute."
                },
                {
                    id: "d23z40",
                    text: "A sudden rise in arterial pressure is corrected within seconds by a reflex whose receptors lie in the:",
                    options: [
                        { key: "a", text: "Wall of the right atrium, sensing the venous return" },
                        { key: "b", text: "Carotid sinus and aortic arch, sensing wall stretch" },
                        { key: "c", text: "Juxtaglomerular apparatus of the kidney, sensing flow" },
                        { key: "d", text: "Hypothalamus, sensing the osmolarity of the plasma" }
                    ],
                    answer: "b",
                    explanation: "<strong>Baroreceptors</strong> in the carotid sinus and aortic arch are stretch receptors; a rise in pressure increases their firing, which inhibits the vasomotor and cardiac accelerator centres and excites the vagus. Heart rate, force and peripheral resistance all fall and the pressure returns to normal. The renal mechanism corrects pressure over hours and days, not seconds."
                },
                {
                    id: "d23z41",
                    text: "In the systemic circulation the sharpest fall of blood pressure occurs across the:",
                    options: [
                        { key: "a", text: "Aorta, because it is the first vessel to receive the blood" },
                        { key: "b", text: "Large veins, because their walls are thin and distensible" },
                        { key: "c", text: "Arterioles, because they offer the greatest resistance" },
                        { key: "d", text: "Capillaries, because they are the narrowest of all vessels" }
                    ],
                    answer: "c",
                    explanation: "Although an individual capillary is narrower, the <strong>arterioles</strong> have thick smooth-muscle walls and their combined resistance is the highest in the circuit — pressure falls from about 90 to 35 mm Hg across them. They are therefore called the <em>resistance vessels</em>, and altering their calibre is the main way of regulating both arterial pressure and the distribution of blood."
                },
                {
                    id: "d23z42",
                    text: "Fluid leaves the blood at the arterial end of a capillary and re-enters at the venous end. The reason is that along the capillary:",
                    options: [
                        { key: "a", text: "Hydrostatic pressure falls while colloid osmotic pressure stays high" },
                        { key: "b", text: "Colloid osmotic pressure falls while hydrostatic pressure stays high" },
                        { key: "c", text: "The capillary wall becomes progressively less permeable" },
                        { key: "d", text: "Active transport pumps the fluid back into the blood stream" }
                    ],
                    answer: "a",
                    explanation: "At the arterial end the capillary hydrostatic pressure (about 35 mm Hg) exceeds the plasma oncotic pressure (about 25 mm Hg), so fluid filters out; by the venous end the hydrostatic pressure has fallen to about 15 mm Hg while the oncotic pressure is unchanged, so fluid is drawn back. The small surplus left behind is drained away as <strong>lymph</strong>."
                },
                {
                    id: "d23z43",
                    text: "In the foetus, most of the blood entering the right atrium passes straight into the left atrium instead of going to the lungs. The structure that allows this is the:",
                    options: [
                        { key: "a", text: "Ductus arteriosus, joining the pulmonary artery to the aorta" },
                        { key: "b", text: "Ductus venosus, bypassing the liver sinusoids" },
                        { key: "c", text: "Foramen ovale, an opening in the interatrial septum" },
                        { key: "d", text: "Coronary sinus, draining the wall of the heart itself" }
                    ],
                    answer: "c",
                    explanation: "The unexpanded foetal lungs need little blood, so two shunts divert it: the <strong>foramen ovale</strong> between the atria and the <strong>ductus arteriosus</strong> from the pulmonary artery to the aorta. Both close soon after birth when the lungs expand and left atrial pressure rises; the foramen leaves the fossa ovalis and the ductus the ligamentum arteriosum."
                },
                {
                    id: "d23z44",
                    text: "In an emergency, group O Rh-negative blood may be given to a patient of any group because such red cells:",
                    options: [
                        { key: "a", text: "Carry both A and B antigens, which neutralise all antibodies" },
                        { key: "b", text: "Carry neither A nor B nor D antigen, so they are not agglutinated" },
                        { key: "c", text: "Contain no antibodies, so the recipient's cells are safe" },
                        { key: "d", text: "Are quickly destroyed before any reaction can develop" }
                    ],
                    answer: "b",
                    explanation: "Agglutination occurs when the <em>recipient's</em> antibodies meet the corresponding antigen on the <em>donor's</em> cells. Group <strong>O Rh-negative</strong> cells carry no A, B or D antigen, so no recipient antibody can act on them — hence 'universal donor'. The donor's own anti-A and anti-B are diluted in the recipient's plasma, which is why packed cells rather than whole blood are preferred."
                },
                {
                    id: "d23z45",
                    text: "The essential difference between a myocardial infarction and a cardiac arrest is that in cardiac arrest:",
                    options: [
                        { key: "a", text: "A coronary artery is blocked but the heart goes on beating" },
                        { key: "b", text: "The heart valves leak, so blood flows back into the atria" },
                        { key: "c", text: "The heart stops pumping altogether and circulation ceases" },
                        { key: "d", text: "The arterial wall thickens slowly over many years" }
                    ],
                    answer: "c",
                    explanation: "A <strong>myocardial infarction</strong> is death of a patch of heart muscle when a coronary artery is occluded — the heart usually keeps beating. A <strong>cardiac arrest</strong> is the abrupt failure of the heart to pump at all, so the pulse and consciousness are lost within seconds and CPR or defibrillation is needed. Atherosclerosis is the slow thickening of the arterial wall that underlies both."
                },
                {
                    id: "d23z46",
                    text: "Man is described as ureotelic. The advantage of excreting urea rather than ammonia is that urea:",
                    options: [
                        { key: "a", text: "Is much less toxic, so far less water is needed to void it" },
                        { key: "b", text: "Is completely insoluble and can be passed out as a paste" },
                        { key: "c", text: "Contains more nitrogen per molecule than ammonia does" },
                        { key: "d", text: "Can diffuse freely across the gills into the surrounding water" }
                    ],
                    answer: "a",
                    explanation: "Ammonia is extremely soluble but so toxic that about 300–500 mL of water is needed to excrete one gram of nitrogen, which suits only aquatic animals. <strong>Urea</strong>, made in the liver by the ornithine cycle, is roughly 100 000 times less toxic and needs about 50 mL — a compromise for land life. Birds and reptiles go further and excrete almost insoluble <strong>uric acid</strong> as a paste."
                },
                {
                    id: "d23z47",
                    text: "A longitudinal section of a human kidney shows conical striated masses whose apices project into the pelvis. These are the:",
                    options: [
                        { key: "a", text: "Columns of Bertini, extensions of cortex between the pyramids" },
                        { key: "b", text: "Malpighian corpuscles, each with a glomerulus inside" },
                        { key: "c", text: "Renal pyramids of the medulla, opening at the papillae" },
                        { key: "d", text: "Major calyces, which unite to form the ureter" }
                    ],
                    answer: "c",
                    explanation: "The medulla is divided into 8–18 <strong>renal pyramids</strong>, whose striations are the loops of Henle and collecting ducts running in parallel; each apex or <em>papilla</em> discharges urine into a minor calyx. Cortical tissue dipping between adjacent pyramids forms the <strong>columns of Bertini</strong>, and the calyces open into the funnel-shaped pelvis that becomes the ureter."
                },
                {
                    id: "d23z48",
                    text: "The glomerular capillaries are unique in being fed and drained by arterioles. Because the afferent arteriole is wider than the efferent:",
                    options: [
                        { key: "a", text: "Blood flows through the glomerulus unusually slowly" },
                        { key: "b", text: "The blood leaving the glomerulus is completely deoxygenated" },
                        { key: "c", text: "The plasma proteins are able to pass out into the capsule" },
                        { key: "d", text: "A high capillary pressure is maintained for filtration" }
                    ],
                    answer: "d",
                    explanation: "With a wide inlet and a narrow outlet, blood dams up in the tuft and the hydrostatic pressure stays around 55 mm Hg — several times that of an ordinary capillary — which is what drives ultrafiltration. Constricting the efferent arteriole raises it further; constricting the afferent lowers it. The glomerulus is a capillary bed devoted to filtration rather than to exchange."
                },
                {
                    id: "d23z49",
                    text: "Plasma proteins are absent from the glomerular filtrate although water and glucose pass freely. They are held back because the filtration barrier:",
                    options: [
                        { key: "a", text: "Is a solid sheet through which only gases can diffuse" },
                        { key: "b", text: "Actively pumps every protein molecule back into the blood" },
                        { key: "c", text: "Has slits too small for them and is negatively charged" },
                        { key: "d", text: "Digests them with proteases before they reach the capsule" }
                    ],
                    answer: "c",
                    explanation: "The three layers — fenestrated endothelium, basement membrane and the <strong>filtration slits between the podocyte pedicels</strong> — act both as a size sieve (cut-off about 70 kDa) and as a <strong>charge barrier</strong>, since the glycoproteins of the basement membrane are negatively charged and repel the negatively charged albumin. Damage to it in nephritis lets protein escape — proteinuria."
                },
                {
                    id: "d23z50",
                    text: "The vasa recta and the peritubular capillaries differ in that the vasa recta:",
                    options: [
                        { key: "a", text: "Surround the convoluted tubules in the cortex only" },
                        { key: "b", text: "Are the only vessels that supply the glomerular tuft" },
                        { key: "c", text: "Carry lymph rather than blood back to the renal vein" },
                        { key: "d", text: "Run as hairpin loops beside the loop of Henle in the medulla" }
                    ],
                    answer: "d",
                    explanation: "Both arise from the efferent arteriole, but the <strong>peritubular capillaries</strong> form a net round the convoluted tubules of the cortex, while the <strong>vasa recta</strong> plunge into the medulla as U-shaped loops parallel to the loop of Henle. Their counter-current arrangement lets them remove the reabsorbed water without washing away the medullary solute gradient."
                },
                {
                    id: "d23z51",
                    text: "The distal convoluted tubule and collecting duct help to keep the blood pH constant by:",
                    options: [
                        { key: "a", text: "Secreting $\\mathrm{H^+}$ and $\\mathrm{NH_3}$ and reabsorbing bicarbonate" },
                        { key: "b", text: "Reabsorbing $\\mathrm{H^+}$ and secreting bicarbonate into the blood" },
                        { key: "c", text: "Filtering all the acid out at the glomerulus in one step" },
                        { key: "d", text: "Converting urea into ammonia inside the tubular lumen" }
                    ],
                    answer: "a",
                    explanation: "Besides its conditional reabsorption of water and $\\mathrm{Na^+}$, the DCT and collecting duct <strong>secrete $\\mathrm{H^+}$, $\\mathrm{K^+}$ and ammonia</strong> into the filtrate and return <strong>bicarbonate</strong> to the blood. The urine may thus be made as acid as pH 4.5, and the kidney — working over hours — is the body's most powerful, if slowest, regulator of acid–base balance."
                },
                {
                    id: "d23z52",
                    text: "The collecting duct contributes to the medullary osmotic gradient by allowing a small amount of one solute to diffuse into the interstitium. That solute is:",
                    options: [
                        { key: "a", text: "Glucose, which is never reabsorbed in this segment" },
                        { key: "b", text: "Urea, which is recycled back into the loop of Henle" },
                        { key: "c", text: "Potassium, which is secreted under aldosterone" },
                        { key: "d", text: "Bicarbonate, which is generated by carbonic anhydrase" }
                    ],
                    answer: "b",
                    explanation: "The inner medullary collecting duct is permeable to <strong>urea</strong>, which passes out into the interstitium and contributes up to half of the 1200 mOsm gradient there; some re-enters the thin loop of Henle, so it is continually recycled. This lets the kidney concentrate the urine without spending extra energy, and explains why a low-protein diet impairs concentrating ability."
                },
                {
                    id: "d23z53",
                    text: "The yellow colour of normal urine is due to:",
                    options: [
                        { key: "a", text: "Urochrome, a pigment formed from the breakdown of haemoglobin" },
                        { key: "b", text: "Urea, which is yellow in a concentrated aqueous solution" },
                        { key: "c", text: "Bilirubin, which is always present in health in small amounts" },
                        { key: "d", text: "Creatinine, the waste product of muscle phosphocreatine" }
                    ],
                    answer: "a",
                    explanation: "<strong>Urochrome</strong> is derived from the haem of worn-out red cells; the paler the urine, the more dilute it is. Normal urine of about 1–1.5 litres a day is faintly acidic and contains roughly 2 % urea together with creatinine, uric acid, ions and traces of ammonia — but no glucose, protein, ketone bodies or blood. Bilirubin appears only in jaundice."
                },
                {
                    id: "d23z54",
                    text: "A man's plasma glucose rises to 400 mg per 100 mL while his GFR remains 125 mL per minute. The amount of glucose filtered each minute is:",
                    options: [
                        { key: "a", text: "125 mg, which the tubule easily reabsorbs" },
                        { key: "b", text: "320 mg, which is just below the transport maximum" },
                        { key: "c", text: "4000 mg, all of which appears unchanged in the urine" },
                        { key: "d", text: "500 mg, which exceeds the tubular transport maximum" }
                    ],
                    answer: "d",
                    explanation: "Filtered load $=$ plasma concentration $\\times$ GFR $= 4\\ \\mathrm{mg\\,mL^{-1}} \\times 125\\ \\mathrm{mL\\,min^{-1}} = \\mathbf{500\\ mg\\,min^{-1}}$. The tubular transport maximum for glucose is about $375\\ \\mathrm{mg\\,min^{-1}}$, so roughly 125 mg a minute escapes reabsorption and is excreted, dragging water with it — the osmotic diuresis of untreated diabetes mellitus."
                },
                {
                    id: "d23z55",
                    text: "The most concentrated urine a healthy human kidney can produce is about 1200 mOsm per litre, four times the osmolarity of plasma. This is possible only because:",
                    options: [
                        { key: "a", text: "The glomerular filtrate is already hypertonic to the plasma" },
                        { key: "b", text: "The DCT actively pumps water out against the gradient" },
                        { key: "c", text: "The medullary interstitium is made hyperosmotic by the loops" },
                        { key: "d", text: "The bladder concentrates the urine while storing it" }
                    ],
                    answer: "c",
                    explanation: "Water is never pumped; it can only follow an osmotic gradient. The counter-current multiplier of the loops of Henle, helped by urea recycling, builds an interstitial osmolarity rising from 300 mOsm in the cortex to about <strong>1200 mOsm at the papilla</strong>. Under ADH the collecting duct becomes permeable and water leaves passively until the urine equilibrates with that value."
                },
                {
                    id: "d23z56",
                    text: "Among the common disorders of the urinary system, the one that is correctly described is:",
                    options: [
                        { key: "a", text: "Uraemia — a fall in blood urea because the kidney over-excretes it" },
                        { key: "b", text: "Renal calculi — crystallised stones, commonly of calcium oxalate" },
                        { key: "c", text: "Glomerulonephritis — inflammation of the urinary bladder wall" },
                        { key: "d", text: "Diabetes insipidus — loss of glucose in the urine after meals" }
                    ],
                    answer: "b",
                    explanation: "<strong>Renal calculi</strong> are insoluble masses, usually of calcium oxalate, that form in the pelvis and cause severe colic if they lodge in the ureter. <strong>Uraemia</strong> is a <em>rise</em> of urea in the blood from renal failure; <strong>glomerulonephritis</strong> is inflammation of the glomeruli, often after a streptococcal throat infection; and diabetes insipidus is an ADH problem with no glycosuria at all."
                },
                {
                    id: "d23z57",
                    text: "Besides the kidneys, the skin, lungs and liver are described as accessory excretory organs. Correctly stated, the:",
                    options: [
                        { key: "a", text: "Lungs remove urea and the liver removes carbon dioxide" },
                        { key: "b", text: "Skin removes uric acid alone and the lungs remove ammonia" },
                        { key: "c", text: "Liver removes nitrogen as nitrate through the bile duct" },
                        { key: "d", text: "Lungs remove $\\mathrm{CO_2}$, the skin salts and urea, the liver bile pigments" }
                    ],
                    answer: "d",
                    explanation: "The <strong>lungs</strong> excrete large volumes of $\\mathrm{CO_2}$ and some water vapour; the <strong>sweat glands of the skin</strong> lose water, salts, a little urea and lactic acid — though their primary role is cooling; and the <strong>liver</strong> passes out bile pigments, cholesterol, drugs and excess vitamins in the bile. The sebaceous glands also eliminate sterols and waxes."
                },
                {
                    id: "d23z58",
                    text: "Micturition can be voluntarily postponed by an adult but not by an infant. The reason is that in the infant:",
                    options: [
                        { key: "a", text: "The bladder wall has no stretch receptors of any kind" },
                        { key: "b", text: "The cortical control over the external sphincter is immature" },
                        { key: "c", text: "The internal sphincter is made of skeletal muscle only" },
                        { key: "d", text: "The ureters open directly to the exterior without a bladder" }
                    ],
                    answer: "b",
                    explanation: "The reflex arc — stretch receptors, spinal centre, parasympathetic outflow contracting the detrusor and relaxing the smooth internal sphincter — is complete at birth, so an infant voids automatically. Control develops when the descending pathways from the cerebral cortex to the <strong>skeletal external sphincter</strong> mature, usually in the second or third year."
                }
            ]
        },
        {
            id: "neuro23",
            name: "Nervous System & Sense Organs",
            subject: "Zoology",
            accent: "blue",
            blurb: "Q59–85 · central, peripheral and autonomic nervous system, nerve impulse and synapse; structure and working of the eye and the ear.",
            questions: [
                {
                    id: "d23z59",
                    text: "In a typical multipolar neuron the action potential is generated not on the dendrites or the cell body but at the:",
                    options: [
                        { key: "a", text: "Axon hillock, where the threshold is lowest" },
                        { key: "b", text: "Synaptic knob, where the vesicles are stored" },
                        { key: "c", text: "First node of Ranvier beyond the cell body" },
                        { key: "d", text: "Nissl granules within the perikaryon itself" }
                    ],
                    answer: "a",
                    explanation: "The <strong>axon hillock</strong> (initial segment) has by far the highest density of voltage-gated $\\mathrm{Na^+}$ channels, so it has the lowest threshold and acts as the trigger zone where all the graded potentials arriving from the dendrites are summed. Nissl granules are rough endoplasmic reticulum concerned with protein synthesis; they are absent from the hillock and axon."
                },
                {
                    id: "d23z60",
                    text: "The sodium–potassium pump is described as electrogenic because it:",
                    options: [
                        { key: "a", text: "Uses the electrical gradient instead of ATP as its energy source" },
                        { key: "b", text: "Exchanges one sodium ion for one potassium ion each cycle" },
                        { key: "c", text: "Opens only when the membrane is depolarised beyond threshold" },
                        { key: "d", text: "Moves an unequal number of charges, adding to the negativity inside" }
                    ],
                    answer: "d",
                    explanation: "Each cycle, driven by one ATP, extrudes <strong>3 $\\mathrm{Na^+}$</strong> and takes in <strong>2 $\\mathrm{K^+}$</strong>, so one net positive charge leaves the cell. It thus contributes a few millivolts directly to the $-70$ mV resting potential, besides maintaining the concentration gradients on which the whole impulse depends. Its inhibition by ouabain abolishes excitability."
                },
                {
                    id: "d23z61",
                    text: "Several sub-threshold impulses arriving at different synapses on one neuron at the same instant can together fire it. This is called:",
                    options: [
                        { key: "a", text: "Temporal summation at a single synaptic knob" },
                        { key: "b", text: "Occlusion between two overlapping neuronal pools" },
                        { key: "c", text: "Spatial summation of the excitatory post-synaptic potentials" },
                        { key: "d", text: "Facilitation caused by prolonged action of cholinesterase" }
                    ],
                    answer: "c",
                    explanation: "A single EPSP is a graded local depolarisation too small to reach threshold. If many synapses <em>on different parts</em> of the neuron fire together their EPSPs add up — <strong>spatial summation</strong>; if one synapse fires repeatedly in quick succession the effect is <strong>temporal summation</strong>. Inhibitory synapses produce IPSPs, so the neuron acts as an algebraic integrator."
                },
                {
                    id: "d23z62",
                    text: "Which neurotransmitter is correctly matched with its role?",
                    options: [
                        { key: "a", text: "GABA — the chief excitatory transmitter of the brain" },
                        { key: "b", text: "Dopamine — deficient in the basal ganglia in Parkinson's disease" },
                        { key: "c", text: "Acetylcholine — the transmitter of all sympathetic post-ganglionic fibres" },
                        { key: "d", text: "Noradrenaline — the transmitter at every neuromuscular junction" }
                    ],
                    answer: "b",
                    explanation: "Degeneration of the dopamine-secreting neurons of the substantia nigra causes the tremor, rigidity and slowness of <strong>Parkinson's disease</strong>. <strong>GABA</strong> is the main <em>inhibitory</em> transmitter of the CNS; the post-ganglionic sympathetic fibres are adrenergic (with sweat glands as the exception); and every skeletal <strong>neuromuscular junction</strong> uses acetylcholine."
                },
                {
                    id: "d23z63",
                    text: "Organophosphate insecticides kill by inhibiting acetylcholinesterase. The immediate consequence at the neuromuscular junction is that:",
                    options: [
                        { key: "a", text: "No transmitter can be released, so the muscle is flaccid at once" },
                        { key: "b", text: "The receptor is blocked, exactly as it is by curare" },
                        { key: "c", text: "Acetylcholine persists, so the muscle is continuously stimulated" },
                        { key: "d", text: "The vesicles fuse without any calcium entering the knob" }
                    ],
                    answer: "c",
                    explanation: "Cholinesterase normally destroys acetylcholine within milliseconds, so each nerve impulse causes just one muscle twitch. If the enzyme is poisoned the transmitter accumulates, the end plate stays depolarised and the result is fasciculation followed by <strong>spastic paralysis</strong>, with copious secretions and pinpoint pupils. Curare acts differently — it competes for the receptor and causes flaccid paralysis."
                },
                {
                    id: "d23z64",
                    text: "The corpora quadrigemina of the midbrain are concerned with:",
                    options: [
                        { key: "a", text: "Reflex movements of the eyes, head and neck to sight and sound" },
                        { key: "b", text: "Maintenance of the posture and equilibrium of the body" },
                        { key: "c", text: "Relaying every sensory impulse on its way to the cortex" },
                        { key: "d", text: "Control of the heart rate, blood pressure and breathing" }
                    ],
                    answer: "a",
                    explanation: "The four lobes on the roof of the midbrain — the superior colliculi for <strong>visual reflexes</strong> and the inferior colliculi for <strong>auditory reflexes</strong> — turn the eyes and head towards a sudden light or sound and control the pupillary reflex. Equilibrium belongs to the cerebellum, sensory relay to the thalamus and the vital centres to the medulla."
                },
                {
                    id: "d23z65",
                    text: "A patient after a stroke understands everything said to him but cannot form words, although his tongue and larynx are not paralysed. The lesion is in the:",
                    options: [
                        { key: "a", text: "Occipital lobe, which processes the visual signals" },
                        { key: "b", text: "Motor speech area of the frontal lobe (Broca's area)" },
                        { key: "c", text: "Post-central gyrus of the parietal lobe, the sensory area" },
                        { key: "d", text: "Temporal lobe, which contains the primary auditory area" }
                    ],
                    answer: "b",
                    explanation: "<strong>Broca's area</strong> in the posterior part of the frontal lobe of the dominant hemisphere programmes the muscle sequences of speech; its destruction gives <em>motor (expressive) aphasia</em> — comprehension is intact but speech is not. Damage to Wernicke's area in the temporal lobe gives the opposite picture: fluent but meaningless speech with poor comprehension."
                },
                {
                    id: "d23z66",
                    text: "The hippocampus and the amygdala belong to a functional group of structures concerned with:",
                    options: [
                        { key: "a", text: "The fine coordination of voluntary movement and balance" },
                        { key: "b", text: "The conduction of impulses between the two hemispheres" },
                        { key: "c", text: "Emotion, motivation and the laying down of new memories" },
                        { key: "d", text: "The secretion of cerebrospinal fluid into the ventricles" }
                    ],
                    answer: "c",
                    explanation: "They form the core of the <strong>limbic system</strong>, which together with the hypothalamus governs emotional behaviour, fear and aggression, sexual and feeding drives, and the consolidation of new long-term <strong>memory</strong> — bilateral loss of the hippocampus leaves the patient unable to form new memories. The corpus callosum connects the hemispheres and the choroid plexus makes CSF."
                },
                {
                    id: "d23z67",
                    text: "A patient walks with a staggering gait, cannot touch his nose with his finger-tip and overshoots when reaching for objects, but his muscle power is normal. The damaged part is the:",
                    options: [
                        { key: "a", text: "Cerebellum, which smooths and coordinates movement" },
                        { key: "b", text: "Medulla oblongata, which houses the vital centres" },
                        { key: "c", text: "Hypothalamus, which controls hunger and temperature" },
                        { key: "d", text: "Pituitary gland, which secretes the growth hormone" }
                    ],
                    answer: "a",
                    explanation: "The <strong>cerebellum</strong> receives information from the muscles, joints and vestibular apparatus and continuously compares the intended movement with the actual one, correcting it. Its loss does not cause paralysis but <em>ataxia</em>: a drunken gait, past-pointing, intention tremor and loss of balance. It also has the largest number of neurons of any part of the brain."
                },
                {
                    id: "d23z68",
                    text: "Every sensory pathway is relayed in the thalamus before reaching the cortex, with a single exception. That exception is:",
                    options: [
                        { key: "a", text: "Vision, which goes straight to the occipital lobe" },
                        { key: "b", text: "Hearing, which goes straight to the temporal lobe" },
                        { key: "c", text: "Olfaction, which reaches the cortex directly" },
                        { key: "d", text: "Pain, which is felt at the level of the spinal cord itself" }
                    ],
                    answer: "c",
                    explanation: "The thalamus is the great sensory relay and a centre for the crude appreciation of pain, temperature and touch. <strong>Smell</strong> is the phylogenetically oldest sense and its pathway from the olfactory bulb runs directly to the olfactory cortex without a thalamic relay — one reason odours evoke memory and emotion so powerfully through the limbic connections."
                },
                {
                    id: "d23z69",
                    text: "The human spinal cord ends at the level of the first or second lumbar vertebra, but spinal nerves continue below it as the cauda equina. As a result:",
                    options: [
                        { key: "a", text: "There are only 12 pairs of spinal nerves in all" },
                        { key: "b", text: "A lumbar puncture below L2 does not damage the cord" },
                        { key: "c", text: "The lower limbs receive no motor supply from the cord" },
                        { key: "d", text: "The cord is longer than the vertebral column in the adult" }
                    ],
                    answer: "b",
                    explanation: "The vertebral column grows faster than the cord, so in the adult the cord ends as the conus medullaris around L1–L2 while its lumbar and sacral roots run downwards in the subarachnoid space as the <strong>cauda equina</strong>. A needle inserted between L3 and L4 therefore meets only floating nerve roots, which are pushed aside — the basis of the safety of lumbar puncture. There are <strong>31 pairs</strong> of spinal nerves."
                },
                {
                    id: "d23z70",
                    text: "The knee-jerk and the withdrawal of the hand from a hot object differ in that the knee-jerk is:",
                    options: [
                        { key: "a", text: "A monosynaptic reflex with no interneuron in its arc" },
                        { key: "b", text: "A conditioned reflex acquired by repeated experience" },
                        { key: "c", text: "Controlled entirely by the motor cortex of the brain" },
                        { key: "d", text: "Mediated by the autonomic rather than the somatic system" }
                    ],
                    answer: "a",
                    explanation: "Tapping the patellar tendon stretches the muscle spindle; its afferent fibre synapses <em>directly</em> on the motor neuron in the ventral horn, making the stretch reflex the only <strong>monosynaptic</strong> reflex in the body and hence very fast. The flexor withdrawal reflex is <strong>polysynaptic</strong>, involving one or more interneurons and several muscle groups on both sides."
                },
                {
                    id: "d23z71",
                    text: "Most visceral organs receive a dual autonomic supply. In the heart, the gut and the pupil, sympathetic stimulation respectively:",
                    options: [
                        { key: "a", text: "Slows it, increases motility and constricts the pupil" },
                        { key: "b", text: "Slows it, decreases motility and dilates the pupil" },
                        { key: "c", text: "Quickens it, increases motility and constricts the pupil" },
                        { key: "d", text: "Quickens it, decreases motility and dilates the pupil" }
                    ],
                    answer: "d",
                    explanation: "The sympathetic system prepares the body for exertion: it accelerates and strengthens the heart, <em>inhibits</em> gut motility and secretion, relaxes the bronchi and dilates the pupil by contracting the radial muscle of the iris. The parasympathetic does the reverse in each case, conserving and restoring energy — the two are antagonistic on nearly every organ they share."
                },
                {
                    id: "d23z72",
                    text: "Cerebrospinal fluid is secreted by the choroid plexuses and finally returns to the blood. Its total volume is small because it is:",
                    options: [
                        { key: "a", text: "Reabsorbed by the arachnoid villi into the venous sinuses" },
                        { key: "b", text: "Absorbed by the piamater directly into the brain tissue" },
                        { key: "c", text: "Drained into the lymphatic vessels of the neck" },
                        { key: "d", text: "Evaporated through the pores of the cribriform plate" }
                    ],
                    answer: "a",
                    explanation: "About 500 mL is formed a day, yet only 130–150 mL is present at a time, because the fluid is continually returned through the <strong>arachnoid villi (granulations)</strong> into the dural venous sinuses. Any block of the circulation — as at the narrow aqueduct — raises the pressure and, in an infant, enlarges the head: <em>hydrocephalus</em>."
                },
                {
                    id: "d23z73",
                    text: "The velocity of a nerve impulse in mammals ranges from about 1 to 120 metres per second. The fastest fibres are those that are:",
                    options: [
                        { key: "a", text: "Thin and unmyelinated, with the least electrical capacitance" },
                        { key: "b", text: "Thick and unmyelinated, as in the giant fibre of the squid" },
                        { key: "c", text: "Thin and myelinated, so that the impulse has less mass to move" },
                        { key: "d", text: "Thick and heavily myelinated, with widely spaced nodes" }
                    ],
                    answer: "d",
                    explanation: "Velocity rises with the <strong>diameter</strong> of the fibre (a wider axoplasm offers less longitudinal resistance) and with <strong>myelination</strong>, which forces the current to jump from node to node. The thick myelinated A-alpha fibres of the proprioceptive and motor pathways conduct at up to $120\\ \\mathrm{m\\,s^{-1}}$, whereas the thin unmyelinated C fibres of dull pain manage about $1\\ \\mathrm{m\\,s^{-1}}$."
                },
                {
                    id: "d23z74",
                    text: "Most of the bending of light rays entering the eye is done not by the lens but by the:",
                    options: [
                        { key: "a", text: "Vitreous humour, being the densest medium in the eye" },
                        { key: "b", text: "Iris, which changes the diameter of the pupil" },
                        { key: "c", text: "Cornea, at the air–tissue interface in front" },
                        { key: "d", text: "Retina, whose curved surface focuses the image" }
                    ],
                    answer: "c",
                    explanation: "About two-thirds of the eye's total refractive power lies at the <strong>cornea</strong>, because the difference in refractive index between air and corneal tissue is far greater than that between the aqueous humour and the lens. The lens supplies the remaining third, but it is the only <em>adjustable</em> element, which is why it alone changes shape during accommodation."
                },
                {
                    id: "d23z75",
                    text: "The cornea is one of the few tissues that can be grafted from one person to another without rejection. This is because it:",
                    options: [
                        { key: "a", text: "Is avascular and is nourished by the aqueous humour" },
                        { key: "b", text: "Carries no proteins of any kind on its cell surfaces" },
                        { key: "c", text: "Is replaced entirely every few days by new cells" },
                        { key: "d", text: "Is composed of dead cells, like the outer layer of skin" }
                    ],
                    answer: "a",
                    explanation: "Having no blood vessels, the cornea is beyond the reach of circulating lymphocytes, so it is an <strong>immunologically privileged</strong> site; it takes its oxygen from the air and its nutrients by diffusion from the aqueous humour and the tears. This is what makes corneal grafting from a donated eye so successful, and why a tight contact lens can starve it of oxygen."
                },
                {
                    id: "d23z76",
                    text: "In dim light the pupil widens. The muscle responsible and the nerve supply concerned are:",
                    options: [
                        { key: "a", text: "The circular muscle of the iris, supplied by the sympathetic" },
                        { key: "b", text: "The ciliary muscle, supplied by the oculomotor nerve" },
                        { key: "c", text: "The radial muscle of the iris, supplied by the sympathetic" },
                        { key: "d", text: "The levator palpebrae, supplied by the facial nerve" }
                    ],
                    answer: "c",
                    explanation: "The iris carries two sets of smooth muscle: <strong>radial (dilator) fibres</strong> under <em>sympathetic</em> control, which widen the pupil in darkness, fear or excitement, and <strong>circular (sphincter) fibres</strong> under <em>parasympathetic</em> control through the oculomotor nerve, which narrow it in bright light and on near vision. The ciliary muscle alters the lens, not the pupil."
                },
                {
                    id: "d23z77",
                    text: "The vertebrate retina is described as 'inverted' because light reaching a rod or cone must first pass through:",
                    options: [
                        { key: "a", text: "The choroid and its pigment layer" },
                        { key: "b", text: "The ganglion cell and bipolar cell layers" },
                        { key: "c", text: "The sclera and then the vitreous humour" },
                        { key: "d", text: "The tapetum lucidum lying in front of it" }
                    ],
                    answer: "b",
                    explanation: "The photoreceptors point <em>away</em> from the light, their outer segments buried against the pigment epithelium, so incoming rays traverse the transparent <strong>ganglion cell and bipolar cell layers</strong> first. The arrangement lets the pigment epithelium recycle the visual pigment and absorb stray light, and it is the reason the optic nerve must pierce the retina, creating a blind spot."
                },
                {
                    id: "d23z78",
                    text: "Red–green colour blindness is far commoner in men than in women because the gene concerned is:",
                    options: [
                        { key: "a", text: "Recessive and carried on the X chromosome" },
                        { key: "b", text: "Dominant and carried on the Y chromosome" },
                        { key: "c", text: "Recessive and carried on an autosome" },
                        { key: "d", text: "Present only in the mitochondrial DNA" }
                    ],
                    answer: "a",
                    explanation: "The genes for the red and the green cone pigments lie close together on the <strong>X chromosome</strong> and the defective alleles are recessive. A man ($\\mathrm{XY}$) has only one X, so a single defective allele shows; a woman needs two and is usually only a carrier. Hence about 8 % of men but well under 1 % of women are affected; the condition is tested with Ishihara charts."
                },
                {
                    id: "d23z79",
                    text: "An elderly man complains of a painless, gradual clouding of vision as though he were looking through frosted glass. The likely diagnosis and its treatment are:",
                    options: [
                        { key: "a", text: "Glaucoma, treated by drugs that increase aqueous production" },
                        { key: "b", text: "Cataract, treated by removing the lens and implanting one" },
                        { key: "c", text: "Night blindness, treated with large doses of vitamin A" },
                        { key: "d", text: "Astigmatism, treated with a suitably ground cylindrical lens" }
                    ],
                    answer: "b",
                    explanation: "In a <strong>cataract</strong> the crystallin proteins of the lens aggregate and the lens becomes opaque, scattering light; the loss is painless and progressive. The standard cure is to remove the lens and insert an artificial <strong>intra-ocular lens</strong>. Glaucoma, in contrast, is a pressure problem treated by <em>reducing</em> aqueous formation or improving its drainage."
                },
                {
                    id: "d23z80",
                    text: "A person whose vision is blurred at every distance and who sees lines in one direction more sharply than in another most probably has:",
                    options: [
                        { key: "a", text: "Presbyopia caused by hardening of the lens with age" },
                        { key: "b", text: "Hypermetropia caused by too short an eyeball" },
                        { key: "c", text: "Astigmatism caused by unequal curvature of the cornea" },
                        { key: "d", text: "Myopia caused by too great a converging power" }
                    ],
                    answer: "c",
                    explanation: "In <strong>astigmatism</strong> the cornea (or occasionally the lens) is curved more steeply in one meridian than in another, so rays in different planes come to a focus at different points and no single distance is sharp. It is corrected with a <strong>cylindrical lens</strong> oriented to compensate the defective meridian, unlike the spherical lenses used for myopia and hypermetropia."
                },
                {
                    id: "d23z81",
                    text: "The wax of the external auditory meatus is secreted by modified sweat glands. Its function is to:",
                    options: [
                        { key: "a", text: "Amplify the sound waves before they reach the eardrum" },
                        { key: "b", text: "Trap dust and insects and keep the passage waterproof" },
                        { key: "c", text: "Equalise the air pressure on the two sides of the eardrum" },
                        { key: "d", text: "Transmit the vibrations from the pinna to the ossicles" }
                    ],
                    answer: "b",
                    explanation: "The <strong>ceruminous glands</strong> produce a bitter, sticky wax that, with the hairs of the canal, traps dust and small insects and repels water, protecting the delicate tympanic membrane. Impacted wax is a common cause of temporary conductive deafness. Pressure equalisation is the work of the Eustachian tube and amplification that of the ossicles."
                },
                {
                    id: "d23z82",
                    text: "The cochlea contains three parallel canals. Correctly stated, the:",
                    options: [
                        { key: "a", text: "Scala media holds endolymph while the other two hold perilymph" },
                        { key: "b", text: "Scala media holds perilymph while the other two hold endolymph" },
                        { key: "c", text: "Three canals all contain endolymph rich in sodium ions" },
                        { key: "d", text: "Scala tympani alone contains the organ of Corti and endolymph" }
                    ],
                    answer: "a",
                    explanation: "The scala vestibuli and scala tympani are filled with <strong>perilymph</strong>, similar to extracellular fluid, and communicate at the helicotrema; the <strong>scala media (cochlear duct)</strong> between them holds the potassium-rich <strong>endolymph</strong> in which the hair cells of the organ of Corti are bathed. The unusual composition of endolymph provides the electrical driving force for transduction."
                },
                {
                    id: "d23z83",
                    text: "A high-pitched whistle stimulates the hair cells near the base of the cochlea, while a deep note stimulates those near the apex. This is explained by the fact that the basilar membrane is:",
                    options: [
                        { key: "a", text: "Uniform throughout, the difference lying in the ossicles" },
                        { key: "b", text: "Vibrated only at the helicotrema, whatever the frequency" },
                        { key: "c", text: "Wide and slack at the base but narrow and stiff at the apex" },
                        { key: "d", text: "Narrow and stiff at the base but wide and slack at the apex" }
                    ],
                    answer: "d",
                    explanation: "Because its width and tension change progressively, each point of the basilar membrane resonates best at a particular frequency — the <strong>place theory</strong> of pitch. The stiff basal end responds to high frequencies and the floppy apical end to low ones, so the cochlea performs a mechanical frequency analysis. The audible range in man is about 20 to 20 000 Hz."
                },
                {
                    id: "d23z84",
                    text: "Deafness caused by damage to the hair cells or the auditory nerve differs from that caused by impacted wax or a stiff ossicular chain in that the former is:",
                    options: [
                        { key: "a", text: "Conductive and can nearly always be cured by surgery" },
                        { key: "b", text: "Temporary and disappears once the ear is syringed" },
                        { key: "c", text: "Sensorineural and cannot be helped by simple amplification" },
                        { key: "d", text: "Confined to low frequencies and never affects high ones" }
                    ],
                    answer: "c",
                    explanation: "In <strong>conductive</strong> deafness the sound never reaches a healthy inner ear, so making it louder — with wax removal, surgery or a hearing aid — restores hearing. In <strong>sensorineural</strong> deafness the transducer or the nerve itself is damaged, typically by prolonged loud noise, drugs or age, and amplification alone is of little use; a cochlear implant may be needed."
                },
                {
                    id: "d23z85",
                    text: "A very loud sound sets off a reflex contraction of the tensor tympani and stapedius muscles. The purpose of this attenuation reflex is to:",
                    options: [
                        { key: "a", text: "Stiffen the ossicular chain and protect the inner ear" },
                        { key: "b", text: "Increase the transmission so that faint sounds are heard" },
                        { key: "c", text: "Open the Eustachian tube and equalise the pressure" },
                        { key: "d", text: "Rotate the head reflexly towards the source of the sound" }
                    ],
                    answer: "a",
                    explanation: "Contraction of these two tiny muscles pulls the malleus inward and the stapes outward, <strong>stiffening the chain</strong> and cutting the transmission of low frequencies by up to 20 dB. It thus shields the cochlea from sustained loud noise, though its latency of some tens of milliseconds is too long to protect against an explosion. Turning the head to a sound is a midbrain reflex."
                }
            ]
        },
        {
            id: "endorep23",
            name: "Endocrinology & Reproduction",
            subject: "Zoology",
            accent: "emerald",
            blurb: "Q86–111 · endocrine glands, hormones and their disorders; reproductive organs, gametogenesis, and the ovarian and menstrual cycles.",
            questions: [
                {
                    id: "d23z86",
                    text: "A hormone circulates to every cell of the body yet acts on only a few. The specificity depends on:",
                    options: [
                        { key: "a", text: "The duct through which the gland delivers it to that organ" },
                        { key: "b", text: "The presence of the matching receptor on the target cell" },
                        { key: "c", text: "The distance of the target organ from the secreting gland" },
                        { key: "d", text: "The size of the hormone molecule, which limits its spread" }
                    ],
                    answer: "b",
                    explanation: "Endocrine glands are <em>ductless</em> and pour their secretion straight into the blood, so a hormone reaches all tissues. Only cells bearing the specific <strong>receptor</strong> — on the membrane for peptide and amine hormones, in the cytoplasm or nucleus for steroids and thyroid hormone — can recognise and respond to it. Loss of the receptor produces hormone resistance despite normal hormone levels."
                },
                {
                    id: "d23z87",
                    text: "The anterior pituitary is controlled by the hypothalamus not through nerve fibres but through:",
                    options: [
                        { key: "a", text: "The hypophyseal portal vessels carrying releasing factors" },
                        { key: "b", text: "Axons running down the stalk and ending in the pars distalis" },
                        { key: "c", text: "The general circulation, after passing through the heart" },
                        { key: "d", text: "The cerebrospinal fluid draining from the third ventricle" }
                    ],
                    answer: "a",
                    explanation: "Capillaries in the median eminence collect the hypothalamic <strong>releasing and inhibiting factors</strong> and carry them in a short <strong>portal system</strong> straight to a second capillary bed in the pars distalis, so the factors reach it in high concentration without dilution in the general circulation. The <em>posterior</em> lobe, by contrast, is supplied by nerve fibres from the hypothalamus."
                },
                {
                    id: "d23z88",
                    text: "Which pituitary hormone is <em>not</em> tropic, that is, does not act on another endocrine gland?",
                    options: [
                        { key: "a", text: "Thyroid stimulating hormone, acting on the thyroid follicles" },
                        { key: "b", text: "Adrenocorticotropic hormone, acting on the adrenal cortex" },
                        { key: "c", text: "Luteinising hormone, acting on the ovary and the testis" },
                        { key: "d", text: "Prolactin, acting on the alveoli of the mammary gland" }
                    ],
                    answer: "d",
                    explanation: "TSH, ACTH, FSH and LH are <strong>tropic hormones</strong> whose targets are themselves endocrine glands, so each forms a feedback axis. <strong>Prolactin</strong> and growth hormone act directly on non-endocrine tissues — prolactin on the mammary alveoli to <em>secrete</em> milk (oxytocin ejects it) and GH on bone, muscle and liver, partly through IGF-1."
                },
                {
                    id: "d23z89",
                    text: "The release of oxytocin during childbirth is one of the few examples of positive feedback in the body because:",
                    options: [
                        { key: "a", text: "The rising oestrogen level shuts off oxytocin secretion" },
                        { key: "b", text: "Uterine contraction stretches the cervix and evokes more oxytocin" },
                        { key: "c", text: "Oxytocin inhibits its own release once labour has begun" },
                        { key: "d", text: "The placenta destroys the hormone as fast as it is made" }
                    ],
                    answer: "b",
                    explanation: "Stretch of the cervix by the descending foetus sends impulses to the hypothalamus, more <strong>oxytocin</strong> is released, the uterine contractions grow stronger, the cervix is stretched further — and so the cycle escalates until delivery breaks it. Such a self-reinforcing loop must have a definite end point, which is why positive feedback is rare in physiology."
                },
                {
                    id: "d23z90",
                    text: "Thyroxine is often called the 'personality hormone' and 'metabolic hormone'. Which effect does it <em>not</em> have?",
                    options: [
                        { key: "a", text: "It raises the basal metabolic rate and heat production" },
                        { key: "b", text: "It is essential for normal growth of the brain in infancy" },
                        { key: "c", text: "It induces metamorphosis of the tadpole into a frog" },
                        { key: "d", text: "It lowers the level of calcium in the circulating blood" }
                    ],
                    answer: "d",
                    explanation: "Thyroxine ($\\mathrm{T_4}$) and the more potent tri-iodothyronine ($\\mathrm{T_3}$) are calorigenic, promote protein, carbohydrate and fat metabolism, and are indispensable for skeletal and nervous development — a deficiency in infancy causes cretinism, and in an amphibian larva metamorphosis fails. Blood calcium is lowered by <strong>calcitonin</strong>, made by the separate parafollicular (C) cells."
                },
                {
                    id: "d23z91",
                    text: "If the plasma calcium level rises above normal, the hormone released and its action are:",
                    options: [
                        { key: "a", text: "Parathormone, which dissolves more calcium out of the bone" },
                        { key: "b", text: "Aldosterone, which excretes the excess calcium in the urine" },
                        { key: "c", text: "Calcitriol, which increases calcium absorption from the gut" },
                        { key: "d", text: "Calcitonin, which suppresses bone resorption and lowers calcium" }
                    ],
                    answer: "d",
                    explanation: "<strong>Calcitonin</strong> from the thyroid C-cells inhibits the osteoclasts and promotes renal excretion, so it brings a raised calcium level down. It is the exact antagonist of <strong>parathormone</strong>, which is released when calcium falls and mobilises it from bone, reclaims it in the kidney and — through calcitriol — increases its absorption from the intestine."
                },
                {
                    id: "d23z92",
                    text: "Vitamin D is now regarded as a hormone rather than a vitamin because it:",
                    options: [
                        { key: "a", text: "Cannot be stored anywhere in the tissues of the body" },
                        { key: "b", text: "Has to be supplied entirely in the food that is eaten" },
                        { key: "c", text: "Is made in the skin and acts on a distant target organ" },
                        { key: "d", text: "Acts on a membrane receptor through cyclic AMP" }
                    ],
                    answer: "c",
                    explanation: "Sunlight converts 7-dehydrocholesterol in the skin to cholecalciferol, which is hydroxylated in the liver and then in the <em>kidney</em> to the active <strong>calcitriol</strong>. This is carried by the blood to the intestine, where — like a steroid hormone — it enters the cell and acts on the genes to increase calcium-binding protein. Its deficiency gives rickets in children and osteomalacia in adults."
                },
                {
                    id: "d23z93",
                    text: "A woman on long-term steroid treatment develops a rounded 'moon' face, a fatty hump between the shoulders, thin limbs, high blood sugar and easy bruising. She has:",
                    options: [
                        { key: "a", text: "Addison's disease, from destruction of the adrenal cortex" },
                        { key: "b", text: "Cushing's syndrome, from an excess of glucocorticoid" },
                        { key: "c", text: "Conn's syndrome, from an excess of aldosterone alone" },
                        { key: "d", text: "Acromegaly, from an excess of growth hormone in the adult" }
                    ],
                    answer: "b",
                    explanation: "Cortisol promotes gluconeogenesis and the breakdown of protein while redistributing fat to the trunk and face; in excess it therefore produces the truncal obesity, moon face, buffalo hump, wasted limbs, hyperglycaemia, thin skin and poor healing of <strong>Cushing's syndrome</strong>. Its deficiency is Addison's disease, with hypotension, hyponatraemia and skin pigmentation."
                },
                {
                    id: "d23z94",
                    text: "Type 1 and type 2 diabetes mellitus differ fundamentally in that in type 1:",
                    options: [
                        { key: "a", text: "The $\\beta$-cells are destroyed, so there is an absolute lack of insulin" },
                        { key: "b", text: "The tissues become insensitive though insulin levels are high" },
                        { key: "c", text: "The kidney tubules fail to reabsorb any of the filtered glucose" },
                        { key: "d", text: "The liver stops converting glucose into stored glycogen only" }
                    ],
                    answer: "a",
                    explanation: "Type 1 (insulin-dependent, juvenile) diabetes follows autoimmune destruction of the pancreatic <strong>$\\beta$-cells</strong>, so insulin is virtually absent and injections are essential; ketoacidosis is a real danger. Type 2, far commoner and linked to obesity, is a matter of <strong>insulin resistance</strong>. Both show the classic triad of polyuria, polydipsia and polyphagia with weight loss."
                },
                {
                    id: "d23z95",
                    text: "The adrenal medulla can be removed without endangering life, whereas removal of the adrenal cortex is fatal within days. The reason is that:",
                    options: [
                        { key: "a", text: "The medulla is far smaller and secretes no hormone at all" },
                        { key: "b", text: "The cortex secretes hormones essential for salt and glucose balance" },
                        { key: "c", text: "The medulla is replaced by cortical tissue after its removal" },
                        { key: "d", text: "The cortex is the only source of adrenaline in the body" }
                    ],
                    answer: "b",
                    explanation: "Medullary adrenaline and noradrenaline merely reinforce the sympathetic nervous system, whose direct nerve supply continues to work. The <strong>cortex</strong>, however, is the sole source of <strong>aldosterone</strong> and <strong>cortisol</strong>; without them sodium and water are lost, potassium accumulates, blood pressure and blood glucose collapse and the patient dies unless the steroids are replaced."
                },
                {
                    id: "d23z96",
                    text: "Which organ is correctly paired with a hormone that it secretes?",
                    options: [
                        { key: "a", text: "Heart — erythropoietin, which stimulates red-cell formation" },
                        { key: "b", text: "Stomach — atrial natriuretic factor, which lowers blood pressure" },
                        { key: "c", text: "Kidney — erythropoietin, released when the tissue is hypoxic" },
                        { key: "d", text: "Liver — insulin, released when the blood glucose rises" }
                    ],
                    answer: "c",
                    explanation: "Several organs that are not classical endocrine glands nevertheless secrete hormones: the <strong>kidney</strong> makes <strong>erythropoietin</strong> (and renin and calcitriol), the <strong>heart</strong> makes atrial natriuretic factor, the <strong>stomach and intestine</strong> make gastrin, secretin and CCK, and the <strong>placenta</strong> makes hCG and progesterone. Insulin comes from the pancreatic islets, not the liver."
                },
                {
                    id: "d23z97",
                    text: "The action of a steroid hormone is slower in onset but longer lasting than that of a peptide hormone. This is because a steroid:",
                    options: [
                        { key: "a", text: "Travels through the blood far more slowly than a peptide does" },
                        { key: "b", text: "Alters gene transcription, so new protein must be synthesised" },
                        { key: "c", text: "Is secreted only once a day, whereas peptides are secreted hourly" },
                        { key: "d", text: "Must first be converted into a peptide inside the target cell" }
                    ],
                    answer: "b",
                    explanation: "A steroid diffuses into the cell, binds its receptor and the complex acts on hormone-response elements of the DNA; the effect appears only after <strong>transcription and translation</strong>, over hours, but the new enzymes persist. A peptide hormone works through a membrane receptor and a second messenger such as cyclic AMP, activating enzymes that already exist — fast but short-lived."
                },
                {
                    id: "d23z98",
                    text: "Growth hormone, insulin and thyroxine all influence growth, but a child lacking thyroid hormone alone becomes a cretin with severe mental retardation. This shows that thyroxine is uniquely required for:",
                    options: [
                        { key: "a", text: "The elongation of the long bones at their epiphyseal plates" },
                        { key: "b", text: "The storage of glucose as glycogen inside the liver cells" },
                        { key: "c", text: "The differentiation and myelination of the developing brain" },
                        { key: "d", text: "The retention of calcium and phosphate in the growing bone" }
                    ],
                    answer: "c",
                    explanation: "Thyroid hormone is indispensable in foetal and early postnatal life for neuronal migration, dendritic branching and <strong>myelination</strong>; the damage done by even a few months of deficiency is irreversible, which is why newborns are screened for hypothyroidism. Growth hormone chiefly drives skeletal growth, and its deficiency gives a dwarf of normal intelligence."
                },
                {
                    id: "d23z99",
                    text: "The testes descend into the scrotum, where the temperature is about 2 °C below that of the abdomen. The functional necessity for this is that:",
                    options: [
                        { key: "a", text: "Testosterone can be secreted only in a cool environment" },
                        { key: "b", text: "The vas deferens cannot contract if it is kept warm" },
                        { key: "c", text: "The sperm would be agglutinated by the warm blood" },
                        { key: "d", text: "Spermatogenesis fails at normal body temperature" }
                    ],
                    answer: "d",
                    explanation: "The germinal epithelium is temperature-sensitive, and the cooler scrotal environment — maintained by the pampiniform plexus and the dartos and cremaster muscles — is essential for normal <strong>spermatogenesis</strong>. In <em>cryptorchidism</em>, where a testis fails to descend, sperm production is lost although the Leydig cells continue to secrete testosterone, so the secondary sexual characters develop normally."
                },
                {
                    id: "d23z100",
                    text: "A human sperm is about 60 µm long. The mitochondria that supply the energy for its swimming are packed into the:",
                    options: [
                        { key: "a", text: "Acrosome, at the very tip of the head" },
                        { key: "b", text: "Nucleus, which is condensed to save space" },
                        { key: "c", text: "End piece of the tail, behind the annulus" },
                        { key: "d", text: "Middle piece, spiralled round the axial filament" }
                    ],
                    answer: "d",
                    explanation: "The sperm is stripped to essentials: a <strong>head</strong> of condensed haploid nucleus capped by the enzyme-filled <strong>acrosome</strong>, a short neck with the centrioles, a <strong>middle piece</strong> in which a mitochondrial spiral sheathes the axoneme and provides ATP, and a long flagellar <strong>tail</strong>. Almost all the cytoplasm is discarded as the residual body during spermiogenesis."
                },
                {
                    id: "d23z101",
                    text: "FSH and LH both act on the testis, but on different cells. Correctly stated:",
                    options: [
                        { key: "a", text: "FSH acts on the Sertoli cells and LH on the Leydig cells" },
                        { key: "b", text: "FSH acts on the Leydig cells and LH on the Sertoli cells" },
                        { key: "c", text: "Both act on the spermatogonia to make them divide" },
                        { key: "d", text: "Both act on the epididymis to mature the stored sperm" }
                    ],
                    answer: "a",
                    explanation: "<strong>FSH</strong> stimulates the <strong>Sertoli cells</strong> to secrete androgen-binding protein and to nourish the germ cells; <strong>LH (ICSH)</strong> stimulates the <strong>Leydig cells</strong> to secrete testosterone, which in turn is essential for spermatogenesis and the secondary sexual characters. The Sertoli cells also release <strong>inhibin</strong>, which feeds back selectively to suppress FSH."
                },
                {
                    id: "d23z102",
                    text: "A newborn girl has about two million primary oocytes, a girl at puberty about four hundred thousand, and only some four hundred are ever ovulated. This shows that:",
                    options: [
                        { key: "a", text: "New oocytes are formed each month throughout reproductive life" },
                        { key: "b", text: "The great majority of follicles degenerate by atresia" },
                        { key: "c", text: "Each menstrual cycle uses up about a thousand oocytes" },
                        { key: "d", text: "Oogenesis begins only after the first menstrual period" }
                    ],
                    answer: "b",
                    explanation: "Unlike spermatogenesis, oogenesis begins in foetal life and the stock is fixed at birth — no new oocytes are formed. Most of the follicles that start to grow never reach maturity and are lost by <strong>atresia</strong>, so a woman ovulates only about 400 eggs in some 35 years of reproductive life. Exhaustion of the remaining follicles brings on the menopause."
                },
                {
                    id: "d23z103",
                    text: "In a mature Graafian follicle, the layer of granulosa cells that clings to the ovum and is carried out with it at ovulation is the:",
                    options: [
                        { key: "a", text: "Theca externa, the fibrous outer covering of the follicle" },
                        { key: "b", text: "Membrana granulosa lining the wall of the antrum" },
                        { key: "c", text: "Corona radiata, lying just outside the zona pellucida" },
                        { key: "d", text: "Zona pellucida, a glycoprotein coat around the ovum" }
                    ],
                    answer: "c",
                    explanation: "The oocyte sits on a mound of granulosa cells, the <em>cumulus oophorus</em>, projecting into the fluid-filled antrum. The innermost cells adhering directly outside the transparent <strong>zona pellucida</strong> form the <strong>corona radiata</strong> and accompany the ovum into the fallopian tube, where the sperm must digest through them. The theca interna secretes the androgens that the granulosa converts to oestrogen."
                },
                {
                    id: "d23z104",
                    text: "The three layers of the uterine wall, from outside inwards, are:",
                    options: [
                        { key: "a", text: "Endometrium, myometrium and perimetrium" },
                        { key: "b", text: "Myometrium, perimetrium and endometrium" },
                        { key: "c", text: "Perimetrium, endometrium and myometrium" },
                        { key: "d", text: "Perimetrium, myometrium and endometrium" }
                    ],
                    answer: "d",
                    explanation: "The thin outer <strong>perimetrium</strong> is peritoneum; the thick middle <strong>myometrium</strong> of smooth muscle provides the force of labour; and the inner glandular <strong>endometrium</strong> is the layer that thickens and is shed in each cycle and into which the blastocyst implants. The narrow lower end of the uterus opening into the vagina is the cervix."
                },
                {
                    id: "d23z105",
                    text: "In a 28-day cycle, the levels of both oestrogen and progesterone are at their lowest during:",
                    options: [
                        { key: "a", text: "Days 1 to 5, the menstrual phase" },
                        { key: "b", text: "Days 10 to 14, just before ovulation" },
                        { key: "c", text: "Days 20 to 24, the mid-luteal phase" },
                        { key: "d", text: "Days 14 to 16, immediately after ovulation" }
                    ],
                    answer: "a",
                    explanation: "The corpus luteum of the previous cycle has regressed, so both steroids fall to their minimum; it is exactly this withdrawal that causes the endometrium to break down and menstruation to begin. The low level also releases the pituitary from feedback inhibition, FSH rises and a new crop of follicles starts to grow — which is why the menstrual and follicular phases overlap."
                },
                {
                    id: "d23z106",
                    text: "A woman's basal body temperature rises by about 0.4 °C after ovulation and stays up until the next period. The hormone responsible is:",
                    options: [
                        { key: "a", text: "Oestrogen secreted by the ripening Graafian follicle" },
                        { key: "b", text: "Progesterone secreted by the corpus luteum" },
                        { key: "c", text: "Luteinising hormone released at the mid-cycle surge" },
                        { key: "d", text: "Human chorionic gonadotropin from the trophoblast" }
                    ],
                    answer: "b",
                    explanation: "<strong>Progesterone</strong> has a thermogenic action on the hypothalamic temperature centre, so the shift of the basal temperature marks the change from the follicular to the luteal phase and is used to confirm that ovulation has occurred. If the temperature stays raised beyond about sixteen days, pregnancy is likely, since the corpus luteum has been rescued by hCG."
                },
                {
                    id: "d23z107",
                    text: "The fertilised ovum reaches the uterus as a blastocyst and implants about six to seven days after fertilisation. The part of the blastocyst that makes contact with and erodes the endometrium is the:",
                    options: [
                        { key: "a", text: "Inner cell mass, which forms the embryo proper" },
                        { key: "b", text: "Blastocoel, the fluid-filled cavity inside" },
                        { key: "c", text: "Trophoblast, the outer layer of the blastocyst" },
                        { key: "d", text: "Zona pellucida, which persists until implantation is over" }
                    ],
                    answer: "c",
                    explanation: "The <strong>trophoblast</strong> secretes enzymes that digest the endometrial cells, so the blastocyst sinks into the prepared uterine lining; it then forms the chorion and, with the maternal tissue, the placenta, and it is the source of hCG. The <strong>inner cell mass</strong> becomes the embryo, and the zona pellucida must first be shed — 'hatching' — before implantation can occur."
                },
                {
                    id: "d23z108",
                    text: "The umbilical cord of a human foetus contains:",
                    options: [
                        { key: "a", text: "One artery carrying oxygenated blood and two veins carrying deoxygenated blood" },
                        { key: "b", text: "Two arteries carrying deoxygenated blood and one vein carrying oxygenated blood" },
                        { key: "c", text: "Two arteries and two veins, all carrying mixed blood to the foetus" },
                        { key: "d", text: "One artery and one vein, together with the ureter of the foetus" }
                    ],
                    answer: "b",
                    explanation: "The vessels are named from the point of view of the <em>foetus</em>: the two <strong>umbilical arteries</strong> carry deoxygenated, waste-laden blood <em>away</em> from the foetus to the placenta, and the single <strong>umbilical vein</strong> brings oxygenated, nutrient-rich blood back — the reverse of the usual rule about what arteries and veins carry."
                },
                {
                    id: "d23z109",
                    text: "The first secretion of the mammary gland after delivery, thin and yellowish, is especially valuable to the newborn because it is rich in:",
                    options: [
                        { key: "a", text: "Fat and lactose, giving the highest possible calorie value" },
                        { key: "b", text: "Digestive enzymes that break down the infant's first food" },
                        { key: "c", text: "Iron and calcium, which the newborn cannot otherwise obtain" },
                        { key: "d", text: "Antibodies, chiefly IgA, which give passive immunity" }
                    ],
                    answer: "d",
                    explanation: "<strong>Colostrum</strong> is poor in fat and sugar but loaded with proteins, and especially with <strong>immunoglobulin A</strong>, which coats the infant's gut lining and protects it against infection until its own immune system matures. It also has a mild laxative action that helps clear the meconium. Milk secretion is driven by prolactin and its ejection by oxytocin."
                },
                {
                    id: "d23z110",
                    text: "Identical (monozygotic) twins differ from fraternal (dizygotic) twins in that identical twins:",
                    options: [
                        { key: "a", text: "Arise from one zygote and are always of the same sex" },
                        { key: "b", text: "Arise from two ova fertilised by two different sperms" },
                        { key: "c", text: "May be of different sexes but always share one placenta" },
                        { key: "d", text: "Are genetically no more alike than ordinary brothers and sisters" }
                    ],
                    answer: "a",
                    explanation: "Monozygotic twins result when a single fertilised egg splits at an early stage, so they carry <strong>identical genotypes</strong> and are necessarily of the same sex — which makes them invaluable in studies of heredity versus environment. Dizygotic twins come from two separate ova and two sperms, may be of either sex, and are no more alike genetically than ordinary siblings."
                },
                {
                    id: "d23z111",
                    text: "At the menopause the ovaries cease to respond to gonadotropins. The characteristic hormonal picture is therefore:",
                    options: [
                        { key: "a", text: "Low oestrogen with low FSH and LH, since the whole axis fails" },
                        { key: "b", text: "High oestrogen with high FSH and LH, from continuous stimulation" },
                        { key: "c", text: "High progesterone maintained by a persistent corpus luteum" },
                        { key: "d", text: "Low oestrogen with high FSH and LH, from loss of feedback" }
                    ],
                    answer: "d",
                    explanation: "With the follicular stock exhausted, oestrogen and inhibin production collapses, and the negative feedback they exerted on the pituitary is removed — so <strong>FSH and LH rise steeply</strong> while oestrogen stays low. The oestrogen deficiency accounts for the hot flushes, the atrophy of the reproductive tract and the accelerated bone loss that may end in osteoporosis."
                }
            ]
        }
    ]
};
/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)".
   The whole day sits inside Zoology unit 5, so the tree shows that single unit broken into its
   eight official sub-topics; the four chapters simply pair them two by two. */
const DAY23_SYLLABUS = [
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "5. Human Biology and Physiology", weight: 15, subs: [
            { name: "Digestive System: Alimentary Canal, Glands & Physiology of Digestion", ids: ["d23z1", "d23z2", "d23z3", "d23z4", "d23z5", "d23z6", "d23z7", "d23z8", "d23z9", "d23z10", "d23z11", "d23z12", "d23z13", "d23z14"] },
            { name: "Respiratory System: Organs, Gas Transport, Regulation & Disorders", ids: ["d23z15", "d23z16", "d23z17", "d23z18", "d23z19", "d23z20", "d23z21", "d23z22", "d23z23", "d23z24", "d23z25", "d23z26", "d23z27", "d23z28"] },
            { name: "Circulatory System: Blood, Heart, Cardiac Cycle, Vessels, Blood Groups & Disorders", ids: ["d23z29", "d23z30", "d23z31", "d23z32", "d23z33", "d23z34", "d23z35", "d23z36", "d23z37", "d23z38", "d23z39", "d23z40", "d23z41", "d23z42", "d23z43", "d23z44", "d23z45"] },
            { name: "Excretory System: Organs, Urine Formation & Renal Disorders", ids: ["d23z46", "d23z47", "d23z48", "d23z49", "d23z50", "d23z51", "d23z52", "d23z53", "d23z54", "d23z55", "d23z56", "d23z57", "d23z58"] },
            { name: "Nervous System: CNS, PNS, Autonomic & Nerve Impulse", ids: ["d23z59", "d23z60", "d23z61", "d23z62", "d23z63", "d23z64", "d23z65", "d23z66", "d23z67", "d23z68", "d23z69", "d23z70", "d23z71", "d23z72", "d23z73"] },
            { name: "Sense Organs: Eye and Ear", ids: ["d23z74", "d23z75", "d23z76", "d23z77", "d23z78", "d23z79", "d23z80", "d23z81", "d23z82", "d23z83", "d23z84", "d23z85"] },
            { name: "Endocrinology: Glands, Hormones and Disorders", ids: ["d23z86", "d23z87", "d23z88", "d23z89", "d23z90", "d23z91", "d23z92", "d23z93", "d23z94", "d23z95", "d23z96", "d23z97", "d23z98"] },
            { name: "Reproductive System: Organs, Gametogenesis, Ovarian & Menstrual Cycle", ids: ["d23z99", "d23z100", "d23z101", "d23z102", "d23z103", "d23z104", "d23z105", "d23z106", "d23z107", "d23z108", "d23z109", "d23z110", "d23z111"] }
        ] }
    ] }
];
DAY23.syllabus = DAY23_SYLLABUS;
