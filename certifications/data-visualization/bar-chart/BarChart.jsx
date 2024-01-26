import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";
import gdpData from "./gdp-data.json";

export function BarChart() {
  const svgRef = useRef();
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  useEffect(() => {
    const w = 800;
    const h = 160;

    const svg = d3.select(svgRef.current)
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => h - 3 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 3)
      .attr("fill", "navy")
      .attr("class", "bar")
      .append("title")
      .text((d) => d);

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => h - (d * 3 + 3));
  }, [dataset]);

  return (
    <div className="barChartContainer">
      <div className="container">
        <div id="title">United States GDP</div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
