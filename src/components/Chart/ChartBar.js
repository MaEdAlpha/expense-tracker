import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
    let barHeight = '0%';

    if(props.maxValue > 0){
        barHeight = Math.round( (props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                {barHeight !== '0%' && <span className='chart-bar__percent'>{barHeight} </span>}
                <div className='chart-bar__fill' style={{height:barHeight}}>
                </div>
            </div>
                <div className='chart_bar___label'>{props.label} <br /></div>
        </div>
    ) 
}  

export default ChartBar;