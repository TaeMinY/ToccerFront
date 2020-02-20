import axios from "axios"
const url = "http://localhost:4000"
function Post(path: string, data: object): object {
  return new Promise((resolve, reject) => {
    axios
      .post(url + path, data)
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
