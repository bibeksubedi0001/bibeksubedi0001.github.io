(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0904: {
            code: "ACiE0904",
            questionCount: 66,
            blocks: [
                {
                    id: "traffic-purpose-studies-and-taxonomies",
                    title: "Traffic engineering starts with a problem, evidence and road users",
                    html: "<p><strong>Traffic engineering applies engineering analysis to the safe, efficient and convenient movement of people and goods.</strong> Its subject is not simply fast vehicles. Access, pedestrian movement, freight, public transport, delay, reliability and the number and severity of crashes all matter. A proposal that increases vehicle speed while making crossings dangerous has not automatically improved the transport system.</p>" +
                        "<p>The official ACiE0904 scope includes human and vehicle characteristics, operations, regulation and controls, traffic studies, intersections, signals, night visibility and safety. A useful study sequence is to define the problem and observation boundary, collect appropriate evidence, analyse alternatives, and evaluate their effects. Data collection is foundational, and volume counts often support later studies, but a specific crash or accessibility problem need not begin with a volume survey.</p>" +
                        "<table><thead><tr><th scope='col'>Study</th><th scope='col'>Question answered</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Volume and classification</th><td>How many users or vehicles pass, in which movements and periods?</td></tr>" +
                        "<tr><th scope='row'>Speed and travel time</th><td>How fast do users move, and where does travel time accumulate?</td></tr>" +
                        "<tr><th scope='row'>Origin–destination</th><td>Where do trips begin and end, and what connections do they require?</td></tr>" +
                        "<tr><th scope='row'>Capacity and flow</th><td>How does demand interact with available service, queues and bottlenecks?</td></tr>" +
                        "<tr><th scope='row'>Parking and crashes</th><td>How are spaces used, and what safety patterns warrant investigation?</td></tr></tbody></table>" +
                        "<p>The human–vehicle–roadway grouping is a useful three-part model. The bank also lists seven departmental categories: characteristics, studies and analysis, operations, planning and analysis, design, administration and research. These are <strong>classification conventions, not universal counts</strong>. Inventories, administrative and economic studies can support the same project; dynamic traffic analysis is not invalid merely because one textbook groups studies differently. Models are used in volume, parking and crash analysis, not exclusively in one study category.</p>" +
                        "<p><small>Evidence boundary: links identify the 66 assigned bank records, not endorsement of every stored key or explanation. Original bank data are unchanged. All invented datasets are labelled syllabus extensions with empty bank-source lists. These are educational analyses and document comparisons, not approved designs, current-law certification, instructions to operate traffic controls, or field implementation plans.</small></p>",
                    sources: [
                        { id: "TRAN808-00224", set: 21, question: 87 },
                        { id: "TRAN808-00225", set: 21, question: 88 },
                        { id: "TRAN808-00226", set: 21, question: 89 },
                        { id: "TRAN808-00227", set: 22, question: 80 },
                        { id: "TRAN808-00228", set: 22, question: 81 },
                        { id: "TRAN808-00229", set: 22, question: 82 },
                        { id: "TRAN808-00231", set: 22, question: 84 },
                        { id: "TRAN808-00232", set: 22, question: 85 },
                        { id: "TRAN808-00237", set: 22, question: 90 }
                    ]
                },
                {
                    id: "traffic-human-factors",
                    title: "Perception, decisions and reaction time influence the whole layout",
                    html: "<p><em>Syllabus extension: human characteristics beyond the assigned classification questions.</em> The bank supplies no complete human-response experiment. The following comparison is hypothetical, not a recovered question or a prescribed reaction-time standard.</p>" +
                        "<p><strong>A road user must detect information, understand it, decide and act.</strong> PIEV is a traditional mnemonic for perception, intellection, emotion and volition. It is a teaching framework rather than a sequence of separately fixed biological timers. Familiarity, expectation, distraction, fatigue, impairment, age and the complexity of the decision affect response. A design reaction-time assumption is neither a biological maximum nor a guarantee that everyone responds within it.</p>" +
                        "<ul><li><strong>Vision:</strong> acuity, peripheral detection, contrast sensitivity and adaptation affect whether an object is noticed and identified. Seeing a bright lamp is not the same as recognising a pedestrian beside it.</li><li><strong>Information load:</strong> a legible sign can still be ineffective if several competing messages arrive too late for a decision. Consistent layouts reduce unnecessary interpretation.</li><li><strong>Movement ability:</strong> walking speed, balance, wheelchair use and sensory limitations affect access and crossing needs. An average user does not represent every user.</li><li><strong>Expectation:</strong> an unexpected lane termination or ambiguous priority can demand more decision time than a familiar, predictable situation.</li></ul>" +
                        "<p>Reaction travel follows <strong>d<sub>r</sub> = vt<sub>r</sub></strong> with v in m/s and t<sub>r</sub> in seconds. For an <strong>invented comparison</strong>, a vehicle continues at 36 km/h, or 10 m/s, before braking. Assumed response times of 1.5 s and 2.5 s give 15 m and 25 m of reaction travel. The extra second consumes 10 m before braking begins; these distances are not total stopping distances.</p>" +
                        "<p>Planning implications include understandable junctions, adequate visibility, manageable approach speeds, accessible crossings and consistent guidance. Education helps explain a system, but it cannot compensate for every misleading layout or remove the need to accommodate human error.</p>",
                    sources: []
                },
                {
                    id: "traffic-vehicle-characteristics",
                    title: "Dimensions, swept paths and performance describe different vehicle effects",
                    html: "<p><em>Syllabus extension: vehicular characteristics and their planning consequences.</em> No assigned question supplies a complete design-vehicle envelope, swept-path analysis or braking dataset. Dimensions and performance limits must come from the applicable vehicle and road-design basis, not from an unrelated bank item.</p>" +
                        "<table><thead><tr><th scope='col'>Characteristic</th><th scope='col'>Why it matters</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Width, height and length</th><td>Influence lateral space, overhead clearance, storage length and obstruction of sight lines. A design envelope is not a statement of every current legal limit.</td></tr>" +
                        "<tr><th scope='row'>Wheelbase and overhang</th><td>Wheelbase is axle-centre spacing, not overall length. Rear-wheel off-tracking and body overhang affect the swept envelope through a turn.</td></tr>" +
                        "<tr><th scope='row'>Articulation</th><td>A tractor–trailer combination follows different paths from a rigid vehicle of similar overall length.</td></tr>" +
                        "<tr><th scope='row'>Acceleration and climbing</th><td>Power-to-mass ratio, loading and gradients influence discharge, merging and speed differences.</td></tr>" +
                        "<tr><th scope='row'>Braking and stability</th><td>Tyres, brakes, surface friction, wetness, loading and gradient affect deceleration and control.</td></tr></tbody></table>" +
                        "<p>For a simplified level-road motion model with constant positive deceleration magnitude a, <strong>d<sub>b</sub> = v<sup>2</sup>/(2a)</strong>. An <strong>invented mechanics example</strong> uses a = 4 m/s<sup>2</sup>: braking from 10 m/s requires 12.5 m, while braking from 20 m/s requires 50 m. Doubling speed quadruples braking distance in this model. Reaction travel is additional; the assumed deceleration is not a recommended field value.</p>" +
                        "<p>A bus may carry many people while occupying more road space than a car; counting vehicles alone misses that distinction. A truck's effect on traffic operations also differs from its effect on pavement damage. Neither a passenger-car equivalent nor gross vehicle length supplies an axle-load spectrum. Planning therefore considers person movement, operational space, dynamic performance and structural loading separately.</p>",
                    sources: []
                },
                {
                    id: "traffic-vulnerable-users-and-regulation",
                    title: "Regulation and the three Es serve all road users",
                    html: "<p><strong>Vehicular and pedestrian traffic are both part of road traffic.</strong> Bicycles belong within vehicular traffic even though their users, like motorcyclists and pedestrians, have little external protection. Pedestrians are the most vulnerable choice among the bank's offered categories; that answer must not erase other vulnerable users or imply identical risk for every pedestrian.</p>" +
                        "<p>Traffic regulation concerns interacting subjects rather than a universal sequence of four implementation stages. <strong>Driver controls</strong> address competence and behaviour; <strong>vehicle controls</strong> address fitness and permitted characteristics; <strong>flow controls</strong> address movements, priority, speed and use of road space; broader administrative controls provide the institutional framework. The bank's driver-first order is a teaching convention, not a verified chronology of Nepal's legislation.</p>" +
                        "<table><thead><tr><th scope='col'>Traditional E</th><th scope='col'>Contribution</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Engineering</th><td>Road layout, visibility, separation, crossings and intelligible controls reduce opportunities for serious conflict.</td></tr>" +
                        "<tr><th scope='row'>Education</th><td>Users learn the meaning of controls, shared responsibilities and the limitations of vehicles and human perception.</td></tr>" +
                        "<tr><th scope='row'>Enforcement</th><td>Authorised institutions support compliance with applicable rules; a sign alone does not establish effective compliance.</td></tr></tbody></table>" +
                        "<p>The <strong>engineering, education and enforcement</strong> mnemonic is useful but not an exhaustive modern safety framework. Safe vehicles, speed management, emergency response and evaluation also matter. Pedestrians are not obstructions to be removed from the analysis: walking links, public-transport access, crossing demand and accessibility belong in the design problem. Reducing exposure to high-energy conflicts is more meaningful than maximising vehicle speed without regard to injury consequences.</p>",
                    sources: [
                        { id: "TRAN808-00230", set: 22, question: 83 },
                        { id: "TRAN808-00234", set: 22, question: 87 },
                        { id: "TRAN808-00236", set: 22, question: 89 },
                        { id: "TRAN808-00238", set: 23, question: 79 }
                    ]
                },
                {
                    id: "traffic-counts-adt-and-aadt",
                    title: "A count needs a period, direction, location and classification",
                    html: "<p><strong>A traffic count N is not yet a flow rate.</strong> At a specified cross-section, <strong>q = N/T</strong>; T must have an identified unit. Reporting vehicles/h is incomplete unless the direction, lane coverage, vehicle classes and observation period are also known. Turning counts describe movements at a junction; they are not interchangeable with a two-way midblock total.</p>" +
                        "<p>For complete daily totals over a stated short period, <strong>ADT = total vehicles/observed days</strong>, in vehicles/day. The bank's unadjusted 30-day mean is ADT. <strong>AADT</strong> is the annual average daily traffic: a complete calendar-year total divided by 365 or 366 days as applicable. A shorter survey can estimate AADT only through a justified representative-sampling and adjustment method. Missing days are not automatically zero-traffic days.</p>" +
                        "<ul><li><strong>Sampling:</strong> weekday, weekend, seasonal, festival and abnormal-event patterns can differ. A short count needs an appropriate relationship to the annual pattern, often informed by continuous-count sites.</li><li><strong>Measurement:</strong> manual counts, video analysis and automatic detectors have different classification, missed-detection and double-counting risks. An axle detector's raw detections are not necessarily vehicle counts.</li><li><strong>Presentation:</strong> classified totals and percentages describe composition; time plots show variation; turning diagrams and network maps show where movement occurs. Each needs units and a legend.</li><li><strong>Design use:</strong> counts inform demand, geometry and pavement decisions, but do not themselves prescribe a design standard or pavement thickness.</li></ul>" +
                        "<p>The letters <strong>AAOT</strong> in the presentation question remain unresolved. No expansion is adopted here, and they are not silently changed to AADT. The stored modal-average choice cannot make that unexplained alternative a verified technical term. Preserve the distinction between a directly observed count, an adjusted annual estimate and a design decision based on several kinds of evidence.</p>",
                    sources: [
                        { id: "TRAN808-00022", set: 3, question: 90 },
                        { id: "TRAN808-00233", set: 22, question: 86 },
                        { id: "TRAN808-00235", set: 22, question: 88 },
                        { id: "TRAN808-00242", set: 23, question: 83 },
                        { id: "TRAN808-00244", set: 23, question: 85 }
                    ]
                },
                {
                    id: "traffic-pcu-and-stream-variables",
                    title: "PCU standardises an operational comparison, not axle damage",
                    html: "<p><strong>The fundamental traffic-stream variables are flow, density and speed.</strong> Flow measures passage per time, density measures vehicles present per road length, and speed measures distance per time. PCU, the passenger car unit, is a unit of equivalent traffic, not a fourth independent stream variable and not itself the conversion factor.</p>" +
                        "<p>A <strong>passenger-car-equivalency factor</strong> converts a vehicle class into equivalent passenger-car units under an adopted method. For classified counts N<sub>i</sub> and factors E<sub>i</sub>, the equivalent count is <strong>N<sub>PCU</sub> = ΣE<sub>i</sub>N<sub>i</sub></strong>. Dividing by an observation time in hours gives PCU/h. The factors depend on the analysis method and may depend on road width, gradients, traffic mix, vehicle performance and prevailing operation; a single timeless factor for every truck or motorcycle is not assumed.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Purpose and unit</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Vehicle count or flow</th><td>Actual vehicles or vehicles/h within the declared counting boundary.</td></tr>" +
                        "<tr><th scope='row'>Equivalent operational flow</th><td>PCU/h, using a specified equivalency method.</td></tr>" +
                        "<tr><th scope='row'>Person movement</th><td>Persons or persons/h; requires occupancy or direct person counts, not PCU alone.</td></tr>" +
                        "<tr><th scope='row'>Pavement loading</th><td>Axle-load spectra or equivalent standard-axle repetitions under a pavement-damage model, not PCU.</td></tr></tbody></table>" +
                        "<p>Do not multiply a vehicle flow by an equivalency factor, leave density in actual vehicles/km, and then expect a mixed-unit flow–density identity to hold. Likewise, an AADT value containing all vehicles does not by itself reveal the commercial-vehicle count, directional axle distribution or pavement damage. Keep the measurement basis attached to every calculation.</p>",
                    sources: [{ id: "TRAN808-00243", set: 23, question: 84 }]
                },
                {
                    id: "traffic-phf-and-design-hour",
                    title: "Peak-hour factor measures concentration within the hour",
                    html: "<p><strong>The 15-minute peak-hour factor compares an hour's count with its busiest quarter-hour.</strong> Let N<sub>h</sub> be the sum of four consecutive, non-overlapping quarter-hour counts and N<sub>15,max</sub> their maximum, all for the same location, direction, lanes and vehicle basis. Then <strong>PHF = N<sub>h</sub>/(4N<sub>15,max</sub>)</strong>. It is dimensionless.</p>" +
                        "<p>For positive hourly traffic and nonnegative counts, the maximum quarter-hour count is at least one quarter of the total and no greater than the total: <strong>N<sub>h</sub>/4 ≤ N<sub>15,max</sub> ≤ N<sub>h</sub></strong>. Substitution gives <strong>0.25 ≤ PHF ≤ 1</strong>. All of the hour's traffic in one quarter gives 0.25; equal totals in all four quarters give 1. Equal quarter-hour totals do not prove equal individual headways or the absence of short platoons.</p>" +
                        "<p>If no traffic is counted, both numerator and denominator are zero, so <strong>PHF is undefined</strong>, not 0.25, zero or one. The lower bound also depends on the selected subinterval: 0.25 is specifically the four-quarter-hour construction, not a universal minimum for every peaking measure.</p>" +
                        "<p>The equivalent busiest-quarter flow rate is <strong>4N<sub>15,max</sub> vehicles/h</strong>. When the hourly count is expressed as an hourly volume, this rate is obtained by dividing it by PHF. That is a conversion of the observed short interval to an hourly rate; it does not claim that the peak rate persisted for an entire hour.</p>" +
                        "<p>A design-hour selection factor, directional share and lane allocation answer different questions from PHF. PHF describes within-hour concentration, not annual growth, capacity, the percentage of heavy vehicles or which annual hour should be selected for design.</p>",
                    sources: [{ id: "TRAN808-00064", set: 7, question: 88 }]
                },
                {
                    id: "traffic-count-and-design-hour-example",
                    title: "Worked counts: quarter-hour rate, daily average and design-hour demand",
                    html: "<p><em>Syllabus extension: all counts, annual traffic and factors in this block are invented teaching data.</em> The examples are separate datasets, not measured Nepal traffic or missing bank givens. They illustrate why converting a count does not establish a capacity.</p>" +
                        "<p>Assume one directional count station records <strong>180, 240, 300 and 240 vehicles</strong> in consecutive 15-minute intervals. The hour contains 960 vehicles; the largest quarter contains 300. Thus <strong>PHF = 960/(4 × 300) = 0.80</strong>. The busiest-quarter rate is <strong>300/0.25 = 1200 vehicles/h</strong>, while the whole-hour mean rate is 960 vehicles/h. Both describe the same count record using different time windows.</p>" +
                        "<p>In a <strong>separate hypothetical daily dataset</strong>, 90,000 vehicles counted over 30 complete days give <strong>ADT = 3000 vehicles/day</strong>. That arithmetic does not produce AADT without a defensible annual adjustment. Multiplying the number of observed days or simply renaming the result cannot make an unrepresentative season representative.</p>" +
                        "<p>For another assumed planning case, take <strong>AADT = 20,000 vehicles/day</strong>, a design-hour factor <strong>K = 0.10</strong>, and directional share <strong>D = 0.60</strong>. The selected two-way hour contains <strong>2000 vehicles</strong>, and the selected direction contains <strong>1200 vehicles</strong> during that hour. These empirical factors relate an annual daily average to a selected hourly count; the hourly unit must be stated. Two lanes in that direction do not automatically carry 600 each.</p>" +
                        "<p>The <strong>30th-highest annual hour</strong> is one design convention: order the annual hourly volumes from highest down and select that rank when the applicable method requires it. It is not the thirtieth clock-hour, a PHF, or a definition of capacity. Seasonal demand, analysis objectives and the governing design method determine the appropriate selection.</p>",
                    sources: []
                },
                {
                    id: "traffic-speed-studies-and-percentiles",
                    title: "Spot speeds, route speeds and percentiles have different uses",
                    html: "<p><strong>A spot-speed study describes speed near a specified point.</strong> An enoscope provides an optical reference for timing passage over a short measured base. Distance divided by traversal time estimates speed over that base; a sufficiently short base approximates a spot observation. The instrument does not remove timing error, alignment error or every parallax effect. Radar, paired detectors and video methods also require suitable geometry, calibration and representative sampling.</p>" +
                        "<p><strong>Time-mean speed</strong> is the arithmetic average of vehicle speeds in a fixed-point passage sample. It does not mean distance divided by the time spent standing at the roadside. <strong>Running speed</strong> uses route distance divided by moving time; <strong>journey speed</strong> uses total journey time, including relevant stops. The same trip can therefore have different running and journey speeds. Space-mean speed requires particular attention to the sampling basis, developed in the next lesson.</p>" +
                        "<p>An observed <strong>85th-percentile speed</strong> is a distribution statistic: approximately 85% of the sampled speeds are at or below it under the chosen quantile convention. A cumulative frequency curve or ordered sample locates the percentile; it is not 85% of the maximum speed. Sample size, site, direction, period, vehicle mix and whether free-moving or constrained vehicles were included affect the result.</p>" +
                        "<p>The bank's 85th-percentile choices reflect a traditional speed-regulation convention. <strong>An observed percentile is not automatically a safe or legal limit.</strong> Pedestrian activity, roadside access, crash severity, geometry, sight distance and the applicable regulatory process also matter. The claim that the 98th percentile is universally the geometric design speed is not adopted. A sample describes observed behaviour; it cannot by itself certify that behaviour as safe.</p>",
                    sources: [
                        { id: "TRAN808-00008", set: 2, question: 87 },
                        { id: "TRAN808-00013", set: 3, question: 81 },
                        { id: "TRAN808-00023", set: 4, question: 80 },
                        { id: "TRAN808-00251", set: 24, question: 82 }
                    ]
                },
                {
                    id: "traffic-mean-speed-sampling-example",
                    title: "Space mean is not the harmonic mean of every possible speed sample",
                    html: "<p><em>Syllabus extension: the speeds and sample distributions below are synthetic.</em> No assigned record supplies this numerical dataset. The central issue is which vehicles were sampled, not choosing an average merely because its name contains time or space.</p>" +
                        "<p>For fixed-point passage counts n<sub>i</sub> at positive speeds v<sub>i</sub>, <strong>V<sub>t</sub> = Σn<sub>i</sub>v<sub>i</sub>/Σn<sub>i</sub></strong>. Under compatible stationary sampling, the associated space mean is <strong>V<sub>s</sub> = Σn<sub>i</sub>/Σ(n<sub>i</sub>/v<sub>i</sub>)</strong>, the passage-count-weighted harmonic mean. Equal-distance traversals give the same harmonic form because total distance is divided by the sum of traversal times.</p>" +
                        "<p>Assume equal passage counts at <strong>30 and 60 km/h</strong>. The time mean is <strong>45 km/h</strong>; the compatible space mean is <strong>2/(1/30 + 1/60) = 40 km/h</strong>. Slower vehicles spend longer in a given road length, so their occupancy share is greater than their point-passage share.</p>" +
                        "<p>By contrast, a <strong>spatial occupancy snapshot</strong> uses the arithmetic average of the speeds of vehicles actually present, or a density-weighted average of speed classes. A synthetic snapshot containing speeds 30, 30 and 60 km/h has space mean <strong>(30 + 30 + 60)/3 = 40 km/h</strong>. A different snapshot containing just 30 and 60 has space mean <strong>45 km/h</strong>, not 40. It is wrong to apply a harmonic mean indiscriminately to snapshot observations.</p>" +
                        "<p>For compatible time- and space-distributed populations, <strong>V<sub>t</sub> = V<sub>s</sub> + σ<sub>s</sub><sup>2</sup>/V<sub>s</sub></strong>, where σ<sub>s</sub><sup>2</sup> is the <strong>space-distribution population variance</strong>. In the two-thirds-at-30, one-third-at-60 example, σ<sub>s</sub><sup>2</sup> = 200 (km/h)<sup>2</sup>, giving <strong>40 + 200/40 = 45 km/h</strong>. The identity follows because passage frequencies weight spatial frequencies by speed. It does not use an arbitrary sample variance or a time-sample variance in place of σ<sub>s</sub><sup>2</sup>.</p>" +
                        "<p>Consequently V<sub>t</sub> ≥ V<sub>s</sub> for those compatible distributions, with equality at zero dispersion. Stopped occupants can belong in a spatial snapshot but do not pass the point while stopped; a positive-speed harmonic passage formula must not be used to pretend that such a sample fully represents a queue.</p>",
                    sources: []
                },
                {
                    id: "traffic-flow-headway-and-conservation",
                    title: "Match the boundaries before using flow, density and headway equations",
                    html: "<p><em>Syllabus extension: fundamental flow relationships and the steady-stream example are not directly calculated in the assigned bank.</em> Every number below is hypothetical. A model identity is useful only when its measurements describe compatible road space, time and traffic populations.</p>" +
                        "<p><strong>q = N/T</strong> counts vehicles crossing a defined section during T. <strong>k = N/L</strong> counts vehicles present in a defined length L at an instant; N here is an occupancy count, not the earlier crossing count. With q in vehicles/h, k in vehicles/km and a compatible space-mean speed in km/h, <strong>q = kV<sub>s</sub></strong>. For a steady uniform stream, the vehicles occupying length V<sub>s</sub>T pass in time T, which explains the product. Unrelated point counts and snapshots need not satisfy it exactly.</p>" +
                        "<p>A hypothetical steady, single-lane directional stream has 15 vehicles in 0.5 km, so <strong>k = 30 vehicles/km</strong>. At V<sub>s</sub> = 40 km/h, <strong>q = 1200 vehicles/h</strong>. A representative mean time headway is then <strong>h̄ = 3600/q = 3 s</strong>, and mean gross spacing is approximately <strong>1000/k = 33.33 m</strong>. The compatible relation s̄ = vh̄ gives the same result using v = 40/3.6 m/s.</p>" +
                        "<p><strong>Time headway</strong> is elapsed time between corresponding points on successive vehicles passing a reference point. Gross space headway includes the leader's vehicle length; the clear following gap does not. A short observed gap is neither a recommended following distance nor proof of sustainable capacity.</p>" +
                        "<p>Boundary counting matters: N recorded arrivals contain <strong>N − 1 intervening headways</strong>. The reciprocal mean headway estimates the passage rate over those intervals, not automatically N divided by the same first-to-last-arrival span. Likewise, reciprocal spacing requires appropriate boundary treatment; there are not N internal gaps between N vehicles in a finite snapshot.</p>" +
                        "<p>Vehicle conservation supplies another check: <strong>change in vehicles stored = entries − exits</strong>, including any side entries or exits within the segment. Growing storage explains a queue even when a downstream counter reports a low discharge. Two-way flow, one-lane density and a different-period speed cannot be combined without reconciling their boundaries.</p>",
                    sources: []
                },
                {
                    id: "traffic-greenshields-and-waves",
                    title: "Greenshields predicts a capacity point and waves distinct from vehicle motion",
                    html: "<p><em>Syllabus extension: traffic-stream modelling beyond the assigned parameter-identification questions.</em> Greenshields is an idealised calibrated model, not a universal law or a Nepal capacity standard. The numerical parameters and states below are invented.</p>" +
                        "<p>Assume a linear speed–density relation <strong>V = V<sub>f</sub>(1 − k/k<sub>j</sub>)</strong>, where V<sub>f</sub> is free-flow speed and k<sub>j</sub> is jam density. Combining it with q = kV gives <strong>q = V<sub>f</sub>k(1 − k/k<sub>j</sub>)</strong>, a downward flow–density parabola. The model is considered over 0 ≤ k ≤ k<sub>j</sub>; extrapolating beyond jam density would generate meaningless negative speeds.</p>" +
                        "<p>Differentiation gives <strong>dq/dk = V<sub>f</sub>(1 − 2k/k<sub>j</sub>)</strong>. Setting the derivative to zero yields <strong>k<sub>c</sub> = k<sub>j</sub>/2</strong>, <strong>V<sub>c</sub> = V<sub>f</sub>/2</strong> and <strong>q<sub>max</sub> = V<sub>f</sub>k<sub>j</sub>/4</strong>. For assumed V<sub>f</sub> = 60 km/h and k<sub>j</sub> = 120 vehicles/km/lane, the results are <strong>60 vehicles/km/lane, 30 km/h and 1800 vehicles/h/lane</strong>. Jam density itself is not the capacity flow.</p>" +
                        "<p>At q = 1000 vehicles/h/lane, this synthetic model permits k = 20 with V = 50 km/h, or k = 100 with V = 10 km/h. The same sub-capacity flow can therefore describe uncongested or congested operation. A flow counter alone cannot distinguish those states.</p>" +
                        "<p>Conservation across a moving boundary gives <strong>w = (q<sub>2</sub> − q<sub>1</sub>)/(k<sub>2</sub> − k<sub>1</sub>)</strong> for distinct densities. Taking downstream as positive, the model states (k<sub>1</sub>, q<sub>1</sub>) = (20, 1000) and (k<sub>2</sub>, q<sub>2</sub>) = (110, 550) produce <strong>w = −450/90 = −5 km/h</strong>. The boundary moves upstream although vehicles in both states move downstream.</p>" +
                        "<p>Keep three speeds separate: vehicle speed q/k, small-disturbance speed dq/dk, and the finite shock speed w. At the parabola's maximum, dq/dk = 0 while vehicles still travel at 30 km/h in this example. Real traffic may require different diagrams, capacity-drop treatment and calibration; the neat half-jam result belongs to this particular model.</p>",
                    sources: []
                },
                {
                    id: "traffic-capacity-and-service",
                    title: "Capacity depends on control as well as geometry",
                    html: "<p><strong>Demand, observed flow, capacity and level of service are different quantities.</strong> Demand is the traffic seeking service. Observed flow is what passes the observation point. Capacity is an estimated maximum sustainable service rate for specified prevailing conditions and an analysis period; it is not a universal highest-safe-flow guarantee. A downstream bottleneck can suppress observed flow while demand and queues grow upstream.</p>" +
                        "<ul><li><strong>Geometry:</strong> lane width and number, gradient, lateral clearance, alignment and junction layout affect movement.</li><li><strong>Traffic:</strong> composition, turning proportions, lane use, vehicle performance and driver behaviour affect service.</li><li><strong>Control:</strong> signal allocation, priority and permitted movements determine when conflicting streams can be served.</li><li><strong>Environment:</strong> weather, visibility, incidents, roadside activity and downstream blocking can change the prevailing conditions.</li></ul>" +
                        "<p>For a signal lane group, <strong>c = s(g/C)</strong>: saturation flow s is multiplied by the effective-green fraction. This directly shows why a traffic control device can affect capacity. All four alternatives in the bank's capacity-factor question can influence capacity; the explanation's distinction between management and physical capacity does not justify excluding controls from the broadly worded question.</p>" +
                        "<p>An uncontrolled or priority intersection depends on conflicting flows, available gaps, turning demand, geometry and behaviour. The bank's <strong>1200–1400 vehicles/h</strong> range is not a transferable capacity for every uncontrolled junction, and changing vehicles/h to PCU/h in the explanation does not repair the missing basis.</p>" +
                        "<p>Degree of saturation compares compatible demand and capacity, often as q/c. A value below one does not mean zero delay: vehicles can still wait during red or for an acceptable gap. Level of service describes an operating quality under a named facility-specific method; travel speed, delay and density play different roles for different facilities. Daily service volumes must not be relabelled as hourly per-lane capacities.</p>",
                    sources: [
                        { id: "TRAN808-00246", set: 23, question: 87 },
                        { id: "TRAN808-00266", set: 25, question: 84 }
                    ]
                },
                {
                    id: "traffic-od-trips-and-surveys",
                    title: "Origin–destination studies follow trips, not only motor vehicles",
                    html: "<p><strong>A trip is a one-way movement from an origin to a destination for a defined purpose.</strong> A return journey normally contains two trips. No minimum distance such as 50 km is inherent in the definition. Person trips, vehicle trips and public-transport boardings are different counting units; a transfer or an intermediate activity needs an explicit treatment in the adopted survey definition.</p>" +
                        "<p>Home-based work, home-based other and non-home-based form one useful three-category grouping, not the only possible taxonomy. A home-based trip has home at one end; it need not start at home. Trips can also be classified by mode, detailed purpose or their relationship to a study-area boundary. Through trips may suggest bypass potential, but an OD table alone does not prove how many would use a proposed diversion.</p>" +
                        "<p>Household or traveller questionnaires, terminal surveys, roadside interviews and appropriately governed aggregate movement data have different coverage and bias. Roadside interviews can disrupt traffic because they involve interruption of normal travel. Such fieldwork requires authorised safety arrangements; these notes provide no procedure for stopping vehicles or deploying controls.</p>" +
                        "<p><strong>OD information can support weaving analysis and pedestrian planning.</strong> Entry-to-exit movement proportions help distinguish weaving from non-weaving traffic. Walking trips also have origins, destinations and route choices. A particular vehicle survey may omit pedestrians, but that limited scope is not a general exclusion from OD studies.</p>" +
                        "<p>Mail-back questionnaires can reduce the time needed for a full roadside interview, but distribution, nonresponse and respondent self-selection remain important. The bank's claim that low volume inherently gives a higher response rate is unsupported. A legacy high-volume disruption-reduction rationale is conditional, not an independently established replacement key here. Survey validity requires a defined population, period, sampling and expansion method; anonymous or aggregated teaching data should not be confused with personal trip records.</p>",
                    sources: [
                        { id: "TRAN808-00220", set: 21, question: 84 },
                        { id: "TRAN808-00222", set: 21, question: 85 },
                        { id: "TRAN808-00248", set: 23, question: 89 },
                        { id: "TRAN808-00262", set: 1, question: 86 },
                        { id: "TRAN808-00263", set: 25, question: 81 },
                        { id: "TRAN808-00264", set: 25, question: 82 }
                    ]
                },
                {
                    id: "traffic-desire-lines-and-flow-maps",
                    title: "Desire lines show connections; network flow maps show assigned links",
                    html: "<p><strong>An OD matrix records movement between zones.</strong> Its row totals count trips originating in each zone; its column totals count trips terminating there. With complete accounting of the same trip set, both sets of totals sum to the same overall number. That arithmetic does not require each zone's incoming total to equal its outgoing total within a selected hour.</p>" +
                        "<p>A <strong>desire-line map</strong> connects origins and destinations, commonly by straight lines between representative zone points. Line width, or a specified darkness scale, represents the trip amount according to a legend. It shows the strength of a connection, not necessarily the route travelled. A heavy line crossing a river on the diagram does not assert that a bridge exists at that point.</p>" +
                        "<p>A <strong>network traffic-flow map</strong> places traffic quantities on the actual or proposed road links. Link width can represent link volume. To obtain these flows from OD demand, an assignment needs routes and assumptions about network availability, travel cost or route choice. Several OD movements can share one link, and a single OD movement can split across routes.</p>" +
                        "<ul><li><strong>Quantity:</strong> specify persons or vehicles and the period. Annual daily traffic and peak-hour trips are not the same legend unit.</li><li><strong>Direction:</strong> arrows or separately drawn directional lines are needed if direction is to be shown; width alone does not encode it.</li><li><strong>Scale:</strong> a binned or nonlinear legend must not be read as a strictly proportional width scale.</li><li><strong>Coverage:</strong> omitted short trips, intrazonal trips and poorly sampled zones can distort an apparently clear map.</li></ul>" +
                        "<p>The desire-line answers in the bank are consistent with OD analysis. The traffic-flow-map explanation is too narrow when it makes every flow map a desire-line map. Neither display independently measures capacity, establishes a new-road alignment, or predicts future growth without additional analysis.</p>",
                    sources: [
                        { id: "TRAN808-00112", set: 12, question: 79 },
                        { id: "TRAN808-00223", set: 21, question: 86 },
                        { id: "TRAN808-00245", set: 23, question: 86 }
                    ]
                },
                {
                    id: "traffic-od-matrix-example",
                    title: "A synthetic OD table separates trip totals from route assignment",
                    html: "<p><em>Syllabus extension: this entire matrix is invented, non-personal teaching data.</em> Assume a sample of person trips departing during a selected hour between abstract zones A, B and C, with each sampled trip's destination identified even if arrival occurs later. Intrazonal trips are explicitly assumed absent in this illustration, not measured to be absent in a real place.</p>" +
                        "<table><thead><tr><th scope='col'>O / D</th><th scope='col'>A</th><th scope='col'>B</th><th scope='col'>C</th><th scope='col'>Total</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>0</td><td>40</td><td>10</td><td>50</td></tr>" +
                        "<tr><th scope='row'>B</th><td>20</td><td>0</td><td>30</td><td>50</td></tr>" +
                        "<tr><th scope='row'>C</th><td>10</td><td>10</td><td>0</td><td>20</td></tr>" +
                        "<tr><th scope='row'>Total</th><td>30</td><td>50</td><td>40</td><td>120</td></tr></tbody></table>" +
                        "<p>Origins sum to <strong>50 + 50 + 20 = 120</strong>, while destinations sum to <strong>30 + 50 + 40 = 120</strong>. Within this sampled trip cohort, 50 trips originate in A and 30 have A as their destination. These are not necessarily matched-hour departure and arrival counts, and the unequal zone totals are not a conservation error. The A-to-B movement is 40; a two-way A–B desire line would represent <strong>40 + 20 = 60</strong> only if the legend explicitly combines directions.</p>" +
                        "<p>Suppose, additionally and hypothetically, that this is a representative 20% sample with an appropriate common expansion factor. Multiplying by five gives an estimated <strong>600 person trips</strong> for the hour. This result is conditional: a 20% questionnaire return rate alone does not prove equal inclusion probability or eliminate nonresponse bias. Real expansion may need different weights by zone, time, purpose or mode.</p>" +
                        "<p>The table contains no paths, vehicle occupancies or intersection entry–exit geometry. It therefore cannot by itself yield vehicles/h on a particular road or a weaving proportion. Those require a compatible route or movement assignment. The example uses abstract zones rather than identifiable homes, device tracks or individual travel histories.</p>",
                    sources: []
                },
                {
                    id: "traffic-travel-time-and-delay",
                    title: "Delay is extra time relative to a declared reference",
                    html: "<p><strong>A travel-time and delay study describes the quality of movement along a route.</strong> It measures elapsed travel time and identifies where time is spent. Repeated observations in different periods and directions are needed to distinguish a persistent bottleneck from a single unusual journey. Mean time alone can conceal unreliable travel or a small group experiencing very long delays.</p>" +
                        "<p>For a specified route and comparable trip, <strong>delay = actual travel time − reference travel time</strong>. The reference may be an explicitly defined unimpeded or other baseline condition; it is not automatically the fastest observed trip. <strong>Stopped delay</strong> counts stationary time. <strong>Control delay</strong> can include slowing, queueing, stopping and acceleration associated with a control. Total travel delay can also include other impediments, so it should not be assumed equal to stopped time alone.</p>" +
                        "<ul><li><strong>Test-vehicle or floating-car observations:</strong> relate elapsed times and delay locations to a stated sampling strategy; one selected driver is not automatically the whole stream.</li><li><strong>Matched observations or aggregated probe data:</strong> can estimate traversal times, but match errors, sampling coverage and privacy require attention.</li><li><strong>Time–distance interpretation:</strong> a horizontal distance plateau over advancing time represents a stop; slower movement accumulates time even without a full stop.</li><li><strong>Diagnosis:</strong> relate delay locations to demand, control, roadside activity, downstream blocking and geometry rather than inferring a cause from a total alone.</li></ul>" +
                        "<p>The bank's <strong>fixed delay</strong> is a legacy cause-based label for delay associated with signals, railway crossings or similar controls, contrasted with operational interference. It does <strong>not</strong> mean that actual signal delay is independent of traffic volume or that every control has a constant duration. Arrival patterns, queues and timing influence the delay experienced. Likewise, travel time helps assess service quality but does not assign a formal LOS grade without the appropriate facility and assessment method.</p>",
                    sources: [
                        { id: "TRAN808-00221", set: 1, question: 85 },
                        { id: "TRAN808-00240", set: 23, question: 81 },
                        { id: "TRAN808-00241", set: 23, question: 82 }
                    ]
                },
                {
                    id: "traffic-parking-studies-and-layouts",
                    title: "Parking studies connect supply, duration, use and unmet demand",
                    html: "<p><strong>Parking studies examine available spaces and the demand to occupy them.</strong> An inventory records the location, number, restrictions, access and suitability of spaces. An occupancy survey records use. A full facility can conceal rejected demand, circulating search traffic or displaced parking; low occupancy can reflect price or access restrictions. Observed occupancy alone is therefore not total latent demand.</p>" +
                        "<p><strong>On-street or kerb parking</strong> is classified by location beside the road. <strong>Off-street parking</strong> is provided in a separate lot, structure or similar facility away from the carriageway. Parallel, angled and right-angle parking describe orientation, not that location classification. Both parallel and angled arrangements can occur off-street; merely saying along the kerb does not necessarily mean parallel orientation.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Definition</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Accumulation A(t)</th><td>Vehicles present at a given instant; initial accumulation plus entries minus exits.</td></tr>" +
                        "<tr><th scope='row'>Parking volume</th><td>Parking visits in a declared period. Repeated visits and distinct vehicles are different counts.</td></tr>" +
                        "<tr><th scope='row'>Parking load</th><td>Integral of accumulation over time, in vehicle-hours when time is in hours.</td></tr>" +
                        "<tr><th scope='row'>Occupancy or index</th><td>Occupied vehicle-hours divided by compatible available bay-hours, commonly expressed as a percentage.</td></tr>" +
                        "<tr><th scope='row'>Turnover</th><td>Visits per bay during the stated period, or visits per bay-hour if expressly time-normalised.</td></tr></tbody></table>" +
                        "<p>Duration distributions distinguish short visits from long stays. Mean duration calculated as load divided by visits needs the same observation boundary or a complete compatible cohort. A stay beginning before the survey or ending after it is truncated unless its full duration is obtained separately.</p>" +
                        "<p>Angled parking can fit more vehicles per metre of kerb but uses different depth and manoeuvring space. That is not proof of greater efficiency per square metre of total site area. Access, visibility, pedestrians, loading activity and reversing interactions remain part of the assessment.</p>",
                    sources: [
                        { id: "TRAN808-00239", set: 23, question: 80 },
                        { id: "TRAN808-00250", set: 24, question: 81 },
                        { id: "TRAN808-00268", set: 25, question: 86 }
                    ]
                },
                {
                    id: "traffic-parking-cohort-example",
                    title: "Worked parking load, occupancy, duration and turnover",
                    html: "<p><em>Syllabus extension: this is a wholly hypothetical, non-personal parking dataset.</em> Assume 20 usable bays remain available throughout a two-hour observation. There are 24 parking visits, all beginning and ending inside the window, no initial or final occupied bays, and a measured sum of complete stay durations of 16 vehicle-hours. No individual identifiers are needed.</p>" +
                        "<p>Available space-time is <strong>20 × 2 = 40 bay-hours</strong>. Parking load is <strong>P = ∫A(t)dt = 16 vehicle-hours</strong>, equivalently the sum of those complete visits' durations. The mean accumulation is <strong>16/2 = 8 vehicles</strong>, but this average does not reveal peak accumulation or when spaces were unavailable.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Calculation and interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Occupancy</th><td>100 × 16/40 = <strong>40%</strong> of available bay-hours occupied.</td></tr>" +
                        "<tr><th scope='row'>Mean duration</th><td>16/24 h = <strong>40 minutes per visit</strong> for this complete cohort.</td></tr>" +
                        "<tr><th scope='row'>Period turnover</th><td>24/20 = <strong>1.2 visits/bay over two hours</strong>.</td></tr>" +
                        "<tr><th scope='row'>Time-normalised turnover</th><td>24/(20 × 2) = <strong>0.6 visits/(bay·hour)</strong>.</td></tr></tbody></table>" +
                        "<p>The numerator and denominator must describe the same usable facility and period. If bays close partway through a survey, available bay-hours are summed over the varying supply rather than assumed constant. If the load includes carry-in vehicles but volume counts only new arrivals, load/volume is not the mean full duration of those arrivals.</p>" +
                        "<p>These totals do not reveal the number of distinct vehicles, the number of people visiting, rejected demand or parking search time. A turnover of 1.2 is neither an occupancy percentage nor necessarily 1.2 per hour. The complete-cohort assumptions make this arithmetic valid; they are not claims about the missing data in any bank question.</p>",
                    sources: []
                },
                {
                    id: "traffic-crash-studies-and-diagrams",
                    title: "A collision diagram reveals patterns, not proof of a single cause",
                    html: "<p><strong>Crash studies examine the occurrence, severity and circumstances of collisions.</strong> The bank uses accident terminology; the engineering task is to understand preventable risk rather than assume every event was unavoidable. Useful records distinguish location, date, movement, crash type, severity, road condition, lighting and the relevant exposure. Aggregation should avoid unnecessary personal details.</p>" +
                        "<p>A <strong>collision diagram</strong> schematically places crash movements and types at a location. A cluster of similar turning or crossing events can suggest a conflict needing investigation. A <strong>condition diagram</strong> records features such as layout, controls, accesses, visibility obstructions and roadside conditions. The two diagrams answer complementary questions: what happened and what physical or operational circumstances were present.</p>" +
                        "<ul><li><strong>Frequency:</strong> count events over an identified period and spatial boundary.</li><li><strong>Severity:</strong> distinguish outcome categories under the source's definitions; a total can conceal a change in serious injuries.</li><li><strong>Exposure:</strong> traffic volume and, for segments, distance travelled affect the opportunity for events. Raw counts alone are not comparable risk rates.</li><li><strong>Quality:</strong> missing reports, location errors, changing definitions and underreporting influence the apparent pattern.</li></ul>" +
                        "<p>A diagram cannot establish causation merely because several symbols are close together. Comparison sites, operational observations, road-user behaviour and physical evidence help distinguish hypotheses. Before-and-after evaluation should consider exposure changes, broader trends and <strong>regression to the mean</strong>: a site selected after an unusually bad period may improve partly through random fluctuation.</p>" +
                        "<p>A blackspot designation requires the applicable authority's definition and screening method. No universal threshold such as a fixed number of crashes is invented here. The bank's record-of-occurrence answer captures the diagram's purpose, but its incomplete alternatives do not justify treating the diagram as a complete safety assessment.</p>",
                    sources: [{ id: "TRAN808-00249", set: 24, question: 80 }]
                },
                {
                    id: "traffic-crash-exposure-examples",
                    title: "Segment and intersection crash rates need different denominators",
                    html: "<p><em>Syllabus extension: all crash counts, traffic volumes, lengths and periods below are invented.</em> They are not reports about a real road or people. The formulas use metric exposure units derived explicitly; a foreign reference's vehicle-mile convention is not silently relabelled vehicle-km.</p>" +
                        "<p>For A crashes on a segment of length L<sub>km</sub>, with representative AADT over D days, <strong>R<sub>segment</sub> = 10<sup>6</sup>A/(AADT × D × L<sub>km</sub>)</strong>. The denominator is vehicle-km, giving <strong>crashes per million vehicle-km</strong>. AADT and crash coverage must include the same direction or directions and the same segment.</p>" +
                        "<p>Assume 30 crashes, AADT = 10,000 vehicles/day, D = 1095 days and L = 2 km. Exposure is <strong>21,900,000 vehicle-km</strong>; <strong>R = 30/21.9 = 1.37 crashes per million vehicle-km</strong>, rounded. The explicitly assumed 1095 days must not replace actual elapsed days when a real study spans a leap day.</p>" +
                        "<p>For an intersection, use total entering traffic over the matched study period: <strong>R<sub>intersection</sub> = 10<sup>6</sup>A/(AADT<sub>entering</sub> × D)</strong>. There is <strong>no segment-length multiplier</strong>. With 12 hypothetical crashes, 20,000 entering vehicles/day and 1095 days, exposure is 21,900,000 entering vehicles and the rate is <strong>12/21.9 = 0.548 crashes per million entering vehicles</strong>, rounded. This is not the same risk measure as the segment result.</p>" +
                        "<p>Entering AADT sums the inbound approaches without adding the corresponding exits a second time. When exposure varies materially by day, year or subsegment, sum compatible traffic exposure rather than imposing a constant AADT. Keep crash severities, reporting definitions, dates and spatial limits consistent in comparisons.</p>" +
                        "<p><strong>No zero denominator is allowed.</strong> Missing or zero exposure makes the normalised rate unavailable, not automatically zero or a usable infinite risk score. Zero crashes with positive exposure gives an observed zero rate, not proof of zero underlying risk. Low event counts require caution about uncertainty, even when arithmetic is exact.</p>",
                    sources: []
                },
                {
                    id: "traffic-intersection-and-interchange-conflicts",
                    title: "Grade separation removes crossings, not every interaction",
                    html: "<p><strong>At-grade intersections bring roads together on the same level.</strong> T, Y, crossroad, staggered and multi-leg configurations impose different movement and visibility problems. Channelisation uses lanes, islands or markings to organise paths; it can simplify decisions but does not automatically eliminate conflicts or justify higher speeds.</p>" +
                        "<table><thead><tr><th scope='col'>Interaction</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Crossing</th><td>Paths intersect across each other; pedestrian crossings must be considered as well as vehicle movements.</td></tr>" +
                        "<tr><th scope='row'>Merging</th><td>Streams join and compete for a common downstream path.</td></tr>" +
                        "<tr><th scope='row'>Diverging</th><td>A stream separates into different paths, with possible speed changes and lane-choice interactions.</td></tr>" +
                        "<tr><th scope='row'>Weaving</th><td>Entering and leaving streams exchange relative positions over a common road length.</td></tr></tbody></table>" +
                        "<p><strong>Grade separation</strong> carries the crossing roads at different levels. A crossing without connecting ramps is not necessarily an interchange; an <strong>interchange</strong> also provides traffic connections. Grade separation removes the main-road crossing interaction, while ramp merges, diverges, weaving and any at-grade ramp terminals still need assessment.</p>" +
                        "<p>A diamond commonly has ramp-terminal junctions on the crossroad. A trumpet is commonly suited to a three-leg connection and is not inherently an at-grade-conflict layout. A full cloverleaf provides loop connections for the crossing turns but introduces weaving in its conventional arrangement. <strong>In Nepal's left-driving arrangement, conventional cloverleaf loops serve right turns</strong>; importing the US right-driving left-turn explanation reverses the movement.</p>" +
                        "<p>Direct, semi-direct and indirect or loop describe <strong>ramp forms</strong>; cloverleaf describes the overall interchange arrangement. Selection depends on demand by movement, land, speed consistency, weaving, queue storage, pedestrian and cycle access, cost and surrounding connections. No layout is automatically conflict-free, highest-capacity or safest in all circumstances. The number of arms alone also does not equal the number of individual traffic movements or conflict points.</p>",
                    sources: [
                        { id: "TRAN808-00016", set: 3, question: 84 },
                        { id: "TRAN808-00055", set: 6, question: 90 },
                        { id: "TRAN808-00056", set: 7, question: 80 },
                        { id: "TRAN808-00265", set: 25, question: 83 },
                        { id: "TRAN808-00267", set: 25, question: 85 }
                    ]
                },
                {
                    id: "traffic-roundabout-path-radius",
                    title: "The 27 m answer is a path-curvature calculation, not an island design",
                    html: "<p><strong>A circular vehicle path requires lateral acceleration.</strong> A conventional small-angle road-curvature relation combines crossfall or superelevation e and an assumed lateral friction factor f as <strong>e + f = V<sup>2</sup>/(127R)</strong>, with V in km/h and R in metres. The unit factor 127 incorporates gravity and the speed conversion. Both e and f are dimensionless; a percentage crossfall would first need conversion to a fraction.</p>" +
                        "<p><strong>Actual assigned bank data:</strong> V = 35 km/h, e = 0 and f = 0.36. Therefore <strong>R = 35<sup>2</sup>/(127 × 0.36)</strong>. The numerator is 1225 and the denominator is <strong>45.72</strong>, giving <strong>R = 26.79 m</strong>, approximately. The offered <strong>27 m</strong> is the correct rounded arithmetic, not 16, 36 or 49 m.</p>" +
                        "<p>The calculation uses the stipulated friction factor; it does not establish that 0.36 is an allowable value in an applicable Nepal roundabout standard. A friction factor selected for one purpose, pavement condition or speed range must not be assumed suitable for another. The relation also does not address heavy-vehicle stability, braking while turning or wet-weather performance in full.</p>" +
                        "<p><strong>Vehicle-path radius is not central-island radius.</strong> Entry paths, circulatory width, exit geometry, vehicle swept envelopes and island shape determine how drivers actually negotiate a junction. An entry can have a critical path radius different from the circulation path. Pedestrian provision, sight lines, approach-speed consistency and the applicable capacity method are separate considerations.</p>" +
                        "<p>A modern yield-controlled roundabout and a traditional rotary analysed by a weaving-section formula should not be treated as identical analytical models. This worked case checks the bank's stated arithmetic only; it is not a complete roundabout layout, a safety certification or a field-design recommendation.</p>",
                    sources: [{ id: "TRAN808-00028", set: 4, question: 85 }]
                },
                {
                    id: "traffic-rotary-weaving-capacity",
                    title: "The rotary formula gives 1085, but the geometry invalidates its engineering use",
                    html: "<p><strong>A traditional rotary weaving model concerns one weaving section, not automatically the entire junction.</strong> Weaving traffic changes relative position between an entry and the following exit. Its proportion p is weaving traffic divided by all traffic in that section, so a movement or entry–exit account is required. Ordinary total volume alone cannot determine p.</p>" +
                        "<p>The cited empirical relation is <strong>Q<sub>w</sub> = 280w(1 + e/w)(1 − p/3)/(1 + w/l)</strong>, giving PCU/h for its specified metre-based geometry. Here w is weaving-section width, l is weaving-section length, and <strong>e = (entry width + exit width)/2</strong> is their average for that section. <strong>This e is a width, not the dimensionless superelevation e in the preceding curvature equation.</strong></p>" +
                        "<p><strong>Bank arithmetic under an added interpretation:</strong> the stem gives w = 12 m, an average entry width of 0.4 m, l = 7.2 m and p = 0.5. It does not establish the entry-and-exit average required by the model. If its 0.4 m is provisionally inserted as e, the factors are <strong>280w = 3360</strong>, <strong>1 + e/w = 31/30</strong>, <strong>1 − p/3 = 5/6</strong> and <strong>1 + w/l = 8/3</strong>. Multiplying and dividing gives <strong>Q<sub>w</sub> = 1085 PCU/h</strong>, not 1088. The keyed 1088 is merely the nearest offered number, and the options themselves omit the per-hour unit.</p>" +
                        "<table><thead><tr><th scope='col'>Check</th><th scope='col'>Bank geometry</th><th scope='col'>Cited model range</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>e/w</th><td>0.0333</td><td>0.4–1</td></tr>" +
                        "<tr><th scope='row'>w/l</th><td>1.6667</td><td>0.12–0.4</td></tr>" +
                        "<tr><th scope='row'>l</th><td>7.2 m</td><td>18–90 m</td></tr></tbody></table>" +
                        "<p>These applicability limits are those reproduced in the cited IIT rotary teaching reference, not a declaration of current Nepal adoption. The two ratios and length are outside them, and a 0.4 m average entry width is implausible for the stated vehicle facility. <strong>Even the corrected arithmetic is not an engineering-valid capacity estimate.</strong> Changing the answer to 1085 alone would not repair the problem; changing its width or length without evidence would invent a new question.</p>" +
                        "<p>The separate angle question asks for a <strong>minimum 15°</strong> while its explanation says <strong>15° or less</strong>. Those statements conflict. Gradual weaving is a useful qualitative aim, but neither a verified minimum nor a general maximum angle is established by that explanation. Whole-junction evaluation must also consider other sections, entries and downstream constraints.</p>",
                    sources: [
                        { id: "TRAN808-00059", set: 7, question: 83 },
                        { id: "TRAN808-00060", set: 7, question: 84 }
                    ]
                },
                {
                    id: "traffic-signals-and-effective-time",
                    title: "Signal intervals, lost time and effective green are not interchangeable",
                    html: "<p><strong>Signals allocate opportunities for conflicting movements in time.</strong> Appropriate phasing can reduce crossing and some turning conflicts and provide more orderly service, including pedestrian opportunities. Stopping and queueing can increase rear-end crashes. Neither a safety improvement nor a rear-end increase is inevitable at every installation, and a permissive turning movement can retain conflicts even during green.</p>" +
                        "<p>The bank associates <strong>amber</strong> with clearance time. More precisely, the yellow or amber change interval and an <strong>all-red clearance interval</strong> are distinct parts of signal timing. The inspected Nepal Traffic Signs Manual, August 1997, §E5.3 explains signal indications, but expressly does not provide a comprehensive phasing-design guide. Amber is not unrestricted permission to enter the junction; green is also subject to movement restrictions and conflicts allowed by the particular design.</p>" +
                        "<p>For analysis, <strong>displayed green G</strong> is the visible indication duration. <strong>Effective green g</strong> is an equivalent duration of service at the saturation discharge rate. Startup losses mean the first part of a queue's discharge is not at its settled saturation rate; some usable discharge can occur outside the displayed green. Therefore g and G need not be equal.</p>" +
                        "<p>One consistent accounting convention is <strong>g = G + a + r − (l<sub>1</sub> + l<sub>2</sub>)</strong>, where a is yellow, r is all-red, l<sub>1</sub> is startup loss and l<sub>2</sub> is clearance loss. All intervals use the same time unit. Clearance loss must include the unused clearance intervals under that convention: adding all-red and then forgetting to account for its unused time would create fictitious capacity.</p>" +
                        "<p>For a simple sequence of non-overlapping critical phases, <strong>Σg<sub>i</sub> = C − L</strong>, where C is cycle length and L total lost time. Overlapping phases require their actual critical-path accounting rather than summing every lane group's green. These definitions support paper analysis only; site-specific pedestrian, clearance, controller and conflict checks are indispensable before any authorised implementation.</p>",
                    sources: [
                        { id: "TRAN808-00011", set: 2, question: 90 },
                        { id: "TRAN808-00052", set: 6, question: 87 },
                        { id: "TRAN808-00247", set: 23, question: 88 }
                    ]
                },
                {
                    id: "traffic-webster-bank-cases",
                    title: "Webster gives 58 s and 50 s for the two stated bank cases",
                    html: "<p><strong>Webster's optimum-cycle approximation is C<sub>0</sub> = (1.5L + 5 s)/(1 − Y).</strong> L is lost time per cycle in seconds, and Y is the dimensionless sum of critical flow ratios for the successive phase requirements. Use a different symbol, such as a, for amber duration; the flow-ratio sum Y is not yellow time.</p>" +
                        "<p>A lane-group ratio is <strong>y = q/s</strong>, with demand q and saturation flow s on the same vehicle or PCU and lane-group basis. <strong>Identify the phase arrangement first.</strong> Concurrent nonconflicting opposing movements generally contribute the controlling requirement rather than the blind sum of their individual ratios. Turning phases, shared lanes and overlapping service require an appropriate critical-movement analysis.</p>" +
                        "<p><strong>Model 7, Q82:</strong> interpreting the two approaches as separately served critical phases, q<sub>1</sub> = 500 PCU/h, q<sub>2</sub> = 300 PCU/h and each s = 1600 PCU/h. Thus <strong>y<sub>1</sub> = 0.3125</strong>, <strong>y<sub>2</sub> = 0.1875</strong> and <strong>Y = 0.5</strong>. With L = 16 s, <strong>C<sub>0</sub> = (24 + 5)/0.5 = 58 s</strong>. The currently stored 58.0 s choice is correct under that interpretation; 48 s is not.</p>" +
                        "<p>The available total effective green is <strong>58 − 16 = 42 s</strong>. A proportional allocation gives <strong>g<sub>1</sub> = 42(0.3125/0.5) = 26.25 s</strong> and <strong>g<sub>2</sub> = 42(0.1875/0.5) = 15.75 s</strong>. These are derived effective greens, not automatically displayed greens or an approved two-phase plan. If the two demands are served concurrently, the assumed summation must be reconsidered.</p>" +
                        "<p><strong>Model 7, Q86:</strong> interpreting its lost-time value as L = 10 s and its proportion sum as Y = 0.6 gives <strong>C<sub>0</sub> = (15 + 5)/0.4 = 50 s</strong>. The options omit seconds, but the calculation and currently stored 50 choice agree.</p>" +
                        "<p>Webster is an isolated, undersaturated, approximate minimum-delay model. <strong>Y ≥ 1 gives no usable solution</strong> from this expression. A mathematical optimum does not resolve pedestrian minima, oversaturation, spillback, network coordination or safety constraints. Both worked results are educational checks of the assigned data, not traffic-control operating instructions.</p>",
                    sources: [
                        { id: "TRAN808-00058", set: 7, question: 82 },
                        { id: "TRAN808-00062", set: 7, question: 86 }
                    ]
                },
                {
                    id: "traffic-signal-capacity-example",
                    title: "Signal capacity must be normalised by cycle time and seconds per hour",
                    html: "<p><em>Syllabus extension: all signal timings and flows in this block are hypothetical accounting inputs.</em> They are not bank givens, recommended clearance intervals, controller settings or a plan for a real intersection. Assume an otherwise unblocked lane group with a standing queue able to use its effective green.</p>" +
                        "<p>Suppose saturation flow is <strong>s = 1800 PCU/h</strong>, effective green is <strong>g = 30 s</strong> and cycle length is <strong>C = 90 s</strong>. Since g/C is dimensionless, <strong>c = s(g/C) = 1800(30/90) = 600 PCU/h</strong>. Saturation flow describes service during effective green, not the group's average service throughout red and green together.</p>" +
                        "<p>The same result follows by counting cycles. Effective discharge per cycle is <strong>1800 × 30/3600 = 15 PCU</strong>, and the hour contains <strong>3600/90 = 40 cycles</strong>. Hence <strong>15 × 40 = 600 PCU/h</strong>. Multiplying s by 30 without converting seconds to hours is dimensionally wrong; treating 15 PCU/cycle as an hourly capacity is also wrong.</p>" +
                        "<p>For a <strong>separate illustrative time account</strong>, take displayed G = 30 s, a = 3 s, r = 1 s, startup loss l<sub>1</sub> = 2 s and clearance loss l<sub>2</sub> = 2 s. Under the stated accounting convention, <strong>g = 30 + 3 + 1 − 2 − 2 = 30 s</strong>. The assumed clearance loss already includes unused clearance time, including the all-red in this example; it must not be added again. Equality of G and g here is a numerical coincidence, not their definition.</p>" +
                        "<p>If demand exceeds the estimated service for a sustained period, unserved demand accumulates as a queue unless it diverts or is otherwise removed from the boundary. If downstream storage blocks the lane group, the nominal green fraction may not be usable. Lane-group saturation flow cannot be multiplied by the lane count again if it already includes those lanes. Actual timings require independent safety and facility-specific checks beyond this arithmetic.</p>",
                    sources: []
                },
                {
                    id: "traffic-coordination-fixed-and-adaptive",
                    title: "Coordination changes cycles, splits and offsets; adaptive control is a separate capability",
                    html: "<p><strong>Signal coordination considers movement between junctions rather than optimising each junction in isolation.</strong> A common or compatible cycle provides a repeating framework; a split allocates portions of the cycle to movement service; an offset describes the time relationship between reference points in adjacent signals. Effective green and a displayed split are not necessarily identical quantities.</p>" +
                        "<p>Traditional <strong>simultaneous</strong> systems give corresponding indications together, while <strong>alternate</strong> systems alternate corresponding indications between neighbouring signals. <strong>Simple progression</strong> uses a planned relationship intended to help a traffic platoon move along a corridor. <strong>Flexible progression</strong> permits variation in cycle length, division and timing relationships. These labels describe coordination arrangements and degrees of flexibility, not automatically the control technology used.</p>" +
                        "<table><thead><tr><th scope='col'>Control approach</th><th scope='col'>Distinction</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fixed-time</th><td>A predetermined plan can operate without responding to individual detections. Different preselected plans may apply by time of day.</td></tr>" +
                        "<tr><th scope='row'>Actuated</th><td>Detection can influence movement service within a defined control framework; actuation alone is not network optimisation.</td></tr>" +
                        "<tr><th scope='row'>Adaptive</th><td>Measurements and an optimisation process update timing decisions in response to assessed conditions, subject to constraints.</td></tr></tbody></table>" +
                        "<p>A time–space diagram can show whether a platoon encounters successive greens. Its progression bandwidth is an available time window, not a direct count of vehicles discharged. Travel-time variability, turning vehicles and downstream queues can erode the benefit. Improving a dominant direction may increase delay to side roads, the reverse direction, buses or pedestrians.</p>" +
                        "<p>The bank correctly associates timing flexibility with a flexible progressive system, but its explanation overstates that as necessarily real-time adaptive control. Varying a predetermined plan is not the same as reacting to current measurements. These distinctions are conceptual; no offsets, field settings or controller-operation steps are prescribed.</p>",
                    sources: [{ id: "TRAN808-00254", set: 24, question: 85 }]
                },
                {
                    id: "traffic-sign-families-and-information-colours",
                    title: "Nepal sign families use shape and colour together",
                    html: "<p><strong>The inspected source is the Department of Roads Traffic Signs Manual, Volume 1, August 1997.</strong> Its government-hosted copy is evidence for that edition, not a new 2026 manual or proof that every provision remains current after all revisions. Sections D and E distinguish regulatory, warning and information functions; signs work through consistent meaning, visibility and recognition, not colour alone.</p>" +
                        "<p><strong>Most warning signs</strong> are upright triangles with a red border, white background and black hazard symbol. This is not the US yellow-diamond convention, and most does not mean every schedule item: chevrons, obstruction markers and some diversion signs use other forms. Supplementary plates qualify the main message rather than creating an unrelated instruction.</p>" +
                        "<p><strong>Regulatory signs</strong> convey requirements or prohibitions and are mostly circular. Important distinctive forms are <strong>STOP: a red octagon with a white border</strong>, and <strong>Give Way: an inverted triangle with a red border and white background</strong>, confirmed in schedules A1 and A2. They are regulatory exceptions, not warning signs. Even the remaining regulatory schedule should not be described as exceptionlessly circular.</p>" +
                        "<table><thead><tr><th scope='col'>Information example</th><th scope='col'>1997 background context</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Parking place, C3</th><td>Blue, with white identifying detail.</td></tr>" +
                        "<tr><th scope='row'>Place and local direction information</th><td>White is used for identified types and local-route contexts.</td></tr>" +
                        "<tr><th scope='row'>National-route direction information</th><td>Green occurs in the specified direction-sign arrangements.</td></tr>" +
                        "<tr><th scope='row'>Temporary diversion direction</th><td>Yellow with black information.</td></tr></tbody></table>" +
                        "<p>Section E4.3 and the individual schedules establish that <strong>informatory backgrounds are not universally white</strong>. The full road-on/road-to matrix in Table 3 is not reproduced from its flattened text extraction. Classification requires the actual sign type and route context. Shape, symbol and contrast also support recognition where colour perception or viewing conditions are limited. This summary teaches recognition and source distinctions, not a complete installation specification.</p>",
                    sources: [
                        { id: "TRAN808-00252", set: 24, question: 83 },
                        { id: "TRAN808-00256", set: 24, question: 87 }
                    ]
                },
                {
                    id: "traffic-warning-dimensions-and-sign-supports",
                    title: "Read the triangle height, the reference distance and the correct painted component",
                    html: "<p><strong>The dimension in 1997 Table 2 is triangle HEIGHT in millimetres, not side length.</strong> Section E3.1, printed page 42, pairs that height with an advance distance from the hazard. The concise data comparison below preserves the separate additional-impact cases; it is a documentary comparison, not a field siting plan.</p>" +
                        "<table><thead><tr><th scope='col'>Road context</th><th scope='col'>Height, mm</th><th scope='col'>Before hazard, m</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>National highway</th><td>750</td><td>180</td></tr>" +
                        "<tr><th scope='row'>National, extra impact</th><td>900</td><td>180</td></tr>" +
                        "<tr><th scope='row'>Feeder</th><td>750</td><td>100</td></tr>" +
                        "<tr><th scope='row'>Town or urban</th><td>600</td><td>50</td></tr>" +
                        "<tr><th scope='row'>Urban, extra impact</th><td>750</td><td>50</td></tr></tbody></table>" +
                        "<p>The bank asks for a <strong>45 cm side</strong> and attributes its explanation to IRC without a verified clause. That rule is <strong>not established by this Nepal table</strong>. Nor may 750 mm height be renamed 750 mm side. An equilateral triangle's height and side differ geometrically; units and the named dimension both have to be preserved.</p>" +
                        "<p>Visibility distance is another quantity: the same section describes seeing the sign from at least 60 m, or 75 m on national highways. Those distances are not the table's 50, 100 and 180 m advance-placement distances. Section F also recognises site-specific constraints, and roadworks signing is a separate context; the different provisions must not be blended into one generic rule.</p>" +
                        "<p><strong>Section G2, printed page 199, specifies ordinary sign-post bands in alternating black and white, 200–250 mm wide.</strong> Thus the bank's 25 cm black/white alternative is compatible with that range; 25 cm is not the sole permitted width. Its stored 50 cm black/yellow answer is inconsistent with the sign-post explanation under this source. Black/yellow obstruction-marker panels are different components, not evidence for the post-band claim.</p>" +
                        "<p>Section F3 refers to clearance of <strong>any part of a sign</strong> from the <strong>outer edge of the shoulder</strong>, or carriageway where there is no shoulder. That object and reference edge must remain explicit. A sign clearance cannot authenticate an IRC lighting-pole setback from a raised kerb. All quoted dimensions are tied to the inspected 1997 edition, not asserted as an exhaustive current standard.</p>",
                    sources: [
                        { id: "TRAN808-00253", set: 24, question: 84 },
                        { id: "TRAN808-00255", set: 24, question: 86 }
                    ]
                },
                {
                    id: "traffic-markings-and-retroreflection",
                    title: "Markings and retroreflection provide guidance that must survive real viewing conditions",
                    html: "<p><em>Syllabus extension: road-marking functions and optical behaviour have no dedicated assigned bank calculation.</em> The supporting source is the inspected DoR Traffic Signs Manual, August 1997, particularly §§E6, G2, H2 and I. This is an explanation of principles, not a road-marking work method or a claim of current dimensional compliance.</p>" +
                        "<p><strong>Transverse markings</strong> identify controls across a movement, such as stop and give-way lines. <strong>Longitudinal markings</strong> organise lanes, edges, restrictions and guidance along the direction of movement. Crossing markings, lane arrows and painted islands convey additional functions. A line's meaning depends on its prescribed pattern and context, not merely the fact that paint is present.</p>" +
                        "<p>Markings provide a continuing message near the vehicle path and can complement an upright sign. They can also be hidden by queues, dirt, water or snow and worn by traffic. Clear dry-day appearance does not establish wet-night performance. Surface skid resistance is a separate requirement from optical brightness, especially for two-wheeled users and pedestrians.</p>" +
                        "<p><strong>Retroreflection</strong> returns a significant part of incident light toward its source direction, allowing headlights and the nearby driver's eye to benefit. It is not identical to diffuse reflection from a pale surface or mirror-like specular reflection. Reflective sheeting, glass beads in markings and road studs perform differently with observation angle, approach geometry, contamination, ageing and wetness.</p>" +
                        "<p>More reflected light in an unsuitable direction may create glare rather than useful recognition. Water can change the optical behaviour of a marking and its surroundings. Day/night condition assessment, legibility, skid resistance and compatibility with the intended sign or marking type therefore belong together. The 1997 manual's construction and maintenance details are not reproduced as instructions; the educational lesson is that visibility is a maintained performance, not just a colour chosen at installation.</p>",
                    sources: []
                },
                {
                    id: "traffic-night-visibility-and-lighting",
                    title: "Night visibility depends on luminance, contrast, glare and wetness",
                    html: "<p><strong>Night visibility is the ability to detect and interpret a relevant target in its surroundings.</strong> Target size, position, observation time, contrast, driver vision, adaptation, weather and glare all matter. Pavement reflectance is one factor rather than a complete safety measure. Ordinary light-coloured concrete often appears brighter than dark bituminous surfacing under comparable conditions, explaining the bank's conventional concrete answer, but this does not make every concrete road safer in every lighting condition.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Illuminance</th><td>Light incident per unit area, measured in <strong>lux</strong>, equivalent to lumen/m<sup>2</sup>.</td></tr>" +
                        "<tr><th scope='row'>Luminance</th><td>Light leaving a surface toward the observer, measured in <strong>cd/m<sup>2</sup></strong>; depends on illumination, reflection and viewing geometry.</td></tr>" +
                        "<tr><th scope='row'>Contrast</th><td>Difference between target and background appearance; a bright background may reveal a dark target but conceal a similarly bright one.</td></tr>" +
                        "<tr><th scope='row'>Glare and uniformity</th><td>Excessive bright sources can reduce useful vision, while abrupt dark patches and nonuniformity complicate adaptation.</td></tr></tbody></table>" +
                        "<p>Lighting assessment considers distribution, luminaire optics, spacing, mounting geometry, road layout, surroundings and maintenance. Existing electric poles can constrain a layout but do not determine an acceptable photometric result. Closer spacing alone cannot guarantee uniformity or glare control. Single-sided lighting can be economical for a suitable narrow road, but opposed, staggered or central arrangements must be compared on performance, obstacles and life-cycle cost rather than a universal cheapest-layout rule.</p>" +
                        "<p>Wet surfaces can redistribute reflections and increase glare or reduce marking conspicuity. An assessment of pavement brightness alone misses the visibility of pedestrians at edges and crossings. Relevant target contrast and light reaching vertical objects may differ from the average light on the carriageway.</p>" +
                        "<p><strong>The bank's IRC lighting-pole clearance of 0.6 m from a raised kerb remains clause-unverified.</strong> DoR's 1997 §F3 instead gives 600 mm between <strong>any part of a sign</strong> and the <strong>outer shoulder edge</strong>, or carriageway edge without a shoulder. Equal numbers do not make these provisions equivalent. Neither value by itself establishes a safe clear zone or guarantees protection from vehicle impact.</p>",
                    sources: [
                        { id: "TRAN808-00070", set: 8, question: 83 },
                        { id: "TRAN808-00257", set: 24, question: 88 },
                        { id: "TRAN808-00258", set: 24, question: 89 },
                        { id: "TRAN808-00259", set: 24, question: 90 },
                        { id: "TRAN808-00260", set: 25, question: 79 },
                        { id: "TRAN808-00261", set: 25, question: 80 }
                    ]
                },
                {
                    id: "traffic-safety-audit-and-roadside-risk",
                    title: "A safety audit asks what can go wrong before relying on crash history",
                    html: "<p><em>Syllabus extension: safety-audit concepts and roadside-risk integration are not directly tested by the assigned 66 records.</em> The process below is general educational practice, not a transcription of Nepal's Road Safety Audit Manual. That manual's full procedure and any later revisions have not been verified for these notes.</p>" +
                        "<p><strong>A road-safety audit is a structured, independent examination of potential safety problems for all road users.</strong> It can identify risks during planning, design or pre-opening review before a crash pattern develops. Examination of an existing road's safety conditions is also valuable, although the responsible authority may distinguish audits from safety inspections. Neither is merely checking that dimensions match a standard.</p>" +
                        "<ol><li><strong>Understand the proposal and users:</strong> consider how people actually approach, cross, turn, stop and access adjacent land, including vulnerable users and maintenance needs.</li><li><strong>Identify potential conflicts and consequences:</strong> examine visibility, speed consistency, misleading layouts, pedestrian continuity, roadside hazards and night or wet-weather conditions.</li><li><strong>Explain findings:</strong> describe the location, affected user and plausible risk mechanism rather than presenting an unexplained checklist score.</li><li><strong>Record responses and follow-up:</strong> the responsible design or road authority evaluates findings and records action or reasons for a different response. Audit does not replace its design responsibility.</li></ol>" +
                        "<p>The inspected <strong>MoPIT/NRSC Road Safety Note 2, Designing Safer Side Drains, Final (Revised), June 2024</strong>, §4 connects drainage condition with roadside safety. Relevant concerns include shoulder drop-off, eroded slopes, protruding headwalls, blockages, bicycle-trapping grates and nontraversable drainage structures in roadside recovery space. A hydraulically adequate drain can still be a collision or pedestrian hazard; a shallow-looking drain is not automatically safe.</p>" +
                        "<p>Safety measures work as a system: manageable conflict speeds, understandable priority, accessible walking routes, suitable crossings, sound vehicle condition, maintained guidance and effective post-crash response. A warning sign cannot cure every deficient layout. Evaluation should test the intended safety mechanism and consider unintended effects, not just count installations.</p>" +
                        "<p>The 2024 note is explicitly revised, but that title alone does not prove that every 1996 provision was formally withdrawn. No universal drain depth, barrier layout, blackspot threshold or field-control procedure is supplied here. Real interventions require the applicable current documents, competent assessment and authorised design and implementation.</p>",
                    sources: []
                }
            ],
            gaps: [
                "traffic-human-factors and traffic-vehicle-characteristics are source-free syllabus extensions. Their human-response and braking numbers are hypothetical; the assigned records contain no complete response study, design-vehicle envelope or swept-path dataset. No outside-assignment bank IDs or current legal vehicle limits are supplied.",
                "traffic-count-and-design-hour-example contains synthetic quarter-hour, daily and design-hour datasets. The 66 assigned questions do not supply those observations, annual factors, lane shares or a calibrated annual monitoring programme; they are not represented as recovered bank givens.",
                "traffic-mean-speed-sampling-example and traffic-flow-headway-and-conservation are source-free extensions. Their compatible distributions, spatial occupancy and steady-stream data are assumptions made for teaching. Real point counts and snapshots require matching populations, lane/direction coverage and observation boundaries.",
                "traffic-greenshields-and-waves is a source-free model derivation with invented parameters and states. The assigned bank supplies no calibrated fundamental diagram or wave observations. Its capacity and half-jam-density results belong to the stated model, not an adopted Nepal design standard.",
                "traffic-od-matrix-example is a synthetic, non-personal syllabus extension. No assigned question supplies an OD matrix, personal trip records, route assignment or survey weights. The expansion factor is conditional on representativeness, not justified merely by a response percentage.",
                "traffic-parking-cohort-example is source-free and assumes complete stays within a fixed observation window. The bank has parking-purpose and layout questions but no visit cohort, bay-hour record, rejected-demand measurement or duration dataset from which these example results could be recovered.",
                "traffic-crash-exposure-examples is a source-free extension with invented matched exposures. There is no assigned crash database or verified Nepal blackspot threshold. The metric formulas are dimensionally derived; the cited foreign rate reference does not establish Nepal adoption or convert vehicle-miles into vehicle-km without adjustment.",
                "traffic-signal-capacity-example uses invented timings solely for educational time and discharge accounting. The actual Webster questions also lack a full lane-group and phase plan; their solutions require the stated interpretations. Neither the examples nor the 1997 sign manual supply a complete safe controller configuration or operational procedure.",
                "traffic-markings-and-retroreflection is a source-free syllabus extension based on the inspected 1997 manual. The bank supplies no dedicated marking-performance dataset, wet-night photometry or current dimensional specification; no field application or control-operation instructions are included.",
                "traffic-safety-audit-and-roadside-risk is source-free. Audit is taught conceptually, and drainage safety is informed by the inspected revised June 2024 note. The full DoR audit manual, all revisions and an explicit blanket supersession of the older drainage note have not been established.",
                "The government-hosted Traffic Signs Manual is dated August 1997, not its later upload year. Table 2 triangle HEIGHT and G2 black/white 200–250 mm post bands are supported by the primary material. The alleged IRC 45 cm warning-side rule, IRC lighting-pole 0.6 m kerb clause and the stem's IRC:G7 designation remain unverified; the full flattened Table 3 direction-colour matrix is not reconstructed.",
                "Unresolved bank conventions remain explicit: AAOT has no verified expansion; exact seven-category/three-category taxonomies need an identified classification; the low-volume mail-back response rationale is unsupported and a conditional high-volume rationale is not a proven replacement key. The rotary angle wording is contradictory, the capacity geometry is outside the cited empirical ranges, and neither a universal uncontrolled-junction capacity nor an always-best/conflict-free cloverleaf is established. Stored questions, options and keys remain unchanged."
            ],
            cautions: [
                {
                    html: "<p><strong>Definition is broader than one crash type.</strong> Model 21, Q87 stores D, all of the mentioned. Its option C makes reducing high-speed collisions the main goal, which is too narrow as a complete definition. Safety includes severity and all road users; efficiency and access also belong in traffic engineering. The stored all-of-the-mentioned answer is not an endorsement of every absolute in its alternatives.</p>",
                    sources: [{ id: "TRAN808-00224", set: 21, question: 87 }]
                },
                {
                    html: "<p><strong>First-stage answers are contextual.</strong> Model 22, Q80 stores collection of data, and Q81 stores traffic volume studies. Data are foundational and counts often support other work, but problem definition and study objectives may precede collection. A safety, parking or pedestrian investigation does not universally begin with a volume study.</p>",
                    sources: [
                        { id: "TRAN808-00227", set: 22, question: 80 },
                        { id: "TRAN808-00228", set: 22, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>Taxonomy is not a universal numerical law.</strong> Model 22, Q82 stores seven engineering categories; Q84 stores three elements; Q85 excludes dynamic studies. Model 25, Q82 stores three trip categories. Human–vehicle–roadway and HBW/HBO/NHB are useful groupings, but their counts depend on the classification. Dynamic traffic analysis exists. An identified textbook taxonomy is needed to justify the exclusive wording; no replacement count is invented.</p>",
                    sources: [
                        { id: "TRAN808-00229", set: 22, question: 82 },
                        { id: "TRAN808-00231", set: 22, question: 84 },
                        { id: "TRAN808-00232", set: 22, question: 85 },
                        { id: "TRAN808-00264", set: 25, question: 82 }
                    ]
                },
                {
                    html: "<p><strong>Driver controls are not a verified universal first legal stage.</strong> Model 22, Q87 stores A. Driver, vehicle, traffic-flow and general controls are interacting subjects. The explanation's fixed order is not established here as a Nepal statutory chronology or a mandatory implementation sequence.</p>",
                    sources: [{ id: "TRAN808-00234", set: 22, question: 87 }]
                },
                {
                    html: "<p><strong>Traffic models are not exclusive to volume studies.</strong> Model 22, Q90 stores D, but models also support parking demand, crash analysis and other transport studies. Volume data are important model inputs; that does not make the broadly worded question uniquely identify volume studies.</p>",
                    sources: [{ id: "TRAN808-00237", set: 22, question: 90 }]
                },
                {
                    html: "<p><strong>ADT and AADT require the stated estimation basis.</strong> The unadjusted 30-day mean in Model 3, Q90 is ADT, as stored. Short counts can nevertheless estimate AADT after justified adjustments. Model 22, Q86 correctly identifies AADT, but a complete calendar-year mean uses 365 or 366 days as applicable; missing observations cannot simply be treated as zero.</p>",
                    sources: [
                        { id: "TRAN808-00022", set: 3, question: 90 },
                        { id: "TRAN808-00233", set: 22, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Not directly measured is not the same as irrelevant to design.</strong> Model 23, Q83 stores design criteria. A count measures vehicles, classification and movements, not a design standard or thickness directly. Traffic-volume evidence does inform engineering design along with materials, geometry, safety and applicable requirements.</p>",
                    sources: [{ id: "TRAN808-00242", set: 23, question: 83 }]
                },
                {
                    html: "<p><strong>PCU is a unit; an equivalency factor performs the conversion.</strong> Model 23, Q84 correctly distinguishes PCU from the flow–speed–density variables, but its explanation calls PCU itself a conversion factor. Passenger-car equivalency depends on a stated method. Operational PCU values are not equivalent axle-damage repetitions.</p>",
                    sources: [{ id: "TRAN808-00243", set: 23, question: 84 }]
                },
                {
                    html: "<p><strong>AAOT remains unresolved.</strong> Model 23, Q85 stores D, modal average, while its explanation supplies an expansion of AAOT that has not been verified. No expansion is adopted and no silent correction to AADT is made. Composition and variation charts are valid presentations, but the unexplained alternative prevents treating this as an unqualified terminology lesson.</p>",
                    sources: [{ id: "TRAN808-00244", set: 23, question: 85 }]
                },
                {
                    html: "<p><strong>Enoscope measurement is not error-free.</strong> Model 2, Q87's spot-speed choice is appropriate for the short-base optical timing method. Its claim of no parallax error is too absolute; base length, sighting, alignment and timing errors still matter. A finite-base speed approximates the speed near that point rather than measuring an exact instantaneous value without uncertainty.</p>",
                    sources: [{ id: "TRAN808-00008", set: 2, question: 87 }]
                },
                {
                    html: "<p><strong>The sampling rule determines the speed average.</strong> Model 3, Q81 correctly keys TMS for the arithmetic point-passage mean. A compatible positive-speed passage sample yields harmonic SMS, but a spatial occupancy snapshot uses the arithmetic or density-weighted mean of occupants. The identity V<sub>t</sub> = V<sub>s</sub> + σ<sub>s</sub><sup>2</sup>/V<sub>s</sub> uses space-distribution variance, not an arbitrary point-sample variance.</p>",
                    sources: [{ id: "TRAN808-00013", set: 3, question: 81 }]
                },
                {
                    html: "<p><strong>Observed 85th-percentile speed is not automatically safe or legally controlling.</strong> Model 4, Q80 and Model 24, Q82 reflect a traditional regulation convention. Their reasonable-driver explanations do not establish safety for pedestrians, access activity or every geometry. The additional claim that the 98th percentile universally supplies geometric design speed is also unsupported as a general rule.</p>",
                    sources: [
                        { id: "TRAN808-00023", set: 4, question: 80 },
                        { id: "TRAN808-00251", set: 24, question: 82 }
                    ]
                },
                {
                    html: "<p><strong>The 0.25 PHF minimum requires positive traffic and four quarter-hour intervals.</strong> Model 7, Q88's stored choice is correct under those conditions. Zero hourly traffic gives 0/0 and an undefined PHF. PHF = 1 means equal quarter-hour totals, not necessarily uniform individual arrivals.</p>",
                    sources: [{ id: "TRAN808-00064", set: 7, question: 88 }]
                },
                {
                    html: "<p><strong>Controls affect capacity, and no universal uncontrolled-junction range follows.</strong> Model 23, Q87 excludes control devices, although c = s(g/C) directly demonstrates their effect; all four offered factors can matter. Model 25, Q84 stores 1200–1400 vehicles/h without the needed geometry, movement and conflicting-flow basis. Its explanation additionally switches to PCU/h. These are not interchangeable units or a general junction capacity.</p>",
                    sources: [
                        { id: "TRAN808-00246", set: 23, question: 87 },
                        { id: "TRAN808-00266", set: 25, question: 84 }
                    ]
                },
                {
                    html: "<p><strong>OD can support both weaving and pedestrian studies.</strong> Model 21, Q84 excludes weaving, but entry-to-exit movement information can establish weaving proportions. Model 1, Q86 excludes pedestrian patterns, although person and pedestrian OD studies are valid. Only an explicitly restricted survey scope could explain those exclusions; neither stem establishes the broad prohibition implied by its explanation.</p>",
                    sources: [
                        { id: "TRAN808-00220", set: 21, question: 84 },
                        { id: "TRAN808-00262", set: 1, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Mail-back survey rationale remains unverified.</strong> Model 23, Q89 stores low traffic volume. The explanation's claim that low volume produces higher response is unsupported. Reduced interview disruption can motivate mail-back methods in a high-volume legacy context, but that conditional rationale is not treated as a primary-verified replacement key. Distribution safety, sampling and nonresponse govern suitability.</p>",
                    sources: [{ id: "TRAN808-00248", set: 23, question: 89 }]
                },
                {
                    html: "<p><strong>A network flow map need not be a desire-line map.</strong> Model 23, Q86 correctly keys traffic volume for line thickness under the map legend. Its explanation conflates OD connections with flows along road links. Desire lines need not follow actual routes, and neither thickness nor darkness automatically indicates direction.</p>",
                    sources: [{ id: "TRAN808-00245", set: 23, question: 86 }]
                },
                {
                    html: "<p><strong>Fixed delay is a legacy cause label, not volume-independent measured delay.</strong> Model 1, Q85 stores traffic volume, but actual control delay responds to arrivals, demand and queues. Model 23, Q81's quality-of-movement choice is a broad study objective; its other travel-time alternatives overlap with that purpose. A formal LOS grade still requires a defined facility and method.</p>",
                    sources: [
                        { id: "TRAN808-00221", set: 1, question: 85 },
                        { id: "TRAN808-00240", set: 23, question: 81 }
                    ]
                },
                {
                    html: "<p><strong>Parking demand, location and orientation are different.</strong> Model 23, Q80 correctly identifies parking studies, but observed occupancy is not all latent demand. Model 24, Q81's off-street answer concerns location; parallel or angled arrangements can also occur off-street. Model 25, Q86 uses kerb parking generically; only wording that specifies parallel orientation would require parallel parking. Quantitative load, duration and turnover need compatible periods and cohorts.</p>",
                    sources: [
                        { id: "TRAN808-00239", set: 23, question: 80 },
                        { id: "TRAN808-00250", set: 24, question: 81 },
                        { id: "TRAN808-00268", set: 25, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>A collision diagram records patterns but does not prove causation.</strong> Model 24, Q80's record-of-occurrence answer captures the intended use. Its N/A distractor and the explanation's acknowledged incomplete alternative limit the question's quality. Interpreting a diagram still requires crash circumstances, site conditions and exposure; the symbols alone establish neither a blackspot threshold nor an effective treatment.</p>",
                    sources: [{ id: "TRAN808-00249", set: 24, question: 80 }]
                },
                {
                    html: "<p><strong>Cloverleaf does not mean no conflict or always best.</strong> Model 3, Q84 correctly identifies different-level roads as grade-separated, but ramps can retain interactions. Model 6, Q90 and Model 7, Q80 overstate interference-free cloverleaf operation; weaving, merging and diverging remain. Trumpets are not inherently at-grade-conflict layouts. Model 25, Q83's universally best/highest-capacity claim is unsupported. In Nepal's left-driving arrangement, conventional cloverleaf loops serve <strong>right turns</strong>, not the US left-turn description.</p>",
                    sources: [
                        { id: "TRAN808-00016", set: 3, question: 84 },
                        { id: "TRAN808-00055", set: 6, question: 90 },
                        { id: "TRAN808-00056", set: 7, question: 80 },
                        { id: "TRAN808-00265", set: 25, question: 83 }
                    ]
                },
                {
                    html: "<p><strong>27 m is a rounded path-radius answer only.</strong> Model 4, Q85 gives 35 km/h, e = 0 and f = 0.36. The calculation is 1225/45.72 = 26.79 m, approximately, so 27 m is appropriate. The stipulated friction factor is not thereby validated as an allowable design value, and vehicle-path curvature does not determine a complete roundabout or central-island radius.</p>",
                    sources: [{ id: "TRAN808-00028", set: 4, question: 85 }]
                },
                {
                    html: "<p><strong>Conditional rotary substitution gives 1085 PCU/h, not the keyed 1088.</strong> The model uses e = (entry width + exit width)/2, whereas Model 7, Q83 states only an average entry width of 0.4 m. Provisionally inserting that value as e gives e/w = 0.0333, w/l = 1.6667 and l = 7.2 m, outside the cited empirical ranges 0.4–1, 0.12–0.4 and 18–90 m. Neither the missing exit-width basis nor the implausible geometry may be silently repaired. A corrected arithmetic option would still not establish an engineering-valid capacity.</p>",
                    sources: [{ id: "TRAN808-00059", set: 7, question: 83 }]
                },
                {
                    html: "<p><strong>The weaving-angle wording contradicts itself.</strong> Model 7, Q84 asks for a minimum and stores 15°, while the explanation says 15° or less. The latter is not evidence for a minimum. No verified governing provision has established a replacement minimum or maximum in these notes.</p>",
                    sources: [{ id: "TRAN808-00060", set: 7, question: 84 }]
                },
                {
                    html: "<p><strong>Amber and all-red are distinct, and signal crash effects are conditional.</strong> Model 2, Q90's amber answer is conventional but incomplete as a clearance-time definition. Model 6, Q87 and Model 23, Q88 describe possible reduction of crossing/turning conflicts with increased rear-end risk, not inevitable outcomes. Permissive turning conflicts do not simply disappear, and amber is not unrestricted permission to enter.</p>",
                    sources: [
                        { id: "TRAN808-00011", set: 2, question: 90 },
                        { id: "TRAN808-00052", set: 6, question: 87 },
                        { id: "TRAN808-00247", set: 23, question: 88 }
                    ]
                },
                {
                    html: "<p><strong>The stored Webster answers already reflect the correct arithmetic.</strong> Model 7, Q82 gives Y = 500/1600 + 300/1600 = 0.5 and C = 58 s if the demands are separately served critical phases. Effective green totals 42 s, with proportional portions 26.25 and 15.75 s, not automatically displayed greens. Concurrent opposing movements must not be blindly summed. Q86 gives C = 50 s for L = 10 s and Y = 0.6; the stem/options omit the time unit. Neither exercise is an approved timing plan.</p>",
                    sources: [
                        { id: "TRAN808-00058", set: 7, question: 82 },
                        { id: "TRAN808-00062", set: 7, question: 86 }
                    ]
                },
                {
                    html: "<p><strong>Flexible progression is not necessarily adaptive control.</strong> Model 24, Q85 stores flexible progressive system, consistent with varying cycles, divisions and timing relationships. Its explanation adds real-time demand response as though mandatory. Predetermined time-of-day plans can also vary; detector actuation and adaptive network optimisation are separate capabilities.</p>",
                    sources: [{ id: "TRAN808-00254", set: 24, question: 85 }]
                },
                {
                    html: "<p><strong>Informatory signs do not all have a white background.</strong> Model 24, Q83 stores white. The inspected 1997 Nepal manual includes blue parking/service signs, white information and local directions, green direction-sign contexts and yellow temporary diversions. The sign type and route context are essential; the full Table 3 matrix is not reconstructed from ambiguous flattened rows.</p>",
                    sources: [{ id: "TRAN808-00252", set: 24, question: 83 }]
                },
                {
                    html: "<p><strong>The claimed 45 cm warning-sign side is unverified.</strong> Model 24, Q86 stores 45 cm and invokes IRC without a verified provision. Nepal's August 1997 Table 2 gives <strong>triangle heights</strong>: national 750 mm, national extra-impact 900 mm, feeder 750 mm, urban 600 mm and urban extra-impact 750 mm. These are not side lengths and do not establish the alleged IRC rule.</p>",
                    sources: [{ id: "TRAN808-00255", set: 24, question: 86 }]
                },
                {
                    html: "<p><strong>The primary sign-post provision contradicts the stored bands.</strong> Model 24, Q84 has a malformed stem and stores 50 cm black/yellow. For the ordinary sign-post interpretation used in its explanation, 1997 §G2, printed page 199, specifies <strong>black/white bands 200–250 mm wide</strong>. The offered 25 cm black/white lies within that range, but is not the only permitted width. Black/yellow obstruction-marker panels are different from sign posts.</p>",
                    sources: [{ id: "TRAN808-00253", set: 24, question: 84 }]
                },
                {
                    html: "<p><strong>STOP's shape and colour are supported; the cited designation needs checking.</strong> Model 24, Q87 stores a red octagon with a white border, consistent with Nepal's 1997 schedule A1. Its stem says IRC:G7–2001; that exact designation is not verified and must not be silently relabelled IRC:67–2001. STOP and inverted-triangle Give Way are regulatory signs, not warning signs. Worldwide exceptionless-standardisation wording is unnecessary.</p>",
                    sources: [{ id: "TRAN808-00256", set: 24, question: 87 }]
                },
                {
                    html: "<p><strong>Brighter pavement and closer lighting are not complete safety criteria.</strong> Model 8, Q83's concrete choice is a conventional reflectance comparison. Model 24, Q88–Q90 identify relevant visibility and lighting factors, but illuminance in lux differs from luminance in cd/m<sup>2</sup>, and glare, wetness, contrast and distribution remain important. Model 25, Q80's single-sided economy applies only where the required performance and life-cycle assessment support it. Existing utility poles or reduced spacing alone do not guarantee acceptable lighting.</p>",
                    sources: [
                        { id: "TRAN808-00070", set: 8, question: 83 },
                        { id: "TRAN808-00257", set: 24, question: 88 },
                        { id: "TRAN808-00258", set: 24, question: 89 },
                        { id: "TRAN808-00259", set: 24, question: 90 },
                        { id: "TRAN808-00261", set: 25, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>The IRC lighting-pole 0.6 m clause remains unverified.</strong> Model 25, Q79 concerns a pole beside a raised kerb. Nepal's 1997 §F3 instead measures 600 mm from <strong>any part of a sign</strong> to the <strong>outer shoulder edge</strong>, or carriageway edge where there is no shoulder. The objects, reference edges and authorities differ. That sign provision cannot verify the bank's lighting-pole claim, and neither number guarantees protection from errant vehicles.</p>",
                    sources: [{ id: "TRAN808-00260", set: 25, question: 79 }]
                }
            ],
            references: [
                {
                    title: "Department of Roads, Traffic Signs Manual, Volume 1, August 1997 — government-hosted edition; §§D–I, warning Table 2, sign-post §G2 and individual schedules; not a 2026 revision",
                    url: "https://rcip-af.gandaki.gov.np/upload/09d87e32ae86e33a353d84f4a3f230bd/files/Traffic_Signs_Manual_%28Volume_1%29_.pdf"
                },
                {
                    title: "MoPIT / National Road Safety Council, Road Safety Note 2: Designing Safer Side Drains, Final (Revised), June 2024 — §4 roadside safety and maintenance; not proof of blanket repeal of the 1996 note",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/ROAD%20SAFETY%20NOTE%202%20UPDATED_9xcggb5.pdf"
                },
                {
                    title: "FHWA, Traffic Signal Timing Manual, FHWA-HOP-08-024, 2008, Chapter 3 — saturation flow, effective green, capacity and critical movements; foreign analytical principles, not Nepal signal law",
                    url: "https://ops.fhwa.dot.gov/publications/fhwahop08024/chapter3.htm"
                },
                {
                    title: "FHWA, Traffic Signal Timing Manual, 2008, Chapter 6 — timing design and Webster approximation, including limitations; not a field timing prescription",
                    url: "https://ops.fhwa.dot.gov/publications/fhwahop08024/chapter6.htm"
                },
                {
                    title: "FHWA, Traffic Monitoring Guide, 2013, traffic-monitoring theory — short counts, annual adjustment, ADT/AADT, design-hour factors, direction and PHF",
                    url: "https://www.fhwa.dot.gov/policyinformation/tmguide/tmg_2013/traffic-monitoring-theory.cfm"
                },
                {
                    title: "IIT Bombay traffic engineering lecture: Fundamental relations of traffic flow — flow, density and compatible speed distributions; averaging conditions retained explicitly",
                    url: "https://www.civil.iitb.ac.in/tvm/1100_LnTse/502_lnTse/plain/plain.html"
                },
                {
                    title: "IIT Bombay traffic engineering lecture: Traffic stream models — Greenshields and traffic waves; model-specific teaching, not a universal calibrated capacity",
                    url: "https://www.civil.iitb.ac.in/tvm/1100_LnTse/503_lnTse/plain/plain.html"
                },
                {
                    title: "IIT Bombay / NPTEL: Rotary intersections — traditional weaving equation and its empirical geometry ranges; bank arithmetic independently derived, not a modern roundabout approval method",
                    url: "https://www.civil.iitb.ac.in/tvm/nptel/566_Rotary/web/web.html"
                },
                {
                    title: "IIT Bombay / NPTEL: Parking studies — accumulation, load, turnover and parking-layout concepts; illustrative datasets in these notes are newly authored",
                    url: "https://www.civil.iitb.ac.in/tvm/nptel/581_Parking/web/web.html"
                },
                {
                    title: "MoDOT Engineering Policy Guide §128.5, Crash Rate Calculation — segment distance exposure versus entering-intersection exposure; metric million-vehicle-km formulas here are dimensionally derived, not its vehicle-mile convention",
                    url: "https://epg.modot.org/index.php?title=128.5_Crash_Rate_Calculation"
                },
                {
                    title: "FHWA interpretation, 16 May 2002, setting speed limits — historical example of qualifications to 85th-percentile guidance; neither current US rules nor Nepal law is asserted",
                    url: "https://mutcd.fhwa.dot.gov/documents/html/2-494-I-or-s.htm"
                }
            ]
        }
    });
})();