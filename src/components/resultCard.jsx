function ResultCard(props){
    // const {id, title} = props.result;
    const{result} = props;
    const {title, category, images} = result;
    return <div className="p-3 flex flex-col items-center gap-1 bg-slate-500 rounded-md w-60  ">

        <img className="object-contain h-36  " src={images[0]} alt={title}/>
        <span className=" " >{title}</span>
        <span>{category}</span>

    </div>
}

export default ResultCard;