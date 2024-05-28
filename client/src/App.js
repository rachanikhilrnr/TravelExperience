import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [place,setPlace] = useState();
  const [date,setDate] = useState();
  const [budget,setBudget] = useState();
  const [content,setContent] = useState();
  const [post,setPost] = useState([]);

  axios.default.withCredentials = true;
  
  useEffect(() => {
    axios.get("https://backend-zeta-lovat.vercel.app/post")
    .then(posts => {setPost(posts.data)})
    .catch(err => {console.log(err)})
  },[]);
  
  const submitForm=() => {
    axios.post("https://backend-zeta-lovat.vercel.app/post",{place,date,budget,content})
  }
  return (
    <>
          <center>
            <form onSubmit={submitForm}>
              <input type="text" placeholder="place" onChange={(e) => setPlace(e.target.value)}></input><br></br>
              <input type="date" placeholder="date" onChange={(e) => setDate(e.target.value)}></input><br></br>
              <input type="text" placeholder="budget" onChange={(e) => setBudget(e.target.value)}></input><br></br>
              {/* <input type="textfield" placeholder="Write your experience" onChange={(e) => setContent(e.target.value)}></input><br></br> */}
              <textarea rows={5} cols={50} placeholder="Write your experience" onChange={(e) => setContent(e.target.value)}></textarea>
              <button type="submit">Post</button>
            </form>
          </center>
      {
        post.map((data) => {
          return(
          <>
            <table>
              <th>
                <td color="red">{data.place}</td>
                <td>{data.budget}</td>
                <td>{data.date}</td>
              </th>
              <tr>
                <td>{data.content}</td>
              </tr>
            </table>
            
          </>
          )
        })
      }
    </>
  );
}

export default App;
