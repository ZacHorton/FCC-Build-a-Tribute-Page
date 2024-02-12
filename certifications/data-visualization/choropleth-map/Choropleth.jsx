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
