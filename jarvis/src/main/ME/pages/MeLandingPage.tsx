import { MeWeToggleButton } from '../../components/Toggle-Button'
import './MeLandingPage.css'

export function MeLandingPage() {

    return (
        <div className="container">
            <h1>Me Landing Page</h1>
            <div className="toggle-button-wrapper">
                <MeWeToggleButton />
            </div>
        </div>
    )
}