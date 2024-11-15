import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  setCustomValue?: (id: string, value: number) => void;
  detailPage?: boolean;
}

const KakaoMap = ({
  latitude,
  longitude,
  setCustomValue,
  detailPage = false,
}: KakaoMapProps) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage) return; // detailPage에서는 사용하지않음 -> 타입정의 X
    setCustomValue!("latitude", mouseEvent.latLng.getLat()); //   ! : null이나 undefined가 아님을 확신
    setCustomValue!("longitude", mouseEvent.latLng.getLng());
  };
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handleClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
