const DAY39 = {
    day: 39,
    title: "Day 39",
    subtitle: "Alcohols, Phenols and Floral Diversity - Tricky Revision",
    durationMinutes: 45,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "revision39",
            name: "Mole Concept - Targeted Revision",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Six variants on selected Day 38 calculations: hydrates, gas mixtures, purity, yield and composition.",
            questions: [
                {
                    id: "d39c1",
                    revisionOf: { day: 38, question: 17, id: "d38c17" },
                    text: "A 7.15 g sample of Na<sub>2</sub>CO<sub>3</sub>&middot;<i>x</i>H<sub>2</sub>O is heated until it becomes 3.10 g of Na<sub>2</sub>CO<sub>3</sub>&middot;H<sub>2</sub>O, not the anhydrous salt. Only water is lost. What is <i>x</i>?",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "10" },
                        { key: "c", text: "7" },
                        { key: "d", text: "11" }
                    ],
                    answer: "b",
                    explanation: "The monohydrate has molar mass 124 g/mol, so the residue contains $3.10/124=0.025$ mol of carbonate units. Water lost is 4.05 g, or 0.225 mol. Thus nine waters per carbonate unit were removed. One water per unit remains in the monohydrate, so the original hydrate has $x=9+1=10$."
                },
                {
                    id: "d39c2",
                    revisionOf: { day: 38, question: 23, id: "d38c23" },
                    text: "A gas mixture contains 80 mL CO, 30 mL O<sub>2</sub> and 20 mL CO<sub>2</sub>. It reacts by 2CO + O<sub>2</sub> &rarr; 2CO<sub>2</sub> until the limiting reactant is exhausted. All CO<sub>2</sub> is then selectively absorbed in excess aqueous KOH. What dry gas remains? Compare all gas volumes at the same temperature and pressure and treat the gases as ideal.",
                    options: [
                        { key: "a", text: "20 mL O<sub>2</sub>" },
                        { key: "b", text: "80 mL CO<sub>2</sub>" },
                        { key: "c", text: "30 mL CO" },
                        { key: "d", text: "20 mL CO" }
                    ],
                    answer: "d",
                    explanation: "The 30 mL oxygen can consume only 60 mL CO, leaving 20 mL CO. Reaction produces 60 mL CO<sub>2</sub>, which joins the initial 20 mL CO<sub>2</sub>. KOH removes all 80 mL of that gas, but does not remove the remaining CO. No oxygen remains because it was the limiting reactant."
                },
                {
                    id: "d39c3",
                    revisionOf: { day: 38, question: 26, id: "d38c26" },
                    text: "A 25.0 g limestone sample contains 80.0% CaCO<sub>3</sub> and nonvolatile inert impurities. Heating decomposes 75.0% of the carbonate by CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>. All the gas escapes. What is the mass of the entire solid residue?",
                    options: [
                        { key: "a", text: "18.4 g" },
                        { key: "b", text: "16.2 g" },
                        { key: "c", text: "20.6 g" },
                        { key: "d", text: "14.0 g" }
                    ],
                    answer: "a",
                    explanation: "The sample contains 20.0 g carbonate, of which 15.0 g decomposes. This is 0.150 mol and releases $0.150(44)=6.60$ g CO<sub>2</sub>. The total residue is $25.0-6.60=18.4$ g. It includes 8.40 g CaO, 5.00 g undecomposed carbonate and 5.00 g impurities; counting CaO alone misses two solid components."
                },
                {
                    id: "d39c4",
                    revisionOf: { day: 38, question: 28, id: "d38c28" },
                    text: "A 24.5 g sample is 80.0% KClO<sub>3</sub> by mass, the remainder being inert. For 2KClO<sub>3</sub> &rarr; 2KCl + 3O<sub>2</sub>, the collected oxygen is 75.0% of the theoretical amount from the KClO<sub>3</sub> actually present. What mass of oxygen is collected?",
                    options: [
                        { key: "a", text: "9.60 g" },
                        { key: "b", text: "7.68 g" },
                        { key: "c", text: "5.76 g" },
                        { key: "d", text: "7.20 g" }
                    ],
                    answer: "c",
                    explanation: "Pure KClO<sub>3</sub> mass is $24.5(0.80)=19.6$ g, or 0.160 mol using its molar mass of 122.5 g/mol. This can produce 0.240 mol O<sub>2</sub>, or 7.68 g. Applying the 75% collection yield gives $7.68(0.75)=5.76$ g. Both the purity and the yield factors are needed."
                },
                {
                    id: "d39c5",
                    revisionOf: { day: 38, question: 29, id: "d38c29" },
                    text: "A 29.6 g solid contains only CaCO<sub>3</sub>, MgCO<sub>3</sub> and 2.00 g of inert material. Excess acid releases 6.72 L CO<sub>2</sub> at 273.15 K and 1 atm, with a molar gas volume of 22.4 L/mol. Both carbonates react completely, each producing one mole of CO<sub>2</sub> per mole. What mass of CaCO<sub>3</sub> was present?",
                    options: [
                        { key: "a", text: "12.6 g" },
                        { key: "b", text: "27.6 g" },
                        { key: "c", text: "10.0 g" },
                        { key: "d", text: "15.0 g" }
                    ],
                    answer: "d",
                    explanation: "The two carbonates weigh 27.6 g and total $6.72/22.4=0.300$ mol. Let calcium carbonate be $x$ mol. Then $100x+84(0.300-x)=27.6$, giving $16x=2.40$ and $x=0.150$ mol. Its mass is 15.0 g. Including the inert 2.00 g in the carbonate mass equation would give a false composition."
                },
                {
                    id: "d39c6",
                    revisionOf: { day: 38, question: 30, id: "d38c30" },
                    text: "A 10.0 g ore contains Fe<sub>2</sub>O<sub>3</sub> and inert impurities only. Reduction by excess CO follows Fe<sub>2</sub>O<sub>3</sub> + 3CO &rarr; 2Fe + 3CO<sub>2</sub>. The process recovers 80.0% of the theoretical iron from the oxide present, yielding 4.48 g pure iron. What is the ore's Fe<sub>2</sub>O<sub>3</sub> percentage by mass?",
                    options: [
                        { key: "a", text: "64.0%" },
                        { key: "b", text: "80.0%" },
                        { key: "c", text: "70.0%" },
                        { key: "d", text: "56.0%" }
                    ],
                    answer: "b",
                    explanation: "Correct for recovery first: theoretical iron is $4.48/0.80=5.60$ g, or 0.100 mol. It comes from 0.0500 mol Fe<sub>2</sub>O<sub>3</sub>, whose mass is 8.00 g. Thus oxide purity is 80.0%. Ignoring incomplete recovery gives 64.0%; 56.0% is the theoretical elemental-iron fraction of the entire ore, not its oxide fraction."
                }
            ]
        },
        {
            id: "alcohol39",
            name: "Alcohols - Reactions and Deductions",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Seventeen questions on structure, selective reactions, tests, preparation and quantitative applications.",
            questions: [
                {
                    id: "d39a7",
                    text: "Which alcohol can undergo controlled oxidation to an aldehyde, but has no beta-hydrogen for direct dehydration to an alkene without skeletal rearrangement?",
                    options: [
                        { key: "a", text: "2,2-Dimethylpropan-1-ol" },
                        { key: "b", text: "2-Methylpropan-1-ol" },
                        { key: "c", text: "2-Methylpropan-2-ol" },
                        { key: "d", text: "Butan-2-ol" }
                    ],
                    answer: "a",
                    explanation: "In (CH<sub>3</sub>)<sub>3</sub>C-CH<sub>2</sub>OH, the OH-bearing carbon is primary and can oxidize to an aldehyde. Its adjacent carbon is quaternary and has no hydrogen, preventing the simple adjacent H/OH elimination. This does not rule out rearranged products under suitable conditions. The branched appearance alone does not make the alcohol tertiary."
                },
                {
                    id: "d39a8",
                    text: "Considering only acyclic, saturated, monohydric alcohols with formula C<sub>4</sub>H<sub>10</sub>O, how many constitutional isomers are possible, and how many of those structures contain a stereogenic carbon? Count each constitution once, not each enantiomer separately.",
                    options: [
                        { key: "a", text: "3 isomers; 1 with a stereogenic carbon" },
                        { key: "b", text: "4 isomers; 2 with a stereogenic carbon" },
                        { key: "c", text: "4 isomers; 1 with a stereogenic carbon" },
                        { key: "d", text: "5 isomers; 1 with a stereogenic carbon" }
                    ],
                    answer: "c",
                    explanation: "The four structures are butan-1-ol, butan-2-ol, 2-methylpropan-1-ol and 2-methylpropan-2-ol. Only butan-2-ol has a carbon bonded to four different groups: OH, H, methyl and ethyl. Its two enantiomers do not constitute two different connectivities. Ethers with the same formula are excluded by the question."
                },
                {
                    id: "d39a9",
                    text: "Two saturated open-chain alcohols Q and R have formula C<sub>4</sub>H<sub>10</sub>O. Under the standard Lucas test at room temperature, Q develops turbidity after a few minutes, while R does so immediately. Q oxidizes to a ketone; R resists ordinary mild oxidation without C-C cleavage. Which pair is Q, R?",
                    options: [
                        { key: "a", text: "Butan-1-ol; butan-2-ol" },
                        { key: "b", text: "Butan-2-ol; 2-methylpropan-2-ol" },
                        { key: "c", text: "2-Methylpropan-1-ol; butan-2-ol" },
                        { key: "d", text: "2-Methylpropan-2-ol; butan-1-ol" }
                    ],
                    answer: "b",
                    explanation: "Ketone formation identifies Q as a secondary alcohol, which here is butan-2-ol. Immediate Lucas turbidity together with resistance to simple carbonyl-forming oxidation identifies tertiary R as 2-methylpropan-2-ol. The oxidation evidence supports the class assignment instead of relying on test timing alone."
                },
                {
                    id: "d39a10",
                    text: "Butan-2-one is reduced with NaBH<sub>4</sub> in an achiral medium and then protonated. With no chiral catalyst or resolving step, which description best fits the alcohol product?",
                    options: [
                        { key: "a", text: "Only the R enantiomer of butan-2-ol" },
                        { key: "b", text: "Butan-1-ol, with no stereogenic carbon" },
                        { key: "c", text: "A meso form of butan-2-ol" },
                        { key: "d", text: "A racemic mixture of the two butan-2-ol enantiomers" }
                    ],
                    answer: "d",
                    explanation: "The planar carbonyl carbon can be attacked from either face equally in an achiral environment. Reduction creates a stereogenic carbon at C2, giving equal R and S forms of butan-2-ol. Their rotations cancel in a racemate. A molecule with only this one stereocentre cannot have a meso form."
                },
                {
                    id: "d39a11",
                    text: "Separate portions of butan-1-ol are treated with (I) PCC under suitable anhydrous conditions and (II) excess acidified dichromate under reflux. What are the main oxidation products in I and II, respectively?",
                    options: [
                        { key: "a", text: "Butanoic acid; butanal" },
                        { key: "b", text: "Butan-2-one; butanoic acid" },
                        { key: "c", text: "Butanal; butanoic acid" },
                        { key: "d", text: "Butanal; butan-2-one" }
                    ],
                    answer: "c",
                    explanation: "Anhydrous PCC can stop primary-alcohol oxidation at the aldehyde, butanal. Excess aqueous acidified dichromate under reflux carries oxidation to butanoic acid. The carbon skeleton is retained. Butan-2-one would normally arise from oxidation of butan-2-ol, not from moving the OH-derived oxygen along the chain."
                },
                {
                    id: "d39a12",
                    text: "What are the expected major alcohols from 3-methylbut-1-ene by (I) hydroboration followed by alkaline peroxide and (II) acid-catalysed hydration, allowing the favoured carbocation rearrangement?",
                    options: [
                        { key: "a", text: "3-Methylbutan-1-ol; 2-methylbutan-2-ol" },
                        { key: "b", text: "3-Methylbutan-1-ol; 3-methylbutan-2-ol" },
                        { key: "c", text: "2-Methylbutan-2-ol; 3-methylbutan-1-ol" },
                        { key: "d", text: "3-Methylbutan-2-ol; 3-methylbutan-1-ol" }
                    ],
                    answer: "a",
                    explanation: "Hydroboration-oxidation places OH at the terminal carbon without a free-carbocation rearrangement, giving 3-methylbutan-1-ol. Acid hydration initially gives a secondary carbocation; a hydride shift creates a more stable tertiary carbocation. Water capture then gives 2-methylbutan-2-ol. Regiochemistry alone is insufficient unless rearrangement is also considered."
                },
                {
                    id: "d39a13",
                    text: "Carbonyl compound X reacts with ethylmagnesium bromide in dry ether, followed by aqueous acid work-up, to form pentan-3-ol. Which compound is X?",
                    options: [
                        { key: "a", text: "Butanal" },
                        { key: "b", text: "Propanal" },
                        { key: "c", text: "Propanone" },
                        { key: "d", text: "Methanal" }
                    ],
                    answer: "b",
                    explanation: "Pentan-3-ol has an OH-bearing carbon bonded to H and two ethyl groups. One ethyl group comes from the Grignard reagent; the carbonyl must already carry the other ethyl group and H. That carbonyl is propanal, CH<sub>3</sub>CH<sub>2</sub>CHO. A ketone would instead give a tertiary alcohol after Grignard addition."
                },
                {
                    id: "d39a14",
                    text: "A 0.100 mol portion of dry ethanol reacts completely with excess CH<sub>3</sub>MgBr before any carbonyl compound is added. Which gas and amount result from the alcohol-reagent reaction?",
                    options: [
                        { key: "a", text: "0.050 mol H<sub>2</sub>" },
                        { key: "b", text: "0.100 mol H<sub>2</sub>" },
                        { key: "c", text: "0.100 mol CH<sub>4</sub>" },
                        { key: "d", text: "0.050 mol CH<sub>4</sub>" }
                    ],
                    answer: "c",
                    explanation: "Ethanol's O-H proton quenches the Grignard reagent: C<sub>2</sub>H<sub>5</sub>OH + CH<sub>3</sub>MgBr gives C<sub>2</sub>H<sub>5</sub>OMgBr + CH<sub>4</sub>. One mole of ethanol produces one mole of methane. Hydrogen at half the alcohol amount belongs to the sodium-metal reaction, not this proton-transfer reaction."
                },
                {
                    id: "d39a15",
                    text: "Which pair both give a positive iodoform test, although the first is a primary alcohol and the second a secondary alcohol?",
                    options: [
                        { key: "a", text: "Ethanol and pentan-2-ol" },
                        { key: "b", text: "Methanol and propan-2-ol" },
                        { key: "c", text: "Propan-1-ol and butan-2-ol" },
                        { key: "d", text: "Ethanol and pentan-3-ol" }
                    ],
                    answer: "a",
                    explanation: "Ethanol is the primary-alcohol exception: oxidation gives ethanal, which undergoes the iodoform reaction. Pentan-2-ol contains CH<sub>3</sub>-CH(OH)- and oxidizes to a methyl ketone. Pentan-3-ol instead gives a ketone with ethyl groups on both sides; methanol and propan-1-ol also lack the required oxidation product."
                },
                {
                    id: "d39a16",
                    text: "The hydroxyl oxygen of ethanol is labelled <sup>18</sup>O. It reacts with unlabelled ethanoic acid by ordinary Fischer esterification. Neglect oxygen-isotope exchange with the medium. Where does the alcohol's labelled oxygen appear in the ester?",
                    options: [
                        { key: "a", text: "It is lost entirely in the water; the ester is unlabelled." },
                        { key: "b", text: "At the carbonyl oxygen of ethyl ethanoate" },
                        { key: "c", text: "Equally distributed between the two ester oxygens" },
                        { key: "d", text: "At the single-bonded oxygen joining the ethyl group to the acyl group" }
                    ],
                    answer: "d",
                    explanation: "In the ordinary acyl-substitution pathway, the alcohol oxygen becomes the ester alkoxy oxygen. Its bond to the ethyl group is retained, giving CH<sub>3</sub>C(=O)-<sup>18</sup>O-CH<sub>2</sub>CH<sub>3</sub>. It does not become the carbonyl oxygen. The exclusion of isotope exchange makes this a bond-tracing question rather than an equilibrium-label scrambling problem."
                },
                {
                    id: "d39a17",
                    text: "In the usual textbook dehydration of ethanol with concentrated H<sub>2</sub>SO<sub>4</sub>, which pair identifies the favoured organic products at about 413 K and 443 K, respectively?",
                    options: [
                        { key: "a", text: "Ethene; ethoxyethane" },
                        { key: "b", text: "Ethanal; ethene" },
                        { key: "c", text: "Ethoxyethane; ethene" },
                        { key: "d", text: "Ethoxyethane; ethanal" }
                    ],
                    answer: "c",
                    explanation: "At about 413 K, intermolecular dehydration of ethanol favours ethoxyethane, formed from two alcohol molecules. At about 443 K, elimination within an ethanol molecule favours ethene. These are the standard ethanol teaching conditions, not a universal temperature rule for every alcohol; oxidation to ethanal is a different transformation."
                },
                {
                    id: "d39a18",
                    text: "One mole each of propan-1-ol, propan-2-ol and 2-methylpropan-2-ol undergoes its standard reaction over heated copper at 573 K. Assume complete conversion and no side reactions. What total amount of H<sub>2</sub> is produced?",
                    options: [
                        { key: "a", text: "1 mol" },
                        { key: "b", text: "2 mol" },
                        { key: "c", text: "3 mol" },
                        { key: "d", text: "0.5 mol" }
                    ],
                    answer: "b",
                    explanation: "The primary alcohol dehydrogenates to propanal and gives 1 mol H<sub>2</sub>. The secondary alcohol gives propanone and another 1 mol H<sub>2</sub>. The tertiary alcohol lacks the required hydrogen on the OH-bearing carbon and instead undergoes the standard dehydration to an alkene and water. Its water is not hydrogen gas."
                },
                {
                    id: "d39a19",
                    text: "Which compound gives propan-1-ol after LiAlH<sub>4</sub> reduction and aqueous work-up, but is not ordinarily reduced to that alcohol by NaBH<sub>4</sub> under standard conditions?",
                    options: [
                        { key: "a", text: "Propanal" },
                        { key: "b", text: "Propanone" },
                        { key: "c", text: "Propan-2-ol" },
                        { key: "d", text: "Propanoic acid" }
                    ],
                    answer: "d",
                    explanation: "LiAlH<sub>4</sub> reduces propanoic acid to the corresponding primary alcohol while retaining all three carbons. Ordinary NaBH<sub>4</sub> conditions do not perform this free-carboxylic-acid reduction. Propanal gives propan-1-ol with either reagent; propanone gives propan-2-ol, so product identity and reagent selectivity must both be satisfied."
                },
                {
                    id: "d39a20",
                    text: "A 10.6 g anhydrous mixture contains only ethanol and propan-1-ol. Complete reaction with excess sodium liberates 2.24 L dry H<sub>2</sub> at 273.15 K and 1 atm. Take the molar gas volume as 22.4 L/mol. What mass of ethanol was in the mixture?",
                    options: [
                        { key: "a", text: "4.60 g" },
                        { key: "b", text: "6.00 g" },
                        { key: "c", text: "2.30 g" },
                        { key: "d", text: "9.20 g" }
                    ],
                    answer: "a",
                    explanation: "The hydrogen amount is 0.100 mol. Since two alcohol molecules supply one H<sub>2</sub>, the total alcohol amount is 0.200 mol. If ethanol is $x$ mol, the mass equation is $46x+60(0.200-x)=10.6$. It gives $x=0.100$ mol, or 4.60 g ethanol. The dry-mixture condition prevents water from contributing extra hydrogen."
                },
                {
                    id: "d39a21",
                    text: "Fermentation of 90.0 g glucose gives 36.8 g of pure ethanol. Using the net equation C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> &rarr; 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>, what is the ethanol yield as a percentage of theoretical?",
                    options: [
                        { key: "a", text: "40.0%" },
                        { key: "b", text: "80.0%" },
                        { key: "c", text: "73.6%" },
                        { key: "d", text: "92.0%" }
                    ],
                    answer: "b",
                    explanation: "Glucose amount is $90.0/180=0.500$ mol. It can yield 1.00 mol ethanol, or 46.0 g. Percentage yield is therefore $36.8/46.0$ multiplied by 100, giving 80.0%. The coefficient two applies to moles; treating one mole of glucose as giving only one mole of ethanol gives an impossible apparent yield."
                },
                {
                    id: "d39a22",
                    text: "Propene undergoes hydroformylation with CO/H<sub>2</sub> in the oxo process, producing straight-chain and branched aldehydes. Both are then hydrogenated. Which pair of monohydric alcohols results?",
                    options: [
                        { key: "a", text: "Propan-1-ol and propan-2-ol" },
                        { key: "b", text: "Butan-2-ol and 2-methylpropan-2-ol" },
                        { key: "c", text: "Butan-1-ol and 2-methylpropan-1-ol" },
                        { key: "d", text: "Ethanol and propan-1-ol" }
                    ],
                    answer: "c",
                    explanation: "Hydroformylation adds a carbon from CO, giving the four-carbon aldehydes butanal and 2-methylpropanal. Reducing each CHO group gives a primary CH<sub>2</sub>OH group. Thus both products are primary alcohols, even though one carbon skeleton is branched. Hydration alone would retain propene's three-carbon count."
                },
                {
                    id: "d39a23",
                    text: "Which statements about ethanol are correct? I. Absolute ethanol is essentially water-free. II. Rectified spirit is close to the ethanol-water azeotropic composition at ordinary pressure. III. Adding water to denatured ethanol necessarily makes it safe to drink.",
                    options: [
                        { key: "a", text: "Only I and II" },
                        { key: "b", text: "Only I and III" },
                        { key: "c", text: "Only II and III" },
                        { key: "d", text: "All three" }
                    ],
                    answer: "a",
                    explanation: "Absolute ethanol is essentially anhydrous, while rectified spirit is near the ethanol-water azeotrope and cannot be made absolute by ordinary fractional distillation alone at the same pressure. Denaturing deliberately makes ethanol unfit for drinking. Dilution does not establish removal or safety of the denaturants, so III is false."
                }
            ]
        },
        {
            id: "phenol39",
            name: "Phenols - Selectivity and Identification",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Five comparisons covering acidity, named reactions, hydrogen bonding and ring substitution.",
            questions: [
                {
                    id: "d39p24",
                    text: "Which statement correctly distinguishes phenol from benzyl alcohol by their ordinary acid-base behaviour?",
                    options: [
                        { key: "a", text: "Both release CO<sub>2</sub> from aqueous NaHCO<sub>3</sub>." },
                        { key: "b", text: "Only benzyl alcohol forms a salt with aqueous NaOH." },
                        { key: "c", text: "Only phenol can liberate H<sub>2</sub> with sodium metal." },
                        { key: "d", text: "Phenol forms a salt with aqueous NaOH but does not ordinarily release CO<sub>2</sub> from NaHCO<sub>3</sub>; benzyl alcohol is not appreciably deprotonated by aqueous NaOH." }
                    ],
                    answer: "d",
                    explanation: "Phenoxide is resonance-stabilized, so phenol is acidic enough for neutralization by aqueous hydroxide. Simple phenol is not acidic enough for the usual bicarbonate CO<sub>2</sub> test. Benzyl alcohol has OH on a side-chain carbon and behaves as an ordinary alcohol. Both compounds react with sodium metal, so that observation alone does not distinguish them."
                },
                {
                    id: "d39p25",
                    text: "Phenol is treated separately by (I) CHCl<sub>3</sub>/aqueous NaOH followed by acid work-up, and (II) conversion to sodium phenoxide, carboxylation with CO<sub>2</sub>, then acid work-up. What are the usual principal ortho products of I and II?",
                    options: [
                        { key: "a", text: "Salicylic acid; salicylaldehyde" },
                        { key: "b", text: "Benzoic acid; benzaldehyde" },
                        { key: "c", text: "Salicylaldehyde; salicylic acid" },
                        { key: "d", text: "Catechol; salicylaldehyde" }
                    ],
                    answer: "c",
                    explanation: "Reimer-Tiemann formylation in I introduces CHO, giving 2-hydroxybenzaldehyde, or salicylaldehyde. Kolbe-Schmitt carboxylation in II introduces COOH, giving 2-hydroxybenzoic acid, or salicylic acid. Both retain the phenolic OH; confusing the aldehyde and acid groups reverses the two named reactions."
                },
                {
                    id: "d39p26",
                    text: "Why is o-nitrophenol more readily steam-distilled than p-nitrophenol under the usual comparison conditions?",
                    options: [
                        { key: "a", text: "The ortho isomer forms a more extensive intermolecular hydrogen-bond network." },
                        { key: "b", text: "Intramolecular hydrogen bonding in the ortho isomer reduces intermolecular association." },
                        { key: "c", text: "The para isomer has no oxygen capable of hydrogen bonding." },
                        { key: "d", text: "The ortho isomer has a lower molecular mass." }
                    ],
                    answer: "b",
                    explanation: "Neighbouring OH and NO<sub>2</sub> groups allow an internal hydrogen bond in o-nitrophenol. This reduces association between separate molecules and favours volatility. The para isomer instead forms stronger intermolecular associations. The two compounds have the same molecular formula and mass, and both possess hydrogen-bonding oxygen atoms."
                },
                {
                    id: "d39p27",
                    text: "A 0.100 mol amount of phenol is completely converted to 2,4,6-tribromophenol in excess bromine water. What amounts of Br<sub>2</sub> are consumed and HBr formed, respectively?",
                    options: [
                        { key: "a", text: "0.300 mol; 0.300 mol" },
                        { key: "b", text: "0.100 mol; 0.100 mol" },
                        { key: "c", text: "0.300 mol; 0.100 mol" },
                        { key: "d", text: "0.100 mol; 0.300 mol" }
                    ],
                    answer: "a",
                    explanation: "Three aromatic hydrogens are substituted. Each substitution consumes one Br<sub>2</sub> molecule: one bromine enters the ring and the other forms HBr with the displaced hydrogen. Thus one mole phenol consumes three moles Br<sub>2</sub> and produces three moles HBr. The aqueous excess-bromine condition is important; this is not the controlled monobromination case."
                },
                {
                    id: "d39p28",
                    text: "Which order correctly shows decreasing acidity in aqueous solution?",
                    options: [
                        { key: "a", text: "Ethanol > phenol > p-cresol > p-nitrophenol" },
                        { key: "b", text: "p-Cresol > phenol > p-nitrophenol > ethanol" },
                        { key: "c", text: "Phenol > p-nitrophenol > ethanol > p-cresol" },
                        { key: "d", text: "p-Nitrophenol > phenol > p-cresol > ethanol" }
                    ],
                    answer: "d",
                    explanation: "The para nitro group stabilizes the phenoxide conjugate base through electron withdrawal, increasing acidity. A para methyl group instead donates electron density, making p-cresol slightly less acidic than phenol. Ordinary ethanol lacks the corresponding phenoxide resonance stabilization and is much less acidic than these phenols."
                }
            ]
        },
        {
            id: "floral39",
            name: "Floral Diversity - Morphology and Families",
            subject: "Botany",
            accent: "emerald",
            blurb: "Fifteen questions comparing flowering-plant organs, floral characters, placentation and the four syllabus families.",
            questions: [
                {
                    id: "d39b29",
                    text: "A flower has four free cruciform petals, six stamens with four long and two short, and a bicarpellary ovary that becomes apparently two-chambered through a false septum. Which identification and placentation are most consistent with this combination?",
                    options: [
                        { key: "a", text: "Solanaceae; axile" },
                        { key: "b", text: "Brassicaceae; parietal" },
                        { key: "c", text: "Liliaceae; axile" },
                        { key: "d", text: "Fabaceae; marginal" }
                    ],
                    answer: "b",
                    explanation: "The combined cruciform corolla and tetradynamous stamens identify the typical Brassicaceae flower. Its ovary has parietal placentation despite becoming apparently bilocular through a false septum. Chamber count alone must not be used to infer axile placentation; the origin of the partition and ovule attachment matter."
                },
                {
                    id: "d39b30",
                    text: "For a typical pea flower, evaluate: I. A<sub>(9)+1</sub> represents ten stamens in total. II. The nine united stamens are joined by their anthers, not their filaments. III. The superior, monocarpellary ovary shows marginal placentation. Which statements are correct?",
                    options: [
                        { key: "a", text: "Only I and III" },
                        { key: "b", text: "Only II and III" },
                        { key: "c", text: "Only I and II" },
                        { key: "d", text: "All three" }
                    ],
                    answer: "a",
                    explanation: "The pea has nine stamens with united filaments plus one free stamen: ten in total and a diadelphous androecium. Their anthers remain free, so II confuses filament union with anther union. The typical pea gynoecium has one carpel, a superior ovary and marginal ovules. These details describe the pea representative, not every member of the broad Fabaceae."
                },
                {
                    id: "d39b31",
                    text: "A representative flower has K<sub>(5)</sub> C<sub>(5)</sub> A<sub>5</sub> G<sub>(2)</sub>, a superior ovary and stamens attached to the corolla. Which interpretation is correct?",
                    options: [
                        { key: "a", text: "Five free petals and two separate ovaries" },
                        { key: "b", text: "Five stamens attached to tepals and an inferior ovary" },
                        { key: "c", text: "Five united petals, epipetalous stamens and two fused carpels" },
                        { key: "d", text: "One petal, five united anthers and two free carpels" }
                    ],
                    answer: "c",
                    explanation: "Parentheses in C<sub>(5)</sub> mean five petals are united, not that only one petal exists. Attachment to petals is epipetaly. G<sub>(2)</sub> indicates two fused carpels forming a compound gynoecium, not two separate ovaries. Together with the stated superior ovary, these are standard Solanaceae characters."
                },
                {
                    id: "d39b32",
                    text: "A typical Lilium flower has six tepals in two whorls, six stamens and G<sub>(3)</sub> with axile placentation. Which gynoecium description is correct?",
                    options: [
                        { key: "a", text: "Six free carpels forming six ovaries" },
                        { key: "b", text: "Three free carpels with marginal placentation" },
                        { key: "c", text: "One carpel because there is only one pistil" },
                        { key: "d", text: "Three fused carpels forming a compound pistil, typically with a three-locular superior ovary" }
                    ],
                    answer: "d",
                    explanation: "G<sub>(3)</sub> denotes a syncarpous gynoecium of three carpels. In the typical lily, these form one compound pistil with a superior, trilocular ovary and axile placentation. The numbers of tepals, carpels, pistils and locules are different descriptors and cannot simply be substituted for one another."
                },
                {
                    id: "d39b33",
                    text: "In inflorescence X, the main axis continues growing and older pedicellate flowers occur below younger ones. In Y, the first flower terminates the main axis and later flowers develop on lateral branches below it. Which description matches X and Y?",
                    options: [
                        { key: "a", text: "X cymose with basipetal succession; Y racemose with acropetal succession" },
                        { key: "b", text: "X racemose with acropetal succession; Y cymose with basipetal succession" },
                        { key: "c", text: "Both racemose because both bear lateral flowers" },
                        { key: "d", text: "Both cymose because older flowers are present" }
                    ],
                    answer: "b",
                    explanation: "The continuing main axis and lower-to-upper age sequence diagnose racemose X. A terminal first flower restricts the main axis in cymose Y, with subsequent development below or outward from it. The mere presence of lateral flowers does not distinguish the two; axis termination and developmental order do."
                },
                {
                    id: "d39b34",
                    text: "The diagrams are schematic transverse sections of ovaries. Solid dots represent ovules. X has true septa meeting at the centre, with ovules attached near their junction; Y has no septa and bears ovules on the inner wall. Identify X and Y.<svg class='q-fig' viewBox='0 0 300 150' width='300' height='150' role='img' aria-label='Ovary X has three chambers separated by septa meeting at the centre and ovules near the centre. Ovary Y is unpartitioned with ovules attached to the inner wall.'><g fill='none' stroke='currentColor' stroke-width='1.8'><circle cx='72' cy='68' r='47'/><path d='M72 21V68L31.3 91.5M72 68L112.7 91.5'/><circle cx='225' cy='68' r='47'/><path d='M184 47L191 51M266 47L259 51M225 115V105'/></g><g fill='currentColor'><circle cx='63' cy='61' r='4'/><circle cx='82' cy='61' r='4'/><circle cx='72' cy='80' r='4'/><circle cx='193' cy='52' r='4'/><circle cx='257' cy='52' r='4'/><circle cx='225' cy='103' r='4'/></g><g fill='currentColor' font-family='sans-serif' font-size='18' text-anchor='middle'><text x='72' y='140'>X</text><text x='225' y='140'>Y</text></g></svg>",
                    options: [
                        { key: "a", text: "X parietal; Y axile" },
                        { key: "b", text: "X free-central; Y parietal" },
                        { key: "c", text: "X axile; Y parietal" },
                        { key: "d", text: "X marginal; Y free-central" }
                    ],
                    answer: "c",
                    explanation: "In axile placentation, ovules attach to the central axis where the true septa of fused carpels meet, as in X. Parietal ovules attach to the inner ovarian wall, as in Y. A free-central column has no septa connecting it to the outer wall, so central ovules alone would not establish the axile condition without the partitions."
                },
                {
                    id: "d39b35",
                    text: "Which report is inconsistent with the typical floral diagnosis of the named plant?",
                    options: [
                        { key: "a", text: "Solanum: A<sub>(9)+1</sub> and a single carpel with marginal placentation" },
                        { key: "b", text: "Brassica: cruciform petals, tetradynamous stamens and parietal placentation" },
                        { key: "c", text: "Pisum: vexillary aestivation, diadelphous stamens and marginal placentation" },
                        { key: "d", text: "Lilium: six tepals, six stamens and a tricarpellary axile ovary" }
                    ],
                    answer: "a",
                    explanation: "The first report assigns pea-like characters to Solanum. Typical Solanum has five epipetalous stamens and a bicarpellary, syncarpous ovary with axile placentation. The other combinations are consistent with their representative genera. Several characters should be checked together rather than identifying a family from only one number."
                },
                {
                    id: "d39b36",
                    text: "Tomato and Datura have the standard pentamerous, epipetalous, bicarpellary-axile floral pattern, but tomato forms a berry and Datura a capsule. Which conclusion is justified?",
                    options: [
                        { key: "a", text: "They must belong to different families because their fruit types differ." },
                        { key: "b", text: "Datura must have marginal placentation because its fruit is dry." },
                        { key: "c", text: "Tomato must have an inferior ovary because its fruit is fleshy." },
                        { key: "d", text: "Both belong to Solanaceae; a single family can include both berry and capsule fruits." }
                    ],
                    answer: "d",
                    explanation: "Tomato and Datura are both Solanaceae. Their contrasting berry and capsule fruits illustrate variation within the family without changing the basic floral diagnosis. Dry versus fleshy fruit does not by itself determine placentation, ovary position or family membership. Typical ovaries of both examples are superior."
                },
                {
                    id: "d39b37",
                    text: "Potato and sweet potato both store food underground. Potato bears eyes associated with nodes, whereas sweet potato lacks the ordinary nodes and internodes of a stem. Which interpretation is correct?",
                    options: [
                        { key: "a", text: "Both are roots because they grow underground." },
                        { key: "b", text: "Both are stems because they store starch." },
                        { key: "c", text: "Potato is a stem tuber; sweet potato is a storage root." },
                        { key: "d", text: "Potato is a root; sweet potato is a stem tuber." }
                    ],
                    answer: "c",
                    explanation: "Potato eyes are bud complexes at nodes of a modified stem. Sweet potato's storage organ is a swollen adventitious root. The shared underground position and food-storage function do not establish the same organ identity. Nodes, internodes and associated buds provide more reliable structural evidence than habitat or function."
                },
                {
                    id: "d39b38",
                    text: "Pea and Cucurbita both climb using tendrils. Which comparison correctly considers the developmental origin of these structures?",
                    options: [
                        { key: "a", text: "Pea tendrils are modified leaflets; Cucurbita tendrils are shoot-derived, so they are analogous as climbing structures." },
                        { key: "b", text: "Both are modified roots and are homologous for that reason." },
                        { key: "c", text: "Pea tendrils are stems; Cucurbita tendrils are leaflets." },
                        { key: "d", text: "Both must be modified leaves because they are slender and green." }
                    ],
                    answer: "a",
                    explanation: "In pea, leaflets are modified into tendrils. Cucurbita has stem or shoot-derived tendrils. Their similar climbing role therefore does not imply identical organ origin; they are analogous in that function. Greenness, coiling and slenderness are not sufficient tests for deciding whether a structure is a leaf or stem modification."
                },
                {
                    id: "d39b39",
                    text: "Papaya has a deeply palmately lobed but continuous leaf blade, whereas rose has separate leaflets arranged on a rachis. Neither the papaya lobes nor the individual rose leaflets have axillary buds. Which classification is correct?",
                    options: [
                        { key: "a", text: "Both are compound leaves because both have divided outlines." },
                        { key: "b", text: "Papaya has a simple leaf; rose has a pinnately compound leaf." },
                        { key: "c", text: "Papaya is compound; rose is simple." },
                        { key: "d", text: "Both are simple because their smaller parts lack axillary buds." }
                    ],
                    answer: "b",
                    explanation: "Deep lobing does not automatically make a leaf compound. Papaya retains one continuous lamina, so its leaf is simple. Rose has separate leaflets on a rachis and is pinnately compound. The axillary bud belongs at the base of the whole leaf, not each leaflet; its absence from leaflets does not make the whole rose leaf simple."
                },
                {
                    id: "d39b40",
                    text: "Sepals, petals and stamens arise from the rim of a cup-shaped hypanthium surrounding an ovary. The hypanthium is not fused to the ovary wall, which remains free inside the cup. Which description follows from these anatomical relationships?",
                    options: [
                        { key: "a", text: "Epigynous flower with an inferior ovary" },
                        { key: "b", text: "Hypogynous flower with an inferior ovary" },
                        { key: "c", text: "An ovary must be inferior whenever a floral cup surrounds it." },
                        { key: "d", text: "Perigynous flower with a superior ovary free from the surrounding cup" }
                    ],
                    answer: "d",
                    explanation: "Insertion on the rim of the surrounding floral cup is perigyny. Because that cup is explicitly not adnate to the ovary wall, the ovary remains superior. Merely being surrounded by a cup is not the same as being embedded in fused tissue. This anatomical distinction avoids inferring an inferior ovary from the height of the other whorls alone."
                },
                {
                    id: "d39b41",
                    text: "In a floral bud, the large standard petal overlaps the two wings, and the wings overlap the two keel petals. Which representative and aestivation match this arrangement?",
                    options: [
                        { key: "a", text: "Datura; valvate" },
                        { key: "b", text: "Pea; vexillary or descending imbricate" },
                        { key: "c", text: "Lilium; twisted" },
                        { key: "d", text: "Mustard; ascending imbricate" }
                    ],
                    answer: "b",
                    explanation: "A typical pea corolla has vexillary aestivation: the standard is outermost, the two wings are intermediate, and the keel is innermost. This is descending imbricate overlap. Valvate parts touch without overlapping, and twisted aestivation has a repeated one-edge-over, one-edge-under relation rather than the standard-wing-keel hierarchy."
                },
                {
                    id: "d39b42",
                    text: "Fruit A develops from many free ovaries of one flower, with a fleshy receptacle contributing most of its bulk. Fruit B incorporates ovaries of many flowers along with parts of their inflorescence axis. Which classification is correct?",
                    options: [
                        { key: "a", text: "A multiple; B aggregate" },
                        { key: "b", text: "Both simple because each mature structure looks like one fruit" },
                        { key: "c", text: "A aggregate and accessory; B multiple" },
                        { key: "d", text: "A simple and true; B aggregate" }
                    ],
                    answer: "c",
                    explanation: "Many ovaries within one flower produce an aggregate fruit; substantial non-ovarian receptacle tissue also makes A accessory, as in strawberry. Contributions from many flowers diagnose multiple fruit B, as in pineapple. Aggregate versus multiple concerns the number of flowers involved, while accessory versus true concerns the tissues contributing to the fruit."
                },
                {
                    id: "d39b43",
                    text: "Take one typical flower each of Brassica, Pisum, Solanum and Lilium. What are the combined numbers of stamens and carpels, respectively? Count individual members even when they are fused.",
                    options: [
                        { key: "a", text: "27 stamens; 8 carpels" },
                        { key: "b", text: "27 stamens; 4 carpels" },
                        { key: "c", text: "21 stamens; 8 carpels" },
                        { key: "d", text: "22 stamens; 8 carpels" }
                    ],
                    answer: "a",
                    explanation: "The stamen counts are 6, 10, 5 and 6, totaling 27. The corresponding carpel counts are 2, 1, 2 and 3, totaling 8. Fused carpels do not become one carpel merely because they form one compound pistil. Likewise, pea's nine united filaments still represent nine of its ten stamens."
                }
            ]
        },
        {
            id: "mat39",
            name: "MAT - Selected Multi-step Revision",
            subject: "MAT",
            accent: "cyan",
            blurb: "Seven variants on selected Day 38 rate, data, logical and spatial questions.",
            questions: [
                {
                    id: "d39m44",
                    revisionOf: { day: 38, question: 38, id: "d38m138" },
                    text: "Inlet A fills a tank in 9 hours, inlet B in 12 hours, and an outlet empties a full tank in 36 hours. All rates are constant. Starting from empty, all three operate for 2 hours. Then A is closed, while B and the outlet remain open. How many hours after the original start does the tank become full?",
                    options: [
                        { key: "a", text: "12 hours" },
                        { key: "b", text: "10 hours" },
                        { key: "c", text: "6 hours" },
                        { key: "d", text: "14 hours" }
                    ],
                    answer: "d",
                    explanation: "Initially the net rate is $1/9+1/12-1/36=1/6$ tank per hour. In two hours, one third fills. After A closes, the net rate is $1/12-1/36=1/18$. The remaining two thirds require 12 more hours. Total elapsed time is 14 hours; 12 hours omits the initial stage."
                },
                {
                    id: "d39m45",
                    revisionOf: { day: 38, question: 39, id: "d38m139" },
                    text: "A train passes a stationary pole completely in 15 seconds and a 300 m platform completely in 35 seconds at constant speed. It then overtakes a 150 m train travelling at 36 km/h on a parallel track in the same direction. From when the faster train's front reaches the slower train's rear, how long does complete overtaking take?",
                    options: [
                        { key: "a", text: "15 seconds" },
                        { key: "b", text: "25 seconds" },
                        { key: "c", text: "75 seconds" },
                        { key: "d", text: "45 seconds" }
                    ],
                    answer: "c",
                    explanation: "The platform adds 300 m and 20 seconds, so the faster speed is 15 m/s. Its length is $15(15)=225$ m. The slower speed is 10 m/s; for same-direction overtaking the relative speed is only 5 m/s. The combined 375 m length therefore takes $375/5=75$ seconds to clear."
                },
                {
                    id: "d39m46",
                    revisionOf: { day: 38, question: 40, id: "d38m140" },
                    text: "Scoring is +1 for a correct answer and -0.25 for an incorrect answer. Each attempted question has one answer. From the table, calculate combined accuracy across all three quizzes to two decimal places.<svg class='q-fig' viewBox='0 0 310 170' width='310' height='170' role='img' aria-label='Quiz I: 24 attempted, 16.50 net marks. Quiz II: 36 attempted, 23.50 net marks. Quiz III: 30 attempted, 20.00 net marks.'><g fill='none' stroke='currentColor' stroke-width='1.2'><path d='M8 8H302V160H8ZM8 46H302M8 84H302M8 122H302M83 8V160M190 8V160'/></g><g fill='currentColor' font-family='sans-serif' font-size='15' text-anchor='middle'><text x='45' y='33'>Quiz</text><text x='136' y='33'>Attempted</text><text x='246' y='33'>Net marks</text><text x='45' y='71'>I</text><text x='136' y='71'>24</text><text x='246' y='71'>16.50</text><text x='45' y='109'>II</text><text x='136' y='109'>36</text><text x='246' y='109'>23.50</text><text x='45' y='147'>III</text><text x='136' y='147'>30</text><text x='246' y='147'>20.00</text></g></svg>",
                    options: [
                        { key: "a", text: "73.33%" },
                        { key: "b", text: "73.52%" },
                        { key: "c", text: "66.00%" },
                        { key: "d", text: "75.00%" }
                    ],
                    answer: "a",
                    explanation: "With $A$ attempts, $C$ correct and score $S$, the relation is $S=1.25C-0.25A$. Thus $C=(S+0.25A)/1.25$, giving 18, 26 and 22 correct answers. Overall accuracy is $66/90$ as a percentage, or 73.33%. Averaging the three separate percentages would give 73.52% because the attempt counts differ."
                },
                {
                    id: "d39m47",
                    revisionOf: { day: 38, question: 45, id: "d38m145" },
                    text: "Exactly one of boxes A, B, C and D contains a token. A's label says, 'The token is not in A.' B's says, 'The token is in A or C.' C's says, 'The token is not in D.' D's says, 'The token is in B.' Exactly two labels are true. Which box contains the token?",
                    options: [
                        { key: "a", text: "D" },
                        { key: "b", text: "A" },
                        { key: "c", text: "C" },
                        { key: "d", text: "B" }
                    ],
                    answer: "b",
                    explanation: "Test each possible location against every label. If the token is in A, only B's and C's labels are true, giving two truths. A token in B gives three true labels, and C also gives three. D gives only one. Therefore A is the unique location satisfying the condition; a box's own label need not be true."
                },
                {
                    id: "d39m48",
                    revisionOf: { day: 38, question: 46, id: "d38m146" },
                    text: "The card shows a right-pointing arrow and a dot near the upper-left corner. Rotate the whole card 90 degrees anticlockwise, reflect it top-to-bottom across a horizontal line, then rotate it 90 degrees clockwise. Which description gives the final arrow and dot?<svg class='q-fig' viewBox='0 0 170 155' width='170' height='155' role='img' aria-label='Square card with a right-pointing arrow through its centre and a dot at the upper-left corner'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M30 25H130V125H30Z'/><path d='M47 75H112M98 61L112 75L98 89' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></g><circle cx='45' cy='40' r='5' fill='currentColor'/></svg>",
                    options: [
                        { key: "a", text: "Arrow right; dot upper right" },
                        { key: "b", text: "Arrow left; dot lower left" },
                        { key: "c", text: "Arrow right; dot lower left" },
                        { key: "d", text: "Arrow left; dot upper right" }
                    ],
                    answer: "d",
                    explanation: "The arrow goes right to up, then down after the horizontal reflection, then left after the final clockwise turn. The dot goes upper left to lower left, then upper left, then upper right. Rotations cannot simply be cancelled across an intervening reflection; the order and the mirror orientation matter."
                },
                {
                    id: "d39m49",
                    revisionOf: { day: 38, question: 47, id: "d38m147" },
                    text: "Fold the net into a cube with the letters on the outside. Orient the cube with S on top and P facing you. Which letter is on the right face?<svg class='q-fig' viewBox='0 0 260 195' width='260' height='195' role='img' aria-label='Cube net: horizontal row P, Q, R, S; T is directly above Q and U directly below Q'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M30 72H230V122H30ZM80 72V122M130 72V122M180 72V122M80 72V22H130V72M80 122V172H130V122'/></g><g fill='currentColor' font-family='sans-serif' font-size='22' text-anchor='middle'><text x='55' y='105'>P</text><text x='105' y='105'>Q</text><text x='155' y='105'>R</text><text x='205' y='105'>S</text><text x='105' y='55'>T</text><text x='105' y='155'>U</text></g></svg>",
                    options: [
                        { key: "a", text: "T" },
                        { key: "b", text: "U" },
                        { key: "c", text: "R" },
                        { key: "d", text: "Q" }
                    ],
                    answer: "a",
                    explanation: "With Q initially in front, P is left, R right, T top, U bottom and S back. Turn to put P in front: T stays on top and S lies to the left. Keeping P in front, turn the cube until S moves to the top; T then moves to the right. Opposite pairs alone cannot settle this orientation question."
                },
                {
                    id: "d39m50",
                    revisionOf: { day: 38, question: 49, id: "d38m149" },
                    text: "A square sheet of side 20 cm has its lower-left corner at (0, 0), with x increasing rightwards and y upwards. Fold its left half onto the right along x = 10, then its top half onto the bottom along y = 10. A tiny hole is punched through all layers at (14, 3), using the original coordinates. After unfolding, what is the greatest distance between two hole centres?",
                    options: [
                        { key: "a", text: "$2\\sqrt{29}$ cm" },
                        { key: "b", text: "$2\\sqrt{65}$ cm" },
                        { key: "c", text: "$4\\sqrt{13}$ cm" },
                        { key: "d", text: "$14$ cm" }
                    ],
                    answer: "b",
                    explanation: "Reflection across x = 10 gives horizontal positions 14 and 6; reflection across y = 10 gives vertical positions 3 and 17. The four hole centres form a rectangle measuring 8 cm by 14 cm. The largest separation is its diagonal, $\\sqrt{8^2+14^2}=2\\sqrt{65}$ cm. Distances must be taken between holes, not between a hole and a crease."
                }
            ]
        }
    ]
};

const DAY39_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Stoichiometry: Hydrates, Gas Mixtures, Purity and Yield", ids: ["d39c1", "d39c2", "d39c3", "d39c4", "d39c5", "d39c6"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Alcohols: Classification and Oxidation", ids: ["d39a7", "d39a8", "d39a9", "d39a10", "d39a11"] },
            { name: "Alcohols: Preparation, Tests and Reaction Pathways", ids: ["d39a12", "d39a13", "d39a14", "d39a15", "d39a16", "d39a17", "d39a18", "d39a19"] },
            { name: "Alcohols: Quantitative Reactions and Industrial Forms", ids: ["d39a20", "d39a21", "d39a22", "d39a23"] },
            { name: "Phenols: Properties and Selective Reactions", ids: ["d39p24", "d39p25", "d39p26", "d39p27", "d39p28"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Biodiversity", subs: [
            { name: "Flowering-Plant Morphology and Families: Diagnostic Floral Characters", ids: ["d39b29", "d39b30", "d39b31", "d39b32", "d39b33", "d39b34", "d39b35", "d39b36"] },
            { name: "Flowering-Plant Morphology and Families: Organs, Aestivation and Fruits", ids: ["d39b37", "d39b38", "d39b39", "d39b40", "d39b41", "d39b42", "d39b43"] }
        ] }
    ] },
    { subject: "MAT", accent: "cyan", topics: [
        { topic: "Numerical Reasoning", subs: [
            { name: "Numerical Reasoning: Staged Rates and Data Interpretation", ids: ["d39m44", "d39m45", "d39m46"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Logical Reasoning: Consistent Truth Assignments", ids: ["d39m47"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Spatial and Abstract Reasoning: Transformations and Folded Solids", ids: ["d39m48", "d39m49", "d39m50"] }
        ] }
    ] }
];
DAY39.syllabus = DAY39_SYLLABUS;