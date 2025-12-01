import './we-landing-page.css'
import '../../global.css';
import { WeLandingPageSidebar } from './components/we-landing-page-sidebar';


export function WeLandingPage() {
    return (
        <div className="header">
            <div className="landingPage">
                <WeLandingPageSidebar />
            </div>
        </div>
    );
}