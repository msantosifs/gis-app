export interface Coordinates {
  latitude: number;
  longitude: number;
}
export interface City {
  id: number;
  name: string;
  coordinates: Coordinates
}
