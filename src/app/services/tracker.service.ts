import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(
    private http: HttpClient
  ) { }

	// API_URL = 'https://localhost:44375';
	API_URL = 'https://trackerapitest.herokuapp.com';

	getTrackerDataForTrackerId(trackerId: string){
		return this.http.get(`${this.API_URL}/api/Tracker/${trackerId}`)
		.pipe(map((res: any) => res), catchError(this.handleError));
	}



	handleError(error: HttpErrorResponse){
		let errorMessage = 'Unknown Error!';
		if(error.error instanceof ErrorEvent){
			errorMessage = `Error: ${error.error.message}`;
		}else{
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
