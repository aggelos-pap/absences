import React from 'react'
import "./widget.scss";
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';

const Widget = ({ type }) => {

    let data;

    let totalUsers = 321;
    let totalLessons = 34;
    let totalCategories = 12;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                amount: totalUsers,
                link:"See all users",
                description: "Registered users",
                icon: <GroupIcon className="icon" style={{color:"#6439ff"}}/>,
                
                };
                break;

        case "lesson":
            data = {
                title: "LESSONS",
                amount: totalLessons,
                link:"See all lessons",
                description: "Registered lessons",
                icon: <PlayLessonIcon className="icon" style={{color:"#6439ff"}}/>,
               
                };
                break;
        case "category":
            data = {
                title: "CATEGORIES",
                amount: totalCategories,
                link:"See all categories",
                description: "Registered categories",
                icon: <CategoryIcon className="icon" style={{color:"#6439ff"}}/>,
                };
                break;
                default:
                    break;
            


                
            }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="amount">{data.amount} </span>
            <span className="link">{data.link} </span>
        </div>
        <div className="right">
            <span className="description ">
                {data.icon}
                {data.description}
            </span>
        </div>

    </div>
  )
}

export default Widget