import { fetchTorExitNodes } from './libs/fetchTorList.js';
import { isTorIP, loadTorList } from './libs/torDetector.js';
import { detectVPN } from './libs/vpnDetector.js';

export async function analyzeIPPrivacy(ip) {
  if (!ip || typeof ip !== 'string') throw new Error('Invalid IP');

  const torList = await fetchTorExitNodes();
  loadTorList(torList);
  const vpnInfo = await detectVPN(ip);

  return {
    ip,
    isTor: isTorIP(ip),
    isVPN: vpnInfo.isProxy || vpnInfo.isHosting,
    isProxy: vpnInfo.isProxy,
    isHosting: vpnInfo.isHosting,
    isp: vpnInfo.isp,
    org: vpnInfo.org,
    isMobile: vpnInfo.isMobile,
    totalTorNodes: torList.size
  };
}