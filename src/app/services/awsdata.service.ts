import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class AwsdataService {

	constructor(private _http: Http) { }

	getRegionsData(data: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('api/regions', JSON.stringify(data), { headers: headers }).map(res => res.json());
	}

	getAllAwsResource(awsdata: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('api/getalldata', JSON.stringify(awsdata), { headers: headers }).map(data => data.json());
	}

	getUniqueProduct(data: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('api/getProductWiseData', JSON.stringify(data), { headers: headers }).map(res => res.json());
	}

	getMinMaxDateRange(index: string) {
		return this._http.get('api/getMinMaxDate/' + index).map((res) => res.json());
	}

	getGroupServicedata(data: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('api/getGroupServicedata', JSON.stringify(data), { headers: headers }).map(res => res.json());
	}



}