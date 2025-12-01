import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slider, Typography } from '@mui/material';
import { JButton } from '../../../components/default-button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';

export function SelectEventTimeComponent() {
    const defaultValue = 1;
    const step = 0.5;
    const minDuration = 1;
    const maxDuration = 24;
    const marks = [
        { value: 1, label: '1h' },
        { value: 24, label: '24h' },
    ];

    const [open, setOpen] = useState(false);
    const [endDate, setEndDate] = useState<Dayjs | undefined>(undefined);
    const [duration, setDuration] = useState<number | undefined>(undefined);
    const [site, setSite] = useState<number>(1);

    const handleDurationChange = (_event: Event, value: number) => {
        setDuration(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (site == 1) {
            setSite(2);
        } else {
            setOpen(false);
        }
    };

    const resetSite = () => {
        setSite(1);
    };

    return (
        <>
            <JButton label='Select Friend' color='primary' size='large' onClick={() => setOpen(true)} />
            <Dialog open={open} onTransitionExited={resetSite}>
                <DialogTitle children="Select Event Time" />
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
                <DialogContent dividers sx={{ paddingTop: '40px' }}>
                    {site === 1 ? (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography gutterBottom children="Duration" sx={{ marginTop: '4px' }}/>
                                <Slider
                                    defaultValue={defaultValue}
                                    step={step}
                                    valueLabelDisplay='auto'
                                    marks={marks}
                                    min={minDuration}
                                    max={maxDuration}
                                    value={duration}
                                    onChange={handleDurationChange}
                                    sx={{ width: '500px'}}
                                />
                            </div>
                            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                                <Typography gutterBottom children='Search until' />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker 
                                        label="End Date" 
                                        value={endDate}
                                        onChange={(newValue) => setEndDate(newValue || undefined)}
                                    />
                                </LocalizationProvider>
                            </div>
                        </>   
                    ) : (
                        <>
                            <div>
                                Events
                            </div>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    { site === 1 ? (
                        <JButton label='Next' color='primary' size='medium' onClick={handleSave} variant='text' />
                    ) : (
                        <JButton label='Save' color='primary' size='medium' onClick={handleSave} variant='text' />
                    )}
                </DialogActions>
            </Dialog>
        </>
    );
}