export interface IDistricts {
  id: number;
  name: string;
  regency_id: number;
}

export interface IProvince {
  id: number;
  name: string;
}

export interface IRegencies {
  id: number;
  name: string;
  province_id: number;
}

export interface IResponseData {
  districts: IDistricts[];
  provinces: IProvince[];
  regencies: IRegencies[];
}
