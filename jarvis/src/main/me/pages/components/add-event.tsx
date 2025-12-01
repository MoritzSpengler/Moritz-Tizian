import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function AddEvent() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Fab 
                children={<Add fontSize="large" />} 
                color="primary" 
                size="medium" 
                onClick={() => setOpen(true)} 
            />
            <Dialog open={open}>
                <DialogTitle>Add Event</DialogTitle>
                <IconButton
                    onClick={handleClose}
                    sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <TextField label="Event Name" fullWidth margin="normal" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div style={{ marginBottom: '8px'}}>
                            <DatePicker label="Event Date" />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <TimePicker label="Start Time" />
                            <TimePicker label="End Time" />
                        </div>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}