import CircleImage from './CircleStructure.png'
const Circle = () => {
    return ( 
        <div className="circle">
            <h2>Members of Circle</h2>
            <img src = {CircleImage} className = "circleimage" alt="circle members" />
        </div>
     );
}
 
export default Circle;