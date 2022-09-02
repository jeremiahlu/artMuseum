import { useParams } from 'react-router-dom';

const GalleryView = ({galleries}) => {
    
    const galleryArr = gallery.objects;
    galleryArr.map((artworks) => {
        <ArtImageTile art={artworks}/>
    })
    
    const { galleryId } = useParams(); //useParams returns a string
    console.log(galleries)
    const gallery = galleries.find(( {id} ) => id === Number(galleryId))
    console.log("Galleries HERE ^")
    console.log(gallery)
    return (
        <>
            <h1> Hello from GalleryView </h1>
            <h2> {gallery.name} </h2>
        </>
    )
}

export default GalleryView