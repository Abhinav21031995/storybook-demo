import './App.scss';
import { useState } from 'react';
import { Button } from '../components/Button';
import { default as MatButton } from '@mui/material/Button';
import { default as MatFormControlLabel } from '@mui/material/FormControlLabel';
import { default as MatCheckbox } from '@mui/material/Checkbox';

function App() {
  const [checked, setChecked] = useState(true);

  

  return (
    <div className="App">
      <Button label="Storybook Button" />
      <MatButton variant="contained" color="primary">
        MUI Button
      </MatButton>
      <MatFormControlLabel
        control={
          <MatCheckbox
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            color="primary"
          />
        }
        label="MUI Checkbox"
      />
    </div>
  );
}

export default App;
