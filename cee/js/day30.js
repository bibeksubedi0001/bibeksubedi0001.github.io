/* ============================================================
   DAY 30 — INTERFERENCE, DIFFRACTION & POLARISATION
            + STUDY OF SELECTED ANIMALS
            + BIODIVERSITY: CLASSIFICATION TO ALGAE
   150 questions · 130 minutes · 0.25 negative marking

     Interference and Young's double slit .. 24   d30p1   – d30p24
     Diffraction and polarisation .......... 24   d30p25  – d30p48
     Plasmodium ............................ 17   d30z49  – d30z65
     Earthworm (Pheretima) ................. 18   d30z66  – d30z83
     Frog (Rana) ........................... 17   d30z84  – d30z100
     Introduction to biodiversity .......... 10   d30b101 – d30b110
     Monera and virus ...................... 14   d30b111 – d30b124
     Fungi and lichens ..................... 13   d30b125 – d30b137
     Algae ................................. 13   d30b138 – d30b150

   Scope follows the official MEC syllabus (2020, revised 2026):
     Physics unit 3 "Waves and optics" — Interference: concept,
       conditions and applications; calculations and applications
       of Young's double slit experiment. Diffraction and
       polarization: concept and conditions of diffraction,
       diffraction at a single slit and diffraction grating,
       resolving power of optical instruments; polarization and
       Brewster's law.
     Zoology unit 4 "Study of selected animals" — Plasmodium,
       Earthworm and Frog.
     Botany unit 2 "Biodiversity" — introduction and importance of
       classification, kingdom Monera and virus, fungi and lichens,
       and algae. This block is deliberately EASY: single-step
       recall for revision.

   Questions are new: none repeats the optics items of Day 14 or
   Day 20, the selected-animal items of Day 21 or Day 22, nor the
   biodiversity items of Days 22, 24, 25, 28 and 29.
   ============================================================ */
const DAY30 = {
    day: 30,
    title: "Day 30",
    subtitle: "Wave Optics · Selected Animals · Biodiversity",
    durationMinutes: 130,
    negativeMarking: 0.25,
    chapters: [
        {
            id: "wavopt30",
            name: "Interference, Diffraction & Polarisation",
            subject: "Physics",
            accent: "cyan",
            blurb: "Q1–48 · conditions for interference and Young's double slit calculations; single-slit diffraction, the grating, resolving power, polarisation and Brewster's law.",
            questions: [
                {
                    id: "d30p1",
                    text: "The phenomenon of interference of light is a direct consequence of the:",
                    options: [
                        { key: "a", text: "Law of reflection at a plane surface" },
                        { key: "b", text: "Rectilinear propagation of light" },
                        { key: "c", text: "Principle of superposition of waves" },
                        { key: "d", text: "Corpuscular nature of light" }
                    ],
                    answer: "c",
                    explanation: "When two waves arrive at a point together, the resultant displacement is the <strong>vector sum</strong> of their individual displacements. Where they arrive in phase the intensity is a maximum, and where they arrive in opposite phase it is a minimum. Interference is therefore strong evidence for the wave nature of light."
                },
                {
                    id: "d30p2",
                    text: "For a sustained interference pattern the two sources must be coherent, which means that they must have:",
                    options: [
                        { key: "a", text: "The same amplitude but different frequencies" },
                        { key: "b", text: "The same intensity but opposite directions of travel" },
                        { key: "c", text: "Different frequencies and a changing phase difference" },
                        { key: "d", text: "The same frequency and a constant phase difference" }
                    ],
                    answer: "d",
                    explanation: "<strong>Coherent</strong> sources emit waves of the <strong>same frequency</strong> whose <strong>phase difference stays constant</strong> in time, so the positions of the maxima and minima do not shift and the pattern is steady. Equal amplitudes are not essential — they only make the dark fringes perfectly dark."
                },
                {
                    id: "d30p3",
                    text: "Two independent bulbs of identical make placed side by side never produce an interference pattern because they:",
                    options: [
                        { key: "a", text: "Emit light of far too high an intensity" },
                        { key: "b", text: "Emit light in all directions instead of a beam" },
                        { key: "c", text: "Cannot maintain a constant phase difference" },
                        { key: "d", text: "Emit light that travels at different speeds" }
                    ],
                    answer: "c",
                    explanation: "Light comes from countless atoms radiating independently in bursts lasting about $10^{-8}$ s, so the phase of one source changes randomly and rapidly with respect to the other. The pattern shifts far faster than the eye can follow and only uniform illumination is seen. This is why both beams must be derived from <strong>a single source</strong>."
                },
                {
                    id: "d30p4",
                    text: "Constructive interference occurs at a point where the path difference between the two waves is:",
                    options: [
                        { key: "a", text: "An odd multiple of $\\lambda/2$" },
                        { key: "b", text: "An integral multiple of $\\lambda$" },
                        { key: "c", text: "An odd multiple of $\\lambda/4$" },
                        { key: "d", text: "Always exactly equal to $\\lambda/2$" }
                    ],
                    answer: "b",
                    explanation: "A path difference of $n\\lambda$ ($n = 0, 1, 2 \\ldots$) brings the waves to the point <strong>in phase</strong>, so the amplitudes add and a bright fringe results. An odd multiple of $\\lambda/2$ brings them in opposite phase and gives a dark fringe."
                },
                {
                    id: "d30p5",
                    text: "The relation between the phase difference $\\Delta\\phi$ and the path difference $\\Delta x$ of two interfering waves is:",
                    options: [
                        { key: "a", text: "$\\Delta\\phi = 2\\pi\\lambda\\Delta x$" },
                        { key: "b", text: "$\\Delta\\phi = \\dfrac{\\lambda}{2\\pi}\\Delta x$" },
                        { key: "c", text: "$\\Delta\\phi = \\dfrac{\\pi}{\\lambda}\\Delta x$" },
                        { key: "d", text: "$\\Delta\\phi = \\dfrac{2\\pi}{\\lambda}\\Delta x$" }
                    ],
                    answer: "d",
                    explanation: "One whole wavelength of path corresponds to $2\\pi$ radian of phase, so $\\Delta\\phi = \\dfrac{2\\pi}{\\lambda}\\Delta x$. A path difference of $\\lambda/2$ therefore means a phase difference of $\\pi$."
                },
                {
                    id: "d30p6",
                    text: "In an interference pattern the energy that disappears from the dark fringes is:",
                    options: [
                        { key: "a", text: "Destroyed, so the law of conservation of energy fails" },
                        { key: "b", text: "Converted into heat in the screen" },
                        { key: "c", text: "Redistributed and appears in the bright fringes" },
                        { key: "d", text: "Absorbed and re-emitted by the two slits" }
                    ],
                    answer: "c",
                    explanation: "Interference does not create or destroy energy; it merely <strong>redistributes</strong> it. The energy missing from the minima reappears in the maxima, and the average intensity over the whole pattern equals the sum of the intensities of the separate beams."
                },
                {
                    id: "d30p7",
                    text: "In Young's double slit experiment the fringe width $\\beta$ is given by:",
                    options: [
                        { key: "a", text: "$\\dfrac{dD}{\\lambda}$" },
                        { key: "b", text: "$\\dfrac{\\lambda d}{D}$" },
                        { key: "c", text: "$\\dfrac{\\lambda D}{d}$" },
                        { key: "d", text: "$\\dfrac{D}{\\lambda d}$" }
                    ],
                    answer: "c",
                    explanation: "$\\beta = \\dfrac{\\lambda D}{d}$, where $D$ is the slit-to-screen distance and $d$ the separation of the slits. All the bright and dark fringes are equally spaced, so $\\beta$ is also the distance between two consecutive bright (or two consecutive dark) fringes."
                },
                {
                    id: "d30p8",
                    text: "In a double slit experiment $\\lambda = 600\\ \\mathrm{nm}$, $d = 1\\ \\mathrm{mm}$ and $D = 1\\ \\mathrm{m}$. The fringe width is:",
                    options: [
                        { key: "a", text: "0.6 mm" },
                        { key: "b", text: "0.06 mm" },
                        { key: "c", text: "6 mm" },
                        { key: "d", text: "1.6 mm" }
                    ],
                    answer: "a",
                    explanation: "$\\beta = \\dfrac{\\lambda D}{d} = \\dfrac{600 \\times 10^{-9} \\times 1}{1 \\times 10^{-3}} = 6 \\times 10^{-4}\\ \\mathrm{m} = \\mathbf{0.6\\ mm}$."
                },
                {
                    id: "d30p9",
                    text: "If the separation between the two slits is doubled, the fringe width will:",
                    options: [
                        { key: "a", text: "Become double" },
                        { key: "b", text: "Become four times" },
                        { key: "c", text: "Remain unchanged" },
                        { key: "d", text: "Become half" }
                    ],
                    answer: "d",
                    explanation: "Since $\\beta = \\dfrac{\\lambda D}{d}$, the fringe width is <strong>inversely proportional to $d$</strong>. Doubling the slit separation therefore halves the fringe width and crowds the pattern together."
                },
                {
                    id: "d30p10",
                    text: "In Young's experiment the source slit is moved a little nearer to the two slits. The fringe width on the screen will:",
                    options: [
                        { key: "a", text: "Increase in direct proportion" },
                        { key: "b", text: "Decrease in inverse proportion" },
                        { key: "c", text: "Remain unchanged" },
                        { key: "d", text: "Become zero at once" }
                    ],
                    answer: "c",
                    explanation: "$\\beta = \\dfrac{\\lambda D}{d}$ contains only the wavelength, the slit separation and the <em>slit-to-screen</em> distance. The position of the source slit affects the sharpness and brightness of the fringes but <strong>not their width</strong>."
                },
                {
                    id: "d30p11",
                    text: "The distance of the $n$th bright fringe from the centre of the screen in Young's experiment is:",
                    options: [
                        { key: "a", text: "$\\dfrac{n\\lambda D}{d}$" },
                        { key: "b", text: "$\\dfrac{(2n-1)\\lambda D}{2d}$" },
                        { key: "c", text: "$\\dfrac{n\\lambda d}{D}$" },
                        { key: "d", text: "$\\dfrac{n\\lambda D}{2d}$" }
                    ],
                    answer: "a",
                    explanation: "For a bright fringe the path difference is $n\\lambda$, giving $y_n = \\dfrac{n\\lambda D}{d} = n\\beta$. The dark fringes lie midway between them, at $y_n = \\dfrac{(2n-1)\\lambda D}{2d}$."
                },
                {
                    id: "d30p12",
                    text: "In a double slit experiment the fringe width is 0.4 mm. The distance between the third bright fringe and the central bright fringe is:",
                    options: [
                        { key: "a", text: "0.4 mm" },
                        { key: "b", text: "0.8 mm" },
                        { key: "c", text: "1.2 mm" },
                        { key: "d", text: "2.4 mm" }
                    ],
                    answer: "c",
                    explanation: "The fringes are equally spaced, so the $n$th bright fringe lies at $y_n = n\\beta$. For $n = 3$, $y = 3 \\times 0.4 = \\mathbf{1.2\\ mm}$."
                },
                {
                    id: "d30p13",
                    text: "In Young's experiment with monochromatic light, the fringe formed exactly at the centre of the screen is:",
                    options: [
                        { key: "a", text: "Bright, because the path difference there is zero" },
                        { key: "b", text: "Dark, because the path difference there is $\\lambda/2$" },
                        { key: "c", text: "Sometimes bright and sometimes dark" },
                        { key: "d", text: "Neither bright nor dark, being uniformly grey" }
                    ],
                    answer: "a",
                    explanation: "A point on the perpendicular bisector is equidistant from both slits, so the path difference is <strong>zero</strong> and the waves arrive in phase. The central fringe is therefore always bright — and with white light it is white, the higher orders being coloured."
                },
                {
                    id: "d30p14",
                    text: "If one of the two slits in Young's experiment is completely covered with an opaque screen, then on the screen one observes:",
                    options: [
                        { key: "a", text: "The same interference pattern but half as bright" },
                        { key: "b", text: "No light at all anywhere on the screen" },
                        { key: "c", text: "A single-slit diffraction pattern, the fringes vanishing" },
                        { key: "d", text: "Fringes of twice the original width" }
                    ],
                    answer: "c",
                    explanation: "Interference requires two beams; with one slit closed the pattern of bright and dark fringes disappears and only the broad <strong>diffraction pattern of the single open slit</strong> is left."
                },
                {
                    id: "d30p15",
                    text: "Two interfering waves have amplitudes in the ratio 3 : 1. The ratio of the maximum to the minimum intensity in the pattern is:",
                    options: [
                        { key: "a", text: "3 : 1" },
                        { key: "b", text: "9 : 1" },
                        { key: "c", text: "4 : 1" },
                        { key: "d", text: "16 : 4" }
                    ],
                    answer: "c",
                    explanation: "$\\dfrac{I_{max}}{I_{min}} = \\dfrac{(a_1+a_2)^2}{(a_1-a_2)^2} = \\dfrac{(3+1)^2}{(3-1)^2} = \\dfrac{16}{4} = \\mathbf{4:1}$. Note that intensity depends on the <em>square</em> of the amplitude."
                },
                {
                    id: "d30p16",
                    text: "Two coherent beams each of intensity $I$ interfere. The intensity at a point of constructive interference is:",
                    options: [
                        { key: "a", text: "$2I$" },
                        { key: "b", text: "$4I$" },
                        { key: "c", text: "$I$" },
                        { key: "d", text: "Zero" }
                    ],
                    answer: "b",
                    explanation: "Amplitudes add, so the resultant amplitude is $2a$ and the intensity $\\propto (2a)^2 = 4a^2 = \\mathbf{4I}$. At the minima the amplitudes cancel and the intensity is zero, the average over the pattern remaining $2I$ as energy conservation demands."
                },
                {
                    id: "d30p17",
                    text: "The brilliant colours seen on a soap bubble or on a thin film of oil spread over water are caused by:",
                    options: [
                        { key: "a", text: "Scattering of the sunlight by the molecules of the film" },
                        { key: "b", text: "Total internal reflection repeatedly inside the thin film" },
                        { key: "c", text: "Interference of light reflected from the two surfaces of the film" },
                        { key: "d", text: "Polarisation of the light as it enters the film obliquely" }
                    ],
                    answer: "c",
                    explanation: "Light reflected from the top and the bottom surfaces of the film travels slightly different paths and the two beams interfere. The condition depends on the wavelength, the film thickness and the angle, so different colours are reinforced at different points — <strong>thin-film interference</strong>."
                },
                {
                    id: "d30p18",
                    text: "In Newton's rings viewed by reflected light, the centre of the pattern is:",
                    options: [
                        { key: "a", text: "Bright" },
                        { key: "b", text: "Dark" },
                        { key: "c", text: "Coloured red" },
                        { key: "d", text: "Uniformly illuminated" }
                    ],
                    answer: "b",
                    explanation: "At the point of contact the air film has zero thickness, but the ray reflected at the denser surface suffers an extra phase change of $\\pi$ (a path difference of $\\lambda/2$). The two beams are therefore in opposite phase and the centre is <strong>dark</strong>."
                },
                {
                    id: "d30p19",
                    text: "A camera lens is coated with a thin transparent film in order to:",
                    options: [
                        { key: "a", text: "Increase the reflection from its surface" },
                        { key: "b", text: "Increase the focal length of the lens" },
                        { key: "c", text: "Polarise the light entering the camera" },
                        { key: "d", text: "Reduce reflection by destructive interference" }
                    ],
                    answer: "d",
                    explanation: "The coating has a thickness of about $\\lambda/4\\mu$, so the beams reflected from its two surfaces are in opposite phase and cancel by <strong>destructive interference</strong>. Less light is reflected and more is transmitted, brightening the image and removing ghost reflections — a blooming or anti-reflection coating."
                },
                {
                    id: "d30p20",
                    text: "The angular width of a fringe in Young's double slit experiment is given by:",
                    options: [
                        { key: "a", text: "$\\lambda/d$" },
                        { key: "b", text: "$d/\\lambda$" },
                        { key: "c", text: "$\\lambda D/d$" },
                        { key: "d", text: "$\\lambda/D$" }
                    ],
                    answer: "a",
                    explanation: "Angular width $= \\dfrac{\\beta}{D} = \\dfrac{\\lambda D/d}{D} = \\dfrac{\\lambda}{d}$. Unlike the linear fringe width, it does <strong>not depend on the distance of the screen</strong>, so moving the screen does not change it."
                },
                {
                    id: "d30p21",
                    text: "In Young's experiment white light is used in place of monochromatic light. The pattern obtained shows:",
                    options: [
                        { key: "a", text: "Only white fringes of equal width throughout" },
                        { key: "b", text: "A white centre with a few coloured fringes on either side" },
                        { key: "c", text: "Completely uniform white illumination" },
                        { key: "d", text: "Alternate red and green fringes only" }
                    ],
                    answer: "b",
                    explanation: "All wavelengths give a maximum at zero path difference, so the <strong>central fringe is white</strong>. Away from the centre the maxima of different colours fall at different places, giving a few coloured fringes; further out the colours overlap so completely that the field becomes uniformly white."
                },
                {
                    id: "d30p22",
                    text: "In a double slit experiment the fringe width for red light is compared with that for violet light, all else being the same. The fringe width is:",
                    options: [
                        { key: "a", text: "Greater for red light" },
                        { key: "b", text: "Greater for violet light" },
                        { key: "c", text: "The same for both" },
                        { key: "d", text: "Zero for both colours" }
                    ],
                    answer: "a",
                    explanation: "$\\beta \\propto \\lambda$, and red light has the longer wavelength, so its fringes are the <strong>wider</strong>. Violet, with the shortest wavelength, gives the narrowest fringes and so lies nearest the centre in a white-light pattern."
                },
                {
                    id: "d30p23",
                    text: "In a double slit experiment the fringe width is 0.6 mm when the slits are 1 mm apart and the screen is 1.5 m away. The wavelength of the light used is:",
                    options: [
                        { key: "a", text: "4000 &Aring;" },
                        { key: "b", text: "5000 &Aring;" },
                        { key: "c", text: "6000 &Aring;" },
                        { key: "d", text: "9000 &Aring;" }
                    ],
                    answer: "a",
                    explanation: "From $\\beta = \\dfrac{\\lambda D}{d}$, $\\lambda = \\dfrac{\\beta d}{D} = \\dfrac{0.6 \\times 10^{-3} \\times 1 \\times 10^{-3}}{1.5} = 4 \\times 10^{-7}\\ \\mathrm{m} = \\mathbf{4000\\ &Aring;}$ — violet light."
                },
                {
                    id: "d30p24",
                    text: "In Young's experiment the slit-to-screen distance is doubled and the slit separation is also doubled. The fringe width will:",
                    options: [
                        { key: "a", text: "Become four times" },
                        { key: "b", text: "Become half" },
                        { key: "c", text: "Remain unchanged" },
                        { key: "d", text: "Become double" }
                    ],
                    answer: "c",
                    explanation: "$\\beta = \\dfrac{\\lambda D}{d}$. Doubling $D$ doubles $\\beta$ and doubling $d$ halves it, so the two changes cancel exactly and the fringe width is <strong>unchanged</strong>."
                },
                {
                    id: "d30p25",
                    text: "The bending of light round the edges of an obstacle and its spreading into the geometrical shadow is called:",
                    options: [
                        { key: "a", text: "Dispersion" },
                        { key: "b", text: "Scattering" },
                        { key: "c", text: "Polarisation" },
                        { key: "d", text: "Diffraction" }
                    ],
                    answer: "d",
                    explanation: "<strong>Diffraction</strong> is the bending of a wave at the edge of an obstacle or aperture and its spreading into the region of the geometrical shadow. It sets the ultimate limit on the sharpness of every optical image."
                },
                {
                    id: "d30p26",
                    text: "Diffraction becomes appreciable only when the size of the obstacle or aperture is:",
                    options: [
                        { key: "a", text: "Very much larger than the wavelength" },
                        { key: "b", text: "Comparable with the wavelength of the wave" },
                        { key: "c", text: "Exactly one hundred times the wavelength" },
                        { key: "d", text: "Completely independent of the wavelength" }
                    ],
                    answer: "b",
                    explanation: "Bending is significant only when the aperture is of the <strong>order of the wavelength</strong>. Light has a wavelength of about $5 \\times 10^{-7}$ m, so everyday objects cast sharp shadows and diffraction escapes notice — which is why light appears to travel in straight lines."
                },
                {
                    id: "d30p27",
                    text: "Sound can be heard round the corner of a wall but light cannot be seen round it. This is because:",
                    options: [
                        { key: "a", text: "Sound travels faster than light in air" },
                        { key: "b", text: "Sound is a transverse wave and light is longitudinal" },
                        { key: "c", text: "The wavelength of sound is comparable with the size of the wall" },
                        { key: "d", text: "Light is absorbed completely by the wall" }
                    ],
                    answer: "c",
                    explanation: "Audible sound has wavelengths from a few centimetres to several metres — comparable with doors and walls — so it diffracts strongly. The wavelength of light is smaller by a factor of about a million, so its diffraction round such large objects is utterly negligible."
                },
                {
                    id: "d30p28",
                    text: "In Fraunhofer diffraction, unlike Fresnel diffraction, the source and the screen are:",
                    options: [
                        { key: "a", text: "At a finite distance from the slit, giving a curved wavefront" },
                        { key: "b", text: "Moving steadily with respect to the diffracting slit" },
                        { key: "c", text: "Placed in direct contact with the diffracting slit" },
                        { key: "d", text: "Effectively at infinity, so the wavefront is plane" }
                    ],
                    answer: "d",
                    explanation: "In <strong>Fraunhofer</strong> diffraction the incident wavefront is <strong>plane</strong>, the source and screen being effectively at infinity (in practice achieved with lenses). In Fresnel diffraction they are at a finite distance and the wavefront is spherical or cylindrical."
                },
                {
                    id: "d30p29",
                    text: "In the diffraction pattern of a single slit of width $a$, the minima occur at angles given by:",
                    options: [
                        { key: "a", text: "$a\\sin\\theta = n\\lambda/2$" },
                        { key: "b", text: "$a\\sin\\theta = (2n+1)\\lambda/2$" },
                        { key: "c", text: "$a\\cos\\theta = n\\lambda$" },
                        { key: "d", text: "$a\\sin\\theta = n\\lambda$" }
                    ],
                    answer: "d",
                    explanation: "The slit is divided into pairs of strips whose contributions cancel when $a\\sin\\theta = n\\lambda$ with $n = 1, 2, 3\\ldots$ — note that this gives the <strong>minima</strong>, the exact opposite of the interference condition, which is a favourite trap in the examination."
                },
                {
                    id: "d30p30",
                    text: "Light of wavelength 500 nm falls on a slit of width 0.1 mm. The angular position of the first minimum is about:",
                    options: [
                        { key: "a", text: "$2 \\times 10^{-3}$ rad" },
                        { key: "b", text: "$5 \\times 10^{-6}$ rad" },
                        { key: "c", text: "$5 \\times 10^{-3}$ rad" },
                        { key: "d", text: "$0.5$ rad" }
                    ],
                    answer: "c",
                    explanation: "For the first minimum $\\sin\\theta \\approx \\theta = \\dfrac{\\lambda}{a} = \\dfrac{500 \\times 10^{-9}}{0.1 \\times 10^{-3}} = \\mathbf{5 \\times 10^{-3}\\ rad}$."
                },
                {
                    id: "d30p31",
                    text: "The angular width of the central maximum in a single slit diffraction pattern is:",
                    options: [
                        { key: "a", text: "$\\lambda/a$" },
                        { key: "b", text: "$2\\lambda/a$" },
                        { key: "c", text: "$\\lambda/2a$" },
                        { key: "d", text: "$a/\\lambda$" }
                    ],
                    answer: "b",
                    explanation: "The first minima lie at $\\theta = \\pm\\lambda/a$, so the central maximum stretches over $\\mathbf{2\\lambda/a}$ — it is <strong>twice as wide</strong> as any of the secondary maxima. Its linear width on a screen at distance $D$ is $2\\lambda D/a$."
                },
                {
                    id: "d30p32",
                    text: "As the width of the single slit is gradually reduced, the central diffraction maximum:",
                    options: [
                        { key: "a", text: "Becomes narrower and brighter" },
                        { key: "b", text: "Becomes wider and fainter" },
                        { key: "c", text: "Remains exactly the same" },
                        { key: "d", text: "Splits into two separate maxima" }
                    ],
                    answer: "b",
                    explanation: "The angular width $2\\lambda/a$ is <strong>inversely proportional to the slit width</strong>, so a narrower slit spreads the light out more. Less light gets through as well, so the pattern is at the same time fainter."
                },
                {
                    id: "d30p33",
                    text: "Which statement correctly distinguishes diffraction fringes from interference fringes?",
                    options: [
                        { key: "a", text: "Interference fringes are of equal width and intensity; diffraction fringes are not" },
                        { key: "b", text: "Diffraction fringes are of equal width; interference fringes are not" },
                        { key: "c", text: "Both patterns have fringes of steadily decreasing width" },
                        { key: "d", text: "Neither pattern shows any dark fringes at all" }
                    ],
                    answer: "a",
                    explanation: "In <strong>interference</strong> all the bright fringes are equally spaced and of the same intensity, and the dark fringes are perfectly dark. In <strong>diffraction</strong> the central maximum is much the brightest and twice as wide, and the intensity of successive maxima falls off rapidly."
                },
                {
                    id: "d30p34",
                    text: "In a plane diffraction grating the grating element is:",
                    options: [
                        { key: "a", text: "The width of one transparent slit taken by itself" },
                        { key: "b", text: "The width of one opaque space taken by itself" },
                        { key: "c", text: "The sum of the widths of a slit and an opaque space" },
                        { key: "d", text: "The total width of the whole ruled grating" }
                    ],
                    answer: "c",
                    explanation: "The grating element $d = a + b$, where $a$ is the width of a transparency and $b$ that of the adjacent opacity. If a grating has $N$ lines per metre then $d = 1/N$."
                },
                {
                    id: "d30p35",
                    text: "The condition for the $n$th order principal maximum in a diffraction grating is:",
                    options: [
                        { key: "a", text: "$(a+b)\\sin\\theta = n\\lambda$" },
                        { key: "b", text: "$(a+b)\\sin\\theta = (2n+1)\\lambda/2$" },
                        { key: "c", text: "$(a+b)\\cos\\theta = n\\lambda$" },
                        { key: "d", text: "$a\\sin\\theta = n\\lambda$" }
                    ],
                    answer: "a",
                    explanation: "Light from corresponding points of successive slits reinforces when the path difference $(a+b)\\sin\\theta$ equals a whole number of wavelengths, giving <strong>$(a+b)\\sin\\theta = n\\lambda$</strong>. The maxima are very sharp because thousands of slits contribute."
                },
                {
                    id: "d30p36",
                    text: "A grating has 5000 lines per centimetre. The grating element is:",
                    options: [
                        { key: "a", text: "$2 \\times 10^{-6}\\ \\mathrm{m}$" },
                        { key: "b", text: "$5 \\times 10^{-6}\\ \\mathrm{m}$" },
                        { key: "c", text: "$2 \\times 10^{-4}\\ \\mathrm{m}$" },
                        { key: "d", text: "$5 \\times 10^{-3}\\ \\mathrm{m}$" }
                    ],
                    answer: "a",
                    explanation: "$d = \\dfrac{1\\ \\mathrm{cm}}{5000} = \\dfrac{10^{-2}}{5000} = \\mathbf{2 \\times 10^{-6}\\ m}$, which is 2 micrometre — a few times the wavelength of light, as a useful grating must be."
                },
                {
                    id: "d30p37",
                    text: "The highest order of spectrum that can be observed with a grating of element $d$ using light of wavelength $\\lambda$ is limited by the fact that:",
                    options: [
                        { key: "a", text: "The grating absorbs all the higher orders" },
                        { key: "b", text: "The intensity becomes zero beyond the second order" },
                        { key: "c", text: "$\\sin\\theta$ cannot exceed 1, so $n \\le d/\\lambda$" },
                        { key: "d", text: "Higher orders fall outside the visible spectrum" }
                    ],
                    answer: "c",
                    explanation: "From $d\\sin\\theta = n\\lambda$, $n = \\dfrac{d\\sin\\theta}{\\lambda}$; since $\\sin\\theta \\le 1$, the greatest possible order is <strong>$n_{max} = d/\\lambda$</strong> (taken as a whole number). This is a standard numerical asked in the entrance paper."
                },
                {
                    id: "d30p38",
                    text: "According to the Rayleigh criterion, two point objects are just resolved when:",
                    options: [
                        { key: "a", text: "Their diffraction patterns do not overlap each other at all" },
                        { key: "b", text: "Both of the images fall on the very same point of the retina" },
                        { key: "c", text: "The central maxima of the two images coincide exactly" },
                        { key: "d", text: "The central maximum of one falls on the first minimum of the other" }
                    ],
                    answer: "d",
                    explanation: "Rayleigh's criterion sets the limit of resolution at the separation for which the <strong>central maximum of one image coincides with the first minimum of the other</strong>. Any closer and the two merge into a single blur."
                },
                {
                    id: "d30p39",
                    text: "The resolving power of a telescope of objective diameter $D$ for light of wavelength $\\lambda$ is:",
                    options: [
                        { key: "a", text: "$\\dfrac{1.22\\lambda}{D}$" },
                        { key: "b", text: "$\\dfrac{D}{1.22\\lambda}$" },
                        { key: "c", text: "$\\dfrac{\\lambda}{D}$" },
                        { key: "d", text: "$1.22\\lambda D$" }
                    ],
                    answer: "b",
                    explanation: "The <em>limit of resolution</em> is the smallest resolvable angle $d\\theta = \\dfrac{1.22\\lambda}{D}$, and the <strong>resolving power is its reciprocal</strong>, $\\dfrac{D}{1.22\\lambda}$. A larger objective therefore resolves finer detail — the main reason astronomical telescopes are built so large."
                },
                {
                    id: "d30p40",
                    text: "The resolving power of a compound microscope is increased by:",
                    options: [
                        { key: "a", text: "Using light of a longer wavelength, such as red light" },
                        { key: "b", text: "Reducing the diameter of the objective lens used" },
                        { key: "c", text: "Increasing the length of the tube of the microscope" },
                        { key: "d", text: "Using an oil immersion objective of high numerical aperture" }
                    ],
                    answer: "d",
                    explanation: "Resolving power $= \\dfrac{2\\mu\\sin\\theta}{1.22\\lambda}$, so it rises with the <strong>numerical aperture $\\mu\\sin\\theta$</strong> and falls as $\\lambda$ increases. Filling the gap with oil raises $\\mu$; using blue light or, far better, electrons of very short wavelength also improves resolution."
                },
                {
                    id: "d30p41",
                    text: "A telescope has an objective of diameter 0.1 m and is used with light of wavelength 5000 &Aring;. Its limit of resolution is about:",
                    options: [
                        { key: "a", text: "$6.1 \\times 10^{-6}$ rad" },
                        { key: "b", text: "$6.1 \\times 10^{-3}$ rad" },
                        { key: "c", text: "$1.6 \\times 10^{-5}$ rad" },
                        { key: "d", text: "$1.2 \\times 10^{-4}$ rad" }
                    ],
                    answer: "a",
                    explanation: "$d\\theta = \\dfrac{1.22\\lambda}{D} = \\dfrac{1.22 \\times 5 \\times 10^{-7}}{0.1} = \\mathbf{6.1 \\times 10^{-6}\\ rad}$."
                },
                {
                    id: "d30p42",
                    text: "The phenomenon of polarisation establishes that light waves are:",
                    options: [
                        { key: "a", text: "Longitudinal" },
                        { key: "b", text: "Transverse" },
                        { key: "c", text: "Stationary" },
                        { key: "d", text: "Mechanical" }
                    ],
                    answer: "b",
                    explanation: "Only a <strong>transverse</strong> wave has vibrations perpendicular to the direction of travel and can therefore be restricted to a single plane. Interference and diffraction are shown by all waves, but polarisation is possible only for transverse ones — which is why sound cannot be polarised."
                },
                {
                    id: "d30p43",
                    text: "In plane polarised light the vibrations of the electric vector are:",
                    options: [
                        { key: "a", text: "Confined to a single plane" },
                        { key: "b", text: "Present in all planes equally" },
                        { key: "c", text: "Along the direction of propagation" },
                        { key: "d", text: "Completely absent" }
                    ],
                    answer: "a",
                    explanation: "Ordinary light has vibrations in every plane perpendicular to the ray. When it is <strong>plane polarised</strong> the vibrations are restricted to <strong>one plane</strong> only, called the plane of vibration. A Polaroid, reflection or double refraction can produce this."
                },
                {
                    id: "d30p44",
                    text: "When two Polaroids are placed one behind the other with their axes at right angles, the light emerging is:",
                    options: [
                        { key: "a", text: "Of maximum intensity" },
                        { key: "b", text: "Of half the original intensity" },
                        { key: "c", text: "Practically zero" },
                        { key: "d", text: "Unpolarised but of full intensity" }
                    ],
                    answer: "c",
                    explanation: "The first Polaroid transmits vibrations in one plane only; the second, with its axis perpendicular, blocks exactly those vibrations. Crossed Polaroids therefore give <strong>extinction</strong>. Rotating the analyser through 90&deg; brings the light back."
                },
                {
                    id: "d30p45",
                    text: "According to Malus's law, when plane polarised light of intensity $I_0$ falls on an analyser whose axis makes an angle $\\theta$ with the plane of polarisation, the transmitted intensity is:",
                    options: [
                        { key: "a", text: "$I_0\\cos\\theta$" },
                        { key: "b", text: "$I_0/\\cos^2\\theta$" },
                        { key: "c", text: "$I_0\\sin^2\\theta$" },
                        { key: "d", text: "$I_0\\cos^2\\theta$" }
                    ],
                    answer: "d",
                    explanation: "Only the component $E_0\\cos\\theta$ is transmitted, and intensity goes as the square of the amplitude, giving $I = \\mathbf{I_0\\cos^2\\theta}$. At $\\theta = 0$ the intensity is a maximum and at $\\theta = 90^\\circ$ it is zero."
                },
                {
                    id: "d30p46",
                    text: "Brewster's law states that the refractive index of a medium is related to the polarising angle $i_p$ by:",
                    options: [
                        { key: "a", text: "$\\mu = \\sin i_p$" },
                        { key: "b", text: "$\\mu = \\cos i_p$" },
                        { key: "c", text: "$\\mu = \\tan i_p$" },
                        { key: "d", text: "$\\mu = 1/\\tan i_p$" }
                    ],
                    answer: "c",
                    explanation: "When light is incident at the polarising or Brewster angle, the reflected beam is completely plane polarised and <strong>$\\mu = \\tan i_p$</strong>. Since $\\mu$ varies with wavelength, the polarising angle is slightly different for different colours."
                },
                {
                    id: "d30p47",
                    text: "The polarising angle for a glass of refractive index 1.5 is about:",
                    options: [
                        { key: "a", text: "$33.7^\\circ$" },
                        { key: "b", text: "$41.8^\\circ$" },
                        { key: "c", text: "$56.3^\\circ$" },
                        { key: "d", text: "$63.4^\\circ$" }
                    ],
                    answer: "c",
                    explanation: "$i_p = \\tan^{-1}\\mu = \\tan^{-1}(1.5) \\approx \\mathbf{56.3^\\circ}$. (For comparison, $41.8^\\circ$ is the <em>critical</em> angle for the same glass — do not confuse the two.)"
                },
                {
                    id: "d30p48",
                    text: "When light is incident on a glass surface at the Brewster angle, the angle between the reflected and the refracted rays is:",
                    options: [
                        { key: "a", text: "$45^\\circ$" },
                        { key: "b", text: "$90^\\circ$" },
                        { key: "c", text: "$180^\\circ$" },
                        { key: "d", text: "$0^\\circ$" }
                    ],
                    answer: "b",
                    explanation: "At the polarising angle the reflected and refracted rays are exactly <strong>perpendicular</strong> to each other, since $i_p + r = 90^\\circ$. Combining this with Snell's law is in fact how Brewster's law $\\mu = \\tan i_p$ is derived."
                }/* __DIFF__ */
            ]
        },
        {
            id: "selanim30",
            name: "Study of Selected Animals",
            subject: "Zoology",
            accent: "rose",
            blurb: "Q49–100 · Plasmodium: habitat, structure, life cycle and types of malaria; Earthworm: morphology, body systems and economic importance; Frog: morphology, body systems and physiology.",
            questions: [
                {
                    id: "d30z49",
                    text: "<em>Plasmodium</em> is described as a digenetic parasite because it:",
                    options: [
                        { key: "a", text: "Has two different kinds of gamete" },
                        { key: "b", text: "Completes its life cycle in two different hosts" },
                        { key: "c", text: "Reproduces twice in every twenty-four hours" },
                        { key: "d", text: "Possesses two nuclei in each of its cells" }
                    ],
                    answer: "b",
                    explanation: "A <strong>digenetic</strong> parasite needs <strong>two hosts</strong> to complete its life cycle — man and the female <em>Anopheles</em> mosquito in the case of <em>Plasmodium</em>. A parasite completing its cycle in a single host is called monogenetic."
                },
                {
                    id: "d30z50",
                    text: "In the life cycle of <em>Plasmodium</em>, man and the mosquito are respectively the:",
                    options: [
                        { key: "a", text: "Primary definitive host and secondary intermediate host" },
                        { key: "b", text: "Reservoir host and paratenic carrier host" },
                        { key: "c", text: "Both primary hosts, of exactly equal importance" },
                        { key: "d", text: "Secondary (intermediate) host and primary (definitive) host" }
                    ],
                    answer: "d",
                    explanation: "The <strong>definitive or primary host</strong> is the one in which <em>sexual</em> reproduction occurs — here the <strong>mosquito</strong>. Man harbours only the asexual phase (schizogony) and is therefore the <strong>intermediate or secondary host</strong>."
                },
                {
                    id: "d30z51",
                    text: "Malaria is transmitted to man by the bite of:",
                    options: [
                        { key: "a", text: "The male <em>Anopheles</em> mosquito" },
                        { key: "b", text: "The female <em>Anopheles</em> mosquito" },
                        { key: "c", text: "The female <em>Culex</em> mosquito" },
                        { key: "d", text: "The female <em>Aedes</em> mosquito" }
                    ],
                    answer: "b",
                    explanation: "Only the <strong>female <em>Anopheles</em></strong> bites, because she needs a blood meal for her eggs; the male feeds on plant juices. <em>Culex</em> transmits filariasis and <em>Aedes</em> dengue, chikungunya and yellow fever."
                },
                {
                    id: "d30z52",
                    text: "The species of <em>Plasmodium</em> responsible for malignant tertian (cerebral) malaria, the most fatal form, is:",
                    options: [
                        { key: "a", text: "<em>Plasmodium vivax</em>" },
                        { key: "b", text: "<em>Plasmodium malariae</em>" },
                        { key: "c", text: "<em>Plasmodium falciparum</em>" },
                        { key: "d", text: "<em>Plasmodium ovale</em>" }
                    ],
                    answer: "c",
                    explanation: "<strong><em>P. falciparum</em></strong> causes malignant tertian malaria, which may become cerebral and is often fatal. <em>P. vivax</em> gives benign tertian, <em>P. malariae</em> quartan and <em>P. ovale</em> mild tertian malaria."
                },
                {
                    id: "d30z53",
                    text: "The stage of <em>Plasmodium</em> that is infective to man is the:",
                    options: [
                        { key: "a", text: "Sporozoite" },
                        { key: "b", text: "Merozoite" },
                        { key: "c", text: "Gametocyte" },
                        { key: "d", text: "Ookinete" }
                    ],
                    answer: "a",
                    explanation: "The slender, sickle-shaped <strong>sporozoites</strong> stored in the salivary glands of the mosquito are injected with the saliva when she bites, and they reach the liver within about half an hour."
                },
                {
                    id: "d30z54",
                    text: "The stage of <em>Plasmodium</em> that is infective to the mosquito is the:",
                    options: [
                        { key: "a", text: "Sporozoite" },
                        { key: "b", text: "Schizont" },
                        { key: "c", text: "Cryptozoite" },
                        { key: "d", text: "Gametocyte" }
                    ],
                    answer: "d",
                    explanation: "The mosquito picks up the <strong>gametocytes</strong> (male microgametocyte and female macrogametocyte) with the blood meal; only these survive in her stomach and go on to form gametes. All other blood stages are digested."
                },
                {
                    id: "d30z55",
                    text: "In man, the sporozoites first multiply in the:",
                    options: [
                        { key: "a", text: "Red blood corpuscles" },
                        { key: "b", text: "Liver cells" },
                        { key: "c", text: "Spleen" },
                        { key: "d", text: "Lymph nodes" }
                    ],
                    answer: "b",
                    explanation: "The sporozoites enter the <strong>hepatocytes</strong> and undergo <strong>pre-erythrocytic schizogony</strong>, producing many cryptozoites. Only after this liver phase do the parasites invade the red cells; this is why there is an incubation period before the fever begins."
                },
                {
                    id: "d30z56",
                    text: "The characteristic ring-like appearance of a young trophozoite inside a red blood corpuscle is called the:",
                    options: [
                        { key: "a", text: "Rosette stage" },
                        { key: "b", text: "Schizont stage" },
                        { key: "c", text: "Amoeboid stage" },
                        { key: "d", text: "Signet ring stage" }
                    ],
                    answer: "d",
                    explanation: "The vacuolated trophozoite with its nucleus pushed to one side looks like a <strong>signet ring</strong>. It then becomes amoeboid, grows, and finally divides to form a schizont packed with merozoites."
                },
                {
                    id: "d30z57",
                    text: "The rosette stage in the erythrocytic cycle of <em>Plasmodium</em> refers to the:",
                    options: [
                        { key: "a", text: "Ring-shaped young trophozoite in the corpuscle" },
                        { key: "b", text: "Mature schizont with merozoites arranged around the pigment" },
                        { key: "c", text: "Fusion of the male and the female gametes" },
                        { key: "d", text: "Cyst formed on the wall of the mosquito's stomach" }
                    ],
                    answer: "b",
                    explanation: "When the schizont has divided fully, the daughter <strong>merozoites are arranged radially round the central mass of haemozoin pigment</strong>, giving the flower-like <strong>rosette</strong> appearance just before the red cell bursts."
                },
                {
                    id: "d30z58",
                    text: "The erythrocytic schizogony of <em>Plasmodium vivax</em> is completed in about:",
                    options: [
                        { key: "a", text: "24 hours" },
                        { key: "b", text: "96 hours" },
                        { key: "c", text: "72 hours" },
                        { key: "d", text: "48 hours" }
                    ],
                    answer: "d",
                    explanation: "The cycle in the red cells takes about <strong>48 hours</strong> in <em>P. vivax</em>, so the fever recurs every third day — hence 'tertian' malaria. In <em>P. malariae</em> it takes 72 hours, giving quartan malaria with fever every fourth day."
                },
                {
                    id: "d30z59",
                    text: "The chill and rise of temperature in malaria coincide with the:",
                    options: [
                        { key: "a", text: "Entry of the sporozoites into the cells of the liver" },
                        { key: "b", text: "Bursting of red cells and release of merozoites with haemozoin" },
                        { key: "c", text: "Formation of the gametocytes in the peripheral blood" },
                        { key: "d", text: "Fusion of the gametes inside the stomach of the mosquito" }
                    ],
                    answer: "b",
                    explanation: "When the infected corpuscles rupture simultaneously they liberate merozoites together with the toxic pigment <strong>haemozoin</strong>, and it is this that provokes the characteristic paroxysm — shivering, high fever and then profuse sweating. The synchrony of the bursting explains the periodicity."
                },
                {
                    id: "d30z60",
                    text: "In the stomach of the mosquito, the zygote of <em>Plasmodium</em> becomes motile and is then called the:",
                    options: [
                        { key: "a", text: "Ookinete" },
                        { key: "b", text: "Oocyst" },
                        { key: "c", text: "Sporoblast" },
                        { key: "d", text: "Merozoite" }
                    ],
                    answer: "a",
                    explanation: "The zygote elongates into the worm-like motile <strong>ookinete</strong>, which bores through the stomach wall and settles beneath the outer covering, where it rounds off and becomes the <strong>oocyst</strong>."
                },
                {
                    id: "d30z61",
                    text: "The oocysts of <em>Plasmodium</em> in the mosquito are found:",
                    options: [
                        { key: "a", text: "Inside the salivary glands" },
                        { key: "b", text: "On the outer wall of the stomach" },
                        { key: "c", text: "Free in the body cavity" },
                        { key: "d", text: "Attached to the wall of the intestine's lumen" }
                    ],
                    answer: "b",
                    explanation: "The ookinete penetrates the stomach wall and comes to lie between the epithelium and the basement membrane on the <strong>outer surface of the stomach</strong>, where it encysts. Inside it, sporogony produces thousands of sporozoites."
                },
                {
                    id: "d30z62",
                    text: "After the oocyst ruptures, the sporozoites of <em>Plasmodium</em> migrate to the mosquito's:",
                    options: [
                        { key: "a", text: "Ovaries" },
                        { key: "b", text: "Malpighian tubules" },
                        { key: "c", text: "Salivary glands" },
                        { key: "d", text: "Compound eyes" }
                    ],
                    answer: "c",
                    explanation: "The liberated sporozoites travel through the haemolymph and collect in the <strong>salivary glands</strong>, from where they are injected into the next person the mosquito bites. The mosquito then remains infective for the rest of her life."
                },
                {
                    id: "d30z63",
                    text: "The asexual multiplication of <em>Plasmodium</em> in man and the sexual phase in the mosquito are respectively called:",
                    options: [
                        { key: "a", text: "Sporogony and schizogony" },
                        { key: "b", text: "Sporogony and gametogony" },
                        { key: "c", text: "Gametogony and schizogony" },
                        { key: "d", text: "Schizogony and sporogony" }
                    ],
                    answer: "d",
                    explanation: "<strong>Schizogony</strong> is the repeated asexual multiple fission occurring in the liver and red cells of man; <strong>sporogony</strong> is the phase in the mosquito that follows fertilisation and ends in the formation of sporozoites."
                },
                {
                    id: "d30z64",
                    text: "The transmission of malaria by the mosquito was discovered by:",
                    options: [
                        { key: "a", text: "Alexander Fleming" },
                        { key: "b", text: "Louis Pasteur" },
                        { key: "c", text: "Robert Koch" },
                        { key: "d", text: "Ronald Ross" }
                    ],
                    answer: "d",
                    explanation: "<strong>Sir Ronald Ross</strong> demonstrated in 1897 that the malarial parasite is transmitted by the mosquito, and received the Nobel Prize in 1902. Laveran had earlier discovered the parasite itself in human blood."
                },
                {
                    id: "d30z65",
                    text: "The classical antimalarial drug quinine is obtained from the bark of:",
                    options: [
                        { key: "a", text: "<em>Cinchona</em>" },
                        { key: "b", text: "<em>Rauwolfia</em>" },
                        { key: "c", text: "<em>Azadirachta</em>" },
                        { key: "d", text: "<em>Papaver</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong>Quinine</strong> comes from the bark of <em>Cinchona</em> and was the first effective remedy for malaria; chloroquine and artemisinin (from <em>Artemisia</em>) are the modern drugs. Control also depends on destroying mosquito breeding places and using nets."
                },
                {
                    id: "d30z66",
                    text: "The common Indian earthworm studied in the course is:",
                    options: [
                        { key: "a", text: "<em>Pheretima posthuma</em>" },
                        { key: "b", text: "<em>Lumbricus terrestris</em>" },
                        { key: "c", text: "<em>Hirudinaria granulosa</em>" },
                        { key: "d", text: "<em>Ascaris lumbricoides</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Pheretima posthuma</em></strong> is the common earthworm of the plains, a nocturnal burrower in moist humus-rich soil. <em>Lumbricus</em> is the European earthworm, <em>Hirudinaria</em> the leech and <em>Ascaris</em> a roundworm."
                },
                {
                    id: "d30z67",
                    text: "The body of an earthworm is divided externally and internally into a large number of similar rings. This condition is called:",
                    options: [
                        { key: "a", text: "Metameric segmentation" },
                        { key: "b", text: "Pseudo-segmentation" },
                        { key: "c", text: "Radial symmetry" },
                        { key: "d", text: "Strobilation" }
                    ],
                    answer: "a",
                    explanation: "In <strong>true metameric segmentation</strong> the divisions are marked internally by septa as well as externally by grooves, and the organs are repeated in each segment. It is a defining feature of the phylum Annelida."
                },
                {
                    id: "d30z68",
                    text: "The clitellum of <em>Pheretima</em> is a glandular band occupying segments:",
                    options: [
                        { key: "a", text: "8 to 10" },
                        { key: "b", text: "14 to 16" },
                        { key: "c", text: "20 to 22" },
                        { key: "d", text: "1 to 3" }
                    ],
                    answer: "b",
                    explanation: "The prominent dark girdle over segments <strong>14, 15 and 16</strong> is the <strong>clitellum</strong>. It secretes the mucus that holds the worms together during copulation and later forms the <strong>cocoon</strong>, and it also divides the body into pre-clitellar, clitellar and post-clitellar regions."
                },
                {
                    id: "d30z69",
                    text: "The setae of the earthworm are absent from:",
                    options: [
                        { key: "a", text: "The ventral surface of all the segments" },
                        { key: "b", text: "Every segment behind the clitellum" },
                        { key: "c", text: "The first segment, the last segment and the clitellum" },
                        { key: "d", text: "The middle third of the body only" }
                    ],
                    answer: "c",
                    explanation: "The S-shaped chitinous <strong>setae</strong>, which grip the soil during locomotion, occur in rings on every segment <em>except</em> the <strong>first (peristomium), the last (anal segment) and the clitellum</strong>. They can be protruded and withdrawn by muscles."
                },
                {
                    id: "d30z70",
                    text: "In the earthworm, the fleshy lobe that overhangs the mouth but does not contain it is the:",
                    options: [
                        { key: "a", text: "Peristomium" },
                        { key: "b", text: "Pygidium" },
                        { key: "c", text: "Clitellum" },
                        { key: "d", text: "Prostomium" }
                    ],
                    answer: "d",
                    explanation: "The <strong>prostomium</strong> is a small sensory lobe overhanging the mouth; it helps the worm force open crevices in the soil. The mouth itself lies in the first true segment, the <strong>peristomium</strong>."
                },
                {
                    id: "d30z71",
                    text: "The correct order of the parts of the alimentary canal of the earthworm is:",
                    options: [
                        { key: "a", text: "Mouth, pharynx, oesophagus, gizzard, stomach, intestine, anus" },
                        { key: "b", text: "Mouth, oesophagus, pharynx, stomach, gizzard, intestine, anus" },
                        { key: "c", text: "Mouth, gizzard, pharynx, oesophagus, intestine, stomach, anus" },
                        { key: "d", text: "Mouth, stomach, gizzard, pharynx, oesophagus, intestine, anus" }
                    ],
                    answer: "a",
                    explanation: "The canal runs mouth &rarr; buccal cavity &rarr; <strong>pharynx</strong> &rarr; <strong>oesophagus</strong> &rarr; <strong>gizzard</strong> &rarr; <strong>stomach</strong> &rarr; <strong>intestine</strong> &rarr; anus. It is a straight tube running the whole length of the body."
                },
                {
                    id: "d30z72",
                    text: "The gizzard of <em>Pheretima</em>, which grinds the soil and organic matter, lies in segment:",
                    options: [
                        { key: "a", text: "5" },
                        { key: "b", text: "8" },
                        { key: "c", text: "12" },
                        { key: "d", text: "17" }
                    ],
                    answer: "b",
                    explanation: "The thick, muscular <strong>gizzard</strong> occupies the <strong>8th segment</strong> and crushes the swallowed soil particles and leaf fragments — a purely mechanical digestion, since the worm has no teeth."
                },
                {
                    id: "d30z73",
                    text: "The typhlosole of the earthworm's intestine functions to:",
                    options: [
                        { key: "a", text: "Increase the surface area for absorption" },
                        { key: "b", text: "Grind the food into fine particles" },
                        { key: "c", text: "Secrete the hormones of digestion" },
                        { key: "d", text: "Store the undigested waste before egestion" }
                    ],
                    answer: "a",
                    explanation: "The <strong>typhlosole</strong> is a median fold of the dorsal wall projecting into the lumen of the intestine, and it greatly <strong>increases the absorptive surface</strong> without lengthening the gut."
                },
                {
                    id: "d30z74",
                    text: "The blood vascular system of the earthworm is described as closed, which means that the blood:",
                    options: [
                        { key: "a", text: "Flows freely through open body spaces" },
                        { key: "b", text: "Is present only within the coelomic fluid" },
                        { key: "c", text: "Does not circulate at all in the body" },
                        { key: "d", text: "Is confined to the heart, blood vessels and capillaries" }
                    ],
                    answer: "d",
                    explanation: "In a <strong>closed</strong> system the blood stays within <strong>vessels</strong> throughout its circuit, so the flow is rapid and can be precisely directed. Arthropods and most molluscs, by contrast, have an open system with blood-filled sinuses."
                },
                {
                    id: "d30z75",
                    text: "In <em>Pheretima</em>, haemoglobin is:",
                    options: [
                        { key: "a", text: "Contained within large nucleated red corpuscles" },
                        { key: "b", text: "Dissolved in the plasma, the corpuscles being colourless" },
                        { key: "c", text: "Completely absent from the blood of the animal" },
                        { key: "d", text: "Present only inside the tubules of the nephridia" }
                    ],
                    answer: "b",
                    explanation: "The earthworm's blood is red because the <strong>haemoglobin is dissolved in the plasma</strong>; the blood corpuscles it contains are colourless, nucleated and amoeboid, and serve in defence. In vertebrates the pigment is enclosed in the corpuscles instead."
                },
                {
                    id: "d30z76",
                    text: "Respiration in the earthworm takes place through the:",
                    options: [
                        { key: "a", text: "Gills at the anterior end" },
                        { key: "b", text: "Tracheal tubes opening by spiracles" },
                        { key: "c", text: "Moist body surface, by diffusion" },
                        { key: "d", text: "Pair of simple sac-like lungs" }
                    ],
                    answer: "c",
                    explanation: "Earthworms have no special respiratory organs. Exchange occurs through the <strong>moist, vascular skin</strong> — cutaneous respiration — which is why the worm must stay damp and why it comes to the surface when its burrow is flooded."
                },
                {
                    id: "d30z77",
                    text: "The excretory organs of the earthworm are the:",
                    options: [
                        { key: "a", text: "Nephridia" },
                        { key: "b", text: "Malpighian tubules" },
                        { key: "c", text: "Flame cells" },
                        { key: "d", text: "Green glands" }
                    ],
                    answer: "a",
                    explanation: "<strong>Nephridia</strong> are the segmentally arranged excretory tubules of the annelids; in <em>Pheretima</em> they are of three kinds — septal, pharyngeal (integumentary being the third) — and they remove nitrogenous waste. Malpighian tubules belong to insects and flame cells to flatworms."
                },
                {
                    id: "d30z78",
                    text: "The nervous system of the earthworm consists of a nerve ring round the pharynx continued backwards as a:",
                    options: [
                        { key: "a", text: "Dorsal nerve cord with ganglia in each segment" },
                        { key: "b", text: "Ventral nerve cord bearing a ganglion in each segment" },
                        { key: "c", text: "Pair of lateral nerve cords without ganglia" },
                        { key: "d", text: "Hollow tube filled with cerebrospinal fluid" }
                    ],
                    answer: "b",
                    explanation: "A double, solid, <strong>ventral nerve cord</strong> with a <strong>ganglion in every segment</strong> runs the length of the body from the circum-pharyngeal ring. In chordates the cord is single, dorsal and hollow — one of the standard contrasts asked in the examination."
                },
                {
                    id: "d30z79",
                    text: "Although the earthworm is hermaphrodite, self-fertilisation does not occur because it is:",
                    options: [
                        { key: "a", text: "Fertilised only inside the body of the mosquito" },
                        { key: "b", text: "Unable to produce any male gametes at all" },
                        { key: "c", text: "Separated into male and female individuals" },
                        { key: "d", text: "Protandrous, the testes maturing before the ovaries" }
                    ],
                    answer: "d",
                    explanation: "Both sets of organs occur in one animal, but the sperms ripen <em>before</em> the eggs — the worm is <strong>protandrous</strong> — so two worms must exchange sperms. This <strong>cross-fertilisation</strong> preserves genetic variation."
                },
                {
                    id: "d30z80",
                    text: "In <em>Pheretima</em>, the spermathecae which receive and store the sperms of the partner are situated in segments:",
                    options: [
                        { key: "a", text: "13 only" },
                        { key: "b", text: "10 and 11" },
                        { key: "c", text: "6 to 9" },
                        { key: "d", text: "14 to 16" }
                    ],
                    answer: "c",
                    explanation: "There are four pairs of <strong>spermathecae in segments 6, 7, 8 and 9</strong>. The two pairs of testes lie in segments 10 and 11 and the single pair of ovaries in segment 13."
                },
                {
                    id: "d30z81",
                    text: "The cocoon of the earthworm, inside which the eggs develop, is secreted by the:",
                    options: [
                        { key: "a", text: "Spermathecae" },
                        { key: "b", text: "Prostate glands" },
                        { key: "c", text: "Nephridia" },
                        { key: "d", text: "Clitellum" }
                    ],
                    answer: "d",
                    explanation: "The glandular <strong>clitellum</strong> secretes a mucous tube that slips forward over the body, collecting eggs from segment 14 and sperms from the spermathecae; when it slides off the anterior end its ends close to make the <strong>cocoon</strong>. Development is direct, with no larval stage."
                },
                {
                    id: "d30z82",
                    text: "Earthworms are called the 'friends of the farmer' chiefly because they:",
                    options: [
                        { key: "a", text: "Kill the insect pests of standing crops" },
                        { key: "b", text: "Burrow and cast, aerating the soil and enriching it" },
                        { key: "c", text: "Fix atmospheric nitrogen in the soil" },
                        { key: "d", text: "Pollinate the flowers of the crop plants" }
                    ],
                    answer: "b",
                    explanation: "Their burrows <strong>aerate and drain the soil</strong>, their castings bring subsoil to the surface and add nitrogen, phosphorus and potash in an available form, and their activity improves the texture and water-holding capacity. Darwin devoted a whole book to their role in making vegetable mould."
                },
                {
                    id: "d30z83",
                    text: "The practice of using earthworms to convert farm and kitchen waste into manure is known as:",
                    options: [
                        { key: "a", text: "Vermicomposting" },
                        { key: "b", text: "Sericulture" },
                        { key: "c", text: "Apiculture" },
                        { key: "d", text: "Pisciculture" }
                    ],
                    answer: "a",
                    explanation: "<strong>Vermicomposting</strong> uses earthworms to break organic waste down into a rich, granular manure. Sericulture is silk-moth rearing, apiculture bee-keeping and pisciculture fish farming."
                },
                {
                    id: "d30z84",
                    text: "The frog is described as a poikilothermic animal, which means that it:",
                    options: [
                        { key: "a", text: "Keeps its body temperature constant at all times" },
                        { key: "b", text: "Can survive without any oxygen for long periods" },
                        { key: "c", text: "Lives only in water throughout the whole of its life" },
                        { key: "d", text: "Has a body temperature that varies with the surroundings" }
                    ],
                    answer: "d",
                    explanation: "A <strong>poikilothermic (cold-blooded)</strong> animal cannot regulate its body temperature, which follows that of its surroundings. This is why the frog must pass the winter in <em>hibernation</em> and the hot dry season in <em>aestivation</em>."
                },
                {
                    id: "d30z85",
                    text: "The winter sleep and the summer sleep of the frog are called respectively:",
                    options: [
                        { key: "a", text: "Aestivation and hibernation" },
                        { key: "b", text: "Hibernation and aestivation" },
                        { key: "c", text: "Migration and metamorphosis" },
                        { key: "d", text: "Diapause and moulting" }
                    ],
                    answer: "b",
                    explanation: "<strong>Hibernation</strong> is the winter sleep, passed in the mud at the bottom of a pond or in a damp burrow; <strong>aestivation</strong> is the summer sleep during the hot dry months. In both the frog respires only through its skin."
                },
                {
                    id: "d30z86",
                    text: "The skin of the frog is kept moist and slippery by:",
                    options: [
                        { key: "a", text: "A covering of overlapping horny scales" },
                        { key: "b", text: "A dense coat of very fine hair" },
                        { key: "c", text: "A thick layer of subcutaneous fat" },
                        { key: "d", text: "The secretion of numerous mucous glands" }
                    ],
                    answer: "d",
                    explanation: "The frog's skin is soft, scaleless and richly supplied with <strong>mucous glands</strong>, whose secretion keeps it moist. This matters because the moist, vascular skin is a major respiratory surface, and it also makes the animal slippery to a predator."
                },
                {
                    id: "d30z87",
                    text: "When a frog remains completely submerged in water for a long time, it respires:",
                    options: [
                        { key: "a", text: "Only through the lungs" },
                        { key: "b", text: "Only through the buccopharyngeal cavity" },
                        { key: "c", text: "Only through the skin, by diffusion" },
                        { key: "d", text: "Through gills that develop for the purpose" }
                    ],
                    answer: "c",
                    explanation: "The frog has three modes of respiration — cutaneous, buccopharyngeal and pulmonary. Under water only <strong>cutaneous respiration</strong> is possible, oxygen dissolving in the film of moisture on the skin and diffusing into the capillary network beneath. Adult frogs have no gills."
                },
                {
                    id: "d30z88",
                    text: "The heart of the frog consists of:",
                    options: [
                        { key: "a", text: "Two auricles and two ventricles" },
                        { key: "b", text: "Two auricles and one ventricle" },
                        { key: "c", text: "One auricle and one ventricle" },
                        { key: "d", text: "One auricle and two ventricles" }
                    ],
                    answer: "b",
                    explanation: "The frog's heart is <strong>three-chambered</strong> — two auricles and a single undivided ventricle — with a sinus venosus behind and a truncus arteriosus in front. Because there is only one ventricle, oxygenated and deoxygenated blood mix to some extent."
                },
                {
                    id: "d30z89",
                    text: "The red blood corpuscles of the frog differ from those of man in being:",
                    options: [
                        { key: "a", text: "Nucleated and oval in shape" },
                        { key: "b", text: "Non-nucleated and biconcave" },
                        { key: "c", text: "Colourless and amoeboid" },
                        { key: "d", text: "Absent altogether from the blood" }
                    ],
                    answer: "a",
                    explanation: "Frog erythrocytes are large, <strong>oval and nucleated</strong>, as in all vertebrates except mammals. Mammalian red cells lose the nucleus, becoming biconcave discs that hold more haemoglobin and bend easily through capillaries."
                },
                {
                    id: "d30z90",
                    text: "In the frog, teeth are present on the:",
                    options: [
                        { key: "a", text: "Upper jaw and the vomer only" },
                        { key: "b", text: "Lower jaw only" },
                        { key: "c", text: "Both the jaws equally" },
                        { key: "d", text: "Tongue and the palate only" }
                    ],
                    answer: "a",
                    explanation: "The frog has small backwardly directed <strong>maxillary teeth</strong> on the upper jaw and a patch of <strong>vomerine teeth</strong> on the roof of the mouth; the <strong>lower jaw is toothless</strong>. They do not chew but simply stop the struggling prey escaping."
                },
                {
                    id: "d30z91",
                    text: "The tongue of the frog is peculiar in being:",
                    options: [
                        { key: "a", text: "Attached at the back and free in front" },
                        { key: "b", text: "Attached in front, bilobed behind and protrusible" },
                        { key: "c", text: "Completely fixed to the floor of the mouth" },
                        { key: "d", text: "Absent altogether in the adult stage" }
                    ],
                    answer: "b",
                    explanation: "The frog's tongue is <strong>fixed at the front of the lower jaw</strong> and its free, <strong>bilobed</strong> hind end is folded back into the mouth. It is flicked out suddenly and the sticky secretion on it traps the insect."
                },
                {
                    id: "d30z92",
                    text: "In the frog the rectum, the urinary ducts and the genital ducts all open into a common chamber called the:",
                    options: [
                        { key: "a", text: "Coelom" },
                        { key: "b", text: "Buccal cavity" },
                        { key: "c", text: "Cloaca" },
                        { key: "d", text: "Urinary bladder" }
                    ],
                    answer: "c",
                    explanation: "The <strong>cloaca</strong> receives the alimentary, urinary and genital ducts and opens to the exterior by the cloacal aperture. It occurs in amphibians, reptiles and birds but not in most mammals."
                },
                {
                    id: "d30z93",
                    text: "The kidney of the adult frog is of the type known as:",
                    options: [
                        { key: "a", text: "Pronephric" },
                        { key: "b", text: "Holonephric" },
                        { key: "c", text: "Metanephric" },
                        { key: "d", text: "Mesonephric" }
                    ],
                    answer: "d",
                    explanation: "The adult frog has a <strong>mesonephric</strong> kidney — a pair of dark red flattened bodies on the dorsal body wall. In the male the duct carries both urine and sperms and is therefore a urinogenital duct. Mammals have the more advanced metanephric kidney."
                },
                {
                    id: "d30z94",
                    text: "The tadpole of the frog excretes ammonia while the adult excretes urea. The frog is therefore:",
                    options: [
                        { key: "a", text: "Ammonotelic as a larva and ureotelic as an adult" },
                        { key: "b", text: "Ureotelic as a larva and uricotelic as an adult" },
                        { key: "c", text: "Uricotelic throughout the whole of its life" },
                        { key: "d", text: "Ammonotelic throughout the whole of its life" }
                    ],
                    answer: "a",
                    explanation: "The aquatic tadpole has ample water to dilute the highly toxic ammonia and is <strong>ammonotelic</strong>; the land-dwelling adult converts it into the far less toxic urea and is <strong>ureotelic</strong>. The change accompanies metamorphosis."
                },
                {
                    id: "d30z95",
                    text: "The number of pairs of cranial nerves in the frog is:",
                    options: [
                        { key: "a", text: "8" },
                        { key: "b", text: "10" },
                        { key: "c", text: "12" },
                        { key: "d", text: "31" }
                    ],
                    answer: "b",
                    explanation: "The frog has <strong>ten pairs</strong> of cranial nerves, as do fishes and amphibians generally; reptiles, birds and mammals have twelve. The frog also has ten pairs of spinal nerves."
                },
                {
                    id: "d30z96",
                    text: "The transparent fold that moves across the frog's eye and protects it under water is the:",
                    options: [
                        { key: "a", text: "Nictitating membrane" },
                        { key: "b", text: "Tympanic membrane" },
                        { key: "c", text: "Conjunctiva" },
                        { key: "d", text: "Choroid coat" }
                    ],
                    answer: "a",
                    explanation: "The <strong>nictitating membrane</strong> is drawn over the eyeball to keep it moist and protect it under water while still allowing the frog to see. The <em>tympanum</em> is the external ear drum, seen as a disc behind the eye."
                },
                {
                    id: "d30z97",
                    text: "The nuptial pad and the vocal sacs of the frog are found in:",
                    options: [
                        { key: "a", text: "The male only" },
                        { key: "b", text: "The female only" },
                        { key: "c", text: "Both the sexes equally" },
                        { key: "d", text: "The tadpole only" }
                    ],
                    answer: "a",
                    explanation: "These are secondary sexual characters of the <strong>male</strong>: the dark <strong>copulatory (nuptial) pad</strong> on the first digit of the forelimb grips the female during amplexus, and the paired <strong>vocal sacs</strong> amplify his croak."
                },
                {
                    id: "d30z98",
                    text: "Fertilisation in the frog is:",
                    options: [
                        { key: "a", text: "Internal, within the body of the female" },
                        { key: "b", text: "Absent, reproduction being asexual" },
                        { key: "c", text: "Internal in water and external on land" },
                        { key: "d", text: "External, in water, during amplexus" }
                    ],
                    answer: "d",
                    explanation: "During <strong>amplexus</strong> the male clasps the female and sheds sperms over the eggs as she lays them, so fertilisation is <strong>external</strong> and occurs in water. The eggs are laid in gelatinous clusters and development includes a free-swimming tadpole."
                },
                {
                    id: "d30z99",
                    text: "The metamorphosis of the tadpole into an adult frog is controlled by the hormone:",
                    options: [
                        { key: "a", text: "Parathormone" },
                        { key: "b", text: "Insulin" },
                        { key: "c", text: "Adrenaline" },
                        { key: "d", text: "Thyroxine" }
                    ],
                    answer: "d",
                    explanation: "<strong>Thyroxine</strong> triggers metamorphosis — the tail and gills regress, limbs and lungs develop and the gut shortens as the herbivorous tadpole becomes a carnivorous frog. Without iodine, or after removal of the thyroid, the tadpole simply grows larger and never changes."
                },
                {
                    id: "d30z100",
                    text: "The frog is regarded as useful to agriculture chiefly because it:",
                    options: [
                        { key: "a", text: "Adds nitrogen compounds to the paddy field" },
                        { key: "b", text: "Burrows and thereby aerates the soil" },
                        { key: "c", text: "Feeds on insects and other pests of the crops" },
                        { key: "d", text: "Pollinates the flowers of the crop plants" }
                    ],
                    answer: "c",
                    explanation: "Frogs are voracious <strong>insectivores</strong> and destroy enormous numbers of crop pests and mosquito larvae, acting as natural biological control. They also occupy a key place in the food chain, and their decline is treated as a warning of environmental damage."
                }
            ]
        },
        {
            id: "clasbio30",
            name: "Classification, Monera & Virus",
            subject: "Botany",
            accent: "blue",
            blurb: "Q101–124 · easy recall · two-kingdom, five-kingdom and three-domain systems, hierarchy and nomenclature; bacterial structure, types, nutrition and growth, cyanobacteria and viruses.",
            questions: [
                {
                    id: "d30b101",
                    text: "In the old two-kingdom system, the fungi were placed in the kingdom:",
                    options: [
                        { key: "a", text: "Monera" },
                        { key: "b", text: "Animalia" },
                        { key: "c", text: "Plantae" },
                        { key: "d", text: "Protista" }
                    ],
                    answer: "c",
                    explanation: "Because they are non-motile and have a cell wall, fungi were grouped with the <strong>plants</strong>. Whittaker later gave them a kingdom of their own, since they have no chlorophyll and their wall is of chitin."
                },
                {
                    id: "d30b102",
                    text: "The branch of biology that deals with the identification, naming and classification of organisms is:",
                    options: [
                        { key: "a", text: "Ecology" },
                        { key: "b", text: "Physiology" },
                        { key: "c", text: "Genetics" },
                        { key: "d", text: "Taxonomy" }
                    ],
                    answer: "d",
                    explanation: "<strong>Taxonomy</strong> covers identification, nomenclature and classification. Systematics is the wider study that also takes evolutionary relationships into account."
                },
                {
                    id: "d30b103",
                    text: "The rules for naming plants are laid down by the:",
                    options: [
                        { key: "a", text: "ICZN" },
                        { key: "b", text: "ICBN" },
                        { key: "c", text: "IUCN" },
                        { key: "d", text: "WHO" }
                    ],
                    answer: "b",
                    explanation: "The <strong>International Code of Botanical Nomenclature</strong> governs the naming of plants; the ICZN does the same for animals. The IUCN is concerned with conservation and the red data list."
                },
                {
                    id: "d30b104",
                    text: "The book <em>Species Plantarum</em>, in which binomial nomenclature was first used consistently, was published in:",
                    options: [
                        { key: "a", text: "1653" },
                        { key: "b", text: "1753" },
                        { key: "c", text: "1859" },
                        { key: "d", text: "1969" }
                    ],
                    answer: "b",
                    explanation: "Linnaeus published <em>Species Plantarum</em> in <strong>1753</strong>, the accepted starting point of botanical nomenclature. Darwin's <em>Origin of Species</em> appeared in 1859 and Whittaker's five-kingdom system in 1969."
                },
                {
                    id: "d30b105",
                    text: "The number of obligate categories in the taxonomic hierarchy is:",
                    options: [
                        { key: "a", text: "Five" },
                        { key: "b", text: "Six" },
                        { key: "c", text: "Seven" },
                        { key: "d", text: "Ten" }
                    ],
                    answer: "c",
                    explanation: "The <strong>seven</strong> obligate categories are Kingdom, Division, Class, Order, Family, Genus and Species. Intermediate ranks such as sub-class or tribe may be added when needed."
                },
                {
                    id: "d30b106",
                    text: "The taxonomic category that lies between Class and Family is:",
                    options: [
                        { key: "a", text: "Species" },
                        { key: "b", text: "Genus" },
                        { key: "c", text: "Division" },
                        { key: "d", text: "Order" }
                    ],
                    answer: "d",
                    explanation: "The sequence runs Class &rarr; <strong>Order</strong> &rarr; Family. An order is a group of related families and a family a group of related genera."
                },
                {
                    id: "d30b107",
                    text: "A classification based on evolutionary relationships and common ancestry is called:",
                    options: [
                        { key: "a", text: "Artificial classification" },
                        { key: "b", text: "Natural classification" },
                        { key: "c", text: "Phylogenetic classification" },
                        { key: "d", text: "Alphabetical classification" }
                    ],
                    answer: "c",
                    explanation: "A <strong>phylogenetic</strong> system groups organisms according to their descent from a common ancestor. An artificial system uses one or two convenient characters (as Linnaeus used stamen number), and a natural system uses many characters together."
                },
                {
                    id: "d30b108",
                    text: "In the five-kingdom system, the kingdom whose members obtain food by absorption is:",
                    options: [
                        { key: "a", text: "Plantae" },
                        { key: "b", text: "Animalia" },
                        { key: "c", text: "Fungi" },
                        { key: "d", text: "Monera" }
                    ],
                    answer: "c",
                    explanation: "Whittaker separated the kingdoms partly by their nutrition: Plantae are photosynthetic, Animalia ingestive and <strong>Fungi absorptive</strong> — they secrete enzymes outside the body and absorb the digested food."
                },
                {
                    id: "d30b109",
                    text: "Organisms living in extremely hot springs, strongly salty water and the gut of ruminants belong to the domain:",
                    options: [
                        { key: "a", text: "Bacteria" },
                        { key: "b", text: "Archaea" },
                        { key: "c", text: "Eukarya" },
                        { key: "d", text: "Protista" }
                    ],
                    answer: "b",
                    explanation: "The <strong>Archaea</strong> (archaebacteria) live in extreme habitats — thermoacidophiles in hot springs, halophiles in salt pans and methanogens in marshes and in the rumen. Their walls lack peptidoglycan and their membrane lipids are ether-linked."
                },
                {
                    id: "d30b110",
                    text: "A garden where living plants are grown and labelled for study and reference is called a:",
                    options: [
                        { key: "a", text: "Botanical garden" },
                        { key: "b", text: "Herbarium" },
                        { key: "c", text: "Museum" },
                        { key: "d", text: "Gene bank" }
                    ],
                    answer: "a",
                    explanation: "A <strong>botanical garden</strong> maintains <em>living</em> collections with labels giving the botanical name and family, and is used for study, conservation and reference. A herbarium stores dried and pressed specimens instead."
                },
                {
                    id: "d30b111",
                    text: "Bacteria were first observed under a microscope by:",
                    options: [
                        { key: "a", text: "Antonie van Leeuwenhoek" },
                        { key: "b", text: "Robert Hooke" },
                        { key: "c", text: "Louis Pasteur" },
                        { key: "d", text: "Robert Koch" }
                    ],
                    answer: "a",
                    explanation: "<strong>Leeuwenhoek</strong> saw and described bacteria in 1683 with his own simple microscopes, calling them 'animalcules'. Hooke had earlier described cells in cork; Pasteur and Koch founded the germ theory of disease much later."
                },
                {
                    id: "d30b112",
                    text: "The thick, sticky outer covering that protects some bacteria from drying and from phagocytosis is the:",
                    options: [
                        { key: "a", text: "Nucleoid" },
                        { key: "b", text: "Cell wall" },
                        { key: "c", text: "Plasma membrane" },
                        { key: "d", text: "Capsule" }
                    ],
                    answer: "d",
                    explanation: "The mucilaginous <strong>capsule</strong> or slime layer lies outside the cell wall. It protects against desiccation and against being engulfed by white blood cells, and it helps the bacterium stick to surfaces — capsulated strains are usually the more virulent."
                },
                {
                    id: "d30b113",
                    text: "The infolding of the plasma membrane of a bacterium, which bears respiratory enzymes, is called the:",
                    options: [
                        { key: "a", text: "Mesosome" },
                        { key: "b", text: "Ribosome" },
                        { key: "c", text: "Plasmid" },
                        { key: "d", text: "Capsule" }
                    ],
                    answer: "a",
                    explanation: "Since bacteria have no mitochondria, the respiratory enzymes are carried on the <strong>mesosome</strong>, an infolding of the plasma membrane. It also helps in DNA replication and in the formation of the cross wall during division."
                },
                {
                    id: "d30b114",
                    text: "The short hair-like outgrowths that help a bacterium to attach to a surface or to another bacterium are the:",
                    options: [
                        { key: "a", text: "Flagella" },
                        { key: "b", text: "Setae" },
                        { key: "c", text: "Cilia" },
                        { key: "d", text: "Pili (fimbriae)" }
                    ],
                    answer: "d",
                    explanation: "<strong>Pili or fimbriae</strong> are short, numerous protein tubes used for attachment; the special sex pilus forms the bridge through which DNA passes during conjugation. Flagella are far longer and are used for swimming."
                },
                {
                    id: "d30b115",
                    text: "The region of a bacterial cell in which the naked circular DNA lies is called the:",
                    options: [
                        { key: "a", text: "Nucleus" },
                        { key: "b", text: "Nucleolus" },
                        { key: "c", text: "Nucleoid" },
                        { key: "d", text: "Nuclear envelope" }
                    ],
                    answer: "c",
                    explanation: "The <strong>nucleoid</strong> is the irregular region of cytoplasm occupied by the single circular chromosome. Because there is no membrane around it, it is not a true nucleus — hence the name prokaryote."
                },
                {
                    id: "d30b116",
                    text: "Spherical bacteria arranged in a grape-like cluster are described as:",
                    options: [
                        { key: "a", text: "Diplococci" },
                        { key: "b", text: "Streptococci" },
                        { key: "c", text: "Staphylococci" },
                        { key: "d", text: "Sarcinae" }
                    ],
                    answer: "c",
                    explanation: "Cocci are named from the way they stay together after dividing: <strong>staphylococci</strong> in irregular grape-like clusters, streptococci in chains, diplococci in pairs and sarcinae in cubical packets of eight."
                },
                {
                    id: "d30b117",
                    text: "Bacteria that obtain their food from dead and decaying organic matter are called:",
                    options: [
                        { key: "a", text: "Parasitic" },
                        { key: "b", text: "Saprophytic" },
                        { key: "c", text: "Symbiotic" },
                        { key: "d", text: "Photoautotrophic" }
                    ],
                    answer: "b",
                    explanation: "<strong>Saprophytic</strong> bacteria secrete enzymes on to dead remains and absorb the soluble products; they are the chief decomposers and recycle nutrients. Parasitic bacteria live on a living host and symbiotic ones live in mutual benefit with it."
                },
                {
                    id: "d30b118",
                    text: "Methanogenic bacteria are useful to man because they:",
                    options: [
                        { key: "a", text: "Produce biogas from cattle dung and waste" },
                        { key: "b", text: "Convert milk into curd overnight" },
                        { key: "c", text: "Fix atmospheric nitrogen in root nodules" },
                        { key: "d", text: "Yield antibiotics used against infection" }
                    ],
                    answer: "a",
                    explanation: "<strong>Methanogens</strong> are anaerobic archaebacteria that live in marshes and in the rumen of cattle and produce methane. In a gobar gas plant they turn dung and other waste into <strong>biogas</strong>, a clean fuel, leaving a good manure behind."
                },
                {
                    id: "d30b119",
                    text: "The four phases of a bacterial growth curve, in order, are:",
                    options: [
                        { key: "a", text: "Log, lag, stationary, decline" },
                        { key: "b", text: "Lag, log, stationary, decline" },
                        { key: "c", text: "Lag, stationary, log, decline" },
                        { key: "d", text: "Stationary, lag, log, decline" }
                    ],
                    answer: "b",
                    explanation: "A culture passes through the <strong>lag</strong> phase of adjustment, the <strong>log</strong> (exponential) phase of rapid doubling, the <strong>stationary</strong> phase in which births equal deaths, and finally the <strong>decline</strong> or death phase as nutrients run out and wastes build up."
                },
                {
                    id: "d30b120",
                    text: "Cyanobacteria move by gliding rather than by swimming because they:",
                    options: [
                        { key: "a", text: "Possess a single polar flagellum" },
                        { key: "b", text: "Have no flagella and secrete mucilage" },
                        { key: "c", text: "Contract their cell wall rhythmically" },
                        { key: "d", text: "Are carried passively by water currents only" }
                    ],
                    answer: "b",
                    explanation: "Cyanobacteria are <strong>never flagellated</strong>. Many filamentous forms creep slowly over a surface by secreting <strong>mucilage</strong> through pores in the wall — a slow gliding movement quite unlike bacterial swimming."
                },
                {
                    id: "d30b121",
                    text: "<em>Spirulina</em>, a cyanobacterium, is grown commercially because it is:",
                    options: [
                        { key: "a", text: "The raw material for making vinegar" },
                        { key: "b", text: "The chief source of the antibiotic penicillin" },
                        { key: "c", text: "Used to prepare agar for culture media" },
                        { key: "d", text: "Rich in protein and used as a food supplement" }
                    ],
                    answer: "d",
                    explanation: "<strong><em>Spirulina</em></strong> contains up to 60 % protein together with vitamins and minerals, grows fast on cheap media and is marketed as a <strong>single-cell protein</strong> food supplement."
                },
                {
                    id: "d30b122",
                    text: "Viruses can be seen only with an electron microscope because their size is of the order of:",
                    options: [
                        { key: "a", text: "Millimetres" },
                        { key: "b", text: "Micrometres" },
                        { key: "c", text: "Nanometres" },
                        { key: "d", text: "Centimetres" }
                    ],
                    answer: "c",
                    explanation: "Viruses measure roughly 20 to 300 <strong>nanometres</strong> — smaller than the wavelength of visible light, so an ordinary microscope cannot resolve them. They also pass through filters that retain bacteria, which is how they were first detected."
                },
                {
                    id: "d30b123",
                    text: "Chemically, a simple virus consists of:",
                    options: [
                        { key: "a", text: "Protein and lipid only" },
                        { key: "b", text: "Carbohydrate and protein only" },
                        { key: "c", text: "Nucleic acid and protein only" },
                        { key: "d", text: "Nucleic acid and cellulose" }
                    ],
                    answer: "c",
                    explanation: "A virus is essentially a <strong>nucleoprotein</strong> — a core of DNA or RNA inside a protein capsid. Some animal viruses additionally carry a lipid envelope taken from the host membrane, but no virus has a cell wall or cytoplasm."
                },
                {
                    id: "d30b124",
                    text: "Viruses are classified into plant viruses, animal viruses and bacteriophages on the basis of:",
                    options: [
                        { key: "a", text: "The kind of host they infect" },
                        { key: "b", text: "The shape of their capsid" },
                        { key: "c", text: "Their size in nanometres" },
                        { key: "d", text: "The colour they show when stained" }
                    ],
                    answer: "a",
                    explanation: "The commonest grouping is by <strong>host range</strong> — plant viruses (TMV), animal viruses (polio, influenza, HIV) and bacterial viruses or bacteriophages. Viruses may also be grouped by their nucleic acid or by the shape of the capsid."
                }
            ]
        },
        {
            id: "funalgb30",
            name: "Fungi, Lichens & Algae",
            subject: "Botany",
            accent: "emerald",
            blurb: "Q125–150 · easy recall · the four classes of fungi, yeast and Mucor, lichens and their types; general characters of algae, the three classes and Spirogyra.",
            questions: [
                {
                    id: "d30b125",
                    text: "The umbrella-shaped, spore-bearing fruiting body of a mushroom is called the:",
                    options: [
                        { key: "a", text: "Basidiocarp" },
                        { key: "b", text: "Ascocarp" },
                        { key: "c", text: "Sporangium" },
                        { key: "d", text: "Conidiophore" }
                    ],
                    answer: "a",
                    explanation: "The visible mushroom is the <strong>basidiocarp</strong>, the fruiting body of a basidiomycete; its gills bear the basidia. The corresponding structure in an ascomycete is the <em>ascocarp</em>."
                },
                {
                    id: "d30b126",
                    text: "A fungus that lives on a living host and draws its food from it is described as:",
                    options: [
                        { key: "a", text: "Saprophytic" },
                        { key: "b", text: "Parasitic" },
                        { key: "c", text: "Autotrophic" },
                        { key: "d", text: "Symbiotic" }
                    ],
                    answer: "b",
                    explanation: "A <strong>parasitic</strong> fungus obtains nourishment from a living host, often through special absorbing branches called haustoria, and usually harms it. A saprophyte lives on dead remains and a symbiont in mutual benefit, as in a lichen or a mycorrhiza."
                },
                {
                    id: "d30b127",
                    text: "Septate mycelium is found in:",
                    options: [
                        { key: "a", text: "Phycomycetes only" },
                        { key: "b", text: "Phycomycetes and Ascomycetes only" },
                        { key: "c", text: "None of the classes of fungi" },
                        { key: "d", text: "Ascomycetes, Basidiomycetes and Deuteromycetes" }
                    ],
                    answer: "d",
                    explanation: "Cross walls are present in the hyphae of the three higher classes — <strong>Ascomycetes, Basidiomycetes and Deuteromycetes</strong>. Only the Phycomycetes retain the primitive aseptate, coenocytic condition."
                },
                {
                    id: "d30b128",
                    text: "The thick-walled resting spore formed after the fusion of two gametangia in <em>Mucor</em> is the:",
                    options: [
                        { key: "a", text: "Zygospore" },
                        { key: "b", text: "Ascospore" },
                        { key: "c", text: "Basidiospore" },
                        { key: "d", text: "Conidium" }
                    ],
                    answer: "a",
                    explanation: "Two gametangia of opposite strains fuse and the product develops a thick warty wall to become the <strong>zygospore</strong>, which rests before germinating. Its formation is the reason the Phycomycetes are also called the zygomycete group."
                },
                {
                    id: "d30b129",
                    text: "The spores produced inside the sporangium of <em>Mucor</em> are:",
                    options: [
                        { key: "a", text: "Motile zoospores with two flagella" },
                        { key: "b", text: "Non-motile aplanospores" },
                        { key: "c", text: "Ascospores formed in eights" },
                        { key: "d", text: "Basidiospores borne on sterigmata" }
                    ],
                    answer: "b",
                    explanation: "<em>Mucor</em> is a terrestrial mould, so its asexual spores are non-motile <strong>aplanospores</strong> scattered by wind when the sporangial wall breaks. Motile zoospores occur only in the aquatic members of the class."
                },
                {
                    id: "d30b130",
                    text: "Yeast differs from most other fungi in that its body is:",
                    options: [
                        { key: "a", text: "A branched septate mycelium" },
                        { key: "b", text: "A single cell" },
                        { key: "c", text: "An aseptate coenocytic tube" },
                        { key: "d", text: "A large fleshy fruiting body" }
                    ],
                    answer: "b",
                    explanation: "Yeast (<em>Saccharomyces</em>) is a <strong>unicellular</strong> fungus that has secondarily lost the mycelium. Buds that fail to separate may form a short chain called a pseudomycelium, but there is no true hyphal body."
                },
                {
                    id: "d30b131",
                    text: "<em>Neurospora</em>, an ascomycete, is well known because it has been widely used in the study of:",
                    options: [
                        { key: "a", text: "The fermentation of milk into curd" },
                        { key: "b", text: "The manufacture of antibiotics" },
                        { key: "c", text: "Nitrogen fixation in the soil" },
                        { key: "d", text: "Genetics and biochemical mutations" }
                    ],
                    answer: "d",
                    explanation: "The pink bread mould <strong><em>Neurospora crassa</em></strong> has a short life cycle and its spores are easy to score, so Beadle and Tatum used it to establish the one gene–one enzyme hypothesis. It is often called the <em>Drosophila</em> of the plant kingdom."
                },
                {
                    id: "d30b132",
                    text: "Clamp connections, small bypass loops on the hyphae, are characteristic of the:",
                    options: [
                        { key: "a", text: "Phycomycetes" },
                        { key: "b", text: "Ascomycetes" },
                        { key: "c", text: "Basidiomycetes" },
                        { key: "d", text: "Deuteromycetes" }
                    ],
                    answer: "c",
                    explanation: "A <strong>clamp connection</strong> ensures that each cell of the long-lived dikaryotic mycelium of the <strong>Basidiomycetes</strong> keeps one nucleus of each kind after division. Their presence in a section is a quick way of recognising the class."
                },
                {
                    id: "d30b133",
                    text: "Which of the following fungi belongs to the Deuteromycetes?",
                    options: [
                        { key: "a", text: "<em>Alternaria</em>" },
                        { key: "b", text: "<em>Mucor</em>" },
                        { key: "c", text: "<em>Agaricus</em>" },
                        { key: "d", text: "<em>Penicillium</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Alternaria</em></strong>, <em>Colletotrichum</em> and <em>Trichoderma</em> are fungi imperfecti, known only in the asexual conidial stage. <em>Mucor</em> is a phycomycete, <em>Penicillium</em> an ascomycete and <em>Agaricus</em> a basidiomycete."
                },
                {
                    id: "d30b134",
                    text: "Late blight of potato, the disease that caused the Irish famine, is produced by the fungus:",
                    options: [
                        { key: "a", text: "<em>Phytophthora infestans</em>" },
                        { key: "b", text: "<em>Puccinia graminis</em>" },
                        { key: "c", text: "<em>Saccharomyces cerevisiae</em>" },
                        { key: "d", text: "<em>Aspergillus niger</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Phytophthora infestans</em></strong> is a phycomycete that destroys the leaves and tubers of potato; its epidemic in the 1840s caused the Irish potato famine. <em>Puccinia</em> causes wheat rust."
                },
                {
                    id: "d30b135",
                    text: "In a lichen, the algal partner and the fungal partner are called respectively the:",
                    options: [
                        { key: "a", text: "Mycobiont and phycobiont" },
                        { key: "b", text: "Phycobiont and mycobiont" },
                        { key: "c", text: "Symbiont and parasite" },
                        { key: "d", text: "Host and vector" }
                    ],
                    answer: "b",
                    explanation: "The <strong>phycobiont</strong> is the alga (a green alga such as <em>Trebouxia</em> or a cyanobacterium such as <em>Nostoc</em>) and the <strong>mycobiont</strong> is the fungus, usually an ascomycete. The fungus makes up the bulk of the thallus."
                },
                {
                    id: "d30b136",
                    text: "Lichens are classified into crustose, foliose and fruticose types on the basis of their:",
                    options: [
                        { key: "a", text: "Method of sexual reproduction" },
                        { key: "b", text: "Colour when seen in sunlight" },
                        { key: "c", text: "External form and mode of attachment" },
                        { key: "d", text: "Kind of alga they contain" }
                    ],
                    answer: "c",
                    explanation: "The three groups are distinguished by <strong>growth form</strong>: <em>crustose</em> lichens form an inseparable crust, <em>foliose</em> lichens are flat and leafy and held on by rhizines, and <em>fruticose</em> lichens are shrubby, branched or hanging."
                },
                {
                    id: "d30b137",
                    text: "Reindeer moss, an important food of arctic animals, is actually a:",
                    options: [
                        { key: "a", text: "Moss" },
                        { key: "b", text: "Fern" },
                        { key: "c", text: "Green alga" },
                        { key: "d", text: "Lichen" }
                    ],
                    answer: "d",
                    explanation: "Despite its name, reindeer moss (<em>Cladonia</em>) is a fruticose <strong>lichen</strong> and is the chief winter food of reindeer and caribou in the tundra. Lichens also yield dyes, perfumes and some antibiotics."
                },
                {
                    id: "d30b138",
                    text: "Most algae are found in:",
                    options: [
                        { key: "a", text: "Dry desert soil" },
                        { key: "b", text: "Aquatic habitats, fresh or marine" },
                        { key: "c", text: "The intestines of animals" },
                        { key: "d", text: "Deep inside solid rocks" }
                    ],
                    answer: "b",
                    explanation: "Algae are predominantly <strong>aquatic</strong>, in both fresh and salt water, though some grow on moist soil, on wood and on bark, and some live symbiotically in lichens. They are simple autotrophic thallophytes."
                },
                {
                    id: "d30b139",
                    text: "The plant body of an alga is called a thallus because it:",
                    options: [
                        { key: "a", text: "Is always made of a single cell" },
                        { key: "b", text: "Contains a well-developed vascular system" },
                        { key: "c", text: "Bears flowers but no fruits" },
                        { key: "d", text: "Is not differentiated into root, stem and leaf" }
                    ],
                    answer: "d",
                    explanation: "A <strong>thallus</strong> shows no true root, stem or leaf and no vascular tissue. Algal bodies range from a single cell through colonies and filaments to the large parenchymatous forms of the kelps."
                },
                {
                    id: "d30b140",
                    text: "Among the following algae, the one belonging to the Chlorophyceae is:",
                    options: [
                        { key: "a", text: "<em>Volvox</em>" },
                        { key: "b", text: "<em>Fucus</em>" },
                        { key: "c", text: "<em>Polysiphonia</em>" },
                        { key: "d", text: "<em>Sargassum</em>" }
                    ],
                    answer: "a",
                    explanation: "<strong><em>Volvox</em></strong> is a colonial member of the Chlorophyceae, like <em>Chlamydomonas</em>, <em>Ulothrix</em>, <em>Spirogyra</em> and <em>Chara</em>. <em>Fucus</em> and <em>Sargassum</em> are brown algae and <em>Polysiphonia</em> is a red alga."
                },
                {
                    id: "d30b141",
                    text: "Red algae and brown algae are found chiefly in:",
                    options: [
                        { key: "a", text: "Freshwater ponds and ditches" },
                        { key: "b", text: "Marine (sea) water" },
                        { key: "c", text: "Hot springs and salt pans" },
                        { key: "d", text: "Moist garden soil" }
                    ],
                    answer: "b",
                    explanation: "The great majority of Rhodophyceae and Phaeophyceae are <strong>marine</strong>, whereas most Chlorophyceae live in fresh water. Red algae in particular grow at greater depths than any other alga."
                },
                {
                    id: "d30b142",
                    text: "The holdfast of a large brown alga such as <em>Laminaria</em> serves to:",
                    options: [
                        { key: "a", text: "Absorb water and mineral salts from the sea" },
                        { key: "b", text: "Fix the thallus firmly to the rocky substratum" },
                        { key: "c", text: "Carry out most of the photosynthesis" },
                        { key: "d", text: "Store the reserve food of the plant" }
                    ],
                    answer: "b",
                    explanation: "The kelp body has a <strong>holdfast</strong> that merely <em>anchors</em> it against the waves, a stalk-like stipe and a flat blade in which most photosynthesis occurs. Unlike a root, the holdfast does not absorb — the whole surface takes up dissolved salts."
                },
                {
                    id: "d30b143",
                    text: "The filament of <em>Spirogyra</em> is described as unbranched, and its cells are:",
                    options: [
                        { key: "a", text: "Cylindrical and placed end to end" },
                        { key: "b", text: "Spherical and arranged in a hollow ball" },
                        { key: "c", text: "Flat and joined in a broad sheet" },
                        { key: "d", text: "Irregular and scattered in mucilage" }
                    ],
                    answer: "a",
                    explanation: "<em>Spirogyra</em> is a simple <strong>unbranched filament of identical cylindrical cells</strong> joined end to end, with no differentiation into base and apex. A hollow ball of cells describes <em>Volvox</em>."
                },
                {
                    id: "d30b144",
                    text: "<em>Spirogyra</em> is commonly found growing in:",
                    options: [
                        { key: "a", text: "Dry desert sand" },
                        { key: "b", text: "Deep sea water" },
                        { key: "c", text: "Hot sulphur springs" },
                        { key: "d", text: "Freshwater ponds and ditches" }
                    ],
                    answer: "d",
                    explanation: "<em>Spirogyra</em> forms free-floating green masses in still or slow-moving <strong>fresh water</strong> — ponds, ditches and tanks — especially in the cooler months. Most green algae are freshwater forms."
                },
                {
                    id: "d30b145",
                    text: "In scalariform conjugation of <em>Spirogyra</em>, the conjugation tubes give the two filaments the appearance of a:",
                    options: [
                        { key: "a", text: "Ladder" },
                        { key: "b", text: "Spiral spring" },
                        { key: "c", text: "Branched tree" },
                        { key: "d", text: "Hollow sphere" }
                    ],
                    answer: "a",
                    explanation: "Two filaments lie side by side and a tube joins each pair of opposite cells, so the whole arrangement looks like a <strong>ladder</strong> — <em>scala</em> is Latin for ladder. When the tube joins two neighbouring cells of one filament it is called lateral conjugation."
                },
                {
                    id: "d30b146",
                    text: "The zygospore of <em>Spirogyra</em> is formed inside:",
                    options: [
                        { key: "a", text: "The conjugation tube itself" },
                        { key: "b", text: "The surrounding pond water" },
                        { key: "c", text: "A special sporangium on the filament" },
                        { key: "d", text: "The receiving (female) cell" }
                    ],
                    answer: "d",
                    explanation: "The contents of the donor cell creep through the tube and fuse with those of the opposite cell, so the thick-walled <strong>zygospore develops within the receiving cell</strong>. It is set free when the old filament decays."
                },
                {
                    id: "d30b147",
                    text: "Marine algae are ecologically important chiefly because they:",
                    options: [
                        { key: "a", text: "Are the main producers and release much of the oxygen" },
                        { key: "b", text: "Decompose the dead bodies of sea animals" },
                        { key: "c", text: "Fix nitrogen dissolved in the sea water" },
                        { key: "d", text: "Provide shelter to fish during the breeding season" }
                    ],
                    answer: "a",
                    explanation: "Algae are the <strong>primary producers</strong> of almost every aquatic food chain and carry out roughly half of all the photosynthesis on earth, so they supply a large part of the atmospheric oxygen."
                },
                {
                    id: "d30b148",
                    text: "In algae, sexual reproduction in which the two fusing gametes are similar in size and shape is called:",
                    options: [
                        { key: "a", text: "Apogamy" },
                        { key: "b", text: "Anisogamy" },
                        { key: "c", text: "Oogamy" },
                        { key: "d", text: "Isogamy" }
                    ],
                    answer: "d",
                    explanation: "In <strong>isogamy</strong> the gametes are alike, as in <em>Ulothrix</em> and <em>Spirogyra</em>. In anisogamy they differ in size though both are motile, and in oogamy a large non-motile egg is fertilised by a small motile sperm."
                },
                {
                    id: "d30b149",
                    text: "The cell wall of a red alga differs from that of a green alga in containing, besides cellulose, large amounts of:",
                    options: [
                        { key: "a", text: "Chitin, the substance of the fungal wall" },
                        { key: "b", text: "Lignin, the substance that makes wood hard" },
                        { key: "c", text: "Mucilaginous phycocolloids such as agar" },
                        { key: "d", text: "Peptidoglycan, the substance of bacterial walls" }
                    ],
                    answer: "c",
                    explanation: "Red algal walls carry gelatinous <strong>phycocolloids</strong> — agar, carrageenan and funori — which is why they are the commercial source of agar. Brown algae add algin to their walls in the same way."
                },
                {
                    id: "d30b150",
                    text: "Which set correctly gives the pigment, reserve food and habitat of the Chlorophyceae?",
                    options: [
                        { key: "a", text: "Phycoerythrin; floridean starch; deep sea" },
                        { key: "b", text: "Fucoxanthin; laminarin; mostly marine" },
                        { key: "c", text: "Chlorophyll a and b; starch; mostly fresh water" },
                        { key: "d", text: "Phycocyanin; cyanophycean starch; hot springs" }
                    ],
                    answer: "c",
                    explanation: "Green algae have <strong>chlorophyll a and b</strong>, store true <strong>starch</strong> and live mostly in <strong>fresh water</strong>. The second set describes brown algae, the third red algae and the fourth the cyanobacteria."
                }
            ]
        }
    ]
};

/* Day 30 covers one unit of each subject in the official MEC syllabus (2020, revised 2026):
   Physics unit 3 "Waves and optics" (weight 8) — its interference, diffraction and
   polarization sub-topics — and Zoology unit 4 "Study of selected animals" (weight 6). */
const DAY30_SYLLABUS = [
    { subject: "Physics", accent: "blue", topics: [
        { topic: "3. Waves and Optics", weight: 8, subs: [
            { name: "Interference: Concept, Conditions and Applications", ids: ["d30p1", "d30p2", "d30p3", "d30p4", "d30p5", "d30p6", "d30p17", "d30p18", "d30p19"] },
            { name: "Young's Double Slit Experiment", ids: ["d30p7", "d30p8", "d30p9", "d30p10", "d30p11", "d30p12", "d30p13", "d30p14", "d30p15", "d30p16", "d30p20", "d30p21", "d30p22", "d30p23", "d30p24"] },
            { name: "Diffraction: Concept, Conditions and Single Slit", ids: ["d30p25", "d30p26", "d30p27", "d30p28", "d30p29", "d30p30", "d30p31", "d30p32", "d30p33"] },
            { name: "Diffraction Grating", ids: ["d30p34", "d30p35", "d30p36", "d30p37"] },
            { name: "Resolving Power of Optical Instruments", ids: ["d30p38", "d30p39", "d30p40", "d30p41"] },
            { name: "Polarisation and Brewster's Law", ids: ["d30p42", "d30p43", "d30p44", "d30p45", "d30p46", "d30p47", "d30p48"] }
        ] }
    ] },
    { subject: "Zoology", accent: "rose", topics: [
        { topic: "4. Study of Selected Animals", weight: 6, subs: [
            { name: "Plasmodium: Habitat, Structure, Life Cycle & Malaria", ids: ["d30z49", "d30z50", "d30z51", "d30z52", "d30z53", "d30z54", "d30z55", "d30z56", "d30z57", "d30z58", "d30z59", "d30z60", "d30z61", "d30z62", "d30z63", "d30z64", "d30z65"] },
            { name: "Earthworm (Pheretima): Morphology, Body Systems & Economic Importance", ids: ["d30z66", "d30z67", "d30z68", "d30z69", "d30z70", "d30z71", "d30z72", "d30z73", "d30z74", "d30z75", "d30z76", "d30z77", "d30z78", "d30z79", "d30z80", "d30z81", "d30z82", "d30z83"] },
            { name: "Frog (Rana): Morphology, Body Systems & Physiology", ids: ["d30z84", "d30z85", "d30z86", "d30z87", "d30z88", "d30z89", "d30z90", "d30z91", "d30z92", "d30z93", "d30z94", "d30z95", "d30z96", "d30z97", "d30z98", "d30z99", "d30z100"] }
        ] }
    ] },
    { subject: "Botany", accent: "emerald", topics: [
        { topic: "2. Biodiversity", weight: 9, subs: [
            { name: "Introduction: 2-Kingdom, Hierarchy & Nomenclature, 5-Kingdom, 3-Domain", ids: ["d30b101", "d30b102", "d30b103", "d30b104", "d30b105", "d30b106", "d30b107", "d30b108", "d30b109", "d30b110"] },
            { name: "Monera & Virus", ids: ["d30b111", "d30b112", "d30b113", "d30b114", "d30b115", "d30b116", "d30b117", "d30b118", "d30b119", "d30b120", "d30b121", "d30b122", "d30b123", "d30b124"] },
            { name: "Fungi & Lichens", ids: ["d30b125", "d30b126", "d30b127", "d30b128", "d30b129", "d30b130", "d30b131", "d30b132", "d30b133", "d30b134", "d30b135", "d30b136", "d30b137"] },
            { name: "Algae", ids: ["d30b138", "d30b139", "d30b140", "d30b141", "d30b142", "d30b143", "d30b144", "d30b145", "d30b146", "d30b147", "d30b148", "d30b149", "d30b150"] }
        ] }
    ] }
];
DAY30.syllabus = DAY30_SYLLABUS;
