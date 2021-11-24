import { HttpParams } from "@angular/common/http";

export const generateQueryStrings = (data: any): HttpParams | {} => {
    if (!data) {
      return {};
    }
    let customParams: HttpParams = new HttpParams();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && !!data[key]) {
        customParams = customParams.append(key, data[key.toString()]);
      }
    }
    return customParams;
  }