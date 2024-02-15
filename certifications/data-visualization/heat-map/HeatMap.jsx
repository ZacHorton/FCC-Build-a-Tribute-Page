import { useRef, useEffect } from "react";
import * as d3 from "d3";
import dataset from "./dataset.json";
import "./styles.css";

export function HeatMap() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1050;
    const h = 600;
    const padding = 100;
    const rectW = 4;
    const rectH = (h - padding * 2) / 12;

    const xScale = d3
      .scaleTime()
      .domain([
        d3.min(dataset.monthlyVariance, (d) => new Date(d.year, 0)),
        d3.max(dataset.monthlyVariance, (d) => new Date(d.year, 0)),
      ])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
      .range([h - padding, padding]);

    const xAxis = d3.axisBottom(xScale);

    const formatMonth = function (month) {
      var date = new Date(0);
      date.setUTCMonth(month);
      var format = d3.utcFormat("%B");
      return format(date);
    };
    const yAxis = d3.axisLeft(yScale).tickFormat(formatMonth);

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

    const tooltip = d3
      .select(".container")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);

    svg
      .selectAll("rect")
      .data(dataset.monthlyVariance)
      .enter()
      .append("rect")
      .style("fill", (d) => {
        var offBase = dataset.baseTemperature + d.variance;
        if (offBase <= 3.9) {
          return "#4575b4";
        } else if (offBase <= 5.0) {
          return "#74add1";
        } else if (offBase <= 6.1) {
          return "#abd9e9";
        } else if (offBase <= 7.2) {
          return "#e0f3f8";
        } else if (offBase <= 8.3) {
          return "#ffffbf";
        } else if (offBase <= 9.5) {
          return "#fee090";
        } else if (offBase <= 10.6) {
          return "#fdae61";
        } else if (offBase <= 11.7) {
          return "#f46d43";
        } else if (offBase <= 14) {
          return "#d73027";
        }
      })
      .attr("class", "cell")
      .attr("data-month", (d) => d.month - 1)
      .attr("data-year", (d) => d.year)
      .attr("data-temp", (d) => d.variance)
      .attr("x", (d) => xScale(new Date(d.year, 0)))
      .attr("y", (d) => yScale(new Date(2024, d.month - 1, 1).getMonth()))
      .attr("width", rectW)
      .attr("height", rectH)
      .on("mousemove", function (event, d) {
        const [x, y] = d3.pointer(event);
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        tooltip
          .attr("data-year", d.year)
          .style("opacity", 1)
          .style("left", mouseX + 10 + "px")
          .style(
            "top",
            mouseY + 10 + "px"
            ).html(`${d.year} - ${formatMonth(d.month - 1)}<br />
            ${(dataset.baseTemperature + d.variance).toFixed(1)}<br />
            ${d.variance.toFixed(1)}`);
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      });

    const legend = svg.append("g").attr("id", "legend");

    var threshold = d3
      .scaleThreshold()
      .domain([2.8, 3.9, 5.0, 6.1, 7.2, 8.3, 9.5, 10.6, 11.7, 12.8])
      .range([
        "",
        "#4575b4",
        "#74add1",
        "#abd9e9",
        "#e0f3f8",
        "#ffffbf",
        "#fee090",
        "#fdae61",
        "#f46d43",
        "#d73027",
      ]);

    var x = d3.scaleLinear().domain([2.8, 12.8]).range([0, 250]);

    var xAxisLegend = d3
      .axisBottom(x)
      .tickSize(13)
      .tickValues(threshold.domain())
      .tickFormat(d3.format(".1f"));

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
    legend.attr("transform", "translate(" + (w / 2 - bbox / 2) + ", 35)");
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
