(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        AALL1004: {
            code: "AALL1004",
            questionCount: 10,
            blocks: [
                {
                    id: "management-information-system",
                    title: "An information system needs an accountable source of truth",
                    html: "<p><strong>Syllabus extension:</strong> the assigned bank contains no management-information-system dataset. A project MIS links scope, programme, cost, quality, procurement, risk and decisions so that managers can act on consistent information. It includes people, definitions and controls as well as software; collecting more spreadsheets does not automatically improve management.</p>" +
                        "<p>A <strong>source of truth</strong> means an identified authoritative record for each information type, with ownership and reconciliation rules. It need not mean one giant file. A drawing register can govern revisions while the cost ledger governs incurred cost, provided both use compatible work-package and contract identifiers.</p>" +
                        "<table><thead><tr><th scope='col'>Information</th><th scope='col'>Control before reporting</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Physical progress</th><td>Identify measurement date, quantity basis, location and acceptance evidence.</td></tr>" +
                        "<tr><th scope='row'>Cost and commitments</th><td>Distinguish approved budget, orders, incurred cost, invoices and cash payments.</td></tr>" +
                        "<tr><th scope='row'>Decisions and changes</th><td>Record the authorised decision, affected documents, owner and implementation status.</td></tr></tbody></table>" +
                        "<p>Give reports a common status date and disclose missing or disputed data. A purchase order is not installed work; an invoice is not proof of technical acceptance. Prevent double counting between subcontractor reports and the main contractor's totals. Access controls, backups, audit trails and a defined correction process preserve reliability. A dashboard should show where action is needed and who can authorise it, not merely aggregate attractive indicators.</p>",
                    sources: []
                },
                {
                    id: "management-document-change-coordination",
                    title: "Control revisions and coordinate every affected discipline",
                    html: "<p><strong>Syllabus extension:</strong> the bank provides no drawing register, change log or document-transmittal case. Identify documents by stable number, revision, issue date, status, author, checker and approver. Draft, issued-for-review, approved-for-construction and as-built states have different purposes. The most recently edited file is not necessarily the latest authorised instruction.</p>" +
                        "<p><strong>Hypothetical example:</strong> a revised equipment layout changes foundation bolt positions. The change must reach structural drawings, reinforcement details, supplier information, setting-out records, quantities and the installation programme. Updating the equipment model alone leaves conflicting construction information in circulation.</p>" +
                        "<ol><li>Log the proposed change and the problem it addresses, retaining the previous revision.</li><li>Review technical interfaces, safety, approvals, quantities, cost, time and procurement consequences.</li><li>Obtain the required authority before changing the contractual or construction basis.</li><li>Issue a controlled transmittal, withdraw superseded site copies and confirm receipt by affected teams.</li><li>Verify implementation and reconcile the final condition into the accepted as-built record.</li></ol>" +
                        "<p>A request for information, RFI, seeks clarification; its answer is not automatically a priced variation or approval of a design departure. Record the contractual status separately. Maintain an open-issues register so unresolved interfaces remain visible, and link the change identifier to instructions, measurements and payment decisions. An audit trail should explain who knew what and when, without rewriting earlier records.</p>",
                    sources: []
                },
                {
                    id: "management-risk-register",
                    title: "Risk analysis starts early and continues through the project",
                    html: "<p>The bank associates detailed risk analysis with <strong>planning</strong>, when decisions on scope, design, cost and programme can still be changed relatively efficiently. This is a useful emphasis, not a rule that risk analysis happens only in planning. Feasibility needs screening, procurement needs allocation, execution needs reassessment, and operation introduces its own exposures.</p>" +
                        "<p>State a risk as <strong>cause, uncertain event and consequence</strong>. A weak description such as ground risk does not identify what could happen or which objective is exposed. An issue is an event or condition already requiring action; moving it to an issue log should not erase its history or its possible further consequences.</p>" +
                        "<table><thead><tr><th scope='col'>Register field</th><th scope='col'>Purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Risk statement and owner</th><td>Identify the uncertainty and the person accountable for its management.</td></tr>" +
                        "<tr><th scope='row'>Likelihood, impact and basis</th><td>Record the assessed exposure, assumptions and confidence in the evidence.</td></tr>" +
                        "<tr><th scope='row'>Response and residual risk</th><td>Describe action, cost, responsibility and remaining exposure after implementation.</td></tr>" +
                        "<tr><th scope='row'>Trigger and review date</th><td>Specify warning signs, escalation and when the assessment must be revisited.</td></tr></tbody></table>" +
                        "<p>This register workflow extends the bank's phase question; no actual register is supplied. Review it after new investigations, design changes, incidents, supplier problems or changing site conditions. Closing an action does not prove that its risk has vanished; verify whether the intended control actually works.</p>",
                    sources: [{ id: "WATE813-00077", set: 9, question: 96 }]
                },
                {
                    id: "management-qualitative-quantitative-risk",
                    title: "Ordinal risk ratings are not probabilities or monetary losses",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no calibrated risk matrix or probability database. Qualitative analysis describes and prioritises risks using defined likelihood and impact categories. Quantitative analysis instead uses numerical quantities with an explicit basis, such as an event probability, delay distribution or monetary consequence.</p>" +
                        "<p><strong>Hypothetical ordinal labels from 1 to 5</strong> establish a ranking, not equal numerical distances. An impact rating of 4 need not represent twice the loss of rating 2. Multiplying ordinal likelihood and impact labels may form a specified prioritisation index, but it does not calculate expected loss, a probability, variance or a scientifically calibrated risk magnitude.</p>" +
                        "<table><thead><tr><th scope='col'>Assessment</th><th scope='col'>Interpretation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Qualitative matrix</th><td>Supports agreed escalation categories using clearly anchored descriptions.</td></tr>" +
                        "<tr><th scope='row'>Quantitative event model</th><td>Combines a stated probability with a conditional consequence on a consistent basis.</td></tr>" +
                        "<tr><th scope='row'>Sensitivity analysis</th><td>Shows which uncertain assumptions most affect the decision or forecast.</td></tr></tbody></table>" +
                        "<p>Assess cost, time, safety, environment and service effects without pretending they share one natural unit. Severe safety consequences may require action irrespective of a low estimated frequency. Record evidence quality and disagreement, and revisit ratings when controls or exposure change. A low matrix score never waives a mandatory protection or approval requirement.</p>",
                    sources: []
                },
                {
                    id: "management-return-mean-variance",
                    title: "Expected return and variability answer different questions",
                    html: "<p>The bank identifies variability in return as <strong>risk</strong>. In a discrete return model, expected return is <strong>μ = Σp<sub>i</sub>r<sub>i</sub></strong>; variance is <strong>σ<sup>2</sup> = Σp<sub>i</sub>(r<sub>i</sub> − μ)<sup>2</sup></strong>. Probabilities must be nonnegative and sum to one. The mean describes the probability-weighted centre; variance describes dispersion around it, not the amount of profit expected.</p>" +
                        "<table><thead><tr><th scope='col'>Hypothetical scenario</th><th scope='col'>Probability</th><th scope='col'>Return</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Adverse</th><td>0.20</td><td>−10%</td></tr>" +
                        "<tr><th scope='row'>Central</th><td>0.50</td><td>10%</td></tr>" +
                        "<tr><th scope='row'>Favourable</th><td>0.30</td><td>30%</td></tr></tbody></table>" +
                        "<p><strong>These numbers are a teaching extension, not bank givens or observed investment returns.</strong> In fractional units, μ = 0.2(−0.10) + 0.5(0.10) + 0.3(0.30) = <strong>0.12</strong>. Variance is 0.2(−0.22)<sup>2</sup> + 0.5(−0.02)<sup>2</sup> + 0.3(0.18)<sup>2</sup> = <strong>0.0196</strong>; standard deviation is <strong>0.14, or 14 percentage points</strong>.</p>" +
                        "<p>A hypothetical certain 12% return has the same mean but zero variance in its assumed model. This does not imply any real investment offers a guaranteed return. Variance counts upside and downside dispersion; default, liquidity, extreme loss and correlation with other exposures may need separate analysis. Do not replace probabilities with ordinal risk scores or call the highest mean the lowest-risk option.</p>",
                    sources: [{ id: "WATE813-00073", set: 9, question: 92 }]
                },
                {
                    id: "management-decision-tree-emv",
                    title: "A decision tree compares expected consequences, not maximum risk",
                    html: "<p><strong>Syllabus extension; all costs and probabilities are hypothetical.</strong> The bank provides no decision-tree dataset. First distinguish a decision, which the manager chooses, from a chance event. For each chosen option, define mutually exclusive outcomes whose conditional probabilities sum to one. Compute the probability-weighted cost at each chance branch and work backwards to the decision.</p>" +
                        "<table><thead><tr><th scope='col'>Option</th><th scope='col'>No event branch</th><th scope='col'>Event branch</th><th scope='col'>Expected total cost, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>No added mitigation</th><td>Probability 0.70; cost 0</td><td>Probability 0.30; loss 400,000</td><td>120,000</td></tr>" +
                        "<tr><th scope='row'>Mitigation costing 30,000</th><td>Probability 0.90; total cost 30,000</td><td>Probability 0.10; total cost 280,000</td><td>55,000</td></tr></tbody></table>" +
                        "<p>The mitigated event loss is 250,000 in addition to the response cost. Thus its expected cost is <strong>30,000 + 0.10 × 250,000 = 55,000</strong>, a reduction of <strong>65,000</strong> from 120,000. Expected monetary value, EMV, is not the worst outcome: the mitigated adverse total is 280,000, not 55,000.</p>" +
                        "<p>Holding the mitigation model fixed, untreated probability <strong>55,000/400,000 = 13.75%</strong> gives equal expected costs. That sensitivity threshold changes if effectiveness or losses change. Minimise expected cost, or maximise expected net benefit under a consistently signed model; do not select maximum risk. Tail exposure, liquidity, legal duties and worker safety can rule out an option even when its monetary average looks attractive.</p>",
                    sources: []
                },
                {
                    id: "management-risk-responses",
                    title: "Mitigation reduces likelihood or impact; acceptance manages the residual",
                    html: "<p><strong>Mitigation</strong> introduces measures intended to reduce the likelihood of an identified event, the severity of its consequences, or both. This is the distinction tested by the two assigned questions. Investigation, method improvement, inspection and physical protection have different mechanisms; specify which cause or consequence a proposed action addresses.</p>" +
                        "<table><thead><tr><th scope='col'>Response</th><th scope='col'>What changes</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Avoidance</th><td>Change or abandon the activity producing a particular exposure; reassess any new exposures.</td></tr>" +
                        "<tr><th scope='row'>Mitigation</th><td>Reduce likelihood or consequence through effective controls.</td></tr>" +
                        "<tr><th scope='row'>Transfer or sharing</th><td>Allocate specified consequences to another party, subject to its capacity and the agreement.</td></tr>" +
                        "<tr><th scope='row'>Acceptance</th><td>Acknowledge the remaining exposure with appropriate authority, monitoring and contingency arrangements.</td></tr></tbody></table>" +
                        "<p>Reducing risk toward a tolerable threshold is a mitigation objective; deciding to live with the residual is acceptance. Neither proves that risk has become zero. An action may introduce secondary risks, and a response that exists only on paper may leave the initial exposure unchanged.</p>" +
                        "<p>Define an owner, implementation date, verification method and escalation trigger. Review residual risk after the measure is operating. Acceptance is not neglect, and contractual allocation does not remove the project manager's need to coordinate controls. No response strategy can be treated as complete elimination of every project risk, nor can an internal threshold override mandatory safety or environmental obligations.</p>",
                    sources: [
                        { id: "WATE813-00071", set: 9, question: 90 },
                        { id: "WATE813-00075", set: 9, question: 94 }
                    ]
                },
                {
                    id: "management-insurance-worker-protection",
                    title: "Insurance transfers defined financial consequences, not the physical hazard",
                    html: "<p>The bank correctly treats <strong>insurance as risk transfer</strong>. A policy may shift specified financial consequences to an insurer in exchange for a premium. It does not stop an excavation collapsing, prevent a lifting incident or make injured workers whole merely by existing. Physical prevention and competent site supervision remain necessary.</p>" +
                        "<table><thead><tr><th scope='col'>Coverage category</th><th scope='col'>Question to verify in the actual policy</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Contract works or equipment</th><td>Which property, causes of damage, locations and periods are covered?</td></tr>" +
                        "<tr><th scope='row'>Third-party liability</th><td>Which liabilities, persons and monetary limits are included or excluded?</td></tr>" +
                        "<tr><th scope='row'>Workers' protection</th><td>Are the relevant workers and obligations covered, including subcontracting arrangements?</td></tr></tbody></table>" +
                        "<p>This is a coverage checklist, not a verified statutory insurance schedule. Read deductibles, exclusions, limits, notification duties, evidence requirements, cancellation and expiry conditions. A certificate or premium receipt alone does not prove a particular loss is recoverable. Also assess insurer and counterparty capacity.</p>" +
                        "<p>Residual exposure includes deductibles, excluded losses, limits and disruption not compensated by the policy. Protect workers through hazard removal where feasible, engineered controls, safe methods, training, supervision and suitable protective equipment. Keep policy administration connected to the risk register, but never label insurance itself as elimination of a physical risk or a substitute for fulfilling applicable worker-protection duties.</p>",
                    sources: [{ id: "WATE813-00105", set: 12, question: 93 }]
                },
                {
                    id: "management-financing-models",
                    title: "Debt, equity, grants and PPPs allocate different obligations",
                    html: "<p><strong>Syllabus extension:</strong> none of the assigned questions provides a financing structure. Financing concerns how funds are raised and when they are available; funding concerns the ultimate source paying for the asset and its services. A financially attractive appraisal can still fail if construction cash is unavailable when commitments fall due.</p>" +
                        "<table><thead><tr><th scope='col'>Source or arrangement</th><th scope='col'>Core obligation and risk</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Debt</th><td>Contractual interest and principal payments, covenants and refinancing exposure.</td></tr>" +
                        "<tr><th scope='row'>Equity</th><td>Residual ownership returns and losses; required return is not a guaranteed payment.</td></tr>" +
                        "<tr><th scope='row'>Grant or public budget</th><td>Purpose restrictions, appropriation or disbursement conditions, eligibility and audit requirements.</td></tr>" +
                        "<tr><th scope='row'>Public-private partnership</th><td>A delivery and risk-allocation arrangement that may combine private finance with user charges or public payments.</td></tr></tbody></table>" +
                        "<p>Debt does not become project revenue, and equity is not free simply because no periodic interest invoice arrives. Grants can reduce repayment requirements but do not remove construction, operating or accountability obligations.</p>" +
                        "<p>For a PPP, identify who carries construction, availability, demand, operating, foreign-exchange and termination risks. Private borrowing may ultimately be repaid through tariffs or government commitments; it is not a costless public asset. Evaluate affordability, enforceable obligations, lifecycle maintenance and contingent public liabilities as well as the initial capital contribution. No universal debt/equity ratio or PPP approval threshold is assumed here.</p>",
                    sources: []
                },
                {
                    id: "management-cash-flow-liquidity",
                    title: "A positive final balance can conceal an interim funding gap",
                    html: "<p><strong>Syllabus extension; hypothetical cash-flow example:</strong> the bank gives no dated receipts or payments. Start with zero cash, no interest and no existing credit facility. Assume each period's listed receipts and payments are netted at its end. All table amounts are <strong>thousand NRs</strong>; they are cash movements, not earned value or accounting profit.</p>" +
                        "<table><thead><tr><th scope='col'>Period</th><th scope='col'>Receipts</th><th scope='col'>Payments</th><th scope='col'>Net cash</th><th scope='col'>Cumulative balance before finance</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>1</th><td>0</td><td>300</td><td>−300</td><td>−300</td></tr>" +
                        "<tr><th scope='row'>2</th><td>400</td><td>500</td><td>−100</td><td>−400</td></tr>" +
                        "<tr><th scope='row'>3</th><td>900</td><td>400</td><td>500</td><td>100</td></tr></tbody></table>" +
                        "<p>For each period, <strong>balance = previous balance + receipts − payments</strong>. The minimum cumulative balance is −400 thousand NRs, so the example needs at least <strong>NRs400,000 of additional funding</strong> at the period boundaries before finance costs. The final NRs100,000 surplus of listed cash transactions does not prevent the earlier shortfall.</p>" +
                        "<p>Separate when work is performed, when payment is certified and when cash arrives. Include supplier terms, payroll, retention, advance recovery, taxes and debt service on their actual timing basis. Payments occurring before receipts within a period can require a larger facility than this netted table shows. Stress-test delayed certification and collection, and distinguish a proposed credit line from one that is committed and drawable under its conditions.</p>",
                    sources: []
                },
                {
                    id: "management-cost-of-money-dscr",
                    title: "Calculate debt service coverage using the lender's cash-flow definition",
                    html: "<p><strong>Syllabus extension; every financial input is hypothetical.</strong> The bank supplies no loan terms or coverage test. Debt service coverage ratio is <strong>DSCR = cash flow available for debt service / scheduled debt service</strong> for the same period. The numerator, often called CFADS, is not simply revenue or accounting profit; its definition must follow the financing agreement.</p>" +
                        "<p>Assume annual cash collections of NRs3.0 million, cash operating costs of NRs1.2 million and NRs0.3 million of agreed tax and working-capital deductions, with no other CFADS adjustments. Then <strong>CFADS = 1.5 million</strong>. These deductions exclude debt interest and principal so that debt service is not subtracted twice.</p>" +
                        "<p>An opening loan balance of NRs2.5 million at a hypothetical 8% simple annual interest rate, with all principal repayment at year-end, incurs <strong>NRs200,000 interest</strong>. Add NRs800,000 scheduled principal: debt service is <strong>NRs1,000,000</strong>, DSCR is <strong>1.50</strong>, and closing principal is <strong>NRs1,700,000</strong>.</p>" +
                        "<p>If collections fall 20% to NRs2.4 million while the specified costs and deductions remain fixed, CFADS becomes <strong>NRs900,000</strong> and DSCR <strong>0.90</strong>. The period's available cash cannot cover scheduled debt service without another permitted source.</p>" +
                        "<p>A ratio of one is arithmetic coverage, not a universal acceptable covenant. Fees, compounding, repayment dates, reserve accounts and maintenance capital can change the calculation. Interest measures only part of financing cost; equity also has an opportunity cost. These are not current Nepal lending rates or an investment recommendation.</p>",
                    sources: []
                },
                {
                    id: "management-finance-bases-controls",
                    title: "Keep provisional sums, VAT and contingency on separate bases",
                    html: "<p><strong>Syllabus extension:</strong> no assigned question supplies a controlled project budget or reimbursement ledger. Percentage calculations require a named base; the same headline contract amount cannot be assumed for tax, bid evaluation, security, retention and damages.</p>" +
                        "<table><thead><tr><th scope='col'>Term</th><th scope='col'>Meaning and control</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>PS: provisional sum</th><td>A stated contract allowance for work or services not fully defined at bidding, administered through the applicable instruction and valuation provisions.</td></tr>" +
                        "<tr><th scope='row'>VAT: value added tax</th><td>A tax component determined by the applicable tax rules and transaction basis; it is not contractor profit or contingency.</td></tr>" +
                        "<tr><th scope='row'>Contingency</th><td>A budget allowance for identified uncertainty or permitted unforeseen requirements, released under the project's authority and eligibility controls.</td></tr></tbody></table>" +
                        "<p>PS and contingency can both relate to uncertainty but are not interchangeable accounts. A provisional allowance is not an automatic entitlement to spend its full value. Document whether a quoted total includes each component, avoid double counting and preserve the estimate revision used for each calculation.</p>" +
                        "<p>Maintain budget, commitments, certified work, incurred cost and cash as reconciled but distinct records. Require authority, eligible purpose, supporting evidence and the correct funding source before payment. Public or grant finance may restrict eligible expenditure and require audit; expenditure is not reimbursable merely because somebody actually incurred it. Do not assume a current tax rate or import one contract's percentage base into another calculation.</p>",
                    sources: []
                },
                {
                    id: "management-tender-law-process",
                    title: "Use Nepal's procurement framework without promising complete current consolidation",
                    html: "<p><strong>Syllabus extension:</strong> the bank does not provide a complete procurement-process case. Nepal's <strong>Public Procurement Act, 2063</strong>, and <strong>Public Procurement Rules, 2064</strong>, are the starting framework, read with the applicable amendments, funding conditions and issued bidding documents. The steps below explain management logic, not every legal deadline or approval threshold.</p>" +
                        "<ol><li>Define and approve the need, scope, technical requirements, estimate, budget and procurement packaging.</li><li>Select a legally available method and prepare consistent bidding documents and disclosed evaluation criteria.</li><li>Issue the invitation, manage clarifications and communicate authorised amendments fairly.</li><li>Receive and open bids under the stated procedure, preserving confidentiality where required.</li><li>Assess eligibility, qualification, responsiveness and price using the published methodology; record reasons.</li><li>Complete applicable notice and review procedures, award, obtain required security, sign and administer the contract.</li></ol>" +
                        "<p><strong>Publication limitation, checked 6 September 2026:</strong> PPMO has published the Public Procurement (Second Amendment) Ordinance, 2083, and the Public Procurement (Fourteenth Amendment) Rules, 2082. Publication was verified; the ordinance's continuing effect or replacement and a fully reconciled current Act–Rules consolidation were not audited.</p>" +
                        "<p>The identified September 2026 works <strong>Standard Bidding Document, SBD</strong>, is for <strong>National Competitive Bidding, NCB, single-stage/two-envelope procurement above NRs20 million</strong>. Its provisions are not automatically requirements for all construction, small works, other methods or every funding arrangement. Confirm the applicable issued documents and obtain competent procurement review for an actual decision.</p>",
                    sources: []
                },
                {
                    id: "management-tender-documents",
                    title: "Tender documents coordinate requirements, pricing and contract conditions",
                    html: "<p>A tender or bidding document is the package enabling bidders to understand the required work, prepare comparable offers and know how those offers will be assessed. The bank's phrase detailed <strong>depreciation</strong> of work items appears to be a wording defect for description or specification; asset depreciation is not the function being described.</p>" +
                        "<table><thead><tr><th scope='col'>Package component</th><th scope='col'>Question answered</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Instructions to Bidders (ITB), Bid Data Sheet (BDS) and forms</th><td>How, when and in what form must the bid be submitted?</td></tr>" +
                        "<tr><th scope='row'>Evaluation and qualification criteria</th><td>What disclosed requirements and comparison method will be applied?</td></tr>" +
                        "<tr><th scope='row'>Specifications, drawings and work requirements</th><td>What result, quality, interfaces and evidence are required?</td></tr>" +
                        "<tr><th scope='row'>BOQ or price schedule</th><td>What items, quantities, units and pricing structure form the offer?</td></tr>" +
                        "<tr><th scope='row'>General Conditions (GCC), Special Conditions (SCC) and contract forms</th><td>How will obligations, payment, changes, time and disputes be administered?</td></tr></tbody></table>" +
                        "<p>A rate analysis explains a unit rate; an abstract estimate summarises cost; neither alone replaces the tender package. Check that drawings, specifications, quantities and units agree, and issue controlled clarification when they conflict.</p>" +
                        "<p>The exact package depends on the delivery and pricing arrangement; not every procurement starts with a fully detailed BOQ. Also distinguish bidding documents from documents incorporated into the signed contract. The inspected PPMO template explicitly says its Instructions to Bidders are not part of the contract. Do not assume that every tender-stage statement automatically overrides the signed contractual order of precedence.</p>",
                    sources: [{ id: "BASI674-00416", set: 32, question: 10 }]
                },
                {
                    id: "management-procurement-evaluation",
                    title: "Method, qualification, responsiveness and price are separate decisions",
                    html: "<p><strong>Syllabus extension:</strong> the bank supplies no competing bids or complete evaluation record. The procurement method sets the route to market; it does not by itself determine the winner. Open competition, restricted procedures and direct procurement have different applicable conditions. Exceptional methods need their legal basis and approvals, not an invented small-value threshold.</p>" +
                        "<table><thead><tr><th scope='col'>Assessment</th><th scope='col'>Purpose</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Eligibility and qualification</th><td>Establish permitted participation and the bidder's required capacity, experience and resources.</td></tr>" +
                        "<tr><th scope='row'>Responsiveness</th><td>Determine whether the offer materially meets the issued requirements.</td></tr>" +
                        "<tr><th scope='row'>Price evaluation and selection</th><td>Apply only the disclosed corrections, adjustments, factors and selection rule.</td></tr></tbody></table>" +
                        "<p>A low quoted total cannot cure failed qualification or a material deviation. In a two-envelope procedure, technical and price stages must follow the specified separation; undisclosed preferences must not be introduced after bids arrive.</p>" +
                        "<p><strong>Identified-edition warning:</strong> the PPMO September 2026 NCB works SBD above NRs20 million, ITB 36.1, selects the substantially responsive bid price closest to the average, subject to its cost-estimate condition, rather than simply the lowest price. ITB 35.2 excludes <strong>VAT and PS</strong> from its comparison base, unlike the security bases that include PS.</p>" +
                        "<p>The document also retains lowest-price wording in some other passages. These notes do not reconcile every cross-reference or certify current consolidated law. Read the complete applicable issued criteria instead of combining clauses or turning either lowest price or closest-to-average into a universal procurement rule.</p>",
                    sources: []
                },
                {
                    id: "management-boq-rate-risk",
                    title: "Quantity uncertainty can reverse a BOQ cost comparison",
                    html: "<p><strong>Syllabus extension; a wholly hypothetical two-item BOQ, not bank data or an official procurement.</strong> For this sensitivity exercise only, compare measured quantities multiplied by fixed offered rates, excluding tax and all other items. This is not an example of the September 2026 SBD's average-bid award rule.</p>" +
                        "<table><thead><tr><th scope='col'>Item</th><th scope='col'>Estimated quantity</th><th scope='col'>A rate, NRs/m³</th><th scope='col'>B rate, NRs/m³</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Excavation</th><td>1,000 m³</td><td>300</td><td>200</td></tr>" +
                        "<tr><th scope='row'>Concrete</th><td>100 m³</td><td>8,000</td><td>9,500</td></tr></tbody></table>" +
                        "<p>On estimated quantities, A totals <strong>NRs1,100,000</strong> and B <strong>NRs1,150,000</strong>. If excavation becomes 2,500 m³ while concrete remains 100 m³, the same-rate totals become <strong>NRs1,550,000 for A</strong> and <strong>NRs1,450,000 for B</strong>. The initial cheaper total is not the cheaper outcome in that changed scenario.</p>" +
                        "<p>Equating 300Q + 800,000 to 200Q + 950,000 gives <strong>Q = 1,500 m³</strong>, at which both totals are NRs1,250,000. This identifies sensitivity to excavation quantity, not an authorised post-opening evaluation criterion.</p>" +
                        "<p>Investigate quantity confidence, rate balance and the cash-flow effects of heavily priced early items. A real contract may allow re-rating or other valuation when quantities change; fixed rates here are an explicit model assumption. Do not retrospectively rerank bids using undisclosed quantities, assume every high rate is unlawful, or treat the estimated BOQ as a guarantee of final payment. Obtain justified rate analysis and follow the applicable evaluation and change provisions.</p>",
                    sources: []
                },
                {
                    id: "management-contract-pricing",
                    title: "Actual cost plus profit describes a family, not always a percentage fee",
                    html: "<p>When payment reimburses eligible actual construction cost plus an agreed fee, it belongs to the <strong>cost-reimbursable or cost-plus family</strong>. The bank selects cost-plus-percentage, but its stem says only certain profit. A percentage is one possible fee basis, not something established by those words alone.</p>" +
                        "<table><thead><tr><th scope='col'>Pricing mode</th><th scope='col'>Basis and principal exposure</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Lump sum</th><td>An agreed sum for defined obligations; scope changes and other contractual adjustments still need administration.</td></tr>" +
                        "<tr><th scope='row'>Unit rate or remeasurement</th><td>Accepted measured quantities valued at applicable rates; quantity and re-rating provisions matter.</td></tr>" +
                        "<tr><th scope='row'>Cost reimbursable</th><td>Eligible evidenced costs plus a fixed, percentage or incentive fee under agreed rules.</td></tr>" +
                        "<tr><th scope='row'>Target-cost arrangement</th><td>Eligible cost is compared with an agreed target, with specified sharing or incentive rules.</td></tr></tbody></table>" +
                        "<p>A percentage fee can increase when reimbursable cost increases; a fixed fee does not automatically do so. Target or incentive arrangements need a defined adjustment and sharing formula, not a vague promise of reasonable profit.</p>" +
                        "<p>Design-build describes responsibility for design and construction, whereas lump sum or remeasurement describes pricing; these are different classification axes. Likewise, a work order is a means of authorising work, not proof of one universal price mechanism. Select and administer the actual arrangement against scope certainty, allocation of risk, records and applicable procurement rules. Nothing here authorises unlimited reimbursement of all expenses.</p>",
                    sources: [{ id: "BASI674-00407", set: 32, question: 1 }]
                },
                {
                    id: "management-reimbursable-cost-controls",
                    title: "Reimbursable cost must be eligible, evidenced and within authority",
                    html: "<p><strong>Syllabus extension:</strong> the bank gives no cost ledger, fee agreement or reimbursement ceiling. Actual expenditure is not automatically allowable cost. Check the contract's eligible categories, authorisation, reasonableness, allocation, supporting evidence and any ceiling or target provisions. Separate reimbursable direct cost from the fee and from costs already recovered through another rate or overhead allowance.</p>" +
                        "<p><strong>Hypothetical example, excluding VAT:</strong> supported eligible labour is NRs600,000 and materials NRs300,000. A further NRs50,000 lacks the required substantiation and is not included pending resolution. Eligible cost for this calculation is therefore <strong>NRs900,000</strong>, not NRs950,000.</p>" +
                        "<table><thead><tr><th scope='col'>Alternative hypothetical agreement</th><th scope='col'>Fee</th><th scope='col'>Calculated payment, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Fixed fee of NRs100,000</th><td>100,000</td><td>1,000,000</td></tr>" +
                        "<tr><th scope='row'>Fee of 10% of eligible cost</th><td>90,000</td><td>990,000</td></tr></tbody></table>" +
                        "<p>These are alternative contracts, not two fees charged together. Missing support does not automatically prove fraud, but it does prevent treating the amount as established reimbursement under the stated example.</p>" +
                        "<p>Reconcile timesheets, invoices, goods receipt, plant records and subcontractor claims to the work package. Check duplicates, related-party transactions, excluded costs, prior approvals and agreed caps. Public or grant funding can impose additional eligibility and audit requirements. Retain the decision and evidence for disputed items instead of describing a cost-plus contract as actual cost plus unlimited profit.</p>",
                    sources: []
                },
                {
                    id: "management-bid-performance-securities",
                    title: "Identify the security type, calculation base and exact template",
                    html: "<p><strong>Identified-template extension:</strong> the PPMO works SBD revised September 2026 concerns <strong>NCB, single-stage/two-envelope procurement above NRs20 million</strong>. Bid security protects the bidding commitment; performance security supports contractual performance. They are not the same instrument or calculation base.</p>" +
                        "<p><strong>Hypothetical amounts, not bank givens:</strong> estimated work of NRs38 million plus PS of NRs2 million gives a bid-security base of <strong>NRs40 million</strong>; a separate NRs4 million contingency and VAT are excluded. Independently assume the quoted bid price excluding VAT but including PS is also NRs40 million.</p>" +
                        "<table><thead><tr><th scope='col'>Provision in this SBD</th><th scope='col'>Basis</th><th scope='col'>Hypothetical amount, NRs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Bid security: BDS 19.1, 2–3%</th><td>Estimate excluding VAT and contingency, including PS</td><td>800,000–1,200,000</td></tr>" +
                        "<tr><th scope='row'>Illustrative BDS selection: 2.5%</th><td>Same estimate base</td><td>1,000,000</td></tr>" +
                        "<tr><th scope='row'>Ordinary performance: ITB 40.1, 5%</th><td>Quoted bid excluding VAT, including PS</td><td>2,000,000</td></tr>" +
                        "<tr><th scope='row'>Conditional additional security: BDS 35.5, 8%</th><td>Same quoted-bid base, only when triggered</td><td>3,200,000 additional; 5,200,000 combined</td></tr></tbody></table>" +
                        "<p>The additional 8% follows ITB 35.5's front-loaded or abnormal-item-rate circumstances and unsatisfactory clarification; it is <strong>not automatic for every bid</strong>. It means an additional percentage of bid price, not 8% of the ordinary security.</p>" +
                        "<p>The bank's <strong>NRs2,500 for works up to NRs5 lakh</strong> remains unverified: no applicable small-work legal edition was established. This large-contract SBD cannot prove that claim, and the hypothetical 2.5% selection must not be used to derive it.</p>",
                    sources: [{ id: "BASI674-00415", set: 32, question: 9 }]
                },
                {
                    id: "management-retention-release",
                    title: "Retention release depends on the named certificate and evidence",
                    html: "<p>The bank describes a 5% deduction from contractors' bills and links its return to defects liability. More precisely, <strong>retention</strong> is money withheld from payments under the contract, distinct from a separately issued performance guarantee. Do not assume every security deposit has the same release event.</p>" +
                        "<p><strong>Identified-template scope:</strong> the PPMO September 2026 works SBD for NCB single-stage/two-envelope procurement above NRs20 million gives <strong>5% for Government of Nepal (GoN)-funded retention in SCC 54.1</strong>. Its development-partner field instead calls for a specified 5–10%. These are this template's settings, not a universal construction withholding law.</p>" +
                        "<p><strong>GCC 54.2</strong> releases half the total retained amount upon the Project Manager's issue of the <strong>Defects Liability Certificate</strong>, and the other half on evidence of submission of the contractor's tax return to the concerned Internal Revenue Office. It does <strong>not</strong> say half at ordinary completion. Evidence of tax-return submission is also not the same wording as proof that every tax liability has been paid.</p>" +
                        "<p><strong>Hypothetical arithmetic:</strong> if NRs4,000,000 is the certified amount subject to this 5% retention, the deduction is <strong>NRs200,000</strong>. For a hypothetical total retention pool of that amount, the two halves are <strong>NRs100,000 each</strong>, released only against the relevant conditions.</p>" +
                        "<p>Expiry of a defects period and issue of its certificate are different events. Outstanding corrections, guarantee substitution and other release conditions need the actual contract provisions. Good progress alone does not establish an unconditional refund entitlement.</p>",
                    sources: [{ id: "BASI674-00413", set: 32, question: 7 }]
                },
                {
                    id: "management-variations-claims-eot",
                    title: "Separate a change instruction, a claim and an extension of time",
                    html: "<p><strong>Syllabus extension:</strong> the bank provides no complete variation, claim or delay-analysis case. A variation changes work through the contract's authorised mechanism. A claim requests a contractual entitlement, such as time or money, arising from stated circumstances. Neither a contractor's request nor an informal site discussion automatically establishes the entitlement or its value.</p>" +
                        "<table><thead><tr><th scope='col'>Control step</th><th scope='col'>Evidence or decision</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Notice and identification</th><td>Record the event, contractual basis, required notice and responsible authority.</td></tr>" +
                        "<tr><th scope='row'>Causation and effect</th><td>Link instructions and conditions to affected work, contemporary programme logic, resources and costs.</td></tr>" +
                        "<tr><th scope='row'>Valuation and determination</th><td>Apply the relevant rates or substantiated cost rules and document approval, rejection or dispute.</td></tr>" +
                        "<tr><th scope='row'>Controlled update</th><td>Reconcile scope, price, programme, securities, risk and the change register.</td></tr></tbody></table>" +
                        "<p>An <strong>extension of time, EOT</strong>, changes the contractual time obligation when its requirements are met; it does not automatically award additional money. Conversely, disruption can affect cost without delaying overall completion. Assess critical-path effects, available float, concurrent events and the applicable allocation of risk rather than summing every reported delay day.</p>" +
                        "<p>Keep notices, instructions, dated diaries, measurements, inspection records and both baseline and updated programmes. An as-built sequence is evidence, not a substitute for contractual analysis. Notice periods, valuation rules, concurrency treatment and approval powers are contract- and jurisdiction-dependent. A contingency allowance is not authority to accept an otherwise unsupported claim or evade procurement controls.</p>",
                    sources: []
                },
                {
                    id: "management-liquidated-damages",
                    title: "Liquidated damages are not a universal penalty unrelated to loss",
                    html: "<p>The bank equates a fixed penalty unrelated to real damage with liquidated damages. <strong>Do not adopt that as a universal legal definition.</strong> An LD clause specifies an agreed remedy or calculation for a stated breach, commonly delay. Its distinction from an unenforceable penalty, the relevance of actual loss and the amount recoverable depend on the governing law and contract; a pre-agreed figure is not automatically enforceable in every jurisdiction.</p>" +
                        "<p><strong>Identified-template example:</strong> the PPMO September 2026 NCB works SBD, single-stage/two-envelope and above NRs20 million, GCC/SCC 55.1, uses <strong>0.05% per day</strong>, capped at <strong>10%</strong> of final contract price <strong>excluding VAT but including PS</strong>. These are this template's provisions, not all construction law.</p>" +
                        "<p><strong>Hypothetical calculation:</strong> with that final-price base equal to NRs40 million, the daily amount is 40,000,000 × 0.0005 = <strong>NRs20,000</strong>. Twenty assessable delay days give <strong>NRs400,000</strong>. The cap is <strong>NRs4,000,000</strong>, reached arithmetically at <strong>200 days</strong> under this constant-base model.</p>" +
                        "<p>If hypothetical completion is 30 days beyond the original intended date and a valid EOT moves that date by 10 days, the remaining difference is 20 days, subject to the contract's day definition and other applicable conditions. GCC 55.2 provides correction where an EOT is granted after LD payment. Establish the operative completion date and entitlement before deducting; the LD cap is not necessarily a cap on every other contractual liability.</p>",
                    sources: [{ id: "BASI674-00410", set: 32, question: 4 }]
                },
                {
                    id: "management-completion-closeout",
                    title: "Close out the asset, records and account without losing continuing obligations",
                    html: "<p><strong>Syllabus extension:</strong> the bank contains no reconciled final account or complete handover case. Completion, acceptance, the defects stage, final payment and release of securities are related but distinct events. The actual contract defines their certificates, conditions and authority; finishing visible construction does not automatically settle every obligation.</p>" +
                        "<table><thead><tr><th scope='col'>Closeout stream</th><th scope='col'>Evidence to reconcile</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Technical handover</th><td>Tests, commissioning, defect lists, approved changes and verified as-built information.</td></tr>" +
                        "<tr><th scope='row'>Operational readiness</th><td>Operating manuals, training, asset identifiers, maintenance arrangements and responsible operators.</td></tr>" +
                        "<tr><th scope='row'>Commercial account</th><td>Measured work, approved variations, determined claims, advances, retention, taxes and payment reconciliation.</td></tr>" +
                        "<tr><th scope='row'>Continuing obligations</th><td>Defect correction, outstanding disputes, applicable warranty commitments and security-release conditions.</td></tr></tbody></table>" +
                        "<p>Reconcile the final account against the authorised contract basis rather than treating every expenditure as recoverable. Prevent the same change being paid through both a revised quantity and a separate claim. Preserve unresolved items transparently with their status, owner and evidence.</p>" +
                        "<p>The MIS should retain controlled final documents and a recoverable audit trail, not replace the project history with a single final total. As-built records must reflect verified construction and approved deviations; a contractor's marked-up drawing alone is not proof of acceptance. Transfer continuing risk and benefits-monitoring responsibilities to the operator so that administrative closure does not leave the asset without maintenance funding or accountable management.</p>",
                    sources: []
                }
            ],
            gaps: [
                "All ten assigned source IDs appear in substantively related main blocks with exact model/question triples. The bank concentrates on elementary contract and risk concepts; it does not provide complete information-system, financing, tender-evaluation or contract-administration datasets.",
                "management-information-system and management-document-change-coordination are source-free syllabus extensions. No actual document register, approval hierarchy, change log or site-information architecture is supplied; the layout-change case is explicitly hypothetical.",
                "management-qualitative-quantitative-risk and management-decision-tree-emv are source-free syllabus extensions. Ordinal ratings are not quantitative probability data. Return scenarios in the source-linked variance block and every decision-tree input are hypothetical; real risk distributions, dependence, tail losses and control effectiveness remain project-specific.",
                "management-financing-models, management-cash-flow-liquidity, management-cost-of-money-dscr and management-finance-bases-controls are source-free syllabus extensions. No real financing agreement, grant eligibility schedule, payment forecast or current lending rate is supplied. The cash-gap and DSCR examples state their timing, numerator, repayment and stress assumptions.",
                "management-tender-law-process, management-procurement-evaluation and management-boq-rate-risk are source-free syllabus extensions. Publication of the 2083 procurement ordinance and 2082 fourteenth rules amendment is verified, but their full current consolidation and the ordinance's continuing status were not audited. The September 2026 SBD contains a closest-to-average comparison rule and retains other lowest-price wording; no universal award rule or reconciliation of all cross-references is claimed.",
                "management-reimbursable-cost-controls is a source-free syllabus extension. The fee examples distinguish fixed and percentage arrangements; the source stem's certain profit does not uniquely establish a percentage contract. Eligibility, evidence, caps, audit and funding restrictions govern reimbursement, not an unrestricted all-actual-cost promise.",
                "management-variations-claims-eot and management-completion-closeout are source-free syllabus extensions. Actual notice periods, allocation of risk, concurrency treatment, approval powers, remedies and closeout conditions require the governing contract and law. No general claim that liquidated damages are always enforceable without any relation to actual loss is made.",
                "The bid/performance-security, retention and LD figures are expressly limited to the identified PPMO September 2026 NCB works single-stage/two-envelope SBD above NRs20 million. Their monetary examples are hypothetical. ITB 35.2 price comparison excludes PS, while the cited bid/performance-security and LD bases include it. NRs2,500 earnest money for works up to NRs5 lakh remains unverified and is not inferred from this large-contract template."
            ],
            cautions: [
                {
                    html: "<p><strong>Cost plus certain profit does not uniquely mean cost plus percentage.</strong> BASI674-00407 stores cost-plus-percentage, but a fixed or incentive fee can also accompany eligible actual cost. A percentage contract requires an agreed percentage and a defined reimbursable base. Preserve the source key while teaching that reimbursement is subject to eligibility, evidence and the actual agreement, not unlimited recovery of every expense.</p>",
                    sources: [{ id: "BASI674-00407", set: 32, question: 1 }]
                },
                {
                    html: "<p><strong>Penalty and liquidated damages cannot be equated universally.</strong> BASI674-00410's unrelated-to-real-damage wording is legally overbroad. Governing law and contractual context determine enforceability and the role of actual loss. The identified SBD's delay rate and cap do not establish a universal no-actual-damage rule; operative completion dates and valid time extensions must be considered.</p>",
                    sources: [{ id: "BASI674-00410", set: 32, question: 4 }]
                },
                {
                    html: "<p><strong>Retention is not automatically half returned at completion.</strong> For the identified September 2026 SBD, GCC 54.2 gives half upon the Defects Liability Certificate and the other half against evidence of tax-return submission. The bank's general defects-period wording omits these distinctions. Its 5% is not a verified universal retention rate for every funding source or contract.</p>",
                    sources: [{ id: "BASI674-00413", set: 32, question: 7 }]
                },
                {
                    html: "<p><strong>The NRs2,500 earnest-money claim for works up to NRs5 lakh is unverified.</strong> BASI674-00415 identifies no applicable legal edition or small-work bidding document. The inspected above-NRs20-million SBD cannot establish it. Neither its 2–3% range nor the hypothetical 2.5% selection should be back-applied to manufacture support for the stored fixed amount.</p>",
                    sources: [{ id: "BASI674-00415", set: 32, question: 9 }]
                },
                {
                    html: "<p><strong>Detailed depreciation is a source-wording defect in BASI674-00416.</strong> The intended function concerns work descriptions/specifications, quantities and drawings in the tender package, not asset-value depreciation. Tender documents must be distinguished from the documents actually incorporated into the signed contract; the original wording and stored answer remain unchanged.</p>",
                    sources: [{ id: "BASI674-00416", set: 32, question: 10 }]
                },
                {
                    html: "<p><strong>Return variability is not expected return.</strong> WATE813-00073 concerns dispersion; the notes' probabilities and returns are hypothetical additions. Variance and standard deviation require numerical outcomes on a consistent basis, not ordinal matrix scores. Volatility alone does not describe every relevant investment or project risk.</p>",
                    sources: [{ id: "WATE813-00073", set: 9, question: 92 }]
                },
                {
                    html: "<p><strong>Mitigation reduces likelihood or impact; it does not guarantee elimination.</strong> Reducing an exposure toward an acceptable threshold and accepting the remaining exposure are distinct decisions. Transfer allocates specified consequences, often financially. An acceptable internal rating does not remove mandatory duties or the need to verify that controls work.</p>",
                    sources: [
                        { id: "WATE813-00071", set: 9, question: 90 },
                        { id: "WATE813-00075", set: 9, question: 94 }
                    ]
                },
                {
                    html: "<p><strong>Planning is not the only time for detailed risk analysis.</strong> WATE813-00077 identifies an important planning activity, but new investigations, procurement, construction changes, incidents and operations can all require renewed analysis. Keep the register and response effectiveness under continuing review.</p>",
                    sources: [{ id: "WATE813-00077", set: 9, question: 96 }]
                },
                {
                    html: "<p><strong>Insurance transfers defined financial consequences, not the physical hazard or all responsibility for workers.</strong> WATE813-00105 does not establish complete coverage of every loss. Deductibles, exclusions, limits and claim conditions leave residual exposure; competent safety controls and applicable worker-protection duties remain necessary.</p>",
                    sources: [{ id: "WATE813-00105", set: 12, question: 93 }]
                },
                {
                    html: "<p><strong>Primary-document security conditions, not extra bank evidence:</strong> in the identified September 2026 SBD, BDS 19.1 gives bid-security validity 30 days beyond bid validity. ITB 40.1 calls for the ordinary 5% performance security within 15 days of receipt of the Letter of Acceptance, subject to the conditional additional 8% under ITB/BDS 35.5. GCC 58.1 gives ordinary performance validity through the defects-liability period plus 30 days, but the additional security through intended completion plus 30 days. These different triggers and periods must not be merged into an automatic 13% rule for every contract.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Publication verification is not certification of all current Nepal procurement law.</strong> The 2083 ordinance and 2082 fourteenth rules amendment were identified, but a complete current consolidation was not audited. The September 2026 above-NRs20-million NCB single-stage/two-envelope SBD includes a closest-to-average bid comparison in ITB 36.1 and lowest-price wording in other passages. Apply the complete legally applicable issued criteria, not a blanket lowest-bid-always rule or an assumption that all template clauses reconcile themselves.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "PPMO, Standard Bidding Document: Procurement of Works, NCB, Single-Stage Two-Envelope, above NRs20 million — revised September 2026; identified template, not universal construction law",
                    url: "https://giwmscdnone.gov.np/media/files/SBD%20Works%2CNCB%201S2E_September_sc9nzrg.doc"
                },
                {
                    title: "PPMO publication: Public Procurement (Second Amendment) Ordinance, 2083 — publication verified 6 September 2026; continuing status and complete consolidation not certified",
                    url: "https://ppmo.gov.np/content/13300/public-procurement--second-amendment--ordinance--2083/"
                },
                {
                    title: "PPMO publication: Public Procurement (Fourteenth Amendment) Rules, 2082 — publication verified 6 September 2026; complete current Act–Rules consolidation not certified",
                    url: "https://ppmo.gov.np/content/13231/public-procurement--fourteenth-amendment--rules----2082/"
                }
            ]
        }
    });
}());