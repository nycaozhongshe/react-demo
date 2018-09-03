import request from '@/utils/request';
import { baseUrl } from './config';

//根据公司名模糊查询
export function getCompanyList({ }, params) {
  return request.post(baseUrl + '/company/selectCompanyList', params);
}

//根据公司名模糊查询 数据来源 企查查
export function getCompanyListByQichacha({ }, params) {
  return request.post(baseUrl + '/company/selectCompanyListByQichacha', params);
}

//
export function updateCompany({ }, params) {
  return request.post(baseUrl + '/company/updateCompany', params);
}

//根据公司名模糊查询
export function getPublishCompanyList({ }, params) {
  return request.post(baseUrl + '/company/getCompanyRelease', params);
}
