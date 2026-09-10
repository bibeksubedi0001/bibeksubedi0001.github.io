(function () {
    "use strict";
    const sources = [
        { id: "quick-revision", title: "Quick Revision Notes", file: "QUICK REVISION  NOTES.pdf", pages: 178 },
        { id: "biology", title: "Biology", file: "Biology (1).pdf", pages: 328 }
    ];
    const topics = [];
    function add(subject, id, title, quick, biology, terms) {
        topics.push({ id, subject, title, terms: terms.split("|"), ranges: [
            ...quick.map(([first, last = first]) => ({ source: "quick-revision", first, last })),
            ...biology.map(([first, last = first]) => ({ source: "biology", first, last }))
        ] });
    }

    add("Physics", "dynamics", "Linear motion, forces and energy", [[2, 6]], [], "mechanics|kinematics|dynamics|newton|momentum|collision|friction|projectile|work and energy|kinetic energy|impulse|motion in straight|power");
    add("Physics", "circular-motion", "Circular motion", [[7, 8]], [], "circular|centripetal|centrifugal|banking|vertical circle");
    add("Physics", "oscillations", "Oscillations and simple harmonic motion", [[9], [14, 15]], [], "oscillation|harmonic|pendulum|spring|periodic motion");
    add("Physics", "gravitation", "Gravitation and satellites", [[10, 11]], [], "gravitation|gravity|satellite|escape velocity|orbital speed|kepler");
    add("Physics", "rotation", "Rotational motion", [[12, 13]], [], "rotation|rotational|moment of inertia|angular momentum|torque|rolling");
    add("Physics", "elasticity", "Elasticity", [[16]], [], "elasticity|young's modulus|young modulus|bulk modulus|rigidity|poisson|stress|strain|elastic wire|stretching a wire");
    add("Physics", "fluids", "Fluids and surface tension", [[17, 20]], [], "fluid|surface tension|viscosity|capillary|bernoulli|poiseuille|stokes|buoyancy|hydrostatic");
    add("Physics", "ray-optics", "Ray optics and optical instruments", [[21, 30]], [], "ray optics|reflection|refraction|lens|mirror|prism|optical instrument|microscope|telescope|total internal reflection|vision defect");
    add("Physics", "wave-optics", "Waves, interference and polarization", [[31, 33]], [], "wave optics|interference|diffraction|polarization|polarisation|young's double|ydse|grating|brewster|wave motion|acoustic|doppler|stationary waves|sound");
    add("Physics", "thermal-physics", "Heat and thermodynamics", [[34, 44]], [], "thermodynamic|heat|temperature|thermal|ideal gas|kinetic theory|calorimetry|carnot|entropy|humidity");
    add("Physics", "modern-physics", "Atomic and nuclear physics", [[45, 55]], [], "modern physics|nuclear|radioactiv|photon|photoelectric|bohr|hydrogen spectrum|x-ray|x ray|de broglie|electron|half-life|fusion|fission|quark");
    add("Physics", "semiconductors", "Semiconductors and logic gates", [[56, 57]], [], "semiconductor|diode|transistor|logic gate|rectifier|band gap|nand|nor gate");
    add("Physics", "electricity", "Current electricity and circuits", [], [], "current electricity|electrical circuit|resistance|kirchhoff|wheatstone|potentiometer|galvanometer|ohm|joule heating|thermoelectric");
    add("Physics", "magnetism", "Magnetism and electromagnetic induction", [], [], "magnetism|magnetic|electromagnetic|induction|solenoid|lorentz|hall effect|faraday|lenz|transformer|inductor");
    add("Physics", "alternating-current", "Alternating current", [], [], "alternating current|lcr|rlc|impedance|rms|power factor|ac circuit|reactance|resonance");
    add("Physics", "electrostatics", "Electrostatics and capacitors", [], [], "electrostatic|electric field|electric potential|coulomb|capacitor|capacitance|dielectric|gauss");

    add("Chemistry", "stoichiometry", "Chemical combinations and stoichiometry", [[59, 60]], [], "stoichiometry|mole concept|limiting reactant|chemical combination|empirical formula|molecular formula|percentage composition");
    add("Chemistry", "chemical-equilibrium", "Chemical and ionic equilibrium", [[61, 63]], [], "equilibrium|acid|base|buffer|solubility product|le chatelier|pH|pOH|hydrolysis");
    add("Chemistry", "thermochemistry", "Chemical thermodynamics", [[64]], [], "thermodynamic|enthalpy|entropy|gibbs|hess|heat of reaction|heat capacity");
    add("Chemistry", "electrochemistry", "Electrochemistry", [[65]], [], "electrochem|electrolysis|electrode|galvanic|faraday|nernst|cell potential|fuel cell");
    add("Chemistry", "solutions", "Solutions and colloids", [[66]], [], "solution|colloid|osmotic|molarity|molality|concentration|raoult|colligative|peptization");
    add("Chemistry", "kinetics", "Chemical kinetics and catalysis", [[67]], [], "kinetics|rate constant|order of reaction|activation energy|catalysis|catalyst|half-life");
    add("Chemistry", "bonding", "Chemical bonding and molecular shape", [[68, 69]], [], "bonding|molecular shape|hybridization|hybridisation|vsepr|dipole|sigma bond|pi bond|molecular orbital|bond order");
    add("Chemistry", "solid-state", "Solid state and crystals", [[70, 71]], [], "solid state|crystal|unit cell|packing|lattice|coordination number");
    add("Chemistry", "gases", "Gases and states of matter", [[72]], [], "gas law|ideal gas|real gas|avogadro|kinetic theory|states of matter|boyle|charles");
    add("Chemistry", "organic-basics", "Organic principles and isomerism", [[73, 74]], [], "organic principle|general organic|isomer|iupac|inductive|resonance|hyperconjugation|carbocation|carbanion|homologous");
    add("Chemistry", "hydrocarbons", "Hydrocarbons and aromatic compounds", [[75, 77]], [], "hydrocarbon|alkane|alkene|alkyne|benzene|aromatic|markovnikov|ethyne|ethene|reforming");
    add("Chemistry", "haloalkanes", "Haloalkanes and haloarenes", [[78]], [], "haloalkane|haloarene|alkyl halide|chloroform|chlorobenzene|sn1|sn2|saytzeff");
    add("Chemistry", "alcohols", "Alcohols, phenols and ethers", [[79, 80]], [], "alcohol|phenol|ether|williamson|ethanol|lucas test");
    add("Chemistry", "carbonyl", "Aldehydes and ketones", [[81, 82]], [], "aldehyde|ketone|carbonyl|aldol|cannizzaro|haloform|iodoform|tollens|fehling");
    add("Chemistry", "carboxylic-acids", "Carboxylic acids and derivatives", [[83]], [], "carboxylic|carboxyl|ester|acid chloride|acyl|amide|anhydride|saponification");
    add("Chemistry", "amines", "Amines, nitro and organometallic compounds", [[84]], [], "amine|aniline|diazonium|nitro|grignard|organometallic|carbylamine");
    add("Chemistry", "organic-biomolecules", "Biomolecules in chemistry", [[85, 86]], [], "biomolecule|carbohydrate|amino acid|protein|peptide|glucose|sugar|lipid");
    add("Chemistry", "polymers", "Polymers and rubber", [[87, 88]], [], "polymer|rubber|nylon|polyethylene|bakelite|monomer|teflon");
    add("Chemistry", "applied-chemistry", "Drugs and applied chemistry", [[89, 90]], [], "applied chemistry|manufactur|drug|antacid|antibiotic|antiseptic|disinfectant|haber|contact process|ostwald|solvay|fertilizer|cement");
    add("Chemistry", "periodicity", "Atomic structure and periodicity", [[91, 93]], [], "atomic structure|periodic|ionization|ionisation|electron affinity|quantum number|electronic configuration|orbital|aufbau|hund|pauli");
    add("Chemistry", "s-block", "Hydrogen, water and s-block elements", [[94, 96]], [], "s-block|alkali|alkaline|hardness|washing soda|sodium|calcium|magnesium|heavy water|hydrogen peroxide");
    add("Chemistry", "p-block", "p-block elements and non-metals", [[97, 101]], [], "p-block|non-metal|nonmetal|halogen|chlorine|bromine|iodine|sulphur|sulfur|phosph|nitrogen|ammonia|ozone|aluminium");
    add("Chemistry", "d-block", "Transition metals and metallurgy", [[102]], [], "d-block|transition|metallurgy|copper|zinc|iron|mercury|silver|ore|coordination compound");
    add("Chemistry", "analytical-chemistry", "Analytical chemistry", [], [], "analytical|titration|indicator|separation|chromatography|lassaigne|salt analysis|qualitative analysis|volumetric");

    add("Botany", "microbes", "Classification, bacteria and viruses", [[104, 109]], [[228, 235]], "classification|taxonomy|monera|bacteria|bacterium|virus|viruses|viroid|prion|cyanobacter|five kingdom");
    add("Botany", "fungi", "Fungi and lichens", [[110]], [[236, 239]], "fungi|fungus|lichen|yeast|mycology|mycorrhiza|basidiomyc|ascomyc|rhizopus");
    add("Botany", "algae", "Algae", [[111, 113]], [[240, 243]], "algae|alga|spirogyra|chlamydomonas|diatom|phaeophy|rhodophy|phycology");
    add("Botany", "bryophytes", "Bryophytes", [[114, 115]], [[244, 246]], "bryophy|moss|funaria|marchantia|liverwort|protonema");
    add("Botany", "pteridophytes", "Pteridophytes", [[116]], [[247, 248]], "pteridophy|fern|selaginella|lycopodium|equisetum|prothallus");
    add("Botany", "gymnosperms", "Gymnosperms and plant life cycles", [[117, 118]], [[249, 253]], "gymnosperm|cycas|pinus|gnetum|ephedra|alternation of generations|plant life cycle");
    add("Botany", "flowering-plants", "Flowering-plant morphology and families", [[121, 129]], [[254, 269]], "angiosperm|morphology|family|families|inflorescence|placentation|aestivation|root modification|stem modification|leaf modification|fruit|brassicaceae|fabaceae|solanaceae");
    add("Botany", "plant-anatomy", "Plant anatomy and tissues", [[119, 120]], [[271, 274], [276, 279]], "plant anatomy|plant tissue|meristem|vascular bundle|cambium|xylem|phloem|parenchyma|collenchyma|sclerenchyma|dicot stem|monocot stem|secondary growth");
    add("Botany", "plant-transport", "Water relations and transport", [[130]], [[310, 319]], "water relation|transport|transpiration|ascent of sap|osmosis|water potential|plasmolysis|guttation|stomata|cohesion");
    add("Botany", "photosynthesis", "Photosynthesis", [[131, 133]], [[289, 294]], "photosynth|calvin|c4|c3|kranz|photorespiration|photophosphorylation|chlorophyll|photosystem");
    add("Botany", "plant-respiration", "Cellular respiration", [[134, 135]], [[296, 299]], "respiration|glycolysis|krebs|fermentation|oxidative phosphorylation|electron transport|respiratory quotient");
    add("Botany", "cell-biology", "Cell biology", [[136, 137]], [[214, 226]], "cell biology|cytology|cell membrane|organelle|mitochondria|ribosome|lysosome|golgi|endoplasmic|cytoskeleton|peroxisome");
    add("Botany", "plant-reproduction", "Plant reproduction and embryology", [[138]], [[281, 288]], "plant reproduction|plant embryology|developmental botany|pollination|double fertilization|double fertilisation|embryo sac|microspor|megaspor|pollen|ovule|endosperm|apomixis");
    add("Botany", "genetics", "Genetics, cell division and molecular biology", [[139, 140]], [[195, 212]], "genetics|mendel|inheritance|chromosome|cell division|mitosis|meiosis|DNA|RNA|genetic code|mutation|replication|transcription|translation|linkage|blood group");
    add("Botany", "biotechnology", "Biotechnology and applied botany", [[141, 142]], [[167, 169]], "biotechnology|applied botany|genetic engineering|tissue culture|restriction|plasmid|cloning|pcr|biofertilizer|fermenter|medicinal plant|economic botany");
    add("Botany", "ecology", "Ecology, conservation and pollution", [[143]], [[181, 193]], "ecology|ecosystem|vegetation|conservation|pollution|food chain|pyramid|succession|population|biodiversity conservation|biogeochemical|greenhouse|eutrophication");
    add("Botany", "plant-growth", "Plant growth, hormones and movement", [], [[301, 308]], "plant growth|plant hormone|auxin|gibberellin|cytokinin|abscisic|ethylene|germination|senescence|photoperiod|vernalization|tropism|nastic|plant movement");
    add("Botany", "plant-minerals", "Mineral nutrition", [], [[321, 322]], "mineral nutrition|micronutrient|macronutrient|deficiency|mineral uptake|nitrogen fixation|nitrogen metabolism");
    add("Botany", "biomolecules", "Biomolecules and enzymes", [], [[275], [323, 328]], "biomolecule|basic components|enzyme|protein|carbohydrate|lipid|mineral|amino acid|vitamin|nucleotide");

    add("Zoology", "digestion", "Digestion and absorption", [[144]], [[108, 115]], "digestion|digestive|absorption|alimentary|saliva|stomach|pancreatic|bile|liver|villus|intestinal");
    add("Zoology", "nutrition", "Vitamins and nutrition", [[145]], [], "vitamin|nutrition|deficiency|malnutrition|balanced diet");
    add("Zoology", "nervous-system", "Nervous system and nerve impulses", [[146, 147]], [[83, 90]], "nervous|neuron|nerve|synapse|brain|spinal|action potential|resting potential|neurotransmitter|myelin|reflex");
    add("Zoology", "endocrine", "Endocrine system", [[148, 149]], [[127, 132]], "endocrine|hormone|pituitary|thyroid|adrenal|insulin|glucagon|hypothalamus|parathyroid");
    add("Zoology", "circulation", "Circulation and the heart", [[150, 151]], [[103, 106]], "circulation|circulatory|heart|cardiac|blood vessel|haemoglobin|hemoglobin|blood pressure|cardiovascular|portal vein");
    add("Zoology", "human-respiration", "Human respiration", [[152]], [[78, 81]], "respiration|respiratory|lung|pulmonary|alveol|breathing|tidal|oxygen dissociation|bohr effect");
    add("Zoology", "human-reproduction", "Human reproduction", [[153, 154]], [[117, 125]], "reproduction|reproductive|sperm|testis|ovary|menstrual|ovulation|fertilization|fertilisation|pregnancy|placenta|contraception");
    add("Zoology", "excretion", "Excretion and osmoregulation", [[155, 156]], [[98, 101]], "excretion|excretory|kidney|nephron|urine|urea|osmoregulation|glomerul|loop of henle");
    add("Zoology", "senses", "Sense organs", [[157]], [[134, 138]], "sense organ|eye|ear|retina|cochlea|vision|hearing|organ of corti|lens|iris");
    add("Zoology", "protozoa", "Protozoa", [[158], [160]], [[26, 30]], "protozoa|protozoan|amoeba|paramecium|euglena|protista");
    add("Zoology", "plasmodium", "Plasmodium and malaria", [[159]], [[4]], "plasmodium|malaria|sporozoite|schizogony|anopheles");
    add("Zoology", "evolution", "Origin and evolution of life", [[161]], [[173, 179]], "evolution|origin of life|darwin|lamarck|fossil|hardy-weinberg|speciation|homologous|analogous|human evolution");
    add("Zoology", "animal-diversity", "Animal classification and diversity", [[162, 165], [167, 171]], [[14, 15], [23, 24], [31, 66]], "animal diversity|animal kingdom|classification|phylum|chordata|porifera|cnidaria|platyhelminth|nematod|arthropod|mollusc|echinoderm|vertebrate|mammal|reptile|aves|pisces|cockroach");
    add("Zoology", "earthworm", "Earthworm", [[166]], [[6, 12]], "earthworm|pheretima|clitellum|setae|nephridia|typhlosole");
    add("Zoology", "frog", "Frog anatomy and physiology", [], [[16, 22]], "frog|rana|hoplobatrachus|amphibia|pulmocutaneous");
    add("Zoology", "animal-tissues", "Animal tissues and blood", [[172, 174]], [[67, 76]], "animal tissue|histology|epithelial|connective|muscular tissue|cartilage|blood cell|leukocyte|erythrocyte|haemopoiesis");
    add("Zoology", "diseases", "Human diseases and immunity", [[175]], [[140, 148]], "disease|immunity|infection|tuberculosis|typhoid|hiv|aids|pathogen|antibody|vaccin|immune");
    add("Zoology", "embryology", "Animal embryology", [[176]], [[158, 161]], "embryology|cleavage|blastula|gastrula|neurula|germ layer|morula|embryonic development");
    add("Zoology", "skeleton", "Skeleton, joints and movement", [[177, 178]], [[91, 96]], "skeleton|skeletal|joint|bone|vertebra|skull|humerus|femur|locomotion|muscle contraction");
    add("Zoology", "adaptation", "Animal adaptation and behaviour", [], [[150, 156]], "adaptation|behaviour|behavior|ethology|taxis|migration|hibernation|conditioning|imprinting|camouflage");
    add("Zoology", "applied-zoology", "Applied zoology", [], [[163, 166]], "applied zoology|pisciculture|sericulture|apiculture|poultry|animal husbandry|ivf|test tube");

    add("MAT", "verbal-reasoning", "Verbal reasoning", [], [], "verbal|analogy|classification|coding|word|letter|blood relation|family relation");
    add("MAT", "numerical-reasoning", "Numerical reasoning", [], [], "numerical|quantitative|arithmetic|number|percentage|ratio|average|work|speed|train|profit|interest");
    add("MAT", "logical-reasoning", "Logical reasoning", [], [], "logical|logic|analytical|syllogism|assumption|conclusion|sequence|arrangement|direction|truth");
    add("MAT", "spatial-reasoning", "Spatial and abstract reasoning", [], [], "spatial|abstract|non-verbal|nonverbal|mirror|cube|figure|rotation|paper folding|venn|pattern");

    const assigned = new Set();
    for (const topic of topics) for (const range of topic.ranges) {
        for (let page = range.first; page <= range.last; page++) {
            const key = range.source + ":" + page;
            if (assigned.has(key)) throw new Error("Duplicate source page " + key);
            assigned.add(key);
        }
    }
    const reference = { id: "source-front-matter", subject: "Reference", title: "Covers, dividers and study planning", terms: [], ranges: [] };
    for (const source of sources) for (let page = 1; page <= source.pages; page++) {
        if (!assigned.has(source.id + ":" + page)) reference.ranges.push({ source: source.id, first: page, last: page });
    }
    topics.push(reference);
    window.CEE_STUDY_CATALOG = Object.freeze({ sources, topics, questionCount: 253,
        questionFiles: ["js/cee-source-questions/typed.js", "js/cee-source-questions/genetics-01.js", "js/cee-source-questions/genetics-02.js", "js/cee-source-questions/genetics-03.js"] });
})();