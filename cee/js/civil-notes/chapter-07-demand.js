(function () {
    "use strict";

    window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {};
    const registry = window.CIVIL_NOTE_TOPICS;
    Object.assign(registry, {
        ACiE0701: {
            code: "ACiE0701",
            questionCount: 79,
            blocks: [
                {
                    id: "demand-crop-soil-and-climate",
                    title: "Build demand from the crop, soil and climate",
                    html: "<p><strong>Irrigation demand is a time-dependent water deficit, not a fixed quantity attached to a crop name.</strong> First identify the crop and growth stage, the area actually irrigated, the root-zone condition, and the weather over the calculation period. Then determine how much usable water rainfall, soil storage and other sources already supply. Finally allow for delivery losses at the particular point where discharge is required.</p>" +
                        "<ul><li><strong>Crop:</strong> variety, planting date, canopy development, effective rooting depth and sensitivity to moisture stress affect both the amount and timing of water needed.</li><li><strong>Soil:</strong> water retention determines the usable reservoir; infiltration and drainage determine how quickly it can be replenished without excessive runoff or deep percolation.</li><li><strong>Climate:</strong> radiation, temperature, humidity and wind affect atmospheric demand, while the timing and effectiveness of rain change the irrigation deficit.</li></ul>" +
                        "<p>The bank's millet choice is interpretable as <strong>drought resistance</strong> among its listed crops. Resistance to scarce water is not resistance to flooding or prolonged submergence. Millet species, varieties and growth stages differ, so the choice does not establish a universal ranking under every stress. Rice is commonly grown in managed flooded fields, but non-flooded rice systems also exist; continuous standing water is not a biological necessity for every rice crop.</p>" +
                        "<p><small>These notes follow Chapter 7.1 water demand estimation. Source links identify related existing questions, including questions whose wording or working needs qualification. Added illustrations are explicitly labelled; they are not additional bank measurements, and stored answers are not changed.</small></p>",
                    sources: [
                        { id: "IRRI951-00012", set: 3, question: 69 },
                        { id: "IRRI951-00001", set: 2, question: 69 }
                    ]
                },
                {
                    id: "demand-command-area-and-intensity",
                    title: "Command area and irrigation intensity use different areas",
                    html: "<p><strong>Gross command area, GCA,</strong> is the total geographical area within the command of an irrigation system. <strong>Culturable or cultivable command area, CCA,</strong> excludes the portions classified as unculturable, such as settlements, roads and other non-cultivable land. Consequently <strong>GCA ≥ CCA</strong>; equality is possible if no area is excluded. A strict greater-than relation is not part of the definition.</p>" +
                        "<p>Within CCA, distinguish <strong>culturable cultivated area</strong>, actually brought under cultivation in the stated assessment, from <strong>culturable uncultivated area</strong>, which remains cultivable but is not then cultivated. Fallow cultivable land does not become unculturable merely because it is unused that season. Neither CCA nor the cultivated area automatically equals the area actually receiving irrigation.</p>" +
                        "<p>For a stated crop season, <strong>intensity = 100 A<sub>irrigated,season</sub>/CCA</strong>, with numerator and denominator in the same area units. Annual irrigation intensity sums the irrigated crop-season areas before dividing by CCA. Repeated cultivation of the same land in successive seasons is deliberately counted, so the annual percentage can exceed 100. State how perennial crops are counted and avoid duplicating them within one season.</p>" +
                        "<p><strong>Illustrative added area account:</strong> let GCA = 12000 ha and CCA = 10000 ha. Irrigating 6000 ha in Rabi and 7000 ha in Kharif gives <strong>60% and 70%</strong> seasonal intensities and <strong>130%</strong> annual intensity. This does not require 13000 distinct hectares of land. Dividing either seasonal area by 12000 ha would use the wrong denominator for CCA-based intensity.</p>",
                    sources: [
                        { id: "IRRI951-00222", set: 1, question: 74 },
                        { id: "IRRI951-00205", set: 20, question: 73 }
                    ]
                },
                {
                    id: "demand-crop-ratio-and-seasons",
                    title: "Crop ratio needs both an order and measured areas",
                    html: "<p><strong>Rabi</strong> generally describes the cooler-season cropping cycle and <strong>Kharif</strong> the monsoon-associated cycle in the regional terminology used by the bank. Their actual dates depend on location, climate and crop. Sugarcane and other long-duration crops can occupy land and require water during both cycles; they must be placed on a calendar rather than assigned to whichever season has spare capacity.</p>" +
                        "<p>The convention in the bank's definition question is <strong>crop ratio = Rabi irrigated area : Kharif irrigated area</strong>. If a question instead explicitly requests Kharif:Rabi, reverse the order. A ratio is dimensionless only because the two areas use the same units. It is a description of a particular cropping programme, not a fixed property of irrigation engineering.</p>" +
                        "<p><strong>Illustrative added calculation:</strong> using hypothetical Rabi and Kharif areas of 6000 and 7000 ha, Rabi:Kharif = <strong>6:7</strong>, while Kharif:Rabi = <strong>7:6</strong>. Equal duty for both seasons would make their separate seasonal discharges proportional to these areas, but unequal duties can reverse which season requires the larger discharge.</p>" +
                        "<p>The bank's separate 1:2 choice supplies neither areas nor a specified project assumption. It therefore cannot establish a universal Kharif:Rabi ratio. Keep the requested order visible throughout a calculation, and obtain actual areas before assigning a numerical crop ratio or selecting the governing season.</p>",
                    sources: [
                        { id: "IRRI951-00198", set: 19, question: 76 },
                        { id: "IRRI951-00218", set: 21, question: 74 }
                    ]
                },
                {
                    id: "demand-crop-base-and-kor-periods",
                    title: "Crop period, base period and kor period",
                    html: "<p>Time definitions determine which water depth belongs in a duty calculation. <strong>Crop period</strong> runs from sowing to harvesting. <strong>Base period B</strong>, in the bank's irrigation terminology, runs from the first watering counted for that crop to the last watering. It is the period associated with the quoted duty and delta, not automatically the whole calendar season.</p>" +
                        "<table><thead><tr><th scope='col'>Period</th><th scope='col'>What must be identified</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Crop period</th><td>The sowing and harvesting dates for the actual crop.</td></tr>" +
                        "<tr><th scope='row'>Base period</th><td>The first and last irrigations included in the water account; specify whether preparatory watering is counted.</td></tr>" +
                        "<tr><th scope='row'>Kor period</th><td>The critical interval within which the initial substantial watering or establishment requirement must be delivered; use its corresponding kor depth.</td></tr></tbody></table>" +
                        "<p>When first irrigation follows sowing and last irrigation precedes harvest, the crop period is longer than the base period. If pre-sowing irrigation is included, that ordering need not hold. The bank itself mentions a first watering before sowing in one explanation, so its other slightly-longer rule cannot be universal.</p>" +
                        "<p>A short kor period can impose a large delivery rate even when the full-season average requirement is modest. Do not pair a full-season delta with a kor period, or a kor depth with an unrelated base period. A diagram or dated list of events is often more reliable than memorising which period is supposedly always longer.</p>",
                    sources: [
                        { id: "IRRI951-00203", set: 20, question: 72 },
                        { id: "IRRI951-00221", set: 21, question: 77 }
                    ]
                },
                {
                    id: "demand-consumptive-use-and-evapotranspiration",
                    title: "Consumptive use is mainly evapotranspiration",
                    html: "<p><strong>Evapotranspiration, ET,</strong> combines evaporation from soil and water surfaces with transpiration through vegetation. <strong>Consumptive use, CU,</strong> is commonly approximated by ET; a more complete definition also includes the comparatively small amount incorporated into plant tissue or involved in growth. The important distinction is from water merely transported, temporarily stored, or passed to another part of the hydrologic system.</p>" +
                        "<p>Express CU as a depth over a stated cropped area and period, such as mm/day or cm over a month, or as an equivalent volume per unit area. <strong>1 ha = 10000 m<sup>2</sup></strong>, so <strong>1 mm over 1 ha = 10 m<sup>3</sup></strong> and <strong>1 cm over 1 ha = 100 m<sup>3</sup></strong>. A depth is not a discharge: time and area are still needed to obtain a flow rate.</p>" +
                        "<p>Consumptive use may be supplied by precipitation, irrigation, withdrawal from stored root-zone water, or groundwater contribution. It does not identify the source of supply. Infiltration is entry into the soil and may be the very process needed to replenish the roots; it is not itself an atmospheric consumption loss. Canal seepage and deep percolation are accounted for separately and may produce recoverable return flow.</p>" +
                        "<p><strong>Illustrative added conversion:</strong> 5 mm/day over 20 ha corresponds to 5 × 20 × 10 = <strong>1000 m<sup>3</sup>/day</strong> of ET. That is not automatically the required canal release, because useful rain can reduce irrigation demand while delivery losses can increase the upstream release needed to satisfy the remaining deficit.</p>",
                    sources: [
                        { id: "IRRI951-00004", set: 2, question: 72 },
                        { id: "IRRI951-00009", set: 2, question: 77 },
                        { id: "IRRI951-00182", set: 18, question: 72 },
                        { id: "IRRI951-00210", set: 20, question: 78 }
                    ]
                },
                {
                    id: "demand-reference-et-and-pan-coefficients",
                    title: "Do not confuse a crop coefficient with a pan coefficient",
                    html: "<p>For the standard, non-water-stressed crop-coefficient approach, <strong>ET<sub>c</sub> = K<sub>c</sub> ET<sub>o</sub></strong>. ET<sub>o</sub> is reference evapotranspiration, ET<sub>c</sub> is crop evapotranspiration, and the dimensionless K<sub>c</sub> represents the crop and growth stage relative to that reference. Water stress or other non-standard conditions require appropriate adjustment, not merely reuse of the unstressed rate.</p>" +
                        "<p>In a suitable pan-based estimation method, <strong>ET<sub>o</sub> = K<sub>p</sub> E<sub>pan</sub></strong>. E<sub>pan</sub> is measured pan evaporation and K<sub>p</sub> is the pan coefficient, influenced by the pan, exposure, surroundings, wind and humidity. Combining the two relationships gives <strong>ET<sub>c</sub> = K<sub>c</sub> K<sub>p</sub> E<sub>pan</sub></strong>. All depths or rates must refer to the same period.</p>" +
                        "<p><strong>Bank calculation with its intended interpretation:</strong> the stated consumptive-use coefficient of 0.80 must be a <em>combined pan-to-consumptive-use coefficient</em> for the direct multiplication 0.80 × 35 cm = <strong>28 cm for April</strong>. If 0.80 instead means K<sub>c</sub> alone, K<sub>p</sub> is still needed; the 28 cm result would then require an additional assumption about K<sub>p</sub>.</p>" +
                        "<p>Some crop coefficients exceed one during vigorous growth. Neither K<sub>c</sub> nor the actual comparison with a pan should be explained by claiming that every crop always uses less water than an equal area of open water. Identify the reference, coefficients and averaging period before multiplying any reported evaporation value.</p>",
                    sources: [{ id: "IRRI951-00014", set: 3, question: 71 }]
                },
                {
                    id: "demand-soil-water-forms",
                    title: "Soil-water forms are not exact plant-availability boundaries",
                    html: "<p>Water retention reflects gravity, capillary forces and adsorption to soil surfaces. <strong>Surface tension at curved air-water interfaces</strong>, together with wetting and adhesion to grains, helps retain water in small pores against gravity. Soil-water energy changes continuously as the soil dries; the traditional names below are useful descriptions, not sharply separated containers.</p>" +
                        "<table><thead><tr><th scope='col'>Traditional name</th><th scope='col'>Physical meaning and crop significance</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Gravitational or superfluous water</th><td>Drainable water moving mainly under gravity after wetting. It is not a dependable long-term root-zone reserve, although roots may use some while it remains present.</td></tr>" +
                        "<tr><th scope='row'>Capillary water</th><td>Water retained in pores by capillary forces. Much usable moisture lies in this range, but some capillary-held water is too tightly retained for effective crop extraction.</td></tr>" +
                        "<tr><th scope='row'>Hygroscopic water</th><td>Strongly adsorbed films associated with particle surfaces, generally unavailable to crop roots. Drying conditions determine how this water is measured or removed.</td></tr></tbody></table>" +
                        "<p>The bank's field-capillary wording points towards the usable moisture reservoir, but <strong>not all capillary water is readily available</strong>. The permanent wilting point is a crop-soil extraction threshold, not a statement that all remaining water has become purely hygroscopic. Water retained below that threshold need not belong to only one molecular category.</p>" +
                        "<p>Heating or oven drying can remove tightly held moisture, but the assertion that heating is the only possible means of removal is an oversimplification of a drying procedure. Chemically bound water is a separate concept, not the normal irrigation supply to roots. For irrigation calculations, use measured field-capacity and wilting-point contents with a compatible moisture basis rather than substituting these qualitative labels.</p>",
                    sources: [
                        { id: "IRRI951-00002", set: 2, question: 70 },
                        { id: "IRRI951-00005", set: 2, question: 73 },
                        { id: "IRRI951-00006", set: 2, question: 74 },
                        { id: "IRRI951-00184", set: 18, question: 74 },
                        { id: "IRRI951-00185", set: 18, question: 75 },
                        { id: "IRRI951-00196", set: 19, question: 74 },
                        { id: "IRRI951-00206", set: 20, question: 74 }
                    ]
                },
                {
                    id: "demand-field-capacity-and-root-zone",
                    title: "Field capacity and effective rooting depth",
                    html: "<p><strong>Field capacity, FC,</strong> describes water content after a wetted, well-drained soil has lost much of its freely draining water and downward drainage has markedly slowed. It is not saturation, when the pore space is filled with water. The bank's <strong>2–5 days</strong> is an indicative drainage interval, not a universal clock: texture, structure, profile layering and drainage conditions change the observed time.</p>" +
                        "<p>Both the amount of pore space and its size distribution matter. Large connected pores tend to drain readily; smaller pores retain water more strongly. Total porosity alone therefore does not predict plant-available storage or seepage. Field-capacity <em>water content</em> is a soil retention property, whereas the <em>depth of stored water in a root zone</em> also depends on how much soil the roots effectively exploit.</p>" +
                        "<p><strong>Effective root-zone depth Z<sub>r</sub></strong> is the depth used for crop water uptake and scheduling, not necessarily the depth of the single deepest root. Crop type and stage, soil structure, compaction, hardpan, subsoil formation, aeration and water-table position can restrict it. Yield is an outcome influenced by the root system and other conditions; a reported yield is not a direct specification of Z<sub>r</sub>.</p>" +
                        "<p>If moisture is measured gravimetrically, let w be water mass divided by dry soil mass, ρ<sub>b</sub> dry bulk density and ρ<sub>w</sub> water density. Then <strong>θ = w ρ<sub>b</sub>/ρ<sub>w</sub></strong> gives volumetric water content. Use fractions, not unconverted percentages, and consistent density units. Layered soils require layer-by-layer storage sums rather than assuming one moisture difference represents the whole profile.</p>",
                    sources: [
                        { id: "IRRI951-00100", set: 10, question: 79 },
                        { id: "IRRI951-00102", set: 11, question: 70 },
                        { id: "IRRI951-00200", set: 19, question: 78 }
                    ]
                },
                {
                    id: "demand-available-water-and-depletion",
                    title: "Available water, readily available water and current deficit",
                    html: "<p><strong>Available moisture content</strong> is the difference between field-capacity and permanent-wilting-point water contents on the same basis. To convert that difference into a water depth, FAO Irrigation and Drainage Paper 56, Chapter 8, equation 82 gives <strong>TAW = 1000(θ<sub>FC</sub> − θ<sub>WP</sub>)Z<sub>r</sub></strong>. TAW is total available water in mm; θ values are volumetric fractions in m<sup>3</sup>/m<sup>3</sup>; Z<sub>r</sub> is in m. The factor 1000 converts metres of water to millimetres.</p>" +
                        "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Definition and use</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>TAW</th><td>The root-zone reservoir between FC and PWP, not the amount that may always be removed without stress.</td></tr>" +
                        "<tr><th scope='row'>RAW = p TAW</th><td>Readily available water: the depletion allowance before water stress under the stated crop and demand conditions. Here p is the fraction depleted, not the fraction remaining.</td></tr>" +
                        "<tr><th scope='row'>D<sub>r</sub> = 1000(θ<sub>FC</sub> − θ)Z<sub>r</sub></th><td>Current root-zone depletion or soil-moisture deficit below FC, in mm, for a representative uniform profile within the FC-to-PWP range.</td></tr></tbody></table>" +
                        "<p>FAO-56 equation 83 defines RAW = p TAW. The depletion fraction <strong>p depends on crop and evaporative demand</strong>, with soil and management qualifications; it is not 0.5 for all crops. The bank's bridge wording for readily available moisture is imprecise: RAW is a threshold allowance, whereas current moisture deficiency measures today's shortfall from FC. Irrigating at that threshold and refilling to FC are two different decisions.</p>" +
                        "<p><strong>Illustrative added profile:</strong> take θ<sub>FC</sub> = 0.30, θ<sub>WP</sub> = 0.15 and Z<sub>r</sub> = 0.80 m. TAW = 1000 × 0.15 × 0.80 = <strong>120 mm</strong>. An explicitly assumed p = 0.40 gives <strong>RAW = 48 mm</strong>. If current θ = 0.25, D<sub>r</sub> = <strong>40 mm</strong>, leaving 8 mm of depletion before that threshold. None of these illustrative values prescribes p or root depth for a named crop.</p>",
                    sources: [
                        { id: "IRRI951-00008", set: 2, question: 76 },
                        { id: "IRRI951-00101", set: 11, question: 69 },
                        { id: "IRRI951-00186", set: 18, question: 76 },
                        { id: "IRRI951-00194", set: 19, question: 72 },
                        { id: "IRRI951-00201", set: 20, question: 70 },
                        { id: "IRRI951-00202", set: 20, question: 71 }
                    ]
                },
                {
                    id: "demand-effective-rain-and-water-balance",
                    title: "Effective rainfall belongs in a root-zone water balance",
                    html: "<p><strong>Effective rainfall R<sub>e</sub></strong> is the portion of rain that contributes usefully to meeting the crop's water requirement in the assessment. It depends on rainfall timing and intensity, runoff, infiltration, available root-zone storage, deep percolation and subsequent crop use. Total rain minus runoff is not automatically effective rainfall: infiltrated water can still drain below the roots or arrive when little storage is available.</p>" +
                        "<p><em>Official-scope calculation framework, FAO-56 Chapter 8, equation 85:</em> <strong>D<sub>r,i</sub> = D<sub>r,i−1</sub> − (P − RO)<sub>i</sub> − I<sub>i</sub> − CR<sub>i</sub> + ET<sub>c,i</sub> + DP<sub>i</sub></strong>. All terms are depths in mm over the same root-zone area and daily interval. D<sub>r,i−1</sub> is previous depletion; P is precipitation; RO is runoff; I is the infiltrated irrigation input after surface delivery losses; CR is capillary rise; ET<sub>c</sub> is crop evapotranspiration; DP is drainage below the root zone.</p>" +
                        "<p>Rain, irrigation and capillary rise <strong>decrease depletion</strong>; ET and drainage increase it. I is not the gross canal release. Deep percolation is represented explicitly, so do not subtract it once in an effective-rainfall estimate and again as the same DP term. In the simple drained-bucket model, excess above FC is assigned to drainage and depletion stays between zero and TAW; this modelling assumption is not a claim that every field physically reaches FC within one day. Root growth or significant lateral flows require additional accounting.</p>" +
                        "<p><strong>Illustrative added daily balance:</strong> previous depletion 35 mm, rain 12 mm, runoff 2 mm, infiltrated irrigation 20 mm, capillary rise 1 mm, ET 5 mm and no deep drainage give <strong>35 − (12 − 2) − 20 − 1 + 5 + 0 = 9 mm</strong> remaining depletion. A replenishment decision should use this remaining deficit, not total precipitation or total irrigation independently.</p>",
                    sources: [{ id: "IRRI951-00195", set: 19, question: 73 }]
                },
                {
                    id: "demand-irrigation-requirement-boundaries",
                    title: "Define CIR, NIR, FIR and GIR before comparing them",
                    html: "<p>Requirements expressed as equivalent depths must refer to the same crop area and time period. Their names do not replace a water budget. <strong>Consumptive irrigation requirement, CIR,</strong> is the portion of consumptive use to be met by irrigation after effective rain and other usable contributions. A simplified account is CIR = max[0, CU − R<sub>e</sub> − G − W<sub>soil</sub>], where G is usable groundwater contribution and W<sub>soil</sub> is the permitted net drawdown of initial soil storage during the period. Do not credit either contribution twice.</p>" +
                        "<table><thead><tr><th scope='col'>Term</th><th scope='col'>Boundary and stated convention</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>CIR</th><td>Irrigation-supplied consumptive needs after non-irrigation contributions.</td></tr>" +
                        "<tr><th scope='row'>NIR, net irrigation requirement</th><td>Net crop-and-soil irrigation need at the field. State whether restoring a target storage, land preparation or necessary leaching is included.</td></tr>" +
                        "<tr><th scope='row'>FIR, field irrigation requirement</th><td>The amount that must arrive at the field inlet, including the applicable field application allowance.</td></tr>" +
                        "<tr><th scope='row'>GIR, gross irrigation requirement</th><td>The upstream diversion or release needed to deliver FIR after the specified conveyance losses.</td></tr></tbody></table>" +
                        "<p>For a <strong>root-zone replenishment problem without separately specified purposeful throughflow</strong>, FIR = NIR/η<sub>a</sub> and GIR = FIR/η<sub>c</sub>, with efficiencies as fractions. If NIR includes leaching or preparation water, account for those components explicitly or use a compatible whole-field efficiency. A root-zone stored/delivered ratio alone must not treat purposeful leaching as stored water or count it twice as a loss.</p>" +
                        "<p>Under a consistent convention with non-negative additional needs and losses, the usual ordering is <strong>CIR ≤ NIR ≤ FIR ≤ GIR</strong>; equality is possible. The bank's NIR = CU − R<sub>e</sub> is the simple case with no other contributions or additional requirements. Its separate ordering that places NIR below CIR is not a general law, especially when its explanation gives them essentially the same definition. Canal demand must be evaluated at the canal's own supply boundary, not taken as crop ET alone.</p>",
                    sources: [
                        { id: "IRRI951-00183", set: 18, question: 73 },
                        { id: "IRRI951-00197", set: 19, question: 75 },
                        { id: "IRRI951-00028", set: 4, question: 73 },
                        { id: "IRRI951-00354", set: 33, question: 77 }
                    ]
                },
                {
                    id: "demand-irrigation-depth-and-frequency",
                    title: "Schedule by depletion, then count actual waterings",
                    html: "<p>For a crop supplied from a known usable root-zone reservoir, irrigation timing depends jointly on soil storage, crop uptake and climate. With a full initial reservoir, constant daily ET and negligible rain or other inputs, the interval to a depletion threshold is approximately <strong>T = RAW/ET<sub>c</sub></strong>. If depletion already equals D<sub>r,0</sub>, the remaining interval is (RAW − D<sub>r,0</sub>)/ET<sub>c</sub>, provided that numerator is positive. Otherwise irrigation is already due under the chosen threshold policy.</p>" +
                        "<p><strong>Bank scheduling calculation:</strong> TAW = 80 mm and irrigation is required when <strong>55% remains</strong>. Therefore the permitted depletion is 45%, giving RAW = 0.45 × 80 = <strong>36 mm</strong>. At 3 mm/day, T = 36/3 = <strong>12 days</strong>. Using 0.55 × 80 calculates remaining water, not the water consumed since the reservoir was full.</p>" +
                        "<p>The net depth to refill to FC is the <strong>current deficit</strong>, not the entire TAW. A partial refill may be chosen when rain is expected; gross delivery must then account for the applicable application efficiency. Reassess the interval when roots deepen, crop stage changes, rain arrives or the weather changes. A twelve-day result is not a universal crop calendar.</p>" +
                        "<p><strong>Bank seasonal-depth calculation:</strong> 140/28 = <strong>5</strong> assumed irrigation cycles, each supplying 7.5 cm, give Δ = 5 × 7.5 = <strong>37.5 cm</strong>. This follows the bank's five-watering convention. A base period defined strictly from the first event to the last contains intervals between events; whether an initial watering is additionally included must be stated. Do not automatically add or delete an endpoint watering merely to apply B/T.</p>",
                    sources: [
                        { id: "IRRI951-00214", set: 21, question: 70 },
                        { id: "IRRI951-00217", set: 21, question: 73 },
                        { id: "IRRI951-00215", set: 21, question: 71 }
                    ]
                },
                {
                    id: "demand-flow-duty-and-quantity-duty",
                    title: "Flow duty is area per discharge, not area per volume",
                    html: "<p><strong>Flow duty D</strong> is the area served by a unit continuous discharge during the specified base period while providing the corresponding required depth. In this bank it is expressed in <strong>ha/cumec</strong>, where one cumec is one m<sup>3</sup>/s. For area A in ha and a compatible discharge Q in m<sup>3</sup>/s, <strong>D = A/Q</strong> and <strong>Q = A/D</strong>. State the crop, period and measurement location with every quoted duty.</p>" +
                        "<p><strong>Quantity duty</strong> instead expresses area per specified volume, for example ha per million m<sup>3</sup>. It can be convenient for storage-release planning. Direct or flow irrigation commonly uses flow duty, but the essential distinction is the denominator and time basis, not simply the presence or absence of a dam. A volume is obtained from a discharge only after integrating it over time.</p>" +
                        "<p>For the same area and comparable period, a <strong>smaller flow duty means a larger required discharge</strong>. At fixed B it also corresponds to a larger depth. Comparisons between duties for different base periods or different supply points need those differences resolved first; minimum duty is not meaningful as a universal crop ranking detached from its definitions.</p>" +
                        "<p>The bank's statement that ordinary duty is irrigating capacity per unit volume confuses flow duty with quantity duty. Its other statement about lower upstream duty can still be correct: more upstream discharge is required to cover transmission losses for the same served area. Evaluate the two statements independently rather than accepting both because one is sound.</p>",
                    sources: [
                        { id: "IRRI951-00220", set: 21, question: 76 },
                        { id: "IRRI951-00208", set: 20, question: 76 },
                        { id: "IRRI951-00180", set: 18, question: 70 }
                    ]
                },
                {
                    id: "demand-duty-delta-dimensional-derivation",
                    title: "Derive the 8.64 and 864 factors from units",
                    html: "<p><strong>Delta Δ</strong> is the equivalent total water depth over the area for the stated period and supply boundary. A steady Q m<sup>3</sup>/s operating continuously for B days supplies V = Q × 86400B m<sup>3</sup>. Spread over A hectares, that gives <strong>Δ in m = Q × 86400B/(10000A)</strong>. Substituting D = A/Q gives the duty-delta relationship without relying on a memorised conversion.</p>" +
                        "<table><thead><tr><th scope='col'>Depth unit</th><th scope='col'>Relationship for B in days and D in ha/cumec</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Metres</th><td><strong>Δ<sub>m</sub> = 8.64B/D</strong>; equivalently D = 8.64B/Δ<sub>m</sub>.</td></tr>" +
                        "<tr><th scope='row'>Centimetres</th><td><strong>Δ<sub>cm</sub> = 864B/D</strong>; equivalently D = 864B/Δ<sub>cm</sub>.</td></tr>" +
                        "<tr><th scope='row'>Millimetres</th><td><strong>Δ<sub>mm</sub> = 8640B/D</strong>; equivalently D = 8640B/Δ<sub>mm</sub>.</td></tr></tbody></table>" +
                        "<p>Metres become centimetres by multiplying the depth by <strong>100, not 1000</strong>. The centimetre coefficient is therefore 864. The bank's formula choice using 864B/Δ with Δ in cm is sound, but its explanation of the conversion is not.</p>" +
                        "<p><strong>Bank numerical checks:</strong> B = 50 days and D = 500 ha/cumec give Δ = 8.64 × 50/500 = <strong>0.864 m = 86.4 cm</strong>. Conversely, 8.64 cm = 0.0864 m over 10 days gives D = 8.64 × 10/0.0864 = <strong>1000 ha/cumec</strong>, not the stored 100. No listed option equals that second result. Missing a zero is not an acceptable approximation or a reason to select a physically different duty.</p>",
                    sources: [
                        { id: "IRRI951-00179", set: 17, question: 78 },
                        { id: "IRRI951-00190", set: 19, question: 68 },
                        { id: "IRRI951-00191", set: 19, question: 69 }
                    ]
                },
                {
                    id: "demand-rice-kor-duty-and-seasonal-depth",
                    title: "Kor duty is a period-specific calculation, not a rice constant",
                    html: "<p>A kor depth is the water allocation to be supplied during the corresponding critical kor period. Substituting that <em>matched pair</em> into the duty-delta relationship gives a continuous-equivalent kor duty. To call it an outlet factor, the depth and any loss allowances must be expressed on a basis compatible with the outlet; add no hidden efficiency solely because the crop is rice.</p>" +
                        "<p><strong>Both bank kor examples:</strong> 190 mm = <strong>0.19 m = 19 cm</strong>, and B = 14 days. In metre units, D = 8.64 × 14/0.19 = <strong>636.6316 ha/cumec</strong>, approximately <strong>637 ha/cumec</strong>. In centimetre units, the same result is D = 864 × 14/19. The expression 8.64 × 14/19 uses the wrong coefficient for centimetres and cannot produce 637.</p>" +
                        "<p>The keyed result is therefore consistent with the stated data in both questions, although one explanation contains a unit/arithmetic error. This is different from a question whose correct numerical answer is missing altogether: retain the distinction between a valid key with faulty working and a conflicting key.</p>" +
                        "<p>The bank also quotes a rice seasonal delta near <strong>120 cm</strong>. Treat this as a conventional indicative total, not a fixed crop property or a permanent ponding depth. Season length, variety, effective rainfall, land preparation, percolation, leaching and management determine the actual water account. A seasonal total of 120 cm is not interchangeable with a 19 cm kor allocation, and neither alone establishes the maximum daily canal demand.</p>",
                    sources: [
                        { id: "IRRI951-00013", set: 3, question: 70 },
                        { id: "IRRI951-00193", set: 19, question: 71 },
                        { id: "IRRI951-00199", set: 19, question: 77 }
                    ]
                },
                {
                    id: "demand-duty-at-outlets-and-upstream-losses",
                    title: "Losses lower upstream duty and raise upstream discharge",
                    html: "<p><strong>Outlet factor or outlet discharge factor</strong> is duty at the canal outlet, conventionally the head of the watercourse in these questions. A duty quoted at a main canal or distributary head includes a different length of the delivery route. Compare the <em>same served area, requirement and period</em>; duties at unrelated branches cannot be ranked from their names alone.</p>" +
                        "<p>For a reach losing a fraction of its incoming flow, let η be the delivered fraction. Then <strong>Q<sub>down</sub> = η Q<sub>up</sub></strong>. Since D = A/Q for the same A, <strong>D<sub>up</sub> = η D<sub>down</sub></strong>, while Q<sub>up</sub> = Q<sub>down</sub>/η. Successive efficiencies multiply. Thus an upstream duty decreases when losses are included; dividing downstream duty by η reverses the physical result.</p>" +
                        "<p><strong>Bank 20-day, 80 cm case:</strong> field duty is 8.64 × 20/0.80 = <strong>216 ha/cumec</strong>. Assume the 20% watercourse loss and subsequent 10% distributary loss are each fractions of that reach's incoming flow.</p>" +
                        "<table><thead><tr><th scope='col'>Supply point</th><th scope='col'>Remaining delivery fraction to field</th><th scope='col'>Duty, ha/cumec</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Field</th><td>1.00</td><td><strong>216</strong></td></tr>" +
                        "<tr><th scope='row'>Watercourse head</th><td>0.80</td><td>216 × 0.80 = <strong>172.8</strong></td></tr>" +
                        "<tr><th scope='row'>Distributary head</th><td>0.90 × 0.80 = 0.72</td><td>216 × 0.72 = <strong>155.52</strong></td></tr></tbody></table>" +
                        "<p>The stored second value 194.4 does not follow from successive losses, and the explanation's use of 864 with metres is also incorrect. No offered pair gives both 172.8 and 155.52.</p>" +
                        "<p><strong>Bank 18-day transplantation case:</strong> the 60 cm requirement minus 10 cm of explicitly useful rain leaves <strong>50 cm = 0.50 m</strong> to be supplied. Field duty is 8.64 × 18/0.50 = <strong>311.04 ha/cumec</strong>. With 25% watercourse loss on incoming flow, head duty is 0.75 × 311.04 = <strong>233.28 ha/cumec</strong>. Deduct effective rain at the field requirement stage, then adjust for the specified conveyance reach once.</p>",
                    sources: [
                        { id: "IRRI951-00181", set: 18, question: 71 },
                        { id: "IRRI951-00211", set: 20, question: 79 },
                        { id: "IRRI951-00224", set: 22, question: 70 },
                        { id: "IRRI951-00159", set: 16, question: 70 },
                        { id: "IRRI951-00015", set: 3, question: 72 }
                    ]
                },
                {
                    id: "demand-discharge-volume-and-operating-time",
                    title: "Convert a water volume into an operating discharge",
                    html: "<p>The general volume relation is <strong>V = Q t</strong> for steady flow, with Q in m<sup>3</sup>/s and t in seconds. The equivalent depth in metres over A hectares is <strong>δ = Qt/(10000A)</strong>. Conversely, Q = 10000Aδ/t. If the flow varies, use the accumulated delivered volume rather than multiplying one spot discharge by the entire period.</p>" +
                        "<p><strong>Time factor f</strong> is the available operating time divided by the full calendar time in the demand interval. If V must be delivered during only that fraction, <strong>Q<sub>capacity</sub> = V/(f t<sub>calendar</sub>) = Q<sub>continuous</sub>/f</strong>. For f &lt; 1, required running capacity is higher, not lower. If a quoted practical duty already includes the operating schedule, do not apply the same time allowance again.</p>" +
                        "<p><strong>Bank March calculation:</strong> 40 ha receiving 20 mm uniformly over 31 days requires V = 40 × 10000 × 0.020 = <strong>8000 m<sup>3</sup></strong>. The available time for continuous operation is 31 × 24 × 3600 = <strong>2678400 s</strong>. Thus Q = 8000/2678400 = <strong>0.0029869 m<sup>3</sup>/s = 2.9869 L/s</strong>, or <strong>3 L/s</strong> to the requested nearest integer, with the stated negligible downstream losses.</p>" +
                        "<p><strong>Illustrative added operating restriction:</strong> if that same volume were available for delivery only 12 hours each day, f = 0.50 and the running flow would be approximately <strong>5.9737 L/s</strong>. This is not a datum in the bank. CCA, cropped area, duty, transmission losses and operating time must all be put on a compatible basis before selecting channel capacity.</p>",
                    sources: [
                        { id: "IRRI951-00011", set: 2, question: 79 },
                        { id: "IRRI951-00212", set: 21, question: 68 }
                    ]
                },
                {
                    id: "demand-efficiency-boundaries-and-gross-depth",
                    title: "Application, storage and conveyance efficiencies have different denominators",
                    html: "<p>Let V<sub>h</sub> be the volume released at the selected upstream point, V<sub>f</sub> the volume delivered to the field, V<sub>s</sub> the irrigation water usefully stored in the crop root zone, and V<sub>def</sub> the root-zone deficit before irrigation. Use the same event, area and accounting boundaries. Stored water means replenishment of the useful deficit, not every litre that temporarily enters a saturated profile.</p>" +
                        "<table><thead><tr><th scope='col'>Measure</th><th scope='col'>Fractional definition</th><th scope='col'>Question answered</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Conveyance η<sub>c</sub></th><td>V<sub>f</sub>/V<sub>h</sub></td><td>How much released water reaches the field?</td></tr>" +
                        "<tr><th scope='row'>Application η<sub>a</sub></th><td>V<sub>s</sub>/V<sub>f</sub></td><td>How much delivered water replenishes useful root-zone storage?</td></tr>" +
                        "<tr><th scope='row'>Storage η<sub>s</sub></th><td>V<sub>s</sub>/V<sub>def</sub></td><td>How completely was the pre-irrigation deficit refilled?</td></tr></tbody></table>" +
                        "<p>FAO Paper 45, section 4.2, distinguishes application efficiency from <strong>water requirement efficiency</strong>, also called storage efficiency. Uniformity is another measure again. For the above two consecutive delivery stages, overall root-zone delivery efficiency is <strong>η<sub>overall</sub> = η<sub>c</sub>η<sub>a</sub> = V<sub>s</sub>/V<sub>h</sub></strong>; storage efficiency and uniformity are not automatically additional multipliers.</p>" +
                        "<p><strong>Bank depth example, conditional interpretation:</strong> if the stated irrigation efficiency of 80% means <em>application</em> efficiency, the 16 cm is net root-zone replenishment, and the requested outlet is upstream of a separate 20%-loss conveyance reach, η<sub>overall</sub> = 0.80 × 0.80 = <strong>0.64</strong>. Required release depth is 16/0.64 = <strong>25 cm</strong>. If irrigation efficiency already means the overall value, 16/0.80 = <strong>20 cm</strong>; applying conveyance loss again would double-count it.</p>" +
                        "<p><strong>Illustrative added distinction:</strong> delivering and retaining 80 m<sup>3</sup> against a 100 m<sup>3</sup> deficit gives application efficiency 100% but storage efficiency 80%. Excellent retention of a small irrigation does not prove adequate replenishment.</p>",
                    sources: [
                        { id: "IRRI951-00188", set: 18, question: 78 },
                        { id: "IRRI951-00189", set: 18, question: 79 },
                        { id: "IRRI951-00016", set: 3, question: 73 }
                    ]
                },
                {
                    id: "demand-field-application-volume-example",
                    title: "Application efficiency from field flow and measured storage",
                    html: "<p>A field application calculation compares two <strong>volumes</strong>, even if the measurements arrive as discharge, area and depth. Convert hours to seconds and hectares to square metres before taking a ratio. Soil observations must represent irrigation-derived storage over the relevant root zone; initial moisture and concurrent rain, uptake or drainage must be distinguished when interpreting actual field measurements.</p>" +
                        "<p><strong>Bank 32 ha field:</strong> 10 m<sup>3</sup>/s delivered for 4 hours gives <strong>V<sub>f</sub> = 10 × 4 × 3600 = 144000 m<sup>3</sup></strong>. Taking the stated 0.30 m as the depth added to useful root-zone storage gives <strong>V<sub>s</sub> = 32 × 10000 × 0.30 = 96000 m<sup>3</sup></strong>.</p>" +
                        "<p>Application efficiency is therefore <strong>η<sub>a</sub> = 96000/144000 = 0.6667 = 66.67%</strong>. As a depth check, delivered depth is 144000/320000 = <strong>0.45 m</strong>, while retained depth is 0.30 m. The unretained difference is <strong>0.15 m = 48000 m<sup>3</sup></strong>. That residual alone does not distinguish runoff from deep percolation or other losses.</p>" +
                        "<p>The data do not provide the pre-irrigation deficit, so <strong>storage efficiency cannot be inferred</strong> from the 66.67% application result. Likewise, no upstream release is supplied for calculating conveyance efficiency. Keep the denominator tied to the requested efficiency instead of treating any water ratio as interchangeable.</p>",
                    sources: [{ id: "IRRI951-00192", set: 19, question: 70 }]
                },
                {
                    id: "demand-tank-to-field-efficiency-example",
                    title: "Separate tank release, field delivery and root-zone storage",
                    html: "<p>The tank example contains two measurement sections: <strong>120 L/s at the tank</strong> and <strong>100 L/s arriving at the field</strong>. Application efficiency uses the second. Assume steady rates over the same eight-hour event, negligible change in conveyance storage, and no unmeasured inflows. The six-kilometre separation identifies a conveyance reach but is not itself an efficiency formula.</p>" +
                        "<table><thead><tr><th scope='col'>Water account</th><th scope='col'>Eight-hour calculation</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Tank release</th><td>0.120 × 8 × 3600 = <strong>3456 m<sup>3</sup></strong>.</td></tr>" +
                        "<tr><th scope='row'>Field delivery</th><td>0.100 × 8 × 3600 = <strong>2880 m<sup>3</sup></strong>.</td></tr>" +
                        "<tr><th scope='row'>Estimated root-zone storage</th><td>2880 − 800 runoff = <strong>2080 m<sup>3</sup></strong>, only if other field losses are negligible.</td></tr></tbody></table>" +
                        "<p>Under that explicit assumption, <strong>η<sub>a</sub> = 2080/2880 = 72.222%</strong>. Separately, <strong>η<sub>c</sub> = 2880/3456 = 83.333%</strong>, and overall tank-to-root-zone efficiency is <strong>2080/3456 = 60.185%</strong>. The volume accounting closes: 3456 = 576 conveyance loss + 800 runoff + 2080 retained. Dividing retained water by tank release answers the overall question, not the application question.</p>" +
                        "<p>Over the stated 2.5 ha, the assumed retained depth is 2080/25000 = <strong>0.0832 m = 83.2 mm</strong>. If water also drains below the roots, evaporates during the event or remains in unaccounted surface storage, field delivery minus runoff is not all useful root-zone storage. The bank's 72.22% thus needs its unspoken no-other-loss assumption; it is not established solely by knowing runoff.</p>",
                    sources: [{ id: "IRRI951-00207", set: 20, question: 75 }]
                },
                {
                    id: "demand-distribution-efficiency-and-uniformity",
                    title: "Uniform distribution does not prove loss-free application",
                    html: "<p>For the bank's mean-deviation distribution measure, let d̄ be the mean comparable depth and y the <strong>mean absolute deviation</strong>, y = Σ|d<sub>i</sub> − d̄|/n for n equal-area observations. Its fractional coefficient is <strong>η<sub>d</sub> = 1 − y/d̄</strong>, with a positive mean and identical units for y and d̄. Signed deviations would cancel and incorrectly report perfect uniformity for every dataset.</p>" +
                        "<p><strong>Bank calculation:</strong> d̄ = 1.5 cm and y = 0.1 cm give 1 − 0.1/1.5 = <strong>0.9333 = 93.33%</strong>. The current stored choice 0.93 is consistent. The old printed 0.87 mentioned in the explanation is not the current key and does not follow from the supplied values.</p>" +
                        "<p>Equal penetration implies this coefficient equals one only when penetration represents equal comparable stored depths, as in the bank's simplified uniform-soil interpretation. It does <strong>not</strong> establish that all delivered water was retained. <strong>Illustrative added example:</strong> suppose 120 mm is delivered to the field and entirely infiltrates uniformly, with no surface runoff or other surface loss. The identical root zones can retain only 60 mm, and the other 60 mm drains deeply. Spatial uniformity is 100%, application efficiency is <strong>50%</strong>, and the 60 mm deficit is nevertheless fully refilled.</p>" +
                        "<p>FAO Paper 45, section 4.2.1, also discusses <strong>low-quarter distribution uniformity</strong>, DU<sub>LQ</sub> = mean infiltrated depth in the least-watered quarter divided by the whole-field mean. Its absolute/minimum-depth index uses another numerator. These are not identical to the bank's mean-absolute-deviation coefficient. State the metric, sampling weights and whether depths are applied, infiltrated or stored before comparing reported percentages.</p>",
                    sources: [
                        { id: "IRRI951-00017", set: 3, question: 74 },
                        { id: "IRRI951-00187", set: 18, question: 77 }
                    ]
                },
                {
                    id: "demand-canal-loss-processes-and-controls",
                    title: "Distinguish seepage, percolation, wetting and evaporation",
                    html: "<p>Canal delivery can be reduced by <strong>seepage through the wetted boundary</strong> and <strong>evaporation from exposed water</strong>, as emphasised by the bank. Initial wetting of dry banks or bed also takes water into storage. Percolation describes movement through soil, often downward; it can be part of the same seepage pathway rather than a second independent volume to add to seepage loss.</p>" +
                        "<table><thead><tr><th scope='col'>Process</th><th scope='col'>Important controls</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Seepage and transmission through soil</th><td>Hydraulic conductivity, pore connectivity, wetted area, hydraulic gradient, lining condition and water properties such as viscosity.</td></tr>" +
                        "<tr><th scope='row'>Groundwater interaction</th><td>Relative canal and groundwater levels affect the direction and magnitude of exchange. A high water table can reduce outward gradients or produce a gaining reach.</td></tr>" +
                        "<tr><th scope='row'>Open-water evaporation</th><td>Available energy, temperature, humidity, wind and exposed surface area; these must be considered together under the actual weather conditions.</td></tr></tbody></table>" +
                        "<p>Prevailing wind is not normally a direct soil-seepage parameter in the bank's comparison; it primarily affects evaporation. Conversely, soil porosity is not a direct control of evaporation from an otherwise comparable open-water surface. Do not extend that statement to evaporation from drying soil, where water supply through the pore system matters.</p>" +
                        "<p>The bank uses percolation for sustained passage from a canal towards the water table. That is a possible flow regime, not a universal requirement that percolating water always has an uninterrupted saturated connection to groundwater. For a demand budget, identify each actual volume once, distinguish temporary storage from continuing loss, and avoid summing overlapping process names.</p>",
                    sources: [
                        { id: "IRRI951-00150", set: 15, question: 72 },
                        { id: "IRRI951-00151", set: 1, question: 71 },
                        { id: "IRRI951-00152", set: 15, question: 73 },
                        { id: "IRRI951-00153", set: 15, question: 74 }
                    ]
                },
                {
                    id: "demand-seepage-reduction-and-reach-balance",
                    title: "Evaluate seepage before choosing a loss-reduction measure",
                    html: "<p>The bank's Etcheverry-and-Harding questions contrast relatively permeable <strong>loose sandy soil</strong> with less permeable materials. Intact low-permeability rock can give small losses; an impervious clay loam is the low-loss choice in another restricted option set. These are qualitative comparisons, not verified numerical ranges or a universal order for all natural ground. Fractured rock can transmit substantial water, and shrinkage cracks in dry black cotton soil or heavy clay can cause rapid initial leakage despite a low-permeability intact matrix.</p>" +
                        "<p>A stable silt seal can reduce bed seepage, so a new unsealed canal may lose more than a suitably silted reach. More silt or higher velocity does not invariably reduce loss: erosion can remove a seal, and changes in depth, wetted perimeter or hydraulic gradient change the result. A soil name or velocity alone is inadequate evidence for a design loss allowance.</p>" +
                        "<p><strong>Canal lining primarily reduces seepage</strong>; it does not remove open-water evaporation. Joints, cracks, damage and maintenance condition prevent any universal zero-seepage promise. For a fixed crop requirement and period, improving conveyance efficiency increases head duty because D<sub>head</sub> = η<sub>c</sub>D<sub>field</sub>. Whether lining is worthwhile also depends on cost, operation and the effects on usable groundwater recharge.</p>" +
                        "<p><strong>Inflow-outflow reach balance:</strong> over one observation interval, let V<sub>in</sub> be upstream inflow, V<sub>lat</sub> measured lateral inflow, V<sub>rain</sub> rain falling on the reach, V<sub>out</sub> downstream outflow, V<sub>w</sub> authorised withdrawals, V<sub>evap</sub> evaporation and ΔS the increase in reach storage. Then estimated <strong>V<sub>seep</sub> = V<sub>in</sub> + V<sub>lat</sub> + V<sub>rain</sub> − V<sub>out</sub> − V<sub>w</sub> − V<sub>evap</sub> − ΔS</strong>. All are volumes in the same units. Integrated flows or a sufficiently steady test are needed; measurement error can dominate a small residual.</p>" +
                        "<p>A raw difference between inlet and outlet discharge is not automatically seepage. Nor is every transmission loss a loss of water from the river basin: some leakage recharges groundwater or returns downstream and may be recoverable, subject to timing, location and quality. Demand at the canal head must cover the delivery loss even when the wider basin account recognises later reuse.</p>",
                    sources: [
                        { id: "IRRI951-00128", set: 13, question: 73 },
                        { id: "IRRI951-00129", set: 13, question: 74 },
                        { id: "IRRI951-00154", set: 15, question: 75 },
                        { id: "IRRI951-00155", set: 15, question: 76 },
                        { id: "IRRI951-00156", set: 15, question: 77 },
                        { id: "IRRI951-00157", set: 15, question: 78 },
                        { id: "IRRI951-00223", set: 21, question: 78 }
                    ]
                },
                {
                    id: "demand-simultaneous-peak-canal-discharge",
                    title: "Canal capacity follows the peak simultaneous gross demand",
                    html: "<p>Prepare crop demands on a common calendar, convert each to the required gross flow at the section being sized, and take the <strong>largest simultaneous total</strong>. In symbols, Q<sub>design</sub> = max over t of ΣQ<sub>j,head</sub>(t), after the appropriate loss and operating-time allowances. This is the bank's keenest or maximum irrigation demand, not the seasonal average, maximum river flood, or the maximum ET of one crop considered in isolation.</p>" +
                        "<p>Kor demand may govern when a substantial depth must be delivered during a short establishment window. Kharif kor demand governs only if its calculated peak is the greatest in the actual plan. Effective rain, Rabi area, crop mix, planting dates and delivery schedules can make another period critical. A canal is not universally sized from Kharif merely because the bank selects that season in a simplified question.</p>" +
                        "<p>For seasonal Rabi and Kharif crops plus perennial sugarcane, compare <strong>Q<sub>Rabi</sub> + Q<sub>sugar,Rabi</sub></strong> with <strong>Q<sub>Kharif</sub> + Q<sub>sugar,Kharif</sub></strong>. Sugarcane demand can vary between the seasons. Do not add non-overlapping Rabi and Kharif peaks and compare that sum with sugarcane alone; equally, max(Rabi, Kharif, sugarcane) omits concurrent demands.</p>" +
                        "<table><thead><tr><th scope='col'>Illustrative added period</th><th scope='col'>Flows already at the same design section</th><th scope='col'>Simultaneous total</th></tr></thead><tbody>" +
                        "<tr><th scope='row'>Rabi</th><td>1.8 seasonal + 0.4 sugarcane m<sup>3</sup>/s</td><td><strong>2.2 m<sup>3</sup>/s</strong></td></tr>" +
                        "<tr><th scope='row'>Kharif</th><td>2.0 seasonal + 0.7 sugarcane m<sup>3</sup>/s</td><td><strong>2.7 m<sup>3</sup>/s</strong></td></tr></tbody></table>" +
                        "<p>The added illustration governs at 2.7 m<sup>3</sup>/s, with its loss and time allowances already included in the listed flows. A real assessment must check other overlapping periods too. Staggered planting or rotation can change simultaneity, but those scheduling assumptions must be stated and feasible rather than invented to reduce capacity.</p>",
                    sources: [
                        { id: "IRRI951-00024", set: 4, question: 69 },
                        { id: "IRRI951-00026", set: 4, question: 71 },
                        { id: "IRRI951-00158", set: 1, question: 72 },
                        { id: "IRRI951-00209", set: 20, question: 77 }
                    ]
                },
                {
                    id: "demand-command-discharge-and-missing-kor-data",
                    title: "Work from irrigated area to head discharge without inventing data",
                    html: "<p><strong>Bank CCA calculation:</strong> a 60000 ha command with Kharif intensity 60% has A = 0.60 × 60000 = <strong>36000 ha</strong> to irrigate. If the quoted 2000 ha/cumec duty applies at the field-side delivery point, Q<sub>field</sub> = 36000/2000 = <strong>18 m<sup>3</sup>/s</strong>. With 30% conveyance loss measured against incoming head flow, 0.70Q<sub>head</sub> = 18, so <strong>Q<sub>head</sub> = 25.7143 m<sup>3</sup>/s</strong>, rounded to the requested integer <strong>26</strong>.</p>" +
                        "<p>The result assumes that the duty does <em>not already include</em> those conveyance losses and that no separate operating-time restriction must be applied. If 2000 ha/cumec were already a canal-head duty, A/D would be the head flow and dividing by 0.70 again would double-count loss. A rounded MCQ answer is not a complete hydraulic design criterion.</p>" +
                        "<p><strong>The other bank case supplies only 2400 ha Kharif and 1800 ha Rabi.</strong> It requests suitable assumed kor depths and periods but does not specify them. The method is D<sub>K</sub> = 8.64B<sub>K</sub>/Δ<sub>K</sub>, D<sub>R</sub> = 8.64B<sub>R</sub>/Δ<sub>R</sub>, followed by Q<sub>K</sub> = 2400/D<sub>K</sub> and Q<sub>R</sub> = 1800/D<sub>R</sub>. Convert both to distributary-head demands before comparing the seasons. The keyed 2.08 m<sup>3</sup>/s is <strong>not uniquely recoverable</strong> from the supplied areas.</p>" +
                        "<p><strong>Conditional illustration with invented kor data, not reconstructed source facts:</strong> suppose Kharif needs 0.18 m in 18 days and Rabi 0.12 m in 24 days, with continuous supply and no intervening losses. Then D<sub>K</sub> = <strong>864</strong> and D<sub>R</sub> = <strong>1728 ha/cumec</strong>. The flows are <strong>2.7778</strong> and <strong>1.0417 m<sup>3</sup>/s</strong>, so 2.7778 governs this hypothetical case. These assumptions demonstrate the workflow and underdetermination; they do not validate the stored 2.08.</p>",
                    sources: [
                        { id: "IRRI951-00213", set: 21, question: 69 },
                        { id: "IRRI951-00036", set: 5, question: 70 }
                    ]
                },
                {
                    id: "demand-water-availability-and-productivity",
                    title: "A feasible, productive supply is not simply the largest supply",
                    html: "<p>Increasing water supply can relieve moisture stress and raise yield, but response depends on timing, soil, crop and other limitations. Excessive irrigation can cause poor root aeration, waterlogging, nutrient leaching and, under unsuitable drainage conditions, salinity problems. Yield may plateau or decline; the bank's increase-then-decrease trend is a useful warning, not a universal measured curve or a prescribed quantity for every crop.</p>" +
                        "<p><strong>Water productivity</strong> relates production to an explicitly named water denominator. If yield Y is in kg/ha and irrigation volume W is in m<sup>3</sup>/ha, Y/W has units <strong>kg/m<sup>3</sup></strong>, not percent. ET-based productivity uses consumptively used water instead of applied irrigation and can give a different value. Neither is identical to the volumetric application, storage or conveyance efficiencies.</p>" +
                        "<p><strong>Illustrative added comparison:</strong> 5000 kg/ha produced with 10000 m<sup>3</sup>/ha gives <strong>0.50 kg/m<sup>3</sup></strong>; 4800 kg/ha with 6000 m<sup>3</sup>/ha gives <strong>0.80 kg/m<sup>3</sup></strong>. The second has lower yield per hectare but greater irrigation-water productivity. Choosing between them requires land and water constraints, crop value, water and energy costs, and risk. Maximum yield, maximum yield per unit water and maximum profit are distinct objectives.</p>" +
                        "<p><em>Official-syllabus extension: water availability and feasibility.</em> Compare the period-by-period gross requirement with dependable usable surface-water supply, permissible groundwater abstraction, storage releases and actual operating hours. Check dry-season and drought conditions, competing allocations, applicable water rights, environmental obligations, water quality and conveyance constraints. Annual runoff or a river's maximum flow is not evidence that water will be available during the demand peak.</p>" +
                        "<p>If demand exceeds feasible supply, reconsider cropped area, crop mix, planting dates, rotation, storage or explicitly planned deficit irrigation rather than pretending a larger canal creates water. The relevant objective may be maximum total production or net benefit under a water limit; it does not universally mean applying the maximum available water. The bank contains no project-specific supply series, allocation decision or cost curve from which an optimum can be calculated.</p>",
                    sources: [
                        { id: "IRRI951-00178", set: 17, question: 77 },
                        { id: "IRRI951-00225", set: 22, question: 71 }
                    ]
                }
            ],
            gaps: [
                "No project-specific dependable-flow series, drought analysis, reservoir balance, groundwater abstraction limit, water-right allocation or cost curve is supplied. The water-availability and economic-planning discussion is an official-syllabus extension, not a new legal rule or a verified project supply assessment.",
                "The 2400 ha Kharif/1800 ha Rabi case omits its assumed kor depths, kor periods, operating schedule and head-loss basis. Its 2.08 cumec key is not uniquely recoverable. The separate Kharif:Rabi ratio question supplies no areas or project convention to establish 1:2.",
                "No measured soil-retention profile, bulk density, crop rooting history, depletion-fraction schedule or local crop/pan coefficients is supplied. Added TAW, RAW, moisture-deficit and daily-balance numbers teach the FAO framework and are not bank measurements or crop-specific scheduling prescriptions.",
                "Several calculations leave their accounting boundaries implicit: irrigation efficiency may mean application or overall efficiency, duty may already include conveyance loss, and runoff-only field accounting omits possible deep drainage and evaporation. The stated numerical results are conditional on the explicitly identified interpretation.",
                "The bank supplies no complete crop-demand calendar, simultaneous perennial-crop schedule or operating-hour record. Added season-combination and half-day-operation examples illustrate peak-capacity methods rather than recovered data, and seasonal watering counts still require an endpoint convention.",
                "The original Etcheverry-and-Harding numerical conveyance-loss ranges and site measurements are not provided or verified. No measured reach hydrographs, withdrawals, evaporation or storage changes establish an actual seepage rate. Soil and lining comparisons are qualitative; leakage may be recoverable elsewhere in the basin."
            ],
            cautions: [
                {
                    html: "<p><strong>Crop-water wording:</strong> millet is the bank's intended drought-resistant choice, not a demonstrated winner for flood or submergence resistance. Rice does not universally require continuous standing water, and its quoted 120 cm seasonal delta is only an indicative convention. Variety, climate, period, effective rain and cultivation method must be specified before using a crop name to assign a water depth.</p>",
                    sources: [
                        { id: "IRRI951-00001", set: 2, question: 69 },
                        { id: "IRRI951-00199", set: 19, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Area definitions:</strong> GCA is at least as large as CCA, not necessarily strictly larger; equality occurs if there is no excluded unculturable land. Cultivable but currently uncultivated land still belongs to CCA. Seasonal irrigation intensity uses irrigated seasonal area divided by CCA, while annual intensity can exceed 100% through repeated crop-season use of the same land.</p>",
                    sources: [
                        { id: "IRRI951-00222", set: 1, question: 74 },
                        { id: "IRRI951-00205", set: 20, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Crop-ratio ambiguity:</strong> the definition question uses Rabi:Kharif, but the other stem requests Kharif:Rabi. Neither direction establishes a fixed 1:2 ratio without areas or an explicit project assumption. The second explanation's appeal to a typical regional ratio is not supplied evidence. State the requested order and calculate from the actual irrigated areas.</p>",
                    sources: [
                        { id: "IRRI951-00198", set: 19, question: 76 },
                        { id: "IRRI951-00218", set: 21, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Period and endpoint conventions:</strong> crop period is sowing to harvest; base period uses the first and last counted waterings. Pre-sowing watering can change their relative lengths, so crop period is not invariably longer. The wheat result <strong>140/28 × 7.5 = 37.5 cm</strong> assumes five waterings. B/T counts intervals or supply cycles; a separately counted initial watering cannot be added or omitted without a stated event convention.</p>",
                    sources: [
                        { id: "IRRI951-00203", set: 20, question: 72 },
                        { id: "IRRI951-00221", set: 21, question: 77 },
                        { id: "IRRI951-00215", set: 21, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Consumptive use is not necessarily irrigation-only:</strong> CU is mainly evaporation plus transpiration, with a small biomass/metabolic allowance under the fuller definition. It may be supplied by rain and stored soil water as well as irrigation. The full-growth-period question's irrigation-water wording is therefore imprecise if read literally as irrigation alone: CIR is the irrigation-supplied consumptive component after other contributions. Infiltration and conveyance losses are not themselves ET.</p>",
                    sources: [
                        { id: "IRRI951-00004", set: 2, question: 72 },
                        { id: "IRRI951-00009", set: 2, question: 77 },
                        { id: "IRRI951-00182", set: 18, question: 72 },
                        { id: "IRRI951-00183", set: 18, question: 73 },
                        { id: "IRRI951-00210", set: 20, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Pan-coefficient interpretation:</strong> <strong>0.80 × 35 = 28 cm</strong> follows only when 0.80 is the combined consumptive-use/pan coefficient, or another explicit assumption makes that multiplication valid. Normally ET<sub>c</sub> = K<sub>c</sub>ET<sub>o</sub> and ET<sub>o</sub> = K<sub>p</sub>E<sub>pan</sub>. A crop coefficient alone does not eliminate the pan coefficient. Crop coefficients can exceed one; crops are not universally below pan evaporation.</p>",
                    sources: [{ id: "IRRI951-00014", set: 3, question: 71 }]
                },
                {
                    html: "<p><strong>Retention categories are not exact extraction limits:</strong> surface tension and wetting explain capillary retention, but not all capillary water is readily available. The field-capillary label does not make all water at FC immediately usable without stress. PWP is not synonymous with pure hygroscopic water, and the tightly held water remaining there does not occupy only one physical category. Oven drying is a measurement/removal method, not proof that heating is the sole possible removal mechanism.</p>",
                    sources: [
                        { id: "IRRI951-00002", set: 2, question: 70 },
                        { id: "IRRI951-00006", set: 2, question: 74 },
                        { id: "IRRI951-00184", set: 18, question: 74 },
                        { id: "IRRI951-00185", set: 18, question: 75 },
                        { id: "IRRI951-00196", set: 19, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Drainage qualifications:</strong> gravitational water is drainable, but some may be used while present; it does not always disappear before any root uptake. Field capacity is a drained retention condition, not saturation. The bank's 2–5 days is indicative and varies with the soil profile and drainage. A simple daily balance that assigns excess water to same-day drainage is a model assumption, not a universal field observation.</p>",
                    sources: [
                        { id: "IRRI951-00005", set: 2, question: 73 },
                        { id: "IRRI951-00206", set: 20, question: 74 },
                        { id: "IRRI951-00102", set: 11, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>RAW is not today's deficit:</strong> the bank's bridge description lacks a precise definition. RAW = p TAW is an allowable depletion threshold; current deficit uses FC minus current moisture content over the effective root zone. The FAO formula's θ values are volumetric fractions and Z<sub>r</sub> is in metres for a result in millimetres. Do not insert percentages directly or use the same p = 0.5 for every crop and climate.</p>",
                    sources: [
                        { id: "IRRI951-00101", set: 11, question: 69 },
                        { id: "IRRI951-00194", set: 19, question: 72 },
                        { id: "IRRI951-00201", set: 20, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Effective rainfall is not just rain minus runoff:</strong> the remaining infiltrated rain can exceed available storage and drain below the roots. Timing, storage and crop use determine the useful contribution. In a detailed root-zone balance using P − RO and a separate DP term, avoid subtracting the same deep-percolation loss again through an already netted rainfall estimate.</p>",
                    sources: [{ id: "IRRI951-00195", set: 19, question: 73 }]
                },
                {
                    html: "<p><strong>Requirement-order conflict:</strong> the bank's increasing sequence with NIR below CIR is not a general consequence of its own definitions. With consistent boundaries and non-negative extras, <strong>CIR ≤ NIR ≤ FIR ≤ GIR</strong>, with equality where no additional need or loss separates stages. NIR = CU − effective rain is only a simplified case. State how other contributions, preparation and leaching are treated, and never count necessary leaching both as a net requirement and again as the same avoidable loss.</p>",
                    sources: [
                        { id: "IRRI951-00354", set: 33, question: 77 },
                        { id: "IRRI951-00197", set: 19, question: 75 },
                        { id: "IRRI951-00028", set: 4, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Flow duty versus quantity duty:</strong> ha/cumec is area per discharge over a stated period, not area per unit volume. The bank's two-statement question conflates the two measures. Its upstream-duty comparison is valid only for the same served area, time basis and losses. Watercourse-head duty being largest among the listed locations is a same-system comparison, not a universal ranking across unrelated branches.</p>",
                    sources: [
                        { id: "IRRI951-00208", set: 20, question: 76 },
                        { id: "IRRI951-00220", set: 21, question: 76 },
                        { id: "IRRI951-00224", set: 22, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Duty unit and option errors:</strong> D = 8.64B/Δ for metres, or 864B/Δ for centimetres. The conversion from metres to centimetres is ×100, not ×1000. For <strong>10 days and 8.64 cm</strong>, D = 86.4/0.0864 = <strong>1000 ha/cumec</strong>. The stored 100 is inconsistent and no offered option matches. Calling a mismatching option closest does not justify changing the calculation by a factor of ten.</p>",
                    sources: [
                        { id: "IRRI951-00179", set: 17, question: 78 },
                        { id: "IRRI951-00191", set: 19, question: 69 }
                    ]
                },
                {
                    html: "<p><strong>Correct kor key, faulty working in one source:</strong> 190 mm equals 0.19 m or 19 cm. <strong>8.64 × 14/0.19 = 864 × 14/19 = 636.6316 ha/cumec</strong>, so the stored 637 is consistent. The explanation using 8.64 with 19 cm mixes units and does not yield 637. Neither example supplies an additional conveyance-loss factor to insert silently.</p>",
                    sources: [
                        { id: "IRRI951-00013", set: 3, question: 70 },
                        { id: "IRRI951-00193", set: 19, question: 71 }
                    ]
                },
                {
                    html: "<p><strong>Sequential-loss contradiction:</strong> for 20 days and 0.80 m, field duty is <strong>216</strong>, watercourse-head duty <strong>172.8</strong>, and distributary-head duty <strong>155.52 ha/cumec</strong> under successive 20% and 10% losses of incoming flow. The keyed 194.4 at the distributary does not include both losses. Duty decreases upstream: multiply it by the delivery fraction, while dividing discharge by that fraction. The separate 18-day rice case correctly gives net 0.50 m, field duty <strong>311.04</strong> and head duty <strong>233.28</strong> after its 25% loss.</p>",
                    sources: [
                        { id: "IRRI951-00159", set: 16, question: 70 },
                        { id: "IRRI951-00015", set: 3, question: 72 }
                    ]
                },
                {
                    html: "<p><strong>Ambiguous irrigation efficiency:</strong> the 25 cm result requires net storage depth 16 cm, application efficiency 80%, and a distinct 80%-efficient conveyance reach downstream of the requested outlet: <strong>16/(0.8 × 0.8) = 25 cm</strong>. If irrigation efficiency already denotes overall efficiency, the result is <strong>20 cm</strong> and multiplying the conveyance allowance again double-counts it. The word outlet alone does not resolve the unlabelled reach boundary.</p>",
                    sources: [{ id: "IRRI951-00016", set: 3, question: 73 }]
                },
                {
                    html: "<p><strong>Application is not storage adequacy:</strong> application efficiency divides useful stored irrigation water by field delivery; storage efficiency divides it by the pre-irrigation deficit. For the 32 ha example, delivered volume is <strong>144000 m<sup>3</sup></strong> and stated added storage is <strong>96000 m<sup>3</sup></strong>, giving <strong>66.67%</strong> application efficiency. No pre-irrigation deficit is supplied for calculating storage efficiency, and total pre-existing soil water must not be counted as newly stored irrigation.</p>",
                    sources: [
                        { id: "IRRI951-00188", set: 18, question: 78 },
                        { id: "IRRI951-00189", set: 18, question: 79 },
                        { id: "IRRI951-00192", set: 19, question: 70 }
                    ]
                },
                {
                    html: "<p><strong>Tank and field denominators must stay separate:</strong> the eight-hour tank release is 3456 m<sup>3</sup>, but field delivery is 2880 m<sup>3</sup>. Subtracting 800 m<sup>3</sup> runoff gives <strong>2080 m<sup>3</sup></strong> useful storage only if deep drainage, evaporation and other unaccounted field terms are negligible. Thus application is <strong>72.222%</strong>, conveyance <strong>83.333%</strong> and overall delivery <strong>60.185%</strong> under those assumptions. The tank-based ratio cannot replace the field-based application ratio.</p>",
                    sources: [{ id: "IRRI951-00207", set: 20, question: 75 }]
                },
                {
                    html: "<p><strong>Uniformity and current key:</strong> mean <em>absolute</em> deviation gives <strong>1 − 0.1/1.5 = 0.9333</strong>, matching the current 0.93 choice; 0.87 is the older printed value mentioned by the explanation. Uniform comparable penetration can make this distribution coefficient one, but cannot prove stored depth equals applied depth. Uniform over-irrigation can still cause deep percolation. FAO low-quarter DU is a different metric, not another name for the same mean-deviation formula.</p>",
                    sources: [
                        { id: "IRRI951-00017", set: 3, question: 74 },
                        { id: "IRRI951-00187", set: 18, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Remaining is not depleted:</strong> irrigation at 55% of maximum available water remaining means a 45% depletion allowance. For 80 mm storage and 3 mm/day use, <strong>0.45 × 80/3 = 12 days</strong>, assuming a full initial reservoir and no intervening contributions. Soil, crop and climate jointly determine the interval. A weather change, partial initial refill or useful rain invalidates an unadjusted constant twelve-day schedule.</p>",
                    sources: [
                        { id: "IRRI951-00214", set: 21, question: 70 },
                        { id: "IRRI951-00217", set: 21, question: 73 }
                    ]
                },
                {
                    html: "<p><strong>Operating time matters:</strong> the 40 ha, 20 mm March case uses 31 complete days and negligible subsequent losses: <strong>8000/2678400 m<sup>3</sup>/s = 2.9869 L/s</strong>, approximately 3 L/s. With the same volume but time factor f &lt; 1, running capacity increases to Q<sub>continuous</sub>/f. Do not multiply capacity by f or apply another time allowance to a duty that already includes the operating schedule.</p>",
                    sources: [
                        { id: "IRRI951-00011", set: 2, question: 79 },
                        { id: "IRRI951-00212", set: 21, question: 68 }
                    ]
                },
                {
                    html: "<p><strong>Head-flow interpretation:</strong> 60% of <strong>60000 ha</strong> is 36000 ha, giving 18 cumec at 2000 ha/cumec. The keyed integer 26 follows from <strong>18/0.70 = 25.7143 cumec</strong> only if the quoted duty excludes the stated conveyance loss. If it is already a head duty, A/D already gives the head discharge. The 30% loss is a fraction of incoming flow, not an instruction to add 30% of downstream flow.</p>",
                    sources: [{ id: "IRRI951-00213", set: 21, question: 69 }]
                },
                {
                    html: "<p><strong>Peak-demand and sugarcane conflict:</strong> canal capacity follows the peak simultaneous gross irrigation demand, not invariably Kharif kor demand, maximum river flow or one crop's ET. For perennial sugarcane, compare <strong>Rabi + concurrent sugarcane</strong> with <strong>Kharif + concurrent sugarcane</strong>, using the appropriate sugarcane demand in each period. The stored Rabi-and-Kharif versus sugarcane grouping adds non-concurrent seasonal demands and omits their concurrent perennial load.</p>",
                    sources: [
                        { id: "IRRI951-00024", set: 4, question: 69 },
                        { id: "IRRI951-00026", set: 4, question: 71 },
                        { id: "IRRI951-00158", set: 1, question: 72 },
                        { id: "IRRI951-00209", set: 20, question: 77 }
                    ]
                },
                {
                    html: "<p><strong>Missing kor inputs:</strong> 2400 ha Kharif and 1800 ha Rabi do not determine a unique discharge without crop depths, delivery periods and the head-loss/time basis. The 2.08 cumec answer cannot be reconstructed from areas alone. The added 0.18 m/18-day and 0.12 m/24-day example is explicitly hypothetical and gives 2.7778 versus 1.0417 cumec before any losses; it is not an assertion about the absent bank assumptions.</p>",
                    sources: [{ id: "IRRI951-00036", set: 5, question: 70 }]
                },
                {
                    html: "<p><strong>Loss names and reach measurements:</strong> inlet minus outlet flow is seepage only after withdrawals, lateral inputs, rainfall, evaporation and storage change are resolved. Percolation can form part of seepage and does not universally require a continuous saturated connection to the water table. Wind chiefly belongs to the open-water evaporation comparison, while soil pore structure chiefly affects seepage; indirect effects do not turn those simplified comparisons into universal exclusions. Transmission loss is not necessarily unrecoverable basin consumption.</p>",
                    sources: [
                        { id: "IRRI951-00128", set: 13, question: 73 },
                        { id: "IRRI951-00150", set: 15, question: 72 },
                        { id: "IRRI951-00151", set: 1, question: 71 },
                        { id: "IRRI951-00152", set: 15, question: 73 },
                        { id: "IRRI951-00153", set: 15, question: 74 }
                    ]
                },
                {
                    html: "<p><strong>Soil rankings and lining are conditional:</strong> the bank's loose-sand, rock and impervious-clay-loam choices are comparisons within different option sets, not verified universal numerical ranges. Fractured rock and cracked dry clay can leak substantially. Stable silt may seal a canal, but greater velocity or silt content does not invariably reduce loss. Lining mainly reduces seepage and can improve head duty; joints and deterioration prevent a zero-leakage guarantee, and evaporation is not eliminated.</p>",
                    sources: [
                        { id: "IRRI951-00129", set: 13, question: 74 },
                        { id: "IRRI951-00154", set: 15, question: 75 },
                        { id: "IRRI951-00155", set: 15, question: 76 },
                        { id: "IRRI951-00156", set: 15, question: 77 },
                        { id: "IRRI951-00157", set: 15, question: 78 },
                        { id: "IRRI951-00223", set: 21, question: 78 }
                    ]
                },
                {
                    html: "<p><strong>Optimum does not mean maximum water:</strong> additional irrigation can eventually produce diminishing benefit, waterlogging or nutrient leaching, but no universal yield curve or optimum amount is supplied. Maximum yield per hectare, kg of crop per m<sup>3</sup> of water and maximum economic return are different objectives. State the water denominator, prices and resource constraints rather than equating optimum use with applying all available water.</p>",
                    sources: [
                        { id: "IRRI951-00178", set: 17, question: 77 },
                        { id: "IRRI951-00225", set: 22, question: 71 }
                    ]
                }
            ],
            references: [
                {
                    title: "FAO Irrigation and Drainage Paper 56 — Chapter 8, ETc under soil water stress conditions; TAW, RAW and the root-zone water balance, equations 82–87",
                    url: "https://www.fao.org/4/x0490e/x0490e0e.htm"
                },
                {
                    title: "FAO Irrigation and Drainage Paper 45 — Section 4, Evaluation of field data; section 4.2 distinguishes application efficiency, storage/requirement efficiency and uniformity",
                    url: "https://www.fao.org/4/t0231e/t0231e06.htm"
                }
            ]
        }
    });
})();