function ResultCard(props){
    // const {id, title} = props.result;
    const{result} = props;
    const {id, title, category} = result;
    return <div className="p-2 bg-slate-500 rounded-md">
        <span>{id}</span>
        <span>{title}</span>
        <span>{category}</span>
    </div>
}

export default ResultCard;