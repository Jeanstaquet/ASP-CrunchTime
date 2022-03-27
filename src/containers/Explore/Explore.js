import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './explore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
const Explore = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            axios.get('http://localhost:3001/recipies').then((resp) => {
                const { data } = resp
                setData(data)
            })
        } catch (error) {
            setData({
                name: '',
                imgURL: '',
                type: '',
                stars: 0,
            })
        }
    }, [])

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
                    <img
                        src={data.length && data[0].imgURL}
                        alt="placeholder"
                    />
                    <div className="recipeItemTitleTop_Explore">
                        {data.length && data[0].name}
                    </div>
                    <div className="recipeItemDescTop_Explore">
                        {data.length &&
                            data[0].description
                                .split(' ')
                                .slice(0, 50)
                                .join(' ')}
                    </div>
                    <div className="recipeItemStarContTop_Explore">
                        <div className="stars_Explore">
                            {data.length &&
                                new Array(data[0].stars)
                                    .fill(0)
                                    .map((x, idx) => (
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            key={idx}
                                        />
                                    ))}
                        </div>
                        <div>{data.length && data[0].type}</div>
                    </div>
                </div>
                <div className="recipeItemTop_Explore">
                    <img
                        src={data.length && data[1].imgURL}
                        alt="placeholder"
                    />
                    <div className="recipeItemTitleTop_Explore">
                        {data.length && data[1].name}
                    </div>
                    <div className="recipeItemDescTop_Explore">
                        {data.length &&
                            data[1].description
                                .split(' ')
                                .slice(0, 50)
                                .join(' ')}
                    </div>
                    <div className="recipeItemStarContTop_Explore">
                        <div className="stars_Explore">
                            {data.length &&
                                new Array(data[1].stars)
                                    .fill(0)
                                    .map((x, idx) => (
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            key={idx}
                                        />
                                    ))}
                        </div>
                        <div>{data.length && data[1].type}</div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="recipeListMid_Explore">
                <div className="recipeItemMid_Explore">
                    <img
                        src={data.length && data[2].imgURL}
                        alt="placeholder"
                    />
                    <div>{data.length && data[2].name}</div>
                </div>
                <div className="recipeItemMid_Explore">
                    <img
                        src={data.length && data[3].imgURL}
                        alt="placeholder"
                    />
                    <div>{data.length && data[3].name}</div>
                </div>
                <div className="recipeItemMid_Explore">
                    <img
                        src={data.length && data[4].imgURL}
                        alt="placeholder"
                    />
                    <div>{data.length && data[4].name}</div>
                </div>
            </div>
            <hr></hr>
            <div className="recipeListBottom_Explore">
                {data.length &&
                    data.map((r, idx) => (
                        <img src={r.imgURL} key={idx} alt="placeholder" />
                    ))}
            </div>
        </div>
    )
}

export default Explore
