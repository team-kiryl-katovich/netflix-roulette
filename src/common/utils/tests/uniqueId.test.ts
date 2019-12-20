import { uniqueIdItems, uniqueId } from '../uniqueId';

describe('[COMMON] [UTILS] [UNIQUE_ID]', () => {
  test('should return id', () => {
    const result = uniqueId(null);
    expect(result).toBe('0');
  });

  test('should return empty array', () => {
    const result = uniqueIdItems(null);
    expect(result).toHaveLength(0);
  });
});
