/**
 * Groups all items in an Object with string keys and values from array param
 * @param array Items of the group to be divided by key
 * @param getKey Function (generic Type) to take the key, this we can modify the key
 * @return {key: values[]} Record lets you create a new type from a Union. The values in the Union are used as attributes of the new type
 */
export const groupBy = <T, K extends keyof any>(
  array: T[],
  getKey: (item: T) => K
) =>
  array.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

/** TODO, not finished
 * Return array data by id fetching url
 * @param arrayData array with the IDs
 * @param fetchDataById Function to fetch the data by id
 * @param idWord key word to select the id data that we want
 * @return array with all the data requested by data id
 */
export const getDataByID = (arrayData: [], fetchDataById: Function, idWord: string) => {
  let newDataArray: any[] = [];
  arrayData.map((element) => {
    fetchDataById((element as any)[idWord]).then((newDataElement: any) => {
      newDataArray = [...newDataArray, newDataElement];
    });
  });
  return newDataArray;
};
