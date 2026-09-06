(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0605: {
            code: "ACiE0605",
            questionCount: 66,
            blocks: [
                {
                    id: "wastewater-characterization",
                    title: "Characterize a wastewater before selecting its treatment",
                    html: "<p><strong>Raw sewage</strong> is sewage that has not received treatment. Untreated and crude sewage can describe the same condition; <strong>fresh</strong> instead describes limited deterioration since generation. Freshness is not a treatment grade. Domestic wastewater also differs from industrial effluent, infiltration and storm runoff, even when these enter the same sewer.</p>" +
                        "<table><thead><tr><th scope='col'>Examination</th><th scope='col'>Engineering use</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Flow, temperature, colour and odour</th><td>Identify variation, septic conditions and possible abnormal discharges.</td></tr>" +
                        "<tr><th scope='row'>Solids and oxygen demand</th><td>Estimate settling, biological loading and sludge production.</td></tr>" +
                        "<tr><th scope='row'>pH, alkalinity, nutrients and toxic constituents</th><td>Check biological compatibility, buffering and receiving-environment effects.</td></tr>" +
                        "<tr><th scope='row'>Microbiological indicators</th><td>Assess sanitation barriers; appearance alone does not indicate pathogen safety.</td></tr></tbody></table>" +
                        "<p>Fresh domestic sewage is often near neutral or mildly alkaline, but industrial inputs, source-water chemistry and fermentation can change its pH. The bank's greater-than-seven description is not a definition. Likewise, specific gravity near <strong>1.001</strong> is an approximate description of dilute sewage, not a universal material constant. Specific gravity is density divided by a stated reference-water density at specified temperatures.</p>" +
                        "<p>Establish representative dry-weather, wet-weather and peak-load conditions. Concentration data without corresponding flow cannot establish a daily pollutant load. Treatment selection then follows the pollutants, required receiving-water or reuse protection, available land, operator capacity and sludge-management route, rather than a single characteristic.</p>",
                    sources: [
                        { id: "WATE813-00179", set: 19, question: 91 },
                        { id: "WATE813-00057", set: 7, question: 97 },
                        { id: "WATE813-00184", set: 19, question: 96 }
                    ]
                },
                {
                    id: "wastewater-sampling-and-odour",
                    title: "Choose grab or composite sampling to answer a defined question",
                    html: "<p>A <strong>grab sample</strong> represents one place and time. It is useful for transient discharges and properties that change during storage, such as dissolved oxygen, temperature and pH. A <strong>composite sample</strong> combines aliquots over a defined period. Equal aliquots at equal time intervals approximate a time average; flow-proportional aliquots are more appropriate for an average concentration used with total flow to calculate load.</p>" +
                        "<p>For intervals i, a flow-weighted concentration is <strong>C̄ = Σ(Q<sub>i</sub>C<sub>i</sub>Δt<sub>i</sub>)/Σ(Q<sub>i</sub>Δt<sub>i</sub>)</strong>. Q is volume per time, C is mass per volume and Δt is interval duration. <em>Hypothetical equal-duration example:</em> flows of 100 and 300 m<sup>3</sup>/h with concentrations 200 and 100 mg/L give <strong>C̄ = 125 mg/L</strong>, not the arithmetic mean of 150 mg/L. Sampling must retain solids representatively, avoid contamination and document preservation, timing and chain of custody under the selected method.</p>" +
                        "<p>Threshold odour number is a dilution ratio at a defined sensory endpoint: <strong>TON = total diluted volume/sample volume</strong>. The bank's 40 mL made up to 240 mL gives <strong>240/40 = 6</strong>; the added dilution water is 200 mL, not 240 mL. This result assumes that mixture actually represents the test threshold. TON is dimensionless, does not identify a chemical or pathogen, and is not an instruction to smell raw sewage directly.</p>",
                    sources: [
                        { id: "WATE813-00189", set: 19, question: 100 },
                        { id: "WATE813-00017", set: 3, question: 97 }
                    ]
                },
                {
                    id: "wastewater-solids-fractions",
                    title: "Solids fractions are operational measurements, not pure chemical categories",
                    html: "<p><strong>Total solids, TS</strong>, are the dried residue from an unfiltered sample. Filtration separates operationally defined suspended solids, TSS, from dissolved or filter-passing solids, TDS. With compatible methods and representative aliquots, <strong>TS ≈ TSS + TDS</strong>. Settleable solids are a different measurement: the volume that settles in a specified test, usually reported per volume of original sample, not automatically a dry mass.</p>" +
                        "<p>Igniting a dried residue partitions it into <strong>volatile</strong> mass lost and <strong>fixed</strong> residue remaining. US EPA Method 160.4, issued 1971, identifies ignition at approximately <strong>550°C</strong>. Mineral decomposition and volatilization can also change mass. Thus volatile solids only approximate organic content, and fixed solids are not a chemically pure inorganic fraction. That inspected method does not establish the bank's exact ±50°C tolerance and one-hour duration.</p>" +
                        "<p><em>Hypothetical, blank-corrected results on corresponding 1 L aliquots:</em> total dry residue is 500 mg, suspended dry residue is 200 mg, and the ignited suspended residue is 80 mg. Then <strong>TS = 500, TSS = 200, TDS ≈ 300, FSS = 80 and VSS = 120 mg/L</strong>. VSS is 60% of TSS, not 60% of TS.</p>" +
                        "<p>Drying, cooling in a desiccator, weighing, ignition and repeat mass checks must follow the identified analytical procedure. State whether a reported percentage concerns total solids or suspended solids. A dry-solids concentration and a wet-sludge volume are not interchangeable design inputs.</p>",
                    sources: [{ id: "WATE813-00014", set: 3, question: 94 }]
                },
                {
                    id: "wastewater-oxygen-demand-tests",
                    title: "DO is an oxygen stock; BOD and COD measure different demands",
                    html: "<p><strong>Dissolved oxygen, DO</strong>, is oxygen present in the water at sampling. <strong>Biochemical oxygen demand, BOD</strong>, is oxygen consumed during a specified biological incubation. Both can be expressed in mg O<sub>2</sub>/L, but one is a concentration available now and the other is a demand measured over time. A wastewater can have low DO and high BOD.</p>" +
                        "<p>The conventional <strong>BOD<sub>5</sub> test incubates for five days at 20°C</strong>, normally in darkness with suitable dilution, nutrients and microorganisms. Carbonaceous BOD concerns oxidation of carbon-containing substrate. Nitrogenous BOD concerns oxygen used in nitrification. Five days does <strong>not</strong> guarantee absence of nitrification; report an inhibited carbonaceous test as CBOD<sub>5</sub> when the specified method uses a nitrification inhibitor. Incubation temperature is a laboratory convention, not a claim that every receiving stream is at 20°C.</p>" +
                        "<p><strong>COD</strong> measures the oxygen equivalent of oxidant consumed under a specified chemical digestion. US EPA Method 410.4, revision 2.0, August 1993, uses dichromate in a sulfuric-acid medium. Chemical oxidation also responds to some reduced inorganic substances; incomplete oxidation and interferences are method-dependent.</p>" +
                        "<p>BOD is sensitive to seeding, toxicity and incubation conditions, whereas COD does not measure the same microbial response. A BOD/COD ratio can support a treatability investigation but is not a universal biodegradability threshold or a fixed conversion between tests. Neither test alone establishes pathogen removal, nutrient control or discharge permission.</p>",
                    sources: [
                        { id: "WATE813-00172", set: 18, question: 95 },
                        { id: "WATE813-00174", set: 18, question: 97 }
                    ]
                },
                {
                    id: "wastewater-do-measurement-and-ecology",
                    title: "Measure oxygen without changing it, then interpret the biological context",
                    html: "<p>The <strong>Winkler method</strong> is a titrimetric determination of DO. A representative sample is collected without entrained air; oxygen is chemically fixed through the specified manganese reaction, and subsequent iodine release is measured by titration. Reagent addition, displacement correction, blanks and interfering oxidants or reductants depend on the selected method. The azide modification addresses a particular interference; it is not a guarantee that every wastewater matrix is interference-free.</p>" +
                        "<p>A calibrated electrochemical or optical DO probe offers another measurement route. Check fouling, temperature, calibration and the pressure or salinity corrections required by the instrument. Agitating or transporting an unfixed sample can change the oxygen being measured. In a BOD test, DO is measured at the beginning and end; Winkler measurement is not itself the complete incubation test.</p>" +
                        "<p>Oxygen saturation depends on temperature, atmospheric pressure and dissolved salts. Biological requirements additionally depend on species, life stage, activity, exposure duration and co-occurring stressors. US EPA's CADDIS discussion, updated October 2025, specifically recognizes differing oxygen requirements.</p>" +
                        "<p><strong>4 mg/L is not a universal survival/death boundary for all aquatic life.</strong> A daytime surface reading can miss the lowest predawn or bottom-water concentration. Examine the spatial and temporal oxygen regime and the applicable receiving-water objectives, rather than converting an elementary bank value into a Nepal effluent standard.</p>",
                    sources: [
                        { id: "WATE813-00140", set: 15, question: 95 },
                        { id: "WATE813-00144", set: 15, question: 99 },
                        { id: "WATE813-00064", set: 8, question: 94 },
                        { id: "WATE813-00067", set: 8, question: 97 },
                        { id: "WATE813-00175", set: 18, question: 98 }
                    ]
                },
                {
                    id: "wastewater-bod-dilution-and-seed",
                    title: "Recover the sample demand from dilution and seed oxygen consumption",
                    html: "<p>Let <strong>P = V<sub>s</sub>/V<sub>b</sub></strong> be the volume fraction of wastewater in the incubation mixture. D<sub>i</sub> and D<sub>f</sub> are initial and final bottle DO, in mg O<sub>2</sub>/L. If the measured depletion is attributable to the wastewater, oxygen-demand conservation gives <strong>P × BOD<sub>5</sub> = D<sub>i</sub> − D<sub>f</sub></strong>. Hence BOD<sub>5</sub> = (D<sub>i</sub> − D<sub>f</sub>)/P.</p>" +
                        "<p>The two assigned dilution questions give <strong>P = 0.02</strong> and depletion 5 mg/L. Their result is <strong>5/0.02 = 250 mg O<sub>2</sub>/L</strong>, assuming an unseeded test or an already corrected depletion. The dilution factor is 50, not 2 or 0.02.</p>" +
                        "<p>For seeded dilution, a compatible expression is <strong>BOD<sub>5</sub> = [(D<sub>i</sub> − D<sub>f</sub>) − f(B<sub>i</sub> − B<sub>f</sub>)]/P</strong>. B denotes a seed-control bottle; f scales its seed contribution to the amount of seed in the diluted sample bottle. It is not the sewage fraction P. <em>Hypothetical example:</em> D<sub>i</sub> = 8, D<sub>f</sub> = 3, seed-control depletion = 1 mg/L, f = 0.20 and P = 0.02 give corrected depletion <strong>4.8 mg/L</strong> and BOD<sub>5</sub> = <strong>240 mg/L</strong>.</p>" +
                        "<p>Use the method's dilution-water blank, seed control, depletion and residual-oxygen acceptance checks. Reject exhausted or otherwise invalid bottles rather than manufacturing a result. Report the incubation, inhibitor and seed basis; ppm is only approximately equivalent to mg/L for dilute water of density near 1 kg/L.</p>",
                    sources: [
                        { id: "WATE813-00065", set: 8, question: 95 },
                        { id: "WATE813-00138", set: 15, question: 93 }
                    ]
                },
                {
                    id: "wastewater-bod-first-order-kinetics",
                    title: "Separate ultimate demand, remaining demand and exerted BOD",
                    html: "<p>In an idealized first-order carbonaceous model, let L(t) be remaining ultimate oxygen demand, initially L<sub>0</sub>. Assume its consumption rate is proportional to what remains: <strong>dL/dt = −K<sub>d</sub>L</strong>. Integrating dL/L = −K<sub>d</sub>dt gives <strong>L(t) = L<sub>0</sub>e<sup>−K<sub>d</sub>t</sup></strong>. Exerted demand is therefore <strong>BOD<sub>t</sub> = L<sub>0</sub>(1 − e<sup>−K<sub>d</sub>t</sup>)</strong>, not L(t).</p>" +
                        "<p>If time is in days, K<sub>d</sub> is in day<sup>−1</sup>; L and BOD are mg O<sub>2</sub>/L. The bank instead writes L = L<sub>0</sub>10<sup>−k<sub>d</sub>t</sup>. These conventions agree only when <strong>K<sub>d</sub> = ln(10)k<sub>d</sub></strong>. Replacing e by 10 without changing the numerical rate changes the model.</p>" +
                        "<p><em>Hypothetical example:</em> L<sub>0</sub> = 200 mg/L and natural-base K<sub>d</sub> = 0.20 day<sup>−1</sup> give <strong>L(5) = 73.5759 mg/L</strong> and <strong>BOD<sub>5</sub> = 126.4241 mg/L</strong>. The equivalent base-10 rate is <strong>0.0868589 day<sup>−1</sup></strong>. Setting L/L<sub>0</sub> = 1/2 gives half-life ln(2)/K<sub>d</sub> = <strong>3.4657 days</strong>.</p>" +
                        "<p>Recovering L<sub>0</sub> from a five-day result requires a defensible rate and matching conditions. Temperature, inhibition, multiple substrates and nitrogenous demand can invalidate a single fitted rate. The model predicts a finite-time fraction of ultimate demand; it does not make BOD<sub>5</sub> equal to L<sub>0</sub>.</p>",
                    sources: [{ id: "WATE813-00176", set: 18, question: 99 }]
                },
                {
                    id: "wastewater-decomposition-and-nitrogen",
                    title: "Distinguish aerobic oxidation, anoxic respiration and anaerobic digestion",
                    html: "<p>Aerobic heterotrophs use organic substrate for energy and cell synthesis while using dissolved oxygen as an electron acceptor. This supports conventional carbon-removing biological treatment, but some substrate becomes new biomass rather than immediately becoming carbon dioxide. That biomass must subsequently be separated and managed.</p>" +
                        "<p><strong>Anoxic</strong> treatment commonly uses nitrate or nitrite instead of free oxygen, for example during denitrification to nitrogen gas. <strong>Anaerobic</strong> digestion excludes free oxygen and involves coordinated hydrolysis, acid formation, acetogenesis and methanogenesis. Sulfate reduction can occur in anaerobic systems, but it is not the universal mechanism of all anaerobic decomposition. Temperature, pH, retention, substrate and inhibitory substances remain important even when neither DO nor CO<sub>2</sub> alone describes the controlling condition.</p>" +
                        "<p>Organic nitrogen can be converted to ammonia/ammonium by <strong>ammonification</strong>. This explains the nitrogen transformation intended by the bank's first-stage question, not a claim that ammonia is the sole first product of every organic decomposition. Hydrolysis and carbon transformations occur alongside nitrogen transformations.</p>" +
                        "<p>Where oxygen, suitable organisms, alkalinity and retention permit <strong>nitrification</strong>, ammonium is oxidized through nitrite to nitrate, exerting nitrogenous oxygen demand. Well-nitrified effluent can therefore contain nitrogen mainly as nitrate. Carbon removal or a clear appearance alone does not prove nitrification, and nitrate formation is not nitrogen removal. A separate denitrification or other nitrogen-removal step may be needed.</p>",
                    sources: [
                        { id: "WATE813-00137", set: 15, question: 92 },
                        { id: "WATE813-00141", set: 15, question: 96 },
                        { id: "WATE813-00142", set: 15, question: 97 },
                        { id: "WATE813-00200", set: 21, question: 90 },
                        { id: "WATE813-00221", set: 22, question: 100 }
                    ]
                },
                {
                    id: "wastewater-load-removal-and-series",
                    title: "Calculate removal on the correct flow and stage basis",
                    html: "<p>For Q in m<sup>3</sup>/day and C in mg/L, <strong>mass load = QC/1000 kg/day</strong>, because 1 m<sup>3</sup> contains 1000 L and 1 kg contains one million mg. Concentration removal is E<sub>C</sub> = 1 − C<sub>out</sub>/C<sub>in</sub>. Mass removal is <strong>E<sub>M</sub> = 1 − Q<sub>out</sub>C<sub>out</sub>/(Q<sub>in</sub>C<sub>in</sub>)</strong>. They coincide only with the relevant comparable flow basis.</p>" +
                        "<p>The bank's reduction from 300 to 30 mg/L is <strong>0.90 = 90%</strong> concentration removal. <em>Hypothetical dilution comparison:</em> if influent is 1000 m<sup>3</sup>/day and effluent is 2000 m<sup>3</sup>/day at those concentrations, loads are <strong>300 and 60 kg/day</strong>. Removal is <strong>240 kg/day, or 80%</strong>. Added water has lowered concentration without destroying the corresponding mass.</p>" +
                        "<p>For two sequential stages treating the same pollutant stream, stage 2 acts on the fraction remaining after stage 1. Thus C<sub>2</sub>/C<sub>0</sub> = (1 − E<sub>1</sub>)(1 − E<sub>2</sub>), and <strong>E = E<sub>1</sub> + E<sub>2</sub>(1 − E<sub>1</sub>)</strong>. Use fractional efficiencies, not percentage numbers.</p>" +
                        "<p><em>Hypothetical series example:</em> E<sub>1</sub> = 0.60 and E<sub>2</sub> = 0.75 give <strong>90%</strong>, with 300 → 120 → 30 mg/L at unchanged flow. Bypasses, recycle streams, pollutant generation and different analytical bases require explicit mass balances rather than blind multiplication.</p>",
                    sources: [
                        { id: "WATE813-00070", set: 8, question: 100 },
                        { id: "WATE813-00058", set: 7, question: 98 }
                    ]
                },
                {
                    id: "wastewater-primary-treatment-train",
                    title: "Primary processes separate materials; they do not complete treatment",
                    html: "<p>A treatment train separates tasks rather than asking one tank to do everything. <strong>Screens</strong> intercept rags and coarse debris. <strong>Grit removal</strong> targets dense particles that abrade machinery or accumulate in channels. <strong>Skimming</strong> removes floating oil, grease and scum. These names describe different removal mechanisms; a screen is not a general dissolved-oil treatment unit.</p>" +
                        "<p>Free oil can rise by buoyancy and be skimmed, whereas stable emulsions may require source control or additional treatment. Surface collection devices, sludge withdrawal and safe handling are as important as the tank name. Grit should be separated while limiting capture of putrescible organic material, and its washing and disposal must be planned.</p>" +
                        "<p>Primary sedimentation allows settleable suspended matter to leave the main liquid flow as sludge. The nominal hydraulic retention time is <strong>V/Q</strong>; surface overflow rate is <strong>Q/A</strong>, with units of length/time. Neither alone captures inlet turbulence, short-circuiting, flocculent settling, sludge blanket behaviour or peak flow. Providing more volume without suitable geometry can fail to provide the expected clarification.</p>" +
                        "<p>Soluble biodegradable material and many microorganisms remain after primary treatment. Biological treatment, further solids separation and any necessary nutrient or pathogen barriers follow according to the treatment objective. Track screenings, grit, grease, primary sludge and return liquors separately: removal from water transfers a management obligation rather than making waste disappear.</p>",
                    sources: [
                        { id: "WATE813-00056", set: 7, question: 96 },
                        { id: "WATE813-00220", set: 22, question: 99 }
                    ]
                },
                {
                    id: "wastewater-grit-settling-design",
                    title: "Grit trajectory and chamber sizing — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank supplies no complete grit-design dataset. Consider an ideal horizontal-flow chamber of length L, width B and water depth H. With Q in m<sup>3</sup>/s, horizontal velocity v<sub>h</sub> = Q/(BH) and a selected particle settling velocity v<sub>s</sub>, both in m/s, travel time is L/v<sub>h</sub>. A particle entering at the surface needs H/v<sub>s</sub> to reach the floor.</p>" +
                        "<p>Full capture of that design particle therefore requires <strong>L/v<sub>h</sub> ≥ H/v<sub>s</sub></strong>, or L ≥ v<sub>h</sub>H/v<sub>s</sub>. Equivalently, <strong>Q/(BL) ≤ v<sub>s</sub></strong>. These relations assume discrete settling, no resuspension and uniform flow, not a complete construction design.</p>" +
                        "<p><em>All inputs hypothetical:</em> Q = 0.30 m<sup>3</sup>/s, v<sub>h</sub> = 0.30 m/s, H = 1 m and v<sub>s</sub> = 0.020 m/s give flow area <strong>1 m<sup>2</sup></strong>, B = <strong>1 m</strong>, minimum L = <strong>15 m</strong> and detention <strong>50 s</strong>. At L = 9 m, travel is 30 s and settling distance 0.60 m. Uniformly distributed entry depths would give ideal capture <strong>60%</strong> for this single particle class.</p>" +
                        "<p>US EPA's June 2003 fact sheet, Table 4, lists horizontal-flow detention of <strong>45–90 seconds</strong> and aerated-grit detention of <strong>2–5 minutes at peak hourly flow</strong>. These are foreign guidance ranges, not Nepal requirements. Add flow control, turbulence allowances, grit storage and removal, isolation and peak-flow checks; never relabel a defective thirty-minute septic question as grit design.</p>",
                    sources: []
                },
                {
                    id: "wastewater-equalization-and-air",
                    title: "An organic load is not enough to determine an air-supply rate",
                    html: "<p>Equalization reduces variation in flow or pollutant loading before downstream treatment. A flow balance is <strong>dV/dt = Q<sub>in</sub> − Q<sub>out</sub></strong>. Storage follows the cumulative imbalance over the actual cycle; mean flow alone does not establish the required tank volume. Mixing prevents unwanted deposition, while aeration may also maintain aerobic conditions.</p>" +
                        "<p>The bank gives 500 m<sup>3</sup>/h and BOD concentration 800 mg/L. Multiplying the corresponding flow and concentration gives <strong>500 × 800/1000 = 400 kg BOD/h</strong>. That is an incoming oxygen-demand load, not 400 kg/h of instantaneous oxygen consumption and not an air volume.</p>" +
                        "<p>If actual oxygen transfer required is OTR in kg O<sub>2</sub>/h, a simplified air relation is <strong>Q<sub>air</sub> = OTR/(c<sub>O2,air</sub>η)</strong>. Here c<sub>O2,air</sub> is kg oxygen per m<sup>3</sup> of air at stated reference conditions and η is the actual transferred fraction. Biological consumption during equalization, diffuser depth, wastewater transfer corrections, operating DO and blower reference conditions must be established. Mixing may independently control equipment selection.</p>" +
                        "<p>The stem gives neither the equalization volume nor a valid mixing criterion, oxygen-demand conversion or transfer efficiency. Consequently <strong>2000 m<sup>3</sup>/h cannot be derived</strong>. A generic allowance per unit tank volume also cannot be used without that volume and its applicable design basis. Preserve the stored bank answer, but do not invent the missing inputs.</p>",
                    sources: [{ id: "WATE813-00061", set: 8, question: 91 }]
                },
                {
                    id: "wastewater-activated-sludge-cycle",
                    title: "Activated sludge depends on retaining and separating living biomass",
                    html: "<p>In conventional activated sludge, wastewater mixes with an established suspended microbial population in an aeration reactor. Mixing keeps organisms and substrate in contact, and oxygen transfer supports aerobic reactions. A downstream secondary clarifier separates biological flocs from treated water. Part of the settled material returns as <strong>return activated sludge, RAS</strong>; a controlled portion leaves as <strong>waste activated sludge, WAS</strong>.</p>" +
                        "<p>Recycling biomass is the significance of the bank's admixture of previously aerated sludge. Constant stirring alone does not activate sludge in this sense, and centrifugal water separation is not the defining process. Recycle allows the solids to remain in the system longer than a typical parcel of wastewater.</p>" +
                        "<p>Aerobic heterotrophs commonly dominate carbon-removing conventional reactors. Nitrifying organisms, protozoa and other populations also contribute, and nutrient-removal arrangements can include deliberately anoxic or anaerobic zones. Thus the dominant-organism answer describes a conventional operating objective, not every zone or organism in every activated-sludge installation.</p>" +
                        "<p>US EPA's September 2000 Package Plants fact sheet describes biological treatment, clarification, return and wasting as distinct functions. Stable operation needs aeration capacity, suitable loading, settling and controlled solids inventory together. Increasing air cannot by itself correct a failed clarifier, toxic influent, missing return flow or unsuitable sludge age. Keep influent, mixed-liquor, return-sludge and final-effluent sampling points distinct.</p>",
                    sources: [
                        { id: "WATE813-00171", set: 18, question: 94 },
                        { id: "WATE813-00154", set: 16, question: 99 }
                    ]
                },
                {
                    id: "wastewater-fm-hrt-and-srt",
                    title: "F/M, hydraulic retention and sludge age — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question provides a full reactor-inventory calculation. Let Q be external wastewater flow in m<sup>3</sup>/day, S<sub>0</sub> applied BOD in kg/m<sup>3</sup>, V aeration volume in m<sup>3</sup> and X<sub>v</sub> MLVSS in kg/m<sup>3</sup>. Food applied is QS<sub>0</sub> kg/day and volatile suspended inventory is VX<sub>v</sub> kg. Thus <strong>F/M = QS<sub>0</sub>/(VX<sub>v</sub>)</strong>, conventionally kg BOD/(kg MLVSS·day). A removed-food definition instead uses S<sub>0</sub> − S<sub>e</sub>; identify the convention.</p>" +
                        "<p>Nominal external-flow <strong>HRT = V/Q</strong>. A single-pass time through the aeration tank with return flow is V/(Q + Q<sub>r</sub>), not the same definition. <strong>SRT = total system dry-solids inventory/external daily dry-solids loss</strong>; loss includes wasting and effluent solids. Internal RAS is not a system loss. Use a consistent MLSS or volatile-solids basis and include relevant clarifier inventory.</p>" +
                        "<p><em>Hypothetical aeration-only inventory example:</em> Q = 1000 m<sup>3</sup>/day, S<sub>0</sub> = 200 mg/L = 0.20 kg/m<sup>3</sup>, V = 500 m<sup>3</sup>, MLVSS = 2 and MLSS = 3 kg/m<sup>3</sup>. Food is <strong>200 kg/day</strong>, volatile inventory <strong>1000 kg</strong>, F/M <strong>0.20 day<sup>−1</sup></strong> and HRT <strong>0.5 day = 12 h</strong>. With explicitly assumed negligible other inventory and total MLSS loss 100 kg/day, SRT is <strong>1500/100 = 15 days</strong>.</p>" +
                        "<p>These hypothetical values are not design targets. The distinct clocks explain how nitrifiers can be retained without giving every water parcel the same long residence time.</p>",
                    sources: []
                },
                {
                    id: "wastewater-return-and-wasting-balance",
                    title: "RAS controls circulation; WAS controls net solids retention",
                    html: "<p>Follow the solids across the clarifier rather than treating all sludge pipes as equivalent. Under the simplified assumptions of steady inventory, negligible effluent solids and negligible wasting relative to the return stream, clarifier solids balance is <strong>(Q + Q<sub>r</sub>)X = Q<sub>r</sub>X<sub>r</sub></strong>. X is aeration-tank MLSS and X<sub>r</sub> is return-sludge concentration on the same dry-solids basis.</p>" +
                        "<p>Rearrangement gives <strong>R = Q<sub>r</sub>/Q = X/(X<sub>r</sub> − X)</strong>. This simplified expression requires X<sub>r</sub> &gt; X. Real operation also needs the wasting stream, effluent solids, clarifier storage and hydraulic or solids loading limits; those terms cannot be omitted when appreciable.</p>" +
                        "<p><em>Hypothetical illustration, not bank givens:</em> X = 3 kg/m<sup>3</sup>, X<sub>r</sub> = 9 kg/m<sup>3</sup> and Q = 1000 m<sup>3</sup>/day give <strong>R = 0.5</strong> and <strong>Q<sub>r</sub> = 500 m<sup>3</sup>/day</strong>. Through a 500 m<sup>3</sup> aeration tank, the single-pass hydraulic time is 500/1500 = <strong>1/3 day = 8 h</strong>, versus 12 h on the external-flow basis.</p>" +
                        "<p>Increasing RAS redistributes solids and adds hydraulic circulation; it does not create new biomass or directly remove excess solids from the whole system. WAS removes inventory and changes SRT. Specify whether wasting occurs from mixed liquor or concentrated return sludge, because the concentration in the wasted-mass calculation changes. Monitor blanket depth and settling response before interpreting a return-ratio calculation as an operating instruction.</p>",
                    sources: [{ id: "WATE813-00171", set: 18, question: 94 }]
                },
                {
                    id: "wastewater-svi-whole-sample",
                    title: "SVI uses the whole mixed-liquor solids basis",
                    html: "<p><strong>Sludge volume index, SVI</strong>, is the volume occupied after thirty-minute settling per gram of suspended dry solids in the corresponding <strong>original whole mixed-liquor sample</strong>. With V<sub>30</sub> in mL/L and MLSS in g/L, <strong>SVI = V<sub>30</sub>/MLSS, in mL/g</strong>. If MLSS is in mg/L, multiply the numerator by 1000.</p>" +
                        "<p>Mix the sample representatively, conduct the specified settling test, and determine MLSS on a corresponding representative aliquot of the original mixed liquor. Drying only solids recovered from the settled bottom layer can omit unsettled solids and is not automatically the required denominator. The one-litre normalization cancels only when both measurements refer to the same original sample basis.</p>" +
                        "<p>The first bank result is conditional: if 100 mL is the settled volume corresponding to <strong>800 mg = 0.8 g of total initial MLSS</strong>, SVI = 100/0.8 = <strong>125 mL/g</strong>. Its wording about collected sludge does not establish that basis. In the second question, 27 cm<sup>3</sup> = 27 mL from 1 L gives <strong>27/3 = 9 mL/g</strong> only if 3 g represents that litre's whole MLSS.</p>" +
                        "<p>SVI is a settling diagnostic, not a universal good/bad certificate. Concentration, filament growth, floc structure, test dilution and supernatant clarity matter. A very low apparent value can reflect dense grit or an incorrect denominator; a large value can accompany poor compaction. Neither result determines effluent quality or clarifier capacity alone.</p>",
                    sources: [
                        { id: "WATE813-00068", set: 8, question: 98 },
                        { id: "WATE813-00069", set: 8, question: 99 }
                    ]
                },
                {
                    id: "wastewater-bulking-diagnosis",
                    title: "Diagnose poor settling before applying a sludge-control treatment",
                    html: "<p><strong>Bulking</strong> describes sludge that settles or compacts poorly, commonly associated with excessive filamentous growth but also with other floc conditions. It differs from rising sludge caused by gas generation in an initially settled blanket, hydraulic washout, dispersed growth and fine pin floc. These problems can produce similar effluent-solids symptoms but need different remedies.</p>" +
                        "<p>Start with trend data: influent changes, aeration and DO distribution, F/M, SRT, nutrient balance, return and waste rates, blanket depth, settling tests and microscopic examination where available. Low oxygen, nutrient deficiency, septic feed, toxicity or the wrong retention regime should not be treated as interchangeable explanations.</p>" +
                        "<p>Selective chlorination of a return-sludge stream has been used to suppress susceptible filamentous organisms, which is the limited concept behind the assigned question. Chlorine can also damage useful floc organisms and nitrifiers. Uncontrolled addition can worsen treatment or leave an undesirable residual.</p>" +
                        "<p>Any such intervention needs competent process supervision, an established dose basis, contact arrangement and monitoring of biological and settling response. It is not routine disinfection of all aeration-tank contents, and no dosage can be inferred from the question. Correct the underlying cause and verify recovery through effluent solids and process performance, rather than assuming that a fall in SVI alone proves successful treatment.</p>",
                    sources: [{ id: "WATE813-00153", set: 16, question: 98 }]
                },
                {
                    id: "wastewater-attached-growth",
                    title: "A trickling filter is a biofilm reactor, not a fine strainer",
                    html: "<p>A trickling filter distributes wastewater over media supporting an attached microbial film. Substrate and oxygen move into the film, organisms transform substrate and produce biomass, and treated liquid drains through the bed. Distribution, ventilation, media voids and underdrain collection are essential process components. Media can include rock or manufactured plastic; sewage filtration is not limited to a drinking-water sand-filter mechanism.</p>" +
                        "<table><thead><tr><th scope='col'>Feature</th><th scope='col'>Trickling filter</th><th scope='col'>Activated sludge</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Main biomass location</th><td>Attached to media</td><td>Suspended flocs</td></tr>" +
                        "<tr><th scope='row'>Biomass retention</th><td>Attachment and biofilm growth</td><td>Solids separation and RAS</td></tr>" +
                        "<tr><th scope='row'>Solids separation</th><td>Usually needed after film detachment</td><td>Needed to separate mixed liquor</td></tr></tbody></table>" +
                        "<p>The outer film can remain aerobic while oxygen limitation creates anoxic or anaerobic inner regions in a sufficiently thick film. This supports the bank's explanation of multiple microenvironments, but does not make every trickling filter a deliberately designed anaerobic treatment process. Facultative ponds and other processes can also contain different oxygen regimes.</p>" +
                        "<p><strong>Sloughing</strong> is detachment of accumulated biofilm. Detachment renews the film but transfers solids to the downstream liquid, so clarification remains important. US EPA's September 2000 Trickling Filters fact sheet describes these attached-growth mechanisms. A biologically oxidizing bed does not guarantee a solids-free or pathogen-free effluent merely because water has passed through media.</p>",
                    sources: [
                        { id: "WATE813-00157", set: 17, question: 91 },
                        { id: "WATE813-00162", set: 17, question: 95 },
                        { id: "WATE813-00164", set: 17, question: 97 }
                    ]
                },
                {
                    id: "wastewater-filter-loading-and-recycle",
                    title: "Distinguish recycle ratio, empirical factor and loading area",
                    html: "<p>Define physical recirculation ratio as <strong>R = Q<sub>r</sub>/Q</strong>, where Q is external wastewater flow and Q<sub>r</sub> is recycled effluent. No recycle means R = 0. An empirical recirculation correction <strong>F</strong> in a named performance equation is a different quantity. A normalized correction may equal 1 at R = 0. The exact NRC formula and convention have not been verified here, so they are <strong>not supplied or silently equated to R</strong>.</p>" +
                        "<p>Hydraulic loading on plan area A is (Q + Q<sub>r</sub>)/A. External volumetric organic loading is <strong>QS<sub>0</sub>/V<sub>media</sub></strong>, commonly kg BOD/(m<sup>3</sup> media·day). US EPA's September 2000 fact sheet classifies loading per volume of media. A planar organic loading QS<sub>0</sub>/A is legitimate if identified explicitly; g/(m<sup>2</sup>·day) alone does not tell whether the denominator is plan area or active media surface.</p>" +
                        "<p><em>Hypothetical inputs:</em> Q = 1000 m<sup>3</sup>/day, Q<sub>r</sub> = 500, S<sub>0</sub> = 150 mg/L, A = 200 m<sup>2</sup> and media volume 400 m<sup>3</sup>. Then <strong>R = 0.5</strong>, hydraulic loading including recycle is <strong>7.5 m<sup>3</sup>/(m<sup>2</sup>·day)</strong>, external organic loading is <strong>0.375 kg/(m<sup>3</sup>·day)</strong>, and planar loading is <strong>750 g/(m<sup>2</sup>·day)</strong>.</p>" +
                        "<p>Total substrate passing the distributor would additionally include Q<sub>r</sub>S<sub>r</sub>. Do not multiply fresh-wastewater concentration by total circulating flow without calculating the mixed concentration. Recycle aids wetting and load distribution but does not create fresh pollutant mass.</p>",
                    sources: [
                        { id: "WATE813-00165", set: 17, question: 98 },
                        { id: "WATE813-00166", set: 17, question: 99 }
                    ]
                },
                {
                    id: "wastewater-performance-and-disinfection",
                    title: "Specify an effluent objective instead of ranking process names",
                    html: "<p>Removal efficiency depends on influent strength and composition, temperature, loading, retention, aeration, solids capture and operation. An oxidation ditch is an activated-sludge configuration, often operated with extended aeration. A trickling filter can be arranged at different loading rates and in multiple stages. Neither name uniquely fixes the final BOD.</p>" +
                        "<p>The bank's <strong>65% trickling-filter efficiency</strong> and comparisons involving <strong>95% removal</strong> are not universal guarantees. Primary septic or Imhoff treatment should not be assumed to provide a complete high-efficiency secondary process, but a missing correct option does not justify assigning every secondary process the same performance. Compare achievable effluent concentration and load for the stated treatment boundary, not simply the largest memorized percentage.</p>" +
                        "<p>Pathogen control is a separate objective. <strong>Chlorination</strong> needs a validated dose/contact arrangement and assessment of demand, residual, by-products and possible dechlorination to protect the receiving environment. <strong>UV</strong> performance depends on delivered dose, transmittance, particle shielding, lamp condition and reliable power. It leaves no persistent disinfectant residual, but an absolute claim that UV can never form any by-products is too broad.</p>" +
                        "<p>Good solids removal supports disinfection; BOD removal alone does not establish it. Select barriers for the intended discharge or reuse and demonstrate performance using the relevant monitoring and approval requirements. The US EPA process fact sheets cited here are foreign technical guidance, not evidence that a particular percentage or process has been adopted as a Nepal standard.</p>",
                    sources: [
                        { id: "WATE813-00167", set: 17, question: 100 },
                        { id: "WATE813-00163", set: 17, question: 96 },
                        { id: "WATE813-00155", set: 16, question: 100 },
                        { id: "WATE813-00273", set: 27, question: 97 }
                    ]
                },
                {
                    id: "wastewater-pond-ecology",
                    title: "Pond treatment is a changing ecosystem, not a fixed percentage",
                    html: "<p>In a facultative stabilization pond, an oxygenated upper region overlies oxygen-poor bottom water and deposited sludge. Bacteria transform organic material and release carbon dioxide and nutrients. Algae use light and nutrients, supplying oxygen through photosynthesis; atmospheric reaeration also contributes. This explains <strong>algal–bacterial symbiosis</strong> without implying that the whole depth remains aerobic.</p>" +
                        "<p>Photosynthesis stops at night while respiration continues. Oxygen and pH can therefore vary substantially over a day, and cloudy weather or seasonal cooling changes the balance. Wind mixing, turbidity, loading and accumulated sludge affect the effective light and hydraulic environment.</p>" +
                        "<p><strong>Zooplankton graze on algae</strong> and influence the suspended community, but their abundance and effect depend on species, season and pond conditions. They do not deliver a fixed algal-removal or BOD-removal efficiency. Algae leaving a pond contribute suspended solids and can exert oxygen demand when they subsequently decay.</p>" +
                        "<p>Discharging algal and nutrient-rich effluent near a lake or reservoir requires particular care: retained biomass may settle and decompose, and added nutrients may stimulate further growth. The outcome depends on loading, flushing, stratification and receiving-water ecology, not merely the word upstream. Consider suitable polishing, solids and nutrient control and the authorized discharge arrangement. US EPA's August 2011 Pond Systems Manual describes the variable aerobic/anaerobic structure; its process explanation is not permission for untreated disposal.</p>",
                    sources: [
                        { id: "WATE813-00161", set: 17, question: 94 },
                        { id: "WATE813-00139", set: 15, question: 94 }
                    ]
                },
                {
                    id: "wastewater-pond-sizing-and-seasons",
                    title: "Check pond area, depth, retention and seasonal loading together",
                    html: "<p>For an ideal nominal pond, <strong>V = Qt</strong> and water-surface area <strong>A = V/H</strong>. Q is m<sup>3</sup>/day, t is days and H is effective water depth in metres. Hydraulic volume alone is insufficient: check areal organic loading, oxygen supply, temperature, sludge accumulation, inlet/outlet arrangement and short-circuiting. Embankments, access, freeboard, setbacks and reserve units add to site area.</p>" +
                        "<p>US EPA's <strong>August 2011</strong> manual §1.2.2 describes typical facultative depths of <strong>0.9–2.4 m or deeper</strong> and cites retention recommendations of <strong>5–50 days in warm climates and 90–180 days in cold climates</strong>. These foreign examples show climate sensitivity, not prescribed Nepal minima. Neither 1.5 m nor 10–15 days is universal, and different pond types should not be ranked without a common treatment objective.</p>" +
                        "<p><em>Hypothetical comparison:</em> Q = 1000 m<sup>3</sup>/day, t = 20 days and H = 1.5 m give <strong>V = 20,000 m<sup>3</sup></strong> and <strong>A = 13,333.3 m<sup>2</sup> = 1.3333 ha</strong>. At influent BOD 200 mg/L, load is 200 kg/day, or <strong>150 kg/(ha·day)</strong>. Increasing the assumed retention to 40 days at the same depth requires <strong>40,000 m<sup>3</sup>, 2.6667 ha and 75 kg/(ha·day)</strong>.</p>" +
                        "<p>That arithmetic is not a validated seasonal design. Effective residence time can be less than V/Q; seasonal performance must be established for the selected arrangement. Large land demand reflects low-rate treatment and long retention, not an exceptionless ranking of all ponds and mechanical plants.</p>",
                    sources: [
                        { id: "WATE813-00148", set: 16, question: 93 },
                        { id: "WATE813-00156", set: 17, question: 90 },
                        { id: "WATE813-00159", set: 1, question: 93 },
                        { id: "WATE813-00178", set: 19, question: 90 }
                    ]
                },
                {
                    id: "wastewater-stream-mixing-and-stability",
                    title: "Establish mixed-stream initial conditions before calculating oxygen sag",
                    html: "<p>For complete instantaneous mixing with no reaction during mixing, mass conservation gives <strong>C<sub>m</sub> = (Q<sub>r</sub>C<sub>r</sub> + Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>r</sub> + Q<sub>e</sub>)</strong>. Subscripts r and e denote river and effluent here. Use consistent flow units and matching concentration definitions. Ultimate carbonaceous demands can be mixed on a common basis; BOD<sub>5</sub> is not automatically ultimate demand.</p>" +
                        "<p><em>Hypothetical initial-condition example:</em> river flow 9 m<sup>3</sup>/s has DO 8 mg/L and ultimate demand 2 mg/L; effluent flow 1 m<sup>3</sup>/s has DO 2 and ultimate demand 40 mg/L. Mixed <strong>DO = 7.4 mg/L</strong> and <strong>L<sub>0</sub> = 5.8 mg/L</strong>. If the assumed mixed-water saturation concentration is 9 mg/L, initial deficit <strong>D<sub>0</sub> = 1.6 mg/L</strong>. Temperature and other saturation controls must also be reconciled in a real mixing calculation.</p>" +
                        "<p>Legacy <strong>relative stability</strong> compares available oxygen equivalents with the oxygen required for first-stage BOD, commonly as a percentage. Its operational definition must be stated; available oxygen cannot be identified solely with nitrates in every sample. It is not a modern comprehensive safety or compliance test.</p>" +
                        "<p>Stream recovery can involve dilution, reaeration, settling, oxidation–reduction and biological processes. Dilution lowers concentration without destroying mass, and settling transfers pollution to sediment. Sunlight is not dependable complete disinfection. These calculations analyze receiving-water impacts; <strong>they do not authorize untreated sewage discharge or replace treatment and permission requirements</strong>.</p>",
                    sources: [
                        { id: "WATE813-00143", set: 15, question: 98 },
                        { id: "WATE813-00145", set: 15, question: 100 },
                        { id: "WATE813-00232", set: 23, question: 99 }
                    ]
                },
                {
                    id: "wastewater-streeter-phelps-derivation",
                    title: "Derive Streeter–Phelps from competing oxygen-demand and recovery rates",
                    html: "<p>Let <strong>D = C<sub>s</sub> − DO</strong> be oxygen deficit below a constant saturation concentration C<sub>s</sub>. In a moving water parcel, assume remaining carbonaceous demand L = L<sub>0</sub>e<sup>−K<sub>d</sub>t</sup>, deoxygenation rate K<sub>d</sub>L and reaeration rate K<sub>r</sub>D. The balance is <strong>dD/dt + K<sub>r</sub>D = K<sub>d</sub>L<sub>0</sub>e<sup>−K<sub>d</sub>t</sup></strong>, with D(0) = D<sub>0</sub>.</p>" +
                        "<p>Multiplying by the integrating factor e<sup>K<sub>r</sub>t</sup> gives <strong>d(De<sup>K<sub>r</sub>t</sup>)/dt = K<sub>d</sub>L<sub>0</sub>e<sup>(K<sub>r</sub> − K<sub>d</sub>)t</sup></strong>. Integrating between zero and t, for unequal rates, gives the classical result:</p>" +
                        "<p><strong>D(t) = [K<sub>d</sub>L<sub>0</sub>/(K<sub>r</sub> − K<sub>d</sub>)](e<sup>−K<sub>d</sub>t</sup> − e<sup>−K<sub>r</sub>t</sup>) + D<sub>0</sub>e<sup>−K<sub>r</sub>t</sup></strong>.</p>" +
                        "<p>Deficit and L are mg O<sub>2</sub>/L. Rates are natural-base day<sup>−1</sup> if t is days. At t = 0 the new-load term vanishes and D = D<sub>0</sub>, an important check. For positive rates the model approaches zero deficit far downstream. Base-10 exponentials require both rates converted using K = ln(10)k; their common conversion factor cancels in the prefactor but not in time dependence.</p>" +
                        "<p>This is a derived constant-coefficient special case of the oxygen-demand and reaeration relationships in US EPA's 1995 TMDL guidance. It excludes additional loads, changing flow or saturation, sediment oxygen demand, photosynthesis and nitrogenous demand unless separately represented. Predicted negative DO signals model breakdown, not physically negative oxygen or permitted disposal.</p>",
                    sources: [{ id: "WATE813-00177", set: 18, question: 100 }]
                },
                {
                    id: "wastewater-critical-deficit-and-zones",
                    title: "The minimum DO occurs where deoxygenation and reaeration balance",
                    html: "<p>For constant saturation, maximum deficit means minimum DO. At an interior critical time, <strong>dD/dt = 0</strong>, so <strong>D<sub>c</sub> = (K<sub>d</sub>/K<sub>r</sub>)L<sub>0</sub>e<sup>−K<sub>d</sub>t<sub>c</sub></sup></strong>. This relation follows directly from the oxygen balance, not from assuming oxygen is zero.</p>" +
                        "<p>Substitute the unequal-rate solution and collect the exponentials. Define the dimensionless quantity <strong>A = (K<sub>r</sub>/K<sub>d</sub>)[1 − D<sub>0</sub>(K<sub>r</sub> − K<sub>d</sub>)/(K<sub>d</sub>L<sub>0</sub>)]</strong>. Then <strong>t<sub>c</sub> = ln(A)/(K<sub>r</sub> − K<sub>d</sub>)</strong>. Require positive rates, positive L<sub>0</sub>, A &gt; 0, t<sub>c</sub> &gt; 0 and a location inside the modeled reach. Check the initial boundary and any reach endpoint if these conditions do not give a relevant interior maximum.</p>" +
                        "<p>In the compatible base-10 convention, replace ln(A) by log<sub>10</sub>(A) and use k<sub>r</sub> − k<sub>d</sub> in the denominator. The bank's D<sub>c</sub> expression then follows with 10<sup>−k<sub>d</sub>t<sub>c</sub></sup>. Mixing natural-base coefficients with that exponential is incorrect.</p>" +
                        "<p>The traditional sequence of degradation, active decomposition, recovery and cleaner water describes a possible pollution response, not four unavoidable sharply bounded zones. Severe active decomposition can exhaust oxygen, but a sag minimum can remain positive. An observed DO of zero indicates oxygen depletion; it does not by itself prove a particular pollutant, a fixed zone length or the safety of water farther downstream.</p>",
                    sources: [
                        { id: "WATE813-00158", set: 17, question: 92 },
                        { id: "WATE813-00059", set: 7, question: 99 },
                        { id: "WATE813-00151", set: 16, question: 96 }
                    ]
                },
                {
                    id: "wastewater-equal-rate-sag-limit",
                    title: "Equal deoxygenation and reaeration rates — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not give an equal-rate dataset. The apparent singularity in the unequal-rate expression is removable. Put <strong>K<sub>d</sub> = K<sub>r</sub> = K</strong> directly into the differential equation. Its integrating-factor form becomes d(De<sup>Kt</sup>)/dt = KL<sub>0</sub>, so</p>" +
                        "<p><strong>D(t) = (D<sub>0</sub> + KL<sub>0</sub>t)e<sup>−Kt</sup></strong>. Equivalently, taking the limit of the difference of the two exponentials divided by the rate difference produces te<sup>−Kt</sup>. Setting both exponents equal in the unequal-rate formula before taking the limit would incorrectly create an undefined zero divided by zero.</p>" +
                        "<p>Differentiation gives <strong>dD/dt = K[L<sub>0</sub> − D<sub>0</sub> − KL<sub>0</sub>t]e<sup>−Kt</sup></strong>. Hence the candidate critical time is <strong>t<sub>c</sub> = 1/K − D<sub>0</sub>/(KL<sub>0</sub>)</strong>. For nonnegative initial deficit it is positive only when D<sub>0</sub> &lt; L<sub>0</sub>; otherwise inspect the initial or reach boundary instead of reporting a negative downstream time.</p>" +
                        "<p><em>Hypothetical inputs:</em> K = 0.20 day<sup>−1</sup>, L<sub>0</sub> = 10 mg/L, D<sub>0</sub> = 1 mg/L and C<sub>s</sub> = 9 mg/L give <strong>t<sub>c</sub> = 4.5 days</strong>, <strong>D<sub>c</sub> = 10e<sup>−0.9</sup> = 4.0657 mg/L</strong> and minimum DO <strong>4.9343 mg/L</strong>. In base-10 form the multiplying term is ln(10)kL<sub>0</sub>t, not merely kL<sub>0</sub>t.</p>",
                    sources: []
                },
                {
                    id: "wastewater-sag-worked-example",
                    title: "Compute critical time, deficit and downstream distance — syllabus extension",
                    html: "<p><strong>Syllabus extension; all data are hypothetical.</strong> This example is independent of the preceding stream-mixing example. Adopt mixed ultimate carbonaceous demand L<sub>0</sub> = 10 mg/L, initial deficit D<sub>0</sub> = 1 mg/L, constant saturation C<sub>s</sub> = 9 mg/L, K<sub>d</sub> = 0.20 day<sup>−1</sup> and K<sub>r</sub> = 0.40 day<sup>−1</sup>, both natural-base rates. The assigned bank supplies no such complete dataset.</p>" +
                        "<p>The deficit expression simplifies to <strong>D(t) = 10e<sup>−0.2t</sup> − 9e<sup>−0.4t</sup></strong>. At zero time D = 1 mg/L, as required. The logarithm argument is (0.4/0.2)[1 − (1 × 0.2)/(0.2 × 10)] = <strong>1.8</strong>. Therefore <strong>t<sub>c</sub> = ln(1.8)/0.2 = 2.938933 days</strong>.</p>" +
                        "<p>At that time, e<sup>−0.2t<sub>c</sub></sup> = 1/1.8. Remaining demand is <strong>L<sub>c</sub> = 5.555556 mg/L</strong> and critical deficit is <strong>D<sub>c</sub> = (0.2/0.4)L<sub>c</sub> = 2.777778 mg/L</strong>. Thus minimum DO is <strong>9 − 2.777778 = 6.222222 mg/L</strong>. Independent rate checks give K<sub>d</sub>L<sub>c</sub> = K<sub>r</sub>D<sub>c</sub> = 1.111111 mg/(L·day).</p>" +
                        "<p>With additionally assumed constant velocity 0.10 m/s, distance is <strong>0.10 × 86,400 × 2.938933 = 25,392.384 m = 25.392384 km</strong>. A shorter reach may not contain this minimum. No species-specific objective or discharge authorization follows from the calculated oxygen value; omitted processes and low-flow conditions need separate assessment.</p>",
                    sources: []
                },
                {
                    id: "wastewater-sludge-digestion",
                    title: "Stabilization changes sludge; colour alone cannot verify it",
                    html: "<p>Sludge stabilization reduces readily decomposable material and associated nuisance, while subsequent handling must still address pathogens and contaminants. Anaerobic digestion relies on a coordinated microbial sequence: hydrolysis releases soluble substrates, acid-forming organisms produce intermediates, and later organisms convert suitable intermediates to methane and carbon dioxide. Gas production, solids destruction and alkalinity trends provide more information than appearance alone.</p>" +
                        "<p>Methanogenic operation normally needs a suitably buffered near-neutral environment. The bank's preference for alkaline rather than acidic conditions refers to avoiding acid accumulation; it is not an instruction to make the digester strongly alkaline. Volatile-acid accumulation can consume buffering and upset the population. Temperature, feed changes, retention and inhibitory compounds also affect stability.</p>" +
                        "<p>Digested sludge is often dark or black, partly because of reduced compounds such as metal sulfides. Black colour does not certify complete digestion, pathogen destruction or suitability for land application. Hazardous gases and oxygen deficiency also make tanks and enclosed sludge spaces dangerous; inspection and pumping require an appropriate engineered safety system, not entry based on appearance.</p>" +
                        "<p>An oxidation ditch can produce aerobically stabilized waste sludge because of its operating sludge age. Further aerobic digestion may be appropriate, but it is not the only possible downstream route. Choose stabilization, storage, dewatering and final management together, accounting for actual sludge quality and regulatory requirements. The bank's aerobic-digester answer should not become a universal process mandate.</p>",
                    sources: [
                        { id: "WATE813-00149", set: 16, question: 94 },
                        { id: "WATE813-00152", set: 16, question: 97 },
                        { id: "WATE813-00160", set: 17, question: 93 }
                    ]
                },
                {
                    id: "wastewater-sludge-handling-balance",
                    title: "Thickening and dewatering mass balance — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not supply a complete sludge-quantity or disposal design. Distinguish <strong>thickening</strong>, which concentrates sludge by removing some liquid, from stabilization, which changes biodegradability, and dewatering, which produces a more concentrated cake. Drying beds, mechanical presses and centrifuges have different land, climate, energy and operator requirements. None automatically removes dissolved salts or all pathogens.</p>" +
                        "<p>For dry-solids mass M<sub>DS</sub> in kg/day, wet-sludge density ρ in kg/m<sup>3</sup> and dry-solids mass fraction s, conservation gives <strong>V<sub>wet</sub> = M<sub>DS</sub>/(ρs)</strong>. State the fraction basis: a solids percentage by mass is not directly a percentage by volume.</p>" +
                        "<p><em>Hypothetical illustration with no dry-solids loss and ρ = 1000 kg/m<sup>3</sup> at each stage:</em> 100 kg dry solids/day occupy <strong>10 m<sup>3</sup>/day at 1%</strong>, <strong>2.5 m<sup>3</sup>/day at 4%</strong> and <strong>0.5 m<sup>3</sup>/day at 20%</strong>. The volume reductions are not corresponding destruction of dry solids. Actual density, solids capture and any digestion losses must be included in a real balance.</p>" +
                        "<p>Return liquors can carry significant nitrogen and oxygen demand back to the plant. Plan their flow and load rather than treating them as clean water. Final reuse, controlled land application, thermal treatment or disposal requires verified contaminant and pathogen criteria, storage, transport and receiving-facility acceptance. Avoid raw spreading, open dumping or uncontrolled burning.</p>",
                    sources: []
                },
                {
                    id: "wastewater-septic-liquid-and-storage",
                    title: "A septic tank needs working liquid space and accumulated-solids storage",
                    html: "<p>A septic tank provides settling, flotation, some anaerobic digestion and storage of sludge and scum before periodic removal. It is not an aeration tank and does not completely purify sewage. As solids accumulate, they displace useful liquid space and increase the risk of solids escape. The intended pumping interval is therefore part of sizing, not an unrelated maintenance detail.</p>" +
                        "<p>US EPA's <strong>February 2002 Onsite Manual</strong> §4.6.2 discusses historical 6–24-hour recommendations and a particular sizing approach maintaining <strong>24 hours of liquid detention when pumping is due</strong>. This is foreign, edition-specific guidance, not a universal Nepal requirement. The bank's separate <strong>30-minute septic detention is incorrect</strong> and cannot be rescued by calling it grit detention.</p>" +
                        "<p><em>Hypothetical volume illustration, not adopted design criteria:</em> 10 users at 100 L/(person·day) produce Q = <strong>1 m<sup>3</sup>/day</strong>. An assumed one-day useful liquid retention requires <strong>1 m<sup>3</sup></strong> remaining when desludging is due. An assumed submerged sludge/scum displacement allowance of 0.06 m<sup>3</sup>/(person·year) for two years adds <strong>1.2 m<sup>3</sup></strong>. Initial volume below operating water level is therefore at least <strong>2.2 m<sup>3</sup></strong> on this simplified basis.</p>" +
                        "<p>Additional space for freeboard and relevant above-water scum, fittings and access is not useful hydraulic detention volume. Geometry, peak inflow, compartmentation, structural integrity and actual sludge accumulation need further checks. A tank chosen by detention alone can be undersized; an effluent-treatment or dispersal system is still required.</p>",
                    sources: [
                        { id: "WATE813-00050", set: 6, question: 100 },
                        { id: "WATE813-00066", set: 8, question: 96 },
                        { id: "WATE813-00147", set: 16, question: 92 },
                        { id: "WATE813-00168", set: 18, question: 91 },
                        { id: "WATE813-00169", set: 18, question: 92 }
                    ]
                },
                {
                    id: "wastewater-septic-details-and-soak-site",
                    title: "Septic fittings and soil dispersal need a site-specific design basis",
                    html: "<p>Inlet and outlet arrangements must limit short-circuiting and retain scum and settled solids while allowing ventilation and maintenance. Watertight construction helps prevent leakage and groundwater ingress. Covers, baffles, compartments, access for desludging and protection against flotation in groundwater are functional requirements to examine, not substitutes for a verified dimensional standard.</p>" +
                        "<p>The assigned bank gives a <strong>100 mm connecting pipe</strong> and <strong>1.2 m minimum liquid depth</strong>, but an applicable Nepal standard, edition and clause for those minima have not been verified. A pipe's location and purpose must first be identified; inlet, intercompartment and outlet details are not automatically identical. Liquid depth excludes freeboard and is not total excavation depth. Do not convert the bank's unspecified standard attribution into NS adoption.</p>" +
                        "<p>A soak pit or infiltration field normally receives <strong>septic-tank effluent</strong>, not untreated toilet waste directly from a trap. It depends on adequate unsaturated, infiltrative soil and protection of groundwater and water sources. Investigate soil profile, permeability, seasonal high groundwater, bedrock, flooding, slope stability, hydraulic and contaminant loading and required setbacks.</p>" +
                        "<p>A short percolation test alone does not establish long-term performance or pathogen removal. Fractured rock, shallow groundwater, poorly draining or unstable ground and insufficient separation from drinking-water sources may preclude infiltration. Provide distribution, inspection, reserve capacity and a safe desludging service. Where the site is unsuitable, select an alternative collection and treatment arrangement rather than forcing a soak pit into the site.</p>",
                    sources: [
                        { id: "BASI674-00423", set: 33, question: 3 },
                        { id: "WATE813-00146", set: 16, question: 91 },
                        { id: "WATE813-00170", set: 18, question: 93 }
                    ]
                },
                {
                    id: "wastewater-land-treatment-limits",
                    title: "Land treatment hydraulic and nutrient limits — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned records contain no complete land-treatment design. Soil–plant treatment can combine filtration, adsorption, biological transformation and plant uptake, but each pathway has limits. Slow-rate irrigation, infiltration-based systems and overland-flow arrangements require different soils and management. Applying wastewater to land is not automatically safe reuse or unlimited disposal.</p>" +
                        "<p>A simplified hydraulic area is <strong>A<sub>H</sub> = Q/q<sub>H</sub></strong>, where Q is m<sup>3</sup>/day and q<sub>H</sub> is an allowable long-term application depth in m/day. A nutrient check is <strong>A<sub>N</sub> = M<sub>N</sub>/U<sub>N</sub></strong>, with annual nitrogen load M<sub>N</sub> in kg/year and credited crop uptake U<sub>N</sub> in kg/(ha·year). These area estimates must be converted to the same units before comparison.</p>" +
                        "<p><em>Entirely hypothetical limits:</em> Q = 100 m<sup>3</sup>/day and q<sub>H</sub> = 0.005 m/day give <strong>20,000 m<sup>2</sup> = 2 ha</strong>. Annual nitrogen load 1000 kg and credited uptake 200 kg/(ha·year) require <strong>5 ha</strong>. The larger preliminary area is 5 ha, giving average applied depth <strong>2 mm/day</strong>, before other constraints and reserve area.</p>" +
                        "<p>Check rainfall, evapotranspiration, wet-season storage, crop restrictions, other nutrient inputs, salinity, metals, pathogens, runoff and groundwater transport. Nitrogen uptake is not an unlimited sink, and treatment performance cannot be inferred solely from infiltration capacity. Use appropriate pretreatment, dosing/resting, monitoring and the applicable approvals; the hypothetical rates are not regulatory limits.</p>",
                    sources: []
                },
                {
                    id: "wastewater-latrines-and-faecal-sludge",
                    title: "Latrines require a complete sanitation service chain",
                    html: "<p><strong>Night soil</strong> is a historical term for collected human excreta, principally faeces and urine from non-sewered sanitation. It is not industrial waste, stormwater or ordinary kitchen refuse. The historical name does not establish safe handling or justify applying untreated excreta to crops.</p>" +
                        "<p><strong>Syllabus extension beyond the bank's terminology questions:</strong> the assigned records do not provide a complete latrine design. A sanitation system must connect user access, containment, emptying, transport, treatment and safe final management. A well-built toilet can still contaminate the environment if its pit floods, its effluent reaches a water source or its contents are dumped after emptying.</p>" +
                        "<p>Pit, ventilated improved pit, pour-flush and contained dry systems differ in water needs, odour/vector control, soil dependence and service requirements. A water seal interrupts some nuisance pathways but does not disinfect the waste. Twin-pit operation needs a suitable switching and resting plan; resting time alone must not be asserted to make contents universally pathogen-free.</p>" +
                        "<p>Assess groundwater, flood levels, soil stability, available space, accessibility and the feasible emptying service before selecting the type. Keep stormwater out, provide handwashing, protect the slab and superstructure, and ensure covers and vents perform their intended roles. Plan mechanized or otherwise appropriately controlled servicing that avoids direct exposure and unsafe entry. No universal pit dimension, setback or sludge-safety interval is inferred from the two vocabulary questions.</p>",
                    sources: [
                        { id: "WATE813-00335", set: 33, question: 93 },
                        { id: "WATE813-00340", set: 33, question: 98 }
                    ]
                },
                {
                    id: "wastewater-solid-waste-service-chain",
                    title: "Solid-waste quantities and management routes — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide a municipal solid-waste design dataset. Begin with prevention and source segregation, then collection, recovery or treatment and controlled residual disposal. Keep hazardous and healthcare wastes out of an ordinary household recycling or composting stream. Waste composition, moisture, seasonal generation and collection coverage determine equipment and facility requirements.</p>" +
                        "<p><em>Hypothetical planning example:</em> 2000 residents at 0.50 kg/(person·day) generate <strong>1000 kg/day</strong>. If assumed ideal separation sends 30% to dry-material recovery and 40% to organics treatment, those incoming streams are <strong>300 and 400 kg/day</strong>, with <strong>300 kg/day initial residual</strong>. These are feed allocations, not product yields: contamination, treatment rejects and process mass losses still require a balance.</p>" +
                        "<p>Composting needs appropriate feed, aeration, moisture and process control; anaerobic treatment needs compatible feed and gas/residue management. Thermal treatment requires emissions controls and safe ash management. An engineered landfill needs a suitable site, leachate management, gas control, drainage, cover, monitoring and post-closure arrangements. Open dumping or burning is not equivalent to these controlled processes.</p>" +
                        "<p>Link sanitation and solid-waste services without conflating their streams. Refuse can block drains and damage sewage equipment, while screenings and dewatered sludge need acceptable receiving facilities. A proposed disposal site must be evaluated for receptors, flood and slope hazards, groundwater and long-term operating resources. No invented Nepal standard number or adoption claim is used for these general principles.</p>",
                    sources: []
                }
            ],
            gaps: [
                "All 66 assigned source IDs are attached to related teaching blocks. Coverage is bank-grounded, not evidence that the bank exhausts the official syllabus.",
                "No assigned complete grit-design, F/M–SRT, equal-rate oxygen-sag, land-treatment, sludge-dewatering or solid-waste dataset exists. Their explicitly labelled extensions use stated hypothetical inputs.",
                "The exact NRC recirculation-factor formula and its historical convention remain unverified; no canonical formula is asserted and the empirical factor is not equated to physical recycle ratio.",
                "Nepal-specific septic pipe diameters, liquid-depth minima, infiltration setbacks and other dimensional adoption clauses have not been verified. Bank values are not design approval.",
                "The exact ignition temperature tolerance and duration behind the fixed-solids question remain unidentified. The inspected 1971 EPA method supports approximately 550°C, not the full keyed recipe.",
                "US EPA grit, pond, onsite and biological-process publications are identified foreign technical references. Their ranges do not establish Nepal standards or universal efficiencies.",
                "Receiving-water, reuse, faecal-sludge and solid-waste compliance limits need the actual applicable instruments, location and permit conditions. No universal 4 mg/L aquatic-survival limit is supplied.",
                "The equalization-air question lacks tank and oxygen-transfer data; only its 400 kg BOD/h influent load is determined.",
                "SVI results of 125 and 9 mL/g require the dry-solids measurement to represent the corresponding whole mixed-liquor sample, which the bank wording does not fully establish.",
                "Streeter–Phelps examples are restricted oxygen-balance models, not authorization to dilute or discharge untreated wastewater; nutrient, sediment, pathogen and ecological effects require additional assessment."
            ],
            cautions: [
                {
                    html: "<p><strong>Unverified dimensional attribution:</strong> the bank's 100 mm septic connecting pipe and 1.2 m liquid depth are not supported here by an identified applicable Nepal clause. Pipe function, liquid depth, freeboard and storage must be distinguished. Do not present the explanation's unspecified plumbing codes or IS reference as verified NS adoption.</p>",
                    sources: [
                        { id: "BASI674-00423", set: 33, question: 3 },
                        { id: "WATE813-00146", set: 16, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Fixed-solids method limit:</strong> US EPA Method 160.4 (1971) supports ignition around 550°C and warns of mineral-related mass changes. It does not verify the exact 550 ± 50°C for one hour choice. Fixed residue is not pure inorganic matter, nor is all ignition loss necessarily organic.</p>",
                    sources: [{ id: "WATE813-00014", set: 3, question: 94 }]
                },
                {
                    html: "<p><strong>Odour endpoint condition:</strong> 40 mL diluted to a total 240 mL gives dilution ratio 6, but calling it TON presumes the specified threshold endpoint and method. The dilution water is 200 mL. Odour absence is not a pathogen-safety test.</p>",
                    sources: [{ id: "WATE813-00017", set: 3, question: 97 }]
                },
                {
                    html: "<p><strong>Septic retention is design-dependent:</strong> 24 hours is a conventional value, not an unconditional Nepal mandate. The inspected US EPA 2002 manual distinguishes historical recommendations from maintaining 24 hours at the end of a sludge-storage cycle. The other source lacks a substantive correct option; its Not Provided key is not a detention value.</p>",
                    sources: [
                        { id: "WATE813-00050", set: 6, question: 100 },
                        { id: "WATE813-00147", set: 16, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Defective thirty-minute septic item:</strong> all listed choices are minutes and the keyed 30 minutes is not supported for the stated septic function. Do not reinterpret the question as a grit chamber. US EPA 2003 Table 4 gives horizontal-flow grit detention of 45–90 seconds and aerated-grit detention of 2–5 minutes at peak hourly flow, as foreign guidance.</p>",
                    sources: [{ id: "WATE813-00066", set: 8, question: 96 }]
                },
                {
                    html: "<p><strong>Fresh does not fix pH:</strong> mild alkalinity is common in some domestic sewage, but pH greater than seven and the explanation's 7.2–8.5 range are not universal. Water chemistry, industrial discharges and decomposition change pH.</p>",
                    sources: [{ id: "WATE813-00057", set: 7, question: 97 }]
                },
                {
                    html: "<p><strong>Underdetermined air demand:</strong> 500 m<sup>3</sup>/h × 800 mg/L gives 400 kg BOD/h, not 2000 m<sup>3</sup>/h of air. Tank volume, mixing basis, actual oxygen requirement, air reference conditions and transfer performance are missing. The explanation cannot recover a volume-based allowance without tank volume.</p>",
                    sources: [{ id: "WATE813-00061", set: 8, question: 91 }]
                },
                {
                    html: "<p><strong>Overgeneralized aquatic limit:</strong> the three 4 mg/L answers must not be taught as an absolute life/death boundary. Species, life stages, exposure duration and temperature matter. These items do not establish a Nepal discharge standard.</p>",
                    sources: [
                        { id: "WATE813-00064", set: 8, question: 94 },
                        { id: "WATE813-00067", set: 8, question: 97 },
                        { id: "WATE813-00175", set: 18, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>BOD calculation assumptions:</strong> 250 mg O<sub>2</sub>/L follows from 5/0.02 only if the depletion is valid and unseeded or correctly seed-corrected. Seed oxygen use is subtracted before dividing by the sample fraction. The bank's ppm wording is only approximately interchangeable with mg/L in dilute water.</p>",
                    sources: [
                        { id: "WATE813-00065", set: 8, question: 95 },
                        { id: "WATE813-00138", set: 15, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>SVI sample-basis ambiguity:</strong> 100/0.8 gives 125 mL/g only when 800 mg is the total initial MLSS corresponding to the 100 mL settled volume. Drying only the collected settled fraction is not automatically a whole-sample MLSS measurement. The value alone does not establish reasonably good settling.</p>",
                    sources: [{ id: "WATE813-00068", set: 8, question: 98 }]
                },
                {
                    html: "<p><strong>SVI denominator condition:</strong> 27/3 = 9 mL/g is conditional on 3 g being the whole MLSS mass in the original litre. The phrase dry weight of this sludge can instead refer to only recovered settled solids. The explanation's verified label does not resolve that analytical ambiguity.</p>",
                    sources: [{ id: "WATE813-00069", set: 8, question: 99 }]
                },
                {
                    html: "<p><strong>Efficiency basis:</strong> 300 to 30 mg/L establishes 90% concentration reduction. Load reduction additionally requires compatible influent and effluent flows and analytical periods; dilution can make the percentages differ.</p>",
                    sources: [{ id: "WATE813-00070", set: 8, question: 100 }]
                },
                {
                    html: "<p><strong>Series-stage convention:</strong> E<sub>1</sub> + E<sub>2</sub>(1 − E<sub>1</sub>) uses fractional efficiencies, with E<sub>2</sub> measured against the second stage's own influent. It does not justify adding two percentage removals or ignoring bypass and recycle mass balances.</p>",
                    sources: [{ id: "WATE813-00058", set: 7, question: 98 }]
                },
                {
                    html: "<p><strong>Anaerobic conditions are not absence of all controls:</strong> the None choice only rejects the listed DO/CO<sub>2</sub> alternatives. Temperature, pH, substrate, retention and inhibition strongly affect anaerobic treatment. Sulfate-based respiration is not the general mechanism of all anaerobic sewage digestion.</p>",
                    sources: [
                        { id: "WATE813-00141", set: 15, question: 96 },
                        { id: "WATE813-00142", set: 15, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Relative-stability definition:</strong> retain the legacy comparison of available oxygen equivalents with first-stage demand, with its test basis stated. The explanation's parenthetical restriction to oxygen from nitrates is too narrow for a general definition and is not a comprehensive treatment-quality assessment.</p>",
                    sources: [{ id: "WATE813-00143", set: 15, question: 98 }]
                },
                {
                    html: "<p><strong>Self-purification is not disposal permission:</strong> dilution does not remove pollutant mass, deposition transfers it to sediment, and sunlight does not guarantee disinfection. Reaeration and natural reactions need a receiving-water assessment; the listed mechanisms cannot authorize untreated discharge.</p>",
                    sources: [
                        { id: "WATE813-00145", set: 15, question: 100 },
                        { id: "WATE813-00232", set: 23, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Pond values are not universal:</strong> 1.5 m is not an established minimum for every oxidation pond and 10–15 days is not a climate-independent retention period. US EPA 2011 documents much broader facultative-pond conditions. Its foreign ranges do not establish Nepal adoption, and IS 2490 must not be invented as a pond-design standard.</p>",
                    sources: [
                        { id: "WATE813-00148", set: 16, question: 93 },
                        { id: "WATE813-00178", set: 19, question: 90 }
                    ]
                },
                {
                    html: "<p><strong>Pond effluent remains biologically active:</strong> algal–bacterial symbiosis does not imply constant oxygen or fixed treatment efficiency. Algae and nutrients can affect a receiving reservoir, but severity depends on its loading and ecology. Zooplankton grazing is variable, not a guaranteed polishing percentage.</p>",
                    sources: [
                        { id: "WATE813-00139", set: 15, question: 94 },
                        { id: "WATE813-00161", set: 17, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>Sludge colour and buffering:</strong> black colour is not proof of complete digestion or pathogen safety. The alkaline-condition answer should be understood as suitable near-neutral buffering for the process, not a recommendation for arbitrarily high pH.</p>",
                    sources: [
                        { id: "WATE813-00149", set: 16, question: 94 },
                        { id: "WATE813-00152", set: 16, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Chlorination is a qualified process intervention:</strong> selective return-sludge chlorination can suppress some filamentous bulking but can harm useful organisms. Diagnose the cause, use supervised process-specific controls and verify response; the question supplies no operational dosage.</p>",
                    sources: [{ id: "WATE813-00153", set: 16, question: 98 }]
                },
                {
                    html: "<p><strong>Dominant organisms depend on configuration:</strong> aerobic heterotrophs describe conventional carbon-removing activated sludge. Nitrifiers and other organisms remain important, and deliberately anoxic or anaerobic zones are possible in nutrient-removal arrangements.</p>",
                    sources: [{ id: "WATE813-00154", set: 16, question: 99 }]
                },
                {
                    html: "<p><strong>No universal efficiency ranking:</strong> neither the missing 95%-removal option, the oxidation-ditch maximum claim nor the 65% trickling-filter answer defines all plants. Loading, climate, configuration and solids capture determine performance. Preserve the bank choices without inventing a guaranteed process percentage.</p>",
                    sources: [
                        { id: "WATE813-00155", set: 16, question: 100 },
                        { id: "WATE813-00163", set: 17, question: 96 },
                        { id: "WATE813-00167", set: 17, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>Biofilm qualification:</strong> oxygen-limited inner layers can develop in a thick trickling-filter film, but not every film has the same aerobic/anaerobic structure. The filter remains principally an attached-growth biological oxidation process, and it is not the only treatment unit capable of multiple oxygen regimes.</p>",
                    sources: [{ id: "WATE813-00162", set: 17, question: 95 }]
                },
                {
                    html: "<p><strong>Land comparison needs equal objectives:</strong> conventional low-rate ponds often need extensive area, but the question does not define equal influent, climate, effluent target or all pond configurations. Its largest-land answer is not an exceptionless ranking against every aerobic or anaerobic pond.</p>",
                    sources: [{ id: "WATE813-00159", set: 1, question: 93 }]
                },
                {
                    html: "<p><strong>Oxidation-ditch sludge route:</strong> further aerobic digestion is one possible arrangement, not a required destination for every ditch's excess sludge. Actual stabilization, solids handling and final disposal objectives determine the route.</p>",
                    sources: [{ id: "WATE813-00160", set: 17, question: 93 }]
                },
                {
                    html: "<p><strong>Factor is not ratio:</strong> zero physical recycle gives R = 0; a normalized empirical factor may give F = 1. The explanation's move from no recirculation to a closest 1:1 recycle ratio is unjustified. The exact NRC factor convention remains unverified, so no formula or unqualified identification of the keyed 1 is asserted.</p>",
                    sources: [{ id: "WATE813-00165", set: 17, question: 98 }]
                },
                {
                    html: "<p><strong>Organic-loading denominator:</strong> g/(m<sup>2</sup>·day) is an areal loading only with the area defined. Trickling-filter classification commonly uses BOD mass per media volume per day, including the inspected US EPA table. Plan area, media volume and biofilm surface area must not be conflated.</p>",
                    sources: [{ id: "WATE813-00166", set: 17, question: 99 }]
                },
                {
                    html: "<p><strong>Septic terminology and scope:</strong> the printed Listing tank appears to intend settling tank. Settling, digestion and storage are compatible functions, but a septic tank is not an aeration tank or complete effluent-disinfection system.</p>",
                    sources: [
                        { id: "WATE813-00168", set: 18, question: 91 },
                        { id: "WATE813-00169", set: 18, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Missing soak-pit option:</strong> the intended connection is the septic outlet or other appropriately treated effluent system, not one of the listed traps. Not Provided is a missing-choice marker, not a component. Soil dispersal also requires a suitable site and applicable protection criteria.</p>",
                    sources: [{ id: "WATE813-00170", set: 18, question: 93 }]
                },
                {
                    html: "<p><strong>BOD<sub>5</sub> does not exclude NBOD automatically:</strong> five days at 20°C defines the conventional test condition. Nitrification can contribute unless inhibited under the specified method; label an inhibited carbonaceous result appropriately. Twenty degrees is not every stream's typical temperature.</p>",
                    sources: [{ id: "WATE813-00174", set: 18, question: 97 }]
                },
                {
                    html: "<p><strong>Rate convention and limiting case:</strong> the bank's base-10 remaining-demand, deficit and critical-deficit expressions require base-10 rates. Natural rates equal ln(10) times those rates. L<sub>0</sub> is ultimate demand, not automatically BOD<sub>5</sub>; equal deoxygenation and reaeration need the separate limiting solution.</p>",
                    sources: [
                        { id: "WATE813-00176", set: 18, question: 99 },
                        { id: "WATE813-00177", set: 18, question: 100 },
                        { id: "WATE813-00158", set: 17, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Original repeated options:</strong> the Streeter–Phelps item originally repeated all options, and the preserved bank displays its one distinct expression. That source defect is not repaired by inventing additional choices or changing its stored key. The teaching derivation supplies assumptions and an independent initial-condition check.</p>",
                    sources: [{ id: "WATE813-00177", set: 18, question: 100 }]
                },
                {
                    html: "<p><strong>Oxygen-zone qualification:</strong> active decomposition may produce zero DO under severe loading, but the sag minimum need not be zero and not every stream develops four distinct zones. Zero DO alone does not uniquely identify the cause or demonstrate downstream recovery.</p>",
                    sources: [
                        { id: "WATE813-00059", set: 7, question: 99 },
                        { id: "WATE813-00151", set: 16, question: 96 }
                    ]
                },
                {
                    html: "<p><strong>Overlapping vocabulary:</strong> raw, untreated and crude sewage can be synonyms, so the stem does not establish a scientifically unique choice among them. Fresh describes limited deterioration, not necessarily treatment status.</p>",
                    sources: [{ id: "WATE813-00179", set: 19, question: 91 }]
                },
                {
                    html: "<p><strong>Specific gravity is approximate:</strong> 1.001 is not a constant for all sewage. Temperature, suspended and dissolved matter and industrial composition affect density; specify the reference-water basis when using specific gravity quantitatively.</p>",
                    sources: [{ id: "WATE813-00184", set: 19, question: 96 }]
                },
                {
                    html: "<p><strong>Nitrogen pathways:</strong> ammonia formation describes ammonification of organic nitrogen, not the sole first product of all organic decomposition. Nitrate predominance requires sufficiently effective nitrification; well-clarified or carbon-treated effluent need not satisfy that condition.</p>",
                    sources: [
                        { id: "WATE813-00200", set: 21, question: 90 },
                        { id: "WATE813-00221", set: 22, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>Disinfection limits:</strong> chlorination and UV are common processes, but effectiveness depends on validated operating conditions. UV has no persistent residual; saying it has no by-products under any conditions is too absolute. Solids shielding, lamp condition and transmittance also matter, not just clear-looking water and power.</p>",
                    sources: [{ id: "WATE813-00273", set: 27, question: 97 }]
                },
                {
                    html: "<p><strong>Historical excreta use is not safe reuse guidance:</strong> the night-soil definitions are terminology questions. Collection or historical fertilization does not establish pathogen safety or authorize raw spreading. Containment, worker protection, treatment and safe final management remain necessary.</p>",
                    sources: [
                        { id: "WATE813-00335", set: 33, question: 93 },
                        { id: "WATE813-00340", set: 33, question: 98 }
                    ]
                }
            ],
            references: [
                {
                    title: "US EPA, Wastewater Technology Fact Sheet: Screening and Grit Removal, EPA832-F-03-011, June 2003, Table 4 (foreign technical guidance)",
                    url: "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1000S7N.TXT"
                },
                {
                    title: "US EPA, Wastewater Technology Fact Sheet: Package Plants, EPA832-F-00-016, September 2000 (foreign technical guidance)",
                    url: "https://www.epa.gov/sites/default/files/2015-06/documents/package_plant.pdf"
                },
                {
                    title: "US EPA, Principles of Design and Operations of Wastewater Treatment Pond Systems, EPA/600/R-11/088, August 2011, section 1.2.2 (foreign technical guidance)",
                    url: "https://www.epa.gov/sites/default/files/2014-09/documents/lagoon-pond-treatment-2011.pdf"
                },
                {
                    title: "US EPA, Onsite Wastewater Treatment Systems Manual, EPA/625/R-00/008, February 2002, section 4.6.2 (foreign technical guidance)",
                    url: "https://www.epa.gov/sites/default/files/2015-06/documents/2004_07_07_septics_septic_2002_osdm_all.pdf"
                },
                {
                    title: "US EPA, Wastewater Technology Fact Sheet: Trickling Filters, EPA832-F-00-014, September 2000 (foreign technical guidance)",
                    url: "https://www.epa.gov/system/files/documents/2022-10/trickling-filters-factsheet.pdf"
                },
                {
                    title: "US EPA, CADDIS: Dissolved Oxygen, October 2025 update; species-specific oxygen requirements",
                    url: "https://www.epa.gov/caddis/dissolved-oxygen"
                },
                {
                    title: "US EPA, Method 410.4: Chemical Oxygen Demand, revision 2.0, August 1993, sections 2.1 and 7.2–7.3",
                    url: "https://www.epa.gov/sites/default/files/2015-08/documents/method_410-4_1993.pdf"
                },
                {
                    title: "US EPA, Method 160.4: Residue, Volatile, issued 1971; ignition and interpretation limitations",
                    url: "https://www.epa.gov/sites/default/files/2015-08/documents/method_160-4_1971.pdf"
                },
                {
                    title: "Washington State Department of Ecology, publication 98-307, March 1998, fifth printing October 2007, pages 23–25: BOD dilution and seed correction",
                    url: "https://apps.ecology.wa.gov/publications/documents/98307.pdf"
                },
                {
                    title: "US EPA, Wastewater Laboratory Procedures and Chemistry, June 1975, pages 14-113–116: sludge volume index",
                    url: "https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=20008TRJ.TXT"
                },
                {
                    title: "US EPA, TMDL Book II, Part 1, September 1995, equations 2-4–2-6 and 2-10; 1997 electronic wrapper",
                    url: "https://www.epa.gov/sites/production/files/2019-12/documents/technical-guidance-tmdl-book2.pdf"
                }
            ]
        }
    });
})();