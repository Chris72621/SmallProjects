function enforceTabControl() {
    chrome.storage.local.get(["targetUrl", "enabled"], (data) => {
      if (!data.enabled || !data.targetUrl) return;
  
      chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
          if (tab.url !== data.targetUrl) {
            chrome.tabs.remove(tab.id);
          }
        }
      });
    });
  }
  
  // Run every 3 seconds if enabled
  setInterval(enforceTabControl, 1000);
  