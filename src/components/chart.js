import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';
//==================================================
function average(data){
   return _.round(_.sum(data)/data.length);
}
export default (props) => {
   return (
      <div>
         <div>Average: {average(props.data)}°C</div>
         <Sparklines data={props.data} height={120} width={180} margin={6}>
            <SparklinesLine color="#56b45d" />
            <SparklinesSpots style={{ fill: "#56b45d" }} />
            <SparklinesReferenceLine type="avg" />
         </Sparklines>
      </div>
   );
}
