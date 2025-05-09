## GitHub Copilot Chat

- Extension Version: 0.26.7 (prod)
- VS Code: vscode/1.99.3
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 50.7.87.84 (1 ms)
- DNS ipv6 Lookup: Error (0 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (0 ms)
- Electron fetch (configured): HTTP 200 (275 ms)
- Node.js https: HTTP 200 (242 ms)
- Node.js fetch: HTTP 200 (294 ms)
- Helix fetch: HTTP 200 (325 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 50.7.85.221 (1 ms)
- DNS ipv6 Lookup: Error (2 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): Error (2339 ms): Error: net::ERR_CONNECTION_REFUSED
    at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10511)
    at SimpleURLLoaderWrapper.emit (node:events:518:28)
- Node.js https: Error (2358 ms): Error: connect ECONNREFUSED 50.7.85.221:443
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1611:16)
- Node.js fetch: Error (2361 ms): TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at hM._fetch (c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:784:25942)
    at c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:815:134
    at vw.h (file:///c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:111:41495)
  Error: connect ECONNREFUSED 50.7.85.221:443
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1611:16)
- Helix fetch: Error (2382 ms): FetchError: connect ECONNREFUSED 50.7.85.221:443
    at nut (c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:304:29579)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at $Sr (c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:304:31605)
    at mS.fetch (c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:785:2495)
    at c:\Users\123\.vscode\extensions\github.copilot-chat-0.26.7\dist\extension.js:815:134
    at vw.h (file:///c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:111:41495)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).