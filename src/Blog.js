import React,{useEffect, useState} from 'react'

const Blog = () => {
  const [search, setSearch] = useState("");
const [users,setUsers] = useState([])
  const getUser = async()=>{
const response = await fetch("https://jsonplaceholder.typicode.com/posts");

setUsers (await response.json());
// console.log(data)
  }
  useEffect(() => {
   getUser()
  }, [])
  
  return (<>
  {/* <div className="my-1">
        <h1 className="text-center"> Our Blog </h1>
      </div> */}
      <div>
      <div className="search">
        <h3 style={{textAlign:"center",color:"#eb7a34"}}>Search Title</h3>
        <div className="search-grid">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEX19fUAAAD////4+Pj7+/vy8vLU1NTOzs7s7OyFhYXi4uIaGhqqqqpBQUF9fX3IyMjAwMDa2tpbW1ujo6NkZGQhISFpaWmzs7MpKSmcnJxSUlKMjIwJCQkzMzNwcHC5ublKSkpA3rVFAAADLUlEQVRoge2Z23qqMBCFYWaAEEDEWgUP1fd/yoKVJKgQu3cCvZj/Uv2yFsnKMIlBwDAMwzAMwzDMnwURCToIF1AnimSSN8fj8WNdCYRZPSBEl9U5VGTbRgLNpx5/hU8Ue5zHAcSbZ/WO+jKDAwzS02v5lk3l2wBVxah6Rw5e5WE9qd6S+tyN8GGTD8Nt4M0A5A9ap3NRnD8fPtz50qdyoHNO28LTIpPmOojkyk8GUJgq1zW1hbd7VESAamUa2HsxgAetUJfDcocgt4YB6WEJzOztgqd9jmiEY+NeH6XO2es9Zu7NvfM6BKk1X3BRPykix/IYvTG5xhK5ngDSQ4vxxSX1XiwcbwFSZf9jYmSUymXsNIJ64GxyXJ2SxukE6Mo7PS6K/ndXp/pqYTNLaQFVpJzOf3RVjzU9rs5p5dKA6ItPaplWSnr9i8MdqONn29coMw8BxKrXL62zWt9/eXSpH/f6iU2fvOhXf0W/tK1/9OlDX+Uvfzt/U3X614j+sPdlGRVVE7B2+QaM+iNXYemu4djrO+3BQPWXlgCC6pLc1n/V2kw313qjbp3qG+3PRPvR+lRdsOMGSA88NQH6hHJy3ILrBQiT0SdDobokt9PfGej3dViLMQM6pW+8J36JcfYsoteDGy36xsM9hL54KF7NAKKWD2P3+ubpN0ueTkAkd/r71Mc1jDG9rYIwGzEkymvj28k9+s/g4OonrQCI6HYJKgbq3RHJhwGMhjdfn6t8nSTl/vh8JXUYiej/QdXjXcsoGy8GID7bpe8z4CUCJN824CkDg13wxNXIoZ8MBFCO3oBmjW4UbwZ86AcQ5S8XIVtJQkgyw4Cnq0jA/eFRvW7krSJBaWzSg5cMtBCI/UqtQ/3VtMXoLgWJ4cpTBoJbyaVAVHESy6grg4a3eBYDNxM3Hj+leIYMTAHl0gbMDGyWMDBfBl5D8WlZA8MM+KoDkwaMGfDzMrIYGGRggRDS8GW0xDY0MuD8RPSOATOE1qsjHwaMQtTM9ge5gfEyWkQ/oKTfhm7/EXibPgO7BfL3YyDuGpV0mafvQBAVLvX0Pw6We3iGYRiGYRiGYRiGYRjFN+NAHQEltgPgAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
      </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {

                users && users. filter((curEle)=>{
                  if (search === "") {
                    return curEle;
                  } else {
                    return curEle.title.toLowerCase().includes(search.toLowerCase());
                  }
                })
                
                .map((curEle,i)=>{
                  return(
                    <div className="col-md-4 col-12 mx-auto" key={i}>
                    <div className="card">
                      
                      <div className="card-body">
                      <h5 className=" font-weight-bold text-center" style={{color:"red"}}>UserId:{curEle.id}</h5>
                        <h5 className="card-title font-weight-bold"  ><span style={{color:"blue"}}>title:</span> {curEle.title}</h5>
                        
                        <p className="card-text"><span className=' font-weight-bold' style={{color:"blue"}}>Body:</span> 
                       {curEle.body}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  )
                })
              }
   
   
  </div>
          </div>
        </div>
        </div>
  </>
  )
}

export default Blog
