import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardComp = () => {
    return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="body2" textAlign="left" component="div">
          PROBLEM COMPLETED TODAY
        </Typography>
        <Typography variant="h5" textAlign="left" >
          6
        </Typography>
        <Typography variant="body2" textAlign="left" color="text.secondary">
          <Typography><span style={{color:"green"}}>24%</span> increase from yesterday</Typography>

        </Typography>
      </CardContent>
    </Card>
    )
}
