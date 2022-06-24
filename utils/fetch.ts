export const post = async (url: string, data: any) => {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const put = async (url: string, data: any) => {
  return await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const get = async (url: string) => {
  return await fetch(url, {
    method: "GET",
  });
};

//  @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
