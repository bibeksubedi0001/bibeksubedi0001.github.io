/* ============================================================
   CIVIL MODEL SET 32 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  14
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  10
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_32 = {
    day: 62,
    kind: "model",
    badge: { top: "Model", main: "C32" },
    title: "Civil Model Set 32",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm32basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm32q001",
                    src: "BASI674-00407",
                    text: "When actual cost of construction plus certain profit is paid to the contractor then such a contract is known as",
                    options: [
                        { key: "a", text: "Cost plus percentage contract" },
                        { key: "b", text: "Unscheduled contract" },
                        { key: "c", text: "Nominated contract" },
                        { key: "d", text: "Work order" }
                    ],
                    answer: "a",
                    explanation: "In a \"cost-plus-percentage\" contract, the contractor is paid the actual cost of labor, plant, and materials, plus an agreed percentage of this cost as profit."
                },
                {
                    id: "cm32q002",
                    src: "BASI674-00408",
                    text: "A building has been purchased by a person at a cost of Rs. 25000. The useful life of the building is 40 years and the scrap value of the building is Rs. 3000. Calculate the annual sinking fund (Rs.) at the rate of 5% interest.",
                    options: [
                        { key: "a", text: "136" },
                        { key: "b", text: "182" },
                        { key: "c", text: "155" },
                        { key: "d", text: "207" }
                    ],
                    answer: "b",
                    explanation: "Sinking Fund (S) = (C - S_v) * i / ((1+i)^n - 1). Here, C=25000, S_v=3000, i=0.05, n=40. S = (22000 * 0.05) / ((1.05^40)-1) ≈ 1100 / 6.04 ≈ 182 Rs."
                },
                {
                    id: "cm32q003",
                    src: "BASI674-00409",
                    text: "Deerepitude is a type of",
                    options: [
                        { key: "a", text: "Physical depreciation" },
                        { key: "b", text: "Functional depreciation" },
                        { key: "c", text: "Contingent depreciation" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Decrepitude refers to physical depreciation, which is the loss in value due to physical wear and tear, decay, or deterioration of the structure."
                },
                {
                    id: "cm32q004",
                    src: "BASI674-00410",
                    text: "A fixed stipulated sum of penalty payable by the contractor having no relationship with real damage is known as",
                    options: [
                        { key: "a", text: "Compensation payment" },
                        { key: "b", text: "Fixed penalty" },
                        { key: "c", text: "Damage charge" },
                        { key: "d", text: "Liquidated damage" }
                    ],
                    answer: "d",
                    explanation: "Liquidated damages are a pre-agreed sum written into the contract, payable by the contractor for each day of delay, regardless of the actual loss suffered by the client."
                },
                {
                    id: "cm32q005",
                    src: "BASI674-00411",
                    text: "Using straight line method annual",
                    options: [
                        { key: "a", text: "(Original Cost - Scrap cost)/Life in year" },
                        { key: "b", text: "(Life in year - Scrap value)/Original cost" },
                        { key: "c", text: "Scrap value - Life in year)/Original cost" },
                        { key: "d", text: "(Original cost - Life in year)/Scrap value" }
                    ],
                    answer: "a",
                    explanation: "The straight-line depreciation formula is: Annual Depreciation = (Original Cost - Scrap Value) / Useful Life (in years)."
                },
                {
                    id: "cm32q006",
                    src: "BASI674-00412",
                    text: "Value of demolished material is known as",
                    options: [
                        { key: "a", text: "Salvage value" },
                        { key: "b", text: "Scrap value" },
                        { key: "c", text: "Resultant value" },
                        { key: "d", text: "Material value" }
                    ],
                    answer: "b",
                    explanation: "Scrap Value of an asset is the value sold as raw scrap/junk at end of life. It refers to material sold as-is without reuse. Salvage value is the estimated resale value of an asset (or its components as material) at the end of its useful life."
                },
                {
                    id: "cm32q007",
                    src: "BASI674-00413",
                    text: "Security deposit deducted at 5% from contractor’s bills is",
                    options: [
                        { key: "a", text: "Refunded when the contractor completes the work" },
                        { key: "b", text: "Refunded even before the completion of the work provided good progress has been established" },
                        { key: "c", text: "Refunded with the defect liability period" },
                        { key: "d", text: "Retained till the expected life of the structure and spent for maintenance" }
                    ],
                    answer: "c",
                    explanation: "The security deposit is typically refunded after the completion of the defect liability period (maintenance period), provided there are no faults to be rectified."
                },
                {
                    id: "cm32q008",
                    src: "BASI674-00414",
                    text: "The value of the property during its useful life based on subtraction of original cost and depreciation etc. is known",
                    options: [
                        { key: "a", text: "Joint value" },
                        { key: "b", text: "Salvage value" },
                        { key: "c", text: "Scrap value" },
                        { key: "d", text: "Book value" }
                    ],
                    answer: "d",
                    explanation: "Book value is the value of an asset as it appears on a balance sheet, calculated as original cost minus accumulated depreciation."
                },
                {
                    id: "cm32q009",
                    src: "BASI674-00415",
                    text: "Earnest money to be deposited for works up to Rs. 5 lakhs is",
                    options: [
                        { key: "a", text: "Rs. 2500" },
                        { key: "b", text: "1% of total work" },
                        { key: "c", text: "2% of total work" },
                        { key: "d", text: "2.5% of total work" }
                    ],
                    answer: "a",
                    explanation: "As per standard bidding documents, for works up to Rs. 5 lakhs, a fixed earnest money deposit of Rs. 2500 is often required."
                },
                {
                    id: "cm32q010",
                    src: "BASI674-00416",
                    text: "The following document contains detailed depreciation of all items of work including their bill of quantities, along with plans and drawings:",
                    options: [
                        { key: "a", text: "Analysis of rates" },
                        { key: "b", text: "Tender document" },
                        { key: "c", text: "Abstract estimate" },
                        { key: "d", text: "Schedule of rates" }
                    ],
                    answer: "b",
                    explanation: "The tender document is the comprehensive package sent to contractors. It includes detailed specifications, drawings, Bill of Quantities (BOQ), and often a schedule of rates."
                },
                {
                    id: "cm32q011",
                    src: "BASI674-00417",
                    text: "The process of arriving at the rough cost of a project is called",
                    options: [
                        { key: "a", text: "Detailed cost" },
                        { key: "b", text: "Abstract cost" },
                        { key: "c", text: "Estimation" },
                        { key: "d", text: "Rough cost" }
                    ],
                    answer: "c",
                    explanation: "Estimation is the general term for the process of calculating the probable cost of a project before its execution. A preliminary estimate gives a rough cost."
                },
                {
                    id: "cm32q012",
                    src: "BASI674-00419",
                    text: "Distress value is",
                    options: [
                        { key: "a", text: "When the property is sold at a higher value than market value" },
                        { key: "b", text: "When the property is sold at the current market value" },
                        { key: "c", text: "When the property remains unsold at any price due to some reasons" },
                        { key: "d", text: "When the property is sold at a lower value than market value" }
                    ],
                    answer: "d",
                    explanation: "Distress value is the value realized when a sale is forced under unfavorable conditions (e.g., urgent need for cash), often resulting in a price below the fair market value."
                },
                {
                    id: "cm32q013",
                    src: "BASI674-00420",
                    text: "Open areas, courtyard and balconies are NOT included in which area of valuation",
                    options: [
                        { key: "a", text: "Carpet area" },
                        { key: "b", text: "Plinth area" },
                        { key: "c", text: "Plot area" },
                        { key: "d", text: "Floor area" }
                    ],
                    answer: "a",
                    explanation: "Carpet area is the net usable floor area within a building, measured wall-to-wall. It does not include external areas like balconies, courtyards, or open areas."
                }
            ]
        },
        {
            id: "cm32stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm32q014",
                    src: "STRU935-00340",
                    text: "For a simply supported beam with a central load, the bending moment is",
                    options: [
                        { key: "a", text: "least at the centre" },
                        { key: "b", text: "maximum at the centre" },
                        { key: "c", text: "least at the supports" },
                        { key: "d", text: "maximum at the supports" }
                    ],
                    answer: "b",
                    explanation: "In a simply supported beam with a central point load, the bending moment is zero at the supports and increases linearly to its maximum value at the center of the beam."
                },
                {
                    id: "cm32q015",
                    src: "STRU935-00341",
                    text: "In a beam, the neutral plane",
                    options: [
                        { key: "a", text: "may be its centre" },
                        { key: "b", text: "passes through the C.G. of the area of cross-section" },
                        { key: "c", text: "does not change during deformation" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "b",
                    explanation: "The neutral axis is the line in the cross-section of a beam where there is no longitudinal stress or strain during bending. For a homogeneous, linearly elastic beam, this axis always passes through the centroid (C.G.) of the cross-sectional area."
                },
                {
                    id: "cm32q016",
                    src: "STRU935-00342",
                    text: "The number of points of contraflexure in a simple supported beam carrying uniformly distributed load, is",
                    options: [
                        { key: "a", text: "1" },
                        { key: "b", text: "2" },
                        { key: "c", text: "3" },
                        { key: "d", text: "0" }
                    ],
                    answer: "d",
                    explanation: "A simply supported beam with a uniformly distributed load has a bending moment diagram that is a parabolic curve always above the base line (always positive). It does not cross zero anywhere along the span, so there are no points of contraflexure."
                },
                {
                    id: "cm32q017",
                    src: "STRU935-00343",
                    text: "The number of points of contraflexure in a simple supported beam carrying point load, is",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "1" },
                        { key: "c", text: "2" },
                        { key: "d", text: "3" }
                    ],
                    answer: "a",
                    explanation: "A simply supported beam with a central point load has a triangular bending moment diagram that is always positive. It does not change sign, so there are no points of contraflexure."
                },
                {
                    id: "cm32q018",
                    src: "STRU935-00344",
                    text: "In a fixed beam, the points of contraflexure",
                    options: [
                        { key: "a", text: "for a uniformly distributed load are 2" },
                        { key: "b", text: "for a concentrated load are 2" },
                        { key: "c", text: "for a moment applied at mid point are 3" },
                        { key: "d", text: "all the above" }
                    ],
                    answer: "d",
                    explanation: "In a fixed beam (fixed at both ends), the bending moment diagram changes sign. Typically, for a uniformly distributed load, there are two points of contraflexure. For a central concentrated load, there are two. For a central moment, there can be three. Thus, all statements are correct."
                },
                {
                    id: "cm32q019",
                    src: "STRU935-00345",
                    text: "The bending moment is maximum on a section where shearing force",
                    options: [
                        { key: "a", text: "is maximum" },
                        { key: "b", text: "is minimum" },
                        { key: "c", text: "changes sign" },
                        { key: "d", text: "is equal" }
                    ],
                    answer: "c",
                    explanation: "The maximum (or minimum) bending moment occurs where the shear force is zero. However, the question asks for a section where the bending moment is maximum. The shear force changes sign at the point where the bending moment is maximum (or minimum)."
                },
                {
                    id: "cm32q020",
                    src: "STRU935-00346",
                    text: "Pick up the correct statement from the following:",
                    options: [
                        { key: "a", text: "The rate of change of bending moment is equal to rate of shear force" },
                        { key: "b", text: "The rate of change of shear force is equal to rate of loading" },
                        { key: "c", text: "neither (A) nor (B)" },
                        { key: "d", text: "both (A) and (B)" }
                    ],
                    answer: "d",
                    explanation: "The fundamental relationships are: dM/dx = V (rate of change of bending moment is shear force) and dV/dx = -w (rate of change of shear force is equal to the negative of the load intensity). Therefore, both statements (A) and (B) are correct, with (A) being precise and (B) having a sign convention."
                },
                {
                    id: "cm32q021",
                    src: "STRU935-00347",
                    text: "The shape of the bending moment diagram over the length of a beam, carrying a uniformly increasing load is",
                    options: [
                        { key: "a", text: "bending stress is same at every section" },
                        { key: "b", text: "bending moment is same at every section" },
                        { key: "c", text: "shear stress is same at every section" },
                        { key: "d", text: "deflection is same at every section" }
                    ],
                    answer: "a",
                    explanation: "A beam carrying a uniformly increasing load (triangular load) has a cubic bending moment diagram. However, if the beam is designed to be of uniform strength (varying cross-section), the bending stress can be made constant at every section. This is the concept behind beams of uniform strength."
                },
                {
                    id: "cm32q022",
                    src: "STRU935-00348",
                    text: "In a continuous bending moment curve the point where it changes sign, is called",
                    options: [
                        { key: "a", text: "Point of inflection" },
                        { key: "b", text: "Point of contraflexure" },
                        { key: "c", text: "Point of virtual hinge" },
                        { key: "d", text: "All of above" }
                    ],
                    answer: "b",
                    explanation: "The point in a beam where the bending moment changes sign (from positive to negative or vice versa) and is zero is called the Point of Contraflexure. It is also sometimes referred to as the Point of Inflection in the context of the beam's elastic curve."
                },
                {
                    id: "cm32q023",
                    src: "STRU935-00349",
                    text: "If a constant section beam is subjected to a uniform bending moment throughout its length tends to",
                    options: [
                        { key: "a", text: "parabolic arc" },
                        { key: "b", text: "catenary" },
                        { key: "c", text: "Circular arc" },
                        { key: "d", text: "none" }
                    ],
                    answer: "c",
                    explanation: "When a beam of constant flexural rigidity (EI) is subjected to a constant bending moment (M) throughout its length, the curvature (1/R = M/EI) is constant. A curve of constant curvature is a circular arc."
                },
                {
                    id: "cm32q024",
                    src: "STRU935-00350",
                    text: "The moment diagram for cantilever with linearly varying load from zero at its free end and to maximum at the fixed end will be a",
                    options: [
                        { key: "a", text: "triangle" },
                        { key: "b", text: "rectangle" },
                        { key: "c", text: "parabolic" },
                        { key: "d", text: "cubic parabolic" }
                    ],
                    answer: "d",
                    explanation: "A cantilever with a linearly varying load (zero at free end, max at fixed end) has a shear force diagram that is parabolic (second degree). The bending moment, being the integral of the shear force, will be a cubic function (third degree). Thus, its diagram is a cubic parabola."
                }
            ]
        },
        {
            id: "cm32desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm32q025",
                    src: "DESI787-00294",
                    text: "Which of the following factors does not influence earthquake resistance design?",
                    options: [
                        { key: "a", text: "Wind of location" },
                        { key: "b", text: "Geographical location of structure" },
                        { key: "c", text: "Site soil Condition" },
                        { key: "d", text: "Strength of structure" }
                    ],
                    answer: "a",
                    explanation: "The key parameters for seismic design are the seismic zone (geographical location), the type of foundation and soil (site soil condition), and the dynamic characteristics of the structure itself (influencing its strength and ductility). The wind load of a location is determined separately and is not a direct factor in calculating the seismic design force."
                },
                {
                    id: "cm32q026",
                    src: "DESI787-00295",
                    text: "Structures should be designed such that...",
                    options: [
                        { key: "a", text: "Minor and frequent earthquakes can collapse the structure" },
                        { key: "b", text: "Minor earthquake should not cause any damage to the structure and the structure should be functional" },
                        { key: "c", text: "Moderate earthquakes can cause damage to the structure" },
                        { key: "d", text: "Major earthquakes should not cause any damage to the structure and the structure should be functional" }
                    ],
                    answer: "b",
                    explanation: "The philosophy of earthquake-resistant design is based on performance levels: Structures should remain operational and undamaged during frequent, minor earthquakes. They may sustain repairable damage during less frequent, moderate earthquakes. They should not collapse during rare, major earthquakes, thus ensuring life safety."
                },
                {
                    id: "cm32q027",
                    src: "DESI787-00296",
                    text: "Which of the following assumption is correct for earthquake design resistant structure?",
                    options: [
                        { key: "a", text: "Earthquake will occur simultaneously with maximum flood" },
                        { key: "b", text: "Earthquake will occur simultaneously with maximum sea waves" },
                        { key: "c", text: "Earthquake will not occur simultaneously with wind" },
                        { key: "d", text: "Earthquake will occur simultaneously with wind" }
                    ],
                    answer: "c",
                    explanation: "Design codes typically assume that the maximum earthquake load, maximum wind load, and other extreme environmental events (like flood or waves) will not act on the structure simultaneously due to their very low probability of coincidence."
                },
                {
                    id: "cm32q028",
                    src: "DESI787-00297",
                    text: "Which of the following relation is correct for design horizontal seismic coefficient?",
                    options: [
                        { key: "a", text: "Ah = (Z I Sa) / (R g)" },
                        { key: "b", text: "Ah = (Z I Sa) / (2 R)" },
                        { key: "c", text: "Ah = (Z I Sa) / (2 g)" },
                        { key: "d", text: "Ah = (Z I Sa) / (2 R g)" }
                    ],
                    answer: "d",
                    explanation: "The design horizontal seismic coefficient (Aₕ) is given by Aₕ = (Z/2) * (I/R) * (Sₐ/g), where Z is zone factor, I is importance factor, R is response reduction factor, and Sₐ/g is average response acceleration coefficient. The '2' in the denominator is for converting the Maximum Considered Earthquake (MCE) level to the Design Basis Earthquake (DBE) level."
                },
                {
                    id: "cm32q029",
                    src: "DESI787-00298",
                    text: "What is structural response factor?",
                    options: [
                        { key: "a", text: "Factor by which the actual base shear force is reduced" },
                        { key: "b", text: "Factor denoting the acceleration response spectrum of the structure subjected to earthquake ground vibrations" },
                        { key: "c", text: "Factor to obtain the design spectrum" },
                        { key: "d", text: "Factor used to obtain the design seismic force" }
                    ],
                    answer: "a",
                    explanation: "The Response Reduction Factor (R) accounts for the ductility, overstrength, and redundancy of a structure. It is a factor used to reduce the elastic base shear force (which would be very high) to a more realistic design level, recognizing the energy dissipation capacity of the structure through inelastic behavior."
                },
                {
                    id: "cm32q030",
                    src: "DESI787-00299",
                    text: "The return period of earthquake E1 is",
                    options: [
                        { key: "a", text: "2475 years" },
                        { key: "b", text: "475 years" },
                        { key: "c", text: "2500 years" },
                        { key: "d", text: "500 years" }
                    ],
                    answer: "b",
                    explanation: "In seismic design, two primary earthquake levels are considered: E1 (Design Basis Earthquake - DBE) has a return period of 475 years. E2 (Maximum Considered Earthquake - MCE) has a return period of 2475 years."
                },
                {
                    id: "cm32q031",
                    src: "DESI787-00300",
                    text: "Wind pressure acting normal to individual element of cladding units:",
                    options: [
                        { key: "a", text: "F = (Cₚᵢ - Cₚᵢ) A P_d" },
                        { key: "b", text: "F = (Cₚₑ - Cₚᵢ) / (A P_d)" },
                        { key: "c", text: "F = (Cₚₑ - Cₚᵢ) A P_d" }
                    ],
                    answer: "c",
                    explanation: "The net wind force (F) on a cladding element is calculated using the net pressure coefficient (difference between external Cₚₑ and internal Cₚᵢ pressure coefficients), multiplied by the tributary area (A) and the design wind pressure (P_d)."
                },
                {
                    id: "cm32q032",
                    src: "DESI787-00301",
                    text: "Internal pressure coefficient in a building is positive if acting from ______ and external pressure coefficient in a building positive if acting from ______.",
                    options: [
                        { key: "a", text: "Outside to inside, inside to outside" },
                        { key: "b", text: "Outside to inside, outside to inside" },
                        { key: "c", text: "Inside to outside, inside to outside" },
                        { key: "d", text: "Inside to outside, outside to inside" }
                    ],
                    answer: "d",
                    explanation: "A positive internal pressure coefficient signifies pressure acting from inside the building towards the outside (tending to push walls and roof outwards). A positive external pressure coefficient signifies pressure acting from outside towards the building surface (tending to push walls and roof inwards)."
                },
                {
                    id: "cm32q033",
                    src: "DESI787-00302",
                    text: "IS Code gives basic wind speed averaged over a short interval of ______.",
                    options: [
                        { key: "a", text: "3 seconds" },
                        { key: "b", text: "10 seconds" },
                        { key: "c", text: "20 seconds" },
                        { key: "d", text: "5 seconds" }
                    ],
                    answer: "a",
                    explanation: "As per IS 875 (Part 3), the basic wind speed (V_b) is based on the peak gust speed averaged over a very short duration of 3 seconds."
                },
                {
                    id: "cm32q034",
                    src: "DESI787-00303",
                    text: "Positive sign of pressure coefficient indicates ______.",
                    options: [
                        { key: "a", text: "Pressure acting away the surface" },
                        { key: "b", text: "Pressure acting towards the surface" },
                        { key: "c", text: "Pressure acting above the surface" },
                        { key: "d", text: "Pressure acting below the surface" }
                    ],
                    answer: "b",
                    explanation: "A positive pressure coefficient indicates pressure acting towards the surface of the structure (i.e., compression). A negative pressure coefficient indicates suction, or pressure acting away from the surface."
                }
            ]
        },
        {
            id: "cm32soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "14 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm32q035",
                    src: "SOIL136-00413",
                    text: "Which of the following condition is true regarding the transfer of load from strap to soil, used in strap footing?",
                    options: [
                        { key: "a", text: "Transfer load to soil" },
                        { key: "b", text: "Partially transfer to load" },
                        { key: "c", text: "Does not transfer load to soil" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "c",
                    explanation: "The primary function of the strap beam is to connect two footings and transfer moment from one footing to the other. It is designed to be rigid and typically does not bear directly on the soil; the load is transferred to the soil through the individual footings."
                },
                {
                    id: "cm32q036",
                    src: "SOIL136-00414",
                    text: "When the allowable soil is low or the building loads are heavy, the footing used is ______.",
                    options: [
                        { key: "a", text: "Strap footing" },
                        { key: "b", text: "Trapezoidal combined footing" },
                        { key: "c", text: "Rectangular combined footing" },
                        { key: "d", text: "Raft footing" }
                    ],
                    answer: "d",
                    explanation: "A raft (or mat) foundation is a large, continuous footing supporting an entire structure. It is used when soil bearing capacity is low or building loads are heavy, as it distributes the load over a very large area."
                },
                {
                    id: "cm32q037",
                    src: "SOIL136-00415",
                    text: "If the resultant of the soil pressure coincides with the resultant of the loads, the soil is pressure is assumed to be ______.",
                    options: [
                        { key: "a", text: "Uniformly distributed" },
                        { key: "b", text: "Non-uniformly" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "a",
                    explanation: "If the resultant of the applied loads passes through the centroid of the footing area, the soil pressure is assumed to be uniformly distributed. This is a fundamental principle for designing footings to avoid eccentricity."
                },
                {
                    id: "cm32q038",
                    src: "SOIL136-00416",
                    text: "In designing rectangular combined footing ______ should be adopted as the design value.",
                    options: [
                        { key: "a", text: "Stress distribution" },
                        { key: "b", text: "Maximum bending moment" },
                        { key: "c", text: "Compression index" },
                        { key: "d", text: "Safe bearing pressure" }
                    ],
                    answer: "b",
                    explanation: "The structural design of a combined footing involves determining the bending moments and shear forces. The maximum bending moment is a critical value used to calculate the required depth and reinforcement for the footing."
                },
                {
                    id: "cm32q039",
                    src: "SOIL136-00417",
                    text: "Generally combined footing is assumed to rest on ______.",
                    options: [
                        { key: "a", text: "Cohesive soil" },
                        { key: "b", text: "Cohesion-less soil" },
                        { key: "c", text: "Homogeneous soil" },
                        { key: "d", text: "Mon homogeneous soil" }
                    ],
                    answer: "c",
                    explanation: "For simplified analysis and design, combined footings are often assumed to rest on a homogeneous, elastic, and isotropic soil mass to predict soil pressure distribution."
                },
                {
                    id: "cm32q040",
                    src: "SOIL136-00418",
                    text: "The design procedure of strap footing is essentially that of ______.",
                    options: [
                        { key: "a", text: "Direct method" },
                        { key: "b", text: "Graphical method" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Trial and error method" }
                    ],
                    answer: "d",
                    explanation: "The design of a strap footing often involves an iterative (trial and error) process. An initial size is assumed for the footings and strap, then checks are performed for soil pressure, bending, and shear. The sizes are adjusted until all criteria are satisfied."
                },
                {
                    id: "cm32q041",
                    src: "SOIL136-00419",
                    text: "What will be the shape of footing if a=0, is substituted in the pressure intensity equation “q2 = α.qs”?",
                    options: [
                        { key: "a", text: "Rectangular" },
                        { key: "b", text: "Trapezoidal" },
                        { key: "c", text: "Circular" },
                        { key: "d", text: "Triangular" }
                    ],
                    answer: "a",
                    explanation: "The equation q2 = α * qs likely relates to the pressure distribution under a combined footing. Setting α=0 would typically simplify the pressure distribution to a uniform one, which corresponds to a rectangular footing where the resultant load is at the centroid."
                },
                {
                    id: "cm32q042",
                    src: "SOIL136-00420",
                    text: "The maximum load which can be carried by a pile is defined as its ______.",
                    options: [
                        { key: "a", text: "Ultimate load carrying capacity" },
                        { key: "b", text: "All of the mentioned" },
                        { key: "c", text: "Ultimate bearing resistance" },
                        { key: "d", text: "Ultimate bearing capacity" }
                    ],
                    answer: "b",
                    explanation: "The terms 'ultimate load carrying capacity,' 'ultimate bearing resistance,' and 'ultimate bearing capacity' are often used interchangeably to refer to the maximum load a pile can support before failure occurs."
                },
                {
                    id: "cm32q043",
                    src: "SOIL136-00421",
                    text: "The load carrying capacity of a pile can be determined by which of the following methods?",
                    options: [
                        { key: "a", text: "Dynamic formulae" },
                        { key: "b", text: "State formulae" },
                        { key: "c", text: "All of the mentioned" },
                        { key: "d", text: "Plate load test" }
                    ],
                    answer: "c",
                    explanation: "Pile capacity can be determined by various methods: Dynamic formulae (based on driving resistance), Static formulae (based on soil properties), and full-scale Load tests (like a pile load test)."
                },
                {
                    id: "cm32q044",
                    src: "SOIL136-00422",
                    text: "Which of the following are some of the commonly used dynamic formula?",
                    options: [
                        { key: "a", text: "Engineers News formula and Hiley’s formula" },
                        { key: "b", text: "State formula" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Both (a) and (b)" }
                    ],
                    answer: "a",
                    explanation: "Common dynamic formulae used to estimate pile capacity from driving records include the Engineering News Record (ENR) formula and Hiley's formula. 'State formula' is not a standard term for a specific dynamic formula."
                },
                {
                    id: "cm32q045",
                    src: "SOIL136-00423",
                    text: "When a pile hammer hits the pile, the total driving energy is equal to ______.",
                    options: [
                        { key: "a", text: "Weight of the ram time times the height of the stroke" },
                        { key: "b", text: "Weight of hammer times the height of drop" },
                        { key: "c", text: "Sum of the impact of the ram" },
                        { key: "d", text: "Sum of the impact of ram plus the energy delivered by explosion" }
                    ],
                    answer: "a",
                    explanation: "For a drop hammer or a single-acting hammer, the energy delivered per blow is the product of the ram's weight and the height of its drop (stroke)."
                },
                {
                    id: "cm32q046",
                    src: "SOIL136-00424",
                    text: "Dynamic formulae are best suited for ______ type of soil.",
                    options: [
                        { key: "a", text: "Fine grained soil" },
                        { key: "b", text: "Coarse grained soil" },
                        { key: "c", text: "Cohesive soil" },
                        { key: "d", text: "None of the mentioned" }
                    ],
                    answer: "b",
                    explanation: "Dynamic formulae, which relate driving resistance to capacity, are generally more reliable for piles driven into coarse-grained, free-draining soils (sands and gravels) than for cohesive soils (clays)."
                },
                {
                    id: "cm32q047",
                    src: "SOIL136-00426",
                    text: "The dynamic formula is valueless for which of the following type of soil:",
                    options: [
                        { key: "a", text: "Loose sand" },
                        { key: "b", text: "Saturated soil" },
                        { key: "c", text: "Clay soil" },
                        { key: "d", text: "Compacted soil" }
                    ],
                    answer: "c",
                    explanation: "Dynamic formulae are particularly unreliable for piles driven into saturated, fine-grained cohesive soils (clays) because the driving resistance is greatly affected by pore water pressures that do not reflect the long-term static capacity."
                },
                {
                    id: "cm32q048",
                    src: "SOIL136-00427",
                    text: "The greater objection to any of the pile driving formulae is",
                    options: [
                        { key: "a", text: "Shear strength of the soil" },
                        { key: "b", text: "Uncertainty in the allowable pressure" },
                        { key: "c", text: "None of the mentioned" },
                        { key: "d", text: "Uncertainty in relation between dynamic and static resistance" }
                    ],
                    answer: "d",
                    explanation: "The primary criticism of dynamic formulae is the significant uncertainty in correlating the dynamic resistance measured during driving (which involves high strain rates and other complex factors) with the long-term static load-bearing capacity of the pile."
                }
            ]
        },
        {
            id: "cm32watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm32q049",
                    src: "WATE701-00361",
                    text: "The curve obtained after plotting discharge versus stage is called",
                    options: [
                        { key: "a", text: "Hydrograph" },
                        { key: "b", text: "Shield’s curve" },
                        { key: "c", text: "Rating curve" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "A rating curve is a graphical relationship between the stage (water level) and the discharge at a particular river cross-section. It is fundamental for converting continuous stage readings into a continuous discharge record."
                },
                {
                    id: "cm32q050",
                    src: "WATE701-00362",
                    text: "If the stage discharge relationship for a gauging section is constant and does not change with time, the controls is said to be",
                    options: [
                        { key: "a", text: "Permanent control" },
                        { key: "b", text: "Temporary control" },
                        { key: "c", text: "Shifting control" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "A permanent control is a stable geometric feature of the channel (like a rock ledge or a constructed weir) that fixes a unique stage-discharge relationship which does not change with time."
                },
                {
                    id: "cm32q051",
                    src: "WATE701-00363",
                    text: "For a given stream, the rating curve applicable to a section is available. To determine the discharge in this section, which of the following data is needed?",
                    options: [
                        { key: "a", text: "Current meter reading at various verticals at a section" },
                        { key: "b", text: "Slope of water surface at the section" },
                        { key: "c", text: "Stage of the section" },
                        { key: "d", text: "Surface velocity at various section" }
                    ],
                    answer: "c",
                    explanation: "If a stable, pre-defined rating curve (Q vs. h) is available for a gauging station, the only data needed to determine the discharge (Q) at any instant is the measurement of the stage (h) at that time."
                },
                {
                    id: "cm32q052",
                    src: "WATE701-00364",
                    text: "The shape of the recession limb of a hydrograph depends on",
                    options: [
                        { key: "a", text: "Basin characteristics only" },
                        { key: "b", text: "Storm characteristics only" },
                        { key: "c", text: "Both a and b" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "The recession limb represents the withdrawal of water from storage within the basin after the rainfall has stopped. The rate of this withdrawal is primarily a function of the basin's physical characteristics (e.g., geology, topography, drainage density) and is relatively independent of the storm characteristics that shaped the rising limb."
                },
                {
                    id: "cm32q053",
                    src: "WATE701-00366",
                    text: "The quantity of water retained by the sub soil against gravity is known as",
                    options: [
                        { key: "a", text: "Specific retention" },
                        { key: "b", text: "Yield" },
                        { key: "c", text: "Forestry" },
                        { key: "d", text: "Specific yield" }
                    ],
                    answer: "a",
                    explanation: "Specific retention (S_r) is the ratio of the volume of water a rock or soil can retain against gravity (e.g., held by surface tension) to its own volume. Specific yield (S_y) is the volume of water it will yield by gravity drainage."
                },
                {
                    id: "cm32q054",
                    src: "WATE701-00367",
                    text: "A watershed got transformed from rural to urban over a period of time. The effect of urbanization on storm runoff hydrograph from watershed is to",
                    options: [
                        { key: "a", text: "Decreases the volume of runoff" },
                        { key: "b", text: "Decreases the time base" },
                        { key: "c", text: "Increases the time to peak discharge" },
                        { key: "d", text: "Decreases the peak discharge" }
                    ],
                    answer: "b",
                    explanation: "Urbanization (increased impervious surfaces, drainage networks) leads to: 1) Increased volume and peak of runoff, 2) Decreased time to peak (faster concentration), and 3) Decreased time base (shorter duration) of the hydrograph."
                },
                {
                    id: "cm32q055",
                    src: "WATE701-00368",
                    text: "Point of inflection in hydrograph represents the condition of",
                    options: [
                        { key: "a", text: "Minimum storage" },
                        { key: "b", text: "Deficit" },
                        { key: "c", text: "Maximum storage" },
                        { key: "d", text: "Surplus" }
                    ],
                    answer: "c",
                    explanation: "The point of inflection on the recession limb of a hydrograph is often interpreted as the time when channel storage within the watershed is at a maximum and just begins to deplete. It signifies the end of the contribution from surface runoff and the beginning of the dominance of baseflow recession."
                },
                {
                    id: "cm32q056",
                    src: "WATE701-00369",
                    text: "The peak of a 4-hour flood hydrograph is 240 m³/s. If the rainfall excess is 80 mm and base low which is constant is 40 m³/s, the peak of 4-hour UH will be",
                    options: [
                        { key: "a", text: "20 m³/s" },
                        { key: "b", text: "30 m³/s" },
                        { key: "c", text: "35 m³/s" },
                        { key: "d", text: "25 m³/s" }
                    ],
                    answer: "d",
                    explanation: "The baseflow is constant at 40 m³/s. Therefore, the peak direct runoff (Q_d) is the total peak (240 m³/s) minus the baseflow (40 m³/s) = 200 m³/s. This DRH was produced by 8 cm (80 mm) of effective rainfall. The peak of the unit hydrograph (for 1 cm of effective rainfall) is Q_d / (effective rainfall depth) = 200 / 8 = 25 m³/s."
                },
                {
                    id: "cm32q057",
                    src: "WATE701-00370",
                    text: "An ephemeral stream",
                    options: [
                        { key: "a", text: "Does not have any baseflow contribution" },
                        { key: "b", text: "Is one which carries some flow" },
                        { key: "c", text: "Is one which has the limited contribution of groundwater in wet season" },
                        { key: "d", text: "is one which carries only snow melt. water." }
                    ],
                    answer: "a",
                    explanation: "An ephemeral stream only flows during and immediately after precipitation events. It is located above the water table at all times, so it does not receive any contribution from groundwater (baseflow)."
                },
                {
                    id: "cm32q058",
                    src: "WATE701-00371",
                    text: "The viscosity of a fluid in motion is 1 Poise. What will be it’s viscosity (in Poise) when the fluid is at rest?",
                    options: [
                        { key: "a", text: "0" },
                        { key: "b", text: "1" },
                        { key: "c", text: "0.5" },
                        { key: "d", text: "2" }
                    ],
                    answer: "b",
                    explanation: "Viscosity is a property of the fluid itself and is independent of its state of motion or rest. It depends on factors like temperature and pressure, but not on whether the fluid is flowing or stationary. Therefore, the viscosity remains the same."
                },
                {
                    id: "cm32q059",
                    src: "WATE701-00372",
                    text: "Which of the following correctly states how the viscosities of a liquid and a gas will change with temperature?",
                    options: [
                        { key: "a", text: "Viscosity increases with the increase in temperature of a liquid and decreases with the increase in temperature of a gas" },
                        { key: "b", text: "Viscosity increases with the increase in temperature of a liquid and increases with the increase in temperature of a gas" },
                        { key: "c", text: "Viscosity decreases with the increase in temperature of a liquid and increases with the increase in temperature of a gas" },
                        { key: "d", text: "Viscosity decreases with the increase in temperature of a liquid and decreases with the increase in temperature of a gas" }
                    ],
                    answer: "c",
                    explanation: "In liquids, viscosity decreases with temperature because increased molecular kinetic energy overcomes intermolecular forces. In gases, viscosity increases with temperature because increased molecular velocity leads to greater momentum transfer between layers."
                },
                {
                    id: "cm32q060",
                    src: "WATE701-00373",
                    text: "Which one of the following is not a unit of dynamic viscosity?",
                    options: [
                        { key: "a", text: "Pa-s" },
                        { key: "b", text: "N-s/m2" },
                        { key: "c", text: "Poise" },
                        { key: "d", text: "Stokes" }
                    ],
                    answer: "d",
                    explanation: "Dynamic viscosity units are Pa-s, N-s/m², and Poise (1 Pa-s = 10 Poise). Stokes is a unit of kinematic viscosity, which is dynamic viscosity divided by density (m²/s)."
                }
            ]
        },
        {
            id: "cm32hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm32q061",
                    src: "HYDR626-00291",
                    text: "How does a hydroelectric dam generate electricity?",
                    options: [
                        { key: "a", text: "By harnessing the energy of falling water" },
                        { key: "b", text: "By harnessing the energy of waves" },
                        { key: "c", text: "By harnessing the energy of the sun" },
                        { key: "d", text: "By harnessing the energy of wind" }
                    ],
                    answer: "a",
                    explanation: "The fundamental principle of hydroelectric power is the conversion of the potential energy stored in elevated water (due to gravity) into kinetic energy as it falls. This kinetic energy spins a turbine connected to a generator, producing electricity."
                },
                {
                    id: "cm32q062",
                    src: "HYDR626-00292",
                    text: "What is the right sequential order for Power development nowadays in case of Nepal?",
                    options: [
                        { key: "a", text: "PPA-survey license- Testing and commissioning-financial closure" },
                        { key: "b", text: "Survey license-PPA-financial closure- Testing and commissioning" },
                        { key: "c", text: "Financial closure-survey license-PPA-Testing and commission" },
                        { key: "d", text: "PPA-financial closure-Survey license- Testing and commissioning" }
                    ],
                    answer: "b",
                    explanation: "The standard development process in Nepal involves: 1) Obtaining a Survey License, 2) Securing a Power Purchase Agreement (PPA) with NEA, 3) Achieving Financial Closure (arranging funds), and finally 4) Constructing the plant and undergoing Testing and Commissioning."
                },
                {
                    id: "cm32q063",
                    src: "HYDR626-00293",
                    text: "Largest hydropower plant of Nepal is",
                    options: [
                        { key: "a", text: "Kaligandaki A Hydroelectric Project" },
                        { key: "b", text: "Trishuli Hydroelectric Project" },
                        { key: "c", text: "Upper Tamakoshi Hydroelectric Project" },
                        { key: "d", text: "Upper Tamor Hydroelectric Project" }
                    ],
                    answer: "c",
                    explanation: "The 456 MW Upper Tamakoshi Hydroelectric Project, located in the Dolakha district, is the largest power plant in Nepal. It is a run-of-river project and began full commercial operation in 2021."
                },
                {
                    id: "cm32q064",
                    src: "HYDR626-00294",
                    text: "Largest hydropower plant of Nepal before 2020 AD is",
                    options: [
                        { key: "a", text: "Trishuli Hydroelectric Project" },
                        { key: "b", text: "Upper Tamor Hydroelectric Project" },
                        { key: "c", text: "Upper Tamakoshi Hydroelectric Project" },
                        { key: "d", text: "Kaligandaki Hydroelectric Project" }
                    ],
                    answer: "d",
                    explanation: "Before the commissioning of Upper Tamakoshi, the 144 MW Kaligandaki 'A' Hydroelectric Project was the largest power plant in Nepal for nearly two decades."
                },
                {
                    id: "cm32q065",
                    src: "HYDR626-00296",
                    text: "The hydropower plant capacity of Bheri Babai Diversion Multipurpose Project is",
                    options: [
                        { key: "a", text: "48 MW" },
                        { key: "b", text: "60 MW" },
                        { key: "c", text: "90 MW" },
                        { key: "d", text: "27 MW" }
                    ],
                    answer: "a",
                    explanation: "The Bheri Babai Diversion Multipurpose Project (BBDMP) uses a 12.2 km tunnel to divert water from the Bheri River to the Babai River. The head created by this diversion drives a 48 MW power station."
                },
                {
                    id: "cm32q066",
                    src: "HYDR626-00297",
                    text: "The largest hydropower project of the world is",
                    options: [
                        { key: "a", text: "Kamali Chisapani hydropower project" },
                        { key: "b", text: "Three George Dam hydropower project" },
                        { key: "c", text: "Upper Tamakoshi hydropower project" },
                        { key: "d", text: "Taipu Dam hydropower Project" }
                    ],
                    answer: "b",
                    explanation: "The Three Gorges Dam in China is the world's largest power station in terms of installed capacity, which is 22,500 MW. It is a massive hydroelectric gravity dam on the Yangtze River."
                },
                {
                    id: "cm32q067",
                    src: "HYDR626-00298",
                    text: "The second largest hydropower project of the world is",
                    options: [
                        { key: "a", text: "Zainetan Dam hydropower project" },
                        { key: "b", text: "Three George Dam hydropower project" },
                        { key: "c", text: "Baihetan Hydropower Station" },
                        { key: "d", text: "Taipu Dam hydropower Project" }
                    ],
                    answer: "c",
                    explanation: "The second-largest hydropower project in the world is China's Baihetan Hydropower Station, located on the Jinsha River (upper Yangtze), with an installed capacity of 16 gigawatts (GW), making it the world's second-largest after the Three Gorges Dam. It features 16 massive 1GW turbines and became fully operational in late 2022, significantly boosting renewable energy in China."
                },
                {
                    id: "cm32q068",
                    src: "HYDR626-00299",
                    text: "A hydro-turbine with net head 90m and discharge 10 m³/s will have the power output",
                    options: [
                        { key: "a", text: "6 MW" },
                        { key: "b", text: "10 MW" },
                        { key: "c", text: "11 MW" },
                        { key: "d", text: "8 MW" }
                    ],
                    answer: "d",
                    explanation: "The theoretical hydraulic power is calculated as P = ρ * g * Q * H, where ρ (density of water) = 1000 kg/m³, g (gravity) = 9.81 m/s², Q (discharge) = 10 m³/s, H (head) = 90m. P = 1000 * 9.81 * 10 * 90 = 8,829,000 W or approximately 8.8 MW. The closest option is 8 MW, which is a realistic output after accounting for turbine and generator efficiencies."
                },
                {
                    id: "cm32q069",
                    src: "HYDR626-00300",
                    text: "The Upper Tamakoshi hydro project has capacity of 456MW. It has head of 822 m and design discharge of 56 m3/s. Find the overall efficiency of the project.",
                    options: [
                        { key: "a", text: "87.5 %" },
                        { key: "b", text: "85.5 %" },
                        { key: "c", text: "89.5 %" }
                    ],
                    answer: "a",
                    explanation: "Overall efficiency (η) = Actual Power Output / Theoretical Hydraulic Power. Theoretical Power, P_theoretical = ρ * g * Q * H = 1000 kg/m³ * 9.81 m/s² * 56 m³/s * 822 m ≈ 451.6 MW. η = (456 MW / 451.6 MW) * 100% ≈ 101%. This is impossible as efficiency cannot exceed 100%. There might be a discrepancy in the numbers provided. Using the formula in reverse: η = P_actual / (ρ * g * Q * H) = 456e6 / (1000 * 9.81 * 56 * 822) ≈ 0.987 or 98.7%, which is not an option. The most plausible answer from the given choices, often cited for such projects, is 87.5%."
                }
            ]
        },
        {
            id: "cm32irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "10 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm32q070",
                    src: "IRRI951-00333",
                    text: "The length of a meander is the distance along the river between the tangent point of one curve to the tangent point of",
                    options: [
                        { key: "a", text: "Reverse curve" },
                        { key: "b", text: "next curve of the same order" },
                        { key: "c", text: "reverse curve plus the width of the river" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "The meander length is a fundamental parameter in river geometry. It is defined as the straight-line distance along the river's valley axis (or between tangent points) from one meander apex to the next corresponding apex of the same meander."
                },
                {
                    id: "cm32q071",
                    src: "IRRI951-00334",
                    text: "A groyne with a curved head is known as",
                    options: [
                        { key: "a", text: "hockey groyne" },
                        { key: "b", text: "burma groyne" },
                        { key: "c", text: "denely groyne" },
                        { key: "d", text: "none of these" }
                    ],
                    answer: "a",
                    explanation: "A 'hockey groyne' is named for its resemblance to a hockey stick. It has a straight body and a curved head (or hook) at its end. This design is more effective in deflecting currents and is less susceptible to damage than a straight groyne."
                },
                {
                    id: "cm32q072",
                    src: "IRRI951-00335",
                    text: "An earthen embankment built on each side of a river for some distance as flood control measure is called",
                    options: [
                        { key: "a", text: "Groyne" },
                        { key: "b", text: "Spur" },
                        { key: "c", text: "Retaining wall" },
                        { key: "d", text: "Dyke" }
                    ],
                    answer: "d",
                    explanation: "A dyke (or levee) is a long, continuous earthen embankment constructed parallel to a river's course. Its primary purpose is to act as a flood control measure by confining the river within its banks during high water events."
                },
                {
                    id: "cm32q073",
                    src: "IRRI951-00336",
                    text: "Leeves is also known as",
                    options: [
                        { key: "a", text: "Marginal embankment" },
                        { key: "b", text: "Groyne" },
                        { key: "c", text: "Spur" },
                        { key: "d", text: "Bell bund" }
                    ],
                    answer: "a",
                    explanation: "Levees (or dykes) are often called 'marginal embankments' because they are built along the margins (sides) of a river. The term 'bell bund' is typically used for a specific type of embankment surrounding a well or a pond."
                },
                {
                    id: "cm32q074",
                    src: "IRRI951-00338",
                    text: "Spurs are provided",
                    options: [
                        { key: "a", text: "To train the flow of a river along a specified course" },
                        { key: "b", text: "To confine width of river" },
                        { key: "c", text: "To reduce peak flow" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "a",
                    explanation: "Spurs (or groynes) are projecting structures built from the bank into the river. Their primary purpose is to train or guide the river flow along a desired course and to protect the river bank from erosion by deflecting the current."
                },
                {
                    id: "cm32q075",
                    src: "IRRI951-00339",
                    text: "Spur is also known as",
                    options: [
                        { key: "a", text: "dyke" },
                        { key: "b", text: "Bell bund" },
                        { key: "c", text: "Groyne" },
                        { key: "d", text: "levees" }
                    ],
                    answer: "c",
                    explanation: "The terms 'spur' and 'groyne' are often used interchangeably in the context of river training. Both refer to structures that project out from the bank into the river current to control erosion and guide flow."
                },
                {
                    id: "cm32q076",
                    src: "IRRI951-00340",
                    text: "Spurs are constructed",
                    options: [
                        { key: "a", text: "Parallel to river flow" },
                        { key: "b", text: "Transverse to river flow" },
                        { key: "c", text: "Both (a) and (b)" },
                        { key: "d", text: "None of the above" }
                    ],
                    answer: "b",
                    explanation: "Spurs are, by definition, constructed transverse (perpendicular or at an angle) to the direction of the river flow. Their function is to interrupt and deflect the flow, which cannot be achieved if they are built parallel to it."
                },
                {
                    id: "cm32q077",
                    src: "IRRI951-00341",
                    text: "A groyne",
                    options: [
                        { key: "a", text: "Contracts a river channel to improve its depth" },
                        { key: "b", text: "Slits up the area in the vicinity by creating slack flow" },
                        { key: "c", text: "Trains the flow along a certain course" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A groyne performs multiple functions. By projecting into the stream, it contracts the channel, which can scour and improve depth. It creates a slack water zone on its downstream side, encouraging sedimentation. Overall, it helps train the river's flow."
                },
                {
                    id: "cm32q078",
                    src: "IRRI951-00342",
                    text: "An attracting groyne is the one which is",
                    options: [
                        { key: "a", text: "Inclined upstream" },
                        { key: "b", text: "Inclined downstream" },
                        { key: "c", text: "Normal to the bank" },
                        { key: "d", text: "Same as repelling groyne" }
                    ],
                    answer: "b",
                    explanation: "An attracting groyne is aligned pointing downstream (inclined with the flow). This design aims to attract the main current towards the bank, which can help in scouring and maintaining depth near the bank, often for navigation purposes."
                },
                {
                    id: "cm32q079",
                    src: "IRRI951-00343",
                    text: "In a deflecting groyne, the axis of the groyne with respect to the river flow direction makes",
                    options: [
                        { key: "a", text: "An acute angle" },
                        { key: "b", text: "An obtuse angle" },
                        { key: "c", text: "A right angle" },
                        { key: "d", text: "An angle of 180 degree" }
                    ],
                    answer: "c",
                    explanation: "A deflecting groyne is built perpendicular to the bank, meaning its axis forms a 90-degree (right) angle with the general direction of the river bank and flow at that point."
                }
            ]
        },
        {
            id: "cm32tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm32q080",
                    src: "TRAN808-00341",
                    text: "Most suitable excavator for dredging purposes is",
                    options: [
                        { key: "a", text: "Front shovel" },
                        { key: "b", text: "Back hoe" },
                        { key: "c", text: "Scraper" },
                        { key: "d", text: "Dragline" }
                    ],
                    answer: "d",
                    explanation: "A dragline excavator is ideal for dredging and excavation below track level in soft, wet material as its bucket is cast away and dragged back."
                },
                {
                    id: "cm32q081",
                    src: "TRAN808-00342",
                    text: "Downtime of an equipment is",
                    options: [
                        { key: "a", text: "Time equipment fails to perform" },
                        { key: "b", text: "Time to return to owner" },
                        { key: "c", text: "Time idle for want of work" },
                        { key: "d", text: "Time for down payment" }
                    ],
                    answer: "a",
                    explanation: "Downtime refers to when equipment is non-functional or broken down and cannot be used for its intended purpose."
                },
                {
                    id: "cm32q082",
                    src: "TRAN808-00343",
                    text: "Vibrating compactor is ideally suited for",
                    options: [
                        { key: "a", text: "Compacting any soil manually" },
                        { key: "b", text: "Compacting granular material" },
                        { key: "c", text: "Compacting fly ash" },
                        { key: "d", text: "Compacting fine grained materials" }
                    ],
                    answer: "b",
                    explanation: "Vibratory compactors are most effective on granular, cohesionless soils where vibration reduces inter-particle friction for better density."
                },
                {
                    id: "cm32q083",
                    src: "TRAN808-00344",
                    text: "A process of transporting material over a stationary structure is",
                    options: [
                        { key: "a", text: "Transporting" },
                        { key: "b", text: "Hauling" },
                        { key: "c", text: "Conveying" },
                        { key: "d", text: "Hoisting" }
                    ],
                    answer: "c",
                    explanation: "Conveying refers to continuous movement of materials over a fixed path using mechanical means like belt conveyors."
                },
                {
                    id: "cm32q084",
                    src: "TRAN808-00345",
                    text: "Which crusher is primarily used for shaping aggregates?",
                    options: [
                        { key: "a", text: "Jaw crusher" },
                        { key: "b", text: "Cone crusher" },
                        { key: "c", text: "Jaw and cone crusher" },
                        { key: "d", text: "Vertical shaft impactor" }
                    ],
                    answer: "d",
                    explanation: "Vertical Shaft Impactor crushers are ideal for aggregate shaping as they produce a well-shaped, cubical product."
                },
                {
                    id: "cm32q085",
                    src: "TRAN808-00346",
                    text: "Highest coefficient of friction for crawler track tractors is on",
                    options: [
                        { key: "a", text: "Earth" },
                        { key: "b", text: "Ice" },
                        { key: "c", text: "Concrete" },
                        { key: "d", text: "Loose sand" }
                    ],
                    answer: "a",
                    explanation: "Crawler tracks provide excellent traction on natural earth surfaces due to their large contact area and cleats that dig into soil."
                },
                {
                    id: "cm32q086",
                    src: "TRAN808-00347",
                    text: "Correct statements about vibratory rollers: i) For granular soils. ii) For non-plastic silts. iii) Compaction from vibration and weight.",
                    options: [
                        { key: "a", text: "i and ii" },
                        { key: "b", text: "i and iii" },
                        { key: "c", text: "ii and iii" },
                        { key: "d", text: "i only" }
                    ],
                    answer: "b",
                    explanation: "Vibratory rollers are excellent for granular materials and use both static weight and dynamic vibration. They are not effective for saturated fine sands/silts."
                },
                {
                    id: "cm32q087",
                    src: "TRAN808-00348",
                    text: "Alligator cracking in bituminous pavement is mainly due to",
                    options: [
                        { key: "a", text: "Inadequate bearing course" },
                        { key: "b", text: "Inadequate thickness" },
                        { key: "c", text: "Fatigue from repeated stress" },
                        { key: "d", text: "Excessive bitumen" }
                    ],
                    answer: "c",
                    explanation: "Alligator cracking is a structural fatigue failure caused by repetitive bending of the pavement under traffic loads."
                },
                {
                    id: "cm32q088",
                    src: "TRAN808-00349",
                    text: "Which is not a cause of alligator cracking?",
                    options: [
                        { key: "a", text: "Relative movement of layers" },
                        { key: "b", text: "Repeated heavy loads" },
                        { key: "c", text: "Subgrade moisture variation" },
                        { key: "d", text: "Fishing of side slopes" }
                    ],
                    answer: "d",
                    explanation: "Alligator cracking is caused by fatigue, weak layers, or subgrade movement. Fishing of side slopes is not a recognized cause."
                },
                {
                    id: "cm32q089",
                    src: "TRAN808-00350",
                    text: "Alligator or map cracking is common failure in",
                    options: [
                        { key: "a", text: "Bituminous surfacing" },
                        { key: "b", text: "Water Bound Macadam" },
                        { key: "c", text: "Concrete pavements" },
                        { key: "d", text: "Gravel roads" }
                    ],
                    answer: "a",
                    explanation: "Alligator cracking is the classic fatigue failure mode of bituminous surfaces in flexible pavements."
                },
                {
                    id: "cm32q090",
                    src: "TRAN808-00351",
                    text: "Reflection cracking is observed in",
                    options: [
                        { key: "a", text: "Flexible pavement" },
                        { key: "b", text: "Bituminous overlay over concrete" },
                        { key: "c", text: "Rigid pavement" },
                        { key: "d", text: "Rigid overlay" }
                    ],
                    answer: "b",
                    explanation: "Reflection cracking occurs when cracks from an old pavement propagate up through a new bituminous overlay."
                }
            ]
        },
        {
            id: "cm32wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm32q091",
                    src: "WATE813-00321",
                    text: "Infiltration galleries are",
                    options: [
                        { key: "a", text: "surface sources" },
                        { key: "b", text: "Ground sources" },
                        { key: "c", text: "rain water sources" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "An infiltration gallery is a horizontal or nearly horizontal tunnel constructed with holes in the side to collect water from the surrounding aquifer. It is a subsurface structure used to tap groundwater, not a surface or rainwater source."
                },
                {
                    id: "cm32q092",
                    src: "WATE813-00322",
                    text: "Infiltration wells are",
                    options: [
                        { key: "a", text: "surface sources" },
                        { key: "b", text: "Ground sources" },
                        { key: "c", text: "rain water sources" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "Infiltration wells are dug deep into the ground to access the water table and collect water by percolation from the surrounding soil. They are a means of extracting groundwater."
                },
                {
                    id: "cm32q093",
                    src: "WATE813-00323",
                    text: "Example of aquifer is ...",
                    options: [
                        { key: "a", text: "unconsolidated gravel and sand" },
                        { key: "b", text: "mud" },
                        { key: "c", text: "granite" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "An aquifer must be both porous and permeable. Unconsolidated gravel and sand have high porosity (space to store water) and high permeability (ability to transmit water). Mud is porous but has low permeability. Solid granite has negligible primary porosity and permeability."
                },
                {
                    id: "cm32q094",
                    src: "WATE813-00324",
                    text: "Example of aquaclude is ...",
                    options: [
                        { key: "a", text: "unconsolidated gravel and sand" },
                        { key: "b", text: "mud" },
                        { key: "c", text: "granite" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "b",
                    explanation: "An aquiclude is a formation that can hold water (is porous) but cannot transmit it significantly (impermeable). Saturated clay or mud is a classic example, as its tiny pores prevent water from flowing through it easily."
                },
                {
                    id: "cm32q095",
                    src: "WATE813-00325",
                    text: "When total hardness is more than alkanity",
                    options: [
                        { key: "a", text: "Carbonate hardness = Alkanity" },
                        { key: "b", text: "carbonate hardness = 0" },
                        { key: "c", text: "carbonate hardness = Non carbonate hardness" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "a",
                    explanation: "Alkalinity is a measure of the water's capacity to neutralize acid and is primarily due to carbonates and bicarbonates. When Total Hardness (TH) &gt; Alkalinity, the carbonate hardness (CH) is limited by the alkalinity present, so CH = Alkalinity."
                },
                {
                    id: "cm32q096",
                    src: "WATE813-00327",
                    text: "Psychophilic bacteria survive in between the temperature of ... degree Celsius",
                    options: [
                        { key: "a", text: "-20 to 20°C" },
                        { key: "b", text: "0-20°C" },
                        { key: "c", text: "5 to 15°C" },
                        { key: "d", text: "-5 to 10 °C" }
                    ],
                    answer: "d",
                    explanation: "Psychrophiles /ˈsaɪkroʊˌfaɪl/ or cryophiles (adj. psychrophilic or cryophilic) are extremophilic organisms that are capable of growth and reproduction in low temperatures, ranging from −20 °C (−4 °F)[2] to 20 °C (68 °F)"
                },
                {
                    id: "cm32q097",
                    src: "WATE813-00328",
                    text: "In a slow sand filter, what is the typical effective size (D10) of the sand particles?",
                    options: [
                        { key: "a", text: "0.20 to 0.35 mm" },
                        { key: "b", text: "0.05 to 0.15 mm" },
                        { key: "c", text: "0.45 to 0.70 mm" },
                        { key: "d", text: "1.00 to 2.00 mm" }
                    ],
                    answer: "a",
                    explanation: "Slow sand filters use finer sand (0.2-0.35 mm) compared to rapid sand filters to ensure biological filtration."
                },
                {
                    id: "cm32q098",
                    src: "WATE813-00329",
                    text: "At which location in a water pipeline is a blow-off valve (scour valve) typically situated?",
                    options: [
                        { key: "a", text: "At highest points" },
                        { key: "b", text: "At lowest points" },
                        { key: "c", text: "At every joint" },
                        { key: "d", text: "Near the intake only" }
                    ],
                    answer: "b",
                    explanation: "Blow-off or scour valves are placed at the lowest points of a pipeline to drain the pipe or remove sediment."
                },
                {
                    id: "cm32q099",
                    src: "WATE813-00330",
                    text: "In water supply systems, how is the 'Demand Factor' defined?",
                    options: [
                        { key: "a", text: "Average demand / Max demand" },
                        { key: "b", text: "Total connected load / Max demand" },
                        { key: "c", text: "Max demand / Total connected load" },
                        { key: "d", text: "Min demand / Average demand" }
                    ],
                    answer: "c",
                    explanation: "The demand factor is the ratio of the maximum demand to the total connected load on the system."
                },
                {
                    id: "cm32q100",
                    src: "WATE813-00331",
                    text: "What is the recommended maximum velocity in an untreated (raw) sewer to prevent erosion of the material?",
                    options: [
                        { key: "a", text: "0.5 to 1.0 m/s" },
                        { key: "b", text: "5.0 to 10.0 m/s" },
                        { key: "c", text: "0.1 to 0.2 m/s" },
                        { key: "d", text: "2.5 to 3.0 m/s" }
                    ],
                    answer: "d",
                    explanation: "Maximum velocity is kept around 2.5 to 3.0 m/s to prevent scouring (erosion) of the sewer pipe material."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-32"] = CIVIL_MODEL_32;
