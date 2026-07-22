import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {

                this.setState({
                    posts: data
                });

            });

    }

    componentDidMount() {

        this.loadPosts();

    }

    componentDidCatch(error) {

        alert(error);

    }

    render() {

        return (

            <div>

                <h1>Blog Posts</h1>

                {

                    this.state.posts.map(post => (

                        <div
                            key={post.id}
                            style={{
                                border: "1px solid gray",
                                margin: "10px",
                                padding: "10px"
                            }}
                        >

                            <h3>{post.title}</h3>

                            <p>{post.body}</p>

                        </div>

                    ))

                }

            </div>

        );

    }

}

export default Posts;