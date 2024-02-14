import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./styles.css";
import movieSales from "./movie-data.json";

export function Treemap() {
  const svgRef = useRef();

  useEffect(() => {
    const w = 1050;
    const h = 600;
    let svg = d3.select(svgRef.current).attr("width", w).attr("height", h);

  }, [svgRef]);

  return (
    <div className="treemapContainer">
      <div className="container">
        <div id="title">Video Game Sales</div>
        <div id="description">
          Top 100 Highest Grossing Movies Grouped By Genre
        </div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}
