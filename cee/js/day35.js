const DAY35 = {
    day: 35,
    title: "Day 35",
    subtitle: "Targeted Revision, Human Biology & Ray Optics",
    durationMinutes: 60,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "physicsrevision35",
            name: "Physics Revision",
            subject: "Physics",
            accent: "cyan",
            blurb: "Elasticity, alternating current and atomic spectra.",
            questions: [
                {
                    id: "d35p1",
                    revisionOf: { day: 34, question: 3, id: "d34p3" },
                    text: "A uniform wire of weight $W$ hangs vertically and extends by $e$ under its own weight. A load of weight $2W$ is then attached to its lower end. Within the elastic limit, what <b>further extension</b> does this load produce?",
                    options: [
                        { key: "a", text: "$2e$" },
                        { key: "b", text: "$4e$" },
                        { key: "c", text: "$e/2$" },
                        { key: "d", text: "$e$" }
                    ],
                    answer: "b",
                    explanation: "The wire's own weight gives tension varying from zero to $W$, so its average tension is $W/2$ and $e=WL/(2AY)$. The added end load contributes a uniform extra tension $2W$, producing $2WL/(AY)=4e$. This is the further extension; the total extension after loading would be $5e$."
                },
                {
                    id: "d35p2",
                    revisionOf: { day: 34, question: 14, id: "d34p14" },
                    text: "An alternating current is $I=6\\sin(80\\pi t)$ A, with $t$ measured in seconds. Starting at $t=0$, when does it first reach its positive maximum?",
                    options: [
                        { key: "a", text: "0.025 s" },
                        { key: "b", text: "0.0125 s" },
                        { key: "c", text: "0.003125 s" },
                        { key: "d", text: "0.00625 s" }
                    ],
                    answer: "d",
                    explanation: "The sine first reaches +1 when its argument is $\\pi/2$. Thus $80\\pi t=\\pi/2$, giving $t=1/160=0.00625$ s. Equivalently, the period is $2\\pi/(80\\pi)=0.025$ s, and the first peak occurs after one-quarter period, not one-half period."
                },
                {
                    id: "d35p3",
                    revisionOf: { day: 34, question: 17, id: "d34p17" },
                    text: "A large collection of ground-state hydrogen atoms absorbs photons of energy 13.056 eV. Taking $E_n=-13.6/n^2$ eV and ignoring fine structure, how many distinct emission lines can arise from all possible subsequent downward transitions?",
                    options: [
                        { key: "a", text: "10" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "15" }
                    ],
                    answer: "a",
                    explanation: "After absorption the energy is $-13.6+13.056=-0.544$ eV. Therefore $n^2=13.6/0.544=25$, so the atoms reach $n=5$. Across the collection, transitions between any two of the five levels can occur: $5(5-1)/2=10$ distinct lines. A single atom's cascade need not emit all ten."
                },
                {
                    id: "d35p4",
                    followUpOf: { day: 34, question: 3, id: "d34p3" },
                    text: "Two uniform wires have the same material and cross-sectional area. One is half as long as the other. If both hang freely under their own weight, the shorter wire's extension is what fraction of the longer wire's extension?",
                    options: [
                        { key: "a", text: "$1/2$" },
                        { key: "b", text: "$1$" },
                        { key: "c", text: "$1/4$" },
                        { key: "d", text: "$2$" }
                    ],
                    answer: "c",
                    explanation: "Own-weight extension is $e=mgL/(2AY)$. Since $m=\\rho AL$, this becomes $e=\\rho gL^2/(2Y)$. It scales with the square of the length, so halving the length gives $(1/2)^2=1/4$ of the extension. The shorter wire also weighs less; treating its load as unchanged would miss this factor."
                },
                {
                    id: "d35p5",
                    followUpOf: { day: 34, question: 14, id: "d34p14" },
                    text: "For a current $I=5\\sin(100\\pi t)$ A, what time interval separates two successive <b>positive</b> peaks?",
                    options: [
                        { key: "a", text: "0.010 s" },
                        { key: "b", text: "0.020 s" },
                        { key: "c", text: "0.005 s" },
                        { key: "d", text: "0.040 s" }
                    ],
                    answer: "b",
                    explanation: "Successive positive peaks are one complete period apart. Here $T=2\\pi/(100\\pi)=0.020$ s. The first positive peak is only 0.005 s after the initial zero, whereas a positive peak and the following negative peak are 0.010 s apart. These intervals describe different parts of the cycle."
                }
            ]
        },
        {
            id: "chemistryrevision35",
            name: "Chemistry Revision",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Atomic structure, complexes, equilibrium, acid equivalents and organic reactions.",
            questions: [
                {
                    id: "d35c1",
                    revisionOf: { day: 34, question: 22, id: "d34c2" },
                    text: "An electron's spatial orbital is described by $n=5$, $l=3$ and $m_l=+2$. How many distinct orbitals are selected by this fixed set of three quantum numbers?",
                    options: [
                        { key: "a", text: "7" },
                        { key: "b", text: "14" },
                        { key: "c", text: "1" },
                        { key: "d", text: "2" }
                    ],
                    answer: "c",
                    explanation: "The values are allowed: $l=3$ is an f subshell and $m_l=+2$ lies between -3 and +3. Fixing all three spatial quantum numbers selects one 5f orbital. Seven counts all orbitals in the 5f subshell, fourteen its electron capacity, and two the capacity of a single orbital."
                },
                {
                    id: "d35c2",
                    revisionOf: { day: 34, question: 23, id: "d34c3" },
                    text: "Using the valence-bond model, which hybridization describes the central ion in low-spin octahedral $[\\mathrm{Fe(CN)_6}]^{4-}$? Treat cyanide as a strong-field ligand.",
                    options: [
                        { key: "a", text: "$d^2sp^3$" },
                        { key: "b", text: "$sp^3d^2$" },
                        { key: "c", text: "$dsp^2$" },
                        { key: "d", text: "$sp^3$" }
                    ],
                    answer: "a",
                    explanation: "Six cyanide ligands contribute -6, so iron is +2 and has a $3d^6$ configuration. In the low-spin valence-bond description, the electrons pair to leave two inner 3d orbitals available. These combine with one 4s and three 4p orbitals: $d^2sp^3$. Octahedral geometry alone is not enough to choose between inner- and outer-orbital descriptions."
                },
                {
                    id: "d35c3",
                    revisionOf: { day: 34, question: 24, id: "d34c4" },
                    text: "For the neutral brown-ring salt $[\\mathrm{Fe(H_2O)_5NO}]\\mathrm{SO_4}$, assign water zero charge and nitrosyl the formal charge $\\mathrm{NO^+}$. What is iron's formal oxidation number under this convention?",
                    options: [
                        { key: "a", text: "+2" },
                        { key: "b", text: "+3" },
                        { key: "c", text: "0" },
                        { key: "d", text: "+1" }
                    ],
                    answer: "d",
                    explanation: "Sulphate has charge -2, so the bracketed complex must be +2. With neutral water and the stated +1 assignment to nitrosyl, $x+1=2$, giving $x=+1$ for iron. This is formal bookkeeping under an explicit ligand convention; nitrosyl is non-innocent, so the result is not a literal measurement of the metal's charge."
                },
                {
                    id: "d35c4",
                    revisionOf: { day: 34, question: 25, id: "d34c5" },
                    text: "For $A+B\\rightleftharpoons C+D$, a mixture initially contains equal concentrations of A and B and no products. At equilibrium, $[C]=4[A]$. What is $K_c$?",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "16" },
                        { key: "c", text: "$1/4$" },
                        { key: "d", text: "$1/16$" }
                    ],
                    answer: "b",
                    explanation: "Equal initial amounts and 1:1 stoichiometry keep $[A]=[B]$. Products form equally, so $[C]=[D]$. Writing the equilibrium reactant concentration as $a$ gives both product concentrations as $4a$. Therefore $K_c=(4a)(4a)/(a\\cdot a)=16$, not 4."
                },
                {
                    id: "d35c5",
                    revisionOf: { day: 34, question: 27, id: "d34c7" },
                    text: "A sulphuric-acid solution is 7.35% (w/v). For complete neutralization of both acidic hydrogens, what is its normality? Use a molar mass of 98 g/mol.",
                    options: [
                        { key: "a", text: "1.50 N" },
                        { key: "b", text: "0.75 N" },
                        { key: "c", text: "0.15 N" },
                        { key: "d", text: "3.00 N" }
                    ],
                    answer: "a",
                    explanation: "7.35% (w/v) means 7.35 g in 100 mL of solution, hence 73.5 g per litre. For this neutralization, the equivalent mass is $98/2=49$ g/equivalent. Thus normality is $73.5/49=1.50$ N. The molarity is 0.75 M, which must be multiplied by the reaction's equivalence factor of two."
                },
                {
                    id: "d35c6",
                    revisionOf: { day: 34, question: 32, id: "d34c12" },
                    text: "In the usual description of benzene sulphonation with oleum, benzene donates pi-electron density to which conventional electrophile?",
                    options: [
                        { key: "a", text: "$\\mathrm{HSO_3^-}$" },
                        { key: "b", text: "$\\mathrm{SO_4^{2-}}$" },
                        { key: "c", text: "$\\mathrm{SO_3}$" },
                        { key: "d", text: "$\\mathrm{SO_2}$" }
                    ],
                    answer: "c",
                    explanation: "Oleum contains sulphur trioxide, whose electron-deficient sulphur accepts electron density from the benzene ring. The standard electrophile is therefore $\\mathrm{SO_3}$. The anions listed are not this electrophile, and sulphur dioxide is not the usual sulphonating species in this reaction."
                },
                {
                    id: "d35c7",
                    revisionOf: { day: 34, question: 33, id: "d34c13" },
                    text: "Pent-2-yne is treated with sodium in liquid ammonia. What is the predominant organic product?",
                    options: [
                        { key: "a", text: "cis-Pent-2-ene" },
                        { key: "b", text: "Pent-1-ene" },
                        { key: "c", text: "Pentane" },
                        { key: "d", text: "trans-Pent-2-ene" }
                    ],
                    answer: "d",
                    explanation: "Dissolving-metal reduction of an internal alkyne normally stops at an alkene with overall anti addition of hydrogen, giving the trans product. The multiple bond remains between carbons 2 and 3. Lindlar-catalysed hydrogenation would instead favour cis-pent-2-ene, while complete hydrogenation would give pentane."
                },
                {
                    id: "d35c8",
                    revisionOf: { day: 34, question: 35, id: "d34c15" },
                    text: "Which compound is not a conventional acylating reagent for benzene under ordinary Friedel-Crafts acylation conditions?",
                    options: [
                        { key: "a", text: "Propanoyl chloride" },
                        { key: "b", text: "Butanamide" },
                        { key: "c", text: "Acetic anhydride" },
                        { key: "d", text: "Benzoyl chloride" }
                    ],
                    answer: "b",
                    explanation: "Acid chlorides and anhydrides readily provide suitable acyl electrophiles with a Lewis acid. An ordinary amide such as butanamide does not: nitrogen strongly stabilizes its carbonyl by resonance, and its nitrogen-containing group is a poor leaving group under these conditions. Merely containing a carbonyl group does not make a compound a normal acylating reagent."
                },
                {
                    id: "d35c9",
                    revisionOf: { day: 34, question: 38, id: "d34c18" },
                    text: "Sulphurous acid is conventionally written as $\\mathrm{H_2SO_3}$. How many moles of NaOH are required to neutralize 0.25 mol of this acid completely to sodium sulphite?",
                    options: [
                        { key: "a", text: "0.25 mol" },
                        { key: "b", text: "0.125 mol" },
                        { key: "c", text: "0.50 mol" },
                        { key: "d", text: "0.75 mol" }
                    ],
                    answer: "c",
                    explanation: "Sulphurous acid is dibasic. Complete neutralization follows $\\mathrm{H_2SO_3+2NaOH}$ &rarr; $\\mathrm{Na_2SO_3+2H_2O}$. Thus 0.25 mol acid needs $2\\times0.25=0.50$ mol NaOH. Using only 0.25 mol would correspond to replacing one acidic hydrogen, forming hydrogen sulphite instead of sulphite."
                },
                {
                    id: "d35c10",
                    revisionOf: { day: 34, question: 42, id: "d34c22" },
                    text: "Benzoyl chloride is hydrolysed by water, producing benzoic acid. Which acidic substance accounts for the fumes evolved during this reaction?",
                    options: [
                        { key: "a", text: "Hydrogen chloride" },
                        { key: "b", text: "Chlorine" },
                        { key: "c", text: "Sulphur dioxide" },
                        { key: "d", text: "Carbon dioxide" }
                    ],
                    answer: "a",
                    explanation: "Hydrolysis replaces the acid chloride's chlorine by an OH group, producing benzoic acid and HCl. The reaction is $\\mathrm{C_6H_5COCl+H_2O}$ &rarr; $\\mathrm{C_6H_5COOH+HCl}$. Hydrogen chloride gives acidic fumes; chlorine gas is not the leaving product, and no carbon dioxide is formed."
                },
                {
                    id: "d35c11",
                    followUpOf: { day: 34, question: 22, id: "d34c2" },
                    text: "Only $n=4$ and $l=1$ are specified; the magnetic quantum number is not fixed. How many orbitals satisfy these two conditions?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "3" },
                        { key: "c", text: "6" },
                        { key: "d", text: "9" }
                    ],
                    answer: "b",
                    explanation: "These values specify the 4p subshell. Since $m_l$ may be -1, 0 or +1, there are three orbitals, following $2l+1=3$. Six is their maximum electron capacity, not the number of orbitals. Fixing one particular magnetic quantum number as well would instead select one orbital."
                },
                {
                    id: "d35c12",
                    followUpOf: { day: 34, question: 25, id: "d34c5" },
                    text: "For $A+B\\rightleftharpoons C+D$, initially A and B have equal concentrations and no C or D is present. If $K_c=25$, what is the equilibrium ratio $[C]/[A]$?",
                    options: [
                        { key: "a", text: "25" },
                        { key: "b", text: "$1/25$" },
                        { key: "c", text: "$1/5$" },
                        { key: "d", text: "5" }
                    ],
                    answer: "d",
                    explanation: "The given starting mixture and 1:1 stoichiometry imply equal reactant concentrations at equilibrium and equal product concentrations. Therefore $K_c=([C]/[A])^2$. Concentrations are non-negative, so the required ratio is $\\sqrt{25}=5$. Taking the reciprocal would reverse products and reactants."
                }
            ]
        },
        {
            id: "senserevision35",
            name: "Sense Organ Revision",
            subject: "Zoology",
            accent: "rose",
            blurb: "Iris muscle responses to illumination.",
            questions: [
                {
                    id: "d35z1",
                    revisionOf: { day: 34, question: 52, id: "d34z9" },
                    text: "Prakriti walks from a dim corridor into bright sunlight. Which iris-muscle response reduces the light entering her eyes?",
                    options: [
                        { key: "a", text: "Radial muscles contract; the pupil widens" },
                        { key: "b", text: "Radial muscles contract; the pupil narrows" },
                        { key: "c", text: "Circular muscles contract; the pupil widens" },
                        { key: "d", text: "Circular muscles contract; the pupil narrows" }
                    ],
                    answer: "d",
                    explanation: "In bright light, contraction of the circular sphincter muscles of the iris constricts the pupil, while the radial dilator muscles relax. This reduces the light admitted. In dim light the opposite response dilates the pupil. Ciliary-muscle action changes lens shape for focusing, not pupil diameter."
                }
            ]
        },
        {
            id: "matrevision35",
            name: "MAT Revision",
            subject: "MAT",
            accent: "slate",
            blurb: "Classification, syllogisms, truth conditions and painted cubes.",
            questions: [
                {
                    id: "d35m1",
                    revisionOf: { day: 34, question: 81, id: "d34m8" },
                    text: "One entry names a mineral; the other three name rocks. Which is the odd one out?",
                    options: [
                        { key: "a", text: "Gypsum" },
                        { key: "b", text: "Obsidian" },
                        { key: "c", text: "Schist" },
                        { key: "d", text: "Conglomerate" }
                    ],
                    answer: "a",
                    explanation: "Gypsum is a mineral, hydrated calcium sulphate. Obsidian is an igneous rock, schist a metamorphic rock and conglomerate a sedimentary rock. The classification concerns mineral versus rock, not whether each entry has a crystalline appearance or contains several different ingredients."
                },
                {
                    id: "d35m2",
                    revisionOf: { day: 34, question: 89, id: "d34m16" },
                    text: "Use only the statements given.<br><b>Statements:</b> All cyclists are athletes. Some athletes are not students.<br><b>Conclusions:</b> I. Some cyclists are not students. II. All athletes are cyclists.<br>Which conclusions necessarily follow?",
                    options: [
                        { key: "a", text: "Both I and II" },
                        { key: "b", text: "Only I" },
                        { key: "c", text: "Neither I nor II" },
                        { key: "d", text: "Only II" }
                    ],
                    answer: "c",
                    explanation: "The athletes who are not students need not include any cyclists, so I is not guaranteed. All cyclists belonging to the athlete group does not make every athlete a cyclist, so II is not guaranteed either. A valid counterexample has all cyclists being students and some other athletes not being students."
                },
                {
                    id: "d35m3",
                    revisionOf: { day: 34, question: 92, id: "d34m19" },
                    text: "Exactly one of boxes P, Q and R contains a key. Their labels read:<br><b>P:</b> 'The key is not in Q.'<br><b>Q:</b> 'The key is in Q.'<br><b>R:</b> 'The key is not in R.'<br>If exactly one label is true, which box contains the key?",
                    options: [
                        { key: "a", text: "Box P" },
                        { key: "b", text: "Box R" },
                        { key: "c", text: "Box Q" },
                        { key: "d", text: "It cannot be determined" }
                    ],
                    answer: "b",
                    explanation: "P's and Q's labels contradict each other, so exactly one of those two is true whatever the location. R's label must therefore be false to keep the overall true-label count at one. Its claim that the key is not in R is false, so the key is in R. Direct checking gives true, false, false."
                },
                {
                    id: "d35m4",
                    revisionOf: { day: 34, question: 94, id: "d34m21" },
                    text: "Only two opposite faces of a large cube are painted blue; its other four faces are unpainted. It is divided into 125 equal small cubes, five along each edge. How many small cubes have <b>exactly one</b> painted face?<svg class='q-fig' viewBox='0 0 258 172' width='284' height='189' role='img' aria-label='Cube divided five times along each edge: the front face and its opposite hidden face are blue, the other four faces are unpainted'><path d='M12 48h90v90H12Z' fill='#2563eb' fill-opacity='0.22'/><g fill='none' stroke='currentColor' stroke-width='1.3'><path d='M12 48h90v90H12ZM12 48 42 18h90v90l-30 30M102 48 132 18'/><path d='M30 48v90M48 48v90M66 48v90M84 48v90M12 66h90M12 84h90M12 102h90M12 120h90M30 48 60 18M48 48 78 18M66 48 96 18M84 48 114 18M18 42h90M24 36h90M30 30h90M36 24h90M108 42v90M114 36v90M120 30v90M126 24v90M102 66 132 36M102 84 132 54M102 102 132 72M102 120 132 90'/></g><g fill='currentColor' font-size='11'><text x='147' y='61'>Opposite face</text><text x='147' y='77'>also blue</text><text x='73' y='160' text-anchor='middle'>5 cubes per edge</text></g></svg>",
                    options: [
                        { key: "a", text: "25" },
                        { key: "b", text: "75" },
                        { key: "c", text: "98" },
                        { key: "d", text: "50" }
                    ],
                    answer: "d",
                    explanation: "Each painted face contains $5\\times5=25$ small cubes in its outer layer. The two painted faces are opposite, so these layers do not overlap. Every cube in either layer has exactly one painted face, including its edge and corner cubes, since the other large faces were never painted. The count is $2\\times25=50$."
                },
                {
                    id: "d35m5",
                    followUpOf: { day: 34, question: 94, id: "d34m21" },
                    text: "A cube is cut into five equal divisions along each edge after only its top and bottom faces have been painted. All four vertical faces were left unpainted. How many small cubes have <b>no</b> painted face?",
                    options: [
                        { key: "a", text: "75" },
                        { key: "b", text: "50" },
                        { key: "c", text: "27" },
                        { key: "d", text: "98" }
                    ],
                    answer: "a",
                    explanation: "Remove only the top and bottom painted layers, each containing $5^2=25$ cubes. The three middle layers remain unpainted, even along their exposed vertical edges, because those large faces were not painted. Their count is $3\\times25=75$. Using $(5-2)^3=27$ would wrongly assume all six faces had been painted."
                }
            ]
        },
        {
            id: "humanbiology35",
            name: "Human Biology",
            subject: "Zoology",
            accent: "emerald",
            blurb: "Digestion, respiration, circulation, excretion, nerves, senses, hormones and reproduction.",
            questions: [
                {
                    id: "d35h1",
                    text: "A selective inhibitor blocks enteropeptidase at the intestinal brush border. Which initial enzyme-activation step is most directly reduced?",
                    options: [
                        { key: "a", text: "Pepsinogen to pepsin" },
                        { key: "b", text: "Procarboxypeptidase to carboxypeptidase" },
                        { key: "c", text: "Trypsinogen to trypsin" },
                        { key: "d", text: "Chymotrypsinogen to chymotrypsin" }
                    ],
                    answer: "c",
                    explanation: "Enteropeptidase, also called enterokinase, initiates the pancreatic protease cascade by activating trypsinogen to trypsin. Trypsin then activates other zymogens, including chymotrypsinogen and procarboxypeptidase. Their activation can fall secondarily, but trypsinogen is the direct substrate of the inhibited enzyme. Pepsin activation belongs to the stomach."
                },
                {
                    id: "d35h2",
                    text: "After a meal, enterocytes package absorbed long-chain dietary lipids into chylomicrons. Which route carries these particles before they first enter systemic venous blood?",
                    options: [
                        { key: "a", text: "Intestinal lacteals, then the thoracic duct" },
                        { key: "b", text: "Hepatic portal vein, then liver sinusoids" },
                        { key: "c", text: "Bile canaliculi, then the common bile duct" },
                        { key: "d", text: "Renal capillaries, then the renal vein" }
                    ],
                    answer: "a",
                    explanation: "Chylomicrons enter lymphatic lacteals in the intestinal villi. Lymph subsequently carries them through larger lymphatic vessels and the thoracic duct into venous blood. This differs from many water-soluble nutrients, which enter intestinal blood capillaries and travel first through the hepatic portal vein."
                },
                {
                    id: "d35h3",
                    text: "A person's tidal volume is 0.45 L, inspiratory reserve volume 2.60 L, expiratory reserve volume 0.95 L and residual volume 1.10 L. What is the vital capacity?",
                    options: [
                        { key: "a", text: "5.10 L" },
                        { key: "b", text: "4.00 L" },
                        { key: "c", text: "3.05 L" },
                        { key: "d", text: "2.05 L" }
                    ],
                    answer: "b",
                    explanation: "Vital capacity is the maximum volume exhaled after a maximum inspiration: tidal volume plus inspiratory and expiratory reserves. Here it is $0.45+2.60+0.95=4.00$ L. Residual volume is excluded because it remains after maximum expiration; adding it would give total lung capacity, 5.10 L."
                },
                {
                    id: "d35h4",
                    text: "In systemic tissue capillaries, carbon dioxide enters red blood cells and much of it is converted to bicarbonate. Which ion movement describes the associated chloride shift?",
                    options: [
                        { key: "a", text: "Both chloride and bicarbonate enter the cells" },
                        { key: "b", text: "Both chloride and bicarbonate leave the cells" },
                        { key: "c", text: "Chloride leaves while bicarbonate enters" },
                        { key: "d", text: "Chloride enters while bicarbonate leaves" }
                    ],
                    answer: "d",
                    explanation: "Bicarbonate formed inside red blood cells moves into plasma, while chloride enters in exchange to maintain electrical balance. Carbonic anhydrase speeds the formation of carbonic acid from carbon dioxide and water. The exchange reverses in pulmonary capillaries as bicarbonate is used to regenerate carbon dioxide for exhalation."
                },
                {
                    id: "d35h5",
                    text: "Just after the first heart sound, ventricular pressure is rising but ventricular blood volume is briefly unchanged. What is the valve state during this isovolumetric contraction phase?",
                    options: [
                        { key: "a", text: "AV valves open; semilunar valves closed" },
                        { key: "b", text: "Both AV and semilunar valves closed" },
                        { key: "c", text: "AV valves closed; semilunar valves open" },
                        { key: "d", text: "Both AV and semilunar valves open" }
                    ],
                    answer: "b",
                    explanation: "The atrioventricular valves have just closed, but ventricular pressure has not yet exceeded the pressure in the aorta and pulmonary artery. The semilunar valves therefore remain closed too. With no inflow or outflow, volume stays constant while pressure rises; opening the semilunar valves starts ejection."
                },
                {
                    id: "d35h6",
                    text: "A left ventricle contains 140 mL at the end of filling and 65 mL after contraction. At 72 beats per minute, what is the cardiac output?",
                    options: [
                        { key: "a", text: "3.60 L/min" },
                        { key: "b", text: "4.68 L/min" },
                        { key: "c", text: "5.40 L/min" },
                        { key: "d", text: "10.08 L/min" }
                    ],
                    answer: "c",
                    explanation: "Stroke volume is end-diastolic volume minus end-systolic volume: $140-65=75$ mL per beat. Cardiac output is $75\\times72=5400$ mL/min, or 5.40 L/min. Multiplying the full 140 mL by heart rate would incorrectly assume the ventricle empties completely on every beat."
                },
                {
                    id: "d35h7",
                    text: "A person's glomerular filtration rate is 120 mL/min and urine flow is 1.2 mL/min. Assuming no net tubular secretion of water, what percentage of filtered water is reabsorbed?",
                    options: [
                        { key: "a", text: "99%" },
                        { key: "b", text: "1%" },
                        { key: "c", text: "90%" },
                        { key: "d", text: "99.9%" }
                    ],
                    answer: "a",
                    explanation: "Only $1.2/120=0.01$, or 1%, of the filtered water leaves as urine. The remaining 99% is reabsorbed: $(120-1.2)/120\\times100=99\\%$. Glomerular filtrate volume is therefore much larger than final urine volume; the two rates should not be treated as equal."
                },
                {
                    id: "d35h8",
                    text: "Tubular fluid becomes more dilute while passing through a nephron segment that actively removes NaCl but is essentially impermeable to water. Which segment is described?",
                    options: [
                        { key: "a", text: "Proximal convoluted tubule" },
                        { key: "b", text: "Thin descending limb of Henle" },
                        { key: "c", text: "Collecting duct under high ADH" },
                        { key: "d", text: "Thick ascending limb of Henle" }
                    ],
                    answer: "d",
                    explanation: "The thick ascending limb transports salts into the interstitium without accompanying water, diluting the tubular fluid and contributing to the medullary osmotic gradient. The descending limb is much more permeable to water. ADH increases water permeability in the collecting duct, so that is not the water-impermeable diluting segment described."
                },
                {
                    id: "d35h9",
                    text: "Action potentials still reach a presynaptic terminal, but its voltage-gated calcium channels are selectively blocked. Which next event is most directly impaired?",
                    options: [
                        { key: "a", text: "Exocytosis of neurotransmitter" },
                        { key: "b", text: "Repolarization along the axon" },
                        { key: "c", text: "Binding to postsynaptic receptors" },
                        { key: "d", text: "Hydrolysis of transmitter in the cleft" }
                    ],
                    answer: "a",
                    explanation: "Calcium entry into the presynaptic terminal triggers synaptic vesicles to fuse with the membrane and release transmitter. Blocking that entry directly reduces exocytosis. Postsynaptic receptor activation can then fall as a consequence of reduced release, but those receptors and the transmitter-degrading enzymes are not the structures directly blocked."
                },
                {
                    id: "d35h10",
                    text: "Transmission through a spinal nerve's dorsal root is blocked while its ventral root remains functional. Which description of the two pathways is correct?",
                    options: [
                        { key: "a", text: "Motor exit is lost; sensory entry is retained" },
                        { key: "b", text: "Both sensory entry and motor exit are retained" },
                        { key: "c", text: "Sensory entry is lost; motor exit is retained" },
                        { key: "d", text: "Both sensory entry and motor exit are lost" }
                    ],
                    answer: "c",
                    explanation: "The dorsal root carries sensory, or afferent, signals into the spinal cord. The ventral root carries motor, or efferent, signals away from it. Thus this block directly interrupts sensory entry but leaves the motor root conducting. A reflex requiring the blocked sensory input may nevertheless fail, even though its motor pathway is intact."
                },
                {
                    id: "d35h11",
                    text: "A young person changes focus from a distant hillside to a nearby book. Which change produces accommodation for near vision?",
                    options: [
                        { key: "a", text: "Ciliary muscles relax; ligaments tighten" },
                        { key: "b", text: "Ciliary muscles contract; ligaments slacken" },
                        { key: "c", text: "Ciliary muscles contract; ligaments tighten" },
                        { key: "d", text: "Ciliary muscles relax; ligaments slacken" }
                    ],
                    answer: "b",
                    explanation: "For near focus the ciliary muscles contract, reducing tension in the suspensory ligaments. The elastic lens becomes more rounded and its converging power increases. Relaxation of the ciliary muscles instead tightens the ligaments and flattens the lens for distant vision. This focusing action differs from the iris changing pupil size."
                },
                {
                    id: "d35h12",
                    text: "In primary thyroid failure, the pituitary and its feedback responses remain intact. Which hormone pattern is expected before treatment?",
                    options: [
                        { key: "a", text: "Low thyroxine; low TSH" },
                        { key: "b", text: "High thyroxine; low TSH" },
                        { key: "c", text: "High thyroxine; high TSH" },
                        { key: "d", text: "Low thyroxine; high TSH" }
                    ],
                    answer: "d",
                    explanation: "A failing thyroid produces less thyroxine. Reduced negative feedback allows the functioning pituitary to release more thyroid-stimulating hormone, TSH. This differs from failure of the pituitary itself, which can produce low thyroid hormone without the expected TSH rise. The location of the initial defect matters."
                },
                {
                    id: "d35h13",
                    text: "An increase in aldosterone acts on the distal nephron. Which combination of tubular effects is expected?",
                    options: [
                        { key: "a", text: "Less sodium reabsorption; more potassium secretion" },
                        { key: "b", text: "Less sodium reabsorption; less potassium secretion" },
                        { key: "c", text: "More sodium reabsorption; more potassium secretion" },
                        { key: "d", text: "More sodium reabsorption; less potassium secretion" }
                    ],
                    answer: "c",
                    explanation: "Aldosterone, a mineralocorticoid from the adrenal cortex, promotes sodium reabsorption and potassium secretion in the late distal nephron. It helps regulate extracellular fluid volume and potassium balance. Its action is distinct from ADH's main effect of increasing collecting-duct water permeability."
                },
                {
                    id: "d35h14",
                    text: "Immediately after meiosis I, a normal human secondary spermatocyte is about to begin meiosis II. How many chromosomes and chromatids does it contain?",
                    options: [
                        { key: "a", text: "23 chromosomes and 46 chromatids" },
                        { key: "b", text: "46 chromosomes and 46 chromatids" },
                        { key: "c", text: "23 chromosomes and 23 chromatids" },
                        { key: "d", text: "46 chromosomes and 92 chromatids" }
                    ],
                    answer: "a",
                    explanation: "Meiosis I separates homologous chromosomes, so each secondary spermatocyte is haploid with 23 chromosomes. Each chromosome still consists of two sister chromatids, giving 46 chromatids. Sister chromatids separate during meiosis II; only then does each resulting spermatid have 23 single-chromatid chromosomes."
                },
                {
                    id: "d35h15",
                    text: "When pregnancy does not occur, regression of the corpus luteum precedes menstruation. Which ovarian hormone change triggers loss of support for the endometrium?",
                    options: [
                        { key: "a", text: "Progesterone rises while oestrogen falls" },
                        { key: "b", text: "Progesterone and oestrogen both fall" },
                        { key: "c", text: "Progesterone falls while oestrogen rises" },
                        { key: "d", text: "Progesterone and oestrogen both rise" }
                    ],
                    answer: "b",
                    explanation: "The regressing corpus luteum produces less progesterone and oestrogen. Withdrawal of this hormonal support initiates breakdown and shedding of the functional endometrial layer. A maintained corpus luteum in early pregnancy prevents this normal premenstrual fall, so the stated absence of pregnancy is important."
                }
            ]
        },
        {
            id: "rayoptics35",
            name: "Ray Optics",
            subject: "Physics",
            accent: "blue",
            blurb: "Mirrors, refraction, total internal reflection, lenses, prisms and achromatism.",
            questions: [
                {
                    id: "d35o1",
                    text: "An object is placed 54 cm in front of a concave mirror of focal length 18 cm. Where does the paraxial image form?<svg class='q-fig' viewBox='0 0 335 170' width='335' height='170' role='img' aria-label='Concave mirror facing left: pole P at the right, focus F one focal distance left, centre C two focal distances left, and the object three focal distances left'><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M15 90h305' stroke-dasharray='4 3'/><path d='M263 28Q297 90 263 152'/><path d='M100 90V45m-6 8 6-8 6 8'/><path d='M160 85v10M220 85v10M280 85v10'/><path d='M100 127h180M100 122v10M280 122v10'/></g><g fill='currentColor' text-anchor='middle' font-size='12'><text x='100' y='35'>Object</text><text x='160' y='110'>C</text><text x='220' y='110'>F</text><text x='299' y='88'>P</text><text x='190' y='146'>54 cm</text></g></svg>",
                    options: [
                        { key: "a", text: "27 cm behind the mirror" },
                        { key: "b", text: "27 cm in front of the mirror" },
                        { key: "c", text: "54 cm behind the mirror" },
                        { key: "d", text: "36 cm in front of the mirror" }
                    ],
                    answer: "b",
                    explanation: "With Cartesian signs, $u=-54$ cm and $f=-18$ cm. Use the mirror equation $1/v=1/f-1/u$. Substitution gives $1/v=-1/18+1/54$, hence $1/v=-1/27$ and $v=-27$ cm. The image is real and in front, between F and C, and its magnification is $-v/u=-1/2$: inverted and half as tall."
                },
                {
                    id: "d35o2",
                    text: "A convex mirror has a radius of curvature of 60 cm. An object is 45 cm in front of it. Where is the image?",
                    options: [
                        { key: "a", text: "90 cm in front of the mirror" },
                        { key: "b", text: "18 cm in front of the mirror" },
                        { key: "c", text: "90 cm behind the mirror" },
                        { key: "d", text: "18 cm behind the mirror" }
                    ],
                    answer: "d",
                    explanation: "For a convex mirror, $f=R/2=+30$ cm and the real object has $u=-45$ cm. Thus $1/v=1/30+1/45=1/18$, giving $v=+18$ cm, behind the mirror. The image is virtual, erect and diminished. Using the radius itself as the focal length would give an incorrect answer."
                },
                {
                    id: "d35o3",
                    text: "A ray travelling from air into a transparent medium has angles of incidence 60&deg; and refraction 30&deg;, both measured from the normal. Taking the refractive index of air as 1, what is the medium's refractive index?<svg class='q-fig' viewBox='0 0 270 190' width='297' height='209' role='img' aria-label='Horizontal air-medium interface: an incident ray is 60 degrees to the normal in air and the transmitted ray is 30 degrees to the normal in the medium'><rect x='8' y='85' width='254' height='92' fill='#0891b2' fill-opacity='0.08'/><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M8 85h254M135 15v158' stroke-dasharray='4 3'/><path d='M48 35 135 85 175 154'/><path d='m88 58-8-1m8 1-3-8M154 118l-7-4m7 4v-8'/></g><g fill='currentColor' font-size='12'><text x='15' y='22'>Air</text><text x='144' y='24'>Normal</text><text x='90' y='43'>60&deg;</text><text x='141' y='123'>30&deg;</text><text x='15' y='167'>Medium</text></g></svg>",
                    options: [
                        { key: "a", text: "$\\sqrt{3}$" },
                        { key: "b", text: "$2$" },
                        { key: "c", text: "$\\sqrt{2}$" },
                        { key: "d", text: "$1.5$" }
                    ],
                    answer: "a",
                    explanation: "Snell's law is $n_1\\sin i=n_2\\sin r$. Thus $n=\\sin60^\\circ/\\sin30^\\circ$. Substituting gives $(\\sqrt{3}/2)/(1/2)=\\sqrt{3}$. The angles are measured from the normal; substituting their complementary angles measured from the surface would give the reciprocal."
                },
                {
                    id: "d35o4",
                    text: "A coin is 48 cm below a plane water surface. Viewed nearly vertically from air, by how much does it appear raised? Take the refractive index of water as $4/3$.",
                    options: [
                        { key: "a", text: "16 cm" },
                        { key: "b", text: "36 cm" },
                        { key: "c", text: "12 cm" },
                        { key: "d", text: "48 cm" }
                    ],
                    answer: "c",
                    explanation: "At near-normal viewing, apparent depth is real depth divided by refractive index: $48/(4/3)=36$ cm. The upward apparent displacement is therefore $48-36=12$ cm. The question asks for the displacement, not the apparent depth, so 36 cm is not the answer."
                },
                {
                    id: "d35o5",
                    text: "A ray inside glass of refractive index $\\sqrt{2}$ meets a glass-air boundary at 60&deg; to the normal. What occurs at the boundary?<svg class='q-fig' viewBox='0 0 270 180' width='297' height='198' role='img' aria-label='Ray approaching a horizontal glass-air surface from within glass at 60 degrees to the upward normal; the outgoing path is not shown'><rect x='8' y='78' width='254' height='94' fill='#2563eb' fill-opacity='0.08'/><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M8 78h254M148 14v150' stroke-dasharray='4 3'/><path d='M61 128 148 78m-42 24-8 1m8-1-3 8'/></g><g fill='currentColor' font-size='12'><text x='18' y='31'>Air</text><text x='163' y='32'>Normal</text><text x='18' y='158'>Glass</text><text x='114' y='123'>60&deg;</text></g></svg>",
                    options: [
                        { key: "a", text: "Total internal reflection" },
                        { key: "b", text: "Refraction at 30&deg; to the normal" },
                        { key: "c", text: "Refraction at 45&deg; to the normal" },
                        { key: "d", text: "Refraction along the surface" }
                    ],
                    answer: "a",
                    explanation: "For glass to air, $\\sin c=1/\\sqrt{2}$, so the critical angle is 45&deg;. The incident angle of 60&deg; is greater, and light is travelling towards the lower-index medium, so total internal reflection occurs. A refracted ray along the surface would occur at the critical angle itself, not above it."
                },
                {
                    id: "d35o6",
                    text: "A real object is 18 cm to the left of a thin convex lens of focal length 12 cm in air. At what distance to the right of the lens is a sharp image formed?<svg class='q-fig' viewBox='0 0 365 158' width='365' height='158' role='img' aria-label='Thin convex lens centred on a horizontal principal axis, object between the left focal point and twice the focal distance; object is 18 centimetres from the lens and focal length is 12 centimetres'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M14 84h337' stroke-dasharray='4 3'/><path d='M190 26Q170 84 190 142Q210 84 190 26'/><path d='M100 84V43m-6 8 6-8 6 8M130 79v10M250 79v10'/><path d='M100 119h90M100 115v8M190 115v8'/></g><g fill='currentColor' font-size='12' text-anchor='middle'><text x='100' y='31'>Object</text><text x='130' y='105'>F1</text><text x='250' y='105'>F2</text><text x='145' y='137'>18 cm</text><text x='294' y='39'>f = 12 cm</text></g></svg>",
                    options: [
                        { key: "a", text: "12 cm" },
                        { key: "b", text: "24 cm" },
                        { key: "c", text: "36 cm" },
                        { key: "d", text: "6 cm" }
                    ],
                    answer: "c",
                    explanation: "Use the lens equation $1/f=1/v-1/u$, with $f=+12$ cm and $u=-18$ cm. Then $1/v=1/12-1/18=1/36$, so $v=36$ cm on the right. The magnification $v/u=-2$ means a real, inverted image twice the object's size, as expected for an object between F and 2F."
                },
                {
                    id: "d35o7",
                    text: "A thin concave lens has power -2.5 D. An object is 60 cm in front of it. Where does its image form?",
                    options: [
                        { key: "a", text: "24 cm behind the lens" },
                        { key: "b", text: "120 cm in front of the lens" },
                        { key: "c", text: "120 cm behind the lens" },
                        { key: "d", text: "24 cm in front of the lens" }
                    ],
                    answer: "d",
                    explanation: "Power in dioptres gives $f=1/P=-0.4$ m, or -40 cm. With $u=-60$ cm, use $1/v=1/f+1/u$. This gives $1/v=-1/40-1/60$, hence $v=-24$ cm: a virtual, erect and diminished image on the same side as the object."
                },
                {
                    id: "d35o8",
                    text: "Two thin lenses of powers +4.0 D and -1.5 D are placed in contact in air. What is their equivalent focal length?",
                    options: [
                        { key: "a", text: "+25 cm" },
                        { key: "b", text: "+40 cm" },
                        { key: "c", text: "+60 cm" },
                        { key: "d", text: "-40 cm" }
                    ],
                    answer: "b",
                    explanation: "Powers add for thin lenses in contact: $P=4.0-1.5=+2.5$ D. Equivalent focal length is $f=1/P=0.40$ m, or +40 cm. The positive sign identifies a converging combination. Adding the individual focal lengths instead of their powers would be incorrect."
                },
                {
                    id: "d35o9",
                    text: "A thin symmetric biconvex glass lens in air has refractive index 1.50 and surface radii of magnitude 30 cm. What is its focal length?",
                    options: [
                        { key: "a", text: "15 cm" },
                        { key: "b", text: "60 cm" },
                        { key: "c", text: "30 cm" },
                        { key: "d", text: "45 cm" }
                    ],
                    answer: "c",
                    explanation: "For light travelling left to right, take $R_1=+30$ cm and $R_2=-30$ cm. Use the lens-maker relation $\\frac{1}{f}=(n-1)(\\frac{1}{R_1}-\\frac{1}{R_2})$. Substitution gives $1/f=0.5(1/30+1/30)$, so $f=30$ cm. The radii have equal magnitudes but opposite signs; treating both as positive would incorrectly cancel the lens power."
                },
                {
                    id: "d35o10",
                    text: "A thin prism has apex angle 6&deg;. Its refractive indices for violet and red light are 1.54 and 1.50. In the thin-prism approximation, what is the angular separation of the two emerging colours?",
                    options: [
                        { key: "a", text: "0.12&deg;" },
                        { key: "b", text: "0.24&deg;" },
                        { key: "c", text: "3.00&deg;" },
                        { key: "d", text: "3.24&deg;" }
                    ],
                    answer: "b",
                    explanation: "Each colour has approximate deviation $(n-1)A$. Angular dispersion is $(n_v-n_r)A$. The index difference is $1.54-1.50=0.04$, so the separation is $0.04\\times6=0.24^\\circ$. Values 3.00&deg; and 3.24&deg; are the individual red and violet deviations, not the separation between them."
                },
                {
                    id: "d35o11",
                    text: "A prism of apex angle 60&deg; has minimum deviation 30&deg; in air. What is its refractive index?<svg class='q-fig' viewBox='0 0 350 166' width='350' height='166' role='img' aria-label='Symmetric minimum-deviation path through an equilateral prism: the internal ray is parallel to the base and the exterior rays are symmetric'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M120 124 180 20 240 124Z'/><path d='M75 92 150 72H210L289 93'/><path d='M126 58 174 86M186 86 234 58' stroke-dasharray='3 3'/><path d='m113 82-7-2m7 2-5 5M178 72l-6-4m6 4-6 4M251 83l-5-5m5 5-7 2'/></g><g fill='currentColor' text-anchor='middle' font-size='12'><text x='180' y='54'>60&deg;</text><text x='180' y='151'>Minimum deviation = 30&deg;</text></g></svg>",
                    options: [
                        { key: "a", text: "$\\sqrt{3}$" },
                        { key: "b", text: "$1.5$" },
                        { key: "c", text: "$2$" },
                        { key: "d", text: "$\\sqrt{2}$" }
                    ],
                    answer: "d",
                    explanation: "At minimum deviation the path is symmetric, so $i=(A+\\delta_{\\min})/2=45^\\circ$ and $r=A/2=30^\\circ$. Snell's law gives $n=\\sin45^\\circ/\\sin30^\\circ=\\sqrt{2}$. The thin-prism expression is not appropriate for this 60-degree prism."
                },
                {
                    id: "d35o12",
                    text: "A thin crown-glass lens and flint-glass lens in contact form an achromatic combination of total power +5 D. Their dispersive powers are 0.02 and 0.04 respectively. What are the crown and flint lens powers, in that order?",
                    options: [
                        { key: "a", text: "+10 D and -5 D" },
                        { key: "b", text: "+5 D and -10 D" },
                        { key: "c", text: "-10 D and +5 D" },
                        { key: "d", text: "+10 D and +5 D" }
                    ],
                    answer: "a",
                    explanation: "For achromatism, $0.02P_c+0.04P_f=0$, giving $P_c=-2P_f$. The total power is $P_c+P_f=+5$ D, so $P_f=-5$ D and $P_c=+10$ D. The weaker negative flint lens has greater dispersion per unit power, allowing the chromatic effects to cancel while retaining positive total power."
                }
            ]
        }
    ]
};

const DAY35_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Elasticity and Extension under Own Weight", ids: ["d35p1", "d35p4"] }
        ] },
        { topic: "Current Electricity and Magnetism", subs: [
            { name: "Alternating Current", ids: ["d35p2", "d35p5"] }
        ] },
        { topic: "Modern Physics", subs: [
            { name: "Hydrogen Spectrum", ids: ["d35p3"] }
        ] },
        { topic: "Waves and Optics", subs: [
            { name: "Curved Mirrors", ids: ["d35o1", "d35o2"] },
            { name: "Refraction and Total Internal Reflection", ids: ["d35o3", "d35o4", "d35o5"] },
            { name: "Thin Lenses and Lens Power", ids: ["d35o6", "d35o7", "d35o8", "d35o9"] },
            { name: "Prisms, Dispersion and Achromatism", ids: ["d35o10", "d35o11", "d35o12"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "General and Physical Chemistry", subs: [
            { name: "Quantum Numbers and Orbitals", ids: ["d35c1", "d35c11"] },
            { name: "Coordination and Formal Oxidation Numbers", ids: ["d35c2", "d35c3"] },
            { name: "Chemical Equilibrium", ids: ["d35c4", "d35c12"] },
            { name: "Acid Equivalents and Normality", ids: ["d35c5", "d35c9"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Aromatic Substitution and Acylation", ids: ["d35c6", "d35c8"] },
            { name: "Alkyne Reduction", ids: ["d35c7"] },
            { name: "Acid Chloride Hydrolysis", ids: ["d35c10"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Human Biology and Physiology", subs: [
            { name: "Digestive System", ids: ["d35h1", "d35h2"] },
            { name: "Respiratory System", ids: ["d35h3", "d35h4"] },
            { name: "Circulatory System", ids: ["d35h5", "d35h6"] },
            { name: "Excretory System", ids: ["d35h7", "d35h8"] },
            { name: "Nervous System", ids: ["d35h9", "d35h10"] },
            { name: "Sense Organs", ids: ["d35z1", "d35h11"] },
            { name: "Endocrinology", ids: ["d35h12", "d35h13"] },
            { name: "Reproductive System", ids: ["d35h14", "d35h15"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Classification", ids: ["d35m1"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Syllogism and Truth Conditions", ids: ["d35m2", "d35m3"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Painted Cubes", ids: ["d35m4", "d35m5"] }
        ] }
    ] }
];
DAY35.syllabus = DAY35_SYLLABUS;