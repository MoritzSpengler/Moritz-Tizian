import { MeWeToggleButton } from "../../components/Toggle-Button";
import './WeLandingPage.css'
import '../../global.css'


export function WeLandingPage() {
    return (
        <div className="header">
            <h1>We Landing Page</h1>
            <div className="toggle-button-wrapper">
                <MeWeToggleButton />
            </div>
        </div>
    );
}