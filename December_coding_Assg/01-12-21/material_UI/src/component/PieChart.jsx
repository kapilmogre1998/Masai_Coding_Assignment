import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui'
import { Grid } from '@material-ui/core';
import { padding } from '@mui/system';



export const PieChartSeries = () => {
    const data = [
        { country: 'Russia', area: 12 },
        { country: 'Canada', area: 7 },
        { country: 'USA', area: 7 },
        { country: 'China', area: 7 },
        { country: 'Brazil', area: 6 },
        { country: 'Australia', area: 5 },
        { country: 'India', area: 2 },
        { country: 'Others', area: 55 }
    ];
    return (
        <Paper style={{padding:"10px"}}>
        <Chart
          data={data} 
        >
          <PieSeries
            valueField="area"
            argumentField="country"
            outerRadius="0.7"
          />
        </Chart>
        <Grid container >
             <Grid item xs={4} >
               completed <br />
               <h1>77%</h1>
             </Grid>
             <Grid item xs={4} >
               Pending <br />
               <h1>15%</h1>
             </Grid>
             <Grid item xs={4} >
               not started <br />
               <h1>8%</h1>
             </Grid>
        </Grid>
      </Paper>
    )
}
