export const isValidUrl = (url: string): boolean => {
    try {
      const u = new URL(url);
      return !!u.protocol.startsWith("http");
    } catch {
      return false;
    }
  };
  