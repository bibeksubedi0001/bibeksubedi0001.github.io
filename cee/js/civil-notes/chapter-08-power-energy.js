(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0802: {
            code: "ACiE0802",
            questionCount: 74,
            blocks: [
                {
                    id: "power-study-and-conversion",
                    title: "A potential study follows water, power and deliverable energy",
                    html: "<p><strong>A power and energy potential study estimates how much electricity a water resource can support, at what times and with what reliability.</strong> Start with usable flow and hydraulic head; apply the waterway and machine constraints; calculate output through time; then compare alternative plant capacities and operating policies. These results inform feasibility, but estimating energy alone is not a complete environmental, financial or engineering appraisal.</p>" +
                        "<p>The conversion chain is <strong>hydraulic energy of water → mechanical shaft work in the turbine → electrical energy in the generator</strong>. Elevated water can supply gravitational potential energy, while pressure and velocity describe how that energy is carried through the installation. A generator does not create the water's energy, and a dam is not itself the device that converts shaft work into electricity.</p>" +
                        "<ul><li><strong>Power potential:</strong> a possible rate of conversion under specified flow, head and efficiency conditions, expressed in kW, MW or GW.</li><li><strong>Energy potential:</strong> the accumulated production over a defined period, expressed in kWh, MWh, GWh or TWh.</li><li><strong>Deliverable production:</strong> the portion remaining after relevant losses, outages, water commitments and grid restrictions, at an explicitly named measurement point.</li></ul>" +
                        "<p>Natural-flow hydropower is <strong>renewable</strong> because the hydrologic cycle replenishes its resource. The bank also calls it <strong>conventional</strong>, a traditional classification based on established commercial use. These are different classification axes, not competing physical explanations. Water is the conventional source among the listed solar/water/wind choices; that does not establish water as the world's largest electricity source or make supply inherently continuous.</p>" +
                        "<p><small>These notes address official Chapter 8.2: potential, installed-capacity methods, plant types and components, and reservoir regulation. Source links identify the existing questions, not approval of every stored key or explanation. Added examples and source-free syllabus extensions are labelled. The original bank is unchanged; these notes are not a code-compliance statement or project design approval.</small></p>",
                    sources: [
                        { id: "HYDR626-00001", set: 2, question: 60 },
                        { id: "HYDR626-00227", set: 25, question: 63 },
                        { id: "HYDR626-00303", set: 33, question: 59 },
                        { id: "HYDR626-00100", set: 12, question: 64 },
                        { id: "HYDR626-00282", set: 31, question: 59 },
                        { id: "HYDR626-00291", set: 32, question: 61 },
                        { id: "HYDR626-00115", set: 14, question: 61 }
                    ]
                },
                {
                    id: "power-head-reference-levels",
                    title: "Gross and net head need the correct reference levels",
                    html: "<p><strong>Head is energy per unit weight, expressed in metres of water.</strong> At a flow section, total head contains elevation, pressure and velocity terms: <strong>z + p/(ρg) + αv<sup>2</sup>/(2g)</strong>. Here z is elevation above a common datum, p is pressure on a consistent reference, v is mean velocity and α is the kinetic-energy correction factor. A height along the sloping penstock is not the vertical head.</p>" +
                        "<p>For a conventional <strong>reaction-turbine installation</strong> between large upstream and downstream free surfaces at atmospheric pressure, gross head is approximately <strong>H<sub>g</sub> = z<sub>headwater</sub> − z<sub>tailwater</sub></strong>. The runner elevation alone is not the downstream reference: the draft-tube arrangement allows the installation to use head down to tailwater. If pressure or velocity differences at the chosen boundaries are appreciable, include their energy terms.</p>" +
                        "<p>For an <strong>impulse installation such as a Pelton scheme</strong>, identify the nozzle/jet reference. The free jet operates at atmospheric pressure; the fall from the jet or runner to the tailwater is generally not recovered as useful turbine head. Do not apply a reaction-turbine headwater-to-tailwater shortcut without checking this layout.</p>" +
                        "<p><strong>Net or effective head H<sub>n</sub> = H<sub>g</sub> − h<sub>L</sub></strong> when both terms use compatible boundaries. Relevant conveyance losses include trash-rack, entrance, friction, bend and valve losses. Penstock length, diameter and roughness therefore affect net head even though they do not define the gross elevation difference. Deduct a loss once: a loss already removed in H<sub>n</sub> must not also be included in an efficiency allowance for the same boundary.</p>" +
                        "<p>The bank's effective-head answer is appropriate, but <em>available head</em> is also used as a synonym, so it is not a clean distractor. Net head describes the useful energy difference across the defined turbine installation, not merely the pressure head at one inlet point.</p>",
                    sources: [
                        { id: "HYDR626-00114", set: 14, question: 60 },
                        { id: "HYDR626-00207", set: 23, question: 63 },
                        { id: "HYDR626-00240", set: 26, question: 68 }
                    ]
                },
                {
                    id: "power-rated-design-and-operating-head",
                    title: "Rated duty is a point within an operating range",
                    html: "<p><strong>Operating head</strong> is the head actually experienced under a particular combination of reservoir level, tailwater level and discharge. It varies through time. <strong>Rated head</strong> is the specified head associated with a machine's rated duty or output. <strong>Design head</strong> identifies the head adopted for a design or performance objective. A specification must explain how those terms relate to the best-efficiency point.</p>" +
                        "<p>The bank intends rated head to match design head for efficient operation. That is a useful classroom convention, but matching two labels cannot by itself maximize <strong>annual plant efficiency or annual energy</strong>. Turbine efficiency also changes with flow, speed and control settings; generator efficiency changes with loading. The head and discharge combinations that occur most often may differ from the rated point.</p>" +
                        "<ol><li>Establish minimum, normal and maximum operating water levels and the tailwater relation.</li><li>Calculate conveyance losses at the relevant discharges to obtain the net-head range.</li><li>Compare machine performance over that range, including minimum stable load, inefficient or restricted operating zones and cavitation limits.</li><li>Integrate actual operating-point output over the hydrological and dispatch record instead of assigning peak efficiency to every hour.</li></ol>" +
                        "<p>At unchanged discharge and efficiency, output is proportional to net head. In an actual scheme, increasing discharge can increase friction loss and tailwater level, reducing the net head available. Selecting a larger rated output therefore requires a consistent hydraulic operating point; a higher nameplate figure does not manufacture additional head.</p>",
                    sources: [{ id: "HYDR626-00219", set: 24, question: 67 }]
                },
                {
                    id: "power-equation-units-and-bank-calculations",
                    title: "Derive hydraulic power before applying efficiency",
                    html: "<p>For a steady discharge Q, mass passes at rate <strong>ρQ</strong>. Each kilogram can release gH<sub>n</sub> joules across the defined head, so <strong>P<sub>h</sub> = ρgQH<sub>n</sub></strong>. Electrical output is <strong>P<sub>e</sub> = ρgQH<sub>n</sub>η</strong>, where η is the efficiency from that hydraulic boundary to the stated electrical boundary. With ρ = 1000 kg/m<sup>3</sup>, g = 9.81 m/s<sup>2</sup>, Q in m<sup>3</sup>/s and head in m:</p>" +
                        "<p><strong>P<sub>e,kW</sub> = 9.81QH<sub>n</sub>η</strong>, or <strong>P<sub>e,MW</sub> = 0.00981QH<sub>n</sub>η</strong>. One cumec is one m<sup>3</sup>/s; 1 MW = 1000 kW. Efficiencies are fractions, so 85% becomes 0.85. Multiply efficiencies for successive non-overlapping conversion stages, not several alternative estimates of the same loss.</p>" +
                        "<p><strong>Bank net-head calculation:</strong> H<sub>n</sub> = 423.5 − 2.5 = <strong>421 m</strong>. Therefore <strong>9.81 × 0.9 × 421 × 0.85 = 3159.45765 kW = 3.15945765 MW</strong>. The stored 3159.45 kW is a close approximation; the same numerical magnitude labelled W or MW is not equivalent.</p>" +
                        "<table><thead><tr><th scope='col'>Bank data</th><th scope='col'>Result using g = 9.81</th><th scope='col'>Convention behind the offered value</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>400 cumecs, effective head 50 m, η = 0.8</th><td>Hydraulic input 196.2 MW; electrical output <strong>156.96 MW</strong>.</td><td><strong>156.8 MW</strong> uses g = 9.8, not the explanation's displayed 9.81.</td></tr>" +
                        "<tr><th scope='row'>100 m<sup>3</sup>/s, head 75 m, theoretical power</th><td><strong>73.575 MW</strong>, before conversion losses.</td><td><strong>73.5 MW</strong> follows from g = 9.8. It is not the ordinary one-decimal rounding of 73.575.</td></tr></tbody></table>" +
                        "<p>The three direct controls are <strong>usable discharge, net head and efficiency</strong>. Catchment, dam and turbine choices influence these controls but do not replace them in the equation. The extra displayed decimals show the arithmetic basis; they do not imply that field measurements have that precision.</p>",
                    sources: [
                        { id: "HYDR626-00063", set: 8, question: 66 },
                        { id: "HYDR626-00015", set: 3, question: 65 },
                        { id: "HYDR626-00017", set: 3, question: 67 },
                        { id: "HYDR626-00302", set: 33, question: 58 }
                    ]
                },
                {
                    id: "power-incomplete-data-and-energy-bounds",
                    title: "Missing inputs and impossible efficiencies cannot be repaired by a key",
                    html: "<p><strong>Check dimensions and physical bounds before selecting an option.</strong> An amount of water needs a release duration to define a discharge. A head and discharge define hydraulic input, not a unique shaft or electrical output without the relevant efficiency. For a generating plant with no additional energy source and consistent boundaries, <strong>0 ≤ P<sub>e</sub> ≤ P<sub>h</sub></strong> and <strong>0 ≤ η ≤ 1</strong>.</p>" +
                        "<p><strong>The 400-ounce question actually says ounces, not cumecs.</strong> Ounces may describe mass or, with a specified convention, fluid volume; neither is a rate. Even after identifying the ounce convention, a release time is missing. Thus its 50 m head and 0.8 efficiency do not determine electrical power. Substituting Q = 400 m<sup>3</sup>/s would import the data of a different bank question, not solve this one.</p>" +
                        "<p><strong>Bank net head 90 m and discharge 10 m<sup>3</sup>/s:</strong> P<sub>h</sub> = 0.00981 × 10 × 90 = <strong>8.829 MW</strong>. No efficiency is supplied. An output of 8 MW would imply η = 8/8.829, approximately <strong>90.61%</strong>; that is a conditional reverse calculation, not a given. Calling 8 MW the nearest option does not establish the missing losses.</p>" +
                        "<p><strong>Bank Upper Tamakoshi exercise:</strong> use its printed <strong>456 MW, 822 m and 56 m<sup>3</sup>/s</strong>. Hydraulic input is <strong>0.00981 × 56 × 822 = 451.57392 MW</strong>, giving <strong>η = 456/451.57392 = 1.00980145, or 100.9801%</strong>. The data are inconsistent. Neither the keyed 87.5% nor the explanation's later 98.7% follows. If 822 m is gross head, deducting conveyance losses makes the discrepancy larger.</p>" +
                        "<p><em>Separate reference fact, not a replacement input:</em> NEA's Annual Report 2025/2026 describes the actual project with 66 m<sup>3</sup>/s and 822 m gross head. That different discharge cannot be silently substituted for the bank's 56, nor can a gross-head ratio automatically be called a net-head turbine efficiency. The exercise needs corrected, mutually compatible source data before any offered efficiency can be justified.</p>",
                    sources: [
                        { id: "HYDR626-00071", set: 9, question: 64 },
                        { id: "HYDR626-00299", set: 32, question: 68 },
                        { id: "HYDR626-00300", set: 32, question: 69 }
                    ]
                },
                {
                    id: "power-energy-per-water-volume",
                    title: "One cubic metre is not one cubic metre per second",
                    html: "<p>For a volume V passing through a constant net head with constant efficiency, <strong>E<sub>J</sub> = ρgH<sub>n</sub>ηV</strong>. Since <strong>1 kWh = 3.6 × 10<sup>6</sup> J</strong>, divide by that factor to express energy in kWh. Volume determines energy under these assumptions; the time over which the volume passes determines average power.</p>" +
                        "<p><strong>Bank 150 m case:</strong> taking the quoted head as available for the two stated conversion stages, η = 0.85 × 0.92 = <strong>0.782</strong>. For <strong>V = 1 m<sup>3</sup></strong>, energy is <strong>1000 × 9.81 × 150 × 0.782 = 1150713 J</strong>, or <strong>0.3196425 kWh/m<sup>3</sup></strong>. The explanation's first joule value, 1150701.3, contains an arithmetic slip.</p>" +
                        "<table><thead><tr><th scope='col'>Explicit interpretation</th><th scope='col'>Power and energy consequence</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>One cubic metre in total</th><td><strong>0.3196425 kWh</strong>; power remains unspecified until a duration is supplied.</td></tr>" +
                        "<tr><th scope='row'>One cubic metre released over one hour</th><td>Average power <strong>0.3196425 kW</strong>, with the same total energy.</td></tr>" +
                        "<tr><th scope='row'>Added assumption: Q = 1 m<sup>3</sup>/s for one hour</th><td>Power <strong>1150.713 kW</strong>; energy <strong>1150.713 kWh</strong>; water consumed by the calculation <strong>3600 m<sup>3</sup></strong>.</td></tr></tbody></table>" +
                        "<p>Only the last, explicitly added discharge interpretation recovers the scale of the keyed 1150.7 kWh. It is <strong>not energy per one cubic metre</strong>. The phrase electrical power per hour and options in kWh mix power and energy; do not conceal that ambiguity by treating the numeral one as both a volume and a discharge.</p>",
                    sources: [{ id: "HYDR626-00301", set: 33, question: 57 }]
                },
                {
                    id: "power-time-energy-and-average-demand",
                    title: "Energy and average demand require a stated period",
                    html: "<p><strong>Energy is accumulated power.</strong> For constant output, E = Pt; for interval data, <strong>E = ΣP<sub>i</sub>Δt<sub>i</sub></strong>. MW multiplied by hours gives MWh, while watts multiplied by seconds gives joules. Average power is <strong>P<sub>avg</sub> = E/T</strong>, with the same time boundary as the energy total. A high instantaneous power potential does not establish a large annual energy total without a duration or utilization assumption.</p>" +
                        "<p><strong>Bank 84 GW at 60% load factor:</strong> assume a <strong>365-day year, T = 8760 h</strong>, and that 84 GW denotes the relevant peak output or demand. Average power is 84 × 0.60 = <strong>50.4 GW</strong>. Annual energy is <strong>84 × 0.60 × 8760 = 441504 GWh = 441.504 TWh/year</strong>. The offered 441 TWh is a coarse approximation, not an exact equality.</p>" +
                        "<p>The stem supplies neither a period nor a precise definition of potential. If 84 GW means <strong>installed capacity</strong>, E = CT × 0.60 requires 0.60 to be the <strong>capacity factor</strong>, or an explicit equality between peak load and installed capacity. Load factor alone relates average output to peak output, not automatically to nameplate capacity. A leap-year calculation would also use a different T.</p>" +
                        "<p><strong>Bank 1000 MWh over two months:</strong> assuming two 30-day months gives T = 60 × 24 = <strong>1440 h</strong>, hence <strong>P<sub>avg</sub> = 1000/1440 = 0.694444 MW = 694.444 kW</strong>. For an actual calendar interval of D days the expression is 1000/(24D) MW; the dates, not the word months alone, determine D.</p>" +
                        "<p>If E is electricity supplied to consumers, the calculated average belongs at the consumer-supply boundary. Generator output before station and network losses is a different quantity. Likewise, when flow, head and efficiency all vary, the average of QH<sub>n</sub>η is needed; multiplying their separately calculated averages is not generally equivalent.</p>",
                    sources: [
                        { id: "HYDR626-00014", set: 3, question: 64 },
                        { id: "HYDR626-00016", set: 3, question: 66 }
                    ]
                },
                {
                    id: "power-duration-curves-and-usable-flow",
                    title: "Duration curves preserve totals but discard chronology",
                    html: "<p>A <strong>flow-duration curve, FDC,</strong> arranges discharge by the fraction or percentage of time it is equalled or exceeded. Construct it from representative observations with a consistent time step, or weight unequal intervals by their durations. It answers how often a flow occurred, not when it occurred. A chronological hydrograph retains the sequence of floods and dry spells that the sorted curve removes.</p>" +
                        "<p>For a simple unregulated ROR assessment, usable turbine flow is limited by available river flow after non-power commitments and by the installed waterway/machine capacity. A simplified expression is <strong>Q<sub>t</sub> = min[Q<sub>d</sub>, max(0, Q<sub>river</sub> − Q<sub>required bypass</sub> − Q<sub>other withdrawals</sub>)]</strong>, followed by checks on minimum operating flow, shutdowns and grid acceptance. The subtracted uses must be distinct; water already included in one commitment is not subtracted again.</p>" +
                        "<p>At a fixed compatible net head and efficiency, convert usable flow to <strong>P = ρgQ<sub>t</sub>H<sub>n</sub>η</strong> and obtain a power-duration curve. With p as percentage exceedance, P in MW and T in hours, <strong>E<sub>MWh</sub> = (T/100) ∫<sub>0</sub><sup>100</sup> P(p) dp</strong>. A fraction axis requires T instead of T/100; an hours axis already supplies the time dimension. The raw area under an FDC is not electrical energy.</p>" +
                        "<p><strong>Illustrative added duration bands:</strong> 10 MW for 40% of a 8760-hour year and 4 MW for the remaining 60% give <strong>E = 8760(0.40 × 10 + 0.60 × 4) = 56064 MWh</strong>. The corresponding average is 6.4 MW. An unscaled percentage-axis area would be 640 MW-percent, not 640 MWh.</p>" +
                        "<p>If head, efficiency or restrictions vary with season, preserve their association with each flow observation before calculating and sorting power. An FDC alone cannot reproduce reservoir drawdown, prove firm supply or determine customer diversity. Available hydraulic energy and delivered electrical energy must remain separate accounts.</p>",
                    sources: [
                        { id: "HYDR626-00008", set: 2, question: 67 },
                        { id: "HYDR626-00131", set: 15, question: 65 }
                    ]
                },
                {
                    id: "power-q40-and-full-output-hours",
                    title: "Q40 means equivalent exceedance time, not an annual guarantee",
                    html: "<p><strong>Q<sub>40</sub></strong> is the discharge associated with 40% exceedance on the specified flow-duration record. It is not 40% of the maximum flow, and it does not identify a continuous wet-season block. The record length, daily or other averaging interval, and whether the curve uses natural or already usable flow must be stated.</p>" +
                        "<p><strong>Bank 100 MW ROR calculation:</strong> converting the 40% fraction to a 365-day-year equivalent gives <strong>0.40 × 365 = 146 equivalent days</strong>, or <strong>0.40 × 8760 = 3504 h</strong>. This explains the numerical choice. For a multiyear FDC, however, it is an average duration statistic over the record, not a lower bound achieved in every individual year.</p>" +
                        "<ul><li>Full output requires adequate <strong>usable</strong> flow after environmental and other releases, not merely the unadjusted river-flow quantile.</li><li>Actual net head, efficiency and turbine discharge capacity must support the 100 MW rating at that operating point.</li><li>Outages, sediment shutdowns, maintenance, minimum-load restrictions and transmission curtailment can reduce generating hours.</li><li>Sorting removes sequence: the 146 equivalent days are not necessarily consecutive or even whole days of continuous full output.</li></ul>" +
                        "<p>Under the <strong>explicit idealization</strong> that all 3504 hours support and accept 100 MW, their energy contribution is <strong>350400 MWh = 350.4 GWh</strong>. Partial-load generation during the other hours must be calculated separately. The full-year rating ceiling is <strong>100 × 8760 = 876 GWh</strong> without overload. Neither ceiling establishes actual production, and Q<sub>40</sub> is not a universal prescribed design flow for all ROR projects.</p>",
                    sources: [{ id: "HYDR626-00309", set: 33, question: 65 }]
                },
                {
                    id: "power-load-capacity-and-utilization-factors",
                    title: "Load factor, capacity factor and utilization factor",
                    html: "<p>Use a <strong>fixed installed capacity C</strong>, a positive period T, energy E over that period, and peak demand or output P<sub>max</sub> from the <strong>same boundary and record</strong>. Then P<sub>avg</sub> = E/T. Do not combine consumer demand, generator gross energy and a net export rating without correcting their different measurement boundaries.</p>" +
                        "<table><thead><tr><th scope='col'>Factor</th><th scope='col'>Definition</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Load factor, LF</th><td><strong>E/(P<sub>max</sub>T) = P<sub>avg</sub>/P<sub>max</sub></strong></td><td>How steadily the observed peak is used.</td></tr>" +
                        "<tr><th scope='row'>Capacity factor, CF</th><td><strong>E/(CT) = P<sub>avg</sub>/C</strong></td><td>Actual energy relative to full-rating production throughout the whole period.</td></tr>" +
                        "<tr><th scope='row'>Utilization factor, UF</th><td><strong>P<sub>max</sub>/C</strong></td><td>How much installed capacity the observed peak reaches.</td></tr></tbody></table>" +
                        "<p>Multiplying the first and third ratios cancels P<sub>max</sub>: <strong>CF = LF × UF</strong>. Under nonnegative output, consistent ratings and no overload, these factors lie between zero and one where defined. <strong>LF can equal 1</strong> for constant positive output; it is not always strictly less than one. At zero peak, the LF ratio is undefined rather than an invitation to divide by zero.</p>" +
                        "<p><strong>Bank C = 200 MW, P<sub>max</sub> = 150 MW, P<sub>avg</sub> = 110 MW:</strong> LF = 110/150 = <strong>0.733333</strong>, CF = 110/200 = <strong>0.55</strong>, and UF = 150/200 = <strong>0.75</strong>. The first two match the keyed pair; 0.733333 × 0.75 = 0.55. The 50 MW difference C − P<sub>max</sub> is unused nameplate capacity at that peak, not proof of 50 MW dependable operating reserve.</p>" +
                        "<p>When <strong>P<sub>max</sub> = C</strong> and generation is nonzero, <strong>CF/LF = UF = 1</strong>, as in the separate bank question. The utilization-factor question's peak/capacity key is correct, but its explanation wrongly replaces it with the average/capacity definition. If capacity changes during a record, the CF denominator needs the corresponding capacity-time account rather than one unqualified CT.</p>",
                    sources: [
                        { id: "HYDR626-00010", set: 3, question: 60 },
                        { id: "HYDR626-00018", set: 3, question: 68 },
                        { id: "HYDR626-00132", set: 15, question: 66 },
                        { id: "HYDR626-00233", set: 26, question: 62 }
                    ]
                },
                {
                    id: "power-plant-use-and-operating-hours",
                    title: "Plant-use factor has an operating-hours denominator",
                    html: "<p><strong>Plant-use factor, PUF = E/(Ct<sub>on</sub>)</strong>, compares generated energy with full-rating production during the hours the plant actually operates. Capacity factor uses the entire observation period T, including non-operating hours. Thus <strong>CF = PUF × t<sub>on</sub>/T</strong>. Define the plant-on convention and use positive operating hours; for a fleet or changing unit configuration, a compatible capacity-time calculation is needed.</p>" +
                        "<p><strong>Illustrative added day:</strong> a 10 MW plant generates 10 MW for four hours, 5 MW for four hours and zero for sixteen hours. E = 10 × 4 + 5 × 4 = <strong>60 MWh</strong>; t<sub>on</sub> = 8 h and T = 24 h. PUF = 60/(10 × 8) = <strong>0.75</strong>, whereas CF = 60/(10 × 24) = <strong>0.25</strong>. Peak output is 10 MW, so UF = <strong>1</strong> and LF = <strong>0.25</strong>. The four factors describe different features of the same record.</p>" +
                        "<p>The bank's <strong>maximum power utilized/maximum power available</strong> wording describes a utilization ratio when available means installed rated capacity. It does not define PUF. Its explanation then describes full-period capacity factor instead. None of the offered terms supplies the conventional utilization-factor name precisely; do not merge the definitions to preserve the key.</p>" +
                        "<p><strong>Power factor</strong>, another distractor, concerns real and apparent AC power, P/S, not energy produced over time. <strong>Reserve capacity</strong> is a capacity amount under a stated definition, not this dimensionless utilization ratio. Pumping consumption and imported energy should also be accounted for separately rather than inserting a signed net-storage energy balance into a nonnegative generating-use example.</p>",
                    sources: [{ id: "HYDR626-00230", set: 25, question: 66 }]
                },
                {
                    id: "power-diversity-and-coincidence",
                    title: "Coincidence depends on when individual peaks occur",
                    html: "<p>For the same group of loads and the same observation period, let ΣP<sub>individual,max</sub> be the sum of their individual maximum demands and P<sub>system,max</sub> the maximum of their <strong>simultaneous total</strong>. Adding maxima that occurred at different times usually gives a larger number than the maximum actually seen by the combined supply.</p>" +
                        "<p><strong>Diversity factor = ΣP<sub>individual,max</sub>/P<sub>system,max</sub></strong>. The corresponding <strong>coincidence factor = P<sub>system,max</sub>/ΣP<sub>individual,max</sub></strong>. They are reciprocals when the denominators are positive. For nonnegative demands on consistent boundaries, diversity is at least one and coincidence is at most one; equality occurs when the individual maxima coincide.</p>" +
                        "<p><strong>Illustrative added demand group:</strong> two consumers have individual peaks of 60 and 40 MW, but their combined maximum is 80 MW. Diversity = (60 + 40)/80 = <strong>1.25</strong> and coincidence = 80/100 = <strong>0.80</strong>. Designing solely for a coincident 100 MW would ignore the measured timing difference; assuming 80 MW without supporting coincident records would be equally unjustified.</p>" +
                        "<p>These factors need simultaneous load information. They cannot be recovered from a river FDC, installed capacity or annual energy alone. A load factor compares average and peak demand; diversity compares individual and combined peaks. Diversity can inform demand-side capacity planning but does not by itself provide water during a drought or replace a reserve and reliability assessment.</p>",
                    sources: [{ id: "HYDR626-00009", set: 2, question: 68 }]
                },
                {
                    id: "power-firm-secondary-and-reliability",
                    title: "Firm power is a qualified delivery commitment",
                    html: "<p><strong>Firm or primary power</strong> is the output supportable for a specified delivery schedule under an explicitly chosen hydrological and reliability criterion. <strong>Secondary or surplus power</strong> is additional output available when conditions permit but not included in that firm commitment. A schedule may require continuous year-round output or particular hours in particular seasons; MW without its schedule does not completely describe firm service.</p>" +
                        "<p>For an unregulated ROR plant, critical usable low flows can govern firm output. With storage or pondage, releases need not equal simultaneous river inflow: the reservoir can bridge deficits, subject to its water balance, head range and drawdown limits. Include non-power releases, unit availability and delivery restrictions. A minimum observed river flow alone is therefore not a universal firm-power formula.</p>" +
                        "<p><em>Publication-specific criterion:</em> DoED's <strong>Guidelines for Study of Hydropower Projects, 2018, A2 section 9.1</strong> uses a <strong>90% reliable average daily flow in the lowest-flow month</strong> for its firm-energy calculation. This specific daily/low-month assessment is <strong>not a universal annual Q<sub>90</sub> rule</strong>, and it does not prescribe Q<sub>40</sub> for every project. Retain the study stage, time aggregation and reliability definition when using such guidance.</p>" +
                        "<p><em>Reference illustration, not bank data:</em> the Budhigandaki owner's salient-features table describes firm outputs for stated daily hours and distinguishes operating/storage zones. It demonstrates why the word firm need not mean one unchanging output for all 8760 hours. That published design description is not a new operating approval or a transferable criterion for another reservoir.</p>" +
                        "<p>The bank's <strong>100% available flow</strong> is ambiguous: it might mean dependable availability, but it cannot justify diverting every litre of river water regardless of required releases. Its explanation also introduces full available head in place of an actual listed option. An interconnected mix can improve reliability through complementary resources and reserves, but no source label proves it is always the most reliable system; outages, hydrological correlation and transmission bottlenecks still matter.</p>",
                    sources: [
                        { id: "HYDR626-00005", set: 2, question: 64 },
                        { id: "HYDR626-00130", set: 15, question: 64 },
                        { id: "HYDR626-00226", set: 25, question: 62 },
                        { id: "HYDR626-00231", set: 25, question: 67 },
                        { id: "HYDR626-00281", set: 31, question: 58 },
                        { id: "HYDR626-00004", set: 2, question: 63 }
                    ]
                },
                {
                    id: "power-installed-capacity-methods",
                    title: "Installed capacity is chosen by comparing feasible alternatives",
                    html: "<p><strong>Installed capacity is a design choice, not simply the maximum instantaneous hydraulic potential.</strong> Raising design discharge can capture more wet-period water, but the extra equipment may operate for few hours. Oversizing can lower capacity factor, increase civil and electrical costs, and leave generation that the grid cannot accept. A smaller plant may spill more water yet produce a better economic result.</p>" +
                        "<table><thead><tr><th scope='col'>Approach</th><th scope='col'>Contribution to capacity selection</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Demand–supply analysis</th><td>Match the chronological load, firm/peak requirement, existing supply, reserves and transmission limits.</td></tr>" +
                        "<tr><th scope='row'>Flow-duration alternatives</th><td>Estimate unregulated energy for candidate design flows, net heads, efficiencies and machine limits; quantify incremental wet-period capture.</td></tr>" +
                        "<tr><th scope='row'>Mass-curve or sequential storage analysis</th><td>Check the storage needed to support releases and the yield possible through drought sequences. A mass curve is cumulative inflow versus time, not an FDC.</td></tr>" +
                        "<tr><th scope='row'>Marginal cost–benefit comparison</th><td>Compare additional dependable capacity, time-valued energy and other benefits with additional life-cycle costs and impacts.</td></tr></tbody></table>" +
                        "<p>For each candidate, choose compatible turbine units, generator ratings and waterway capacity, then recalculate losses and head rather than keeping hydraulics fixed by habit. A storage project's <strong>rule curve</strong> constrains its releases and energy, so operating policy and installed capacity should be considered together. Several unit sizes can give different part-load efficiencies, maintenance flexibility and outage consequences at the same total rating.</p>" +
                        "<p>DoED 2018's optimization material compares costs and benefits of alternatives. The bank's single mass-analysis choice is not uniquely sufficient: demand–supply and marginal cost–benefit methods are also relevant. Its explanation incorrectly equates mass analysis with flow-duration analysis. Maximizing operating hours, energy alone, or capacity factor alone is not the same as maximizing feasible net benefit.</p>",
                    sources: [{ id: "HYDR626-00125", set: 15, question: 59 }]
                },
                {
                    id: "power-incremental-capacity-example",
                    title: "Added example: the largest capacity need not have the largest benefit",
                    html: "<p><em>Syllabus extension — official Chapter 8.2 methods of fixing installed capacity.</em> No assigned bank question supplies a complete economic comparison. The following is an <strong>explicitly added, hypothetical example</strong>; its energy estimates, annualized costs and price are not observed project data or a Nepal tariff.</p>" +
                        "<p>Suppose a separate, consistent hydraulic/operating assessment estimates the deliverable annual energy below for three feasible mutually exclusive capacities. Assume every delivered kWh is valued at <strong>Rs6</strong>, no separate capacity payment or other benefit, and annualized costs already include the chosen capital recovery, operation, maintenance and replacement allowances on the same price basis.</p>" +
                        "<table><thead><tr><th scope='col'>Capacity and annual energy</th><th scope='col'>Annual benefit and cost, million Rs</th><th scope='col'>Net annual benefit, million Rs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>10 MW; 50 GWh</th><td>Benefit 300; cost 200</td><td><strong>100</strong></td></tr>" +
                        "<tr><th scope='row'>15 MW; 65 GWh</th><td>Benefit 390; cost 250</td><td><strong>140</strong></td></tr>" +
                        "<tr><th scope='row'>20 MW; 70 GWh</th><td>Benefit 420; cost 300</td><td><strong>120</strong></td></tr></tbody></table>" +
                        "<p>One GWh is one million kWh, so the annual revenue in million rupees is 6 times the GWh figure. Going from 10 to 15 MW adds <strong>90</strong> million Rs benefit for <strong>50</strong> million Rs cost: net gain 40. Going from 15 to 20 MW adds only <strong>30</strong> million Rs benefit for another <strong>50</strong> million Rs cost: net loss 20. Thus <strong>15 MW wins among these three alternatives under these assumptions</strong>, not because it has the largest nameplate or the highest capacity factor.</p>" +
                        "<p>A real comparison needs time-dependent energy values, firm-capacity value where applicable, hydrological uncertainty, environmental constraints, transmission, construction timing and a consistent discounting model. It must also consider the no-project alternative and other feasible sizes. The added table demonstrates incremental reasoning; it cannot establish an optimum for an unspecified bank project.</p>",
                    sources: []
                },
                {
                    id: "power-classification-axes-and-thresholds",
                    title: "Classify head, size, water source and duty on separate axes",
                    html: "<p>A plant can be described simultaneously by <strong>head, installed capacity, storage arrangement, energy source, operating duty and grid connection</strong>. These labels are not mutually exclusive alternatives. A micro plant can be ROR and isolated; a large storage plant can provide peaking service; a pumped-storage scheme can use reversible machinery at a particular head.</p>" +
                        "<table><thead><tr><th scope='col'>Basis</th><th scope='col'>Named convention or distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Head</th><td>DoED 2018 classifies <strong>low &lt;50 m, medium 50–300 m, high &gt;300 m</strong>. The bank's &lt;15 m convention is not a universal threshold.</td></tr>" +
                        "<tr><th scope='row'>Installed capacity</th><td>The US DOE primer defines micro-hydropower as <strong>up to 100 kW</strong>, including 100 kW. This is an identified educational classification, not an asserted Nepal statutory threshold.</td></tr>" +
                        "<tr><th scope='row'>Regulation arrangement</th><td>Unregulated ROR, peaking ROR with pondage, and seasonal or carry-over storage describe differing abilities to shift river inflow through time.</td></tr>" +
                        "<tr><th scope='row'>Duty and connection</th><td>Base, intermediate and peaking service describe dispatch; isolated, mini-grid and interconnected describe the electrical system.</td></tr></tbody></table>" +
                        "<p><strong>Tidal-range generation</strong> uses the changing difference between a tidal basin and the sea, controlled by barrage or lagoon gates and turbines. Its energy source is the tide, not water previously raised by grid-powered pumps. Tidal-stream generation instead extracts kinetic energy from currents; wave energy is a different marine resource. Predictable tides still do not mean constant output or universally greater or smaller firm power than a river scheme.</p>" +
                        "<p>Micro-hydro can suit rural supply when local flow, head, demand and maintenance arrangements are adequate. Size alone does not guarantee year-round service, stand-alone frequency control or negligible environmental impact. Always state the publication behind a numerical class boundary; the bank's strict &lt;100 kW wording excludes a boundary included by DOE's up-to-100 convention.</p>",
                    sources: [
                        { id: "HYDR626-00133", set: 15, question: 67 },
                        { id: "HYDR626-00134", set: 16, question: 61 },
                        { id: "HYDR626-00279", set: 1, question: 67 },
                        { id: "HYDR626-00278", set: 30, question: 68 }
                    ]
                },
                {
                    id: "power-ror-storage-and-nepal-examples",
                    title: "ROR, peaking ROR and storage describe different regulation abilities",
                    html: "<p><strong>Run-of-river generation</strong> mainly follows the usable river inflow because little water can be shifted across long periods. A diversion may route water through a canal, tunnel or penstock to exploit natural elevation fall; DOE explicitly notes that some diversions need no dam. A weir, intake pool or forebay does not by itself establish seasonal storage capability.</p>" +
                        "<p><strong>Peaking ROR</strong> adds enough pondage to shift some generation within a short cycle, commonly a day. Its higher output during selected hours must be balanced by lower releases or replenishment at other times. It remains dependent on the season's inflow; daily balancing storage does not automatically bridge a prolonged dry season.</p>" +
                        "<p><strong>Storage or impoundment generation</strong> uses a reservoir to regulate releases over its designed storage horizon. The reservoir's usable volume and allowable drawdown, not merely the existence of a dam, determine how long inflow and generation can be separated. Seasonal storage is not limitless drought insurance, and pumped storage is distinguished by its pumping-energy input even though it also has reservoirs.</p>" +
                        "<p><strong>Bank project comparison:</strong> Kulekhani I is a <strong>seasonal-storage</strong> scheme, not peaking ROR. NEA's Generation Directorate 2082/2083 plant table identifies Kaligandaki A and Marsyangdi as peaking ROR; NEA's Annual Report 2025/2026 describes Upper Tamakoshi as daily peaking ROR. A storage plant can operate during peaks without thereby becoming a peaking-ROR scheme.</p>" +
                        "<p>The DOE types primer calls impoundment the most common general type, supporting the bank's generic reservoir answer. That wording is not a counted, dated description of Nepal's operating fleet. Keep a broad primer classification separate from regional statistics, and do not infer that every impoundment is multipurpose.</p>",
                    sources: [
                        { id: "HYDR626-00225", set: 25, question: 61 },
                        { id: "HYDR626-00277", set: 30, question: 67 },
                        { id: "HYDR626-00288", set: 31, question: 65 }
                    ]
                },
                {
                    id: "power-pumped-storage-energy-balance",
                    title: "Pumped storage shifts energy and loses part of it each cycle",
                    html: "<p><strong>Pumped storage</strong> uses electricity to move water from a lower reservoir to an upper reservoir, then releases it through a turbine when stored energy is more valuable. Low electricity demand often coincides with charging, but the actual decision can also follow renewable surplus, prices and system-service requirements. Night-time pumping is a common pattern, not the definition.</p>" +
                        "<p>For a common transferred volume V, approximate generating energy as <strong>E<sub>out</sub> = ρgVH<sub>gen</sub>η<sub>gen</sub></strong>. Pumping electrical input is <strong>E<sub>in</sub> = ρgVH<sub>pump</sub>/η<sub>pump</sub></strong>, where the pumping head includes the losses that must be overcome and the generating net head deducts generating-path losses. Thus <strong>η<sub>round-trip</sub> = E<sub>out</sub>/E<sub>in</sub> = η<sub>pump</sub>η<sub>gen</sub>H<sub>gen</sub>/H<sub>pump</sub></strong> in this simplified constant-head account.</p>" +
                        "<p><strong>Illustrative added cycle:</strong> an assumed measured round-trip efficiency of 0.80 converts 100 MWh of charging energy into <strong>80 MWh</strong> of recovered electrical energy. The missing 20 MWh is loss, not additional generation. Ignoring other costs, arbitrage requires p<sub>sell</sub>η<sub>round-trip</sub> &gt; p<sub>buy</sub> when prices are expressed per matching electrical-energy unit. Real comparisons also include maintenance, water losses and service revenues.</p>" +
                        "<p>Many schemes use a <strong>reversible pump-turbine</strong> with a motor-generator and bidirectional waterway. Other arrangements use separate pumps and turbines; reversible or bidirectional machines are not exclusive to pumped storage, since tidal arrangements can also reverse operation. Distinguish closed-loop schemes from schemes receiving natural inflow. Energy attributable to that natural inflow is separate from recovered pumping energy: storage is not a free primary energy source.</p>",
                    sources: [
                        { id: "HYDR626-00054", set: 7, question: 67 },
                        { id: "HYDR626-00224", set: 25, question: 60 }
                    ]
                },
                {
                    id: "power-load-following-and-machine-performance",
                    title: "Base-load and peaking service are operating roles",
                    html: "<p><strong>Base load</strong> is the sustained minimum component of system demand over a stated period. Intermediate and peak loads are the additional, more variable components. A base-load plant is scheduled to serve sustained demand; a peaker is scheduled for shorter high-demand or high-value intervals. These roles do not require one unchanging output at nameplate capacity, and a physical plant's role can change with system conditions.</p>" +
                        "<p>A flexible plant with high variable running cost is commonly reserved for peaks because continuous use would be expensive. This explains the bank's intended peaking answer, not an absolute dispatch rule. Hydropower can have low fuel-related running cost yet still be reserved for peaks because stored water has an <strong>opportunity cost</strong>: using it now may forgo more valuable generation later.</p>" +
                        "<p>Hydro units can respond quickly through governors, gates, guide vanes or nozzle control, subject to machine limits and the waterway's transient response. Fast load following does not mean instantaneous unrestricted closure or release: pressure surges, ramp limits, downstream fluctuations and available flow constrain operation. Long construction lead times and capital-intensive civil works are separate from this rapid operating response.</p>" +
                        "<p>Hydro generators can retain high efficiency over a useful load range, but the combined turbine-generator efficiency is <strong>machine- and operating-point-dependent</strong>. Some turbines perform poorly at low load or have restricted vibration zones. Sediment abrasion, cavitation, corrosion, increased clearances and other deterioration can reduce performance with age; maintenance or rehabilitation can restore or improve it.</p>" +
                        "<p>Consequently the bank item denying rapid load response is wrong, but so is its separate claim that efficiency never reduces with age. There is more than one problematic statement. A comparison of hydro and tidal firm power also requires specific resources, equipment and delivery schedules rather than a blanket ranking.</p>",
                    sources: [
                        { id: "HYDR626-00003", set: 2, question: 62 },
                        { id: "HYDR626-00006", set: 2, question: 65 },
                        { id: "HYDR626-00280", set: 30, question: 69 },
                        { id: "HYDR626-00304", set: 33, question: 60 }
                    ]
                },
                {
                    id: "power-peaking-schedule-and-revenue",
                    title: "Peaking benefit is an incremental comparison, not one receipt",
                    html: "<p><strong>Compare complete schedules using a stated baseline and the same tariff rules.</strong> In the bank, unpeaked operation is 20 MW throughout the day. Peaked operation is 40 MW for six hours and 10 MW for the remaining eighteen hours. Assume the stated Rs12/kWh peak and Rs6/kWh off-peak tariffs apply to <strong>both</strong> schedules.</p>" +
                        "<table><thead><tr><th scope='col'>Schedule and period</th><th scope='col'>Energy, MWh/day</th><th scope='col'>Revenue, million Rs/day</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Unpeaked: 20 MW for 6 peak hours</th><td>120</td><td>120000 × 12 / 1000000 = <strong>1.44</strong></td></tr>" +
                        "<tr><th scope='row'>Unpeaked: 20 MW for 18 off-peak hours</th><td>360</td><td><strong>2.16</strong></td></tr>" +
                        "<tr><th scope='row'>Unpeaked total</th><td><strong>480</strong></td><td><strong>3.60</strong></td></tr>" +
                        "<tr><th scope='row'>Peaked: 40 MW for 6 peak hours</th><td>240</td><td><strong>2.88</strong></td></tr>" +
                        "<tr><th scope='row'>Peaked: 10 MW for 18 off-peak hours</th><td>180</td><td><strong>1.08</strong></td></tr>" +
                        "<tr><th scope='row'>Peaked total</th><td><strong>420</strong></td><td><strong>3.96</strong></td></tr></tbody></table>" +
                        "<p>Incremental gross revenue is <strong>3.96 − 3.60 = 0.36 million Rs/day = Rs360000/day</strong>. The explanation's Rs1080000 is merely the <strong>peaked schedule's off-peak receipt</strong>; it is not the incremental benefit under these tariffs. None of the offered choices represents the calculated Rs360000 increment.</p>" +
                        "<p><strong>Explicitly conditional alternative, not a supplied tariff arrangement:</strong> if <em>all</em> unpeaked energy were instead paid at Rs6/kWh, baseline revenue would be 480000 × 6 = <strong>2.88 million Rs/day</strong>. Comparing that different contract with the peaked time-of-day contract would give <strong>1.08 million Rs/day</strong> extra revenue. The stem never specifies this change of baseline tariff, so it cannot silently rescue the key.</p>" +
                        "<p>The schedules also differ by <strong>60 MWh/day</strong>: 480 versus 420. At unchanged head and efficiency they are not simply an energy-conserving redistribution of the same turbine water. Storage, losses, spillage, head variation and operating constraints would need explanation. Additional costs are absent, so even the Rs360000 result is an incremental <strong>gross-revenue</strong> result, not demonstrated net profit.</p>",
                    sources: [{ id: "HYDR626-00011", set: 3, question: 61 }]
                },
                {
                    id: "power-components-and-separate-paths",
                    title: "Trace the water path and electrical path separately",
                    html: "<p>Hydropower components collect and control water, convey it with manageable losses, convert its energy, and connect the electrical output to the receiving system. Layout depends on the type of scheme; no single reservoir/penstock sequence describes every plant.</p>" +
                        "<ul><li><strong>Typical storage plant:</strong> reservoir → screened intake and control arrangement → pressure waterway/penstock → turbine → tailrace. A reaction installation includes a draft tube between runner and tailwater; a Pelton installation discharges from its free-jet runner without a reaction-turbine draft tube.</li><li><strong>Typical diversion/ROR plant:</strong> intake at a suitable diversion or natural site → sediment-handling facilities where needed → canal or headrace tunnel → forebay or pressure-waterway transition → penstock → turbine and tailrace. The exact arrangement varies; a dam is not mandatory for every diversion.</li><li><strong>Pumped storage:</strong> upper and lower reservoirs, intakes, a reversible waterway arrangement and either pump-turbine/motor-generator equipment or separate pumping and generating units.</li><li><strong>Tidal-range plant:</strong> basin or lagoon, barrage/embankment, sluices and low-head turbine passages; direction and generation periods depend on the operating mode.</li></ul>" +
                        "<p><strong>A surge tank is a connected branch or chamber, not a compulsory flow-through stop.</strong> It exchanges water with the pressure system during transients and moderates pressure/flow changes. The principal generating flow continues along the waterway to the turbine. Its branch location must be shown separately; reservoir → penstock → surge tank → turbine is not a physically accurate serial path merely because the bank keys that order.</p>" +
                        "<p>The electrical path is <strong>generator → step-up transformer and switchyard/protection → transmission line → receiving grid</strong>. The generator converts shaft work; the transformer changes AC voltage; switching and protection control the connection; conductors carry the electrical energy. Transmission connects bulk generation and receiving systems, while local distribution is a distinct downstream function. A penstock transports water, not electricity.</p>" +
                        "<p>The dam/turbine/generator all-of-the-above question describes an ordinary impoundment plant, not a universal requirement for every hydropower system. Component functions are the useful concept; detailed intake, dam, surge and machine designs belong to their respective later Chapter 8 topics.</p>",
                    sources: [
                        { id: "HYDR626-00110", set: 13, question: 65 },
                        { id: "HYDR626-00124", set: 1, question: 62 },
                        { id: "HYDR626-00241", set: 26, question: 69 }
                    ]
                },
                {
                    id: "power-reservoir-levels-and-storage-zones",
                    title: "A storage zone is a volume between defined elevations",
                    html: "<p>A reservoir's <strong>stage-storage relation S(z)</strong> converts water-surface elevation into stored volume. The volume between two elevations is <strong>S(z<sub>upper</sub>) − S(z<sub>lower</sub>)</strong>, not merely their vertical difference. An area-times-depth approximation additionally assumes a suitable representative area. Storage is measured in m<sup>3</sup>, while the levels defining it are measured in m above a datum.</p>" +
                        "<table><thead><tr><th scope='col'>Zone or level</th><th scope='col'>Meaning and qualification</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Dead storage</th><td>Water volume below the defined lowest usable withdrawal boundary in the adopted scheme. It may provide sediment allowance and other functions; it is not simply a level.</td></tr>" +
                        "<tr><th scope='row'>Inactive and reserve storage</th><td>Volume restricted from normal operation can include water physically withdrawable under other rules. Dead, inactive and below-normal-operating storage are not always identical.</td></tr>" +
                        "<tr><th scope='row'>Active or live storage</th><td>Volume available for the defined normal operating drawdown, commonly between normal/full supply level and minimum operating level.</td></tr>" +
                        "<tr><th scope='row'>Normal/full reservoir level</th><td>The intended upper conservation level under normal operating rules. Gate settings and spillway crest geometry affect actual spilling.</td></tr>" +
                        "<tr><th scope='row'>Surcharge storage</th><td>Temporary storage between the normal full level and the specified maximum flood level; not automatically available for routine conservation use.</td></tr></tbody></table>" +
                        "<p>The bank's bed-to-minimum-pool interval represents dead storage only when that minimum pool denotes the relevant dead-storage boundary. <em>Reference illustration, not bank measurements:</em> the Budhigandaki owner's table separately identifies normal and ultimate minimum operating levels, a minimum reservoir level, reserve live storage and dead storage. This shows why all water below one stated operating level cannot automatically be called dead.</p>" +
                        "<p>The bank's normal-water-level answer uses the conventional highest intended conservation/no-spill description. It is not a promise that gates cannot release water at that level or that a gated reservoir can safely retain any higher level without spilling. Distinguish the flood maximum from the dam crest and freeboard; freeboard is not an extra routine storage allocation.</p>",
                    sources: [
                        { id: "HYDR626-00026", set: 4, question: 67 },
                        { id: "HYDR626-00235", set: 26, question: 64 },
                        { id: "HYDR626-00236", set: 26, question: 65 }
                    ]
                },
                {
                    id: "power-reservoir-purposes-and-flood-space",
                    title: "Reservoir purposes and effective flood storage need explicit definitions",
                    html: "<p><strong>Conservation storage</strong> holds water for later beneficial use, such as power, irrigation or water supply. <strong>Flood-control or mitigation storage</strong> temporarily retains inflow to reduce damaging downstream peaks. A retarding basin commonly performs passive flood attenuation through ungated outlets, filling during a flood and draining afterwards. Ungated controls alone do not prove that every such reservoir has exclusively one purpose.</p>" +
                        "<p>A <strong>single-purpose</strong> reservoir is designed primarily for one specified service, with other benefits merely incidental. A <strong>multipurpose</strong> reservoir intentionally provides several design services, even if one receives priority. The bank's irrigation reservoir also catering to flood control and water supply is therefore ambiguous: the single-purpose choice needs those other services to be incidental, not separately intended design objectives.</p>" +
                        "<p>For a specified initial storage S<sub>0</sub> and permitted flood storage limit S<sub>limit</sub>, the immediately vacant volume is <strong>S<sub>limit</sub> − S<sub>0</sub></strong>. Its usefulness depends on incoming flood timing, outlet capacity, downstream safe releases and the rule curve. A nominal live-storage volume may already contain conserved water and cannot automatically be counted as empty flood space.</p>" +
                        "<p>The bank's effective-flood-storage question mixes conventions. Its keyed minimum-to-maximum operating band describes an operating volume. Under a <strong>net additional detention</strong> convention, the alternative <strong>live + surcharge − pre-existing valley storage</strong> accounts for water that would already occupy the natural valley at the corresponding flood condition. That convention also needs compatible boundaries; it is not a reason to count all live storage as available in every event.</p>" +
                        "<p>Flood routing must establish the attainable attenuation; storage volume alone does not determine peak reduction. Many hydro projects deliberately combine power and water-management benefits, but <strong>not all hydro plants are multipurpose</strong>. Water-supply and irrigation releases may coincide with turbine releases or conflict with energy-optimal timing; count common water only once and state priorities rather than assuming all objectives can be maximized together.</p>",
                    sources: [
                        { id: "HYDR626-00136", set: 16, question: 63 },
                        { id: "HYDR626-00137", set: 16, question: 64 },
                        { id: "HYDR626-00138", set: 16, question: 65 },
                        { id: "HYDR626-00208", set: 23, question: 64 },
                        { id: "HYDR626-00308", set: 33, question: 64 }
                    ]
                },
                {
                    id: "power-pondage-and-regulation-timescales",
                    title: "Pondage bridges a short release deficit, not an entire dry season",
                    html: "<p><strong>Pondage</strong> is short-term balancing storage used to shift releases and generation within an operating cycle. The bank's word Bondage is a typo. Pondage is a volume, not the pond's water level; it can be associated with a headpond or other suitable balancing arrangement rather than invariably sitting immediately behind one particular type of barrage.</p>" +
                        "<ul><li><strong>Daily or short-cycle regulation:</strong> store water during lower turbine demand and release it during selected hours; restore the water balance over the cycle.</li><li><strong>Seasonal regulation:</strong> transfer some wet-season inflow into the dry season, requiring substantially greater usable storage relative to inflow.</li><li><strong>Carry-over regulation:</strong> retain water across years to bridge longer deficits; assess multiyear sequences and terminal storage.</li></ul>" +
                        "<p><strong>Illustrative added water balance:</strong> suppose usable inflow after all non-power commitments is a constant <strong>2 m<sup>3</sup>/s</strong>. An assumed feasible release schedule uses 6 m<sup>3</sup>/s for four hours and 1.2 m<sup>3</sup>/s for twenty hours. Inflow volume is 2 × 86400 = <strong>172800 m<sup>3</sup>/day</strong>; releases total 6 × 14400 + 1.2 × 72000 = <strong>172800 m<sup>3</sup>/day</strong>.</p>" +
                        "<p>During the four-hour peak the deficit is (6 − 2) × 14400 = <strong>57600 m<sup>3</sup></strong>. During the remaining hours the refill is (2 − 1.2) × 72000 = the same <strong>57600 m<sup>3</sup></strong>. With adequate initial peak-period storage, negligible additional losses and no restrictive level/outlet conditions, that is the minimum working pondage for this idealized cycle. It is not a bank datum or a complete pond design.</p>" +
                        "<p>Real sizing also needs initial and final levels, operating head changes, losses, minimum turbine flow and downstream ramp constraints. Short-term regulation reallocates water through time; it does not create an unlimited energy resource or establish firm year-round output from a daily balance alone.</p>",
                    sources: [{ id: "HYDR626-00012", set: 3, question: 62 }]
                },
                {
                    id: "power-reservoir-continuity-and-routing",
                    title: "Close the reservoir water balance at every time step",
                    html: "<p><em>Syllabus extension — official Chapter 8.2 reservoirs and their regulation.</em> The assigned bank supplies no complete chronological operating dataset. This framework and its <strong>added numerical illustration</strong> are source-free teaching extensions, not reconstructed measurements.</p>" +
                        "<p>For an interval, use <strong>S<sub>i+1</sub> = S<sub>i</sub> + V<sub>in</sub> + V<sub>rain</sub> − V<sub>turbine</sub> − V<sub>bypass</sub> − V<sub>spill</sub> − V<sub>evaporation</sub> − V<sub>seepage</sub> − V<sub>other withdrawals</sub></strong>. Every V is a volume in compatible units over the same interval. River inflow excludes any direct reservoir rainfall counted separately. Distinct outflow terms must not double-count turbine water subsequently used for irrigation downstream.</p>" +
                        "<p>For a mean flow Q in m<sup>3</sup>/s, V = QΔt requires Δt in <strong>seconds</strong>. Obtain levels from S(z), compute net head and feasible turbine discharge, and integrate power using the corresponding operating points. In a pumped-storage model include pumping transfers explicitly and close both reservoirs' balances; do not hide electrical charging energy in natural inflow.</p>" +
                        "<p><strong>Added two-interval volume account, all volumes in million m<sup>3</sup>:</strong> start with S = 20; inflow 10, total planned release 7 and losses 1 give <strong>S = 22</strong>. In the next interval, inflow 12, planned release 7 and losses 1 would give <strong>26</strong>. If the allowed storage is 24 and the outlet/spillway can pass the required water, an additional <strong>2</strong> must spill or be released to finish at 24. If it cannot pass that water, a routing calculation is required; simply clipping storage to 24 would conceal a violated constraint.</p>" +
                        "<p>At the lower storage limit, reduce an infeasible release or record a shortage rather than creating water by numerical clipping. Flood routing couples <strong>dS/dt = inflow − outflow − losses</strong> with stage-storage and stage/gate-discharge relationships. The simple interval example is a water account, not a flood-peak prediction. Record shortages, spill, energy and terminal storage so an assumed initial full reservoir is not repeatedly spent as if it were renewable annual inflow.</p>",
                    sources: []
                },
                {
                    id: "power-mass-curve-storage-example",
                    title: "Mass curves reveal storage deficits that an FDC cannot show",
                    html: "<p><em>Syllabus extension — official Chapter 8.2 installed-capacity methods and reservoir regulation.</em> A <strong>mass curve</strong> plots cumulative inflow volume against chronological time. Its slope represents inflow rate. A cumulative required-release curve similarly represents demand for water. A growing release-minus-inflow deficit must be supplied from storage; the maximum relevant cumulative deficit governs the simplified working-storage requirement.</p>" +
                        "<p>In a loss-free sequential calculation, define a deficit D<sub>i</sub> by <strong>D<sub>i</sub> = max[0, D<sub>i−1</sub> + V<sub>required,i</sub> − V<sub>in,i</sub>]</strong>. The maximum D estimates the storage needed for the selected release series, with appropriate initial/cyclic conditions. Include losses and other commitments in the required water account where applicable. For carry-over storage, examine sequences spanning the ends of the record and check the assumed terminal condition.</p>" +
                        "<p><strong>Illustrative added repeating four-period record:</strong> equal-duration inflow volumes are <strong>8, 2, 2, 8 million m<sup>3</sup></strong>, while required release is <strong>5 million m<sup>3</sup> each period</strong>. The two consecutive low-flow periods create deficits 3 + 3 = <strong>6 million m<sup>3</sup></strong>. With working capacity 6 and initial working storage 3, successive end storages are <strong>6, 3, 0, 3</strong>. Total inflow and release both equal 20, and the initial storage is restored.</p>" +
                        "<p>Rearrange the same inflow volumes to <strong>8, 2, 8, 2</strong>, without changing their durations. The FDC is unchanged, but a repeating storage sequence <strong>0 → 3 → 0 → 3 → 0</strong> now needs only <strong>3 million m<sup>3</sup></strong>. This is why duration analysis cannot reconstruct storage requirements: the length of an uninterrupted deficit matters.</p>" +
                        "<p>The USACE 1997 reservoir manual discusses duration analysis and sequential mass-curve/Rippl analysis as distinct methods. This added example assumes feasible releases, no losses and no additional head or ecological restriction. It sizes a simplified storage-yield relationship, not a complete MW installation: convert feasible releases to energy and compare costs, units and grid needs separately.</p>",
                    sources: []
                },
                {
                    id: "power-rule-curves-and-operating-policy",
                    title: "Rule curves turn storage limits into a seasonal operating policy",
                    html: "<p><em>Syllabus extension — official Chapter 8.2 reservoirs and their regulation.</em> No assigned question provides an actual rule curve. A rule curve specifies target levels, storage zones or release guidance as functions of season and operating conditions. It is <strong>not</strong> a chronological inflow hydrograph, a stage-storage curve or a sorted flow-duration curve.</p>" +
                        "<p>An upper guide may reserve flood space before expected high inflows; lower guides can trigger conservation or shortage-sharing when storage falls. End-of-wet-season targets may preserve water for dry-season releases. A high pool can improve head but reduce flood space; maximum energy today can reduce future dependable supply. The operating objective and service priorities must therefore be explicit.</p>" +
                        "<ol><li>Observe the date, current storage/level, inflow forecast and downstream conditions.</li><li>Apply the relevant operating zone and required water commitments; identify turbine and non-turbine releases without duplication.</li><li>Respect physical outlet limits, minimum/maximum levels, machine availability, grid instructions and permissible rates of release change.</li><li>Advance the chronological water and energy accounts, checking shortages, spill and updated head.</li><li>Review performance across representative wet, normal and drought sequences, including the terminal-storage condition and forecast uncertainty.</li></ol>" +
                        "<p>Flood operation needs event-scale routing and current downstream conditions, while seasonal energy planning may use longer time steps. One monthly average can hide a short damaging flood or an operational low-flow failure. A downstream re-regulating reservoir can smooth peaking releases where the layout and available volume permit, but its own balance and release requirements must be assessed.</p>" +
                        "<p>The policy must reconcile power, water supply, irrigation, environmental flows and flood management instead of treating all reservoir water as available for the highest-price hour. This is a study framework, not permission to alter a real operating rule. Actual target levels, priority rules, release limits and approval requirements remain project-specific and are not invented here.</p>",
                    sources: []
                },
                {
                    id: "power-sediment-budget-and-service-life",
                    title: "Reservoir life needs a deposited-volume rate and a service criterion",
                    html: "<p><strong>Water inflow, sediment inflow and deposited sediment volume are different quantities.</strong> With discharge Q in m<sup>3</sup>/s and sediment mass concentration c in kg/m<sup>3</sup> of water, sediment mass flux is <strong>Qc kg/s</strong>. Integrate it over the period. Q<sub>average</sub>c<sub>average</sub>T is valid only with an appropriate constant or flow-weighted concentration assumption; ordinary separate averages need not give the transported mass.</p>" +
                        "<p>Convert retained sediment mass to deposit volume using a compatible <strong>deposit bulk density</strong>, not automatically the mineral particle density. Account for upstream input, bank erosion or other local sources, downstream passage, deliberate removal and any remobilization. Trap efficiency describes the fraction of incoming sediment retained under its stated definition; do not apply a trapping factor and also subtract the same downstream passage a second time.</p>" +
                        "<p>A constant-rate volume-budget estimate is <strong>t = V<sub>allowance</sub>/R<sub>deposited</sub></strong>, where V is in m<sup>3</sup> and R is in m<sup>3</sup>/year, yielding years. Dividing storage by an unspecified <strong>total sediment volume</strong> gives a dimensionless ratio, not a lifetime. Capacity/inflow comparisons based on water supply and trap-efficiency ratios answer different questions.</p>" +
                        "<p>Sediment is not deposited uniformly. Coarser material can form upstream deltas; fine sediment and density currents can carry material towards deeper or lower reaches. Reservoir slope, geometry, inflow energy, grain sizes, water levels and outlet operation interact. The bank's steep-slope choice may describe one tendency, but <strong>slope alone does not determine where sediment settles</strong>.</p>" +
                        "<p>Define the end-of-service criterion: loss of a specified active volume, intake obstruction, unacceptable head/energy loss or an economic threshold may occur before complete filling. Deposition patterns, consolidation, changing trapping and sediment-management operations make actual life different from a fixed whole-capacity/rate quotient. USACE's reservoir guidance treats sediment trapping and deposit distribution as parts of reservoir assessment, not a rule that dead storage fills first everywhere.</p>",
                    sources: [
                        { id: "HYDR626-00234", set: 26, question: 63 },
                        { id: "HYDR626-00210", set: 23, question: 66 }
                    ]
                },
                {
                    id: "power-dead-storage-sixty-year-budget",
                    title: "The 60-year result is a simplified sediment allowance",
                    html: "<p>A dead-storage sediment allowance is a <strong>volume budget</strong>. Dividing that allowance by an assumed constant annual deposited volume estimates the time to exhaust the allowance under that bookkeeping model. It does not specify where the sediment will accumulate or guarantee that the active storage remains unaffected until that date.</p>" +
                        "<p><strong>Bank data:</strong> reservoir capacity is 30 million m<sup>3</sup>, with 20% earmarked as dead storage. Interpret the printed o.1 million m<sup>3</sup> annual silt deposition as <strong>0.1 million m<sup>3</sup>/year</strong>. The allowance is <strong>0.20 × 30 = 6 million m<sup>3</sup></strong>, giving <strong>t = 6/0.1 = 60 years</strong>.</p>" +
                        "<p>This follows only if the stated rate is the relevant <strong>net deposited volume</strong>, remains constant, and is charged entirely to that allowance for the simplified estimate. No extra trap factor is needed if deposition is already the supplied quantity. Dividing the entire 30 million m<sup>3</sup> by the same rate would instead give a 300-year whole-volume equivalent, not a demonstrated project service life.</p>" +
                        "<p><strong>Active-storage loss can begin before dead storage is filled.</strong> Delta growth and deposits at different elevations can consume useful storage or impair intakes while deeper areas still contain water. The bank's explanation incorrectly turns its sequential filling assumption into a physical law. Assess sediment distribution and the actual service criterion before describing when useful life starts reducing.</p>" +
                        "<p>A measured sediment budget, deposit density and compaction history, stage-storage surveys and operating/sediment-management policy would be needed for a defensible site prediction. The keyed 60 years is retained here as the result of its stated simplified arithmetic, not as a universal threshold.</p>",
                    sources: [{ id: "HYDR626-00033", set: 5, question: 65 }]
                },
                {
                    id: "power-nine-billion-reservoir-calculation",
                    title: "The nine-billion-cubic-metre case gives about 48 years on its printed basis",
                    html: "<p><strong>Keep the supplied reference volume unchanged.</strong> The bank gives gross storage <strong>9 × 10<sup>9</sup> m<sup>3</sup></strong>, mean flow 150 m<sup>3</sup>/s, sediment concentration 2.6 kg/m<sup>3</sup> and deposit bulk density 1.6 tonnes/m<sup>3</sup> = <strong>1600 kg/m<sup>3</sup></strong>. Treat concentration as applicable to the mean annual water volume and use a <strong>365-day year = 31536000 s</strong>.</p>" +
                        "<ol><li>Annual water volume: <strong>150 × 31536000 = 4730400000 m<sup>3</sup>/year</strong>.</li><li>Associated sediment mass: <strong>4730400000 × 2.6 = 12299040000 kg/year</strong>.</li><li>Equivalent river-sediment deposit volume: <strong>12299040000/1600 = 7686900 m<sup>3</sup>/year</strong>.</li></ol>" +
                        "<p>The wording assigns annual bank-erosion sediment and downstream sediment passage as <strong>25% and 23% of gross storage</strong>. Following those words literally as constant annual fractions of the <strong>original 9 billion m<sup>3</sup></strong>, erosion adds 2250000000 m<sup>3</sup>/year and downstream passage removes 2070000000 m<sup>3</sup>/year. Thus:</p>" +
                        "<p><strong>R<sub>net</sub> = 7686900 + (0.25 − 0.23) × 9000000000 = 187686900 m<sup>3</sup>/year</strong>.</p>" +
                        "<p>The idealized whole-storage budget is <strong>t = 9000000000/187686900 = 47.9522 years</strong>, approximately <strong>48 years</strong>, the offered option C. The stored 11.7 years does not follow. Do <strong>not</strong> silently move the percentages onto incoming sediment volume, annual water inflow or the shrinking remaining storage; each would define a different problem.</p>" +
                        "<p>The annual gross-storage fractions are unusually large and need source clarification before practical use. This calculation assumes compatible sediment-volume bases and constant net accumulation; it adds no unspecified trapping, flushing, density-change or bed-load allowance. Exhausting gross volume in this idealization is not a forecast of the actual end of hydropower service, which needs deposit distribution and a defined operational threshold.</p>",
                    sources: [{ id: "HYDR626-00267", set: 29, question: 64 }]
                },
                {
                    id: "power-costs-and-depreciation",
                    title: "Low fuel cost is not zero operating cost or a depreciation rule",
                    html: "<p>Natural-flow hydro does not purchase combustible fuel for its hydraulic-to-electrical conversion. This explains the bank's low operating-charge and fuel-transport comparisons with steam, gas, diesel and nuclear generation. It does <strong>not</strong> make construction, maintenance or standby services fuel-free, or prove that every hydro project has the lowest total operation, maintenance or life-cycle cost.</p>" +
                        "<p>Separate <strong>capital costs</strong> of civil works, equipment and grid connection from <strong>operating costs</strong> such as staffing, inspection, repairs, sediment management and auxiliary electricity. Major rehabilitation and replacement are additional life-cycle items. High capital cost and long development time can coexist with low fuel-related running cost. Stored water also has an opportunity value, even if no fuel invoice accompanies its release.</p>" +
                        "<p><strong>Depreciation</strong> allocates an asset's depreciable value over an accounting life; it is not the same as hydraulic efficiency loss, physical deterioration or cash maintenance expenditure. For straight-line depreciation, original cost K, residual value R and life N years give <strong>annual depreciation = (K − R)/N</strong>. As a fraction of original cost, the annual rate is <strong>(1 − R/K)/N</strong>.</p>" +
                        "<p>The bank quotes <strong>0.5–1.5% per year</strong> without an identified accounting basis. Its explanation's <strong>50–100-year life</strong>, combined with the explicitly added assumptions of straight-line depreciation and zero residual value, implies <strong>2–1% per year</strong>, or a <strong>1–2%</strong> range. Those assumptions do not derive the entire keyed range.</p>" +
                        "<p>No inspected source here establishes 0.5–1.5% as a Nepal tax rate, a mandatory accounting schedule or a universal physical property of hydro plants. Civil works and electro-mechanical assets can have different service and replacement lives. Cost and depreciation statements must identify their asset boundary, method, price date and purpose rather than being used as unqualified design rules.</p>",
                    sources: [
                        { id: "HYDR626-00062", set: 8, question: 65 },
                        { id: "HYDR626-00283", set: 31, question: 60 },
                        { id: "HYDR626-00284", set: 31, question: 61 },
                        { id: "HYDR626-00285", set: 31, question: 62 },
                        { id: "HYDR626-00310", set: 33, question: 66 }
                    ]
                },
                {
                    id: "power-operational-and-environmental-limits",
                    title: "Renewable generation still has losses, constraints and impacts",
                    html: "<p><strong>Hydropower is not inherently an uninterrupted source.</strong> Seasonal low flows, drought, sediment shutdowns, equipment outages and grid restrictions affect delivery. Reservoir storage can improve scheduling and reliability but remains finite. The bank's continuity limitation is reasonable; the other offered advantages still need qualified wording.</p>" +
                        "<p><strong>No standby losses</strong> is too absolute. Hydro avoids the fuel-burning standby losses of a hot thermal plant, but station auxiliaries, energized transformers, rotating equipment, leakage and reservoir evaporation or seepage can still consume energy or reduce future generation. State whether a loss is electrical, hydraulic or a loss of stored water; do not call all of them zero merely because the plant burns no generating fuel.</p>" +
                        "<p>Hydraulic generation produces no combustion smoke or ash at the turbine, yet reservoir inundation, habitat change, fish-passage disruption, altered sediment transport, reduced bypass flows and rapid hydropeaking can have important effects. Reservoir greenhouse-gas emissions and construction impacts can also matter. <strong>Micro capacity is not a guarantee of negligible local impact</strong>: a small diversion can be significant relative to a small stream.</p>" +
                        "<p>DOE's environmental-flow terminology includes <strong>quantity, timing and quality</strong> of water needed downstream. These are operating considerations, not a fixed release percentage invented by these notes. Required releases, environmental ramp constraints and mitigation can alter usable discharge and the value of a storage or peaking alternative.</p>" +
                        "<p>Likewise, benefits such as irrigation and flood moderation make a project multipurpose only where deliberately incorporated into its design and operation. They are not universal characteristics of every plant. Long-lived equipment can still deteriorate and lose efficiency; maintenance performance, environmental management and reliable dispatch must be evaluated rather than inferred from the words clean, renewable or multipurpose.</p>",
                    sources: [
                        { id: "HYDR626-00002", set: 2, question: 61 },
                        { id: "HYDR626-00306", set: 33, question: 62 },
                        { id: "HYDR626-00304", set: 33, question: 60 },
                        { id: "HYDR626-00279", set: 1, question: 67 },
                        { id: "HYDR626-00308", set: 33, question: 64 }
                    ]
                }
            ],
            gaps: [
                "The source-free power-incremental-capacity-example is an official-syllabus extension. No assigned question supplies a complete set of hydraulic alternatives, deliverable energy series, time-valued prices, costs or discounting assumptions. Its three capacities, energy totals, annualized costs and Rs6/kWh price are explicitly added teaching data, not a project optimum or actual tariff.",
                "The source-free power-reservoir-continuity-and-routing is an official-syllabus extension. No chronological inflows, stage-storage curves, outlet ratings, operating limits or initial/final levels are supplied for a complete reservoir simulation. Its two-interval volume account is added, assumes the stated release/spill can be passed, and does not establish flood attenuation.",
                "The source-free power-mass-curve-storage-example is an official-syllabus extension. Its repeating 8,2,2,8 and 8,2,8,2 volume sequences are authored examples, not bank observations. Loss-free storage-yield sizing requires the explicit repeating-record and initial-storage assumptions; a real carry-over study must include losses, constraints and boundary-spanning droughts.",
                "The source-free power-rule-curves-and-operating-policy is an official-syllabus extension. No project rule curve, flood forecast, service-priority agreement, environmental-release schedule or machine/grid availability record is supplied. The framework invents no operating approval, legal threshold or site-specific release prescription.",
                "Several numerical inputs remain unresolved in the original bank: the ounce convention and release time in HYDR626-00071, efficiency in HYDR626-00299, mutually inconsistent head/discharge/output in HYDR626-00300, and the volume-versus-discharge interpretation in HYDR626-00301. Annualizing 84 GW and treating two months as 60 days also require the explicitly stated time and factor assumptions.",
                "The bank contains no complete joint record of usable flow, net head, efficiency, outages and grid acceptance from which actual firm power or annual production can be established. Q40 gives equivalent exceedance time, not guaranteed full output each year. DoED 2018's identified daily/lowest-flow-month reliability criterion must not be replaced with an unqualified annual Q90 rule.",
                "No spatial sediment survey, grain-size history, flow-weighted concentration record, compaction model or end-of-service criterion is supplied. The 60-year allowance is not a physical onset threshold for active-storage loss. The nine-billion-cubic-metre calculation retains literal annual 25% and 23% fractions of original gross storage, but those unusually large fractions still need source clarification before practical use.",
                "Head and size boundaries, reservoir minimum-pool terminology, effective flood-storage conventions and single/multipurpose classification need an identified publication or project definition. The bank's 0.5–1.5% depreciation range and universal lowest-cost/zero-loss claims are not verified Nepal accounting, tax or design requirements. Named reference editions and owner-published descriptions are study evidence, not certification of current code compliance."
            ],
            cautions: [
                {
                    html: "<p><strong>Conventional does not mean non-renewable or continuous.</strong> Natural-flow hydro is renewable and conventionally classified as established generation technology. Water is the intended conventional option among the listed choices; that does not establish its share of world generation. The two classification axes should not be collapsed.</p>",
                    sources: [
                        { id: "HYDR626-00001", set: 2, question: 60 },
                        { id: "HYDR626-00303", set: 33, question: 59 },
                        { id: "HYDR626-00227", set: 25, question: 63 }
                    ]
                },
                {
                    html: "<p><strong>Continuity and standby qualification:</strong> seasonal water availability and outages prevent an unconditional continuous-supply claim. Hydro avoids thermal fuel-burning standby losses, but auxiliary electricity, electrical losses, leakage and storage losses remain possible. The bank's no-standby-losses option is therefore also too absolute.</p>",
                    sources: [
                        { id: "HYDR626-00002", set: 2, question: 61 },
                        { id: "HYDR626-00306", set: 33, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Performance is not invariant:</strong> useful generator efficiency across a load range does not establish flat efficiency for every turbine. Wear, sediment abrasion and cavitation can reduce performance with age. The wrong-statement item has more than one faulty statement: both denial of rapid load response and immunity to aging are wrong. No combustion smoke or ash is not equivalent to no environmental impact; hydro-versus-tidal firm-power comparisons also need a defined scheme and schedule.</p>",
                    sources: [
                        { id: "HYDR626-00003", set: 2, question: 62 },
                        { id: "HYDR626-00304", set: 33, question: 60 }
                    ]
                },
                {
                    html: "<p><strong>Reliability and dispatch are conditional:</strong> complementary generation and reserves can improve reliability, but the most-reliable claim needs hydrology, outage and network evidence. High-variable-cost flexible units commonly serve peaks, not necessarily peaks only in every system. Base load describes sustained demand; it does not force every assigned plant to run continually at its full rating.</p>",
                    sources: [
                        { id: "HYDR626-00004", set: 2, question: 63 },
                        { id: "HYDR626-00006", set: 2, question: 65 },
                        { id: "HYDR626-00280", set: 30, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Firm/primary needs a delivery period and reliability basis.</strong> Minimum river flow is not always decisive when storage regulates releases. Include usable head, required releases, storage limits and availability. The bank's 100% available-flow wording cannot authorize total river diversion. DoED 2018 A2 section 9.1 uses a specific <strong>90% reliable average daily flow in the lowest-flow month</strong>, not a universal annual Q<sub>90</sub> definition or an automatic 24/7 guarantee.</p>",
                    sources: [
                        { id: "HYDR626-00005", set: 2, question: 64 },
                        { id: "HYDR626-00130", set: 15, question: 64 },
                        { id: "HYDR626-00226", set: 25, question: 62 },
                        { id: "HYDR626-00231", set: 25, question: 67 },
                        { id: "HYDR626-00281", set: 31, question: 58 }
                    ]
                },
                {
                    html: "<p><strong>Duration-axis units matter:</strong> a power-duration curve plotted against percentage exceedance gives energy only after scaling its area by <strong>T/100</strong>; a fraction axis needs T. Convert usable flow to power with the applicable head, efficiency and capacity restrictions. An FDC loses chronology and cannot alone establish reservoir reliability, customer diversity or delivered annual energy.</p>",
                    sources: [
                        { id: "HYDR626-00008", set: 2, question: 67 },
                        { id: "HYDR626-00131", set: 15, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Factor-definition conflict:</strong> LF = E/(P<sub>max</sub>T), CF = E/(CT), and UF = P<sub>max</sub>/C. <strong>CF = LF × UF</strong>; utilization is not capacity factor. LF can equal one. The 110/150 and 110/200 bank results are <strong>0.733333 and 0.55</strong>, with UF = 0.75. When peak equals capacity and generation is nonzero, <strong>CF/LF = 1</strong>. The utilization question's key is consistent, but its average/capacity explanation is not.</p>",
                    sources: [
                        { id: "HYDR626-00010", set: 3, question: 60 },
                        { id: "HYDR626-00132", set: 15, question: 66 },
                        { id: "HYDR626-00018", set: 3, question: 68 },
                        { id: "HYDR626-00233", set: 26, question: 62 }
                    ]
                },
                {
                    html: "<p><strong>Plant-use factor is not a maximum-power ratio:</strong> <strong>PUF = E/(Ct<sub>on</sub>)</strong> uses operating hours, while CF uses the whole period. Maximum utilized power divided by installed available power describes utilization. The stored plant-use label and its full-period capacity-factor explanation describe different quantities; the conventional utilization term is absent from the choices.</p>",
                    sources: [{ id: "HYDR626-00230", set: 25, question: 66 }]
                },
                {
                    html: "<p><strong>Peaking benefit is not off-peak receipts:</strong> unpeaked energy is <strong>480 MWh/day</strong>; peaked energy is <strong>420 MWh/day</strong>. Applying Rs12/Rs6 time-of-day tariffs to both gives revenues <strong>3.60 and 3.96 million Rs/day</strong>, so the increment is <strong>Rs360000/day</strong>, not the keyed Rs1080000. The latter is the peaked off-peak receipt, or an increment only under the separately added assumption that all unpeaked energy earns Rs6/kWh. That alternative tariff arrangement is unstated, and the schedules are not an energy-conserving shift at fixed head/efficiency.</p>",
                    sources: [{ id: "HYDR626-00011", set: 3, question: 61 }]
                },
                {
                    html: "<p><strong>Pondage terminology:</strong> Bondage is a typo for pondage, the intended short-term balancing storage. It is not a water level or necessarily a fixed number of hours for every plant. Daily balancing must restore the cycle's water account; pondage alone cannot demonstrate seasonal or multiyear drought regulation.</p>",
                    sources: [{ id: "HYDR626-00012", set: 3, question: 62 }]
                },
                {
                    html: "<p><strong>Missing time and capacity/peak definitions:</strong> <strong>84 GW × 0.60 × 8760 h = 441504 GWh = 441.504 TWh</strong> for the year requires a 365-day year and an appropriate peak/load-factor basis, or a capacity-factor interpretation if 84 GW is installed capacity. <strong>1000 MWh/1440 h = 0.694444 MW</strong> assumes two 30-day months. Actual dates or a different period change the result; neither time assumption is an exact statement of the original stem.</p>",
                    sources: [
                        { id: "HYDR626-00014", set: 3, question: 64 },
                        { id: "HYDR626-00016", set: 3, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Power units and gravity convention:</strong> the 423.5 − 2.5 m case gives <strong>421 m</strong> net head and <strong>3159.45765 kW</strong>. For 400 cumecs, 50 m and η = 0.8, g = 9.81 gives <strong>156.96 MW</strong>; 156.8 MW uses g = 9.8. For theoretical 100 m<sup>3</sup>/s at 75 m, the corresponding results are <strong>73.575 and 73.5 MW</strong>. Do not display 9.81 while claiming it exactly produces the 9.8 result, or confuse kW with MW.</p>",
                    sources: [
                        { id: "HYDR626-00015", set: 3, question: 65 },
                        { id: "HYDR626-00017", set: 3, question: 67 },
                        { id: "HYDR626-00302", set: 33, question: 58 }
                    ]
                },
                {
                    html: "<p><strong>The original unit is ounces:</strong> 400 ounces is not 400 cumecs. The ounce convention and release duration are missing, so the 50 m/0.8 data cannot produce a unique power. The explanation silently inserts a discharge of 400 m<sup>3</sup>/s; that is a different problem, not a justified unit conversion.</p>",
                    sources: [{ id: "HYDR626-00071", set: 9, question: 64 }]
                },
                {
                    html: "<p><strong>Missing efficiency:</strong> net head 90 m and Q = 10 m<sup>3</sup>/s supply <strong>8.829 MW hydraulic power</strong>. An 8 MW output requires an implied efficiency of approximately 90.61%, which the stem does not give. The closest-option argument cannot invent conversion losses or establish that the key is derived.</p>",
                    sources: [{ id: "HYDR626-00299", set: 32, question: 68 }]
                },
                {
                    html: "<p><strong>Upper Tamakoshi exercise has inconsistent givens:</strong> retain its <strong>56 m<sup>3</sup>/s</strong>, 822 m and 456 MW. Hydraulic input is <strong>451.57392 MW</strong> and required efficiency is <strong>100.9801%</strong>, which is impossible for the stated generating conversion. Neither 87.5% nor the later 98.7% is derived. The real project's separately reported 66 m<sup>3</sup>/s must not replace the printed 56; gross-head losses would worsen the original discrepancy.</p>",
                    sources: [{ id: "HYDR626-00300", set: 32, question: 69 }]
                },
                {
                    html: "<p><strong>Energy per volume is mis-scaled:</strong> η = 0.85 × 0.92 = 0.782 gives <strong>1150713 J = 0.3196425 kWh per m<sup>3</sup></strong> at 150 m, not 1150.7 kWh per m<sup>3</sup>. The latter energy scale needs <strong>1 m<sup>3</sup>/s for one hour, or 3600 m<sup>3</sup></strong>, an added assumption. One m<sup>3</sup> over one hour instead gives average power 0.3196425 kW. The explanation's first joule total is also arithmetically incorrect.</p>",
                    sources: [{ id: "HYDR626-00301", set: 33, question: 57 }]
                },
                {
                    html: "<p><strong>Head definitions depend on boundaries:</strong> ordinary reaction-plant gross head uses upstream and tailwater levels, not simply source-to-runner elevation. Pelton schemes need the appropriate nozzle/jet reference. Net/effective head deducts compatible waterway losses once, and available head can be a synonym. Matching rated and design head under one convention does not guarantee maximum annual plant efficiency across all heads and loads.</p>",
                    sources: [
                        { id: "HYDR626-00114", set: 14, question: 60 },
                        { id: "HYDR626-00207", set: 23, question: 63 },
                        { id: "HYDR626-00240", set: 26, question: 68 },
                        { id: "HYDR626-00219", set: 24, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Layout and grid functions:</strong> a surge tank is a connected branch, not a compulsory serial flow-through component between penstock and turbine. Trace it separately from the main waterway. Transmission lines carry bulk electrical output, with transformers and switchgear performing other necessary functions; transmission is not synonymous with local distribution. A dam is typical of impoundment, not mandatory for every diversion scheme.</p>",
                    sources: [
                        { id: "HYDR626-00124", set: 1, question: 62 },
                        { id: "HYDR626-00110", set: 13, question: 65 },
                        { id: "HYDR626-00241", set: 26, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Mass analysis is not flow-duration analysis.</strong> A chronological cumulative mass curve can reveal storage deficits; an FDC sorts flows and loses their sequence. Demand–supply assessment, reservoir simulation, rule curves and marginal cost–benefit comparisons all inform installed capacity. The keyed mass-analysis method is not uniquely sufficient, and maximizing operating hours alone is not economic optimization.</p>",
                    sources: [{ id: "HYDR626-00125", set: 15, question: 59 }]
                },
                {
                    html: "<p><strong>Classification boundaries need attribution:</strong> DoED 2018 uses low head <strong>&lt;50 m</strong>, not a universal &lt;15 m cutoff. DOE defines micro-hydro as <strong>up to 100 kW</strong>, including the boundary excluded by the bank's strict &lt;100 kW. These named conventions are not asserted Nepal statutory thresholds. A small rural installation can still have significant local flow and ecological impacts.</p>",
                    sources: [
                        { id: "HYDR626-00133", set: 15, question: 67 },
                        { id: "HYDR626-00134", set: 16, question: 61 },
                        { id: "HYDR626-00279", set: 1, question: 67 }
                    ]
                },
                {
                    html: "<p><strong>Do not confuse storage type with peak duty:</strong> Kulekhani I is seasonal storage, not peaking ROR; a storage plant can nevertheless generate during peaks. The dam-created reservoir description fits impoundment. DOE's generic most-common-impoundment statement supports the bank's broad answer, not an undated claim about Nepal's fleet or proof that all reservoirs have seasonal or multipurpose regulation.</p>",
                    sources: [
                        { id: "HYDR626-00225", set: 25, question: 61 },
                        { id: "HYDR626-00277", set: 30, question: 67 },
                        { id: "HYDR626-00288", set: 31, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Pumped-storage energy and machinery:</strong> pumping requires electrical input, and round-trip losses mean recovered pumping energy is smaller than that input. Reversible pump-turbines are common, not compulsory or exclusive; separate pump/turbine arrangements and bidirectional tidal machines exist. Tidal-range energy comes from the tide, not from assuming pumped water supplies free primary energy.</p>",
                    sources: [
                        { id: "HYDR626-00054", set: 7, question: 67 },
                        { id: "HYDR626-00224", set: 25, question: 60 },
                        { id: "HYDR626-00278", set: 30, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Storage is volume, not level.</strong> Bed-to-minimum-pool volume is dead storage only when that pool defines the relevant withdrawal boundary. Inactive, reserve-live and dead storage need not coincide. Surcharge lies between normal full and specified maximum flood levels; freeboard is not extra routine storage. Normal level is an operating definition, not a guarantee of no release regardless of gate settings.</p>",
                    sources: [
                        { id: "HYDR626-00026", set: 4, question: 67 },
                        { id: "HYDR626-00236", set: 26, question: 65 },
                        { id: "HYDR626-00235", set: 26, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>Purpose and flood-space ambiguity:</strong> a retarding basin is the intended passive flood-attenuation concept, but ungated outlets alone do not establish exclusive purpose. Irrigation with incidental benefits can be single-purpose; intentionally designed irrigation, flood and supply services make it multipurpose even with irrigation priority. Not all hydro plants are multipurpose. The effective-storage item mixes an operating band with a net detention convention that subtracts pre-existing valley storage; actual available flood space also depends on initial level, allocated zones and routing.</p>",
                    sources: [
                        { id: "HYDR626-00136", set: 16, question: 63 },
                        { id: "HYDR626-00137", set: 16, question: 64 },
                        { id: "HYDR626-00138", set: 16, question: 65 },
                        { id: "HYDR626-00208", set: 23, question: 64 },
                        { id: "HYDR626-00308", set: 33, question: 64 }
                    ]
                },
                {
                    html: "<p><strong>Slope does not uniquely locate deposits:</strong> steep reservoir geometry can contribute to sediment transport towards lower reaches, but grain size, inflow, density currents, reservoir shape, levels and outlet operation also control deposition. The steep-slope answer is a simplified tendency, not a universal sediment-distribution rule.</p>",
                    sources: [{ id: "HYDR626-00210", set: 23, question: 66 }]
                },
                {
                    html: "<p><strong>Lifetime needs a rate:</strong> reservoir capacity divided by total sediment volume is dimensionless. Years require a compatible <strong>net deposited volume per year</strong>, with trapping/passage and bulk-density assumptions stated. Complete filling is not automatically the end-of-service criterion, and a sediment ratio is not interchangeable with trap efficiency or a water capacity/inflow ratio.</p>",
                    sources: [{ id: "HYDR626-00234", set: 26, question: 63 }]
                },
                {
                    html: "<p><strong>60 years is an allowance calculation:</strong> interpreting o.1 as 0.1 million m<sup>3</sup>/year gives <strong>(30 × 0.20)/0.1 = 60 years</strong>. It does not establish that active-storage loss begins only after sixty years. Sediment can accumulate in active zones before the dead-storage volume is filled; rate, spatial distribution and the service criterion are additional requirements.</p>",
                    sources: [{ id: "HYDR626-00033", set: 5, question: 65 }]
                },
                {
                    html: "<p><strong>Reservoir-life key conflict:</strong> the 365-day river-sediment term is <strong>7686900 m<sup>3</sup>/year</strong>. Keeping the printed annual erosion/passage fractions on <strong>original gross storage</strong> gives <strong>7686900 + (0.25 − 0.23) × 9000000000 = 187686900 m<sup>3</sup>/year</strong>, and life <strong>47.9522 years, approximately 48</strong>, not 11.7. The unusual percentages need clarification, but silently changing their base or introducing a declining-storage percentage model would solve a different problem.</p>",
                    sources: [{ id: "HYDR626-00267", set: 29, question: 64 }]
                },
                {
                    html: "<p><strong>Cost and depreciation claims are qualified:</strong> no generating fuel purchase/transport explains hydro's usual low fuel-related operating cost, not universal lowest O&amp;M or zero life-cycle cost. The bank's <strong>0.5–1.5%</strong> depreciation range has no verified accounting or Nepal-tax basis here. A 50–100-year life under explicitly assumed straight-line depreciation and zero residual value gives <strong>1–2% per year</strong>. Accounting life, equipment aging and physical efficiency are different concepts.</p>",
                    sources: [
                        { id: "HYDR626-00062", set: 8, question: 65 },
                        { id: "HYDR626-00283", set: 31, question: 60 },
                        { id: "HYDR626-00284", set: 31, question: 61 },
                        { id: "HYDR626-00285", set: 31, question: 62 },
                        { id: "HYDR626-00310", set: 33, question: 66 }
                    ]
                },
                {
                    html: "<p><strong>Q<sub>40</sub> is not guaranteed annual full output:</strong> 40% of a 365-day year is <strong>146 equivalent days or 3504 hours</strong>, not necessarily consecutive days or a minimum attained each year. Environmental releases, head, efficiency, capacity, outages and grid acceptance remain relevant. The ideal full-output contribution at 100 MW is <strong>350.4 GWh</strong>; actual remaining production requires the rest of the flow/power record.</p>",
                    sources: [{ id: "HYDR626-00309", set: 33, question: 65 }]
                }
            ],
            references: [
                {
                    title: "DoED — Guidelines for Study of Hydropower Projects, 2018; head classification, A2 section 9.1 firm-energy criterion and A4 alternative optimization (edition-specific guidance)",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/guidelines-for-study-of-hydropower-projects-2018_iplnyqz.pdf"
                },
                {
                    title: "USACE — EM 1110-2-1420, Hydrologic Engineering Requirements for Reservoirs, 31 October 1997; sections 6-2, 11-1 and 12-11 on duration analysis, storage/sediment and sequential mass curves",
                    url: "https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-1420.pdf"
                },
                {
                    title: "US Department of Energy — Types of Hydropower Plants; impoundment, diversion, pumped storage and micro-hydro up to 100 kW",
                    url: "https://www.energy.gov/cmei/water/types-hydropower-plants"
                },
                {
                    title: "US Department of Energy — Glossary of Hydropower Terms; equipment functions, dispatch, storage and environmental-flow terminology",
                    url: "https://www.energy.gov/cmei/water/glossary-hydropower-terms"
                },
                {
                    title: "US Energy Information Administration — Glossary, Capacity factor; actual electrical energy divided by continuous-full-power energy for the same period",
                    url: "https://www.eia.gov/tools/glossary/index.php?id=C"
                },
                {
                    title: "Nepal Electricity Authority — Generation Directorate 2082/2083, 18th issue; plant-type table identifying Kaligandaki A/Marsyangdi peaking ROR and Kulekhani I seasonal storage",
                    url: "https://nea.org.np/uploads/shares/annual_report/Generation%20Directorate2082_%202083.pdf"
                },
                {
                    title: "Nepal Electricity Authority — Annual Report 2025/2026, UTKHPL description; actual-project daily peaking ROR, 456 MW, 822 m gross head and 66 m3/s, not replacement bank inputs",
                    url: "https://nea.org.np/uploads/shares/td_tender/A%20Year%20In%20Review%20Annual%20Report%202025_2026_compressed.pdf"
                },
                {
                    title: "Budhigandaki Jalbidhyut Company Limited — Salient Features; owner-published design storage zones, active-storage loss and firm-output daily schedules, not a new operating approval",
                    url: "https://bgjcl.com/pages/salient-features"
                }
            ]
        }
    });
})();