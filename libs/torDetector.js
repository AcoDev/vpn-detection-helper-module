let torExitNodeSet = new Set();

export function loadTorList(set) {
  torExitNodeSet = set;
}

export function isTorIP(ip) {
  return torExitNodeSet.has(ip);
}