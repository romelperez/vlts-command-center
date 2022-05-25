export interface DataFacility {
  id: string;
  name: string;
  coord: [number, number];
  reading?: number;
  updatedAt?: string;
}

export interface DataOrganization {
  id: string;
  name: string;
}

export interface DataOrganization_WithFacilities extends DataOrganization {
  facilities: DataFacility[];
}
