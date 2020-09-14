import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { get, post } from '../utils/axios-instance';

const useApiRequest = (
  endpoint,
  { verb = 'get', params = {}, token = null } = {}
) => {
  const history = useHistory();

  const makeRequest = useCallback(
    async (callBack) => {
      if (verb === 'get') {
        await get(endpoint, token)
          .then((response) => {
            callBack(response);
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 401) {
                callBack(error.response);
                setTimeout(() => {
                  // burda refresh token alınıp tekrar aynı request atılığ kaldıgı yerden devam edilebilir.
                  history.push(`/login`);
                }, 500);
              }
            } else {
              alert('Network Error');
            }
          });
      } else if (verb === 'post') {
        console.log('params', params);
        await post(endpoint, params, token)
          .then((response) => {
            callBack(response);
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              if (error.response.status === 401) {
                callBack(error.response);
                history.push(`/login`);
              }
            } else {
              alert('Network Error');
            }
          });
      }
    },
    [endpoint, verb, params]
  );
  return [makeRequest];
};
export default useApiRequest;
