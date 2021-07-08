import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle ('Hi, My name is Victor', 'I have build this React Application for users to explore.')}
            {newsArticle ('Interested in Software Builds?', 'Email me @ victor.okwong@gmail.com and i\'ll be sure to respond')}
            {newsArticle ('Interested in Software Builds?', 'Email me @ victor.okwong@gmail.com and i\'ll be sure to respond')}
            {newsArticle ('Interested in Software Builds?', 'Email me @ victor.okwong@gmail.com and i\'ll be sure to respond')}
            {newsArticle ('Interested in Software Builds?', 'Email me @ victor.okwong@gmail.com and i\'ll be sure to respond')}
        </div>
    )
}

export default Widgets
