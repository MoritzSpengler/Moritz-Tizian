import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

export function MeWeToggleButton() {
    const ME = 'Me';
    const WE = 'We';
    
    const navigate = useNavigate();
    const location = useLocation();

    const currentValue = location.pathname === '/we' ? WE : ME;

    const handleAlignment = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment === null) {
            return;
        }

        if (newAlignment === ME) {
            navigate('/');
        } else if (newAlignment === WE) {
            navigate('/we');
        }
    };

    return (
        <ToggleButtonGroup
            value={currentValue}
            exclusive
            onChange={handleAlignment}
        >
            <ToggleButton value={ME}>{ME}</ToggleButton>
            <ToggleButton value={WE}>{WE}</ToggleButton>
        </ToggleButtonGroup>
    );
}