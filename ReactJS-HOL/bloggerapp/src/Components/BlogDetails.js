function BlogDetails() {

    const blogs = [

        {
            id: 1,
            title: "Introduction to React"
        },

        {
            id: 2,
            title: "React Router Tutorial"
        },

        {
            id: 3,
            title: "React Hooks"
        }

    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map((blog) => (

                        <li key={blog.id}>

                            {blog.title}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BlogDetails;