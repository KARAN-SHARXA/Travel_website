import type { Station } from './types';
import { STATIONS } from './stations.static';

export type { Station };

export const getStations = (): Station[] => {
  return STATIONS;
};

export const getActiveStations = (): Station[] => {
  return getStations()
    .filter(s => s.active)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 6);
};

export const getStationById = (id: string) => {
  return getStations().find(s => s.id === id);
};

export const getStationByName = (name: string) => {
  return getStations().find(s => s.name === name);
};
