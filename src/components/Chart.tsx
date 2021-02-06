import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import data from '../library/sampleData';

type Props = {
  hello: string;
};

const Chart = (props: Props) => {
  return (
    <VictoryChart
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      domainPadding={20}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />
      <VictoryLine data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};

export default Chart;
