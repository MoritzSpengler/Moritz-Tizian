import { MeWeToggleButton } from '../../components/Toggle-Button'
import './MeLandingPage.css'
import '../../global.css'

export function MeLandingPage() {

    return (
        <div className="header">
            <h1>Me Landing Page</h1>
            <div className="toggle-button-wrapper">
                <MeWeToggleButton />
            </div>
        </div>
    );
}