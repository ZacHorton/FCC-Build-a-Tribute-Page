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

    const rectW =
      (w - padding * 2) /
      (d3.max(dataset.monthlyVariance, (d) => d.year.getFullYear()) -
        d3.min(dataset.monthlyVariance, (d) => d.year.getFullYear()));
    const rectH = (h - padding * 2) / 12;

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(dataset.monthlyVariance, (d) => d.year),
        d3.max(dataset.monthlyVariance, (d) => d.year),
      ])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      .range([h - padding, padding]);

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale).tickFormat(function (month) {
      var date = new Date(0);
      date.setUTCMonth(month);
      var format = d3.utcFormat("%B");
      return format(date);
    });

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

    svg
      .selectAll("rect")
      .data(dataset.monthlyVariance)
      .enter()
      .append("rect")
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("class", "cell")
      .attr("data-month", (d) => d.month.getMonth())
      .attr("data-year", (d) => d.year.getFullYear())
      .attr("data-temp", (d) => d.variance)
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.month.getMonth()))
      .attr("width", rectW)
      .attr("height", rectH);
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
