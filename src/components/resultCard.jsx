function ResultCard(props){
    // const {id, title} = props.result;
    const{result} = props;
    const {id, title, category,images} = result;
    return <div className="p-2 flex flex-col bg-slate-500 rounded-md">
        <img className="object-contain h-40" src={images[0]} alt={title}/>
        <span>{id}</span>
        <span>{title}</span>
        <span>{category}</span>
    </div>
}

export default ResultCard;