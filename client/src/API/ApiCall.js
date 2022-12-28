import axios from 'axios';

export const GetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export const PostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const PutRequest = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteRequest = async (url) => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    return error;
  }
};
