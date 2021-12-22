import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { SaveWorkingPlace_ng } from '../../services/service'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: 'auto',
  left: '50%',
  right: 'auto',
  bottom: '0px',
  marginRight: '-50%',
  width: '100%',
  height: '55%',
  transform: 'translate(-50%, 0%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
  pt: 4,
  borderRadius: '5% 5% 0 0',
  overflowY:'scroll' as 'scroll'
};


const boxCenter = {
    display: 'flex',
    justifyContent: 'center'
}

const app = () => {
    const [open, setOpen] = useState(false);
    const [workingPlace, setWorkingPlace] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const inputWorkingPlace = (e: any) => {
        setWorkingPlace(e.target.value);
        handleClose();
    }

    const saveWorkingPlace = () => {
        SaveWorkingPlace_ng({workingPlace});
        setWorkingPlace('');
    }


  return (
    <div>
        <form>
            <TextField id="working_place" onClick={handleOpen} placeholder = 'Open modal' sx = {{ m: 1}} value={workingPlace} />
            <Button variant="contained" size="large" disabled={workingPlace == ""} type='submit' onClick={saveWorkingPlace} sx = {{ mt: 2}}>登録する</Button>
        </form>
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modalStyle}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} >
                ご利用にあたって
                <br />
                ご希望の勤務地を指定ください
            </Typography>
            <Typography sx={{  mt: 2 , textAlign: 'center' , fontSize: 14}}>
                勤務地に合わせた求人情報を紹介いたします。
                <br />
                ※後からの変更も可能です
            </Typography>



            <Box sx={{ '& button': { m: 1 , width: '40%' } , mt:1 }}>
                <Box sx={boxCenter}>
                <Box sx={boxCenter}>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='関東' >
                        関東
                    </Button>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='関西'>
                        関西
                    </Button>
                </Box>
                <Box sx={boxCenter}>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='東海'>
                        東海
                    </Button>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='北海道/東北'>
                        北海道/東北
                    </Button>
                </Box>
                <Box sx={boxCenter}>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='甲信越/北陸'>
                        甲信越/北陸
                    </Button>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='中国/四国'>
                        中国/四国
                    </Button>
                </Box>
                <Box sx={boxCenter}>
                    <Button variant="contained" size="large" onClick={inputWorkingPlace} value='九州/沖縄'>
                        九州/沖縄
                    </Button>
                    <Button variant="contained" size="large">
                        GPSを取得
                    </Button>
                </Box>
            </Box>
            <Button onClick={handleClose} 
                sx={{ mt: 1 , 
                    top: 'auto',
                    left: '50%',
                    right: 'auto',
                    bottom: '0%',
                    transform: 'translate(-50%, 0%)',
                }}>
                スキップする
            </Button> 
        </Box>
    </Modal>
    </div>
  );
}


export default app


