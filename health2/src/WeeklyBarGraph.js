// WeeklyBarGraph.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-chart-kit';

const WeeklyBarGraph = ({ data }) => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={300}
        height={190}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero
        showBarTops={false}
        withInnerLines={false}
        withOuterLines={false}
        style={styles.chart}
        decorator={() => (
          <Grid
            belowChart={true}
            svg={{
              stroke: 'rgba(0,0,0,0.4)',
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    // backgroundColor:'blue'

  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    // alignItems:'center'
  },
});

export default WeeklyBarGraph;
