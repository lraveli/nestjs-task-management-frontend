import { drainContent } from './util';

const apiEndpoint = '/api/signin';

const signIn = async (username, password) => {
  console.log('test');
  console.log(`BASE: ${process.env.REACT_APP_BASE_URL}`);
  console.log(`HOST: ${process.env.REACT_APP_HOST_URL}`);
  const res = await fetch(apiEndpoint, {
    headers: {
      ['Content-Type']: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

  const content = await drainContent(res);

  if (!res.ok) {
    throw new Error(content?.message ?? content);
  }

  return content?.accessToken;
};

export default signIn;
