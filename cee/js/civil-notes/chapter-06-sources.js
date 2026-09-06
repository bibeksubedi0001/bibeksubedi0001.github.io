(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0601: {
            code: "ACiE0601",
            questionCount: 65,
            blocks: [
                {
                    id: "sources-safe-source-and-demand-workflow",
                    title: "Select a safe, dependable supply against an explicit demand — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not supply a complete catchment investigation or scheme-design dataset. Source selection connects quantity, quality, reliability and operation; choosing the clearest sample or the shortest pipeline is insufficient.</p>" +
                        "<ol><li>Define the service area, present users, design horizon, service level, institutions and other authorised uses. Separate existing consumption from unmet need.</li><li>Survey candidate catchments, sanitary hazards, land and abstraction constraints, competing uses, elevations, access and energy requirements. Measure seasonal yield and sample during both ordinary and adverse conditions.</li><li>Forecast demand with documented population, consumption and loss assumptions. Compare the appropriate operating-day volume with dependable, legally and environmentally available yield, not the largest observed flow.</li><li>Identify treatment barriers and the skills, chemicals, power, spare parts and waste management needed to keep them working.</li><li>Check transmission, storage, pressure zones, redundancy and monitoring as one system; record uncertainties and the evidence needed before approval.</li></ol>" +
                        "<p><em>Hypothetical feasibility check:</em> 2,000 people at 80 L/person/day plus 20 m<sup>3</sup>/day of other demand require 180 m<sup>3</sup>/day delivered. With losses of 20% of input, production is <strong>225 m<sup>3</sup>/day = 2.60417 L/s</strong>, assuming no additional plant-use allowance. An available 3 L/s supplies 259.2 m<sup>3</sup>/day. A stipulated 1.4 maximum-day factor requires <strong>315 m<sup>3</sup>/day</strong>, leaving 55.8 m<sup>3</sup> to recover from storage or another source that day. Storage cannot cure a persistent volume deficit. Producing the average day's volume in 18 hours instead requires 3.47222 L/s during operation, so the collection and pumping arrangements also matter.</p>",
                    sources: []
                },
                {
                    id: "sources-surface-water-characteristics",
                    title: "Rivers, lakes and reservoirs are surface sources, not identical treatment problems",
                    html: "<p>Rivers, streams, lakes and impounding reservoirs contain water at the land surface. A reservoir remains a surface source even though its intake is submerged or its water later enters a buried main. Wells and tube wells instead abstract from geological formations. Classify the origin and flow path, not merely the appearance of the collection structure.</p>" +
                        "<p>River discharge and raw-water quality can change rapidly with rainfall, snowmelt, erosion and upstream discharges. A river is therefore a plausible large-supply source, but <strong>continuous adequate flow is not guaranteed</strong>. Low-flow records, abstraction restrictions, flood access and sediment behaviour must be investigated. The most common source also depends on the region and population being described.</p>" +
                        "<p>Lake or reservoir storage can moderate short-term inflow variation and settle some particles. Longer residence can also favour algae, thermal stratification, low oxygen at depth and changes in iron or manganese solubility. Raw-water quality may differ between depths and seasons, making selective withdrawal useful where justified.</p>" +
                        "<p>Surface sources generally require strong catchment protection and suitable treatment barriers because they can receive faecal and chemical pollution. Nevertheless, neither a source name nor a blanket instruction to provide full treatment defines the required processes. Testing and risk assessment determine what must be removed or inactivated and how performance will be verified.</p>",
                    sources: [
                        { id: "WATE813-00024", set: 4, question: 94 },
                        { id: "WATE813-00085", set: 10, question: 94 },
                        { id: "WATE813-00300", set: 30, question: 92 }
                    ]
                },
                {
                    id: "sources-groundwater-springs-and-protection",
                    title: "A clear hill spring can still carry microbial or dissolved hazards",
                    html: "<p>A spring is a natural discharge of groundwater where hydraulic conditions bring water from an aquifer to the surface. Percolation through suitable soil can remove many suspended particles, explaining why some springs and wells are clearer than nearby streams. This is a tendency, not a certificate of potability.</p>" +
                        "<p>Fractures, karst conduits, shallow flow paths, leaking sanitation systems and polluted recharge can carry microorganisms to a spring with little effective filtration. A storm-related rise in turbidity or bacterial indicators can reveal a rapid surface connection. Collection chambers, drainage and animal exclusion protect the outlet but do not automatically protect the entire recharge area.</p>" +
                        "<p>Groundwater also dissolves constituents from rock and soil. Calcium and magnesium may create hardness; arsenic, fluoride, nitrate, iron or manganese may require investigation according to local geology and land use. Clear water can therefore need chemical treatment as well as microbial protection. Conversely, an objectionable taste alone does not identify the responsible chemical or its concentration.</p>" +
                        "<p>A useful spring assessment combines a sanitary inspection, mapped recharge hazards, dry-season discharge measurements, repeated quality testing and assessment of treatment reliability. Protect the recharge and collection areas, avoid creating contaminated backflow paths, and maintain barriers through storage and distribution. Do not treat hill location, groundwater classification or low suspended matter as proof that disinfection is unnecessary.</p>",
                    sources: [
                        { id: "WATE813-00001", set: 2, question: 91 },
                        { id: "WATE813-00301", set: 30, question: 93 },
                        { id: "WATE813-00303", set: 30, question: 95 }
                    ]
                },
                {
                    id: "sources-aquifer-storage-transmission-and-yield",
                    title: "An aquifer must transmit usable water as well as store it",
                    html: "<p>Porosity describes the fraction of a material occupied by voids; hydraulic conductivity describes how readily water moves through the saturated material under a hydraulic gradient. Large storage does not necessarily mean useful well yield. Fine clay can contain much water but transmit it slowly because its small, poorly conducting pathways resist flow.</p>" +
                        "<p>An <strong>aquifer</strong> is a formation capable of storing and transmitting appreciable water under the relevant field conditions. Clean, connected sand and gravel are common examples. An <strong>aquitard</strong> transmits water slowly; an <strong>aquiclude</strong> is an idealised water-storing but essentially non-transmitting unit. An aquifuge neither stores nor transmits appreciable water in the elementary classification. Real formations require measured properties rather than an absolute label based on appearance.</p>" +
                        "<p>For saturated laminar flow through a representative section, Darcy's relation is <strong>Q = KAi</strong>, where Q is m<sup>3</sup>/s, K hydraulic conductivity in m/s, A the gross flow area in m<sup>2</sup>, and i head loss divided by flow length. This discharge is not pore velocity and does not alone establish sustainable abstraction.</p>" +
                        "<p>Well design additionally needs saturated thickness, drawdown, recharge, boundary conditions, interference and pumping-test recovery. Intact granite has little primary permeability, but fractures can make granite a productive aquifer. Mud is not infinitely impermeable, and sand containing much fine material may yield poorly. The design quantity is a defensible dependable yield, not all water stored underground.</p>",
                    sources: [
                        { id: "WATE813-00302", set: 30, question: 94 },
                        { id: "WATE813-00323", set: 32, question: 93 },
                        { id: "WATE813-00324", set: 32, question: 94 }
                    ]
                },
                {
                    id: "sources-infiltration-wells-and-galleries",
                    title: "Subsurface collection can remain hydraulically connected to a polluted river",
                    html: "<p>An infiltration gallery collects subsurface water along a horizontal or gently sloping permeable collector. Perforated pipes or accessible collection galleries can intercept water over a broad area. An infiltration well collects through its permeable sides or surrounding formation into a well. Neither structure is defined by being very deep, and a gallery is not necessarily a person-sized tunnel.</p>" +
                        "<p>These are conventionally grouped with groundwater collection works because water enters through the ground. Beside a river, however, pumping may induce river water to infiltrate the bed and bank. The captured water can be a mixture of native groundwater and recently infiltrated surface water. That connection is important for microbial risk, travel time and the effect of a contaminated river event.</p>" +
                        "<p>Natural filtration can reduce particles and alter water chemistry, but performance depends on sediments, clogging, hydraulic loading, temperature and travel pathways. A clear collector discharge does not prove removal of viruses or dissolved contaminants. Floodwater entering an unsealed well head can bypass the intended filtration path entirely.</p>" +
                        "<p>Selection therefore requires permeable-layer information, seasonal river and groundwater levels, pumping or yield tests, sanitary protection and a maintainable collection arrangement. Assess scour, bank instability, collector clogging and interference with other abstractions. Compare the dependable treated output and operating burden, rather than assuming that the words infiltration or groundwater eliminate the need for treatment and monitoring.</p>",
                    sources: [
                        { id: "WATE813-00321", set: 32, question: 91 },
                        { id: "WATE813-00322", set: 32, question: 92 }
                    ]
                },
                {
                    id: "sources-suspended-colloidal-and-dissolved-impurities",
                    title: "Match the barrier to the physical form of an impurity — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide a complete impurity-fraction analysis. The suspended, colloidal and dissolved classification helps explain treatment selection, but the boundaries are operational and depend on the test method; no universal particle-size cut-offs are imposed here.</p>" +
                        "<table><thead><tr><th scope='col'>Form</th><th scope='col'>Behaviour and engineering response</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Suspended</th><td>Discrete particles such as silt, debris and some organisms. Coarse material may be screened; settleable material can be removed by sedimentation; finer particles require appropriate filtration or prior destabilisation.</td></tr>" +
                        "<tr><th scope='row'>Colloidal</th><td>Very small dispersed particles can remain stable because of surface interactions and slow settling. Coagulation destabilises them and flocculation promotes larger aggregates before separation.</td></tr>" +
                        "<tr><th scope='row'>Dissolved</th><td>Ions, molecules and gases are dispersed in solution. Ordinary screening or settling does not remove dissolved nitrate or hardness. Suitable chemical, biological, adsorption or membrane processes depend on the constituent.</td></tr></tbody></table>" +
                        "<p>Physical form and hazard are different axes: a dissolved chemical can be harmful or harmless at its measured concentration; a suspended particle can shield a microorganism. Turbidity, suspended-solids mass, dissolved-solids mass, colour and microbial counts therefore answer different questions. Passing one test does not establish success in the others.</p>" +
                        "<p>A sound investigation identifies the contaminant, its concentration and form, seasonal variation and the required finished-water performance. A proposed process then needs demonstrable removal or inactivation under the actual water conditions, plus a safe route for its residuals. Do not choose a process solely because the sample looks cloudy.</p>",
                    sources: []
                },
                {
                    id: "sources-turbidity-is-optical-not-mass",
                    title: "NTU measures light scattering; it is not interchangeable with ppm",
                    html: "<p><strong>Turbidity</strong> describes the optical effect of particles that scatter and absorb light. Clay, silt, microorganisms and fine precipitates can contribute. A nephelometric measurement compares scattered light with a calibrated reference and reports the result using its specified method, commonly in <strong>NTU</strong>. Instrument geometry, light source and calibration affect comparability.</p>" +
                        "<p>Suspended-solids concentration is instead a mass of retained material per volume, usually mg/L under a stated filtration and drying procedure. Equal masses of coarse sand and fine clay can produce very different optical responses. Particle size, shape, colour and refractive properties prevent a universal conversion between turbidity and suspended-solids mass.</p>" +
                        "<p>The old silica-scale use of ppm describes a historical reference suspension, not a general identity <strong>1 NTU = 1 mg/L</strong>. Even the approximate numerical equivalence of mg/L and mass-based ppm applies only to dilute water of density close to 1 kg/L; it cannot convert an optical measurement into a mass measurement.</p>" +
                        "<p>The bank's suspended-solids answer identifies a common cause of cloudiness, not a gravimetric definition. Turbidity is neither pH nor BOD. Operationally, particles can reduce disinfection effectiveness and obscure treatment failures. Nepal 2079 lists 5 NTU, while WHO discusses lower operational targets before disinfection. Meeting a turbidity value does not by itself demonstrate absence of pathogens or dissolved chemical hazards.</p>",
                    sources: [
                        { id: "WATE813-00008", set: 2, question: 98 },
                        { id: "WATE813-00136", set: 15, question: 91 },
                        { id: "WATE813-00308", set: 1, question: 99 }
                    ]
                },
                {
                    id: "sources-colour-true-apparent-and-acceptability",
                    title: "True colour excludes particle interference under the specified method",
                    html: "<p><strong>Apparent colour</strong> includes the influence of suspended matter; true colour is assessed after removing turbidity by an appropriate specified preparation. The preparation must not inadvertently remove the dissolved colour being measured. Humic substances, metals and industrial contaminants can contribute colour, so an observed tint does not uniquely identify its cause.</p>" +
                        "<p>The platinum–cobalt scale expresses colour relative to a calibrated reference. One colour unit corresponds to the colour of a standard containing <strong>1 mg of platinum per litre</strong>, prepared using the specified platinum–cobalt reagents. It is not a statement that every coloured sample contains that mass of platinum or that one milligram of an arbitrary platinum–cobalt mixture defines the unit.</p>" +
                        "<p>A tintometer or suitable calibrated comparator can be used; instrumental methods also require the correct calibration, sample handling and reporting basis. The method name alone does not establish a single universal glass-slide arrangement. Record whether the result is true or apparent colour rather than comparing unlike measurements.</p>" +
                        "<p>Nepal's inspected 2079 table lists <strong>5 TCU</strong>. WHO 2022 describes colour below 15 TCU as often acceptable to consumers but sets no health-based colour guideline value. Those statements are not competing universal safety limits. Taste and odour are similarly useful warning and acceptability observations, not substitutes for targeted microbial and chemical analysis; apparently attractive water can still be unsafe.</p>",
                    sources: [
                        { id: "WATE813-00009", set: 2, question: 99 },
                        { id: "WATE813-00023", set: 4, question: 93 }
                    ]
                },
                {
                    id: "sources-hardness-soap-heat-and-corrosion",
                    title: "Hardness affects soap and scaling, but does not make lead plumbing safe",
                    html: "<p>Hardness is principally the effect of dissolved calcium and magnesium ions, with other multivalent metals sometimes contributing. These ions react with ordinary soap to form insoluble salts, consuming soap before a persistent lather forms. Soft water has comparatively low hardness; it need not contain absolutely zero calcium or magnesium, and softness is not proof of microbiological safety.</p>" +
                        "<p>Bicarbonate-associated hardness is conventionally called temporary or carbonate hardness. Heating can shift carbonate equilibria and precipitate calcium carbonate; magnesium removal can involve hydroxide formation under suitable conditions. Non-carbonate hardness, associated conventionally with strong-acid anions, is not removed simply by the same boiling treatment. Chemical speciation and operating conditions determine the actual precipitate.</p>" +
                        "<p>Scale in boilers reduces heat transfer and can contribute to overheating, so boiler-feed requirements differ from drinking-water acceptability. Non-volatile dissolved salts ordinarily <strong>raise</strong>, rather than depress, boiling temperature at fixed pressure. The small colligative effect is different from precipitation during heating and is not a practical test of whether water is safe.</p>" +
                        "<p>Taste preferences are not universal. Calcium is a nutrient, but a hardness measurement is not a dental-health assessment. Most importantly, carbonate deposition does <strong>not guarantee prevention of lead release</strong>. Corrosion depends on water chemistry, materials, deposits and changing operating conditions. Suspected lead-bearing plumbing needs proper risk management and testing; a visible scale layer is not an acceptable safety assurance.</p>",
                    sources: [
                        { id: "WATE813-00310", set: 31, question: 90 },
                        { id: "WATE813-00314", set: 31, question: 94 },
                        { id: "WATE813-00315", set: 31, question: 95 },
                        { id: "WATE813-00316", set: 31, question: 96 },
                        { id: "WATE813-00317", set: 31, question: 97 },
                        { id: "WATE813-00320", set: 31, question: 100 }
                    ]
                },
                {
                    id: "sources-hardness-caco3-equivalence-example",
                    title: "Convert different ions to one equivalent CaCO3 basis before adding",
                    html: "<p>Hardness is conventionally reported as <strong>mg/L as CaCO<sub>3</sub></strong>. This is an equivalence convention, not a claim that solid calcium carbonate is suspended in the sample. Equivalent mass is molar mass divided by ionic charge magnitude. Using the conventional rounded CaCO<sub>3</sub> equivalent mass of 50 mg/meq:</p>" +
                        "<p><strong>Equivalent concentration = constituent concentration × 50 / constituent equivalent mass.</strong> Both masses must use compatible units and the chemical form reported by the laboratory. A concentration of calcium ion is not the same input as an equal concentration of calcium chloride.</p>" +
                        "<p><em>Added hypothetical example; the bank provides no ion-analysis numbers:</em> take Ca<sup>2+</sup> = 40.08 mg/L and Mg<sup>2+</sup> = 12.15 mg/L. Use illustrative equivalent masses 20.04 and 12.15 mg/meq respectively.</p>" +
                        "<table><thead><tr><th scope='col'>Constituent</th><th scope='col'>Conversion</th><th scope='col'>mg/L as CaCO<sub>3</sub></th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Calcium</th><td>40.08 × 50 / 20.04</td><td>100</td></tr>" +
                        "<tr><th scope='row'>Magnesium</th><td>12.15 × 50 / 12.15</td><td>50</td></tr>" +
                        "<tr><th scope='row'>Total hardness</th><td>100 + 50</td><td>150</td></tr></tbody></table>" +
                        "<p>Adding the raw ion masses would give 52.23 mg/L of those ions, not the required hardness equivalent. Degree French and degree Clarke are historical hardness scales with their own definitions; degree Celsius measures temperature. Mass-based ppm is only approximately numerically equal to mg/L for dilute water near unit density. Always retain the reporting basis, especially before comparing hardness with alkalinity or a standard whose table may abbreviate its units.</p>",
                    sources: [
                        { id: "WATE813-00318", set: 31, question: 98 },
                        { id: "WATE813-00319", set: 31, question: 99 }
                    ]
                },
                {
                    id: "sources-alkalinity-ph-and-hardness-partition",
                    title: "Alkalinity is acid-neutralising capacity, not the same thing as pH",
                    html: "<p><strong>pH</strong> characterises hydrogen-ion activity at measurement; <strong>alkalinity</strong> measures acid-neutralising capacity to a specified titration endpoint. Bicarbonate, carbonate and hydroxide commonly contribute, although other species can matter. Two waters at the same pH can have very different buffering capacities and therefore require different chemical doses to change pH.</p>" +
                        "<p>For the conventional carbonate-hardness accounting, first express total hardness TH and total alkalinity A on the <strong>same CaCO<sub>3</sub>-equivalent basis</strong>. Then <strong>CH = min(TH, A)</strong> and <strong>NCH = TH − CH</strong>. These are non-negative equivalent quantities. Do not subtract a pH value, nitrate concentration or raw bicarbonate-ion mass from hardness.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical TH / A</th><th scope='col'>CH</th><th scope='col'>NCH</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>300 / 180</th><td>180</td><td>120</td></tr>" +
                        "<tr><th scope='row'>120 / 180</th><td>120</td><td>0</td></tr>" +
                        "<tr><th scope='row'>180 / 180</th><td>180</td><td>0</td></tr></tbody></table>" +
                        "<p><em>All table inputs are added examples, in mg/L as CaCO<sub>3</sub>, not bank givens.</em> When alkalinity exceeds hardness, the excess can be balanced by ions such as sodium; it does not create negative non-carbonate hardness. The equal case belongs naturally to either limiting expression.</p>" +
                        "<p>This bookkeeping supports softening analysis but is not a complete ionic-speciation or corrosion model. Titration endpoints, non-carbonate alkalinity and interfering constituents need consideration where significant. Neither high alkalinity nor acceptable pH demonstrates that pathogens or toxic chemicals are absent.</p>",
                    sources: [
                        { id: "WATE813-00309", set: 30, question: 100 },
                        { id: "WATE813-00325", set: 32, question: 95 },
                        { id: "WATE813-00326", set: 1, question: 100 }
                    ]
                },
                {
                    id: "sources-ph-and-microbial-barriers",
                    title: "pH control supports treatment; pH 9.5 is not a universal kill threshold",
                    html: "<p>The inspected Nepal 2079 standard gives a pH range of <strong>6.5–8.5</strong>. WHO 2022 does not establish a health-based pH guideline value; pH is important operationally for treatment, disinfection, corrosion and acceptability. Corrosion also depends on alkalinity, dissolved constituents, materials and deposits. A value inside the range is not proof that a particular pipe will not release metals.</p>" +
                        "<p>Chlorine chemistry changes with pH, affecting the proportion of the more effective hypochlorous-acid species. Thus the same measured residual and nominal contact time can give different inactivation under different conditions. Temperature, turbidity, organism and actual contact hydraulics also matter.</p>" +
                        "<p>WHO 2022's conditional chlorine guidance describes <strong>at least 0.5 mg/L free residual after at least 30 minutes at pH below 8</strong>, with a maintained distribution residual and at least 0.2 mg/L at delivery. These are not identical to Nepal's 0.10–0.50 mg/L range for chlorinated systems, nor to WHO's separate 5 mg/L health-based free-chlorine value. The latter is not an operating target.</p>" +
                        "<p><strong>E. coli is not universally or instantly killed at pH 9.5.</strong> Lime-softening inactivation depends on pH, time and other conditions; it cannot be inferred from one pH reading. Chlorine is also ineffective against Cryptosporidium oocysts under ordinary drinking-water chlorination conditions. A multi-barrier process and verification are required rather than treating alkalinity or a residual alone as proof of disinfection.</p>",
                    sources: [
                        { id: "WATE813-00016", set: 3, question: 96 },
                        { id: "WATE813-00019", set: 3, question: 99 }
                    ]
                },
                {
                    id: "sources-organisms-pathogens-and-respiration",
                    title: "Pathogenicity, organism type and oxygen use describe different properties",
                    html: "<p>A <strong>pathogen</strong> is an agent capable of causing disease in a susceptible host. Many environmental bacteria are not pathogenic; the mere existence of bacteria is therefore not a count of disease-causing organisms. Conversely, waterborne hazards include more than bacteria: viruses, protozoa and helminth eggs or larvae can be important.</p>" +
                        "<p>Bacteria are cellular organisms. Protozoa are single-celled eukaryotes; helminths are multicellular parasitic worms. Viruses are acellular infectious agents that replicate within suitable host cells. Calling both worms and viruses living organisms may fit a loose elementary grouping of biological contaminants, but it obscures an important biological distinction and should not be presented as an uncontested definition of life.</p>" +
                        "<p>Aerobic and anaerobic describe relationships to oxygen in metabolism, not whether an organism is harmful. Facultative organisms can use different metabolic pathways as conditions change. A parasite depends on a host, but parasite and pathogen are not interchangeable labels for every bacterium in water.</p>" +
                        "<p>Engineering controls must address transmission and resistance. Removal by filtration depends on organism size, particle association and the process; inactivation depends on the disinfectant and exposure conditions. Testing a small set of indicator organisms provides evidence about barriers and contamination, not a species-by-species census. The treatment and monitoring plan therefore uses risk assessment rather than assuming one bacterial result describes every biological hazard.</p>",
                    sources: [
                        { id: "WATE813-00004", set: 2, question: 94 },
                        { id: "WATE813-00299", set: 30, question: 91 }
                    ]
                },
                {
                    id: "sources-temperature-growth-and-survival",
                    title: "Temperature classes concern growth preferences, not universal survival limits",
                    html: "<p>Microorganisms have characteristic minimum, optimum and maximum growth temperatures under particular environmental conditions. Psychrophilic organisms prefer cold conditions, mesophilic organisms moderate conditions, and thermophilic organisms relatively high temperatures. These groups are useful biological descriptions, but their boundaries depend on the convention and species under discussion.</p>" +
                        "<p>The bank's <strong>40–70°C</strong> thermophilic band is an approximate teaching range, not a universal operating envelope for all thermophiles. Its <strong>−20 to 20°C</strong> psychrophilic survival statement must not be used as a general growth interval. Survival in frozen material, metabolic activity in a liquid microenvironment and sustained reproduction are different observations. Not every organism found in a cold pond is a strict psychrophile.</p>" +
                        "<p>Temperature affects reaction rates, oxygen solubility and disinfection performance as well as microbial ecology. Colder biological treatment can require more time or a different loading strategy; warming does not guarantee success if nutrients, oxygen, pH or retention conditions are unsuitable. Likewise, a chosen digester temperature does not by itself demonstrate pathogen destruction.</p>" +
                        "<p>For design or process assessment, identify the relevant organisms and validated operating conditions, then consider loading, retention time and resilience to temperature changes. For a drinking-water sample, record temperature where the method requires it and preserve the sample correctly. Do not infer that water is safe because it is cold or because it briefly entered a named temperature band.</p>",
                    sources: [
                        { id: "WATE813-00006", set: 2, question: 96 },
                        { id: "WATE813-00327", set: 32, question: 96 }
                    ]
                },
                {
                    id: "sources-ecoli-coliform-tests-and-sampling",
                    title: "E. coli and total coliforms do not carry the same sanitary meaning",
                    html: "<p><strong>E. coli</strong> is an important indicator of faecal contamination. WHO 2022 requires it not to be detectable in a 100 mL sample of water intended for drinking and treated water entering or within distribution. Detection requires immediate investigation. Absence in one sample is not proof that more resistant viruses or protozoa are absent.</p>" +
                        "<p><strong>Total coliforms</strong> include organisms of environmental origin. They can indicate changes in treatment or distribution cleanliness and integrity, but their presence is not invariably proof of recent faecal contamination. Their interpretation is therefore not interchangeable with that of E. coli.</p>" +
                        "<p>Membrane filtration passes a measured sample through a suitable membrane and cultures retained organisms under the specified method, producing colony-forming-unit results. Multiple-tube fermentation estimates a most probable number from positive and negative growth outcomes; MPN is a statistical estimate, not a different contamination class. Membrane filtration can be efficient for suitable samples, but turbid water, competing growth or injured organisms can affect its suitability. No method is always the better test.</p>" +
                        "<p>Representative sampling and preservation are as important as enumeration. Nepal's inspected directive §5(2) calls for microbiological testing within 6 hours, or, if that is not possible, transport/preservation at 4°C and testing within 24 hours; chlorine must be neutralised in chlorinated samples. Use the specified sterile containers and laboratory procedure. A poorly collected or delayed sample can misrepresent an otherwise correctly operated test.</p>",
                    sources: [
                        { id: "WATE813-00298", set: 29, question: 100 },
                        { id: "WATE813-00039", set: 5, question: 99 }
                    ]
                },
                {
                    id: "sources-waterborne-and-water-washed-prevention",
                    title: "Prevent infection by interrupting its route, not by memorising one list",
                    html: "<p><strong>Waterborne infection</strong> occurs when contaminated water conveys an infectious agent to a person, commonly through ingestion. Cholera is a classic example; typhoid and some forms of dysentery can also follow faecal–oral routes. Safe source protection, effective treatment, sanitation, safe handling and protected storage work together. Food and direct contact can also transmit some of the same infections.</p>" +
                        "<p><strong>Water-washed</strong> describes infections whose transmission is promoted by insufficient water or hygiene. The important intervention includes convenient access to enough suitable water for washing, not merely adding chlorine to a distant source. Trachoma spreads through infected eye or nose secretions carried by contact and some flies. WHO's SAFE approach combines surgery, antibiotics, facial cleanliness and environmental improvement; water and sanitation support prevention but are not the entire clinical programme.</p>" +
                        "<p>The bank's combined list needs qualification. Ascariasis is principally a soil-transmitted helminth infection involving ingestion of mature eggs; it should not be explained simply as direct person-to-person spread caused by lack of washing. Conjunctivitis has multiple causes, and the damaged term shinghoid does not establish a recognised diagnosis.</p>" +
                        "<p>Measles is predominantly airborne, not a conventional waterborne disease. That distinction does not mean water has no role in general hygiene or supportive care, nor that water improvements replace vaccination and appropriate infection control. The useful examination habit is to identify the organism, exposure route and intervention, while recognising that broad water-related classifications can overlap.</p>",
                    sources: [
                        { id: "WATE813-00007", set: 2, question: 97 },
                        { id: "WATE813-00294", set: 29, question: 96 },
                        { id: "WATE813-00297", set: 29, question: 99 },
                        { id: "WATE813-00311", set: 31, question: 91 },
                        { id: "WATE813-00333", set: 33, question: 91 }
                    ]
                },
                {
                    id: "sources-water-based-vector-and-outbreak-terms",
                    title: "Aquatic hosts, insect vectors and outbreak extent are separate classifications",
                    html: "<p><strong>Water-based diseases</strong> involve a pathogen that spends an essential part of its life cycle in an aquatic setting or intermediate host. Schistosomiasis is the important example here: freshwater snails release larval stages that can penetrate human skin during contact with infested water. Drinking is not required for that exposure. Sanitation, safe water access, exposure reduction and appropriate public-health control address different stages of the cycle.</p>" +
                        "<p><strong>Water-related vector diseases</strong> are transmitted by vectors whose ecology is associated with water. Malaria and yellow fever are transmitted by particular mosquitoes, not by drinking water containing those disease agents. Vector species differ in their breeding habitats, so drainage and water-container management must be appropriate to the setting. Water quantity or chlorination alone does not replace vector control and other disease-specific measures.</p>" +
                        "<p>Endemic, epidemic and pandemic describe occurrence in populations rather than the route of transmission. Endemic refers to an expected continuing presence within a population or area; an epidemic is occurrence above the expected level in a defined population and time. It is not necessarily confined to one community. A pandemic is an epidemic with extensive international or intercontinental spread, not simply a severe local outbreak.</p>" +
                        "<p>These terms help select surveillance and prevention questions. A disease can be endemic and waterborne, or epidemic and vector-borne. Neither wide spread nor the word aquatic makes water-based, water-washed and waterborne interchangeable.</p>",
                    sources: [
                        { id: "WATE813-00010", set: 2, question: 100 },
                        { id: "WATE813-00295", set: 29, question: 97 },
                        { id: "WATE813-00296", set: 29, question: 98 }
                    ]
                },
                {
                    id: "sources-nitrate-nitrite-and-reporting-basis",
                    title: "Nitrate exposure and nitrite's mechanism must both be understood",
                    html: "<p>Excess nitrate in drinking water is associated with infant methaemoglobinaemia, often called blue baby syndrome. Nitrate can be reduced to <strong>nitrite</strong>; nitrite oxidises haemoglobin iron from the ferrous to ferric state, impairing oxygen carriage. Thus nitrate is the expected exposure answer in these bank questions, while nitrite is mechanistically important and is itself a drinking-water concern.</p>" +
                        "<p>WHO 2022 gives <strong>50 mg/L as nitrate ion</strong> and <strong>3 mg/L as nitrite ion</strong>, with the combined condition <strong>[NO<sub>3</sub><sup>−</sup>]/50 + [NO<sub>2</sub><sup>−</sup>]/3 ≤ 1</strong>. Testing each limit separately can miss a combined exceedance. Do not use nitrate-N or nitrite-N concentrations directly in these denominators.</p>" +
                        "<p><em>Added hypothetical examples, not bank analytical results:</em> nitrate 30 mg/L and nitrite 1.2 mg/L give 30/50 + 1.2/3 = <strong>1.00</strong>. Increasing nitrate to 40 mg/L with the same nitrite gives <strong>1.20</strong>; both individual concentrations remain below their separate values, but the combined condition fails.</p>" +
                        "<p>WHO's rounded conversion factors give nitrate-N = 0.226 × nitrate and nitrite-N = 0.304 × nitrite. The first example is therefore <strong>6.78 mg/L nitrate-N</strong> and <strong>0.3648 mg/L nitrite-N</strong>. The reporting basis must travel with the number. Nepal's inspected cells list 50 and 3 mg/L without printing an as-N qualifier. Investigate agricultural, sewage and other relevant sources; boiling is not a nitrate-removal treatment and can concentrate non-volatile solutes as water evaporates.</p>",
                    sources: [
                        { id: "WATE813-00005", set: 2, question: 95 },
                        { id: "WATE813-00334", set: 33, question: 92 },
                        { id: "WATE813-00339", set: 33, question: 97 }
                    ]
                },
                {
                    id: "sources-nepal-who-operational-and-microbial-values",
                    title: "Read Nepal 2079 beside WHO 2022 without mixing their meanings — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not supply the complete standards table. These selected entries use Nepal's inspected 2079 notice and WHO's 2022 fourth edition incorporating both addenda, read with the 24 May 2023 corrigenda. They are not a certification of the latest amended legal position.</p>" +
                        "<table><thead><tr><th scope='col'>Parameter</th><th scope='col'>Nepal 2079</th><th scope='col'>WHO 2022 interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>pH</th><td>6.5–8.5</td><td>No health-based value; operational control depends on water and materials.</td></tr>" +
                        "<tr><th scope='row'>Turbidity</th><td>5 NTU</td><td>Treatment and acceptability guidance; not a universal health-based 5 NTU limit.</td></tr>" +
                        "<tr><th scope='row'>Colour</th><td>5 TCU</td><td>Below 15 TCU often acceptable; no health-based colour value.</td></tr>" +
                        "<tr><th scope='row'>Total hardness</th><td>500 mg/L, as printed</td><td>No health-based value; conventionally expressed as CaCO<sub>3</sub>.</td></tr>" +
                        "<tr><th scope='row'>E. coli</th><td>0 CFU/100 mL</td><td>Not detectable in any 100 mL sample.</td></tr>" +
                        "<tr><th scope='row'>Total coliform</th><td>0 CFU/100 mL in 95% of samples</td><td>Operational distribution indicator, not equivalent to a faecal indicator.</td></tr>" +
                        "<tr><th scope='row'>Residual chlorine</th><td>0.10–0.50 mg/L; chlorinated systems only</td><td>Operating residual/contact guidance differs from the 5 mg/L free-chlorine health value.</td></tr></tbody></table>" +
                        "<p>The Nepal hardness cell does <strong>not explicitly print as CaCO<sub>3</sub></strong>; teaching the normal convention does not change that transcription. Its total-coliform cell does not specify the assessment period, so do not append annually. Nepal's printed health/non-health classifications also need not match WHO's classifications.</p>" +
                        "<p>Use the correct parameter, method, location and reporting basis. A result meeting one row does not certify the supply: microbial verification, chemical risk assessment and operational monitoring answer complementary questions.</p>",
                    sources: []
                },
                {
                    id: "sources-nepal-who-chemical-guidelines",
                    title: "Chemical values carry edition, exposure and provisional qualifications — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> this comparison adds primary-document information not fully given by the bank. All concentrations below are mg/L; WHO nitrate and nitrite values are explicitly for the ions, not nitrogen mass.</p>" +
                        "<table><thead><tr><th scope='col'>Constituent</th><th scope='col'>Nepal 2079</th><th scope='col'>WHO 2022</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Arsenic</th><td>0.05</td><td>0.01, provisional because of treatment performance and analytical achievability.</td></tr>" +
                        "<tr><th scope='row'>Fluoride</th><td>0.50–1.50, minimum–maximum</td><td>1.5 upper guideline value; not a universal minimum or fluoridation target.</td></tr>" +
                        "<tr><th scope='row'>Manganese</th><td>0.20</td><td>0.08 total manganese, provisional; consider infant exposure and acceptability separately.</td></tr>" +
                        "<tr><th scope='row'>Nitrate</th><td>50</td><td>50 as nitrate ion; combined nitrate/nitrite condition also applies.</td></tr>" +
                        "<tr><th scope='row'>Nitrite</th><td>3</td><td>3 as nitrite ion; combined condition also applies.</td></tr></tbody></table>" +
                        "<p>The WHO corrigendum confirms <strong>0.08 mg/L manganese = 80 µg/L</strong>; reversing those units creates a thousand-fold error. WHO also discusses aesthetic effects around 0.02 mg/L, a different consideration from the health-based value. A provisional value still calls for risk management; the word does not mean the contaminant is harmless.</p>" +
                        "<p>For fluoride, total intake and drinking-water consumption influence exposure. Nepal's minimum–maximum entry must not be attributed to WHO, and its conditional below-minimum exception needs the notice's qualifications. Likewise, Nepal's arsenic entry does not erase WHO's lower provisional value.</p>" +
                        "<p>Select relevant testing from geology, agriculture, industry and sanitary hazards. A standards list is not evidence that every listed chemical is present or every unlisted chemical is absent. Treatment selection requires the measured chemical form and reliable performance, not a generic promise that a filter removes all metals.</p>",
                    sources: []
                },
                {
                    id: "sources-standards-implementation-and-risk-monitoring",
                    title: "The Nepal notice's qualifications are part of the reading — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide the implementation clauses. The inspected Nepal notice is dated <strong>2079/03/02, Gazette volume 72, number 16, part 5</strong>. Its appendix distinguishes A mandatory-baseline parameters from B additional parameters required according to risk and relevance; B is not permission to ignore a relevant hazard.</p>" +
                        "<p>The baseline provision calls for testing mandatory parameters once in all systems <strong>within five years of implementation</strong>, not testing only once every five years. Ongoing monitoring and verification follow the implementation directive and risk-based plans. Sampling locations include source or pump delivery, treatment, tank inlet/outlet, distribution low-pressure and end points, and consumption points as relevant.</p>" +
                        "<p>Under the notice's stated epidemic or high-pollution conditions, chlorine residual above 0.5 mg/L is not treated as contrary to the standard. Fluoride below 0.5 mg/L is accommodated where an immediate alternative source is unavailable. These are conditional provisions, not general dosing instructions or unrestricted exemptions. An emergency inability to maintain quality also entails consumer notification concerning purification before use.</p>" +
                        "<p>For relevant harmful parameters omitted from the table, the notice refers specifically to <strong>WHO 2017</strong>; it does not automatically incorporate every future edition. It repeals the identified 2063/03/12 notice. The WHO 2022 comparison in these notes is educational, not a claim to replace that legal reference. Current amendments, site-specific plans, laboratory methods and authorised interpretation must be checked for an actual supply.</p>",
                    sources: []
                },
                {
                    id: "sources-dissolved-oxygen-saturation-versus-measurement",
                    title: "A saturation value is not the measured oxygen content of every pond",
                    html: "<p>Dissolved oxygen, DO, is oxygen present in solution, normally expressed in mg/L. Its equilibrium air-saturation concentration depends on temperature, atmospheric pressure and salinity. Warmer water generally holds less oxygen at air saturation; greater salinity and lower atmospheric pressure also reduce that equilibrium value.</p>" +
                        "<p>The bank supplies <strong>9.08 mg/L</strong> for fresh water at 20°C, 760 mm Hg and zero salinity. Read it as the bank's approximate <strong>air-saturation reference</strong>, not as a measured concentration dictated by the word pond. The exact 9.08 precision is not independently authenticated here against a specified solubility equation or table; actual calculations should identify that basis.</p>" +
                        "<p>Photosynthesis can raise daytime DO, sometimes above equilibrium saturation. Respiration, decay and other oxygen demands consume it, while atmospheric reaeration exchanges oxygen with the water. Depth, mixing and time of day therefore matter. A stagnant bottom layer and a sunlit surface can have different measurements in the same pond.</p>" +
                        "<p><em>Added hypothetical calculation using the bank's reference:</em> if a sample is at 90% saturation, DO = 0.90 × 9.08 = <strong>8.172 mg/L</strong>. Conversely, percent saturation = 100 × measured DO / the appropriate saturation value. This does not establish a drinking-water safety limit or a universal aquatic-life threshold. DO neither identifies faecal contamination nor rules out arsenic or other dissolved chemicals.</p>",
                    sources: [{ id: "WATE813-00062", set: 8, question: 92 }]
                },
                {
                    id: "sources-per-capita-demand-and-design-flows",
                    title: "Keep annual average, maximum day and peak hour on explicit bases",
                    html: "<p>Per-capita demand is an allocated average volume per person per day, commonly <strong>L/person/day or lpcd</strong>. State the numerator's boundary: household consumption alone differs from a municipal production volume that also includes other users and losses. It is not necessarily the actual amount used personally by each resident.</p>" +
                        "<p>With constant population P and a 365-day accounting year, <strong>q = V<sub>year</sub>/(365P)</strong>, where V<sub>year</sub> is litres. If population changes appreciably, use the relevant population-time denominator or a justified representative population. The averaging period smooths seasonality; it does not mean every day has the average demand.</p>" +
                        "<p><em>Added hypothetical flow example:</em> P = 10,000 and q = 100 lpcd on an explicitly defined total-demand basis give <strong>1,000,000 L/day = 1,000 m<sup>3</sup>/day = 11.57407 L/s</strong>. Assume maximum-day/average-day = 1.5; the maximum day's mean flow is 17.36111 L/s. If peak-hour/maximum-day-hourly-average = 2, peak flow is <strong>34.72222 L/s</strong>. It is three times the annual-average rate, not twice.</p>" +
                        "<p>These factors are illustrative, not Nepal design constants. A peak-hour factor already defined against annual-average flow must not be multiplied by the maximum-day factor again. Source, treatment, pumps, storage and local service pipes may have different governing duration and operating schedules. Convert daily volume using 86,400 seconds only when forming an equivalent continuous rate, not when the plant actually operates for fewer hours.</p>",
                    sources: [
                        { id: "WATE813-00003", set: 2, question: 93 },
                        { id: "WATE813-00304", set: 30, question: 96 },
                        { id: "WATE813-00313", set: 31, question: 93 }
                    ]
                },
                {
                    id: "sources-demand-categories-livestock-and-service",
                    title: "Inventory real users; neither livestock nor suppressed demand disappears by definition",
                    html: "<p>A demand estimate separates domestic uses, commercial and institutional uses, relevant industrial supply, public uses, animals where served, operational use and system losses. Fire-fighting requires its own event-flow and storage assessment. Define boundaries carefully so a factory, school or hotel is not counted both as a metered bulk user and within a blanket population allowance.</p>" +
                        "<p>Livestock demand depends on species, numbers, climate, husbandry, production and alternative sources. An urban or peri-urban service area can include livestock; a rural supply can have much more or less than 20% of its domestic demand allocated to animals. Neither a universal <strong>20% ceiling</strong> nor automatic exclusion from city supply follows from the definitions. Use a surveyed inventory and the approved service policy rather than asserting animals can always obtain water elsewhere.</p>" +
                        "<p>Per-capita use can change with climate, occupancy, appliances, tariffs, metering, pressure, leakage and service reliability. Better service may reveal unmet demand that restricted supply previously concealed. Intermittency can lower measured delivered consumption by rationing access, but household storage, overflow, discarded stale water and leakage during supply periods complicate the actual water balance.</p>" +
                        "<p>Intermittent operation also creates pressure-loss and contamination risks. It is not a recommended conservation measure merely because a bank item associates it with lower consumption. Design should distinguish desired efficient use from involuntary deprivation, provide a realistic service target and measure whether that target is met.</p>",
                    sources: [
                        { id: "WATE813-00020", set: 3, question: 100 },
                        { id: "WATE813-00305", set: 30, question: 97 },
                        { id: "WATE813-00307", set: 30, question: 99 }
                    ]
                },
                {
                    id: "sources-loss-fractions-and-water-balance",
                    title: "A 25% loss allowance changes when its denominator changes",
                    html: "<p>A water balance compares a measured system input with authorised consumption and identified losses over the same area and period. Real losses include leakage and overflows; apparent losses include unauthorised consumption and relevant measurement or accounting errors. Non-revenue water can additionally include authorised unbilled consumption, so it is not simply another name for leakage or theft.</p>" +
                        "<p>If delivered useful demand is D and the assumed physical allowance is a fraction f of <strong>system input</strong> S, then D = S(1 − f), hence <strong>S = D/(1 − f)</strong>. If an allowance a is instead explicitly a fraction of useful demand, <strong>S = D(1 + a)</strong>. These are different definitions, not rival algebraic methods.</p>" +
                        "<p><em>Added hypothetical example using the bank's percentage only as an assumption:</em> D = 750 m<sup>3</sup>/day and f = 0.25 give <strong>S = 1,000 m<sup>3</sup>/day</strong>, with 250 m<sup>3</sup>/day losses. Simply adding 25% to D gives <strong>937.5 m<sup>3</sup>/day</strong>; its 187.5 m<sup>3</sup>/day allowance is only 20% of that input. The two production estimates differ by 62.5 m<sup>3</sup>/day.</p>" +
                        "<p>The stored 25% is not a verified universal share of theft and waste. Measure local performance, state the planning scenario and avoid double counting an allowance already present in a gross lpcd rate. Apparent loss reduction can improve revenue without an equal physical saving, whereas repairing a leak directly changes the physical volume balance.</p>",
                    sources: [{ id: "WATE813-00312", set: 31, question: 92 }]
                },
                {
                    id: "sources-demography-and-forecast-models",
                    title: "Choose a forecasting model from evidence, not a town's age alone",
                    html: "<p>Demography studies population size, composition and change through births, deaths and migration. Water planning additionally needs the service boundary, connected fraction, visitors, institutions and the opening and design years. Annexation or a changed census boundary can imitate growth unless the historical series is made comparable.</p>" +
                        "<p>For equal time intervals, an arithmetic projection is <strong>P<sub>n</sub> = P<sub>0</sub> + nI</strong>, with I the adopted increment in persons per interval. Geometric projection is <strong>P<sub>n</sub> = P<sub>0</sub>(1 + r)<sup>n</sup></strong>, with fractional growth r per interval. Constant increments may fit a mature stable town; compounding may fit sustained proportional growth. Neither fit follows automatically from old or rapidly growing in the description.</p>" +
                        "<p>Incremental-increase methods allow the increment itself to change. A stated conventional form is <strong>P<sub>n</sub> = P<sub>0</sub> + nI + n(n + 1)ΔI/2</strong>, where ΔI is the adopted change per interval in the increment. The definition of I must be stated; using a last observed increment differs from using a historical mean.</p>" +
                        "<p>Graphical comparison can reveal trends and breaks but needs explicit judgement. A logistic curve represents growth approaching a limiting population; the carrying-capacity assumption must be supported rather than invented. Compare models against history and planning evidence, test low/base/high scenarios, and stage capacity where uncertainty is large. A smooth formula cannot predict an unmodelled new industry, displacement or migration shock.</p>",
                    sources: [
                        { id: "WATE813-00002", set: 2, question: 92 },
                        { id: "WATE813-00011", set: 3, question: 91 },
                        { id: "WATE813-00012", set: 3, question: 92 }
                    ]
                },
                {
                    id: "sources-forecast-comparison-worked-series",
                    title: "Three projections from the same history — syllabus extension",
                    html: "<p><strong>Syllabus extension; all population observations and forecast intervals here are hypothetical.</strong> The assigned questions do not provide a census series for comparing methods. Assume a stable service boundary and populations <strong>10,000, 11,500, 13,300 and 15,400</strong> at equal ten-year intervals. Forecast two further intervals from the last observation, not from the first.</p>" +
                        "<p>The observed increments are 1,500, 1,800 and 2,100 persons per interval. Their mean is <strong>I = 1,800</strong>; successive changes in increment are both 300, so use <strong>ΔI = 300</strong>. Under the stated mean-increment convention, arithmetic projection gives 15,400 + 2 × 1,800 = <strong>19,000</strong>. The conventional incremental formula gives 19,000 + [2 × 3/2] × 300 = <strong>19,900</strong>.</p>" +
                        "<p>For a geometric comparison, adopt the endpoint compound rate, not an unstated arithmetic average of percentages: <strong>r = (15,400/10,000)<sup>1/3</sup> − 1 = 0.15480035</strong> per ten-year interval. Then P<sub>2</sub> = 15,400(1 + r)<sup>2</sup> ≈ <strong>20,536.88</strong>. This 15.480035% is not an annual rate. A planning population would be rounded under a stated policy after the calculation.</p>" +
                        "<p>The differing answers expose assumptions rather than identify one automatically correct model. Extending the last observed increment with the same acceleration would be another model, not this mean-increment calculation. Check land-use plans, migration and service coverage; propagate forecast uncertainty into demand, yield checks and staged storage or treatment rather than hiding it in an unexplained safety factor.</p>",
                    sources: []
                },
                {
                    id: "sources-birth-death-compounding-assumptions",
                    title: "The bank's two-year answer assumes annual net compounding and no migration",
                    html: "<p>A population balance over an interval is <strong>P<sub>next</sub> = P + births − deaths + net migration</strong>, with consistent boundaries and dates. If births and deaths are specified as fractions b and d of the same beginning-of-year population, and migration is zero, the simplified annual recurrence becomes <strong>P<sub>next</sub> = P(1 + b − d)</strong>.</p>" +
                        "<p>The bank gives initial population <strong>1,000,000</strong>, birth rate <strong>10%</strong> and death rate <strong>4%</strong>, then asks for population after two years. Interpreting both as constant annual rates on that common basis gives r = 0.10 − 0.04 = 0.06 and <strong>P<sub>2</sub> = 1,000,000 × 1.06<sup>2</sup> = 1,123,600</strong>. The second year's absolute increase is larger because it acts on 1,060,000 people.</p>" +
                        "<p>This interpretation is an assumption required by the keyed answer, not a demographic law supplied by the word rate. The stem does not explicitly establish the time basis or migration. Sequential multiplication by 1.10 and 0.96 uses different population bases; a continuous exponential model also requires differently defined rate parameters. Neither should be silently substituted into this discrete calculation.</p>" +
                        "<p>Real demographic analysis uses the available birth, death and migration data, often age-specific, and tests their persistence. The unusually large percentages in an examination problem are arithmetic givens, not forecasts for Nepal or recommended design growth rates. Record the adopted interpretation before carrying the population into a water-demand estimate.</p>",
                    sources: [{ id: "WATE813-00018", set: 3, question: 98 }]
                },
                {
                    id: "sources-connected-demand-factor-and-instantaneous-flow",
                    title: "Demand factor can equal one; fixture peaks are not annual lpcd",
                    html: "<p>Under the bank's connected-capacity convention, <strong>demand factor = coincident maximum demand / total connected capacity</strong>. The numerator and denominator must describe the same system and use the same flow units. With positive connected capacity and individual rates bounded by the capacities being summed, <strong>0 ≤ demand factor ≤ 1</strong>. Equality is possible if all included outlets demand their full rated flow together; strictly less than one is not a definition.</p>" +
                        "<p>This is different from a peaking factor, which divides a peak by an average and ordinarily exceeds or equals one. An observed ratio above the stated connected capacity indicates that the capacity definition, data or operating assumptions need examination, not that an average-to-peak ratio should be substituted.</p>" +
                        "<p>The other bank item quotes per-user <strong>L/min</strong> for small user groups and attributes them to an Indian standard. That exact table and edition attribution remain unverified. <em>Conditional arithmetic using its printed values:</em> 15 users × 1.20 L/user/min = <strong>18 L/min = 0.30 L/s</strong>; 20 × 1.35 = <strong>27 L/min = 0.45 L/s</strong>. These are assumed instantaneous design rates, not each user's continuous daily consumption.</p>" +
                        "<p>The explanation's claim that its per-user rates steadily decrease is inconsistent with 1.20 followed by 1.35. Fixture diversity requires an applicable demand model and occupancy/use pattern. Do not certify all quoted values or extrapolate them to a city by multiplying through an entire day.</p>",
                    sources: [
                        { id: "BASI674-00379", set: 30, question: 2 },
                        { id: "WATE813-00330", set: 32, question: 99 }
                    ]
                },
                {
                    id: "sources-fire-demand-classical-formulas-and-units",
                    title: "Work the printed fire formulas without claiming a verified design rule",
                    html: "<p>The bank uses classical population-based fire-flow expressions with P in <strong>thousands of people</strong> and Q in <strong>L/min</strong>. Its Buston/Buston's name and Kuichling/Kuchling spellings do not establish an authoritative formula edition. The following verifies the arithmetic of the <em>given expressions</em>, not their current normative use, provenance or adequacy for a particular fire risk.</p>" +
                        "<table><thead><tr><th scope='col'>Bank expression</th><th scope='col'>One lakh = 100,000 people, P = 100</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Q = 5663√P</th><td>56,630 L/min = 943.8333 L/s</td></tr>" +
                        "<tr><th scope='row'>Q = 3182√P</th><td>31,820 L/min = 530.3333 L/s = 1,909,200 L/hour</td></tr></tbody></table>" +
                        "<p>The 530 L/s option is a rounded value. Multiplying a per-minute rate by 60 gives litres per hour; dividing by 60 gives litres per second. <em>Added hypothetical duration:</em> maintaining the second rate for two hours requires <strong>3,818.4 m<sup>3</sup></strong>, before considering concurrent demand, replenishment or usable reserve arrangements. The bank supplies no duration.</p>" +
                        "<p>The separate asserted DWSS allowance of <strong>1.5 lpcd</strong> is unverified. At one lakh people it represents 150,000 L/day, equivalent to only <strong>1.73611 L/s averaged continuously</strong>; a daily accounting allowance is not an instantaneous fire-flow capacity. Actual design needs the applicable fire scenario, flow, duration, hydrant residual pressure, simultaneous demands and reliable water availability. Neither an average allowance nor a classical population formula completes that assessment.</p>",
                    sources: [
                        { id: "WATE813-00013", set: 3, question: 93 },
                        { id: "WATE813-00015", set: 3, question: 95 },
                        { id: "WATE813-00083", set: 10, question: 92 },
                        { id: "WATE813-00084", set: 10, question: 93 },
                        { id: "WATE813-00306", set: 30, question: 98 }
                    ]
                }
            ],
            gaps: [
                "Syllabus extension — sources-safe-source-and-demand-workflow: no complete catchment, seasonal-yield, service-policy or design dataset is assigned. The 2,000-person, 80-lpcd, 20-m3/day, 20%-loss, 3-L/s, 1.4-factor and 18-hour inputs are explicitly hypothetical; dependable yield, actual treatment use, permissions and adequacy remain site-specific.",
                "Syllabus extension — sources-suspended-colloidal-and-dissolved-impurities: the three-state comparison fills official scope without inventing a bank analysis, universal particle-size boundary or guaranteed process-removal efficiency.",
                "Syllabus extensions — sources-nepal-who-operational-and-microbial-values, sources-nepal-who-chemical-guidelines and sources-standards-implementation-and-risk-monitoring use identified Nepal 2079 and WHO 2022/2023 evidence. No current consolidated-law guarantee, annual period for the 95% total-coliform entry, or claim that Nepal's hardness cell prints as CaCO3 is made. The notice's unlisted-parameter reference remains WHO 2017.",
                "Syllabus extension — sources-forecast-comparison-worked-series: all census data are hypothetical. The arithmetic, mean-increment incremental and endpoint-compound projections are different stated models, not a validated forecast for an actual municipality. No logistic carrying capacity or design period is supplied.",
                "Hardness-ion, alkalinity-partition, nitrate/nitrite, peaking and loss-balance numerical inputs are added illustrations where labelled. They are not original bank givens, laboratory results or prescribed Nepal design factors.",
                "The 9.08-mg/L oxygen precision remains a bank saturation approximation without an independently authenticated solubility equation; the 90% example is conditional arithmetic. No measured pond DO or universal ecological/drinking-water DO limit is established.",
                "The small-user peak-rate table attributed to IS 1172:1993, classical Buston/Kuichling name and formula provenance, and asserted DWSS 1.5-lpcd fire allowance remain unverified. Printed equations can be calculated without endorsing a standard, duration or fire-protection design.",
                "The bank supplies no defensible universal livestock ceiling, urban livestock exclusion, loss percentage, organism-wide temperature survival bounds, or guarantee of groundwater safety. These require inventories, measurements and risk assessment; question wording is not a substitute."
            ],
            cautions: [
                {
                    html: "<p><strong>Groundwater is not inherently safe.</strong> A hill spring may have little suspended matter, but rapid fracture flow, contaminated recharge and collection defects can introduce pathogens. Groundwater can also contain harmful dissolved chemicals. Low turbidity, hill location and soil filtration do not establish potable quality or remove the need for appropriate barriers and verification.</p>",
                    sources: [
                        { id: "WATE813-00001", set: 2, question: 91 },
                        { id: "WATE813-00303", set: 30, question: 95 }
                    ]
                },
                {
                    html: "<p><strong>Surface-source generalisations need qualification.</strong> Reservoirs are surface sources, but the required treatment train follows measured hazards rather than a universal full-treatment label. Groundwater is not automatically the untreated safe alternative. A river's supposedly continuous adequate flow and most-common status also depend on season and region.</p>",
                    sources: [
                        { id: "WATE813-00024", set: 4, question: 94 },
                        { id: "WATE813-00085", set: 10, question: 94 },
                        { id: "WATE813-00300", set: 30, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Geological labels are idealisations.</strong> Sand/gravel must have connected transmissive pores to give useful yield. Fractured granite can be an aquifer despite low intact-rock permeability, and mud or clay can transmit slowly rather than be perfectly impermeable. The options do not replace site investigation or pumping tests.</p>",
                    sources: [
                        { id: "WATE813-00323", set: 32, question: 93 },
                        { id: "WATE813-00324", set: 32, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>Subsurface collectors are not defined by tunnel size or great depth.</strong> Galleries can use perforated drains; infiltration wells can be shallow. Both can receive induced river infiltration, so classifying the works as groundwater collection does not prove isolation from surface-water contamination.</p>",
                    sources: [
                        { id: "WATE813-00321", set: 32, question: 91 },
                        { id: "WATE813-00322", set: 32, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>NTU is not ppm.</strong> Historical silica-scale reporting cannot establish a universal NTU-to-mg/L equivalence. Suspended particles cause turbidity, but turbidity is an optical response rather than their directly measured mass concentration. The original stored ppm key and numerical-comparability explanation remain unchanged in the bank and are not endorsed here.</p>",
                    sources: [
                        { id: "WATE813-00008", set: 2, question: 98 },
                        { id: "WATE813-00136", set: 15, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Colour calibration and acceptance are separate.</strong> A TCU refers to the colour of a specified standard containing 1 mg platinum/L, not an arbitrary 1 mg platinum–cobalt mixture. Tintometer does not uniquely prescribe one apparatus. Nepal 2079 lists 5 TCU; WHO's often-acceptable below-15-TCU statement is not a universal health-based limit.</p>",
                    sources: [
                        { id: "WATE813-00009", set: 2, question: 99 },
                        { id: "WATE813-00023", set: 4, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>Boiling chemistry is simplified in the explanation.</strong> Bicarbonates of calcium and magnesium are associated with temporary hardness, but magnesium precipitation need not produce only carbonate; hydroxide formation and other equilibria matter. Do not extend the elementary answer into guaranteed removal of all hardness or all water hazards by boiling.</p>",
                    sources: [{ id: "WATE813-00310", set: 31, question: 90 }]
                },
                {
                    html: "<p><strong>More than the boiler option needs qualification.</strong> Hardness is unsuitable for many boiler-feed duties, but the other statements do not establish universal better taste, a dental-health benefit at any hardness, or guaranteed prevention of lead dissolution by carbonate scale. In particular, lead-bearing plumbing cannot be declared safe because the water is hard.</p>",
                    sources: [{ id: "WATE813-00317", set: 31, question: 97 }]
                },
                {
                    html: "<p><strong>Soft does not mean zero calcium and magnesium.</strong> Low-hardness water can lather readily while retaining some of these ions. Neither softness nor successful lather formation certifies microbial or chemical safety.</p>",
                    sources: [{ id: "WATE813-00320", set: 31, question: 100 }]
                },
                {
                    html: "<p><strong>Units need the equivalence and density basis.</strong> mg/L as CaCO<sub>3</sub> is the conventional hardness reporting unit; raw ion mass is different. ppm equals mg/kg by mass and is only approximately numerically equal to mg/L in dilute water near 1 kg/L. Celsius is a temperature unit, not hardness.</p>",
                    sources: [
                        { id: "WATE813-00318", set: 31, question: 98 },
                        { id: "WATE813-00319", set: 31, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Hardness and alkalinity must share a basis.</strong> CH = min(TH, alkalinity) and NCH = TH − CH are conventional CaCO<sub>3</sub>-equivalent calculations. They do not allow subtraction of raw bicarbonate mass or pH from hardness. At equality, CH = TH = alkalinity and NCH = 0.</p>",
                    sources: [
                        { id: "WATE813-00309", set: 30, question: 100 },
                        { id: "WATE813-00325", set: 32, question: 95 },
                        { id: "WATE813-00326", set: 1, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>pH is not a stand-alone corrosion or safety test.</strong> The 6.5–8.5 Nepal range is verified, but corrosion and disinfection also depend on chemistry, materials and operating conditions. WHO 2022 gives no health-based pH value. Being inside the range does not prove a supply is safe, and being outside it does not uniquely establish one mechanism.</p>",
                    sources: [{ id: "WATE813-00016", set: 3, question: 96 }]
                },
                {
                    html: "<p><strong>The stored pH-9.5 kill claim is false as a universal rule.</strong> E. coli inactivation depends on exposure time, organism and environmental conditions; a pH of 9.5 does not prove instantaneous or complete killing. Excess-lime softening is not automatically validated disinfection. The original key is preserved, not used as safety advice.</p>",
                    sources: [{ id: "WATE813-00019", set: 3, question: 99 }]
                },
                {
                    html: "<p><strong>Nitrate is the exposure answer; nitrite is mechanistically active.</strong> Nitrate can be reduced to nitrite, which oxidises haemoglobin and impairs oxygen transport. Nitrite in the water also matters. WHO's 50/3 mg/L values and combined ratio apply to nitrate and nitrite ions, not their nitrogen-mass concentrations.</p>",
                    sources: [
                        { id: "WATE813-00005", set: 2, question: 95 },
                        { id: "WATE813-00334", set: 33, question: 92 },
                        { id: "WATE813-00339", set: 33, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Viruses are acellular infectious agents.</strong> Grouping worms and viruses as biological water hazards is useful, but describing both as ordinary living organisms overlooks viruses' dependence on host cells for replication. The corrupted distractor text is not a recognised organism class.</p>",
                    sources: [{ id: "WATE813-00299", set: 30, question: 91 }]
                },
                {
                    html: "<p><strong>Growth optimum, growth range and survival are not interchangeable.</strong> The 40–70°C thermophile band is approximate. The −20 to 20°C psychrophile statement is not a universal reproduction range and does not establish that psychrophiles necessarily dominate every winter pond. Species, medium and actual process conditions must be identified.</p>",
                    sources: [
                        { id: "WATE813-00006", set: 2, question: 96 },
                        { id: "WATE813-00327", set: 32, question: 96 }
                    ]
                },
                {
                    html: "<p><strong>Total coliforms do not invariably prove faecal contamination.</strong> E. coli is the more specific faecal indicator used here. Total coliforms can have environmental origins and provide operational information. Even consistent absence of faecal indicators does not alone exclude resistant viruses and protozoa.</p>",
                    sources: [{ id: "WATE813-00298", set: 29, question: 100 }]
                },
                {
                    html: "<p><strong>No universal better coliform method is established.</strong> Membrane filtration and multiple-tube/MPN procedures have different reporting and sample-suitability requirements. Turbidity, competing organisms and disinfectant injury can affect performance. A direct colony count is not automatically more accurate for every sample than a validated statistical method.</p>",
                    sources: [{ id: "WATE813-00039", set: 5, question: 99 }]
                },
                {
                    html: "<p><strong>Trachoma prevention needs quantity, access and hygiene as well as quality.</strong> Clean water supports facial cleanliness, but the question's clean-water and increased-supply choices are not completely independent interventions. WHO's SAFE strategy includes additional clinical and environmental measures; chlorinating water alone does not interrupt every transmission route.</p>",
                    sources: [{ id: "WATE813-00007", set: 2, question: 97 }]
                },
                {
                    html: "<p><strong>The water-washed list is heterogeneous and partly damaged.</strong> Ascariasis involves ingestion of mature eggs and is principally soil-transmitted; it is not simply direct person-to-person spread from insufficient washing. Conjunctivitis has several causes. The term shinghoid is unverified and must not be silently converted into a diagnosed disease.</p>",
                    sources: [{ id: "WATE813-00294", set: 29, question: 96 }]
                },
                {
                    html: "<p><strong>Aquatic-borne is not a reliable universal synonym.</strong> Use the mechanism of waterborne transmission rather than that loosely worded label. Water-based and water-washed have distinct teaching meanings; one disease can also have non-water transmission routes.</p>",
                    sources: [{ id: "WATE813-00297", set: 29, question: 99 }]
                },
                {
                    html: "<p><strong>The non-waterborne distinction is not a zero-benefit claim.</strong> Cholera is the intended waterborne example and measles is predominantly airborne. Water improvements do not replace disease-specific controls, but saying they do nothing for general hygiene or care is too absolute. Other infections mentioned as distractors can also have more than one transmission route.</p>",
                    sources: [
                        { id: "WATE813-00311", set: 31, question: 91 },
                        { id: "WATE813-00333", set: 33, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>An epidemic need not be confined to one community.</strong> It is occurrence above an expected level in a defined population and period. A pandemic describes extensive international spread; endemic describes expected continuing occurrence, not an assurance of a perfectly constant case count.</p>",
                    sources: [{ id: "WATE813-00010", set: 2, question: 100 }]
                },
                {
                    html: "<p><strong>Fresh pond water is not necessarily oxygen-saturated.</strong> The 9.08 mg/L value is treated as the bank's approximate saturation reference for the stated conditions, not a guaranteed measured DO. Its exact precision remains unverified against a named solubility table. Biological activity and mixing can produce lower or higher measured values.</p>",
                    sources: [{ id: "WATE813-00062", set: 8, question: 92 }]
                },
                {
                    html: "<p><strong>Population method selection needs evidence.</strong> Arithmetic growth can suit stable absolute increments and geometric growth sustained proportional increments. Large/old versus rapidly growing does not uniquely select a valid model or establish its persistence over the design horizon.</p>",
                    sources: [
                        { id: "WATE813-00011", set: 3, question: 91 },
                        { id: "WATE813-00012", set: 3, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>1.06 squared requires stated assumptions.</strong> The 1,123,600 answer assumes annual 10% births and 4% deaths on the same population basis, fixed rates and no migration, compounded for two years. The stem does not explicitly establish all those conditions. Sequential birth/death multiplication or continuous growth uses a different model.</p>",
                    sources: [{ id: "WATE813-00018", set: 3, question: 98 }]
                },
                {
                    html: "<p><strong>A lpcd numerator and population denominator must be defined.</strong> Annual supply divided by 365P assumes the stated accounting year and a suitable population basis. A municipal aggregate may include non-domestic uses and losses, but that does not mean each resident personally consumes that whole allocation or that every per-capita rate has identical scope.</p>",
                    sources: [
                        { id: "WATE813-00304", set: 30, question: 96 },
                        { id: "WATE813-00313", set: 31, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>Neither the 20% animal ceiling nor urban exclusion is universal.</strong> Include livestock when it is within the served demand boundary, using an inventory and appropriate service assumptions. A large legitimate animal demand is not automatically oversizing, and seasonal alternative supplies cannot be assumed adequate without evidence.</p>",
                    sources: [
                        { id: "WATE813-00020", set: 3, question: 100 },
                        { id: "WATE813-00305", set: 30, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Intermittency may suppress delivered use but is not guaranteed conservation.</strong> Storage overflow, waste and leakage patterns can alter the balance, while pressure loss introduces quality and equity risks. Low observed consumption under restricted supply is not proof of low underlying need or a reason to prescribe intermittent service.</p>",
                    sources: [{ id: "WATE813-00307", set: 30, question: 99 }]
                },
                {
                    html: "<p><strong>The stored 25% is not a universal loss rate.</strong> The stem says total consumption while the explanation shifts to production. State the denominator: 25% of input requires D/0.75, whereas adding 25% of delivered demand gives 1.25D. Theft, real leakage, apparent loss and non-revenue water also are not identical accounting categories.</p>",
                    sources: [{ id: "WATE813-00312", set: 31, question: 92 }]
                },
                {
                    html: "<p><strong>Demand factor may equal one.</strong> With compatible connected-capacity definitions, maximum coincident demand divided by total connected capacity is at most one, including equality. Strictly less than one is not guaranteed. This convention must not be confused with peak/average flow factors.</p>",
                    sources: [{ id: "WATE813-00330", set: 32, question: 99 }]
                },
                {
                    html: "<p><strong>The claimed IS table remains unverified.</strong> No inspected clause authenticates the 1.80, 1.20 and 1.35 L/user/min entries or the IS 1172:1993 attribution. The explanation's decreasing per-user trend is contradicted by 1.20 followed by 1.35. Conditional multiplication teaches units without endorsing the stored all-of-the-above key as a design requirement.</p>",
                    sources: [{ id: "BASI674-00379", set: 30, question: 2 }]
                },
                {
                    html: "<p><strong>Buston name/provenance is not verified normative evidence.</strong> For the bank's Q = 5663√P with P in thousands and Q in L/min, one lakh gives 56,630 L/min. That arithmetic does not authenticate a classical name, current code adoption, applicability range or safe fire design. The two source records retain their original wording and keys.</p>",
                    sources: [
                        { id: "WATE813-00013", set: 3, question: 93 },
                        { id: "WATE813-00083", set: 10, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Kuichling/Kuchling calculation is conditional on the printed expression.</strong> Q = 3182√100 gives 31,820 L/min, 530.3333 L/s or 1,909,200 L/hour; 530 L/s is rounded. The name, coefficient and omitted scope have not been authenticated as a current requirement. A fire duration and residual-pressure criterion are still missing.</p>",
                    sources: [
                        { id: "WATE813-00015", set: 3, question: 95 },
                        { id: "WATE813-00084", set: 10, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>The asserted DWSS 1.5-lpcd fire maximum is unverified.</strong> No applicable document and clause are established here. A per-capita daily allowance, even if adopted for accounting, is not an instantaneous fire-flow ceiling and cannot size hydrants, mains or emergency storage without event flow and duration.</p>",
                    sources: [{ id: "WATE813-00306", set: 30, question: 98 }]
                },
                {
                    html: "<p><strong>Primary-document boundary:</strong> the Nepal 2079 and WHO 2022/2023 comparison is edition-specific, not confirmation of current consolidated law. B parameters are risk/context dependent, the five-year baseline window is not a routine five-year sampling interval, and the Nepal notice explicitly refers unlisted harmful parameters to WHO 2017. No invented bank citation is attached to these document qualifications.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "Government of Nepal, Ministry of Water Supply — National Drinking Water Quality Standards 2079 and Implementation and Monitoring Directive 2079; Gazette 2079/03/02, vol.72 no.16 part5; PDF pp.3–8 and directive sections4–5",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/khanepani-mapdanda-kitab-final2_saxxma4.pdf"
                },
                {
                    title: "WHO — Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda, 2022; chapters7,8,10 and12, including nitrate/nitrite, manganese and microbial verification",
                    url: "https://www.who.int/publications/i/item/9789240045064"
                },
                {
                    title: "WHO — Corrigenda, 24 May 2023, to the 2022 Guidelines for drinking-water quality; manganese 0.08 mg/L = 80 micrograms/L correction",
                    url: "https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/dwq-guidelines-4/9789240045064_corrigenda_rev-gdwq-2-addenda.pdf?sfvrsn=c95453c4_3"
                },
                {
                    title: "WHO — Trachoma fact sheet, 16 July 2026; transmission and SAFE prevention/control approach, inspected 6 September 2026",
                    url: "https://www.who.int/news-room/fact-sheets/detail/trachoma"
                },
                {
                    title: "WHO — Schistosomiasis fact sheet, 23 February 2026; freshwater-snail life cycle, skin penetration and prevention/control, inspected 6 September 2026",
                    url: "https://www.who.int/news-room/fact-sheets/detail/schistosomiasis"
                }
            ]
        }
    });
})();