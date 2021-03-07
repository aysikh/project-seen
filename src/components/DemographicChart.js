import Chart from "react-google-charts";

export default function demographicChart() {

  return(
    <div style={{ display: 'flex', maxWidth: 900 }}>
  <Chart
    width={450}
    height={400}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Year', '2019'],
      ['White', 3890],
      ['Asian', 2041],
      ['Black', 1242],
      ['Hispanic', 422],
      ['Native American', 100],
    ]}
    options={{
      title: 'Demographic Chart',
      chartArea: { width: '60%' },
      hAxis: {
        title: 'Race',
        minValue: 0,
      },
      vAxis: {
        title: '# of People',
      },
    }}
    legendToggle
  />
</div>
  )
  
}