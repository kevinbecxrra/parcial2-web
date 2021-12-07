import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Piechart(props) {
    let data = []
    props.rooms.forEach(element => {
        data.push(element);
    });
    const pieChart = useRef()
	useEffect(()=>{

		const piedata = d3.pie().value(d => d.powerUsage.value)(data)
		const arc = d3.arc().innerRadius(0).outerRadius(200)

		const colors = d3.scaleOrdinal(['#ffa822','#134e6f','#ff6150','#1ac0c6','#dee0e6'])

		const svg = d3.select(pieChart.current)
						.attr('width', 600)
						.attr('height', 600)
						.append('g')
							.attr('transform','translate(300,300)')

		const tooldiv = d3.select('#chartArea')
						  .append('div')
						  .style('visibility','hidden')
						  .style('position','absolute')
						  .style('background-color','white')
		
		
		svg.append("text")
        .attr("x", (50 / 2))             
        .attr("y", 0 - (100 / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Power usage (kwH) - Today");


		svg.append('g')
			.selectAll('path')
			.data(piedata)
			.join('path')
				.attr('d', arc)
				.attr('fill',(d,i)=>colors(i))
				.attr('stroke', 'white')
				.on('mouseover', (e,d)=>{
					tooldiv.style('visibility','visible')
							.text(`${d.data.name}: ${d.data.powerUsage.value} ${d.data.powerUsage.unit}`)
				})
				.on('mousemove', (e,d)=>{
					tooldiv.style('top', (e.pageY-50) + 'px')
							.style('left', (e.pageX-50) + 'px')
				})
				.on('mouseout',()=>{
					tooldiv.style('visibility','hidden')
				})

	})

	return (
		<div id='chartArea'>
			<svg ref={pieChart}></svg>
		</div>
	)
}

export default Piechart;