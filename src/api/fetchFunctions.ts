export const basicFetch = async <returnType>(
  urlEndpoint: string
): Promise<returnType> => {
  const response = await fetch(urlEndpoint);

  if (!response.ok) {
    throw new Error(`Error status ${response.status}`);
  }

  const data = await response.json();

  return data;
};
