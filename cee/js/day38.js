const DAY38 = {
    day: 38,
    title: "Day 38",
    subtitle: "Mole Concept and MAT - Syllabus Practice",
    durationMinutes: 45,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "chemistry38",
            name: "Mole Concept and Stoichiometry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "30 questions on amounts, particles, composition, formulae, reaction stoichiometry, limiting reactants, purity and yield.",
            questions: [
                {
                    id: "d38c1",
                    text: "How many moles of carbon dioxide are present in 11.0 g of pure CO<sub>2</sub>?",
                    options: [
                        { key: "a", text: "0.125 mol" },
                        { key: "b", text: "0.250 mol" },
                        { key: "c", text: "0.500 mol" },
                        { key: "d", text: "2.50 mol" }
                    ],
                    answer: "b",
                    explanation: "The molar mass of CO<sub>2</sub> is $12+2(16)=44$ g/mol. The amount is $n=m/M=11.0/44=0.250$ mol. Divide the sample mass by the molar mass, not by the atomic mass of carbon alone."
                },
                {
                    id: "d38c2",
                    text: "What is the mass of 0.150 mol of anhydrous Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?",
                    options: [
                        { key: "a", text: "17.1 g" },
                        { key: "b", text: "34.2 g" },
                        { key: "c", text: "68.4 g" },
                        { key: "d", text: "51.3 g" }
                    ],
                    answer: "d",
                    explanation: "There are two Al, three S and twelve O atoms per formula unit. The molar mass is $2(27)+3[32+4(16)]=342$ g/mol, so the required mass is $m=nM=0.150(342)=51.3$ g."
                },
                {
                    id: "d38c3",
                    text: "How many water molecules are present in 9.0 g of H<sub>2</sub>O? Take $N_A=6.022\\times10^{23}$ mol$^{-1}$.",
                    options: [
                        { key: "a", text: "$3.011\\times10^{23}$" },
                        { key: "b", text: "$6.022\\times10^{23}$" },
                        { key: "c", text: "$1.8066\\times10^{24}$" },
                        { key: "d", text: "$1.5055\\times10^{23}$" }
                    ],
                    answer: "a",
                    explanation: "Water has molar mass 18 g/mol, so 9.0 g contains $9.0/18=0.50$ mol. The molecule count is $N=nN_A=0.50N_A$, which is $3.011\\times10^{23}$ molecules. Counting all atoms would require an additional factor of three."
                },
                {
                    id: "d38c4",
                    text: "What is the total amount of atoms, in moles of atoms, in 0.20 mol of NH<sub>3</sub> molecules?",
                    options: [
                        { key: "a", text: "0.20 mol" },
                        { key: "b", text: "0.60 mol" },
                        { key: "c", text: "0.80 mol" },
                        { key: "d", text: "1.00 mol" }
                    ],
                    answer: "c",
                    explanation: "Each ammonia molecule contains one nitrogen atom and three hydrogen atoms, giving four atoms altogether. Thus 0.20 mol of molecules contains $4(0.20)=0.80$ mol of atoms: 0.20 mol N atoms plus 0.60 mol H atoms."
                },
                {
                    id: "d38c5",
                    text: "How many oxygen atoms are present in 0.25 mol of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>? Here $N_A$ denotes Avogadro's constant.",
                    options: [
                        { key: "a", text: "$3N_A$" },
                        { key: "b", text: "$N_A$" },
                        { key: "c", text: "$0.75N_A$" },
                        { key: "d", text: "$12N_A$" }
                    ],
                    answer: "a",
                    explanation: "The formula contains three sulphate groups, each with four oxygen atoms. One mole of formula units therefore contains 12 mol of oxygen atoms. For 0.25 mol, the oxygen-atom count is $0.25(12)N_A=3N_A$."
                },
                {
                    id: "d38c6",
                    text: "A solution is made by completely dissociating 0.10 mol of CaCl<sub>2</sub> in water. How many chloride ions does it contain? Here $N_A$ denotes Avogadro's constant.",
                    options: [
                        { key: "a", text: "$0.10N_A$" },
                        { key: "b", text: "$0.30N_A$" },
                        { key: "c", text: "$N_A$" },
                        { key: "d", text: "$0.20N_A$" }
                    ],
                    answer: "d",
                    explanation: "Each CaCl<sub>2</sub> formula unit supplies two chloride ions, so 0.10 mol supplies 0.20 mol of chloride ions, or $0.20N_A$ ions. The value $0.30N_A$ would count calcium and chloride ions together."
                },
                {
                    id: "d38c7",
                    text: "Which pure gas sample contains the greatest number of molecules?",
                    options: [
                        { key: "a", text: "4.0 g of O<sub>2</sub>" },
                        { key: "b", text: "4.0 g of H<sub>2</sub>" },
                        { key: "c", text: "4.0 g of N<sub>2</sub>" },
                        { key: "d", text: "4.0 g of CO<sub>2</sub>" }
                    ],
                    answer: "b",
                    explanation: "For equal sample masses, molecule count is inversely proportional to molar mass. The molar masses are 32, 2, 28 and 44 g/mol respectively. Hydrogen has the smallest molar mass and gives $4.0/2=2.0$ mol, the greatest amount."
                },
                {
                    id: "d38c8",
                    text: "Equal volumes of ideal helium gas and ideal carbon dioxide gas are maintained at the same temperature and pressure. Which quantity must be equal for the two samples?",
                    options: [
                        { key: "a", text: "Mass" },
                        { key: "b", text: "Total number of atoms" },
                        { key: "c", text: "Number of gas particles" },
                        { key: "d", text: "Density" }
                    ],
                    answer: "c",
                    explanation: "Avogadro's law gives equal amounts, and hence equal numbers of gas particles, at equal volume, temperature and pressure. The particles are He atoms and CO<sub>2</sub> molecules. Each CO<sub>2</sub> molecule has three atoms, so total atom counts and masses are not equal."
                },
                {
                    id: "d38c9",
                    text: "An ideal gas sample has a mass of 20.0 g and occupies 11.2 L at 273.15 K and 1 atm. Taking the molar volume at these conditions as 22.4 L/mol, what is its molar mass?",
                    options: [
                        { key: "a", text: "10.0 g/mol" },
                        { key: "b", text: "20.0 g/mol" },
                        { key: "c", text: "22.4 g/mol" },
                        { key: "d", text: "40.0 g/mol" }
                    ],
                    answer: "d",
                    explanation: "The amount of gas is $n=V/V_m=11.2/22.4=0.50$ mol. Its molar mass is therefore $M=m/n=20.0/0.50=40.0$ g/mol. The pressure and molar-volume convention are stated explicitly."
                },
                {
                    id: "d38c10",
                    text: "In one oxide, 12 g of carbon combines with 16 g of oxygen. In another oxide, the same 12 g of carbon combines with 32 g of oxygen. Which law is illustrated by comparing these two oxygen masses?",
                    options: [
                        { key: "a", text: "Law of definite proportions" },
                        { key: "b", text: "Law of multiple proportions" },
                        { key: "c", text: "Law of reciprocal proportions" },
                        { key: "d", text: "Law of combining gas volumes" }
                    ],
                    answer: "b",
                    explanation: "For a fixed mass of carbon, the oxygen masses in two different compounds are in the small whole-number ratio $16:32=1:2$. This is the law of multiple proportions. Definite proportions concerns the fixed composition of a single pure compound."
                },
                {
                    id: "d38c11",
                    text: "A sample of 18.0 g of pure carbon burns completely in oxygen to form 66.0 g of carbon dioxide as the only product. What mass of oxygen is consumed?",
                    options: [
                        { key: "a", text: "24.0 g" },
                        { key: "b", text: "36.0 g" },
                        { key: "c", text: "48.0 g" },
                        { key: "d", text: "84.0 g" }
                    ],
                    answer: "c",
                    explanation: "Conservation of mass requires the mass of carbon plus the mass of oxygen consumed to equal the carbon dioxide mass. Thus $m(\\mathrm{O_2})=66.0-18.0=48.0$ g. Any oxygen left unreacted is not part of the mass consumed."
                },
                {
                    id: "d38c12",
                    text: "What is the percentage by mass of oxygen in pure CaCO<sub>3</sub>?",
                    options: [
                        { key: "a", text: "48%" },
                        { key: "b", text: "16%" },
                        { key: "c", text: "40%" },
                        { key: "d", text: "60%" }
                    ],
                    answer: "a",
                    explanation: "The formula mass is $40+12+3(16)=100$. Oxygen contributes $3(16)=48$ of these mass units. Therefore its mass percentage is $(48/100)\\times100=48\\%$; all three oxygen atoms must be included."
                },
                {
                    id: "d38c13",
                    text: "What is the nitrogen percentage by mass in NH<sub>4</sub>NO<sub>3</sub>?",
                    options: [
                        { key: "a", text: "17.5%" },
                        { key: "b", text: "35.0%" },
                        { key: "c", text: "28.0%" },
                        { key: "d", text: "60.0%" }
                    ],
                    answer: "b",
                    explanation: "Ammonium nitrate has two nitrogen atoms per formula unit. Its molar mass is $2(14)+4(1)+3(16)=80$ g/mol, including 28 g of nitrogen per mole. Hence the nitrogen percentage is $(28/80)\\times100=35.0\\%$."
                },
                {
                    id: "d38c14",
                    text: "A compound contains approximately 40.00% carbon, 6.67% hydrogen and 53.33% oxygen by mass. What is its empirical formula?",
                    options: [
                        { key: "a", text: "CH<sub>2</sub>O" },
                        { key: "b", text: "C<sub>2</sub>H<sub>4</sub>O" },
                        { key: "c", text: "CH<sub>4</sub>O" },
                        { key: "d", text: "CHO<sub>2</sub>" }
                    ],
                    answer: "a",
                    explanation: "For a 100 g sample, divide each mass by its atomic mass: $40/12\\approx3.333$, $6.67/1=6.67$ and $53.33/16\\approx3.333$. Dividing by the smallest value gives the approximate atomic ratio $1:2:1$, so the empirical formula is CH<sub>2</sub>O."
                },
                {
                    id: "d38c15",
                    text: "A compound has empirical formula CH<sub>2</sub>O and molar mass 180 g/mol. What is its molecular formula?",
                    options: [
                        { key: "a", text: "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>" },
                        { key: "b", text: "C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>" },
                        { key: "c", text: "C<sub>5</sub>H<sub>10</sub>O<sub>5</sub>" },
                        { key: "d", text: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>" }
                    ],
                    answer: "d",
                    explanation: "The empirical-formula mass is $12+2(1)+16=30$. The molecular-to-empirical mass ratio is $180/30=6$. Multiplying every empirical subscript by six gives C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, not merely multiplying the carbon subscript."
                },
                {
                    id: "d38c16",
                    text: "Complete combustion of 3.00 g of a compound containing only C, H and O gives 4.40 g of CO<sub>2</sub> and 1.80 g of H<sub>2</sub>O. What is the compound's empirical formula?",
                    options: [
                        { key: "a", text: "C<sub>2</sub>H<sub>6</sub>O" },
                        { key: "b", text: "CHO" },
                        { key: "c", text: "CH<sub>2</sub>O" },
                        { key: "d", text: "C<sub>2</sub>H<sub>4</sub>O" }
                    ],
                    answer: "c",
                    explanation: "Carbon amount is $4.40/44=0.10$ mol, giving 1.20 g C. Hydrogen amount is $2(1.80/18)=0.20$ mol, giving 0.20 g H. Oxygen in the original sample weighs $3.00-1.20-0.20=1.60$ g, or 0.10 mol. The ratio $0.10:0.20:0.10$ gives CH<sub>2</sub>O."
                },
                {
                    id: "d38c17",
                    text: "A 2.50 g sample of CuSO<sub>4</sub>&middot;<i>x</i>H<sub>2</sub>O loses only its water of crystallization on heating and leaves 1.60 g of anhydrous CuSO<sub>4</sub>. Find <i>x</i>.",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "2" },
                        { key: "c", text: "7" },
                        { key: "d", text: "10" }
                    ],
                    answer: "a",
                    explanation: "The water lost is $2.50-1.60=0.90$ g, or $0.90/18=0.050$ mol. Anhydrous CuSO<sub>4</sub> has molar mass 160 g/mol, so the residue is $1.60/160=0.010$ mol. The water-to-salt mole ratio is $0.050/0.010=5$, hence $x=5$."
                },
                {
                    id: "d38c18",
                    text: "Pure CaCO<sub>3</sub> decomposes completely according to CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>. What volume of CO<sub>2</sub> is obtained from 25.0 g of CaCO<sub>3</sub> at 273.15 K and 1 atm? Use a molar gas volume of 22.4 L/mol.",
                    options: [
                        { key: "a", text: "2.80 L" },
                        { key: "b", text: "11.2 L" },
                        { key: "c", text: "5.60 L" },
                        { key: "d", text: "22.4 L" }
                    ],
                    answer: "c",
                    explanation: "CaCO<sub>3</sub> has molar mass 100 g/mol, so 25.0 g is 0.250 mol. The balanced equation gives one mole of CO<sub>2</sub> per mole of carbonate. Therefore $V=0.250(22.4)=5.60$ L at the specified conditions."
                },
                {
                    id: "d38c19",
                    text: "What mass of oxygen is required for the complete combustion of 3.20 g of methane? The reaction is CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O.",
                    options: [
                        { key: "a", text: "6.40 g" },
                        { key: "b", text: "12.8 g" },
                        { key: "c", text: "3.20 g" },
                        { key: "d", text: "25.6 g" }
                    ],
                    answer: "b",
                    explanation: "Methane amount is $3.20/16=0.200$ mol. The balanced equation requires twice this amount of O<sub>2</sub>, or 0.400 mol. Oxygen gas has molar mass 32 g/mol, giving $0.400(32)=12.8$ g. Reaction coefficients compare moles, not masses directly."
                },
                {
                    id: "d38c20",
                    text: "A 5.40 g sample of aluminium reacts completely with excess oxygen: 4Al + 3O<sub>2</sub> &rarr; 2Al<sub>2</sub>O<sub>3</sub>. What mass of Al<sub>2</sub>O<sub>3</sub> forms?",
                    options: [
                        { key: "a", text: "5.10 g" },
                        { key: "b", text: "8.10 g" },
                        { key: "c", text: "20.4 g" },
                        { key: "d", text: "10.2 g" }
                    ],
                    answer: "d",
                    explanation: "Aluminium amount is $5.40/27=0.200$ mol. The coefficient ratio gives $0.200(2/4)=0.100$ mol of Al<sub>2</sub>O<sub>3</sub>. Its molar mass is $2(27)+3(16)=102$ g/mol, so the oxide mass is $0.100(102)=10.2$ g."
                },
                {
                    id: "d38c21",
                    text: "A mixture contains 2.0 mol of N<sub>2</sub> and 3.0 mol of H<sub>2</sub>. What is the maximum stoichiometric amount of NH<sub>3</sub> obtainable from N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>? Assume the limiting reactant is consumed completely; ignore equilibrium restrictions.",
                    options: [
                        { key: "a", text: "1.0 mol" },
                        { key: "b", text: "3.0 mol" },
                        { key: "c", text: "2.0 mol" },
                        { key: "d", text: "4.0 mol" }
                    ],
                    answer: "c",
                    explanation: "Compare available moles divided by coefficients: nitrogen gives $2.0/1=2.0$, whereas hydrogen gives $3.0/3=1.0$. Hydrogen is limiting. Its 3.0 mol produces $3.0(2/3)=2.0$ mol NH<sub>3</sub>, leaving 1.0 mol N<sub>2</sub> unused."
                },
                {
                    id: "d38c22",
                    text: "Hydrogen and oxygen react completely to the extent allowed by 2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O. Initially there are 4.0 g H<sub>2</sub> and 40.0 g O<sub>2</sub>. What mass of oxygen remains?",
                    options: [
                        { key: "a", text: "0 g" },
                        { key: "b", text: "8.0 g" },
                        { key: "c", text: "16.0 g" },
                        { key: "d", text: "32.0 g" }
                    ],
                    answer: "b",
                    explanation: "The initial amounts are $4.0/2=2.0$ mol H<sub>2</sub> and $40.0/32=1.25$ mol O<sub>2</sub>. Two moles of hydrogen consume 1.0 mol oxygen, so hydrogen is limiting. Oxygen left is $1.25-1.0=0.25$ mol, with mass $0.25(32)=8.0$ g."
                },
                {
                    id: "d38c23",
                    text: "A mixture of 30 mL CO and 20 mL O<sub>2</sub> reacts according to 2CO + O<sub>2</sub> &rarr; 2CO<sub>2</sub> until the limiting reactant is exhausted. What is the final total gas volume, measured at the same temperature and pressure as the initial volumes? Treat the gases as ideal.",
                    options: [
                        { key: "a", text: "35 mL" },
                        { key: "b", text: "40 mL" },
                        { key: "c", text: "50 mL" },
                        { key: "d", text: "30 mL" }
                    ],
                    answer: "a",
                    explanation: "At equal temperature and pressure, gas-volume ratios equal mole ratios. The 30 mL CO consumes 15 mL O<sub>2</sub> and forms 30 mL CO<sub>2</sub>. There is $20-15=5$ mL oxygen left, so the final gas volume is $30+5=35$ mL."
                },
                {
                    id: "d38c24",
                    text: "A mixture of 16.0 g Fe<sub>2</sub>O<sub>3</sub> and 5.60 g CO reacts by Fe<sub>2</sub>O<sub>3</sub> + 3CO &rarr; 2Fe + 3CO<sub>2</sub>. What is the maximum mass of iron formed, to three significant figures?",
                    options: [
                        { key: "a", text: "11.2 g" },
                        { key: "b", text: "5.60 g" },
                        { key: "c", text: "3.73 g" },
                        { key: "d", text: "7.47 g" }
                    ],
                    answer: "d",
                    explanation: "The initial amounts are $16.0/160=0.100$ mol Fe<sub>2</sub>O<sub>3</sub> and $5.60/28=0.200$ mol CO. Fully reducing the oxide would need 0.300 mol CO, so CO is limiting. Iron mass is $(0.200\\times2/3)\\times56=7.466\\ldots$ g, which rounds to 7.47 g."
                },
                {
                    id: "d38c25",
                    text: "Solutions containing 0.20 mol AgNO<sub>3</sub> and 0.15 mol NaCl are mixed. Assume quantitative precipitation according to AgNO<sub>3</sub> + NaCl &rarr; AgCl + NaNO<sub>3</sub>. How many moles of AgCl precipitate?",
                    options: [
                        { key: "a", text: "0.05 mol" },
                        { key: "b", text: "0.15 mol" },
                        { key: "c", text: "0.20 mol" },
                        { key: "d", text: "0.35 mol" }
                    ],
                    answer: "b",
                    explanation: "Silver nitrate and sodium chloride react in a 1:1 mole ratio. Sodium chloride supplies only 0.15 mol, so it is limiting and forms 0.15 mol AgCl. The remaining 0.05 mol silver nitrate cannot form more AgCl without additional chloride."
                },
                {
                    id: "d38c26",
                    text: "A 12.5 g limestone sample contains 80.0% CaCO<sub>3</sub> by mass; the remaining material is inert and releases no gas. On complete decomposition, CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>, what mass of CO<sub>2</sub> is obtained?",
                    options: [
                        { key: "a", text: "2.20 g" },
                        { key: "b", text: "5.50 g" },
                        { key: "c", text: "10.0 g" },
                        { key: "d", text: "4.40 g" }
                    ],
                    answer: "d",
                    explanation: "The actual carbonate mass is $12.5(0.80)=10.0$ g, or $10.0/100=0.100$ mol. Each mole releases one mole of CO<sub>2</sub>, so the gas mass is $0.100(44)=4.40$ g. Using all 12.5 g as pure carbonate would overestimate the yield."
                },
                {
                    id: "d38c27",
                    text: "Heating 25.0 g of pure CaCO<sub>3</sub> gives an isolated CaO yield of 11.2 g through CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>. What is the percentage yield of CaO?",
                    options: [
                        { key: "a", text: "44.8%" },
                        { key: "b", text: "70.0%" },
                        { key: "c", text: "80.0%" },
                        { key: "d", text: "89.6%" }
                    ],
                    answer: "c",
                    explanation: "The theoretical CaO yield is $(25.0/100)\\times56=14.0$ g. Percentage yield compares actual product with theoretical product: $(11.2/14.0)\\times100=80.0\\%$. Dividing product mass by initial reactant mass is not the yield calculation."
                },
                {
                    id: "d38c28",
                    text: "Potassium chlorate decomposes by 2KClO<sub>3</sub> &rarr; 2KCl + 3O<sub>2</sub>. What mass of oxygen is collected from 24.5 g of pure KClO<sub>3</sub> if the oxygen yield is 70.0% of theoretical?",
                    options: [
                        { key: "a", text: "6.72 g" },
                        { key: "b", text: "9.60 g" },
                        { key: "c", text: "4.48 g" },
                        { key: "d", text: "3.36 g" }
                    ],
                    answer: "a",
                    explanation: "KClO<sub>3</sub> has molar mass $39+35.5+48=122.5$ g/mol, so 24.5 g is 0.200 mol. Theoretical oxygen is $0.200(3/2)=0.300$ mol, or 9.60 g. The collected amount is $9.60(0.700)=6.72$ g."
                },
                {
                    id: "d38c29",
                    text: "An 18.4 g mixture contains only CaCO<sub>3</sub> and MgCO<sub>3</sub>. Excess acid releases 4.48 L of CO<sub>2</sub> at 273.15 K and 1 atm, with one mole of CO<sub>2</sub> formed per mole of either carbonate. What mass of CaCO<sub>3</sub> was in the mixture? Use a molar gas volume of 22.4 L/mol.",
                    options: [
                        { key: "a", text: "8.40 g" },
                        { key: "b", text: "9.20 g" },
                        { key: "c", text: "16.8 g" },
                        { key: "d", text: "10.0 g" }
                    ],
                    answer: "d",
                    explanation: "Total carbonate amount is $4.48/22.4=0.200$ mol. Let the calcium-carbonate amount be $x$ mol; magnesium carbonate is $0.200-x$ mol. The mass equation is $100x+84(0.200-x)=18.4$, giving $16x=1.60$ and $x=0.100$ mol. Thus CaCO<sub>3</sub> weighs 10.0 g."
                },
                {
                    id: "d38c30",
                    text: "An 8.00 g ore sample contains Fe<sub>2</sub>O<sub>3</sub> and inert impurities only. Complete reduction with excess CO gives 4.48 g of pure iron by Fe<sub>2</sub>O<sub>3</sub> + 3CO &rarr; 2Fe + 3CO<sub>2</sub>. What is the percentage by mass of Fe<sub>2</sub>O<sub>3</sub> in the ore?",
                    options: [
                        { key: "a", text: "56.0%" },
                        { key: "b", text: "64.0%" },
                        { key: "c", text: "80.0%" },
                        { key: "d", text: "90.0%" }
                    ],
                    answer: "c",
                    explanation: "The iron amount is $4.48/56=0.0800$ mol. This comes from $0.0800/2=0.0400$ mol Fe<sub>2</sub>O<sub>3</sub>, of mass $0.0400(160)=6.40$ g. The ore therefore contains $(6.40/8.00)\\times100=80.0\\%$ Fe<sub>2</sub>O<sub>3</sub>; 56% would be its elemental iron content."
                }
            ]
        },
        {
            id: "mat38",
            name: "Mental Agility Test",
            subject: "MAT",
            accent: "cyan",
            blurb: "Five questions each from verbal reasoning, numerical reasoning, logical sequencing, and spatial or abstract reasoning.",
            questions: [
                {
                    id: "d38m31",
                    text: "Complete the analogy: Thermometer : Temperature :: Barometer : ?",
                    options: [
                        { key: "a", text: "Humidity" },
                        { key: "b", text: "Speed" },
                        { key: "c", text: "Atmospheric pressure" },
                        { key: "d", text: "Mass" }
                    ],
                    answer: "c",
                    explanation: "The relationship is an instrument and the physical quantity it measures. A thermometer measures temperature, while a barometer measures atmospheric pressure. The other choices are not the quantity measured by a barometer."
                },
                {
                    id: "d38m32",
                    text: "In a code, each letter is replaced by the letter two positions later in the English alphabet, wrapping after Z. Thus SEED becomes UGGF. How is PLANT written?",
                    options: [
                        { key: "a", text: "RNCPV" },
                        { key: "b", text: "QMBOU" },
                        { key: "c", text: "RNCPW" },
                        { key: "d", text: "RMCNV" }
                    ],
                    answer: "a",
                    explanation: "Apply the same two-place shift to each letter without changing their order: P becomes R, L becomes N, A becomes C, N becomes P and T becomes V. Joining the results gives RNCPV. QMBOU would use a one-place shift instead."
                },
                {
                    id: "d38m33",
                    text: "Which letter pair continues the series AZ, BY, CX, DW, ... ?",
                    options: [
                        { key: "a", text: "EU" },
                        { key: "b", text: "FU" },
                        { key: "c", text: "FV" },
                        { key: "d", text: "EV" }
                    ],
                    answer: "d",
                    explanation: "The first letters advance one position at a time: A, B, C, D, E. Independently, the second letters move backwards: Z, Y, X, W, V. The next pair must combine E with V, giving EV."
                },
                {
                    id: "d38m34",
                    text: "Nira, a woman, points to a man's photograph and says, 'He is the son of my mother's only daughter.' How is the man related to Nira?",
                    options: [
                        { key: "a", text: "Brother" },
                        { key: "b", text: "Son" },
                        { key: "c", text: "Nephew" },
                        { key: "d", text: "Father" }
                    ],
                    answer: "b",
                    explanation: "Because Nira is a daughter and her mother has only one daughter, 'my mother's only daughter' must be Nira herself. The man is therefore Nira's son. The statement does not require Nira to be her mother's only child."
                },
                {
                    id: "d38m35",
                    text: "Which word cannot be formed using only the letters of REACTION, with each available letter used at most once?",
                    options: [
                        { key: "a", text: "ORATOR" },
                        { key: "b", text: "ACTION" },
                        { key: "c", text: "CATION" },
                        { key: "d", text: "NOTICE" }
                    ],
                    answer: "a",
                    explanation: "REACTION contains only one O and one R. ORATOR requires two O letters and two R letters, so it cannot be formed. ACTION, CATION and NOTICE each use a subset of the available letters without repeating any letter beyond its supply."
                },
                {
                    id: "d38m36",
                    text: "Two positive quantities are in the ratio 3:5 and their difference is 28. What is the smaller quantity?",
                    options: [
                        { key: "a", text: "28" },
                        { key: "b", text: "42" },
                        { key: "c", text: "70" },
                        { key: "d", text: "112" }
                    ],
                    answer: "b",
                    explanation: "Write the quantities as $3x$ and $5x$. Their difference is $2x=28$, so one ratio part is 14. The smaller quantity is $3(14)=42$, while the larger is 70; their difference is indeed 28."
                },
                {
                    id: "d38m37",
                    text: "A book's price is first increased by 20% and the resulting price is then reduced by 20%. What is the net change relative to the original price?",
                    options: [
                        { key: "a", text: "No change" },
                        { key: "b", text: "4% increase" },
                        { key: "c", text: "8% decrease" },
                        { key: "d", text: "4% decrease" }
                    ],
                    answer: "d",
                    explanation: "Take an original price of 100. After the increase it is 120, and a 20% reduction of 120 gives $120(0.80)=96$. The final price is four below the original hundred, a 4% decrease. Successive percentages use different bases."
                },
                {
                    id: "d38m38",
                    text: "Worker A can complete a job alone in 12 days and worker B alone in 18 days. If their constant work rates add, how long do they take working together?",
                    options: [
                        { key: "a", text: "6 days" },
                        { key: "b", text: "9 days" },
                        { key: "c", text: "7.2 days" },
                        { key: "d", text: "15 days" }
                    ],
                    answer: "c",
                    explanation: "Their daily work fractions add to $1/12+1/18=3/36+2/36=5/36$. The time for one whole job is the reciprocal, $36/5=7.2$ days. Adding or averaging the individual completion times would not add their work rates."
                },
                {
                    id: "d38m39",
                    text: "A vehicle travels one half of a journey's distance at 60 km/h and the other half at 40 km/h, without stopping. What is its average speed over the whole journey?",
                    options: [
                        { key: "a", text: "50 km/h" },
                        { key: "b", text: "48 km/h" },
                        { key: "c", text: "45 km/h" },
                        { key: "d", text: "52 km/h" }
                    ],
                    answer: "b",
                    explanation: "Let each half be 120 km. The times are $120/60=2$ h and $120/40=3$ h, so the average speed is total distance over total time: $240/5=48$ km/h. The arithmetic mean of speeds applies to equal times, not equal distances."
                },
                {
                    id: "d38m40",
                    text: "A student's quiz results are shown below. What percentage of all attempted questions was answered correctly, to two decimal places?<svg class='q-fig' viewBox='0 0 310 170' width='310' height='170' role='img' aria-label='Table: Quiz I, 12 correct of 20 attempted; Quiz II, 21 correct of 30 attempted; Quiz III, 20 correct of 25 attempted'><g fill='none' stroke='currentColor' stroke-width='1.2'><path d='M8 8H302V160H8ZM8 46H302M8 84H302M8 122H302M83 8V160M180 8V160'/></g><g fill='currentColor' font-family='sans-serif' font-size='15' text-anchor='middle'><text x='45' y='33'>Quiz</text><text x='132' y='33'>Correct</text><text x='241' y='33'>Attempted</text><text x='45' y='71'>I</text><text x='132' y='71'>12</text><text x='241' y='71'>20</text><text x='45' y='109'>II</text><text x='132' y='109'>21</text><text x='241' y='109'>30</text><text x='45' y='147'>III</text><text x='132' y='147'>20</text><text x='241' y='147'>25</text></g></svg>",
                    options: [
                        { key: "a", text: "70.00%" },
                        { key: "b", text: "72.00%" },
                        { key: "c", text: "68.00%" },
                        { key: "d", text: "70.67%" }
                    ],
                    answer: "d",
                    explanation: "Correct answers total $12+21+20=53$, and attempts total $20+30+25=75$. Overall accuracy is $(53/75)\\times100=70.666\\ldots\\%$, or 70.67%. The three quiz percentages must not be averaged without weighting for their different numbers of attempts."
                },
                {
                    id: "d38m41",
                    text: "Five candidates stand in a row. Asha is at the left end and Esha at the right end. Bina is immediately to Asha's right. Dipak is somewhere between Bina and Chetan. Who occupies the middle position?",
                    options: [
                        { key: "a", text: "Bina" },
                        { key: "b", text: "Chetan" },
                        { key: "c", text: "Dipak" },
                        { key: "d", text: "Esha" }
                    ],
                    answer: "c",
                    explanation: "Positions 1, 2 and 5 must be Asha, Bina and Esha. Only positions 3 and 4 remain for Dipak and Chetan. To place Dipak between Bina and Chetan, the order must be Asha, Bina, Dipak, Chetan, Esha. Dipak is third, the middle position."
                },
                {
                    id: "d38m42",
                    text: "Treat the following statements as true: All orchids are flowers. No flower is a mineral. Which conclusion follows necessarily?",
                    options: [
                        { key: "a", text: "No orchid is a mineral." },
                        { key: "b", text: "All minerals are orchids." },
                        { key: "c", text: "Some flowers are minerals." },
                        { key: "d", text: "All flowers are orchids." }
                    ],
                    answer: "a",
                    explanation: "The orchid set is wholly inside the flower set, and the flower set has no overlap with minerals. Therefore orchids cannot overlap with minerals either. 'All orchids are flowers' cannot be reversed to claim that all flowers are orchids."
                },
                {
                    id: "d38m43",
                    text: "Statements: All laboratory technicians are trained workers. Some trained workers are researchers. Conclusions: I. Some laboratory technicians are researchers. II. No laboratory technician is a researcher. Which conclusion follows necessarily from the statements alone?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "d",
                    explanation: "The trained workers who are researchers may include technicians, but they need not. The premises allow both overlap and no overlap between technicians and researchers. Consequently neither the existence of such overlap nor its absence is a necessary conclusion."
                },
                {
                    id: "d38m44",
                    text: "A researcher has chosen a problem and will test a hypothesis experimentally. Arrange these steps in their logical working order: 1. Interpret the experimental results; 2. Collect measurements in the experiment; 3. Form the hypothesis to be tested; 4. Design an experiment to test it.",
                    options: [
                        { key: "a", text: "3, 2, 4, 1" },
                        { key: "b", text: "4, 3, 1, 2" },
                        { key: "c", text: "3, 4, 2, 1" },
                        { key: "d", text: "2, 1, 4, 3" }
                    ],
                    answer: "c",
                    explanation: "First form the hypothesis, then design the experiment that can test it. Next collect measurements using that experiment, and finally interpret those results. Thus the stated experimental workflow is 3, 4, 2, 1; the problem has already been selected."
                },
                {
                    id: "d38m45",
                    text: "Exactly one of three boxes contains a token. The red box's label says, 'The token is in this red box.' The blue box's label says, 'The token is not in this blue box.' The green box's label says, 'The token is in the red box.' Exactly one label is true. Which box contains the token?",
                    options: [
                        { key: "a", text: "Green" },
                        { key: "b", text: "Red" },
                        { key: "c", text: "Blue" },
                        { key: "d", text: "No location satisfies the condition." }
                    ],
                    answer: "a",
                    explanation: "If the token were in red, all three labels would be true. If it were in blue, all three would be false. If it is in green, only the blue label is true. The green location is therefore the unique one satisfying exactly one true label."
                },
                {
                    id: "d38m46",
                    text: "The arrow initially points northeast, as shown. Rotate it 90 degrees clockwise in the plane, then reflect it left-to-right across a vertical mirror line. In which direction does it finally point?<svg class='q-fig' viewBox='0 0 170 145' width='170' height='145' role='img' aria-label='Arrow points northeast, from lower left to upper right; north is upwards and east is rightwards'><g fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M42 112L114 40M86 40H114V68'/></g><g fill='currentColor' font-family='sans-serif' font-size='16' text-anchor='middle'><text x='85' y='20'>N</text><text x='151' y='83'>E</text></g></svg>",
                    options: [
                        { key: "a", text: "Northeast" },
                        { key: "b", text: "Southwest" },
                        { key: "c", text: "Northwest" },
                        { key: "d", text: "Southeast" }
                    ],
                    answer: "b",
                    explanation: "A clockwise quarter-turn takes northeast to southeast. Reflection across a vertical line reverses the east-west component while retaining the southward component, so southeast becomes southwest. Applying the transformations in the opposite order would give a different result."
                },
                {
                    id: "d38m47",
                    text: "The net shown is folded into a cube. Which face is opposite face E?<svg class='q-fig' viewBox='0 0 260 195' width='260' height='195' role='img' aria-label='Cube net: a horizontal row A, B, C, D, with E directly above B and F directly below B'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M30 72H230V122H30ZM80 72V122M130 72V122M180 72V122M80 72V22H130V72M80 122V172H130V122'/></g><g fill='currentColor' font-family='sans-serif' font-size='22' text-anchor='middle'><text x='55' y='105'>A</text><text x='105' y='105'>B</text><text x='155' y='105'>C</text><text x='205' y='105'>D</text><text x='105' y='55'>E</text><text x='105' y='155'>F</text></g></svg>",
                    options: [
                        { key: "a", text: "A" },
                        { key: "b", text: "D" },
                        { key: "c", text: "F" },
                        { key: "d", text: "C" }
                    ],
                    answer: "c",
                    explanation: "Hold B as the front face. A and C fold to its left and right, while E and F fold to the top and bottom. D becomes the back face. The opposite pairs are B-D, A-C and E-F, so F is opposite E regardless of the cube's later orientation."
                },
                {
                    id: "d38m48",
                    text: "All six faces of a large cube are painted. It is then divided into 64 equal small cubes by cutting each edge into four equal parts. How many small cubes have exactly two painted faces?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "24" },
                        { key: "c", text: "32" },
                        { key: "d", text: "48" }
                    ],
                    answer: "b",
                    explanation: "Cubes with exactly two painted faces lie along the original edges, excluding corners. Each of the 12 edges contributes $4-2=2$ such cubes, giving $12(2)=24$. The eight corner cubes have three painted faces and must not be included."
                },
                {
                    id: "d38m49",
                    text: "A square sheet is folded in half, and the resulting packet is folded in half twice more. Each fold doubles the number of overlapping layers. One small hole is punched through all layers strictly inside the final packet, away from every edge and crease. How many separate holes appear when the sheet is completely unfolded?",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "16" }
                    ],
                    answer: "a",
                    explanation: "There are three folds in total. The successive layer counts are 2, 4 and 8. An interior punch passes through all eight layers, producing eight distinct holes on unfolding. Avoiding edges and creases ensures that separate openings do not merge."
                },
                {
                    id: "d38m50",
                    text: "The shaded quarter moves by the same rotation at each step. Which figure comes next?<svg class='q-fig' viewBox='0 0 290 90' width='290' height='90' role='img' aria-label='Three divided squares with shaded quarters in order: upper left, upper right, lower right'><g fill='currentColor'><path d='M10 15H40V45H10Z'/><path d='M140 15H170V45H140Z'/><path d='M240 45H270V75H240Z'/></g><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M10 15H70V75H10ZM40 15V75M10 45H70M110 15H170V75H110ZM140 15V75M110 45H170M210 15H270V75H210ZM240 15V75M210 45H270'/></g></svg>",
                    options: [
                        { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Upper-right quarter shaded'><path d='M35 5H65V35H35Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/></svg>" },
                        { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='All four quarters shaded'><path d='M5 5H65V65H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/></svg>" },
                        { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Upper-left quarter shaded'><path d='M5 5H35V35H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/></svg>" },
                        { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Lower-left quarter shaded'><path d='M5 35H35V65H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/></svg>" }
                    ],
                    answer: "d",
                    explanation: "The shaded quarter turns 90 degrees clockwise at each step: upper left, upper right, lower right, then lower left. Its size does not change, so a fully shaded square cannot continue the series. The lower-left-quarter figure is the next term."
                }
            ]
        }
    ]
};

const DAY38_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Mole Concept: Amounts and Particle Counts", ids: ["d38c1", "d38c2", "d38c3", "d38c4", "d38c5"] },
            { name: "Mole Concept: Ions, Gas Amounts and Stoichiometric Laws", ids: ["d38c6", "d38c7", "d38c8", "d38c9", "d38c10"] },
            { name: "Mole Concept: Percentage Composition and Formulae", ids: ["d38c11", "d38c12", "d38c13", "d38c14", "d38c15"] },
            { name: "Stoichiometry: Formula Determination and Reaction Amounts", ids: ["d38c16", "d38c17", "d38c18", "d38c19", "d38c20"] },
            { name: "Stoichiometry: Limiting Reactants and Excess", ids: ["d38c21", "d38c22", "d38c23", "d38c24", "d38c25"] },
            { name: "Stoichiometry: Purity, Percentage Yield and Mixtures", ids: ["d38c26", "d38c27", "d38c28", "d38c29", "d38c30"] }
        ] }
    ] },
    { subject: "MAT", accent: "cyan", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Verbal Reasoning: Analogies, Coding and Word Relationships", ids: ["d38m31", "d38m32", "d38m33", "d38m34", "d38m35"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Numerical Reasoning: Ratios, Rates and Data Interpretation", ids: ["d38m36", "d38m37", "d38m38", "d38m39", "d38m40"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Logical Sequencing: Deductions and Ordering", ids: ["d38m41", "d38m42", "d38m43", "d38m44", "d38m45"] }
        ] },
        { topic: "Spatial Relation / Abstract Reasoning", subs: [
            { name: "Spatial and Abstract Reasoning", ids: ["d38m46", "d38m47", "d38m48", "d38m49", "d38m50"] }
        ] }
    ] }
];
DAY38.syllabus = DAY38_SYLLABUS;

DAY38.previousVersion = { ...DAY38 };
DAY38.subtitle = "Mole Concept and Advanced MAT";
DAY38.chapters = [DAY38.chapters[0], {
    ...DAY38.chapters[1],
    name: "MAT - Advanced Reasoning",
    blurb: "Twenty multi-step problems: five each in verbal, numerical, logical, and spatial reasoning.",
    questions: [
        {
            id: "d38m131",
            revisionOf: { day: 38, id: "d38m31" },
            text: "A code first moves letters in odd-numbered positions two places forward and letters in even-numbered positions one place backward, then reverses the resulting string. Alphabet positions wrap after Z and before A. Thus PLANT becomes VMCKR. How is GRASP coded?",
            options: [
                { key: "a", text: "RRCQH" },
                { key: "b", text: "RQCRI" },
                { key: "c", text: "RRCQI" },
                { key: "d", text: "QRCRI" }
            ],
            answer: "c",
            explanation: "Apply the alternating shifts to the original positions: G becomes I, R becomes Q, A becomes C, S becomes R and P becomes R. This gives IQCRR. Reversing the string gives RRCQI. Applying the same shift to every letter or omitting the final reversal produces a different code."
        },
        {
            id: "d38m132",
            revisionOf: { day: 38, id: "d38m32" },
            text: "Each word has one distinct, fixed code, but the code order in a statement may differ from the word order. 'ka lu mi' means 'quiet green room'; 'mi so pa' means 'room near garden'; 'lu pa te' means 'green garden gate'; and 'so ne te' means 'near wide gate'. What are the codes for quiet, wide and garden, in that order?",
            options: [
                { key: "a", text: "ka ne pa" },
                { key: "b", text: "ne ka lu" },
                { key: "c", text: "ka so pa" },
                { key: "d", text: "ka ne te" }
            ],
            answer: "a",
            explanation: "The first and second statements identify mi as room; the first and third identify lu as green, leaving ka as quiet. The second and third identify pa as garden, leaving so as near and te as gate. In the fourth statement, ne must therefore mean wide. The requested order is ka ne pa."
        },
        {
            id: "d38m133",
            revisionOf: { day: 38, id: "d38m33" },
            text: "Complete the letter-pair series: AZ, CX, FU, JQ, OL, ...",
            options: [
                { key: "a", text: "UG" },
                { key: "b", text: "VF" },
                { key: "c", text: "UE" },
                { key: "d", text: "UF" }
            ],
            answer: "d",
            explanation: "The first letters occupy positions 1, 3, 6, 10 and 15, increasing by 2, 3, 4 and 5. The next increase is 6, giving position 21, U. The second letters occupy 26, 24, 21, 17 and 12, decreasing by the same successive amounts. Subtracting 6 gives position 6, F. Hence the pair is UF."
        },
        {
            id: "d38m134",
            revisionOf: { day: 38, id: "d38m34" },
            text: "Arun and Bina are full siblings. Arun is a man and Bina is a woman. Chandra is Arun's father, Deepa is Chandra's mother, and Esha is Bina's daughter. How is Deepa related to Esha?",
            options: [
                { key: "a", text: "Grandmother" },
                { key: "b", text: "Great-grandmother" },
                { key: "c", text: "Maternal aunt" },
                { key: "d", text: "Mother" }
            ],
            answer: "b",
            explanation: "Full siblings share both parents, so Chandra is also Bina's father. The generational chain is Deepa, her son Chandra, his daughter Bina, and Bina's daughter Esha. Deepa is three generations above Esha and is therefore her great-grandmother, not her grandmother."
        },
        {
            id: "d38m135",
            revisionOf: { day: 38, id: "d38m35" },
            text: "In a row, Rima is 20th from the left and Suman is 24th from the right. They exchange places, after which Rima is 35th from the left. Before the exchange, Mina stood nine positions to Rima's right and Mina does not move. What is Mina's rank from the right?",
            options: [
                { key: "a", text: "30th" },
                { key: "b", text: "29th" },
                { key: "c", text: "34th" },
                { key: "d", text: "35th" }
            ],
            answer: "a",
            explanation: "Suman's original position was 35th from the left and 24th from the right. The row therefore has $35+24-1=58$ people. Mina's unchanged left rank is $20+9=29$. Her right rank is $58-29+1=30$. The exchange changes Rima's rank, not Mina's."
        },
        {
            id: "d38m136",
            revisionOf: { day: 38, id: "d38m36" },
            text: "A vessel contains 40 L of milk and water in the ratio 7:3. A 10 L portion of the well-mixed liquid is removed and replaced with 10 L of water. After stirring thoroughly, the same removal-and-replacement operation is performed once more. What is the final milk-to-water ratio?",
            options: [
                { key: "a", text: "49:51" },
                { key: "b", text: "63:97" },
                { key: "c", text: "21:19" },
                { key: "d", text: "7:9" }
            ],
            answer: "b",
            explanation: "Initially there are $40(7/10)=28$ L of milk. Each removal retains three quarters of the milk present, so after two operations the milk volume is $28(3/4)^2=15.75$ L. Total volume remains 40 L, leaving 24.25 L water. The ratio $15.75:24.25$ simplifies to $63:97$."
        },
        {
            id: "d38m137",
            revisionOf: { day: 38, id: "d38m37" },
            text: "The price per kilogram of rice falls by 25%, while a household increases its rice budget by 20%. However, 10% of the newly purchased rice is unusable; none of its previous purchase was unusable. Relative to the previous purchase, by what percentage does the usable quantity increase?",
            options: [
                { key: "a", text: "60%" },
                { key: "b", text: "20%" },
                { key: "c", text: "50%" },
                { key: "d", text: "44%" }
            ],
            answer: "d",
            explanation: "The new budget is 1.20 times the old budget and the new unit price is 0.75 times the old price. Purchased quantity is therefore multiplied by $1.20/0.75=1.60$. Only 90% is usable, giving a usable-quantity factor of $1.60(0.90)=1.44$. The increase is 44%; 60% ignores the unusable portion."
        },
        {
            id: "d38m138",
            revisionOf: { day: 38, id: "d38m38" },
            text: "Inlet A fills a tank in 12 hours, inlet B in 18 hours, and an outlet empties a full tank in 36 hours. All rates are constant. All three operate together for the first 3 hours from an empty tank. Then A is closed, while B and the outlet remain open. How many hours after the start does the tank become full?",
            options: [
                { key: "a", text: "24 hours" },
                { key: "b", text: "9 hours" },
                { key: "c", text: "27 hours" },
                { key: "d", text: "15 hours" }
            ],
            answer: "c",
            explanation: "Initially the net rate is $1/12+1/18-1/36=1/9$ tank per hour, so one third fills in 3 hours. After A closes, the net rate is $1/18-1/36=1/36$. Filling the remaining two thirds takes $(2/3)36=24$ more hours. Total elapsed time is $3+24=27$ hours."
        },
        {
            id: "d38m139",
            revisionOf: { day: 38, id: "d38m39" },
            text: "At constant speed, a train passes a stationary pole completely in 12 seconds and a 180 m platform completely in 24 seconds. A second train, 120 m long, approaches it on a parallel track at 36 km/h. How long do they take to pass each other completely, measured from when their fronts meet?",
            options: [
                { key: "a", text: "7.2 seconds" },
                { key: "b", text: "12 seconds" },
                { key: "c", text: "10 seconds" },
                { key: "d", text: "20 seconds" }
            ],
            answer: "b",
            explanation: "The extra 12 seconds needed for the platform corresponds to its 180 m length, so the first train's speed is $180/12=15$ m/s. Its length is $15(12)=180$ m. The other speed is 10 m/s, making the opposite-direction relative speed 25 m/s. Combined length is 300 m, so passing takes $300/25=12$ seconds."
        },
        {
            id: "d38m140",
            revisionOf: { day: 38, id: "d38m40" },
            text: "Each correct answer earns 1 mark and each incorrect answer loses 0.25 mark. Every attempted question has one recorded answer. Using the table, find the student's combined accuracy across the three quizzes, to two decimal places.<svg class='q-fig' viewBox='0 0 310 170' width='310' height='170' role='img' aria-label='Table: Quiz I, 20 attempted and 10.00 net marks; Quiz II, 30 attempted and 18.75 net marks; Quiz III, 25 attempted and 18.75 net marks'><g fill='none' stroke='currentColor' stroke-width='1.2'><path d='M8 8H302V160H8ZM8 46H302M8 84H302M8 122H302M83 8V160M190 8V160'/></g><g fill='currentColor' font-family='sans-serif' font-size='15' text-anchor='middle'><text x='45' y='33'>Quiz</text><text x='136' y='33'>Attempted</text><text x='246' y='33'>Net marks</text><text x='45' y='71'>I</text><text x='136' y='71'>20</text><text x='246' y='71'>10.00</text><text x='45' y='109'>II</text><text x='136' y='109'>30</text><text x='246' y='109'>18.75</text><text x='45' y='147'>III</text><text x='136' y='147'>25</text><text x='246' y='147'>18.75</text></g></svg>",
            options: [
                { key: "a", text: "70.00%" },
                { key: "b", text: "72.00%" },
                { key: "c", text: "68.00%" },
                { key: "d", text: "70.67%" }
            ],
            answer: "d",
            explanation: "For $C$ correct answers among $A$ attempts, the net score is $S=C-0.25(A-C)$. Hence $C=(S+0.25A)/1.25$. The three correct counts are 12, 21 and 20. Combined accuracy is $53/75$ expressed as a percentage, or 70.67%. Averaging quiz percentages without weighting would give the wrong result."
        },
        {
            id: "d38m141",
            revisionOf: { day: 38, id: "d38m41" },
            text: "Asha, Bina, Chetan, Dipak, Esha, Farah, Gita and Hina occupy eight equally spaced seats around a circular table, all facing the centre. Asha is opposite Esha. Bina is second to Dipak's right. Chetan is immediately to Bina's left. Gita is opposite Chetan, and Farah is immediately to Gita's right. Dipak is adjacent to Esha. Who is third to Farah's left?",
            options: [
                { key: "a", text: "Hina" },
                { key: "b", text: "Esha" },
                { key: "c", text: "Asha" },
                { key: "d", text: "Bina" }
            ],
            answer: "c",
            explanation: "Fix Asha at the top to remove rotational duplicates. For people facing the centre, left is clockwise. The clues give the unique clockwise order Asha, Bina, Chetan, Dipak, Esha, Farah, Gita, Hina. Dipak's adjacency to Esha rules out the alternative placement of the linked group. Three places left of Farah are Gita, Hina, then Asha."
        },
        {
            id: "d38m142",
            revisionOf: { day: 38, id: "d38m42" },
            text: "Use only these statements: All surgeons are doctors. No doctor is a pilot. Some researchers are surgeons. Conclusions: I. Some researchers are not pilots. II. No pilot is a surgeon. III. Some doctors are not researchers. Which conclusions follow necessarily?",
            options: [
                { key: "a", text: "Only I and II" },
                { key: "b", text: "Only I and III" },
                { key: "c", text: "Only II and III" },
                { key: "d", text: "All three" }
            ],
            answer: "a",
            explanation: "The researchers who are surgeons must be doctors and therefore cannot be pilots, proving I. Since every surgeon is a doctor and doctors exclude pilots, II also follows. III is not guaranteed: all doctors could be researchers without contradicting any premise. The statements do not establish a doctor outside the researcher set."
        },
        {
            id: "d38m143",
            revisionOf: { day: 38, id: "d38m43" },
            text: "A candidate is shortlisted if and only if the candidate passed the written test and either holds a valid permit or passed the practical test. Everyone who passed the practical test completed induction. Nira was shortlisted but did not complete induction. What must be true?",
            options: [
                { key: "a", text: "She failed the written test." },
                { key: "b", text: "She passed the practical test." },
                { key: "c", text: "She holds a permit, but her written-test result cannot be inferred." },
                { key: "d", text: "She passed the written test and holds a valid permit." }
            ],
            answer: "d",
            explanation: "Not completing induction rules out passing the practical test, by the contrapositive of the second rule. Being shortlisted still requires passing the written test and meeting at least one of the permit-or-practical conditions. Since practical success is ruled out, Nira must hold a valid permit as well as have passed the written test."
        },
        {
            id: "d38m144",
            revisionOf: { day: 38, id: "d38m44" },
            text: "Six presentations P, Q, R, S, T and U occupy consecutive slots, one presentation per slot. U is last. Exactly two presentations occur between R and T, with R earlier. P is earlier than R, and Q is immediately before S. Which presentation is third?",
            options: [
                { key: "a", text: "R" },
                { key: "b", text: "S" },
                { key: "c", text: "Q" },
                { key: "d", text: "T" }
            ],
            answer: "c",
            explanation: "T is three slots after R. R cannot be first because P must precede it; R cannot be third because that would place T in the last slot, occupied by U. Therefore R is second and T fifth. P is first, leaving adjacent slots three and four for Q and S. The unique order is P, R, Q, S, T, U."
        },
        {
            id: "d38m145",
            revisionOf: { day: 38, id: "d38m45" },
            text: "Exactly one of four boxes contains a token. Red's label says, 'The token is in blue or black.' Blue's label says, 'The token is not in green.' Green's label says, 'The token is not in black.' Black's label says, 'The token is in red.' Exactly two labels are true. Which box contains the token?",
            options: [
                { key: "a", text: "Black" },
                { key: "b", text: "Red" },
                { key: "c", text: "Blue" },
                { key: "d", text: "Green" }
            ],
            answer: "a",
            explanation: "Test each possible location against all four labels. A token in red makes three labels true; blue also makes three true; green makes only one true. A token in black makes the red and blue labels true, and the green and black labels false. Thus black is the only location giving exactly two true labels."
        },
        {
            id: "d38m146",
            revisionOf: { day: 38, id: "d38m46" },
            text: "The square card shows an upward arrow and a dot near its lower-left corner. The whole card is rotated 90 degrees clockwise, reflected left-to-right across a vertical line, then rotated 180 degrees. Which description gives the final arrow and dot?<svg class='q-fig' viewBox='0 0 170 155' width='170' height='155' role='img' aria-label='Square card with an upward-pointing arrow through its centre and a dot near the lower-left corner'><g fill='none' stroke='currentColor' stroke-width='2'><path d='M30 25H130V125H30Z'/><path d='M80 108V44M66 58L80 44L94 58' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></g><circle cx='45' cy='110' r='5' fill='currentColor'/></svg>",
            options: [
                { key: "a", text: "Arrow right; dot upper right" },
                { key: "b", text: "Arrow right; dot lower left" },
                { key: "c", text: "Arrow left; dot lower right" },
                { key: "d", text: "Arrow left; dot upper left" }
            ],
            answer: "b",
            explanation: "Track both features through every operation. The arrow changes from up to right, then left, then right. The dot moves from lower left to upper left, then upper right, then lower left. A choice with the correct arrow but the wrong dot has applied only part of the transformation sequence."
        },
        {
            id: "d38m147",
            revisionOf: { day: 38, id: "d38m47" },
            text: "The net is folded into a cube with the letters outside. The cube is then oriented so that C is on top and E faces you. Which letter is on the right face?<svg class='q-fig' viewBox='0 0 260 195' width='260' height='195' role='img' aria-label='Cube net: horizontal row A, B, C, D, with E directly above B and F directly below B'><g fill='none' stroke='currentColor' stroke-width='1.8'><path d='M30 72H230V122H30ZM80 72V122M130 72V122M180 72V122M80 72V22H130V72M80 122V172H130V122'/></g><g fill='currentColor' font-family='sans-serif' font-size='22' text-anchor='middle'><text x='55' y='105'>A</text><text x='105' y='105'>B</text><text x='155' y='105'>C</text><text x='205' y='105'>D</text><text x='105' y='55'>E</text><text x='105' y='155'>F</text></g></svg>",
            options: [
                { key: "a", text: "D" },
                { key: "b", text: "A" },
                { key: "c", text: "B" },
                { key: "d", text: "F" }
            ],
            answer: "c",
            explanation: "With B initially in front, the folded net has C right, A left, E top, F bottom and D back. Turn the cube so E comes to the front; B is then below and C remains right. Keeping E in front, rotate so C moves to the top. B moves from below to the right. Opposite-face pairs alone do not determine this handed orientation."
        },
        {
            id: "d38m148",
            revisionOf: { day: 38, id: "d38m48" },
            text: "One pair of opposite faces of a large cube is painted red and another pair of opposite faces blue. Its remaining two faces are unpainted. The cube is cut into 125 identical cubes in a regular cubical grid. How many small cubes have exactly two painted faces, one red and one blue?",
            options: [
                { key: "a", text: "12" },
                { key: "b", text: "20" },
                { key: "c", text: "24" },
                { key: "d", text: "36" }
            ],
            answer: "b",
            explanation: "Since $125=5^3$, there are five small cubes along each edge. A red face meets a blue face along four parallel edges. Every one of the five cubes on each such edge qualifies, including its endpoints: the third outer face at an endpoint is unpainted. Hence the count is $4(5)=20$, not the usual all-six-faces-painted edge formula."
        },
        {
            id: "d38m149",
            revisionOf: { day: 38, id: "d38m49" },
            text: "A square sheet has side 16 cm, with its lower-left corner at (0, 0), horizontal coordinates increasing rightwards and vertical coordinates upwards. Fold the left half onto the right along x = 8, then the bottom half onto the top along y = 8. A tiny hole is punched at (11, 13) through all layers of the final packet, using the original coordinate system. After unfolding, what is the greatest distance between two hole centres?",
            options: [
                { key: "a", text: "$2\\sqrt{34}$ cm" },
                { key: "b", text: "$2\\sqrt{26}$ cm" },
                { key: "c", text: "$4\\sqrt{17}$ cm" },
                { key: "d", text: "$10$ cm" }
            ],
            answer: "a",
            explanation: "Unfolding reflects the hole across both crease lines. Its possible horizontal coordinates are 11 and $16-11=5$, and vertical coordinates are 13 and $16-13=3$. The four holes form a rectangle of side lengths 6 cm and 10 cm. The greatest separation is a diagonal: $\\sqrt{6^2+10^2}=2\\sqrt{34}$ cm."
        },
        {
            id: "d38m150",
            revisionOf: { day: 38, id: "d38m50" },
            text: "The shaded quarter and the small outlined dot follow separate regular cycles. Which figure continues both cycles?<svg class='q-fig' viewBox='0 0 290 90' width='290' height='90' role='img' aria-label='Three divided squares: upper-left quarter shaded with dot lower right; upper-right quarter shaded with dot upper right; lower-right quarter shaded with dot upper left'><g fill='currentColor'><path d='M10 15H40V45H10Z'/><path d='M140 15H170V45H140Z'/><path d='M240 45H270V75H240Z'/></g><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M10 15H70V75H10ZM40 15V75M10 45H70M110 15H170V75H110ZM140 15V75M110 45H170M210 15H270V75H210ZM240 15V75M210 45H270'/></g><g fill='white' stroke='currentColor' stroke-width='1.6'><circle cx='55' cy='60' r='4'/><circle cx='155' cy='30' r='4'/><circle cx='225' cy='30' r='4'/></g></svg>",
            options: [
                { key: "a", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Lower-left quarter shaded; dot upper right'><path d='M5 35H35V65H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='55' cy='15' r='4' fill='white' stroke='currentColor' stroke-width='1.6'/></svg>" },
                { key: "b", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Upper-left quarter shaded; dot lower left'><path d='M5 5H35V35H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='15' cy='55' r='4' fill='white' stroke='currentColor' stroke-width='1.6'/></svg>" },
                { key: "c", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Lower-left quarter shaded; dot upper left'><path d='M5 35H35V65H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='15' cy='15' r='4' fill='white' stroke='currentColor' stroke-width='1.6'/></svg>" },
                { key: "d", text: "<svg class='opt-fig' viewBox='0 0 70 70' width='70' height='70' role='img' aria-label='Lower-left quarter shaded; dot lower left'><path d='M5 35H35V65H5Z' fill='currentColor'/><path d='M5 5H65V65H5ZM35 5V65M5 35H65' fill='none' stroke='currentColor' stroke-width='1.6'/><circle cx='15' cy='55' r='4' fill='white' stroke='currentColor' stroke-width='1.6'/></svg>" }
            ],
            answer: "d",
            explanation: "The shaded quarter travels clockwise: upper left, upper right, lower right, then lower left. Independently, the dot travels anticlockwise: lower right, upper right, upper left, then lower left. The next figure therefore has both features in the lower-left quarter. A figure matching only the shading cycle is insufficient."
        }
    ]
}];

const DAY38_MAT_REPLACEMENTS = new Map(DAY38.chapters[1].questions.map(question => [question.revisionOf.id, question.id]));
DAY38.syllabus = DAY38_SYLLABUS.map(subject => subject.subject !== "MAT" ? subject : {
    ...subject,
    topics: subject.topics.map(topic => ({
        ...topic,
        subs: topic.subs.map(sub => ({ ...sub, ids: sub.ids.map(id => DAY38_MAT_REPLACEMENTS.get(id)) }))
    }))
});