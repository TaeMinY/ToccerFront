import axios from "axios"

function Post(url: string, data: object): object {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000" + url, data)
      .then(result => {
        console.log(result)
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default { Post }
