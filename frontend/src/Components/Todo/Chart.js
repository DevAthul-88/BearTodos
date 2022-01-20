
import React from "react";
import {Heading} from '@chakra-ui/react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";





export default function Chart({data}) {

    const data01 = [
        { name: "Total", value: data.total },
        { name: "Completed", value: data.finished },
        { name: "Pending", value: data.unFinish },
        
      ];

  return (
   <React.Fragment>
       <Heading marginTop={"5"}>
           Data Via Chart
       </Heading>
        <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      
      <Tooltip />
    </PieChart>
   </React.Fragment>
  );
}
