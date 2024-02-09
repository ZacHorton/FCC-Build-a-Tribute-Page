import { useRef, useEffect } from "react";
import * as d3 from "d3";
import dataset from "./dataset.json";
import "./styles.css";

export function HeatMap() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1050;
    const h = 600;
    const padding = 60;

    const xScale = d3
      .scaleBand()
      .domain([])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain([])
      .range([h - padding, padding]);

    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0, " + (h - padding) + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate(" + padding + ", 0)")
      .call(yAxis);
  }, [dataset]);

  return (
    <div className="heatMapContainer">
      <div className="container">
        <div id="title">Monthly Global Land-Surface Temperature</div>
        <div id="description">1753 - 2015: base temperature 8.66℃</div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
