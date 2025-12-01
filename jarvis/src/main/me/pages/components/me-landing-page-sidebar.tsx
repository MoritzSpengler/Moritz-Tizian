import './me-landing-page-sidebar.css'
import { MeWeToggleButton } from "../../../components/toggle-button";
import { AddEvent } from "./add-event";
import type { Dayjs } from 'dayjs';

interface LandingPageHeaderProps {
  onAddEvent: (title: string, date: Dayjs, startTime?: Dayjs, endTime?: Dayjs) => void;
}

 export function LandingPageHeader({ onAddEvent }: LandingPageHeaderProps) {
     return (
         <div className="me-sidebar-container">
            <div>
                <MeWeToggleButton />
            </div>
            <div className="add-event-button-wrapper">
                <AddEvent onSave={onAddEvent} />
            </div>
         </div>
     );
 }