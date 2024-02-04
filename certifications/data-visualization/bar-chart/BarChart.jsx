import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";
import gdpData from "./gdp-data.json";

export function BarChart() {
  const svgRef = useRef();

  // const dataset = [
  //   ["1947-01-01", 243.1],
  //   ["1947-04-01", 246.3],
  //   ["1947-07-01", 250.1],
  //   ["1947-10-01", 260.3],
  //   ["1948-01-01", 266.2],
  // ];
  const dataset = gdpData.data;


  useEffect(() => {

    // Declare the chart dimensions and margins.
    const widthOfSVG = 800;
    const heightOfSVG = 400;
    const widthofRect = widthOfSVG / d3.count(dataset, d => d[1]);

    // Declare the x (horizontal position) scale.
    // const xScale = d3.scaleLinear()
    //     .domain([0, 160]) // 40 * 5
    //     .range([0, widthOfSVG - widthofRect]);

     // Declare the y (vertical position) scale.
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d[1])])
      .range([0, heightOfSVG]);

     // Create the SVG container.
    const svg = d3.select(svgRef.current)
      .attr("width", widthOfSVG)
      .attr("height", heightOfSVG);

    // Add a rect for each bar.
    svg.append("g")
      .selectAll("rect")
      .data(dataset)
      .join("rect")
      .attr("x", (d, i) => i * widthofRect)
      // place the bars right-side-up: y = heightOfSVG - heightOfBar
      .attr("y", d => heightOfSVG - yScale(d[1]))
      .attr("width", widthofRect)
      .attr("height", d => yScale(d[1]))
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
