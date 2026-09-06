(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0606: {
            code: "ACiE0606",
            questionCount: 54,
            blocks: [
                {
                    id: "environment-assessment-purpose",
                    title: "Environmental assessment informs a decision before harm is locked in",
                    html: "<p><strong>Environmental Impact Assessment, EIA</strong>, is a systematic process for identifying, predicting and evaluating the environmental consequences of a proposal and its reasonable alternatives before a development decision. It combines technical investigation, affected people's knowledge, mitigation planning and a documented decision. It is not merely an environmental chapter attached after the engineering design is irreversible.</p>" +
                        "<p>Its preventive purpose explains why early comparison matters. Relocating an intake, avoiding unstable ground or changing a waste-treatment process may prevent an impact that later compensation cannot satisfactorily repair. The principle is prevention rather than waiting for damage and then attempting a cure.</p>" +
                        "<p>Public interest extends beyond the developer's boundary: downstream water users, neighbouring households, workers, ecosystems and future users may bear costs not reflected in construction expenditure. Environmental assessment therefore includes physical, biological, health and social consequences, beneficial as well as adverse, with significance judged using evidence and context.</p>" +
                        "<p>The process can improve a project, justify conditions, identify an unacceptable alternative or support refusal. It does not presume that every development is bad, guarantee that approval will follow or reduce every trade-off to a single score. Good assessment makes assumptions, uncertainties and residual impacts visible so the competent decision-maker can judge them. Report approval also remains distinct from obtaining every other permission needed to build and operate.</p>",
                    sources: [
                        { id: "WATE813-00078", set: 9, question: 97 },
                        { id: "WATE813-00116", set: 13, question: 92 },
                        { id: "WATE813-00118", set: 13, question: 94 },
                        { id: "WATE813-00119", set: 13, question: 95 }
                    ]
                },
                {
                    id: "environment-nepal-legal-timeline",
                    title: "Separate Nepal's 1993 guidelines from the 1997 environmental Act",
                    html: "<p>Dates must be attached to the correct instrument and calendar. Nepal's <strong>National Environmental Impact Assessment Guidelines, 1993</strong>, are not the <strong>Environment Protection Act, 2053 (1997)</strong>. The bank's explanation identifying the Act with 1993 and equating that year to 2053 BS conflates two different instruments.</p>" +
                        "<p>The inspected NPC/IUCN publication is a <strong>1994 publication of an explicitly unofficial English translation</strong> of the 1993 guidelines. Its preface records endorsement on 27 September 1992 and Gazette publication on 19 July 1993. An endorsement year, Gazette year and translation-publication year answer different historical questions.</p>" +
                        "<p>The inspected old Act identifies itself as <strong>2053/1997</strong>. The later <strong>Environment Protection Act, 2076 (2019)</strong>, authenticated on 11 October 2019, repeals the 2053 Act through section 47. Historical guidelines can explain the development of assessment practice, but cannot replace the applicable later Act, Rules and amendments in a project decision.</p>" +
                        "<p>When a question asks for the first environmental Act, specify that the comparison concerns the Environment Protection Act rather than every earlier sectoral law affecting the environment. On that reading, 1997 is the relevant bank option. Keep source titles, dates and legal hierarchy together instead of using a year-only mnemonic or claiming that a historical guideline is the whole present approval procedure.</p>",
                    sources: [
                        { id: "WATE813-00081", set: 9, question: 100 },
                        { id: "WATE813-00127", set: 14, question: 93 }
                    ]
                },
                {
                    id: "environment-instrument-editions",
                    title: "Use the inspected EPA 2076 and EPR 2077 consolidations with date limits",
                    html: "<p>The principal instruments are the <strong>Environment Protection Act, 2076</strong>, and <strong>Environment Protection Rules, 2077</strong>. The original Rules were gazetted on <strong>2077/03/01, 15 June 2020</strong>. Later amendments do not rename them EPR 2078. The assigned question actually offers EPA 2076 with EPR 2077, although another combination is stored as its answer.</p>" +
                        "<table><thead><tr><th scope='col'>Inspected Nepali consolidation</th><th scope='col'>Distinct later change recorded</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Environment Protection Act, 2076</th><td>Some Nepal Acts Amendment Act, 2082, dated 2082/04/14</td></tr>" +
                        "<tr><th scope='row'>Environment Protection Rules, 2077</th><td>Carbon Trading Rules, 2082, dated 2082/08/22, listed in the amendment table</td></tr></tbody></table>" +
                        "<p>These are different amendments with different dates. The Rules also footnote schedule changes by Gazette notice dated <strong>2078/02/10</strong> and later 2079 notices. Rule 49 permits schedule amendment by Gazette notification; reading only the original 2020 schedules may miss a later threshold change.</p>" +
                        "<p>The cited consolidations include these 2082 changes, but this is <strong>not an exhaustive certification of all subsequent notices through September 2026</strong>. Check the applicable sector, project scope, location and governmental tier against the legally effective instruments. Apparent defects in the original English Act's sections 5 and 7(3) are not copied here; the inspected Nepali provisions govern the scoping/ToR and conditional-escalation explanations.</p>",
                    sources: [{ id: "WATE813-00128", set: 14, question: 94 }]
                },
                {
                    id: "environment-bes-iee-eia-categories",
                    title: "BES, IEE and EIA are applicable categories, not compulsory serial studies",
                    html: "<p>EPR 2077 <strong>Rule 3</strong> associates the assessment categories with three schedules. The category follows the applicable proposal characteristics and legal triggers, not whichever acronym a proponent prefers.</p>" +
                        "<table><thead><tr><th scope='col'>Category</th><th scope='col'>Full name</th><th scope='col'>Rule 3 schedule</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>BES</th><td>Brief Environmental Study</td><td>Schedule 1</td></tr>" +
                        "<tr><th scope='row'>IEE</th><td>Initial Environmental Examination</td><td>Schedule 2</td></tr>" +
                        "<tr><th scope='row'>EIA</th><td>Environmental Impact Assessment</td><td>Schedule 3</td></tr></tbody></table>" +
                        "<p>These are proportionate assessment routes. A proposal assigned to IEE does not automatically undertake BES first and EIA afterwards. Conversely, a project that meets an EIA trigger cannot avoid it simply by producing a shorter report. A competent review can require a fuller assessment when warranted; that conditional escalation is different from a mandatory three-step ladder.</p>" +
                        "<p>An IEE identifies relevant consequences and mitigation under its own applicable requirements. It should not be reduced to a universally informal preliminary study whose only purpose is deciding whether EIA follows. Early identification may avoid redesign and some costs, but required mitigation may also increase direct expenditure while reducing environmental harm.</p>" +
                        "<p>BES is an actual category in the inspected Nepal Rules, not merely an acronym used in unspecified foreign frameworks. All three routes need the applicable study preparation, participation, approval and follow-up obligations. Their names do not by themselves establish that a particular site, expansion or associated facility is exempt.</p>",
                    sources: [
                        { id: "WATE813-00123", set: 13, question: 99 },
                        { id: "WATE813-00124", set: 13, question: 100 },
                        { id: "WATE813-00125", set: 14, question: 91 },
                        { id: "WATE813-00129", set: 14, question: 95 }
                    ]
                },
                {
                    id: "environment-screening-basis",
                    title: "Screen the complete proposal against triggers and sensitive receptors",
                    html: "<p><strong>Screening</strong> determines which assessment requirements apply. It is different from scoping, which determines the issues and study boundaries within an assessment. Begin with a clear proposal description: function, capacity, area, technology, location, resources, discharges, construction works, operating arrangements and associated facilities.</p>" +
                        "<p>Project size is often a useful legal trigger but an incomplete environmental proxy. A small facility beside a sensitive spring can create important consequences, while two processes with the same capacity may have different water, energy or waste demands. Deliberately splitting a connected proposal into small components can conceal its combined effects; assess the actual proposal and its legally relevant associated works.</p>" +
                        "<p>Identify protected or otherwise sensitive locations, affected communities, existing pressures and plausible impact pathways. Compare every applicable schedule entry and location condition, recording the instrument and amendment basis. Do not substitute a generic significance opinion for a binding statutory trigger, nor assume that one favourable size comparison resolves every trigger.</p>" +
                        "<p>The developer's preference is not an objective exemption criterion, although factual information supplied by the developer must be evaluated. Proportionate screening directs detailed assessment effort towards proposals that need it; requiring the same full EIA for every negligible activity would consume resources without corresponding benefit. Document the reasoning, evidence gaps and responsible authority so the outcome can be reviewed rather than treated as an unsupported verbal assurance.</p>",
                    sources: [
                        { id: "WATE813-00090", set: 10, question: 99 },
                        { id: "WATE813-00094", set: 11, question: 93 },
                        { id: "WATE813-00095", set: 11, question: 94 },
                        { id: "WATE813-00098", set: 11, question: 97 }
                    ]
                },
                {
                    id: "environment-screening-outcomes",
                    title: "A justified decision that full EIA is not required can be valid",
                    html: "<p>Screening is a decision process, not a commitment to always require a full EIA. Depending on the governing framework and facts, outcomes can include a required full assessment, another applicable study category, further information or a reasoned conclusion that EIA is not required. Nepal's historical 1993 guidelines, clause 7(3), expressly recognize a no-EIA outcome.</p>" +
                        "<p>This does not mean no environmental obligations exist. A proposal below a full-EIA trigger may still require BES, IEE, sector permissions, pollution controls or local requirements. A defensible record explains the proposal boundaries, applicable criteria, evidence and reasons. Merely asserting no consideration is needed is inadequate, but its poor wording does not make every no-EIA outcome unacceptable.</p>" +
                        "<p>A preliminary investigation used in screening should describe the proposal, receptors, public concern, likely pathways and important uncertainties. It is not normally a detailed prediction of every imaginable impact. Request focused additional evidence when it could change the screening decision, rather than collecting an undirected full baseline.</p>" +
                        "<p>Do not equate this generic preliminary investigation with every statutory Nepal IEE. The latter is an assessment category with defined requirements. The bank's never-acceptable question confuses an unsupported assertion with a legally and technically justified outcome, while its explanation itself acknowledges that no EIA can be required where the relevant evidence and rules support that conclusion.</p>",
                    sources: [
                        { id: "WATE813-00096", set: 11, question: 95 },
                        { id: "WATE813-00097", set: 11, question: 96 }
                    ]
                },
                {
                    id: "environment-scoping",
                    title: "Scoping focuses EIA on significant issues and defensible boundaries",
                    html: "<p><strong>Scoping</strong> identifies the potentially significant issues requiring detailed attention, the alternatives to compare and the spatial and temporal boundaries of the study. Screening asks which assessment route applies; scoping asks what the selected EIA must investigate. It is neither the completed impact prediction nor an inventory of every conceivable minor effect.</p>" +
                        "<p>EPR 2077 <strong>Rule 4</strong> provides the formal scoping process for EIA before EIA-report preparation. The scoping-report format is Schedule 5. BES and IEE still need appropriate study planning and approved terms of reference, but should not be described as requiring the identical formal EIA scoping process solely because all studies need a scope.</p>" +
                        "<p>A useful investigation combines experience of similar proposals, site reconnaissance, structured checklists or interaction matrices and consultation with affected people and relevant institutions. Trace source–pathway–receptor connections: a spoil site may influence a downstream intake beyond the immediate construction boundary, while a temporary work camp can create different effects from long-term operation.</p>" +
                        "<p>Record why issues were included or set aside, what uncertainties remain, which seasons matter and which specialists or measurements are required. Include reasonable alternatives early enough for them to influence design. Efficient scoping can reduce wasted effort, but saving money is not its sole objective and cannot justify excluding a potentially significant impact. It supplies the basis for the EIA ToR rather than certifying that all impacts are already known.</p>",
                    sources: [
                        { id: "WATE813-00079", set: 9, question: 98 },
                        { id: "WATE813-00089", set: 10, question: 98 },
                        { id: "WATE813-00099", set: 11, question: 98 },
                        { id: "WATE813-00101", set: 11, question: 100 }
                    ]
                },
                {
                    id: "environment-terms-of-reference",
                    title: "The ToR specifies methods, boundaries, responsibilities and an estimated budget",
                    html: "<p><strong>Terms of reference, ToR</strong>, translate the proposed scope into a workable study plan. Define the proposal and affected community, applicable policy and institutional framework, baseline information needs, methods for prediction and significance assessment, alternatives, consultation, specialists, schedule and reporting arrangements. State data limitations and how they will be addressed.</p>" +
                        "<p>EPR 2077 <strong>Rule 5</strong> requires ToR before report preparation for all three categories, using <strong>Schedules 6, 7 and 8 for BES, IEE and EIA</strong> respectively. EIA ToR rests on its scoping, and scoping and ToR may be submitted together under the relevant provision. Simultaneous submission is not omission of scoping.</p>" +
                        "<p>The inspected <strong>Schedule 8, chapter 5, item 5.2 expressly includes the estimated study budget</strong>. Schedule 7 item 5(b) likewise includes an estimated budget. Therefore the bank explanation cannot categorically dismiss study budgets as private contractual matters. An estimated resource requirement is not necessarily the same as a fully itemized commercial contract or the proponent's bank-account details.</p>" +
                        "<p>A defensible ToR connects each significant issue to a method, location, season and output. For example, a downstream-water concern needs identified receptors, flow conditions, sampling and prediction methods, not the instruction study water quality alone. Boundaries and costs should be realistic enough to deliver the promised evidence. Approval of a ToR is permission to proceed with that study basis, not approval to implement the project.</p>",
                    sources: [
                        { id: "WATE813-00100", set: 11, question: 99 },
                        { id: "WATE813-00102", set: 12, question: 90 }
                    ]
                },
                {
                    id: "environment-baseline-and-alternatives",
                    title: "Compare alternatives with a changing no-project baseline",
                    html: "<p>The <strong>baseline</strong> describes environmental conditions and trends without the proposal. It includes the present state and a reasoned future without-project case. A single site visit is not automatically representative of dry-season water stress, monsoon sediment movement, seasonal livelihoods or future changes already expected from other activities.</p>" +
                        "<p>Identify physical conditions such as hydrology, geology, air and noise; biological conditions such as habitat and ecological connectivity; and social or health conditions such as water use, land access and vulnerable groups. Record source, location, period, method, detection limits and uncertainty. Distinguish measured data from modelled or borrowed values, and explain when evidence is insufficient.</p>" +
                        "<p>Alternatives may involve location, scale, technology, layout, timing, construction methods or the no-project option. Compare them using a consistent service objective and time horizon. An alternative that uses less land but displaces a pollution burden to a downstream community is not automatically environmentally preferable.</p>" +
                        "<p>Impact is the difference between an alternative's predicted condition and the corresponding without-project condition, not every future change observed nearby. A naturally rising flood trend should not all be attributed to the project, but it must still inform design and resilience. Baseline limitations should be carried into uncertainty and monitoring requirements rather than hidden by presenting a precise model output as a measurement.</p>",
                    sources: [{ id: "WATE813-00091", set: 10, question: 100 }]
                },
                {
                    id: "environment-impact-pathways",
                    title: "Direct, indirect and cumulative impacts describe different relationships",
                    html: "<p>A <strong>direct impact</strong> follows closely from a project action, such as habitat removal within a construction footprint. An <strong>indirect impact</strong> occurs through an intermediate causal pathway, for example increased access encouraging development elsewhere or a project's materials demand influencing an off-site supply activity. Spatial distance alone does not settle the classification; define the action and assessment boundary.</p>" +
                        "<p>A <strong>cumulative impact</strong> concerns the combined or incremental effect of the proposal with other relevant past, present or reasonably foreseeable activities on a receptor. Several abstractions can collectively reduce dry-season flow even when each individual abstraction appears modest. An impact can be both indirect and cumulative, but the two terms are not synonyms.</p>" +
                        "<p>The 1993 guidelines' clause 23(2) treats direct, indirect and cumulative effects distinctly. The bank's off-site mining example can illustrate an indirect supply-chain effect. However, transport emissions can also be classified differently according to whether associated transport is included as a direct project activity. Naming the causal boundary is more informative than memorizing distance-based categories.</p>" +
                        "<p>For each important pathway, identify the source, transport mechanism, receptor, timing and other interacting pressures. Avoid counting the same consequence twice merely because it appears in more than one category. A pathway diagram or interaction table helps distinguish a causal mechanism from a cumulative accounting boundary and directs the baseline information needed for prediction.</p>",
                    sources: [{ id: "WATE813-00104", set: 12, question: 92 }]
                },
                {
                    id: "environment-impact-significance",
                    title: "Judge significance using magnitude, receptor sensitivity and context",
                    html: "<p>Describe an impact's direction, magnitude, extent, duration, frequency, likelihood and reversibility. Then evaluate significance using the affected receptor's sensitivity, applicable objectives and the quality of evidence. A small physical change can be significant for a scarce habitat or a household's only water source; a large number without a receptor context may be misleading.</p>" +
                        "<p>Ecological, human-health and social effects all belong in a relevant assessment. Air, water, land and noise are environmental media or issue groupings, not a universal exhaustive set of <strong>four impact types</strong>. Other classifications distinguish direct/indirect, cumulative, beneficial/adverse, temporary/permanent or reversible/irreversible effects. State the framework rather than treating its category count as a natural law.</p>" +
                        "<p>Qualitative labels such as high, medium and low should have transparent criteria. Quantitative predictions need units, baseline, assumptions and uncertainty. Combining them in a matrix is useful only if the scoring does not conceal unacceptable effects or pretend that ordinal scores are precise physical measurements.</p>" +
                        "<p>Jobs and economic benefits are relevant to the overall assessment and decision, but they do not change the technical magnitude, duration or affected area of environmental damage. Keep beneficial and adverse pathways visible rather than subtracting jobs from habitat loss to make the latter disappear. Evaluate residual significance after feasible mitigation, including who bears the residual risk and how performance will be verified.</p>",
                    sources: [
                        { id: "WATE813-00103", set: 12, question: 91 },
                        { id: "WATE813-00120", set: 13, question: 96 },
                        { id: "WATE813-00088", set: 10, question: 97 }
                    ]
                },
                {
                    id: "environment-impact-duration",
                    title: "Impact duration is not the time allowed to write an assessment",
                    html: "<p>Duration describes how long an impact persists. Study duration describes how long evidence collection and assessment take. Project life, construction period, report-submission deadlines and impact duration are separate clocks. A short construction activity can create a permanent habitat change, while a long-running operation may generate intermittent reversible noise.</p>" +
                        "<p>The inspected 1994 unofficial English translation of Nepal's <strong>National EIA Guidelines 1993, clause 25(2)(c)</strong>, describes short-term impacts as lasting about <strong>three years</strong>, medium-term as more than three but less than twenty, and long-term as beyond twenty. This is an identified historical classification, not a universal scientific rule or a reason to ignore the applicable present assessment framework.</p>" +
                        "<p>The bank's <strong>5–10-year short-term EIA</strong> claim is therefore not supported by that cited historical framework. Do not force one of its offered ranges into the correct explanation. State the actual duration relevant to the receptor and the adopted classification, including any boundary ambiguity rather than silently inventing a threshold.</p>" +
                        "<p>Predictions should consider construction, operation, closure and recovery where relevant, including delayed and seasonal effects. Explain whether a consequence stops immediately when the action stops or persists through stored contamination, altered drainage or lost access. Use sensitivity cases where duration is uncertain, and design monitoring to test the mechanism and recovery rather than only the administrative completion date.</p>",
                    sources: [{ id: "WATE813-00121", set: 13, question: 97 }]
                },
                {
                    id: "environment-public-participation",
                    title: "Participation improves evidence and significance judgments",
                    html: "<p>Affected people can identify seasonal water use, informal access, culturally important places, livelihood dependencies and past failures absent from a desk study. Their views help determine which effects are significant and which mitigation arrangements are workable. Public involvement is therefore more than satisfying a notice requirement or obtaining a favourable vote.</p>" +
                        "<p>Map stakeholders by potential effect and information need, not only formal land ownership. Include people who may face language, mobility, time or social barriers to attending a meeting. Use accessible explanations of the proposal and alternatives, provide realistic opportunities to comment, and avoid presenting a fully fixed design as if consultation could still change it.</p>" +
                        "<p>Keep a record connecting concerns to the proponent's response: the issue raised, evidence checked, design or mitigation change, remaining disagreement and how it will be followed up. A large attendance sheet alone does not establish meaningful participation. Dissent should not be erased merely because most attendees support the proposal.</p>" +
                        "<p>Technical findings and community observations should be assessed critically and respectfully. Neither popularity nor the developer's preference substitutes for compliance or evidence. Public involvement supports a more accurate report and legitimate decision; it does not transfer the regulator's statutory role to a meeting or guarantee consensus. Separate the continuing participation process from the particular formal hearing and written-comment stages prescribed in the Rules.</p>",
                    sources: [{ id: "WATE813-00092", set: 11, question: 91 }]
                },
                {
                    id: "environment-hearing-and-process",
                    title: "Public hearing occurs during report preparation, not always after a finished study",
                    html: "<p>An EIA workflow can be summarized as screening, scoping and ToR, investigation and impact evaluation with participation, reporting, review and decision, followed by implementation and monitoring. These functions interact and may require revision. Counting them as four, five or more stages depends on how they are grouped; there is no universal four-stage process.</p>" +
                        "<p>EPR 2077 <strong>Rule 6 places public hearing during preparation of the environmental study report</strong>. It is held in the affected area, with relevant affected communities, forest-user representatives and local representatives; more than one location can be needed. Publicity and records of attendance, suggestions, photographs and audiovisual material support the hearing record attached to the report.</p>" +
                        "<p>Consequently a simple examination sequence placing public hearing after EIA should not be read as a legal instruction to finish every investigation and report before hearing the public. Findings and alternatives must be explained sufficiently for informed participation, while the report remains capable of incorporating the resulting evidence and suggestions.</p>" +
                        "<p>Rule 7 connects the report with approved scoping/ToR and hearing suggestions. Review may request information or a fuller assessment, so arrows between stages are not guarantees of automatic approval. Use the applicable procedural provisions and distinguish study completion from approval and from all other project permissions. A memorized stage count cannot replace this workflow.</p>",
                    sources: [
                        { id: "WATE813-00072", set: 9, question: 91 },
                        { id: "WATE813-00122", set: 13, question: 98 }
                    ]
                },
                {
                    id: "environment-notice-stages",
                    title: "Different seven-day notices — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank does not set out all notice provisions or provide a project notice schedule. The inspected EPR 2077 uses several distinct opportunities for written comments. They must not be compressed into one universal seven-day public-hearing rule.</p>" +
                        "<table><thead><tr><th scope='col'>Provision</th><th scope='col'>Purpose of the identified seven-day period</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Rule 4</th><td>Written suggestions for EIA scoping; Schedule 4 notice and the required local, newspaper and applicable website publicity.</td></tr>" +
                        "<tr><th scope='row'>Rule 7</th><td>Separate written-comment notice associated with environmental-study report preparation.</td></tr>" +
                        "<tr><th scope='row'>Rule 9</th><td>Review-stage public disclosure/comment on the EIA report.</td></tr></tbody></table>" +
                        "<p><strong>Rule 6 hearing publicity is a separate obligation</strong>; that rule itself does not establish a universal seven-day hearing-notice interval. A scoping notice is not proof that a later report was disclosed, and a report-disclosure notice cannot retrospectively satisfy an earlier opportunity to influence scope.</p>" +
                        "<p>For a real proposal, maintain a procedural register showing the correct provision, audience, notice content, channels, issue date, closing date, records and response to comments. Use the legally applicable calculation and any additional requirements rather than assuming all periods are interchangeable. The cited periods are from the inspected consolidation, not a certification that every project-specific notice or subsequent amendment has been checked.</p>",
                    sources: []
                },
                {
                    id: "environment-report-quality",
                    title: "An assessment report should be traceable, balanced and useful for implementation",
                    html: "<p>The environmental-study report should present a neutral, evidence-based account rather than advocacy for the developer, regulator or any single stakeholder. Neutrality does not mean ignoring inequality or disagreement; it means making evidence, assumptions and value judgments explicit and applying the stated criteria consistently.</p>" +
                        "<p>Document the proposal and alternatives, applicable framework, baseline, methods, impact pathways, significance, mitigation, residual effects, management and monitoring arrangements and consultation response. EPR 2077 Rule 7 identifies <strong>Schedules 10, 11 and 12</strong> as the respective BES, IEE and EIA report formats. Select the applicable format instead of copying an unrelated project report.</p>" +
                        "<p>Separate measured results from estimates. Give units, sampling periods and uncertainty, explain model assumptions and carry limitations into the decision. Link important commitments to implementation responsibilities and resources, so they do not disappear between the report and the construction contract.</p>" +
                        "<p>The proponent's <strong>bank-account details</strong> are not a normal environmental-assessment component, which explains the assigned question. This does not exclude every financial consideration: estimated study resources, mitigation costs and monitoring budgets can be relevant or required. Do not confuse private banking identifiers with the estimated study budget required in the identified ToR schedules. An objective report can document benefits and adverse effects while explaining why unresolved significant impacts remain unresolved.</p>",
                    sources: [
                        { id: "WATE813-00093", set: 11, question: 92 },
                        { id: "WATE813-00338", set: 33, question: 96 }
                    ]
                },
                {
                    id: "environment-assessment-emp-scenario",
                    title: "Worked assessment and environmental management plan scenario",
                    html: "<p><strong>Hypothetical teaching scenario, not bank project data:</strong> a town proposes a wastewater plant. Site A is nearer existing sewers but flood-prone; Site B requires a longer connection but avoids that floodplain location. Compare both with the without-project case, including construction disturbance, downstream water users, power reliability, sludge transport, habitats and community access.</p>" +
                        "<p>Assume Q = 1000 m<sup>3</sup>/day, influent BOD = 200 mg/L and a hypothetical operating objective of 20 mg/L at unchanged flow. Loads are <strong>200 and 20 kg/day</strong>, so predicted removal is <strong>180 kg/day = 90%</strong>. This is a mass-balance illustration, not a Nepal discharge limit or proof of receiving-water acceptability. Dry-season river conditions, pathogens, nutrients and failure cases still need assessment.</p>" +
                        "<table><thead><tr><th scope='col'>EMP issue</th><th scope='col'>Measure and responsibility</th><th scope='col'>Verification and response</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Construction sediment</th><td>Contractor phases earthworks and controls runoff.</td><td>Inspect controls and downstream effects; correct failures before continuing affected work.</td></tr>" +
                        "<tr><th scope='row'>Operating effluent</th><td>Operator maintains process capacity and a defined sampling plan.</td><td>Check flow and pollutant loads against applicable conditions; investigate deviations and apply the approved contingency.</td></tr>" +
                        "<tr><th scope='row'>Flood or power failure</th><td>Proponent selects resilient siting and reliable essential systems.</td><td>Test response arrangements; prevent uncontrolled releases and notify responsible parties as required.</td></tr></tbody></table>" +
                        "<p>An <strong>environmental management plan, EMP</strong>, also needs costs, timing, accountable owners, reporting, monitoring methods and residual-impact review. Combining quantitative loads with qualitative receptor significance answers more than a checklist of impact names.</p>",
                    sources: [{ id: "WATE813-00080", set: 9, question: 99 }]
                },
                {
                    id: "environment-review-and-approval-routes",
                    title: "Submit to the competent route; report approval is not every project permission",
                    html: "<p>EPR 2077 <strong>Rule 8</strong> distinguishes submission routes by proposal category and governmental jurisdiction. For federal proposals, BES/IEE go to the concerned sector ministry; EIA goes through that ministry to the environment ministry. Provincial and local proposals have differentiated routes. Neither direct submission of every report to MoFE nor universal submission to a municipal chief is an accurate rule.</p>" +
                        "<p>Review examines the report and can seek clarification, additional information or a fuller assessment when warranted. The inspected <strong>Rule 9</strong> specifies approval periods of <strong>15 days for BES/IEE and 35 days for EIA</strong>, subject to the relevant information and clarification provisions. These are not guaranteed total project-processing times or evidence of automatic approval when a number of days has elapsed.</p>" +
                        "<p>EPA sections <strong>7–8</strong> link the required environmental-study approval with implementation; implementing a proposal without its required approved report is prohibited. The findings should meaningfully inform the decision and conditions rather than being filed after an irrevocable development decision.</p>" +
                        "<p>Environmental-report approval does <strong>not replace all other permits</strong>, land or forest permissions, water-use arrangements, construction approvals or operating conditions that may apply. Identify those separately and track compliance with report commitments. A favourable assessment is not a guarantee of consent, and consent is not a certificate that no future environmental effects or monitoring responsibilities remain.</p>",
                    sources: [
                        { id: "WATE813-00126", set: 14, question: 92 },
                        { id: "WATE813-00115", set: 13, question: 91 }
                    ]
                },
                {
                    id: "environment-monitoring-and-project-change",
                    title: "Follow-up, submission windows and changes — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> no assigned record supplies a complete compliance-monitoring or project-change case. Separate baseline monitoring, compliance checks and impact monitoring. Compliance asks whether stated conditions and commitments are met; impact monitoring tests whether predicted changes and mitigation performance are occurring. A corrective-action system needs triggers, responsible people, resources and a record of the response.</p>" +
                        "<p>The inspected EPR <strong>Rule 8(11)–(15)</strong> sets a two-year report-submission window following the relevant ToR/scoping approvals, with a possible extension up to one year and re-preparation requirements when the applicable period expires. Apply the exact provision and date basis; this is not the lifespan of an environmental impact or a universal project-construction deadline.</p>" +
                        "<p>Changes to a proposal may require further environmental review. The inspected EPA consolidation's <strong>2082 amendment to section 11(1)</strong> contains a specific supplementary-EIA exception for stated forest-area/tree-count changes up to ten percent with written notification. It must <strong>not</strong> be generalized into a ten-percent capacity-change exemption for any project.</p>" +
                        "<p>When location, capacity, technology or associated works change, compare the revised proposal with the approved basis and applicable law before implementation. Monitoring can reveal underestimated impacts even without a formal scope change. Reassess and strengthen controls where needed; an approved report does not make an outdated prediction true or remove the obligation to manage actual harm.</p>",
                    sources: []
                },
                {
                    id: "environment-land-use-planning-link",
                    title: "Land-use planning and project EIA complement rather than replace each other",
                    html: "<p><strong>Land-use planning</strong> considers how space is allocated among activities, infrastructure, conservation and future development. Project EIA investigates the consequences of a specified proposal and its alternatives. A planned industrial zone may be broadly suitable for development, yet a particular process can still create unacceptable water demand, pollution or transport effects.</p>" +
                        "<p>Conversely, a project-level assessment cannot by itself resolve every strategic question about regional growth, cumulative infrastructure or where an entire sector should locate. Use the relevant planning context to identify alternatives and constraints, then assess the actual proposal rather than treating zoning as proof that impacts are harmless.</p>" +
                        "<p>Engineering and assessment should exchange information iteratively. Hydrology can alter an outfall location; slope investigation can change an access road; consultation can reveal a seasonal route that the layout would block. Design changes then need to be reflected in quantities, impact predictions, costs and management commitments.</p>" +
                        "<p>Neither process is inherently identical to the other, and neither is made unnecessary by the other's existence. EIA can take time and resources, but effort should be proportionate to the required scope rather than assumed uniformly expensive for all proposals. Trace the actual planning constraint, project decision and approval requirement separately so a broad statement of land suitability is not mistaken for permission to implement an unassessed design.</p>",
                    sources: [{ id: "WATE813-00117", set: 13, question: 93 }]
                },
                {
                    id: "disaster-hazard-risk-and-disaster",
                    title: "Hazard, risk and disaster are related but not interchangeable",
                    html: "<p>A <strong>hazard</strong> is a potentially damaging process, phenomenon or human activity. <strong>Exposure</strong> concerns people and assets in places that can be affected. <strong>Vulnerability</strong> concerns their susceptibility to harm; <strong>capacity</strong> includes strengths and resources for managing that harm. A flood hazard over an unoccupied area and the same flood through a poorly protected settlement do not produce identical risk.</p>" +
                        "<p><strong>Disaster risk</strong> concerns potential losses. UNDRR's 2017 terminology describes it probabilistically as a <strong>function of hazard, exposure, vulnerability and capacity</strong>. Expressions multiplying simplified indices can be useful within a defined model, but there is no universally valid identity Risk = Hazard × Vulnerability × Exposure with interchangeable units and no capacity term.</p>" +
                        "<p>A <strong>disaster</strong> involves serious disruption and losses arising when hazardous events interact with exposure, vulnerability and capacity. It is an outcome of interaction, not simply the existence of a hazard. Need for external assistance may characterize a severe situation, but it is not the definition of every hazard.</p>" +
                        "<p>The bank's reversed hazard-product statement is wrong, yet some other offered statements are also imprecise or false. Define each quantity before comparing choices. Engineering risk reduction can act by avoiding exposure, reducing structural or social vulnerability, modifying a hazard where feasible and strengthening capacity; it does not always require eliminating the physical phenomenon itself.</p>",
                    sources: [{ id: "WATE813-00107", set: 12, question: 95 }]
                },
                {
                    id: "disaster-exposure-vulnerability-capacity",
                    title: "Population movement can change exposure and several dimensions of vulnerability",
                    html: "<p>Population distribution and movement influence who is exposed, when they are present and whether they can access information, shelter and services. The bank associates them with social vulnerability, which is a useful lens, but movement is not automatically vulnerability. A well-supported evacuation can reduce risk; displacement into unsafe housing can increase it.</p>" +
                        "<table><thead><tr><th scope='col'>Dimension</th><th scope='col'>Example assessment question</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Physical</th><td>Can buildings, bridges and water systems withstand the identified hazard?</td></tr>" +
                        "<tr><th scope='row'>Social and health</th><td>Who faces mobility, communication, care or access barriers?</td></tr>" +
                        "<tr><th scope='row'>Economic</th><td>Which livelihoods and households lack reserves or alternatives?</td></tr>" +
                        "<tr><th scope='row'>Environmental</th><td>Have ecosystem changes increased susceptibility or removed protective functions?</td></tr></tbody></table>" +
                        "<p>Capacity analysis identifies warning systems, local knowledge, trained personnel, resilient lifelines, social networks and available resources. Avoid treating poverty, disability or age as a complete individual risk score; actual circumstances, exposure and accessible support matter.</p>" +
                        "<p>Use appropriately disaggregated information with privacy protection, consult affected groups and update the assessment as occupancy and services change. Distinguish people located in a hazard footprint from the proportion expected to suffer a given consequence. Vulnerability assessment supports mitigation, preparedness and recovery decisions, not only a single phase before an event.</p>",
                    sources: [{ id: "WATE813-00135", set: 15, question: 90 }]
                },
                {
                    id: "disaster-multihazard-and-onset",
                    title: "Assess onset, interacting hazards and the human conditions that create disaster",
                    html: "<p>Relevant hazards can be geophysical, hydrometeorological, biological or technological, with combinations and cascading effects. Nepal's earthquake, flood, landslide, drought, fire and outbreak concerns require different evidence and interventions. A statutory natural/non-natural classification should not be assumed identical to every international hazard taxonomy.</p>" +
                        "<p>Earthquake shaking can trigger slope failures, damage water systems and block rescue routes. Heavy rainfall can combine river flooding, debris flows and landslides. Drought can affect water supply and livelihoods over an extended period. Human land use, construction and service conditions influence exposure and consequences; calling an event natural does not mean its disaster losses are unaffected by people.</p>" +
                        "<p><strong>Outbreak onset is variable</strong>: some infections spread or become apparent rapidly, while others develop over longer periods. Multiple biological, social and environmental factors may contribute, but outbreak is not a universally slow-onset category. Likewise, a hazard assessment should not require every event to have several overlapping natural causes before it counts.</p>" +
                        "<p>Tsunamis commonly arise from rapid displacement of seawater associated with a sufficiently disruptive undersea earthquake. Not every submarine earthquake generates one; landslides and volcanic processes can also do so. That global mechanism is not evidence of direct marine-tsunami exposure at a Nepal site.</p>" +
                        "<p>Describe frequency using a dated event catalogue, location and metric. The bank's all-of-these frequency answer identifies possible recurrent concerns, not a measured ranking. Examine joint and cascading effects rather than adding independently estimated losses without checking dependence.</p>",
                    sources: [
                        { id: "WATE813-00109", set: 12, question: 96 },
                        { id: "WATE813-00110", set: 12, question: 97 },
                        { id: "WATE813-00111", set: 12, question: 98 },
                        { id: "WATE813-00114", set: 12, question: 100 }
                    ]
                },
                {
                    id: "disaster-management-cycle",
                    title: "The management cycle is a useful framework, not four isolated boxes",
                    html: "<p>A common teaching framework groups disaster management into <strong>mitigation, preparedness, response and recovery</strong>. Other frameworks distinguish prevention, rehabilitation, reconstruction or additional functions. Four is a conventional grouping, not a universal count of all actions or mutually exclusive stages.</p>" +
                        "<table><thead><tr><th scope='col'>Function</th><th scope='col'>Illustrative purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Mitigation</th><td>Reduce adverse effects through safer structures, siting and protective measures.</td></tr>" +
                        "<tr><th scope='row'>Preparedness</th><td>Build warning, planning, training and resource readiness.</td></tr>" +
                        "<tr><th scope='row'>Response</th><td>Protect life and meet urgent needs during and immediately after impact.</td></tr>" +
                        "<tr><th scope='row'>Recovery</th><td>Restore and improve systems while reducing future risk.</td></tr></tbody></table>" +
                        "<p><strong>Vulnerability analysis is not exclusive to preparedness.</strong> It guides mitigation priorities before an event, helps target urgent support during response and identifies safer reconstruction choices during recovery. Reassess as population, infrastructure and hazards change.</p>" +
                        "<p>Coordination and adaptability are important, so inflexibility is inconsistent with effective management. Flexibility does not mean abandoning assigned responsibilities or safety procedures: use reliable information, clear command and communication arrangements, contingency options and documented decisions. Response may begin while mitigation work continues elsewhere, and recovery planning can begin before immediate relief ends. Treat the cycle as interacting functions rather than a calendar that permits action only in one labelled phase.</p>",
                    sources: [
                        { id: "WATE813-00130", set: 14, question: 96 },
                        { id: "WATE813-00106", set: 12, question: 94 },
                        { id: "WATE813-00074", set: 9, question: 93 }
                    ]
                },
                {
                    id: "disaster-engineering-mitigation",
                    title: "Match engineering mitigation to the hazard and retained failure modes",
                    html: "<p><strong>Disaster Risk Reduction, DRR</strong>, aims to prevent new risk and reduce existing risk while managing residual risk. Prevention seeks to avoid risk; mitigation lessens adverse consequences where complete avoidance is not feasible. Preparedness and effective services support both, but an emergency plan is not a substitute for a structurally adequate building.</p>" +
                        "<table><thead><tr><th scope='col'>Hazard or pathway</th><th scope='col'>Engineering measures</th><th scope='col'>Limits to assess</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Earthquake</th><td>Suitable siting, continuous load paths, ductile detailing, retrofit and restraint of nonstructural components.</td><td>Ground failure, construction quality, occupancy and the applicable seismic design basis.</td></tr>" +
                        "<tr><th scope='row'>Flood</th><td>Avoidance, drainage capacity, protected critical equipment and designed safe exceedance routes.</td><td>Blockage, overtopping, downstream transfer, maintenance and changing hydrology.</td></tr>" +
                        "<tr><th scope='row'>Landslide or debris flow</th><td>Drainage, appropriate slope geometry, support or protective works where justified.</td><td>Groundwater, failure mechanism, runout and effects on neighbouring slopes.</td></tr>" +
                        "<tr><th scope='row'>Fire and technological failure</th><td>Separation, protection systems, safe egress and reliable essential controls.</td><td>Power loss, maintenance, human access and credible compound failures.</td></tr>" +
                        "<tr><th scope='row'>Water-related illness after disruption</th><td>Protected supply, sanitation containment and reliable treatment barriers.</td><td>Access, contamination pathways, operation and public-health coordination.</td></tr></tbody></table>" +
                        "<p>Measures need site investigation, design verification, quality control, inspection and resources for operation. A retaining wall is not a generic cure for every unstable slope, and a levee can move risk elsewhere. These are general engineering principles, not invented code dimensions or a claim of design approval.</p>",
                    sources: [{ id: "WATE813-00132", set: 14, question: 98 }]
                },
                {
                    id: "disaster-nepal-statutory-responsibilities",
                    title: "Distinguish the National Council, Executive Committee and NDRRMA",
                    html: "<p>The inspected <strong>Disaster Risk Reduction and Management Act, 2074 (2017)</strong>, in MoHA's English publication incorporating the first amendment 2075, assigns different functions to different bodies. Section 2(k) identifies the Ministry as the <strong>Ministry of Home Affairs, MoHA</strong>. Calling MoHA the lead ministry does not mean the ministry alone performs every approval function.</p>" +
                        "<table><thead><tr><th scope='col'>Body and provision</th><th scope='col'>Role in the inspected Act</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>National Council, sections 3 and 5</th><td>Chaired by the Prime Minister; national policy/programmes and policy direction.</td></tr>" +
                        "<tr><th scope='row'>Executive Committee, sections 6 and 8</th><td>Chaired by the Home Minister; submits policy/plans to the Council and approves strategic plans/programmes.</td></tr>" +
                        "<tr><th scope='row'>NDRRMA, sections 10 and 11</th><td>National Disaster Risk Reduction and Management Authority under MoHA, supervised by the Executive Committee; implementation, coordination, information and secretariat functions.</td></tr></tbody></table>" +
                        "<p>NDRRMA's tasks include disaster information, research, rescue/relief coordination, emergency-operation functions and support resources under the listed provisions. It is not Nepal or Natural Disaster Risk Reduction and Management Authority; the first word is <strong>National</strong>.</p>" +
                        "<p>For an actual project or emergency, identify the relevant national, provincial, district, local and sectoral responsibilities rather than routing every matter to one body. The bank's phrase which ministry passes DRM strategy compresses lead-ministry and statutory committee roles. The exact approval described above belongs to the identified Act and edition, not an unaudited claim about every later instrument.</p>",
                    sources: [
                        { id: "WATE813-00076", set: 9, question: 95 },
                        { id: "WATE813-00131", set: 14, question: 97 }
                    ]
                },
                {
                    id: "disaster-annual-exceedance-probability",
                    title: "Annual exceedance and return period — syllabus extension",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank supplies no complete probability dataset. Let p be the probability that an annual maximum exceeds a specified hazard level. Under an explicitly <strong>stationary, independent-year model</strong>, probability of no exceedance in one year is 1 − p, and no exceedance in n years is (1 − p)<sup>n</sup>. Taking the complement gives</p>" +
                        "<p><strong>P(at least one exceedance in n years) = 1 − (1 − p)<sup>n</sup></strong>. This concerns exceeding a defined hazard threshold, not automatically a fatality, a structure failure or total disaster probability. Vulnerability and consequences require further modelling.</p>" +
                        "<p><em>Hypothetical example:</em> p = 0.02 and n = 30 years give <strong>1 − 0.98<sup>30</sup> = 0.45451568, or 45.451568%</strong>. The associated return period is <strong>T = 1/p = 50 years</strong>. It does not mean one event occurs exactly every fifty years or that another cannot occur next year.</p>" +
                        "<p>The expected number of years with an exceedance is np = <strong>0.6</strong>; this is not the probability 60%, because more than one year may exceed the threshold. If annual probabilities vary but years remain independent, use 1 − Π(1 − p<sub>i</sub>). Dependence or changing climate, catchment and exposure require a more suitable model. State what event, period and assumptions a return-period label actually describes.</p>",
                    sources: []
                },
                {
                    id: "disaster-expected-loss-scenario",
                    title: "Expected loss and residual risk — syllabus extension",
                    html: "<p><strong>Syllabus extension; all probabilities and losses are hypothetical.</strong> The bank provides no project loss model. For mutually exclusive, exhaustive annual states i with probability p<sub>i</sub> and loss L<sub>i</sub>, <strong>expected annual loss = Σp<sub>i</sub>L<sub>i</sub></strong>. This is a defined probability model, not a universal multiplication of undefined hazard and vulnerability indices.</p>" +
                        "<p>Assume annual states of no damaging flood with probability 0.88 and zero loss, moderate flood with probability 0.10 and loss NRs 1,000,000, and severe flood with probability 0.02 and loss NRs 10,000,000. The probabilities sum to one. Expected annual loss is <strong>0.10 × 1,000,000 + 0.02 × 10,000,000 = NRs 300,000/year</strong>.</p>" +
                        "<p>Suppose a hypothetical mitigation measure leaves those probabilities unchanged but reduces the respective losses to NRs 400,000 and NRs 4,000,000. Expected annual loss becomes <strong>NRs 120,000/year</strong>, a reduction of <strong>NRs 180,000/year</strong>. Significant severe-event and residual risks still remain. The average does not promise that annual losses will equal the average.</p>" +
                        "<p>Do not use overlapping exceedance probabilities as mutually exclusive state probabilities, or the same severe-event loss will be counted twice. Include uncertainty, transferred risk, failure of the measure, service interruption and distributional effects. A monetary comparison does not fully represent life safety, irreversible ecological harm or all social consequences; implementation also requires appropriate engineering and economic appraisal.</p>",
                    sources: []
                },
                {
                    id: "disaster-rankings-and-evidence",
                    title: "A risk ranking needs a dated index, metric and comparison population",
                    html: "<p>The assigned bank states Nepal is eleventh for earthquake and thirtieth for flood risk, but supplies no verifiable dated index, methodology or denominator. Those ordinals are <strong>undated and unverified here</strong>; they must not be presented as current world rankings or attributed to a particular report without checking it.</p>" +
                        "<p>Hazard intensity, exposed population, physical vulnerability, expected annual loss and observed disaster deaths are different metrics. A country can rank differently by absolute loss, loss per person, loss as a share of economic output or a composite vulnerability index. A rank does not give a site's ground motion, design flood, annual failure probability or required engineering capacity.</p>" +
                        "<p>To evaluate a claim, identify publication year, underlying data period, countries included, hazard definition, exposure model, vulnerability assumptions and whether the quantity is modelled or observed. Compare like with like. Changes in rank can result from altered methodology or other countries' positions even if local conditions are unchanged.</p>" +
                        "<p>Nepal's tectonic setting and flood-prone catchments justify substantive risk assessment without relying on an unsupported ordinal. For project work, use appropriate hazard mapping, site investigation, exposure and vulnerability data, uncertainty and applicable design requirements. Historical awareness statistics can motivate study, but they cannot replace local engineering evidence or establish present relative risk.</p>",
                    sources: [
                        { id: "WATE813-00133", set: 14, question: 99 },
                        { id: "WATE813-00134", set: 14, question: 100 }
                    ]
                },
                {
                    id: "disaster-indirect-lifeline-losses",
                    title: "Indirect disaster losses cross economic, health, social and environmental systems",
                    html: "<p>A damaged asset is a direct physical consequence; interruption of services and dependent activities can create indirect consequences well beyond the damage footprint. A failed bridge can prevent market access, delay medical care and interrupt delivery of water-treatment chemicals. A power outage can disable pumping and communication even where those facilities remain physically intact.</p>" +
                        "<p>Economic effects include lost output, business interruption and supply disruption, but indirect effects are not exclusively economic. Loss of safe water can affect health; prolonged access disruption can affect schooling and social support; failed sanitation systems can contaminate the environment. One pathway can connect several domains, so categories should not hide those links.</p>" +
                        "<p>The assigned question is grammatically incomplete and does not establish a unique scientific category. Its Economic key can illustrate one important class of indirect loss, but not a rule excluding social, health or environmental consequences.</p>" +
                        "<p>Assess lifelines as a network: identify critical dependencies, backup capacity, repair access, spare parts, service priorities and the time needed to restore function. Distinguish asset replacement cost from service-loss cost and avoid counting the same interruption repeatedly in several totals. A resilient design may protect a modest-cost component because its failure disconnects an essential service. Explain the pathway and consequence rather than assuming that the most expensive asset is always the most critical.</p>",
                    sources: [{ id: "WATE813-00108", set: 1, question: 91 }]
                },
                {
                    id: "disaster-health-study-design",
                    title: "Choose a health-study design for the question and available time",
                    html: "<p>A <strong>cross-sectional survey</strong> describes conditions in a defined population at a particular time or short period. It can support rapid assessment of current health needs, service access or prevalence after a disaster. It usually cannot establish whether an exposure preceded an outcome, so causal claims require care.</p>" +
                        "<p>A cohort follows a defined population over time and can measure incident outcomes; a case-control study compares prior exposures among people with and without a specified outcome. Each design has different strengths, time requirements and biases. The bank's cross-sectional answer is a plausible common rapid-assessment approach, not the universally preferred design for every disaster question.</p>" +
                        "<p><em>Hypothetical survey example, not bank data:</em> if 30 of 200 sampled people meet a clearly defined current case criterion, observed prevalence in that sample is <strong>30/200 = 0.15 = 15%</strong>. It is not an annual incidence rate. Do not generalize it to everyone affected without examining sampling coverage, nonresponse, case ascertainment and uncertainty.</p>" +
                        "<p>Displaced or inaccessible households can be missed precisely because their needs are greatest. Coordinate ethically appropriate data collection with public-health teams, protect identifying information and distinguish confirmed findings from screening observations. The study should inform action without delaying urgent services, and changing outbreak conditions may require repeated assessment rather than one fixed snapshot.</p>",
                    sources: [{ id: "WATE813-00113", set: 12, question: 99 }]
                },
                {
                    id: "disaster-resilient-infrastructure-scenario",
                    title: "Integrate assessment, preparedness and safer recovery — syllabus extension",
                    html: "<p><strong>Syllabus extension; hypothetical infrastructure scenario:</strong> the bank provides no full emergency or recovery plan. Consider a sewage pumping station serving a hospital and settlement near a flood-prone river. Assess flood depth and duration, debris, access, power supply, structural safety, upstream storage and downstream contamination pathways before selecting protection.</p>" +
                        "<p>First compare relocation or avoidance with protecting the existing site. If a constrained site remains under consideration, design essential equipment, access and backup systems for the stated hazards and credible failures, with independent verification. Do not assume that raising one electrical panel makes the whole station resilient if access, fuel supply or the wet-well structure still fails.</p>" +
                        "<p>Preparedness links warning information to accountable actions: operator notification, service coordination, safe shutdown arrangements, alternative sanitation support and communication with affected users. Assign responsibilities among the operator, proponent and relevant emergency and public-health institutions. Exercise the plan and verify essential equipment rather than relying solely on a written checklist.</p>" +
                        "<p>After an event, competent inspection determines safe access and restoration priorities; uncontrolled entry into flooded electrical or confined spaces is not a recovery procedure. Document actual impacts and failures, manage contamination and restore essential service with appropriate controls. Feed lessons into revised hazard assessment, EMP, maintenance and reconstruction. Safer recovery should reduce future vulnerability, not automatically recreate the same exposure because replacing the previous layout appears administratively convenient.</p>",
                    sources: []
                }
            ],
            gaps: [
                "All 54 assigned source IDs appear in substantively related teaching blocks. Exact bank coverage does not mean the official environmental-assessment and disaster syllabus is exhausted.",
                "The inspected Nepali EPA consolidation includes the amendment dated 2082/04/14; the inspected EPR consolidation lists the Carbon Trading Rules amendment dated 2082/08/22. These are distinct dates and instruments.",
                "All subsequent Gazette changes and project-specific thresholds through September 2026 have not been exhaustively reconciled. Use the applicable legally effective sector, location and governmental-tier provisions before a real filing.",
                "The historical National EIA Guidelines 1993 reference is a 1994 unofficial English translation. Its classifications do not replace later legislation or establish universal impact-duration thresholds.",
                "The original English EPA contains apparent translation defects in sections 5 and 7(3); the inspected Nepali provisions support the explanations of ToR/scoping and conditional escalation.",
                "The dated sources and methods behind the earthquake-eleventh and flood-thirtieth rankings are absent; neither ordinal is asserted as current or verified.",
                "No assigned complete notice schedule, monitoring/change case, annual-exceedance model, expected-loss model or infrastructure emergency plan is supplied. These source-free blocks are explicitly labelled Syllabus extension.",
                "All project-flow, treatment-objective, probability, monetary-loss and survey numbers introduced for teaching are hypothetical, not bank givens, legal thresholds or measured Nepal statistics.",
                "Engineering mitigation principles need site-specific investigation, applicable design standards, approvals and operating resources. The notes do not supply construction or legal approval.",
                "Disaster responsibilities are explained from the identified DRRM Act edition incorporating the first amendment 2075, not a certification that every subsequent institutional or procedural change has been audited."
            ],
            cautions: [
                {
                    html: "<p><strong>Public-hearing sequence correction:</strong> EPR 2077 Rule 6 requires hearing during environmental-study report preparation. The bank's linear placement after EIA must not imply that every study and report is finalized first. Approved scoping/ToR, participation, reporting, review and decision are related but distinct functions.</p>",
                    sources: [{ id: "WATE813-00072", set: 9, question: 91 }]
                },
                {
                    html: "<p><strong>Vulnerability analysis is cross-cutting:</strong> it supports preparedness, but also mitigation priorities, response targeting and safer recovery. Preparedness is not its exclusive place in disaster risk management.</p>",
                    sources: [{ id: "WATE813-00074", set: 9, question: 93 }]
                },
                {
                    html: "<p><strong>Lead ministry versus approval body:</strong> MoHA is the lead ministry in the inspected DRRM Act. The Home-Minister-chaired Executive Committee approves strategic plans/programmes under section 8, while the National Council has the stated policy roles. Saying MoHA alone passes every strategy conflates those institutions.</p>",
                    sources: [{ id: "WATE813-00076", set: 9, question: 95 }]
                },
                {
                    html: "<p><strong>Scoping and ToR are different obligations:</strong> formal EIA scoping is covered by Rule 4, while Rule 5 requires ToR for BES, IEE and EIA. The scoping answer does not mean other study categories have no approved study plan.</p>",
                    sources: [{ id: "WATE813-00079", set: 9, question: 98 }]
                },
                {
                    html: "<p><strong>Act-date correction:</strong> the Environment Protection Act, 2053, is the 1997 Act, not a 1993 Act. The 1993 instrument is the National Environmental Impact Assessment Guidelines; 1993 is not equivalent to 2053 BS. EPA 2076 section 47 repeals the older Act. The stored answer remains unchanged.</p>",
                    sources: [{ id: "WATE813-00081", set: 9, question: 100 }]
                },
                {
                    html: "<p><strong>Screening criteria need the legal and factual basis:</strong> size, sensitivity and community effects matter, but binding schedule triggers cannot be displaced by a preferred informal score. The developer's opinion alone does not establish exemption. Connected works and technology differences must not disappear behind a size-only comparison.</p>",
                    sources: [
                        { id: "WATE813-00090", set: 10, question: 99 },
                        { id: "WATE813-00094", set: 11, question: 93 },
                        { id: "WATE813-00095", set: 11, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>No-EIA can be a valid screening outcome:</strong> a documented conclusion that full EIA is not required is not inherently unacceptable. The 1993 guidelines clause 7(3) recognizes it. The bank confuses vague no-consideration wording with a reasoned decision; other study, permission and pollution-control requirements may still apply.</p>",
                    sources: [{ id: "WATE813-00096", set: 11, question: 95 }]
                },
                {
                    html: "<p><strong>Preliminary investigation is not every statutory IEE:</strong> screening work need not contain a detailed assessment of all potential impacts. However, Nepal's IEE is also an assessment category with its own requirements, not universally an informal step whose only function is deciding whether EIA follows.</p>",
                    sources: [
                        { id: "WATE813-00097", set: 11, question: 96 },
                        { id: "WATE813-00123", set: 13, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Estimated study budget is required in the identified ToR formats:</strong> EPR Schedule 8, chapter 5, item 5.2 and Schedule 7 item 5(b) include it. A fully itemized contractual budget is a different matter, but the explanation's blanket claim that budgets are private and excluded is incorrect.</p>",
                    sources: [{ id: "WATE813-00100", set: 11, question: 99 }]
                },
                {
                    html: "<p><strong>Benefits remain assessment considerations:</strong> jobs and economic benefits do not change the predicted magnitude or duration of environmental damage, which is the narrow distinction intended by the question. They should not therefore be excluded from the wider assessment and decision.</p>",
                    sources: [{ id: "WATE813-00103", set: 12, question: 91 }]
                },
                {
                    html: "<p><strong>Indirect is not cumulative:</strong> the explanation incorrectly treats them as synonyms. Off-site supply mining may be indirect; cumulative effects concern interaction or accumulation with other activities. Transport effects can also depend on the defined project boundary, so distance alone does not uniquely classify the offered examples.</p>",
                    sources: [{ id: "WATE813-00104", set: 12, question: 92 }]
                },
                {
                    html: "<p><strong>Management-principle labels:</strong> inflexibility is inconsistent with adaptable emergency management. The other loosely worded options should not be promoted into a verified exhaustive statutory list of principles; flexibility still operates within clear responsibilities, evidence and safety procedures.</p>",
                    sources: [{ id: "WATE813-00106", set: 12, question: 94 }]
                },
                {
                    html: "<p><strong>Multiple conceptual defects:</strong> hazard is not risk multiplied by vulnerability, and a hazard is not defined as an event requiring external assistance. UNDRR describes disaster risk as a function of hazard, exposure, vulnerability and capacity, not an exceptionless three-factor product. The bank's single wrong-choice format does not resolve its other defective statements.</p>",
                    sources: [{ id: "WATE813-00107", set: 12, question: 95 }]
                },
                {
                    html: "<p><strong>Garbled indirect-impact question:</strong> economic losses are one category, not the only possible indirect consequence. Social, health and environmental impacts can also be indirect. The wording is insufficient to establish a unique general classification.</p>",
                    sources: [{ id: "WATE813-00108", set: 1, question: 91 }]
                },
                {
                    html: "<p><strong>Outbreak onset varies:</strong> outbreaks may develop rapidly or over longer periods, depending on the agent and detection, exposure and social conditions. The key must not be generalized into all outbreaks are slow-onset, nor all volcanic activity is an equally rapid single event.</p>",
                    sources: [{ id: "WATE813-00109", set: 12, question: 96 }]
                },
                {
                    html: "<p><strong>Natural hazard does not mean wholly natural disaster loss:</strong> interacting natural causes are possible, but exposure, vulnerability and human activity help determine consequences. The answer is not an exhaustive explanation of every event or proof that human conditions are irrelevant.</p>",
                    sources: [{ id: "WATE813-00110", set: 12, question: 97 }]
                },
                {
                    html: "<p><strong>Tsunami mechanism qualification:</strong> a sufficiently disruptive undersea earthquake is a common cause, not a guarantee that every submarine earthquake produces a tsunami. Landslides and volcanic processes can also displace seawater. This global mechanism does not establish direct marine-tsunami exposure in Nepal.</p>",
                    sources: [{ id: "WATE813-00111", set: 12, question: 98 }]
                },
                {
                    html: "<p><strong>Study design depends on the question:</strong> a cross-sectional survey is useful for rapid prevalence or needs assessment but is not universally preferable to cohort or case-control approaches. A single prevalence observation does not establish incidence or causation.</p>",
                    sources: [{ id: "WATE813-00113", set: 12, question: 99 }]
                },
                {
                    html: "<p><strong>Frequency is not established by a list:</strong> flood, drought and outbreak can recur, but all of the above does not prove equal frequency or a current ranking. A comparison needs a defined period, location, event definition and data source.</p>",
                    sources: [{ id: "WATE813-00114", set: 12, question: 100 }]
                },
                {
                    html: "<p><strong>Assessment approval versus project permissions:</strong> the findings must inform the required decision, and the report goes through the competent route under Rules 8–9. Not every report goes directly to MoFE or a municipal chief. Environmental-report approval does not replace all other permissions or guarantee approval of the proposal.</p>",
                    sources: [
                        { id: "WATE813-00115", set: 13, question: 91 },
                        { id: "WATE813-00126", set: 14, question: 92 }
                    ]
                },
                {
                    html: "<p><strong>Four impact types is not universal:</strong> air, water, land and noise are issue groupings, not an exhaustive classification of all environmental effects. Ecological, health, social, cumulative, indirect and other distinctions remain relevant under their stated frameworks.</p>",
                    sources: [{ id: "WATE813-00120", set: 13, question: 96 }]
                },
                {
                    html: "<p><strong>Short-term correction:</strong> clause 25(2)(c) of the inspected unofficial English translation of the 1993 guidelines describes short-term impacts as about three years, not 5–10 years. Impact duration is also different from the time spent preparing an EIA. No offered range should be forced into a supposedly universal rule.</p>",
                    sources: [{ id: "WATE813-00121", set: 13, question: 97 }]
                },
                {
                    html: "<p><strong>Stage counts depend on grouping:</strong> four stages is one simplified teaching arrangement, not a universal number. Participation, review, decision, implementation and monitoring cannot be omitted merely to preserve the bank's count.</p>",
                    sources: [{ id: "WATE813-00122", set: 13, question: 98 }]
                },
                {
                    html: "<p><strong>BES is explicit in Nepal's inspected Rules:</strong> Rule 3 and Schedule 1 provide Brief Environmental Study. It is not only a term used in some unspecified frameworks. BES, IEE and EIA are applicable categories rather than three compulsory successive reports.</p>",
                    sources: [{ id: "WATE813-00125", set: 14, question: 91 }]
                },
                {
                    html: "<p><strong>Historical guideline title and scope:</strong> the identified source is National Environmental Impact Assessment Guidelines 1993, available here through a 1994 unofficial English translation. It influenced procedure but does not supersede later EPA/EPR provisions. Endorsement in 1992 and Gazette publication in 1993 are different dates.</p>",
                    sources: [{ id: "WATE813-00127", set: 14, question: 93 }]
                },
                {
                    html: "<p><strong>EPR year correction:</strong> the principal Rules are EPR 2077, not EPR 2078. The source's EPA 2076 + EPR 2077 option matches the identified instruments. The EPA amendment dated 2082/04/14 and the EPR-listed Carbon Trading Rules amendment dated 2082/08/22 are distinct; neither renames the principal Rules. Later schedule notices still require project-specific checking.</p>",
                    sources: [{ id: "WATE813-00128", set: 14, question: 94 }]
                },
                {
                    html: "<p><strong>IEE is not simply cost minimization:</strong> it identifies and evaluates relevant impacts and mitigation under its requirements. Avoiding redesign may save costs, but needed mitigation can increase direct expenditure. The objective is not indiscriminately minimizing all impacts, including benefits, or guaranteeing the cheapest project.</p>",
                    sources: [{ id: "WATE813-00129", set: 14, question: 95 }]
                },
                {
                    html: "<p><strong>Four disaster-management phases is a framework:</strong> mitigation, preparedness, response and recovery are a useful grouping. Other frameworks separate prevention, rehabilitation or reconstruction, and activities overlap rather than forming four exclusive action types.</p>",
                    sources: [{ id: "WATE813-00130", set: 14, question: 96 }]
                },
                {
                    html: "<p><strong>NDRRMA's name and institutional position:</strong> National Disaster Risk Reduction and Management Authority is under MoHA and supervised by the Executive Committee in the inspected Act. Its coordination and implementation functions should not be confused with every policy or strategy approval role.</p>",
                    sources: [{ id: "WATE813-00131", set: 14, question: 97 }]
                },
                {
                    html: "<p><strong>Unverified rankings:</strong> the eleventh-earthquake and thirtieth-flood claims have no verified dated index or metric in these sources. Do not assert them as current world ranks or attribute them to the World Risk Report without checking the actual edition and measure.</p>",
                    sources: [
                        { id: "WATE813-00133", set: 14, question: 99 },
                        { id: "WATE813-00134", set: 14, question: 100 }
                    ]
                },
                {
                    html: "<p><strong>Movement is not inherently vulnerability:</strong> population movement can change exposure, social support, physical living conditions and economic capacity. Social is a useful category, not an exclusive description or a rule that all migration increases risk.</p>",
                    sources: [{ id: "WATE813-00135", set: 15, question: 90 }]
                },
                {
                    html: "<p><strong>Bank details are not study resources:</strong> excluding the proponent's bank-account particulars does not exclude required estimated study budgets, mitigation costs or monitoring resources. Keep this question separate from the defective categorical ToR-budget explanation.</p>",
                    sources: [
                        { id: "WATE813-00338", set: 33, question: 96 },
                        { id: "WATE813-00100", set: 11, question: 99 }
                    ]
                },
                {
                    html: "<p><strong>Primary-document limits, not a fabricated bank citation:</strong> the original English EPA has apparent defects in sections 5 and 7(3); the Nepali text supports ToR for BES/IEE, scoping plus ToR for EIA and conditional escalation. Rule 6 does not itself prescribe a universal seven-day hearing notice. The inspected 2082 consolidations are not an exhaustive September 2026 legal-status certification.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "Nepal Law Commission, Environment Protection Act, 2076, Nepali consolidation including Some Nepal Acts Amendment Act, 2082 dated 2082/04/14; inspected edition, not exhaustive later-status certification",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/9.%20%E0%A4%B5%E0%A4%BE%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3%20%E0%A4%B8%E0%A4%82%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3%20%E0%A4%90%E0%A4%A8%2C%20%E0%A5%A8%E0%A5%A6%E0%A5%AD%E0%A5%AC_d91zo4v.pdf"
                },
                {
                    title: "Nepal Law Commission, Environment Protection Rules, 2077, Nepali consolidation listing Carbon Trading Rules, 2082 dated 2082/08/22; Rules 3–9, 49 and cited schedules",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/8.%20%E0%A4%B5%E0%A4%BE%E0%A4%A4%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3%20%E0%A4%B8%E0%A4%82%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3%20%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%AE%E0%A4%BE%E0%A4%B5%E0%A4%B2%E0%A5%80%2C%20%E0%A5%A8%E0%A5%A6%E0%A5%AD%E0%A5%AD_jahaoua.pdf"
                },
                {
                    title: "Environment Protection Act, 2076 (2019), original English publication held by FAOLEX; translation cautions for sections 5 and 7(3)",
                    url: "https://faolex.fao.org/docs/pdf/NEP202860_2019.pdf"
                },
                {
                    title: "Environment Protection Act, 2053 (1997), historical text held by FAOLEX; repealed by EPA 2076 section 47",
                    url: "https://faolex.fao.org/docs/pdf/nep52633.pdf"
                },
                {
                    title: "National Planning Commission / IUCN, National Environmental Impact Assessment Guidelines 1993, 1994 unofficial English translation; preface and clauses 7, 23 and 25",
                    url: "https://portals.iucn.org/library/sites/library/files/documents/1994-009.pdf"
                },
                {
                    title: "MoHA, Disaster Risk Reduction and Management Act, 2074 (2017), English publication incorporating first amendment 2075, sections 2–11; FAOLEX copy",
                    url: "https://faolex.fao.org/docs/pdf/NEP228597.pdf"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Hazard",
                    url: "https://www.undrr.org/terminology/hazard"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Exposure",
                    url: "https://www.undrr.org/terminology/exposure"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Vulnerability",
                    url: "https://www.undrr.org/terminology/vulnerability"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Capacity",
                    url: "https://www.undrr.org/terminology/capacity"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Disaster risk",
                    url: "https://www.undrr.org/terminology/disaster-risk"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Disaster risk assessment",
                    url: "https://www.undrr.org/terminology/disaster-risk-assessment"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Prevention",
                    url: "https://www.undrr.org/terminology/prevention"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Mitigation",
                    url: "https://www.undrr.org/terminology/mitigation"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Preparedness",
                    url: "https://www.undrr.org/terminology/preparedness"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Response",
                    url: "https://www.undrr.org/terminology/response"
                },
                {
                    title: "UNDRR, 2017 Sendai Framework terminology: Recovery",
                    url: "https://www.undrr.org/terminology/recovery"
                }
            ]
        }
    });
})();