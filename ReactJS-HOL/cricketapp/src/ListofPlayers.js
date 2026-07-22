function ListofPlayers() {

    const players = [

        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 68 },
        { name: "KL Rahul", score: 75 },
        { name: "Hardik Pandya", score: 60 },
        { name: "Ravindra Jadeja", score: 72 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 30 },
        { name: "Kuldeep Yadav", score: 65 },
        { name: "Mohammed Siraj", score: 50 }

    ];

    const below70 = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {

                players.map((player, index) => (

                    <p key={index}>

                        {player.name} - {player.score}

                    </p>

                ))

            }

            <h2>Players Scoring Below 70</h2>

            {

                below70.map((player, index) => (

                    <p key={index}>

                        {player.name} - {player.score}

                    </p>

                ))

            }

        </div>

    );

}

export default ListofPlayers;