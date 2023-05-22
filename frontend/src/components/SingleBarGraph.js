import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function SingleBarGraph(props) {
    const {dataset , labels} = props
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display:false,
            },
        },
    };

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataset,
                backgroundColor: "rgba(40, 99, 236)",
                barThickness:25,
                borderRadius: 7,
                
            },
        ],
    };
    return (
        <>
            <div style={{ margin: "0 auto 30px" }} className='w-4/5'>
                <Bar options={options} data={data} />
            </div>
        </>
    );
}

export default SingleBarGraph;