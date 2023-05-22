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

function DoubleBarGraph(props) {
    const { datasetOne , datasetTwo , labels} = props
    const options = {
        
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels:{
                    boxWidth:12,
                    boxHeight:12,
                    font:{
                        weight:700
                    }
                },
            },
        },
    };

    //   const labels = [
    //     "BRANCH1",
    //     "BRANCH2",
    //     "BRANCH3",
    //     "BRANCH4",
    //     "BRANCH5",
    //     "BRANCH6",
    //     "BRANCH7",
    //     "BRANCH8",
    //     "BRANCH9",
    //     "BRANCH10",
    //   ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Assigned Leads",
                data: datasetOne,
                backgroundColor: "rgba(40, 99, 236)",
                barThickness: 25,
                borderRadius:7
            },
            {
                label: "Converted Leads",
                data:  datasetTwo ,
                backgroundColor: "rgba(255, 73, 73)",
                barThickness: 25,
                borderRadius:7
            },
        ],
    };
    return (
        <>
            <div style={{ margin: "0 auto 30px" }} className='w-4/5'>
                <Bar options={options} data={data} style={{marginBottom:"50px"}} />
            </div>
        </>
    );
}

export default DoubleBarGraph;