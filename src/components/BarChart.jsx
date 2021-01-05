import { React, useEffect, useRef } from "react";
import * as d3 from "d3";
import "../App.css";

export const BarChart = (props) => {
  const width = +props.width, //hack to get int
    height = +props.height;
  const myRef = useRef();

  useEffect(() => {
    d3.select(myRef.current).attr("width", width).attr("height", height);
    draw();
  });

  const responsivefy = (svg) => {
    // Container is the DOM element, svg is appended.
    // Then we measure the container and find its
    // aspect ratio.
    const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width"), 10),
      height = parseInt(svg.style("height"), 10),
      aspect = width / height;

    // Add viewBox attribute to set the value to initial size
    // add preserveAspectRatio attribute to specify how to scale
    // and call resize so that svg resizes on page load
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

    d3.select(window).on("resize." + container.attr("id"), resize);

    function resize() {
      const targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
    }
  }

  const draw = () => {
    console.log("draw bar", props);
    const data = props?.data || [];
    const svg = d3.select(myRef.current);
    const margin = { y: 50, x: 50 };
    const xScale = d3.scaleBand().padding(0.2);
    const yScale = d3.scaleLinear().domain([0, 50000]); //max scale should be dynamic
    yScale.range([height, 0]);
    xScale.range([0, width]).domain(data.map((d) => d.fascia_anagrafica));
    svg
      .attr("width", width + 2 * margin.x)
      .attr("height", height + 2 * margin.y)
      .call(responsivefy) // Call responsivefy to make the chart responsive
      .attr("id", "svg-bar");

    svg
      .append("text")
      .attr("x", width / 2 + margin.x)
      .attr("y", margin.y / 2)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .attr(props.title);

    svg
      .append("text")
      .attr("x", width / 2 + margin.x)
      .attr("y", margin.y * 2)
      .attr("transform", `translate(0,${height - margin.y / 4})`)
      .attr("class", "title")
      .text(props.xtitle);

    svg
      .append("text")
      .attr("x", -(height / 2) - margin.y)
      .attr("y", margin.x / 2.4)
      .attr("transform", "rotate(-90)")
      .attr("class", "title")
      .text(props.ytitle);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.x},${margin.y})`);

    chart.append("g").attr("class", "axis").call(d3.axisLeft(yScale));
    chart
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    chart
      .append("g")
      .attr("class", "grid-hline")
      .call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat(""));

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.fascia_anagrafica))
      .attr("y", (d) => yScale(d.totale))
      .attr("height", (d) => height - yScale(d.totale))
      .attr("width", xScale.bandwidth())
      .append("title")
      .attr("x", (d) => xScale(d.fascia_anagrafica))
      .attr("y", (d) => yScale(d.totale))
      .text((d) => `Fascia ${d.fascia_anagrafica} totale: ${d.totale}`);

    chart
      .selectAll(".bartext")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bartext")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("x", (d) => xScale(d.fascia_anagrafica) + 35)
      .attr("y", (d) =>
        height - yScale(d.totale) >= 20
          ? yScale(d.totale) + 20
          : yScale(d.totale)
      )
      .text((d) => `${d.totale}`);
  };

  return (
    <div className="chart svg-container">
      <svg ref={myRef} className="svg-content-responsive"></svg>
    </div>
  );
};