export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Response received from API');
    } else {
      reject(new Error('Failed to fetch response from API'));
    }
  });
}
