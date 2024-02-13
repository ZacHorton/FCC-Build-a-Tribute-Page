import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { feature } from "topojson";
import "./styles.css";
import countyData from "./US-county.json";
import educationData from "./US-education.json";

export function Choropleth() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1050;
    const h = 600;
    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

    const tooltip = d3
      .select(".container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)

    let drawMap = () => {
      svg
        .selectAll("path")
        // Convert county data from topoJSON to d3 supported geoJSON format
        .data(feature(countyData, countyData.objects.counties).features)
        .enter()
        .append("path")
        .attr("d", d3.geoPath())
        .attr("class", "county")
        .attr("data-fips", (d) => d.id)
        .attr("data-education", (d) => {
          const county = educationData.find(({ fips }) => fips === d.id);
          return county.bachelorsOrHigher;
        })
        .on("mousemove", function (event, d) {
          const [x, y] = d3.pointer(event);
          const mouseX = event.pageX;
          const mouseY = event.pageY;
          const base = educationData.find(({ fips }) => fips === d.id)
          const county = base.area_name;
          const state = base.state;
          const percentage = base.bachelorsOrHigher;
          tooltip
            .attr("data-education", percentage)
            .style("opacity", 1)
            .style("left", mouseX + 10 + "px")
            .style("top", mouseY + 10 + "px")
            .html(`${county}, ${state}: ${percentage}%`);
        })
        .on("mouseout", function () {
          tooltip.style("opacity", 0);
        });
    };

    drawMap();
  }, [svgRef]);

  return (
    <div className="choroplethContainer">
      <div className="container">
        <div id="title">United States Educational Attainment</div>
        <div id="description">
          Percentage of adults age 25 and older with a bachelor's degree or
          higher (2010-2014)
        </div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
