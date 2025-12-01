import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";

interface AddEventProps {
    onSave: (title: string, date: Dayjs, startTime?: Dayjs, endTime?: Dayjs) => void;
}

export function AddEvent({ onSave }: AddEventProps) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState<Dayjs | undefined>(undefined);
    const [startTime, setStartTime] = useState<Dayjs | undefined>(undefined);
    const [endTime, setEndTime] = useState<Dayjs | undefined>(undefined);

    const handleClose = () => {
        setOpen(false);
    }

    const resetFields = () => {
        setTitle('');
        setDate(undefined);
        setStartTime(undefined);
        setEndTime(undefined);
    };

    const handleSave = () => {
        if (title && date) {
        onSave(title, date, startTime, endTime);
        handleClose();
        resetFields();
        } 
    };


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
                    <TextField 
                        label="Event Name" 
                        fullWidth 
                        margin="normal" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div style={{ marginBottom: '8px'}}>
                            <DatePicker 
                                label="Event Date" 
                                value={date}
                                onChange={(newValue) => setDate(newValue || undefined)}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <TimePicker 
                                label="Start Time" 
                                value={startTime}
                                onChange={(newValue) => setStartTime(newValue || undefined)}
                            />
                            <TimePicker 
                                label="End Time" 
                                value={endTime}
                                onChange={(newValue) => setEndTime(newValue || undefined)}
                            />
                        </div>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}