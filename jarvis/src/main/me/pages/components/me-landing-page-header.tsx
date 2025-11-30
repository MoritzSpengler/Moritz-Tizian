import './me-landing-page-header.css'
import { MeWeToggleButton } from "../../../components/toggle-button";
import { AddEvent } from "./add-event";


 export function LandingPageHeader() {
     return (
         <div className="header">
            <div>
                <MeWeToggleButton />
            </div>
            <div className="add-event-button-wrapper">
                <AddEvent />
            </div>
         </div>
     );
 }