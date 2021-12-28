import CircleImage from './CircleStructure.png'
import CircleMeeting from './CircleMeeting.png'
const Circle = () => {
    return ( 
        <div className="circle">
            <h2>Members of Circle</h2>
            <img src = {CircleImage} className = "circleimage" alt="circle members" />
            <img src = {CircleMeeting} className="circleimage" alt="circle members together" />
        </div>
     );
}
 
export default Circle;