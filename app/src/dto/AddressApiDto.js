export default class AddressApiDto {
  meta: AddressMetaDto;
  documents: [AddressDetailApiDto];
  constructor(data = {}) {
    Object.assign(this, data);
  }
}

class AddressMetaDto {
  total_count;
  pageable_count;
  is_end;
}

class AddressDetailApiDto {
  address_name;
  y;
  x;
  address_type: Address;
  address;
  road_address: RoadAddress;
}

class Address {
  address_name;
  region_1depth_name;
  region_2depth_name;
  region_3depth_name;
  region_3depth_h_name;
  h_code;
  b_code;
  mountain_yn;
  main_address_no;
  sub_address_no;
  x;
  y;
}

class RoadAddress {
  address_name;
  region_1depth_name;
  region_2depth_name;
  region_3depth_name;
  road_name;
  underground_yn;
  main_building_no;
  sub_building_no;
  building_name;
  zone_no;
  y;
  x;
}
