import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;

    const showBlogs = true;

    const showCourses = false;

    let courseComponent;

    // Element Variable
    if (showCourses) {

        courseComponent = <CourseDetails />;

    }

    else {

        courseComponent = <h3>Course Details Hidden</h3>;

    }

    return (

        <div style={{ padding: "20px" }}>

            <h1>Blogger App</h1>

            {/* Logical && Rendering */}

            {

                showBooks && <BookDetails />

            }

            <hr />

            {/* Ternary Operator */}

            {

                showBlogs

                    ?

                    <BlogDetails />

                    :

                    <h3>No Blogs Available</h3>

            }

            <hr />

            {/* Element Variable */}

            {

                courseComponent

            }

        </div>

    );

}

export default App;