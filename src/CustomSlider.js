import ReactDOM from 'react-dom';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography'

const marks = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },

]

function CustomSlider (props) {
  return (
    <div>
      <Typography>Test Slider</Typography>
      <Slider defaultValue={0} marks={marks} step={1} min={0} max={10}/>
    </div>
  )

} 

export default CustomSlider;