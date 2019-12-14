import React , { useEffect  , useState} from 'react';
import './CreateQuestion.css';





export default function CreateQuestion() {



   const [qboxh , setqboxh] = useState(0);
   const [qboxw , setqboxw] = useState(0);

 
    
    useEffect(() => {

        function handleResize() {
            setqboxh(document.getElementById('questionBoxEl').clientHeight);
            setqboxw(document.getElementById('questionBoxEl').clientWidth);

        }
      
          window.addEventListener('resize', handleResize)




      setqboxh(document.getElementById('questionBoxEl').clientHeight);

      setqboxw(document.getElementById('questionBoxEl').clientWidth);
    } , [qboxh , qboxw] );


    return (
        <div className = "container">
            <div id = "questionBoxEl" className = "questionBox">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dignissimos iis quasi nobis laudantium sint alias ad. atione. Dolorum eius, minus, aliquid dolore nam reiciendis magni pariatur aut aperiam iure placeat officiis maxime blanditiis. Facilis placeat, officia sint sit autem veritatis vitae, hic, temporibus pariatur s vel numquam adipisci, recusandae  rem atque? Maxime eligendi vero laboriosam ab, dolores illo. Quam sunt alias modi ut tempore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum doloremque repellat nam quibusdam pariatur obcaecati omnis hic saepe recusandae iure inventore suscipit, nesciunt reiciendis et laboriosam unde, sit accusantium deleniti. Repellendus voluptas  sed excepturi saepe inventore culpa voluptates.</p>
            <i style = {{bottom : qboxh - 20 , left: qboxw - 70 }} className="fa fa-pencil" aria-hidden="true"></i>

            </div>

        </div>
    )
}
