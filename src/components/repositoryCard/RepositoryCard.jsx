import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import * as githubColors from '../utils/githubLanguageColors';
import './RepositoryCard.sass';

const RepositoryCard = (props) => {
    return (
        <div className="card-container">
            <a className="card-name" href={props.nameLink}>{props.name}</a>
            {props.description &&
                <p className="card-description">
                    {props.description.length > 117 ? `${props.description.slice(0, 118)}...` : props.description}
                </p>
            }
            <div className="bottom-wrapper">
                <a className="stars-container" href={`${props.nameLink}/stargazers`}>
                    <StarIcon/>
                    {props.stars}
                </a>
                {props.language &&
                    <div className="language-container">
                        <span
                            className="language-color"
                            style={{
                                backgroundColor: githubColors.default[props.language] ?
                                    githubColors.default[props.language].color : null
                            }}
                        />
                        {props.language}
                    </div>
                }
                {props.license && props.license !== "Other" &&
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