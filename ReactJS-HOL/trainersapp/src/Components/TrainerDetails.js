import { useParams } from "react-router-dom";
import TrainersMock from "../TrainersMock";

function TrainerDetails() {

    const { id } = useParams();

    const trainer =
        TrainersMock.find(
            (t) => t.trainerId === parseInt(id)
        );

    if (!trainer) {

        return <h2>Trainer Not Found</h2>;

    }

    return (

        <div>

            <h2>Trainer Details</h2>

            <p>
                <b>ID:</b> {trainer.trainerId}
            </p>

            <p>
                <b>Name:</b> {trainer.name}
            </p>

            <p>
                <b>Email:</b> {trainer.email}
            </p>

            <p>
                <b>Phone:</b> {trainer.phone}
            </p>

            <p>
                <b>Technology:</b> {trainer.technology}
            </p>

            <p>
                <b>Skills:</b> {trainer.skills}
            </p>

        </div>

    );

}

export default TrainerDetails;