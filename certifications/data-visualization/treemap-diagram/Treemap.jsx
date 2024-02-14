import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";
import movieSales from "./movie-data.json";

export function Treemap() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1300;
    const h = 800;
    let svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    // Constructs a root node from the specified hierarchical data.
    const root = d3.hierarchy(movieSales);

    // Construct the treemap layout.
    const treemap = d3.treemap();
    treemap.size([1050, 600]);
    treemap.padding(1);

    // Sum and sort the data.
    root.sum((d) => d.value);
    root.sort((a, b) => b.value - a.value);

    // Compute the treemap layout.
    treemap(root);

    const leaf = svg
      .selectAll("g")
      // Returns the array of leaf nodes in traversal order.
      // A leaf is a node with no children.
      .data(root.leaves())
      .enter()
      .append("g")
      .attr(
        "transform",
        (movie) =>
          "translate(" + (movie.x0 + 100) + ", " + (movie.y0 + 25) + ")"
      );

    const tooltip = d3
      .select(".container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    leaf
      .append("rect")
      .attr("width", (movie) => movie.x1 - movie.x0)
      .attr("height", (movie) => movie.y1 - movie.y0)
      .attr("class", "tile")
      .attr("fill", (movie) => {
        if (movie.data.category === "Action") {
          return "#f94144";
        } else if (movie.data.category === "Adventure") {
          return "#f3722c";
        } else if (movie.data.category === "Family") {
          return "#f8961e";
        } else if (movie.data.category === "Biography") {
          return "#f9c74f";
        } else if (movie.data.category === "Animation") {
          return "#90be6d";
        } else if (movie.data.category === "Comedy") {
          return "#43aa8b";
        } else if (movie.data.category === "Drama") {
          return "#577590";
        }
      })
      .attr("data-name", (movie) => movie.data.name)
      .attr("data-category", (movie) => movie.data.category)
      .attr("data-value", (movie) => movie.data.value);

    leaf
      .append("text")
      .selectAll("tspan")
      .data(function (d) {
        return d.data.name.split(/(?=[A-Z][^A-Z])/g);
      })
      .enter()
      .append("tspan")
      .attr("x", 4)
      .attr("y", function (d, i) {
        return 13 + i * 10;
      })
      .text(function (d) {
        return d;
      });

    leaf
      .on("mousemove", function (event, d) {
        const [x, y] = d3.pointer(event);
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        tooltip
          .attr("data-value", d.data.value)
          .style("opacity", 1)
          .style("left", mouseX + 10 + "px")
          .style("top", mouseY + 10 + "px").html(`Name: ${d.data.name}<br>
          Category: ${d.data.category}<br>
          Value: $${d.data.value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      });

    const legend = svg.append("g").attr("id", "legend");

    legend.append("text").attr("x", 0).attr("y", 25).text("Action");

    legend
      .append("rect")
      .attr("x", 55)
      .attr("y", 16)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#f94144")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 170).attr("y", 25).text("Adventure");

    legend
      .append("rect")
      .attr("x", 250)
      .attr("y", 16)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#f3722c")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 360).attr("y", 25).text("Comedy");

    legend
      .append("rect")
      .attr("x", 425)
      .attr("y", 16)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#43aa8b")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 525).attr("y", 25).text("Biography");

    legend
      .append("rect")
      .attr("x", 605)
      .attr("y", 16)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#f9c74f")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 0).attr("y", 50).text("Drama");

    legend
      .append("rect")
      .attr("x", 55)
      .attr("y", 41)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#577590")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 170).attr("y", 50).text("Animation");

    legend
      .append("rect")
      .attr("x", 250)
      .attr("y", 41)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#90be6d")
      .attr("class", "legend-item");

    legend.append("text").attr("x", 360).attr("y", 50).text("Family");

    legend
      .append("rect")
      .attr("x", 425)
      .attr("y", 41)
      .attr("width", 25)
      .attr("height", 9)
      .attr("fill", "#f8961e")
      .attr("class", "legend-item");

    const bbox = legend.node().getBBox().width;
    legend.attr("transform", "translate(" + (w / 2 - bbox / 2) + ", 650)");
  }, [svgRef]);

  return (
    <div className="treemapContainer">
      <div className="container">
        <div id="title">Video Game Sales</div>
        <div id="description">
          Top 100 Highest Grossing Movies Grouped By Genre
        </div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
