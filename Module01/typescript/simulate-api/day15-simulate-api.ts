// simulasi pemanggilan api menggunakan jsontypicode
// -- tanpa class

// interface Data {
//   userId: number;
//   id?: number;
//   title: string;
//   body?: string;
// }

// async function displayApi(url: string) {
//   try {
//     const result = await fetch(url);
//     const data: Data[] = await result.json();
//     console.log(data);
//     data.map((item: Data) => {
//       getInformation(item);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// function getInformation(data: Data) {
//   let result: Data = {
//     userId: data.userId,
//     title: data.title,
//   };
//   console.log(result);
// }

// const api_url = "https://jsonplaceholder.typicode.com/posts";
// console.log(displayApi(api_url));

// -- menggunakan class

interface Data {
  userId: number;
  id?: number;
  title: string;
  body?: string;
}

class APIService {
  api_url: string;

  constructor(api_url: string) {
    this.api_url = api_url;
  }

  async fetchData() {
    try {
      const response = await fetch(this.api_url);
      const data: Data[] = await response.json();
      this.displayData(data);
    } catch (error) {
      console.log(error);
    }
  }

  displayData(data: Data[]) {
    data?.map((item: Data) => {
      console.log("Post ID : " + item.id + ", Title : " + item.title);
    });
  }
}

const apiService = new APIService("https://jsonplaceholder.typicode.com/posts");
apiService.fetchData();
