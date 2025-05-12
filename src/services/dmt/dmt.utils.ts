export const isEmpty = (value: any): boolean => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim().length === 0) ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
    );
  };
  
  export const maskSensitive = (data: string, visible = 4): string => {
    if (!data || data.length <= visible) return data;
    return "*".repeat(data.length - visible) + data.slice(-visible);
  };