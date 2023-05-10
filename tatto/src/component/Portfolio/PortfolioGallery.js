import "./PortfolioGallery.scss";
import {useEffect, useState} from "react"
import { galleryPostsOneToSix, galleryPostsSevenToTwelve, galleryPosts } from "../Library";
import ButtonLoad from "../ButttonLoadMore";

export const PortfolioGallery = () => {


    const [quantity, setQuantity] = useState(6);
    

    const firstPosts = (arr, count) => {
        let elements = [];
        for (let index = 0; index < count; index++) {
            elements.push(arr[index]);
        }
        
        return elements;
    }

    const newSixPosts = (arr, count, length) => {
        let elements = [];
        for (let index = count - 1; index < length; index++) {
            elements.push(arr[index]);
        }
        return elements;
    }

    const gall6Posts = firstPosts(galleryPosts, quantity);
    const getNewPosts = newSixPosts(gall6Posts, quantity, 12)

    const [post, setPost] = useState([...gall6Posts]);

    // первые 6 постов при загрузке страницы
    const getPosts = (post) => {
        return post.map((item, i) => {
            return (
                <div
                    className="gallery__item"
                    key={i + 465}
                    style={{ backgroundImage: `url(${item.img})` }}
                >
                    <h4>{item.title}</h4>
                    <p>{item.descr}</p>
                </div>
            );
        });
    };

    const addPost = (newPosts) => setPost((post) => [...post, ...newPosts]);

    useEffect(()=> {
        
    }, [post])

    return (
        <>
            <section className="gallery">
                <div className="gallery__items">
                    {getPosts(post)}
                </div>
            </section>
            <div className="down-btn" onClick={() => newSixPosts(gall6Posts, quantity, 12)} ><button>Load more</button></div>;
            {/* <ButtonLoad getElements={() => addPost(getNewPosts)} elements={() => addPost(getNewPosts)}/> */}
        </>
    );
};
