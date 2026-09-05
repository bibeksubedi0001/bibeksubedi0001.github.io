(function () {
  "use strict";

  Object.assign(window.CIVIL_NOTE_TOPICS = window.CIVIL_NOTE_TOPICS || {}, {
    ACiE0306: {
      code: "ACiE0306",
      questionCount: 90,
      blocks: [
        {
          id: "hydrologic-cycle-and-basin-balance",
          title: "Hydrologic cycle and water balance",
          html: "<p>The cycle connects precipitation, evapotranspiration, runoff and surface/subsurface storage. For one basin and interval, without engineered transfers:</p>" +
            "<p><strong>P − ET − Q<sub>b</sub> + G<sub>in</sub> − G<sub>out</sub> = ΔS</strong>.</p>" +
            "<table><thead><tr><th scope='col'>Quantity</th><th scope='col'>Meaning and units</th></tr></thead><tbody>" +
            "<tr><th scope='row'>P, ET, Q<sub>b</sub></th><td>Precipitation, evapotranspiration, accumulated stream outflow; basin depths, mm.</td></tr>" +
            "<tr><th scope='row'>G, ΔS</th><td>Subsurface boundary transfers and storage change; same mm and interval.</td></tr>" +
            "<tr><th scope='row'>Q(t), V</th><td>Instantaneous discharge, m<sup>3</sup>/s; integrated volume, m<sup>3</sup>.</td></tr>" +
            "</tbody></table><p>Q<sub>b</sub> = 1000V/A for A in m<sup>2</sup>. Infiltration is internal; do not subtract it again or double-count baseflow. <strong>Bank conversion:</strong> 1 m<sup>3</sup>/s gives 31,536,000 m<sup>3</sup> in 365 days. Over 31.54 km<sup>2</sup>, depth ≈ <strong>100 cm</strong>.</p>",
          sources: [{ id: "WATE701-00349", set: 30, question: 60 }]
        },
        {
          id: "catchment-shape-and-response",
          title: "Catchment geometry and runoff response",
          html: "<p>A catchment, drainage basin or watershed collects water toward a specified outlet. <strong>Form factor F<sub>f</sub> = A/L<sup>2</sup> = W<sub>mean</sub>/L</strong>, with axial length L and W<sub>mean</sub> = A/L; it is dimensionless.</p>" +
            "<p>Comparable compact fan-shaped basins can synchronise tributary arrivals; elongated fern-shaped basins tend to spread them. Shape alone cannot rank <em>total stream length</em>. Urbanisation commonly increases runoff volume/peak and shortens lag and time base; detention, drainage layout and storm pattern can alter that tendency.</p>",
          sources: [
            { id: "WATE701-00125", set: 12, question: 50 },
            { id: "WATE701-00069", set: 7, question: 56 },
            { id: "WATE701-00298", set: 26, question: 56 },
            { id: "WATE701-00367", set: 32, question: 54 }
          ]
        },
        {
          id: "precipitation-forms-and-uplift",
          title: "Precipitation and dew",
          html: "<p>Precipitation includes falling rain, snow, sleet and hail. <strong>Convective</strong> uplift follows surface heating; <strong>orographic</strong> uplift follows terrain; <strong>cyclonic/frontal</strong> uplift accompanies convergence and interacting air masses. Cold fronts often produce intense rain in narrow moving bands, not necessarily in small catchments.</p>" +
            "<p>Dew requires cooling to saturation at a surface above freezing. An above-zero dew point alone does not produce dew. Frost involves vapour deposition on a suitably cold, subfreezing surface; dew is surface condensation, not falling rain.</p>",
          sources: [
            { id: "WATE701-00013", set: 3, question: 48 },
            { id: "WATE701-00074", set: 8, question: 48 },
            { id: "WATE701-00080", set: 8, question: 54 },
            { id: "WATE701-00126", set: 12, question: 51 }
          ]
        },
        {
          id: "rain-gauges-and-rainfall-plots",
          title: "Gauges and rainfall plots",
          html: "<table><thead><tr><th scope='col'>Instrument or plot</th><th scope='col'>What it provides</th></tr></thead><tbody>" +
            "<tr><th scope='row'>Symons gauge</th><td>Non-recording collector; manually measured interval depth.</td></tr>" +
            "<tr><th scope='row'>Natural siphon</th><td>Recording float trace with periodic siphon resets.</td></tr>" +
            "<tr><th scope='row'>Tipping/weighing bucket</th><td>Recorded increments or collected mass, converted to rainfall.</td></tr>" +
            "<tr><th scope='row'>Rainfall mass curve</th><td>Cumulative depth versus chronological time; slope is intensity.</td></tr>" +
            "<tr><th scope='row'>Hyetograph</th><td>Intensity versus time; area gives rainfall depth.</td></tr>" +
            "</tbody></table><p>Depth is usually mm; intensity is mm/h. Reconstruct cumulative totals across instrument resets. A daily collector total cannot recover the storm's within-day intensity pattern.</p>",
          sources: [
            { id: "WATE701-00132", set: 1, question: 51 },
            { id: "WATE701-00133", set: 12, question: 57 },
            { id: "WATE701-00137", set: 13, question: 50 },
            { id: "WATE701-00138", set: 13, question: 51 }
          ]
        },
        {
          id: "rainfall-records-and-regional-estimates",
          title: "Normals, consistency and regional estimates",
          html: "<p>A monthly normal is the mean for that calendar month over a specified 30-year reference period; 60 mm above normal means normal plus 60 mm. A <strong>double-mass curve</strong> compares cumulative station rainfall against cumulative reference-station averages. A slope break prompts investigation of exposure, relocation and regional consistency, not automatic correction.</p>" +
            "<p>The bank quotes Nepal's annual rainfall as 1890 mm and names WECS/DHM 1990 for regional flow estimation. Check local records, observation period and regional applicability; neither supplies design limits or guaranteed accuracy.</p>",
          sources: [
            { id: "WATE701-00081", set: 8, question: 55 },
            { id: "WATE701-00083", set: 8, question: 57 },
            { id: "WATE701-00130", set: 12, question: 55 },
            { id: "WATE701-00134", set: 12, question: 58 },
            { id: "WATE701-00136", set: 13, question: 49 }
          ]
        },
        {
          id: "areal-rainfall-and-dad-curves",
          title: "Weighted rainfall and depth–area–duration curves",
          html: "<p>Arithmetic averaging suits representative, reasonably uniform gauge coverage. <strong>Thiessen polygons</strong> use perpendicular bisectors and basin-clipped nearest-gauge areas: P̄ = Σ(A<sub>i</sub>P<sub>i</sub>)/A, with ΣA<sub>i</sub> = A.</p>" +
            "<p><strong>Isohyets</strong> join equal rainfall depths for the same interval. Weight each inter-isohyet band by its area: P̄ = Σ[A<sub>j</sub>(P<sub>j</sub> + P<sub>j+1</sub>)/2]/A. Terrain-informed contours can improve hilly-basin estimates, but sparse or poor observations defeat any claim of automatic accuracy.</p>" +
            "<p><strong>DAD curves</strong> describe maximum areal storm depths through upper envelopes, not mean best-fit lines. Depth generally decreases with increasing area and increases with duration.</p>",
          sources: [
            { id: "WATE701-00078", set: 8, question: 52 },
            { id: "WATE701-00079", set: 8, question: 53 },
            { id: "WATE701-00082", set: 8, question: 56 },
            { id: "WATE701-00131", set: 12, question: 56 },
            { id: "WATE701-00135", set: 13, question: 48 },
            { id: "WATE701-00139", set: 13, question: 52 },
            { id: "WATE701-00140", set: 13, question: 53 },
            { id: "WATE701-00141", set: 13, question: 54 }
          ]
        },
        {
          id: "evaporation-transpiration-and-interception",
          title: "Evaporation, transpiration and interception",
          html: "<p>Other conditions equal, warmth/available energy and wind favour evaporation; high humidity and salinity suppress it. An <strong>anemometer</strong> measures wind speed. Transpiration returns root-absorbed water through plants; evapotranspiration combines evaporation and transpiration. Interception <em>loss</em> is intercepted water evaporated before reaching the ground, not all water temporarily caught by leaves.</p>" +
            "<p>A <strong>lysimeter</strong> estimates ET from an isolated soil-water balance. <strong>Supplementary pan relation:</strong> E = K<sub>p</sub>E<sub>pan</sub>; the dimensionless coefficient needs exposure/climate calibration. Cetyl-alcohol films can suppress evaporation, but persistence and environmental suitability are conditional, not guaranteed harmlessness.</p>",
          sources: [
            { id: "WATE701-00127", set: 12, question: 52 },
            { id: "WATE701-00128", set: 12, question: 53 },
            { id: "WATE701-00129", set: 12, question: 54 },
            { id: "WATE701-00142", set: 13, question: 55 },
            { id: "WATE701-00143", set: 13, question: 56 },
            { id: "WATE701-00144", set: 13, question: 57 },
            { id: "WATE701-00145", set: 13, question: 58 }
          ]
        },
        {
          id: "infiltration-capacity-and-loss-indices",
          title: "Infiltration and rainfall excess",
          html: "<p>Capacity f<sub>c</sub> is the potential infiltration rate; actual f = min(i, f<sub>c</sub>) when rainfall is the only supply and no ponded reserve exists. Wetting reduces suction; surface sealing can reduce capacity. Ponding itself supplies head rather than necessarily reducing infiltration.</p>" +
            "<p><strong>Supplementary Horton model:</strong> f<sub>c</sub>(t) = f<sub>∞</sub> + (f<sub>0</sub> − f<sub>∞</sub>)exp(−kt), with k in inverse time. A fitted <strong>φ-index</strong> instead satisfies P<sub>e</sub> = Σmax(0, i<sub>j</sub> − φ)Δt; it is an aggregate loss index.</p>" +
            "<p><strong>Bank example:</strong> interpreting runoff as 1.2 × 10<sup>8</sup> m<sup>3</sup> over 1200 km<sup>2</sup> gives 10 cm excess. From 16 cm in six hours, φ = (16 − 10)/6 = <strong>1 cm/h</strong> only if intensity stays above φ throughout; totals alone do not prove that.</p>",
          sources: [
            { id: "WATE701-00146", set: 13, question: 59 },
            { id: "WATE701-00356", set: 31, question: 53 }
          ]
        },
        {
          id: "runoff-pathways-and-stream-types",
          title: "Runoff paths and stream types",
          html: "<p><strong>Direct runoff</strong> comprises prompt surface runoff, prompt interflow and channel precipitation. Overland flow crosses the land surface after infiltration-capacity exceedance or saturation; interflow travels laterally through shallow soil. Delayed groundwater discharge sustains baseflow.</p>" +
            "<p>A gaining/effluent stream receives groundwater; a losing/influent stream recharges it, according to the local hydraulic-head gradient. Intermittent streams flow seasonally and may receive seasonal groundwater. Ephemeral streams respond briefly to storms without sustained baseflow. The bank's seasonal-stream option is truncated.</p>",
          sources: [
            { id: "WATE701-00300", set: 26, question: 58 },
            { id: "WATE701-00343", set: 30, question: 55 },
            { id: "WATE701-00350", set: 31, question: 47 },
            { id: "WATE701-00351", set: 31, question: 48 },
            { id: "WATE701-00352", set: 31, question: 49 },
            { id: "WATE701-00353", set: 31, question: 50 },
            { id: "WATE701-00370", set: 32, question: 57 }
          ]
        },
        {
          id: "streamflow-measurement-and-unit-discharge",
          title: "Measuring streamflow",
          html: "<p><strong>Q = Σa<sub>i</sub>v̄<sub>i</sub></strong> combines subsection areas and mean velocities. Current meters or acoustic instruments measure velocity. The two-point vertical estimate averages readings at 0.2h and 0.8h <em>below the surface</em>; one vertical is not the entire section.</p>" +
            "<p><strong>Bank example:</strong> h = 10 m, velocities 0.7 and 0.3 m/s give v̄ = 0.5 m/s. Discharge per unit width q = hv̄ = <strong>5 m<sup>2</sup>/s</strong>.</p>" +
            "<p>Dilution gauging uses tracer conservation with complete mixing, negligible tracer loss and steady discharge: small turbulent streams suit it. The <strong>slope–area</strong> method indirectly reconstructs floods using high-water marks, surveyed geometry, roughness and a resistance equation.</p>",
          sources: [
            { id: "WATE701-00147", set: 14, question: 48 },
            { id: "WATE701-00150", set: 14, question: 51 },
            { id: "WATE701-00151", set: 14, question: 52 },
            { id: "WATE701-00152", set: 14, question: 53 },
            { id: "WATE701-00359", set: 31, question: 56 },
            { id: "WATE701-00360", set: 31, question: 57 }
          ]
        },
        {
          id: "stage-discharge-and-rating-controls",
          title: "Stage–discharge ratings",
          html: "<p><strong>Stage h</strong> is water-surface elevation above a fixed gauge datum, not necessarily local depth. A calibrated rating may use <strong>Q = C(h − a)<sup>b</sup></strong>, h &gt; a: a is effective zero-flow stage on that datum; C is a fitted, unit-dependent coefficient; b is a dimensionless fitted exponent.</p>" +
            "<p>Stage alone suffices only while the rating/control remains applicable. Permanent control is stable; sediment changes or backwater can invalidate a single-valued relationship. Unsteady floods often carry more discharge on the rising than falling limb at the same stage, forming a loop. Backwater does not invariably produce that loop; auxiliary slope or velocity observations may be needed.</p>",
          sources: [
            { id: "WATE701-00148", set: 14, question: 49 },
            { id: "WATE701-00149", set: 14, question: 50 },
            { id: "WATE701-00358", set: 31, question: 55 },
            { id: "WATE701-00361", set: 32, question: 49 },
            { id: "WATE701-00362", set: 32, question: 50 },
            { id: "WATE701-00363", set: 32, question: 51 }
          ]
        },
        {
          id: "hydrograph-shape-and-flow-mass",
          title: "Hydrographs, storage and volume",
          html: "<p>A hydrograph plots discharge against time: rising limb, crest and recession. After input ceases, basin storage and drainage dominate recession, but antecedent wetness and event history prevent absolute storm independence. Maximum storage requires inflow to equal outflow while changing from filling to draining, not merely a graphical inflection.</p>" +
            "<p>The <strong>flow mass curve V(t) = ∫Q(t)dt</strong> preserves chronology; its slope is discharge. A flow-duration curve instead orders flows by exceedance frequency and discards chronology.</p>",
          sources: [
            { id: "WATE701-00076", set: 8, question: 50 },
            { id: "WATE701-00354", set: 31, question: 51 },
            { id: "WATE701-00355", set: 31, question: 52 },
            { id: "WATE701-00364", set: 32, question: 52 },
            { id: "WATE701-00368", set: 32, question: 55 }
          ]
        },
        {
          id: "unit-hydrograph-derivation-and-examples",
          title: "Unit-hydrograph derivation and worked checks",
          html: "<p>A <strong>D-hour unit hydrograph</strong> represents one specified depth, conventionally 1 cm, of effective rainfall uniformly distributed over the basin at constant intensity for D hours. First subtract baseflow: Q<sub>d</sub> = Q − Q<sub>base</sub>. Integrate for direct-runoff volume, divide by basin area for excess depth, then divide ordinates by that depth expressed in unit-depth multiples.</p>" +
            "<p><strong>Bank checks:</strong> six centimetres from three-hour excess requires division by six, retaining three-hour duration. A four-hour flood peak of 240 minus 40 m<sup>3</sup>/s baseflow, divided by 80 mm = 8 cm, gives <strong>25 m<sup>3</sup>/s</strong>.</p>" +
            "<table><thead><tr><th scope='col'>Triangular bank hydrograph</th><th scope='col'>Volume/depth calculation</th></tr></thead><tbody>" +
            "<tr><th scope='row'>80 h base, 50 m<sup>3</sup>/s peak</th><td>V = ½ × 80 × 3600 × 50 = 7.2 million m<sup>3</sup>; over 144 km<sup>2</sup>, excess = 5 cm.</td></tr>" +
            "<tr><th scope='row'>144 h base, 23 m<sup>3</sup>/s peak</th><td>V = 5,961,600 m<sup>3</sup>; for 1 cm, A = V/(0.01 m) = 596.16 km<sup>2</sup>.</td></tr>" +
            "</tbody></table><p>The second hydrograph's 12-hour rainfall duration is not its 144-hour runoff time base.</p>",
          sources: [
            { id: "WATE701-00073", set: 8, question: 47 },
            { id: "WATE701-00334", set: 29, question: 55 },
            { id: "WATE701-00335", set: 29, question: 56 },
            { id: "WATE701-00336", set: 29, question: 57 },
            { id: "WATE701-00337", set: 30, question: 49 },
            { id: "WATE701-00344", set: 30, question: 56 },
            { id: "WATE701-00357", set: 31, question: 54 },
            { id: "WATE701-00369", set: 32, question: 56 }
          ]
        },
        {
          id: "unit-hydrograph-convolution-and-iuh",
          title: "UH superposition and instantaneous response",
          html: "<p>UH convolution assumes <strong>linearity</strong> (scaled, additive responses) and <strong>time invariance</strong> (unchanged response after a time shift), with spatially uniform effective input, constant within each D-hour pulse. For pulse depths e<sub>j</sub>, <strong>Q<sub>d</sub>(t) = Σ[e<sub>j</sub>/(1 cm)]U<sub>D</sub>(t − jD)</strong>.</p>" +
            "<p><strong>Bank correction:</strong> adding two 2-hour UHs staggered by two hours represents 2 cm across <strong>four hours</strong>. Divide the sum by two to obtain a 4-hour UH. The undivided sum is not a unit hydrograph.</p>" +
            "<p>An <strong>instantaneous UH</strong> idealises unit excess depth over the entire basin as rainfall duration tends to zero, not as basin area tends to zero.</p>",
          sources: [
            { id: "WATE701-00338", set: 30, question: 50 },
            { id: "WATE701-00345", set: 30, question: 57 },
            { id: "WATE701-00365", set: 1, question: 59 }
          ]
        },
        {
          id: "synthetic-hydrographs-and-validation",
          title: "Synthetic unit hydrographs",
          html: "<p>Synthetic UHs estimate timing, peak and shape from basin area, channel length, slope or concentration time using calibrated relationships. They are not measured event hydrographs. Check unit-depth volume, duration consistency and regional transferability before use.</p>" +
            "<p>The bank's ±20% base-time and ±10% peak variations have no supplied procedural authority. Treat them as bank conventions, not universal acceptance limits or official design rules.</p>",
          sources: [
            { id: "WATE701-00346", set: 30, question: 58 },
            { id: "WATE701-00347", set: 1, question: 58 },
            { id: "WATE701-00348", set: 30, question: 59 }
          ]
        },
        {
          id: "rational-method-and-concentration-time",
          title: "Rational peaks and concentration time",
          html: "<p>For small, approximately uniform catchments, <strong>Q<sub>p</sub> = 0.278CIA</strong> gives m<sup>3</sup>/s for dimensionless runoff coefficient C, intensity I in mm/h and A in km<sup>2</sup>. Time of concentration t<sub>c</sub> is travel time from the hydraulically remotest point to the outlet.</p>" +
            "<p>Uniform rainfall must persist <strong>at least t<sub>c</sub></strong> for full-basin contribution. Select intensity from intensity–duration–frequency data for duration t<sub>c</sub> and the chosen exceedance probability; equality is the usual critical-duration selection, not the sole applicability condition. With unchanged I, C and A, doubling an already sufficient duration leaves peak Q<sub>p</sub> unchanged, though runoff volume increases.</p>",
          sources: [
            { id: "WATE701-00075", set: 8, question: 49 },
            { id: "WATE701-00339", set: 30, question: 51 },
            { id: "WATE701-00340", set: 30, question: 52 },
            { id: "WATE701-00342", set: 30, question: 54 }
          ]
        },
        {
          id: "flood-frequency-design-and-lifetime-risk",
          title: "Flood frequency, risk and design",
          html: "<p>For stationary annual maxima, <strong>T = 1/AEP</strong>, in years. A 100-year level has 1% annual exceedance probability, not a once-per-century schedule or safety guarantee. With independent years, no-exceedance probability over n years is (1 − 1/T)<sup>n</sup>; lifetime exceedance risk is <strong>1 − (1 − 1/T)<sup>n</sup></strong>. The bank's 50-year example gives <strong>0.605</strong> no exceedance and <strong>0.395</strong> risk.</p>" +
            "<p>A design flood is a selected magnitude/hydrograph balancing consequences, criteria and economics. Increasing capacity generally reduces exceedance risk, not every damage mechanism. It is distinct from a maximum safety-check flood. <strong>PMP</strong> is a physically based extreme precipitation estimate; transforming it under critical hydrologic conditions gives <strong>PMF</strong>. Neither has an automatically assigned return period, nor is PMF mandatory for every spillway.</p>",
          sources: [
            { id: "WATE701-00072", set: 7, question: 59 },
            { id: "WATE701-00299", set: 26, question: 57 },
            { id: "WATE701-00341", set: 30, question: 53 }
          ]
        },
        {
          id: "gumbel-cdf-density-and-return-level",
          title: "Gumbel probability and return-level signs",
          html: "<p>For maxima, define z = (x − μ)/β with location μ and positive scale β, both in x's units; μ is not the mean.</p>" +
            "<p><strong>CDF:</strong> F(x) = exp[−exp(−z)]. <strong>Density:</strong> f(x) = exp[−z − exp(−z)]/β. Density is not cumulative probability; AEP = 1 − F(x).</p>" +
            "<p>Setting F(x<sub>T</sub>) = 1 − 1/T gives <strong>x<sub>T</sub> = μ − β ln[−ln(1 − 1/T)]</strong>, T &gt; 1.</p>" +
            "<p><strong>Both bank examples:</strong> μ = 0, β = 1, x = 2 give exp[−exp(−2)] = <strong>0.873423</strong>. The keyed 0.864 is only the nearest offered value, not correct rounding.</p>",
          sources: [
            { id: "WATE701-00077", set: 8, question: 51 },
            { id: "WATE701-00112", set: 11, question: 50 }
          ]
        },
        {
          id: "groundwater-head-conductivity-and-storage",
          title: "Groundwater flow and storage",
          html: "<p>An unconfined aquifer has a water table; a confined aquifer remains saturated beneath a confining layer, with piezometric head distinct from thickness. <strong>Syllabus context:</strong> Darcy discharge Q = KA<sub>flow</sub>ΔH/L assumes laminar saturated flow; K is m/s, flow area m<sup>2</sup>, gradient ΔH/L dimensionless. Transmissivity Kb is m<sup>2</sup>/s for thickness b.</p>" +
            "<p>The bank tests <strong>specific retention</strong>: water retained against gravity per bulk volume. <strong>Specific yield</strong> is gravity-drained water per bulk volume; their sum approximates saturated porosity. <strong>Storativity</strong>, supplementary here, is released volume per plan area per unit head decline: dimensionless, dominated by gravity drainage in unconfined aquifers and compressibility in confined aquifers.</p>",
          sources: [{ id: "WATE701-00366", set: 32, question: 53 }]
        },
        {
          id: "dupuit-wells-slots-and-dewatering",
          title: "Groundwater wells and linear drains",
          html: "<p>The Dupuit–Forchheimer approximation neglects vertical flow components and approximates hydraulic gradient by the water-table slope, using a hydrostatic vertical pressure distribution. The following supplementary equations additionally assume steady flow, homogeneous isotropic aquifers, fully penetrating ideal boundaries and negligible well losses. The radial forms require no distributed recharge or leakage within the annulus.</p>" +
            "<p><strong>Confined radial:</strong> Q = 2πKb(H − h<sub>w</sub>)/ln(R/r<sub>w</sub>). H and h<sub>w</sub> are outer/well heads on one datum; b is constant saturated thickness.</p>" +
            "<p><strong>Unconfined radial:</strong> Q = πK(H<sup>2</sup> − h<sub>w</sub><sup>2</sup>)/ln(R/r<sub>w</sub>). Here heights must be above the horizontal impermeable base, not an arbitrary elevation datum.</p>" +
            "<p>R and r<sub>w</sub> are outer-boundary and well radii. With metres and K in m/s, Q is m<sup>3</sup>/s. Replace ln(R/r<sub>w</sub>) by <strong>2.303 log<sub>10</sub>(R/r<sub>w</sub>)</strong>, not log<sub>10</sub> alone.</p>" +
            "<p><strong>One-sided linear drain:</strong> q = K(H<sup>2</sup> − h<sub>0</sub><sup>2</sup>)/(2L), m<sup>2</sup>/s per unit drain length, with base-referenced heights and boundary distance L. This relation also requires no distributed recharge, leakage or abstraction between its fixed-head boundaries; add both sides when appropriate. Close wellpoints approximate a continuous drain away from individual intakes. Design still needs spacing, penetration, pumping capacity and drawdown checks. Partial penetration introduces vertical gradients requiring another model/correction.</p>",
          sources: [
            { id: "SOIL136-00175", set: 15, question: 35 },
            { id: "SOIL136-00177", set: 15, question: 37 },
            { id: "SOIL136-00178", set: 15, question: 38 },
            { id: "SOIL136-00179", set: 15, question: 39 },
            { id: "SOIL136-00183", set: 15, question: 43 }
          ]
        }
      ],
      gaps: [
        "No complete basin water balance, pan calibration or Horton dataset is supplied.",
        "No rating-calibration, synthetic-UH fitting or multi-pulse rainfall dataset is supplied.",
        "Flood-frequency fitting, uncertainty, local IDF/design criteria and regional coefficients lack verified datasets/specifications.",
        "Darcy/well equations and storativity supplement tested retention/yield concepts; no numerical pumping test is supplied."
      ],
      cautions: [
        {
          html: "<p><strong>Dew condition:</strong> cooling to saturation is required; cold-front rain area is not catchment size.</p>",
          sources: [
            { id: "WATE701-00013", set: 3, question: 48 },
            { id: "WATE701-00080", set: 8, question: 54 }
          ]
        },
        {
          html: "<p><strong>Catchment ambiguities:</strong> shape cannot fix total stream length. Both form-factor expressions are equivalent when mean width equals A/L, so the combined option is also defensible.</p>",
          sources: [
            { id: "WATE701-00069", set: 7, question: 56 },
            { id: "WATE701-00298", set: 26, question: 56 }
          ]
        },
        {
          html: "<p><strong>Gauge contradiction:</strong> “recouping” is malformed. Contrary to the explanation, natural siphon records; Symons does not.</p>",
          sources: [
            { id: "WATE701-00132", set: 1, question: 51 },
            { id: "WATE701-00133", set: 12, question: 57 }
          ]
        },
        {
          html: "<p><strong>DAD curvature:</strong> decreasing depth alone does not prove concave-up shape; axes and empirical curves matter.</p>",
          sources: [{ id: "WATE701-00141", set: 13, question: 54 }]
        },
        {
          html: "<p><strong>Loss assumptions:</strong> ponding need not reduce capacity; φ = 1 cm/h needs the unstated full-duration intensity assumption. Otherwise φ is underdetermined.</p>",
          sources: [
            { id: "WATE701-00146", set: 13, question: 59 },
            { id: "WATE701-00356", set: 31, question: 53 }
          ]
        },
        {
          html: "<p><strong>Unit repairs:</strong> use m<sup>3</sup>/s for annual discharge, m<sup>3</sup> for runoff volume and m<sup>2</sup>/s for unit-width discharge.</p>",
          sources: [
            { id: "WATE701-00349", set: 30, question: 60 },
            { id: "WATE701-00356", set: 31, question: 53 },
            { id: "WATE701-00152", set: 14, question: 53 }
          ]
        },
        {
          html: "<p><strong>Hydrograph inference:</strong> a 150 m<sup>3</sup>/s peak at 24 h and 72 h triangular base cannot alone establish rainfall duration below 24 h. Recession inflection likewise does not generally prove maximum storage.</p>",
          sources: [
            { id: "WATE701-00333", set: 29, question: 54 },
            { id: "WATE701-00368", set: 32, question: 55 }
          ]
        },
        {
          html: "<p><strong>UH key conflicts:</strong> normalise by depth, not volume. Two staggered 2-hour UHs give four-hour, 2 cm runoff; halve for a unit response.</p>",
          sources: [
            { id: "WATE701-00334", set: 29, question: 55 },
            { id: "WATE701-00345", set: 30, question: 57 }
          ]
        },
        {
          html: "<p><strong>Rating limitation:</strong> backwater, shifting control and flood-wave hysteresis are not synonymous; stage alone may fail.</p>",
          sources: [{ id: "WATE701-00358", set: 31, question: 55 }]
        },
        {
          html: "<p><strong>Rational limits:</strong> require duration ≥ t<sub>c</sub>, not only equality; the 50 km<sup>2</sup> limit is not universal.</p>",
          sources: [
            { id: "WATE701-00075", set: 8, question: 49 },
            { id: "WATE701-00339", set: 30, question: 51 }
          ]
        },
        {
          html: "<p><strong>Gumbel arithmetic:</strong> both items miskey F(2): 0.873423, not 0.864; no offered value rounds correctly.</p>",
          sources: [
            { id: "WATE701-00077", set: 8, question: 51 },
            { id: "WATE701-00112", set: 11, question: 50 }
          ]
        },
        {
          html: "<p><strong>Groundwater source limits:</strong> full penetration is an idealisation, not compulsory. Corrupted Chapman notation identifies EA as “extra length factor” but leaves grouping/variables undefined. Do not reconstruct a discharge formula.</p>",
          sources: [
            { id: "SOIL136-00175", set: 15, question: 35 },
            { id: "SOIL136-00180", set: 15, question: 40 }
          ]
        }
      ]
    }
  });
}());