/* ============================================================
   CEE Preparation Dashboard — Question Bank
   Student: Prakriti Subedi
   Day 1 · 4 chapters × 10 standard CEE MCQs (single correct)
   LaTeX is rendered with MathJax. Each item:
   { id, text, options:[{key,text}], answer, explanation }
   ============================================================ */

const DAY1 = {
    day: 1,
    title: "Day 1",
    subtitle: "Foundation Mixed Test",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) GRAVITATION  (Physics)
           Orbital & escape velocity, variation of g, Kepler's laws
        ---------------------------------------------------------- */
        {
            id: "gravitation",
            name: "Gravitation",
            subject: "Physics",
            accent: "blue",
            blurb: "Orbital & escape velocity · variation of g · Kepler's laws",
            questions: [
                {
                    id: "grav1",
                    text: "The escape velocity from the surface of the Earth is $v_e$. The escape velocity from the surface of another planet having twice the radius of the Earth but the same mean density is:",
                    options: [
                        { key: "a", text: "$0.5\\,v_e$" },
                        { key: "b", text: "$v_e$" },
                        { key: "c", text: "$2\\,v_e$" },
                        { key: "d", text: "$4\\,v_e$" }
                    ],
                    answer: "c",
                    explanation: "$v_e=\\sqrt{\\dfrac{2GM}{R}}=R\\sqrt{\\dfrac{8\\pi G\\rho}{3}}$. For the same density $v_e\\propto R$, so doubling the radius doubles the escape velocity to $2v_e$."
                },
                {
                    id: "grav2",
                    text: "The orbital velocity of a satellite revolving very close to the surface of the Earth is (take $g=9.8\\,\\mathrm{m/s^2}$, $R=6.4\\times10^{6}\\,$m):",
                    options: [
                        { key: "a", text: "$5.6\\,$km/s" },
                        { key: "b", text: "$7.9\\,$km/s" },
                        { key: "c", text: "$11.2\\,$km/s" },
                        { key: "d", text: "$9.8\\,$km/s" }
                    ],
                    answer: "b",
                    explanation: "$v_o=\\sqrt{gR}=\\sqrt{9.8\\times6.4\\times10^{6}}\\approx7.9\\,$km/s."
                },
                {
                    id: "grav3",
                    text: "The escape velocity $v_e$ and the orbital velocity $v_o$ of a satellite orbiting close to the Earth's surface are related as:",
                    options: [
                        { key: "a", text: "$v_e=v_o$" },
                        { key: "b", text: "$v_e=\\sqrt{2}\\,v_o$" },
                        { key: "c", text: "$v_e=2\\,v_o$" },
                        { key: "d", text: "$v_o=\\sqrt{2}\\,v_e$" }
                    ],
                    answer: "b",
                    explanation: "$v_o=\\sqrt{gR}$ and $v_e=\\sqrt{2gR}$, hence $v_e=\\sqrt{2}\\,v_o\\approx1.414\\,v_o$."
                },
                {
                    id: "grav4",
                    text: "The acceleration due to gravity at a depth equal to half the radius of the Earth, compared with its surface value $g$, is:",
                    options: [
                        { key: "a", text: "$g/4$" },
                        { key: "b", text: "$g/2$" },
                        { key: "c", text: "$2g$" },
                        { key: "d", text: "$3g/4$" }
                    ],
                    answer: "b",
                    explanation: "$g_d=g\\left(1-\\dfrac{d}{R}\\right)$. With $d=R/2$, $g_d=g\\left(1-\\tfrac12\\right)=\\dfrac{g}{2}$."
                },
                {
                    id: "grav5",
                    text: "At a height equal to the radius of the Earth above its surface, the acceleration due to gravity becomes:",
                    options: [
                        { key: "a", text: "$g/2$" },
                        { key: "b", text: "$g/3$" },
                        { key: "c", text: "$g/4$" },
                        { key: "d", text: "$g/9$" }
                    ],
                    answer: "c",
                    explanation: "$g_h=g\\dfrac{R^2}{(R+h)^2}$. With $h=R$, $g_h=g\\dfrac{R^2}{(2R)^2}=\\dfrac{g}{4}$."
                },
                {
                    id: "grav6",
                    text: "A planet revolves around the Sun in a circular orbit of radius $r$ with period $T$. If the orbital radius is increased to $4r$, the new period of revolution is:",
                    options: [
                        { key: "a", text: "$2T$" },
                        { key: "b", text: "$4T$" },
                        { key: "c", text: "$8T$" },
                        { key: "d", text: "$16T$" }
                    ],
                    answer: "c",
                    explanation: "Kepler's third law $T^2\\propto r^3$ gives $\\dfrac{T_2}{T_1}=\\left(\\dfrac{4r}{r}\\right)^{3/2}=8$, so $T_2=8T$."
                },
                {
                    id: "grav7",
                    text: "Kepler's second law (the law of areas) is a direct consequence of the conservation of:",
                    options: [
                        { key: "a", text: "Linear momentum" },
                        { key: "b", text: "Energy" },
                        { key: "c", text: "Angular momentum" },
                        { key: "d", text: "Mass" }
                    ],
                    answer: "c",
                    explanation: "The areal velocity $\\dfrac{dA}{dt}=\\dfrac{L}{2m}$ stays constant because the angular momentum $L$ is conserved under the central gravitational force."
                },
                {
                    id: "grav8",
                    text: "The escape velocity of a body from the Earth's surface does NOT depend on:",
                    options: [
                        { key: "a", text: "Mass of the Earth" },
                        { key: "b", text: "Radius of the Earth" },
                        { key: "c", text: "Mass of the body" },
                        { key: "d", text: "Gravitational constant" }
                    ],
                    answer: "c",
                    explanation: "$v_e=\\sqrt{\\dfrac{2GM}{R}}$ is independent of the mass of the projected body."
                },
                {
                    id: "grav9",
                    text: "The time period of a geostationary (geosynchronous) satellite of the Earth is:",
                    options: [
                        { key: "a", text: "1 hour" },
                        { key: "b", text: "12 hours" },
                        { key: "c", text: "24 hours" },
                        { key: "d", text: "365 days" }
                    ],
                    answer: "c",
                    explanation: "A geostationary satellite matches the Earth's rotation period of 24 hours, so it stays fixed above a point on the equator."
                },
                {
                    id: "grav10",
                    text: "An astronaut inside a satellite orbiting the Earth feels weightless because:",
                    options: [
                        { key: "a", text: "there is no gravity at that height" },
                        { key: "b", text: "the astronaut and satellite are in free fall with the same acceleration" },
                        { key: "c", text: "the Sun's pull balances the Earth's pull" },
                        { key: "d", text: "the satellite is beyond the atmosphere" }
                    ],
                    answer: "b",
                    explanation: "Gravity supplies the centripetal force, so both astronaut and satellite accelerate towards the Earth at the same rate and the apparent (normal) weight is zero."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) ELASTICITY  (Physics)
           Young's modulus, stress-strain, energy, Poisson's ratio
        ---------------------------------------------------------- */
        {
            id: "elasticity",
            name: "Elasticity",
            subject: "Physics",
            accent: "cyan",
            blurb: "Young's modulus · stress–strain · stored energy · Poisson's ratio",
            questions: [
                {
                    id: "elas1",
                    text: "The Young's modulus of a wire depends on:",
                    options: [
                        { key: "a", text: "the length of the wire" },
                        { key: "b", text: "the radius of the wire" },
                        { key: "c", text: "the material of the wire" },
                        { key: "d", text: "the applied load" }
                    ],
                    answer: "c",
                    explanation: "Young's modulus is a characteristic property of the material and is independent of the dimensions of the specimen."
                },
                {
                    id: "elas2",
                    text: "The work done in stretching a wire through a length $\\Delta L$ by a force $F$ (within the elastic limit) is:",
                    options: [
                        { key: "a", text: "$F\\,\\Delta L$" },
                        { key: "b", text: "$\\dfrac{1}{2}F\\,\\Delta L$" },
                        { key: "c", text: "$2F\\,\\Delta L$" },
                        { key: "d", text: "$\\dfrac{F}{\\Delta L}$" }
                    ],
                    answer: "b",
                    explanation: "The restoring force grows linearly from $0$ to $F$, so the stored elastic energy equals the average force times displacement: $\\dfrac12 F\\,\\Delta L$."
                },
                {
                    id: "elas3",
                    text: "The elastic potential energy stored per unit volume of a stretched wire is:",
                    options: [
                        { key: "a", text: "stress $\\times$ strain" },
                        { key: "b", text: "$\\dfrac{1}{2}\\times$ stress $\\times$ strain" },
                        { key: "c", text: "$\\dfrac{1}{2}\\times\\dfrac{\\text{stress}}{\\text{strain}}$" },
                        { key: "d", text: "$2\\times$ stress $\\times$ strain" }
                    ],
                    answer: "b",
                    explanation: "Energy density $u=\\dfrac12\\times\\text{stress}\\times\\text{strain}=\\dfrac{1}{2}\\dfrac{(\\text{stress})^2}{Y}$."
                },
                {
                    id: "elas4",
                    text: "The theoretical limiting values of Poisson's ratio are:",
                    options: [
                        { key: "a", text: "$0$ and $1$" },
                        { key: "b", text: "$-1$ and $0.5$" },
                        { key: "c", text: "$0$ and $0.5$" },
                        { key: "d", text: "$-1$ and $1$" }
                    ],
                    answer: "b",
                    explanation: "Thermodynamics restricts Poisson's ratio to $-1\\le\\sigma\\le0.5$; for most real materials it lies between 0.2 and 0.4."
                },
                {
                    id: "elas5",
                    text: "Poisson's ratio is defined as the ratio of:",
                    options: [
                        { key: "a", text: "longitudinal strain to lateral strain" },
                        { key: "b", text: "lateral strain to longitudinal strain" },
                        { key: "c", text: "stress to strain" },
                        { key: "d", text: "shear strain to longitudinal strain" }
                    ],
                    answer: "b",
                    explanation: "$\\sigma=\\dfrac{\\text{lateral strain}}{\\text{longitudinal strain}}$ within the elastic limit."
                },
                {
                    id: "elas6",
                    text: "The maximum stress up to which a body completely regains its original shape after the deforming force is removed is called the:",
                    options: [
                        { key: "a", text: "breaking stress" },
                        { key: "b", text: "yield point" },
                        { key: "c", text: "elastic limit" },
                        { key: "d", text: "plastic limit" }
                    ],
                    answer: "c",
                    explanation: "Up to the elastic limit the deformation is fully recoverable; beyond it permanent (plastic) deformation begins."
                },
                {
                    id: "elas7",
                    text: "The breaking stress of a wire depends only upon:",
                    options: [
                        { key: "a", text: "the length of the wire" },
                        { key: "b", text: "the area of cross-section of the wire" },
                        { key: "c", text: "the material of the wire" },
                        { key: "d", text: "the shape of the wire" }
                    ],
                    answer: "c",
                    explanation: "Breaking stress $=\\dfrac{\\text{breaking force}}{\\text{area}}$ is a constant for a given material, independent of the wire's length or thickness."
                },
                {
                    id: "elas8",
                    text: "A wire of length $1\\,$m and cross-sectional area $10^{-6}\\,\\mathrm{m^2}$ is stretched by $0.5\\,$mm under a force of $100\\,$N. Its Young's modulus is:",
                    options: [
                        { key: "a", text: "$1\\times10^{11}\\,\\mathrm{N/m^2}$" },
                        { key: "b", text: "$2\\times10^{11}\\,\\mathrm{N/m^2}$" },
                        { key: "c", text: "$2\\times10^{9}\\,\\mathrm{N/m^2}$" },
                        { key: "d", text: "$5\\times10^{10}\\,\\mathrm{N/m^2}$" }
                    ],
                    answer: "b",
                    explanation: "$Y=\\dfrac{FL}{A\\,\\Delta L}=\\dfrac{100\\times1}{10^{-6}\\times5\\times10^{-4}}=2\\times10^{11}\\,\\mathrm{N/m^2}$."
                },
                {
                    id: "elas9",
                    text: "Which of the following materials is the most elastic?",
                    options: [
                        { key: "a", text: "Rubber" },
                        { key: "b", text: "Copper" },
                        { key: "c", text: "Steel" },
                        { key: "d", text: "Glass" }
                    ],
                    answer: "c",
                    explanation: "Steel has the highest Young's modulus among these, so it resists deformation most strongly and is the most elastic."
                },
                {
                    id: "elas10",
                    text: "With a rise in temperature, the Young's modulus (elasticity) of a material generally:",
                    options: [
                        { key: "a", text: "increases" },
                        { key: "b", text: "decreases" },
                        { key: "c", text: "remains constant" },
                        { key: "d", text: "becomes zero" }
                    ],
                    answer: "b",
                    explanation: "Higher temperature weakens the interatomic forces, so the elasticity (Young's modulus) of a material usually decreases."
                }
            ]
        },

        /* ----------------------------------------------------------
           3) GENETIC MATERIALS  (Biology)
           DNA/RNA structure, replication, transcription, translation
        ---------------------------------------------------------- */
        {
            id: "genetics",
            name: "Genetic Materials",
            subject: "Botany",
            accent: "emerald",
            blurb: "DNA/RNA structure · Watson–Crick model · replication & enzymes",
            questions: [
                {
                    id: "gen1",
                    text: "The double-helix model of DNA was proposed in 1953 by:",
                    options: [
                        { key: "a", text: "Meselson and Stahl" },
                        { key: "b", text: "Watson and Crick" },
                        { key: "c", text: "Hershey and Chase" },
                        { key: "d", text: "Griffith and Avery" }
                    ],
                    answer: "b",
                    explanation: "James Watson and Francis Crick proposed the double-helical model of DNA in 1953, using Rosalind Franklin's X-ray diffraction data."
                },
                {
                    id: "gen2",
                    text: "In a DNA molecule, the number of hydrogen bonds between adenine and thymine is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "Adenine pairs with thymine through 2 hydrogen bonds, whereas guanine pairs with cytosine through 3 hydrogen bonds."
                },
                {
                    id: "gen3",
                    text: "According to Chargaff's rule, in a double-stranded DNA molecule:",
                    options: [
                        { key: "a", text: "A = G and T = C" },
                        { key: "b", text: "A = T and G = C" },
                        { key: "c", text: "A + T = G + C" },
                        { key: "d", text: "A = C and G = T" }
                    ],
                    answer: "b",
                    explanation: "Chargaff's rule states that adenine equals thymine (A = T) and guanine equals cytosine (G = C) in any double-stranded DNA."
                },
                {
                    id: "gen4",
                    text: "The pentose sugar present in a DNA molecule is:",
                    options: [
                        { key: "a", text: "Ribose" },
                        { key: "b", text: "Deoxyribose" },
                        { key: "c", text: "Glucose" },
                        { key: "d", text: "Fructose" }
                    ],
                    answer: "b",
                    explanation: "DNA contains 2′-deoxyribose, which lacks the oxygen at the 2′ carbon that ribose (found in RNA) carries."
                },
                {
                    id: "gen5",
                    text: "Which nitrogenous base is present in RNA but absent in DNA?",
                    options: [
                        { key: "a", text: "Adenine" },
                        { key: "b", text: "Guanine" },
                        { key: "c", text: "Thymine" },
                        { key: "d", text: "Uracil" }
                    ],
                    answer: "d",
                    explanation: "In RNA, uracil replaces thymine; thymine occurs only in DNA."
                },
                {
                    id: "gen6",
                    text: "Which of the following pairs are purine bases?",
                    options: [
                        { key: "a", text: "Adenine and Guanine" },
                        { key: "b", text: "Cytosine and Thymine" },
                        { key: "c", text: "Adenine and Thymine" },
                        { key: "d", text: "Guanine and Cytosine" }
                    ],
                    answer: "a",
                    explanation: "Purines (double-ring bases) are adenine and guanine; pyrimidines (single-ring) are cytosine, thymine and uracil."
                },
                {
                    id: "gen7",
                    text: "DNA replication is said to be semiconservative because:",
                    options: [
                        { key: "a", text: "both strands are newly synthesized" },
                        { key: "b", text: "each daughter DNA has one parental and one new strand" },
                        { key: "c", text: "only one strand is copied" },
                        { key: "d", text: "the entire molecule is conserved unchanged" }
                    ],
                    answer: "b",
                    explanation: "Shown by Meselson and Stahl, each daughter DNA retains one parental (old) strand and one newly synthesized strand."
                },
                {
                    id: "gen8",
                    text: "During DNA replication, the enzyme that joins the Okazaki fragments on the lagging strand is:",
                    options: [
                        { key: "a", text: "DNA polymerase" },
                        { key: "b", text: "Helicase" },
                        { key: "c", text: "DNA ligase" },
                        { key: "d", text: "Primase" }
                    ],
                    answer: "c",
                    explanation: "DNA ligase seals the nicks between adjacent Okazaki fragments by forming phosphodiester bonds, producing a continuous strand."
                },
                {
                    id: "gen9",
                    text: "The enzyme responsible for synthesizing RNA from a DNA template during transcription is:",
                    options: [
                        { key: "a", text: "DNA polymerase" },
                        { key: "b", text: "RNA polymerase" },
                        { key: "c", text: "Reverse transcriptase" },
                        { key: "d", text: "DNA ligase" }
                    ],
                    answer: "b",
                    explanation: "RNA polymerase reads the DNA template strand (3′→5′) and builds a complementary RNA strand (5′→3′) during transcription."
                },
                {
                    id: "gen10",
                    text: "The cellular site where translation (protein synthesis) takes place is the:",
                    options: [
                        { key: "a", text: "Nucleus" },
                        { key: "b", text: "Ribosome" },
                        { key: "c", text: "Mitochondrion" },
                        { key: "d", text: "Golgi apparatus" }
                    ],
                    answer: "b",
                    explanation: "Translation occurs on ribosomes, where mRNA codons are read and tRNA delivers the matching amino acids to build the polypeptide."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) IONIC EQUILIBRIUM  (Chemistry)
           pH, buffers, solubility product, Ostwald's dilution law
        ---------------------------------------------------------- */
        {
            id: "ionic",
            name: "Ionic Equilibrium",
            subject: "Chemistry",
            accent: "amber",
            blurb: "pH calculations · buffers · solubility product · Ostwald's law",
            questions: [
                {
                    id: "ion1",
                    text: "The pH of a $0.01\\,$M aqueous solution of HCl (a strong acid) at 25 °C is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "10" },
                        { key: "d", text: "12" }
                    ],
                    answer: "b",
                    explanation: "HCl is fully ionized, so $[\\mathrm{H^+}]=0.01=10^{-2}\\,$M and $\\mathrm{pH}=-\\log(10^{-2})=2$."
                },
                {
                    id: "ion2",
                    text: "The pH of a $0.001\\,$M aqueous solution of NaOH at 25 °C is:",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "7" },
                        { key: "c", text: "11" },
                        { key: "d", text: "13" }
                    ],
                    answer: "c",
                    explanation: "$[\\mathrm{OH^-}]=10^{-3}\\Rightarrow\\mathrm{pOH}=3$, and $\\mathrm{pH}=14-3=11$."
                },
                {
                    id: "ion3",
                    text: "The ionic product of water $K_w$ at 25 °C is:",
                    options: [
                        { key: "a", text: "$10^{-7}$" },
                        { key: "b", text: "$10^{-14}$" },
                        { key: "c", text: "$10^{14}$" },
                        { key: "d", text: "$10^{-12}$" }
                    ],
                    answer: "b",
                    explanation: "$K_w=[\\mathrm{H^+}][\\mathrm{OH^-}]=10^{-7}\\times10^{-7}=10^{-14}\\,\\mathrm{mol^2\\,L^{-2}}$ at 25 °C."
                },
                {
                    id: "ion4",
                    text: "Which of the following mixtures acts as an acidic buffer solution?",
                    options: [
                        { key: "a", text: "$\\mathrm{NH_4OH+NH_4Cl}$" },
                        { key: "b", text: "$\\mathrm{CH_3COOH+CH_3COONa}$" },
                        { key: "c", text: "$\\mathrm{NaOH+NaCl}$" },
                        { key: "d", text: "$\\mathrm{HCl+NaCl}$" }
                    ],
                    answer: "b",
                    explanation: "An acidic buffer is a mixture of a weak acid and its salt with a strong base — here acetic acid and sodium acetate."
                },
                {
                    id: "ion5",
                    text: "A buffer contains equal concentrations of acetic acid and sodium acetate. If the $\\mathrm{p}K_a$ of acetic acid is 4.74, the pH of the buffer is:",
                    options: [
                        { key: "a", text: "3.74" },
                        { key: "b", text: "4.74" },
                        { key: "c", text: "5.74" },
                        { key: "d", text: "7.00" }
                    ],
                    answer: "b",
                    explanation: "Henderson–Hasselbalch: $\\mathrm{pH}=\\mathrm{p}K_a+\\log\\dfrac{[\\text{salt}]}{[\\text{acid}]}=4.74+\\log1=4.74$."
                },
                {
                    id: "ion6",
                    text: "If the molar solubility of AgCl in water is $s$, its solubility product $K_{sp}$ is:",
                    options: [
                        { key: "a", text: "$s$" },
                        { key: "b", text: "$s^2$" },
                        { key: "c", text: "$2s$" },
                        { key: "d", text: "$4s^3$" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{AgCl\\rightleftharpoons Ag^+ + Cl^-}$ gives $K_{sp}=[\\mathrm{Ag^+}][\\mathrm{Cl^-}]=s\\times s=s^2$."
                },
                {
                    id: "ion7",
                    text: "For a sparingly soluble salt of the type $AB_2$ having molar solubility $s$, the solubility product is:",
                    options: [
                        { key: "a", text: "$s^2$" },
                        { key: "b", text: "$2s^2$" },
                        { key: "c", text: "$4s^3$" },
                        { key: "d", text: "$27s^4$" }
                    ],
                    answer: "c",
                    explanation: "$AB_2\\rightleftharpoons A^{2+}+2B^-$ gives $K_{sp}=[A^{2+}][B^-]^2=(s)(2s)^2=4s^3$."
                },
                {
                    id: "ion8",
                    text: "By Ostwald's dilution law, the degree of dissociation $(\\alpha)$ of a weak electrolyte of concentration $C$ is proportional to:",
                    options: [
                        { key: "a", text: "$C$" },
                        { key: "b", text: "$C^2$" },
                        { key: "c", text: "$\\sqrt{C}$" },
                        { key: "d", text: "$\\dfrac{1}{\\sqrt{C}}$" }
                    ],
                    answer: "d",
                    explanation: "For a weak electrolyte $\\alpha=\\sqrt{\\dfrac{K_a}{C}}$, so $\\alpha\\propto\\dfrac{1}{\\sqrt{C}}$ — dissociation increases on dilution."
                },
                {
                    id: "ion9",
                    text: "The suppression of the ionization of acetic acid on adding sodium acetate to its solution is an example of the:",
                    options: [
                        { key: "a", text: "Common ion effect" },
                        { key: "b", text: "Buffer capacity" },
                        { key: "c", text: "Salt hydrolysis" },
                        { key: "d", text: "Diffusion effect" }
                    ],
                    answer: "a",
                    explanation: "Adding the common ion (acetate, $\\mathrm{CH_3COO^-}$) shifts the equilibrium backward, suppressing the acid's ionization — the common ion effect."
                },
                {
                    id: "ion10",
                    text: "A weak monobasic acid is 1 % dissociated in a $0.1\\,$M solution. Its dissociation constant $K_a$ is approximately:",
                    options: [
                        { key: "a", text: "$10^{-3}$" },
                        { key: "b", text: "$10^{-4}$" },
                        { key: "c", text: "$10^{-5}$" },
                        { key: "d", text: "$10^{-6}$" }
                    ],
                    answer: "c",
                    explanation: "$\\alpha=0.01$, so $K_a\\approx\\alpha^2 C=(0.01)^2\\times0.1=10^{-4}\\times0.1=10^{-5}$."
                }
            ]
        }
    ]
};

/* ============================================================
   DAY 2 — Advanced Mixed Test
   25% negative marking (each wrong answer = −0.25 mark)
   40 MCQs · CEE / MECEE entrance difficulty
   Kepler's laws (3) · Poisson's ratio (2) · Numerical Reasoning (8)
   Laws of Thermodynamics (7) · Plant Respiration (10) · Molecular Genetics (10)
   ============================================================ */
const DAY2 = {
    day: 2,
    title: "Day 2",
    subtitle: "Advanced Mixed Test",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) KEPLER'S LAWS (Physics) — 3 ---------- */
        {
            id: "kepler",
            name: "Kepler's Laws",
            subject: "Physics",
            accent: "blue",
            blurb: "Laws of orbits, areas and periods",
            questions: [
                {
                    id: "kep1",
                    text: "According to Kepler's first law (the law of orbits), every planet revolves around the Sun in:",
                    options: [
                        { key: "a", text: "a circular orbit with the Sun at the centre" },
                        { key: "b", text: "an elliptical orbit with the Sun at one focus" },
                        { key: "c", text: "a parabolic orbit" },
                        { key: "d", text: "an elliptical orbit with the Sun at the centre" }
                    ],
                    answer: "b",
                    explanation: "Kepler's first law states that planetary orbits are ellipses with the Sun located at one of the two foci."
                },
                {
                    id: "kep2",
                    text: "The mean distance of a planet from the Sun is 4 times that of the Earth. Its period of revolution (in Earth years) is:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "6" },
                        { key: "c", text: "8" },
                        { key: "d", text: "16" }
                    ],
                    answer: "c",
                    explanation: "By Kepler's third law $T^2\\propto r^3$, so $T=r^{3/2}=4^{3/2}=8$ Earth years."
                },
                {
                    id: "kep3",
                    text: "By Kepler's second law, the areal velocity of a planet is constant. A planet therefore moves with its greatest speed when it is:",
                    options: [
                        { key: "a", text: "farthest from the Sun (aphelion)" },
                        { key: "b", text: "nearest to the Sun (perihelion)" },
                        { key: "c", text: "at the end of the minor axis" },
                        { key: "d", text: "moving at constant speed throughout" }
                    ],
                    answer: "b",
                    explanation: "Equal areas are swept in equal times, so the planet must move fastest where it is closest to the Sun (perihelion)."
                }
            ]
        },

        /* ---------- 2) POISSON'S RATIO (Physics) — 2 ---------- */
        {
            id: "poisson",
            name: "Poisson's Ratio",
            subject: "Physics",
            accent: "cyan",
            blurb: "Lateral vs longitudinal strain",
            questions: [
                {
                    id: "poi1",
                    text: "When a wire is stretched, if its volume remains unchanged, the value of Poisson's ratio is:",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "0.25" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "1" }
                    ],
                    answer: "c",
                    explanation: "For no change in volume (a perfectly incompressible material), Poisson's ratio takes its maximum value $\\sigma=0.5$."
                },
                {
                    id: "poi2",
                    text: "A stretched wire has a longitudinal strain of 0.2% and a lateral strain of 0.05%. Its Poisson's ratio is:",
                    options: [
                        { key: "a", text: "0.10" },
                        { key: "b", text: "0.25" },
                        { key: "c", text: "0.40" },
                        { key: "d", text: "4.0" }
                    ],
                    answer: "b",
                    explanation: "$\\sigma=\\dfrac{\\text{lateral strain}}{\\text{longitudinal strain}}=\\dfrac{0.05}{0.2}=0.25$."
                }
            ]
        },

        /* ---------- 3) NUMERICAL REASONING (MAT) — 8 ---------- */
        {
            id: "numreason",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Series, ratios, averages and logic",
            questions: [
                {
                    id: "nr1",
                    text: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
                    options: [
                        { key: "a", text: "36" },
                        { key: "b", text: "40" },
                        { key: "c", text: "42" },
                        { key: "d", text: "46" }
                    ],
                    answer: "c",
                    explanation: "The differences are 4, 6, 8, 10, so the next difference is 12: 30 + 12 = 42 (each term is n(n+1))."
                },
                {
                    id: "nr2",
                    text: "A sum of money at compound interest amounts to Rs 2420 in 2 years and Rs 2662 in 3 years. The rate of interest per annum is:",
                    options: [
                        { key: "a", text: "8%" },
                        { key: "b", text: "9%" },
                        { key: "c", text: "10%" },
                        { key: "d", text: "12%" }
                    ],
                    answer: "c",
                    explanation: "The 3rd-year interest is earned on the 2-year amount: 2662 − 2420 = 242 on 2420, so rate = (242 ÷ 2420) × 100 = 10% per annum."
                },
                {
                    id: "nr3",
                    text: "A and B together can finish a work in 12 days, B and C in 15 days, and C and A in 20 days. Working all together, A, B and C will complete it in:",
                    options: [
                        { key: "a", text: "6 days" },
                        { key: "b", text: "9 days" },
                        { key: "c", text: "10 days" },
                        { key: "d", text: "12 days" }
                    ],
                    answer: "c",
                    explanation: "Adding the pair rates: 1/12 + 1/15 + 1/20 = 12/60 = 1/5 = 2(A+B+C). So A+B+C = 1/10 per day ⇒ 10 days."
                },
                {
                    id: "nr4",
                    text: "A boat covers 24 km upstream and 36 km downstream in 6 hours, and 36 km upstream and 24 km downstream in 6.5 hours. The speed of the stream is:",
                    options: [
                        { key: "a", text: "1 km/h" },
                        { key: "b", text: "2 km/h" },
                        { key: "c", text: "3 km/h" },
                        { key: "d", text: "4 km/h" }
                    ],
                    answer: "b",
                    explanation: "Solving 24/u + 36/d = 6 and 36/u + 24/d = 6.5 gives upstream u = 8 and downstream d = 12 km/h. Stream speed = (12 − 8)/2 = 2 km/h."
                },
                {
                    id: "nr5",
                    text: "The present ages of A and B are in the ratio 3 : 5. After 8 years the ratio becomes 5 : 7. The present age of A is:",
                    options: [
                        { key: "a", text: "10 years" },
                        { key: "b", text: "12 years" },
                        { key: "c", text: "15 years" },
                        { key: "d", text: "20 years" }
                    ],
                    answer: "b",
                    explanation: "Let ages be 3x and 5x. (3x + 8)/(5x + 8) = 5/7 ⇒ 21x + 56 = 25x + 40 ⇒ x = 4, so A = 3x = 12 years."
                },
                {
                    id: "nr6",
                    text: "A train 120 m long moving at 36 km/h crosses a stationary pole in:",
                    options: [
                        { key: "a", text: "8 s" },
                        { key: "b", text: "10 s" },
                        { key: "c", text: "12 s" },
                        { key: "d", text: "15 s" }
                    ],
                    answer: "c",
                    explanation: "36 km/h = 10 m/s; time = distance ÷ speed = 120 ÷ 10 = 12 s."
                },
                {
                    id: "nr7",
                    text: "Find the next number in the series: 3, 6, 11, 18, 27, ?",
                    options: [
                        { key: "a", text: "34" },
                        { key: "b", text: "36" },
                        { key: "c", text: "38" },
                        { key: "d", text: "40" }
                    ],
                    answer: "c",
                    explanation: "The differences are 3, 5, 7, 9, so the next is 11: 27 + 11 = 38."
                },
                {
                    id: "nr8",
                    text: "A 40-litre mixture of milk and water contains them in the ratio 3 : 1. How much water must be added so that the ratio becomes 2 : 3?",
                    options: [
                        { key: "a", text: "25 litres" },
                        { key: "b", text: "30 litres" },
                        { key: "c", text: "35 litres" },
                        { key: "d", text: "50 litres" }
                    ],
                    answer: "c",
                    explanation: "Milk = 30 L, water = 10 L. Setting 30/(10 + x) = 2/3 gives 90 = 20 + 2x, so x = 35 litres of water."
                }
            ]
        },

        /* ---------- 4) LAWS OF THERMODYNAMICS (Physics) — 7 ---------- */
        {
            id: "thermo",
            name: "Laws of Thermodynamics",
            subject: "Physics",
            accent: "blue",
            blurb: "Internal energy, processes and engines",
            questions: [
                {
                    id: "th1",
                    text: "The first law of thermodynamics is essentially a statement of the conservation of:",
                    options: [
                        { key: "a", text: "mass" },
                        { key: "b", text: "energy" },
                        { key: "c", text: "momentum" },
                        { key: "d", text: "entropy" }
                    ],
                    answer: "b",
                    explanation: "The first law, $\\Delta Q=\\Delta U+\\Delta W$, is the law of conservation of energy applied to heat processes."
                },
                {
                    id: "th2",
                    text: "100 J of heat is supplied to a gas which does 30 J of external work. The increase in its internal energy is:",
                    options: [
                        { key: "a", text: "30 J" },
                        { key: "b", text: "70 J" },
                        { key: "c", text: "100 J" },
                        { key: "d", text: "130 J" }
                    ],
                    answer: "b",
                    explanation: "$\\Delta U=\\Delta Q-\\Delta W=100-30=70\\,$J."
                },
                {
                    id: "th3",
                    text: "One mole of an ideal gas expands isothermally and reversibly at temperature T until its volume is doubled. The work done by the gas is:",
                    options: [
                        { key: "a", text: "RT" },
                        { key: "b", text: "RT ln 2" },
                        { key: "c", text: "2RT" },
                        { key: "d", text: "RT / 2" }
                    ],
                    answer: "b",
                    explanation: "For an isothermal reversible expansion, W = nRT ln(V2/V1). With n = 1 and V2 = 2V1, W = RT ln 2 ≈ 0.693 RT."
                },
                {
                    id: "th4",
                    text: "A monatomic ideal gas (γ = 5/3) is compressed adiabatically to one-eighth of its original volume. Its pressure becomes:",
                    options: [
                        { key: "a", text: "8 times" },
                        { key: "b", text: "16 times" },
                        { key: "c", text: "24 times" },
                        { key: "d", text: "32 times" }
                    ],
                    answer: "d",
                    explanation: "For an adiabatic process P·V^γ = constant, so P2/P1 = (V1/V2)^γ = 8^(5/3) = (2^3)^(5/3) = 2^5 = 32 times."
                },
                {
                    id: "th5",
                    text: "A Carnot engine works between a source at 500 K and a sink at 300 K. Its efficiency is:",
                    options: [
                        { key: "a", text: "20%" },
                        { key: "b", text: "40%" },
                        { key: "c", text: "60%" },
                        { key: "d", text: "75%" }
                    ],
                    answer: "b",
                    explanation: "$\\eta=1-\\dfrac{T_2}{T_1}=1-\\dfrac{300}{500}=0.4=40\\%$."
                },
                {
                    id: "th6",
                    text: "For an ideal gas with ratio of specific heats γ = Cp/Cv, the molar specific heat at constant volume is:",
                    options: [
                        { key: "a", text: "(γ - 1)R" },
                        { key: "b", text: "R / (γ - 1)" },
                        { key: "c", text: "γR / (γ - 1)" },
                        { key: "d", text: "R / γ" }
                    ],
                    answer: "b",
                    explanation: "From Cp - Cv = R and Cp = γCv: γCv - Cv = R, so Cv(γ - 1) = R and Cv = R/(γ - 1). Also Cp = γR/(γ - 1)."
                },
                {
                    id: "th7",
                    text: "In an isochoric (constant-volume) process, the work done by a gas is:",
                    options: [
                        { key: "a", text: "zero" },
                        { key: "b", text: "equal to the heat supplied" },
                        { key: "c", text: "maximum" },
                        { key: "d", text: "negative" }
                    ],
                    answer: "a",
                    explanation: "Work $W=P\\Delta V$; at constant volume $\\Delta V=0$, so $W=0$ and all heat raises the internal energy ($\\Delta Q=\\Delta U$)."
                }
            ]
        },

        /* ---------- 5) PLANT RESPIRATION (Botany) — 10 ---------- */
        {
            id: "respiration",
            name: "Plant Respiration",
            subject: "Botany",
            accent: "emerald",
            blurb: "Glycolysis, Krebs cycle and ATP yield",
            questions: [
                {
                    id: "pr1",
                    text: "Glycolysis, the first step of respiration, takes place in the:",
                    options: [
                        { key: "a", text: "cytoplasm" },
                        { key: "b", text: "mitochondrial matrix" },
                        { key: "c", text: "inner mitochondrial membrane" },
                        { key: "d", text: "nucleus" }
                    ],
                    answer: "a",
                    explanation: "Glycolysis occurs in the cytoplasm and does not require oxygen, converting glucose to pyruvate."
                },
                {
                    id: "pr2",
                    text: "The Krebs cycle (citric acid cycle) takes place in the:",
                    options: [
                        { key: "a", text: "cytoplasm" },
                        { key: "b", text: "matrix of mitochondria" },
                        { key: "c", text: "ribosomes" },
                        { key: "d", text: "chloroplast stroma" }
                    ],
                    answer: "b",
                    explanation: "The Krebs cycle operates in the mitochondrial matrix, where pyruvate is completely oxidized to CO₂."
                },
                {
                    id: "pr3",
                    text: "The net number of ATP molecules produced by the complete aerobic respiration of one glucose molecule is (commonly taken as):",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "38" },
                        { key: "d", text: "12" }
                    ],
                    answer: "c",
                    explanation: "Complete aerobic oxidation of one glucose yields about 38 ATP (2 from glycolysis, 2 from the Krebs cycle, and ~34 from the electron transport chain)."
                },
                {
                    id: "pr4",
                    text: "The end product of glycolysis is:",
                    options: [
                        { key: "a", text: "glucose" },
                        { key: "b", text: "pyruvic acid" },
                        { key: "c", text: "lactic acid" },
                        { key: "d", text: "acetyl CoA" }
                    ],
                    answer: "b",
                    explanation: "Glycolysis converts one glucose (6C) into two molecules of pyruvic acid (3C)."
                },
                {
                    id: "pr5",
                    text: "During anaerobic respiration (fermentation) in yeast, glucose is broken down into:",
                    options: [
                        { key: "a", text: "lactic acid only" },
                        { key: "b", text: "ethyl alcohol and CO₂" },
                        { key: "c", text: "CO₂ and water" },
                        { key: "d", text: "pyruvic acid and water" }
                    ],
                    answer: "b",
                    explanation: "Alcoholic fermentation in yeast converts pyruvate into ethyl alcohol (ethanol) and carbon dioxide."
                },
                {
                    id: "pr6",
                    text: "Oxidative phosphorylation (the electron transport chain) occurs on the:",
                    options: [
                        { key: "a", text: "outer mitochondrial membrane" },
                        { key: "b", text: "inner mitochondrial membrane" },
                        { key: "c", text: "cytoplasm" },
                        { key: "d", text: "cell wall" }
                    ],
                    answer: "b",
                    explanation: "The electron transport chain and ATP synthase are located on the inner mitochondrial membrane (on the cristae)."
                },
                {
                    id: "pr7",
                    text: "The respiratory quotient (RQ) for the oxidation of carbohydrates is:",
                    options: [
                        { key: "a", text: "0.7" },
                        { key: "b", text: "0.9" },
                        { key: "c", text: "1.0" },
                        { key: "d", text: "greater than 1" }
                    ],
                    answer: "c",
                    explanation: "For carbohydrates, the volume of CO₂ released equals the O₂ consumed, so RQ = CO₂/O₂ = 1."
                },
                {
                    id: "pr8",
                    text: "The net gain of ATP molecules during glycolysis of one glucose molecule is:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "8" }
                    ],
                    answer: "a",
                    explanation: "Glycolysis produces 4 ATP but consumes 2, giving a net gain of 2 ATP (plus 2 NADH)."
                },
                {
                    id: "pr9",
                    text: "In aerobic respiration, the final (terminal) acceptor of electrons is:",
                    options: [
                        { key: "a", text: "water" },
                        { key: "b", text: "oxygen" },
                        { key: "c", text: "carbon dioxide" },
                        { key: "d", text: "NAD⁺" }
                    ],
                    answer: "b",
                    explanation: "Molecular oxygen is the final electron acceptor in the electron transport chain, forming water."
                },
                {
                    id: "pr10",
                    text: "The Krebs cycle is also known as the:",
                    options: [
                        { key: "a", text: "Calvin cycle" },
                        { key: "b", text: "citric acid (TCA) cycle" },
                        { key: "c", text: "ornithine cycle" },
                        { key: "d", text: "glyoxylate cycle" }
                    ],
                    answer: "b",
                    explanation: "The Krebs cycle is called the citric acid cycle (or tricarboxylic acid, TCA, cycle) because citric acid is its first product."
                }
            ]
        },

        /* ---------- 6) MOLECULAR GENETICS (Botany) — 10 ---------- */
        {
            id: "molgenetics",
            name: "Molecular Genetics",
            subject: "Botany",
            accent: "emerald",
            blurb: "Central dogma, codons and the genetic code",
            questions: [
                {
                    id: "mg1",
                    text: "The central dogma of molecular biology describes the flow of genetic information as:",
                    options: [
                        { key: "a", text: "Protein → RNA → DNA" },
                        { key: "b", text: "DNA → RNA → Protein" },
                        { key: "c", text: "RNA → DNA → Protein" },
                        { key: "d", text: "DNA → Protein → RNA" }
                    ],
                    answer: "b",
                    explanation: "The central dogma, proposed by Crick, is DNA → RNA → Protein (transcription followed by translation)."
                },
                {
                    id: "mg2",
                    text: "A codon, the unit of the genetic code, consists of:",
                    options: [
                        { key: "a", text: "one nucleotide" },
                        { key: "b", text: "two nucleotides" },
                        { key: "c", text: "three nucleotides" },
                        { key: "d", text: "four nucleotides" }
                    ],
                    answer: "c",
                    explanation: "A codon is a triplet of three consecutive nucleotides on mRNA that specifies one amino acid."
                },
                {
                    id: "mg3",
                    text: "The total number of codons in the genetic code is:",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "61" },
                        { key: "c", text: "64" },
                        { key: "d", text: "16" }
                    ],
                    answer: "c",
                    explanation: "With 4 bases taken 3 at a time, there are 4³ = 64 possible codons (61 sense codons + 3 stop codons)."
                },
                {
                    id: "mg4",
                    text: "The initiation (start) codon during translation is:",
                    options: [
                        { key: "a", text: "UAA" },
                        { key: "b", text: "AUG" },
                        { key: "c", text: "UGA" },
                        { key: "d", text: "UAG" }
                    ],
                    answer: "b",
                    explanation: "AUG is the start codon and also codes for the amino acid methionine."
                },
                {
                    id: "mg5",
                    text: "The number of stop (nonsense) codons in the genetic code is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "c",
                    explanation: "There are three stop codons — UAA, UAG and UGA — which terminate translation."
                },
                {
                    id: "mg6",
                    text: "The anticodon is present on which type of RNA?",
                    options: [
                        { key: "a", text: "mRNA" },
                        { key: "b", text: "tRNA" },
                        { key: "c", text: "rRNA" },
                        { key: "d", text: "hnRNA" }
                    ],
                    answer: "b",
                    explanation: "Transfer RNA (tRNA) carries an anticodon that base-pairs with the complementary codon on mRNA during translation."
                },
                {
                    id: "mg7",
                    text: "The genetic code is said to be 'degenerate' because:",
                    options: [
                        { key: "a", text: "one codon codes for many amino acids" },
                        { key: "b", text: "one amino acid is coded by more than one codon" },
                        { key: "c", text: "some codons code for nothing" },
                        { key: "d", text: "the code overlaps" }
                    ],
                    answer: "b",
                    explanation: "Degeneracy means most amino acids are specified by more than one codon (e.g., leucine has six codons)."
                },
                {
                    id: "mg8",
                    text: "The codon AUG codes for the amino acid:",
                    options: [
                        { key: "a", text: "methionine" },
                        { key: "b", text: "valine" },
                        { key: "c", text: "leucine" },
                        { key: "d", text: "glycine" }
                    ],
                    answer: "a",
                    explanation: "AUG codes for methionine and serves as the universal initiation codon."
                },
                {
                    id: "mg9",
                    text: "The enzyme reverse transcriptase synthesizes:",
                    options: [
                        { key: "a", text: "RNA from a DNA template" },
                        { key: "b", text: "DNA from an RNA template" },
                        { key: "c", text: "protein from RNA" },
                        { key: "d", text: "RNA from an RNA template" }
                    ],
                    answer: "b",
                    explanation: "Reverse transcriptase (found in retroviruses) makes complementary DNA (cDNA) from an RNA template — reverse transcription."
                },
                {
                    id: "mg10",
                    text: "The number of different amino acids commonly coded by the genetic code is:",
                    options: [
                        { key: "a", text: "16" },
                        { key: "b", text: "20" },
                        { key: "c", text: "23" },
                        { key: "d", text: "64" }
                    ],
                    answer: "b",
                    explanation: "There are 20 standard amino acids used to build proteins, coded by the 61 sense codons."
                }
            ]
        }
    ]
};

const DAY3 = {
    day: 3,
    title: "Day 3",
    subtitle: "Challenge Mixed Test",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) ELASTICITY  (Physics) — 15  (above standard CEE level)
           Moduli relations · energy density · thermal stress ·
           own-weight elongation · Poisson volume change
        ---------------------------------------------------------- */
        {
            id: "elasticity",
            name: "Elasticity",
            subject: "Physics",
            accent: "cyan",
            blurb: "Stress & strain · Hooke's law · Young's modulus · elastic moduli",
            questions: [
                {
                    id: "el1",
                    text: "Within the elastic limit, the ratio of stress to strain for a given material is a constant called the:",
                    options: [
                        { key: "a", text: "elastic limit" },
                        { key: "b", text: "modulus of elasticity" },
                        { key: "c", text: "breaking stress" },
                        { key: "d", text: "yield point" }
                    ],
                    answer: "b",
                    explanation: "By Hooke's law, within the elastic limit $\\dfrac{\\text{stress}}{\\text{strain}}=\\text{constant}$, and this constant is the modulus of elasticity."
                },
                {
                    id: "el2",
                    text: "The SI unit of Young's modulus is:",
                    options: [
                        { key: "a", text: "$\\mathrm{N\\,m}$" },
                        { key: "b", text: "$\\mathrm{N\\,m^{-2}}$ (Pa)" },
                        { key: "c", text: "$\\mathrm{N\\,m^{-1}}$" },
                        { key: "d", text: "It is dimensionless" }
                    ],
                    answer: "b",
                    explanation: "Young's modulus $=\\dfrac{\\text{stress}}{\\text{strain}}$. Strain is dimensionless, so the unit is that of stress, $\\mathrm{N\\,m^{-2}}$ (pascal)."
                },
                {
                    id: "el3",
                    text: "Within the elastic limit, the strain produced in a body is directly proportional to the applied stress. This statement is:",
                    options: [
                        { key: "a", text: "Newton's law" },
                        { key: "b", text: "Hooke's law" },
                        { key: "c", text: "Pascal's law" },
                        { key: "d", text: "Boyle's law" }
                    ],
                    answer: "b",
                    explanation: "Hooke's law states that, within the elastic limit, stress is directly proportional to strain."
                },
                {
                    id: "el4",
                    text: "A wire of length $2\\,$m and cross-sectional area $1\\,\\mathrm{mm^2}$ is stretched by a force of $100\\,$N. If $Y=2\\times10^{11}\\,\\mathrm{Pa}$, the extension produced is:",
                    options: [
                        { key: "a", text: "$0.5\\,$mm" },
                        { key: "b", text: "$1\\,$mm" },
                        { key: "c", text: "$2\\,$mm" },
                        { key: "d", text: "$4\\,$mm" }
                    ],
                    answer: "b",
                    explanation: "$l=\\dfrac{FL}{AY}=\\dfrac{100\\times2}{10^{-6}\\times2\\times10^{11}}=10^{-3}\\,$m $=1\\,$mm."
                },
                {
                    id: "el5",
                    text: "Young's modulus of a material is defined as the ratio of:",
                    options: [
                        { key: "a", text: "longitudinal stress to longitudinal strain" },
                        { key: "b", text: "shear stress to shear strain" },
                        { key: "c", text: "volume stress to volume strain" },
                        { key: "d", text: "lateral strain to longitudinal strain" }
                    ],
                    answer: "a",
                    explanation: "Young's modulus $Y=\\dfrac{\\text{longitudinal stress}}{\\text{longitudinal strain}}$; the other ratios define the rigidity modulus, bulk modulus and Poisson's ratio respectively."
                },
                {
                    id: "el6",
                    text: "Poisson's ratio is defined as the ratio of:",
                    options: [
                        { key: "a", text: "longitudinal strain to lateral strain" },
                        { key: "b", text: "lateral strain to longitudinal strain" },
                        { key: "c", text: "stress to strain" },
                        { key: "d", text: "shear strain to longitudinal strain" }
                    ],
                    answer: "b",
                    explanation: "Poisson's ratio $\\sigma=\\dfrac{\\text{lateral strain}}{\\text{longitudinal strain}}$."
                },
                {
                    id: "el7",
                    text: "Among the following materials, the most elastic one is:",
                    options: [
                        { key: "a", text: "rubber" },
                        { key: "b", text: "steel" },
                        { key: "c", text: "copper" },
                        { key: "d", text: "plastic" }
                    ],
                    answer: "b",
                    explanation: "Steel has the largest Young's modulus, so it best resists deformation and regains its shape — it is the most elastic of these."
                },
                {
                    id: "el8",
                    text: "The change in volume of a body subjected to a uniform pressure on all sides is governed by its:",
                    options: [
                        { key: "a", text: "Young's modulus" },
                        { key: "b", text: "bulk modulus" },
                        { key: "c", text: "modulus of rigidity" },
                        { key: "d", text: "Poisson's ratio" }
                    ],
                    answer: "b",
                    explanation: "Bulk modulus $K=\\dfrac{\\text{volume (normal) stress}}{\\text{volume strain}}$ describes the resistance of a body to a uniform change in volume."
                },
                {
                    id: "el9",
                    text: "A wire is stretched by a force $F$, producing an extension $l$ within the elastic limit. The work done (elastic energy stored) in the wire is:",
                    options: [
                        { key: "a", text: "$Fl$" },
                        { key: "b", text: "$\\tfrac12 Fl$" },
                        { key: "c", text: "$2Fl$" },
                        { key: "d", text: "$Fl^2$" }
                    ],
                    answer: "b",
                    explanation: "The restoring force grows from $0$ to $F$, so the average force is $\\tfrac12 F$ and the work stored is $W=\\tfrac12 Fl$."
                },
                {
                    id: "el10",
                    text: "Stress has the same units and dimensions as:",
                    options: [
                        { key: "a", text: "force" },
                        { key: "b", text: "pressure" },
                        { key: "c", text: "energy" },
                        { key: "d", text: "strain" }
                    ],
                    answer: "b",
                    explanation: "Stress $=\\dfrac{\\text{force}}{\\text{area}}$, which has the same unit ($\\mathrm{N\\,m^{-2}}$) and dimensions $[ML^{-1}T^{-2}]$ as pressure."
                },
                {
                    id: "el11",
                    text: "Strain is:",
                    options: [
                        { key: "a", text: "measured in $\\mathrm{N\\,m^{-2}}$" },
                        { key: "b", text: "a dimensionless quantity" },
                        { key: "c", text: "measured in metre" },
                        { key: "d", text: "measured in newton" }
                    ],
                    answer: "b",
                    explanation: "Strain is the ratio of change in dimension to original dimension, so it has no unit and is dimensionless."
                },
                {
                    id: "el12",
                    text: "Two wires of the same material and the same length but of radii $r$ and $2r$ are stretched by the same force. The ratio of their extensions is:",
                    options: [
                        { key: "a", text: "$4:1$" },
                        { key: "b", text: "$1:4$" },
                        { key: "c", text: "$2:1$" },
                        { key: "d", text: "$1:2$" }
                    ],
                    answer: "a",
                    explanation: "$l=\\dfrac{FL}{\\pi r^2 Y}\\propto\\dfrac{1}{r^2}$. So $\\dfrac{l_1}{l_2}=\\dfrac{(2r)^2}{r^2}=4$, i.e. $4:1$."
                },
                {
                    id: "el13",
                    text: "On a stress–strain graph, the point up to which the wire regains its original length on removing the load is called the:",
                    options: [
                        { key: "a", text: "elastic limit" },
                        { key: "b", text: "yield point" },
                        { key: "c", text: "breaking point" },
                        { key: "d", text: "plastic point" }
                    ],
                    answer: "a",
                    explanation: "Up to the elastic limit the deformation is fully recoverable; beyond it the wire acquires a permanent set."
                },
                {
                    id: "el14",
                    text: "The theoretical limits of Poisson's ratio for a material are:",
                    options: [
                        { key: "a", text: "$0$ to $1$" },
                        { key: "b", text: "$-1$ to $0.5$" },
                        { key: "c", text: "$0$ to $2$" },
                        { key: "d", text: "$-1$ to $1$" }
                    ],
                    answer: "b",
                    explanation: "Theoretically Poisson's ratio lies between $-1$ and $+0.5$; for most real materials its value is between $0$ and $0.5$."
                },
                {
                    id: "el15",
                    text: "When the temperature of a material is increased, its elasticity (Young's modulus) generally:",
                    options: [
                        { key: "a", text: "increases" },
                        { key: "b", text: "decreases" },
                        { key: "c", text: "remains unchanged" },
                        { key: "d", text: "becomes zero" }
                    ],
                    answer: "b",
                    explanation: "A rise in temperature weakens interatomic forces, so for most materials the modulus of elasticity decreases as temperature increases."
                }
            ]
        },

        /* ---------- 2) PLANT RESPIRATION (Botany) — 5 (harder) ---------- */
        {
            id: "plantresp",
            name: "Plant Respiration",
            subject: "Botany",
            accent: "emerald",
            blurb: "Glycolysis · Krebs cycle · RQ · ATP accounting",
            questions: [
                {
                    id: "pr1",
                    text: "The respiratory quotient (RQ) measured during the oxidation of tripalmitin, a typical fat, is closest to:",
                    options: [
                        { key: "a", text: "$1.0$" },
                        { key: "b", text: "$0.9$" },
                        { key: "c", text: "$0.7$" },
                        { key: "d", text: "$0.5$" }
                    ],
                    answer: "c",
                    explanation: "For fats much less $\\mathrm{CO_2}$ is released per $\\mathrm{O_2}$ consumed; for tripalmitin $2\\,C_{51}H_{98}O_6+145\\,O_2\\to102\\,CO_2+98\\,H_2O$, giving RQ $=102/145\\approx0.7$."
                },
                {
                    id: "pr2",
                    text: "In the complete aerobic oxidation of one glucose molecule yielding a net of 38 ATP, the number of ATP molecules produced by oxidative phosphorylation (the electron transport chain) is:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "34" },
                        { key: "d", text: "36" }
                    ],
                    answer: "c",
                    explanation: "Of the 38 ATP, 4 arise by substrate-level phosphorylation (net 2 in glycolysis $+$ 2 in the Krebs cycle); the remaining $38-4=34$ ATP come from oxidative phosphorylation."
                },
                {
                    id: "pr3",
                    text: "The total number of NADH (NADH + H$^{+}$) molecules generated during the complete oxidation of one glucose molecule (glycolysis, link reaction and Krebs cycle) is:",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "8" },
                        { key: "c", text: "10" },
                        { key: "d", text: "12" }
                    ],
                    answer: "c",
                    explanation: "2 (glycolysis) $+$ 2 (oxidative decarboxylation of 2 pyruvate) $+$ 6 (Krebs cycle, 3 per turn $\\times$ 2) $=10$ NADH."
                },
                {
                    id: "pr4",
                    text: "In one turn of the Krebs (citric acid) cycle, the number of $\\mathrm{CO_2}$ molecules released and the number of ATP/GTP formed by substrate-level phosphorylation are, respectively:",
                    options: [
                        { key: "a", text: "2 $\\mathrm{CO_2}$ and 1 GTP" },
                        { key: "b", text: "2 $\\mathrm{CO_2}$ and 2 GTP" },
                        { key: "c", text: "1 $\\mathrm{CO_2}$ and 1 GTP" },
                        { key: "d", text: "3 $\\mathrm{CO_2}$ and 1 GTP" }
                    ],
                    answer: "a",
                    explanation: "Each turn releases 2 $\\mathrm{CO_2}$ (at the isocitrate and $\\alpha$-ketoglutarate steps) and forms 1 GTP (ATP) by substrate-level phosphorylation at the succinyl-CoA $\\to$ succinate step."
                },
                {
                    id: "pr5",
                    text: "During fermentation, the conversion of pyruvate to ethanol or lactate is essential chiefly because it:",
                    options: [
                        { key: "a", text: "produces a large amount of ATP directly" },
                        { key: "b", text: "regenerates NAD$^{+}$ so that glycolysis can continue" },
                        { key: "c", text: "fixes atmospheric $\\mathrm{CO_2}$" },
                        { key: "d", text: "synthesizes glucose from pyruvate" }
                    ],
                    answer: "b",
                    explanation: "Fermentation reoxidizes NADH to NAD$^{+}$, replenishing the NAD$^{+}$ required at the glyceraldehyde-3-phosphate step so that glycolysis (and its small ATP yield) can keep running anaerobically."
                }
            ]
        },

        /* ---------- 3) NUMERICAL REASONING (MAT) — 10 (harder) ---------- */
        {
            id: "numreason3",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Series · clocks · pipes · permutations · logic",
            questions: [
                {
                    id: "nr1",
                    text: "Find the next term in the series: $2,\\;5,\\;11,\\;23,\\;47,\\;?$",
                    options: [
                        { key: "a", text: "$92$" },
                        { key: "b", text: "$94$" },
                        { key: "c", text: "$95$" },
                        { key: "d", text: "$96$" }
                    ],
                    answer: "c",
                    explanation: "Each term follows $\\times2+1$: $47\\times2+1=95$."
                },
                {
                    id: "nr2",
                    text: "Find the next term in the series: $1,\\;4,\\;27,\\;256,\\;?$",
                    options: [
                        { key: "a", text: "$625$" },
                        { key: "b", text: "$3025$" },
                        { key: "c", text: "$3125$" },
                        { key: "d", text: "$4096$" }
                    ],
                    answer: "c",
                    explanation: "The terms are $n^{n}$: $1^1,\\,2^2,\\,3^3,\\,4^4$, so the next is $5^5=3125$."
                },
                {
                    id: "nr3",
                    text: "At what time between 4 o'clock and 5 o'clock are the hands of a clock first at right angles (90°)?",
                    options: [
                        { key: "a", text: "$4\\!:\\!05\\tfrac{5}{11}$" },
                        { key: "b", text: "$4\\!:\\!10$" },
                        { key: "c", text: "$4\\!:\\!38\\tfrac{2}{11}$" },
                        { key: "d", text: "$4\\!:\\!00$" }
                    ],
                    answer: "a",
                    explanation: "Using $|30H-5.5M|=90$ with $H=4$: $5.5M-120=-90\\Rightarrow M=\\tfrac{30}{5.5}=5\\tfrac{5}{11}$ minutes, i.e. $4\\!:\\!05\\tfrac{5}{11}$."
                },
                {
                    id: "nr4",
                    text: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. Both are opened together, but A is closed after some time, and the tank is full in 18 minutes. After how many minutes was A closed?",
                    options: [
                        { key: "a", text: "5 min" },
                        { key: "b", text: "8 min" },
                        { key: "c", text: "10 min" },
                        { key: "d", text: "12 min" }
                    ],
                    answer: "b",
                    explanation: "B runs all 18 min filling $\\tfrac{18}{30}=\\tfrac35$. A must fill the remaining $\\tfrac25$ at rate $\\tfrac1{20}$: time $=\\tfrac25\\times20=8$ min."
                },
                {
                    id: "nr5",
                    text: "A man sells two articles for Rs 1000 each. On one he gains 25% and on the other he loses 25%. His overall result is:",
                    options: [
                        { key: "a", text: "no profit, no loss" },
                        { key: "b", text: "6.25% loss" },
                        { key: "c", text: "6.25% gain" },
                        { key: "d", text: "12.5% loss" }
                    ],
                    answer: "b",
                    explanation: "When the same percentage is gained and lost on equal selling prices, there is always a loss of $\\left(\\tfrac{25}{10}\\right)^2=\\tfrac{(25)^2}{100}=6.25\\%$."
                },
                {
                    id: "nr6",
                    text: "The present ages of a father and his son are in the ratio $7:2$. After 10 years the ratio becomes $9:4$. The present age of the father is:",
                    options: [
                        { key: "a", text: "28 years" },
                        { key: "b", text: "30 years" },
                        { key: "c", text: "35 years" },
                        { key: "d", text: "42 years" }
                    ],
                    answer: "c",
                    explanation: "Let ages be $7x$ and $2x$. $\\dfrac{7x+10}{2x+10}=\\dfrac94\\Rightarrow28x+40=18x+90\\Rightarrow x=5$. Father $=7x=35$ years."
                },
                {
                    id: "nr7",
                    text: "The average of 11 numbers is 50. The average of the first 6 is 49 and the average of the last 6 is 52. The 6th number is:",
                    options: [
                        { key: "a", text: "54" },
                        { key: "b", text: "55" },
                        { key: "c", text: "56" },
                        { key: "d", text: "58" }
                    ],
                    answer: "c",
                    explanation: "Sum of all $=550$. First 6 sum $=294$, last 6 sum $=312$; their total $606$ counts the 6th number twice: $606-550=56$."
                },
                {
                    id: "nr8",
                    text: "In how many distinct ways can the letters of the word LEVEL be arranged?",
                    options: [
                        { key: "a", text: "30" },
                        { key: "b", text: "60" },
                        { key: "c", text: "120" },
                        { key: "d", text: "24" }
                    ],
                    answer: "a",
                    explanation: "LEVEL has 5 letters with L and E each repeated twice: $\\dfrac{5!}{2!\\,2!}=\\dfrac{120}{4}=30$."
                },
                {
                    id: "nr9",
                    text: "A train crosses a platform 162 m long in 18 seconds and passes a man standing on the platform in 9 seconds. The length of the train is:",
                    options: [
                        { key: "a", text: "144 m" },
                        { key: "b", text: "162 m" },
                        { key: "c", text: "180 m" },
                        { key: "d", text: "200 m" }
                    ],
                    answer: "b",
                    explanation: "Speed $=\\dfrac{L}{9}$ (passing the man). For the platform: $\\dfrac{L+162}{18}=\\dfrac{L}{9}\\Rightarrow L+162=2L\\Rightarrow L=162$ m."
                },
                {
                    id: "nr10",
                    text: "If $2*3=13$, $3*4=25$ and $4*5=41$, then $5*6=?$",
                    options: [
                        { key: "a", text: "$51$" },
                        { key: "b", text: "$56$" },
                        { key: "c", text: "$61$" },
                        { key: "d", text: "$66$" }
                    ],
                    answer: "c",
                    explanation: "The rule is $a*b=a^2+b^2$: $2^2+3^2=13$, $3^2+4^2=25$, $4^2+5^2=41$, so $5^2+6^2=61$."
                }
            ]
        },

        /* ---------- 4) CHEMICAL EQUILIBRIUM (Chemistry) — 6 ---------- */
        {
            id: "chemequil",
            name: "Chemical Equilibrium",
            subject: "Chemistry",
            accent: "amber",
            blurb: "$K_p$–$K_c$ · degree of dissociation · Le Chatelier",
            questions: [
                {
                    id: "ce1",
                    text: "For the reaction $\\mathrm{N_2(g)+3H_2(g)\\rightleftharpoons 2NH_3(g)}$, the relation between $K_p$ and $K_c$ is:",
                    options: [
                        { key: "a", text: "$K_p=K_c(RT)^{2}$" },
                        { key: "b", text: "$K_p=K_c(RT)^{-2}$" },
                        { key: "c", text: "$K_p=K_c(RT)$" },
                        { key: "d", text: "$K_p=K_c$" }
                    ],
                    answer: "b",
                    explanation: "$K_p=K_c(RT)^{\\Delta n}$ with $\\Delta n=2-(1+3)=-2$, so $K_p=K_c(RT)^{-2}$."
                },
                {
                    id: "ce2",
                    text: "$1$ mol of $\\mathrm{PCl_5}$ is taken in a vessel and $40\\%$ of it dissociates at equilibrium at a total pressure of $2$ atm: $\\mathrm{PCl_5\\rightleftharpoons PCl_3+Cl_2}$. The value of $K_p$ is approximately:",
                    options: [
                        { key: "a", text: "$0.19$ atm" },
                        { key: "b", text: "$0.38$ atm" },
                        { key: "c", text: "$0.42$ atm" },
                        { key: "d", text: "$0.76$ atm" }
                    ],
                    answer: "b",
                    explanation: "With $\\alpha=0.4$, $K_p=\\dfrac{\\alpha^2 P}{1-\\alpha^2}=\\dfrac{(0.4)^2(2)}{1-0.16}=\\dfrac{0.32}{0.84}\\approx0.38$ atm."
                },
                {
                    id: "ce3",
                    text: "For the exothermic reaction $\\mathrm{2SO_2(g)+O_2(g)\\rightleftharpoons 2SO_3(g)}$, the equilibrium yield of $\\mathrm{SO_3}$ is maximized by using:",
                    options: [
                        { key: "a", text: "high temperature and low pressure" },
                        { key: "b", text: "low temperature and high pressure" },
                        { key: "c", text: "high temperature and high pressure" },
                        { key: "d", text: "low temperature and low pressure" }
                    ],
                    answer: "b",
                    explanation: "Being exothermic, a low temperature favours the forward reaction; since the products have fewer gaseous moles, high pressure also shifts equilibrium toward $\\mathrm{SO_3}$."
                },
                {
                    id: "ce4",
                    text: "A reaction has $K_c=4$. At a particular instant the reaction quotient is $Q_c=2$. The reaction will:",
                    options: [
                        { key: "a", text: "proceed in the forward direction" },
                        { key: "b", text: "proceed in the backward direction" },
                        { key: "c", text: "already be at equilibrium" },
                        { key: "d", text: "stop completely" }
                    ],
                    answer: "a",
                    explanation: "Since $Q_c<K_c$, the system has too few products, so the reaction proceeds forward until $Q_c=K_c$."
                },
                {
                    id: "ce5",
                    text: "When an inert gas is added to a gaseous equilibrium ($\\Delta n\\neq0$) at constant pressure and temperature, the equilibrium shifts toward the side having:",
                    options: [
                        { key: "a", text: "fewer moles of gas" },
                        { key: "b", text: "more moles of gas" },
                        { key: "c", text: "no shift at all" },
                        { key: "d", text: "the higher molar mass" }
                    ],
                    answer: "b",
                    explanation: "At constant pressure the added inert gas increases the volume, lowering the partial pressures; by Le Chatelier's principle the equilibrium shifts toward the side with more gaseous moles."
                },
                {
                    id: "ce6",
                    text: "For $\\mathrm{H_2(g)+I_2(g)\\rightleftharpoons 2HI(g)}$, $1$ mol of $\\mathrm{H_2}$ and $1$ mol of $\\mathrm{I_2}$ are mixed. At equilibrium $1.5$ mol of $\\mathrm{HI}$ is present. The value of $K_c$ is:",
                    options: [
                        { key: "a", text: "$9$" },
                        { key: "b", text: "$18$" },
                        { key: "c", text: "$36$" },
                        { key: "d", text: "$49$" }
                    ],
                    answer: "c",
                    explanation: "Forming $1.5$ mol HI consumes $0.75$ mol each, leaving $0.25$ mol $\\mathrm{H_2}$ and $0.25$ mol $\\mathrm{I_2}$. As $\\Delta n=0$, volume cancels: $K_c=\\dfrac{(1.5)^2}{(0.25)(0.25)}=36$."
                }
            ]
        },

        /* ---------- 5) GRAVITATION (Physics) — 4 ---------- */
        {
            id: "gravitation3",
            name: "Gravitation",
            subject: "Physics",
            accent: "blue",
            blurb: "Orbital energy · field & potential · weightlessness",
            questions: [
                {
                    id: "gv1",
                    text: "The total mechanical energy of a satellite of mass $m$ moving in a circular orbit of radius $r$ around the Earth (mass $M$) is:",
                    options: [
                        { key: "a", text: "$-\\dfrac{GMm}{r}$" },
                        { key: "b", text: "$-\\dfrac{GMm}{2r}$" },
                        { key: "c", text: "$+\\dfrac{GMm}{2r}$" },
                        { key: "d", text: "$-\\dfrac{2GMm}{r}$" }
                    ],
                    answer: "b",
                    explanation: "$KE=+\\dfrac{GMm}{2r}$ and $PE=-\\dfrac{GMm}{r}$, so the total energy $E=KE+PE=-\\dfrac{GMm}{2r}$ (negative, indicating a bound orbit)."
                },
                {
                    id: "gv2",
                    text: "Two satellites orbit the Earth in circular orbits of radii $r$ and $4r$. The ratio of their orbital speeds $v_1:v_2$ is:",
                    options: [
                        { key: "a", text: "$2:1$" },
                        { key: "b", text: "$1:2$" },
                        { key: "c", text: "$4:1$" },
                        { key: "d", text: "$1:4$" }
                    ],
                    answer: "a",
                    explanation: "Orbital speed $v=\\sqrt{\\dfrac{GM}{r}}\\propto\\dfrac{1}{\\sqrt{r}}$, so $\\dfrac{v_1}{v_2}=\\sqrt{\\dfrac{4r}{r}}=2$, i.e. $2:1$."
                },
                {
                    id: "gv3",
                    text: "The gravitational potential at the centre of a uniform solid sphere of mass $M$ and radius $R$ is:",
                    options: [
                        { key: "a", text: "$-\\dfrac{GM}{R}$" },
                        { key: "b", text: "$-\\dfrac{3GM}{2R}$" },
                        { key: "c", text: "$-\\dfrac{GM}{2R}$" },
                        { key: "d", text: "zero" }
                    ],
                    answer: "b",
                    explanation: "For a uniform solid sphere the potential at the centre is $V=-\\dfrac{3GM}{2R}$ — that is, $1.5$ times the potential at its surface."
                },
                {
                    id: "gv4",
                    text: "The angular speed at which the Earth must rotate so that the apparent weight of a body at the equator becomes zero is (take $g=9.8\\,\\mathrm{m/s^2}$, $R=6.4\\times10^{6}\\,$m):",
                    options: [
                        { key: "a", text: "$1.24\\times10^{-3}\\,$rad/s" },
                        { key: "b", text: "$7.8\\times10^{-4}\\,$rad/s" },
                        { key: "c", text: "$2.5\\times10^{-3}\\,$rad/s" },
                        { key: "d", text: "$1.1\\times10^{-2}\\,$rad/s" }
                    ],
                    answer: "a",
                    explanation: "Apparent weight vanishes when $g=\\omega^2 R$, so $\\omega=\\sqrt{\\dfrac{g}{R}}=\\sqrt{\\dfrac{9.8}{6.4\\times10^{6}}}\\approx1.24\\times10^{-3}\\,$rad/s."
                }
            ]
        }
    ]
};

const DAY4 = {
    day: 4,
    title: "Day 4",
    subtitle: "Reasoning & Life-Science Test",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) NUMERICAL REASONING (MAT) — 18 ---------- */
        {
            id: "numreason4",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Series · coding · percentages · ratios · speed · logic",
            questions: [
                {
                    id: "nr1",
                    text: "Find the next term in the series: $7,\\;14,\\;28,\\;56,\\;?$",
                    options: [
                        { key: "a", text: "$96$" },
                        { key: "b", text: "$102$" },
                        { key: "c", text: "$112$" },
                        { key: "d", text: "$120$" }
                    ],
                    answer: "c",
                    explanation: "Each term is double the previous one: $56\\times2=112$."
                },
                {
                    id: "nr2",
                    text: "Find the next term in the series: $3,\\;6,\\;11,\\;18,\\;27,\\;?$",
                    options: [
                        { key: "a", text: "$36$" },
                        { key: "b", text: "$38$" },
                        { key: "c", text: "$40$" },
                        { key: "d", text: "$42$" }
                    ],
                    answer: "b",
                    explanation: "The differences are $3,5,7,9$; the next difference is $11$, so $27+11=38$."
                },
                {
                    id: "nr3",
                    text: "Find the odd one out: $3,\\;5,\\;7,\\;9,\\;11,\\;13$",
                    options: [
                        { key: "a", text: "$5$" },
                        { key: "b", text: "$9$" },
                        { key: "c", text: "$11$" },
                        { key: "d", text: "$13$" }
                    ],
                    answer: "b",
                    explanation: "All the others are prime numbers; $9=3\\times3$ is composite."
                },
                {
                    id: "nr4",
                    text: "If CAT is coded as DBU, then DOG is coded as:",
                    options: [
                        { key: "a", text: "EPH" },
                        { key: "b", text: "EPG" },
                        { key: "c", text: "FPH" },
                        { key: "d", text: "EPI" }
                    ],
                    answer: "a",
                    explanation: "Each letter is shifted one place forward: $D\\to E$, $O\\to P$, $G\\to H$, giving EPH."
                },
                {
                    id: "nr5",
                    text: "If $30\\%$ of a number is $150$, then the number is:",
                    options: [
                        { key: "a", text: "$450$" },
                        { key: "b", text: "$500$" },
                        { key: "c", text: "$550$" },
                        { key: "d", text: "$600$" }
                    ],
                    answer: "b",
                    explanation: "The number $=\\dfrac{150}{0.30}=500$."
                },
                {
                    id: "nr6",
                    text: "An article bought for Rs 400 is sold for Rs 500. The profit percentage is:",
                    options: [
                        { key: "a", text: "$20\\%$" },
                        { key: "b", text: "$25\\%$" },
                        { key: "c", text: "$30\\%$" },
                        { key: "d", text: "$50\\%$" }
                    ],
                    answer: "b",
                    explanation: "Profit $=100$; profit $\\%=\\dfrac{100}{400}\\times100=25\\%$."
                },
                {
                    id: "nr7",
                    text: "The simple interest on Rs 2000 at $5\\%$ per annum for 3 years is:",
                    options: [
                        { key: "a", text: "Rs 250" },
                        { key: "b", text: "Rs 300" },
                        { key: "c", text: "Rs 350" },
                        { key: "d", text: "Rs 400" }
                    ],
                    answer: "b",
                    explanation: "$\\text{SI}=\\dfrac{P\\cdot R\\cdot T}{100}=\\dfrac{2000\\times5\\times3}{100}=300$."
                },
                {
                    id: "nr8",
                    text: "If $a:b=2:3$ and $b:c=4:5$, then $a:c$ is:",
                    options: [
                        { key: "a", text: "$2:5$" },
                        { key: "b", text: "$8:15$" },
                        { key: "c", text: "$2:3$" },
                        { key: "d", text: "$8:12$" }
                    ],
                    answer: "b",
                    explanation: "Make $b$ common: $a:b=8:12$ and $b:c=12:15$, so $a:c=8:15$."
                },
                {
                    id: "nr9",
                    text: "The average of the first 10 natural numbers is:",
                    options: [
                        { key: "a", text: "$5$" },
                        { key: "b", text: "$5.5$" },
                        { key: "c", text: "$6$" },
                        { key: "d", text: "$10$" }
                    ],
                    answer: "b",
                    explanation: "Average $=\\dfrac{1+2+\\dots+10}{10}=\\dfrac{55}{10}=5.5$ (or $\\dfrac{n+1}{2}=\\dfrac{11}{2}$)."
                },
                {
                    id: "nr10",
                    text: "A can do a piece of work in 10 days and B in 15 days. Working together, they will finish it in:",
                    options: [
                        { key: "a", text: "5 days" },
                        { key: "b", text: "6 days" },
                        { key: "c", text: "8 days" },
                        { key: "d", text: "12 days" }
                    ],
                    answer: "b",
                    explanation: "Combined rate $=\\dfrac{1}{10}+\\dfrac{1}{15}=\\dfrac{5}{30}=\\dfrac{1}{6}$ per day, so 6 days."
                },
                {
                    id: "nr11",
                    text: "A car travels 240 km in 4 hours. Its average speed is:",
                    options: [
                        { key: "a", text: "$50\\,$km/h" },
                        { key: "b", text: "$60\\,$km/h" },
                        { key: "c", text: "$70\\,$km/h" },
                        { key: "d", text: "$80\\,$km/h" }
                    ],
                    answer: "b",
                    explanation: "Speed $=\\dfrac{\\text{distance}}{\\text{time}}=\\dfrac{240}{4}=60\\,$km/h."
                },
                {
                    id: "nr12",
                    text: "A train 150 m long running at $54\\,$km/h crosses a pole in:",
                    options: [
                        { key: "a", text: "8 s" },
                        { key: "b", text: "10 s" },
                        { key: "c", text: "12 s" },
                        { key: "d", text: "15 s" }
                    ],
                    answer: "b",
                    explanation: "$54\\,$km/h $=15\\,$m/s; time $=\\dfrac{150}{15}=10\\,$s."
                },
                {
                    id: "nr13",
                    text: "In 40 litres of a mixture, milk and water are in the ratio $3:1$. The quantity of water in it is:",
                    options: [
                        { key: "a", text: "8 litres" },
                        { key: "b", text: "10 litres" },
                        { key: "c", text: "12 litres" },
                        { key: "d", text: "15 litres" }
                    ],
                    answer: "b",
                    explanation: "Water $=\\dfrac{1}{3+1}\\times40=\\dfrac{1}{4}\\times40=10$ litres."
                },
                {
                    id: "nr14",
                    text: "A fair die is thrown once. The probability of getting an even number is:",
                    options: [
                        { key: "a", text: "$\\dfrac16$" },
                        { key: "b", text: "$\\dfrac13$" },
                        { key: "c", text: "$\\dfrac12$" },
                        { key: "d", text: "$\\dfrac23$" }
                    ],
                    answer: "c",
                    explanation: "Even outcomes are $\\{2,4,6\\}$, so probability $=\\dfrac{3}{6}=\\dfrac12$."
                },
                {
                    id: "nr15",
                    text: "The number of different ways in which the letters of the word CAT can be arranged is:",
                    options: [
                        { key: "a", text: "$3$" },
                        { key: "b", text: "$6$" },
                        { key: "c", text: "$9$" },
                        { key: "d", text: "$12$" }
                    ],
                    answer: "b",
                    explanation: "All three letters are distinct, so the number of arrangements $=3!=6$."
                },
                {
                    id: "nr16",
                    text: "The L.C.M. of 12 and 18 is:",
                    options: [
                        { key: "a", text: "$6$" },
                        { key: "b", text: "$18$" },
                        { key: "c", text: "$36$" },
                        { key: "d", text: "$72$" }
                    ],
                    answer: "c",
                    explanation: "$12=2^2\\times3$ and $18=2\\times3^2$, so L.C.M. $=2^2\\times3^2=36$."
                },
                {
                    id: "nr17",
                    text: "The sum of the ages of A and B is 50 years. If A is 10 years older than B, then B's age is:",
                    options: [
                        { key: "a", text: "18 years" },
                        { key: "b", text: "20 years" },
                        { key: "c", text: "22 years" },
                        { key: "d", text: "25 years" }
                    ],
                    answer: "b",
                    explanation: "$A+B=50$ and $A=B+10$, so $2B+10=50\\Rightarrow B=20$ years."
                },
                {
                    id: "nr18",
                    text: "A man walks 5 km towards the north, then turns to his right and walks 3 km. Which direction is he now facing?",
                    options: [
                        { key: "a", text: "North" },
                        { key: "b", text: "South" },
                        { key: "c", text: "East" },
                        { key: "d", text: "West" }
                    ],
                    answer: "c",
                    explanation: "Facing north and turning right (clockwise) makes him face east."
                }
            ]
        },

        /* ---------- 2) ANIMAL TISSUE (Zoology) — 12 ---------- */
        {
            id: "animaltissue",
            name: "Animal Tissue",
            subject: "Zoology",
            accent: "rose",
            blurb: "Epithelial · connective · muscular · nervous tissue",
            questions: [
                {
                    id: "at1",
                    text: "Animal tissues are broadly classified into how many main types?",
                    options: [
                        { key: "a", text: "Two" },
                        { key: "b", text: "Three" },
                        { key: "c", text: "Four" },
                        { key: "d", text: "Five" }
                    ],
                    answer: "c",
                    explanation: "The four main types are epithelial, connective, muscular and nervous tissue."
                },
                {
                    id: "at2",
                    text: "The tissue that covers the external body surface and lines the internal organs and cavities is:",
                    options: [
                        { key: "a", text: "connective tissue" },
                        { key: "b", text: "epithelial tissue" },
                        { key: "c", text: "muscular tissue" },
                        { key: "d", text: "nervous tissue" }
                    ],
                    answer: "b",
                    explanation: "Epithelial tissue forms protective coverings and linings; its cells rest on a basement membrane."
                },
                {
                    id: "at3",
                    text: "Blood is an example of which type of tissue?",
                    options: [
                        { key: "a", text: "epithelial tissue" },
                        { key: "b", text: "connective tissue" },
                        { key: "c", text: "muscular tissue" },
                        { key: "d", text: "nervous tissue" }
                    ],
                    answer: "b",
                    explanation: "Blood is a fluid connective tissue with a liquid matrix (plasma) in which the blood cells are suspended."
                },
                {
                    id: "at4",
                    text: "The structural and functional unit of nervous tissue is the:",
                    options: [
                        { key: "a", text: "neuron" },
                        { key: "b", text: "nephron" },
                        { key: "c", text: "axon" },
                        { key: "d", text: "neuroglia" }
                    ],
                    answer: "a",
                    explanation: "The neuron (nerve cell) is the structural and functional unit of nervous tissue; it transmits nerve impulses."
                },
                {
                    id: "at5",
                    text: "Tendons, which connect muscles to bones, are made of:",
                    options: [
                        { key: "a", text: "yellow elastic fibrous tissue" },
                        { key: "b", text: "white fibrous connective tissue" },
                        { key: "c", text: "adipose tissue" },
                        { key: "d", text: "areolar tissue" }
                    ],
                    answer: "b",
                    explanation: "Tendons are tough, inelastic white fibrous connective tissue (rich in collagen) that join muscle to bone."
                },
                {
                    id: "at6",
                    text: "Ligaments connect:",
                    options: [
                        { key: "a", text: "muscle to bone" },
                        { key: "b", text: "bone to bone" },
                        { key: "c", text: "muscle to muscle" },
                        { key: "d", text: "nerve to muscle" }
                    ],
                    answer: "b",
                    explanation: "Ligaments are elastic (yellow fibrous) connective tissue that join one bone to another at a joint."
                },
                {
                    id: "at7",
                    text: "Cardiac muscle (heart muscle) is:",
                    options: [
                        { key: "a", text: "striated and voluntary" },
                        { key: "b", text: "striated and involuntary" },
                        { key: "c", text: "non-striated and voluntary" },
                        { key: "d", text: "non-striated and involuntary" }
                    ],
                    answer: "b",
                    explanation: "Cardiac muscle is striated in appearance but works involuntarily, contracting rhythmically throughout life."
                },
                {
                    id: "at8",
                    text: "Which of the following is a voluntary muscle?",
                    options: [
                        { key: "a", text: "skeletal (striated) muscle" },
                        { key: "b", text: "smooth muscle of the gut" },
                        { key: "c", text: "cardiac muscle" },
                        { key: "d", text: "muscle of the iris" }
                    ],
                    answer: "a",
                    explanation: "Skeletal (striated) muscle is attached to bones and is under conscious (voluntary) control."
                },
                {
                    id: "at9",
                    text: "The living bone cells embedded in the bony matrix are called:",
                    options: [
                        { key: "a", text: "chondrocytes" },
                        { key: "b", text: "osteocytes" },
                        { key: "c", text: "leucocytes" },
                        { key: "d", text: "fibroblasts" }
                    ],
                    answer: "b",
                    explanation: "Osteocytes are the mature bone cells lodged in spaces (lacunae) of the hard, calcium-rich bone matrix."
                },
                {
                    id: "at10",
                    text: "The cells found in cartilage are known as:",
                    options: [
                        { key: "a", text: "osteocytes" },
                        { key: "b", text: "chondrocytes" },
                        { key: "c", text: "neurons" },
                        { key: "d", text: "adipocytes" }
                    ],
                    answer: "b",
                    explanation: "Chondrocytes are the cells of cartilage, lying in spaces of the flexible chondrin matrix."
                },
                {
                    id: "at11",
                    text: "The connective tissue specialized for the storage of fat is:",
                    options: [
                        { key: "a", text: "areolar tissue" },
                        { key: "b", text: "adipose tissue" },
                        { key: "c", text: "tendon" },
                        { key: "d", text: "cartilage" }
                    ],
                    answer: "b",
                    explanation: "Adipose tissue is a loose connective tissue whose cells (adipocytes) store fat, acting as an energy reserve and insulator."
                },
                {
                    id: "at12",
                    text: "The junction between two adjacent neurons across which a nerve impulse is transmitted is called a:",
                    options: [
                        { key: "a", text: "synapse" },
                        { key: "b", text: "dendrite" },
                        { key: "c", text: "node of Ranvier" },
                        { key: "d", text: "myelin sheath" }
                    ],
                    answer: "a",
                    explanation: "A synapse is the functional junction between the axon terminal of one neuron and the dendrite of the next."
                }
            ]
        },

        /* ---------- 3) PLANT RESPIRATION (Botany) — 6 ---------- */
        {
            id: "plantresp4",
            name: "Plant Respiration",
            subject: "Botany",
            accent: "emerald",
            blurb: "Link reaction · RQ · ATP yield · coenzymes",
            questions: [
                {
                    id: "pr1",
                    text: "The oxidation of one molecule of NADH in the electron transport chain yields how many ATP molecules (classical value)?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "c",
                    explanation: "Each NADH gives 3 ATP and each FADH₂ gives 2 ATP when oxidized through the electron transport chain."
                },
                {
                    id: "pr2",
                    text: "In the link reaction connecting glycolysis with the Krebs cycle, pyruvic acid is converted into:",
                    options: [
                        { key: "a", text: "acetyl CoA" },
                        { key: "b", text: "citric acid" },
                        { key: "c", text: "lactic acid" },
                        { key: "d", text: "oxaloacetic acid" }
                    ],
                    answer: "a",
                    explanation: "In the mitochondrial matrix, pyruvate undergoes oxidative decarboxylation to acetyl CoA, releasing CO₂ and forming NADH."
                },
                {
                    id: "pr3",
                    text: "A respiratory quotient (RQ) greater than 1 is obtained when the respiratory substrate is:",
                    options: [
                        { key: "a", text: "a carbohydrate" },
                        { key: "b", text: "a fat" },
                        { key: "c", text: "a protein" },
                        { key: "d", text: "an organic acid" }
                    ],
                    answer: "d",
                    explanation: "Organic acids are already partly oxidized, so more CO₂ is released than O₂ consumed, giving RQ > 1."
                },
                {
                    id: "pr4",
                    text: "The coenzymes NAD and FAD, important in respiration, are derived respectively from the vitamins:",
                    options: [
                        { key: "a", text: "niacin and riboflavin" },
                        { key: "b", text: "thiamine and biotin" },
                        { key: "c", text: "ascorbic acid and folic acid" },
                        { key: "d", text: "riboflavin and niacin" }
                    ],
                    answer: "a",
                    explanation: "NAD is formed from niacin (vitamin B₃) and FAD from riboflavin (vitamin B₂)."
                },
                {
                    id: "pr5",
                    text: "The total number of CO₂ molecules released during the complete aerobic respiration of one glucose molecule is:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "8" }
                    ],
                    answer: "c",
                    explanation: "2 CO₂ are released in the link reaction (1 per pyruvate) and 4 in the Krebs cycle (2 per turn × 2), giving a total of 6."
                },
                {
                    id: "pr6",
                    text: "The respiratory pathway is described as an amphibolic pathway because it:",
                    options: [
                        { key: "a", text: "occurs only in the presence of oxygen" },
                        { key: "b", text: "involves both breakdown (catabolism) and synthesis (anabolism)" },
                        { key: "c", text: "takes place only in green cells" },
                        { key: "d", text: "produces only ATP" }
                    ],
                    answer: "b",
                    explanation: "Respiratory intermediates are both broken down for energy and withdrawn to synthesize other compounds, so the pathway is amphibolic."
                }
            ]
        },

        /* ---------- 4) GRAVITATION (Physics) — 4 ---------- */
        {
            id: "gravitation4",
            name: "Gravitation",
            subject: "Physics",
            accent: "blue",
            blurb: "Newton's law · value of G · g on Moon and at centre",
            questions: [
                {
                    id: "gv1",
                    text: "According to Newton's law of gravitation, if the distance between two masses is doubled, the gravitational force between them becomes:",
                    options: [
                        { key: "a", text: "$F/2$" },
                        { key: "b", text: "$F/4$" },
                        { key: "c", text: "$2F$" },
                        { key: "d", text: "$4F$" }
                    ],
                    answer: "b",
                    explanation: "$F\\propto\\dfrac{1}{r^2}$; doubling $r$ makes the force $\\dfrac{1}{2^2}=\\dfrac14$ times, i.e. $F/4$."
                },
                {
                    id: "gv2",
                    text: "The approximate value of the universal gravitational constant $G$ in SI units is:",
                    options: [
                        { key: "a", text: "$9.8\\,\\mathrm{N\\,m^2\\,kg^{-2}}$" },
                        { key: "b", text: "$6.67\\times10^{-11}\\,\\mathrm{N\\,m^2\\,kg^{-2}}$" },
                        { key: "c", text: "$6.67\\times10^{11}\\,\\mathrm{N\\,m^2\\,kg^{-2}}$" },
                        { key: "d", text: "$8.85\\times10^{-12}\\,\\mathrm{N\\,m^2\\,kg^{-2}}$" }
                    ],
                    answer: "b",
                    explanation: "The universal gravitational constant is $G=6.67\\times10^{-11}\\,\\mathrm{N\\,m^2\\,kg^{-2}}$."
                },
                {
                    id: "gv3",
                    text: "The weight of a body on the surface of the Moon is about how much of its weight on the Earth?",
                    options: [
                        { key: "a", text: "$\\dfrac12$" },
                        { key: "b", text: "$\\dfrac13$" },
                        { key: "c", text: "$\\dfrac16$" },
                        { key: "d", text: "$6$ times" }
                    ],
                    answer: "c",
                    explanation: "Since $g$ on the Moon is about one-sixth of that on the Earth, the weight there is about $\\dfrac16$ of the weight on Earth."
                },
                {
                    id: "gv4",
                    text: "The value of the acceleration due to gravity ($g$) at the centre of the Earth is:",
                    options: [
                        { key: "a", text: "maximum" },
                        { key: "b", text: "equal to its value at the surface" },
                        { key: "c", text: "zero" },
                        { key: "d", text: "infinite" }
                    ],
                    answer: "c",
                    explanation: "At a depth $d$, $g_d=g\\left(1-\\dfrac{d}{R}\\right)$; at the centre $d=R$, so $g=0$."
                }
            ]
        }
    ]
};

const DAY5 = {
    day: 5,
    title: "Day 5",
    subtitle: "Advanced Reasoning & Biology Test",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) NUMERICAL REASONING (MAT) — 18 (much harder) ---------- */
        {
            id: "numreason5",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Tougher series · CI · partnership · alligation · clocks · probability",
            questions: [
                {
                    id: "nr1",
                    text: "Find the next term in the series: $7,\\;26,\\;63,\\;124,\\;215,\\;?$",
                    options: [
                        { key: "a", text: "$322$" },
                        { key: "b", text: "$332$" },
                        { key: "c", text: "$342$" },
                        { key: "d", text: "$348$" }
                    ],
                    answer: "c",
                    explanation: "The terms are $n^3-1$: $2^3-1,\\,3^3-1,\\,4^3-1,\\,5^3-1,\\,6^3-1$, so the next is $7^3-1=342$."
                },
                {
                    id: "nr2",
                    text: "Find the next term in the series: $1,\\;2,\\;6,\\;21,\\;88,\\;?$",
                    options: [
                        { key: "a", text: "$415$" },
                        { key: "b", text: "$440$" },
                        { key: "c", text: "$445$" },
                        { key: "d", text: "$450$" }
                    ],
                    answer: "c",
                    explanation: "Each term follows $\\times n + n$: $1\\times1+1=2,\\;2\\times2+2=6,\\;6\\times3+3=21,\\;21\\times4+4=88,\\;88\\times5+5=445$."
                },
                {
                    id: "nr3",
                    text: "The difference between the compound interest and the simple interest on a sum for 2 years at $10\\%$ per annum is Rs 50. The sum is:",
                    options: [
                        { key: "a", text: "Rs 4000" },
                        { key: "b", text: "Rs 5000" },
                        { key: "c", text: "Rs 6000" },
                        { key: "d", text: "Rs 6250" }
                    ],
                    answer: "b",
                    explanation: "For 2 years, $\\text{CI}-\\text{SI}=P\\left(\\dfrac{r}{100}\\right)^2=P(0.1)^2=0.01P=50$, so $P=5000$."
                },
                {
                    id: "nr4",
                    text: "A, B and C invest Rs 6000, Rs 8000 and Rs 10000 respectively in a business. If the total annual profit is Rs 1200, C's share is:",
                    options: [
                        { key: "a", text: "Rs 400" },
                        { key: "b", text: "Rs 450" },
                        { key: "c", text: "Rs 500" },
                        { key: "d", text: "Rs 600" }
                    ],
                    answer: "c",
                    explanation: "Profit is shared in the ratio $6:8:10=3:4:5$. C's share $=\\dfrac{5}{12}\\times1200=500$."
                },
                {
                    id: "nr5",
                    text: "In what ratio must rice costing Rs 30 per kg be mixed with rice costing Rs 45 per kg so that the mixture is worth Rs 40 per kg?",
                    options: [
                        { key: "a", text: "$1:2$" },
                        { key: "b", text: "$2:1$" },
                        { key: "c", text: "$2:3$" },
                        { key: "d", text: "$3:2$" }
                    ],
                    answer: "a",
                    explanation: "By alligation, cheaper : dearer $=(45-40):(40-30)=5:10=1:2$."
                },
                {
                    id: "nr6",
                    text: "A is twice as efficient as B. Working together they complete a piece of work in 12 days. A alone will complete it in:",
                    options: [
                        { key: "a", text: "16 days" },
                        { key: "b", text: "18 days" },
                        { key: "c", text: "20 days" },
                        { key: "d", text: "24 days" }
                    ],
                    answer: "b",
                    explanation: "If B's rate is $x$, A's is $2x$; together $3x=\\dfrac1{12}\\Rightarrow x=\\dfrac1{36}$. A's rate $=2x=\\dfrac1{18}$, so A alone takes 18 days."
                },
                {
                    id: "nr7",
                    text: "A pipe can fill a tank in 6 hours, but due to a leak it takes 8 hours to fill. The leak alone can empty the full tank in:",
                    options: [
                        { key: "a", text: "18 hours" },
                        { key: "b", text: "20 hours" },
                        { key: "c", text: "24 hours" },
                        { key: "d", text: "48 hours" }
                    ],
                    answer: "c",
                    explanation: "$\\dfrac16-\\dfrac1L=\\dfrac18\\Rightarrow\\dfrac1L=\\dfrac16-\\dfrac18=\\dfrac{1}{24}$, so the leak empties the tank in 24 hours."
                },
                {
                    id: "nr8",
                    text: "A man rows 30 km downstream and 18 km upstream, each in 3 hours. His speed in still water is:",
                    options: [
                        { key: "a", text: "$6\\,$km/h" },
                        { key: "b", text: "$7\\,$km/h" },
                        { key: "c", text: "$8\\,$km/h" },
                        { key: "d", text: "$9\\,$km/h" }
                    ],
                    answer: "c",
                    explanation: "Downstream speed $=\\dfrac{30}{3}=10$, upstream $=\\dfrac{18}{3}=6$. Still-water speed $=\\dfrac{10+6}{2}=8\\,$km/h."
                },
                {
                    id: "nr9",
                    text: "A bag contains 4 red and 6 blue balls. If two balls are drawn at random, the probability that both are red is:",
                    options: [
                        { key: "a", text: "$\\dfrac{1}{15}$" },
                        { key: "b", text: "$\\dfrac{2}{15}$" },
                        { key: "c", text: "$\\dfrac{1}{5}$" },
                        { key: "d", text: "$\\dfrac{4}{15}$" }
                    ],
                    answer: "b",
                    explanation: "$P=\\dfrac{\\binom{4}{2}}{\\binom{10}{2}}=\\dfrac{6}{45}=\\dfrac{2}{15}$."
                },
                {
                    id: "nr10",
                    text: "In how many ways can 5 boys and 3 girls be seated in a row so that all the 3 girls sit together?",
                    options: [
                        { key: "a", text: "$720$" },
                        { key: "b", text: "$2160$" },
                        { key: "c", text: "$4320$" },
                        { key: "d", text: "$5040$" }
                    ],
                    answer: "c",
                    explanation: "Treat the 3 girls as one block: $6$ units arrange in $6!=720$ ways, and the girls among themselves in $3!=6$ ways, giving $720\\times6=4320$."
                },
                {
                    id: "nr11",
                    text: "A shopkeeper marks his goods $40\\%$ above the cost price and then allows a discount of $25\\%$. His profit percent is:",
                    options: [
                        { key: "a", text: "$4\\%$" },
                        { key: "b", text: "$5\\%$" },
                        { key: "c", text: "$10\\%$" },
                        { key: "d", text: "$15\\%$" }
                    ],
                    answer: "b",
                    explanation: "Let cost $=100$. Marked price $=140$; selling price $=140\\times0.75=105$, so profit $=5\\%$."
                },
                {
                    id: "nr12",
                    text: "The population of a town increases by $10\\%$ in the first year and decreases by $10\\%$ in the next year. If the population after these two years is 9900, the original population was:",
                    options: [
                        { key: "a", text: "$9800$" },
                        { key: "b", text: "$10000$" },
                        { key: "c", text: "$10100$" },
                        { key: "d", text: "$11000$" }
                    ],
                    answer: "b",
                    explanation: "$P\\times1.1\\times0.9=0.99P=9900\\Rightarrow P=10000$."
                },
                {
                    id: "nr13",
                    text: "The average weight of 24 students in a class is 35 kg. When the teacher's weight is included, the average rises by 0.5 kg. The teacher's weight is:",
                    options: [
                        { key: "a", text: "$45\\,$kg" },
                        { key: "b", text: "$47\\,$kg" },
                        { key: "c", text: "$47.5\\,$kg" },
                        { key: "d", text: "$50\\,$kg" }
                    ],
                    answer: "c",
                    explanation: "Teacher's weight $=25\\times35.5-24\\times35=887.5-840=47.5\\,$kg."
                },
                {
                    id: "nr14",
                    text: "The present ages of A and B are in the ratio $4:5$. Ten years ago the ratio of their ages was $3:4$. The present age of B is:",
                    options: [
                        { key: "a", text: "$40$ years" },
                        { key: "b", text: "$45$ years" },
                        { key: "c", text: "$50$ years" },
                        { key: "d", text: "$55$ years" }
                    ],
                    answer: "c",
                    explanation: "$\\dfrac{4x-10}{5x-10}=\\dfrac34\\Rightarrow16x-40=15x-30\\Rightarrow x=10$, so B $=5x=50$ years."
                },
                {
                    id: "nr15",
                    text: "At what time between 3 o'clock and 4 o'clock do the hands of a clock coincide (point in the same direction)?",
                    options: [
                        { key: "a", text: "$3\\!:\\!15$" },
                        { key: "b", text: "$3\\!:\\!16\\tfrac{2}{11}$" },
                        { key: "c", text: "$3\\!:\\!16\\tfrac{4}{11}$" },
                        { key: "d", text: "$3\\!:\\!18$" }
                    ],
                    answer: "c",
                    explanation: "At 3 o'clock the hour hand is $90^\\circ$ ahead; the hands coincide when $5.5M=90\\Rightarrow M=\\dfrac{180}{11}=16\\tfrac{4}{11}$ min, i.e. $3\\!:\\!16\\tfrac{4}{11}$."
                },
                {
                    id: "nr16",
                    text: "If 1st January 2008 was a Tuesday, then 1st January 2009 was a:",
                    options: [
                        { key: "a", text: "Wednesday" },
                        { key: "b", text: "Thursday" },
                        { key: "c", text: "Friday" },
                        { key: "d", text: "Tuesday" }
                    ],
                    answer: "b",
                    explanation: "2008 is a leap year (366 days), giving 2 odd days, so the day advances by 2: Tuesday $+\\,2=$ Thursday."
                },
                {
                    id: "nr17",
                    text: "The digit in the units place of $7^{72}$ is:",
                    options: [
                        { key: "a", text: "$1$" },
                        { key: "b", text: "$3$" },
                        { key: "c", text: "$7$" },
                        { key: "d", text: "$9$" }
                    ],
                    answer: "a",
                    explanation: "The unit digits of powers of 7 cycle as $7,9,3,1$ with period 4. Since $72$ is divisible by 4, the unit digit is $1$."
                },
                {
                    id: "nr18",
                    text: "A sum of money doubles itself in 8 years at simple interest. In how many years will it become three times itself?",
                    options: [
                        { key: "a", text: "$12$ years" },
                        { key: "b", text: "$16$ years" },
                        { key: "c", text: "$20$ years" },
                        { key: "d", text: "$24$ years" }
                    ],
                    answer: "b",
                    explanation: "Doubling means interest $=P$ in 8 years (rate $12.5\\%$). To triple, interest must be $2P$, which takes $2\\times8=16$ years at simple interest."
                }
            ]
        },

        /* ---------- 2) ANIMAL TISSUE (Zoology) — 12 (much harder) ---------- */
        {
            id: "animaltissue5",
            name: "Animal Tissue",
            subject: "Zoology",
            accent: "rose",
            blurb: "Epithelium types · sarcomere · bone histology · neuroglia",
            questions: [
                {
                    id: "at1",
                    text: "Intercalated discs are a distinguishing histological feature of:",
                    options: [
                        { key: "a", text: "skeletal muscle" },
                        { key: "b", text: "smooth muscle" },
                        { key: "c", text: "cardiac muscle" },
                        { key: "d", text: "areolar tissue" }
                    ],
                    answer: "c",
                    explanation: "Intercalated discs are specialized junctions between adjacent cardiac muscle fibres that allow rapid, coordinated impulse conduction."
                },
                {
                    id: "at2",
                    text: "The epithelium that lines the urinary bladder and permits considerable stretching is:",
                    options: [
                        { key: "a", text: "simple squamous epithelium" },
                        { key: "b", text: "columnar epithelium" },
                        { key: "c", text: "transitional epithelium" },
                        { key: "d", text: "cuboidal epithelium" }
                    ],
                    answer: "c",
                    explanation: "Transitional epithelium (urothelium) can change shape, allowing the bladder wall to stretch when filled and recoil when emptied."
                },
                {
                    id: "at3",
                    text: "The functional contractile unit of a striated muscle fibre, lying between two successive Z-lines, is the:",
                    options: [
                        { key: "a", text: "sarcomere" },
                        { key: "b", text: "sarcolemma" },
                        { key: "c", text: "sarcoplasm" },
                        { key: "d", text: "myofibril" }
                    ],
                    answer: "a",
                    explanation: "The sarcomere, the region between two Z-lines, is the basic contractile unit of striated muscle."
                },
                {
                    id: "at4",
                    text: "Histamine and heparin are secreted by which cells of areolar (loose) connective tissue?",
                    options: [
                        { key: "a", text: "fibroblasts" },
                        { key: "b", text: "macrophages" },
                        { key: "c", text: "mast cells" },
                        { key: "d", text: "adipocytes" }
                    ],
                    answer: "c",
                    explanation: "Mast cells of areolar tissue secrete heparin (an anticoagulant) and histamine (a vasodilator released in inflammation)."
                },
                {
                    id: "at5",
                    text: "The white (inelastic) fibres of connective tissue are chiefly composed of the protein:",
                    options: [
                        { key: "a", text: "elastin" },
                        { key: "b", text: "collagen" },
                        { key: "c", text: "keratin" },
                        { key: "d", text: "myosin" }
                    ],
                    answer: "b",
                    explanation: "White fibres are made of collagen, which gives tendons and other dense connective tissue their high tensile strength."
                },
                {
                    id: "at6",
                    text: "Nissl granules (Nissl bodies) are characteristically found in the cytoplasm of:",
                    options: [
                        { key: "a", text: "muscle fibres" },
                        { key: "b", text: "neurons (cyton)" },
                        { key: "c", text: "osteocytes" },
                        { key: "d", text: "red blood cells" }
                    ],
                    answer: "b",
                    explanation: "Nissl granules are masses of rough endoplasmic reticulum and ribosomes present in the cell body (cyton) of neurons."
                },
                {
                    id: "at7",
                    text: "In the peripheral nervous system, the myelin sheath around a nerve fibre is produced by:",
                    options: [
                        { key: "a", text: "Schwann cells" },
                        { key: "b", text: "astrocytes" },
                        { key: "c", text: "microglia" },
                        { key: "d", text: "oligodendrocytes" }
                    ],
                    answer: "a",
                    explanation: "Schwann cells form the myelin sheath of peripheral nerve fibres; in the central nervous system this is done by oligodendrocytes."
                },
                {
                    id: "at8",
                    text: "The type of cartilage that covers the articular surfaces at the ends of long bones is:",
                    options: [
                        { key: "a", text: "elastic cartilage" },
                        { key: "b", text: "hyaline cartilage" },
                        { key: "c", text: "fibrous cartilage" },
                        { key: "d", text: "calcified cartilage" }
                    ],
                    answer: "b",
                    explanation: "Smooth hyaline cartilage covers the articular surfaces of long bones, reducing friction at the joints."
                },
                {
                    id: "at9",
                    text: "In compact bone, the concentric lamellae of bony matrix are arranged around a central canal known as the:",
                    options: [
                        { key: "a", text: "Haversian canal" },
                        { key: "b", text: "lacuna" },
                        { key: "c", text: "canaliculus" },
                        { key: "d", text: "Volkmann's canal" }
                    ],
                    answer: "a",
                    explanation: "Each osteon (Haversian system) consists of lamellae arranged around a central Haversian canal that carries blood vessels and nerves."
                },
                {
                    id: "at10",
                    text: "The small fluid-filled spaces in the bony matrix that lodge the osteocytes are called:",
                    options: [
                        { key: "a", text: "lacunae" },
                        { key: "b", text: "canaliculi" },
                        { key: "c", text: "trabeculae" },
                        { key: "d", text: "sinuses" }
                    ],
                    answer: "a",
                    explanation: "Osteocytes occupy small cavities called lacunae, which are interconnected by fine channels called canaliculi."
                },
                {
                    id: "at11",
                    text: "Mucus-secreting goblet cells are modified cells found in which type of epithelium?",
                    options: [
                        { key: "a", text: "squamous epithelium" },
                        { key: "b", text: "columnar epithelium" },
                        { key: "c", text: "muscular tissue" },
                        { key: "d", text: "nervous tissue" }
                    ],
                    answer: "b",
                    explanation: "Goblet cells are unicellular mucous glands found among columnar epithelial cells lining the gut and respiratory tract."
                },
                {
                    id: "at12",
                    text: "A muscle whose fibres are spindle-shaped, uninucleate and lack striations is:",
                    options: [
                        { key: "a", text: "skeletal muscle" },
                        { key: "b", text: "cardiac muscle" },
                        { key: "c", text: "smooth muscle" },
                        { key: "d", text: "striated muscle" }
                    ],
                    answer: "c",
                    explanation: "Smooth (involuntary) muscle fibres are spindle-shaped, have a single central nucleus and show no cross-striations."
                }
            ]
        },

        /* ---------- 3) PLANT RESPIRATION (Botany) — 6 ---------- */
        {
            id: "plantresp5",
            name: "Plant Respiration",
            subject: "Botany",
            accent: "emerald",
            blurb: "Chemiosmosis · EMP pathway · ATP yields · Krebs intermediates",
            questions: [
                {
                    id: "pr1",
                    text: "The chemiosmotic hypothesis, which explains ATP synthesis using a proton gradient across the inner mitochondrial membrane, was proposed by:",
                    options: [
                        { key: "a", text: "Peter Mitchell" },
                        { key: "b", text: "Hans Krebs" },
                        { key: "c", text: "Melvin Calvin" },
                        { key: "d", text: "Otto Warburg" }
                    ],
                    answer: "a",
                    explanation: "Peter Mitchell proposed the chemiosmotic hypothesis, for which he was awarded the Nobel Prize."
                },
                {
                    id: "pr2",
                    text: "The oxidation of one molecule of FADH₂ through the electron transport chain yields how many ATP molecules (classical value)?",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "FADH₂ enters the chain at a lower energy level than NADH, so it yields 2 ATP (against 3 ATP for NADH)."
                },
                {
                    id: "pr3",
                    text: "The number of turns of the Krebs cycle needed to completely oxidize one molecule of glucose is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "One glucose yields two pyruvate, hence two acetyl CoA, so the Krebs cycle must turn twice per glucose."
                },
                {
                    id: "pr4",
                    text: "Glycolysis is also known as the:",
                    options: [
                        { key: "a", text: "EMP pathway" },
                        { key: "b", text: "HMP pathway" },
                        { key: "c", text: "TCA cycle" },
                        { key: "d", text: "C₄ pathway" }
                    ],
                    answer: "a",
                    explanation: "Glycolysis is called the EMP pathway after Embden, Meyerhof and Parnas, who described it."
                },
                {
                    id: "pr5",
                    text: "The number of oxygen molecules consumed during the complete aerobic oxidation of one glucose molecule is:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "8" }
                    ],
                    answer: "c",
                    explanation: "From $C_6H_{12}O_6+6O_2\\to6CO_2+6H_2O$, six molecules of oxygen are consumed per glucose."
                },
                {
                    id: "pr6",
                    text: "In the Krebs cycle, acetyl CoA (2C) combines with oxaloacetic acid (4C) to form the first stable compound:",
                    options: [
                        { key: "a", text: "citric acid (6C)" },
                        { key: "b", text: "succinic acid (4C)" },
                        { key: "c", text: "malic acid (4C)" },
                        { key: "d", text: "pyruvic acid (3C)" }
                    ],
                    answer: "a",
                    explanation: "Acetyl CoA (2C) condenses with oxaloacetate (4C) to give the 6-carbon citric acid, the first product of the cycle."
                }
            ]
        },

        /* ---------- 4) GRAVITATION (Physics) — 4 ---------- */
        {
            id: "gravitation5",
            name: "Gravitation",
            subject: "Physics",
            accent: "blue",
            blurb: "Geostationary period · g on other planets · escape speed · free fall",
            questions: [
                {
                    id: "gv1",
                    text: "The time period of revolution of a geostationary (geosynchronous) satellite around the Earth is:",
                    options: [
                        { key: "a", text: "1 hour" },
                        { key: "b", text: "12 hours" },
                        { key: "c", text: "24 hours" },
                        { key: "d", text: "365 days" }
                    ],
                    answer: "c",
                    explanation: "A geostationary satellite has the same period as the Earth's rotation, 24 hours, so it appears fixed over one point on the equator."
                },
                {
                    id: "gv2",
                    text: "The acceleration due to gravity on the surface of a planet whose mass and radius are each twice those of the Earth (with surface value $g$) is:",
                    options: [
                        { key: "a", text: "$2g$" },
                        { key: "b", text: "$g$" },
                        { key: "c", text: "$g/2$" },
                        { key: "d", text: "$g/4$" }
                    ],
                    answer: "c",
                    explanation: "$g=\\dfrac{GM}{R^2}$, so $g'=\\dfrac{G(2M)}{(2R)^2}=\\dfrac{2GM}{4R^2}=\\dfrac{g}{2}$."
                },
                {
                    id: "gv3",
                    text: "The escape velocity from the surface of the Earth is approximately:",
                    options: [
                        { key: "a", text: "$7.9\\,$km/s" },
                        { key: "b", text: "$9.8\\,$km/s" },
                        { key: "c", text: "$11.2\\,$km/s" },
                        { key: "d", text: "$22.4\\,$km/s" }
                    ],
                    answer: "c",
                    explanation: "$v_e=\\sqrt{2gR}\\approx11.2\\,$km/s for the Earth."
                },
                {
                    id: "gv4",
                    text: "An astronaut inside an orbiting satellite experiences weightlessness because:",
                    options: [
                        { key: "a", text: "there is no gravity in space" },
                        { key: "b", text: "the astronaut and the satellite fall freely with the same acceleration" },
                        { key: "c", text: "the satellite is beyond the Earth's gravitational field" },
                        { key: "d", text: "the astronaut's mass becomes zero" }
                    ],
                    answer: "b",
                    explanation: "Both the satellite and the astronaut accelerate toward the Earth at the same rate (free fall), so the normal reaction — and hence the apparent weight — is zero."
                }
            ]
        }
    ]
};

const DAY6 = {
    day: 6,
    title: "Day 6",
    subtitle: "Aptitude, Calculus & Solid State",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) NUMERICAL REASONING (MAT) — 32 ---------- */
        {
            id: "numreason6",
            name: "Numerical Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "Series · coding · blood relations · profit · speed · probability",
            questions: [
                {
                    id: "nr1",
                    text: "Find the next term in the series: $6,\\;11,\\;21,\\;36,\\;56,\\;?$",
                    options: [
                        { key: "a", text: "$71$" },
                        { key: "b", text: "$76$" },
                        { key: "c", text: "$81$" },
                        { key: "d", text: "$86$" }
                    ],
                    answer: "c",
                    explanation: "The successive differences are $5,10,15,20$; the next difference is $25$, so $56+25=81$."
                },
                {
                    id: "nr2",
                    text: "Find the next term in the series: $0,\\;6,\\;24,\\;60,\\;120,\\;?$",
                    options: [
                        { key: "a", text: "$180$" },
                        { key: "b", text: "$200$" },
                        { key: "c", text: "$210$" },
                        { key: "d", text: "$240$" }
                    ],
                    answer: "c",
                    explanation: "The terms are $n^3-n$: $1^3-1,\\,2^3-2,\\,3^3-3,\\,4^3-4,\\,5^3-5$, so the next is $6^3-6=210$."
                },
                {
                    id: "nr3",
                    text: "Find the next term in the series: $1,\\;3,\\;6,\\;10,\\;15,\\;?$",
                    options: [
                        { key: "a", text: "$18$" },
                        { key: "b", text: "$20$" },
                        { key: "c", text: "$21$" },
                        { key: "d", text: "$24$" }
                    ],
                    answer: "c",
                    explanation: "These are triangular numbers; the differences increase by 1, so $15+6=21$."
                },
                {
                    id: "nr4",
                    text: "Find the next term in the series: $3,\\;9,\\;27,\\;81,\\;?$",
                    options: [
                        { key: "a", text: "$162$" },
                        { key: "b", text: "$216$" },
                        { key: "c", text: "$243$" },
                        { key: "d", text: "$324$" }
                    ],
                    answer: "c",
                    explanation: "Each term is multiplied by 3 (powers of 3): $81\\times3=243$."
                },
                {
                    id: "nr5",
                    text: "Find the next term in the series: $120,\\;99,\\;80,\\;63,\\;48,\\;?$",
                    options: [
                        { key: "a", text: "$35$" },
                        { key: "b", text: "$36$" },
                        { key: "c", text: "$37$" },
                        { key: "d", text: "$33$" }
                    ],
                    answer: "a",
                    explanation: "The terms are $n^2-1$ counting down: $11^2-1,\\,10^2-1,\\,9^2-1,\\,8^2-1,\\,7^2-1$, so the next is $6^2-1=35$."
                },
                {
                    id: "nr6",
                    text: "Which term is wrong in the series: $2,\\;5,\\;10,\\;17,\\;26,\\;37,\\;50,\\;64$?",
                    options: [
                        { key: "a", text: "$26$" },
                        { key: "b", text: "$37$" },
                        { key: "c", text: "$50$" },
                        { key: "d", text: "$64$" }
                    ],
                    answer: "d",
                    explanation: "The terms follow $n^2+1$, which gives $\\dots,50,65$. So $64$ is wrong; it should be $65$."
                },
                {
                    id: "nr7",
                    text: "In a certain code, FLOWER is written as GMPXFS. How is GARDEN written in that code?",
                    options: [
                        { key: "a", text: "HBSEFO" },
                        { key: "b", text: "HBSDFO" },
                        { key: "c", text: "HBTEFO" },
                        { key: "d", text: "HCSEFO" }
                    ],
                    answer: "a",
                    explanation: "Each letter is shifted one place forward, so GARDEN becomes HBSEFO."
                },
                {
                    id: "nr8",
                    text: "In a certain code, TEACHER is written as VGCEJGT. How is CHILDREN written in that code?",
                    options: [
                        { key: "a", text: "EJKNEFGP" },
                        { key: "b", text: "EJKNFTGP" },
                        { key: "c", text: "EJKMFTGP" },
                        { key: "d", text: "EKJNFTGP" }
                    ],
                    answer: "b",
                    explanation: "Each letter is shifted two places forward ($T\\to V$, etc.), so CHILDREN becomes EJKNFTGP."
                },
                {
                    id: "nr9",
                    text: "Pointing to a photograph, a man said, \"I have no brother or sister, but that man's father is my father's son.\" Whose photograph was it?",
                    options: [
                        { key: "a", text: "His own" },
                        { key: "b", text: "His son" },
                        { key: "c", text: "His father" },
                        { key: "d", text: "His nephew" }
                    ],
                    answer: "b",
                    explanation: "With no brothers, \"my father's son\" is the man himself, so \"that man's father\" is him — the photo is of his son."
                },
                {
                    id: "nr10",
                    text: "A is B's sister, C is B's mother, D is C's father and E is D's mother. Then A is the ___ of D.",
                    options: [
                        { key: "a", text: "grandmother" },
                        { key: "b", text: "granddaughter" },
                        { key: "c", text: "daughter" },
                        { key: "d", text: "great-granddaughter" }
                    ],
                    answer: "b",
                    explanation: "D is the father of C, who is the mother of A; hence D is A's (maternal) grandfather, making A the granddaughter of D."
                },
                {
                    id: "nr11",
                    text: "A man walks 3 km towards the north and then 4 km towards the east. How far is he from the starting point?",
                    options: [
                        { key: "a", text: "$5\\,$km" },
                        { key: "b", text: "$7\\,$km" },
                        { key: "c", text: "$6\\,$km" },
                        { key: "d", text: "$1\\,$km" }
                    ],
                    answer: "a",
                    explanation: "The displacement is the hypotenuse: $\\sqrt{3^2+4^2}=\\sqrt{25}=5\\,$km."
                },
                {
                    id: "nr12",
                    text: "If the price of sugar increases by $25\\%$, by what percentage must a family reduce its consumption so that the expenditure remains unchanged?",
                    options: [
                        { key: "a", text: "$20\\%$" },
                        { key: "b", text: "$25\\%$" },
                        { key: "c", text: "$\\tfrac{1}{4}\\%$" },
                        { key: "d", text: "$15\\%$" }
                    ],
                    answer: "a",
                    explanation: "Required reduction $=\\dfrac{25}{100+25}\\times100=\\dfrac{25}{125}\\times100=20\\%$."
                },
                {
                    id: "nr13",
                    text: "In an examination, $40\\%$ marks are required to pass. A student secured 178 marks and failed by 22 marks. The maximum marks are:",
                    options: [
                        { key: "a", text: "$400$" },
                        { key: "b", text: "$450$" },
                        { key: "c", text: "$500$" },
                        { key: "d", text: "$550$" }
                    ],
                    answer: "c",
                    explanation: "Pass mark $=178+22=200=40\\%$ of the maximum, so maximum $=\\dfrac{200}{0.40}=500$."
                },
                {
                    id: "nr14",
                    text: "By selling an article for Rs 480, a man loses $20\\%$. To gain $20\\%$, he should sell it for:",
                    options: [
                        { key: "a", text: "Rs 600" },
                        { key: "b", text: "Rs 660" },
                        { key: "c", text: "Rs 720" },
                        { key: "d", text: "Rs 768" }
                    ],
                    answer: "c",
                    explanation: "Cost price $=\\dfrac{480}{0.8}=600$; to gain $20\\%$, sell at $600\\times1.2=720$."
                },
                {
                    id: "nr15",
                    text: "A dishonest dealer claims to sell goods at cost price but uses a weight of 800 g for 1 kg. His gain percent is:",
                    options: [
                        { key: "a", text: "$20\\%$" },
                        { key: "b", text: "$25\\%$" },
                        { key: "c", text: "$\\tfrac{2}{3}\\%$" },
                        { key: "d", text: "$80\\%$" }
                    ],
                    answer: "b",
                    explanation: "Gain $=\\dfrac{1000-800}{800}\\times100=25\\%$."
                },
                {
                    id: "nr16",
                    text: "If $A:B=2:3$, $B:C=4:5$ and $C:D=6:7$, then $A:D$ is:",
                    options: [
                        { key: "a", text: "$16:35$" },
                        { key: "b", text: "$8:21$" },
                        { key: "c", text: "$2:7$" },
                        { key: "d", text: "$12:35$" }
                    ],
                    answer: "a",
                    explanation: "$\\dfrac{A}{D}=\\dfrac{A}{B}\\cdot\\dfrac{B}{C}\\cdot\\dfrac{C}{D}=\\dfrac23\\cdot\\dfrac45\\cdot\\dfrac67=\\dfrac{48}{105}=\\dfrac{16}{35}$."
                },
                {
                    id: "nr17",
                    text: "Rs 1300 is divided among A, B and C in the ratio $\\tfrac12:\\tfrac13:\\tfrac14$. A's share is:",
                    options: [
                        { key: "a", text: "Rs 400" },
                        { key: "b", text: "Rs 500" },
                        { key: "c", text: "Rs 600" },
                        { key: "d", text: "Rs 300" }
                    ],
                    answer: "c",
                    explanation: "The ratio $\\tfrac12:\\tfrac13:\\tfrac14=6:4:3$ (total 13), so A's share $=\\dfrac{6}{13}\\times1300=600$."
                },
                {
                    id: "nr18",
                    text: "The average of five consecutive odd numbers is 35. The largest of these numbers is:",
                    options: [
                        { key: "a", text: "$37$" },
                        { key: "b", text: "$39$" },
                        { key: "c", text: "$41$" },
                        { key: "d", text: "$43$" }
                    ],
                    answer: "b",
                    explanation: "For consecutive numbers the average is the middle term, so the numbers are $31,33,35,37,39$; the largest is 39."
                },
                {
                    id: "nr19",
                    text: "A batsman has an average of 36 runs in 16 innings. In the 17th innings he scores 70 runs. His new average is:",
                    options: [
                        { key: "a", text: "$37$" },
                        { key: "b", text: "$38$" },
                        { key: "c", text: "$39$" },
                        { key: "d", text: "$40$" }
                    ],
                    answer: "b",
                    explanation: "New average $=\\dfrac{16\\times36+70}{17}=\\dfrac{646}{17}=38$."
                },
                {
                    id: "nr20",
                    text: "If 10 men can complete a piece of work in 12 days, then 8 men can complete the same work in:",
                    options: [
                        { key: "a", text: "$14$ days" },
                        { key: "b", text: "$15$ days" },
                        { key: "c", text: "$16$ days" },
                        { key: "d", text: "$18$ days" }
                    ],
                    answer: "b",
                    explanation: "Men $\\times$ days is constant: $10\\times12=120$, so $8$ men take $\\dfrac{120}{8}=15$ days."
                },
                {
                    id: "nr21",
                    text: "A can do a work in 9 days and B in 18 days. They begin together, but A leaves 3 days before the work is finished. The work lasts:",
                    options: [
                        { key: "a", text: "$6$ days" },
                        { key: "b", text: "$7$ days" },
                        { key: "c", text: "$8$ days" },
                        { key: "d", text: "$9$ days" }
                    ],
                    answer: "c",
                    explanation: "If it lasts $t$ days, A works $(t-3)$: $\\dfrac{t-3}{9}+\\dfrac{t}{18}=1\\Rightarrow 2(t-3)+t=18\\Rightarrow 3t=24\\Rightarrow t=8$."
                },
                {
                    id: "nr22",
                    text: "A train running at $72\\,$km/h crosses a platform 250 m long in 20 seconds. The length of the train is:",
                    options: [
                        { key: "a", text: "$120\\,$m" },
                        { key: "b", text: "$150\\,$m" },
                        { key: "c", text: "$180\\,$m" },
                        { key: "d", text: "$200\\,$m" }
                    ],
                    answer: "b",
                    explanation: "$72\\,$km/h $=20\\,$m/s; distance covered $=20\\times20=400\\,$m; train length $=400-250=150\\,$m."
                },
                {
                    id: "nr23",
                    text: "Two trains 120 m and 80 m long run in opposite directions at $42\\,$km/h and $30\\,$km/h. The time they take to cross each other is:",
                    options: [
                        { key: "a", text: "$8\\,$s" },
                        { key: "b", text: "$10\\,$s" },
                        { key: "c", text: "$12\\,$s" },
                        { key: "d", text: "$15\\,$s" }
                    ],
                    answer: "b",
                    explanation: "Relative speed $=72\\,$km/h $=20\\,$m/s; total length $=200\\,$m; time $=\\dfrac{200}{20}=10\\,$s."
                },
                {
                    id: "nr24",
                    text: "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both are opened together, the tank will be filled in:",
                    options: [
                        { key: "a", text: "$10$ min" },
                        { key: "b", text: "$12$ min" },
                        { key: "c", text: "$15$ min" },
                        { key: "d", text: "$25$ min" }
                    ],
                    answer: "b",
                    explanation: "Combined rate $=\\dfrac{1}{20}+\\dfrac{1}{30}=\\dfrac{5}{60}=\\dfrac{1}{12}$ per minute, so 12 minutes."
                },
                {
                    id: "nr25",
                    text: "A boat covers 16 km downstream in 2 hours and returns the same distance upstream in 4 hours. The speed of the boat in still water is:",
                    options: [
                        { key: "a", text: "$5\\,$km/h" },
                        { key: "b", text: "$6\\,$km/h" },
                        { key: "c", text: "$7\\,$km/h" },
                        { key: "d", text: "$8\\,$km/h" }
                    ],
                    answer: "b",
                    explanation: "Downstream speed $=\\dfrac{16}{2}=8$, upstream $=\\dfrac{16}{4}=4$; still-water speed $=\\dfrac{8+4}{2}=6\\,$km/h."
                },
                {
                    id: "nr26",
                    text: "At what rate of simple interest per annum will Rs 1200 amount to Rs 1440 in 4 years?",
                    options: [
                        { key: "a", text: "$4\\%$" },
                        { key: "b", text: "$5\\%$" },
                        { key: "c", text: "$6\\%$" },
                        { key: "d", text: "$8\\%$" }
                    ],
                    answer: "b",
                    explanation: "Interest $=1440-1200=240$; rate $=\\dfrac{240\\times100}{1200\\times4}=5\\%$."
                },
                {
                    id: "nr27",
                    text: "The compound interest on Rs 5000 at $10\\%$ per annum for 2 years is:",
                    options: [
                        { key: "a", text: "Rs 1000" },
                        { key: "b", text: "Rs 1025" },
                        { key: "c", text: "Rs 1050" },
                        { key: "d", text: "Rs 1100" }
                    ],
                    answer: "c",
                    explanation: "Amount $=5000(1.1)^2=6050$; compound interest $=6050-5000=1050$."
                },
                {
                    id: "nr28",
                    text: "A card is drawn at random from a well-shuffled pack of 52 cards. The probability that it is a king or a queen is:",
                    options: [
                        { key: "a", text: "$\\dfrac{1}{13}$" },
                        { key: "b", text: "$\\dfrac{2}{13}$" },
                        { key: "c", text: "$\\dfrac{4}{13}$" },
                        { key: "d", text: "$\\dfrac{1}{26}$" }
                    ],
                    answer: "b",
                    explanation: "There are 4 kings and 4 queens, so $P=\\dfrac{8}{52}=\\dfrac{2}{13}$."
                },
                {
                    id: "nr29",
                    text: "How many three-digit numbers can be formed using the digits 1 to 9 if no digit is repeated?",
                    options: [
                        { key: "a", text: "$504$" },
                        { key: "b", text: "$648$" },
                        { key: "c", text: "$720$" },
                        { key: "d", text: "$729$" }
                    ],
                    answer: "a",
                    explanation: "The hundreds, tens and units places can be filled in $9\\times8\\times7=504$ ways."
                },
                {
                    id: "nr30",
                    text: "A vessel contains 60 litres of milk. 12 litres is drawn out and replaced with water; this is then done once more. The quantity of milk now left is:",
                    options: [
                        { key: "a", text: "$36\\,$L" },
                        { key: "b", text: "$38.4\\,$L" },
                        { key: "c", text: "$40\\,$L" },
                        { key: "d", text: "$43.2\\,$L" }
                    ],
                    answer: "b",
                    explanation: "Milk left $=60\\left(1-\\dfrac{12}{60}\\right)^2=60(0.8)^2=60\\times0.64=38.4\\,$L."
                },
                {
                    id: "nr31",
                    text: "How many numbers between 100 and 200 are exactly divisible by 7?",
                    options: [
                        { key: "a", text: "$13$" },
                        { key: "b", text: "$14$" },
                        { key: "c", text: "$15$" },
                        { key: "d", text: "$16$" }
                    ],
                    answer: "b",
                    explanation: "They run from 105 to 196: count $=\\dfrac{196-105}{7}+1=13+1=14$."
                },
                {
                    id: "nr32",
                    text: "The sum of two numbers is 25 and their product is 144. The two numbers are:",
                    options: [
                        { key: "a", text: "$10$ and $15$" },
                        { key: "b", text: "$12$ and $13$" },
                        { key: "c", text: "$9$ and $16$" },
                        { key: "d", text: "$8$ and $17$" }
                    ],
                    answer: "c",
                    explanation: "They are roots of $t^2-25t+144=0$: $t=\\dfrac{25\\pm\\sqrt{625-576}}{2}=\\dfrac{25\\pm7}{2}=16\\text{ or }9$."
                }
            ]
        },

        /* ---------- 2) ANTIDERIVATIVE (Mathematics) — 2 (harder) ---------- */
        {
            id: "antiderivative",
            name: "Antiderivative",
            subject: "Mathematics",
            accent: "cyan",
            blurb: "Indefinite integration · identities · integration by parts",
            questions: [
                {
                    id: "ad1",
                    text: "$\\displaystyle\\int \\tan^2 x\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$\\tan x - x + C$" },
                        { key: "b", text: "$\\sec^2 x + C$" },
                        { key: "c", text: "$\\dfrac{\\tan^3 x}{3} + C$" },
                        { key: "d", text: "$-\\cot x - x + C$" }
                    ],
                    answer: "a",
                    explanation: "Using $\\tan^2 x=\\sec^2 x-1$, $\\displaystyle\\int(\\sec^2 x-1)\\,dx=\\tan x - x + C$."
                },
                {
                    id: "ad2",
                    text: "$\\displaystyle\\int x\\,e^{x}\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$e^{x}(x+1) + C$" },
                        { key: "b", text: "$e^{x}(x-1) + C$" },
                        { key: "c", text: "$\\dfrac{x^2 e^{x}}{2} + C$" },
                        { key: "d", text: "$x e^{x} + C$" }
                    ],
                    answer: "b",
                    explanation: "By parts with $u=x$, $dv=e^x dx$: $\\displaystyle\\int x e^x dx = x e^x - \\int e^x dx = e^x(x-1)+C$."
                }
            ]
        },

        /* ---------- 3) LIMIT (Mathematics) — 2 (harder) ---------- */
        {
            id: "limit",
            name: "Limit",
            subject: "Mathematics",
            accent: "cyan",
            blurb: "Standard limits · indeterminate forms · factorisation",
            questions: [
                {
                    id: "lm1",
                    text: "$\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^{2}}$ equals:",
                    options: [
                        { key: "a", text: "$0$" },
                        { key: "b", text: "$\\dfrac{1}{2}$" },
                        { key: "c", text: "$1$" },
                        { key: "d", text: "$2$" }
                    ],
                    answer: "b",
                    explanation: "Using $1-\\cos x = 2\\sin^2\\tfrac{x}{2}$, the limit is $\\displaystyle\\lim_{x\\to0}\\frac{2\\sin^2(x/2)}{x^2}=\\frac{2}{4}=\\frac12$."
                },
                {
                    id: "lm2",
                    text: "$\\displaystyle\\lim_{x\\to 2}\\frac{x^{3}-8}{x-2}$ equals:",
                    options: [
                        { key: "a", text: "$4$" },
                        { key: "b", text: "$8$" },
                        { key: "c", text: "$12$" },
                        { key: "d", text: "$\\infty$" }
                    ],
                    answer: "c",
                    explanation: "Factor $x^3-8=(x-2)(x^2+2x+4)$; cancelling $(x-2)$ gives $x^2+2x+4$, which at $x=2$ is $4+4+4=12$."
                }
            ]
        },

        /* ---------- 4) SOLID STATE (Chemistry) — 4 ---------- */
        {
            id: "solidstate",
            name: "Solid State",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Unit cells · coordination number · crystal defects",
            questions: [
                {
                    id: "ss1",
                    text: "The coordination number of each atom in a face-centred cubic (FCC) close-packed structure is:",
                    options: [
                        { key: "a", text: "$4$" },
                        { key: "b", text: "$6$" },
                        { key: "c", text: "$8$" },
                        { key: "d", text: "$12$" }
                    ],
                    answer: "d",
                    explanation: "In an FCC (cubic close-packed) lattice each atom touches 12 nearest neighbours, so the coordination number is 12."
                },
                {
                    id: "ss2",
                    text: "The number of atoms present per unit cell in a body-centred cubic (BCC) structure is:",
                    options: [
                        { key: "a", text: "$1$" },
                        { key: "b", text: "$2$" },
                        { key: "c", text: "$4$" },
                        { key: "d", text: "$6$" }
                    ],
                    answer: "b",
                    explanation: "BCC has $8\\times\\tfrac18$ (corners) $+\\,1$ (body centre) $=2$ atoms per unit cell."
                },
                {
                    id: "ss3",
                    text: "The number of atoms present per unit cell in a face-centred cubic (FCC) structure is:",
                    options: [
                        { key: "a", text: "$2$" },
                        { key: "b", text: "$4$" },
                        { key: "c", text: "$6$" },
                        { key: "d", text: "$8$" }
                    ],
                    answer: "b",
                    explanation: "FCC has $8\\times\\tfrac18$ (corners) $+\\,6\\times\\tfrac12$ (faces) $=1+3=4$ atoms per unit cell."
                },
                {
                    id: "ss4",
                    text: "The Frenkel defect is generally found in ionic crystals in which:",
                    options: [
                        { key: "a", text: "the cation and anion are of nearly equal size" },
                        { key: "b", text: "there is a large difference in the sizes of the cation and anion" },
                        { key: "c", text: "the crystal conducts electricity like a metal" },
                        { key: "d", text: "the coordination number is very high" }
                    ],
                    answer: "b",
                    explanation: "A small cation can leave its lattice site for an interstitial position when the ions differ greatly in size (e.g., AgCl, ZnS), producing a Frenkel defect."
                }
            ]
        }
    ]
};

const DAY7 = {
    day: 7,
    title: "Day 7",
    subtitle: "Full Syllabus · Hard Mock",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) PHYSICS (10, harder) ---------- */
        {
            id: "physics7",
            name: "Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Mechanics · heat · optics · electricity · modern physics",
            questions: [
                {
                    id: "p1",
                    text: "For a projectile, the maximum height equals the horizontal range. The angle of projection is:",
                    options: [
                        { key: "a", text: "$45^\\circ$" },
                        { key: "b", text: "$60^\\circ$" },
                        { key: "c", text: "$\\tan^{-1}(2)$" },
                        { key: "d", text: "$\\tan^{-1}(4)$" }
                    ],
                    answer: "d",
                    explanation: "$\\dfrac{H}{R}=\\dfrac{\\tan\\theta}{4}$. Setting $H=R$ gives $\\tan\\theta=4$, so $\\theta=\\tan^{-1}(4)$."
                },
                {
                    id: "p2",
                    text: "A solid sphere and a hollow sphere of the same mass and radius are released from the top of the same incline and roll down without slipping. Which reaches the bottom first?",
                    options: [
                        { key: "a", text: "the solid sphere" },
                        { key: "b", text: "the hollow sphere" },
                        { key: "c", text: "both reach together" },
                        { key: "d", text: "it depends on the height" }
                    ],
                    answer: "a",
                    explanation: "Acceleration $a=\\dfrac{g\\sin\\theta}{1+I/MR^2}$. The solid sphere has the smaller $I/MR^2$ ($\\tfrac25$ vs $\\tfrac23$), so it has greater acceleration and arrives first."
                },
                {
                    id: "p3",
                    text: "A Carnot engine operates between a source at $327^\\circ$C and a sink at $27^\\circ$C. Its maximum efficiency is:",
                    options: [
                        { key: "a", text: "$25\\%$" },
                        { key: "b", text: "$50\\%$" },
                        { key: "c", text: "$75\\%$" },
                        { key: "d", text: "$92\\%$" }
                    ],
                    answer: "b",
                    explanation: "In kelvin, $T_h=600$ K and $T_c=300$ K, so $\\eta=1-\\dfrac{T_c}{T_h}=1-\\dfrac{300}{600}=0.5=50\\%$."
                },
                {
                    id: "p4",
                    text: "A convex lens of focal length 15 cm forms a real image magnified 3 times. The object distance is:",
                    options: [
                        { key: "a", text: "$15\\,$cm" },
                        { key: "b", text: "$20\\,$cm" },
                        { key: "c", text: "$30\\,$cm" },
                        { key: "d", text: "$45\\,$cm" }
                    ],
                    answer: "b",
                    explanation: "For a real image $|m|=\\dfrac{v}{u}=3\\Rightarrow v=3u$. Using $\\dfrac1f=\\dfrac1v+\\dfrac1u$ (magnitudes): $\\dfrac1{15}=\\dfrac1{3u}+\\dfrac1u=\\dfrac{4}{3u}\\Rightarrow u=20\\,$cm."
                },
                {
                    id: "p5",
                    text: "In a metre bridge, the balance point is obtained at 40 cm from one end. If the known resistance in the right gap is unknown and the left-gap resistance is $4\\,\\Omega$, the right-gap resistance is:",
                    options: [
                        { key: "a", text: "$2\\,\\Omega$" },
                        { key: "b", text: "$6\\,\\Omega$" },
                        { key: "c", text: "$8\\,\\Omega$" },
                        { key: "d", text: "$10\\,\\Omega$" }
                    ],
                    answer: "b",
                    explanation: "$\\dfrac{P}{Q}=\\dfrac{l}{100-l}=\\dfrac{40}{60}\\Rightarrow Q=P\\cdot\\dfrac{60}{40}=4\\times1.5=6\\,\\Omega$."
                },
                {
                    id: "p6",
                    text: "A charged particle moves in a circular path in a uniform magnetic field. If its kinetic energy is doubled (field unchanged), the radius of the path becomes:",
                    options: [
                        { key: "a", text: "$\\sqrt{2}\\,r$" },
                        { key: "b", text: "$2r$" },
                        { key: "c", text: "$4r$" },
                        { key: "d", text: "$r/\\sqrt{2}$" }
                    ],
                    answer: "a",
                    explanation: "$r=\\dfrac{mv}{qB}=\\dfrac{\\sqrt{2mE_k}}{qB}\\propto\\sqrt{E_k}$. Doubling $E_k$ multiplies $r$ by $\\sqrt2$."
                },
                {
                    id: "p7",
                    text: "Two capacitors of capacitance $C$ and $2C$ are charged to potentials $V$ and $2V$ respectively and then connected in parallel (like plates together). The common potential is:",
                    options: [
                        { key: "a", text: "$\\dfrac{3V}{2}$" },
                        { key: "b", text: "$\\dfrac{5V}{3}$" },
                        { key: "c", text: "$2V$" },
                        { key: "d", text: "$\\dfrac{4V}{3}$" }
                    ],
                    answer: "b",
                    explanation: "Common potential $=\\dfrac{\\text{total charge}}{\\text{total capacitance}}=\\dfrac{CV+2C(2V)}{C+2C}=\\dfrac{5CV}{3C}=\\dfrac{5V}{3}$."
                },
                {
                    id: "p8",
                    text: "A pipe closed at one end has a fundamental frequency of 100 Hz. An open pipe of the same length has a fundamental frequency of:",
                    options: [
                        { key: "a", text: "$50\\,$Hz" },
                        { key: "b", text: "$100\\,$Hz" },
                        { key: "c", text: "$200\\,$Hz" },
                        { key: "d", text: "$400\\,$Hz" }
                    ],
                    answer: "c",
                    explanation: "Closed pipe: $f_c=\\dfrac{v}{4L}$; open pipe: $f_o=\\dfrac{v}{2L}=2f_c=200\\,$Hz."
                },
                {
                    id: "p9",
                    text: "The de Broglie wavelength of an electron accelerated through a potential difference of 100 V is approximately:",
                    options: [
                        { key: "a", text: "$0.123\\,$Å" },
                        { key: "b", text: "$1.227\\,$Å" },
                        { key: "c", text: "$12.27\\,$Å" },
                        { key: "d", text: "$122.7\\,$Å" }
                    ],
                    answer: "b",
                    explanation: "$\\lambda=\\dfrac{12.27}{\\sqrt{V}}\\,$Å $=\\dfrac{12.27}{\\sqrt{100}}=1.227\\,$Å."
                },
                {
                    id: "p10",
                    text: "In a common-emitter transistor amplifier, the current gain $\\beta=100$. If the base current is $20\\,\\mu$A, the collector current is:",
                    options: [
                        { key: "a", text: "$0.2\\,$mA" },
                        { key: "b", text: "$2\\,$mA" },
                        { key: "c", text: "$20\\,$mA" },
                        { key: "d", text: "$200\\,$mA" }
                    ],
                    answer: "b",
                    explanation: "$I_C=\\beta I_B=100\\times20\\,\\mu\\text{A}=2000\\,\\mu\\text{A}=2\\,$mA."
                }
            ]
        },

        /* ---------- 2) CHEMISTRY (10, harder) ---------- */
        {
            id: "chemistry7",
            name: "Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Physical · inorganic · organic chemistry",
            questions: [
                {
                    id: "c1",
                    text: "In acidic medium, the number of moles of $\\mathrm{KMnO_4}$ required to oxidize one mole of $\\mathrm{Fe^{2+}}$ to $\\mathrm{Fe^{3+}}$ is:",
                    options: [
                        { key: "a", text: "$1$" },
                        { key: "b", text: "$\\dfrac{1}{5}$" },
                        { key: "c", text: "$5$" },
                        { key: "d", text: "$\\dfrac{2}{5}$" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{MnO_4^-}$ gains 5 electrons while each $\\mathrm{Fe^{2+}}$ loses 1, so 1 mol $\\mathrm{KMnO_4}$ oxidizes 5 mol $\\mathrm{Fe^{2+}}$; for 1 mol $\\mathrm{Fe^{2+}}$ only $\\tfrac15$ mol is needed."
                },
                {
                    id: "c2",
                    text: "The rate constant of a first-order reaction is $0.693\\,\\mathrm{min^{-1}}$. Its half-life is:",
                    options: [
                        { key: "a", text: "$0.5\\,$min" },
                        { key: "b", text: "$1\\,$min" },
                        { key: "c", text: "$2\\,$min" },
                        { key: "d", text: "$1.386\\,$min" }
                    ],
                    answer: "b",
                    explanation: "For first order, $t_{1/2}=\\dfrac{0.693}{k}=\\dfrac{0.693}{0.693}=1\\,$min."
                },
                {
                    id: "c3",
                    text: "Which $0.1\\,m$ aqueous solution shows the greatest elevation of boiling point?",
                    options: [
                        { key: "a", text: "glucose" },
                        { key: "b", text: "urea" },
                        { key: "c", text: "$\\mathrm{NaCl}$" },
                        { key: "d", text: "$\\mathrm{CaCl_2}$" }
                    ],
                    answer: "d",
                    explanation: "Elevation is colligative ($\\Delta T_b=i\\,K_b m$). $\\mathrm{CaCl_2}$ gives 3 ions ($i=3$), the highest van't Hoff factor, so the largest elevation."
                },
                {
                    id: "c4",
                    text: "For a reaction at equilibrium, the standard free-energy change $\\Delta G^\\circ$ is negative. The equilibrium constant $K$ is therefore:",
                    options: [
                        { key: "a", text: "equal to 1" },
                        { key: "b", text: "greater than 1" },
                        { key: "c", text: "less than 1" },
                        { key: "d", text: "equal to 0" }
                    ],
                    answer: "b",
                    explanation: "$\\Delta G^\\circ=-RT\\ln K$. A negative $\\Delta G^\\circ$ means $\\ln K>0$, so $K>1$ (products favoured)."
                },
                {
                    id: "c5",
                    text: "Which element has an anomalously high first ionization energy because of its stable half-filled configuration?",
                    options: [
                        { key: "a", text: "boron" },
                        { key: "b", text: "carbon" },
                        { key: "c", text: "nitrogen" },
                        { key: "d", text: "oxygen" }
                    ],
                    answer: "c",
                    explanation: "Nitrogen ($2p^3$) has a stable half-filled p-subshell, giving it a higher first ionization energy than oxygen, which follows it."
                },
                {
                    id: "c6",
                    text: "The oxidation state of iron in potassium ferrocyanide, $\\mathrm{K_4[Fe(CN)_6]}$, is:",
                    options: [
                        { key: "a", text: "$+2$" },
                        { key: "b", text: "$+3$" },
                        { key: "c", text: "$+4$" },
                        { key: "d", text: "$+6$" }
                    ],
                    answer: "a",
                    explanation: "With $4\\,K^+$ and six $\\mathrm{CN^-}$, the complex requires $x+(-6)=-4$, so $x=+2$."
                },
                {
                    id: "c7",
                    text: "Lithium shows a diagonal relationship with which element?",
                    options: [
                        { key: "a", text: "sodium" },
                        { key: "b", text: "magnesium" },
                        { key: "c", text: "calcium" },
                        { key: "d", text: "aluminium" }
                    ],
                    answer: "b",
                    explanation: "Owing to similar charge/size ratios, lithium resembles magnesium (the diagonal relationship), e.g., both form normal oxides and decompose carbonates on heating."
                },
                {
                    id: "c8",
                    text: "The IUPAC name of the compound $\\mathrm{(CH_3)_3C\\!-\\!CH_2OH}$ is:",
                    options: [
                        { key: "a", text: "2,2-dimethylpropan-1-ol" },
                        { key: "b", text: "butan-1-ol" },
                        { key: "c", text: "2-methylbutan-2-ol" },
                        { key: "d", text: "pentan-1-ol" }
                    ],
                    answer: "a",
                    explanation: "The longest chain bearing –OH is propan-1-ol with two methyl branches at C-2: 2,2-dimethylpropan-1-ol (neopentyl alcohol)."
                },
                {
                    id: "c9",
                    text: "The number of structural (chain plus position) isomers possible for $\\mathrm{C_4H_9Br}$ is:",
                    options: [
                        { key: "a", text: "$2$" },
                        { key: "b", text: "$3$" },
                        { key: "c", text: "$4$" },
                        { key: "d", text: "$5$" }
                    ],
                    answer: "c",
                    explanation: "They are 1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane and 2-bromo-2-methylpropane — four isomers."
                },
                {
                    id: "c10",
                    text: "According to Markovnikov's rule, the addition of HBr to propene gives mainly:",
                    options: [
                        { key: "a", text: "1-bromopropane" },
                        { key: "b", text: "2-bromopropane" },
                        { key: "c", text: "1,2-dibromopropane" },
                        { key: "d", text: "propan-2-ol" }
                    ],
                    answer: "b",
                    explanation: "The H adds to the carbon with more hydrogens, placing Br on the more substituted carbon, giving 2-bromopropane as the major product."
                }
            ]
        },

        /* ---------- 3) BOTANY (10, harder) ---------- */
        {
            id: "botany7",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Cell biology · genetics · physiology · ecology",
            questions: [
                {
                    id: "b1",
                    text: "The light-independent reactions (Calvin cycle) of photosynthesis take place in the:",
                    options: [
                        { key: "a", text: "thylakoid membrane (grana)" },
                        { key: "b", text: "stroma of the chloroplast" },
                        { key: "c", text: "mitochondrial matrix" },
                        { key: "d", text: "cytoplasm" }
                    ],
                    answer: "b",
                    explanation: "The Calvin cycle uses ATP and NADPH in the stroma, where the enzyme RuBisCO fixes $\\mathrm{CO_2}$."
                },
                {
                    id: "b2",
                    text: "In the F$_2$ generation of a dihybrid cross (RrYy × RrYy), the fraction of offspring that are homozygous recessive for both traits is:",
                    options: [
                        { key: "a", text: "$\\dfrac{1}{16}$" },
                        { key: "b", text: "$\\dfrac{9}{16}$" },
                        { key: "c", text: "$\\dfrac{3}{16}$" },
                        { key: "d", text: "$\\dfrac{1}{4}$" }
                    ],
                    answer: "a",
                    explanation: "Only the rryy combination is doubly recessive, occurring in $\\tfrac14\\times\\tfrac14=\\tfrac1{16}$ of the F$_2$."
                },
                {
                    id: "b3",
                    text: "The α-helix (secondary structure) of a protein is stabilized chiefly by:",
                    options: [
                        { key: "a", text: "peptide bonds" },
                        { key: "b", text: "hydrogen bonds" },
                        { key: "c", text: "disulfide bridges" },
                        { key: "d", text: "ionic bonds" }
                    ],
                    answer: "b",
                    explanation: "Hydrogen bonds between the C=O of one residue and the N–H of a residue four positions ahead hold the α-helix together."
                },
                {
                    id: "b4",
                    text: "Bryophytes are often called the \"amphibians of the plant kingdom\" because they:",
                    options: [
                        { key: "a", text: "grow only in water" },
                        { key: "b", text: "live on land but need water for fertilization" },
                        { key: "c", text: "have true roots and vascular tissue" },
                        { key: "d", text: "produce seeds" }
                    ],
                    answer: "b",
                    explanation: "Bryophytes live in moist terrestrial habitats but require a film of water for the flagellated sperms to reach the egg."
                },
                {
                    id: "b5",
                    text: "The opening and closing of stomata is directly controlled by the change in turgidity of the:",
                    options: [
                        { key: "a", text: "epidermal cells" },
                        { key: "b", text: "guard cells" },
                        { key: "c", text: "mesophyll cells" },
                        { key: "d", text: "companion cells" }
                    ],
                    answer: "b",
                    explanation: "When guard cells become turgid they bow apart and open the stomatal pore; when flaccid, the pore closes."
                },
                {
                    id: "b6",
                    text: "The ascent of sap to the top of tall trees is best explained by the:",
                    options: [
                        { key: "a", text: "root pressure theory" },
                        { key: "b", text: "capillary action" },
                        { key: "c", text: "transpiration pull (cohesion–tension) theory" },
                        { key: "d", text: "imbibition" }
                    ],
                    answer: "c",
                    explanation: "Transpiration from leaves creates a tension that, aided by the cohesion of water molecules, pulls a continuous column of water up the xylem."
                },
                {
                    id: "b7",
                    text: "According to Lindeman's 10% law, if the producers in an ecosystem trap 10000 J of energy, the energy available to the secondary consumers is:",
                    options: [
                        { key: "a", text: "$1000\\,$J" },
                        { key: "b", text: "$100\\,$J" },
                        { key: "c", text: "$10\\,$J" },
                        { key: "d", text: "$1\\,$J" }
                    ],
                    answer: "b",
                    explanation: "Only 10% passes to each higher level: $10000\\to1000$ (primary consumers) $\\to100\\,$J (secondary consumers)."
                },
                {
                    id: "b8",
                    text: "Crossing over, which produces recombination of linked genes, occurs during which sub-stage of meiosis-I?",
                    options: [
                        { key: "a", text: "leptotene" },
                        { key: "b", text: "zygotene" },
                        { key: "c", text: "pachytene" },
                        { key: "d", text: "diplotene" }
                    ],
                    answer: "c",
                    explanation: "Exchange of segments between non-sister chromatids of homologous chromosomes takes place at the pachytene stage of prophase-I."
                },
                {
                    id: "b9",
                    text: "C$_4$ plants such as maize and sugarcane are more productive than C$_3$ plants mainly because they:",
                    options: [
                        { key: "a", text: "contain more chlorophyll" },
                        { key: "b", text: "largely avoid photorespiration" },
                        { key: "c", text: "fix carbon dioxide only at night" },
                        { key: "d", text: "do not require light reactions" }
                    ],
                    answer: "b",
                    explanation: "By concentrating $\\mathrm{CO_2}$ in bundle-sheath cells, C$_4$ plants suppress the wasteful oxygenase activity of RuBisCO (photorespiration)."
                },
                {
                    id: "b10",
                    text: "The enzyme responsible for the primary fixation of $\\mathrm{CO_2}$ in C$_3$ plants is:",
                    options: [
                        { key: "a", text: "PEP carboxylase" },
                        { key: "b", text: "RuBisCO" },
                        { key: "c", text: "nitrogenase" },
                        { key: "d", text: "dehydrogenase" }
                    ],
                    answer: "b",
                    explanation: "In the Calvin cycle, RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyses the fixation of $\\mathrm{CO_2}$ onto RuBP."
                }
            ]
        },

        /* ---------- 4) ZOOLOGY (10, harder) ---------- */
        {
            id: "zoology7",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Evolution · classification · human biology · diseases",
            questions: [
                {
                    id: "z1",
                    text: "Archaeopteryx is regarded as a connecting link between:",
                    options: [
                        { key: "a", text: "fishes and amphibians" },
                        { key: "b", text: "amphibians and reptiles" },
                        { key: "c", text: "reptiles and birds" },
                        { key: "d", text: "reptiles and mammals" }
                    ],
                    answer: "c",
                    explanation: "Archaeopteryx had feathers and a wishbone (bird features) along with teeth and a long bony tail (reptilian features), linking reptiles and birds."
                },
                {
                    id: "z2",
                    text: "The experimental support for chemical (abiogenic) origin of life on earth was provided by the experiment of:",
                    options: [
                        { key: "a", text: "Miller and Urey" },
                        { key: "b", text: "Charles Darwin" },
                        { key: "c", text: "Lamarck" },
                        { key: "d", text: "Gregor Mendel" }
                    ],
                    answer: "a",
                    explanation: "Miller and Urey passed electric sparks through a mixture of $\\mathrm{CH_4}$, $\\mathrm{NH_3}$, $\\mathrm{H_2}$ and water vapour and obtained amino acids, supporting the Oparin–Haldane hypothesis."
                },
                {
                    id: "z3",
                    text: "Stinging cells (nematocysts) used for capturing prey and defence are characteristic of the phylum:",
                    options: [
                        { key: "a", text: "Porifera" },
                        { key: "b", text: "Cnidaria (Coelenterata)" },
                        { key: "c", text: "Platyhelminthes" },
                        { key: "d", text: "Annelida" }
                    ],
                    answer: "b",
                    explanation: "Cnidarians bear specialized stinging cells called cnidocytes containing nematocysts on their tentacles."
                },
                {
                    id: "z4",
                    text: "A water-vascular system with tube feet for locomotion is the distinctive feature of the phylum:",
                    options: [
                        { key: "a", text: "Mollusca" },
                        { key: "b", text: "Arthropoda" },
                        { key: "c", text: "Echinodermata" },
                        { key: "d", text: "Annelida" }
                    ],
                    answer: "c",
                    explanation: "Echinoderms (e.g., starfish) possess a unique water-vascular system that operates the tube feet used in movement and feeding."
                },
                {
                    id: "z5",
                    text: "The stage of Plasmodium that is injected into the human bloodstream by the bite of an infected female Anopheles mosquito is the:",
                    options: [
                        { key: "a", text: "merozoite" },
                        { key: "b", text: "sporozoite" },
                        { key: "c", text: "gametocyte" },
                        { key: "d", text: "trophozoite" }
                    ],
                    answer: "b",
                    explanation: "Sporozoites present in the mosquito's salivary glands are the infective stage introduced into humans, where they then invade liver cells."
                },
                {
                    id: "z6",
                    text: "In the earthworm (Pheretima), locomotion is aided by tiny chitinous structures called:",
                    options: [
                        { key: "a", text: "parapodia" },
                        { key: "b", text: "setae" },
                        { key: "c", text: "tube feet" },
                        { key: "d", text: "pseudopodia" }
                    ],
                    answer: "b",
                    explanation: "S-shaped chitinous setae embedded in the body wall provide grip against the soil, assisting the earthworm's movement."
                },
                {
                    id: "z7",
                    text: "In the human nephron, maximum reabsorption of the glomerular filtrate occurs in the:",
                    options: [
                        { key: "a", text: "glomerulus" },
                        { key: "b", text: "proximal convoluted tubule" },
                        { key: "c", text: "loop of Henle" },
                        { key: "d", text: "collecting duct" }
                    ],
                    answer: "b",
                    explanation: "About 70–80% of the filtrate, including glucose, amino acids and most ions, is reabsorbed in the proximal convoluted tubule."
                },
                {
                    id: "z8",
                    text: "Addison's disease in humans results from the hyposecretion of hormones by the:",
                    options: [
                        { key: "a", text: "thyroid gland" },
                        { key: "b", text: "adrenal cortex" },
                        { key: "c", text: "pancreas" },
                        { key: "d", text: "pituitary gland" }
                    ],
                    answer: "b",
                    explanation: "Reduced secretion of corticosteroids (cortisol and aldosterone) by the adrenal cortex causes Addison's disease."
                },
                {
                    id: "z9",
                    text: "The type of epithelium that lines the alveoli of the lungs and the Bowman's capsule, suited for diffusion and filtration, is:",
                    options: [
                        { key: "a", text: "simple squamous epithelium" },
                        { key: "b", text: "cuboidal epithelium" },
                        { key: "c", text: "columnar epithelium" },
                        { key: "d", text: "ciliated epithelium" }
                    ],
                    answer: "a",
                    explanation: "The extremely thin, flat cells of simple squamous epithelium allow rapid diffusion of gases and filtration of fluids."
                },
                {
                    id: "z10",
                    text: "Kala-azar (visceral leishmaniasis) is transmitted to humans through the bite of a:",
                    options: [
                        { key: "a", text: "housefly" },
                        { key: "b", text: "sandfly (Phlebotomus)" },
                        { key: "c", text: "Anopheles mosquito" },
                        { key: "d", text: "tsetse fly" }
                    ],
                    answer: "b",
                    explanation: "The protozoan Leishmania donovani that causes kala-azar is transmitted by the bite of the female sandfly, Phlebotomus."
                }
            ]
        },

        /* ---------- 5) MENTAL AGILITY TEST (MAT) (10, harder) ---------- */
        {
            id: "mat7",
            name: "Mental Agility Test",
            subject: "MAT",
            accent: "slate",
            blurb: "Verbal · numerical · logical sequencing · reasoning",
            questions: [
                {
                    id: "m1",
                    text: "The length and breadth of a rectangle are increased by $20\\%$ and $30\\%$ respectively. The percentage increase in its area is:",
                    options: [
                        { key: "a", text: "$36\\%$" },
                        { key: "b", text: "$50\\%$" },
                        { key: "c", text: "$56\\%$" },
                        { key: "d", text: "$60\\%$" }
                    ],
                    answer: "c",
                    explanation: "New area $=1.20\\times1.30=1.56$ times the original, an increase of $56\\%$."
                },
                {
                    id: "m2",
                    text: "A person starts from a point, walks 5 km east, turns left and walks 5 km, then turns left again and walks 5 km. How far and in which direction is he from the start?",
                    options: [
                        { key: "a", text: "5 km north" },
                        { key: "b", text: "5 km south" },
                        { key: "c", text: "5 km east" },
                        { key: "d", text: "0 km (at start)" }
                    ],
                    answer: "a",
                    explanation: "The moves are 5 km east, 5 km north, then 5 km west; the east and west cancel, leaving him 5 km north of the start."
                },
                {
                    id: "m3",
                    text: "Look at the series and find the next term: $7,\\;10,\\;8,\\;11,\\;9,\\;12,\\;?$",
                    options: [
                        { key: "a", text: "$7$" },
                        { key: "b", text: "$10$" },
                        { key: "c", text: "$12$" },
                        { key: "d", text: "$13$" }
                    ],
                    answer: "b",
                    explanation: "The pattern alternates $+3$ and $-2$: $\\dots,9,12,\\boxed{10}$ (i.e. $12-2=10$)."
                },
                {
                    id: "m4",
                    text: "If the day before yesterday was Thursday, what day will it be the day after tomorrow?",
                    options: [
                        { key: "a", text: "Sunday" },
                        { key: "b", text: "Monday" },
                        { key: "c", text: "Tuesday" },
                        { key: "d", text: "Wednesday" }
                    ],
                    answer: "b",
                    explanation: "Day before yesterday = Thursday, so today is Saturday; the day after tomorrow is Monday."
                },
                {
                    id: "m5",
                    text: "'Ornithology' is to 'birds' as 'entomology' is to:",
                    options: [
                        { key: "a", text: "snakes" },
                        { key: "b", text: "insects" },
                        { key: "c", text: "fishes" },
                        { key: "d", text: "plants" }
                    ],
                    answer: "b",
                    explanation: "Ornithology is the study of birds; entomology is the study of insects."
                },
                {
                    id: "m6",
                    text: "In a certain code, '517' means 'go there fast' and '813' means 'come there now'. Which digit stands for 'there'?",
                    options: [
                        { key: "a", text: "$5$" },
                        { key: "b", text: "$1$" },
                        { key: "c", text: "$7$" },
                        { key: "d", text: "$8$" }
                    ],
                    answer: "b",
                    explanation: "The only common word in the two messages is 'there', and the only common digit is 1, so 'there' $=1$."
                },
                {
                    id: "m7",
                    text: "Pointing to a lady, a man said, \"She is the daughter of the only son of my grandfather.\" How is the lady related to the man?",
                    options: [
                        { key: "a", text: "sister" },
                        { key: "b", text: "mother" },
                        { key: "c", text: "aunt" },
                        { key: "d", text: "cousin" }
                    ],
                    answer: "a",
                    explanation: "The only son of the man's grandfather is the man's own father; the father's daughter is the man's sister."
                },
                {
                    id: "m8",
                    text: "What is the angle between the hour and minute hands of a clock at 3:30?",
                    options: [
                        { key: "a", text: "$75^\\circ$" },
                        { key: "b", text: "$80^\\circ$" },
                        { key: "c", text: "$85^\\circ$" },
                        { key: "d", text: "$90^\\circ$" }
                    ],
                    answer: "a",
                    explanation: "At 3:30 the minute hand is at $180^\\circ$ and the hour hand at $3\\tfrac12\\times30^\\circ=105^\\circ$; the angle between them is $180^\\circ-105^\\circ=75^\\circ$."
                },
                {
                    id: "m9",
                    text: "Find the odd one out: triangle, square, pentagon, circle.",
                    options: [
                        { key: "a", text: "triangle" },
                        { key: "b", text: "square" },
                        { key: "c", text: "pentagon" },
                        { key: "d", text: "circle" }
                    ],
                    answer: "d",
                    explanation: "A circle is the odd one out because it has no straight sides or vertices, while the others are polygons."
                },
                {
                    id: "m10",
                    text: "If 5 workers can build 5 walls in 5 days, how many days will 10 workers take to build 10 walls?",
                    options: [
                        { key: "a", text: "$2.5$ days" },
                        { key: "b", text: "$5$ days" },
                        { key: "c", text: "$10$ days" },
                        { key: "d", text: "$25$ days" }
                    ],
                    answer: "b",
                    explanation: "One worker builds one wall in 5 days, so 10 workers build 10 walls (one each) in the same 5 days."
                }
            ]
        }
    ]
};

const DAY8 = {
    day: 8,
    title: "Day 8",
    subtitle: "Electricity & Modern Physics · Concepts",
    negativeMarking: 0.25,
    chapters: [
        /* ---------- 1) ELECTRICITY (Physics) — 20 (conceptual) ---------- */
        {
            id: "electricity8",
            name: "Electricity",
            subject: "Physics",
            accent: "blue",
            blurb: "Ohm's law · resistance · circuits · Kirchhoff · power",
            questions: [
                {
                    id: "e1",
                    text: "Ohm's law (V ∝ I) holds for a conductor only when:",
                    options: [
                        { key: "a", text: "its physical conditions such as temperature remain constant" },
                        { key: "b", text: "the current through it is very large" },
                        { key: "c", text: "its resistance is zero" },
                        { key: "d", text: "it is a semiconductor" }
                    ],
                    answer: "a",
                    explanation: "Ohm's law is obeyed only when the temperature (and other physical conditions) of the conductor stays constant; otherwise the V–I graph is not a straight line."
                },
                {
                    id: "e2",
                    text: "The resistance of a given metallic wire does NOT depend on its:",
                    options: [
                        { key: "a", text: "length" },
                        { key: "b", text: "area of cross-section" },
                        { key: "c", text: "material" },
                        { key: "d", text: "applied potential difference" }
                    ],
                    answer: "d",
                    explanation: "Resistance $R=\\rho L/A$ is a property of the conductor; it is independent of the voltage applied (which only fixes the current for an ohmic conductor)."
                },
                {
                    id: "e3",
                    text: "The specific resistance (resistivity) of a material depends on:",
                    options: [
                        { key: "a", text: "the length of the conductor" },
                        { key: "b", text: "the area of cross-section" },
                        { key: "c", text: "the nature of the material and its temperature" },
                        { key: "d", text: "the shape of the conductor" }
                    ],
                    answer: "c",
                    explanation: "Resistivity is an intrinsic property depending only on the material and temperature, not on the dimensions or shape of the sample."
                },
                {
                    id: "e4",
                    text: "When several resistors are joined in series, the quantity that is the same in each resistor is the:",
                    options: [
                        { key: "a", text: "potential difference" },
                        { key: "b", text: "current" },
                        { key: "c", text: "power dissipated" },
                        { key: "d", text: "resistance" }
                    ],
                    answer: "b",
                    explanation: "A series circuit provides a single path, so the same current flows through every resistor; the voltage divides among them."
                },
                {
                    id: "e5",
                    text: "When resistors are joined in parallel, the quantity that is the same across each is the:",
                    options: [
                        { key: "a", text: "current" },
                        { key: "b", text: "charge" },
                        { key: "c", text: "potential difference" },
                        { key: "d", text: "power dissipated" }
                    ],
                    answer: "c",
                    explanation: "Parallel resistors are connected across the same two points, so each has the same potential difference; the current divides among them."
                },
                {
                    id: "e6",
                    text: "The equivalent resistance of a parallel combination of resistors is always:",
                    options: [
                        { key: "a", text: "greater than the largest resistance" },
                        { key: "b", text: "less than the smallest resistance" },
                        { key: "c", text: "equal to the sum of the resistances" },
                        { key: "d", text: "equal to their average" }
                    ],
                    answer: "b",
                    explanation: "Adding more parallel paths increases the available conduction, so the combined resistance is smaller than even the least of them."
                },
                {
                    id: "e7",
                    text: "Kirchhoff's junction rule (current law) is a direct consequence of the conservation of:",
                    options: [
                        { key: "a", text: "energy" },
                        { key: "b", text: "charge" },
                        { key: "c", text: "momentum" },
                        { key: "d", text: "mass" }
                    ],
                    answer: "b",
                    explanation: "The junction rule states that the total current entering a node equals the current leaving it — charge is neither created nor destroyed."
                },
                {
                    id: "e8",
                    text: "Kirchhoff's loop rule (voltage law) is based on the conservation of:",
                    options: [
                        { key: "a", text: "charge" },
                        { key: "b", text: "energy" },
                        { key: "c", text: "momentum" },
                        { key: "d", text: "magnetic flux" }
                    ],
                    answer: "b",
                    explanation: "The sum of potential changes around a closed loop is zero, reflecting conservation of energy per unit charge."
                },
                {
                    id: "e9",
                    text: "The terminal potential difference of a cell is less than its EMF when the cell is:",
                    options: [
                        { key: "a", text: "in an open circuit" },
                        { key: "b", text: "supplying current (discharging)" },
                        { key: "c", text: "being charged" },
                        { key: "d", text: "kept at absolute zero" }
                    ],
                    answer: "b",
                    explanation: "While discharging, a voltage drop $Ir$ occurs across the internal resistance, so terminal voltage $V=E-Ir$ is less than the EMF."
                },
                {
                    id: "e10",
                    text: "Two electric bulbs are rated 60 W and 100 W for the same supply voltage. The bulb with the greater resistance is the:",
                    options: [
                        { key: "a", text: "60 W bulb" },
                        { key: "b", text: "100 W bulb" },
                        { key: "c", text: "both have equal resistance" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "a",
                    explanation: "Since $P=V^2/R$ at a fixed voltage, the lower-power (60 W) bulb has the higher resistance."
                },
                {
                    id: "e11",
                    text: "If a 60 W and a 100 W bulb are connected in series across the mains, the bulb that glows brighter is the:",
                    options: [
                        { key: "a", text: "100 W bulb" },
                        { key: "b", text: "60 W bulb" },
                        { key: "c", text: "both glow equally" },
                        { key: "d", text: "neither glows" }
                    ],
                    answer: "b",
                    explanation: "In series the current is the same, so power $=I^2R$ is greatest in the bulb of higher resistance — the 60 W bulb."
                },
                {
                    id: "e12",
                    text: "A fuse wire used for protection in a circuit should have:",
                    options: [
                        { key: "a", text: "a high melting point and low resistance" },
                        { key: "b", text: "a low melting point and high resistance" },
                        { key: "c", text: "a high melting point and high resistance" },
                        { key: "d", text: "a low melting point and zero resistance" }
                    ],
                    answer: "b",
                    explanation: "A fuse must heat up and melt quickly on overload, so it is made of a material of relatively high resistance and low melting point."
                },
                {
                    id: "e13",
                    text: "The drift velocity of free electrons in a metallic conductor carrying a normal current is:",
                    options: [
                        { key: "a", text: "equal to the speed of light" },
                        { key: "b", text: "very small (of the order of mm/s)" },
                        { key: "c", text: "equal to their random thermal speed" },
                        { key: "d", text: "exactly zero" }
                    ],
                    answer: "b",
                    explanation: "Drift velocity is only a fraction of a millimetre per second, far smaller than the electrons' random thermal speeds; the current signal itself travels near light speed."
                },
                {
                    id: "e14",
                    text: "As the temperature of a metallic conductor is raised, its electrical resistance:",
                    options: [
                        { key: "a", text: "increases" },
                        { key: "b", text: "decreases" },
                        { key: "c", text: "remains unchanged" },
                        { key: "d", text: "becomes zero" }
                    ],
                    answer: "a",
                    explanation: "More frequent collisions of electrons with vibrating lattice ions at higher temperature increase the resistance of a metal (positive temperature coefficient)."
                },
                {
                    id: "e15",
                    text: "As the temperature of a semiconductor is raised, its electrical resistance:",
                    options: [
                        { key: "a", text: "increases" },
                        { key: "b", text: "decreases" },
                        { key: "c", text: "remains unchanged" },
                        { key: "d", text: "becomes infinite" }
                    ],
                    answer: "b",
                    explanation: "Heating a semiconductor releases more charge carriers, so its resistance falls (negative temperature coefficient of resistance)."
                },
                {
                    id: "e16",
                    text: "At the balance point of a Wheatstone bridge, the current through the galvanometer is:",
                    options: [
                        { key: "a", text: "maximum" },
                        { key: "b", text: "zero" },
                        { key: "c", text: "half of the total current" },
                        { key: "d", text: "infinite" }
                    ],
                    answer: "b",
                    explanation: "When the bridge is balanced ($P/Q=R/S$), the two junctions are at the same potential, so no current passes through the galvanometer."
                },
                {
                    id: "e17",
                    text: "Electrical conduction through a metallic wire is due to the movement of:",
                    options: [
                        { key: "a", text: "protons" },
                        { key: "b", text: "free electrons" },
                        { key: "c", text: "positive ions" },
                        { key: "d", text: "neutrons" }
                    ],
                    answer: "b",
                    explanation: "In metals the loosely bound free (valence) electrons drift under an applied field, constituting the electric current."
                },
                {
                    id: "e18",
                    text: "A wire of resistance $R$ is stretched uniformly to twice its original length (volume unchanged). Its new resistance is:",
                    options: [
                        { key: "a", text: "$2R$" },
                        { key: "b", text: "$4R$" },
                        { key: "c", text: "$R/2$" },
                        { key: "d", text: "$R/4$" }
                    ],
                    answer: "b",
                    explanation: "On stretching, length doubles and area halves, so $R=\\rho L/A\\propto L^2$ at constant volume; doubling the length makes the resistance $4R$."
                },
                {
                    id: "e19",
                    text: "The direction of conventional current in a circuit is:",
                    options: [
                        { key: "a", text: "the same as the direction of electron flow" },
                        { key: "b", text: "opposite to the direction of electron flow" },
                        { key: "c", text: "perpendicular to the electron flow" },
                        { key: "d", text: "independent of the electron flow" }
                    ],
                    answer: "b",
                    explanation: "Conventional current is defined as the flow of positive charge, which is opposite to the actual drift direction of the electrons."
                },
                {
                    id: "e20",
                    text: "By Joule's law of heating, the heat produced in a resistor (for a given resistance and time) is proportional to:",
                    options: [
                        { key: "a", text: "the current $I$" },
                        { key: "b", text: "the square of the current $I^2$" },
                        { key: "c", text: "$1/I$" },
                        { key: "d", text: "$\\sqrt{I}$" }
                    ],
                    answer: "b",
                    explanation: "Joule heating is $H=I^2Rt$, so for fixed $R$ and $t$ the heat developed varies as the square of the current."
                }
            ]
        },

        /* ---------- 2) MODERN PHYSICS (Physics) — 20 (conceptual) ---------- */
        {
            id: "modernphysics8",
            name: "Modern Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Photoelectric effect · atomic models · nucleus · radioactivity",
            questions: [
                {
                    id: "mp1",
                    text: "The photoelectric effect provides direct evidence for the:",
                    options: [
                        { key: "a", text: "wave nature of light" },
                        { key: "b", text: "particle (quantum) nature of light" },
                        { key: "c", text: "magnetic nature of light" },
                        { key: "d", text: "thermal nature of light" }
                    ],
                    answer: "b",
                    explanation: "The instantaneous, frequency-dependent emission of electrons is explained only by treating light as photons (quanta), confirming its particle nature."
                },
                {
                    id: "mp2",
                    text: "The maximum kinetic energy of photoelectrons emitted from a metal depends on the ___ of the incident light:",
                    options: [
                        { key: "a", text: "intensity" },
                        { key: "b", text: "frequency" },
                        { key: "c", text: "surface area illuminated" },
                        { key: "d", text: "angle of incidence" }
                    ],
                    answer: "b",
                    explanation: "By Einstein's equation $KE_{max}=h\\nu-\\phi$, the maximum kinetic energy increases with the frequency of light, not its intensity."
                },
                {
                    id: "mp3",
                    text: "The number of photoelectrons emitted per second from a metal surface depends on the ___ of the incident light:",
                    options: [
                        { key: "a", text: "frequency" },
                        { key: "b", text: "wavelength" },
                        { key: "c", text: "intensity" },
                        { key: "d", text: "phase" }
                    ],
                    answer: "c",
                    explanation: "Intensity measures the number of photons arriving per second, so it controls how many electrons are ejected (the photocurrent)."
                },
                {
                    id: "mp4",
                    text: "Below a certain threshold frequency no electrons are emitted, however intense the light. This observation supports:",
                    options: [
                        { key: "a", text: "the wave theory of light" },
                        { key: "b", text: "Einstein's quantum theory of light" },
                        { key: "c", text: "Newton's corpuscular theory" },
                        { key: "d", text: "Maxwell's electromagnetic theory" }
                    ],
                    answer: "b",
                    explanation: "A minimum photon energy ($h\\nu\\ge\\phi$) is required to free an electron; this threshold is naturally explained by the quantum (photon) theory."
                },
                {
                    id: "mp5",
                    text: "The work function of a metal is the:",
                    options: [
                        { key: "a", text: "energy of the incident photon" },
                        { key: "b", text: "minimum energy needed to free an electron from the metal surface" },
                        { key: "c", text: "kinetic energy of the fastest electron" },
                        { key: "d", text: "total energy of all electrons" }
                    ],
                    answer: "b",
                    explanation: "The work function $\\phi$ is the least energy required to remove an electron from the surface of the metal."
                },
                {
                    id: "mp6",
                    text: "According to de Broglie, the wavelength associated with a moving particle is:",
                    options: [
                        { key: "a", text: "directly proportional to its momentum" },
                        { key: "b", text: "inversely proportional to its momentum" },
                        { key: "c", text: "independent of its momentum" },
                        { key: "d", text: "proportional to its charge" }
                    ],
                    answer: "b",
                    explanation: "$\\lambda=h/p$, so the matter wavelength is inversely proportional to the particle's momentum."
                },
                {
                    id: "mp7",
                    text: "The concept of the wave (dual) nature of matter was first proposed by:",
                    options: [
                        { key: "a", text: "Albert Einstein" },
                        { key: "b", text: "Louis de Broglie" },
                        { key: "c", text: "Niels Bohr" },
                        { key: "d", text: "Ernest Rutherford" }
                    ],
                    answer: "b",
                    explanation: "Louis de Broglie hypothesised that material particles, like light, possess an associated wavelength."
                },
                {
                    id: "mp8",
                    text: "In Rutherford's α-particle scattering experiment, most α-particles passed almost straight through the foil, showing that an atom is:",
                    options: [
                        { key: "a", text: "a uniformly solid sphere" },
                        { key: "b", text: "mostly empty space" },
                        { key: "c", text: "uniformly negatively charged" },
                        { key: "d", text: "composed only of electrons" }
                    ],
                    answer: "b",
                    explanation: "Undeflected passage of most particles revealed that the atom is largely empty, with mass concentrated in a tiny core."
                },
                {
                    id: "mp9",
                    text: "The deflection of a very few α-particles through large angles in Rutherford's experiment indicated the presence of:",
                    options: [
                        { key: "a", text: "a diffuse spread of positive charge" },
                        { key: "b", text: "a small, dense, positively charged nucleus" },
                        { key: "c", text: "a ring of orbiting electrons" },
                        { key: "d", text: "a neutral central core" }
                    ],
                    answer: "b",
                    explanation: "Only a concentrated positive charge in a tiny nucleus could repel the occasional α-particle through a large angle."
                },
                {
                    id: "mp10",
                    text: "Rutherford's nuclear model of the atom failed to explain the:",
                    options: [
                        { key: "a", text: "existence of the nucleus" },
                        { key: "b", text: "stability of the atom" },
                        { key: "c", text: "electrical neutrality of the atom" },
                        { key: "d", text: "concentration of mass in the nucleus" }
                    ],
                    answer: "b",
                    explanation: "Classically, an orbiting electron should continuously radiate energy and spiral into the nucleus; Rutherford's model could not explain why atoms are stable."
                },
                {
                    id: "mp11",
                    text: "According to Bohr's postulate, an electron revolving in a stationary (permitted) orbit:",
                    options: [
                        { key: "a", text: "continuously radiates energy" },
                        { key: "b", text: "does not radiate energy" },
                        { key: "c", text: "steadily loses mass" },
                        { key: "d", text: "continuously absorbs energy" }
                    ],
                    answer: "b",
                    explanation: "Bohr postulated that electrons in stationary states do not emit radiation, which resolved the instability problem of the classical model."
                },
                {
                    id: "mp12",
                    text: "In Bohr's model, the angular momentum of an electron in a permitted orbit is an integral multiple of:",
                    options: [
                        { key: "a", text: "$h$" },
                        { key: "b", text: "$h/2\\pi$" },
                        { key: "c", text: "$2\\pi h$" },
                        { key: "d", text: "$h/\\pi$" }
                    ],
                    answer: "b",
                    explanation: "Bohr's quantisation condition is $mvr = n\\dfrac{h}{2\\pi}$, where $n$ is a positive integer."
                },
                {
                    id: "mp13",
                    text: "When an electron jumps from a higher energy level to a lower one in an atom, the atom:",
                    options: [
                        { key: "a", text: "absorbs a photon" },
                        { key: "b", text: "emits a photon" },
                        { key: "c", text: "becomes ionized" },
                        { key: "d", text: "captures an extra electron" }
                    ],
                    answer: "b",
                    explanation: "The energy difference between the levels is released as a photon of frequency $\\nu=(E_2-E_1)/h$."
                },
                {
                    id: "mp14",
                    text: "The spectral lines of hydrogen that lie in the visible region belong to the:",
                    options: [
                        { key: "a", text: "Lyman series" },
                        { key: "b", text: "Balmer series" },
                        { key: "c", text: "Paschen series" },
                        { key: "d", text: "Brackett series" }
                    ],
                    answer: "b",
                    explanation: "Transitions ending at $n=2$ form the Balmer series, which falls in the visible part of the hydrogen spectrum."
                },
                {
                    id: "mp15",
                    text: "The particles in an atomic nucleus are held together mainly by the:",
                    options: [
                        { key: "a", text: "gravitational force" },
                        { key: "b", text: "electrostatic force" },
                        { key: "c", text: "strong nuclear force" },
                        { key: "d", text: "magnetic force" }
                    ],
                    answer: "c",
                    explanation: "The short-range strong nuclear force binds protons and neutrons, overcoming the electrostatic repulsion between protons."
                },
                {
                    id: "mp16",
                    text: "The binding energy per nucleon is maximum for nuclei having a mass number near:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "56 (iron)" },
                        { key: "c", text: "120" },
                        { key: "d", text: "238" }
                    ],
                    answer: "b",
                    explanation: "Binding energy per nucleon peaks around mass number 56 (iron), making such nuclei the most stable."
                },
                {
                    id: "mp17",
                    text: "Energy is released in nuclear fission of a heavy nucleus because the products have:",
                    options: [
                        { key: "a", text: "newly created mass" },
                        { key: "b", text: "a higher binding energy per nucleon" },
                        { key: "c", text: "a greater total charge" },
                        { key: "d", text: "a larger mass number" }
                    ],
                    answer: "b",
                    explanation: "The fragments are more tightly bound (higher binding energy per nucleon) than the parent, and the mass defect is released as energy."
                },
                {
                    id: "mp18",
                    text: "Isotopes of an element have the same number of ___ but a different number of ___:",
                    options: [
                        { key: "a", text: "neutrons; protons" },
                        { key: "b", text: "protons; neutrons" },
                        { key: "c", text: "electrons; protons" },
                        { key: "d", text: "protons; electrons" }
                    ],
                    answer: "b",
                    explanation: "Isotopes have the same atomic number (protons) but differ in the number of neutrons, hence different mass numbers."
                },
                {
                    id: "mp19",
                    text: "Among the radiations emitted by radioactive nuclei, the one with the greatest penetrating power is:",
                    options: [
                        { key: "a", text: "alpha rays" },
                        { key: "b", text: "beta rays" },
                        { key: "c", text: "gamma rays" },
                        { key: "d", text: "all have equal penetration" }
                    ],
                    answer: "c",
                    explanation: "Gamma rays, being high-energy electromagnetic radiation with no charge, are the most penetrating; alpha particles are the least."
                },
                {
                    id: "mp20",
                    text: "The emission of a β⁻ particle from a radioactive nucleus causes its atomic number to:",
                    options: [
                        { key: "a", text: "decrease by 1" },
                        { key: "b", text: "increase by 1" },
                        { key: "c", text: "remain unchanged" },
                        { key: "d", text: "decrease by 2" }
                    ],
                    answer: "b",
                    explanation: "In β⁻ decay a neutron converts into a proton (and an electron is emitted), so the atomic number increases by 1 while the mass number is unchanged."
                }
            ]
        }
    ]
};

const DAY9 = {
    day: 9,
    title: "Day 9",
    subtitle: "Current Electricity & Magnetism · Advanced",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) CURRENT ELECTRICITY  (Physics) — harder
           Ohm's/Joule's laws, Kirchhoff, Wheatstone & meter bridge,
           potentiometer, galvanometer ↔ ammeter/voltmeter
        ---------------------------------------------------------- */
        {
            id: "currentelec9",
            name: "Current Electricity",
            subject: "Physics",
            accent: "blue",
            blurb: "Ohm's & Joule's laws · Kirchhoff · Wheatstone & meter bridge · potentiometer · galvanometer",
            questions: [
                {
                    id: "ce1",
                    text: "Twelve identical wires, each of resistance $r$, are joined to form the edges of a cube. The equivalent resistance between two diagonally opposite corners (the body diagonal) is:",
                    options: [
                        { key: "a", text: "$\\dfrac{7r}{12}$" },
                        { key: "b", text: "$\\dfrac{3r}{4}$" },
                        { key: "c", text: "$\\dfrac{5r}{6}$" },
                        { key: "d", text: "$r$" }
                    ],
                    answer: "c",
                    explanation: "Using the symmetry of the cube, the current splits as $I/3,\\,I/6,\\,I/3$ across the three sets of edges along the body diagonal, giving $R_{eq}=\\left(\\tfrac13+\\tfrac16+\\tfrac13\\right)r=\\dfrac{5r}{6}$."
                },
                {
                    id: "ce2",
                    text: "A battery of emf $12\\,$V and internal resistance $2\\,\\Omega$ is connected to a variable external resistance $R$. The maximum power that can be delivered to $R$ is:",
                    options: [
                        { key: "a", text: "$9\\,$W" },
                        { key: "b", text: "$18\\,$W" },
                        { key: "c", text: "$36\\,$W" },
                        { key: "d", text: "$72\\,$W" }
                    ],
                    answer: "b",
                    explanation: "Maximum power transfer occurs when $R=r$, giving $P_{max}=\\dfrac{\\varepsilon^2}{4r}=\\dfrac{12^2}{4\\times2}=\\dfrac{144}{8}=18\\,$W."
                },
                {
                    id: "ce3",
                    text: "In a meter bridge the null point is found at $40\\,$cm from the left end with an unknown resistance $X$ in the left gap and a $9\\,\\Omega$ standard in the right gap. If $X$ and the standard are interchanged, the new balance point from the left end is:",
                    options: [
                        { key: "a", text: "$40\\,$cm" },
                        { key: "b", text: "$50\\,$cm" },
                        { key: "c", text: "$60\\,$cm" },
                        { key: "d", text: "$36\\,$cm" }
                    ],
                    answer: "c",
                    explanation: "Initially $\\dfrac{X}{9}=\\dfrac{40}{60}\\Rightarrow X=6\\,\\Omega$. After interchange $\\dfrac{9}{6}=\\dfrac{l}{100-l}\\Rightarrow l=60\\,$cm; the balance point is simply mirrored to $100-40=60\\,$cm."
                },
                {
                    id: "ce4",
                    text: "A potentiometer wire $10\\,$m long has a resistance of $20\\,\\Omega$. It is connected in series with a $4\\,$V battery of negligible internal resistance and a $30\\,\\Omega$ resistor. The potential gradient along the wire is:",
                    options: [
                        { key: "a", text: "$0.08\\,$V/m" },
                        { key: "b", text: "$0.16\\,$V/m" },
                        { key: "c", text: "$0.40\\,$V/m" },
                        { key: "d", text: "$1.6\\,$V/m" }
                    ],
                    answer: "b",
                    explanation: "Circuit current $I=\\dfrac{4}{20+30}=0.08\\,$A. Voltage across the wire $=0.08\\times20=1.6\\,$V over $10\\,$m, so the gradient is $\\dfrac{1.6}{10}=0.16\\,$V/m."
                },
                {
                    id: "ce5",
                    text: "A galvanometer of resistance $50\\,\\Omega$ shows full-scale deflection for a current of $2\\,$mA. To convert it into an ammeter reading up to $5\\,$A, the shunt resistance required is approximately:",
                    options: [
                        { key: "a", text: "$0.02\\,\\Omega$" },
                        { key: "b", text: "$0.05\\,\\Omega$" },
                        { key: "c", text: "$0.2\\,\\Omega$" },
                        { key: "d", text: "$2\\,\\Omega$" }
                    ],
                    answer: "a",
                    explanation: "$S=\\dfrac{I_g G}{I-I_g}=\\dfrac{(2\\times10^{-3})(50)}{5-2\\times10^{-3}}=\\dfrac{0.1}{4.998}\\approx0.02\\,\\Omega$."
                },
                {
                    id: "ce6",
                    text: "A galvanometer of resistance $100\\,\\Omega$ gives full-scale deflection at $1\\,$mA. The resistance that must be connected in series to convert it into a voltmeter of range $10\\,$V is:",
                    options: [
                        { key: "a", text: "$9900\\,\\Omega$" },
                        { key: "b", text: "$10000\\,\\Omega$" },
                        { key: "c", text: "$1000\\,\\Omega$" },
                        { key: "d", text: "$100\\,\\Omega$" }
                    ],
                    answer: "a",
                    explanation: "$R=\\dfrac{V}{I_g}-G=\\dfrac{10}{10^{-3}}-100=10000-100=9900\\,\\Omega$."
                },
                {
                    id: "ce7",
                    text: "A metallic wire is stretched so that its length is doubled (volume remaining constant). If the potential difference across it is kept unchanged, the drift velocity of the conduction electrons becomes:",
                    options: [
                        { key: "a", text: "doubled" },
                        { key: "b", text: "halved" },
                        { key: "c", text: "one-fourth" },
                        { key: "d", text: "unchanged" }
                    ],
                    answer: "b",
                    explanation: "Stretching gives $L'=2L,\\,A'=A/2$, so $R'=4R$ and $I'=I/4$. Then $v_d'=\\dfrac{I'}{nA'e}=\\dfrac{I/4}{n(A/2)e}=\\dfrac{v_d}{2}$: the drift velocity is halved."
                },
                {
                    id: "ce8",
                    text: "Two heating coils, used separately across the same supply, take times $t_1$ and $t_2$ to boil identical amounts of water. If they are connected in series across the same supply, the time taken to boil the same amount of water is:",
                    options: [
                        { key: "a", text: "$t_1+t_2$" },
                        { key: "b", text: "$\\dfrac{t_1 t_2}{t_1+t_2}$" },
                        { key: "c", text: "$\\sqrt{t_1 t_2}$" },
                        { key: "d", text: "$\\dfrac{t_1+t_2}{2}$" }
                    ],
                    answer: "a",
                    explanation: "For a fixed supply voltage and fixed heat $H=\\dfrac{V^2 t}{R}$, the time is proportional to resistance. In series $R=R_1+R_2$, so $t=t_1+t_2$."
                },
                {
                    id: "ce9",
                    text: "In a balanced Wheatstone bridge, the positions of the galvanometer and the battery are interchanged. The bridge will then:",
                    options: [
                        { key: "a", text: "become unbalanced and a current will flow through the galvanometer" },
                        { key: "b", text: "remain balanced (the galvanometer still shows no deflection)" },
                        { key: "c", text: "behave as a short circuit" },
                        { key: "d", text: "draw the maximum current from the source" }
                    ],
                    answer: "b",
                    explanation: "The balance condition $\\dfrac{P}{Q}=\\dfrac{R}{S}$ is symmetric in the detector and source branches, so interchanging the galvanometer and battery leaves the bridge balanced."
                },
                {
                    id: "ce10",
                    text: "Five resistors, each of resistance $R$, are connected so that four form the arms of a Wheatstone bridge and the fifth forms the galvanometer (bridge) arm. The equivalent resistance between the input terminals is:",
                    options: [
                        { key: "a", text: "$\\dfrac{R}{2}$" },
                        { key: "b", text: "$R$" },
                        { key: "c", text: "$2R$" },
                        { key: "d", text: "$\\dfrac{5R}{2}$" }
                    ],
                    answer: "b",
                    explanation: "Because all arms are equal the bridge is balanced, so no current flows through the central arm. The network reduces to two branches of $2R$ in parallel: $R_{eq}=\\dfrac{2R\\times2R}{2R+2R}=R$."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) ALTERNATING CURRENT & THERMOELECTRICITY (Physics)
           rms/peak, impedance, power, Q-factor, phase, rectifier,
           Seebeck/Peltier, thermocouple
        ---------------------------------------------------------- */
        {
            id: "acthermo9",
            name: "Alternating Current & Thermoelectricity",
            subject: "Physics",
            accent: "amber",
            blurb: "rms & peak · impedance · power & Q-factor · LRC phase · rectifier · Seebeck/Peltier · thermocouple",
            questions: [
                {
                    id: "ac1",
                    text: "An alternating current is given by $i=(3\\sin\\omega t+4\\cos\\omega t)\\,$A. The rms value of this current is:",
                    options: [
                        { key: "a", text: "$5\\,$A" },
                        { key: "b", text: "$\\dfrac{5}{\\sqrt2}\\,$A" },
                        { key: "c", text: "$\\dfrac{7}{\\sqrt2}\\,$A" },
                        { key: "d", text: "$\\dfrac{3}{\\sqrt2}\\,$A" }
                    ],
                    answer: "b",
                    explanation: "The two terms combine into a single sinusoid of amplitude $\\sqrt{3^2+4^2}=5\\,$A, so $i_{rms}=\\dfrac{5}{\\sqrt2}\\approx3.54\\,$A."
                },
                {
                    id: "ac2",
                    text: "A current $i=(2+3\\sin\\omega t)\\,$A flows through a resistor. The rms value of the current is:",
                    options: [
                        { key: "a", text: "$\\sqrt{8.5}\\approx2.92\\,$A" },
                        { key: "b", text: "$3.54\\,$A" },
                        { key: "c", text: "$5\\,$A" },
                        { key: "d", text: "$2.5\\,$A" }
                    ],
                    answer: "a",
                    explanation: "$\\langle i^2\\rangle=2^2+\\dfrac{3^2}{2}=4+4.5=8.5$, so $i_{rms}=\\sqrt{8.5}\\approx2.92\\,$A (the DC and AC parts add in quadrature)."
                },
                {
                    id: "ac3",
                    text: "A series LCR circuit has $L=2\\,$H, $C=8\\,\\mu$F and $R=10\\,\\Omega$. The quality factor (Q-factor) of the circuit at resonance is:",
                    options: [
                        { key: "a", text: "$5$" },
                        { key: "b", text: "$25$" },
                        { key: "c", text: "$50$" },
                        { key: "d", text: "$100$" }
                    ],
                    answer: "c",
                    explanation: "$Q=\\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}=\\dfrac{1}{10}\\sqrt{\\dfrac{2}{8\\times10^{-6}}}=\\dfrac{1}{10}\\sqrt{2.5\\times10^{5}}=\\dfrac{500}{10}=50$."
                },
                {
                    id: "ac4",
                    text: "In a series LCR circuit $L=1\\,$H and $C=1\\,\\mu$F. The resonant angular frequency $\\omega_0$ is:",
                    options: [
                        { key: "a", text: "$100\\,$rad/s" },
                        { key: "b", text: "$1000\\,$rad/s" },
                        { key: "c", text: "$10^{4}\\,$rad/s" },
                        { key: "d", text: "$10^{6}\\,$rad/s" }
                    ],
                    answer: "b",
                    explanation: "$\\omega_0=\\dfrac{1}{\\sqrt{LC}}=\\dfrac{1}{\\sqrt{1\\times10^{-6}}}=10^{3}\\,$rad/s."
                },
                {
                    id: "ac5",
                    text: "A voltage $V=200\\sin(100\\pi t)\\,$V is applied to a series circuit having $R=30\\,\\Omega$ and inductive reactance $X_L=40\\,\\Omega$. The average power dissipated is:",
                    options: [
                        { key: "a", text: "$120\\,$W" },
                        { key: "b", text: "$240\\,$W" },
                        { key: "c", text: "$400\\,$W" },
                        { key: "d", text: "$480\\,$W" }
                    ],
                    answer: "b",
                    explanation: "$Z=\\sqrt{30^2+40^2}=50\\,\\Omega$, $I_0=\\dfrac{200}{50}=4\\,$A, $I_{rms}=2\\sqrt2\\,$A. $P=I_{rms}^2R=(2\\sqrt2)^2\\times30=8\\times30=240\\,$W."
                },
                {
                    id: "ac6",
                    text: "In a series AC circuit $R=100\\,\\Omega$ and the capacitive reactance $X_C=100\\,\\Omega$. The angle by which the current leads the applied voltage is:",
                    options: [
                        { key: "a", text: "$0^\\circ$" },
                        { key: "b", text: "$30^\\circ$" },
                        { key: "c", text: "$45^\\circ$" },
                        { key: "d", text: "$90^\\circ$" }
                    ],
                    answer: "c",
                    explanation: "$\\tan\\phi=\\dfrac{X_C}{R}=\\dfrac{100}{100}=1\\Rightarrow\\phi=45^\\circ$, with the current leading the voltage in a capacitive circuit."
                },
                {
                    id: "ac7",
                    text: "In a purely inductive AC circuit, the average power consumed over a complete cycle is zero because:",
                    options: [
                        { key: "a", text: "the inductive reactance is zero" },
                        { key: "b", text: "the current and voltage are exactly in phase" },
                        { key: "c", text: "the phase difference between current and voltage is $90^\\circ$" },
                        { key: "d", text: "the resistance of the circuit is infinite" }
                    ],
                    answer: "c",
                    explanation: "For a pure inductor the current lags the voltage by $90^\\circ$, so $\\cos\\phi=0$ and the average power $P=V_{rms}I_{rms}\\cos\\phi=0$ (a wattless current)."
                },
                {
                    id: "ac8",
                    text: "A full-wave bridge rectifier (four diodes) is fed by a $50\\,$Hz sinusoidal supply. The fundamental ripple frequency of the rectified output is:",
                    options: [
                        { key: "a", text: "$25\\,$Hz" },
                        { key: "b", text: "$50\\,$Hz" },
                        { key: "c", text: "$100\\,$Hz" },
                        { key: "d", text: "$200\\,$Hz" }
                    ],
                    answer: "c",
                    explanation: "A full-wave rectifier produces two output pulses per input cycle, so the ripple frequency is twice the input frequency: $2\\times50=100\\,$Hz."
                },
                {
                    id: "ac9",
                    text: "For a thermocouple the thermo-emf with the cold junction at $0^\\circ$C is $E=a\\theta+\\tfrac12 b\\theta^2$, with $a=14\\,\\mu$V/$^\\circ$C and $b=-0.04\\,\\mu$V/$^\\circ$C$^2$. The neutral temperature is:",
                    options: [
                        { key: "a", text: "$175^\\circ$C" },
                        { key: "b", text: "$280^\\circ$C" },
                        { key: "c", text: "$350^\\circ$C" },
                        { key: "d", text: "$700^\\circ$C" }
                    ],
                    answer: "c",
                    explanation: "The neutral temperature satisfies $\\dfrac{dE}{d\\theta}=a+b\\theta=0$, so $\\theta_n=-\\dfrac{a}{b}=-\\dfrac{14}{-0.04}=350^\\circ$C."
                },
                {
                    id: "ac10",
                    text: "Which statement correctly distinguishes the Peltier effect from ordinary Joule heating?",
                    options: [
                        { key: "a", text: "Both effects are reversible" },
                        { key: "b", text: "The Peltier effect is reversible (heating or cooling depends on the current direction), whereas Joule heating is irreversible" },
                        { key: "c", text: "The Peltier effect is irreversible, whereas Joule heating is reversible" },
                        { key: "d", text: "Both effects are irreversible" }
                    ],
                    answer: "b",
                    explanation: "Peltier heat is proportional to the current $I$ and reverses (absorption ↔ liberation) when the current reverses, so it is reversible. Joule heat $\\propto I^2$ is always liberated, hence irreversible."
                }
            ]
        },

        /* ----------------------------------------------------------
           3) MAGNETIC FIELD & MAGNETIC MATERIALS (Physics)
           B-field of conductors/coil/solenoid, force on charge &
           conductor, Hall effect, dia/para/ferro, hysteresis
        ---------------------------------------------------------- */
        {
            id: "magnetism9",
            name: "Magnetic Field & Materials",
            subject: "Physics",
            accent: "rose",
            blurb: "B-field of wire/coil/solenoid · force on charge & conductor · Hall effect · dia/para/ferro · hysteresis",
            questions: [
                {
                    id: "mf1",
                    text: "The magnetic field at a perpendicular distance of $4\\,$cm from a long straight wire carrying a current of $10\\,$A is ($\\mu_0=4\\pi\\times10^{-7}\\,$T·m/A):",
                    options: [
                        { key: "a", text: "$2.5\\times10^{-5}\\,$T" },
                        { key: "b", text: "$5\\times10^{-5}\\,$T" },
                        { key: "c", text: "$1\\times10^{-4}\\,$T" },
                        { key: "d", text: "$5\\times10^{-4}\\,$T" }
                    ],
                    answer: "b",
                    explanation: "$B=\\dfrac{\\mu_0 I}{2\\pi d}=\\dfrac{2\\times10^{-7}\\times10}{0.04}=5\\times10^{-5}\\,$T."
                },
                {
                    id: "mf2",
                    text: "A circular coil of $100$ turns and radius $5\\,$cm carries a current of $1\\,$A. The magnetic field at the centre of the coil is:",
                    options: [
                        { key: "a", text: "$1.26\\times10^{-3}\\,$T" },
                        { key: "b", text: "$6.28\\times10^{-4}\\,$T" },
                        { key: "c", text: "$1.26\\times10^{-4}\\,$T" },
                        { key: "d", text: "$2.51\\times10^{-3}\\,$T" }
                    ],
                    answer: "a",
                    explanation: "$B=\\dfrac{\\mu_0 N I}{2R}=\\dfrac{4\\pi\\times10^{-7}\\times100\\times1}{2\\times0.05}=4\\pi\\times10^{-4}\\approx1.26\\times10^{-3}\\,$T."
                },
                {
                    id: "mf3",
                    text: "A long solenoid has $2000$ turns per metre and carries a current of $2\\,$A. The magnetic field deep inside the solenoid is nearly:",
                    options: [
                        { key: "a", text: "$5.0\\times10^{-3}\\,$T" },
                        { key: "b", text: "$2.5\\times10^{-3}\\,$T" },
                        { key: "c", text: "$5.0\\times10^{-4}\\,$T" },
                        { key: "d", text: "$1.0\\times10^{-2}\\,$T" }
                    ],
                    answer: "a",
                    explanation: "$B=\\mu_0 n I=4\\pi\\times10^{-7}\\times2000\\times2\\approx5.0\\times10^{-3}\\,$T."
                },
                {
                    id: "mf4",
                    text: "A proton (mass $1.6\\times10^{-27}\\,$kg, charge $1.6\\times10^{-19}\\,$C) enters a uniform magnetic field of $0.5\\,$T at $10^{6}\\,$m/s, perpendicular to the field. The radius of its circular path is:",
                    options: [
                        { key: "a", text: "$0.5\\,$cm" },
                        { key: "b", text: "$1\\,$cm" },
                        { key: "c", text: "$2\\,$cm" },
                        { key: "d", text: "$4\\,$cm" }
                    ],
                    answer: "c",
                    explanation: "$r=\\dfrac{mv}{qB}=\\dfrac{1.6\\times10^{-27}\\times10^{6}}{1.6\\times10^{-19}\\times0.5}=2\\times10^{-2}\\,$m$=2\\,$cm."
                },
                {
                    id: "mf5",
                    text: "The time period of a charged particle moving in a circular path in a uniform magnetic field is independent of:",
                    options: [
                        { key: "a", text: "the charge of the particle" },
                        { key: "b", text: "the mass of the particle" },
                        { key: "c", text: "the magnetic field strength" },
                        { key: "d", text: "the speed of the particle" }
                    ],
                    answer: "d",
                    explanation: "$T=\\dfrac{2\\pi m}{qB}$ contains no speed term, so the period (and cyclotron frequency) is independent of the particle's speed and orbital radius."
                },
                {
                    id: "mf6",
                    text: "Two long parallel wires $1\\,$m apart carry currents of $5\\,$A and $10\\,$A in the same direction. The force per unit length between them is:",
                    options: [
                        { key: "a", text: "$10^{-5}\\,$N/m, attractive" },
                        { key: "b", text: "$10^{-5}\\,$N/m, repulsive" },
                        { key: "c", text: "$10^{-4}\\,$N/m, attractive" },
                        { key: "d", text: "$5\\times10^{-6}\\,$N/m, repulsive" }
                    ],
                    answer: "a",
                    explanation: "$\\dfrac{F}{L}=\\dfrac{\\mu_0 I_1 I_2}{2\\pi d}=\\dfrac{2\\times10^{-7}\\times5\\times10}{1}=10^{-5}\\,$N/m. Parallel currents in the same direction attract."
                },
                {
                    id: "mf7",
                    text: "A rectangular coil of $50$ turns and area $0.1\\,\\mathrm{m^2}$ carries a current of $2\\,$A in a uniform magnetic field of $0.2\\,$T. The maximum torque experienced by the coil is:",
                    options: [
                        { key: "a", text: "$0.5\\,$N·m" },
                        { key: "b", text: "$1\\,$N·m" },
                        { key: "c", text: "$2\\,$N·m" },
                        { key: "d", text: "$4\\,$N·m" }
                    ],
                    answer: "c",
                    explanation: "$\\tau_{max}=NIAB=50\\times2\\times0.1\\times0.2=2\\,$N·m (when the plane of the coil is parallel to $\\vec{B}$)."
                },
                {
                    id: "mf8",
                    text: "The Hall voltage developed across a current-carrying conductor placed in a magnetic field is directly proportional to the field $B$ and current $I$, and is inversely proportional to:",
                    options: [
                        { key: "a", text: "the number density of charge carriers and the thickness of the sample" },
                        { key: "b", text: "the width of the sample" },
                        { key: "c", text: "the length of the sample" },
                        { key: "d", text: "the applied potential difference" }
                    ],
                    answer: "a",
                    explanation: "$V_H=\\dfrac{BI}{nqt}$, so the Hall voltage falls as the carrier number density $n$ or the sample thickness $t$ increases."
                },
                {
                    id: "mf9",
                    text: "For a paramagnetic material the magnetic susceptibility $\\chi$ varies with absolute temperature $T$ according to Curie's law as:",
                    options: [
                        { key: "a", text: "$\\chi\\propto T$" },
                        { key: "b", text: "$\\chi\\propto \\dfrac{1}{T}$" },
                        { key: "c", text: "$\\chi\\propto T^2$" },
                        { key: "d", text: "$\\chi$ is independent of $T$" }
                    ],
                    answer: "b",
                    explanation: "Curie's law states $\\chi=\\dfrac{C}{T}$, so the paramagnetic susceptibility decreases with rising temperature as thermal agitation opposes alignment."
                },
                {
                    id: "mf10",
                    text: "The material best suited for the core of a transformer must have high permeability and a narrow hysteresis loop (low hysteresis loss). Such a material is:",
                    options: [
                        { key: "a", text: "steel" },
                        { key: "b", text: "soft iron" },
                        { key: "c", text: "a paramagnetic alloy" },
                        { key: "d", text: "a diamagnetic material" }
                    ],
                    answer: "b",
                    explanation: "Soft iron is a soft ferromagnet: its domains realign easily (high permeability) and its narrow hysteresis loop means little energy is lost per cycle, ideal for transformer cores."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) ELECTROMAGNETIC INDUCTION (Physics)
           Faraday & Lenz, generator, transformer, eddy currents,
           self/mutual inductance, energy in an inductor
        ---------------------------------------------------------- */
        {
            id: "emi9",
            name: "Electromagnetic Induction",
            subject: "Physics",
            accent: "cyan",
            blurb: "Faraday & Lenz · generator · transformer · eddy currents · self/mutual inductance · stored energy",
            questions: [
                {
                    id: "em1",
                    text: "The magnetic flux through a coil of $200$ turns changes uniformly from $0.01\\,$Wb to $0.05\\,$Wb in $0.2\\,$s. The average emf induced in the coil is:",
                    options: [
                        { key: "a", text: "$4\\,$V" },
                        { key: "b", text: "$8\\,$V" },
                        { key: "c", text: "$20\\,$V" },
                        { key: "d", text: "$40\\,$V" }
                    ],
                    answer: "d",
                    explanation: "$\\varepsilon=N\\dfrac{\\Delta\\Phi}{\\Delta t}=200\\times\\dfrac{0.05-0.01}{0.2}=200\\times0.2=40\\,$V."
                },
                {
                    id: "em2",
                    text: "A conducting rod of length $0.5\\,$m moves with a velocity of $4\\,$m/s perpendicular to a uniform magnetic field of $0.2\\,$T. The emf induced between its ends is:",
                    options: [
                        { key: "a", text: "$0.2\\,$V" },
                        { key: "b", text: "$0.4\\,$V" },
                        { key: "c", text: "$0.8\\,$V" },
                        { key: "d", text: "$4\\,$V" }
                    ],
                    answer: "b",
                    explanation: "Motional emf $\\varepsilon=Blv=0.2\\times0.5\\times4=0.4\\,$V."
                },
                {
                    id: "em3",
                    text: "The energy stored in an inductor of inductance $2\\,$H carrying a steady current of $3\\,$A is:",
                    options: [
                        { key: "a", text: "$3\\,$J" },
                        { key: "b", text: "$6\\,$J" },
                        { key: "c", text: "$9\\,$J" },
                        { key: "d", text: "$18\\,$J" }
                    ],
                    answer: "c",
                    explanation: "$U=\\tfrac12 L I^2=\\tfrac12\\times2\\times3^2=9\\,$J."
                },
                {
                    id: "em4",
                    text: "The current in a coil of self-inductance $0.5\\,$H changes from $2\\,$A to $6\\,$A in $0.1\\,$s. The magnitude of the self-induced emf is:",
                    options: [
                        { key: "a", text: "$5\\,$V" },
                        { key: "b", text: "$10\\,$V" },
                        { key: "c", text: "$20\\,$V" },
                        { key: "d", text: "$40\\,$V" }
                    ],
                    answer: "c",
                    explanation: "$\\varepsilon=L\\dfrac{dI}{dt}=0.5\\times\\dfrac{6-2}{0.1}=0.5\\times40=20\\,$V."
                },
                {
                    id: "em5",
                    text: "Two coils have a mutual inductance of $0.2\\,$H. If the current in the primary changes at the rate of $50\\,$A/s, the emf induced in the secondary is:",
                    options: [
                        { key: "a", text: "$2.5\\,$V" },
                        { key: "b", text: "$5\\,$V" },
                        { key: "c", text: "$10\\,$V" },
                        { key: "d", text: "$20\\,$V" }
                    ],
                    answer: "c",
                    explanation: "$\\varepsilon=M\\dfrac{dI}{dt}=0.2\\times50=10\\,$V."
                },
                {
                    id: "em6",
                    text: "An ideal step-down transformer has $1000$ turns in the primary and $100$ turns in the secondary. If the primary draws $0.5\\,$A at $220\\,$V, the secondary current is:",
                    options: [
                        { key: "a", text: "$0.05\\,$A" },
                        { key: "b", text: "$0.5\\,$A" },
                        { key: "c", text: "$5\\,$A" },
                        { key: "d", text: "$50\\,$A" }
                    ],
                    answer: "c",
                    explanation: "For an ideal transformer $\\dfrac{I_s}{I_p}=\\dfrac{N_p}{N_s}=\\dfrac{1000}{100}=10$, so $I_s=0.5\\times10=5\\,$A (power is conserved)."
                },
                {
                    id: "em7",
                    text: "A coil of $100$ turns and area $0.05\\,\\mathrm{m^2}$ rotates at an angular speed of $200\\,$rad/s in a uniform magnetic field of $0.1\\,$T. The peak emf generated is:",
                    options: [
                        { key: "a", text: "$10\\,$V" },
                        { key: "b", text: "$50\\,$V" },
                        { key: "c", text: "$100\\,$V" },
                        { key: "d", text: "$200\\,$V" }
                    ],
                    answer: "c",
                    explanation: "$\\varepsilon_0=NBA\\omega=100\\times0.1\\times0.05\\times200=100\\,$V."
                },
                {
                    id: "em8",
                    text: "Lenz's law, which fixes the direction of an induced current, is a direct consequence of the conservation of:",
                    options: [
                        { key: "a", text: "charge" },
                        { key: "b", text: "linear momentum" },
                        { key: "c", text: "energy" },
                        { key: "d", text: "magnetic flux" }
                    ],
                    answer: "c",
                    explanation: "The induced current opposes the change producing it; work must be done against this opposition, ensuring that electrical energy comes from mechanical work — a statement of energy conservation."
                },
                {
                    id: "em9",
                    text: "Laminating the core of a transformer with thin, insulated sheets reduces energy loss primarily by:",
                    options: [
                        { key: "a", text: "reducing the hysteresis loss" },
                        { key: "b", text: "increasing the resistance of the eddy-current paths" },
                        { key: "c", text: "reducing the flux linkage between the coils" },
                        { key: "d", text: "increasing the mutual inductance of the coils" }
                    ],
                    answer: "b",
                    explanation: "Laminations confine eddy currents to thin sheets with much higher path resistance, sharply lowering the induced eddy currents and the associated $I^2R$ heating."
                },
                {
                    id: "em10",
                    text: "If the number of turns of a solenoid is doubled while its length and cross-sectional area are kept unchanged, its self-inductance becomes:",
                    options: [
                        { key: "a", text: "halved" },
                        { key: "b", text: "doubled" },
                        { key: "c", text: "four times" },
                        { key: "d", text: "unchanged" }
                    ],
                    answer: "c",
                    explanation: "The self-inductance of a solenoid is $L=\\dfrac{\\mu_0 N^2 A}{l}\\propto N^2$, so doubling $N$ makes $L$ four times larger."
                }
            ]
        }
    ]
};

const DAY10 = {
    day: 10,
    title: "Day 10",
    subtitle: "Human Physiology · Microbiology & Immunology",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) RESPIRATORY & CIRCULATORY SYSTEM  (Zoology) — harder
           Gas exchange/transport, regulation, cardiac cycle & output,
           heartbeat, blood groups & pressure, disorders
        ---------------------------------------------------------- */
        {
            id: "respcirc10",
            name: "Respiratory & Circulatory System",
            subject: "Zoology",
            accent: "rose",
            blurb: "Gas transport · Bohr effect · respiratory centre · cardiac cycle & output · blood groups & pressure",
            questions: [
                {
                    id: "rc1",
                    text: "The Bohr effect refers to the rightward shift of the oxygen–haemoglobin dissociation curve. This shift, which favours the unloading of $\\mathrm{O_2}$ at the tissues, is promoted by:",
                    options: [
                        { key: "a", text: "decreased $p\\mathrm{CO_2}$ and increased blood pH" },
                        { key: "b", text: "increased $p\\mathrm{CO_2}$ and decreased blood pH" },
                        { key: "c", text: "decreased temperature and decreased 2,3-BPG" },
                        { key: "d", text: "increased $\\mathrm{O_2}$ affinity of haemoglobin" }
                    ],
                    answer: "b",
                    explanation: "A rise in $p\\mathrm{CO_2}$, $\\mathrm{H^+}$ (lower pH), temperature and 2,3-BPG lowers haemoglobin's affinity for $\\mathrm{O_2}$, shifting the curve to the right and releasing more oxygen to active tissues."
                },
                {
                    id: "rc2",
                    text: "The largest fraction of carbon dioxide transported from the tissues to the lungs is carried in the blood as:",
                    options: [
                        { key: "a", text: "gas dissolved in the plasma (~7%)" },
                        { key: "b", text: "carbaminohaemoglobin (~23%)" },
                        { key: "c", text: "bicarbonate ions in the plasma (~70%)" },
                        { key: "d", text: "carbonic acid molecules" }
                    ],
                    answer: "c",
                    explanation: "About 70% of $\\mathrm{CO_2}$ travels as $\\mathrm{HCO_3^-}$ (formed via carbonic anhydrase in RBCs), ~23% as carbaminohaemoglobin and only ~7% dissolved in plasma."
                },
                {
                    id: "rc3",
                    text: "At the tissues, as $\\mathrm{HCO_3^-}$ diffuses out of the red blood cells into the plasma, electrical neutrality is maintained by the inward movement of chloride ions. This is called the:",
                    options: [
                        { key: "a", text: "sodium pump" },
                        { key: "b", text: "chloride shift (Hamburger phenomenon)" },
                        { key: "c", text: "Bohr shift" },
                        { key: "d", text: "Haldane effect" }
                    ],
                    answer: "b",
                    explanation: "The chloride shift, or Hamburger phenomenon, is the inward diffusion of $\\mathrm{Cl^-}$ into the RBC to balance the charge lost as $\\mathrm{HCO_3^-}$ leaves, keeping the cell electrically neutral."
                },
                {
                    id: "rc4",
                    text: "The basic rhythm of breathing is generated in the medulla oblongata. The centre in the pons that fine-tunes this rhythm by limiting the duration of inspiration is the:",
                    options: [
                        { key: "a", text: "dorsal respiratory group" },
                        { key: "b", text: "pneumotaxic centre" },
                        { key: "c", text: "apneustic centre" },
                        { key: "d", text: "chemosensitive area" }
                    ],
                    answer: "b",
                    explanation: "The pneumotaxic centre in the pons moderates the medullary respiratory rhythm by switching off inspiration, thereby regulating breathing rate; disorders such as emphysema instead impair the gas-exchange surface."
                },
                {
                    id: "rc5",
                    text: "If the tidal volume is $500\\,$mL, the anatomical dead space is $150\\,$mL and the respiratory rate is $12$ breaths per minute, the alveolar ventilation rate is:",
                    options: [
                        { key: "a", text: "$6.0\\,$L/min" },
                        { key: "b", text: "$4.2\\,$L/min" },
                        { key: "c", text: "$1.8\\,$L/min" },
                        { key: "d", text: "$4.2\\,$mL/min" }
                    ],
                    answer: "b",
                    explanation: "Alveolar ventilation $=(\\text{tidal volume}-\\text{dead space})\\times\\text{rate}=(500-150)\\times12=350\\times12=4200\\,$mL/min$=4.2\\,$L/min."
                },
                {
                    id: "rc6",
                    text: "In a normal cardiac cycle lasting $0.8\\,$s (heart rate $75$/min), the duration of ventricular systole is approximately:",
                    options: [
                        { key: "a", text: "$0.1\\,$s" },
                        { key: "b", text: "$0.3\\,$s" },
                        { key: "c", text: "$0.4\\,$s" },
                        { key: "d", text: "$0.5\\,$s" }
                    ],
                    answer: "b",
                    explanation: "Of the $0.8\\,$s cycle, atrial systole occupies $0.1\\,$s, ventricular systole $0.3\\,$s and the joint diastole $0.4\\,$s."
                },
                {
                    id: "rc7",
                    text: "If the stroke volume of the heart is $70\\,$mL and the heart rate is $72$ beats per minute, the cardiac output is approximately:",
                    options: [
                        { key: "a", text: "$5.0\\,$L/min" },
                        { key: "b", text: "$7.2\\,$L/min" },
                        { key: "c", text: "$3.5\\,$L/min" },
                        { key: "d", text: "$10\\,$L/min" }
                    ],
                    answer: "a",
                    explanation: "Cardiac output $=$ stroke volume $\\times$ heart rate $=70\\times72=5040\\,$mL/min$\\approx5.0\\,$L/min."
                },
                {
                    id: "rc8",
                    text: "The correct sequence in which an impulse spreads through the conducting system of the heart is:",
                    options: [
                        { key: "a", text: "AV node → SA node → Purkinje fibres → bundle of His" },
                        { key: "b", text: "SA node → AV node → bundle of His → Purkinje fibres" },
                        { key: "c", text: "SA node → bundle of His → AV node → Purkinje fibres" },
                        { key: "d", text: "SA node → Purkinje fibres → AV node → bundle of His" }
                    ],
                    answer: "b",
                    explanation: "The impulse originates at the SA node (pacemaker), is delayed at the AV node, then travels down the bundle of His and its branches to the Purkinje fibres, spreading through the ventricular walls."
                },
                {
                    id: "rc9",
                    text: "A person with blood group $\\mathrm{O^-}$ is called a universal donor because their red blood cells:",
                    options: [
                        { key: "a", text: "carry both A and B antigens" },
                        { key: "b", text: "lack A and B antigens and the Rh (D) antigen" },
                        { key: "c", text: "carry anti-A and anti-B antibodies on their surface" },
                        { key: "d", text: "lack all antibodies in the plasma" }
                    ],
                    answer: "b",
                    explanation: "Group $\\mathrm{O^-}$ erythrocytes bear neither A/B agglutinogens nor the Rh antigen, so they are not agglutinated by the recipient's plasma antibodies in a transfusion."
                },
                {
                    id: "rc10",
                    text: "For a person with a blood pressure of $120/80\\,$mm Hg, the mean arterial pressure (MAP) is approximately:",
                    options: [
                        { key: "a", text: "$100\\,$mm Hg" },
                        { key: "b", text: "$93\\,$mm Hg" },
                        { key: "c", text: "$40\\,$mm Hg" },
                        { key: "d", text: "$120\\,$mm Hg" }
                    ],
                    answer: "b",
                    explanation: "$\\text{MAP}=\\text{diastolic}+\\tfrac13(\\text{systolic}-\\text{diastolic})=80+\\tfrac13(40)\\approx93\\,$mm Hg. A sustained reading of $140/90$ or higher indicates hypertension."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) EXCRETORY & NERVOUS SYSTEM (Zoology)
           Urine formation, renal disorders, nerve impulse,
           CNS/PNS/autonomic
        ---------------------------------------------------------- */
        {
            id: "excrnerv10",
            name: "Excretory & Nervous System",
            subject: "Zoology",
            accent: "cyan",
            blurb: "Ultrafiltration · GFR & clearance · counter-current · ADH · nerve impulse · autonomic control",
            questions: [
                {
                    id: "en1",
                    text: "Ultrafiltration of blood in the glomerulus is driven chiefly by the:",
                    options: [
                        { key: "a", text: "colloid osmotic pressure of the plasma proteins" },
                        { key: "b", text: "high glomerular capillary hydrostatic (blood) pressure" },
                        { key: "c", text: "hydrostatic pressure of the filtrate in Bowman's capsule" },
                        { key: "d", text: "active transport of solutes by podocytes" }
                    ],
                    answer: "b",
                    explanation: "The high hydrostatic pressure in the glomerular capillaries (favoured by the wider afferent and narrower efferent arteriole) exceeds the opposing colloid osmotic and capsular pressures, forcing filtrate into Bowman's capsule."
                },
                {
                    id: "en2",
                    text: "Inulin is used to measure the glomerular filtration rate because it is freely filtered but neither reabsorbed nor secreted. If plasma inulin $=1\\,$mg/mL, urine inulin $=120\\,$mg/mL and urine flow $=1\\,$mL/min, the GFR is:",
                    options: [
                        { key: "a", text: "$120\\,$mL/min" },
                        { key: "b", text: "$1\\,$mL/min" },
                        { key: "c", text: "$60\\,$mL/min" },
                        { key: "d", text: "$12\\,$mL/min" }
                    ],
                    answer: "a",
                    explanation: "GFR equals the inulin clearance $=\\dfrac{U\\times V}{P}=\\dfrac{120\\times1}{1}=120\\,$mL/min, close to the normal value of about $125\\,$mL/min."
                },
                {
                    id: "en3",
                    text: "The counter-current multiplier system that enables the kidney to produce hyperosmotic (concentrated) urine operates mainly in the:",
                    options: [
                        { key: "a", text: "proximal convoluted tubule" },
                        { key: "b", text: "loop of Henle" },
                        { key: "c", text: "Bowman's capsule" },
                        { key: "d", text: "glomerulus" }
                    ],
                    answer: "b",
                    explanation: "The loop of Henle acts as a counter-current multiplier and the vasa recta as a counter-current exchanger, together building the medullary osmotic gradient needed to concentrate urine."
                },
                {
                    id: "en4",
                    text: "Antidiuretic hormone (ADH/vasopressin) conserves body water by increasing water reabsorption, acting principally on the:",
                    options: [
                        { key: "a", text: "glomerulus" },
                        { key: "b", text: "descending limb of the loop of Henle" },
                        { key: "c", text: "distal convoluted tubule and collecting duct" },
                        { key: "d", text: "proximal convoluted tubule" }
                    ],
                    answer: "c",
                    explanation: "ADH inserts aquaporin water channels into the cells of the distal convoluted tubule and collecting duct, making them permeable to water and thus reducing urine volume."
                },
                {
                    id: "en5",
                    text: "In chronic kidney failure the accumulation of urea and other nitrogenous wastes in the blood (uraemia) is clinically managed by:",
                    options: [
                        { key: "a", text: "administering diuretics only" },
                        { key: "b", text: "haemodialysis using an artificial kidney" },
                        { key: "c", text: "insulin therapy" },
                        { key: "d", text: "repeated blood transfusion" }
                    ],
                    answer: "b",
                    explanation: "Haemodialysis passes the patient's blood through a semipermeable membrane bathed in dialysate, removing urea and excess ions by diffusion when the kidneys can no longer excrete them."
                },
                {
                    id: "en6",
                    text: "The resting membrane potential of a neuron (about $-70\\,$mV) is established and maintained mainly by:",
                    options: [
                        { key: "a", text: "a high resting permeability to $\\mathrm{Na^+}$" },
                        { key: "b", text: "the $\\mathrm{Na^+}\\text{–}\\mathrm{K^+}$ ATPase pump together with high resting $\\mathrm{K^+}$ permeability" },
                        { key: "c", text: "the influx of $\\mathrm{Ca^{2+}}$ ions" },
                        { key: "d", text: "active pumping of $\\mathrm{Cl^-}$ alone" }
                    ],
                    answer: "b",
                    explanation: "The $\\mathrm{Na^+}\\text{–}\\mathrm{K^+}$ pump (3 $\\mathrm{Na^+}$ out : 2 $\\mathrm{K^+}$ in) combined with the membrane's high resting permeability to $\\mathrm{K^+}$ keeps the inside of the axon negative at about $-70\\,$mV."
                },
                {
                    id: "en7",
                    text: "The rapid, energy-efficient conduction of a nerve impulse along a myelinated axon, in which the action potential 'jumps' from one gap to the next, is called saltatory conduction. These gaps are the:",
                    options: [
                        { key: "a", text: "synaptic knobs" },
                        { key: "b", text: "nodes of Ranvier" },
                        { key: "c", text: "Schwann cell nuclei" },
                        { key: "d", text: "dendritic spines" }
                    ],
                    answer: "b",
                    explanation: "Myelin insulates the axon except at the nodes of Ranvier, where the membrane is exposed; the impulse regenerates only at these nodes, so it appears to leap from node to node, greatly increasing conduction speed."
                },
                {
                    id: "en8",
                    text: "At a cholinergic synapse the neurotransmitter acetylcholine is rapidly broken down, terminating its action, by the enzyme:",
                    options: [
                        { key: "a", text: "monoamine oxidase" },
                        { key: "b", text: "acetylcholinesterase" },
                        { key: "c", text: "catechol-O-methyltransferase" },
                        { key: "d", text: "adenylate cyclase" }
                    ],
                    answer: "b",
                    explanation: "Acetylcholinesterase in the synaptic cleft hydrolyses acetylcholine into choline and acetate, stopping continued stimulation of the post-synaptic membrane so that discrete impulses can be transmitted."
                },
                {
                    id: "en9",
                    text: "Parasympathetic (vagal) stimulation slows the heart rate. The neurotransmitter released at the SA node to produce this effect is:",
                    options: [
                        { key: "a", text: "noradrenaline" },
                        { key: "b", text: "acetylcholine" },
                        { key: "c", text: "dopamine" },
                        { key: "d", text: "adrenaline" }
                    ],
                    answer: "b",
                    explanation: "The vagus (parasympathetic) releases acetylcholine, which acts on muscarinic receptors of the SA node to hyperpolarise it and reduce heart rate, whereas sympathetic fibres release noradrenaline to speed it up."
                },
                {
                    id: "en10",
                    text: "The part of the brain that regulates body temperature, hunger, thirst and osmoregulation, and links the nervous system with the endocrine system, is the:",
                    options: [
                        { key: "a", text: "cerebellum" },
                        { key: "b", text: "medulla oblongata" },
                        { key: "c", text: "hypothalamus" },
                        { key: "d", text: "thalamus" }
                    ],
                    answer: "c",
                    explanation: "The hypothalamus houses centres for thermoregulation, hunger, thirst and water balance, and controls the pituitary gland, thereby integrating neural and hormonal responses."
                }
            ]
        },

        /* ----------------------------------------------------------
           3) SENSE ORGANS, ENDOCRINE & REPRODUCTION (Zoology)
           Eye & ear, glands/hormones & disorders, gametogenesis,
           ovarian & menstrual cycle
        ---------------------------------------------------------- */
        {
            id: "senseendrepr10",
            name: "Sense Organs, Endocrine & Reproduction",
            subject: "Zoology",
            accent: "amber",
            blurb: "Eye & ear · pituitary & thyroid · insulin · spermatogenesis & oogenesis · LH surge & ovulation",
            questions: [
                {
                    id: "se1",
                    text: "The photoreceptor cells responsible for colour vision and sharp visual acuity in bright light, densely packed at the fovea centralis, are the:",
                    options: [
                        { key: "a", text: "rods" },
                        { key: "b", text: "cones" },
                        { key: "c", text: "bipolar cells" },
                        { key: "d", text: "ganglion cells" }
                    ],
                    answer: "b",
                    explanation: "Cones contain photopsins sensitive to different wavelengths and mediate colour and high-acuity vision; rods, containing rhodopsin, are more sensitive but give only monochrome vision in dim light."
                },
                {
                    id: "se2",
                    text: "A person who can see nearby objects clearly but cannot focus on distant objects is myopic. The image is formed in front of the retina and is corrected using a:",
                    options: [
                        { key: "a", text: "convex (converging) lens" },
                        { key: "b", text: "concave (diverging) lens" },
                        { key: "c", text: "cylindrical lens" },
                        { key: "d", text: "plano-convex lens" }
                    ],
                    answer: "b",
                    explanation: "In myopia (short-sightedness) the eyeball is too long or the lens too converging, so the image falls before the retina; a concave lens diverges the incoming rays so that they focus on the retina."
                },
                {
                    id: "se3",
                    text: "The receptor for hearing, the organ of Corti (spiral organ), is located within the:",
                    options: [
                        { key: "a", text: "semicircular canals" },
                        { key: "b", text: "cochlea" },
                        { key: "c", text: "utricle" },
                        { key: "d", text: "tympanic membrane" }
                    ],
                    answer: "b",
                    explanation: "The organ of Corti rests on the basilar membrane inside the cochlea of the inner ear; its hair cells convert sound-induced vibrations into nerve impulses carried by the auditory nerve."
                },
                {
                    id: "se4",
                    text: "Dynamic equilibrium, the sense of rotational movement of the head, is detected by the:",
                    options: [
                        { key: "a", text: "cochlea" },
                        { key: "b", text: "semicircular canals" },
                        { key: "c", text: "organ of Corti" },
                        { key: "d", text: "eustachian tube" }
                    ],
                    answer: "b",
                    explanation: "The three semicircular canals, set in mutually perpendicular planes, contain the crista ampullaris that senses angular acceleration, providing information about rotational (dynamic) balance."
                },
                {
                    id: "se5",
                    text: "Which of the following hormones is NOT secreted by the anterior lobe of the pituitary gland?",
                    options: [
                        { key: "a", text: "growth hormone (GH)" },
                        { key: "b", text: "thyroid-stimulating hormone (TSH)" },
                        { key: "c", text: "oxytocin" },
                        { key: "d", text: "adrenocorticotropic hormone (ACTH)" }
                    ],
                    answer: "c",
                    explanation: "Oxytocin is synthesised in the hypothalamus and released from the posterior pituitary; GH, TSH, ACTH, FSH, LH and prolactin are the anterior pituitary hormones."
                },
                {
                    id: "se6",
                    text: "A dietary deficiency of iodine lowers thyroxine output and causes enlargement of the thyroid gland, a condition known as:",
                    options: [
                        { key: "a", text: "cretinism" },
                        { key: "b", text: "simple (endemic) goitre" },
                        { key: "c", text: "Graves' disease" },
                        { key: "d", text: "acromegaly" }
                    ],
                    answer: "b",
                    explanation: "Low iodine reduces thyroxine synthesis; falling thyroxine raises TSH, which over-stimulates and enlarges the thyroid, producing a simple goitre. Cretinism is congenital hypothyroidism in children."
                },
                {
                    id: "se7",
                    text: "Diabetes mellitus results from a lack, or reduced action, of insulin. Insulin is secreted by the:",
                    options: [
                        { key: "a", text: "$\\alpha$-cells of the islets of Langerhans" },
                        { key: "b", text: "$\\beta$-cells of the islets of Langerhans" },
                        { key: "c", text: "cells of the adrenal cortex" },
                        { key: "d", text: "acinar cells of the pancreas" }
                    ],
                    answer: "b",
                    explanation: "The $\\beta$-cells of the pancreatic islets of Langerhans secrete insulin, which lowers blood glucose; the $\\alpha$-cells secrete the antagonistic hormone glucagon."
                },
                {
                    id: "se8",
                    text: "During spermatogenesis in humans, a single primary spermatocyte (diploid) after meiosis ultimately gives rise to:",
                    options: [
                        { key: "a", text: "one functional sperm" },
                        { key: "b", text: "two functional sperm" },
                        { key: "c", text: "four functional sperm" },
                        { key: "d", text: "one sperm and three polar bodies" }
                    ],
                    answer: "c",
                    explanation: "In spermatogenesis both meiotic divisions are equal, so one primary spermatocyte yields two secondary spermatocytes and finally four functional haploid spermatozoa — unlike oogenesis, which forms only one ovum."
                },
                {
                    id: "se9",
                    text: "In human oogenesis, a single primary oocyte produces one functional ovum and:",
                    options: [
                        { key: "a", text: "three functional ova" },
                        { key: "b", text: "three (non-functional) polar bodies" },
                        { key: "c", text: "four ova" },
                        { key: "d", text: "two polar bodies only" }
                    ],
                    answer: "b",
                    explanation: "Unequal cytoplasmic division in oogenesis concentrates the cytoplasm in one large ovum while the other products form three small polar bodies that soon degenerate."
                },
                {
                    id: "se10",
                    text: "The mid-cycle surge of luteinizing hormone (LH), at about day 14 of the menstrual cycle, directly triggers:",
                    options: [
                        { key: "a", text: "menstruation" },
                        { key: "b", text: "ovulation (rupture of the Graafian follicle)" },
                        { key: "c", text: "shedding of the endometrium" },
                        { key: "d", text: "degeneration of the corpus luteum" }
                    ],
                    answer: "b",
                    explanation: "Rising oestrogen from the mature follicle evokes a sharp LH surge that ruptures the Graafian follicle, releasing the secondary oocyte (ovulation); the remnant then becomes the corpus luteum."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) MICROBIAL DISEASES & IMMUNOLOGY (Zoology)
           Typhoid, TB, HIV, Cholera, Influenza, Hepatitis, Candidiasis,
           innate/acquired immunity, antibodies, vaccines
        ---------------------------------------------------------- */
        {
            id: "microbeimmuno10",
            name: "Microbial Diseases & Immunology",
            subject: "Zoology",
            accent: "emerald",
            blurb: "Typhoid · TB · HIV · cholera · candidiasis · innate vs acquired · antibodies · vaccines",
            questions: [
                {
                    id: "mi1",
                    text: "Typhoid fever, diagnosed by the Widal test, is caused by the bacterium:",
                    options: [
                        { key: "a", text: "Vibrio cholerae" },
                        { key: "b", text: "Salmonella typhi" },
                        { key: "c", text: "Mycobacterium tuberculosis" },
                        { key: "d", text: "Shigella dysenteriae" }
                    ],
                    answer: "b",
                    explanation: "Salmonella typhi (S. enterica serovar Typhi) invades the intestinal mucosa and spreads via the blood; the Widal test detects agglutinating antibodies against its O and H antigens."
                },
                {
                    id: "mi2",
                    text: "Tuberculosis is caused by Mycobacterium tuberculosis. The tuberculin (Mantoux) skin test used in its diagnosis is an example of a:",
                    options: [
                        { key: "a", text: "type I immediate hypersensitivity reaction" },
                        { key: "b", text: "type IV delayed-type (cell-mediated) hypersensitivity reaction" },
                        { key: "c", text: "purely humoral antibody response" },
                        { key: "d", text: "type II cytotoxic reaction" }
                    ],
                    answer: "b",
                    explanation: "The tuberculin response develops over 48–72 hours and is mediated by sensitised T-lymphocytes and macrophages, the hallmark of type IV delayed (cell-mediated) hypersensitivity."
                },
                {
                    id: "mi3",
                    text: "HIV, the retrovirus that causes AIDS, progressively weakens immunity because it preferentially infects and destroys:",
                    options: [
                        { key: "a", text: "B-lymphocytes" },
                        { key: "b", text: "CD4$^+$ helper T-lymphocytes" },
                        { key: "c", text: "red blood cells" },
                        { key: "d", text: "neutrophils" }
                    ],
                    answer: "b",
                    explanation: "HIV binds the CD4 receptor and destroys helper T-cells, the coordinators of the immune response; their depletion cripples both humoral and cell-mediated immunity, leading to opportunistic infections."
                },
                {
                    id: "mi4",
                    text: "The enzyme reverse transcriptase, characteristic of HIV and other retroviruses, catalyses the synthesis of:",
                    options: [
                        { key: "a", text: "RNA from a DNA template" },
                        { key: "b", text: "DNA from an RNA template" },
                        { key: "c", text: "protein from an mRNA template" },
                        { key: "d", text: "DNA from a DNA template" }
                    ],
                    answer: "b",
                    explanation: "Reverse transcriptase copies the viral RNA genome into complementary DNA (cDNA), which is then integrated into the host chromosome as a provirus — a reversal of the usual DNA→RNA flow."
                },
                {
                    id: "mi5",
                    text: "The 'rice-water stools' of cholera result from an enterotoxin (produced by Vibrio cholerae) that:",
                    options: [
                        { key: "a", text: "kills the intestinal epithelium, blocking sodium absorption" },
                        { key: "b", text: "raises intracellular cAMP, causing massive secretion of ions and water into the gut" },
                        { key: "c", text: "invades the mucosa to cause bloody dysentery" },
                        { key: "d", text: "forms a pseudomembrane over the intestinal lining" }
                    ],
                    answer: "b",
                    explanation: "Cholera toxin locks adenylate cyclase 'on', so cAMP soars and enterocytes pour out $\\mathrm{Cl^-}$ and water, producing the voluminous, watery, isotonic diarrhoea that causes rapid dehydration."
                },
                {
                    id: "mi6",
                    text: "Which of the following pairings of a disease with its type of causative organism is INCORRECT?",
                    options: [
                        { key: "a", text: "Influenza – virus" },
                        { key: "b", text: "Candidiasis – fungus" },
                        { key: "c", text: "Cholera – virus" },
                        { key: "d", text: "Tuberculosis – bacterium" }
                    ],
                    answer: "c",
                    explanation: "Cholera is a bacterial disease caused by Vibrio cholerae, not a virus. Influenza and hepatitis are viral, candidiasis is fungal, and typhoid, cholera and TB are bacterial."
                },
                {
                    id: "mi7",
                    text: "Candidiasis, an opportunistic infection often seen in immunocompromised patients (e.g. oral thrush), is caused by:",
                    options: [
                        { key: "a", text: "a bacterium" },
                        { key: "b", text: "a yeast-like fungus (Candida albicans)" },
                        { key: "c", text: "a protozoan parasite" },
                        { key: "d", text: "a virus" }
                    ],
                    answer: "b",
                    explanation: "Candida albicans is a yeast-like fungus that normally lives harmlessly on mucous membranes but overgrows to cause thrush and other infections when immunity or normal flora are disturbed."
                },
                {
                    id: "mi8",
                    text: "Which of the following is a feature of acquired (adaptive) immunity but NOT of innate immunity?",
                    options: [
                        { key: "a", text: "physical barriers such as the skin" },
                        { key: "b", text: "phagocytosis by neutrophils and macrophages" },
                        { key: "c", text: "immunological memory and antigen specificity" },
                        { key: "d", text: "the inflammatory response" }
                    ],
                    answer: "c",
                    explanation: "Adaptive immunity is defined by its specificity for particular antigens and its memory, giving a faster, stronger secondary response. Innate immunity (barriers, phagocytosis, inflammation) is non-specific and lacks memory."
                },
                {
                    id: "mi9",
                    text: "The class of antibody (immunoglobulin) that is the first to be produced in a primary immune response and exists as a pentamer is:",
                    options: [
                        { key: "a", text: "IgG" },
                        { key: "b", text: "IgA" },
                        { key: "c", text: "IgM" },
                        { key: "d", text: "IgE" }
                    ],
                    answer: "c",
                    explanation: "IgM, a pentamer with ten antigen-binding sites, appears first in a primary response and is an efficient agglutinator; IgG dominates the secondary response, IgA guards secretions and IgE mediates allergy."
                },
                {
                    id: "mi10",
                    text: "The tetanus and diphtheria vaccines are prepared from bacterial exotoxins that have been chemically inactivated so they no longer harm but still provoke immunity. Such vaccines are called:",
                    options: [
                        { key: "a", text: "live attenuated vaccines" },
                        { key: "b", text: "inactivated (killed) whole-organism vaccines" },
                        { key: "c", text: "toxoid vaccines" },
                        { key: "d", text: "mRNA vaccines" }
                    ],
                    answer: "c",
                    explanation: "A toxoid is an inactivated exotoxin that keeps its antigenicity but loses toxicity, stimulating antitoxin antibodies (as in DPT). Live attenuated vaccines use weakened microbes (BCG, OPV) and inactivated vaccines use killed whole pathogens (Salk polio)."
                }
            ]
        }
    ]
};

/* ============================================================
   DAY 11 — Animal Tissues & Histology
   25% negative marking (each wrong answer = −0.25 mark)
   40 MCQs · CEE / MECEE entrance difficulty (harder)
   Epithelial (10) · Connective (10) · Muscular (10) · Nervous (10)
   Structure · location · function
   ============================================================ */
const DAY11 = {
    day: 11,
    title: "Day 11",
    subtitle: "Animal Tissues & Histology · Epithelial · Connective · Muscular · Nervous",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) EPITHELIAL TISSUE  (Zoology) — harder
           Simple/compound types, glands, junctions, basement membrane,
           apical specialisations, structure · location · function
        ---------------------------------------------------------- */
        {
            id: "epithelial11",
            name: "Epithelial Tissue",
            subject: "Zoology",
            accent: "rose",
            blurb: "Squamous/cuboidal/columnar · pseudostratified & transitional · glands · cell junctions · basement membrane",
            questions: [
                {
                    id: "ep1",
                    text: "Every epithelium rests on a basement membrane whose deeper basal lamina is secreted by the epithelial cells themselves. The basal lamina is composed chiefly of:",
                    options: [
                        { key: "a", text: "collagen type I and elastin" },
                        { key: "b", text: "collagen type IV, laminin and proteoglycans" },
                        { key: "c", text: "keratin and fibrin" },
                        { key: "d", text: "reticular (type III) collagen only" }
                    ],
                    answer: "b",
                    explanation: "The basal lamina is a thin sheet of collagen type IV, the glycoproteins laminin and fibronectin, and proteoglycans; the underlying reticular lamina (type III collagen) is contributed by the connective tissue, together forming the basement membrane."
                },
                {
                    id: "ep2",
                    text: "The epithelium lining the trachea appears layered because its nuclei lie at different heights, yet every cell actually contacts the basement membrane. This epithelium is:",
                    options: [
                        { key: "a", text: "stratified squamous" },
                        { key: "b", text: "simple columnar" },
                        { key: "c", text: "pseudostratified ciliated columnar" },
                        { key: "d", text: "transitional" }
                    ],
                    answer: "c",
                    explanation: "In pseudostratified epithelium all cells touch the basement membrane but not all reach the free surface, so their staggered nuclei give a false impression of layering; the ciliated form lines the trachea and larger airways."
                },
                {
                    id: "ep3",
                    text: "The epithelium that lines the urinary bladder and ureters, and which flattens as the organ distends, is transitional epithelium (urothelium). Its key functional property is that it:",
                    options: [
                        { key: "a", text: "carries out gas exchange" },
                        { key: "b", text: "permits stretching (distension) without tearing" },
                        { key: "c", text: "secretes digestive enzymes" },
                        { key: "d", text: "absorbs glucose actively" }
                    ],
                    answer: "b",
                    explanation: "Transitional epithelium can change shape from cuboidal/dome-like (relaxed) to squamous (stretched), allowing the bladder wall to expand as urine accumulates while remaining an impermeable barrier."
                },
                {
                    id: "ep4",
                    text: "Which of the following structures are ALL lined (or formed) by simple squamous epithelium, suiting them to diffusion or filtration?",
                    options: [
                        { key: "a", text: "wall of the alveoli, wall of Bowman's capsule and capillary endothelium" },
                        { key: "b", text: "stomach, trachea and epidermis" },
                        { key: "c", text: "sweat gland ducts, bladder and skin" },
                        { key: "d", text: "small intestine, thyroid follicle and ovary surface" }
                    ],
                    answer: "a",
                    explanation: "Simple squamous epithelium is a single layer of thin, flat cells ideal for rapid diffusion and filtration — hence it forms the alveolar wall, the parietal layer of Bowman's capsule and the endothelium of blood vessels and heart."
                },
                {
                    id: "ep5",
                    text: "Near the apex of adjacent gut epithelial cells, a belt-like junction fuses the outer membrane leaflets to prevent leakage of luminal contents between cells. This is the:",
                    options: [
                        { key: "a", text: "desmosome (macula adherens)" },
                        { key: "b", text: "gap junction" },
                        { key: "c", text: "tight junction (zonula occludens)" },
                        { key: "d", text: "hemidesmosome" }
                    ],
                    answer: "c",
                    explanation: "Tight junctions form a continuous watertight seal that blocks paracellular leakage and maintains the apical–basal polarity of the cell; desmosomes give mechanical anchorage while gap junctions allow communication."
                },
                {
                    id: "ep6",
                    text: "Cardiac and smooth muscle, and some epithelia, are electrically and metabolically coupled by junctions built of connexon channels that allow ions and small molecules to pass directly from cell to cell. These are:",
                    options: [
                        { key: "a", text: "tight junctions" },
                        { key: "b", text: "adherens junctions" },
                        { key: "c", text: "gap junctions" },
                        { key: "d", text: "desmosomes" }
                    ],
                    answer: "c",
                    explanation: "Gap junctions are formed by paired connexons (each of six connexin proteins) that create aqueous pores linking the cytoplasm of neighbouring cells, permitting ionic coupling and rapid, synchronised responses."
                },
                {
                    id: "ep7",
                    text: "Glands are classified by their mode of secretion. A gland in which the entire secretory cell disintegrates and becomes the secretion — as in the sebaceous glands of skin — is termed:",
                    options: [
                        { key: "a", text: "merocrine (eccrine)" },
                        { key: "b", text: "apocrine" },
                        { key: "c", text: "holocrine" },
                        { key: "d", text: "endocrine" }
                    ],
                    answer: "c",
                    explanation: "In holocrine secretion (sebaceous glands) whole cells break down to release their product; apocrine glands (e.g. mammary) lose only the apical cytoplasm, while merocrine glands (salivary, sweat) release by exocytosis without cell loss."
                },
                {
                    id: "ep8",
                    text: "The mucus-secreting goblet cells scattered in the lining of the intestine and respiratory tract are best described as:",
                    options: [
                        { key: "a", text: "unicellular exocrine glands" },
                        { key: "b", text: "multicellular endocrine glands" },
                        { key: "c", text: "compound tubular glands" },
                        { key: "d", text: "holocrine glands" }
                    ],
                    answer: "a",
                    explanation: "A goblet cell is a single modified columnar cell that secretes mucus directly onto the epithelial surface, making it the classic example of a unicellular exocrine gland (merocrine mode)."
                },
                {
                    id: "ep9",
                    text: "The apical surface of the epithelium of the proximal convoluted tubule and the small intestine bears a dense 'brush border' that greatly increases the area for absorption. This border is made of:",
                    options: [
                        { key: "a", text: "motile cilia containing a 9+2 axoneme" },
                        { key: "b", text: "microvilli supported by actin filaments" },
                        { key: "c", text: "flagella" },
                        { key: "d", text: "keratin projections" }
                    ],
                    answer: "b",
                    explanation: "Microvilli are non-motile, finger-like extensions of the apical membrane cored by actin filaments; packed together they form the brush (striated) border that amplifies the absorptive surface — unlike motile cilia, which sweep material along."
                },
                {
                    id: "ep10",
                    text: "Simple cuboidal epithelium is specialised for secretion and absorption. It is the lining epithelium of the:",
                    options: [
                        { key: "a", text: "walls of the alveoli" },
                        { key: "b", text: "proximal convoluted tubule of the nephron and thyroid follicles" },
                        { key: "c", text: "inner lining of blood vessels" },
                        { key: "d", text: "urinary bladder" }
                    ],
                    answer: "b",
                    explanation: "Cube-shaped cells with central rounded nuclei line kidney tubules, thyroid follicles, and the ducts of many glands, and cover the ovary (germinal epithelium); alveoli and vessel linings are simple squamous, and the bladder is transitional."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) CONNECTIVE TISSUE  (Zoology)
           Loose/areolar, adipose, dense regular/irregular, cartilage,
           bone, blood; cells, fibres, matrix · location · function
        ---------------------------------------------------------- */
        {
            id: "connective11",
            name: "Connective Tissue",
            subject: "Zoology",
            accent: "amber",
            blurb: "Areolar & adipose · tendon/ligament · cartilage & bone · blood · fibres, cells & matrix",
            questions: [
                {
                    id: "ct1",
                    text: "Unlike epithelium, which arises from all three germ layers, the connective tissues of the body develop almost entirely from embryonic:",
                    options: [
                        { key: "a", text: "ectoderm" },
                        { key: "b", text: "endoderm" },
                        { key: "c", text: "mesenchyme (mesoderm)" },
                        { key: "d", text: "neural crest only" }
                    ],
                    answer: "c",
                    explanation: "Connective tissues arise from mesenchyme, a loose embryonic tissue derived mainly from mesoderm; this common origin underlies the shared plan of scattered cells embedded in an abundant extracellular matrix."
                },
                {
                    id: "ct2",
                    text: "Areolar (loose) connective tissue contains several fixed and wandering cells. The cell that releases histamine and heparin, and is prominent in allergic and inflammatory responses, is the:",
                    options: [
                        { key: "a", text: "fibroblast" },
                        { key: "b", text: "macrophage" },
                        { key: "c", text: "mast cell" },
                        { key: "d", text: "plasma cell" }
                    ],
                    answer: "c",
                    explanation: "Mast cells store granules of histamine (a vasodilator that increases capillary permeability) and heparin (an anticoagulant); fibroblasts secrete fibres and matrix, macrophages phagocytose, and plasma cells make antibodies."
                },
                {
                    id: "ct3",
                    text: "A tendon, which attaches skeletal muscle to bone, is dense regular connective tissue built to resist tension in one direction. Its parallel bundles are made predominantly of:",
                    options: [
                        { key: "a", text: "yellow elastic fibres" },
                        { key: "b", text: "reticular fibres" },
                        { key: "c", text: "white collagen fibres" },
                        { key: "d", text: "smooth muscle fibres" }
                    ],
                    answer: "c",
                    explanation: "Tendons consist of densely packed, parallel collagen (white) fibres that give great tensile strength with little stretch; ligaments joining bone to bone contain more elastic fibres, allowing limited recoil."
                },
                {
                    id: "ct4",
                    text: "The intervertebral discs between the vertebrae, which absorb compressive shock, are made of the toughest type of cartilage, namely:",
                    options: [
                        { key: "a", text: "hyaline cartilage" },
                        { key: "b", text: "elastic cartilage" },
                        { key: "c", text: "fibrocartilage" },
                        { key: "d", text: "calcified cartilage" }
                    ],
                    answer: "c",
                    explanation: "Fibrocartilage has thick bundles of collagen in its matrix, giving high tensile and compressive strength; it forms the intervertebral discs and pubic symphysis. Hyaline lines joint surfaces and elastic cartilage forms the pinna and epiglottis."
                },
                {
                    id: "ct5",
                    text: "In cartilage, the cells that secrete and maintain the matrix (chondrin) lie enclosed within small cavities called lacunae. These cells are the:",
                    options: [
                        { key: "a", text: "osteocytes" },
                        { key: "b", text: "chondrocytes" },
                        { key: "c", text: "fibroblasts" },
                        { key: "d", text: "adipocytes" }
                    ],
                    answer: "b",
                    explanation: "Chondrocytes occupy lacunae within the firm, avascular chondrin matrix and are nourished by diffusion; because it lacks blood vessels, cartilage heals slowly. Osteocytes are the corresponding cells of bone."
                },
                {
                    id: "ct6",
                    text: "The structural and functional unit of compact bone, consisting of concentric lamellae around a central canal that carries blood vessels, is the:",
                    options: [
                        { key: "a", text: "sarcomere" },
                        { key: "b", text: "Haversian system (osteon)" },
                        { key: "c", text: "nephron" },
                        { key: "d", text: "lacuna" }
                    ],
                    answer: "b",
                    explanation: "In an osteon, osteocytes in lacunae are arranged in concentric rings (lamellae) around a central Haversian canal and communicate through fine canaliculi; the calcified matrix of ossein with calcium phosphate makes bone hard and rigid."
                },
                {
                    id: "ct7",
                    text: "Blood is classified as a connective tissue chiefly because it possesses:",
                    options: [
                        { key: "a", text: "abundant collagen fibres" },
                        { key: "b", text: "a fluid extracellular matrix (plasma) with formed elements, and a mesodermal origin" },
                        { key: "c", text: "chondrocytes in lacunae" },
                        { key: "d", text: "a solid calcified matrix" }
                    ],
                    answer: "b",
                    explanation: "Like other connective tissues, blood develops from mesoderm and consists of cells (RBCs, WBCs, platelets) suspended in an extensive extracellular matrix — here the liquid plasma; its 'fibres' (fibrin) appear only during clotting."
                },
                {
                    id: "ct8",
                    text: "Adipose tissue is a specialised loose connective tissue whose cells are distended by a large fat droplet that pushes the nucleus to the periphery. A principal function of adipose tissue is:",
                    options: [
                        { key: "a", text: "transport of respiratory gases" },
                        { key: "b", text: "energy storage, thermal insulation and cushioning of organs" },
                        { key: "c", text: "conduction of nerve impulses" },
                        { key: "d", text: "production of antibodies" }
                    ],
                    answer: "b",
                    explanation: "Adipocytes store neutral fat as an energy reserve; subcutaneous adipose insulates against heat loss and packing fat around organs such as the kidneys and eyeballs provides mechanical support and cushioning."
                },
                {
                    id: "ct9",
                    text: "The delicate branching network that forms the supporting framework (stroma) of the spleen, lymph nodes and bone marrow is made of reticular fibres, which are composed of:",
                    options: [
                        { key: "a", text: "elastin" },
                        { key: "b", text: "collagen type III" },
                        { key: "c", text: "keratin" },
                        { key: "d", text: "fibrin" }
                    ],
                    answer: "b",
                    explanation: "Reticular fibres are fine, branched fibres of collagen type III that weave a meshwork supporting the cells of lymphoid organs and glands; they are secreted by reticular cells, a type of fibroblast."
                },
                {
                    id: "ct10",
                    text: "The large, actively phagocytic 'scavenger' cells of connective tissue (histiocytes) that engulf debris and pathogens are derived from which blood cells?",
                    options: [
                        { key: "a", text: "lymphocytes" },
                        { key: "b", text: "monocytes" },
                        { key: "c", text: "mast cells" },
                        { key: "d", text: "fibroblasts" }
                    ],
                    answer: "b",
                    explanation: "Blood monocytes migrate into the tissues and enlarge to become macrophages (histiocytes) of the mononuclear phagocyte system; they clear cell debris and microbes and present antigens to lymphocytes."
                }
            ]
        },

        /* ----------------------------------------------------------
           3) MUSCULAR TISSUE  (Zoology)
           Skeletal, cardiac & smooth; striations, nuclei, intercalated
           discs, sarcomere & sliding filament · location · function
        ---------------------------------------------------------- */
        {
            id: "muscular11",
            name: "Muscular Tissue",
            subject: "Zoology",
            accent: "emerald",
            blurb: "Skeletal/cardiac/smooth · striations & nuclei · intercalated discs · sarcomere & sliding filament theory",
            questions: [
                {
                    id: "mu1",
                    text: "Among the three types of muscle, the one that is striated in appearance yet involuntary in control, and shows branching fibres joined by intercalated discs, is:",
                    options: [
                        { key: "a", text: "skeletal muscle" },
                        { key: "b", text: "smooth muscle" },
                        { key: "c", text: "cardiac muscle" },
                        { key: "d", text: "all three are voluntary" }
                    ],
                    answer: "c",
                    explanation: "Cardiac muscle combines cross-striations (like skeletal muscle) with involuntary control (like smooth muscle); its branched, uninucleate fibres are linked end-to-end by intercalated discs that synchronise contraction."
                },
                {
                    id: "mu2",
                    text: "A single skeletal muscle fibre is best described structurally as:",
                    options: [
                        { key: "a", text: "uninucleate and spindle-shaped" },
                        { key: "b", text: "multinucleate and cylindrical, with nuclei pushed to the periphery" },
                        { key: "c", text: "branched with a single central nucleus" },
                        { key: "d", text: "non-striated with tapering ends" }
                    ],
                    answer: "b",
                    explanation: "Each skeletal muscle fibre is a long, unbranched, cylindrical syncytium formed by fusion of many myoblasts, so it contains many nuclei located just beneath the sarcolemma; its ordered myofilaments produce the characteristic striations."
                },
                {
                    id: "mu3",
                    text: "Intercalated discs, which contain both gap junctions and desmosomes to allow rapid impulse spread and firm adhesion, are a distinguishing feature of:",
                    options: [
                        { key: "a", text: "skeletal muscle" },
                        { key: "b", text: "smooth muscle" },
                        { key: "c", text: "cardiac muscle" },
                        { key: "d", text: "all three types" }
                    ],
                    answer: "c",
                    explanation: "Intercalated discs are the specialised junctions between cardiac muscle cells; their gap junctions couple the cells electrically so the heart behaves as a functional syncytium, while desmosomes prevent the cells from pulling apart during contraction."
                },
                {
                    id: "mu4",
                    text: "The repeating contractile unit of a striated myofibril, defined as the region between two successive Z-lines, is the:",
                    options: [
                        { key: "a", text: "sarcomere" },
                        { key: "b", text: "sarcolemma" },
                        { key: "c", text: "sarcoplasm" },
                        { key: "d", text: "sarcoplasmic reticulum" }
                    ],
                    answer: "a",
                    explanation: "A sarcomere extends from one Z-line to the next and contains a central A band (thick myosin, with the lighter H zone) flanked by half of an I band (thin actin) on each side; its shortening is the basis of muscle contraction."
                },
                {
                    id: "mu5",
                    text: "According to the sliding filament theory, during muscle contraction:",
                    options: [
                        { key: "a", text: "the A band shortens while the I band lengthens" },
                        { key: "b", text: "the length of the A band stays constant while the I band and H zone shorten" },
                        { key: "c", text: "the actin filaments themselves shorten" },
                        { key: "d", text: "the sarcomere lengthens" }
                    ],
                    answer: "b",
                    explanation: "The filaments do not shorten; instead the thin (actin) filaments slide over the thick (myosin) filaments toward the sarcomere centre. Because the A band equals the myosin length it is unchanged, whereas the I band and H zone narrow as overlap increases."
                },
                {
                    id: "mu6",
                    text: "Non-striated (smooth) muscle, with spindle-shaped uninucleate cells under involuntary control, is found in the:",
                    options: [
                        { key: "a", text: "biceps of the arm" },
                        { key: "b", text: "walls of the intestine, blood vessels and urinary bladder" },
                        { key: "c", text: "wall of the heart" },
                        { key: "d", text: "diaphragm" }
                    ],
                    answer: "b",
                    explanation: "Smooth muscle occurs in the walls of hollow visceral organs — the gut, blood vessels, bladder, uterus and respiratory tract — where its slow, sustained, involuntary contractions move contents along (e.g. peristalsis) and regulate lumen diameter."
                },
                {
                    id: "mu7",
                    text: "Red muscle fibres are suited to prolonged, fatigue-resistant activity because, compared with white fibres, they are especially rich in:",
                    options: [
                        { key: "a", text: "stored glycogen only" },
                        { key: "b", text: "myoglobin and mitochondria" },
                        { key: "c", text: "sarcoplasmic reticulum only" },
                        { key: "d", text: "fat droplets only" }
                    ],
                    answer: "b",
                    explanation: "Red (slow-twitch) fibres contain abundant myoglobin (an oxygen store giving the red colour) and numerous mitochondria, so they rely on aerobic respiration and resist fatigue; white (fast-twitch) fibres depend on anaerobic glycolysis and tire quickly."
                },
                {
                    id: "mu8",
                    text: "In the excitation–contraction coupling of skeletal muscle, contraction is triggered when calcium ions, released from the sarcoplasmic reticulum, bind to:",
                    options: [
                        { key: "a", text: "the myosin head" },
                        { key: "b", text: "troponin C on the thin filament" },
                        { key: "c", text: "tropomyosin directly" },
                        { key: "d", text: "actin's active site directly" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{Ca^{2+}}$ binds troponin C, changing its shape so that tropomyosin shifts and exposes the myosin-binding sites on actin; cross-bridges then form and the power stroke pulls the filaments, using ATP."
                },
                {
                    id: "mu9",
                    text: "A physiological property that distinguishes cardiac muscle from skeletal muscle is that cardiac muscle:",
                    options: [
                        { key: "a", text: "is under voluntary control" },
                        { key: "b", text: "is myogenic (self-excitatory) and virtually does not fatigue" },
                        { key: "c", text: "lacks striations" },
                        { key: "d", text: "is multinucleate" }
                    ],
                    answer: "b",
                    explanation: "Cardiac muscle generates its own rhythmic impulses (myogenic, from the SA node) and, owing to its rich blood supply and dense mitochondria plus a long refractory period, it contracts ceaselessly without tetanus or fatigue throughout life."
                },
                {
                    id: "mu10",
                    text: "Which pairing of muscle filament with its protein is correct?",
                    options: [
                        { key: "a", text: "thick filament – actin; thin filament – myosin" },
                        { key: "b", text: "thick filament – myosin; thin filament – actin" },
                        { key: "c", text: "both filaments are made of tubulin" },
                        { key: "d", text: "thick filament – troponin; thin filament – tropomyosin" }
                    ],
                    answer: "b",
                    explanation: "The thick filaments are built of myosin (whose heads form cross-bridges and possess ATPase activity), while the thin filaments are chiefly actin, associated with the regulatory proteins troponin and tropomyosin."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) NERVOUS TISSUE  (Zoology)
           Neuron structure & types, neuroglia, myelination, synapse,
           grey vs white matter · location · function
        ---------------------------------------------------------- */
        {
            id: "nervous11",
            name: "Nervous Tissue",
            subject: "Zoology",
            accent: "cyan",
            blurb: "Neuron parts & Nissl bodies · neuron types · neuroglia · myelin & synapse · grey vs white matter",
            questions: [
                {
                    id: "nt1",
                    text: "Within a neuron, the single long process that conducts impulses AWAY from the cell body toward the synaptic terminals is the:",
                    options: [
                        { key: "a", text: "dendrite" },
                        { key: "b", text: "axon" },
                        { key: "c", text: "cyton (perikaryon)" },
                        { key: "d", text: "synaptic cleft" }
                    ],
                    answer: "b",
                    explanation: "The axon arises from the axon hillock and carries the action potential away from the cell body to the axon terminals; dendrites, by contrast, are the branched processes that receive signals and conduct them toward the cyton."
                },
                {
                    id: "nt2",
                    text: "Nissl granules (rough endoplasmic reticulum with ribosomes), which are the sites of protein synthesis in a neuron, are found in the:",
                    options: [
                        { key: "a", text: "axon and axon terminals" },
                        { key: "b", text: "cell body and dendrites" },
                        { key: "c", text: "nodes of Ranvier" },
                        { key: "d", text: "myelin sheath" }
                    ],
                    answer: "b",
                    explanation: "Nissl bodies occur in the cyton and dendrites but are absent from the axon hillock and the axon; this uneven distribution helps distinguish an axon from dendrites and reflects that protein synthesis occurs in the cell body."
                },
                {
                    id: "nt3",
                    text: "Classified by the number of processes, the light-sensitive and sound-sensitive receptor neurons of the retina and the cochlea are typically:",
                    options: [
                        { key: "a", text: "multipolar neurons" },
                        { key: "b", text: "bipolar neurons" },
                        { key: "c", text: "unipolar neurons" },
                        { key: "d", text: "apolar neurons" }
                    ],
                    answer: "b",
                    explanation: "Bipolar neurons have one dendrite and one axon extending from opposite poles of the cell body and occur in the retina, olfactory epithelium and cochlear/vestibular ganglia; multipolar neurons predominate in the brain and spinal cord."
                },
                {
                    id: "nt4",
                    text: "In the central nervous system the myelin sheath around several axons is formed by the wrapping processes of which glial cell?",
                    options: [
                        { key: "a", text: "Schwann cell" },
                        { key: "b", text: "oligodendrocyte" },
                        { key: "c", text: "astrocyte" },
                        { key: "d", text: "microglia" }
                    ],
                    answer: "b",
                    explanation: "A single oligodendrocyte extends several processes, each myelinating a segment of a different CNS axon. In the PNS this role is performed by Schwann cells, each ensheathing just one internode of one axon."
                },
                {
                    id: "nt5",
                    text: "Along a myelinated peripheral nerve fibre, the myelin is interrupted at regular gaps where the axon membrane is exposed and the impulse is regenerated (saltatory conduction). The myelin between these gaps is laid down by:",
                    options: [
                        { key: "a", text: "oligodendrocytes" },
                        { key: "b", text: "Schwann cells" },
                        { key: "c", text: "astrocytes" },
                        { key: "d", text: "ependymal cells" }
                    ],
                    answer: "b",
                    explanation: "In the peripheral nervous system Schwann cells spiral around the axon to form myelin; the unmyelinated gaps between adjacent Schwann cells are the nodes of Ranvier, at which the action potential is regenerated, speeding conduction."
                },
                {
                    id: "nt6",
                    text: "The most numerous glial cells of the CNS, which are star-shaped, anchor neurons to blood vessels and contribute to the blood–brain barrier, are the:",
                    options: [
                        { key: "a", text: "microglia" },
                        { key: "b", text: "astrocytes" },
                        { key: "c", text: "Schwann cells" },
                        { key: "d", text: "oligodendrocytes" }
                    ],
                    answer: "b",
                    explanation: "Astrocytes support and nourish neurons, regulate the ionic and chemical environment, and their end-feet around capillaries help form the blood–brain barrier that controls what passes from blood into nervous tissue."
                },
                {
                    id: "nt7",
                    text: "The small, phagocytic glial cells that act as the resident immune defence and 'macrophages' of the central nervous system are the:",
                    options: [
                        { key: "a", text: "astrocytes" },
                        { key: "b", text: "oligodendrocytes" },
                        { key: "c", text: "microglia" },
                        { key: "d", text: "ependymal cells" }
                    ],
                    answer: "c",
                    explanation: "Microglia are the smallest neuroglia and, unlike the ectodermally derived macroglia, are of mesodermal origin; they migrate to sites of injury or infection and remove microbes, dead cells and debris by phagocytosis."
                },
                {
                    id: "nt8",
                    text: "Transmission across a chemical synapse is unidirectional (only from one neuron to the next) because the neurotransmitter is stored in and released only from the:",
                    options: [
                        { key: "a", text: "postsynaptic membrane" },
                        { key: "b", text: "presynaptic knob (axon terminal)" },
                        { key: "c", text: "synaptic cleft" },
                        { key: "d", text: "dendrite of the receiving neuron" }
                    ],
                    answer: "b",
                    explanation: "Synaptic vesicles of neurotransmitter lie only in the presynaptic terminal, while the matching receptors lie only on the postsynaptic membrane; therefore a signal can cross the synapse in one direction alone."
                },
                {
                    id: "nt9",
                    text: "The ciliated neuroglial cells that line the ventricles of the brain and the central canal of the spinal cord, and help circulate cerebrospinal fluid, are the:",
                    options: [
                        { key: "a", text: "astrocytes" },
                        { key: "b", text: "ependymal cells" },
                        { key: "c", text: "microglia" },
                        { key: "d", text: "Schwann cells" }
                    ],
                    answer: "b",
                    explanation: "Ependymal cells form the epithelial lining of the brain ventricles and spinal central canal; their cilia keep the cerebrospinal fluid moving, and in the choroid plexuses they participate in producing CSF."
                },
                {
                    id: "nt10",
                    text: "The white matter of the brain and spinal cord appears white, and is distinguished from grey matter, because it consists mainly of:",
                    options: [
                        { key: "a", text: "neuron cell bodies and dendrites" },
                        { key: "b", text: "myelinated axons (nerve fibres)" },
                        { key: "c", text: "Nissl granules" },
                        { key: "d", text: "blood vessels" }
                    ],
                    answer: "b",
                    explanation: "White matter is composed largely of myelinated axons, whose lipid-rich myelin gives the pale colour, whereas grey matter contains the neuron cell bodies, dendrites and unmyelinated fibres where synaptic processing occurs."
                }
            ]
        }
    ]
};

/* ============================================================
   DAY 12 — Modern Physics · Circular Motion · Elasticity
   25% negative marking (each wrong answer = −0.25 mark)
   50 MCQs · CEE / MECEE entrance difficulty
   Nuclear physics & radioactivity (10) · Electron, photon &
   photoelectric effect (10) · Atomic structure & wave-particle
   duality (10) · Semiconductors, logic gates & particle physics
   (10) · Circular & periodic motion (5) · Elasticity (5)
   ============================================================ */
const DAY12 = {
    day: 12,
    title: "Day 12",
    subtitle: "Modern Physics · Circular Motion · Elasticity",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) NUCLEAR PHYSICS & RADIOACTIVITY  (Physics)
           Nucleus size & density, mass defect & binding energy,
           fusion & fission, α/β/γ, half-life & mean life, carbon dating
        ---------------------------------------------------------- */
        {
            id: "nuclear12",
            name: "Nuclear Physics & Radioactivity",
            subject: "Physics",
            accent: "blue",
            blurb: "Nucleus & density · mass defect & binding energy · fusion & fission · α/β/γ · half-life · carbon dating",
            questions: [
                {
                    id: "nu1",
                    text: "Assuming the empirical relation $R=R_0 A^{1/3}$ with $R_0=1.2\\,$fm, the radius of a $_{52}^{125}\\mathrm{Te}$ nucleus is approximately:",
                    options: [
                        { key: "a", text: "$3\\,$fm" },
                        { key: "b", text: "$6\\,$fm" },
                        { key: "c", text: "$9\\,$fm" },
                        { key: "d", text: "$12\\,$fm" }
                    ],
                    answer: "b",
                    explanation: "$R=R_0 A^{1/3}=1.2\\times(125)^{1/3}=1.2\\times5=6\\,$fm. Because $R\\propto A^{1/3}$, even the heaviest nuclei are only a few fm across."
                },
                {
                    id: "nu2",
                    text: "Because the volume of a nucleus is proportional to its mass number $A$, the density of nuclear matter is:",
                    options: [
                        { key: "a", text: "different for every nuclide" },
                        { key: "b", text: "approximately the same for all nuclei, about $2.3\\times10^{17}\\,\\mathrm{kg/m^{3}}$" },
                        { key: "c", text: "directly proportional to $A$" },
                        { key: "d", text: "inversely proportional to $A^{1/3}$" }
                    ],
                    answer: "b",
                    explanation: "Mass $\\propto A$ and volume $\\propto R^{3}\\propto A$, so $\\rho=\\dfrac{M}{V}=\\dfrac{m_p}{\\tfrac{4}{3}\\pi R_0^{3}}\\approx2.3\\times10^{17}\\,\\mathrm{kg/m^{3}}$ — an essentially universal constant."
                },
                {
                    id: "nu3",
                    text: "The mass defect of a $_2^{4}\\mathrm{He}$ nucleus is $0.0303\\,$u. Taking $1\\,\\mathrm{u}\\equiv 931\\,$MeV, its total binding energy is:",
                    options: [
                        { key: "a", text: "$7.1\\,$MeV" },
                        { key: "b", text: "$14.1\\,$MeV" },
                        { key: "c", text: "$28.2\\,$MeV" },
                        { key: "d", text: "$56.4\\,$MeV" }
                    ],
                    answer: "c",
                    explanation: "$BE=\\Delta m\\,c^{2}=0.0303\\times931\\approx28.2\\,$MeV. Dividing by $A=4$ gives $\\sim7\\,$MeV per nucleon, close to the maximum of the BE/nucleon curve."
                },
                {
                    id: "nu4",
                    text: "The binding energy per nucleon is a maximum (about $8.8\\,$MeV) for nuclei with mass number close to:",
                    options: [
                        { key: "a", text: "$4$ (helium)" },
                        { key: "b", text: "$56$ (iron)" },
                        { key: "c", text: "$145$" },
                        { key: "d", text: "$238$ (uranium)" }
                    ],
                    answer: "b",
                    explanation: "The BE/nucleon curve peaks near $^{56}\\mathrm{Fe}$. Lighter nuclei can release energy by fusion and heavier ones by fission, both migrating toward the peak of maximum stability."
                },
                {
                    id: "nu5",
                    text: "Nuclear fusion — the process that powers the Sun — is characterised by:",
                    options: [
                        { key: "a", text: "the splitting of a heavy nucleus into two lighter fragments" },
                        { key: "b", text: "the combination of light nuclei to form a heavier nucleus, with release of energy" },
                        { key: "c", text: "spontaneous emission of $\\alpha$ particles by an unstable nucleus" },
                        { key: "d", text: "the emission of $\\gamma$ rays alone" }
                    ],
                    answer: "b",
                    explanation: "In the solar proton–proton chain, four $^{1}\\mathrm{H}$ nuclei ultimately fuse into one $^{4}\\mathrm{He}$ nucleus, releasing about $26.7\\,$MeV per helium formed because the product's BE/nucleon exceeds that of the fuel."
                },
                {
                    id: "nu6",
                    text: "The approximate energy released per fission of a $^{235}\\mathrm{U}$ nucleus by a thermal neutron is:",
                    options: [
                        { key: "a", text: "$2\\,$MeV" },
                        { key: "b", text: "$20\\,$MeV" },
                        { key: "c", text: "$200\\,$MeV" },
                        { key: "d", text: "$2000\\,$MeV" }
                    ],
                    answer: "c",
                    explanation: "Each $^{235}\\mathrm{U}$ fission liberates about $200\\,$MeV, most of it appearing as kinetic energy of the fragments. This is the basis of thermal-reactor and weapons-grade energy release."
                },
                {
                    id: "nu7",
                    text: "A radioactive nucleus emits one $\\alpha$ particle followed by two $\\beta^{-}$ particles. Compared with the parent, the resulting nuclide has:",
                    options: [
                        { key: "a", text: "mass number decreased by $4$ and atomic number unchanged" },
                        { key: "b", text: "mass number decreased by $4$ and atomic number decreased by $2$" },
                        { key: "c", text: "mass number and atomic number both unchanged" },
                        { key: "d", text: "mass number unchanged and atomic number decreased by $2$" }
                    ],
                    answer: "a",
                    explanation: "$\\alpha$ emission gives $(A,Z)\\to(A-4,Z-2)$; each $\\beta^{-}$ raises $Z$ by $1$ without changing $A$. Two $\\beta^{-}$ therefore restore $Z$, leaving the net change $A\\to A-4$, $Z\\to Z$."
                },
                {
                    id: "nu8",
                    text: "A radioactive sample loses $87.5\\%$ of its atoms in $30\\,$min. Its half-life is:",
                    options: [
                        { key: "a", text: "$5\\,$min" },
                        { key: "b", text: "$10\\,$min" },
                        { key: "c", text: "$15\\,$min" },
                        { key: "d", text: "$20\\,$min" }
                    ],
                    answer: "b",
                    explanation: "Remaining fraction $=1-0.875=\\tfrac{1}{8}=\\left(\\tfrac12\\right)^{3}$, so three half-lives have elapsed. Hence $T_{1/2}=30/3=10\\,$min."
                },
                {
                    id: "nu9",
                    text: "The mean life $\\tau$ of a radioactive nuclide is related to its half-life $T_{1/2}$ by:",
                    options: [
                        { key: "a", text: "$\\tau=T_{1/2}$" },
                        { key: "b", text: "$\\tau=0.693\\,T_{1/2}$" },
                        { key: "c", text: "$\\tau=T_{1/2}/0.693\\approx1.44\\,T_{1/2}$" },
                        { key: "d", text: "$\\tau=2\\,T_{1/2}$" }
                    ],
                    answer: "c",
                    explanation: "The decay constant $\\lambda=\\ln 2/T_{1/2}$ and the mean life $\\tau=1/\\lambda=T_{1/2}/\\ln 2\\approx1.44\\,T_{1/2}$, so the mean life is always longer than the half-life."
                },
                {
                    id: "nu10",
                    text: "A wooden artefact from an ancient tomb shows a $^{14}\\mathrm{C}$ activity equal to one-quarter that of a living tree. Given the half-life of $^{14}\\mathrm{C}$ is $5730\\,$years, the age of the sample is:",
                    options: [
                        { key: "a", text: "$2865\\,$years" },
                        { key: "b", text: "$5730\\,$years" },
                        { key: "c", text: "$11460\\,$years" },
                        { key: "d", text: "$17190\\,$years" }
                    ],
                    answer: "c",
                    explanation: "$N/N_0=\\tfrac14=\\left(\\tfrac12\\right)^{2}$, so two half-lives have passed. Age $=2\\times5730=11460\\,$years — the principle of radiocarbon dating."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) ELECTRON, PHOTON & PHOTOELECTRIC EFFECT  (Physics)
           Millikan, JJ Thomson, motion of e⁻ in E & B fields, photon
           energy/momentum, Einstein's PE equation, stopping potential
        ---------------------------------------------------------- */
        {
            id: "electronphoton12",
            name: "Electron, Photon & Photoelectric Effect",
            subject: "Physics",
            accent: "amber",
            blurb: "Millikan · JJ Thomson · e⁻ in E and B · photon energy & momentum · Einstein PE equation · stopping potential",
            questions: [
                {
                    id: "eph1",
                    text: "Millikan's oil-drop experiment was the first precise measurement to demonstrate that:",
                    options: [
                        { key: "a", text: "the mass of the electron is $9.1\\times10^{-31}\\,$kg" },
                        { key: "b", text: "the specific charge $e/m$ of the electron is $1.76\\times10^{11}\\,\\mathrm{C/kg}$" },
                        { key: "c", text: "electric charge is quantised, the smallest unit being $e\\approx1.6\\times10^{-19}\\,$C" },
                        { key: "d", text: "the electron behaves as a wave" }
                    ],
                    answer: "c",
                    explanation: "By balancing gravitational and electric forces on charged oil droplets, Millikan showed that every drop carried a charge which was an integer multiple of $e=1.6\\times10^{-19}\\,$C, confirming the quantisation of electric charge."
                },
                {
                    id: "eph2",
                    text: "In J. J. Thomson's cathode-ray experiment, crossed electric and magnetic fields were used to determine the:",
                    options: [
                        { key: "a", text: "charge of the electron alone" },
                        { key: "b", text: "mass of the electron alone" },
                        { key: "c", text: "specific charge (charge-to-mass ratio $e/m$) of the electron" },
                        { key: "d", text: "de Broglie wavelength of the electron" }
                    ],
                    answer: "c",
                    explanation: "The velocity of the beam was fixed by $eE=evB$ (giving $v=E/B$) and the electric-only deflection then yielded $e/m\\approx1.76\\times10^{11}\\,\\mathrm{C/kg}$ — the first proof that cathode rays are subatomic particles."
                },
                {
                    id: "eph3",
                    text: "An electron released from rest is accelerated in a uniform electric field of $10^{4}\\,$V/m. Its acceleration is approximately ($e=1.6\\times10^{-19}\\,$C, $m_e=9.1\\times10^{-31}\\,$kg):",
                    options: [
                        { key: "a", text: "$1.76\\times10^{15}\\,\\mathrm{m/s^{2}}$" },
                        { key: "b", text: "$1.76\\times10^{13}\\,\\mathrm{m/s^{2}}$" },
                        { key: "c", text: "$1.6\\times10^{-15}\\,\\mathrm{m/s^{2}}$" },
                        { key: "d", text: "$9.1\\times10^{7}\\,\\mathrm{m/s^{2}}$" }
                    ],
                    answer: "a",
                    explanation: "$a=\\dfrac{eE}{m_e}=\\dfrac{1.6\\times10^{-19}\\times10^{4}}{9.1\\times10^{-31}}\\approx1.76\\times10^{15}\\,\\mathrm{m/s^{2}}$ — enormous because the electron mass is so small."
                },
                {
                    id: "eph4",
                    text: "An electron of speed $v$ enters a uniform magnetic field $B$ perpendicular to its velocity. The radius of its circular path is:",
                    options: [
                        { key: "a", text: "$r=\\dfrac{eB}{mv}$" },
                        { key: "b", text: "$r=\\dfrac{mv}{eB}$" },
                        { key: "c", text: "$r=\\dfrac{mv^{2}}{eB}$" },
                        { key: "d", text: "$r=\\dfrac{eBv}{m}$" }
                    ],
                    answer: "b",
                    explanation: "The Lorentz force supplies the centripetal force: $evB=\\dfrac{mv^{2}}{r}\\Rightarrow r=\\dfrac{mv}{eB}$. Interestingly the period $T=\\dfrac{2\\pi m}{eB}$ is independent of $v$ — the basis of the cyclotron."
                },
                {
                    id: "eph5",
                    text: "The energy of a photon of wavelength $620\\,$nm is (use $hc\\approx1240\\,\\mathrm{eV\\cdot nm}$):",
                    options: [
                        { key: "a", text: "$0.5\\,$eV" },
                        { key: "b", text: "$1.0\\,$eV" },
                        { key: "c", text: "$2.0\\,$eV" },
                        { key: "d", text: "$4.0\\,$eV" }
                    ],
                    answer: "c",
                    explanation: "$E=\\dfrac{hc}{\\lambda}=\\dfrac{1240\\,\\mathrm{eV\\cdot nm}}{620\\,\\mathrm{nm}}=2.0\\,$eV. The shortcut $hc\\approx1240\\,$eV·nm avoids repeated unit conversions."
                },
                {
                    id: "eph6",
                    text: "A photon of wavelength $\\lambda$ and frequency $\\nu$ carries momentum equal to:",
                    options: [
                        { key: "a", text: "$h\\lambda$" },
                        { key: "b", text: "$h/\\lambda$" },
                        { key: "c", text: "$h\\nu$" },
                        { key: "d", text: "$hc/\\lambda$" }
                    ],
                    answer: "b",
                    explanation: "For a massless photon $E=pc$ and $E=h\\nu=hc/\\lambda$, so $p=E/c=h/\\lambda$. This is what makes radiation pressure and Compton scattering possible."
                },
                {
                    id: "eph7",
                    text: "For a metal of work function $2.0\\,$eV, the threshold wavelength above which no photoemission occurs is approximately:",
                    options: [
                        { key: "a", text: "$620\\,$nm" },
                        { key: "b", text: "$460\\,$nm" },
                        { key: "c", text: "$310\\,$nm" },
                        { key: "d", text: "$155\\,$nm" }
                    ],
                    answer: "a",
                    explanation: "$\\lambda_0=\\dfrac{hc}{\\phi}=\\dfrac{1240}{2.0}=620\\,$nm. Light of longer wavelength (lower frequency) cannot eject electrons, however intense it may be."
                },
                {
                    id: "eph8",
                    text: "Light of frequency equal to twice the threshold frequency $\\nu_0$ falls on a metal surface. The maximum kinetic energy of the emitted photoelectrons is:",
                    options: [
                        { key: "a", text: "$h\\nu_0$" },
                        { key: "b", text: "$2h\\nu_0$" },
                        { key: "c", text: "$3h\\nu_0$" },
                        { key: "d", text: "$\\tfrac12 h\\nu_0$" }
                    ],
                    answer: "a",
                    explanation: "By Einstein's photoelectric equation, $KE_{\\max}=h\\nu-\\phi=h(2\\nu_0)-h\\nu_0=h\\nu_0$, since the work function $\\phi=h\\nu_0$."
                },
                {
                    id: "eph9",
                    text: "In the photoelectric effect, doubling the intensity of the incident light (frequency kept above the threshold) causes the:",
                    options: [
                        { key: "a", text: "maximum kinetic energy of photoelectrons to double" },
                        { key: "b", text: "stopping potential to double" },
                        { key: "c", text: "number of photoelectrons emitted per second (photocurrent) to double" },
                        { key: "d", text: "threshold frequency to be halved" }
                    ],
                    answer: "c",
                    explanation: "Intensity determines the photon flux, so more photons free more electrons; the maximum KE per electron depends only on the photon frequency, not on how many photons arrive."
                },
                {
                    id: "eph10",
                    text: "Photoelectrons emitted from a certain metal have a maximum kinetic energy of $2.5\\,$eV. The stopping potential required to just prevent them from reaching the collector is:",
                    options: [
                        { key: "a", text: "$1.25\\,$V" },
                        { key: "b", text: "$2.5\\,$V" },
                        { key: "c", text: "$5.0\\,$V" },
                        { key: "d", text: "$25\\,$V" }
                    ],
                    answer: "b",
                    explanation: "At the stopping potential the retarding work exactly balances the maximum KE: $eV_0=KE_{\\max}\\Rightarrow V_0=2.5\\,$V (numerically equal to $KE_{\\max}$ expressed in eV)."
                }
            ]
        },

        /* ----------------------------------------------------------
           3) ATOMIC STRUCTURE & WAVE-PARTICLE DUALITY  (Physics)
           Bohr orbit & energy, spectral series & Rydberg,
           de Broglie waves, uncertainty principle, X-rays & Bragg
        ---------------------------------------------------------- */
        {
            id: "atomicduality12",
            name: "Atomic Structure & Wave-Particle Duality",
            subject: "Physics",
            accent: "emerald",
            blurb: "Bohr postulates & energy · spectral series · Rydberg · de Broglie · uncertainty · X-rays & Bragg's law",
            questions: [
                {
                    id: "at1",
                    text: "According to Bohr's second postulate, the angular momentum of an electron in the $n^{\\mathrm{th}}$ allowed orbit of a hydrogen atom is quantised as:",
                    options: [
                        { key: "a", text: "$nh$" },
                        { key: "b", text: "$\\dfrac{nh}{2\\pi}$" },
                        { key: "c", text: "$\\dfrac{h}{2\\pi n}$" },
                        { key: "d", text: "$\\dfrac{n^{2}h}{2\\pi}$" }
                    ],
                    answer: "b",
                    explanation: "Bohr postulated $L=mvr=n\\hbar=\\dfrac{nh}{2\\pi}$ with $n=1,2,3,\\ldots$ Combined with the Coulomb centripetal condition, this quantises the radii and energies of the allowed orbits."
                },
                {
                    id: "at2",
                    text: "In Bohr's model of a hydrogen-like atom of atomic number $Z$, the radius $r_n$ of the $n^{\\mathrm{th}}$ orbit varies as:",
                    options: [
                        { key: "a", text: "$r_n\\propto n$" },
                        { key: "b", text: "$r_n\\propto n^{2}/Z$" },
                        { key: "c", text: "$r_n\\propto 1/n$" },
                        { key: "d", text: "$r_n\\propto 1/n^{2}$" }
                    ],
                    answer: "b",
                    explanation: "$r_n=\\dfrac{n^{2}\\hbar^{2}}{Zmke^{2}}=0.529\\,\\dfrac{n^{2}}{Z}\\,\\mathrm{\\AA}$. Orbits swell as $n^{2}$ and shrink with $Z$."
                },
                {
                    id: "at3",
                    text: "The energy of the electron in the ground state of hydrogen is $-13.6\\,$eV. Its energy in the $n=3$ state is:",
                    options: [
                        { key: "a", text: "$-13.6\\,$eV" },
                        { key: "b", text: "$-3.40\\,$eV" },
                        { key: "c", text: "$-1.51\\,$eV" },
                        { key: "d", text: "$-0.85\\,$eV" }
                    ],
                    answer: "c",
                    explanation: "$E_n=-\\dfrac{13.6}{n^{2}}\\,$eV, so $E_3=-\\dfrac{13.6}{9}\\approx-1.51\\,$eV. Levels crowd together as $n$ grows and converge to $0$ (ionisation)."
                },
                {
                    id: "at4",
                    text: "Of the spectral series of atomic hydrogen, the one that lies entirely in the visible region of the electromagnetic spectrum is the:",
                    options: [
                        { key: "a", text: "Lyman series ($n\\to 1$)" },
                        { key: "b", text: "Balmer series ($n\\to 2$)" },
                        { key: "c", text: "Paschen series ($n\\to 3$)" },
                        { key: "d", text: "Brackett series ($n\\to 4$)" }
                    ],
                    answer: "b",
                    explanation: "Balmer lines ($H_\\alpha, H_\\beta, \\ldots$) terminate on $n=2$ and fall between $\\sim365$ and $656\\,$nm — the visible band. Lyman is UV; Paschen, Brackett and Pfund are infrared."
                },
                {
                    id: "at5",
                    text: "The wavelength of the first line of the Lyman series ($n=2\\to 1$) of hydrogen is (Rydberg constant $R=1.097\\times10^{7}\\,\\mathrm{m^{-1}}$):",
                    options: [
                        { key: "a", text: "$91.2\\,$nm" },
                        { key: "b", text: "$121.6\\,$nm" },
                        { key: "c", text: "$486\\,$nm" },
                        { key: "d", text: "$656\\,$nm" }
                    ],
                    answer: "b",
                    explanation: "$\\dfrac{1}{\\lambda}=R\\!\\left(\\dfrac{1}{1^{2}}-\\dfrac{1}{2^{2}}\\right)=\\dfrac{3R}{4}\\Rightarrow\\lambda=\\dfrac{4}{3R}\\approx1.216\\times10^{-7}\\,$m$=121.6\\,$nm (UV)."
                },
                {
                    id: "at6",
                    text: "The de Broglie wavelength of a particle of mass $m$ having kinetic energy $E$ is:",
                    options: [
                        { key: "a", text: "$\\dfrac{h}{mE}$" },
                        { key: "b", text: "$\\dfrac{h}{\\sqrt{mE}}$" },
                        { key: "c", text: "$\\dfrac{h}{\\sqrt{2mE}}$" },
                        { key: "d", text: "$h\\sqrt{2mE}$" }
                    ],
                    answer: "c",
                    explanation: "$p=\\sqrt{2mE}\\Rightarrow\\lambda=\\dfrac{h}{p}=\\dfrac{h}{\\sqrt{2mE}}$. The heavier or faster the particle, the shorter its matter wavelength — which is why wave effects are unnoticed for macroscopic objects."
                },
                {
                    id: "at7",
                    text: "Heisenberg's uncertainty principle asserts that:",
                    options: [
                        { key: "a", text: "the position of an electron can always be measured exactly" },
                        { key: "b", text: "the product of uncertainties in position and momentum is at least of order $\\hbar$, $\\Delta x\\,\\Delta p\\ge\\hbar/2$" },
                        { key: "c", text: "position and momentum can be measured simultaneously with arbitrary accuracy" },
                        { key: "d", text: "only the energy of a particle is uncertain" }
                    ],
                    answer: "b",
                    explanation: "The wave nature of matter puts a fundamental lower bound on how sharply the two conjugate variables can be defined simultaneously; it is a property of nature, not a defect of the instrument."
                },
                {
                    id: "at8",
                    text: "Continuous X-rays (bremsstrahlung) produced in an X-ray tube arise because:",
                    options: [
                        { key: "a", text: "fast electrons are accelerated by the anode's magnetic field" },
                        { key: "b", text: "fast electrons are decelerated by the strong Coulomb field of the target nuclei, radiating photons of a range of energies" },
                        { key: "c", text: "electrons are ejected from the innermost shells of target atoms" },
                        { key: "d", text: "electrons are captured by target nuclei, producing $\\gamma$ rays" }
                    ],
                    answer: "b",
                    explanation: "Any accelerated (here, decelerated) charge radiates. The randomly distributed deceleration in the target produces a continuous spectrum with a sharp short-wavelength cut-off; characteristic lines come from inner-shell transitions."
                },
                {
                    id: "at9",
                    text: "The short-wavelength (Duane–Hunt) cut-off of the continuous X-ray spectrum from a tube operated at potential difference $V$ is:",
                    options: [
                        { key: "a", text: "$\\lambda_{\\min}=\\dfrac{hc}{eV}$" },
                        { key: "b", text: "$\\lambda_{\\min}=\\dfrac{eV}{hc}$" },
                        { key: "c", text: "$\\lambda_{\\min}=\\dfrac{h}{eV}$" },
                        { key: "d", text: "$\\lambda_{\\min}=\\dfrac{hV}{ec}$" }
                    ],
                    answer: "a",
                    explanation: "The most energetic X-ray photon appears when an electron loses all of its kinetic energy $eV$ in a single collision: $eV=h\\nu_{\\max}=\\dfrac{hc}{\\lambda_{\\min}}\\Rightarrow\\lambda_{\\min}=\\dfrac{hc}{eV}$."
                },
                {
                    id: "at10",
                    text: "Applying Bragg's law $2d\\sin\\theta=n\\lambda$, the first-order diffraction of X-rays of wavelength $1.5\\,\\mathrm{\\AA}$ from a crystal of interplanar spacing $3\\,\\mathrm{\\AA}$ occurs at a glancing angle of:",
                    options: [
                        { key: "a", text: "$14.5^{\\circ}$" },
                        { key: "b", text: "$30^{\\circ}$" },
                        { key: "c", text: "$45^{\\circ}$" },
                        { key: "d", text: "$60^{\\circ}$" }
                    ],
                    answer: "a",
                    explanation: "$\\sin\\theta=\\dfrac{n\\lambda}{2d}=\\dfrac{1\\times1.5}{2\\times3}=0.25\\Rightarrow\\theta\\approx14.5^{\\circ}$. Bragg's law is the foundation of X-ray crystallography and modern structural biology."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) SEMICONDUCTORS, LOGIC GATES & PARTICLE PHYSICS  (Physics)
           Energy bands, intrinsic/extrinsic, p-n diode & rectifier,
           logic gates, leptons/quarks, Higgs, Big Bang, Hubble
        ---------------------------------------------------------- */
        {
            id: "semiconductorparticle12",
            name: "Semiconductors, Logic Gates & Particle Physics",
            subject: "Physics",
            accent: "slate",
            blurb: "Energy bands · intrinsic/extrinsic · p-n diode & rectifier · logic gates · leptons/quarks · Higgs · Hubble",
            questions: [
                {
                    id: "ss1",
                    text: "In a good insulator (such as diamond) at room temperature, the width of the forbidden energy gap between the valence and conduction bands is typically:",
                    options: [
                        { key: "a", text: "zero — the bands overlap" },
                        { key: "b", text: "about $1\\,$eV" },
                        { key: "c", text: "greater than about $3\\text{--}6\\,$eV" },
                        { key: "d", text: "exactly $0.5\\,$eV" }
                    ],
                    answer: "c",
                    explanation: "For metals the valence and conduction bands overlap ($E_g\\approx0$). For semiconductors $E_g\\sim1\\,$eV (Si $1.1$, Ge $0.72$). Insulators such as diamond have $E_g>3\\,$eV (diamond $\\sim6\\,$eV), so essentially no electrons reach the conduction band at ordinary temperatures."
                },
                {
                    id: "ss2",
                    text: "A pure tetravalent semiconductor doped with a small amount of a pentavalent impurity (e.g. arsenic or phosphorus) becomes:",
                    options: [
                        { key: "a", text: "an intrinsic semiconductor" },
                        { key: "b", text: "an $n$-type extrinsic semiconductor" },
                        { key: "c", text: "a $p$-type extrinsic semiconductor" },
                        { key: "d", text: "an insulator" }
                    ],
                    answer: "b",
                    explanation: "A pentavalent atom contributes four bonding electrons plus one 'extra' electron loosely bound near the conduction band; this donor level supplies free electrons, making the material $n$-type. Trivalent (acceptor) impurities create holes and give $p$-type material."
                },
                {
                    id: "ss3",
                    text: "A $p$-$n$ junction diode is forward-biased when:",
                    options: [
                        { key: "a", text: "the $p$-side is at a lower potential than the $n$-side" },
                        { key: "b", text: "the $p$-side is at a higher potential than the $n$-side" },
                        { key: "c", text: "no external voltage is applied" },
                        { key: "d", text: "an alternating voltage is applied" }
                    ],
                    answer: "b",
                    explanation: "Forward bias ($V_p>V_n$) narrows the depletion region and lowers the built-in barrier, so majority carriers cross the junction and a sizeable current flows once $V$ exceeds the knee voltage ($\\sim0.3\\,$V for Ge, $\\sim0.7\\,$V for Si)."
                },
                {
                    id: "ss4",
                    text: "A full-wave rectifier, which turns the whole of the a.c. input into a unidirectional (though pulsating) output, requires:",
                    options: [
                        { key: "a", text: "one diode only" },
                        { key: "b", text: "two diodes with a centre-tapped transformer, or four diodes in a bridge" },
                        { key: "c", text: "three diodes in series" },
                        { key: "d", text: "no diodes at all — just a capacitor" }
                    ],
                    answer: "b",
                    explanation: "A half-wave rectifier uses one diode and passes only half of each cycle. Full-wave rectification uses two diodes with a centre-tapped secondary, or a bridge of four diodes, so that both halves of the a.c. cycle drive current through the load in the same direction."
                },
                {
                    id: "ss5",
                    text: "For a two-input NAND gate, the output $Y=\\overline{A\\cdot B}$ is at logic $0$ only when:",
                    options: [
                        { key: "a", text: "both inputs are $0$" },
                        { key: "b", text: "both inputs are $1$" },
                        { key: "c", text: "any one input is $1$" },
                        { key: "d", text: "any one input is $0$" }
                    ],
                    answer: "b",
                    explanation: "A NAND is an AND followed by a NOT: $A\\cdot B=1$ only when $A=B=1$, giving $Y=0$; for every other input combination $Y=1$."
                },
                {
                    id: "ss6",
                    text: "The gate that is called a universal gate because any other logic gate (AND, OR, NOT, …) can be constructed using only copies of it is the:",
                    options: [
                        { key: "a", text: "AND gate" },
                        { key: "b", text: "OR gate" },
                        { key: "c", text: "NOT gate" },
                        { key: "d", text: "NAND gate (equivalently, the NOR gate)" }
                    ],
                    answer: "d",
                    explanation: "NAND and NOR are functionally complete: a NOT is a NAND with tied inputs, an AND is a NAND followed by another NAND-NOT, and an OR follows from De Morgan's theorem. This universality simplifies IC fabrication."
                },
                {
                    id: "ss7",
                    text: "The Higgs boson, discovered at the LHC in 2012, is significant because it is the quantum of the Higgs field, which:",
                    options: [
                        { key: "a", text: "mediates the strong nuclear force between quarks" },
                        { key: "b", text: "endows other elementary particles with mass through their interaction with the field" },
                        { key: "c", text: "carries the electromagnetic force" },
                        { key: "d", text: "causes radioactive $\\beta$ decay" }
                    ],
                    answer: "b",
                    explanation: "In the Standard Model, electroweak symmetry is broken by a non-zero Higgs vacuum expectation value; the strength of a particle's coupling to this field determines its mass, explaining why photons are massless while the $W, Z$ bosons are heavy."
                },
                {
                    id: "ss8",
                    text: "According to the quark model, a proton is composed of the three quarks:",
                    options: [
                        { key: "a", text: "up, up, down (uud)" },
                        { key: "b", text: "up, down, down (udd)" },
                        { key: "c", text: "up, up, up (uuu)" },
                        { key: "d", text: "down, down, down (ddd)" }
                    ],
                    answer: "a",
                    explanation: "$u$ has charge $+\\tfrac23 e$ and $d$ has $-\\tfrac13 e$. For a proton: $(+\\tfrac23)+(+\\tfrac23)+(-\\tfrac13)=+1e$. A neutron is $udd$: $(+\\tfrac23)+(-\\tfrac13)+(-\\tfrac13)=0$."
                },
                {
                    id: "ss9",
                    text: "Which of the following particles is a lepton (i.e. does not participate in the strong interaction)?",
                    options: [
                        { key: "a", text: "proton" },
                        { key: "b", text: "neutron" },
                        { key: "c", text: "electron" },
                        { key: "d", text: "pion ($\\pi^{+}$)" }
                    ],
                    answer: "c",
                    explanation: "Leptons (electron, muon, tau and their neutrinos) are fundamental fermions that interact only through the electroweak (and gravitational) forces. Protons, neutrons and pions are hadrons made of quarks and do feel the strong force."
                },
                {
                    id: "ss10",
                    text: "Hubble's law, a cornerstone of the Big Bang model, states that the recession velocity $v$ of a distant galaxy is:",
                    options: [
                        { key: "a", text: "inversely proportional to its distance" },
                        { key: "b", text: "directly proportional to its distance, $v=H_0 d$" },
                        { key: "c", text: "independent of its distance" },
                        { key: "d", text: "proportional to the square of its distance" }
                    ],
                    answer: "b",
                    explanation: "Hubble found that light from distant galaxies is red-shifted by an amount proportional to their distance, giving $v=H_0 d$ with $H_0\\approx70\\,\\mathrm{km\\,s^{-1}\\,Mpc^{-1}}$; the reciprocal $1/H_0$ provides a rough estimate of the age of the universe."
                }
            ]
        },

        /* ----------------------------------------------------------
           5) CIRCULAR & PERIODIC MOTION  (Physics) — 5 questions
           Centripetal force, motion in a vertical circle,
           SHM period & energy, forced oscillations & resonance
        ---------------------------------------------------------- */
        {
            id: "circular12",
            name: "Circular & Periodic Motion",
            subject: "Physics",
            accent: "rose",
            blurb: "Centripetal force · vertical circle · SHM period & energy · forced oscillations & resonance",
            questions: [
                {
                    id: "cm1",
                    text: "A body of mass $500\\,$g moves in a horizontal circle of radius $2\\,$m with a uniform speed of $4\\,$m/s. The centripetal force acting on it is:",
                    options: [
                        { key: "a", text: "$2\\,$N" },
                        { key: "b", text: "$4\\,$N" },
                        { key: "c", text: "$8\\,$N" },
                        { key: "d", text: "$16\\,$N" }
                    ],
                    answer: "b",
                    explanation: "$F=\\dfrac{mv^{2}}{r}=\\dfrac{0.5\\times4^{2}}{2}=\\dfrac{0.5\\times16}{2}=4\\,$N, directed radially inward. Being always perpendicular to the velocity, it does no work."
                },
                {
                    id: "cm2",
                    text: "A stone tied to a string is whirled in a vertical circle of radius $r$. The minimum speed at the highest point that will just keep the string taut is:",
                    options: [
                        { key: "a", text: "$\\sqrt{gr}$" },
                        { key: "b", text: "$\\sqrt{2gr}$" },
                        { key: "c", text: "$\\sqrt{5gr}$" },
                        { key: "d", text: "$\\sqrt{gr/2}$" }
                    ],
                    answer: "a",
                    explanation: "At the top, gravity alone provides the centripetal force when the tension is zero: $mg=\\dfrac{mv^{2}}{r}\\Rightarrow v_{\\text{top}}=\\sqrt{gr}$. Using energy conservation, the corresponding minimum speed at the bottom is $\\sqrt{5gr}$."
                },
                {
                    id: "cm3",
                    text: "A block of mass $m$ attached to a spring of force constant $k$ executes simple harmonic motion on a smooth horizontal surface. Its period is:",
                    options: [
                        { key: "a", text: "$T=2\\pi\\sqrt{k/m}$" },
                        { key: "b", text: "$T=2\\pi\\sqrt{m/k}$" },
                        { key: "c", text: "$T=\\dfrac{1}{2\\pi}\\sqrt{m/k}$" },
                        { key: "d", text: "$T=2\\pi\\,m/k$" }
                    ],
                    answer: "b",
                    explanation: "For SHM $\\omega=\\sqrt{k/m}$ and $T=2\\pi/\\omega=2\\pi\\sqrt{m/k}$. The period depends only on $m$ and $k$, not on the amplitude — a hallmark of true SHM."
                },
                {
                    id: "cm4",
                    text: "For a particle executing simple harmonic motion of angular frequency $\\omega$ and amplitude $A$, the total mechanical energy:",
                    options: [
                        { key: "a", text: "varies sinusoidally with time" },
                        { key: "b", text: "is zero at the equilibrium position" },
                        { key: "c", text: "is constant and equal to $\\tfrac12 m\\omega^{2}A^{2}$" },
                        { key: "d", text: "is proportional to the frequency (not its square)" }
                    ],
                    answer: "c",
                    explanation: "Kinetic and potential energies exchange, but their sum $E=\\tfrac12 m\\omega^{2}A^{2}$ stays constant; it is proportional to the square of the amplitude and to the square of the frequency."
                },
                {
                    id: "cm5",
                    text: "In forced oscillations with light damping, the amplitude of the driven oscillator becomes maximum when the driving frequency is very close to the:",
                    options: [
                        { key: "a", text: "zero frequency" },
                        { key: "b", text: "half of the natural frequency" },
                        { key: "c", text: "natural (free) frequency of the oscillator — resonance" },
                        { key: "d", text: "twice the natural frequency" }
                    ],
                    answer: "c",
                    explanation: "At resonance the driving force is in step with the oscillator's velocity, transferring energy most efficiently; the amplitude grows to a maximum limited only by damping. Examples: tuning of radio circuits and the collapse of the Tacoma Narrows bridge."
                }
            ]
        },

        /* ----------------------------------------------------------
           6) ELASTICITY  (Physics) — 5 questions
           Stress & strain, Young's/bulk/shear moduli,
           Poisson's ratio, elastic potential energy density
        ---------------------------------------------------------- */
        {
            id: "elasticity12",
            name: "Elasticity",
            subject: "Physics",
            accent: "cyan",
            blurb: "Stress & strain · Young's, bulk & shear moduli · Poisson's ratio · elastic energy density",
            questions: [
                {
                    id: "el1",
                    text: "A steel wire of length $2\\,$m and cross-sectional area $10^{-6}\\,\\mathrm{m^{2}}$ stretches by $1\\,$mm when a force of $100\\,$N is applied along its length. Young's modulus of the wire is:",
                    options: [
                        { key: "a", text: "$1\\times10^{10}\\,\\mathrm{N/m^{2}}$" },
                        { key: "b", text: "$2\\times10^{11}\\,\\mathrm{N/m^{2}}$" },
                        { key: "c", text: "$5\\times10^{12}\\,\\mathrm{N/m^{2}}$" },
                        { key: "d", text: "$1\\times10^{13}\\,\\mathrm{N/m^{2}}$" }
                    ],
                    answer: "b",
                    explanation: "$Y=\\dfrac{FL}{A\\,\\Delta L}=\\dfrac{100\\times2}{10^{-6}\\times10^{-3}}=2\\times10^{11}\\,\\mathrm{N/m^{2}}$ — the accepted value of Young's modulus for steel."
                },
                {
                    id: "el2",
                    text: "For an isotropic elastic solid, the theoretical range of Poisson's ratio $\\sigma$ is:",
                    options: [
                        { key: "a", text: "$-1<\\sigma<0.5$" },
                        { key: "b", text: "$0<\\sigma<1$" },
                        { key: "c", text: "$-0.5<\\sigma<0$" },
                        { key: "d", text: "$1<\\sigma<2$" }
                    ],
                    answer: "a",
                    explanation: "Thermodynamic stability of the elastic moduli requires $-1<\\sigma<0.5$. Most ordinary solids have $0<\\sigma<0.5$ (rubber $\\approx0.5$, steel $\\approx0.3$, cork $\\approx0$); rare 'auxetic' materials have $\\sigma<0$."
                },
                {
                    id: "el3",
                    text: "Between two liquids, the one that is more incompressible has the larger:",
                    options: [
                        { key: "a", text: "Young's modulus" },
                        { key: "b", text: "shear modulus" },
                        { key: "c", text: "bulk modulus" },
                        { key: "d", text: "Poisson's ratio" }
                    ],
                    answer: "c",
                    explanation: "Bulk modulus $K=-V\\dfrac{dP}{dV}$ measures resistance to uniform (volumetric) compression; a large $K$ means a small volume change under pressure. Liquids possess a bulk modulus but essentially no shear modulus, so they cannot sustain a static shear stress."
                },
                {
                    id: "el4",
                    text: "The elastic potential energy stored per unit volume of a stretched wire (within the proportional limit) is:",
                    options: [
                        { key: "a", text: "stress $\\times$ strain" },
                        { key: "b", text: "$\\tfrac12\\times$ stress $\\times$ strain" },
                        { key: "c", text: "$2\\times$ stress $\\times$ strain" },
                        { key: "d", text: "stress $/$ strain" }
                    ],
                    answer: "b",
                    explanation: "The load–extension graph up to the proportional limit is a straight line, and the area under it (work done per unit volume) is $u=\\tfrac12\\,\\sigma\\,\\varepsilon=\\dfrac{\\sigma^{2}}{2Y}=\\tfrac12 Y\\varepsilon^{2}$."
                },
                {
                    id: "el5",
                    text: "Hooke's law, which states that stress is directly proportional to strain, holds strictly only up to the:",
                    options: [
                        { key: "a", text: "breaking point" },
                        { key: "b", text: "yield point" },
                        { key: "c", text: "elastic (proportional) limit" },
                        { key: "d", text: "plastic region" }
                    ],
                    answer: "c",
                    explanation: "Below the proportional limit the stress–strain graph is a straight line and $\\text{stress}=E\\times\\text{strain}$; beyond the elastic limit permanent (plastic) deformation appears, Hooke's law fails, and finally the material yields and breaks."
                }
            ]
        }
    ]
};

/* ============================================================
   DAY 13 — HARDEST · HUMAN DIGESTIVE SYSTEM (all Zoology)
   Syllabus: Human Biology & Physiology — Digestive System:
   alimentary canal & digestive glands, physiology of digestion.
   4 chapters × 10 MCQs · MECEE / CEE top-difficulty
   ============================================================ */
const DAY13 = {
    day: 13,
    title: "Day 13",
    subtitle: "Human Digestive System · Hardest",
    negativeMarking: 0.25,
    chapters: [
        /* ----------------------------------------------------------
           1) ALIMENTARY CANAL  (Zoology) — hardest
           Gut wall histology, regional specialisations, dentition,
           mucosal folds, sphincters & motility
        ---------------------------------------------------------- */
        {
            id: "alimentary13",
            name: "Alimentary Canal",
            subject: "Zoology",
            accent: "rose",
            blurb: "Gut-wall histology · Brunner's glands & Peyer's patches · dental formula · brush border · taeniae coli",
            questions: [
                {
                    id: "ac1",
                    text: "The wall of the alimentary canal from the oesophagus to the rectum has four concentric layers. The layer that generates peristalsis and houses the myenteric (Auerbach's) plexus between its two muscle sublayers is:",
                    options: [
                        { key: "a", text: "the mucosa" },
                        { key: "b", text: "the submucosa" },
                        { key: "c", text: "the muscularis externa" },
                        { key: "d", text: "the serosa" }
                    ],
                    answer: "c",
                    explanation: "Auerbach's (myenteric) plexus lies between the inner circular and outer longitudinal muscle of the muscularis externa and controls motility; Meissner's (submucosal) plexus lies in the submucosa and governs secretion and local blood flow."
                },
                {
                    id: "ac2",
                    text: "Brunner's glands, which pour an alkaline mucus that shields the lining from acidic chyme, are a histological hallmark confined to the submucosa of the:",
                    options: [
                        { key: "a", text: "stomach" },
                        { key: "b", text: "duodenum" },
                        { key: "c", text: "jejunum" },
                        { key: "d", text: "ileum" }
                    ],
                    answer: "b",
                    explanation: "Brunner's (duodenal) glands are unique to the submucosa of the duodenum; their $\\mathrm{HCO_3^-}$-rich mucus neutralises gastric acid. Crypts of Lieberkühn occur throughout the small intestine, but Brunner's glands are duodenum-specific."
                },
                {
                    id: "ac3",
                    text: "Peyer's patches — large aggregations of gut-associated lymphoid tissue (GALT) that guard against ingested microbes — are most abundant in the:",
                    options: [
                        { key: "a", text: "duodenum" },
                        { key: "b", text: "jejunum" },
                        { key: "c", text: "ileum" },
                        { key: "d", text: "colon" }
                    ],
                    answer: "c",
                    explanation: "Peyer's patches are most numerous in the ileum, where they mount immune surveillance of the gut contents; they are a component of the mucosa-associated lymphoid tissue (MALT/GALT)."
                },
                {
                    id: "ac4",
                    text: "The human permanent dentition is written as the dental formula $\\dfrac{2123}{2123}$ (one side of each jaw). This corresponds to a total of:",
                    options: [
                        { key: "a", text: "20 teeth" },
                        { key: "b", text: "28 teeth" },
                        { key: "c", text: "32 teeth" },
                        { key: "d", text: "36 teeth" }
                    ],
                    answer: "c",
                    explanation: "Per half-jaw: incisors 2, canine 1, premolars 2, molars 3 = 8 upper + 8 lower = 16; both sides give 32. The deciduous formula $\\dfrac{2102}{2102}$ (no premolars, 2 molars) gives only 20 teeth."
                },
                {
                    id: "ac5",
                    text: "Human teeth are thecodont, diphyodont and heterodont. The term \"thecodont\" specifically means that the teeth are:",
                    options: [
                        { key: "a", text: "of several different types" },
                        { key: "b", text: "replaced only once in a lifetime" },
                        { key: "c", text: "fixed in bony sockets of the jaw" },
                        { key: "d", text: "present only in the upper jaw" }
                    ],
                    answer: "c",
                    explanation: "Thecodont = each tooth embedded in a socket (alveolus) of the jaw bone. Heterodont = teeth of different types; diphyodont = two successive sets (milk and permanent)."
                },
                {
                    id: "ac6",
                    text: "The hardest substance in the human body, acellular and laid down by ameloblasts over the crown of a tooth, is:",
                    options: [
                        { key: "a", text: "dentine" },
                        { key: "b", text: "cement" },
                        { key: "c", text: "enamel" },
                        { key: "d", text: "pulp" }
                    ],
                    answer: "c",
                    explanation: "Enamel (largely calcium phosphate) is the hardest, acellular tissue, secreted by ameloblasts. Dentine is formed by odontoblasts, and cement covers the root."
                },
                {
                    id: "ac7",
                    text: "The correct sequence of the regions of the human stomach, from the oesophageal opening towards the pyloric sphincter, is:",
                    options: [
                        { key: "a", text: "fundus → cardiac → body → pyloric" },
                        { key: "b", text: "cardiac → fundus → body → pyloric" },
                        { key: "c", text: "pyloric → body → fundus → cardiac" },
                        { key: "d", text: "cardiac → body → fundus → pyloric" }
                    ],
                    answer: "b",
                    explanation: "The cardiac region surrounds the cardiac orifice (oesophageal junction), the fundus is the dome-shaped upper part, the body is the large central portion, and the pyloric region ends at the pyloric sphincter guarding the duodenum."
                },
                {
                    id: "ac8",
                    text: "On each columnar absorptive cell of the small intestine, the dense array of apical microvilli collectively forms the ______, which bears membrane-bound digestive enzymes.",
                    options: [
                        { key: "a", text: "basement membrane" },
                        { key: "b", text: "brush (striated) border" },
                        { key: "c", text: "lamina propria" },
                        { key: "d", text: "muscularis mucosae" }
                    ],
                    answer: "b",
                    explanation: "The microvilli form the brush (striated) border carrying disaccharidases and dipeptidases, and it massively amplifies the absorptive surface. Villi and plicae circulares add still further to this area."
                },
                {
                    id: "ac9",
                    text: "In the large intestine, three ribbon-like longitudinal muscle bands gather the wall into pouches (haustra). These bands are the:",
                    options: [
                        { key: "a", text: "taeniae coli" },
                        { key: "b", text: "plicae circulares" },
                        { key: "c", text: "rugae" },
                        { key: "d", text: "epiploic folds" }
                    ],
                    answer: "a",
                    explanation: "The taeniae coli are three longitudinal bands whose tone sacculates the colon into haustra. Plicae circulares (Kerckring's folds) and villi belong to the small intestine, and rugae to the stomach."
                },
                {
                    id: "ac10",
                    text: "The muscularis mucosae is a thin layer of smooth muscle that marks the boundary between:",
                    options: [
                        { key: "a", text: "the mucosa and the underlying submucosa" },
                        { key: "b", text: "the submucosa and the muscularis externa" },
                        { key: "c", text: "the inner circular and outer longitudinal muscle" },
                        { key: "d", text: "the serosa and the peritoneal cavity" }
                    ],
                    answer: "a",
                    explanation: "The muscularis mucosae is the deepest part of the mucosa; its contraction moves the villi and mucosal folds and it separates the mucosa from the underlying submucosa — a subtle but frequently tested histology point."
                }
            ]
        },

        /* ----------------------------------------------------------
           2) DIGESTIVE GLANDS  (Zoology) — hardest
           Salivary glands, liver lobule & Kupffer cells, gallbladder,
           pancreas (exocrine + endocrine), gastric cell types
        ---------------------------------------------------------- */
        {
            id: "digglands13",
            name: "Digestive Glands",
            subject: "Zoology",
            accent: "amber",
            blurb: "Salivary gland types · hepatic lobule & Kupffer cells · pancreatic acini & islets · parietal/chief cells · intrinsic factor",
            questions: [
                {
                    id: "dg1",
                    text: "Of the three pairs of salivary glands, the pair whose secretion is purely serous (watery, enzyme-rich) and which supplies most of the salivary amylase is the:",
                    options: [
                        { key: "a", text: "parotid" },
                        { key: "b", text: "submandibular" },
                        { key: "c", text: "sublingual" },
                        { key: "d", text: "buccal" }
                    ],
                    answer: "a",
                    explanation: "The parotid glands are purely serous and rich in α-amylase (ptyalin). The submandibular pair is mixed (and gives the largest total volume) while the sublingual is predominantly mucous."
                },
                {
                    id: "dg2",
                    text: "At the very centre of a classic hepatic lobule (the structural unit of the liver) lies a:",
                    options: [
                        { key: "a", text: "portal triad (hepatic artery, portal vein, bile duct)" },
                        { key: "b", text: "central vein, a tributary of the hepatic vein" },
                        { key: "c", text: "single bile canaliculus" },
                        { key: "d", text: "Kupffer cell cluster" }
                    ],
                    answer: "b",
                    explanation: "A classic lobule is a hexagonal prism with a central vein at its core and portal triads at the corners. Blood flows from the peripheral triads through the sinusoids to the central vein."
                },
                {
                    id: "dg3",
                    text: "The phagocytic cells lining the hepatic sinusoids, which remove worn-out erythrocytes and bacteria from the portal blood, are the:",
                    options: [
                        { key: "a", text: "hepatocytes" },
                        { key: "b", text: "Kupffer cells" },
                        { key: "c", text: "oxyntic cells" },
                        { key: "d", text: "zymogen cells" }
                    ],
                    answer: "b",
                    explanation: "Kupffer cells are the resident macrophages of the liver sinusoids; they phagocytose aged red cells and pathogens, and the haemoglobin they break down yields the bile pigments bilirubin and biliverdin."
                },
                {
                    id: "dg4",
                    text: "Bile aids fat digestion even though it contains no digestive enzyme. Its principal action is to:",
                    options: [
                        { key: "a", text: "hydrolyse triglycerides into fatty acids and glycerol" },
                        { key: "b", text: "emulsify fats, raising the surface area for lipase action" },
                        { key: "c", text: "provide the acidic optimum required by pepsin" },
                        { key: "d", text: "absorb fatty acids directly into the lacteals" }
                    ],
                    answer: "b",
                    explanation: "Amphipathic bile salts (sodium glycocholate and taurocholate) emulsify large fat globules into fine droplets, hugely increasing the area on which pancreatic lipase can act; bile itself carries no enzyme."
                },
                {
                    id: "dg5",
                    text: "Which pancreatic enzyme is secreted as an inactive zymogen and is then activated in the duodenum by enterokinase (enteropeptidase)?",
                    options: [
                        { key: "a", text: "amylase" },
                        { key: "b", text: "trypsinogen" },
                        { key: "c", text: "lipase" },
                        { key: "d", text: "nuclease" }
                    ],
                    answer: "b",
                    explanation: "Enterokinase converts trypsinogen → trypsin, which then autocatalytically activates more trypsinogen and also chymotrypsinogen and procarboxypeptidase. Pancreatic amylase and lipase are secreted already active."
                },
                {
                    id: "dg6",
                    text: "The endocrine islets of Langerhans of the pancreas secrete hormones into the blood. The β-cells (about 70% of islet cells) secrete:",
                    options: [
                        { key: "a", text: "glucagon" },
                        { key: "b", text: "insulin" },
                        { key: "c", text: "somatostatin" },
                        { key: "d", text: "pancreatic polypeptide" }
                    ],
                    answer: "b",
                    explanation: "β-cells secrete insulin; α-cells secrete glucagon; δ-cells secrete somatostatin. The exocrine acini (not the islets) produce the enzyme- and bicarbonate-rich pancreatic juice."
                },
                {
                    id: "dg7",
                    text: "The alkalinity of pancreatic juice, which neutralises acidic chyme and sets the optimum pH for its enzymes, is due chiefly to a high concentration of:",
                    options: [
                        { key: "a", text: "chloride ions" },
                        { key: "b", text: "bicarbonate ions" },
                        { key: "c", text: "hydrogen ions" },
                        { key: "d", text: "calcium ions" }
                    ],
                    answer: "b",
                    explanation: "Duct cells (stimulated by secretin) release a $\\mathrm{HCO_3^-}$-rich fluid of about pH 8, neutralising HCl and providing the alkaline environment (pH ~7–8) optimal for trypsin, lipase and amylase."
                },
                {
                    id: "dg8",
                    text: "In the gastric glands, hydrochloric acid is secreted by the ______ cells, whereas the proenzyme pepsinogen is secreted by the ______ cells.",
                    options: [
                        { key: "a", text: "chief (zymogen); parietal (oxyntic)" },
                        { key: "b", text: "parietal (oxyntic); chief (zymogen)" },
                        { key: "c", text: "mucous neck; gastrin-secreting G" },
                        { key: "d", text: "gastrin-secreting G; enterochromaffin-like" }
                    ],
                    answer: "b",
                    explanation: "Parietal (oxyntic) cells secrete HCl and intrinsic factor; chief (peptic/zymogen) cells secrete pepsinogen. G-cells secrete the hormone gastrin and mucous neck cells secrete protective mucus."
                },
                {
                    id: "dg9",
                    text: "Intrinsic factor — required for absorption of vitamin $B_{12}$ in the ileum, and whose lack causes pernicious anaemia — is secreted by the:",
                    options: [
                        { key: "a", text: "chief cells" },
                        { key: "b", text: "parietal cells" },
                        { key: "c", text: "G-cells" },
                        { key: "d", text: "Paneth cells" }
                    ],
                    answer: "b",
                    explanation: "Parietal cells secrete both HCl and intrinsic factor (a glycoprotein). Intrinsic factor binds vitamin $B_{12}$ so it can be absorbed in the terminal ileum; its deficiency causes pernicious anaemia."
                },
                {
                    id: "dg10",
                    text: "The largest gland of the human body — which also stores glycogen, converts toxic ammonia into urea and synthesises plasma proteins — is the:",
                    options: [
                        { key: "a", text: "pancreas" },
                        { key: "b", text: "liver" },
                        { key: "c", text: "spleen" },
                        { key: "d", text: "parotid gland" }
                    ],
                    answer: "b",
                    explanation: "The liver (~1.5 kg) is the largest gland; besides secreting bile it stores glycogen, deaminates amino acids and converts ammonia to urea, and synthesises plasma proteins such as albumin and fibrinogen. (The spleen is not a gland.)"
                }
            ]
        },

        /* ----------------------------------------------------------
           3) PHYSIOLOGY OF DIGESTION  (Zoology) — hardest
           Enzyme pH optima, endo/exopeptidases, disaccharidases,
           lipase products, hormonal control (gastrin/secretin/CCK)
        ---------------------------------------------------------- */
        {
            id: "digestphys13",
            name: "Physiology of Digestion",
            subject: "Zoology",
            accent: "emerald",
            blurb: "pH optima of ptyalin & pepsin · endo- vs exopeptidases · disaccharidases · lipase products · gastrin, secretin, CCK",
            questions: [
                {
                    id: "pd1",
                    text: "Salivary amylase (ptyalin) works best near pH 6.8 and is inactivated in the stomach once the luminal pH falls below approximately:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "4" },
                        { key: "c", text: "6" },
                        { key: "d", text: "7" }
                    ],
                    answer: "b",
                    explanation: "Ptyalin is optimal around pH 6.8 and is denatured once the gastric pH drops below about 4; even so, roughly 30% of starch may be hydrolysed to maltose before this occurs."
                },
                {
                    id: "pd2",
                    text: "Pepsin has an optimum pH of about 1.5–2.0, supplied by gastric HCl. Besides creating this acidic optimum, HCl also:",
                    options: [
                        { key: "a", text: "hydrolyses dietary proteins straight into free amino acids" },
                        { key: "b", text: "converts pepsinogen into active pepsin and destroys most microbes" },
                        { key: "c", text: "emulsifies dietary fats into a fine suspension of droplets" },
                        { key: "d", text: "provides the alkaline medium that activates salivary amylase" }
                    ],
                    answer: "b",
                    explanation: "HCl converts pepsinogen → pepsin (which then autoactivates), denatures proteins and is bactericidal. Pepsin is an endopeptidase yielding peptones and proteoses, not free amino acids."
                },
                {
                    id: "pd3",
                    text: "Which of the following protein-splitting enzymes is an exopeptidase that removes amino acids one at a time from the carboxyl (−COOH) end of a peptide?",
                    options: [
                        { key: "a", text: "trypsin" },
                        { key: "b", text: "chymotrypsin" },
                        { key: "c", text: "carboxypeptidase" },
                        { key: "d", text: "pepsin" }
                    ],
                    answer: "c",
                    explanation: "Carboxypeptidase (from pancreatic procarboxypeptidase) is an exopeptidase acting at the −COOH terminus. Trypsin, chymotrypsin and pepsin are endopeptidases cleaving internal bonds; aminopeptidases act at the −NH₂ end."
                },
                {
                    id: "pd4",
                    text: "Complete hydrolysis of a molecule of the disaccharide sucrose by the brush-border enzyme sucrase yields:",
                    options: [
                        { key: "a", text: "two molecules of glucose" },
                        { key: "b", text: "one glucose and one fructose" },
                        { key: "c", text: "one glucose and one galactose" },
                        { key: "d", text: "two molecules of fructose" }
                    ],
                    answer: "b",
                    explanation: "Sucrase gives glucose + fructose; maltase gives glucose + glucose; lactase gives glucose + galactose. These disaccharidases are membrane-bound brush-border enzymes."
                },
                {
                    id: "pd5",
                    text: "Pancreatic lipase (with colipase) acts on an emulsified triglyceride, cleaving chiefly the 1- and 3-ester bonds, so that each molecule mainly yields:",
                    options: [
                        { key: "a", text: "three free fatty acids and glycerol" },
                        { key: "b", text: "two free fatty acids and one monoglyceride" },
                        { key: "c", text: "glycerol and a single fatty acid" },
                        { key: "d", text: "cholesterol and bile salts" }
                    ],
                    answer: "b",
                    explanation: "The principal products are two free fatty acids and one 2-monoglyceride, which then enter micelles for delivery to the absorptive surface."
                },
                {
                    id: "pd6",
                    text: "Secretin, released from the duodenal mucosa in response to acidic chyme, primarily stimulates the:",
                    options: [
                        { key: "a", text: "gastric chief cells to pour out more pepsinogen" },
                        { key: "b", text: "pancreatic duct cells to release a bicarbonate-rich juice" },
                        { key: "c", text: "gallbladder to contract and expel its stored bile" },
                        { key: "d", text: "gastric parietal cells to secrete still more HCl" }
                    ],
                    answer: "b",
                    explanation: "Secretin (the first hormone ever discovered) responds to H⁺ and drives the pancreas and liver to secrete an alkaline, $\\mathrm{HCO_3^-}$-rich fluid that neutralises the acid; it also mildly inhibits gastric acid."
                },
                {
                    id: "pd7",
                    text: "Cholecystokinin (CCK), released by the duodenal mucosa mainly in response to fats and amino acids, causes:",
                    options: [
                        { key: "a", text: "relaxation of the gallbladder with reduced enzyme secretion" },
                        { key: "b", text: "contraction of the gallbladder with enzyme-rich juice secretion" },
                        { key: "c", text: "acceleration of gastric emptying into the duodenum" },
                        { key: "d", text: "secretion of a purely bicarbonate-rich pancreatic juice" }
                    ],
                    answer: "b",
                    explanation: "CCK contracts the gallbladder (ejecting bile), relaxes the sphincter of Oddi and stimulates the pancreatic acini to release an enzyme-rich juice; it also slows gastric emptying so fats have more time to be digested."
                },
                {
                    id: "pd8",
                    text: "Gastrin, which drives gastric acid secretion, is released by the G-cells of the stomach in response to:",
                    options: [
                        { key: "a", text: "the arrival of strongly acidic chyme in the duodenum" },
                        { key: "b", text: "stomach distension, luminal peptides and vagal parasympathetic input" },
                        { key: "c", text: "a sharp fall in the circulating blood glucose level" },
                        { key: "d", text: "reabsorption of conjugated bile salts in the terminal ileum" }
                    ],
                    answer: "b",
                    explanation: "Gastrin release is triggered by gastric distension, partly digested proteins and parasympathetic (vagal) input; gastrin then stimulates parietal-cell HCl and chief-cell pepsinogen. A low luminal pH feeds back to inhibit it."
                },
                {
                    id: "pd9",
                    text: "Which pairing correctly gives the FINAL absorbable products of a nutrient in the small intestine?",
                    options: [
                        { key: "a", text: "starch is finally taken up as the disaccharide maltose" },
                        { key: "b", text: "proteins are finally absorbed largely as small dipeptides" },
                        { key: "c", text: "triglycerides are absorbed only after breakdown to free glycerol" },
                        { key: "d", text: "nucleic acids yield nucleosides, bases, pentoses and phosphates" }
                    ],
                    answer: "d",
                    explanation: "Nucleases give nucleotides, then nucleotidases and phosphatases release nucleosides, bases, pentoses and phosphates. Starch is finally absorbed as monosaccharides and proteins as amino acids, so (a), (b) and (c) are not the final products."
                },
                {
                    id: "pd10",
                    text: "The intestinal juice (succus entericus) supplies the enzyme that activates trypsinogen and thereby launches the whole pancreatic protease cascade, namely:",
                    options: [
                        { key: "a", text: "enterokinase" },
                        { key: "b", text: "aminopeptidase" },
                        { key: "c", text: "nucleotidase" },
                        { key: "d", text: "dipeptidase" }
                    ],
                    answer: "a",
                    explanation: "Enterokinase (enteropeptidase) from the duodenal mucosa is the \"activator of activators\": it converts trypsinogen → trypsin, which then activates chymotrypsinogen, procarboxypeptidase and more trypsinogen, starting the entire protein-digestion cascade."
                }
            ]
        },

        /* ----------------------------------------------------------
           4) ABSORPTION, ASSIMILATION & DISORDERS  (Zoology) — hardest
           SGLT1/GLUT transport, micelles & chylomicrons, lacteals,
           fat-soluble vitamins, PEM, jaundice, steatorrhoea, ulcers
        ---------------------------------------------------------- */
        {
            id: "absorption13",
            name: "Absorption, Assimilation & Disorders",
            subject: "Zoology",
            accent: "cyan",
            blurb: "SGLT1 & GLUT carriers · micelles vs chylomicrons · lacteals · fat-soluble vitamins · kwashiorkor/marasmus · jaundice · H. pylori",
            questions: [
                {
                    id: "ab1",
                    text: "Glucose and galactose are absorbed from the gut lumen into the enterocyte against their concentration gradient by a secondary active transport (SGLT1) that is coupled to the inward movement of:",
                    options: [
                        { key: "a", text: "$\\mathrm{K^+}$ ions" },
                        { key: "b", text: "$\\mathrm{Na^+}$ ions" },
                        { key: "c", text: "$\\mathrm{Cl^-}$ ions" },
                        { key: "d", text: "$\\mathrm{H^+}$ ions" }
                    ],
                    answer: "b",
                    explanation: "SGLT1 uses the inward $\\mathrm{Na^+}$ gradient (maintained by the basolateral $\\mathrm{Na^+/K^+}$-ATPase) to drive glucose/galactose uptake. Fructose enters passively through GLUT5, and all three leave the cell into blood via GLUT2."
                },
                {
                    id: "ab2",
                    text: "The products of fat digestion (fatty acids and monoglycerides) are ferried to the surface of the intestinal epithelium in tiny lipid–bile-salt aggregates called:",
                    options: [
                        { key: "a", text: "chylomicrons" },
                        { key: "b", text: "micelles" },
                        { key: "c", text: "lipoproteins" },
                        { key: "d", text: "liposomes" }
                    ],
                    answer: "b",
                    explanation: "Micelles carry fatty acids and monoglycerides to the brush border, where the lipids diffuse in. Inside the enterocyte they are re-esterified to triglycerides and packaged as chylomicrons."
                },
                {
                    id: "ab3",
                    text: "Unlike absorbed sugars and amino acids, the chylomicrons formed in the enterocyte are released not into the blood capillaries but into:",
                    options: [
                        { key: "a", text: "the hepatic portal vein to the liver" },
                        { key: "b", text: "the lacteals (lymphatics) of the villi" },
                        { key: "c", text: "the central vein of the hepatic lobule" },
                        { key: "d", text: "the intestinal crypts of Lieberkühn" }
                    ],
                    answer: "b",
                    explanation: "Chylomicrons are too large for blood capillaries and enter the lacteals of the villi, pass via the thoracic duct and join the blood at the left subclavian vein — initially bypassing the liver. Sugars and amino acids go by the hepatic portal vein."
                },
                {
                    id: "ab4",
                    text: "A fat-soluble vitamin whose absorption fails when bile flow is obstructed, producing a bleeding tendency through defective clotting-factor synthesis, is:",
                    options: [
                        { key: "a", text: "vitamin C" },
                        { key: "b", text: "vitamin K" },
                        { key: "c", text: "vitamin $B_{12}$" },
                        { key: "d", text: "folic acid" }
                    ],
                    answer: "b",
                    explanation: "Vitamins A, D, E and K are fat-soluble and need bile salts (micelle formation) for absorption. Blocked bile impairs vitamin K uptake, so the liver makes too little of clotting factors II, VII, IX and X, causing bleeding."
                },
                {
                    id: "ab5",
                    text: "In nutrition, the term \"assimilation\" refers specifically to:",
                    options: [
                        { key: "a", text: "the mechanical breakdown of food into smaller particles" },
                        { key: "b", text: "the enzymatic hydrolysis of macromolecules into monomers" },
                        { key: "c", text: "the uptake of absorbed nutrients into cells for growth and repair" },
                        { key: "d", text: "the elimination of undigested residues from the body as faeces" }
                    ],
                    answer: "c",
                    explanation: "Assimilation is the utilisation of absorbed food — its incorporation into the protoplasm for growth and repair and its use in respiration. Ingestion, digestion, absorption and egestion are the other, separate steps."
                },
                {
                    id: "ab6",
                    text: "Among the protein-energy malnutrition (PEM) disorders, the condition caused by a diet severely deficient in protein but with roughly adequate calories — marked by oedema, a swollen belly and stunted growth — is:",
                    options: [
                        { key: "a", text: "marasmus" },
                        { key: "b", text: "kwashiorkor" },
                        { key: "c", text: "rickets" },
                        { key: "d", text: "scurvy" }
                    ],
                    answer: "b",
                    explanation: "Kwashiorkor arises from severe protein deficiency (calories may be adequate); low plasma albumin causes oedema and a pot-belly. Marasmus, by contrast, comes from a deficiency of both protein and calories, giving extreme wasting without oedema."
                },
                {
                    id: "ab7",
                    text: "Jaundice, seen as yellowing of the skin and the sclera of the eyes, is due to the accumulation in the blood of:",
                    options: [
                        { key: "a", text: "urea" },
                        { key: "b", text: "bilirubin" },
                        { key: "c", text: "cholesterol" },
                        { key: "d", text: "haemoglobin" }
                    ],
                    answer: "b",
                    explanation: "Jaundice reflects hyperbilirubinaemia — excess of the bile pigment bilirubin — which may be pre-hepatic (haemolysis), hepatic (liver disease) or post-hepatic (bile-duct obstruction)."
                },
                {
                    id: "ab8",
                    text: "Most water is reabsorbed in the small intestine, but the colon reclaims the remainder. This colonic water absorption follows osmotically the active reabsorption of:",
                    options: [
                        { key: "a", text: "$\\mathrm{Na^+}$ ions" },
                        { key: "b", text: "glucose" },
                        { key: "c", text: "amino acids" },
                        { key: "d", text: "bile salts" }
                    ],
                    answer: "a",
                    explanation: "The colon actively absorbs $\\mathrm{Na^+}$ (while secreting $\\mathrm{K^+}$ and $\\mathrm{HCO_3^-}$) and water follows osmotically. When this fails — e.g. the secretory state of cholera — diarrhoea and dehydration result."
                },
                {
                    id: "ab9",
                    text: "Steatorrhoea — the passing of bulky, pale, foul-smelling, fatty stools — is a direct clinical sign of impaired:",
                    options: [
                        { key: "a", text: "carbohydrate digestion or absorption" },
                        { key: "b", text: "protein digestion or absorption" },
                        { key: "c", text: "fat digestion or absorption" },
                        { key: "d", text: "water reabsorption in the gut" }
                    ],
                    answer: "c",
                    explanation: "Excess faecal fat (steatorrhoea) signals fat malabsorption — from a lack of bile salts, pancreatic lipase deficiency, or a damaged intestinal mucosa (as in coeliac disease)."
                },
                {
                    id: "ab10",
                    text: "A peptic ulcer is an erosion of the mucosa of the stomach or duodenum. The bacterium now recognised as the major infective cause of most such ulcers is:",
                    options: [
                        { key: "a", text: "Escherichia coli" },
                        { key: "b", text: "Helicobacter pylori" },
                        { key: "c", text: "Vibrio cholerae" },
                        { key: "d", text: "Salmonella typhi" }
                    ],
                    answer: "b",
                    explanation: "Helicobacter pylori colonises the gastric mucosa, weakens the protective mucus layer and promotes ulceration; its discovery by Marshall and Warren overturned the old \"acid and stress only\" view. Chronic NSAID use is the other main cause."
                }
            ]
        }
    ]
};

/* ================================================================
   DAY 14 — CEE FULL MOCK TEST (200 questions · 3 hours)
   Modelled on the IOM 46th-batch Morning-shift CEE paper
   (20 Ashadh 2083). Physics 50 · Chemistry 50 · Zoology 40 ·
   Botany 40 · MAT 20. Figures are reproduced as inline SVG.
   ================================================================ */
const DAY14 = {
    day: 14,
    title: "Day 14",
    subtitle: "CEE Full Mock Test · 200 Q · 3 hours",
    durationMinutes: 180,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "phy14",
            name: "Physics",
            subject: "Physics",
            accent: "blue",
            blurb: "Full 50-question CEE Physics section — units, mechanics, fluids, heat, waves, optics, current, magnetism & modern physics.",
            questions: [
                {
                    id: "p101",
                    text: "The magnetic flux density due to a magnet is 100 in SI units. A new system takes 1 unit of mass, length, time and current as 5 kg, 100 cm, 1 s and 100 biot respectively (1 biot = 10 A). The numerical value of the magnetic flux density in this system is:",
                    options: [
                        { key: "a", text: "$2\\times10^{8}$" },
                        { key: "b", text: "$2\\times10^{6}$" },
                        { key: "c", text: "$2\\times10^{4}$" },
                        { key: "d", text: "$2\\times10^{10}$" }
                    ],
                    answer: "c",
                    explanation: "$[B]=M\\,T^{-2}I^{-1}$. Numerical value scales as $n_2=n_1\\left(\\frac{M_1}{M_2}\\right)\\left(\\frac{T_1}{T_2}\\right)^{-2}\\left(\\frac{I_1}{I_2}\\right)^{-1}=100\\times\\frac{1}{5}\\times1\\times1000=2\\times10^{4}$, using $I_2=100\\text{ biot}=1000$ A."
                },
                {
                    id: "p102",
                    text: "A particle's velocity–time graph is a straight line making an angle of $30^\\circ$ with the velocity axis. At $t=0$, its velocity is $100\\,\\mathrm{ms^{-1}}$. The displacement during the first $\\sqrt3\\,$s is (take $\\sqrt3\\approx1.7$):",
                    options: [
                        { key: "a", text: "$172.6\\,$m" },
                        { key: "b", text: "$172.5\\,$m" },
                        { key: "c", text: "$170.0\\,$m" },
                        { key: "d", text: "$175.8\\,$m" }
                    ],
                    answer: "b",
                    explanation: "Angle with the $v$-axis is $30^\\circ$, so slope $a=\\tan60^\\circ=\\sqrt3$. $s=ut+\\tfrac12at^2=100\\sqrt3+\\tfrac12\\sqrt3(\\sqrt3)^2=101.5\\sqrt3\\approx172.5\\,$m."
                },
                {
                    id: "p103",
                    text: "A light string over a smooth light pulley connects two masses $m_1$ and $m_2$ ($m_1>m_2$). If the acceleration of the system is $g/8$, the ratio $m_2/m_1$ is:",
                    options: [
                        { key: "a", text: "$7/9$" },
                        { key: "b", text: "$9/7$" },
                        { key: "c", text: "$5/7$" },
                        { key: "d", text: "$7/5$" }
                    ],
                    answer: "a",
                    explanation: "$a=\\dfrac{m_1-m_2}{m_1+m_2}g=\\dfrac{g}{8}\\Rightarrow 8(m_1-m_2)=m_1+m_2\\Rightarrow 7m_1=9m_2\\Rightarrow \\dfrac{m_2}{m_1}=\\dfrac{7}{9}.$"
                },
                {
                    id: "p104",
                    text: "A football A (hollow sphere) and a solid steel ball B, of same mass and radius, roll down inclines of equal length but inclinations $30^\\circ$ and $45^\\circ$ respectively. The ratio $V_A^{2}:V_B^{2}$ at the bottom is:",
                    options: [
                        { key: "a", text: "$\\dfrac{21}{25\\sqrt2}$" },
                        { key: "b", text: "$\\dfrac{25\\sqrt2}{21}$" },
                        { key: "c", text: "$\\dfrac{21\\sqrt2}{25}$" },
                        { key: "d", text: "$\\dfrac{25}{21\\sqrt2}$" }
                    ],
                    answer: "a",
                    explanation: "$v^2=\\dfrac{2gL\\sin\\theta}{1+I/mr^2}$. Shell: $1+\\tfrac23=\\tfrac53$; solid: $1+\\tfrac25=\\tfrac75$. $\\dfrac{V_A^2}{V_B^2}=\\dfrac{\\sin30^\\circ/(5/3)}{\\sin45^\\circ/(7/5)}=\\dfrac{21}{25\\sqrt2}.$"
                },
                {
                    id: "p105",
                    text: "A venturimeter works on which of the following principle(s)?",
                    options: [
                        { key: "a", text: "Bernoulli's principle only" },
                        { key: "b", text: "Pascal's law and Archimedes' principle" },
                        { key: "c", text: "Equation of continuity only" },
                        { key: "d", text: "Both the equation of continuity and Bernoulli's theorem" }
                    ],
                    answer: "d",
                    explanation: "A venturimeter relates the pressure drop across a constriction to flow rate using the continuity equation together with Bernoulli's theorem."
                },
                {
                    id: "p106",
                    text: "Two satellites A and B move around the earth in the same orbit; the mass of A is twice that of B. The quantity that is the same for both satellites is the:",
                    options: [
                        { key: "a", text: "potential energy" },
                        { key: "b", text: "kinetic energy" },
                        { key: "c", text: "total energy" },
                        { key: "d", text: "magnitude of orbital velocity" }
                    ],
                    answer: "d",
                    explanation: "Orbital speed $v=\\sqrt{GM_e/r}$ depends only on the orbital radius, not on the satellite's mass, so it is identical for both. All the energies scale with satellite mass."
                },
                {
                    id: "p107",
                    text: "Two wires of the same length and radius, of Young's moduli $Y_1$ and $Y_2$, are joined end to end and loaded. The combination behaves as a single wire of Young's modulus:",
                    options: [
                        { key: "a", text: "$Y=\\dfrac{Y_1+Y_2}{2}$" },
                        { key: "b", text: "$Y=\\dfrac{Y_1Y_2}{Y_1+Y_2}$" },
                        { key: "c", text: "$Y=\\dfrac{2Y_1Y_2}{Y_1+Y_2}$" },
                        { key: "d", text: "$Y=\\dfrac{Y_1Y_2}{2(Y_1+Y_2)}$" }
                    ],
                    answer: "c",
                    explanation: "For a series (end-to-end) combination of equal-length, equal-area wires, the extensions add for the same force, giving an effective $Y=\\dfrac{2Y_1Y_2}{Y_1+Y_2}$."
                },
                {
                    id: "p108",
                    text: "A particle executes SHM of amplitude $A$ and angular frequency $\\omega$. The magnitude of its average velocity as it moves from one extreme position to the other is:",
                    options: [
                        { key: "a", text: "$\\dfrac{A\\omega}{\\pi}$" },
                        { key: "b", text: "Zero" },
                        { key: "c", text: "$\\dfrac{2A\\omega}{\\pi}$" },
                        { key: "d", text: "$\\dfrac{A\\omega}{2\\pi}$" }
                    ],
                    answer: "c",
                    explanation: "Displacement extreme-to-extreme $=2A$ in half a period $T/2=\\pi/\\omega$; average speed $=\\dfrac{2A}{\\pi/\\omega}=\\dfrac{2A\\omega}{\\pi}.$"
                },
                {
                    id: "p109",
                    text: "A block of mass $m$ is dragged over a rough horizontal path, once completely around a circle of radius $R$, returning to the start. If the coefficient of kinetic friction is $\\mu$, the total work done by friction over this closed loop is:",
                    options: [
                        { key: "a", text: "Zero" },
                        { key: "b", text: "$+\\mu m g\\,2\\pi R$" },
                        { key: "c", text: "$-\\mu m g\\,2\\pi R$" },
                        { key: "d", text: "$-\\mu m g\\,\\pi R$" }
                    ],
                    answer: "c",
                    explanation: "Friction always opposes motion, so its work is $-\\mu mg\\times(\\text{path length})=-\\mu mg(2\\pi R)$; unlike a conservative force it does not vanish over a closed path."
                },
                {
                    id: "p110",
                    text: "A liquid flows through a capillary tube under a steady pressure head. If the radius of the tube is tripled and the pressure gradient across it is also tripled, the volume flow rate $Q$ changes by a factor of:",
                    options: [
                        { key: "a", text: "$27$" },
                        { key: "b", text: "$81$" },
                        { key: "c", text: "$243$" },
                        { key: "d", text: "$729$" }
                    ],
                    answer: "c",
                    explanation: "By Poiseuille's law $Q\\propto r^{4}\\cdot(\\text{pressure gradient})$. Tripling $r$ gives $3^4=81$ and tripling the gradient gives $\\times3$, so $Q$ increases $81\\times3=243$ times."
                },
                {
                    id: "p11",
                    text: "To experimentally verify the Zeroth law of thermodynamics, the walls between the systems must be arranged so that:",
                    options: [
                        { key: "a", text: "A and B are separated by an adiabatic wall while both are connected to C through diathermal walls" },
                        { key: "b", text: "A and B are separated by a diathermal wall while both are connected to C through adiabatic walls" },
                        { key: "c", text: "all systems are separated by adiabatic walls" },
                        { key: "d", text: "any of the above arrangements" }
                    ],
                    answer: "a",
                    explanation: "A and B must not exchange heat directly (adiabatic wall between them) but each must reach equilibrium with C (diathermal walls); one then tests whether A and B are in equilibrium with each other."
                },
                {
                    id: "p12",
                    text: "A rectangular sheet has length $9\\,$cm, width $3\\,$cm, mass $0.1\\,$kg, cubical expansivity $9\\times10^{-5}\\,\\mathrm{K^{-1}}$ and specific heat $900\\,\\mathrm{J\\,kg^{-1}\\,{}^\\circ C^{-1}}$. If $18\\times10^{2}\\,$J of heat is supplied, the change in its area is:",
                    options: [
                        { key: "a", text: "$3.24\\times10^{-1}\\,\\mathrm{cm^2}$" },
                        { key: "b", text: "$3.24\\times10^{-2}\\,\\mathrm{cm^2}$" },
                        { key: "c", text: "$3.24\\times10^{-3}\\,\\mathrm{cm^2}$" },
                        { key: "d", text: "$3.24\\times10^{-4}\\,\\mathrm{cm^2}$" }
                    ],
                    answer: "b",
                    explanation: "$\\Delta T=\\dfrac{Q}{mc}=\\dfrac{1800}{0.1\\times900}=20\\,$K. Area expansivity $\\beta=\\tfrac23\\gamma=6\\times10^{-5}$. $\\Delta A=\\beta A\\,\\Delta T=6\\times10^{-5}\\times27\\times20=3.24\\times10^{-2}\\,\\mathrm{cm^2}.$"
                },
                {
                    id: "p13",
                    text: "If a body cools according to Newton's law of cooling, a graph of the body's temperature $T$ against time is a(n):",
                    options: [
                        { key: "a", text: "exponentially decaying curve" },
                        { key: "b", text: "straight line with negative slope" },
                        { key: "c", text: "upward-sloping parabola" },
                        { key: "d", text: "straight line with positive slope" }
                    ],
                    answer: "a",
                    explanation: "Newton's law gives $T=T_s+(T_0-T_s)e^{-kt}$, an exponential decay of temperature toward the surroundings' temperature $T_s$."
                },
                {
                    id: "p14",
                    text: "The thermal radiation emitted by a body is proportional to $T^{n}$, where the value of $n$ is exactly 4 for a:",
                    options: [
                        { key: "a", text: "black body" },
                        { key: "b", text: "all bodies" },
                        { key: "c", text: "bodies painted black only" },
                        { key: "d", text: "polished body" }
                    ],
                    answer: "a",
                    explanation: "The Stefan–Boltzmann law $E=\\sigma T^4$ is stated for an ideal black body; real bodies radiate $e\\sigma T^4$ with emissivity $e<1$."
                },
                {
                    id: "p15",
                    text: "A glass vessel contains air at $27^\\circ$C. To what temperature must it be heated to expel one-fourth of the air, the pressure remaining constant?",
                    options: [
                        { key: "a", text: "$229^\\circ$C" },
                        { key: "b", text: "$127^\\circ$C" },
                        { key: "c", text: "$167^\\circ$C" },
                        { key: "d", text: "$277^\\circ$C" }
                    ],
                    answer: "b",
                    explanation: "At constant $P$ and $V$, $nT=$ const. Expelling $\\tfrac14$ leaves $\\tfrac34n$, so $T_2=\\dfrac{n T_1}{\\tfrac34 n}=\\dfrac43\\times300=400\\,$K$=127^\\circ$C."
                },
                {
                    id: "p16",
                    text: "One mole of an ideal gas is compressed adiabatically from temperature $T_1$ to $T_2$. The work done by the gas is:",
                    options: [
                        { key: "a", text: "$\\dfrac{R(T_1-T_2)}{\\gamma-1}$" },
                        { key: "b", text: "$C_v(T_1-T_2)$" },
                        { key: "c", text: "$C_v(T_2-T_1)$" },
                        { key: "d", text: "$\\dfrac{C_p}{C_v}(T_1-T_2)$" }
                    ],
                    answer: "a",
                    explanation: "For an adiabatic process $W=\\dfrac{R(T_1-T_2)}{\\gamma-1}$; since $C_v=\\dfrac{R}{\\gamma-1}$ for one mole, this equals $C_v(T_1-T_2)$ as well."
                },
                {
                    id: "p17",
                    text: "In a Carnot cycle the highest temperature is $n$ times the lowest, and the heat supplied to the gas is $n$ times the net work done in the cycle. The efficiency of the cycle is:",
                    options: [
                        { key: "a", text: "$75\\%$" },
                        { key: "b", text: "$50\\%$" },
                        { key: "c", text: "$100\\%$" },
                        { key: "d", text: "$60\\%$" }
                    ],
                    answer: "b",
                    explanation: "$\\eta=1-\\dfrac{T_c}{T_h}=1-\\dfrac1n$ and $\\eta=\\dfrac{W}{Q}=\\dfrac1n$. Equating: $1-\\tfrac1n=\\tfrac1n\\Rightarrow n=2$, so $\\eta=\\tfrac12=50\\%$."
                },
                {
                    id: "p18",
                    text: "The nature of a graph between the speed of sound in a gas and the pressure of the gas (at constant temperature) is best represented by:<div style='margin-top:10px'><svg viewBox='0 0 130 40' width='130' style='vertical-align:middle'><line x1='4' y1='6' x2='4' y2='34' stroke='currentColor' stroke-width='1'/><line x1='4' y1='34' x2='40' y2='34' stroke='currentColor' stroke-width='1'/><text x='16' y='6' font-size='7' fill='currentColor'>v</text><text x='42' y='36' font-size='7' fill='currentColor'>P</text></svg><span style='font-size:12px'> &larr; each option below plots v (y) against P (x)</span></div>",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 120 70' width='120' style='vertical-align:middle'><line x1='16' y1='6' x2='16' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='16' y1='58' x2='112' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='22' y1='32' x2='106' y2='32' stroke='#2563eb' stroke-width='2.6'/><text x='4' y='14' font-size='9' fill='currentColor'>v</text><text x='106' y='69' font-size='9' fill='currentColor'>P</text></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 120 70' width='120' style='vertical-align:middle'><line x1='16' y1='6' x2='16' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='16' y1='58' x2='112' y2='58' stroke='currentColor' stroke-width='1.4'/><path d='M22 54 Q70 50 106 14' fill='none' stroke='#2563eb' stroke-width='2.6'/><text x='4' y='14' font-size='9' fill='currentColor'>v</text><text x='106' y='69' font-size='9' fill='currentColor'>P</text></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 120 70' width='120' style='vertical-align:middle'><line x1='16' y1='6' x2='16' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='16' y1='58' x2='112' y2='58' stroke='currentColor' stroke-width='1.4'/><path d='M22 14 Q70 50 106 54' fill='none' stroke='#2563eb' stroke-width='2.6'/><text x='4' y='14' font-size='9' fill='currentColor'>v</text><text x='106' y='69' font-size='9' fill='currentColor'>P</text></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 120 70' width='120' style='vertical-align:middle'><line x1='16' y1='6' x2='16' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='16' y1='58' x2='112' y2='58' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='56' x2='106' y2='12' stroke='#2563eb' stroke-width='2.6'/><text x='4' y='14' font-size='9' fill='currentColor'>v</text><text x='106' y='69' font-size='9' fill='currentColor'>P</text></svg>" }
                    ],
                    answer: "a",
                    explanation: "$v=\\sqrt{\\gamma P/\\rho}$; at constant temperature $P/\\rho$ is constant (since $\\rho\\propto P$), so $v$ is independent of pressure — a straight line parallel to the P-axis."
                },
                {
                    id: "p19",
                    text: "A pipe open at both ends has a fundamental frequency $f$ in air. When it is dipped vertically into water until 25% of its length is submerged, the fundamental frequency of the air column changes by:",
                    options: [
                        { key: "a", text: "$33.33\\%$" },
                        { key: "b", text: "$50\\%$" },
                        { key: "c", text: "$16.66\\%$" },
                        { key: "d", text: "$0\\%$" }
                    ],
                    answer: "a",
                    explanation: "It becomes a closed pipe of length $0.75L$: $f'=\\dfrac{v}{4(0.75L)}=\\dfrac{v}{3L}$. Since $f=\\dfrac{v}{2L}$, $f'=\\tfrac23 f$ — a decrease of $\\tfrac13=33.33\\%$."
                },
                {
                    id: "p20",
                    text: "Harka blows a whistle (frequency $555\\,$Hz) while moving in a circle of which the observer Balen is at the centre, at $18\\,$km/hr. The apparent frequency heard by Balen is:",
                    options: [
                        { key: "a", text: "$500\\,$Hz" },
                        { key: "b", text: "$556\\,$Hz" },
                        { key: "c", text: "$555\\,$Hz" },
                        { key: "d", text: "$600\\,$Hz" }
                    ],
                    answer: "c",
                    explanation: "The source moves on a circle about the observer, so its velocity is always perpendicular to the line of sight; the radial (line-of-sight) component is zero and there is no Doppler shift."
                },
                {
                    id: "p21",
                    text: "Which mirrors are used in a simple periscope?",
                    options: [
                        { key: "a", text: "convex and concave mirrors" },
                        { key: "b", text: "plane and corner mirrors" },
                        { key: "c", text: "spherical mirrors" },
                        { key: "d", text: "plane mirrors" }
                    ],
                    answer: "d",
                    explanation: "A periscope uses two parallel plane mirrors inclined at $45^\\circ$ to shift the line of sight while keeping the image erect and the same size."
                },
                {
                    id: "p22",
                    text: "A right-angled isosceles ($45^\\circ$–$45^\\circ$–$90^\\circ$) prism is immersed in a liquid of refractive index $\\sqrt2$. For a ray entering normally on a short face to undergo total internal reflection at the hypotenuse, the minimum refractive index of the prism material must be:",
                    options: [
                        { key: "a", text: "$\\sqrt2$" },
                        { key: "b", text: "$3/2$" },
                        { key: "c", text: "$\\sqrt3$" },
                        { key: "d", text: "$2$" }
                    ],
                    answer: "d",
                    explanation: "TIR at $45^\\circ$ needs $\\sin45^\\circ\\ge \\dfrac{n_{liquid}}{n_{prism}}$, i.e. $n_{prism}\\ge\\sqrt2\\,n_{liquid}=\\sqrt2\\times\\sqrt2=2$."
                },
                {
                    id: "p23",
                    text: "A converging meniscus lens ($n=1.5$) has surface radii $5\\,$cm and $10\\,$cm. Its concave face is turned upward and filled with water ($n=4/3$). The focal length of the water–glass combination is:",
                    options: [
                        { key: "a", text: "$12\\,$cm" },
                        { key: "b", text: "$60\\,$cm" },
                        { key: "c", text: "$15\\,$cm" },
                        { key: "d", text: "$-12\\,$cm" }
                    ],
                    answer: "b",
                    explanation: "Glass: $\\frac1{f_g}=(0.5)(\\tfrac15-\\tfrac1{10})=\\tfrac1{20}\\Rightarrow f_g=20$. Water plano-concave: $\\frac1{f_w}=(\\tfrac13)(-\\tfrac1{10})=-\\tfrac1{30}$. $\\frac1F=\\tfrac1{20}-\\tfrac1{30}=\\tfrac1{60}\\Rightarrow F=60\\,$cm."
                },
                {
                    id: "p24",
                    text: "In a Young's double-slit experiment with light of wavelength $\\lambda$, the intensity at a point where the path difference is $\\lambda/4$ is $I$. The intensity where the path difference is $\\lambda/3$ is:",
                    options: [
                        { key: "a", text: "$2I/3$" },
                        { key: "b", text: "$I/2$" },
                        { key: "c", text: "$I/3$" },
                        { key: "d", text: "$4I/3$" }
                    ],
                    answer: "b",
                    explanation: "$I=I_{max}\\cos^2(\\phi/2)$. At $\\Delta x=\\lambda/4$, $\\phi=\\pi/2\\Rightarrow I=I_{max}/2\\Rightarrow I_{max}=2I$. At $\\Delta x=\\lambda/3$, $\\phi=2\\pi/3\\Rightarrow I'=2I\\cos^2(60^\\circ)=I/2$."
                },
                {
                    id: "p25",
                    text: "Rayleigh's criterion of resolution is fundamentally a consequence of:",
                    options: [
                        { key: "a", text: "interference" },
                        { key: "b", text: "diffraction" },
                        { key: "c", text: "polarization" },
                        { key: "d", text: "scattering" }
                    ],
                    answer: "b",
                    explanation: "The finite resolving power of optical instruments arises from diffraction at the aperture, which spreads each point into an Airy pattern."
                },
                {
                    id: "p26",
                    text: "For a metallic conductor, as temperature increases, the ratio of electrical conductivity to electrical resistivity $(\\sigma/\\rho)$:",
                    options: [
                        { key: "a", text: "remains constant" },
                        { key: "b", text: "decreases" },
                        { key: "c", text: "increases" },
                        { key: "d", text: "first increases then decreases" }
                    ],
                    answer: "b",
                    explanation: "Since $\\sigma=1/\\rho$, $\\sigma/\\rho=1/\\rho^2$. For a metal $\\rho$ rises with temperature, so $1/\\rho^2$ falls."
                },
                {
                    id: "p27",
                    text: "In a metre-bridge experiment ($S$ = standard resistance, $R$ = a resistance wire) the balance length is $25\\,$cm. If $R$ is replaced by a wire of half the length and half the diameter of the original, the new balance length is:",
                    options: [
                        { key: "a", text: "$40\\,$cm" },
                        { key: "b", text: "$25\\,$cm" },
                        { key: "c", text: "$50\\,$cm" },
                        { key: "d", text: "$57.1\\,$cm" }
                    ],
                    answer: "a",
                    explanation: "$R'=\\rho\\dfrac{L/2}{A/4}=2R$. Initially $\\dfrac RS=\\dfrac{25}{75}=\\dfrac13$; now $\\dfrac{2R}{S}=\\dfrac{2}{3}=\\dfrac{l'}{100-l'}\\Rightarrow l'=40\\,$cm."
                },
                {
                    id: "p28",
                    text: "In the circuit shown, an ideal voltmeter V is connected between the mid-points of two parallel divider branches driven by a $2\\,$V cell (top branch $20\\,\\Omega$ then $30\\,\\Omega$; bottom branch $30\\,\\Omega$ then $20\\,\\Omega$). The voltmeter reads:<div style='margin-top:10px'><svg viewBox='0 0 264 152' width='264' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.6'><path d='M48 40 V92'/><path d='M224 40 V92'/><path d='M48 40 H74 M108 40 H152 M186 40 H224'/><path d='M48 92 H74 M108 92 H152 M186 92 H224'/><rect x='74' y='33' width='34' height='14'/><rect x='152' y='33' width='34' height='14'/><rect x='74' y='85' width='34' height='14'/><rect x='152' y='85' width='34' height='14'/><path d='M130 40 V55 M130 92 V77'/><path d='M48 92 V120 M48 120 H116 M132 120 H224 M224 92 V120'/></g><line x1='118' y1='109' x2='118' y2='131' stroke='currentColor' stroke-width='1.6'/><line x1='126' y1='114' x2='126' y2='126' stroke='currentColor' stroke-width='3.4'/><circle cx='130' cy='66' r='11' fill='none' stroke='#2563eb' stroke-width='1.8'/><text x='126' y='70' font-size='11' fill='#2563eb'>V</text><text x='80' y='29' font-size='10' fill='currentColor'>20&#8486;</text><text x='158' y='29' font-size='10' fill='currentColor'>30&#8486;</text><text x='80' y='111' font-size='10' fill='currentColor'>30&#8486;</text><text x='158' y='111' font-size='10' fill='currentColor'>20&#8486;</text><text x='136' y='117' font-size='10' fill='currentColor'>2 V</text></svg></div>",
                    options: [
                        { key: "a", text: "$0.5\\,$V" },
                        { key: "b", text: "$0\\,$V" },
                        { key: "c", text: "$0.4\\,$V" },
                        { key: "d", text: "$0.6\\,$V" }
                    ],
                    answer: "c",
                    explanation: "Each branch carries $\\dfrac{2}{50}=0.04\\,$A. Top mid-point potential $=2-0.04\\times20=1.2\\,$V; bottom $=2-0.04\\times30=0.8\\,$V. The voltmeter reads $|1.2-0.8|=0.4\\,$V."
                },
                {
                    id: "p29",
                    text: "Messi passes a current through a circuit and observes that heat is either absorbed or evolved at the junction between two dissimilar conductors. He is observing the:",
                    options: [
                        { key: "a", text: "Joule effect" },
                        { key: "b", text: "Peltier effect" },
                        { key: "c", text: "Seebeck effect" },
                        { key: "d", text: "Thomson effect" }
                    ],
                    answer: "b",
                    explanation: "The Peltier effect is the evolution or absorption of heat at a junction of two different conductors when a current flows through it."
                },
                {
                    id: "p30",
                    text: "The rms value of an alternating current that produces three times as much heat in a resistor as a direct current of $2\\,$A produces in the same resistor is:",
                    options: [
                        { key: "a", text: "$6\\,$A" },
                        { key: "b", text: "$3.46\\,$A" },
                        { key: "c", text: "$2\\,$A" },
                        { key: "d", text: "$0.66\\,$A" }
                    ],
                    answer: "b",
                    explanation: "$I_{rms}^2R=3(2^2R)\\Rightarrow I_{rms}=\\sqrt{12}=2\\sqrt3\\approx3.46\\,$A."
                },
                {
                    id: "p31",
                    text: "The magnetic susceptibility of nitrogen gas at temperature $T$ is proportional to:",
                    options: [
                        { key: "a", text: "$1/T$" },
                        { key: "b", text: "$T$" },
                        { key: "c", text: "$T^{0}$ (independent of $T$)" },
                        { key: "d", text: "$1/(T-T_c)$" }
                    ],
                    answer: "c",
                    explanation: "Nitrogen ($\\mathrm{N_2}$) has all electrons paired and is diamagnetic; diamagnetic susceptibility is essentially independent of temperature."
                },
                {
                    id: "p32",
                    text: "An insulated conducting wire is bent into an equilateral triangle of side $a$ and carries a steady current $I$. The magnitude of the magnetic field at the centroid is:",
                    options: [
                        { key: "a", text: "$\\dfrac{3\\mu_0 I}{2\\pi a}$" },
                        { key: "b", text: "$\\dfrac{4\\mu_0 I}{2\\pi a}$" },
                        { key: "c", text: "$\\dfrac{9\\mu_0 I}{4\\pi a}$" },
                        { key: "d", text: "$\\dfrac{9\\mu_0 I}{2\\pi a}$" }
                    ],
                    answer: "d",
                    explanation: "Each side contributes $\\dfrac{3\\mu_0 I}{2\\pi a}$ (with perpendicular distance $a/2\\sqrt3$ and end angles $60^\\circ$); three sides give $\\dfrac{9\\mu_0 I}{2\\pi a}$."
                },
                {
                    id: "p33",
                    text: "A conducting rod of length $l$ is rotated with constant angular frequency $\\omega$ about one end, perpendicular to a uniform magnetic field $B$. The potential difference between its mid-point and the rotating end is:",
                    options: [
                        { key: "a", text: "$\\tfrac12 B\\omega l^{2}$" },
                        { key: "b", text: "$\\tfrac13 B\\omega l^{2}$" },
                        { key: "c", text: "$\\tfrac18 B\\omega l^{2}$" },
                        { key: "d", text: "$\\tfrac14 B\\omega l^{2}$" }
                    ],
                    answer: "c",
                    explanation: "EMF from the axis to radius $r$ is $\\tfrac12 B\\omega r^2$. For the mid-point ($r=l/2$): $\\tfrac12 B\\omega (l/2)^2=\\tfrac18 B\\omega l^2$."
                },
                {
                    id: "p34",
                    text: "A straight wire of mass $1.2\\,$kg and length $1\\,$m carries a current of $5\\,$A. It is held suspended in mid-air by a uniform horizontal magnetic field. The magnitude of the field is (take $g=10\\,\\mathrm{ms^{-2}}$):",
                    options: [
                        { key: "a", text: "$0.65\\,$T" },
                        { key: "b", text: "$1.53\\,$T" },
                        { key: "c", text: "$2.4\\,$T" },
                        { key: "d", text: "$3.2\\,$T" }
                    ],
                    answer: "c",
                    explanation: "$BIL=mg\\Rightarrow B=\\dfrac{mg}{IL}=\\dfrac{1.2\\times10}{5\\times1}=2.4\\,$T."
                },
                {
                    id: "p35",
                    text: "You are given four capacitors, each of $12\\,\\mu$F. How should they be connected to obtain an equivalent capacitance of $9\\,\\mu$F?",
                    options: [
                        { key: "a", text: "all four in series" },
                        { key: "b", text: "all four in parallel" },
                        { key: "c", text: "three in parallel, then in series with the fourth" },
                        { key: "d", text: "two in parallel in series with two in parallel" }
                    ],
                    answer: "c",
                    explanation: "Three in parallel give $36\\,\\mu$F; in series with $12\\,\\mu$F: $\\dfrac{36\\times12}{48}=9\\,\\mu$F."
                },
                {
                    id: "p36",
                    text: "The electric potential inside a charged hollow conducting sphere is:",
                    options: [
                        { key: "a", text: "zero everywhere" },
                        { key: "b", text: "maximum at the centre" },
                        { key: "c", text: "constant everywhere" },
                        { key: "d", text: "minimum at the centre" }
                    ],
                    answer: "c",
                    explanation: "Inside a conductor the field is zero, so the potential is constant everywhere (equal to the surface value) — not necessarily zero."
                },
                {
                    id: "p37",
                    text: "A point charge $q$ is placed at one corner of a cube of side $a$. The electric flux passing through any one of the three faces adjacent to (touching) the charge is:",
                    options: [
                        { key: "a", text: "zero" },
                        { key: "b", text: "$q/8\\varepsilon_0$" },
                        { key: "c", text: "$q/24\\varepsilon_0$" },
                        { key: "d", text: "$q/6\\varepsilon_0$" }
                    ],
                    answer: "a",
                    explanation: "The field lines are parallel to the three faces that contain the charge, so the flux through each of these adjacent faces is zero; the total $q/8\\varepsilon_0$ passes through the three far faces."
                },
                {
                    id: "p38",
                    text: "The work done in carrying a charge of $1\\,$C from a point at $+500\\,$V to a point at $-500\\,$V is:",
                    options: [
                        { key: "a", text: "$1000\\,$J" },
                        { key: "b", text: "$-1000\\,$J" },
                        { key: "c", text: "$500\\,$J" },
                        { key: "d", text: "$-500\\,$J" }
                    ],
                    answer: "b",
                    explanation: "$W_{ext}=q(V_f-V_i)=1\\times(-500-500)=-1000\\,$J; the field does positive work as the positive charge moves to lower potential."
                },
                {
                    id: "p39",
                    text: "The binding energy per nucleon is nearly constant for many nuclei. This shows that nuclear forces are:",
                    options: [
                        { key: "a", text: "short range in nature" },
                        { key: "b", text: "charge independent" },
                        { key: "c", text: "attractive in nature" },
                        { key: "d", text: "saturated in nature" }
                    ],
                    answer: "d",
                    explanation: "A constant BE per nucleon means each nucleon interacts only with its immediate neighbours — the saturation property of nuclear forces."
                },
                {
                    id: "p40",
                    text: "Two electrons are set moving along (parallel to) a uniform magnetic field and a uniform electric field respectively. The nature of their motions is:",
                    options: [
                        { key: "a", text: "accelerated/linear and accelerated/circular" },
                        { key: "b", text: "accelerated/circular and constant/linear" },
                        { key: "c", text: "constant/linear and accelerated/linear" },
                        { key: "d", text: "constant/linear and accelerated/parabolic" }
                    ],
                    answer: "c",
                    explanation: "A charge moving parallel to $\\vec B$ feels no force (uniform velocity, straight line); in $\\vec E$ it feels a constant force, giving accelerated straight-line motion."
                },
                {
                    id: "p41",
                    text: "The photoelectric effect occurs in element A of work function $2.5\\,$eV with threshold wavelength $\\lambda$. Element B has a work function of $5\\,$eV. The maximum wavelength that can cause the photoelectric effect in B is:",
                    options: [
                        { key: "a", text: "$\\lambda$" },
                        { key: "b", text: "$2\\lambda$" },
                        { key: "c", text: "$\\lambda/2$" },
                        { key: "d", text: "$3\\lambda$" }
                    ],
                    answer: "c",
                    explanation: "$\\lambda_{th}=\\dfrac{hc}{\\phi}\\propto\\dfrac1\\phi$. Doubling the work function halves the threshold wavelength: $\\lambda_B=\\lambda/2$."
                },
                {
                    id: "p42",
                    text: "The period of revolution of the electron in the ground state of a hydrogen atom is $T$. Its period of revolution in the first excited state is:",
                    options: [
                        { key: "a", text: "$2T$" },
                        { key: "b", text: "$4T$" },
                        { key: "c", text: "$8T$" },
                        { key: "d", text: "$16T$" }
                    ],
                    answer: "c",
                    explanation: "$T\\propto n^3$. For the first excited state $n=2$, so $T_2=2^3T=8T$."
                },
                {
                    id: "p43",
                    text: "Continuous X-rays are produced due to:",
                    options: [
                        { key: "a", text: "transition of electrons from outer to inner shells" },
                        { key: "b", text: "the phenomenon of bremsstrahlung" },
                        { key: "c", text: "the photoelectric effect" },
                        { key: "d", text: "radioactivity of the target material" }
                    ],
                    answer: "b",
                    explanation: "Continuous (white) X-rays arise from the deceleration (braking radiation, bremsstrahlung) of fast electrons in the target; characteristic X-rays come from inner-shell transitions."
                },
                {
                    id: "p44",
                    text: "A radioactive substance emits $n$ beta particles in the first $2\\,$s and $0.5n$ beta particles in the next $2\\,$s. The half-life of the sample is:",
                    options: [
                        { key: "a", text: "$2/\\ln 2\\;\\mathrm{s}$" },
                        { key: "b", text: "$2\\,$s" },
                        { key: "c", text: "$4\\,$s" },
                        { key: "d", text: "$4\\ln 2\\;\\mathrm{s}$" }
                    ],
                    answer: "b",
                    explanation: "The number decaying in successive equal intervals falls by the factor $e^{-2\\lambda}=0.5$, so $2\\lambda=\\ln2$ and $T_{1/2}=\\ln2/\\lambda=2\\,$s."
                },
                {
                    id: "p45",
                    text: "An electric field is applied to a semiconductor with charge-carrier number density $n$ and drift velocity $v$. If the temperature is increased, then:",
                    options: [
                        { key: "a", text: "both $n$ and $v$ increase" },
                        { key: "b", text: "$n$ increases and $v$ decreases" },
                        { key: "c", text: "$v$ increases and $n$ decreases" },
                        { key: "d", text: "both $n$ and $v$ decrease" }
                    ],
                    answer: "b",
                    explanation: "Heating a semiconductor releases many more carriers (n rises sharply), but increased lattice scattering lowers the mobility, so the drift velocity falls."
                },
                {
                    id: "p46",
                    text: "In a full-wave rectifier, the frequency of the ripple in the output compared with the input is:",
                    options: [
                        { key: "a", text: "half" },
                        { key: "b", text: "double" },
                        { key: "c", text: "unchanged" },
                        { key: "d", text: "increased exponentially" }
                    ],
                    answer: "b",
                    explanation: "Both halves of each input cycle produce an output pulse, so the ripple (output) frequency is twice the input frequency."
                },
                {
                    id: "p47",
                    text: "Energy bands in solids are a consequence of:",
                    options: [
                        { key: "a", text: "Heisenberg's uncertainty principle" },
                        { key: "b", text: "Bohr's correspondence principle" },
                        { key: "c", text: "Ohm's law" },
                        { key: "d", text: "Pauli's exclusion principle" }
                    ],
                    answer: "d",
                    explanation: "When atoms come together, identical energy levels split (to satisfy Pauli's exclusion principle) into closely spaced levels that form energy bands."
                },
                {
                    id: "p48",
                    text: "An LED is connected to the output of a NOR gate. Under which input condition for A and B will the LED glow?",
                    options: [
                        { key: "a", text: "$A=0,\\ B=0$" },
                        { key: "b", text: "$A=1,\\ B=1$" },
                        { key: "c", text: "$A=1,\\ B=0$" },
                        { key: "d", text: "$A=0,\\ B=1$" }
                    ],
                    answer: "a",
                    explanation: "A NOR gate outputs 1 (high) only when both inputs are 0, so the LED glows for $A=0,\\,B=0$."
                },
                {
                    id: "p49",
                    text: "Which of the following particles has integral spin?",
                    options: [
                        { key: "a", text: "meson" },
                        { key: "b", text: "lepton" },
                        { key: "c", text: "nucleon" },
                        { key: "d", text: "hyperon" }
                    ],
                    answer: "a",
                    explanation: "Mesons are bosons with integer spin (0 or 1); leptons, nucleons and hyperons are fermions with half-integer spin."
                },
                {
                    id: "p50",
                    text: "Which of the following phenomena is NOT appreciably exhibited by gravitational waves?",
                    options: [
                        { key: "a", text: "reflection or refraction" },
                        { key: "b", text: "interference" },
                        { key: "c", text: "diffraction" },
                        { key: "d", text: "polarization" }
                    ],
                    answer: "a",
                    explanation: "Gravitational waves interact extremely weakly with matter and pass through it almost unchanged, so they show no appreciable reflection or refraction, though they can interfere, diffract and are polarized."
                }
            ]
        },
        {
            id: "chem14",
            name: "Chemistry",
            subject: "Chemistry",
            accent: "amber",
            blurb: "Full 50-question CEE Chemistry section — physical, inorganic & organic chemistry.",
            questions: [
                {
                    id: "c51",
                    text: "Human gastric juice contains $3.0\\,$g of HCl per litre. If a person produces $2.5\\,$L of gastric juice per day, how many antacid tablets, each containing $200\\,$mg of $\\mathrm{Al(OH)_3}$, are needed to neutralise all the HCl produced in one day?",
                    options: [
                        { key: "a", text: "13" },
                        { key: "b", text: "14" },
                        { key: "c", text: "27" },
                        { key: "d", text: "28" }
                    ],
                    answer: "c",
                    explanation: "HCl/day $=7.5\\,$g $=0.205\\,$mol. $\\mathrm{Al(OH)_3+3HCl}$ needs $0.205/3=0.0685\\,$mol $=5.34\\,$g of $\\mathrm{Al(OH)_3}$; $5.34/0.2\\approx27$ tablets."
                },
                {
                    id: "c52",
                    text: "Which is the correct sequence of steps in gravimetric analysis?",
                    options: [
                        { key: "a", text: "Precipitation → Filtration → Weighing → Stoichiometric calculation" },
                        { key: "b", text: "Filtration → Weighing → Precipitation → Stoichiometric calculation" },
                        { key: "c", text: "Preparation of solution → Precipitation → Filtration → Weighing → Stoichiometric calculation" },
                        { key: "d", text: "Preparation of solution → Filtration → Precipitation → Weighing → Stoichiometric calculation" }
                    ],
                    answer: "c",
                    explanation: "The analyte solution is prepared, the ion is precipitated, the precipitate is filtered and weighed, and the amount is found by stoichiometry."
                },
                {
                    id: "c53",
                    text: "HCl is best classified as:",
                    options: [
                        { key: "a", text: "a true electrolyte" },
                        { key: "b", text: "a weak electrolyte" },
                        { key: "c", text: "a potential electrolyte" },
                        { key: "d", text: "a non-electrolyte" }
                    ],
                    answer: "c",
                    explanation: "Pure HCl is covalent and non-conducting, but it ionises strongly in water; such covalent-yet-ionisable substances are potential electrolytes."
                },
                {
                    id: "c54",
                    text: "Which of the following is true for a polyprotic acid?",
                    options: [
                        { key: "a", text: "Successive ionisation constants are greater than the preceding ones" },
                        { key: "b", text: "Preceding ionisation constants are greater than the successive ones" },
                        { key: "c", text: "Successive ionisation constants are lower than the preceding ones" },
                        { key: "d", text: "Both 'b' and 'c'" }
                    ],
                    answer: "d",
                    explanation: "For a polyprotic acid $K_{a1}>K_{a2}>K_{a3}$ because removing a proton from an increasingly negative species is harder; statements (b) and (c) express the same fact."
                },
                {
                    id: "c55",
                    text: "For the acid-catalysed inversion of cane sugar, $\\mathrm{C_{12}H_{22}O_{11}+H_2O\\xrightarrow{H^+}C_6H_{12}O_6+C_6H_{12}O_6}$ (a pseudo first-order reaction), which graph is correct?",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 130 74' width='130' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='62' x2='122' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='22' y1='60' x2='112' y2='14' stroke='#d97706' stroke-width='2.4'/><text x='2' y='24' font-size='8' fill='currentColor'>ln[a/(a-x)]</text><text x='108' y='72' font-size='8' fill='currentColor'>t</text></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 130 74' width='130' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='62' x2='122' y2='62' stroke='currentColor' stroke-width='1.4'/><path d='M22 58 Q70 54 112 16' fill='none' stroke='#d97706' stroke-width='2.4'/><text x='2' y='24' font-size='8' fill='currentColor'>ln[a/(a-x)]</text><text x='108' y='72' font-size='8' fill='currentColor'>t</text></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 130 74' width='130' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='62' x2='122' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='22' y1='58' x2='112' y2='16' stroke='#d97706' stroke-width='2.4'/><text x='6' y='24' font-size='8' fill='currentColor'>ln(a-x)</text><text x='108' y='72' font-size='8' fill='currentColor'>t</text></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 130 74' width='130' style='vertical-align:middle'><line x1='20' y1='6' x2='20' y2='62' stroke='currentColor' stroke-width='1.4'/><line x1='20' y1='62' x2='122' y2='62' stroke='currentColor' stroke-width='1.4'/><path d='M22 58 L112 58' stroke='#d97706' stroke-width='2.4'/><text x='6' y='24' font-size='8' fill='currentColor'>ln(a-x)</text><text x='108' y='72' font-size='8' fill='currentColor'>t</text></svg>" }
                    ],
                    answer: "a",
                    explanation: "For a first-order reaction $\\ln\\dfrac{a}{a-x}=kt$, a straight line through the origin with slope $k$; equivalently $\\ln(a-x)$ falls linearly with time."
                },
                {
                    id: "c56",
                    text: "Which law explains the data below?<br>$\\mathrm{HCl(g)\\to \\tfrac12 H_2(g)+\\tfrac12 Cl_2(g)}$, $\\Delta H^\\circ=+92.31\\,$kJ<br>$\\mathrm{\\tfrac12 H_2(g)+\\tfrac12 Cl_2(g)\\to HCl(g)}$, $\\Delta H^\\circ=-92.31\\,$kJ",
                    options: [
                        { key: "a", text: "Hess's law" },
                        { key: "b", text: "Lavoisier–Laplace law" },
                        { key: "c", text: "Both Hess's law and the Laplace law" },
                        { key: "d", text: "Third law of thermodynamics" }
                    ],
                    answer: "b",
                    explanation: "The Lavoisier–Laplace law states that the heat change of a reaction is equal in magnitude but opposite in sign to that of the reverse reaction."
                },
                {
                    id: "c57",
                    text: "Which of the following are correct statements of the second law of thermodynamics?<br>(i) It is impossible to build an engine that continuously converts all the heat abstracted from a body into work without other changes.<br>(ii) A system left to itself tends, on average, toward the state of maximum probability.<br>(iii) The state of maximum entropy is the most stable for an isolated system.<br>(iv) There is a general tendency in nature for energy to pass from a more available to a less available form.",
                    options: [
                        { key: "a", text: "only (i)" },
                        { key: "b", text: "only (i) and (iii)" },
                        { key: "c", text: "only (ii) and (iii)" },
                        { key: "d", text: "all of (i), (ii), (iii) and (iv)" }
                    ],
                    answer: "d",
                    explanation: "All four are equivalent statements of the second law (Kelvin–Planck, statistical, entropy and degradation-of-energy forms)."
                },
                {
                    id: "c58",
                    text: "In electrolysis, the fraction of the total current carried by a particular ion is called its:",
                    options: [
                        { key: "a", text: "current fraction" },
                        { key: "b", text: "charge number" },
                        { key: "c", text: "transport number" },
                        { key: "d", text: "Nernst number" }
                    ],
                    answer: "c",
                    explanation: "The transport (transference) number is the fraction of the total current carried by a given ion."
                },
                {
                    id: "c59",
                    text: "In 1905–1908 Landolt sealed KCl and $\\mathrm{AgNO_3}$ solutions in the two limbs of an inverted Y-tube, mixed them, and found the total mass unchanged despite the formation of AgCl. This illustrates the:",
                    options: [
                        { key: "a", text: "law of constant composition" },
                        { key: "b", text: "law of multiple proportion" },
                        { key: "c", text: "law of conservation of mass" },
                        { key: "d", text: "law of chemical equivalence" }
                    ],
                    answer: "c",
                    explanation: "The total mass before and after the reaction is the same, verifying the law of conservation of mass."
                },
                {
                    id: "c60",
                    text: "Silver is deposited on a vessel of surface area $800\\,\\mathrm{cm^2}$ by passing $0.2\\,$A for $3\\,$hr. Given density of Ag $=10.47\\,\\mathrm{g/cc}$ and atomic weight $=107.92$, the thickness of the silver layer is:",
                    options: [
                        { key: "a", text: "$8.22\\times10^{-4}\\,$cm" },
                        { key: "b", text: "$1.08\\times10^{-4}\\,$cm" },
                        { key: "c", text: "$2.88\\times10^{-3}\\,$cm" },
                        { key: "d", text: "$2.88\\times10^{-4}\\,$cm" }
                    ],
                    answer: "d",
                    explanation: "$Q=0.2\\times10800=2160\\,$C; mass $=\\dfrac{2160}{96500}\\times107.92=2.42\\,$g; volume $=2.42/10.47=0.231\\,$cc; thickness $=0.231/800=2.88\\times10^{-4}\\,$cm."
                },
                {
                    id: "c61",
                    text: "The observation that the mass of a gas dissolved in a liquid is proportional to its partial pressure supports:",
                    options: [
                        { key: "a", text: "Peter's law" },
                        { key: "b", text: "Henry's law" },
                        { key: "c", text: "Boyle's law" },
                        { key: "d", text: "Gay-Lussac's law" }
                    ],
                    answer: "b",
                    explanation: "Henry's law: the solubility (mass dissolved) of a gas is directly proportional to its partial pressure over the liquid."
                },
                {
                    id: "c62",
                    text: "For one mole of an ideal gas the total energy is (where $U$ is the non-kinetic/internal potential energy):",
                    options: [
                        { key: "a", text: "$E=\\tfrac12 RT+U$" },
                        { key: "b", text: "$E=\\tfrac23 RT+U$" },
                        { key: "c", text: "$E=\\tfrac32 RT+U$" },
                        { key: "d", text: "$E=\\tfrac52 RT+U$" }
                    ],
                    answer: "c",
                    explanation: "The translational kinetic energy per mole is $\\tfrac32 RT$, so the total energy is $\\tfrac32 RT+U$."
                },
                {
                    id: "c63",
                    text: "In which type of liquid crystal are the molecules parallel to one another but not restricted to any particular plane (layer)?",
                    options: [
                        { key: "a", text: "nematic liquid crystal" },
                        { key: "b", text: "smectic liquid crystal" },
                        { key: "c", text: "cholesteric liquid crystal" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "In the nematic phase the rod-like molecules are aligned parallel (orientational order) but are not arranged in layers (no positional order)."
                },
                {
                    id: "c64",
                    text: "Which of the following is NOT a homogeneous equilibrium?",
                    options: [
                        { key: "a", text: "$\\mathrm{CaCO_3(s)\\rightleftharpoons CaO(s)+CO_2(g)}$" },
                        { key: "b", text: "$\\mathrm{C(s)+O_2(g)\\rightleftharpoons CO_2(g)}$" },
                        { key: "c", text: "$\\mathrm{Ice(s)\\rightleftharpoons Water(l)}$" },
                        { key: "d", text: "all of them" }
                    ],
                    answer: "d",
                    explanation: "A homogeneous equilibrium has all species in one phase. Each equilibrium listed contains more than one phase, so all are heterogeneous."
                },
                {
                    id: "c65",
                    text: "The unit of dipole moment, the Debye, is equivalent to:",
                    options: [
                        { key: "a", text: "$10^{-18}\\,\\mathrm{esu\\,cm}$" },
                        { key: "b", text: "$10^{-10}\\,\\mathrm{esu\\,cm}$" },
                        { key: "c", text: "$10^{-16}\\,\\mathrm{esu\\,cm}$" },
                        { key: "d", text: "$10^{-20}\\,\\mathrm{esu\\,cm}$" }
                    ],
                    answer: "a",
                    explanation: "$1\\ \\text{Debye}=10^{-18}\\,\\mathrm{esu\\,cm}=3.33\\times10^{-30}\\,\\mathrm{C\\,m}$."
                },
                {
                    id: "c66",
                    text: "Which of the following isoelectronic species has the smallest radius?",
                    options: [
                        { key: "a", text: "$\\mathrm{S^{2-}}$" },
                        { key: "b", text: "$\\mathrm{Cl^-}$" },
                        { key: "c", text: "$\\mathrm{K^+}$" },
                        { key: "d", text: "$\\mathrm{Ca^{2+}}$" }
                    ],
                    answer: "d",
                    explanation: "All have 18 electrons; the greater the nuclear charge, the smaller the radius. $\\mathrm{Ca^{2+}}$ ($Z=20$) has the highest nuclear charge and hence the smallest radius."
                },
                {
                    id: "c67",
                    text: "Maxwell's electromagnetic theory says an accelerating charge continuously radiates (loses) energy. This is in disagreement with:",
                    options: [
                        { key: "a", text: "Thomson's plum-pudding model" },
                        { key: "b", text: "Rutherford's atomic model" },
                        { key: "c", text: "Bohr's atomic model" },
                        { key: "d", text: "Heisenberg's uncertainty principle" }
                    ],
                    answer: "b",
                    explanation: "In Rutherford's model the orbiting (accelerating) electron should radiate energy and spiral into the nucleus; its failure to explain atomic stability contradicts this model."
                },
                {
                    id: "c68",
                    text: "Free (uncombined) hydrogen is found in:",
                    options: [
                        { key: "a", text: "acids" },
                        { key: "b", text: "water" },
                        { key: "c", text: "water gas" },
                        { key: "d", text: "marsh gas" }
                    ],
                    answer: "c",
                    explanation: "Water gas is a mixture of CO and free $\\mathrm{H_2}$; in acids, water and marsh gas ($\\mathrm{CH_4}$) hydrogen is chemically combined."
                },
                {
                    id: "c69",
                    text: "Oxygen can be obtained from air by fractional distillation because:",
                    options: [
                        { key: "a", text: "oxygen is in a different periodic group from nitrogen" },
                        { key: "b", text: "oxygen has a higher boiling point than nitrogen" },
                        { key: "c", text: "oxygen is more reactive than nitrogen" },
                        { key: "d", text: "oxygen has a lower density than nitrogen" }
                    ],
                    answer: "b",
                    explanation: "Liquid oxygen (bp $-183^\\circ$C) boils at a higher temperature than liquid nitrogen (bp $-196^\\circ$C), so nitrogen distils off first, separating the two."
                },
                {
                    id: "c70",
                    text: "Bottles of liquid ammonia are opened only after cooling in ice for some time because liquid ammonia:",
                    options: [
                        { key: "a", text: "brings tears to the eyes" },
                        { key: "b", text: "has a high vapour pressure" },
                        { key: "c", text: "is pungent and corrosive" },
                        { key: "d", text: "is a mild explosive" }
                    ],
                    answer: "b",
                    explanation: "Liquid ammonia has a high vapour pressure at room temperature; cooling reduces the pressure so the bottle can be opened safely without a violent gush."
                },
                {
                    id: "c71",
                    text: "A red flower and a paper printed with ink are placed in a test tube and $\\mathrm{Cl_2}$ gas is passed in. Then:",
                    options: [
                        { key: "a", text: "only the paper is bleached" },
                        { key: "b", text: "both are bleached" },
                        { key: "c", text: "neither is bleached" },
                        { key: "d", text: "only the flower is bleached, by oxidation" }
                    ],
                    answer: "d",
                    explanation: "Moist chlorine oxidises and bleaches the natural dye of the flower, but printing ink is carbon-based and is not bleached by chlorine."
                },
                {
                    id: "c72",
                    text: "Wolframite ore is separated from tinstone (cassiterite) by:",
                    options: [
                        { key: "a", text: "smelting" },
                        { key: "b", text: "gravity separation" },
                        { key: "c", text: "hand-picking" },
                        { key: "d", text: "electromagnetic separation" }
                    ],
                    answer: "d",
                    explanation: "Wolframite ($\\mathrm{FeWO_4}$) is magnetic while cassiterite ($\\mathrm{SnO_2}$) is not, so an electromagnetic separator pulls the two apart."
                },
                {
                    id: "c73",
                    text: "Which of the following barium salts is soluble in water?",
                    options: [
                        { key: "a", text: "barium sulphate" },
                        { key: "b", text: "barium carbonate" },
                        { key: "c", text: "barium nitrate" },
                        { key: "d", text: "barium phosphate" }
                    ],
                    answer: "c",
                    explanation: "Nitrates are generally soluble, so $\\mathrm{Ba(NO_3)_2}$ dissolves; the sulphate, carbonate and phosphate of barium are insoluble."
                },
                {
                    id: "c74",
                    text: "Which compound is used in space capsules to absorb $\\mathrm{CO_2}$ and release $\\mathrm{O_2}$?",
                    options: [
                        { key: "a", text: "$\\mathrm{KO_2}$" },
                        { key: "b", text: "$\\mathrm{K_2O}$" },
                        { key: "c", text: "$\\mathrm{Li_2O}$" },
                        { key: "d", text: "$\\mathrm{LiO_2}$" }
                    ],
                    answer: "a",
                    explanation: "Potassium superoxide reacts with carbon dioxide releasing oxygen: $\\mathrm{4KO_2+2CO_2\\to2K_2CO_3+3O_2}$."
                },
                {
                    id: "c75",
                    text: "A company wants pure metal directly by simply roasting a sulphide ore in air (no separate reduction step). Which ore gives the metal directly on roasting?",
                    options: [
                        { key: "a", text: "iron pyrite" },
                        { key: "b", text: "galena" },
                        { key: "c", text: "cinnabar" },
                        { key: "d", text: "bauxite" }
                    ],
                    answer: "c",
                    explanation: "Roasting cinnabar (HgS) directly yields mercury: $\\mathrm{HgS+O_2\\to Hg+SO_2}$ (auto-reduction), needing no separate reduction step."
                },
                {
                    id: "c76",
                    text: "Wilson's disease is a genetic disorder caused by the abnormal accumulation of which transition metal?",
                    options: [
                        { key: "a", text: "iron" },
                        { key: "b", text: "zinc" },
                        { key: "c", text: "copper" },
                        { key: "d", text: "calcium" }
                    ],
                    answer: "c",
                    explanation: "Wilson's disease results from toxic accumulation of copper in the liver, brain and other tissues."
                },
                {
                    id: "c77",
                    text: "A non-metal X, historically called 'brimstone' (the burning stone), is widely used to treat skin diseases. X is:",
                    options: [
                        { key: "a", text: "nitrogen" },
                        { key: "b", text: "oxygen" },
                        { key: "c", text: "phosphorus" },
                        { key: "d", text: "sulphur" }
                    ],
                    answer: "d",
                    explanation: "Sulphur (brimstone) is used in ointments and medicated soaps to treat skin conditions such as scabies and acne."
                },
                {
                    id: "c78",
                    text: "Organic molecules usually do not absorb UV light, but if a reaction is initiated by UV radiation it generally proceeds by:",
                    options: [
                        { key: "a", text: "fission of a carbocation" },
                        { key: "b", text: "heterolysis" },
                        { key: "c", text: "homolysis" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "c",
                    explanation: "UV photons supply energy for symmetrical (homolytic) bond cleavage, producing free radicals that drive the reaction."
                },
                {
                    id: "c79",
                    text: "When an optically active (dextrorotatory) alkyl halide undergoes an $S_N1$ reaction, the product is:",
                    options: [
                        { key: "a", text: "laevorotatory" },
                        { key: "b", text: "dextrorotatory" },
                        { key: "c", text: "a racemic mixture" },
                        { key: "d", text: "meso" }
                    ],
                    answer: "c",
                    explanation: "The planar carbocation intermediate in $S_N1$ can be attacked from either face, giving equal amounts of both enantiomers — a racemic mixture."
                },
                {
                    id: "c80",
                    text: "The IUPAC name of $\\mathrm{CH_2{=}CH{-}C{\\equiv}CH}$ is:",
                    options: [
                        { key: "a", text: "but-1-ene-3-yne" },
                        { key: "b", text: "but-3-ene-1-yne" },
                        { key: "c", text: "but-1-yn-3-ene" },
                        { key: "d", text: "but-1-en-3-yne" }
                    ],
                    answer: "d",
                    explanation: "Numbering from the double-bond end gives the lowest locant set; the C=C is at C-1 and the C≡C at C-3, so the name is but-1-en-3-yne."
                },
                {
                    id: "c81",
                    text: "Rakesh passes benzene vapour over $\\mathrm{V_2O_5}$ at $500^\\circ$C in the presence of air to obtain X. The compound X is most probably:",
                    options: [
                        { key: "a", text: "succinic acid" },
                        { key: "b", text: "malonic acid" },
                        { key: "c", text: "α-ketoglutaric acid" },
                        { key: "d", text: "maleic acid" }
                    ],
                    answer: "d",
                    explanation: "Catalytic air-oxidation of benzene over $\\mathrm{V_2O_5}$ gives maleic anhydride, which on hydrolysis yields maleic acid."
                },
                {
                    id: "c82",
                    text: "Which of the following does NOT give glyoxal (OHC–CHO) on ozonolysis?",
                    options: [
                        { key: "a", text: "benzene" },
                        { key: "b", text: "hexa-2,4-diene" },
                        { key: "c", text: "cyclobutadiene" },
                        { key: "d", text: "cyclohexa-1,4-diene" }
                    ],
                    answer: "d",
                    explanation: "Cyclohexa-1,4-diene has its two double bonds separated by CH$_2$ groups, so ozonolysis gives malondialdehyde (OHC–CH$_2$–CHO), not glyoxal; the others contain the –CH=CH– unit that yields glyoxal."
                },
                {
                    id: "c83",
                    text: "Identify Z: $\\mathrm{Ethanol}\\xrightarrow{PBr_3}X\\xrightarrow{alc.\\,KOH}Y\\xrightarrow{(i)\\,H_2SO_4;\\,(ii)\\,H_2O,\\,heat}Z$.",
                    options: [
                        { key: "a", text: "ethyl hydrogen sulphate" },
                        { key: "b", text: "ethanol" },
                        { key: "c", text: "ethylene glycol" },
                        { key: "d", text: "diethyl ether" }
                    ],
                    answer: "b",
                    explanation: "Ethanol → bromoethane (X) → ethene (Y) by dehydrohalogenation → acid-catalysed hydration returns ethanol (Z)."
                },
                {
                    id: "c84",
                    text: "One mole of diethyl ether reacts with excess concentrated HI to give:",
                    options: [
                        { key: "a", text: "ethyl iodide and ethanol" },
                        { key: "b", text: "2 moles of ethanol" },
                        { key: "c", text: "2 moles of ethyl iodide" },
                        { key: "d", text: "methyl iodide and ethyl iodide" }
                    ],
                    answer: "c",
                    explanation: "With excess HI both C–O bonds are cleaved: the first gives ethyl iodide + ethanol, and the ethanol is further converted to ethyl iodide, giving 2 moles of ethyl iodide."
                },
                {
                    id: "c85",
                    text: "Nitrobenzene on electrolytic reduction in a strongly acidic medium gives:",
                    options: [
                        { key: "a", text: "aniline" },
                        { key: "b", text: "p-aminophenol" },
                        { key: "c", text: "azobenzene" },
                        { key: "d", text: "azoxybenzene" }
                    ],
                    answer: "b",
                    explanation: "In a strongly acidic medium the intermediate phenylhydroxylamine rearranges to p-aminophenol."
                },
                {
                    id: "c86",
                    text: "Aniline treated with bromine water at low temperature gives mainly:",
                    options: [
                        { key: "a", text: "o- and p-bromoaniline" },
                        { key: "b", text: "m-bromoaniline" },
                        { key: "c", text: "2,4,6-tribromoaniline" },
                        { key: "d", text: "acetanilide" }
                    ],
                    answer: "c",
                    explanation: "The strongly activating –NH$_2$ group causes rapid tribromination, precipitating 2,4,6-tribromoaniline as a white solid."
                },
                {
                    id: "c87",
                    text: "Which are the correct pairs of ambidentate nucleophiles? (A) AgCN/KCN (B) RCOOAg/RCOOK (C) $\\mathrm{AgNO_2/KNO_2}$ (D) AgI/KI",
                    options: [
                        { key: "a", text: "(B) and (C) only" },
                        { key: "b", text: "(A) and (C) only" },
                        { key: "c", text: "(A) and (D) only" },
                        { key: "d", text: "(B) only" }
                    ],
                    answer: "b",
                    explanation: "Ambidentate nucleophiles can attack through two different atoms: cyanide (C or N) and nitrite (N or O) — i.e. pairs (A) and (C)."
                },
                {
                    id: "c88",
                    text: "In the sequence $\\mathrm{Benzene\\xrightarrow{Cl_2/AlCl_3}Y\\xrightarrow{n\\text{-}C_3H_7Br,\\ anhy.\\,AlCl_3,\\ ether,\\ \\Delta}X}$, the major product X is:",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 100 96' width='90' style='vertical-align:middle'><polygon points='50,26 70,38 70,62 50,74 30,62 30,38' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='50' cy='50' r='11' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='50' y1='26' x2='50' y2='12' stroke='currentColor' stroke-width='1.6'/><text x='44' y='10' font-size='11' fill='currentColor'>Cl</text><line x1='50' y1='74' x2='50' y2='88' stroke='currentColor' stroke-width='1.6'/><text x='44' y='96' font-size='11' fill='currentColor'>Cl</text></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 120 96' width='108' style='vertical-align:middle'><polygon points='46,26 66,38 66,62 46,74 26,62 26,38' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='46' cy='50' r='11' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='46' y1='26' x2='46' y2='12' stroke='currentColor' stroke-width='1.6'/><text x='40' y='10' font-size='11' fill='currentColor'>Cl</text><line x1='46' y1='74' x2='46' y2='88' stroke='currentColor' stroke-width='1.6'/><text x='44' y='94' font-size='9' fill='currentColor'>CH&#8322;CH&#8322;CH&#8323;</text></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 120 96' width='108' style='vertical-align:middle'><polygon points='46,26 66,38 66,62 46,74 26,62 26,38' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='46' cy='50' r='11' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='46' y1='26' x2='46' y2='12' stroke='currentColor' stroke-width='1.6'/><text x='40' y='10' font-size='11' fill='currentColor'>Br</text><line x1='46' y1='74' x2='46' y2='88' stroke='currentColor' stroke-width='1.6'/><text x='40' y='94' font-size='9' fill='currentColor'>CH(CH&#8323;)&#8322;</text></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 120 96' width='108' style='vertical-align:middle'><polygon points='46,26 66,38 66,62 46,74 26,62 26,38' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='46' cy='50' r='11' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='46' y1='26' x2='46' y2='12' stroke='currentColor' stroke-width='1.6'/><text x='40' y='10' font-size='11' fill='currentColor'>Cl</text><line x1='46' y1='74' x2='46' y2='88' stroke='currentColor' stroke-width='1.6'/><text x='40' y='94' font-size='9' fill='currentColor'>CH(CH&#8323;)&#8322;</text></svg>" }
                    ],
                    answer: "d",
                    explanation: "Benzene gives chlorobenzene (Y); Friedel–Crafts alkylation with n-propyl bromide proceeds through a rearranged secondary (isopropyl) carbocation, and –Cl directs it para, giving p-isopropylchlorobenzene."
                },
                {
                    id: "c89",
                    text: "Which of the following does NOT exhibit geometrical (cis–trans) isomerism?",
                    options: [
                        { key: "a", text: "maleic acid" },
                        { key: "b", text: "cinnamic acid" },
                        { key: "c", text: "but-2-ene" },
                        { key: "d", text: "2-methylbut-2-ene" }
                    ],
                    answer: "d",
                    explanation: "In 2-methylbut-2-ene one doubly-bonded carbon carries two identical methyl groups, so the two arrangements are not distinguishable — no geometrical isomerism."
                },
                {
                    id: "c90",
                    text: "$\\mathrm{Propene\\xrightarrow{HBr}A\\xrightarrow{Mg/ether}B\\xrightarrow{H_2O,\\ boil}C}$. The product C is:",
                    options: [
                        { key: "a", text: "propane" },
                        { key: "b", text: "propene" },
                        { key: "c", text: "isopropyl alcohol" },
                        { key: "d", text: "propan-1-ol" }
                    ],
                    answer: "a",
                    explanation: "Propene + HBr → 2-bromopropane (A) → isopropyl-MgBr (B, a Grignard) → on hydrolysis the Grignard gives the alkane propane (C)."
                },
                {
                    id: "c91",
                    text: "The total number of $120^\\circ$ bond angles in a benzene ring is:",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "12" },
                        { key: "c", text: "18" },
                        { key: "d", text: "24" }
                    ],
                    answer: "c",
                    explanation: "Each of the 6 sp$^2$ carbons has three bonds forming three $120^\\circ$ angles, giving $6\\times3=18$ such angles."
                },
                {
                    id: "c92",
                    text: "5 g of solid phenol dissolved in 100 mL of water gives a solution commonly referred to as:",
                    options: [
                        { key: "a", text: "carbolic acid" },
                        { key: "b", text: "rectified spirit" },
                        { key: "c", text: "catechol" },
                        { key: "d", text: "picric acid" }
                    ],
                    answer: "a",
                    explanation: "An aqueous solution of phenol is called carbolic acid (a mild antiseptic)."
                },
                {
                    id: "c93",
                    text: "Benzaldehyde reacts with ammonia to give:",
                    options: [
                        { key: "a", text: "benzaldehyde-ammonia" },
                        { key: "b", text: "urotropine" },
                        { key: "c", text: "hydrobenzamide" },
                        { key: "d", text: "benzylamine" }
                    ],
                    answer: "c",
                    explanation: "Aromatic aldehydes give hydrobenzamide with ammonia: $\\mathrm{3\\,C_6H_5CHO+2NH_3\\to (C_6H_5CH)_3N_2+3H_2O}$ (they do not form stable aldehyde-ammonias like aliphatic aldehydes)."
                },
                {
                    id: "c94",
                    text: "Which reaction is best suited for preparing all kinds of alkanes (including unsymmetrical ones) from haloalkanes?",
                    options: [
                        { key: "a", text: "Clemmensen reduction" },
                        { key: "b", text: "Wurtz reaction" },
                        { key: "c", text: "Wurtz–Fittig reaction" },
                        { key: "d", text: "Corey–House reaction" }
                    ],
                    answer: "d",
                    explanation: "The Corey–House synthesis couples a lithium dialkylcuprate with a haloalkane, cleanly giving both symmetrical and unsymmetrical alkanes, unlike the Wurtz reaction."
                },
                {
                    id: "c95",
                    text: "Which of the following is a feature of a batch process?",
                    options: [
                        { key: "a", text: "it needs bigger equipment" },
                        { key: "b", text: "it is fully automated" },
                        { key: "c", text: "it cannot be controlled" },
                        { key: "d", text: "it is used to manufacture smaller quantities of product" }
                    ],
                    answer: "d",
                    explanation: "A batch process is carried out in discrete lots and is suited to the manufacture of relatively small quantities; continuous processes are used for bulk production."
                },
                {
                    id: "c96",
                    text: "During the manufacture of urea, which reactive gaseous intermediate reacts with urea to form the undesirable side-product biuret?",
                    options: [
                        { key: "a", text: "ammonium carbamate" },
                        { key: "b", text: "isocyanic acid" },
                        { key: "c", text: "nitrous oxide" },
                        { key: "d", text: "carbon monoxide" }
                    ],
                    answer: "b",
                    explanation: "Urea decomposes to isocyanic acid (HNCO), which reacts with another urea molecule to form biuret."
                },
                {
                    id: "c97",
                    text: "High-density polyethylene (HDPE) is prepared from ethene by:",
                    options: [
                        { key: "a", text: "the Ziegler–Natta process" },
                        { key: "b", text: "heating with a peroxide" },
                        { key: "c", text: "heating in a sealed tube" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "HDPE is made by low-pressure polymerisation using Ziegler–Natta catalysts, which give linear, closely-packed, high-density chains; peroxide/high-pressure routes give LDPE."
                },
                {
                    id: "c98",
                    text: "Which reagent is used to detect the presence of sulphate ion?",
                    options: [
                        { key: "a", text: "$\\mathrm{BaCl_2}$" },
                        { key: "b", text: "$\\mathrm{NH_4Cl+NH_4OH+H_2S}$" },
                        { key: "c", text: "dil. $\\mathrm{HCl+H_2S}$" },
                        { key: "d", text: "$\\mathrm{HCl+H_2S}$" }
                    ],
                    answer: "a",
                    explanation: "Sulphate ion gives a white precipitate of $\\mathrm{BaSO_4}$ (insoluble in dilute acid) with barium chloride solution."
                },
                {
                    id: "c99",
                    text: "Which of the following will NOT give a positive Lassaigne's test for nitrogen?",
                    options: [
                        { key: "a", text: "urea" },
                        { key: "b", text: "aniline" },
                        { key: "c", text: "hydrazine" },
                        { key: "d", text: "phenylhydrazine" }
                    ],
                    answer: "c",
                    explanation: "Lassaigne's test needs both carbon and nitrogen to form NaCN. Hydrazine ($\\mathrm{N_2H_4}$) contains no carbon, so it cannot form sodium cyanide and gives a negative test."
                },
                {
                    id: "c100",
                    text: "Phenolphthalein does NOT give a sharp end-point in the titration between:",
                    options: [
                        { key: "a", text: "HCl and NaOH" },
                        { key: "b", text: "$\\mathrm{HNO_3}$ and KOH" },
                        { key: "c", text: "$\\mathrm{(COOH)_2}$ and NaOH" },
                        { key: "d", text: "HCl and $\\mathrm{NH_4OH}$" }
                    ],
                    answer: "d",
                    explanation: "Phenolphthalein (pH range 8–10) suits strong acid–strong base and weak acid–strong base titrations, but not a strong acid–weak base titration (HCl–NH$_4$OH), whose equivalence point is acidic."
                }
            ]
        },
        {
            id: "zoo14",
            name: "Zoology",
            subject: "Zoology",
            accent: "rose",
            blurb: "Full CEE Zoology section — evolution, animal diversity, human physiology & health.",
            questions: [
                {
                    id: "z101",
                    text: "Which fossil man was skilled at making tools, weapons and paintings, leaving traces as pictures on cave rocks?",
                    options: [
                        { key: "a", text: "Java ape man" },
                        { key: "b", text: "Peking man" },
                        { key: "c", text: "Cro-Magnon man" },
                        { key: "d", text: "Neanderthal man" }
                    ],
                    answer: "c",
                    explanation: "Cro-Magnon man (Homo sapiens sapiens) made refined tools and is famous for cave paintings."
                },
                {
                    id: "z102",
                    text: "Which rule states that animals living in very cold climates have progressively smaller extremities such as ears and tails?",
                    options: [
                        { key: "a", text: "Allen's rule" },
                        { key: "b", text: "Bergmann's rule" },
                        { key: "c", text: "Cope's rule" },
                        { key: "d", text: "Dollo's rule" }
                    ],
                    answer: "a",
                    explanation: "Allen's rule: endotherms in cold regions have reduced extremities to minimise heat loss (lower surface-to-volume ratio)."
                },
                {
                    id: "z103",
                    text: "In embryonic development, the kidneys, heart and gill slits of fishes follow the same basic plan as in human embryos. This indicates that:",
                    options: [
                        { key: "a", text: "humans evolved directly from fishes" },
                        { key: "b", text: "humans and fishes are both ureotelic" },
                        { key: "c", text: "humans and fishes share a common ancestry" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "c",
                    explanation: "Similar embryonic patterns (embryological evidence) point to descent from a common ancestor, not that one evolved directly from the other."
                },
                {
                    id: "z104",
                    text: "Relapsing malaria is caused by:",
                    options: [
                        { key: "a", text: "Plasmodium falciparum and P. vivax" },
                        { key: "b", text: "Plasmodium falciparum only" },
                        { key: "c", text: "Plasmodium ovale and P. vivax" },
                        { key: "d", text: "Plasmodium malariae and P. ovale" }
                    ],
                    answer: "c",
                    explanation: "P. vivax and P. ovale form dormant liver stages (hypnozoites) that reactivate, causing relapses."
                },
                {
                    id: "z105",
                    text: "The oviduct of the earthworm penetrates the septum between segments:",
                    options: [
                        { key: "a", text: "10–11" },
                        { key: "b", text: "12–13" },
                        { key: "c", text: "14–15" },
                        { key: "d", text: "13–14" }
                    ],
                    answer: "d",
                    explanation: "The paired oviducts lie in segment 14 and pierce the 13/14 septum, opening by a single female genital pore on segment 14."
                },
                {
                    id: "z106",
                    text: "In the earthworm, the circum-pharyngeal connectives connect:",
                    options: [
                        { key: "a", text: "the cerebral ganglia with the ventral nerve cord directly" },
                        { key: "b", text: "the cerebral ganglia with the sub-pharyngeal ganglia" },
                        { key: "c", text: "the cerebral ganglia with the nephridia" },
                        { key: "d", text: "the segmental ganglia with the intestine" }
                    ],
                    answer: "b",
                    explanation: "The circum-pharyngeal connectives loop around the pharynx to join the cerebral ganglia to the sub-pharyngeal ganglia."
                },
                {
                    id: "z107",
                    text: "The interval between the initial sporozoite infection and the first appearance of the parasite in the blood is called the:",
                    options: [
                        { key: "a", text: "dormant period" },
                        { key: "b", text: "incubation period" },
                        { key: "c", text: "prepatent period" },
                        { key: "d", text: "sporogony" }
                    ],
                    answer: "c",
                    explanation: "The prepatent period runs from infection to the first detectable parasites in the blood; the incubation period ends with the onset of symptoms."
                },
                {
                    id: "z108",
                    text: "In the development of the frog, the blastopore is found in the:",
                    options: [
                        { key: "a", text: "blastula and is the opening of the blastocoel" },
                        { key: "b", text: "gastrula and is the opening of the blastocoel" },
                        { key: "c", text: "gastrula and is the opening of the archenteron" },
                        { key: "d", text: "blastula and is the opening of the archenteron" }
                    ],
                    answer: "c",
                    explanation: "The blastopore appears during gastrulation and is the external opening of the archenteron (the primitive gut)."
                },
                {
                    id: "z109",
                    text: "The glands present in the skin of the frog are:",
                    options: [
                        { key: "a", text: "sweat and mucous glands" },
                        { key: "b", text: "sweat and sebaceous glands" },
                        { key: "c", text: "mucous and poison glands" },
                        { key: "d", text: "sweat and mammary glands" }
                    ],
                    answer: "c",
                    explanation: "Frog skin bears mucous glands (keeping it moist for cutaneous respiration) and poison glands for defence."
                },
                {
                    id: "z110",
                    text: "Which is NOT a characteristic feature of the phylum Echinodermata?",
                    options: [
                        { key: "a", text: "triploblastic" },
                        { key: "b", text: "bilateral symmetry in adults" },
                        { key: "c", text: "organ-system grade of organisation" },
                        { key: "d", text: "coelomate" }
                    ],
                    answer: "b",
                    explanation: "Echinoderm larvae are bilaterally symmetrical, but the adults are radially (pentamerous) symmetric — so bilateral symmetry in adults is not a feature."
                },
                {
                    id: "z111",
                    text: "Which phylum first shows a true coelom?",
                    options: [
                        { key: "a", text: "Platyhelminthes" },
                        { key: "b", text: "Aschelminthes" },
                        { key: "c", text: "Annelida" },
                        { key: "d", text: "Cnidaria" }
                    ],
                    answer: "c",
                    explanation: "A true (mesoderm-lined) coelom first appears in Annelida; Aschelminthes have a pseudocoelom and the others are acoelomate."
                },
                {
                    id: "z112",
                    text: "All chordates possess all of the following except:",
                    options: [
                        { key: "a", text: "a notochord" },
                        { key: "b", text: "pharyngeal gill slits" },
                        { key: "c", text: "a post-anal tail" },
                        { key: "d", text: "a ventral nerve cord" }
                    ],
                    answer: "d",
                    explanation: "Chordates have a dorsal, hollow nerve cord — not a ventral, solid one (which is a non-chordate/invertebrate feature)."
                },
                {
                    id: "z113",
                    text: "The first phylum to exhibit a complete (through-gut) digestive tract with both mouth and anus is:",
                    options: [
                        { key: "a", text: "Nemathelminthes (Aschelminthes)" },
                        { key: "b", text: "Annelida" },
                        { key: "c", text: "Arthropoda" },
                        { key: "d", text: "Platyhelminthes" }
                    ],
                    answer: "a",
                    explanation: "Roundworms (Nemathelminthes/Aschelminthes) are the first to have a complete alimentary canal with a separate mouth and anus."
                },
                {
                    id: "z114",
                    text: "If there were no $\\mathrm{CO_2}$ in the earth's atmosphere, the temperature of the earth's surface would be:",
                    options: [
                        { key: "a", text: "higher than at present" },
                        { key: "b", text: "lower than at present" },
                        { key: "c", text: "dependent on the amount of oxygen in the atmosphere" },
                        { key: "d", text: "the same as at present" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{CO_2}$ is a greenhouse gas; without it there would be no greenhouse warming and the surface would be considerably colder."
                },
                {
                    id: "z115",
                    text: "In an area where DDT was used extensively, bird populations declined sharply because:",
                    options: [
                        { key: "a", text: "birds stopped laying eggs" },
                        { key: "b", text: "earthworms in the area were eradicated" },
                        { key: "c", text: "cobras fed exclusively on the birds" },
                        { key: "d", text: "many of the eggs laid failed to hatch" }
                    ],
                    answer: "d",
                    explanation: "DDT biomagnifies up the food chain and thins eggshells, so eggs break or fail to hatch, causing the population to fall."
                },
                {
                    id: "z116",
                    text: "Which of the following is a sexually transmitted disease?",
                    options: [
                        { key: "a", text: "hepatitis A" },
                        { key: "b", text: "hepatitis B" },
                        { key: "c", text: "hepatitis E" },
                        { key: "d", text: "hepatitis A and E" }
                    ],
                    answer: "b",
                    explanation: "Hepatitis B is transmitted through blood and sexual contact; hepatitis A and E spread by the faecal–oral route."
                },
                {
                    id: "z117",
                    text: "Salmonella typhi, the bacterium causing enteric (typhoid) fever, affects the Peyer's patches concentrated in the:",
                    options: [
                        { key: "a", text: "duodenum" },
                        { key: "b", text: "ileum" },
                        { key: "c", text: "stomach" },
                        { key: "d", text: "liver" }
                    ],
                    answer: "b",
                    explanation: "Peyer's patches are most abundant in the ileum, where S. typhi localises during typhoid fever."
                },
                {
                    id: "z118",
                    text: "Invasive candidiasis is the form of candidiasis in which the Candida yeast:",
                    options: [
                        { key: "a", text: "enters the bloodstream" },
                        { key: "b", text: "spreads over mucosal surfaces of the alimentary canal" },
                        { key: "c", text: "causes a vaginal infection" },
                        { key: "d", text: "spreads in the axilla" }
                    ],
                    answer: "a",
                    explanation: "In invasive (systemic) candidiasis the fungus enters the bloodstream and can spread to internal organs, unlike the superficial mucosal forms."
                },
                {
                    id: "z119",
                    text: "BCG, the vaccine against tuberculosis, is a type of:",
                    options: [
                        { key: "a", text: "killed vaccine" },
                        { key: "b", text: "attenuated (live) vaccine" },
                        { key: "c", text: "toxoid" },
                        { key: "d", text: "antibody preparation" }
                    ],
                    answer: "b",
                    explanation: "BCG contains a live, weakened (attenuated) strain of Mycobacterium bovis."
                },
                {
                    id: "z120",
                    text: "What is the primary function of the intercalated discs found uniquely in cardiac muscle cells?",
                    options: [
                        { key: "a", text: "to store extra glycogen and fat" },
                        { key: "b", text: "to produce contractile proteins like actin and myosin" },
                        { key: "c", text: "to provide strong mechanical anchoring and rapid electrical communication between cells" },
                        { key: "d", text: "to convert cardiac tissue into skeletal tissue under stress" }
                    ],
                    answer: "c",
                    explanation: "Intercalated discs contain desmosomes (mechanical anchoring) and gap junctions (rapid electrical coupling), letting the heart contract as a functional syncytium."
                },
                {
                    id: "z121",
                    text: "Which tough, inelastic, white fibrous protein gives tendons their tensile strength and is the most abundant protein in the animal kingdom?",
                    options: [
                        { key: "a", text: "elastin" },
                        { key: "b", text: "collagen" },
                        { key: "c", text: "keratin" },
                        { key: "d", text: "reticulin" }
                    ],
                    answer: "b",
                    explanation: "Collagen (white fibres) provides tensile strength to tendons and is the most abundant animal protein."
                },
                {
                    id: "z122",
                    text: "Which neuroglial cell acts as the internal immune defence of the CNS, engulfing cellular debris and pathogens?",
                    options: [
                        { key: "a", text: "astrocytes" },
                        { key: "b", text: "ependymal cells" },
                        { key: "c", text: "microglia" },
                        { key: "d", text: "Schwann cells" }
                    ],
                    answer: "c",
                    explanation: "Microglia are the resident phagocytes (macrophage-like cells) of the central nervous system."
                },
                {
                    id: "z123",
                    text: "The type of tissue that may arise from any of the three germ layers is:",
                    options: [
                        { key: "a", text: "connective tissue" },
                        { key: "b", text: "nervous tissue" },
                        { key: "c", text: "epithelial tissue" },
                        { key: "d", text: "muscular tissue" }
                    ],
                    answer: "c",
                    explanation: "Epithelium can develop from ectoderm, mesoderm or endoderm, whereas the other primary tissues have more restricted origins."
                },
                {
                    id: "z124",
                    text: "During hearing, which structure of the middle ear region first converts sound waves into mechanical vibrations?",
                    options: [
                        { key: "a", text: "cochlea" },
                        { key: "b", text: "tympanic membrane" },
                        { key: "c", text: "semicircular canals" },
                        { key: "d", text: "auditory nerve" }
                    ],
                    answer: "b",
                    explanation: "The tympanic membrane (eardrum) vibrates in response to sound waves, passing the mechanical vibrations to the ear ossicles."
                },
                {
                    id: "z125",
                    text: "An elderly person has difficulty seeing nearby objects clearly. The most appropriate optical correction is a:",
                    options: [
                        { key: "a", text: "concave lens" },
                        { key: "b", text: "convex lens" },
                        { key: "c", text: "bifocal lens" },
                        { key: "d", text: "cylindrical lens" }
                    ],
                    answer: "b",
                    explanation: "Difficulty with near vision (presbyopia/hypermetropia) is corrected with a converging convex lens."
                },
                {
                    id: "z126",
                    text: "Which of the following is NOT an effect of the parasympathetic nervous system?",
                    options: [
                        { key: "a", text: "constriction of the pupil" },
                        { key: "b", text: "dilation of the blood vessels" },
                        { key: "c", text: "bronchoconstriction" },
                        { key: "d", text: "relaxation of the bladder wall muscle" }
                    ],
                    answer: "d",
                    explanation: "The parasympathetic system contracts (not relaxes) the detrusor muscle of the bladder to promote urination."
                },
                {
                    id: "z127",
                    text: "Which of the following is a part of the forebrain?",
                    options: [
                        { key: "a", text: "cerebellum" },
                        { key: "b", text: "crura cerebri" },
                        { key: "c", text: "medulla oblongata" },
                        { key: "d", text: "thalamus" }
                    ],
                    answer: "d",
                    explanation: "The thalamus (with the cerebrum and hypothalamus) belongs to the forebrain; the cerebellum and medulla are hindbrain and the crura cerebri are midbrain."
                },
                {
                    id: "z128",
                    text: "The maximum concentration of urea in a human is found in the:",
                    options: [
                        { key: "a", text: "subcutaneous vein" },
                        { key: "b", text: "renal vein" },
                        { key: "c", text: "hepatic vein" },
                        { key: "d", text: "saphenous vein" }
                    ],
                    answer: "c",
                    explanation: "Urea is synthesised in the liver, so the hepatic vein (draining the liver) carries the most urea; the renal vein has the least (after filtration)."
                },
                {
                    id: "z129",
                    text: "The structural regions of a typical human tooth are the:",
                    options: [
                        { key: "a", text: "crown, neck and root" },
                        { key: "b", text: "crown and neck" },
                        { key: "c", text: "crown, neck and base" },
                        { key: "d", text: "crown, neck, root and base" }
                    ],
                    answer: "a",
                    explanation: "A tooth has a crown (above the gum), a neck (at the gum line) and a root (embedded in the socket)."
                },
                {
                    id: "z130",
                    text: "The seminal vesicle develops from the:",
                    options: [
                        { key: "a", text: "Wolffian duct" },
                        { key: "b", text: "Müllerian duct" },
                        { key: "c", text: "paramesonephric duct" },
                        { key: "d", text: "both 'b' and 'c'" }
                    ],
                    answer: "a",
                    explanation: "The male accessory ducts, including the seminal vesicle, develop from the Wolffian (mesonephric) duct."
                },
                {
                    id: "z131",
                    text: "People migrating to high altitude show increased RBC production. The most important cause and the hormone responsible are:",
                    options: [
                        { key: "a", text: "decreased Hb — thyroxine" },
                        { key: "b", text: "hypoxia — erythropoietin" },
                        { key: "c", text: "decreased O$_2$-carrying capacity — erythropoietin" },
                        { key: "d", text: "increased pCO$_2$ — renin" }
                    ],
                    answer: "b",
                    explanation: "Low oxygen (hypoxia) at high altitude stimulates the kidneys to release erythropoietin, which boosts RBC production."
                },
                {
                    id: "z132",
                    text: "A person with blood group $\\mathrm{AB^-}$ can safely receive blood from:",
                    options: [
                        { key: "a", text: "$\\mathrm{O^-,A^-,B^-,AB^-,O^+,A^+,B^+,AB^+}$" },
                        { key: "b", text: "$\\mathrm{O^-,A^-,B^-,AB^-}$" },
                        { key: "c", text: "$\\mathrm{O^-}$ and $\\mathrm{AB^-}$ only" },
                        { key: "d", text: "$\\mathrm{O^-,A^-,B^-,AB^+}$" }
                    ],
                    answer: "b",
                    explanation: "AB has no anti-A or anti-B antibodies, but Rh-negative blood cannot receive Rh-positive; so $\\mathrm{AB^-}$ can take from all Rh-negative groups."
                },
                {
                    id: "z133",
                    text: "Among the following, which is NOT an endocrine gland?",
                    options: [
                        { key: "a", text: "corpus luteum" },
                        { key: "b", text: "adrenal medulla" },
                        { key: "c", text: "hypothalamus" },
                        { key: "d", text: "ceruminous gland" }
                    ],
                    answer: "d",
                    explanation: "The ceruminous gland secretes ear-wax through a duct and is exocrine; the others are ductless endocrine glands."
                },
                {
                    id: "z134",
                    text: "The first heart sound $S_1$ ('Lub') is produced due to the closure of the:",
                    options: [
                        { key: "a", text: "aortic and pulmonary valves" },
                        { key: "b", text: "tricuspid and bicuspid valves" },
                        { key: "c", text: "aortic and mitral valves" },
                        { key: "d", text: "pulmonary and tricuspid valves" }
                    ],
                    answer: "b",
                    explanation: "'Lub' ($S_1$) marks the closure of the atrioventricular (tricuspid and bicuspid/mitral) valves at the start of ventricular systole."
                },
                {
                    id: "z135",
                    text: "The period that marks the physiological cessation of menstruation and the end of the child-bearing phase is called:",
                    options: [
                        { key: "a", text: "amenorrhoea" },
                        { key: "b", text: "female sterility" },
                        { key: "c", text: "female climacteric (menopause)" },
                        { key: "d", text: "the menstrual cycle" }
                    ],
                    answer: "c",
                    explanation: "The female climacteric (menopause) is the natural cessation of menstrual cycles and reproductive capacity."
                },
                {
                    id: "z136",
                    text: "Identify the incorrect statement:",
                    options: [
                        { key: "a", text: "Normal negative intrapleural pressure prevents lung collapse." },
                        { key: "b", text: "The diaphragm is not involved during forced expiration." },
                        { key: "c", text: "The right primary bronchus is wider than the left." },
                        { key: "d", text: "An unpaired thyroid cartilage is present in man but absent in frog." }
                    ],
                    answer: "b",
                    explanation: "During forced expiration the diaphragm relaxes and is pushed upward by the contracting abdominal muscles, so it is involved; the statement that it is 'not involved' is incorrect."
                },
                {
                    id: "z137",
                    text: "In humans, the papillae that are fewest in number and situated at the base of the tongue are the:",
                    options: [
                        { key: "a", text: "filiform papillae" },
                        { key: "b", text: "fungiform papillae" },
                        { key: "c", text: "circumvallate papillae" },
                        { key: "d", text: "foliate papillae" }
                    ],
                    answer: "c",
                    explanation: "The large circumvallate papillae, fewest in number, lie in a V-shape at the base of the tongue."
                },
                {
                    id: "z138",
                    text: "Which statement about the suprarenal (adrenal) gland is incorrect?",
                    options: [
                        { key: "a", text: "It has a dual germ-layer origin — cortex from mesoderm, medulla from ectoderm." },
                        { key: "b", text: "It is also called the 4S and 3F gland." },
                        { key: "c", text: "Destruction of the adrenal cortex can lead to Addison's disease." },
                        { key: "d", text: "Buffalo hump and moon face are features of Conn's disease." }
                    ],
                    answer: "d",
                    explanation: "Buffalo hump and moon face are features of Cushing's syndrome (cortisol excess), not Conn's disease (aldosterone excess)."
                },
                {
                    id: "z139",
                    text: "Cybrids are produced when:",
                    options: [
                        { key: "a", text: "the nucleus is from one species but the cytoplasm comes from both parent species" },
                        { key: "b", text: "two nuclei from the same species fuse" },
                        { key: "c", text: "two nuclei from different species fuse" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "a",
                    explanation: "A cybrid (cytoplasmic hybrid) has the nucleus of only one parent but cytoplasm (and organelles) from both."
                },
                {
                    id: "z140",
                    text: "In the production of test-tube babies (IVF):",
                    options: [
                        { key: "a", text: "fertilisation is external and foetal development internal" },
                        { key: "b", text: "fertilisation is internal and foetal development external" },
                        { key: "c", text: "both fertilisation and foetal development are external" },
                        { key: "d", text: "both fertilisation and foetal development are internal" }
                    ],
                    answer: "a",
                    explanation: "In IVF, eggs are fertilised outside the body (in vitro) and the embryo is then transferred to the uterus for internal development."
                }
            ]
        },
        {
            id: "bot14",
            name: "Botany",
            subject: "Botany",
            accent: "emerald",
            blurb: "Full CEE Botany section — cell biology, genetics, plant physiology, ecology & diversity.",
            questions: [
                {
                    id: "b141",
                    text: "The cambium that produces cork is also known as the:",
                    options: [
                        { key: "a", text: "phelloderm" },
                        { key: "b", text: "phellogen" },
                        { key: "c", text: "periblem" },
                        { key: "d", text: "periderm" }
                    ],
                    answer: "b",
                    explanation: "The cork cambium is the phellogen; it produces cork (phellem) outward and phelloderm (secondary cortex) inward."
                },
                {
                    id: "b142",
                    text: "A conjoint, collateral and closed vascular bundle is found in the:",
                    options: [
                        { key: "a", text: "monocot stem" },
                        { key: "b", text: "dicot stem" },
                        { key: "c", text: "monocot root" },
                        { key: "d", text: "dicot root" }
                    ],
                    answer: "a",
                    explanation: "Monocot stems have vascular bundles that are conjoint, collateral and closed (no cambium between xylem and phloem)."
                },
                {
                    id: "b143",
                    text: "Vascular cambium and cork cambium are examples of:",
                    options: [
                        { key: "a", text: "lateral meristem" },
                        { key: "b", text: "apical meristem" },
                        { key: "c", text: "intercalary meristem" },
                        { key: "d", text: "elements of xylem" }
                    ],
                    answer: "a",
                    explanation: "Both lie along the sides of the axis and cause increase in girth (secondary growth); they are lateral meristems."
                },
                {
                    id: "b144",
                    text: "Which of the following is an example of biofortification?",
                    options: [
                        { key: "a", text: "Bt cotton" },
                        { key: "b", text: "golden rice" },
                        { key: "c", text: "Flavr Savr tomato" },
                        { key: "d", text: "herbicide-resistant soybean" }
                    ],
                    answer: "b",
                    explanation: "Golden rice is engineered to be rich in provitamin A (β-carotene), a classic example of biofortification (improving nutritional value)."
                },
                {
                    id: "b145",
                    text: "A transgenic plant made using a Ti-plasmid vector has the inserted gene present in all its cells (roots, leaves, flowers, seeds). The best explanation is that the gene was inserted into:",
                    options: [
                        { key: "a", text: "a differentiated leaf cell that later divided" },
                        { key: "b", text: "a totipotent/meristematic cell whose descendants formed all tissues" },
                        { key: "c", text: "each cell, replicating independently of the plant genome" },
                        { key: "d", text: "each tissue separately after germination" }
                    ],
                    answer: "b",
                    explanation: "The gene was introduced into a single totipotent cell that regenerated the whole plant, so all mitotic descendants carry the insert."
                },
                {
                    id: "b146",
                    text: "Which of the following is NOT a biofertilizer?",
                    options: [
                        { key: "a", text: "mycorrhiza" },
                        { key: "b", text: "Rhizobium" },
                        { key: "c", text: "Agrobacterium" },
                        { key: "d", text: "Nostoc" }
                    ],
                    answer: "c",
                    explanation: "Agrobacterium is a plant pathogen used as a gene-transfer vector, not a biofertilizer; the others enrich soil nutrients."
                },
                {
                    id: "b147",
                    text: "The size of a cell depends upon:",
                    options: [
                        { key: "a", text: "the karyoplasmic (nucleo-cytoplasmic) ratio" },
                        { key: "b", text: "the surface-area/volume ratio" },
                        { key: "c", text: "its metabolic activity" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "Cell size is limited by the nucleo-cytoplasmic ratio, the surface-area to volume ratio and the rate of metabolism."
                },
                {
                    id: "b148",
                    text: "Which of the following statements is INCORRECT?",
                    options: [
                        { key: "a", text: "A eukaryotic cell is a double-enveloped system." },
                        { key: "b", text: "Division of labour occurs at the organelle level in a unicellular organism." },
                        { key: "c", text: "Spores and zygotes are totipotent cells." },
                        { key: "d", text: "Cells of a multicellular organism are genetically different." }
                    ],
                    answer: "d",
                    explanation: "All somatic cells of a multicellular organism carry the same genome; they differ in gene expression, not in genetic content."
                },
                {
                    id: "b149",
                    text: "Which of the following is considered an extra-cytoplasmic structure?",
                    options: [
                        { key: "a", text: "the nucleus" },
                        { key: "b", text: "plastid" },
                        { key: "c", text: "mitochondria" },
                        { key: "d", text: "ribosome" }
                    ],
                    answer: "a",
                    explanation: "The nucleus is bounded by its own envelope and its contents (nucleoplasm) lie outside the cytoplasm, so it is regarded as extra-cytoplasmic; the others are cytoplasmic organelles."
                },
                {
                    id: "b150",
                    text: "Which layer is formed first during cell-wall synthesis in plants?",
                    options: [
                        { key: "a", text: "middle lamella" },
                        { key: "b", text: "primary wall" },
                        { key: "c", text: "secondary wall" },
                        { key: "d", text: "tertiary wall" }
                    ],
                    answer: "a",
                    explanation: "After mitosis the cell plate forms the middle lamella first; the primary and then secondary walls are laid down on either side of it."
                },
                {
                    id: "b151",
                    text: "Which of the following is NOT a part of the endomembrane system (EMS) of a muscle cell?",
                    options: [
                        { key: "a", text: "Golgi body" },
                        { key: "b", text: "lysosome" },
                        { key: "c", text: "sarcolemma" },
                        { key: "d", text: "sarcoplasmic reticulum" }
                    ],
                    answer: "c",
                    explanation: "The endomembrane system comprises the ER (sarcoplasmic reticulum), Golgi, lysosomes and vacuoles; the sarcolemma is the plasma membrane and is not counted as part of the EMS."
                },
                {
                    id: "b152",
                    text: "If the source of the gametes of the parental generation is reversed in a subsequent cross, the cross is called a:",
                    options: [
                        { key: "a", text: "reverse cross" },
                        { key: "b", text: "dihybrid cross" },
                        { key: "c", text: "test cross" },
                        { key: "d", text: "reciprocal cross" }
                    ],
                    answer: "d",
                    explanation: "In reciprocal crosses the sexes of the parents providing each trait are switched (e.g. ♀A×♂B and ♀B×♂A)."
                },
                {
                    id: "b153",
                    text: "Patau's syndrome is an aneuploidy caused by non-disjunction of homologous chromosomes at anaphase I. It corresponds to:",
                    options: [
                        { key: "a", text: "trisomy of chromosome 21" },
                        { key: "b", text: "trisomy of chromosome 18" },
                        { key: "c", text: "trisomy of chromosome 13" },
                        { key: "d", text: "45 + XO" }
                    ],
                    answer: "c",
                    explanation: "Patau's syndrome is trisomy 13; Down's is trisomy 21, Edward's is trisomy 18 and 45,XO is Turner's syndrome."
                },
                {
                    id: "b154",
                    text: "When radio-labelled $^{14}$C uracil is incorporated into a sample, the molecular component that can be detected is:",
                    options: [
                        { key: "a", text: "protein" },
                        { key: "b", text: "lipid" },
                        { key: "c", text: "RNA" },
                        { key: "d", text: "DNA" }
                    ],
                    answer: "c",
                    explanation: "Uracil is a base found only in RNA (DNA uses thymine), so labelled uracil marks RNA."
                },
                {
                    id: "b155",
                    text: "Regarding codons in the central dogma, which statement is INCORRECT?",
                    options: [
                        { key: "a", text: "AUG codes for methionine." },
                        { key: "b", text: "UAA is a nonsense codon." },
                        { key: "c", text: "Multiple codons can code for the same amino acid." },
                        { key: "d", text: "UAG codes for arginine." }
                    ],
                    answer: "d",
                    explanation: "UAG is a stop (nonsense) codon, not a codon for arginine."
                },
                {
                    id: "b156",
                    text: "A mutation that changes a single base in DNA is called a:",
                    options: [
                        { key: "a", text: "gene mutation" },
                        { key: "b", text: "point mutation" },
                        { key: "c", text: "frameshift mutation" },
                        { key: "d", text: "recombination" }
                    ],
                    answer: "b",
                    explanation: "A change in a single base pair is a point mutation; insertions/deletions that shift the reading frame are frameshift mutations."
                },
                {
                    id: "b157",
                    text: "Morgan crossed red-eyed females with white-eyed males; the F$_1$ were all red-eyed, and on intercrossing, white-eyed flies appeared only among F$_2$ males. The best conclusion is that:",
                    options: [
                        { key: "a", text: "white eye is a dominant autosomal trait" },
                        { key: "b", text: "the eye-colour gene is on the Y chromosome" },
                        { key: "c", text: "the eye-colour gene is X-linked and white eye is recessive" },
                        { key: "d", text: "red eye is Y-linked" }
                    ],
                    answer: "c",
                    explanation: "White eye appearing only in F$_2$ males is the hallmark of an X-linked recessive gene (criss-cross inheritance)."
                },
                {
                    id: "b158",
                    text: "Which of the following is NOT an essential (fatty acid) lipid?",
                    options: [
                        { key: "a", text: "arachidonic acid" },
                        { key: "b", text: "linoleic acid" },
                        { key: "c", text: "phosphatidylserine" },
                        { key: "d", text: "linolenic acid" }
                    ],
                    answer: "c",
                    explanation: "Linoleic, linolenic and arachidonic acids are essential fatty acids; phosphatidylserine is a phospholipid the body can synthesise."
                },
                {
                    id: "b159",
                    text: "Enzymes that are slightly different in molecular structure but catalyse the same reaction in different tissues are called:",
                    options: [
                        { key: "a", text: "holoenzymes" },
                        { key: "b", text: "coenzymes" },
                        { key: "c", text: "apoenzymes" },
                        { key: "d", text: "isoenzymes" }
                    ],
                    answer: "d",
                    explanation: "Isoenzymes (isozymes) are different molecular forms of an enzyme that catalyse the same reaction (e.g. LDH isoforms)."
                },
                {
                    id: "b160",
                    text: "An interaction in which two individuals associate for food and at least one is benefited while the other is neither benefited nor harmed is called:",
                    options: [
                        { key: "a", text: "mutualism" },
                        { key: "b", text: "symbiosis" },
                        { key: "c", text: "niche" },
                        { key: "d", text: "commensalism" }
                    ],
                    answer: "d",
                    explanation: "Commensalism (+/0) benefits one partner while leaving the other unaffected; mutualism benefits both."
                },
                {
                    id: "b161",
                    text: "Acid rain mainly consists of:",
                    options: [
                        { key: "a", text: "$\\mathrm{H_2SO_4}$ and $\\mathrm{HNO_3}$" },
                        { key: "b", text: "$\\mathrm{H_2SO_3}$ and $\\mathrm{H_2SO_4}$" },
                        { key: "c", text: "$\\mathrm{CH_3COOH}$ and $\\mathrm{HNO_3}$" },
                        { key: "d", text: "$\\mathrm{H_2SO_4}$ and HCl" }
                    ],
                    answer: "a",
                    explanation: "Oxides of sulphur and nitrogen dissolve in rain water to form sulphuric and nitric acids."
                },
                {
                    id: "b162",
                    text: "The pyramid of energy in a forest ecosystem is:",
                    options: [
                        { key: "a", text: "inverted" },
                        { key: "b", text: "always upright" },
                        { key: "c", text: "sometimes inverted" },
                        { key: "d", text: "spindle-shaped" }
                    ],
                    answer: "b",
                    explanation: "Because energy is lost at each trophic transfer, the pyramid of energy is always upright in every ecosystem."
                },
                {
                    id: "b163",
                    text: "Ceratophyllum is an example of a:",
                    options: [
                        { key: "a", text: "submerged hydrophyte" },
                        { key: "b", text: "rooted floating hydrophyte" },
                        { key: "c", text: "free-floating hydrophyte" },
                        { key: "d", text: "emergent hydrophyte" }
                    ],
                    answer: "a",
                    explanation: "Ceratophyllum is a rootless plant that remains completely submerged — a submerged hydrophyte."
                },
                {
                    id: "b164",
                    text: "The main mechanism by which a tall tree (e.g. a sequoia) moves water to leaves at the top is:",
                    options: [
                        { key: "a", text: "continuous water absorption producing strong root pressure" },
                        { key: "b", text: "capillary action due to narrow xylem vessels" },
                        { key: "c", text: "transpirational pull creating tension that draws water upward" },
                        { key: "d", text: "pulsatory activity of xylem parenchyma" }
                    ],
                    answer: "c",
                    explanation: "The cohesion–tension (transpiration-pull) theory explains ascent of sap in tall trees; root pressure and capillarity are far too weak."
                },
                {
                    id: "b165",
                    text: "In a plant with Kranz anatomy and no photorespiration, the substrate that first accepts $\\mathrm{CO_2}$ is:",
                    options: [
                        { key: "a", text: "ribulose-1,5-bisphosphate (RuBP)" },
                        { key: "b", text: "phosphoenolpyruvate (PEP)" },
                        { key: "c", text: "oxaloacetic acid (OAA)" },
                        { key: "d", text: "none of the above" }
                    ],
                    answer: "b",
                    explanation: "Kranz anatomy indicates a C$_4$ plant, where PEP (in mesophyll cells) is the primary CO$_2$ acceptor, forming OAA."
                },
                {
                    id: "b166",
                    text: "Yeast primarily undergoes anaerobic glycolysis. In such organisms, glucose is broken down into:",
                    options: [
                        { key: "a", text: "ethyl alcohol and $\\mathrm{CO_2}$" },
                        { key: "b", text: "ethyl alcohol and water" },
                        { key: "c", text: "lactic acid" },
                        { key: "d", text: "pyruvic acid only" }
                    ],
                    answer: "a",
                    explanation: "In alcoholic fermentation yeast converts glucose to ethyl alcohol and carbon dioxide."
                },
                {
                    id: "b167",
                    text: "In respiration, the ATP produced per acetyl-CoA by substrate-level phosphorylation alone (without oxidative phosphorylation) is:",
                    options: [
                        { key: "a", text: "1 ATP" },
                        { key: "b", text: "15 ATP" },
                        { key: "c", text: "12 ATP" },
                        { key: "d", text: "36 ATP" }
                    ],
                    answer: "a",
                    explanation: "Each turn of the Krebs cycle yields only 1 ATP (as GTP) by substrate-level phosphorylation; the rest comes from oxidative phosphorylation of NADH/FADH$_2$."
                },
                {
                    id: "b168",
                    text: "A plant hormone that induces cell division and counteracts apical dominance is:",
                    options: [
                        { key: "a", text: "indole-3-acetic acid (IAA)" },
                        { key: "b", text: "cytokinin (CK)" },
                        { key: "c", text: "abscisic acid (ABA)" },
                        { key: "d", text: "gibberellic acid (GA)" }
                    ],
                    answer: "b",
                    explanation: "Cytokinins promote cytokinesis (cell division) and release of lateral buds from apical dominance."
                },
                {
                    id: "b169",
                    text: "Which type of seed dormancy is due to an immature embryo?",
                    options: [
                        { key: "a", text: "innate dormancy" },
                        { key: "b", text: "enforced dormancy" },
                        { key: "c", text: "induced dormancy" },
                        { key: "d", text: "hormone-induced dormancy" }
                    ],
                    answer: "a",
                    explanation: "Innate (primary) dormancy includes cases where the embryo is not fully mature at the time of shedding and needs after-ripening."
                },
                {
                    id: "b170",
                    text: "Which of the following is the highest rank in taxonomic classification?",
                    options: [
                        { key: "a", text: "kingdom" },
                        { key: "b", text: "domain" },
                        { key: "c", text: "species" },
                        { key: "d", text: "order" }
                    ],
                    answer: "b",
                    explanation: "Domain is the broadest, highest category, ranking above kingdom in the modern hierarchy."
                },
                {
                    id: "b171",
                    text: "A mature virus particle, outside the host and ready to infect cells, is called a:",
                    options: [
                        { key: "a", text: "viroid" },
                        { key: "b", text: "virion" },
                        { key: "c", text: "virusoid" },
                        { key: "d", text: "prion" }
                    ],
                    answer: "b",
                    explanation: "The virion is the complete, infective extracellular form of a virus (nucleic acid enclosed in a capsid)."
                },
                {
                    id: "b172",
                    text: "A freshwater green alga (Chlorophyceae) with an unbranched filament, sexual reproduction by conjugation and a dominant haploid gametophytic thallus is:",
                    options: [
                        { key: "a", text: "Cladophora" },
                        { key: "b", text: "Volvox" },
                        { key: "c", text: "Spirogyra" },
                        { key: "d", text: "Ulothrix" }
                    ],
                    answer: "c",
                    explanation: "Spirogyra is an unbranched filamentous green alga that reproduces sexually by conjugation."
                },
                {
                    id: "b173",
                    text: "Which of the following is a true moss?",
                    options: [
                        { key: "a", text: "cord moss (Funaria)" },
                        { key: "b", text: "reindeer moss" },
                        { key: "c", text: "Iceland moss" },
                        { key: "d", text: "spike moss" }
                    ],
                    answer: "a",
                    explanation: "Funaria (cord moss) is a true bryophyte; reindeer and Iceland 'moss' are lichens and spike moss (Selaginella) is a pteridophyte."
                },
                {
                    id: "b174",
                    text: "Algae and fungi are both thallophytes. A true similarity between these two groups is that:",
                    options: [
                        { key: "a", text: "both contain chlorophyll and pigments" },
                        { key: "b", text: "both store starch as reserve food" },
                        { key: "c", text: "both are unicellular with identical ecological roles" },
                        { key: "d", text: "both can reproduce by fragmentation" }
                    ],
                    answer: "d",
                    explanation: "Both algae and fungi can reproduce vegetatively by fragmentation; they differ in pigments, reserve food and ecological roles."
                },
                {
                    id: "b175",
                    text: "An inflorescence with a cup-shaped involucre enclosing a single central female flower surrounded by many male flowers (each a single stamen) is called a:",
                    options: [
                        { key: "a", text: "hypanthodium" },
                        { key: "b", text: "cyathium" },
                        { key: "c", text: "verticillaster" },
                        { key: "d", text: "spadix" }
                    ],
                    answer: "b",
                    explanation: "The cyathium (characteristic of Euphorbia) has one central female flower ringed by many one-stamened male flowers within a cup-like involucre."
                },
                {
                    id: "b176",
                    text: "A plant's androecium has 6 stamens in two whorls — 4 long (inner) and 2 short (outer). The family and the condition are:",
                    options: [
                        { key: "a", text: "Solanaceae, didynamous" },
                        { key: "b", text: "Brassicaceae, tetradynamous" },
                        { key: "c", text: "Brassicaceae, didynamous" },
                        { key: "d", text: "Fabaceae, diadelphous" }
                    ],
                    answer: "b",
                    explanation: "Six stamens with four long and two short (tetradynamous) is the diagnostic androecium of Brassicaceae (Cruciferae)."
                },
                {
                    id: "b177",
                    text: "A pappus is a characteristic feature of the family:",
                    options: [
                        { key: "a", text: "Compositae (Asteraceae)" },
                        { key: "b", text: "Fabaceae" },
                        { key: "c", text: "Malvaceae" },
                        { key: "d", text: "Liliaceae" }
                    ],
                    answer: "a",
                    explanation: "In Compositae the calyx is modified into a hairy pappus that aids in wind dispersal of the fruit."
                },
                {
                    id: "b178",
                    text: "\"Mitochondrion is the power house of the cell.\" Its functional analogue in a bacterial cell is the:",
                    options: [
                        { key: "a", text: "fimbriae" },
                        { key: "b", text: "plasma membrane (mesosome)" },
                        { key: "c", text: "plasmid" },
                        { key: "d", text: "ribosome" }
                    ],
                    answer: "b",
                    explanation: "Bacteria lack mitochondria; their respiratory (ATP-generating) enzymes are located on the plasma membrane and its infoldings, the mesosomes."
                },
                {
                    id: "b179",
                    text: "Self-incompatibility in flowering plants functions primarily as:",
                    options: [
                        { key: "a", text: "a physiological block that stops all pollen from germinating on the stigma" },
                        { key: "b", text: "a genetic mechanism preventing self-fertilisation between gametes with identical/similar S-locus alleles" },
                        { key: "c", text: "a structural change in the stigma that physically blocks the pollen tube after self-pollination" },
                        { key: "d", text: "a hormonal system that inhibits pollen-tube growth by lowering auxin in the pistil" }
                    ],
                    answer: "b",
                    explanation: "Self-incompatibility is a genetic (S-locus) mechanism that prevents fertilisation when pollen and pistil share the same self-alleles, thus promoting outbreeding."
                },
                {
                    id: "b180",
                    text: "The most common point of entry of the pollen tube into the ovule is the:",
                    options: [
                        { key: "a", text: "chalaza" },
                        { key: "b", text: "micropyle" },
                        { key: "c", text: "funicle" },
                        { key: "d", text: "integument" }
                    ],
                    answer: "b",
                    explanation: "Entry of the pollen tube through the micropyle is called porogamy and is the commonest route."
                }
            ]
        },
        {
            id: "mat14",
            name: "MAT",
            subject: "MAT",
            accent: "slate",
            blurb: "Mental Agility Test — analogies, series, logic, ages, clocks, calendars & figure reasoning.",
            questions: [
                {
                    id: "m181",
                    text: "An orphanage has 8 children whose ages this year follow a pattern. The two youngest are 1 year old, followed by 2, 3, 5 and 8 years. If the oldest child is 21, how old is the second-oldest child?",
                    options: [
                        { key: "a", text: "12 years" },
                        { key: "b", text: "13 years" },
                        { key: "c", text: "15 years" },
                        { key: "d", text: "25 years" }
                    ],
                    answer: "b",
                    explanation: "The ages form a Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21 — each term is the sum of the two before it, so the second-oldest is 13."
                },
                {
                    id: "m182",
                    text: "The square net below is folded to form a cube. Which symbol lies opposite the square (&#9632;)?<div style='margin-top:10px'><svg viewBox='0 0 170 118' width='190' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.4'><rect x='58' y='6' width='34' height='34'/><rect x='24' y='40' width='34' height='34'/><rect x='58' y='40' width='34' height='34'/><rect x='92' y='40' width='34' height='34'/><rect x='126' y='40' width='34' height='34'/><rect x='58' y='74' width='34' height='34'/></g><g font-size='18' fill='currentColor' text-anchor='middle'><text x='75' y='30'>&#9679;</text><text x='41' y='64'>&#9650;</text><text x='75' y='64'>&#9632;</text><text x='109' y='64'>&#10010;</text><text x='143' y='64'>&#9675;</text><text x='75' y='98'>&#9733;</text></g></svg></div>",
                    options: [
                        { key: "a", text: "&#9679; (dot)" },
                        { key: "b", text: "&#9675; (circle)" },
                        { key: "c", text: "&#9650; (triangle)" },
                        { key: "d", text: "&#9733; (star)" }
                    ],
                    answer: "b",
                    explanation: "In this cross net the square is the front face; going along the four-in-a-row strip, the circle is two faces away and so becomes the back face — directly opposite the square."
                },
                {
                    id: "m183",
                    text: "A card is to a deck as a star is to a:",
                    options: [
                        { key: "a", text: "galaxy" },
                        { key: "b", text: "constellation" },
                        { key: "c", text: "starlight" },
                        { key: "d", text: "supernova" }
                    ],
                    answer: "b",
                    explanation: "A deck is a defined, named collection of cards; likewise a constellation is a defined, named grouping of stars."
                },
                {
                    id: "m184",
                    text: "Shova recently celebrated her 5th birthday. Today, her mother is thrice as old as Shova will be 7 years from now. How old will Shova's mother be 7 years from today?",
                    options: [
                        { key: "a", text: "40" },
                        { key: "b", text: "41" },
                        { key: "c", text: "42" },
                        { key: "d", text: "43" }
                    ],
                    answer: "d",
                    explanation: "Shova 7 years from now $=12$; mother now $=3\\times12=36$; mother 7 years from today $=36+7=43$."
                },
                {
                    id: "m185",
                    text: "A 300 m train moves at 72 km/hr and a 360 m train moves in the same direction on a parallel track at 54 km/hr. How long will the faster train take to overtake the slower one completely?",
                    options: [
                        { key: "a", text: "30 seconds" },
                        { key: "b", text: "33 seconds" },
                        { key: "c", text: "66 seconds" },
                        { key: "d", text: "132 seconds" }
                    ],
                    answer: "d",
                    explanation: "Relative speed $=72-54=18$ km/hr $=5$ m/s; distance to clear $=300+360=660$ m; time $=660/5=132$ s."
                },
                {
                    id: "m186",
                    text: "Which option follows the same pattern as AGM6, BEH3, CLU9?",
                    options: [
                        { key: "a", text: "DEF10" },
                        { key: "b", text: "DKS7" },
                        { key: "c", text: "DKS8" },
                        { key: "d", text: "DIN5" }
                    ],
                    answer: "d",
                    explanation: "In each group the three letters are in arithmetic progression with a common difference equal to the trailing number (A,G,M step 6; B,E,H step 3; C,L,U step 9). DIN has D,I,N stepping by 5 — matching its number 5."
                },
                {
                    id: "m187",
                    text: "Six books of different subjects sit around a round table. Physics is between Biology and Chemistry; Maths is next to Biology; English is next to Chemistry. Where does the Nepali book lie?",
                    options: [
                        { key: "a", text: "between Biology and Chemistry" },
                        { key: "b", text: "next to the Physics book" },
                        { key: "c", text: "between Maths and English" },
                        { key: "d", text: "cannot be determined" }
                    ],
                    answer: "c",
                    explanation: "The order round the table is Maths–Biology–Physics–Chemistry–English, leaving the sixth seat (between English and Maths) for Nepali."
                },
                {
                    id: "m188",
                    text: "At exactly 7:30, what is the angle between the hour hand and the second hand?",
                    options: [
                        { key: "a", text: "$30^\\circ$" },
                        { key: "b", text: "$45^\\circ$" },
                        { key: "c", text: "$90^\\circ$" },
                        { key: "d", text: "$135^\\circ$" }
                    ],
                    answer: "d",
                    explanation: "At 7:30:00 the second hand is at 12 ($0^\\circ$) and the hour hand is at $7\\times30+30\\times0.5=225^\\circ$; the smaller angle between them is $360-225=135^\\circ$."
                },
                {
                    id: "m189",
                    text: "Statements: All doctors are educated. Some educated people are researchers. Conclusions: I. All researchers are educated. II. All researchers are doctors.",
                    options: [
                        { key: "a", text: "only I follows" },
                        { key: "b", text: "only II follows" },
                        { key: "c", text: "both follow" },
                        { key: "d", text: "neither follows" }
                    ],
                    answer: "d",
                    explanation: "'Some educated people are researchers' only means an overlap exists; it does not guarantee that every researcher is educated (I) or a doctor (II), so neither conclusion follows."
                },
                {
                    id: "m190",
                    text: "A can finish a task in 12 days and B in 18 days. They work together for 4 days, after which A leaves. How many more days will B take to finish the remaining work?",
                    options: [
                        { key: "a", text: "4 days" },
                        { key: "b", text: "5 days" },
                        { key: "c", text: "6 days" },
                        { key: "d", text: "8 days" }
                    ],
                    answer: "d",
                    explanation: "In 4 days together they do $4(\\tfrac1{12}+\\tfrac1{18})=\\tfrac59$; remaining $\\tfrac49$. B alone needs $\\tfrac49\\div\\tfrac1{18}=8$ days."
                },
                {
                    id: "m191",
                    text: "In the sequence below, the shaded dot moves one corner clockwise at each step. Which tile completes the pattern?<div style='margin-top:10px'><svg viewBox='0 0 220 52' width='220' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.4'><rect x='4' y='8' width='36' height='36'/><rect x='52' y='8' width='36' height='36'/><rect x='100' y='8' width='36' height='36'/><rect x='148' y='8' width='36' height='36'/></g><circle cx='12' cy='16' r='4.5' fill='currentColor'/><circle cx='80' cy='16' r='4.5' fill='currentColor'/><circle cx='128' cy='40' r='4.5' fill='currentColor'/><text x='160' y='33' font-size='20' fill='currentColor'>?</text></svg></div>",
                    options: [
                        { key: "a", text: "dot at the top-left corner" },
                        { key: "b", text: "dot at the top-right corner" },
                        { key: "c", text: "dot at the bottom-right corner" },
                        { key: "d", text: "dot at the bottom-left corner" }
                    ],
                    answer: "d",
                    explanation: "The dot travels clockwise: top-left → top-right → bottom-right → bottom-left, so the missing tile has the dot at the bottom-left corner."
                },
                {
                    id: "m192",
                    text: "In each triangle the centre number follows the same rule from the three corner numbers. Find the missing number.<div style='margin-top:10px'><svg viewBox='0 0 300 96' width='300' style='max-width:100%'><g fill='none' stroke='currentColor' stroke-width='1.4'><polygon points='50,10 12,84 88,84'/><polygon points='150,10 112,84 188,84'/><polygon points='250,10 212,84 288,84'/></g><g font-size='12' fill='currentColor' text-anchor='middle'><text x='50' y='24'>4</text><text x='16' y='82'>6</text><text x='84' y='82'>2</text><text x='50' y='66' font-size='14' font-weight='bold'>6</text><text x='150' y='24'>8</text><text x='116' y='82'>4</text><text x='184' y='82'>2</text><text x='150' y='66' font-size='14' font-weight='bold'>7</text><text x='250' y='24'>6</text><text x='216' y='82'>6</text><text x='284' y='82'>4</text><text x='250' y='66' font-size='14' font-weight='bold'>?</text></g></svg></div>",
                    options: [
                        { key: "a", text: "10" },
                        { key: "b", text: "6" },
                        { key: "c", text: "4" },
                        { key: "d", text: "8" }
                    ],
                    answer: "d",
                    explanation: "The centre equals half the sum of the corners: $(4+6+2)/2=6$ and $(8+4+2)/2=7$, so $(6+6+4)/2=8$."
                },
                {
                    id: "m193",
                    text: "Jolyne, who is married to Joseph, is the sister of Jack. Joseph is the father of Chuck, while Jack is the son of Mark and Lina. What is Mark's relation to Chuck?",
                    options: [
                        { key: "a", text: "uncle" },
                        { key: "b", text: "brother" },
                        { key: "c", text: "father" },
                        { key: "d", text: "grandfather" }
                    ],
                    answer: "d",
                    explanation: "Jolyne (Jack's sister) is a daughter of Mark; she is Chuck's mother, so Mark is Chuck's maternal grandfather."
                },
                {
                    id: "m194",
                    text: "Markers numbered 1–15 are coloured Red, Blue, Green, Red, Blue, Green … in repeating order, then dropped one by one into four boxes I, II, III, IV in cyclic order starting with Box I. Which statement is true?",
                    options: [
                        { key: "a", text: "Red markers in boxes I+II equal red markers in boxes III+IV" },
                        { key: "b", text: "Red markers in boxes I+II equal green markers in boxes III+IV" },
                        { key: "c", text: "Green markers in I+II are unequal to blue markers in III+IV" },
                        { key: "d", text: "Green markers in III+IV are unequal to red markers in III+IV" }
                    ],
                    answer: "b",
                    explanation: "Boxes get I:{1,5,9,13}, II:{2,6,10,14}, III:{3,7,11,15}, IV:{4,8,12}. Reds in I+II $=3$; greens in III+IV $=2+1=3$ — equal."
                },
                {
                    id: "m195",
                    text: "A girl walks 10 m south, then 3 m west, then 2 m south, and finally 8 m east. What is her displacement from the start?",
                    options: [
                        { key: "a", text: "23 m SE" },
                        { key: "b", text: "13 m SE" },
                        { key: "c", text: "23 m SW" },
                        { key: "d", text: "13 m SW" }
                    ],
                    answer: "b",
                    explanation: "Net south $=10+2=12$ m; net east $=8-3=5$ m. Displacement $=\\sqrt{12^2+5^2}=13$ m, directed south-east."
                },
                {
                    id: "m196",
                    text: "In a class of 51 students, Rita ranked 14th from the bottom. The top three were later moved to the bottom for cheating. What is Rita's new rank from the top?",
                    options: [
                        { key: "a", text: "41st" },
                        { key: "b", text: "34th" },
                        { key: "c", text: "35th" },
                        { key: "d", text: "36th" }
                    ],
                    answer: "c",
                    explanation: "Rita was $51-14+1=38$th from the top. With the top 3 demoted below her, she moves up 3 places to 35th."
                },
                {
                    id: "m197",
                    text: "If 13th June 2026 is a Saturday, what day will 13th June 2028 be?",
                    options: [
                        { key: "a", text: "Tuesday" },
                        { key: "b", text: "Wednesday" },
                        { key: "c", text: "Thursday" },
                        { key: "d", text: "Friday" }
                    ],
                    answer: "a",
                    explanation: "2026→2027 adds 1 odd day (Sat→Sun); 2027→2028 spans the leap day of Feb 2028, adding 2 more (Sun→Tue)."
                },
                {
                    id: "m198",
                    text: "A square sheet is folded once (left over right) and a semicircular notch is cut on the folded edge, as shown. When unfolded, the sheet looks like:<div style='margin-top:10px'><svg viewBox='0 0 90 84' width='90'><rect x='10' y='10' width='40' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><path d='M50 34 A10 10 0 0 0 50 54' fill='none' stroke='currentColor' stroke-width='1.4'/><line x1='50' y1='10' x2='50' y2='70' stroke='currentColor' stroke-width='1' stroke-dasharray='3 3'/></svg></div>",
                    options: [
                        { key: "a", text: "<svg viewBox='0 0 80 84' width='72'><rect x='20' y='10' width='40' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><path d='M20 34 A10 10 0 0 1 20 54' fill='none' stroke='currentColor' stroke-width='1.4'/></svg>" },
                        { key: "b", text: "<svg viewBox='0 0 80 84' width='72'><rect x='14' y='10' width='52' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><circle cx='40' cy='40' r='10' fill='none' stroke='currentColor' stroke-width='1.4'/></svg>" },
                        { key: "c", text: "<svg viewBox='0 0 80 84' width='72'><rect x='14' y='10' width='52' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><path d='M30 10 A10 10 0 0 1 50 10' fill='none' stroke='currentColor' stroke-width='1.4'/><path d='M30 70 A10 10 0 0 0 50 70' fill='none' stroke='currentColor' stroke-width='1.4'/></svg>" },
                        { key: "d", text: "<svg viewBox='0 0 80 84' width='72'><rect x='14' y='10' width='52' height='60' fill='none' stroke='currentColor' stroke-width='1.4'/><circle cx='24' cy='22' r='8' fill='none' stroke='currentColor' stroke-width='1.4'/></svg>" }
                    ],
                    answer: "b",
                    explanation: "The cut lies on the fold line, so unfolding mirrors the semicircle across it, producing one full circular hole at the centre of the sheet."
                },
                {
                    id: "m199",
                    text: "Statements: All pens are stationery items. All stationery items are sold in the campus store. Some items sold in the campus store are library supplies. Which of the following must be true?",
                    options: [
                        { key: "a", text: "All library supplies are stationery items." },
                        { key: "b", text: "All pens are sold in the campus store." },
                        { key: "c", text: "Some pens are library supplies." },
                        { key: "d", text: "All stationery items are library supplies." }
                    ],
                    answer: "b",
                    explanation: "Pens ⊆ stationery ⊆ items sold in the campus store, so it definitely follows that all pens are sold in the campus store; the others are not guaranteed."
                },
                {
                    id: "m200",
                    text: "Heidi, Keane, Manish and Shila each scored a different mark from 60, 70, 80 and 90. Clues: Heidi did not score the highest; Keane scored higher than Manish; Shila did not score the lowest; Manish scored the second lowest. Who scored 60?",
                    options: [
                        { key: "a", text: "Heidi" },
                        { key: "b", text: "Keane" },
                        { key: "c", text: "Manish" },
                        { key: "d", text: "Shila" }
                    ],
                    answer: "a",
                    explanation: "Manish is second lowest (70). The lowest (60) cannot be Shila or Manish, and Keane > 70, so 60 must be Heidi's."
                }
            ]
        }
    ]
};

/* ----------------------------------------------------------------
   DAY 14 syllabus map — Subject → Topic (official CEE unit) →
   Sub-topic → [question ids]. Powers the collapsible chapter-wise
   marks breakdown on the results screen. Every DAY14 question id
   appears exactly once.
   ---------------------------------------------------------------- */
const DAY14_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "Mechanics", subs: [
            { name: "Units & Dimensions", ids: ["p101"] },
            { name: "Kinematics", ids: ["p102"] },
            { name: "Laws of Motion", ids: ["p103"] },
            { name: "Rotational Motion", ids: ["p104"] },
            { name: "Gravitation", ids: ["p106"] },
            { name: "Elasticity", ids: ["p107"] },
            { name: "Fluid Mechanics", ids: ["p105", "p110"] },
            { name: "Simple Harmonic Motion", ids: ["p108"] },
            { name: "Work, Energy & Friction", ids: ["p109"] }
        ] },
        { topic: "Heat & Thermodynamics", subs: [
            { name: "Laws of Thermodynamics", ids: ["p11"] },
            { name: "Thermal Expansion & Calorimetry", ids: ["p12"] },
            { name: "Transfer of Heat", ids: ["p13"] },
            { name: "Radiation (Stefan's Law)", ids: ["p14"] },
            { name: "Gas Laws", ids: ["p15"] },
            { name: "Thermodynamic Processes", ids: ["p16"] },
            { name: "Heat Engines", ids: ["p17"] }
        ] },
        { topic: "Geometrical & Physical Optics", subs: [
            { name: "Reflection (Mirrors)", ids: ["p21"] },
            { name: "Refraction & Total Internal Reflection", ids: ["p22"] },
            { name: "Lenses", ids: ["p23"] },
            { name: "Interference", ids: ["p24"] },
            { name: "Diffraction & Resolution", ids: ["p25"] }
        ] },
        { topic: "Sound Waves, Electrostatics & Capacitors", subs: [
            { name: "Sound Waves", ids: ["p18", "p19", "p20"] },
            { name: "Electric Potential", ids: ["p36", "p38"] },
            { name: "Gauss's Law & Electric Flux", ids: ["p37"] },
            { name: "Capacitors", ids: ["p35"] }
        ] },
        { topic: "Current Electricity & Magnetism", subs: [
            { name: "Resistivity & Conductivity", ids: ["p26"] },
            { name: "Metre Bridge / Wheatstone", ids: ["p27"] },
            { name: "Circuit Analysis", ids: ["p28"] },
            { name: "Thermoelectricity", ids: ["p29"] },
            { name: "Alternating Current", ids: ["p30"] },
            { name: "Magnetic Properties of Matter", ids: ["p31"] },
            { name: "Magnetic Field due to Current", ids: ["p32"] },
            { name: "Electromagnetic Induction", ids: ["p33"] },
            { name: "Force on Current & Moving Charge", ids: ["p34", "p40"] }
        ] },
        { topic: "Modern & Nuclear Physics", subs: [
            { name: "Photoelectric Effect", ids: ["p41"] },
            { name: "Bohr Model & Atomic Structure", ids: ["p42"] },
            { name: "X-rays", ids: ["p43"] },
            { name: "Nuclear Binding Energy", ids: ["p39"] },
            { name: "Radioactivity", ids: ["p44"] }
        ] },
        { topic: "Solid State & Semiconductor Devices", subs: [
            { name: "Semiconductors", ids: ["p45"] },
            { name: "Rectifiers", ids: ["p46"] },
            { name: "Energy Bands", ids: ["p47"] },
            { name: "Logic Gates", ids: ["p48"] }
        ] },
        { topic: "Particle Physics & Universe", subs: [
            { name: "Elementary Particles", ids: ["p49"] },
            { name: "Gravitational Waves & Cosmology", ids: ["p50"] }
        ] }
    ] },
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "General & Physical Chemistry", subs: [
            { name: "Stoichiometry & Mole Concept", ids: ["c51"] },
            { name: "Laws of Chemical Combination", ids: ["c59"] },
            { name: "Atomic Structure", ids: ["c67"] },
            { name: "Periodic Classification", ids: ["c66"] },
            { name: "Chemical Bonding", ids: ["c65"] },
            { name: "States of Matter", ids: ["c62", "c63"] },
            { name: "Chemical Equilibrium", ids: ["c64"] },
            { name: "Ionic Equilibrium", ids: ["c53", "c54"] },
            { name: "Chemical Kinetics", ids: ["c55"] },
            { name: "Thermochemistry & Thermodynamics", ids: ["c56", "c57"] },
            { name: "Electrochemistry", ids: ["c58", "c60"] },
            { name: "Solutions", ids: ["c61"] },
            { name: "Volumetric & Gravimetric Analysis", ids: ["c52", "c100"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Hydrogen", ids: ["c68"] },
            { name: "Alkali & Alkaline-Earth Metals", ids: ["c73", "c74"] },
            { name: "Non-metals (Oxygen & Sulphur)", ids: ["c69", "c77"] },
            { name: "Nitrogen & Ammonia", ids: ["c70"] },
            { name: "Halogens", ids: ["c71"] },
            { name: "Metallurgy", ids: ["c72", "c75"] },
            { name: "Transition Metals", ids: ["c76"] },
            { name: "Qualitative Salt Analysis", ids: ["c98"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "General Organic Chemistry & Mechanisms", ids: ["c78", "c87"] },
            { name: "Nomenclature", ids: ["c80"] },
            { name: "Isomerism", ids: ["c89"] },
            { name: "Hydrocarbons", ids: ["c82", "c90", "c94"] },
            { name: "Aromatic Compounds", ids: ["c81", "c88", "c91"] },
            { name: "Haloalkanes", ids: ["c79", "c83"] },
            { name: "Alcohols & Phenols", ids: ["c92"] },
            { name: "Ethers", ids: ["c84"] },
            { name: "Aldehydes & Ketones", ids: ["c93"] },
            { name: "Amines & Nitro Compounds", ids: ["c85", "c86"] },
            { name: "Polymers & Industrial Chemistry", ids: ["c95", "c96", "c97"] },
            { name: "Analysis of Organic Compounds", ids: ["c99"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Biology, Origin & Evolution of Life", subs: [
            { name: "Human Evolution", ids: ["z101"] },
            { name: "Evidences of Evolution", ids: ["z103"] }
        ] },
        { topic: "Classification of Protozoa to Chordates", subs: [
            { name: "Invertebrate Phyla", ids: ["z110", "z111", "z113"] },
            { name: "Chordata", ids: ["z112"] }
        ] },
        { topic: "Plasmodium, Earthworm & Frog", subs: [
            { name: "Plasmodium (Malaria)", ids: ["z104", "z107"] },
            { name: "Earthworm", ids: ["z105", "z106"] },
            { name: "Frog", ids: ["z108", "z109"] }
        ] },
        { topic: "Human Biology & Human Diseases", subs: [
            { name: "Digestive System", ids: ["z129", "z137"] },
            { name: "Circulatory System & Blood", ids: ["z128", "z131", "z132", "z134"] },
            { name: "Respiratory System", ids: ["z136"] },
            { name: "Nervous System & Brain", ids: ["z126", "z127"] },
            { name: "Sense Organs", ids: ["z124", "z125"] },
            { name: "Endocrine System", ids: ["z133", "z138"] },
            { name: "Reproductive System", ids: ["z130", "z135"] },
            { name: "Diseases & Immunity", ids: ["z116", "z117", "z118", "z119"] }
        ] },
        { topic: "Animal Tissues", subs: [
            { name: "Muscular Tissue", ids: ["z120"] },
            { name: "Connective Tissue", ids: ["z121"] },
            { name: "Nervous Tissue", ids: ["z122"] },
            { name: "Epithelial Tissue", ids: ["z123"] }
        ] },
        { topic: "Environment, Adaptation & Applied Zoology", subs: [
            { name: "Adaptation", ids: ["z102"] },
            { name: "Environmental Pollution", ids: ["z114", "z115"] },
            { name: "Applied Zoology (Biotechnology)", ids: ["z139", "z140"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "Basic Components of Life & Biodiversity", subs: [
            { name: "Biomolecules & Enzymes", ids: ["b158", "b159"] },
            { name: "Classification & Taxonomy", ids: ["b170"] },
            { name: "Viruses & Microbes", ids: ["b171"] },
            { name: "Algae & Fungi", ids: ["b172", "b174"] },
            { name: "Bryophytes", ids: ["b173"] },
            { name: "Angiosperm Morphology & Families", ids: ["b175", "b176", "b177"] }
        ] },
        { topic: "Ecology & Environment", subs: [
            { name: "Ecosystem & Energy Flow", ids: ["b162"] },
            { name: "Species Interactions", ids: ["b160"] },
            { name: "Plant Adaptations", ids: ["b163"] },
            { name: "Environmental Pollution", ids: ["b161"] }
        ] },
        { topic: "Cell Biology & Genetics", subs: [
            { name: "Cell Structure & Organelles", ids: ["b147", "b148", "b149", "b151", "b178"] },
            { name: "Cell Wall", ids: ["b150"] },
            { name: "Molecular Biology", ids: ["b154", "b155"] },
            { name: "Genetics & Inheritance", ids: ["b152", "b153", "b156", "b157"] }
        ] },
        { topic: "Anatomy & Physiology", subs: [
            { name: "Plant Anatomy (Tissues)", ids: ["b141", "b142", "b143"] },
            { name: "Transport in Plants", ids: ["b164"] },
            { name: "Photosynthesis", ids: ["b165"] },
            { name: "Respiration", ids: ["b166", "b167"] }
        ] },
        { topic: "Developmental & Applied Botany", subs: [
            { name: "Plant Growth & Hormones", ids: ["b168", "b169"] },
            { name: "Sexual Reproduction in Plants", ids: ["b179", "b180"] },
            { name: "Biotechnology & Applied Botany", ids: ["b144", "b145", "b146"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Verbal Reasoning", subs: [
            { name: "Analogy", ids: ["m183"] },
            { name: "Syllogism", ids: ["m189", "m199"] },
            { name: "Blood Relations", ids: ["m193"] }
        ] },
        { topic: "Numerical Reasoning", subs: [
            { name: "Number Series", ids: ["m181"] },
            { name: "Ages", ids: ["m184"] },
            { name: "Time, Speed & Distance", ids: ["m185"] },
            { name: "Clocks", ids: ["m188"] },
            { name: "Work & Time", ids: ["m190"] },
            { name: "Number Puzzles", ids: ["m192"] },
            { name: "Calendars", ids: ["m197"] }
        ] },
        { topic: "Logical Sequencing", subs: [
            { name: "Letter & Symbol Series", ids: ["m186"] },
            { name: "Arrangement", ids: ["m187"] },
            { name: "Distribution Logic", ids: ["m194"] },
            { name: "Direction Sense", ids: ["m195"] },
            { name: "Ranking", ids: ["m196"] },
            { name: "Logical Deduction", ids: ["m200"] }
        ] },
        { topic: "Spatial & Abstract Reasoning", subs: [
            { name: "Cubes & Nets", ids: ["m182"] },
            { name: "Figure Series", ids: ["m191"] },
            { name: "Paper Folding", ids: ["m198"] }
        ] }
    ] }
];
DAY14.syllabus = DAY14_SYLLABUS;

/* All days live here; the dashboard initializes with Day 1. */
const STUDENT = { name: "Prakriti Subedi", role: "CEE Aspirant 2026" };
const DAYS = [DAY1, DAY2, DAY3, DAY4, DAY5, DAY6, DAY7, DAY8, DAY9, DAY10, DAY11, DAY12, DAY13, DAY14];

/* The CEE/IOE subjects shown on the dashboard performance panel.
   Chapters are mapped to a subject via their `subject` field; subjects with
   no questions yet appear as upcoming. */
const SUBJECTS = [
    { name: "Physics", accent: "blue" },
    { name: "Chemistry", accent: "amber" },
    { name: "Botany", accent: "emerald" },
    { name: "Zoology", accent: "rose" },
    { name: "Mathematics", accent: "cyan" },
    { name: "MAT", accent: "slate" }
];
