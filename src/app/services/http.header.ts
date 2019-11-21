import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const httpHeader = {
  headers: new HttpHeaders({
    Authorization: environment.apiKey,
    'content-type': 'application/json'
  })
};
