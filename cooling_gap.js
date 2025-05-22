// Helper to update button styles
function updateViewButtons(selected) {
  ["view-default", "view-cooling"].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (id === `view-${selected}`) {
      btn.style.background = "#3399ff";
      btn.style.color = "#fff";
      btn.style.fontWeight = "bold";
      btn.style.boxShadow = "0 2px 8px #3399ff44";
      btn.style.border = "2px solid #3399ff";
    } else {
      btn.style.background = "#222";
      btn.style.color = "#eee";
      btn.style.fontWeight = "";
      btn.style.boxShadow = "";
      btn.style.border = "1px solid #444";
    }
  });
}
document.body.style.background = "#111";
document.body.style.color = "#eee";
document.querySelector("h1, .main-title")?.style && (document.querySelector("h1, .main-title").style.color = "#bbb");
function updateLegend(view) {
  let legend = document.getElementById("adaptive-legend");
  if (!legend) {
    legend = document.createElement("div");
    legend.id = "adaptive-legend";
    legend.style.position = "fixed";
    legend.style.top = "24px";         // Change from bottom to top
    legend.style.right = "24px";
    legend.style.bottom = "";          // Remove or set to empty
    legend.style.background = "#222";
    legend.style.color = "#eee";
    legend.style.padding = "16px 20px";
    legend.style.borderRadius = "10px";
    legend.style.boxShadow = "0 2px 12px rgba(0,0,0,0.4)";
    legend.style.fontSize = "1em";
    legend.style.zIndex = "999";
    legend.style.maxWidth = "320px";
    legend.style.pointerEvents = "auto";
    document.body.appendChild(legend);
  }
  legend.innerHTML = "";

  // Color scale legend
  const colorTitle = document.createElement("div");
  colorTitle.style.marginBottom = "8px";
  colorTitle.style.fontWeight = "bold";
  colorTitle.textContent = view === "default" ? "Cooling index:" : "Cool paving (hectares):";
  legend.appendChild(colorTitle);

  const colorBar = document.createElement("div");
  colorBar.style.display = "flex";
  colorBar.style.gap = "0px";
  colorBar.style.marginBottom = "8px";
  colorBar.style.alignItems = "center";
  colorBar.style.height = "18px";
  colorBar.style.marginLeft = "2px";
  const palette = [
    "#ff0000", "#ff6600", "#ffaa00", "#ffee00", "#ccff66", "#88ccff", "#3399ff", "#0066cc"
  ];
  const colors = view === "default" ? [...palette].reverse() : palette;
  colors.forEach((c, i) => {
    const swatch = document.createElement("div");
    swatch.style.background = c;
    swatch.style.flex = "1";
    swatch.style.height = "18px";
    swatch.style.borderRadius = "2px";
    swatch.title = i === 0 ? (view === "default" ? "Lowest cooling index" : "Lowest cool paving") :
      (i === colors.length - 1 ? (view === "default" ? "Highest cooling index" : "Highest cool paving") : "");
    colorBar.appendChild(swatch);
  });
  legend.appendChild(colorBar);

  const colorLabels = document.createElement("div");
  colorLabels.style.display = "flex";
  colorLabels.style.justifyContent = "space-between";
  colorLabels.style.fontSize = "0.95em";
  colorLabels.style.marginBottom = "10px";
  colorLabels.innerHTML = `<span>Low</span><span>High</span>`;
  legend.appendChild(colorLabels);

  // Icon legend
  const iconTitle = document.createElement("div");
  iconTitle.style.fontWeight = "bold";
  iconTitle.style.marginBottom = "6px";
  iconTitle.textContent = "Data icons:";
  legend.appendChild(iconTitle);

  const iconList = document.createElement("div");
  iconList.style.display = "flex";
  iconList.style.flexDirection = "column";
  iconList.style.gap = "4px";

  const icons = view === "default"
    ? [{ src: "assets/foreclosure-icon.svg", label: "Many foreclosures" }]
    : [
        { src: "assets/tree-icon.svg", label: "Many Trees planted" },
        { src: "assets/grass-icon.svg", label: "Much Grass planted (hectares)" },
        { src: "assets/roof-icon2.svg", label: "Many cool roofs (standard units)" }
      ];

  icons.forEach(({ src, label }) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.style.width = "60px";
    img.style.height = "60px";
    img.style.background = "#FFFFFF";
    img.style.borderRadius = "3px";
    row.appendChild(img);
    const txt = document.createElement("span");
    txt.textContent = label;
    row.appendChild(txt);
    iconList.appendChild(row);
  });

  legend.appendChild(iconList);
}

// Patch legend on view change
window.updateLegend = updateLegend;
updateLegend("default");
function createLegend() {
  let legend = document.getElementById("adaptive-legend");
  if (legend) legend.remove();

  legend = document.createElement("div");
  legend.id = "adaptive-legend";
  legend.style.position = "fixed";
  legend.style.top = "24px";
  legend.style.right = "24px";
  legend.style.bottom = "";
  legend.style.background = "#222";
  legend.style.color = "#eee";
  legend.style.padding = "16px 20px";
  legend.style.borderRadius = "10px";
  legend.style.boxShadow = "0 2px 12px rgba(0,0,0,0.4)";
  legend.style.fontSize = "1em";
  legend.style.zIndex = "999";
  legend.style.maxWidth = "320px";
  legend.style.pointerEvents = "auto";

  // Color scale legend
  const colorTitle = document.createElement("div");
  colorTitle.style.marginBottom = "8px";
  colorTitle.style.fontWeight = "bold";
  colorTitle.textContent = "Cooling index:";
  legend.appendChild(colorTitle);

  const colorBar = document.createElement("div");
  colorBar.style.display = "flex";
  colorBar.style.gap = "2px";
  colorBar.style.marginBottom = "8px";
  colorBar.style.alignItems = "center";
  colorBar.style.height = "18px";
  colorBar.style.marginLeft = "2px";
  
  // Use the palette from the main code
  const colors = [
    "#ff0000", "#ff6600", "#ffaa00", "#ffee00", "#ccff66", "#88ccff", "#3399ff", "#0066cc"
  ];
  colors.slice().reverse().forEach((c, i) => {
    const swatch = document.createElement("div");
    swatch.style.background = c;
    swatch.style.width = "22px";
    swatch.style.height = "18px";
    swatch.style.borderRadius = "2px";
    swatch.title = i === 0 ? "Lowest cooling index" : (i === colors.length - 1 ? "Highest cooling index" : "");
    colorBar.appendChild(swatch);
  });
  legend.appendChild(colorBar);

  const colorLabels = document.createElement("div");
  colorLabels.style.display = "flex";
  colorLabels.style.justifyContent = "space-between";
  colorLabels.style.fontSize = "0.95em";
  colorLabels.style.marginBottom = "10px";
  colorLabels.innerHTML = `<span>Low index</span><span>High index</span>`;
  legend.appendChild(colorLabels);

  // Icon legend
  const iconTitle = document.createElement("div");
  iconTitle.style.fontWeight = "bold";
  iconTitle.style.marginBottom = "6px";
  iconTitle.textContent = "Data icons:";
  legend.appendChild(iconTitle);

  const iconList = document.createElement("div");
  iconList.style.display = "flex";
  iconList.style.flexDirection = "column";
  iconList.style.gap = "4px";

  [
    { src: "assets/tree-icon.svg", label: "Trees planted" },
    { src: "assets/grass-icon.svg", label: "Grass planted (hectares)" },
    { src: "assets/roof-icon2.svg", label: "Cool roofs" },
    { src: "assets/foreclosure-icon.svg", label: "Foreclosures" }
  ].forEach(({ src, label }) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.style.width = "22px";
    img.style.height = "22px";
    img.style.background = "#fff2";
    img.style.borderRadius = "3px";
    row.appendChild(img);
    const txt = document.createElement("span");
    txt.textContent = label;
    row.appendChild(txt);
    iconList.appendChild(row);
  });

  legend.appendChild(iconList);

  document.body.appendChild(legend);
}

const tooltip = d3.select(".tooltip");
let neighborhoodNames = [];
let dataMap = {};
let zoomedNeighborhood = null;
let currentView = "default";

function normalizeId(name) {
  return name?.trim().toLowerCase().replace(/\s+/g, " ").replace(/\//g, " ").trim();
}

console.log("🔹 Starting data load...");
Promise.all([
  d3.text("assets/neighborhoods.txt"),
  d3.xml("assets/louisville_combined.svg"),
  d3.csv("assets/Louisville_Cooling_Merged.csv")
]).then(([text, xml, data]) => {
  console.log("✅ Files loaded");

  neighborhoodNames = text.split("\n").map(name => normalizeId(name)).filter(Boolean);
  const importedNode = document.importNode(xml.documentElement, true);
  const svgContainer = document.getElementById("main-map");
  svgContainer.replaceWith(importedNode);

  const svg = d3.select("svg")
    .attr("id", "main-map")
    .attr("width", "100%")
    .attr("height", window.innerHeight)
    .attr("preserveAspectRatio", "xMidYMid meet");

  // Assign ids to paths based on normalized neighborhood names
  d3.selectAll("svg path").each(function (_, i) {
    if (neighborhoodNames[i]) {
      const id = normalizeId(neighborhoodNames[i]);
      d3.select(this).attr("id", id);
    }
  });

  // Ensure every path gets a normalized id if it matches a known neighborhood
  svg.selectAll("path").each(function () {
    let rawId = this.getAttribute("id") || this.getAttribute("inkscape:label") || this.getAttribute("title") || this.textContent || "";
    let normalized = normalizeId(rawId);

    if (!neighborhoodNames.includes(normalized)) {
      for (const name of neighborhoodNames) {
        if (rawId.toLowerCase().includes(name)) {
          normalized = name;
          break;
        }
      }
    }
  });

  const iconLayer = svg.append("g").attr("id", "overlay-icons");
  svg.node().appendChild(iconLayer.node());

  data.forEach(d => {
    const key = normalizeId(d.Neighborhood_clean);
    if (key) {
      dataMap[key] = {
        tree_count: +d.Total_Trees_Planted,
        cooling_index: +d.cooling_index,
        norm_paving: +d.Total_Cool_Paving__Hectacres__norm,
        raw_paving: +d.Total_Cool_Paving__Hectacres_,
        norm_grass: +d.Total_Grass_Planted__Hectares__norm,
        norm_roofs: +d.Total_New_Cool_Roofs_norm,
        foreclosures: +d.Foreclosure_Count
      };
    }
  });

  const viewBox = svg.attr("viewBox").split(" ");
  const viewBoxWidth = +viewBox[2];
  const viewBoxHeight = +viewBox[3];
  const sizeScaleFactor = viewBoxWidth / 20;
  const iconPixelSize = sizeScaleFactor;

  const treeIconUnit = 500;
  const grassIconUnit = 0.0025;
  const roofIconUnit = 0.025;
  const foreclosureUnit = 5;

  // Color palettes
  const palette = ["#ff0000", "#ff6600", "#ffaa00", "#ffee00", "#ccff66", "#88ccff", "#3399ff", "#0066cc"];
  const paletteReverse = [...palette].reverse();

  // Color scales
  const colorScales = {
    default: d3.scaleQuantile()
      .domain(Object.values(dataMap).map(d => d.cooling_index).filter(v => isFinite(v)))
      .range(paletteReverse),

    cooling: d3.scaleQuantile()
      .domain(Object.values(dataMap).map(d => d.raw_paving).filter(v => isFinite(v) && v > 0))
      .range(palette)
  };

  function drawIcons(id, types) {
    const d = dataMap[id];
    const cssId = id.replace(/ /g, "\\ ");
    const pathSelection = d3.select(`#${cssId}`);
    if (pathSelection.empty()) return;
    const path = pathSelection.node();
    const bbox = path.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    const spread = Math.min(bbox.width, bbox.height) / 3;

    // Calculate positions for each icon (evenly spaced in a circle)
    const visibleTypes = types.filter(t => t.show);
    const n = visibleTypes.length;
    const iconRadius = spread * 0.7; // distance from center

    visibleTypes.forEach((type, i) => {
      // Spread icons evenly in a circle (or triangle if 3 icons)
      const angle = (2 * Math.PI / n) * i - Math.PI / 2; // start at top
      const x = centerX + iconRadius * Math.cos(angle);
      const y = centerY + iconRadius * Math.sin(angle);

      iconLayer.append("image")
        .attr("xlink:href", type.icon)
        .attr("x", x - iconPixelSize / 2)
        .attr("y", y - iconPixelSize / 2)
        .attr("width", iconPixelSize)
        .attr("height", iconPixelSize)
        .attr("opacity", 0.9)
        .attr("class", "overlay-icon")
        .attr("data-neighborhood", id);
    });
  }

  function renderView(view) {
    currentView = view;
    iconLayer.selectAll("image").remove();
    d3.selectAll("svg path").each(function () {
      const id = normalizeId(this.id);
      const d = dataMap[id];
      let fillColor;
      if (!d) {
        fillColor = "#808080"; // Grey for neighborhoods without data
        d3.select(this)
          .transition()
          .duration(500)
          .attr("fill", fillColor)
          .attr("stroke", "#444")
          .attr("stroke-width", 1)
          .attr("pointer-events", "all");
      } else {
        fillColor = view === "cooling" ? colorScales.cooling(d.raw_paving) : colorScales.default(d.cooling_index);
        d3.select(this)
          .transition()
          .duration(500)
          .attr("fill", fillColor)
          .attr("stroke", "#222")
          .attr("stroke-width", 0.5)
          .attr("pointer-events", "all");
      }

      if (d && view === "default") {
        drawIcons(id, [
          { icon: "assets/foreclosure-icon.svg", show: d.foreclosures >= 10 } // set your threshold
        ]);
      }

      if (d && view === "cooling") {
        drawIcons(id, [
          { icon: "assets/tree-icon.svg", show: d.tree_count >= 1000 },      // set your threshold
          { icon: "assets/grass-icon.svg", show: d.norm_grass >= 0.01 },     // set your threshold
          { icon: "assets/roof-icon2.svg", show: d.norm_roofs >= 0.01 }      // set your threshold
        ]);
      }
    });
    updateLegend(currentView);
    updateParagraphs(currentView);
  }

  d3.selectAll("svg path")
    .on("click", function () {
      const id = normalizeId(this.id);
      const d = dataMap[id];
      if (!d) return;

      if (zoomedNeighborhood === id) {
        svg.transition().duration(750).attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        d3.select("#zoom-info").remove();
        zoomedNeighborhood = null;
        return;
      }

      const bbox = this.getBBox();
      const zoomFactor = 3.5;
      const zoomWidth = viewBoxWidth / zoomFactor;
      const zoomHeight = viewBoxHeight / zoomFactor;
      const zoomX = bbox.x + bbox.width / 2 - zoomWidth / 2;
      const zoomY = bbox.y + bbox.height / 2 - zoomHeight / 2;
      svg.transition().duration(750).attr("viewBox", `${zoomX} ${zoomY} ${zoomWidth} ${zoomHeight}`);

      d3.select("#zoom-info").remove();
      const prettyName = Object.keys(dataMap).find(key => normalizeId(key) === id) || id;
      const infoText = `
        <strong>${prettyName}</strong><br/>
        🌳 Trees: ${d.tree_count}<br/>
        ❄️ Cooling Index: ${d.cooling_index.toFixed(2)}<br/>
        🌱 Grass: ${d.norm_grass.toFixed(2)} hectares<br/>
        🧊 Cool paving: ${d.raw_paving.toFixed(2)} hectares<br/>
        🏠 Cool roofs: ${d.norm_roofs.toFixed(2)}<br/>
        💸 Foreclosures: ${d.foreclosures}
        <br/>
        <button id="close-zoom-info" style="
          margin-top:8px;
          padding:4px 12px;
          background:#3399ff;
          color:#fff;
          border:none;
          border-radius:4px;
          cursor:pointer;
          font-size:1em;
        ">Close</button>
      `;

      d3.select("body")
        .append("div")
        .attr("id", "zoom-info")
        .style("position", "fixed")
        .style("top", "50%")
        .style("left", "50%")
        .style("transform", "translate(-50%, -50%)")
        .style("color", "#333")
        .style("background", "#fff")
        .style("border", "1px solid #333")
        .style("padding", "12px 16px")
        .html(infoText);

      setTimeout(() => {
        const closeBtn = document.getElementById("close-zoom-info");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            svg.transition().duration(750).attr("viewBox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
            d3.select("#zoom-info").remove();
            zoomedNeighborhood = null;
          });
        }
      }, 0);

      zoomedNeighborhood = id;
    })
    .on("mouseover", function (event) {
      if (zoomedNeighborhood) return;
      const id = normalizeId(this.id);
      const d = dataMap[id];

      if (d) {
        d3.selectAll(`.overlay-icon[data-neighborhood='${id}']`)
          .transition().duration(200)
          .attr("transform", function () {
            const x = parseFloat(d3.select(this).attr("x")) + iconPixelSize / 2;
            const y = parseFloat(d3.select(this).attr("y")) + iconPixelSize / 2;
            return `translate(${x},${y}) scale(1.5) translate(${-x},${-y})`;
          });
      }

      if (!d) {
        tooltip.style("display", "block")
          .html(`<strong>${id}</strong><br/><em>No data found</em>`);
      } else if (currentView === "default") {
        tooltip.style("display", "block")
          .html(`<strong>${id}</strong><br/>❄️ Cooling Index: ${d.cooling_index.toFixed(2)}<br/>💸 Foreclosures: ${d.foreclosures}`);
      } else if (currentView === "cooling") {
        tooltip.style("display", "block")
          .html(`<strong>${id}</strong><br/>
        🌳 Trees: ${d.tree_count}<br/>
        🌱 Grass: ${d.norm_grass.toFixed(2)} hectares<br/>
        🧊 Cool paving: ${d.raw_paving.toFixed(2)} hectares<br/>
        🏠 Cool roofs: ${d.norm_roofs.toFixed(2)}<br/>`);
      }
    })
    .on("mousemove", function (event) {
      tooltip.style("left", `${event.pageX + 10}px`).style("top", `${event.pageY - 20}px`);
    })
    .on("mouseout", function () {
      tooltip.style("display", "none");
      d3.selectAll(".overlay-icon")
        .transition()
        .duration(200)
        .attr("transform", null);
    });

  renderView("default");

  document.getElementById("view-default").addEventListener("click", () => {
    d3.select("#zoom-info").remove();
    renderView("default");
  });
  document.getElementById("view-cooling").addEventListener("click", () => {
    d3.select("#zoom-info").remove();
    renderView("cooling");
  });
});

function highlightViewButton(view) {
  updateViewButtons(view);
}
highlightViewButton("default");

document.getElementById("view-default").addEventListener("click", () => {
  highlightViewButton("default");
});
document.getElementById("view-cooling").addEventListener("click", () => {
  highlightViewButton("cooling");
});

function updateParagraphs(view) {
  if (view === "default") {
    document.getElementById("desc-main").textContent =
      "Explore the cooling index and its correlation with foreclosures in Louisville neighborhoods.";
    document.getElementById("desc-hover").textContent =
      "Hover over a neighborhood to see its cooling index and foreclosure rate.";
    document.getElementById("desc-click").textContent =
      "Click on a neighborhood to see more details.";
  } else if (view === "cooling") {
    document.getElementById("desc-main").textContent =
      "Explore the distribution of cooling infrastructure (trees, grass, cool roofs) in Louisville neighborhoods.";
    document.getElementById("desc-hover").textContent =
      "Hover over a neighborhood to see its cooling infrastructure details.";
    document.getElementById("desc-click").textContent =
      "Click on a neighborhood to see more details about its cooling infrastructure.";
  }
}