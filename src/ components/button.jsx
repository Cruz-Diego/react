export default function Button(props) {
    
    const content = props.content;
      
    return(
      <button>
        <p className="content">{content}</p>
      </button>
    );
  }