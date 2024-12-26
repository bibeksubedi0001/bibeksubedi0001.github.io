import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

# Function to draw boxes in the flowchart
def draw_box(ax, text, xy, width=2.5, height=1.0, color="lightblue"):
    rect = FancyBboxPatch(
        (xy[0], xy[1]), width, height, boxstyle="round,pad=0.3",
        edgecolor="black", facecolor=color
    )
    ax.add_patch(rect)
    ax.text(
        xy[0] + width / 2, xy[1] + height / 2, text,
        ha="center", va="center", fontsize=10, wrap=True
    )

# Function to draw arrows
def draw_arrow(ax, start, end):
    ax.annotate(
        "", xy=end, xytext=start,
        arrowprops=dict(facecolor="black", arrowstyle="->", lw=1.5)
    )

# Initialize the plot
fig, ax = plt.subplots(figsize=(8, 10))
ax.set_xlim(0, 10)
ax.set_ylim(0, 15)
ax.axis("off")

# Drawing the flowchart
draw_box(ax, "Input Data Collection:\n- SAR Images\n- DSM (Terrain)\n- Land Use Maps\n- Water Depth (HEC-RAS)", (3.5, 12), color="skyblue")
draw_box(ax, "Data Preprocessing:\n- Align Resolutions\n- Remove Noise\n- Normalize Features", (3.5, 9.5), color="lightgreen")
draw_box(ax, "Feature Extraction:\n- SAR: Backscatter, Edges\n- DSM: Slope, Stream Order\n- Land Use: Classifications", (3.5, 7), color="lightyellow")
draw_box(ax, "Machine Learning Training:\n- Gradient Boosting\n- Random Forest\n- Support Vector Regression", (3.5, 4.5), color="lightpink")
draw_box(ax, "Validation & Prediction:\n- Test Models (RMSE)\n- Predict Flood Depths", (3.5, 2), color="lavender")
draw_box(ax, "Output:\nSpatial Map of Predicted\nFloodwater Depths", (3.5, 0), color="orange")

# Adding arrows
draw_arrow(ax, (5, 12), (5, 10.5))
draw_arrow(ax, (5, 9.5), (5, 8))
draw_arrow(ax, (5, 7), (5, 5.5))
draw_arrow(ax, (5, 4.5), (5, 3))
draw_arrow(ax, (5, 2), (5, 1))

# Title
plt.title("Floodwater Depth Estimation Flowchart", fontsize=14)
plt.show()