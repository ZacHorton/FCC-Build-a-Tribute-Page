import {Route, Routes} from 'react-router-dom'
import {Home} from "./Home.jsx"
import {Survey} from "../certifications/responsive-web-design/survey-form/Survey.jsx"
import {Tribute} from "../certifications/responsive-web-design/tribute-page/Tribute.jsx"
import {TechDoc} from "../certifications/responsive-web-design/technical-documentation-page/TechDoc.jsx"
import {Product} from "../certifications/responsive-web-design/product-landing-page/Product.jsx"
import {Portfolio} from "../certifications/responsive-web-design/personal-portfolio-webpage/Portfolio.jsx"
import {RandomQuoteMachine} from "../certifications/front-end-development-libraries/random-quote-machine/RandomQuoteMachine.jsx"
import {MarkdownPreviewer} from "../certifications/front-end-development-libraries/markdown-previewer/MarkdownPreviewer.jsx"
import {DrumMachine} from "../certifications/front-end-development-libraries/drum-machine/DrumMachine.jsx"
import {Calculator} from "../certifications/front-end-development-libraries/javaScript-calculator/Calculator.jsx"
import {Clock} from "../certifications/front-end-development-libraries/25+5-clock/Clock.jsx"
import {BarChart} from "../certifications/data-visualization/bar-chart/BarChart.jsx"
import {Scatterplot} from "../certifications/data-visualization/scatterplot-graph/Scatterplot.jsx"
import {HeatMap} from "../certifications/data-visualization/heat-map/HeatMap.jsx"
import {Choropleth} from "../certifications/data-visualization/choropleth-map/Choropleth.jsx"
// import {Treemap} from "../certifications/data-visualization/treemap-diagram/placeholder.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/survey-form" element={<Survey />} />
      <Route path="/tribute-page" element={<Tribute />} />
      <Route path="/technical-documentation-page" element={<TechDoc />} />
      <Route path="/product-landing-page" element={<Product />} />
      <Route path="/personal-portfolio-webpage" element={<Portfolio />} />
      <Route path="/random-quote-machine" element={<RandomQuoteMachine />} />
      <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
      <Route path="/drum-machine" element={<DrumMachine />} />
      <Route path="/javascript-calculator" element={<Calculator />} />
      <Route path="/25+5-clock" element={<Clock />} />
      <Route path="/bar-chart" element={<BarChart />} />
      <Route path="/scatterplot-graph" element={<Scatterplot />} />
      <Route path="/heat-map" element={<HeatMap />} />
      <Route path="/choropleth-map" element={<Choropleth />} />
      {/*<Route path="/treemap-diagram" element={<TreemapDiagram />} />     */}
    </Routes>
  )
}

export default App