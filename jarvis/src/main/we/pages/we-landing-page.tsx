import './we-landing-page.css'
import '../../global.css';
import { WeLandingPageSidebar } from './components/we-landing-page-sidebar';
import { SelectEventTimeComponent } from './components/select-event-time-component';


export function WeLandingPage() {
    return (
        <>
            <div className="landingPage">
                <div className="landingPageHeader">
                    <WeLandingPageSidebar />
                </div>
                <div className='we-landing-page-body'>
                    <div className='button-container'>
                        <SelectEventTimeComponent />
                    </div>
                </div>
            </div>
            
        </>
        
    );
}