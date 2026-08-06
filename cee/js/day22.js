/* ============================================================
   DAY 22 — HUMAN BIOLOGY & PHYSIOLOGY  +  BIODIVERSITY
   200 questions · 180 minutes · 0.25 negative marking

   Section split:
     Q1–Q101    Human Biology and Physiology (Zoology)  (d22z1  … d22z101)
     Q102–Q200  Biodiversity (Botany)                   (d22b102 … d22b200)

   Scope follows the official MEC "Syllabus for Bachelor Level
   Common Entrance Examination (2020, revised 2026)":

     Zoology · Unit 5 — Human Biology and Physiology
       Digestive · Respiratory · Circulatory · Excretory ·
       Nervous · Sense organs · Endocrinology · Reproductive

     Botany · Unit 2 — Biodiversity
       Introduction & classification systems · Monera and Virus ·
       Fungi and Lichens · Algae · Bryophytes · Pteridophytes ·
       Gymnosperms · Angiosperms (morphology and families) ·
       Economic importance and medicinal plants of Nepal

   Difficulty: deliberately a notch above the routine CEE level —
   two-step reasoning, numerical work and fine discrimination
   between closely related facts.
   ============================================================ */
const DAY22 = {
    day: 22,
    title: "Day 22",
    subtitle: "Human Biology & Physiology + Biodiversity",
    durationMinutes: 180,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "hbp22",
            name: "Human Biology & Physiology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q1–101 · digestive 13, respiratory 13, circulatory 16, excretory 12, nervous 14, sense organs 11, endocrine 12, reproductive 10.",
            questions: [
                {
                    id: "d22z1",
                    text: "A child with a complete set of milk teeth is compared with an adult carrying a complete permanent dentition. How many teeth of the adult set have <em>no</em> counterpart at all in the milk dentition?",
                    options: [
                        { key: "a", text: "8, because only the premolars are newly added" },
                        { key: "b", text: "10, the premolars together with one incisor pair" },
                        { key: "c", text: "12, the premolars together with the third molars" },
                        { key: "d", text: "20, since the whole milk set is shed and replaced" }
                    ],
                    answer: "c",
                    explanation: "Milk dentition is $2102/2102 \\times 2 = 20$ teeth (no premolars, only two molars per half jaw); permanent dentition is $2123/2123 \\times 2 = 32$. The extra 12 are the <strong>8 premolars</strong> (which have no deciduous predecessor of their own type) and the <strong>4 third molars</strong>. The remaining 20 permanent teeth simply replace the milk teeth, so they are not 'new'."
                },
                {
                    id: "d22z2",
                    text: "Peristalsis of the small intestine is coordinated mainly by a nerve plexus that lies <em>between the two muscle coats</em> of the gut wall. This plexus is:",
                    options: [
                        { key: "a", text: "Meissner's plexus, embedded in the submucosa" },
                        { key: "b", text: "Auerbach's plexus, inside the muscularis externa" },
                        { key: "c", text: "The subserosal plexus, just deep to the serosa" },
                        { key: "d", text: "The mucosal plexus, lying in the lamina propria" }
                    ],
                    answer: "b",
                    explanation: "The gut wall has four coats — serosa, muscularis, submucosa and mucosa. <strong>Auerbach's (myenteric) plexus</strong> lies between the inner circular and outer longitudinal muscle layers and drives motility, whereas <strong>Meissner's (submucosal) plexus</strong> lies in the submucosa and chiefly controls secretion and local blood flow."
                },
                {
                    id: "d22z3",
                    text: "In only one region of the human alimentary canal do secretory glands lie in the <em>submucosa</em> instead of the mucosa. That region and the nature of the secretion are:",
                    options: [
                        { key: "a", text: "Duodenum — alkaline mucus from Brunner's glands" },
                        { key: "b", text: "Ileum — lysozyme-rich fluid from Peyer's patches" },
                        { key: "c", text: "Fundus of stomach — pepsinogen from chief cells" },
                        { key: "d", text: "Jejunum — disaccharidases from the crypt glands" }
                    ],
                    answer: "a",
                    explanation: "<strong>Brunner's glands</strong> are unique in being submucosal; their alkaline, bicarbonate-rich mucus neutralises the acid chyme entering the duodenum and protects the mucosa. Peyer's patches are lymphoid (not glandular), chief cells are mucosal gastric cells, and the intestinal crypts of Lieberk&uuml;hn open on the mucosal surface."
                },
                {
                    id: "d22z4",
                    text: "At the base of the crypts of Lieberk&uuml;hn lie granular cells that are <em>not</em> concerned with digestion at all but with defence of the mucosa. They are:",
                    options: [
                        { key: "a", text: "Goblet cells, pouring mucus over the villi" },
                        { key: "b", text: "Argentaffin cells, releasing serotonin locally" },
                        { key: "c", text: "Zymogen cells, discharging inactive proenzymes" },
                        { key: "d", text: "Paneth cells, secreting lysozyme and defensins" }
                    ],
                    answer: "d",
                    explanation: "<strong>Paneth cells</strong> occupy the crypt base and release lysozyme, defensins and phospholipase, limiting bacterial colonisation of the crypt where the stem cells lie. Goblet cells secrete mucus, argentaffin (enteroendocrine) cells secrete hormones such as serotonin, and zymogen cells are gastric/pancreatic."
                },
                {
                    id: "d22z5",
                    text: "If the duodenal mucosa failed to release enterokinase, the immediate consequence would be that:",
                    options: [
                        { key: "a", text: "Bile could no longer emulsify the ingested fat" },
                        { key: "b", text: "Trypsinogen would stay inactive, blocking the cascade" },
                        { key: "c", text: "Gastric pepsinogen would remain unconverted to pepsin" },
                        { key: "d", text: "Pancreatic amylase would lose its chloride activator" }
                    ],
                    answer: "b",
                    explanation: "Enterokinase (enteropeptidase) of the intestinal mucosa converts <strong>trypsinogen to trypsin</strong>, and trypsin then activates chymotrypsinogen, procarboxypeptidase and more trypsinogen. Without it the entire pancreatic protease cascade stalls. Pepsinogen is activated by gastric HCl (then autocatalytically), and bile action is purely physical."
                },
                {
                    id: "d22z6",
                    text: "A patient after total gastrectomy needs lifelong injections of vitamin $\\mathrm{B_{12}}$. The cell type whose loss explains this is:",
                    options: [
                        { key: "a", text: "The chief cell, source of pepsinogen and rennin" },
                        { key: "b", text: "The mucous neck cell, source of protective mucus" },
                        { key: "c", text: "The parietal cell, source of the intrinsic factor" },
                        { key: "d", text: "The G-cell, source of the hormone gastrin" }
                    ],
                    answer: "c",
                    explanation: "<strong>Parietal (oxyntic) cells</strong> secrete both HCl and the <em>intrinsic factor of Castle</em>, a glycoprotein without which vitamin $\\mathrm{B_{12}}$ cannot be absorbed in the ileum; its loss causes pernicious anaemia. Chief cells give pepsinogen, G-cells gastrin, and neck cells mucus — none of which is needed for $\\mathrm{B_{12}}$ uptake."
                },
                {
                    id: "d22z7",
                    text: "Acid chyme entering the duodenum triggers a hormone that makes the pancreas pour out a watery, bicarbonate-rich juice poor in enzymes. The hormone is:",
                    options: [
                        { key: "a", text: "Gastrin, released by the pyloric G-cells" },
                        { key: "b", text: "Cholecystokinin, which empties the gall bladder" },
                        { key: "c", text: "Enterogastrone, which slows gastric emptying" },
                        { key: "d", text: "Secretin, acting on the pancreatic duct cells" }
                    ],
                    answer: "d",
                    explanation: "<strong>Secretin</strong> acts on the duct cells and yields an alkaline, enzyme-poor juice that neutralises the acid. <strong>CCK (pancreozymin)</strong> acts on the acinar cells to give an enzyme-rich juice and contracts the gall bladder. Gastrin drives gastric HCl, and enterogastrone (GIP) inhibits gastric motility and secretion."
                },
                {
                    id: "d22z8",
                    text: "Bile is indispensable for fat digestion although it contains no digestive enzyme. The correct statement about bile is:",
                    options: [
                        { key: "a", text: "Bile salts emulsify fat; bile pigments are excretory" },
                        { key: "b", text: "Bile pigments emulsify fat; bile salts are excretory" },
                        { key: "c", text: "Bile lipase hydrolyses fat to fatty acid and glycerol" },
                        { key: "d", text: "Bile acidifies the chyme so that lipase can act on it" }
                    ],
                    answer: "a",
                    explanation: "Sodium glycocholate and taurocholate — the <strong>bile salts</strong> — lower surface tension and break large fat globules into a fine emulsion, hugely increasing the surface for pancreatic lipase; they also help form micelles for absorption. <strong>Bilirubin and biliverdin</strong> are waste products of haem breakdown. Bile is alkaline (pH ≈ 8), not acidic, and contains no lipase."
                },
                {
                    id: "d22z9",
                    text: "Maltase, sucrase, lactase and the dipeptidases of the small intestine are described as 'brush-border enzymes' because they:",
                    options: [
                        { key: "a", text: "Are washed into the lumen with the succus entericus" },
                        { key: "b", text: "Reach the gut through the hepato-pancreatic duct" },
                        { key: "c", text: "Stay bound to the microvillar membrane of enterocytes" },
                        { key: "d", text: "Are stored in goblet cells and freed with the mucus" }
                    ],
                    answer: "c",
                    explanation: "The terminal steps of carbohydrate and protein digestion occur on the <strong>microvilli of the enterocytes</strong>, where the enzymes remain membrane-anchored; the products are therefore released right at the site of absorption. Pancreatic enzymes (amylase, trypsinogen, lipase) come via the hepato-pancreatic duct and act free in the lumen."
                },
                {
                    id: "d22z10",
                    text: "A fatty meal and a starchy meal are eaten together. The absorbed products of each reach the general circulation by different routes, because:",
                    options: [
                        { key: "a", text: "Both travel to the liver first through the portal vein" },
                        { key: "b", text: "Fats enter lacteals as chylomicrons, bypassing the portal vein" },
                        { key: "c", text: "Sugars enter lacteals while fats enter the blood capillaries" },
                        { key: "d", text: "Both enter the lymph and reach blood at the thoracic duct" }
                    ],
                    answer: "b",
                    explanation: "Monosaccharides and amino acids pass into the villous blood capillaries and go through the <strong>hepatic portal vein to the liver</strong>. Fatty acids and monoglycerides are re-esterified in the enterocyte, coated as <strong>chylomicrons</strong> and passed into the <strong>lacteal</strong>, entering the blood only at the left subclavian vein via the thoracic duct — thus escaping the first pass through the liver."
                },
                {
                    id: "d22z11",
                    text: "Pepsinogen is secreted as an inactive precursor. Its conversion to pepsin in the stomach is brought about by:",
                    options: [
                        { key: "a", text: "Enterokinase carried backwards from the duodenum" },
                        { key: "b", text: "Calcium ions liberated from the swallowed food" },
                        { key: "c", text: "Mucus, which raises the pH of the gastric surface" },
                        { key: "d", text: "HCl, after which pepsin itself acts autocatalytically" }
                    ],
                    answer: "d",
                    explanation: "Gastric <strong>HCl</strong> removes a masking peptide from pepsinogen at pH 1.8–2.0; the pepsin so formed then activates further pepsinogen molecules <em>autocatalytically</em>. Storing the enzyme as a zymogen prevents self-digestion of the gland cells. Enterokinase acts only on trypsinogen, in the duodenum."
                },
                {
                    id: "d22z12",
                    text: "The liver is called the body's largest gland and its chief 'chemical factory'. Which combination of liver functions is correctly stated?",
                    options: [
                        { key: "a", text: "Ornithine-cycle urea formation and phagocytosis by Kupffer cells" },
                        { key: "b", text: "Secretion of insulin and destruction of old red blood cells" },
                        { key: "c", text: "Manufacture of trypsinogen and storage of vitamin $\\mathrm{B_{12}}$" },
                        { key: "d", text: "Production of erythropoietin and of the intrinsic factor" }
                    ],
                    answer: "a",
                    explanation: "Hepatocytes convert toxic ammonia to <strong>urea by the ornithine (Krebs–Henseleit) cycle</strong>, while the stellate <strong>Kupffer cells</strong> lining the sinusoids are macrophages that engulf worn-out erythrocytes and microbes. Insulin comes from the pancreatic islets, trypsinogen from the pancreatic acini, erythropoietin mainly from the kidney and intrinsic factor from the gastric parietal cells."
                },
                {
                    id: "d22z13",
                    text: "A person passes bulky, pale, foul-smelling stools that float on water, and shows no jaundice. The most consistent explanation is:",
                    options: [
                        { key: "a", text: "Failure of gastric HCl, so proteins remain undigested" },
                        { key: "b", text: "Obstruction of the bile duct with backflow of bilirubin" },
                        { key: "c", text: "Deficient pancreatic lipase, leaving fat unabsorbed" },
                        { key: "d", text: "Loss of brush-border lactase, causing milk intolerance" }
                    ],
                    answer: "c",
                    explanation: "Fat in the stool (<em>steatorrhoea</em>) makes it bulky, greasy and buoyant. Without jaundice, bile-duct obstruction is unlikely, so the fault lies in fat digestion itself — deficient <strong>pancreatic lipase</strong>. Lactase deficiency gives watery, acidic, gassy diarrhoea, and achlorhydria mainly disturbs protein digestion and iron/$\\mathrm{B_{12}}$ handling."
                },
                {
                    id: "d22z14",
                    text: "Air travelling down the human respiratory tract first meets a structure across which gas exchange can occur at the level of the:",
                    options: [
                        { key: "a", text: "Terminal bronchiole, the last purely conducting tube" },
                        { key: "b", text: "Respiratory bronchiole, which bears a few alveoli" },
                        { key: "c", text: "Alveolar sac, the blind end of the alveolar duct" },
                        { key: "d", text: "Tertiary bronchus, where cartilage plates disappear" }
                    ],
                    answer: "b",
                    explanation: "The tract is divided into a <strong>conducting part</strong> (nose to terminal bronchioles) that only warms, moistens and filters air, and a <strong>respiratory (exchange) part</strong> that begins at the <strong>respiratory bronchiole</strong>, whose wall already carries occasional alveoli. Alveolar ducts and sacs lie further downstream, so they are not the <em>first</em> exchange site."
                },
                {
                    id: "d22z15",
                    text: "A baby born at 28 weeks develops respiratory distress syndrome. The missing dipalmitoyl-lecithin film normally works by:",
                    options: [
                        { key: "a", text: "Increasing alveolar surface tension so the alveoli recoil" },
                        { key: "b", text: "Dissolving oxygen and carrying it into the capillaries" },
                        { key: "c", text: "Thickening the respiratory membrane against infection" },
                        { key: "d", text: "Lowering surface tension so the alveoli resist collapse" }
                    ],
                    answer: "d",
                    explanation: "<strong>Surfactant</strong> from the type-II (septal) pneumocytes lowers the surface tension of the alveolar fluid film. By Laplace's law $P = 2T/r$, a low $T$ keeps the pressure inside small alveoli from rising and prevents them from emptying into larger ones and collapsing. Surfactant appears late in gestation, hence the distress of the preterm infant."
                },
                {
                    id: "d22z16",
                    text: "The pressure gradient driving $\\mathrm{O_2}$ from alveolar air to blood is about 64 mm Hg, while that driving $\\mathrm{CO_2}$ the other way is only about 5 mm Hg. Yet as much $\\mathrm{CO_2}$ leaves as $\\mathrm{O_2}$ enters, because:",
                    options: [
                        { key: "a", text: "$\\mathrm{CO_2}$ is far more soluble in the diffusion membrane" },
                        { key: "b", text: "$\\mathrm{CO_2}$ molecules are lighter and hence faster" },
                        { key: "c", text: "$\\mathrm{CO_2}$ crosses only where the membrane is thinnest" },
                        { key: "d", text: "$\\mathrm{CO_2}$ is actively pumped out by the pneumocytes" }
                    ],
                    answer: "a",
                    explanation: "Diffusion across the respiratory membrane obeys Fick's law, in which the rate is proportional to the solubility of the gas. $\\mathrm{CO_2}$ is roughly <strong>20–25 times more soluble</strong> in water and in the membrane than $\\mathrm{O_2}$, so its very small gradient (45 → 40 mm Hg) moves the same amount of gas as the large $\\mathrm{O_2}$ gradient (104 → 40 mm Hg). No active transport is involved."
                },
                {
                    id: "d22z17",
                    text: "In an actively contracting muscle the oxygen-dissociation curve of haemoglobin shifts to the right. The set of conditions responsible is:",
                    options: [
                        { key: "a", text: "Low $p\\mathrm{CO_2}$, high pH, low temperature, low 2,3-BPG" },
                        { key: "b", text: "High $p\\mathrm{CO_2}$, high pH, low temperature, high 2,3-BPG" },
                        { key: "c", text: "High $p\\mathrm{CO_2}$, low pH, high temperature, high 2,3-BPG" },
                        { key: "d", text: "Low $p\\mathrm{CO_2}$, low pH, high temperature, low 2,3-BPG" }
                    ],
                    answer: "c",
                    explanation: "The <strong>Bohr effect</strong>: a rise in $p\\mathrm{CO_2}$ and in $\\mathrm{H^+}$ (fall in pH), together with a rise in temperature and in 2,3-bisphosphoglycerate, lowers the affinity of haemoglobin for oxygen. The curve shifts right, so more $\\mathrm{O_2}$ is unloaded exactly where metabolism is fastest. The opposite conditions in the lung favour loading."
                },
                {
                    id: "d22z18",
                    text: "Of the carbon dioxide carried from the tissues to the lungs, the largest fraction travels as:",
                    options: [
                        { key: "a", text: "Carbamino-haemoglobin, about 70 per cent" },
                        { key: "b", text: "Bicarbonate in the plasma, about 70 per cent" },
                        { key: "c", text: "Carbonic acid held in the red cells, about 65 per cent" },
                        { key: "d", text: "Physical solution in the plasma, about 45 per cent" }
                    ],
                    answer: "b",
                    explanation: "Carbonic anhydrase in the erythrocyte converts $\\mathrm{CO_2}$ and water to $\\mathrm{H_2CO_3}$, which dissociates to $\\mathrm{HCO_3^-}$ and $\\mathrm{H^+}$; the bicarbonate diffuses out into the plasma in exchange for chloride (chloride shift/Hamburger phenomenon). About <strong>70 %</strong> travels this way, roughly 20–25 % as carbamino compounds and only about 7 % in physical solution."
                },
                {
                    id: "d22z19",
                    text: "For a subject with tidal volume 500 mL, inspiratory reserve 3000 mL, expiratory reserve 1100 mL and residual volume 1200 mL, the functional residual capacity and the vital capacity are respectively:",
                    options: [
                        { key: "a", text: "1700 mL and 4600 mL" },
                        { key: "b", text: "2300 mL and 5800 mL" },
                        { key: "c", text: "3500 mL and 4600 mL" },
                        { key: "d", text: "2300 mL and 4600 mL" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{FRC = ERV + RV = 1100 + 1200 = 2300\\ mL}$ (the air left in the lungs after a normal expiration). $\\mathrm{VC = IRV + TV + ERV = 3000 + 500 + 1100 = 4600\\ mL}$. Note that total lung capacity would be $4600 + 1200 = 5800$ mL and inspiratory capacity $3000 + 500 = 3500$ mL — the values offered as distractors."
                },
                {
                    id: "d22z20",
                    text: "Haemoglobin that has just given up its oxygen in the tissues picks up carbon dioxide more readily than oxygenated haemoglobin does. This relationship is called the:",
                    options: [
                        { key: "a", text: "Haldane effect, aiding $\\mathrm{CO_2}$ loading in tissues" },
                        { key: "b", text: "Bohr effect, aiding $\\mathrm{CO_2}$ loading in tissues" },
                        { key: "c", text: "Hamburger shift, aiding $\\mathrm{CO_2}$ release in lungs" },
                        { key: "d", text: "Root effect, aiding $\\mathrm{O_2}$ release in the tissues" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Haldane effect</strong> is the reciprocal of the Bohr effect: deoxygenated haemoglobin is a better proton acceptor and forms carbamino compounds more readily, so it carries more $\\mathrm{CO_2}$. In the lung, oxygenation of Hb therefore <em>drives $\\mathrm{CO_2}$ off</em>. The Bohr effect concerns the influence of $\\mathrm{CO_2}$/pH on oxygen affinity."
                },
                {
                    id: "d22z21",
                    text: "Destruction of the pneumotaxic centre in an experimental animal, with the vagi cut, would result in:",
                    options: [
                        { key: "a", text: "Complete and permanent cessation of all breathing" },
                        { key: "b", text: "Rapid shallow breathing with a shortened inspiration" },
                        { key: "c", text: "Prolonged gasping inspirations with brief expirations" },
                        { key: "d", text: "Breathing that becomes entirely voluntary in control" }
                    ],
                    answer: "c",
                    explanation: "The <strong>pneumotaxic centre of the pons</strong> limits the duration of inspiration by switching off the inspiratory ramp. Removing it (together with the vagal Hering–Breuer input) leaves the apneustic centre unopposed, giving <em>apneusis</em> — long, gasping inspirations interrupted by short expirations. The basic rhythm still comes from the medullary respiratory centre, so breathing does not stop."
                },
                {
                    id: "d22z22",
                    text: "The central chemosensitive area near the medulla and the carotid/aortic bodies differ in that:",
                    options: [
                        { key: "a", text: "Both are stimulated mainly by a fall in arterial $p\\mathrm{O_2}$" },
                        { key: "b", text: "The central area responds to $\\mathrm{H^+}/\\mathrm{CO_2}$, the bodies to low $p\\mathrm{O_2}$" },
                        { key: "c", text: "The central area responds to low $p\\mathrm{O_2}$, the bodies to $\\mathrm{H^+}$" },
                        { key: "d", text: "Both are insensitive to $\\mathrm{CO_2}$ but respond to blood pressure" }
                    ],
                    answer: "b",
                    explanation: "The <strong>chemosensitive area</strong> of the medulla is highly sensitive to the $\\mathrm{H^+}$ generated from $\\mathrm{CO_2}$ in the cerebrospinal fluid and is the main minute-to-minute regulator. The peripheral <strong>carotid and aortic bodies</strong> become important when arterial $p\\mathrm{O_2}$ falls markedly (as at high altitude); they also sense $\\mathrm{H^+}$ but are the only receptors that detect hypoxia."
                },
                {
                    id: "d22z23",
                    text: "A long-standing smoker is breathless on exertion; his chest X-ray shows over-inflated lungs and his expiration is prolonged. The essential lesion in emphysema is:",
                    options: [
                        { key: "a", text: "Spasm of bronchiolar smooth muscle triggered by allergens" },
                        { key: "b", text: "Fibrous thickening of the pleura restricting expansion" },
                        { key: "c", text: "Accumulation of fluid in the alveoli after infection" },
                        { key: "d", text: "Breakdown of alveolar walls, cutting exchange surface" }
                    ],
                    answer: "d",
                    explanation: "In <strong>emphysema</strong> the inter-alveolar septa are destroyed (cigarette smoke inactivates $\\alpha_1$-antitrypsin, letting elastase digest the elastic tissue). Many small alveoli fuse into few large air sacs, so the exchange surface and the elastic recoil both fall — hence over-inflation and difficult, prolonged expiration. Bronchospasm is asthma; alveolar exudate is pneumonia."
                },
                {
                    id: "d22z24",
                    text: "Asthma and chronic bronchitis are both obstructive disorders, but they are distinguished by the fact that:",
                    options: [
                        { key: "a", text: "Asthma is a reversible bronchiolar spasm with inflammation" },
                        { key: "b", text: "Asthma always follows a bacterial infection of the bronchi" },
                        { key: "c", text: "Bronchitis is caused by loss of surfactant from the alveoli" },
                        { key: "d", text: "Bronchitis is marked by the collapse of the alveolar septa" }
                    ],
                    answer: "a",
                    explanation: "<strong>Asthma</strong> is an allergic/hypersensitivity disorder: the bronchiolar smooth muscle goes into spasm, the mucosa becomes oedematous and mucus is over-produced, but the narrowing is largely <em>reversible</em> with bronchodilators. <strong>Chronic bronchitis</strong> is persistent inflammation and hypersecretion of the bronchi (chiefly from smoking), with a productive cough; septal destruction is emphysema."
                },
                {
                    id: "d22z25",
                    text: "Carbon monoxide is lethal at very low concentration because it not only binds haemoglobin about 210 times more firmly than oxygen but also:",
                    options: [
                        { key: "a", text: "Shifts the dissociation curve right, so oxygen is wasted" },
                        { key: "b", text: "Destroys the haem iron, converting it to methaemoglobin" },
                        { key: "c", text: "Shifts the curve left, so the rest of the $\\mathrm{O_2}$ is not released" },
                        { key: "d", text: "Blocks carbonic anhydrase, so $\\mathrm{CO_2}$ is retained" }
                    ],
                    answer: "c",
                    explanation: "Carboxyhaemoglobin does more than reduce the number of usable binding sites: the remaining sites hold their oxygen more tightly, so the curve is displaced to the <strong>left</strong> and tissue unloading is crippled. A patient may therefore be gravely hypoxic while still looking pink. Methaemoglobin formation (haem $\\mathrm{Fe^{3+}}$) is a different poisoning, e.g. by nitrites."
                },
                {
                    id: "d22z26",
                    text: "A man breathes 12 times a minute with a tidal volume of 500 mL; his anatomical dead space is 150 mL. His pulmonary ventilation and alveolar ventilation per minute are:",
                    options: [
                        { key: "a", text: "6000 mL and 1800 mL" },
                        { key: "b", text: "6000 mL and 4200 mL" },
                        { key: "c", text: "4200 mL and 1800 mL" },
                        { key: "d", text: "7800 mL and 6000 mL" }
                    ],
                    answer: "b",
                    explanation: "Pulmonary (minute) ventilation $= 500 \\times 12 = 6000\\ \\mathrm{mL\\,min^{-1}}$. Only the air that reaches the exchange surface counts, so alveolar ventilation $= (500 - 150) \\times 12 = 350 \\times 12 = 4200\\ \\mathrm{mL\\,min^{-1}}$. Deep slow breathing is therefore more efficient than rapid shallow breathing at the same minute volume, because the dead space is paid for fewer times."
                },
                {
                    id: "d22z27",
                    text: "The sino-atrial node is called the pacemaker of the heart because, among all the cardiac tissues, it:",
                    options: [
                        { key: "a", text: "Depolarises spontaneously at the fastest intrinsic rate" },
                        { key: "b", text: "Conducts the impulse to the ventricles most rapidly" },
                        { key: "c", text: "Alone receives fibres from the vagus and the sympathetic" },
                        { key: "d", text: "Has the longest refractory period of the whole heart" }
                    ],
                    answer: "a",
                    explanation: "All nodal tissue shows autorhythmicity, but the <strong>SA node</strong> fires about 70–75 times a minute, the AV node about 40–60 and the Purkinje system only 20–40. The fastest pacemaker captures the slower ones, so the SA node sets the rhythm. Fastest <em>conduction</em> belongs to the Purkinje fibres, and both nodes are innervated by the autonomic nerves."
                },
                {
                    id: "d22z28",
                    text: "In a cardiac cycle of 0.8 s at 72 beats per minute, the durations of atrial systole, ventricular systole and joint diastole are respectively:",
                    options: [
                        { key: "a", text: "0.3 s, 0.1 s and 0.4 s" },
                        { key: "b", text: "0.1 s, 0.4 s and 0.3 s" },
                        { key: "c", text: "0.1 s, 0.3 s and 0.4 s" },
                        { key: "d", text: "0.2 s, 0.3 s and 0.3 s" }
                    ],
                    answer: "c",
                    explanation: "Atrial systole occupies <strong>0.1 s</strong>, ventricular systole <strong>0.3 s</strong> and the joint (complete) diastole <strong>0.4 s</strong>, adding up to 0.8 s. Because the ventricles rest for 0.5 s of every cycle (0.4 s joint diastole + the 0.1 s of atrial systole), the heart can beat for a lifetime without fatigue; a faster rate shortens diastole first."
                },
                {
                    id: "d22z29",
                    text: "The first heart sound 'LUBB' is low-pitched and long, the second 'DUP' sharp and short. They are produced respectively by:",
                    options: [
                        { key: "a", text: "Opening of the AV valves and of the semilunar valves" },
                        { key: "b", text: "Closure of the AV valves and of the semilunar valves" },
                        { key: "c", text: "Closure of the semilunar valves and of the AV valves" },
                        { key: "d", text: "Rush of blood into the atria and then into the aorta" }
                    ],
                    answer: "b",
                    explanation: "The <strong>first sound</strong> marks the <em>closure of the tricuspid and bicuspid valves</em> at the beginning of ventricular systole; the <strong>second sound</strong> marks the closure of the aortic and pulmonary <em>semilunar valves</em> at the end of systole. Valve opening is silent; a murmur indicates a leaking or narrowed valve."
                },
                {
                    id: "d22z30",
                    text: "During exercise a trained athlete's stroke volume rises from 70 mL to 120 mL and heart rate from 72 to 150 per minute. His cardiac output rises from about:",
                    options: [
                        { key: "a", text: "5.0 L/min to 12.0 L/min" },
                        { key: "b", text: "5.0 L/min to 15.0 L/min" },
                        { key: "c", text: "7.0 L/min to 18.0 L/min" },
                        { key: "d", text: "5.0 L/min to 18.0 L/min" }
                    ],
                    answer: "d",
                    explanation: "Cardiac output $=$ stroke volume $\\times$ heart rate. At rest $70 \\times 72 = 5040\\ \\mathrm{mL} \\approx 5\\ \\mathrm{L\\,min^{-1}}$; during exercise $120 \\times 150 = 18000\\ \\mathrm{mL} = 18\\ \\mathrm{L\\,min^{-1}}$. The rise comes from both factors, and the stroke-volume increase reflects Starling's law — a greater end-diastolic filling stretches the fibres and strengthens the contraction."
                },
                {
                    id: "d22z31",
                    text: "A ventricle holds 130 mL at the end of diastole and 60 mL at the end of systole. Its stroke volume and ejection fraction are:",
                    options: [
                        { key: "a", text: "70 mL and about 54 per cent" },
                        { key: "b", text: "60 mL and about 46 per cent" },
                        { key: "c", text: "70 mL and about 46 per cent" },
                        { key: "d", text: "130 mL and about 100 per cent" }
                    ],
                    answer: "a",
                    explanation: "Stroke volume $=$ EDV $-$ ESV $= 130 - 60 = 70$ mL. Ejection fraction $= \\dfrac{70}{130} \\times 100 \\approx 54\\%$. Note that a normal ventricle never empties completely; the residual volume is what allows stroke volume to rise sharply during exercise. An ejection fraction below about 40 % indicates heart failure."
                },
                {
                    id: "d22z32",
                    text: "Immediately after the AV valves shut, the ventricle contracts for a short period during which its volume does not change at all. This happens because:",
                    options: [
                        { key: "a", text: "The papillary muscles hold the ventricle wall rigid" },
                        { key: "b", text: "Blood flows back into the atria through the open valves" },
                        { key: "c", text: "All four valves are shut until aortic pressure is exceeded" },
                        { key: "d", text: "The semilunar valves open the moment systole begins" }
                    ],
                    answer: "c",
                    explanation: "This is <strong>isovolumetric (isometric) contraction</strong>. With the AV valves already closed and the semilunar valves still shut, the trapped blood cannot move, so tension and pressure rise without a change in volume. Only when ventricular pressure exceeds that in the aorta (~80 mm Hg) do the semilunar valves open and ejection begins."
                },
                {
                    id: "d22z33",
                    text: "In a normal electrocardiogram the repolarisation of the atria produces no separate wave, because it:",
                    options: [
                        { key: "a", text: "Occurs so slowly that it is spread out beyond detection" },
                        { key: "b", text: "Coincides with the QRS complex and is buried in it" },
                        { key: "c", text: "Coincides with the T wave, which it simply enlarges" },
                        { key: "d", text: "Does not occur at all, since the atria stay depolarised" }
                    ],
                    answer: "b",
                    explanation: "The P wave is atrial depolarisation, the <strong>QRS complex</strong> ventricular depolarisation and the T wave ventricular repolarisation. Atrial repolarisation happens at the same time as the much larger ventricular depolarisation, so its small deflection is <strong>masked by the QRS complex</strong>. Counting the QRS complexes in a known time gives the heart rate."
                },
                {
                    id: "d22z34",
                    text: "The impulse is delayed for about 0.1 s at the atrio-ventricular node. The functional value of this 'nodal delay' is that it:",
                    options: [
                        { key: "a", text: "Prevents the impulse from returning to the SA node" },
                        { key: "b", text: "Allows the coronary arteries to be filled with blood" },
                        { key: "c", text: "Gives the semilunar valves time to close completely" },
                        { key: "d", text: "Lets the atria empty before the ventricles contract" }
                    ],
                    answer: "d",
                    explanation: "The AV node conducts most slowly of all cardiac tissue (about $0.05\\ \\mathrm{m\\,s^{-1}}$ against $4\\ \\mathrm{m\\,s^{-1}}$ in the Purkinje fibres). The resulting pause lets <strong>atrial systole finish and the ventricles fill</strong> before ventricular contraction starts. The AV node is also the only electrical bridge between atria and ventricles, the fibrous ring insulating them elsewhere."
                },
                {
                    id: "d22z35",
                    text: "Unlike most organs, the wall of the left ventricle receives nearly all of its own blood supply during:",
                    options: [
                        { key: "a", text: "Ventricular systole, when aortic pressure is highest" },
                        { key: "b", text: "Atrial systole, when the ventricle is being filled" },
                        { key: "c", text: "Diastole, when the compressed vessels reopen" },
                        { key: "d", text: "Isovolumetric relaxation, before the AV valves open" }
                    ],
                    answer: "c",
                    explanation: "During systole the contracting myocardium squeezes the intramural branches of the coronary arteries shut, so left-ventricular perfusion occurs mainly in <strong>diastole</strong>, when the vessels reopen and the aortic pressure behind the closed valve drives blood into the coronary ostia. This is why a very fast heart rate — which shortens diastole — can precipitate angina."
                },
                {
                    id: "d22z36",
                    text: "For a blood pressure of 120/80 mm Hg, the pulse pressure and the mean arterial pressure are approximately:",
                    options: [
                        { key: "a", text: "40 mm Hg and 93 mm Hg" },
                        { key: "b", text: "40 mm Hg and 100 mm Hg" },
                        { key: "c", text: "200 mm Hg and 93 mm Hg" },
                        { key: "d", text: "80 mm Hg and 107 mm Hg" }
                    ],
                    answer: "a",
                    explanation: "Pulse pressure $=$ systolic $-$ diastolic $= 120 - 80 = 40$ mm Hg. Because the heart spends longer in diastole than in systole, the mean is not the arithmetic average but $\\mathrm{MAP} = \\mathrm{DP} + \\frac{1}{3}\\mathrm{PP} = 80 + 13.3 \\approx 93$ mm Hg. Blood pressure is measured with a sphygmomanometer over the brachial artery."
                },
                {
                    id: "d22z37",
                    text: "Which statement about the human vascular system is correct?",
                    options: [
                        { key: "a", text: "Every artery of the body carries oxygenated blood" },
                        { key: "b", text: "Veins have a thicker tunica media than arteries do" },
                        { key: "c", text: "Arteries carry blood at low pressure and bear valves" },
                        { key: "d", text: "The hepatic portal vein begins and ends in capillaries" }
                    ],
                    answer: "d",
                    explanation: "A <strong>portal vein</strong> is one that starts in a capillary bed and ends in another instead of returning to the heart; the hepatic portal vein collects from the gut capillaries and breaks up again in the liver sinusoids. The pulmonary artery carries deoxygenated blood, arteries have the thicker muscular <em>tunica media</em> and high pressure, and it is the veins that carry semilunar valves."
                },
                {
                    id: "d22z38",
                    text: "A person of blood group AB, Rh-positive is often described as a 'universal recipient'. The immunological basis is that his plasma:",
                    options: [
                        { key: "a", text: "Contains both anti-A and anti-B agglutinins" },
                        { key: "b", text: "Contains neither anti-A nor anti-B agglutinins" },
                        { key: "c", text: "Contains anti-D agglutinin but no anti-A or anti-B" },
                        { key: "d", text: "Contains agglutinogens A and B but no agglutinins" }
                    ],
                    answer: "b",
                    explanation: "Group AB red cells carry <em>both</em> antigens A and B, so by Landsteiner's rule the plasma carries <strong>neither antibody</strong> and will not agglutinate donor cells of any ABO group. Being Rh-positive, he also lacks anti-D. Agglutinogens are on the cells, never in the plasma; group O negative is the universal donor for the converse reason."
                },
                {
                    id: "d22z39",
                    text: "An Rh-negative woman married to a homozygous Rh-positive man is pregnant for the second time. The danger to this foetus is that:",
                    options: [
                        { key: "a", text: "Foetal anti-D antibodies will destroy the mother's cells" },
                        { key: "b", text: "The mother's IgM anti-D cannot cross the placenta at all" },
                        { key: "c", text: "Maternal anti-D crosses the placenta and haemolyses its cells" },
                        { key: "d", text: "The first child is affected far more severely than the second" }
                    ],
                    answer: "c",
                    explanation: "Foetal Rh-positive cells leaking into the mother at the <em>first</em> delivery sensitise her; she makes anti-D. In a later pregnancy this <strong>IgG anti-D crosses the placenta</strong> and destroys the foetal erythrocytes, producing <em>erythroblastosis foetalis</em>. The first child usually escapes. Giving the mother anti-Rh antibody (anti-D immunoglobulin) just after the first delivery prevents sensitisation."
                },
                {
                    id: "d22z40",
                    text: "A man of blood group A and a woman of blood group B have a child of blood group O. The genotypes of the parents must be:",
                    options: [
                        { key: "a", text: "$\\mathrm{I^A i}$ and $\\mathrm{I^B i}$" },
                        { key: "b", text: "$\\mathrm{I^A I^A}$ and $\\mathrm{I^B I^B}$" },
                        { key: "c", text: "$\\mathrm{I^A I^A}$ and $\\mathrm{I^B i}$" },
                        { key: "d", text: "$\\mathrm{I^A I^B}$ and $\\mathrm{ii}$" }
                    ],
                    answer: "a",
                    explanation: "Group O is the double recessive $\\mathrm{ii}$, so the child must have received an $i$ allele from each parent. Both parents are therefore <strong>heterozygous</strong>: $\\mathrm{I^A i} \\times \\mathrm{I^B i}$, a cross that gives AB : A : B : O in the ratio 1 : 1 : 1 : 1. $\\mathrm{I^A}$ and $\\mathrm{I^B}$ are codominant to each other and both dominant over $i$."
                },
                {
                    id: "d22z41",
                    text: "A middle-aged man gets crushing chest pain on climbing stairs which is relieved by rest. Angina pectoris of this kind is best explained as:",
                    options: [
                        { key: "a", text: "Inflammation of the pericardium irritated by movement" },
                        { key: "b", text: "A congenital hole between the two ventricles" },
                        { key: "c", text: "Failure of the SA node to raise the heart rate on effort" },
                        { key: "d", text: "Myocardial demand outrunning a narrowed coronary supply" }
                    ],
                    answer: "d",
                    explanation: "Atherosclerotic plaques of cholesterol and fibrous tissue narrow the coronary arteries. At rest the reduced flow suffices, but on exertion the myocardium becomes <strong>ischaemic</strong> and the pain of angina appears, easing when the demand falls. If a plaque ruptures and a thrombus occludes the artery completely, the muscle dies — myocardial infarction (heart attack)."
                },
                {
                    id: "d22z42",
                    text: "Persistent hypertension is diagnosed when the resting pressure repeatedly exceeds:",
                    options: [
                        { key: "a", text: "120/80 mm Hg, the level defining a hypertensive crisis" },
                        { key: "b", text: "140/90 mm Hg, straining the heart, arteries and kidneys" },
                        { key: "c", text: "160/110 mm Hg, below which no damage can ever occur" },
                        { key: "d", text: "90/60 mm Hg, the level at which afterload doubles" }
                    ],
                    answer: "b",
                    explanation: "The conventional cut-off is <strong>140/90 mm Hg</strong>; 120/80 is the normal value. Sustained high pressure raises the afterload, causing left-ventricular hypertrophy and eventually failure, and it damages the arterial walls, the retina and the renal glomeruli. It is largely symptomless — hence the label 'silent killer'."
                },
                {
                    id: "d22z43",
                    text: "A desert rodent produces urine many times more concentrated than ours. In such an animal one would expect a very high proportion of nephrons that are:",
                    options: [
                        { key: "a", text: "Cortical, with a short loop and no vasa recta at all" },
                        { key: "b", text: "Cortical, with a wide glomerulus and a long tubule" },
                        { key: "c", text: "Juxtamedullary, with long loops dipping into the medulla" },
                        { key: "d", text: "Juxtamedullary, but with the loop confined to the cortex" }
                    ],
                    answer: "c",
                    explanation: "Only the <strong>juxtamedullary nephrons</strong> — about 15 % in man — have long loops of Henle accompanied by the hairpin <em>vasa recta</em>, and it is these that build and maintain the medullary osmotic gradient. The longer the loop, the steeper the gradient and the more concentrated the urine, which is why <em>Kangaroo rat</em> kidneys have very long loops."
                },
                {
                    id: "d22z44",
                    text: "The two kidneys filter about 125 mL of plasma per minute, yet only about 1.5 litres of urine is passed in a day. This means that the tubules reabsorb nearly:",
                    options: [
                        { key: "a", text: "180 litres, which is about 75 per cent of the filtrate" },
                        { key: "b", text: "178.5 litres, which is about 99 per cent of the filtrate" },
                        { key: "c", text: "125 litres, which is about 85 per cent of the filtrate" },
                        { key: "d", text: "18 litres, which is about 90 per cent of the filtrate" }
                    ],
                    answer: "b",
                    explanation: "$125\\ \\mathrm{mL\\,min^{-1}} \\times 60 \\times 24 = 180\\,000$ mL $= 180$ litres of glomerular filtrate a day. As only 1.5 L leaves as urine, $178.5$ L — about <strong>99 %</strong> — is reabsorbed, mostly in the proximal convoluted tubule. This enormous turnover lets the kidney fine-tune the composition of the plasma, not merely remove wastes."
                },
                {
                    id: "d22z45",
                    text: "In a glomerulus the hydrostatic pressure of the blood is 55 mm Hg, the colloid osmotic pressure of the plasma proteins 30 mm Hg and the hydrostatic pressure inside the capsule 15 mm Hg. The effective filtration pressure is:",
                    options: [
                        { key: "a", text: "100 mm Hg, the sum of all the three pressures" },
                        { key: "b", text: "40 mm Hg, since only the capsular pressure opposes" },
                        { key: "c", text: "25 mm Hg, since only the osmotic pressure opposes" },
                        { key: "d", text: "10 mm Hg, the blood pressure minus the two opposing ones" }
                    ],
                    answer: "d",
                    explanation: "Filtration is driven by the glomerular hydrostatic pressure and opposed by both the plasma colloid osmotic pressure and the pressure already inside Bowman's capsule: $55 - (30 + 15) = \\mathbf{10}$ mm Hg. The margin is small, so a fall in blood pressure or a rise in capsular pressure (as in a stone blocking the ureter) can stop filtration altogether."
                },
                {
                    id: "d22z46",
                    text: "The proximal convoluted tubule is lined by cells with a dense brush border and huge numbers of mitochondria. Correspondingly, it is the segment where:",
                    options: [
                        { key: "a", text: "All the glucose and amino acids of the filtrate are recovered" },
                        { key: "b", text: "The final concentration of the urine is decided by ADH" },
                        { key: "c", text: "Potassium is secreted under the control of aldosterone" },
                        { key: "d", text: "Water leaves passively while salt is actively pumped in" }
                    ],
                    answer: "a",
                    explanation: "The PCT reabsorbs essentially <strong>100 % of the glucose, amino acids and vitamins</strong> plus about 70–80 % of the water and electrolytes; the microvilli give the surface and the mitochondria the ATP for this bulk work. ADH-controlled concentration and aldosterone-driven $\\mathrm{K^+}$ secretion belong to the distal tubule and collecting duct."
                },
                {
                    id: "d22z47",
                    text: "The counter-current mechanism depends on a sharp difference in permeability between the two limbs of the loop of Henle. Correctly stated, the:",
                    options: [
                        { key: "a", text: "Descending limb is impermeable to water but pumps out salt" },
                        { key: "b", text: "Ascending limb is freely permeable to water and to salt" },
                        { key: "c", text: "Descending limb loses water; the ascending limb pumps out salt" },
                        { key: "d", text: "Both limbs lose water, which the vasa recta carry away" }
                    ],
                    answer: "c",
                    explanation: "The thin <strong>descending limb</strong> is permeable to water but not to salt, so the filtrate becomes progressively more concentrated as it dips into the hyperosmotic medulla. The thick <strong>ascending limb</strong> is impermeable to water and actively transports $\\mathrm{Na^+}$ and $\\mathrm{Cl^-}$ out, so the fluid entering the DCT is hypotonic. The vasa recta run counter-current alongside and remove water without washing out the gradient."
                },
                {
                    id: "d22z48",
                    text: "A patient passes 10 litres of very dilute urine a day and is constantly thirsty, but his blood sugar is normal. The most likely defect is:",
                    options: [
                        { key: "a", text: "Excess aldosterone causing salt and water loss" },
                        { key: "b", text: "Failure of the glomerulus, letting protein escape" },
                        { key: "c", text: "Over-secretion of atrial natriuretic factor by the heart" },
                        { key: "d", text: "Lack of ADH, so the collecting duct stays impermeable" }
                    ],
                    answer: "d",
                    explanation: "This is <strong>diabetes insipidus</strong>. Antidiuretic hormone (vasopressin) from the neurohypophysis inserts aquaporin channels into the distal tubule and collecting duct so that water can follow the medullary gradient. Without it the duct stays water-tight and a large volume of dilute urine escapes. Glycosuria is absent, which rules out diabetes mellitus."
                },
                {
                    id: "d22z49",
                    text: "A fall in the blood flow through the afferent arteriole sets off the renin–angiotensin mechanism. The correct sequence of events is:",
                    options: [
                        { key: "a", text: "Renin from the adrenal cortex $\\rightarrow$ angiotensin $\\rightarrow$ ADH release" },
                        { key: "b", text: "Renin from JG cells $\\rightarrow$ angiotensin II $\\rightarrow$ aldosterone $\\rightarrow$ $\\mathrm{Na^+}$ retention" },
                        { key: "c", text: "Renin from the macula densa $\\rightarrow$ vasodilation $\\rightarrow$ a fall in pressure" },
                        { key: "d", text: "Renin from the liver $\\rightarrow$ angiotensinogen $\\rightarrow$ loss of $\\mathrm{Na^+}$ in urine" }
                    ],
                    answer: "b",
                    explanation: "The <strong>juxtaglomerular cells</strong> of the afferent arteriole release renin, which converts liver angiotensinogen to angiotensin I; ACE in the lung makes angiotensin II. This is a powerful vasoconstrictor and it stimulates the adrenal cortex to release <strong>aldosterone</strong>, which promotes $\\mathrm{Na^+}$ (and hence water) reabsorption in the distal tubule — restoring blood volume and pressure."
                },
                {
                    id: "d22z50",
                    text: "Glucose appears in the urine of a diabetic only when the blood glucose exceeds about 180 mg per 100 mL. This 'renal threshold' exists because:",
                    options: [
                        { key: "a", text: "The tubular glucose carriers become saturated above it" },
                        { key: "b", text: "The glomerulus stops filtering glucose below that level" },
                        { key: "c", text: "Glucose is actively secreted into the tubule above it" },
                        { key: "d", text: "Insulin blocks glucose reabsorption above that value" }
                    ],
                    answer: "a",
                    explanation: "Glucose is filtered freely at every plasma level, but it is recovered by a <em>carrier-mediated active transport</em> in the PCT that has a fixed maximum ($T_m$). Once the filtered load exceeds the carriers' capacity, the surplus stays in the tubule and appears in the urine (<strong>glycosuria</strong>), dragging water with it osmotically — hence the polyuria and thirst of untreated diabetes mellitus."
                },
                {
                    id: "d22z51",
                    text: "Micturition is described as a reflex act that comes under voluntary control in the older child. The stimulus that initiates the reflex is:",
                    options: [
                        { key: "a", text: "A rise in the osmolarity of the blood reaching the brain" },
                        { key: "b", text: "Contraction of the external sphincter of skeletal muscle" },
                        { key: "c", text: "Stretch receptors of the bladder wall firing as it fills" },
                        { key: "d", text: "Peristaltic waves of the ureters pushing urine forward" }
                    ],
                    answer: "c",
                    explanation: "When about 300–400 mL has collected, <strong>stretch receptors</strong> in the bladder wall send impulses to the CNS; the returning parasympathetic motor signals contract the detrusor muscle and relax the internal sphincter. The <em>external</em> sphincter is skeletal and voluntarily controlled, which is why the act can be postponed once the cortical pathways have matured."
                },
                {
                    id: "d22z52",
                    text: "In a patient whose kidneys have failed, haemodialysis works on the principle that:",
                    options: [
                        { key: "a", text: "Blood is pumped through a filter that removes whole cells" },
                        { key: "b", text: "Wastes diffuse into a dialysing fluid lacking those wastes" },
                        { key: "c", text: "Urea is chemically destroyed by enzymes in the machine" },
                        { key: "d", text: "The dialysing fluid supplies fresh nephrons to the blood" }
                    ],
                    answer: "b",
                    explanation: "The artificial kidney passes heparinised blood along a cellophane membrane bathed by a dialysate that has the same composition as normal plasma <em>except</em> that it contains no urea, creatinine or excess ions. These therefore <strong>diffuse out down their concentration gradients</strong>, while glucose, salts and proteins are retained. The blood is heparinised on the way in and given an anti-heparin on the way back."
                },
                {
                    id: "d22z53",
                    text: "When the atrial walls are stretched by an increased blood volume, the atrial natriuretic factor released by them:",
                    options: [
                        { key: "a", text: "Reinforces the action of aldosterone on the tubule" },
                        { key: "b", text: "Constricts the afferent arteriole and lowers filtration" },
                        { key: "c", text: "Increases ADH output so that water is conserved" },
                        { key: "d", text: "Causes vasodilation and increased loss of $\\mathrm{Na^+}$ in urine" }
                    ],
                    answer: "d",
                    explanation: "<strong>ANF</strong> is the physiological antagonist of the renin–angiotensin–aldosterone system. It dilates blood vessels, inhibits renin and aldosterone secretion, and promotes the excretion of sodium and water — thereby lowering blood volume and pressure back to normal. Its release is triggered directly by the stretch of the atrial wall."
                },
                {
                    id: "d22z54",
                    text: "The substance whose renal clearance is taken as the true measure of the glomerular filtration rate is one that is:",
                    options: [
                        { key: "a", text: "Freely filtered but neither reabsorbed nor secreted, e.g. inulin" },
                        { key: "b", text: "Filtered and then completely reabsorbed, e.g. glucose" },
                        { key: "c", text: "Not filtered at all but wholly secreted, e.g. plasma protein" },
                        { key: "d", text: "Filtered and also strongly secreted, e.g. para-amino hippurate" }
                    ],
                    answer: "a",
                    explanation: "If a solute is filtered freely and the tubule neither adds nor removes any of it, everything appearing in the urine must have come through the glomeruli, so its clearance equals the <strong>GFR</strong> — this is true of <em>inulin</em> (and approximately of creatinine). Glucose has zero clearance below the threshold, and PAH is used instead to estimate the renal <em>plasma flow</em> because it is also secreted."
                },
                {
                    id: "d22z55",
                    text: "The resting membrane potential of a neuron is about $-70$ mV, the inside being negative. The chief reason for this is that:",
                    options: [
                        { key: "a", text: "The sodium–potassium pump moves 2 $\\mathrm{Na^+}$ out for 3 $\\mathrm{K^+}$ in" },
                        { key: "b", text: "The membrane is far more permeable to $\\mathrm{K^+}$ than to $\\mathrm{Na^+}$" },
                        { key: "c", text: "$\\mathrm{Cl^-}$ is actively pumped into the axoplasm against its gradient" },
                        { key: "d", text: "The voltage-gated $\\mathrm{Na^+}$ channels stay wide open at rest" }
                    ],
                    answer: "b",
                    explanation: "The pump does establish the gradients (extruding <strong>3 $\\mathrm{Na^+}$ for every 2 $\\mathrm{K^+}$ taken in</strong>, note the direction), but the potential itself arises because the resting membrane has many open $\\mathrm{K^+}$ leak channels and very few $\\mathrm{Na^+}$ ones. $\\mathrm{K^+}$ therefore diffuses out, leaving the large negative organic anions behind and making the interior negative. The voltage-gated $\\mathrm{Na^+}$ channels are shut at rest."
                },
                {
                    id: "d22z56",
                    text: "During the rising (depolarising) phase of an action potential the membrane potential swings to about $+30$ mV. This overshoot is caused by:",
                    options: [
                        { key: "a", text: "A sudden outflow of $\\mathrm{K^+}$ through voltage-gated channels" },
                        { key: "b", text: "Closure of the $\\mathrm{Na^+}$ channels and opening of $\\mathrm{Cl^-}$ channels" },
                        { key: "c", text: "An accelerated working of the sodium–potassium exchange pump" },
                        { key: "d", text: "A rapid inflow of $\\mathrm{Na^+}$ once the threshold is crossed" }
                    ],
                    answer: "d",
                    explanation: "A stimulus that depolarises the membrane to about $-55$ mV opens the voltage-gated <strong>$\\mathrm{Na^+}$ channels</strong>; sodium rushes in down both its electrical and its chemical gradient in a regenerative burst, driving the potential positive. These channels then inactivate and the delayed $\\mathrm{K^+}$ channels open, producing repolarisation and a brief hyperpolarisation."
                },
                {
                    id: "d22z57",
                    text: "A myelinated fibre conducts an impulse far faster than an unmyelinated fibre of the same diameter because in it the impulse:",
                    options: [
                        { key: "a", text: "Jumps from one node of Ranvier to the next" },
                        { key: "b", text: "Travels through the myelin sheath as an electric current" },
                        { key: "c", text: "Is carried by the Schwann cell cytoplasm around the axon" },
                        { key: "d", text: "Meets a lower threshold along the whole internodal length" }
                    ],
                    answer: "a",
                    explanation: "Myelin is a fatty insulator, so the ionic currents of the action potential can flow only at the bare <strong>nodes of Ranvier</strong>; the impulse therefore leaps node to node — <em>saltatory conduction</em> — reaching up to $120\\ \\mathrm{m\\,s^{-1}}$ instead of about $1\\ \\mathrm{m\\,s^{-1}}$. It also saves energy, because far fewer ions have to be pumped back. Destruction of myelin causes multiple sclerosis."
                },
                {
                    id: "d22z58",
                    text: "Transmission across a chemical synapse is strictly one-way. The immediate trigger for the release of the transmitter from the pre-synaptic knob is:",
                    options: [
                        { key: "a", text: "The binding of the transmitter to the post-synaptic receptor" },
                        { key: "b", text: "The efflux of $\\mathrm{K^+}$ during repolarisation of the knob" },
                        { key: "c", text: "The influx of $\\mathrm{Ca^{2+}}$ when the impulse reaches the knob" },
                        { key: "d", text: "The action of cholinesterase on the synaptic cleft fluid" }
                    ],
                    answer: "c",
                    explanation: "Depolarisation of the terminal opens voltage-gated <strong>calcium channels</strong>; the entering $\\mathrm{Ca^{2+}}$ makes the vesicles fuse with the pre-synaptic membrane and discharge acetylcholine (or another transmitter) by exocytosis. Because only the pre-synaptic side holds vesicles and only the post-synaptic side has receptors, conduction is unidirectional. Cholinesterase later destroys the transmitter to end the signal."
                },
                {
                    id: "d22z59",
                    text: "However strong the stimulus, a single neuron cannot be made to fire again during the absolute refractory period. The functional importance of this is that it:",
                    options: [
                        { key: "a", text: "Increases the amplitude of the next action potential" },
                        { key: "b", text: "Sets an upper limit to the frequency of the impulses" },
                        { key: "c", text: "Allows several sub-threshold stimuli to be summed up" },
                        { key: "d", text: "Makes the conduction velocity independent of diameter" }
                    ],
                    answer: "b",
                    explanation: "During the absolute refractory period (about 1 ms) the $\\mathrm{Na^+}$ channels are inactivated and cannot reopen, so no new impulse is possible. This <strong>caps the maximum firing frequency</strong> and also ensures that the impulse travels forward only, since the stretch just passed cannot be re-excited. Amplitude never varies anyway — the all-or-none law: stimulus strength is coded as frequency."
                },
                {
                    id: "d22z60",
                    text: "The cerebrospinal fluid that cushions the brain circulates chiefly in the space between:",
                    options: [
                        { key: "a", text: "The skull bone and the outer surface of the duramater" },
                        { key: "b", text: "The duramater and the arachnoid, the subdural space" },
                        { key: "c", text: "The piamater and the surface of the cerebral cortex" },
                        { key: "d", text: "The arachnoid and the piamater, the subarachnoid space" }
                    ],
                    answer: "d",
                    explanation: "The three meninges from outside in are <strong>duramater, arachnoid and piamater</strong>. CSF, secreted by the choroid plexuses into the ventricles, escapes into the <strong>subarachnoid space</strong> and bathes the whole CNS, acting as a shock absorber, a nutritive medium and a route for waste removal. A lumbar puncture withdraws it from this space."
                },
                {
                    id: "d22z61",
                    text: "In the cerebral hemispheres the grey matter lies outside and the white matter inside, the reverse of the arrangement in the spinal cord. The grey matter is grey because it consists mainly of:",
                    options: [
                        { key: "a", text: "Cell bodies, dendrites and unmyelinated fibres" },
                        { key: "b", text: "Myelinated axons running to and from the cord" },
                        { key: "c", text: "Neuroglial cells that store the lipid pigment" },
                        { key: "d", text: "Blood capillaries supplying the cortical surface" }
                    ],
                    answer: "a",
                    explanation: "Grey matter is made of <strong>neuron cell bodies, dendrites and non-myelinated fibres</strong>; the whiteness of white matter comes from the lipid myelin of the tracts. Folding the cerebral cortex into gyri and sulci packs a large grey surface into the skull. The two hemispheres are joined by the great transverse band of white fibres, the corpus callosum."
                },
                {
                    id: "d22z62",
                    text: "A wound damages a small region of the brain stem and the patient's heart rate, blood pressure and breathing all fail at once, though he can still stand and speak. The structure injured is the:",
                    options: [
                        { key: "a", text: "Cerebellum, seat of equilibrium and muscle coordination" },
                        { key: "b", text: "Hypothalamus, controlling hunger, thirst and temperature" },
                        { key: "c", text: "Medulla oblongata, containing the vital reflex centres" },
                        { key: "d", text: "Corpus striatum, regulating the tone of skeletal muscle" }
                    ],
                    answer: "c",
                    explanation: "The <strong>medulla oblongata</strong> houses the cardiac, vasomotor and respiratory centres together with the centres for swallowing, coughing, sneezing and vomiting — hence its name, the 'vital knot'. Damage there is rapidly fatal. Loss of the cerebellum would show as ataxia and loss of balance, which the question specifically excludes."
                },
                {
                    id: "d22z63",
                    text: "The hypothalamus is described as the bridge between the nervous and the endocrine systems mainly because it:",
                    options: [
                        { key: "a", text: "Secretes growth hormone straight into the blood stream" },
                        { key: "b", text: "Makes releasing factors that govern the adenohypophysis" },
                        { key: "c", text: "Relays every sensory impulse except smell to the cortex" },
                        { key: "d", text: "Contains the reticular formation controlling wakefulness" }
                    ],
                    answer: "b",
                    explanation: "Hypothalamic neurons secrete <strong>releasing and inhibiting factors</strong> that travel by the hypothalamo-hypophyseal portal vessels to the anterior pituitary, and they also manufacture ADH and oxytocin that are stored in the posterior lobe. It additionally controls hunger, thirst, body temperature, sleep and emotion. The relay of sensory impulses is the thalamus's job."
                },
                {
                    id: "d22z64",
                    text: "In a simple spinal reflex the impulse enters the cord by the dorsal root and leaves by the ventral root; it can never travel the other way. This is because:",
                    options: [
                        { key: "a", text: "The dorsal root has a thicker myelin sheath than the ventral" },
                        { key: "b", text: "The grey matter of the cord conducts in only one direction" },
                        { key: "c", text: "The ventral root is purely sensory and the dorsal purely motor" },
                        { key: "d", text: "The dorsal root is sensory, the ventral motor, with a synapse between" }
                    ],
                    answer: "d",
                    explanation: "This is the <strong>Bell–Magendie law</strong>: the dorsal (posterior) root, bearing the ganglion of sensory cell bodies, is afferent, and the ventral (anterior) root is efferent. Because the intervening chemical synapse transmits only from pre- to post-synaptic neuron, the reflex arc is one-way. The reflex is completed in the cord itself, the brain being informed only afterwards."
                },
                {
                    id: "d22z65",
                    text: "Of the twelve pairs of cranial nerves, the one that is mixed in function and extends far beyond the head into the thorax and abdomen is the:",
                    options: [
                        { key: "a", text: "Tenth or vagus nerve, the longest cranial nerve" },
                        { key: "b", text: "Second or optic nerve, the largest sensory nerve" },
                        { key: "c", text: "Seventh or facial nerve, supplying the tongue and face" },
                        { key: "d", text: "Fifth or trigeminal nerve, the largest mixed cranial nerve" }
                    ],
                    answer: "a",
                    explanation: "The <strong>vagus (X)</strong> is a mixed nerve carrying the main parasympathetic outflow to the heart, lungs and most of the gut — hence 'the wanderer'. The trigeminal is indeed the largest cranial nerve and is mixed, but it is confined to the head; the optic and auditory nerves are purely sensory, and the oculomotor group purely motor."
                },
                {
                    id: "d22z66",
                    text: "The sympathetic and parasympathetic divisions of the autonomic nervous system are distinguished anatomically by the fact that they are respectively:",
                    options: [
                        { key: "a", text: "Craniosacral and thoracolumbar in origin" },
                        { key: "b", text: "Both thoracolumbar, differing only in transmitter" },
                        { key: "c", text: "Thoracolumbar with short pre-ganglionic fibres, and craniosacral with long ones" },
                        { key: "d", text: "Thoracolumbar with long pre-ganglionic fibres, and craniosacral with short ones" }
                    ],
                    answer: "c",
                    explanation: "The <strong>sympathetic</strong> outflow leaves the cord from the thoracic and lumbar segments and relays in ganglia close to the vertebral column, so its pre-ganglionic fibres are short and post-ganglionic long. The <strong>parasympathetic</strong> outflow leaves through cranial nerves III, VII, IX, X and the sacral nerves and relays in ganglia in or near the target organ, so the pre-ganglionic fibres are long."
                },
                {
                    id: "d22z67",
                    text: "A student sitting for an examination shows a dry mouth, a racing heart, dilated pupils and cold, sweating palms. All these are effects of:",
                    options: [
                        { key: "a", text: "Parasympathetic discharge acting through acetylcholine" },
                        { key: "b", text: "Sympathetic discharge reinforced by adrenal medullary hormones" },
                        { key: "c", text: "Somatic motor discharge through the spinal reflex arcs" },
                        { key: "d", text: "Withdrawal of all autonomic tone from the visceral organs" }
                    ],
                    answer: "b",
                    explanation: "The <strong>sympathetic ('fight, flight or fright') system</strong>, whose post-ganglionic fibres are adrenergic, accelerates the heart, dilates the pupil and the bronchioles, diverts blood from gut and skin to skeletal muscle and inhibits salivation and digestion. Adrenaline and noradrenaline from the adrenal medulla — itself a modified sympathetic ganglion — prolong the same response."
                },
                {
                    id: "d22z68",
                    text: "The myelin sheath of a peripheral nerve fibre and that of a fibre inside the brain are laid down respectively by:",
                    options: [
                        { key: "a", text: "Astrocytes and microglial cells" },
                        { key: "b", text: "Oligodendrocytes and Schwann cells" },
                        { key: "c", text: "Ependymal cells and satellite cells" },
                        { key: "d", text: "Schwann cells and oligodendrocytes" }
                    ],
                    answer: "d",
                    explanation: "In the <strong>peripheral nervous system</strong> each internode of myelin is one <strong>Schwann cell</strong> wrapped repeatedly round the axon, its nucleus and cytoplasm forming the neurilemma; in the <strong>central nervous system</strong> an <strong>oligodendrocyte</strong> myelinates several axons at once and there is no neurilemma — one reason why cut CNS fibres regenerate so poorly. Astrocytes support and nourish; microglia are phagocytic."
                },
                {
                    id: "d22z69",
                    text: "Visual acuity is sharpest when the image falls on the fovea centralis, because this small pit of the retina:",
                    options: [
                        { key: "a", text: "Has the thickest layer of overlying nerve fibres" },
                        { key: "b", text: "Contains rods alone, packed at the highest density" },
                        { key: "c", text: "Contains only cones, each with its own bipolar cell" },
                        { key: "d", text: "Lies exactly where the optic nerve leaves the eyeball" }
                    ],
                    answer: "c",
                    explanation: "The <strong>fovea</strong>, in the middle of the yellow spot, holds tightly packed <strong>cones only</strong>, the overlying layers are pushed aside, and each cone has a private line to a bipolar and ganglion cell — so no detail is blurred by convergence. Rods, in contrast, share pathways: they give great sensitivity in dim light but poor resolution. The optic disc is the blind spot."
                },
                {
                    id: "d22z70",
                    text: "A person with a long-standing deficiency of vitamin A first complains of difficulty in seeing after dusk. The direct biochemical reason is that:",
                    options: [
                        { key: "a", text: "Retinal for rhodopsin synthesis in the rods runs short" },
                        { key: "b", text: "The cones can no longer make the three types of iodopsin" },
                        { key: "c", text: "The pupil fails to dilate because the iris muscle weakens" },
                        { key: "d", text: "The cornea becomes opaque and blocks light from entering" }
                    ],
                    answer: "a",
                    explanation: "Rhodopsin (visual purple) $=$ the protein <em>opsin</em> $+$ <em>retinal</em>, an aldehyde derived from vitamin A. Light bleaches it, and vitamin A is needed to regenerate it; when it is scarce the highly sensitive rods fail first, giving <strong>night blindness (nyctalopia)</strong>. Prolonged deficiency later dries the conjunctiva and cornea — xerophthalmia and keratomalacia."
                },
                {
                    id: "d22z71",
                    text: "The 'blind spot' of the retina is blind because at that point:",
                    options: [
                        { key: "a", text: "The pigment of the choroid absorbs all the incident light" },
                        { key: "b", text: "The lens cannot focus rays owing to spherical aberration" },
                        { key: "c", text: "Only rods are present, and they need very bright light" },
                        { key: "d", text: "The optic nerve fibres leave and no photoreceptor exists" }
                    ],
                    answer: "d",
                    explanation: "At the <strong>optic disc</strong> the axons of the ganglion cells gather to leave the eyeball as the optic nerve and the retinal vessels enter, so neither rods nor cones can be accommodated there. We are unaware of the resulting gap because the two eyes have blind spots at non-corresponding points and the brain fills in the image."
                },
                {
                    id: "d22z72",
                    text: "When the eye is focused from a distant object to a near one, the changes that occur are:",
                    options: [
                        { key: "a", text: "Ciliary muscle relaxes, ligaments tighten, lens flattens" },
                        { key: "b", text: "Ciliary muscle contracts, ligaments slacken, lens bulges" },
                        { key: "c", text: "Ciliary muscle contracts, ligaments tighten, lens flattens" },
                        { key: "d", text: "The lens is unchanged while the eyeball itself lengthens" }
                    ],
                    answer: "b",
                    explanation: "In <strong>accommodation</strong> for near vision the circular ciliary muscle contracts, which <em>reduces</em> the pull of the suspensory ligaments on the capsule; the elastic lens then bulges and its converging power increases. For distant vision the reverse happens. With age the lens hardens and near focusing fails — presbyopia, corrected by convex reading glasses."
                },
                {
                    id: "d22z73",
                    text: "A boy can read a book comfortably but cannot read the blackboard. His defect and its correction are:",
                    options: [
                        { key: "a", text: "Hypermetropia, in which the image falls behind the retina" },
                        { key: "b", text: "Astigmatism, corrected with a suitable cylindrical lens" },
                        { key: "c", text: "Myopia, in which the image falls in front of the retina" },
                        { key: "d", text: "Presbyopia, in which the lens has lost its elasticity" }
                    ],
                    answer: "c",
                    explanation: "In <strong>myopia (short sight)</strong> the eyeball is too long or the lens too powerful, so parallel rays from a distant object converge <em>before</em> the retina; near objects are still seen well. A <strong>concave (diverging) lens</strong> corrects it. Hypermetropia is the opposite defect, needing a convex lens, and astigmatism arises from an unevenly curved cornea."
                },
                {
                    id: "d22z74",
                    text: "Glaucoma, a common cause of blindness, results from a rise in intra-ocular pressure. The fluid whose drainage is blocked is:",
                    options: [
                        { key: "a", text: "Aqueous humour, normally drained by the canal of Schlemm" },
                        { key: "b", text: "Vitreous humour, continuously secreted by the retina" },
                        { key: "c", text: "The tear fluid, drained by the nasolacrimal duct" },
                        { key: "d", text: "Lymph from the choroid, drained by the optic nerve sheath" }
                    ],
                    answer: "a",
                    explanation: "The watery <strong>aqueous humour</strong> between cornea and lens is secreted by the ciliary body and is constantly renewed, draining through the trabecular meshwork into the <strong>canal of Schlemm</strong>. If that outflow is obstructed the pressure rises and slowly strangles the optic nerve fibres. The jelly-like vitreous humour behind the lens is formed once, in embryonic life, and is not renewed."
                },
                {
                    id: "d22z75",
                    text: "The chain of three ear ossicles increases the force of the vibrations reaching the inner ear about twenty times, chiefly because:",
                    options: [
                        { key: "a", text: "The ossicles are the smallest and lightest bones in the body" },
                        { key: "b", text: "The middle ear cavity is filled with air rather than fluid" },
                        { key: "c", text: "The stapes vibrates at a higher frequency than the malleus" },
                        { key: "d", text: "The tympanic membrane is far larger in area than the oval window" }
                    ],
                    answer: "d",
                    explanation: "Sound must pass from air into the dense fluid of the cochlea, which would otherwise reflect almost all the energy. The malleus–incus–stapes lever collects the vibration over the wide <strong>tympanic membrane</strong> and concentrates it on the much smaller <strong>oval window</strong>; since pressure $=$ force/area, the pressure is greatly magnified. This is impedance matching."
                },
                {
                    id: "d22z76",
                    text: "The actual receptor for hearing, the organ of Corti, rests on the:",
                    options: [
                        { key: "a", text: "Tectorial membrane inside the scala vestibuli" },
                        { key: "b", text: "Basilar membrane, within the cochlear duct" },
                        { key: "c", text: "Reissner's membrane, separating the two perilymph canals" },
                        { key: "d", text: "Cupula of the ampulla at the base of the cochlea" }
                    ],
                    answer: "b",
                    explanation: "The organ of Corti lies on the <strong>basilar membrane</strong> in the scala media (cochlear duct, filled with endolymph); its hair cells are bent against the overhanging tectorial membrane when the membrane vibrates, generating impulses in the auditory nerve. The basilar membrane is narrow and stiff at the base — responding to high frequencies — and wide and slack at the apex, for low ones."
                },
                {
                    id: "d22z77",
                    text: "A dancer who spins rapidly and then stops suddenly feels the room turning. The receptors responsible for this sensation are in the:",
                    options: [
                        { key: "a", text: "Utricle and saccule, which signal the position of the head" },
                        { key: "b", text: "Cochlear duct, whose hair cells respond to low frequencies" },
                        { key: "c", text: "Cristae of the semicircular canals, sensing angular movement" },
                        { key: "d", text: "Maculae of the vestibule, containing the otolith crystals" }
                    ],
                    answer: "c",
                    explanation: "The three semicircular canals lie in mutually perpendicular planes; the endolymph in them lags behind when the head rotates and bends the <strong>cupula of the crista ampullaris</strong>, signalling <em>dynamic equilibrium</em>. When the spin stops, the fluid keeps moving for a while — hence the giddiness. The maculae of the utricle and saccule, with their otoliths, look after <em>static</em> equilibrium."
                },
                {
                    id: "d22z78",
                    text: "Passengers are advised to swallow or yawn while an aeroplane is descending. This works because swallowing opens the:",
                    options: [
                        { key: "a", text: "Eustachian tube, equalising pressure across the eardrum" },
                        { key: "b", text: "Oval window, letting the perilymph pressure fall" },
                        { key: "c", text: "External auditory meatus, blocked by the cerumen" },
                        { key: "d", text: "Round window, which absorbs the excess wave energy" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Eustachian tube</strong> connects the middle ear with the pharynx and is normally closed. Swallowing or yawning opens it, so the middle-ear pressure can equalise with the outside; otherwise the eardrum is pushed inward, causing pain and muffled hearing. The same tube unfortunately allows throat infections to spread to the middle ear."
                },
                {
                    id: "d22z79",
                    text: "Walking into a dark cinema hall, one at first sees nothing and then gradually distinguishes the seats. This dark adaptation reflects the fact that:",
                    options: [
                        { key: "a", text: "The cones slowly increase their store of rhodopsin" },
                        { key: "b", text: "The iris takes several minutes to relax the circular muscle" },
                        { key: "c", text: "The lens gradually flattens to admit more of the light" },
                        { key: "d", text: "The bleached rhodopsin of the rods is slowly regenerated" }
                    ],
                    answer: "d",
                    explanation: "In bright light nearly all the rod pigment is bleached and vision depends on the cones. In the dark the rods must <strong>resynthesise rhodopsin</strong>, a process taking 20–30 minutes, after which their far greater sensitivity takes over — though only in shades of grey, since a single class of rod pigment cannot code colour. Pupillary dilation is immediate and cannot explain the delay."
                },
                {
                    id: "d22z80",
                    text: "Antidiuretic hormone and oxytocin are released from the posterior pituitary, yet the gland is not their true source. This is because they are:",
                    options: [
                        { key: "a", text: "Made by the anterior lobe and carried backwards in the blood" },
                        { key: "b", text: "Synthesised in hypothalamic neurons and stored in the pars nervosa" },
                        { key: "c", text: "Produced by the pineal body and transported down the stalk" },
                        { key: "d", text: "Formed in the adrenal cortex and merely concentrated there" }
                    ],
                    answer: "b",
                    explanation: "The <em>neurohypophysis</em> is nervous tissue, not glandular: the supraoptic and paraventricular nuclei of the <strong>hypothalamus</strong> make ADH and oxytocin and pass them down the axons of the hypophyseal stalk for storage and release. The anterior lobe, in contrast, is a true gland and is controlled by releasing factors reaching it through a portal circulation."
                },
                {
                    id: "d22z81",
                    text: "A man of 35 finds that his jaw, hands and feet have slowly enlarged and his facial features have coarsened, but his height has not changed. The disorder and its cause are:",
                    options: [
                        { key: "a", text: "Gigantism from excess growth hormone before puberty" },
                        { key: "b", text: "Cushing's syndrome from excess glucocorticoid secretion" },
                        { key: "c", text: "Acromegaly from excess growth hormone after epiphyseal fusion" },
                        { key: "d", text: "Myxoedema from a fall in the output of thyroid hormone" }
                    ],
                    answer: "c",
                    explanation: "Once the epiphyseal plates have fused at puberty, long bones can no longer lengthen, so an excess of <strong>growth hormone</strong> in an adult thickens the bones of the face, hands and feet instead — <em>acromegaly</em>. The same excess <em>before</em> fusion causes gigantism, and a deficiency in childhood causes pituitary dwarfism (normal proportions and normal intelligence)."
                },
                {
                    id: "d22z82",
                    text: "In a region where the drinking water and soil lack iodine, the thyroid enlarges into a simple goitre. The mechanism is that:",
                    options: [
                        { key: "a", text: "Low thyroxine removes the feedback brake on TSH secretion" },
                        { key: "b", text: "Iodine deficiency directly stimulates the follicular cells to divide" },
                        { key: "c", text: "Excess thyroxine accumulates as colloid inside the follicles" },
                        { key: "d", text: "Calcitonin is over-produced and causes the gland to hypertrophy" }
                    ],
                    answer: "a",
                    explanation: "Iodine is essential for making $\\mathrm{T_3}$ and $\\mathrm{T_4}$. When their blood level falls, the <strong>negative feedback</strong> on the pituitary is lifted, TSH pours out and drives the follicular cells to hypertrophy — the gland swells although it still cannot make hormone. Iodised salt prevents this endemic goitre, and untreated deficiency in infancy causes cretinism."
                },
                {
                    id: "d22z83",
                    text: "Accidental removal of the parathyroid glands during thyroid surgery leads within hours to painful muscular spasms of the hands and larynx. The immediate cause is:",
                    options: [
                        { key: "a", text: "A rise in blood calcium, which over-excites the muscle" },
                        { key: "b", text: "A fall in blood phosphate, which paralyses the nerve endings" },
                        { key: "c", text: "A rise in blood potassium, which depolarises the membrane" },
                        { key: "d", text: "A fall in blood calcium, which raises neuromuscular excitability" }
                    ],
                    answer: "d",
                    explanation: "<strong>Parathormone</strong> raises plasma calcium by mobilising it from bone, reabsorbing it in the kidney and (through vitamin D) absorbing it from the gut. Without the hormone the calcium level falls, nerve and muscle membranes become hyperexcitable and <strong>tetany</strong> follows. Calcitonin from the thyroid does the opposite, lowering blood calcium."
                },
                {
                    id: "d22z84",
                    text: "A patient with destroyed adrenal cortices shows low blood pressure, low blood sodium, high blood potassium and marked weakness. The hormones he is chiefly lacking are:",
                    options: [
                        { key: "a", text: "Adrenaline and noradrenaline from the chromaffin cells" },
                        { key: "b", text: "Aldosterone and cortisol, giving Addison's disease" },
                        { key: "c", text: "Thyroxine and calcitonin, giving cretinism in the adult" },
                        { key: "d", text: "Insulin and glucagon, giving unstable blood glucose" }
                    ],
                    answer: "b",
                    explanation: "The cortex makes <strong>mineralocorticoids</strong> (aldosterone — $\\mathrm{Na^+}$ retention and $\\mathrm{K^+}$ excretion), <strong>glucocorticoids</strong> (cortisol — gluconeogenesis, anti-inflammatory action) and small amounts of sex steroids. Their loss is <em>Addison's disease</em>, with hypotension, hyponatraemia, hyperkalaemia and bronzing of the skin. Their excess is Cushing's syndrome."
                },
                {
                    id: "d22z85",
                    text: "Adrenaline is called the hormone of 'emergency'. Which set of effects does it produce?",
                    options: [
                        { key: "a", text: "Glycogenolysis, tachycardia, bronchodilation, pupil dilation" },
                        { key: "b", text: "Glycogenesis, bradycardia, bronchoconstriction, pupil dilation" },
                        { key: "c", text: "Glycogenolysis, bradycardia, bronchodilation, pupil constriction" },
                        { key: "d", text: "Gluconeogenesis, tachycardia, bronchoconstriction, sweating" }
                    ],
                    answer: "a",
                    explanation: "The adrenal medulla, a modified sympathetic ganglion, releases adrenaline and noradrenaline under stress. They break glycogen down to glucose in liver and muscle, quicken and strengthen the heartbeat, widen the bronchioles and the pupils, and shift blood from the skin and gut to skeletal muscle — the classical <strong>fight-or-flight preparation</strong>."
                },
                {
                    id: "d22z86",
                    text: "In the islets of Langerhans the $\\alpha$-cells and $\\beta$-cells secrete hormones with opposite effects. Correctly matched, these are:",
                    options: [
                        { key: "a", text: "$\\alpha$-cells $\\rightarrow$ insulin, lowering glucose; $\\beta$-cells $\\rightarrow$ glucagon" },
                        { key: "b", text: "$\\alpha$-cells $\\rightarrow$ somatostatin; $\\beta$-cells $\\rightarrow$ pancreatic polypeptide" },
                        { key: "c", text: "$\\alpha$-cells $\\rightarrow$ glucagon, raising glucose; $\\beta$-cells $\\rightarrow$ insulin" },
                        { key: "d", text: "$\\alpha$-cells $\\rightarrow$ glucagon; $\\beta$-cells $\\rightarrow$ trypsinogen and lipase" }
                    ],
                    answer: "c",
                    explanation: "The $\\beta$-cells (about 70 % of the islet) make <strong>insulin</strong>, which drives glucose into cells and stores it as glycogen and fat; the $\\alpha$-cells make <strong>glucagon</strong>, which mobilises glycogen and raises blood sugar. $\\delta$-cells add somatostatin. The digestive enzymes come from the exocrine acini, an entirely separate part of the pancreas."
                },
                {
                    id: "d22z87",
                    text: "Injecting thyroxine into a healthy animal for several weeks causes its thyroid gland to shrink. This is an example of:",
                    options: [
                        { key: "a", text: "Positive feedback, in which the product amplifies its own release" },
                        { key: "b", text: "A neuro-hormonal reflex initiated by the sympathetic nerves" },
                        { key: "c", text: "Direct toxicity of the injected hormone to the follicle cells" },
                        { key: "d", text: "Negative feedback, the high level suppressing TSH secretion" }
                    ],
                    answer: "d",
                    explanation: "A high circulating thyroxine level inhibits both the hypothalamic TRH and the pituitary <strong>TSH</strong>; without TSH the follicular cells become inactive and the gland atrophies. Almost all endocrine axes are stabilised by such <strong>negative feedback</strong>. The surge of LH before ovulation is one of the rare physiological examples of <em>positive</em> feedback."
                },
                {
                    id: "d22z88",
                    text: "Steroid hormones and protein hormones act on their target cells in different ways. The essential difference is that a steroid hormone:",
                    options: [
                        { key: "a", text: "Cannot enter the cell and works through cyclic AMP" },
                        { key: "b", text: "Passes through the membrane and acts on gene transcription" },
                        { key: "c", text: "Binds to a surface receptor and opens ion channels directly" },
                        { key: "d", text: "Is destroyed by the target cell before it can bind at all" }
                    ],
                    answer: "b",
                    explanation: "Being lipid-soluble, a steroid diffuses through the plasma membrane, binds an intracellular receptor and the complex acts on DNA to switch particular genes on or off — a slow response but a lasting one. Water-soluble <strong>protein and amine hormones</strong> stay outside and use membrane receptors and second messengers such as <strong>cyclic AMP</strong>, giving a fast, short-lived response."
                },
                {
                    id: "d22z89",
                    text: "The pineal gland secretes melatonin, whose output rises in darkness and falls in light. Its recognised role is in:",
                    options: [
                        { key: "a", text: "Maintaining the diurnal rhythm and the sleep–wake cycle" },
                        { key: "b", text: "Raising the plasma calcium level along with parathormone" },
                        { key: "c", text: "Stimulating milk ejection from the mammary glands" },
                        { key: "d", text: "Controlling the differentiation of the T lymphocytes" }
                    ],
                    answer: "a",
                    explanation: "Melatonin from the pineal body links the light–dark cycle to the body's <strong>circadian rhythm</strong>, influencing sleep, body temperature, pigmentation and the timing of puberty. Calcium is handled by parathormone and calcitonin, milk ejection by oxytocin, and T-lymphocyte maturation by the thymus and its hormone thymosin."
                },
                {
                    id: "d22z90",
                    text: "The thymus gland is large in the newborn but has almost disappeared in the elderly. The functional explanation is that it:",
                    options: [
                        { key: "a", text: "Stores maternal antibodies that are used up during childhood" },
                        { key: "b", text: "Secretes the growth hormone needed only until puberty" },
                        { key: "c", text: "Educates the T lymphocytes, a task largely finished early in life" },
                        { key: "d", text: "Produces all the erythrocytes until the bone marrow takes over" }
                    ],
                    answer: "c",
                    explanation: "The thymus is the primary lymphoid organ where stem cells from the marrow become mature, self-tolerant <strong>T lymphocytes</strong>, helped by its hormone thymosin. The repertoire is largely established in infancy, so the gland undergoes <em>involution</em> after puberty. Its removal in a newborn cripples cell-mediated immunity."
                },
                {
                    id: "d22z91",
                    text: "Which pair of a thyroid disorder and its description is correctly matched?",
                    options: [
                        { key: "a", text: "Cretinism — hyperthyroidism appearing in adult women" },
                        { key: "b", text: "Myxoedema — hyperthyroidism with weight loss and tremor" },
                        { key: "c", text: "Graves' disease — hypothyroidism with a puffy, dry skin" },
                        { key: "d", text: "Exophthalmic goitre — hyperthyroidism with protruding eyeballs" }
                    ],
                    answer: "d",
                    explanation: "<strong>Graves' disease (exophthalmic goitre)</strong> is hyper-thyroidism: the gland enlarges, the metabolic rate and heart rate rise, weight falls and the eyeballs protrude. <strong>Cretinism</strong> is hypothyroidism in infancy, with stunted growth and mental retardation, and <strong>myxoedema</strong> is hypothyroidism in the adult, with a puffy face, dry skin, weight gain and mental sluggishness."
                },
                {
                    id: "d22z92",
                    text: "Inside the testis, the cells that nourish the developing germ cells and the cells that secrete testosterone are respectively:",
                    options: [
                        { key: "a", text: "Sertoli cells inside the tubule and Leydig cells outside it" },
                        { key: "b", text: "Leydig cells inside the tubule and Sertoli cells outside it" },
                        { key: "c", text: "Spermatogonia and the primary spermatocytes" },
                        { key: "d", text: "Epithelial cells of the rete testis and of the epididymis" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Sertoli (nurse) cells</strong> lie within the seminiferous tubule, support and feed the germ cells, form the blood–testis barrier and secrete inhibin under FSH. The <strong>interstitial cells of Leydig</strong> lie in the connective tissue <em>between</em> the tubules and secrete testosterone under the influence of LH (ICSH)."
                },
                {
                    id: "d22z93",
                    text: "One primary spermatocyte and one primary oocyte each complete their meiotic divisions. The number of functional gametes obtained is:",
                    options: [
                        { key: "a", text: "Two sperms and two ova" },
                        { key: "b", text: "Four sperms and one ovum" },
                        { key: "c", text: "Four sperms and four ova" },
                        { key: "d", text: "One sperm and four ova" }
                    ],
                    answer: "b",
                    explanation: "Meiosis of a primary spermatocyte gives two secondary spermatocytes and then <strong>four equal spermatids</strong>, all of which become sperms. In oogenesis the cytoplasm is divided very unequally, so each division sets aside a tiny polar body: one primary oocyte yields <strong>one large ovum and three polar bodies</strong> that degenerate. The economy of cytoplasm equips the ovum for early development."
                },
                {
                    id: "d22z94",
                    text: "In the human female the secondary oocyte is released from the ovary while still arrested in a particular stage, and completes its division only if a sperm enters. That arrest is at:",
                    options: [
                        { key: "a", text: "Prophase of the first meiotic division" },
                        { key: "b", text: "Anaphase of the first meiotic division" },
                        { key: "c", text: "Telophase of the second meiotic division" },
                        { key: "d", text: "Metaphase of the second meiotic division" }
                    ],
                    answer: "d",
                    explanation: "Oogenesis is doubly arrested. The primary oocyte stops in <strong>prophase I</strong> (diplotene) before birth and stays there until the follicle matures; meiosis I finishes just before ovulation, and the secondary oocyte then halts at <strong>metaphase II</strong>. Sperm entry supplies the signal that lets it finish, releasing the second polar body."
                },
                {
                    id: "d22z95",
                    text: "In a regular 28-day menstrual cycle ovulation occurs on about the fourteenth day. Its immediate trigger is:",
                    options: [
                        { key: "a", text: "The fall of progesterone as the corpus luteum breaks down" },
                        { key: "b", text: "A steady rise of FSH throughout the follicular phase" },
                        { key: "c", text: "A sharp surge of LH provoked by the peak of oestrogen" },
                        { key: "d", text: "The shedding of the endometrium at the end of the cycle" }
                    ],
                    answer: "c",
                    explanation: "FSH ripens the follicle, whose granulosa cells pour out oestrogen. When oestrogen reaches its peak it acts by <em>positive</em> feedback on the pituitary, producing the mid-cycle <strong>LH surge</strong> that ruptures the Graafian follicle. LH then converts the remnant into the corpus luteum. Falling progesterone at the end of the cycle causes menstruation, not ovulation."
                },
                {
                    id: "d22z96",
                    text: "If fertilisation does not occur, menstruation follows about fourteen days after ovulation because:",
                    options: [
                        { key: "a", text: "The corpus luteum regresses and progesterone support is withdrawn" },
                        { key: "b", text: "The pituitary stops secreting FSH so the follicle cannot grow" },
                        { key: "c", text: "Oestrogen rises steeply and causes the endometrium to slough" },
                        { key: "d", text: "The unfertilised ovum releases enzymes that digest the lining" }
                    ],
                    answer: "a",
                    explanation: "The <strong>corpus luteum</strong> secretes progesterone (with some oestrogen), which keeps the thickened, glandular endometrium ready for implantation. Without an embryo it degenerates into the corpus albicans in about 10–14 days; progesterone falls, the spiral arterioles constrict and the lining is shed as the menstrual flow, allowing a new cycle to begin."
                },
                {
                    id: "d22z97",
                    text: "A pregnancy test detects human chorionic gonadotropin in the urine. This hormone is significant because it is:",
                    options: [
                        { key: "a", text: "Secreted by the pituitary only during the first trimester" },
                        { key: "b", text: "Secreted by the trophoblast and maintains the corpus luteum" },
                        { key: "c", text: "Secreted by the ovary to prevent implantation of a second embryo" },
                        { key: "d", text: "Secreted by the endometrium to soften the pubic symphysis" }
                    ],
                    answer: "b",
                    explanation: "The <strong>trophoblast/chorion of the young embryo</strong> makes hCG, which rescues the corpus luteum from its scheduled degeneration so that progesterone secretion continues and the pregnancy is not lost. It appears in blood and urine within days of implantation — the basis of the test — and later the placenta itself takes over hormone production. Relaxin softens the symphysis."
                },
                {
                    id: "d22z98",
                    text: "Which sequence correctly traces a sperm from its site of formation to the exterior?",
                    options: [
                        { key: "a", text: "Seminiferous tubule $\\rightarrow$ vas deferens $\\rightarrow$ rete testis $\\rightarrow$ epididymis $\\rightarrow$ urethra" },
                        { key: "b", text: "Seminiferous tubule $\\rightarrow$ epididymis $\\rightarrow$ urethra $\\rightarrow$ vas deferens $\\rightarrow$ rete testis" },
                        { key: "c", text: "Rete testis $\\rightarrow$ seminiferous tubule $\\rightarrow$ epididymis $\\rightarrow$ ejaculatory duct $\\rightarrow$ urethra" },
                        { key: "d", text: "Seminiferous tubule $\\rightarrow$ rete testis $\\rightarrow$ epididymis $\\rightarrow$ vas deferens $\\rightarrow$ urethra" }
                    ],
                    answer: "d",
                    explanation: "Sperms formed in the <strong>seminiferous tubules</strong> pass through the tubuli recti and <strong>rete testis</strong>, then the vasa efferentia into the <strong>epididymis</strong>, where they mature and are stored. The <strong>vas deferens</strong> carries them up, joins the duct of the seminal vesicle to form the ejaculatory duct, and opens into the urethra. Vasectomy cuts the vas deferens."
                },
                {
                    id: "d22z99",
                    text: "The seminal plasma is not merely a vehicle for the sperms. The prostate and the seminal vesicles contribute respectively:",
                    options: [
                        { key: "a", text: "A slightly acidic fluid and a fluid rich in urea" },
                        { key: "b", text: "The bulk of the fructose and the whole of the mucus" },
                        { key: "c", text: "A thin alkaline fluid with enzymes, and a fructose-rich viscous fluid" },
                        { key: "d", text: "A lubricant of pre-ejaculate only, and clotting proteins only" }
                    ],
                    answer: "c",
                    explanation: "The <strong>seminal vesicles</strong> supply about 60 % of the volume — a viscous, fructose-rich fluid that fuels sperm motility, together with prostaglandins. The <strong>prostate</strong> adds a thin, milky, alkaline fluid with enzymes that liquefy the coagulated semen; its alkalinity neutralises the acid vaginal secretion. Cowper's (bulbourethral) glands add the lubricating pre-ejaculate."
                },
                {
                    id: "d22z100",
                    text: "Fertilisation in the human female normally takes place in the ampulla of the fallopian tube. Before a sperm can penetrate the ovum it must undergo:",
                    options: [
                        { key: "a", text: "Capacitation in the female tract, then the acrosomal reaction" },
                        { key: "b", text: "A final meiotic division inside the uterine cavity" },
                        { key: "c", text: "Loss of its mitochondria so that only the head remains" },
                        { key: "d", text: "Fusion with several other sperms to pool their enzymes" }
                    ],
                    answer: "a",
                    explanation: "Freshly ejaculated sperms cannot fertilise. Several hours in the female tract remove surface glycoproteins and 'switch on' the sperm — <strong>capacitation</strong>. On meeting the zona pellucida the <strong>acrosome</strong> releases hyaluronidase and other lysins that clear a path. Entry of one sperm at once alters the zona (cortical reaction), blocking polyspermy."
                },
                {
                    id: "d22z101",
                    text: "The proliferative and the secretory phases of the uterine cycle are dominated respectively by:",
                    options: [
                        { key: "a", text: "Progesterone from the corpus luteum and oestrogen from the follicle" },
                        { key: "b", text: "Oestrogen from the growing follicle and progesterone from the corpus luteum" },
                        { key: "c", text: "FSH from the pituitary and oestrogen from the placenta" },
                        { key: "d", text: "LH from the pituitary and hCG from the trophoblast" }
                    ],
                    answer: "b",
                    explanation: "In the <strong>proliferative (follicular) phase</strong>, days 5–14, oestrogen from the ripening follicle regenerates and thickens the endometrium. After ovulation the <strong>secretory (luteal) phase</strong> is governed by progesterone from the corpus luteum, which makes the glands coil and secrete glycogen and the blood supply increase — preparing a bed for implantation."
                }
            ]
        },
        {
            id: "biod22",
            name: "Biodiversity",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q102–200 · classification 10, Monera & virus 14, fungi & lichens 13, algae 11, bryophytes 10, pteridophytes 8, gymnosperms 8, angiosperms 15, economic importance 10.",
            questions: [
                {
                    id: "d22b102",
                    text: "The two-kingdom system of Linnaeus was abandoned mainly because it could not accommodate the distinction between:",
                    options: [
                        { key: "a", text: "Aquatic and terrestrial organisms of the same size" },
                        { key: "b", text: "Organisms that reproduce sexually and asexually" },
                        { key: "c", text: "Prokaryotes and eukaryotes, and autotrophs and heterotrophs" },
                        { key: "d", text: "Organisms with a cell wall and those with a cell membrane" }
                    ],
                    answer: "c",
                    explanation: "Placing every organism in either Plantae or Animalia lumped bacteria, fungi and green plants together simply because all have a cell wall. It ignored the fundamental <strong>prokaryote–eukaryote</strong> divide, the difference between <strong>photosynthetic and absorptive/ingestive nutrition</strong>, and unicellular versus multicellular organisation — the very criteria on which later systems were built."
                },
                {
                    id: "d22b103",
                    text: "Arranged from the most inclusive to the least inclusive, the obligate categories of the taxonomic hierarchy are:",
                    options: [
                        { key: "a", text: "Kingdom, Class, Division, Order, Family, Genus, Species" },
                        { key: "b", text: "Kingdom, Division, Class, Order, Family, Genus, Species" },
                        { key: "c", text: "Kingdom, Division, Order, Class, Genus, Family, Species" },
                        { key: "d", text: "Species, Genus, Family, Class, Order, Division, Kingdom" }
                    ],
                    answer: "b",
                    explanation: "The descending sequence is <strong>Kingdom → Division (Phylum in animals) → Class → Order → Family → Genus → Species</strong>. As one descends, the number of shared characters increases while the number of organisms included decreases. Intermediate ranks such as sub-class and tribe may be inserted, but these seven are the obligate ones."
                },
                {
                    id: "d22b104",
                    text: "According to the rules of binomial nomenclature, the name of the potato is correctly written in a printed book as:",
                    options: [
                        { key: "a", text: "solanum Tuberosum, printed in italics with the epithet capitalised" },
                        { key: "b", text: "Solanum Tuberosum, the two words underlined together as one name" },
                        { key: "c", text: "SOLANUM TUBEROSUM, printed in ordinary roman type throughout" },
                        { key: "d", text: "<em>Solanum tuberosum</em>, in italics with only the genus capitalised" }
                    ],
                    answer: "d",
                    explanation: "The system, formalised by Linnaeus in <em>Species Plantarum</em> (1753) and governed today by the ICBN/ICN, requires a <strong>Latinised two-word name</strong>: the generic name begins with a capital, the specific epithet with a small letter, and both are printed in <em>italics</em>. When handwritten, the two words are <em>underlined separately</em>. The author's name may follow in roman type."
                },
                {
                    id: "d22b105",
                    text: "Whittaker (1969) built his five-kingdom system on a set of criteria. Which set did he actually use?",
                    options: [
                        { key: "a", text: "Cell structure, body organisation, mode of nutrition, reproduction and phylogeny" },
                        { key: "b", text: "Habitat, body size, colour, mode of locomotion, life span and geographical range" },
                        { key: "c", text: "Chromosome number, ploidy level, rate of mutation and the total size of the genome" },
                        { key: "d", text: "Ribosomal RNA sequence, chemistry of the wall and the type of the membrane lipids" }
                    ],
                    answer: "a",
                    explanation: "Whittaker separated <strong>Monera, Protista, Fungi, Plantae and Animalia</strong> using complexity of cell structure (prokaryote/eukaryote), complexity of the body (unicellular/multicellular), <strong>mode of nutrition</strong> (photosynthetic, absorptive, ingestive), reproduction and phylogenetic relationship. Ribosomal RNA sequencing is the basis of Woese's later three-domain scheme."
                },
                {
                    id: "d22b106",
                    text: "In the five-kingdom system a unicellular, eukaryotic, photosynthetic organism such as <em>Chlamydomonas</em> or a diatom is placed in:",
                    options: [
                        { key: "a", text: "Monera, because it lives in water as a single cell" },
                        { key: "b", text: "Plantae, because it has chlorophyll and a cell wall" },
                        { key: "c", text: "Protista, which holds all unicellular eukaryotes" },
                        { key: "d", text: "Fungi, because reproduction is largely asexual" }
                    ],
                    answer: "c",
                    explanation: "Kingdom <strong>Protista</strong> is defined by <em>unicellular eukaryotic</em> organisation regardless of nutrition, so it contains photosynthetic forms (dinoflagellates, diatoms, euglenoids), ingestive forms (protozoa) and absorptive forms (slime moulds). This makes Protista the most heterogeneous — and the most criticised — of Whittaker's kingdoms."
                },
                {
                    id: "d22b107",
                    text: "Carl Woese proposed the three-domain system in 1990. The evidence on which he split the old kingdom Monera into two domains was:",
                    options: [
                        { key: "a", text: "The presence or absence of a true nucleus in the cell" },
                        { key: "b", text: "Comparison of the sequences of 16S ribosomal RNA" },
                        { key: "c", text: "The number of flagella and the way they are inserted" },
                        { key: "d", text: "The ability to grow in the presence of free oxygen" }
                    ],
                    answer: "b",
                    explanation: "Sequencing the slowly evolving <strong>16S/18S rRNA</strong> showed that the archaebacteria are as distant from the eubacteria as either is from the eukaryotes. Woese therefore recognised three domains — <strong>Archaea, Bacteria and Eukarya</strong> — above the level of kingdom. All members of both prokaryotic domains lack a true nucleus, so that character cannot separate them."
                },
                {
                    id: "d22b108",
                    text: "Archaea are set apart from true bacteria by several chemical peculiarities. Which one is correct?",
                    options: [
                        { key: "a", text: "Their cell wall contains a much thicker layer of peptidoglycan" },
                        { key: "b", text: "Their ribosomes are of the 80S type, as in eukaryotes" },
                        { key: "c", text: "Their DNA is enclosed by a double-membrane nuclear envelope" },
                        { key: "d", text: "Their wall lacks peptidoglycan and their membrane lipids are ether-linked" }
                    ],
                    answer: "d",
                    explanation: "Archaebacterial walls are made of pseudomurein, protein or glycoprotein — never true <strong>peptidoglycan</strong> — and their membranes contain <strong>branched isoprenoid chains joined to glycerol by ether bonds</strong> instead of the ester-linked straight-chain fatty acids of all other organisms. These features help them survive in hot springs, salt pans and the guts of ruminants. Their ribosomes are still 70S."
                },
                {
                    id: "d22b109",
                    text: "In the name <em>Mangifera indica</em> Linn., the word 'indica' is technically called the:",
                    options: [
                        { key: "a", text: "Specific epithet, which is never used by itself" },
                        { key: "b", text: "Generic name, which may be used by itself" },
                        { key: "c", text: "Author citation of the person who described it" },
                        { key: "d", text: "Sub-species rank, always written after a hyphen" }
                    ],
                    answer: "a",
                    explanation: "The first word is the <strong>generic name</strong> (which can stand alone, as when one speaks of the genus <em>Mangifera</em>); the second is the <strong>specific epithet</strong>, meaningless on its own because the same epithet is used in many genera (<em>indica</em> occurs in <em>Azadirachta indica</em> too). 'Linn.' is the abbreviated author citation and is never italicised."
                },
                {
                    id: "d22b110",
                    text: "A pressed, dried and mounted plant specimen kept for reference must carry a label recording, among other things, the:",
                    options: [
                        { key: "a", text: "Number of chromosomes counted in its root tip" },
                        { key: "b", text: "Market price and the yield per hectare of the crop" },
                        { key: "c", text: "Date and place of collection with the collector's name" },
                        { key: "d", text: "Complete floral formula and floral diagram in colour" }
                    ],
                    answer: "c",
                    explanation: "A <strong>herbarium</strong> sheet is a permanent record, so its label must give the botanical name, family, <strong>locality and date of collection and the name of the collector</strong>. Sheets are arranged according to an accepted system of classification. Botanical gardens, museums, zoological parks and keys are the other classical taxonomic aids."
                },
                {
                    id: "d22b111",
                    text: "Whittaker took the fungi out of the plant kingdom and gave them a kingdom of their own because they:",
                    options: [
                        { key: "a", text: "Are always unicellular and lack any kind of cell wall" },
                        { key: "b", text: "Have chitinous walls and absorb their food heterotrophically" },
                        { key: "c", text: "Possess chlorophyll but cannot fix carbon dioxide" },
                        { key: "d", text: "Store their reserve food as starch, not as glycogen" }
                    ],
                    answer: "b",
                    explanation: "Fungi have a wall of <strong>chitin</strong> (not cellulose), no chlorophyll of any kind, and feed by secreting enzymes and <strong>absorbing</strong> the digested material as saprophytes, parasites or symbionts; their reserve is <strong>glycogen</strong>, as in animals. These features place them nearer to animals than to plants in nutrition, while their walls and immobility set them apart from both."
                },
                {
                    id: "d22b112",
                    text: "The rigidity of a bacterial cell wall comes from a polymer of alternating N-acetyl glucosamine and N-acetyl muramic acid units cross-linked by short peptides. This polymer is:",
                    options: [
                        { key: "a", text: "Peptidoglycan, also called murein" },
                        { key: "b", text: "Chitin, as in the wall of the fungi" },
                        { key: "c", text: "Cellulose, as in the wall of green plants" },
                        { key: "d", text: "Pseudomurein, found in all true bacteria" }
                    ],
                    answer: "a",
                    explanation: "<strong>Peptidoglycan (murein)</strong> forms a single enormous bag-shaped molecule that resists the high internal osmotic pressure. Penicillin kills growing bacteria by blocking the cross-linking step, and lysozyme dissolves the wall by hydrolysing the NAG–NAM bond. Pseudomurein is confined to archaebacteria; chitin and cellulose to fungi and plants."
                },
                {
                    id: "d22b113",
                    text: "In Gram's staining a bacterium is decolourised by alcohol and finally takes up the pink counterstain. Such a bacterium has:",
                    options: [
                        { key: "a", text: "A thick peptidoglycan wall rich in teichoic acid" },
                        { key: "b", text: "No cell wall at all, like the mycoplasmas" },
                        { key: "c", text: "A wall of pure protein that repels the dye" },
                        { key: "d", text: "A thin peptidoglycan layer under an outer lipid membrane" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>Gram-negative</strong> cell the peptidoglycan is only 1–2 layers thick and is covered by an outer membrane of lipopolysaccharide. Alcohol dissolves that lipid-rich covering and washes the crystal-violet–iodine complex out, so the cell takes the safranin counterstain and looks pink. A Gram-positive cell has a thick, teichoic-acid-rich wall that traps the complex and stays purple."
                },
                {
                    id: "d22b114",
                    text: "Which statement about the internal organisation of a bacterial cell is correct?",
                    options: [
                        { key: "a", text: "It has 80S ribosomes and a well-formed Golgi complex" },
                        { key: "b", text: "It has 70S ribosomes and no membrane-bound organelle" },
                        { key: "c", text: "It has 70S ribosomes in the nucleus and 80S in the cytoplasm" },
                        { key: "d", text: "It has mitochondria but no endoplasmic reticulum" }
                    ],
                    answer: "b",
                    explanation: "A prokaryote has <strong>70S ribosomes</strong> (50S $+$ 30S subunits) and lacks every membrane-bound organelle — no nucleus, mitochondria, plastids, ER or Golgi. Respiratory and photosynthetic enzymes are instead carried on infoldings of the plasma membrane called <em>mesosomes</em> and chromatophores. The difference in ribosome type is exploited by antibiotics such as streptomycin and tetracycline."
                },
                {
                    id: "d22b115",
                    text: "Resistance to an antibiotic can spread rapidly through a bacterial population because the gene concerned often lies on a small, self-replicating circle of extra-chromosomal DNA called a:",
                    options: [
                        { key: "a", text: "Nucleoid, which carries the main genome" },
                        { key: "b", text: "Mesosome, which is an infolding of the membrane" },
                        { key: "c", text: "Plasmid, which can be transferred during conjugation" },
                        { key: "d", text: "Capsid, which encloses the genetic material" }
                    ],
                    answer: "c",
                    explanation: "<strong>Plasmids</strong> replicate independently of the main chromosome and can pass from cell to cell through the conjugation tube built by the F (fertility) factor, carrying resistance (R) genes with them. This is why resistance can appear in unrelated species. Plasmids are also the workhorse vectors of genetic engineering; the nucleoid is the main circular chromosome."
                },
                {
                    id: "d22b116",
                    text: "<em>Vibrio cholerae</em>, <em>Bacillus anthracis</em> and <em>Spirillum</em> illustrate three of the basic bacterial shapes. Correctly matched, these are:",
                    options: [
                        { key: "a", text: "Comma-shaped, rod-shaped and spirally coiled" },
                        { key: "b", text: "Spherical, comma-shaped and rod-shaped" },
                        { key: "c", text: "Rod-shaped, spirally coiled and spherical" },
                        { key: "d", text: "Spirally coiled, spherical and comma-shaped" }
                    ],
                    answer: "a",
                    explanation: "Bacteria are classified by shape into <strong>cocci</strong> (spherical), <strong>bacilli</strong> (rod), <strong>vibrios</strong> (comma) and <strong>spirilla</strong> (rigid spiral); the flexible spiral forms are spirochaetes. Cocci are further named from their grouping — diplococcus, streptococcus (chain), staphylococcus (grape-like cluster) and sarcina (cubical packet)."
                },
                {
                    id: "d22b117",
                    text: "A bacterium bearing flagella scattered all over its surface is described as:",
                    options: [
                        { key: "a", text: "Monotrichous, with a single polar flagellum" },
                        { key: "b", text: "Amphitrichous, with one flagellum at each end" },
                        { key: "c", text: "Lophotrichous, with a tuft at one pole only" },
                        { key: "d", text: "Peritrichous, as in <em>Escherichia coli</em>" }
                    ],
                    answer: "d",
                    explanation: "The four arrangements are <strong>monotrichous</strong> (one flagellum at one pole), <strong>amphitrichous</strong> (one or a tuft at each pole), <strong>lophotrichous</strong> (a tuft at one pole) and <strong>peritrichous</strong> (flagella all round the cell). A bacterial flagellum is made of the protein flagellin, is far simpler than the 9+2 eukaryotic flagellum, and rotates like a propeller."
                },
                {
                    id: "d22b118",
                    text: "<em>Nitrosomonas</em> obtains its energy by oxidising ammonia to nitrite and builds its own organic food from carbon dioxide. Its mode of nutrition is therefore:",
                    options: [
                        { key: "a", text: "Photoautotrophic, like the purple sulphur bacteria" },
                        { key: "b", text: "Chemoautotrophic, using an inorganic energy source" },
                        { key: "c", text: "Saprophytic, living on dead organic remains" },
                        { key: "d", text: "Symbiotic, exchanging nitrogen for shelter and food" }
                    ],
                    answer: "b",
                    explanation: "<strong>Chemoautotrophs</strong> (chemosynthetic autotrophs) oxidise inorganic substances — ammonia, nitrite, sulphur, ferrous iron or hydrogen — and use the released energy to fix $\\mathrm{CO_2}$, requiring no light at all. <em>Nitrosomonas</em> and <em>Nitrobacter</em> together carry out nitrification and are indispensable in the nitrogen cycle. Photoautotrophs such as <em>Chromatium</em> use light instead."
                },
                {
                    id: "d22b119",
                    text: "A bacterium with a generation time of 20 minutes is inoculated as a single cell into fresh medium. Ignoring the lag phase, the number of cells after 2 hours of exponential growth is:",
                    options: [
                        { key: "a", text: "12" },
                        { key: "b", text: "36" },
                        { key: "c", text: "64" },
                        { key: "d", text: "120" }
                    ],
                    answer: "c",
                    explanation: "In 2 hours there are $120/20 = 6$ generations, and growth is geometric: $N = N_0 \\times 2^n = 1 \\times 2^6 = \\mathbf{64}$ cells. Such exponential growth cannot continue indefinitely; as nutrients run out and wastes accumulate the culture passes into the <strong>stationary phase</strong> and then the phase of decline, giving the classical sigmoid growth curve after the initial lag."
                },
                {
                    id: "d22b120",
                    text: "Endospores allow certain bacteria to survive boiling, desiccation and disinfectants for years. This extreme resistance is chiefly due to their:",
                    options: [
                        { key: "a", text: "Very low water content and thick keratin-like spore coats" },
                        { key: "b", text: "Rapid metabolic rate, which repairs damage as it occurs" },
                        { key: "c", text: "Ability to divide continuously even inside the spore case" },
                        { key: "d", text: "Thick capsule of slime that prevents any gas exchange" }
                    ],
                    answer: "a",
                    explanation: "An endospore is a dormant, <strong>almost dehydrated</strong> body with calcium dipicolinate in its core and several tough protective coats; metabolism is virtually nil. Autoclaving at 121 °C under pressure is needed to kill the spores of <em>Clostridium</em> and <em>Bacillus</em>. Note that an endospore is a survival, not a reproductive, structure — one cell forms only one spore."
                },
                {
                    id: "d22b121",
                    text: "Which combination of characters is true of the cyanobacteria (blue-green algae)?",
                    options: [
                        { key: "a", text: "Eukaryotic cells with chloroplasts and flagellated spores" },
                        { key: "b", text: "Prokaryotic cells with chlorophyll b and a starch reserve" },
                        { key: "c", text: "Eukaryotic cells that release oxygen and fix nitrogen" },
                        { key: "d", text: "Prokaryotic cells with chlorophyll a and phycobilin pigments" }
                    ],
                    answer: "d",
                    explanation: "Cyanobacteria are prokaryotes with <strong>chlorophyll a</strong> and the accessory pigments <strong>c-phycocyanin and c-phycoerythrin</strong> lying on free thylakoids, since there is no chloroplast. They store cyanophycean starch, are never flagellated (moving by gliding), have a mucilaginous sheath, and carry out oxygen-releasing photosynthesis — they are believed to have oxygenated the early atmosphere."
                },
                {
                    id: "d22b122",
                    text: "In a filament of <em>Nostoc</em> or <em>Anabaena</em> the heterocyst is the site of nitrogen fixation because it:",
                    options: [
                        { key: "a", text: "Has a much higher concentration of chlorophyll than other cells" },
                        { key: "b", text: "Lacks photosystem II, so no oxygen is produced to poison nitrogenase" },
                        { key: "c", text: "Contains a true nucleus that carries the <em>nif</em> genes" },
                        { key: "d", text: "Is the only cell able to divide and multiply the filament" }
                    ],
                    answer: "b",
                    explanation: "The enzyme <strong>nitrogenase</strong> is irreversibly inactivated by oxygen. The thick-walled <strong>heterocyst</strong> solves the problem by dismantling <strong>photosystem II</strong> (so no $\\mathrm{O_2}$ is evolved) and by having a wall that restricts the entry of oxygen; it receives carbohydrate from neighbouring cells and passes fixed nitrogen back. Akinetes, not heterocysts, are the resting spores."
                },
                {
                    id: "d22b123",
                    text: "Viruses are placed on the borderline between living and non-living things. The observation that most strongly supports their non-living side is that they:",
                    options: [
                        { key: "a", text: "Multiply rapidly and produce offspring like themselves" },
                        { key: "b", text: "Mutate and can be attacked by the host's immune system" },
                        { key: "c", text: "Can be crystallised and have no metabolism of their own" },
                        { key: "d", text: "Carry nucleic acid that obeys the ordinary genetic code" }
                    ],
                    answer: "c",
                    explanation: "Stanley crystallised tobacco mosaic virus in 1935 — behaviour typical of a chemical, not an organism. Outside a host a virus shows <strong>no respiration, no growth, no response and no metabolic machinery of any kind</strong>; it possesses no ribosomes and no enzymes for ATP production. Multiplication, mutation and heredity, on the other hand, are its living attributes."
                },
                {
                    id: "d22b124",
                    text: "The protein coat of a virus is built of identical sub-units and encloses the genetic material. The coat and its sub-units are called:",
                    options: [
                        { key: "a", text: "Capsid and capsomeres respectively" },
                        { key: "b", text: "Capsomere and capsids respectively" },
                        { key: "c", text: "Envelope and peplomers respectively" },
                        { key: "d", text: "Nucleoid and protomers respectively" }
                    ],
                    answer: "a",
                    explanation: "The <strong>capsid</strong> is assembled from many copies of one or a few proteins, the <strong>capsomeres</strong> — an economical arrangement, since a small genome need code for only one coat protein. Capsid plus nucleic acid is the nucleocapsid, which may be helical (TMV), polyhedral (adenovirus) or complex (bacteriophage T4, with a head and a contractile tail). Some animal viruses add a lipid envelope with glycoprotein spikes."
                },
                {
                    id: "d22b125",
                    text: "Which statement about the genetic material of viruses is correct?",
                    options: [
                        { key: "a", text: "Every virus carries both DNA and RNA within a single capsid" },
                        { key: "b", text: "Plant viruses are always double-stranded DNA viruses, like the phages" },
                        { key: "c", text: "Bacteriophages always carry single-stranded RNA in a helical capsid" },
                        { key: "d", text: "A virus has either DNA or RNA, and HIV uses reverse transcriptase" }
                    ],
                    answer: "d",
                    explanation: "A virion never contains both nucleic acids: it has DNA <em>or</em> RNA, single- or double-stranded. Most plant viruses (TMV) are ssRNA, most bacteriophages dsDNA. In the <strong>retroviruses</strong> such as HIV, the enzyme <strong>reverse transcriptase</strong> copies the RNA genome into DNA which is then integrated into the host chromosome — an exception to the usual direction of the central dogma."
                },
                {
                    id: "d22b126",
                    text: "A fungal hypha differs chemically from a plant cell in that its wall and its stored food are respectively:",
                    options: [
                        { key: "a", text: "Cellulose and starch" },
                        { key: "b", text: "Peptidoglycan and glycogen" },
                        { key: "c", text: "Chitin and glycogen with oil" },
                        { key: "d", text: "Chitin and floridean starch" }
                    ],
                    answer: "c",
                    explanation: "The wall of most fungi is built of <strong>chitin</strong> (fungal cellulose), a polymer of N-acetyl glucosamine, and the reserve is <strong>glycogen</strong> together with oil droplets — exactly as in animals. Floridean starch is the reserve of red algae, and peptidoglycan is bacterial. The body is a mycelium of hyphae, septate or aseptate depending on the class."
                },
                {
                    id: "d22b127",
                    text: "A fungus whose mycelium has no cross walls, so that the whole thallus is one multinucleate cell, and whose asexual spores are motile, belongs to the:",
                    options: [
                        { key: "a", text: "Ascomycetes, the sac fungi" },
                        { key: "b", text: "Phycomycetes, the algal fungi" },
                        { key: "c", text: "Basidiomycetes, the club fungi" },
                        { key: "d", text: "Deuteromycetes, the imperfect fungi" }
                    ],
                    answer: "b",
                    explanation: "<strong>Phycomycetes</strong> ('algal fungi') keep the primitive <em>coenocytic, aseptate</em> mycelium; septa appear only to cut off reproductive structures. They reproduce asexually by flagellated <strong>zoospores</strong> in aquatic members or non-motile aplanospores in terrestrial ones, and sexually by zygospore formation. All three of the other classes have septate hyphae."
                },
                {
                    id: "d22b128",
                    text: "In the sac fungi the sexual spores are formed inside a sac, typically eight to a sac. The class and the structures concerned are:",
                    options: [
                        { key: "a", text: "Ascomycetes — ascospores borne endogenously in an ascus" },
                        { key: "b", text: "Ascomycetes — basidiospores borne exogenously on a basidium" },
                        { key: "c", text: "Basidiomycetes — ascospores borne inside an ascocarp" },
                        { key: "d", text: "Phycomycetes — zygospores borne inside a sporangium" }
                    ],
                    answer: "a",
                    explanation: "In <strong>Ascomycetes</strong> karyogamy and meiosis occur inside a club-shaped <strong>ascus</strong>, and a further mitosis usually gives <strong>eight ascospores enclosed within it</strong>; the asci are often grouped in a fruiting body, the ascocarp (cleistothecium, perithecium or apothecium). Asexual reproduction is by chains of conidia cut off from a conidiophore. <em>Penicillium, Aspergillus, Neurospora</em> and yeast belong here."
                },
                {
                    id: "d22b129",
                    text: "The mushroom and the rusts are grouped together in Basidiomycetes. Which feature is characteristic of this class?",
                    options: [
                        { key: "a", text: "An extensive production of conidia as the main asexual spore" },
                        { key: "b", text: "A coenocytic mycelium with a large central vacuole" },
                        { key: "c", text: "Ascospores formed in eights within an elongated ascus" },
                        { key: "d", text: "Four basidiospores borne outside on a club-shaped basidium" }
                    ],
                    answer: "d",
                    explanation: "In the club fungi the dikaryotic ($n+n$) mycelium — often with <strong>clamp connections</strong> — is long-lived, and the fusion nucleus of the <strong>basidium</strong> undergoes meiosis to give <strong>four basidiospores borne externally on sterigmata</strong>. Asexual spores are rare, propagation being by fragmentation and by the dikaryotic mycelium itself. <em>Agaricus, Puccinia</em> and <em>Ustilago</em> are examples."
                },
                {
                    id: "d22b130",
                    text: "<em>Alternaria</em> and <em>Colletotrichum</em> are placed in the Deuteromycetes. The class is regarded as an artificial one because its members:",
                    options: [
                        { key: "a", text: "Have no mycelium at all and exist only as single cells" },
                        { key: "b", text: "Are known only in the asexual stage, the perfect stage being unknown" },
                        { key: "c", text: "Reproduce sexually but have never been seen to form spores" },
                        { key: "d", text: "Are all obligate parasites that cannot be grown in culture" }
                    ],
                    answer: "b",
                    explanation: "The 'fungi imperfecti' are a dumping ground for fungi in which only the <strong>imperfect (asexual, conidial) stage</strong> has been observed. Once the sexual stage is discovered, the fungus is transferred — usually to the Ascomycetes, occasionally to the Basidiomycetes. Their mycelium is septate; many are saprophytes and mineralisers, and <em>Trichoderma</em> is a useful biocontrol agent."
                },
                {
                    id: "d22b131",
                    text: "The single sharpest distinction between an ascomycete and a basidiomycete is that the sexual spores are:",
                    options: [
                        { key: "a", text: "Motile in the first and non-motile in the second" },
                        { key: "b", text: "Haploid in the first and diploid in the second" },
                        { key: "c", text: "Formed inside the mother cell in the first and outside it in the second" },
                        { key: "d", text: "Formed after mitosis in the first and after meiosis in the second" }
                    ],
                    answer: "c",
                    explanation: "Ascospores are <strong>endogenous</strong> — cut out within the cytoplasm of the ascus — whereas basidiospores are <strong>exogenous</strong>, budded off on sterigmata at the tip of the basidium. Both are products of meiosis and both are haploid and non-motile; indeed, motile cells are entirely absent from both classes."
                },
                {
                    id: "d22b132",
                    text: "Yeast (<em>Saccharomyces cerevisiae</em>) multiplies asexually mainly by budding. In this process:",
                    options: [
                        { key: "a", text: "A small outgrowth receives a daughter nucleus and separates" },
                        { key: "b", text: "The cell divides into two exactly equal daughter cells" },
                        { key: "c", text: "The nucleus divides repeatedly to form free spores in the cell" },
                        { key: "d", text: "A long hypha breaks into fragments that grow independently" }
                    ],
                    answer: "a",
                    explanation: "A <strong>bud</strong> appears on the parent wall, the nucleus divides mitotically and one daughter nucleus passes into it; the bud is then pinched off or may remain attached to form a short pseudomycelium. Yeast is an ascomycete that has secondarily lost the mycelium — it is unicellular — and it is the classical organism of alcoholic fermentation and of baking."
                },
                {
                    id: "d22b133",
                    text: "In the sexual cycle of yeast, the ascus is produced when:",
                    options: [
                        { key: "a", text: "A vegetative cell simply enlarges and its wall thickens" },
                        { key: "b", text: "A bud fails to separate and the parent nucleus degenerates" },
                        { key: "c", text: "Two conidia fuse and the diploid nucleus divides by mitosis" },
                        { key: "d", text: "Two cells fuse and the diploid nucleus divides meiotically" }
                    ],
                    answer: "d",
                    explanation: "Two compatible haploid cells (or their nuclei) fuse to give a diploid zygote; this cell becomes the <strong>ascus</strong>, and its nucleus divides by <strong>meiosis</strong> — often followed by a mitosis — to give four or eight <strong>ascospores</strong> inside the old cell wall. On release, each ascospore starts a new haploid budding population. Yeast can therefore exist in both haploid and diploid phases."
                },
                {
                    id: "d22b134",
                    text: "In <em>Mucor</em> the asexual spores are produced in a sporangium whose swollen, dome-shaped tip projects into the spore cavity. This sterile tip is the:",
                    options: [
                        { key: "a", text: "Rhizoid, which anchors the sporangiophore to the substratum" },
                        { key: "b", text: "Stolon, which arches over and gives rise to new tufts" },
                        { key: "c", text: "Columella, formed by a septum cutting off the sporangium" },
                        { key: "d", text: "Annulus, whose drying flings the spores into the air" }
                    ],
                    answer: "c",
                    explanation: "A curved septum cuts the tip of the sporangiophore off from the stalk, and the dome that bulges into the sporangium is the <strong>columella</strong>. When the sporangial wall dries and breaks, the non-motile <strong>aplanospores</strong> are set free. <em>Mucor</em> also differs from <em>Rhizopus</em> in having <strong>no stolons or rhizoids</strong> and in bearing its sporangiophores singly rather than in tufts."
                },
                {
                    id: "d22b135",
                    text: "Sexual reproduction in <em>Mucor</em> is described as gametangial copulation and the species is usually heterothallic. This means that:",
                    options: [
                        { key: "a", text: "Motile male gametes swim to a large non-motile egg" },
                        { key: "b", text: "Two morphologically similar gametangia of $+$ and $-$ strains fuse" },
                        { key: "c", text: "One thallus alone forms the zygospore without any partner" },
                        { key: "d", text: "A vegetative hypha rounds off directly into a resting zygospore" }
                    ],
                    answer: "b",
                    explanation: "Two hyphae of opposite mating strains ($+$ and $-$) grow towards each other as progametangia, cut off <strong>gametangia</strong> of similar size (isogamous) and fuse; the thick, warty <strong>zygospore</strong> that results rests for a long period. On germination its nucleus divides meiotically and a germ sporangium is produced. <em>Homothallic</em> would mean a single thallus can complete the cycle."
                },
                {
                    id: "d22b136",
                    text: "A lichen is a dual organism. The relationship between its two partners is best described by saying that the:",
                    options: [
                        { key: "a", text: "Fungus absorbs water and minerals, the alga makes the food" },
                        { key: "b", text: "Alga digests the fungus, obtaining nitrogen from its wall" },
                        { key: "c", text: "Fungus makes the food while the alga anchors the thallus" },
                        { key: "d", text: "Two partners are independent and merely grow side by side" }
                    ],
                    answer: "a",
                    explanation: "The <strong>mycobiont</strong> (usually an ascomycete) forms the bulk of the thallus, holds water, provides shelter and absorbs minerals; the <strong>phycobiont</strong> (a green alga such as <em>Trebouxia</em>, or a nitrogen-fixing cyanobacterium such as <em>Nostoc</em>) photosynthesises for both. Since the fungus benefits more and may even kill algal cells, the association is often called <em>helotism</em> rather than pure mutualism."
                },
                {
                    id: "d22b137",
                    text: "Lichens are classified into crustose, foliose and fruticose forms. Correctly described, a foliose lichen is one that is:",
                    options: [
                        { key: "a", text: "Crust-like and so firmly fixed that it cannot be separated" },
                        { key: "b", text: "Erect or pendulous and branched like a small shrub" },
                        { key: "c", text: "Gelatinous and found only on submerged rocks in streams" },
                        { key: "d", text: "Flat and leaf-like, attached to the substratum by rhizines" }
                    ],
                    answer: "d",
                    explanation: "<strong>Crustose</strong> lichens (<em>Graphis</em>) form a thin crust inseparable from the rock or bark; <strong>foliose</strong> lichens (<em>Parmelia</em>) are dorsiventral and leafy, held on by root-like <em>rhizines</em>; <strong>fruticose</strong> lichens (<em>Usnea, Cladonia</em>) are cylindrical, branched and often hanging. Vegetative propagation is by soredia and isidia."
                },
                {
                    id: "d22b138",
                    text: "Lichens disappear from cities with heavy industrial smoke and are the first colonisers of bare rock. These two facts together show that lichens are:",
                    options: [
                        { key: "a", text: "Fast-growing parasites that need a living host to survive" },
                        { key: "b", text: "Restricted to the tropics because they need constant warmth" },
                        { key: "c", text: "Sensitive pollution indicators and pioneers of xerarch succession" },
                        { key: "d", text: "Able to grow only where the soil is already rich in nitrogen" }
                    ],
                    answer: "c",
                    explanation: "Having no cuticle and no stomata, lichens absorb everything from the air and are killed by very low concentrations of <strong>sulphur dioxide</strong> — hence their use as biological indicators of air quality. On bare rock they secrete lichen acids that etch the surface and, with their own dead remains, start the <strong>soil-forming (pioneer) stage of xerarch succession</strong>. Some also yield dyes, litmus and perfumes."
                },
                {
                    id: "d22b139",
                    text: "Which set of characters applies to the algae as a group?",
                    options: [
                        { key: "a", text: "Thalloid body, unicellular sex organs and no embryo stage" },
                        { key: "b", text: "Differentiated root, stem and leaf with vascular tissue" },
                        { key: "c", text: "Jacketed sex organs and a zygote retained on the parent" },
                        { key: "d", text: "Heterotrophic nutrition with a cell wall of chitin" }
                    ],
                    answer: "a",
                    explanation: "Algae are chlorophyll-bearing, autotrophic, mainly aquatic thallophytes: the body is a <strong>thallus</strong> with no true root, stem, leaf or vascular tissue; the sex organs are <strong>unicellular and without a sterile jacket</strong>; and the zygote does not develop into a multicellular <strong>embryo</strong> inside the female organ. The last two points are precisely where the bryophytes advance beyond them."
                },
                {
                    id: "d22b140",
                    text: "The pigments, the reserve food and the wall of the Chlorophyceae are respectively:",
                    options: [
                        { key: "a", text: "Chlorophyll a and c, laminarin, and algin" },
                        { key: "b", text: "Chlorophyll a and d, floridean starch, and pectin" },
                        { key: "c", text: "Chlorophyll a alone, cyanophycean starch, and murein" },
                        { key: "d", text: "Chlorophyll a and b, starch in pyrenoids, and cellulose" }
                    ],
                    answer: "d",
                    explanation: "The green algae have exactly the pigment complement of higher plants — <strong>chlorophylls a and b</strong> with carotenes and xanthophylls — store <strong>starch around pyrenoids</strong> inside the chloroplast, and have an inner cellulose and outer pectose wall. Their motile cells bear two to eight <em>equal, apical (whiplash)</em> flagella. This combination is why land plants are thought to have arisen from them."
                },
                {
                    id: "d22b141",
                    text: "Among the three main classes of algae, the Rhodophyceae are unique in that they:",
                    options: [
                        { key: "a", text: "Possess two unequal flagella inserted laterally" },
                        { key: "b", text: "Have no flagellated cell at any stage of the life cycle" },
                        { key: "c", text: "Store their food as the alcohol mannitol only" },
                        { key: "d", text: "Contain fucoxanthin, which masks the chlorophyll" }
                    ],
                    answer: "b",
                    explanation: "Red algae are the only algal group with <strong>no motile, flagellated stage at all</strong> — even the male gametes (spermatia) are carried passively by water. They contain chlorophylls a and d with the red <strong>r-phycoerythrin</strong> and blue r-phycocyanin, and store <strong>floridean starch</strong>. Fucoxanthin, mannitol/laminarin and unequal lateral flagella are all features of the brown algae."
                },
                {
                    id: "d22b142",
                    text: "<em>Laminaria</em> and <em>Fucus</em> owe their colour to a xanthophyll that masks the chlorophyll. The pigment, the reserve food and the commercial product of this class are:",
                    options: [
                        { key: "a", text: "Phycoerythrin, floridean starch and agar" },
                        { key: "b", text: "Phycocyanin, cyanophycean starch and carrageenan" },
                        { key: "c", text: "Fucoxanthin, laminarin and mannitol, and algin" },
                        { key: "d", text: "Carotene, true starch and single-cell protein" }
                    ],
                    answer: "c",
                    explanation: "Phaeophyceae contain chlorophylls a and c with the brown <strong>fucoxanthin</strong>, store the polysaccharide <strong>laminarin</strong> and the alcohol <strong>mannitol</strong>, and have a wall of cellulose plus the gelatinous <strong>algin</strong> that is extracted commercially. Their motile cells are pear-shaped with two unequal flagella inserted laterally; agar and carrageenan come from red algae."
                },
                {
                    id: "d22b143",
                    text: "A cell of <em>Spirogyra</em> is instantly recognised under the microscope by its:",
                    options: [
                        { key: "a", text: "One to several ribbon-like chloroplasts spirally coiled with pyrenoids" },
                        { key: "b", text: "Single cup-shaped chloroplast with a red eye spot at its rim" },
                        { key: "c", text: "Girdle-shaped chloroplast lying pressed against the cross wall" },
                        { key: "d", text: "Star-shaped chloroplasts joined by a strand through the vacuole" }
                    ],
                    answer: "a",
                    explanation: "<em>Spirogyra</em> is an unbranched filament of cylindrical cells, each with a large central vacuole, a nucleus suspended by cytoplasmic strands and one to sixteen <strong>ribbon-shaped chloroplasts running spirally</strong> just inside the wall, dotted with pyrenoids. A slimy mucilage sheath makes it slippery, giving the names 'pond scum' and 'water silk'. The cup-shaped plastid with an eye spot belongs to <em>Chlamydomonas</em>."
                },
                {
                    id: "d22b144",
                    text: "During scalariform conjugation in <em>Spirogyra</em>, the contents of one cell move bodily into the cell of the opposite filament. This shows that its sexual reproduction is:",
                    options: [
                        { key: "a", text: "Oogamous, with a large egg and a small motile sperm" },
                        { key: "b", text: "Anisogamous, the two gametes differing in size only" },
                        { key: "c", text: "Vegetative, since no gametes of any sort are involved" },
                        { key: "d", text: "Isogamous, the two non-motile gametes being alike in size" }
                    ],
                    answer: "d",
                    explanation: "Papillae from cells of adjacent filaments meet and their walls dissolve, making a ladder-like <strong>conjugation tube</strong>; the amoeboid contents of the 'male' cell creep through and fuse with the passive contents of the other. Because the two gametes are morphologically identical and both non-flagellate, the process is <strong>isogamous (aplanogamous)</strong>. Fusion within one filament is lateral conjugation."
                },
                {
                    id: "d22b145",
                    text: "The zygospore of <em>Spirogyra</em> is diploid, yet on germination it produces a single haploid filament. This is because:",
                    options: [
                        { key: "a", text: "The zygote divides mitotically and all four products survive" },
                        { key: "b", text: "It divides meiotically and three of the four nuclei degenerate" },
                        { key: "c", text: "The diploid nucleus is expelled before germination begins" },
                        { key: "d", text: "Meiosis is postponed until the filament forms its gametes" }
                    ],
                    answer: "b",
                    explanation: "Meiosis in <em>Spirogyra</em> is <strong>zygotic</strong>: the resting zygospore divides by meiosis, but only <strong>one of the four haploid nuclei survives</strong>, the other three degenerating. The single germ tube therefore grows into a new haploid filament. The life cycle is <em>haplontic</em> — the zygote is the only diploid cell in it."
                },
                {
                    id: "d22b146",
                    text: "Red algae are able to live at greater depths in the sea than green algae because their phycoerythrin:",
                    options: [
                        { key: "a", text: "Reflects the red light and so protects the chloroplast" },
                        { key: "b", text: "Enables them to feed heterotrophically in total darkness" },
                        { key: "c", text: "Absorbs the blue-green light that penetrates deepest in water" },
                        { key: "d", text: "Raises the temperature of the thallus in the cold deep water" }
                    ],
                    answer: "c",
                    explanation: "Sea water absorbs red and infrared rays within a few metres, so only the <strong>blue and green wavelengths</strong> reach any depth. The accessory pigment <strong>r-phycoerythrin</strong> captures exactly those wavelengths and passes the energy to chlorophyll a, allowing red algae to photosynthesise 100 m or more down — a phenomenon known as chromatic adaptation."
                },
                {
                    id: "d22b147",
                    text: "Agar, algin and carrageenan are three commercially important phycocolloids. They are obtained respectively from:",
                    options: [
                        { key: "a", text: "<em>Gelidium</em>, <em>Laminaria</em> and <em>Chondrus</em>" },
                        { key: "b", text: "<em>Laminaria</em>, <em>Chondrus</em> and <em>Gelidium</em>" },
                        { key: "c", text: "<em>Chlorella</em>, <em>Spirogyra</em> and <em>Ulothrix</em>" },
                        { key: "d", text: "<em>Sargassum</em>, <em>Gracilaria</em> and <em>Volvox</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong>Agar</strong> comes from the red algae <em>Gelidium</em> and <em>Gracilaria</em> and is the standard medium for culturing microbes and for making jellies; <strong>algin</strong> from the brown algae <em>Laminaria</em> and <em>Macrocystis</em> is used as a thickener and emulsifier; <strong>carrageenan</strong> comes from the red alga <em>Chondrus crispus</em>. <em>Chlorella</em> is grown instead for single-cell protein."
                },
                {
                    id: "d22b148",
                    text: "The evolutionary sequence isogamy $\\rightarrow$ anisogamy $\\rightarrow$ oogamy is illustrated respectively by:",
                    options: [
                        { key: "a", text: "<em>Fucus</em>, <em>Chlamydomonas</em> and <em>Ulothrix</em>" },
                        { key: "b", text: "<em>Volvox</em>, <em>Fucus</em> and <em>Spirogyra</em>" },
                        { key: "c", text: "<em>Chara</em>, <em>Nostoc</em> and <em>Chlorella</em>" },
                        { key: "d", text: "<em>Ulothrix</em>, <em>Chlamydomonas braunii</em> and <em>Volvox</em>" }
                    ],
                    answer: "d",
                    explanation: "In <strong>isogamy</strong> (<em>Ulothrix</em>, <em>Spirogyra</em>) the fusing gametes are alike; in <strong>anisogamy</strong> (<em>Chlamydomonas braunii</em>) they differ in size though both are motile; in <strong>oogamy</strong> (<em>Volvox</em>, <em>Fucus</em>, <em>Chara</em>) a large non-motile egg is fertilised by a small motile sperm. The trend towards a well-provisioned, protected egg culminates in the land plants."
                },
                {
                    id: "d22b149",
                    text: "The single feature that most clearly places the bryophytes above the algae is that in bryophytes the:",
                    options: [
                        { key: "a", text: "Gametophyte is green and can photosynthesise all its own food" },
                        { key: "b", text: "Male gametes are motile and need a film of water to reach the egg" },
                        { key: "c", text: "Plant body is a flat thallus without any conducting tissue at all" },
                        { key: "d", text: "Sex organs are multicellular and jacketed, and a zygote forms an embryo" }
                    ],
                    answer: "d",
                    explanation: "Algal sex organs are naked single cells and the zygote is set free, whereas a bryophyte has an <strong>antheridium and archegonium with a sterile jacket of cells</strong> and the zygote is <strong>retained and nursed into a multicellular embryo</strong> — hence the group name <em>Embryophyta</em>. Green thalloid bodies, absence of vascular tissue and motile sperms are shared with the algae, so they cannot be the distinguishing advance."
                },
                {
                    id: "d22b150",
                    text: "Bryophytes are called the 'amphibians of the plant kingdom' because they:",
                    options: [
                        { key: "a", text: "Can live equally well submerged and on dry desert soil" },
                        { key: "b", text: "Possess gills in the young stage and stomata when mature" },
                        { key: "c", text: "Live on land but still need water for fertilisation" },
                        { key: "d", text: "Alternate between a marine and a freshwater generation" }
                    ],
                    answer: "c",
                    explanation: "They have taken to the land — with a cuticle, rhizoids and jacketed sex organs — but their <strong>flagellated antherozoids must swim through a film of water</strong> to reach the archegonium, and having no vascular tissue they cannot conduct water efficiently. They are therefore confined to moist, shady places, exactly like amphibians."
                },
                {
                    id: "d22b151",
                    text: "A liverwort capsule can be distinguished from a moss capsule at a glance because the liverwort capsule:",
                    options: [
                        { key: "a", text: "Contains elaters and has no columella or peristome" },
                        { key: "b", text: "Has a lid, a peristome and a central columella" },
                        { key: "c", text: "Grows indefinitely from a meristem at its base" },
                        { key: "d", text: "Bears stomata on its wall and splits into four valves" }
                    ],
                    answer: "a",
                    explanation: "In Hepaticopsida the capsule has <strong>no columella and no peristome</strong>; among the spores lie hygroscopic, spirally thickened <strong>elaters</strong> that twist as they dry and flick the spores out. The moss capsule (Bryopsida) has a sterile <strong>columella</strong>, an operculum and a ring of peristome teeth, but no elaters; basal meristem and stomata are the marks of the hornwort sporophyte."
                },
                {
                    id: "d22b152",
                    text: "<em>Anthoceros</em> is placed in a class of its own largely because each of its cells contains a single large chloroplast with a pyrenoid, and its sporophyte:",
                    options: [
                        { key: "a", text: "Is wholly dependent on the gametophyte and short-lived" },
                        { key: "b", text: "Consists of a foot and a capsule with no seta at all" },
                        { key: "c", text: "Lacks stomata but bears numerous elaters among the spores" },
                        { key: "d", text: "Has stomata, chloroplasts and a basal meristem, so it grows on" }
                    ],
                    answer: "d",
                    explanation: "The hornwort sporophyte is the most advanced in the group: it is green, bears <strong>stomata</strong> on its wall and so is partly self-supporting, and a <strong>meristem at its base</strong> keeps adding to it, so the horn-like capsule goes on elongating for months. A central columella is present, and pseudo-elaters are scattered among the spores. Each cell has a single <em>Anthoceros</em>-type chloroplast with a pyrenoid, an algal feature."
                },
                {
                    id: "d22b153",
                    text: "The moss plant that we see with leaf-like appendages arranged spirally develops from a green, branched, filamentous stage called the:",
                    options: [
                        { key: "a", text: "Protonema, which is the diploid sporophyte generation" },
                        { key: "b", text: "Protonema, a juvenile gametophyte formed from the spore" },
                        { key: "c", text: "Prothallus, a heart-shaped independent gametophyte" },
                        { key: "d", text: "Gemma, an asexual bud produced inside a cup" }
                    ],
                    answer: "b",
                    explanation: "A moss spore germinates into a creeping, algal-looking <strong>protonema</strong>, which is <em>haploid</em>; buds on it grow into the erect leafy shoots bearing the sex organs. Both stages are therefore the gametophyte. The heart-shaped prothallus is the fern gametophyte, and gemmae in cups are the vegetative propagules of <em>Marchantia</em>."
                },
                {
                    id: "d22b154",
                    text: "A transverse section of the <em>Marchantia</em> thallus shows air chambers roofed by pores. These pores differ from the stomata of a leaf in that they are:",
                    options: [
                        { key: "a", text: "Guarded by two bean-shaped cells that open and close them" },
                        { key: "b", text: "Present on the ventral surface along with scales and rhizoids" },
                        { key: "c", text: "Barrel-shaped, bounded by tiers of cells, and permanently open" },
                        { key: "d", text: "Connected directly to a system of xylem and phloem strands" }
                    ],
                    answer: "c",
                    explanation: "Each <strong>air pore</strong> of <em>Marchantia</em> is a chimney of four or five superposed tiers of cells and <strong>cannot be closed</strong>, unlike a true stoma with its two guard cells. It opens into an air chamber whose floor bears green assimilatory filaments. The <em>dorsal</em> surface carries the pores and gemma cups; rhizoids and scales are ventral, and there is no vascular tissue."
                },
                {
                    id: "d22b155",
                    text: "The gemmae of <em>Marchantia</em> are produced in cups on the dorsal surface. Each gemma is:",
                    options: [
                        { key: "a", text: "A green, biconvex multicellular body with two growing points" },
                        { key: "b", text: "A single-celled haploid spore formed by meiosis in the cup" },
                        { key: "c", text: "A resting zygote that germinates after a period of dormancy" },
                        { key: "d", text: "A tiny sporophyte that separates and lives independently" }
                    ],
                    answer: "a",
                    explanation: "A gemma is a <strong>multicellular, green, biconvex disc</strong> with a notch on each side containing a growing point; splashed out of the cup by rain, it grows into a new thallus identical with the parent. This is <em>vegetative</em> reproduction, so no meiosis and no fusion is involved. <em>Marchantia</em> also propagates by progressive death and decay of the older parts of the thallus."
                },
                {
                    id: "d22b156",
                    text: "<em>Marchantia</em> is dioecious. Its antheridia and archegonia are borne respectively on:",
                    options: [
                        { key: "a", text: "The same thallus, sunk in the tissue near the apical notch" },
                        { key: "b", text: "Male and female cones formed at the tip of the thallus" },
                        { key: "c", text: "The ventral surface of the thallus among the scales" },
                        { key: "d", text: "An eight-lobed antheridiophore and a rayed archegoniophore" }
                    ],
                    answer: "d",
                    explanation: "The sex organs are raised on stalked branches of the thallus: the male <strong>antheridiophore</strong> has a disc-like, shallowly eight-lobed head with antheridia sunk in its upper surface, while the female <strong>archegoniophore</strong> carries about nine finger-like rays with the archegonia hanging <em>downward</em> between them. Being dioecious, the two are on separate plants."
                },
                {
                    id: "d22b157",
                    text: "The sporophyte of <em>Marchantia</em> is described as parasitic on the gametophyte. Its three parts, in order from the point of attachment outwards, are:",
                    options: [
                        { key: "a", text: "Capsule, seta and foot, the capsule absorbing the food" },
                        { key: "b", text: "Foot, seta and capsule, the foot absorbing the food" },
                        { key: "c", text: "Foot, columella and operculum with a ring of teeth" },
                        { key: "d", text: "Rhizoid, stalk and sporangium borne on the ray" }
                    ],
                    answer: "b",
                    explanation: "The <strong>foot</strong> is embedded in the archegoniophore tissue and draws nourishment; the short <strong>seta</strong> raises the <strong>capsule</strong>, in which spore mother cells undergo meiosis to give haploid spores mixed with hygroscopic <strong>elaters</strong>. The whole sporophyte is $2n$, produces spores, and depends on the $n$ gametophyte — the classic heteromorphic alternation of generations."
                },
                {
                    id: "d22b158",
                    text: "In the life cycle of a bryophyte, meiosis occurs at the time of:",
                    options: [
                        { key: "a", text: "Gamete formation inside the antheridium and archegonium" },
                        { key: "b", text: "Germination of the zygote immediately after fertilisation" },
                        { key: "c", text: "Spore formation from the spore mother cells of the capsule" },
                        { key: "d", text: "Budding of the leafy shoot from the filamentous protonema" }
                    ],
                    answer: "c",
                    explanation: "The bryophyte cycle is <strong>haplo-diplontic with a dominant gametophyte</strong>. The zygote is the first cell of the $2n$ sporophyte and divides mitotically; <strong>meiosis is sporic</strong>, occurring in the capsule when the spore mother cells give haploid spores. Gametes are produced by ordinary mitosis, since the gametophyte is already haploid."
                },
                {
                    id: "d22b159",
                    text: "<em>Sphagnum</em>, the bog moss, is collected commercially in large quantities chiefly because it:",
                    options: [
                        { key: "a", text: "Holds many times its weight of water and forms peat" },
                        { key: "b", text: "Fixes atmospheric nitrogen through its heterocysts" },
                        { key: "c", text: "Yields a strong fibre used for making sacks and ropes" },
                        { key: "d", text: "Is the chief source of the antibiotic used against tuberculosis" }
                    ],
                    answer: "a",
                    explanation: "The leaves of <em>Sphagnum</em> contain large dead hyaline cells with pores that soak up water like a sponge, so it is used as a packing material for transporting seedlings and as a soil conditioner in horticulture; compressed and partly decayed over centuries it forms <strong>peat</strong>, used as fuel. Mosses also check soil erosion and are pioneers on bare rock along with lichens."
                },
                {
                    id: "d22b160",
                    text: "Pteridophytes are regarded as the first true land plants because they were the first to evolve:",
                    options: [
                        { key: "a", text: "A multicellular jacketed archegonium containing an egg" },
                        { key: "b", text: "Vascular tissue and a dominant, independent sporophyte" },
                        { key: "c", text: "Seeds that could survive a long period of drought" },
                        { key: "d", text: "Flagellated male gametes that could swim to the egg" }
                    ],
                    answer: "b",
                    explanation: "The advance over the bryophytes is the possession of <strong>xylem and phloem</strong>, which allows water to be conducted and the body to be supported, and the fact that the <strong>sporophyte</strong> is now the large, independent, dominant generation with true roots, stems and leaves. Their xylem still has no vessels (except in <em>Selaginella</em> and <em>Equisetum</em>) and the phloem no companion cells; seeds are absent."
                },
                {
                    id: "d22b161",
                    text: "<em>Selaginella</em> and <em>Salvinia</em> are of great evolutionary interest because they are heterosporous. Heterospory is significant as the first step towards:",
                    options: [
                        { key: "a", text: "The formation of a vascular cambium and secondary growth" },
                        { key: "b", text: "The origin of the flower with its coloured perianth" },
                        { key: "c", text: "The seed habit, through retention of the megaspore" },
                        { key: "d", text: "Independence from water at the time of spore dispersal" }
                    ],
                    answer: "c",
                    explanation: "Producing two kinds of spore — many small <strong>microspores</strong> and a few large <strong>megaspores</strong> — means the female gametophyte develops <em>inside</em> the megaspore wall, is nourished by the parent sporophyte and is retained on it. That retention, plus an integument, is precisely the <strong>seed habit</strong>, which the gymnosperms carry to completion."
                },
                {
                    id: "d22b162",
                    text: "The gametophyte of a fern differs from that of a moss most importantly in that it is:",
                    options: [
                        { key: "a", text: "A small, green, heart-shaped independent prothallus" },
                        { key: "b", text: "A branched filament that later bears leafy shoots" },
                        { key: "c", text: "Entirely dependent on the sporophyte for its nutrition" },
                        { key: "d", text: "Diploid and produces its gametes by meiotic division" }
                    ],
                    answer: "a",
                    explanation: "A fern spore grows into a tiny, free-living, chlorophyllous <strong>prothallus</strong>, usually heart-shaped and one cell thick except in the middle, anchored by rhizoids and bearing both antheridia and archegonia on its ventral surface. It is <em>haploid</em> and short-lived, and the conspicuous fern plant is the sporophyte — the reverse of the moss, where the gametophyte dominates."
                },
                {
                    id: "d22b163",
                    text: "In <em>Dryopteris</em>, the young leaves show circinate vernation and the rhizome and petiole bear brown chaffy scales. These scales are called:",
                    options: [
                        { key: "a", text: "Elaters, which twist when they dry" },
                        { key: "b", text: "Indusia, which cover the young sporangia" },
                        { key: "c", text: "Rhizines, which anchor the plant to the soil" },
                        { key: "d", text: "Ramenta, which protect the growing parts" }
                    ],
                    answer: "d",
                    explanation: "<strong>Ramenta</strong> are thin, brown, multicellular scales that clothe the rhizome, the young leaves and the leaf bases, checking water loss and protecting the delicate apex. <strong>Circinate vernation</strong> — the coiling of the young frond into a 'fiddle head' that unrolls from the base upwards — is another diagnostic fern character. The indusium is the umbrella-like cover of the sorus."
                },
                {
                    id: "d22b164",
                    text: "The sporangium of <em>Dryopteris</em> discharges its spores explosively. The structure responsible and the way it works are:",
                    options: [
                        { key: "a", text: "The indusium, which shrivels and squeezes the sorus" },
                        { key: "b", text: "The annulus, whose drying cells tear the wall at the stomium" },
                        { key: "c", text: "The columella, which expands and pushes the spores out" },
                        { key: "d", text: "The stalk, which twists hygroscopically like an elater" }
                    ],
                    answer: "b",
                    explanation: "The <strong>annulus</strong> is an incomplete ring of cells with thickened inner and radial walls. As they dry, cohesion of the water pulls the walls in, the ring straightens and rips the sporangium open at the thin-walled <strong>stomium</strong>; when the water column finally snaps the annulus flies back and catapults the spores several centimetres away."
                },
                {
                    id: "d22b165",
                    text: "In a leptosporangiate fern each sporangium has sixteen spore mother cells. The number of spores it will contain when mature is:",
                    options: [
                        { key: "a", text: "16, one from each mother cell after mitosis" },
                        { key: "b", text: "32, two from each mother cell after one division" },
                        { key: "c", text: "64, four from each mother cell after meiosis" },
                        { key: "d", text: "128, eight from each mother cell after three divisions" }
                    ],
                    answer: "c",
                    explanation: "Every spore mother cell is diploid and divides by <strong>meiosis</strong>, giving a tetrad of four haploid spores: $16 \\times 4 = \\mathbf{64}$. This is why 48 or 64 spores per sporangium is quoted for <em>Dryopteris</em> — some mother cells may abort. Since the spores are all alike, the fern is <em>homosporous</em>."
                },
                {
                    id: "d22b166",
                    text: "Although the fern sporophyte is a well-developed land plant with vascular tissue, the group has not become fully terrestrial because:",
                    options: [
                        { key: "a", text: "Its roots are adventitious and cannot absorb deep soil water" },
                        { key: "b", text: "Its spores are too heavy to be carried by the wind" },
                        { key: "c", text: "Its xylem contains vessels that cavitate in dry air" },
                        { key: "d", text: "Its antherozoids still need a film of water to reach the egg" }
                    ],
                    answer: "d",
                    explanation: "The delicate, free-living <strong>prothallus</strong> can survive only in damp shade, and the multiflagellate <strong>antherozoids must swim</strong> through water to the neck of the archegonium, guided chemotactically by malic acid. Ferns are therefore tied to moist habitats. The seed plants escape this limitation by pollination and the pollen tube."
                },
                {
                    id: "d22b167",
                    text: "A transverse section of the rhizome of <em>Dryopteris</em> shows a ring of separate vascular strands, each with its own endodermis, and large leaf gaps. Such a stele is:",
                    options: [
                        { key: "a", text: "A dictyostele, a modified and dissected siphonostele" },
                        { key: "b", text: "A protostele, with a solid core of xylem in the centre" },
                        { key: "c", text: "An atactostele, with the bundles scattered at random" },
                        { key: "d", text: "A eustele, with open collateral bundles and a cambium" }
                    ],
                    answer: "a",
                    explanation: "A <strong>dictyostele</strong> arises when the tubular siphonostele is dissected by overlapping <strong>leaf gaps</strong> into a network of separate meristeles, each concentric (amphicribral) and surrounded by its own endodermis. The primitive condition is the solid <em>protostele</em>; the scattered atactostele belongs to monocot stems and the eustele to dicot stems."
                },
                {
                    id: "d22b168",
                    text: "Gymnosperms are so named because in them:",
                    options: [
                        { key: "a", text: "The ovules are naked, not enclosed in an ovary, so no true fruit is formed" },
                        { key: "b", text: "The seeds have no seed coat and germinate as soon as they are shed" },
                        { key: "c", text: "The stem is naked, bearing neither leaves nor any branches" },
                        { key: "d", text: "The gametophyte is exposed and lives free of the sporophyte" }
                    ],
                    answer: "a",
                    explanation: "The megasporophyll is not folded into a closed ovary, so the <strong>ovule sits exposed on its surface</strong> and pollen is deposited directly on the ovule. After fertilisation the ovule ripens into a seed that is likewise naked — a cone, not a fruit. Angiosperms, in contrast, enclose the ovules in an ovary that ripens into the fruit."
                },
                {
                    id: "d22b169",
                    text: "The vascular tissue of most gymnosperms is anatomically distinctive in that the:",
                    options: [
                        { key: "a", text: "Xylem has vessels and the phloem has companion cells" },
                        { key: "b", text: "Xylem is made only of parenchyma and the phloem of fibres" },
                        { key: "c", text: "Bundles are closed, so no secondary thickening is possible" },
                        { key: "d", text: "Xylem lacks vessels and the phloem lacks companion cells" }
                    ],
                    answer: "d",
                    explanation: "Gymnosperm wood is made up almost entirely of <strong>tracheids</strong> — vessels occur only in <em>Gnetum</em> and its allies — and the phloem has <strong>albuminous cells</strong> in place of companion cells. This simple, uniform wood is what makes conifer timber so valuable as 'softwood'. Their bundles are open, so cambium and secondary growth are present."
                },
                {
                    id: "d22b170",
                    text: "The shoot system of <em>Pinus</em> is dimorphic. The needle leaves are borne:",
                    options: [
                        { key: "a", text: "Singly and spirally on the long shoot, which is unlimited in growth" },
                        { key: "b", text: "Only at the base of the trunk, on the dwarf shoots, as scales" },
                        { key: "c", text: "In groups on dwarf shoots of limited growth, in the axils of scale leaves" },
                        { key: "d", text: "In pairs directly on the main axis, each pair in a whorl of four" }
                    ],
                    answer: "c",
                    explanation: "The <strong>long shoot</strong> has unlimited growth and bears only brown scale leaves; in the axil of each is a <strong>dwarf shoot (spur)</strong> of limited growth carrying a bundle of two, three or five green <strong>needles</strong> wrapped at the base in a sheath. The needle itself is xerophytic — thick cuticle, sunken stomata, hypodermis and resin ducts — an adaptation to the physiological drought of cold, windy sites."
                },
                {
                    id: "d22b171",
                    text: "The pollen grain of <em>Pinus</em> is carried far by the wind because it bears:",
                    options: [
                        { key: "a", text: "A pair of long feathery wings formed from the exine" },
                        { key: "b", text: "Two bladder-like air sacs formed by the exine separating" },
                        { key: "c", text: "A sticky pad that attaches it to the body of insects" },
                        { key: "d", text: "A ring of stiff bristles that catch the passing air currents" }
                    ],
                    answer: "b",
                    explanation: "In each pollen grain the outer <strong>exine</strong> balloons out on two sides to form <strong>air bladders (sacci)</strong>, greatly reducing the density of the grain. Male cones are produced in enormous numbers at the base of long shoots, and the clouds of yellow pollen released may travel for kilometres — a necessity in a wind-pollinated (anemophilous) plant."
                },
                {
                    id: "d22b172",
                    text: "In <em>Pinus</em> the female cone bears, in the axil of each bract scale, a woody scale on whose upper surface lie two ovules. This scale is the:",
                    options: [
                        { key: "a", text: "Ovuliferous scale, which is the megasporophyll" },
                        { key: "b", text: "Microsporophyll, which bears the pollen sacs" },
                        { key: "c", text: "Integument, which later becomes the seed coat" },
                        { key: "d", text: "Nucellus, in which the embryo sac develops" }
                    ],
                    answer: "a",
                    explanation: "The female (megasporangiate) cone is a compound structure: each <strong>bract scale</strong> subtends an <strong>ovuliferous scale</strong> — the true megasporophyll — bearing two inverted ovules. There is no stigma or style, so the pollen is caught directly at the micropyle by a drop of fluid and drawn in as the drop dries: the 'pollination drop' mechanism."
                },
                {
                    id: "d22b173",
                    text: "The nutritive tissue found in a pine seed differs fundamentally from the endosperm of an angiosperm seed in that it is:",
                    options: [
                        { key: "a", text: "Triploid and formed after double fertilisation" },
                        { key: "b", text: "Diploid and derived from the nucellar tissue" },
                        { key: "c", text: "Formed only after the embryo has become mature" },
                        { key: "d", text: "Haploid and formed before fertilisation takes place" }
                    ],
                    answer: "d",
                    explanation: "In a gymnosperm the food store is the <strong>female gametophyte</strong> itself — $n$ tissue produced from the megaspore <em>before</em> the egg is fertilised, so it is laid down even if fertilisation never occurs. The angiosperm endosperm is $3n$ and is made only <em>after</em> the second male gamete fuses with the two polar nuclei. Gymnosperms also show <strong>polyembryony</strong>."
                },
                {
                    id: "d22b174",
                    text: "In <em>Pinus</em> the interval between pollination and fertilisation is about:",
                    options: [
                        { key: "a", text: "A few hours, as in most wind-pollinated grasses" },
                        { key: "b", text: "Two to three days, the time taken by the pollen tube" },
                        { key: "c", text: "One year, the pollen tube resting through the winter" },
                        { key: "d", text: "Five to six years, the cone remaining closed all the while" }
                    ],
                    answer: "c",
                    explanation: "Pollination occurs in the spring, but the pollen tube grows only a little and then remains dormant; the archegonia are not ready until the following spring, so <strong>fertilisation takes place about twelve months later</strong>. The seeds ripen and are shed in the third season, which is why cones of three different ages can be found on one tree."
                },
                {
                    id: "d22b175",
                    text: "Which use of a gymnosperm is correctly stated?",
                    options: [
                        { key: "a", text: "<em>Cycas</em> — source of the drug reserpine used in hypertension" },
                        { key: "b", text: "<em>Pinus</em> — resin yields turpentine and rosin on distillation" },
                        { key: "c", text: "<em>Ephedra</em> — its bark gives the anticancer drug taxol" },
                        { key: "d", text: "<em>Ginkgo</em> — its seeds are the commercial source of sago" }
                    ],
                    answer: "b",
                    explanation: "Tapping the trunk of <em>Pinus</em> gives oleoresin, whose distillation yields the volatile <strong>turpentine</strong> and the solid <strong>rosin</strong>, used in paints, varnishes and paper sizing. <em>Cycas</em> pith gives sago, <em>Ephedra</em> gives the anti-asthmatic alkaloid ephedrine, and taxol comes from <em>Taxus</em>; reserpine is from the angiosperm <em>Rauwolfia</em>."
                },
                {
                    id: "d22b176",
                    text: "Carrot, radish and turnip are all swollen tap roots, but they differ in shape. They are respectively:",
                    options: [
                        { key: "a", text: "Fusiform, napiform and conical" },
                        { key: "b", text: "Napiform, conical and fusiform" },
                        { key: "c", text: "Conical, fusiform and napiform" },
                        { key: "d", text: "Tuberous, nodulated and moniliform" }
                    ],
                    answer: "c",
                    explanation: "A <strong>conical</strong> root (carrot) is broad at the top and tapers gradually; a <strong>fusiform</strong> root (radish) is spindle-shaped, thickest in the middle and tapering at both ends; a <strong>napiform</strong> root (turnip, beet) is almost spherical above and abruptly narrowed below. Sweet potato, in contrast, is a <em>tuberous adventitious</em> root and so has no definite shape."
                },
                {
                    id: "d22b177",
                    text: "The potato is a stem and not a root. The single most convincing morphological proof is that it:",
                    options: [
                        { key: "a", text: "Grows below the soil surface and stores starch" },
                        { key: "b", text: "Bears nodes with 'eyes' — scale leaves with axillary buds" },
                        { key: "c", text: "Has no root hairs and no root cap at its growing tip" },
                        { key: "d", text: "Is swollen and gives rise to a new plant when planted" }
                    ],
                    answer: "b",
                    explanation: "Only a stem bears <strong>nodes, internodes and buds</strong>. In a potato tuber the 'eyes' are axillary buds sitting in the axil of a scale leaf, and it is these that sprout when the tuber is planted. Ginger and turmeric (rhizomes), <em>Colocasia</em> (corm) and onion (bulb) are underground stems for the same reason; the sweet potato, which has none of these, is a root."
                },
                {
                    id: "d22b178",
                    text: "A compound leaf can be told from a branch bearing simple leaves because in a compound leaf:",
                    options: [
                        { key: "a", text: "Each leaflet has a bud in its axil, while the whole leaf has none at all" },
                        { key: "b", text: "The leaflets are always arranged oppositely on a green cylindrical rachis" },
                        { key: "c", text: "The rachis bears stalked green leaflets that fall off singly in autumn" },
                        { key: "d", text: "There is a bud in the axil of the whole leaf but none in the axil of the leaflets" }
                    ],
                    answer: "d",
                    explanation: "The position of the <strong>axillary bud</strong> is the decisive test: a bud is present in the axil of a leaf but never in the axil of a leaflet, and a compound leaf abscises as a unit. In a pinnately compound leaf the leaflets are borne on a rachis (neem, <em>Cassia</em>); in a palmately compound leaf they all arise from the tip of the petiole (silk cotton)."
                },
                {
                    id: "d22b179",
                    text: "In a racemose inflorescence the main axis goes on growing and the flowers open in an acropetal succession. This means that:",
                    options: [
                        { key: "a", text: "The oldest flowers are at the base and the youngest at the tip" },
                        { key: "b", text: "The oldest flower is at the tip and growth of the axis is checked" },
                        { key: "c", text: "All the flowers open at exactly the same moment" },
                        { key: "d", text: "The flowers open from the periphery towards the centre" }
                    ],
                    answer: "a",
                    explanation: "<strong>Racemose (indefinite)</strong> inflorescences have an unlimited axis with lateral flowers maturing from below upwards — <em>acropetal</em> — as in the radish raceme or the mustard corymb. In a <strong>cymose (definite)</strong> inflorescence the tip is used up by the first flower, so the succession is basipetal (or centrifugal in a flat head). Special types include the hypanthodium of <em>Ficus</em> and the cyathium of <em>Euphorbia</em>."
                },
                {
                    id: "d22b180",
                    text: "The vexillary (papilionaceous) aestivation of the pea flower means that the five petals are arranged so that the:",
                    options: [
                        { key: "a", text: "Petals just touch one another at the margins without overlapping" },
                        { key: "b", text: "Largest petal, the standard, overlaps the two wings, which cover the keel" },
                        { key: "c", text: "Keel petals overlap the wings, which in turn overlap the standard" },
                        { key: "d", text: "Petals are twisted so that each overlaps the next in one direction" }
                    ],
                    answer: "b",
                    explanation: "In <strong>vexillary</strong> aestivation the posterior <em>standard (vexillum)</em> is outermost and covers the two lateral <em>wings (alae)</em>, which in turn cover the two anterior petals fused into the boat-shaped <em>keel (carina)</em> that encloses the stamens and the ovary. Valvate aestivation is mere touching (<em>Calotropis</em>), twisted is one-way overlapping (china rose) and imbricate is irregular overlapping (<em>Cassia</em>)."
                },
                {
                    id: "d22b181",
                    text: "In the ovary of a tomato or a china rose the septa divide the ovary into as many chambers as there are carpels, and the ovules are borne on the central axis. This placentation is:",
                    options: [
                        { key: "a", text: "Marginal, as in the pea" },
                        { key: "b", text: "Parietal, as in the mustard" },
                        { key: "c", text: "Free central, as in <em>Dianthus</em>" },
                        { key: "d", text: "Axile, and the ovary is multilocular" }
                    ],
                    answer: "d",
                    explanation: "<strong>Axile</strong> placentation occurs in a syncarpous ovary in which the margins of the fused carpels grow inwards to meet in the centre, forming a solid axis carrying the ovules; the ovary is therefore multilocular (tomato, lemon, china rose). In <strong>parietal</strong> placentation the ovary is one-chambered with ovules on the wall, and in <strong>free central</strong> the septa break down leaving a naked central column."
                },
                {
                    id: "d22b182",
                    text: "The apple is called a false fruit, while the mango is a true fruit. This is because in the apple the edible part develops from the:",
                    options: [
                        { key: "a", text: "Thalamus, the ovary forming only the core" },
                        { key: "b", text: "Mesocarp of a superior ovary, as in a drupe" },
                        { key: "c", text: "Fused perianth, the ovary being wholly aborted" },
                        { key: "d", text: "Placenta and the septa of a multilocular ovary" }
                    ],
                    answer: "a",
                    explanation: "In a <strong>false (pseudocarpic) fruit</strong> some part other than the ovary contributes the bulk of the flesh — in apple and pear it is the fleshy <strong>thalamus</strong> surrounding the true fruit, which survives as the papery core. A true fruit develops from the ovary alone: the mango is a <em>drupe</em> with a fibrous mesocarp and a stony endocarp. <em>Ficus</em> gives a composite fruit, the syconus."
                },
                {
                    id: "d22b183",
                    text: "A plant has cruciform corolla, six stamens of which two are shorter than the other four, and a bicarpellary ovary that becomes a siliqua. Its family and its floral formula are:",
                    options: [
                        { key: "a", text: "Brassicaceae — $\\oplus\\ \\mathrm{K_{2+2}\\ C_4\\ A_{2+4}\\ \\underline{G}_{(2)}}$" },
                        { key: "b", text: "Solanaceae — $\\oplus\\ \\mathrm{K_{(5)}\\ C_{(5)}\\ A_5\\ \\underline{G}_{(2)}}$" },
                        { key: "c", text: "Fabaceae — $\\%\\ \\mathrm{K_{(5)}\\ C_{1+2+(2)}\\ A_{(9)+1}\\ \\underline{G}_1}$" },
                        { key: "d", text: "Liliaceae — $\\oplus\\ \\mathrm{P_{3+3}\\ A_{3+3}\\ \\underline{G}_{(3)}}$" }
                    ],
                    answer: "a",
                    explanation: "The <strong>Brassicaceae (Cruciferae)</strong> are defined by four sepals in two whorls, four free petals in a cross, <strong>tetradynamous</strong> stamens (2 short outer $+$ 4 long inner), a bicarpellary syncarpous superior ovary with <strong>parietal placentation</strong> made bilocular by a false septum (replum), and the fruit a siliqua or silicula. Mustard, radish and cabbage belong here."
                },
                {
                    id: "d22b184",
                    text: "The ovary of a <em>Solanum</em> flower is described as 'obliquely placed'. Along with this, the family Solanaceae is characterised by:",
                    options: [
                        { key: "a", text: "Diadelphous stamens, marginal placentation and a fruit that is a legume" },
                        { key: "b", text: "Six tetradynamous stamens, parietal placentation and a fruit that is a siliqua" },
                        { key: "c", text: "A perianth of six tepals, a superior trilocular ovary and a capsule fruit" },
                        { key: "d", text: "Five epipetalous stamens, axile placentation on a swollen placenta, and a berry" }
                    ],
                    answer: "d",
                    explanation: "Solanaceae — potato, tomato, brinjal, chilli, tobacco, <em>Datura</em> — have a gamosepalous persistent calyx, a gamopetalous corolla, <strong>five stamens attached to the corolla tube (epipetalous)</strong>, a bicarpellary syncarpous ovary set <em>obliquely</em> to the median plane with a swollen axile placenta, and a berry or capsule. The floral formula is $\\oplus\\ \\mathrm{K_{(5)}\\ C_{(5)}\\ A_5\\ \\underline{G}_{(2)}}$."
                },
                {
                    id: "d22b185",
                    text: "In the pea flower nine stamens are united by their filaments into a bundle and the tenth stands free. Such an androecium is termed:",
                    options: [
                        { key: "a", text: "Monadelphous, as in the china rose" },
                        { key: "b", text: "Polyadelphous, as in the citrus" },
                        { key: "c", text: "Diadelphous, and is typical of the Fabaceae" },
                        { key: "d", text: "Syngenesious, as in the sunflower" }
                    ],
                    answer: "c",
                    explanation: "<strong>Diadelphous</strong> $(9)+1$ stamens are a hallmark of the sub-family Papilionoideae, along with the papilionaceous corolla, the monocarpellary superior ovary with <strong>marginal placentation</strong> and the fruit a <strong>legume (pod)</strong>. Monadelphous means all filaments in one bundle, polyadelphous many bundles, and syngenesious means the <em>anthers</em> — not the filaments — are united."
                },
                {
                    id: "d22b186",
                    text: "The floral formula of the Liliaceae, $\\oplus\\ \\mathrm{P_{3+3}\\ A_{3+3}\\ \\underline{G}_{(3)}}$, tells us that the flower is:",
                    options: [
                        { key: "a", text: "Actinomorphic and trimerous, with an undifferentiated perianth and a superior ovary" },
                        { key: "b", text: "Zygomorphic and pentamerous, with a distinct calyx and corolla and six stamens" },
                        { key: "c", text: "Actinomorphic and trimerous, with an inferior ovary of three free carpels" },
                        { key: "d", text: "Zygomorphic and trimerous, with three stamens and a monocarpellary ovary" }
                    ],
                    answer: "a",
                    explanation: "$\\oplus$ means radial symmetry; <strong>P</strong> shows that the sepals and petals are alike and so are written as a <em>perianth</em> of six tepals in two whorls of three; $\\mathrm{A_{3+3}}$ gives six stamens; and the line <em>below</em> the G marks a <strong>superior</strong> ovary of three fused carpels with axile placentation. Onion, garlic, <em>Aloe</em> and <em>Colchicum</em> are members; the fruit is a capsule or berry."
                },
                {
                    id: "d22b187",
                    text: "In writing a floral formula, the symbols $\\%$, $\\mathrm{Br}$ and a line drawn <em>above</em> the letter G stand respectively for:",
                    options: [
                        { key: "a", text: "Radial symmetry, bisexuality and a superior ovary" },
                        { key: "b", text: "Bilateral symmetry, bracteate condition and an inferior ovary" },
                        { key: "c", text: "Bilateral symmetry, bisexuality and a half-inferior ovary" },
                        { key: "d", text: "Radial symmetry, bracteolate condition and a superior ovary" }
                    ],
                    answer: "b",
                    explanation: "$\\%$ denotes a <strong>zygomorphic</strong> (bilaterally symmetrical) flower, $\\oplus$ an actinomorphic one; <strong>Br</strong> means the flower is subtended by a bract; and a line <strong>above</strong> the G shows that the ovary is <strong>inferior</strong> (epigynous flower), while a line below it shows a superior ovary. Separate male and female symbols are used for unisexual flowers, and $\\bigodot$ for a bisexual one."
                },
                {
                    id: "d22b188",
                    text: "A floral diagram is drawn with the mother axis at the top and the bract at the bottom. Its purpose is to show:",
                    options: [
                        { key: "a", text: "The number of floral parts only, and nothing else about them" },
                        { key: "b", text: "The exact colour and size of each of the floral whorls" },
                        { key: "c", text: "The number, cohesion, adhesion and relative position of the parts" },
                        { key: "d", text: "The sequence in which the whorls develop during the bud stage" }
                    ],
                    answer: "c",
                    explanation: "The <strong>floral diagram</strong> is a ground plan of the flower as seen in cross section: it shows how many members each whorl has, whether they are free or fused (<em>cohesion</em>), whether one whorl is attached to another (<em>adhesion</em>, e.g. epipetalous stamens), how they are placed with respect to the axis, and the type of placentation. Colour and size cannot be represented."
                },
                {
                    id: "d22b189",
                    text: "Which pair of a fruit and its type is correctly matched?",
                    options: [
                        { key: "a", text: "Coconut — berry, because the whole pericarp is fleshy" },
                        { key: "b", text: "Orange — hesperidium, a berry with a leathery rind and juicy hairs" },
                        { key: "c", text: "Mustard — legume, splitting along both the sutures" },
                        { key: "d", text: "Wheat grain — achene, in which the seed coat is free from the wall" }
                    ],
                    answer: "b",
                    explanation: "In a <strong>hesperidium</strong> the epicarp and mesocarp form the leathery rind with oil glands and the endocarp projects inwards as the juicy hairs — the edible part of a citrus fruit. The coconut is a fibrous <em>drupe</em>, mustard gives a <em>siliqua</em> (a legume is the Fabaceae fruit), and the wheat grain is a <em>caryopsis</em>, in which the seed coat is fused to the pericarp."
                },
                {
                    id: "d22b190",
                    text: "Castor and maize seeds retain their endosperm at maturity while pea and gram do not. In the latter the food is stored in the:",
                    options: [
                        { key: "a", text: "Perisperm, the persistent remains of the nucellus" },
                        { key: "b", text: "Aleurone layer lying just below the seed coat" },
                        { key: "c", text: "Scutellum, a shield-shaped organ against the endosperm" },
                        { key: "d", text: "Two fleshy cotyledons, which absorb the endosperm early" }
                    ],
                    answer: "d",
                    explanation: "In <strong>non-endospermic (exalbuminous)</strong> seeds the developing embryo digests and absorbs the endosperm, transferring the reserves to its <strong>cotyledons</strong>, which become thick and fleshy — as in pea, gram, groundnut and bean. Endospermic seeds such as castor, maize and coconut keep the endosperm; the scutellum is the single cotyledon of a grass, and perisperm is unused nucellus (black pepper)."
                },
                {
                    id: "d22b191",
                    text: "Although viruses are notorious as agents of disease, they are of positive value in modern biology chiefly because they:",
                    options: [
                        { key: "a", text: "Fix atmospheric nitrogen inside the root nodules of legumes" },
                        { key: "b", text: "Serve as vectors in gene therapy and as bacteriophages against bacteria" },
                        { key: "c", text: "Are used to ferment milk into curd and cheese on a large scale" },
                        { key: "d", text: "Manufacture antibiotics such as penicillin and streptomycin" }
                    ],
                    answer: "b",
                    explanation: "Because a virus naturally inserts its nucleic acid into a host cell, engineered viruses are used as <strong>vectors for gene therapy and vaccine production</strong>; <strong>bacteriophages</strong> are used in phage therapy, in bacterial typing and as tools in molecular biology, and some viruses (baculovirus) are commercial biopesticides. Their study also gave us the first insight into the nature of the gene."
                },
                {
                    id: "d22b192",
                    text: "Which set of bacterial activities is correctly stated?",
                    options: [
                        { key: "a", text: "<em>Rhizobium</em> curdles milk while <em>Lactobacillus</em> fixes nitrogen in nodules" },
                        { key: "b", text: "<em>Clostridium</em> yields penicillin and <em>Escherichia</em> naturally makes human insulin" },
                        { key: "c", text: "<em>Lactobacillus</em> curdles milk, <em>Rhizobium</em> fixes nitrogen, <em>Streptomyces</em> gives antibiotics" },
                        { key: "d", text: "<em>Nitrobacter</em> ferments alcohol while <em>Acetobacter</em> oxidises ammonia to nitrite" }
                    ],
                    answer: "c",
                    explanation: "<em>Lactobacillus</em> converts lactose to lactic acid and sets milk into curd; <em>Rhizobium</em> in the root nodules of legumes fixes atmospheric nitrogen; the actinomycete <em>Streptomyces</em> gives streptomycin, tetracycline and many other antibiotics. Bacteria also ret jute and flax, cure tea, tobacco and vanilla, produce vinegar, vitamins and enzymes, and clean sewage."
                },
                {
                    id: "d22b193",
                    text: "<em>Nostoc</em>, <em>Anabaena</em> and the <em>Azolla</em>–<em>Anabaena</em> association are especially valuable in Nepalese paddy fields because they:",
                    options: [
                        { key: "a", text: "Act as biofertilisers by fixing atmospheric nitrogen in the flooded soil" },
                        { key: "b", text: "Kill the larvae of mosquitoes that breed in the standing water" },
                        { key: "c", text: "Decompose the stubble left in the field after the harvest" },
                        { key: "d", text: "Yield agar used for culturing microbes in the laboratory" }
                    ],
                    answer: "a",
                    explanation: "Cyanobacteria fix nitrogen in their heterocysts and enrich waterlogged rice soils, saving fertiliser; the water fern <em>Azolla</em> harbours <em>Anabaena azollae</em> in its leaf cavities and is used as a green manure. <em>Spirulina</em> is grown as a protein-rich food supplement, and blue-green algae also help reclaim saline 'usar' land. Agar is a product of red algae."
                },
                {
                    id: "d22b194",
                    text: "Which economic use of fungi is correctly stated?",
                    options: [
                        { key: "a", text: "<em>Agaricus</em> is the source of the antibiotic streptomycin" },
                        { key: "b", text: "<em>Aspergillus niger</em> is used to leaven bread and brew beer" },
                        { key: "c", text: "<em>Saccharomyces</em> yields the immunosuppressant cyclosporin A" },
                        { key: "d", text: "<em>Penicillium notatum</em> gives penicillin, the first antibiotic" }
                    ],
                    answer: "d",
                    explanation: "Fleming discovered <strong>penicillin</strong> from <em>Penicillium notatum</em> in 1928. <em>Saccharomyces cerevisiae</em> is the baker's and brewer's yeast, <em>Aspergillus niger</em> is used industrially for <strong>citric acid</strong>, <em>Trichoderma polysporum</em> gives cyclosporin A, and <em>Agaricus</em>, <em>Morchella</em> and <em>Volvariella</em> are eaten as mushrooms. Fungi are also the chief decomposers and the partners in mycorrhizae."
                },
                {
                    id: "d22b195",
                    text: "Which statement about the economic importance of algae is correct?",
                    options: [
                        { key: "a", text: "Half the world's carbon fixation is done by land plants alone" },
                        { key: "b", text: "<em>Chlorella</em> is grown as single-cell protein and even used in space diets" },
                        { key: "c", text: "Iodine and potash are extracted from the red alga <em>Gelidium</em>" },
                        { key: "d", text: "<em>Sargassum</em> is the world's chief commercial source of agar" }
                    ],
                    answer: "b",
                    explanation: "<em>Chlorella</em>, a unicellular green alga, is rich in protein and vitamins and is cultured as a food supplement; <em>Porphyra</em> and <em>Laminaria</em> are eaten in the East. Iodine and potash come from the <strong>brown</strong> algae <em>Laminaria</em> and <em>Sargassum</em>, agar from the red algae <em>Gelidium</em> and <em>Gracilaria</em>. Marine algae carry out roughly half of all photosynthesis on earth."
                },
                {
                    id: "d22b196",
                    text: "Besides <em>Sphagnum</em>, the general ecological usefulness of bryophytes lies in the fact that they:",
                    options: [
                        { key: "a", text: "Provide timber and firewood in the high Himalaya" },
                        { key: "b", text: "Fix atmospheric nitrogen through nodules on their rhizoids" },
                        { key: "c", text: "Bind the soil, check erosion and help convert rock into soil" },
                        { key: "d", text: "Are the chief food of grazing cattle in the alpine pastures" }
                    ],
                    answer: "c",
                    explanation: "Growing as a dense mat over rock and bare ground, mosses and liverworts <strong>hold water, break the force of falling rain, prevent erosion and add humus</strong>, so that, following the lichens, they turn bare rock into soil fit for higher plants. <em>Sphagnum</em> additionally gives peat and packing material, and some, such as <em>Marchantia</em>, have been used medicinally."
                },
                {
                    id: "d22b197",
                    text: "The pteridophytes of economic value include:",
                    options: [
                        { key: "a", text: "<em>Dryopteris</em> as a vermifuge, <em>Azolla</em> as a biofertiliser, <em>Equisetum</em> for scouring" },
                        { key: "b", text: "<em>Selaginella</em> as a source of quinine, <em>Marsilea</em> of caffeine and <em>Pteris</em> of insulin" },
                        { key: "c", text: "<em>Lycopodium</em> as a timber tree, <em>Adiantum</em> as a cereal and <em>Salvinia</em> as a pulse" },
                        { key: "d", text: "<em>Azolla</em> as a source of agar, <em>Equisetum</em> of turpentine and <em>Marsilea</em> of rubber" }
                    ],
                    answer: "a",
                    explanation: "The rhizome of <em>Dryopteris</em> yields <strong>filicin</strong>, used against tapeworm; <em>Azolla</em>, with its cyanobacterial partner, is a nitrogen-rich green manure for rice; the silica-encrusted stem of <em>Equisetum</em> was traditionally used for scouring utensils. Many ferns (<em>Adiantum</em>, <em>Nephrolepis</em>) are ornamentals, young fronds of <em>Diplazium</em> (<em>niuro</em>) are eaten in Nepal, and <em>Lycopodium</em> spores are used as a dusting powder."
                },
                {
                    id: "d22b198",
                    text: "Which pair of an angiosperm family or plant and its economic product is correctly matched?",
                    options: [
                        { key: "a", text: "Brassicaceae — pulses rich in protein, such as gram and lentil" },
                        { key: "b", text: "Fabaceae — the source of the mustard and rapeseed oils" },
                        { key: "c", text: "Solanaceae — the fibre used in making ropes and sacking" },
                        { key: "d", text: "Liliaceae — <em>Colchicum</em>, the source of the alkaloid colchicine" }
                    ],
                    answer: "d",
                    explanation: "<em>Colchicum autumnale</em> of the Liliaceae yields <strong>colchicine</strong>, used to induce polyploidy and to treat gout; the family also gives onion, garlic, <em>Aloe</em> and <em>Asparagus</em>. Oils come from the Brassicaceae (mustard, rapeseed), pulses, dyes (indigo) and gums from the Fabaceae, and food, drug and narcotic plants (potato, tomato, chilli, tobacco, <em>Belladonna</em>) from the Solanaceae."
                },
                {
                    id: "d22b199",
                    text: "<em>Rauwolfia serpentina</em> (sarpagandha) and <em>Ophiocordyceps sinensis</em> (yarsagumba) are two high-value products of Nepal. They are used respectively:",
                    options: [
                        { key: "a", text: "As a substitute for tea in the hills; and as an edible oil pressed from the seed" },
                        { key: "b", text: "For hypertension, from reserpine in its root; and as a tonic, a fungus on a caterpillar" },
                        { key: "c", text: "As an insecticide obtained from the leaf; and as a high-quality timber for furniture" },
                        { key: "d", text: "For malaria, from quinine in its bark; and as a spice ground from the dried rhizome" }
                    ],
                    answer: "b",
                    explanation: "The root of <em>Rauwolfia serpentina</em> contains <strong>reserpine</strong>, long used to lower blood pressure and as a tranquilliser; the plant is protected in Nepal because of over-collection. <strong>Yarsagumba</strong> is not a plant at all but an ascomycete fungus that parasitises a ghost-moth caterpillar in the high Himalaya, and the fungus–larva complex is prized as a tonic and aphrodisiac."
                },
                {
                    id: "d22b200",
                    text: "Neem, tulasi and ginger are used respectively for their:",
                    options: [
                        { key: "a", text: "Rhizome as a spice, leaf as an antimalarial drug and root as a strong purgative" },
                        { key: "b", text: "Bark as the source of quinine, seed as an edible oil and flower as a fabric dye" },
                        { key: "c", text: "Azadirachtin as an insecticide, eugenol as an antiseptic, rhizome as a carminative" },
                        { key: "d", text: "Latex tapped for rubber, wood as a fuel and the fleshy fruit as a vegetable" }
                    ],
                    answer: "c",
                    explanation: "<em>Azadirachta indica</em> (neem) yields <strong>azadirachtin</strong>, a powerful natural insect repellent and antifeedant, besides its antiseptic twigs and oil; <em>Ocimum sanctum</em> (tulasi) leaves are rich in <strong>eugenol</strong> and are used for coughs, colds and as an antibacterial; the rhizome of <em>Zingiber officinale</em> (ginger) contains gingerol and zingiberene and is used as a spice, carminative and remedy for nausea."
                }
            ]
        }
    ]
};
/* Topic names and `weight` (questions the unit carries in the real CEE paper) follow the
   official MEC "Syllabus for Bachelor Level Common Entrance Examination (2020, revised 2026)".
   This day is a two-unit deep drill, so only the single official unit each subject belongs to
   is shown: Zoology unit 5 (weight 15) and Botany unit 2 (weight 9). */
const DAY22_SYLLABUS = [
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "5. Human Biology and Physiology", weight: 15, subs: [
            { name: "Digestive System: Alimentary Canal, Glands & Physiology of Digestion", ids: ["d22z1", "d22z2", "d22z3", "d22z4", "d22z5", "d22z6", "d22z7", "d22z8", "d22z9", "d22z10", "d22z11", "d22z12", "d22z13"] },
            { name: "Respiratory System: Organs, Gas Transport, Regulation & Disorders", ids: ["d22z14", "d22z15", "d22z16", "d22z17", "d22z18", "d22z19", "d22z20", "d22z21", "d22z22", "d22z23", "d22z24", "d22z25", "d22z26"] },
            { name: "Circulatory System: Heart, Cardiac Cycle, Vessels, Blood Groups & Disorders", ids: ["d22z27", "d22z28", "d22z29", "d22z30", "d22z31", "d22z32", "d22z33", "d22z34", "d22z35", "d22z36", "d22z37", "d22z38", "d22z39", "d22z40", "d22z41", "d22z42"] },
            { name: "Excretory System: Organs, Urine Formation & Renal Disorders", ids: ["d22z43", "d22z44", "d22z45", "d22z46", "d22z47", "d22z48", "d22z49", "d22z50", "d22z51", "d22z52", "d22z53", "d22z54"] },
            { name: "Nervous System: CNS, PNS, Autonomic & Nerve Impulse", ids: ["d22z55", "d22z56", "d22z57", "d22z58", "d22z59", "d22z60", "d22z61", "d22z62", "d22z63", "d22z64", "d22z65", "d22z66", "d22z67", "d22z68"] },
            { name: "Sense Organs: Eye and Ear", ids: ["d22z69", "d22z70", "d22z71", "d22z72", "d22z73", "d22z74", "d22z75", "d22z76", "d22z77", "d22z78", "d22z79"] },
            { name: "Endocrinology: Glands, Hormones and Disorders", ids: ["d22z80", "d22z81", "d22z82", "d22z83", "d22z84", "d22z85", "d22z86", "d22z87", "d22z88", "d22z89", "d22z90", "d22z91"] },
            { name: "Reproductive System: Organs, Gametogenesis, Ovarian & Menstrual Cycle", ids: ["d22z92", "d22z93", "d22z94", "d22z95", "d22z96", "d22z97", "d22z98", "d22z99", "d22z100", "d22z101"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Introduction: 2-Kingdom, Hierarchy & Nomenclature, 5-Kingdom, 3-Domain", ids: ["d22b102", "d22b103", "d22b104", "d22b105", "d22b106", "d22b107", "d22b108", "d22b109", "d22b110", "d22b111"] },
            { name: "Monera & Virus", ids: ["d22b112", "d22b113", "d22b114", "d22b115", "d22b116", "d22b117", "d22b118", "d22b119", "d22b120", "d22b121", "d22b122", "d22b123", "d22b124", "d22b125"] },
            { name: "Fungi & Lichens", ids: ["d22b126", "d22b127", "d22b128", "d22b129", "d22b130", "d22b131", "d22b132", "d22b133", "d22b134", "d22b135", "d22b136", "d22b137", "d22b138"] },
            { name: "Algae", ids: ["d22b139", "d22b140", "d22b141", "d22b142", "d22b143", "d22b144", "d22b145", "d22b146", "d22b147", "d22b148", "d22b149"] },
            { name: "Bryophytes", ids: ["d22b150", "d22b151", "d22b152", "d22b153", "d22b154", "d22b155", "d22b156", "d22b157", "d22b158", "d22b159"] },
            { name: "Pteridophytes", ids: ["d22b160", "d22b161", "d22b162", "d22b163", "d22b164", "d22b165", "d22b166", "d22b167"] },
            { name: "Gymnosperms", ids: ["d22b168", "d22b169", "d22b170", "d22b171", "d22b172", "d22b173", "d22b174", "d22b175"] },
            { name: "Angiosperms: Morphology, Families & Floral Formulae", ids: ["d22b176", "d22b177", "d22b178", "d22b179", "d22b180", "d22b181", "d22b182", "d22b183", "d22b184", "d22b185", "d22b186", "d22b187", "d22b188", "d22b189", "d22b190"] },
            { name: "Economic Importance & Medicinal Plants of Nepal", ids: ["d22b191", "d22b192", "d22b193", "d22b194", "d22b195", "d22b196", "d22b197", "d22b198", "d22b199", "d22b200"] }
        ] }
    ] }
];
DAY22.syllabus = DAY22_SYLLABUS;

