type APIProps = {
  baseURL: string;
};

const ApiService = (props: APIProps) => {
  const fetch = async (endPoint: string): Promise<any> => {
    const response = await fetch(props.baseURL + endPoint);
    return await response.json();
  };
  fetch("");
};

export default ApiService;
