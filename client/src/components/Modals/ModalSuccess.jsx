import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Modal } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const ModalSuccess = ({ openModal = false, id }) => {
    const [open, setOpen] = useState(openModal);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        navigate('/');
    };

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ backdropFilter: 'blur(5px)' }}
            >
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        <CheckIcon color='success' sx={{ marginRight: 2 }} />
                        Your order is accepted
                    </Typography>
                    <Typography variant='subtitle2'>Your order id:</Typography>
                    <Typography variant='subtitle1'>{id}</Typography>
                </Box>
            </Modal>
        </>
    );
};

export default ModalSuccess;
