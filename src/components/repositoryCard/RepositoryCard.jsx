import React, {useState} from 'react';
import StarIcon from '@material-ui/icons/Star';

const RepositoryCard = (props) => {
    return (
        <div className="card-container">
            <div className="card-name-wrapper">
                <a className="card-name" href={props.nameLink}>{props.name}</a>
            </div>
            {props.description &&
                <p className="card-description">
                    {props.description.length > 117 ? `${props.description.slice(0, 118)}...` : props.description}
                </p>
            }
            <div className="bottom-wrapper">
                <div className="stars-container">
                    <StarIcon />
                    {props.stars}
                </div>
                <div className="language">
                    {props.language}
                </div>
                {props.license &&
                    <div className="license">
                        {props.license}
                    </div>
                }
                <div className="updatedAt">
                    {`Updated ${props.updatedAt}`}
                </div>
            </div>
        </div>
    );
};

export default RepositoryCard;