import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Link, useLocation } from "react-router";

export function MeWeToggleButton() {
    const ME = 'Me';
    const WE = 'We';
    
    const location = useLocation(); // Hook to access the current route

    const currentLandingPage = location.pathname === '/we' ? WE : ME;

    return (
        <ToggleButtonGroup
            value={currentLandingPage}
            exclusive
        >
            <ToggleButton value={ME} component={Link} to="/" children={ME} sx={{ textTransform: 'none' }} />
            <ToggleButton value={WE} component={Link} to="/we" children={WE} sx={{ textTransform: 'none' }} />
        </ToggleButtonGroup>
    );
}