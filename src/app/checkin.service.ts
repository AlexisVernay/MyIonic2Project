private checkinUrl = 'http://checkin-api.dev.cap-liberte.com/checkin';  // URL to web api

constructor(private http: Http) { }

getHeroes(): Promise<Checkin[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Checkin[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
