function ImageComponent(props) {
    console.log(props,'lkk')
    return (
        <div>
            {
                props.srcData.data.map(img =>{
                    <img src={img.path} height="350"/>
                })
            }
        </div>
    )
}

export default ImageComponent;