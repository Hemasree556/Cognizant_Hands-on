import officeImage from "./Images/office.jpg";

function App() {

  const office = {
    name: "Smart Tech Office",
    rent: 55000,
    address: "Madhapur, Hyderabad"
  };

  const officeList = [
    {
      id: 1,
      name: "Tech Park",
      rent: 45000,
      address: "Hyderabad"
    },
    {
      id: 2,
      name: "Cyber Towers",
      rent: 70000,
      address: "Bangalore"
    },
    {
      id: 3,
      name: "Innovation Hub",
      rent: 62000,
      address: "Chennai"
    },
    {
      id: 4,
      name: "Business Center",
      rent: 58000,
      address: "Pune"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
      />

      <hr />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>

        <span
          style={{
            color:
              office.rent < 60000
                ? "red"
                : "green"
          }}
        >
          ₹ {office.rent}
        </span>

      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {

        officeList.map((item) => (

          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <h3>{item.name}</h3>

            <p>

              <b>Rent:</b>

              <span
                style={{
                  color:
                    item.rent < 60000
                      ? "red"
                      : "green"
                }}
              >

                ₹ {item.rent}

              </span>

            </p>

            <p>

              <b>Address:</b>

              {item.address}

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default App;