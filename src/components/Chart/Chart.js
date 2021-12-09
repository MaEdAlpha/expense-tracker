import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totlMaxValue = Math.max(...dataPointValues);
    
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                    return (
                        <ChartBar 
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totlMaxValue}
                            label={dataPoint.label}
                         />
                    )
                })
            }
        </div>
    )
}

export default Chart;