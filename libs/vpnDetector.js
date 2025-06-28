import axios from 'axios';

export async function detectVPN(ip) {
  try {
    const { data } = await axios.get(`http://ip-api.com/json/${ip}?fields=proxy,hosting,org,isp,mobile`);
    return {
      isProxy: data.proxy || false,
      isHosting: data.hosting || false,
      isp: data.isp || '',
      org: data.org || '',
      isMobile: data.mobile || false
    };
  } catch (err) {
    console.error('VPN detection failed:', err.message);
    return {
      isProxy: false,
      isHosting: false,
      isp: '',
      org: '',
      isMobile: false
    };
  }
}