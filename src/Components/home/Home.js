import React, { useContext, } from "react";
import { Link, } from "react-router-dom";
import { CategoryContext } from "../context/Context";
import Footer from "../footer/Footer";

const Home = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/nature/13" className="one"><img src="https://th.bing.com/th/id/R.8c7bd339217bf76e0087add6ee6a33c5?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0" alt="" /><div className="onet">Colors are the smiles of nature.</div></Link>
        {category.filter((disp)=>disp.id==="10").map((job)=>(<Link to={`/jobs/${job.id}`} className="two"><img src={job.img} alt="" height={"250px"} width={"480px"}/><div className="twot"> Hyderabad:<br />  Good news for job seekers </div></Link>))}
        {category.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/technology/${tec.id}`} className="three"><img src={tec.img} alt="" /><div className="threet"> Backend <br/> Developer </div></Link>))}
      </div>
      
      <div>
        <div>Recent News</div>
        <hr className="hlhr"/>
        <div className="flex2">
          <div className="hc1">
            {category.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/tollywood/${latest.id}`}  key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
              <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
          <div className="hc1">
           {category.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/technology/${latest.id}`}  key={category.id} className="hcc1">
                <div className="himg"><img src={latest.img} alt="" /></div>
                <div className="c1h3"><h3>{latest.det}</h3></div>
                <div className="c1h5"><h5>{latest.date}</h5></div>
                <div className="c1h4"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
            <div className="hc1">
              {category.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/jobs/${latest.id}`}  key={category.id} className="hcc1">
                  <div className="himg"><img src={latest.img} alt="" /></div>
                  <div className="c1h3"><h3>{latest.det}</h3></div>
                  <div className="c1h5"><h5>{latest.date}</h5></div>
                  <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://www.tollywood.net/wp-content/uploads/2021/04/Akhanda-teaser-crosses-40-Million-views.jpg" className="advr" alt="" /></div><br/>
            
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/tollywood/${latest.id}`}  key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/technology/${latest.id}`}  key={category.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
            <div className="c1h7"><h4>Category: {latest.category}</h4></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/nature/${latest.id}`} key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
              <div className="c1h7"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;