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

/* ============================================================
   DAY 15 — Chemistry Marathon + Verbal Reasoning
   50 Chemistry MCQs following the official CEE weightage
   (Physical 17 · Inorganic 10 · Organic 17 · Applied 3 ·
   Analytical 3) + 50 tough Verbal Reasoning MCQs.
   ============================================================ */
const DAY15 = {
    day: 15,
    title: "Day 15",
    subtitle: "Chemistry Marathon + Verbal Reasoning · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "chem15",
            name: "Chemistry (Full Syllabus)",
            subject: "Chemistry",
            accent: "amber",
            blurb: "50 questions on CEE weightage — physical 17 · inorganic 10 · organic 17 · applied 3 · analytical 3.",
            questions: [
                {
                    id: "ch1",
                    text: "10 g of pure $\\mathrm{CaCO_3}$ is strongly heated and the liberated $\\mathrm{CO_2}$ is completely absorbed in 400 mL of 0.5 M NaOH. The principal salt formed and its amount are:",
                    options: [
                        { key: "a", text: "$\\mathrm{NaHCO_3}$, 8.4 g" },
                        { key: "b", text: "$\\mathrm{Na_2CO_3}$, 10.6 g" },
                        { key: "c", text: "$\\mathrm{Na_2CO_3}$, 5.3 g" },
                        { key: "d", text: "$\\mathrm{NaHCO_3}$, 16.8 g" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{CaCO_3\\to CO_2}$: $\\frac{10}{100}=0.1$ mol $\\mathrm{CO_2}$. NaOH $=0.4\\times0.5=0.2$ mol. Ratio NaOH : CO$_2$ = 2 : 1, so the carbonate forms: $\\mathrm{2NaOH+CO_2\\to Na_2CO_3+H_2O}$, giving 0.1 mol $=0.1\\times106=10.6$ g."
                },
                {
                    id: "ch2",
                    text: "Which of the following samples contains the greatest total number of atoms?",
                    options: [
                        { key: "a", text: "4 g of He" },
                        { key: "b", text: "46 g of Na" },
                        { key: "c", text: "36 g of $\\mathrm{H_2O}$" },
                        { key: "d", text: "28 g of $\\mathrm{N_2}$" }
                    ],
                    answer: "c",
                    explanation: "He: 1 mol = 1 mol atoms. Na: 2 mol atoms. H$_2$O: 2 mol molecules × 3 = 6 mol atoms. N$_2$: 1 mol × 2 = 2 mol atoms. Water wins with $6N_A$ atoms."
                },
                {
                    id: "ch3",
                    text: "The ratio of the longest wavelength of the Lyman series to the longest wavelength of the Balmer series in the hydrogen spectrum is:",
                    options: [
                        { key: "a", text: "$5/27$" },
                        { key: "b", text: "$27/5$" },
                        { key: "c", text: "$3/4$" },
                        { key: "d", text: "$4/9$" }
                    ],
                    answer: "a",
                    explanation: "Lyman $\\alpha$ (2→1): $\\frac{1}{\\lambda_L}=R\\left(1-\\frac14\\right)=\\frac{3R}{4}$. Balmer $\\alpha$ (3→2): $\\frac{1}{\\lambda_B}=R\\left(\\frac14-\\frac19\\right)=\\frac{5R}{36}$. So $\\frac{\\lambda_L}{\\lambda_B}=\\frac{4}{3}\\times\\frac{5}{36}=\\frac{5}{27}$."
                },
                {
                    id: "ch4",
                    text: "Which of the following sets of quantum numbers is NOT permissible?",
                    options: [
                        { key: "a", text: "$n=3,\\ l=2,\\ m=-2,\\ s=+\\tfrac12$" },
                        { key: "b", text: "$n=4,\\ l=0,\\ m=0,\\ s=-\\tfrac12$" },
                        { key: "c", text: "$n=3,\\ l=3,\\ m=-3,\\ s=+\\tfrac12$" },
                        { key: "d", text: "$n=2,\\ l=1,\\ m=0,\\ s=-\\tfrac12$" }
                    ],
                    answer: "c",
                    explanation: "$l$ can take values $0$ to $n-1$ only; for $n=3$ the maximum $l$ is 2, so $l=3$ is forbidden. All other sets obey the rules."
                },
                {
                    id: "ch5",
                    text: "The correct order of first ionisation energies of Be, B, C, N and O is:",
                    options: [
                        { key: "a", text: "B < Be < C < O < N" },
                        { key: "b", text: "Be < B < C < N < O" },
                        { key: "c", text: "B < Be < C < N < O" },
                        { key: "d", text: "Be < B < C < O < N" }
                    ],
                    answer: "a",
                    explanation: "Two anomalies: Be ($2s^2$, full subshell) exceeds B ($2p^1$), and N ($2p^3$, half-filled) exceeds O ($2p^4$, e–e repulsion in a doubly occupied p orbital). Hence B < Be < C < O < N."
                },
                {
                    id: "ch6",
                    text: "A wooden artifact shows carbon-14 activity that is 12.5% of the activity in fresh wood ($t_{1/2}$ of $^{14}\\mathrm{C}$ = 5730 yr). The age of the artifact is about:",
                    options: [
                        { key: "a", text: "11460 yr" },
                        { key: "b", text: "17190 yr" },
                        { key: "c", text: "22920 yr" },
                        { key: "d", text: "5730 yr" }
                    ],
                    answer: "b",
                    explanation: "$12.5\\%=\\left(\\tfrac12\\right)^3$ of the original activity, i.e. three half-lives have elapsed: $3\\times5730=17190$ yr."
                },
                {
                    id: "ch7",
                    text: "The shapes of $\\mathrm{XeF_4}$, $\\mathrm{ClF_3}$ and $\\mathrm{I_3^-}$ are respectively:",
                    options: [
                        { key: "a", text: "Tetrahedral, trigonal planar, bent" },
                        { key: "b", text: "Square planar, T-shaped, linear" },
                        { key: "c", text: "Square pyramidal, T-shaped, bent" },
                        { key: "d", text: "Square planar, trigonal planar, linear" }
                    ],
                    answer: "b",
                    explanation: "XeF$_4$: $sp^3d^2$ with 2 lone pairs → square planar. ClF$_3$: $sp^3d$ with 2 lone pairs → T-shaped. I$_3^-$: $sp^3d$ with 3 equatorial lone pairs → linear."
                },
                {
                    id: "ch8",
                    text: "The equivalent weight of $\\mathrm{KMnO_4}$ (molar mass $M$) when it acts as an oxidant in a neutral medium is:",
                    options: [
                        { key: "a", text: "$M/5$" },
                        { key: "b", text: "$M/2$" },
                        { key: "c", text: "$M/3$" },
                        { key: "d", text: "$M/1$" }
                    ],
                    answer: "c",
                    explanation: "In neutral/faintly alkaline medium $\\mathrm{MnO_4^-}+2H_2O+3e^-\\to MnO_2+4OH^-$ (Mn: +7 → +4, 3 electrons), so eq. wt. $=M/3$. In acid it is $M/5$ and in strong alkali $M/1$."
                },
                {
                    id: "ch9",
                    text: "At what temperature will methane ($M=16$) have the same rms speed as oxygen ($M=32$) has at 600 K?",
                    options: [
                        { key: "a", text: "1200 K" },
                        { key: "b", text: "425 K" },
                        { key: "c", text: "300 K" },
                        { key: "d", text: "150 K" }
                    ],
                    answer: "c",
                    explanation: "$v_{rms}\\propto\\sqrt{T/M}$. Equal speeds need $\\frac{T_{CH_4}}{16}=\\frac{600}{32}$, so $T_{CH_4}=16\\times18.75=300$ K."
                },
                {
                    id: "ch10",
                    text: "In a crystalline solid, anions B form a ccp lattice while cations A occupy half of the octahedral voids. The empirical formula of the compound is:",
                    options: [
                        { key: "a", text: "$\\mathrm{A_2B}$" },
                        { key: "b", text: "$\\mathrm{AB}$" },
                        { key: "c", text: "$\\mathrm{AB_2}$" },
                        { key: "d", text: "$\\mathrm{A_2B_3}$" }
                    ],
                    answer: "c",
                    explanation: "ccp gives 4 B per unit cell and 4 octahedral voids; half-filled voids give 2 A. Ratio A : B = 2 : 4 = 1 : 2 → AB$_2$."
                },
                {
                    id: "ch11",
                    text: "For which reaction is $K_p$ smaller than $K_c$ at the same temperature?",
                    options: [
                        { key: "a", text: "$\\mathrm{N_2(g)+3H_2(g)\\rightleftharpoons 2NH_3(g)}$" },
                        { key: "b", text: "$\\mathrm{PCl_5(g)\\rightleftharpoons PCl_3(g)+Cl_2(g)}$" },
                        { key: "c", text: "$\\mathrm{H_2(g)+I_2(g)\\rightleftharpoons 2HI(g)}$" },
                        { key: "d", text: "$\\mathrm{N_2O_4(g)\\rightleftharpoons 2NO_2(g)}$" }
                    ],
                    answer: "a",
                    explanation: "$K_p=K_c(RT)^{\\Delta n}$. $K_p<K_c$ requires $\\Delta n<0$; only ammonia synthesis has $\\Delta n=2-4=-2$. Options b and d have $\\Delta n=+1$; c has $\\Delta n=0$."
                },
                {
                    id: "ch12",
                    text: "100 mL of 0.2 N HCl is mixed with 100 mL of 0.3 N $\\mathrm{H_2SO_4}$. The normality of the resulting acidic solution is:",
                    options: [
                        { key: "a", text: "0.50 N" },
                        { key: "b", text: "0.25 N" },
                        { key: "c", text: "0.30 N" },
                        { key: "d", text: "0.10 N" }
                    ],
                    answer: "b",
                    explanation: "Total milliequivalents $=100(0.2)+100(0.3)=50$ in a final volume of 200 mL, so $N=\\frac{50}{200}=0.25$ N."
                },
                {
                    id: "ch13",
                    text: "A buffer contains 0.2 M acetic acid and 0.02 M sodium acetate ($pK_a=4.74$). The pH of the buffer is:",
                    options: [
                        { key: "a", text: "4.74" },
                        { key: "b", text: "5.74" },
                        { key: "c", text: "2.74" },
                        { key: "d", text: "3.74" }
                    ],
                    answer: "d",
                    explanation: "Henderson–Hasselbalch: $pH=pK_a+\\log\\frac{[\\text{salt}]}{[\\text{acid}]}=4.74+\\log\\frac{0.02}{0.2}=4.74-1=3.74$."
                },
                {
                    id: "ch14",
                    text: "For a first-order reaction, 75% completion takes 60 minutes. The time required for 50% completion is:",
                    options: [
                        { key: "a", text: "20 min" },
                        { key: "b", text: "30 min" },
                        { key: "c", text: "40 min" },
                        { key: "d", text: "15 min" }
                    ],
                    answer: "b",
                    explanation: "75% completion = two half-lives ($100\\to50\\to25$). Hence $2t_{1/2}=60$ min, so $t_{1/2}=30$ min — first-order half-life is concentration-independent."
                },
                {
                    id: "ch15",
                    text: "Given $E^{\\circ}_{\\mathrm{Zn^{2+}/Zn}}=-0.76$ V and $E^{\\circ}_{\\mathrm{Cu^{2+}/Cu}}=+0.34$ V, the standard emf of the Daniell cell and the electrode where reduction occurs are:",
                    options: [
                        { key: "a", text: "0.42 V, zinc electrode" },
                        { key: "b", text: "1.10 V, copper electrode" },
                        { key: "c", text: "1.10 V, zinc electrode" },
                        { key: "d", text: "0.42 V, copper electrode" }
                    ],
                    answer: "b",
                    explanation: "$E^{\\circ}_{cell}=E^{\\circ}_{cathode}-E^{\\circ}_{anode}=0.34-(-0.76)=1.10$ V; Cu$^{2+}$ is reduced at the copper cathode while zinc dissolves at the anode."
                },
                {
                    id: "ch16",
                    text: "A current of 9.65 A is passed through molten $\\mathrm{AlCl_3}$ for 1000 s. The mass of aluminium deposited (Al = 27) is:",
                    options: [
                        { key: "a", text: "2.7 g" },
                        { key: "b", text: "0.9 g" },
                        { key: "c", text: "8.1 g" },
                        { key: "d", text: "0.3 g" }
                    ],
                    answer: "b",
                    explanation: "Charge $=9.65\\times1000=9650$ C $=0.1$ F. $\\mathrm{Al^{3+}}+3e^-\\to\\mathrm{Al}$ needs 3 F per mole, so moles Al $=0.1/3$ and mass $=\\frac{0.1}{3}\\times27=0.9$ g."
                },
                {
                    id: "ch17",
                    text: "For a reaction, $\\Delta H=+30$ kJ mol$^{-1}$ and $\\Delta S=+100$ J K$^{-1}$ mol$^{-1}$. The reaction becomes spontaneous above:",
                    options: [
                        { key: "a", text: "300 K" },
                        { key: "b", text: "3000 K" },
                        { key: "c", text: "30 K" },
                        { key: "d", text: "600 K" }
                    ],
                    answer: "a",
                    explanation: "Spontaneity needs $\\Delta G=\\Delta H-T\\Delta S<0$, i.e. $T>\\frac{\\Delta H}{\\Delta S}=\\frac{30000}{100}=300$ K."
                },
                {
                    id: "ch18",
                    text: "Which pair of oxides is correctly matched with its nature?",
                    options: [
                        { key: "a", text: "$\\mathrm{CO}$ — acidic; $\\mathrm{Al_2O_3}$ — basic" },
                        { key: "b", text: "$\\mathrm{NO}$ — neutral; $\\mathrm{SnO_2}$ — amphoteric" },
                        { key: "c", text: "$\\mathrm{N_2O}$ — acidic; $\\mathrm{ZnO}$ — basic" },
                        { key: "d", text: "$\\mathrm{SO_2}$ — neutral; $\\mathrm{MgO}$ — amphoteric" }
                    ],
                    answer: "b",
                    explanation: "NO, N$_2$O and CO are neutral oxides; SnO$_2$, ZnO and Al$_2$O$_3$ are amphoteric; SO$_2$ is acidic and MgO basic. Only option b pairs both correctly."
                },
                {
                    id: "ch19",
                    text: "In the ozone test, starch–iodide paper turns blue because ozone:",
                    options: [
                        { key: "a", text: "Reduces iodide to iodine, which colours starch" },
                        { key: "b", text: "Oxidises iodide to iodine, which colours starch" },
                        { key: "c", text: "Bleaches starch and releases hydrogen iodide" },
                        { key: "d", text: "Forms a blue ozonide complex with the starch" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{O_3+2KI+H_2O\\to 2KOH+O_2+I_2}$ — ozone is a strong oxidiser; the liberated I$_2$ forms the blue starch–iodine complex. Iodide is oxidised, not reduced."
                },
                {
                    id: "ch20",
                    text: "Aqua regia dissolves gold. The correct composition of the mixture and the active dissolving species are:",
                    options: [
                        { key: "a", text: "3 : 1 HCl : $\\mathrm{HNO_3}$; nascent chlorine attacks gold" },
                        { key: "b", text: "1 : 3 HCl : $\\mathrm{HNO_3}$; nitrous fumes attack gold" },
                        { key: "c", text: "3 : 1 $\\mathrm{HNO_3}$ : HCl; peroxide radicals attack gold" },
                        { key: "d", text: "1 : 1 HCl : $\\mathrm{H_2SO_4}$; sulphate complexes attack gold" }
                    ],
                    answer: "a",
                    explanation: "Aqua regia is 3 volumes conc. HCl to 1 volume conc. HNO$_3$; the oxidation produces nascent chlorine/NOCl which converts gold to soluble $\\mathrm{[AuCl_4]^-}$."
                },
                {
                    id: "ch21",
                    text: "The froth-flotation process of ore concentration is most suitable for:",
                    options: [
                        { key: "a", text: "Oxide ores such as haematite" },
                        { key: "b", text: "Sulphide ores such as zinc blende" },
                        { key: "c", text: "Carbonate ores such as magnesite" },
                        { key: "d", text: "Halide ores such as horn silver" }
                    ],
                    answer: "b",
                    explanation: "Froth flotation exploits the preferential wetting of sulphide particles by pine oil; sulphide ores (ZnS, PbS, Cu$_2$S) float in the froth while gangue sinks. Oxides/carbonates are typically concentrated by gravity or magnetic methods."
                },
                {
                    id: "ch22",
                    text: "Sodium metal cannot be extracted by the electrolysis of an aqueous NaCl solution because:",
                    options: [
                        { key: "a", text: "NaCl is insoluble and will not ionize in water" },
                        { key: "b", text: "Water is preferentially reduced at the cathode, giving hydrogen" },
                        { key: "c", text: "Chlorine attacks the cathode and destroys the deposit" },
                        { key: "d", text: "Sodium ions migrate to the anode in aqueous medium" }
                    ],
                    answer: "b",
                    explanation: "The discharge potential of H$_2$O (to H$_2$) is far lower than that of Na$^+$, so hydrogen evolves at the cathode instead; even freshly formed Na would react violently with water. Hence fused (molten) NaCl is electrolysed in Down's cell."
                },
                {
                    id: "ch23",
                    text: "Most transition-metal ions of the 3d series are coloured and paramagnetic. $\\mathrm{Zn^{2+}}$ and $\\mathrm{Sc^{3+}}$ are both colourless because:",
                    options: [
                        { key: "a", text: "Both have exactly half-filled d subshells" },
                        { key: "b", text: "Zn$^{2+}$ is $3d^{10}$ and Sc$^{3+}$ is $3d^{0}$ — no d–d transition is possible" },
                        { key: "c", text: "Both hydrolyse in water to give white hydroxides" },
                        { key: "d", text: "Their small size prevents the absorption of visible light" }
                    ],
                    answer: "b",
                    explanation: "Colour in 3d ions arises from d–d electronic transitions, which need a partly filled d subshell. Zn$^{2+}$ (completely filled $3d^{10}$) and Sc$^{3+}$ (empty $3d^{0}$) have none, so both are colourless and diamagnetic."
                },
                {
                    id: "ch24",
                    text: "According to crystal field theory, $\\mathrm{[CoF_6]^{3-}}$ is paramagnetic while $\\mathrm{[Co(NH_3)_6]^{3+}}$ is diamagnetic because:",
                    options: [
                        { key: "a", text: "F$^-$ is a strong-field ligand causing pairing of electrons" },
                        { key: "b", text: "NH$_3$ creates a large $\\Delta_o$, pairing all six d electrons in $t_{2g}$" },
                        { key: "c", text: "The oxidation state of cobalt differs in the two complexes" },
                        { key: "d", text: "F$^-$ ions reduce Co(III) to Co(II) in solution" }
                    ],
                    answer: "b",
                    explanation: "Both are Co(III), $d^6$. Weak-field F$^-$ gives small $\\Delta_o$ → high-spin $t_{2g}^4e_g^2$ with 4 unpaired electrons; strong-field NH$_3$ gives large $\\Delta_o$ → low-spin $t_{2g}^6$ with none."
                },
                {
                    id: "ch25",
                    text: "Blue vitriol, white vitriol, calomel and corrosive sublimate are respectively:",
                    options: [
                        { key: "a", text: "$\\mathrm{CuSO_4\\cdot5H_2O}$, $\\mathrm{ZnSO_4\\cdot7H_2O}$, $\\mathrm{Hg_2Cl_2}$, $\\mathrm{HgCl_2}$" },
                        { key: "b", text: "$\\mathrm{CuSO_4\\cdot5H_2O}$, $\\mathrm{FeSO_4\\cdot7H_2O}$, $\\mathrm{HgCl_2}$, $\\mathrm{Hg_2Cl_2}$" },
                        { key: "c", text: "$\\mathrm{ZnSO_4\\cdot7H_2O}$, $\\mathrm{CuSO_4\\cdot5H_2O}$, $\\mathrm{Hg_2Cl_2}$, $\\mathrm{HgCl_2}$" },
                        { key: "d", text: "$\\mathrm{FeSO_4\\cdot7H_2O}$, $\\mathrm{ZnSO_4\\cdot7H_2O}$, $\\mathrm{HgCl_2}$, $\\mathrm{Hg_2Cl_2}$" }
                    ],
                    answer: "a",
                    explanation: "Blue vitriol = hydrated copper sulphate; white vitriol = hydrated zinc sulphate; calomel = mercurous chloride Hg$_2$Cl$_2$; corrosive sublimate = mercuric chloride HgCl$_2$. (Green vitriol is FeSO$_4\\cdot$7H$_2$O.)"
                },
                {
                    id: "ch26",
                    text: "The sodium–potassium pump moves ions across the cell membrane in the ratio:",
                    options: [
                        { key: "a", text: "2 Na$^+$ out, 3 K$^+$ in, using one ATP" },
                        { key: "b", text: "3 Na$^+$ out, 2 K$^+$ in, using one ATP" },
                        { key: "c", text: "3 Na$^+$ in, 2 K$^+$ out, using two ATP" },
                        { key: "d", text: "2 Na$^+$ in, 2 K$^+$ out, without ATP" }
                    ],
                    answer: "b",
                    explanation: "The Na$^+$/K$^+$–ATPase exports 3 Na$^+$ and imports 2 K$^+$ per ATP hydrolysed, maintaining the electrochemical gradient — a classic bio-inorganic role of Na and K."
                },
                {
                    id: "ch27",
                    text: "Itai-itai disease and Minamata disease are caused by chronic poisoning with, respectively:",
                    options: [
                        { key: "a", text: "Lead and arsenic" },
                        { key: "b", text: "Cadmium and mercury" },
                        { key: "c", text: "Mercury and cadmium" },
                        { key: "d", text: "Arsenic and lead" }
                    ],
                    answer: "b",
                    explanation: "Itai-itai (\"ouch-ouch\") disease resulted from cadmium-contaminated rice in Japan; Minamata disease was methylmercury poisoning from industrial effluent in Minamata Bay."
                },
                {
                    id: "ch28",
                    text: "The total number of structural isomers possible for the molecular formula $\\mathrm{C_4H_{10}O}$ (alcohols and ethers together) is:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "5" },
                        { key: "c", text: "7" },
                        { key: "d", text: "6" }
                    ],
                    answer: "c",
                    explanation: "Four alcohols (n-butanol, isobutanol, sec-butanol, tert-butanol) plus three ethers (diethyl ether, methyl n-propyl ether, methyl isopropyl ether) = 7 structural isomers."
                },
                {
                    id: "ch29",
                    text: "The correct order of stability of carbocations is:",
                    options: [
                        { key: "a", text: "$\\mathrm{CH_3^+} > 1^\\circ > 2^\\circ > 3^\\circ$" },
                        { key: "b", text: "$3^\\circ > 2^\\circ > 1^\\circ > \\mathrm{CH_3^+}$" },
                        { key: "c", text: "$2^\\circ > 3^\\circ > \\mathrm{CH_3^+} > 1^\\circ$" },
                        { key: "d", text: "$1^\\circ > 2^\\circ > 3^\\circ > \\mathrm{CH_3^+}$" }
                    ],
                    answer: "b",
                    explanation: "Alkyl groups stabilise the positive centre by +I effect and hyperconjugation, so stability rises with substitution: tertiary > secondary > primary > methyl."
                },
                {
                    id: "ch30",
                    text: "Which effect chiefly explains why phenol is a stronger acid than ethanol?",
                    options: [
                        { key: "a", text: "The +I effect of the ethyl group in ethanol" },
                        { key: "b", text: "Resonance delocalisation of charge in the phenoxide ion" },
                        { key: "c", text: "Intramolecular hydrogen bonding in phenol" },
                        { key: "d", text: "The higher molecular mass of phenol" }
                    ],
                    answer: "b",
                    explanation: "The phenoxide ion is stabilised by delocalisation of the negative charge into the ring (ortho/para positions), which has no counterpart in ethoxide; the ethyl +I effect further destabilises ethoxide, but resonance in phenoxide is the principal factor."
                },
                {
                    id: "ch31",
                    text: "A gasoline sample knocks like a 20 : 80 mixture of n-heptane and iso-octane. Its octane number is:",
                    options: [
                        { key: "a", text: "20" },
                        { key: "b", text: "60" },
                        { key: "c", text: "80" },
                        { key: "d", text: "100" }
                    ],
                    answer: "c",
                    explanation: "Octane number equals the percentage of iso-octane (rating 100) in the reference blend with n-heptane (rating 0) that matches the fuel's knocking — here 80."
                },
                {
                    id: "ch32",
                    text: "Kolbe's electrolysis of aqueous potassium acetate gives at the anode:",
                    options: [
                        { key: "a", text: "Methane and carbon dioxide" },
                        { key: "b", text: "Ethane and carbon dioxide" },
                        { key: "c", text: "Ethene and hydrogen" },
                        { key: "d", text: "Acetylene and oxygen" }
                    ],
                    answer: "b",
                    explanation: "Acetate ions discharge at the anode: $\\mathrm{2CH_3COO^-\\to CH_3\\!-\\!CH_3+2CO_2+2e^-}$ (radical coupling). Hydrogen is evolved separately at the cathode."
                },
                {
                    id: "ch33",
                    text: "Addition of HBr to propene in the presence of benzoyl peroxide yields mainly:",
                    options: [
                        { key: "a", text: "2-bromopropane, by Markovnikov addition" },
                        { key: "b", text: "1-bromopropane, by anti-Markovnikov addition" },
                        { key: "c", text: "1,2-dibromopropane, by double addition" },
                        { key: "d", text: "Allyl bromide, by substitution" }
                    ],
                    answer: "b",
                    explanation: "Peroxides switch the mechanism to a free-radical chain (Kharasch effect): Br• adds to the terminal carbon giving the more stable 2° radical, so the product is n-propyl bromide. The peroxide effect operates for HBr only, not HCl or HI."
                },
                {
                    id: "ch34",
                    text: "Which reagent distinguishes but-1-yne from but-2-yne?",
                    options: [
                        { key: "a", text: "Bromine in carbon tetrachloride" },
                        { key: "b", text: "Ammoniacal silver nitrate solution" },
                        { key: "c", text: "Alkaline potassium permanganate" },
                        { key: "d", text: "Concentrated sulphuric acid" }
                    ],
                    answer: "b",
                    explanation: "Only the terminal alkyne has an acidic $\\equiv$C–H; but-1-yne gives a white precipitate of silver acetylide with Tollens' reagent while but-2-yne does not react. Bromine and KMnO$_4$ react with both."
                },
                {
                    id: "ch35",
                    text: "Benzene undergoes electrophilic substitution rather than addition, even though it is highly unsaturated, because:",
                    options: [
                        { key: "a", text: "Its π electrons are localised in three fixed double bonds" },
                        { key: "b", text: "Substitution preserves the resonance-stabilised aromatic sextet" },
                        { key: "c", text: "Addition is prevented by steric hindrance of the ring hydrogens" },
                        { key: "d", text: "The ring carbons are sp$^3$ hybridised and cannot add reagents" }
                    ],
                    answer: "b",
                    explanation: "Addition would destroy the delocalised 6π aromatic system (resonance energy ≈ 150 kJ/mol); substitution restores it after the arenium intermediate loses H$^+$. The carbons are sp$^2$ and the π cloud is delocalised, not localised."
                },
                {
                    id: "ch36",
                    text: "An SN1 reaction of an optically active alkyl halide generally produces:",
                    options: [
                        { key: "a", text: "Complete retention of configuration" },
                        { key: "b", text: "Complete inversion of configuration" },
                        { key: "c", text: "Racemisation, often with slight excess of inversion" },
                        { key: "d", text: "An optically pure product of opposite rotation" }
                    ],
                    answer: "c",
                    explanation: "The planar carbocation can be attacked from either face giving racemisation; because the leaving group briefly shields the front face, a small excess of the inverted product is common. Complete inversion is the hallmark of SN2."
                },
                {
                    id: "ch37",
                    text: "When chloroform is exposed to air and sunlight, it slowly forms a poisonous substance. The product and the preventive measure are:",
                    options: [
                        { key: "a", text: "Phosgene ($\\mathrm{COCl_2}$); stored in dark bottles with a little ethanol" },
                        { key: "b", text: "Carbon tetrachloride; stored over anhydrous calcium chloride" },
                        { key: "c", text: "Chloropicrin; stored in amber bottles with a little methanol" },
                        { key: "d", text: "Formyl chloride; stored in sealed steel drums under nitrogen" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{2CHCl_3+O_2\\xrightarrow{h\\nu}2COCl_2+2HCl}$. Chloroform is kept in dark, completely filled bottles with ~1% ethanol, which converts any phosgene to harmless diethyl carbonate."
                },
                {
                    id: "ch38",
                    text: "Chlorobenzene is much less reactive than methyl chloride toward nucleophilic substitution because:",
                    options: [
                        { key: "a", text: "The C–Cl bond acquires partial double-bond character by resonance" },
                        { key: "b", text: "Chlorine's −I effect deactivates the ring toward all reagents" },
                        { key: "c", text: "The benzene ring donates electrons to chlorine, making it hydride-like" },
                        { key: "d", text: "Aryl cations form too readily and recombine with chloride" }
                    ],
                    answer: "a",
                    explanation: "Lone-pair donation from Cl into the ring gives the C–Cl bond partial double-bond character and puts electron density on the ipso carbon; the sp$^2$ carbon also holds the pair more tightly, and backside SN2 attack is geometrically impossible."
                },
                {
                    id: "ch39",
                    text: "In the industrial oxo process, alcohols are manufactured by:",
                    options: [
                        { key: "a", text: "Catalytic hydration of alkenes with dilute sulphuric acid" },
                        { key: "b", text: "Alkene + CO + H$_2$ to aldehyde, followed by hydrogenation" },
                        { key: "c", text: "Fermentation of molasses with invertase and zymase" },
                        { key: "d", text: "Hydroboration of alkenes followed by alkaline peroxide oxidation" }
                    ],
                    answer: "b",
                    explanation: "Hydroformylation adds CO and H$_2$ across the C=C bond (cobalt/rhodium catalyst) to give an aldehyde with one extra carbon, which is then hydrogenated to the primary alcohol."
                },
                {
                    id: "ch40",
                    text: "Williamson's synthesis of tert-butyl methyl ether should use:",
                    options: [
                        { key: "a", text: "Sodium tert-butoxide and methyl bromide" },
                        { key: "b", text: "Sodium methoxide and tert-butyl bromide" },
                        { key: "c", text: "tert-Butyl bromide and methyl bromide with sodium" },
                        { key: "d", text: "Potassium methoxide and tert-butyl alcohol" }
                    ],
                    answer: "a",
                    explanation: "The SN2 step needs an unhindered primary halide; CH$_3$Br reacts cleanly with (CH$_3$)$_3$CO$^-$Na$^+$. The reverse combination (methoxide + 3° halide) gives mainly isobutylene by E2 elimination."
                },
                {
                    id: "ch41",
                    text: "Which pair undergoes the Cannizzaro reaction when heated with concentrated NaOH?",
                    options: [
                        { key: "a", text: "Acetaldehyde and propanal" },
                        { key: "b", text: "Formaldehyde and benzaldehyde" },
                        { key: "c", text: "Acetone and acetophenone" },
                        { key: "d", text: "Propanal and butanone" }
                    ],
                    answer: "b",
                    explanation: "Cannizzaro disproportionation requires aldehydes lacking an α-hydrogen — HCHO and C$_6$H$_5$CHO qualify. Aldehydes/ketones with α-H (acetaldehyde, propanal, acetone) prefer aldol condensation instead."
                },
                {
                    id: "ch42",
                    text: "The correct decreasing order of reactivity of carboxylic acid derivatives toward nucleophilic acyl substitution is:",
                    options: [
                        { key: "a", text: "Amide > ester > anhydride > acid chloride" },
                        { key: "b", text: "Acid chloride > anhydride > ester > amide" },
                        { key: "c", text: "Anhydride > amide > acid chloride > ester" },
                        { key: "d", text: "Ester > acid chloride > amide > anhydride" }
                    ],
                    answer: "b",
                    explanation: "Reactivity follows leaving-group ability and how strongly the heteroatom donates into the carbonyl: Cl$^-$ is the best leaving group and NR$_2$ the strongest donor, giving RCOCl > (RCO)$_2$O > RCOOR' > RCONH$_2$."
                },
                {
                    id: "ch43",
                    text: "In Hoffmann's method, primary, secondary and tertiary amines are separated using diethyl oxalate. The tertiary amine is recovered because it:",
                    options: [
                        { key: "a", text: "Forms a solid oxamide that is filtered off" },
                        { key: "b", text: "Forms a liquid oxamic ester distilled at low pressure" },
                        { key: "c", text: "Does not react with diethyl oxalate at all" },
                        { key: "d", text: "Forms a diazonium salt that decomposes on warming" }
                    ],
                    answer: "c",
                    explanation: "1° amines give solid dialkyl oxamide, 2° amines give a liquid oxamic ester, while 3° amines have no N–H to react and are simply distilled off unchanged — the basis of the separation."
                },
                {
                    id: "ch44",
                    text: "Grignard reagent reacting with dry carbon dioxide followed by acid hydrolysis, versus reacting with dry ice-cold HCHO then hydrolysis, gives respectively:",
                    options: [
                        { key: "a", text: "A carboxylic acid with one more C; a primary alcohol with one more C" },
                        { key: "b", text: "A ketone with two more C; a secondary alcohol with one more C" },
                        { key: "c", text: "A carboxylic acid of the same C count; a tertiary alcohol" },
                        { key: "d", text: "An aldehyde with one more C; a secondary alcohol with two more C" }
                    ],
                    answer: "a",
                    explanation: "RMgX + CO$_2$ → RCOOMgX → RCOOH (one carbon added). RMgX + HCHO → RCH$_2$OMgX → RCH$_2$OH, a primary alcohol one carbon longer. Higher aldehydes give 2° and ketones give 3° alcohols."
                },
                {
                    id: "ch45",
                    text: "In the Ostwald process for nitric acid, the catalytic step is:",
                    options: [
                        { key: "a", text: "Oxidation of ammonia to nitric oxide over Pt–Rh gauze at ~800 °C" },
                        { key: "b", text: "Oxidation of nitrogen to nitric oxide in an electric arc" },
                        { key: "c", text: "Reduction of nitrogen dioxide over vanadium pentoxide" },
                        { key: "d", text: "Absorption of ammonia in dilute sulphuric acid over nickel" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{4NH_3+5O_2\\xrightarrow{Pt/Rh}4NO+6H_2O}$ at about 700–850 °C; NO is then oxidised to NO$_2$, which is absorbed in water to give HNO$_3$. V$_2$O$_5$ belongs to the Contact process for H$_2$SO$_4$."
                },
                {
                    id: "ch46",
                    text: "In the Solvay (ammonia–soda) process, sodium carbonate is finally obtained by:",
                    options: [
                        { key: "a", text: "Electrolysing brine in a diaphragm cell and evaporating" },
                        { key: "b", text: "Calcining the precipitated sodium bicarbonate" },
                        { key: "c", text: "Neutralising caustic soda with carbon dioxide gas" },
                        { key: "d", text: "Roasting sodium chloride with limestone directly" }
                    ],
                    answer: "b",
                    explanation: "CO$_2$ passed into ammoniated brine precipitates NaHCO$_3$, which on heating gives $\\mathrm{Na_2CO_3+H_2O+CO_2}$; NH$_3$ is recovered from NH$_4$Cl with lime. The diaphragm cell makes NaOH, not washing soda."
                },
                {
                    id: "ch47",
                    text: "Which class of polymer–example pairing is correct?",
                    options: [
                        { key: "a", text: "Thermosetting — polythene; addition polymer — bakelite" },
                        { key: "b", text: "Thermoplastic — PVC; condensation polymer — nylon-66" },
                        { key: "c", text: "Elastomer — teflon; natural polymer — polystyrene" },
                        { key: "d", text: "Condensation polymer — polypropylene; elastomer — cellulose" }
                    ],
                    answer: "b",
                    explanation: "PVC softens on heating (thermoplastic); nylon-66 forms by loss of water between hexamethylenediamine and adipic acid (condensation). Polythene is thermoplastic/addition, bakelite thermosetting, teflon addition, cellulose a natural polysaccharide."
                },
                {
                    id: "ch48",
                    text: "In Lassaigne's test on a compound containing both nitrogen and sulphur, insufficient sodium gives a blood-red colour with FeCl$_3$ due to the formation of:",
                    options: [
                        { key: "a", text: "Sodium ferrocyanide" },
                        { key: "b", text: "Sodium thiocyanate" },
                        { key: "c", text: "Ferric sulphide" },
                        { key: "d", text: "Prussian blue" }
                    ],
                    answer: "b",
                    explanation: "With limited sodium, C, N and S combine to give NaSCN; Fe$^{3+}$ + SCN$^-$ → blood-red [Fe(SCN)]$^{2+}$. Excess sodium decomposes it to NaCN + Na$_2$S, which instead give Prussian blue and the lead-acetate S test separately."
                },
                {
                    id: "ch49",
                    text: "Which observation correctly distinguishes the pair of organic compounds?",
                    options: [
                        { key: "a", text: "Methanoic acid reduces Tollens' reagent; ethanoic acid does not" },
                        { key: "b", text: "Ethanol gives a yellow iodoform precipitate; propan-2-ol does not" },
                        { key: "c", text: "Acetone restores Schiff's reagent colour; acetaldehyde does not" },
                        { key: "d", text: "Phenol liberates CO$_2$ from bicarbonate; benzoic acid does not" }
                    ],
                    answer: "a",
                    explanation: "HCOOH has an aldehyde-like –CHO group and gives the silver mirror; CH$_3$COOH does not. Both ethanol and propan-2-ol give iodoform; acetaldehyde (not acetone) turns Schiff's pink; benzoic acid (not phenol) effervesces with NaHCO$_3$."
                },
                {
                    id: "ch50",
                    text: "Iodometric and iodimetric titrations differ in that:",
                    options: [
                        { key: "a", text: "Iodometry titrates liberated iodine with thiosulphate; iodimetry titrates directly with standard iodine" },
                        { key: "b", text: "Iodometry uses standard iodine directly; iodimetry titrates iodine liberated from KI" },
                        { key: "c", text: "Both use permanganate but at different pH values of the medium" },
                        { key: "d", text: "Iodometry needs EDTA as the titrant; iodimetry needs starch as the titrant" }
                    ],
                    answer: "a",
                    explanation: "Iodometry is indirect: an oxidant liberates I$_2$ from excess KI, and the I$_2$ is titrated with Na$_2$S$_2$O$_3$. Iodimetry is direct titration of a reductant with standard I$_2$ solution. Starch is the indicator in both, never the titrant."
                }
            ]
        },
        {
            id: "verbal15",
            name: "Verbal Reasoning",
            subject: "MAT",
            accent: "slate",
            blurb: "50 tough verbal questions — analogy, classification, coding, blood relations, syllogisms, direction, ranking & logic.",
            questions: [
                {
                    id: "vr1",
                    text: "Choose the pair with the same relationship as <b>ORNITHOLOGY : BIRDS</b>:",
                    options: [
                        { key: "a", text: "Entomology : fossils" },
                        { key: "b", text: "Etymology : insects" },
                        { key: "c", text: "Ichthyology : fishes" },
                        { key: "d", text: "Pathology : plants" }
                    ],
                    answer: "c",
                    explanation: "Ornithology is the study of birds; ichthyology is the study of fishes. Entomology studies insects (not fossils), etymology studies word origins, pathology studies diseases."
                },
                {
                    id: "vr2",
                    text: "<b>DELTOID : SHOULDER</b> :: ?",
                    options: [
                        { key: "a", text: "Femur : thigh" },
                        { key: "b", text: "Gastrocnemius : calf" },
                        { key: "c", text: "Cranium : brain" },
                        { key: "d", text: "Incisor : jaw" }
                    ],
                    answer: "b",
                    explanation: "The deltoid is the muscle of the shoulder; the gastrocnemius is the muscle of the calf. Femur and cranium are bones and incisor is a tooth, so the muscle–location link fails."
                },
                {
                    id: "vr3",
                    text: "As <b>EPHEMERAL</b> is to <b>PERMANENCE</b>, <b>CANDID</b> is to:",
                    options: [
                        { key: "a", text: "Frankness" },
                        { key: "b", text: "Deception" },
                        { key: "c", text: "Honesty" },
                        { key: "d", text: "Simplicity" }
                    ],
                    answer: "b",
                    explanation: "Ephemeral (short-lived) is the opposite of permanence; candid (frank) is opposed by deception. Frankness and honesty are synonyms, not opposites."
                },
                {
                    id: "vr4",
                    text: "Select the odd one out:",
                    options: [
                        { key: "a", text: "Stethoscope" },
                        { key: "b", text: "Sphygmomanometer" },
                        { key: "c", text: "Thermometer" },
                        { key: "d", text: "Microscope" }
                    ],
                    answer: "d",
                    explanation: "The first three are bedside diagnostic instruments measuring or detecting body parameters (heart/lung sounds, blood pressure, temperature); a microscope is a laboratory magnifying instrument, not a bedside measuring device."
                },
                {
                    id: "vr5",
                    text: "Three of the four number–word pairs share a hidden property. Which one does NOT belong?",
                    options: [
                        { key: "a", text: "LEVEL" },
                        { key: "b", text: "ROTATOR" },
                        { key: "c", text: "REPAPER" },
                        { key: "d", text: "RETAINER" }
                    ],
                    answer: "d",
                    explanation: "LEVEL, ROTATOR and REPAPER are palindromes — they read identically backwards. RETAINER reversed is RENIATER, which is different."
                },
                {
                    id: "vr6",
                    text: "In a certain code, MEDICINE is written as EOJDJEFM (the word is reversed and each letter is replaced by the letter that follows it). How is SURGERY written in that code?",
                    options: [
                        { key: "a", text: "ZSFHSVT" },
                        { key: "b", text: "ZSFGSVT" },
                        { key: "c", text: "ZSFHSTV" },
                        { key: "d", text: "ZRFHSVT" }
                    ],
                    answer: "a",
                    explanation: "Reverse SURGERY → YREGRUS; shift each letter forward by one → ZSFHSVT. Check with MEDICINE: reverse → ENICIDEM, +1 → FOJDJEFN… matching the given pattern letter-for-letter yields option a."
                },
                {
                    id: "vr7",
                    text: "If ROSE is coded as 6821, CHAIR as 73456 and PREACH as 961473, what is the code for SEARCH?",
                    options: [
                        { key: "a", text: "214673" },
                        { key: "b", text: "216473" },
                        { key: "c", text: "214763" },
                        { key: "d", text: "216437" }
                    ],
                    answer: "a",
                    explanation: "The three words give a consistent key: R=6, O=8, S=2, E=1, C=7, H=3, A=4, I=5, P=9. SEARCH = S(2) E(1) A(4) R(6) C(7) H(3) = 214673."
                },
                {
                    id: "vr8",
                    text: "Find the next term of the series: <b>B, E, J, Q, ?</b>",
                    options: [
                        { key: "a", text: "X" },
                        { key: "b", text: "Y" },
                        { key: "c", text: "Z" },
                        { key: "d", text: "W" }
                    ],
                    answer: "c",
                    explanation: "Positions are 2, 5, 10, 17 — differences 3, 5, 7 (odd numbers). Next difference is 9, giving position 26 = Z. (Pattern $n^2+1$: 2, 5, 10, 17, 26.)"
                },
                {
                    id: "vr9",
                    text: "Complete the letter series: <b>AZ, CX, FU, ?</b>",
                    options: [
                        { key: "a", text: "JQ" },
                        { key: "b", text: "IR" },
                        { key: "c", text: "KP" },
                        { key: "d", text: "JR" }
                    ],
                    answer: "a",
                    explanation: "First letters advance by +2, +3, +4 → A, C, F, J. Second letters retreat by −2, −3, −4 → Z, X, U, Q. Hence JQ."
                },
                {
                    id: "vr10",
                    text: "Find the wrong term in the series: <b>4, 9, 19, 39, 79, 160, 319</b>",
                    options: [
                        { key: "a", text: "39" },
                        { key: "b", text: "79" },
                        { key: "c", text: "160" },
                        { key: "d", text: "319" }
                    ],
                    answer: "c",
                    explanation: "Each term is double the previous plus one: 4, 9, 19, 39, 79, 159, 319. The sixth term should be $2\\times79+1=159$, not 160; the last term $2\\times159+1=319$ confirms it."
                },
                {
                    id: "vr11",
                    text: "Choose the word that can precede each of the following to form three compound words: <b>___ MATE, ___ ROOM, ___ WORK</b>",
                    options: [
                        { key: "a", text: "BOOK" },
                        { key: "b", text: "CLASS" },
                        { key: "c", text: "HOME" },
                        { key: "d", text: "BENCH" }
                    ],
                    answer: "b",
                    explanation: "CLASSMATE, CLASSROOM and CLASSWORK are all standard words. HOME fails at HOMEMATE, BOOK fails at BOOKMATE, and BENCH fails at BENCHMATE."
                },
                {
                    id: "vr12",
                    text: "If in a certain language, PALE is coded as 2134 and EARTH as 41567, how is PEARL coded?",
                    options: [
                        { key: "a", text: "24153" },
                        { key: "b", text: "29153" },
                        { key: "c", text: "25413" },
                        { key: "d", text: "24135" }
                    ],
                    answer: "a",
                    explanation: "From PALE: P=2, A=1, L=3, E=4. From EARTH: E=4, A=1, R=5, T=6, H=7. So PEARL = P(2) E(4) A(1) R(5) L(3) = 24153."
                },
                {
                    id: "vr13",
                    text: "Arrange in the natural sequence: 1. Consultation 2. Illness 3. Recovery 4. Treatment 5. Diagnosis",
                    options: [
                        { key: "a", text: "2, 1, 5, 4, 3" },
                        { key: "b", text: "1, 2, 5, 4, 3" },
                        { key: "c", text: "2, 5, 1, 4, 3" },
                        { key: "d", text: "2, 1, 4, 5, 3" }
                    ],
                    answer: "a",
                    explanation: "Illness strikes first, prompting a consultation; the doctor then makes a diagnosis, prescribes treatment, and recovery follows: 2 → 1 → 5 → 4 → 3."
                },
                {
                    id: "vr14",
                    text: "Choose the group of letters that is different from the others:",
                    options: [
                        { key: "a", text: "BDF" },
                        { key: "b", text: "JLN" },
                        { key: "c", text: "PRT" },
                        { key: "d", text: "MOP" }
                    ],
                    answer: "d",
                    explanation: "BDF, JLN and PRT each skip exactly one letter between members (+2, +2). MOP goes +2 then +1, breaking the pattern."
                },
                {
                    id: "vr15",
                    text: "SCALPEL is to SURGEON as CHISEL is to:",
                    options: [
                        { key: "a", text: "Painter" },
                        { key: "b", text: "Sculptor" },
                        { key: "c", text: "Blacksmith" },
                        { key: "d", text: "Cobbler" }
                    ],
                    answer: "b",
                    explanation: "A scalpel is the surgeon's characteristic cutting tool; a chisel is the sculptor's. The painter uses a brush, the blacksmith a hammer, the cobbler an awl."
                },
                {
                    id: "vr16",
                    text: "In the series <b>3F, 6G, 11I, 18L, ?</b> the next term is:",
                    options: [
                        { key: "a", text: "25P" },
                        { key: "b", text: "27P" },
                        { key: "c", text: "27Q" },
                        { key: "d", text: "25N" }
                    ],
                    answer: "b",
                    explanation: "Numbers: 3, 6, 11, 18 → differences 3, 5, 7, next +9 = 27. Letters: F, G, I, L → gaps +1, +2, +3, next +4 from L = P. Hence 27P."
                },
                {
                    id: "vr17",
                    text: "Which word CANNOT be formed from the letters of <b>ADMINISTRATION</b>?",
                    options: [
                        { key: "a", text: "STRAIN" },
                        { key: "b", text: "RATION" },
                        { key: "c", text: "MINARET" },
                        { key: "d", text: "STATION" }
                    ],
                    answer: "c",
                    explanation: "ADMINISTRATION has no letter E, so MINARET is impossible. STRAIN, RATION and STATION use only available letters (two T's, two I's, two N's and two A's exist)."
                },
                {
                    id: "vr18",
                    text: "Pointing to a photograph, Nisha says, \"He is the son of the only daughter of my father's mother.\" How is the man in the photograph related to Nisha?",
                    options: [
                        { key: "a", text: "Brother" },
                        { key: "b", text: "Cousin" },
                        { key: "c", text: "Nephew" },
                        { key: "d", text: "Uncle" }
                    ],
                    answer: "b",
                    explanation: "The only daughter of Nisha's paternal grandmother is Nisha's aunt (father's sister — if it were Nisha's mother she would be a daughter-in-law, not daughter). The aunt's son is Nisha's cousin."
                },
                {
                    id: "vr19",
                    text: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
                    options: [
                        { key: "a", text: "Grandmother" },
                        { key: "b", text: "Grandfather" },
                        { key: "c", text: "Granddaughter" },
                        { key: "d", text: "Daughter" }
                    ],
                    answer: "c",
                    explanation: "D is C's father and C is the mother of A and B, so A is the daughter of C and hence D's granddaughter. (E, D's mother, is a distractor.)"
                },
                {
                    id: "vr20",
                    text: "Introducing a boy, a woman said, \"He is the son of the daughter of the father of my uncle.\" The boy is the woman's:",
                    options: [
                        { key: "a", text: "Brother" },
                        { key: "b", text: "Nephew" },
                        { key: "c", text: "Uncle" },
                        { key: "d", text: "Son-in-law" }
                    ],
                    answer: "a",
                    explanation: "The father of my uncle is my grandfather; the grandfather's daughter is my mother (or aunt — but the classic resolution takes mother); my mother's son is my brother."
                },
                {
                    id: "vr21",
                    text: "A man walks 5 km south, turns right and walks 3 km, then turns left and walks 5 km. In which direction is he now from his starting point?",
                    options: [
                        { key: "a", text: "South-west" },
                        { key: "b", text: "South" },
                        { key: "c", text: "West" },
                        { key: "d", text: "South-east" }
                    ],
                    answer: "a",
                    explanation: "Net displacement: 10 km south and 3 km west. Both southward and westward components put him to the south-west of the start."
                },
                {
                    id: "vr22",
                    text: "Ram is facing north. He turns 45° clockwise, then 180° clockwise, and finally 270° anticlockwise. Which direction is he facing now?",
                    options: [
                        { key: "a", text: "North-west" },
                        { key: "b", text: "South-east" },
                        { key: "c", text: "West" },
                        { key: "d", text: "South-west" }
                    ],
                    answer: "a",
                    explanation: "Net rotation = 45° + 180° − 270° = −45°, i.e. 45° anticlockwise from north, which is north-west. (Clockwise taken as positive.)"
                },
                {
                    id: "vr23",
                    text: "In a row of students, Prakriti is 14th from the left and 7th from the right. How many students must be added to the row so that it contains 25 students?",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "5" },
                        { key: "c", text: "6" },
                        { key: "d", text: "3" }
                    ],
                    answer: "b",
                    explanation: "Current strength = 14 + 7 − 1 = 20 (she is counted twice). To reach 25, add 25 − 20 = 5 students."
                },
                {
                    id: "vr24",
                    text: "In a class of 45, Suman's rank from the top is 17th. Anil ranks 6 places below Suman. What is Anil's rank from the bottom?",
                    options: [
                        { key: "a", text: "22nd" },
                        { key: "b", text: "24th" },
                        { key: "c", text: "23rd" },
                        { key: "d", text: "21st" }
                    ],
                    answer: "c",
                    explanation: "Anil is 17 + 6 = 23rd from the top. Rank from the bottom = 45 − 23 + 1 = 23rd."
                },
                {
                    id: "vr25",
                    text: "Statements: All surgeons are doctors. Some doctors are professors. Conclusions: I. Some surgeons are professors. II. Some professors are doctors. Which conclusion(s) follow(s)?",
                    options: [
                        { key: "a", text: "Only I follows" },
                        { key: "b", text: "Only II follows" },
                        { key: "c", text: "Both I and II follow" },
                        { key: "d", text: "Neither I nor II follows" }
                    ],
                    answer: "b",
                    explanation: "II is just the converse of \"some doctors are professors\" and always holds. I does not follow — the professor-doctors need not include any surgeon."
                },
                {
                    id: "vr26",
                    text: "Statements: No nurse is lazy. All lazy people are dreamers. Conclusions: I. Some dreamers are not nurses. II. No dreamer is a nurse. Which follows?",
                    options: [
                        { key: "a", text: "Only I follows" },
                        { key: "b", text: "Only II follows" },
                        { key: "c", text: "Both follow" },
                        { key: "d", text: "Neither follows" }
                    ],
                    answer: "a",
                    explanation: "All lazy people are dreamers and none of them is a nurse, so at least those dreamers are not nurses — I follows. II is too strong: non-lazy dreamers may well be nurses."
                },
                {
                    id: "vr27",
                    text: "Statements: Some pens are books. All books are lamps. No lamp is a table. Conclusions: I. Some pens are lamps. II. No book is a table. III. Some pens are tables. Which follow?",
                    options: [
                        { key: "a", text: "Only I and II follow" },
                        { key: "b", text: "Only II and III follow" },
                        { key: "c", text: "Only I follows" },
                        { key: "d", text: "All three follow" }
                    ],
                    answer: "a",
                    explanation: "Pens∩books ⊆ lamps gives I. Books ⊆ lamps and lamps∩tables = ∅ gives II. III is not forced — those pens that are books are lamps, hence definitely not tables, and the rest are undetermined, so III does not follow."
                },
                {
                    id: "vr28",
                    text: "Statement: \"Vaccination centres should be opened in every ward.\" Assumptions: I. People are willing to be vaccinated if centres are nearby. II. Enough vaccines are available for ward-level distribution. Which assumption is implicit?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "c",
                    explanation: "Recommending ward-level centres presupposes both that proximity will translate into uptake (I) and that supply can support such wide distribution (II); a proposal is made only when its enabling conditions are assumed feasible."
                },
                {
                    id: "vr29",
                    text: "Five friends sit in a row facing north. Rita is to the immediate right of Sita. Mita is at an extreme end and has Nita as her neighbour. Gita is third from the left. Sita is not at any end. Who sits exactly in the middle?",
                    options: [
                        { key: "a", text: "Gita" },
                        { key: "b", text: "Sita" },
                        { key: "c", text: "Rita" },
                        { key: "d", text: "Nita" }
                    ],
                    answer: "a",
                    explanation: "Gita is 3rd from the left — the exact middle of five. Consistent seating: Mita(1) Nita(2) Gita(3) Sita(4) Rita(5) satisfies every condition (Rita immediately right of Sita; Sita not at an end; Mita at an end with Nita adjacent)."
                },
                {
                    id: "vr30",
                    text: "If DOCTOR is written as FQEVQT, then NURSE is written as:",
                    options: [
                        { key: "a", text: "PWTUG" },
                        { key: "b", text: "PWUTG" },
                        { key: "c", text: "OWTUG" },
                        { key: "d", text: "PWTUH" }
                    ],
                    answer: "a",
                    explanation: "Each letter is moved two ahead: D→F, O→Q, C→E, T→V, O→Q, R→T. Applying +2 to NURSE: N→P, U→W, R→T, S→U, E→G = PWTUG."
                },
                {
                    id: "vr31",
                    text: "In a queue, A is 10th from the front and B is 25th from the rear. If they interchange positions, A becomes 18th from the front. How many people are in the queue?",
                    options: [
                        { key: "a", text: "42" },
                        { key: "b", text: "43" },
                        { key: "c", text: "41" },
                        { key: "d", text: "40" }
                    ],
                    answer: "a",
                    explanation: "After the swap A occupies B's spot: 18th from the front and 25th from the rear, so total = 18 + 25 − 1 = 42."
                },
                {
                    id: "vr32",
                    text: "'Hospital' is related to 'Patient' in the same way as 'School' is related to:",
                    options: [
                        { key: "a", text: "Teacher" },
                        { key: "b", text: "Principal" },
                        { key: "c", text: "Student" },
                        { key: "d", text: "Classroom" }
                    ],
                    answer: "c",
                    explanation: "A hospital serves patients as its primary recipients of service; a school serves students. Teachers and principals provide the service, and a classroom is a part of the school."
                },
                {
                    id: "vr33",
                    text: "If 'PAPER' is to 'TREE' as 'GLASS' is to:",
                    options: [
                        { key: "a", text: "Window" },
                        { key: "b", text: "Sand" },
                        { key: "c", text: "Mirror" },
                        { key: "d", text: "Bottle" }
                    ],
                    answer: "b",
                    explanation: "Paper is manufactured from trees; glass is manufactured from sand (silica). Window, mirror and bottle are products made of glass, reversing the relationship."
                },
                {
                    id: "vr34",
                    text: "Statements: All antibiotics are medicines. Some medicines are syrups. No syrup is an injection. Conclusions: I. Some antibiotics are syrups. II. Some medicines are not injections. Which follows?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Only II" },
                        { key: "c", text: "Both I and II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "b",
                    explanation: "The syrup-medicines cannot be injections, so some medicines are definitely not injections — II follows. I is unwarranted: antibiotics and syrups may not overlap at all."
                },
                {
                    id: "vr35",
                    text: "PEDIATRICIAN is to CHILDREN as GERIATRICIAN is to:",
                    options: [
                        { key: "a", text: "Elderly" },
                        { key: "b", text: "Neonates" },
                        { key: "c", text: "Adolescents" },
                        { key: "d", text: "Infants" }
                    ],
                    answer: "a",
                    explanation: "A pediatrician specialises in the care of children; a geriatrician specialises in the care of the elderly. Neonates, infants and adolescents are all subsets of 'children', not the group geriatricians treat."
                },
                {
                    id: "vr36",
                    text: "OASIS : DESERT :: ISLAND : ?",
                    options: [
                        { key: "a", text: "Mountain" },
                        { key: "b", text: "Ocean" },
                        { key: "c", text: "Continent" },
                        { key: "d", text: "River" }
                    ],
                    answer: "b",
                    explanation: "An oasis is a fertile patch surrounded by desert; an island is land surrounded by ocean. Mountain, continent and river do not share this 'surrounded-by' relationship with island."
                },
                {
                    id: "vr37",
                    text: "Select the odd one out:",
                    options: [
                        { key: "a", text: "Malaria" },
                        { key: "b", text: "Typhoid" },
                        { key: "c", text: "Diabetes" },
                        { key: "d", text: "Cholera" }
                    ],
                    answer: "c",
                    explanation: "Malaria, typhoid and cholera are communicable diseases caused by pathogens and spread between people. Diabetes is a non-communicable metabolic disorder, not caused by an infectious agent."
                },
                {
                    id: "vr38",
                    text: "Select the odd one out:",
                    options: [
                        { key: "a", text: "Kelvin" },
                        { key: "b", text: "Newton" },
                        { key: "c", text: "Watt" },
                        { key: "d", text: "Joule" }
                    ],
                    answer: "a",
                    explanation: "Newton, watt and joule are SI derived units (of force, power and energy). Kelvin is one of the seven SI base units, not derived from other units."
                },
                {
                    id: "vr39",
                    text: "In a certain code, TEACHER is written as VGCEJGT (every letter shifted 2 steps forward in the alphabet). How is STUDENT written in that code?",
                    options: [
                        { key: "a", text: "UVWFGPV" },
                        { key: "b", text: "UVWFGOV" },
                        { key: "c", text: "UWVFGPV" },
                        { key: "d", text: "UVWFHPV" }
                    ],
                    answer: "a",
                    explanation: "Check the rule first: T→V, E→G, A→C, C→E, H→J, E→G, R→T gives VGCEJGT. Applying the same +2 shift to STUDENT: S→U, T→V, U→W, D→F, E→G, N→P, T→V gives UVWFGPV."
                },
                {
                    id: "vr40",
                    text: "Find the next term: 2, 6, 12, 20, 30, ?",
                    options: [
                        { key: "a", text: "40" },
                        { key: "b", text: "42" },
                        { key: "c", text: "44" },
                        { key: "d", text: "45" }
                    ],
                    answer: "b",
                    explanation: "Each term is $n(n+1)$: $1\\times2,\\,2\\times3,\\,3\\times4,\\,4\\times5,\\,5\\times6$, so the next is $6\\times7=42$ (the differences 4, 6, 8, 10, 12 confirm it)."
                },
                {
                    id: "vr41",
                    text: "Find the next term: Z, W, T, Q, ?",
                    options: [
                        { key: "a", text: "M" },
                        { key: "b", text: "O" },
                        { key: "c", text: "N" },
                        { key: "d", text: "L" }
                    ],
                    answer: "c",
                    explanation: "The letters move 3 steps back through the alphabet: Z(26) → W(23) → T(20) → Q(17) → N(14)."
                },
                {
                    id: "vr42",
                    text: "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
                    options: [
                        { key: "a", text: "Sister" },
                        { key: "b", text: "Aunt" },
                        { key: "c", text: "Grandmother" },
                        { key: "d", text: "Mother" }
                    ],
                    answer: "d",
                    explanation: "The only daughter of the woman's own mother is the woman herself. So the man's mother is the woman — she is his mother."
                },
                {
                    id: "vr43",
                    text: "A and B are siblings. C is A's father. D is C's sister. E is D's son. How is E related to B?",
                    options: [
                        { key: "a", text: "Cousin" },
                        { key: "b", text: "Nephew" },
                        { key: "c", text: "Brother" },
                        { key: "d", text: "Uncle" }
                    ],
                    answer: "a",
                    explanation: "C is the father of both A and B. D, being C's sister, is their paternal aunt, and E, D's son, is therefore the cousin of both A and B."
                },
                {
                    id: "vr44",
                    text: "A man walks 6 km north and then 8 km east. How far is he from his starting point?",
                    options: [
                        { key: "a", text: "14 km" },
                        { key: "b", text: "10 km" },
                        { key: "c", text: "8 km" },
                        { key: "d", text: "48 km" }
                    ],
                    answer: "b",
                    explanation: "The two legs of the walk are perpendicular, so the direct distance is the hypotenuse: $\\sqrt{6^2+8^2}=\\sqrt{100}=10$ km."
                },
                {
                    id: "vr45",
                    text: "In a class, Anita ranks 8th from the top and 15th from the bottom in a subject. How many students are in the class?",
                    options: [
                        { key: "a", text: "23" },
                        { key: "b", text: "21" },
                        { key: "c", text: "22" },
                        { key: "d", text: "24" }
                    ],
                    answer: "c",
                    explanation: "Total students = (rank from top) + (rank from bottom) − 1 = 8 + 15 − 1 = 22."
                },
                {
                    id: "vr46",
                    text: "Statements: No injection is painless. Some medicines are injections. Conclusions: I. Some medicines are not painless. II. All medicines are injections. Which follows?",
                    options: [
                        { key: "a", text: "Only II follows" },
                        { key: "b", text: "Both follow" },
                        { key: "c", text: "Neither follows" },
                        { key: "d", text: "Only I follows" }
                    ],
                    answer: "d",
                    explanation: "Since no injection is painless, the medicines that are also injections must be painful, so some medicines are not painless (I). II wrongly stretches 'some' into 'all' and does not follow."
                },
                {
                    id: "vr47",
                    text: "Statements: Some injections are painful. All painful things are avoided. Conclusions: I. Some injections are avoided. II. All injections are avoided. Which follows?",
                    options: [
                        { key: "a", text: "Only I follows" },
                        { key: "b", text: "Only II follows" },
                        { key: "c", text: "Both follow" },
                        { key: "d", text: "Neither follows" }
                    ],
                    answer: "a",
                    explanation: "The injections that are painful must be avoided, so some injections are avoided (I). Since only 'some' injections were said to be painful, II overgeneralises and does not follow."
                },
                {
                    id: "vr48",
                    text: "Statement: A library notice reads, \"Please maintain silence.\" Assumptions: I. Visitors might otherwise make noise. II. Visitors can read and understand the notice. Which assumption(s) is/are implicit?",
                    options: [
                        { key: "a", text: "Only I" },
                        { key: "b", text: "Both I and II" },
                        { key: "c", text: "Only II" },
                        { key: "d", text: "Neither I nor II" }
                    ],
                    answer: "b",
                    explanation: "A notice is put up only if the unwanted behaviour might otherwise occur (I) and only if the intended readers can understand it (II); both are necessarily assumed."
                },
                {
                    id: "vr49",
                    text: "Five friends P, Q, R, S and T sit in a row facing north. Q is second to the left of R. S sits immediately to the right of R. T sits between Q and S. Only one person sits to the left of Q. Who sits in the middle of the row?",
                    options: [
                        { key: "a", text: "P" },
                        { key: "b", text: "Q" },
                        { key: "c", text: "T" },
                        { key: "d", text: "R" }
                    ],
                    answer: "c",
                    explanation: "Only one person left of Q fixes Q at position 2, so R (= Q + 2) is at 4 and S (= R + 1) is at 5. T, between Q and S, must take position 3 (4 is taken by R), leaving P at position 1. Order: P, Q, T, R, S — T is in the middle."
                },
                {
                    id: "vr50",
                    text: "Which number does not belong with the others: 121, 144, 169, 195?",
                    options: [
                        { key: "a", text: "144" },
                        { key: "b", text: "169" },
                        { key: "c", text: "121" },
                        { key: "d", text: "195" }
                    ],
                    answer: "d",
                    explanation: "$121=11^2$, $144=12^2$ and $169=13^2$ are perfect squares, but 195 lies between $13^2(169)$ and $14^2(196)$ and is not a perfect square."
                }
            ]
        }
    ]
};

/* ----------------------------------------------------------------
   DAY 15 syllabus map — Subject → Topic → Sub-topic → [question ids].
   Powers the collapsible chapter-wise distribution on the results
   screen (same drill-down Day 14 uses). Chemistry follows the CEE
   weightage (Physical 17 · Inorganic 10 · Organic 17 · Applied 3 ·
   Analytical 3); Verbal Reasoning is grouped by question type.
   Every one of the 100 question ids appears exactly once.
   ---------------------------------------------------------------- */
const DAY15_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Stoichiometry & Mole Concept", ids: ["ch1", "ch2"] },
            { name: "Atomic Structure", ids: ["ch3", "ch4"] },
            { name: "Periodic Properties", ids: ["ch5"] },
            { name: "Nuclear Chemistry", ids: ["ch6"] },
            { name: "Chemical Bonding & Shapes", ids: ["ch7"] },
            { name: "Redox & Equivalent Concept", ids: ["ch8"] },
            { name: "States of Matter (Gases)", ids: ["ch9"] },
            { name: "Solid State", ids: ["ch10"] },
            { name: "Chemical Equilibrium", ids: ["ch11"] },
            { name: "Solutions & Concentration", ids: ["ch12"] },
            { name: "Ionic Equilibrium (Buffers)", ids: ["ch13"] },
            { name: "Chemical Kinetics", ids: ["ch14"] },
            { name: "Electrochemistry", ids: ["ch15", "ch16"] },
            { name: "Chemical Thermodynamics", ids: ["ch17"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Oxides & Ozone", ids: ["ch18", "ch19"] },
            { name: "Noble Metals (Aqua Regia)", ids: ["ch20"] },
            { name: "Metallurgy", ids: ["ch21", "ch22"] },
            { name: "Transition Elements", ids: ["ch23"] },
            { name: "Coordination Compounds", ids: ["ch24"] },
            { name: "Compounds of Metals", ids: ["ch25"] },
            { name: "Industrial Processes (Ostwald & Solvay)", ids: ["ch45", "ch46"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "Isomerism", ids: ["ch28"] },
            { name: "General Organic Chemistry", ids: ["ch29", "ch30"] },
            { name: "Hydrocarbons", ids: ["ch32", "ch33", "ch34"] },
            { name: "Aromatic Chemistry", ids: ["ch35"] },
            { name: "Haloalkanes & Haloarenes", ids: ["ch36", "ch37", "ch38"] },
            { name: "Alcohols, Phenols & Ethers", ids: ["ch39", "ch40"] },
            { name: "Carbonyl Compounds & Acids", ids: ["ch41", "ch42", "ch44"] },
            { name: "Amines", ids: ["ch43"] },
            { name: "Polymers", ids: ["ch47"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Biomolecules & Bio-inorganic", ids: ["ch26"] },
            { name: "Environmental Chemistry", ids: ["ch27"] },
            { name: "Chemistry of Fuels", ids: ["ch31"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Qualitative Analysis (Lassaigne)", ids: ["ch48"] },
            { name: "Functional-group Tests", ids: ["ch49"] },
            { name: "Volumetric Analysis (Iodometry)", ids: ["ch50"] }
        ] }
    ] },
    { subject: "MAT", accent: "slate", topics: [
        { topic: "Analogy & Classification", subs: [
            { name: "Verbal Analogy", ids: ["vr1", "vr2", "vr3", "vr15", "vr32", "vr33", "vr35", "vr36"] },
            { name: "Odd One Out", ids: ["vr4", "vr5", "vr14", "vr37", "vr38", "vr50"] },
            { name: "Word Formation", ids: ["vr11", "vr17"] }
        ] },
        { topic: "Coding & Series", subs: [
            { name: "Coding-Decoding", ids: ["vr6", "vr7", "vr12", "vr30", "vr39"] },
            { name: "Number & Letter Series", ids: ["vr8", "vr9", "vr10", "vr16", "vr40", "vr41"] },
            { name: "Logical Sequence", ids: ["vr13"] }
        ] },
        { topic: "Relations & Arrangements", subs: [
            { name: "Blood Relations", ids: ["vr18", "vr19", "vr20", "vr42", "vr43"] },
            { name: "Direction Sense", ids: ["vr21", "vr22", "vr44"] },
            { name: "Ranking & Order", ids: ["vr23", "vr24", "vr31", "vr45"] },
            { name: "Seating Arrangement", ids: ["vr29", "vr49"] }
        ] },
        { topic: "Logical Deduction", subs: [
            { name: "Syllogism", ids: ["vr25", "vr26", "vr27", "vr34", "vr46", "vr47"] },
            { name: "Statement & Assumption", ids: ["vr28", "vr48"] }
        ] }
    ] }
];
DAY15.syllabus = DAY15_SYLLABUS;

/* ============================================================
   DAY 16 — Chemistry (full CEE syllabus) + Reproductive System
   50 Chemistry MCQs following the official CEE weightage
   (Physical 17 · Inorganic 10 · Organic 17 · Applied 3 ·
   Analytical 3) + 50 human Reproductive System MCQs (organs,
   gametogenesis, ovarian & menstrual cycle) per the CEE syllabus.
   ============================================================ */
const DAY16 = {
    day: 16,
    title: "Day 16",
    subtitle: "Chemistry (Full Syllabus) + Reproductive System · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "chem16",
            name: "Chemistry (Full Syllabus)",
            subject: "Chemistry",
            accent: "amber",
            blurb: "50 syllabus-based questions on CEE weightage — physical 17 · inorganic 10 · organic 17 · applied 3 · analytical 3.",
            questions: [
                {
                    id: "ch51",
                    text: "The volume of oxygen at STP required for the complete combustion of 2.24 L of methane measured at STP is:",
                    options: [
                        { key: "a", text: "2.24 L" },
                        { key: "b", text: "4.48 L" },
                        { key: "c", text: "1.12 L" },
                        { key: "d", text: "8.96 L" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{CH_4+2O_2\\to CO_2+2H_2O}$. 2.24 L $=0.1$ mol $\\mathrm{CH_4}$ needs $0.2$ mol $\\mathrm{O_2}=0.2\\times22.4=4.48$ L at STP."
                },
                {
                    id: "ch52",
                    text: "An organic compound contains 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Its empirical formula is:",
                    options: [
                        { key: "a", text: "$\\mathrm{C_2H_4O_2}$" },
                        { key: "b", text: "$\\mathrm{CH_2O}$" },
                        { key: "c", text: "$\\mathrm{CHO}$" },
                        { key: "d", text: "$\\mathrm{C_2H_6O}$" }
                    ],
                    answer: "b",
                    explanation: "Divide by atomic masses: C $=40/12=3.33$, H $=6.7/1=6.7$, O $=53.3/16=3.33$. Simplest ratio $1:2:1$ gives $\\mathrm{CH_2O}$."
                },
                {
                    id: "ch53",
                    text: "The de-Broglie wavelength of an electron accelerated through a potential difference of 100 V is about:",
                    options: [
                        { key: "a", text: "12.3 Å" },
                        { key: "b", text: "1.23 Å" },
                        { key: "c", text: "0.123 Å" },
                        { key: "d", text: "122.7 Å" }
                    ],
                    answer: "b",
                    explanation: "$\\lambda=\\dfrac{12.27}{\\sqrt{V}}$ Å $=\\dfrac{12.27}{\\sqrt{100}}=1.23$ Å."
                },
                {
                    id: "ch54",
                    text: "The maximum number of electrons that can be accommodated in a subshell with quantum numbers $n=3,\\ l=2$ is:",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "10" },
                        { key: "c", text: "2" },
                        { key: "d", text: "14" }
                    ],
                    answer: "b",
                    explanation: "$l=2$ is the d subshell with $2l+1=5$ orbitals; each holds 2 electrons, so the maximum is 10."
                },
                {
                    id: "ch55",
                    text: "Among the isoelectronic species $\\mathrm{O^{2-}}$, $\\mathrm{F^{-}}$, $\\mathrm{Na^{+}}$ and $\\mathrm{Mg^{2+}}$, the smallest in size is:",
                    options: [
                        { key: "a", text: "$\\mathrm{O^{2-}}$" },
                        { key: "b", text: "$\\mathrm{F^{-}}$" },
                        { key: "c", text: "$\\mathrm{Na^{+}}$" },
                        { key: "d", text: "$\\mathrm{Mg^{2+}}$" }
                    ],
                    answer: "d",
                    explanation: "All have 10 electrons; size decreases as nuclear charge increases, so $\\mathrm{Mg^{2+}}$ (Z = 12) is the smallest."
                },
                {
                    id: "ch56",
                    text: "The hybridisation of the sulphur atom and the shape of the $\\mathrm{SF_6}$ molecule are:",
                    options: [
                        { key: "a", text: "$sp^3$, tetrahedral" },
                        { key: "b", text: "$sp^3d$, trigonal bipyramidal" },
                        { key: "c", text: "$sp^3d^2$, octahedral" },
                        { key: "d", text: "$sp^3d^2$, square planar" }
                    ],
                    answer: "c",
                    explanation: "Six bond pairs and no lone pair around S give $sp^3d^2$ hybridisation and a regular octahedral shape."
                },
                {
                    id: "ch57",
                    text: "The oxidation number of chromium in the dichromate ion $\\mathrm{Cr_2O_7^{2-}}$ is:",
                    options: [
                        { key: "a", text: "+3" },
                        { key: "b", text: "+7" },
                        { key: "c", text: "+6" },
                        { key: "d", text: "+12" }
                    ],
                    answer: "c",
                    explanation: "$2x+7(-2)=-2\\Rightarrow 2x=12\\Rightarrow x=+6$ for each chromium."
                },
                {
                    id: "ch58",
                    text: "At constant temperature a gas occupies 500 mL at 1 atm. Its volume when the pressure is raised to 2.5 atm is:",
                    options: [
                        { key: "a", text: "200 mL" },
                        { key: "b", text: "1250 mL" },
                        { key: "c", text: "250 mL" },
                        { key: "d", text: "125 mL" }
                    ],
                    answer: "a",
                    explanation: "Boyle's law $P_1V_1=P_2V_2$: $V_2=\\dfrac{500\\times1}{2.5}=200$ mL."
                },
                {
                    id: "ch59",
                    text: "The number of atoms per unit cell in a body-centred cubic (bcc) lattice is:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "4" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "$8$ corners $\\times\\tfrac18 + 1$ body centre $=1+1=2$ atoms per unit cell."
                },
                {
                    id: "ch60",
                    text: "For $\\mathrm{N_2(g)+3H_2(g)\\rightleftharpoons 2NH_3(g)}$ at equilibrium, adding more $\\mathrm{NH_3}$ causes the equilibrium to shift:",
                    options: [
                        { key: "a", text: "to the right, forming more ammonia" },
                        { key: "b", text: "to the left, favouring the reactants" },
                        { key: "c", text: "not at all, since $K_c$ is constant" },
                        { key: "d", text: "forward and backward alternately" }
                    ],
                    answer: "b",
                    explanation: "By Le-Chatelier's principle, adding a product drives the equilibrium backward to consume the added $\\mathrm{NH_3}$."
                },
                {
                    id: "ch61",
                    text: "The molarity of a solution containing 9.8 g of $\\mathrm{H_2SO_4}$ (molar mass 98) in 500 mL of solution is:",
                    options: [
                        { key: "a", text: "0.1 M" },
                        { key: "b", text: "0.4 M" },
                        { key: "c", text: "0.2 M" },
                        { key: "d", text: "2 M" }
                    ],
                    answer: "c",
                    explanation: "Moles $=9.8/98=0.1$; molarity $=0.1/0.5=0.2$ M."
                },
                {
                    id: "ch62",
                    text: "The pH of a 0.001 M solution of HCl (assumed fully ionised) is:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "1" },
                        { key: "c", text: "3" },
                        { key: "d", text: "11" }
                    ],
                    answer: "c",
                    explanation: "HCl is a strong acid, so $[\\mathrm{H^+}]=10^{-3}$ M and $\\mathrm{pH}=-\\log(10^{-3})=3$."
                },
                {
                    id: "ch63",
                    text: "The unit of the rate constant of a zero-order reaction is:",
                    options: [
                        { key: "a", text: "$\\mathrm{s^{-1}}$" },
                        { key: "b", text: "$\\mathrm{mol\\,L^{-1}\\,s^{-1}}$" },
                        { key: "c", text: "$\\mathrm{L\\,mol^{-1}\\,s^{-1}}$" },
                        { key: "d", text: "$\\mathrm{mol^{-1}\\,L^{2}\\,s^{-1}}$" }
                    ],
                    answer: "b",
                    explanation: "For a zero-order reaction rate $=k$, so $k$ carries the units of rate, $\\mathrm{mol\\,L^{-1}\\,s^{-1}}$."
                },
                {
                    id: "ch64",
                    text: "The quantity of electricity needed to deposit one mole of aluminium during the electrolysis of molten alumina is:",
                    options: [
                        { key: "a", text: "1 F" },
                        { key: "b", text: "2 F" },
                        { key: "c", text: "3 F" },
                        { key: "d", text: "0.33 F" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{Al^{3+}+3e^-\\to Al}$ requires 3 faradays (3 mol of electrons) per mole of aluminium."
                },
                {
                    id: "ch65",
                    text: "The standard electrode potential assigned to the standard hydrogen electrode (SHE) is:",
                    options: [
                        { key: "a", text: "0.00 V" },
                        { key: "b", text: "+1.00 V" },
                        { key: "c", text: "−0.76 V" },
                        { key: "d", text: "+0.34 V" }
                    ],
                    answer: "a",
                    explanation: "The SHE is the reference electrode whose potential is defined as exactly 0.00 V at all temperatures."
                },
                {
                    id: "ch66",
                    text: "During the isothermal expansion of an ideal gas, the change in internal energy ($\\Delta U$) is:",
                    options: [
                        { key: "a", text: "positive" },
                        { key: "b", text: "negative" },
                        { key: "c", text: "zero" },
                        { key: "d", text: "equal to the work done" }
                    ],
                    answer: "c",
                    explanation: "The internal energy of an ideal gas depends only on temperature; at constant T, $\\Delta U=0$."
                },
                {
                    id: "ch67",
                    text: "When a radioactive nucleus emits a β-particle, its mass number (A) and atomic number (Z) change as follows:",
                    options: [
                        { key: "a", text: "A decreases by 4, Z decreases by 2" },
                        { key: "b", text: "A remains the same, Z increases by 1" },
                        { key: "c", text: "A remains the same, Z decreases by 1" },
                        { key: "d", text: "both A and Z remain unchanged" }
                    ],
                    answer: "b",
                    explanation: "In β⁻ decay a neutron becomes a proton plus an electron; the mass number is unchanged while the atomic number rises by 1."
                },
                {
                    id: "ch68",
                    text: "Heavy water used as a moderator in nuclear reactors is:",
                    options: [
                        { key: "a", text: "$\\mathrm{H_2O_2}$" },
                        { key: "b", text: "$\\mathrm{D_2O}$" },
                        { key: "c", text: "$\\mathrm{H_2^{18}O}$" },
                        { key: "d", text: "$\\mathrm{T_2O}$" }
                    ],
                    answer: "b",
                    explanation: "Heavy water is deuterium oxide, $\\mathrm{D_2O}$, in which ordinary hydrogen is replaced by its isotope deuterium."
                },
                {
                    id: "ch69",
                    text: "The depletion of the stratospheric ozone layer is caused chiefly by:",
                    options: [
                        { key: "a", text: "carbon dioxide" },
                        { key: "b", text: "methane" },
                        { key: "c", text: "chlorofluorocarbons (CFCs)" },
                        { key: "d", text: "sulphur dioxide" }
                    ],
                    answer: "c",
                    explanation: "CFCs release chlorine radicals in the stratosphere that catalytically destroy ozone; $\\mathrm{CO_2}$ and $\\mathrm{CH_4}$ are greenhouse gases, not the main ozone destroyers."
                },
                {
                    id: "ch70",
                    text: "In the brown-ring test for nitrate ions, the brown ring is due to the complex:",
                    options: [
                        { key: "a", text: "$\\mathrm{[Fe(H_2O)_5NO]^{2+}}$" },
                        { key: "b", text: "$\\mathrm{FeSO_4\\cdot7H_2O}$" },
                        { key: "c", text: "$\\mathrm{Fe_2(SO_4)_3}$" },
                        { key: "d", text: "$\\mathrm{[Fe(H_2O)_6]^{3+}}$" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{NO}$ liberated from the nitrate reacts with $\\mathrm{Fe^{2+}}$ to give the brown nitrosyl complex $\\mathrm{[Fe(H_2O)_5NO]^{2+}}$ at the acid–solution interface."
                },
                {
                    id: "ch71",
                    text: "The correct order of oxidising power of the halogens is:",
                    options: [
                        { key: "a", text: "$\\mathrm{I_2>Br_2>Cl_2>F_2}$" },
                        { key: "b", text: "$\\mathrm{F_2>Cl_2>Br_2>I_2}$" },
                        { key: "c", text: "$\\mathrm{Cl_2>F_2>Br_2>I_2}$" },
                        { key: "d", text: "$\\mathrm{F_2>Br_2>Cl_2>I_2}$" }
                    ],
                    answer: "b",
                    explanation: "Oxidising power decreases down the group as the standard reduction potential falls; fluorine is the strongest oxidiser among the halogens."
                },
                {
                    id: "ch72",
                    text: "The gas that turns acidified potassium dichromate paper green is:",
                    options: [
                        { key: "a", text: "$\\mathrm{CO_2}$" },
                        { key: "b", text: "$\\mathrm{SO_2}$" },
                        { key: "c", text: "$\\mathrm{H_2S}$" },
                        { key: "d", text: "$\\mathrm{NH_3}$" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{SO_2}$ reduces orange $\\mathrm{Cr_2O_7^{2-}}$ (Cr +6) to green $\\mathrm{Cr^{3+}}$; $\\mathrm{CO_2}$ shows no such reaction."
                },
                {
                    id: "ch73",
                    text: "In the extraction of iron in a blast furnace, the role of limestone (CaCO₃) is to:",
                    options: [
                        { key: "a", text: "reduce the iron oxide to iron" },
                        { key: "b", text: "remove silica as a fusible calcium-silicate slag" },
                        { key: "c", text: "act as the principal fuel" },
                        { key: "d", text: "supply the reducing gas carbon monoxide" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{CaCO_3\\to CaO+CO_2}$; the CaO combines with the acidic gangue $\\mathrm{SiO_2}$ to form $\\mathrm{CaSiO_3}$ (slag). Reduction of the ore is done by CO."
                },
                {
                    id: "ch74",
                    text: "Washing soda is chemically:",
                    options: [
                        { key: "a", text: "$\\mathrm{NaHCO_3}$" },
                        { key: "b", text: "$\\mathrm{NaOH}$" },
                        { key: "c", text: "$\\mathrm{Na_2CO_3\\cdot10H_2O}$" },
                        { key: "d", text: "anhydrous $\\mathrm{Na_2CO_3}$" }
                    ],
                    answer: "c",
                    explanation: "Washing soda is hydrated sodium carbonate, $\\mathrm{Na_2CO_3\\cdot10H_2O}$; baking soda is $\\mathrm{NaHCO_3}$."
                },
                {
                    id: "ch75",
                    text: "The number of unpaired electrons in the low-spin complex $\\mathrm{[Fe(CN)_6]^{4-}}$ is:",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "4" },
                        { key: "c", text: "2" },
                        { key: "d", text: "6" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{Fe^{2+}}$ is $d^6$; the strong-field $\\mathrm{CN^-}$ ligand gives low-spin $t_{2g}^6e_g^0$, so there are no unpaired electrons (diamagnetic)."
                },
                {
                    id: "ch76",
                    text: "Green ferrous sulphate crystals ($\\mathrm{FeSO_4\\cdot7H_2O}$) on strong heating finally leave a reddish-brown residue together with two gases. These products are:",
                    options: [
                        { key: "a", text: "$\\mathrm{Fe_2O_3}$, $\\mathrm{SO_2}$ and $\\mathrm{SO_3}$" },
                        { key: "b", text: "$\\mathrm{FeO}$ and $\\mathrm{SO_2}$ only" },
                        { key: "c", text: "$\\mathrm{FeS}$ and $\\mathrm{O_2}$" },
                        { key: "d", text: "$\\mathrm{Fe_3O_4}$ and $\\mathrm{SO_2}$" }
                    ],
                    answer: "a",
                    explanation: "After losing water, $\\mathrm{2FeSO_4\\to Fe_2O_3+SO_2+SO_3}$; the residue is reddish-brown ferric oxide."
                },
                {
                    id: "ch77",
                    text: "The central metal ions in chlorophyll and in haemoglobin are, respectively:",
                    options: [
                        { key: "a", text: "$\\mathrm{Fe^{2+}}$ and $\\mathrm{Mg^{2+}}$" },
                        { key: "b", text: "$\\mathrm{Mg^{2+}}$ and $\\mathrm{Fe^{2+}}$" },
                        { key: "c", text: "$\\mathrm{Ca^{2+}}$ and $\\mathrm{Fe^{2+}}$" },
                        { key: "d", text: "$\\mathrm{Mg^{2+}}$ and $\\mathrm{Co^{2+}}$" }
                    ],
                    answer: "b",
                    explanation: "Chlorophyll has a magnesium centre, while the haem of haemoglobin has an iron ($\\mathrm{Fe^{2+}}$) centre. Cobalt is central to vitamin $\\mathrm{B_{12}}$."
                },
                {
                    id: "ch78",
                    text: "The most stable free radical among the following is:",
                    options: [
                        { key: "a", text: "methyl radical" },
                        { key: "b", text: "benzyl radical" },
                        { key: "c", text: "primary ethyl radical" },
                        { key: "d", text: "vinyl radical" }
                    ],
                    answer: "b",
                    explanation: "The benzyl radical is stabilised by resonance delocalisation over the aromatic ring, making it the most stable; vinyl and methyl radicals are the least stable."
                },
                {
                    id: "ch79",
                    text: "Which of the following is the strongest acid?",
                    options: [
                        { key: "a", text: "acetic acid" },
                        { key: "b", text: "chloroacetic acid" },
                        { key: "c", text: "dichloroacetic acid" },
                        { key: "d", text: "trichloroacetic acid" }
                    ],
                    answer: "d",
                    explanation: "Electron-withdrawing Cl atoms (−I effect) stabilise the carboxylate ion; more chlorines give a stronger acid, so $\\mathrm{CCl_3COOH>CHCl_2COOH>CH_2ClCOOH>CH_3COOH}$."
                },
                {
                    id: "ch80",
                    text: "The IUPAC name of $\\mathrm{(CH_3)_2CHCH_2CHO}$ is:",
                    options: [
                        { key: "a", text: "2-methylbutanal" },
                        { key: "b", text: "3-methylbutanal" },
                        { key: "c", text: "isopentanal" },
                        { key: "d", text: "3-methylbutan-1-ol" }
                    ],
                    answer: "b",
                    explanation: "Numbering from the −CHO carbon gives a four-carbon chain (butanal) with a methyl branch on C-3, i.e. 3-methylbutanal."
                },
                {
                    id: "ch81",
                    text: "Sodium propanoate heated with soda lime gives mainly:",
                    options: [
                        { key: "a", text: "propane" },
                        { key: "b", text: "ethane" },
                        { key: "c", text: "methane" },
                        { key: "d", text: "propene" }
                    ],
                    answer: "b",
                    explanation: "Decarboxylation with soda lime removes the −COOH as carbonate, giving an alkane with one fewer carbon: propanoate → ethane."
                },
                {
                    id: "ch82",
                    text: "Addition of HBr to propene in the absence of peroxide gives predominantly:",
                    options: [
                        { key: "a", text: "2-bromopropane" },
                        { key: "b", text: "1-bromopropane" },
                        { key: "c", text: "1,2-dibromopropane" },
                        { key: "d", text: "propan-2-ol" }
                    ],
                    answer: "a",
                    explanation: "By Markovnikov's rule, $\\mathrm{H}$ adds to the carbon bearing more hydrogens and $\\mathrm{Br}$ to the more substituted carbon via the more stable 2° carbocation, giving 2-bromopropane."
                },
                {
                    id: "ch83",
                    text: "Acetylene passed into ammoniacal cuprous chloride solution gives a red precipitate of:",
                    options: [
                        { key: "a", text: "copper(I) acetylide" },
                        { key: "b", text: "cuprous carbide" },
                        { key: "c", text: "copper metal" },
                        { key: "d", text: "cupric acetylide" }
                    ],
                    answer: "a",
                    explanation: "The acidic terminal $\\equiv$C–H is replaced by copper(I) to give red $\\mathrm{Cu-C\\equiv C-Cu}$, a test for terminal alkynes."
                },
                {
                    id: "ch84",
                    text: "In the nitration of benzene with a mixture of concentrated $\\mathrm{HNO_3}$ and $\\mathrm{H_2SO_4}$, the attacking electrophile is:",
                    options: [
                        { key: "a", text: "$\\mathrm{NO^{+}}$" },
                        { key: "b", text: "$\\mathrm{NO_2^{+}}$" },
                        { key: "c", text: "$\\mathrm{NO_2^{-}}$" },
                        { key: "d", text: "$\\mathrm{HNO_3}$" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{H_2SO_4}$ protonates $\\mathrm{HNO_3}$, which loses water to form the nitronium ion $\\mathrm{NO_2^{+}}$, the electrophile in aromatic nitration."
                },
                {
                    id: "ch85",
                    text: "Which alkyl halide reacts fastest by an $\\mathrm{S_N1}$ mechanism?",
                    options: [
                        { key: "a", text: "n-butyl bromide" },
                        { key: "b", text: "ethyl bromide" },
                        { key: "c", text: "tert-butyl bromide" },
                        { key: "d", text: "methyl bromide" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{S_N1}$ rate depends on carbocation stability; the tertiary (tert-butyl) halide forms the most stable carbocation and reacts fastest."
                },
                {
                    id: "ch86",
                    text: "Warming a primary amine with chloroform and alcoholic KOH produces a foul-smelling isocyanide. This reaction is the:",
                    options: [
                        { key: "a", text: "Lassaigne's test" },
                        { key: "b", text: "carbylamine test" },
                        { key: "c", text: "iodoform test" },
                        { key: "d", text: "Hinsberg test" }
                    ],
                    answer: "b",
                    explanation: "The carbylamine (isocyanide) reaction is given only by primary amines with $\\mathrm{CHCl_3}$ and alcoholic KOH, producing offensive-smelling isocyanides."
                },
                {
                    id: "ch87",
                    text: "Which compound gives a positive iodoform test?",
                    options: [
                        { key: "a", text: "methanol" },
                        { key: "b", text: "ethanol" },
                        { key: "c", text: "diethyl ether" },
                        { key: "d", text: "propan-1-ol" }
                    ],
                    answer: "b",
                    explanation: "The iodoform test is positive for a $\\mathrm{CH_3CH(OH)-}$ or $\\mathrm{CH_3CO-}$ group; among these only ethanol qualifies."
                },
                {
                    id: "ch88",
                    text: "Phenol gives a characteristic colour with neutral ferric chloride solution. The colour is:",
                    options: [
                        { key: "a", text: "violet" },
                        { key: "b", text: "blood-red" },
                        { key: "c", text: "blue" },
                        { key: "d", text: "green" }
                    ],
                    answer: "a",
                    explanation: "Phenols form a violet-coloured iron–phenolate complex with neutral $\\mathrm{FeCl_3}$, a standard test for the phenolic group."
                },
                {
                    id: "ch89",
                    text: "Williamson's synthesis of ethers proceeds through which mechanism?",
                    options: [
                        { key: "a", text: "$\\mathrm{S_N1}$" },
                        { key: "b", text: "$\\mathrm{S_N2}$" },
                        { key: "c", text: "electrophilic addition" },
                        { key: "d", text: "free-radical substitution" }
                    ],
                    answer: "b",
                    explanation: "An alkoxide ion attacks the alkyl halide in a single $\\mathrm{S_N2}$ step, so unhindered primary halides give the best yields while 3° halides tend to eliminate."
                },
                {
                    id: "ch90",
                    text: "Which reagent distinguishes an aldehyde from a ketone?",
                    options: [
                        { key: "a", text: "2,4-dinitrophenylhydrazine" },
                        { key: "b", text: "sodium bisulphite" },
                        { key: "c", text: "Tollens' reagent" },
                        { key: "d", text: "Grignard reagent" }
                    ],
                    answer: "c",
                    explanation: "Aldehydes reduce Tollens' reagent to a silver mirror whereas ketones do not; 2,4-DNP and $\\mathrm{NaHSO_3}$ react with both."
                },
                {
                    id: "ch91",
                    text: "Acetic acid heated with ethanol and a little concentrated $\\mathrm{H_2SO_4}$ gives a fruity-smelling ester. The reaction is called:",
                    options: [
                        { key: "a", text: "saponification" },
                        { key: "b", text: "esterification" },
                        { key: "c", text: "Kolbe's reaction" },
                        { key: "d", text: "Cannizzaro reaction" }
                    ],
                    answer: "b",
                    explanation: "Acid + alcohol with an acid catalyst gives ester + water (Fischer esterification); the product ethyl acetate has a fruity odour."
                },
                {
                    id: "ch92",
                    text: "Nitrobenzene reduced with tin and concentrated HCl gives:",
                    options: [
                        { key: "a", text: "nitrosobenzene" },
                        { key: "b", text: "phenylhydroxylamine" },
                        { key: "c", text: "aniline" },
                        { key: "d", text: "azobenzene" }
                    ],
                    answer: "c",
                    explanation: "Reduction of nitrobenzene in acidic medium (Sn/HCl) goes to completion, giving aniline; the nitroso and hydroxylamine stages appear only under milder conditions."
                },
                {
                    id: "ch93",
                    text: "Aniline is a weaker base than ethylamine because:",
                    options: [
                        { key: "a", text: "the lone pair on nitrogen is delocalised into the benzene ring" },
                        { key: "b", text: "it has a higher molecular mass" },
                        { key: "c", text: "it is only sparingly soluble in water" },
                        { key: "d", text: "the ring donates its electrons to nitrogen" }
                    ],
                    answer: "a",
                    explanation: "In aniline the nitrogen lone pair is conjugated with the ring, so it is less available for protonation; in ethylamine the lone pair is fully available and further enriched by the +I effect."
                },
                {
                    id: "ch94",
                    text: "A Grignard reagent reacts with a ketone and the product is hydrolysed. The alcohol obtained is:",
                    options: [
                        { key: "a", text: "a primary alcohol" },
                        { key: "b", text: "a secondary alcohol" },
                        { key: "c", text: "a tertiary alcohol" },
                        { key: "d", text: "a carboxylic acid" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{RMgX}$ adds to the ketone carbonyl and hydrolysis gives a tertiary alcohol (formaldehyde → 1°, other aldehydes → 2°, $\\mathrm{CO_2}$ → acid)."
                },
                {
                    id: "ch95",
                    text: "In the Contact process for sulphuric acid, the catalyst used to oxidise $\\mathrm{SO_2}$ to $\\mathrm{SO_3}$ is:",
                    options: [
                        { key: "a", text: "$\\mathrm{V_2O_5}$" },
                        { key: "b", text: "Pt–Rh gauze" },
                        { key: "c", text: "Fe with Mo promoter" },
                        { key: "d", text: "finely divided nickel" }
                    ],
                    answer: "a",
                    explanation: "$\\mathrm{2SO_2+O_2\\rightleftharpoons 2SO_3}$ uses vanadium pentoxide ($\\mathrm{V_2O_5}$); Pt–Rh belongs to Ostwald's process and Fe–Mo to Haber's process."
                },
                {
                    id: "ch96",
                    text: "Which of the following is a natural, biodegradable polymer?",
                    options: [
                        { key: "a", text: "polythene" },
                        { key: "b", text: "starch" },
                        { key: "c", text: "polyvinyl chloride" },
                        { key: "d", text: "nylon-6,6" }
                    ],
                    answer: "b",
                    explanation: "Starch is a natural polysaccharide and biodegradable; polythene, PVC and nylon are synthetic polymers that are largely non-biodegradable."
                },
                {
                    id: "ch97",
                    text: "The radioisotope most commonly used as a γ-source in the radiotherapy of cancer is:",
                    options: [
                        { key: "a", text: "carbon-14" },
                        { key: "b", text: "sodium-24" },
                        { key: "c", text: "cobalt-60" },
                        { key: "d", text: "phosphorus-32" }
                    ],
                    answer: "c",
                    explanation: "Cobalt-60 emits high-energy γ-rays used in external-beam radiotherapy; C-14 is used for dating and Na-24 for studying blood circulation."
                },
                {
                    id: "ch98",
                    text: "In Lassaigne's test, nitrogen present in an organic compound is detected by the appearance of a Prussian-blue colour, which is due to:",
                    options: [
                        { key: "a", text: "ferric ferrocyanide" },
                        { key: "b", text: "sodium thiocyanate" },
                        { key: "c", text: "ferrous sulphide" },
                        { key: "d", text: "ferric thiocyanate" }
                    ],
                    answer: "a",
                    explanation: "Fusion with sodium converts N to $\\mathrm{NaCN}$; with $\\mathrm{Fe^{2+}/Fe^{3+}}$ this yields Prussian blue, $\\mathrm{Fe_4[Fe(CN)_6]_3}$."
                },
                {
                    id: "ch99",
                    text: "A mixture of common salt and camphor is best separated by:",
                    options: [
                        { key: "a", text: "filtration" },
                        { key: "b", text: "sublimation" },
                        { key: "c", text: "fractional distillation" },
                        { key: "d", text: "crystallisation" }
                    ],
                    answer: "b",
                    explanation: "Camphor sublimes on gentle heating while sodium chloride does not, so sublimation cleanly separates the two solids."
                },
                {
                    id: "ch100",
                    text: "In the titration of acetic acid (a weak acid) against sodium hydroxide (a strong base), the most suitable indicator is:",
                    options: [
                        { key: "a", text: "phenolphthalein" },
                        { key: "b", text: "methyl orange" },
                        { key: "c", text: "methyl red" },
                        { key: "d", text: "litmus" }
                    ],
                    answer: "a",
                    explanation: "The equivalence point of a weak-acid–strong-base titration is slightly basic (pH ≈ 8–9), which matches phenolphthalein's range (8.3–10.0); methyl orange changes colour in the acidic region."
                }
            ]
        },
        {
            id: "repro16",
            name: "Reproductive System",
            subject: "Zoology",
            accent: "rose",
            blurb: "50 questions on the human reproductive system — organs, gametogenesis, ovarian & menstrual cycle.",
            questions: [
                {
                    id: "rs1",
                    text: "In the human male, sperms are produced in the:",
                    options: [
                        { key: "a", text: "epididymis" },
                        { key: "b", text: "prostate gland" },
                        { key: "c", text: "seminiferous tubules of the testis" },
                        { key: "d", text: "vas deferens" }
                    ],
                    answer: "c",
                    explanation: "Spermatogenesis takes place in the walls of the seminiferous tubules of the testes; the epididymis only stores and matures the sperm."
                },
                {
                    id: "rs2",
                    text: "The testes lie outside the abdominal cavity in the scrotum because spermatogenesis requires a temperature:",
                    options: [
                        { key: "a", text: "equal to the core body temperature" },
                        { key: "b", text: "about 2–3°C below body temperature" },
                        { key: "c", text: "about 5°C above body temperature" },
                        { key: "d", text: "close to 45°C" }
                    ],
                    answer: "b",
                    explanation: "The scrotum keeps the testes about 2–3°C cooler than the body core, a condition essential for normal sperm production."
                },
                {
                    id: "rs3",
                    text: "Sperms are stored and acquire motility mainly in the:",
                    options: [
                        { key: "a", text: "seminal vesicle" },
                        { key: "b", text: "urethra" },
                        { key: "c", text: "prostate" },
                        { key: "d", text: "epididymis" }
                    ],
                    answer: "d",
                    explanation: "Sperms leaving the seminiferous tubules mature, are stored in, and gain motility within the epididymis."
                },
                {
                    id: "rs4",
                    text: "The vas deferens carries sperms from the:",
                    options: [
                        { key: "a", text: "epididymis to the ejaculatory duct" },
                        { key: "b", text: "testis to the epididymis" },
                        { key: "c", text: "urethra to the penis" },
                        { key: "d", text: "seminal vesicle to the urethra" }
                    ],
                    answer: "a",
                    explanation: "The vas deferens conveys mature sperms from the tail of the epididymis to the ejaculatory duct, which opens into the urethra."
                },
                {
                    id: "rs5",
                    text: "The fructose-rich alkaline secretion that nourishes sperms and forms the major part of the semen is produced by the:",
                    options: [
                        { key: "a", text: "prostate gland" },
                        { key: "b", text: "seminal vesicles" },
                        { key: "c", text: "bulbourethral glands" },
                        { key: "d", text: "epididymis" }
                    ],
                    answer: "b",
                    explanation: "The seminal vesicles secrete a fructose-rich fluid that supplies energy to the sperm and makes up roughly 60% of the semen volume."
                },
                {
                    id: "rs6",
                    text: "Which gland encircles the upper part of the male urethra and adds a milky, slightly alkaline fluid to the semen?",
                    options: [
                        { key: "a", text: "Cowper's gland" },
                        { key: "b", text: "seminal vesicle" },
                        { key: "c", text: "prostate gland" },
                        { key: "d", text: "adrenal gland" }
                    ],
                    answer: "c",
                    explanation: "The single prostate gland surrounds the urethra at the base of the bladder and contributes a milky alkaline secretion to the semen."
                },
                {
                    id: "rs7",
                    text: "The secretion of the bulbourethral (Cowper's) glands mainly serves to:",
                    options: [
                        { key: "a", text: "lubricate and neutralise acidity in the urethra" },
                        { key: "b", text: "produce the male hormone testosterone" },
                        { key: "c", text: "store mature spermatozoa" },
                        { key: "d", text: "form the bulk of the seminal fructose" }
                    ],
                    answer: "a",
                    explanation: "Cowper's glands release a mucus-like pre-ejaculatory fluid that lubricates the urethra and neutralises traces of acidic urine."
                },
                {
                    id: "rs8",
                    text: "The ovaries are the primary female reproductive organs because they produce:",
                    options: [
                        { key: "a", text: "only ova" },
                        { key: "b", text: "only hormones" },
                        { key: "c", text: "ova and testosterone" },
                        { key: "d", text: "ova and the hormones oestrogen and progesterone" }
                    ],
                    answer: "d",
                    explanation: "The ovaries are dual organs: they release the female gametes (ova) and also secrete the hormones oestrogen and progesterone."
                },
                {
                    id: "rs9",
                    text: "The finger-like projections at the ovarian end of the oviduct that sweep the released ovum into the tube are the:",
                    options: [
                        { key: "a", text: "villi" },
                        { key: "b", text: "fimbriae" },
                        { key: "c", text: "cilia" },
                        { key: "d", text: "infundibular lobes" }
                    ],
                    answer: "b",
                    explanation: "The fimbriae are the fringed projections of the infundibulum that collect the ovulated ovum and guide it into the fallopian tube."
                },
                {
                    id: "rs10",
                    text: "The inner glandular, vascular lining of the uterus that is shed during menstruation is the:",
                    options: [
                        { key: "a", text: "myometrium" },
                        { key: "b", text: "perimetrium" },
                        { key: "c", text: "endometrium" },
                        { key: "d", text: "peritoneum" }
                    ],
                    answer: "c",
                    explanation: "The endometrium is the innermost uterine lining; it thickens each cycle and is shed as the menstrual flow if pregnancy does not occur."
                },
                {
                    id: "rs11",
                    text: "The narrow lower part of the uterus that projects into and opens into the vagina is the:",
                    options: [
                        { key: "a", text: "cervix" },
                        { key: "b", text: "fundus" },
                        { key: "c", text: "fallopian tube" },
                        { key: "d", text: "infundibulum" }
                    ],
                    answer: "a",
                    explanation: "The cervix is the narrow neck of the uterus that connects the uterine cavity to the vagina."
                },
                {
                    id: "rs12",
                    text: "In humans, fertilisation of the ovum normally occurs in the:",
                    options: [
                        { key: "a", text: "uterus" },
                        { key: "b", text: "ovary" },
                        { key: "c", text: "cervix" },
                        { key: "d", text: "ampulla of the fallopian tube" }
                    ],
                    answer: "d",
                    explanation: "Fertilisation usually takes place in the ampulla, the widest region of the fallopian tube, not in the uterus."
                },
                {
                    id: "rs13",
                    text: "After fertilisation, the blastocyst normally implants itself in the:",
                    options: [
                        { key: "a", text: "wall of the fallopian tube" },
                        { key: "b", text: "endometrium of the uterus" },
                        { key: "c", text: "cervix" },
                        { key: "d", text: "ovarian cortex" }
                    ],
                    answer: "b",
                    explanation: "The blastocyst embeds into the thick, prepared endometrium of the uterus; implantation elsewhere (e.g. in the tube) is an ectopic pregnancy."
                },
                {
                    id: "rs14",
                    text: "The corpus luteum is formed in the:",
                    options: [
                        { key: "a", text: "ovary, from the ruptured Graafian follicle" },
                        { key: "b", text: "uterus, from the endometrium" },
                        { key: "c", text: "fallopian tube, from the fimbriae" },
                        { key: "d", text: "placenta, after implantation" }
                    ],
                    answer: "a",
                    explanation: "After ovulation the empty Graafian follicle in the ovary is converted into the corpus luteum, which secretes progesterone."
                },
                {
                    id: "rs15",
                    text: "The formation of mature sperms from germ cells in the testis is called:",
                    options: [
                        { key: "a", text: "oogenesis" },
                        { key: "b", text: "spermiation" },
                        { key: "c", text: "spermatogenesis" },
                        { key: "d", text: "capacitation" }
                    ],
                    answer: "c",
                    explanation: "Spermatogenesis is the whole sequence by which diploid spermatogonia give rise to haploid, motile spermatozoa."
                },
                {
                    id: "rs16",
                    text: "The correct sequence of stages in spermatogenesis is:",
                    options: [
                        { key: "a", text: "spermatogonium → spermatid → secondary spermatocyte → sperm" },
                        { key: "b", text: "spermatogonium → primary spermatocyte → secondary spermatocyte → spermatid → sperm" },
                        { key: "c", text: "primary spermatocyte → spermatogonium → spermatid → sperm" },
                        { key: "d", text: "spermatid → secondary spermatocyte → primary spermatocyte → sperm" }
                    ],
                    answer: "b",
                    explanation: "A spermatogonium enlarges to a primary spermatocyte, whose meiosis I gives secondary spermatocytes, meiosis II gives spermatids, which mature into sperms."
                },
                {
                    id: "rs17",
                    text: "During spermatogenesis, the chromosome number is halved when:",
                    options: [
                        { key: "a", text: "the spermatogonium divides mitotically" },
                        { key: "b", text: "the spermatid changes into a sperm" },
                        { key: "c", text: "the secondary spermatocyte forms spermatids" },
                        { key: "d", text: "the primary spermatocyte divides into secondary spermatocytes" }
                    ],
                    answer: "d",
                    explanation: "Meiosis I converts the diploid (2n) primary spermatocyte into two haploid (n) secondary spermatocytes — that is the reduction division."
                },
                {
                    id: "rs18",
                    text: "Within the seminiferous tubules, the cells that nourish and support the developing sperms are the:",
                    options: [
                        { key: "a", text: "Sertoli cells" },
                        { key: "b", text: "Leydig cells" },
                        { key: "c", text: "germ cells" },
                        { key: "d", text: "chromaffin cells" }
                    ],
                    answer: "a",
                    explanation: "Sertoli (nurse) cells provide nutrition and support to the developing germ cells and also secrete the hormone inhibin."
                },
                {
                    id: "rs19",
                    text: "The interstitial cells of Leydig, lying between the seminiferous tubules, secrete:",
                    options: [
                        { key: "a", text: "inhibin" },
                        { key: "b", text: "testosterone" },
                        { key: "c", text: "oestrogen" },
                        { key: "d", text: "follicle-stimulating hormone" }
                    ],
                    answer: "b",
                    explanation: "The Leydig (interstitial) cells produce the male sex hormone testosterone under the influence of luteinising hormone (ICSH)."
                },
                {
                    id: "rs20",
                    text: "The transformation of a non-motile spermatid into a motile spermatozoon is called:",
                    options: [
                        { key: "a", text: "spermiation" },
                        { key: "b", text: "capacitation" },
                        { key: "c", text: "spermiogenesis" },
                        { key: "d", text: "spermatogenesis" }
                    ],
                    answer: "c",
                    explanation: "Spermiogenesis is the metamorphosis of the rounded spermatid into a streamlined, flagellated sperm; the later release into the tubule lumen is spermiation."
                },
                {
                    id: "rs21",
                    text: "The acrosome at the tip of the sperm head is derived from the ________ and contains ________.",
                    options: [
                        { key: "a", text: "Golgi complex; hydrolytic enzymes" },
                        { key: "b", text: "mitochondria; ATP" },
                        { key: "c", text: "centriole; DNA" },
                        { key: "d", text: "nucleus; hormones" }
                    ],
                    answer: "a",
                    explanation: "The cap-like acrosome forms from the Golgi complex and stores hydrolytic enzymes (such as hyaluronidase) that help the sperm penetrate the egg."
                },
                {
                    id: "rs22",
                    text: "In human females, oogenesis begins:",
                    options: [
                        { key: "a", text: "during embryonic (fetal) life, before birth" },
                        { key: "b", text: "at puberty" },
                        { key: "c", text: "at the time of each ovulation" },
                        { key: "d", text: "only after fertilisation" }
                    ],
                    answer: "a",
                    explanation: "Oogonia multiply and enter meiosis I during fetal life; the primary oocytes then stay arrested until puberty, when the cycle resumes."
                },
                {
                    id: "rs23",
                    text: "The correct sequence of oogenesis is:",
                    options: [
                        { key: "a", text: "oogonium → secondary oocyte → primary oocyte → ovum" },
                        { key: "b", text: "oogonium → primary oocyte → secondary oocyte → ovum" },
                        { key: "c", text: "primary oocyte → oogonium → ovum → polar body" },
                        { key: "d", text: "oogonium → ovum → primary oocyte → secondary oocyte" }
                    ],
                    answer: "b",
                    explanation: "An oogonium becomes a primary oocyte (2n); meiosis I gives a secondary oocyte (n) plus a polar body, and meiosis II gives the ovum."
                },
                {
                    id: "rs24",
                    text: "The secondary oocyte released at ovulation remains arrested, until fertilisation, in the stage of:",
                    options: [
                        { key: "a", text: "prophase I" },
                        { key: "b", text: "anaphase I" },
                        { key: "c", text: "metaphase II" },
                        { key: "d", text: "telophase II" }
                    ],
                    answer: "c",
                    explanation: "The secondary oocyte is ovulated while arrested at metaphase of meiosis II and completes the division only if a sperm penetrates it."
                },
                {
                    id: "rs25",
                    text: "One primary oocyte completing oogenesis finally produces:",
                    options: [
                        { key: "a", text: "one functional ovum and three polar bodies" },
                        { key: "b", text: "four functional ova" },
                        { key: "c", text: "two ova and two polar bodies" },
                        { key: "d", text: "four polar bodies and no ovum" }
                    ],
                    answer: "a",
                    explanation: "Unequal cytoplasmic divisions give a single large functional ovum and three tiny polar bodies, unlike spermatogenesis which gives four sperms."
                },
                {
                    id: "rs26",
                    text: "The polar bodies formed during oogenesis are:",
                    options: [
                        { key: "a", text: "the actual functional gametes" },
                        { key: "b", text: "cells that become the placenta" },
                        { key: "c", text: "cells that form the corpus luteum" },
                        { key: "d", text: "small, non-functional cells that soon degenerate" }
                    ],
                    answer: "d",
                    explanation: "Polar bodies receive very little cytoplasm, are non-functional and soon degenerate; they ensure the ovum keeps most of the cytoplasm and reserves."
                },
                {
                    id: "rs27",
                    text: "The cytoplasmic divisions in oogenesis are unequal so that:",
                    options: [
                        { key: "a", text: "all four cells are of equal size" },
                        { key: "b", text: "the ovum retains most of the cytoplasm and stored food" },
                        { key: "c", text: "the polar bodies receive most of the cytoplasm" },
                        { key: "d", text: "no cytoplasm is passed to the ovum" }
                    ],
                    answer: "b",
                    explanation: "Unequal cleavage concentrates the cytoplasm and nutrient reserves in the single ovum, equipping it to support early development of the embryo."
                },
                {
                    id: "rs28",
                    text: "A key difference between spermatogenesis and oogenesis is that:",
                    options: [
                        { key: "a", text: "oogenesis requires meiosis but spermatogenesis does not" },
                        { key: "b", text: "sperms are diploid while ova are haploid" },
                        { key: "c", text: "one primary oocyte forms one ovum whereas one primary spermatocyte forms four sperms" },
                        { key: "d", text: "oogenesis occurs in the testis" }
                    ],
                    answer: "c",
                    explanation: "Both use meiosis and give haploid gametes, but one primary oocyte yields a single functional ovum (plus polar bodies) while one primary spermatocyte yields four sperms."
                },
                {
                    id: "rs29",
                    text: "The fully mature ovarian follicle that ruptures to release the ovum is the:",
                    options: [
                        { key: "a", text: "Graafian follicle" },
                        { key: "b", text: "primordial follicle" },
                        { key: "c", text: "corpus albicans" },
                        { key: "d", text: "atretic follicle" }
                    ],
                    answer: "a",
                    explanation: "The Graafian (mature) follicle is the large, fluid-filled follicle that bursts at ovulation to release the secondary oocyte."
                },
                {
                    id: "rs30",
                    text: "In a typical 28-day cycle, ovulation occurs around day 14 and is triggered by a mid-cycle surge of:",
                    options: [
                        { key: "a", text: "follicle-stimulating hormone" },
                        { key: "b", text: "luteinising hormone (LH)" },
                        { key: "c", text: "progesterone" },
                        { key: "d", text: "inhibin" }
                    ],
                    answer: "b",
                    explanation: "A sharp mid-cycle surge of LH (against a background of high oestrogen) triggers rupture of the Graafian follicle around day 14."
                },
                {
                    id: "rs31",
                    text: "The hormone that mainly stimulates the growth and maturation of the ovarian follicles is:",
                    options: [
                        { key: "a", text: "luteinising hormone" },
                        { key: "b", text: "progesterone" },
                        { key: "c", text: "oxytocin" },
                        { key: "d", text: "follicle-stimulating hormone (FSH)" }
                    ],
                    answer: "d",
                    explanation: "FSH from the anterior pituitary stimulates a group of follicles to grow, one of which matures into the Graafian follicle."
                },
                {
                    id: "rs32",
                    text: "The corpus luteum develops from the ruptured Graafian follicle under the influence of:",
                    options: [
                        { key: "a", text: "luteinising hormone (LH)" },
                        { key: "b", text: "follicle-stimulating hormone" },
                        { key: "c", text: "oestrogen alone" },
                        { key: "d", text: "relaxin" }
                    ],
                    answer: "a",
                    explanation: "After ovulation, LH converts the emptied follicle into the corpus luteum, which then secretes progesterone."
                },
                {
                    id: "rs33",
                    text: "The corpus luteum secretes mainly the hormone:",
                    options: [
                        { key: "a", text: "follicle-stimulating hormone" },
                        { key: "b", text: "prolactin" },
                        { key: "c", text: "progesterone" },
                        { key: "d", text: "testosterone" }
                    ],
                    answer: "c",
                    explanation: "The corpus luteum secretes large amounts of progesterone (and some oestrogen), maintaining the endometrium for possible implantation."
                },
                {
                    id: "rs34",
                    text: "If fertilisation does not occur, the corpus luteum regresses into a whitish scar tissue called the:",
                    options: [
                        { key: "a", text: "corpus callosum" },
                        { key: "b", text: "corpus cavernosum" },
                        { key: "c", text: "corpus albicans" },
                        { key: "d", text: "corpus striatum" }
                    ],
                    answer: "c",
                    explanation: "Without pregnancy the corpus luteum degenerates into the non-functional corpus albicans; progesterone then falls and menstruation follows."
                },
                {
                    id: "rs35",
                    text: "The phase of the ovarian cycle that follows ovulation and is dominated by the corpus luteum is the:",
                    options: [
                        { key: "a", text: "follicular phase" },
                        { key: "b", text: "luteal phase" },
                        { key: "c", text: "menstrual phase" },
                        { key: "d", text: "proliferative phase" }
                    ],
                    answer: "b",
                    explanation: "The luteal (post-ovulatory) phase is characterised by an active corpus luteum and high progesterone; the follicular phase precedes ovulation."
                },
                {
                    id: "rs36",
                    text: "The average length of the human menstrual cycle is about:",
                    options: [
                        { key: "a", text: "28 days" },
                        { key: "b", text: "14 days" },
                        { key: "c", text: "40 days" },
                        { key: "d", text: "7 days" }
                    ],
                    answer: "a",
                    explanation: "The menstrual cycle averages about 28 days, though a normal range of 21–35 days is common."
                },
                {
                    id: "rs37",
                    text: "Menstrual bleeding (days 1–5) results from the breakdown of the endometrium following:",
                    options: [
                        { key: "a", text: "a rise in FSH" },
                        { key: "b", text: "a surge of LH" },
                        { key: "c", text: "a rise in oestrogen" },
                        { key: "d", text: "a fall in progesterone and oestrogen" }
                    ],
                    answer: "d",
                    explanation: "When the corpus luteum regresses, progesterone and oestrogen drop sharply; the unsupported endometrium breaks down, producing the menstrual flow."
                },
                {
                    id: "rs38",
                    text: "The proliferative (follicular) phase, during which the endometrium is rebuilt after menstruation, is driven mainly by:",
                    options: [
                        { key: "a", text: "progesterone" },
                        { key: "b", text: "oestrogen" },
                        { key: "c", text: "human chorionic gonadotropin" },
                        { key: "d", text: "relaxin" }
                    ],
                    answer: "b",
                    explanation: "Rising oestrogen from the growing follicles stimulates repair and thickening (proliferation) of the endometrium."
                },
                {
                    id: "rs39",
                    text: "During the secretory (luteal) phase, the endometrium is kept thick and glandular chiefly by:",
                    options: [
                        { key: "a", text: "progesterone" },
                        { key: "b", text: "follicle-stimulating hormone" },
                        { key: "c", text: "oestrogen only" },
                        { key: "d", text: "oxytocin" }
                    ],
                    answer: "a",
                    explanation: "Progesterone from the corpus luteum makes the endometrium secretory and richly vascular, preparing it for implantation."
                },
                {
                    id: "rs40",
                    text: "The correct hormonal control sequence of the female reproductive cycle is:",
                    options: [
                        { key: "a", text: "pituitary → hypothalamus → ovary" },
                        { key: "b", text: "ovary → hypothalamus → pituitary" },
                        { key: "c", text: "hypothalamus (GnRH) → anterior pituitary (FSH, LH) → ovary (oestrogen, progesterone)" },
                        { key: "d", text: "adrenal → ovary → pituitary" }
                    ],
                    answer: "c",
                    explanation: "GnRH from the hypothalamus stimulates the anterior pituitary to release FSH and LH, which act on the ovary to secrete oestrogen and progesterone, with feedback control."
                },
                {
                    id: "rs41",
                    text: "The first menstruation, marking the onset of the reproductive phase at puberty, is called:",
                    options: [
                        { key: "a", text: "menarche" },
                        { key: "b", text: "menopause" },
                        { key: "c", text: "ovulation" },
                        { key: "d", text: "gestation" }
                    ],
                    answer: "a",
                    explanation: "Menarche is the first menstrual flow, occurring at puberty (usually 11–14 years), signalling the start of the reproductive period."
                },
                {
                    id: "rs42",
                    text: "The permanent cessation of the menstrual cycle, usually around 45–50 years of age, is termed:",
                    options: [
                        { key: "a", text: "menarche" },
                        { key: "b", text: "menopause" },
                        { key: "c", text: "amenorrhoea" },
                        { key: "d", text: "gestation" }
                    ],
                    answer: "b",
                    explanation: "Menopause is the natural end of menstrual cycling, occurring roughly between 45 and 50 years as ovarian function declines."
                },
                {
                    id: "rs43",
                    text: "If fertilisation occurs, menstruation is suspended because the corpus luteum is maintained by:",
                    options: [
                        { key: "a", text: "a fall in progesterone" },
                        { key: "b", text: "FSH from the pituitary" },
                        { key: "c", text: "prolactin from the placenta" },
                        { key: "d", text: "human chorionic gonadotropin (hCG)" }
                    ],
                    answer: "d",
                    explanation: "hCG from the developing embryo/trophoblast sustains the corpus luteum, so progesterone stays high, the endometrium is retained and menstruation stops."
                },
                {
                    id: "rs44",
                    text: "Fusion of a haploid sperm with a haploid ovum at fertilisation produces a:",
                    options: [
                        { key: "a", text: "diploid zygote" },
                        { key: "b", text: "haploid zygote" },
                        { key: "c", text: "diploid gamete" },
                        { key: "d", text: "haploid blastocyst" }
                    ],
                    answer: "a",
                    explanation: "Fertilisation combines the haploid (n) sperm and haploid (n) ovum, restoring the diploid (2n) chromosome number in the zygote."
                },
                {
                    id: "rs45",
                    text: "The enzyme released from the sperm acrosome that helps it penetrate the coverings of the ovum is:",
                    options: [
                        { key: "a", text: "amylase" },
                        { key: "b", text: "hyaluronidase" },
                        { key: "c", text: "pepsin" },
                        { key: "d", text: "lipase" }
                    ],
                    answer: "b",
                    explanation: "Acrosomal hyaluronidase (with other enzymes) dissolves the hyaluronic-acid-rich corona radiata and zona pellucida, letting the sperm reach the egg membrane."
                },
                {
                    id: "rs46",
                    text: "The hormone detected in the urine as the basis of most pregnancy tests is:",
                    options: [
                        { key: "a", text: "oestrogen" },
                        { key: "b", text: "luteinising hormone" },
                        { key: "c", text: "human chorionic gonadotropin (hCG)" },
                        { key: "d", text: "thyroxine" }
                    ],
                    answer: "c",
                    explanation: "hCG, produced soon after implantation, appears in the mother's urine and is the marker detected by common pregnancy test kits."
                },
                {
                    id: "rs47",
                    text: "Besides acting as an endocrine organ, the placenta also:",
                    options: [
                        { key: "a", text: "allows exchange of nutrients, gases and wastes between mother and foetus" },
                        { key: "b", text: "produces the ova" },
                        { key: "c", text: "stores the sperm" },
                        { key: "d", text: "directly mixes maternal and fetal blood" }
                    ],
                    answer: "a",
                    explanation: "The placenta secretes hormones (hCG, progesterone, oestrogen) and mediates exchange of nutrients, respiratory gases and wastes without direct mixing of maternal and fetal blood."
                },
                {
                    id: "rs48",
                    text: "The normal human gestation (pregnancy) period is approximately:",
                    options: [
                        { key: "a", text: "180 days" },
                        { key: "b", text: "365 days" },
                        { key: "c", text: "120 days" },
                        { key: "d", text: "280 days (about 9 months)" }
                    ],
                    answer: "d",
                    explanation: "Human gestation lasts about 280 days (40 weeks, roughly 9 months) counted from the last menstrual period to birth."
                },
                {
                    id: "rs49",
                    text: "The development of secondary sexual characters in females is brought about mainly by:",
                    options: [
                        { key: "a", text: "progesterone" },
                        { key: "b", text: "oestrogen" },
                        { key: "c", text: "testosterone" },
                        { key: "d", text: "oxytocin" }
                    ],
                    answer: "b",
                    explanation: "Oestrogen, secreted by the ovarian follicles, promotes the female secondary sexual characters such as breast development and widening of the pelvis."
                },
                {
                    id: "rs50",
                    text: "Progesterone is essential for the continuation of pregnancy mainly because it:",
                    options: [
                        { key: "a", text: "maintains the endometrium and supports pregnancy" },
                        { key: "b", text: "triggers ovulation" },
                        { key: "c", text: "causes menstruation" },
                        { key: "d", text: "stimulates follicle growth" }
                    ],
                    answer: "a",
                    explanation: "Progesterone maintains the thick secretory endometrium and suppresses uterine contractions, sustaining pregnancy; a fall in progesterone triggers menstruation."
                }
            ]
        }
    ]
};
/* ----------------------------------------------------------------
   DAY 16 syllabus map — Subject → Topic → Sub-topic → [ids].
   Powers the collapsible chapter-wise distribution on the results
   screen. Chemistry follows the CEE weightage (Physical 17 ·
   Inorganic 10 · Organic 17 · Applied 3 · Analytical 3); the
   Reproductive System is grouped by organs, gametogenesis, cycles
   and fertilisation. Every one of the 100 ids appears exactly once.
   ---------------------------------------------------------------- */
const DAY16_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Stoichiometry & Mole Concept", ids: ["ch51", "ch52"] },
            { name: "Atomic Structure", ids: ["ch53", "ch54"] },
            { name: "Periodic Properties", ids: ["ch55"] },
            { name: "Chemical Bonding & Shapes", ids: ["ch56"] },
            { name: "Redox Reactions", ids: ["ch57"] },
            { name: "States of Matter (Gases)", ids: ["ch58"] },
            { name: "Solid State", ids: ["ch59"] },
            { name: "Chemical Equilibrium", ids: ["ch60"] },
            { name: "Volumetric Analysis (Concentration)", ids: ["ch61"] },
            { name: "Ionic Equilibrium", ids: ["ch62"] },
            { name: "Chemical Kinetics", ids: ["ch63"] },
            { name: "Electrochemistry", ids: ["ch64", "ch65"] },
            { name: "Chemical Thermodynamics", ids: ["ch66"] },
            { name: "Nuclear Chemistry", ids: ["ch67"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Hydrogen & p-Block Non-metals", ids: ["ch68", "ch69"] },
            { name: "Nitrogen Family & Halogens", ids: ["ch70", "ch71"] },
            { name: "Sulphur Compounds", ids: ["ch72"] },
            { name: "Metallurgy & s-Block", ids: ["ch73", "ch74"] },
            { name: "Transition Metals & Coordination", ids: ["ch75", "ch76"] },
            { name: "Bio-inorganic Chemistry", ids: ["ch77"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "General Organic Chemistry", ids: ["ch78", "ch79"] },
            { name: "IUPAC Nomenclature", ids: ["ch80"] },
            { name: "Hydrocarbons", ids: ["ch81", "ch82", "ch83"] },
            { name: "Aromatic Chemistry", ids: ["ch84"] },
            { name: "Haloalkanes & Haloarenes", ids: ["ch85", "ch86"] },
            { name: "Alcohols & Phenols", ids: ["ch87", "ch88"] },
            { name: "Ethers", ids: ["ch89"] },
            { name: "Aldehydes & Ketones", ids: ["ch90"] },
            { name: "Carboxylic Acids & Esters", ids: ["ch91"] },
            { name: "Nitro Compounds", ids: ["ch92"] },
            { name: "Amines", ids: ["ch93"] },
            { name: "Organometallics (Grignard)", ids: ["ch94"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Manufacturing Processes", ids: ["ch95"] },
            { name: "Chemistry in Everyday Life", ids: ["ch96"] },
            { name: "Applied Radiochemistry", ids: ["ch97"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Chemical Tests (Lassaigne)", ids: ["ch98"] },
            { name: "Separation Techniques", ids: ["ch99"] },
            { name: "Titrations", ids: ["ch100"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Reproductive Organs", subs: [
            { name: "Male Reproductive System", ids: ["rs1", "rs2", "rs3", "rs4", "rs5", "rs6", "rs7"] },
            { name: "Female Reproductive System", ids: ["rs8", "rs9", "rs10", "rs11", "rs12", "rs13", "rs14"] }
        ] },
        { topic: "Gametogenesis", subs: [
            { name: "Spermatogenesis", ids: ["rs15", "rs16", "rs17", "rs18", "rs19", "rs20", "rs21"] },
            { name: "Oogenesis", ids: ["rs22", "rs23", "rs24", "rs25", "rs26", "rs27", "rs28"] }
        ] },
        { topic: "Ovarian & Menstrual Cycle", subs: [
            { name: "Ovarian Cycle & Follicles", ids: ["rs29", "rs30", "rs31", "rs32", "rs33", "rs34", "rs35"] },
            { name: "Menstrual Cycle", ids: ["rs36", "rs37", "rs38", "rs39", "rs40", "rs41", "rs42", "rs43"] }
        ] },
        { topic: "Fertilisation & Reproductive Health", subs: [
            { name: "Fertilisation & Early Development", ids: ["rs44", "rs45", "rs46", "rs47", "rs48"] },
            { name: "Reproductive Hormones & Health", ids: ["rs49", "rs50"] }
        ] }
    ] }
];
DAY16.syllabus = DAY16_SYLLABUS;

/* ============================================================
    DAY 17 — CEE-syllabus mixed test at IOE-style difficulty
    Chemistry follows the official 2026 CEE scope and weightage:
    Physical 17 · Inorganic 10 · Organic 17 · Applied 3 ·
    Analytical 3. The remaining sections are 10 human Reproductive
    System · 20 Properties of Triangle · 20 Limit, Continuity &
    Integration.
   ============================================================ */
const DAY17 = {
    day: 17,
    title: "Day 17",
    subtitle: "IOE-Level: Chemistry + Reproduction + Triangle + Calculus · 100 Q",
    durationMinutes: 90,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "chem17",
            name: "Chemistry (Full Syllabus)",
            subject: "Chemistry",
            accent: "amber",
            blurb: "50 questions from the official 2026 CEE scope and 17 · 10 · 17 · 3 · 3 weightage, written at harder IOE-style difficulty.",
            questions: [
                {
                    id: "ch101",
                    text: "14 g of $\\mathrm{CaO}$ is allowed to react with 22 g of $\\mathrm{CO_2}$ to form $\\mathrm{CaCO_3}$. The mass of $\\mathrm{CaCO_3}$ formed is (Ca = 40, C = 12, O = 16):",
                    options: [
                        { key: "a", text: "50 g" },
                        { key: "b", text: "25 g" },
                        { key: "c", text: "39 g" },
                        { key: "d", text: "18 g" }
                    ],
                    answer: "b",
                    explanation: "$\\mathrm{CaO+CO_2\\to CaCO_3}$. Moles: $\\mathrm{CaO}=14/56=0.25$, $\\mathrm{CO_2}=22/44=0.5$. $\\mathrm{CaO}$ is limiting, so $0.25$ mol $\\mathrm{CaCO_3}=0.25\\times100=25$ g."
                },
                {
                    id: "ch102",
                    text: "A gaseous hydrocarbon contains 85.7% carbon by mass and has a vapour density of 28. Its molecular formula is:",
                    options: [
                        { key: "a", text: "$\\mathrm{C_4H_8}$" },
                        { key: "b", text: "$\\mathrm{C_3H_6}$" },
                        { key: "c", text: "$\\mathrm{C_4H_{10}}$" },
                        { key: "d", text: "$\\mathrm{C_2H_4}$" }
                    ],
                    answer: "a",
                    explanation: "Molar mass $=2\\times28=56$. Carbon $=0.857\\times56\\approx48\\Rightarrow4$ C; hydrogen $=56-48=8\\Rightarrow8$ H. Formula $\\mathrm{C_4H_8}$."
                },
                {
                    id: "ch103",
                    text: "The energy of the electron in the ground state of the hydrogen atom is $-13.6$ eV. The energy required to remove the electron from the first excited state is:",
                    options: [
                        { key: "a", text: "13.6 eV" },
                        { key: "b", text: "10.2 eV" },
                        { key: "c", text: "1.51 eV" },
                        { key: "d", text: "3.4 eV" }
                    ],
                    answer: "d",
                    explanation: "$E_n=-13.6/n^2$ eV. First excited state $n=2\\Rightarrow E_2=-3.4$ eV, so the ionization energy from this level is $+3.4$ eV."
                },
                {
                    id: "ch104",
                    text: "The uncertainty in the velocity of an electron (mass $9.1\\times10^{-31}$ kg) is $3\\times10^{4}$ m/s. The minimum uncertainty in its position is about ($h=6.6\\times10^{-34}$ J·s):",
                    options: [
                        { key: "a", text: "$1.9\\times10^{-3}$ m" },
                        { key: "b", text: "$1.9\\times10^{-5}$ m" },
                        { key: "c", text: "$5.8\\times10^{-9}$ m" },
                        { key: "d", text: "$1.9\\times10^{-9}$ m" }
                    ],
                    answer: "d",
                    explanation: "$\\Delta x\\ge\\dfrac{h}{4\\pi m\\,\\Delta v}=\\dfrac{6.6\\times10^{-34}}{4\\pi(9.1\\times10^{-31})(3\\times10^{4})}\\approx1.9\\times10^{-9}$ m."
                },
                {
                    id: "ch105",
                    text: "The number of unpaired electrons present in the $\\mathrm{Fe^{2+}}$ ion (atomic number of Fe = 26) is:",
                    options: [
                        { key: "a", text: "6" },
                        { key: "b", text: "5" },
                        { key: "c", text: "4" },
                        { key: "d", text: "3" }
                    ],
                    answer: "c",
                    explanation: "Fe: $[\\mathrm{Ar}]3d^6 4s^2$. $\\mathrm{Fe^{2+}}$ loses the two $4s$ electrons giving $3d^6$, which has 4 unpaired electrons."
                },
                {
                    id: "ch106",
                    text: "The correct order of the first ionization energy for the elements B, C, N and O is:",
                    options: [
                        { key: "a", text: "B < C < N < O" },
                        { key: "b", text: "B < C < O < N" },
                        { key: "c", text: "O < N < C < B" },
                        { key: "d", text: "B < O < C < N" }
                    ],
                    answer: "b",
                    explanation: "IE rises across a period, but the half-filled $2p^3$ of N is extra stable, so IE(N) > IE(O). Hence B < C < O < N."
                },
                {
                    id: "ch107",
                    text: "The most suitable Williamson route for preparing tert-butyl methyl ether is:",
                    options: [
                        { key: "a", text: "sodium tert-butoxide + methyl iodide" },
                        { key: "b", text: "sodium methoxide + tert-butyl bromide" },
                        { key: "c", text: "sodium tert-butoxide + tert-butyl bromide" },
                        { key: "d", text: "sodium methoxide + tert-butyl alcohol" }
                    ],
                    answer: "a",
                    explanation: "Williamson synthesis proceeds by $\\mathrm{S_N2}$ attack, so the halide should be unhindered. Sodium tert-butoxide attacks methyl iodide to form $\\mathrm{(CH_3)_3COCH_3}$; a tertiary halide would undergo elimination."
                },
                {
                    id: "ch108",
                    text: "Which pair of molecules both have zero net dipole moment?",
                    options: [
                        { key: "a", text: "$\\mathrm{H_2O}$ and $\\mathrm{NH_3}$" },
                        { key: "b", text: "$\\mathrm{CO_2}$ and $\\mathrm{BF_3}$" },
                        { key: "c", text: "$\\mathrm{CO_2}$ and $\\mathrm{H_2O}$" },
                        { key: "d", text: "$\\mathrm{NH_3}$ and $\\mathrm{BF_3}$" }
                    ],
                    answer: "b",
                    explanation: "Linear $\\mathrm{CO_2}$ and trigonal-planar $\\mathrm{BF_3}$ are symmetric, so their bond dipoles cancel. Bent $\\mathrm{H_2O}$ and pyramidal $\\mathrm{NH_3}$ are polar."
                },
                {
                    id: "ch109",
                    text: "At the same temperature, the ratio of the root-mean-square speeds of hydrogen and oxygen molecules is:",
                    options: [
                        { key: "a", text: "1 : 4" },
                        { key: "b", text: "1 : 16" },
                        { key: "c", text: "16 : 1" },
                        { key: "d", text: "4 : 1" }
                    ],
                    answer: "d",
                    explanation: "$v_{rms}\\propto1/\\sqrt{M}$, so $\\dfrac{v_{H_2}}{v_{O_2}}=\\sqrt{\\dfrac{32}{2}}=\\sqrt{16}=4$, i.e. 4 : 1."
                },
                {
                    id: "ch110",
                    text: "$\\mathrm{C_2H_5MgBr}$ reacts with formaldehyde followed by acidic hydrolysis. The organic product is:",
                    options: [
                        { key: "a", text: "ethanol" },
                        { key: "b", text: "propan-1-ol" },
                        { key: "c", text: "propan-2-ol" },
                        { key: "d", text: "butan-1-ol" }
                    ],
                    answer: "b",
                    explanation: "A Grignard reagent adds its alkyl group to formaldehyde and, after hydrolysis, gives a primary alcohol with one additional carbon: $\\mathrm{C_2H_5CH_2OH}$ (propan-1-ol)."
                },
                {
                    id: "ch111",
                    text: "The standard enthalpies of formation of $\\mathrm{CO_2(g)}$ and $\\mathrm{CO(g)}$ are $-393.5$ and $-110.5$ kJ/mol. The enthalpy change for $\\mathrm{CO(g)+\\tfrac12O_2(g)\\to CO_2(g)}$ is:",
                    options: [
                        { key: "a", text: "$-504.0$ kJ" },
                        { key: "b", text: "$-283.0$ kJ" },
                        { key: "c", text: "$+283.0$ kJ" },
                        { key: "d", text: "$-110.5$ kJ" }
                    ],
                    answer: "b",
                    explanation: "$\\Delta H=\\Delta H_f(\\mathrm{CO_2})-\\Delta H_f(\\mathrm{CO})=-393.5-(-110.5)=-283.0$ kJ."
                },
                {
                    id: "ch112",
                    text: "A reaction has $\\Delta H=+30$ kJ/mol and $\\Delta S=+100$ J/K·mol. It becomes spontaneous above a temperature of:",
                    options: [
                        { key: "a", text: "30 K" },
                        { key: "b", text: "273 K" },
                        { key: "c", text: "300 K" },
                        { key: "d", text: "3000 K" }
                    ],
                    answer: "c",
                    explanation: "Spontaneous when $\\Delta G=\\Delta H-T\\Delta S<0\\Rightarrow T>\\dfrac{\\Delta H}{\\Delta S}=\\dfrac{30000}{100}=300$ K."
                },
                {
                    id: "ch113",
                    text: "For $\\mathrm{N_2(g)+3H_2(g)\\rightleftharpoons 2NH_3(g)}$, the correct relation between $K_p$ and $K_c$ is:",
                    options: [
                        { key: "a", text: "$K_p=K_c(RT)^{2}$" },
                        { key: "b", text: "$K_p=K_c(RT)^{-2}$" },
                        { key: "c", text: "$K_p=K_c(RT)$" },
                        { key: "d", text: "$K_p=K_c$" }
                    ],
                    answer: "b",
                    explanation: "$K_p=K_c(RT)^{\\Delta n}$ with $\\Delta n=2-(1+3)=-2$, giving $K_p=K_c(RT)^{-2}$."
                },
                {
                    id: "ch114",
                    text: "The pH of a buffer containing 0.2 M $\\mathrm{CH_3COOH}$ and 0.2 M $\\mathrm{CH_3COONa}$ is ($pK_a=4.74$):",
                    options: [
                        { key: "a", text: "4.74" },
                        { key: "b", text: "9.26" },
                        { key: "c", text: "2.37" },
                        { key: "d", text: "5.74" }
                    ],
                    answer: "a",
                    explanation: "Henderson equation: $pH=pK_a+\\log\\dfrac{[\\text{salt}]}{[\\text{acid}]}=4.74+\\log1=4.74$."
                },
                {
                    id: "ch115",
                    text: "The solubility product of $\\mathrm{Ag_2CrO_4}$ is $4\\times10^{-12}$. Its solubility in mol/L is:",
                    options: [
                        { key: "a", text: "$1\\times10^{-4}$" },
                        { key: "b", text: "$2\\times10^{-4}$" },
                        { key: "c", text: "$1\\times10^{-6}$" },
                        { key: "d", text: "$4\\times10^{-4}$" }
                    ],
                    answer: "a",
                    explanation: "$K_{sp}=(2s)^2(s)=4s^3=4\\times10^{-12}\\Rightarrow s^3=10^{-12}\\Rightarrow s=10^{-4}$ mol/L."
                },
                {
                    id: "ch116",
                    text: "For a first-order reaction, 75% of the reactant is consumed in 60 minutes. The half-life of the reaction is:",
                    options: [
                        { key: "a", text: "15 min" },
                        { key: "b", text: "20 min" },
                        { key: "c", text: "40 min" },
                        { key: "d", text: "30 min" }
                    ],
                    answer: "d",
                    explanation: "75% consumed leaves 25%, i.e. two half-lives (100→50→25%). So $2t_{1/2}=60\\Rightarrow t_{1/2}=30$ min."
                },
                {
                    id: "ch117",
                    text: "The rate constant of a reaction doubles when the temperature rises from 300 K to 310 K. The activation energy is closest to ($R=8.314$ J/K·mol):",
                    options: [
                        { key: "a", text: "12.4 kJ/mol" },
                        { key: "b", text: "26.6 kJ/mol" },
                        { key: "c", text: "53.6 kJ/mol" },
                        { key: "d", text: "107 kJ/mol" }
                    ],
                    answer: "c",
                    explanation: "$\\log\\dfrac{k_2}{k_1}=\\dfrac{E_a}{2.303R}\\left(\\dfrac{T_2-T_1}{T_1T_2}\\right)$. With $\\log2=0.301$, $E_a=\\dfrac{0.301\\times2.303\\times8.314\\times300\\times310}{10}\\approx53.6$ kJ/mol."
                },
                {
                    id: "ch118",
                    text: "For the cell $\\mathrm{Zn|Zn^{2+}(1\\,M)||Cu^{2+}(1\\,M)|Cu}$, $E^\\circ_{cell}=1.10$ V. If $[\\mathrm{Cu^{2+}}]$ is lowered to $0.01$ M, the EMF at 298 K becomes $\\left(\\dfrac{2.303RT}{F}=0.059\\right)$:",
                    options: [
                        { key: "a", text: "1.041 V" },
                        { key: "b", text: "1.159 V" },
                        { key: "c", text: "1.100 V" },
                        { key: "d", text: "0.982 V" }
                    ],
                    answer: "a",
                    explanation: "$E=E^\\circ-\\dfrac{0.059}{2}\\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Cu^{2+}}]}=1.10-0.0295\\log\\dfrac{1}{0.01}=1.10-0.059=1.041$ V."
                },
                {
                    id: "ch119",
                    text: "25.0 mL of an $\\mathrm{Fe^{2+}}$ solution requires 20.0 mL of 0.0200 M $\\mathrm{KMnO_4}$ for complete oxidation in acidic medium. The molarity of $\\mathrm{Fe^{2+}}$ is:",
                    options: [
                        { key: "a", text: "0.0160 M" },
                        { key: "b", text: "0.0400 M" },
                        { key: "c", text: "0.0800 M" },
                        { key: "d", text: "0.100 M" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{MnO_4^-+5Fe^{2+}+8H^+\\to Mn^{2+}+5Fe^{3+}+4H_2O}$. Moles $\\mathrm{MnO_4^-}=0.0200\\times0.0200=4.00\\times10^{-4}$, so moles $\\mathrm{Fe^{2+}}=2.00\\times10^{-3}$ and $M=0.00200/0.0250=0.0800$."
                },
                {
                    id: "ch120",
                    text: "Normal saline is 0.9% (w/v) $\\mathrm{NaCl}$. Assuming complete dissociation, its ideal osmotic pressure at 310 K is approximately ($M_{NaCl}=58.5$ g/mol, $R=0.0821$ L·atm/K·mol):",
                    options: [
                        { key: "a", text: "3.9 atm" },
                        { key: "b", text: "7.8 atm" },
                        { key: "c", text: "15.6 atm" },
                        { key: "d", text: "0.31 atm" }
                    ],
                    answer: "b",
                    explanation: "0.9% (w/v) means 9 g/L, so $M=9/58.5=0.154$ M. With van't Hoff factor $i=2$, $\\pi=iMRT=2(0.154)(0.0821)(310)\\approx7.8$ atm, explaining its near-isotonic use."
                },
                {
                    id: "ch121",
                    text: "For the exothermic Contact-process equilibrium $\\mathrm{2SO_2(g)+O_2(g)\\rightleftharpoons2SO_3(g)}$, the industrial conditions giving the best rate-yield compromise are:",
                    options: [
                        { key: "a", text: "200°C, no catalyst, very high pressure" },
                        { key: "b", text: "about 450°C, $\\mathrm{V_2O_5}$, excess oxygen" },
                        { key: "c", text: "about 900°C, platinum, limited oxygen" },
                        { key: "d", text: "about 450°C, iron, excess sulphur dioxide" }
                    ],
                    answer: "b",
                    explanation: "Lower temperature favours the exothermic forward reaction but is too slow; about 450°C with $\\mathrm{V_2O_5}$ gives a practical rate. Excess $\\mathrm{O_2}$ shifts equilibrium toward $\\mathrm{SO_3}$."
                },
                {
                    id: "ch122",
                    text: "A heat-sensitive liquid decomposes near its normal boiling point and contains a non-volatile impurity. The most suitable purification technique is:",
                    options: [
                        { key: "a", text: "simple distillation at atmospheric pressure" },
                        { key: "b", text: "fractional crystallisation from hot solvent" },
                        { key: "c", text: "vacuum distillation at reduced pressure" },
                        { key: "d", text: "paper chromatography with a polar solvent" }
                    ],
                    answer: "c",
                    explanation: "Lowering external pressure lowers the boiling point, so vacuum distillation separates the volatile liquid from the non-volatile impurity without heating it to its decomposition temperature."
                },
                {
                    id: "ch123",
                    text: "The two oxygen-oxygen bonds in an ozone molecule are:",
                    options: [
                        { key: "a", text: "one single and one double bond of fixed lengths" },
                        { key: "b", text: "equal and identical to an O-O single bond" },
                        { key: "c", text: "equal and intermediate between single and double bonds" },
                        { key: "d", text: "unequal because ozone has an ionic structure" }
                    ],
                    answer: "c",
                    explanation: "Ozone is a resonance hybrid of two equivalent canonical structures. Both O-O bonds therefore have bond order 1.5 and equal lengths intermediate between single and double bonds."
                },
                {
                    id: "ch124",
                    text: "The alkali metal that forms a superoxide $\\mathrm{MO_2}$ on burning in excess oxygen is:",
                    options: [
                        { key: "a", text: "Li" },
                        { key: "b", text: "Na" },
                        { key: "c", text: "H" },
                        { key: "d", text: "K" }
                    ],
                    answer: "d",
                    explanation: "Li forms the oxide and Na the peroxide, while larger cations (K, Rb, Cs) stabilise the superoxide $\\mathrm{O_2^-}$; hence K gives $\\mathrm{KO_2}$."
                },
                {
                    id: "ch125",
                    text: "Which drying agent can be used to obtain dry ammonia gas without reacting with it?",
                    options: [
                        { key: "a", text: "anhydrous $\\mathrm{CaCl_2}$" },
                        { key: "b", text: "concentrated $\\mathrm{H_2SO_4}$" },
                        { key: "c", text: "phosphorus pentoxide" },
                        { key: "d", text: "quicklime ($\\mathrm{CaO}$)" }
                    ],
                    answer: "d",
                    explanation: "Quicklime removes water but does not react with ammonia. $\\mathrm{CaCl_2}$ forms an addition compound with $\\mathrm{NH_3}$, while concentrated $\\mathrm{H_2SO_4}$ and $\\mathrm{P_2O_5}$ react with this basic gas."
                },
                {
                    id: "ch126",
                    text: "Which of the following oxides is neutral?",
                    options: [
                        { key: "a", text: "$\\mathrm{CO_2}$" },
                        { key: "b", text: "$\\mathrm{N_2O_5}$" },
                        { key: "c", text: "$\\mathrm{N_2O}$" },
                        { key: "d", text: "$\\mathrm{SO_2}$" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{N_2O}$ (and CO, NO) are neutral oxides; $\\mathrm{CO_2}$, $\\mathrm{N_2O_5}$ and $\\mathrm{SO_2}$ are acidic."
                },
                {
                    id: "ch127",
                    text: "When chlorine reacts with hot concentrated $\\mathrm{NaOH}$, the oxidation states of chlorine in the two chlorine-containing products and their molar ratio $\\mathrm{NaCl:NaClO_3}$ are:",
                    options: [
                        { key: "a", text: "$-1,+1$ and $1:1$" },
                        { key: "b", text: "$-1,+3$ and $3:1$" },
                        { key: "c", text: "$-1,+5$ and $5:1$" },
                        { key: "d", text: "$+1,+5$ and $1:5$" }
                    ],
                    answer: "c",
                    explanation: "$\\mathrm{3Cl_2+6NaOH\\to5NaCl+NaClO_3+3H_2O}$. Chlorine disproportionates to $-1$ and $+5$, and the product ratio $\\mathrm{NaCl:NaClO_3}$ is $5:1$."
                },
                {
                    id: "ch128",
                    text: "In the self-reduction step during copper extraction, cuprous oxide reacts with cuprous sulphide according to:",
                    options: [
                        { key: "a", text: "$\\mathrm{Cu_2O+Cu_2S\\to2Cu+SO_2}$" },
                        { key: "b", text: "$\\mathrm{Cu_2O+2Cu_2S\\to4Cu+SO_2}$" },
                        { key: "c", text: "$\\mathrm{2Cu_2O+Cu_2S\\to6Cu+SO_2}$" },
                        { key: "d", text: "$\\mathrm{2CuO+CuS\\to3Cu+SO_3}$" }
                    ],
                    answer: "c",
                    explanation: "The balanced self-reduction reaction is $\\mathrm{2Cu_2O+Cu_2S\\to6Cu+SO_2}$. It produces blister copper without an external reducing agent."
                },
                {
                    id: "ch129",
                    text: "Which of the following ions is colourless in aqueous solution?",
                    options: [
                        { key: "a", text: "$\\mathrm{Cu^{2+}}$" },
                        { key: "b", text: "$\\mathrm{Fe^{2+}}$" },
                        { key: "c", text: "$\\mathrm{Ni^{2+}}$" },
                        { key: "d", text: "$\\mathrm{Sc^{3+}}$" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{Sc^{3+}}$ is $3d^0$; with no d-electrons no d–d transition is possible, so it is colourless."
                },
                {
                    id: "ch130",
                    text: "The number of unpaired electrons in the low-spin complex $[\\mathrm{Fe(CN)_6}]^{4-}$ is:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "0" },
                        { key: "c", text: "2" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "Fe²⁺ is $3d^6$; the strong-field $\\mathrm{CN^-}$ ligand pairs all electrons in $t_{2g}^6$, so the complex is diamagnetic (0 unpaired)."
                },
                {
                    id: "ch131",
                    text: "The process of concentrating a sulphide ore using oil and water is called:",
                    options: [
                        { key: "a", text: "leaching" },
                        { key: "b", text: "roasting" },
                        { key: "c", text: "froth flotation" },
                        { key: "d", text: "calcination" }
                    ],
                    answer: "c",
                    explanation: "Froth flotation concentrates sulphide ores; oil-wetted sulphide particles rise with the froth while gangue settles."
                },
                {
                    id: "ch132",
                    text: "Which ion-biological role pairing is correct?",
                    options: [
                        { key: "a", text: "magnesium — oxygen carrier in haemoglobin" },
                        { key: "b", text: "cobalt — central metal in vitamin $\\mathrm{B_{12}}$" },
                        { key: "c", text: "sodium — central metal in chlorophyll" },
                        { key: "d", text: "iron — principal extracellular cation" }
                    ],
                    answer: "b",
                    explanation: "Cobalt is the central metal ion of cobalamin (vitamin $\\mathrm{B_{12}}$). Iron carries oxygen in haemoglobin, magnesium is central in chlorophyll, and sodium is the main extracellular cation."
                },
                {
                    id: "ch133",
                    text: "The correct order of stability of the carbocations I. $\\mathrm{CH_3^+}$, II. $\\mathrm{CH_3CH_2^+}$, III. $\\mathrm{(CH_3)_2CH^+}$, IV. $\\mathrm{(CH_3)_3C^+}$ is:",
                    options: [
                        { key: "a", text: "I < II < III < IV" },
                        { key: "b", text: "IV < III < II < I" },
                        { key: "c", text: "II < I < III < IV" },
                        { key: "d", text: "I < III < II < IV" }
                    ],
                    answer: "a",
                    explanation: "More alkyl groups increase +I and hyperconjugation, stabilising the cation: methyl < 1° < 2° < 3°."
                },
                {
                    id: "ch134",
                    text: "The correct order of increasing acidic strength is:",
                    options: [
                        { key: "a", text: "phenol < ethanol < water" },
                        { key: "b", text: "ethanol < water < phenol" },
                        { key: "c", text: "phenol < water < ethanol" },
                        { key: "d", text: "water < ethanol < phenol" }
                    ],
                    answer: "b",
                    explanation: "$pK_a$: ethanol ($\\approx16$) < water (15.7) < phenol (10). The resonance-stabilised phenoxide ion makes phenol the most acidic."
                },
                {
                    id: "ch135",
                    text: "The number of stereoisomers possible for tartaric acid (2,3-dihydroxybutanedioic acid) is:",
                    options: [
                        { key: "a", text: "4" },
                        { key: "b", text: "2" },
                        { key: "c", text: "1" },
                        { key: "d", text: "3" }
                    ],
                    answer: "d",
                    explanation: "Two equivalent stereocentres produce a meso form, so only three stereoisomers exist: (+), (−) and the optically inactive meso."
                },
                {
                    id: "ch136",
                    text: "The IUPAC name of $\\mathrm{(CH_3)_2CHCH_2CHO}$ is:",
                    options: [
                        { key: "a", text: "3-methylbutanal" },
                        { key: "b", text: "2-methylbutanal" },
                        { key: "c", text: "3-methylbutan-1-ol" },
                        { key: "d", text: "2-methylpropanal" }
                    ],
                    answer: "a",
                    explanation: "The longest chain containing –CHO is butanal (C1 = CHO); the methyl branch sits on C3, giving 3-methylbutanal."
                },
                {
                    id: "ch137",
                    text: "In the monochlorination of 2-methylbutane, the number of distinct monochloro structural products (ignoring stereoisomers) is:",
                    options: [
                        { key: "a", text: "3" },
                        { key: "b", text: "4" },
                        { key: "c", text: "5" },
                        { key: "d", text: "6" }
                    ],
                    answer: "b",
                    explanation: "The four sets of non-equivalent hydrogens give four products: 1-chloro-2-methylbutane, 2-chloro-2-methylbutane, 2-chloro-3-methylbutane and 1-chloro-3-methylbutane."
                },
                {
                    id: "ch138",
                    text: "The addition of HBr to propene in the presence of organic peroxides gives predominantly:",
                    options: [
                        { key: "a", text: "2-bromopropane" },
                        { key: "b", text: "1-bromopropane" },
                        { key: "c", text: "1,2-dibromopropane" },
                        { key: "d", text: "propan-2-ol" }
                    ],
                    answer: "b",
                    explanation: "Peroxides trigger anti-Markovnikov (Kharasch) free-radical addition, placing Br on the terminal carbon to give 1-bromopropane."
                },
                {
                    id: "ch139",
                    text: "Which compound reacts with ammoniacal $\\mathrm{AgNO_3}$ to give a white precipitate?",
                    options: [
                        { key: "a", text: "2-butyne" },
                        { key: "b", text: "1,3-butadiene" },
                        { key: "c", text: "propene" },
                        { key: "d", text: "1-butyne" }
                    ],
                    answer: "d",
                    explanation: "Only terminal alkynes have an acidic $\\equiv$C–H; 1-butyne forms silver acetylide (white ppt), whereas internal 2-butyne does not."
                },
                {
                    id: "ch140",
                    text: "Which group is both meta-directing and deactivating in electrophilic aromatic substitution?",
                    options: [
                        { key: "a", text: "$-\\mathrm{OCH_3}$" },
                        { key: "b", text: "$-\\mathrm{CH_3}$" },
                        { key: "c", text: "$-\\mathrm{NO_2}$" },
                        { key: "d", text: "$-\\mathrm{Cl}$" }
                    ],
                    answer: "c",
                    explanation: "$-\\mathrm{NO_2}$ withdraws electrons (−M, −I), deactivating the ring and directing incoming electrophiles to the meta position."
                },
                {
                    id: "ch141",
                    text: "Which alkyl halide undergoes $\\mathrm{S_N1}$ hydrolysis most rapidly?",
                    options: [
                        { key: "a", text: "$\\mathrm{CH_3Cl}$" },
                        { key: "b", text: "$\\mathrm{CH_3CH_2Cl}$" },
                        { key: "c", text: "$\\mathrm{(CH_3)_2CHCl}$" },
                        { key: "d", text: "$\\mathrm{(CH_3)_3CCl}$" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{S_N1}$ rate follows carbocation stability; the tertiary $\\mathrm{(CH_3)_3C^+}$ is most stable, so tert-butyl chloride reacts fastest."
                },
                {
                    id: "ch142",
                    text: "Which alcohol gives an immediate turbidity with Lucas reagent (conc. HCl + $\\mathrm{ZnCl_2}$) at room temperature?",
                    options: [
                        { key: "a", text: "1-butanol" },
                        { key: "b", text: "2-butanol" },
                        { key: "c", text: "tert-butanol" },
                        { key: "d", text: "methanol" }
                    ],
                    answer: "c",
                    explanation: "The Lucas test proceeds by $\\mathrm{S_N1}$; a tertiary alcohol gives an immediate cloudiness because the 3° carbocation forms most readily."
                },
                {
                    id: "ch143",
                    text: "Which of the following undergoes the Cannizzaro reaction (and NOT aldol condensation)?",
                    options: [
                        { key: "a", text: "ethanal" },
                        { key: "b", text: "propanal" },
                        { key: "c", text: "acetone" },
                        { key: "d", text: "benzaldehyde" }
                    ],
                    answer: "d",
                    explanation: "Cannizzaro needs an aldehyde with no $\\alpha$-hydrogen; benzaldehyde qualifies and disproportionates rather than undergoing aldol condensation."
                },
                {
                    id: "ch144",
                    text: "The strongest acid among the following is:",
                    options: [
                        { key: "a", text: "acetic acid" },
                        { key: "b", text: "formic acid" },
                        { key: "c", text: "trichloroacetic acid" },
                        { key: "d", text: "chloroacetic acid" }
                    ],
                    answer: "c",
                    explanation: "Three electron-withdrawing Cl atoms strongly stabilise the carboxylate anion, so trichloroacetic acid ($pK_a\\approx0.7$) is the most acidic."
                },
                {
                    id: "ch145",
                    text: "The correct order of basicity in aqueous solution is:",
                    options: [
                        { key: "a", text: "$\\mathrm{NH_3 > CH_3NH_2 > (CH_3)_2NH}$" },
                        { key: "b", text: "$\\mathrm{(CH_3)_2NH > CH_3NH_2 > NH_3}$" },
                        { key: "c", text: "$\\mathrm{(CH_3)_3N > (CH_3)_2NH > CH_3NH_2}$" },
                        { key: "d", text: "$\\mathrm{CH_3NH_2 > NH_3 > (CH_3)_2NH}$" }
                    ],
                    answer: "b",
                    explanation: "In water the balance of +I effect and solvation makes the secondary amine most basic: $\\mathrm{(CH_3)_2NH > CH_3NH_2 > NH_3}$."
                },
                {
                    id: "ch146",
                    text: "Nitrobenzene is reduced with $\\mathrm{Sn/HCl}$ and the product is then treated with excess $\\mathrm{NaOH}$. The final organic product is:",
                    options: [
                        { key: "a", text: "phenol" },
                        { key: "b", text: "benzene" },
                        { key: "c", text: "benzoic acid" },
                        { key: "d", text: "aniline" }
                    ],
                    answer: "d",
                    explanation: "$\\mathrm{Sn/HCl}$ reduces $-\\mathrm{NO_2}$ to the anilinium salt. Excess $\\mathrm{NaOH}$ liberates the free base, aniline ($\\mathrm{C_6H_5NH_2}$)."
                },
                {
                    id: "ch147",
                    text: "The correct decreasing order of reactivity of carboxylic acid derivatives toward nucleophilic acyl substitution is:",
                    options: [
                        { key: "a", text: "acid chloride > acid anhydride > ester > amide" },
                        { key: "b", text: "acid anhydride > acid chloride > amide > ester" },
                        { key: "c", text: "amide > ester > acid anhydride > acid chloride" },
                        { key: "d", text: "ester > amide > acid chloride > acid anhydride" }
                    ],
                    answer: "a",
                    explanation: "Reactivity follows leaving-group ability: $\\mathrm{Cl^-}$ leaves most readily, then carboxylate, alkoxide and finally the strongly basic $\\mathrm{NH_2^-}$. Thus acid chloride > anhydride > ester > amide."
                },
                {
                    id: "ch148",
                    text: "Buna-S, an important synthetic rubber, is a copolymer of:",
                    options: [
                        { key: "a", text: "chloroprene and styrene" },
                        { key: "b", text: "1,3-butadiene and acrylonitrile" },
                        { key: "c", text: "1,3-butadiene and styrene" },
                        { key: "d", text: "ethylene glycol and terephthalic acid" }
                    ],
                    answer: "c",
                    explanation: "Buna-S (SBR) is formed by copolymerising 1,3-butadiene with styrene. Butadiene with acrylonitrile gives Buna-N, while chloroprene gives neoprene."
                },
                {
                    id: "ch149",
                    text: "In Lassaigne's test, the presence of nitrogen in an organic compound is confirmed by the formation of:",
                    options: [
                        { key: "a", text: "Prussian blue" },
                        { key: "b", text: "a blood-red colour" },
                        { key: "c", text: "a white precipitate" },
                        { key: "d", text: "a black precipitate" }
                    ],
                    answer: "a",
                    explanation: "Fused sodium converts N to $\\mathrm{NaCN}$; with $\\mathrm{Fe^{2+}/Fe^{3+}}$ it gives ferric ferrocyanide (Prussian blue). A blood-red colour indicates N and S together."
                },
                {
                    id: "ch150",
                    text: "A radioactive isotope has a half-life of 10 days. The fraction remaining undecayed after 40 days is:",
                    options: [
                        { key: "a", text: "1/4" },
                        { key: "b", text: "1/8" },
                        { key: "c", text: "1/16" },
                        { key: "d", text: "1/32" }
                    ],
                    answer: "c",
                    explanation: "40 days is 4 half-lives, so the remaining fraction $=(1/2)^4=1/16$."
                }
            ]
        },
        {
            id: "repro17",
            name: "Reproductive System",
            subject: "Zoology",
            accent: "rose",
            blurb: "10 human reproduction questions — gametogenesis, ovarian & menstrual cycle, fertilisation.",
            questions: [
                {
                    id: "rs51",
                    text: "The complete sequence that produces haploid spermatids from diploid spermatogonia is called:",
                    options: [
                        { key: "a", text: "spermatogenesis" },
                        { key: "b", text: "spermiogenesis" },
                        { key: "c", text: "spermiation" },
                        { key: "d", text: "gametogenesis" }
                    ],
                    answer: "a",
                    explanation: "Spermatogenesis is the whole process; spermiogenesis is only the maturation of spermatids into spermatozoa, and spermiation is their release into the tubule lumen."
                },
                {
                    id: "rs52",
                    text: "In human spermatogenesis, the first cells that are haploid are the:",
                    options: [
                        { key: "a", text: "primary spermatocytes" },
                        { key: "b", text: "spermatogonia" },
                        { key: "c", text: "secondary spermatocytes" },
                        { key: "d", text: "Sertoli cells" }
                    ],
                    answer: "c",
                    explanation: "Meiosis I converts diploid primary spermatocytes into haploid secondary spermatocytes; every stage from there on is haploid."
                },
                {
                    id: "rs53",
                    text: "The hormone secreted by the Leydig (interstitial) cells of the testis is:",
                    options: [
                        { key: "a", text: "inhibin" },
                        { key: "b", text: "testosterone" },
                        { key: "c", text: "FSH" },
                        { key: "d", text: "LH" }
                    ],
                    answer: "b",
                    explanation: "Leydig cells secrete testosterone under LH stimulation; Sertoli cells secrete inhibin, while FSH and LH come from the anterior pituitary."
                },
                {
                    id: "rs54",
                    text: "Nutrition to the developing germ cells inside the seminiferous tubules is provided by the:",
                    options: [
                        { key: "a", text: "Sertoli cells" },
                        { key: "b", text: "Leydig cells" },
                        { key: "c", text: "epididymis" },
                        { key: "d", text: "prostate gland" }
                    ],
                    answer: "a",
                    explanation: "Sertoli (nurse) cells nourish and support the developing spermatids; Leydig cells lie outside the tubules and secrete testosterone."
                },
                {
                    id: "rs55",
                    text: "The acrosome of a human sperm is derived from the:",
                    options: [
                        { key: "a", text: "Golgi complex" },
                        { key: "b", text: "mitochondria" },
                        { key: "c", text: "centriole" },
                        { key: "d", text: "nucleus" }
                    ],
                    answer: "a",
                    explanation: "During spermiogenesis the Golgi complex forms the acrosome, a cap of hydrolytic enzymes that helps the sperm penetrate the egg."
                },
                {
                    id: "rs56",
                    text: "In the human ovary, the first meiotic division of the primary oocyte is completed:",
                    options: [
                        { key: "a", text: "before birth" },
                        { key: "b", text: "at puberty" },
                        { key: "c", text: "just before ovulation" },
                        { key: "d", text: "after fertilisation" }
                    ],
                    answer: "c",
                    explanation: "The primary oocyte is arrested in prophase I from fetal life and completes meiosis I only just before ovulation, forming the secondary oocyte and first polar body."
                },
                {
                    id: "rs57",
                    text: "The secondary oocyte released at ovulation is arrested in:",
                    options: [
                        { key: "a", text: "prophase I" },
                        { key: "b", text: "metaphase I" },
                        { key: "c", text: "anaphase II" },
                        { key: "d", text: "metaphase II" }
                    ],
                    answer: "d",
                    explanation: "Meiosis II of the secondary oocyte halts at metaphase II and completes only when a sperm penetrates the egg."
                },
                {
                    id: "rs58",
                    text: "The surge of which hormone directly triggers ovulation at about day 14 of the menstrual cycle?",
                    options: [
                        { key: "a", text: "FSH" },
                        { key: "b", text: "LH" },
                        { key: "c", text: "progesterone" },
                        { key: "d", text: "estrogen" }
                    ],
                    answer: "b",
                    explanation: "A sharp mid-cycle LH surge (induced by rising estrogen) causes the mature Graafian follicle to rupture and release the oocyte."
                },
                {
                    id: "rs59",
                    text: "After ovulation, the ruptured Graafian follicle is transformed into the:",
                    options: [
                        { key: "a", text: "corpus albicans" },
                        { key: "b", text: "corpus callosum" },
                        { key: "c", text: "corpus spongiosum" },
                        { key: "d", text: "corpus luteum" }
                    ],
                    answer: "d",
                    explanation: "The remnant follicle becomes the corpus luteum, which secretes progesterone; if no pregnancy occurs it degenerates into the corpus albicans."
                },
                {
                    id: "rs60",
                    text: "In the human female, fertilisation of the egg normally occurs in the:",
                    options: [
                        { key: "a", text: "uterus" },
                        { key: "b", text: "cervix" },
                        { key: "c", text: "ampulla of the fallopian tube" },
                        { key: "d", text: "ovary" }
                    ],
                    answer: "c",
                    explanation: "Fertilisation typically takes place at the ampullary–isthmic junction (ampulla) of the oviduct, not in the uterus."
                }
            ]
        },
        {
            id: "triangle17",
            name: "Properties of Triangle",
            subject: "Mathematics",
            accent: "cyan",
            blurb: "20 IOE-level questions — sine & cosine rules, area, circum/in/ex-radii, half-angle & projection identities.",
            questions: [
                {
                    id: "pt1",
                    text: "In a triangle $ABC$, if $\\dfrac{a}{\\cos A}=\\dfrac{b}{\\cos B}=\\dfrac{c}{\\cos C}$, then the triangle is:",
                    options: [
                        { key: "a", text: "right-angled" },
                        { key: "b", text: "isosceles" },
                        { key: "c", text: "equilateral" },
                        { key: "d", text: "obtuse-angled" }
                    ],
                    answer: "c",
                    explanation: "By the sine rule $a\\propto\\sin A$, so $\\tan A=\\tan B=\\tan C$; hence $A=B=C=60^\\circ$, an equilateral triangle."
                },
                {
                    id: "pt2",
                    text: "In triangle $ABC$, $a=5$, $b=7$ and $c=8$. The value of $\\cos B$ is:",
                    options: [
                        { key: "a", text: "$\\dfrac12$" },
                        { key: "b", text: "$\\dfrac{1}{7}$" },
                        { key: "c", text: "$\\dfrac{5}{7}$" },
                        { key: "d", text: "$\\dfrac{13}{20}$" }
                    ],
                    answer: "a",
                    explanation: "$\\cos B=\\dfrac{a^2+c^2-b^2}{2ac}=\\dfrac{25+64-49}{80}=\\dfrac{40}{80}=\\dfrac12$, so $B=60^\\circ$."
                },
                {
                    id: "pt3",
                    text: "The area of a triangle with two sides 5 cm and 8 cm enclosing an angle of $30^\\circ$ is:",
                    options: [
                        { key: "a", text: "20 cm²" },
                        { key: "b", text: "40 cm²" },
                        { key: "c", text: "10 cm²" },
                        { key: "d", text: "$10\\sqrt3$ cm²" }
                    ],
                    answer: "c",
                    explanation: "$\\text{Area}=\\tfrac12ab\\sin C=\\tfrac12(5)(8)\\sin30^\\circ=\\tfrac12(40)\\left(\\tfrac12\\right)=10$ cm²."
                },
                {
                    id: "pt4",
                    text: "In a triangle, side $a=6$ and $\\sin A=\\dfrac{3}{5}$. The circumradius $R$ is:",
                    options: [
                        { key: "a", text: "10" },
                        { key: "b", text: "3" },
                        { key: "c", text: "2.5" },
                        { key: "d", text: "5" }
                    ],
                    answer: "d",
                    explanation: "$\\dfrac{a}{\\sin A}=2R\\Rightarrow R=\\dfrac{a}{2\\sin A}=\\dfrac{6}{2\\times3/5}=5$."
                },
                {
                    id: "pt5",
                    text: "In a triangle with sides $a,b,c$ and circumradius $R$, the area $\\Delta$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{abc}{4R}$" },
                        { key: "b", text: "$\\dfrac{abc}{2R}$" },
                        { key: "c", text: "$\\dfrac{abc}{R}$" },
                        { key: "d", text: "$\\dfrac{2abc}{R}$" }
                    ],
                    answer: "a",
                    explanation: "$\\Delta=\\dfrac{abc}{4R}$ (equivalently $\\Delta=2R^2\\sin A\\sin B\\sin C$)."
                },
                {
                    id: "pt6",
                    text: "A triangle has area $\\Delta=24$ and perimeter $32$. Its inradius is:",
                    options: [
                        { key: "a", text: "0.75" },
                        { key: "b", text: "1.5" },
                        { key: "c", text: "3" },
                        { key: "d", text: "2" }
                    ],
                    answer: "b",
                    explanation: "$r=\\dfrac{\\Delta}{s}$ with $s=\\dfrac{32}{2}=16$, so $r=\\dfrac{24}{16}=1.5$."
                },
                {
                    id: "pt7",
                    text: "In any triangle, the inradius $r$ equals:",
                    options: [
                        { key: "a", text: "$4R\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$" },
                        { key: "b", text: "$4R\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}$" },
                        { key: "c", text: "$4R\\sin A\\sin B\\sin C$" },
                        { key: "d", text: "$R\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$" }
                    ],
                    answer: "a",
                    explanation: "$r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$ (whereas $r_1=4R\\sin\\tfrac{A}{2}\\cos\\tfrac{B}{2}\\cos\\tfrac{C}{2}$)."
                },
                {
                    id: "pt8",
                    text: "In a triangle with $s=\\dfrac{a+b+c}{2}$, the half-angle formula for $\\tan\\dfrac{A}{2}$ is:",
                    options: [
                        { key: "a", text: "$\\sqrt{\\dfrac{s(s-a)}{(s-b)(s-c)}}$" },
                        { key: "b", text: "$\\sqrt{\\dfrac{(s-a)(s-b)}{s(s-c)}}$" },
                        { key: "c", text: "$\\sqrt{\\dfrac{(s-b)(s-c)}{s(s-a)}}$" },
                        { key: "d", text: "$\\dfrac{\\Delta}{s(s-a)}$" }
                    ],
                    answer: "c",
                    explanation: "$\\tan\\dfrac{A}{2}=\\sqrt{\\dfrac{(s-b)(s-c)}{s(s-a)}}=\\dfrac{r}{s-a}$."
                },
                {
                    id: "pt9",
                    text: "The radius $r_1$ of the escribed circle opposite vertex $A$ is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\Delta}{s-a}$" },
                        { key: "b", text: "$\\dfrac{\\Delta}{s}$" },
                        { key: "c", text: "$\\dfrac{\\Delta}{s-b}$" },
                        { key: "d", text: "$\\Delta(s-a)$" }
                    ],
                    answer: "a",
                    explanation: "$r_1=\\dfrac{\\Delta}{s-a}$ (similarly $r_2=\\dfrac{\\Delta}{s-b}$ and $r_3=\\dfrac{\\Delta}{s-c}$)."
                },
                {
                    id: "pt10",
                    text: "In any triangle, the product $r\\,r_1 r_2 r_3$ equals:",
                    options: [
                        { key: "a", text: "$\\Delta$" },
                        { key: "b", text: "$\\Delta^2$" },
                        { key: "c", text: "$s^2$" },
                        { key: "d", text: "$R^2$" }
                    ],
                    answer: "b",
                    explanation: "$r=\\dfrac{\\Delta}{s}$ and $r_1r_2r_3=\\dfrac{\\Delta^3}{(s-a)(s-b)(s-c)}=s\\Delta$, so $r\\,r_1r_2r_3=\\dfrac{\\Delta}{s}\\cdot s\\Delta=\\Delta^2$."
                },
                {
                    id: "pt11",
                    text: "The projection formula for side $a$ of a triangle is $a=$",
                    options: [
                        { key: "a", text: "$b\\cos B+c\\cos C$" },
                        { key: "b", text: "$b\\sin C+c\\sin B$" },
                        { key: "c", text: "$b\\cos A+c\\cos A$" },
                        { key: "d", text: "$b\\cos C+c\\cos B$" }
                    ],
                    answer: "d",
                    explanation: "Projecting the other two sides onto side $a$ gives $a=b\\cos C+c\\cos B$."
                },
                {
                    id: "pt12",
                    text: "In any triangle, $r_1+r_2+r_3-r$ equals:",
                    options: [
                        { key: "a", text: "$4R$" },
                        { key: "b", text: "$2R$" },
                        { key: "c", text: "$R$" },
                        { key: "d", text: "$4r$" }
                    ],
                    answer: "a",
                    explanation: "$r_1+r_2+r_3=4R+r$, so $r_1+r_2+r_3-r=4R$."
                },
                {
                    id: "pt13",
                    text: "In triangle $ABC$, if $a=\\sqrt3$, $b=1$ and $A=60^\\circ$, then angle $B$ is:",
                    options: [
                        { key: "a", text: "30°" },
                        { key: "b", text: "45°" },
                        { key: "c", text: "60°" },
                        { key: "d", text: "90°" }
                    ],
                    answer: "a",
                    explanation: "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}\\Rightarrow\\sin B=\\dfrac{b\\sin A}{a}=\\dfrac{1\\cdot(\\sqrt3/2)}{\\sqrt3}=\\dfrac12$, so $B=30^\\circ$."
                },
                {
                    id: "pt14",
                    text: "The sides of a triangle are 7, 8 and 13. Its largest angle is:",
                    options: [
                        { key: "a", text: "90°" },
                        { key: "b", text: "120°" },
                        { key: "c", text: "135°" },
                        { key: "d", text: "150°" }
                    ],
                    answer: "b",
                    explanation: "The largest angle faces side 13: $\\cos C=\\dfrac{7^2+8^2-13^2}{2\\cdot7\\cdot8}=\\dfrac{-56}{112}=-\\dfrac12$, so $C=120^\\circ$."
                },
                {
                    id: "pt15",
                    text: "Napier's analogy expresses $\\tan\\dfrac{B-C}{2}$ as:",
                    options: [
                        { key: "a", text: "$\\dfrac{b+c}{b-c}\\tan\\dfrac{A}{2}$" },
                        { key: "b", text: "$\\dfrac{b-c}{b+c}\\tan\\dfrac{A}{2}$" },
                        { key: "c", text: "$\\dfrac{b-c}{b+c}\\cot\\dfrac{A}{2}$" },
                        { key: "d", text: "$\\dfrac{b-c}{b+c}\\cos\\dfrac{A}{2}$" }
                    ],
                    answer: "c",
                    explanation: "Napier's analogy: $\\tan\\dfrac{B-C}{2}=\\dfrac{b-c}{b+c}\\cot\\dfrac{A}{2}$."
                },
                {
                    id: "pt16",
                    text: "The area of a triangle with sides 13, 14 and 15 is:",
                    options: [
                        { key: "a", text: "168" },
                        { key: "b", text: "42" },
                        { key: "c", text: "91" },
                        { key: "d", text: "84" }
                    ],
                    answer: "d",
                    explanation: "$s=21$; $\\Delta=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84$."
                },
                {
                    id: "pt17",
                    text: "In any triangle $ABC$, $\\cot A+\\cot B+\\cot C$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{a^2+b^2+c^2}{2\\Delta}$" },
                        { key: "b", text: "$\\dfrac{a^2+b^2+c^2}{4\\Delta}$" },
                        { key: "c", text: "$\\dfrac{4\\Delta}{a^2+b^2+c^2}$" },
                        { key: "d", text: "$\\dfrac{abc}{4\\Delta}$" }
                    ],
                    answer: "b",
                    explanation: "Using $\\cot A=\\dfrac{b^2+c^2-a^2}{4\\Delta}$ and adding cyclically gives $\\cot A+\\cot B+\\cot C=\\dfrac{a^2+b^2+c^2}{4\\Delta}$."
                },
                {
                    id: "pt18",
                    text: "The length of the median $AD$ to side $a=BC$ (with $b=AC$, $c=AB$) is $AD=\\tfrac12\\sqrt{\\;?\\;}$, where the expression under the root is:",
                    options: [
                        { key: "a", text: "$b^2+c^2-a^2$" },
                        { key: "b", text: "$2b^2+2c^2+a^2$" },
                        { key: "c", text: "$2b^2+2c^2-a^2$" },
                        { key: "d", text: "$b^2+c^2+2a^2$" }
                    ],
                    answer: "c",
                    explanation: "By Apollonius' theorem $AB^2+AC^2=2AD^2+2BD^2$, giving $AD=\\tfrac12\\sqrt{2b^2+2c^2-a^2}$."
                },
                {
                    id: "pt19",
                    text: "If $R$ and $r$ are the circumradius and inradius, the distance $d$ between circumcentre and incentre satisfies:",
                    options: [
                        { key: "a", text: "$d^2=R^2+2Rr$" },
                        { key: "b", text: "$d^2=2Rr-R^2$" },
                        { key: "c", text: "$d^2=R^2-Rr$" },
                        { key: "d", text: "$d^2=R^2-2Rr$" }
                    ],
                    answer: "d",
                    explanation: "Euler's formula: $OI^2=R^2-2Rr$, which also implies $R\\ge2r$."
                },
                {
                    id: "pt20",
                    text: "A regular hexagon is inscribed in a circle of radius $r$. The area of the hexagon is:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\sqrt3}{2}r^2$" },
                        { key: "b", text: "$\\dfrac{3\\sqrt3}{2}r^2$" },
                        { key: "c", text: "$3\\sqrt3\\,r^2$" },
                        { key: "d", text: "$6r^2$" }
                    ],
                    answer: "b",
                    explanation: "The hexagon splits into 6 equilateral triangles of side $r$: area $=6\\cdot\\dfrac{\\sqrt3}{4}r^2=\\dfrac{3\\sqrt3}{2}r^2$."
                }
            ]
        },
        {
            id: "calculus17",
            name: "Limit, Continuity & Integration",
            subject: "Mathematics",
            accent: "emerald",
            blurb: "20 IOE-level questions — indeterminate limits, continuity, and indefinite & definite integration.",
            questions: [
                {
                    id: "lci1",
                    text: "$\\displaystyle\\lim_{x\\to0}\\frac{\\sin5x}{\\tan3x}$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac53$" },
                        { key: "b", text: "$\\dfrac35$" },
                        { key: "c", text: "1" },
                        { key: "d", text: "15" }
                    ],
                    answer: "a",
                    explanation: "$\\dfrac{\\sin5x}{\\tan3x}=\\dfrac{\\sin5x}{5x}\\cdot\\dfrac{3x}{\\tan3x}\\cdot\\dfrac{5}{3}\\to\\dfrac53$."
                },
                {
                    id: "lci2",
                    text: "$\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos2x}{x^2}$ equals:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "4" },
                        { key: "c", text: "2" },
                        { key: "d", text: "$\\dfrac12$" }
                    ],
                    answer: "c",
                    explanation: "$1-\\cos2x=2\\sin^2x$, so the limit $=2\\left(\\dfrac{\\sin x}{x}\\right)^2\\to2$."
                },
                {
                    id: "lci3",
                    text: "$\\displaystyle\\lim_{x\\to\\infty}\\left(1+\\frac{3}{x}\\right)^{2x}$ equals:",
                    options: [
                        { key: "a", text: "$e^3$" },
                        { key: "b", text: "$e^2$" },
                        { key: "c", text: "$e^6$" },
                        { key: "d", text: "$e^{3/2}$" }
                    ],
                    answer: "c",
                    explanation: "$\\left(1+\\dfrac3x\\right)^{2x}=\\left[\\left(1+\\dfrac3x\\right)^{x}\\right]^{2}\\to(e^3)^2=e^6$."
                },
                {
                    id: "lci4",
                    text: "$\\displaystyle\\lim_{x\\to0}\\frac{e^{3x}-1}{\\sin2x}$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac32$" },
                        { key: "b", text: "$\\dfrac23$" },
                        { key: "c", text: "3" },
                        { key: "d", text: "1" }
                    ],
                    answer: "a",
                    explanation: "$\\dfrac{e^{3x}-1}{3x}\\to1$ and $\\dfrac{2x}{\\sin2x}\\to1$, so the limit $=\\dfrac{3}{2}$."
                },
                {
                    id: "lci5",
                    text: "$\\displaystyle\\lim_{x\\to2}\\frac{x^3-8}{x^2-4}$ equals:",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "4" },
                        { key: "c", text: "3" },
                        { key: "d", text: "$\\infty$" }
                    ],
                    answer: "c",
                    explanation: "Factor: $\\dfrac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}=\\dfrac{x^2+2x+4}{x+2}\\to\\dfrac{12}{4}=3$."
                },
                {
                    id: "lci6",
                    text: "$\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right)$ equals:",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "1" },
                        { key: "c", text: "$\\dfrac12$" },
                        { key: "d", text: "$\\infty$" }
                    ],
                    answer: "c",
                    explanation: "Rationalise: $\\dfrac{x}{\\sqrt{x^2+x}+x}=\\dfrac{1}{\\sqrt{1+1/x}+1}\\to\\dfrac12$."
                },
                {
                    id: "lci7",
                    text: "$\\displaystyle\\lim_{x\\to0}\\frac{\\ln(1+x)-x}{x^2}$ equals:",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "$\\dfrac12$" },
                        { key: "c", text: "$-1$" },
                        { key: "d", text: "$-\\dfrac12$" }
                    ],
                    answer: "d",
                    explanation: "Expand $\\ln(1+x)=x-\\dfrac{x^2}{2}+\\dots$; the numerator $=-\\dfrac{x^2}{2}+\\dots$, so the limit $=-\\dfrac12$."
                },
                {
                    id: "lci8",
                    text: "If $f(x)=\\dfrac{\\sqrt{1+kx}-\\sqrt{1-kx}}{x}$ for $x\\ne0$ is continuous at $x=0$ with $f(0)=2$, then $k=$",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "4" },
                        { key: "c", text: "$\\dfrac12$" },
                        { key: "d", text: "2" }
                    ],
                    answer: "d",
                    explanation: "Rationalising, $\\displaystyle\\lim_{x\\to0}\\dfrac{2kx}{x(\\sqrt{1+kx}+\\sqrt{1-kx})}=\\dfrac{2k}{2}=k$. Continuity needs $k=f(0)=2$."
                },
                {
                    id: "lci9",
                    text: "The function $f(x)=|x-3|$ is:",
                    options: [
                        { key: "a", text: "discontinuous at $x=3$" },
                        { key: "b", text: "continuous but not differentiable at $x=3$" },
                        { key: "c", text: "differentiable at $x=3$" },
                        { key: "d", text: "undefined at $x=3$" }
                    ],
                    answer: "b",
                    explanation: "A modulus function is continuous everywhere but has a corner at $x=3$, so it is continuous yet non-differentiable there."
                },
                {
                    id: "lci10",
                    text: "The greatest-integer function $f(x)=[x]$ is discontinuous at:",
                    options: [
                        { key: "a", text: "no point" },
                        { key: "b", text: "every integer" },
                        { key: "c", text: "$x=0$ only" },
                        { key: "d", text: "every real number" }
                    ],
                    answer: "b",
                    explanation: "$[x]$ jumps by 1 at each integer, so it is discontinuous at every integer and continuous elsewhere."
                },
                {
                    id: "lci11",
                    text: "$\\displaystyle\\int\\frac{dx}{x^2+9}$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac13\\tan^{-1}\\dfrac{x}{3}+C$" },
                        { key: "b", text: "$\\tan^{-1}\\dfrac{x}{3}+C$" },
                        { key: "c", text: "$\\dfrac13\\ln(x^2+9)+C$" },
                        { key: "d", text: "$\\dfrac19\\tan^{-1}\\dfrac{x}{3}+C$" }
                    ],
                    answer: "a",
                    explanation: "$\\displaystyle\\int\\dfrac{dx}{x^2+a^2}=\\dfrac1a\\tan^{-1}\\dfrac{x}{a}+C$ with $a=3$."
                },
                {
                    id: "lci12",
                    text: "$\\displaystyle\\int\\frac{2x}{x^2+1}\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac12\\ln(x^2+1)+C$" },
                        { key: "b", text: "$\\ln(x^2+1)+C$" },
                        { key: "c", text: "$2\\tan^{-1}x+C$" },
                        { key: "d", text: "$\\dfrac{1}{x^2+1}+C$" }
                    ],
                    answer: "b",
                    explanation: "The numerator is the derivative of the denominator: $\\displaystyle\\int\\dfrac{f'(x)}{f(x)}dx=\\ln|f(x)|+C=\\ln(x^2+1)+C$."
                },
                {
                    id: "lci13",
                    text: "$\\displaystyle\\int x\\cos x\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$x\\sin x+\\cos x+C$" },
                        { key: "b", text: "$x\\sin x-\\cos x+C$" },
                        { key: "c", text: "$-x\\sin x+\\cos x+C$" },
                        { key: "d", text: "$x\\cos x+\\sin x+C$" }
                    ],
                    answer: "a",
                    explanation: "By parts: $\\displaystyle\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+C$."
                },
                {
                    id: "lci14",
                    text: "$\\displaystyle\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\pi}{2}$" },
                        { key: "b", text: "$\\dfrac{\\pi}{4}$" },
                        { key: "c", text: "$\\pi$" },
                        { key: "d", text: "1" }
                    ],
                    answer: "b",
                    explanation: "Using $\\int_0^{a}f(x)dx=\\int_0^a f(a-x)dx$ and adding, $2I=\\int_0^{\\pi/2}1\\,dx=\\dfrac{\\pi}{2}$, so $I=\\dfrac{\\pi}{4}$."
                },
                {
                    id: "lci15",
                    text: "$\\displaystyle\\int_0^{1}\\frac{dx}{\\sqrt{1-x^2}}$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\pi}{4}$" },
                        { key: "b", text: "$\\pi$" },
                        { key: "c", text: "1" },
                        { key: "d", text: "$\\dfrac{\\pi}{2}$" }
                    ],
                    answer: "d",
                    explanation: "$\\displaystyle\\int\\dfrac{dx}{\\sqrt{1-x^2}}=\\sin^{-1}x$; from 0 to 1 this is $\\sin^{-1}1-\\sin^{-1}0=\\dfrac{\\pi}{2}$."
                },
                {
                    id: "lci16",
                    text: "$\\displaystyle\\int_{-\\pi/2}^{\\pi/2} x^3\\cos x\\,dx$ equals:",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "0" },
                        { key: "c", text: "$\\pi$" },
                        { key: "d", text: "2" }
                    ],
                    answer: "b",
                    explanation: "$x^3\\cos x$ is odd (odd × even), so its integral over the symmetric interval $[-\\pi/2,\\pi/2]$ is 0."
                },
                {
                    id: "lci17",
                    text: "The area bounded by $y=x^2$, the x-axis and the lines $x=0$ and $x=3$ is:",
                    options: [
                        { key: "a", text: "9" },
                        { key: "b", text: "27" },
                        { key: "c", text: "3" },
                        { key: "d", text: "18" }
                    ],
                    answer: "a",
                    explanation: "$\\displaystyle\\int_0^3 x^2\\,dx=\\left[\\dfrac{x^3}{3}\\right]_0^3=\\dfrac{27}{3}=9$ square units."
                },
                {
                    id: "lci18",
                    text: "$\\displaystyle\\int\\frac{dx}{x^2-1}$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac12\\ln\\left|\\dfrac{x+1}{x-1}\\right|+C$" },
                        { key: "b", text: "$\\ln|x^2-1|+C$" },
                        { key: "c", text: "$\\dfrac12\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C$" },
                        { key: "d", text: "$\\tan^{-1}x+C$" }
                    ],
                    answer: "c",
                    explanation: "$\\dfrac{1}{x^2-1}=\\dfrac12\\left(\\dfrac{1}{x-1}-\\dfrac{1}{x+1}\\right)$; integrating gives $\\dfrac12\\ln\\left|\\dfrac{x-1}{x+1}\\right|+C$."
                },
                {
                    id: "lci19",
                    text: "$\\displaystyle\\int e^{x}\\left(\\frac1x-\\frac{1}{x^2}\\right)dx$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{e^x}{x^2}+C$" },
                        { key: "b", text: "$e^x\\ln x+C$" },
                        { key: "c", text: "$-\\dfrac{e^x}{x^2}+C$" },
                        { key: "d", text: "$\\dfrac{e^x}{x}+C$" }
                    ],
                    answer: "d",
                    explanation: "$\\displaystyle\\int e^x(f(x)+f'(x))dx=e^x f(x)+C$ with $f(x)=\\dfrac1x$, $f'(x)=-\\dfrac{1}{x^2}$, giving $\\dfrac{e^x}{x}+C$."
                },
                {
                    id: "lci20",
                    text: "$\\displaystyle\\int_0^{\\pi} \\sin^2 x\\,dx$ equals:",
                    options: [
                        { key: "a", text: "$\\dfrac{\\pi}{2}$" },
                        { key: "b", text: "$\\pi$" },
                        { key: "c", text: "$\\dfrac{\\pi}{4}$" },
                        { key: "d", text: "0" }
                    ],
                    answer: "a",
                    explanation: "$\\sin^2x=\\dfrac{1-\\cos2x}{2}$, so $\\displaystyle\\int_0^\\pi\\sin^2x\\,dx=\\left[\\dfrac{x}{2}-\\dfrac{\\sin2x}{4}\\right]_0^\\pi=\\dfrac{\\pi}{2}$."
                }
            ]
        }
    ]
};
/* ----------------------------------------------------------------
    DAY 17 syllabus map — Subject → Topic → Sub-topic → [ids].
    Chemistry follows syllabus_bachelor_program_revised__2026.pdf:
    Physical 17 · Inorganic 10 · Organic 17 · Applied 3 ·
    Analytical 3. Every one of the 100 ids appears exactly once.
   ---------------------------------------------------------------- */
const DAY17_SYLLABUS = [
    { subject: "Chemistry", accent: "amber", topics: [
        { topic: "Physical Chemistry", subs: [
            { name: "Basic Concepts & Stoichiometry", ids: ["ch101", "ch102"] },
            { name: "Atomic Structure", ids: ["ch103", "ch104", "ch105"] },
            { name: "Classification of Elements & Periodicity", ids: ["ch106"] },
            { name: "Chemical Bonding & Shape of Molecules", ids: ["ch108"] },
            { name: "States of Matter", ids: ["ch109"] },
            { name: "Chemical Thermodynamics", ids: ["ch111", "ch112"] },
            { name: "Chemical Equilibrium", ids: ["ch113"] },
            { name: "Ionic Equilibrium", ids: ["ch114", "ch115"] },
            { name: "Chemical Kinetics", ids: ["ch116", "ch117"] },
            { name: "Electrochemistry", ids: ["ch118"] },
            { name: "Nuclear Chemistry", ids: ["ch150"] }
        ] },
        { topic: "Inorganic Chemistry", subs: [
            { name: "Chemistry of Non-metals", ids: ["ch123", "ch125", "ch126", "ch127"] },
            { name: "Chemistry of Metals", ids: ["ch124", "ch128", "ch129", "ch130", "ch131"] },
            { name: "Bio-inorganic Chemistry", ids: ["ch132"] }
        ] },
        { topic: "Organic Chemistry", subs: [
            { name: "General Organic Chemistry", ids: ["ch133"] },
            { name: "Isomerism", ids: ["ch135"] },
            { name: "IUPAC Nomenclature", ids: ["ch136"] },
            { name: "Hydrocarbons", ids: ["ch137", "ch138", "ch139"] },
            { name: "Aromatic Hydrocarbons", ids: ["ch140"] },
            { name: "Haloalkanes & Haloarenes", ids: ["ch141"] },
            { name: "Alcohols & Phenols", ids: ["ch134", "ch142"] },
            { name: "Ethers", ids: ["ch107"] },
            { name: "Aldehydes & Ketones", ids: ["ch143"] },
            { name: "Carboxylic Acid & Derivatives", ids: ["ch144", "ch147"] },
            { name: "Nitro-compounds", ids: ["ch146"] },
            { name: "Amines", ids: ["ch145"] },
            { name: "Organometallic Compounds", ids: ["ch110"] }
        ] },
        { topic: "Applied Chemistry", subs: [
            { name: "Manufacturing Processes", ids: ["ch121"] },
            { name: "Applications of Osmotic Pressure", ids: ["ch120"] },
            { name: "Chemistry in Service to Mankind", ids: ["ch148"] }
        ] },
        { topic: "Analytical Chemistry", subs: [
            { name: "Chemical Tests", ids: ["ch149"] },
            { name: "Separation Techniques", ids: ["ch122"] },
            { name: "Types of Titration", ids: ["ch119"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "Gametogenesis", subs: [
            { name: "Spermatogenesis", ids: ["rs51", "rs52", "rs53", "rs54", "rs55"] },
            { name: "Oogenesis", ids: ["rs56", "rs57"] }
        ] },
        { topic: "Ovarian & Menstrual Cycle", subs: [
            { name: "Ovulation & Corpus Luteum", ids: ["rs58", "rs59"] }
        ] },
        { topic: "Fertilisation", subs: [
            { name: "Site of Fertilisation", ids: ["rs60"] }
        ] }
    ] },
    { subject: "Mathematics", accent: "cyan", topics: [
        { topic: "Properties of Triangle", subs: [
            { name: "Sine & Cosine Rules", ids: ["pt1", "pt2", "pt13", "pt14"] },
            { name: "Area of Triangle", ids: ["pt3", "pt5", "pt16"] },
            { name: "Circumradius & Inradius", ids: ["pt4", "pt6", "pt7"] },
            { name: "Half-angle & Projection Formulae", ids: ["pt8", "pt11", "pt15"] },
            { name: "Escribed Circles & Identities", ids: ["pt9", "pt10", "pt12", "pt17"] },
            { name: "Medians, Euler Line & Polygons", ids: ["pt18", "pt19", "pt20"] }
        ] },
        { topic: "Limit, Continuity & Integration", subs: [
            { name: "Limits", ids: ["lci1", "lci2", "lci3", "lci4", "lci5", "lci6", "lci7"] },
            { name: "Continuity & Differentiability", ids: ["lci8", "lci9", "lci10"] },
            { name: "Indefinite Integration", ids: ["lci11", "lci12", "lci13", "lci18", "lci19"] },
            { name: "Definite Integration & Area", ids: ["lci14", "lci15", "lci16", "lci17", "lci20"] }
        ] }
    ] }
];
DAY17.syllabus = DAY17_SYLLABUS;

/* All days live here; the dashboard initializes with Day 1. */
const STUDENT = { name: "Prakriti Subedi", role: "CEE Aspirant 2026" };
const DAYS = [DAY1, DAY2, DAY3, DAY4, DAY5, DAY6, DAY7, DAY8, DAY9, DAY10, DAY11, DAY12, DAY13, DAY14, DAY15, DAY16, DAY17, DAY18];

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
