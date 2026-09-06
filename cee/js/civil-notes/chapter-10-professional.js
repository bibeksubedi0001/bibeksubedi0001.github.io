(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        AALL1005: {
            code: "AALL1005",
            questionCount: 3,
            blocks: [
                {
                    id: "professional-public-interest",
                    title: "Professional practice begins with a duty to people, not just a deliverable",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not provide a complete professional-responsibility case. Engineering professional practice joins technical judgement with accountability for the people and environments affected by a decision. A drawing, inspection or recommendation can influence construction workers, users, neighbours, maintenance staff and future generations, including people who never signed the consultant's contract.</p>" +
                        "<p><strong>Public interest</strong> therefore cannot mean simply satisfying the paying client's immediate preference. Consider safety, reliable service, accessibility, environmental effects, affordability and the distribution of benefits and burdens. An apparently inexpensive scheme may transfer maintenance costs or flood exposure to a less influential community. Identifying that transfer is part of the engineering problem, not an optional publicity exercise.</p>" +
                        "<p>Professional judgement requires a defensible chain from evidence to assumptions, analysis, alternatives and recommendation. State uncertainty and the limits of the commission; obtain specialist advice where necessary. A limitation should tell the decision-maker what has not been established, rather than hide an unresolved danger in small print.</p>" +
                        "<p>Public safety and honest reporting guide these notes. The NEC conduct provisions are explained in their identified editions under the regulatory-body topic; neither a study note nor a favourable commercial decision constitutes legal, design or construction approval.</p>",
                    sources: []
                },
                {
                    id: "professional-sdg-goals-targets",
                    title: "The 2030 Agenda has 17 goals and 169 targets, not 169 goals",
                    html: "<p>The United Nations' <strong>Transforming our world: the 2030 Agenda for Sustainable Development</strong>, adopted in 2015, identifies <strong>17 Sustainable Development Goals and 169 associated targets</strong>. Its preamble and paragraph 18 verify the bank's goal count. A goal expresses a broad intended outcome; a target makes part of that outcome more specific. Indicators measure progress and are not another name for either goals or targets.</p>" +
                        "<p>The Agenda treats economic, social and environmental development as integrated. Engineering links include water and sanitation under Goal 6, energy under Goal 7, decent work and worker safety under Goal 8, resilient infrastructure under Goal 9, inclusive settlements under Goal 11, resource use under Goal 12 and climate action under Goal 13. These are connections, not exclusive assignments of one profession to one goal.</p>" +
                        "<p>For professional evaluation, distinguish a constructed output from a sustained outcome: installed water connections do not by themselves establish affordable, reliable and safe service. Appropriate evidence also needs to reveal who remains excluded. Paragraph 55 distinguishes global aspirations from national targets and planning choices.</p>" +
                        "<p>An SDG label does not waive Nepal's applicable approvals, environmental duties or technical checks. Nor does recalling 17 goals prove that a particular project achieves them; achievement requires relevant evidence and an explicit assessment boundary.</p>",
                    sources: [{ id: "WATE813-00082", set: 10, question: 91 }]
                },
                {
                    id: "professional-environment-society-case",
                    title: "Compare who benefits, who bears harm and who can maintain the asset",
                    html: "<p><strong>Syllabus extension; hypothetical case:</strong> this bank supplies no community survey, environmental baseline or alternative-design dataset. A proposed municipal drain would relieve a busy street but discharge towards a downstream settlement. A professional comparison must examine the receiving system and affected people, rather than define success only at the upstream property boundary.</p>" +
                        "<table><thead><tr><th scope='col'>Perspective</th><th scope='col'>Evidence needed before recommending</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Upstream users</th><td>Service interruptions, access needs and the existing cause of flooding.</td></tr>" +
                        "<tr><th scope='row'>Downstream residents</th><td>Receiving capacity, flow pathways and changes in flood or pollution exposure.</td></tr>" +
                        "<tr><th scope='row'>Maintenance workers</th><td>Safe access, sediment removal needs and a funded maintenance responsibility.</td></tr>" +
                        "<tr><th scope='row'>Less-heard users</th><td>Accessible consultation with tenants, vendors and people with mobility limitations.</td></tr></tbody></table>" +
                        "<p>Compare avoidance, route changes and other feasible service arrangements over construction, operation, maintenance and eventual replacement. Consultation can expose missing access routes or seasonal behaviour, but consultation alone cannot establish hydraulic adequacy. Conversely, a modelled capacity does not settle fairness or affordability.</p>" +
                        "<p>The defensible recommendation records remaining uncertainty, how concerns changed the alternatives and who owns follow-up actions. Do not invent survey results, consent or environmental approval. Detailed BES, IEE and EIA procedures belong to the environmental-assessment topic; this case teaches the professional obligation to notice transferred impacts.</p>",
                    sources: []
                },
                {
                    id: "professional-ethical-reasoning",
                    title: "Resolve an ethical dilemma through evidence, duties and accountable action",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not supply a worked ethical dilemma. A dilemma arises when obligations or interests pull in different directions, such as programme pressure versus an unresolved inspection finding. Ethical reasoning is not a search for a slogan that makes the difficult fact disappear.</p>" +
                        "<ol><li><strong>Establish the facts:</strong> separate direct observations, reported claims, assumptions and missing evidence. Identify any immediate danger before completing paperwork.</li>" +
                        "<li><strong>Identify affected parties and duties:</strong> consider the public, workers, client, employer and profession, along with the applicable law and agreed technical responsibilities.</li>" +
                        "<li><strong>Develop defensible alternatives:</strong> seek clarification, independent review, a controlled hold or a revised scope rather than treating silent acceptance and resignation as the only options.</li>" +
                        "<li><strong>Choose and communicate:</strong> explain the evidence, uncertainty and consequences to the people able to act; refuse an unsupported certification or dishonest instruction.</li>" +
                        "<li><strong>Record and follow through:</strong> assign corrective actions, retain the decision trail and verify closure.</li></ol>" +
                        "<p>Consequences matter, but a hoped-for benefit does not justify falsifying evidence. A superior's instruction also does not transfer away the signer's professional responsibility. Where serious danger is immediate, warn affected people, seek a controlled stop and refer to qualified responsible staff without waiting for a routine meeting. Obtain appropriate legal advice when duties or lawful disclosure routes are uncertain.</p>",
                    sources: []
                },
                {
                    id: "professional-conflicts-and-gifts",
                    title: "A conflict must be disclosed and managed, not merely acknowledged privately",
                    html: "<p><strong>Syllabus extension; hypothetical situations:</strong> this bank contains no conflict-of-interest or gift case. A conflict exists when another interest could improperly influence professional judgement. It may be actual, potential or reasonably perceived; proof that a decision has already been corrupted is not required before managing the conflict.</p>" +
                        "<table><thead><tr><th scope='col'>Situation</th><th scope='col'>Defensible professional response</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A relative owns a supplier being assessed</th><td>Disclose the relationship before assessment and arrange independent allocation or review of the decision.</td></tr>" +
                        "<tr><th scope='row'>A supplier offers a personal benefit during evaluation</th><td>Decline an inducement, record the offer and follow the applicable reporting and gift policy.</td></tr>" +
                        "<tr><th scope='row'>Two clients have incompatible interests</th><td>Identify confidentiality and loyalty constraints before accepting or continuing the conflicting role.</td></tr></tbody></table>" +
                        "<p>Disclosure is the beginning, not automatic permission to continue. Recusal, an independent reviewer or declining the work may still be necessary. A benefit does not become acceptable simply because it is called hospitality or is offered after an award. No monetary safe-harbour for gifts is invented here.</p>" +
                        "<p>Keep the professional judgement, reasons and relevant communications traceable. Legitimate agreed remuneration is different from an undisclosed inducement. These examples illustrate integrity and independence; they do not replace the particular employer's rules or applicable anti-corruption and procurement law.</p>",
                    sources: []
                },
                {
                    id: "professional-competence-and-review",
                    title: "Qualification, registration and task-specific competence are different tests",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not provide a competence assessment or supervision record. An engineering degree establishes an educational qualification; NEC registration establishes a regulatory status. Neither demonstrates that the person is competent in every specialist task, software package, temporary-works system or unfamiliar ground condition.</p>" +
                        "<p>Before accepting work, define the technical scope and identify the knowledge, experience, resources and review needed. Rule 18(1)(d) of the inspected NEC Regulations requires work and advice to remain within the relevant field of study or acquired knowledge and skills, with referral to an appropriate expert outside that field. Reading a checklist is not equivalent to acquiring the competence needed to take responsibility.</p>" +
                        "<p>Delegation requires clear instructions, suitable supervision and review proportional to the consequences of error. The responsible engineer must understand the assumptions and conclusions being adopted, not merely collect signatures from junior staff. Where review discovers a material uncertainty, resolve it or expressly limit the conclusion and arrange further investigation; do not disguise it as completed verification.</p>" +
                        "<p>Continuing education, peer discussion and a record of lessons learned help maintain competence as practice changes. A course attendance certificate is evidence of participation, not automatic authority for a new specialist role or a substitute for registration. No universal CPD-hour quota or renewal entitlement is asserted here.</p>",
                    sources: []
                },
                {
                    id: "professional-confidentiality-and-warning",
                    title: "Protect confidential information without concealing a serious safety concern",
                    html: "<p><strong>Syllabus extension; hypothetical case:</strong> this bank supplies no client instruction, confidential report or actual disclosure dispute. A client asks an engineer to suppress an unresolved finding that could affect the safety of an occupied structure. The engineer must distinguish protecting legitimate confidential information from falsely assuring others that the concern does not exist.</p>" +
                        "<p>NEC Rule 18(1)(b) combines courteous treatment with confidentiality. It also allows disclosure to relevant authorities in accordance with prevailing law. That exception is not a blanket licence to publish a client's files online, and client confidentiality is not an excuse for issuing a misleading safety certificate.</p>" +
                        "<p>First identify the evidence, uncertainty, potentially affected people and urgency. Communicate the concern and necessary protective response through appropriate responsible channels, obtain competent technical assessment and document any instruction to suppress or misstate findings. If there is immediate danger, warn and seek protective action promptly rather than waiting for a commercial disagreement to finish.</p>" +
                        "<p>For any external disclosure, establish the applicable duty and lawful recipient with qualified advice where needed; disclose relevant information rather than unrelated personal or commercial records. Keep an accurate record of what was communicated and why. This reasoning framework does not determine a particular person's legal disclosure obligation or authorize entry into a dangerous building.</p>",
                    sources: []
                },
                {
                    id: "professional-certification-evidence-qa",
                    title: "Quality assurance makes a certificate traceable to evidence",
                    html: "<p><strong>Syllabus extension; hypothetical case:</strong> this bank supplies no test certificate or acceptance dataset. A project manager requests an acceptance certificate while a laboratory result appears nonconforming and the required technical review is incomplete. The professional response is not to replace the result with a more convenient number.</p>" +
                        "<table><thead><tr><th scope='col'>Record</th><th scope='col'>What makes it useful</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Sample and test evidence</th><td>Traceable sample identity, location, test method, laboratory report and relevant dates.</td></tr>" +
                        "<tr><th scope='row'>Nonconformance record</th><td>The observed discrepancy, affected work and applicable acceptance requirement, without prematurely deciding the cause.</td></tr>" +
                        "<tr><th scope='row'>Review and disposition</th><td>A competent assessment, authorized corrective decision and evidence that the decision was implemented.</td></tr></tbody></table>" +
                        "<p>Quality assurance establishes the planned responsibilities and processes; quality control checks the product or activity against specified criteria. Neither means that every isolated test automatically accepts or rejects an entire structure. Acceptance requires interpretation under the relevant specification and a justified disposition of adverse evidence.</p>" +
                        "<p>Preserve the original record and issue traceable corrections rather than overwriting inconvenient results. Act 29A(c) prohibits false or factually different test reports and recommendations. Rule 18(1)(f)–(g) connects personal responsibility with identifiable signatures. A disclaimer cannot convert an unperformed inspection into a completed one, and an approaching payment date does not establish compliance.</p>",
                    sources: []
                },
                {
                    id: "professional-regulatory-environment",
                    title: "Identify the authority for each decision instead of assuming one approval covers all",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not provide a project-specific legal register or approval pathway. The regulatory environment includes the laws, subordinate rules, applicable standards, permissions and professional duties relevant to the particular activity. Begin by identifying the decision to be made, the responsible authority and the evidence required for that decision.</p>" +
                        "<p>NEC registration concerns the individual engineer's professional status. It does not itself approve a building, authorize an environmental proposal, settle a land boundary or award a contract. Similarly, an employer's appointment or association membership cannot replace statutory registration. Requirements may operate together without being interchangeable.</p>" +
                        "<p>A practical compliance record identifies the instrument and edition, applicable clause, responsible person, submission or inspection evidence, conditions and unresolved questions. Distinguish the commencement of legislation from the date a website uploaded a copy. For NEC matters, read the Act and amended Regulations before relying on an operational notice; detailed NEC provisions are covered under Engineering Regulatory Body.</p>" +
                        "<p>Taxation calculations belong to engineering economics, tender and contract mechanisms to project management, and BES, IEE and EIA procedures to environmental assessment. These notes do not relocate those subjects into NEC law. A foreign technical reference may inform good practice, but its publication alone does not prove legal adoption in Nepal or establish project approval.</p>",
                    sources: []
                },
                {
                    id: "professional-nea-role-and-development",
                    title: "Nepal Engineers' Association supports the profession; NEC regulates registration",
                    html: "<p><strong>Syllabus extension:</strong> this bank supplies no NEA history question or professional-development record. The <strong>Nepal Engineers' Association</strong> states in its official introduction that it was <strong>established in 1962</strong>. No unverified founding day is added here. It is a professional association, not Nepal Electricity Authority and not the Nepal Engineering Council.</p>" +
                        "<p>NEA's introduction describes continuing engineering education, training and workshops, professional networking, technical discussion, member support and policy advocacy. These activities can help an engineer learn revised practice, exchange lessons across disciplines and contribute technical evidence to public debate. Advocacy represents professional concerns; it should not be confused with a statutory decision granting an individual's registration.</p>" +
                        "<p>NEC and NEA can interact without becoming the same body. For example, the Act provides association representation in the Council, and the Regulations include an NEA representative in the inquiry committee. Such participation does not transfer the Council's regulatory powers to the association or its local committees.</p>" +
                        "<p>A useful continuing-learning record states the skill gap, activity completed, learning gained and how it was applied or independently reviewed. Attendance alone proves neither competence nor licence renewal. Check current programme information before enrolling; this topic does not promise particular courses, accreditation credit or membership benefits remain available.</p>",
                    sources: []
                },
                {
                    id: "professional-bim-ai-accountability",
                    title: "Digital tools support judgement but do not assume the engineer's responsibility",
                    html: "<p><strong>Syllabus extension:</strong> this bank contains no BIM coordination model, AI-generated design or digital-assurance case. Building Information Modelling links geometry with information and coordination processes. A model can improve consistency, but a visually convincing view or a clash-free report does not establish structural adequacy, constructability or correct site coordinates.</p>" +
                        "<p>Define who owns each model element, its intended use, information maturity, coordinate system and approved revision. Record the difference between a proposed change, a coordinated change and an authorized construction issue. A shared model with uncertain revision status can spread an error more quickly than a paper drawing.</p>" +
                        "<p>AI-assisted drafting, summarising or checking introduces additional questions: is the cited clause real, is the edition relevant, were units preserved, and can the result be independently reproduced? Treat generated references and conclusions as unverified until checked against the actual source and engineering evidence. Retain a responsible human reviewer; do not invent inspections, signatures, sources or measured results.</p>" +
                        "<p>Protect confidential project data and personal information before using external services. Explain material limitations to collaborators, provide usable access for people outside the digital platform and keep an auditable approval trail. These are professional safeguards, not a claim that NEC has approved a particular AI tool or imposed an unverified BIM mandate.</p>",
                    sources: []
                },
                {
                    id: "professional-climate-resilience-and-exclusion",
                    title: "Climate responsibility includes whole-life effects, adaptation and equitable service",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not provide climate projections, emissions data or a resilience assessment. Climate mitigation addresses greenhouse-gas emissions and removals; adaptation addresses the consequences of changing climate. General hazard mitigation is a broader risk-reduction term, so these meanings should not be silently interchanged.</p>" +
                        "<p>For a long-lived asset, examine material production, construction, operation, maintenance and end-of-life effects within a stated boundary. Lower initial material use may not lower whole-life impacts if it shortens service life or increases repairs. Conversely, excessive conservatism can consume resources without proportionate benefit. Safety and applicable performance requirements remain constraints rather than optional weights that a favourable carbon score cancels.</p>" +
                        "<p>Adaptation requires appropriate climate evidence, uncertainty ranges, failure consequences and a maintainable response. Do not assume a historical rainfall record perfectly predicts future conditions or apply an invented universal climate factor. Flexible layouts, monitoring and planned review can be more defensible than presenting one uncertain forecast as certain.</p>" +
                        "<p>Also examine exclusion: service tariffs, inaccessible warnings or digital-only complaint channels can leave vulnerable users behind. Consultation and disaggregated service evidence complement technical modelling. A professional recommendation explains residual risks, who bears them and who will review changing conditions; it does not guarantee immunity from future disasters.</p>",
                    sources: []
                },
                {
                    id: "professional-hazard-exposure-risk",
                    title: "Hazard, exposure and risk are distinct; physical hazards have no universal ranking",
                    html: "<p>A <strong>hazard</strong> is a source or situation capable of harm. <strong>Exposure</strong> describes who can encounter it, by what route and for how long. <strong>Risk</strong> concerns the likelihood and severity of harm in those circumstances, considering existing controls. An unguarded moving part remains a hazard even when nobody is presently near it; exposure changes when cleaning or maintenance brings a person close.</p>" +
                        "<table><thead><tr><th scope='col'>Useful category</th><th scope='col'>Typical source of harm</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Physical</th><td>Noise, vibration, radiation and temperature extremes.</td></tr>" +
                        "<tr><th scope='row'>Mechanical</th><td>Moving plant, entanglement and crushing points.</td></tr>" +
                        "<tr><th scope='row'>Chemical</th><td>Hazardous gases, vapours, dusts and corrosive materials.</td></tr>" +
                        "<tr><th scope='row'>Biological</th><td>Pathogens associated with sewage or contaminated materials.</td></tr>" +
                        "<tr><th scope='row'>Ergonomic</th><td>High force, repetitive work and unsuitable posture.</td></tr></tbody></table>" +
                        "<p>Categories can overlap. Machinery can create both noise and crushing hazards; OSHA's confined-space definition of physical hazard expressly includes mechanical energy. Classification helps identify controls, but does not require each situation to fit exactly one box.</p>" +
                        "<p>The bank selects physical hazards as more common without naming a workplace, population, period or frequency measure. That is not evidence of a universal ranking. Prioritise the actual site's exposure, consequence and control failures rather than the selected category alone. Fatigue, work organisation and communication barriers also deserve assessment.</p>",
                    sources: [{ id: "WATE813-00112", set: 1, question: 92 }]
                },
                {
                    id: "professional-hierarchy-of-controls",
                    title: "Prefer controlling the source over relying solely on worker behaviour",
                    html: "<p><strong>Syllabus extension:</strong> this bank does not supply a control-selection assessment. NIOSH's hierarchy ranks <strong>elimination, substitution, engineering controls, administrative controls and personal protective equipment</strong> in that preferred order. It is a prevention framework, not evidence that US requirements have been adopted in Nepal.</p>" +
                        "<table><thead><tr><th scope='col'>Level</th><th scope='col'>Illustrative professional design choice</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Elimination</th><td>Locate a component so the hazardous access task is no longer needed.</td></tr>" +
                        "<tr><th scope='row'>Substitution</th><td>Specify a less hazardous process or quieter equipment after assessing new risks.</td></tr>" +
                        "<tr><th scope='row'>Engineering</th><td>Provide suitable guarding, separation, extraction or protected access.</td></tr>" +
                        "<tr><th scope='row'>Administrative</th><td>Plan access, competence, inspections, coordination and exposure-limiting work arrangements.</td></tr>" +
                        "<tr><th scope='row'>PPE</th><td>Select, fit, maintain and train for protection against assessed residual exposure.</td></tr></tbody></table>" +
                        "<p>Higher-level controls generally reduce dependence on repeated individual decisions. An effective barrier can protect several workers; a warning relies on each person noticing, understanding and responding. Nevertheless, barriers and ventilation need inspection and maintenance, and a substitute may introduce a different hazard.</p>" +
                        "<p>Use complementary controls and verify their performance. PPE is not dispensable where required, but issuing helmets or masks does not correct an unstable excavation or an unassessed atmosphere. This comparison does not select a respirator, design a protective system or authorize a hazardous task.</p>",
                    sources: []
                },
                {
                    id: "professional-excavation-electricity-falls",
                    title: "Recognise serious site hazards and refer control decisions to qualified staff",
                    html: "<p><strong>Syllabus extension:</strong> this bank supplies no excavation design, electrical isolation plan or fall-protection assessment. Professional oversight begins with recognition of changing conditions and clearly assigned responsibility, not improvised corrective work by an observer.</p>" +
                        "<table><thead><tr><th scope='col'>Hazard setting</th><th scope='col'>Professional checks and responsible expertise</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Excavations</th><td>Ground and water conditions, adjacent loads, utilities, protective works and access require competent assessment and inspection.</td></tr>" +
                        "<tr><th scope='row'>Electrical work</th><td>Damaged equipment, water and exposed conductors require controlled access and qualified electrical staff managing isolation and verification.</td></tr>" +
                        "<tr><th scope='row'>Work at height</th><td>Platform integrity, edges, openings, access and protective arrangements require a planned system and appropriate specialist review.</td></tr></tbody></table>" +
                        "<p>Rainfall, altered excavation geometry, moved equipment or removed protection can invalidate an earlier assessment. A signed checklist is evidence of an inspection at its stated time and scope, not proof that conditions cannot change. Coordinate adjoining employers so one activity does not undermine another's safeguards.</p>" +
                        "<p>When an immediate serious concern appears, warn affected people, withdraw from exposure, seek a controlled stop and notify responsible qualified personnel. Do not enter unstable ground, touch suspected energized equipment or improvise rescue to investigate the concern. The necessary engineered controls and emergency arrangements must be established by competent staff under the applicable rules; no generic depth, distance or fall-height limit is invented here.</p>",
                    sources: []
                },
                {
                    id: "professional-confined-space-framework",
                    title: "Confined-space permission depends on a complete managed system",
                    html: "<p><strong>Syllabus extension:</strong> this bank provides no confined-space classification, entry permit or emergency plan. Under the cited US construction definition, a confined space permits bodily entry, has limited or restricted entry or exit and is not designed for continuous occupancy. Its permit-space classification additionally depends on serious hazards such as a hazardous atmosphere, engulfment or trapping configuration. Applicable Nepal requirements and the actual task must be established separately.</p>" +
                        "<p>A professional review asks whether entry can be avoided and, if not, whether qualified personnel have identified the hazards, necessary isolation, atmospheric assessment, access control, communications, supervision and emergency arrangements. An oxygen reading addresses only one part of that assessment. A dry-looking chamber may still have toxic gases, unexpected inflow or energy hazards.</p>" +
                        "<p>A permit records authorization for defined work under defined conditions; it does not permanently certify a space as safe. Changes in inflow, adjoining work, equipment, ventilation or monitoring can require stopping and reassessment. Underground construction and confined-space standards also have different scopes; do not assemble a permissive hybrid from whichever clauses appear easiest.</p>" +
                        "<p>If danger or an emergency is suspected, warn, keep unprotected people out and obtain trained emergency assistance from a safe location. These notes give no entry-rescue, chemical treatment or respiratory-equipment selection procedure. Attempting an improvised rescue can create additional casualties.</p>",
                    sources: []
                },
                {
                    id: "professional-tunnel-oxygen-boundaries",
                    title: "An oxygen minimum alone cannot certify a tunnel atmosphere",
                    html: "<p>The tunnel item gives an oxygen minimum of <strong>19.5%</strong> alongside hydrogen sulphide and carbon dioxide limits. Its stored all-of-the-above answer is preserved, but the explanation's implication that these conditions alone make air fit to breathe is unsafe. An oxygen lower bound neither excludes oxygen enrichment nor establishes acceptable toxic or flammable contaminants.</p>" +
                        "<p><strong>OSHA 29 CFR 1926.800(j)(1)(ii)(A)</strong>, for underground construction, specifies at least 19.5% and <strong>no more than 22% oxygen at normal atmospheric pressure</strong>. Separately, <strong>1926.1202</strong>, for construction confined-space definitions, identifies oxygen below 19.5% or above <strong>23.5%</strong> as a hazardous atmosphere and calls the latter oxygen enriched. The 23.5% definition must not replace the underground-construction ceiling.</p>" +
                        "<p>These are identified <strong>US provisions, not verified Nepal adoption</strong>. Oxygen fraction also does not by itself assess the effects of reduced atmospheric pressure at altitude. More oxygen is not automatically safer because enrichment increases combustion risk.</p>" +
                        "<p>Section 1926.800(j) additionally addresses competent-person monitoring and toxic and flammable contaminants; paragraph (j)(3) requires records including location, date, time, substance and amount. The actual work needs a qualified assessment of atmosphere, ground, access and emergency arrangements. Neither one acceptable reading nor agreement with three MCQ statements is entry permission.</p>",
                    sources: [{ id: "HYDR626-00043", set: 6, question: 65 }]
                },
                {
                    id: "professional-gas-concentration-time-basis",
                    title: "Gas concentration units and exposure averaging periods must travel together",
                    html: "<p>On the same <strong>gas-volume basis</strong>, percent means parts per hundred and ppm means parts per million: <strong>ppm = percent × 10,000</strong>. The bank's H<sub>2</sub>S value of <strong>0.001% equals 10 ppm</strong>; its CO<sub>2</sub> value of <strong>0.5% equals 5,000 ppm</strong>. These conversions do not convert either value into a universal exposure or entry limit. Mass concentration is different and additionally depends on the gas and reference conditions.</p>" +
                        "<table><thead><tr><th scope='col'>Inspected NIOSH recommendation</th><th scope='col'>Meaning of the time basis</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>H<sub>2</sub>S: C 10 ppm, 10-minute</th><td>A ceiling recommendation with its stated 10-minute assessment period, not a full-shift TWA.</td></tr>" +
                        "<tr><th scope='row'>CO<sub>2</sub>: TWA 5,000 ppm; ST 30,000 ppm</th><td>The CO<sub>2</sub> entry distinguishes a workday average from a short-term limit; it does not give 5,000 ppm as an instantaneous universal ceiling.</td></tr></tbody></table>" +
                        "<p>The Pocket Guide defines NIOSH TWA for up to a 10-hour workday in a 40-hour week, and ST as a 15-minute average unless otherwise stated. Ceiling, short-term and workday limits are not interchangeable. OSHA's 1926.800(j)(1)(v) H<sub>2</sub>S monitoring triggers are also distinct from NIOSH recommendations.</p>" +
                        "<p>These US references do not prove Nepal's adopted limits. Establish the applicable standard, instruments, sampling and qualified interpretation; odour is not a reliable H<sub>2</sub>S warning. No listed concentration alone authorizes entry or continued work.</p>",
                    sources: [{ id: "HYDR626-00043", set: 6, question: 65 }]
                },
                {
                    id: "professional-site-warning-and-closure-log",
                    title: "Worked professional response: warn, preserve evidence and verify closure",
                    html: "<p><strong>Syllabus extension; wholly hypothetical case:</strong> this bank provides no site observation or incident log. From a safe position, an engineer observes displaced temporary support while a crew is preparing to continue work. The engineer has not established its cause or remaining capacity. The immediate responsibility is to warn and seek protective action, not to enter the hazard zone to obtain a better photograph.</p>" +
                        "<table><thead><tr><th scope='col'>Log element</th><th scope='col'>Appropriate entry</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Observation</th><td>Record the location, observation time and visible displacement; separate observation from others' reports.</td></tr>" +
                        "<tr><th scope='row'>Uncertainty</th><td>State that cause, extent and capacity have not been established.</td></tr>" +
                        "<tr><th scope='row'>Immediate response</th><td>Record the warning, requested controlled stop and notification to the responsible site lead.</td></tr>" +
                        "<tr><th scope='row'>Action owner</th><td>Assign assessment and corrective planning to qualified temporary-works and safety personnel.</td></tr>" +
                        "<tr><th scope='row'>Closure evidence</th><td>Record the competent assessment, authorized action, verification and responsible release decision.</td></tr></tbody></table>" +
                        "<p>A promise to repair is not closure, and a signature added afterwards must not imply an earlier inspection occurred. Retain the original observation and subsequent revisions. Review whether design coordination, inspection or communication failures contributed, without treating an allegation as a proven cause. This case teaches accountable reporting, not support design, a rescue method or permission to restart work.</p>",
                    sources: []
                }
            ],
            gaps: [
                "Only three questions are mapped to AALL1005 in this bank. Ethics, professional roles and contemporary issues remain syllabus subjects even where no mapped question supplies a case.",
                "The bank supplies no site-specific atmospheric monitoring record, gas-volume or mass sampling convention, exposure history, permit, ventilation design or rescue plan.",
                "Nepal's project-specific OHS duties and adoption of any foreign exposure limits have not been comprehensively verified. OSHA and NIOSH references are explicitly US material, not Nepal compliance certificates.",
                "No workplace population, observation period or frequency measure supports a universal most-common-hazard ranking.",
                "Community impacts, consultation, competence, conflicts, certification and site-log examples are original syllabus extensions; hypothetical cases have no fabricated bank citations.",
                "No current NEA course entitlement, mandatory CPD quota, professional-registration renewal rule, BIM mandate or AI-tool approval is established by this bank.",
                "The legal reading is bounded by documents inspected on 6 September 2026. Check ongoing official notices and applicable amendments; this is not an exhaustive current-law audit or professional approval."
            ],
            cautions: [
                {
                    html: "<p><strong>Bank safety qualification:</strong> HYDR626-00043, Model 6 Q65, retains its stored all-of-the-above answer. O<sub>2</sub> ≥ 19.5% alone does not establish a safe atmosphere. OSHA's underground-construction provision uses an upper limit of 22% at normal atmospheric pressure; the separate construction confined-space definition uses oxygen above 23.5% for enrichment. Toxic gases, flammability, dusts, changing conditions and non-atmospheric hazards remain relevant. These US provisions are not asserted as Nepal law or entry permission.</p>",
                    sources: [{ id: "HYDR626-00043", set: 6, question: 65 }]
                },
                {
                    html: "<p><strong>Bank units and duration qualification:</strong> for gas volume fractions, 0.001% H<sub>2</sub>S = 10 ppm and 0.5% CO<sub>2</sub> = 5,000 ppm. The bank states no exposure averaging period or applicable edition. The inspected NIOSH entries distinguish H<sub>2</sub>S C 10 ppm, 10-minute, from CO<sub>2</sub> TWA 5,000 ppm and ST 30,000 ppm. A ceiling, a workday average and a short-term average are different constraints. Matching these numbers neither verifies Nepal adoption nor certifies air as fit to breathe.</p>",
                    sources: [{ id: "HYDR626-00043", set: 6, question: 65 }]
                },
                {
                    html: "<p><strong>Bank ambiguity:</strong> WATE813-00112, Model 1 Q92, selects physical hazards as more common without specifying a workplace, population, period or comparison method. Do not turn this into a universal ranking. Mechanical and physical classifications can overlap; risk priorities require site-specific exposure and consequence assessment. The stored key and options remain unchanged.</p>",
                    sources: [{ id: "WATE813-00112", set: 1, question: 92 }]
                },
                {
                    html: "<p><strong>Verified bank distinction:</strong> WATE813-00082, Model 10 Q91, correctly identifies 17 SDGs. The UN 2030 Agenda separately identifies 169 targets. Goals, targets and indicators are different concepts, and an SDG connection is not evidence of project approval or actual achievement.</p>",
                    sources: [{ id: "WATE813-00082", set: 10, question: 91 }]
                },
                {
                    html: "<p><strong>Syllabus extension:</strong> this bank supplies no NEA identity question. The Nepal Engineers' Association's official introduction verifies establishment in 1962. It is not Nepal Electricity Authority. Its education and advocacy roles do not substitute for the Nepal Engineering Council's statutory registration decisions.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Syllabus extension:</strong> the legal and professional cases are not mapped questions in this bank. NEC Act 29A(a) prohibits work in bad faith; the official English translation's awkward doubled negative must not reverse the Nepali prohibition. The detailed NEC topic reads the Act with its First Amendment, Regulations through the Third Amendment and the separate Fourth Amendment, rather than equating a website upload date with commencement.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Syllabus extension and safety boundary:</strong> this bank provides no complete safe-work method. Hypothetical cases illustrate professional decisions and evidence records only. They are not permits, legal advice, design approvals, electrical instructions, chemical procedures or DIY rescue guidance. For immediate danger, warn, avoid exposure, seek a controlled stop and refer to qualified responsible or emergency personnel.</p>",
                    sources: []
                }
            ],
            references: [
                { title: "United Nations, Transforming our world: the 2030 Agenda for Sustainable Development (2015), preamble, paragraphs 18 and 55, goals and targets", url: "https://sdgs.un.org/2030agenda" },
                { title: "Nepal Engineers' Association, Introduction: establishment in 1962, continuing education and advocacy; accessed 6 September 2026", url: "https://neanepal.org.np/introduction" },
                { title: "Nepal Engineering Council Act, 2055 (1999), official English copy including First Amendment 2079 (2022); translation checked against Nepali for section 29A", url: "https://nec.gov.np/uploads/root/1763715733799_The%20Nepal%20Engineering%20Council%20Act,%202055%20(1999).pdf" },
                { title: "Nepal Law Commission, Nepal Engineering Council Act 2055, Nepali consolidated text including First Amendment 2079; section 29A visually checked", url: "https://giwmscdnone.gov.np/media/app/public/275/posts/1719397746_81.pdf" },
                { title: "Nepal Engineering Council Regulations, 2057 (2001), official English text through Third Amendment 2080 (2023), especially Rule 18", url: "https://nec.gov.np/uploads/root/1763715677170_Nepal%20Engineering%20Council%20Regulations,%202057%20(2001)%20with%20third%20amendment%202080%20(2023).pdf" },
                { title: "Nepal Engineering Council, official Acts and Regulations publication list; check separate amendments and ongoing notices", url: "https://nec.gov.np/page/act-regulations" },
                { title: "US OSHA, 29 CFR 1926.800 Underground Construction, especially scope and paragraphs (j)–(k); accessed 6 September 2026, not verified Nepal adoption", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.800" },
                { title: "US OSHA, 29 CFR 1926.1202 Definitions, Confined Spaces in Construction; accessed 6 September 2026, distinct from underground-construction scope", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1202" },
                { title: "CDC/NIOSH Pocket Guide to Chemical Hazards, Hydrogen sulfide: C 10 ppm, 10-minute; page reviewed 30 October 2019, accessed 6 September 2026", url: "https://www.cdc.gov/niosh/npg/npgd0337.html" },
                { title: "CDC/NIOSH Pocket Guide to Chemical Hazards, Carbon dioxide: TWA 5,000 ppm and ST 30,000 ppm; page reviewed 30 October 2019, accessed 6 September 2026", url: "https://www.cdc.gov/niosh/npg/npgd0103.html" },
                { title: "CDC/NIOSH Pocket Guide, Introduction: volume-based ppm and REL/TWA/ST/ceiling conventions; page reviewed 7 March 2016, accessed 6 September 2026", url: "https://www.cdc.gov/niosh/npg/pgintrod.html" },
                { title: "CDC/NIOSH, Hierarchy of Controls, 10 April 2024; accessed 6 September 2026", url: "https://www.cdc.gov/niosh/hierarchy-of-controls/about/index.html" }
            ]
        }
    });
})();