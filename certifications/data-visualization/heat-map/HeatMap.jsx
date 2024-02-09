import { useRef, useEffect } from "react";
import * as d3 from "d3";
import dataset from "./dataset.json";
import "./styles.css";

export function HeatMap() {
  const svgRef = useRef();

  dataset.monthlyVariance.forEach(function (d) {
    d.year = new Date(d.year, 0);
    d.month = new Date(2024, d.month - 1, 1);
  });

  useEffect(() => {
    const w = 1050;
    const h = 600;
    const padding = 100;

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(dataset.monthlyVariance, (d) => d.year),
        d3.max(dataset.monthlyVariance, (d) => d.year),
      ])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleTime()
      .domain([new Date(2024, 11), new Date(2024, 0)])
      .range([h - padding, padding]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(d3.timeMonth)
      .tickFormat(d3.timeFormat("%B"));

    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

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
