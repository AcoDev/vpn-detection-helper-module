# VPN Detector Helper

## Installation

```bash
npm install github:acodev/vpn-detection-helper-module
```

## Usage

Import the module and use the main function to analyze an IP address:

```js
import { analyzeIPPrivacy} from '@acodev/vpn-detection-helper-module';

(async () => {
  try {
    const ip = '8.8.8.8';
    const result = await analyzeIPPrivacy(ip);

    console.log(`IP: ${ip}`);
    console.log(`Is VPN: ${result.isVPN}`);
    console.log(`Is Proxy: ${result.isProxy}`);
    console.log(`Is Tor Exit Node: ${result.isTor}`);
    console.log(`ISP: ${result.isp}`);
    console.log(`ASN: ${result.asn}`);
  } catch (error) {
    console.error('Error detecting VPN:', error);
  }
})();
```

## Example

```
{
  ip: '8.8.8.8',                                                                                                                                                                                                        
  isTor: false,
  isVPN: true,
  isProxy: false,
  isHosting: true,
  isp: 'Google LLC',
  org: 'Google Public DNS',
  isMobile: false,
  totalTorNodes: 1247
}
```
