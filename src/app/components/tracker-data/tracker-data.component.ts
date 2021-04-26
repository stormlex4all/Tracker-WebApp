import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { TrackerData } from 'src/app/shared/TrackerData.model';
import { Marker } from 'src/app/shared/marker.model';

@Component({
  selector: 'app-tracker-data',
  templateUrl: './tracker-data.component.html',
  styleUrls: ['./tracker-data.component.css']
})
export class TrackerDataComponent implements OnInit {

  test: TrackerData;
  markers: Marker[] = [];
  trackerId = '';
  showLoading = false;
  constructor(
    private trackerServ: TrackerService
  ) { }

  ngOnInit(): void {
  }

	getTrackerDataForTrackerId(){
		this.showLoading = true;
		this.trackerServ.getTrackerDataForTrackerId(this.trackerId).subscribe((res: any) => {
			this.showLoading = false;
			this.test = res.result;
			this.markers.push({
				lat: this.test.start_position_lat,
				lng: this.test.start_position_lon,
				label: 'A',
				draggable: false
			});
			this.markers.push({
				lat: this.test.current_asset_position_lat,
				lng: this.test.current_asset_position_lon,
				label: this.test.current_asset_position_name,
				draggable: false
			});
			this.markers.push({
				lat: this.test.destination_lat,
				lng: this.test.destination_lon,
				label: 'C',
				draggable: false
			});
		},(err) => {
			this.showLoading = false;
		})
	}

}
