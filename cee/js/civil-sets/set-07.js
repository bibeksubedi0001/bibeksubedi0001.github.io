/* ============================================================
   CIVIL MODEL SET 7 — Civil Engineering licence-style model paper
   100 questions · 120 minutes · no negative marking

     Basic Civil Engineering...................  13
     Structural Mechanics......................  11
     Design of Structures......................  10
     Soil Mechanics and Foundation.............  13
     Basic Water Resources Engineering.........  12
     Hydropower................................   9
     Irrigation and Drainage...................  11
     Transportation............................  11
     Water Supply, Sanitation and Environment..  10

   Generated from the civil engineering question bank; every bank
   question is used in exactly one set. Identical duplicate options
   were collapsed, and the key was rotated across a/b/c/d except on
   questions whose options refer to other options.
   The "src" field on each question is its id in the source bank.
   ============================================================ */
const CIVIL_MODEL_7 = {
    day: 37,
    kind: "model",
    badge: { top: "Model", main: "C7" },
    title: "Civil Model Set 7",
    subtitle: "Civil Engineering · 9 subjects",
    durationMinutes: 120,
    negativeMarking: 0,
    chapters: [
        {
            id: "cm7basi",
            name: "Basic Civil Engineering",
            subject: "Basic Civil",
            accent: "blue",
            blurb: "13 questions drawn from the Basic Civil Engineering bank.",
            questions: [
                {
                    id: "cm7q001",
                    src: "BASI674-00066",
                    text: "The process of determining fair price or value of a property is known as",
                    options: [
                        { key: "a", text: "depreciation" },
                        { key: "b", text: "inflation" },
                        { key: "c", text: "valuation" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "Valuation is the process of estimating the fair present worth of a property, taking account of its cost, condition, age, location, income and the state of the market. Depreciation is only one input to it."
                },
                {
                    id: "cm7q002",
                    src: "BASI674-00067",
                    text: "For repetitive use, formworks in concrete construction, what material is preferred",
                    options: [
                        { key: "a", text: "Steel" },
                        { key: "b", text: "Stone" },
                        { key: "c", text: "Timber" },
                        { key: "d", text: "Bamboo" }
                    ],
                    answer: "a",
                    explanation: "Steel forms are preferred for repeated use because they hold their shape, do not absorb water or warp, strip cleanly and last for a hundred or more uses, which spreads their higher first cost over many pours."
                },
                {
                    id: "cm7q003",
                    src: "BASI674-00068",
                    text: "Le-Chatelier’s device is used for determining the:",
                    options: [
                        { key: "a", text: "Setting time of cement" },
                        { key: "b", text: "Soundness" },
                        { key: "c", text: "Tensile strength" },
                        { key: "d", text: "Compressive strength" }
                    ],
                    answer: "b",
                    explanation: "Le Chatelier's apparatus measures soundness. The split mould is boiled with the cement paste inside and the spread of the two indicator points shows how much free lime expands on hydration; excessive expansion would crack the hardened concrete."
                },
                {
                    id: "cm7q004",
                    src: "BASI674-00069",
                    text: "In which of the following, CG and geometric center doesn’t coincide.",
                    options: [
                        { key: "a", text: "Circle Equilateral" },
                        { key: "b", text: "Triangle" },
                        { key: "c", text: "Right angle triangle" },
                        { key: "d", text: "Rectangle" }
                    ],
                    answer: "c",
                    explanation: "A figure with an axis of symmetry has its centroid on that axis, so for a circle, an equilateral triangle or a rectangle the centroid coincides with the geometric centre. A right-angled triangle is unsymmetrical, so its centroid lies at one third of the base and one third of the height."
                },
                {
                    id: "cm7q005",
                    src: "BASI674-00070",
                    text: "Standard Section modulus of a hollow circular section",
                    options: [
                        { key: "a", text: "Z = π(D<sup>5</sup> - d<sup>4</sup>)/3OD" },
                        { key: "b", text: "Z = π(D<sup>4</sup> - d<sup>4</sup>)/16D" },
                        { key: "c", text: "Z = π(D<sup>2</sup> - d<sup>2</sup>)/32D" },
                        { key: "d", text: "Z = π(D<sup>4</sup> - d<sup>2</sup>)/32D" }
                    ],
                    answer: "d",
                    explanation: "Standard Section Modulus (for bending) \\(Z = \\frac{\\pi(D^4 - d^4)}{32D}\\) Polar Section Modulus (for torsion) \\(Z_p = \\frac{\\pi(D^4 - d^4)}{16D}\\)"
                },
                {
                    id: "cm7q006",
                    src: "BASI674-00071",
                    text: "Which of the following doesn’t determine the capability of GIS?",
                    options: [
                        { key: "a", text: "Transferring data" },
                        { key: "b", text: "Defining a map" },
                        { key: "c", text: "Representing cartographic features" },
                        { key: "d", text: "Retrieving data" }
                    ],
                    answer: "a",
                    explanation: "Defining map geometry, representing cartographic features and retrieving data are all core GIS functions. Merely transferring files from one machine to another is ordinary data handling and does not distinguish a GIS from any other software."
                },
                {
                    id: "cm7q007",
                    src: "BASI674-00072",
                    text: "Find the perpendicular distance if the radius of the curve is 10.26 m and the angle is 0 = 10° 24'.",
                    options: [
                        { key: "a", text: "0.402 m" },
                        { key: "b", text: "0.042 m" },
                        { key: "c", text: "0.204 m" },
                        { key: "d", text: "0.024 m" }
                    ],
                    answer: "b",
                    explanation: "The mid-ordinate of a circular curve is M equal to R times (1 minus cos of half the deflection angle). With R equal to 10.26 m and the angle 10 degrees 24 minutes, half of it is 5 degrees 12 minutes, and the bracket works out at 0.0041, giving about 0.042 m."
                },
                {
                    id: "cm7q008",
                    src: "BASI674-00073",
                    text: "In closed traverse, the sum of the north latitudes is more than the sum of the south latitudes and also the sum of west departures is more than the sum of the east departures, the bearing of the closing line is in the",
                    options: [
                        { key: "a", text: "NE quadrant" },
                        { key: "b", text: "SE quadrant" },
                        { key: "c", text: "NW quadrant" },
                        { key: "d", text: "SW quadrant" }
                    ],
                    answer: "c",
                    explanation: "The closing error has a northerly component, since north latitudes exceed south, and a westerly component, since west departures exceed east. A bearing with north and west components lies in the north-west quadrant."
                },
                {
                    id: "cm7q009",
                    src: "BASI674-00075",
                    text: "The sag correction in surveys is always",
                    options: [
                        { key: "a", text: "Positive" },
                        { key: "b", text: "Negative" },
                        { key: "c", text: "Zero" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "b",
                    explanation: "Sag correction is always negative because the tape sags downward under its own weight, making the measured length longer than the actual length. This error must be subtracted from the measured distance."
                },
                {
                    id: "cm7q010",
                    src: "BASI674-00076",
                    text: "What is the true area (in acres), if the area calculated by a chain which is found to be 0.8 link too long is 100 acres?",
                    options: [
                        { key: "a", text: "101.6" },
                        { key: "b", text: "100.8" },
                        { key: "c", text: "99.2" },
                        { key: "d", text: "98.4" }
                    ],
                    answer: "a",
                    explanation: "True Area = (Measured Area) * (Actual Chain Length / Designated Chain Length)². Here, the chain is too long, meaning it measures less than actual. Designated length is 100 links, actual is 100.8 links. True Area = 100 * (100.8/100)² = 100 * 1.016064 = 101.6064 acres ≈ 101.6 acres."
                },
                {
                    id: "cm7q011",
                    src: "BASI674-00077",
                    text: "Correction per chain length of 100 links along a slope of α° is",
                    options: [
                        { key: "a", text: "1.5α/100" },
                        { key: "b", text: "1.5α²/100" },
                        { key: "c", text: "15α²/100" },
                        { key: "d", text: "1.5α³" }
                    ],
                    answer: "b",
                    explanation: "The slope correction formula for a length L is C = L - Lcosα ≈ L(1 - cosα). For small angles, cosα ≈ 1 - α²/2 (α in radians). Converting degrees to radians (α_rad = α° * π/180 ≈ α/57.3), the approximation leads to a standard formula often given as Correction = L(α²/2) with α in radians. For a 100 link chain and α in degrees, a common approximation is Correction (in links) = 1.5α²/100. Verified"
                },
                {
                    id: "cm7q012",
                    src: "BASI674-00078",
                    text: "An angle of 45° with a chain line may be set out with",
                    options: [
                        { key: "a", text: "Optical square" },
                        { key: "b", text: "Open cross staff" },
                        { key: "c", text: "French cross staff" },
                        { key: "d", text: "Prismatic square" }
                    ],
                    answer: "c",
                    explanation: "An optical square is used for setting out 90° angles. An open cross-staff is used for setting out 90° angles. A French cross-staff has arms set at 45° and 90° to each other, allowing for the setting out of 45° angles. A prismatic square is used for setting out 90° angles."
                },
                {
                    id: "cm7q013",
                    src: "BASI674-00079",
                    text: "The rise and fall method of leveling is :",
                    options: [
                        { key: "a", text: "Less accurate than height of instrument method" },
                        { key: "b", text: "Is not suitable for leveling with tilting levels." },
                        { key: "c", text: "Quicker and less tedious for large number of intermediate sights" },
                        { key: "d", text: "Provides a check on the reduction of intermediate levels" }
                    ],
                    answer: "d",
                    explanation: "The rise and fall method involves calculating the difference in level between consecutive points for each staff reading. The arithmetic check (ΣBS - ΣFS = ΣRise - ΣFall = Last R.L. - First R.L.) provides a complete check on all the intermediate reduced levels (R.L.s), which the Height of Instrument method does not do for intermediates."
                }
            ]
        },
        {
            id: "cm7stru",
            name: "Structural Mechanics",
            subject: "Structural Mech",
            accent: "cyan",
            blurb: "11 questions drawn from the Structural Mechanics bank.",
            questions: [
                {
                    id: "cm7q014",
                    src: "STRU935-00056",
                    text: "In influence line diagrams (ILD) :-",
                    options: [
                        { key: "a", text: "Points remain fixed, position of load changes" },
                        { key: "b", text: "Points change, position of loads remain fixed" },
                        { key: "c", text: "Both of them changes" },
                        { key: "d", text: "Neither of them changes" }
                    ],
                    answer: "a",
                    explanation: "An influence line is drawn for one fixed section, and it shows how a chosen effect at that section varies as a unit load rolls across the structure. A bending moment diagram is the opposite: the load is fixed and the section varies."
                },
                {
                    id: "cm7q015",
                    src: "STRU935-00057",
                    text: "Maximum bending moment in three hinged arches under point load occurs on either side of its crown at",
                    options: [
                        { key: "a", text: "h/4" },
                        { key: "b", text: "L/(2√3)" },
                        { key: "c", text: "L/4" },
                        { key: "d", text: "L/(3√2)" }
                    ],
                    answer: "b",
                    explanation: "For a three-hinged parabolic arch under a rolling point load, the greatest bending moment occurs at L over 2 root 3 on either side of the crown, that is about 0.29L from it. The arch is momentless at the crown and at both springings, so the peak has to fall between them."
                },
                {
                    id: "cm7q016",
                    src: "STRU935-00058",
                    text: "In a three hinged symmetric semicircular arch of span 40m and central rise 8m, 80kN point load is acting at a distance of 6m from support A. Determine Horizontal thrust.",
                    options: [
                        { key: "a", text: "100kN" },
                        { key: "b", text: "120kN" },
                        { key: "c", text: "30kN" },
                        { key: "d", text: "140kN" }
                    ],
                    answer: "c",
                    explanation: "In a three-hinged arch the moment at the crown hinge must vanish, so H times the rise equals the simple-beam moment at the crown. The reactions are 68 kN and 12 kN, giving a crown moment of 68 times 20 minus 80 times 14, that is 240 kNm. Dividing by the 8 m rise gives H equal to 30 kN. The key has been corrected from the printed 100 kN."
                },
                {
                    id: "cm7q017",
                    src: "STRU935-00059",
                    text: "Increase in permissible stress in design of wall subjected to eccentric load with eccentricity ratio &gt;1/24 is?",
                    options: [
                        { key: "a", text: "10%" },
                        { key: "b", text: "20%" },
                        { key: "c", text: "33.33%" },
                        { key: "d", text: "25%" }
                    ],
                    answer: "d",
                    explanation: "Where the eccentricity ratio exceeds one twenty-fourth, codes allow the permissible compressive stress in the wall to be raised by 25 percent, because the peak stress is confined to one edge and is relieved by the redistribution that occurs as the section yields locally."
                },
                {
                    id: "cm7q018",
                    src: "STRU935-00060",
                    text: "A plane truss has 11 members and 8 joints, how many additional members are needed to make the truss stable?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "0" },
                        { key: "c", text: "1" },
                        { key: "d", text: "3" }
                    ],
                    answer: "a",
                    explanation: "m=2j−3 m=2*8−3=16−3=13 The truss currently has 11 members, so the additional members needed are: 13−11=2"
                },
                {
                    id: "cm7q019",
                    src: "STRU935-00061",
                    text: "Which of the following is indeterminate structure?",
                    options: [
                        { key: "a", text: "Three hinge arches" },
                        { key: "b", text: "Two hinge arches" },
                        { key: "c", text: "Simple supported beam" },
                        { key: "d", text: "Cantilever beam" }
                    ],
                    answer: "b",
                    explanation: "A two-hinged arch has four reaction components against three equations of statics, so it is indeterminate to the first degree. Adding the crown hinge, as in a three-hinged arch, supplies the extra condition of zero moment there and makes it determinate."
                },
                {
                    id: "cm7q020",
                    src: "STRU935-00062",
                    text: "The bending moment in an arch is zero when.",
                    options: [
                        { key: "a", text: "The line of thrust is parallel to the line of the axis." },
                        { key: "b", text: "Ends are fixed." },
                        { key: "c", text: "Ends are hinged." },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "a",
                    explanation: "An arch carries load purely in compression when its axis follows the line of thrust for that loading, so the eccentricity, and hence the bending moment, is zero everywhere. That is why a parabolic profile suits a uniformly distributed load and a catenary suits self-weight."
                },
                {
                    id: "cm7q021",
                    src: "STRU935-00063",
                    text: "The locus of reaction of a two hinged semi-circular arch, is",
                    options: [
                        { key: "a", text: "straight line" },
                        { key: "b", text: "parabola" },
                        { key: "c", text: "hyperbola" },
                        { key: "d", text: "Circle" }
                    ],
                    answer: "d",
                    explanation: "For a two-hinged semicircular arch the locus of the reaction at a support, as the position of a unit load varies, traces a circle. The construction is used to find the worst position of a moving load quickly."
                },
                {
                    id: "cm7q022",
                    src: "STRU935-00064",
                    text: "Radial shear in two hinged arch, tangent to the arch makes an angle theta with horizontal.",
                    options: [
                        { key: "a", text: "Vcosθ-Hsinθ" },
                        { key: "b", text: "Hcosθ+Vsinθ" },
                        { key: "c", text: "Vcosθ+Hsinθ" },
                        { key: "d", text: "Hcosθ-Vsinθ" }
                    ],
                    answer: "a",
                    explanation: "Radial shear is the component of the resultant perpendicular to the arch axis, which is V cos theta minus H sin theta, while the component along the axis, H cos theta plus V sin theta, is the normal thrust."
                },
                {
                    id: "cm7q023",
                    src: "STRU935-00065",
                    text: "Stiffness matrix method is also called",
                    options: [
                        { key: "a", text: "Flexibility method" },
                        { key: "b", text: "Force method" },
                        { key: "c", text: "Displacement method" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "c",
                    explanation: "The stiffness matrix method takes the joint displacements as the unknowns, so it is the displacement method. The flexibility or force method is its counterpart, in which redundant forces are the unknowns; matrix stiffness is preferred for computers because the assembly is systematic."
                },
                {
                    id: "cm7q024",
                    src: "STRU935-00066",
                    text: "Stiffness of the end A if the far end B is vertical guided roller is ______",
                    options: [
                        { key: "a", text: "E/L" },
                        { key: "b", text: "2E/L" },
                        { key: "c", text: "3E/L" },
                        { key: "d", text: "4E/L" }
                    ],
                    answer: "c",
                    explanation: "Stiffness is the moment required at A to produce unit rotation there. It depends on the far end: 4EI over L when B is fixed, 3EI over L when B is pinned, and only EI over L when B is on a guided support that can translate but not rotate."
                }
            ]
        },
        {
            id: "cm7desi",
            name: "Design of Structures",
            subject: "Design of Str",
            accent: "slate",
            blurb: "10 questions drawn from the Design of Structures bank.",
            questions: [
                {
                    id: "cm7q025",
                    src: "DESI787-00050",
                    text: "Commonly used steel section for columns?",
                    options: [
                        { key: "a", text: "ISMB" },
                        { key: "b", text: "ISLB" },
                        { key: "c", text: "ISSC" },
                        { key: "d", text: "ISWB" }
                    ],
                    answer: "d",
                    explanation: "Indian Standard Wide Flange Beam sections are the usual choice for columns because their flange width is close to the depth, so the radii of gyration about the two axes are comparable and the section is not unduly weak about the minor axis."
                },
                {
                    id: "cm7q026",
                    src: "DESI787-00051",
                    text: "Web crippling in steel beam occurs due to",
                    options: [
                        { key: "a", text: "Failure of web under concentrated load" },
                        { key: "b", text: "Excessive bending moment" },
                        { key: "c", text: "Secondary bending moment" },
                        { key: "d", text: "Column action of compression flange" }
                    ],
                    answer: "a",
                    explanation: "Web crippling is a local crushing failure of the web just where a concentrated load or reaction is applied, at the root of the fillet. It is prevented by spreading the load over a longer bearing or by adding bearing stiffeners."
                },
                {
                    id: "cm7q027",
                    src: "DESI787-00052",
                    text: "A fillet weld whose axis is parallel to the direction of the applied load, is known as",
                    options: [
                        { key: "a", text: "diagonal filler weld" },
                        { key: "b", text: "end fillet weld" },
                        { key: "c", text: "side fillet weld" },
                        { key: "d", text: "all the above" }
                    ],
                    answer: "c",
                    explanation: "A side fillet weld has its axis parallel to the direction of the load, so it is stressed in shear along its throat. An end fillet lies across the load, and codes treat the two differently because their stress distributions and strengths differ."
                },
                {
                    id: "cm7q028",
                    src: "DESI787-00053",
                    text: "Which of them makes maximum influence on steel",
                    options: [
                        { key: "a", text: "Iron" },
                        { key: "b", text: "Aluminum" },
                        { key: "c", text: "Carbon" },
                        { key: "d", text: "Phosphorous" }
                    ],
                    answer: "c",
                    explanation: "Carbon has the greatest influence on steel: raising it increases strength and hardness but sharply reduces ductility and weldability. Structural steels therefore keep carbon low, typically around 0.2 percent."
                },
                {
                    id: "cm7q029",
                    src: "DESI787-00054",
                    text: "For the reversal of stresses, the most suitable bolt is",
                    options: [
                        { key: "a", text: "Black bolt" },
                        { key: "b", text: "Turned bolt" },
                        { key: "c", text: "Friction grip bolt" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "High strength friction grip bolts are pre-tensioned so hard that the plates transfer load by friction, with no slip in the hole. That makes them the right choice where the stress reverses, since ordinary bolts would work loose as the load alternated."
                },
                {
                    id: "cm7q030",
                    src: "DESI787-00055",
                    text: "The overlap for a weld connection in a batten should not be less than",
                    options: [
                        { key: "a", text: "4t" },
                        { key: "b", text: "3t" },
                        { key: "c", text: "6t" },
                        { key: "d", text: "8t" }
                    ],
                    answer: "a",
                    explanation: "The overlap for a batten plate with the main member in a welded connection should not be less than four times the thickness of the batten plate (4t), according to structural steel design standards like IS 800: 2007."
                },
                {
                    id: "cm7q031",
                    src: "DESI787-00056",
                    text: "What is the net section area of steel plate 40cm wide and 10mm thick with one bolt if diameter of bolt hole is 18mm?",
                    options: [
                        { key: "a", text: "24 cm²" },
                        { key: "b", text: "38.2 cm²" },
                        { key: "c", text: "578 mm²" },
                        { key: "d", text: "465 mm²" }
                    ],
                    answer: "b",
                    explanation: "The net width is the gross width less the hole, that is 400 minus 18, or 382 mm. Multiplying by the 10 mm thickness gives 3820 square millimetres, which is 38.2 square centimetres."
                },
                {
                    id: "cm7q032",
                    src: "DESI787-00057",
                    text: "The Euler's crippling load for a 2 m long slender steel rod of uniform cross-section hinged at both the ends is 1 kN. The Euler's crippling load for a 1 m long steel rod of the same cross-section and hinged at both the ends will be",
                    options: [
                        { key: "a", text: "2kN" },
                        { key: "b", text: "6kN" },
                        { key: "c", text: "4kN" },
                        { key: "d", text: "8kN" }
                    ],
                    answer: "c",
                    explanation: "Euler's critical load varies inversely with the square of the effective length. Halving the length therefore multiplies the buckling load by four, so a 1 m rod carries 4 kN where a 2 m rod carried 1 kN."
                },
                {
                    id: "cm7q033",
                    src: "DESI787-00058",
                    text: "Minimum edge distance and end distance for rolled, machine flame cut is",
                    options: [
                        { key: "a", text: "1.7xhole diameter" },
                        { key: "b", text: "1.2xhole diameter" },
                        { key: "c", text: "2.0xhole diameter" },
                        { key: "d", text: "1.5xhole diameter" }
                    ],
                    answer: "d",
                    explanation: "For a rolled, machine flame cut or sawn edge the minimum edge and end distance is 1.5 times the hole diameter. A sheared or hand flame cut edge is rougher and needs 1.7 times, since the material there is more likely to tear."
                },
                {
                    id: "cm7q034",
                    src: "DESI787-00059",
                    text: "Shape factor of rolled beam lies between",
                    options: [
                        { key: "a", text: "1.10 to 1.20" },
                        { key: "b", text: "1.20 to 1.30" },
                        { key: "c", text: "1.30 to 1.40" },
                        { key: "d", text: "1.40 to 1.50" }
                    ],
                    answer: "a",
                    explanation: "The shape factor is the ratio of the plastic to the elastic section modulus, and for a rolled I-section it is about 1.10 to 1.20, because most of the area is already concentrated in the flanges. A rectangle reaches 1.5 and a circle about 1.7."
                }
            ]
        },
        {
            id: "cm7soil",
            name: "Soil Mechanics and Foundation",
            subject: "Soil Mechanics",
            accent: "amber",
            blurb: "13 questions drawn from the Soil Mechanics and Foundation bank.",
            questions: [
                {
                    id: "cm7q035",
                    src: "SOIL136-00066",
                    text: "Which foundation is constructed in group?",
                    options: [
                        { key: "a", text: "pier" },
                        { key: "b", text: "pile" },
                        { key: "c", text: "well" },
                        { key: "d", text: "caisson" }
                    ],
                    answer: "b",
                    explanation: "Piles are almost always driven or bored in groups and tied together by a pile cap, so that the load is shared and the group can resist moment as well as vertical load. Piers, wells and caissons are large single units."
                },
                {
                    id: "cm7q036",
                    src: "SOIL136-00067",
                    text: "Gross area of footing is dependent on",
                    options: [
                        { key: "a", text: "Load from superstructure" },
                        { key: "b", text: "Type of soil" },
                        { key: "c", text: "Bearing capacity of soil" },
                        { key: "d", text: "All of these" }
                    ],
                    answer: "d",
                    explanation: "The plan area of a footing follows from the load coming down from the superstructure divided by the safe bearing capacity, which itself depends on the type of soil, so all three factors govern it."
                },
                {
                    id: "cm7q037",
                    src: "SOIL136-00068",
                    text: "Mat foundation is provided when...",
                    options: [
                        { key: "a", text: "Heavy load has to be transferred" },
                        { key: "b", text: "Isolated footing covers more than 50% area" },
                        { key: "c", text: "Weak soil" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "A raft is chosen when any of these apply: the loads are heavy, individual footings would cover more than about half the plan area, or the soil is weak and compressible so that differential settlement must be evened out by a single rigid slab."
                },
                {
                    id: "cm7q038",
                    src: "SOIL136-00069",
                    text: "Which of the following is not among the common types of Mat foundation?",
                    options: [
                        { key: "a", text: "Double flat plate thickened" },
                        { key: "b", text: "Flat plate type" },
                        { key: "c", text: "Box structures" },
                        { key: "d", text: "Mats on piles" }
                    ],
                    answer: "a",
                    explanation: "The usual mat types are the flat plate, the flat plate thickened under columns, the beam and slab or waffle mat, the box or cellular raft, and mats supported on piles. There is no separate double flat plate thickened type."
                },
                {
                    id: "cm7q039",
                    src: "SOIL136-00070",
                    text: "If there are 2 or more columns in a foundation, then what is the name of foundation?",
                    options: [
                        { key: "a", text: "Mat foundation" },
                        { key: "b", text: "Combined footing" },
                        { key: "c", text: "Raft footing" },
                        { key: "d", text: "Pile foundation" }
                    ],
                    answer: "b",
                    explanation: "A footing that supports two or more columns on one base is a combined footing, used where columns are close together or where a boundary prevents a column from being centred on its own footing. A raft, by contrast, covers the whole building area."
                },
                {
                    id: "cm7q040",
                    src: "SOIL136-00071",
                    text: "How much minimum depth below soil, footing is provided?",
                    options: [
                        { key: "a", text: "400mm" },
                        { key: "b", text: "600mm" },
                        { key: "c", text: "500mm" },
                        { key: "d", text: "300mm" }
                    ],
                    answer: "c",
                    explanation: "Foundations are taken at least 500 mm below finished ground so that they sit below the zone of seasonal moisture change, root action and surface erosion, and rest on soil that has not been disturbed by frost or by surface works."
                },
                {
                    id: "cm7q041",
                    src: "SOIL136-00072",
                    text: "The minimum depth of foundation, according to Rankine's formula will be: - (Given that q = 180 KN/m², γ = 20 KN/m² and Φ = 30°)",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "8m" },
                        { key: "c", text: "0.5m" },
                        { key: "d", text: "1m" }
                    ],
                    answer: "d",
                    explanation: "Rankine's minimum depth is q over gamma, times the square of (1 minus sin phi) over (1 plus sin phi). That is 180 over 20, which is 9, times one third squared, so the depth works out at 1 m."
                },
                {
                    id: "cm7q042",
                    src: "SOIL136-00073",
                    text: "Bearing capacity is calculated from.",
                    options: [
                        { key: "a", text: "SPT value" },
                        { key: "b", text: "Pile load test" },
                        { key: "c", text: "Shear strength parameter" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "d",
                    explanation: "Bearing capacity can be established from any of these: correlations with standard penetration test blow counts, a full-scale pile or plate load test, or bearing capacity theory using the shear strength parameters c and phi from laboratory tests."
                },
                {
                    id: "cm7q043",
                    src: "SOIL136-00074",
                    text: "The bearing capacity depends upon",
                    options: [
                        { key: "a", text: "soil type" },
                        { key: "b", text: "type of foundation" },
                        { key: "c", text: "water table depth" },
                        { key: "d", text: "all of the above" }
                    ],
                    answer: "d",
                    explanation: "Bearing capacity depends on the soil type and its shear strength, on the shape, depth and size of the foundation, and on the depth of the water table, which reduces the effective unit weight and can nearly halve the capacity."
                },
                {
                    id: "cm7q044",
                    src: "SOIL136-00075",
                    text: "Settlements formula for cohesion less formula from plate load test",
                    options: [
                        { key: "a", text: "Sf=Bp*Sp/Bf" },
                        { key: "b", text: "Sp/Sf=((Bp (Bf-0.3))/(Bf (Bp-0.3)))²" },
                        { key: "c", text: "Sf=Bf*Sp/Bp" },
                        { key: "d", text: "Sp/Sf=((Bp (Bf+0.3))/(Bf (Bp+0.3)))²" }
                    ],
                    answer: "c",
                    explanation: "For cohesionless soils the settlement scales with the width, so Sf equals Bf times Sp over Bp for a first estimate. Terzaghi's more refined expression adds the 0.3 m terms to allow for the fact that the relationship is not exactly linear at larger widths."
                },
                {
                    id: "cm7q045",
                    src: "SOIL136-00076",
                    text: "Formula for Ultimate bearing capacity of square footing?",
                    options: [
                        { key: "a", text: "Quit=CNc+qNq+0.5BγNy" },
                        { key: "b", text: "Quit=CNc+qNq+0.4BγNy" },
                        { key: "c", text: "Quit=1.2CNc+qNq+0.3BγNy" },
                        { key: "d", text: "Quit=1.2CNc+qNq+0.4BγNy" }
                    ],
                    answer: "d",
                    explanation: "Terzaghi's equation for a square footing carries shape factors of 1.2 on the cohesion term and 0.4 on the width term, giving qu equal to 1.2 c Nc plus q Nq plus 0.4 B gamma N gamma. The strip footing values are 1.0 and 0.5."
                },
                {
                    id: "cm7q046",
                    src: "SOIL136-00077",
                    text: "The bearing capacity of square footing is",
                    options: [
                        { key: "a", text: "\\(Q_u = 1.3cN_c + \\gamma DN_q + 0.4\\gamma BN_\\gamma\\)" },
                        { key: "b", text: "\\(Q_u = cN_c + \\gamma DN_q + 0.5\\gamma BN_\\gamma\\)" },
                        { key: "c", text: "\\(Q_u = 1.3cN_c + \\gamma DN_q + 0.3\\gamma BN_\\gamma\\)" },
                        { key: "d", text: "\\(Q_u = 1.3cN_c + \\gamma DN_q + 0.5\\gamma BN_\\gamma\\)" }
                    ],
                    answer: "a",
                    explanation: "Some texts quote the square footing shape factors as 1.3 on the cohesion term and 0.4 on the width term. Whichever set is used, the pattern is the same: a square base gains on the cohesion term and loses on the self-weight term compared with a long strip."
                },
                {
                    id: "cm7q047",
                    src: "SOIL136-00078",
                    text: "For purely cohesive soil, the bearing capacity is given by which of the following equations?",
                    options: [
                        { key: "a", text: "qf = 5.7 c + σ" },
                        { key: "b", text: "qf = c + σ" },
                        { key: "c", text: "qf = 5.7 c" },
                        { key: "d", text: "All of the above" }
                    ],
                    answer: "a",
                    explanation: "For a purely cohesive soil, phi is zero, so Nq is 1 and N gamma is 0, and Nc takes the value 5.7. The equation collapses to qf equal to 5.7c plus the surcharge sigma, which shows that the width of the footing does not matter for a clay."
                }
            ]
        },
        {
            id: "cm7watr",
            name: "Basic Water Resources Engineering",
            subject: "Water Resources",
            accent: "emerald",
            blurb: "12 questions drawn from the Basic Water Resources Engineering bank.",
            questions: [
                {
                    id: "cm7q048",
                    src: "WATE701-00061",
                    text: "At what value of Froude number is the jump considered a steady jump?",
                    options: [
                        { key: "a", text: "F₁ = 1" },
                        { key: "b", text: "F₁ = 4.5 to 9" },
                        { key: "c", text: "F₁ = 1.7 to 4.5" },
                        { key: "d", text: "F₁ = 9" }
                    ],
                    answer: "c",
                    explanation: "A hydraulic jump with an approach Froude number between 1.7 and 4.5 is classed as a weak or oscillating jump; the steady jump, the type wanted in a stilling basin because it is well defined and dissipates energy efficiently, occurs from about 4.5 to 9."
                },
                {
                    id: "cm7q049",
                    src: "WATE701-00062",
                    text: "The area of a triangular section is 66.72m² and the wetted perimeter of the section is 24.03m. Calculate the value of the Manning's rugosity, if the bed slope of the channel is 1:500 and the discharge through the channel is 117.6 cusec",
                    options: [
                        { key: "a", text: "0.03" },
                        { key: "b", text: "0.04" },
                        { key: "c", text: "0.06" },
                        { key: "d", text: "0.05" }
                    ],
                    answer: "d",
                    explanation: "From Manning's equation n equals A R to the two thirds, times the root of S, divided by Q. The hydraulic radius is 66.72 over 24.03, that is 2.776 m, whose two-thirds power is 1.976. So n is 66.72 times 1.976 times 0.0447, divided by 117.6, which gives about 0.05. The key has been corrected from the printed 0.04."
                },
                {
                    id: "cm7q050",
                    src: "WATE701-00063",
                    text: "The sequent depths in a hydraulic jump occurring in a horizontal rectangular channel are 0.25m and 1.25m. The energy lost in this jump is:",
                    options: [
                        { key: "a", text: "0.8m" },
                        { key: "b", text: "1.0m" },
                        { key: "c", text: "1.25m" },
                        { key: "d", text: "1.5m" }
                    ],
                    answer: "a",
                    explanation: "The energy lost in a jump is (y2 minus y1) cubed divided by 4 y1 y2. Here the numerator is 1 cubed and the denominator is 4 times 0.25 times 1.25, which is 1.25, so the loss is 0.8 m of head."
                },
                {
                    id: "cm7q051",
                    src: "WATE701-00064",
                    text: "Length of hydraulic jump is equal to ...",
                    options: [
                        { key: "a", text: "3 times the jump height" },
                        { key: "b", text: "5.7 to 7 times the jump height" },
                        { key: "c", text: "&gt;10 times the jump height" },
                        { key: "d", text: "12 times the jump height" }
                    ],
                    answer: "b",
                    explanation: "The length of a hydraulic jump is not obtained from theory but from experiment, and it comes out at roughly 5.7 to 7 times the height of the jump. Stilling basins are sized on that empirical length."
                },
                {
                    id: "cm7q052",
                    src: "WATE701-00065",
                    text: "In case of most economical trapezoidal section top width is equals to",
                    options: [
                        { key: "a", text: "2× sum of Side slope" },
                        { key: "b", text: "Sum of side slope" },
                        { key: "c", text: "2× flow depth" },
                        { key: "d", text: "Bottom width" }
                    ],
                    answer: "c",
                    explanation: "In the most economical trapezoidal section half the top width equals the length of the sloping side, so the section is half a regular hexagon and the hydraulic radius is half the depth. That geometry gives the least wetted perimeter, and so the least lining and the least friction, for a given area."
                },
                {
                    id: "cm7q053",
                    src: "WATE701-00066",
                    text: "The head loss is minimum in",
                    options: [
                        { key: "a", text: "broad crested weir" },
                        { key: "b", text: "narrow crested weir" },
                        { key: "c", text: "sharp crested weir" },
                        { key: "d", text: "ogee shaped weir" }
                    ],
                    answer: "d",
                    explanation: "An ogee shaped weir (also known as a spillway weir) is specifically engineered to be the most efficient in terms of hydraulic performance."
                },
                {
                    id: "cm7q054",
                    src: "WATE701-00067",
                    text: "The discharge passing over ogee weir is proportional to",
                    options: [
                        { key: "a", text: "H^(3/2)" },
                        { key: "b", text: "H" },
                        { key: "c", text: "H^(1/2)" },
                        { key: "d", text: "H^(5/2)" }
                    ],
                    answer: "a",
                    explanation: "Discharge over a weir varies as the head to the power three halves, because the velocity of each layer varies as the root of its depth and the area varies directly with head. A small error in measuring head therefore produces a one and a half times larger error in discharge."
                },
                {
                    id: "cm7q055",
                    src: "WATE701-00068",
                    text: "Froude number of triangular channel of depth y with side slope 2H:1V is",
                    options: [
                        { key: "a", text: "V/√(g*y/4)" },
                        { key: "b", text: "V/√(g*y/2)" },
                        { key: "c", text: "V/√(g*y)" },
                        { key: "d", text: "V/√(g*y/3)" }
                    ],
                    answer: "b",
                    explanation: "The Froude number uses the hydraulic mean depth, area over top width. For a triangular section that is z y squared over 2 z y, which is y over 2, so the Froude number is V divided by the root of g y over 2."
                },
                {
                    id: "cm7q056",
                    src: "WATE701-00069",
                    text: "Which of the following statement is correct about stream length of fan shaped and fern shaped catchment?",
                    options: [
                        { key: "a", text: "stream length of fan shaped catchment is more" },
                        { key: "b", text: "stream length of both catchment is same" },
                        { key: "c", text: "stream length of fern shaped catchment is more" },
                        { key: "d", text: "None of these" }
                    ],
                    answer: "c",
                    explanation: "A fern shaped catchment is long and narrow with a main stream and many small tributaries joining along its length, so the total stream length is greater. A fan shaped catchment is compact, and its tributaries reach the outlet together, which produces a sharper flood peak."
                },
                {
                    id: "cm7q057",
                    src: "WATE701-00070",
                    text: "When the flow in an open channel is gradually varied, the flow is said to be",
                    options: [
                        { key: "a", text: "steady uniform flow" },
                        { key: "b", text: "unsteady uniform flow" },
                        { key: "c", text: "unsteady non-uniform flow" },
                        { key: "d", text: "steady non-uniform flow" }
                    ],
                    answer: "d",
                    explanation: "Gradually varied flow changes along the channel but not with time, so it is steady non-uniform flow. Backwater and drawdown curves upstream of a weir or a fall are the standard examples."
                },
                {
                    id: "cm7q058",
                    src: "WATE701-00071",
                    text: "The value of hydraulic radius in most economical triangular channel is",
                    options: [
                        { key: "a", text: "y/(2√2)" },
                        { key: "b", text: "y/2" },
                        { key: "c", text: "y/√2" },
                        { key: "d", text: "y/√3" }
                    ],
                    answer: "a",
                    explanation: "The most efficient triangular section is the one with side slopes at 45 degrees, and its hydraulic radius works out at y over 2 root 2. As with every economical section, the condition is that the wetted perimeter is a minimum for the given area."
                },
                {
                    id: "cm7q059",
                    src: "WATE701-00072",
                    text: "What will be the effect on probability of annual damage if design flood is increased?",
                    options: [
                        { key: "a", text: "Increases" },
                        { key: "b", text: "Decreases" },
                        { key: "c", text: "Remains constant" },
                        { key: "d", text: "depends on location" }
                    ],
                    answer: "b",
                    explanation: "Designing for a larger flood means the works are overtopped or breached less often, so the probability of damage in any given year falls. The trade-off is a higher capital cost, and the optimum design flood is the one that minimises the sum of the two."
                }
            ]
        },
        {
            id: "cm7hydr",
            name: "Hydropower",
            subject: "Hydropower",
            accent: "cyan",
            blurb: "9 questions drawn from the Hydropower bank.",
            questions: [
                {
                    id: "cm7q060",
                    src: "HYDR626-00047",
                    text: "Which one of the following statements is not correct for heading and benching method of tunnelling?",
                    options: [
                        { key: "a", text: "Drilling and mucking can be done simultaneously." },
                        { key: "b", text: "Benching provides a platform for working on" },
                        { key: "c", text: "Removal of muck from the heading is very easy" },
                        { key: "d", text: "All" }
                    ],
                    answer: "c",
                    explanation: "Clearing muck from the top heading is actually a difficult and cumbersome process. The excavated debris must first be carefully dropped down to the lower bench level before machinery can remove it."
                },
                {
                    id: "cm7q061",
                    src: "HYDR626-00048",
                    text: "Which one of the following linings is suitable for shield driven tunnels particularly in the subaqueous regions?",
                    options: [
                        { key: "a", text: "Brick lining" },
                        { key: "b", text: "stone lining" },
                        { key: "c", text: "timber line" },
                        { key: "d", text: "cast iron lining" }
                    ],
                    answer: "d",
                    explanation: "Shield driven tunnels, especially under water, are lined with bolted cast iron segments erected inside the tail of the shield. The segments are strong, watertight and can be assembled and grouted immediately behind the advancing face."
                },
                {
                    id: "cm7q062",
                    src: "HYDR626-00049",
                    text: "A flow control valve at the end of a 1 km long pipe is closed gradually in 10 seconds. If the rise of pressure head due to water hammer is 20 meters of water. What the velocity of water before the valve closure?",
                    options: [
                        { key: "a", text: "2m/s" },
                        { key: "b", text: "4m/s" },
                        { key: "c", text: "8m/s" },
                        { key: "d", text: "6m/s" }
                    ],
                    answer: "a",
                    explanation: "For gradual closure the pressure head rise is h equal to LV over g t. Rearranging, V equals h g t over L, that is 20 times 9.81 times 10 divided by 1000, which is about 2 m per second."
                },
                {
                    id: "cm7q063",
                    src: "HYDR626-00050",
                    text: "The velocity of propagation of water hammer pressure in a pipe carrying water and having diameter = 40 cm, pipe thickness = 4 mm, with E (Modulus of elasticity) of the pipe material =2.1×10^11 Pa, and K (Bulk modulus of water) =2.1×10^9 Pa, is",
                    options: [
                        { key: "a", text: "1400 m/s" },
                        { key: "b", text: "1000 m/s" },
                        { key: "c", text: "2000 m/s" },
                        { key: "d", text: "700 m/s" }
                    ],
                    answer: "b",
                    explanation: "The celerity is the root of (K over rho) divided by (1 plus K D over E t). Here K D over E t is 2.1 times 10 to the 9, times 0.4, divided by 2.1 times 10 to the 11, times 0.004, which is exactly 1, so the celerity is the root of 2.1 million over 2, about 1000 m per second."
                },
                {
                    id: "cm7q064",
                    src: "HYDR626-00051",
                    text: "In high head hydro power, tplanthe velocity of water in penstock is about",
                    options: [
                        { key: "a", text: "1 m/s" },
                        { key: "b", text: "4 m/s" },
                        { key: "c", text: "7 m/s" },
                        { key: "d", text: "12 m/s" }
                    ],
                    answer: "c",
                    explanation: "Penstocks for high head plants are designed for a velocity of the order of 7 m per second. Going faster would waste head in friction, which rises with the square of velocity, while going slower would need a larger and much more expensive pipe."
                },
                {
                    id: "cm7q065",
                    src: "HYDR626-00052",
                    text: "If discharge of a pump is 0.16 cumecs, the economic diameter of pipe, is",
                    options: [
                        { key: "a", text: "1.12m" },
                        { key: "b", text: "0.976m" },
                        { key: "c", text: "68.8cm" },
                        { key: "d", text: "0.488m" }
                    ],
                    answer: "d",
                    explanation: "The economic diameter is estimated from D equal to about 1.22 times the root of Q. With a discharge of 0.16 cumecs the root is 0.4, so the diameter comes out at roughly 0.488 m."
                },
                {
                    id: "cm7q066",
                    src: "HYDR626-00053",
                    text: "Power generated by unit head under unit discharge condition is",
                    options: [
                        { key: "a", text: "Unit power" },
                        { key: "b", text: "Unit speed" },
                        { key: "c", text: "Specific speed" },
                        { key: "d", text: "None" }
                    ],
                    answer: "a",
                    explanation: "Unit power is the power a turbine would develop under unit head with unit discharge, one of the family of unit quantities used to compare a machine's performance at different heads. Specific speed is the separate parameter used to select the type of runner."
                },
                {
                    id: "cm7q067",
                    src: "HYDR626-00054",
                    text: "Plant use reversible turbine in",
                    options: [
                        { key: "a", text: "Reservoir Plant" },
                        { key: "b", text: "Pumped storage" },
                        { key: "c", text: "ROR plant" },
                        { key: "d", text: "Tidal plant" }
                    ],
                    answer: "b",
                    explanation: "A pumped storage scheme uses reversible pump-turbines, which generate during peak hours and pump water back to the upper reservoir at night with cheap off-peak power. The same machine and the same waterway serve both directions."
                },
                {
                    id: "cm7q068",
                    src: "HYDR626-00055",
                    text: "The use of draft tube in reaction turbine helps to",
                    options: [
                        { key: "a", text: "prevent the air from entering" },
                        { key: "b", text: "increase flow rate" },
                        { key: "c", text: "convert KE to pressure energy" },
                        { key: "d", text: "prevents eddies" }
                    ],
                    answer: "c",
                    explanation: "The draft tube is a gradually expanding passage below a reaction turbine. By slowing the water down it converts most of the remaining kinetic energy into pressure, recovering it as extra head, and it lets the runner be set above tailwater without losing that head."
                }
            ]
        },
        {
            id: "cm7irri",
            name: "Irrigation and Drainage",
            subject: "Irrigation",
            accent: "emerald",
            blurb: "11 questions drawn from the Irrigation and Drainage bank.",
            questions: [
                {
                    id: "cm7q069",
                    src: "IRRI951-00057",
                    text: "Uplifting pressure is important for stability of which type of dam?",
                    options: [
                        { key: "a", text: "Earthen dam" },
                        { key: "b", text: "Cofferdam" },
                        { key: "c", text: "Buttress dam" },
                        { key: "d", text: "Concrete dam" }
                    ],
                    answer: "d",
                    explanation: "Uplift matters most for a concrete gravity dam, whose stability depends on its own weight pressing down on the foundation. Water pressure acting upward on the base reduces the effective weight and so reduces both the sliding and the overturning resistance."
                },
                {
                    id: "cm7q070",
                    src: "IRRI951-00058",
                    text: "Which of the following is most efficient weir?",
                    options: [
                        { key: "a", text: "Parabolic" },
                        { key: "b", text: "Barrage" },
                        { key: "c", text: "Vertical drop" },
                        { key: "d", text: "Sloping" }
                    ],
                    answer: "a",
                    explanation: "A parabolic weir (often referring to an Ogee-shaped profile) is considered the most hydraulically efficient among the our options. Its structural profile is specifically designed to match the natural, parabolic trajectory of a freely falling water jet."
                },
                {
                    id: "cm7q071",
                    src: "IRRI951-00059",
                    text: "Calculation of lanes creep length (U/s cutoff = 5m, floor length = 54m, d/s cutoff = 8m)",
                    options: [
                        { key: "a", text: "57m" },
                        { key: "b", text: "44m" },
                        { key: "c", text: "80m" },
                        { key: "d", text: "54m" }
                    ],
                    answer: "b",
                    explanation: "Lane's weighted creep counts vertical creep in full and horizontal creep at one third. The verticals contribute twice 5 plus twice 8, that is 26 m, and the 54 m floor contributes 18 m, giving 44 m in total. Bligh's unweighted theory would give 80 m. The key has been corrected from the printed 57 m."
                },
                {
                    id: "cm7q072",
                    src: "IRRI951-00060",
                    text: "A barrage with 500 m length is designed across an alluvial river. The U/S and D/S lengths of the proposed guide banks of this barrage, will be about 500m and 100m.",
                    options: [
                        { key: "a", text: "400 m and 100 m" },
                        { key: "b", text: "450 m and 150 m" },
                        { key: "c", text: "500 m and 100 m" },
                        { key: "d", text: "600 m and 200 m" }
                    ],
                    answer: "c",
                    explanation: "Guide banks are normally taken about 1 to 1.25 times the barrage length upstream and about 0.2 to 0.4 times downstream, so for a 500 m barrage roughly 500 m and 100 m. The upstream arm is far longer because it has to steer the approaching flow before it reaches the structure."
                },
                {
                    id: "cm7q073",
                    src: "IRRI951-00061",
                    text: "What should be the length of weir for 50-years design flood of 4000m3/s. Bank to bank width of river is 280m.",
                    options: [
                        { key: "a", text: "270m" },
                        { key: "b", text: "290m" },
                        { key: "c", text: "300m" },
                        { key: "d", text: "280m" }
                    ],
                    answer: "d",
                    explanation: "Lacey's regime perimeter, 4.75 times the root of 4000, gives about 300 m, but the river is only 280 m from bank to bank. The weir is therefore built to the available width, since widening it would mean excavating into the banks."
                },
                {
                    id: "cm7q074",
                    src: "IRRI951-00062",
                    text: "The discharge passing through an ogee spillway is 90 m³/s. Calculate the length of crest if head over the crest is 1.6 m. (Take value of C=1.7)",
                    options: [
                        { key: "a", text: "26 m" },
                        { key: "b", text: "22 m" },
                        { key: "c", text: "24 m" },
                        { key: "d", text: "28 m" }
                    ],
                    answer: "a",
                    explanation: "\\(L = \\frac{Q}{C \\cdot H^{3/2}}\\) \\(L = \\frac{90}{1.7 \\cdot (1.6)^{3/2}}\\) \\(L = \\frac{90}{3.44056} \\approx 26.158 \\text{ m}\\)"
                },
                {
                    id: "cm7q075",
                    src: "IRRI951-00063",
                    text: "By how many considerations is the depth downstream vertical cutoff governed?",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "3" },
                        { key: "c", text: "1" },
                        { key: "d", text: "4" }
                    ],
                    answer: "b",
                    explanation: "The depth of the downstream vertical cut-off is fixed by three considerations together: the scour depth computed from Lacey's formula, the exit gradient that the bed material can safely tolerate, and the need to keep the cut-off below the deepest anticipated scour hole."
                },
                {
                    id: "cm7q076",
                    src: "IRRI951-00064",
                    text: "Guide banks are provided to",
                    options: [
                        { key: "a", text: "reduce the peak flood discharge" },
                        { key: "b", text: "confine the width of river" },
                        { key: "c", text: "train the flow of a river along a specified course" },
                        { key: "d", text: "increase the water way" }
                    ],
                    answer: "c",
                    explanation: "Guide banks confine and steer the approaching river so that it comes to the structure square and centred, and stays there through the flood season. They do not reduce the flood peak; they only control where the flow goes."
                },
                {
                    id: "cm7q077",
                    src: "IRRI951-00065",
                    text: "Launching apron is made of",
                    options: [
                        { key: "a", text: "Stone masonry" },
                        { key: "b", text: "Brick masonry" },
                        { key: "c", text: "Concrete" },
                        { key: "d", text: "Gabion" }
                    ],
                    answer: "d",
                    explanation: "A launching apron is a blanket of loose stone, usually in wire gabions, laid on the bed beyond the toe. As the bed scours the stones roll down and pave the face of the scour hole, protecting the foundation, which no rigid masonry or concrete could do."
                },
                {
                    id: "cm7q078",
                    src: "IRRI951-00066",
                    text: "Not component of river training work",
                    options: [
                        { key: "a", text: "Catchment area" },
                        { key: "b", text: "Spur" },
                        { key: "c", text: "Launching apron" },
                        { key: "d", text: "marginal bund" }
                    ],
                    answer: "a",
                    explanation: "Spurs, launching aprons and marginal bunds are all river training works. A catchment area is simply the land draining to a point; it is a hydrological description, not a structure."
                },
                {
                    id: "cm7q079",
                    src: "IRRI951-00067",
                    text: "Length of upstream guidebank is...... than downstream guidebank length",
                    options: [
                        { key: "a", text: "Same" },
                        { key: "b", text: "Greater" },
                        { key: "c", text: "Lesser" },
                        { key: "d", text: "Depends on site conditions." }
                    ],
                    answer: "b",
                    explanation: "The upstream guide bank is made considerably longer than the downstream one, because it has to intercept and align the river before it reaches the weir. Downstream a short arm is enough to prevent the flow from attacking the bank as it expands again."
                }
            ]
        },
        {
            id: "cm7tran",
            name: "Transportation",
            subject: "Transportation",
            accent: "rose",
            blurb: "11 questions drawn from the Transportation bank.",
            questions: [
                {
                    id: "cm7q080",
                    src: "TRAN808-00056",
                    text: "Which intersection has no conflict?",
                    options: [
                        { key: "a", text: "Diamond" },
                        { key: "b", text: "Channelized" },
                        { key: "c", text: "Clover leaf" },
                        { key: "d", text: "Trumpet" }
                    ],
                    answer: "c",
                    explanation: "A clover leaf is a grade-separated interchange in which every turning movement uses a ramp or loop, so no stream crosses another at the same level and there are no crossing conflict points. Diamond, channelised and trumpet layouts all retain some at-grade conflict."
                },
                {
                    id: "cm7q081",
                    src: "TRAN808-00057",
                    text: "Which of following is not related to cross section of road?",
                    options: [
                        { key: "a", text: "Camber" },
                        { key: "b", text: "Superelevation" },
                        { key: "c", text: "Lanes" },
                        { key: "d", text: "Gradient" }
                    ],
                    answer: "d",
                    explanation: "Camber, superelevation and the number and width of lanes are all cross-sectional elements, seen when the road is cut across. Gradient belongs to the longitudinal profile, that is the vertical alignment."
                },
                {
                    id: "cm7q082",
                    src: "TRAN808-00058",
                    text: "The normal flows on two approach roads at an intersection are respectively 500 pcu/h and 300 pcu/h. The corresponding saturation flow is 1600 pcu/h on each road. The total lost time per single cycle is 16 s. The optimum cycle time by Webster's method is?",
                    options: [
                        { key: "a", text: "58.0 s" },
                        { key: "b", text: "72.5 s" },
                        { key: "c", text: "48.0 s" },
                        { key: "d", text: "19.3 s" }
                    ],
                    answer: "a",
                    explanation: "The flow ratios are 500 over 1600 and 300 over 1600, which sum to 0.5. Webster's optimum cycle is (1.5L plus 5) over (1 minus Y), that is (1.5 times 16, plus 5) divided by 0.5, which is 29 over 0.5, or 58 seconds. The key has been corrected from the printed 48 s."
                },
                {
                    id: "cm7q083",
                    src: "TRAN808-00059",
                    text: "Calculate the capacity of a rotary in PCU per hour for a weaving traffic proportion of 0.5, with a weaving section width of 12m, average entry width of 0.4m, and a weaving section length of 7.2m.",
                    options: [
                        { key: "a", text: "1100 PCU" },
                        { key: "b", text: "1088 PCU" },
                        { key: "c", text: "1200 PCU" },
                        { key: "d", text: "1300 PCU" }
                    ],
                    answer: "b",
                    explanation: "The rotary capacity formula gives 280 W times (1 plus e over W) times (1 minus p over 3), divided by (1 plus W over L). Substituting a weaving width of 12 m, a weaving length of 7.2 m and a weaving proportion of 0.5 gives roughly 1088 passenger car units an hour."
                },
                {
                    id: "cm7q084",
                    src: "TRAN808-00060",
                    text: "The minimum weaving angle in the rotary section",
                    options: [
                        { key: "a", text: "10°" },
                        { key: "b", text: "20°" },
                        { key: "c", text: "15°" },
                        { key: "d", text: "25°" }
                    ],
                    answer: "c",
                    explanation: "The weaving angle at a rotary is kept to about 15 degrees or less, so that vehicles merge and diverge gradually along the weaving length rather than cutting sharply across one another."
                },
                {
                    id: "cm7q085",
                    src: "TRAN808-00061",
                    text: "According to the standard practice for pavement design on undivided roads, what is the value of the Lane Distribution Factor (D) for a 4-lane road?",
                    options: [
                        { key: "a", text: "0.75" },
                        { key: "b", text: "0.60" },
                        { key: "c", text: "1" },
                        { key: "d", text: "0.40" }
                    ],
                    answer: "d",
                    explanation: "In the context of pavement design for undivided roads, the Lane Distribution Factor (D) represents the proportion of total commercial traffic that is expected to occupy the design lane. For a Single Lane road, the factor is 1.0, meaning 100% of the traffic in both directions is concentrated in that one lane. On a Two-Lane undivided road, the factor reduces to 0.75, as it is assumed that 75% of the total two-way traffic will affect the design lane. For a Four-Lane undivided road, the distribution is even wider, resulting in a factor of 0.40, indicating that only 40% of the total two-way traffic is used to calculate the structural requirements for the most heavily used lane."
                },
                {
                    id: "cm7q086",
                    src: "TRAN808-00062",
                    text: "If total lost time is 10 for sum of proportion 0.6, then optimal cycle length?",
                    options: [
                        { key: "a", text: "50" },
                        { key: "b", text: "60" },
                        { key: "c", text: "70" },
                        { key: "d", text: "80" }
                    ],
                    answer: "a",
                    explanation: "Webster's optimum cycle length is (1.5L plus 5) divided by (1 minus Y). With a lost time of 10 seconds and a sum of flow ratios of 0.6 that is (15 plus 5) over 0.4, which is 20 over 0.4, or 50 seconds. The key has been corrected from the printed 60."
                },
                {
                    id: "cm7q087",
                    src: "TRAN808-00063",
                    text: "A 160kN load damages pavement ……… times more than 80kN load.",
                    options: [
                        { key: "a", text: "2" },
                        { key: "b", text: "16" },
                        { key: "c", text: "4" },
                        { key: "d", text: "8" }
                    ],
                    answer: "b",
                    explanation: "Pavement damage follows the fourth power law, so the damage caused is proportional to the fourth power of the axle load ratio. Doubling the load from 80 to 160 kN therefore does 2 to the fourth, that is 16 times, as much damage."
                },
                {
                    id: "cm7q088",
                    src: "TRAN808-00064",
                    text: "The minimum value of 15-minute peak hour factor on a section of a road is?",
                    options: [
                        { key: "a", text: "0.15" },
                        { key: "b", text: "0.2" },
                        { key: "c", text: "0.25" },
                        { key: "d", text: "0.3" }
                    ],
                    answer: "c",
                    explanation: "The peak hour factor is the hourly volume divided by four times the highest 15 minute count. If all the traffic arrived in a single 15 minute period the factor would be 0.25, so that is its theoretical minimum; values near 1 mean uniform flow."
                },
                {
                    id: "cm7q089",
                    src: "TRAN808-00065",
                    text: "One of the probable causes of rutting on flexible pavements is",
                    options: [
                        { key: "a", text: "excessive stripping of binder material from the wearing course" },
                        { key: "b", text: "use of flaky aggregates in the wearing course" },
                        { key: "c", text: "high wind speeds" },
                        { key: "d", text: "inadequate compaction of pavement layers" }
                    ],
                    answer: "d",
                    explanation: "Rutting is a permanent depression along the wheel path, and inadequate compaction of the pavement layers is a principal cause, since traffic then completes the densification that the roller should have achieved. Stripping and flaky aggregate cause other distress types."
                },
                {
                    id: "cm7q090",
                    src: "TRAN808-00066",
                    text: "Minimum thickness of the base of a flexible pavement for Medium-Volume Road , is",
                    options: [
                        { key: "a", text: "15 cm" },
                        { key: "b", text: "10 cm" },
                        { key: "c", text: "20 cm" },
                        { key: "d", text: "25 cm" }
                    ],
                    answer: "a",
                    explanation: "A medium volume road is given a granular base at least 15 cm thick, which is about the minimum in which the coarse aggregate can be laid and compacted in a proper layer while still spreading the wheel load onto the subbase."
                }
            ]
        },
        {
            id: "cm7wate",
            name: "Water Supply, Sanitation and Environment",
            subject: "Water Supply",
            accent: "blue",
            blurb: "10 questions drawn from the Water Supply, Sanitation and Environment bank.",
            questions: [
                {
                    id: "cm7q091",
                    src: "WATE813-00051",
                    text: "What is the name of the sewer that collects water from a number of other large sewers or outlets?",
                    options: [
                        { key: "a", text: "Force main" },
                        { key: "b", text: "Intercepting sewer" },
                        { key: "c", text: "Branch sewer" },
                        { key: "d", text: "Collecting sewer" }
                    ],
                    answer: "b",
                    explanation: "An intercepting sewer runs across the ends of several large sewers or outfalls and takes their flow to the treatment works instead of letting it discharge to the river. It is the classic retrofit for a combined system built before treatment existed."
                },
                {
                    id: "cm7q092",
                    src: "WATE813-00052",
                    text: "The legal entity that is responsible for the wastewater collection system is called ______",
                    options: [
                        { key: "a", text: "Collection system agency" },
                        { key: "b", text: "Water collection agency" },
                        { key: "c", text: "Sewer system agency" },
                        { key: "d", text: "Storm collection agency" }
                    ],
                    answer: "c",
                    explanation: "The sewer system agency is the legal body that owns, operates and maintains the wastewater collection network and is answerable for its performance, including overflows and the condition of the pipes."
                },
                {
                    id: "cm7q093",
                    src: "WATE813-00053",
                    text: "The minimum size of sewer is",
                    options: [
                        { key: "a", text: "15mm" },
                        { key: "b", text: "30cm" },
                        { key: "c", text: "30mm" },
                        { key: "d", text: "15 cm" }
                    ],
                    answer: "d",
                    explanation: "The smallest sewer used in practice is 150 mm in diameter. Anything smaller blocks too easily with rags, grit and grease, and cannot be rodded or cleaned effectively."
                },
                {
                    id: "cm7q094",
                    src: "WATE813-00054",
                    text: "A manhole is classified as shallow if its depth is between",
                    options: [
                        { key: "a", text: "0.7 to 0.9 m" },
                        { key: "b", text: "0.4 to 0.5 m" },
                        { key: "c", text: "0.5 to 0.7 m" },
                        { key: "d", text: "0.9 to 1.2 m" }
                    ],
                    answer: "a",
                    explanation: "Shallow manholes (also frequently referred to as inspection chambers) are typically placed at the very start of a branch sewer line or in areas not subjected to heavy traffic. Because of their reduced depth, they generally utilize lighter covers than deeper structures. Verified."
                },
                {
                    id: "cm7q095",
                    src: "WATE813-00055",
                    text: "What is the main objective of toxicity assessment?",
                    options: [
                        { key: "a", text: "To determine source of pathway" },
                        { key: "b", text: "To estimate how much of a substance does what kind of harm." },
                        { key: "c", text: "To determine chemical concentration" },
                        { key: "d", text: "To analyse chemical expose" }
                    ],
                    answer: "b",
                    explanation: "Toxicity assessment establishes the dose-response relationship, that is how much of a substance produces what kind and degree of harm. Identifying pathways and measuring concentrations are the separate exposure assessment steps of a risk study."
                },
                {
                    id: "cm7q096",
                    src: "WATE813-00056",
                    text: "Removal of oil and grease from sewage, is known",
                    options: [
                        { key: "a", text: "screening" },
                        { key: "b", text: "skimming" },
                        { key: "c", text: "filtration" },
                        { key: "d", text: "none of these." }
                    ],
                    answer: "b",
                    explanation: "Skimming removes oil, grease and other floating matter, which rises to the surface in a skimming tank, sometimes helped by fine air bubbles, and is scraped off. Screening removes large solids and filtration removes fine suspended matter."
                },
                {
                    id: "cm7q097",
                    src: "WATE813-00057",
                    text: "The pH value of fresh sewage is usually",
                    options: [
                        { key: "a", text: "equal to 7" },
                        { key: "b", text: "less than 7" },
                        { key: "c", text: "equal to zero" },
                        { key: "d", text: "more than 7" }
                    ],
                    answer: "d",
                    explanation: "Fresh sewage is typically slightly alkaline, with a pH value usually ranging between 7.2 and 8.5. This is due to the presence of bicarbonates and the mineral content of the water supply used in households and industries."
                },
                {
                    id: "cm7q098",
                    src: "WATE813-00058",
                    text: "What is the formula for overall efficiency of HRTF?",
                    options: [
                        { key: "a", text: "E1+E2(1-E1)" },
                        { key: "b", text: "E1+E2" },
                        { key: "c", text: "1-E1*E2" },
                        { key: "d", text: "(E1+E2)/2" }
                    ],
                    answer: "a",
                    explanation: "For two filters in series the second only works on what the first left behind, so the overall efficiency is E1 plus E2 times (1 minus E1). That is why the gain from a second stage is always less than its own nominal efficiency."
                },
                {
                    id: "cm7q099",
                    src: "WATE813-00059",
                    text: "If D.O. concentration falls down to zero in any natural drainage, it indicates the zone of",
                    options: [
                        { key: "a", text: "degradation" },
                        { key: "b", text: "active decomposition" },
                        { key: "c", text: "recovery" },
                        { key: "d", text: "cleaner water" }
                    ],
                    answer: "b",
                    explanation: "Dissolved oxygen falling to zero marks the zone of active decomposition, where the organic load has completely exhausted the oxygen and conditions turn anaerobic, with the black colour and foul odours that go with it. Recovery only begins once reaeration overtakes the remaining demand."
                },
                {
                    id: "cm7q100",
                    src: "WATE813-00060",
                    text: "Which of the following causes greasing in flocculation?",
                    options: [
                        { key: "a", text: "alum" },
                        { key: "b", text: "ammonia" },
                        { key: "c", text: "surfactant" },
                        { key: "d", text: "chlorine" }
                    ],
                    answer: "c",
                    explanation: "Surfactants from detergents lower the surface tension and stabilise the fine air bubbles and oily material, which then collects as a greasy scum during flocculation and interferes with settling."
                }
            ]
        }
    ]
};

/* Registered lazily — js/civil.js injects this file when the set is opened. */
window.CIVIL_SET_DATA = window.CIVIL_SET_DATA || {};
window.CIVIL_SET_DATA["civil-7"] = CIVIL_MODEL_7;
