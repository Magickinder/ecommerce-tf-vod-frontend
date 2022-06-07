import "./styles/CommentContainer.css";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import StarIcon from '@mui/icons-material/Star';
import SvgIcon from '@mui/material/SvgIcon';

export default function CommentContainer(props) {
    return(
        <Paper elevation={5} className="comment-container">
            <div className="comment-top-container">
                <p className="user-name">User: {props.username}</p>
                <div className="user-rate-container">
                    <SvgIcon>
                        <StarIcon/>
                    </SvgIcon>
                    <p className="user-rating">10</p>
                </div>
            </div>
            <div className="comment-message">
                {props.comment}
            </div>
        </Paper>
    );
}