window.CEE_DIGITAL_TOPICS = window.CEE_DIGITAL_TOPICS || {};
window.CEE_DIGITAL_TOPICS["rotation"] = {
  id: "rotation",
  subject: "Physics",
  title: "Rotational motion",
  sections: [
    {
      id: "inertia-and-gyration",
      title: "Moment of inertia, radius of gyration and axes",
      sources: [{ document: "quick-revision", page: 12 }, { document: "quick-revision", page: 13 }],
      html: "<p>For a specified axis, moment of inertia is $I=\\int r_\\perp^2\\,dm$, the sum of each mass element times the square of its perpendicular distance from that axis. Its SI unit is $\\mathrm{kg\\,m^2}$. Radius of gyration is $k=\\sqrt{\\frac{I}{M}}$, so $I=Mk^2$. The source denotes this radius by capital $K$; lowercase $k$ is used here to distinguish it from kinetic energy.</p><p>Every following table assumes a uniform body. $M$ is total mass, $L$ is length, $B$ is breadth, $R$ is outer radius and $r$ is an annulus's inner radius. C.G. in the source means centre of gravity, coinciding with the centre of mass in a uniform gravitational field. 'Geometric axis' of a cylinder is its longitudinal symmetry axis.</p><p>Two working relations check the table: parallel axes satisfy $I=I_{\\mathrm{CM}}+Md^2$, where $d$ is their separation; for a plane lamina, mutually perpendicular in-plane axes through the same point satisfy $I_z=I_x+I_y$, with $z$ normal to the plane. The perpendicular-axis theorem must not be applied directly to a three-dimensional solid.</p><p><strong>Source clarification:</strong> radius of gyration is independent of an overall change of mass only when shape, dimensions, relative mass distribution and axis are unchanged. Multiplying every mass element by the same factor multiplies both $I$ and $M$ by that factor. Redistributing the same total mass or moving the axis can change $k$.</p>"
    },
    {
      id: "rods-and-laminae",
      title: "Uniform rod and rectangular lamina",
      sources: [{ document: "quick-revision", page: 12 }],
      html: "<p>For a slender uniform rod of length $L$, the two perpendicular axes printed in the source give:</p><table><thead><tr><th>Axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Through the centre, perpendicular to the length</td><td>$\\frac{ML^2}{12}$</td><td>$\\frac{L}{2\\sqrt{3}}$</td></tr><tr><td>Through an end, perpendicular to the length</td><td>$\\frac{ML^2}{3}$</td><td>$\\frac{L}{\\sqrt{3}}$</td></tr></tbody></table><p>The end axis is parallel to the central axis and separated by $\\frac{L}{2}$: $I_{\\mathrm{end}}=\\frac{ML^2}{12}+M\\left(\\frac{L}{2}\\right)^2=\\frac{ML^2}{3}$. Moving from the centre to an end multiplies $I$ by four and $k$ by two.</p><p>For a uniform rectangular lamina of sides $L$ and $B$, about the axis through the centre perpendicular to its plane, $I=\\frac{M(L^2+B^2)}{12}$ and $k=\\sqrt{\\frac{L^2+B^2}{12}}$. Both side lengths enter because the perpendicular distances of mass elements vary in two in-plane directions. These are thin-lamina results; thickness is neglected.</p>"
    },
    {
      id: "ring-axes",
      title: "Ring or circular loop: all four axes",
      sources: [{ document: "quick-revision", page: 12 }],
      html: "<p>For a thin uniform ring of radius $R$, it is essential to distinguish an axis perpendicular to the plane at the rim from a tangent lying in the plane. The source's 'through end' means through a point on the circumference; a complete ring has no end.</p><table><thead><tr><th>Axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Through the centre, normal to the plane</td><td>$MR^2$</td><td>$R$</td></tr><tr><td>Through the rim, normal to the plane</td><td>$2MR^2$</td><td>$\\sqrt{2}R$</td></tr><tr><td>Along a diameter in the plane</td><td>$\\frac{MR^2}{2}$</td><td>$\\frac{R}{\\sqrt{2}}$</td></tr><tr><td>Along a tangent in the plane</td><td>$\\frac{3MR^2}{2}$</td><td>$\\sqrt{\\frac{3}{2}}R$</td></tr></tbody></table><p>The two central diameters are equivalent by symmetry, so each has half the normal-axis inertia. Shifting the normal axis by $R$ adds $MR^2$ to $MR^2$; shifting a diameter to an in-plane tangent adds $MR^2$ to $\\frac{MR^2}{2}$. This explains why the two rim-related answers differ.</p>"
    },
    {
      id: "discs-and-annuli",
      title: "Solid circular disc and hollow disc",
      sources: [{ document: "quick-revision", page: 12 }],
      html: "<p>A uniform circular disc has its mass spread throughout the area, unlike a thin ring with mass concentrated at the circumference.</p><table><thead><tr><th>Disc axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Through the centre, normal to the plane</td><td>$\\frac{MR^2}{2}$</td><td>$\\frac{R}{\\sqrt{2}}$</td></tr><tr><td>Along a diameter in the plane</td><td>$\\frac{MR^2}{4}$</td><td>$\\frac{R}{2}$</td></tr></tbody></table><p>The source's hollow disc is a uniform annular lamina with outer radius $R$ and inner radius $r$.</p><table><thead><tr><th>Annulus axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Through the centre, normal to the plane</td><td>$\\frac{M(R^2+r^2)}{2}$</td><td>$\\sqrt{\\frac{R^2+r^2}{2}}$</td></tr><tr><td>Along a diameter in the plane</td><td>$\\frac{M(R^2+r^2)}{4}$</td><td>$\\frac{\\sqrt{R^2+r^2}}{2}$</td></tr></tbody></table><p>The annulus's two radius-of-gyration cells are blank in the printed source. The displayed $k$ values are derived additions using $k=\\sqrt{\\frac{I}{M}}$, not recovered text. In the limit $r=0$, the annulus becomes a solid disc. As its material becomes confined to a thin circumference, $r$ approaches $R$ and the normal-axis result approaches $MR^2$.</p>"
    },
    {
      id: "cylinder-axes",
      title: "Solid cylinder and thin hollow cylinder",
      sources: [{ document: "quick-revision", page: 12 }],
      html: "<p>A uniform solid cylinder has length $L$ and radius $R$.</p><table><thead><tr><th>Solid-cylinder axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Longitudinal symmetry axis</td><td>$\\frac{MR^2}{2}$</td><td>$\\frac{R}{\\sqrt{2}}$</td></tr><tr><td>Through the centre, perpendicular to the symmetry axis</td><td>$M\\left(\\frac{L^2}{12}+\\frac{R^2}{4}\\right)$</td><td>$\\sqrt{\\frac{L^2}{12}+\\frac{R^2}{4}}$</td></tr></tbody></table><p>The hollow-cylinder rows in the source describe a thin cylindrical shell, with negligible wall thickness, mass on the curved surface and no end caps. A thick-walled tube or a shell including massive end caps needs a different mass distribution.</p><table><thead><tr><th>Thin-shell axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Longitudinal symmetry axis</td><td>$MR^2$</td><td>$R$</td></tr><tr><td>Through the centre, perpendicular to the symmetry axis</td><td>$M\\left(\\frac{L^2}{12}+\\frac{R^2}{2}\\right)$</td><td>$\\sqrt{\\frac{L^2}{12}+\\frac{R^2}{2}}$</td></tr></tbody></table><p>The two transverse-axis $k$ cells are blank in the source; their values above are explicitly derived from the printed inertias. Length affects the transverse inertia but not the inertia about the longitudinal axis when $M$ and $R$ are fixed.</p>"
    },
    {
      id: "sphere-axes",
      title: "Solid sphere and hollow spherical shell",
      sources: [{ document: "quick-revision", page: 13 }],
      html: "<p>For a uniform solid sphere, every diameter is an equivalent central axis. A tangent axis is parallel to a diameter and a distance $R$ from the centre.</p><table><thead><tr><th>Solid-sphere axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Any diameter</td><td>$\\frac{2MR^2}{5}$</td><td>$\\sqrt{\\frac{2}{5}}R$</td></tr><tr><td>Any tangent</td><td>$\\frac{7MR^2}{5}$</td><td>$\\sqrt{\\frac{7}{5}}R$</td></tr></tbody></table><p>The source's hollow sphere means a uniform thin spherical shell.</p><table><thead><tr><th>Thin spherical-shell axis</th><th>$I$</th><th>$k$</th></tr></thead><tbody><tr><td>Any diameter</td><td>$\\frac{2MR^2}{3}$</td><td>$\\sqrt{\\frac{2}{3}}R$</td></tr><tr><td>Any tangent</td><td>$\\frac{5MR^2}{3}$</td><td>$\\sqrt{\\frac{5}{3}}R$</td></tr></tbody></table><p>In both cases the tangent result is the diameter result plus $MR^2$. A hollow sphere with a thick wall is not represented by the thin-shell coefficients. For the same mass and outer radius, concentrating material on the surface gives a larger diameter-axis inertia than filling the interior uniformly.</p>"
    },
    {
      id: "egg-and-inertia-comparisons",
      title: "Egg comparison, spokes and the minimum-inertia claim",
      sources: [{ document: "quick-revision", page: 13 }],
      html: "<p>The 'M.I. of Egg' passage contrasts a boiled egg with a raw egg, says the raw egg takes more time, and attributes this to a larger moment of inertia. The first bullet contains a partly unclear Nepali action word after 'egg' and 'quickly'; the operation and timing protocol are not specified. These limits are recorded in page coverage rather than assigned a guessed experimental result.</p><p><strong>Source correction:</strong> a raw egg contains mobile liquid and is not generally a single rigid body during a spin or rolling experiment. Internal relative motion and viscous dissipation change its response. An observed difference in spin or travel time alone does not establish a universal inequality between its geometrical moment of inertia and that of a boiled egg. For equal spatial mass distributions, $\\int r_\\perp^2\\,dm$ is the same; a difference in dynamics can arise from how the liquid couples to the shell. Do not use the source's raw-versus-boiled time statement as an unconditional scored fact.</p><p>The source says spokes can increase moment of inertia. Adding massive spokes to a wheel while retaining its original rim does add positive inertia. For example, an ideal slender radial spoke of mass $m_s$ and length $R$ contributes $\\frac{m_sR^2}{3}$ about the hub. But at fixed total mass, moving material from a rim into spokes usually decreases inertia. Both mass and its distance from the axis must be considered.</p><p><strong>Source correction:</strong> 'moment of inertia about a diagonal is minimum' is not a universal result. For a rectangular lamina with $L&gt;B$, the minimum among centred in-plane axes is the axis parallel to the longer side, with $I=\\frac{MB^2}{12}$. An in-plane diagonal instead gives $I_{\\mathrm{diag}}=\\frac{ML^2B^2}{6(L^2+B^2)}$, which is larger. For a square, all centred in-plane axes have the same inertia, so a diagonal is not a unique minimum. The body and the set of axes being compared must be specified.</p>"
    },
    {
      id: "centre-of-mass-and-torque",
      title: "Centre of mass, couples, flywheels and gymnasts",
      sources: [{ document: "quick-revision", page: 13 }],
      html: "<p>The centre of mass is determined by masses and positions: $\\mathbf{r}_{\\mathrm{CM}}=\\frac{\\sum_i m_i\\mathbf{r}_i}{\\sum_i m_i}$. Forces do not appear explicitly in this definition. They can change the positions with time, so 'independent of force' does not mean that the centre of mass cannot move. For a closed constant-mass system, $M\\mathbf{a}_{\\mathrm{CM}}=\\sum\\mathbf{F}_{\\mathrm{ext}}$. A nonzero resultant external force changes its velocity; internal forces cannot change the total linear momentum of an isolated system.</p><p>A couple consists of equal, opposite, parallel forces whose lines of action are separated by a perpendicular distance $d$. Its resultant force is zero and its torque magnitude is $\\tau=Fd$. It changes rotation without accelerating the centre of mass. <strong>Source clarification:</strong> 'purely rotational motion' means no translation is generated by the couple itself; pre-existing centre-of-mass translation can continue. For fixed-axis rotation with constant inertia, $\\tau_{\\mathrm{net}}=I\\alpha$.</p><p>A flywheel stores rotational kinetic energy $E_{\\mathrm{rot}}=\\frac{1}{2}I\\omega^2$. Large inertia makes its speed fluctuate less under changing torque. <strong>Source clarification:</strong> a flywheel helps maintain approximately uniform speed; its speed is strictly constant only when net torque is zero, not merely because it is called a flywheel.</p><p>A gymnast or skater bringing the arms closer to the spin axis reduces moment of inertia. When external torque about that axis is negligible, $I_1\\omega_1=I_2\\omega_2$, so angular speed increases. Extending the arms has the opposite effect. The source's arms-down example relies on bringing mass closer to the actual rotation axis, not on 'down' as a direction by itself. Rotational kinetic energy need not remain constant during the motion because muscles can do work.</p>"
    },
    {
      id: "rolling-motion",
      title: "Rolling without slipping: energy, acceleration and speed",
      sources: [{ document: "quick-revision", page: 13 }],
      html: "<p>For a rigid body rolling without slipping on a stationary surface, centre-of-mass speed and angular speed satisfy $v=R\\omega$. Its kinetic energy includes translation and rotation: $E_{\\mathrm{kin}}=\\frac{1}{2}Mv^2+\\frac{1}{2}I_{\\mathrm{CM}}\\omega^2$. With $I_{\\mathrm{CM}}=Mk^2$, the source formula becomes $E_{\\mathrm{kin}}=\\frac{1}{2}Mv^2\\left(1+\\frac{k^2}{R^2}\\right)$. <strong>Source clarification:</strong> this is total kinetic energy, not kinetic plus gravitational potential energy.</p><p>For a body released from rest on a fixed incline of angle $\\theta$, with enough static friction for pure rolling and negligible rolling resistance, $a_{\\mathrm{CM}}=\\frac{g\\sin\\theta}{1+\\frac{k^2}{R^2}}$. After a vertical descent $h$, energy conservation gives $Mgh=E_{\\mathrm{kin}}$ and $v=\\sqrt{\\frac{2gh}{1+\\frac{k^2}{R^2}}}$. The source uses $u$ for this speed; it is the speed after descending, not the initial speed. On the same incline, smaller $\\frac{k^2}{R^2}$ gives larger acceleration. A uniform solid sphere has this ratio $\\frac{2}{5}$, a solid cylinder $\\frac{1}{2}$ and a thin hoop $1$.</p><p>For ideal rigid rolling on a fixed rigid surface, the instantaneous point of contact is at rest, so static friction does no work on the body at that contact. It may nevertheless provide the torque needed to build rotation. Real deformation and rolling resistance can dissipate energy; a moving support requires separate work accounting.</p><p><strong>Source correction:</strong> a body can roll in the absence of friction if it already has $v=R\\omega$ on a horizontal surface and no force or torque changes that relation. Friction is ordinarily required to start pure rolling from rest down an incline because gravity acts through the centre and cannot supply the required spin torque. The source's unconditional statement that rolling is impossible without friction is therefore too strong.</p>"
    }
  ],
  pageCoverage: [
    {
      document: "quick-revision", page: 12, status: "transcribed",
      sectionIds: ["inertia-and-gyration", "rods-and-laminae", "ring-axes", "discs-and-annuli", "cylinder-axes"],
      unresolved: []
    },
    {
      document: "quick-revision", page: 13, status: "partial",
      sectionIds: ["inertia-and-gyration", "sphere-axes", "egg-and-inertia-comparisons", "centre-of-mass-and-torque", "rolling-motion"],
      unresolved: [
        "Below the spherical-body table, 'M.I. of Egg', first bullet: the Nepali action word after the boiled-egg/quickly wording cannot be confidently distinguished in the supplied image. The following claim 'raw egg has more moment of inertia' and second bullet 'Raw Egg takes more time' are legible and retained with a scientific correction; the source supplies no unambiguous spinning, stopping, falling or rolling protocol for that time comparison."
      ]
    }
  ],
  questions: [
    {
      id: "note-rotation-001", text: "A body has mass $2.0\\,\\mathrm{kg}$ and moment of inertia $0.18\\,\\mathrm{kg\\,m^2}$ about a specified axis. What is its radius of gyration about that axis?",
      options: [{ key: "a", text: "$0.09\\,\\mathrm{m}$" }, { key: "b", text: "$0.18\\,\\mathrm{m}$" }, { key: "c", text: "$0.30\\,\\mathrm{m}$" }, { key: "d", text: "$0.60\\,\\mathrm{m}$" }],
      answer: "c", explanation: "Radius of gyration satisfies $I=Mk^2$. Thus $k=\\sqrt{\\frac{0.18}{2.0}}=\\sqrt{0.09}=0.30\\,\\mathrm{m}$. The ratio $\\frac{I}{M}$ is a squared length and must be square-rooted.",
      sectionId: "inertia-and-gyration", source: { document: "quick-revision", page: 12 }, cognitive: "application"
    },
    {
      id: "note-rotation-002", text: "For one slender uniform rod, how does the inertia about an end axis perpendicular to its length compare with that about the parallel central axis?",
      options: [{ key: "a", text: "The end-axis inertia is four times as large." }, { key: "b", text: "The end-axis inertia is twice as large." }, { key: "c", text: "The end-axis inertia is three times as large." }, { key: "d", text: "The end-axis inertia is unchanged." }],
      answer: "a", explanation: "The source values are $I_{\\mathrm{end}}=\\frac{ML^2}{3}$ and $I_{\\mathrm{CM}}=\\frac{ML^2}{12}$. Their ratio is $\\frac{\\frac{1}{3}}{\\frac{1}{12}}=4$. Equivalently, apply the parallel-axis theorem with separation $\\frac{L}{2}$.",
      sectionId: "rods-and-laminae", source: { document: "quick-revision", page: 12 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-003", text: "A uniform rectangular lamina has mass $6.0\\,\\mathrm{kg}$ and sides $0.80\\,\\mathrm{m}$ and $0.60\\,\\mathrm{m}$. Find its inertia about the central axis normal to its plane.",
      options: [{ key: "a", text: "$0.25\\,\\mathrm{kg\\,m^2}$" }, { key: "b", text: "$0.36\\,\\mathrm{kg\\,m^2}$" }, { key: "c", text: "$0.72\\,\\mathrm{kg\\,m^2}$" }, { key: "d", text: "$0.50\\,\\mathrm{kg\\,m^2}$" }],
      answer: "d", explanation: "Use $I=\\frac{M(L^2+B^2)}{12}$. The squared sides sum to $0.64+0.36=1.00\\,\\mathrm{m^2}$, giving $I=\\frac{6.0\\times1.00}{12}=0.50\\,\\mathrm{kg\\,m^2}$. A central in-plane axis would require a different formula.",
      sectionId: "rods-and-laminae", source: { document: "quick-revision", page: 12 }, cognitive: "application"
    },
    {
      id: "note-rotation-004", text: "A thin uniform ring of mass $M$ and radius $R$ rotates about an axis through its rim, perpendicular to its plane. What is its moment of inertia?",
      options: [{ key: "a", text: "$\\frac{3MR^2}{2}$" }, { key: "b", text: "$2MR^2$" }, { key: "c", text: "$MR^2$" }, { key: "d", text: "$\\frac{MR^2}{2}$" }],
      answer: "b", explanation: "The central normal-axis inertia is $MR^2$. The rim axis is parallel and a distance $R$ away, so $I=MR^2+MR^2=2MR^2$. The value $\\frac{3MR^2}{2}$ belongs to a tangent lying in the ring's plane.",
      sectionId: "ring-axes", source: { document: "quick-revision", page: 12 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-005", text: "What is the radius of gyration of a uniform thin disc of radius $R$ about an in-plane diameter?",
      options: [{ key: "a", text: "$\\frac{R}{2}$" }, { key: "b", text: "$\\frac{R}{\\sqrt{2}}$" }, { key: "c", text: "$R$" }, { key: "d", text: "$\\sqrt{2}R$" }],
      answer: "a", explanation: "About a diameter, a uniform disc has $I=\\frac{MR^2}{4}$. Therefore $k=\\sqrt{\\frac{I}{M}}=\\frac{R}{2}$. The value $\\frac{R}{\\sqrt{2}}$ applies to the central axis normal to the disc, not its diameter.",
      sectionId: "discs-and-annuli", source: { document: "quick-revision", page: 12 }, cognitive: "recall"
    },
    {
      id: "note-rotation-006", text: "A uniform annular plate has mass $4.0\\,\\mathrm{kg}$, outer radius $0.30\\,\\mathrm{m}$ and inner radius $0.10\\,\\mathrm{m}$. What is its inertia about its central normal axis?",
      options: [{ key: "a", text: "$0.10\\,\\mathrm{kg\\,m^2}$" }, { key: "b", text: "$0.16\\,\\mathrm{kg\\,m^2}$" }, { key: "c", text: "$0.36\\,\\mathrm{kg\\,m^2}$" }, { key: "d", text: "$0.20\\,\\mathrm{kg\\,m^2}$" }],
      answer: "d", explanation: "For an annulus, $I=\\frac{M(R^2+r^2)}{2}$. Thus $I=\\frac{4.0(0.09+0.01)}{2}=0.20\\,\\mathrm{kg\\,m^2}$. The squared radii add in the final mass-normalized formula; subtracting them would give an incorrect result.",
      sectionId: "discs-and-annuli", source: { document: "quick-revision", page: 12 }, cognitive: "application"
    },
    {
      id: "note-rotation-007", text: "For a uniform thin cylindrical shell with no end caps, which inertia belongs to a transverse axis through its centre?",
      options: [{ key: "a", text: "$M\\left(\\frac{L^2}{12}+\\frac{R^2}{4}\\right)$" }, { key: "b", text: "$M\\left(\\frac{L^2}{12}+\\frac{R^2}{2}\\right)$" }, { key: "c", text: "$M\\left(\\frac{L^2}{3}+\\frac{R^2}{2}\\right)$" }, { key: "d", text: "$M\\left(\\frac{L^2}{12}+R^2\\right)$" }],
      answer: "b", explanation: "The thin shell's transverse inertia is $M\\left(\\frac{L^2}{12}+\\frac{R^2}{2}\\right)$. The length contribution comes from the axial spread of mass, and the radial contribution is that of circular hoops about their diameters. Replacing $\\frac{R^2}{2}$ by $\\frac{R^2}{4}$ gives the solid-cylinder result.",
      sectionId: "cylinder-axes", source: { document: "quick-revision", page: 12 }, cognitive: "recall"
    },
    {
      id: "note-rotation-008", text: "A uniform solid cylinder has mass $3.0\\,\\mathrm{kg}$, length $0.80\\,\\mathrm{m}$ and radius $0.20\\,\\mathrm{m}$. What is its inertia about a central transverse axis?",
      options: [{ key: "a", text: "$0.06\\,\\mathrm{kg\\,m^2}$" }, { key: "b", text: "$0.12\\,\\mathrm{kg\\,m^2}$" }, { key: "c", text: "$0.19\\,\\mathrm{kg\\,m^2}$" }, { key: "d", text: "$0.28\\,\\mathrm{kg\\,m^2}$" }],
      answer: "c", explanation: "For this axis, $I=M\\left(\\frac{L^2}{12}+\\frac{R^2}{4}\\right)$. The two contributions are $\\frac{3.0\\times0.64}{12}=0.16$ and $\\frac{3.0\\times0.04}{4}=0.03$, both in $\\mathrm{kg\\,m^2}$. Their sum is $0.19\\,\\mathrm{kg\\,m^2}$.",
      sectionId: "cylinder-axes", source: { document: "quick-revision", page: 12 }, cognitive: "application"
    },
    {
      id: "note-rotation-009", text: "For a uniform solid sphere, what is the ratio of its inertia about a tangent to that about a parallel diameter?",
      options: [{ key: "a", text: "$\\frac{5}{2}$" }, { key: "b", text: "$\\frac{7}{5}$" }, { key: "c", text: "$\\frac{5}{3}$" }, { key: "d", text: "$\\frac{7}{2}$" }],
      answer: "d", explanation: "The tangent and diameter values are $\\frac{7MR^2}{5}$ and $\\frac{2MR^2}{5}$. Dividing them gives $\\frac{7}{2}$. The added parallel-axis term is $MR^2$, not a multiple of the original diameter inertia chosen without reference to the axis separation.",
      sectionId: "sphere-axes", source: { document: "quick-revision", page: 13 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-010", text: "A uniform thin spherical shell has radius $R$. Which radius of gyration belongs to an axis through its centre?",
      options: [{ key: "a", text: "$\\sqrt{\\frac{2}{5}}R$" }, { key: "b", text: "$\\sqrt{\\frac{2}{3}}R$" }, { key: "c", text: "$\\sqrt{\\frac{5}{3}}R$" }, { key: "d", text: "$\\sqrt{\\frac{7}{5}}R$" }],
      answer: "b", explanation: "The shell's diameter-axis inertia is $I=\\frac{2MR^2}{3}$. Applying $k=\\sqrt{\\frac{I}{M}}$ gives $k=\\sqrt{\\frac{2}{3}}R$. The coefficient $\\frac{2}{5}$ describes a solid sphere, while $\\frac{5}{3}$ describes a tangent to the shell.",
      sectionId: "sphere-axes", source: { document: "quick-revision", page: 13 }, cognitive: "recall"
    },
    {
      id: "note-rotation-011", text: "Every mass element of a body is tripled without changing the geometry or axis. What happens to its radius of gyration?",
      options: [{ key: "a", text: "It is multiplied by three." }, { key: "b", text: "It is multiplied by $\\sqrt{3}$." }, { key: "c", text: "It remains unchanged." }, { key: "d", text: "It is divided by three." }],
      answer: "c", explanation: "Both total mass and moment of inertia are multiplied by three. Hence $k'=\\sqrt{\\frac{3I}{3M}}=k$. This independence applies to proportional mass scaling; it does not apply to redistributing material relative to the axis.",
      sectionId: "inertia-and-gyration", source: { document: "quick-revision", page: 13 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-012", text: "A uniform rectangular lamina has length greater than breadth. Among axes in its plane through its centre, which has the smallest moment of inertia?",
      options: [{ key: "a", text: "The axis parallel to the longer side" }, { key: "b", text: "The axis parallel to the shorter side" }, { key: "c", text: "Either diagonal, and only the diagonals" }, { key: "d", text: "Every central axis has the same value" }],
      answer: "a", explanation: "An axis parallel to the longer side gives $I=\\frac{MB^2}{12}$, while the perpendicular in-plane axis gives $\\frac{ML^2}{12}$. With $L>B$, the former is smaller. Oblique axes interpolate between these principal values, so a diagonal is not the minimum for a nonsquare rectangle.",
      sectionId: "egg-and-inertia-comparisons", source: { document: "quick-revision", page: 13 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-013", text: "Why does observing a raw egg's less efficient spin not by itself prove that its geometrical moment of inertia exceeds that of a boiled egg?",
      options: [{ key: "a", text: "A liquid has no mass contribution to inertia." }, { key: "b", text: "Internal fluid motion and dissipation also affect the spin." }, { key: "c", text: "Boiling makes angular momentum independent of torque." }, { key: "d", text: "Geometrical inertia is determined only by angular speed." }],
      answer: "b", explanation: "Geometrical inertia is $\\int r_\\perp^2\\,dm$. A raw egg's contents can move relative to its shell and dissipate mechanical energy, so the shell's observed motion is not a measurement of this integral alone. The raw egg cannot automatically be treated as one rigid body.",
      sectionId: "egg-and-inertia-comparisons", source: { document: "quick-revision", page: 13 }, cognitive: "understanding"
    },
    {
      id: "note-rotation-014", text: "Two particles of masses $2.0\\,\\mathrm{kg}$ and $3.0\\,\\mathrm{kg}$ are at $x=0$ and $x=4.0\\,\\mathrm{m}$ respectively. Where is their centre of mass?",
      options: [{ key: "a", text: "$x=1.6\\,\\mathrm{m}$" }, { key: "b", text: "$x=2.0\\,\\mathrm{m}$" }, { key: "c", text: "$x=2.4\\,\\mathrm{m}$" }, { key: "d", text: "$x=3.2\\,\\mathrm{m}$" }],
      answer: "c", explanation: "The centre is the mass-weighted position: $x_{\\mathrm{CM}}=\\frac{2.0\\times0+3.0\\times4.0}{2.0+3.0}=\\frac{12}{5}=2.4\\,\\mathrm{m}$. It lies nearer the heavier particle. No force values are needed to determine its instantaneous position.",
      sectionId: "centre-of-mass-and-torque", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-015", text: "A gymnast spins at $2.0\\,\\mathrm{rad\\,s^{-1}}$ with inertia $6.0\\,\\mathrm{kg\\,m^2}$. Pulling the arms inward reduces inertia to $4.0\\,\\mathrm{kg\\,m^2}$. What is the new speed if external torque is negligible?",
      options: [{ key: "a", text: "$3.0\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "b", text: "$1.3\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "c", text: "$2.0\\,\\mathrm{rad\\,s^{-1}}$" }, { key: "d", text: "$4.5\\,\\mathrm{rad\\,s^{-1}}$" }],
      answer: "a", explanation: "Conserve angular momentum: $I_1\\omega_1=I_2\\omega_2$. Therefore $\\omega_2=\\frac{6.0\\times2.0}{4.0}=3.0\\,\\mathrm{rad\\,s^{-1}}$. Kinetic energy need not be conserved because the gymnast does internal work while changing the mass distribution.",
      sectionId: "centre-of-mass-and-torque", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-016", text: "Two equal opposite forces of $12\\,\\mathrm{N}$ form a couple with perpendicular line-of-action separation $0.25\\,\\mathrm{m}$. What is the couple's torque magnitude?",
      options: [{ key: "a", text: "$1.5\\,\\mathrm{N\\,m}$" }, { key: "b", text: "$6.0\\,\\mathrm{N\\,m}$" }, { key: "c", text: "$12.0\\,\\mathrm{N\\,m}$" }, { key: "d", text: "$3.0\\,\\mathrm{N\\,m}$" }],
      answer: "d", explanation: "A couple has torque $\\tau=Fd$, with $d$ the full separation of the force lines. Thus $\\tau=12\\times0.25=3.0\\,\\mathrm{N\\,m}$. The resultant force is zero; multiplying by two again would count the separation twice.",
      sectionId: "centre-of-mass-and-torque", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-017", text: "A flywheel of fixed inertia $5.0\\,\\mathrm{kg\\,m^2}$ experiences a net torque of $2.0\\,\\mathrm{N\\,m}$. What angular acceleration does it have?",
      options: [{ key: "a", text: "$0.00\\,\\mathrm{rad\\,s^{-2}}$" }, { key: "b", text: "$2.50\\,\\mathrm{rad\\,s^{-2}}$" }, { key: "c", text: "$0.40\\,\\mathrm{rad\\,s^{-2}}$" }, { key: "d", text: "$10.0\\,\\mathrm{rad\\,s^{-2}}$" }],
      answer: "c", explanation: "For fixed-axis rotation, $\\alpha=\\frac{\\tau_{\\mathrm{net}}}{I}=\\frac{2.0}{5.0}=0.40\\,\\mathrm{rad\\,s^{-2}}$. A flywheel reduces speed variation through large inertia but cannot keep exactly constant speed under a nonzero net torque.",
      sectionId: "centre-of-mass-and-torque", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-018", text: "A uniform solid sphere of mass $5.0\\,\\mathrm{kg}$ rolls without slipping at centre speed $4.0\\,\\mathrm{m\\,s^{-1}}$. What is its total kinetic energy?",
      options: [{ key: "a", text: "$16\\,\\mathrm{J}$" }, { key: "b", text: "$32\\,\\mathrm{J}$" }, { key: "c", text: "$40\\,\\mathrm{J}$" }, { key: "d", text: "$56\\,\\mathrm{J}$" }],
      answer: "d", explanation: "For a solid sphere, $\\frac{k^2}{R^2}=\\frac{2}{5}$. Translational energy is $\\frac{1}{2}\\times5.0\\times4.0^2=40\\,\\mathrm{J}$, and total kinetic energy is $40\\left(1+\\frac{2}{5}\\right)=56\\,\\mathrm{J}$. The rotational contribution is $16\\,\\mathrm{J}$.",
      sectionId: "rolling-motion", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-019", text: "A uniform solid cylinder rolls from rest without slipping down a fixed $30^\\circ$ incline. Taking $g=9.8\\,\\mathrm{m\\,s^{-2}}$, find its centre-of-mass acceleration.",
      options: [{ key: "a", text: "$4.90\\,\\mathrm{m\\,s^{-2}}$" }, { key: "b", text: "$3.27\\,\\mathrm{m\\,s^{-2}}$" }, { key: "c", text: "$2.45\\,\\mathrm{m\\,s^{-2}}$" }, { key: "d", text: "$7.35\\,\\mathrm{m\\,s^{-2}}$" }],
      answer: "b", explanation: "For a solid cylinder, $\\frac{k^2}{R^2}=\\frac{1}{2}$. Thus $a=\\frac{9.8\\sin30^\\circ}{1+\\frac{1}{2}}$. This gives $a=\\frac{4.9}{1.5}=3.2667\\,\\mathrm{m\\,s^{-2}}$. Sufficient static friction is part of the no-slip premise; a frictionless cylinder released without spin would slide instead.",
      sectionId: "rolling-motion", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    },
    {
      id: "note-rotation-020", text: "A thin hoop rolls from rest without slipping through a vertical drop of $1.8\\,\\mathrm{m}$. With $g=10\\,\\mathrm{m\\,s^{-2}}$ and no dissipative losses, what centre speed does it reach?",
      options: [{ key: "a", text: "$4.24\\,\\mathrm{m\\,s^{-1}}$" }, { key: "b", text: "$6.00\\,\\mathrm{m\\,s^{-1}}$" }, { key: "c", text: "$3.00\\,\\mathrm{m\\,s^{-1}}$" }, { key: "d", text: "$8.49\\,\\mathrm{m\\,s^{-1}}$" }],
      answer: "a", explanation: "For a thin hoop, $\\frac{k^2}{R^2}=1$, so $v=\\sqrt{\\frac{2gh}{2}}=\\sqrt{gh}$. Substitution gives $v=\\sqrt{10\\times1.8}=\\sqrt{18}=4.243\\,\\mathrm{m\\,s^{-1}}$. Half the gained kinetic energy is translational and half is rotational.",
      sectionId: "rolling-motion", source: { document: "quick-revision", page: 13 }, cognitive: "application"
    }
  ]
};