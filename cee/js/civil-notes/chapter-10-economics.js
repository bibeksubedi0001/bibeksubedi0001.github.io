(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        AALL1002: {
            code: "AALL1002",
            questionCount: 9,
            blocks: [
                {
                    id: "econ-project-cashflow-perspective",
                    title: "Define whose cash flow is being evaluated and when it occurs",
                    html: "<p><strong>Syllabus extension.</strong> None of the nine assigned questions supplies a complete project cash-flow timeline. A cash flow records money received or paid at specified dates, not simply revenue earned or an accounting expense recognized. Choose the decision perspective, currency, price base and study period before applying a formula.</p>" +
                        "<p>Take receipts as positive and payments as negative. The investment date is t = 0; an end-of-year convention places the following year's net receipt at t = 1. Identify construction expenditure, operating receipts and expenses, replacements, working-capital commitments and recoveries, and terminal disposal proceeds or costs. A delay in collection changes present value even if the nominal invoice amount is unchanged.</p>" +
                        "<p>Project cash flow before financing excludes loan drawdowns and debt service; equity cash flow includes the relevant financing flows. Use a discount rate consistent with that choice rather than deducting financing costs and then counting them again through an incompatible hurdle rate.</p>" +
                        "<p><strong>Financial and social economic analysis are different.</strong> Owner receipts and payments do not automatically equal society's resource costs and benefits. Taxes, subsidies and charges can be transfers within a stated social boundary, while environmental or user effects may exist without cash receipts. Define the boundary and avoid counting a transfer or the same underlying benefit twice.</p>",
                    sources: []
                },
                {
                    id: "econ-time-value-single-payments",
                    title: "Move a single payment through time using a matching interest period",
                    html: "<p><strong>Syllabus extension.</strong> The bank does not provide a single-payment time-value exercise. Money available now can earn a return or avoid financing cost; therefore equal amounts at different dates are not generally equivalent. Let P be present value, F the value n periods later and i the effective interest rate per period, expressed as a fraction.</p>" +
                        "<p>Compounding gives <strong>F = P(1 + i)<sup>n</sup></strong>, so the factor F/P is (1 + i)<sup>n</sup>. Reversing the operation gives <strong>P = F/(1 + i)<sup>n</sup></strong>, with factor P/F = (1 + i)<sup>−n</sup>. The exponent counts the same periods to which i applies. Monthly cash flows cannot be discounted with an annual rate without a suitable conversion or explicit annual aggregation.</p>" +
                        "<p><strong>Hypothetical example:</strong> Rs1,000 invested for three years at an effective annual 10%, with interest retained, becomes 1000 × 1.1<sup>3</sup> = <strong>Rs1,331</strong>. Discounting Rs1,331 by that same factor returns Rs1,000. Simple interest on principal alone would instead produce 1000(1 + 0.10 × 3) = <strong>Rs1,300</strong>.</p>" +
                        "<p>Interest and discounting are inverse time-value operations, not opposite opinions about profitability. At i = 0 both factors become one. Keep full precision in factors and round the final money amount, rather than rounding each year's interest before compounding.</p>",
                    sources: []
                },
                {
                    id: "econ-nominal-effective-and-real-rates",
                    title: "Separate compounding frequency from inflation and purchasing power",
                    html: "<p><strong>Syllabus extension.</strong> No assigned question gives nominal-rate compounding or inflation data. For a nominal annual interest quote j compounded m times per year, the periodic rate is j/m and <strong>i<sub>effective</sub> = (1 + j/m)<sup>m</sup> − 1</strong>. Nominal as a compounding convention is distinct from nominal, or current-price, money in an inflation analysis.</p>" +
                        "<p><strong>Hypothetical compounding example:</strong> j = 12% with monthly compounding means 1% per month. The effective annual rate is 1.01<sup>12</sup> − 1 = <strong>12.682503%</strong>, not 12%. The number of compounding periods must be stated; a nominal quote alone is incomplete.</p>" +
                        "<p>With a consistent general inflation assumption f, the exact relation is <strong>1 + i<sub>nominal</sub> = (1 + i<sub>real</sub>)(1 + f)</strong>. Discount current-price cash flows with a nominal money rate, or constant-price cash flows with a real rate. Merely subtracting inflation is an approximation.</p>" +
                        "<p><strong>Hypothetical inflation example:</strong> nominal effective interest 8% and inflation 5% give i<sub>real</sub> = 1.08/1.05 − 1 = <strong>2.857143%</strong>. A receipt worth Rs1,000 in today's purchasing power is Rs1,050 next year; its present value is 1050/1.08 = 1000/(1.08/1.05) = <strong>Rs972.22</strong>. Item-specific real price changes can still remain after removing general inflation.</p>",
                    sources: []
                },
                {
                    id: "econ-uniform-series-and-zero-rate-limits",
                    title: "Derive uniform-series factors from the dates of the payments",
                    html: "<p><strong>Syllabus extension.</strong> The bank's sinking-fund and lining items use related factors, but provide no general annuity derivation. Let A be an equal payment at the end of each of n periods, starting one period after the present date. Summing its discounted terms gives <strong>P/A = Σ(1 + i)<sup>−t</sup> = [1 − (1 + i)<sup>−n</sup>]/i</strong>, for t = 1 through n.</p>" +
                        "<table><thead><tr><th scope='col'>Required conversion</th><th scope='col'>Factor for i ≠ 0</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>P from A</th><td>(P/A) = [(1 + i)<sup>n</sup> − 1]/[i(1 + i)<sup>n</sup>]</td></tr>" +
                        "<tr><th scope='row'>A from P</th><td>(A/P) = i(1 + i)<sup>n</sup>/[(1 + i)<sup>n</sup> − 1]</td></tr>" +
                        "<tr><th scope='row'>A from terminal F</th><td>(A/F) = i/[(1 + i)<sup>n</sup> − 1]</td></tr>" +
                        "<tr><th scope='row'>F from A</th><td>(F/A) = [(1 + i)<sup>n</sup> − 1]/i</td></tr></tbody></table>" +
                        "<p>A/P is the capital recovery factor, CRF; A/F is the sinking fund factor, SFF. Their useful check is <strong>CRF = i + SFF</strong>. At <strong>i = 0</strong>, use the limits P/A = F/A = n and A/P = A/F = 1/n, rather than dividing zero by zero.</p>" +
                        "<p><strong>Hypothetical check at i = 0.10, n = 3:</strong> P/A = 2.486851991, A/P = 0.402114804, A/F = 0.302114804 and F/A = 3.31. Beginning-period payments shift the timeline; multiply an otherwise identical annuity's present value by 1 + i. Do not apply an ordinary end-period factor to different payment dates silently.</p>",
                    sources: []
                },
                {
                    id: "econ-capital-recovery-and-salvage",
                    title: "Annualized capital cost includes a return on capital, not only depreciation",
                    html: "<p><strong>Syllabus extension.</strong> The bank gives no complete annual-equivalent example with both salvage and maintenance. Let C be initial capital cost, S the estimated net salvage receipt at the end of n years and i the consistent effective annual discount rate. Their present cost is C − S(P/F), so equivalent annual capital recovery is <strong>CR = C(A/P) − S(A/F)</strong>.</p>" +
                        "<p>Using CRF = i + SFF gives two useful checks: <strong>CR = (C − S)CRF + iS = iC + (C − S)SFF</strong>. These equivalent expressions are not straight-line accounting depreciation. They include the time value of the capital tied up. Add annual operating or maintenance cost separately when calculating total equivalent annual cost.</p>" +
                        "<p><strong>Hypothetical example:</strong> C = Rs10,000, S = Rs1,000, n = 5 years, i = 10% and end-year maintenance Rs400. CRF = 0.263797481 and SFF = 0.163797481. Capital recovery is <strong>Rs2,474.18/year</strong>, and total annual equivalent cost is <strong>Rs2,874.18/year</strong>, calculated before rounding. Straight-line depreciation for the same cost and residual assumptions would be only Rs1,800/year.</p>" +
                        "<p>Salvage must be placed at its actual date and net of relevant disposal costs. A negative terminal value represents a liability rather than a receipt. None of these hypothetical prices, lives or rates is a Nepal-prescribed allowance.</p>",
                    sources: []
                },
                {
                    id: "econ-three-year-npv-worked",
                    title: "A complete three-year NPV calculation with a stated time origin",
                    html: "<p><strong>Syllabus extension — the entire example is hypothetical.</strong> No assigned question gives an NPV timeline. Pay Rs120,000 at t = 0 and receive net operating cash of Rs50,000 at each year-end for three years. Assume no taxes, financing flows, further investment or terminal proceeds. All amounts are constant-price rupees and the effective real annual MARR is 10%.</p>" +
                        "<p>Net present value is <strong>NPV(i) = Σ CF<sub>t</sub>/(1 + i)<sup>t</sup></strong>, including t = 0. The initial payment is not discounted another year. The following money values are displayed to two decimals, but totals use unrounded calculations.</p>" +
                        "<table><thead><tr><th scope='col'>Year</th><th scope='col'>Net CF, Rs</th><th scope='col'>Present value, Rs</th><th scope='col'>Cumulative PV, Rs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0</th><td>−120,000</td><td>−120,000.00</td><td>−120,000.00</td></tr>" +
                        "<tr><th scope='row'>1</th><td>50,000</td><td>45,454.55</td><td>−74,545.45</td></tr>" +
                        "<tr><th scope='row'>2</th><td>50,000</td><td>41,322.31</td><td>−33,223.14</td></tr>" +
                        "<tr><th scope='row'>3</th><td>50,000</td><td>37,565.74</td><td>4,342.60</td></tr></tbody></table>" +
                        "<p>Thus <strong>NPV = −120000 + 50000(2.486851991) = Rs4,342.60</strong>. Positive NPV means the modelled receipts recover investment and the stipulated time-value requirement, with this additional present-worth surplus. It is not total accounting profit or cash held in a bank account at year three.</p>" +
                        "<p>For an independent discretionary project, positive NPV supports acceptance on the quantified assumptions. Feasibility, excluded effects and competing uses of resources still require review. Zero NPV means exactly meeting the selected hurdle, not receiving no return.</p>",
                    sources: []
                },
                {
                    id: "econ-discounted-payback-worked",
                    title: "Discounted payback: distinguish a year-end result from interpolation",
                    html: "<p><strong>Syllabus extension — hypothetical continuation of the three-year example.</strong> The bank supplies no discounted-payback dataset. Retain Rs120,000 invested now, Rs50,000 received at each of three year-ends and effective real annual discounting at 10%. Discounted payback is the first time cumulative discounted receipts recover the initial outlay.</p>" +
                        "<p>After year two, the unrecovered present amount is <strong>Rs33,223.1404959</strong>. The year-three receipt has present value <strong>Rs37,565.7400451</strong>. Under the stated <strong>strict year-end payment dates, recovery first occurs at year 3</strong>, because no receipt is available earlier in that year.</p>" +
                        "<p>A common fractional estimate spreads the year-three discounted recovery evenly through the year: <strong>DPP ≈ 2 + 33223.1404959/37565.7400451 = 2.8844 years</strong>. This is an explicitly added interpolation assumption, not the exact payback date of the original lump-sum timeline or an exact continuous-discounting calculation.</p>" +
                        "<p>With similarly interpolated undiscounted receipts, simple payback would be 120000/50000 = 2.4 years. Discounting delays recovery here because later receipts are worth less at the initial date. If cumulative discounted cash never reaches zero during the study period, report no discounted payback within that period. Payback ignores later gains and liabilities after recovery and therefore cannot replace NPV for comparing whole-life economic value.</p>",
                    sources: []
                },
                {
                    id: "econ-irr-solution-and-marr-check",
                    title: "Solve IRR as the rate that makes the same cash flow's NPV zero",
                    html: "<p><strong>Syllabus extension — hypothetical continuation.</strong> The assigned bank gives no IRR calculation. For the same initial Rs120,000 payment and three end-year Rs50,000 receipts, internal rate of return r satisfies <strong>0 = −120000 + 50000/(1 + r) + 50000/(1 + r)<sup>2</sup> + 50000/(1 + r)<sup>3</sup></strong>. A rate is a fraction in the equation, not its percentage number.</p>" +
                        "<p>At r = 0.12, NPV is <strong>+Rs91.5634</strong>; at r = 0.13 it is <strong>−Rs1,942.3701</strong>. Therefore a root lies between 12% and 13%. Linear interpolation gives about 12.0450%, but the NPV curve is not exactly straight. Iteratively narrowing the bracket gives <strong>r = 0.120443983, or IRR ≈ 12.0444%</strong>.</p>" +
                        "<p>This conventional pattern has an initial outflow followed only by positive receipts. Its NPV decreases as the discount rate increases, so the relevant root is unique. Since its IRR exceeds the hypothetical 10% real MARR, it also has positive NPV at that MARR, consistent with the worked NPV result.</p>" +
                        "<p>IRR is calculated from the cash flow, whereas MARR is the selected acceptance requirement. They are not names for the same input. Compare them on the same period, price and tax basis; a monthly or after-tax IRR cannot be compared directly with an incompatible annual or before-tax hurdle.</p>",
                    sources: []
                },
                {
                    id: "econ-multiple-irr-and-npv-profile",
                    title: "A cash flow can have more than one IRR, so inspect the NPV profile",
                    html: "<p><strong>Syllabus extension — hypothetical nonconventional cash flow.</strong> The bank has no multiple-IRR example. Consider −Rs100 now, +Rs230 after one year and −Rs132 after two years, perhaps representing a terminal liability. There are two changes of sign, so the simple conventional-investment acceptance rule cannot be assumed.</p>" +
                        "<p>The root equation is <strong>−100 + 230/(1 + r) − 132/(1 + r)<sup>2</sup> = 0</strong>. Multiplying by (1 + r)<sup>2</sup> and setting x = 1 + r gives <strong>100x<sup>2</sup> − 230x + 132 = 0</strong>. Its roots are x = 1.1 and 1.2, producing <strong>IRRs of 10% and 20%</strong>.</p>" +
                        "<p>At a hypothetical 15% MARR, NPV is <strong>+Rs0.189036</strong>; at 25% it is <strong>−Rs0.48</strong>. Reporting only the larger IRR conceals the non-monotonic NPV behaviour and can mislead an acceptance decision. Evaluate NPV at the appropriate hurdle instead of selecting whichever root looks favourable.</p>" +
                        "<p>Multiple sign changes permit but do not guarantee multiple economically relevant roots; some patterns have no useful positive IRR. A spreadsheet's starting guess can locate one root and miss another. Check the dates, signs and NPV profile, especially when rehabilitation, decommissioning or other late outflows occur. IRR ranking is also unreliable for mutually exclusive alternatives of different scale or timing.</p>",
                    sources: []
                },
                {
                    id: "econ-marr-and-incremental-alternatives",
                    title: "MARR is a decision requirement; compare the extra investment incrementally",
                    html: "<p><strong>Syllabus extension.</strong> The bank's maximum-B/C item does not supply a MARR or competing cash-flow timelines. The minimum attractive rate of return is the hurdle selected for the decision, reflecting the relevant opportunity cost and analysis basis. It is not automatically the bank lending rate, the project's IRR or a legally prescribed universal percentage.</p>" +
                        "<p>For independent projects without a binding capital constraint, each positive-NPV opportunity may be considered. Mutually exclusive alternatives cannot all be implemented: compare their complete cash flows over a common service basis and study period. Include the feasible do-minimum alternative where appropriate. A mandatory service need may require choosing the least-cost feasible option rather than rejecting every option because none earns cash revenue.</p>" +
                        "<p>For alternatives A and B, form <strong>ΔCF<sub>t</sub> = CF<sub>B,t</sub> − CF<sub>A,t</sub></strong>. At the common MARR, <strong>ΔNPV = NPV<sub>B</sub> − NPV<sub>A</sub></strong>. A positive increment supports B over A on the quantified basis. If the incremental pattern is conventional, its IRR may also be compared with MARR; otherwise use incremental NPV directly.</p>" +
                        "<p>Ranking individual IRRs or ratios ignores scale and can reject a worthwhile additional investment. Capital rationing, incompatible project bundles and different constraints require their own selection analysis. State those constraints rather than disguising them as a general highest-ratio rule.</p>",
                    sources: []
                },
                {
                    id: "econ-benefit-cost-incremental-counterexample",
                    title: "Highest individual B/C need not identify the best mutually exclusive alternative",
                    html: "<p>For a defined perspective and common discount basis, <strong>B/C = present value of benefits / present value of costs</strong>. With positive cost denominator, B/C above one corresponds to positive net present benefit for that particular option. It does not establish that the option is best among mutually exclusive investments.</p>" +
                        "<p><strong>Syllabus extension — hypothetical counterexample:</strong> the linked lining question supplies no alternative data. Suppose A and B are feasible, mutually exclusive designs over the same horizon. The following are already-discounted values in Rs thousands at the same selected MARR.</p>" +
                        "<table><thead><tr><th scope='col'>Option</th><th scope='col'>PV cost</th><th scope='col'>PV benefit</th><th scope='col'>B/C</th><th scope='col'>Net PV</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A</th><td>100</td><td>150</td><td>1.50</td><td>50</td></tr>" +
                        "<tr><th scope='row'>B</th><td>200</td><td>280</td><td>1.40</td><td>80</td></tr></tbody></table>" +
                        "<p>B has the lower individual ratio but the higher net benefit. Its extra cost is 100 and extra benefit 130, so <strong>incremental B/C = 1.30</strong> and <strong>incremental net PV = 30</strong>. Without another binding constraint, the extra investment is justified and B is preferred.</p>" +
                        "<p>The bank's maximum-B/C statement can express a simplified efficiency idea, but is not a universal alternative-selection rule. Define whether savings are benefits or reductions in cost consistently; moving the same item between numerator and denominator can change a ratio while leaving net benefit unchanged. Social resource benefits and owner cash receipts must not be mixed.</p>",
                    sources: [{ id: "IRRI951-00161", set: 16, question: 72 }]
                },
                {
                    id: "econ-lining-benefit-cost-unit-audit",
                    title: "Audit the lining question's units before accepting its B/C ratio",
                    html: "<p>The bank states Rs40/m<sup>2</sup> initial lining cost, water saving 3 cumecs per million m<sup>2</sup>, crop value Rs300,000 per cumec, life 40 years, maintenance 12 paisa/m<sup>2</sup> and annual interest 6%. It does <strong>not specify the crop-value period or explicitly date maintenance</strong>. A cumec is a flow rate, not an annual water volume.</p>" +
                        "<p><strong>Conditional annual interpretation:</strong> if Rs300,000 is benefit per cumec per year and maintenance is annual, the stated benefit per lining area is <strong>B = (3/1000000) × 300000 = Rs0.90/m<sup>2</sup>/year</strong>. This annual meaning is an assumption, not information recovered from the stem.</p>" +
                        "<p>With an additional <strong>hypothetical zero-salvage assumption</strong>, CRF at i = 0.06, n = 40 is <strong>0.0664615359</strong>. Annualized cost is <strong>40 × CRF + 0.12 = Rs2.77846144/m<sup>2</sup>/year</strong>. Hence <strong>B/C = 0.90/2.77846144 = 0.323920</strong>, not the stored 1.2. None of the offered ratios matches this conditional calculation.</p>" +
                        "<p>For uniform lined perimeter 20 m and length ℓ, lining area is 20ℓ m<sup>2</sup>. Multiplying both benefit and cost by 20ℓ cancels it from the ratio; an invented canal length cannot repair the mismatch. A seasonal crop value, different maintenance period, nonzero salvage or additional cultivation costs needs an explicit revised cash flow. Preserve the bank and report the unresolved interpretation instead of choosing a wrong nearest option.</p>",
                    sources: [{ id: "IRRI951-00042", set: 5, question: 76 }]
                },
                {
                    id: "econ-life-cycle-cost-workflow",
                    title: "Life-cycle cost analysis follows interventions, their dates and their consequences",
                    html: "<p>Life-cycle cost analysis compares the discounted costs of technically feasible alternatives providing a comparable service. A cheaper initial pavement can be more expensive after maintenance, rehabilitation and work-zone effects are included. A cost-only comparison is insufficient if alternatives deliver materially different benefits.</p>" +
                        "<p>The inspected FHWA explanation first identifies alternative strategies, then their construction, maintenance and rehabilitation activities and timing, and then estimates activity costs. Agency and relevant user costs form an expenditure stream for each alternative. Discount those streams, compare results and revisit assumptions or strategies where needed.</p>" +
                        "<p>Thus cost estimation follows strategy development in the broad sequence, but <strong>activity identification and timing intervene</strong>. The bank's shortened next-step wording should not be memorized as a universal process that jumps directly from a design label to a meaningful cost total. Estimation and design also inform each other iteratively.</p>" +
                        "<p><strong>Syllabus extension:</strong> no assigned LCCA item supplies a dated cost schedule. With positive costs C<sub>t</sub> and an end-horizon residual receipt R<sub>N</sub>, one consistent expression is <strong>LCC = Σ C<sub>t</sub>/(1 + i)<sup>t</sup> − R<sub>N</sub>/(1 + i)<sup>N</sup></strong>. State the price base, analysis horizon, residual basis and included user costs. The FHWA source is foreign methodological guidance, not a Nepal discount-rate requirement or authority to treat user costs as contractor cash expenditure.</p>",
                    sources: [
                        { id: "TRAN808-00283", set: 26, question: 90 },
                        { id: "TRAN808-00285", set: 27, question: 80 }
                    ]
                },
                {
                    id: "econ-unequal-lives-common-study",
                    title: "Different service lives require a common study basis or defensible repetition",
                    html: "<p><strong>Syllabus extension — all alternatives and numbers are hypothetical.</strong> The bank gives no unequal-life comparison. Suppose equal service is needed for six years. A costs Rs12,000, lasts three years and incurs Rs1,000 at each year-end; B costs Rs20,000, lasts six years and incurs Rs800 annually. Assume zero salvage, constant-price costs, 10% effective real annual discounting and an identical replacement of A at year three.</p>" +
                        "<p>Over the common six-year period, <strong>PV<sub>A</sub> = 12000 + 12000/1.1<sup>3</sup> + 1000(P/A, 10%, 6) = Rs25,371.04</strong>. For B, <strong>PV<sub>B</sub> = 20000 + 800(P/A, 10%, 6) = Rs23,484.21</strong>. Do not charge another replacement at year six when it supplies no service within this study horizon.</p>" +
                        "<p>The same assumptions permit annual equivalents: <strong>EAC<sub>A</sub> = 12000(A/P, 10%, 3) + 1000 = Rs5,825.38/year</strong>, while <strong>EAC<sub>B</sub> = 20000(A/P, 10%, 6) + 800 = Rs5,392.15/year</strong>. B has lower cost by either method. All calculations precede final rounding.</p>" +
                        "<p>Annualizing unrelated lives does not automatically make them comparable. Repeatability assumes replacement remains available with the stated cost, performance and demand. Without it, use the actual common study period, required replacements and residual values. An alternative that ceases service early cannot be made attractive by omitting the cost of completing the required service.</p>",
                    sources: []
                },
                {
                    id: "econ-break-even-and-sensitivity",
                    title: "Use break-even calculations to expose the assumptions supporting a decision",
                    html: "<p><strong>Syllabus extension — hypothetical continuation of the three-year project.</strong> The bank provides no sensitivity dataset. Retain an initial Rs120,000 outlay, three equal end-year receipts, no terminal value and a 10% effective real annual MARR. Instead of accepting the estimated Rs50,000 receipt without challenge, solve for the annual receipt that just meets the hurdle.</p>" +
                        "<p>Setting NPV to zero gives <strong>A<sub>break-even</sub> = 120000/(P/A, 10%, 3) = Rs48,253.78/year</strong>. The modelled Rs50,000 annual receipt is only <strong>Rs1,746.22/year</strong> above that level, using unrounded factors. This margin is not an allowance that can be spent without consequence; it measures sensitivity to the specified uniform-receipt assumption.</p>" +
                        "<p>If the net receipt is hypothetically 10% lower, or Rs45,000 each year, <strong>NPV = 45000(2.486851991) − 120000 = −Rs8,091.66</strong>. The recommendation changes even though the project still produces positive annual operating cash. Positive cash receipts and acceptable discounted value are different tests.</p>" +
                        "<p>Vary a parameter while stating what remains fixed. A coordinated scenario may need to change revenue, maintenance and replacement timing together rather than independently. Sensitivity is not a probability forecast. Keep the main focus here on economic comparison; detailed risk management, financing ratios and contractual risk allocation belong to the separate project-management scope.</p>",
                    sources: []
                },
                {
                    id: "econ-depreciation-causes-and-obsolescence",
                    title: "Physical deterioration and obsolescence are causes, not depreciation formulas",
                    html: "<p>Physical deterioration is loss of condition through wear, decay, corrosion or other physical processes. The bank's misspelling Deerepitude refers to <strong>decrepitude</strong>, the ageing and deterioration sense of physical depreciation. A physically sound asset can nevertheless become less useful or valuable because its capacity, layout or technology no longer suits demand.</p>" +
                        "<p><strong>Obsolescence</strong> concerns that loss of usefulness or economic relevance. It can be functional or associated with changing external conditions; it is not measured merely by how much interest a replacement fund earns. Inspection, remaining service potential, operating costs and relevant market evidence may tell a different story from a predetermined book-value curve.</p>" +
                        "<p>Straight-line, constant-percentage and sinking-fund approaches distribute or model a depreciable amount under different assumptions. The sinking-fund approach can calculate contributions needed to accumulate a specified future sum. It is <strong>not a universally most accurate method of measuring obsolescence</strong>, contrary to the broad claim in the linked question and explanation.</p>" +
                        "<p>Keep cause, accounting allocation, valuation and funding separate. A repair may restore physical condition without eliminating an obsolete layout; a fund may be fully accumulated even though actual replacement cost has increased. Select a method for its stated purpose and reassess relevant assumptions rather than inferring a universal ranking from the stored answer.</p>",
                    sources: [
                        { id: "BASI674-00409", set: 32, question: 3 },
                        { id: "BASI674-00405", set: 31, question: 13 }
                    ]
                },
                {
                    id: "econ-straight-line-and-book-value",
                    title: "Straight-line depreciation allocates cost; book value is not market value",
                    html: "<p>Let C be recognized asset cost, S estimated residual value and n useful life in years. Under straight-line allocation with unchanged estimates, <strong>annual depreciation D = (C − S)/n</strong>. After t full years, accumulated depreciation is tD and simplified <strong>book value BV<sub>t</sub> = C − tD</strong>. The bank's definition assumes a cost model without additional revaluation or impairment adjustments.</p>" +
                        "<p><strong>Syllabus extension — hypothetical carrying-value example:</strong> the formula and definition questions give no numerical schedule. Take C = Rs10,000, S = Rs1,000 and n = 5 years. Then D = <strong>Rs1,800/year</strong>, book value after year one is <strong>Rs8,200</strong>, after year two <strong>Rs6,400</strong>, and after year five <strong>Rs1,000</strong>. The residual is not depreciated under these stated assumptions.</p>" +
                        "<p>Book value records an accounting carrying amount; market value is what a relevant transaction or valuation would establish. They need not coincide. Residual or salvage is an estimate at the end of the chosen service life, not automatically the current selling price.</p>" +
                        "<p>Depreciation expense is <strong>not a fresh cash payment each year</strong>. Initial asset purchase is a cash outflow; subsequent allocation avoids charging that entire cost as an annual operating expense repeatedly. Tax depreciation may follow a different statutory basis and affects cash only through the tax consequences actually realized.</p>",
                    sources: [
                        { id: "BASI674-00411", set: 32, question: 5 },
                        { id: "BASI674-00414", set: 32, question: 8 }
                    ]
                },
                {
                    id: "econ-constant-percentage-book-schedule",
                    title: "Constant-percentage depreciation charges a declining carrying amount",
                    html: "<p><strong>Syllabus extension.</strong> The bank names constant percentage as an option but supplies no calculation for that method. With rate p applied to opening book value, <strong>D<sub>t</sub> = pBV<sub>t−1</sub></strong> and <strong>BV<sub>t</sub> = C(1 − p)<sup>t</sup></strong>. The charge decreases with time because its base decreases, even though p remains constant.</p>" +
                        "<p>For a simple model required to reach a positive residual S after exactly n years, solve <strong>p = 1 − (S/C)<sup>1/n</sup></strong>. This calibration assumes 0 &lt; S &lt; C and unchanged estimates. A finite constant rate below 100% never makes a positive book value exactly zero, so a zero-residual policy requires an appropriate final adjustment or another method.</p>" +
                        "<p><strong>Hypothetical continuation:</strong> C = Rs10,000, S = Rs1,000 and n = 5 give <strong>p = 36.904266%</strong>. Year-one depreciation is <strong>Rs3,690.43</strong>, leaving <strong>Rs6,309.57</strong>. Year-two book value is <strong>Rs3,981.07</strong>, and year-five value is Rs1,000, using the unrounded rate. This is faster early allocation than the Rs1,800/year straight-line schedule.</p>" +
                        "<p>This p is an illustrative allocation rate, not the interest rate used for discounting or the tax rate for a Nepal asset pool. Applying a convenient rounded percentage without recalculating the terminal value can defeat the specified residual target.</p>",
                    sources: []
                },
                {
                    id: "econ-bank-annual-sinking-fund",
                    title: "The building sinking fund: solve the end-year deposit without early rounding",
                    html: "<p>The assigned building costs <strong>Rs25,000</strong>, has a specified scrap value <strong>Rs3,000</strong>, life <strong>40 years</strong> and fund interest <strong>5%</strong>. Under the ordinary end-of-year deposit interpretation, the target accumulated replacement amount is C − S = <strong>Rs22,000</strong>. Treat the stated interest as an effective annual rate and retain all fund interest.</p>" +
                        "<p>Equal annual deposits A earn interest for different lengths of time. The first earns for 39 years and the last, deposited at the end of year 40, earns none before valuation. Their sum is <strong>F = A[(1 + i)<sup>n</sup> − 1]/i</strong>; hence <strong>A = (C − S)i/[(1 + i)<sup>n</sup> − 1]</strong>.</p>" +
                        "<p>Here 1.05<sup>40</sup> = <strong>7.0399887121</strong>, so <strong>A = 1100/6.0399887121 = Rs182.1195457/year</strong>, or approximately <strong>Rs182</strong> to the nearest rupee. Rs182.212 is not the full-precision result of these inputs. The stored Rs182 option is consistent with rounding; its key needs no change.</p>" +
                        "<p>At zero interest the limiting contribution would be 22000/40 = <strong>Rs550/year</strong>. Beginning-year deposits require a different timing factor. The model assumes the stated target and return; it does not forecast market obsolescence, inflation-adjusted replacement cost or investment risk. The bank supplies no fees, taxes or changing-return schedule to refine it.</p>",
                    sources: [{ id: "BASI674-00408", set: 32, question: 2 }]
                },
                {
                    id: "econ-sinking-balance-and-method-comparison",
                    title: "Compare carrying values with the separately accumulating sinking fund",
                    html: "<p><strong>Syllabus extension — hypothetical comparison, not extra bank data.</strong> Reuse C = Rs10,000, S = Rs1,000 and n = 5 years. For the sinking-fund convention, assume a 10% effective annual fund return and equal end-year deposits. The deposit is <strong>A = 9000(A/F, 10%, 5) = Rs1,474.177327/year</strong>.</p>" +
                        "<p>The accumulated fund is <strong>F<sub>t</sub> = A[(1.1)<sup>t</sup> − 1]/0.10</strong>. If the valuation convention takes that accumulation as accumulated depreciation, <strong>BV<sub>t</sub> = C − F<sub>t</sub></strong>. Year two's fund is Rs3,095.772387; its increase is Rs1,621.595060, greater than the deposit because the first deposit earns interest.</p>" +
                        "<table><thead><tr><th scope='col'>Year</th><th scope='col'>Straight-line BV, Rs</th><th scope='col'>Constant-% BV, Rs</th><th scope='col'>Sinking BV, Rs</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>0</th><td>10,000.00</td><td>10,000.00</td><td>10,000.00</td></tr>" +
                        "<tr><th scope='row'>1</th><td>8,200.00</td><td>6,309.57</td><td>8,525.82</td></tr>" +
                        "<tr><th scope='row'>2</th><td>6,400.00</td><td>3,981.07</td><td>6,904.23</td></tr>" +
                        "<tr><th scope='row'>3</th><td>4,600.00</td><td>2,511.89</td><td>5,120.47</td></tr>" +
                        "<tr><th scope='row'>4</th><td>2,800.00</td><td>1,584.89</td><td>3,158.34</td></tr>" +
                        "<tr><th scope='row'>5</th><td>1,000.00</td><td>1,000.00</td><td>1,000.00</td></tr></tbody></table>" +
                        "<p>Constant percentage uses the calibrated 36.904266% rate, not the fund's 10%. All methods reach the stipulated residual, but their intermediate values differ. The sinking fund reaches Rs9,000 at year five only if the hypothetical deposits and returns actually occur. A book-value schedule alone does not establish that cash has been invested. This valuation convention is not asserted as Nepal's statutory tax method or a mandatory financial-reporting policy.</p>",
                    sources: [
                        { id: "BASI674-00408", set: 32, question: 2 },
                        { id: "BASI674-00414", set: 32, question: 8 }
                    ]
                },
                {
                    id: "econ-nepal-tax-analysis-basis",
                    title: "For Nepal taxation, identify the legal edition and reconcile tax with cash",
                    html: "<p><strong>Syllabus extension.</strong> None of the nine assigned questions tests Nepal income-tax provisions or supplies a taxpayer's records. The legal basis inspected in the supplied verification report is the <strong>Income Tax Act, 2058, incorporating Finance Act 2082</strong>, especially Schedule 2. The report was inspected for this authoring exercise; Finance Act 2083 effects were not audited. This is an identified-edition explanation, not a promise of current filing accuracy.</p>" +
                        "<p>Identify the taxpayer, income year, relevant income activity, eligible expenditure and applicable legal treatment before computing liability. Accounting profit, taxable income and cash generated are related but different quantities. Book depreciation may differ from the tax allowance; a purchase may require capitalization rather than immediate deduction. The book-value formula in the bank cannot establish deductibility.</p>" +
                        "<p>Build a reconciliation from operating receipts and expenses to the permitted tax base, then model tax payments at their actual dates. Distinguish an expense, a tax deduction, a credit or advance collection, and the eventual tax paid; those terms do not describe identical cash-flow effects.</p>" +
                        "<p>The following blocks explain ordinary pool depreciation and a conditional tax-shield model only. They give no current personal tax slabs, universal business rate, exemption entitlement or filing deadline. Asset classification, special adjustments, disposals and later amendments require the applicable primary text and taxpayer-specific review.</p>",
                    sources: []
                },
                {
                    id: "econ-nepal-schedule-two-pools",
                    title: "Schedule 2 separates ordinary asset pools and their depreciation rates",
                    html: "<p><strong>Syllabus extension; no assigned bank question tests these tax categories.</strong> In the inspected <strong>2082-amended Income Tax Act 2058</strong>, Schedule 2 paragraphs 1 and 3 distinguish the following ordinary depreciation classes. The category descriptions are shortened explanations, not substitutes for the full legal definitions and exclusions.</p>" +
                        "<table><thead><tr><th scope='col'>Class</th><th scope='col'>General category</th><th scope='col'>Ordinary rate</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>A / क</th><td>Buildings, structures and specified works of a permanent nature.</td><td>5%</td></tr>" +
                        "<tr><th scope='row'>B / ख</th><td>Computers, data-processing equipment, furniture, fixtures and office equipment.</td><td>25%</td></tr>" +
                        "<tr><th scope='row'>C / ग</th><td>Automobiles, buses and minibuses.</td><td>20%</td></tr>" +
                        "<tr><th scope='row'>D / घ</th><td>Construction and excavation equipment and the other residual categories specified there.</td><td>15%</td></tr>" +
                        "<tr><th scope='row'>E / ङ</th><td>Intangible assets other than those assigned to D.</td><td>Useful-life-based statutory rate, not one fixed percentage.</td></tr></tbody></table>" +
                        "<p>Similar assets within A–D are pooled under the Schedule's rules. E assets have separate pools, even within that class. Do not apply an individual straight-line book schedule to a pooled tax balance merely because both are called depreciation.</p>" +
                        "<p>Tax basis is built from the relevant opening balance and permitted additions and adjustments, not automatically cost minus an assumed scrap value. Classification and eligibility precede arithmetic. The legal report checked the Nepali 2082 edition against an older English edition through 2078; the latter is not evidence of 2083 law. These percentages are depreciation allowances on the relevant basis, not personal income-tax rates.</p>",
                    sources: []
                },
                {
                    id: "econ-nepal-pool-addition-timing",
                    title: "The timing of a pool addition changes the first-year depreciation basis",
                    html: "<p><strong>Syllabus extension.</strong> No bank item supplies asset acquisition dates. In the inspected Schedule 2 paragraph 2(5), addition timing uses the <strong>later of inclusion in the pool and incurring the expenditure</strong>. An invoice date by itself is not enough. The ordinary fractions in that identified edition are:</p>" +
                        "<table><thead><tr><th scope='col'>Relevant period</th><th scope='col'>Addition recognized for that year</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Through the end of Poush</th><td>Full eligible addition</td></tr>" +
                        "<tr><th scope='row'>Magh–Chaitra</th><td>Two thirds</td></tr>" +
                        "<tr><th scope='row'>Baisakh–income-year end</th><td>One third</td></tr></tbody></table>" +
                        "<p><strong>Hypothetical illustration, not a statutory worked example:</strong> an otherwise empty B pool receives an eligible Rs120,000 asset, with expenditure and qualifying pool entry both in Magh. The first-year addition is 120000 × 2/3 = <strong>Rs80,000</strong>; ordinary depreciation is 80000 × 25% = <strong>Rs20,000</strong>. Rs60,000 remains after that deduction, while the separate deferred addition is Rs40,000.</p>" +
                        "<p>If both events instead occur in Baisakh, the recognized addition is <strong>Rs40,000</strong>, depreciation <strong>Rs10,000</strong> and deferred addition <strong>Rs80,000</strong>. The remainder is dealt with in the following income year under the provision, subject to the pool not dissolving. The deferred amount has not been written off or lost.</p>" +
                        "<p>These examples assume ordinary eligibility and no other assets, disposals or special adjustments. Fractions are not a freely chosen monthly straight-line method, and the inspected 2082 rule must not be advertised as a checked 2083 consolidation.</p>",
                    sources: []
                },
                {
                    id: "econ-after-tax-cashflow-and-conditional-shield",
                    title: "A depreciation tax shield is a conditional cash saving, not an automatic refund",
                    html: "<p><strong>Syllabus extension — hypothetical cash-flow model.</strong> The bank supplies no tax-shield calculation. Let R be cash operating receipts, O cash operating expenses, Dep an eligible tax-depreciation deduction and τ an applicable marginal rate. If that deduction actually reduces currently taxable profit at τ, and there are no other adjustments, <strong>tax = τ(R − O − Dep)</strong>.</p>" +
                        "<p>Operating cash after tax is <strong>CF = R − O − tax = (R − O)(1 − τ) + τDep</strong>. When starting from after-tax accounting profit, add back the book depreciation deducted there because it is not itself a current operating cash payment; this equals Dep only if book and tax depreciation coincide. Capital purchases, changes in working capital, financing and disposal tax effects must be included separately if present.</p>" +
                        "<p><strong>Hypothetical numerical assumptions:</strong> R = Rs80,000, O = Rs40,000, eligible Dep = Rs20,000 and τ = 25%, with sufficient taxable profit and no other adjustments. This τ is an invented illustration, <strong>not a stated Nepal personal or company rate</strong>. Tax is Rs5,000 and operating cash is <strong>Rs35,000</strong>. Without the deduction tax would be Rs10,000 and cash Rs30,000; the realized shield is <strong>τDep = Rs5,000</strong>.</p>" +
                        "<p>If deductions create or increase a loss, τDep is not automatically an immediate receipt or refund. Eligibility, loss-use rules, other constraints and actual payment timing govern realization. Recognize and discount any saving when it can actually be used, and verify the applicable legal edition before using the model for a real taxpayer.</p>",
                    sources: []
                }
            ],
            gaps: [
                "The nine assigned questions cover depreciation and value terminology, two lining benefit-cost claims and two LCCA concepts. They provide no complete NPV, IRR, MARR, discounted-payback, inflation or Nepal-tax dataset; those official-scope sections are labelled Syllabus extension.",
                "All added cash flows, alternative costs, rates, service lives, residual values, sensitivity cases and tax-shield figures are explicitly hypothetical. The repeated three-year example is one teaching case, not several additional bank questions.",
                "The lining stem does not specify the crop-benefit period, explicitly date maintenance or give salvage. B/C 0.323920 is conditional on annual benefit and maintenance plus hypothetical zero salvage; it is not a recovered uniquely specified bank result or support for stored 1.2.",
                "The sinking-fund question supports approximately Rs182 under end-year deposits, with full-precision result Rs182.1195457. Neither fund interest nor that payment establishes an accurate prediction of obsolescence or future replacement prices.",
                "LCCA comparisons require comparable service and a common horizon or justified repeatability. No actual Nepal project, activity schedule, economic discount rate, user-cost dataset or replacement forecast is supplied by these bank items.",
                "The legal evidence is the Income Tax Act 2058 incorporating Finance Act 2082, cross-checked with an older English edition through 2078. Finance Act 2083, current personal slabs, individual eligibility and complete disposal, loss, credit and special-allowance rules were not audited.",
                "FHWA's inspected public LCCA explanation is methodological guidance from another jurisdiction, not a Nepal tax or discount-rate mandate. Compound-interest and projection-of-cash-flow calculations here are explicit mathematical models, not official worked legal examples.",
                "Detailed risk management, project-financing ratios, tendering and contractual allocation remain within the separate AALL1004 scope. Sparse assigned questions do not mean NEC excludes the rest of AALL1002 from examination."
            ],
            cautions: [
                {
                    html: "<p><strong>Obsolescence is not measured by fund interest:</strong> the stored sinking-fund choice and explanation do not establish a universally most accurate method. A fund contribution meets an assumed accumulation target; functional or external obsolescence requires evidence of lost usefulness or economic value. The stored key remains unchanged.</p>",
                    sources: [{ id: "BASI674-00405", set: 31, question: 13 }]
                },
                {
                    html: "<p><strong>Sinking-fund arithmetic and dates:</strong> with C − S = Rs22,000, effective annual i = 0.05, n = 40 and end-year deposits, A = 1100/(1.05<sup>40</sup> − 1) = Rs182.1195457. The Rs182 option is valid rounding; Rs182.212 is not the exact result. A different deposit date, net return or target requires a different calculation.</p>",
                    sources: [{ id: "BASI674-00408", set: 32, question: 2 }]
                },
                {
                    html: "<p><strong>Terminology:</strong> Deerepitude in the stem is read as decrepitude, meaning physical ageing and deterioration. Functional obsolescence can occur without equivalent physical damage. Do not use the physical classification to infer a depreciation rate or a market value.</p>",
                    sources: [{ id: "BASI674-00409", set: 32, question: 3 }]
                },
                {
                    html: "<p><strong>Allocation versus value and cash:</strong> straight-line annual depreciation is (cost − residual)/life under the stated allocation model. Simplified book value is cost less accumulated depreciation, not automatically current market value. The annual expense is not another payment of the original capital cost, and it is not automatically the Nepal tax deduction.</p>",
                    sources: [
                        { id: "BASI674-00411", set: 32, question: 5 },
                        { id: "BASI674-00414", set: 32, question: 8 }
                    ]
                },
                {
                    html: "<p><strong>Lining B/C cannot be accepted as 1.2 from the stated numbers:</strong> if benefit and maintenance are annual, benefit is Rs0.90/m<sup>2</sup>/year. With hypothetical zero salvage, annual cost is Rs2.77846144/m<sup>2</sup>/year and B/C is 0.323920. The uniform 20 m perimeter cancels. The missing benefit period prevents a uniquely established annual calculation; do not silently invent it or choose an incorrect nearest option.</p>",
                    sources: [{ id: "IRRI951-00042", set: 5, question: 76 }]
                },
                {
                    html: "<p><strong>Highest ratio is not a universal optimum:</strong> mutually exclusive investments require comparison at a consistent MARR, horizon and service basis, normally using net present benefit or a valid incremental analysis. An option with lower individual B/C can produce greater net benefit. The simplified stored maximum-B/C answer must not override that distinction.</p>",
                    sources: [{ id: "IRRI951-00161", set: 16, question: 72 }]
                },
                {
                    html: "<p><strong>LCCA scope and sequence:</strong> cost comparison assumes comparable service. The inspected FHWA workflow identifies activities and their timing after alternative strategies and before cost estimation. The bank's broad next-step answer does not remove that intermediate work or make one abbreviated sequence universal. Separate agency cash expenditures from user costs.</p>",
                    sources: [
                        { id: "TRAN808-00283", set: 26, question: 90 },
                        { id: "TRAN808-00285", set: 27, question: 80 }
                    ]
                },
                {
                    html: "<p><strong>Tax-reference limit:</strong> Schedule 2 rates and timing here refer to the inspected Finance Act 2082 consolidation of the Income Tax Act 2058, not a checked Finance Act 2083 consolidation. The English reference is older and has known translation defects; the verified Nepali basis controls the paraphrases used here. No personal slabs or immediate-loss refund entitlement are asserted.</p>",
                    sources: []
                },
                {
                    html: "<p><strong>Syllabus-extension examples:</strong> the three-year NPV, IRR, interpolated payback, unequal-life comparison and tax shield are hypothetical teaching cases with no invented bank IDs. Strict end-year discounted payback is year 3; 2.8844 years is only the stated interpolation. Nonconventional cash flows require checking multiple roots or using NPV at the selected MARR.</p>",
                    sources: []
                }
            ],
            references: [
                {
                    title: "Inland Revenue Department — Income Tax Act 2058 incorporating Finance Act 2082, Nepali edition, Schedule 2 printed pages 165–170; primary edition checked in the supplied legal verification report on 6 September 2026, not audited through Finance Act 2083",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/%E0%A4%86%E0%A4%AF%E0%A4%95%E0%A4%B0%20%E0%A4%90%E0%A4%A8%2C%20%E0%A5%A8%E0%A5%A6%E0%A5%AB%E0%A5%AE%20(%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95%20%E0%A4%90%E0%A4%A8%2C%E0%A5%A8%E0%A5%A6%E0%A5%AE%E0%A5%A8%20%E0%A4%B2%E0%A5%87%20%E0%A4%97%E0%A4%B0%E0%A5%87%E0%A4%95%E0%A5%8B%20%E0%A4%B8%E0%A4%82%E0%A4%B6%E0%A5%8B%E0%A4%A7%E0%A4%A8%20%E0%A4%B8%E0%A4%B9%E0%A4%BF%E0%A4%A4)_7h85rod.pdf"
                },
                {
                    title: "Inland Revenue Department — The Income Tax Act, 2002 (2058), English edition through Finance Act 2078, Schedule 2 pages 233–241; older cross-check identified by the legal report, not current-law or flawless-translation authority",
                    url: "https://giwmscdnone.gov.np/media/pdf_upload/The%20Income%20Tax%20Act%2C%202002%20(2058)_xnyznu8.pdf"
                },
                {
                    title: "Federal Highway Administration — Improving Transportation Investment Decisions Through Life-Cycle Cost Analysis, public methodology explanation, page marked updated 16 November 2022; foreign guidance inspected for equal-service comparison and activity/timing/cost sequence",
                    url: "https://www.fhwa.dot.gov/pavement/lcca/lccafact/"
                }
            ]
        }
    });
})();