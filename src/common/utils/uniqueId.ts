let idCounter = 0;

export type UniqueIdItem<T> = {
  clientId: string;
  item: T;
};

export const uniqueId = (prefix?: string): string => {
  const id = idCounter++;
  return prefix ? `${prefix}-${id}` : id.toString();
};

export const uniqueIdItems = <T>(items: T[], prefix?: string): UniqueIdItem<T>[] => {
  if (!items) {
    return [];
  }
  const id = uniqueId(prefix);
  return items.map((item, index) => ({
    clientId: `${id}-${index}`,
    item,
  }));
};
