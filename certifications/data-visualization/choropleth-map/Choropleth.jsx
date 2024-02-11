import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";

export function Choropleth() {
  const svgRef = useRef();
  const dataset = [];

  useEffect(() => {
    const w = 1050;
    const h = 600;
    const svg = d3.select(svgRef.current).attr("width", w).attr("height", h);
  }, [dataset]);

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
