export default function Card(props) {
    
    const emoji = props.emoji;
    const title = props.title;
    const content = props.content;


      return(
       <article className="card">
         <span className="emoji">{emoji}</span>
         <h1 className="title">{title}</h1>
         <p className="content">{content}</p>
       </article>
    );
  }