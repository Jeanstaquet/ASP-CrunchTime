import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './explore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/images/img1.jpeg'
const Explore = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/first').then((resp) => {
            const { data } = resp.data
            setData(data)
        })
    }, [])
    console.log(data)
    return (
        <div className="container_Explore">
            <div className="banner_Explore">
                <div className="banner_titleContainer_Explore">
                    <div className="bannerIcon_Explore">CT</div>
                    <div className="bannerTitle_Explore">Explore</div>
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="buttons_Explore">
                <div>Newest first</div>
                <button>FIND A RECIPE</button>
            </div>
            <div className="recipeListTop_Explore">
                <div className="recipeItemTop_Explore">
                    <img src={data && data.imageURL} alt="placeholder" />
                    <div className="recipeItemTitleTop_Explore">
                        {data && data.name}
                    </div>
                    <div className="recipeItemDescTop_Explore">Description</div>
                    <div className="recipeItemStarContTop_Explore">
                        <div className="stars_Explore">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div>1234</div>
                    </div>
                </div>
                <div className="recipeItemTop_Explore">
                    <img src={img1} alt="placeholder" />
                    <div className="recipeItemTitleTop_Explore">
                        Chicken Curry
                    </div>
                    <div className="recipeItemDescTop_Explore">Description</div>
                    <div className="recipeItemStarContTop_Explore">
                        <div className="stars_Explore">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div>1234</div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="recipeListMid_Explore">
                <div className="recipeItemMid_Explore">
                    <img src={img1} alt="placeholder" />
                    <div>Seasonal Recipies</div>
                </div>
                <div className="recipeItemMid_Explore">
                    <img src={img1} alt="placeholder" />
                    <div>Seasonal Recipies</div>
                </div>
                <div className="recipeItemMid_Explore">
                    <img src={img1} alt="placeholder" />
                    <div>Seasonal Recipies</div>
                </div>
            </div>
            <hr></hr>
            <div className="recipeListBottom_Explore">
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
                <img src={img1} alt="placeholder" />
            </div>
        </div>
    )
}

export default Explore
