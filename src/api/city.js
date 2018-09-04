import request from '@/utils/request';
import { baseUrl } from './config';

export function getRecruitCityList(params) {
  return request.get(baseUrl + '/city/list', { params: params });
}

export function createOrUpdateRecruitCity(params) {
  return request.post(baseUrl + '/city/save', params);
}

export function delRecruitCity(params) {
  return request.post(baseUrl + '/city/save', params);
}
