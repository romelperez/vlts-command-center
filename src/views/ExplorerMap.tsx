/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { ReactElement, useRef, useEffect } from 'react';
import type { Map as MapType, View as MapViewType } from 'ol';
import type { Vector as VectorType } from 'ol/source';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import { Circle, Fill, Stroke, Style } from 'ol/style';

import { DataFacility } from '@app/types';

interface ExplorerMapProps {
  className?: string;
  facilities: DataFacility[];
}

const ExplorerMap = (props: ExplorerMapProps): ReactElement => {
  const { className, facilities } = props;

  const theme = useTheme();
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapType | null>(null);
  const mapViewRef = useRef<MapViewType | null>(null);
  const mapVectorSourceRef = useRef<VectorType | null>(null);

  useEffect(() => {
    const mapElement = mapElementRef.current as HTMLDivElement;

    const mapView = new View({
      center: fromLonLat([0, 0]),
      zoom: 10
    });

    const vectorSource = new VectorSource();

    const map = new Map({
      target: mapElement,
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: ''
          })
        }),
        new VectorLayer({
          source: vectorSource
        })
      ],
      view: mapView
    });

    mapRef.current = map;
    mapViewRef.current = mapView;
    mapVectorSourceRef.current = vectorSource;
  }, []);

  useEffect(() => {
    const mapView = mapViewRef.current;
    const vectorSource = mapVectorSourceRef.current;

    if (!vectorSource) {
      return;
    }

    const facilitiesFeatures = facilities.map((facility) => {
      const [lat, lon] = facility.coord;

      const feature = new Feature({
        geometry: new Point(fromLonLat([lon, lat]))
      });

      const stroke = new Stroke({
        color: theme.palette.primary.main,
        width: 2
      });

      const fill = new Fill({
        color: theme.palette.secondary.main
      });

      feature.setStyle(
        new Style({
          image: new Circle({
            stroke,
            fill,
            radius: 10
          }),
          stroke,
          fill
        })
      );

      return feature;
    });

    const coords = facilities.map((facility) => facility.coord);
    const minLat = coords.map((c) => c[0]).reduce((m, c) => Math.min(m, c));
    const maxLat = coords.map((c) => c[0]).reduce((m, c) => Math.max(m, c));
    const minLon = coords.map((c) => c[1]).reduce((m, c) => Math.min(m, c));
    const maxLon = coords.map((c) => c[1]).reduce((m, c) => Math.max(m, c));
    const facilitiesContainerFeature = new Polygon([
      [fromLonLat([minLon, minLat]), fromLonLat([maxLon, maxLat])]
    ]);

    vectorSource?.clear();
    vectorSource?.addFeatures(facilitiesFeatures);
    mapView?.fit(facilitiesContainerFeature, {
      padding: [100, 100, 100, 100]
    });
  }, [facilities]);

  return (
    <div
      ref={mapElementRef}
      className={className}
      css={{ width: '100%', height: '100%' }}
    />
  );
};

export type { ExplorerMapProps };
export { ExplorerMap };
