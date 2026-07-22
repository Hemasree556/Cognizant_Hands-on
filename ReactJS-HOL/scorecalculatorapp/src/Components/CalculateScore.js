import "../Stylesheets/mystyle.css";

function CalculateScore(props)
{
    const average = props.total / props.goal;

    return(
        <div className="container">

            <h2>Student Score Calculator</h2>

            <p>Name : {props.name}</p>

            <p>School : {props.school}</p>

            <p>Total Marks : {props.total}</p>

            <p>Goal : {props.goal}</p>

            <p>Average Score : {average}</p>

        </div>
    );
}

export default CalculateScore;