(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0901: {
            code: "ACiE0901",
            questionCount: 39,
            blocks: [
                {
                    id: "planning-transport-system-and-feeders",
                    title: "A transport system combines infrastructure, vehicles and operations",
                    html: "<p><strong>Transport planning concerns the movement of people and goods between activities.</strong> Mobility describes movement through the network; accessibility concerns reaching useful destinations. A fast road that bypasses every usable connection can provide mobility without solving a community's access problem. Evaluate the whole journey, including walking, transfers, waiting, terminal handling and the final delivery leg.</p>" +
                        "<table><thead><tr><th scope='col'>System component</th><th scope='col'>Examples and planning significance</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fixed infrastructure</th><td>Road formation, railway track, stations, airport runways and harbour facilities occupy sites and require capital investment, inspection and maintenance.</td></tr>" +
                        "<tr><th scope='row'>Moving equipment</th><td>A locomotive, truck, bus, aircraft or vessel carries or pulls the load. A locomotive is rolling stock, not fixed infrastructure merely because it follows a fixed track.</td></tr>" +
                        "<tr><th scope='row'>Operations</th><td>Scheduling, traffic management, loading, transfer arrangements and maintenance availability determine how effectively the physical assets provide service.</td></tr></tbody></table>" +
                        "<p><strong>Roads have a strong first- and last-mile advantage:</strong> they can collect dispersed passengers or freight and connect them to railway stations, airports and water terminals. Their branching networks and individually dispatched vehicles often make road transport more flexible than terminal-dependent modes. This is the comparative advantage intended by the bank, not proof that every doorstep is road-accessible or that every road service has an unrestricted route and timetable.</p>" +
                        "<p>Feeder is also a <strong>functional relationship</strong>: rail, boats, walking and cycling can feed other services. That broad meaning is different from the historical Nepal administrative category Feeder Road. A scheduled bus remains road transport even though its operator fixes its route and departure time.</p>" +
                        "<p><small>Scope: official ACiE0901 covers modes, Nepal's road-development history, road classification, surveys, alignment controls, alternatives and Nepal road standards. Citations identify the 39 assigned bank records; they do not endorse every stored explanation. The original questions, options, keys and ordering remain unchanged.</small></p>",
                    sources: [
                        { id: "TRAN808-00002", set: 2, question: 81 },
                        { id: "TRAN808-00004", set: 2, question: 83 },
                        { id: "TRAN808-00085", set: 9, question: 85 }
                    ]
                },
                {
                    id: "planning-mode-comparison",
                    title: "Select modes by the service required, not a universal cheapest-mode ranking",
                    html: "<p><em>Syllabus extension: comparison of transport modes beyond the bank's road-feeder and flexibility questions.</em> The following is an authored engineering comparison, not a measured modal-share inventory or a statement that every listed system operates at a particular location in Nepal.</p>" +
                        "<table><thead><tr><th scope='col'>Mode</th><th scope='col'>Useful capability</th><th scope='col'>Constraint to investigate</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Road</th><td>Dispersed access, adaptable vehicle sizes and direct passenger or freight journeys.</td><td>Congestion, crash exposure, axle loading, land take, gradients and maintenance of many links.</td></tr>" +
                        "<tr><th scope='row'>Rail</th><td>High passenger or freight throughput on concentrated corridors when demand and operations support it.</td><td>Track and terminal investment, relatively restrictive alignment, transfer costs and the need for connecting access.</td></tr>" +
                        "<tr><th scope='row'>Water</th><td>Movement of substantial bulk loads on suitable navigable routes.</td><td>Depth, channel continuity, seasonal flows, port handling and slower door-to-door journeys; a river is not automatically navigable.</td></tr>" +
                        "<tr><th scope='row'>Air</th><td>Rapid long-distance or time-critical movement and access across major surface barriers.</td><td>Airport access, weather, payload, operating cost and terminal time; short flight time is not total journey time.</td></tr>" +
                        "<tr><th scope='row'>Ropeway or cable transport</th><td>Crossing steep terrain with a relatively narrow ground footprint between terminals.</td><td>Terminal access, capacity, wind exposure, power supply, inspection and evacuation arrangements.</td></tr>" +
                        "<tr><th scope='row'>Pipeline</th><td>Continuous movement of suitable liquids, gases or prepared slurries.</td><td>Product suitability, pumping energy, pressure control, leakage and a fixed origin-destination system; not general passenger transport.</td></tr>" +
                        "<tr><th scope='row'>Walking and cycling</th><td>Local access and connections to public transport with little propulsion energy use.</td><td>Distance, gradient, safe crossings, continuity, weather and accessible provision for people with different abilities.</td></tr></tbody></table>" +
                        "<p>Compare <strong>door-to-door cost, time, reliability, capacity, safety and environmental effects</strong> on the same passenger or freight task. A cheap main haul can lose its advantage through costly transfers. Conversely, a road connection to a high-capacity mode may outperform a road-only expansion. State load, distance, service frequency and utilisation before claiming one mode has the lowest unit cost.</p>",
                    sources: []
                },
                {
                    id: "planning-nepal-road-history",
                    title: "Separate a road's undertaking, opening, upgrading and designation",
                    html: "<p><strong>Tribhuvan Highway is the intended oldest highway among the bank's four choices.</strong> The directly read JICA <em>Data Collection Survey on Thankot Area Road Improvement in Nepal, Final Report</em>, section 1.2, printed page 1-1, provides a precise historical anchor: the long-distance Kathmandu-Terai road undertaking began in <strong>1953 with Indian assistance</strong>, and the <strong>115 km Thankot-Bhainse Tribhuvan Road section opened to traffic in 1956</strong>.</p>" +
                        "<p>These facts answer different questions. <strong>1953 is the undertaking/start date; 1956 is the opening date; 115 km is the identified section length.</strong> It is not the measured length of every later extent called Tribhuvan Highway. The bank's Naubise-Birgunj description does not identify the same historical endpoints and must not replace Thankot-Bhainse when citing this passage. Calling this a first highway also does not imply that Nepal had no earlier trails, local roads or transport activity.</p>" +
                        "<p>Road development continues after opening. Improvements may strengthen pavement, replace crossings, stabilise slopes, increase capacity or provide a different alignment. JICA's same report reviews a <strong>2001 Kathmandu-Naubise feasibility study</strong> and a <strong>2013 DoR tunnel-road study</strong>. Those reviews illustrate a later shift from obtaining basic connectivity to comparing better routes, traffic performance and hazard reduction. A proposal described in a historical study is not evidence that it was subsequently built.</p>" +
                        "<p>Build a defensible chronology using <strong>event, date, geographical extent and source</strong>. Keep road opening separate from standard publication, administrative renumbering and later upgrading. No present national road-length total, completed-project inventory or current traffic condition is inferred from these historical passages.</p>",
                    sources: [{ id: "TRAN808-00087", set: 9, question: 87 }]
                },
                {
                    id: "planning-nepal-standards-history-and-use",
                    title: "Identify the Nepal standard, edition, scope and engineering purpose",
                    html: "<p><em>Syllabus extension: development and use of Nepal road standards.</em> The inspected government-hosted <strong>Nepal Road Standard 2070, July 2013</strong>, identifies itself as the second official revision of NRS 2027. Its introduction supplies the following chronology; these are standard-development milestones, not road-opening dates.</p>" +
                        "<table><thead><tr><th scope='col'>Year</th><th scope='col'>Event reported in NRS 2013</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1970 / BS 2027</th><td>Initial introduction of NRS by the Department of Roads.</td></tr>" +
                        "<tr><th scope='row'>1988 / BS 2045</th><td>Revision of the standard.</td></tr>" +
                        "<tr><th scope='row'>1994 / BS 2051 and 1997</th><td>Minor revisions treated separately rather than as a new official version of NRS 2027.</td></tr>" +
                        "<tr><th scope='row'>2013 / BS 2070</th><td>The identified second official revision used for the historical classifications in these notes.</td></tr></tbody></table>" +
                        "<p><strong>Scope must be read before a table.</strong> Section 1(a) addresses strategic roads in rural areas and directs local and urban roads to separate standards. Section 2 has broader wording about roads in Nepal, mostly non-urban. Do not erase that distinction by applying every rural table to an urban street. <strong>Nepal Urban Road Standard 2076, NURS</strong>, is a separately identified document; <strong>NRRS, the rural-road-standard acronym, is not another spelling of NURS</strong>.</p>" +
                        "<p>A geometric standard guides route geometry and cross-sections. Construction specifications govern workmanship, materials and acceptance; pavement guidance addresses structural design; bridge standards, traffic manuals and safety guidance have their own subjects. NRS itself refers to these other instruments. A right-of-way design table is also not proof of the legally acquired limits of an individual parcel.</p>" +
                        "<p>Record document title, edition, clause, units, road category and any approved departures in a project's design basis. <strong>These historical educational notes do not certify the latest edition, current law, full code compliance, land rights or construction approval.</strong> A newer website upload date does not revise the engineering edition printed in a document.</p>",
                    sources: []
                },
                {
                    id: "planning-road-labels-and-classification-axes",
                    title: "A street, a national highway and a design class describe different attributes",
                    html: "<p><strong>Always identify what a classification is classifying.</strong> A road can have an administrative designation, a technical design class, an urban function and a surface type at the same time. Those descriptions need not form one interchangeable hierarchy.</p>" +
                        "<table><thead><tr><th scope='col'>Classification axis</th><th scope='col'>Question answered</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Setting or everyday description</th><td>Is it a street in a built-up area, a rural connection or a circumferential route? These terms describe context or network form.</td></tr>" +
                        "<tr><th scope='row'>Administrative</th><td>What importance and management category has the road been assigned under the identified system?</td></tr>" +
                        "<tr><th scope='row'>Technical/design</th><td>Which geometric and traffic-capacity criteria are being adopted for the design?</td></tr>" +
                        "<tr><th scope='row'>Urban functional</th><td>How should through movement, traffic distribution and direct property access be balanced?</td></tr>" +
                        "<tr><th scope='row'>Surface or service condition</th><td>What surfacing exists and how reliably can the route operate? Surfacing alone does not establish administrative importance.</td></tr></tbody></table>" +
                        "<p><strong>Street</strong> is reasonable elementary terminology for a road in a town or city. It does not imply that every urban road carries only slow local traffic. A ring road describes a circumferential network role and may pass through developed areas; it is not necessarily entirely outside the built-up area. A highway can also traverse an urban area.</p>" +
                        "<p>The bank's <strong>country road</strong> choice assumes a rural context. Merely connecting two towns cannot uniquely identify that category: a national highway or another designated road may connect the same towns. Specify the setting and classification system rather than deriving legal or geometric status from two endpoints.</p>",
                    sources: [
                        { id: "TRAN808-00001", set: 2, question: 80 },
                        { id: "TRAN808-00083", set: 1, question: 80 }
                    ]
                },
                {
                    id: "planning-administrative-classes-and-route-codes",
                    title: "Read H and F numbering as the historical NRS 2013 scheme",
                    html: "<p><strong>NRS 2013 section 3 separates administrative classification from technical classification.</strong> Administrative categories describe national importance, overall management and financing responsibility in that edition's institutional setting. They are not selected solely by measuring today's carriageway width.</p>" +
                        "<table><thead><tr><th scope='col'>Historical category</th><th scope='col'>Network role in NRS 2013</th><th scope='col'>Specified designation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>National Highway</th><td>Major nationwide connections serving substantial long-distance movement.</td><td><strong>H followed by two digits.</strong></td></tr>" +
                        "<tr><th scope='row'>Feeder Road</th><td>Important more localised connections linking headquarters and economic or tourism centres with highways or other feeders.</td><td><strong>F followed by three digits.</strong></td></tr>" +
                        "<tr><th scope='row'>District Road</th><td>Connections within a district between production areas, markets and the wider road system.</td><td>A separate administrative category; not the feeder F designation.</td></tr>" +
                        "<tr><th scope='row'>Urban Road</th><td>Roads serving urban municipalities.</td><td>Not itself one of the four urban functional labels.</td></tr></tbody></table>" +
                        "<p>The edition groups national highways and feeders in the <strong>Strategic Roads Network</strong>, and district and urban roads in the <strong>Local Roads Network</strong>. Retain the date: this is not a certification of present federal, provincial or local responsibilities. Similarly, do not mechanically convert an old H code into a later NH code by adding a letter; the route register, number and geographical extent require their own dated verification.</p>" +
                        "<p><strong>Bank defects:</strong> the national-highway item has damaged option text reading If followed, where the intended historical designation is H followed by two digits. The administrative-category item prints Greater Roads, which is not one of the listed NRS categories, and its explanation incorrectly assigns D to feeder roads. Its all-of-the-above key is therefore not defensible literally. No option is silently rewritten here.</p>" +
                        "<p>The H/F provisions are on <strong>printed page 2, PDF page 9</strong> of the inspected NRS copy. Distinguish those two pagination systems when locating the bank's feeder-road reference.</p>",
                    sources: [
                        { id: "TRAN808-00116", set: 12, question: 82 },
                        { id: "TRAN808-00117", set: 12, question: 83 },
                        { id: "TRAN808-00118", set: 12, question: 84 }
                    ]
                },
                {
                    id: "planning-technical-classes-and-forecast-horizon",
                    title: "Technical class uses forecast daily traffic twenty years after completion",
                    html: "<p><strong>NRS 2013 section 3 gives technical/functional Classes I-IV for assigning design parameters.</strong> Section 4.2 places the forward traffic horizon <strong>20 years after completion of the works</strong>. The class criterion is an estimated daily traffic volume at that horizon, not the cumulative number of vehicles travelling during twenty years.</p>" +
                        "<table><thead><tr><th scope='col'>Class</th><th scope='col'>Printed forecast ADT band, PCU/day</th><th scope='col'>Plain-terrain design speed, km/h</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>I</th><td>20,000 or more</td><td>120</td></tr>" +
                        "<tr><th scope='row'>II</th><td>5,000-20,000</td><td>100</td></tr>" +
                        "<tr><th scope='row'>III</th><td>2,000-5,000</td><td>80</td></tr>" +
                        "<tr><th scope='row'>IV</th><td>Less than 2,000</td><td>60</td></tr></tbody></table>" +
                        "<p>Class I is described with divided carriageway and access control. The speed column above comes from the <strong>main Table 7-1</strong>, applies to plain terrain only and is not a posted speed limit. Other terrain columns differ. The class designation, number of lanes and detailed capacity checks must be considered together rather than treating a traffic-band label as a completed design.</p>" +
                        "<p><strong>Preserve the printed endpoint ambiguity.</strong> Adjacent bands share 5,000 and 20,000 in their written ranges; the main Class I wording explicitly includes 20,000, while the annex summary uses a strict greater-than sign. The text does not provide a clean exclusive rule for every shared endpoint. Do not invent one, or round a forecast across a boundary to hide the issue. Class IV explicitly excludes 2,000.</p>" +
                        "<p>The standard says <strong>ADT</strong>; the bank's AOT text is damaged, and its explanations should not automatically substitute AADT without an annualisation basis. Table 3-1's administrative/technical correlations are expressly approximate: a National Highway is not universally Class I. This twenty-year geometric-capacity perspective is also <strong>not automatically the design life of every pavement, bridge or economic appraisal</strong>.</p>",
                    sources: [
                        { id: "TRAN808-00119", set: 12, question: 85 },
                        { id: "TRAN808-00120", set: 12, question: 86 },
                        { id: "TRAN808-00121", set: 12, question: 87 }
                    ]
                },
                {
                    id: "planning-nurs-urban-hierarchy",
                    title: "NURS 2076: Path, Sadak, Marg and Upa-Marg have distinct functions",
                    html: "<p><strong>The urban names are verified, not left on an OCR hold.</strong> Visual inspection of the government-hosted <strong>Nepal Urban Road Standard 2076, section 1.4, printed pages 2-4 / PDF pages 10-12</strong>, establishes the following hierarchy. The scan's classification list and accompanying functional descriptions support these pairings.</p>" +
                        "<table><thead><tr><th scope='col'>Urban class</th><th scope='col'>Name in NURS 2076</th><th scope='col'>Functional emphasis</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Arterial</th><td><strong>Path</strong></td><td>Principal continuous routes for through movement and major intra-urban connections, with roadside activities and crossings managed.</td></tr>" +
                        "<tr><th scope='row'>Sub-arterial</th><td><strong>Sadak</strong></td><td>Somewhat less mobility emphasis than an arterial and relatively greater emphasis on access to adjoining areas.</td></tr>" +
                        "<tr><th scope='row'>Collector</th><td><strong>Marg</strong></td><td>Collects and distributes local-road traffic to and from arterial or sub-arterial routes, while also serving adjoining properties.</td></tr>" +
                        "<tr><th scope='row'>Local</th><td><strong>Upa-Marg / Upamarg</strong></td><td>Primarily access to residences, businesses and other abutting property; many trips begin or end along the road.</td></tr></tbody></table>" +
                        "<p><strong>Movement and access are competing design demands.</strong> Frequent driveways, loading and crossing movements can interrupt through flow. Local streets need convenient access, while an arterial needs a coherent movement function alongside safe provision for people who walk, cycle or transfer to public transport. A functional label does not remove those users from the planning problem.</p>" +
                        "<p><strong>Explicit bank correction:</strong> Model 3, Q82 keys Marga for arterial and supplies an incorrect four-name mnemonic. Under the verified NURS 2076 text, <strong>arterial is Path</strong>, the offered option B; Marg belongs to collector roads. Its stem says <strong>NRRS</strong>, a different, rural-standard acronym, so this is also a document-attribution defect. NURS must not be silently renamed NRRS to make the stem appear sound. The stored question and key are retained, with this correction in the notes.</p>" +
                        "<p>Sub-arterial is consequently an urban functional category in this context. The inspected names do not establish current urban land-acquisition boundaries or make every typical section drawing an automatically approved road design.</p>",
                    sources: [
                        { id: "TRAN808-00014", set: 3, question: 82 },
                        { id: "TRAN808-00084", set: 9, question: 84 }
                    ]
                },
                {
                    id: "planning-traffic-data-and-forecast-example",
                    title: "Keep counted vehicles, PCU, annualisation and growth assumptions separate",
                    html: "<p><em>Syllabus extension: an authored traffic-planning calculation.</em> No assigned question supplies the raw counts, seasonal factors or growth series needed for a complete forecast. All numerical inputs below are <strong>hypothetical</strong>, not recovered bank givens or prescribed Nepal growth rates.</p>" +
                        "<p><strong>ADT = total counted traffic / number of observed whole days.</strong> A short-period average is not automatically AADT, the daily average over a full year. Representative annualisation needs justified day-of-week and seasonal treatment, or sufficiently complete annual observations. Record count location, directions, vehicle classes, dates, missing periods and whether motorcycles or non-motorised movements were included.</p>" +
                        "<p>For geometric analysis, a classified count can be expressed as <strong>D<sub>PCU</sub> = Σ(n<sub>i</sub>p<sub>i</sub>)</strong>, where n<sub>i</sub> is vehicles/day in class i and p<sub>i</sub> is the adopted PCU/vehicle factor. The result is PCU/day, not vehicles/day. Document the factor source and conditions. PCU expresses traffic-stream equivalence; it is <strong>not an axle-load damage factor or a cumulative pavement loading unit</strong>.</p>" +
                        "<p>With an explicitly assumed constant annual growth fraction r and an opening-year demand D<sub>open</sub>, a simple scenario is <strong>D<sub>20</sub> = D<sub>open</sub>(1 + r)<sup>20</sup></strong>. Suppose D<sub>open</sub> = 3,000 PCU/day. At r = 0.03, the forecast is approximately <strong>5,418 PCU/day</strong>, within the interior of the historical Class II band. At r = 0.02 it is approximately <strong>4,458 PCU/day</strong>, within Class III. The changed classification reflects a changed assumption, not a measured future fact.</p>" +
                        "<p>If the count predates opening, also forecast from the survey year to completion; do not start NRS's twenty-year clock on the survey date. Investigate background growth, diversion from other routes, generated demand, land-use change and competing projects without double-counting them. Test capacity and peak-direction conditions as well as the daily total.</p>",
                    sources: []
                },
                {
                    id: "planning-terrain-cross-slope",
                    title: "Terrain cross-slope is not road gradient or pavement camber",
                    html: "<p><strong>NRS 2013 Table 6-1 classifies natural terrain across the alignment.</strong> If Δz is the magnitude of elevation difference and d is the horizontal distance over a representative transverse ground line, <strong>s = 100|Δz|/d</strong> gives percent cross-slope. It does not give an angle in degrees; the corresponding angle is obtained from tan θ = s/100.</p>" +
                        "<table><thead><tr><th scope='col'>Terrain</th><th scope='col'>Percent cross-slope boundary</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Plain</th><td><strong>0 ≤ s ≤ 10</strong></td></tr>" +
                        "<tr><th scope='row'>Rolling</th><td><strong>10 &lt; s ≤ 25</strong></td></tr>" +
                        "<tr><th scope='row'>Mountainous</th><td><strong>25 &lt; s ≤ 60</strong></td></tr>" +
                        "<tr><th scope='row'>Steep</th><td><strong>s &gt; 60</strong></td></tr></tbody></table>" +
                        "<p><strong>Exactly 10% is plain, not rolling.</strong> The bank's abbreviated 10-25% rolling label needs the strict lower boundary printed in the standard. Likewise, 25% belongs to rolling and 60% to mountainous terrain. A hypothetical transverse rise of 3 m over 20 m horizontal distance gives 15%, hence rolling terrain; these are illustrative measurements, not a supplied project survey.</p>" +
                        "<p><strong>Three slopes have different jobs:</strong> terrain cross-slope describes the site; longitudinal road gradient describes the road's rise or fall along its route; pavement crossfall drains water across the constructed surface. A road with a modest longitudinal gradient can cross very steep natural terrain. Calling the ground rolling does not prescribe a 10-25% pavement camber.</p>" +
                        "<p>Terrain and road class jointly influence design speed and geometry. For example, the main NRS 2013 Table 7-1 gives <strong>80 km/h for Class II in rolling terrain</strong>, rather than its 100 km/h plain-terrain value. This is an edition-specific design input, not driving permission. NRS's representative-terrain treatment of short variations does not justify ignoring a short hazardous slope, gully or unstable crossing in site design.</p>",
                    sources: [
                        { id: "TRAN808-00093", set: 10, question: 83 },
                        { id: "TRAN808-00180", set: 17, question: 89 }
                    ]
                },
                {
                    id: "planning-data-to-decisions",
                    title: "Factual data become useful only through an explicit analysis",
                    html: "<p><strong>Planning needs both evidence and reasoning.</strong> Data describe observed or recorded conditions; analysis checks their quality, interprets patterns, compares options and projects consequences under stated assumptions. A large spreadsheet is not a plan, and a precise forecast without a defensible baseline is not reliable evidence.</p>" +
                        "<ul><li><strong>Network inventory:</strong> map existing links, widths, surfacing, bridges, condition, seasonal closures, maintenance responsibilities and missing connections. Distinguish usable roads from planned lines.</li><li><strong>Demand and activity:</strong> collect classified traffic, origins and destinations, travel time, freight activity, population and land use. A traffic count gives volume at a point; it does not by itself reveal every trip's destination or willingness to divert.</li><li><strong>Physical feasibility:</strong> relate topography, drainage, geology, material sources, utilities and hazards to construction and long-term operation.</li><li><strong>People and environment:</strong> identify settlements, access needs, sensitive sites, livelihoods, severance and affected land. Consultation can expose uses and seasonal problems absent from maps.</li><li><strong>Costs and resources:</strong> establish quantities, unit-rate basis, maintenance needs, implementation capacity and funding constraints on a common date and price basis.</li></ul>" +
                        "<p>Keep <strong>observation, assumption and recommendation</strong> visibly separate. An observed closure is evidence; an assumed future closure frequency is a model input; recommending a bypass is a decision that must be justified against alternatives. Record provenance, dates, spatial coverage, units, missing observations and uncertainty so another engineer can reproduce the reasoning.</p>" +
                        "<p>Begin with a problem statement such as unreliable market access or a hazardous bottleneck, rather than assuming that more road kilometres are the objective. Define measurable service outcomes, develop alternatives including improvement of existing assets, and revisit the analysis when new survey or consultation evidence changes the comparison.</p>",
                    sources: [{ id: "TRAN808-00103", set: 11, question: 82 }]
                },
                {
                    id: "planning-study-families-and-phasing",
                    title: "Four study families are not four successive survey stages",
                    html: "<p><strong>The bank groups planning surveys into economic, traffic, engineering and financial studies.</strong> This is a useful four-part teaching taxonomy, not an independently verified universal NRS rule that every study report must contain exactly four investigations. Environmental and social work must not disappear because it is not a separate name in that mnemonic.</p>" +
                        "<table><thead><tr><th scope='col'>Study family</th><th scope='col'>Decision it informs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Economic</th><td>What development or access problem exists, and do the benefits justify the real resources consumed compared with alternatives?</td></tr>" +
                        "<tr><th scope='row'>Traffic</th><td>Who will use the network, where will trips go, and what present and future service and capacity are needed?</td></tr>" +
                        "<tr><th scope='row'>Engineering</th><td>Which routes and standards are feasible, what works and quantities are required, and which hazards or constructability constraints control them?</td></tr>" +
                        "<tr><th scope='row'>Financial</th><td>How much funding is required, when is it needed, and can capital works and continuing maintenance be afforded?</td></tr></tbody></table>" +
                        "<p>A planning programme can move from <strong>assessment of the existing network and service deficits</strong>, through alternative development and a master plan, to prioritisation and phased implementation. A five-year programme is one scheduling framework, not a physical law determining every road's design horizon. Check dependencies: a new link may have little value until its crossing and terminal connections also exist.</p>" +
                        "<p><strong>Financial appraisal is part of planning; actual financing transactions are implementation activities.</strong> Negotiating a loan or releasing a construction payment is different from estimating affordability. The bank's financing-excluded choice can only represent that narrow distinction; a master plan that ignores funding and maintenance resources is incomplete. Its own four-study list includes financial studies.</p>" +
                        "<p>Stage capacity additions where practicable, but protect essential alignment requirements early. NRS 2013 section 2 warns that geometric deficiencies can be expensive or impossible to rectify later. Phasing construction is not permission to knowingly create an unsafe alignment and assume later widening will cure it.</p>",
                    sources: [
                        { id: "TRAN808-00086", set: 9, question: 86 },
                        { id: "TRAN808-00095", set: 10, question: 85 }
                    ]
                },
                {
                    id: "planning-survey-sequence",
                    title: "Survey effort increases as alternatives narrow",
                    html: "<p><strong>The conventional engineering-survey sequence is map study, reconnaissance, preliminary survey, then final location and detailed survey.</strong> It spends inexpensive effort screening broad choices before committing expensive measurements to a selected route. These four stages are different from the four planning-study families.</p>" +
                        "<table><thead><tr><th scope='col'>Stage</th><th scope='col'>Main task</th><th scope='col'>Decision or output</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Map study</th><td>Review terrain, settlements, network connections, drainage and known constraints using existing information.</td><td>Candidate corridors and a list of uncertainties requiring field checks.</td></tr>" +
                        "<tr><th scope='row'>Reconnaissance</th><td>Inspect plausible corridors and major control points; check whether map-based assumptions survive field observation.</td><td>Screened alternatives, risk observations and a targeted investigation programme.</td></tr>" +
                        "<tr><th scope='row'>Preliminary survey</th><td>Establish suitable control, measure shortlisted routes and develop topographic, ground, drainage and cost information.</td><td>Comparable plans, profiles and estimates supporting a preferred alternative.</td></tr>" +
                        "<tr><th scope='row'>Final location and detailed survey</th><td>Fix and reference the selected alignment, resolve detailed site information and develop design measurements.</td><td>Coordinated survey records, setting-out information and inputs to detailed design.</td></tr></tbody></table>" +
                        "<p>The sequence expresses <strong>decision maturity, not an absolute ban on revisiting earlier work</strong>. A newly discovered unstable slope can require a return to corridor comparison; a changed crossing location can require additional preliminary survey. Inspection, hydrology and ground investigation continue as the project develops.</p>" +
                        "<p>Final location does not mean that every design or statutory approval has been obtained. Survey control must be checked and recoverable, observations must be traceable, and unresolved areas must remain identified. Carrying an uncertain map assumption into a drawing with more decimal places does not turn it into a measured fact.</p>",
                    sources: [
                        { id: "BASI674-00431", set: 33, question: 11 },
                        { id: "TRAN808-00091", set: 10, question: 81 }
                    ]
                },
                {
                    id: "planning-map-study-and-route-narrowing",
                    title: "Narrow the search area without inventing fixed corridor widths",
                    html: "<p><strong>Route location moves from a broad transport problem to a precisely defined alignment.</strong> Start with the places to connect and the demand to serve. Screen broad passages through the terrain, compare more focused route strips and then develop the horizontal and vertical line. Several plausible choices should remain open until the evidence distinguishes them.</p>" +
                        "<ul><li><strong>Read maps critically:</strong> contours reveal ridges, saddles, valleys and possible crossing approaches, but map scale and elevation accuracy limit how confidently gradients and earthworks can be inferred.</li><li><strong>Overlay constraints:</strong> include landslides, floodplains, settlements, cultural sites, protected areas, utilities and possible material or spoil-disposal sites. Absence from an old map is not proof of absence on the ground.</li><li><strong>Test continuity:</strong> a favourable local segment is not a viable route unless it joins adjacent segments with workable gradients, curves, drainage and crossings.</li><li><strong>Retain alternatives:</strong> compare different sides of a valley, pass locations, crossing sites and existing-road improvements before narrowing to one detailed line.</li></ul>" +
                        "<p><strong>Terminology hold:</strong> the bank stores Region → Corridors → Bands → Route Strips → Alignments. The research audit flags a possible Bands/Corridors reversal relative to another teaching convention, but the intended authoritative glossary has not been established. Neither that proposed replacement nor the stored order is presented as an NRS prescription.</p>" +
                        "<p>Region, band, corridor and route strip are <strong>search-area labels whose definitions must be stated by the study</strong>. No universally fixed widths or areas are established by the assigned material. The dependable lesson is progressive spatial refinement, explicit alternatives and evidence-based rejection, not guessing an exact width from the word corridor.</p>",
                    sources: [{ id: "TRAN808-00101", set: 11, question: 80 }]
                },
                {
                    id: "planning-reconnaissance-and-progressive-ground-study",
                    title: "Reconnaissance checks feasibility; ground investigation continues beyond it",
                    html: "<p><strong>Reconnaissance is the initial field appraisal of candidate routes.</strong> It checks maps against reality and identifies costly or hazardous features before a dense survey is commissioned. Observe slope condition, drainage paths, flood evidence, crossing approaches, settlements, existing access, utilities and construction-material opportunities.</p>" +
                        "<p>A dry streambed during one visit does not establish negligible flood flow. A vegetated hillside does not establish stability, and exposed rock does not establish a sound rock mass. Record visible scarps, cracks, seepage, debris deposits and erosion, relate them to terrain and local accounts, and distinguish observation from an untested interpretation. Seasonal consultation is useful but does not replace hydrological or geotechnical analysis.</p>" +
                        "<p><strong>The bank associates soil survey with preliminary survey.</strong> That is a reasonable stage for systematic comparative sampling, material assessment and laboratory investigation of shortlisted routes. It must not be interpreted as saying that reconnaissance has no ground observations or that detailed design needs no further ground investigation.</p>" +
                        "<ul><li><strong>Early appraisal:</strong> use available geological information, exposures and reconnaissance to identify likely problems and investigation targets.</li><li><strong>Preliminary comparison:</strong> investigate soil and rock variability, material availability, groundwater and likely construction behaviour sufficiently to compare routes.</li><li><strong>Detailed investigation:</strong> resolve the conditions controlling cuts, fills, retaining works, pavements, crossings and tunnel portals at the selected locations.</li><li><strong>Construction feedback:</strong> compare exposed ground with the design assumptions and obtain the appropriate engineering review when conditions differ.</li></ul>" +
                        "<p>The proper output is not simply site inspected. It is a documented finding, its location and reliability, its effect on alternatives, and the additional evidence required to make the next decision.</p>",
                    sources: [
                        { id: "TRAN808-00092", set: 10, question: 82 },
                        { id: "TRAN808-00003", set: 2, question: 82 }
                    ]
                },
                {
                    id: "planning-survey-control-and-primary-traverse",
                    title: "Control makes measurements comparable and the selected road recoverable",
                    html: "<p><strong>A primary traverse provides a horizontal reference framework for subsequent detail survey.</strong> Establishing that framework is the conventional initial field operation intended by the preliminary-survey question. It follows earlier planning and reconnaissance; it is not the first activity in the entire road-development process.</p>" +
                        "<p>Define the coordinate reference system, grid orientation, distance treatment and height datum before combining observations. Preserve stable control marks outside likely construction disturbance and document how they can be recovered. A total station or GNSS observation is not self-validating: instrument checks, occupation geometry, transformations, redundancy and independent checks determine whether its coordinates can be trusted.</p>" +
                        "<p>For a traverse leg with <strong>horizontal distance l</strong> and grid bearing θ measured clockwise from grid north, the coordinate increments are <strong>ΔE = l sin θ</strong> and <strong>ΔN = l cos θ</strong>. At closure, compare the summed increments with the known difference between the end controls. Investigate blunders before distributing a residual; a mathematical adjustment cannot rescue a wrong station identity or datum.</p>" +
                        "<p><strong>Vertical control</strong> uses benchmarks and checked levelling or other appropriately controlled height observations. In the height-of-instrument method, <strong>HI = RL<sub>benchmark</sub> + backsight</strong> and <strong>RL<sub>point</sub> = HI − staff reading</strong>. All terms are lengths in the same units and datum. An ellipsoidal GNSS height must not be silently mixed with a project's level datum.</p>" +
                        "<p>The primary control need not lie exactly on the final centreline, which may move during optimisation. Connect detail points, cross-sections and structure surveys to recoverable control. A GNSS-supported control network may serve the same purpose as a traditional traverse; the bank's phrase does not prescribe one instrument or eliminate quality checks.</p>",
                    sources: [{ id: "TRAN808-00099", set: 10, question: 89 }]
                },
                {
                    id: "planning-profiles-and-local-normal-sections",
                    title: "Take routine cross-sections normal to the local alignment, then choose adequate spacing",
                    html: "<p><strong>A longitudinal profile records levels along the proposed route; a cross-section records levels across it at a station.</strong> Chainage normally follows the adopted plan alignment from a defined origin. Record its units and any chainage equations. Reduced levels, RLs, are elevations relative to the stated height datum, not distances measured down from an arbitrary road surface.</p>" +
                        "<p>For routine roadway sections, the cross-section line in plan is <strong>perpendicular to the local centreline tangent</strong>. On a simple circular curve this normal is radial; it is not perpendicular to one fixed bearing for the whole road. The section is then represented in a vertical plane, with horizontal offsets and elevations. Define left and right looking in the direction of increasing chainage.</p>" +
                        "<p><strong>Orientation and spacing are independent choices.</strong> The bank's 30 m and 50 m options do not establish universal station intervals. Use the required survey accuracy and terrain variability, adding sections at breaks of slope, abrupt width changes, drainage structures and cut/fill transitions. Special skew structure or watercourse surveys can be needed in addition to the routine road-normal sections; label their orientation rather than disguising them as ordinary sections.</p>" +
                        "<p>Sections support quantities, but interpolation has assumptions. For a <strong>hypothetical straight, regular segment</strong> with end cut areas 12 m<sup>2</sup> and 18 m<sup>2</sup>, separated by 20 m, the average-end-area estimate is <strong>V ≈ (12 + 18) × 20 / 2 = 300 m<sup>3</sup></strong>. This is an authored illustration, not bank data. More sections or a better terrain model are needed where ground changes sharply; curved alignments, separate cut/fill areas and material bulking or shrinkage require their own treatment.</p>",
                    sources: [{ id: "BASI674-00371", set: 29, question: 8 }]
                },
                {
                    id: "planning-soil-profile-depth-and-datum",
                    title: "The lower ground-or-grade datum matters in a soil-profile question",
                    html: "<p><strong>The bank's conventional answer is 1.5-3 m below the lower of ground line and finished grade line.</strong> Its explanation changes that reference to proposed subgrade without justification. Preserve the stem's datum when interpreting the question; do not present the numerical range as a verified universal NRS investigation requirement.</p>" +
                        "<p>Let z<sub>g</sub> be existing-ground RL, z<sub>f</sub> the finished-grade RL stated by the question, and d the illustrative depth below the lower line. On one common height datum, <strong>z<sub>ref</sub> = min(z<sub>g</sub>, z<sub>f</sub>)</strong> and <strong>z<sub>bottom</sub> = z<sub>ref</sub> − d</strong>. Depth drilled from existing ground is z<sub>g</sub> − z<sub>bottom</sub>, which need not equal d in a cutting.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical case, all RLs in m</th><th scope='col'>Reference and bottom for assumed d = 2 m</th><th scope='col'>Depth below existing ground</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Cut: ground 100, finished grade 96</th><td>Lower reference 96; bottom RL 94.</td><td><strong>6 m</strong>, not 2 m.</td></tr>" +
                        "<tr><th scope='row'>Fill: ground 100, finished grade 104</th><td>Lower reference 100; bottom RL 98.</td><td><strong>2 m</strong>, not a point inside the proposed fill.</td></tr></tbody></table>" +
                        "<p>These numbers only demonstrate the wording; they are not a site investigation design. In actual work, distinguish <strong>finished pavement surface, formation/subgrade, foundation level and natural ground</strong> using the specified layer thicknesses and elevations. A soil profile should relate logs, strata, samples, tests and groundwater observations to surveyed locations and levels.</p>" +
                        "<p>Investigation depth must capture the mechanisms that could govern performance: weak strata under a high embankment, settlement, a deep slip surface, foundation bearing, rock discontinuities or groundwater paths. Those can require investigations much deeper than the bank's range. A shallow profile sufficient for one pavement comparison is not sufficient evidence for every bridge, retaining wall or tunnel portal.</p>",
                    sources: [{ id: "TRAN808-00102", set: 11, question: 81 }]
                },
                {
                    id: "planning-alignment-fitness-and-coordination",
                    title: "A good alignment is short, easy, safe and economical together",
                    html: "<p><strong>Short means reasonably direct within the constraints, not the mathematically shortest line.</strong> A straight line across a gorge, unstable slope or densely occupied site may be much less suitable than a longer route. Alignment selection balances the bank's four qualities rather than maximising one in isolation.</p>" +
                        "<table><thead><tr><th scope='col'>Quality</th><th scope='col'>Engineering interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Short</th><td>Avoid unnecessary distance and repeated rise and fall while maintaining workable connections and safe geometry.</td></tr>" +
                        "<tr><th scope='row'>Easy</th><td>Provide manageable gradients and curves, coherent driving expectations, useful access and feasible construction and maintenance.</td></tr>" +
                        "<tr><th scope='row'>Safe</th><td>Provide visibility, consistent geometry, stable slopes, suitable crossings and consideration of all road users and roadside hazards.</td></tr>" +
                        "<tr><th scope='row'>Economical</th><td>Compare land, works, operation, maintenance, rehabilitation and user consequences over an appropriate common analysis period.</td></tr></tbody></table>" +
                        "<p><strong>Horizontal alignment</strong> describes the plan path; <strong>vertical alignment</strong> describes the elevation profile; the <strong>cross-section</strong> places roadway, slopes, drains and other elements around that line. They must fit together. A curve that seems acceptable in plan may be poorly visible over a crest, and a low profile that reduces fill may create an expensive drainage problem.</p>" +
                        "<p>NRS 2013 section 19 explicitly calls for coordinated horizontal and vertical design and consistent geometry. At planning level, inspect the route in three dimensions, including approaches to bridges and tunnels, rather than optimising independent drawings. Design speed, terrain, vehicle operation, drainage and land constraints must be reconciled before detailed dimensions are finalised.</p>" +
                        "<p>The paired bank questions express these same objectives. Neither provides a numerical optimisation rule or guarantees that every cost item and crash count will decrease simultaneously. Some additional construction cost can be justified by a worthwhile safety, reliability or operating-cost improvement.</p>",
                    sources: [
                        { id: "TRAN808-00096", set: 10, question: 86 },
                        { id: "TRAN808-00109", set: 11, question: 88 }
                    ]
                },
                {
                    id: "planning-obligatory-points-and-land-constraints",
                    title: "Control points include both places to serve and places to avoid",
                    html: "<p><strong>Obligatory or control points are constraints on the choice of route.</strong> Positive controls identify necessary connections or favourable opportunities; avoidance controls identify locations where the road should not pass, or where passage needs substantial justification and mitigation. The term does not mean only points through which the centreline must run.</p>" +
                        "<ul><li><strong>Positive controls:</strong> required terminals and network junctions, access to important settlements or production areas, suitable river-crossing sites and workable mountain passes.</li><li><strong>Avoidance controls:</strong> unstable ground, flood-prone or eroding sites, religious and heritage structures, sensitive habitats, costly buildings and areas with unacceptable displacement or severance.</li><li><strong>Conditional controls:</strong> utilities, property boundaries, crossings and development proposals whose feasibility, relocation or legal status still requires investigation.</li></ul>" +
                        "<p><strong>Serving a town is not the same as passing through its centre.</strong> A bypass with suitable connections can preserve access while reducing through-traffic conflicts. Likewise, providing access to a place of worship does not require taking the road through the religious structure. Discuss movement patterns and local use rather than treating religious sites merely as expensive objects to remove.</p>" +
                        "<p>For a crossing, test approach geometry, bank stability, flood behaviour, foundation conditions and construction access together. A narrow channel on a map is not automatically the least-cost crossing after scour protection and approach works are included. For land constraints, record affected parcels and consultation findings; a line on a survey plan is not evidence that acquisition or consent is complete.</p>" +
                        "<p><strong>Option overlap:</strong> Model 11, Q90 offers both religious structure and costly structures and important places of worship. The latter also fits the avoidance concept, so the options are not mutually exclusive. The stored key remains unchanged; the learning point is the distinction between access and physical intrusion, not a false unique choice.</p>",
                    sources: [
                        { id: "TRAN808-00089", set: 9, question: 89 },
                        { id: "TRAN808-00111", set: 11, question: 90 }
                    ]
                },
                {
                    id: "planning-alignment-effects-and-causation",
                    title: "Distinguish direct alignment consequences from indirect effects",
                    html: "<p><strong>Poor geometry and poor siting can increase construction effort, operating difficulty, maintenance exposure and crash risk.</strong> Sharp curves, steep climbs, inadequate visibility, unstable cuts and unreliable crossings operate through different mechanisms. Identifying a mechanism is more useful than claiming that an alignment directly causes every undesirable outcome.</p>" +
                        "<p><strong>Fatigue cracking is fundamentally a repeated-loading pavement response.</strong> Repeated tensile strain, material condition, structural thickness and support influence its development. That distinguishes it from a direct geometric defect such as inadequate sight distance. However, alignment can indirectly contribute: routing through wet or weak ground, intercepting seepage or preventing effective drainage can weaken support and increase pavement strain under the same wheel loading. The bank's intended distinction does not justify saying alignment can never contribute to fatigue.</p>" +
                        "<p><strong>Population change is not a direct mathematical consequence defining good or bad alignment.</strong> A shorter, safer road does not necessarily decrease population, and a poor alignment does not necessarily increase it. Nevertheless, accessibility, new economic opportunities, displacement and migration can change the distribution of settlement over time. These indirect effects need demographic and land-use analysis; they are not zero simply because population is the odd option in a geometry question.</p>" +
                        "<p>Keep three levels separate: <strong>design intention</strong>, such as reducing crash exposure; <strong>predicted effect</strong>, obtained from an explicit model; and <strong>observed outcome</strong>, measured after implementation with appropriate comparison. None guarantees the others. More traffic can change total crashes or maintenance demand even if risk per journey improves.</p>" +
                        "<p>The practical response is integrated assessment: carry ground and water risks into pavement and slope design, and carry access and severance effects into social planning. Do not use disciplinary labels to omit an important interaction.</p>",
                    sources: [
                        { id: "TRAN808-00018", set: 3, question: 86 },
                        { id: "TRAN808-00088", set: 9, question: 88 },
                        { id: "TRAN808-00108", set: 11, question: 87 }
                    ]
                },
                {
                    id: "planning-contour-cut-and-structure-alternatives",
                    title: "Going around a hill is a candidate, not an automatic economic answer",
                    html: "<p><strong>A contour-following route often reduces major excavation, but that is only one part of its cost.</strong> It may increase distance, curvature, stream crossings and exposure to unstable slopes. The two bank questions intend this common low-initial-cost tendency; neither supplies enough site or cost information to prove that a contour road is always the best alternative.</p>" +
                        "<table><thead><tr><th scope='col'>Alternative</th><th scope='col'>Potential advantage</th><th scope='col'>Cost or risk that can reverse it</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Follow the hillside</th><td>Fit the terrain with less concentrated cutting and simpler individual works.</td><td>Longer journeys, repeated gullies, maintenance access, rockfall and landslide exposure.</td></tr>" +
                        "<tr><th scope='row'>Cut through a ridge or spur</th><td>Shorter route with potentially better geometry.</td><td>Excavation volume, rock structure, drainage, support, slope stability and spoil disposal.</td></tr>" +
                        "<tr><th scope='row'>Bridge or viaduct</th><td>Cross a depression or bypass problematic ground without extensive fill.</td><td>Foundations, flood or slope hazards, structural maintenance and construction access.</td></tr>" +
                        "<tr><th scope='row'>Tunnel</th><td>Reduce some surface distance, climbing and exposure.</td><td>Geological uncertainty, portals, systems, safety provisions, operation and renewal.</td></tr></tbody></table>" +
                        "<p>First apply <strong>feasibility and unacceptable-impact constraints</strong>; do not compensate for an unsafe or impermissible route simply by giving it a low cost score. Develop the surviving alternatives to comparable detail and use the same demand, price date, analysis period and treatment of uncertainty.</p>" +
                        "<p>Include a <strong>do-minimum</strong> alternative where meaningful, such as maintaining and selectively improving the existing route. It is not necessarily zero expenditure. Compare travel time, vehicle operating cost, closure risk, resilience, land impacts and whole-life agency costs. A route can be shortest but least reliable, or initially cheapest but most expensive to maintain.</p>",
                    sources: [
                        { id: "TRAN808-00100", set: 10, question: 90 },
                        { id: "TRAN808-00110", set: 11, question: 89 }
                    ]
                },
                {
                    id: "planning-tunnel-comparison-and-nrs-basis",
                    title: "Tunnel justification requires a comparative life-cycle study",
                    html: "<p><strong>NRS 2013 section 17.3(a) calls for rigorous economic analysis of road tunnels.</strong> Section 17.3(j) relates tunnel vertical alignment to the balance of construction, operation and maintenance expense. These provisions support comparative appraisal, not an automatic decision at a single open-cut depth.</p>" +
                        "<p>A tunnel may shorten a route, reduce climbing and shelter the enclosed section from surface snow or rockfall. But <strong>portals and approach roads remain exposed</strong> to weather, debris flow, slope failure and flooding. The bank's all-of-the-above benefits must be understood as possibilities, not guaranteed performance for every tunnel.</p>" +
                        "<ul><li><strong>Construction account:</strong> investigate rock and soil conditions, groundwater, support and lining, excavation method, portals, approach works, spoil handling and uncertainty in quantities.</li><li><strong>Operating account:</strong> consider ventilation, lighting, drainage or pumping where required, monitoring, staffing and emergency arrangements.</li><li><strong>Maintenance and renewal:</strong> assess inspections, water ingress, pavement and lining repairs, replacement of equipment and traffic disruption during work.</li><li><strong>User and resilience account:</strong> compare journey time, operating cost, route availability, incident consequences and the availability of alternative access.</li></ul>" +
                        "<p><strong>Lower maintenance cost is not inherent in tunnelling.</strong> Savings from a shorter protected route can be offset by its civil works and operating systems. Likewise, the bank's <strong>20 m open-cut threshold has not been established as an authoritative universal Nepal rule</strong>. Rock conditions, cut side slopes, land take, groundwater, tunnel cover, portal location and traffic can change the comparison at the same cut depth.</p>" +
                        "<p>Prepare realistic quantities and service assumptions for both surface and tunnel alternatives, test uncertain geology and operating costs, and explain why the preferred option remains worthwhile. Satisfying geometric limits is a separate task from demonstrating economic or environmental acceptability; neither alone grants construction approval.</p>",
                    sources: [
                        { id: "HYDR626-00167", set: 19, question: 62 },
                        { id: "HYDR626-00170", set: 19, question: 65 }
                    ]
                },
                {
                    id: "planning-resisting-length-and-tractive-work",
                    title: "Equivalent resisting length needs a stated work model",
                    html: "<p><strong>Resisting or equivalent length expresses a route's resistance through an equivalent reference-road length.</strong> It is not simply the physical length of a continuous upgrade. The bank's minimum objective is meaningful only after defining the resistance model and satisfying safety and service constraints. The following mechanics and numerical illustration are <strong>authored explanatory additions</strong>; the bank supplies neither a resistance coefficient nor a route profile.</p>" +
                        "<p>Assume constant vehicle weight <strong>W</strong>, constant dimensionless rolling-resistance coefficient <strong>f &gt; 0</strong>, steady speed and small grades. Neglect aerodynamic, curve and acceleration resistance, and approximate road distance by horizontal distance x. With signed grade <strong>g = dz/dx</strong>, the required signed tractive force is <strong>F ≈ W(f + g)</strong>; level-road reference resistance is fW. Here f is rolling resistance, not the available tyre-grip coefficient.</p>" +
                        "<p><strong>Net work:</strong> over horizontal length L, <strong>E<sub>net</sub> ≈ W[fL + (z<sub>B</sub> − z<sub>A</sub>)]</strong>, so <strong>L<sub>eq,net</sub> = E<sub>net</sub>/(fW) = L + (z<sub>B</sub> − z<sub>A</sub>)/f</strong>. This signed account permits downgrade assistance and subtracts braking work; it is not automatically engine energy or fuel consumption. Routes with identical endpoints have the same net elevation term even if one repeatedly climbs and descends.</p>" +
                        "<p><strong>Positive propulsive work without regenerative credit:</strong> for constant-grade segments of length L<sub>i</sub> and signed elevation change Δz<sub>i</sub>, use <strong>E<sub>+</sub> ≈ W Σ max(0, fL<sub>i</sub> + Δz<sub>i</sub>)</strong>, then <strong>L<sub>eq,+</sub> = E<sub>+</sub>/(fW)</strong>. Split at grade changes; for continuously varying grade, integrate the positive part of F along the route. A negative force indicates braking needed to hold speed, not negative fuel use. A mild downgrade can still require positive propulsion.</p>" +
                        "<p><strong>Positive climbing work is a third account:</strong> define total ascent <strong>H<sub>+</sub> = Σ max(Δz<sub>i</sub>, 0)</strong>. Its gravitational work is WH<sub>+</sub>. The shortcut <strong>L + H<sub>+</sub>/f</strong> adds full-route rolling work to positive climbing work while giving no downgrade assistance. It is not generally equal to the clipped propulsive-work result and is not asserted here as a prescribed NRS formula.</p>" +
                        "<p><strong>Hypothetical check:</strong> take W = 100 kN and f = 0.02. Travel 1,000 m while rising 40 m, then 1,000 m while descending 40 m. The forces are 6 kN and −2 kN. Net work is <strong>4,000 kJ</strong>, giving L<sub>eq,net</sub> = <strong>2,000 m</strong>; positive propulsion is <strong>6,000 kJ</strong>, giving L<sub>eq,+</sub> = <strong>3,000 m</strong>. The ascent-only shortcut instead gives <strong>4,000 m</strong>. Units are consistent because kN × m = kJ. The difference comes from how downgrade assistance and braking are counted.</p>" +
                        "<p>For an entirely ascending route, the net-work equivalent length, clipped-positive equivalent length and rolling-plus-ascent shortcut coincide under these simplifications; gravitational climbing work alone still excludes rolling work. In real appraisal, compare both directions, vehicle mix, speed loss, braking, energy efficiency and maintenance. Shortening a climb by steepening it can worsen operation; minimising an unexplained uphill length is not a valid optimisation.</p>",
                    sources: [{ id: "TRAN808-00115", set: 12, question: 81 }]
                },
                {
                    id: "planning-alternative-present-cost-example",
                    title: "A transparent present-cost comparison can reverse the initial-cost ranking",
                    html: "<p><em>Syllabus extension: numerical evaluation of alternate alignments.</em> None of the 39 assigned records contains a complete alternative-cost dataset. <strong>Every value below is hypothetical</strong>; it is neither a Nepal prescribed discount rate nor a cost estimate for a named project.</p>" +
                        "<p>Assume two feasible routes provide comparable required service. Use a common real price basis, investment at time zero, a <strong>10-year analysis period</strong>, <strong>8% real annual discount rate</strong>, equal zero terminal residual values and no additional unequal renewal costs. Annual costs occur at each year-end and include the specified agency upkeep and user operating/time costs, counted once. This illustrative appraisal period is separate from NRS's twenty-year traffic-classification horizon.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical alignment</th><th scope='col'>Initial cost, NPR million</th><th scope='col'>Annual cost, NPR million/year</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A: lower initial expenditure</th><td>100</td><td>10</td></tr>" +
                        "<tr><th scope='row'>B: higher initial expenditure</th><td>125</td><td>6</td></tr></tbody></table>" +
                        "<p>For investment I and constant annual cost C, <strong>PC = I + C Σ(1 + r)<sup>−t</sup></strong>, summing t = 1 to n. The annuity factor is <strong>a = [1 − (1 + r)<sup>−n</sup>]/r</strong>. At r = 0.08 and n = 10, a ≈ <strong>6.7101</strong>. Thus <strong>PC<sub>A</sub> ≈ 167.10 million NPR</strong> and <strong>PC<sub>B</sub> ≈ 165.26 million NPR</strong>. B has the lower present cost by approximately <strong>1.84 million NPR</strong>, despite costing 25 million more initially.</p>" +
                        "<p>The same incremental calculation is <strong>ΔNPV(B relative to A) = −25 + 4a ≈ +1.84 million NPR</strong>, treating annual cost savings as the benefit of choosing B. If those savings are only a hypothetical 3 million/year, ΔNPV becomes approximately <strong>−4.87 million NPR</strong>, reversing the preference. This sensitivity is more informative than labelling all shorter routes economical.</p>" +
                        "<p>For a real comparison, include construction timing, residual values, renewal, closures, growth and risk consistently. If benefits differ, compare net benefits rather than costs alone. Keep non-monetised displacement, heritage, ecology and resilience visible in a separate criteria assessment; weights must be stated, and unacceptable constraints cannot be cancelled by a high score elsewhere. Do not count both a time saving and the same saving again inside an aggregated benefit.</p>",
                    sources: []
                },
                {
                    id: "planning-survey-project-deliverables",
                    title: "Turn survey findings into a coordinated, reviewable project package",
                    html: "<p><em>Syllabus extension: an authored example of survey and planning deliverables.</em> Consider a <strong>hypothetical 1 km rural connector</strong> from chainage 0+000 to 1+000. No bank record supplies its terrain, coordinates, ground conditions or design. The package below describes the information to obtain, not completed drawings or an approved detailed project report.</p>" +
                        "<table><thead><tr><th scope='col'>Deliverable</th><th scope='col'>What makes it useful and auditable</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Survey-control report</th><td>Recoverable marks, coordinate and height datums, instrument and observation records, closure checks, adjustments and achieved accuracy.</td></tr>" +
                        "<tr><th scope='row'>Topographic plan and longitudinal profile</th><td>A common chainage system showing ground, proposed geometry, control points, crossings, utilities and the relationship between finished surface and subgrade.</td></tr>" +
                        "<tr><th scope='row'>Cross-sections and quantities</th><td>Local-normal offsets and levels at justified intervals and changes, separate cut/fill calculations, material classifications and explicit volume-conversion assumptions.</td></tr>" +
                        "<tr><th scope='row'>Ground and hazard assessment</th><td>Located logs and tests, groundwater observations, stability and settlement risks, material sources and remaining investigation needs.</td></tr>" +
                        "<tr><th scope='row'>Drainage and structures schedule</th><td>Catchments, design-event basis, surveyed water levels, proposed crossings, outlet conditions, erosion protection and maintenance access; not a list of assumed standard culvert sizes.</td></tr>" +
                        "<tr><th scope='row'>Land, access and impact plans</th><td>Affected parcels, sensitive sites, access and severance effects, consultation records and mitigation requirements, clearly separated from evidence of legal acquisition or approval.</td></tr>" +
                        "<tr><th scope='row'>Alternative and implementation report</th><td>Comparable estimates, service and risk appraisal, reasons for rejecting alternatives, construction access and spoil strategy, phasing, maintenance resources and uncertainty.</td></tr>" +
                        "<tr><th scope='row'>Design-basis register</th><td>Named standards and editions, road category, traffic horizon, terrain, design assumptions, departures requiring approval and unresolved interfaces.</td></tr></tbody></table>" +
                        "<p><strong>Cross-check interfaces before accepting the package.</strong> A culvert's chainage must agree across plan, profile, section and quantity schedules; its outlet must work with the receiving ground. A changed grade can alter excavation, foundations, drainage and affected land. Revision control must carry that change through every dependent calculation and drawing.</p>" +
                        "<p>The useful final result is a traceable decision with enough evidence for the next authorised step, not merely a thick report. Independent engineering review, applicable permissions and construction quality control remain necessary; educational notes and a survey checklist cannot substitute for them.</p>",
                    sources: []
                }
            ],
            gaps: [
                "Syllabus extension — planning-mode-comparison: the assigned records test road flexibility, feeder roles and fixed versus moving components, not a complete modal comparison. The added rail, water, air, ropeway, pipeline and walking/cycling discussion is conceptual; no current Nepal modal shares, capacities or universal cost ranking are asserted.",
                "Syllabus extension — planning-nepal-standards-history-and-use: the 1970, 1988, 1994, 1997 and 2013 chronology and scope distinctions come from the inspected NRS introduction, beyond the bank's limited historical question. NRS 2013 and NURS 2076 are identified educational editions, not certified current consolidated law, institutional responsibility, acquired right of way or construction approval.",
                "Syllabus extension — planning-traffic-data-and-forecast-example: no classified count series, annualisation factors, opening date or growth study is supplied. The 3,000 PCU/day opening demand and 2%/3% growth cases are hypothetical. Exact shared NRS class endpoints require an authoritative interpretation rather than invented exclusive inequalities.",
                "Syllabus extension — planning-alternative-present-cost-example: both routes, all costs, the 10-year appraisal, 8% discount rate and sensitivity inputs are authored assumptions, not bank givens or prescribed Nepal appraisal parameters. No project-specific benefit stream, risk distribution or actual optimal alignment is established.",
                "Syllabus extension — planning-survey-project-deliverables: the 1 km connector is a hypothetical package, not an existing surveyed project. No control network, terrain model, drawings, catchment dataset, geotechnical logs, land record or permission is supplied; the checklist does not demonstrate completed design or approval.",
                "Survey provenance gaps: the intended authoritative Band/Corridor ordering and any fixed search-area widths remain unverified. The bank's 1.5-3 m soil-profile range is not established here as a universal NRS requirement; its lower ground-or-finished-grade datum is retained. The section-volume and cut/fill datum calculations are explicitly hypothetical, and no universal 30 m or 50 m section interval is inferred.",
                "Alternative-analysis gaps: no authoritative universal 20 m cut-to-tunnel threshold or guaranteed tunnel maintenance saving is established. The resisting-length item supplies no work definition, rolling resistance or profile. The constant-resistance net, clipped-positive and ascent-only accounts and their numerical example are authored models, not claimed NRS prescriptions or fuel forecasts.",
                "Historical and document boundary: JICA's 115 km statement concerns Thankot-Bhainse, not the entire highway or a current road-length inventory. The bank's intended NRRS document/edition remains unresolved, but the NURS 2076 section 1.4 names themselves are visually verified: arterial Path, sub-arterial Sadak, collector Marg and local Upa-Marg. No present route-number conversion, national road-length statistic or current project-completion status is supplied."
            ],
            cautions: [
                {
                    html: "<p><strong>Road descriptions are not exclusive administrative classes.</strong> Street is reasonable city-road terminology, but ring roads need not remain entirely outside built-up areas and highways can be urban. Connecting two towns does not uniquely establish country road without a rural context and an identified classification system.</p>",
                    sources: [
                        { id: "TRAN808-00001", set: 2, question: 80 },
                        { id: "TRAN808-00083", set: 1, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>Comparative flexibility is not exclusivity.</strong> Roadways are important first/last-mile feeders, but other modes can also feed a service, and not every destination is road-accessible. Roads support flexible dispatch, while road buses and freight services can still have fixed routes or schedules. Do not read can be a feeder as only roads can ever be feeders.</p>",
                    sources: [
                        { id: "TRAN808-00002", set: 2, question: 81 },
                        { id: "TRAN808-00085", set: 9, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>Verified NURS correction, plus wrong-document acronym:</strong> NURS 2076 section 1.4, visually checked on printed pages 2-4 / PDF pages 10-12, pairs <strong>arterial-Path, sub-arterial-Sadak, collector-Marg and local-Upa-Marg</strong>. The stored arterial-Marga key and the explanation's full mnemonic conflict with that text; Path is option B for the NURS interpretation. The stem says NRRS, not NURS, so its document attribution is also defective. This is not an unresolved urban-name lookup, and the original stored key is not edited.</p>",
                    sources: [{ id: "TRAN808-00014", set: 3, question: 82 }]
                },
                {
                    html: "<p><strong>Historical codes and damaged text:</strong> NRS 2013 specifies <strong>H plus two digits</strong> and <strong>F plus three digits</strong>. If followed in the national-highway options is corrupted wording, not a valid designation. The feeder provision is on printed page 2 / PDF page 9. These historical forms do not establish a current NH number or permit automatic old-to-new conversion.</p>",
                    sources: [
                        { id: "TRAN808-00116", set: 12, question: 82 },
                        { id: "TRAN808-00117", set: 12, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>All of the above is not defensible literally.</strong> Greater Roads is not a category in the inspected NRS administrative list: National Highways, Feeder Roads, District Roads and Urban Roads. The explanation additionally mislabels feeder roads D instead of F. Do not silently replace the original Greater Roads option with Feeder Roads to make the key appear correct.</p>",
                    sources: [{ id: "TRAN808-00118", set: 12, question: 84 }]
                },
                {
                    html: "<p><strong>ADT, units and horizon:</strong> NRS 2013's Class II/III/IV bands are 5,000-20,000, 2,000-5,000 and below 2,000 <strong>PCU/day at the twenty-year horizon after completion</strong>. AOT is damaged text; ADT must not be automatically relabelled AADT or cumulative twenty-year traffic. Adjacent printed endpoints and the main/annex Class I inequality require care. Technical classes are not interchangeable with administrative categories or universal pavement design lives.</p>",
                    sources: [
                        { id: "TRAN808-00119", set: 12, question: 85 },
                        { id: "TRAN808-00120", set: 12, question: 86 },
                        { id: "TRAN808-00121", set: 12, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>Rolling excludes exactly 10%.</strong> NRS 2013 Table 6-1 prints plain 0-10%, rolling &gt;10-25%, mountainous &gt;25-60% and steep &gt;60%. These are natural transverse ground slopes, not degrees, longitudinal road grades or pavement crossfalls. The bank's four-class count is usable, but its abbreviated overlapping ranges need this qualification.</p>",
                    sources: [
                        { id: "TRAN808-00093", set: 10, question: 83 },
                        { id: "TRAN808-00180", set: 17, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Tribhuvan chronology and extent:</strong> JICA section 1.2 directly supports the 1953 undertaking and the 1956 opening of the <strong>115 km Thankot-Bhainse section</strong>. That is not the length of the whole highway and is not the bank's Naubise-Birgunj endpoint description. The intended oldest-among-options answer must not become a claim that construction began and ended entirely in 1956 or that no earlier roads existed.</p>",
                    sources: [{ id: "TRAN808-00087", set: 9, question: 87 }]
                },
                {
                    html: "<p><strong>Study taxonomy and financing:</strong> economic, traffic, engineering and financial are the bank's four study families, not an established universal NRS count or the four successive alignment-survey stages. Funding constraints and financial appraisal belong in planning even if actual borrowing, contracting and payments occur during implementation. The financing-excluded explanation is too broad without that distinction.</p>",
                    sources: [
                        { id: "TRAN808-00086", set: 9, question: 86 },
                        { id: "TRAN808-00095", set: 10, question: 85 }
                    ]
                },
                {
                    html: "<p><strong>Stage associations are not exclusive work boundaries.</strong> Reconnaissance is an initial site inspection; preliminary survey commonly includes systematic soil/material investigations and primary traverse establishment. Ground observations can begin earlier, inspections and investigations continue later, and a different controlled survey method can provide the reference framework. None of these keys justifies omitting later investigation or treating primary traverse as the first step of the entire project.</p>",
                    sources: [
                        { id: "TRAN808-00003", set: 2, question: 82 },
                        { id: "TRAN808-00092", set: 10, question: 82 },
                        { id: "TRAN808-00099", set: 10, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Local normal, not automatic spacing:</strong> routine roadway cross-sections are taken perpendicular to the <strong>local centreline tangent</strong>. Neither 30 m nor 50 m is a universally required interval. Additional sections and special structure or watercourse orientations depend on the survey purpose; the bank's absolute always wording should not erase those distinctions.</p>",
                    sources: [{ id: "BASI674-00371", set: 29, question: 8 }]
                },
                {
                    html: "<p><strong>Band/Corridor ordering remains an attribution hold.</strong> The bank stores Region → Corridors → Bands → Route Strips → Alignments; the audit flags a possible reversal of Bands and Corridors relative to another convention. The intended authoritative definition is unverified. Do not replace the key, assert a competing order as NRS, or assign fixed corridor widths without a defined study glossary.</p>",
                    sources: [{ id: "TRAN808-00101", set: 11, question: 80 }]
                },
                {
                    html: "<p><strong>Do not change the soil-survey datum.</strong> The stem refers to the lower of ground line and finished grade line; the explanation substitutes proposed subgrade. Its 1.5-3 m range is a conventional bank answer, not a verified universal depth for every ground condition or structure. A cutting can require drilling much farther below existing ground to reach that referenced level, and actual investigations must address the governing failure mechanisms.</p>",
                    sources: [{ id: "TRAN808-00102", set: 11, question: 81 }]
                },
                {
                    html: "<p><strong>Obligatory points can be positive or avoidance controls.</strong> Access to a settlement or worship site does not require crossing its central or protected structure. In Model 11, Q90, important places of worship overlaps with religious structure and costly structures as an avoidance answer, so the choices are not mutually exclusive. Do not defend uniqueness by redefining every obligatory point as a must-pass point.</p>",
                    sources: [
                        { id: "TRAN808-00089", set: 9, question: 89 },
                        { id: "TRAN808-00111", set: 11, question: 90 }
                    ]
                },
                {
                    html: "<p><strong>Fatigue is not wholly disconnected from alignment.</strong> Its primary mechanism is repeated pavement strain, not a geometric alignment defect. Nevertheless, alignment can affect water interception, drainage and foundation support, which can change strain and fatigue performance. The intended direct-cause distinction must not become a claim that route selection can never contribute.</p>",
                    sources: [{ id: "TRAN808-00018", set: 3, question: 86 }]
                },
                {
                    html: "<p><strong>Population is not a deterministic alignment result.</strong> Neither a decrease from a proper alignment nor an increase from an improper alignment follows mathematically. Roads can still influence settlement, migration, displacement and economic activity indirectly. The bank's intended odd-option answers do not establish zero demographic effect or guarantee simultaneous reductions in every engineering cost and accident measure.</p>",
                    sources: [
                        { id: "TRAN808-00088", set: 9, question: 88 },
                        { id: "TRAN808-00108", set: 11, question: 87 }
                    ]
                },
                {
                    html: "<p><strong>Contour economy is conditional.</strong> Going around a hill can save excavation but add distance, curves, crossings and unstable-slope exposure. These questions contain no quantities or life-cycle costs proving that it always beats a cutting, bridge or tunnel. Short, easy, safe and economical must be considered together; shortest distance and lowest initial expenditure are not universal selection rules.</p>",
                    sources: [
                        { id: "TRAN808-00100", set: 10, question: 90 },
                        { id: "TRAN808-00110", set: 11, question: 89 }
                    ]
                },
                {
                    html: "<p><strong>Tunnel benefits and the 20 m claim are not automatic.</strong> Portals and approaches may remain exposed to snow and other hazards, and tunnel systems can increase operation, maintenance and renewal costs. The bank's 20 m open-cut threshold is not established as a universal Nepal requirement. NRS 2013 section 17.3 supports comparative economic study of construction, maintenance and vehicle operation, not selection from cut depth alone.</p>",
                    sources: [
                        { id: "HYDR626-00167", set: 19, question: 62 },
                        { id: "HYDR626-00170", set: 19, question: 65 }
                    ]
                },
                {
                    html: "<p><strong>Resisting length is not defined by continuous uphill distance.</strong> An equivalent-work comparison needs a reference resistance and a treatment of gradients. The authored model explicitly distinguishes signed net work, positive propulsive work with downgrade braking clipped, and positive climbing work. These give different results on an undulating route. The bank's minimum objective supplies neither that model nor permission to shorten a climb by making it unsafe or excessively steep.</p>",
                    sources: [{ id: "TRAN808-00115", set: 12, question: 81 }]
                }
            ],
            references: [
                {
                    title: "Government of Nepal, Department of Roads — Nepal Road Standard 2070, July 2013; introduction and scope, sections 3-7, 17.3 and 19; government-hosted primary text",
                    url: "https://idogorkha.gandaki.gov.np/upload/0a62be81f1df765a1fe9133924e7ce71/files/Nepal_Road_Standard_2070.pdf"
                },
                {
                    title: "Nepal Urban Road Standard 2076 — government-hosted scan; section 1.4, printed pp.2-4 / PDF pp.10-12, urban names and functions visually verified",
                    url: "https://idoparwat.gandaki.gov.np/upload/51e044f8b4812c49f2b2ee107d2df084/files/Nepal_Urban_Road_Standard_2076.pdf"
                },
                {
                    title: "JICA — Data Collection Survey on Thankot Area Road Improvement in Nepal, Final Report; section 1.2, p.1-1, 1953/1956 Thankot-Bhainse history; section 1.5 reviews of 2001 and 2013 studies",
                    url: "https://openjicareport.jica.go.jp/pdf/12176350_02.pdf"
                }
            ]
        }
    });
})();