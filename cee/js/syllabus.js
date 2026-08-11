/* ============================================================
   OFFICIAL CEE SYLLABUS  (reference view, not a question set)

   Transcribed from the Medical Education Commission
   "Syllabus for Bachelor Level Common Entrance Examination
   (2020, revised 2026)" — weightage table on PDF page 6 and
   the unit/topic-wise contents on PDF pages 7-14.

   Rendered by renderSyllabusRef() in js/app.js.
   ============================================================ */
const CEE_SYLLABUS = {
    exam: {
        title: "MECEE-BL · Common Entrance Examination",
        program: "MBBS · BDS · BSc Nursing · BASLP · B. Perfusion Technology",
        questions: 200,
        marks: 200,
        negative: 0.25,
        durationMinutes: 180,
        pass: "50th percentile",
        cognitive: "50 : 30 : 20 — recall : understanding : application"
    },
    subjects: [
        {
            name: "Physics",
            accent: "blue",
            total: 50,
            units: [
                {
                    n: 1,
                    title: "Mechanics",
                    weight: 10,
                    topics: [
                        { label: "Physical quantities, vectors and scalars", detail: "Concept and application related to precision, accuracy, significant figures and dimensional analysis; concept, laws and calculations related to vectors and scalars" },
                        { label: "Kinematics", detail: "Concepts, calculations and graphical treatment of physical quantities of linear and projectile motions in presence as well as absence of resistive force" },
                        { label: "Dynamics", detail: "Concepts, laws (including Newton's laws and equilibrium conditions) and application of physical quantities (force, impulse, momentum, torque, work, energy and power) related to linear a motions, collisions and solid friction" },
                        { label: "Rotational dynamics", detail: "Concepts, laws and application of physical quantities (moment of inertia (rigid uniform rod only), radius of gyration, torque, work, energy and power) related to rotational motion" },
                        { label: "Fluid statics and dynamics", detail: "Concepts (pressure, surface tension and energy and capillary action) and laws/principles (Newton, Stokes, Poiseuille, Bernoulli) related to fluids, and their applications" },
                        { label: "Circular and Periodic motion", detail: "Concepts, laws and application of physical quantities (displacement, velocity, acceleration, centripetal force) related to motion in horizontal and vertical circle; concepts, calculations, graphical treatment and application of physical quantities (period, frequency, displacement, amplitude, velocity, acceleration, restoring force, energy) of simple harmonic motion; concept of forced oscillations" },
                        { label: "Gravity", detail: "Definitions, laws, calculations, graphical treatment and application of concepts related to gravitation (force, acceleration, field strength, energy and potential" },
                        { label: "Elasticity", detail: "Concepts related to elasticity of matter (strain, stress, modii of elasticity, Poisson ratio and energy density), their calculations and applications" }
                    ]
                },
                {
                    n: 2,
                    title: "Heat and thermodynamics",
                    weight: 7,
                    topics: [
                        { label: "", detail: "Thermal energy, heat, temperature, heat flow and thermometers: Concept of thermal energy, heat and temperature; modes and laws (zeroth law and Stefan Bolzmann) of heat flow; working principle, advantages and limitations of different types of thermometers (liquid in glass, resistance thermometer and radiation thermometer)" },
                        { label: "Thermal expansion", detail: "Concept of linear, cubical, superficial, real and apparent expansions, their calculation and applications" },
                        { label: "Quantity of heat", detail: "Concept of heat capacity, specific heat capacity, latent heats and triple point, and their calculations and applications" },
                        { label: "Ideal gas", detail: "Molecular properties of ideal gas and calculations related to pressure, volume, temperature, rms speed, energy" },
                        { label: "First law of thermodynamics", detail: "Concept and calculations related to thermodynamic system and processes (adiabatic, isothermal, isochoric and isobaric)" },
                        { label: "Second law of thermodynamics", detail: "Second law and its application in relation to internal combustion heat engines and refrigerator, concept of entropy" }
                    ]
                },
                {
                    n: 3,
                    title: "Waves and optics",
                    weight: 8,
                    topics: [
                        { label: "Wave motion", detail: "Concept, calculation related to progressive waves, velocity of sound in solid, liquid and gas and factors affecting the velocity" },
                        { label: "Stationary waves", detail: "Concept of stationary waves, calculations and applications in relation to velocity, harmonics and overtones in pipes and strings" },
                        { label: "Acoustic phenomena", detail: "Pressure amplitude and characteristics of waves(intensity, loudness, quality and pitch), concept, calculations and applications of Doppler effect" },
                        { label: "Reflection, refraction and dispersion", detail: "Reflection at curve mirror, refraction at plane surfaces and in lens; concept, calculations and application of dispersion (chromatic aberration, and achromatism)" },
                        { label: "Interference", detail: "Concept, conditions and applications of interference; calculations and applications related to Young's double slit experiment" },
                        { label: "Diffraction and polarization", detail: "Concept and conditions of diffraction, diffraction at a single slit and diffraction grating, resolving power of optical instruments; concept of polarization and Brewster's law" }
                    ]
                },
                {
                    n: 4,
                    title: "Current electricity and magnetism",
                    weight: 9,
                    topics: [
                        { label: "Electrical quantities", detail: "Concepts, laws (Ohm's and Joule's) and calculations related to electrical quantities (resistances, emf, pd, energy, power)" },
                        { label: "Electrical circuits", detail: "Concepts, laws (including Kirchhoff's laws) and their application related to resistors in different types of combinations, concept and calculations related to Wheatstone Bridge, meter bridge, potentiometer and galvanometer as ammeter and voltmeter" },
                        { label: "Thermoelectric effect", detail: "Concept and application of Seebeck and Peltier effects, concepts and calculations related to thermocouple" },
                        { label: "Alternating currents", detail: "Concept and calculation related to peak and rms values of AC, impedance, power, Q-factor and phase in LRC circuits; rectification using diode bridge" },
                        { label: "Magnetic properties of materials", detail: "Properties (domains, relative permeability, susceptibility and hysteresis) of Dia, para and ferromagnetic materials" },
                        { label: "Magnetic field", detail: "Nature of B-field around straight current carrying conductor, circular coil and long solenoid; concept, calculations and application of effect of uniform B-field on a moving charge and current carrying conductor/ coil, Hall effect" },
                        { label: "Electromagnetic induction", detail: "Principle and calculation related to Faraday's law and Lenz's law and their applications in connection to A.C. generator, transformer and formation of eddy current, concept of inductance (self and mutual) and energy stored in an inductor" }
                    ]
                },
                {
                    n: 5,
                    title: "Electrostatics and capacitors",
                    weight: 4,
                    topics: [
                        { label: "Electric charge and electric field", detail: "Electric field due to point charges, concept of electrostatic induction, Coulomb's law and its applications" },
                        { label: "Electric field strength, potential and potential energy", detail: "Concepts, calculation, graphical analysis, law (Gauss) and related applications" },
                        { label: "Capacitors", detail: "Principle of capacitor; concept, calculation and application of parallel plate capacitor, combinations of capacitors and energy density, effect of dielectric" }
                    ]
                },
                {
                    n: 6,
                    title: "Modern physics",
                    weight: 12,
                    topics: [
                        { label: "Nuclear physics", detail: "Nucleus and its properties (charge, size, mass, density); concept and calculations of mass defect, binding energy per nucleon, Einstein's mass- energy relation; nuclear fusion and fission" },
                        { label: "Electron", detail: "Concept, calculations and applications related to the motion of electron in an electric and magnetic field, Millikan's oil drop experiment and J.J. Thomson's experiment. Photon- Concept, laws and calculations related to photon and photo-electric effect" },
                        { label: "Wave particle duality", detail: "Concepts and calculations of Bohr's theory of hydrogen atom including spectral series, energy levels, De-Broglie wave and uncertainty principle, properties, uses and production of X rays and their calculations; Bragg's law and applications" },
                        { label: "Radioactivity", detail: "Concept, laws and units of radioactivity, properties of alpha, beta and gamma rays, concept, calculation and applications of half-life, mean life and their relations, carbon dating; medical use of nuclear radiations and health hazard" },
                        { label: "Solid and semiconductor device", detail: "Concept of energy band in solids (metal, semiconductor and insulator); intrinsic and extrinsic semiconductor, p-n diode, biasing of diode, p-n diode as a rectifier; logic gates (AND, OR, NOT, NOR, NAND)" },
                        { label: "Particle physics and recent trends", detail: "Concept of particle, antiparticle, leptons and quarks, Higgs boson, nanotechnology, big bang theory, Hubble law. II. BAMS, BSc MLT, BSc MIT/ BSc Radiotherapy Technology, BPT, B Pharm & B Optometry Program A. Eligibility a. Candidates who have passed 10+2 Science or equivalent (with Physics, Chemistry and Biology) with 50% aggregate in total marks or GPA 2.4 OR Secured the percentage/GPA as mentioned above in regards to the certificate level" }
                    ]
                }
            ]
        },
        {
            name: "Chemistry",
            accent: "amber",
            total: 50,
            units: [
                {
                    n: 1,
                    title: "Physical Chemistry",
                    weight: 17,
                    topics: [
                        { label: "Basic Concepts in Chemistry", detail: "Atoms, molecules, valency, relative atomic mass and molecular mass, atomic mass unit, radicals, molecular formula, chemical equation, empirical formula, percentage composition" },
                        { label: "Stoichiometry", detail: "Dalton's atomic theory, Laws of stoichiometry, Avogadro's law and its applications, mole concept, limiting reactants, percentage yield, related numerical problems" },
                        { label: "Atomic Structure", detail: "Rutherford's atomic model, Bohr's atomic model, spectrum of hydrogen atom, de-Broglie's wave equation, Heisenberg's uncertainty principles, orbitals, quantum numbers, Aufbau principle, Pauli's exclusion principle, Hund's rule of maximum multiplicity, electronic configuration" },
                        { label: "Classification of Elements and Periodicity", detail: "Modern periodic law and table, s, p, d and f block elements, periodicity, isoelectronic species, general periodic trend of periodic properties (atomic size, ionic size, ionization potential, electronegativity, electron affinity, metallic character)" },
                        { label: "Chemical Bonding and Shape of Molecules", detail: "Electronic theory of valency, ionic bond, covalent bond and co-ordinate covalent bonds, Lewis dot structure of compounds of s and p block elements, VSEPR theory and shape and geometry of simple molecules, elementary idea of Valence Bond Theory (sigma and pi-bond), hybridization, dipole moment, ionic character in covalent bond, bond length, hydrogen bonding, metallic bond, Vander Waal's forces" },
                        { label: "Redox Reaction", detail: "Classical and electronic concept of oxidation and reduction, oxidation number, balancing redox reaction by oxidation number counting method and ion-electron method, application of redox reaction" },
                        { label: "States of Matter", detail: "Gas (Kinetic theory of gases, laws of gases, ideal and combined gas equation, deviation of real gas from ideality); Liquid (Vapour pressure, boiling point, surface tension and viscosity, liquid crystal, solution, solubility and solubility curve); Solid (Crystalline and amorphous solids, efflorescence, deliquescence and hygroscopic solids, crystallization, water of crystallization, crystal growth, unit cell, 7-crystal system and 14- Bravais lattices, classification of crystalline solid based on dominant bonds)" },
                        { label: "Chemical Equilibrium", detail: "Physical and chemical equilibrium, law of mass action, equilibrium constants, reaction quotient, relationship between Kp and Kc, Le-Chatelier's principle and its applications" },
                        { label: "Volumetric Analysis", detail: "Volumetric analysis, equivalent weights, expression of concentration of solution in terms of percentage, g/L, normality, molarity, molality, formality, ppm, ppb and mole fraction, primary and secondary standard substances, law of equivalence and normality equation, related numerical problems" },
                        { label: "Ionic Equilibrium", detail: "Arrhenius theory of ionization, Arrhenius, Bronsted-Lowry and Lewis concepts of acid and bases, Ostwald's dilution law, ionic product of water, pKa, pKb, pH, pOH, common ion effect, solubility and solubility product principle, applications of common ion effect and solubility product principle, acidic and basic buffer solution, types of salts, qualitative aspect of hydrolysis of salt, related numerical problems" },
                        { label: "Chemical Kinetics", detail: "Rate of reactions, equivalent rate expression, rate constant and its unit, order and molecularity, integrated rate law equation for zero and first order reactions and their half-lives and characteristics, collision theory, activation energy, threshold energy, activated complex, factors affecting rate of reactions, homogeneous catalysis, heterogeneous catalysis, enzyme catalysis, related numerical problems" },
                        { label: "Electrochemistry", detail: "Electrolytic cell, qualitative and quantitative aspect of electrolysis, standard electrode potential, standard hydrogen electrode, calomel electrode, electrochemical series and its applications, Galvanic cell and its standard emf, commercial cells, primary and secondary cell, hydrogen-oxygen fuel cell, related numerical problems" },
                        { label: "Chemical Thermodynamics", detail: "Thermodynamic systems, surrounding, open, closed, and isolated system, state of system, state function, internal energy, exothermic and endothermic processes, extensive and intensive properties of system, thermodynamic process, first law of thermodynamics, enthalpy, enthalpy of reaction, enthalpy of solution, enthalpy of formation, enthalpy of combustion, enthalpy of neutralization, enthalpy of fusion, enthalpy of vaporization, Laplace law and Hess`s law, spontaneous and non-spontaneous process, entropy, second law of thermodynamics, Gibb`s free energy and prediction of spontaneity, relation between standard Gibb's free energy and equilibrium constant, related numerical problems" },
                        { label: "Nuclear Chemistry", detail: "Radioactivity, types of nuclear reactions, radioisotopes, radio-carbon dating" }
                    ]
                },
                {
                    n: 2,
                    title: "Inorganic Chemistry",
                    weight: 10,
                    topics: [
                        { label: "Chemistry of Non-metals", detail: "Atomic, molecular, and nascent hydrogen, isotopes of hydrogen, heavy water, types of oxides, preparation, structure and test of ozone. Ozone layer depletion, chemical properties of ammonia, phosphine and nitric acid, general characteristics, preparation, chemical properties and test of chlorine, bromine and iodine, preparation and chemical properties of HCl, HBr and HI, allotropes of carbon, chemical properties of carbon monoxide, chemical properties of hydrogen sulphide, sulphur dioxide, sulphuric acid" },
                        { label: "Chemistry of Metals", detail: "Metallurgical principles (hydrometallurgy, pyrometallurgy, electrometallurgy, ores, gangue, flux, slag, concentration, calcination, roasting, smelting, bessemerization, aluminothermite, electrochemical reduction, poling, electro-refinement, zone refining), general characteristics of alkali and alkaline earth metals and chemical properties of sodium, sodium hydroxide, and sodium carbonate, general characteristics of transition metals (3d series), shape of complex ions ( tetrahedral, square planar and octahedral), crystal field theory of octahedral complex, occurrence, extraction and chemical properties of copper, zinc, mercury, silver and iron from their ores, chemical properties of blue vitriol, white vitriol, calomel, corrosive sublimate, manufacture of steel by basic oxygen method and open hearth process, corrosion of iron" },
                        { label: "Bio-inorganic Chemistry", detail: "Concept of micro and macro nutrients, biological importance of ions of sodium, potassium, magnesium, zinc, copper, cobalt, nickel, iron, chromium and calcium, sodium-potassium and sodium-glucose pump, toxicity due to iron, arsenic, mercury, lead and cadmium" }
                    ]
                },
                {
                    n: 3,
                    title: "Organic Chemistry",
                    weight: 17,
                    topics: [
                        { label: "General Organic Chemistry", detail: "Tetra-covalency, catenation of carbon, classification of organic compounds, alkyl and aryl groups, functional groups, homologous series, IUPAC name of aliphatic compounds, isomerism of organic compounds, heterolytic and homolytic bond fission, electrophile, nucleophile, carbocation, carbanion, free radicals, inductive effect, resonance effect" },
                        { label: "Hydrocarbons", detail: "Concept of cracking, pyrolysis, reforming, quality of gasoline, octane number, cetane number and gasoline additive. Isomerism, IUPAC name, general methods of preparation of alkane, alkene and alkyne, chemical properties of ethane, addition reaction of alkene, addition reaction and acidity of alkyne" },
                        { label: "Aromatic Hydrocarbons", detail: "Aromaticity of aromatic hydrocarbons, resonance, preparation and chemical properties of benzene" },
                        { label: "Haloalkanes and Haloarenes", detail: "Nomenclature, isomerism, classification, preparation and properties of monohaloalkanes, concept of SN1 and SN2 mechanisms, preparation and chemical properties of chloroform and chlorobenzene" },
                        { label: "Alcohols and Phenols", detail: "Nomenclature, isomerism, classification, preparation and chemical properties of monohydric alcohols, industrial manufacture of alcohols by oxo-process, hydroboration-oxidation of ethene and fermentation of sugar, types of ethanol (absolute, power, methylated, rectified spirit, alcoholic beverages), preparation and properties of phenol" },
                        { label: "Ethers", detail: "Nomenclature, classification, isomerism, Williamson's synthesis of ethers, chemical properties of diethyl ether" },
                        { label: "Aldehydes and Ketones", detail: "Nomenclature, isomerism, preparation and chemical properties of aliphatic carbonyl compounds, preparation and properties of benzaldehyde" },
                        { label: "Carboxylic Acid and its Derivatives", detail: "Nomenclature, isomerism, preparation and chemical properties of monocarboxylic acids, preparation, properties and relative reactivity of acid halide, acid anhydride, amides and esters" },
                        { label: "Nitro-compounds", detail: "Nomenclature, isomerism, preparation and chemical properties of nitroalkanes and nitrobenzene" },
                        { label: "Amine", detail: "Nomenclature, classification, isomerism of amines, preparation of primary amines, basicity of amines, separation of primary, secondary and tertiary amines by Hoffmann's method, preparation and chemical properties of aniline" },
                        { label: "Organometallic Compounds", detail: "General formula and example of organo-lithium, organocopper and organocadmium compounds, metal carbon bonding, preparation and chemical properties of Grignard's reagent" }
                    ]
                },
                {
                    n: 4,
                    title: "Applied Chemistry",
                    weight: 3,
                    topics: [
                        { label: "", detail: "Fundamentals of Applied Chemistry and Manufacturing Processes: Chemical industry (importance and production stages), economical production and chemical plant management (cost, cash flow, operation, and design), continuous and batch processing, environmental effect of chemical industry with control measures, cement, paper and pulp, principle of modern manufacture of nitric acid (Ostwald's process), ammonia (Haber's process), sulphuric acid (Contact process), caustic soda (Diaphragm cell) , sodium carbonate (Ammonia soda or Solvay process), urea (Ammonium carbamate process)" },
                        { label: "Applications of Non-metals, Metals and Compounds", detail: "Hydrogen and its isotopes, oxygen, ozone, heavy water, hydrogen peroxide, nitrogen, ammonia, nitric acid, sulphur, hydrogen sulphide, sulphur dioxide, sulphuric acid, hypo, halogen, halogen acids, carbon, carbon monoxide, phosphorous, phosphine, sodium, caustic soda, washing soda, baking soda, quick lime, slaked lime bleaching powder, plaster of Paris, magnesia, epsom salt, gypsum salt, copper, blue vitriol, black and red oxide of copper, zinc, white vitriol, mercury, calomel, corrosive sublimate, iron, silver chloride and silver nitrate. Alkane, alkene, alkyne, aromatic hydrocarbons, chloroform, alcohol, phenol, aldehydes and ketones, ethers, haloarene, carboxylic acid and its derivatives, nitro-compounds, amines, nitrocompounds, formalin, chloropicrin, chloretone, Grignard's reagent" },
                        { label: "Chemistry in Service to Mankind", detail: "Polymer, dyes, drugs, pesticides, fertilizer, applications of colloid, osmotic pressure, buffer in daily life, medical and industrial applications of radioisotopes" }
                    ]
                },
                {
                    n: 5,
                    title: "Analytical Chemistry",
                    weight: 3,
                    topics: [
                        { label: "Chemical Tests", detail: "Tests of acid and basic radicals, tests of unsaturation and functional groups of organic compounds, distinction tests of organic compounds, hetero-element detection by Lassaigne's test, biomolecule tests (fat, protein and carbohydrate)" },
                        { label: "Separation Techniques", detail: "Filtration, sublimation, evaporation, precipitation, simple and fractional crystallization, simple fractional and vacuum distillation, paper chromatography, atmolysis" },
                        { label: "Types of Titration", detail: "Concept of acid-base, redox (permanganometric, iodometric and iodimetric) and complexometric titration, selection of indicators in acid base titration" }
                    ]
                }
            ]
        },
        {
            name: "Zoology",
            accent: "rose",
            total: 40,
            units: [
                {
                    n: 1,
                    title: "Evolutionary Biology",
                    weight: 3,
                    topics: [
                        { label: "Origin of life", detail: "Oparin-Haldane theory, Miller–Urey's experiment" },
                        { label: "Evidences of evolution", detail: "Morphological, Anatomical, Paleontological, Embryological, Biochemical" },
                        { label: "Theories", detail: "Lamarckism, Darwinism, Neo-Darwinism" },
                        { label: "Human evolution", detail: "From Ramapithecus to modern man" }
                    ]
                },
                {
                    n: 2,
                    title: "Animal Diversity and Classification",
                    weight: 4,
                    topics: [
                        { label: "", detail: "Diagnostic features and classification from Protozoa to Chordata" }
                    ]
                },
                {
                    n: 3,
                    title: "Animal Tissues and Histology",
                    weight: 4,
                    topics: [
                        { label: "", detail: "Epithelial, connective, muscular, nervous tissues (Structure, location, function)" }
                    ]
                },
                {
                    n: 4,
                    title: "Study of Selected Animals",
                    weight: 6,
                    topics: [
                        { label: "", detail: "Plasmodium (Habitat, structure, life cycle, malaria types; Earthworm i.e. Pheretima (Morphology, different body systems and physiology, economic importance; Frog i.e. Rana (Morphology, different body systems and physiology)" }
                    ]
                },
                {
                    n: 5,
                    title: "Human Biology and Physiology",
                    weight: 15,
                    topics: [
                        { label: "Digestive System", detail: "Alimentary canal and digestive glands, physiology of digestion" },
                        { label: "Respiratory System", detail: "Respiratory organs, gas exchange and transport, regulation of respiration, concept of respiratory disorders" },
                        { label: "Circulatory System", detail: "Heart, cardiac cycle and output, heartbeat, arterial and venous system, blood group and pressure, concept of cardiovascular disorders" },
                        { label: "Excretory System", detail: "Excretory organs, urine formation, concept of renal disorders" },
                        { label: "Nervous System", detail: "CNS, PNS and autonomic, nerve impulse" },
                        { label: "Sense Organs", detail: "Eye and Ear" },
                        { label: "Endocrinology", detail: "Glands, hormones and disorders" },
                        { label: "Reproductive System", detail: "Organs, gametogenesis, ovarian and menstrual cycle" }
                    ]
                },
                {
                    n: 6,
                    title: "Microbial diseases and Immunology",
                    weight: 4,
                    topics: [
                        { label: "Diseases", detail: "Typhoid, TB, HIV, Cholera, Influenza, Hepatitis, Candidiasis" },
                        { label: "Immunity", detail: "Innate and acquired; antigens and antibodies" },
                        { label: "Vaccines", detail: "Live attenuated, inactivated, toxoid" }
                    ]
                },
                {
                    n: 7,
                    title: "Medical Technology and Applied Biology",
                    weight: 2,
                    topics: [
                        { label: "Medical technology", detail: "Tissue and Organ transplantation, In-Vitro Fertilization (IVF), Amniocentesis, Transgenic animals" },
                        { label: "Applied microbiology", detail: "Dairy/beverage microbes, Sewage and drinking water treatment, Bio-control agents" }
                    ]
                },
                {
                    n: 8,
                    title: "Biota, Environment and Conservation",
                    weight: 2,
                    topics: [
                        { label: "Animal Behavior", detail: "Reflex actions, taxis and Migration" },
                        { label: "Environmental pollution", detail: "Air, water and soil pollution, Pesticides" },
                        { label: "Adaptations", detail: "Aquatic, Terrestrial, Volant" },
                        { label: "Conservation Biology", detail: "Biodiversity, Protected areas, Hotspots, Ramsar sites, IUCN categories, Endangered species of Nepal" }
                    ]
                }
            ]
        },
        {
            name: "Botany",
            accent: "emerald",
            total: 40,
            units: [
                {
                    n: 1,
                    title: "Basic Components of Life",
                    weight: 2,
                    topics: [
                        { label: "", detail: "Structure & biological role of carbohydrates, Structure, types and biological role of carbohydrates, lipids and minerals; Structure, types and biological role of protein & enzymes" }
                    ]
                },
                {
                    n: 2,
                    title: "Biodiversity",
                    weight: 9,
                    topics: [
                        { label: "Introduction", detail: "General concept of classification: 2-Kingdom system, taxonomic hierarchies & binomial nomenclature, 5-Kingdom system, 3 Domain system" },
                        { label: "Monera & Virus", detail: "Structure of bacterial cell, types of bacteria, mode of nutrition in bacteria and Bacterial growth. General Characteristics of Cyanobacteria. Characteristics, structure, chemical composition of viruses, types of viruses" },
                        { label: "Fungi & Lichens", detail: "Characteristic features of: Phycomycetes, Ascomycetes, Basidiomycetes and Deuteromycetes. Structure and reproduction of yeast and Mucor, Introduction and types of lichens" },
                        { label: "Algae", detail: "General introduction, Characteristic features of: Chlorophyceae, Rhodophyceae, Phaeophyceae, Structure & reproduction of Spirogyra" },
                        { label: "Bryophytes", detail: "Characteristic features of: Hepaticopsida (Liverworts), Anthocerotopsida (Hornworts), Bryopsida (Moss). Morphological structure and reproduction of Marchantia" },
                        { label: "Pteridophytes", detail: "Characteristic features of Pteridophytes. Morphological structure and reproduction of Dryopteris" },
                        { label: "Gymnosperms", detail: "Characteristic features of Gymnosperms. Morphological structure and reproduction of Pinus" },
                        { label: "Angiosperms", detail: "Morphology of Root, stem, leaf, inflorescence, flower and fruit; Diagnostic characters, floral formulae and floral diagram of Families: Brassicaceae, Solanaceae, Fabaceae, Liliaceae" },
                        { label: "Economic Importance", detail: "Economic Importance of Virus, Bacteria, Blue-green algae, Fungi, Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms of Nepal" },
                        { label: "Uses of the selected medicinal plants of Nepal", detail: "Azadirachta indica (Neem), Rauwolfia serpentina (Sarpagandha), Ophiocordyceps sinensis (Yarsagumba), Ocimum sanctum (Tulasi), Zingiber officinale (Ginger)" }
                    ]
                },
                {
                    n: 3,
                    title: "Ecology & Vegetation",
                    weight: 4,
                    topics: [
                        { label: "Ecosystem Ecology", detail: "Structural and functional aspects of pond and forest ecosystems; biotic interactions" },
                        { label: "Biogeochemical Cycles & Ecological Imbalances", detail: "Carbon and nitrogen cycle, greenhouse effect, acid rain, ozone layer depletion, climate change" },
                        { label: "Vegetation and adaptation", detail: "Forest types of Nepal; biological invasion; ecological succession. Concept of ecological adaptation (Hydrosere & Xerosere)" }
                    ]
                },
                {
                    n: 4,
                    title: "Cell Biology",
                    weight: 5,
                    topics: [
                        { label: "", detail: "Concept of prokaryotic and eukaryotic cells; cell theory" },
                        { label: "Composition, structure and functions of", detail: "Cell wall, cell membrane, mitochondria, chloroplasts, endoplasmic reticulum (ER), Golgi body, lysosome, ribosome, nucleus, chromosomes, cilia and flagella, cell inclusions; Concept of cell cycle; amitosis, mitosis and meiosis; cell division and its significance" }
                    ]
                },
                {
                    n: 5,
                    title: "Genetics",
                    weight: 6,
                    topics: [
                        { label: "Genetic Material", detail: "Introduction; composition, structure and functions of DNA and RNA; DNA replication; concept of central dogma; genetic code" },
                        { label: "Mendelian Genetics", detail: "General terminology; laws of inheritance; incomplete dominance; co-dominance. Concept and types of linkage; complete and incomplete linkage; concept and significance of crossing over" },
                        { label: "Sex-linked Inheritance", detail: "Introduction; concepts and patterns of sex-linked inheritance; color blindness in humans; eye color in Drosophila melanogaster" },
                        { label: "Mutation & Polyploidy", detail: "Concept and types (gene and chromosomal mutations); importance of mutation; polyploidy (origin, types and significance); causes and examples of genetic disorders (Down's syndrome, Turner's syndrome, Edward's syndrome, Klinefelter's syndrome, albinism, hemophilia)" }
                    ]
                },
                {
                    n: 6,
                    title: "Plant Anatomy",
                    weight: 3,
                    topics: [
                        { label: "", detail: "Concept, characters, classification, structure, and functions of different types of plant tissues; types of vascular bundles; T.S. and L.S.; study of monocot and dicot root, stem, and leaf" }
                    ]
                },
                {
                    n: 7,
                    title: "Plant Physiology",
                    weight: 6,
                    topics: [
                        { label: "Water Relations", detail: "Diffusion, diffusion pressure, diffusion pressure deficit, osmosis; concept of diffusion, diffusion pressure, diffusion pressure deficit, osmosis and its types, plasmolysis, osmotic pressure, osmotic potential, water potential, wall potential, turgor pressure and wall pressure. Transpiration, ascent of sap, absorption, imbibition, guttation, wilting" },
                        { label: "Photosynthesis", detail: "Introduction and significance of photosynthesis, photosynthetic pigments, Photosystem I and II, light-dependent reactions, Calvin–Benson cycle (C₃ cycle), Hatch–Slack pathway (C₄ cycle), photorespiration, factors affecting photosynthesis, concept of bacterial photosynthesis" },
                        { label: "Respiration", detail: "Introduction and significance of respiration, types of respiration, mechanism of aerobic and anaerobic respiration, glycolysis, oxidative decarboxylation and Krebs (TCA) cycle, electron transport system and oxidative phosphorylation, anaerobic respiration and its mechanism, factors affecting respiration" },
                        { label: "Plant Growth", detail: "Physiological roles and application of plant growth promotors (auxin, gibberellins and cytokinins), Seed germination and types, seed dormancy" }
                    ]
                },
                {
                    n: 8,
                    title: "Developmental Botany",
                    weight: 2,
                    topics: [
                        { label: "", detail: "Asexual reproduction, sporogenesis and gametogenesis in angiosperms, pollination and its types, fertilization, structure of monocot and dicot embryo, types and functions of endosperms" }
                    ]
                },
                {
                    n: 9,
                    title: "Applied Botany",
                    weight: 3,
                    topics: [
                        { label: "", detail: "Introduction, concept, types and application of plant tissue culture; Introduction, concept and application of genetic engineering; Biofertilizers, green manures, plant breeding, bio-engineering, food safety and security" }
                    ]
                }
            ]
        },
        {
            name: "MAT",
            accent: "cyan",
            total: 20,
            units: [
                {
                    n: 1,
                    title: "Verbal Reasoning",
                    weight: 5,
                    topics: [
                        { label: "", detail: "Analogy and classification; coding and decoding; series completion; blood relations; direction sense; ranking and arrangement; logical deduction from statements" }
                    ]
                },
                {
                    n: 2,
                    title: "Numerical Reasoning",
                    weight: 5,
                    topics: [
                        { label: "", detail: "Number series and analogy; simplification and approximation; ratio, percentage, average and age problems; time, work, speed and distance; data interpretation from tables and charts" }
                    ]
                },
                {
                    n: 3,
                    title: "Logical Sequencing",
                    weight: 5,
                    topics: [
                        { label: "", detail: "Ordering of events, words and steps; syllogism; statement and assumption; statement and conclusion; cause and effect; course of action; venn diagram based deduction" }
                    ]
                },
                {
                    n: 4,
                    title: "Spatial Relation / Abstract Reasoning",
                    weight: 5,
                    topics: [
                        { label: "", detail: "Figure series and analogy; odd one out; mirror and water images; paper folding and cutting; embedded and hidden figures; cube and dice; pattern completion and rotation" }
                    ]
                }
            ]
        }
    ]
};
