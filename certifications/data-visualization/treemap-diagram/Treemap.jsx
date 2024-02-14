import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";
import movieSales from "./movie-data.json";

export function Treemap() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1050;
    const h = 600;
    let svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    // Constructs a root node from the specified hierarchical data.
    const root = d3.hierarchy(movieSales);

    // Construct the treemap layout.
    const treemap = d3.treemap();
    treemap.size([w, h]);
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
        (movie) => "translate(" + movie.x0 + ", " + movie.y0 + ")"
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
      .text((movie) => {
        return movie.data.name;
      })
      .attr("x", 5)
      .attr("y", 25);

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
