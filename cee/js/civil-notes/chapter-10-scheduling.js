(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        AALL1003: {
            code: "AALL1003",
            questionCount: 2,
            blocks: [
                {
                    id: "schedule-classification-life-cycle",
                    title: "Classify the project before choosing its planning process",
                    html: "<p><strong>Syllabus extension:</strong> the two assigned bank questions do not supply a project-classification or life-cycle case. A project is a temporary undertaking producing a defined result; routine operation is continuing service delivery. A rehabilitation project can therefore occur inside an organisation that operates the asset indefinitely.</p>" +
                        "<p>Classify projects along separate axes: public/private sponsorship, revenue-generating/social-service purpose, new construction/rehabilitation, sector, scale, technical uncertainty and delivery arrangement. These classifications overlap. A public water project can generate revenue, and a small project can have serious geotechnical or community-interface risks. Classification guides the proportionate investigation, governance, scheduling detail and review effort; it is not a substitute for a risk assessment.</p>" +
                        "<table><thead><tr><th scope='col'>Life-cycle stage</th><th scope='col'>Decision and evidence</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Concept and feasibility</th><td>Define the need, compare alternatives and test whether investment is justified.</td></tr>" +
                        "<tr><th scope='row'>Definition and procurement</th><td>Develop the design, scope, estimates, approvals and delivery responsibilities.</td></tr>" +
                        "<tr><th scope='row'>Execution and handover</th><td>Construct, verify, commission and transfer an operable asset.</td></tr>" +
                        "<tr><th scope='row'>Operation and review</th><td>Measure service benefits, maintain the asset and feed lessons into future projects.</td></tr></tbody></table>" +
                        "<p>This is a teaching framework, not a universal mandatory number of phases. Stage gates authorise further commitment against evidence. Feedback may require redesign or cancellation; a life cycle need not be an irreversible straight line.</p>",
                    sources: []
                },
                {
                    id: "schedule-design-phases",
                    title: "Preliminary design establishes a basis for detailed design",
                    html: "<p><strong>Preliminary design</strong> develops the selected concept far enough to compare layouts, approximate dimensions, materials, construction approaches, interfaces and costs. This is the early design phase identified by the assigned question. It is more informative than simply calling a design primary or initial, because it describes the maturity and purpose of the design information.</p>" +
                        "<table><thead><tr><th scope='col'>Design maturity</th><th scope='col'>Typical question answered</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Conceptual</th><td>Which basic solution could meet the need, and what alternatives merit investigation?</td></tr>" +
                        "<tr><th scope='row'>Preliminary</th><td>How should the preferred solution be arranged, and what investigations and approvals remain?</td></tr>" +
                        "<tr><th scope='row'>Detailed</th><td>What coordinated calculations, specifications, quantities and drawings define the work?</td></tr>" +
                        "<tr><th scope='row'>Construction-stage coordination</th><td>How are approved details, interfaces and verified site conditions incorporated without uncontrolled change?</td></tr></tbody></table>" +
                        "<p><strong>Teaching extension beyond the bank's phase-identification question:</strong> plan design reviews, utility information, geotechnical investigations and approval milestones as real activities. An unresolved foundation assumption can prevent a construction package from being released even when its drafting is nominally complete.</p>" +
                        "<p>Preliminary does not mean unimportant, nor does early design eliminate later review. Progressive detail should reduce uncertainty while retaining a traceable design basis. In overlapping delivery arrangements, release only the authorised package at its required maturity; do not treat a preliminary layout as automatically approved for construction.</p>",
                    sources: [{ id: "TRAN808-00319", set: 30, question: 80 }]
                },
                {
                    id: "schedule-scope-wbs",
                    title: "Separate scope, deliverables, work packages and activities",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank provides no work breakdown structure or scope statement. Scope defines the agreed result, boundaries, exclusions and acceptance conditions. A deliverable-oriented <strong>work breakdown structure, WBS</strong>, decomposes that result into manageable components. It describes what must be delivered; the schedule describes the activities and dependencies needed to deliver it.</p>" +
                        "<table><thead><tr><th scope='col'>Level</th><th scope='col'>Hypothetical pump-project example</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Scope boundary</th><td>Provide a commissioned pump station; exclude the separately procured trunk main.</td></tr>" +
                        "<tr><th scope='row'>Deliverable</th><td>An accepted foundation package with its inspection records.</td></tr>" +
                        "<tr><th scope='row'>Work package</th><td>Foundation construction assigned to an accountable delivery team.</td></tr>" +
                        "<tr><th scope='row'>Activities</th><td>Excavate, inspect formation, place concrete and obtain release for loading.</td></tr></tbody></table>" +
                        "<p>A WBS dictionary records the package boundary, responsible owner, measurement basis, required evidence and acceptance criteria. Include design coordination, procurement, temporary works, testing and handover where they are in scope; these are easily missed when decomposition follows only visible permanent structures.</p>" +
                        "<p>Children should collectively cover their parent without double counting. One drawing is not necessarily one work package, and one work package can require several activities. A new deliverable is a scope-change question, not merely an extra bar inserted by the planner. Resolve interfaces before estimating durations and assigning budgets.</p>",
                    sources: []
                },
                {
                    id: "schedule-duration-calendars",
                    title: "Estimate effort and duration on a declared calendar",
                    html: "<p><strong>Syllabus extension:</strong> no assigned record contains quantities, productivity or crew availability. For a repeatable task, a simple estimate is <strong>d = Q/(nr)</strong>, where Q is the required quantity, n is the number of independent crews, and r is output per crew per working day. Duration d is in working days; effort and elapsed calendar time are different quantities.</p>" +
                        "<p><strong>Hypothetical example:</strong> placing 240 m of a uniform item at 30 m per crew-day requires <strong>8 crew-days</strong>. One crew takes 8 working days. Two genuinely independent crews, with sufficient work fronts and no productivity loss, take <strong>4 working days</strong>. Both arrangements still use 8 crew-days. If each crew contains several workers, crew-days must not be reported as worker-days.</p>" +
                        "<p>This proportional model does not apply automatically to curing, inspections, access permits or indivisible equipment operations. Congestion, setup time, fatigue, learning and interference can prevent duration from halving when staffing doubles. Estimate these mechanisms explicitly rather than inflating a hidden productivity allowance.</p>" +
                        "<p>Define workweeks, shifts, holidays, seasonal restrictions and activity-specific calendars before converting duration into dates. Separate active production from waiting and testing. Use a stated rounding policy for indivisible workdays, document the estimate basis, and update remaining duration from actual conditions rather than treating expenditure as a reliable measure of physical progress.</p>",
                    sources: []
                },
                {
                    id: "schedule-bar-chart-logic",
                    title: "A bar chart communicates timing but does not create precedence",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no bar-chart dataset. A bar chart places activities against a time axis, allowing planned and actual starts, finishes and progress to be compared. Its strength is communication; its weakness is that an ordinary unlinked bar does not explain why one activity must wait for another.</p>" +
                        "<p><strong>Hypothetical time-band display:</strong> A is setup, B and C are parallel base packages, and D is assembly requiring both packages. Time begins at zero. Each Work cell fills the entire named band; the unequal band lengths must be respected rather than interpreted as equal-duration boxes.</p>" +
                        "<table><thead><tr><th scope='col'>Activity</th><th scope='col'>0–2 days</th><th scope='col'>2–6 days</th><th scope='col'>6–9 days</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>Work</td><td>None</td><td>None</td></tr>" +
                        "<tr><th scope='row'>B</th><td>None</td><td>Work</td><td>None</td></tr>" +
                        "<tr><th scope='row'>C</th><td>None</td><td>Work</td><td>None</td></tr>" +
                        "<tr><th scope='row'>D</th><td>None</td><td>None</td><td>Work</td></tr></tbody></table>" +
                        "<p>The associated logic is A before B and C; both B and C before D. Moving B later without recalculating D would leave a visually tidy but infeasible chart. The remaining delivery, installation and commissioning activities belong in the complete network, not this short display.</p>" +
                        "<p>Attach a status date and distinguish baseline, actual and forecast bars. A milestone has zero duration. Bar length, percent-complete shading and the critical path answer different questions; none should be inferred solely from a bar's colour or position.</p>",
                    sources: []
                },
                {
                    id: "schedule-aon-conventions",
                    title: "Declare activity-on-node conventions before calculating",
                    html: "<p><strong>Syllabus extension:</strong> the assigned questions contain no network diagram. In an <strong>activity-on-node, AON</strong>, network, each node represents an activity and each directed connection represents a dependency. Activity-on-arrow uses a different representation; its event-time notation and dummy-arrow conventions must not be copied into an AON table without explanation.</p>" +
                        "<table><thead><tr><th scope='col'>Relationship</th><th scope='col'>Meaning of its minimum separation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Finish-to-start, FS</th><td>The successor cannot start before the predecessor finishes plus the specified lag.</td></tr>" +
                        "<tr><th scope='row'>Start-to-start, SS</th><td>The successor's start is constrained by the predecessor's start.</td></tr>" +
                        "<tr><th scope='row'>Finish-to-finish, FF</th><td>The successor's finish is constrained by the predecessor's finish.</td></tr>" +
                        "<tr><th scope='row'>Start-to-finish, SF</th><td>The successor's finish is constrained by the predecessor's start; use only with a justified real dependency.</td></tr></tbody></table>" +
                        "<p><strong>Every numerical CPM example here uses FS only, zero lag, no leads, nonnegative durations, a common working-day calendar and an acyclic network.</strong> Time intervals include their start and exclude their finish, so a successor can start at the predecessor's finish instant without sharing a workday.</p>" +
                        "<p>Check unique activity IDs, meaningful predecessors and a connected finish milestone. A cycle cannot be resolved by the simple forward/backward passes; model rework as a separately defined future sequence. Do not hide unfinished work with negative lags or hard dates. Meaningful zero-duration approval milestones are valid, but they do not perform physical work.</p>",
                    sources: []
                },
                {
                    id: "schedule-cpm-passes",
                    title: "Forward pass takes MAX; backward pass takes MIN",
                    html: "<p>For the stated zero-lag FS convention, duration d connects start and finish by <strong>EF = ES + d</strong>. At a merge, all required predecessors must have finished, so <strong>ES<sub>i</sub> = max(EF of immediate predecessors)</strong>. Starting when only the earliest predecessor finishes would violate the other dependencies. Activities with no predecessors start at time zero in this teaching model.</p>" +
                        "<p>Work backwards from the required finish time using <strong>LS = LF − d</strong>. An activity feeding several successors must finish early enough for every one of them, hence <strong>LF<sub>i</sub> = min(LS of immediate successors)</strong>. Taking the largest value would protect only the least restrictive successor.</p>" +
                        "<p><strong>Bank correction:</strong> TRAN808-00054, Model 6 Q89, stores A, Forward pass. The technically correct option is <strong>B, Backward pass</strong>; its own explanation already describes this correctly. The stored question and key are not changed.</p>" +
                        "<p><strong>Hypothetical illustration from the complete table that follows, not bank givens:</strong> G waits for D finishing at 9 and F finishing at 4, so ES<sub>G</sub> = max(9, 4) = 9. A feeds B, C and E with latest starts 2, 2 and 7, so LF<sub>A</sub> = min(2, 2, 7) = 2. These are dependency calculations, not rules to select the shortest or longest activity indiscriminately.</p>",
                    sources: [{ id: "TRAN808-00054", set: 6, question: 89 }]
                },
                {
                    id: "schedule-eight-activity-cpm",
                    title: "Complete eight-activity CPM calculation — hypothetical case",
                    html: "<p><strong>Syllabus extension; the entire dataset is hypothetical.</strong> Neither assigned question supplies durations or dependencies. A is setup; B and C are separate base packages; D is connecting assembly; E is equipment receipt; F is pre-installation preparation; G is installation; H is commissioning. Each duration includes the readiness assumed for its successor and is not a prescribed curing or inspection period.</p>" +
                        "<p>Use unlimited resources, one working-day calendar, time zero, FS relationships and zero lag. d is duration; ES/EF are early start/finish; LS/LF are late start/finish; TF/FF are total/free float. All numerical entries are <strong>working days</strong>. The backward pass uses the calculated finish, 13, rather than an earlier imposed deadline.</p>" +
                        "<p><strong>Dependencies and forward pass:</strong></p>" +
                        "<table><thead><tr><th scope='col'>ID</th><th scope='col'>d</th><th scope='col'>Pred.</th><th scope='col'>ES</th><th scope='col'>EF</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>2</td><td>None</td><td>0</td><td>2</td></tr>" +
                        "<tr><th scope='row'>B</th><td>4</td><td>A</td><td>2</td><td>6</td></tr>" +
                        "<tr><th scope='row'>C</th><td>4</td><td>A</td><td>2</td><td>6</td></tr>" +
                        "<tr><th scope='row'>D</th><td>3</td><td>B, C</td><td>6</td><td>9</td></tr>" +
                        "<tr><th scope='row'>E</th><td>1</td><td>A</td><td>2</td><td>3</td></tr>" +
                        "<tr><th scope='row'>F</th><td>1</td><td>E</td><td>3</td><td>4</td></tr>" +
                        "<tr><th scope='row'>G</th><td>3</td><td>D, F</td><td>9</td><td>12</td></tr>" +
                        "<tr><th scope='row'>H</th><td>1</td><td>G</td><td>12</td><td>13</td></tr></tbody></table>" +
                        "<p><strong>Backward pass and float:</strong></p>" +
                        "<table><thead><tr><th scope='col'>ID</th><th scope='col'>LS</th><th scope='col'>LF</th><th scope='col'>TF</th><th scope='col'>FF</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>0</td><td>2</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>B</th><td>2</td><td>6</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>C</th><td>2</td><td>6</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>D</th><td>6</td><td>9</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>E</th><td>7</td><td>8</td><td>5</td><td>0</td></tr>" +
                        "<tr><th scope='row'>F</th><td>8</td><td>9</td><td>5</td><td>5</td></tr>" +
                        "<tr><th scope='row'>G</th><td>9</td><td>12</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>H</th><td>12</td><td>13</td><td>0</td><td>0</td></tr></tbody></table>" +
                        "<p>The two critical paths are <strong>A–B–D–G–H</strong> and <strong>A–C–D–G–H</strong>, each 2 + 4 + 3 + 3 + 1 = <strong>13 days</strong>. The remaining path, A–E–F–G–H, is 8 days. Every successor satisfies its predecessor finish, and every table row satisfies EF − ES = LF − LS = d.</p>",
                    sources: []
                },
                {
                    id: "schedule-critical-path-float",
                    title: "Float belongs to network relationships, not independent time allowances",
                    html: "<p><strong>Syllabus extension:</strong> the bank provides no float dataset; this interpretation uses the hypothetical eight-activity network. For the adopted FS model, <strong>TF = LS − ES = LF − EF</strong>. Total float measures how far an activity can move from its early timing without violating the chosen project finish, provided the related network is rescheduled consistently.</p>" +
                        "<p><strong>FF = min(ES of immediate successors) − EF</strong>. Free float measures delay that does not move any immediate successor's early start. Treat the project finish as a zero-duration successor for a terminal activity. These simple formulas need adjustment when other relationship types, lags or calendars are introduced.</p>" +
                        "<p>E has <strong>TF = 5 but FF = 0</strong>: any delay to E moves F, yet E and F can move together within the shorter branch's allowance. F has <strong>TF = FF = 5</strong>, because G already waits for D until day 9. Delaying E and then independently spending another five days on F would double count the same path allowance.</p>" +
                        "<p>The two 13-day paths both require attention. Delaying B alone delays completion; shortening B alone does not shorten completion while C remains controlling. Zero float identifies criticality under these assumptions, not a universal measure of safety or commercial importance. A noncritical activity may still carry high safety, quality, cash-flow or supply risk, and its float can disappear as the project changes.</p>",
                    sources: []
                },
                {
                    id: "schedule-negative-float",
                    title: "An earlier deadline produces negative float, not a faster plan",
                    html: "<p><strong>Syllabus extension; hypothetical deadline test:</strong> the bank contains no imposed-completion problem. Keep the eight-activity durations and dependencies unchanged, but require completion by day <strong>11</strong>. The forward pass still finishes at 13. Only the backward-pass boundary changes; entering a preferred date does not reduce physical work.</p>" +
                        "<table><thead><tr><th scope='col'>Activity group</th><th scope='col'>Deadline-based result</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A, B, C, D, G, H</th><td>Total float becomes −2 days.</td></tr>" +
                        "<tr><th scope='row'>E and F</th><td>Total float becomes +3 days.</td></tr>" +
                        "<tr><th scope='row'>H specifically</th><td>LF = 11; LS = 10; ES remains 12.</td></tr>" +
                        "<tr><th scope='row'>A specifically</th><td>LS = −2 despite the permitted start at zero.</td></tr></tbody></table>" +
                        "<p>The negative latest start exposes an infeasible combination of start boundary, logic, durations and deadline. It is not permission to begin before authorisation. Removing the deadline restores the original float values but does not satisfy the original commitment.</p>" +
                        "<p>Investigate feasible acceleration, authorised scope changes, additional resources, corrected logic or a formally revised deadline. Do not hide the deficit with negative lags or retrospective baseline edits. Constraint-generated negative float also means that identifying critical work solely as TF exactly equal to zero can fail. Negative float is a planning warning; it does not by itself establish responsibility for delay, extension-of-time entitlement or liquidated damages.</p>",
                    sources: []
                },
                {
                    id: "schedule-pert-estimates",
                    title: "PERT converts three elicited estimates into approximate moments",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question supplies PERT estimates. Let a be optimistic duration, m most likely duration and b pessimistic duration, with a ≤ m ≤ b on the same work and calendar basis. Classical PERT uses <strong>t<sub>e</sub> = (a + 4m + b)/6</strong> and <strong>σ<sup>2</sup> = [(b − a)/6]<sup>2</sup></strong>. Expected duration has units of days; variance has units of days squared.</p>" +
                        "<p>These are modelling approximations associated with the traditional PERT approach, not identities for every three-point distribution. The most likely value is a mode, not necessarily the mean. Elicit what the optimistic and pessimistic cases include; unrecorded weather assumptions or omitted rework make an apparently precise estimate unreliable.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical activity</th><th scope='col'>a, m, b: days</th><th scope='col'>t<sub>e</sub>: days</th><th scope='col'>Variance: days²</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>X</th><td>2, 4, 6</td><td>4</td><td>4/9</td></tr>" +
                        "<tr><th scope='row'>Y</th><td>3, 5, 9</td><td>16/3 = 5.3333</td><td>1</td></tr>" +
                        "<tr><th scope='row'>Z</th><td>1, 2, 3</td><td>2</td><td>1/9</td></tr></tbody></table>" +
                        "<p>This is a separate hypothetical serial X–Y–Z project, not replacement durations for A–H. Y illustrates asymmetry: its expected duration exceeds its most likely duration. Dividing the range by six does not prove that a and b enclose a fixed confidence percentage, or that the real duration is normally distributed.</p>",
                    sources: []
                },
                {
                    id: "schedule-pert-deadline",
                    title: "A PERT deadline probability is conditional on the model",
                    html: "<p><strong>Syllabus extension; all inputs remain hypothetical.</strong> The bank supplies neither a probabilistic network nor observed completion data. Assume X–Y–Z is the sole serial path and its three durations are independent. Path mean is the sum of means: <strong>μ = 4 + 16/3 + 2 = 34/3 = 11.3333 days</strong>. Path variance is <strong>4/9 + 1 + 1/9 = 14/9 days²</strong>, giving <strong>σ = √14/3 = 1.247219 days</strong>.</p>" +
                        "<p>If a normal approximation to that path duration is additionally adopted, the chance of finishing by deadline D is approximated by <strong>P(T ≤ D) ≈ Φ[(D − μ)/σ]</strong>. For D = 13 days, <strong>z = 5/√14 = 1.336306</strong>, so <strong>Φ(z) ≈ 0.909275, or 90.93%</strong>. This is not a measured project reliability, a fixed 95% rule or a confidence interval for an estimated population mean.</p>" +
                        "<p>Three activities provide limited justification for a normal approximation. Dependence changes the variance to <strong>Σσ<sub>i</sub><sup>2</sup> + 2ΣCov(T<sub>i</sub>, T<sub>j</sub>)</strong> over distinct pairs. Shared weather or suppliers can create positive covariance.</p>" +
                        "<p>In a branching network, project duration is the maximum of competing path durations. The critical path can switch between outcomes; the longest path of mean durations is not generally the mean project duration. A properly specified simulation can model those effects, but it cannot repair unjustified input distributions or missing dependencies.</p>",
                    sources: []
                },
                {
                    id: "schedule-resource-methods",
                    title: "Levelling may move completion; smoothing preserves the target",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank contains no resource schedule. A precedence-feasible CPM programme may still allocate the same crew or crane to simultaneous tasks. A renewable resource is limited by availability in each period; labour effort summed over the whole project does not reveal these time-specific conflicts.</p>" +
                        "<table><thead><tr><th scope='col'>Method</th><th scope='col'>Constraint and consequence</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Resource levelling</th><td>Resolve resource limits by adjusting timing or sequence. It may extend completion and alter the critical path, although sufficient float can sometimes avoid extension.</td></tr>" +
                        "<tr><th scope='row'>Resource smoothing</th><td>Adjust activity timing within available float while retaining the specified critical completion target and required logic. It may not remove every overload.</td></tr></tbody></table>" +
                        "<p>These definitions must not be reversed. Smoothing is not permission to push a critical deadline later. Levelling does not necessarily change the finish, but it is allowed to reveal that the finish cannot be maintained with the available resource.</p>" +
                        "<p>Prepare a period-by-period demand table, identify skill and equipment types, and distinguish technological dependencies from resource-imposed sequencing. Declare whether activities can be interrupted and whether a crew can be split. A priority rule such as least float can produce a useful schedule without proving the global optimum. Recheck predecessor logic, all resource capacities and completion after every adjustment rather than inspecting only the tallest demand peak.</p>",
                    sources: []
                },
                {
                    id: "schedule-crew-cases",
                    title: "Two crew-capacity cases for the same eight activities",
                    html: "<p><strong>Syllabus extension; hypothetical resource data, absent from the bank.</strong> Reuse A–H. B, C, E and F each need two workers from one interchangeable support-crew pool throughout their non-preemptive execution. A, D, G and H have separate adequately staffed teams: zero below means no demand on this pool, not no workers on site. Intervals include the start and exclude the finish.</p>" +
                        "<table><thead><tr><th scope='col'>Activity</th><th scope='col'>Pool workers</th><th scope='col'>Early plan</th><th scope='col'>Capacity 4: smooth</th><th scope='col'>Capacity 2: level</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>0</td><td>0–2</td><td>0–2</td><td>0–2</td></tr>" +
                        "<tr><th scope='row'>B</th><td>2</td><td>2–6</td><td>2–6</td><td>2–6</td></tr>" +
                        "<tr><th scope='row'>C</th><td>2</td><td>2–6</td><td>2–6</td><td>6–10</td></tr>" +
                        "<tr><th scope='row'>D</th><td>0</td><td>6–9</td><td>6–9</td><td>10–13</td></tr>" +
                        "<tr><th scope='row'>E</th><td>2</td><td>2–3</td><td>6–7</td><td>10–11</td></tr>" +
                        "<tr><th scope='row'>F</th><td>2</td><td>3–4</td><td>7–8</td><td>11–12</td></tr>" +
                        "<tr><th scope='row'>G</th><td>0</td><td>9–12</td><td>9–12</td><td>13–16</td></tr>" +
                        "<tr><th scope='row'>H</th><td>0</td><td>12–13</td><td>12–13</td><td>16–17</td></tr></tbody></table>" +
                        "<p>Early demand peaks at <strong>6 workers during days 2–4</strong>. Moving E and F four days within their five-day total float reduces the peak to <strong>4</strong> and keeps completion at <strong>13</strong>. With capacity 2, B and C cannot overlap: their eight combined working days after A force D to start no earlier than 10. The feasible levelled plan finishes at <strong>17</strong>, attaining that lower bound.</p>" +
                        "<p>All three plans consume <strong>20 worker-days</strong> from this pool. Identical total effort does not imply identical resource feasibility or completion. The resource sequence between B and C is not a newly discovered physical construction dependency.</p>",
                    sources: []
                },
                {
                    id: "schedule-crash-slopes",
                    title: "Crashing uses marginal cost for the next feasible reduction",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question gives crash times or costs. Crashing buys a feasible duration reduction through measures such as additional resources or a different approved method. It differs from fast-tracking, which changes overlap or logic and can introduce rework and interface risk. Neither method permits omitted testing, unsafe work or an unjustified reduction in required curing.</p>" +
                        "<p>For a linear feasible interval, the direct cost slope is <strong>s = (C<sub>short</sub> − C<sub>long</sub>)/(d<sub>long</sub> − d<sub>short</sub>)</strong>, in NRs per working day saved. A whole-range average is not necessarily the marginal cost of the next day.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical A–H option</th><th scope='col'>Duration change</th><th scope='col'>Direct cost change, NRs</th><th scope='col'>Increment/day, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>2 to 1</td><td>20,000 to 24,000</td><td>4,000</td></tr>" +
                        "<tr><th scope='row'>B</th><td>4 to 3</td><td>40,000 to 43,000</td><td>3,000</td></tr>" +
                        "<tr><th scope='row'>C</th><td>4 to 3</td><td>40,000 to 44,000</td><td>4,000</td></tr>" +
                        "<tr><th scope='row'>G, first day</th><td>3 to 2</td><td>30,000 to 35,000</td><td>5,000</td></tr>" +
                        "<tr><th scope='row'>G, second day</th><td>2 to 1</td><td>35,000 to 43,000</td><td>8,000</td></tr></tbody></table>" +
                        "<p>D, E, F and H are fixed in this hypothetical exercise; no other reductions are permitted. G's two-day average slope is 6,500, but its increments are 5,000 then 8,000. Use the actual steps. These crash cases restore the unlimited-resource assumption; they do not silently combine with the separate two-worker constraint.</p>",
                    sources: []
                },
                {
                    id: "schedule-crash-paths",
                    title: "Shorten every controlling path before claiming a project saving",
                    html: "<p><strong>Syllabus extension; hypothetical continuation of the stated crash-cost table.</strong> The bank supplies none of these costs. A–B–D–G–H and A–C–D–G–H are both initially critical. Although B has the cheapest individual slope, crashing B alone leaves the C path at 13 days. A or G shortens both paths; otherwise B and C must be reduced together.</p>" +
                        "<table><thead><tr><th scope='col'>Finish, days</th><th scope='col'>Cumulative changes from normal</th><th scope='col'>Added direct cost, NRs</th><th scope='col'>Net cost change with stated overhead, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>13</th><td>None</td><td>0</td><td>0</td></tr>" +
                        "<tr><th scope='row'>12</th><td>A to 1 day</td><td>4,000</td><td>−2,000</td></tr>" +
                        "<tr><th scope='row'>11</th><td>A to 1; G to 2</td><td>9,000</td><td>−3,000</td></tr>" +
                        "<tr><th scope='row'>10</th><td>A to 1; G to 2; B and C to 3</td><td>16,000</td><td>−2,000</td></tr>" +
                        "<tr><th scope='row'>9</th><td>A to 1; G to 1; B and C to 3</td><td>24,000</td><td>0</td></tr></tbody></table>" +
                        "<p>The next shared-path reductions cost 4,000, then 5,000, then 3,000 + 4,000, then 8,000. Recalculation and enumeration of the permitted choices confirm the minimum incremental direct costs in the table. Both named critical paths remain controlling; the equipment branch does not overtake them.</p>" +
                        "<p>For the final column alone, assume <strong>hypothetical avoidable overhead of NRs6,000 per day saved</strong>. Net change equals added direct cost minus 6,000(13 − finish). The economic minimum among these choices is 11 days, saving NRs3,000 overall; a compulsory 10-day target instead requires NRs16,000 extra direct cost. Contract damages, quality consequences and resource shortages are not included in this simplified comparison.</p>",
                    sources: []
                },
                {
                    id: "schedule-baseline-update",
                    title: "Preserve the baseline while updating the current forecast",
                    html: "<p><strong>Syllabus extension:</strong> the bank contains no baseline, progress report or status-date dataset. A schedule baseline is the authorised time-phased plan used for comparison. It should be consistent with approved scope, calendars, logic, resources, procurement assumptions and budgets. A forecast is the current prediction; an updated forecast does not automatically amend the contractual completion date.</p>" +
                        "<ol><li>Set a status date and collect actual starts, actual finishes, accepted quantities, remaining work and current constraints.</li><li>Check dates against inspection records, supplier information and site diaries. Explain out-of-sequence work rather than deleting its original dependencies silently.</li><li>Re-estimate remaining durations and resource availability. Schedule unfinished work from a feasible future boundary; do not leave it notionally completed in the past.</li><li>Recalculate critical and near-critical paths, float consumption, milestones and forecast costs.</li><li>Record corrective options, the responsible decision-maker, authorised action and the next review date.</li></ol>" +
                        "<p>Physical percent complete, duration percent complete and money spent are not interchangeable. Procurement may consume substantial cost before installation begins, while waiting for an approval consumes time without physical output.</p>" +
                        "<p>Retain the original baseline and a controlled revision history. A justified scope change may need an approved revised baseline; ordinary poor performance should remain visible rather than disappearing through retrospective replanning. Report both the present forecast and the relevant approved comparison.</p>",
                    sources: []
                },
                {
                    id: "schedule-earned-value",
                    title: "Earned value compares accepted work, its budget and its actual cost",
                    html: "<p><strong>Syllabus extension; hypothetical cost-control dataset:</strong> the bank supplies no earned-value measurements. Use the same authorised scope, valuation rules, currency and status date for planned value PV, earned value EV and actual cost AC. EV is the budgeted value of work actually accomplished under defined measurement rules, not the amount billed or cash received.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning</th><th scope='col'>Hypothetical NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>BAC</th><td>Budget at completion for the measured scope</td><td>1,000,000</td></tr>" +
                        "<tr><th scope='row'>PV</th><td>Budgeted work planned by the status date</td><td>400,000</td></tr>" +
                        "<tr><th scope='row'>EV</th><td>Budgeted value earned by that date</td><td>300,000</td></tr>" +
                        "<tr><th scope='row'>AC</th><td>Actual cost incurred for the corresponding work</td><td>375,000</td></tr></tbody></table>" +
                        "<p><strong>CV = EV − AC = −75,000</strong>; <strong>SV = EV − PV = −100,000</strong>. Cost performance index <strong>CPI = EV/AC = 0.80</strong>; schedule performance index <strong>SPI = EV/PV = 0.75</strong>. These ratios require positive denominators. The project has earned less budgeted work than planned and incurred more cost than the budgeted value of that work.</p>" +
                        "<p>SV is in currency, not days. SPI does not identify which critical activity is late. Include appropriate cost accruals so unpaid invoices do not create false efficiency, and require physical evidence before earning value. Payment progress or a favourable aggregate index cannot substitute for inspection acceptance or network-based completion forecasting.</p>",
                    sources: []
                },
                {
                    id: "schedule-eac-assumptions",
                    title: "Select an EAC forecast by its remaining-work assumption",
                    html: "<p><strong>Syllabus extension; reuse the hypothetical BAC, EV and AC case.</strong> The bank supplies no forecast basis. Estimate at completion <strong>EAC = AC + ETC</strong>, where ETC estimates the remaining cost. Different assumptions legitimately produce different answers; no index formula automatically becomes the approved budget.</p>" +
                        "<table><thead><tr><th scope='col'>Remaining-work assumption</th><th scope='col'>EAC formula and result, NRs</th><th scope='col'>ETC, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Current cost efficiency continues</th><td>BAC/CPI = 1,250,000</td><td>875,000</td></tr>" +
                        "<tr><th scope='row'>Past variance is exceptional; remaining work meets its original budget</th><td>AC + BAC − EV = 1,075,000</td><td>700,000</td></tr>" +
                        "<tr><th scope='row'>Chosen heuristic assumes cost and schedule performance jointly affect remaining cost</th><td>AC + (BAC − EV)/(CPI × SPI) = 1,541,666.67</td><td>1,166,666.67</td></tr></tbody></table>" +
                        "<p><strong>VAC = BAC − EAC</strong> is respectively −250,000, −75,000 and −541,666.67 NRs. The combined-index forecast is conditional on the stated cost-impact assumption; SPI below one does not establish that all remaining costs must be divided by SPI.</p>" +
                        "<p>To finish within the original BAC, the required remaining efficiency is <strong>TCPI = (BAC − EV)/(BAC − AC) = 700,000/625,000 = 1.12</strong>. This is a required performance level, not evidence it is achievable. Compare it with the current CPI of 0.80 and a bottom-up estimate.</p>" +
                        "<p>Re-estimate remaining quantities, rates, mobilisation, claims and risks where conditions have changed. For a project completing on or after its baseline planned finish, EV and PV both equal BAC at completion, so SPI equals one even when completion was late. Early completion can occur while baseline PV is still below BAC. Retain milestone and critical-path analysis for time control.</p>",
                    sources: []
                },
                {
                    id: "schedule-monitor-control-evaluate",
                    title: "Monitoring, control and evaluation answer different questions",
                    html: "<p><strong>Syllabus extension:</strong> the assigned questions do not provide monitoring or evaluation records. These functions work together but should not be treated as synonyms. Monitoring establishes what is happening, control decides and implements a response, and evaluation judges performance and usefulness against explicit criteria.</p>" +
                        "<table><thead><tr><th scope='col'>Function</th><th scope='col'>Question</th><th scope='col'>Typical evidence or output</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Monitoring</th><td>What has happened compared with the plan?</td><td>Verified quantities, milestone status, cost trends, defects, incidents and constraint logs.</td></tr>" +
                        "<tr><th scope='row'>Control</th><td>What action should be taken and by whom?</td><td>Authorised resequencing, resource action, corrective work or a formally assessed change.</td></tr>" +
                        "<tr><th scope='row'>Evaluation</th><td>Was the intervention relevant, effective, efficient and sustainable?</td><td>Reasoned assessment of delivery, outcomes, benefits, unintended effects and lessons.</td></tr></tbody></table>" +
                        "<p>An observed late delivery is monitoring information. Checking the affected path, selecting an alternative and authorising its cost is control. Assessing whether the resulting facility actually solves the service problem is evaluation.</p>" +
                        "<p>Evaluation can occur before commitment, during implementation and after completion; it is not restricted to the last day. Control likewise needs feedback after action to determine whether it worked. Define indicators, measurement responsibility, reporting frequency and escalation thresholds in advance. A dashboard without trustworthy measurements or decision authority may display problems without controlling them.</p>",
                    sources: []
                },
                {
                    id: "schedule-benefits-revisions",
                    title: "Evaluate benefits without rewriting the history of delivery",
                    html: "<p><strong>Syllabus extension:</strong> the bank contains no benefits-realisation dataset. In a hypothetical water-service project, completing a pump station is an output; providing reliable service is an outcome. Better health or reduced household collection time may be intended benefits, but they require evidence beyond a completion certificate.</p>" +
                        "<table><thead><tr><th scope='col'>Evaluation level</th><th scope='col'>Evidence to seek</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Delivery</th><td>Accepted scope, final cost, milestone achievement and outstanding defects.</td></tr>" +
                        "<tr><th scope='row'>Service outcome</th><td>Operating reliability, water quality, access and whether intended users receive the service.</td></tr>" +
                        "<tr><th scope='row'>Continuing benefit</th><td>Maintenance funding, operator capability, affordability and sustained user outcomes.</td></tr></tbody></table>" +
                        "<p>Assign a benefits owner and specify how and when evidence will be gathered after handover. Compare results with the original need and relevant baseline conditions. Seasonal change, other investments and differences in the population served can make a simple before-and-after comparison misleading; do not claim causation merely from an improved indicator.</p>" +
                        "<p>New demand information may justify revising a benefits forecast or future operating plan. Record the reason, evidence and approval, while retaining the earlier forecast for learning. The same discipline applies to schedule and cost revisions: separate authorised scope changes from execution variance. Lessons should lead to changed investigation, procurement or control practice, not just an archived statement that planning should improve.</p>",
                    sources: []
                },
                {
                    id: "schedule-digital-as-built",
                    title: "Emerging tools need traceable field evidence and as-built controls",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question supplies a digital model, sensor record or as-built workflow. Model-linked scheduling can connect activities to components; a time-linked model is commonly called 4D BIM, while cost linkage is commonly called 5D. GIS, mobile inspection records, remote imagery and dashboards can improve coordination, but their labels do not certify accuracy or authorise construction.</p>" +
                        "<p>A useful workflow links each component and activity to the current approved drawing revision, dated field evidence, measured quantity and responsible verifier. Check coordinate systems, survey control, timestamps, units and coverage before comparing remote measurements with design. A visually complete model can omit concealed work, commissioning or unresolved interfaces.</p>" +
                        "<table><thead><tr><th scope='col'>Record state</th><th scope='col'>Control required</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Planned or simulated</th><td>State its assumptions and the approved baseline it represents.</td></tr>" +
                        "<tr><th scope='row'>Observed construction</th><td>Verify the observation, location, date and inspection status.</td></tr>" +
                        "<tr><th scope='row'>Accepted as-built</th><td>Reconcile approved changes, measured final conditions and handover requirements.</td></tr></tbody></table>" +
                        "<p>Keep revision history, access permissions and recoverable records. Automated progress classification or AI forecasting should flag uncertainty for review rather than silently earning value or changing logic. An as-built record describes verified construction; it does not retrospectively approve an unauthorised deviation. Retain operating manuals, test results and asset identifiers so the information remains useful after the project team leaves.</p>",
                    sources: []
                }
            ],
            gaps: [
                "Only two source questions are assigned to AALL1003: preliminary design and forward/backward-pass selection. Their exact source/model/question triples are retained. The sparse bank is not evidence that other official scheduling topics are unexamined.",
                "schedule-classification-life-cycle, schedule-scope-wbs, schedule-duration-calendars, schedule-bar-chart-logic and schedule-aon-conventions are source-free syllabus extensions. No complete project charter, WBS, calendar, production record or network is supplied by the bank.",
                "schedule-eight-activity-cpm, schedule-critical-path-float and schedule-negative-float are source-free syllabus extensions using an explicitly hypothetical A–H network. All relationships are FS with zero lag, no leads and a common working-day calendar; the unconstrained resource assumption is changed only in the identified crew cases.",
                "schedule-pert-estimates and schedule-pert-deadline are source-free syllabus extensions. Three-point durations, independence and the normal approximation are hypothetical modelling assumptions, not measured distributions, guaranteed confidence levels or Nepal-specific scheduling requirements.",
                "schedule-resource-methods and schedule-crew-cases are source-free syllabus extensions. The two-worker activity demands and four/two-worker capacities are constructed inputs, not construction productivity norms or evidence that additional labour always shortens work.",
                "schedule-crash-slopes and schedule-crash-paths are source-free syllabus extensions. Feasible crash limits, incremental direct costs and avoidable overhead are hypothetical; the small enumerated optimum does not establish a real acceleration price or override safe methods and contractual approval.",
                "schedule-baseline-update, schedule-earned-value and schedule-eac-assumptions are source-free syllabus extensions. No real status date, actual-cost ledger, earned-value measurement rule or forecast authorisation is provided. All EAC examples state different assumptions rather than promise a unique final cost.",
                "schedule-monitor-control-evaluate, schedule-benefits-revisions and schedule-digital-as-built are source-free syllabus extensions. Benefits, digital records and control workflows require project-specific evidence. The GAO reference is identified US management guidance; its publication summary was checked, not a Nepal legal-adoption statement or an audit of every detailed method."
            ],
            cautions: [
                {
                    html: "<p><strong>Stored A is wrong in TRAN808-00054, Model 6 Q89.</strong> At a forward merge take the maximum predecessor finish; in the backward pass take the minimum successor latest start. The technically correct offered option is <strong>B, Backward pass</strong>. The original explanation agrees with that reasoning. The source key is preserved, not silently repaired or rationalised as a different exam convention.</p>",
                    sources: [{ id: "TRAN808-00054", set: 6, question: 89 }]
                },
                {
                    html: "<p><strong>Preliminary design is the appropriate early-phase term in TRAN808-00319.</strong> It establishes an initial coordinated basis, not final construction approval. Phase labels and overlap depend on the delivery arrangement; the question does not establish that all design ends before construction or that later design changes can bypass review.</p>",
                    sources: [{ id: "TRAN808-00319", set: 30, question: 80 }]
                },
                {
                    html: "<p><strong>Model boundary, not extra bank evidence:</strong> the A–H table is hypothetical, acyclic, time-zero, FS-only and zero-lag. Float formulas are stated for that model. An earlier finish constraint can create negative float without changing the forward-pass duration; negative float alone does not prove a contractual delay liability.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Do not reverse resource methods.</strong> Levelling respects resource constraints and may extend completion; smoothing uses float while preserving the specified critical completion target. The constructed examples give 13 days at a smoothed four-worker capacity and 17 days at a levelled two-worker capacity. Neither result is a general construction staffing rule.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>PERT does not supply a fixed confidence level.</strong> The 90.93% deadline value assumes the hypothetical X–Y–Z serial path, independent durations and a normal approximation. Variances cannot simply be added when durations are correlated, and competing paths can make a single-path estimate optimistic.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Earned-value schedule variance is monetary, not a number of days.</strong> CPI and SPI are ratios on a consistent measurement basis, and EAC depends on the assumed future performance. The three forecasts are conditional scenarios, not three simultaneously correct predictions of one observed final cost. These examples do not change the project's real baseline or authorise spending.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "US GAO, GAO Schedule Assessment Guide: Best Practices for Project Schedules, GAO-16-89G, 22 December 2015 — official publication summary; conceptual guidance, not Nepal law",
                    url: "https://www.gao.gov/products/gao-16-89g"
                }
            ]
        }
    });
}());