import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '50%',
  borderRadius: '5px',
  boxShadow: 2,
  p: 4,
  backgroundColor: 'white',
  display: 'flex',
};

export default function ModalWindow(params) {
  const { open, setOpen } = params;

  const dataIdMovie = useSelector((state) => state.loadingMovies.selectedMovie);

  const handleClose = () => {
    
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          labelled="modal-modal-title"
          described="modal-modal-description">
          {dataIdMovie ? (
            <Box sx={style}>
              <Box>
                <img
                  src={dataIdMovie.poster.previewUrl}
                  alt=""
                />
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  component="h3">
                  {dataIdMovie.name}
                </Typography>
              </Box>
            </Box>
          ) : (
            <CircularProgress />
          )}
        </Modal>
      )}
    </div>
  );
}
