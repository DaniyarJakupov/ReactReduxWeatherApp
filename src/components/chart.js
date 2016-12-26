import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default (props) => {
   return (
      <div>
         <Sparklines data={props.data} height={120} width={180} margin={6}>
            <SparklinesLine color={props.color} />
               <SparklinesSpots style={{ fill: "#56b45d" }} />
         </Sparklines>
      </div>
   )
}
