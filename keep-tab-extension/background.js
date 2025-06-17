function isValidBaseUrl(url) {
    try {
      const parsed = new URL(url);
      return (
        (parsed.protocol === "http:" || parsed.protocol === "https:") &&
        parsed.hostname &&
        parsed.hostname.includes(".")
      );
    } catch {
      return false;
    }
  }
  
  function enforceTabControl() {
    chrome.storage.local.get(["targetUrl", "enabled"], (data) => {
      if (!data.enabled || !isValidBaseUrl(data.targetUrl)) return;
  
      chrome.tabs.query({}, (tabs) => {
        const matchingTabs = tabs.filter(tab => tab.url.startsWith(data.targetUrl));
        const nonMatchingTabs = tabs.filter(tab => !tab.url.startsWith(data.targetUrl));
  
        // Only remove non-matching tabs if there's at least one good tab open
        if (matchingTabs.length > 0 && nonMatchingTabs.length > 0) {
          for (const tab of nonMatchingTabs) {
            chrome.tabs.remove(tab.id);
          }
        }
      });
    });
  }  
  
  // Run every second if enabled
  setInterval(enforceTabControl, 1000);
  