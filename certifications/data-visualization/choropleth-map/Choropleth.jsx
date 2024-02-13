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
      .style("opacity", 0);

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
      .style("fill", (d) => {
        const county = educationData.find(({ fips }) => fips === d.id).bachelorsOrHigher;
        if (county <= 12) {
          return "#deebf7";
        } else if (county <= 21) {
          return "#c6dbef";
        } else if (county <= 30) {
          return "#9ecae1";
        } else if (county <= 39) {
          return "#6baed6";
        } else if (county <= 48) {
          return "#4292c6";
        } else if (county <= 57) {
          return "#2171b5";
        } else if (county <= 66) {
          return "#08519c";
        }
      })
      .on("mousemove", function (event, d) {
        const [x, y] = d3.pointer(event);
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        const base = educationData.find(({ fips }) => fips === d.id);
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

      const legend = svg.append("g").attr("id", "legend");

      var threshold = d3
        .scaleThreshold()
        .domain([.03, .12, .21, .3, .39, .48, .57, .66]) //8
        .range([ //9
          // "#f7fbff",
          "",
          "#deebf7",
          "#c6dbef",
          "#9ecae1",
          "#6baed6",
          "#4292c6",
          "#2171b5",
          "#08519c",
          // "#08306b",
        ]);
  
      var x = d3.scaleLinear().domain([.03, .66]).range([0, 250]);
  
      var xAxisLegend = d3
        .axisBottom(x)
        .tickSize(13)
        .tickValues(threshold.domain())
        .tickFormat(d3.format(".0%"));
  
      legend
        .selectAll("rect")
        .data(
          threshold.range().map(function (color) {
            var d = threshold.invertExtent(color);
            if (d[0] == null) d[0] = x.domain()[0];
            if (d[1] == null) d[1] = x.domain()[1];
            return d;
          })
        )
        .enter()
        .append("rect")
        .attr("height", 8)
        .attr("x", (d) => x(d[0]))
        .attr("width", (d) => x(d[1]) - x(d[0]))
        .attr("fill", (d) => threshold(d[0]));
  
      legend.call(xAxisLegend);
  
      const bbox = legend.node().getBBox().width;
      legend.attr("transform", "translate(" + (w / 2 - bbox / 2) + ", 27)");
   


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
