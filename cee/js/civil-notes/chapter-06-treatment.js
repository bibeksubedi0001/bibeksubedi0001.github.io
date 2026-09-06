(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0603: {
            code: "ACiE0603",
            questionCount: 70,
            blocks: [
                {
                    id: "treatment-train-and-barriers",
                    title: "Choose a treatment train from the contaminants and required barriers",
                    html: "<p>A treatment plant combines operations that do different jobs. Screening intercepts large debris; settling separates particles by gravity; coagulation changes particle stability; flocculation encourages collisions; filtration captures remaining particles; and disinfection inactivates targeted microorganisms. Removing visible dirt is not equivalent to making water microbiologically or chemically safe.</p>" +
                        "<p>A conventional surface-water sequence is <strong>screening, rapid coagulant mixing, slow flocculation, sedimentation, filtration and disinfection</strong>. Rapid mixing distributes the reagent before its reactions progress too far. Slow mixing then builds aggregates that can survive transfer to the clarifier. Settling reduces the solids burden on the filters, while filtration supports effective downstream disinfection.</p>" +
                        "<p>This is a process model, not a compulsory sequence for every source. Some suitable waters use direct filtration without a sedimentation stage; protected groundwater may need different chemical treatment. Dissolved hardness, volatile gases and dissolved organic contaminants require mechanisms beyond ordinary settling. Nor do coagulation, flocculation and sedimentation invariably remove all suspended material.</p>" +
                        "<p>Selection therefore starts with source variability and treatment objectives, then checks treatability, hydraulic continuity, residuals disposal, operator capability and failure response. Sample between barriers to distinguish poor coagulation from filter breakthrough or inadequate contact time. The cited questions establish the conventional order, not a complete plant design or permission to omit a necessary barrier.</p>",
                    sources: [
                        { id: "WATE813-00228", set: 23, question: 95 },
                        { id: "WATE813-00238", set: 24, question: 95 },
                        { id: "WATE813-00337", set: 33, question: 95 },
                        { id: "WATE813-00342", set: 33, question: 100 }
                    ]
                },
                {
                    id: "treatment-screen-open-area",
                    title: "Screen openings control interception; open area controls velocity",
                    html: "<p>A bar screen protects pumps and downstream units from sticks, leaves and other large debris. Its clear spacing must match the material to be intercepted and the equipment being protected. The bank's 50 mm coarse-screen opening is a teaching value, not a universal definition of coarse screening or a Nepal specification.</p>" +
                        "<p>For a simplified rack whose areas are measured normal to the approach flow, clear opening b and bar thickness t give an open-area fraction <strong>φ = b/(b + t)</strong>. If the gross submerged frontal area is A, the clean opening velocity is <strong>v<sub>o</sub> = Q/(φA)</strong>. Q is m<sup>3</sup>/s, A is m<sup>2</sup>, and velocity is m/s. Inclination, supports and frame obstruction require their actual projected geometry.</p>" +
                        "<p><strong>Hypothetical example:</strong> Q = 0.12 m<sup>3</sup>/s, A = 0.40 m<sup>2</sup>, b = 50 mm and t = 10 mm give φ = 0.8333, net area 0.3333 m<sup>2</sup> and v<sub>o</sub> = <strong>0.36 m/s</strong>. Blocking half that opening area raises velocity to <strong>0.72 m/s</strong> at unchanged flow.</p>" +
                        "<p>Obstruction also increases headloss and upstream level; a loss coefficient must describe the particular rack and blockage condition. Design includes cleaning access, redundancy and safe containment of screenings, rather than assuming the initial clean-screen calculation remains valid. Screening does not remove dissolved contaminants or provide disinfection.</p>",
                    sources: [{ id: "WATE813-00043", set: 6, question: 93 }]
                },
                {
                    id: "treatment-settling-regimes",
                    title: "Plain settling, flocculent settling and clarification are not interchangeable labels",
                    html: "<p><strong>Plain sedimentation</strong> means gravity separation without deliberate coagulant addition. It does not mean that every particle must remain discrete: natural aggregation can occur. Conversely, the presence of gravity settling alone does not prove that a coagulant was used. Clarification describes the production of clearer supernatant and can include different settling arrangements.</p>" +
                        "<table><thead><tr><th scope='col'>Settling regime</th><th scope='col'>Physical behaviour</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Type I, discrete</th><td>Dilute, essentially noninteracting particles retain approximately constant size and settling velocity.</td></tr>" +
                        "<tr><th scope='row'>Type II, flocculent</th><td>Particles aggregate during descent; size and settling velocity change with time and depth.</td></tr>" +
                        "<tr><th scope='row'>Zone or hindered</th><td>Concentrated particles interact and can settle with an identifiable interface.</td></tr>" +
                        "<tr><th scope='row'>Compression</th><td>Particles form a supporting network; further consolidation expels water from the solids layer.</td></tr></tbody></table>" +
                        "<p>The discrete-particle overflow-rate model is useful for understanding clarification, but it cannot automatically predict a chemically formed floc's removal. Flocculent settling needs treatability or settling-column evidence; concentrated sludge also requires solids-flux and storage considerations.</p>" +
                        "<p>First identify whether the task concerns individual particles, an evolving floc suspension or a sludge blanket. Then choose the model and measurements. This avoids using a single Stokes velocity for all material in a clarifier or calling every gravity-separation operation sedimentation with coagulant.</p>",
                    sources: [
                        { id: "WATE813-00033", set: 5, question: 93 },
                        { id: "WATE813-00086", set: 10, question: 95 },
                        { id: "WATE813-00264", set: 26, question: 100 },
                        { id: "WATE813-00265", set: 27, question: 90 }
                    ]
                },
                {
                    id: "treatment-stokes-force-balance",
                    title: "Derive Stokes settling and check the particle Reynolds number",
                    html: "<p>For a small sphere settling at terminal velocity, submerged weight equals drag. Submerged weight is <strong>(ρ<sub>s</sub> − ρ)gπd<sup>3</sup>/6</strong>; creeping-flow drag is <strong>3πμdv<sub>s</sub></strong>. Equating them gives <strong>v<sub>s</sub> = (ρ<sub>s</sub> − ρ)gd<sup>2</sup>/(18μ) = g(s − 1)d<sup>2</sup>/(18ν)</strong>, where s = ρ<sub>s</sub>/ρ and ν = μ/ρ.</p>" +
                        "<p>Here d is particle diameter, μ dynamic viscosity, ν kinematic viscosity and v<sub>s</sub> terminal settling speed. Consistent SI units are metres, kg/m<sup>3</sup>, Pa·s, m<sup>2</sup>/s and m/s. The assumptions are a dilute suspension, approximately spherical particles, negligible wall interference, terminal motion and sufficiently small <strong>Re<sub>p</sub> = v<sub>s</sub>d/ν</strong>.</p>" +
                        "<p><strong>Bank calculation:</strong> retain its centimetre units: g = 981 cm/s<sup>2</sup>, s = 2.65, d = 0.002 cm and ν = 0.01 cm<sup>2</sup>/s. Then v<sub>s</sub> = 981 × 1.65 × 0.002<sup>2</sup>/(18 × 0.01) = <strong>0.03597 cm/s = 0.0003597 m/s</strong>. Re<sub>p</sub> = 0.03597 × 0.002/0.01 = <strong>0.007194</strong>, consistent with creeping flow.</p>" +
                        "<p>The stored 0.36 cm/s is about ten times too large; no offered value matches the calculation. Changing diameter, viscosity or rounding to obtain an option is not justified. Aggregating flocs, irregular grains and interacting sludge may require a different drag or settling model.</p>",
                    sources: [{ id: "WATE813-00266", set: 27, question: 91 }]
                },
                {
                    id: "treatment-ideal-overflow-derivation",
                    title: "Why plan area, rather than extra depth alone, controls ideal discrete settling",
                    html: "<p>Consider an ideal rectangular horizontal-flow basin of length L, width B and water depth H. Assume steady uniform horizontal velocity, uniform particle entry over depth, no short-circuiting or resuspension, and discrete particles with constant settling velocity v<sub>s</sub>. The horizontal velocity is <strong>u = Q/(BH)</strong>, so travel time is <strong>t = L/u = LBH/Q</strong>.</p>" +
                        "<p>A particle entering at the water surface reaches the floor before the outlet when v<sub>s</sub>t ≥ H. Substitution cancels H and gives <strong>v<sub>s</sub> ≥ Q/(LB)</strong>. Define the surface overflow rate <strong>v<sub>o</sub> = Q/A<sub>plan</sub></strong>. It has velocity units: m<sup>3</sup>/(m<sup>2</sup>·h) is m/h. Overflow rate, surface loading and overflow velocity name this same hydraulic ratio.</p>" +
                        "<p>For a single slower particle class uniformly distributed at the inlet, the ideal captured fraction is <strong>η = min(v<sub>s</sub>/v<sub>o</sub>, 1)</strong>. A mixture requires weighting each class by its incoming solids fraction. These are particle-removal fractions, not guaranteed turbidity or pathogen reductions.</p>" +
                        "<p>At fixed Q, increasing plan area lowers v<sub>o</sub> and improves ideal capture; <strong>decreasing area does the opposite</strong>. Increasing depth alone increases both settling distance and nominal residence time proportionally. Real depth still matters for hydraulic stability, sludge storage and floc development. The ideal cancellation does not mean depth is irrelevant to an actual clarifier.</p>",
                    sources: [
                        { id: "WATE813-00035", set: 5, question: 95 },
                        { id: "WATE813-00150", set: 16, question: 95 },
                        { id: "WATE813-00173", set: 18, question: 96 }
                    ]
                },
                {
                    id: "treatment-basin-sizing-example",
                    title: "Calculate surface loading, detention and horizontal velocity separately",
                    html: "<p>Three useful basin quantities have different denominators: <strong>surface loading Q/A<sub>plan</sub></strong>, <strong>nominal detention V/Q</strong>, and <strong>horizontal velocity Q/A<sub>flow</sub></strong>. The plan area is not the cross-sectional flow area. Volume includes the effective water space, not an assumed allowance already occupied by sludge or inactive zones.</p>" +
                        "<p><strong>Hypothetical example; these dimensions and flows are not bank givens.</strong> Let Q = 7200 m<sup>3</sup>/day = 300 m<sup>3</sup>/h, L = 30 m, B = 10 m and H = 3 m. The following values describe a uniform-flow idealisation.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Surface loading</th><td>300/(30 × 10) = 1.0 m/h</td></tr>" +
                        "<tr><th scope='row'>Nominal detention</th><td>(30 × 10 × 3)/300 = 3.0 h</td></tr>" +
                        "<tr><th scope='row'>Horizontal velocity</th><td>300/(10 × 3) = 10 m/h = 0.002778 m/s</td></tr></tbody></table>" +
                        "<p>A hypothetical discrete class settling at 0.5 m/h has ideal removal 0.5/1.0 = <strong>50%</strong>. Doubling Q without changing the basin raises surface loading to 2 m/h, halves detention to 1.5 h and reduces this class's ideal removal to <strong>25%</strong>.</p>" +
                        "<p>Actual detention is distributed, not identical for every parcel. Inlet jets, dead zones and density currents can make early breakthrough much faster than V/Q. Sizing must therefore examine peak operating flow, parallel-unit availability and hydraulic layout, not only the average-flow arithmetic.</p>",
                    sources: [{ id: "WATE813-00267", set: 27, question: 92 }]
                },
                {
                    id: "treatment-real-clarifiers-and-sludge",
                    title: "Settling performance includes inlet distribution, sludge withdrawal and outlet collection",
                    html: "<p>A settling pond stores deposited solids for periodic removal. A mechanically equipped clarifier can collect sludge towards withdrawal points and skim floating material during operation. These descriptions distinguish arrangements, not rigid definitions: clarification does not inherently require one particular scraper or continuous sludge removal.</p>" +
                        "<p>Good hydraulic design spreads inflow, avoids high-energy jets reaching the sludge, limits short-circuiting and collects clarified water uniformly. Outlet-weir loading Q/L<sub>w</sub> has units m<sup>3</sup>/(m·day) when Q is daily flow; it is not surface loading Q/A. Uneven weirs can locally overload an otherwise adequate plan area.</p>" +
                        "<p>Settled solids form <strong>sludge</strong>; the individual suspended aggregates are flocs. Withdrawal must accommodate solids production and protect effective water volume. <strong>Hypothetical mass balance:</strong> Q = 7200 m<sup>3</sup>/day, influent suspended solids 40 mg/L and 75% capture give 0.001 × 7200 × 40 × 0.75 = <strong>216 kg dry solids/day</strong>. If the withdrawn mixture is hypothetically 2% solids by mass, its wet mass is 10,800 kg/day, about 10.8 m<sup>3</sup>/day at an assumed density of 1000 kg/m<sup>3</sup>.</p>" +
                        "<p>No universal 0.3 m/s settling or permissible basin velocity follows from the bank. Particle settling speed, horizontal through-flow and local scour are different phenomena. Sludge storage, resuspension risk and subsequent handling require actual particle, flow and plant-operating data.</p>",
                    sources: [
                        { id: "WATE813-00046", set: 6, question: 96 },
                        { id: "WATE813-00245", set: 25, question: 91 },
                        { id: "WATE813-00246", set: 25, question: 92 },
                        { id: "WATE813-00247", set: 25, question: 93 },
                        { id: "WATE813-00249", set: 25, question: 95 }
                    ]
                },
                {
                    id: "treatment-batch-and-settling-tests",
                    title: "Batch settling time is only one part of a fill-and-draw cycle",
                    html: "<p>A fill-and-draw basin receives a batch, allows settling, decants clarified water and manages the remaining sludge before repeating the cycle. Filling, quiescent settling, drawing and maintenance each occupy time. The settled volume cannot be counted as immediately available treatment capacity throughout all these stages.</p>" +
                        "<p>For useful decanted volume V<sub>b</sub> per cycle and complete cycle duration t<sub>c</sub>, the long-run average batch output is <strong>V<sub>b</sub>/t<sub>c</sub></strong>. Multiple basins or balancing storage may be needed to accept continuous incoming water and deliver a continuous supply. Decant rate must not disturb settled material or pull the sludge interface into the outlet.</p>" +
                        "<p>The cited 24-hour period is an unsupported generalisation rather than a compulsory settling duration. Appropriate time depends on particle behaviour, water temperature, pretreatment, target clarification, storage and operating pattern. In a quiescent discrete-particle test, settling distance divided by particle velocity estimates descent time; that estimate does not include the complete operating cycle.</p>" +
                        "<p>For flocculent suspensions, samples collected at different depths and times in a settling column show how removal changes as aggregates grow. Use representative water and mixing history, and distinguish the test's quiescent conditions from a full-scale basin's hydraulic disturbances. A single detention mnemonic cannot replace that evidence.</p>",
                    sources: [{ id: "WATE813-00248", set: 25, question: 94 }]
                },
                {
                    id: "treatment-coagulation-and-jar-tests",
                    title: "Destabilise colloids before trying to grow and remove flocs",
                    html: "<p>Small suspended particles can remain dispersed because surface charge and surrounding solution chemistry resist attachment. Coagulation changes this stability through mechanisms including charge neutralisation and incorporation in precipitated metal-hydroxide floc. Flocculation supplies opportunities for destabilised particles to collide and remain attached; sedimentation or filtration then physically removes them.</p>" +
                        "<p>A particle near 1 μm often settles impractically slowly and benefits from pretreatment, but diameter alone does not establish that filtration is impossible. Granular filters can capture particles smaller than their pore openings through attachment, and appropriate membranes provide another separation mechanism. Coagulation is a useful treatment strategy, not a universal consequence of exactly one particle size.</p>" +
                        "<p>A jar-test programme compares a control and several treatment conditions using representative water. Keep mixing, sampling and settling procedures comparable while examining dose, pH and alkalinity. Observe floc development and settling, then assess the clarified and filtered water rather than selecting the jar with the largest visible floc alone.</p>" +
                        "<p>Useful outcomes include residual turbidity, colour or organic-matter removal, residual metal and filterability. Seasonal source changes can shift the optimum. Underdosing may leave stable particles; overdosing can waste reagent, increase sludge or destabilise the intended treatment chemistry. Alum is a coagulant, not a disinfectant or merely an inert catalyst.</p>",
                    sources: [
                        { id: "WATE813-00229", set: 23, question: 96 },
                        { id: "WATE813-00261", set: 26, question: 97 },
                        { id: "WATE813-00268", set: 1, question: 97 }
                    ]
                },
                {
                    id: "treatment-alum-alkalinity-basis",
                    title: "Alum dose, metal dose and alkalinity consumption need different mass bases",
                    html: "<p>Water-treatment alum is aluminium sulfate supplied in a specified hydrated or solution form. Writing <strong>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·xH<sub>2</sub>O</strong> makes the hydration assumption explicit. The bank's eighteen-water formula is one representation, not proof that every commercial filter-alum product has that exact composition or purity.</p>" +
                        "<p>A simplified bicarbonate-buffered reaction is <strong>Al<sup>3+</sup> + 3HCO<sub>3</sub><sup>−</sup> → Al(OH)<sub>3</sub> + 3CO<sub>2</sub></strong>. Thus one mole of aluminium sulfate contains two moles of aluminium and consumes six equivalents of alkalinity. At 50 g CaCO<sub>3</sub> per equivalent, this is <strong>300 g alkalinity as CaCO<sub>3</sub> per mole of alum</strong>, under this reaction model.</p>" +
                        "<p><strong>Hypothetical calculation:</strong> assume pure eighteen-water hydrate with rounded molar mass 666 g/mol and a product dose of 20 mg/L. Predicted alkalinity consumption is 20 × 300/666 = <strong>9.009 mg/L as CaCO<sub>3</sub></strong>. Its aluminium dose is 20 × 54/666 = <strong>1.622 mg/L as Al</strong>, using 54 g Al per mole of this hydrate. These are different concentration bases.</p>" +
                        "<p>WHO 2022 Annex A5.1.6 describes typical doses of 2–5 mg/L <strong>as aluminium</strong> or 4–10 mg/L <strong>as iron</strong>, with jar-test optimisation. They are not product-dose prescriptions or Nepal requirements. Real pH response depends on starting alkalinity and chemistry; actual dosing uses the product specification and treatability results, not hydration inferred from a name.</p>",
                    sources: [
                        { id: "WATE813-00038", set: 5, question: 98 },
                        { id: "WATE813-00269", set: 27, question: 93 }
                    ]
                },
                {
                    id: "treatment-coagulant-choice-and-surfactants",
                    title: "Compare coagulants by treated-water performance, not a universal preference",
                    html: "<p>Aluminium and iron salts can both generate hydroxide precipitates and remove destabilised particles or associated organic colour. Their useful pH windows, alkalinity consumption, residual-metal behaviour, sludge characteristics and cost differ. The preferred reagent is the one that achieves the specified performance with manageable operation for the actual water.</p>" +
                        "<p>An iron floc may settle differently from an alum floc, but <strong>floc density, settling speed and total floc quantity are not synonyms</strong>. Total sludge depends on reagent dose, precipitation chemistry and captured solids. A claim that iron necessarily produces less floc, or always permits shorter sedimentation, cannot be deduced from the reagent name.</p>" +
                        "<p>Alum can remove some taste- and odour-associated material when it is particulate or linked to removable organic matter. This does not establish removal of every dissolved odour compound, nor easy dewatering of every alum sludge. Compare clarified-water quality, filter loading and sludge treatment together.</p>" +
                        "<p>Surfactants can stabilise foam and emulsified oil and alter flocculation or surface scum. Greasy accumulation nevertheless warrants source investigation rather than identification of one universal cause. Characterise oil, detergent and organic loading, assess whether source control or pretreatment is needed, and confirm performance by testing. Increasing coagulant dose without understanding the interference can increase residuals without solving the problem.</p>",
                    sources: [
                        { id: "WATE813-00060", set: 7, question: 100 },
                        { id: "WATE813-00270", set: 27, question: 94 },
                        { id: "WATE813-00271", set: 27, question: 95 }
                    ]
                },
                {
                    id: "treatment-mixing-power-and-g",
                    title: "Velocity gradient relates dissipated power to mixing intensity",
                    html: "<p>Rapid mixing distributes coagulant and promotes its initial contact with particles. Flocculation follows with gentler mixing so particles collide without excessive breakup. A motor speed alone does not describe the mixing intensity: impeller geometry, liquid properties, baffling and power transfer also matter.</p>" +
                        "<p>The conventional mean velocity-gradient parameter is <strong>G = √[P/(μV)]</strong>, where P is power actually dissipated in the water in watts, μ is dynamic viscosity in Pa·s and V is the mixed water volume in m<sup>3</sup>. Since P/(μV) has units s<sup>−2</sup>, G has units <strong>s<sup>−1</sup></strong>. It is an energy-based measure of shear, not a longitudinal water speed or a literal uniform gradient everywhere.</p>" +
                        "<p><strong>Hypothetical example:</strong> P = 100 W, μ = 0.001 Pa·s and V = 40 m<sup>3</sup> give G = √(100/0.04) = <strong>50 s<sup>−1</sup></strong>. If only 60% of motor input reaches the water, the corresponding input is 100/0.60 = <strong>166.7 W</strong>; substituting that input directly for P would overstate G.</p>" +
                        "<p>Cold water changes viscosity, while local high-shear regions can damage floc even when average G appears suitable. The parameter helps compare mixing designs but cannot replace tests of floc formation, hydraulic distribution and particle survival during transfer to the next unit.</p>",
                    sources: [
                        { id: "WATE813-00260", set: 26, question: 96 },
                        { id: "WATE813-00337", set: 33, question: 95 }
                    ]
                },
                {
                    id: "treatment-flocculation-time-and-staging",
                    title: "Floc growth balances collision opportunities against breakup",
                    html: "<p>Nominal flocculator detention is <strong>t = V/Q</strong>. The product <strong>Gt</strong> is dimensionless when G is s<sup>−1</sup> and t is seconds; it is a comparative mixing-exposure parameter, not an exact count of successful particle attachments. Equal Gt values can arise from very different shear histories and need not produce equivalent flocs.</p>" +
                        "<p>Staged flocculation can apply stronger mixing initially and reduce intensity as aggregates become larger and more fragile. <strong>Hypothetical example:</strong> three stages at 60, 40 and 20 s<sup>−1</sup>, each lasting 600 s, give ΣG<sub>i</sub>t<sub>i</sub> = 36,000 + 24,000 + 12,000 = <strong>72,000</strong> over 30 minutes. The example does not prescribe those stages for an actual source.</p>" +
                        "<p>Useful time and intensity depend on temperature, particle concentration, chemistry, floc strength and mixing equipment. The bank's 10–40-minute range is a broad teaching interval, not a guaranteed optimum. A keyed 100–200 s<sup>−1</sup> cannot be justified merely as the nearest option to a different asserted slow-mixing range; the design basis is missing.</p>" +
                        "<p>Continuing beyond 30 minutes does <strong>not inevitably break flocs</strong>. Breakup competes with aggregation and depends strongly on shear and floc properties. Excessive mixing can be detrimental, but longer, appropriately gentle contact may help some waters. Verify settled and filtered performance instead of turning a typical time into a universal failure threshold.</p>",
                    sources: [
                        { id: "WATE813-00231", set: 23, question: 98 },
                        { id: "WATE813-00233", set: 23, question: 100 },
                        { id: "WATE813-00259", set: 26, question: 95 }
                    ]
                },
                {
                    id: "treatment-filtration-mechanisms-and-media",
                    title: "Granular filtration is more than sieving through small holes",
                    html: "<p>Filtration passes water through a porous medium and captures material within or upon it. Granular filters remove particles by several mechanisms: interception by grains, sedimentation within pores, diffusion-driven contact and attachment to surfaces. Straining also occurs, but capture is not determined solely by whether a particle is larger than a visible pore.</p>" +
                        "<p>Coagulation can improve attachment and allow rapid filters to capture fine suspended matter effectively. A filter with apparently clear effluent can still require disinfection and chemical-quality verification. Dissolved salts generally pass through ordinary sand; granular filtration should not be confused with ion exchange or reverse osmosis.</p>" +
                        "<p>Conventional media include sand, anthracite and garnet. Multimedia beds combine grain size and density to distribute solids storage through the bed while maintaining suitable separation after washing. Support gravel and underdrains retain media and distribute filtration or wash flow; they are not selected by copying the top layer's grading.</p>" +
                        "<p>Plastic or floating media exist in specialised treatment systems, including biological applications. Their existence does not make plastic beads a conventional rapid-sand medium, but it invalidates a blanket assertion that plastic can never be filter media. Compare the mechanism, pretreatment, bed arrangement, cleaning method and validated performance before treating two filters as interchangeable.</p>",
                    sources: [
                        { id: "WATE813-00262", set: 26, question: 98 },
                        { id: "WATE813-00275", set: 27, question: 99 }
                    ]
                },
                {
                    id: "treatment-media-grading-and-cleanliness",
                    title: "Specify effective size and uniformity without accepting dirty or broadly graded sand",
                    html: "<p>Filter sand needs a specified grading and suitable durability and cleanliness. Unwanted clay, silt and organic contamination can clog pores, impair washing or introduce contaminants. A deliberately developed biological layer in a slow filter is not permission to install organically contaminated sand.</p>" +
                        "<p><strong>D<sub>10</sub></strong>, the effective size, is the particle size for which 10% by mass is finer on the grading curve. <strong>D<sub>60</sub></strong> similarly corresponds to 60% finer, and the uniformity coefficient is <strong>U<sub>c</sub> = D<sub>60</sub>/D<sub>10</sub></strong>. D values use the same length unit; U<sub>c</sub> is dimensionless. Effective size describes fineness, whereas U<sub>c</sub> describes the spread of grading.</p>" +
                        "<p><strong>Hypothetical grading:</strong> D<sub>10</sub> = 0.25 mm and D<sub>60</sub> = 0.40 mm give U<sub>c</sub> = <strong>1.60</strong>. This arithmetic does not establish acceptance: the selected filter specification must also address the rest of the grading, media depth, cleanliness and wash behaviour.</p>" +
                        "<p>Relatively uniform, controlled grading does not mean every grain is identical, nor that nonuniformity is an unqualified requirement. Excessively fine material increases resistance; overly coarse material can reduce capture under the chosen operating conditions. WHO's typical slow-sand effective-size range and the bank's slightly different interval must remain identified by source, not blended into a universal acceptance band.</p>",
                    sources: [
                        { id: "WATE813-00276", set: 27, question: 100 },
                        { id: "WATE813-00277", set: 28, question: 91 },
                        { id: "WATE813-00328", set: 32, question: 97 }
                    ]
                },
                {
                    id: "treatment-slow-sand-operation",
                    title: "Slow sand filtration combines fine media, low loading and biological maturation",
                    html: "<p>A slow sand filter operates at a low hydraulic loading through fine sand. A biologically active surface region, often called the schmutzdecke, and processes deeper in the bed contribute to particle and microbial removal. A newly prepared or disturbed bed does not instantly have the performance of a mature filter.</p>" +
                        "<p><strong>WHO 2022 Annex A5.1.4, printed page 542</strong>, describes typical loading of <strong>0.1–0.3 m/h</strong>, effective sand size <strong>0.15–0.3 mm</strong> and sand depth <strong>0.5–1.5 m</strong>. These are guidance ranges, not normative Nepal dimensions. The bank's 100–200 L/(m<sup>2</sup>·h) equals 0.1–0.2 m/h; its 0.9–1.1 m depth and 0.20–0.35 mm effective size are other teaching intervals, not proof of universal requirements.</p>" +
                        "<p>High incoming solids can shorten runs rapidly, so source protection, presettling or roughing filtration may be important. Turbidity is measured optically in NTU, whereas suspended-solids concentration is a mass per volume. The bank's 60 mg/L turbidity threshold cannot be converted into a universal NTU limit.</p>" +
                        "<p>Monitor headloss, flow and effluent quality, and manage surface cleaning and maturation under the plant's operating procedure. Maintaining sufficient media after repeated scraping, protecting the biological process and providing another filter during maintenance are part of the design. Slow filtration is a treatment barrier, not evidence that disinfection or chemical-quality checks are unnecessary.</p>",
                    sources: [
                        { id: "WATE813-00042", set: 6, question: 92 },
                        { id: "WATE813-00063", set: 8, question: 93 },
                        { id: "WATE813-00263", set: 26, question: 99 },
                        { id: "WATE813-00328", set: 32, question: 97 }
                    ]
                },
                {
                    id: "treatment-rapid-filter-loading-and-redundancy",
                    title: "Convert rapid-filter rates correctly and size the area that remains in service",
                    html: "<p>Rapid granular filters accept higher hydraulic loading and are commonly preceded by coagulation and clarification. They depend on suitable attachment chemistry and periodic backwashing rather than relying on the same mature surface layer as a slow sand filter. Direct-filtration configurations omit clarification only when the selected water and validated treatment allow it.</p>" +
                        "<p>The bank's <strong>3000–6000 L/(m<sup>2</sup>·h) = 3–6 m/h = 50–100 mm/min</strong>. Dividing millimetres per hour by 60 is essential; 0.5–1.5 mm/min is not that conversion. WHO 2022 Annex A5.1.4, page 541, separately describes typical rapid-gravity loading of <strong>4–20 m/h</strong>, sand grain size 0.5–1.0 mm and depth 0.6–2.0 m. Its grain-size description is not automatically a D<sub>10</sub> specification.</p>" +
                        "<p><strong>Hypothetical area exercise:</strong> Q = 600 m<sup>3</sup>/h at an assumed limiting loading of 6 m/h needs <strong>100 m<sup>2</sup> in service</strong>. Four 25 m<sup>2</sup> beds provide this only when all operate. With one unavailable, loading becomes 600/75 = <strong>8 m/h</strong>. Five such beds leave 100 m<sup>2</sup> available with one out.</p>" +
                        "<p>This demonstrates redundancy, not a final filter layout. Check treated-water demand, wash-water use, run length, hydraulic distribution and the permitted operating rate. A broad WHO typical range cannot retrospectively validate exceeding a particular plant's chosen loading limit.</p>",
                    sources: [
                        { id: "WATE813-00044", set: 6, question: 94 },
                        { id: "WATE813-00238", set: 24, question: 95 }
                    ]
                },
                {
                    id: "treatment-filter-runs-and-backwash",
                    title: "Filter runs and backwashing — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not supply a complete headloss, backwash or filter-run dataset. In a clean saturated bed, a simplified Darcy representation is <strong>Δh = vL/K</strong>, with hydraulic conductivity K in m/s, filtration velocity v in m/s and media depth L in metres. Deposits alter effective permeability and flow distribution, so a fixed clean-bed K cannot predict an entire run.</p>" +
                        "<p>Two distinct limits can end a run: excessive headloss or unacceptable effluent quality. Turbidity breakthrough may occur before the terminal headloss, while local deposits and cracks can produce uneven flow. A timer alone does not demonstrate that a filter remains effective.</p>" +
                        "<p>Backwashing removes retained solids and restores hydraulic performance. Bed expansion depends on media size, density and water temperature; air scour, where designed, changes the cleaning system further. Wash rates, sequencing and restart procedures must therefore be specific to the installed equipment, not copied from an unrelated filter.</p>" +
                        "<p>Calculate wash-water volume from actual wash flow and duration, account for beds unavailable during washing, and verify post-wash effluent before normal return to service. Wash-water recycling can concentrate particles, organisms or chemicals at the head of the plant; residuals treatment and controlled recycle are part of the process mass balance, not free extra capacity.</p>",
                    sources: []
                },
                {
                    id: "treatment-hardness-and-boiling",
                    title: "Hardness removal requires a chemical change and separation of the resulting solids",
                    html: "<p>Hardness principally reflects dissolved calcium and magnesium. Comparing hardness with alkalinity requires a common equivalent basis, conventionally mg/L as CaCO<sub>3</sub>. For ordinary bicarbonate-dominated water under the standard calculation convention, <strong>carbonate hardness = min(total hardness, alkalinity)</strong>; the remainder is noncarbonate hardness. This classification is not a full chemical speciation model.</p>" +
                        "<p><strong>Hypothetical classification:</strong> total hardness 200 mg/L as CaCO<sub>3</sub> and alkalinity 140 mg/L as CaCO<sub>3</sub> give <strong>140 mg/L carbonate hardness and 60 mg/L noncarbonate hardness</strong>. Comparing these numbers directly with calcium reported as mg/L Ca would mix different mass bases.</p>" +
                        "<p>Heating calcium-bicarbonate water can drive <strong>Ca(HCO<sub>3</sub>)<sub>2</sub> → CaCO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O</strong>. Both calcium carbonate and carbon dioxide are formed. The carbonate is a precipitate; the carbon dioxide can leave as gas. The bank question offering both substances has two chemically valid products despite its single stored key.</p>" +
                        "<p>Magnesium chemistry can involve hydroxide formation and should not be reduced to an assertion that all bicarbonates behave identically. Boiling is not a general removal method for sulfate or chloride hardness, nor a municipal softening design. After precipitation, solids must be separated; scale formation on a heating surface is not itself a controlled treatment process.</p>",
                    sources: [
                        { id: "WATE813-00040", set: 5, question: 100 },
                        { id: "WATE813-00274", set: 27, question: 98 }
                    ]
                },
                {
                    id: "treatment-lime-soda-softening",
                    title: "Lime-soda softening chemistry — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide complete calcium, magnesium, alkalinity, carbon-dioxide and reagent-purity data for a lime-soda design. Precipitative softening converts dissolved hardness into solids that can be settled and filtered. Reagent requirements follow the actual species and equivalents, not total hardness alone.</p>" +
                        "<p>For calcium bicarbonate, <strong>Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> → 2CaCO<sub>3</sub> + 2H<sub>2</sub>O</strong>. Magnesium bicarbonate requires additional hydroxide: <strong>Mg(HCO<sub>3</sub>)<sub>2</sub> + 2Ca(OH)<sub>2</sub> → Mg(OH)<sub>2</sub> + 2CaCO<sub>3</sub> + 2H<sub>2</sub>O</strong>. Dissolved carbon dioxide also consumes lime and must not be omitted from a full balance.</p>" +
                        "<p>Soda ash supplies carbonate for noncarbonate calcium hardness; for example, <strong>CaSO<sub>4</sub> + Na<sub>2</sub>CO<sub>3</sub> → CaCO<sub>3</sub> + Na<sub>2</sub>SO<sub>4</sub></strong>. Removing calcium does not imply that all dissolved salts disappear: sodium sulfate remains dissolved in this simplified reaction.</p>" +
                        "<p>Design must consider reaction pH, kinetics, sludge production, clarification, filtration and subsequent stabilisation or recarbonation. Stoichiometric demand is only a starting point; purity, excess reagent and measured residual hardness matter. Softening can change microbial survival, but a high pH or a pH of 9.5 does not establish instantaneous sterilisation. Maintain separately validated disinfection and final water-quality controls.</p>",
                    sources: []
                },
                {
                    id: "treatment-ion-exchange-service",
                    title: "Sodium-cycle ion exchange removes hardness but does not demineralise water",
                    html: "<p>A sodium-cycle zeolite or suitable resin exchanges its sodium ions for calcium and magnesium. With Z representing two exchange-site charges, the simplified service reaction is <strong>Na<sub>2</sub>Z + Ca<sup>2+</sup> ⇌ CaZ + 2Na<sup>+</sup></strong>; magnesium follows an analogous exchange. The sites are finite, so hardness eventually breaks through.</p>" +
                        "<p>Because the exchange targets cations rather than their original counterions, it can remove both carbonate and noncarbonate hardness. Sulfate, chloride and other anions largely remain, accompanied by increased sodium. Softening therefore does not mean desalination, disinfection or elimination of every dissolved contaminant. Ion-exchange demineralisation requires a different arrangement and chemistry.</p>" +
                        "<p><strong>Hypothetical capacity example:</strong> an operating exchange capacity of 20 kg expressed as CaCO<sub>3</sub>, treating 200 mg/L hardness on the same basis, gives a theoretical run volume of 20/0.200 = <strong>100 m<sup>3</sup></strong>. Here 200 mg/L equals 0.200 kg/m<sup>3</sup>. The arithmetic assumes that this stated usable capacity applies to the water and desired breakthrough limit.</p>" +
                        "<p>Actual service volume depends on regeneration performance, competing ions, leakage and fouling. Iron, manganese or suspended solids may require pretreatment. Confirm treated hardness and sodium-related suitability for the intended supply rather than assuming that an exhausted bed or a soft-water reading proves all quality requirements have been met.</p>",
                    sources: [
                        { id: "WATE813-00032", set: 5, question: 92 },
                        { id: "WATE813-00272", set: 27, question: 96 }
                    ]
                },
                {
                    id: "treatment-exchange-regeneration-and-brine",
                    title: "Regeneration restores exchange sites and creates a concentrated waste stream",
                    html: "<p>Regeneration uses a high sodium-ion activity to drive the sodium-cycle exchange back towards its service form. A simplified calcium reaction is <strong>CaZ + 2NaCl ⇌ Na<sub>2</sub>Z + CaCl<sub>2</sub></strong>. Calcium and magnesium transferred off the bed leave in spent regenerant rather than being destroyed.</p>" +
                        "<p>The cited common-salt answers identify the correct regenerant family. The bank's approximately 10% brine description is a legacy teaching concentration, not a universal operating instruction. Percentage may refer to mass per mass or mass per solution volume; these definitions do not give identical concentrations. Product and equipment procedures must specify the actual basis.</p>" +
                        "<p>Assess the usable exchange capacity restored per regeneration, salt efficiency, hardness leakage and the water needed to remove residual regenerant before service. A theoretical reversal equation does not establish that every site is regenerated or that the first discharged water is suitable for consumption.</p>" +
                        "<p>Spent brine has elevated salts and removed hardness, and may include other contaminants retained by the bed. Disposal, recovery or further treatment requires an appropriate plan; transferring hardness from supply water to a waste stream does not eliminate environmental responsibility. These notes explain the mass transfer without supplying a field regeneration recipe or assuming permission to discharge the brine.</p>",
                    sources: [
                        { id: "WATE813-00045", set: 6, question: 95 },
                        { id: "WATE813-00332", set: 33, question: 90 }
                    ]
                },
                {
                    id: "treatment-disinfection-versus-sterilisation",
                    title: "Disinfection controls pathogens; sterilisation is a much stronger claim",
                    html: "<p><strong>Disinfection</strong> aims to inactivate microorganisms of concern to the required performance level. It is not synonymous with removal of hardness, colour or all suspended solids. <strong>Sterilisation</strong> means eliminating all viable microbial forms, including resistant forms; ordinary drinking-water disinfection should not be described as complete sterilisation.</p>" +
                        "<p>Organisms differ in susceptibility. A disinfectant effective against many bacteria can be much less effective against protozoan cysts or oocysts. WHO identifies Cryptosporidium as resistant to chlorine at drinking-water treatment conditions. Multiple barriers, including suitable particle removal and a validated disinfection process, address these differences.</p>" +
                        "<p>Chlorine is widely used because it is practical, effective for many targets and can leave a distribution residual. It is not universally the ideal choice irrespective of source quality, pathogen targets, by-products, chemical handling or operator capability. Alternatives also have limitations, particularly where they leave no lasting residual.</p>" +
                        "<p>Plain chlorination means chlorination without preceding treatment stages, not proof that visually clear lake water is safe. Emergencies likewise do not remove the need to assess turbidity, chemical contamination and resistant organisms. A treatment selection must meet the required barriers for the actual source; a situation named in an elementary question cannot establish that chlorination alone is sufficient.</p>",
                    sources: [
                        { id: "WATE813-00236", set: 24, question: 93 },
                        { id: "WATE813-00250", set: 25, question: 96 },
                        { id: "WATE813-00257", set: 26, question: 93 },
                        { id: "WATE813-00258", set: 26, question: 94 }
                    ]
                },
                {
                    id: "treatment-chlorine-ph-speciation",
                    title: "pH changes free-chlorine speciation, not a universal instantaneous kill threshold",
                    html: "<p>Free chlorine in typical treated water includes hypochlorous acid and hypochlorite ion, related by <strong>HOCl ⇌ H<sup>+</sup> + OCl<sup>−</sup></strong>. HOCl is generally the more effective disinfecting form. Increasing pH shifts the equilibrium towards OCl<sup>−</sup>, so otherwise comparable free-chlorine disinfection becomes less effective.</p>" +
                        "<p>The HOCl fraction is approximately <strong>1/[1 + 10<sup>pH − pK<sub>a</sub></sup>]</strong>. <strong>Hypothetical equilibrium illustration:</strong> take pK<sub>a</sub> = 7.5 as an illustrative temperature-dependent value. At pH 6.5, the fraction is 1/1.1 = <strong>90.9%</strong>; at pH 8.5 it is 1/11 = <strong>9.09%</strong>. These are species fractions, not percentages of organisms killed.</p>" +
                        "<p>Hypochlorite products tend to add alkalinity, whereas chlorine gas can lower pH through its aqueous reactions. Actual pH change depends on dose, formulation, buffering and starting chemistry. A product's name alone does not establish a measurable increase in every water or an intrinsically inferior disinfecting performance at the same final free chlorine and pH.</p>" +
                        "<p>Do not lower pH indiscriminately: corrosion and final water-quality requirements also matter. Neither maximum efficiency exactly at pH 7 nor instantaneous E. coli destruction at pH 9.5 is a universal rule. Required contact and organism-specific validation remain necessary.</p>",
                    sources: [
                        { id: "WATE813-00036", set: 5, question: 96 },
                        { id: "WATE813-00037", set: 5, question: 97 },
                        { id: "WATE813-00256", set: 26, question: 92 }
                    ]
                },
                {
                    id: "treatment-chlorine-demand-and-breakpoint",
                    title: "Chlorine demand, combined residual and free residual describe different quantities",
                    html: "<p>Chlorine reacts with reduced substances and microorganisms, so the applied dose is not the residual remaining after contact. At a defined time and under specified test conditions, <strong>chlorine demand = applied dose − measured total residual</strong>, with all concentrations expressed consistently as mg/L as Cl<sub>2</sub>. Free and combined residual should also be distinguished.</p>" +
                        "<p>With ammonia present, an increasing dose can initially form chloramines, producing combined residual. Further reactions can reduce that residual; beyond the breakpoint region, additional dose produces a clearer rise in free chlorine. The curve depends on water chemistry, contact time and analytical definitions. It is not evidence that every organic molecule has been completely oxidised.</p>" +
                        "<p><strong>Hypothetical demand test:</strong> a dose of 2.0 mg/L and total residual of 0.4 mg/L after a specified 30-minute test give <strong>1.6 mg/L demand at that time</strong>. The residual is not the applied dose, and the result is not a universal demand for that source under every season or flow condition.</p>" +
                        "<p>Chlorine can oxidise ammonia, ferrous iron and some organic or inorganic substances; this does not remove all inorganic salts or all organic matter. Oxidised metals generally need subsequent solids separation. Dissolved oxygen is not stripped out by chlorination, and chlorine dosing does not inherently provide aeration or guarantee a rise in dissolved oxygen.</p>",
                    sources: [
                        { id: "WATE813-00041", set: 6, question: 91 },
                        { id: "WATE813-00234", set: 24, question: 91 },
                        { id: "WATE813-00255", set: 26, question: 91 }
                    ]
                },
                {
                    id: "treatment-chlorine-mass-and-product-basis",
                    title: "Separate available-chlorine dose from commercial product mass",
                    html: "<p>For available-chlorine mass M in kg/day and water flow Q in m<sup>3</sup>/day, <strong>dose = 1000M/Q mg/L</strong>. The conversion follows from 10<sup>6</sup> mg/kg divided by 1000 L/m<sup>3</sup>. If the product's available-chlorine mass fraction is f, the required product mass for that accounting basis is <strong>M/f</strong>, before any separately justified allowances.</p>" +
                        "<p><strong>Bank calculation:</strong> 15 kg/day of chlorine for 30,000 m<sup>3</sup>/day gives 1000 × 15/30,000 = <strong>0.5 mg/L</strong>, not 500 mg/L. This is an applied dose; it supplies no residual, demand or contact-time evidence.</p>" +
                        "<p><strong>Hypothetical product conversion:</strong> if those 15 kg/day mean available chlorine and a product is verified as 65% available chlorine by mass, product demand is 15/0.65 = <strong>23.0769 kg/day</strong>. Its product concentration is 0.76923 mg/L, while available chlorine remains 0.5 mg/L. If 15 kg meant product instead, the interpretation would differ.</p>" +
                        "<p>Pure calcium hypochlorite is <strong>Ca(OCl)<sub>2</sub></strong>, equivalently Ca(ClO)<sub>2</sub>. Commercial bleaching powder or chlorinated lime can have complex composition; CaOCl<sub>2</sub> and Ca(OCl)<sub>2</sub> are not identical formulas. The verified ILO/WHO chemical card identifies the pure compound, not the purity of any purchased material. Actual operation requires product assay, stability and plant controls, not a field mixing recipe inferred from this arithmetic.</p>",
                    sources: [
                        { id: "WATE813-00243", set: 24, question: 100 },
                        { id: "WATE813-00254", set: 25, question: 100 }
                    ]
                },
                {
                    id: "treatment-ct-and-effective-contact",
                    title: "Effective disinfectant contact — Syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no complete organism-specific CT or tracer dataset. A simplified <strong>CT = C × t</strong> uses disinfectant concentration C in mg/L and effective contact time t in minutes, giving mg·min/L. Performance depends on disinfectant species, organism, temperature, pH and water quality; equal CT values are not universally interchangeable.</p>" +
                        "<p>Nominal tank detention V/Q overstates early contact where water short-circuits. A validated effective-contact measure such as tracer-derived t<sub>10</sub>, the time corresponding to 10% cumulative tracer passage, accounts for hydraulic behaviour more appropriately. With changing concentration or multiple segments, the assessment needs the specified method rather than an arbitrary average concentration multiplied by V/Q.</p>" +
                        "<p><strong>Hypothetical example:</strong> V = 600 m<sup>3</sup> and Q = 1200 m<sup>3</sup>/h give 30 minutes nominal detention. Assume an illustrative t<sub>10</sub> factor of 0.50 and constant free chlorine 0.60 mg/L. Effective time is 15 minutes and CT is <strong>9 mg·min/L</strong>, not the nominal-time product of 18.</p>" +
                        "<p>WHO 2022 gives conditional guidance of free residual at least 0.5 mg/L after at least 30 minutes at pH below 8, and at least 0.2 mg/L at delivery. This is not a universal pathogen-specific CT table or a guarantee against Cryptosporidium. Turbidity control and validated barriers remain essential; the hypothetical tank is not certified by its arithmetic.</p>",
                    sources: []
                },
                {
                    id: "treatment-chlorination-terms-and-residuals",
                    title: "Location, chemical form and dose strategy are separate chlorination classifications",
                    html: "<p><strong>Prechlorination</strong> and <strong>postchlorination</strong> describe where chlorine is applied relative to treatment stages. <strong>Hypochlorination</strong> describes use of a hypochlorite source. Plain chlorination means chlorination without preceding treatment. These classifications can overlap; they are not four mutually exclusive positions on one dose curve.</p>" +
                        "<p><strong>Superchlorination</strong> refers to deliberately high dosing for a specified treatment purpose and may require controlled dechlorination afterwards. Merely achieving a normal free residual beyond breakpoint is not automatically superchlorination. Dechlorination reduces an excessive residual; it does not erase all oxidation by-products or prove that prior treatment was adequate.</p>" +
                        "<p>Nepal's inspected <strong>NDWQS 2079</strong> notice records a residual-chlorine range of <strong>0.10–0.50 mg/L for systems using chlorine</strong>. Its stated epidemic/high-pollution qualification accommodates residual above 0.5 mg/L in that context; it is not a general licence for arbitrary high dosing. The notice's range, WHO's contact/delivery guidance and WHO's 5 mg/L free-chlorine health-based value serve different purposes. The health-based value is not an operating target.</p>" +
                        "<p>Assess residual at relevant treatment and distribution points, together with demand, contact, water quality and consumer protection. The inspected editions do not establish the latest complete Nepal legal position. Maintaining a number at the plant outlet alone cannot demonstrate adequate protection throughout a variable distribution system.</p>",
                    sources: [
                        { id: "WATE813-00250", set: 25, question: 96 },
                        { id: "WATE813-00253", set: 25, question: 99 },
                        { id: "WATE813-00256", set: 26, question: 92 }
                    ]
                },
                {
                    id: "treatment-uv-ozone-and-pathogen-targets",
                    title: "UV and oxidants must be evaluated for their actual mechanism and residual protection",
                    html: "<p>Ultraviolet disinfection principally damages microbial nucleic acids and prevents effective replication. The bank's broad metabolic-activity wording is less precise than this mechanism. UV does not primarily disinfect by filtering organisms out or by adding a chemical residual to the water.</p>" +
                        "<p>In a simple exposure model, UV fluence is irradiance multiplied by exposure time, commonly reported in mJ/cm<sup>2</sup>. A real reactor has nonuniform light and residence-time distributions. Water UV transmittance, particle shielding, lamp ageing, fouling and flow therefore matter; nominal lamp power divided by flow is not a validated delivered fluence.</p>" +
                        "<p>Suitable validated UV systems can address organisms resistant to chlorine, including Cryptosporidium. This does not mean every UV device achieves every required reduction. Treatment must match the organism targets and verified operating envelope, and downstream contamination remains possible because UV leaves no disinfecting residual.</p>" +
                        "<p>Ozone is a strong oxidant used for selected disinfection and chemical-treatment objectives, but it is not a lasting distribution residual either. Water chemistry can produce unwanted oxidation by-products, including bromate where bromide is present. Chlorine and chloramine have different persistence and reactivity. Comparing these options requires particle removal, target-organism performance, by-product control and distribution protection, not a single universally ideal disinfectant label.</p>",
                    sources: [
                        { id: "WATE813-00239", set: 24, question: 96 },
                        { id: "WATE813-00236", set: 24, question: 93 }
                    ]
                },
                {
                    id: "treatment-aeration-and-gas-transfer",
                    title: "Aeration transfers gases; it does not directly remove every dissolved contaminant",
                    html: "<p>Aeration increases contact between air and water. It can release excess dissolved carbon dioxide, hydrogen sulfide and suitable volatile compounds, while transferring oxygen into oxygen-deficient water. Transfer direction follows the difference from equilibrium, not a rule that aeration always removes every gas.</p>" +
                        "<p>For a well-mixed liquid with constant gas-side conditions, a simplified model is <strong>dC/dt = K<sub>L</sub>a(C* − C)</strong>. With constant volumetric mass-transfer coefficient K<sub>L</sub>a, the solution is <strong>C(t) = C* + (C<sub>0</sub> − C*)e<sup>−K<sub>L</sub>at</sup></strong>. C and C* share concentration units; K<sub>L</sub>a has reciprocal-time units matching t.</p>" +
                        "<p><strong>Hypothetical gas-stripping example:</strong> C<sub>0</sub> = 10 mg/L, C* = 2 mg/L, K<sub>L</sub>a = 0.10 min<sup>−1</sup> and t = 10 min give C = 2 + 8e<sup>−1</sup> = <strong>4.943 mg/L</strong>. These assumed values do not represent measured aerator performance or a universal removal percentage.</p>" +
                        "<p>Cascades, sprays and packed contactors create contact differently; ventilation, equilibrium, energy and fouling affect performance. Aeration may help oxidise dissolved iron, but the resulting precipitate still needs separation. It is not primary removal of sand, silt, floc or all colour, nor a substitute for disinfection. Nonvolatile odour compounds need a different treatment mechanism.</p>",
                    sources: [
                        { id: "WATE813-00235", set: 24, question: 92 },
                        { id: "WATE813-00241", set: 24, question: 98 }
                    ]
                },
                {
                    id: "treatment-iron-manganese-and-sequestration",
                    title: "Oxidation changes metal form; filtration completes removal",
                    html: "<p>Iron and manganese treatment depends on their dissolved, particulate or organically complexed forms. Oxidation can convert dissolved reduced species into less-soluble solids, followed by filtration or other separation. A simplified iron reaction is <strong>4Fe<sup>2+</sup> + O<sub>2</sub> + 10H<sub>2</sub>O → 4Fe(OH)<sub>3</sub> + 8H<sup>+</sup></strong>; it shows why alkalinity and pH can matter.</p>" +
                        "<p>Manganese oxidation can be much slower under conditions adequate for iron. Aeration alone is therefore not a guaranteed manganese-removal method. Depending on the water, treatment may use a suitable oxidant, catalytic media, adsorption/oxidation or biological filtration. Oxidant dose and contact need treatability evidence; precipitate capture and filter washing remain essential.</p>" +
                        "<p>Chloramine is comparatively weak for rapid iron and manganese oxidation. Its persistence can be useful for distribution disinfection, but that does not make it interchangeable with ozone, chlorine dioxide or permanganate for metal treatment. Each stronger oxidant also brings operating and by-product constraints.</p>" +
                        "<p><strong>Sequestration</strong> keeps metals dispersed or complexed to reduce visible deposition; it does not physically remove their mass. Verify total and relevant dissolved concentrations rather than judging success only by absence of staining. Manganese greensand or other catalytic media require their specified operating conditions, and ordinary activated carbon cannot be credited with guaranteed manganese removal simply because it adsorbs organic compounds.</p>",
                    sources: [
                        { id: "WATE813-00244", set: 25, question: 90 },
                        { id: "WATE813-00252", set: 25, question: 98 },
                        { id: "WATE813-00230", set: 23, question: 97 }
                    ]
                },
                {
                    id: "treatment-carbon-adsorption-and-ebct",
                    title: "Activated carbon has finite, contaminant-specific adsorption capacity",
                    html: "<p>Activated carbon provides internal surface area for adsorption of many organic compounds associated with taste, odour, colour and other quality concerns. Performance depends on molecular properties, carbon characteristics, competing natural organic matter and contact. It does not mean removal of all organics, hardness or every inorganic contaminant.</p>" +
                        "<p>Powdered activated carbon is contacted with water and subsequently separated; granular activated carbon forms a contact bed that eventually reaches breakthrough. <strong>Empty-bed contact time, EBCT = V<sub>bed</sub>/Q</strong>, uses total bulk bed volume, not pore-water volume. WHO 2022 Annex A5.1.7 describes <strong>5–30 minutes as typical GAC EBCT</strong>, not a universal design or guarantee.</p>" +
                        "<p><strong>Hypothetical example:</strong> a 12 m<sup>3</sup> bed at 60 m<sup>3</sup>/h has EBCT = 0.2 h = <strong>12 minutes</strong>. At an assumed incoming target concentration of 0.5 mg/L, the incoming target load is <strong>30 g/h</strong>. Neither number gives bed life without usable adsorption capacity, competing loads and a permitted breakthrough concentration.</p>" +
                        "<p>Monitor target contaminants and manage carbon replacement or regeneration. WHO's treatment table does not establish reliable manganese removal by ordinary activated carbon; specialised modified or biologically active media require their own evidence. Carbon is not automatically a disinfectant, and biological growth or particle release from a bed may require downstream controls.</p>",
                    sources: [
                        { id: "WATE813-00230", set: 23, question: 97 },
                        { id: "WATE813-00240", set: 24, question: 97 },
                        { id: "WATE813-00251", set: 25, question: 97 }
                    ]
                },
                {
                    id: "treatment-colour-odour-and-algae",
                    title: "Trace colour, taste and odour to their source before selecting treatment",
                    html: "<p>Apparent colour includes suspended material; true colour is assessed after an appropriate particle-removal preparation. Settling and filtration may improve apparent colour while leaving dissolved organic colour. Coagulation can remove suitable organic fractions, carbon can adsorb selected dissolved compounds, and oxidation can transform particular colour or odour producers.</p>" +
                        "<p>Volatile hydrogen sulfide may respond to aeration; nonvolatile compounds do not follow the same gas-transfer mechanism. Oxidation is not universally the best odour treatment: effectiveness and by-products depend on the compound, oxidant, dose and contact conditions. Oxidising a compound does not automatically mineralise it or improve every sensory characteristic.</p>" +
                        "<p>Algal and cyanobacterial problems also require source investigation. Nutrient control, intake management and removal of intact cells can be relevant. Killing or lysing cells may release intracellular taste-and-odour compounds or toxins, so disappearance of a visible bloom does not establish safer water.</p>" +
                        "<p>Copper sulfate is a historically used algicide, explaining the bank's identification question, but this is not a dosing recommendation or a universal preferred solution. Aquatic toxicity, residual copper, source ecology and toxin-release risk must be assessed by qualified operators under the applicable permissions. Treatment choices should be verified against actual target compounds and final water quality, with source prevention considered alongside plant-based removal.</p>",
                    sources: [
                        { id: "WATE813-00237", set: 24, question: 94 },
                        { id: "WATE813-00242", set: 24, question: 99 },
                        { id: "WATE813-00270", set: 27, question: 94 }
                    ]
                }
            ],
            gaps: [
                "All 70 assigned root-question sources are cited in substantively related study blocks. The original model objects, options, keys and explanations remain unchanged; repeated records nested inside model chapters are not additional assignments.",
                "The bank lacks a complete source-water analysis, seasonal treatability series and finished-water objectives. Conventional treatment order is taught, but no single train is claimed appropriate for every surface-water or groundwater source.",
                "Settling calculations use an explicitly ideal discrete-particle model. Full-scale inlet hydraulics, flocculent settling-column results, sludge loading and actual residence-time distributions are not supplied. The 0.3 m/s and 24-hour generalisations lack a verified applicable design edition.",
                "Jar-test conditions, product purity, temperature and full-scale mixing data are incomplete. The keyed 100–200 s−1 cannot be justified by a nearest-option argument, and 30 minutes is not a universal floc-breakup threshold.",
                "treatment-filter-runs-and-backwash is a source-free Syllabus extension. No assigned source supplies a complete clean-bed resistance, expansion, wash sequence, run length or residuals-recycle dataset; actual equipment and water-quality evidence are still required.",
                "treatment-lime-soda-softening is a source-free Syllabus extension. Complete calcium, magnesium, alkalinity, carbon-dioxide, reagent-purity and residual-hardness data are absent. The reaction balances are explanatory, not a completed chemical-dosing design.",
                "treatment-ct-and-effective-contact is a source-free Syllabus extension. The bank lacks pathogen targets, temperature-dependent CT tables, tracer t10, free-chlorine profiles and a validated reactor operating envelope. Hypothetical contact arithmetic does not establish disinfection adequacy.",
                "WHO 2022 treatment ranges, read with the 24 May 2023 corrigenda, are identified as typical guidance rather than Nepal design requirements. The inspected NDWQS 2079 notice and its qualifications are not a certification of every subsequent amendment or current plant compliance.",
                "Ordinary activated-carbon manganese removal is not guaranteed. Actual Fe/Mn form, pH, reaction kinetics, catalytic-media performance, adsorption capacity and breakthrough data are missing. Sequestration is distinguished from removal.",
                "All added numerical datasets are explicitly hypothetical. Actual chemical handling, regeneration, backwashing and algicide application require qualified plant-specific systems; these notes provide no field chemical-mixing recipe or disposal permission. No purported ISO 12957 flocculation standard is used."
            ],
            cautions: [
                {
                    html: "<p><strong>The decreasing-area key is false under the ideal settling model.</strong> At fixed discharge, v<sub>o</sub> = Q/A increases when plan area decreases, reducing capture of slower discrete particles. Increasing depth alone does not improve ideal capture. This source has only three stored options, none expressing the appropriate increased-area conclusion; no missing option or replacement key has been invented.</p>",
                    sources: [{ id: "WATE813-00035", set: 5, question: 95 }]
                },
                {
                    html: "<p><strong>Gravity separation does not imply coagulant addition.</strong> Plain sedimentation uses gravity without deliberate coagulation; clarification is compatible with the generic wording. The keyed sedimentation-with-coagulant answer in the second source is not established by its stem. Plain settling can also include natural flocculation, so discrete and plain are not exact synonyms.</p>",
                    sources: [
                        { id: "WATE813-00033", set: 5, question: 93 },
                        { id: "WATE813-00086", set: 10, question: 95 },
                        { id: "WATE813-00264", set: 26, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>Stokes gives 0.03597 cm/s, not 0.36 cm/s.</strong> With g = 981 cm/s<sup>2</sup>, s = 2.65, d = 0.002 cm and ν = 0.01 cm<sup>2</sup>/s, particle Reynolds number is 0.007194. The small-Re assumption is consistent. No listed option equals the result, and a tenfold error is not a legitimate rounding or nearest-option adjustment.</p>",
                    sources: [{ id: "WATE813-00266", set: 27, question: 91 }]
                },
                {
                    html: "<p><strong>0.3 m/s is not a universal particle-settling or basin-scour threshold.</strong> The first stem supplies no particle or hydraulic data. Horizontal through-flow, vertical terminal settling speed and local resuspension conditions differ. No applicable primary design clause establishing the second stem's universal permissible velocity was verified.</p>",
                    sources: [
                        { id: "WATE813-00046", set: 6, question: 96 },
                        { id: "WATE813-00249", set: 25, question: 95 }
                    ]
                },
                {
                    html: "<p><strong>A batch settling time is not the whole fill-and-draw cycle.</strong> The keyed 24 hours is not a universal requirement. Account separately for filling, settling, decanting and residuals management; water properties and the required output determine a suitable operating cycle.</p>",
                    sources: [{ id: "WATE813-00248", set: 25, question: 94 }]
                },
                {
                    html: "<p><strong>The 100–200 s<sup>−1</sup> slow-mixing key lacks a demonstrated design basis.</strong> An explanation that cites a different G interval and then selects the nearest offered interval does not validate the choice. G = √[P/(μV)] describes mean energy dissipation; appropriate intensity requires water, floc and equipment evidence.</p>",
                    sources: [{ id: "WATE813-00231", set: 23, question: 98 }]
                },
                {
                    html: "<p><strong>Flocs do not inevitably break when contact exceeds 30 minutes.</strong> Breakup depends on shear and floc strength and competes with aggregation. The 10–40-minute interval is also a teaching range, not a universal optimum. Longer appropriately gentle treatment can behave differently from prolonged high shear.</p>",
                    sources: [
                        { id: "WATE813-00233", set: 23, question: 100 },
                        { id: "WATE813-00259", set: 26, question: 95 }
                    ]
                },
                {
                    html: "<p><strong>The conventional sequence is not mandatory for every water.</strong> Coagulation, flocculation and sedimentation have distinct functions and do not guarantee complete suspended-solids removal. Direct filtration and other validated trains exist. The process-order answers apply to their conventional treatment context.</p>",
                    sources: [
                        { id: "WATE813-00228", set: 23, question: 95 },
                        { id: "WATE813-00238", set: 24, question: 95 },
                        { id: "WATE813-00337", set: 33, question: 95 },
                        { id: "WATE813-00342", set: 33, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>Aluminium sulfate identity does not establish hydration or commercial purity.</strong> Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·18H<sub>2</sub>O is the source's particular representation. Reagent mass, mg/L as Al and alkalinity as CaCO<sub>3</sub> require different conversions. WHO's metal-basis typical doses must not be treated as product doses.</p>",
                    sources: [
                        { id: "WATE813-00038", set: 5, question: 98 },
                        { id: "WATE813-00269", set: 27, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>Coagulant benefits depend on the water.</strong> Alum does not invariably remove all taste and odour or produce readily dewatered sludge. Iron-floc density, quantity and settling speed are distinct properties; heavier floc alone does not prove a universal dose, sludge volume or shorter detention.</p>",
                    sources: [
                        { id: "WATE813-00270", set: 27, question: 94 },
                        { id: "WATE813-00271", set: 27, question: 95 }
                    ]
                },
                {
                    html: "<p><strong>Surfactants can interfere with flocculation, but greasy scum is not a unique diagnostic.</strong> Oil, emulsions, source contaminants and operating conditions need investigation. The source's identification answer does not establish that every flocculation problem has that cause.</p>",
                    sources: [{ id: "WATE813-00060", set: 7, question: 100 }]
                },
                {
                    html: "<p><strong>50 mm is a teaching opening, not a universal coarse-screen specification.</strong> Select openings, projected net area, blockage allowance and cleaning provisions for the actual debris and protected equipment. Clear bar spacing is not the same as centre-to-centre pitch.</p>",
                    sources: [{ id: "WATE813-00043", set: 6, question: 93 }]
                },
                {
                    html: "<p><strong>The filter-sand combination is defective.</strong> Clean sand free of clay or silt is required; unwanted organic matter is not desirable, and controlled relatively uniform grading is not an unqualified requirement for nonuniformity. Under the stated propositions only i is appropriate, but the bank offers no i-only choice. The stored i, iii key is not repaired by redefining nonuniform.</p>",
                    sources: [{ id: "WATE813-00276", set: 27, question: 100 }]
                },
                {
                    html: "<p><strong>Plastic media are not impossible filter materials.</strong> Sand, anthracite and garnet are conventional granular media; plastic or floating media occur in specialised systems. The source's conventional-media comparison must not become a statement about every water or wastewater filter.</p>",
                    sources: [{ id: "WATE813-00275", set: 27, question: 99 }]
                },
                {
                    html: "<p><strong>NTU is not mg/L or ppm.</strong> Turbidity is an optical measurement; suspended-solids concentration is a mass measurement. The 60 mg/L turbidity statement supplies no universal conversion, raw-water limit or guaranteed slow-filter run length.</p>",
                    sources: [{ id: "WATE813-00063", set: 8, question: 93 }]
                },
                {
                    html: "<p><strong>Filter ranges require an identified context.</strong> The bank's rapid 3000–6000 L/(m<sup>2</sup>·h) is exactly 3–6 m/h or 50–100 mm/min. WHO 2022 separately describes typical rapid 4–20 m/h and slow 0.1–0.3 m/h, with their own media ranges. Neither WHO's typical values nor the source's sand-depth and size intervals are universal Nepal design requirements.</p>",
                    sources: [
                        { id: "WATE813-00042", set: 6, question: 92 },
                        { id: "WATE813-00044", set: 6, question: 94 },
                        { id: "WATE813-00263", set: 26, question: 99 },
                        { id: "WATE813-00328", set: 32, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>D<sub>10</sub> describes effective size; D<sub>60</sub>/D<sub>10</sub> describes uniformity.</strong> Both are useful specifications but have different meanings. A low uniformity coefficient does not alone establish acceptable sand, and a grain-size interval is not automatically an effective-size interval.</p>",
                    sources: [{ id: "WATE813-00277", set: 28, question: 91 }]
                },
                {
                    html: "<p><strong>A 1 μm diameter does not prove filtration is impossible.</strong> Coagulation often improves removal of fine particles, but granular attachment mechanisms and suitable membranes can capture particles below visible pore dimensions. Size alone does not prescribe the entire treatment train.</p>",
                    sources: [{ id: "WATE813-00261", set: 26, question: 97 }]
                },
                {
                    html: "<p><strong>Boiling calcium bicarbonate produces both CaCO<sub>3</sub> and CO<sub>2</sub>.</strong> Both appear among the second question's options, so its wording does not support a unique product answer. The chemistry of magnesium bicarbonate is not fully represented by saying that every bicarbonate merely becomes a carbonate. Boiling is not general sulfate/chloride-hardness removal.</p>",
                    sources: [
                        { id: "WATE813-00040", set: 5, question: 100 },
                        { id: "WATE813-00274", set: 27, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>NaCl identifies the sodium-cycle regenerant, not an executable universal recipe.</strong> A 10% statement requires a concentration basis and product/equipment context. Regeneration produces a concentrated waste stream; it does not destroy hardness or make salt disposal automatically acceptable.</p>",
                    sources: [
                        { id: "WATE813-00032", set: 5, question: 92 },
                        { id: "WATE813-00045", set: 6, question: 95 },
                        { id: "WATE813-00332", set: 33, question: 90 }
                    ]
                },
                {
                    html: "<p><strong>Ordinary activated carbon does not guarantee manganese removal.</strong> WHO 2022 Table A5.1 does not establish an effective general activated-carbon manganese process. Specialised products or biological/catalytic mechanisms need separate evidence. Organic adsorption performance cannot justify the source's unqualified all-of-the-above claim.</p>",
                    sources: [{ id: "WATE813-00230", set: 23, question: 97 }]
                },
                {
                    html: "<p><strong>Oxidation and sequestration have different outcomes.</strong> Oxidised Fe/Mn generally require filtration; aeration alone may not provide adequate manganese oxidation. Chloramine is comparatively weak for this purpose. Sequestration can reduce staining while leaving metal mass in the water, so it is not removal or proof of meeting a total-metal limit.</p>",
                    sources: [
                        { id: "WATE813-00244", set: 25, question: 90 },
                        { id: "WATE813-00252", set: 25, question: 98 }
                    ]
                },
                {
                    html: "<p><strong>pH affects chlorine speciation, but product name does not fix the final pH.</strong> Hypochlorites tend to add alkalinity; starting chemistry, buffering and dose control the response. Disinfection is not universally maximal at pH 7, and pH 9.5 is not an instantaneous E. coli kill rule. Arbitrary acidification can create corrosion and quality problems.</p>",
                    sources: [
                        { id: "WATE813-00036", set: 5, question: 96 },
                        { id: "WATE813-00037", set: 5, question: 97 }
                    ]
                },
                {
                    html: "<p><strong>Chlorination does not remove all inorganic or organic material.</strong> It reacts with selected reduced substances; many dissolved salts remain. Dissolved oxygen is not normally stripped by chlorination, but the explanations' suggested automatic aeration or oxygen increase is also unwarranted. The broad inorganic-material option makes the second stem overinclusive.</p>",
                    sources: [
                        { id: "WATE813-00041", set: 6, question: 91 },
                        { id: "WATE813-00255", set: 26, question: 91 }
                    ]
                },
                {
                    html: "<p><strong>Pure calcium hypochlorite and commercial bleaching powder must be distinguished.</strong> Ca(OCl)<sub>2</sub> identifies the pure compound, not 100% purity or 100% available chlorine in a product. Practical accounting uses verified available chlorine. The current NCERT passage cited in the verified research itself prints Ca(ClO)<sub>2</sub> while noting complex composition; it must not be falsely cited as authority for a different printed formula.</p>",
                    sources: [
                        { id: "WATE813-00254", set: 25, question: 100 },
                        { id: "WATE813-00256", set: 26, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Breakpoint is not complete oxidation of all organic matter.</strong> Its characteristic behaviour involves chlorine demand, ammonia/chloramine reactions and the emergence of free residual. Ordinary operation beyond breakpoint is not automatically superchlorination; a deliberately high-dose strategy is a different description.</p>",
                    sources: [
                        { id: "WATE813-00234", set: 24, question: 91 },
                        { id: "WATE813-00253", set: 25, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Clear water or an emergency does not prove plain chlorination is sufficient.</strong> Assess chemical contamination, turbidity and resistant pathogens. Chlorine's cost and residual advantages do not make it universally ideal; Cryptosporidium requires other validated barriers.</p>",
                    sources: [
                        { id: "WATE813-00250", set: 25, question: 96 },
                        { id: "WATE813-00236", set: 24, question: 93 }
                    ]
                },
                {
                    html: "<p><strong>Disinfection is not complete sterilisation.</strong> It targets harmful microorganisms to a specified performance level and does not necessarily eliminate every microbial form. Bacterial inactivation alone does not demonstrate equivalent virus or protozoan performance.</p>",
                    sources: [
                        { id: "WATE813-00257", set: 26, question: 93 },
                        { id: "WATE813-00258", set: 26, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>UV principally damages DNA/RNA and prevents replication.</strong> The metabolic-activities option is an imprecise description, not evidence for cell-wall destruction or chemical oxidation. UV performance requires validated exposure and water transmittance, and UV leaves no lasting distribution residual.</p>",
                    sources: [{ id: "WATE813-00239", set: 24, question: 96 }]
                },
                {
                    html: "<p><strong>No single method removes every colour, taste or odour.</strong> Aeration concerns suitable volatile compounds; carbon adsorption and oxidation depend on the target substance. Copper sulfate's historical algicide use is not a universal recommendation: ecological toxicity, residuals and release of intracellular compounds require qualified assessment.</p>",
                    sources: [
                        { id: "WATE813-00235", set: 24, question: 92 },
                        { id: "WATE813-00237", set: 24, question: 94 },
                        { id: "WATE813-00240", set: 24, question: 97 },
                        { id: "WATE813-00242", set: 24, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Guidance and national requirements use different contexts.</strong> WHO's conditional residual/contact guidance is not a universal CT guarantee, and its 5 mg/L chlorine health-based value is not an operating target. NDWQS 2079's chlorinated-system residual range and qualified epidemic/pollution exception must be read together. These inspected documents do not certify current legal compliance or subsequent amendment status.</p>",
                    sources: []
                }
            ],
            references: [
                { title: "WHO, Guidelines for drinking-water quality, fourth edition incorporating the first and second addenda, 2022: Chapters 7, 8 and 12; Annex 5 treatment guidance", url: "https://www.who.int/publications/i/item/9789240045064" },
                { title: "WHO, corrigenda to the 2022 drinking-water guidelines, 24 May 2023", url: "https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/dwq-guidelines-4/9789240045064_corrigenda_rev-gdwq-2-addenda.pdf?sfvrsn=c95453c4_3" },
                { title: "Nepal Ministry of Water Supply, National Drinking Water Quality Standards 2079 and implementation/monitoring directive 2079; reproduced Gazette 2079/03/02, volume 72, number 16, part 5", url: "https://giwmscdnone.gov.np/media/pdf_upload/khanepani-mapdanda-kitab-final2_saxxma4.pdf" },
                { title: "ILO/WHO, International Chemical Safety Card 0638: Calcium hypochlorite, physical and chemical identity; online card inspected in the verified research", url: "https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_card_id=0638&p_lang=en" },
                { title: "NCERT Science, Chapter 2, Acids, Bases and Salts, reprint 2026–27, printed page 30: bleaching-powder composition qualification", url: "https://ncert.nic.in/textbook/pdf/jesc102.pdf" }
            ]
        }
    });
})();